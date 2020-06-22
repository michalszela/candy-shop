import { creditCardCvvValidator } from './credit-card-cvv.validator';
import { creditCardNumberValidator } from './credit-card-number.validator';
import { creditCardExpirationDateValidator } from './credit-card-expiration-date.validator';

export const CustomValidators = {
  creditCardCvv: creditCardCvvValidator,
  creditCardNumber: creditCardNumberValidator,
  creditCardExpirationDate: creditCardExpirationDateValidator
};
