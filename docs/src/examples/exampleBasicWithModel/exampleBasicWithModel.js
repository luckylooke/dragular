'use strict';
var BasicModelCtrl = function ($scope, $element, dragularService) {
  $scope.items1 = [{
    content: 'Move me, but you can only drop me in one of these containers.'
  }, {
    content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
  }, {
    content: 'Item 3'
  }, {
    content: 'Item 4'
  }];
  $scope.items2 = [{
    content: 'Item 5'
  }, {
    content: 'Item 6'
  }, {
    content: 'Item 7'
  }, {
    content: 'Item 8'
  }];
  var containers = $element.children().eq(0).children();
  dragularService.cleanEnviroment();
  // var drake = dragularService([containers[0],containers[1]],{
  // dragularService([containers[0]],{
  dragularService([containers[0], containers[1]],{
    containersModel: [$scope.items1, $scope.items2],
      // canBeAccepted: function () {
      //     return false;
      // },
      // isContainer: function (el) {
      //     return el.id == 'test';
      // },
      // isContainerModel: function () {
      //     return $scope.items2;
      // }
      // scope: $scope
  });

	// $scope.$on('dragularcloned', myFn('cloned'));
	// $scope.$on('dragulardrag', myFn('drag'));
	// $scope.$on('dragularcancel', myFn('cancel'));
	// $scope.$on('dragulardrop', myFn('drop'));
	// $scope.$on('dragularremove', myFn('remove'));
	// $scope.$on('dragulardragend', myFn('dragend'));
	// $scope.$on('dragularshadow', myFn('shadow'));
	//
	// function myFn(eventName) {
	// 	return function() {
	// 		console.log(eventName, arguments, drake);
	// 	};
	// }

};

BasicModelCtrl.$inject = ['$scope', '$element', 'dragularService'];

module.exports = BasicModelCtrl;
