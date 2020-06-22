import { ActionReducerMap } from '@ngrx/store';

import { CartState, cartReducer } from './cart/cart.reducer';
import { CartEffects } from './cart/cart.effects';

export interface CartModuleState {
  cart: CartState;
}

export const cartReducers: ActionReducerMap<CartModuleState> = {
  cart: cartReducer,
};

export const cartEffects = [
  CartEffects,
];
