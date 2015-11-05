# TN Datamaps


## Installation

In your project's root, run 
```bash
npm install tn-datamaps
```

In addition to having AngularJS installed, you will need a reference to the following source files: 


```
<script src="bower_components/d3/d3.js"></script>
<script src="bower_components/topojson/topojson.js"></script>
<script src="bower_components/datamaps/dist/datamaps.all.js"></script>
<script src="bower_components/angular-datamaps/dist/angular-datamaps.js"></script>
<script src="bower_components/underscore/underscore-min.js"></script>
<script src="main.js"></script>
<script src="mapDirective.js"></script>
```



## Configuration

##### If neede, $scope.options can be an object in your controller that can have the following properties:
   | Datatype                      | Name                   | Description                                            |
   | ----------------------------- | ---------------------- | :----------------------------------------------------: |
   | boolean                       | **multiple**           | allow multiple counties to be selected                 |
   | object                        | **fills**              | color object with 'selected' and 'defaultFill' values  |
   | function(newCounty, geography)| **onAfterCountySelect**| callback function to be executed when county is clicked|
   | string[]                      | **classes**            | optional list of classes to add to the svg map element |

#### E.g.:
```javascript
app.controller('omgMyController', function() {

    $scope.options = {
        multiple: true,
        fills: {
            'defaultFill': 'tomato',
            'selected': 'lightblue'
        },
        onAfterCountySelect: function(newCounty, geography) {
            console.log(newCounty);
            console.log(geography);
        },
        classes: ['omg-my-tn-map', 'county-select']        //adds these classes directly to the svg element
    };

});
```

