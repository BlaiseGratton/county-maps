'use strict';

var app = angular.module('countyMap', ['datamaps']);

app.controller('mainController', function($scope) {
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

app.controller('mapController', function($scope) {

  $scope.tennessee = {
    scope: 'tn_counties',
    geographyConfig: {
      dataUrl: '/topo_tn_counties.json',
      highlightOnHover: false
    },
    mapOptions: {},
    options: {
      staticGeoData: true
    },
    fills: {
      'selected': '#a55',
      'defaultFill': '#cdcdcd'
    },
    data: {},
    setProjection: function(element, options) {
      var offsetWidth = -100;
      var offsetHeight = 100;

      var projection = d3.geo.mercator()
          .center([-86.7833, 36.1667])
          .scale(5000)
          .rotate([8, 0])
          .translate([0, 100]);

      var path = d3.geo.path().projection(projection);

      return {
        path: path,
        projection: projection
      };
    }
  };

  $scope.$watch('selectedCounties', function(newVal, oldVal) {
    var newNames = _.pluck(newVal, $scope.key);
    var oldNames = _.pluck(oldVal, $scope.key);
    var longerCollection = newNames.length > oldNames.length ? newNames : oldNames;
    var shorterCollection = oldNames.length < newNames.length ? oldNames : newNames;
    var difference = _.difference(longerCollection, shorterCollection);
    $scope.selectCounty(difference[0]);
  }, true);

  $scope.selectCounty = function(countyName) {
    var idx = $scope.selectedCounties.indexOf(countyName);
    if (idx === -1) {
      $scope.tennessee.data[countyName] = { 'fillKey': 'selected' };
    } else {
      $scope.tennessee.data[countyName] = { 'fillKey': 'defaultFill' };
    }
  };

  $scope.clickCounty = function(geography) {
    $scope.selectCounty(geography.id);
    var idx = $scope.selectedCounties.indexOf(geography.id);
    if (idx > -1) 
      $scope.selectedCounties.splice(idx, 1);
    else 
      $scope.selectedCounties.push(geography.id);
    $scope.$apply();
  }
});

app.directive('countyMap', function() {
  return {
    restrict: 'EA',
    controller: 'mapController',
    template: '<datamap map="tennessee"' +
                 'on-click="clickCounty"></datamap>',
    scope: {
      'selectedCounties': '=',
      'key': '@'
    }
  };
});
