(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Basic', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children());
  }]);

},{"../examplesApp":22}],2:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Basic', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children());
  }]);

examplesAppModule
  .controller('BasicModel', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
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
    dragularService([containers[0],containers[1]],{
      containersModel: [$scope.items1, $scope.items2]
    });
  }]);

},{"../examplesApp":22}],3:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('BoundingBox', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    var boundingBox = $element[0];
    dragularService($element.children(), {
      boundingBox: boundingBox
    });
  }]);

},{"../examplesApp":22}],4:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('BoundingBoxLockX', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    var boundingBox = $element.children().children()[0];
    dragularService(boundingBox, {
      boundingBox: boundingBox,
      lockX: true
    });
  }]);

},{"../examplesApp":22}],5:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('BoundingBoxLockY', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    var boundingBox = $element.children().children()[0];
    dragularService(boundingBox, {
      boundingBox: boundingBox,
      lockY: true
    });
  }]);

},{"../examplesApp":22}],6:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Copy', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      copy: true
    });
  }]);

},{"../examplesApp":22}],7:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('CopyModel', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    $scope.items1 = [{
      content: 'Move me, and make copy on drop.'
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
    dragularService([containers[0],containers[1]],{
      containersModel: [$scope.items1, $scope.items2],
      copy: true
    });
  }]);

},{"../examplesApp":22}],8:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('CustomClasses', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      classes: {
        mirror: 'custom-green-mirror'
      }
    });
  }]);

},{"../examplesApp":22}],9:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('Directive', ['$scope', function DirectiveCtrl($scope) {
    $scope.dragularOptions = {
      classes: {
        mirror: 'custom-green-mirror'
      },
      nameSpace: 'same' // just connecting left and right container
    };
  }]);

},{"../examplesApp":22}],10:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('DirectiveModel', ['$scope', function TodoCtrl($scope) {
    $scope.items1 = [{
      content: 'Move me, and make copy on drop.'
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
    $scope.dragularOptions = {
      containersModel: $scope.items1,
      classes: {
        mirror: 'custom-green-mirror'
      },
      nameSpace: 'common' // just connecting left and right container
    };
  }]);

},{"../examplesApp":22}],11:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
 .controller('DragOverClasses', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService([$element.children()[0], $element.children()[2]], {
      nameSpace: 'apples',
      dragOverClasses: true
    });
    dragularService([$element.children()[1], $element.children()[3]], {
      nameSpace: 'oranges',
      dragOverClasses: true
    });
  }]);

},{"../examplesApp":22}],12:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Events', ['$scope', '$element', 'dragularService', '$timeout', function TodoCtrl($scope, $element, dragularService, $timeout) {
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

},{"../examplesApp":22}],13:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Handle', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      moves: function(el, container, handle) {
        return handle.className === 'handle';
      }
    });
  }]);

},{"../examplesApp":22}],14:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NameSpaces', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService([$element.children()[0], $element.children()[2]], {
      nameSpace: 'apples'
    });
    dragularService($element.children()[1], {
      nameSpace: 'oranges'
    });
    dragularService($element.children()[3], { // mixed
      nameSpace: ['oranges', 'apples']
    });
  }]);

},{"../examplesApp":22}],15:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NestedNgRepeat', ['$timeout', '$scope', '$element', 'dragularService', function TodoCtrl($timeout, $scope, $element, dragularService) {
    $timeout(function() { // timeount due to ngRepeat to be ready
      dragularService($element, {
        moves: function(el, container, handle) {
          return handle.classList.contains('row-handle');
        }
      });
      dragularService($element.children(), {
        moves: function(el, container, handle) {
          return !handle.classList.contains('row-handle');
        }
      });
    }, 0);
    $scope.items = [{
      items: [{
        content: 'Item a1'
      }, {
        content: 'Item a2'
      }, {
        content: 'Item a3'
      }, {
        content: 'Item a4'
      }]
    }, {
      items: [{
        content: 'Item b1'
      }, {
        content: 'Item b2'
      }, {
        content: 'Item b3'
      }, {
        content: 'Item b4'
      }]
    }, {
      items: [{
        content: 'Item c1'
      }, {
        content: 'Item c2'
      }, {
        content: 'Item c3'
      }, {
        content: 'Item c4'
      }]
    }];
  }]);

},{"../examplesApp":22}],16:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NestedNgRepeatWithModel', ['$timeout', '$scope', '$element', 'dragularService', function TodoCtrl($timeout, $scope, $element, dragularService) {
    $timeout(function() { // timeount due to nested ngRepeat to be ready
      var container = $element.children().eq(0).children(),
        parentContainers = container.children(),
        nestedContainers = [];

      dragularService(container, {
        moves: function(el, container, handle) {
          return handle.classList.contains('row-handle');
        },
        containersModel: $scope.items
      });

      // collect nested contianers
      for (var i = 0; i < parentContainers.length; i++) {
        nestedContainers.push(parentContainers.eq(i).children()[1]);
      }

      dragularService(nestedContainers, {
        moves: function(el, container, handle) {
          return !handle.classList.contains('row-handle');
        },
        containersModel: (function getNestedContainersModel(){
          var parent = $scope.items,
            containersModel = [];
          for (var i = 0; i < parent.length; i++) {
            containersModel.push(parent[i].items);
          }
          return containersModel;
        })()
      });
    }, 0);
    $scope.items = [{
      items: [{
        content: 'Item a1'
      }, {
        content: 'Item a2'
      }, {
        content: 'Item a3'
      }, {
        content: 'Item a4'
      }]
    }, {
      items: [{
        content: 'Item b1'
      }, {
        content: 'Item b2'
      }, {
        content: 'Item b3'
      }, {
        content: 'Item b4'
      }]
    }, {
      items: [{
        content: 'Item c1'
      }, {
        content: 'Item c2'
      }, {
        content: 'Item c3'
      }, {
        content: 'Item c4'
      }]
    }];
  }]);

},{"../examplesApp":22}],17:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NgRepeat', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    dragularService($element.children());
    $scope.items = [{
      content: 'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.'
    }, {
      content: 'Item 2'
    }, {
      content: 'Item 3'
    }, {
      content: 'Item 4'
    }];
    $scope.addItem = function addItem() {
      var index = $scope.items.indexOf(this.item) + 1;
      $scope.items.splice(index, 0, {
        content: this.item.content + '-copy'
      });
    };
    $scope.removeItem = function removeItem() {
      var index = $scope.items.indexOf(this.item);
      $scope.items.splice(index, 1);
    };
  }]);

},{"../examplesApp":22}],18:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('NgRepeatWithModel', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    $scope.items = [{
      content: 'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.'
    }, {
      content: 'Item 2'
    }, {
      content: 'Item 3'
    }, {
      content: 'Item 4'
    }];
    dragularService($element.children().eq(0).children(), {containersModel: $scope.items});
    $scope.addItem = function addItem() {
      var index = $scope.items.indexOf(this.item) + 1;
      $scope.items.splice(index, 0, {
        content: this.item.content + '-copy'
      });
    };
    $scope.removeItem = function removeItem() {
      var index = $scope.items.indexOf(this.item);
      $scope.items.splice(index, 1);
    };
  }]);

},{"../examplesApp":22}],19:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('RemoveOnSpill', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      removeOnSpill: true
    });
  }]);

},{"../examplesApp":22}],20:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('RevertOnSpill', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      revertOnSpill: true
    });
  }]);

},{"../examplesApp":22}],21:[function(require,module,exports){
/* global angular */
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('ScrollingDrag', ['$scope', '$interval', '$element', 'dragularService', function TodoCtrl($scope, $interval, $element, dragularService) {


    var timer,
      leftScroll = document.getElementById('leftScroll'),
      rightScroll = document.getElementById('rightScroll'),
      leftTopBar = document.getElementById('leftTopBar'),
      leftBottomBar = document.getElementById('leftBottomBar'),
      rightTopBar = document.getElementById('rightTopBar'),
      rightBottomBar = document.getElementById('rightBottomBar');

    dragularService([leftScroll, rightScroll], {
      scope: $scope
    });

    registerEvents(leftTopBar, leftScroll, -5);
    registerEvents(leftBottomBar, leftScroll, 5);
    registerEvents(rightTopBar, rightScroll, -5);
    registerEvents(rightBottomBar, rightScroll, 5);

    function registerEvents(bar, container, inc, speed) {
      if (!speed) {
        speed = 20;
      }
      angular.element(bar).on('dragularenter', function() {
        container.scrollTop += inc;
        timer = $interval(function moveScroll() {
          console.log('tick', bar, container, inc);
          container.scrollTop += inc;
        }, speed);
      });
      angular.element(bar).on('dragularleave', function() {
        $interval.cancel(timer);
      });
    }

    // in case you release drag over bar
    $scope.$on('release', function stopScroll () {
    	$interval.cancel(timer);
    });

  }]);

},{"../examplesApp":22}],22:[function(require,module,exports){
/* global angular, hljs */
'use strict';

// var angular = require('angular');


require('../../../src/dragularModule');
require('./templates');

/**
 *  Module Example App
 *
 *  DEMO app for dragular https://github.com/luckylooke/dragular
 */

module.exports = angular.module('examplesApp', ['dragularModule', 'templates', 'ui.router']).controller('ExAppCtrl', ['$scope', function($scope) {
    $scope.examplesList = [{
        template: 'exampleBasic/exampleBasic.html',
        link: 'exampleBasic',
        title: 'Basic'
    },{
        template: 'exampleBasicWithModel/exampleBasicWithModel.html',
        link: 'exampleBasicWithModel',
        title: 'Basic - with model'
    }, {
        template: 'exampleDirective/exampleDirective.html',
        link: 'exampleDirective',
        title: 'Directive'
    }, {
        template: 'exampleDirectiveWithModel/exampleDirectiveWithModel.html',
        link: 'exampleDirectiveWithModel',
        title: 'Directive - with model'
    }, {
        template: 'exampleEvents/exampleEvents.html',
        link: 'exampleEvents',
        title: 'Events'
    }, {
        template: 'exampleRemoveOnSpill/exampleRemoveOnSpill.html',
        link: 'exampleRemoveOnSpill',
        title: 'Remove on spill'
    }, {
        template: 'exampleRevertOnSpill/exampleRevertOnSpill.html',
        link: 'exampleRevertOnSpill',
        title: 'Revert on spill'
    }, {
        template: 'exampleCopy/exampleCopy.html',
        link: 'exampleCopy',
        title: 'Copy'
    }, {
        template: 'exampleCopyWithModel/exampleCopyWithModel.html',
        link: 'exampleCopyWithModel',
        title: 'Copy - with model'
    }, {
        template: 'exampleHandle/exampleHandle.html',
        link: 'exampleHandle',
        title: 'Handle'
    }, {
        template: 'exampleCustomClasses/exampleCustomClasses.html',
        link: 'exampleCustomClasses',
        title: 'Custom classes'
    }, {
        template: 'exampleNameSpaces/exampleNameSpaces.html',
        link: 'exampleNameSpaces',
        title: 'NameSpaces'
    }, {
        template: 'exampleDragOverClasses/exampleDragOverClasses.html',
        link: 'exampleDragOverClasses',
        title: 'DragOver classes'
    }, {
        template: 'exampleBoundingBox/exampleBoundingBox.html',
        link: 'exampleBoundingBox',
        title: 'BoundingBox'
    }, {
        template: 'exampleBoundingBoxLockX/exampleBoundingBoxLockX.html',
        link: 'exampleBoundingBoxLockX',
        title: 'BoundingBox + LockX'
    }, {
        template: 'exampleBoundingBoxLockY/exampleBoundingBoxLockY.html',
        link: 'exampleBoundingBoxLockY',
        title: 'BoundingBox + LockY'
    }, {
        template: 'exampleNgRepeat/exampleNgRepeat.html',
        link: 'exampleNgRepeat',
        title: 'ngRepeat'
    }, {
        template: 'exampleNgRepeatWithModel/exampleNgRepeatWithModel.html',
        link: 'exampleNgRepeatWithModel',
        title: 'ngRepeat - with model'
    }, {
        template: 'exampleNestedNgRepeat/exampleNestedNgRepeat.html',
        link: 'exampleNestedNgRepeat',
        title: 'Nested ngRepead'
    }, {
        template: 'exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.html',
        link: 'exampleNestedNgRepeatWithModel',
        title: 'Nested ngRepead - with model'
    }, {
        template: 'exampleScrollingDrag/exampleScrollingDrag.html',
        link: 'exampleScrollingDrag',
        title: 'Scrolling drag'
    }];

    // default template loaded first time
    $scope.exampleTemplate = 'exampleBasic/exampleBasic.html';

    $scope.highlightCode = function () {
        if(document.getElementsByTagName('code').length){
            var codeBlocks = document.getElementsByTagName('code');
            for (var i = codeBlocks.length - 1; i >= 0; i--) {
                hljs.highlightBlock(codeBlocks[i]);
            }
        }
    };

    var rowOffcanvas = angular.element(document.getElementById('rowOffcanvas'));
    $scope.toggleSidebar = function toggleSidebar () {
        rowOffcanvas.toggleClass('active');
    };

}]);

({"exampleBasic":({"exampleBasic":require("./exampleBasic/exampleBasic.js")}),"exampleBasicWithModel":({"exampleBasicWithModel":require("./exampleBasicWithModel/exampleBasicWithModel.js")}),"exampleBoundingBox":({"exampleBoundingBox":require("./exampleBoundingBox/exampleBoundingBox.js")}),"exampleBoundingBoxLockX":({"exampleBoundingBoxLockX":require("./exampleBoundingBoxLockX/exampleBoundingBoxLockX.js")}),"exampleBoundingBoxLockY":({"exampleBoundingBoxLockY":require("./exampleBoundingBoxLockY/exampleBoundingBoxLockY.js")}),"exampleCopy":({"exampleCopy":require("./exampleCopy/exampleCopy.js")}),"exampleCopyWithModel":({"exampleCopyWithModel":require("./exampleCopyWithModel/exampleCopyWithModel.js")}),"exampleCustomClasses":({"exampleCustomClasses":require("./exampleCustomClasses/exampleCustomClasses.js")}),"exampleDirective":({"exampleDirective":require("./exampleDirective/exampleDirective.js")}),"exampleDirectiveWithModel":({"exampleDirectiveWithModel":require("./exampleDirectiveWithModel/exampleDirectiveWithModel.js")}),"exampleDragOverClasses":({"exampleDragOverClasses":require("./exampleDragOverClasses/exampleDragOverClasses.js")}),"exampleEvents":({"exampleEvents":require("./exampleEvents/exampleEvents.js")}),"exampleHandle":({"exampleHandle":require("./exampleHandle/exampleHandle.js")}),"exampleNameSpaces":({"exampleNameSpaces":require("./exampleNameSpaces/exampleNameSpaces.js")}),"exampleNestedNgRepeat":({"exampleNestedNgRepeat":require("./exampleNestedNgRepeat/exampleNestedNgRepeat.js")}),"exampleNestedNgRepeatWithModel":({"exampleNestedNgRepeatWithModel":require("./exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.js")}),"exampleNgRepeat":({"exampleNgRepeat":require("./exampleNgRepeat/exampleNgRepeat.js")}),"exampleNgRepeatWithModel":({"exampleNgRepeatWithModel":require("./exampleNgRepeatWithModel/exampleNgRepeatWithModel.js")}),"exampleRemoveOnSpill":({"exampleRemoveOnSpill":require("./exampleRemoveOnSpill/exampleRemoveOnSpill.js")}),"exampleRevertOnSpill":({"exampleRevertOnSpill":require("./exampleRevertOnSpill/exampleRevertOnSpill.js")}),"exampleScrollingDrag":({"exampleScrollingDrag":require("./exampleScrollingDrag/exampleScrollingDrag.js")}),"examplesRouter":require("./examplesRouter.js"),"templates":require("./templates.js")});

},{"../../../src/dragularModule":26,"./exampleBasic/exampleBasic.js":1,"./exampleBasicWithModel/exampleBasicWithModel.js":2,"./exampleBoundingBox/exampleBoundingBox.js":3,"./exampleBoundingBoxLockX/exampleBoundingBoxLockX.js":4,"./exampleBoundingBoxLockY/exampleBoundingBoxLockY.js":5,"./exampleCopy/exampleCopy.js":6,"./exampleCopyWithModel/exampleCopyWithModel.js":7,"./exampleCustomClasses/exampleCustomClasses.js":8,"./exampleDirective/exampleDirective.js":9,"./exampleDirectiveWithModel/exampleDirectiveWithModel.js":10,"./exampleDragOverClasses/exampleDragOverClasses.js":11,"./exampleEvents/exampleEvents.js":12,"./exampleHandle/exampleHandle.js":13,"./exampleNameSpaces/exampleNameSpaces.js":14,"./exampleNestedNgRepeat/exampleNestedNgRepeat.js":15,"./exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.js":16,"./exampleNgRepeat/exampleNgRepeat.js":17,"./exampleNgRepeatWithModel/exampleNgRepeatWithModel.js":18,"./exampleRemoveOnSpill/exampleRemoveOnSpill.js":19,"./exampleRevertOnSpill/exampleRevertOnSpill.js":20,"./exampleScrollingDrag/exampleScrollingDrag.js":21,"./examplesRouter.js":23,"./templates":24,"./templates.js":24}],23:[function(require,module,exports){
'use strict';

var examplesAppModule = require('./examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partials/partial-home.html'
      })
      .state('docs', {
        url: '/docs',
        templateUrl: 'partials/partial-docs.html',
        controller: ["$state", function ($state) {
          // go to install notes by default
          $state.go('docs.detail', {link: 'exampleScrollingDrag'});
        }]
      })
      .state('docs.detail', {
        url: '/:link',
        templateUrl: function($stateParams) {
          return $stateParams.link + '/' + $stateParams.link + '.html';
        }
      })
      .state('contribute', {
        url: '/contribute',
        templateUrl: 'partials/partial-contribute.html'
      });
  }]);

},{"./examplesApp":22}],24:[function(require,module,exports){
'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("docsInstall/docsInstall.html","<h2>Install</h2>\n<p>download dragular.js and dragular.css from dist folder</p>\n<p>OR clone git</p>\n<pre><code>\ngit clone http://github.com/luckylooke/dragular.git\n</code></pre>\n<p>OR use npm</p>\n<pre><code>\n[sudo] npm install dragular\n</code></pre>\n<p>OR use bower</p>\n<pre><code>\nbower install dragular\n</code></pre>\n<p>AND include files into your project</p>\n<pre><code>\n&lt;link href=\'styles/dragular.css\' rel=\'stylesheet\' type=\'text/css\' /&gt;\n&lt;script src=\'scripts/dragular.js\'&gt;&lt;/script&gt;\n</code></pre>\n<p>AND put dragularModule into dependency array</p>\n<pre><code>\nvar app = angular.module(\'myApp\', [\'dragularModule\', \'otherDependencies\']);\n</code></pre>\n<p>DONE :)</p>\n");
$templateCache.put("exampleBasic/exampleBasic.html","<div class=\'parent\'>\n  <h2>Basic</h2>\n  <label for=\'hy\'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\n  <div class=\'wrapper\' ng-controller=\"Basic\">\n    <div class=\'containerVertical\'>\n      <div>Move me, but you can only drop me in one of these containers.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n      <div>Item 3.</div>\n      <div>Item 6.</div>\n    </div>\n    <div class=\'containerVertical\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n      <div>Item 4.</div>\n      <div>Item 5.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Basic\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\n    dragularService($element.children());\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n  &lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;&gt;\n    &lt;div class=\'containerVertical\'&gt;\n        &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\n        &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n        &lt;div&gt;Item 3.&lt;/div&gt;\n        &lt;div&gt;Item 6.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\'containerVertical\'&gt;\n        &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n        &lt;div&gt;Item 4.&lt;/div&gt;\n        &lt;div&gt;Item 5.&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleBasicWithModel/exampleBasicWithModel.html","<div class=\'parent\'>\n  <h2>Basic - with model</h2>\n  <label for=\'hy\'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\n  <div class=\'wrapper\' ng-controller=\"BasicModel\">\n    <div class=\'tableRow\'>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\'containerVertical\'>\n        <pre>Items1:\n          <br/>{{items1 | json}}</pre>\n      </div>\n      <div class=\'containerVertical\'>\n        <pre>Items2:\n          <br/>{{items2 | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'BasicModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, but you can only drop me in one of these containers.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    var containers = $element.children().children();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2]\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;&gt;\n    &lt;div class=\'tableRow\'&gt;\n        &lt;div class=\'containerVertical\'&gt;\n            &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\'containerVertical\'&gt;\n            &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;tableRow&quot;&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items1:\n                &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items2:\n                &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleBoundingBox/exampleBoundingBox.html","        <div class=\'parent\'>\n            <h2>BoundingBox</h2>\n            <label for=\'hy\'>You can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBox\">\n                <div class=\'containerVertical\'>\n                    <div>This items cannot cross its example element, just try it your selves.</div>\n                    <div>Item 2.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                </div>\n                <div class=\'containerVertical\'>\n                    <div>This items cannot cross its example element, just try it your selves.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children(), {\n    boundingBox: $element\n  });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleBoundingBoxLockX/exampleBoundingBoxLockX.html","<div class=\'parent\'>\n            <h2>BoundingBox and lockX</h2>\n            <label for=\'hy\'>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockX\">\n                <div class=\'containerHorizontal\'>\n                    <div class=\'boundingBox\'>\n                        <div class=\"width25\">Items are locked in X axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\n                        <div class=\"width25\">item 2</div>\n                        <div class=\"width25\">item 3</div>\n                        <div class=\"width25\">item 4</div>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children()[0].children(), {\n    boundingBox: $element.children()[0],\n    lockX: true\n  });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleBoundingBoxLockY/exampleBoundingBoxLockY.html","        <div class=\'parent\'>\n            <h2>BoundingBox and LockY</h2>\n            <label for=\'hy\'>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockY\">\n                <div class=\'containerVertical\'>\n                    <div class=\'boundingBox\'>\n                        <div>Items are locked in Y axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\n                        <div>item 2</div>\n                        <div>item 3</div>\n                        <div>item 4</div>\n                        <div>item 5</div>\n                        <div>item 6</div>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children()[0].children(), {\n    boundingBox: $element.children()[0],\n    lockY: true\n  });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleCopy/exampleCopy.html","<div class=\'parent\'>\n  <h2>Copy</h2>\n  <label for=\'hy\'>Copying stuff is great too.</label>\n  <div class=\'wrapper\' ng-controller=\"Copy\" ng-hide=\"globals.showModelExamples\">\n    <div id=\'left2\' class=\'containerVertical\'>\n      <div>Move me, and make copy on drop.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n    </div>\n    <div id=\'right2\' class=\'containerVertical\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Copy\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\n    dragularService($element.children(), {\n      copy: true\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Copy&quot; ng-hide=&quot;globals.showModelExamples&quot;&gt;\n    &lt;div id=\'left2\' class=\'containerVertical\'&gt;\n      &lt;div&gt;Move me, and make copy on drop.&lt;/div&gt;\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div id=\'right2\' class=\'containerVertical\'&gt;\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleCopyWithModel/exampleCopyWithModel.html","<div class=\'parent\'>\n  <h2>Copy - with model</h2>\n  <label for=\'hy\'>Copying stuff is great too.</label>\n  <div class=\'wrapper\' ng-controller=\"CopyModel\">\n    <div class=\'tableRow\'>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\'containerVertical\'>\n        <div>Items1:\n          <br/>{{items1 | json}}</div>\n      </div>\n      <div class=\'containerVertical\'>\n        <div>Items2:\n          <br/>{{items2 | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'CopyModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, and make copy on drop.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    var containers = $element.children().children();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2],\n      copy: true\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;CopyModel&quot; ng-show=&quot;globals.showModelExamples&quot;&gt;\n    &lt;div class=\'tableRow\'&gt;\n      &lt;div class=\'containerVertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\'containerVertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;tableRow&quot;&gt;\n      &lt;div class=&quot;container&quot;&gt;\n        &lt;div&gt;Items1:\n          &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;container&quot;&gt;\n        &lt;div&gt;Items2:\n          &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleCustomClasses/exampleCustomClasses.html","<div class=\'parent\'>\n    <h2>Custom classes</h2>\n    <label for=\'hy\'>You can overwrite buildin classes by providing classes names in object via options.classes.</label>\n    <div class=\'wrapper\' ng-controller=\"CustomClasses\">\n        <div id=\'left4\' class=\'containerVertical\'>\n            <div>Move me, but you can only drop me in one of these containers.</div>\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n            <div>Item 3.</div>\n            <div>Item 6.</div>\n        </div>\n        <div id=\'right3\' class=\'containerVertical\'>\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n        </div>\n    </div>\n    <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], { classes: {\n    mirror: \'custom-green-mirror\'\n  } });\n\n  // Default classes are:\n  option.classes = {\n    mirror: \'gu-mirror\',\n    hide: \'gu-hide\',\n    unselectable: \'gu-unselectable\',\n    transit: \'gu-transit\',\n    overActive: \'gu-over-active\',\n    overAccepts: \'gu-over-accept\',\n    overDeclines: \'gu-over-decline\'\n  };\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleDirective/exampleDirective.html","<div class=\'parent\'>\n  <h2>Directive</h2>\n  <label for=\'hy\'>Same as custom classes example, but showing use of directive.</label>\n  <div class=\'wrapper\' ng-controller=\"Directive\">\n    <div class=\'containerVertical\' dragular=\"dragularOptions\">\n      <div>Move me, but you can only drop me in one of these containers.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n      <div>Item 3.</div>\n      <div>Item 6.</div>\n    </div>\n    <div class=\'containerVertical\' dragular=\'{\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"same\"}\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n      <div>Item 4.</div>\n      <div>Item 5.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Directive\', [\'$scope\', \'dragularService\', function TodoCtrl($scope) {\n    $scope.dragularOptions = {\n      classes: {\n        mirror: \'custom-green-mirror\'\n      },\n      nameSpace: \'common\' // just connecting left and right container\n    };\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Directive&quot;&gt;\n    &lt;div class=\'containerVertical\' dragular=&quot;dragularOptions&quot;&gt;\n      &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n      &lt;div&gt;Item 3.&lt;/div&gt;\n      &lt;div&gt;Item 6.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\'containerVertical\' dragular=\'{&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;same&quot;}\'&gt;\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n      &lt;div&gt;Item 4.&lt;/div&gt;\n      &lt;div&gt;Item 5.&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleDirectiveWithModel/exampleDirectiveWithModel.html","<div class=\'parent\'>\n  <h2>Directive - with model</h2>\n  <label for=\'hy\'>Same as custom classes example, but showing use of directive.</label>\n  <div class=\'wrapper\' ng-controller=\"DirectiveModel\">\n    <div class=\'tableRow\'>\n      <div class=\'containerVertical\' dragular=\"dragularOptions\">\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'containerVertical\' dragular=\'{\"containersModel\":\"items2\",\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"common\"}\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\'containerVertical\'>\n        <div>Items1:\n          <br/>{{items1 | json}}</div>\n      </div>\n      <div class=\'containerVertical\'>\n        <div>Items2:\n          <br/>{{items2 | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n       \n        <code>\n// JS\n  controller(\'DirectiveModel\', [\'$scope\', function TodoCtrl($scope) {\n    $scope.items1 = [{\n      content: \'Move me, and make copy on drop.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    $scope.dragularOptions = {\n      containersModel: $scope.items1,\n      classes: {\n        mirror: \'custom-green-mirror\'\n      },\n      nameSpace: \'common\' // just connecting left and right container\n    };\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n &lt;div class=\'wrapper\' ng-controller=&quot;DirectiveModel&quot;&gt;\n  &lt;div class=\'containerVertical\' dragular=&quot;dragularOptions&quot;&gt;\n    &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=\'containerVertical\' dragular=\'{&quot;containersModel&quot;:&quot;items2&quot;,&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;common&quot;}\'&gt;\n    &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleDragOverClasses/exampleDragOverClasses.html","<div class=\'parent\'>\n  <h2>DragOverClasses</h2>\n  <label for=\'hy\'>You can interact with dragging element by setting dragOverClasses:true in options and adding pointer class (default is: \'gu-over-active\') to element you want to be interactive (getting classes). Usually you want to containers show wheather they accepts element or not, but you can use it anywhere. Try to drag over the not-container too.</label>\n  <div class=\'wrapper\' ng-controller=\"DragOverClasses\">\n    <div class=\'containerVertical width25 gu-over-active\'>\n      <div>apples and oranges cannot be mixed</div>\n      <div>apple 2</div>\n      <div>apple 3</div>\n      <div>apple 4</div>\n    </div>\n    <div class=\'containerVertical width25 gu-over-active\'>\n      <div>orange 1</div>\n      <div>orange 2</div>\n      <div>orange 3</div>\n      <div>orange 4</div>\n    </div>\n    <div class=\'containerVertical width25 gu-over-active\'>\n      <div>apple 5</div>\n      <div>apple 6</div>\n      <div>apple 7</div>\n      <div>apple 8</div>\n    </div>\n    <div class=\'containerVertical width25 gu-over-active\'>\n      <div>orange 5</div>\n      <div>orange 6</div>\n      <div>orange 7</div>\n      <div>orange 8</div>\n    </div>\n  </div>\n  <div class=\"notContainer gu-over-active\"> Test active class on NOT container.</div>\n\n  <pre>\n    <code>\n&lt;!-- HTML --&gt;\n  &lt;div class=\'wrapper\' ng-controller=&quot;DragOverClasses&quot;&gt;\n    &lt;div class=\'container width25 gu-over-active\'&gt;\n      &lt;div&gt;apples and oranges cannot be mixed&lt;/div&gt;\n      &lt;div&gt;apple 2&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n    &lt;div class=\'container width25 gu-over-active\'&gt;\n      &lt;div&gt;orange 1&lt;/div&gt;\n      &lt;div&gt;orange 2&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n    &lt;div class=\'container width25 gu-over-active\'&gt;\n      &lt;div&gt;apple 5&lt;/div&gt;\n      &lt;div&gt;apple 6&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n    &lt;div class=\'container width25 gu-over-active\'&gt;\n      &lt;div&gt;orange 5&lt;/div&gt;\n      &lt;div&gt;orange 6&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=&quot;notContainer&quot;&gt; Test active class on NOT container.&lt;/div&gt;\n    </code>\n  </pre>\n\n  <pre>\n    <code>\n  // CSS\n.container.gu-over-active.gu-over-accept {\n  background-color: green;\n}\n\n.container.gu-over-active.gu-over-decline {\n  background-color: red;\n}\n\n.notContainer {\n  width: 100%;\n  padding: 2em;\n}\n\n.notContainer.gu-over-active.gu-over-decline {\n  background-color: yellow;\n}\n    </code>\n  </pre>\n\n  <pre>\n    <code>\n  // JS\n  dragularService([$element.children()[0], $element.children()[2]], {\n    nameSpace: \'apples\',\n    dragOverClasses: true\n  });\n  dragularService([$element.children()[1], $element.children()[3]], {\n    nameSpace: \'oranges\',\n    dragOverClasses: true\n  });\n    </code>\n  </pre>\n</div>\n");
$templateCache.put("exampleEvents/exampleEvents.html","<div class=\'parent\'>\n    <h2>Events</h2>\n    <label for=\'hy\'>Add some fantastic events!</label>\n    <div class=\'wrapper\' ng-controller=\"Events\">\n        <div id=\'left3\' class=\'containerVertical\'>\n            <div>Move me, but you can only drop me in one of these containers.</div>\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n            <div>Item 3.</div>\n            <div>Item 6.</div>\n        </div>\n        <div id=\'right3\' class=\'containerVertical\'>\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n        </div>\n    </div>\n    <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], {\n    scope: $scope\n  });\n  $scope.$on(\'drag\', function(e, el) {\n    e.stopPropagation();\n    el.className = el.className.replace(\' ex-moved\', \'\');\n  });\n  $scope.$on(\'drop\', function(e, el) {\n    e.stopPropagation();\n    $timeout(function() {\n      el.className += \' ex-moved\';\n    }, 0);\n  });\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleHandle/exampleHandle.html","<div class=\'parent\'>\n    <h2>Handle</h2>\n    <label for=\'hy\'>Drag handles float your cruise?</label>\n    <div class=\'wrapper\' ng-controller=\"Handle\">\n        <div id=\'left5\' class=\'containerVertical\'>\n            <div><span class=\'handle\'>+</span>Move me, but you can use the plus sign to drag me around.</div>\n        </div>\n        <div id=\'right5\' class=\'containerVertical\'>\n        </div>\n    </div>\n    <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], {\n    moves: function (el, container, handle) {\n      return handle.className === \'handle\';\n    }\n  });\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleNameSpaces/exampleNameSpaces.html","        <div class=\'parent\'>\n            <h2>NameSpaces</h2>\n            <label for=\'hy\'>Try to mix apples and oranges. You cannot place apples into oranges, but notice that you can place it into mixed. Mixed can be placed into apples and oranges. Notice that mixed becomes orange or apple if placed into their container. <b>So remember if you are using namespacing, then item is namespaced according to actual container it is placed in. If you need to item preserve thier state you need to use classes in combination with options.accepts and optionally options.isContainer.</b> It depends on setup. (See <a href=\"https://github.com/luckylooke/dragular/issues/9\">issue #9</a>.)</label>\n            <div class=\'wrapper\' ng-controller=\"NameSpaces\">\n                <div class=\'containerVertical width25\'>\n                    <div>try to mix oranges and apples</div>\n                    <div>apple 2</div>\n                    <div>apple 3</div>\n                    <div>apple 4</div>\n                </div>\n                <div class=\'containerVertical width25\'>\n                    <div>orange 1</div>\n                    <div>orange 2</div>\n                    <div>orange 3</div>\n                    <div>orange 4</div>\n                </div>\n                <div class=\'containerVertical width25\'>\n                    <div>apple 5</div>\n                    <div>apple 6</div>\n                    <div>apple 7</div>\n                    <div>apple 8</div>\n                </div>\n                <div class=\'containerVertical width25\'>\n                    <div>mixed 1</div>\n                    <div>mixed 2</div>\n                    <div>mixed 3</div>\n                    <div>mixed 4</div>\n                </div>\n            </div>\n            <pre>\n      <code>\ndragularService([$element.children()[0], $element.children()[2]], {\n  nameSpace: \'apples\'\n});\ndragularService($element.children()[1], {\n  nameSpace: \'oranges\'\n});\ndragularService($element.children()[3], { // mixed\n  nameSpace: [\'oranges\', \'apples\']\n});\n      </code>\n    </pre>\n        </div>");
$templateCache.put("exampleNestedNgRepeat/exampleNestedNgRepeat.html","<div class=\'parent\'>\n    <h2>Nested ngRepeat</h2>\n    <label for=\'hy\'> You can move whole rows by grabing row title, all items it selves. Try it out!\n        <hr/>\n        <b>Old IE doesnt support Flexible Box Layout</b> so it can look weird. But in modern browsers it is awsome! Dragular will be working well also in old IE but you have to use different css for layout.\n        <hr/>\n    </label>\n    <div ng-controller=\"NestedNgRepeat\">\n        <div ng-repeat=\"item in items\" class=\'exampleRow\'>\n            <div class=\"row-handle\">Row {{$index}}</div>\n            <div ng-repeat=\"item in item.items\" class=\"exampleCell\">{{item.content}}</div>\n        </div>\n    </div>\n    <pre>\n        <code>\n  // HTML\n\n  &lt;div ng-controller=&quot;Example15&quot;&gt;\n    &lt;div ng-repeat=&quot;item in items&quot; class=\'exampleRow\'&gt;\n      &lt;div class=&quot;row-handle&quot;&gt;Row {{$index}}&lt;/div&gt;\n      &lt;div ng-repeat=&quot;item in item.items&quot; class=&quot;exampleCell&quot;&gt;{{item.content}}&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n    <pre>\n        <code>\n  // CSS\n\n  .exampleRow {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .exampleCell {\n    flex-grow: 1;\n  }\n\n  .exampleRow,\n  .exampleCell {\n    margin: 10px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: move;\n    cursor: grab;\n    cursor: -moz-grab;\n    cursor: -webkit-grab;\n  }\n        </code>\n      </pre>\n    <pre>\n        <code>\n  // JS\n\n  $timeout(function() { // timeount due to ngRepeat to be ready\n    dragularService($element, {\n      moves: function(el, container, handle) {\n        return handle.classList.contains(\'row-handle\');\n      }\n    });\n    dragularService($element.children(), {\n      moves: function(el, container, handle) {\n        return !handle.classList.contains(\'row-handle\');\n      }\n    });\n  }, 0);\n  $scope.items = [{\n    items: [{\n      content: \'Item a1\'\n    }, {\n      content: \'Item a2\'\n    }, {\n      content: \'Item a3\'\n    }, {\n      content: \'Item a4\'\n    }]\n  }, {\n    items: [{\n      content: \'Item b1\'\n    }, {\n      content: \'Item b2\'\n    }, {\n      content: \'Item b3\'\n    }, {\n      content: \'Item b4\'\n    }]\n  }, {\n    items: [{\n      content: \'Item c1\'\n    }, {\n      content: \'Item c2\'\n    }, {\n      content: \'Item c3\'\n    }, {\n      content: \'Item c4\'\n    }]\n  }];\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.html","<div class=\'parent\'>\n  <h2>Nested ngRepeat - with model</h2>\n  <label for=\'hy\'> You can move whole rows by grabing row title, all items it selves. Try it out!\n    <hr/>\n    <b>Old IE doesnt support Flexible Box Layout</b> so it can look weird. But in modern browsers it is awsome! Dragular will be working well also in old IE but you have to use different css for layout.\n    <hr/>\n  </label>\n  <div ng-controller=\"NestedNgRepeatWithModel\">\n    <div class=\'tableRow\'>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items\" class=\'exampleRow\'>\n          <div class=\"row-handle\">Row {{::$index}}</div>\n          <div class=\"exampleRow exampleCell containerNested\">\n            <div ng-repeat=\"item in item.items\" class=\"exampleCell\">{{item.content}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\'containerVertical\'>\n        <pre>\n            <div>Items:\n              <br/>{{items | json}}</div>\n        </pre>\n      </div>\n    </div>\n  </div>\n  <pre>\n    <code>\n&lt;!-- HTML --&gt;\n&lt;div ng-controller=&quot;NestedNgRepeatWithModel&quot;&gt;\n  &lt;div class=\'containerVertical\'&gt;\n    &lt;div ng-repeat=&quot;item in items&quot; class=\'exampleRow\'&gt;\n      &lt;div class=&quot;row-handle&quot;&gt;Row {{::$index}}&lt;/div&gt;\n      &lt;div class=&quot;exampleRow exampleCell containerNested&quot;&gt;\n        &lt;div ng-repeat=&quot;item in item.items&quot; class=&quot;exampleCell&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n    </code>\n  </pre>\n  <pre>\n    <code>\n  // CSS\n\n  .exampleRow {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .exampleCell {\n    flex-grow: 1;\n  }\n\n  .exampleRow,\n  .exampleCell {\n    margin: 10px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: move;\n    cursor: grab;\n    cursor: -moz-grab;\n    cursor: -webkit-grab;\n  }\n    </code>\n  </pre>\n  <pre>\n    <code>\n  // JS\ncontroller(\'NestedNgRepeatWithModel\', [\'$timeout\', \'$scope\', \'$element\', \'dragularService\', function TodoCtrl($timeout, $scope, $element, dragularService) {\n    $timeout(function() { // timeount due to nested ngRepeat to be ready\n      var container = $element.children().eq(0).children(),\n        parentContainers = container.children(),\n        nestedContainers = [];\n\n      dragularService(container, {\n        moves: function(el, container, handle) {\n          return handle.classList.contains(\'row-handle\');\n        },\n        containersModel: $scope.items\n      });\n\n      // collect nested contianers\n      for (var i = 0; i < parentContainers.length; i++) {\n        nestedContainers.push(parentContainers.eq(i).children()[1]);\n      };\n\n      dragularService(nestedContainers, {\n        moves: function(el, container, handle) {\n          return !handle.classList.contains(\'row-handle\');\n        },\n        containersModel: (function getNestedContainersModel(){\n          var parent = $scope.items,\n            containersModel = [];\n          for (var i = 0; i < parent.length; i++) {\n            containersModel.push(parent[i].items);\n          };\n          return containersModel;\n        })()\n      });\n    }, 0);\n    $scope.items = [{\n      items: [{\n        content: \'Item a1\'\n      }, {\n        content: \'Item a2\'\n      }, {\n        content: \'Item a3\'\n      }, {\n        content: \'Item a4\'\n      }]\n    }, {\n      items: [{\n        content: \'Item b1\'\n      }, {\n        content: \'Item b2\'\n      }, {\n        content: \'Item b3\'\n      }, {\n        content: \'Item b4\'\n      }]\n    }, {\n      items: [{\n        content: \'Item c1\'\n      }, {\n        content: \'Item c2\'\n      }, {\n        content: \'Item c3\'\n      }, {\n        content: \'Item c4\'\n      }]\n    }];\n  }])\n    </code>\n  </pre>\n</div>\n");
$templateCache.put("exampleNgRepeat/exampleNgRepeat.html","        <div class=\'parent\'>\n            <h2>ngRepeat</h2>\n            <label for=\'hy\'>Example of using ng-repeat with dragular and adding/removing items dynamicaly.</label>\n            <div class=\'wrapper\' ng-controller=\"NgRepeat\">\n                <div class=\'containerVertical\'>\n                    <div ng-repeat=\"item in items\">\n                        {{item.content}}\n                        <button class=\'cursorDefault\' ng-click=\"addItem()\">+</button>\n                        <button class=\'cursorDefault\' ng-click=\"removeItem()\">x</button>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  // HTML:\n  &lt;div class=\'containerVertical\'&gt;\n    &lt;div ng-repeat=&quot;item in items&quot;&gt;\n      {{item.content}}\n      &lt;button class=\'cursorDefault\' ng-click=&quot;addItem()&quot;&gt;+&lt;/button&gt;\n      &lt;button class=\'cursorDefault\' ng-click=&quot;removeItem()&quot;&gt;x&lt;/button&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n\n  // JS:\n  dragularService($element.children());\n  $scope.items = [{\n    content: \'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.\'\n  },{\n    content: \'Item 2\'\n  },{\n    content: \'Item 3\'\n  },{\n    content: \'Item 4\'\n  }];\n  $scope.addItem = function addItem () {\n    var index = $scope.items.indexOf(this.item) + 1;\n    $scope.items.splice(index, 0,{content: this.item.content + \'-copy\'});\n  }\n  $scope.removeItem = function removeItem () {\n    var index = $scope.items.indexOf(this.item);\n    $scope.items.splice(index, 1);\n  }\n        </code>\n      </pre>\n        </div>\n");
$templateCache.put("exampleNgRepeatWithModel/exampleNgRepeatWithModel.html","<div class=\'parent\'>\n  <h2>ngRepeat - with model</h2>\n  <label for=\'hy\'>Example of using ng-repeat with dragular and adding/removing items dynamicaly.</label>\n  <div class=\'wrapper\' ng-controller=\"NgRepeatWithModel\">\n    <div class=\'tableRow\'>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items\">\n          {{item.content}}\n          <button class=\'cursorDefault\' ng-click=\"addItem()\">+</button>\n          <button class=\'cursorDefault\' ng-click=\"removeItem()\">x</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\'containerVertical\'>\n        <div>Items:\n          <br/>{{items | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n    <code>\n  // HTML:\n   &lt;div class=\'wrapper\' ng-controller=&quot;NgRepeatWithModel&quot;&gt;\n      &lt;div class=\'containerVertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items&quot;&gt;\n          {{item.content}}\n          &lt;button class=\'cursorDefault\' ng-click=&quot;addItem()&quot;&gt;+&lt;/button&gt;\n          &lt;button class=\'cursorDefault\' ng-click=&quot;removeItem()&quot;&gt;x&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n    </code>\n  </pre>\n  <pre>\n    <code>\n  // JS:\n  controller(\'NgRepeatWithModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items = [{\n      content: \'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.\'\n    }, {\n      content: \'Item 2\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    dragularService($element.children().eq(0).children(), {containersModel: $scope.items});\n    $scope.addItem = function addItem() {\n      var index = $scope.items.indexOf(this.item) + 1;\n      $scope.items.splice(index, 0, {\n        content: this.item.content + \'-copy\'\n      });\n    };\n    $scope.removeItem = function removeItem() {\n      var index = $scope.items.indexOf(this.item);\n      $scope.items.splice(index, 1);\n    };\n  }])\n    </code>\n  </pre>\n</div>\n");
$templateCache.put("exampleRemoveOnSpill/exampleRemoveOnSpill.html","        <div class=\'parent\'>\n            <h2>Remove on spill</h2>\n            <label for=\'hy\'>Need to be able to quickly delete stuff when it spills out of the chosen containers?</label>\n            <div class=\'wrapper\' ng-controller=\"RemoveOnSpill\">\n                <div id=\'single1\' class=\'containerVertical\'>\n                    <div>Move me, but you can only drop me somewhere in this container.</div>\n                    <div>If you try to drop me somewhere other than here, I\'ll die a fiery death.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([document.getElementById(single)], { removeOnSpill: true });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleRevertOnSpill/exampleRevertOnSpill.html","        <div class=\'parent\'>\n            <h2>Revert on spill</h2>\n            <label for=\'hy\'>By default, dropping an element outside of any known containers will keep the element in the last place it hovered over. You can make elements go back home if they\'re dropped outside of known containers, too.</label>\n            <div class=\'wrapper\' ng-controller=\"RevertOnSpill\">\n                <div id=\'left4\' class=\'containerVertical\'>\n                    <div>Move me, but you can only drop me in one of these containers.</div>\n                    <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                </div>\n                <div id=\'right4\' class=\'containerVertical\'>\n                    <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], { revertOnSpill: true });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleScrollingDrag/exampleScrollingDrag.html","<div class=\'parent\'>\n  <h2>Scrolling drag</h2>\n  <label for=\'hy\'> Containers can be scrolled by hovering up/down bar near containers. Bars on right side are transparent and moved a bit over containers. It can be scrolled also by mouse wheel. <b>Problem is that touchable devices dont have wheels.</b>\n  </label>\n  <div ng-controller=\"ScrollingDrag\">\n    <div class=\"containerVertical scrollingDrag\">\n      <div class=\"scrollBar\" id=\"leftTopBar\">up</div>\n      <div id=\"leftScroll\" class=\"scrollingDragInner\">\n        <div>Item 1.</div>\n        <div>Item 2.</div>\n        <div>Item 3.</div>\n        <div>Item 4.</div>\n        <div>Item 5.</div>\n        <div>Item 6.</div>\n        <div>Item 7.</div>\n        <div>Item 9.</div>\n        <div>Item 10.</div>\n        <div>Item 11.</div>\n        <div>Item 12.</div>\n        <div>Item 13.</div>\n      </div>\n      <div class=\"scrollBar\" id=\"leftBottomBar\">down</div>\n    </div>\n    <div class=\"containerVertical scrollingDrag\">\n      <div class=\"scrollBar\" id=\"rightTopBar\"></div>\n      <div id=\"rightScroll\" class=\"scrollingDragInner\">\n        <div>Item 1.</div>\n        <div>Item 2.</div>\n        <div>Item 3.</div>\n        <div>Item 4.</div>\n        <div>Item 5.</div>\n        <div>Item 6.</div>\n        <div>Item 7.</div>\n        <div>Item 9.</div>\n        <div>Item 10.</div>\n        <div>Item 11.</div>\n        <div>Item 12.</div>\n        <div>Item 13.</div>\n      </div>\n      <div class=\"scrollBar\" id=\"rightBottomBar\"></div>\n    </div>\n  </div>\n   <pre>\n        <code>\n// JS\ncontroller(\'ScrollingDrag\', [\'$scope\', \'$interval\', \'$element\', \'dragularService\', function TodoCtrl($scope, $interval, $element, dragularService) {\n\n\n    var timer,\n      leftScroll = document.getElementById(\'leftScroll\'),\n      rightScroll = document.getElementById(\'rightScroll\'),\n      leftTopBar = document.getElementById(\'leftTopBar\'),\n      leftBottomBar = document.getElementById(\'leftBottomBar\'),\n      rightTopBar = document.getElementById(\'rightTopBar\'),\n      rightBottomBar = document.getElementById(\'rightBottomBar\');\n\n    dragularService([leftScroll, rightScroll], {\n      scope: $scope\n    });\n\n    registerEvents(leftTopBar, leftScroll, -5);\n    registerEvents(leftBottomBar, leftScroll, 5);\n    registerEvents(rightTopBar, rightScroll, -5);\n    registerEvents(rightBottomBar, rightScroll, 5);\n\n    function registerEvents(bar, container, inc, speed) {\n      if (!speed) {\n        speed = 20;\n      }\n      angular.element(bar).on(\'dragularenter\', function(e) {\n        container.scrollTop += inc;\n        timer = $interval(function moveScroll() {\n          console.log(\'tick\', bar, container, inc);\n          container.scrollTop += inc;\n        }, speed);\n      });\n      angular.element(bar).on(\'dragularleave\', function(e) {\n        $interval.cancel(timer);\n      });\n    }\n\n    // in case you release drag over bar\n    $scope.$on(\'release\', function stopScroll () {\n        $interval.cancel(timer);\n    })\n\n  }])\n        </code>\n      </pre>\n      <pre>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div ng-controller=&quot;ScrollingDrag&quot;&gt;\n    &lt;div class=&quot;containerVertical scrollingDrag&quot;&gt;\n      &lt;div class=&quot;scrollBar&quot; id=&quot;leftTopBar&quot;&gt;up&lt;/div&gt;\n      &lt;div id=&quot;leftScroll&quot; class=&quot;scrollingDragInner&quot;&gt;\n        &lt;div&gt;Item 1&lt;/div&gt;\n        &lt;div&gt;Item 2&lt;/div&gt;\n            ...\n      &lt;/div&gt;\n      &lt;div class=&quot;scrollBar&quot; id=&quot;leftBottomBar&quot;&gt;down&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;containerVertical scrollingDrag&quot;&gt;\n      &lt;div class=&quot;scrollBar&quot; id=&quot;rightTopBar&quot;&gt;up&lt;/div&gt;\n      &lt;div id=&quot;rightScroll&quot; class=&quot;scrollingDragInner&quot;&gt;\n        &lt;div&gt;Item 1&lt;/div&gt;\n        &lt;div&gt;Item 2&lt;/div&gt;\n            ...\n      &lt;/div&gt;\n      &lt;div class=&quot;scrollBar&quot; id=&quot;rightBottomBar&quot;&gt;down&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n       <pre>\n        <code>\n// CSS\n.scrollingDrag {\n  width: 45%;\n  display: inline-block;\n}\n\n.scrollingDragInner {\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n#rightTopBar,\n#rightBottomBar {\n  background: transparent;\n  position: relative;\n  height: 20px;\n}\n\n#rightTopBar {\n  top: 10px;\n}\n\n#rightBottomBar {\n  bottom: 10px;\n}\n\ndiv.scrollBar {\n  background: yellow;\n  text-align: center;\n  padding: 1px;\n}\n\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("partials/partial-contribute.html","<div class=\'container\'>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <ng-include src=\"\'partials/autogenerated/contribute.html\'\"> </ng-include>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("partials/partial-docs.html","<div class=\'container\'>\n  <div id=\"rowOffcanvas\" class=\"row row-offcanvas row-offcanvas-left\">\n    <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\n      <div class=\"list-group\">\n        <a ui-sref=\"docs.detail({link:\'docsInstall\'})\" ui-sref-active=\"active\" class=\"list-group-item\">Installation</a>\n        <a ng-repeat=\"example in examplesList\" ui-sref=\"docs.detail({link:example.link})\" ui-sref-active=\"active\" class=\"list-group-item\">{{example.title}}</a>\n      </div>\n    </div>\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-xs-12 col-sm-9\">\n      <p class=\"pull-left visible-xs\">\n        <button type=\"button\" ng-click=\"toggleSidebar()\" class=\"btn btn-primary btn-xs\">Toggle nav</button>\n      </p>\n      <!-- docs.detail -->\n      <div ui-view onload=\"highlightCode()\"></div>\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");
$templateCache.put("partials/partial-home.html","<div class=\'container\'>\n  <div class=\"row\">\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-lg-12\">\n      <div class=\"jumbotron\">\n        <h1>DRAGULAR</h1>\n        <p>Angular drag&drop based on <a href=\"http://github.com/bevacqua/dragula\">dragula</a>.</p>\n        <p><a class=\"btn btn-primary btn-lg\" ui-sref=\"docs\" role=\"button\">Live examples in docs</a></p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p>Browser support includes every sane browser and **IE7+**. <sub>_(Granted you polyfill the functional `Array` methods in ES5)_</sub></p>\n          <h2>Inspiration</h2>\n          <p>Have you ever wanted a drag and drop library that just works? That actually understands where to place the elements when they are dropped? That doesn’t need you to do a zillion things to get it to work? Well, so did <a href=\"https://github.com/bevacqua\">Nicolas Bevacqua</a> and I have forked it into angular module and also put some features!</p>\n          <p><b>Actual version 2.1.0 is based on dragula 2.1.2 and tested with angular 1.4.3.</b></p>\n          <h2>Differences of dragular (against dragula)</h2>\n          <ul>\n            <li>replaced crossvent with angulars event binding</li>\n            <li>replaced contra.emitter with $scope.$emit if scope provided in options (options.scope)</li>\n            <li>encapsulated the code into angular factory (dragularService)</li>\n            <li>created directive dragular where options can be passed providing scope property name</li>\n            <li>both service and directive provided as angular module (dragularModule)</li>\n            <li>automatic direction if not provided in options, instead of default vertical</li>\n            <li>accepting arraylike objects as containers array</li>\n            <li>accepting custom classes via option.classes</li>\n            <li>namespaced containers groups available via option.nameSpace</li>\n            <li>boundingBox (dragging element can me moved only in specific area)</li>\n            <li>lockX/Y (dragging element can me moved only in specific direction)</li>\n            <li>more examples</li>\n            <li>accept JSON options in dragular directive (#2)</li>\n            <li>add/remove with ng-repeat</li>\n            <li>added syntax highlighter to example codes</li>\n          </ul>\n          <h2>Todo</h2>\n          <ul>\n            <li>example for delay</li>\n            <li>o.isContainer in _isContainer (fn o.isContainerGetModel(containerElm))</li>\n            <li>solve mixing with and without model containers</li>\n            <li>remove npm workflow</li>\n            <li>support selectors in service (#2)?</li>\n          </ul>\n          <h2>Features</h2>\n          <ul>\n            <li>provided as service and also as directive</li>\n            <li>Super easy to set up</li>\n            <li>No bloated dependencies</li>\n            <li><strong>Figures out sort order</strong> on its own</li>\n            <li>A shadow where the item would be dropped offers <strong>visual feedback</strong></li>\n            <li>Touch events!</li>\n          </ul>\n          <h2>For installation, usage and examples go to <a ui-sref=\"docs\">docs</a></h2>\n        </div>\n      </div>\n      <!--/row-->\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");
$templateCache.put("partials/autogenerated/contribute.html","<h1 id=\"how-to-contribute\">How to contribute</h1>\n<p>It&#39;s important to us that you feel you can contribute towards the evolution of Dragular. This can take many forms: from helping to fix bugs or improve the docs, to adding in new features to the source. This guide should help you in making that process as smooth as possible.</p>\n<p>Before contributing, please read the <a href=\"https://github.com/luckylooke/dragular/blob/master/CODE_OF_CONDUCT.md\">code of conduct</a>.</p>\n<h2 id=\"reporting-issues\">Reporting issues</h2>\n<p><a href=\"https://github.com/luckylooke/dragular/issues\">GitHub Issues</a> is the place to report bugs you may have found in either the core library or any of the examples that are part of the repository. When submitting a bug please do the following:</p>\n<p><strong>1. Search for existing issues.</strong> Your bug may have already been fixed or addressed in a development branch version of Dragular, so be sure to search the issues first before putting in a duplicate issue.</p>\n<p><strong>2. Not sure if it&#39;s a bug?.</strong> Then please ask via issues and tag it [question].</p>\n<p><strong>3. Create an isolated and reproducible test case.</strong> If you are reporting a bug, make sure you also have a minimal, runnable, code example that reproduces the problem you have.</p>\n<p><strong>4. Include a live example.</strong> After narrowing your code down to only the problem areas, make use of <a href=\"http://jsfiddle.net\">jsFiddle</a>, <a href=\"http://jsbin.com/\">jsBin</a>, or a link to your live site so that we can view a live example of the problem.</p>\n<p><strong>5. Share as much information as possible.</strong> Include browser version affected, your OS, version of the library, steps to reproduce, etc. &quot;X isn&#39;t working!!!1!&quot; will probably just be closed.</p>\n<h2 id=\"dev-vs-master\">Dev vs. Master</h2>\n<p>The dev branch of Dragular is our &#39;current working&#39; version. It is always ahead of the master branch in terms of features and fixes. However it&#39;s also bleeding-edge and experimental and we cannot and do not guarantee it will compile or work for you. Very often we have to break things for a few days while we rebuild and patch. So by all means please export the dev branch and contribute towards it, indeed that is where all Pull Requests should be sent, but do so understanding the API may change beneath you.</p>\n<h2 id=\"making-changes\">Making Changes</h2>\n<p>To take advantage of our npm build script and jshint config it will be easiest for you if you have node.js installed locally.</p>\n<p>You can download node.js from <a href=\"http://nodejs.org\">nodejs.org</a>.</p>\n<p>After that you can clone the repository and run <code>npm i</code> inside the cloned folder. This will install dependencies necessary for building the project. For development workflow automation dragular uses <code>gulp &gt;= 3.9.0</code>. Before starting development, make sure that <code>gulp</code> is installed on your machine globally: <code>npm i -g gulp</code>.</p>\n<h3 id=\"developing\">Developing</h3>\n<p>There are several gulp tasks that are used for generating different builds:</p>\n<ul>\n<li><code>gulp dev</code> - Serves files with BrowserSync server, watches &amp; automatically refreshes connected browsers on changes, generates non-minified but concatenated styles &amp; scripts from the dragular source.</li>\n<li><code>gulp dev:docs</code> - Does exactly the same as <code>gulp dev</code>, except it works with the documentation source.</li>\n<li><code>gulp build</code> - Concatenates and minifies dragular source files.</li>\n<li><code>gulp build:docs</code> - Concatenates and minifies documentation source files.</li>\n</ul>\n<h3 id=\"linting\">Linting</h3>\n<ul>\n<li><code>gulp lint</code> &amp; <code>gulp lint:docs</code> - Lint JavaScript files.</li>\n</ul>\n<h3 id=\"making-a-pull-request\">Making a pull request</h3>\n<p>Once that is ready, make your changes and submit a Pull Request:</p>\n<ul>\n<li><p><strong>Send Pull Requests to the <code>dev</code> branch.</strong> All Pull Requests must be sent to the <code>dev</code> branch, <code>master</code> is the latest release and PRs to that branch will be closed.</p>\n</li>\n<li><p><strong>Ensure changes are jshint validated.</strong> Our JSHint configuration file is provided in the repository and you should check against it before submitting.</p>\n</li>\n<li><p><strong>Only commit relevant changes.</strong> Don&#39;t include changes that are not directly relevant to the fix you are making. The more focused a PR is, the faster it will get attention and be merged. Extra files changing only whitespace or trash files will likely get your PR closed.</p>\n</li>\n</ul>\n<p>Dependencies for building from source and running tests:</p>\n<h2 id=\"coding-style-preferences-are-not-contributions\">Coding style preferences are not contributions</h2>\n<p>If your PR is doing little more than changing the Dragular source code into a format / coding style that you prefer then we will automatically close it. All PRs must adhere to the coding style already set-out across the lines of code in Dragular. Your personal preferences for how things should &quot;look&quot; or be structured do not apply here, sorry. PRs should fix bugs, fix documentation or add features. No changes for the sake of change.</p>\n<h2 id=\"i-don-t-really-like-git-node-js-but-i-can-fix-this-bug\">I don&#39;t really like git / node.js, but I can fix this bug</h2>\n<p>That is fine too. While Pull Requests are the best thing in the world for us, they are not the only way to help. You&#39;re welcome to post fixes to our forum or even just email them to us. All we ask is that you still adhere to the guidelines presented here re: JSHint, etc.</p>\n");}]);

},{}],25:[function(require,module,exports){
'use strict';

/**
 * dragular Directive by Luckylooke https://github.com/luckylooke/dragular
 * Angular version of dragula https://github.com/bevacqua/dragula
 */
 var dragularModule = require('./dragularModule');

/**
* @ngInject
*/

dragularModule.directive('dragular', ['dragularService', function(dragularService) {
  return {
    restrict: 'A',
    link: function($scope, iElm, iAttrs) {

      var options = $scope[iAttrs.dragular] || tryJson(iAttrs.dragular);

      function tryJson(json) {
        try { // I dont like try catch solutions but I havent find sattisfying way of chcecking json validity.
          return JSON.parse(json);
        } catch (e) {
          return undefined;
        }
      }

      if(options && options.containersModel && typeof options.containersModel === 'string'){
        options.containersModel = $scope.$eval(options.containersModel);
      }

      dragularService(iElm[0], options);
    }
  };
}]);

},{"./dragularModule":26}],26:[function(require,module,exports){
/* global angular */
'use strict';



module.exports = angular.module('dragularModule', []);

({"dragularDirective":require("./dragularDirective.js"),"dragularService":require("./dragularService.js")});

},{"./dragularDirective.js":25,"./dragularService.js":27}],27:[function(require,module,exports){
/* global angular */
'use strict';

/**
 * dragular Module and Service by Luckylooke https://github.com/luckylooke/dragular
 * Angular version of dragula https://github.com/bevacqua/dragula
 */

var dragularModule = require('./dragularModule');

/**
 * @ngInject
 */

dragularModule.factory('dragularService', ['$rootScope', '$timeout', function dragula($rootScope, $timeout) {

  var containersNameSpaced = {}, // name-spaced containers
    containersNameSpacedModel = {}, // name-spaced containers models
    _cache = {}, // classes lookup cache
    _mirror; // mirror image

  return function(initialContainers, options) {

    if (arguments.length === 1 && !Array.isArray(initialContainers) && !angular.isElement(initialContainers) && !initialContainers[0]) {
      // then containers are not provided, only options
      options = initialContainers;
      initialContainers = [];
    }

    var body = document.body,
      documentElement = document.documentElement,
      _source, // source container
      _item, // item being dragged
      _sourceModel, // source container model
      _itemModel, // item-model being dragged
      _targetModel, // target container model
      _lastTargetModel, // last target container model
      _lastDropTarget = null, // last container item was over
      _offsetX, // reference x
      _offsetY, // reference y
      _offsetXr, // reference x right for boundingBox feature
      _offsetYb, // reference y bottom for boundingBox feature
      _clientX, // cache client x, init at grab, update at drag
      _clientY, // cache client y, init at grab, update at drag
      _mirrorWidth, // mirror width for boundingBox feature
      _mirrorHeight, // mirror height for boundingBox feature
      _initialSibling, // reference sibling when grabbed
      _currentSibling, // reference sibling now
      _initialIndex, // reference model index when grabbed
      _currentIndex, // reference model index now
      _lastOverElem, // last element behind the cursor (dragOverClasses feature)
      _lastOverClass, // last overClass used (dragOverClasses feature)
      _copy, // item used for copying
      _copyModel, // item-model used for copying
      _containers = {}, // containers managed by the drake
      _containersModel = {}, // containers model
      _renderTimer, // timer for setTimeout renderMirrorImage
      _isContainer, // internal isContainer
      _targetContainer, // droppable container under drag item
      _dragEnterEvent, // drag enter event fired on element behind cursor
      _dragLeaveEvent, // drag leave event fired on element behind cursor
      _lastElementBehindCursor, // last element behind cursor
      defaultClasses = {
        mirror: 'gu-mirror',
        hide: 'gu-hide',
        unselectable: 'gu-unselectable',
        transit: 'gu-transit',
        overActive: 'gu-over-active',
        overAccepts: 'gu-over-accept',
        overDeclines: 'gu-over-decline'
      },
      o = { // options
        classes: defaultClasses,
        containers: false,
        moves: always,
        accepts: always,
        isContainer: never,
        copy: false,
        delay: false,
        invalid: invalidTarget,
        revertOnSpill: false,
        removeOnSpill: false,
        dragOverClasses: false,
        lockX: false,
        lockY: false,
        boundingBox: false,
        containersModel: false
      };

    if (!isElement(o.boundingBox)) {
      o.boundingBox = null;
    }

    if (options && options.classes) {
      angular.extend(defaultClasses, options.classes);
      angular.extend(options.classes, defaultClasses);
    }

    angular.extend(o, options);

    if (o.delay === true) {
      o.delay = 300;
    }

    if (o.mirrorContainer === void 0) {
      o.mirrorContainer = document.body;
    }

    // get initial containers from options, argument or fall back to empty array (containers can be added later)
    initialContainers = o.containers || (initialContainers ? makeArray(initialContainers) : []);
    if (o.containers) {
      // make array from o.containers
      initialContainers = makeArray(initialContainers);
    }
    if (o.containersModel) {
      o.containersModel = Array.isArray(o.containersModel[0]) ? o.containersModel : [o.containersModel];
    }

    function proceedNameSpaces(_containers, containersNameSpaced, nameSpace, initialContainers) {
      if (!containersNameSpaced[nameSpace]) {
        containersNameSpaced[nameSpace] = [];
      }
      Array.prototype.push.apply(containersNameSpaced[nameSpace], initialContainers);
      _containers[nameSpace] = containersNameSpaced[nameSpace];
    }

    // feed namespaced containers groups and optionaly shadow it by models
    if (o.nameSpace) {
      if (!Array.isArray(o.nameSpace)) {
        o.nameSpace = [o.nameSpace];
      }
      o.nameSpace.forEach(function eachNameSpace(nameSpace) {
        proceedNameSpaces(_containers, containersNameSpaced, nameSpace, initialContainers);
        if (o.containersModel) {
          proceedNameSpaces(_containersModel, containersNameSpacedModel, nameSpace, o.containersModel);
        }
      });
      _isContainer = isContainerNameSpaced;
    } else {
      // default (not using nameSpaces)
      _containers = initialContainers;
      _isContainer = isContainer;
      if (o.containersModel) {
        _containersModel = o.containersModel;
      }
    }

    //register events
    events();

    if (document.createEvent) {
      _dragEnterEvent = document.createEvent('HTMLEvents');
      _dragEnterEvent.initEvent('dragularenter', true, true);
      _dragLeaveEvent = document.createEvent('HTMLEvents');
      _dragLeaveEvent.initEvent('dragularleave', true, true);
    } else {
      _dragEnterEvent = document.createEventObject();
      _dragEnterEvent.eventType = 'dragularenter';
      _dragLeaveEvent = document.createEventObject();
      _dragLeaveEvent.eventType = 'dragularleave';
    }

    var drake = {
      addContainer: manipulateContainers('add'),
      removeContainer: manipulateContainers('remove'),
      containers: _containers,
      start: start,
      end: end,
      cancel: cancel,
      remove: remove,
      destroy: destroy,
      dragging: false
    };

    return drake;

    // make array from array-like objects or from single element
    function makeArray(all) {
      if (Array.isArray(all)) {
        return all;
      }
      if (all.length) { // is array-like
        var iAll = all.length,
          newArray = [];
        while (iAll) {
          iAll--;
          newArray.push(all[iAll]);
        }
        return newArray;
      } else { // is one element
        return [all];
      }
    }

    // add or remove containers - deprecated
    function manipulateContainers(op) {
      return function addOrRemove(all) {
        var changes = Array.isArray(all) ? all : makeArray(all);
        changes.forEach(function forEachContainer(container) {
          if (o.nameSpace) {
            angular.forEach(o.nameSpace, function addRemoveNamespaced(containers, nameSpace) {
              if (op === 'add') {
                _containers[nameSpace].push(container);
                console.warn && console.warn('drake.addContainer is deprecated. please access drake.containers directly, instead');
              } else {
                _containers[nameSpace].splice(_containers.indexOf(container), 1);
                console.warn && console.warn('drake.removeContainer is deprecated. please access drake.containers directly, instead');
              }
            });
          } else {
            if (op === 'add') {
              _containers.push(container);
              console.warn && console.warn('drake.addContainer is deprecated. please access drake.containers directly, instead');
            } else {
              _containers.splice(_containers.indexOf(container), 1);
              console.warn && console.warn('drake.removeContainer is deprecated. please access drake.containers directly, instead');
            }
          }
        });
      };
    }

    function isContainer(el) {
      return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
    }

    function isContainerNameSpaced(el) {
      var nameSpace;
      for (nameSpace in drake.containers) {
        if (drake.containers.hasOwnProperty(nameSpace) && drake.containers[nameSpace].indexOf(el) !== -1) {
          return true;
        }
      }
      return false;
    }

    function events(rem) {
      var op = rem ? 'off' : 'on';
      regEvent(documentElement, op, 'mouseup', release);

      initialContainers.forEach(function addMouseDown(container) {
        regEvent(container, 'on', 'mousedown', grab);
      });
    }

    function destroy() {
      events(true);
      drake.removeContainer(_containers);
      release({});
    }

    function grab(e) {
      e = e || window.event;
      var item = e.target;

      // filter some odd situations
      if ((e.which !== 0 && e.which !== 1) || e.metaKey || e.ctrlKey) {
        return; // we only care about honest-to-god left clicks and touch events
      }

      // check if drag can start
      if (start(item) !== true) {
        return;
      }

      // automaticly detect direction of elements if not set in options
      if (!o.direction) {
        var parent = item.parentElement,
          parentHeight = parent.offsetHeight,
          parentWidth = parent.offsetWidth,
          childHeight = item.clientHeight,
          childWidth = item.clientWidth;
        o.direction = parentHeight / childHeight < parentWidth / childWidth ? 'horizontal' : 'vertical';
      }

      // get initial coordinates, used to render _mirror for first time
      var offset = getOffset(_item);
      _offsetX = getCoord('pageX', e) - offset.left;
      _offsetY = getCoord('pageY', e) - offset.top;
      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);

      // limiting area of _mirror movement, get initial coordinates
      if (o.boundingBox) {
        _offsetXr = getCoord('pageX', e) - offset.right;
        _offsetYb = getCoord('pageY', e) - offset.bottom;
      }

      // delayed rendering
      if (typeof o.delay === 'number') {
        _renderTimer = $timeout(function() {
          renderMirrorAndDrag(e);
        }, o.delay);
      } else {
        renderMirrorAndDrag(e);
      }

      e.preventDefault();
    }

    function renderMirrorAndDrag(e) {
      addClass(_copy || _item, o.classes.transit);
      renderMirrorImage();
      // initial position
      _mirror.style.left = _clientX - _offsetX + 'px';
      _mirror.style.top = _clientY - _offsetY + 'px';

      drag(e);
    }


    function start(item) {
      var handle = item;

      if (drake.dragging && _mirror) {
        return; // already dragging
      }

      if (_isContainer(item)) {
        return; // don't drag container itself
      }

      while (item.parentElement && !_isContainer(item.parentElement)) {
        // break loop if user tries to drag item which is considered invalid handle
        if (o.invalid(item, handle)) {
          return;
        }
        item = item.parentElement; // drag target should be immediate child of container
        if (!item) {
          return;
        }
      }

      var container = item.parentElement;
      if (!container) {
        return;
      }
      if (!container || o.invalid(item, handle) || !o.moves(item, container, handle, _itemModel, _sourceModel)) { // is movable
        return;
      }

      end();

      // prepare models operations
      if (o.containersModel) {
        var containerIndex = initialContainers.indexOf(container),
          itemIndex = domIndexOf(item, container);

        _initialIndex = _currentIndex = itemIndex;
        _sourceModel = o.containersModel[containerIndex];
        _targetModel = _sourceModel;
        _itemModel = _sourceModel[itemIndex];
        if (o.copy) {
          _copyModel = angular.copy(_itemModel);
        }
      }

      if (o.copy) {
        _copy = item.cloneNode(true);
        if (o.scope) {
          o.scope.$emit('cloned', _copy, item, _copyModel, _itemModel);
        }
      }

      _source = container;
      _item = item;
      _initialSibling = _currentSibling = nextEl(item);

      drake.dragging = true;
      if (o.scope) {
        o.scope.$emit('drag', _item, _source);
      }

      return true;
    }

    function invalidTarget(el) {
      return el.tagName === 'A' || el.tagName === 'BUTTON';
    }

    function end() {
      if (!drake.dragging) {
        return;
      }
      console.log('!!!!! I havent seen this message in any case');
      var item = _copy || _item;
      drop(item, item.parentElement);
    }

    function release(e) {
      if (!drake.dragging) {
        return;
      }
      e = e || window.event;

      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);

      var item = _copy || _item,
        elementBehindCursor = getElementBehindPoint(_mirror, _clientX, _clientY),
        dropTarget = findDropTarget(elementBehindCursor, _clientX, _clientY);

      if (dropTarget && (o.copy === false || dropTarget !== _source)) {
        // found valid target and (is not copy case or target is not initial container)
        drop(item, dropTarget);
      } else if (o.removeOnSpill) {
        remove();
      } else {
        cancel();
      }

      // after release there is no container hovered
      _targetContainer = null;

      // remove classes if used
      if (o.dragOverClasses && _lastOverElem) {
        rmClass(_lastOverElem, _lastOverClass);
        _lastOverElem = null;
      }

      if (o.scope) {
        o.scope.$emit('release', item, _source);
      }
    }

    function drop(item, target) {
      if (o.scope && isInitialPlacement(target)) {
        o.scope.$emit('cancel', item, _source, _copyModel || _itemModel, _sourceModel, _targetModel);
      } else if (o.scope) {
        o.scope.$emit('drop', item, target, _source, _copyModel || _itemModel, _sourceModel, _targetModel);
      }
      cleanup();
    }

    function remove() {
      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item,
        parent = item.parentElement,
        itemModel;

      if (!o.containersModel) {
        if (parent) {
          parent.removeChild(item);
        }
      } else {
        itemModel = _copyModel || _itemModel;
        _targetModel.splice(_targetModel.indexOf(itemModel), 1);
      }

      if (o.scope) {
        o.scope.$emit(o.copy ? 'cancel' : 'remove', item, parent, itemModel, _sourceModel, _targetModel);
      }
      cleanup();
    }

    function cancel(revert) {
      if (!drake.dragging) {
        return;
      }
      var reverts = arguments.length > 0 ? revert : o.revertOnSpill,
        item = _copy || _item,
        parent = item.parentElement;

      if (parent === _source && o.copy) {
        console.log('!!!!!!!!!!!!!!!!! I think this is never possible because copy cannot be placed into source');
        if (!o.containersModel) {
          parent.removeChild(_copy);
        } else {
          _targetModel.splice(_targetModel.indexOf(_copyModel), 1, _copyModel);
        }
      }

      var initial = isInitialPlacement(parent);
      if (initial === false && o.copy === false && reverts) {
        if (!o.containersModel) {
          _source.insertBefore(item, _initialSibling);
        } else {
          _lastTargetModel = _targetModel;
          _targetModel = _sourceModel;
          // move back to initial placement
          moveInContainersModel(_initialIndex);
        }
      }

      if (o.scope && (initial || reverts)) {
        o.scope.$emit('cancel', item, _source);
      } else if (o.scope) {
        o.scope.$emit('drop', item, parent, _source);
      }

      cleanup();
    }

    function cleanup() {
      var item = _copy || _item;
      removeMirrorImage();

      if (item) {
        rmClass(item, o.classes.transit);
      }

      // cancel timer
      if (_renderTimer) {
        $timeout.cancel(_renderTimer);
      }

      drake.dragging = false;

      if (o.scope) {
        o.scope.$emit('dragend', item);
        o.scope.$emit('out', item, _lastDropTarget, _source);
      }

      _source = _item = _copy = _initialSibling = _currentSibling = _sourceModel = null;
      _itemModel = _copyModel = _initialIndex = _currentIndex = _renderTimer = _lastDropTarget = null;
    }

    // is item currently placed in original container and original position?
    function isInitialPlacement(target, s) {
      var sibling = s || (_mirror ? _currentSibling : nextEl(_item || _copy));
      return target === _source && sibling === _initialSibling;
    }

    // find valid drop container
    function findDropTarget(elementBehindCursor, clientX, clientY) {
      var target = elementBehindCursor;

      while (target && !accepted()) {
        target = target.parentElement;
      }
      return target;

      function accepted() {
        var accepts = false;

        if (_isContainer(target)) { // is droppable?
          _targetContainer = target;

          var immediate = getImmediateChild(target, elementBehindCursor),
            reference = getReference(target, immediate, clientX, clientY),
            initial = isInitialPlacement(target, reference);
          accepts = initial ? true : o.accepts(_item, target, _source, reference, _itemModel, _sourceModel);

          if (accepts && o.containersModel) {
            _lastTargetModel = _targetModel;
            if (!o.nameSpace) {
              _targetModel = _containersModel[drake.containers.indexOf(target)];
            } else {
              for (var nameSpace in drake.containers) {
                if (drake.containers.hasOwnProperty(nameSpace) && drake.containers[nameSpace].indexOf(target) !== -1) {
                  _lastTargetModel = _targetModel;
                  _targetModel = _containersModel[nameSpace][drake.containers[nameSpace].indexOf(target)];
                  break;
                }
              }
            }
          }
        }

        // add class if element is enabled for it and it has not already the class
        if (o.dragOverClasses &&
          hasClass(target, o.classes.overActive) &&
          target !== _lastOverElem) {

          if (_lastOverElem) { // clear from previous
            rmClass(_lastOverElem, _lastOverClass);
          }

          _lastOverClass = accepts ? o.classes.overAccepts : o.classes.overDeclines;
          addClass(target, _lastOverClass);
          _lastOverElem = target;
        }

        return accepts;
      }
    }

    function drag(e) {
      if (!_mirror) {
        return;
      }
      e = e || window.event;

      // update coordinates
      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);

      // count mirror coordiates
      var x = _clientX - _offsetX,
        y = _clientY - _offsetY,
        pageX,
        pageY,
        offsetBox;

      // fill extra properties if boundingBox is used
      if (o.boundingBox) {
        pageX = getCoord('pageX', e);
        pageY = getCoord('pageY', e);
        offsetBox = getOffset(o.boundingBox);
      }

      if (!o.lockY) {
        if (!o.boundingBox || (pageX > offsetBox.left + _offsetX && pageX < offsetBox.right + _offsetXr)) {
          _mirror.style.left = x + 'px';
        } else if (o.boundingBox) { // check again in case user scrolled the view
          if (pageX < offsetBox.left + _offsetX) {
            _mirror.style.left = _clientX - (pageX - offsetBox.left) + 'px';
          } else {
            _mirror.style.left = _clientX - _mirrorWidth - (pageX - offsetBox.right) + 'px';
          }
        }
      }
      if (!o.lockX) {
        if (!o.boundingBox || (pageY > offsetBox.top + _offsetY && pageY < offsetBox.bottom + _offsetYb)) {
          _mirror.style.top = y + 'px';
        } else if (o.boundingBox) { // check again in case user scrolled the view
          if (pageY < offsetBox.top + _offsetY) {
            _mirror.style.top = _clientY - (pageY - offsetBox.top) + 'px';
          } else {
            _mirror.style.top = _clientY - _mirrorHeight - (pageY - offsetBox.bottom) + 'px';
          }
        }
      }

      var item = _copy || _item,
        elementBehindCursor = getElementBehindPoint(_mirror, _clientX, _clientY),
        dropTarget = findDropTarget(elementBehindCursor, _clientX, _clientY),
        changed = dropTarget !== null && dropTarget !== _lastDropTarget;

        if (elementBehindCursor !== _lastElementBehindCursor) {
          fireEvent(elementBehindCursor, _dragEnterEvent);
          if (_lastElementBehindCursor) {
            fireEvent(_lastElementBehindCursor, _dragLeaveEvent);
          }
          _lastElementBehindCursor = elementBehindCursor;
        }

      if (changed || dropTarget === null) {
        if (o.scope) {
          out();
          _lastDropTarget = dropTarget;
          over();
        } else {
          _lastDropTarget = dropTarget;
        }
      }

      // do not copy in same container
      if (dropTarget === _source && o.copy) {
        if (!o.containersModel && item.parentElement) {
          item.parentElement.removeChild(item);
        } else if (o.containersModel && _lastTargetModel.indexOf(_copyModel) !== -1) {
          _lastTargetModel.splice(_lastTargetModel.indexOf(_copyModel), 1);
          $rootScope.$applyAsync();
        }
        return;
      }

      var reference,
        immediate = getImmediateChild(dropTarget, elementBehindCursor),
        referenceIndex;

      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, _clientX, _clientY);
        if (o.containersModel) {
          if (reference) { // reference is null if drag is over last element
            referenceIndex = domIndexOf(reference, dropTarget);
          } else {
            referenceIndex = null;
          }
        }
      } else if (o.revertOnSpill === true && !o.copy) {
        // the case that mirror is not over valid target and reverting is on and copy is off
        reference = _initialSibling;
        dropTarget = _source;

        // getting model intitial properties into current
        if (o.containersModel) {
          referenceIndex = _initialIndex;
          _lastTargetModel = _targetModel;
          _targetModel = _sourceModel;
        }
      } else {
        // the case that mirror is not over valid target and removing is on or copy is on
        if ((o.copy || o.removeOnSpill === true) && item.parentElement !== null) {
          // remove item or copy of item
          if (!o.containersModel) {
            item.parentElement.removeChild(item);
          } else {
            _targetModel.splice(referenceIndex, 1);
            $rootScope.$applyAsync();
          }
        }
        return;
      }
      if (reference === null ||
        reference !== item &&
        reference !== nextEl(item) &&
        reference !== _currentSibling) {
        // moving item/copy to new container from previous one
        _currentSibling = reference;

        if (!o.containersModel) {
          dropTarget.insertBefore(item, reference); // if reference is null item is inserted at the end
        } else {
          moveInContainersModel(referenceIndex);
        }

        if (o.scope) {
          o.scope.$emit('shadow', item, dropTarget);
        }
      }

      function moved(type) {
        o.scope.$emit(type, item, _lastDropTarget, _source);
      }

      function over() {
        if (changed) {
          moved('over');
        }
      }

      function out() {
        if (_lastDropTarget) {
          moved('out');
        }
      }
    }

    function moveInContainersModel(referenceIndex) {
      if (_lastTargetModel === _targetModel) {
        if (referenceIndex === null) {
          referenceIndex = _targetModel.length;
        }
        var index = referenceIndex > _currentIndex ? referenceIndex - 1 : referenceIndex;
        _targetModel.splice(index, 0, _lastTargetModel.splice(_currentIndex, 1)[0]);
        _currentIndex = index;
      } else {
        if (referenceIndex === null) {
          referenceIndex = _targetModel.length - 1;
        }
        if (!o.copy || _lastTargetModel !== _sourceModel) { // dont remove original from source while copying
          _lastTargetModel.splice(_currentIndex, 1);
        }
        if (!o.copy || _targetModel.indexOf(_copyModel) === -1) { // dont place copy twice in one drag
          _targetModel.splice(referenceIndex, 0, _copyModel || _itemModel);
          _currentIndex = referenceIndex;
        }
      }
      $rootScope.$applyAsync();
    }

    function scrollContainer(e) {
      if (_targetContainer) {
        var before = _targetContainer.scrollTop;
        _targetContainer.scrollTop += e.deltaY;
        // block scroll of the document when container can be scrolled
        if (before !== _targetContainer.scrollTop) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
    }

    function renderMirrorImage() {
      if (_mirror) {
        return;
      }
      var rect = _item.getBoundingClientRect();
      _mirror = _item.cloneNode(true);
      _mirrorWidth = rect.width;
      _mirrorHeight = rect.height;
      _mirror.style.width = getRectWidth(rect) + 'px';
      _mirror.style.height = getRectHeight(rect) + 'px';
      rmClass(_mirror, o.classes.transit);
      addClass(_mirror, o.classes.mirror);
      o.mirrorContainer.appendChild(_mirror);
      regEvent(documentElement, 'on', 'mousemove', drag);
      addClass(body, o.classes.unselectable);
      regEvent(_mirror, 'on', 'wheel', scrollContainer);
      if (o.scope) {
        o.scope.$emit('cloned', _mirror, _item);
      }
    }

    function removeMirrorImage() {
      if (_mirror) {
        rmClass(body, o.classes.unselectable);
        regEvent(documentElement, 'off', 'mousemove', drag);
        regEvent(_mirror, 'off', 'wheel', scrollContainer);
        _mirror.parentElement.removeChild(_mirror);
        _mirror = null;
      }
    }

    function getImmediateChild(dropTarget, target) {
      var immediate = target;
      while (immediate !== dropTarget && immediate.parentElement !== dropTarget) {
        immediate = immediate.parentElement;
      }
      if (immediate === documentElement) {
        return null;
      }
      return immediate;
    }

    function getReference(dropTarget, target, x, y) {
      var horizontal = o.direction === 'horizontal';
      var reference = target !== dropTarget ? inside() : outside();
      return reference;

      function outside() { // slower, but able to figure out any position
        var len = dropTarget.children.length;
        var i;
        var el;
        var rect;
        for (i = 0; i < len; i++) {
          el = dropTarget.children[i];
          rect = el.getBoundingClientRect();
          if (horizontal && rect.left > x) {
            return el;
          }
          if (!horizontal && rect.top > y) {
            return el;
          }
        }
        return null;
      }

      function inside() { // faster, but only available if dropped inside a child element
        var rect = target.getBoundingClientRect();
        if (horizontal) {
          return resolve(x > rect.left + getRectWidth(rect) / 2);
        }
        return resolve(y > rect.top + getRectHeight(rect) / 2);
      }

      function resolve(after) {
        return after ? nextEl(target) : target;
      }
    }

    function getScroll(scrollProp, offsetProp) {
      if (typeof window[offsetProp] !== 'undefined') {
        return window[offsetProp];
      }
      if (documentElement.clientHeight) {
        return documentElement[scrollProp];
      }
      return body[scrollProp];
    }

    function getOffset(el) {
      var rect = el.getBoundingClientRect(),
        scrollTop = getScroll('scrollTop', 'pageYOffset'),
        scrollLeft = getScroll('scrollLeft', 'pageXOffset');
      return {
        left: rect.left + scrollLeft,
        right: rect.right + scrollLeft,
        top: rect.top + scrollTop,
        bottom: rect.bottom + scrollTop
      };
    }

    function getElementBehindPoint(point, x, y) {
      if (!x && !y) {
        return null;
      }
      var p = point || {},
        state = p.className,
        el;
      p.className += ' ' + o.classes.hide;
      el = document.elementFromPoint(x, y);
      p.className = state;
      return el;
    }
  };

  function regEvent(el, op, type, fn) {
    var touch = {
        mouseup: 'touchend',
        mousedown: 'touchstart',
        mousemove: 'touchmove'
      },
      $el = angular.element(el);

    if (type !== 'wheel') {
      $el[op](touch[type], fn);
    }
    $el[op](type, fn);
  }

  function never() {
    return false;
  }

  function always() {
    return true;
  }

  function nextEl(el) {
    return el.nextElementSibling || manually();

    function manually() {
      var sibling = el;
      do {
        sibling = sibling.nextSibling;
      } while (sibling && sibling.nodeType !== 1);
      return sibling;
    }
  }

  //Cannot use angular.isElement because we need to check plain dom element, no jQlite wrapped
  function isElement(o) {
    return (
      typeof HTMLElement === 'object' ? o instanceof HTMLElement : //DOM2
      o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
    );
  }

  function lookupClass(className) {
    var cached = _cache[className];
    if (cached) {
      cached.lastIndex = 0;
    } else {
      _cache[className] = cached = new RegExp('(?:^|\\s)' + className + '(?:\\s|$)', 'g');
    }
    return cached;
  }

  function addClass(el, className) {
    var current = el.className;
    if (!current.length) {
      el.className = className;
    } else if (!lookupClass(className).test(current)) {
      el.className += ' ' + className;
    }
  }

  function rmClass(el, className) {
    el.className = el.className.replace(lookupClass(className), ' ').trim();
  }

  function hasClass(el, className) {
    return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
  }

  function getEventHost(e) {
    // on touchend event, we have to use `e.changedTouches`
    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
    // see https://github.com/bevacqua/dragula/issues/34
    if (e.targetTouches && e.targetTouches.length) {
      return e.targetTouches[0];
    }
    if (e.changedTouches && e.changedTouches.length) {
      return e.changedTouches[0];
    }
    return e;
  }

  function getCoord(coord, e) {
    var host = getEventHost(e);
    var missMap = {
      pageX: 'clientX', // IE8
      pageY: 'clientY' // IE8
    };
    if (coord in missMap && !(coord in host) && missMap[coord] in host) {
      coord = missMap[coord];
    }
    return host[coord];
  }

  function getRectWidth(rect) {
    return rect.width || (rect.right - rect.left);
  }

  function getRectHeight(rect) {
    return rect.height || (rect.bottom - rect.top);
  }

  function domIndexOf(child, parent) {
    return Array.prototype.indexOf.call(angular.element(parent).children(), child);
  }

  function fireEvent(target, e) {
    if (target.dispatchEvent) {
      target.dispatchEvent(e);
    } else {
      target.fireEvent('on' + e.eventType, e);
    }
  }

}]);

},{"./dragularModule":26}]},{},[22])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qcyIsIi9ob21lL2FsZmVyb3Yvd3d3L2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5qcyIsIi9ob21lL2FsZmVyb3Yvd3d3L2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5qcyIsIi9ob21lL2FsZmVyb3Yvd3d3L2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0LmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5qcyIsIi9ob21lL2FsZmVyb3Yvd3d3L2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qcyIsIi9ob21lL2FsZmVyb3Yvd3d3L2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmpzIiwiL2hvbWUvYWxmZXJvdi93d3cvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZXNBcHAuanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlc1JvdXRlci5qcyIsIi9ob21lL2FsZmVyb3Yvd3d3L2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL3RlbXBsYXRlcy5qcyIsIi9ob21lL2FsZmVyb3Yvd3d3L2RyYWd1bGFyL3NyYy9kcmFndWxhckRpcmVjdGl2ZS5qcyIsIi9ob21lL2FsZmVyb3Yvd3d3L2RyYWd1bGFyL3NyYy9kcmFndWxhck1vZHVsZS5qcyIsIi9ob21lL2FsZmVyb3Yvd3d3L2RyYWd1bGFyL3NyYy9kcmFndWxhclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLFNBQVMsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDaEcsZ0JBQWdCLFNBQVM7TUFDdkI7OztBQ1hOOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsU0FBUyxDQUFDLFlBQVksbUJBQW1CLFNBQVMsU0FBUyxVQUFVLGlCQUFpQjtJQUNoRyxnQkFBZ0IsU0FBUzs7O0FBRzdCO0dBQ0csV0FBVyxjQUFjLENBQUMsVUFBVSxZQUFZLG1CQUFtQixTQUFTLFNBQVMsUUFBUSxVQUFVLGlCQUFpQjtJQUN2SCxPQUFPLFNBQVMsQ0FBQztNQUNmLFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7O0lBRVgsT0FBTyxTQUFTLENBQUM7TUFDZixTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLElBQUksYUFBYSxTQUFTLFdBQVcsR0FBRyxHQUFHO0lBQzNDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUk7TUFDNUMsaUJBQWlCLENBQUMsT0FBTyxRQUFRLE9BQU87OztBQUc5Qzs7QUN0Q0E7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7O0FBTWhDO0dBQ0csV0FBVyxlQUFlLENBQUMsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFVBQVUsaUJBQWlCO0lBQ3RHLElBQUksY0FBYyxTQUFTO0lBQzNCLGdCQUFnQixTQUFTLFlBQVk7TUFDbkMsYUFBYTs7O0FBR25COztBQ2ZBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsb0JBQW9CLENBQUMsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFVBQVUsaUJBQWlCO0lBQzNHLElBQUksY0FBYyxTQUFTLFdBQVcsV0FBVztJQUNqRCxnQkFBZ0IsYUFBYTtNQUMzQixhQUFhO01BQ2IsT0FBTzs7O0FBR2I7O0FDaEJBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsb0JBQW9CLENBQUMsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFVBQVUsaUJBQWlCO0lBQzNHLElBQUksY0FBYyxTQUFTLFdBQVcsV0FBVztJQUNqRCxnQkFBZ0IsYUFBYTtNQUMzQixhQUFhO01BQ2IsT0FBTzs7TUFFUDs7O0FDZk47O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7O0FBTWhDO0dBQ0csV0FBVyxRQUFRLENBQUMsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFVBQVUsaUJBQWlCO0lBQy9GLGdCQUFnQixTQUFTLFlBQVk7TUFDbkMsTUFBTTs7O0FBR1o7O0FDZEE7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7O0FBTWhDO0dBQ0csV0FBVyxhQUFhLENBQUMsVUFBVSxZQUFZLG1CQUFtQixTQUFTLFNBQVMsUUFBUSxVQUFVLGlCQUFpQjtJQUN0SCxPQUFPLFNBQVMsQ0FBQztNQUNmLFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7O0lBRVgsT0FBTyxTQUFTLENBQUM7TUFDZixTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLElBQUksYUFBYSxTQUFTLFdBQVcsR0FBRyxHQUFHO0lBQzNDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUk7TUFDNUMsaUJBQWlCLENBQUMsT0FBTyxRQUFRLE9BQU87TUFDeEMsTUFBTTs7O0FBR1o7O0FDbENBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsaUJBQWlCLENBQUMsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFVBQVUsaUJBQWlCO0lBQ3hHLGdCQUFnQixTQUFTLFlBQVk7TUFDbkMsU0FBUztRQUNQLFFBQVE7Ozs7QUFJaEI7O0FDaEJBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsYUFBYSxDQUFDLFVBQVUsU0FBUyxjQUFjLFFBQVE7SUFDakUsT0FBTyxrQkFBa0I7TUFDdkIsU0FBUztRQUNQLFFBQVE7O01BRVYsV0FBVzs7TUFFWDs7O0FDaEJOOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsa0JBQWtCLENBQUMsVUFBVSxTQUFTLFNBQVMsUUFBUTtJQUNqRSxPQUFPLFNBQVMsQ0FBQztNQUNmLFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7O0lBRVgsT0FBTyxTQUFTLENBQUM7TUFDZixTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLE9BQU8sa0JBQWtCO01BQ3ZCLGlCQUFpQixPQUFPO01BQ3hCLFNBQVM7UUFDUCxRQUFROztNQUVWLFdBQVc7OztBQUdqQjs7QUNwQ0E7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7O0FBTWhDO0VBQ0UsV0FBVyxtQkFBbUIsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDekcsZ0JBQWdCLENBQUMsU0FBUyxXQUFXLElBQUksU0FBUyxXQUFXLEtBQUs7TUFDaEUsV0FBVztNQUNYLGlCQUFpQjs7SUFFbkIsZ0JBQWdCLENBQUMsU0FBUyxXQUFXLElBQUksU0FBUyxXQUFXLEtBQUs7TUFDaEUsV0FBVztNQUNYLGlCQUFpQjs7O0FBR3ZCOztBQ25CQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLFVBQVUsQ0FBQyxVQUFVLFlBQVksbUJBQW1CLFlBQVksU0FBUyxTQUFTLFFBQVEsVUFBVSxpQkFBaUIsVUFBVTtJQUN6SSxnQkFBZ0IsU0FBUyxZQUFZO01BQ25DLE9BQU87O0lBRVQsT0FBTyxJQUFJLFFBQVEsU0FBUyxHQUFHLElBQUk7TUFDakMsRUFBRTtNQUNGLEdBQUcsWUFBWSxHQUFHLFVBQVUsUUFBUSxhQUFhOztJQUVuRCxPQUFPLElBQUksUUFBUSxTQUFTLEdBQUcsSUFBSTtNQUNqQyxFQUFFO01BQ0YsU0FBUyxXQUFXO1FBQ2xCLEdBQUcsYUFBYTtTQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJUOztBQ3hDQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLFVBQVUsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDakcsZ0JBQWdCLFNBQVMsWUFBWTtNQUNuQyxPQUFPLFNBQVMsSUFBSSxXQUFXLFFBQVE7UUFDckMsT0FBTyxPQUFPLGNBQWM7Ozs7QUFJcEM7O0FDaEJBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsY0FBYyxDQUFDLFlBQVksbUJBQW1CLFNBQVMsU0FBUyxVQUFVLGlCQUFpQjtJQUNyRyxnQkFBZ0IsQ0FBQyxTQUFTLFdBQVcsSUFBSSxTQUFTLFdBQVcsS0FBSztNQUNoRSxXQUFXOztJQUViLGdCQUFnQixTQUFTLFdBQVcsSUFBSTtNQUN0QyxXQUFXOztJQUViLGdCQUFnQixTQUFTLFdBQVcsSUFBSTtNQUN0QyxXQUFXLENBQUMsV0FBVzs7O0FBRzdCOztBQ3BCQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLGtCQUFrQixDQUFDLFlBQVksVUFBVSxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxRQUFRLFVBQVUsaUJBQWlCO0lBQ2pKLFNBQVMsV0FBVztNQUNsQixnQkFBZ0IsVUFBVTtRQUN4QixPQUFPLFNBQVMsSUFBSSxXQUFXLFFBQVE7VUFDckMsT0FBTyxPQUFPLFVBQVUsU0FBUzs7O01BR3JDLGdCQUFnQixTQUFTLFlBQVk7UUFDbkMsT0FBTyxTQUFTLElBQUksV0FBVyxRQUFRO1VBQ3JDLE9BQU8sQ0FBQyxPQUFPLFVBQVUsU0FBUzs7O09BR3JDO0lBQ0gsT0FBTyxRQUFRLENBQUM7TUFDZCxPQUFPLENBQUM7UUFDTixTQUFTO1NBQ1I7UUFDRCxTQUFTO1NBQ1I7UUFDRCxTQUFTO1NBQ1I7UUFDRCxTQUFTOztPQUVWO01BQ0QsT0FBTyxDQUFDO1FBQ04sU0FBUztTQUNSO1FBQ0QsU0FBUztTQUNSO1FBQ0QsU0FBUztTQUNSO1FBQ0QsU0FBUzs7T0FFVjtNQUNELE9BQU8sQ0FBQztRQUNOLFNBQVM7U0FDUjtRQUNELFNBQVM7U0FDUjtRQUNELFNBQVM7U0FDUjtRQUNELFNBQVM7Ozs7QUFJakI7O0FDdERBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsMkJBQTJCLENBQUMsWUFBWSxVQUFVLFlBQVksbUJBQW1CLFNBQVMsU0FBUyxVQUFVLFFBQVEsVUFBVSxpQkFBaUI7SUFDMUosU0FBUyxXQUFXO01BQ2xCLElBQUksWUFBWSxTQUFTLFdBQVcsR0FBRyxHQUFHO1FBQ3hDLG1CQUFtQixVQUFVO1FBQzdCLG1CQUFtQjs7TUFFckIsZ0JBQWdCLFdBQVc7UUFDekIsT0FBTyxTQUFTLElBQUksV0FBVyxRQUFRO1VBQ3JDLE9BQU8sT0FBTyxVQUFVLFNBQVM7O1FBRW5DLGlCQUFpQixPQUFPOzs7O01BSTFCLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxpQkFBaUIsUUFBUSxLQUFLO1FBQ2hELGlCQUFpQixLQUFLLGlCQUFpQixHQUFHLEdBQUcsV0FBVzs7O01BRzFELGdCQUFnQixrQkFBa0I7UUFDaEMsT0FBTyxTQUFTLElBQUksV0FBVyxRQUFRO1VBQ3JDLE9BQU8sQ0FBQyxPQUFPLFVBQVUsU0FBUzs7UUFFcEMsaUJBQWlCLENBQUMsU0FBUywwQkFBMEI7VUFDbkQsSUFBSSxTQUFTLE9BQU87WUFDbEIsa0JBQWtCO1VBQ3BCLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSztZQUN0QyxnQkFBZ0IsS0FBSyxPQUFPLEdBQUc7O1VBRWpDLE9BQU87OztPQUdWO0lBQ0gsT0FBTyxRQUFRLENBQUM7TUFDZCxPQUFPLENBQUM7UUFDTixTQUFTO1NBQ1I7UUFDRCxTQUFTO1NBQ1I7UUFDRCxTQUFTO1NBQ1I7UUFDRCxTQUFTOztPQUVWO01BQ0QsT0FBTyxDQUFDO1FBQ04sU0FBUztTQUNSO1FBQ0QsU0FBUztTQUNSO1FBQ0QsU0FBUztTQUNSO1FBQ0QsU0FBUzs7T0FFVjtNQUNELE9BQU8sQ0FBQztRQUNOLFNBQVM7U0FDUjtRQUNELFNBQVM7U0FDUjtRQUNELFNBQVM7U0FDUjtRQUNELFNBQVM7Ozs7QUFJakI7O0FDekVBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsWUFBWSxDQUFDLFVBQVUsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFFBQVEsVUFBVSxpQkFBaUI7SUFDckgsZ0JBQWdCLFNBQVM7SUFDekIsT0FBTyxRQUFRLENBQUM7TUFDZCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLE9BQU8sVUFBVSxTQUFTLFVBQVU7TUFDbEMsSUFBSSxRQUFRLE9BQU8sTUFBTSxRQUFRLEtBQUssUUFBUTtNQUM5QyxPQUFPLE1BQU0sT0FBTyxPQUFPLEdBQUc7UUFDNUIsU0FBUyxLQUFLLEtBQUssVUFBVTs7O0lBR2pDLE9BQU8sYUFBYSxTQUFTLGFBQWE7TUFDeEMsSUFBSSxRQUFRLE9BQU8sTUFBTSxRQUFRLEtBQUs7TUFDdEMsT0FBTyxNQUFNLE9BQU8sT0FBTzs7O0FBR2pDOztBQy9CQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLHFCQUFxQixDQUFDLFVBQVUsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFFBQVEsVUFBVSxpQkFBaUI7SUFDOUgsT0FBTyxRQUFRLENBQUM7TUFDZCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLGdCQUFnQixTQUFTLFdBQVcsR0FBRyxHQUFHLFlBQVksQ0FBQyxpQkFBaUIsT0FBTztJQUMvRSxPQUFPLFVBQVUsU0FBUyxVQUFVO01BQ2xDLElBQUksUUFBUSxPQUFPLE1BQU0sUUFBUSxLQUFLLFFBQVE7TUFDOUMsT0FBTyxNQUFNLE9BQU8sT0FBTyxHQUFHO1FBQzVCLFNBQVMsS0FBSyxLQUFLLFVBQVU7OztJQUdqQyxPQUFPLGFBQWEsU0FBUyxhQUFhO01BQ3hDLElBQUksUUFBUSxPQUFPLE1BQU0sUUFBUSxLQUFLO01BQ3RDLE9BQU8sTUFBTSxPQUFPLE9BQU87OztBQUdqQzs7QUMvQkE7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7O0FBTWhDO0dBQ0csV0FBVyxpQkFBaUIsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDeEcsZ0JBQWdCLFNBQVMsWUFBWTtNQUNuQyxlQUFlOzs7QUFHckI7O0FDZEE7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUTs7Ozs7O0FBTWhDO0dBQ0csV0FBVyxpQkFBaUIsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDeEcsZ0JBQWdCLFNBQVMsWUFBWTtNQUNuQyxlQUFlOzs7QUFHckI7O0FDZEE7QUFDQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLGlCQUFpQixDQUFDLFVBQVUsYUFBYSxZQUFZLG1CQUFtQixTQUFTLFNBQVMsUUFBUSxXQUFXLFVBQVUsaUJBQWlCOzs7SUFHbEosSUFBSTtNQUNGLGFBQWEsU0FBUyxlQUFlO01BQ3JDLGNBQWMsU0FBUyxlQUFlO01BQ3RDLGFBQWEsU0FBUyxlQUFlO01BQ3JDLGdCQUFnQixTQUFTLGVBQWU7TUFDeEMsY0FBYyxTQUFTLGVBQWU7TUFDdEMsaUJBQWlCLFNBQVMsZUFBZTs7SUFFM0MsZ0JBQWdCLENBQUMsWUFBWSxjQUFjO01BQ3pDLE9BQU87OztJQUdULGVBQWUsWUFBWSxZQUFZLENBQUM7SUFDeEMsZUFBZSxlQUFlLFlBQVk7SUFDMUMsZUFBZSxhQUFhLGFBQWEsQ0FBQztJQUMxQyxlQUFlLGdCQUFnQixhQUFhOztJQUU1QyxTQUFTLGVBQWUsS0FBSyxXQUFXLEtBQUssT0FBTztNQUNsRCxJQUFJLENBQUMsT0FBTztRQUNWLFFBQVE7O01BRVYsUUFBUSxRQUFRLEtBQUssR0FBRyxpQkFBaUIsV0FBVztRQUNsRCxVQUFVLGFBQWE7UUFDdkIsUUFBUSxVQUFVLFNBQVMsYUFBYTtVQUN0QyxRQUFRLElBQUksUUFBUSxLQUFLLFdBQVc7VUFDcEMsVUFBVSxhQUFhO1dBQ3RCOztNQUVMLFFBQVEsUUFBUSxLQUFLLEdBQUcsaUJBQWlCLFdBQVc7UUFDbEQsVUFBVSxPQUFPOzs7OztJQUtyQixPQUFPLElBQUksV0FBVyxTQUFTLGNBQWM7S0FDNUMsVUFBVSxPQUFPOzs7O0FBSXRCOztBQ3BEQTtBQUNBOzs7OztBQUtBLFFBQVE7QUFDUixRQUFROzs7Ozs7OztBQVFSLE9BQU8sVUFBVSxRQUFRLE9BQU8sZUFBZSxDQUFDLGtCQUFrQixhQUFhLGNBQWMsV0FBVyxhQUFhLENBQUMsVUFBVSxTQUFTLFFBQVE7SUFDN0ksT0FBTyxlQUFlLENBQUM7UUFDbkIsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO01BQ1Q7UUFDRSxVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87T0FDUjtRQUNDLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTztPQUNSO1FBQ0MsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO09BQ1I7UUFDQyxVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87T0FDUjtRQUNDLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTztPQUNSO1FBQ0MsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO09BQ1I7UUFDQyxVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87T0FDUjtRQUNDLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTztPQUNSO1FBQ0MsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO09BQ1I7UUFDQyxVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87T0FDUjtRQUNDLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTztPQUNSO1FBQ0MsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO09BQ1I7UUFDQyxVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87T0FDUjtRQUNDLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTztPQUNSO1FBQ0MsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO09BQ1I7UUFDQyxVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87T0FDUjtRQUNDLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTztPQUNSO1FBQ0MsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO09BQ1I7UUFDQyxVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87T0FDUjtRQUNDLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTzs7OztJQUlYLE9BQU8sa0JBQWtCOztJQUV6QixPQUFPLGdCQUFnQixZQUFZO1FBQy9CLEdBQUcsU0FBUyxxQkFBcUIsUUFBUSxPQUFPO1lBQzVDLElBQUksYUFBYSxTQUFTLHFCQUFxQjtZQUMvQyxLQUFLLElBQUksSUFBSSxXQUFXLFNBQVMsR0FBRyxLQUFLLEdBQUcsS0FBSztnQkFDN0MsS0FBSyxlQUFlLFdBQVc7Ozs7O0lBSzNDLElBQUksZUFBZSxRQUFRLFFBQVEsU0FBUyxlQUFlO0lBQzNELE9BQU8sZ0JBQWdCLFNBQVMsaUJBQWlCO1FBQzdDLGFBQWEsWUFBWTs7Ozs7QUFLakMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsUUFBUSxvQ0FBb0MseUJBQXlCLENBQUMsd0JBQXdCLFFBQVEsc0RBQXNELHNCQUFzQixDQUFDLHFCQUFxQixRQUFRLGdEQUFnRCwyQkFBMkIsQ0FBQywwQkFBMEIsUUFBUSwwREFBMEQsMkJBQTJCLENBQUMsMEJBQTBCLFFBQVEsMERBQTBELGVBQWUsQ0FBQyxjQUFjLFFBQVEsa0NBQWtDLHdCQUF3QixDQUFDLHVCQUF1QixRQUFRLG9EQUFvRCx3QkFBd0IsQ0FBQyx1QkFBdUIsUUFBUSxvREFBb0Qsb0JBQW9CLENBQUMsbUJBQW1CLFFBQVEsNENBQTRDLDZCQUE2QixDQUFDLDRCQUE0QixRQUFRLDhEQUE4RCwwQkFBMEIsQ0FBQyx5QkFBeUIsUUFBUSx3REFBd0QsaUJBQWlCLENBQUMsZ0JBQWdCLFFBQVEsc0NBQXNDLGlCQUFpQixDQUFDLGdCQUFnQixRQUFRLHNDQUFzQyxxQkFBcUIsQ0FBQyxvQkFBb0IsUUFBUSw4Q0FBOEMseUJBQXlCLENBQUMsd0JBQXdCLFFBQVEsc0RBQXNELGtDQUFrQyxDQUFDLGlDQUFpQyxRQUFRLHdFQUF3RSxtQkFBbUIsQ0FBQyxrQkFBa0IsUUFBUSwwQ0FBMEMsNEJBQTRCLENBQUMsMkJBQTJCLFFBQVEsNERBQTRELHdCQUF3QixDQUFDLHVCQUF1QixRQUFRLG9EQUFvRCx3QkFBd0IsQ0FBQyx1QkFBdUIsUUFBUSxvREFBb0Qsd0JBQXdCLENBQUMsdUJBQXVCLFFBQVEsb0RBQW9ELGlCQUFpQixRQUFRLHVCQUF1QixZQUFZLFFBQVE7QUFDbHVFOztBQzFIQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxnREFBTyxTQUFTLGdCQUFnQixvQkFBb0I7SUFDbkQsbUJBQW1CLFVBQVU7O0lBRTdCO09BQ0csTUFBTSxRQUFRO1FBQ2IsS0FBSztRQUNMLGFBQWE7O09BRWQsTUFBTSxRQUFRO1FBQ2IsS0FBSztRQUNMLGFBQWE7UUFDYix1QkFBWSxVQUFVLFFBQVE7O1VBRTVCLE9BQU8sR0FBRyxlQUFlLENBQUMsTUFBTTs7O09BR25DLE1BQU0sZUFBZTtRQUNwQixLQUFLO1FBQ0wsYUFBYSxTQUFTLGNBQWM7VUFDbEMsT0FBTyxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU87OztPQUd4RCxNQUFNLGNBQWM7UUFDbkIsS0FBSztRQUNMLGFBQWE7OztBQUdyQjs7QUNwQ0EsY0FBYyxPQUFPLFVBQVUsUUFBUSxPQUFPLGFBQWEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLFNBQVMsZ0JBQWdCLENBQUMsZUFBZSxJQUFJLCtCQUErQjtBQUNsSyxlQUFlLElBQUksaUNBQWlDO0FBQ3BELGVBQWUsSUFBSSxtREFBbUQ7QUFDdEUsZUFBZSxJQUFJLDZDQUE2QztBQUNoRSxlQUFlLElBQUksdURBQXVEO0FBQzFFLGVBQWUsSUFBSSx1REFBdUQ7QUFDMUUsZUFBZSxJQUFJLCtCQUErQjtBQUNsRCxlQUFlLElBQUksaURBQWlEO0FBQ3BFLGVBQWUsSUFBSSxpREFBaUQ7QUFDcEUsZUFBZSxJQUFJLHlDQUF5QztBQUM1RCxlQUFlLElBQUksMkRBQTJEO0FBQzlFLGVBQWUsSUFBSSxxREFBcUQ7QUFDeEUsZUFBZSxJQUFJLG1DQUFtQztBQUN0RCxlQUFlLElBQUksbUNBQW1DO0FBQ3RELGVBQWUsSUFBSSwyQ0FBMkM7QUFDOUQsZUFBZSxJQUFJLG1EQUFtRDtBQUN0RSxlQUFlLElBQUkscUVBQXFFO0FBQ3hGLGVBQWUsSUFBSSx1Q0FBdUM7QUFDMUQsZUFBZSxJQUFJLHlEQUF5RDtBQUM1RSxlQUFlLElBQUksaURBQWlEO0FBQ3BFLGVBQWUsSUFBSSxpREFBaUQ7QUFDcEUsZUFBZSxJQUFJLGlEQUFpRDtBQUNwRSxlQUFlLElBQUksbUNBQW1DO0FBQ3RELGVBQWUsSUFBSSw2QkFBNkI7QUFDaEQsZUFBZSxJQUFJLDZCQUE2QjtBQUNoRCxlQUFlLElBQUkseUNBQXlDLGdyTEFBZ3JMOzs7QUN6QjV1TDs7Ozs7O0NBTUMsSUFBSSxpQkFBaUIsUUFBUTs7Ozs7O0FBTTlCLGVBQWUsVUFBVSxZQUFZLENBQUMsbUJBQW1CLFNBQVMsaUJBQWlCO0VBQ2pGLE9BQU87SUFDTCxVQUFVO0lBQ1YsTUFBTSxTQUFTLFFBQVEsTUFBTSxRQUFROztNQUVuQyxJQUFJLFVBQVUsT0FBTyxPQUFPLGFBQWEsUUFBUSxPQUFPOztNQUV4RCxTQUFTLFFBQVEsTUFBTTtRQUNyQixJQUFJO1VBQ0YsT0FBTyxLQUFLLE1BQU07VUFDbEIsT0FBTyxHQUFHO1VBQ1YsT0FBTzs7OztNQUlYLEdBQUcsV0FBVyxRQUFRLG1CQUFtQixPQUFPLFFBQVEsb0JBQW9CLFNBQVM7UUFDbkYsUUFBUSxrQkFBa0IsT0FBTyxNQUFNLFFBQVE7OztNQUdqRCxnQkFBZ0IsS0FBSyxJQUFJOzs7O0FBSS9COztBQ25DQTtBQUNBOzs7O0FBSUEsT0FBTyxVQUFVLFFBQVEsT0FBTyxrQkFBa0I7O0FBRWxELENBQUMsQ0FBQyxvQkFBb0IsUUFBUSwwQkFBMEIsa0JBQWtCLFFBQVE7QUFDbEY7O0FDUkE7QUFDQTs7Ozs7OztBQU9BLElBQUksaUJBQWlCLFFBQVE7Ozs7OztBQU03QixlQUFlLFFBQVEsbUJBQW1CLENBQUMsY0FBYyxZQUFZLFNBQVMsUUFBUSxZQUFZLFVBQVU7O0VBRTFHLElBQUksdUJBQXVCO0lBQ3pCLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1Q7O0VBRUYsT0FBTyxTQUFTLG1CQUFtQixTQUFTOztJQUUxQyxJQUFJLFVBQVUsV0FBVyxLQUFLLENBQUMsTUFBTSxRQUFRLHNCQUFzQixDQUFDLFFBQVEsVUFBVSxzQkFBc0IsQ0FBQyxrQkFBa0IsSUFBSTs7TUFFakksVUFBVTtNQUNWLG9CQUFvQjs7O0lBR3RCLElBQUksT0FBTyxTQUFTO01BQ2xCLGtCQUFrQixTQUFTO01BQzNCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBLGtCQUFrQjtNQUNsQjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkI7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EsaUJBQWlCO1FBQ2YsUUFBUTtRQUNSLE1BQU07UUFDTixjQUFjO1FBQ2QsU0FBUztRQUNULFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYzs7TUFFaEIsSUFBSTtRQUNGLFNBQVM7UUFDVCxZQUFZO1FBQ1osT0FBTztRQUNQLFNBQVM7UUFDVCxhQUFhO1FBQ2IsTUFBTTtRQUNOLE9BQU87UUFDUCxTQUFTO1FBQ1QsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsT0FBTztRQUNQLE9BQU87UUFDUCxhQUFhO1FBQ2IsaUJBQWlCOzs7SUFHckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjO01BQzdCLEVBQUUsY0FBYzs7O0lBR2xCLElBQUksV0FBVyxRQUFRLFNBQVM7TUFDOUIsUUFBUSxPQUFPLGdCQUFnQixRQUFRO01BQ3ZDLFFBQVEsT0FBTyxRQUFRLFNBQVM7OztJQUdsQyxRQUFRLE9BQU8sR0FBRzs7SUFFbEIsSUFBSSxFQUFFLFVBQVUsTUFBTTtNQUNwQixFQUFFLFFBQVE7OztJQUdaLElBQUksRUFBRSxvQkFBb0IsS0FBSyxHQUFHO01BQ2hDLEVBQUUsa0JBQWtCLFNBQVM7Ozs7SUFJL0Isb0JBQW9CLEVBQUUsZUFBZSxvQkFBb0IsVUFBVSxxQkFBcUI7SUFDeEYsSUFBSSxFQUFFLFlBQVk7O01BRWhCLG9CQUFvQixVQUFVOztJQUVoQyxJQUFJLEVBQUUsaUJBQWlCO01BQ3JCLEVBQUUsa0JBQWtCLE1BQU0sUUFBUSxFQUFFLGdCQUFnQixNQUFNLEVBQUUsa0JBQWtCLENBQUMsRUFBRTs7O0lBR25GLFNBQVMsa0JBQWtCLGFBQWEsc0JBQXNCLFdBQVcsbUJBQW1CO01BQzFGLElBQUksQ0FBQyxxQkFBcUIsWUFBWTtRQUNwQyxxQkFBcUIsYUFBYTs7TUFFcEMsTUFBTSxVQUFVLEtBQUssTUFBTSxxQkFBcUIsWUFBWTtNQUM1RCxZQUFZLGFBQWEscUJBQXFCOzs7O0lBSWhELElBQUksRUFBRSxXQUFXO01BQ2YsSUFBSSxDQUFDLE1BQU0sUUFBUSxFQUFFLFlBQVk7UUFDL0IsRUFBRSxZQUFZLENBQUMsRUFBRTs7TUFFbkIsRUFBRSxVQUFVLFFBQVEsU0FBUyxjQUFjLFdBQVc7UUFDcEQsa0JBQWtCLGFBQWEsc0JBQXNCLFdBQVc7UUFDaEUsSUFBSSxFQUFFLGlCQUFpQjtVQUNyQixrQkFBa0Isa0JBQWtCLDJCQUEyQixXQUFXLEVBQUU7OztNQUdoRixlQUFlO1dBQ1Y7O01BRUwsY0FBYztNQUNkLGVBQWU7TUFDZixJQUFJLEVBQUUsaUJBQWlCO1FBQ3JCLG1CQUFtQixFQUFFOzs7OztJQUt6Qjs7SUFFQSxJQUFJLFNBQVMsYUFBYTtNQUN4QixrQkFBa0IsU0FBUyxZQUFZO01BQ3ZDLGdCQUFnQixVQUFVLGlCQUFpQixNQUFNO01BQ2pELGtCQUFrQixTQUFTLFlBQVk7TUFDdkMsZ0JBQWdCLFVBQVUsaUJBQWlCLE1BQU07V0FDNUM7TUFDTCxrQkFBa0IsU0FBUztNQUMzQixnQkFBZ0IsWUFBWTtNQUM1QixrQkFBa0IsU0FBUztNQUMzQixnQkFBZ0IsWUFBWTs7O0lBRzlCLElBQUksUUFBUTtNQUNWLGNBQWMscUJBQXFCO01BQ25DLGlCQUFpQixxQkFBcUI7TUFDdEMsWUFBWTtNQUNaLE9BQU87TUFDUCxLQUFLO01BQ0wsUUFBUTtNQUNSLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTs7O0lBR1osT0FBTzs7O0lBR1AsU0FBUyxVQUFVLEtBQUs7TUFDdEIsSUFBSSxNQUFNLFFBQVEsTUFBTTtRQUN0QixPQUFPOztNQUVULElBQUksSUFBSSxRQUFRO1FBQ2QsSUFBSSxPQUFPLElBQUk7VUFDYixXQUFXO1FBQ2IsT0FBTyxNQUFNO1VBQ1g7VUFDQSxTQUFTLEtBQUssSUFBSTs7UUFFcEIsT0FBTzthQUNGO1FBQ0wsT0FBTyxDQUFDOzs7OztJQUtaLFNBQVMscUJBQXFCLElBQUk7TUFDaEMsT0FBTyxTQUFTLFlBQVksS0FBSztRQUMvQixJQUFJLFVBQVUsTUFBTSxRQUFRLE9BQU8sTUFBTSxVQUFVO1FBQ25ELFFBQVEsUUFBUSxTQUFTLGlCQUFpQixXQUFXO1VBQ25ELElBQUksRUFBRSxXQUFXO1lBQ2YsUUFBUSxRQUFRLEVBQUUsV0FBVyxTQUFTLG9CQUFvQixZQUFZLFdBQVc7Y0FDL0UsSUFBSSxPQUFPLE9BQU87Z0JBQ2hCLFlBQVksV0FBVyxLQUFLO2dCQUM1QixRQUFRLFFBQVEsUUFBUSxLQUFLO3FCQUN4QjtnQkFDTCxZQUFZLFdBQVcsT0FBTyxZQUFZLFFBQVEsWUFBWTtnQkFDOUQsUUFBUSxRQUFRLFFBQVEsS0FBSzs7O2lCQUc1QjtZQUNMLElBQUksT0FBTyxPQUFPO2NBQ2hCLFlBQVksS0FBSztjQUNqQixRQUFRLFFBQVEsUUFBUSxLQUFLO21CQUN4QjtjQUNMLFlBQVksT0FBTyxZQUFZLFFBQVEsWUFBWTtjQUNuRCxRQUFRLFFBQVEsUUFBUSxLQUFLOzs7Ozs7O0lBT3ZDLFNBQVMsWUFBWSxJQUFJO01BQ3ZCLE9BQU8sTUFBTSxXQUFXLFFBQVEsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZOzs7SUFHOUQsU0FBUyxzQkFBc0IsSUFBSTtNQUNqQyxJQUFJO01BQ0osS0FBSyxhQUFhLE1BQU0sWUFBWTtRQUNsQyxJQUFJLE1BQU0sV0FBVyxlQUFlLGNBQWMsTUFBTSxXQUFXLFdBQVcsUUFBUSxRQUFRLENBQUMsR0FBRztVQUNoRyxPQUFPOzs7TUFHWCxPQUFPOzs7SUFHVCxTQUFTLE9BQU8sS0FBSztNQUNuQixJQUFJLEtBQUssTUFBTSxRQUFRO01BQ3ZCLFNBQVMsaUJBQWlCLElBQUksV0FBVzs7TUFFekMsa0JBQWtCLFFBQVEsU0FBUyxhQUFhLFdBQVc7UUFDekQsU0FBUyxXQUFXLE1BQU0sYUFBYTs7OztJQUkzQyxTQUFTLFVBQVU7TUFDakIsT0FBTztNQUNQLE1BQU0sZ0JBQWdCO01BQ3RCLFFBQVE7OztJQUdWLFNBQVMsS0FBSyxHQUFHO01BQ2YsSUFBSSxLQUFLLE9BQU87TUFDaEIsSUFBSSxPQUFPLEVBQUU7OztNQUdiLElBQUksQ0FBQyxFQUFFLFVBQVUsS0FBSyxFQUFFLFVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTO1FBQzlEOzs7O01BSUYsSUFBSSxNQUFNLFVBQVUsTUFBTTtRQUN4Qjs7OztNQUlGLElBQUksQ0FBQyxFQUFFLFdBQVc7UUFDaEIsSUFBSSxTQUFTLEtBQUs7VUFDaEIsZUFBZSxPQUFPO1VBQ3RCLGNBQWMsT0FBTztVQUNyQixjQUFjLEtBQUs7VUFDbkIsYUFBYSxLQUFLO1FBQ3BCLEVBQUUsWUFBWSxlQUFlLGNBQWMsY0FBYyxhQUFhLGVBQWU7Ozs7TUFJdkYsSUFBSSxTQUFTLFVBQVU7TUFDdkIsV0FBVyxTQUFTLFNBQVMsS0FBSyxPQUFPO01BQ3pDLFdBQVcsU0FBUyxTQUFTLEtBQUssT0FBTztNQUN6QyxXQUFXLFNBQVMsV0FBVztNQUMvQixXQUFXLFNBQVMsV0FBVzs7O01BRy9CLElBQUksRUFBRSxhQUFhO1FBQ2pCLFlBQVksU0FBUyxTQUFTLEtBQUssT0FBTztRQUMxQyxZQUFZLFNBQVMsU0FBUyxLQUFLLE9BQU87Ozs7TUFJNUMsSUFBSSxPQUFPLEVBQUUsVUFBVSxVQUFVO1FBQy9CLGVBQWUsU0FBUyxXQUFXO1VBQ2pDLG9CQUFvQjtXQUNuQixFQUFFO2FBQ0E7UUFDTCxvQkFBb0I7OztNQUd0QixFQUFFOzs7SUFHSixTQUFTLG9CQUFvQixHQUFHO01BQzlCLFNBQVMsU0FBUyxPQUFPLEVBQUUsUUFBUTtNQUNuQzs7TUFFQSxRQUFRLE1BQU0sT0FBTyxXQUFXLFdBQVc7TUFDM0MsUUFBUSxNQUFNLE1BQU0sV0FBVyxXQUFXOztNQUUxQyxLQUFLOzs7O0lBSVAsU0FBUyxNQUFNLE1BQU07TUFDbkIsSUFBSSxTQUFTOztNQUViLElBQUksTUFBTSxZQUFZLFNBQVM7UUFDN0I7OztNQUdGLElBQUksYUFBYSxPQUFPO1FBQ3RCOzs7TUFHRixPQUFPLEtBQUssaUJBQWlCLENBQUMsYUFBYSxLQUFLLGdCQUFnQjs7UUFFOUQsSUFBSSxFQUFFLFFBQVEsTUFBTSxTQUFTO1VBQzNCOztRQUVGLE9BQU8sS0FBSztRQUNaLElBQUksQ0FBQyxNQUFNO1VBQ1Q7Ozs7TUFJSixJQUFJLFlBQVksS0FBSztNQUNyQixJQUFJLENBQUMsV0FBVztRQUNkOztNQUVGLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxNQUFNLFdBQVcsQ0FBQyxFQUFFLE1BQU0sTUFBTSxXQUFXLFFBQVEsWUFBWSxlQUFlO1FBQ3hHOzs7TUFHRjs7O01BR0EsSUFBSSxFQUFFLGlCQUFpQjtRQUNyQixJQUFJLGlCQUFpQixrQkFBa0IsUUFBUTtVQUM3QyxZQUFZLFdBQVcsTUFBTTs7UUFFL0IsZ0JBQWdCLGdCQUFnQjtRQUNoQyxlQUFlLEVBQUUsZ0JBQWdCO1FBQ2pDLGVBQWU7UUFDZixhQUFhLGFBQWE7UUFDMUIsSUFBSSxFQUFFLE1BQU07VUFDVixhQUFhLFFBQVEsS0FBSzs7OztNQUk5QixJQUFJLEVBQUUsTUFBTTtRQUNWLFFBQVEsS0FBSyxVQUFVO1FBQ3ZCLElBQUksRUFBRSxPQUFPO1VBQ1gsRUFBRSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWTs7OztNQUlyRCxVQUFVO01BQ1YsUUFBUTtNQUNSLGtCQUFrQixrQkFBa0IsT0FBTzs7TUFFM0MsTUFBTSxXQUFXO01BQ2pCLElBQUksRUFBRSxPQUFPO1FBQ1gsRUFBRSxNQUFNLE1BQU0sUUFBUSxPQUFPOzs7TUFHL0IsT0FBTzs7O0lBR1QsU0FBUyxjQUFjLElBQUk7TUFDekIsT0FBTyxHQUFHLFlBQVksT0FBTyxHQUFHLFlBQVk7OztJQUc5QyxTQUFTLE1BQU07TUFDYixJQUFJLENBQUMsTUFBTSxVQUFVO1FBQ25COztNQUVGLFFBQVEsSUFBSTtNQUNaLElBQUksT0FBTyxTQUFTO01BQ3BCLEtBQUssTUFBTSxLQUFLOzs7SUFHbEIsU0FBUyxRQUFRLEdBQUc7TUFDbEIsSUFBSSxDQUFDLE1BQU0sVUFBVTtRQUNuQjs7TUFFRixJQUFJLEtBQUssT0FBTzs7TUFFaEIsV0FBVyxTQUFTLFdBQVc7TUFDL0IsV0FBVyxTQUFTLFdBQVc7O01BRS9CLElBQUksT0FBTyxTQUFTO1FBQ2xCLHNCQUFzQixzQkFBc0IsU0FBUyxVQUFVO1FBQy9ELGFBQWEsZUFBZSxxQkFBcUIsVUFBVTs7TUFFN0QsSUFBSSxlQUFlLEVBQUUsU0FBUyxTQUFTLGVBQWUsVUFBVTs7UUFFOUQsS0FBSyxNQUFNO2FBQ04sSUFBSSxFQUFFLGVBQWU7UUFDMUI7YUFDSztRQUNMOzs7O01BSUYsbUJBQW1COzs7TUFHbkIsSUFBSSxFQUFFLG1CQUFtQixlQUFlO1FBQ3RDLFFBQVEsZUFBZTtRQUN2QixnQkFBZ0I7OztNQUdsQixJQUFJLEVBQUUsT0FBTztRQUNYLEVBQUUsTUFBTSxNQUFNLFdBQVcsTUFBTTs7OztJQUluQyxTQUFTLEtBQUssTUFBTSxRQUFRO01BQzFCLElBQUksRUFBRSxTQUFTLG1CQUFtQixTQUFTO1FBQ3pDLEVBQUUsTUFBTSxNQUFNLFVBQVUsTUFBTSxTQUFTLGNBQWMsWUFBWSxjQUFjO2FBQzFFLElBQUksRUFBRSxPQUFPO1FBQ2xCLEVBQUUsTUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLFNBQVMsY0FBYyxZQUFZLGNBQWM7O01BRXZGOzs7SUFHRixTQUFTLFNBQVM7TUFDaEIsSUFBSSxDQUFDLE1BQU0sVUFBVTtRQUNuQjs7TUFFRixJQUFJLE9BQU8sU0FBUztRQUNsQixTQUFTLEtBQUs7UUFDZDs7TUFFRixJQUFJLENBQUMsRUFBRSxpQkFBaUI7UUFDdEIsSUFBSSxRQUFRO1VBQ1YsT0FBTyxZQUFZOzthQUVoQjtRQUNMLFlBQVksY0FBYztRQUMxQixhQUFhLE9BQU8sYUFBYSxRQUFRLFlBQVk7OztNQUd2RCxJQUFJLEVBQUUsT0FBTztRQUNYLEVBQUUsTUFBTSxNQUFNLEVBQUUsT0FBTyxXQUFXLFVBQVUsTUFBTSxRQUFRLFdBQVcsY0FBYzs7TUFFckY7OztJQUdGLFNBQVMsT0FBTyxRQUFRO01BQ3RCLElBQUksQ0FBQyxNQUFNLFVBQVU7UUFDbkI7O01BRUYsSUFBSSxVQUFVLFVBQVUsU0FBUyxJQUFJLFNBQVMsRUFBRTtRQUM5QyxPQUFPLFNBQVM7UUFDaEIsU0FBUyxLQUFLOztNQUVoQixJQUFJLFdBQVcsV0FBVyxFQUFFLE1BQU07UUFDaEMsUUFBUSxJQUFJO1FBQ1osSUFBSSxDQUFDLEVBQUUsaUJBQWlCO1VBQ3RCLE9BQU8sWUFBWTtlQUNkO1VBQ0wsYUFBYSxPQUFPLGFBQWEsUUFBUSxhQUFhLEdBQUc7Ozs7TUFJN0QsSUFBSSxVQUFVLG1CQUFtQjtNQUNqQyxJQUFJLFlBQVksU0FBUyxFQUFFLFNBQVMsU0FBUyxTQUFTO1FBQ3BELElBQUksQ0FBQyxFQUFFLGlCQUFpQjtVQUN0QixRQUFRLGFBQWEsTUFBTTtlQUN0QjtVQUNMLG1CQUFtQjtVQUNuQixlQUFlOztVQUVmLHNCQUFzQjs7OztNQUkxQixJQUFJLEVBQUUsVUFBVSxXQUFXLFVBQVU7UUFDbkMsRUFBRSxNQUFNLE1BQU0sVUFBVSxNQUFNO2FBQ3pCLElBQUksRUFBRSxPQUFPO1FBQ2xCLEVBQUUsTUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFROzs7TUFHdEM7OztJQUdGLFNBQVMsVUFBVTtNQUNqQixJQUFJLE9BQU8sU0FBUztNQUNwQjs7TUFFQSxJQUFJLE1BQU07UUFDUixRQUFRLE1BQU0sRUFBRSxRQUFROzs7O01BSTFCLElBQUksY0FBYztRQUNoQixTQUFTLE9BQU87OztNQUdsQixNQUFNLFdBQVc7O01BRWpCLElBQUksRUFBRSxPQUFPO1FBQ1gsRUFBRSxNQUFNLE1BQU0sV0FBVztRQUN6QixFQUFFLE1BQU0sTUFBTSxPQUFPLE1BQU0saUJBQWlCOzs7TUFHOUMsVUFBVSxRQUFRLFFBQVEsa0JBQWtCLGtCQUFrQixlQUFlO01BQzdFLGFBQWEsYUFBYSxnQkFBZ0IsZ0JBQWdCLGVBQWUsa0JBQWtCOzs7O0lBSTdGLFNBQVMsbUJBQW1CLFFBQVEsR0FBRztNQUNyQyxJQUFJLFVBQVUsTUFBTSxVQUFVLGtCQUFrQixPQUFPLFNBQVM7TUFDaEUsT0FBTyxXQUFXLFdBQVcsWUFBWTs7OztJQUkzQyxTQUFTLGVBQWUscUJBQXFCLFNBQVMsU0FBUztNQUM3RCxJQUFJLFNBQVM7O01BRWIsT0FBTyxVQUFVLENBQUMsWUFBWTtRQUM1QixTQUFTLE9BQU87O01BRWxCLE9BQU87O01BRVAsU0FBUyxXQUFXO1FBQ2xCLElBQUksVUFBVTs7UUFFZCxJQUFJLGFBQWEsU0FBUztVQUN4QixtQkFBbUI7O1VBRW5CLElBQUksWUFBWSxrQkFBa0IsUUFBUTtZQUN4QyxZQUFZLGFBQWEsUUFBUSxXQUFXLFNBQVM7WUFDckQsVUFBVSxtQkFBbUIsUUFBUTtVQUN2QyxVQUFVLFVBQVUsT0FBTyxFQUFFLFFBQVEsT0FBTyxRQUFRLFNBQVMsV0FBVyxZQUFZOztVQUVwRixJQUFJLFdBQVcsRUFBRSxpQkFBaUI7WUFDaEMsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxFQUFFLFdBQVc7Y0FDaEIsZUFBZSxpQkFBaUIsTUFBTSxXQUFXLFFBQVE7bUJBQ3BEO2NBQ0wsS0FBSyxJQUFJLGFBQWEsTUFBTSxZQUFZO2dCQUN0QyxJQUFJLE1BQU0sV0FBVyxlQUFlLGNBQWMsTUFBTSxXQUFXLFdBQVcsUUFBUSxZQUFZLENBQUMsR0FBRztrQkFDcEcsbUJBQW1CO2tCQUNuQixlQUFlLGlCQUFpQixXQUFXLE1BQU0sV0FBVyxXQUFXLFFBQVE7a0JBQy9FOzs7Ozs7OztRQVFWLElBQUksRUFBRTtVQUNKLFNBQVMsUUFBUSxFQUFFLFFBQVE7VUFDM0IsV0FBVyxlQUFlOztVQUUxQixJQUFJLGVBQWU7WUFDakIsUUFBUSxlQUFlOzs7VUFHekIsaUJBQWlCLFVBQVUsRUFBRSxRQUFRLGNBQWMsRUFBRSxRQUFRO1VBQzdELFNBQVMsUUFBUTtVQUNqQixnQkFBZ0I7OztRQUdsQixPQUFPOzs7O0lBSVgsU0FBUyxLQUFLLEdBQUc7TUFDZixJQUFJLENBQUMsU0FBUztRQUNaOztNQUVGLElBQUksS0FBSyxPQUFPOzs7TUFHaEIsV0FBVyxTQUFTLFdBQVc7TUFDL0IsV0FBVyxTQUFTLFdBQVc7OztNQUcvQixJQUFJLElBQUksV0FBVztRQUNqQixJQUFJLFdBQVc7UUFDZjtRQUNBO1FBQ0E7OztNQUdGLElBQUksRUFBRSxhQUFhO1FBQ2pCLFFBQVEsU0FBUyxTQUFTO1FBQzFCLFFBQVEsU0FBUyxTQUFTO1FBQzFCLFlBQVksVUFBVSxFQUFFOzs7TUFHMUIsSUFBSSxDQUFDLEVBQUUsT0FBTztRQUNaLElBQUksQ0FBQyxFQUFFLGdCQUFnQixRQUFRLFVBQVUsT0FBTyxZQUFZLFFBQVEsVUFBVSxRQUFRLFlBQVk7VUFDaEcsUUFBUSxNQUFNLE9BQU8sSUFBSTtlQUNwQixJQUFJLEVBQUUsYUFBYTtVQUN4QixJQUFJLFFBQVEsVUFBVSxPQUFPLFVBQVU7WUFDckMsUUFBUSxNQUFNLE9BQU8sWUFBWSxRQUFRLFVBQVUsUUFBUTtpQkFDdEQ7WUFDTCxRQUFRLE1BQU0sT0FBTyxXQUFXLGdCQUFnQixRQUFRLFVBQVUsU0FBUzs7OztNQUlqRixJQUFJLENBQUMsRUFBRSxPQUFPO1FBQ1osSUFBSSxDQUFDLEVBQUUsZ0JBQWdCLFFBQVEsVUFBVSxNQUFNLFlBQVksUUFBUSxVQUFVLFNBQVMsWUFBWTtVQUNoRyxRQUFRLE1BQU0sTUFBTSxJQUFJO2VBQ25CLElBQUksRUFBRSxhQUFhO1VBQ3hCLElBQUksUUFBUSxVQUFVLE1BQU0sVUFBVTtZQUNwQyxRQUFRLE1BQU0sTUFBTSxZQUFZLFFBQVEsVUFBVSxPQUFPO2lCQUNwRDtZQUNMLFFBQVEsTUFBTSxNQUFNLFdBQVcsaUJBQWlCLFFBQVEsVUFBVSxVQUFVOzs7OztNQUtsRixJQUFJLE9BQU8sU0FBUztRQUNsQixzQkFBc0Isc0JBQXNCLFNBQVMsVUFBVTtRQUMvRCxhQUFhLGVBQWUscUJBQXFCLFVBQVU7UUFDM0QsVUFBVSxlQUFlLFFBQVEsZUFBZTs7UUFFaEQsSUFBSSx3QkFBd0IsMEJBQTBCO1VBQ3BELFVBQVUscUJBQXFCO1VBQy9CLElBQUksMEJBQTBCO1lBQzVCLFVBQVUsMEJBQTBCOztVQUV0QywyQkFBMkI7OztNQUcvQixJQUFJLFdBQVcsZUFBZSxNQUFNO1FBQ2xDLElBQUksRUFBRSxPQUFPO1VBQ1g7VUFDQSxrQkFBa0I7VUFDbEI7ZUFDSztVQUNMLGtCQUFrQjs7Ozs7TUFLdEIsSUFBSSxlQUFlLFdBQVcsRUFBRSxNQUFNO1FBQ3BDLElBQUksQ0FBQyxFQUFFLG1CQUFtQixLQUFLLGVBQWU7VUFDNUMsS0FBSyxjQUFjLFlBQVk7ZUFDMUIsSUFBSSxFQUFFLG1CQUFtQixpQkFBaUIsUUFBUSxnQkFBZ0IsQ0FBQyxHQUFHO1VBQzNFLGlCQUFpQixPQUFPLGlCQUFpQixRQUFRLGFBQWE7VUFDOUQsV0FBVzs7UUFFYjs7O01BR0YsSUFBSTtRQUNGLFlBQVksa0JBQWtCLFlBQVk7UUFDMUM7O01BRUYsSUFBSSxjQUFjLE1BQU07UUFDdEIsWUFBWSxhQUFhLFlBQVksV0FBVyxVQUFVO1FBQzFELElBQUksRUFBRSxpQkFBaUI7VUFDckIsSUFBSSxXQUFXO1lBQ2IsaUJBQWlCLFdBQVcsV0FBVztpQkFDbEM7WUFDTCxpQkFBaUI7OzthQUdoQixJQUFJLEVBQUUsa0JBQWtCLFFBQVEsQ0FBQyxFQUFFLE1BQU07O1FBRTlDLFlBQVk7UUFDWixhQUFhOzs7UUFHYixJQUFJLEVBQUUsaUJBQWlCO1VBQ3JCLGlCQUFpQjtVQUNqQixtQkFBbUI7VUFDbkIsZUFBZTs7YUFFWjs7UUFFTCxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLFNBQVMsS0FBSyxrQkFBa0IsTUFBTTs7VUFFdkUsSUFBSSxDQUFDLEVBQUUsaUJBQWlCO1lBQ3RCLEtBQUssY0FBYyxZQUFZO2lCQUMxQjtZQUNMLGFBQWEsT0FBTyxnQkFBZ0I7WUFDcEMsV0FBVzs7O1FBR2Y7O01BRUYsSUFBSSxjQUFjO1FBQ2hCLGNBQWM7UUFDZCxjQUFjLE9BQU87UUFDckIsY0FBYyxpQkFBaUI7O1FBRS9CLGtCQUFrQjs7UUFFbEIsSUFBSSxDQUFDLEVBQUUsaUJBQWlCO1VBQ3RCLFdBQVcsYUFBYSxNQUFNO2VBQ3pCO1VBQ0wsc0JBQXNCOzs7UUFHeEIsSUFBSSxFQUFFLE9BQU87VUFDWCxFQUFFLE1BQU0sTUFBTSxVQUFVLE1BQU07Ozs7TUFJbEMsU0FBUyxNQUFNLE1BQU07UUFDbkIsRUFBRSxNQUFNLE1BQU0sTUFBTSxNQUFNLGlCQUFpQjs7O01BRzdDLFNBQVMsT0FBTztRQUNkLElBQUksU0FBUztVQUNYLE1BQU07Ozs7TUFJVixTQUFTLE1BQU07UUFDYixJQUFJLGlCQUFpQjtVQUNuQixNQUFNOzs7OztJQUtaLFNBQVMsc0JBQXNCLGdCQUFnQjtNQUM3QyxJQUFJLHFCQUFxQixjQUFjO1FBQ3JDLElBQUksbUJBQW1CLE1BQU07VUFDM0IsaUJBQWlCLGFBQWE7O1FBRWhDLElBQUksUUFBUSxpQkFBaUIsZ0JBQWdCLGlCQUFpQixJQUFJO1FBQ2xFLGFBQWEsT0FBTyxPQUFPLEdBQUcsaUJBQWlCLE9BQU8sZUFBZSxHQUFHO1FBQ3hFLGdCQUFnQjthQUNYO1FBQ0wsSUFBSSxtQkFBbUIsTUFBTTtVQUMzQixpQkFBaUIsYUFBYSxTQUFTOztRQUV6QyxJQUFJLENBQUMsRUFBRSxRQUFRLHFCQUFxQixjQUFjO1VBQ2hELGlCQUFpQixPQUFPLGVBQWU7O1FBRXpDLElBQUksQ0FBQyxFQUFFLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixDQUFDLEdBQUc7VUFDdEQsYUFBYSxPQUFPLGdCQUFnQixHQUFHLGNBQWM7VUFDckQsZ0JBQWdCOzs7TUFHcEIsV0FBVzs7O0lBR2IsU0FBUyxnQkFBZ0IsR0FBRztNQUMxQixJQUFJLGtCQUFrQjtRQUNwQixJQUFJLFNBQVMsaUJBQWlCO1FBQzlCLGlCQUFpQixhQUFhLEVBQUU7O1FBRWhDLElBQUksV0FBVyxpQkFBaUIsV0FBVztVQUN6QyxFQUFFO1VBQ0YsRUFBRTs7Ozs7SUFLUixTQUFTLG9CQUFvQjtNQUMzQixJQUFJLFNBQVM7UUFDWDs7TUFFRixJQUFJLE9BQU8sTUFBTTtNQUNqQixVQUFVLE1BQU0sVUFBVTtNQUMxQixlQUFlLEtBQUs7TUFDcEIsZ0JBQWdCLEtBQUs7TUFDckIsUUFBUSxNQUFNLFFBQVEsYUFBYSxRQUFRO01BQzNDLFFBQVEsTUFBTSxTQUFTLGNBQWMsUUFBUTtNQUM3QyxRQUFRLFNBQVMsRUFBRSxRQUFRO01BQzNCLFNBQVMsU0FBUyxFQUFFLFFBQVE7TUFDNUIsRUFBRSxnQkFBZ0IsWUFBWTtNQUM5QixTQUFTLGlCQUFpQixNQUFNLGFBQWE7TUFDN0MsU0FBUyxNQUFNLEVBQUUsUUFBUTtNQUN6QixTQUFTLFNBQVMsTUFBTSxTQUFTO01BQ2pDLElBQUksRUFBRSxPQUFPO1FBQ1gsRUFBRSxNQUFNLE1BQU0sVUFBVSxTQUFTOzs7O0lBSXJDLFNBQVMsb0JBQW9CO01BQzNCLElBQUksU0FBUztRQUNYLFFBQVEsTUFBTSxFQUFFLFFBQVE7UUFDeEIsU0FBUyxpQkFBaUIsT0FBTyxhQUFhO1FBQzlDLFNBQVMsU0FBUyxPQUFPLFNBQVM7UUFDbEMsUUFBUSxjQUFjLFlBQVk7UUFDbEMsVUFBVTs7OztJQUlkLFNBQVMsa0JBQWtCLFlBQVksUUFBUTtNQUM3QyxJQUFJLFlBQVk7TUFDaEIsT0FBTyxjQUFjLGNBQWMsVUFBVSxrQkFBa0IsWUFBWTtRQUN6RSxZQUFZLFVBQVU7O01BRXhCLElBQUksY0FBYyxpQkFBaUI7UUFDakMsT0FBTzs7TUFFVCxPQUFPOzs7SUFHVCxTQUFTLGFBQWEsWUFBWSxRQUFRLEdBQUcsR0FBRztNQUM5QyxJQUFJLGFBQWEsRUFBRSxjQUFjO01BQ2pDLElBQUksWUFBWSxXQUFXLGFBQWEsV0FBVztNQUNuRCxPQUFPOztNQUVQLFNBQVMsVUFBVTtRQUNqQixJQUFJLE1BQU0sV0FBVyxTQUFTO1FBQzlCLElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO1VBQ3hCLEtBQUssV0FBVyxTQUFTO1VBQ3pCLE9BQU8sR0FBRztVQUNWLElBQUksY0FBYyxLQUFLLE9BQU8sR0FBRztZQUMvQixPQUFPOztVQUVULElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxHQUFHO1lBQy9CLE9BQU87OztRQUdYLE9BQU87OztNQUdULFNBQVMsU0FBUztRQUNoQixJQUFJLE9BQU8sT0FBTztRQUNsQixJQUFJLFlBQVk7VUFDZCxPQUFPLFFBQVEsSUFBSSxLQUFLLE9BQU8sYUFBYSxRQUFROztRQUV0RCxPQUFPLFFBQVEsSUFBSSxLQUFLLE1BQU0sY0FBYyxRQUFROzs7TUFHdEQsU0FBUyxRQUFRLE9BQU87UUFDdEIsT0FBTyxRQUFRLE9BQU8sVUFBVTs7OztJQUlwQyxTQUFTLFVBQVUsWUFBWSxZQUFZO01BQ3pDLElBQUksT0FBTyxPQUFPLGdCQUFnQixhQUFhO1FBQzdDLE9BQU8sT0FBTzs7TUFFaEIsSUFBSSxnQkFBZ0IsY0FBYztRQUNoQyxPQUFPLGdCQUFnQjs7TUFFekIsT0FBTyxLQUFLOzs7SUFHZCxTQUFTLFVBQVUsSUFBSTtNQUNyQixJQUFJLE9BQU8sR0FBRztRQUNaLFlBQVksVUFBVSxhQUFhO1FBQ25DLGFBQWEsVUFBVSxjQUFjO01BQ3ZDLE9BQU87UUFDTCxNQUFNLEtBQUssT0FBTztRQUNsQixPQUFPLEtBQUssUUFBUTtRQUNwQixLQUFLLEtBQUssTUFBTTtRQUNoQixRQUFRLEtBQUssU0FBUzs7OztJQUkxQixTQUFTLHNCQUFzQixPQUFPLEdBQUcsR0FBRztNQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDWixPQUFPOztNQUVULElBQUksSUFBSSxTQUFTO1FBQ2YsUUFBUSxFQUFFO1FBQ1Y7TUFDRixFQUFFLGFBQWEsTUFBTSxFQUFFLFFBQVE7TUFDL0IsS0FBSyxTQUFTLGlCQUFpQixHQUFHO01BQ2xDLEVBQUUsWUFBWTtNQUNkLE9BQU87Ozs7RUFJWCxTQUFTLFNBQVMsSUFBSSxJQUFJLE1BQU0sSUFBSTtJQUNsQyxJQUFJLFFBQVE7UUFDUixTQUFTO1FBQ1QsV0FBVztRQUNYLFdBQVc7O01BRWIsTUFBTSxRQUFRLFFBQVE7O0lBRXhCLElBQUksU0FBUyxTQUFTO01BQ3BCLElBQUksSUFBSSxNQUFNLE9BQU87O0lBRXZCLElBQUksSUFBSSxNQUFNOzs7RUFHaEIsU0FBUyxRQUFRO0lBQ2YsT0FBTzs7O0VBR1QsU0FBUyxTQUFTO0lBQ2hCLE9BQU87OztFQUdULFNBQVMsT0FBTyxJQUFJO0lBQ2xCLE9BQU8sR0FBRyxzQkFBc0I7O0lBRWhDLFNBQVMsV0FBVztNQUNsQixJQUFJLFVBQVU7TUFDZCxHQUFHO1FBQ0QsVUFBVSxRQUFRO2VBQ1gsV0FBVyxRQUFRLGFBQWE7TUFDekMsT0FBTzs7Ozs7RUFLWCxTQUFTLFVBQVUsR0FBRztJQUNwQjtNQUNFLE9BQU8sZ0JBQWdCLFdBQVcsYUFBYTtNQUMvQyxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sUUFBUSxFQUFFLGFBQWEsS0FBSyxPQUFPLEVBQUUsYUFBYTs7OztFQUkxRixTQUFTLFlBQVksV0FBVztJQUM5QixJQUFJLFNBQVMsT0FBTztJQUNwQixJQUFJLFFBQVE7TUFDVixPQUFPLFlBQVk7V0FDZDtNQUNMLE9BQU8sYUFBYSxTQUFTLElBQUksT0FBTyxjQUFjLFlBQVksYUFBYTs7SUFFakYsT0FBTzs7O0VBR1QsU0FBUyxTQUFTLElBQUksV0FBVztJQUMvQixJQUFJLFVBQVUsR0FBRztJQUNqQixJQUFJLENBQUMsUUFBUSxRQUFRO01BQ25CLEdBQUcsWUFBWTtXQUNWLElBQUksQ0FBQyxZQUFZLFdBQVcsS0FBSyxVQUFVO01BQ2hELEdBQUcsYUFBYSxNQUFNOzs7O0VBSTFCLFNBQVMsUUFBUSxJQUFJLFdBQVc7SUFDOUIsR0FBRyxZQUFZLEdBQUcsVUFBVSxRQUFRLFlBQVksWUFBWSxLQUFLOzs7RUFHbkUsU0FBUyxTQUFTLElBQUksV0FBVztJQUMvQixPQUFPLENBQUMsTUFBTSxHQUFHLFlBQVksS0FBSyxRQUFRLE1BQU0sWUFBWSxPQUFPLENBQUM7OztFQUd0RSxTQUFTLGFBQWEsR0FBRzs7OztJQUl2QixJQUFJLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxRQUFRO01BQzdDLE9BQU8sRUFBRSxjQUFjOztJQUV6QixJQUFJLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxRQUFRO01BQy9DLE9BQU8sRUFBRSxlQUFlOztJQUUxQixPQUFPOzs7RUFHVCxTQUFTLFNBQVMsT0FBTyxHQUFHO0lBQzFCLElBQUksT0FBTyxhQUFhO0lBQ3hCLElBQUksVUFBVTtNQUNaLE9BQU87TUFDUCxPQUFPOztJQUVULElBQUksU0FBUyxXQUFXLEVBQUUsU0FBUyxTQUFTLFFBQVEsVUFBVSxNQUFNO01BQ2xFLFFBQVEsUUFBUTs7SUFFbEIsT0FBTyxLQUFLOzs7RUFHZCxTQUFTLGFBQWEsTUFBTTtJQUMxQixPQUFPLEtBQUssVUFBVSxLQUFLLFFBQVEsS0FBSzs7O0VBRzFDLFNBQVMsY0FBYyxNQUFNO0lBQzNCLE9BQU8sS0FBSyxXQUFXLEtBQUssU0FBUyxLQUFLOzs7RUFHNUMsU0FBUyxXQUFXLE9BQU8sUUFBUTtJQUNqQyxPQUFPLE1BQU0sVUFBVSxRQUFRLEtBQUssUUFBUSxRQUFRLFFBQVEsWUFBWTs7O0VBRzFFLFNBQVMsVUFBVSxRQUFRLEdBQUc7SUFDNUIsSUFBSSxPQUFPLGVBQWU7TUFDeEIsT0FBTyxjQUFjO1dBQ2hCO01BQ0wsT0FBTyxVQUFVLE9BQU8sRUFBRSxXQUFXOzs7OztBQUszQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCYXNpYycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0Jhc2ljJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICB9XSk7XG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCYXNpY01vZGVsJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XG4gICAgICBjb250ZW50OiAnTW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgICRzY29wZS5pdGVtczIgPSBbe1xuICAgICAgY29udGVudDogJ0l0ZW0gNSdcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA2J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDcnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gOCdcbiAgICB9XTtcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKTtcbiAgICBkcmFndWxhclNlcnZpY2UoW2NvbnRhaW5lcnNbMF0sY29udGFpbmVyc1sxXV0se1xuICAgICAgY29udGFpbmVyc01vZGVsOiBbJHNjb3BlLml0ZW1zMSwgJHNjb3BlLml0ZW1zMl1cbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQm91bmRpbmdCb3gnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSAkZWxlbWVudFswXTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgYm91bmRpbmdCb3g6IGJvdW5kaW5nQm94XG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0JvdW5kaW5nQm94TG9ja1gnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKClbMF07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKGJvdW5kaW5nQm94LCB7XG4gICAgICBib3VuZGluZ0JveDogYm91bmRpbmdCb3gsXG4gICAgICBsb2NrWDogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCb3VuZGluZ0JveExvY2tZJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5jaGlsZHJlbigpWzBdO1xuICAgIGRyYWd1bGFyU2VydmljZShib3VuZGluZ0JveCwge1xuICAgICAgYm91bmRpbmdCb3g6IGJvdW5kaW5nQm94LFxuICAgICAgbG9ja1k6IHRydWVcbiAgICB9KTtcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0NvcHknLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgY29weTogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdDb3B5TW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XG4gICAgICBjb250ZW50OiAnSXRlbSA1J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDYnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA4J1xuICAgIH1dO1xuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpO1xuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXSxcbiAgICAgIGNvcHk6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQ3VzdG9tQ2xhc3NlcycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1pcnJvcjogJ2N1c3RvbS1ncmVlbi1taXJyb3InXG4gICAgICB9XG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignRGlyZWN0aXZlJywgWyckc2NvcGUnLCBmdW5jdGlvbiBEaXJlY3RpdmVDdHJsKCRzY29wZSkge1xuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1pcnJvcjogJ2N1c3RvbS1ncmVlbi1taXJyb3InXG4gICAgICB9LFxuICAgICAgbmFtZVNwYWNlOiAnc2FtZScgLy8ganVzdCBjb25uZWN0aW5nIGxlZnQgYW5kIHJpZ2h0IGNvbnRhaW5lclxuICAgIH07XG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0RpcmVjdGl2ZU1vZGVsJywgWyckc2NvcGUnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUpIHtcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XG4gICAgICBjb250ZW50OiAnSXRlbSA1J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDYnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA4J1xuICAgIH1dO1xuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XG4gICAgICBjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtczEsXG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1pcnJvcjogJ2N1c3RvbS1ncmVlbi1taXJyb3InXG4gICAgICB9LFxuICAgICAgbmFtZVNwYWNlOiAnY29tbW9uJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXG4gICAgfTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuIC5jb250cm9sbGVyKCdEcmFnT3ZlckNsYXNzZXMnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0sICRlbGVtZW50LmNoaWxkcmVuKClbMl1dLCB7XG4gICAgICBuYW1lU3BhY2U6ICdhcHBsZXMnLFxuICAgICAgZHJhZ092ZXJDbGFzc2VzOiB0cnVlXG4gICAgfSk7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzFdLCAkZWxlbWVudC5jaGlsZHJlbigpWzNdXSwge1xuICAgICAgbmFtZVNwYWNlOiAnb3JhbmdlcycsXG4gICAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignRXZlbnRzJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlLCAkdGltZW91dCkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBzY29wZTogJHNjb3BlXG4gICAgfSk7XG4gICAgJHNjb3BlLiRvbignZHJhZycsIGZ1bmN0aW9uKGUsIGVsKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoJyBleC1tb3ZlZCcsICcnKTtcbiAgICB9KTtcbiAgICAkc2NvcGUuJG9uKCdkcm9wJywgZnVuY3Rpb24oZSwgZWwpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgZXgtbW92ZWQnO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG5cbiAgICAvLyAkc2NvcGUuJG9uKCdjbG9uZWQnLCBteUZuKCdjbG9uZWQnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignZHJhZycsIG15Rm4oJ2RyYWcnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignY2FuY2VsJywgbXlGbignY2FuY2VsJykpO1xuICAgIC8vICRzY29wZS4kb24oJ2Ryb3AnLCBteUZuKCdkcm9wJykpO1xuICAgIC8vICRzY29wZS4kb24oJ3JlbW92ZScsIG15Rm4oJ3JlbW92ZScpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdkcmFnZW5kJywgbXlGbignZHJhZ2VuZCcpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdzaGFkb3cnLCBteUZuKCdzaGFkb3cnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignc2hhZG93UmVtb3ZlZCcsIG15Rm4oJ3NoYWRvdycpKTtcblxuICAgIC8vIGZ1bmN0aW9uIG15Rm4oZXZlbnROYW1lKSB7XG4gICAgLy8gICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSwgYXJndW1lbnRzKTtcbiAgICAvLyAgIH07XG4gICAgLy8gfVxuXG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0hhbmRsZScsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NOYW1lID09PSAnaGFuZGxlJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmFtZVNwYWNlcycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcbiAgICAgIG5hbWVTcGFjZTogJ2FwcGxlcydcbiAgICB9KTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVsxXSwge1xuICAgICAgbmFtZVNwYWNlOiAnb3JhbmdlcydcbiAgICB9KTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVszXSwgeyAvLyBtaXhlZFxuICAgICAgbmFtZVNwYWNlOiBbJ29yYW5nZXMnLCAnYXBwbGVzJ11cbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmVzdGVkTmdSZXBlYXQnLCBbJyR0aW1lb3V0JywgJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkdGltZW91dCwgJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIHRpbWVvdW50IGR1ZSB0byBuZ1JlcGVhdCB0byBiZSByZWFkeVxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucygncm93LWhhbmRsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gICAgJHNjb3BlLml0ZW1zID0gW3tcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGEzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhNCdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIxJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGI0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzQnXG4gICAgICB9XVxuICAgIH1dO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbCcsIFsnJHRpbWVvdXQnLCAnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCR0aW1lb3V0LCAkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5lc3RlZCBuZ1JlcGVhdCB0byBiZSByZWFkeVxuICAgICAgdmFyIGNvbnRhaW5lciA9ICRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSxcbiAgICAgICAgcGFyZW50Q29udGFpbmVycyA9IGNvbnRhaW5lci5jaGlsZHJlbigpLFxuICAgICAgICBuZXN0ZWRDb250YWluZXJzID0gW107XG5cbiAgICAgIGRyYWd1bGFyU2VydmljZShjb250YWluZXIsIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zXG4gICAgICB9KTtcblxuICAgICAgLy8gY29sbGVjdCBuZXN0ZWQgY29udGlhbmVyc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRDb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMucHVzaChwYXJlbnRDb250YWluZXJzLmVxKGkpLmNoaWxkcmVuKClbMV0pO1xuICAgICAgfVxuXG4gICAgICBkcmFndWxhclNlcnZpY2UobmVzdGVkQ29udGFpbmVycywge1xuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuICFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogKGZ1bmN0aW9uIGdldE5lc3RlZENvbnRhaW5lcnNNb2RlbCgpe1xuICAgICAgICAgIHZhciBwYXJlbnQgPSAkc2NvcGUuaXRlbXMsXG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGFpbmVyc01vZGVsLnB1c2gocGFyZW50W2ldLml0ZW1zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnNNb2RlbDtcbiAgICAgICAgfSkoKVxuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gICAgJHNjb3BlLml0ZW1zID0gW3tcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGEzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhNCdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIxJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGI0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzQnXG4gICAgICB9XVxuICAgIH1dO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZ1JlcGVhdCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgY29udGVudDogJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDInXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSgpIHtcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCwge1xuICAgICAgICBjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArICctY29weSdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmdSZXBlYXRXaXRoTW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgY29udGVudDogJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDInXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksIHtjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc30pO1xuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSgpIHtcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCwge1xuICAgICAgICBjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArICctY29weSdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ1JlbW92ZU9uU3BpbGwnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgcmVtb3ZlT25TcGlsbDogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdSZXZlcnRPblNwaWxsJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIHJldmVydE9uU3BpbGw6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignU2Nyb2xsaW5nRHJhZycsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRpbnRlcnZhbCwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuXG5cbiAgICB2YXIgdGltZXIsXG4gICAgICBsZWZ0U2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRTY3JvbGwnKSxcbiAgICAgIHJpZ2h0U2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0U2Nyb2xsJyksXG4gICAgICBsZWZ0VG9wQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRUb3BCYXInKSxcbiAgICAgIGxlZnRCb3R0b21CYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEJvdHRvbUJhcicpLFxuICAgICAgcmlnaHRUb3BCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHRUb3BCYXInKSxcbiAgICAgIHJpZ2h0Qm90dG9tQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Qm90dG9tQmFyJyk7XG5cbiAgICBkcmFndWxhclNlcnZpY2UoW2xlZnRTY3JvbGwsIHJpZ2h0U2Nyb2xsXSwge1xuICAgICAgc2NvcGU6ICRzY29wZVxuICAgIH0pO1xuXG4gICAgcmVnaXN0ZXJFdmVudHMobGVmdFRvcEJhciwgbGVmdFNjcm9sbCwgLTUpO1xuICAgIHJlZ2lzdGVyRXZlbnRzKGxlZnRCb3R0b21CYXIsIGxlZnRTY3JvbGwsIDUpO1xuICAgIHJlZ2lzdGVyRXZlbnRzKHJpZ2h0VG9wQmFyLCByaWdodFNjcm9sbCwgLTUpO1xuICAgIHJlZ2lzdGVyRXZlbnRzKHJpZ2h0Qm90dG9tQmFyLCByaWdodFNjcm9sbCwgNSk7XG5cbiAgICBmdW5jdGlvbiByZWdpc3RlckV2ZW50cyhiYXIsIGNvbnRhaW5lciwgaW5jLCBzcGVlZCkge1xuICAgICAgaWYgKCFzcGVlZCkge1xuICAgICAgICBzcGVlZCA9IDIwO1xuICAgICAgfVxuICAgICAgYW5ndWxhci5lbGVtZW50KGJhcikub24oJ2RyYWd1bGFyZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCArPSBpbmM7XG4gICAgICAgIHRpbWVyID0gJGludGVydmFsKGZ1bmN0aW9uIG1vdmVTY3JvbGwoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RpY2snLCBiYXIsIGNvbnRhaW5lciwgaW5jKTtcbiAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wICs9IGluYztcbiAgICAgICAgfSwgc3BlZWQpO1xuICAgICAgfSk7XG4gICAgICBhbmd1bGFyLmVsZW1lbnQoYmFyKS5vbignZHJhZ3VsYXJsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHRpbWVyKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGluIGNhc2UgeW91IHJlbGVhc2UgZHJhZyBvdmVyIGJhclxuICAgICRzY29wZS4kb24oJ3JlbGVhc2UnLCBmdW5jdGlvbiBzdG9wU2Nyb2xsICgpIHtcbiAgICBcdCRpbnRlcnZhbC5jYW5jZWwodGltZXIpO1xuICAgIH0pO1xuXG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyLCBobGpzICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIHZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xuXG5cbnJlcXVpcmUoJy4uLy4uLy4uL3NyYy9kcmFndWxhck1vZHVsZScpO1xucmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblxuLyoqXG4gKiAgTW9kdWxlIEV4YW1wbGUgQXBwXG4gKlxuICogIERFTU8gYXBwIGZvciBkcmFndWxhciBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhclxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2V4YW1wbGVzQXBwJywgWydkcmFndWxhck1vZHVsZScsICd0ZW1wbGF0ZXMnLCAndWkucm91dGVyJ10pLmNvbnRyb2xsZXIoJ0V4QXBwQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLmV4YW1wbGVzTGlzdCA9IFt7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJhc2ljL2V4YW1wbGVCYXNpYy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCYXNpYycsXG4gICAgICAgIHRpdGxlOiAnQmFzaWMnXG4gICAgfSx7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCYXNpY1dpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnQmFzaWMgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRGlyZWN0aXZlL2V4YW1wbGVEaXJlY3RpdmUuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRGlyZWN0aXZlJyxcbiAgICAgICAgdGl0bGU6ICdEaXJlY3RpdmUnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ0RpcmVjdGl2ZSAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVFdmVudHMvZXhhbXBsZUV2ZW50cy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVFdmVudHMnLFxuICAgICAgICB0aXRsZTogJ0V2ZW50cydcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlUmVtb3ZlT25TcGlsbCcsXG4gICAgICAgIHRpdGxlOiAnUmVtb3ZlIG9uIHNwaWxsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVSZXZlcnRPblNwaWxsJyxcbiAgICAgICAgdGl0bGU6ICdSZXZlcnQgb24gc3BpbGwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVDb3B5L2V4YW1wbGVDb3B5Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUNvcHknLFxuICAgICAgICB0aXRsZTogJ0NvcHknXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVDb3B5V2l0aE1vZGVsL2V4YW1wbGVDb3B5V2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUNvcHlXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ0NvcHkgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlSGFuZGxlL2V4YW1wbGVIYW5kbGUuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlSGFuZGxlJyxcbiAgICAgICAgdGl0bGU6ICdIYW5kbGUnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUN1c3RvbUNsYXNzZXMnLFxuICAgICAgICB0aXRsZTogJ0N1c3RvbSBjbGFzc2VzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmFtZVNwYWNlcy9leGFtcGxlTmFtZVNwYWNlcy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOYW1lU3BhY2VzJyxcbiAgICAgICAgdGl0bGU6ICdOYW1lU3BhY2VzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRHJhZ092ZXJDbGFzc2VzL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRHJhZ092ZXJDbGFzc2VzJyxcbiAgICAgICAgdGl0bGU6ICdEcmFnT3ZlciBjbGFzc2VzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQm91bmRpbmdCb3gvZXhhbXBsZUJvdW5kaW5nQm94Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJvdW5kaW5nQm94JyxcbiAgICAgICAgdGl0bGU6ICdCb3VuZGluZ0JveCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1guaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWCcsXG4gICAgICAgIHRpdGxlOiAnQm91bmRpbmdCb3ggKyBMb2NrWCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWScsXG4gICAgICAgIHRpdGxlOiAnQm91bmRpbmdCb3ggKyBMb2NrWSdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5nUmVwZWF0L2V4YW1wbGVOZ1JlcGVhdC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZ1JlcGVhdCcsXG4gICAgICAgIHRpdGxlOiAnbmdSZXBlYXQnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ25nUmVwZWF0IC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0L2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZXN0ZWROZ1JlcGVhdCcsXG4gICAgICAgIHRpdGxlOiAnTmVzdGVkIG5nUmVwZWFkJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICdOZXN0ZWQgbmdSZXBlYWQgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlU2Nyb2xsaW5nRHJhZy9leGFtcGxlU2Nyb2xsaW5nRHJhZy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVTY3JvbGxpbmdEcmFnJyxcbiAgICAgICAgdGl0bGU6ICdTY3JvbGxpbmcgZHJhZydcbiAgICB9XTtcblxuICAgIC8vIGRlZmF1bHQgdGVtcGxhdGUgbG9hZGVkIGZpcnN0IHRpbWVcbiAgICAkc2NvcGUuZXhhbXBsZVRlbXBsYXRlID0gJ2V4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuaHRtbCc7XG5cbiAgICAkc2NvcGUuaGlnaGxpZ2h0Q29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgdmFyIGNvZGVCbG9ja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY29kZScpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNvZGVCbG9ja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGNvZGVCbG9ja3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByb3dPZmZjYW52YXMgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvd09mZmNhbnZhcycpKTtcbiAgICAkc2NvcGUudG9nZ2xlU2lkZWJhciA9IGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIgKCkge1xuICAgICAgICByb3dPZmZjYW52YXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH07XG5cbn1dKTtcblxuKHtcImV4YW1wbGVCYXNpY1wiOih7XCJleGFtcGxlQmFzaWNcIjpyZXF1aXJlKFwiLi9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzXCIpfSksXCJleGFtcGxlQmFzaWNXaXRoTW9kZWxcIjooe1wiZXhhbXBsZUJhc2ljV2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZUJvdW5kaW5nQm94XCI6KHtcImV4YW1wbGVCb3VuZGluZ0JveFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanNcIil9KSxcImV4YW1wbGVCb3VuZGluZ0JveExvY2tYXCI6KHtcImV4YW1wbGVCb3VuZGluZ0JveExvY2tYXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1guanNcIil9KSxcImV4YW1wbGVCb3VuZGluZ0JveExvY2tZXCI6KHtcImV4YW1wbGVCb3VuZGluZ0JveExvY2tZXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kuanNcIil9KSxcImV4YW1wbGVDb3B5XCI6KHtcImV4YW1wbGVDb3B5XCI6cmVxdWlyZShcIi4vZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanNcIil9KSxcImV4YW1wbGVDb3B5V2l0aE1vZGVsXCI6KHtcImV4YW1wbGVDb3B5V2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZUNvcHlXaXRoTW9kZWwvZXhhbXBsZUNvcHlXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVDdXN0b21DbGFzc2VzXCI6KHtcImV4YW1wbGVDdXN0b21DbGFzc2VzXCI6cmVxdWlyZShcIi4vZXhhbXBsZUN1c3RvbUNsYXNzZXMvZXhhbXBsZUN1c3RvbUNsYXNzZXMuanNcIil9KSxcImV4YW1wbGVEaXJlY3RpdmVcIjooe1wiZXhhbXBsZURpcmVjdGl2ZVwiOnJlcXVpcmUoXCIuL2V4YW1wbGVEaXJlY3RpdmUvZXhhbXBsZURpcmVjdGl2ZS5qc1wiKX0pLFwiZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbFwiOih7XCJleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlRHJhZ092ZXJDbGFzc2VzXCI6KHtcImV4YW1wbGVEcmFnT3ZlckNsYXNzZXNcIjpyZXF1aXJlKFwiLi9leGFtcGxlRHJhZ092ZXJDbGFzc2VzL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMuanNcIil9KSxcImV4YW1wbGVFdmVudHNcIjooe1wiZXhhbXBsZUV2ZW50c1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVFdmVudHMvZXhhbXBsZUV2ZW50cy5qc1wiKX0pLFwiZXhhbXBsZUhhbmRsZVwiOih7XCJleGFtcGxlSGFuZGxlXCI6cmVxdWlyZShcIi4vZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzXCIpfSksXCJleGFtcGxlTmFtZVNwYWNlc1wiOih7XCJleGFtcGxlTmFtZVNwYWNlc1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVOYW1lU3BhY2VzL2V4YW1wbGVOYW1lU3BhY2VzLmpzXCIpfSksXCJleGFtcGxlTmVzdGVkTmdSZXBlYXRcIjooe1wiZXhhbXBsZU5lc3RlZE5nUmVwZWF0XCI6cmVxdWlyZShcIi4vZXhhbXBsZU5lc3RlZE5nUmVwZWF0L2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC5qc1wiKX0pLFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXCI6KHtcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVOZ1JlcGVhdFwiOih7XCJleGFtcGxlTmdSZXBlYXRcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmdSZXBlYXQvZXhhbXBsZU5nUmVwZWF0LmpzXCIpfSksXCJleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWxcIjooe1wiZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZVJlbW92ZU9uU3BpbGxcIjooe1wiZXhhbXBsZVJlbW92ZU9uU3BpbGxcIjpyZXF1aXJlKFwiLi9leGFtcGxlUmVtb3ZlT25TcGlsbC9leGFtcGxlUmVtb3ZlT25TcGlsbC5qc1wiKX0pLFwiZXhhbXBsZVJldmVydE9uU3BpbGxcIjooe1wiZXhhbXBsZVJldmVydE9uU3BpbGxcIjpyZXF1aXJlKFwiLi9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qc1wiKX0pLFwiZXhhbXBsZVNjcm9sbGluZ0RyYWdcIjooe1wiZXhhbXBsZVNjcm9sbGluZ0RyYWdcIjpyZXF1aXJlKFwiLi9leGFtcGxlU2Nyb2xsaW5nRHJhZy9leGFtcGxlU2Nyb2xsaW5nRHJhZy5qc1wiKX0pLFwiZXhhbXBsZXNSb3V0ZXJcIjpyZXF1aXJlKFwiLi9leGFtcGxlc1JvdXRlci5qc1wiKSxcInRlbXBsYXRlc1wiOnJlcXVpcmUoXCIuL3RlbXBsYXRlcy5qc1wiKX0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgIHVybDogJy9ob21lJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWhvbWUuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2RvY3MnLCB7XG4gICAgICAgIHVybDogJy9kb2NzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWRvY3MuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc3RhdGUpIHtcbiAgICAgICAgICAvLyBnbyB0byBpbnN0YWxsIG5vdGVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICAkc3RhdGUuZ28oJ2RvY3MuZGV0YWlsJywge2xpbms6ICdleGFtcGxlU2Nyb2xsaW5nRHJhZyd9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnZG9jcy5kZXRhaWwnLCB7XG4gICAgICAgIHVybDogJy86bGluaycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICByZXR1cm4gJHN0YXRlUGFyYW1zLmxpbmsgKyAnLycgKyAkc3RhdGVQYXJhbXMubGluayArICcuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbnRyaWJ1dGUnLCB7XG4gICAgICAgIHVybDogJy9jb250cmlidXRlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWNvbnRyaWJ1dGUuaHRtbCdcbiAgICAgIH0pO1xuICB9KTtcbiIsIid1c2Ugc3RyaWN0JzsgbW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiZG9jc0luc3RhbGwvZG9jc0luc3RhbGwuaHRtbFwiLFwiPGgyPkluc3RhbGw8L2gyPlxcbjxwPmRvd25sb2FkIGRyYWd1bGFyLmpzIGFuZCBkcmFndWxhci5jc3MgZnJvbSBkaXN0IGZvbGRlcjwvcD5cXG48cD5PUiBjbG9uZSBnaXQ8L3A+XFxuPHByZT48Y29kZT5cXG5naXQgY2xvbmUgaHR0cDovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhci5naXRcXG48L2NvZGU+PC9wcmU+XFxuPHA+T1IgdXNlIG5wbTwvcD5cXG48cHJlPjxjb2RlPlxcbltzdWRvXSBucG0gaW5zdGFsbCBkcmFndWxhclxcbjwvY29kZT48L3ByZT5cXG48cD5PUiB1c2UgYm93ZXI8L3A+XFxuPHByZT48Y29kZT5cXG5ib3dlciBpbnN0YWxsIGRyYWd1bGFyXFxuPC9jb2RlPjwvcHJlPlxcbjxwPkFORCBpbmNsdWRlIGZpbGVzIGludG8geW91ciBwcm9qZWN0PC9wPlxcbjxwcmU+PGNvZGU+XFxuJmx0O2xpbmsgaHJlZj1cXCdzdHlsZXMvZHJhZ3VsYXIuY3NzXFwnIHJlbD1cXCdzdHlsZXNoZWV0XFwnIHR5cGU9XFwndGV4dC9jc3NcXCcgLyZndDtcXG4mbHQ7c2NyaXB0IHNyYz1cXCdzY3JpcHRzL2RyYWd1bGFyLmpzXFwnJmd0OyZsdDsvc2NyaXB0Jmd0O1xcbjwvY29kZT48L3ByZT5cXG48cD5BTkQgcHV0IGRyYWd1bGFyTW9kdWxlIGludG8gZGVwZW5kZW5jeSBhcnJheTwvcD5cXG48cHJlPjxjb2RlPlxcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcXCdteUFwcFxcJywgW1xcJ2RyYWd1bGFyTW9kdWxlXFwnLCBcXCdvdGhlckRlcGVuZGVuY2llc1xcJ10pO1xcbjwvY29kZT48L3ByZT5cXG48cD5ET05FIDopPC9wPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+QmFzaWM8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlIHN0dWZmIGJldHdlZW4gdGhlc2UgdHdvIGNvbnRhaW5lcnMuIE5vdGUgaG93IHRoZSBzdHVmZiBnZXRzIGluc2VydGVkIG5lYXIgdGhlIG1vdXNlIHBvaW50ZXI/IEdyZWF0IHN0dWZmLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQmFzaWNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdCYXNpY1xcJywgW1xcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtCYXNpYyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNi4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O1lvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDQuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5CYXNpYyAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlIHN0dWZmIGJldHdlZW4gdGhlc2UgdHdvIGNvbnRhaW5lcnMuIE5vdGUgaG93IHRoZSBzdHVmZiBnZXRzIGluc2VydGVkIG5lYXIgdGhlIG1vdXNlIHBvaW50ZXI/IEdyZWF0IHN0dWZmLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQmFzaWNNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczJcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPHByZT5JdGVtczE6XFxuICAgICAgICAgIDxici8+e3tpdGVtczEgfCBqc29ufX08L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPHByZT5JdGVtczI6XFxuICAgICAgICAgIDxici8+e3tpdGVtczIgfCBqc29ufX08L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdCYXNpY01vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XFxuICAgICAgY29udGVudDogXFwnTW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXFxcXFwnbGwganVzdCBjb21lIGJhY2suXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA1XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDZcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gN1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA4XFwnXFxuICAgIH1dO1xcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcXG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXVxcbiAgICB9KTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0Jhc2ljJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMSZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczImcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3RhYmxlUm93JnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXImcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiZndDtJdGVtczE6XFxuICAgICAgICAgICAgICAgICZsdDtici8mZ3Q7e3tpdGVtczEgfCBqc29ufX0mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXImcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiZndDtJdGVtczI6XFxuICAgICAgICAgICAgICAgICZsdDtici8mZ3Q7e3tpdGVtczIgfCBqc29ufX0mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQm91bmRpbmdCb3gvZXhhbXBsZUJvdW5kaW5nQm94Lmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPkJvdW5kaW5nQm94PC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPllvdSBjYW4gcHJvdmlkZSBlbGVtZW50IGluIG9wdGlvbnMuYm91bmRpbmdCb3ggdG8gbGltaXQgY3Jvc3NpbmcgZWxlbWVudCBib3JkZXJzLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJvdW5kaW5nQm94XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBpdGVtcyBjYW5ub3QgY3Jvc3MgaXRzIGV4YW1wbGUgZWxlbWVudCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGl0ZW1zIGNhbm5vdCBjcm9zcyBpdHMgZXhhbXBsZSBlbGVtZW50LCBqdXN0IHRyeSBpdCB5b3VyIHNlbHZlcy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xcbiAgICBib3VuZGluZ0JveDogJGVsZW1lbnRcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1guaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPkJvdW5kaW5nQm94IGFuZCBsb2NrWDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlbWVudCBjYW4gYmUgbG9ja2VkIHRvIFggb3IgWSBheGlzIGFuZCBhbHNvIHlvdSBjYW4gcHJvdmlkZSBlbGVtZW50IGluIG9wdGlvbnMuYm91bmRpbmdCb3ggdG8gbGltaXQgY3Jvc3NpbmcgZWxlbWVudCBib3JkZXJzLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJvdW5kaW5nQm94TG9ja1hcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lckhvcml6b250YWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2JvdW5kaW5nQm94XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoMjVcXFwiPkl0ZW1zIGFyZSBsb2NrZWQgaW4gWCBheGlzIG1vdmVtZW50IGFuZCBjYW5ub3QgY3Jvc3MgaXRzIGNsb3Nlc3QgcGFyZW50IGRpdi5ib3VuZGluZ0JveCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+aXRlbSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+aXRlbSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+aXRlbSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLmNoaWxkcmVuKCksIHtcXG4gICAgYm91bmRpbmdCb3g6ICRlbGVtZW50LmNoaWxkcmVuKClbMF0sXFxuICAgIGxvY2tYOiB0cnVlXFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPkJvdW5kaW5nQm94IGFuZCBMb2NrWTwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlbWVudCBjYW4gYmUgbG9ja2VkIHRvIFggb3IgWSBheGlzIGFuZCBhbHNvIHlvdSBjYW4gcHJvdmlkZSBlbGVtZW50IGluIG9wdGlvbnMuYm91bmRpbmdCb3ggdG8gbGltaXQgY3Jvc3NpbmcgZWxlbWVudCBib3JkZXJzLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJvdW5kaW5nQm94TG9ja1lcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdib3VuZGluZ0JveFxcJz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW1zIGFyZSBsb2NrZWQgaW4gWSBheGlzIG1vdmVtZW50IGFuZCBjYW5ub3QgY3Jvc3MgaXRzIGNsb3Nlc3QgcGFyZW50IGRpdi5ib3VuZGluZ0JveCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gNjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXS5jaGlsZHJlbigpLCB7XFxuICAgIGJvdW5kaW5nQm94OiAkZWxlbWVudC5jaGlsZHJlbigpWzBdLFxcbiAgICBsb2NrWTogdHJ1ZVxcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQ29weS9leGFtcGxlQ29weS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5Db3B5PC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+Q29weWluZyBzdHVmZiBpcyBncmVhdCB0b28uPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJDb3B5XFxcIiBuZy1oaWRlPVxcXCJnbG9iYWxzLnNob3dNb2RlbEV4YW1wbGVzXFxcIj5cXG4gICAgPGRpdiBpZD1cXCdsZWZ0MlxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICA8ZGl2Pk1vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC48L2Rpdj5cXG4gICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcJ3JpZ2h0MlxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0NvcHlcXCcsIFtcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XFxuICAgICAgY29weTogdHJ1ZVxcbiAgICB9KTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0NvcHkmcXVvdDsgbmctaGlkZT0mcXVvdDtnbG9iYWxzLnNob3dNb2RlbEV4YW1wbGVzJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGlkPVxcJ2xlZnQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7TW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgaWQ9XFwncmlnaHQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUNvcHlXaXRoTW9kZWwvZXhhbXBsZUNvcHlXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+Q29weSAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Db3B5aW5nIHN0dWZmIGlzIGdyZWF0IHRvby48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkNvcHlNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczJcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczE6XFxuICAgICAgICAgIDxici8+e3tpdGVtczEgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczI6XFxuICAgICAgICAgIDxici8+e3tpdGVtczIgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdDb3B5TW9kZWxcXCcsIFtcXCckc2NvcGVcXCcsIFxcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcXFxcXCdsbCBqdXN0IGNvbWUgYmFjay5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICAgIH1dO1xcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDVcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA3XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDhcXCdcXG4gICAgfV07XFxuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xcbiAgICBkcmFndWxhclNlcnZpY2UoW2NvbnRhaW5lcnNbMF0sY29udGFpbmVyc1sxXV0se1xcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogWyRzY29wZS5pdGVtczEsICRzY29wZS5pdGVtczJdLFxcbiAgICAgIGNvcHk6IHRydWVcXG4gICAgfSk7XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtDb3B5TW9kZWwmcXVvdDsgbmctc2hvdz0mcXVvdDtnbG9iYWxzLnNob3dNb2RlbEV4YW1wbGVzJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnJmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMSZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMyJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7dGFibGVSb3cmcXVvdDsmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXImcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMTpcXG4gICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMSB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyJnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtczI6XFxuICAgICAgICAgICZsdDtici8mZ3Q7e3tpdGVtczIgfCBqc29ufX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQ3VzdG9tQ2xhc3Nlcy9leGFtcGxlQ3VzdG9tQ2xhc3Nlcy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPkN1c3RvbSBjbGFzc2VzPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Zb3UgY2FuIG92ZXJ3cml0ZSBidWlsZGluIGNsYXNzZXMgYnkgcHJvdmlkaW5nIGNsYXNzZXMgbmFtZXMgaW4gb2JqZWN0IHZpYSBvcHRpb25zLmNsYXNzZXMuPC9sYWJlbD5cXG4gICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkN1c3RvbUNsYXNzZXNcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXCdsZWZ0NFxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgaWQ9XFwncmlnaHQzXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVmdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZ2h0KV0sIHsgY2xhc3Nlczoge1xcbiAgICBtaXJyb3I6IFxcJ2N1c3RvbS1ncmVlbi1taXJyb3JcXCdcXG4gIH0gfSk7XFxuXFxuICAvLyBEZWZhdWx0IGNsYXNzZXMgYXJlOlxcbiAgb3B0aW9uLmNsYXNzZXMgPSB7XFxuICAgIG1pcnJvcjogXFwnZ3UtbWlycm9yXFwnLFxcbiAgICBoaWRlOiBcXCdndS1oaWRlXFwnLFxcbiAgICB1bnNlbGVjdGFibGU6IFxcJ2d1LXVuc2VsZWN0YWJsZVxcJyxcXG4gICAgdHJhbnNpdDogXFwnZ3UtdHJhbnNpdFxcJyxcXG4gICAgb3ZlckFjdGl2ZTogXFwnZ3Utb3Zlci1hY3RpdmVcXCcsXFxuICAgIG92ZXJBY2NlcHRzOiBcXCdndS1vdmVyLWFjY2VwdFxcJyxcXG4gICAgb3ZlckRlY2xpbmVzOiBcXCdndS1vdmVyLWRlY2xpbmVcXCdcXG4gIH07XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkRpcmVjdGl2ZTwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPlNhbWUgYXMgY3VzdG9tIGNsYXNzZXMgZXhhbXBsZSwgYnV0IHNob3dpbmcgdXNlIG9mIGRpcmVjdGl2ZS48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkRpcmVjdGl2ZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFxcImRyYWd1bGFyT3B0aW9uc1xcXCI+XFxuICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXCd7XFxcImNsYXNzZXNcXFwiOntcXFwibWlycm9yXFxcIjpcXFwiY3VzdG9tLWdyZWVuLW1pcnJvclxcXCJ9LFxcXCJuYW1lU3BhY2VcXFwiOlxcXCJzYW1lXFxcIn1cXCc+XFxuICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdEaXJlY3RpdmVcXCcsIFtcXCckc2NvcGVcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlKSB7XFxuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XFxuICAgICAgY2xhc3Nlczoge1xcbiAgICAgICAgbWlycm9yOiBcXCdjdXN0b20tZ3JlZW4tbWlycm9yXFwnXFxuICAgICAgfSxcXG4gICAgICBuYW1lU3BhY2U6IFxcJ2NvbW1vblxcJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXFxuICAgIH07XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtEaXJlY3RpdmUmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9JnF1b3Q7ZHJhZ3VsYXJPcHRpb25zJnF1b3Q7Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gMy4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNi4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFwneyZxdW90O2NsYXNzZXMmcXVvdDs6eyZxdW90O21pcnJvciZxdW90OzomcXVvdDtjdXN0b20tZ3JlZW4tbWlycm9yJnF1b3Q7fSwmcXVvdDtuYW1lU3BhY2UmcXVvdDs6JnF1b3Q7c2FtZSZxdW90O31cXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtZb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNC4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsL2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+RGlyZWN0aXZlIC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPlNhbWUgYXMgY3VzdG9tIGNsYXNzZXMgZXhhbXBsZSwgYnV0IHNob3dpbmcgdXNlIG9mIGRpcmVjdGl2ZS48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkRpcmVjdGl2ZU1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcXCJkcmFndWxhck9wdGlvbnNcXFwiPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMxXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXCd7XFxcImNvbnRhaW5lcnNNb2RlbFxcXCI6XFxcIml0ZW1zMlxcXCIsXFxcImNsYXNzZXNcXFwiOntcXFwibWlycm9yXFxcIjpcXFwiY3VzdG9tLWdyZWVuLW1pcnJvclxcXCJ9LFxcXCJuYW1lU3BhY2VcXFwiOlxcXCJjb21tb25cXFwifVxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMlxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zMTpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMSB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zMjpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMiB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgXFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdEaXJlY3RpdmVNb2RlbFxcJywgW1xcJyRzY29wZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlKSB7XFxuICAgICRzY29wZS5pdGVtczEgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFxcXFxcJ2xsIGp1c3QgY29tZSBiYWNrLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gICAgfV07XFxuICAgICRzY29wZS5pdGVtczIgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA2XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDdcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gOFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcXG4gICAgICBjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtczEsXFxuICAgICAgY2xhc3Nlczoge1xcbiAgICAgICAgbWlycm9yOiBcXCdjdXN0b20tZ3JlZW4tbWlycm9yXFwnXFxuICAgICAgfSxcXG4gICAgICBuYW1lU3BhY2U6IFxcJ2NvbW1vblxcJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXFxuICAgIH07XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4gJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7RGlyZWN0aXZlTW9kZWwmcXVvdDsmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPSZxdW90O2RyYWd1bGFyT3B0aW9ucyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczEmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcJ3smcXVvdDtjb250YWluZXJzTW9kZWwmcXVvdDs6JnF1b3Q7aXRlbXMyJnF1b3Q7LCZxdW90O2NsYXNzZXMmcXVvdDs6eyZxdW90O21pcnJvciZxdW90OzomcXVvdDtjdXN0b20tZ3JlZW4tbWlycm9yJnF1b3Q7fSwmcXVvdDtuYW1lU3BhY2UmcXVvdDs6JnF1b3Q7Y29tbW9uJnF1b3Q7fVxcJyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczImcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkRyYWdPdmVyQ2xhc3NlczwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPllvdSBjYW4gaW50ZXJhY3Qgd2l0aCBkcmFnZ2luZyBlbGVtZW50IGJ5IHNldHRpbmcgZHJhZ092ZXJDbGFzc2VzOnRydWUgaW4gb3B0aW9ucyBhbmQgYWRkaW5nIHBvaW50ZXIgY2xhc3MgKGRlZmF1bHQgaXM6IFxcJ2d1LW92ZXItYWN0aXZlXFwnKSB0byBlbGVtZW50IHlvdSB3YW50IHRvIGJlIGludGVyYWN0aXZlIChnZXR0aW5nIGNsYXNzZXMpLiBVc3VhbGx5IHlvdSB3YW50IHRvIGNvbnRhaW5lcnMgc2hvdyB3aGVhdGhlciB0aGV5IGFjY2VwdHMgZWxlbWVudCBvciBub3QsIGJ1dCB5b3UgY2FuIHVzZSBpdCBhbnl3aGVyZS4gVHJ5IHRvIGRyYWcgb3ZlciB0aGUgbm90LWNvbnRhaW5lciB0b28uPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJEcmFnT3ZlckNsYXNzZXNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5hcHBsZXMgYW5kIG9yYW5nZXMgY2Fubm90IGJlIG1peGVkPC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSAyPC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSAzPC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSA0PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5vcmFuZ2UgMTwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDI8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSAzPC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgNDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnPlxcbiAgICAgIDxkaXY+YXBwbGUgNTwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgNjwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgNzwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgODwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnPlxcbiAgICAgIDxkaXY+b3JhbmdlIDU8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSA2PC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgNzwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDg8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIm5vdENvbnRhaW5lciBndS1vdmVyLWFjdGl2ZVxcXCI+IFRlc3QgYWN0aXZlIGNsYXNzIG9uIE5PVCBjb250YWluZXIuPC9kaXY+XFxuXFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtEcmFnT3ZlckNsYXNzZXMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZXMgYW5kIG9yYW5nZXMgY2Fubm90IGJlIG1peGVkJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZSAyJmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDEmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O29yYW5nZSAyJmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7YXBwbGUgNSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7YXBwbGUgNiZsdDsvZGl2Jmd0O1xcbiAgICAgIC4uLlxcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O29yYW5nZSA1Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtvcmFuZ2UgNiZsdDsvZGl2Jmd0O1xcbiAgICAgIC4uLlxcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgJmx0O2RpdiBjbGFzcz0mcXVvdDtub3RDb250YWluZXImcXVvdDsmZ3Q7IFRlc3QgYWN0aXZlIGNsYXNzIG9uIE5PVCBjb250YWluZXIuJmx0Oy9kaXYmZ3Q7XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcblxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBDU1NcXG4uY29udGFpbmVyLmd1LW92ZXItYWN0aXZlLmd1LW92ZXItYWNjZXB0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY29udGFpbmVyLmd1LW92ZXItYWN0aXZlLmd1LW92ZXItZGVjbGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ub3RDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxufVxcblxcbi5ub3RDb250YWluZXIuZ3Utb3Zlci1hY3RpdmUuZ3Utb3Zlci1kZWNsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcblxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBKU1xcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLCAkZWxlbWVudC5jaGlsZHJlbigpWzJdXSwge1xcbiAgICBuYW1lU3BhY2U6IFxcJ2FwcGxlc1xcJyxcXG4gICAgZHJhZ092ZXJDbGFzc2VzOiB0cnVlXFxuICB9KTtcXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVsxXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVszXV0sIHtcXG4gICAgbmFtZVNwYWNlOiBcXCdvcmFuZ2VzXFwnLFxcbiAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcXG4gIH0pO1xcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRXZlbnRzL2V4YW1wbGVFdmVudHMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgIDxoMj5FdmVudHM8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkFkZCBzb21lIGZhbnRhc3RpYyBldmVudHMhPC9sYWJlbD5cXG4gICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkV2ZW50c1xcXCI+XFxuICAgICAgICA8ZGl2IGlkPVxcJ2xlZnQzXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBpZD1cXCdyaWdodDNcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWZ0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlnaHQpXSwge1xcbiAgICBzY29wZTogJHNjb3BlXFxuICB9KTtcXG4gICRzY29wZS4kb24oXFwnZHJhZ1xcJywgZnVuY3Rpb24oZSwgZWwpIHtcXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcXG4gICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoXFwnIGV4LW1vdmVkXFwnLCBcXCdcXCcpO1xcbiAgfSk7XFxuICAkc2NvcGUuJG9uKFxcJ2Ryb3BcXCcsIGZ1bmN0aW9uKGUsIGVsKSB7XFxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XFxuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xcbiAgICAgIGVsLmNsYXNzTmFtZSArPSBcXCcgZXgtbW92ZWRcXCc7XFxuICAgIH0sIDApO1xcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+SGFuZGxlPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5EcmFnIGhhbmRsZXMgZmxvYXQgeW91ciBjcnVpc2U/PC9sYWJlbD5cXG4gICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkhhbmRsZVxcXCI+XFxuICAgICAgICA8ZGl2IGlkPVxcJ2xlZnQ1XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3M9XFwnaGFuZGxlXFwnPis8L3NwYW4+TW92ZSBtZSwgYnV0IHlvdSBjYW4gdXNlIHRoZSBwbHVzIHNpZ24gdG8gZHJhZyBtZSBhcm91bmQuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgaWQ9XFwncmlnaHQ1XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7XFxuICAgIG1vdmVzOiBmdW5jdGlvbiAoZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc05hbWUgPT09IFxcJ2hhbmRsZVxcJztcXG4gICAgfVxcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+TmFtZVNwYWNlczwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5UcnkgdG8gbWl4IGFwcGxlcyBhbmQgb3Jhbmdlcy4gWW91IGNhbm5vdCBwbGFjZSBhcHBsZXMgaW50byBvcmFuZ2VzLCBidXQgbm90aWNlIHRoYXQgeW91IGNhbiBwbGFjZSBpdCBpbnRvIG1peGVkLiBNaXhlZCBjYW4gYmUgcGxhY2VkIGludG8gYXBwbGVzIGFuZCBvcmFuZ2VzLiBOb3RpY2UgdGhhdCBtaXhlZCBiZWNvbWVzIG9yYW5nZSBvciBhcHBsZSBpZiBwbGFjZWQgaW50byB0aGVpciBjb250YWluZXIuIDxiPlNvIHJlbWVtYmVyIGlmIHlvdSBhcmUgdXNpbmcgbmFtZXNwYWNpbmcsIHRoZW4gaXRlbSBpcyBuYW1lc3BhY2VkIGFjY29yZGluZyB0byBhY3R1YWwgY29udGFpbmVyIGl0IGlzIHBsYWNlZCBpbi4gSWYgeW91IG5lZWQgdG8gaXRlbSBwcmVzZXJ2ZSB0aGllciBzdGF0ZSB5b3UgbmVlZCB0byB1c2UgY2xhc3NlcyBpbiBjb21iaW5hdGlvbiB3aXRoIG9wdGlvbnMuYWNjZXB0cyBhbmQgb3B0aW9uYWxseSBvcHRpb25zLmlzQ29udGFpbmVyLjwvYj4gSXQgZGVwZW5kcyBvbiBzZXR1cC4gKFNlZSA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhci9pc3N1ZXMvOVxcXCI+aXNzdWUgIzk8L2E+Lik8L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJOYW1lU3BhY2VzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj50cnkgdG8gbWl4IG9yYW5nZXMgYW5kIGFwcGxlczwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgNDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5vcmFuZ2UgMTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5vcmFuZ2UgMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5vcmFuZ2UgMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5vcmFuZ2UgNDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA1PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDY8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgNzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA4PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjVcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm1peGVkIDE8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bWl4ZWQgMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm1peGVkIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICA8Y29kZT5cXG5kcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0sICRlbGVtZW50LmNoaWxkcmVuKClbMl1dLCB7XFxuICBuYW1lU3BhY2U6IFxcJ2FwcGxlc1xcJ1xcbn0pO1xcbmRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzFdLCB7XFxuICBuYW1lU3BhY2U6IFxcJ29yYW5nZXNcXCdcXG59KTtcXG5kcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVszXSwgeyAvLyBtaXhlZFxcbiAgbmFtZVNwYWNlOiBbXFwnb3Jhbmdlc1xcJywgXFwnYXBwbGVzXFwnXVxcbn0pO1xcbiAgICAgIDwvY29kZT5cXG4gICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0Lmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+TmVzdGVkIG5nUmVwZWF0PC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz4gWW91IGNhbiBtb3ZlIHdob2xlIHJvd3MgYnkgZ3JhYmluZyByb3cgdGl0bGUsIGFsbCBpdGVtcyBpdCBzZWx2ZXMuIFRyeSBpdCBvdXQhXFxuICAgICAgICA8aHIvPlxcbiAgICAgICAgPGI+T2xkIElFIGRvZXNudCBzdXBwb3J0IEZsZXhpYmxlIEJveCBMYXlvdXQ8L2I+IHNvIGl0IGNhbiBsb29rIHdlaXJkLiBCdXQgaW4gbW9kZXJuIGJyb3dzZXJzIGl0IGlzIGF3c29tZSEgRHJhZ3VsYXIgd2lsbCBiZSB3b3JraW5nIHdlbGwgYWxzbyBpbiBvbGQgSUUgYnV0IHlvdSBoYXZlIHRvIHVzZSBkaWZmZXJlbnQgY3NzIGZvciBsYXlvdXQuXFxuICAgICAgICA8aHIvPlxcbiAgICA8L2xhYmVsPlxcbiAgICA8ZGl2IG5nLWNvbnRyb2xsZXI9XFxcIk5lc3RlZE5nUmVwZWF0XFxcIj5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIiBjbGFzcz1cXCdleGFtcGxlUm93XFwnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdy1oYW5kbGVcXFwiPlJvdyB7eyRpbmRleH19PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbS5pdGVtc1xcXCIgY2xhc3M9XFxcImV4YW1wbGVDZWxsXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIC8vIEhUTUxcXG5cXG4gICZsdDtkaXYgbmctY29udHJvbGxlcj0mcXVvdDtFeGFtcGxlMTUmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMmcXVvdDsgY2xhc3M9XFwnZXhhbXBsZVJvd1xcJyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3Jvdy1oYW5kbGUmcXVvdDsmZ3Q7Um93IHt7JGluZGV4fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW0uaXRlbXMmcXVvdDsgY2xhc3M9JnF1b3Q7ZXhhbXBsZUNlbGwmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAvLyBDU1NcXG5cXG4gIC5leGFtcGxlUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5leGFtcGxlQ2VsbCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gIC5leGFtcGxlUm93LFxcbiAgLmV4YW1wbGVDZWxsIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBjdXJzb3I6IC1tb3otZ3JhYjtcXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICB9XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIC8vIEpTXFxuXFxuICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5nUmVwZWF0IHRvIGJlIHJlYWR5XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudCwge1xcbiAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxcJ3Jvdy1oYW5kbGVcXCcpO1xcbiAgICAgIH1cXG4gICAgfSk7XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XFxuICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgcmV0dXJuICFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxcJ3Jvdy1oYW5kbGVcXCcpO1xcbiAgICAgIH1cXG4gICAgfSk7XFxuICB9LCAwKTtcXG4gICRzY29wZS5pdGVtcyA9IFt7XFxuICAgIGl0ZW1zOiBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTFcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTJcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTRcXCdcXG4gICAgfV1cXG4gIH0sIHtcXG4gICAgaXRlbXM6IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBiMVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBiMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBiM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBiNFxcJ1xcbiAgICB9XVxcbiAgfSwge1xcbiAgICBpdGVtczogW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGMxXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGMyXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGMzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGM0XFwnXFxuICAgIH1dXFxuICB9XTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPk5lc3RlZCBuZ1JlcGVhdCAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz4gWW91IGNhbiBtb3ZlIHdob2xlIHJvd3MgYnkgZ3JhYmluZyByb3cgdGl0bGUsIGFsbCBpdGVtcyBpdCBzZWx2ZXMuIFRyeSBpdCBvdXQhXFxuICAgIDxoci8+XFxuICAgIDxiPk9sZCBJRSBkb2VzbnQgc3VwcG9ydCBGbGV4aWJsZSBCb3ggTGF5b3V0PC9iPiBzbyBpdCBjYW4gbG9vayB3ZWlyZC4gQnV0IGluIG1vZGVybiBicm93c2VycyBpdCBpcyBhd3NvbWUhIERyYWd1bGFyIHdpbGwgYmUgd29ya2luZyB3ZWxsIGFsc28gaW4gb2xkIElFIGJ1dCB5b3UgaGF2ZSB0byB1c2UgZGlmZmVyZW50IGNzcyBmb3IgbGF5b3V0LlxcbiAgICA8aHIvPlxcbiAgPC9sYWJlbD5cXG4gIDxkaXYgbmctY29udHJvbGxlcj1cXFwiTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCIgY2xhc3M9XFwnZXhhbXBsZVJvd1xcJz5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93LWhhbmRsZVxcXCI+Um93IHt7OjokaW5kZXh9fTwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJleGFtcGxlUm93IGV4YW1wbGVDZWxsIGNvbnRhaW5lck5lc3RlZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbS5pdGVtc1xcXCIgY2xhc3M9XFxcImV4YW1wbGVDZWxsXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxwcmU+XFxuICAgICAgICAgICAgPGRpdj5JdGVtczpcXG4gICAgICAgICAgICAgIDxici8+e3tpdGVtcyB8IGpzb259fTwvZGl2PlxcbiAgICAgICAgPC9wcmU+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBuZy1jb250cm9sbGVyPSZxdW90O05lc3RlZE5nUmVwZWF0V2l0aE1vZGVsJnF1b3Q7Jmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyBjbGFzcz1cXCdleGFtcGxlUm93XFwnJmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7cm93LWhhbmRsZSZxdW90OyZndDtSb3cge3s6OiRpbmRleH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtleGFtcGxlUm93IGV4YW1wbGVDZWxsIGNvbnRhaW5lck5lc3RlZCZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbS5pdGVtcyZxdW90OyBjbGFzcz0mcXVvdDtleGFtcGxlQ2VsbCZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBDU1NcXG5cXG4gIC5leGFtcGxlUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5leGFtcGxlQ2VsbCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gIC5leGFtcGxlUm93LFxcbiAgLmV4YW1wbGVDZWxsIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBjdXJzb3I6IC1tb3otZ3JhYjtcXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICB9XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBKU1xcbmNvbnRyb2xsZXIoXFwnTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWxcXCcsIFtcXCckdGltZW91dFxcJywgXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkdGltZW91dCwgJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyB0aW1lb3VudCBkdWUgdG8gbmVzdGVkIG5nUmVwZWF0IHRvIGJlIHJlYWR5XFxuICAgICAgdmFyIGNvbnRhaW5lciA9ICRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSxcXG4gICAgICAgIHBhcmVudENvbnRhaW5lcnMgPSBjb250YWluZXIuY2hpbGRyZW4oKSxcXG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMgPSBbXTtcXG5cXG4gICAgICBkcmFndWxhclNlcnZpY2UoY29udGFpbmVyLCB7XFxuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxcJ3Jvdy1oYW5kbGVcXCcpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zXFxuICAgICAgfSk7XFxuXFxuICAgICAgLy8gY29sbGVjdCBuZXN0ZWQgY29udGlhbmVyc1xcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Q29udGFpbmVycy5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgbmVzdGVkQ29udGFpbmVycy5wdXNoKHBhcmVudENvbnRhaW5lcnMuZXEoaSkuY2hpbGRyZW4oKVsxXSk7XFxuICAgICAgfTtcXG5cXG4gICAgICBkcmFndWxhclNlcnZpY2UobmVzdGVkQ29udGFpbmVycywge1xcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAoZnVuY3Rpb24gZ2V0TmVzdGVkQ29udGFpbmVyc01vZGVsKCl7XFxuICAgICAgICAgIHZhciBwYXJlbnQgPSAkc2NvcGUuaXRlbXMsXFxuICAgICAgICAgICAgY29udGFpbmVyc01vZGVsID0gW107XFxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Lmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICAgICAgY29udGFpbmVyc01vZGVsLnB1c2gocGFyZW50W2ldLml0ZW1zKTtcXG4gICAgICAgICAgfTtcXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnNNb2RlbDtcXG4gICAgICAgIH0pKClcXG4gICAgICB9KTtcXG4gICAgfSwgMCk7XFxuICAgICRzY29wZS5pdGVtcyA9IFt7XFxuICAgICAgaXRlbXM6IFt7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGExXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhMlxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTNcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGE0XFwnXFxuICAgICAgfV1cXG4gICAgfSwge1xcbiAgICAgIGl0ZW1zOiBbe1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBiMVxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjJcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGIzXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBiNFxcJ1xcbiAgICAgIH1dXFxuICAgIH0sIHtcXG4gICAgICBpdGVtczogW3tcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzFcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGMyXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBjM1xcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzRcXCdcXG4gICAgICB9XVxcbiAgICB9XTtcXG4gIH1dKVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmdSZXBlYXQvZXhhbXBsZU5nUmVwZWF0Lmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPm5nUmVwZWF0PC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkV4YW1wbGUgb2YgdXNpbmcgbmctcmVwZWF0IHdpdGggZHJhZ3VsYXIgYW5kIGFkZGluZy9yZW1vdmluZyBpdGVtcyBkeW5hbWljYWx5LjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIk5nUmVwZWF0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0uY29udGVudH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPVxcXCJhZGRJdGVtKClcXFwiPis8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcInJlbW92ZUl0ZW0oKVxcXCI+eDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIC8vIEhUTUw6XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zJnF1b3Q7Jmd0O1xcbiAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7YWRkSXRlbSgpJnF1b3Q7Jmd0OysmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7cmVtb3ZlSXRlbSgpJnF1b3Q7Jmd0O3gmbHQ7L2J1dHRvbiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG5cXG4gIC8vIEpTOlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xcbiAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgY29udGVudDogXFwnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci5cXCdcXG4gIH0se1xcbiAgICBjb250ZW50OiBcXCdJdGVtIDJcXCdcXG4gIH0se1xcbiAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gIH0se1xcbiAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gIH1dO1xcbiAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtICgpIHtcXG4gICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XFxuICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDAse2NvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgXFwnLWNvcHlcXCd9KTtcXG4gIH1cXG4gICRzY29wZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbSAoKSB7XFxuICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSk7XFxuICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xcbiAgfVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5uZ1JlcGVhdCAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5FeGFtcGxlIG9mIHVzaW5nIG5nLXJlcGVhdCB3aXRoIGRyYWd1bGFyIGFuZCBhZGRpbmcvcmVtb3ZpbmcgaXRlbXMgZHluYW1pY2FseS48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIk5nUmVwZWF0V2l0aE1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiPlxcbiAgICAgICAgICB7e2l0ZW0uY29udGVudH19XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz1cXFwiYWRkSXRlbSgpXFxcIj4rPC9idXR0b24+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz1cXFwicmVtb3ZlSXRlbSgpXFxcIj54PC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEhUTUw6XFxuICAgJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7TmdSZXBlYXRXaXRoTW9kZWwmcXVvdDsmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMmcXVvdDsmZ3Q7XFxuICAgICAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAgICAgJmx0O2J1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPSZxdW90O2FkZEl0ZW0oKSZxdW90OyZndDsrJmx0Oy9idXR0b24mZ3Q7XFxuICAgICAgICAgICZsdDtidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz0mcXVvdDtyZW1vdmVJdGVtKCkmcXVvdDsmZ3Q7eCZsdDsvYnV0dG9uJmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBKUzpcXG4gIGNvbnRyb2xsZXIoXFwnTmdSZXBlYXRXaXRoTW9kZWxcXCcsIFtcXCckc2NvcGVcXCcsIFxcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDJcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICAgIH1dO1xcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpLCB7Y29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXN9KTtcXG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKCkge1xcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDAsIHtcXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgXFwnLWNvcHlcXCdcXG4gICAgICB9KTtcXG4gICAgfTtcXG4gICAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKCkge1xcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSk7XFxuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XFxuICAgIH07XFxuICB9XSlcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+UmVtb3ZlIG9uIHNwaWxsPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk5lZWQgdG8gYmUgYWJsZSB0byBxdWlja2x5IGRlbGV0ZSBzdHVmZiB3aGVuIGl0IHNwaWxscyBvdXQgb2YgdGhlIGNob3NlbiBjb250YWluZXJzPzwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIlJlbW92ZU9uU3BpbGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcJ3NpbmdsZTFcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBzb21ld2hlcmUgaW4gdGhpcyBjb250YWluZXIuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiBoZXJlLCBJXFwnbGwgZGllIGEgZmllcnkgZGVhdGguPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaW5nbGUpXSwgeyByZW1vdmVPblNwaWxsOiB0cnVlIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZVJldmVydE9uU3BpbGwvZXhhbXBsZVJldmVydE9uU3BpbGwuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+UmV2ZXJ0IG9uIHNwaWxsPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkJ5IGRlZmF1bHQsIGRyb3BwaW5nIGFuIGVsZW1lbnQgb3V0c2lkZSBvZiBhbnkga25vd24gY29udGFpbmVycyB3aWxsIGtlZXAgdGhlIGVsZW1lbnQgaW4gdGhlIGxhc3QgcGxhY2UgaXQgaG92ZXJlZCBvdmVyLiBZb3UgY2FuIG1ha2UgZWxlbWVudHMgZ28gYmFjayBob21lIGlmIHRoZXlcXCdyZSBkcm9wcGVkIG91dHNpZGUgb2Yga25vd24gY29udGFpbmVycywgdG9vLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIlJldmVydE9uU3BpbGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcJ2xlZnQ0XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXCdyaWdodDRcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWZ0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlnaHQpXSwgeyByZXZlcnRPblNwaWxsOiB0cnVlIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZVNjcm9sbGluZ0RyYWcvZXhhbXBsZVNjcm9sbGluZ0RyYWcuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+U2Nyb2xsaW5nIGRyYWc8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz4gQ29udGFpbmVycyBjYW4gYmUgc2Nyb2xsZWQgYnkgaG92ZXJpbmcgdXAvZG93biBiYXIgbmVhciBjb250YWluZXJzLiBCYXJzIG9uIHJpZ2h0IHNpZGUgYXJlIHRyYW5zcGFyZW50IGFuZCBtb3ZlZCBhIGJpdCBvdmVyIGNvbnRhaW5lcnMuIEl0IGNhbiBiZSBzY3JvbGxlZCBhbHNvIGJ5IG1vdXNlIHdoZWVsLiA8Yj5Qcm9ibGVtIGlzIHRoYXQgdG91Y2hhYmxlIGRldmljZXMgZG9udCBoYXZlIHdoZWVscy48L2I+XFxuICA8L2xhYmVsPlxcbiAgPGRpdiBuZy1jb250cm9sbGVyPVxcXCJTY3JvbGxpbmdEcmFnXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyVmVydGljYWwgc2Nyb2xsaW5nRHJhZ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsQmFyXFxcIiBpZD1cXFwibGVmdFRvcEJhclxcXCI+dXA8L2Rpdj5cXG4gICAgICA8ZGl2IGlkPVxcXCJsZWZ0U2Nyb2xsXFxcIiBjbGFzcz1cXFwic2Nyb2xsaW5nRHJhZ0lubmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbSAxLjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDIuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgIDxkaXY+SXRlbSA3LjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDkuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTAuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTEuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTIuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTMuPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsQmFyXFxcIiBpZD1cXFwibGVmdEJvdHRvbUJhclxcXCI+ZG93bjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyVmVydGljYWwgc2Nyb2xsaW5nRHJhZ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsQmFyXFxcIiBpZD1cXFwicmlnaHRUb3BCYXJcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgaWQ9XFxcInJpZ2h0U2Nyb2xsXFxcIiBjbGFzcz1cXFwic2Nyb2xsaW5nRHJhZ0lubmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbSAxLjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDIuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgIDxkaXY+SXRlbSA3LjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDkuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTAuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTEuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTIuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTMuPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsQmFyXFxcIiBpZD1cXFwicmlnaHRCb3R0b21CYXJcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbmNvbnRyb2xsZXIoXFwnU2Nyb2xsaW5nRHJhZ1xcJywgW1xcJyRzY29wZVxcJywgXFwnJGludGVydmFsXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRpbnRlcnZhbCwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcblxcblxcbiAgICB2YXIgdGltZXIsXFxuICAgICAgbGVmdFNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcJ2xlZnRTY3JvbGxcXCcpLFxcbiAgICAgIHJpZ2h0U2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFwncmlnaHRTY3JvbGxcXCcpLFxcbiAgICAgIGxlZnRUb3BCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXCdsZWZ0VG9wQmFyXFwnKSxcXG4gICAgICBsZWZ0Qm90dG9tQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFwnbGVmdEJvdHRvbUJhclxcJyksXFxuICAgICAgcmlnaHRUb3BCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXCdyaWdodFRvcEJhclxcJyksXFxuICAgICAgcmlnaHRCb3R0b21CYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXCdyaWdodEJvdHRvbUJhclxcJyk7XFxuXFxuICAgIGRyYWd1bGFyU2VydmljZShbbGVmdFNjcm9sbCwgcmlnaHRTY3JvbGxdLCB7XFxuICAgICAgc2NvcGU6ICRzY29wZVxcbiAgICB9KTtcXG5cXG4gICAgcmVnaXN0ZXJFdmVudHMobGVmdFRvcEJhciwgbGVmdFNjcm9sbCwgLTUpO1xcbiAgICByZWdpc3RlckV2ZW50cyhsZWZ0Qm90dG9tQmFyLCBsZWZ0U2Nyb2xsLCA1KTtcXG4gICAgcmVnaXN0ZXJFdmVudHMocmlnaHRUb3BCYXIsIHJpZ2h0U2Nyb2xsLCAtNSk7XFxuICAgIHJlZ2lzdGVyRXZlbnRzKHJpZ2h0Qm90dG9tQmFyLCByaWdodFNjcm9sbCwgNSk7XFxuXFxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKGJhciwgY29udGFpbmVyLCBpbmMsIHNwZWVkKSB7XFxuICAgICAgaWYgKCFzcGVlZCkge1xcbiAgICAgICAgc3BlZWQgPSAyMDtcXG4gICAgICB9XFxuICAgICAgYW5ndWxhci5lbGVtZW50KGJhcikub24oXFwnZHJhZ3VsYXJlbnRlclxcJywgZnVuY3Rpb24oZSkge1xcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCArPSBpbmM7XFxuICAgICAgICB0aW1lciA9ICRpbnRlcnZhbChmdW5jdGlvbiBtb3ZlU2Nyb2xsKCkge1xcbiAgICAgICAgICBjb25zb2xlLmxvZyhcXCd0aWNrXFwnLCBiYXIsIGNvbnRhaW5lciwgaW5jKTtcXG4gICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCArPSBpbmM7XFxuICAgICAgICB9LCBzcGVlZCk7XFxuICAgICAgfSk7XFxuICAgICAgYW5ndWxhci5lbGVtZW50KGJhcikub24oXFwnZHJhZ3VsYXJsZWF2ZVxcJywgZnVuY3Rpb24oZSkge1xcbiAgICAgICAgJGludGVydmFsLmNhbmNlbCh0aW1lcik7XFxuICAgICAgfSk7XFxuICAgIH1cXG5cXG4gICAgLy8gaW4gY2FzZSB5b3UgcmVsZWFzZSBkcmFnIG92ZXIgYmFyXFxuICAgICRzY29wZS4kb24oXFwncmVsZWFzZVxcJywgZnVuY3Rpb24gc3RvcFNjcm9sbCAoKSB7XFxuICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHRpbWVyKTtcXG4gICAgfSlcXG5cXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBuZy1jb250cm9sbGVyPSZxdW90O1Njcm9sbGluZ0RyYWcmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyVmVydGljYWwgc2Nyb2xsaW5nRHJhZyZxdW90OyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3Njcm9sbEJhciZxdW90OyBpZD0mcXVvdDtsZWZ0VG9wQmFyJnF1b3Q7Jmd0O3VwJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBpZD0mcXVvdDtsZWZ0U2Nyb2xsJnF1b3Q7IGNsYXNzPSZxdW90O3Njcm9sbGluZ0RyYWdJbm5lciZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbSAxJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gMiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgICAgIC4uLlxcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7c2Nyb2xsQmFyJnF1b3Q7IGlkPSZxdW90O2xlZnRCb3R0b21CYXImcXVvdDsmZ3Q7ZG93biZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXJWZXJ0aWNhbCBzY3JvbGxpbmdEcmFnJnF1b3Q7Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7c2Nyb2xsQmFyJnF1b3Q7IGlkPSZxdW90O3JpZ2h0VG9wQmFyJnF1b3Q7Jmd0O3VwJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBpZD0mcXVvdDtyaWdodFNjcm9sbCZxdW90OyBjbGFzcz0mcXVvdDtzY3JvbGxpbmdEcmFnSW5uZXImcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gMSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDImbHQ7L2RpdiZndDtcXG4gICAgICAgICAgICAuLi5cXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3Njcm9sbEJhciZxdW90OyBpZD0mcXVvdDtyaWdodEJvdHRvbUJhciZxdW90OyZndDtkb3duJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBDU1NcXG4uc2Nyb2xsaW5nRHJhZyB7XFxuICB3aWR0aDogNDUlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc2Nyb2xsaW5nRHJhZ0lubmVyIHtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3JpZ2h0VG9wQmFyLFxcbiNyaWdodEJvdHRvbUJhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuI3JpZ2h0VG9wQmFyIHtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuI3JpZ2h0Qm90dG9tQmFyIHtcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuXFxuZGl2LnNjcm9sbEJhciB7XFxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInBhcnRpYWxzL3BhcnRpYWwtY29udHJpYnV0ZS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgPG5nLWluY2x1ZGUgc3JjPVxcXCJcXCdwYXJ0aWFscy9hdXRvZ2VuZXJhdGVkL2NvbnRyaWJ1dGUuaHRtbFxcJ1xcXCI+IDwvbmctaW5jbHVkZT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJwYXJ0aWFscy9wYXJ0aWFsLWRvY3MuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICA8ZGl2IGlkPVxcXCJyb3dPZmZjYW52YXNcXFwiIGNsYXNzPVxcXCJyb3cgcm93LW9mZmNhbnZhcyByb3ctb2ZmY2FudmFzLWxlZnRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMyBzaWRlYmFyLW9mZmNhbnZhc1xcXCIgaWQ9XFxcInNpZGViYXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcbiAgICAgICAgPGEgdWktc3JlZj1cXFwiZG9jcy5kZXRhaWwoe2xpbms6XFwnZG9jc0luc3RhbGxcXCd9KVxcXCIgdWktc3JlZi1hY3RpdmU9XFxcImFjdGl2ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+SW5zdGFsbGF0aW9uPC9hPlxcbiAgICAgICAgPGEgbmctcmVwZWF0PVxcXCJleGFtcGxlIGluIGV4YW1wbGVzTGlzdFxcXCIgdWktc3JlZj1cXFwiZG9jcy5kZXRhaWwoe2xpbms6ZXhhbXBsZS5saW5rfSlcXFwiIHVpLXNyZWYtYWN0aXZlPVxcXCJhY3RpdmVcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPnt7ZXhhbXBsZS50aXRsZX19PC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLS8uc2lkZWJhci1vZmZjYW52YXMtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS05XFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwicHVsbC1sZWZ0IHZpc2libGUteHNcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVTaWRlYmFyKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXFxcIj5Ub2dnbGUgbmF2PC9idXR0b24+XFxuICAgICAgPC9wPlxcbiAgICAgIDwhLS0gZG9jcy5kZXRhaWwgLS0+XFxuICAgICAgPGRpdiB1aS12aWV3IG9ubG9hZD1cXFwiaGlnaGxpZ2h0Q29kZSgpXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0vLmNvbC14cy0xMi5jb2wtc20tOS0tPlxcbiAgPC9kaXY+XFxuICA8IS0tL3Jvdy0tPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInBhcnRpYWxzL3BhcnRpYWwtaG9tZS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDwhLS0vLnNpZGViYXItb2ZmY2FudmFzLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwianVtYm90cm9uXFxcIj5cXG4gICAgICAgIDxoMT5EUkFHVUxBUjwvaDE+XFxuICAgICAgICA8cD5Bbmd1bGFyIGRyYWcmZHJvcCBiYXNlZCBvbiA8YSBocmVmPVxcXCJodHRwOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhXFxcIj5kcmFndWxhPC9hPi48L3A+XFxuICAgICAgICA8cD48YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgdWktc3JlZj1cXFwiZG9jc1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5MaXZlIGV4YW1wbGVzIGluIGRvY3M8L2E+PC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgICAgICAgICA8cD5Ccm93c2VyIHN1cHBvcnQgaW5jbHVkZXMgZXZlcnkgc2FuZSBicm93c2VyIGFuZCAqKklFNysqKi4gPHN1Yj5fKEdyYW50ZWQgeW91IHBvbHlmaWxsIHRoZSBmdW5jdGlvbmFsIGBBcnJheWAgbWV0aG9kcyBpbiBFUzUpXzwvc3ViPjwvcD5cXG4gICAgICAgICAgPGgyPkluc3BpcmF0aW9uPC9oMj5cXG4gICAgICAgICAgPHA+SGF2ZSB5b3UgZXZlciB3YW50ZWQgYSBkcmFnIGFuZCBkcm9wIGxpYnJhcnkgdGhhdCBqdXN0IHdvcmtzPyBUaGF0IGFjdHVhbGx5IHVuZGVyc3RhbmRzIHdoZXJlIHRvIHBsYWNlIHRoZSBlbGVtZW50cyB3aGVuIHRoZXkgYXJlIGRyb3BwZWQ/IFRoYXQgZG9lc27igJl0IG5lZWQgeW91IHRvIGRvIGEgemlsbGlvbiB0aGluZ3MgdG8gZ2V0IGl0IHRvIHdvcms/IFdlbGwsIHNvIGRpZCA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWFcXFwiPk5pY29sYXMgQmV2YWNxdWE8L2E+IGFuZCBJIGhhdmUgZm9ya2VkIGl0IGludG8gYW5ndWxhciBtb2R1bGUgYW5kIGFsc28gcHV0IHNvbWUgZmVhdHVyZXMhPC9wPlxcbiAgICAgICAgICA8cD48Yj5BY3R1YWwgdmVyc2lvbiAyLjEuMCBpcyBiYXNlZCBvbiBkcmFndWxhIDIuMS4yIGFuZCB0ZXN0ZWQgd2l0aCBhbmd1bGFyIDEuNC4zLjwvYj48L3A+XFxuICAgICAgICAgIDxoMj5EaWZmZXJlbmNlcyBvZiBkcmFndWxhciAoYWdhaW5zdCBkcmFndWxhKTwvaDI+XFxuICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICA8bGk+cmVwbGFjZWQgY3Jvc3N2ZW50IHdpdGggYW5ndWxhcnMgZXZlbnQgYmluZGluZzwvbGk+XFxuICAgICAgICAgICAgPGxpPnJlcGxhY2VkIGNvbnRyYS5lbWl0dGVyIHdpdGggJHNjb3BlLiRlbWl0IGlmIHNjb3BlIHByb3ZpZGVkIGluIG9wdGlvbnMgKG9wdGlvbnMuc2NvcGUpPC9saT5cXG4gICAgICAgICAgICA8bGk+ZW5jYXBzdWxhdGVkIHRoZSBjb2RlIGludG8gYW5ndWxhciBmYWN0b3J5IChkcmFndWxhclNlcnZpY2UpPC9saT5cXG4gICAgICAgICAgICA8bGk+Y3JlYXRlZCBkaXJlY3RpdmUgZHJhZ3VsYXIgd2hlcmUgb3B0aW9ucyBjYW4gYmUgcGFzc2VkIHByb3ZpZGluZyBzY29wZSBwcm9wZXJ0eSBuYW1lPC9saT5cXG4gICAgICAgICAgICA8bGk+Ym90aCBzZXJ2aWNlIGFuZCBkaXJlY3RpdmUgcHJvdmlkZWQgYXMgYW5ndWxhciBtb2R1bGUgKGRyYWd1bGFyTW9kdWxlKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmF1dG9tYXRpYyBkaXJlY3Rpb24gaWYgbm90IHByb3ZpZGVkIGluIG9wdGlvbnMsIGluc3RlYWQgb2YgZGVmYXVsdCB2ZXJ0aWNhbDwvbGk+XFxuICAgICAgICAgICAgPGxpPmFjY2VwdGluZyBhcnJheWxpa2Ugb2JqZWN0cyBhcyBjb250YWluZXJzIGFycmF5PC9saT5cXG4gICAgICAgICAgICA8bGk+YWNjZXB0aW5nIGN1c3RvbSBjbGFzc2VzIHZpYSBvcHRpb24uY2xhc3NlczwvbGk+XFxuICAgICAgICAgICAgPGxpPm5hbWVzcGFjZWQgY29udGFpbmVycyBncm91cHMgYXZhaWxhYmxlIHZpYSBvcHRpb24ubmFtZVNwYWNlPC9saT5cXG4gICAgICAgICAgICA8bGk+Ym91bmRpbmdCb3ggKGRyYWdnaW5nIGVsZW1lbnQgY2FuIG1lIG1vdmVkIG9ubHkgaW4gc3BlY2lmaWMgYXJlYSk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5sb2NrWC9ZIChkcmFnZ2luZyBlbGVtZW50IGNhbiBtZSBtb3ZlZCBvbmx5IGluIHNwZWNpZmljIGRpcmVjdGlvbik8L2xpPlxcbiAgICAgICAgICAgIDxsaT5tb3JlIGV4YW1wbGVzPC9saT5cXG4gICAgICAgICAgICA8bGk+YWNjZXB0IEpTT04gb3B0aW9ucyBpbiBkcmFndWxhciBkaXJlY3RpdmUgKCMyKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmFkZC9yZW1vdmUgd2l0aCBuZy1yZXBlYXQ8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hZGRlZCBzeW50YXggaGlnaGxpZ2h0ZXIgdG8gZXhhbXBsZSBjb2RlczwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxoMj5Ub2RvPC9oMj5cXG4gICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgIDxsaT5leGFtcGxlIGZvciBkZWxheTwvbGk+XFxuICAgICAgICAgICAgPGxpPm8uaXNDb250YWluZXIgaW4gX2lzQ29udGFpbmVyIChmbiBvLmlzQ29udGFpbmVyR2V0TW9kZWwoY29udGFpbmVyRWxtKSk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5zb2x2ZSBtaXhpbmcgd2l0aCBhbmQgd2l0aG91dCBtb2RlbCBjb250YWluZXJzPC9saT5cXG4gICAgICAgICAgICA8bGk+cmVtb3ZlIG5wbSB3b3JrZmxvdzwvbGk+XFxuICAgICAgICAgICAgPGxpPnN1cHBvcnQgc2VsZWN0b3JzIGluIHNlcnZpY2UgKCMyKT88L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8aDI+RmVhdHVyZXM8L2gyPlxcbiAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgPGxpPnByb3ZpZGVkIGFzIHNlcnZpY2UgYW5kIGFsc28gYXMgZGlyZWN0aXZlPC9saT5cXG4gICAgICAgICAgICA8bGk+U3VwZXIgZWFzeSB0byBzZXQgdXA8L2xpPlxcbiAgICAgICAgICAgIDxsaT5ObyBibG9hdGVkIGRlcGVuZGVuY2llczwvbGk+XFxuICAgICAgICAgICAgPGxpPjxzdHJvbmc+RmlndXJlcyBvdXQgc29ydCBvcmRlcjwvc3Ryb25nPiBvbiBpdHMgb3duPC9saT5cXG4gICAgICAgICAgICA8bGk+QSBzaGFkb3cgd2hlcmUgdGhlIGl0ZW0gd291bGQgYmUgZHJvcHBlZCBvZmZlcnMgPHN0cm9uZz52aXN1YWwgZmVlZGJhY2s8L3N0cm9uZz48L2xpPlxcbiAgICAgICAgICAgIDxsaT5Ub3VjaCBldmVudHMhPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPGgyPkZvciBpbnN0YWxsYXRpb24sIHVzYWdlIGFuZCBleGFtcGxlcyBnbyB0byA8YSB1aS1zcmVmPVxcXCJkb2NzXFxcIj5kb2NzPC9hPjwvaDI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8IS0tL3Jvdy0tPlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLS8uY29sLXhzLTEyLmNvbC1zbS05LS0+XFxuICA8L2Rpdj5cXG4gIDwhLS0vcm93LS0+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwicGFydGlhbHMvYXV0b2dlbmVyYXRlZC9jb250cmlidXRlLmh0bWxcIixcIjxoMSBpZD1cXFwiaG93LXRvLWNvbnRyaWJ1dGVcXFwiPkhvdyB0byBjb250cmlidXRlPC9oMT5cXG48cD5JdCYjMzk7cyBpbXBvcnRhbnQgdG8gdXMgdGhhdCB5b3UgZmVlbCB5b3UgY2FuIGNvbnRyaWJ1dGUgdG93YXJkcyB0aGUgZXZvbHV0aW9uIG9mIERyYWd1bGFyLiBUaGlzIGNhbiB0YWtlIG1hbnkgZm9ybXM6IGZyb20gaGVscGluZyB0byBmaXggYnVncyBvciBpbXByb3ZlIHRoZSBkb2NzLCB0byBhZGRpbmcgaW4gbmV3IGZlYXR1cmVzIHRvIHRoZSBzb3VyY2UuIFRoaXMgZ3VpZGUgc2hvdWxkIGhlbHAgeW91IGluIG1ha2luZyB0aGF0IHByb2Nlc3MgYXMgc21vb3RoIGFzIHBvc3NpYmxlLjwvcD5cXG48cD5CZWZvcmUgY29udHJpYnV0aW5nLCBwbGVhc2UgcmVhZCB0aGUgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXIvYmxvYi9tYXN0ZXIvQ09ERV9PRl9DT05EVUNULm1kXFxcIj5jb2RlIG9mIGNvbmR1Y3Q8L2E+LjwvcD5cXG48aDIgaWQ9XFxcInJlcG9ydGluZy1pc3N1ZXNcXFwiPlJlcG9ydGluZyBpc3N1ZXM8L2gyPlxcbjxwPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyL2lzc3Vlc1xcXCI+R2l0SHViIElzc3VlczwvYT4gaXMgdGhlIHBsYWNlIHRvIHJlcG9ydCBidWdzIHlvdSBtYXkgaGF2ZSBmb3VuZCBpbiBlaXRoZXIgdGhlIGNvcmUgbGlicmFyeSBvciBhbnkgb2YgdGhlIGV4YW1wbGVzIHRoYXQgYXJlIHBhcnQgb2YgdGhlIHJlcG9zaXRvcnkuIFdoZW4gc3VibWl0dGluZyBhIGJ1ZyBwbGVhc2UgZG8gdGhlIGZvbGxvd2luZzo8L3A+XFxuPHA+PHN0cm9uZz4xLiBTZWFyY2ggZm9yIGV4aXN0aW5nIGlzc3Vlcy48L3N0cm9uZz4gWW91ciBidWcgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIGZpeGVkIG9yIGFkZHJlc3NlZCBpbiBhIGRldmVsb3BtZW50IGJyYW5jaCB2ZXJzaW9uIG9mIERyYWd1bGFyLCBzbyBiZSBzdXJlIHRvIHNlYXJjaCB0aGUgaXNzdWVzIGZpcnN0IGJlZm9yZSBwdXR0aW5nIGluIGEgZHVwbGljYXRlIGlzc3VlLjwvcD5cXG48cD48c3Ryb25nPjIuIE5vdCBzdXJlIGlmIGl0JiMzOTtzIGEgYnVnPy48L3N0cm9uZz4gVGhlbiBwbGVhc2UgYXNrIHZpYSBpc3N1ZXMgYW5kIHRhZyBpdCBbcXVlc3Rpb25dLjwvcD5cXG48cD48c3Ryb25nPjMuIENyZWF0ZSBhbiBpc29sYXRlZCBhbmQgcmVwcm9kdWNpYmxlIHRlc3QgY2FzZS48L3N0cm9uZz4gSWYgeW91IGFyZSByZXBvcnRpbmcgYSBidWcsIG1ha2Ugc3VyZSB5b3UgYWxzbyBoYXZlIGEgbWluaW1hbCwgcnVubmFibGUsIGNvZGUgZXhhbXBsZSB0aGF0IHJlcHJvZHVjZXMgdGhlIHByb2JsZW0geW91IGhhdmUuPC9wPlxcbjxwPjxzdHJvbmc+NC4gSW5jbHVkZSBhIGxpdmUgZXhhbXBsZS48L3N0cm9uZz4gQWZ0ZXIgbmFycm93aW5nIHlvdXIgY29kZSBkb3duIHRvIG9ubHkgdGhlIHByb2JsZW0gYXJlYXMsIG1ha2UgdXNlIG9mIDxhIGhyZWY9XFxcImh0dHA6Ly9qc2ZpZGRsZS5uZXRcXFwiPmpzRmlkZGxlPC9hPiwgPGEgaHJlZj1cXFwiaHR0cDovL2pzYmluLmNvbS9cXFwiPmpzQmluPC9hPiwgb3IgYSBsaW5rIHRvIHlvdXIgbGl2ZSBzaXRlIHNvIHRoYXQgd2UgY2FuIHZpZXcgYSBsaXZlIGV4YW1wbGUgb2YgdGhlIHByb2JsZW0uPC9wPlxcbjxwPjxzdHJvbmc+NS4gU2hhcmUgYXMgbXVjaCBpbmZvcm1hdGlvbiBhcyBwb3NzaWJsZS48L3N0cm9uZz4gSW5jbHVkZSBicm93c2VyIHZlcnNpb24gYWZmZWN0ZWQsIHlvdXIgT1MsIHZlcnNpb24gb2YgdGhlIGxpYnJhcnksIHN0ZXBzIHRvIHJlcHJvZHVjZSwgZXRjLiAmcXVvdDtYIGlzbiYjMzk7dCB3b3JraW5nISEhMSEmcXVvdDsgd2lsbCBwcm9iYWJseSBqdXN0IGJlIGNsb3NlZC48L3A+XFxuPGgyIGlkPVxcXCJkZXYtdnMtbWFzdGVyXFxcIj5EZXYgdnMuIE1hc3RlcjwvaDI+XFxuPHA+VGhlIGRldiBicmFuY2ggb2YgRHJhZ3VsYXIgaXMgb3VyICYjMzk7Y3VycmVudCB3b3JraW5nJiMzOTsgdmVyc2lvbi4gSXQgaXMgYWx3YXlzIGFoZWFkIG9mIHRoZSBtYXN0ZXIgYnJhbmNoIGluIHRlcm1zIG9mIGZlYXR1cmVzIGFuZCBmaXhlcy4gSG93ZXZlciBpdCYjMzk7cyBhbHNvIGJsZWVkaW5nLWVkZ2UgYW5kIGV4cGVyaW1lbnRhbCBhbmQgd2UgY2Fubm90IGFuZCBkbyBub3QgZ3VhcmFudGVlIGl0IHdpbGwgY29tcGlsZSBvciB3b3JrIGZvciB5b3UuIFZlcnkgb2Z0ZW4gd2UgaGF2ZSB0byBicmVhayB0aGluZ3MgZm9yIGEgZmV3IGRheXMgd2hpbGUgd2UgcmVidWlsZCBhbmQgcGF0Y2guIFNvIGJ5IGFsbCBtZWFucyBwbGVhc2UgZXhwb3J0IHRoZSBkZXYgYnJhbmNoIGFuZCBjb250cmlidXRlIHRvd2FyZHMgaXQsIGluZGVlZCB0aGF0IGlzIHdoZXJlIGFsbCBQdWxsIFJlcXVlc3RzIHNob3VsZCBiZSBzZW50LCBidXQgZG8gc28gdW5kZXJzdGFuZGluZyB0aGUgQVBJIG1heSBjaGFuZ2UgYmVuZWF0aCB5b3UuPC9wPlxcbjxoMiBpZD1cXFwibWFraW5nLWNoYW5nZXNcXFwiPk1ha2luZyBDaGFuZ2VzPC9oMj5cXG48cD5UbyB0YWtlIGFkdmFudGFnZSBvZiBvdXIgbnBtIGJ1aWxkIHNjcmlwdCBhbmQganNoaW50IGNvbmZpZyBpdCB3aWxsIGJlIGVhc2llc3QgZm9yIHlvdSBpZiB5b3UgaGF2ZSBub2RlLmpzIGluc3RhbGxlZCBsb2NhbGx5LjwvcD5cXG48cD5Zb3UgY2FuIGRvd25sb2FkIG5vZGUuanMgZnJvbSA8YSBocmVmPVxcXCJodHRwOi8vbm9kZWpzLm9yZ1xcXCI+bm9kZWpzLm9yZzwvYT4uPC9wPlxcbjxwPkFmdGVyIHRoYXQgeW91IGNhbiBjbG9uZSB0aGUgcmVwb3NpdG9yeSBhbmQgcnVuIDxjb2RlPm5wbSBpPC9jb2RlPiBpbnNpZGUgdGhlIGNsb25lZCBmb2xkZXIuIFRoaXMgd2lsbCBpbnN0YWxsIGRlcGVuZGVuY2llcyBuZWNlc3NhcnkgZm9yIGJ1aWxkaW5nIHRoZSBwcm9qZWN0LiBGb3IgZGV2ZWxvcG1lbnQgd29ya2Zsb3cgYXV0b21hdGlvbiBkcmFndWxhciB1c2VzIDxjb2RlPmd1bHAgJmd0Oz0gMy45LjA8L2NvZGU+LiBCZWZvcmUgc3RhcnRpbmcgZGV2ZWxvcG1lbnQsIG1ha2Ugc3VyZSB0aGF0IDxjb2RlPmd1bHA8L2NvZGU+IGlzIGluc3RhbGxlZCBvbiB5b3VyIG1hY2hpbmUgZ2xvYmFsbHk6IDxjb2RlPm5wbSBpIC1nIGd1bHA8L2NvZGU+LjwvcD5cXG48aDMgaWQ9XFxcImRldmVsb3BpbmdcXFwiPkRldmVsb3Bpbmc8L2gzPlxcbjxwPlRoZXJlIGFyZSBzZXZlcmFsIGd1bHAgdGFza3MgdGhhdCBhcmUgdXNlZCBmb3IgZ2VuZXJhdGluZyBkaWZmZXJlbnQgYnVpbGRzOjwvcD5cXG48dWw+XFxuPGxpPjxjb2RlPmd1bHAgZGV2PC9jb2RlPiAtIFNlcnZlcyBmaWxlcyB3aXRoIEJyb3dzZXJTeW5jIHNlcnZlciwgd2F0Y2hlcyAmYW1wOyBhdXRvbWF0aWNhbGx5IHJlZnJlc2hlcyBjb25uZWN0ZWQgYnJvd3NlcnMgb24gY2hhbmdlcywgZ2VuZXJhdGVzIG5vbi1taW5pZmllZCBidXQgY29uY2F0ZW5hdGVkIHN0eWxlcyAmYW1wOyBzY3JpcHRzIGZyb20gdGhlIGRyYWd1bGFyIHNvdXJjZS48L2xpPlxcbjxsaT48Y29kZT5ndWxwIGRldjpkb2NzPC9jb2RlPiAtIERvZXMgZXhhY3RseSB0aGUgc2FtZSBhcyA8Y29kZT5ndWxwIGRldjwvY29kZT4sIGV4Y2VwdCBpdCB3b3JrcyB3aXRoIHRoZSBkb2N1bWVudGF0aW9uIHNvdXJjZS48L2xpPlxcbjxsaT48Y29kZT5ndWxwIGJ1aWxkPC9jb2RlPiAtIENvbmNhdGVuYXRlcyBhbmQgbWluaWZpZXMgZHJhZ3VsYXIgc291cmNlIGZpbGVzLjwvbGk+XFxuPGxpPjxjb2RlPmd1bHAgYnVpbGQ6ZG9jczwvY29kZT4gLSBDb25jYXRlbmF0ZXMgYW5kIG1pbmlmaWVzIGRvY3VtZW50YXRpb24gc291cmNlIGZpbGVzLjwvbGk+XFxuPC91bD5cXG48aDMgaWQ9XFxcImxpbnRpbmdcXFwiPkxpbnRpbmc8L2gzPlxcbjx1bD5cXG48bGk+PGNvZGU+Z3VscCBsaW50PC9jb2RlPiAmYW1wOyA8Y29kZT5ndWxwIGxpbnQ6ZG9jczwvY29kZT4gLSBMaW50IEphdmFTY3JpcHQgZmlsZXMuPC9saT5cXG48L3VsPlxcbjxoMyBpZD1cXFwibWFraW5nLWEtcHVsbC1yZXF1ZXN0XFxcIj5NYWtpbmcgYSBwdWxsIHJlcXVlc3Q8L2gzPlxcbjxwPk9uY2UgdGhhdCBpcyByZWFkeSwgbWFrZSB5b3VyIGNoYW5nZXMgYW5kIHN1Ym1pdCBhIFB1bGwgUmVxdWVzdDo8L3A+XFxuPHVsPlxcbjxsaT48cD48c3Ryb25nPlNlbmQgUHVsbCBSZXF1ZXN0cyB0byB0aGUgPGNvZGU+ZGV2PC9jb2RlPiBicmFuY2guPC9zdHJvbmc+IEFsbCBQdWxsIFJlcXVlc3RzIG11c3QgYmUgc2VudCB0byB0aGUgPGNvZGU+ZGV2PC9jb2RlPiBicmFuY2gsIDxjb2RlPm1hc3RlcjwvY29kZT4gaXMgdGhlIGxhdGVzdCByZWxlYXNlIGFuZCBQUnMgdG8gdGhhdCBicmFuY2ggd2lsbCBiZSBjbG9zZWQuPC9wPlxcbjwvbGk+XFxuPGxpPjxwPjxzdHJvbmc+RW5zdXJlIGNoYW5nZXMgYXJlIGpzaGludCB2YWxpZGF0ZWQuPC9zdHJvbmc+IE91ciBKU0hpbnQgY29uZmlndXJhdGlvbiBmaWxlIGlzIHByb3ZpZGVkIGluIHRoZSByZXBvc2l0b3J5IGFuZCB5b3Ugc2hvdWxkIGNoZWNrIGFnYWluc3QgaXQgYmVmb3JlIHN1Ym1pdHRpbmcuPC9wPlxcbjwvbGk+XFxuPGxpPjxwPjxzdHJvbmc+T25seSBjb21taXQgcmVsZXZhbnQgY2hhbmdlcy48L3N0cm9uZz4gRG9uJiMzOTt0IGluY2x1ZGUgY2hhbmdlcyB0aGF0IGFyZSBub3QgZGlyZWN0bHkgcmVsZXZhbnQgdG8gdGhlIGZpeCB5b3UgYXJlIG1ha2luZy4gVGhlIG1vcmUgZm9jdXNlZCBhIFBSIGlzLCB0aGUgZmFzdGVyIGl0IHdpbGwgZ2V0IGF0dGVudGlvbiBhbmQgYmUgbWVyZ2VkLiBFeHRyYSBmaWxlcyBjaGFuZ2luZyBvbmx5IHdoaXRlc3BhY2Ugb3IgdHJhc2ggZmlsZXMgd2lsbCBsaWtlbHkgZ2V0IHlvdXIgUFIgY2xvc2VkLjwvcD5cXG48L2xpPlxcbjwvdWw+XFxuPHA+RGVwZW5kZW5jaWVzIGZvciBidWlsZGluZyBmcm9tIHNvdXJjZSBhbmQgcnVubmluZyB0ZXN0czo8L3A+XFxuPGgyIGlkPVxcXCJjb2Rpbmctc3R5bGUtcHJlZmVyZW5jZXMtYXJlLW5vdC1jb250cmlidXRpb25zXFxcIj5Db2Rpbmcgc3R5bGUgcHJlZmVyZW5jZXMgYXJlIG5vdCBjb250cmlidXRpb25zPC9oMj5cXG48cD5JZiB5b3VyIFBSIGlzIGRvaW5nIGxpdHRsZSBtb3JlIHRoYW4gY2hhbmdpbmcgdGhlIERyYWd1bGFyIHNvdXJjZSBjb2RlIGludG8gYSBmb3JtYXQgLyBjb2Rpbmcgc3R5bGUgdGhhdCB5b3UgcHJlZmVyIHRoZW4gd2Ugd2lsbCBhdXRvbWF0aWNhbGx5IGNsb3NlIGl0LiBBbGwgUFJzIG11c3QgYWRoZXJlIHRvIHRoZSBjb2Rpbmcgc3R5bGUgYWxyZWFkeSBzZXQtb3V0IGFjcm9zcyB0aGUgbGluZXMgb2YgY29kZSBpbiBEcmFndWxhci4gWW91ciBwZXJzb25hbCBwcmVmZXJlbmNlcyBmb3IgaG93IHRoaW5ncyBzaG91bGQgJnF1b3Q7bG9vayZxdW90OyBvciBiZSBzdHJ1Y3R1cmVkIGRvIG5vdCBhcHBseSBoZXJlLCBzb3JyeS4gUFJzIHNob3VsZCBmaXggYnVncywgZml4IGRvY3VtZW50YXRpb24gb3IgYWRkIGZlYXR1cmVzLiBObyBjaGFuZ2VzIGZvciB0aGUgc2FrZSBvZiBjaGFuZ2UuPC9wPlxcbjxoMiBpZD1cXFwiaS1kb24tdC1yZWFsbHktbGlrZS1naXQtbm9kZS1qcy1idXQtaS1jYW4tZml4LXRoaXMtYnVnXFxcIj5JIGRvbiYjMzk7dCByZWFsbHkgbGlrZSBnaXQgLyBub2RlLmpzLCBidXQgSSBjYW4gZml4IHRoaXMgYnVnPC9oMj5cXG48cD5UaGF0IGlzIGZpbmUgdG9vLiBXaGlsZSBQdWxsIFJlcXVlc3RzIGFyZSB0aGUgYmVzdCB0aGluZyBpbiB0aGUgd29ybGQgZm9yIHVzLCB0aGV5IGFyZSBub3QgdGhlIG9ubHkgd2F5IHRvIGhlbHAuIFlvdSYjMzk7cmUgd2VsY29tZSB0byBwb3N0IGZpeGVzIHRvIG91ciBmb3J1bSBvciBldmVuIGp1c3QgZW1haWwgdGhlbSB0byB1cy4gQWxsIHdlIGFzayBpcyB0aGF0IHlvdSBzdGlsbCBhZGhlcmUgdG8gdGhlIGd1aWRlbGluZXMgcHJlc2VudGVkIGhlcmUgcmU6IEpTSGludCwgZXRjLjwvcD5cXG5cIik7fV0pOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBkcmFndWxhciBEaXJlY3RpdmUgYnkgTHVja3lsb29rZSBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhclxuICogQW5ndWxhciB2ZXJzaW9uIG9mIGRyYWd1bGEgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGFcbiAqL1xuIHZhciBkcmFndWxhck1vZHVsZSA9IHJlcXVpcmUoJy4vZHJhZ3VsYXJNb2R1bGUnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZHJhZ3VsYXJNb2R1bGUuZGlyZWN0aXZlKCdkcmFndWxhcicsIFsnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24oZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbigkc2NvcGUsIGlFbG0sIGlBdHRycykge1xuXG4gICAgICB2YXIgb3B0aW9ucyA9ICRzY29wZVtpQXR0cnMuZHJhZ3VsYXJdIHx8IHRyeUpzb24oaUF0dHJzLmRyYWd1bGFyKTtcblxuICAgICAgZnVuY3Rpb24gdHJ5SnNvbihqc29uKSB7XG4gICAgICAgIHRyeSB7IC8vIEkgZG9udCBsaWtlIHRyeSBjYXRjaCBzb2x1dGlvbnMgYnV0IEkgaGF2ZW50IGZpbmQgc2F0dGlzZnlpbmcgd2F5IG9mIGNoY2Vja2luZyBqc29uIHZhbGlkaXR5LlxuICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMuY29udGFpbmVyc01vZGVsICYmIHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCA9PT0gJ3N0cmluZycpe1xuICAgICAgICBvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCA9ICRzY29wZS4kZXZhbChvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCk7XG4gICAgICB9XG5cbiAgICAgIGRyYWd1bGFyU2VydmljZShpRWxtWzBdLCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG59XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnZHJhZ3VsYXJNb2R1bGUnLCBbXSk7XG5cbih7XCJkcmFndWxhckRpcmVjdGl2ZVwiOnJlcXVpcmUoXCIuL2RyYWd1bGFyRGlyZWN0aXZlLmpzXCIpLFwiZHJhZ3VsYXJTZXJ2aWNlXCI6cmVxdWlyZShcIi4vZHJhZ3VsYXJTZXJ2aWNlLmpzXCIpfSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGRyYWd1bGFyIE1vZHVsZSBhbmQgU2VydmljZSBieSBMdWNreWxvb2tlIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG5cbnZhciBkcmFndWxhck1vZHVsZSA9IHJlcXVpcmUoJy4vZHJhZ3VsYXJNb2R1bGUnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5kcmFndWxhck1vZHVsZS5mYWN0b3J5KCdkcmFndWxhclNlcnZpY2UnLCBbJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiBkcmFndWxhKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XG5cbiAgdmFyIGNvbnRhaW5lcnNOYW1lU3BhY2VkID0ge30sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnNcbiAgICBjb250YWluZXJzTmFtZVNwYWNlZE1vZGVsID0ge30sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnMgbW9kZWxzXG4gICAgX2NhY2hlID0ge30sIC8vIGNsYXNzZXMgbG9va3VwIGNhY2hlXG4gICAgX21pcnJvcjsgLy8gbWlycm9yIGltYWdlXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGluaXRpYWxDb250YWluZXJzLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiAhQXJyYXkuaXNBcnJheShpbml0aWFsQ29udGFpbmVycykgJiYgIWFuZ3VsYXIuaXNFbGVtZW50KGluaXRpYWxDb250YWluZXJzKSAmJiAhaW5pdGlhbENvbnRhaW5lcnNbMF0pIHtcbiAgICAgIC8vIHRoZW4gY29udGFpbmVycyBhcmUgbm90IHByb3ZpZGVkLCBvbmx5IG9wdGlvbnNcbiAgICAgIG9wdGlvbnMgPSBpbml0aWFsQ29udGFpbmVycztcbiAgICAgIGluaXRpYWxDb250YWluZXJzID0gW107XG4gICAgfVxuXG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgX3NvdXJjZSwgLy8gc291cmNlIGNvbnRhaW5lclxuICAgICAgX2l0ZW0sIC8vIGl0ZW0gYmVpbmcgZHJhZ2dlZFxuICAgICAgX3NvdXJjZU1vZGVsLCAvLyBzb3VyY2UgY29udGFpbmVyIG1vZGVsXG4gICAgICBfaXRlbU1vZGVsLCAvLyBpdGVtLW1vZGVsIGJlaW5nIGRyYWdnZWRcbiAgICAgIF90YXJnZXRNb2RlbCwgLy8gdGFyZ2V0IGNvbnRhaW5lciBtb2RlbFxuICAgICAgX2xhc3RUYXJnZXRNb2RlbCwgLy8gbGFzdCB0YXJnZXQgY29udGFpbmVyIG1vZGVsXG4gICAgICBfbGFzdERyb3BUYXJnZXQgPSBudWxsLCAvLyBsYXN0IGNvbnRhaW5lciBpdGVtIHdhcyBvdmVyXG4gICAgICBfb2Zmc2V0WCwgLy8gcmVmZXJlbmNlIHhcbiAgICAgIF9vZmZzZXRZLCAvLyByZWZlcmVuY2UgeVxuICAgICAgX29mZnNldFhyLCAvLyByZWZlcmVuY2UgeCByaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX29mZnNldFliLCAvLyByZWZlcmVuY2UgeSBib3R0b20gZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9jbGllbnRYLCAvLyBjYWNoZSBjbGllbnQgeCwgaW5pdCBhdCBncmFiLCB1cGRhdGUgYXQgZHJhZ1xuICAgICAgX2NsaWVudFksIC8vIGNhY2hlIGNsaWVudCB5LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfbWlycm9yV2lkdGgsIC8vIG1pcnJvciB3aWR0aCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX21pcnJvckhlaWdodCwgLy8gbWlycm9yIGhlaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2luaXRpYWxTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50U2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgbm93XG4gICAgICBfaW5pdGlhbEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggd2hlbiBncmFiYmVkXG4gICAgICBfY3VycmVudEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggbm93XG4gICAgICBfbGFzdE92ZXJFbGVtLCAvLyBsYXN0IGVsZW1lbnQgYmVoaW5kIHRoZSBjdXJzb3IgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2xhc3RPdmVyQ2xhc3MsIC8vIGxhc3Qgb3ZlckNsYXNzIHVzZWQgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2NvcHksIC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICAgICAgX2NvcHlNb2RlbCwgLy8gaXRlbS1tb2RlbCB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29udGFpbmVycyA9IHt9LCAvLyBjb250YWluZXJzIG1hbmFnZWQgYnkgdGhlIGRyYWtlXG4gICAgICBfY29udGFpbmVyc01vZGVsID0ge30sIC8vIGNvbnRhaW5lcnMgbW9kZWxcbiAgICAgIF9yZW5kZXJUaW1lciwgLy8gdGltZXIgZm9yIHNldFRpbWVvdXQgcmVuZGVyTWlycm9ySW1hZ2VcbiAgICAgIF9pc0NvbnRhaW5lciwgLy8gaW50ZXJuYWwgaXNDb250YWluZXJcbiAgICAgIF90YXJnZXRDb250YWluZXIsIC8vIGRyb3BwYWJsZSBjb250YWluZXIgdW5kZXIgZHJhZyBpdGVtXG4gICAgICBfZHJhZ0VudGVyRXZlbnQsIC8vIGRyYWcgZW50ZXIgZXZlbnQgZmlyZWQgb24gZWxlbWVudCBiZWhpbmQgY3Vyc29yXG4gICAgICBfZHJhZ0xlYXZlRXZlbnQsIC8vIGRyYWcgbGVhdmUgZXZlbnQgZmlyZWQgb24gZWxlbWVudCBiZWhpbmQgY3Vyc29yXG4gICAgICBfbGFzdEVsZW1lbnRCZWhpbmRDdXJzb3IsIC8vIGxhc3QgZWxlbWVudCBiZWhpbmQgY3Vyc29yXG4gICAgICBkZWZhdWx0Q2xhc3NlcyA9IHtcbiAgICAgICAgbWlycm9yOiAnZ3UtbWlycm9yJyxcbiAgICAgICAgaGlkZTogJ2d1LWhpZGUnLFxuICAgICAgICB1bnNlbGVjdGFibGU6ICdndS11bnNlbGVjdGFibGUnLFxuICAgICAgICB0cmFuc2l0OiAnZ3UtdHJhbnNpdCcsXG4gICAgICAgIG92ZXJBY3RpdmU6ICdndS1vdmVyLWFjdGl2ZScsXG4gICAgICAgIG92ZXJBY2NlcHRzOiAnZ3Utb3Zlci1hY2NlcHQnLFxuICAgICAgICBvdmVyRGVjbGluZXM6ICdndS1vdmVyLWRlY2xpbmUnXG4gICAgICB9LFxuICAgICAgbyA9IHsgLy8gb3B0aW9uc1xuICAgICAgICBjbGFzc2VzOiBkZWZhdWx0Q2xhc3NlcyxcbiAgICAgICAgY29udGFpbmVyczogZmFsc2UsXG4gICAgICAgIG1vdmVzOiBhbHdheXMsXG4gICAgICAgIGFjY2VwdHM6IGFsd2F5cyxcbiAgICAgICAgaXNDb250YWluZXI6IG5ldmVyLFxuICAgICAgICBjb3B5OiBmYWxzZSxcbiAgICAgICAgZGVsYXk6IGZhbHNlLFxuICAgICAgICBpbnZhbGlkOiBpbnZhbGlkVGFyZ2V0LFxuICAgICAgICByZXZlcnRPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgcmVtb3ZlT25TcGlsbDogZmFsc2UsXG4gICAgICAgIGRyYWdPdmVyQ2xhc3NlczogZmFsc2UsXG4gICAgICAgIGxvY2tYOiBmYWxzZSxcbiAgICAgICAgbG9ja1k6IGZhbHNlLFxuICAgICAgICBib3VuZGluZ0JveDogZmFsc2UsXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogZmFsc2VcbiAgICAgIH07XG5cbiAgICBpZiAoIWlzRWxlbWVudChvLmJvdW5kaW5nQm94KSkge1xuICAgICAgby5ib3VuZGluZ0JveCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5jbGFzc2VzKSB7XG4gICAgICBhbmd1bGFyLmV4dGVuZChkZWZhdWx0Q2xhc3Nlcywgb3B0aW9ucy5jbGFzc2VzKTtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKG9wdGlvbnMuY2xhc3NlcywgZGVmYXVsdENsYXNzZXMpO1xuICAgIH1cblxuICAgIGFuZ3VsYXIuZXh0ZW5kKG8sIG9wdGlvbnMpO1xuXG4gICAgaWYgKG8uZGVsYXkgPT09IHRydWUpIHtcbiAgICAgIG8uZGVsYXkgPSAzMDA7XG4gICAgfVxuXG4gICAgaWYgKG8ubWlycm9yQ29udGFpbmVyID09PSB2b2lkIDApIHtcbiAgICAgIG8ubWlycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICAvLyBnZXQgaW5pdGlhbCBjb250YWluZXJzIGZyb20gb3B0aW9ucywgYXJndW1lbnQgb3IgZmFsbCBiYWNrIHRvIGVtcHR5IGFycmF5IChjb250YWluZXJzIGNhbiBiZSBhZGRlZCBsYXRlcilcbiAgICBpbml0aWFsQ29udGFpbmVycyA9IG8uY29udGFpbmVycyB8fCAoaW5pdGlhbENvbnRhaW5lcnMgPyBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpIDogW10pO1xuICAgIGlmIChvLmNvbnRhaW5lcnMpIHtcbiAgICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBvLmNvbnRhaW5lcnNcbiAgICAgIGluaXRpYWxDb250YWluZXJzID0gbWFrZUFycmF5KGluaXRpYWxDb250YWluZXJzKTtcbiAgICB9XG4gICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICBvLmNvbnRhaW5lcnNNb2RlbCA9IEFycmF5LmlzQXJyYXkoby5jb250YWluZXJzTW9kZWxbMF0pID8gby5jb250YWluZXJzTW9kZWwgOiBbby5jb250YWluZXJzTW9kZWxdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycykge1xuICAgICAgaWYgKCFjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdKSB7XG4gICAgICAgIGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0sIGluaXRpYWxDb250YWluZXJzKTtcbiAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0gPSBjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdO1xuICAgIH1cblxuICAgIC8vIGZlZWQgbmFtZXNwYWNlZCBjb250YWluZXJzIGdyb3VwcyBhbmQgb3B0aW9uYWx5IHNoYWRvdyBpdCBieSBtb2RlbHNcbiAgICBpZiAoby5uYW1lU3BhY2UpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShvLm5hbWVTcGFjZSkpIHtcbiAgICAgICAgby5uYW1lU3BhY2UgPSBbby5uYW1lU3BhY2VdO1xuICAgICAgfVxuICAgICAgby5uYW1lU3BhY2UuZm9yRWFjaChmdW5jdGlvbiBlYWNoTmFtZVNwYWNlKG5hbWVTcGFjZSkge1xuICAgICAgICBwcm9jZWVkTmFtZVNwYWNlcyhfY29udGFpbmVycywgY29udGFpbmVyc05hbWVTcGFjZWQsIG5hbWVTcGFjZSwgaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBwcm9jZWVkTmFtZVNwYWNlcyhfY29udGFpbmVyc01vZGVsLCBjb250YWluZXJzTmFtZVNwYWNlZE1vZGVsLCBuYW1lU3BhY2UsIG8uY29udGFpbmVyc01vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBfaXNDb250YWluZXIgPSBpc0NvbnRhaW5lck5hbWVTcGFjZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlZmF1bHQgKG5vdCB1c2luZyBuYW1lU3BhY2VzKVxuICAgICAgX2NvbnRhaW5lcnMgPSBpbml0aWFsQ29udGFpbmVycztcbiAgICAgIF9pc0NvbnRhaW5lciA9IGlzQ29udGFpbmVyO1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIF9jb250YWluZXJzTW9kZWwgPSBvLmNvbnRhaW5lcnNNb2RlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL3JlZ2lzdGVyIGV2ZW50c1xuICAgIGV2ZW50cygpO1xuXG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICBfZHJhZ0VudGVyRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgX2RyYWdFbnRlckV2ZW50LmluaXRFdmVudCgnZHJhZ3VsYXJlbnRlcicsIHRydWUsIHRydWUpO1xuICAgICAgX2RyYWdMZWF2ZUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgIF9kcmFnTGVhdmVFdmVudC5pbml0RXZlbnQoJ2RyYWd1bGFybGVhdmUnLCB0cnVlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2RyYWdFbnRlckV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgICAgIF9kcmFnRW50ZXJFdmVudC5ldmVudFR5cGUgPSAnZHJhZ3VsYXJlbnRlcic7XG4gICAgICBfZHJhZ0xlYXZlRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICAgICAgX2RyYWdMZWF2ZUV2ZW50LmV2ZW50VHlwZSA9ICdkcmFndWxhcmxlYXZlJztcbiAgICB9XG5cbiAgICB2YXIgZHJha2UgPSB7XG4gICAgICBhZGRDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdhZGQnKSxcbiAgICAgIHJlbW92ZUNvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ3JlbW92ZScpLFxuICAgICAgY29udGFpbmVyczogX2NvbnRhaW5lcnMsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGNhbmNlbDogY2FuY2VsLFxuICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHJldHVybiBkcmFrZTtcblxuICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBhcnJheS1saWtlIG9iamVjdHMgb3IgZnJvbSBzaW5nbGUgZWxlbWVudFxuICAgIGZ1bmN0aW9uIG1ha2VBcnJheShhbGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFsbCkpIHtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICAgIH1cbiAgICAgIGlmIChhbGwubGVuZ3RoKSB7IC8vIGlzIGFycmF5LWxpa2VcbiAgICAgICAgdmFyIGlBbGwgPSBhbGwubGVuZ3RoLFxuICAgICAgICAgIG5ld0FycmF5ID0gW107XG4gICAgICAgIHdoaWxlIChpQWxsKSB7XG4gICAgICAgICAgaUFsbC0tO1xuICAgICAgICAgIG5ld0FycmF5LnB1c2goYWxsW2lBbGxdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICB9IGVsc2UgeyAvLyBpcyBvbmUgZWxlbWVudFxuICAgICAgICByZXR1cm4gW2FsbF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIG9yIHJlbW92ZSBjb250YWluZXJzIC0gZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIG1hbmlwdWxhdGVDb250YWluZXJzKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYWRkT3JSZW1vdmUoYWxsKSB7XG4gICAgICAgIHZhciBjaGFuZ2VzID0gQXJyYXkuaXNBcnJheShhbGwpID8gYWxsIDogbWFrZUFycmF5KGFsbCk7XG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgICAgICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG8ubmFtZVNwYWNlLCBmdW5jdGlvbiBhZGRSZW1vdmVOYW1lc3BhY2VkKGNvbnRhaW5lcnMsIG5hbWVTcGFjZSkge1xuICAgICAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXS5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UuYWRkQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0uc3BsaWNlKF9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSwgMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UucmVtb3ZlQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wID09PSAnYWRkJykge1xuICAgICAgICAgICAgICBfY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLmFkZENvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9jb250YWluZXJzLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5yZW1vdmVDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDb250YWluZXIoZWwpIHtcbiAgICAgIHJldHVybiBkcmFrZS5jb250YWluZXJzLmluZGV4T2YoZWwpICE9PSAtMSB8fCBvLmlzQ29udGFpbmVyKGVsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NvbnRhaW5lck5hbWVTcGFjZWQoZWwpIHtcbiAgICAgIHZhciBuYW1lU3BhY2U7XG4gICAgICBmb3IgKG5hbWVTcGFjZSBpbiBkcmFrZS5jb250YWluZXJzKSB7XG4gICAgICAgIGlmIChkcmFrZS5jb250YWluZXJzLmhhc093blByb3BlcnR5KG5hbWVTcGFjZSkgJiYgZHJha2UuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YoZWwpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZlbnRzKHJlbSkge1xuICAgICAgdmFyIG9wID0gcmVtID8gJ29mZicgOiAnb24nO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNldXAnLCByZWxlYXNlKTtcblxuICAgICAgaW5pdGlhbENvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiBhZGRNb3VzZURvd24oY29udGFpbmVyKSB7XG4gICAgICAgIHJlZ0V2ZW50KGNvbnRhaW5lciwgJ29uJywgJ21vdXNlZG93bicsIGdyYWIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGV2ZW50cyh0cnVlKTtcbiAgICAgIGRyYWtlLnJlbW92ZUNvbnRhaW5lcihfY29udGFpbmVycyk7XG4gICAgICByZWxlYXNlKHt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiKGUpIHtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIHZhciBpdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgIC8vIGZpbHRlciBzb21lIG9kZCBzaXR1YXRpb25zXG4gICAgICBpZiAoKGUud2hpY2ggIT09IDAgJiYgZS53aGljaCAhPT0gMSkgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm47IC8vIHdlIG9ubHkgY2FyZSBhYm91dCBob25lc3QtdG8tZ29kIGxlZnQgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgZHJhZyBjYW4gc3RhcnRcbiAgICAgIGlmIChzdGFydChpdGVtKSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG9tYXRpY2x5IGRldGVjdCBkaXJlY3Rpb24gb2YgZWxlbWVudHMgaWYgbm90IHNldCBpbiBvcHRpb25zXG4gICAgICBpZiAoIW8uZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgcGFyZW50SGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICBwYXJlbnRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBjaGlsZEhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGNoaWxkV2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuICAgICAgICBvLmRpcmVjdGlvbiA9IHBhcmVudEhlaWdodCAvIGNoaWxkSGVpZ2h0IDwgcGFyZW50V2lkdGggLyBjaGlsZFdpZHRoID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXMsIHVzZWQgdG8gcmVuZGVyIF9taXJyb3IgZm9yIGZpcnN0IHRpbWVcbiAgICAgIHZhciBvZmZzZXQgPSBnZXRPZmZzZXQoX2l0ZW0pO1xuICAgICAgX29mZnNldFggPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5sZWZ0O1xuICAgICAgX29mZnNldFkgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC50b3A7XG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIC8vIGxpbWl0aW5nIGFyZWEgb2YgX21pcnJvciBtb3ZlbWVudCwgZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXNcbiAgICAgIGlmIChvLmJvdW5kaW5nQm94KSB7XG4gICAgICAgIF9vZmZzZXRYciA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LnJpZ2h0O1xuICAgICAgICBfb2Zmc2V0WWIgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC5ib3R0b207XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbGF5ZWQgcmVuZGVyaW5nXG4gICAgICBpZiAodHlwZW9mIG8uZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIF9yZW5kZXJUaW1lciA9ICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlbmRlck1pcnJvckFuZERyYWcoZSk7XG4gICAgICAgIH0sIG8uZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckFuZERyYWcoZSkge1xuICAgICAgYWRkQ2xhc3MoX2NvcHkgfHwgX2l0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIHJlbmRlck1pcnJvckltYWdlKCk7XG4gICAgICAvLyBpbml0aWFsIHBvc2l0aW9uXG4gICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIF9vZmZzZXRYICsgJ3B4JztcbiAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSBfb2Zmc2V0WSArICdweCc7XG5cbiAgICAgIGRyYWcoZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdGFydChpdGVtKSB7XG4gICAgICB2YXIgaGFuZGxlID0gaXRlbTtcblxuICAgICAgaWYgKGRyYWtlLmRyYWdnaW5nICYmIF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBhbHJlYWR5IGRyYWdnaW5nXG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBkb24ndCBkcmFnIGNvbnRhaW5lciBpdHNlbGZcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGl0ZW0ucGFyZW50RWxlbWVudCAmJiAhX2lzQ29udGFpbmVyKGl0ZW0ucGFyZW50RWxlbWVudCkpIHtcbiAgICAgICAgLy8gYnJlYWsgbG9vcCBpZiB1c2VyIHRyaWVzIHRvIGRyYWcgaXRlbSB3aGljaCBpcyBjb25zaWRlcmVkIGludmFsaWQgaGFuZGxlXG4gICAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtID0gaXRlbS5wYXJlbnRFbGVtZW50OyAvLyBkcmFnIHRhcmdldCBzaG91bGQgYmUgaW1tZWRpYXRlIGNoaWxkIG9mIGNvbnRhaW5lclxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRhaW5lciA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghY29udGFpbmVyIHx8IG8uaW52YWxpZChpdGVtLCBoYW5kbGUpIHx8ICFvLm1vdmVzKGl0ZW0sIGNvbnRhaW5lciwgaGFuZGxlLCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwpKSB7IC8vIGlzIG1vdmFibGVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbmQoKTtcblxuICAgICAgLy8gcHJlcGFyZSBtb2RlbHMgb3BlcmF0aW9uc1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGluaXRpYWxDb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSxcbiAgICAgICAgICBpdGVtSW5kZXggPSBkb21JbmRleE9mKGl0ZW0sIGNvbnRhaW5lcik7XG5cbiAgICAgICAgX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBpdGVtSW5kZXg7XG4gICAgICAgIF9zb3VyY2VNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsW2NvbnRhaW5lckluZGV4XTtcbiAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICBfaXRlbU1vZGVsID0gX3NvdXJjZU1vZGVsW2l0ZW1JbmRleF07XG4gICAgICAgIGlmIChvLmNvcHkpIHtcbiAgICAgICAgICBfY29weU1vZGVsID0gYW5ndWxhci5jb3B5KF9pdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLmNvcHkpIHtcbiAgICAgICAgX2NvcHkgPSBpdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfY29weSwgaXRlbSwgX2NvcHlNb2RlbCwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3NvdXJjZSA9IGNvbnRhaW5lcjtcbiAgICAgIF9pdGVtID0gaXRlbTtcbiAgICAgIF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IG5leHRFbChpdGVtKTtcblxuICAgICAgZHJha2UuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJhZycsIF9pdGVtLCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52YWxpZFRhcmdldChlbCkge1xuICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICdBJyB8fCBlbC50YWdOYW1lID09PSAnQlVUVE9OJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCchISEhISBJIGhhdmVudCBzZWVuIHRoaXMgbWVzc2FnZSBpbiBhbnkgY2FzZScpO1xuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICAgIGRyb3AoaXRlbSwgaXRlbS5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWxlYXNlKGUpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSk7XG5cbiAgICAgIGlmIChkcm9wVGFyZ2V0ICYmIChvLmNvcHkgPT09IGZhbHNlIHx8IGRyb3BUYXJnZXQgIT09IF9zb3VyY2UpKSB7XG4gICAgICAgIC8vIGZvdW5kIHZhbGlkIHRhcmdldCBhbmQgKGlzIG5vdCBjb3B5IGNhc2Ugb3IgdGFyZ2V0IGlzIG5vdCBpbml0aWFsIGNvbnRhaW5lcilcbiAgICAgICAgZHJvcChpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAoby5yZW1vdmVPblNwaWxsKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFmdGVyIHJlbGVhc2UgdGhlcmUgaXMgbm8gY29udGFpbmVyIGhvdmVyZWRcbiAgICAgIF90YXJnZXRDb250YWluZXIgPSBudWxsO1xuXG4gICAgICAvLyByZW1vdmUgY2xhc3NlcyBpZiB1c2VkXG4gICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiYgX2xhc3RPdmVyRWxlbSkge1xuICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgX2xhc3RPdmVyRWxlbSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ3JlbGVhc2UnLCBpdGVtLCBfc291cmNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcm9wKGl0ZW0sIHRhcmdldCkge1xuICAgICAgaWYgKG8uc2NvcGUgJiYgaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCkpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSwgX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9IGVsc2UgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJvcCcsIGl0ZW0sIHRhcmdldCwgX3NvdXJjZSwgX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQsXG4gICAgICAgIGl0ZW1Nb2RlbDtcblxuICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtTW9kZWwgPSBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWw7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UoX3RhcmdldE1vZGVsLmluZGV4T2YoaXRlbU1vZGVsKSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoby5jb3B5ID8gJ2NhbmNlbCcgOiAncmVtb3ZlJywgaXRlbSwgcGFyZW50LCBpdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCwgX3RhcmdldE1vZGVsKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWwocmV2ZXJ0KSB7XG4gICAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZXZlcnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgPyByZXZlcnQgOiBvLnJldmVydE9uU3BpbGwsXG4gICAgICAgIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICBpZiAocGFyZW50ID09PSBfc291cmNlICYmIG8uY29weSkge1xuICAgICAgICBjb25zb2xlLmxvZygnISEhISEhISEhISEhISEhISEgSSB0aGluayB0aGlzIGlzIG5ldmVyIHBvc3NpYmxlIGJlY2F1c2UgY29weSBjYW5ub3QgYmUgcGxhY2VkIGludG8gc291cmNlJyk7XG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX2NvcHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UoX3RhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCksIDEsIF9jb3B5TW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpbml0aWFsID0gaXNJbml0aWFsUGxhY2VtZW50KHBhcmVudCk7XG4gICAgICBpZiAoaW5pdGlhbCA9PT0gZmFsc2UgJiYgby5jb3B5ID09PSBmYWxzZSAmJiByZXZlcnRzKSB7XG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBfc291cmNlLmluc2VydEJlZm9yZShpdGVtLCBfaW5pdGlhbFNpYmxpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICAgIC8vIG1vdmUgYmFjayB0byBpbml0aWFsIHBsYWNlbWVudFxuICAgICAgICAgIG1vdmVJbkNvbnRhaW5lcnNNb2RlbChfaW5pdGlhbEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoby5zY29wZSAmJiAoaW5pdGlhbCB8fCByZXZlcnRzKSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlKTtcbiAgICAgIH0gZWxzZSBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcm9wJywgaXRlbSwgcGFyZW50LCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgICAgcmVtb3ZlTWlycm9ySW1hZ2UoKTtcblxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgcm1DbGFzcyhpdGVtLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhbmNlbCB0aW1lclxuICAgICAgaWYgKF9yZW5kZXJUaW1lcikge1xuICAgICAgICAkdGltZW91dC5jYW5jZWwoX3JlbmRlclRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgZHJha2UuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJhZ2VuZCcsIGl0ZW0pO1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdvdXQnLCBpdGVtLCBfbGFzdERyb3BUYXJnZXQsIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBfc291cmNlID0gX2l0ZW0gPSBfY29weSA9IF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IF9zb3VyY2VNb2RlbCA9IG51bGw7XG4gICAgICBfaXRlbU1vZGVsID0gX2NvcHlNb2RlbCA9IF9pbml0aWFsSW5kZXggPSBfY3VycmVudEluZGV4ID0gX3JlbmRlclRpbWVyID0gX2xhc3REcm9wVGFyZ2V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpcyBpdGVtIGN1cnJlbnRseSBwbGFjZWQgaW4gb3JpZ2luYWwgY29udGFpbmVyIGFuZCBvcmlnaW5hbCBwb3NpdGlvbj9cbiAgICBmdW5jdGlvbiBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCBzKSB7XG4gICAgICB2YXIgc2libGluZyA9IHMgfHwgKF9taXJyb3IgPyBfY3VycmVudFNpYmxpbmcgOiBuZXh0RWwoX2l0ZW0gfHwgX2NvcHkpKTtcbiAgICAgIHJldHVybiB0YXJnZXQgPT09IF9zb3VyY2UgJiYgc2libGluZyA9PT0gX2luaXRpYWxTaWJsaW5nO1xuICAgIH1cblxuICAgIC8vIGZpbmQgdmFsaWQgZHJvcCBjb250YWluZXJcbiAgICBmdW5jdGlvbiBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZWxlbWVudEJlaGluZEN1cnNvcjtcblxuICAgICAgd2hpbGUgKHRhcmdldCAmJiAhYWNjZXB0ZWQoKSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG5cbiAgICAgIGZ1bmN0aW9uIGFjY2VwdGVkKCkge1xuICAgICAgICB2YXIgYWNjZXB0cyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfaXNDb250YWluZXIodGFyZ2V0KSkgeyAvLyBpcyBkcm9wcGFibGU/XG4gICAgICAgICAgX3RhcmdldENvbnRhaW5lciA9IHRhcmdldDtcblxuICAgICAgICAgIHZhciBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZCh0YXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKHRhcmdldCwgaW1tZWRpYXRlLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgICAgIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCByZWZlcmVuY2UpO1xuICAgICAgICAgIGFjY2VwdHMgPSBpbml0aWFsID8gdHJ1ZSA6IG8uYWNjZXB0cyhfaXRlbSwgdGFyZ2V0LCBfc291cmNlLCByZWZlcmVuY2UsIF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCk7XG5cbiAgICAgICAgICBpZiAoYWNjZXB0cyAmJiBvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICAgIGlmICghby5uYW1lU3BhY2UpIHtcbiAgICAgICAgICAgICAgX3RhcmdldE1vZGVsID0gX2NvbnRhaW5lcnNNb2RlbFtkcmFrZS5jb250YWluZXJzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lU3BhY2UgaW4gZHJha2UuY29udGFpbmVycykge1xuICAgICAgICAgICAgICAgIGlmIChkcmFrZS5jb250YWluZXJzLmhhc093blByb3BlcnR5KG5hbWVTcGFjZSkgJiYgZHJha2UuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YodGFyZ2V0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW25hbWVTcGFjZV1bZHJha2UuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY2xhc3MgaWYgZWxlbWVudCBpcyBlbmFibGVkIGZvciBpdCBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IHRoZSBjbGFzc1xuICAgICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiZcbiAgICAgICAgICBoYXNDbGFzcyh0YXJnZXQsIG8uY2xhc3Nlcy5vdmVyQWN0aXZlKSAmJlxuICAgICAgICAgIHRhcmdldCAhPT0gX2xhc3RPdmVyRWxlbSkge1xuXG4gICAgICAgICAgaWYgKF9sYXN0T3ZlckVsZW0pIHsgLy8gY2xlYXIgZnJvbSBwcmV2aW91c1xuICAgICAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2xhc3RPdmVyQ2xhc3MgPSBhY2NlcHRzID8gby5jbGFzc2VzLm92ZXJBY2NlcHRzIDogby5jbGFzc2VzLm92ZXJEZWNsaW5lcztcbiAgICAgICAgICBhZGRDbGFzcyh0YXJnZXQsIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICBfbGFzdE92ZXJFbGVtID0gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY2VwdHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgICBpZiAoIV9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAvLyB1cGRhdGUgY29vcmRpbmF0ZXNcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gY291bnQgbWlycm9yIGNvb3JkaWF0ZXNcbiAgICAgIHZhciB4ID0gX2NsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IF9jbGllbnRZIC0gX29mZnNldFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgICAgb2Zmc2V0Qm94O1xuXG4gICAgICAvLyBmaWxsIGV4dHJhIHByb3BlcnRpZXMgaWYgYm91bmRpbmdCb3ggaXMgdXNlZFxuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgcGFnZVggPSBnZXRDb29yZCgncGFnZVgnLCBlKTtcbiAgICAgICAgcGFnZVkgPSBnZXRDb29yZCgncGFnZVknLCBlKTtcbiAgICAgICAgb2Zmc2V0Qm94ID0gZ2V0T2Zmc2V0KG8uYm91bmRpbmdCb3gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW8ubG9ja1kpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWCA+IG9mZnNldEJveC5sZWZ0ICsgX29mZnNldFggJiYgcGFnZVggPCBvZmZzZXRCb3gucmlnaHQgKyBfb2Zmc2V0WHIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoby5ib3VuZGluZ0JveCkgeyAvLyBjaGVjayBhZ2FpbiBpbiBjYXNlIHVzZXIgc2Nyb2xsZWQgdGhlIHZpZXdcbiAgICAgICAgICBpZiAocGFnZVggPCBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIChwYWdlWCAtIG9mZnNldEJveC5sZWZ0KSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX21pcnJvcldpZHRoIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LnJpZ2h0KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIW8ubG9ja1gpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWSA+IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSAmJiBwYWdlWSA8IG9mZnNldEJveC5ib3R0b20gKyBfb2Zmc2V0WWIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGNoZWNrIGFnYWluIGluIGNhc2UgdXNlciBzY3JvbGxlZCB0aGUgdmlld1xuICAgICAgICAgIGlmIChwYWdlWSA8IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSkge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIChwYWdlWSAtIG9mZnNldEJveC50b3ApICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9taXJyb3JIZWlnaHQgLSAocGFnZVkgLSBvZmZzZXRCb3guYm90dG9tKSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSksXG4gICAgICAgIGNoYW5nZWQgPSBkcm9wVGFyZ2V0ICE9PSBudWxsICYmIGRyb3BUYXJnZXQgIT09IF9sYXN0RHJvcFRhcmdldDtcblxuICAgICAgICBpZiAoZWxlbWVudEJlaGluZEN1cnNvciAhPT0gX2xhc3RFbGVtZW50QmVoaW5kQ3Vyc29yKSB7XG4gICAgICAgICAgZmlyZUV2ZW50KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9kcmFnRW50ZXJFdmVudCk7XG4gICAgICAgICAgaWYgKF9sYXN0RWxlbWVudEJlaGluZEN1cnNvcikge1xuICAgICAgICAgICAgZmlyZUV2ZW50KF9sYXN0RWxlbWVudEJlaGluZEN1cnNvciwgX2RyYWdMZWF2ZUV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2xhc3RFbGVtZW50QmVoaW5kQ3Vyc29yID0gZWxlbWVudEJlaGluZEN1cnNvcjtcbiAgICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlZCB8fCBkcm9wVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgb3V0KCk7XG4gICAgICAgICAgX2xhc3REcm9wVGFyZ2V0ID0gZHJvcFRhcmdldDtcbiAgICAgICAgICBvdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2xhc3REcm9wVGFyZ2V0ID0gZHJvcFRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkbyBub3QgY29weSBpbiBzYW1lIGNvbnRhaW5lclxuICAgICAgaWYgKGRyb3BUYXJnZXQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwgJiYgaXRlbS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9IGVsc2UgaWYgKG8uY29udGFpbmVyc01vZGVsICYmIF9sYXN0VGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSAhPT0gLTEpIHtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsLnNwbGljZShfbGFzdFRhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCksIDEpO1xuICAgICAgICAgICRyb290U2NvcGUuJGFwcGx5QXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZWZlcmVuY2UsXG4gICAgICAgIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpLFxuICAgICAgICByZWZlcmVuY2VJbmRleDtcblxuICAgICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgaW1tZWRpYXRlLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuICAgICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBpZiAocmVmZXJlbmNlKSB7IC8vIHJlZmVyZW5jZSBpcyBudWxsIGlmIGRyYWcgaXMgb3ZlciBsYXN0IGVsZW1lbnRcbiAgICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gZG9tSW5kZXhPZihyZWZlcmVuY2UsIGRyb3BUYXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdHJ1ZSAmJiAhby5jb3B5KSB7XG4gICAgICAgIC8vIHRoZSBjYXNlIHRoYXQgbWlycm9yIGlzIG5vdCBvdmVyIHZhbGlkIHRhcmdldCBhbmQgcmV2ZXJ0aW5nIGlzIG9uIGFuZCBjb3B5IGlzIG9mZlxuICAgICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICAgIGRyb3BUYXJnZXQgPSBfc291cmNlO1xuXG4gICAgICAgIC8vIGdldHRpbmcgbW9kZWwgaW50aXRpYWwgcHJvcGVydGllcyBpbnRvIGN1cnJlbnRcbiAgICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfaW5pdGlhbEluZGV4O1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGUgY2FzZSB0aGF0IG1pcnJvciBpcyBub3Qgb3ZlciB2YWxpZCB0YXJnZXQgYW5kIHJlbW92aW5nIGlzIG9uIG9yIGNvcHkgaXMgb25cbiAgICAgICAgaWYgKChvLmNvcHkgfHwgby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSAmJiBpdGVtLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyByZW1vdmUgaXRlbSBvciBjb3B5IG9mIGl0ZW1cbiAgICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8XG4gICAgICAgIHJlZmVyZW5jZSAhPT0gaXRlbSAmJlxuICAgICAgICByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSAmJlxuICAgICAgICByZWZlcmVuY2UgIT09IF9jdXJyZW50U2libGluZykge1xuICAgICAgICAvLyBtb3ZpbmcgaXRlbS9jb3B5IHRvIG5ldyBjb250YWluZXIgZnJvbSBwcmV2aW91cyBvbmVcbiAgICAgICAgX2N1cnJlbnRTaWJsaW5nID0gcmVmZXJlbmNlO1xuXG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBkcm9wVGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCByZWZlcmVuY2UpOyAvLyBpZiByZWZlcmVuY2UgaXMgbnVsbCBpdGVtIGlzIGluc2VydGVkIGF0IHRoZSBlbmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwocmVmZXJlbmNlSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdzaGFkb3cnLCBpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtb3ZlZCh0eXBlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQodHlwZSwgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb3ZlcigpIHtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICBtb3ZlZCgnb3ZlcicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG91dCgpIHtcbiAgICAgICAgaWYgKF9sYXN0RHJvcFRhcmdldCkge1xuICAgICAgICAgIG1vdmVkKCdvdXQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVJbkNvbnRhaW5lcnNNb2RlbChyZWZlcmVuY2VJbmRleCkge1xuICAgICAgaWYgKF9sYXN0VGFyZ2V0TW9kZWwgPT09IF90YXJnZXRNb2RlbCkge1xuICAgICAgICBpZiAocmVmZXJlbmNlSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF90YXJnZXRNb2RlbC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gcmVmZXJlbmNlSW5kZXggPiBfY3VycmVudEluZGV4ID8gcmVmZXJlbmNlSW5kZXggLSAxIDogcmVmZXJlbmNlSW5kZXg7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UoaW5kZXgsIDAsIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpWzBdKTtcbiAgICAgICAgX2N1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlZmVyZW5jZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfdGFyZ2V0TW9kZWwubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW8uY29weSB8fCBfbGFzdFRhcmdldE1vZGVsICE9PSBfc291cmNlTW9kZWwpIHsgLy8gZG9udCByZW1vdmUgb3JpZ2luYWwgZnJvbSBzb3VyY2Ugd2hpbGUgY29weWluZ1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghby5jb3B5IHx8IF90YXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpID09PSAtMSkgeyAvLyBkb250IHBsYWNlIGNvcHkgdHdpY2UgaW4gb25lIGRyYWdcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAwLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwpO1xuICAgICAgICAgIF9jdXJyZW50SW5kZXggPSByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbENvbnRhaW5lcihlKSB7XG4gICAgICBpZiAoX3RhcmdldENvbnRhaW5lcikge1xuICAgICAgICB2YXIgYmVmb3JlID0gX3RhcmdldENvbnRhaW5lci5zY3JvbGxUb3A7XG4gICAgICAgIF90YXJnZXRDb250YWluZXIuc2Nyb2xsVG9wICs9IGUuZGVsdGFZO1xuICAgICAgICAvLyBibG9jayBzY3JvbGwgb2YgdGhlIGRvY3VtZW50IHdoZW4gY29udGFpbmVyIGNhbiBiZSBzY3JvbGxlZFxuICAgICAgICBpZiAoYmVmb3JlICE9PSBfdGFyZ2V0Q29udGFpbmVyLnNjcm9sbFRvcCkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWlycm9ySW1hZ2UoKSB7XG4gICAgICBpZiAoX21pcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmVjdCA9IF9pdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgX21pcnJvciA9IF9pdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIF9taXJyb3JXaWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICBfbWlycm9ySGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgICBfbWlycm9yLnN0eWxlLndpZHRoID0gZ2V0UmVjdFdpZHRoKHJlY3QpICsgJ3B4JztcbiAgICAgIF9taXJyb3Iuc3R5bGUuaGVpZ2h0ID0gZ2V0UmVjdEhlaWdodChyZWN0KSArICdweCc7XG4gICAgICBybUNsYXNzKF9taXJyb3IsIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIGFkZENsYXNzKF9taXJyb3IsIG8uY2xhc3Nlcy5taXJyb3IpO1xuICAgICAgby5taXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoX21pcnJvcik7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvbicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgIGFkZENsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29uJywgJ3doZWVsJywgc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9taXJyb3IsIF9pdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJtQ2xhc3MoYm9keSwgby5jbGFzc2VzLnVuc2VsZWN0YWJsZSk7XG4gICAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgJ29mZicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29mZicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICAgIF9taXJyb3IucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChfbWlycm9yKTtcbiAgICAgICAgX21pcnJvciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgdGFyZ2V0KSB7XG4gICAgICB2YXIgaW1tZWRpYXRlID0gdGFyZ2V0O1xuICAgICAgd2hpbGUgKGltbWVkaWF0ZSAhPT0gZHJvcFRhcmdldCAmJiBpbW1lZGlhdGUucGFyZW50RWxlbWVudCAhPT0gZHJvcFRhcmdldCkge1xuICAgICAgICBpbW1lZGlhdGUgPSBpbW1lZGlhdGUucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChpbW1lZGlhdGUgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbW1lZGlhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIHRhcmdldCwgeCwgeSkge1xuICAgICAgdmFyIGhvcml6b250YWwgPSBvLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIHJlZmVyZW5jZSA9IHRhcmdldCAhPT0gZHJvcFRhcmdldCA/IGluc2lkZSgpIDogb3V0c2lkZSgpO1xuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcblxuICAgICAgZnVuY3Rpb24gb3V0c2lkZSgpIHsgLy8gc2xvd2VyLCBidXQgYWJsZSB0byBmaWd1cmUgb3V0IGFueSBwb3NpdGlvblxuICAgICAgICB2YXIgbGVuID0gZHJvcFRhcmdldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgZWw7XG4gICAgICAgIHZhciByZWN0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBlbCA9IGRyb3BUYXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmIHJlY3QubGVmdCA+IHgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFob3Jpem9udGFsICYmIHJlY3QudG9wID4geSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaW5zaWRlKCkgeyAvLyBmYXN0ZXIsIGJ1dCBvbmx5IGF2YWlsYWJsZSBpZiBkcm9wcGVkIGluc2lkZSBhIGNoaWxkIGVsZW1lbnRcbiAgICAgICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeCA+IHJlY3QubGVmdCArIGdldFJlY3RXaWR0aChyZWN0KSAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHkgPiByZWN0LnRvcCArIGdldFJlY3RIZWlnaHQocmVjdCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzb2x2ZShhZnRlcikge1xuICAgICAgICByZXR1cm4gYWZ0ZXIgPyBuZXh0RWwodGFyZ2V0KSA6IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGwoc2Nyb2xsUHJvcCwgb2Zmc2V0UHJvcCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbb2Zmc2V0UHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbb2Zmc2V0UHJvcF07XG4gICAgICB9XG4gICAgICBpZiAoZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRFbGVtZW50W3Njcm9sbFByb3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJvZHlbc2Nyb2xsUHJvcF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoJ3Njcm9sbFRvcCcsICdwYWdlWU9mZnNldCcpLFxuICAgICAgICBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKCdzY3JvbGxMZWZ0JywgJ3BhZ2VYT2Zmc2V0Jyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCArIHNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20gKyBzY3JvbGxUb3BcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEJlaGluZFBvaW50KHBvaW50LCB4LCB5KSB7XG4gICAgICBpZiAoIXggJiYgIXkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgcCA9IHBvaW50IHx8IHt9LFxuICAgICAgICBzdGF0ZSA9IHAuY2xhc3NOYW1lLFxuICAgICAgICBlbDtcbiAgICAgIHAuY2xhc3NOYW1lICs9ICcgJyArIG8uY2xhc3Nlcy5oaWRlO1xuICAgICAgZWwgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgICAgcC5jbGFzc05hbWUgPSBzdGF0ZTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVnRXZlbnQoZWwsIG9wLCB0eXBlLCBmbikge1xuICAgIHZhciB0b3VjaCA9IHtcbiAgICAgICAgbW91c2V1cDogJ3RvdWNoZW5kJyxcbiAgICAgICAgbW91c2Vkb3duOiAndG91Y2hzdGFydCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ3RvdWNobW92ZSdcbiAgICAgIH0sXG4gICAgICAkZWwgPSBhbmd1bGFyLmVsZW1lbnQoZWwpO1xuXG4gICAgaWYgKHR5cGUgIT09ICd3aGVlbCcpIHtcbiAgICAgICRlbFtvcF0odG91Y2hbdHlwZV0sIGZuKTtcbiAgICB9XG4gICAgJGVsW29wXSh0eXBlLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXZlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0RWwoZWwpIHtcbiAgICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG5cbiAgICBmdW5jdGlvbiBtYW51YWxseSgpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgICBkbyB7XG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vQ2Fubm90IHVzZSBhbmd1bGFyLmlzRWxlbWVudCBiZWNhdXNlIHdlIG5lZWQgdG8gY2hlY2sgcGxhaW4gZG9tIGVsZW1lbnQsIG5vIGpRbGl0ZSB3cmFwcGVkXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcbiAgICAgIG8gJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9va3VwQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNhY2hlZCA9IF9jYWNoZVtjbGFzc05hbWVdO1xuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIGNhY2hlZC5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBfY2FjaGVbY2xhc3NOYW1lXSA9IGNhY2hlZCA9IG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMpJyArIGNsYXNzTmFtZSArICcoPzpcXFxcc3wkKScsICdnJyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBlbC5jbGFzc05hbWU7XG4gICAgaWYgKCFjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoIWxvb2t1cENsYXNzKGNsYXNzTmFtZSkudGVzdChjdXJyZW50KSkge1xuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBybUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShsb29rdXBDbGFzcyhjbGFzc05hbWUpLCAnICcpLnRyaW0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudEhvc3QoZSkge1xuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgICB2YXIgbWlzc01hcCA9IHtcbiAgICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgICB9O1xuICAgIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RbY29vcmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdFdpZHRoKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0SGVpZ2h0KHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgfHwgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9tSW5kZXhPZihjaGlsZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYW5ndWxhci5lbGVtZW50KHBhcmVudCkuY2hpbGRyZW4oKSwgY2hpbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlyZUV2ZW50KHRhcmdldCwgZSkge1xuICAgIGlmICh0YXJnZXQuZGlzcGF0Y2hFdmVudCkge1xuICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5maXJlRXZlbnQoJ29uJyArIGUuZXZlbnRUeXBlLCBlKTtcbiAgICB9XG4gIH1cblxufV0pO1xuIl19
