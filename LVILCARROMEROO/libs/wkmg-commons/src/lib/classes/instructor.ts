export class InstructorInterface {
  // tslint:disable-next-line
  _id: string;
  title: string;
  names: string;
  lastNames: string;
  mail: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class InstructorModel implements InstructorInterface {
  // tslint:disable-next-line
  _id: string;
  title: string;
  names: string;
  lastNames: string;
  mail: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(data?: InstructorInterface) {
    this._id = data && data._id || null;
    this.title = data && data.title || null;
    this.names = data && data.names || null;
    this.lastNames = data && data.lastNames || null;
    this.mail = data && data.mail || null;
    this.createdAt = data && data.createdAt || null;
    this.updatedAt  = data && data.updatedAt  || null;
  }

  get fullName() {
    return `${this.names} ${this.lastNames}`;
  }

}
