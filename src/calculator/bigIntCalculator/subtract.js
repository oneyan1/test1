import { createBigIntCalculator } from 'easy-money';

const calculator = createBigIntCalculator();

const result = calculator.subtract(40n, 5n);
// => 35n

const result1 = calculator.add(1n, 1n);
// => 0n
