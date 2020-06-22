import { createReducer, on } from '@ngrx/store';
import { PaymentActions } from './payment.actions';

export interface PaymentState {
  isPending: boolean;
  error: any;
  completed: boolean;
}

export const initialState: PaymentState = {
  isPending: false,
  error: null,
  completed: false,
};

// tslint:disable-next-line: variable-name
const _paymentReducer = createReducer(initialState,
  on(PaymentActions.Pay, (state) => {
    return {
      ...state,
      isPending: true,
      error: null,
      completed: false,
    };
  }),
  on(PaymentActions.PaySuccess, (state) => {
    return {
      ...state,
      isPending: false,
      error: null,
      completed: true,
    };
  }),
  on(PaymentActions.PayError, (state, action) => {
    return {
      ...state,
      isPending: false,
      error: action.error,
      completed: false,
    };
  }),
);

export function paymentReducer(state, action) {
  return _paymentReducer(state, action);
}
