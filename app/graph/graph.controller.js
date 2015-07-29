(function(){
  'use strict';

  var app = angular.module('appGraph');

  app.controller('GraphController', function($scope, graphDataService){
    google.load('visualization', '1.0', {'packages':['geochart']});
    var states = [],
        people = [],
        stateDeaths = [],
        deathDates = [],
        deathsByDay = [],
        deathCountsByState = [],
        byState = [];


    graphDataService.getGraphData().then(function(data){
      handleData(data);
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

    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var arr = [['State', 'Deaths']];
      arr = _.union(arr, byState);

      var data = google.visualization.arrayToDataTable(arr);
      // _.each(stateDeaths)
      var options = {
        region: "US",
        resolution: "provinces"
      };

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

      chart.draw(data, options);
    }

  });

})();
