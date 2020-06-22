import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

import { AddCreditCardDialogComponent } from '../add-credit-card-dialog/add-credit-card-dialog.component';
import { PaymentService } from '../../services/payment/payment.service';
import { CreditCardsData } from '../../../../core/consts/credit-card-data.const';
import { CreditCard } from '../../../../modules/account/interfaces/credit-card';
import { AccountService } from '../../../../modules/account/services/account/account.service';
import { CartService } from '../../../../modules/cart/services/cart/cart.service';

@UntilDestroy()
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit {

  creditCardsData = CreditCardsData;
  creditCards$: Observable<CreditCard[]>;
  selectedCreditCard: CreditCard;
  totalPrice$: Observable<number>;

  constructor(
    private accountService: AccountService,
    private dialog: MatDialog,
    private paymentService: PaymentService,
    cartService: CartService
  ) {
    this.creditCards$ = accountService.creditCards$;
    this.totalPrice$ = cartService.totalPrice$;
  }

  get selectedCreditCardImg(): string {
    if (!this.selectedCreditCard) {
      return '';
    }

    return Object.values(CreditCardsData).find(ccd => ccd.type === this.selectedCreditCard.type).image;
  }

  ngOnInit(): void {
    this.accountService.defaultCreditCard$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(creditCard => this.selectedCreditCard = creditCard);
  }

  addNewCreditCard(): void {
    this.dialog.open(AddCreditCardDialogComponent, { minWidth: 300 })
      .afterClosed()
      .pipe(
        untilDestroyed(this),
        filter(data => data && data.creditCard)
      )
      .subscribe(data => {
        this.accountService.addCreditCard(data.creditCard);
      });
  }

  pay(): void {
    this.paymentService.pay();
  }
}
