import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../../services/cart/cart.service';
import { ProductGroups } from '../../interfaces/product-group.interface';
import { Product } from '../../../../modules/products/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['no', 'productName', 'quantity', 'price', 'totalPrice'];
  dataSource: Observable<ProductGroups>;
  totalPrice$: Observable<number>;

  constructor(private cartService: CartService) {
    this.dataSource = cartService.products$;
    this.totalPrice$ = cartService.totalPrice$;
  }

  ngOnInit(): void {}

  addProductToCart(product: Product): void {
    this.cartService.addProduct(product);
  }

  removeProductFromCart(product: Product): void {
    this.cartService.removeProduct(product);
  }
}
