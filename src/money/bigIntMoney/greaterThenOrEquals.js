import { createBigIntMoney } from 'easy-money';

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.greaterThanOrEqual(money2);
// => true

//if first value greater than second
const money3 = createBigIntMoney({ amount: 150n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money3.greaterThanOrEqual(money4);
// => true
