var app = angular.module('SocialNetwork',[]);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/homeScreen.html',
            controller: 'MainController'
        }).when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'authenticationController',
            resolve: {
                factory: redirectToHomeIfLogged
            }
        })

});