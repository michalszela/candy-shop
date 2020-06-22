import { CreditCardType } from '../../products/enums/credit-card-type.enum';

export interface CreditCard {
  type: CreditCardType;
  cardNumber: number;
  cvv: number;
  nameOnCard: string;
  expirationDate: string;
}
