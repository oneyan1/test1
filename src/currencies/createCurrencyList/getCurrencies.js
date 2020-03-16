import { createCurrencyList } from "easy-money";

const currency = {minorUnit: 2, code: "XBT"};
const currency1 = {minorUnit: 5, code: "DXBT"};
const currencyArr = [currency, currency1];

const list = createCurrencyList(currencyArr);

const result = list.getCurrencies();
// =>   { XBT: {minorUnit: 2, code: "XBT"},
//       DXBT: {minorUnit: 5, code: "DXBT"} }

const resultLength = Object.keys(result).length === currencyArr.length ? true : false;
// => true