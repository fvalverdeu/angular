import {InstructorInterface, InstructorModel} from './instructor';
import {environment} from '../../../../../apps/wkmg/src/environments/environment';

export class WorkshopInterface {
  // tslint:disable-next-line
  _id: string;
  date: Date;
  start: Date;
  end: Date;
  description: string;
  name: string;
  instructor: InstructorInterface;
  poster: string;
  temary: string;
  publish: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class WorkshopModel implements WorkshopInterface {
  // tslint:disable-next-line
  _id: string;
  date: Date;
  start: Date;
  end: Date;
  description: string;
  name: string;
  instructor: InstructorModel;
  poster: string;
  temary: string;
  publish: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: WorkshopInterface) {
    this._id = data._id || null;
    this.date = data.date || null;
    this.start = data.start || null;
    this.end = data.end || null;
    this.description = data.description || null;
    this.name = data.name || null;
    this.instructor = new InstructorModel(data.instructor) || null;
    this.poster = data.poster ? `${environment.API_URL}/${data.poster}` : null;
    this.temary = data.temary ? `${environment.API_URL}/${data.temary}` : null;
    this.publish = data.publish || null;
    this.createdAt = data.createdAt || null;
    this.updatedAt  = data.updatedAt  || null;
  }

  get instructorFullName() {
    return this.instructor ? this.instructor.fullName : null;
  }

}
