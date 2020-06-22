import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { CanActivatePaymentGuard } from './guards/can-activate-payment.guard';
import { CanActivatePaymentSuccessGuard } from './guards/can-activate-payment-success.guard';
import { CanDeactivatePaymentSuccessGuard } from './guards/can-deactivate-payment-success.guard';

const routes: Routes = [
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [CanActivatePaymentGuard],
  },
  {
    path: 'payment/success',
    component: PaymentSuccessComponent,
    canActivate: [CanActivatePaymentSuccessGuard],
    canDeactivate: [CanDeactivatePaymentSuccessGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaymentRoutingModule { }
