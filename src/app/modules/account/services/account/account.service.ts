import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AccountState } from '../../store/store';
import { User } from '../../interfaces/user';
import { selectUser } from '../../store/user/user.selectors';
import { CreditCard } from '../../interfaces/credit-card';
import { selectCreditCards, selectDefaultCreditCard } from '../../store/credit-cards/credit-cards.selectors';
import { CreditCardsActions } from '../../store/credit-cards/credit-cards.actions';

@Injectable()
export class AccountService {

  constructor(private store: Store<AccountState>) { }

  get user$(): Observable<User> {
    return this.store.select(selectUser);
  }

  get creditCards$(): Observable<CreditCard[]> {
    return this.store.select(selectCreditCards);
  }

  get defaultCreditCard$(): Observable<CreditCard> {
    return this.store.select(selectDefaultCreditCard);
  }

  addCreditCard(creditCard: CreditCard): void {
    this.store.dispatch(CreditCardsActions.AddCreditCard({ creditCard }));
  }
}
