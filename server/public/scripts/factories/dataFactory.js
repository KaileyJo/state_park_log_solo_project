myApp.factory('dataFactory', ['$http', function($http) {
    var parkList = undefined;

    var getParkData = function() {
        console.log('Getting Data');
        var promise = $http.get('/parks').then(function(response) {
            parkList = response.data;
            //console.log('Async data response', parkList);
        });
        return promise;
    };

    var postParkData = function(park) {
        var promise = $http.post('/parks', park).then(function(response) {});
        return promise;
    };

    var selectPark = function(park) {
        parkList = park;
    };

    var publicApi = {
        getParks: function() {
            return getParkData();
        },
        postPark: function(park) {
            return postParkData(park);
        },
        parksList: function() {
            return parkList;
        },
        currentPark: function(park) {
            selectPark(park);
        }
    };

    return publicApi;
}]);