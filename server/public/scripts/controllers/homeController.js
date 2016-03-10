myApp.controller('HomeController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    console.log('Home Controller');
    $scope.dataFactory = dataFactory;
    $scope.regions = ['Central', 'Metro', 'Northeast', 'Northwest', 'South'];
    //$scope.parks = function() {
    //    dataFactory.getParks().then(function(response) {
    //        console.log(response);
    //    });
    //};

    var getParkData = function() {
        dataFactory.getParks().then(function() {
            $scope.parks = dataFactory.parksList();
        });
    };

    $scope.selectPark = function(park) {
        dataFactory.currentPark(park);
    };

    $scope.submitPark = function() {
        console.log('submit clicked');
        var newPark = {
            park: $scope.name,
            type: $scope.type,
            siteType: $scope.siteType,
            siteNumber: $scope.siteNumber,
            miles: $scope.miles,
            description: $scope.description,
            link: $scope.link,
            lat: $scope.lat,
            long: $scope.long,
            region: $scope.region
        };
        dataFactory.postPark(newPark).then(function() {
            $scope.name = '';
            $scope.type = '?';
            $scope.siteType = '?';
            $scope.siteNumber = '';
            $scope.miles = '';
            $scope.description = 'Park description...';
            $scope.link = '';
            $scope.lat = '';
            $scope.long = '';
            $scope.region = '?';
            getParkData();
        });
    };

    getParkData();
}]);