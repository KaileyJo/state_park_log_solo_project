myApp.controller('ListController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;
    $scope.userID = dataFactory.userID;
    $scope.loggedIn = dataFactory.loggedIn;
    var parks = [];

    var getParkData = function () {
        dataFactory.getParks().then(function() {
            parks = dataFactory.parksList();
            $scope.parkTable = parks;
        })
    };

    getParkData();

    $scope.visitPark = function(parkID) {
        dataFactory.updateMyParks(parkID).then(function() {
            getParkData();
        });
    };
}]);