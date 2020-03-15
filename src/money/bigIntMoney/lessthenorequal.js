import {createBigIntMoney} from "easy-money";

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: "USD" });

const money2 = createBigIntMoney({ amount: 100n, currency: "USD" });

money.lessThanOrEqual(money2);
// => true

//if first value less then second
const mone3 = createBigIntMoney({ amount: 150n, currency: "USD" });

const money4 = createBigIntMoney({ amount: 100n, currency: "USD" });

money3.lessThanOrEqual(money4);
// => true