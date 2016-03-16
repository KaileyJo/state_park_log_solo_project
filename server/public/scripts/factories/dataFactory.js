myApp.factory('dataFactory', ['$http', '$window', function($http, $window) {
    var parkList = undefined;
    var userInfo = undefined;

    var getParkData = function() {
        var promise = $http.get('/parks').then(function(response) {
            parkList = response.data;
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

    var visitPark = function(park) {
        var data = {name: park};
        //console.log('clicked ', park, publicApi.userID);
        var promise = $http.put('/user/' + publicApi.userID, data).then(function(response) {
            //console.log('visitPark response', response.data);
        });
        return promise;
    };

    var getUserData = function() {
        var promise = $http.get('/user').then(function(response) {
            //console.log('getting user data');
            if(response.data) {
                //console.log('user data:: ', response.data);
                userInfo = {
                    userName: response.data.username,
                    userParks: response.data.parks
                };

                publicApi.userID = response.data._id;
                publicApi.loggedIn = true;

                //console.log(userInfo);
            } else {
                $window.location.href = '/#/login';
            }
        });

        return promise;
    };

    var getUserParkData = function() {
        console.log('getuserparkdata userID:: ', publicApi.userID);
        var promise = $http.get('/user/' + publicApi.userID).then(function(response) {
            console.log(response.data);
            if(response.data) {
                console.log('getting user park data');
                userInfo = {
                    userName: response.data.username,
                    userParks: response.data.parks,
                    parkInfo: response.data.parkInfo
                };
                parkList = [];
                console.log(userInfo);
            } else {
                console.log('errrrrrrr');
            }

            //for(var i = 0; i < userInfo.parkInfo.length; i++) {
            //    for(var j = 0; j < userInfo.userParks.length; j++) {
            //        if (userInfo.parkInfo[i].park == userInfo.userParks[j].name) {
            //            parkList.push(userInfo.parkInfo[i]);
            //        }
            //    }
            //}
            //parkList = response.data.parkInfo;

        });

        return promise;
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
        },
        updateMyParks: function(park) {
            visitPark(park);
        },
        getUser: function() {
            return getUserData();
        },
        user: function() {
            return userInfo;
        },
        visitedParks: function() {
            return getUserParkData();
        },
        loggedIn: false,
        userID: false
    };

    return publicApi;
}]);