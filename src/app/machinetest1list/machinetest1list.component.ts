import { Component, OnInit } from '@angular/core';
import { HttpClientDemoService } from '../http-client-demo.service';
import { Observable } from 'rxjs';
import { NetworkcheckService } from '../networkcheck.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

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

  constructor(
    public rout: Router,
    public _httpdemo: HttpClientDemoService,
    private networkcheck: NetworkcheckService
  ) {}

  ngOnInit(): void {
    this.networkcheck.connectionStatus$.subscribe((isOnline) => {
      this.isOnline = isOnline;
    });

    this._httpdemo
      .getMachinetest()
      .subscribe((e: any) => (this.product = e.products));

    console.log('prolist' + this.product);

    //darkmode
    this.form = new FormGroup({
      darkMode: new FormGroup(this.darkMode),
    });
  }
  logout() {
    localStorage.removeItem('userData');
    this.rout.navigate(['MachineLogin']);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.form.patchValue({ darkMode: this.darkMode });
  }

  get filteredProducts() {
    if (!this.searchTerm.trim()) {
      return this.product;
    }
    // console.log(this.product)
    return this.product.filter((p: any) => {
      return Object.values(p).some((value: any) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(this.searchTerm.toLowerCase());
        }
        return false;
      });
    });
  }
}
