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

  constructor(private cartService: CartService){

  }

  formatPrice(data: number) {
    if ( !data ) return false;
    let formatPrice = data.toString().split('').reverse().join('').replace(/([0-9]{3})/g, "$1 ").split('').reverse().join('');
    return `$ ${formatPrice}`;
  }

  addToCart(e, id: number){
    e.preventDefault();
    console.log('id', id);
    this.cartService.addToCart(id);
  }

  ngOnInit(){
    this.cartService.getData();
  }

}
