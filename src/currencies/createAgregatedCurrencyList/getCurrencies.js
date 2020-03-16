import {createAgregatedCurrencyList, createCurrencyList} from "easy-money";

const currency = {minorUnit: 2, code: "XBT"};
const currency1 = {minorUnit: 5, code: "DXBT"};
const currencyArr = [currency, currency1];

const list = createCurrencyList(currencyArr);
const agregatedList = createAgregatedCurrencyList([list]);

const result = agregatedList.getCurrencies();
// =>   { XBT: {minorUnit: 2, code: "XBT"},
//       DXBT: {minorUnit: 5, code: "DXBT"} }

//---------------------------------------------------

const currency2 = {minorUnit: 2, code: "SADXBTA", meta:{}};
const currency3 = {minorUnit: 5, code: "ASDDXBT", meta:{}};
const currencyArr1 = [currency2, currency3];

const list1 = createCurrencyList(currencyArr1);

const agregatedList1 = createAgregatedCurrencyList([list, list1]);

const result1 = agregatedList1.getCurrencies();

const resultLength = Object.keys(result1).length === currencyArr.length + currencyArr1.length ? true : false;
// => true