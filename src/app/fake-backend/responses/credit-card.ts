import { CreditCard } from '../../modules/account/interfaces/credit-card';
import { CreditCardType } from '../../modules/products/enums/credit-card-type.enum';

export const FAKE_CREDIT_CARD_1: CreditCard = {
  type: CreditCardType.Visa,
  cardNumber: 4427282248894544076,
  cvv: 123,
  expirationDate: '10/2024',
  nameOnCard: 'John Doe'
};

export const FAKE_CREDIT_CARD_2: CreditCard = {
  type: CreditCardType.Maestro,
  cardNumber: 6304469932824649,
  cvv: 123,
  expirationDate: '10/2023',
  nameOnCard: 'John Doe'
};
