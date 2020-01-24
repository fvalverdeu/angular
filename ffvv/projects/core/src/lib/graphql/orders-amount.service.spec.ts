import { TestBed } from '@angular/core/testing';

import { OrdersAmountService } from './orders-amount.service';

describe('OrdersAmountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersAmountService = TestBed.get(OrdersAmountService);
    expect(service).toBeTruthy();
  });
});
