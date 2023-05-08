import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-convert-to-json',
  templateUrl: './form-convert-to-json.component.html',
  styleUrls: ['./form-convert-to-json.component.css']
})
export class FormConvertToJSONComponent {

  formData = {
    title: '',
    id: null,
    division: '',
    postcode: null
  };

  onSubmit(): void {
    const json = {
      title: this.formData.title,
      id: this.formData.id,
      where: {
        division: this.formData.division,
        postcode: this.formData.postcode
      }
    };

    const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.setAttribute('href', url);
    link.setAttribute('download', 'form-data.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
