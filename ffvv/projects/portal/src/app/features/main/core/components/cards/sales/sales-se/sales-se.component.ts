import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { SalesService } from '../../../../graphql/sales.service';
import {BusinessService, SessionService, EventService} from '@portal/core/services';
import { ISalesOrdersUI } from '../../../../../models/ui/salesorders-ui.interface';
import { ISalesOrdersRequest } from '../../../../../models/request/salesorders-request.interface';
import { Router } from '@angular/router';
import { ICampaign, IProfile } from '@portal/core/models';
import {removeCharacter} from '@portal/core/utils';
import {UserRolEnum} from '@portal/core/constants';

@Component({
  selector: 'app-sales-se',
  templateUrl: './sales-se.component.html',
  styleUrls: ['./sales-se.component.scss']
})
export class SalesSeComponent implements OnInit, OnChanges {
  @Input() sectionCode: string;
  @Input() levelCode: string;
  @Input() codZone: string;
  thirdPerson: boolean;
  title: string;
  color: string;
  sale: boolean;
  data: boolean;
  size: string;
  profile: IProfile;
  uiCurrent: ISalesOrdersUI;
  uiPrevious: ISalesOrdersUI;
  currencySymbol: string;
  lackOrders: boolean;
  reachGoal: boolean;
  overcomeGoal: boolean;
  valuePbar: number;
  campaign: ICampaign;

  constructor(
    private salesService: SalesService,
    private sessionService: SessionService,
    private businessService: BusinessService,
    private router: Router,
    private eventService: EventService
  ) {
    const campaign = this.sessionService.getCampaign();
    this.thirdPerson = false;
    this.title = 'Venta y Pedidos';
    this.size = 'xmd';
    this.color = '#000000';
    this.data = true;
    this.sale = false;
    this.lackOrders = false;
    this.reachGoal = false;
    this.overcomeGoal = false;
    this.valuePbar = 0;
    this.uiCurrent = {
      campaign: removeCharacter(campaign.current_campaign_short, '-'),
      orders_goal: 0,
      catalog_sale_goal: 0
    };
    this.uiPrevious = {
      campaign: removeCharacter(campaign.previous_campaign_short, '-'),
      orders_goal: 0,
      catalog_sale_goal: 0
    };
    this.currencySymbol = this.sessionService.getConfiguration().currency_symbol;
  }

  get isSale() {
    return  this.businessService.isSale;
  }

  get isBrightRoad() {
    return this.businessService.isBrightRoad(!!this.sectionCode, this.levelCode, this.codZone);
  }

  ngOnInit() {
    if (this.sectionCode) {
      this.thirdPerson = true;
    }
    this.loadSalesOrders();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sectionCode.previousValue) {
      this.lackOrders = false;
      this.reachGoal = false;
      this.overcomeGoal = false;
      this.thirdPerson = true;
      this.loadSalesOrders();
    }
  }

  protected loadSalesOrders() {
    const campaign = this.sessionService.getCampaign();
    const profile = this.sessionService.getProfile();

    const req: ISalesOrdersRequest = {
      country: profile.cod_country,
      campaign: [campaign.current_campaign, campaign.previous_campaign],
      profile: UserRolEnum.SOCIA_EMPRESARIA, // profile.cod_role,
      region:  profile.cod_region,
      zone: profile.cod_zone,
      section: this.sectionCode ? this.sectionCode : profile.section,
      show_regions: false,
      show_zones: false,
      show_section: false
    };

    this.salesService.getSalesOrders(req).subscribe(res => {
      console.log('sales-se getSalesOrders()', res);
      if (res.KpiSalesOrders.length > 0) {
        const currentCampaign = res.KpiSalesOrders.filter(x => x.campaign === campaign.current_campaign)[0]; //   '201918'
        const previousCampaign = res.KpiSalesOrders.filter(x => x.campaign === campaign.previous_campaign)[0]; //  '201917'
        if (this.isSale) {
          if (currentCampaign) {
            this.uiCurrent = {
              campaign: removeCharacter(campaign.current_campaign_short, '-'),
              orders_goal: currentCampaign.orders.orders_goal,
              catalog_sale_goal: currentCampaign.sales.catalog_sale_goal
            };
          }
          if (campaign.previous_campaign === null) {
            this.uiPrevious = {
              campaign: '',
              catalog_sale: 0,
              orders: 0
            };
          } else {
            this.uiPrevious = {
              campaign: removeCharacter(campaign.previous_campaign_short, '-'),
              catalog_sale: previousCampaign.sales.catalog_sale,
              orders: previousCampaign.orders.orders
            };
          }
        } else {
          console.log(this.isBrightRoad)
          if (!this.isBrightRoad) {
            if (currentCampaign.orders.orders === currentCampaign.orders.orders_goal) {
              this.reachGoal = true;
              this.valuePbar = 100;
              this.uiCurrent = {
                catalog_sale: currentCampaign.sales.catalog_sale,
                orders: currentCampaign.orders.orders
              };
            } else if (currentCampaign.orders.orders < currentCampaign.orders.orders_goal) {
              this.lackOrders = true;
              this.valuePbar = (currentCampaign.orders.orders / currentCampaign.orders.orders_goal) * 100;
              this.uiCurrent = {
                catalog_sale: currentCampaign.sales.catalog_sale,
                orders_goal: currentCampaign.orders.orders_goal,
                orders: currentCampaign.orders.orders_goal - currentCampaign.orders.orders
              };
            } else if (currentCampaign.orders.orders > currentCampaign.orders.orders_goal) {
              this.overcomeGoal = true;
              this.valuePbar = 100;
              this.uiCurrent = {
                catalog_sale: currentCampaign.sales.catalog_sale,
                orders_goal: currentCampaign.orders.orders_goal,
                orders: currentCampaign.orders.orders - currentCampaign.orders.orders_goal
              };
            }
          } else {
            if (currentCampaign.sales.catalog_sale === currentCampaign.sales.catalog_sale_goal) {
              this.reachGoal = true;
              this.valuePbar = 100;
              this.uiCurrent = {
                catalog_sale: currentCampaign.sales.catalog_sale,
                orders: currentCampaign.orders.orders
              };
            } else if (currentCampaign.sales.catalog_sale < currentCampaign.sales.catalog_sale_goal) {
              this.lackOrders = true;
              this.valuePbar = (currentCampaign.sales.catalog_sale / currentCampaign.sales.catalog_sale_goal) * 100;
              this.uiCurrent = {
                catalog_sale: currentCampaign.sales.catalog_sale_goal - currentCampaign.sales.catalog_sale,
                catalog_sale_goal: currentCampaign.sales.catalog_sale_goal,
                orders: currentCampaign.orders.orders
              };
            } else if (currentCampaign.sales.catalog_sale > currentCampaign.sales.catalog_sale_goal) {
              this.overcomeGoal = true;
              this.valuePbar = 100;
              this.uiCurrent = {
                catalog_sale: currentCampaign.sales.catalog_sale - currentCampaign.sales.catalog_sale_goal,
                catalog_sale_goal: currentCampaign.sales.catalog_sale_goal,
                orders: currentCampaign.orders.orders
              };
            }
          }
        }
        this.data = true;
      }
    });
  }

  redirectDetail() {
    if (this.sectionCode) {
      const URL = '/kpis/sales-gz/' + this.sectionCode;
      console.log(URL)
      this.router.navigateByUrl(URL);
    } else {
      this.router.navigateByUrl('/kpis/sales-se');
    }
  }
}
