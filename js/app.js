var app = angular.module('GraphApp',['orientGraphViz']);
/**app.config(function ($routeProvider){

    $routeProvider.when('/', {
            templateUrl: 'views/graph.html',
            controller: 'GraphController'
        });
});**/
app.controller('GraphController', ['$scope', function($scope){
    
    $scope.config ={
                    menuFunctions : {
                        onViewClick : function(vertex){
                            alert('vertex view clicked : '+vertex.source.name)
                        },
                        getOutLabelsForVertex : function(vertex){
                            return [
                                "sunil",
                                "linus"
                            ]
                        },
                        getInLabelsForVertex : function(vertex){
                            return [
                                "sunil",
                                "linus"
                            ]
                        },
                        onInEClick : function(vertex,label){

                        if (label == "E") {
                            label = "";
                        }
                        else {
                            label = "'" + label + "'";
                        }
                        var dataJson = [];

                        if (label == "'linus'") {
                          dataJson = [
                                  {
                                    "@class": "User",
                                    "out": "#13:6017",
                                    "in": "#12:6779"
                                  },
                                  {
                                    "@rid": "#13:6017",
                                    "@class": "User",
                                    "name": "linus",
                                  }
                                ]

                        }
                        else if(label == "'linus'")
                        {
                            dataJson = [
                                  {
                                    "@class": "User",
                                    "out": "#13:6018",
                                    "in": "#12:6779"
                                  },
                                  {
                                    "@rid": "#13:6018",
                                    "@class": "User",
                                    "name": "linus",
                                    "lastName": "linus",
                                  }
                                ]
                        }
                        return dataJson ;
                    },
                    onOutEClick : function(vertex,label){

                        if (label == "E") {
                            label = "";
                        }
                        else {
                            label = "'" + label + "'";
                        }
                        var dataJson = [];

                        if (label == "'sunil'") {
                          dataJson = [
                                  {
                                    "@rid": "#22:5080",
                                    "@class": "User",
                                    "in": "#13:6010",
                                    "out": "#12:6779"
                                  },
                                  {
                                    "@rid": "#13:6010",
                                    "@class": "User",
                                    "name": "sunil",
                                  }
                                ]

                        }
                        else if(label == "'linus'")
                        {
                            dataJson = [
                                  {
                                    "@rid": "#22:5080",
                                    "@class": "User",
                                    "in": "#13:6011",
                                    "out": "#12:6779"
                                  },
                                  {
                                    "@rid": "#13:6011",
                                    "@class": "User",
                                    "name": "linus"
                                  }
                                ]
                        }

                        return dataJson;
                        console.log('out edge clicked');

                    }
                    },
                    data : [{
                        "@rid": "#12:6779",
                        "@class": "Sunil",
                        "name":"Sunil G",
                        "date": "2012-03-21 00:00:00",
                        "price": 6247.29,
                        "certified": true,
                        "bookValue": 4677.29,
                        "inE" : ["in_sunil","in_snehil","in_anand"],
                        "outE" : ["out_cricket","out_TableTennis"]
                      }],
                      "classes" : {
                      "Sunil": {
                        "fill": "#307a23",
                        "stroke": "#0e2d07",
                        "icon": null,
                        "display": "name"
                      },
                      "User": {
                        "fill": "#C4452A",
                        "stroke": "#352F2E",
                        "icon": null,
                        "display": "name"
                      },
                      "Make": {
                        "fill": "#2789d6",
                        "stroke": "#151c76",
                        "icon": "",
                        "display": "@rid"
                      },
                      "Automobile": {
                        "fill": "#ff9896",
                        "stroke": "#b26a69",
                        "icon": null,
                        "display": "@rid"
                      }
                    }
                  } ;
    $scope.msg = "Sunil g";;

}]);