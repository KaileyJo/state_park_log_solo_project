var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passport = require('./strategies/user');
var session = require('express-session');

var login = require('./routes/login');
var user = require('./routes/user');
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
app.use('/login', login);

mongoose.connect('mongodb://localhost/stateparklog');
mongoose.model(
    'Park',
    new Schema({
            'park': String,
            'type': String,
            'siteType': String,
            'siteNumber': Number,
            'miles': Number,
            'description': String,
            'link': String,
            'lat': Number,
            'long': Number,
            'region': String
        },
        {
            collection: 'parks'
        }
    )
);

var Park = mongoose.model('Park');

app.get('/parks', function(req, res) {
    Park.find({}, function(err, data) {
        if(err) {
            console.log(err);
        }
        res.send(data);
    }).sort({'park' : 1});
});

app.post('/parks', function(req, res) {
    var addPark = new Park({
        'park': req.body.park,
        'type': req.body.type,
        'siteType': req.body.siteType,
        'siteNumber': req.body.siteNumber,
        'miles': req.body.miles,
        'description': req.body.description,
        'link': req.body.link,
        'lat': req.body.lat,
        'long': req.body.long,
        'region': req.body.region
    });

    addPark.save(function(err, data) {
        if(err) {
            console.log('ERR::', err);
        }

        Park.find({}, function(err, data) {
            if(err) {
                console.log(err);
            }
            res.send(data);
        });
    });
});

app.use(express.static('server/public/'));
app.use(express.static('server/public/views'));
app.use(express.static('server/public/vendors'));
app.use(express.static('server/public/styles'));
app.use(express.static('server/public/scripts'));

var mongoURI = 'mongodb://localhost:27017/user_passport_session';

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err) {
    if(err) console.log('MONGO ERROR:: ', err);
});

mongoDB.once('open', function() {
    console.log('Connected to Mongo');
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});