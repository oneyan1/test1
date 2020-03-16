import { createBigIntCalculator } from "easy-money";

const calculator = createBigIntCalculator();

const result = calculator.share(100n, 1n, 3n);
// => 33n
