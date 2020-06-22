import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AccountState } from '../store';

export const accountModuleState = createFeatureSelector<AccountState>('account');

export const selectCreditCardsState = createSelector(
  accountModuleState,
  state => state.creditCards
);

export const selectCreditCards = createSelector(
  selectCreditCardsState,
  state => state.creditCards
);

export const selectDefaultCreditCard = createSelector(
  selectCreditCardsState,
  state => state.default
);
