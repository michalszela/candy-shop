import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { CartService } from '../../cart/services/cart/cart.service';

@Injectable()
export class CanDeactivatePaymentSuccessGuard implements CanDeactivate<unknown> {

  constructor(private cartService: CartService) {}

  canDeactivate(): boolean {
    this.cartService.clear();

    return true;
  }

}
