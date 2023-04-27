import { Component } from '@angular/core';

@Component({
  selector: 'app-xml-reader',
  templateUrl: './xml-reader.component.html',
  styleUrls: ['./xml-reader.component.css']
})
export class XmlReaderComponent{
  xmlContent: any;

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const xmlString = e.target.result;
      this.parseXML(xmlString);
    };
    reader.readAsText(file);
  }

  parseXML(xmlString: string) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
    this.xmlContent = xmlDoc.documentElement.outerHTML;
    const itemElements = xmlDoc.getElementsByTagName('Item');
    const itemsData: any[] = [];


    for (let i = 0; i < itemElements.length; i++) {
      const item = itemElements[i];
      const titleElement = item.getElementsByTagName('Title')[0];
      const numberElement = item.getElementsByTagName('Number')[0];
      const amountElement = item.getElementsByTagName('Amount')[0];

      itemsData.push({
        title: titleElement.textContent,
        number: numberElement.textContent,
        amount: amountElement.textContent
      });
    }

    this.xmlContent = itemsData;

  }
}
