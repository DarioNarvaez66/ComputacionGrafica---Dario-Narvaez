import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-indeterminate-demo',
    templateUrl: './check.component.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxIndeterminateDemo {
    checked: boolean = false;
}