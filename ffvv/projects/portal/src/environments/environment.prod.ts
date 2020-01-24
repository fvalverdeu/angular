export const environment = {
  production: true,
  appName: 'FFVV Portal',
  env: 'local',
  ENDPOINTS: {
    ELASTIC_SEARCH: 'https://vpc-es-sbcentral-qas-glzecllqujsbt62uipjwpeju3q.us-east-1.es.amazonaws.com/',
    API_URL: 'https://api-qa.belcorp.biz',
    GRAPH_BASIC: 'sales_force/graphql',
    GRAPH_KPI: 'kpis/sales_force/graphql',
    UNETE_URL_EXTERNAL: 'https://ffvvmqa.somosbelcorp.com/portal/IngresoSistema/IngresoExterno/?token=',
    UNETE_API_TOKEN: 'sales_force/token',
  },
  OAUTH: {
    USER: 'interfacesVS',
    PWD: 'T/hZeOAPieXItzNZ+a1+dTKW9KC0bMUqpe/K8eqa6HM=',
    KEY: 'oauth_token'
  },
  KEYS: {
    CRYPTO: 'byyQOSmbwq6IuCDFkBnipv1j46EJGObf'
  },
  BLACK_LIST: [
    'http://localhost:63191/IngresoSistema/IngresoExterno/?token='
  ]
};
