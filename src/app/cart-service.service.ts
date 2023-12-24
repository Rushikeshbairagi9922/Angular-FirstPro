import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  [x: string]: any;


  private cartItems: Product[] = [];

  addToCart(product: Product) {
    const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      // If the item already exists, increase its quantity
      existingItem.quantity += 1;
    } else {
      // If it's a new item, add it to the cart with quantity 1
      product.quantity = 1;
      cartItems.push(product);
    }
  
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }


  getCartItems(): Product[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  setCartItems(cartItems: Product[]) {
    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
}
