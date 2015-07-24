(function(){
  'use strict';

  var app = angular.module('appRegister');

  app.factory('userService', function(){
    var users = [
        { id: 1, firstName: 'Joe', lastName: 'Keeper', salary: 99.12 },
        { id: 2, firstName: 'Eugene', lastName: 'Thompsonson', salary: 133.23 },
        { id: 3, firstName: 'Bob', lastName: 'Campbell', salary: 143.34 },
        { id: 4, firstName: 'Jack', lastName: 'Rombless', salary: 153.4234235 },
        { id: 5, firstName: 'Leroy', lastName: 'Xot', salary: 163.56 },
        { id: 6, firstName: 'Sam', lastName: 'Box', salary: 173.67 },
        { id: 7, firstName: 'Tommy', lastName: 'Hox', salary: 183.78 }
          
    ];
    var addUser = function(user){
      if (user){
        var lastId = users[users.length - 1].id + 1;

        user.id = lastId;
        users.push(user);
      }
    };
    var getUsers = function(){
      return users;
    };
    var deleteUser = function(id){
      console.log(id);
      for (var i=0; i < users.length; i++){
        if (users[i].id === id){

          users.splice(i, 1); 
          console.log(users);  

          return;
        }
      }
    };

    return {
      addUser: addUser,
      getUsers: getUsers,
      deleteUser: deleteUser
    }
  });

})();