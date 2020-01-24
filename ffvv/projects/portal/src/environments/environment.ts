// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: "FFVV Portal",
  env: "local",
  ENDPOINTS: {
    ELASTIC_SEARCH:
      "https://vpc-es-sbcentral-qas-glzecllqujsbt62uipjwpeju3q.us-east-1.es.amazonaws.com/",
    API_URL: "https://api-qa.belcorp.biz",
    GRAPH_BASIC: "sales_force/graphql",
    GRAPH_KPI: "kpis/sales_force/graphql",
    UNETE_URL_EXTERNAL:
      "https://ffvvmqa.somosbelcorp.com/portal/IngresoSistema/IngresoExterno/?token=",
    UNETE_API_TOKEN: "sales_force/token"
  },
  OAUTH: {
    USER: "interfacesVS",
    PWD: "T/hZeOAPieXItzNZ+a1+dTKW9KC0bMUqpe/K8eqa6HM=",
    KEY: "oauth_token"
  },
  KEYS: {
    CRYPTO: "byyQOSmbwq6IuCDFkBnipv1j46EJGObf"
  },
  BLACK_LIST: ["http://localhost:63191/IngresoSistema/IngresoExterno/?token="]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
