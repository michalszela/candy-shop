import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

import { PaymentModuleState } from '../../store/store';
import { AccountService } from '../../../../modules/account/services/account/account.service';
import { CartService } from '../../../../modules/cart/services/cart/cart.service';
import { selectPaymentIsPendign, selectPaymentCompleted, selectPaymentError } from '../../store/payment/payment.selectors';
import { PaymentActions } from '../../store/payment/payment.actions';


@Injectable()
export class PaymentService {

  constructor(
    private store: Store<PaymentModuleState>,
    private accoutnService: AccountService,
    private cartService: CartService
  ) {}

  get payIsPending$(): Observable<boolean> {
    return this.store.select(selectPaymentIsPendign);
  }

  get payCompleted$(): Observable<boolean> {
    return this.store.select(selectPaymentCompleted);
  }

  get payError$(): Observable<any> {
    return this.store.select(selectPaymentError);
  }

  pay(): void {
    combineLatest([
      this.accoutnService.defaultCreditCard$,
      this.cartService.products$
    ])
    .pipe(
      take(1)
    )
    .subscribe(data => {
      const [ creditCard, products ] = data;
      this.store.dispatch(PaymentActions.Pay( { products, creditCard }));
    });
  }
}
