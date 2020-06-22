import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ErrorStateMatcher } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { NgxMaskModule } from 'ngx-mask';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';
import { AccountModule } from './modules/account/account.module';
import { CartModule } from './modules/cart/cart.module';
import { fakeBackendProvider } from './fake-backend/providers/fake-backend.provider';
import { appReducers, appEffects } from './store/store';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { PaymentModule } from './modules/payment/payment.module';
import { UiModule } from './modules/ui/ui.module';
import { environment } from '../environments/environment';
import { MenuComponent } from './components/menu/menu.component';
import { AppErrorStateMatcher } from './core/forms/error-state-matcher';

@NgModule({
  declarations: [
    AppComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    MenuComponent,
    MenuComponent
  ],
  imports: [
    UiModule,
    PaymentModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule,
    ProductsModule,
    AccountModule,
    CartModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxUiLoaderModule,
    AppRoutingModule,
  ],
  providers: [
    fakeBackendProvider,
    { provide: ErrorStateMatcher, useClass: AppErrorStateMatcher },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
