import { createBigIntMoney } from "easy-money";

const money1 = createBigIntMoney({amount:100n, currency:"USD"});

const result = money1.multiply(6);

result.getAmount();
//->600n