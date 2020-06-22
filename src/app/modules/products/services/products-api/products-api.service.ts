import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../../interfaces/product.interface';

@Injectable()
export class ProductsApiService {

  constructor(private http: HttpClient) {}

  load(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://fake-endpoint.com/products`);
  }
}
