import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from './modules/cart/services/cart/cart.service';
import { ProductsService } from './modules/products/services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cartProductsNumber$: Observable<number>;

  constructor(private cartService: CartService, private productsService: ProductsService){
    this.cartProductsNumber$ = cartService.productsNumber$;
  }

  ngOnInit(): void {
    this.productsService.load();
  }
}
