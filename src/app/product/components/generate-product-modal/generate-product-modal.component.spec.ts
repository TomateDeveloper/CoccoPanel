import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateProductModalComponent } from './generate-product-modal.component';

describe('GenerateProductModalComponent', () => {
  let component: GenerateProductModalComponent;
  let fixture: ComponentFixture<GenerateProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateProductModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
