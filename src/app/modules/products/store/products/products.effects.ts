import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsApiService } from '../../services/products-api/products-api.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialog } from '@angular/material/dialog';
import { ProductsActionTypes, ProductsActions } from './products.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { SuccessDialogComponent } from 'src/app/components/success-dialog/success-dialog.component';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsApiService: ProductsApiService,
    private loaderService: NgxUiLoaderService,
    private dialog: MatDialog,
  ) { }

  load$ = createEffect(() => this.actions$.pipe(
    ofType(ProductsActionTypes.LOAD),
    tap(() => {
      this.loaderService.start();
    }),
    mergeMap((action: any) => {
      return this.productsApiService.load()
        .pipe(
          map( products => {
            this.loaderService.stop();

            return ProductsActions.LoadSuccess( { products } );
          }),
          catchError(error => {
            this.loaderService.stop();
            this.dialog.open(SuccessDialogComponent, {
              data: {
                title: 'Load products failed',
                message: 'Try again...'
              }
            });

            return of(ProductsActions.LoadError({ error: error.error }));
          })
        );
    })
  ));
}
