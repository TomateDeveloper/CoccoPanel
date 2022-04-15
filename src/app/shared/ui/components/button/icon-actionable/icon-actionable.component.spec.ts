import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconActionableComponent } from './icon-actionable.component';

describe('IconActionableComponent', () => {
  let component: IconActionableComponent;
  let fixture: ComponentFixture<IconActionableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconActionableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconActionableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
