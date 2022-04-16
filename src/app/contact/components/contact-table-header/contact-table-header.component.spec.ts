import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTableHeaderComponent } from './contact-table-header.component';

describe('ContactTableHeaderComponent', () => {
  let component: ContactTableHeaderComponent;
  let fixture: ComponentFixture<ContactTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
