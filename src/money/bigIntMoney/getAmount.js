import {createBigIntMoney} from "easy-money";

const result1 = createBigIntMoney({amount: 100n, currency: "USD"});

result1.getAmount();
// => 100n
