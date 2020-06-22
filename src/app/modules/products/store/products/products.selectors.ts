import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ProductsState } from './products.reducer';
import { ProductsModuleState } from '../store';

export const productsModuleState = createFeatureSelector<ProductsModuleState>('products');

export const selectProductsState = createSelector(
  productsModuleState,
  state => state.products
);

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);
