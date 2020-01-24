import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../../graphql/sales.service';
import {BusinessService, EventService, SessionService} from '@portal/core/services';
import { ISalesOrdersUI } from '../../../../../models/ui/salesorders-ui.interface';
import { ISalesOrdersRequest } from '../../../../../models/request/salesorders-request.interface';
import {removeCharacter} from '@portal/core/utils';
import {Router} from '@angular/router';
import { ProfileService } from '@portal/core/graphql';

@Component({
  selector: 'app-sales-gz',
  templateUrl: './sales-gz.component.html',
  styleUrls: ['./sales-gz.component.scss']
})
export class SalesGzComponent implements OnInit {
  isGZ: boolean;
  sectionSel: string;
  levelSel: string;
  zoneSel: string;
  isSaleEqualGoal: boolean;
  isSaleLessGoal: boolean;
  isSaleGreaterGoal: boolean;
  isOrderEqualGoal: boolean;
  isOrderLessGoal: boolean;
  isOrderGreaterGoal: boolean;
  pbSale: number;
  pbOrder: number;
  currencySymbol: string;
  uiPrevious: ISalesOrdersUI = {
    campaign: '',
    net_sale: 0,
    net_sale_goal: 0,
    catalog_sale: 0,
    catalog_sale_goal: 0,
    orders: 0,
    orders_goal: 0,
  };
  uiCurrent: ISalesOrdersUI = {
    campaign: '',
    net_sale: 0,
    net_sale_goal: 0,
    catalog_sale: 0,
    catalog_sale_goal: 0,
    orders: 0,
    orders_goal: 0,
  };
  uiSaleOrder: ISalesOrdersUI = {
    campaign: '',
    net_sale: 0,
    net_sale_goal: 0,
    catalog_sale: 0,
    catalog_sale_goal: 0,
    orders: 0,
    orders_goal: 0,
  };
  title: string;
  color: string;
  size: string;

  constructor(
    private salesService: SalesService,
    private sessionService: SessionService,
    private eventService: EventService,
    private businessService: BusinessService,
    private router: Router,
    private profileService: ProfileService
  ) {
    this.isGZ = true;
    this.isSaleEqualGoal = false;
    this.isSaleLessGoal = false;
    this.isSaleGreaterGoal = false;
    this.isOrderEqualGoal = false;
    this.isOrderLessGoal = false;
    this.isOrderGreaterGoal = false;
  }

  get isSale() {
    return this.businessService.isSale;
  }

  ngOnInit() {
    this.title = 'Venta y Pedidos';
    this.size = 'xmd';
    this.color = '#000000';
    this.currencySymbol = this.sessionService.getConfiguration().currency_symbol;
    this.loadSalesOrders();
    this.eventService.changeSection.subscribe((sectionCode: string) => {
      if (sectionCode) {
        const profile = this.sessionService.getProfile();
        const user = this.sessionService.getUser();
        user.section = sectionCode;
        user.region = profile.cod_region;
        user.zone = profile.cod_zone;
        this.profileService
        .getProfileByUA(user)
        .subscribe(res => {
          this.levelSel = res.ProfileByUA.level_code;
          this.zoneSel = res.ProfileByUA.cod_zone ? '' : profile.cod_zone;
          this.sectionSel = sectionCode;
          this.isGZ = false;
        });

      } else {
        this.sectionSel = '';
        this.levelSel = '';
        this.zoneSel = '';
        this.isGZ = true;
      }
    });
  }

  protected loadSalesOrders() {
    const profile = this.sessionService.getProfile();
    const campaign = this.sessionService.getCampaign();
    // const campFilter = !this.sale ? ['201917'] : ['201917', '201916'];
    // const req: ISalesOrdersRequest = {
    //   country: profile.cod_country,
    //   campaign: campFilter,
    //   profile:  profile.cod_role,
    //   region: '06', // profile.cod_region,
    //   zone: '0611', // profile.cod_zone,
    //   section: '', // profile.section,
    //   show_regions: false,
    //   show_zones: false,
    //   show_section: false
    // };
    const campFilter = !this.isSale ? [campaign.current_campaign] : [campaign.current_campaign, campaign.previous_campaign];
    const req: ISalesOrdersRequest = {
      country: profile.cod_country,
      campaign: campFilter,
      profile: profile.cod_role,
      region: profile.cod_region,
      zone: profile.cod_zone,
      section: profile.section,
      show_regions: false,
      show_zones: false,
      show_section: false
    };

    this.salesService.getSalesOrders(req).subscribe(res => {
    if (this.isSale) {
        const currentCampaign = res.KpiSalesOrders.filter(x => x.campaign === campaign.current_campaign)[0];
        const previousCampaign = res.KpiSalesOrders.filter(x => x.campaign === campaign.previous_campaign)[0];
        this.uiCurrent = {
          campaign: removeCharacter(campaign.current_campaign_short, '-'),
          orders_goal: currentCampaign.orders.orders_goal,
          net_sale_goal: currentCampaign.sales.net_sale_goal
        };
        this.uiPrevious = {
          campaign: removeCharacter(campaign.previous_campaign_short, '-'),
          orders: previousCampaign.orders.orders,
          net_sale: previousCampaign.sales.net_sale
        };
      } else {
        const currentCampaign = res.KpiSalesOrders[0];

        if (currentCampaign.sales.net_sale === currentCampaign.sales.net_sale_goal) {
          this.isSaleEqualGoal = true;
          this.pbSale = 100;
          this.uiSaleOrder.campaign = removeCharacter(campaign.current_campaign_short, '-');
          this.uiSaleOrder.net_sale = currentCampaign.sales.net_sale;
          this.uiSaleOrder.net_sale_goal = currentCampaign.sales.net_sale_goal;
          // this.uiSaleOrder = {
          //   campaign: removeCharacter(campaign.current_campaign_short, '-'),
          //   net_sale: currentCampaign.sales.net_sale,
          //   net_sale_goal: currentCampaign.sales.net_sale_goal
          // };
        } else if (currentCampaign.sales.net_sale < currentCampaign.sales.net_sale_goal) {
          this.isSaleLessGoal = true;
          this.pbSale = (currentCampaign.sales.net_sale / currentCampaign.sales.net_sale_goal) * 100;
          this.uiSaleOrder.campaign = removeCharacter(campaign.current_campaign_short, '-');
          this.uiSaleOrder.net_sale = currentCampaign.sales.net_sale_goal - currentCampaign.sales.net_sale;
          this.uiSaleOrder.net_sale_goal = currentCampaign.sales.net_sale_goal;
          // this.uiSaleOrder = {
          //   campaign: removeCharacter(campaign.current_campaign_short, '-'),
          //   net_sale: currentCampaign.sales.net_sale_goal - currentCampaign.sales.net_sale,
          //   net_sale_goal: currentCampaign.sales.net_sale_goal
          // };
        } else if (currentCampaign.sales.net_sale > currentCampaign.sales.net_sale_goal) {
          this.isSaleGreaterGoal = true;
          this.pbSale = 100;
          this.uiSaleOrder.campaign = removeCharacter(campaign.current_campaign_short, '-');
          this.uiSaleOrder.net_sale = currentCampaign.sales.net_sale - currentCampaign.sales.net_sale_goal;
          this.uiSaleOrder.net_sale_goal = currentCampaign.sales.net_sale_goal;
          // this.uiSaleOrder = {
          //   campaign: removeCharacter(campaign.current_campaign_short, '-'),
          //   net_sale: currentCampaign.sales.net_sale - currentCampaign.sales.net_sale_goal,
          //   net_sale_goal: currentCampaign.sales.net_sale_goal
          // };
        }

        if (currentCampaign.orders.orders === currentCampaign.orders.orders_goal) {
          this.isOrderEqualGoal = true;
          this.pbOrder = 100;
          this.uiSaleOrder.campaign = removeCharacter(campaign.current_campaign_short, '-');
          this.uiSaleOrder.orders = currentCampaign.orders.orders;
          this.uiSaleOrder.orders_goal = currentCampaign.orders.orders_goal;
          // this.uiSaleOrder = {
          //   campaign: removeCharacter(campaign.current_campaign_short, '-'),
          //   orders: currentCampaign.orders.orders,
          //   orders_goal: currentCampaign.orders.orders_goal
          // };
        } else if (currentCampaign.orders.orders < currentCampaign.orders.orders_goal) {
          this.isOrderLessGoal = true;
          this.pbOrder = (currentCampaign.orders.orders / currentCampaign.orders.orders_goal) * 100;
          this.uiSaleOrder.campaign = removeCharacter(campaign.current_campaign_short, '-');
          this.uiSaleOrder.orders = currentCampaign.orders.orders_goal - currentCampaign.orders.orders;
          this.uiSaleOrder.orders_goal = currentCampaign.orders.orders_goal;
          // this.uiSaleOrder = {
          //   campaign: removeCharacter(campaign.current_campaign_short, '-'),
          //   orders: currentCampaign.orders.orders_goal - currentCampaign.orders.orders,
          //   orders_goal: currentCampaign.orders.orders_goal
          // };
        } else if (currentCampaign.orders.orders > currentCampaign.orders.orders_goal) {
          this.isOrderGreaterGoal = true;
          this.pbOrder = 100;
          this.uiSaleOrder.campaign = removeCharacter(campaign.current_campaign_short, '-');
          this.uiSaleOrder.orders = currentCampaign.orders.orders - currentCampaign.orders.orders_goal;
          this.uiSaleOrder.orders_goal = currentCampaign.orders.orders_goal;
          // this.uiSaleOrder = {
          //   campaign: removeCharacter(campaign.current_campaign_short, '-'),
          //   orders: currentCampaign.orders.orders - currentCampaign.orders.orders_goal,
          //   orders_goal: currentCampaign.orders.orders_goal
          // };
        }
      }
    });
  }
  redirectDetail() {
    this.router.navigateByUrl('/kpis/sales-gz');
  }
}
