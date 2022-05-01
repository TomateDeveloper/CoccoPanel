import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductIdentityFormComponent} from './product-identity-form.component';

describe('ProductIdentityFormComponent', () => {
  let component: ProductIdentityFormComponent;
  let fixture: ComponentFixture<ProductIdentityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductIdentityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIdentityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
