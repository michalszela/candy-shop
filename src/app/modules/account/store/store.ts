import { ActionReducerMap } from '@ngrx/store';

import { CreditCardsState, creditCardsReducer } from './credit-cards/credit-cards.reducer';
import { UserState, userReducer } from './user/user.reducer';
import { UserEffects } from './user/user.effects';

export interface AccountState {
  user: UserState;
  creditCards: CreditCardsState;
}

export const accountReducers: ActionReducerMap<AccountState> = {
  user: userReducer,
  creditCards: creditCardsReducer,
};

export const accountEffects = [
  UserEffects,
];
