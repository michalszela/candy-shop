import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './components/account/account.component';
import { AccountService } from './services/account/account.service';
import { StoreModule } from '@ngrx/store';
import { accountReducers, accountEffects } from './store/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    StoreModule.forFeature('account', accountReducers),
    EffectsModule.forFeature(accountEffects),
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
