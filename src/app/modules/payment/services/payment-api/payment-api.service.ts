import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductGroups } from '../../../../modules/cart/interfaces/product-group.interface';
import { CreditCard } from '../../../../modules/account/interfaces/credit-card';

@Injectable()
export class PaymentApiService {

  constructor(private http: HttpClient) {}

  pay( products: ProductGroups, creditCard: CreditCard ): Observable<boolean> {
    return this.http.post<boolean>(`http://fake-endpoint.com/payment`, {
      products,
      creditCard
    });
  }
}
