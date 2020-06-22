import { ProductsState, productsReducer } from './products/products.reducer';
import { ActionReducerMap } from '@ngrx/store';

import { ProductsEffects } from './products/products.effects';

export interface ProductsModuleState {
  products: ProductsState;
}

export const productsReducers: ActionReducerMap<ProductsModuleState> = {
  products: productsReducer,
};

export const productsEffects = [
  ProductsEffects,
];
