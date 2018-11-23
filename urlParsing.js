var url = require('url');

var addr = "http://localhost:8080";
var q = url.parse(addr, true);

console.log(q);

//store all the parameters from the url
var params = q.query;

//retrieve all keys or values from a dictionary
console.log(Object.keys(params));
console.log(Object.values(params));