import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PaymentService } from '../services/payment/payment.service';

@Injectable()
export class CanActivatePaymentSuccessGuard implements CanActivate {

  constructor(private paymentService: PaymentService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.paymentService.payCompleted$.pipe(
      tap((paymentCompleted) => {
        if (!paymentCompleted) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
