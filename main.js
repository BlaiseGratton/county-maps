(function() {
  'use strict';

  //THIS IS FOR THE EDGE CASE OF "VAN BUREN"
  //"VAN BUREN" -> van_buren  
  String.prototype.toLowerNoSpaces = function() {
    return this.replace(' ', '_').toLowerCase();
  }

  var app = angular.module('countyMap', ['datamaps']);

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
      data: {
        'van_buren': { 'fillKey': 'selected' }
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

    //WATCHES CHANGES TO selectedCounties AND CALLS INTO COLOR COUNTY METHOD.
    $scope.$watch('selectedCounties', function(newVal, oldVal) {
      var newNames = _.pluck(newVal, $scope.key);
      var oldNames = _.pluck(oldVal, $scope.key);
      var longerCollection = newNames.length > oldNames.length ? newNames : oldNames;
      var shorterCollection = oldNames.length < newNames.length ? oldNames : newNames;
      var difference = _.difference(longerCollection, shorterCollection);
      $scope.colorCounty(difference[0]);
    }, true);

    $scope.colorCounty = function(countyName) {
      if(!countyName) return;

      var countyNotSelected = _.filter($scope.selectedCounties, function(county) {
        return county[$scope.key].toLowerNoSpaces() === countyName.toLowerNoSpaces();
      });
      if (!!countyNotSelected.length) {
        $scope.tennessee.data[countyName.toLowerNoSpaces()] = { 'fillKey': 'selected' };
      } else {
        $scope.tennessee.data[countyName.toLowerNoSpaces()] = { 'fillKey': 'defaultFill' };
      }
    };

    //HANDLES ADDING OR DELETING ITEMS FROM selectedCounties. THIS TRIGGERS THE WATCHER
    $scope.toggleCounty = function(geography) {
      var countyNotSelected = _.filter($scope.selectedCounties, function(county) {
        return county[$scope.key].toLowerNoSpaces() === geography.id.toLowerNoSpaces();
      });
      var clickedCounty = _.find($scope.counties, function(county) {
        return county[$scope.key].toLowerNoSpaces() === geography.id.toLowerNoSpaces();
      });
      var idx = $scope.selectedCounties.indexOf(clickedCounty);
      if (!!countyNotSelected.length)
        $scope.selectedCounties.splice(idx, 1);
      else
        $scope.selectedCounties.push(clickedCounty);
      $scope.$apply();
    }
  });

}());
