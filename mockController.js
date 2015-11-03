//EXAMPLE CONTROLLER

(function() {
  'use strict';

  var app = angular.module('countyMap');

  app.controller('mockController', function($scope) {
    $scope.counties = [
      {
        'id': 1,
        'name': 'Davidson',
        'region': 3
      }, {
        'id': 2,
        'name': 'Coffee',
        'region': 2
      }, {
        'id': 3,
        'name': 'Williamson',
        'region': 1
      }, {
        'id': 4,
        'name': 'Knox',
        'region': 4
      }
    ];

    $scope.selectedCounties = [];

    $scope.toggleCounty = function(county) {
      var idx = $scope.selectedCounties.indexOf(county);
      if (idx < 0)
        $scope.selectedCounties.push(county);
      else
        $scope.selectedCounties.splice(idx, 1);
    };
  });

}());
