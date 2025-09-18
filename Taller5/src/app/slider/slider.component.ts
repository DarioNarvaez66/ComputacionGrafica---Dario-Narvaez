import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'slider-input-demo',
    templateUrl: './slider.component.html',
    standalone: true,
    imports: [FormsModule, Slider, InputTextModule]
})
export class SliderInputDemo {
    value: number = 50;
}