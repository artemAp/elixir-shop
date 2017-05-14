import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class CartService{

  private storageName : string = 'cart';
  private cartData: [any];

  getData() {
    let storageData: any = localStorage.getItem(this.storageName);
    storageData = storageData ? storageData.split(',') : [];
    return this.cartData = storageData;
  }

  getData2(): Observable<any> {
    let storageData: any = localStorage.getItem(this.storageName);
    storageData = storageData ? storageData.split(',') : [];
    this.cartData = storageData;
    return Observable.of(this.cartData);
  }

  setData(data) {
    localStorage.setItem(this.storageName, data);
  }

  addToCart(data) {
    this.getData();
    if (this.cartData && this.cartData.length) {
      for (let i: number = 0; i < this.cartData.length; i++) {
        if (this.cartData[i] == data)  {
          return false;
        }
      }
    }
    this.cartData.push(data);
    this.setData(this.cartData);
  }

  removeFromCart(data) {
    this.getData2();
    if (this.cartData && this.cartData.length) {
      for (let i: number = 0; i < this.cartData.length; i++) {
        if (this.cartData[i] == data)  {
          this.cartData.splice(i, 1);
          this.setData(this.cartData);
        }
      }
    }

  }
}
