import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subscriber, Observer, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { MenuFooter } from './footer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  url = environment.apiGraph;
  menuFooterList: MenuFooter[];

  constructor(private apollo: Apollo) {}

  displayMenuFooter() {

    const getMenuFooter = gql`
      query option($params: Params){
        Options(input: $params){
          description
          creation_date
          update_date
          role
          active
          option_type
          sub_option{
            description
            application
            role
          }
        }
      }
    `;

    const getVariables =
      {
        "params": {
          "country": "PE",
          "role": "SE",
          "application": "Web"
        }
      }

      this.apollo
      .watchQuery({
        query: getMenuFooter,
        variables: getVariables,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map((result: any) => result.data.Options))
      .subscribe(data => {
        this.menuFooterList = data;
        console.log("sin async");
        console.log(data);
      });

  }

  getMenuFooter(): MenuFooter[] {
    this.displayMenuFooter();
    //this.menuFooterList = this.getFilteredByKey(this.menuFooterList, "option_type", "MF")
    console.log(this.menuFooterList);
    console.log(this.url);
    return this.menuFooterList;
  }

  getFilteredByKey(array, key, value) {
    return array.filter(function(e) {return e[key] == value});
  }

  handleError(err) {
    let message = '';
    if(err.error instanceof ErrorEvent){
      message = err.error.message;
    } else {
      message = 'Error Code: ' + err.status + '\nMessage:' + err.message;
    }
    return throwError(message);
  }
}
