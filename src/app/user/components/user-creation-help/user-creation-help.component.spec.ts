import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserCreationHelpComponent} from './user-creation-help.component';

describe('UserCreationHelpComponent', () => {
  let component: UserCreationHelpComponent;
  let fixture: ComponentFixture<UserCreationHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreationHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreationHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
