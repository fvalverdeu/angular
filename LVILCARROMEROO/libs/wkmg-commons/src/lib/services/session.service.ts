import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CryptoService} from './crypto.service';
import {UserModel} from '@wkmg/commons/classes';

@Injectable()
export class SessionService {
  private key = 'token';
  private jwtHelper = new JwtHelperService();

  constructor(
    private crypto: CryptoService
  ) { }

  get user() {
    return this.token ? new UserModel(this.jwtHelper.decodeToken(this.token)) : null;
  }

  get token() {
    try {
      const encryptedToken = localStorage.getItem(this.key);
      const decryptedToken = this.crypto.get(encryptedToken);
      this.jwtHelper.decodeToken(decryptedToken);
      return this.jwtHelper.isTokenExpired(decryptedToken) ? null : decryptedToken;
    } catch (e) {
      return null;
    }
  }

  create(token) {
    localStorage.setItem(this.key, this.crypto.set(token));
  }

  destroy() {
    localStorage.removeItem(this.key);
  }
}
