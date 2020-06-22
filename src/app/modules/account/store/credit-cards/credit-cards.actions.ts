import { createAction, props } from '@ngrx/store';

import { CreditCard } from '../../../../modules/account/interfaces/credit-card';

export enum CreditCardsActionTypes {
  ADD_CREDIT_CARD = '[Credit Card] Add Credit Card',
  SET_DEFAULT_CREDIT_CARD = '[Credit Card] Set default Credit Card',
}

export const AddCreditCard = createAction(CreditCardsActionTypes.ADD_CREDIT_CARD, props<{ creditCard: CreditCard }>());

export const CreditCardsActions = {
  AddCreditCard,
};
