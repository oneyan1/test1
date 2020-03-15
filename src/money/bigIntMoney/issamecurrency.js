import { createBigIntMoney } from "easy-money";

//if currentcies are same
const money = createBigIntMoney({ amount: 100n, currency: "USD" });

const money2 = createBigIntMoney({ amount: 200n, currency: "USD" });

money.isSameCurrency(money2);
// => true

//if currencies arent same
const money3 = createBigIntMoney({ amount: 100n, currency: "USD" });

const money4 = createBigIntMoney({ amount: 200n, currency: "RUB" });

money3.isSameCurrency(money4);
// => false