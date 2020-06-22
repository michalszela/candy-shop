import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductsModuleState } from '../../store/store';
import { Product } from '../../interfaces/product.interface';
import { selectProducts } from '../../store/products/products.selectors';
import { ProductsActions } from '../../store/products/products.actions';


@Injectable()
export class ProductsService {

  constructor(private store: Store<ProductsModuleState>) { }

  get products$(): Observable<Product[]> {
    return this.store.select(selectProducts);
  }

  load(): void {
    this.store.dispatch(ProductsActions.Load());
  }
}
