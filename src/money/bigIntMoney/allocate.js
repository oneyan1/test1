import { createBigIntMoney } from "easy-money";

const money = createBigIntMoney({ amount: 100n, currency: "RUB" });
const money1 = createBigIntMoney({ amount: 101n, currency: "USD" });

const allocated = money.allocate([1, 1, 1]);
const allocated1 = money1.allocate([1, 1, 1]);

allocated.map(result => result.getAmount());
// => 34n, 33n, 33n

allocated1.map(result => result.getAmount());
// => 34n, 34n, 33n


//if allocate for negative values
const moneyNegative = createBigIntMoney({ amount: -5n, currency: "RUB" });

const allocatedNegative = moneyNegative.allocate([3, 7]);

allocatedNegative.map(result => result.getAmount());
// => 2n, 3n