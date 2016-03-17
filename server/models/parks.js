var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
            'region': String,
            'visited': {user: Object}
        },
        {
            collection: 'parks'
        }
    )
);

var Park = mongoose.model('Park');

module.exports = mongoose.model('Park', Park);