import {createBigIntMoney} from "easy-money";

const money1 = createBigIntMoney({amount: 100n, currentcy: "USD"});

const result = money1.devide(5);

const result2 = money1.devide(1 / 2);

result.getAmount();
// ->20n

result2.getAmount();
// ->200n
