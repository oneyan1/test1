import { createCalculator } from 'easy-money';

const calculator = createCalculator();

const result = calculator.floor('2.7');
// => "2"

const result1 = calculator.floor('-2.7');
// => "-3"

const result2 = calculator.floor('2.0');
// => "2"
