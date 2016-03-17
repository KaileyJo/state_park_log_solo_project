var myApp = angular.module('myApp', ['ngRoute', 'smart-table', 'ngMaterial']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: '/views/templates/home.html',
        controller: 'HomeController'
    }).when('/info', {
        templateUrl: '/views/templates/info.html',
        controller: 'InfoController'
    }).when('/list', {
        templateUrl: '/views/templates/list.html',
        controller: 'ListController'
    }).when('/login', {
        templateUrl: '/views/login.html'
    //}).when('/user', {
    //    templateUrl: '/views/user.html',
    //    controller: 'UserController'
    }).otherwise({
        redirectTo: 'home'
    });
    }
]);