import { createCurrencyList } from "easy-money";

//if currency doesnt exist in list
const currency = {minorUnit: 2, code: "XBT"};
const currency1 = {minorUnit: 5, code: "DXBT"};
const currencyArr = [currency, currency1];

const list = createCurrencyList(currencyArr);

list.contains(currency);
// => true

//if currency exist in list
const currency2 = {minorUnit: 2, code: "XBT"};
const currency3 = {minorUnit: 5, code: "DXBT"};
const currencyArr1 = [currency2, currency3];

const list1 = createCurrencyList(currencyArr);

const currency4 = {minorUnit: 2, code: "XBTt"};
list1.contains(currency4);
// => false