const Currency = require('./currencyClass.js');
const cannadianDollar = 0.91;
const currency = new Currency(cannadianDollar);

console.log(currency.roundTwoDecimals(.123));
console.log(currency.USToCanadian(50));
console.log(currency.canadianToUS(50));