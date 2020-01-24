import { Component, OnInit} from '@angular/core';
import { SalesService } from '../../../graphql/sales.service';
import { SessionService, BusinessService } from '@portal/core/services';
import { UserRolEnum } from '@portal/core/constants';
import { ISalesRequest } from '../../../../models/request/sales-request.interface';
import { ISalesResponse, ISalesOrders } from '../../../../models/response/sales-response.interface';
import {
  IOrderUI,
  IActivityUI,
  ISaleCapitalizeUI,
  ISalePegUI,
  ISaleOrderUI,
  ISaleUI,
  ISaleOrderGzUI,
  ISalesOrdersUI
} from '../../../../models/ui/sales-ui.interface';
import { removeCharacter } from '@portal/core/utils';

@Component({
  selector: 'app-sales-header-gz',
  templateUrl: './sales-header-gz.component.html',
  styleUrls: ['./sales-header-gz.component.scss']
})
export class SalesHeaderGzComponent implements OnInit {
  saleOrderGzUI: ISaleOrderGzUI;
  salesOrdersUI: ISalesOrdersUI;

  constructor(
    private salesService: SalesService,
    private sessionService: SessionService,
    private businessService: BusinessService
  ) {
    this.saleOrderGzUI = {
      netSale: 0,
      ordersGoal: 0,
      ordersAverage: 0,
      fulfillmentsVsSales: 0,
      fulfillmentsVsOrdersObjective: 0,
      fulfillmentsVsOrdersAverage: 0
    };
    this.salesOrdersUI = {
      campaign: '',
      salesOrderList: null
    };
  }

  get isSale() {
    return this.businessService.isSale;
  }

  ngOnInit() {
    this.getGZKpiSalesOrders();
  }

  protected getGZKpiSalesOrders() {
    const profile = this.sessionService.getProfile();
    const campaign = this.sessionService.getCampaign();
    const campFilter = (this.isSale ? [campaign.current_campaign, campaign.previous_campaign] : [campaign.current_campaign]);
    const request: ISalesRequest = {
      country: profile.cod_country,
      campaign: campFilter,
      profile: profile.cod_role,
      region: profile.cod_region,
      zone: profile.cod_zone,
      section: '',
      show_regions: false,
      show_zones: false,
      show_section: true
    };
    this.salesService.getKpiSales(request).subscribe((res: ISalesResponse) => {
      let order: IOrderUI;
      let activity: IActivityUI;
      let capitalization: ISaleCapitalizeUI;
      let pegs: ISalePegUI;
      const currentKpi = res.KpiSalesOrders.filter(x => x.campaign === campaign.current_campaign);
      const currentGZ = currentKpi.filter(x => x.profile === UserRolEnum.GERENTE_ZONA)[0];
      this.saleOrderGzUI.ordersGoal = currentGZ.orders.orders_goal;
      this.saleOrderGzUI.fulfillmentsVsSales = currentGZ.sales.fulfillments_vs_sales;
      this.saleOrderGzUI.fulfillmentsVsOrdersObjective = currentGZ.orders.fulfillments_vs_ordersobjective;
      this.saleOrderGzUI.fulfillmentsVsOrdersAverage = currentGZ.orders.fulfillments_vs_ordersaverage;
      if (this.isSale) {
        const previousKpi = res.KpiSalesOrders.filter(x => x.campaign === campaign.previous_campaign);
        this.salesOrdersUI.campaign = `Resultados por Sección en ${removeCharacter(campaign.previous_campaign_short, '-')}`;
        this.setData(previousKpi);
      } else {
        this.saleOrderGzUI.netSale = currentGZ.sales.net_sale;
        this.saleOrderGzUI.ordersAverage = currentGZ.orders.orders_average;
        this.salesOrdersUI.campaign = `Avance por Sección en ${removeCharacter(campaign.current_campaign_short, '-')}`;
        this.setData(currentKpi);
      }
    });
  }
  protected setData(dataKpi: ISalesOrders[]) {
    this.salesOrdersUI.salesOrderList = dataKpi.map<ISaleOrderUI>(obj => {
      let section = '';
      let sale: ISaleUI;
      if (obj.profile === UserRolEnum.GERENTE_ZONA) {
        sale = {
          netSaleCatalog: obj.sales.net_sale,
          netSaleCatalogGoal: obj.sales.net_sale_goal,
          fulfillmentsVsCatalogSales: obj.sales.fulfillments_vs_sales * 100,
          ordersAverage: obj.orders.orders_average,
        };
        section = 'Tu Zona';
      } else {
        sale = {
          netSaleCatalog: obj.sales.catalog_sale,
          netSaleCatalogGoal: obj.sales.catalog_sale_goal,
          fulfillmentsVsCatalogSales: obj.sales.fulfillments_vs_catalogsales * 100,
          ordersAverage: obj.orders.orders_average
        };
        section = obj.section;
      }
      let order: IOrderUI = {
        orders: obj.orders.orders,
        ordersGoal: obj.orders.orders_goal,
        fulfillmentsVsOrdersobjective: obj.orders.fulfillments_vs_ordersobjective * 100,
      };
      let activity: IActivityUI = {
        initialsActive: obj.activity.initials_active,
        finalsActive: obj.activity.finals_active,
        activityPercentage: obj.activity.activity_percentage * 100,
      };
      let capitalization: ISaleCapitalizeUI = {
        capitalization: obj.capitalization.capitalization,
        incomes: obj.capitalization.incomes,
        reentries: obj.capitalization.reentries,
        expenses: obj.capitalization.expenses
      };
      let pegs: ISalePegUI = {
        pegs_retention: obj.pegs.pegs_retention,
        retention_percentage_pegs: obj.pegs.retention_percentage_pegs * 100
      };
      return {
        section,
        sales: sale,
        orders: order,
        activity,
        capitalization,
        pegs
      };
    });
  }
}
