import {Injectable} from '@angular/core';

@Injectable()
export class CartService{

  private storageName : string = 'cart';
  private cartData: [any];

  getData() {
    let storageData: any = localStorage.getItem(this.storageName);
    storageData = storageData ? storageData.split(',') : [];
    console.log(storageData);
    return this.cartData = storageData;
  }

  setData(data) {
    localStorage.setItem(this.storageName, data);
    this.getData();
  }

  addToCart(data) {

    if (this.cartData && this.cartData.length) {
      for (let i: number = 0; i < this.cartData.length; i++) {
        if (parseInt(this.cartData[i]) == parseInt(data))  return false;
      }
    }
    this.cartData.push(data);
    this.setData(this.cartData);
  }

  removeFromCart() {

  }
}
