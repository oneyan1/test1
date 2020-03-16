import { createBigIntCalculator } from "easy-money";

const calculator = createBigIntCalculator();

//if roundingMode: HALF_EVEN
const result = calculator.multiply(10n, 2n, "HALF_EVEN");
// => 20n

const result1 = calculator.multiply(7n, 0.50, "HALF_EVEN");
// => 4n

const result2 = calculator.multiply(10n, -0.06, "HALF_EVEN");
// => -1n

//if roundingMode: HALF_UP
const result3 = calculator.multiply(6n, 2.5 , "HALF_UP");
// => 15n

const result4 = calculator.multiply(10n, 0.06, "HALF_UP");
// => 1n

const result5 = calculator.multiply(10n, -0.02, "HALF_UP");
// => 0n

//if roundingMode: HALF_DOWN
const result6 = calculator.multiply(4n, -2 , "HALF_DOWN");
// => -8n

const result7 = calculator.multiply(10n, -0.06 , "HALF_DOWN");
// => -1n

const result8 = calculator.multiply(4n, -2 , "HALF_DOWN");
// => 21n

//if roundingMode: FLOOR
const result9 = calculator.multiply(5n, 2.5 , "FLOOR");
// => 12n

const result10 = calculator.multiply(10n, -0.55 , "FLOOR");
// => -6n

//if roundingMode: CEILING
const result11 = calculator.multiply(5n, 2.5 , "CEILING");
// => 13n

const result12 = calculator.multiply(10n, -0.55 , "FLOOR");
// => -5n

//if roundingMode: DOWN
const result13 = calculator.multiply(5n, 2.7, "DOWN");
// => 13n

const result14 = calculator.multiply(10n, -0.55 , "DOWN");
// => -5n

//if roundingMode: UP
const result15 = calculator.multiply(5n, 2n, "UP");
// => 13n

const result16 = calculator.multiply(10n, -0.55 , "UP");
// => -6n