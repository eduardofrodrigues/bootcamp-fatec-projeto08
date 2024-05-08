import { Component } from '@angular/core';
import Car from '../../models/Car';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  car: Car = {} as Car;

  cars: Car[] = [
    {
      id: 1,
      name: "Corolla",
      manufacturer: "Toyota",
      price: 184000,
      year: 2024
    },
    {
      id: 2,
      name: "Corolla",
      manufacturer: "Toyota",
      price: 210000,
      year: 2025
    }
  ]

  save() {
    this.car.id = this.cars.length + 1;
    this.cars.push(this.car);
    this.car = {} as Car;
  }

}
