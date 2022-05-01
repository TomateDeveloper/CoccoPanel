import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductTableHeaderComponent} from './product-table-header.component';

describe('ProductTableHeaderComponent', () => {
  let component: ProductTableHeaderComponent;
  let fixture: ComponentFixture<ProductTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
