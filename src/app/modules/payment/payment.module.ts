import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ErrorStateMatcher } from '@angular/material/core';

import { NgxMaskModule } from 'ngx-mask';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './components/payment/payment.component';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { AddCreditCardDialogComponent } from './components/add-credit-card-dialog/add-credit-card-dialog.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { AppErrorStateMatcher } from '../../core/forms/error-state-matcher';
import { PaymentService } from './services/payment/payment.service';
import { CanActivatePaymentSuccessGuard } from './guards/can-activate-payment-success.guard';
import { CanActivatePaymentGuard } from './guards/can-activate-payment.guard';
import { CanDeactivatePaymentSuccessGuard } from './guards/can-deactivate-payment-success.guard';
import { PaymentApiService } from './services/payment-api/payment-api.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { paymentReducers, paymentEffects } from './store/store';

@NgModule({
  declarations: [
    PaymentComponent,
    CreditCardFormComponent,
    AddCreditCardDialogComponent,
    PaymentSuccessComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgxMaskModule.forChild(),
    MatTableModule,
    StoreModule.forFeature('payment', paymentReducers),
    EffectsModule.forFeature(paymentEffects),
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: AppErrorStateMatcher },
    PaymentService,
    CanActivatePaymentSuccessGuard,
    CanActivatePaymentGuard,
    CanDeactivatePaymentSuccessGuard,
    PaymentApiService
  ]
})
export class PaymentModule { }
