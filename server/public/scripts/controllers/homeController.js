
myApp.controller('HomeController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;
    $scope.regions = ['Central', 'Metro', 'Northeast', 'Northwest', 'South'];
    $scope.loggedIn = dataFactory.loggedIn;
    $scope.enterPark = false;
    $scope.parksList = [];

    var getParkData = function() {
        dataFactory.getParks().then(function() {
            $scope.parks = dataFactory.parksList();
            $scope.parksList = dataFactory.parkNames();
            //console.log($scope.parksList);
            //awesomplete.list = $scope.parksList;
        });
    };

    //var input = document.getElementById('myInput');
    //new Awesomplete(input, {list: '#myList'});
    //var awesomplete = new Awesomeplete(input, {
    //    minChars: 1,
    //    autoFirst: true
    //});


    $scope.selectPark = function(park) {
        console.log(park);
        //console.log()
        dataFactory.currentPark(park);
    };

    $scope.submitPark = function() {
        console.log('submit clicked', $scope.name);
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
        console.log(newPark);
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
            $scope.enterPark = false;
        });
    };

    $scope.newPark = function() {
        $scope.enterPark = true;
    };

    getParkData();
}]);


