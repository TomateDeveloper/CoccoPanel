import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationConfirmComponent } from './user-creation-confirm.component';

describe('UserCreationConfirmComponent', () => {
  let component: UserCreationConfirmComponent;
  let fixture: ComponentFixture<UserCreationConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreationConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreationConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
