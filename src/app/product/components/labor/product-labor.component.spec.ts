import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLaborComponent } from './product-labor.component';

describe('ProductLaborComponent', () => {
  let component: ProductLaborComponent;
  let fixture: ComponentFixture<ProductLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLaborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
