import { createMoney } from 'easy-money';

//if currencies are same
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 200, currency: 'USD' });

money.isSameCurrency(money2);
// => true

//if currencies arent same
const money3 = createMoney({ amount: 100, currency: 'USD' });

const money4 = createMoney({ amount: 200, currency: 'RUB' });

money3.isSameCurrency(money4);
// => false
