export interface ISales {
  net_sale: number;
  net_sale_goal: number;
  catalog_sale: number;
  catalog_sale_goal: number;
  fulfillments_vs_catalogsales: number;
}

export interface IOrders {
  orders: number;
  orders_goal: number;
  high_value_orders: number;
  low_value_orders: number;
  orders_average: number;
  fulfillments_vs_ordersobjective: number;
}

export interface ISalesOrders {
  campaign: string;
  region: string;
  zone: string;
  section: string;
  profile: string;
  sales: ISales;
  orders: IOrders;
}

export interface ISalesOrdersResponse {
  KpiSalesOrders: ISalesOrders[];
}

