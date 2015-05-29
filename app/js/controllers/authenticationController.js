/**
 * Created by melloboy89 on 5/26/2015.
 */
app.controller('authenticationController',function($scope, authenticationService){
    $scope.login= function() {
        var username = $scope.username;
        var password = $scope.password;

        var data = {
            'username': username,
            'password' : password
        }


    }
})