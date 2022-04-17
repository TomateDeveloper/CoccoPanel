import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialMainPageComponent } from './material-main-page.component';

describe('MaterialMainPageComponent', () => {
  let component: MaterialMainPageComponent;
  let fixture: ComponentFixture<MaterialMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
