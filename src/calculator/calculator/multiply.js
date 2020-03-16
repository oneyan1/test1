import { createCalculator } from "easy-money";

const calculator = createCalculator();

const result = calculator.multiply("1", 1.5);
// => "1.5"

const result1 = calculator.multiply("10", 0.029);
// => "0.29"