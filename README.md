# Angular TN County Datamap

An Angular module for selecting Tennessee counties from a svg map.

![Single select example](/county_map_single_snip.PNG)
<br>
<br>

### Installation

In your project's root, run
```bash
bower install tn-datamaps --save
--OR--
npm install tn-datamaps --save
```

In addition to having AngularJS installed, you will need a reference to the following source files:

* underscore.js
* d3.js
* topojson.js
* datamaps.all.js
* angular-datamaps.js
* tnDatamaps.js

An example order could look like so:

```
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/d3/d3.js"></script>
<script src="bower_components/topojson/topojson.js"></script>
<script src="bower_components/datamaps/dist/datamaps.all.js"></script>
<script src="bower_components/angular-datamaps/dist/angular-datamaps.js"></script>
<script src="bower_components/underscore/underscore.js"></script>
<script src="bower_components/tn-datamaps/tnDatamaps.js"></script>
<[your code here]>
```

Next, include it in your main angular module:
```javascript
var app = angular.module('omgMyAngularApp', ['countyMap']);
```

You now have a ```<county-map></county-map>``` element available for use!
<br>
<br>
### Configuration

For two-way binding, the county-map directive needs three attributes: selected-counties, key, and counties.

- **selected-counties** can be an array or object literal. If you want to be able to select multiple counties, make it an
array; for picking single counties, bind it to a single county object.

- **key** is what the directive uses to access the county name property for any given collection of counties.

- **counties** is the entire list of 95 TN counties. This is probably what you are generating a list or dropdown of counties from.

Example usage:
```
<county-map
    selected-counties="selectedCounties"
    key="name"               <!-- { 'id': '107', 'name': 'Davidson', 'district': '3' } -->
    counties="counties"
    options="mapOptions"
</county-map>
```

<br>
##### The directive has an 'options' attribute you can configure in your controller which has the following properties:

| Datatype                       | Name                    | Description                                             |
| ------------------------------ | ----------------------- | ------------------------------------------------------- |
| boolean                        | **multiple**            | allow multiple counties to be selected                  |
| object                         | **fills**               | color object with 'selected' and 'defaultFill' values   |
| function(newCounty, geography) | **onAfterCountySelect** | callback function to be executed when county is clicked |
| string[]                       | **classes**             | optional list of classes to add to the svg map element  |
| string                         | **url**                 | optional path to topo_tn_counties.json file (defaults to '/bower_components/tn-datamaps/topo_tn_counties.json') |

<br>
#### E.g.:
```javascript
app.controller('omgMyController', function() {

    $scope.mapOptions = {
        multiple: true,
        fills: {
            'defaultFill': 'tomato',
            'selected': 'lightblue'
        },
        onAfterCountySelect: function(newCounty, geography) {
            console.log(newCounty);
            console.log(geography);
        },
        classes: ['omg-my-tn-map', 'county-select'],        //adds these classes
        url: 'dist/lib/tn-datamaps/topo_tn_counties.json'   //directly to the svg element
    };
});
```

<br>
![Multiple select example](/county_map_multi_snip.PNG)
