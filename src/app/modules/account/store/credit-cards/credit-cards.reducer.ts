import { createReducer, on } from '@ngrx/store';

import { CreditCard } from '../../../../modules/account/interfaces/credit-card';
import { CreditCardsActions } from './credit-cards.actions';
import { FAKE_CREDIT_CARD_1, FAKE_CREDIT_CARD_2 } from '../../../../fake-backend/responses/credit-card';

export interface CreditCardsState {
  creditCards: CreditCard[];
  default: CreditCard;
}

export const initialState: CreditCardsState = {
  creditCards: [FAKE_CREDIT_CARD_1, FAKE_CREDIT_CARD_2],
  default: FAKE_CREDIT_CARD_1
};

// tslint:disable-next-line: variable-name
const _creditCardsReducer = createReducer(initialState,
  on(CreditCardsActions.AddCreditCard, (state, action) => {
    return {
      ...state,
      creditCards: [...state.creditCards, action.creditCard],
      default: action.creditCard
    };
  }),
);

export function creditCardsReducer(state, action) {
  return _creditCardsReducer(state, action);
}
