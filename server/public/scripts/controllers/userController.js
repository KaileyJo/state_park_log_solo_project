myApp.controller('UserController', ['$scope', '$http', '$window', 'dataFactory', function($scope, $http, $window, dataFactory) {
    $scope.userName = '';
    $scope.userParks = [];

    $scope.logOut = function() {
        var promise = $http.get('/logout').then(function(response) {
        });
        return promise;
    };

    $scope.logOut = function() {
        dataFactory.loggedIn = false;
        dataFactory.id = false;
    };

    var getUserData = function() {
        dataFactory.getUser().then(function() {
            var userNamePlease = dataFactory.user();
            $scope.userName = userNamePlease.userName;
            $scope.userParks = userNamePlease.userParks;
        });
    };

    getUserData();
}]);