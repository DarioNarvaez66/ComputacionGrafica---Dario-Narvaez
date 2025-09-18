import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-template-demo',
    templateUrl: './calification.component.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingTemplateDemo {
    value!: number;
}