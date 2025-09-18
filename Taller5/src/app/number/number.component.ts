import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-basic-demo',
    templateUrl: './number.component.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskBasicDemo {
    value: string | undefined;
}