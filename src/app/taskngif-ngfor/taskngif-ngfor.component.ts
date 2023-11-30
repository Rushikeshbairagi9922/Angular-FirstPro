import { Component } from '@angular/core';

@Component({
  selector: 'app-taskngif-ngfor',
  templateUrl: './taskngif-ngfor.component.html',
  styleUrls: ['./taskngif-ngfor.component.css']
})
export class TaskngifNgforComponent {

  products: any[] = [{productId: 1,productName: 'Smartphone', price: 499.99, category:
  'Electronics', discount: 10},
   {productId: 2, productName: 'Laptop', price: 999.99, category: 'Electronics', discount: 15},
   {productId: 3,productName: 'Running Shoes', price: 79.99, category: 'Sports', discount: 5},
   {productId: 4,productName: 'Dress Shirt', price: 49.99, category: 'Clothing', discount: 0},
   {productId: 5,productName: 'Cookware Set', price: 149.99, category: 'Kitchen', discount:
  20 },
   {productId: 6,productName: 'Headphones', price: 129.99, category: 'Electronics', discount:
  10},
   {productId: 7,productName: 'Fiction Book', price: 14.99, category: 'Books', discount: 0}]

show:boolean = true

}
