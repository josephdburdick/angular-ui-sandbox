(function(){
  'use strict';

  var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'appRegister', 'appSlideshow']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/slideshow', {
        templateUrl: 'app/slideshow/slideshow.html',
        controller: 'SlideshowController'
      })
      .when('/register', {
        templateUrl: 'app/registration/usersList.html',
        controller: 'RegisterController'
      })
      .otherwise({
        redirectTo: '/slideshow'
      });
  });

})();
