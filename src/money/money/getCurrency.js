import { createMoney } from 'easy-money';

const result1 = createMoney({ amount: 100n, currency: 'USD' });

result1.getCurrency();
// -> "USD"
