import { Component, Input, Output, EventEmitter } from '@angular/core';
import Car from '../../models/Car';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input()
  car: Car = {} as Car;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }

}
