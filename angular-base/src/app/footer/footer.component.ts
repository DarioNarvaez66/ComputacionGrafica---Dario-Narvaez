import { Component } from '@angular/core';
import { FooterSectionComponent } from '../footer-section/footer-section.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterSectionComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}
