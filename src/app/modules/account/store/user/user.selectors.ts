import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AccountState } from '../store';

export const accountModuleState = createFeatureSelector<AccountState>('account');

export const selectUserState = createSelector(
  accountModuleState,
  state => state.user
);

export const selectUser = createSelector(
  selectUserState,
  state => state.user
);
