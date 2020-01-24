import { Injectable } from '@angular/core';
import {LogFields} from './log-data.interface';
import {environment} from '../../../../portal/src/environments/environment';

@Injectable()
export class LogService {
  // private logger: Logger;

  constructor() {} // private userId: string

  public initialize() {
    // this.logger = new Logger(environment.appName, environment.ENDPOINTS.ELASTIC_SEARCH);
  }

  public logHttpInfo(info: any, elapsedTime: number, requestPath: string) {
    // TODO: create and set correlation id
    const url = location.href;
    const logFields: LogFields = {
      environment: environment.env,
      userId: 'will', // this.userId,
      requestPath,
      elapsedTime,
      url
    };

    // this.logger.log('Information', `${info}`, logFields);
  }

  public logError(errorMsg: string) {
    const url = location.href;

    const logFields: LogFields = {
      environment: environment.env,
      userId: 'will', // this.userId,
      requestPath: '',
      elapsedTime: 0,
      url // url: url
    };
    console.log('Guardando en Elastic Search');

    // this.logger.log('Error', errorMsg, logFields);
  }

  public logInfo(info: any) {
    const url = location.href;

    const logFields: LogFields = {
      environment: environment.env,
      userId: 'will', // this.userId,
      requestPath: '',
      elapsedTime: 0,
      url
    };

    // this.logger.log('Information', info, logFields);
  }
}
