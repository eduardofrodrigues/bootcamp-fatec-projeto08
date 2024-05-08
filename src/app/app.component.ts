import { Component } from '@angular/core';
import Car from './models/Car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootcamp-fatec-projeto08';

  car: Car = {} as Car;

}
