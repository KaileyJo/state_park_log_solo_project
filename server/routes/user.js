var express = require('express');
var router = express.Router();
var passport = require('passport');

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


module.exports = router;