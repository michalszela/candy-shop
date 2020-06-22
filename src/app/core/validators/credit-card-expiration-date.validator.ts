import { AbstractControl, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';

export function creditCardExpirationDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    const isValidFormat = /^[0-9]{2}\/[0-9]{4}$/.test(value);

    if (!isValidFormat) {
      return { invalidCreditCardExpirationDate: { invalidFormat: true } };
    }

    const day = moment(`01/${value}`, 'DD/MM/YYYY');

    if (day.isValid()) {
      if (day.isBefore(moment())) {
        return { invalidCreditCardExpirationDate: { isPastDate: true } };
      } else {
        return null;
      }
    }

    return { invalidCreditCardExpirationDate: { value: control.value } };
  };
}
