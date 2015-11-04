'use strict';
(function() {
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
}());
