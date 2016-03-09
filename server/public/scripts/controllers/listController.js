//myApp.controller('HomeController', ['$scope', 'dataFactory', function($scope, dataFactory) {
//    //console.log('Home Controller');
//    $scope.dataFactory = dataFactory;
//
//    var getParkData = function () {
//        dataFactory.getParks().then(function () {
//            $scope.parks = dataFactory.parksList();
//        });
//    };
//
//    getParkData();
//}]);