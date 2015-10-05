'use strict';

var app = angular.module('countyMap', ['datamaps']);

app.controller('mapController', function($scope) {

  var vm = this;

  vm.tennessee = {
    scope: 'tn_counties',
    geographyConfig: {
      dataUrl: '/topo_tn_counties.json'
    },
    mapOptions: {
    },
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

  vm.selectedCounties = [];

  vm.selectCounty = function(geography) {
    vm.selectedCounties.push(geography.properties);
    $scope.$apply();
  }
});
