import { Component, OnInit } from '@angular/core';
import { HttpClientDemoService } from '../http-client-demo.service';
import { NetworkcheckService } from '../networkcheck.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Product } from '../product';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-machinetest1list',
  templateUrl: './machinetest1list.component.html',
  styleUrls: ['./machinetest1list.component.css'],
})
export class Machinetest1listComponent implements OnInit {
  product: any;
  page: number = 1;
  isOnline: boolean = true;
  darkMode = false;
  form!: FormGroup;
  searchTerm: string = '';
  sortColumn: string = ''; // Track the current sort column
  sortDirection: string = 'asc'; // Track the current sort direction
  
  httpClient: any;
  

  constructor(
    public rout: Router,
    public _httpdemo: HttpClientDemoService,
    private networkcheck: NetworkcheckService,
    private cartService: CartServiceService
  ) {}

  ngOnInit(): void {
    this.networkcheck.connectionStatus$.subscribe((isOnline) => {
      this.isOnline = isOnline;
    });

    this._httpdemo
      .getMachinetest()
      .subscribe((e: any) => (this.product = e.products));

    // darkmode
    this.form = new FormGroup({
      darkMode: new FormGroup(this.darkMode),
    });
  }

  // logout btn code
  logout() {
    localStorage.removeItem('userData');
    this.rout.navigate(['MachineLogin']);
  }

  // use to toggle the dark mode
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.form.patchValue({ darkMode: this.darkMode });
  }

  // search bar code
  get filteredProducts() {
    if (!this.searchTerm.trim()) {
      return this.sortData(this.product);
    }

    return this.sortData(
      this.product.filter((p: any) => {
        return Object.values(p).some((value: any) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(this.searchTerm.toLowerCase());
          }
          return false;
        });
      })
    );
  }

  // Sorting logic
  sortData(data: any[]) {
    if (!this.sortColumn) {
      return data;
    }

    return data.sort((a, b) => {
      const aValue = a[this.sortColumn];
      const bValue = b[this.sortColumn];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return this.sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
    });
  }

  // Handle column header click for sorting
  onSort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  // addtocart(p:any[]=[]){
  //   let addproduct:any[] = p  ;
  //   console.log("Add to cart",addproduct);
  //  localStorage.setItem('addproduct',JSON.stringify(  addproduct ));
  //  alert("Product added successfully");
          

  // }

  addtocart(product: Product) {
    this.cartService.addToCart(product);
    alert('Product added successfully to the cart!');
  }
}
