angular
.module('app')
.factory('LoginService', LoginService);

LoginService.$inject = ['$http'];

function LoginService($http) {
    var login = 'admin';
    var pass = 'pass';
    var isAuthenticated = false;
return {
    checkUser: checkUser
};

function checkUser(user) {
    return {
        login : function() {
          isAuthenticated = user.name === login && user.password === pass;
          return isAuthenticated;
        },
        isAuthenticated : function() {
          return isAuthenticated;
        }
      };

    function complete(response) {
        console.log(response)
        return response.data;
    }

    function failed(error) {
        console.error('XHR Failed for getAvengers.' + error.data);
    }
}
}