import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlReaderComponent } from './xml-reader.component';

describe('XmlReaderComponent', () => {
  let component: XmlReaderComponent;
  let fixture: ComponentFixture<XmlReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XmlReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
