import { createCalculator } from "easy-money";

const calculator = createCalculator();

const result = calculator.absolute("2");
// => "2"

const result1 = calculator.absolute("-2");
// => "2"
