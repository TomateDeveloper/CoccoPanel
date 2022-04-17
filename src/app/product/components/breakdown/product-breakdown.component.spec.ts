import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBreakdownComponent } from './product-breakdown.component';

describe('ProductBreakdownComponent', () => {
  let component: ProductBreakdownComponent;
  let fixture: ComponentFixture<ProductBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBreakdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
