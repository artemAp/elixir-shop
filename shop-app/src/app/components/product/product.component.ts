import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CartService]
})
export class ProductComponent implements OnInit {

  @Input() product: object;
  private productInCart: any;

  constructor(private cartService: CartService){

  }

  formatPrice(data: number) {
    if ( !data ) return false;
    let formatPrice = data.toString().split('').reverse().join('').replace(/([0-9]{3})/g, "$1 ").split('').reverse().join('');
    return `$ ${formatPrice}`;
  }

  addToCart(e, id: number){
    e.preventDefault();
    this.cartService.addToCart(id);
    this.productInCart = this.cartService.getData();
  }

  ngOnInit(){
    this.productInCart = this.cartService.getData();
  }

}
