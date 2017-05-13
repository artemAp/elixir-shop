import {Component, OnInit} from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-informer',
  templateUrl: './cart-informer.component.html',
  providers: [CartService]
})
export class CartInformer implements OnInit {
  private productsInCart: object[];

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.productsInCart = this.cartService.getData();
  }
}
