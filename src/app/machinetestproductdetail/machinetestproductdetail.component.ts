import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClientDemoService } from '../http-client-demo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NetworkcheckService } from '../networkcheck.service';

@Component({
  selector: 'app-machinetestproductdetail',
  templateUrl: './machinetestproductdetail.component.html',
  styleUrls: ['./machinetestproductdetail.component.css'],
})
export class MachinetestproductdetailComponent {
  product: any;
  isOnline: boolean = true;
  darkMode = false;
  form!: FormGroup;
  prolist: any = [];
  id: any;

  constructor(
    public rout: Router,
    public _httpdemo: HttpClientDemoService,
    public _activeRouter: ActivatedRoute,
    private networkcheck: NetworkcheckService
  ) {}

  ngOnInit(): void {
    this.networkcheck.connectionStatus$.subscribe((isOnline: boolean) => {
      this.isOnline = isOnline;
    });

    this._httpdemo.getMachinetest().subscribe((e: any) => {
      this.product = e.products;

      this.id = this._activeRouter.snapshot.params['id'];

      this.product = this.product.filter(
        (products: any) => products.id == this.id
      )[0];
    });

    //darkmode

    this.form = new FormGroup({
      darkMode: new FormGroup(this.darkMode),
    });
  }

  back() {
    this.rout.navigate(['Machinetest1list']);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.form.patchValue({ darkMode: this.darkMode });
  }
}
