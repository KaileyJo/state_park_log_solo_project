myApp.controller('VisitedController', ['$scope', 'dataFactory',
    function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;

    var parks = [];

    var getParkData = function () {
        dataFactory.visitedParks().then(function() {
            parks = dataFactory.parksList();
        })
    };

    getParkData();
}]);