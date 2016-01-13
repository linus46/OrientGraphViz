var app = angular.module('GraphApp',['orientGraphViz']);
/**app.config(function ($routeProvider){

    $routeProvider.when('/', {
            templateUrl: 'views/graph.html',
            controller: 'GraphController'
        });
});**/
app.controller('GraphController', ['$scope', function($scope){
    $scope.redraw = function(){
      var data =  [{
                        "@rid": "#12:6779",
                        "@class": "Sunil",
                        "name":"Sunil G",
                        "icon":"https://github.com/favicon.ico"
                      }];
        $scope.$broadcast('redrawGraph',data);
    }
    $scope.showIcon = true ;
    var data = [];
    $scope.config ={
                    menuFunctions : {
                        onViewClick : function(vertex){
                            alert('vertex view clicked : '+vertex.source.name)
                        },
                        getOutLabelsForVertex : function(vertex){
                            return [
                                "movie",
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

                        if (label == "'movie'") {
                          dataJson = [
                                  {
                                    "@rid": "#22:5080",
                                    "@class": "movie",
                                    "in": "#13:6010",
                                    "out": "#12:6779"
                                  },
                                  {
                                    "@rid": "#13:6010",
                                    "@class": "movie",
                                    "name": "DDLJ",
                                    "icon":"https://github.com/favicon.ico"
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
                                    "name": "linus",
                                    "icon":"https://github.com/favicon.ico"
                                  }
                                ]
                        }

                        return dataJson;

                    }
                    },
                    data :data,
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
                      "movie": {
                        "fill": "#ff9896",
                        "stroke": "#b26a69",
                        "icon": null,
                        "display": "name"
                      }
                    }
                  } ;
    $scope.msg = "Sunil g";;

}]);