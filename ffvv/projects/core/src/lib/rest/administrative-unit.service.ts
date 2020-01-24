import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdmUnitResponse } from '@portal/core/models/response';

@Injectable()
export class AdministrativeUnitService {

  constructor(private http: HttpClient) { }

  getAdmUnit(country: string, region: string, zone: string, showSections: string): Observable<IAdmUnitResponse[]> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    let params = new HttpParams();
    params = params.append('region_code', region);
    params = params.append('zone_code', zone);
    params = params.append('show_sections', showSections);
    return this.http.get<IAdmUnitResponse[]>('countries/' + country, { headers, params });
  }
}
