import { TestBed } from '@angular/core/testing';

import { DataPortfolioService } from './data-portfolio.service';

describe('DataPortfolioService', () => {
  let service: DataPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
