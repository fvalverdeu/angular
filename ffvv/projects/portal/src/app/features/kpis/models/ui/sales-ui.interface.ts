export interface ISaleCatalogUI {
  previousCampaign: string;
  currentCampaign: string;
  saleCatalog: number;
  orders: number;
  ordersGoal: number;
  saleGoal: number;
  ordersFulfillment: number;
  saleFulfillment: number;
  orderAverage: number;
  highValueOrders: number;
  lowValueOrders: number;
}

export class SaleCatalogUI implements ISaleCatalogUI {
  previousCampaign: string;
  currentCampaign: string;
  saleCatalog: number;
  orders: number;
  ordersGoal: number;
  saleGoal: number;
  ordersFulfillment: number;
  saleFulfillment: number;
  orderAverage: number;
  highValueOrders: number;
  lowValueOrders: number;
  constructor() {
    this.previousCampaign = '';
    this.currentCampaign = '';
    this.saleCatalog = 0;
    this.orders = 0;
    this.ordersGoal = 0;
    this.saleGoal = 0;
    this.ordersFulfillment = 0;
    this.saleFulfillment = 0;
    this.orderAverage = 0;
    this.highValueOrders = 0;
    this.lowValueOrders = 0;
  }
}

export interface ISaleActivityUI {
  total: number;
  activityFinals: number;
  pegs: number;
  totalRetention: number;
  activityFinalsLastYear: number;
  activityFinalsPrevious: number;
  finalCampaignLastYear: string;
  previousCampaignAndYear: string;
}

export class SaleActivityUI implements ISaleActivityUI {
  total: number;
  activityFinals: number;
  pegs: number;
  totalRetention: number;
  activityFinalsLastYear: number;
  activityFinalsPrevious: number;
  finalCampaignLastYear: string;
  previousCampaignAndYear: string;

  constructor() {
    this.total = 0;
    this.activityFinals = 0;
    this.pegs = 0;
    this.totalRetention = 0;
    this.activityFinalsLastYear = 0;
    this.activityFinalsPrevious = 0;
    this.finalCampaignLastYear = '';
    this.previousCampaignAndYear = '';
  }
}

export interface ISaleCapitalizeUI {
  total?: number;
  capitalization: number;
  incomes: number;
  reentries: number;
  expenses: number;
}

export class SaleCapitalizeUI implements ISaleCapitalizeUI {
  total: number;
  capitalization: number;
  incomes: number;
  reentries: number;
  expenses: number;

  constructor() {
    this.total = 0;
    this.incomes = 0;
    this.reentries = 0;
    this.expenses = 0;
  }
}

export interface ISaleGoalUI {
  currentCampaign: string;
  ordersGoalCurrent: number;
  saleGoalCurrent: number;
}

export class SaleGoalUI implements ISaleGoalUI {
  currentCampaign: string;
  ordersGoalCurrent: number;
  saleGoalCurrent: number;

  constructor() {
    this.currentCampaign = '';
    this.ordersGoalCurrent = 0;
    this.saleGoalCurrent = 0;
  }
}

export interface ISalePegUI {
  pegs?: number;
  retention_percentage_pegs?: number;
  pegs_retention?: number;
  pegs_to_retain?: number;
  totalActivity?: number;
}

export interface ISaleOrderGzUI {
  netSale: number;
  ordersGoal: number;
  ordersAverage: number;
  fulfillmentsVsSales: number;
  fulfillmentsVsOrdersObjective: number;
  fulfillmentsVsOrdersAverage: number;
}
export interface ISaleUI {
  netSaleCatalog?: number;
  netSaleCatalogGoal?: number;
  fulfillmentsVsCatalogSales?: number;
  // catalogSale?: number;
  // catalogSaleGoal?: number;
  // fulfillmentsVsCatalogsales?: number;
  ordersAverage: number;
}
export interface IOrderUI {
  orders: number;
  ordersGoal: number;
  fulfillmentsVsOrdersobjective: number;
}
export interface IActivityUI {
  initialsActive: number;
  finalsActive: number;
  activityPercentage: number;
}
export interface ISaleOrderUI {
  section: string;
  sales: ISaleUI;
  orders: IOrderUI;
  activity: IActivityUI;
  capitalization: ISaleCapitalizeUI;
  pegs: ISalePegUI;
}
export interface ISalesOrdersUI {
  campaign: string;
  salesOrderList: ISaleOrderUI[];
}

export class SalePegUI implements ISalePegUI {
  pegs: number;
  retention_percentage_pegs: number;
  pegs_retention: number;
  pegs_to_retain: number;
  totalActivity: number;

  constructor() {
    this.pegs = 0;
    this.retention_percentage_pegs = 0;
    this.pegs_retention = 0;
    this.pegs_to_retain = 0;
    this.totalActivity = 0;
  }
}
