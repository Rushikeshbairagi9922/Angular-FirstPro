import { Component, OnInit } from '@angular/core';
import { HttpClientDemoService } from '../http-client-demo.service';

@Component({
  selector: 'app-productby-http-client',
  templateUrl: './productby-http-client.component.html',
  styleUrls: ['./productby-http-client.component.css'],
})
export class ProductbyHttpClientComponent implements OnInit {
  product: any;

  constructor(public _httpdemo: HttpClientDemoService) {}

  ngOnInit(): void {
    // this._httpdemo.getProduct().subscribe((e:any)=>this.product=e.data);

    // console.log(this.product)
    /////////////////////////////////////////////////////////////
    const newProductData = {
      first_name: 'NewProduct',
      last_name: 'Test',
      email: 'new@mail.com',
    };

    this._httpdemo.addProduct(newProductData).subscribe(
      (response) => {
        console.log('Product added successfully:', response);

        this._httpdemo
          .getProduct()
          .subscribe((e: any) => (this.product = e.data));
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
    ////////////////////////////////////////////////////////////
    const putProductData = {
      name: 'morpheus',
      job: 'zion resident',
    };

    this._httpdemo.putProduct(putProductData).subscribe(
      (response) => {
        console.log('Product Put successfully:', response);

        this._httpdemo
          .getProduct()
          .subscribe((e: any) => (this.product = e.data));
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    const patchProductData = {
      name: 'morpheus',
      job: 'zion resident',
    };

    this._httpdemo.putProduct(patchProductData).subscribe(
      (response) => {
        console.log('Product Patch successfully:', response);

        this._httpdemo
          .getProduct()
          .subscribe((e: any) => (this.product = e.data));
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
    /////////////////////////////////////////////////////////////////////////
    const deleteProductData = {
      name: 'morpheus',
    };

    this._httpdemo.deleteProduct(deleteProductData).subscribe(
      (response) => {
        console.log('Product deleted successfully:', response);
        this._httpdemo
          .getProduct()
          .subscribe((e: any) => (this.product = e.data));
      },

      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}
