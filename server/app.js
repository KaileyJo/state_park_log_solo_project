var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var passport = require('./strategies/user');
var session = require('express-session');

var login = require('./routes/login');
var logout = require('./routes/logout');
var user = require('./routes/user');
var parks = require('./routes/parks');
var register = require('./routes/register');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'secret',
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: {maxage: 60000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/register', register);
app.use('/user', user);
app.use('/parks', parks);
app.use('/login', login);
app.use('/logout', logout);

//local DB
//var mongoURI = 'mongodb://localhost:27017/stateparklog';

//heroku DB
var mongoURI = MONGODB_URI;

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err) {
    if(err) console.log('MONGO ERROR:: ', err);
});

mongoDB.once('open', function() {
    console.log('Connected to Mongo');
});

app.use(express.static('server/public/'));
app.use(express.static('server/public/views'));
app.use(express.static('server/public/vendors'));
app.use(express.static('server/public/styles'));
app.use(express.static('server/public/scripts'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});