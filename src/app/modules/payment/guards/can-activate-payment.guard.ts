import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CartService } from '../../cart/services/cart/cart.service';

@Injectable()
export class CanActivatePaymentGuard implements CanActivate {

  constructor(private cartService: CartService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.cartService.productsNumber$.pipe(
      map(productsNumber => !!productsNumber),
      tap((cartIsNotEmpty) => {
        if (!cartIsNotEmpty) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
