import { createBigIntMoney } from 'easy-money';

const result1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

result1.getCurrency();
// => "USD"
