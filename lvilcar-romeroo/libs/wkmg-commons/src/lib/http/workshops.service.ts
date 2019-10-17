import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {WorkshopInterface, WorkshopModel} from '@wkmg/commons/classes';

@Injectable()
export class WorkshopsService {
  private endpoind = 'workshops';

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<WorkshopModel[]> {
    return this.http.get(this.endpoind)
      .pipe(
        map((items: WorkshopInterface[]) => {
          return items.map(item => new WorkshopModel(item));
        })
      );
  }

  create(data: WorkshopInterface): Observable<WorkshopModel> {
    return this.http.post(this.endpoind, data)
      .pipe(map((item: WorkshopInterface) => new WorkshopModel(item)));
  }

  update(data: WorkshopInterface): Observable<WorkshopModel> {
    return this.http.put(`${this.endpoind}/${data._id}`, data)
      .pipe(map((item: WorkshopInterface) => new WorkshopModel(item)));
  }

  delete(id: string) {
    return this.http.delete(`${this.endpoind}/${id}`);
  }

  updateFile(id: string, file: File, fieldName: string): Observable<object> {
    const formData = new FormData();
    formData.set(fieldName, file);
    return this.http.put(`${this.endpoind}/${fieldName}/${id}`, formData);
  }

}
