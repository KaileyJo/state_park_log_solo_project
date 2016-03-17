myApp.controller('UserController', ['$scope', '$http', 'dataFactory', function($scope, $http, dataFactory) {
    $scope.userName = '';
    $scope.userParks = [];

    $scope.logOut = function() {
        var promise = $http.get('/logout').then(function(response) {
            dataFactory.loggedIn = false;
            dataFactory.id = false;
        });
        return promise;
    };

    //$scope.logOut = function() {
    //    dataFactory.loggedIn = false;
    //    dataFactory.id = false;
    //};

    var getUserData = function() {
        dataFactory.getUser().then(function() {
            var userNamePlease = dataFactory.user();
            $scope.userName = userNamePlease.userName;
            $scope.userParks = userNamePlease.userParks;
        });
    };

    getUserData();
}]);