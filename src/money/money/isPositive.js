import { createMoney } from 'easy-money';

//if amount value is zero
const money = createMoney({ amount: 100, currency: 'USD' });

money.isPositive();
// => true

//if amount value isnt zero
const money1 = createMoney({ amount: -100, currency: 'USD' });

money1.isPositive();
// => false
