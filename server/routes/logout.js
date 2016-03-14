var express = require('express');
var router = express.Router();
var passport = require('passport');

// Handles logout form GET from user.html
router.get('/', function(req, res) {
    //console.log('destroying session...?');

    req.session.destroy(function(err) {
        //console.log('session destroyed...?');
        res.redirect('/');
    });
});

module.exports = router;