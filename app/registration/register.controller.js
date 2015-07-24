(function(){
  'use strict';

  var app = angular.module('appRegister');

  app.controller('RegisterController', function($scope, userService, $modal){
    var modalInstance = null;
    $scope.user = {id: 0, firstName: '', lastName: ''};
    
    $scope.users = userService.getUsers();
    $scope.delete = function(id){
      userService.deleteUser(id);
      $scope.users = userService.getUsers();
    };
  


    $scope.addUser = function($modalInstance){
       
       modalInstance  = $modal.open({
        animation: true,
        templateUrl: 'app/registration/formRegister.html',
        controller: 'ModalController',
        resolve: {
          user : function () {
            return $scope.user;
          }
        }
      });


    modalInstance.result.then(function (user) {
      $scope.user = user;
      userService.addUser($scope.user);
      $scope.user = null;
      $scope.users = userService.getUsers();

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });


    };

  });


  app.controller('ModalController', function($scope, $modalInstance, user){ 
      $scope.user = user; 

       $scope.submitForm = function () {
          $modalInstance.close($scope.user);
      };
  });

})();