(function(){
  'use strict';
  var xIndex = 0;
  var app = angular.module('appGraph');
  
  app.controller('GraphController', function($scope, graphDataService){
    
    var states = [],
        people = [],
        stateDeaths = [],
        deathDates = [],
        deathsByDay = [],
        deathCountsByState = [],
        byState = [];

    graphDataService.getGraphData().then(function(data){
      handleData(data);
      drawChart();
    }, function(err){
      console.log(err);
    });

    var 
      convertDates = function(data){
        return _.each(data, function(item, i){
          item.Date = new Date(item.Date);
        });
      },
      getStates = function(data){
        var states = _.pluck(data, 'State');
        return states;
      },
      getState = function(data){
        var state = _.pluck(data, 'State');
        return state;
      },
      getPeopleNames = function(data){
        var names = _.pluck(data, 'Name');
        return names;
      },
      getPersonName = function(data){
        var name = _.pluck(data, 'Name');
        return name;
      },
      getDeathsByState = function(data){
        return _.groupBy(data, 'State');
      },
      getDeathsByDate = function(data){
        var dates = _.groupBy(data, 'Date');
        var sortedDates = _.sortBy(dates, function(o){
          return o.Date;
        });
      },
      getDeathCountsByState = function(stateDeaths){
        
        _.each(stateDeaths, function(o, state){
          deathCountsByState.push([state, o.length])
        });
        return deathCountsByState;
      
      },
      handleData = function(data){
        convertDates(data);
        states = getStates(data);
        people = getPeopleNames(data);
        stateDeaths = getDeathsByState(data);
        deathDates = getDeathsByDate(data);
        byState = getDeathCountsByState(stateDeaths);
      };

      function drawChart(){

        var chart = {};
        chart.type = "GeoChart";
        
        var arr = [['State', 'Deaths']];
          arr = _.union(arr, byState);
        chart.data = arr;

        chart.options = {
            region: "US",
            resolution: "provinces"
        };

        $scope.chart = chart;        
      }

  });

})();
