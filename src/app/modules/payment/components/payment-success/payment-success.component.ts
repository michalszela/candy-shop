import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductGroups } from '../../../../modules/cart/interfaces/product-group.interface';
import { CartService } from '../../../../modules/cart/services/cart/cart.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentSuccessComponent implements OnDestroy {

  displayedColumns: string[] = ['no', 'productName', 'quantity', 'price', 'totalPrice'];
  dataSource: Observable<ProductGroups>;
  totalPrice$: Observable<number>;

  constructor(private cartService: CartService) {
    this.dataSource = cartService.products$;
    this.totalPrice$ = cartService.totalPrice$;
  }

  ngOnDestroy(): void {
    this.cartService.clear();
  }
}
