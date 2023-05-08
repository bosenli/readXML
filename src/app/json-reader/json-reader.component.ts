import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})
export class JsonReaderComponent implements OnInit {
  fileContent: string = '';
  query: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event : any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (reader.result instanceof ArrayBuffer) {
        this.fileContent = new TextDecoder().decode(reader.result);
      } else {
        this.fileContent = reader.result as string;
      }
    };
    reader.readAsText(file);
  }



  convertToJson(): void {
    const data = JSON.parse(this.fileContent);
    const query = `SELECT * FROM ${data.from} WHERE division='${data.where.division}' AND postcode=${data.where.postcode};`;
    this.query = query;
  }
}
