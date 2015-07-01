/* global angular */
'use strict';

/**
 *  Module Example App
 *
 *  DEMO app for dragular https://github.com/luckylooke/dragular
 */
angular.module('example', ['dragularModule'])
  .controller('Example1', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    // dragularService([$element.children();
    dragularService($element.children());
  }]).controller('Example2', ['$scope', '$element', 'dragularService', '$timeout', function TodoCtrl($scope, $element, dragularService, $timeout) {
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
    $scope.$on('shadow', function highlightContainer(e, item, container) {
      e.stopPropagation();
      $timeout(function() {
        container.className += ' highlighted';
      }, 0);
    });
    $scope.$on('shadowRemoved', function highlightRemoval(e, item, container) {
      e.stopPropagation();
      container.className = container.className.replace(' highlighted', '');
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

  }]).controller('Example3', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      removeOnSpill: true
    });
  }]).controller('Example4', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      revertOnSpill: true
    });
  }]).controller('Example5', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      copy: true
    });
  }]).controller('Example6', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      moves: function(el, container, handle) {
        return handle.className === 'handle';
      }
    });
  }]).controller('Example7', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      classes: {
        mirror: 'custom-green-mirror',
        nameSpace: 'same'
      }
    });
  }]).controller('Example8', ['$scope', 'dragularService', function TodoCtrl($scope) {
    $scope.dragularOptions = {
      classes: {
        mirror: 'custom-green-mirror'
      },
      nameSpace: 'same'
    };
  }]).controller('Example9', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService([$element.children()[0], $element.children()[2]], {
      nameSpace: 'apples'
    });
    dragularService([$element.children()[1], $element.children()[3]], {
      nameSpace: 'oranges'
    });
  }]).controller('Example10', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService([$element.children()[0], $element.children()[2]], {
      nameSpace: 'apples',
      dragOverClasses: true
    });
    dragularService([$element.children()[1], $element.children()[3]], {
      nameSpace: 'oranges',
      dragOverClasses: true
    });
  }]);
