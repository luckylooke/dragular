'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Events', ['$scope', '$element', 'dragularService', '$timeout', function TodoCtrl($scope, $element, dragularService, $timeout) {
    dragularService.cleanEnviroment();
    dragularService($element.children(), {
      scope: $scope
    });
    $scope.$on('drag', function(e, el) {
      e.stopPropagation();
      el.className = el.className.replace(' ex-moved', '');
    });
    $scope.$on('drop', function(e, el) {
      e.stopPropagation();
      $timeout(function() {
        el.className += ' ex-moved';
      }, 0);
    });

    // $scope.$on('cloned', myFn('cloned'));
    // $scope.$on('drag', myFn('drag'));
    // $scope.$on('cancel', myFn('cancel'));
    // $scope.$on('drop', myFn('drop'));
    // $scope.$on('remove', myFn('remove'));
    // $scope.$on('dragend', myFn('dragend'));
    // $scope.$on('shadow', myFn('shadow'));
    // $scope.$on('shadowRemoved', myFn('shadow'));

    // function myFn(eventName) {
    //   return function() {
    //     console.log(eventName, arguments);
    //   };
    // }

  }]);
