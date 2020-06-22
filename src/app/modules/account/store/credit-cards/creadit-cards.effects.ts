import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class CreditCardsEffects {
  constructor(
    private actions$: Actions,
  ) { }
}
