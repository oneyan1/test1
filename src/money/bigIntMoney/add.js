import { createBigIntMoney } from "easy-money";

const money = createBigIntMoney({ amount: 100n, currency: "USD" });

const money2 = createBigIntMoney({ amount: 100n, currency: "USD" });

const result = money.add(money2);

result.getAmount();
// => 200n
