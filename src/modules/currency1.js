const currency = require('./currency.js');

console.log(Object.getOwnPropertyNames(currency));
console.log(currency.USToCanadian(50));
console.log(currency.canadianToUS(50));