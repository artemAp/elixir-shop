import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {


  items: [object] = [{}];

  constructor(private dataService: ProductsService){

  }

  ngOnInit(){
    this.dataService.getData()
      .subscribe((resp: Response) => {
        this.items = resp.json().products;
      });
  }

}
