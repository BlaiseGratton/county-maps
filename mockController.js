//EXAMPLE CONTROLLER

(function() {
  'use strict';

  var app = angular.module('countyMap');

  app.controller('mockController', function($scope) {

    $scope.selectedCounties = [
      // { Latitude: 36.279462, Longitude: -82.137864, ZoomLevel: 10, name: 'CARTER' },
      // { Latitude: 36.244605, Longitude: -87.096507, ZoomLevel: 10, name: 'CHEATHAM' },
      // { Latitude: 35.48343, Longitude: -88.596989, ZoomLevel: 10, name: 'CHESTER' }
    ];

    $scope.toggleCounty = function(county) {
      var idx = $scope.selectedCounties.indexOf(county);
      if (idx < 0)
        $scope.selectedCounties.push(county);
      else
        $scope.selectedCounties.splice(idx, 1);
    };

    $scope.mapOptions = {
      'multiple' : false,
      'fills' : {
        'selected' : '#0000ff',
        'defaultFill' : '#ff0000'
      },
      'onAfterCountySelect' : function(newCounty, geography) {
        console.log(newCounty);
        console.log(geography);
        alert('mock controller callback!');
      }
    }

    //EXAMPLE COUNTY DATA TAKEN FROM SPOT
    $scope.counties = [
      { Latitude: 36.111975, Longitude: -84.19587, ZoomLevel: 10, name: 'ANDERSON' },
      { Latitude: 35.483302, Longitude: -86.450034, ZoomLevel: 10, name: 'BEDFORD' },
      { Latitude: 36.101255, Longitude: -88.070594, ZoomLevel: 10, name: 'BENTON' },
      { Latitude: 35.60565, Longitude: -85.175214, ZoomLevel: 10, name: 'BLEDSOE' },
      { Latitude: 35.669216, Longitude: -83.925566, ZoomLevel: 10, name: 'BLOUNT' },
      { Latitude: 35.16918, Longitude: -84.861271, ZoomLevel: 10, name: 'BRADLEY' },
      { Latitude: 36.413761, Longitude: -84.139326, ZoomLevel: 10, name: 'CAMPBELL' },
      { Latitude: 35.803246, Longitude: -86.046363, ZoomLevel: 10, name: 'CANNON' },
      { Latitude: 35.985798, Longitude: -88.442337, ZoomLevel: 10, name: 'CARROLL' },
      { Latitude: 36.279462, Longitude: -82.137864, ZoomLevel: 10, name: 'CARTER' },
      { Latitude: 36.244605, Longitude: -87.096507, ZoomLevel: 10, name: 'CHEATHAM' },
      { Latitude: 35.48343, Longitude: -88.596989, ZoomLevel: 10, name: 'CHESTER' },
      { Latitude: 36.474752, Longitude: -83.678543, ZoomLevel: 10, name: 'CLAIBORNE' },
      { Latitude: 36.529048, Longitude: -85.540408, ZoomLevel: 10, name: 'CLAY' },
      { Latitude: 35.945839, Longitude: -83.106585, ZoomLevel: 10, name: 'COCKE' },
      { Latitude: 35.498245, Longitude: -86.074822, ZoomLevel: 10, name: 'COFFEE' },
      { Latitude: 35.800995, Longitude: -89.12612, ZoomLevel: 10, name: 'CROCKETT' },
      { Latitude: 35.95991, Longitude: -84.976665, ZoomLevel: 10, name: 'CUMBERLAND' },
      { Latitude: 36.20995, Longitude: -86.784849, ZoomLevel: 10, name: 'DAVIDSON' },
      { Latitude: 35.616684, Longitude: -88.109361, ZoomLevel: 10, name: 'DECATUR' },
      { Latitude: 35.982565, Longitude: -85.846897, ZoomLevel: 10, name: 'DEKALB' },
      { Latitude: 36.146738, Longitude: -87.358157, ZoomLevel: 10, name: 'DICKSON' },
      { Latitude: 36.079445, Longitude: -89.443808, ZoomLevel: 10, name: 'DYER' },
      { Latitude: 35.198346, Longitude: -89.414126, ZoomLevel: 10, name: 'FAYETTE' },
      { Latitude: 36.407297, Longitude: -84.890754, ZoomLevel: 10, name: 'FENTRESS' },
      { Latitude: 35.171916, Longitude: -86.098405, ZoomLevel: 10, name: 'FRANKLIN' },
      { Latitude: 36.013346, Longitude: -88.949407, ZoomLevel: 10, name: 'GIBSON' },
      { Latitude: 35.213929, Longitude: -87.030378, ZoomLevel: 10, name: 'GILES' },
      { Latitude: 36.272958, Longitude: -83.493933, ZoomLevel: 10, name: 'GRAINGER' },
      { Latitude: 36.152867, Longitude: -82.874392, ZoomLevel: 10, name: 'GREENE' },
      { Latitude: 35.248647, Longitude: -85.699639, ZoomLevel: 10, name: 'GRUNDY' },
      { Latitude: 36.20224, Longitude: -83.275305, ZoomLevel: 10, name: 'HAMBLEN' },
      { Latitude: 35.185415, Longitude: -85.208214, ZoomLevel: 10, name: 'HAMILTON' },
      { Latitude: 36.540775, Longitude: -83.151271, ZoomLevel: 10, name: 'HANCOCK' },
      { Latitude: 35.212476, Longitude: -88.990027, ZoomLevel: 10, name: 'HARDEMAN' },
      { Latitude: 35.19682, Longitude: -88.181047, ZoomLevel: 10, name: 'HARDIN' },
      { Latitude: 36.438017, Longitude: -82.944387, ZoomLevel: 10, name: 'HAWKINS' },
      { Latitude: 35.585223, Longitude: -89.285666, ZoomLevel: 10, name: 'HAYWOOD' },
      { Latitude: 35.653707, Longitude: -88.396435, ZoomLevel: 10, name: 'HENDERSON' },
      { Latitude: 36.322943, Longitude: -88.260342, ZoomLevel: 10, name: 'HENRY' },
      { Latitude: 35.802819, Longitude: -87.473993, ZoomLevel: 10, name: 'HICKMAN' },
      { Latitude: 36.293849, Longitude: -87.747374, ZoomLevel: 10, name: 'HOUSTON' },
      { Latitude: 36.040211, Longitude: -87.777378, ZoomLevel: 10, name: 'HUMPHREYS' },
      { Latitude: 36.359257, Longitude: -85.670211, ZoomLevel: 10, name: 'JACKSON' },
      { Latitude: 36.049235, Longitude: -83.472208, ZoomLevel: 10, name: 'JEFFERSON' },
      { Latitude: 36.470617, Longitude: -81.852944, ZoomLevel: 10, name: 'JOHNSON' },
      { Latitude: 36.022479, Longitude: -83.961625, ZoomLevel: 10, name: 'KNOX' },
      { Latitude: 36.268035, Longitude: -89.52296, ZoomLevel: 10, name: 'LAKE' },
      { Latitude: 35.771222, Longitude: -89.649225, ZoomLevel: 10, name: 'LAUDERDALE' },
      { Latitude: 35.229309, Longitude: -87.402683, ZoomLevel: 10, name: 'LAWRENCE' },
      { Latitude: 35.519578, Longitude: -87.493495, ZoomLevel: 10, name: 'LEWIS' },
      { Latitude: 35.180211, Longitude: -86.577241, ZoomLevel: 10, name: 'LINCOLN' },
      { Latitude: 35.738172, Longitude: -84.359475, ZoomLevel: 10, name: 'LOUDON' },
      { Latitude: 35.451793, Longitude: -84.630396, ZoomLevel: 10, name: 'MCMINN' },
      { Latitude: 35.188324, Longitude: -88.574763, ZoomLevel: 10, name: 'MCNAIRY' },
      { Latitude: 36.530127, Longitude: -86.008271, ZoomLevel: 10, name: 'MACON' },
      { Latitude: 35.611527, Longitude: -88.841194, ZoomLevel: 10, name: 'MADISON' },
      { Latitude: 35.145944, Longitude: -85.617401, ZoomLevel: 10, name: 'MARION' },
      { Latitude: 35.481478, Longitude: -86.78014, ZoomLevel: 10, name: 'MARSHALL' },
      { Latitude: 35.620516, Longitude: -87.068173, ZoomLevel: 10, name: 'MAURY' },
      { Latitude: 35.477921, Longitude: -84.82507, ZoomLevel: 10, name: 'MEIGS' },
      { Latitude: 35.442661, Longitude: -84.232196, ZoomLevel: 10, name: 'MONROE' },
      { Latitude: 36.480584, Longitude: -87.377152, ZoomLevel: 10, name: 'MONTGOMERY' },
      { Latitude: 35.290563, Longitude: -86.391859, ZoomLevel: 10, name: 'MOORE' },
      { Latitude: 36.110412, Longitude: -84.627969, ZoomLevel: 10, name: 'MORGAN' },
      { Latitude: 36.353833, Longitude: -89.14988, ZoomLevel: 10, name: 'OBION' },
      { Latitude: 36.357799, Longitude: -85.289913, ZoomLevel: 10, name: 'OVERTON' },
      { Latitude: 35.642317, Longitude: -87.845316, ZoomLevel: 10, name: 'PERRY' },
      { Latitude: 36.595316, Longitude: -85.008427, ZoomLevel: 10, name: 'PICKETT' },
      { Latitude: 35.127429, Longitude: -84.534087, ZoomLevel: 10, name: 'POLK' },
      { Latitude: 36.173753, Longitude: -85.45478, ZoomLevel: 10, name: 'PUTNAM' },
      { Latitude: 35.592964, Longitude: -84.928939, ZoomLevel: 10, name: 'RHEA' },
      { Latitude: 35.780255, Longitude: -84.526322, ZoomLevel: 10, name: 'ROANE' },
      { Latitude: 36.513958, Longitude: -86.857117, ZoomLevel: 10, name: 'ROBERTSON' },
      { Latitude: 35.846954, Longitude: -86.420483, ZoomLevel: 10, name: 'RUTHERFORD' },
      { Latitude: 36.409213, Longitude: -84.517438, ZoomLevel: 10, name: 'SCOTT' },
      { Latitude: 35.380216, Longitude: -85.41658, ZoomLevel: 10, name: 'SEQUATCHIE' },
      { Latitude: 35.76384, Longitude: -83.524242, ZoomLevel: 10, name: 'SEVIER' },
      { Latitude: 35.194726, Longitude: -89.971431, ZoomLevel: 10, name: 'SHELBY' },
      { Latitude: 36.266619, Longitude: -85.957742, ZoomLevel: 10, name: 'SMITH' },
      { Latitude: 36.481678, Longitude: -87.831444, ZoomLevel: 10, name: 'STEWART' },
      { Latitude: 36.501481, Longitude: -82.264511, ZoomLevel: 10, name: 'SULLIVAN' },
      { Latitude: 36.485424, Longitude: -86.479819, ZoomLevel: 10, name: 'SUMNER' },
      { Latitude: 35.524884, Longitude: -89.763316, ZoomLevel: 10, name: 'TIPTON' },
      { Latitude: 36.367391, Longitude: -86.128051, ZoomLevel: 10, name: 'TROUSDALE' },
      { Latitude: 36.121472, Longitude: -82.417881, ZoomLevel: 10, name: 'UNICOI' },
      { Latitude: 36.297755, Longitude: -83.838679, ZoomLevel: 10, name: 'UNION' },
      { Latitude: 35.691675, Longitude: -85.434046, ZoomLevel: 10, name: 'VAN BUREN' },
      { Latitude: 35.683221, Longitude: -85.776619, ZoomLevel: 10, name: 'WARREN' },
      { Latitude: 36.295269, Longitude: -82.501015, ZoomLevel: 10, name: 'WASHINGTON' },
      { Latitude: 35.245111, Longitude: -87.798692, ZoomLevel: 10, name: 'WAYNE' },
      { Latitude: 36.294187, Longitude: -88.738118, ZoomLevel: 10, name: 'WEAKLEY' },
      { Latitude: 35.944739, Longitude: -85.447606, ZoomLevel: 10, name: 'WHITE' },
      { Latitude: 35.900204, Longitude: -86.907571, ZoomLevel: 10, name: 'WILLIAMSON' },
      { Latitude: 36.145523, Longitude: -86.304507, ZoomLevel: 10, name: 'WILSON' }
    ];
  });

}());
