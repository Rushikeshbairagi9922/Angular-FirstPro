import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart !: Product[] ;
  totalCost: number = 0;
  orders: any[] = []; 

  constructor(public _carts: CartServiceService, public rout: Router){}

  ngOnInit(): void {
    this.cart = this._carts.getCartItems();
    this.calculateTotalCost();
  }

  decreaseQuantity(item: Product) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotalCost();
    }
  }

  increaseQuantity(item: Product) {
    item.quantity++;
    this.calculateTotalCost();
  }

  deleteItem(item: Product) {
    // Remove the item from the cart
    this.cart = this.cart.filter(cartItem => cartItem !== item);
    // Update the cart in localStorage
    this._carts.setCartItems(this.cart);
    this.calculateTotalCost();
  }

  calculateTotalCost() {
    // Calculate total cost based on quantity and price of each item
    this.totalCost = this.cart.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  back() {
    this.rout.navigate(['Machinetest1list']);
  }

  buyProducts() {
    // Create a copy of the cart to avoid modifying the original data
    const purchasedItems = [...this.cart];

    // Add the purchased items to the orders array
    this.orders.push({
      date: new Date(),
      items: purchasedItems,
      totalCost: this.totalCost.toFixed(2),
    });

    console.log('Orders:', this.orders);
}

cancelOrder(order: any) {
  const index = this.orders.indexOf(order);
  if (index !== -1) {
    // Remove the order from the orders array
    this.orders.splice(index, 1);
  }
}
}
