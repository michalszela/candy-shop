import { PaymentState, paymentReducer } from './payment/payment.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { PaymentEffects } from './payment/payment.effects';

export interface PaymentModuleState {
  payment: PaymentState;
}

export const paymentReducers: ActionReducerMap<PaymentModuleState> = {
  payment: paymentReducer
};

export const paymentEffects = [
  PaymentEffects,
];
