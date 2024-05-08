import { Component } from '@angular/core';
import Car from '../../models/Car';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
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
}
