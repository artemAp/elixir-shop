import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProductsService{

  constructor(private http: Http){ }

  getData(){
    return this.http.get('assets/datas/products.json');
  }
}
