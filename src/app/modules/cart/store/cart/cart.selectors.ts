import { createSelector, createFeatureSelector } from '@ngrx/store';

import { round } from 'mathjs';
import { CartModuleState } from '../store';

export const carttModuleState = createFeatureSelector<CartModuleState>('cart');

export const selectCartState = createSelector(
  carttModuleState,
  state => state.cart
);

export const selectCartPoducts = createSelector(
  selectCartState,
  state => state.products
);

export const selectCartPoductsTotalPrice = createSelector(
  selectCartState,
  state => {
    let total = 0;

    state.products.forEach(group => total += group.totalPrice);

    return round(total, 2);
  }
);

export const selectCartPoductsNumber = createSelector(
  selectCartState,
  state => state.products.length
);
