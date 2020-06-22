import { AbstractControl, ValidatorFn } from '@angular/forms';

import { CreditCardsData } from '../consts/credit-card-data.const';

export function creditCardNumberValidator(config: { creditCardNameField: string }): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) {
      return null;
    }

    const creditCardType: string = control.parent.get(config.creditCardNameField).value;

    if (!creditCardType) {
      return null;
    }

    const creditCard = Object.values(CreditCardsData).find(CreditCardData => CreditCardData.type === creditCardType);

    if (!creditCard) {
      return null;
    }

    const forbidden = !creditCard.pattern.test(control.value);

    return forbidden ? { invalidCreditCardNumber: { value: control.value, creditCardType } } : null;
  };
}
