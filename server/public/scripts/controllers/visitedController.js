myApp.controller('VisitedController', ['$scope', 'dataFactory', '$filter', 'ngTableParams',
    function($scope, dataFactory, $filter, ngTableParams) {
    $scope.dataFactory = dataFactory;

    var parks = [];

    //var getParkData = function () {
    //    dataFactory.getParks().then(function() {
    //        parks = dataFactory.parksList();
    //        $scope.parkTable = new ngTableParams({
    //            page: 1,
    //            count: 10
    //        }, {
    //            total: parks.length,
    //            getData: function ($defer, params) {
    //                $scope.data = params.sorting() ? $filter('orderBy')(parks, params.orderBy()) : parks;
    //                $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
    //                $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
    //                $defer.resolve($scope.data);
    //            }
    //        });
    //
    //    })
    //};
    //
    //getParkData();
}]);