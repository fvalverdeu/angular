import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {InstructorInterface, InstructorModel} from '@wkmg/commons/classes';

@Injectable()
export class InstructorsService {
  private endpoind = 'instructors';

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<InstructorModel[]> {
    return this.http.get(this.endpoind)
      .pipe(
        map((items: InstructorInterface[]) => {
          return items.map(item => new InstructorModel(item));
        })
      );
  }

  create(data: InstructorInterface): Observable<InstructorModel> {
    return this.http.post(this.endpoind, data)
      .pipe(map((item: InstructorInterface) => new InstructorModel(item)));
  }

  update(data: InstructorInterface): Observable<InstructorModel> {
    return this.http.put(`${this.endpoind}/${data._id}`, data)
      .pipe(map((item: InstructorInterface) => new InstructorModel(item)));
  }

  delete(id: string) {
    return this.http.delete(`${this.endpoind}/${id}`);
  }
}
