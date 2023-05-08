import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XmlReaderComponent } from './xml-reader/xml-reader.component';
import { FormsModule } from '@angular/forms';
import { JsonReaderComponent } from './json-reader/json-reader.component';
import { FormConvertToJSONComponent } from './form-convert-to-json/form-convert-to-json.component';


@NgModule({
  declarations: [
    AppComponent,
    XmlReaderComponent,
    JsonReaderComponent,
    FormConvertToJSONComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
