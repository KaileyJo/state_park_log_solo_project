myApp.controller('UserController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.userName;
    $scope.logOut = function() {
        console.log('logging out...?');
        var promise = $http.get('/logout').then(function(response) {

        });
        return promise;
    };

    // This happens after page load, which means it has authenticated if it was ever going to
    // NOT SECURE
    $http.get('/user').then(function(response) {
        //console.log('getting user');
        if(response.data) {
            $scope.userName = response.data.username;
            //console.log('User Data: ', $scope.userName);
        } else {
            $window.location.href = '/#/login';
        }
    });
}]);