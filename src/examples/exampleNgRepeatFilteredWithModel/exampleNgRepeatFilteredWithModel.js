'use strict';

var NgRepeatFilteredWithModelCtrl = function ($scope, $element, dragularService, $filter) {
  $scope.items1 = [{
    propty: {prop2: 'd'},
    content: 'Move me, but you can only drop me in one of these containers.'
  }, {
    propty: {prop2: 'f'},
    content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
  }, {
    propty: {prop2: 'a'},
    content: 'Apple 3'
  }, {
    propty: {prop2: 'c'},
    content: 'Orange 4'
  }, {
    propty: {prop2: 'v'},
    content: 'Orange 5'
  }, {
    propty: {prop2: 'h'},
    content: 'Apple 6'
  }, {
    propty: {prop2: 'f'},
    content: 'Apple 7'
  }, {
    propty: {prop2: 'k'},
    content: 'Apple 8'
  }];
  $scope.items2 = [{
    propty: {prop2: 'u'},
    content: 'Apple 9'
  }, {
    propty: {prop2: 'e'},
    content: 'Orange 10'
  }, {
    propty: {prop2: 's'},
    content: 'Orange 11'
  }, {
    propty: {prop2: 'u'},
    content: 'Apple 12'
  }, {
    propty: {prop2: 'v'},
    content: 'Orange 13'
  }, {
    propty: {prop2: 'n'},
    content: 'Apple 14'
  }];
  $scope.filter1query = 'Orange';
  $scope.filter2query = 'Orange';
  $scope.filteredModel1 = [];
  $scope.filteredModel2 = [];
  $scope.getFilteredModel = function (filteredModel, items, filterQuery) {
    filteredModel.length = 0;
    /*
    * Following one-liner is same like:
    *   var filteredModelTemp = $filter('filter')(items, filterQuery);
    *   angular.forEach(filteredModelTemp, function(item){
    *     filteredModel.push(item);
    *   });
    * Or like:
    *   var filteredModelTemp = $filter('filter')(items, filterQuery);
    *   for(var i; i < filteredModelTemp.length; i++){
    *     filteredModel.push(filteredModelTemp[i]);
    *   }
    *
    * You cannot just assign filtered array to filteredModel like this:
    *   filteredModel = $filter('filter')(items, filterQuery);
    * Because you would replace the array object you provide to dragular with new one.
    * So dragular will continue to use the one it was provided on init.
    * Hopefully I make it clear. :)
     */
    // [].push.apply(filteredModel, $filter('filter')(items, filterQuery));

    // Example with orderBy filter:
      var tmp = [];
      [].push.apply(tmp, $filter('filter')(items, filterQuery));
      [].push.apply(filteredModel, $filter('orderBy')(tmp, 'propty.prop2'));

      return filteredModel;
  };
  var containers = $element.children().eq(1).children();
  dragularService.cleanEnviroment();
  dragularService([containers[0],containers[1]],{
    containersModel: [$scope.items1, $scope.items2],
    containersFilteredModel: [$scope.filteredModel1, $scope.filteredModel2]
  });
};

NgRepeatFilteredWithModelCtrl.$inject = ['$scope', '$element', 'dragularService', '$filter'];

module.exports = NgRepeatFilteredWithModelCtrl;
