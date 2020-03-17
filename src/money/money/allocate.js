import { createMoney } from 'easy-money';

const money = createMoney({ amount: 100, currency: 'RUB' });
const money1 = createMoney({ amount: 101, currency: 'USD' });
const money2 = createMoney({ amount: 1, currency: 'USD' });

const allocated = money.allocate([1, 1, 1]);
const allocated1 = money1.allocate([1, 1, 1]);
const allocated2 = money2.allocate([0.33, 0.66]);

allocated.map((result) => result.getAmount());
// => "34", "33", "33"

allocated1.map((result) => result.getAmount());
// => "34", "34", "33"

allocated2.map((result) => result.getAmount());
// => "0", "1"

//if allocate for negative values
const moneyNegative = createMoney({ amount: -5, currency: 'RUB' });

const allocatedNegative = moneyNegative.allocate([3, 7]);

allocatedNegative.map((result) => result.getAmount());
// => "-2", "-3"
