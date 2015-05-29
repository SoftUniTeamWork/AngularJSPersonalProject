/**
 * Created by melloboy89 on 5/25/2015.
 */
app.factory('authenticationService', function($http, baseServiceUrl){
    var service = {};

    var serviceUrl = baseServiceUrl + '/users';

    service.Login = function (loginData, success, error) {
        $http.post(serviceUrl + '/login', loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.register = function (registerData, success, error) {
        $http.post(serviceUrl + '/users/register', registerData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Logout = function (success, error) {
        $http.post(serviceUrl + '/logout')
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.getUsername = function () {
        return sessionStorage['username'];
    };

    service.clearCredentials = function () {
        sessionStorage.clear();
    };

    service.getHeaders = function () {
        return {
            Authorization: "Bearer " + sessionStorage['sessionToken']
        };
    };

    service.isLogged = function () {
        return sessionStorage['sessionToken'];
    };

    return service;
});