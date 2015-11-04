(function() {
  'use strict';


  //EX: "VAN BUREN" -> "van_buren"
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
      options: {
        staticGeoData: true
      },
      fills: {},
      data: {},
      setProjection: function(element, options) {
        var svg = element.childNodes[0];
        svg.attributes.width.value = '849';
        svg.attributes.height.value = '238';
        svg.setAttribute('viewBox', '377 44 800 190');
        if (!!$scope.options.classes) {
          $scope.options.classes.forEach(function(className){
            svg.classList.add(className);
          });
        }

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

    if(!!$scope.options.fills) {
      $scope.tennessee.fills.selected = $scope.options.fills.selected || '#a55';
      $scope.tennessee.fills.defaultFill = $scope.options.fills.defaultFill || '#99ccff';
    }



    //WATCHES CHANGES TO selectedCounties AND CALLS INTO COLOR COUNTY METHOD.
    var deregister = $scope.$watch('selectedCounties', function(newVal, oldVal) {
      colorCounties(newVal);
    }, true);

    function colorCounties(counties) {
      if(!counties) return;

      var selectedCountyNames = _.map(counties, function(county) {
        return county[$scope.key].toLowerNoSpaces();
      });

      $scope.tennessee.data = _.mapObject($scope.tennessee.data, function(countyName) {
        if(selectedCountyNames.indexOf(countyName) < 0) {
          return { 'fillKey' : 'defaultFill' };
        }
      });

      selectedCountyNames.forEach(function(countyName){
        $scope.tennessee.data[countyName] = { 'fillKey' : 'selected' };
      });
    };

    $scope.$on('$destory', deregister);

    //HANDLES ADDING OR DELETING ITEMS FROM selectedCounties. THIS TRIGGERS THE WATCHER

    if($scope.options && $scope.options.multiple) {

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

        if(!!$scope.options.onAfterCountySelect) {
          $scope.options.onAfterCountySelect(clickedCounty, geography);
        }
      }

    } else {
      $scope.toggleCounty = function(geography) {
        var clickedCounty = _.find($scope.counties, function(county) {
          return county[$scope.key].toLowerNoSpaces() === geography.id.toLowerNoSpaces();
        });

        $scope.selectedCounties = [clickedCounty];
        $scope.$apply();

        if(!!$scope.options.onAfterCountySelect) {
          $scope.options.onAfterCountySelect(clickedCounty, geography);
        }
      }
    }

  });

}());
