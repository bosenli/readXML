import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConvertToJSONComponent } from './form-convert-to-json.component';

describe('FormConvertToJSONComponent', () => {
  let component: FormConvertToJSONComponent;
  let fixture: ComponentFixture<FormConvertToJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConvertToJSONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConvertToJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
