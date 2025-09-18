import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgFor, NgIf } from '@angular/common';

interface GenderOption {
  name: string;
  value: string;
}

@Component({
  selector: 'radio-button-demo',
  standalone: true,
  imports: [FormsModule, RadioButtonModule, NgFor, NgIf],
  templateUrl: './radio-button-demo.component.html',
  styleUrls: ['./radio-button-demo.component.css']
})
export class RadioButtonDemoComponent {
  genders: GenderOption[];
  selectedGender?: string;

  constructor() {
    this.genders = [
      { name: 'Masculino', value: 'M' },
      { name: 'Femenino', value: 'F' },
      { name: 'Otro', value: 'O' }
    ];
  }
}
