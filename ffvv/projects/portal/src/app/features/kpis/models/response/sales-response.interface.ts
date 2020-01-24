interface ISale {
  net_sale: number;
  net_sale_goal: number;
  catalog_sale: number;
  catalog_sale_goal: number;
  fulfillments_vs_sales: number;
  fulfillments_vs_catalogsales: number;
}

interface IOrder {
  orders: number;
  orders_goal: number;
  high_value_orders: number;
  low_value_orders: number;
  orders_average: number;
  orders_average_goal: number;
  fulfillments_vs_ordersobjective: number;
  fulfillments_vs_ordersaverage: number;
}

interface ICapitalize {
  capitalization: number;
  incomes: number;
  reentries: number;
  expenses: number;
}

interface IActive {
  activity_percentage: number;
  initials_active: number;
  finals_active: number;
  finals_active_lastyear: number;
  percentage_actives_retention: number;
}

interface IPeg {
  pegs: number;
  retention_percentage_pegs: number;
  pegs_retention: number;
  pegs_to_retain: number;
}

export interface ISalesOrders {
  campaign: string;
  region: string;
  zone: string;
  section: string;
  profile: string;
  sales: ISale;
  orders: IOrder;
  capitalization: ICapitalize;
  activity: IActive;
  pegs: IPeg;
}

export interface ISalesResponse {
  KpiSalesOrders: ISalesOrders[];
}
