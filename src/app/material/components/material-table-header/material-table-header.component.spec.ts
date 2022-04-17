import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTableHeaderComponent } from './material-table-header.component';

describe('MaterialTableHeaderComponent', () => {
  let component: MaterialTableHeaderComponent;
  let fixture: ComponentFixture<MaterialTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
