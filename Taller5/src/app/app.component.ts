import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatLabelBasicDemo } from './label/label.component';
import { InputMaskBasicDemo } from './number/number.component';
import { RadioButtonDemoComponent } from './radio/radio-button-demo/radio-button-demo.component';
import { DatePickerBasicDemo } from './date/date.component';
import { ToggleSwitchBasicDemo } from './pull/pull.component';
import { PanelBasicDemo } from './table/table.component';
import { ButtonDirectiveDemo } from './button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FloatLabelBasicDemo,InputMaskBasicDemo,RadioButtonDemoComponent,DatePickerBasicDemo,ToggleSwitchBasicDemo,PanelBasicDemo,ButtonDirectiveDemo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Taller 5 Dario Narvaez';
}
