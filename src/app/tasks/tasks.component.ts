import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  p: number = 0;
  c: number = 0;
  m: number = 0;
  result1: number = 0;

  totalPercentage() {
    let add = this.p + this.c + this.m;
    this.result1 = (add / 300) * 100;
  }

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  add() {
    this.result = this.num1 + this.num2;
  }

  sub() {
    this.result = this.num1 - this.num2;
  }

  mul() {
    this.result = this.num1 * this.num2;
  }

  div() {
    this.result = this.num1 / this.num2;
  }

  Product: string='Laptop';
  Price: number=60000;
  Tax: number=2500;
  Discount: number=1500;

  display() {
    console.log("Product: " + this.Product);
    console.log("Price: " + this.Price);
    console.log("Tax: " + this.Tax);
    console.log("Discount: " + this.Discount);
  }


  basic: number = 3000;
  pf: number = 200;
  hra: number = 100;
  da: number = 10;
  tax: number = 300;
  result2: number = 0;

  constructor() {
    this.basic = 50000;
    this.pf = 2000;
    this.hra = 1500;
    this.da = 200;
    this.tax = 4500;
  }

  employeeSal() {
    this.result2 = this.basic + this.da + this.hra - this.pf - this.tax;
  }

}
