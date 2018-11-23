var url = require('url');

var addr = "http://localhost:8080/test?uname=test&password=nothgin";
var q = url.parse(addr, true);

console.log(1);