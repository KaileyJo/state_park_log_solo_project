myApp.controller('InfoController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    console.log('Info Controller');
    $scope.dataFactory = dataFactory;
    $scope.park = dataFactory.parksList();
    $scope.loggedIn = dataFactory.loggedIn;
}]);