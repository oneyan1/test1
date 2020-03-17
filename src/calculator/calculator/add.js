import { createCalculator } from 'easy-money';

const calculator = createCalculator();

const result = calculator.add('1', '1');
// => "2"

const result1 = calculator.add('10', '5');
// => "15"
