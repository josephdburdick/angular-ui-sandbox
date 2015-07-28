(function() {
  'use strict';

  var app = angular.module('appGraph', []);

  app.factory('graphDataService', function($http, $q) {


    var getGraphData = function() {
      return $http.get('app/graph/stats.json').then(function(result){
         return result.data;
      });
    };

    return {
      getGraphData: getGraphData
    }
  });

})();
