const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-Parser');
const session = require('express-session');
const sqlite3 = require('sqlite3');

var initDB = (db) => {
    var db = new sqlite3.Database(db, (err) => {
        if (err) throw err;
    });
    return db;
}

//App depencies 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret:'SecretID'}));

app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
    if (!req.session.uname) {
        res.redirect('/login');
    } else if (req.session.loggedIn) {
        res.render('index.pug', {username:req.session.uname});
        console.log(req.session);
    } else {
        res.redirect('/login');
    } 
   
});

app.get('/login', (req, res, next) => {
    res.render('login.pug');
});

app.post('/login', (req, res, next) => {
    //init the database
    let db = initDB('main.db');
    let q = 'SELECT username, password FROM users WHERE username = ? AND password = ?'
    
    db.get(q, [req.body.uname, req.body.passwd], (err, row) => {
        if (err) throw err;
        if (row) {
            req.session.uname = req.body.uname;
            req.session.loggedIn = true;
            res.redirect('/'); 
        } else {
            res.render('login.pug', {err:"Username or password is incorrect"});
        }
    });
    
});

app.get('/logout', (req,res,next) => {
    req.session.destroy( (err) => {
        if (err) {
            res.negotiate(err);
        }
    });
    res.redirect('/');
});

app.get('/signup', (req, res, next) => {
    res.render('signup.pug');
});

app.post('/signup', (req, res, next) => {
    let db = initDB('main.db');
    let q = 'SELECT username FROM users WHERE username = ?';

    //Check for password requirements    
    db.get(q, [req.body.uname], (err, row) => {
        if (err) throw err;
        if (row) {
            res.render('signup.pug',{err:"Username already exist!"});
        } else {
            let q = 'INSERT INTO users (username, password) VALUES (?, ?)';
            db.run(q,[req.body.uname, req.body.passwd], (err) => {
                if (err) throw err;
            });
            res.redirect('/login');
            res.end();
        }
    });
});

module.exports = app;