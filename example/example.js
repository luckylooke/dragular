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
    dragularService([$element.children()[0], $element.children()[1]]);
  }]).controller('Example2', ['$scope', '$element', 'dragularService', '$timeout', function TodoCtrl($scope, $element, dragularService, $timeout) {
    dragularService([$element.children()[0], $element.children()[1]], {
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
  }]).controller('Example3', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    dragularService([$element.children()[0]], {
      removeOnSpill: true
    });
  }]).controller('Example4', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    dragularService([$element.children()[0], $element.children()[1]], {
      revertOnSpill: true
    });
  }]).controller('Example5', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    dragularService([$element.children()[0], $element.children()[1]], {
      copy: true
    });
  }]).controller('Example6', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    dragularService([$element.children()[0], $element.children()[1]], {
      moves: function(el, container, handle) {
        return handle.className === 'handle';
      }
    });
  }]);

// function $(id) {
//   return document.getElementById(id);
// }

// dragular([$('left1'), $('right1')]);
// dragular([$('left2'), $('right2')], {
//   copy: true
// });
// dragular([$('left3'), $('right3')]).on('drag', function(el) {
//   el.className = el.className.replace(' ex-moved', '');
// }).on('drop', function(el) {
//   setTimeout(function() {
//     el.className += ' ex-moved';
//   }, 0);
// });
// dragular([$('left4'), $('right4')], {
//   revertOnSpill: true
// });
// dragular([$('left5'), $('right5')], {
//   moves: function(el, container, handle) {
//     return handle.className === 'handle';
//   }
// });
// dragular([$('single1')], {
//   removeOnSpill: true
// });
