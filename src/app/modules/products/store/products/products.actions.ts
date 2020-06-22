import { createAction, props } from '@ngrx/store';

import { Product } from '../../interfaces/product.interface';

export enum ProductsActionTypes {
  LOAD = '[Products] Load',
  LOAD_SUCCESS = '[Products] Load Success',
  LOAD_ERROR = '[Products] Load Error',
}

export const Load = createAction(ProductsActionTypes.LOAD);
export const LoadSuccess = createAction(ProductsActionTypes.LOAD_SUCCESS, props<{ products: Product[] }>());
export const LoadError = createAction(ProductsActionTypes.LOAD_ERROR, props<{ error: any }>());

export const ProductsActions = {
  Load,
  LoadSuccess,
  LoadError
};
