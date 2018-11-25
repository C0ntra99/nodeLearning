//create a class for currency that way it can be called and created in each exports
class Currency {

    //Similar to pythons __init__
    //Whenever a Currency instance is created set the value of canadianDollar
    constructor(canadianDollar) {
        this.canadianDollar = canadianDollar;
    }

    //methods that can be called with Currency.{method}({value});
    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }

    canadianToUS(canadian) {
        return this.roundTwoDecimals(canadian * this.canadianDollar);
    }

    USToCanadian(us) {
        return this.roundTwoDecimals(us / this.canadianDollar);
    }
}

//With this method all methods within Currency can be called individually
//Will return a class rather than an object
module.exports = Currency;