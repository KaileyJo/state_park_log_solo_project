myApp.controller('VisitedController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;
    $scope.userID = dataFactory.userID;
    $scope.loggedIn = dataFactory.loggedIn;

    var parks = [];

    var getParkData = function () {
        dataFactory.visitedParks().then(function() {
            parks = dataFactory.visitedParksList();
            $scope.parkTable = parks;
        })
    };

    getParkData();
}]);