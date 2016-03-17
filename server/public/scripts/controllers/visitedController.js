myApp.controller('VisitedController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;
    $scope.loggedIn = dataFactory.loggedIn;
    $scope.rangeValues = [1, 2, 3, 4, 5];
    $scope.campsite = '';
    $scope.miles = '';
    $scope.notes = '';
    $scope.rating = '';
    $scope.currentID;

    var getParkData = function () {
            dataFactory.getParks().then(function() {
                $scope.parkTable = dataFactory.visitedParksList();
            });
    };

    getParkData();

    $scope.favoritePark = function(parkID) {
        dataFactory.updateMyFavorites(parkID).then(function() {
            getParkData();
        });
    };

    $scope.update = function(id) {
        $scope.currentID = id;
        console.log($scope.currentID);
    };
}]);