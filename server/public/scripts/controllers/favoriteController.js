myApp.controller('FavoriteController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;

    var getParkData = function () {
            dataFactory.getParks().then(function() {
                $scope.parks = dataFactory.favoriteParksList();
            });
    };

    getParkData();
}]);