(function(){
  'use strict';

  var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'appRegister']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/register', {
        templateUrl: 'app/registration/usersList.html',
        controller: 'RegisterController'
      })
      .otherwise({
        redirectTo: '/register'
      });

  });

})();