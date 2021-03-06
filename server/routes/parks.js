var express = require('express');
var router = express.Router();
var passport = require('passport');
var Park = require('../models/parks');

router.get('/', function(req, res) {
    Park.find({}, function(err, data) {
        if(err) {
            console.log(err);
        }
        res.send(data);
    }).sort({'park' : 1});
});

router.post('/', function(req, res) {
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

router.put('/fav/:id', function(req, res) {
    var userID = req.body.user;
    var id = req.params.id;
    console.log('User ID from server:: ', userID);
    Park.findByIdAndUpdate(id, {$push: {favorite: {user: userID}}}, function(err, data) {
        if(err) {
            console.log(err);
        }
        res.sendStatus(200);
    });
});

router.put('/:id', function(req, res) {
    var userID = req.body.user;
    var id = req.params.id;
    console.log('User ID from server:: ', userID);
    Park.findByIdAndUpdate(id, {$push: {visited: {user: userID}}}, function(err, data) {
        if(err) {
            console.log(err);
        }
        res.sendStatus(200);
    });
});


module.exports = router;