import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-directive-demo',
    templateUrl: './button.component.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonDirectiveDemo { }