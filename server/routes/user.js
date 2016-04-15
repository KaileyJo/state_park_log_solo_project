var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user');

router.get('/:id', function(req, res) {
    //console.log('getting user/parks');
    Users.aggregate([{$lookup:{
        from: 'parks',
        localField: 'name',
        foreignField: 'park',
        as: 'parkInfo'
    }}], function(err, data) {
        if(err) {
            console.log(err);
        }
        //else if (data._id == req.params.id) {
        //    console.log(data);
            res.send(data);
        //}

    });
});

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    // check if logged in
    if(req.isAuthenticated()) {
        // send back user object from database
        res.send(req.user);
        //console.log('I am:: ', req.user);
    } else {
        // failure best handled on the server. do redirect here.
        res.send(false);
        //console.log('Failed to send');
    }
});

//router.put('/:id', function)

router.put('/:id', function(req, res) {
    var parkName = req.body.parkName;
    var id = req.params.parkID;
    var campsite = req.body.campsite;
    var miles = req.body.miles;
    var notes = req.body.notes;
    var rating = req.body.rating;
    console.log('Park name from server:: ', parkName);
    Users.findByIdAndUpdate(id, {$push: {parks: {name: parkName, id: id, campsite: campsite, miles: miles, notes: notes, rating: rating}}}, function(err, data) {
        if(err) {
            console.log(err);
        }
        res.sendStatus(200);
    });
});

module.exports = router;


//db.users.update(
//    {_id: ObjectId('56e83b2de1503c814cee94a1')},
//    {$push: {parks: {$each: [{name: 'Banning', visited: true}]}}}
//)

//db.users.update(
//    {_id: ObjectId('56e83b2de1503c814cee94a1')},
//    {$push: {parks: {name: 'Scenic', visited: true}}}
//)