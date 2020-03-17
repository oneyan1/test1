import { createBigIntMoney } from 'easy-money';

const money = createBigIntMoney({ amount: 15n, currency: 'RUB' });
const money1 = createBigIntMoney({ amount: 10n, currency: 'USD' });

money.allocateTo(2).map((result) => result.getAmount());
//  => 8n, 7n

money1.allocateTo(3).map((result) => result.getAmount());
// => 4n, 3n, 3n
