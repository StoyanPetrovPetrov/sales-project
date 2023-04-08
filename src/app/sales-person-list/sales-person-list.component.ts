import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Stoyan", "Petrov", "s.petrov@alabala.com", 50000),
    new SalesPerson("Gosho", "Goshev", "gogo@alabala.com", 70000),
    new SalesPerson("Pesho", "Peshev", "peshop@abv.bg", 60000),
    new SalesPerson("Penka", "Kifleva", "penk@abv.bg", 90000)
  ];

}
