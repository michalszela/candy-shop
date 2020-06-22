import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ProductGroups } from '../../interfaces/product-group.interface';
import { Product } from '../../../../modules/products/interfaces/product.interface';
import { CartModuleState } from '../../store/store';
import { selectCartPoducts, selectCartPoductsNumber, selectCartPoductsTotalPrice } from '../../store/cart/cart.selectors';
import { CartActions } from '../../store/cart/cart.actions';

@UntilDestroy()
@Injectable()
export class CartService {

  constructor(private store: Store<CartModuleState>, private snackBar: MatSnackBar) {}

  get products$(): Observable<ProductGroups> {
    return this.store.select(selectCartPoducts);
  }

  get productsNumber$(): Observable<number> {
    return this.store.select(selectCartPoductsNumber);
  }

  get totalPrice$(): Observable<number> {
    return this.store.select(selectCartPoductsTotalPrice);
  }

  addProduct(product: Product): void {
    this.store.dispatch(CartActions.AddProduct({product}));

    this.snackBar
      .open('Product added to cart.', 'Undo', { verticalPosition: 'top', duration: 2000 })
      .afterDismissed()
      .pipe(
        untilDestroyed(this),
        filter(dismiss => dismiss.dismissedByAction)
      )
      .subscribe(() => {
        this.removeProduct(product);
      });
  }

  removeProduct(product: Product): void {
    this.store.dispatch(CartActions.RemoveProduct({id: product.id}));

    this.snackBar
      .open('Product removed from cart.', 'Undo', { verticalPosition: 'top', duration: 2000 })
      .afterDismissed()
      .pipe(
        untilDestroyed(this),
        filter(dismiss => dismiss.dismissedByAction)
      )
      .subscribe(() => {
        this.addProduct(product);
      });
  }

  clear(): void {
    this.store.dispatch(CartActions.Clear());
  }
}
