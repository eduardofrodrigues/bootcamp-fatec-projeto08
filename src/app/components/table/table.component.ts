import { Component } from '@angular/core';
import Car from '../../models/Car';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  car: Car = {} as Car;
  isUpdate: boolean = false

  cars: Car[] = [
    /*  
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
    */
  ]

  save() {
    if (!this.isUpdate) {
      let maxId = 0;
      this.cars.map((car) => {
        maxId = Math.max(maxId, car.id);
      })
      this.car.id = maxId + 1;
      this.cars.push(this.car);
    }
    this.car = {} as Car;
  }

  remove(carToRemove: Car) {
    this.cars = this.cars.filter((car) => car.id !== carToRemove.id)
  }

  update(car: Car) {
    this.isUpdate = true;
    this.car = car;
  }

}
