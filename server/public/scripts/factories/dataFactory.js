myApp.factory('dataFactory', ['$http', '$window', function($http, $window) {
    var parkList = undefined;
    var visitedParkList = undefined;
    var favoriteParkList = undefined;
    var userInfo = undefined;

    var getParkData = function() {
        var promise = $http.get('/parks').then(function(response) {
            parkList = response.data;
            visitParkList();
            favParkList();
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

    var visitPark = function(parkID) {
        var data = {user: publicApi.userID};
        var promise = $http.put('/parks/' + parkID, data).then(function(response) {
        });
        return promise;
    };

    var favoritePark = function(parkID) {
        var data = {user: publicApi.userID};
        var promise = $http.put('/parks/fav/' + parkID, data).then(function(response) {
        });
        return promise;
    };

    var getUserData = function() {
        var promise = $http.get('/user').then(function(response) {
            if(response.data) {
                userInfo = {
                    userName: response.data.username,
                    userParks: response.data.parks
                };
                publicApi.userID = response.data._id;
                publicApi.loggedIn = true;

            } else {
                $window.location.href = '/#/login';
            }
        });

        return promise;
    };

    var visitParkList = function() {
        visitedParkList = [];
        for (var i = 0; i < parkList.length; i++) {
            if(parkList[i].visited) {
                var visitedPark = parkList[i].visited;
                for(var j = 0; j < visitedPark.length; j++) {
                    if (publicApi.userID == visitedPark[j].user) {
                        parkList[i].userVisited = true;
                        visitedParkList.push(parkList[i]);
                    }
                }
            }
        }
    };

    var favParkList = function() {
        favoriteParkList = [];
        for (var i = 0; i < parkList.length; i++) {
            if(parkList[i].favorite) {
                var favoritePark = parkList[i].favorite;
                for(var j = 0; j < favoritePark.length; j++) {
                    if (publicApi.userID == favoritePark[j].user) {
                        parkList[i].userFavorite = true;
                        favoriteParkList.push(parkList[i]);
                    }
                }
            }
        }
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
        visitedParksList: function() {
            return visitedParkList;
        },
        favoriteParksList: function() {
            return favoriteParkList;
        },
        currentPark: function(park) {
            selectPark(park);
        },
        updateMyParks: function(parkID) {
            return visitPark(parkID);
        },
        updateMyFavorites: function(parkID) {
            return favoritePark(parkID);
        },
        getUser: function() {
            return getUserData();
        },
        user: function() {
            return userInfo;
        },
        //visitedParks: function() {
        //    return getUserParkData();
        //},
        loggedIn: false,
        userID: false
    };

    return publicApi;
}]);




//var getUserParkData = function() {
//    var promise = $http.get('/user/' + publicApi.userID).then(function(response) {
//        if(response.data) {
//            userInfo = {
//                userName: response.data.username,
//                userParks: response.data.parks,
//                parkInfo: response.data.parkInfo
//            };
//            parkList = [];
//        } else {
//            console.log('errrrrrrr');
//        }
//    });
//
//    return promise;
//};