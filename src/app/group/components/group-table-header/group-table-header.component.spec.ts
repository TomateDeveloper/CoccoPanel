import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupTableHeaderComponent} from './group-table-header.component';

describe('GroupTableHeaderComponent', () => {
  let component: GroupTableHeaderComponent;
  let fixture: ComponentFixture<GroupTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
