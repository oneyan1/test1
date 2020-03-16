import {createMoney } from "easy-money";

const money = createMoney({ amount: 15, currency: "RUB" });
const money1 = createMoney({ amount: 10, currency: "USD" });

money.allocateTo(2).map(result => result.getAmount());
//  => "8", "7"

money1.allocateTo(3).map(result => result.getAmount());
// => "4", "3", "3"