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
  providedIn: 'root',
  //deps: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class FooterService {
  url = environment.apiGraph;

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: this.url }),
      cache: new InMemoryCache()
    });
  }

  getMenuFooter(): Observable<MenuFooter[]> {
    return new Observable<MenuFooter[]>(observer => {
      const result: MenuFooter[] = [];
      this.getDataMenuFooter().subscribe(data => {
        data.forEach(list => {
          console.log('list');
          console.log(list);
          if(list.option_type === 'MF'){
            result.push(this.transformResponseMenuFooter(list))
          }
        });
        observer.next(result);
      }, observer.error);
    });
  }

  private getDataMenuFooter() {
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
      };

      return this.apollo
      .watchQuery({
        query: getMenuFooter,
        variables: getVariables,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map((result: any) => result.data.Options));
  }

  getFilteredByKey(array, key, value) {
    return array.filter(function(e) {return e[key] == value});
  }

  private transformResponseMenuFooter(res): MenuFooter {
    return {
      description: res.description,
      creation_date: res.creation_date,
      update_date: res.update_date,
      role: res.role,
      active: res.active,
      option_type: res.option_type,
      sub_option: res.sub_option
    } as MenuFooter;
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
