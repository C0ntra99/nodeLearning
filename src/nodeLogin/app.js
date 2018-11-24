const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-Parser');

//App depencies 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res, next) => {
    if (typeof(req.cookies.userData) == 'undefined') {
        res.redirect('/login');
    } else if (req.cookies.userData.loggedIn) {
        res.sendFile(path.join(__dirname+'/views/index.html'));
    } else {
        res.redirect('/login');
    } 
   
});

app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname+'/views/login.html'));
});

app.post('/login', (req, res, next) => {
    
    var uname = req.body.uname;
    if (uname == 'username' && req.body.passwd == 'password') {
        
        let user = {
            name:req.body.uname,
            loggedIn:true
        }

        res.cookie("userData", user);
        res.redirect('/');
    } else {
        res.redirect('/login');
        res.end();
    }
});

app.get('/logout', (req,res,next) => {
    res.clearCookie('userData');
    res.redirect('/');
});

module.exports = app;