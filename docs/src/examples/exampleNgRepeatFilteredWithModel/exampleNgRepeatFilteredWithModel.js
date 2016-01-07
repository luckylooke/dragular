'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NgRepeatFilteredWithModel', ['$scope', '$element', 'dragularService', '$filter', function TodoCtrl($scope, $element, dragularService, $filter) {
    $scope.items1 = [{
      content: 'Move me, but you can only drop me in one of these containers.'
    }, {
      content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
    }, {
      content: 'Apple 3'
    }, {
      content: 'Orange 4'
    }, {
      content: 'Orange 5'
    }, {
      content: 'Apple 6'
    }, {
      content: 'Apple 7'
    }, {
      content: 'Apple 8'
    }];
    $scope.items2 = [{
      content: 'Apple 9'
    }, {
      content: 'Orange 10'
    }, {
      content: 'Orange 11'
    }, {
      content: 'Apple 12'
    }, {
      content: 'Orange 13'
    }, {
      content: 'Apple 14'
    }];
    $scope.filter1query = 'Orange';
    $scope.filter2query = 'Apple';
    $scope.filteredModel1 = [];
    $scope.filteredModel2 = [];
    $scope.getFilteredModel = function (filteredModel, items, filterQuery) {
      filteredModel.length = 0;
      Array.prototype.push.apply(filteredModel, $filter('filter')(items, filterQuery));
      return filteredModel;
    };
    var containers = $element.children().eq(1).children();
    dragularService.cleanEnviroment();
    dragularService([containers[0],containers[1]],{
      containersModel: [$scope.items1, $scope.items2],
      containersFilteredModel: [$scope.filteredModel1, $scope.filteredModel2]
    });
  }]);
