import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {


  private cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getCartItems(): Product[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
