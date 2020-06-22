import { createAction, props } from '@ngrx/store';

import { ProductGroups } from '../../../../modules/cart/interfaces/product-group.interface';
import { CreditCard } from '../../../../modules/account/interfaces/credit-card';


export enum PaymentActionTypes {
  PAY = '[Payment] Pay',
  PAY_SUCCESS = '[Payment] Pay Success',
  PAY_ERROR = '[Payment] Pay Error',
}

export const Pay = createAction(PaymentActionTypes.PAY, props<{ products: ProductGroups, creditCard: CreditCard }>());
export const PaySuccess = createAction(PaymentActionTypes.PAY_SUCCESS);
export const PayError = createAction(PaymentActionTypes.PAY_ERROR, props<{ error: any }>());

export const PaymentActions = {
  Pay,
  PaySuccess,
  PayError,
};
