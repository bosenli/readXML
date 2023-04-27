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
    const allElements = xmlDoc.getElementsByTagName('*');

    const tagData: any[] = [];

    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i];

      // Check if the element has any child elements
      if (element.children.length === 0) {
        tagData.push({
          tagName: element.tagName,
          data: element.textContent
        });
      }
    }

    this.xmlContent = tagData;

  }
}
