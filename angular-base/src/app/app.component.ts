import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContenedorComponent,EjercicioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
