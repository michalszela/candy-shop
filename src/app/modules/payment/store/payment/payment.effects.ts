import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { PaymentActionTypes, PaymentActions } from './payment.actions';
import { PaymentApiService } from '../../services/payment-api/payment-api.service';
import { SuccessDialogComponent } from '../../../../components/success-dialog/success-dialog.component';

@Injectable()
export class PaymentEffects {
  constructor(
    private actions$: Actions,
    private paymentApiService: PaymentApiService,
    private loaderService: NgxUiLoaderService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  pay$ = createEffect(() => this.actions$.pipe(
    ofType(PaymentActionTypes.PAY),
    tap(() => {
      this.loaderService.start();
    }),
    mergeMap((action: any) => {
      return this.paymentApiService.pay(action.products, action.creditCard)
        .pipe(
          map(() => {
            this.loaderService.stop();
            this.router.navigate(['/payment/success']);

            return PaymentActions.PaySuccess();
          }),
          catchError(error => {
            this.loaderService.stop();
            this.dialog.open(SuccessDialogComponent, {
              data: {
                title: 'Payment failed',
                message: 'Try again...'
              }
            });

            return of(PaymentActions.PayError({ error: error.error }));
          })
        );
    })
  ));
}
