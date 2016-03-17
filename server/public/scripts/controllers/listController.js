myApp.controller('ListController', ['$scope', 'dataFactory',
    function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;
    $scope.loggedIn = dataFactory.loggedIn;
    var parks = [];

    var getParkData = function () {
        dataFactory.getParks().then(function() {
            parks = dataFactory.parksList();
            $scope.parkTable = parks;
        })
    };

    getParkData();

    $scope.visitPark = function(park) {
        dataFactory.updateMyParks(park);
    };
}]);


//possible mongo request to join parks and name, puts all parks in parkinfo field
//db.users.aggregate([{$lookup:{
//from: 'parks',
//    localField: 'park',
//    foreignField: 'name',
//    as: 'parkInfo'}}])