import { createAction, props } from '@ngrx/store';

import { Product } from '../../../../modules/products/interfaces/product.interface';

export enum CartActionTypes {
  ADD_PRODUCT = '[CART] Add product',
  REMOVE_PRODUCT = '[CART] Remove product',
  CLEAR = '[CART] Clear'
}

export const AddProduct = createAction(CartActionTypes.ADD_PRODUCT, props<{ product: Product }>());
export const RemoveProduct = createAction(CartActionTypes.REMOVE_PRODUCT, props<{ id: string }>());
export const Clear = createAction(CartActionTypes.CLEAR);

export const CartActions = {
  AddProduct,
  RemoveProduct,
  Clear
};
