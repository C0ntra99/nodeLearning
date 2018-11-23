var http = require('http');
var dateTime = require('./dateTime.js');
var url = require('url');

http.createServer( function ( req, res) {
    res.writeHead(200, {'Content-type':'text/plain'});
    //res.write(req.url);
    console.log(req.url);

    //Will parse the uel and create a dictionary of the url
    var q = url.parse(req.url, true).query;
    var txt = q.test + " " + q.month;

    res.write(txt);

    //Using an custom imported method
    res.write(' Current Date: ' + dateTime.dateTime());
    res.end();
    console.log(req.headers['user-agent']);
    console.log(dateTime.dateTime());
}).listen(8080);
