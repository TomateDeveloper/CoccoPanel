import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableHeaderComponent } from './user-table-header.component';

describe('UserTableHeaderComponent', () => {
  let component: UserTableHeaderComponent;
  let fixture: ComponentFixture<UserTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
