//Interfacing with a SQL database using NodeJS
var mysql = require("mysql");

var sqlHost = 'localhost';
var u_name = "root";
var passwd = "root";

//Create a connection to the sql server
var con = mysql.createConnection({
    host: sqlHost,
    user: u_name,
    password: passwd,
    database: "mydb"
});

con.connect( function(err){
    if (err) throw err;
    console.log("Connected to " + sqlHost + " as " + u_name);
    //inserting one value at a time
    /*
    var q = "INSERT INTO customers (name, address) VALUES ('Test Company','1234 main street')";

    //inserting several
    var q = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['person1', 'main street'],
        ['person2', 'robin lane'],
        ['person3', 'bluebird street']
    ]
    */
    var q = "SELECT name,address FROM customers WHERE name LIKE 'person1'"
    //Whenever inserting several make sure sto specify the array that stores all the values
    con.query(q, function(err, result, fields) {
        if (err) throw err;
        console.log("Query: " + q);
        console.log(result);
        result.forEach( function(val){
            console.log(val.address);
        });
    });
});