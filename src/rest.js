//Basic RESTful API service using express
var express = require('express');
var app = express();

//So I guess you can declare functions with => too
// (parameters) => {result}

var func = (param1) => {
    return param1;
}

app.listen(8080, () => {
    console.log("App listening on port 8080");
});

app.get('/url', (req, res, next ) => {
    console.log(func("test"));
    console.log(req.headers);
    res.json(["test", "test", "test"]);
});