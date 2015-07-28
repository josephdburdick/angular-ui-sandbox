(function(){
  'use strict';

  var app = angular.module('appGraph');

  app.controller('GraphController', function($scope, graphDataService){
    google.load('visualization', '1.0', {'packages':['geochart']});
    var states = [],
        people = [],
        stateKills = [],
        killDates = [],
        killsByDay = [];


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
      getKillsByState = function(data){
        return _.groupBy(data, 'State');
      },
      getKillsByDate = function(data){
        var dates = _.groupBy(data, 'Date');
        var sortedDates = _.sortBy(dates, function(o){
          return o.Date;
        });
        debugger;
      },
      // groupKillsByDay = function(data){
      //   var dates = _.groupBy(getKillsByDate(data), function(person, i){
      //     return person;
      //   })
      // },
      handleData = function(data){
        convertDates(data);
        states = getStates(data),
        people = getPeopleNames(data),
        stateKills = getKillsByState(data),
        killDates = getKillsByDate(data),
        killsByDay = groupKillsByDay(data);

        debugger;
      };
    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
     
      var data = google.visualization.arrayToDataTable([
        ['State', 'Deaths'],
        ['VA', 200],
        ['NY', 300],
        ['DE', 400],
        ['AL', 500],
        ['PA', 600],
        ['SC', 700]
      ]);

      var options = {
        region: "US",
        resolution: "provinces"
      };

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

      chart.draw(data, options);
    }

  });

})();
