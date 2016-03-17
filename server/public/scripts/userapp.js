var myApp = angular.module('myApp', ['ngRoute', 'smart-table', 'ngMaterial']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: '/views/templates/home.html',
        controller: 'HomeController'
    }).when('/favorite', {
        templateUrl: '/views/templates/favorite.html',
        controller: 'FavoriteController'
    }).when('/info', {
        templateUrl: '/views/templates/info.html',
        controller: 'InfoController'
    }).when('/list', {
        templateUrl: '/views/templates/list.html',
        controller: 'ListController'
    }).when('/visited', {
        templateUrl: '/views/templates/visited.html',
        controller: 'VisitedController'
    //}).when('/user', {
    //    templateUrl: '/views/user.html'
        //controller: 'UserController'
    //}).when('/logout', {
    //    templateUrl: '/views/logout.html',
    //    controller: 'LogoutController'
    }).otherwise({
        redirectTo: 'home'
    });
}
]);