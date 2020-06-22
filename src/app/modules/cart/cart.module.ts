import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart/cart.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducers, cartEffects } from './store/store';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forFeature('cart', cartReducers),
    EffectsModule.forFeature( cartEffects ),
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
