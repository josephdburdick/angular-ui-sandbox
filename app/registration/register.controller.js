(function(){
  'use strict';

  var app = angular.module('appRegister');

  app.controller('RegisterController', function($scope, userService){
    
    $scope.user = {id: 0, firstName: '', lastName: ''};
    
    $scope.users = userService.getUsers();
    $scope.delete = function(id){
      userService.deleteUser(id);
      $scope.users = userService.getUsers();
    };
    $scope.submitForm = function(){
      console.log($scope.user);
      userService.addUser($scope.user);
      $scope.users = userService.getUsers();
      return false;
    }

  });

})();