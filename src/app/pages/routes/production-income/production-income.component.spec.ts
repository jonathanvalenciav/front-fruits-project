import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionIncomeComponent } from './production-income.component';

describe('ProductionIncomeComponent', () => {
  let component: ProductionIncomeComponent;
  let fixture: ComponentFixture<ProductionIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionIncomeComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
