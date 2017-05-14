import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService, ProductsService]
})
export class CartComponent implements OnInit {

  private productsIds: any;
  private products: [object] = [{}];
  private productsInCart: any = [];

  constructor(private cartService: CartService, private productsService: ProductsService){

  }

  removeFromCart(e, id: number){
    e.preventDefault();
    this.cartService.removeFromCart(id);
  }

  ngOnInit() {
    // this.productsIds =  this.cartService.getData2();
    this.cartService.getData2().subscribe(res => {
      console.log(res, 'dsfsdfsd');
      this.productsIds = res;
    });
    this.productsService.getData()
      .subscribe((resp: Response) => {
        this.products = resp.json().products;
        for (let i: number = 0; i < this.products.length; i++) {
          let currentProduct: any = this.products[i];
          if (this.productsIds.indexOf(currentProduct.id) != -1) {
            this.productsInCart.push(this.products[i]);
          }
        }
      });
  }

}
