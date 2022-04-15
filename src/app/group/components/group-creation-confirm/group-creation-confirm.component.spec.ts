import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCreationConfirmComponent } from './group-creation-confirm.component';

describe('GroupCreationConfirmComponent', () => {
  let component: GroupCreationConfirmComponent;
  let fixture: ComponentFixture<GroupCreationConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCreationConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCreationConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
