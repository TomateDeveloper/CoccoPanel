import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCreatePageComponent } from './material-create-page.component';

describe('MaterialCreatePageComponent', () => {
  let component: MaterialCreatePageComponent;
  let fixture: ComponentFixture<MaterialCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
