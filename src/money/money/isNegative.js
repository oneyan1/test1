import { createMoney } from 'easy-money';

//if amount value is zero
const money = createMoney({ amount: 100, currency: 'USD' });

money.isNegative();
// => false

//if amount value isnt zero
const money1 = createMoney({ amount: -100, currency: 'USD' });

money1.isNegative();
// => true
