'use strict';

var EventsCtrl = function ($scope, $element, dragularService, $timeout) {
  dragularService.cleanEnviroment();
  
  var drake = dragularService($element.children(), {
    scope: $scope
  });
  $scope.$on('dragulardrag', function(e, el) {
    e.stopPropagation();
    el.className = el.className.replace(' ex-moved', '');
  });
  $scope.$on('dragulardrop', function(e, el) {
    e.stopPropagation();
    $timeout(function() {
      el.className += ' ex-moved';
    }, 0);
  });

  $scope.$on('dragularcloned', myFn('cloned in EventsCtrl'));
  $scope.$on('dragulardrag', myFn('drag in EventsCtrl'));
  $scope.$on('dragularcancel', myFn('cancel in EventsCtrl'));
  $scope.$on('dragulardrop', myFn('drop in EventsCtrl'));
  $scope.$on('dragularremove', myFn('remove in EventsCtrl'));
  $scope.$on('dragulardragend', myFn('dragend in EventsCtrl'));
  $scope.$on('dragularshadow', myFn('shadow in EventsCtrl'));

  function myFn(eventName) {
    return function() {
      console.log(eventName, arguments, drake);
    };
  }
};

var Events2Ctrl = function ($scope, $element, dragularService, $timeout) {
  var drake = dragularService($element.children(), {
    scope: $scope
  });
  $scope.$on('dragulardrag', function(e, el) {
    e.stopPropagation();
    el.className = el.className.replace(' ex-moved', '');
  });
  $scope.$on('dragulardrop', function(e, el) {
    e.stopPropagation();
    $timeout(function() {
      el.className += ' ex-moved';
    }, 0);
  });

  $scope.$on('dragularcloned', myFn('cloned in Events2Ctrl'));
  $scope.$on('dragulardrag', myFn('drag in Events2Ctrl'));
  $scope.$on('dragularcancel', myFn('cancel in Events2Ctrl'));
  $scope.$on('dragulardrop', myFn('drop in Events2Ctrl'));
  $scope.$on('dragularremove', myFn('remove in Events2Ctrl'));
  $scope.$on('dragulardragend', myFn('dragend in Events2Ctrl'));
  $scope.$on('dragularshadow', myFn('shadow in Events2Ctrl'));

  function myFn(eventName) {
    return function() {
      console.log(eventName, arguments, drake);
    };
  }
};

EventsCtrl.$inject = ['$scope', '$element', 'dragularService', '$timeout'];
Events2Ctrl.$inject = ['$scope', '$element', 'dragularService', '$timeout'];

module.exports = [EventsCtrl, Events2Ctrl];
