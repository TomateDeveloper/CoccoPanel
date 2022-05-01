import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BreakdownInfoComponent} from './breakdown-info.component';

describe('BreakdownInfoComponent', () => {
  let component: BreakdownInfoComponent;
  let fixture: ComponentFixture<BreakdownInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakdownInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
