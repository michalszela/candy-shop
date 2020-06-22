import { CreditCardType } from '../../modules/products/enums/credit-card-type.enum';

export const CreditCardsData = {
  americanExpress: {
    type: CreditCardType.AmericanExpress,
    name: 'American Express',
    image: '/assets/img/credit-cards/american-express.png',
    cvvDigits: 4,
    pattern: /^3[47][0-9]{13}$/,
  },
  masterCard: {
    type: CreditCardType.MasterCard,
    name: 'Master Card',
    image: '/assets/img/credit-cards/mastercard.png',
    cvvDigits: 3,
    pattern: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
  },
  maestro: {
    type: CreditCardType.Maestro,
    name: 'Maestro',
    image: '/assets/img/credit-cards/maestro.png',
    cvvDigits: 3,
    pattern: /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/
  },
  visa: {
    type: CreditCardType.Visa,
    name: 'Visa',
    image: '/assets/img/credit-cards/visa.png',
    cvvDigits: 3,
    pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
  },
};
