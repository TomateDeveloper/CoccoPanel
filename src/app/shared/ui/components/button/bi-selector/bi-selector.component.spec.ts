import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiSelectorComponent } from './bi-selector.component';

describe('BiSelectorComponent', () => {
  let component: BiSelectorComponent;
  let fixture: ComponentFixture<BiSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
