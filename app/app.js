(function(){
  'use strict';

  var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'appRegister', 'appSlideshow', 'googlechart', 'appGraph']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/graph', {
        templateUrl: 'app/graph/graph.html',
        controller: 'GraphController',
        name: 'graph'
      })
      .when('/slideshow', {
        templateUrl: 'app/slideshow/slideshow.html',
        controller: 'SlideshowController',
        name: 'slideshow'
      })
      .when('/register', {
        templateUrl: 'app/registration/usersList.html',
        controller: 'RegisterController',
        name: 'register'
      })
      .otherwise({
        redirectTo: '/slideshow'
      });
  });

})();
