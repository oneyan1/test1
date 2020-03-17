import { createMoney } from 'easy-money';

const money = createMoney({ amount: -100, currency: 'USD' });

const result = money.absolute();
// => "100"
