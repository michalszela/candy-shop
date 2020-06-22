import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PaymentModuleState } from '../store';

export const paymentModuleState = createFeatureSelector<PaymentModuleState>('payment');

export const selectPaymentState = createSelector(
  paymentModuleState,
  state => state.payment
);

export const selectPaymentIsPendign = createSelector(
  selectPaymentState,
  (state) => state.isPending
);

export const selectPaymentCompleted = createSelector(
  selectPaymentState,
  state => state.completed
);

export const selectPaymentError = createSelector(
  selectPaymentState,
  state => state.error
);
