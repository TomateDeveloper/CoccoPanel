import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBreakdownGroupComponent } from './product-breakdown-group.component';

describe('ProductBreakdownGroupComponent', () => {
  let component: ProductBreakdownGroupComponent;
  let fixture: ComponentFixture<ProductBreakdownGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBreakdownGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBreakdownGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
