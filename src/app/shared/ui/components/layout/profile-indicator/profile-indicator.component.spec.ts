import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileIndicatorComponent} from './profile-indicator.component';

describe('ProfileIndicatorComponent', () => {
  let component: ProfileIndicatorComponent;
  let fixture: ComponentFixture<ProfileIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
