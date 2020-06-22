import { createReducer, on } from '@ngrx/store';

import { round } from 'mathjs';

import { CartActions } from './cart.actions';
import { ProductGroups } from '../../interfaces/product-group.interface';

export interface CartState {
  products: ProductGroups;
}

export const initialState: CartState = {
  products: []
};

// tslint:disable-next-line: variable-name
const _cartReducer = createReducer(initialState,
  on(CartActions.AddProduct, (state, action) => {
    const existingGroupIndex = state.products.findIndex(group => group.product.id === action.product.id);

    if (existingGroupIndex !== -1) {
      const group = { ...state.products[existingGroupIndex] };
      group.quantity++;
      group.totalPrice = round(group.quantity * action.product.price, 2);

      return {
        ...state,
        products: Object.assign([], state.products, {[existingGroupIndex]: group})
      };
    }

    return {
      ...state,
      products: [
        ...state.products,
        {
          product: action.product,
          quantity: 1,
          totalPrice: action.product.price
        }
      ]
    };
  }),
  on(CartActions.RemoveProduct, (state, action) => {
    const group = state.products.find(group => group.product.id === action.id);

    if (group.quantity > 1 ) {
      return {
        ...state,
        products: state.products.map(group => {
          group = { ...group };

          if (group.product.id === action.id) {
            group.quantity--;
            group.totalPrice = round(group.quantity * group.product.price, 2);
          }

          return group;
        })
      };
    }

    return {
      ...state,
      products: state.products.filter(group => group.product.id !== action.id )
    };
  }),
  on(CartActions.Clear, (state) => {
    return {
      ...state,
      products: []
    };
  }),
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}
