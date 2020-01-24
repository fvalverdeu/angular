import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UserTest, IProfile, ICampaign, UserModel } from '@portal/core/models';
import { SessionService, BusinessService } from '@portal/core/services';
import { CampaignService } from 'projects/core/src/lib/graphql/campaign.service';
import {ISalesRequest, SalesRequest} from '../../../../models/request/sales-request.interface';
import { SalesService } from '../../../graphql/sales.service';
import { SaleCatalogUI, SaleActivityUI, SaleCapitalizeUI, SaleGoalUI, SalePegUI } from '../../../../models/ui/sales-ui.interface';
import { removeCharacter } from '@portal/core/utils';
import {ECountry, UserRolEnum} from '@portal/core/constants';
import { ProfileService } from '@portal/core/graphql';
import {
  ISaleCatalogUI,
  ISaleActivityUI,
  ISaleCapitalizeUI,
  ISaleGoalUI,
  ISalePegUI,
  ISaleOrderGzUI, ISalesOrdersUI, ISaleUI, IOrderUI, IActivityUI, ISaleOrderUI
} from '../../../../models/ui/sales-ui.interface';
import {ISalesOrders, ISalesResponse} from '../../../../models/response/sales-response.interface';


@Component({
  selector: 'app-sales-header-se',
  templateUrl: './sales-header-se.component.html',
  styleUrls: ['./sales-header-se.component.scss']
})
export class SalesHeaderSEComponent implements OnInit {
  @Input() sectionCode: string;
  profile: IProfile;
  campaign: ICampaign;
  role: string;

  saleCatalogUI = new SaleCatalogUI();
  saleActivityUI = new SaleActivityUI();
  saleCapitalizeUI = new SaleCapitalizeUI();
  saleGoalUI = new SaleGoalUI();
  salePegUI = new SalePegUI();
  phase: string;
  dop: boolean;
  userTest: UserTest;

  saleOrderGzUI: ISaleOrderGzUI;
  salesOrdersUI: ISalesOrdersUI;

  constructor(
    private salesService: SalesService,
    private sessionService: SessionService,
    private campaignService: CampaignService,
    private profileService: ProfileService,
    private businessService: BusinessService
  ) {
    this.sectionCode = '';
  }

  get isSale() {
    return this.businessService.isSale;
  }

  get isBrightRoad() {
    return this.businessService.isBrightRoad(false);
  }

  get isSE() {
    if (this.sectionCode.length != 0) {
      return true;
    } else {
      const userProfile = this.sessionService.getProfile();
      return userProfile.cod_role === UserRolEnum.SOCIA_EMPRESARIA;
    }
  }

  ngOnInit() {
    this.profile = this.sessionService.getProfile();
    if (this.sectionCode.length != 0) {
      this.profile.section = this.sectionCode;
      this.profile.cod_role = UserRolEnum.SOCIA_EMPRESARIA;
    }
    this.getSEKpiSalesOrders(this.profile);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.profile = this.sessionService.getProfile();
    if (this.sectionCode.length != 0) {
      this.profile.section = this.sectionCode;
      this.profile.cod_role = UserRolEnum.SOCIA_EMPRESARIA;
    }
    this.getSEKpiSalesOrders(this.profile);
  }

  protected getSEKpiSalesOrders(profile: IProfile) {
    const campaign = this.sessionService.getCampaign();
    const request = new SalesRequest(profile, campaign, false, false, false);
    this.salesService.getKpiSales(request).subscribe(res => {
      if (res.KpiSalesOrders.length > 0) {
        const kpiSalesCurrent = res.KpiSalesOrders.filter(x => x.campaign === campaign.current_campaign)[0];
        const kpiSalesPrevious = res.KpiSalesOrders.filter(x => x.campaign === campaign.previous_campaign)[0];
        if (this.isSale) {
          this.saleCatalogUI.previousCampaign = removeCharacter(campaign.previous_campaign_short, '-');
          this.saleCatalogUI.saleCatalog = kpiSalesPrevious.sales.catalog_sale;
          this.saleCatalogUI.orders = kpiSalesPrevious.orders.orders;
          // Normal Country
          this.saleCatalogUI.ordersGoal = kpiSalesPrevious.orders.orders_goal;
          this.saleCatalogUI.ordersFulfillment = kpiSalesPrevious.orders.fulfillments_vs_ordersobjective;

          // Road Bright Country
          this.saleCatalogUI.saleGoal = kpiSalesPrevious.sales.catalog_sale_goal;
          this.saleCatalogUI.saleFulfillment = kpiSalesPrevious.sales.fulfillments_vs_catalogsales;

          this.saleCatalogUI.orderAverage = kpiSalesPrevious.orders.orders_average;
          console.log('saleCatalogUI', this.saleCatalogUI);

          this.saleActivityUI.total = kpiSalesPrevious.activity.activity_percentage;
          this.saleActivityUI.activityFinals = kpiSalesPrevious.activity.finals_active;
          this.saleActivityUI.pegs = kpiSalesPrevious.pegs.pegs;
          this.saleActivityUI.totalRetention = kpiSalesPrevious.activity.percentage_actives_retention;
          this.saleActivityUI.activityFinalsLastYear = kpiSalesPrevious.activity.finals_active_lastyear;
          this.saleActivityUI.activityFinalsPrevious = kpiSalesPrevious.activity.finals_active;

          const anio = new Date().getFullYear();
          // profile.cod_country = 'PR';
          this.saleActivityUI.previousCampaignAndYear = removeCharacter(campaign.previous_campaign_short, '-') + ' - ' + anio.toString();
          if (profile.cod_country === ECountry.PUERTO_RICO) {
            this.saleActivityUI.finalCampaignLastYear = 'C13 - ' + (anio - 1).toString();
          } else {
            this.saleActivityUI.finalCampaignLastYear = 'C18 - ' + anio.toString();
          }
          // this.saleActivityUI.finalCampaignLastYear = profile.cod_country === ECountry.PUERTO_RICO ? 'C13 - ' + (anio - 1).toString() : 'C18 - ' + anio.toString();
          console.log('saleActivityUI', this.saleActivityUI);

          this.saleCapitalizeUI.total = kpiSalesPrevious.capitalization.capitalization;
          this.saleCapitalizeUI.incomes = kpiSalesPrevious.capitalization.incomes;
          this.saleCapitalizeUI.reentries = kpiSalesPrevious.capitalization.reentries;
          this.saleCapitalizeUI.expenses = kpiSalesPrevious.capitalization.expenses;
          console.log('saleCapitalizeUI', this.saleCapitalizeUI);

          this.saleGoalUI.currentCampaign = removeCharacter(campaign.current_campaign_short, '-');
          // Normal country
          this.saleGoalUI.ordersGoalCurrent = kpiSalesCurrent.orders.orders_goal;
          // Road bright country
          this.saleGoalUI.saleGoalCurrent = kpiSalesCurrent.sales.catalog_sale_goal;

          console.log('saleGoalUI', this.saleGoalUI);
        } else {
          this.saleCatalogUI.currentCampaign = removeCharacter(campaign.current_campaign_short, '-');
          this.saleCatalogUI.saleCatalog = kpiSalesCurrent.sales.catalog_sale ? kpiSalesCurrent.sales.catalog_sale : 0;
          this.saleCatalogUI.orders = kpiSalesCurrent.orders.orders;
          // Normal country
          this.saleCatalogUI.ordersGoal = kpiSalesCurrent.orders.orders_goal;
          this.saleCatalogUI.ordersFulfillment = kpiSalesCurrent.orders.fulfillments_vs_ordersobjective;

          // Road bright country
          this.saleCatalogUI.saleGoal = kpiSalesCurrent.sales.catalog_sale_goal;
          this.saleCatalogUI.saleFulfillment = kpiSalesCurrent.sales.fulfillments_vs_catalogsales;

          this.saleCatalogUI.orderAverage = kpiSalesCurrent.orders.orders_average;
          this.saleCatalogUI.highValueOrders = kpiSalesCurrent.orders.high_value_orders;
          this.saleCatalogUI.lowValueOrders = kpiSalesCurrent.orders.low_value_orders;
          console.log('fact saleCatalogUI', this.saleCatalogUI);

          this.salePegUI.pegs_retention = kpiSalesCurrent.pegs.pegs_retention;
          this.salePegUI.retention_percentage_pegs = kpiSalesCurrent.pegs.retention_percentage_pegs;
          this.salePegUI.pegs_to_retain = kpiSalesCurrent.pegs.pegs_to_retain;
          this.salePegUI.totalActivity = kpiSalesCurrent.activity.activity_percentage;
          console.log('fact salePegUI', this.salePegUI);

          this.saleCapitalizeUI.incomes = kpiSalesCurrent.capitalization.incomes;
          this.saleCapitalizeUI.reentries = kpiSalesCurrent.capitalization.reentries;
          this.saleCapitalizeUI.expenses = kpiSalesCurrent.capitalization.expenses;
          console.log('fact saleCapitalizeUI', this.saleCapitalizeUI);
        }
      }
    });
  }
}
