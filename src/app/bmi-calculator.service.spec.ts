import { TestBed } from '@angular/core/testing';

import { BmiCalculatorService } from './bmi-calculator.service';

describe('BmiCalculatorService', () => {
  let service: BmiCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmiCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
