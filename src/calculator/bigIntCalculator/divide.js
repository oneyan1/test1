import { createBigIntCalculator } from "easy-money";

const calculator = createBigIntCalculator();

//if roundingMode: HALF_EVEN
const result = calculator.divide(10n, 5n , "HALF_EVEN");
// => 2n

const result1 = calculator.divide(5n, 2n, "HALF_EVEN");
// => 2n

const result2 = calculator.divide(11n, -6n, "HALF_EVEN");
// => -2n

const result3 = calculator.divide(13n, -5n, "HALF_EVEN");
// => -3n

//if roundingMode: HALF_UP
const result4 = calculator.divide(6n, 4n , "HALF_UP");
// => 2n

const result5 = calculator.divide(17n, 7n, "HALF_UP");
// => 2n

const result6 = calculator.divide(11n, -6n, "HALF_UP");
// => -2n

const result7 = calculator.divide(10n, -4n, "HALF_UP");
// => -3n

//if roundingMode: HALF_DOWN
const result8 = calculator.divide(6n, 4n , "HALF_DOWN");
// => 1n

const result9 = calculator.divide(5n, 2n, "HALF_DOWN");
// => 2n

const result10 = calculator.divide(10n, -6n, "HALF_DOWN");
// => -2n

const result11 = calculator.divide(10n, -4n, "HALF_DOWN");
// => -2n

//if roundingMode: FLOOR
const result12 = calculator.divide(10n, 9n , "FLOOR");
// => 1n

const result13 = calculator.divide(15n, 7n, "FLOOR");
// => 2n

const result14 = calculator.divide(11n, -6n, "FLOOR");
// => -2n

const result15 = calculator.divide(14n, -5n, "FLOOR");
// => -3n

//if roundingMode: CEILING
const result16 = calculator.divide(10n, 9n , "CEILING");
// => 2n

const result17 = calculator.divide(12n, -5n, "CEILING");
// => -2n

//if roundingMode: DOWN
const result18 = calculator.divide(5n, 2n, "DOWN");
// => 2n

const result19 = calculator.divide(14n, -5n, "DOWN");
// => -2n

//if roundingMode: UP
const result20 = calculator.divide(5n, 2n, "UP");
// => 3n

const result21 = calculator.divide(14n, -5n, "UP");
// => -3n