'use strict';

/* Controllers */

angular.module('futures.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

        $http.get('img/images/projects.json').success(function(data) {
            $scope.projects = data;
        });
  }])
  .controller('AboutCtrl', ['$scope', function($scope) {

  }]);
