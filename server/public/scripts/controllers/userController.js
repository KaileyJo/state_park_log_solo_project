myApp.controller('UserController', ['$scope', '$http', 'dataFactory', function($scope, $http, dataFactory) {
    $scope.userName = '';
    $scope.userParks = [];
    console.log('dataFactory userid', dataFactory.userID);

    $scope.logOut = function() {
        console.log('datafactoryid', dataFactory.id);
        var promise = $http.get('/logout').then(function(response) {
            dataFactory.loggedIn = false;
            dataFactory.id = false;
        });
        return promise;
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