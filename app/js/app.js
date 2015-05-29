var app = angular.module('SocialNetwork',[]);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/homeScreen.html',
            controller: 'authenticationController'
        }).when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'authenticationController'
        })

});

app.run(function($rootscope, $location, authenctication){
    $rootScope.$on("$routeChangeStart", function() {

    });
})

