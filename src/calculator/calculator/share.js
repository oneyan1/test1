import { createCalculator } from 'easy-money';

const calculator = createCalculator();

const result = calculator.share('10', 2, 4);
// => "5"
