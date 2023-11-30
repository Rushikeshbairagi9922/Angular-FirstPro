import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientDemoService {
  url = 'assets/User.json';
  urls = 'https://reqres.in/api/users?page=3';
  addUrl = 'https://reqres.in/api/users';
  putUrl = 'https://reqres.in/api/users/2';
  deleteUrl = 'https://reqres.in/api/users/2';

  machinetesturl = 'https://dummyjson.com/products';
  

  constructor(public info: HttpClient) {}

  getProduct() {
    // return this.info.get(this.url);
    return this.info.get(this.addUrl);
  }

  addProduct(productData: any): Observable<any> {
    return this.info.post(this.addUrl, productData);
  }

  putProduct(productPut: any): Observable<any> {
    return this.info.put(this.putUrl, productPut);
  }

  patchProduct(patchpro: any): Observable<any> {
    return this.info.patch(this.putUrl, patchpro);
  }

  deleteProduct(productDel: any): Observable<any> {
    return this.info.delete(this.deleteUrl, productDel);
  }

  getMachinetest( ):Observable<any> {
    
    return this.info.get(this.machinetesturl);
    
  }
}
