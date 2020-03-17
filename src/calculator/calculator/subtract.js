import { createCalculator } from 'easy-money';

const calculator = createCalculator();

const result = calculator.subtract('1', '1');
// => "0"

const result1 = calculator.subtract('10', '5');
// => "5"
