import { Component, Input } from '@angular/core';
import Car from '../../models/Car';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input()
  car: Car = {} as Car;
}
