import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLaborItemComponent } from './product-labor-item.component';

describe('ProductLaborItemComponent', () => {
  let component: ProductLaborItemComponent;
  let fixture: ComponentFixture<ProductLaborItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLaborItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLaborItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
