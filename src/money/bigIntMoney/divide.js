import { createBigIntMoney } from "easy-money";

const money1 = createBigIntMoney({amount: 100n, currency: "USD"});

const result = money1.divide(5);

const result2 = money1.divide(1 / 2);

result.getAmount();
// ->20n

result2.getAmount();
// ->200n
