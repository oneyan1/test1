import { createMoney } from "easy-money";

const money = createMoney({ amount: 100, currency: "USD" });

const money2 = createMoney({ amount: 100, currency: "USD" });

money.compare(money2);
// => 0