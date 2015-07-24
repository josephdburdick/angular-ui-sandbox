(function(){
  'use strict';

  var app = angular.module('appRegister');

  app.controller('RegisterController', function($scope, userService){
    $scope.users = userService.getUsers();
    $scope.delete = function(id){
      userService.deleteUser(id);
      $scope.users = userService.getUsers();
    };

  });

})();