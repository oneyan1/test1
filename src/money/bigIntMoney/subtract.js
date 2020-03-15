import { createBigIntMoney } from "easy-money";

const money = createBigIntMoney({ amount: 100n, currency: "USD" });

const money2 = createBigIntMoney({ amount: 101n, currency: "USD" });

const result = money.subtract(money2);

result.getAmount();
// => -1n

