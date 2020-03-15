import {createBigIntMoney} from "easy-money";

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: "USD" });

const money2 = createBigIntMoney({ amount: 100n, currency: "USD" });

money.lessThan(money2);
// => false

//if first value less then second
const money3 = createBigIntMoney({ amount: 100n, currency: "USD" });

const money4 = createBigIntMoney({ amount: 150n, currency: "USD" });

money3.lessThan(money4);
// => true