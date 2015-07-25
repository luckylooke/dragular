/* global angular */
'use strict';
angular.module('examplesApp')
  .controller('Example8', ['$scope', 'dragularService', function TodoCtrl($scope) {
    $scope.dragularOptions = {
      classes: {
        mirror: 'custom-green-mirror'
      },
      nameSpace: 'common' // just connecting left and right container
    };
  }])