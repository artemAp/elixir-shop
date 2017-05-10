import { Component } from '@angular/core';

@Component({
    selector: 'cart-informer',
    templateUrl: './cart-informer.component.html'
})
export class CartInformer {
  private productsInCart : object[];

  constructor() {
    this.productsInCart = [
      {name: 'Test product 1', desc: 'Test desc', price: 245},
      {name: 'Test product 2', desc: 'Test desc', price: 644},
      {name: 'Test product 3', desc: 'Test desc', price: 93},
      {name: 'Test product 4', desc: 'Test desc', price: 456}
    ];

    setTimeout( () => {
      this.pushElement();
    }, 3000);

    setTimeout( () => {
      this.emptyCart();
    }, 6000);
  }

  pushElement(){
    this.productsInCart.push({name: 'Test product 5', desc: 'Test desc', price: 354});
  }

  emptyCart(){
    this.productsInCart.length = null;
  }
}
