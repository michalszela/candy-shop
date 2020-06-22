import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../../../modules/cart/services/cart/cart.service';

@UntilDestroy()
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  products$: Observable<Product[]>;

  constructor(
    public dialog: MatDialog,
    private cartService: CartService,
    productsService: ProductsService,
  ) {
    this.products$ = productsService.products$;
  }

  addProductToCart(product: Product): void {
    this.cartService.addProduct(product);
  }
}
