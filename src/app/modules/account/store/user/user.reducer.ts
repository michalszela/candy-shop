import { createReducer } from '@ngrx/store';

import { User } from '../../interfaces/user';
import { FAKE_USER } from '../../../../fake-backend/responses/user';


export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: FAKE_USER,
};

// tslint:disable-next-line: variable-name
const _userReducer = createReducer(initialState);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
