const canadianDollar = 0.91;

function roundTwo(ammount) {
    return Math.round(ammount * 100) / 100;
}

//This will export two functions and only allow programs that require currency.js to use these two functions
//Other progras wont be able to access canadiaDoller or roundTwo
//This will just return an object with the two methods
exports.canadianToUS = canadian => roundTwo(canadian * canadianDollar);
exports.USToCanadian = us => roundTwo(us / canadianDollar);
