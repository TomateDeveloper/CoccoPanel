import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MaterialCreateHelpModalComponent} from './material-create-help-modal.component';

describe('MaterialCreateHelpModalComponent', () => {
  let component: MaterialCreateHelpModalComponent;
  let fixture: ComponentFixture<MaterialCreateHelpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCreateHelpModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCreateHelpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
