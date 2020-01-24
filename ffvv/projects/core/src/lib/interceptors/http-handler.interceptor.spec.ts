import { TestBed } from '@angular/core/testing';
import {HttpHandlerInterceptor} from './http-handler.interceptor';

describe('HttpHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpHandlerInterceptor = TestBed.get(HttpHandlerInterceptor);
    expect(service).toBeTruthy();
  });
});
