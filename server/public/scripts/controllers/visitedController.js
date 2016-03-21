myApp.controller('VisitedController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;
    $scope.loggedIn = dataFactory.loggedIn;
    $scope.rangeValues = [1, 2, 3, 4, 5];
    $scope.campsite = '';
    $scope.miles = '';
    $scope.notes = '';
    $scope.rating = '';
    $scope.currentID;
    $scope.currentPark;

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

    $scope.update = function(park) {
        $scope.currentID = park._id;
        $scope.currentPark = park;
        console.log(park);
    };

    $scope.updateUserPark = function() {
        console.log($scope.currentPark.park);
        var newUserInfo = {
            parkID: $scope.currentID,
            parkName: $scope.currentPark.park,
            campsite: $scope.campsite,
            miles: $scope.miles,
            notes: $scope.notes,
            rating: $scope.rating
        };

        console.log(newUserInfo);
        //dataFactory.putUserPark(newUserInfo).then(function() {
        //    $scope.currentID = '';
        //});
    }
}]);