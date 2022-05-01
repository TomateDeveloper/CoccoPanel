import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductOrderSheetComponent} from './product-order-sheet.component';

describe('ProductOrderSheetComponent', () => {
  let component: ProductOrderSheetComponent;
  let fixture: ComponentFixture<ProductOrderSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOrderSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOrderSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
