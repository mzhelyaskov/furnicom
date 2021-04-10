import {Component} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  templateUrl: 'products-page.component.html',
  styleUrls: ['products-page.component.scss']
})
export class ProductsPageComponent {

  public products: Product[];

  constructor() {
    this.products = [
      {imgUrl: '/assets/images/products/6.jpg', name: 'AUTE BEEF', price: 180.00},
      {imgUrl: '/assets/images/products/7-300x300.jpg', name: 'PROID OIDENT ADIPISIC OIDENT ADIPISINT ADIPISICING LABORUM', price: 170.00},
      {imgUrl: '/assets/images/products/11-300x300.jpg', name: 'CAQUETOIRE', price: 99.00},
      {imgUrl: '/assets/images/products/16-300x300.jpg', name: 'DONEC VEL VENENATIS', price: 100.00},
      {imgUrl: '/assets/images/products/16-300x300 (1).jpg', name: 'SALAMI IN BALL TIP PIG EIUSMOD', price: 170.00},
      {imgUrl: '/assets/images/products/18-300x300.jpg', name: 'BALANS CHAIR', price: 180.00}
    ];
  }
}
