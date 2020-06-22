import { createReducer, on } from '@ngrx/store';

import { Product } from '../../../../modules/products/interfaces/product.interface';
import { ProductsActions } from './products.actions';

export interface ProductsState {
  products: Product[];
  isPending: boolean;
  error: any;
  completed: boolean;
}

export const initialState: ProductsState = {
  products: [],
  isPending: false,
  error: null,
  completed: false,
};

// tslint:disable-next-line: variable-name
const _productsReducer = createReducer(initialState,
  on(ProductsActions.Load, (state) => {
    return {
      ...state,
      isPending: true,
      error: null,
      completed: false,
    };
  }),
  on(ProductsActions.LoadSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
      isPending: false,
      error: null,
      completed: true,
    };
  }),
  on(ProductsActions.LoadError, (state, action) => {
    return {
      ...state,
      isPending: false,
      error: action.error,
      completed: false,
    };
  }),
);

export function productsReducer(state, action) {
  return _productsReducer(state, action);
}
