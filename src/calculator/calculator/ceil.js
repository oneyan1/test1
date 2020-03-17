import { createCalculator } from 'easy-money';

const calculator = createCalculator();

const result = calculator.ceil('1.2');
// => "2"

const result1 = calculator.ceil('-1.2');
// => "-1"

const result2 = calculator.ceil('2.0');
// => "2"
