(function() {
  'use strict';

  var app = angular.module('countyMap');

  app.directive('countyMap', function() {
    return {
      restrict: 'EA',
      controller: 'mapController',
      template: '<datamap map="tennessee"' +
                   'on-click="toggleCounty"></datamap>',
      scope: {
        'selectedCounties': '=',
        'key': '@',
        'counties': '=',
        'options': '='
      }
    };
  });

  //scope.options should be an object that can have the following properties:
    //bool multiple - allow multiple counties to be selected
    //object fills - color object with 'selected' and 'defaultFill' values
    //function(newCounty, geography) onAfterCountySelect - callback function
    //string[] classes - optional list of classes to add to the svg map element
}());
