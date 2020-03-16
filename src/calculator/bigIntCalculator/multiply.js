import { createBigIntCalculator } from "easy-money";

const calculator = createBigIntCalculator();

//if roundingMode: HALF_EVEN
const result = calculator.multiply(10n, 2n, "HALF_EVEN");
// => 20n

//if roundingMode: HALF_UP
const result4 = calculator.multiply(6n, 4n , "HALF_UP");
// => 24n

//if roundingMode: HALF_DOWN
const result8 = calculator.multiply(6n, 2n , "HALF_DOWN");
// => 12n

