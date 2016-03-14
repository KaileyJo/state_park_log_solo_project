var myApp = angular.module('myApp', ['ngRoute', 'ngTable']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: '/views/templates/home.html',
        controller: 'HomeController',
        access: {restricted: false}
    }).when('/favorite', {
        templateUrl: '/views/templates/favorite.html',
        controller: 'FavoriteController',
        access: {restricted: true}
    }).when('/info', {
        templateUrl: '/views/templates/info.html',
        controller: 'InfoController',
        access: {restricted: false}
    }).when('/list', {
        templateUrl: '/views/templates/list.html',
        controller: 'ListController',
        access: {restricted: false}
    }).when('/visited', {
        templateUrl: '/views/templates/visited.html',
        controller: 'VisitedController',
        access: {restricted: true}
    }).when('/user', {
        templateUrl: '/views/user.html',
        controller: 'UserController',
        access: {restricted: false}
    //}).when('/logout', {
    //    templateUrl: '/views/logout.html',
    //    controller: 'LogoutController'
    }).otherwise({
        redirectTo: 'home'
    });
}
]);

myApp.run(function ($rootScope, $location, $route) {
    console.log('myapp.run function');
    $rootScope.$on('$routeChangeStart',
        function (event, next, current) {
            console.log('routeChangeStart');
            if (next.access.restricted === false) {
                console.log('restricted == false');
                $location.path('/');
                $route.reload();
            }
        }
    );
});