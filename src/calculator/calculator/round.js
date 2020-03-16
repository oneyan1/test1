import { createCalculator } from "easy-money";

const calculator = createCalculator();

const result = calculator.round(2, "HALF_EVEN");
// => "2"

const result1 = calculator.round(2.5, "HALF_UP");
// => "3"

const result2 = calculator.round(2.5, "HALF_DOWN");
// => "2"

const result3 = calculator.round(2.5, "HALF_EVEN");
// => "2"

const result4 = calculator.round("12.50", "HALF_DOWN");
// => "12"

const result5 = calculator.round(-8328.57894736, "HALF_UP");
// => "-8329"