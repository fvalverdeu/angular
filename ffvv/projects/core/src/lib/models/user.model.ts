import {IUser} from './user.interface';
import {IToken, IExternalToken} from './token.interface';
import {UserRolEnum} from '../constants/rol.enum';

export class UserModel implements IUser {
  userName: string;
  role: UserRolEnum;
  country: string;
  region: string;
  zone: string;
  section: string;

  constructor(internalToken: IToken, externalToken?: IExternalToken) {
    if (internalToken) {
      this.userName = internalToken.user_id || null;
      this.role = internalToken.role as UserRolEnum || null;
      this.country = internalToken.country || null;
    } else if (externalToken) {
      this.userName = externalToken.CodigoConsultora || null;
      this.role = UserRolEnum.SOCIA_EMPRESARIA; // externalToken.role as UserRolEnum || null;
      this.country = externalToken.CodigoISO || null;
    }
  }
/*
  get isAdmin(): boolean {
    return this.rol === UserRol.ADMIN;
  }

  get isStudent(): boolean {
    return this.rol === UserRol.STUDENT;
  }

  isAuthorized(rols: UserRol[]) {
    return rols.includes(this.rol);
  }
*/
}

// Esta clase no forma parte de ninguna lógica de negocio.
// Es una clase de prueba para hacer tests. Se eliminará.
export class UserTest {
  public role: string;
  public phase: string;
  public roadBright: boolean;
  public others: boolean;
  public dop: boolean;
  public sale: boolean;
  public zone: boolean;

  constructor() {
    this.role = 'SE';
    this.phase = 'V';
    this.roadBright = true;
    this.dop = true;
    this.others = true;
    this.zone = false;
    this.isSale();
  }

  isSale() {
    this.sale = this.phase === 'V' ? true : false;
  }
}
