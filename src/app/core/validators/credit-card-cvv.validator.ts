import { AbstractControl, ValidatorFn } from '@angular/forms';

import { CreditCardsData } from '../consts/credit-card-data.const';

export function creditCardCvvValidator(config: { creditCardNameField: string }): ValidatorFn {
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

    const forbidden = !new RegExp(`^[0-9]{${creditCard.cvvDigits}}$`).test(control.value);

    return forbidden ? { invalidCreditCardCvv: { value: control.value, creditCardType } } : null;
  };
}
