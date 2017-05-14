import {Component, OnInit} from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-informer',
  templateUrl: './cart-informer.component.html',
  providers: [CartService]
})
export class CartInformer implements OnInit {
  private productsInCart: any;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.getData2().subscribe(res => {
      console.log(res, 'dsfsdfsd');
      this.productsInCart = res;
    });
  }
}
