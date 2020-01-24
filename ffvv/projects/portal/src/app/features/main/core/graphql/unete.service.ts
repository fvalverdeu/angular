import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { map } from "rxjs/operators";
import { IUneteResponse } from "../../models/response/unete-response.interface";
import { IUneteRequest } from "../../models/request/unete-request.interface";

@Injectable()
export class UneteService {
  constructor(private apollo: Apollo) {}

  public getKpiUnete = (request: IUneteRequest) => {
    const QUERY = gql`
      query kpi_unete($Params: Params) {
        KpiUnete(input: $Params) {
          current_campaign
          zone
          section
          name
          in_evaluation
          preapproved
          approved
          rejected
          conversion
          days_on_hold
          anticipated_income
          pre_registered
        }
      }
    `;
    const VARIABLES = {
      Params: { ...request }
    };
    return this.apollo
      .watchQuery<IUneteResponse>({
        query: QUERY,
        variables: VARIABLES,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map(response => response.data));
  };
}
