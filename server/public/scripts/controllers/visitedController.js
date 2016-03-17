myApp.controller('VisitedController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;

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
}]);