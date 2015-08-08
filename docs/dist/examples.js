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
      angular.element(bar).on('dragularenter', function(e) {
        container.scrollTop += inc;
        timer = $interval(function moveScroll() {
          console.log('tick', bar, container, inc);
          container.scrollTop += inc;
        }, speed);
      });
      angular.element(bar).on('dragularleave', function(e) {
        $interval.cancel(timer);
      });
    }

    // in case you release drag over bar
    $scope.$on('release', function stopScroll () {
    	$interval.cancel(timer);
    })

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
$templateCache.put("partials/partial-contribute.html","<div class=\'container\'>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      Contributing notes will be moved here, since then, please use <a href=\"https://github.com/luckylooke/dragular/blob/master/CONTRIBUTING.md\">contribution notes on github</a>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("partials/partial-docs.html","<div class=\'container\'>\n  <div id=\"rowOffcanvas\" class=\"row row-offcanvas row-offcanvas-left\">\n    <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\n      <div class=\"list-group\">\n        <a ui-sref=\"docs.detail({link:\'docsInstall\'})\" ui-sref-active=\"active\" class=\"list-group-item\">Installation</a>\n        <a ng-repeat=\"example in examplesList\" ui-sref=\"docs.detail({link:example.link})\" ui-sref-active=\"active\" class=\"list-group-item\">{{example.title}}</a>\n      </div>\n    </div>\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-xs-12 col-sm-9\">\n      <p class=\"pull-left visible-xs\">\n        <button type=\"button\" ng-click=\"toggleSidebar()\" class=\"btn btn-primary btn-xs\">Toggle nav</button>\n      </p>\n      <!-- docs.detail -->\n      <div ui-view onload=\"highlightCode()\"></div>\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");
$templateCache.put("partials/partial-home.html","<div class=\'container\'>\n  <div class=\"row\">\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-lg-12\">\n      <div class=\"jumbotron\">\n        <h1>DRAGULAR</h1>\n        <p>Angular drag&drop based on <a href=\"http://github.com/bevacqua/dragula\">dragula</a>.</p>\n        <p><a class=\"btn btn-primary btn-lg\" ui-sref=\"docs\" role=\"button\">Live examples in docs</a></p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p>Browser support includes every sane browser and **IE7+**. <sub>_(Granted you polyfill the functional `Array` methods in ES5)_</sub></p>\n          <h2>Inspiration</h2>\n          <p>Have you ever wanted a drag and drop library that just works? That actually understands where to place the elements when they are dropped? That doesn’t need you to do a zillion things to get it to work? Well, so did <a href=\"https://github.com/bevacqua\">Nicolas Bevacqua</a> and I have forked it into angular module and also put some features!</p>\n          <p><b>Actual version 2.0.1 is based on dragula 2.1.2 and tested with angular 1.4.3.</b></p>\n          <h2>Differences of dragular (against dragula)</h2>\n          <ul>\n            <li>replaced crossvent with angulars event binding</li>\n            <li>replaced contra.emitter with $scope.$emit if scope provided in options (options.scope)</li>\n            <li>encapsulated the code into angular factory (dragularService)</li>\n            <li>created directive dragular where options can be passed providing scope property name</li>\n            <li>both service and directive provided as angular module (dragularModule)</li>\n            <li>automatic direction if not provided in options, instead of default vertical</li>\n            <li>accepting arraylike objects as containers array</li>\n            <li>accepting custom classes via option.classes</li>\n            <li>namespaced containers groups available via option.nameSpace</li>\n            <li>boundingBox (dragging element can me moved only in specific area)</li>\n            <li>lockX/Y (dragging element can me moved only in specific direction)</li>\n            <li>more examples</li>\n            <li>accept JSON options in dragular directive (#2)</li>\n            <li>add/remove with ng-repeat</li>\n            <li>added syntax highlighter to example codes</li>\n          </ul>\n          <h2>Todo</h2>\n          <ul>\n            <li>example for delay</li>\n            <li>o.isContainer in _isContainer (fn o.isContainerGetModel(containerElm))</li>\n            <li>solve mixing with and without model containers</li>\n            <li>remove npm workflow</li>\n            <li>support selectors in service (#2)?</li>\n          </ul>\n          <h2>Features</h2>\n          <ul>\n            <li>provided as service and also as directive</li>\n            <li>Super easy to set up</li>\n            <li>No bloated dependencies</li>\n            <li><strong>Figures out sort order</strong> on its own</li>\n            <li>A shadow where the item would be dropped offers <strong>visual feedback</strong></li>\n            <li>Touch events!</li>\n          </ul>\n          <h2>For installation, usage and examples go to <a ui-sref=\"docs\">docs</a></h2>\n        </div>\n      </div>\n      <!--/row-->\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");}]);

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
      target.fireEvent("on" + e.eventType, e);
    }
  }

}]);

},{"./dragularModule":26}]},{},[22])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0LmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZXNBcHAuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlc1JvdXRlci5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL3RlbXBsYXRlcy5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhckRpcmVjdGl2ZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhck1vZHVsZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLFNBQVMsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDaEcsZ0JBQWdCLFNBQVM7TUFDdkI7OztBQ1hOOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsU0FBUyxDQUFDLFlBQVksbUJBQW1CLFNBQVMsU0FBUyxVQUFVLGlCQUFpQjtJQUNoRyxnQkFBZ0IsU0FBUzs7O0FBRzdCO0dBQ0csV0FBVyxjQUFjLENBQUMsVUFBVSxZQUFZLG1CQUFtQixTQUFTLFNBQVMsUUFBUSxVQUFVLGlCQUFpQjtJQUN2SCxPQUFPLFNBQVMsQ0FBQztNQUNmLFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7O0lBRVgsT0FBTyxTQUFTLENBQUM7TUFDZixTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLElBQUksYUFBYSxTQUFTLFdBQVcsR0FBRyxHQUFHO0lBQzNDLGdCQUFnQixDQUFDLFdB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QUFTLEtBQUs7OztFQUc1QyxTQUFTLFdBQVcsT0FBTyxRQUFRO0lBQ2pDLE9BQU8sTUFBTSxVQUFVLFFBQVEsS0FBSyxRQUFRLFFBQVEsUUFBUSxZQUFZOzs7RUFHMUUsU0FBUyxVQUFVLFFBQVEsR0FBRztJQUM1QixJQUFJLE9BQU8sZUFBZTtNQUN4QixPQUFPLGNBQWM7V0FDaEI7TUFDTCxPQUFPLFVBQVUsT0FBTyxFQUFFLFdBQVc7Ozs7O0FBSzNDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0Jhc2ljJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQmFzaWMnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XG4gIH1dKTtcblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0Jhc2ljTW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XG4gICAgICBjb250ZW50OiAnSXRlbSA1J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDYnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA4J1xuICAgIH1dO1xuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpO1xuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCb3VuZGluZ0JveCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIHZhciBib3VuZGluZ0JveCA9ICRlbGVtZW50WzBdO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBib3VuZGluZ0JveDogYm91bmRpbmdCb3hcbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQm91bmRpbmdCb3hMb2NrWCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIHZhciBib3VuZGluZ0JveCA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKVswXTtcbiAgICBkcmFndWxhclNlcnZpY2UoYm91bmRpbmdCb3gsIHtcbiAgICAgIGJvdW5kaW5nQm94OiBib3VuZGluZ0JveCxcbiAgICAgIGxvY2tYOiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0JvdW5kaW5nQm94TG9ja1knLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKClbMF07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKGJvdW5kaW5nQm94LCB7XG4gICAgICBib3VuZGluZ0JveDogYm91bmRpbmdCb3gsXG4gICAgICBsb2NrWTogdHJ1ZVxuICAgIH0pO1xuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQ29weScsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBjb3B5OiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0NvcHlNb2RlbCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICRzY29wZS5pdGVtczEgPSBbe1xuICAgICAgY29udGVudDogJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDMnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNCdcbiAgICB9XTtcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDUnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA3J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDgnXG4gICAgfV07XG4gICAgdmFyIGNvbnRhaW5lcnMgPSAkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCk7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogWyRzY29wZS5pdGVtczEsICRzY29wZS5pdGVtczJdLFxuICAgICAgY29weTogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdDdXN0b21DbGFzc2VzJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbWlycm9yOiAnY3VzdG9tLWdyZWVuLW1pcnJvcidcbiAgICAgIH1cbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdEaXJlY3RpdmUnLCBbJyRzY29wZScsIGZ1bmN0aW9uIERpcmVjdGl2ZUN0cmwoJHNjb3BlKSB7XG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbWlycm9yOiAnY3VzdG9tLWdyZWVuLW1pcnJvcidcbiAgICAgIH0sXG4gICAgICBuYW1lU3BhY2U6ICdzYW1lJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXG4gICAgfTtcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignRGlyZWN0aXZlTW9kZWwnLCBbJyRzY29wZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSkge1xuICAgICRzY29wZS5pdGVtczEgPSBbe1xuICAgICAgY29udGVudDogJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDMnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNCdcbiAgICB9XTtcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDUnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA3J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDgnXG4gICAgfV07XG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zMSxcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbWlycm9yOiAnY3VzdG9tLWdyZWVuLW1pcnJvcidcbiAgICAgIH0sXG4gICAgICBuYW1lU3BhY2U6ICdjb21tb24nIC8vIGp1c3QgY29ubmVjdGluZyBsZWZ0IGFuZCByaWdodCBjb250YWluZXJcbiAgICB9O1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gLmNvbnRyb2xsZXIoJ0RyYWdPdmVyQ2xhc3NlcycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcbiAgICAgIG5hbWVTcGFjZTogJ2FwcGxlcycsXG4gICAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcbiAgICB9KTtcbiAgICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMV0sICRlbGVtZW50LmNoaWxkcmVuKClbM11dLCB7XG4gICAgICBuYW1lU3BhY2U6ICdvcmFuZ2VzJyxcbiAgICAgIGRyYWdPdmVyQ2xhc3NlczogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdFdmVudHMnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UsICR0aW1lb3V0KSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICB9KTtcbiAgICAkc2NvcGUuJG9uKCdkcmFnJywgZnVuY3Rpb24oZSwgZWwpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZSgnIGV4LW1vdmVkJywgJycpO1xuICAgIH0pO1xuICAgICRzY29wZS4kb24oJ2Ryb3AnLCBmdW5jdGlvbihlLCBlbCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyBleC1tb3ZlZCc7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIC8vICRzY29wZS4kb24oJ2Nsb25lZCcsIG15Rm4oJ2Nsb25lZCcpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdkcmFnJywgbXlGbignZHJhZycpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdjYW5jZWwnLCBteUZuKCdjYW5jZWwnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignZHJvcCcsIG15Rm4oJ2Ryb3AnKSk7XG4gICAgLy8gJHNjb3BlLiRvbigncmVtb3ZlJywgbXlGbigncmVtb3ZlJykpO1xuICAgIC8vICRzY29wZS4kb24oJ2RyYWdlbmQnLCBteUZuKCdkcmFnZW5kJykpO1xuICAgIC8vICRzY29wZS4kb24oJ3NoYWRvdycsIG15Rm4oJ3NoYWRvdycpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdzaGFkb3dSZW1vdmVkJywgbXlGbignc2hhZG93JykpO1xuXG4gICAgLy8gZnVuY3Rpb24gbXlGbihldmVudE5hbWUpIHtcbiAgICAvLyAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXZlbnROYW1lLCBhcmd1bWVudHMpO1xuICAgIC8vICAgfTtcbiAgICAvLyB9XG5cbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignSGFuZGxlJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc05hbWUgPT09ICdoYW5kbGUnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOYW1lU3BhY2VzJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLCAkZWxlbWVudC5jaGlsZHJlbigpWzJdXSwge1xuICAgICAgbmFtZVNwYWNlOiAnYXBwbGVzJ1xuICAgIH0pO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzFdLCB7XG4gICAgICBuYW1lU3BhY2U6ICdvcmFuZ2VzJ1xuICAgIH0pO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzNdLCB7IC8vIG1peGVkXG4gICAgICBuYW1lU3BhY2U6IFsnb3JhbmdlcycsICdhcHBsZXMnXVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZXN0ZWROZ1JlcGVhdCcsIFsnJHRpbWVvdXQnLCAnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCR0aW1lb3V0LCAkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5nUmVwZWF0IHRvIGJlIHJlYWR5XG4gICAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQsIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiAhaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucygncm93LWhhbmRsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGExJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGE0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjQnXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjNCdcbiAgICAgIH1dXG4gICAgfV07XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ05lc3RlZE5nUmVwZWF0V2l0aE1vZGVsJywgWyckdGltZW91dCcsICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHRpbWVvdXQsICRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyB0aW1lb3VudCBkdWUgdG8gbmVzdGVkIG5nUmVwZWF0IHRvIGJlIHJlYWR5XG4gICAgICB2YXIgY29udGFpbmVyID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpLFxuICAgICAgICBwYXJlbnRDb250YWluZXJzID0gY29udGFpbmVyLmNoaWxkcmVuKCksXG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMgPSBbXTtcblxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGNvbnRhaW5lciwge1xuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXNcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb2xsZWN0IG5lc3RlZCBjb250aWFuZXJzXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudENvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmVzdGVkQ29udGFpbmVycy5wdXNoKHBhcmVudENvbnRhaW5lcnMuZXEoaSkuY2hpbGRyZW4oKVsxXSk7XG4gICAgICB9XG5cbiAgICAgIGRyYWd1bGFyU2VydmljZShuZXN0ZWRDb250YWluZXJzLCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAoZnVuY3Rpb24gZ2V0TmVzdGVkQ29udGFpbmVyc01vZGVsKCl7XG4gICAgICAgICAgdmFyIHBhcmVudCA9ICRzY29wZS5pdGVtcyxcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbCA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwucHVzaChwYXJlbnRbaV0uaXRlbXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyc01vZGVsO1xuICAgICAgICB9KSgpXG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGExJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGE0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjQnXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjNCdcbiAgICAgIH1dXG4gICAgfV07XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ05nUmVwZWF0JywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICAgICRzY29wZS5pdGVtcyA9IFt7XG4gICAgICBjb250ZW50OiAnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgJy1jb3B5J1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oKSB7XG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZ1JlcGVhdFdpdGhNb2RlbCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICRzY29wZS5pdGVtcyA9IFt7XG4gICAgICBjb250ZW50OiAnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSwge2NvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zfSk7XG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgJy1jb3B5J1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oKSB7XG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignUmVtb3ZlT25TcGlsbCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICByZW1vdmVPblNwaWxsOiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ1JldmVydE9uU3BpbGwnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgcmV2ZXJ0T25TcGlsbDogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdTY3JvbGxpbmdEcmFnJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGludGVydmFsLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG5cblxuICAgIHZhciB0aW1lcixcbiAgICAgIGxlZnRTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdFNjcm9sbCcpLFxuICAgICAgcmlnaHRTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHRTY3JvbGwnKSxcbiAgICAgIGxlZnRUb3BCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdFRvcEJhcicpLFxuICAgICAgbGVmdEJvdHRvbUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Qm90dG9tQmFyJyksXG4gICAgICByaWdodFRvcEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodFRvcEJhcicpLFxuICAgICAgcmlnaHRCb3R0b21CYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHRCb3R0b21CYXInKTtcblxuICAgIGRyYWd1bGFyU2VydmljZShbbGVmdFNjcm9sbCwgcmlnaHRTY3JvbGxdLCB7XG4gICAgICBzY29wZTogJHNjb3BlXG4gICAgfSk7XG5cbiAgICByZWdpc3RlckV2ZW50cyhsZWZ0VG9wQmFyLCBsZWZ0U2Nyb2xsLCAtNSk7XG4gICAgcmVnaXN0ZXJFdmVudHMobGVmdEJvdHRvbUJhciwgbGVmdFNjcm9sbCwgNSk7XG4gICAgcmVnaXN0ZXJFdmVudHMocmlnaHRUb3BCYXIsIHJpZ2h0U2Nyb2xsLCAtNSk7XG4gICAgcmVnaXN0ZXJFdmVudHMocmlnaHRCb3R0b21CYXIsIHJpZ2h0U2Nyb2xsLCA1KTtcblxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKGJhciwgY29udGFpbmVyLCBpbmMsIHNwZWVkKSB7XG4gICAgICBpZiAoIXNwZWVkKSB7XG4gICAgICAgIHNwZWVkID0gMjA7XG4gICAgICB9XG4gICAgICBhbmd1bGFyLmVsZW1lbnQoYmFyKS5vbignZHJhZ3VsYXJlbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCArPSBpbmM7XG4gICAgICAgIHRpbWVyID0gJGludGVydmFsKGZ1bmN0aW9uIG1vdmVTY3JvbGwoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RpY2snLCBiYXIsIGNvbnRhaW5lciwgaW5jKTtcbiAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wICs9IGluYztcbiAgICAgICAgfSwgc3BlZWQpO1xuICAgICAgfSk7XG4gICAgICBhbmd1bGFyLmVsZW1lbnQoYmFyKS5vbignZHJhZ3VsYXJsZWF2ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJGludGVydmFsLmNhbmNlbCh0aW1lcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBpbiBjYXNlIHlvdSByZWxlYXNlIGRyYWcgb3ZlciBiYXJcbiAgICAkc2NvcGUuJG9uKCdyZWxlYXNlJywgZnVuY3Rpb24gc3RvcFNjcm9sbCAoKSB7XG4gICAgXHQkaW50ZXJ2YWwuY2FuY2VsKHRpbWVyKTtcbiAgICB9KVxuXG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyLCBobGpzICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIHZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xuXG5cbnJlcXVpcmUoJy4uLy4uLy4uL3NyYy9kcmFndWxhck1vZHVsZScpO1xucmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblxuLyoqXG4gKiAgTW9kdWxlIEV4YW1wbGUgQXBwXG4gKlxuICogIERFTU8gYXBwIGZvciBkcmFndWxhciBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhclxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2V4YW1wbGVzQXBwJywgWydkcmFndWxhck1vZHVsZScsICd0ZW1wbGF0ZXMnLCAndWkucm91dGVyJ10pLmNvbnRyb2xsZXIoJ0V4QXBwQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLmV4YW1wbGVzTGlzdCA9IFt7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJhc2ljL2V4YW1wbGVCYXNpYy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCYXNpYycsXG4gICAgICAgIHRpdGxlOiAnQmFzaWMnXG4gICAgfSx7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCYXNpY1dpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnQmFzaWMgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRGlyZWN0aXZlL2V4YW1wbGVEaXJlY3RpdmUuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRGlyZWN0aXZlJyxcbiAgICAgICAgdGl0bGU6ICdEaXJlY3RpdmUnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ0RpcmVjdGl2ZSAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVFdmVudHMvZXhhbXBsZUV2ZW50cy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVFdmVudHMnLFxuICAgICAgICB0aXRsZTogJ0V2ZW50cydcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlUmVtb3ZlT25TcGlsbCcsXG4gICAgICAgIHRpdGxlOiAnUmVtb3ZlIG9uIHNwaWxsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVSZXZlcnRPblNwaWxsJyxcbiAgICAgICAgdGl0bGU6ICdSZXZlcnQgb24gc3BpbGwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVDb3B5L2V4YW1wbGVDb3B5Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUNvcHknLFxuICAgICAgICB0aXRsZTogJ0NvcHknXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVDb3B5V2l0aE1vZGVsL2V4YW1wbGVDb3B5V2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUNvcHlXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ0NvcHkgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlSGFuZGxlL2V4YW1wbGVIYW5kbGUuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlSGFuZGxlJyxcbiAgICAgICAgdGl0bGU6ICdIYW5kbGUnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUN1c3RvbUNsYXNzZXMnLFxuICAgICAgICB0aXRsZTogJ0N1c3RvbSBjbGFzc2VzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmFtZVNwYWNlcy9leGFtcGxlTmFtZVNwYWNlcy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOYW1lU3BhY2VzJyxcbiAgICAgICAgdGl0bGU6ICdOYW1lU3BhY2VzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRHJhZ092ZXJDbGFzc2VzL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRHJhZ092ZXJDbGFzc2VzJyxcbiAgICAgICAgdGl0bGU6ICdEcmFnT3ZlciBjbGFzc2VzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQm91bmRpbmdCb3gvZXhhbXBsZUJvdW5kaW5nQm94Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJvdW5kaW5nQm94JyxcbiAgICAgICAgdGl0bGU6ICdCb3VuZGluZ0JveCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1guaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWCcsXG4gICAgICAgIHRpdGxlOiAnQm91bmRpbmdCb3ggKyBMb2NrWCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWScsXG4gICAgICAgIHRpdGxlOiAnQm91bmRpbmdCb3ggKyBMb2NrWSdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5nUmVwZWF0L2V4YW1wbGVOZ1JlcGVhdC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZ1JlcGVhdCcsXG4gICAgICAgIHRpdGxlOiAnbmdSZXBlYXQnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ25nUmVwZWF0IC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0L2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZXN0ZWROZ1JlcGVhdCcsXG4gICAgICAgIHRpdGxlOiAnTmVzdGVkIG5nUmVwZWFkJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICdOZXN0ZWQgbmdSZXBlYWQgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlU2Nyb2xsaW5nRHJhZy9leGFtcGxlU2Nyb2xsaW5nRHJhZy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVTY3JvbGxpbmdEcmFnJyxcbiAgICAgICAgdGl0bGU6ICdTY3JvbGxpbmcgZHJhZydcbiAgICB9XTtcblxuICAgIC8vIGRlZmF1bHQgdGVtcGxhdGUgbG9hZGVkIGZpcnN0IHRpbWVcbiAgICAkc2NvcGUuZXhhbXBsZVRlbXBsYXRlID0gJ2V4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuaHRtbCc7XG5cbiAgICAkc2NvcGUuaGlnaGxpZ2h0Q29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgdmFyIGNvZGVCbG9ja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY29kZScpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNvZGVCbG9ja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGNvZGVCbG9ja3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByb3dPZmZjYW52YXMgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvd09mZmNhbnZhcycpKTtcbiAgICAkc2NvcGUudG9nZ2xlU2lkZWJhciA9IGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIgKCkge1xuICAgICAgICByb3dPZmZjYW52YXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH07XG5cbn1dKTtcblxuKHtcImV4YW1wbGVCYXNpY1wiOih7XCJleGFtcGxlQmFzaWNcIjpyZXF1aXJlKFwiLi9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzXCIpfSksXCJleGFtcGxlQmFzaWNXaXRoTW9kZWxcIjooe1wiZXhhbXBsZUJhc2ljV2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZUJvdW5kaW5nQm94XCI6KHtcImV4YW1wbGVCb3VuZGluZ0JveFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanNcIil9KSxcImV4YW1wbGVCb3VuZGluZ0JveExvY2tYXCI6KHtcImV4YW1wbGVCb3VuZGluZ0JveExvY2tYXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1guanNcIil9KSxcImV4YW1wbGVCb3VuZGluZ0JveExvY2tZXCI6KHtcImV4YW1wbGVCb3VuZGluZ0JveExvY2tZXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kuanNcIil9KSxcImV4YW1wbGVDb3B5XCI6KHtcImV4YW1wbGVDb3B5XCI6cmVxdWlyZShcIi4vZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanNcIil9KSxcImV4YW1wbGVDb3B5V2l0aE1vZGVsXCI6KHtcImV4YW1wbGVDb3B5V2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZUNvcHlXaXRoTW9kZWwvZXhhbXBsZUNvcHlXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVDdXN0b21DbGFzc2VzXCI6KHtcImV4YW1wbGVDdXN0b21DbGFzc2VzXCI6cmVxdWlyZShcIi4vZXhhbXBsZUN1c3RvbUNsYXNzZXMvZXhhbXBsZUN1c3RvbUNsYXNzZXMuanNcIil9KSxcImV4YW1wbGVEaXJlY3RpdmVcIjooe1wiZXhhbXBsZURpcmVjdGl2ZVwiOnJlcXVpcmUoXCIuL2V4YW1wbGVEaXJlY3RpdmUvZXhhbXBsZURpcmVjdGl2ZS5qc1wiKX0pLFwiZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbFwiOih7XCJleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlRHJhZ092ZXJDbGFzc2VzXCI6KHtcImV4YW1wbGVEcmFnT3ZlckNsYXNzZXNcIjpyZXF1aXJlKFwiLi9leGFtcGxlRHJhZ092ZXJDbGFzc2VzL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMuanNcIil9KSxcImV4YW1wbGVFdmVudHNcIjooe1wiZXhhbXBsZUV2ZW50c1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVFdmVudHMvZXhhbXBsZUV2ZW50cy5qc1wiKX0pLFwiZXhhbXBsZUhhbmRsZVwiOih7XCJleGFtcGxlSGFuZGxlXCI6cmVxdWlyZShcIi4vZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzXCIpfSksXCJleGFtcGxlTmFtZVNwYWNlc1wiOih7XCJleGFtcGxlTmFtZVNwYWNlc1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVOYW1lU3BhY2VzL2V4YW1wbGVOYW1lU3BhY2VzLmpzXCIpfSksXCJleGFtcGxlTmVzdGVkTmdSZXBlYXRcIjooe1wiZXhhbXBsZU5lc3RlZE5nUmVwZWF0XCI6cmVxdWlyZShcIi4vZXhhbXBsZU5lc3RlZE5nUmVwZWF0L2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC5qc1wiKX0pLFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXCI6KHtcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVOZ1JlcGVhdFwiOih7XCJleGFtcGxlTmdSZXBlYXRcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmdSZXBlYXQvZXhhbXBsZU5nUmVwZWF0LmpzXCIpfSksXCJleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWxcIjooe1wiZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZVJlbW92ZU9uU3BpbGxcIjooe1wiZXhhbXBsZVJlbW92ZU9uU3BpbGxcIjpyZXF1aXJlKFwiLi9leGFtcGxlUmVtb3ZlT25TcGlsbC9leGFtcGxlUmVtb3ZlT25TcGlsbC5qc1wiKX0pLFwiZXhhbXBsZVJldmVydE9uU3BpbGxcIjooe1wiZXhhbXBsZVJldmVydE9uU3BpbGxcIjpyZXF1aXJlKFwiLi9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qc1wiKX0pLFwiZXhhbXBsZVNjcm9sbGluZ0RyYWdcIjooe1wiZXhhbXBsZVNjcm9sbGluZ0RyYWdcIjpyZXF1aXJlKFwiLi9leGFtcGxlU2Nyb2xsaW5nRHJhZy9leGFtcGxlU2Nyb2xsaW5nRHJhZy5qc1wiKX0pLFwiZXhhbXBsZXNSb3V0ZXJcIjpyZXF1aXJlKFwiLi9leGFtcGxlc1JvdXRlci5qc1wiKSxcInRlbXBsYXRlc1wiOnJlcXVpcmUoXCIuL3RlbXBsYXRlcy5qc1wiKX0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgIHVybDogJy9ob21lJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWhvbWUuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2RvY3MnLCB7XG4gICAgICAgIHVybDogJy9kb2NzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWRvY3MuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc3RhdGUpIHtcbiAgICAgICAgICAvLyBnbyB0byBpbnN0YWxsIG5vdGVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICAkc3RhdGUuZ28oJ2RvY3MuZGV0YWlsJywge2xpbms6ICdleGFtcGxlU2Nyb2xsaW5nRHJhZyd9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnZG9jcy5kZXRhaWwnLCB7XG4gICAgICAgIHVybDogJy86bGluaycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICByZXR1cm4gJHN0YXRlUGFyYW1zLmxpbmsgKyAnLycgKyAkc3RhdGVQYXJhbXMubGluayArICcuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbnRyaWJ1dGUnLCB7XG4gICAgICAgIHVybDogJy9jb250cmlidXRlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWNvbnRyaWJ1dGUuaHRtbCdcbiAgICAgIH0pO1xuICB9KTtcbiIsIid1c2Ugc3RyaWN0JzsgbW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiZG9jc0luc3RhbGwvZG9jc0luc3RhbGwuaHRtbFwiLFwiPGgyPkluc3RhbGw8L2gyPlxcbjxwPmRvd25sb2FkIGRyYWd1bGFyLmpzIGFuZCBkcmFndWxhci5jc3MgZnJvbSBkaXN0IGZvbGRlcjwvcD5cXG48cD5PUiBjbG9uZSBnaXQ8L3A+XFxuPHByZT48Y29kZT5cXG5naXQgY2xvbmUgaHR0cDovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhci5naXRcXG48L2NvZGU+PC9wcmU+XFxuPHA+T1IgdXNlIG5wbTwvcD5cXG48cHJlPjxjb2RlPlxcbltzdWRvXSBucG0gaW5zdGFsbCBkcmFndWxhclxcbjwvY29kZT48L3ByZT5cXG48cD5PUiB1c2UgYm93ZXI8L3A+XFxuPHByZT48Y29kZT5cXG5ib3dlciBpbnN0YWxsIGRyYWd1bGFyXFxuPC9jb2RlPjwvcHJlPlxcbjxwPkFORCBpbmNsdWRlIGZpbGVzIGludG8geW91ciBwcm9qZWN0PC9wPlxcbjxwcmU+PGNvZGU+XFxuJmx0O2xpbmsgaHJlZj1cXCdzdHlsZXMvZHJhZ3VsYXIuY3NzXFwnIHJlbD1cXCdzdHlsZXNoZWV0XFwnIHR5cGU9XFwndGV4dC9jc3NcXCcgLyZndDtcXG4mbHQ7c2NyaXB0IHNyYz1cXCdzY3JpcHRzL2RyYWd1bGFyLmpzXFwnJmd0OyZsdDsvc2NyaXB0Jmd0O1xcbjwvY29kZT48L3ByZT5cXG48cD5BTkQgcHV0IGRyYWd1bGFyTW9kdWxlIGludG8gZGVwZW5kZW5jeSBhcnJheTwvcD5cXG48cHJlPjxjb2RlPlxcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcXCdteUFwcFxcJywgW1xcJ2RyYWd1bGFyTW9kdWxlXFwnLCBcXCdvdGhlckRlcGVuZGVuY2llc1xcJ10pO1xcbjwvY29kZT48L3ByZT5cXG48cD5ET05FIDopPC9wPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+QmFzaWM8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlIHN0dWZmIGJldHdlZW4gdGhlc2UgdHdvIGNvbnRhaW5lcnMuIE5vdGUgaG93IHRoZSBzdHVmZiBnZXRzIGluc2VydGVkIG5lYXIgdGhlIG1vdXNlIHBvaW50ZXI/IEdyZWF0IHN0dWZmLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQmFzaWNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdCYXNpY1xcJywgW1xcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtCYXNpYyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNi4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O1lvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDQuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5CYXNpYyAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlIHN0dWZmIGJldHdlZW4gdGhlc2UgdHdvIGNvbnRhaW5lcnMuIE5vdGUgaG93IHRoZSBzdHVmZiBnZXRzIGluc2VydGVkIG5lYXIgdGhlIG1vdXNlIHBvaW50ZXI/IEdyZWF0IHN0dWZmLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQmFzaWNNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczJcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPHByZT5JdGVtczE6XFxuICAgICAgICAgIDxici8+e3tpdGVtczEgfCBqc29ufX08L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPHByZT5JdGVtczI6XFxuICAgICAgICAgIDxici8+e3tpdGVtczIgfCBqc29ufX08L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdCYXNpY01vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XFxuICAgICAgY29udGVudDogXFwnTW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXFxcXFwnbGwganVzdCBjb21lIGJhY2suXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA1XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDZcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gN1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA4XFwnXFxuICAgIH1dO1xcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcXG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXVxcbiAgICB9KTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0Jhc2ljJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMSZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczImcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3RhYmxlUm93JnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXImcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiZndDtJdGVtczE6XFxuICAgICAgICAgICAgICAgICZsdDtici8mZ3Q7e3tpdGVtczEgfCBqc29ufX0mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXImcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiZndDtJdGVtczI6XFxuICAgICAgICAgICAgICAgICZsdDtici8mZ3Q7e3tpdGVtczIgfCBqc29ufX0mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQm91bmRpbmdCb3gvZXhhbXBsZUJvdW5kaW5nQm94Lmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPkJvdW5kaW5nQm94PC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPllvdSBjYW4gcHJvdmlkZSBlbGVtZW50IGluIG9wdGlvbnMuYm91bmRpbmdCb3ggdG8gbGltaXQgY3Jvc3NpbmcgZWxlbWVudCBib3JkZXJzLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJvdW5kaW5nQm94XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBpdGVtcyBjYW5ub3QgY3Jvc3MgaXRzIGV4YW1wbGUgZWxlbWVudCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGl0ZW1zIGNhbm5vdCBjcm9zcyBpdHMgZXhhbXBsZSBlbGVtZW50LCBqdXN0IHRyeSBpdCB5b3VyIHNlbHZlcy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xcbiAgICBib3VuZGluZ0JveDogJGVsZW1lbnRcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1guaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPkJvdW5kaW5nQm94IGFuZCBsb2NrWDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlbWVudCBjYW4gYmUgbG9ja2VkIHRvIFggb3IgWSBheGlzIGFuZCBhbHNvIHlvdSBjYW4gcHJvdmlkZSBlbGVtZW50IGluIG9wdGlvbnMuYm91bmRpbmdCb3ggdG8gbGltaXQgY3Jvc3NpbmcgZWxlbWVudCBib3JkZXJzLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJvdW5kaW5nQm94TG9ja1hcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lckhvcml6b250YWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2JvdW5kaW5nQm94XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoMjVcXFwiPkl0ZW1zIGFyZSBsb2NrZWQgaW4gWCBheGlzIG1vdmVtZW50IGFuZCBjYW5ub3QgY3Jvc3MgaXRzIGNsb3Nlc3QgcGFyZW50IGRpdi5ib3VuZGluZ0JveCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+aXRlbSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+aXRlbSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+aXRlbSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLmNoaWxkcmVuKCksIHtcXG4gICAgYm91bmRpbmdCb3g6ICRlbGVtZW50LmNoaWxkcmVuKClbMF0sXFxuICAgIGxvY2tYOiB0cnVlXFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPkJvdW5kaW5nQm94IGFuZCBMb2NrWTwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlbWVudCBjYW4gYmUgbG9ja2VkIHRvIFggb3IgWSBheGlzIGFuZCBhbHNvIHlvdSBjYW4gcHJvdmlkZSBlbGVtZW50IGluIG9wdGlvbnMuYm91bmRpbmdCb3ggdG8gbGltaXQgY3Jvc3NpbmcgZWxlbWVudCBib3JkZXJzLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJvdW5kaW5nQm94TG9ja1lcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdib3VuZGluZ0JveFxcJz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW1zIGFyZSBsb2NrZWQgaW4gWSBheGlzIG1vdmVtZW50IGFuZCBjYW5ub3QgY3Jvc3MgaXRzIGNsb3Nlc3QgcGFyZW50IGRpdi5ib3VuZGluZ0JveCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gNjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXS5jaGlsZHJlbigpLCB7XFxuICAgIGJvdW5kaW5nQm94OiAkZWxlbWVudC5jaGlsZHJlbigpWzBdLFxcbiAgICBsb2NrWTogdHJ1ZVxcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQ29weS9leGFtcGxlQ29weS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5Db3B5PC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+Q29weWluZyBzdHVmZiBpcyBncmVhdCB0b28uPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJDb3B5XFxcIiBuZy1oaWRlPVxcXCJnbG9iYWxzLnNob3dNb2RlbEV4YW1wbGVzXFxcIj5cXG4gICAgPGRpdiBpZD1cXCdsZWZ0MlxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICA8ZGl2Pk1vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC48L2Rpdj5cXG4gICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcJ3JpZ2h0MlxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0NvcHlcXCcsIFtcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XFxuICAgICAgY29weTogdHJ1ZVxcbiAgICB9KTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0NvcHkmcXVvdDsgbmctaGlkZT0mcXVvdDtnbG9iYWxzLnNob3dNb2RlbEV4YW1wbGVzJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGlkPVxcJ2xlZnQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7TW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgaWQ9XFwncmlnaHQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUNvcHlXaXRoTW9kZWwvZXhhbXBsZUNvcHlXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+Q29weSAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Db3B5aW5nIHN0dWZmIGlzIGdyZWF0IHRvby48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkNvcHlNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczJcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczE6XFxuICAgICAgICAgIDxici8+e3tpdGVtczEgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczI6XFxuICAgICAgICAgIDxici8+e3tpdGVtczIgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdDb3B5TW9kZWxcXCcsIFtcXCckc2NvcGVcXCcsIFxcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcXFxcXCdsbCBqdXN0IGNvbWUgYmFjay5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICAgIH1dO1xcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDVcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA3XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDhcXCdcXG4gICAgfV07XFxuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xcbiAgICBkcmFndWxhclNlcnZpY2UoW2NvbnRhaW5lcnNbMF0sY29udGFpbmVyc1sxXV0se1xcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogWyRzY29wZS5pdGVtczEsICRzY29wZS5pdGVtczJdLFxcbiAgICAgIGNvcHk6IHRydWVcXG4gICAgfSk7XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtDb3B5TW9kZWwmcXVvdDsgbmctc2hvdz0mcXVvdDtnbG9iYWxzLnNob3dNb2RlbEV4YW1wbGVzJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnJmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMSZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMyJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7dGFibGVSb3cmcXVvdDsmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXImcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMTpcXG4gICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMSB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyJnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtczI6XFxuICAgICAgICAgICZsdDtici8mZ3Q7e3tpdGVtczIgfCBqc29ufX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQ3VzdG9tQ2xhc3Nlcy9leGFtcGxlQ3VzdG9tQ2xhc3Nlcy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPkN1c3RvbSBjbGFzc2VzPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Zb3UgY2FuIG92ZXJ3cml0ZSBidWlsZGluIGNsYXNzZXMgYnkgcHJvdmlkaW5nIGNsYXNzZXMgbmFtZXMgaW4gb2JqZWN0IHZpYSBvcHRpb25zLmNsYXNzZXMuPC9sYWJlbD5cXG4gICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkN1c3RvbUNsYXNzZXNcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXCdsZWZ0NFxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgaWQ9XFwncmlnaHQzXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVmdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZ2h0KV0sIHsgY2xhc3Nlczoge1xcbiAgICBtaXJyb3I6IFxcJ2N1c3RvbS1ncmVlbi1taXJyb3JcXCdcXG4gIH0gfSk7XFxuXFxuICAvLyBEZWZhdWx0IGNsYXNzZXMgYXJlOlxcbiAgb3B0aW9uLmNsYXNzZXMgPSB7XFxuICAgIG1pcnJvcjogXFwnZ3UtbWlycm9yXFwnLFxcbiAgICBoaWRlOiBcXCdndS1oaWRlXFwnLFxcbiAgICB1bnNlbGVjdGFibGU6IFxcJ2d1LXVuc2VsZWN0YWJsZVxcJyxcXG4gICAgdHJhbnNpdDogXFwnZ3UtdHJhbnNpdFxcJyxcXG4gICAgb3ZlckFjdGl2ZTogXFwnZ3Utb3Zlci1hY3RpdmVcXCcsXFxuICAgIG92ZXJBY2NlcHRzOiBcXCdndS1vdmVyLWFjY2VwdFxcJyxcXG4gICAgb3ZlckRlY2xpbmVzOiBcXCdndS1vdmVyLWRlY2xpbmVcXCdcXG4gIH07XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkRpcmVjdGl2ZTwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPlNhbWUgYXMgY3VzdG9tIGNsYXNzZXMgZXhhbXBsZSwgYnV0IHNob3dpbmcgdXNlIG9mIGRpcmVjdGl2ZS48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkRpcmVjdGl2ZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFxcImRyYWd1bGFyT3B0aW9uc1xcXCI+XFxuICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXCd7XFxcImNsYXNzZXNcXFwiOntcXFwibWlycm9yXFxcIjpcXFwiY3VzdG9tLWdyZWVuLW1pcnJvclxcXCJ9LFxcXCJuYW1lU3BhY2VcXFwiOlxcXCJzYW1lXFxcIn1cXCc+XFxuICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdEaXJlY3RpdmVcXCcsIFtcXCckc2NvcGVcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlKSB7XFxuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XFxuICAgICAgY2xhc3Nlczoge1xcbiAgICAgICAgbWlycm9yOiBcXCdjdXN0b20tZ3JlZW4tbWlycm9yXFwnXFxuICAgICAgfSxcXG4gICAgICBuYW1lU3BhY2U6IFxcJ2NvbW1vblxcJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXFxuICAgIH07XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtEaXJlY3RpdmUmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9JnF1b3Q7ZHJhZ3VsYXJPcHRpb25zJnF1b3Q7Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gMy4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNi4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFwneyZxdW90O2NsYXNzZXMmcXVvdDs6eyZxdW90O21pcnJvciZxdW90OzomcXVvdDtjdXN0b20tZ3JlZW4tbWlycm9yJnF1b3Q7fSwmcXVvdDtuYW1lU3BhY2UmcXVvdDs6JnF1b3Q7c2FtZSZxdW90O31cXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtZb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNC4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsL2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+RGlyZWN0aXZlIC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPlNhbWUgYXMgY3VzdG9tIGNsYXNzZXMgZXhhbXBsZSwgYnV0IHNob3dpbmcgdXNlIG9mIGRpcmVjdGl2ZS48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkRpcmVjdGl2ZU1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcXCJkcmFndWxhck9wdGlvbnNcXFwiPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMxXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXCd7XFxcImNvbnRhaW5lcnNNb2RlbFxcXCI6XFxcIml0ZW1zMlxcXCIsXFxcImNsYXNzZXNcXFwiOntcXFwibWlycm9yXFxcIjpcXFwiY3VzdG9tLWdyZWVuLW1pcnJvclxcXCJ9LFxcXCJuYW1lU3BhY2VcXFwiOlxcXCJjb21tb25cXFwifVxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMlxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zMTpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMSB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zMjpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMiB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgXFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdEaXJlY3RpdmVNb2RlbFxcJywgW1xcJyRzY29wZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlKSB7XFxuICAgICRzY29wZS5pdGVtczEgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFxcXFxcJ2xsIGp1c3QgY29tZSBiYWNrLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gICAgfV07XFxuICAgICRzY29wZS5pdGVtczIgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA2XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDdcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gOFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcXG4gICAgICBjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtczEsXFxuICAgICAgY2xhc3Nlczoge1xcbiAgICAgICAgbWlycm9yOiBcXCdjdXN0b20tZ3JlZW4tbWlycm9yXFwnXFxuICAgICAgfSxcXG4gICAgICBuYW1lU3BhY2U6IFxcJ2NvbW1vblxcJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXFxuICAgIH07XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4gJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7RGlyZWN0aXZlTW9kZWwmcXVvdDsmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPSZxdW90O2RyYWd1bGFyT3B0aW9ucyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczEmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcJ3smcXVvdDtjb250YWluZXJzTW9kZWwmcXVvdDs6JnF1b3Q7aXRlbXMyJnF1b3Q7LCZxdW90O2NsYXNzZXMmcXVvdDs6eyZxdW90O21pcnJvciZxdW90OzomcXVvdDtjdXN0b20tZ3JlZW4tbWlycm9yJnF1b3Q7fSwmcXVvdDtuYW1lU3BhY2UmcXVvdDs6JnF1b3Q7Y29tbW9uJnF1b3Q7fVxcJyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczImcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkRyYWdPdmVyQ2xhc3NlczwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPllvdSBjYW4gaW50ZXJhY3Qgd2l0aCBkcmFnZ2luZyBlbGVtZW50IGJ5IHNldHRpbmcgZHJhZ092ZXJDbGFzc2VzOnRydWUgaW4gb3B0aW9ucyBhbmQgYWRkaW5nIHBvaW50ZXIgY2xhc3MgKGRlZmF1bHQgaXM6IFxcJ2d1LW92ZXItYWN0aXZlXFwnKSB0byBlbGVtZW50IHlvdSB3YW50IHRvIGJlIGludGVyYWN0aXZlIChnZXR0aW5nIGNsYXNzZXMpLiBVc3VhbGx5IHlvdSB3YW50IHRvIGNvbnRhaW5lcnMgc2hvdyB3aGVhdGhlciB0aGV5IGFjY2VwdHMgZWxlbWVudCBvciBub3QsIGJ1dCB5b3UgY2FuIHVzZSBpdCBhbnl3aGVyZS4gVHJ5IHRvIGRyYWcgb3ZlciB0aGUgbm90LWNvbnRhaW5lciB0b28uPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJEcmFnT3ZlckNsYXNzZXNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5hcHBsZXMgYW5kIG9yYW5nZXMgY2Fubm90IGJlIG1peGVkPC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSAyPC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSAzPC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSA0PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5vcmFuZ2UgMTwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDI8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSAzPC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgNDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnPlxcbiAgICAgIDxkaXY+YXBwbGUgNTwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgNjwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgNzwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgODwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnPlxcbiAgICAgIDxkaXY+b3JhbmdlIDU8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSA2PC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgNzwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDg8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIm5vdENvbnRhaW5lciBndS1vdmVyLWFjdGl2ZVxcXCI+IFRlc3QgYWN0aXZlIGNsYXNzIG9uIE5PVCBjb250YWluZXIuPC9kaXY+XFxuXFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtEcmFnT3ZlckNsYXNzZXMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZXMgYW5kIG9yYW5nZXMgY2Fubm90IGJlIG1peGVkJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZSAyJmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDEmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O29yYW5nZSAyJmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7YXBwbGUgNSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7YXBwbGUgNiZsdDsvZGl2Jmd0O1xcbiAgICAgIC4uLlxcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O29yYW5nZSA1Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtvcmFuZ2UgNiZsdDsvZGl2Jmd0O1xcbiAgICAgIC4uLlxcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgJmx0O2RpdiBjbGFzcz0mcXVvdDtub3RDb250YWluZXImcXVvdDsmZ3Q7IFRlc3QgYWN0aXZlIGNsYXNzIG9uIE5PVCBjb250YWluZXIuJmx0Oy9kaXYmZ3Q7XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcblxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBDU1NcXG4uY29udGFpbmVyLmd1LW92ZXItYWN0aXZlLmd1LW92ZXItYWNjZXB0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY29udGFpbmVyLmd1LW92ZXItYWN0aXZlLmd1LW92ZXItZGVjbGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ub3RDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxufVxcblxcbi5ub3RDb250YWluZXIuZ3Utb3Zlci1hY3RpdmUuZ3Utb3Zlci1kZWNsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcblxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBKU1xcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLCAkZWxlbWVudC5jaGlsZHJlbigpWzJdXSwge1xcbiAgICBuYW1lU3BhY2U6IFxcJ2FwcGxlc1xcJyxcXG4gICAgZHJhZ092ZXJDbGFzc2VzOiB0cnVlXFxuICB9KTtcXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVsxXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVszXV0sIHtcXG4gICAgbmFtZVNwYWNlOiBcXCdvcmFuZ2VzXFwnLFxcbiAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcXG4gIH0pO1xcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRXZlbnRzL2V4YW1wbGVFdmVudHMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgIDxoMj5FdmVudHM8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkFkZCBzb21lIGZhbnRhc3RpYyBldmVudHMhPC9sYWJlbD5cXG4gICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkV2ZW50c1xcXCI+XFxuICAgICAgICA8ZGl2IGlkPVxcJ2xlZnQzXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBpZD1cXCdyaWdodDNcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWZ0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlnaHQpXSwge1xcbiAgICBzY29wZTogJHNjb3BlXFxuICB9KTtcXG4gICRzY29wZS4kb24oXFwnZHJhZ1xcJywgZnVuY3Rpb24oZSwgZWwpIHtcXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcXG4gICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoXFwnIGV4LW1vdmVkXFwnLCBcXCdcXCcpO1xcbiAgfSk7XFxuICAkc2NvcGUuJG9uKFxcJ2Ryb3BcXCcsIGZ1bmN0aW9uKGUsIGVsKSB7XFxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XFxuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xcbiAgICAgIGVsLmNsYXNzTmFtZSArPSBcXCcgZXgtbW92ZWRcXCc7XFxuICAgIH0sIDApO1xcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+SGFuZGxlPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5EcmFnIGhhbmRsZXMgZmxvYXQgeW91ciBjcnVpc2U/PC9sYWJlbD5cXG4gICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkhhbmRsZVxcXCI+XFxuICAgICAgICA8ZGl2IGlkPVxcJ2xlZnQ1XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3M9XFwnaGFuZGxlXFwnPis8L3NwYW4+TW92ZSBtZSwgYnV0IHlvdSBjYW4gdXNlIHRoZSBwbHVzIHNpZ24gdG8gZHJhZyBtZSBhcm91bmQuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgaWQ9XFwncmlnaHQ1XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7XFxuICAgIG1vdmVzOiBmdW5jdGlvbiAoZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc05hbWUgPT09IFxcJ2hhbmRsZVxcJztcXG4gICAgfVxcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+TmFtZVNwYWNlczwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5UcnkgdG8gbWl4IGFwcGxlcyBhbmQgb3Jhbmdlcy4gWW91IGNhbm5vdCBwbGFjZSBhcHBsZXMgaW50byBvcmFuZ2VzLCBidXQgbm90aWNlIHRoYXQgeW91IGNhbiBwbGFjZSBpdCBpbnRvIG1peGVkLiBNaXhlZCBjYW4gYmUgcGxhY2VkIGludG8gYXBwbGVzIGFuZCBvcmFuZ2VzLiBOb3RpY2UgdGhhdCBtaXhlZCBiZWNvbWVzIG9yYW5nZSBvciBhcHBsZSBpZiBwbGFjZWQgaW50byB0aGVpciBjb250YWluZXIuIDxiPlNvIHJlbWVtYmVyIGlmIHlvdSBhcmUgdXNpbmcgbmFtZXNwYWNpbmcsIHRoZW4gaXRlbSBpcyBuYW1lc3BhY2VkIGFjY29yZGluZyB0byBhY3R1YWwgY29udGFpbmVyIGl0IGlzIHBsYWNlZCBpbi4gSWYgeW91IG5lZWQgdG8gaXRlbSBwcmVzZXJ2ZSB0aGllciBzdGF0ZSB5b3UgbmVlZCB0byB1c2UgY2xhc3NlcyBpbiBjb21iaW5hdGlvbiB3aXRoIG9wdGlvbnMuYWNjZXB0cyBhbmQgb3B0aW9uYWxseSBvcHRpb25zLmlzQ29udGFpbmVyLjwvYj4gSXQgZGVwZW5kcyBvbiBzZXR1cC4gKFNlZSA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhci9pc3N1ZXMvOVxcXCI+aXNzdWUgIzk8L2E+Lik8L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJOYW1lU3BhY2VzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj50cnkgdG8gbWl4IG9yYW5nZXMgYW5kIGFwcGxlczwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgNDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5vcmFuZ2UgMTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5vcmFuZ2UgMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5vcmFuZ2UgMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5vcmFuZ2UgNDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA1PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDY8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgNzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA4PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjVcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm1peGVkIDE8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bWl4ZWQgMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm1peGVkIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICA8Y29kZT5cXG5kcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0sICRlbGVtZW50LmNoaWxkcmVuKClbMl1dLCB7XFxuICBuYW1lU3BhY2U6IFxcJ2FwcGxlc1xcJ1xcbn0pO1xcbmRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzFdLCB7XFxuICBuYW1lU3BhY2U6IFxcJ29yYW5nZXNcXCdcXG59KTtcXG5kcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVszXSwgeyAvLyBtaXhlZFxcbiAgbmFtZVNwYWNlOiBbXFwnb3Jhbmdlc1xcJywgXFwnYXBwbGVzXFwnXVxcbn0pO1xcbiAgICAgIDwvY29kZT5cXG4gICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0Lmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+TmVzdGVkIG5nUmVwZWF0PC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz4gWW91IGNhbiBtb3ZlIHdob2xlIHJvd3MgYnkgZ3JhYmluZyByb3cgdGl0bGUsIGFsbCBpdGVtcyBpdCBzZWx2ZXMuIFRyeSBpdCBvdXQhXFxuICAgICAgICA8aHIvPlxcbiAgICAgICAgPGI+T2xkIElFIGRvZXNudCBzdXBwb3J0IEZsZXhpYmxlIEJveCBMYXlvdXQ8L2I+IHNvIGl0IGNhbiBsb29rIHdlaXJkLiBCdXQgaW4gbW9kZXJuIGJyb3dzZXJzIGl0IGlzIGF3c29tZSEgRHJhZ3VsYXIgd2lsbCBiZSB3b3JraW5nIHdlbGwgYWxzbyBpbiBvbGQgSUUgYnV0IHlvdSBoYXZlIHRvIHVzZSBkaWZmZXJlbnQgY3NzIGZvciBsYXlvdXQuXFxuICAgICAgICA8aHIvPlxcbiAgICA8L2xhYmVsPlxcbiAgICA8ZGl2IG5nLWNvbnRyb2xsZXI9XFxcIk5lc3RlZE5nUmVwZWF0XFxcIj5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIiBjbGFzcz1cXCdleGFtcGxlUm93XFwnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdy1oYW5kbGVcXFwiPlJvdyB7eyRpbmRleH19PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbS5pdGVtc1xcXCIgY2xhc3M9XFxcImV4YW1wbGVDZWxsXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIC8vIEhUTUxcXG5cXG4gICZsdDtkaXYgbmctY29udHJvbGxlcj0mcXVvdDtFeGFtcGxlMTUmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMmcXVvdDsgY2xhc3M9XFwnZXhhbXBsZVJvd1xcJyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3Jvdy1oYW5kbGUmcXVvdDsmZ3Q7Um93IHt7JGluZGV4fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW0uaXRlbXMmcXVvdDsgY2xhc3M9JnF1b3Q7ZXhhbXBsZUNlbGwmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAvLyBDU1NcXG5cXG4gIC5leGFtcGxlUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5leGFtcGxlQ2VsbCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gIC5leGFtcGxlUm93LFxcbiAgLmV4YW1wbGVDZWxsIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBjdXJzb3I6IC1tb3otZ3JhYjtcXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICB9XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIC8vIEpTXFxuXFxuICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5nUmVwZWF0IHRvIGJlIHJlYWR5XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudCwge1xcbiAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxcJ3Jvdy1oYW5kbGVcXCcpO1xcbiAgICAgIH1cXG4gICAgfSk7XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XFxuICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgcmV0dXJuICFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxcJ3Jvdy1oYW5kbGVcXCcpO1xcbiAgICAgIH1cXG4gICAgfSk7XFxuICB9LCAwKTtcXG4gICRzY29wZS5pdGVtcyA9IFt7XFxuICAgIGl0ZW1zOiBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTFcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTJcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTRcXCdcXG4gICAgfV1cXG4gIH0sIHtcXG4gICAgaXRlbXM6IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBiMVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBiMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBiM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBiNFxcJ1xcbiAgICB9XVxcbiAgfSwge1xcbiAgICBpdGVtczogW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGMxXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGMyXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGMzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGM0XFwnXFxuICAgIH1dXFxuICB9XTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPk5lc3RlZCBuZ1JlcGVhdCAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz4gWW91IGNhbiBtb3ZlIHdob2xlIHJvd3MgYnkgZ3JhYmluZyByb3cgdGl0bGUsIGFsbCBpdGVtcyBpdCBzZWx2ZXMuIFRyeSBpdCBvdXQhXFxuICAgIDxoci8+XFxuICAgIDxiPk9sZCBJRSBkb2VzbnQgc3VwcG9ydCBGbGV4aWJsZSBCb3ggTGF5b3V0PC9iPiBzbyBpdCBjYW4gbG9vayB3ZWlyZC4gQnV0IGluIG1vZGVybiBicm93c2VycyBpdCBpcyBhd3NvbWUhIERyYWd1bGFyIHdpbGwgYmUgd29ya2luZyB3ZWxsIGFsc28gaW4gb2xkIElFIGJ1dCB5b3UgaGF2ZSB0byB1c2UgZGlmZmVyZW50IGNzcyBmb3IgbGF5b3V0LlxcbiAgICA8aHIvPlxcbiAgPC9sYWJlbD5cXG4gIDxkaXYgbmctY29udHJvbGxlcj1cXFwiTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCIgY2xhc3M9XFwnZXhhbXBsZVJvd1xcJz5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93LWhhbmRsZVxcXCI+Um93IHt7OjokaW5kZXh9fTwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJleGFtcGxlUm93IGV4YW1wbGVDZWxsIGNvbnRhaW5lck5lc3RlZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbS5pdGVtc1xcXCIgY2xhc3M9XFxcImV4YW1wbGVDZWxsXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxwcmU+XFxuICAgICAgICAgICAgPGRpdj5JdGVtczpcXG4gICAgICAgICAgICAgIDxici8+e3tpdGVtcyB8IGpzb259fTwvZGl2PlxcbiAgICAgICAgPC9wcmU+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBuZy1jb250cm9sbGVyPSZxdW90O05lc3RlZE5nUmVwZWF0V2l0aE1vZGVsJnF1b3Q7Jmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyBjbGFzcz1cXCdleGFtcGxlUm93XFwnJmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7cm93LWhhbmRsZSZxdW90OyZndDtSb3cge3s6OiRpbmRleH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtleGFtcGxlUm93IGV4YW1wbGVDZWxsIGNvbnRhaW5lck5lc3RlZCZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbS5pdGVtcyZxdW90OyBjbGFzcz0mcXVvdDtleGFtcGxlQ2VsbCZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBDU1NcXG5cXG4gIC5leGFtcGxlUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5leGFtcGxlQ2VsbCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gIC5leGFtcGxlUm93LFxcbiAgLmV4YW1wbGVDZWxsIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBjdXJzb3I6IC1tb3otZ3JhYjtcXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICB9XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBKU1xcbmNvbnRyb2xsZXIoXFwnTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWxcXCcsIFtcXCckdGltZW91dFxcJywgXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkdGltZW91dCwgJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyB0aW1lb3VudCBkdWUgdG8gbmVzdGVkIG5nUmVwZWF0IHRvIGJlIHJlYWR5XFxuICAgICAgdmFyIGNvbnRhaW5lciA9ICRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSxcXG4gICAgICAgIHBhcmVudENvbnRhaW5lcnMgPSBjb250YWluZXIuY2hpbGRyZW4oKSxcXG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMgPSBbXTtcXG5cXG4gICAgICBkcmFndWxhclNlcnZpY2UoY29udGFpbmVyLCB7XFxuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxcJ3Jvdy1oYW5kbGVcXCcpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zXFxuICAgICAgfSk7XFxuXFxuICAgICAgLy8gY29sbGVjdCBuZXN0ZWQgY29udGlhbmVyc1xcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Q29udGFpbmVycy5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgbmVzdGVkQ29udGFpbmVycy5wdXNoKHBhcmVudENvbnRhaW5lcnMuZXEoaSkuY2hpbGRyZW4oKVsxXSk7XFxuICAgICAgfTtcXG5cXG4gICAgICBkcmFndWxhclNlcnZpY2UobmVzdGVkQ29udGFpbmVycywge1xcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAoZnVuY3Rpb24gZ2V0TmVzdGVkQ29udGFpbmVyc01vZGVsKCl7XFxuICAgICAgICAgIHZhciBwYXJlbnQgPSAkc2NvcGUuaXRlbXMsXFxuICAgICAgICAgICAgY29udGFpbmVyc01vZGVsID0gW107XFxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Lmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICAgICAgY29udGFpbmVyc01vZGVsLnB1c2gocGFyZW50W2ldLml0ZW1zKTtcXG4gICAgICAgICAgfTtcXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnNNb2RlbDtcXG4gICAgICAgIH0pKClcXG4gICAgICB9KTtcXG4gICAgfSwgMCk7XFxuICAgICRzY29wZS5pdGVtcyA9IFt7XFxuICAgICAgaXRlbXM6IFt7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGExXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhMlxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTNcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGE0XFwnXFxuICAgICAgfV1cXG4gICAgfSwge1xcbiAgICAgIGl0ZW1zOiBbe1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBiMVxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjJcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGIzXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBiNFxcJ1xcbiAgICAgIH1dXFxuICAgIH0sIHtcXG4gICAgICBpdGVtczogW3tcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzFcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGMyXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBjM1xcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzRcXCdcXG4gICAgICB9XVxcbiAgICB9XTtcXG4gIH1dKVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmdSZXBlYXQvZXhhbXBsZU5nUmVwZWF0Lmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPm5nUmVwZWF0PC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkV4YW1wbGUgb2YgdXNpbmcgbmctcmVwZWF0IHdpdGggZHJhZ3VsYXIgYW5kIGFkZGluZy9yZW1vdmluZyBpdGVtcyBkeW5hbWljYWx5LjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIk5nUmVwZWF0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0uY29udGVudH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPVxcXCJhZGRJdGVtKClcXFwiPis8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcInJlbW92ZUl0ZW0oKVxcXCI+eDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIC8vIEhUTUw6XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zJnF1b3Q7Jmd0O1xcbiAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7YWRkSXRlbSgpJnF1b3Q7Jmd0OysmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7cmVtb3ZlSXRlbSgpJnF1b3Q7Jmd0O3gmbHQ7L2J1dHRvbiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG5cXG4gIC8vIEpTOlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xcbiAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgY29udGVudDogXFwnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci5cXCdcXG4gIH0se1xcbiAgICBjb250ZW50OiBcXCdJdGVtIDJcXCdcXG4gIH0se1xcbiAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gIH0se1xcbiAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gIH1dO1xcbiAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtICgpIHtcXG4gICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XFxuICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDAse2NvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgXFwnLWNvcHlcXCd9KTtcXG4gIH1cXG4gICRzY29wZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbSAoKSB7XFxuICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSk7XFxuICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xcbiAgfVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5uZ1JlcGVhdCAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5FeGFtcGxlIG9mIHVzaW5nIG5nLXJlcGVhdCB3aXRoIGRyYWd1bGFyIGFuZCBhZGRpbmcvcmVtb3ZpbmcgaXRlbXMgZHluYW1pY2FseS48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIk5nUmVwZWF0V2l0aE1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiPlxcbiAgICAgICAgICB7e2l0ZW0uY29udGVudH19XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz1cXFwiYWRkSXRlbSgpXFxcIj4rPC9idXR0b24+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz1cXFwicmVtb3ZlSXRlbSgpXFxcIj54PC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEhUTUw6XFxuICAgJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7TmdSZXBlYXRXaXRoTW9kZWwmcXVvdDsmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMmcXVvdDsmZ3Q7XFxuICAgICAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAgICAgJmx0O2J1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPSZxdW90O2FkZEl0ZW0oKSZxdW90OyZndDsrJmx0Oy9idXR0b24mZ3Q7XFxuICAgICAgICAgICZsdDtidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz0mcXVvdDtyZW1vdmVJdGVtKCkmcXVvdDsmZ3Q7eCZsdDsvYnV0dG9uJmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBKUzpcXG4gIGNvbnRyb2xsZXIoXFwnTmdSZXBlYXRXaXRoTW9kZWxcXCcsIFtcXCckc2NvcGVcXCcsIFxcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDJcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICAgIH1dO1xcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpLCB7Y29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXN9KTtcXG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKCkge1xcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDAsIHtcXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgXFwnLWNvcHlcXCdcXG4gICAgICB9KTtcXG4gICAgfTtcXG4gICAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKCkge1xcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSk7XFxuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XFxuICAgIH07XFxuICB9XSlcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+UmVtb3ZlIG9uIHNwaWxsPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk5lZWQgdG8gYmUgYWJsZSB0byBxdWlja2x5IGRlbGV0ZSBzdHVmZiB3aGVuIGl0IHNwaWxscyBvdXQgb2YgdGhlIGNob3NlbiBjb250YWluZXJzPzwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIlJlbW92ZU9uU3BpbGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcJ3NpbmdsZTFcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBzb21ld2hlcmUgaW4gdGhpcyBjb250YWluZXIuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiBoZXJlLCBJXFwnbGwgZGllIGEgZmllcnkgZGVhdGguPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaW5nbGUpXSwgeyByZW1vdmVPblNwaWxsOiB0cnVlIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZVJldmVydE9uU3BpbGwvZXhhbXBsZVJldmVydE9uU3BpbGwuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+UmV2ZXJ0IG9uIHNwaWxsPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkJ5IGRlZmF1bHQsIGRyb3BwaW5nIGFuIGVsZW1lbnQgb3V0c2lkZSBvZiBhbnkga25vd24gY29udGFpbmVycyB3aWxsIGtlZXAgdGhlIGVsZW1lbnQgaW4gdGhlIGxhc3QgcGxhY2UgaXQgaG92ZXJlZCBvdmVyLiBZb3UgY2FuIG1ha2UgZWxlbWVudHMgZ28gYmFjayBob21lIGlmIHRoZXlcXCdyZSBkcm9wcGVkIG91dHNpZGUgb2Yga25vd24gY29udGFpbmVycywgdG9vLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIlJldmVydE9uU3BpbGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcJ2xlZnQ0XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXCdyaWdodDRcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWZ0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlnaHQpXSwgeyByZXZlcnRPblNwaWxsOiB0cnVlIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZVNjcm9sbGluZ0RyYWcvZXhhbXBsZVNjcm9sbGluZ0RyYWcuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+U2Nyb2xsaW5nIGRyYWc8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz4gQ29udGFpbmVycyBjYW4gYmUgc2Nyb2xsZWQgYnkgaG92ZXJpbmcgdXAvZG93biBiYXIgbmVhciBjb250YWluZXJzLiBCYXJzIG9uIHJpZ2h0IHNpZGUgYXJlIHRyYW5zcGFyZW50IGFuZCBtb3ZlZCBhIGJpdCBvdmVyIGNvbnRhaW5lcnMuIEl0IGNhbiBiZSBzY3JvbGxlZCBhbHNvIGJ5IG1vdXNlIHdoZWVsLiA8Yj5Qcm9ibGVtIGlzIHRoYXQgdG91Y2hhYmxlIGRldmljZXMgZG9udCBoYXZlIHdoZWVscy48L2I+XFxuICA8L2xhYmVsPlxcbiAgPGRpdiBuZy1jb250cm9sbGVyPVxcXCJTY3JvbGxpbmdEcmFnXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyVmVydGljYWwgc2Nyb2xsaW5nRHJhZ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsQmFyXFxcIiBpZD1cXFwibGVmdFRvcEJhclxcXCI+dXA8L2Rpdj5cXG4gICAgICA8ZGl2IGlkPVxcXCJsZWZ0U2Nyb2xsXFxcIiBjbGFzcz1cXFwic2Nyb2xsaW5nRHJhZ0lubmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbSAxLjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDIuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgIDxkaXY+SXRlbSA3LjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDkuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTAuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTEuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTIuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTMuPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsQmFyXFxcIiBpZD1cXFwibGVmdEJvdHRvbUJhclxcXCI+ZG93bjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyVmVydGljYWwgc2Nyb2xsaW5nRHJhZ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsQmFyXFxcIiBpZD1cXFwicmlnaHRUb3BCYXJcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgaWQ9XFxcInJpZ2h0U2Nyb2xsXFxcIiBjbGFzcz1cXFwic2Nyb2xsaW5nRHJhZ0lubmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbSAxLjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDIuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgIDxkaXY+SXRlbSA3LjwvZGl2PlxcbiAgICAgICAgPGRpdj5JdGVtIDkuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTAuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTEuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTIuPC9kaXY+XFxuICAgICAgICA8ZGl2Pkl0ZW0gMTMuPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2Nyb2xsQmFyXFxcIiBpZD1cXFwicmlnaHRCb3R0b21CYXJcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbmNvbnRyb2xsZXIoXFwnU2Nyb2xsaW5nRHJhZ1xcJywgW1xcJyRzY29wZVxcJywgXFwnJGludGVydmFsXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRpbnRlcnZhbCwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcblxcblxcbiAgICB2YXIgdGltZXIsXFxuICAgICAgbGVmdFNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcJ2xlZnRTY3JvbGxcXCcpLFxcbiAgICAgIHJpZ2h0U2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFwncmlnaHRTY3JvbGxcXCcpLFxcbiAgICAgIGxlZnRUb3BCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXCdsZWZ0VG9wQmFyXFwnKSxcXG4gICAgICBsZWZ0Qm90dG9tQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFwnbGVmdEJvdHRvbUJhclxcJyksXFxuICAgICAgcmlnaHRUb3BCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXCdyaWdodFRvcEJhclxcJyksXFxuICAgICAgcmlnaHRCb3R0b21CYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXCdyaWdodEJvdHRvbUJhclxcJyk7XFxuXFxuICAgIGRyYWd1bGFyU2VydmljZShbbGVmdFNjcm9sbCwgcmlnaHRTY3JvbGxdLCB7XFxuICAgICAgc2NvcGU6ICRzY29wZVxcbiAgICB9KTtcXG5cXG4gICAgcmVnaXN0ZXJFdmVudHMobGVmdFRvcEJhciwgbGVmdFNjcm9sbCwgLTUpO1xcbiAgICByZWdpc3RlckV2ZW50cyhsZWZ0Qm90dG9tQmFyLCBsZWZ0U2Nyb2xsLCA1KTtcXG4gICAgcmVnaXN0ZXJFdmVudHMocmlnaHRUb3BCYXIsIHJpZ2h0U2Nyb2xsLCAtNSk7XFxuICAgIHJlZ2lzdGVyRXZlbnRzKHJpZ2h0Qm90dG9tQmFyLCByaWdodFNjcm9sbCwgNSk7XFxuXFxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKGJhciwgY29udGFpbmVyLCBpbmMsIHNwZWVkKSB7XFxuICAgICAgaWYgKCFzcGVlZCkge1xcbiAgICAgICAgc3BlZWQgPSAyMDtcXG4gICAgICB9XFxuICAgICAgYW5ndWxhci5lbGVtZW50KGJhcikub24oXFwnZHJhZ3VsYXJlbnRlclxcJywgZnVuY3Rpb24oZSkge1xcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCArPSBpbmM7XFxuICAgICAgICB0aW1lciA9ICRpbnRlcnZhbChmdW5jdGlvbiBtb3ZlU2Nyb2xsKCkge1xcbiAgICAgICAgICBjb25zb2xlLmxvZyhcXCd0aWNrXFwnLCBiYXIsIGNvbnRhaW5lciwgaW5jKTtcXG4gICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCArPSBpbmM7XFxuICAgICAgICB9LCBzcGVlZCk7XFxuICAgICAgfSk7XFxuICAgICAgYW5ndWxhci5lbGVtZW50KGJhcikub24oXFwnZHJhZ3VsYXJsZWF2ZVxcJywgZnVuY3Rpb24oZSkge1xcbiAgICAgICAgJGludGVydmFsLmNhbmNlbCh0aW1lcik7XFxuICAgICAgfSk7XFxuICAgIH1cXG5cXG4gICAgLy8gaW4gY2FzZSB5b3UgcmVsZWFzZSBkcmFnIG92ZXIgYmFyXFxuICAgICRzY29wZS4kb24oXFwncmVsZWFzZVxcJywgZnVuY3Rpb24gc3RvcFNjcm9sbCAoKSB7XFxuICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHRpbWVyKTtcXG4gICAgfSlcXG5cXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBuZy1jb250cm9sbGVyPSZxdW90O1Njcm9sbGluZ0RyYWcmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyVmVydGljYWwgc2Nyb2xsaW5nRHJhZyZxdW90OyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3Njcm9sbEJhciZxdW90OyBpZD0mcXVvdDtsZWZ0VG9wQmFyJnF1b3Q7Jmd0O3VwJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBpZD0mcXVvdDtsZWZ0U2Nyb2xsJnF1b3Q7IGNsYXNzPSZxdW90O3Njcm9sbGluZ0RyYWdJbm5lciZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbSAxJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gMiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgICAgIC4uLlxcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7c2Nyb2xsQmFyJnF1b3Q7IGlkPSZxdW90O2xlZnRCb3R0b21CYXImcXVvdDsmZ3Q7ZG93biZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXJWZXJ0aWNhbCBzY3JvbGxpbmdEcmFnJnF1b3Q7Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7c2Nyb2xsQmFyJnF1b3Q7IGlkPSZxdW90O3JpZ2h0VG9wQmFyJnF1b3Q7Jmd0O3VwJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBpZD0mcXVvdDtyaWdodFNjcm9sbCZxdW90OyBjbGFzcz0mcXVvdDtzY3JvbGxpbmdEcmFnSW5uZXImcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gMSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDImbHQ7L2RpdiZndDtcXG4gICAgICAgICAgICAuLi5cXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3Njcm9sbEJhciZxdW90OyBpZD0mcXVvdDtyaWdodEJvdHRvbUJhciZxdW90OyZndDtkb3duJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBDU1NcXG4uc2Nyb2xsaW5nRHJhZyB7XFxuICB3aWR0aDogNDUlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc2Nyb2xsaW5nRHJhZ0lubmVyIHtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3JpZ2h0VG9wQmFyLFxcbiNyaWdodEJvdHRvbUJhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuI3JpZ2h0VG9wQmFyIHtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuI3JpZ2h0Qm90dG9tQmFyIHtcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuXFxuZGl2LnNjcm9sbEJhciB7XFxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInBhcnRpYWxzL3BhcnRpYWwtY29udHJpYnV0ZS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgQ29udHJpYnV0aW5nIG5vdGVzIHdpbGwgYmUgbW92ZWQgaGVyZSwgc2luY2UgdGhlbiwgcGxlYXNlIHVzZSA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhci9ibG9iL21hc3Rlci9DT05UUklCVVRJTkcubWRcXFwiPmNvbnRyaWJ1dGlvbiBub3RlcyBvbiBnaXRodWI8L2E+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwicGFydGlhbHMvcGFydGlhbC1kb2NzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgPGRpdiBpZD1cXFwicm93T2ZmY2FudmFzXFxcIiBjbGFzcz1cXFwicm93IHJvdy1vZmZjYW52YXMgcm93LW9mZmNhbnZhcy1sZWZ0XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgc2lkZWJhci1vZmZjYW52YXNcXFwiIGlkPVxcXCJzaWRlYmFyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG4gICAgICAgIDxhIHVpLXNyZWY9XFxcImRvY3MuZGV0YWlsKHtsaW5rOlxcJ2RvY3NJbnN0YWxsXFwnfSlcXFwiIHVpLXNyZWYtYWN0aXZlPVxcXCJhY3RpdmVcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPkluc3RhbGxhdGlvbjwvYT5cXG4gICAgICAgIDxhIG5nLXJlcGVhdD1cXFwiZXhhbXBsZSBpbiBleGFtcGxlc0xpc3RcXFwiIHVpLXNyZWY9XFxcImRvY3MuZGV0YWlsKHtsaW5rOmV4YW1wbGUubGlua30pXFxcIiB1aS1zcmVmLWFjdGl2ZT1cXFwiYWN0aXZlXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj57e2V4YW1wbGUudGl0bGV9fTwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0vLnNpZGViYXItb2ZmY2FudmFzLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tOVxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInB1bGwtbGVmdCB2aXNpYmxlLXhzXFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlU2lkZWJhcigpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1xcXCI+VG9nZ2xlIG5hdjwvYnV0dG9uPlxcbiAgICAgIDwvcD5cXG4gICAgICA8IS0tIGRvY3MuZGV0YWlsIC0tPlxcbiAgICAgIDxkaXYgdWktdmlldyBvbmxvYWQ9XFxcImhpZ2hsaWdodENvZGUoKVxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tLy5jb2wteHMtMTIuY29sLXNtLTktLT5cXG4gIDwvZGl2PlxcbiAgPCEtLS9yb3ctLT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJwYXJ0aWFscy9wYXJ0aWFsLWhvbWUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8IS0tLy5zaWRlYmFyLW9mZmNhbnZhcy0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxuICAgICAgICA8aDE+RFJBR1VMQVI8L2gxPlxcbiAgICAgICAgPHA+QW5ndWxhciBkcmFnJmRyb3AgYmFzZWQgb24gPGEgaHJlZj1cXFwiaHR0cDovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxcXCI+ZHJhZ3VsYTwvYT4uPC9wPlxcbiAgICAgICAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHVpLXNyZWY9XFxcImRvY3NcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+TGl2ZSBleGFtcGxlcyBpbiBkb2NzPC9hPjwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICAgICAgPHA+QnJvd3NlciBzdXBwb3J0IGluY2x1ZGVzIGV2ZXJ5IHNhbmUgYnJvd3NlciBhbmQgKipJRTcrKiouIDxzdWI+XyhHcmFudGVkIHlvdSBwb2x5ZmlsbCB0aGUgZnVuY3Rpb25hbCBgQXJyYXlgIG1ldGhvZHMgaW4gRVM1KV88L3N1Yj48L3A+XFxuICAgICAgICAgIDxoMj5JbnNwaXJhdGlvbjwvaDI+XFxuICAgICAgICAgIDxwPkhhdmUgeW91IGV2ZXIgd2FudGVkIGEgZHJhZyBhbmQgZHJvcCBsaWJyYXJ5IHRoYXQganVzdCB3b3Jrcz8gVGhhdCBhY3R1YWxseSB1bmRlcnN0YW5kcyB3aGVyZSB0byBwbGFjZSB0aGUgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSBkcm9wcGVkPyBUaGF0IGRvZXNu4oCZdCBuZWVkIHlvdSB0byBkbyBhIHppbGxpb24gdGhpbmdzIHRvIGdldCBpdCB0byB3b3JrPyBXZWxsLCBzbyBkaWQgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhXFxcIj5OaWNvbGFzIEJldmFjcXVhPC9hPiBhbmQgSSBoYXZlIGZvcmtlZCBpdCBpbnRvIGFuZ3VsYXIgbW9kdWxlIGFuZCBhbHNvIHB1dCBzb21lIGZlYXR1cmVzITwvcD5cXG4gICAgICAgICAgPHA+PGI+QWN0dWFsIHZlcnNpb24gMi4wLjEgaXMgYmFzZWQgb24gZHJhZ3VsYSAyLjEuMiBhbmQgdGVzdGVkIHdpdGggYW5ndWxhciAxLjQuMy48L2I+PC9wPlxcbiAgICAgICAgICA8aDI+RGlmZmVyZW5jZXMgb2YgZHJhZ3VsYXIgKGFnYWluc3QgZHJhZ3VsYSk8L2gyPlxcbiAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgPGxpPnJlcGxhY2VkIGNyb3NzdmVudCB3aXRoIGFuZ3VsYXJzIGV2ZW50IGJpbmRpbmc8L2xpPlxcbiAgICAgICAgICAgIDxsaT5yZXBsYWNlZCBjb250cmEuZW1pdHRlciB3aXRoICRzY29wZS4kZW1pdCBpZiBzY29wZSBwcm92aWRlZCBpbiBvcHRpb25zIChvcHRpb25zLnNjb3BlKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmVuY2Fwc3VsYXRlZCB0aGUgY29kZSBpbnRvIGFuZ3VsYXIgZmFjdG9yeSAoZHJhZ3VsYXJTZXJ2aWNlKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmNyZWF0ZWQgZGlyZWN0aXZlIGRyYWd1bGFyIHdoZXJlIG9wdGlvbnMgY2FuIGJlIHBhc3NlZCBwcm92aWRpbmcgc2NvcGUgcHJvcGVydHkgbmFtZTwvbGk+XFxuICAgICAgICAgICAgPGxpPmJvdGggc2VydmljZSBhbmQgZGlyZWN0aXZlIHByb3ZpZGVkIGFzIGFuZ3VsYXIgbW9kdWxlIChkcmFndWxhck1vZHVsZSk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hdXRvbWF0aWMgZGlyZWN0aW9uIGlmIG5vdCBwcm92aWRlZCBpbiBvcHRpb25zLCBpbnN0ZWFkIG9mIGRlZmF1bHQgdmVydGljYWw8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hY2NlcHRpbmcgYXJyYXlsaWtlIG9iamVjdHMgYXMgY29udGFpbmVycyBhcnJheTwvbGk+XFxuICAgICAgICAgICAgPGxpPmFjY2VwdGluZyBjdXN0b20gY2xhc3NlcyB2aWEgb3B0aW9uLmNsYXNzZXM8L2xpPlxcbiAgICAgICAgICAgIDxsaT5uYW1lc3BhY2VkIGNvbnRhaW5lcnMgZ3JvdXBzIGF2YWlsYWJsZSB2aWEgb3B0aW9uLm5hbWVTcGFjZTwvbGk+XFxuICAgICAgICAgICAgPGxpPmJvdW5kaW5nQm94IChkcmFnZ2luZyBlbGVtZW50IGNhbiBtZSBtb3ZlZCBvbmx5IGluIHNwZWNpZmljIGFyZWEpPC9saT5cXG4gICAgICAgICAgICA8bGk+bG9ja1gvWSAoZHJhZ2dpbmcgZWxlbWVudCBjYW4gbWUgbW92ZWQgb25seSBpbiBzcGVjaWZpYyBkaXJlY3Rpb24pPC9saT5cXG4gICAgICAgICAgICA8bGk+bW9yZSBleGFtcGxlczwvbGk+XFxuICAgICAgICAgICAgPGxpPmFjY2VwdCBKU09OIG9wdGlvbnMgaW4gZHJhZ3VsYXIgZGlyZWN0aXZlICgjMik8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hZGQvcmVtb3ZlIHdpdGggbmctcmVwZWF0PC9saT5cXG4gICAgICAgICAgICA8bGk+YWRkZWQgc3ludGF4IGhpZ2hsaWdodGVyIHRvIGV4YW1wbGUgY29kZXM8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8aDI+VG9kbzwvaDI+XFxuICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICA8bGk+ZXhhbXBsZSBmb3IgZGVsYXk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5vLmlzQ29udGFpbmVyIGluIF9pc0NvbnRhaW5lciAoZm4gby5pc0NvbnRhaW5lckdldE1vZGVsKGNvbnRhaW5lckVsbSkpPC9saT5cXG4gICAgICAgICAgICA8bGk+c29sdmUgbWl4aW5nIHdpdGggYW5kIHdpdGhvdXQgbW9kZWwgY29udGFpbmVyczwvbGk+XFxuICAgICAgICAgICAgPGxpPnJlbW92ZSBucG0gd29ya2Zsb3c8L2xpPlxcbiAgICAgICAgICAgIDxsaT5zdXBwb3J0IHNlbGVjdG9ycyBpbiBzZXJ2aWNlICgjMik/PC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPGgyPkZlYXR1cmVzPC9oMj5cXG4gICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgIDxsaT5wcm92aWRlZCBhcyBzZXJ2aWNlIGFuZCBhbHNvIGFzIGRpcmVjdGl2ZTwvbGk+XFxuICAgICAgICAgICAgPGxpPlN1cGVyIGVhc3kgdG8gc2V0IHVwPC9saT5cXG4gICAgICAgICAgICA8bGk+Tm8gYmxvYXRlZCBkZXBlbmRlbmNpZXM8L2xpPlxcbiAgICAgICAgICAgIDxsaT48c3Ryb25nPkZpZ3VyZXMgb3V0IHNvcnQgb3JkZXI8L3N0cm9uZz4gb24gaXRzIG93bjwvbGk+XFxuICAgICAgICAgICAgPGxpPkEgc2hhZG93IHdoZXJlIHRoZSBpdGVtIHdvdWxkIGJlIGRyb3BwZWQgb2ZmZXJzIDxzdHJvbmc+dmlzdWFsIGZlZWRiYWNrPC9zdHJvbmc+PC9saT5cXG4gICAgICAgICAgICA8bGk+VG91Y2ggZXZlbnRzITwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxoMj5Gb3IgaW5zdGFsbGF0aW9uLCB1c2FnZSBhbmQgZXhhbXBsZXMgZ28gdG8gPGEgdWktc3JlZj1cXFwiZG9jc1xcXCI+ZG9jczwvYT48L2gyPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPCEtLS9yb3ctLT5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0vLmNvbC14cy0xMi5jb2wtc20tOS0tPlxcbiAgPC9kaXY+XFxuICA8IS0tL3Jvdy0tPlxcbjwvZGl2PlxcblwiKTt9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGRyYWd1bGFyIERpcmVjdGl2ZSBieSBMdWNreWxvb2tlIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG4gdmFyIGRyYWd1bGFyTW9kdWxlID0gcmVxdWlyZSgnLi9kcmFndWxhck1vZHVsZScpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5kcmFndWxhck1vZHVsZS5kaXJlY3RpdmUoJ2RyYWd1bGFyJywgWydkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbihkcmFndWxhclNlcnZpY2UpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uKCRzY29wZSwgaUVsbSwgaUF0dHJzKSB7XG5cbiAgICAgIHZhciBvcHRpb25zID0gJHNjb3BlW2lBdHRycy5kcmFndWxhcl0gfHwgdHJ5SnNvbihpQXR0cnMuZHJhZ3VsYXIpO1xuXG4gICAgICBmdW5jdGlvbiB0cnlKc29uKGpzb24pIHtcbiAgICAgICAgdHJ5IHsgLy8gSSBkb250IGxpa2UgdHJ5IGNhdGNoIHNvbHV0aW9ucyBidXQgSSBoYXZlbnQgZmluZCBzYXR0aXNmeWluZyB3YXkgb2YgY2hjZWNraW5nIGpzb24gdmFsaWRpdHkuXG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5jb250YWluZXJzTW9kZWwgJiYgdHlwZW9mIG9wdGlvbnMuY29udGFpbmVyc01vZGVsID09PSAnc3RyaW5nJyl7XG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyc01vZGVsID0gJHNjb3BlLiRldmFsKG9wdGlvbnMuY29udGFpbmVyc01vZGVsKTtcbiAgICAgIH1cblxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGlFbG1bMF0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcbn1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdkcmFndWxhck1vZHVsZScsIFtdKTtcblxuKHtcImRyYWd1bGFyRGlyZWN0aXZlXCI6cmVxdWlyZShcIi4vZHJhZ3VsYXJEaXJlY3RpdmUuanNcIiksXCJkcmFndWxhclNlcnZpY2VcIjpyZXF1aXJlKFwiLi9kcmFndWxhclNlcnZpY2UuanNcIil9KTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogZHJhZ3VsYXIgTW9kdWxlIGFuZCBTZXJ2aWNlIGJ5IEx1Y2t5bG9va2UgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXJcbiAqIEFuZ3VsYXIgdmVyc2lvbiBvZiBkcmFndWxhIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhXG4gKi9cblxudmFyIGRyYWd1bGFyTW9kdWxlID0gcmVxdWlyZSgnLi9kcmFndWxhck1vZHVsZScpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmRyYWd1bGFyTW9kdWxlLmZhY3RvcnkoJ2RyYWd1bGFyU2VydmljZScsIFsnJHJvb3RTY29wZScsICckdGltZW91dCcsIGZ1bmN0aW9uIGRyYWd1bGEoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcblxuICB2YXIgY29udGFpbmVyc05hbWVTcGFjZWQgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVyc1xuICAgIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVycyBtb2RlbHNcbiAgICBfY2FjaGUgPSB7fSwgLy8gY2xhc3NlcyBsb29rdXAgY2FjaGVcbiAgICBfbWlycm9yOyAvLyBtaXJyb3IgaW1hZ2VcblxuICByZXR1cm4gZnVuY3Rpb24oaW5pdGlhbENvbnRhaW5lcnMsIG9wdGlvbnMpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxDb250YWluZXJzKSAmJiAhYW5ndWxhci5pc0VsZW1lbnQoaW5pdGlhbENvbnRhaW5lcnMpICYmICFpbml0aWFsQ29udGFpbmVyc1swXSkge1xuICAgICAgLy8gdGhlbiBjb250YWluZXJzIGFyZSBub3QgcHJvdmlkZWQsIG9ubHkgb3B0aW9uc1xuICAgICAgb3B0aW9ucyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBfc291cmNlLCAvLyBzb3VyY2UgY29udGFpbmVyXG4gICAgICBfaXRlbSwgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gICAgICBfc291cmNlTW9kZWwsIC8vIHNvdXJjZSBjb250YWluZXIgbW9kZWxcbiAgICAgIF9pdGVtTW9kZWwsIC8vIGl0ZW0tbW9kZWwgYmVpbmcgZHJhZ2dlZFxuICAgICAgX3RhcmdldE1vZGVsLCAvLyB0YXJnZXQgY29udGFpbmVyIG1vZGVsXG4gICAgICBfbGFzdFRhcmdldE1vZGVsLCAvLyBsYXN0IHRhcmdldCBjb250YWluZXIgbW9kZWxcbiAgICAgIF9sYXN0RHJvcFRhcmdldCA9IG51bGwsIC8vIGxhc3QgY29udGFpbmVyIGl0ZW0gd2FzIG92ZXJcbiAgICAgIF9vZmZzZXRYLCAvLyByZWZlcmVuY2UgeFxuICAgICAgX29mZnNldFksIC8vIHJlZmVyZW5jZSB5XG4gICAgICBfb2Zmc2V0WHIsIC8vIHJlZmVyZW5jZSB4IHJpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfb2Zmc2V0WWIsIC8vIHJlZmVyZW5jZSB5IGJvdHRvbSBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2NsaWVudFgsIC8vIGNhY2hlIGNsaWVudCB4LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfY2xpZW50WSwgLy8gY2FjaGUgY2xpZW50IHksIGluaXQgYXQgZ3JhYiwgdXBkYXRlIGF0IGRyYWdcbiAgICAgIF9taXJyb3JXaWR0aCwgLy8gbWlycm9yIHdpZHRoIGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfbWlycm9ySGVpZ2h0LCAvLyBtaXJyb3IgaGVpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfaW5pdGlhbFNpYmxpbmcsIC8vIHJlZmVyZW5jZSBzaWJsaW5nIHdoZW4gZ3JhYmJlZFxuICAgICAgX2N1cnJlbnRTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyBub3dcbiAgICAgIF9pbml0aWFsSW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50SW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCBub3dcbiAgICAgIF9sYXN0T3ZlckVsZW0sIC8vIGxhc3QgZWxlbWVudCBiZWhpbmQgdGhlIGN1cnNvciAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfbGFzdE92ZXJDbGFzcywgLy8gbGFzdCBvdmVyQ2xhc3MgdXNlZCAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfY29weSwgLy8gaXRlbSB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29weU1vZGVsLCAvLyBpdGVtLW1vZGVsIHVzZWQgZm9yIGNvcHlpbmdcbiAgICAgIF9jb250YWluZXJzID0ge30sIC8vIGNvbnRhaW5lcnMgbWFuYWdlZCBieSB0aGUgZHJha2VcbiAgICAgIF9jb250YWluZXJzTW9kZWwgPSB7fSwgLy8gY29udGFpbmVycyBtb2RlbFxuICAgICAgX3JlbmRlclRpbWVyLCAvLyB0aW1lciBmb3Igc2V0VGltZW91dCByZW5kZXJNaXJyb3JJbWFnZVxuICAgICAgX2lzQ29udGFpbmVyLCAvLyBpbnRlcm5hbCBpc0NvbnRhaW5lclxuICAgICAgX3RhcmdldENvbnRhaW5lciwgLy8gZHJvcHBhYmxlIGNvbnRhaW5lciB1bmRlciBkcmFnIGl0ZW1cbiAgICAgIF9kcmFnRW50ZXJFdmVudCwgLy8gZHJhZyBlbnRlciBldmVudCBmaXJlZCBvbiBlbGVtZW50IGJlaGluZCBjdXJzb3JcbiAgICAgIF9kcmFnTGVhdmVFdmVudCwgLy8gZHJhZyBsZWF2ZSBldmVudCBmaXJlZCBvbiBlbGVtZW50IGJlaGluZCBjdXJzb3JcbiAgICAgIF9sYXN0RWxlbWVudEJlaGluZEN1cnNvciwgLy8gbGFzdCBlbGVtZW50IGJlaGluZCBjdXJzb3JcbiAgICAgIGRlZmF1bHRDbGFzc2VzID0ge1xuICAgICAgICBtaXJyb3I6ICdndS1taXJyb3InLFxuICAgICAgICBoaWRlOiAnZ3UtaGlkZScsXG4gICAgICAgIHVuc2VsZWN0YWJsZTogJ2d1LXVuc2VsZWN0YWJsZScsXG4gICAgICAgIHRyYW5zaXQ6ICdndS10cmFuc2l0JyxcbiAgICAgICAgb3ZlckFjdGl2ZTogJ2d1LW92ZXItYWN0aXZlJyxcbiAgICAgICAgb3ZlckFjY2VwdHM6ICdndS1vdmVyLWFjY2VwdCcsXG4gICAgICAgIG92ZXJEZWNsaW5lczogJ2d1LW92ZXItZGVjbGluZSdcbiAgICAgIH0sXG4gICAgICBvID0geyAvLyBvcHRpb25zXG4gICAgICAgIGNsYXNzZXM6IGRlZmF1bHRDbGFzc2VzLFxuICAgICAgICBjb250YWluZXJzOiBmYWxzZSxcbiAgICAgICAgbW92ZXM6IGFsd2F5cyxcbiAgICAgICAgYWNjZXB0czogYWx3YXlzLFxuICAgICAgICBpc0NvbnRhaW5lcjogbmV2ZXIsXG4gICAgICAgIGNvcHk6IGZhbHNlLFxuICAgICAgICBkZWxheTogZmFsc2UsXG4gICAgICAgIGludmFsaWQ6IGludmFsaWRUYXJnZXQsXG4gICAgICAgIHJldmVydE9uU3BpbGw6IGZhbHNlLFxuICAgICAgICByZW1vdmVPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgZHJhZ092ZXJDbGFzc2VzOiBmYWxzZSxcbiAgICAgICAgbG9ja1g6IGZhbHNlLFxuICAgICAgICBsb2NrWTogZmFsc2UsXG4gICAgICAgIGJvdW5kaW5nQm94OiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiBmYWxzZVxuICAgICAgfTtcblxuICAgIGlmICghaXNFbGVtZW50KG8uYm91bmRpbmdCb3gpKSB7XG4gICAgICBvLmJvdW5kaW5nQm94ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmNsYXNzZXMpIHtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRlZmF1bHRDbGFzc2VzLCBvcHRpb25zLmNsYXNzZXMpO1xuICAgICAgYW5ndWxhci5leHRlbmQob3B0aW9ucy5jbGFzc2VzLCBkZWZhdWx0Q2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgYW5ndWxhci5leHRlbmQobywgb3B0aW9ucyk7XG5cbiAgICBpZiAoby5kZWxheSA9PT0gdHJ1ZSkge1xuICAgICAgby5kZWxheSA9IDMwMDtcbiAgICB9XG5cbiAgICBpZiAoby5taXJyb3JDb250YWluZXIgPT09IHZvaWQgMCkge1xuICAgICAgby5taXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIC8vIGdldCBpbml0aWFsIGNvbnRhaW5lcnMgZnJvbSBvcHRpb25zLCBhcmd1bWVudCBvciBmYWxsIGJhY2sgdG8gZW1wdHkgYXJyYXkgKGNvbnRhaW5lcnMgY2FuIGJlIGFkZGVkIGxhdGVyKVxuICAgIGluaXRpYWxDb250YWluZXJzID0gby5jb250YWluZXJzIHx8IChpbml0aWFsQ29udGFpbmVycyA/IG1ha2VBcnJheShpbml0aWFsQ29udGFpbmVycykgOiBbXSk7XG4gICAgaWYgKG8uY29udGFpbmVycykge1xuICAgICAgLy8gbWFrZSBhcnJheSBmcm9tIG8uY29udGFpbmVyc1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgIH1cbiAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgIG8uY29udGFpbmVyc01vZGVsID0gQXJyYXkuaXNBcnJheShvLmNvbnRhaW5lcnNNb2RlbFswXSkgPyBvLmNvbnRhaW5lcnNNb2RlbCA6IFtvLmNvbnRhaW5lcnNNb2RlbF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2VlZE5hbWVTcGFjZXMoX2NvbnRhaW5lcnMsIGNvbnRhaW5lcnNOYW1lU3BhY2VkLCBuYW1lU3BhY2UsIGluaXRpYWxDb250YWluZXJzKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0pIHtcbiAgICAgICAgY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSA9IFtdO1xuICAgICAgfVxuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSwgaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXSA9IGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV07XG4gICAgfVxuXG4gICAgLy8gZmVlZCBuYW1lc3BhY2VkIGNvbnRhaW5lcnMgZ3JvdXBzIGFuZCBvcHRpb25hbHkgc2hhZG93IGl0IGJ5IG1vZGVsc1xuICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8ubmFtZVNwYWNlKSkge1xuICAgICAgICBvLm5hbWVTcGFjZSA9IFtvLm5hbWVTcGFjZV07XG4gICAgICB9XG4gICAgICBvLm5hbWVTcGFjZS5mb3JFYWNoKGZ1bmN0aW9uIGVhY2hOYW1lU3BhY2UobmFtZVNwYWNlKSB7XG4gICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycyk7XG4gICAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzTW9kZWwsIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwsIG5hbWVTcGFjZSwgby5jb250YWluZXJzTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIF9pc0NvbnRhaW5lciA9IGlzQ29udGFpbmVyTmFtZVNwYWNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdCAobm90IHVzaW5nIG5hbWVTcGFjZXMpXG4gICAgICBfY29udGFpbmVycyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgX2lzQ29udGFpbmVyID0gaXNDb250YWluZXI7XG4gICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgX2NvbnRhaW5lcnNNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vcmVnaXN0ZXIgZXZlbnRzXG4gICAgZXZlbnRzKCk7XG5cbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgIF9kcmFnRW50ZXJFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICBfZHJhZ0VudGVyRXZlbnQuaW5pdEV2ZW50KCdkcmFndWxhcmVudGVyJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBfZHJhZ0xlYXZlRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgX2RyYWdMZWF2ZUV2ZW50LmluaXRFdmVudCgnZHJhZ3VsYXJsZWF2ZScsIHRydWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfZHJhZ0VudGVyRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICAgICAgX2RyYWdFbnRlckV2ZW50LmV2ZW50VHlwZSA9ICdkcmFndWxhcmVudGVyJztcbiAgICAgIF9kcmFnTGVhdmVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG4gICAgICBfZHJhZ0xlYXZlRXZlbnQuZXZlbnRUeXBlID0gJ2RyYWd1bGFybGVhdmUnO1xuICAgIH1cblxuICAgIHZhciBkcmFrZSA9IHtcbiAgICAgIGFkZENvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ2FkZCcpLFxuICAgICAgcmVtb3ZlQ29udGFpbmVyOiBtYW5pcHVsYXRlQ29udGFpbmVycygncmVtb3ZlJyksXG4gICAgICBjb250YWluZXJzOiBfY29udGFpbmVycyxcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZW5kLFxuICAgICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICBkcmFnZ2luZzogZmFsc2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRyYWtlO1xuXG4gICAgLy8gbWFrZSBhcnJheSBmcm9tIGFycmF5LWxpa2Ugb2JqZWN0cyBvciBmcm9tIHNpbmdsZSBlbGVtZW50XG4gICAgZnVuY3Rpb24gbWFrZUFycmF5KGFsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWxsKSkge1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgICAgfVxuICAgICAgaWYgKGFsbC5sZW5ndGgpIHsgLy8gaXMgYXJyYXktbGlrZVxuICAgICAgICB2YXIgaUFsbCA9IGFsbC5sZW5ndGgsXG4gICAgICAgICAgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgd2hpbGUgKGlBbGwpIHtcbiAgICAgICAgICBpQWxsLS07XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChhbGxbaUFsbF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgIH0gZWxzZSB7IC8vIGlzIG9uZSBlbGVtZW50XG4gICAgICAgIHJldHVybiBbYWxsXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgb3IgcmVtb3ZlIGNvbnRhaW5lcnMgLSBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gbWFuaXB1bGF0ZUNvbnRhaW5lcnMob3ApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhZGRPclJlbW92ZShhbGwpIHtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSBBcnJheS5pc0FycmF5KGFsbCkgPyBhbGwgOiBtYWtlQXJyYXkoYWxsKTtcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgICAgICAgaWYgKG8ubmFtZVNwYWNlKSB7XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goby5uYW1lU3BhY2UsIGZ1bmN0aW9uIGFkZFJlbW92ZU5hbWVzcGFjZWQoY29udGFpbmVycywgbmFtZVNwYWNlKSB7XG4gICAgICAgICAgICAgIGlmIChvcCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgICAgICBfY29udGFpbmVyc1tuYW1lU3BhY2VdLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5hZGRDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXS5zcGxpY2UoX2NvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLCAxKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5yZW1vdmVDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgIF9jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UuYWRkQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX2NvbnRhaW5lcnMuc3BsaWNlKF9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSwgMSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLnJlbW92ZUNvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NvbnRhaW5lcihlbCkge1xuICAgICAgcmV0dXJuIGRyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihlbCkgIT09IC0xIHx8IG8uaXNDb250YWluZXIoZWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ29udGFpbmVyTmFtZVNwYWNlZChlbCkge1xuICAgICAgdmFyIG5hbWVTcGFjZTtcbiAgICAgIGZvciAobmFtZVNwYWNlIGluIGRyYWtlLmNvbnRhaW5lcnMpIHtcbiAgICAgICAgaWYgKGRyYWtlLmNvbnRhaW5lcnMuaGFzT3duUHJvcGVydHkobmFtZVNwYWNlKSAmJiBkcmFrZS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZihlbCkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldmVudHMocmVtKSB7XG4gICAgICB2YXIgb3AgPSByZW0gPyAnb2ZmJyA6ICdvbic7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsIG9wLCAnbW91c2V1cCcsIHJlbGVhc2UpO1xuXG4gICAgICBpbml0aWFsQ29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIGFkZE1vdXNlRG93bihjb250YWluZXIpIHtcbiAgICAgICAgcmVnRXZlbnQoY29udGFpbmVyLCAnb24nLCAnbW91c2Vkb3duJywgZ3JhYik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZXZlbnRzKHRydWUpO1xuICAgICAgZHJha2UucmVtb3ZlQ29udGFpbmVyKF9jb250YWluZXJzKTtcbiAgICAgIHJlbGVhc2Uoe30pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdyYWIoZSkge1xuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgdmFyIGl0ZW0gPSBlLnRhcmdldDtcblxuICAgICAgLy8gZmlsdGVyIHNvbWUgb2RkIHNpdHVhdGlvbnNcbiAgICAgIGlmICgoZS53aGljaCAhPT0gMCAmJiBlLndoaWNoICE9PSAxKSB8fCBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybjsgLy8gd2Ugb25seSBjYXJlIGFib3V0IGhvbmVzdC10by1nb2QgbGVmdCBjbGlja3MgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiBkcmFnIGNhbiBzdGFydFxuICAgICAgaWYgKHN0YXJ0KGl0ZW0pICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXV0b21hdGljbHkgZGV0ZWN0IGRpcmVjdGlvbiBvZiBlbGVtZW50cyBpZiBub3Qgc2V0IGluIG9wdGlvbnNcbiAgICAgIGlmICghby5kaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudCxcbiAgICAgICAgICBwYXJlbnRIZWlnaHQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIHBhcmVudFdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIGNoaWxkSGVpZ2h0ID0gaXRlbS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgY2hpbGRXaWR0aCA9IGl0ZW0uY2xpZW50V2lkdGg7XG4gICAgICAgIG8uZGlyZWN0aW9uID0gcGFyZW50SGVpZ2h0IC8gY2hpbGRIZWlnaHQgPCBwYXJlbnRXaWR0aCAvIGNoaWxkV2lkdGggPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgfVxuXG4gICAgICAvLyBnZXQgaW5pdGlhbCBjb29yZGluYXRlcywgdXNlZCB0byByZW5kZXIgX21pcnJvciBmb3IgZmlyc3QgdGltZVxuICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldChfaXRlbSk7XG4gICAgICBfb2Zmc2V0WCA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICBfb2Zmc2V0WSA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LnRvcDtcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gbGltaXRpbmcgYXJlYSBvZiBfbWlycm9yIG1vdmVtZW50LCBnZXQgaW5pdGlhbCBjb29yZGluYXRlc1xuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgX29mZnNldFhyID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSkgLSBvZmZzZXQucmlnaHQ7XG4gICAgICAgIF9vZmZzZXRZYiA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LmJvdHRvbTtcbiAgICAgIH1cblxuICAgICAgLy8gZGVsYXllZCByZW5kZXJpbmdcbiAgICAgIGlmICh0eXBlb2Ygby5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgX3JlbmRlclRpbWVyID0gJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgICAgfSwgby5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJNaXJyb3JBbmREcmFnKGUpO1xuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWlycm9yQW5kRHJhZyhlKSB7XG4gICAgICBhZGRDbGFzcyhfY29weSB8fCBfaXRlbSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgcmVuZGVyTWlycm9ySW1hZ2UoKTtcbiAgICAgIC8vIGluaXRpYWwgcG9zaXRpb25cbiAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX29mZnNldFggKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9vZmZzZXRZICsgJ3B4JztcblxuICAgICAgZHJhZyhlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGl0ZW0pIHtcbiAgICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuXG4gICAgICBpZiAoZHJha2UuZHJhZ2dpbmcgJiYgX21pcnJvcikge1xuICAgICAgICByZXR1cm47IC8vIGFscmVhZHkgZHJhZ2dpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc0NvbnRhaW5lcihpdGVtKSkge1xuICAgICAgICByZXR1cm47IC8vIGRvbid0IGRyYWcgY29udGFpbmVyIGl0c2VsZlxuICAgICAgfVxuXG4gICAgICB3aGlsZSAoaXRlbS5wYXJlbnRFbGVtZW50ICYmICFfaXNDb250YWluZXIoaXRlbS5wYXJlbnRFbGVtZW50KSkge1xuICAgICAgICAvLyBicmVhayBsb29wIGlmIHVzZXIgdHJpZXMgdG8gZHJhZyBpdGVtIHdoaWNoIGlzIGNvbnNpZGVyZWQgaW52YWxpZCBoYW5kbGVcbiAgICAgICAgaWYgKG8uaW52YWxpZChpdGVtLCBoYW5kbGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudEVsZW1lbnQ7IC8vIGRyYWcgdGFyZ2V0IHNob3VsZCBiZSBpbW1lZGlhdGUgY2hpbGQgb2YgY29udGFpbmVyXG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVyID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFjb250YWluZXIgfHwgby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkgfHwgIW8ubW92ZXMoaXRlbSwgY29udGFpbmVyLCBoYW5kbGUsIF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCkpIHsgLy8gaXMgbW92YWJsZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVuZCgpO1xuXG4gICAgICAvLyBwcmVwYXJlIG1vZGVscyBvcGVyYXRpb25zXG4gICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gaW5pdGlhbENvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLFxuICAgICAgICAgIGl0ZW1JbmRleCA9IGRvbUluZGV4T2YoaXRlbSwgY29udGFpbmVyKTtcblxuICAgICAgICBfaW5pdGlhbEluZGV4ID0gX2N1cnJlbnRJbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgICAgX3NvdXJjZU1vZGVsID0gby5jb250YWluZXJzTW9kZWxbY29udGFpbmVySW5kZXhdO1xuICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgIF9pdGVtTW9kZWwgPSBfc291cmNlTW9kZWxbaXRlbUluZGV4XTtcbiAgICAgICAgaWYgKG8uY29weSkge1xuICAgICAgICAgIF9jb3B5TW9kZWwgPSBhbmd1bGFyLmNvcHkoX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG8uY29weSkge1xuICAgICAgICBfY29weSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9jb3B5LCBpdGVtLCBfY29weU1vZGVsLCBfaXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfc291cmNlID0gY29udGFpbmVyO1xuICAgICAgX2l0ZW0gPSBpdGVtO1xuICAgICAgX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gbmV4dEVsKGl0ZW0pO1xuXG4gICAgICBkcmFrZS5kcmFnZ2luZyA9IHRydWU7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnJywgX2l0ZW0sIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZhbGlkVGFyZ2V0KGVsKSB7XG4gICAgICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0EnIHx8IGVsLnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJyEhISEhIEkgaGF2ZW50IHNlZW4gdGhpcyBtZXNzYWdlIGluIGFueSBjYXNlJyk7XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgICAgZHJvcChpdGVtLCBpdGVtLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGVhc2UoZSkge1xuICAgICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBfY2xpZW50WCwgX2NsaWVudFkpLFxuICAgICAgICBkcm9wVGFyZ2V0ID0gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgX2NsaWVudFgsIF9jbGllbnRZKTtcblxuICAgICAgaWYgKGRyb3BUYXJnZXQgJiYgKG8uY29weSA9PT0gZmFsc2UgfHwgZHJvcFRhcmdldCAhPT0gX3NvdXJjZSkpIHtcbiAgICAgICAgLy8gZm91bmQgdmFsaWQgdGFyZ2V0IGFuZCAoaXMgbm90IGNvcHkgY2FzZSBvciB0YXJnZXQgaXMgbm90IGluaXRpYWwgY29udGFpbmVyKVxuICAgICAgICBkcm9wKGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgICAgfSBlbHNlIGlmIChvLnJlbW92ZU9uU3BpbGwpIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWZ0ZXIgcmVsZWFzZSB0aGVyZSBpcyBubyBjb250YWluZXIgaG92ZXJlZFxuICAgICAgX3RhcmdldENvbnRhaW5lciA9IG51bGw7XG5cbiAgICAgIC8vIHJlbW92ZSBjbGFzc2VzIGlmIHVzZWRcbiAgICAgIGlmIChvLmRyYWdPdmVyQ2xhc3NlcyAmJiBfbGFzdE92ZXJFbGVtKSB7XG4gICAgICAgIHJtQ2xhc3MoX2xhc3RPdmVyRWxlbSwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICBfbGFzdE92ZXJFbGVtID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgncmVsZWFzZScsIGl0ZW0sIF9zb3VyY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyb3AoaXRlbSwgdGFyZ2V0KSB7XG4gICAgICBpZiAoby5zY29wZSAmJiBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCwgX3RhcmdldE1vZGVsKTtcbiAgICAgIH0gZWxzZSBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcm9wJywgaXRlbSwgdGFyZ2V0LCBfc291cmNlLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCwgX3RhcmdldE1vZGVsKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudCxcbiAgICAgICAgaXRlbU1vZGVsO1xuXG4gICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1Nb2RlbCA9IF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbDtcbiAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihpdGVtTW9kZWwpLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdChvLmNvcHkgPyAnY2FuY2VsJyA6ICdyZW1vdmUnLCBpdGVtLCBwYXJlbnQsIGl0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbChyZXZlcnQpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJldmVydHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHJldmVydCA6IG8ucmV2ZXJ0T25TcGlsbCxcbiAgICAgICAgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCchISEhISEhISEhISEhISEhISBJIHRoaW5rIHRoaXMgaXMgbmV2ZXIgcG9zc2libGUgYmVjYXVzZSBjb3B5IGNhbm5vdCBiZSBwbGFjZWQgaW50byBzb3VyY2UnKTtcbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfY29weSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSwgMSwgX2NvcHlNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQocGFyZW50KTtcbiAgICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiBvLmNvcHkgPT09IGZhbHNlICYmIHJldmVydHMpIHtcbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIF9zb3VyY2UuaW5zZXJ0QmVmb3JlKGl0ZW0sIF9pbml0aWFsU2libGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgICAgLy8gbW92ZSBiYWNrIHRvIGluaXRpYWwgcGxhY2VtZW50XG4gICAgICAgICAgbW92ZUluQ29udGFpbmVyc01vZGVsKF9pbml0aWFsSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlICYmIChpbml0aWFsIHx8IHJldmVydHMpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICByZW1vdmVNaXJyb3JJbWFnZSgpO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBybUNsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FuY2VsIHRpbWVyXG4gICAgICBpZiAoX3JlbmRlclRpbWVyKSB7XG4gICAgICAgICR0aW1lb3V0LmNhbmNlbChfcmVuZGVyVGltZXIpO1xuICAgICAgfVxuXG4gICAgICBkcmFrZS5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnZW5kJywgaXRlbSk7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ291dCcsIGl0ZW0sIF9sYXN0RHJvcFRhcmdldCwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIF9zb3VyY2UgPSBfaXRlbSA9IF9jb3B5ID0gX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gX3NvdXJjZU1vZGVsID0gbnVsbDtcbiAgICAgIF9pdGVtTW9kZWwgPSBfY29weU1vZGVsID0gX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBfcmVuZGVyVGltZXIgPSBfbGFzdERyb3BUYXJnZXQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGlzIGl0ZW0gY3VycmVudGx5IHBsYWNlZCBpbiBvcmlnaW5hbCBjb250YWluZXIgYW5kIG9yaWdpbmFsIHBvc2l0aW9uP1xuICAgIGZ1bmN0aW9uIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHMpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gcyB8fCAoX21pcnJvciA/IF9jdXJyZW50U2libGluZyA6IG5leHRFbChfaXRlbSB8fCBfY29weSkpO1xuICAgICAgcmV0dXJuIHRhcmdldCA9PT0gX3NvdXJjZSAmJiBzaWJsaW5nID09PSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgfVxuXG4gICAgLy8gZmluZCB2YWxpZCBkcm9wIGNvbnRhaW5lclxuICAgIGZ1bmN0aW9uIGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlbGVtZW50QmVoaW5kQ3Vyc29yO1xuXG4gICAgICB3aGlsZSAodGFyZ2V0ICYmICFhY2NlcHRlZCgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcblxuICAgICAgZnVuY3Rpb24gYWNjZXB0ZWQoKSB7XG4gICAgICAgIHZhciBhY2NlcHRzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF9pc0NvbnRhaW5lcih0YXJnZXQpKSB7IC8vIGlzIGRyb3BwYWJsZT9cbiAgICAgICAgICBfdGFyZ2V0Q29udGFpbmVyID0gdGFyZ2V0O1xuXG4gICAgICAgICAgdmFyIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKHRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvciksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UodGFyZ2V0LCBpbW1lZGlhdGUsIGNsaWVudFgsIGNsaWVudFkpLFxuICAgICAgICAgICAgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgYWNjZXB0cyA9IGluaXRpYWwgPyB0cnVlIDogby5hY2NlcHRzKF9pdGVtLCB0YXJnZXQsIF9zb3VyY2UsIHJlZmVyZW5jZSwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsKTtcblxuICAgICAgICAgIGlmIChhY2NlcHRzICYmIG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgICAgaWYgKCFvLm5hbWVTcGFjZSkge1xuICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIG5hbWVTcGFjZSBpbiBkcmFrZS5jb250YWluZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRyYWtlLmNvbnRhaW5lcnMuaGFzT3duUHJvcGVydHkobmFtZVNwYWNlKSAmJiBkcmFrZS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZih0YXJnZXQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9jb250YWluZXJzTW9kZWxbbmFtZVNwYWNlXVtkcmFrZS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBjbGFzcyBpZiBlbGVtZW50IGlzIGVuYWJsZWQgZm9yIGl0IGFuZCBpdCBoYXMgbm90IGFscmVhZHkgdGhlIGNsYXNzXG4gICAgICAgIGlmIChvLmRyYWdPdmVyQ2xhc3NlcyAmJlxuICAgICAgICAgIGhhc0NsYXNzKHRhcmdldCwgby5jbGFzc2VzLm92ZXJBY3RpdmUpICYmXG4gICAgICAgICAgdGFyZ2V0ICE9PSBfbGFzdE92ZXJFbGVtKSB7XG5cbiAgICAgICAgICBpZiAoX2xhc3RPdmVyRWxlbSkgeyAvLyBjbGVhciBmcm9tIHByZXZpb3VzXG4gICAgICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfbGFzdE92ZXJDbGFzcyA9IGFjY2VwdHMgPyBvLmNsYXNzZXMub3ZlckFjY2VwdHMgOiBvLmNsYXNzZXMub3ZlckRlY2xpbmVzO1xuICAgICAgICAgIGFkZENsYXNzKHRhcmdldCwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICAgIF9sYXN0T3ZlckVsZW0gPSB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjZXB0cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICAgIGlmICghX21pcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIC8vIHVwZGF0ZSBjb29yZGluYXRlc1xuICAgICAgX2NsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgX2NsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuXG4gICAgICAvLyBjb3VudCBtaXJyb3IgY29vcmRpYXRlc1xuICAgICAgdmFyIHggPSBfY2xpZW50WCAtIF9vZmZzZXRYLFxuICAgICAgICB5ID0gX2NsaWVudFkgLSBfb2Zmc2V0WSxcbiAgICAgICAgcGFnZVgsXG4gICAgICAgIHBhZ2VZLFxuICAgICAgICBvZmZzZXRCb3g7XG5cbiAgICAgIC8vIGZpbGwgZXh0cmEgcHJvcGVydGllcyBpZiBib3VuZGluZ0JveCBpcyB1c2VkXG4gICAgICBpZiAoby5ib3VuZGluZ0JveCkge1xuICAgICAgICBwYWdlWCA9IGdldENvb3JkKCdwYWdlWCcsIGUpO1xuICAgICAgICBwYWdlWSA9IGdldENvb3JkKCdwYWdlWScsIGUpO1xuICAgICAgICBvZmZzZXRCb3ggPSBnZXRPZmZzZXQoby5ib3VuZGluZ0JveCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghby5sb2NrWSkge1xuICAgICAgICBpZiAoIW8uYm91bmRpbmdCb3ggfHwgKHBhZ2VYID4gb2Zmc2V0Qm94LmxlZnQgKyBfb2Zmc2V0WCAmJiBwYWdlWCA8IG9mZnNldEJveC5yaWdodCArIF9vZmZzZXRYcikpIHtcbiAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGNoZWNrIGFnYWluIGluIGNhc2UgdXNlciBzY3JvbGxlZCB0aGUgdmlld1xuICAgICAgICAgIGlmIChwYWdlWCA8IG9mZnNldEJveC5sZWZ0ICsgX29mZnNldFgpIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LmxlZnQpICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0gX2NsaWVudFggLSBfbWlycm9yV2lkdGggLSAocGFnZVggLSBvZmZzZXRCb3gucmlnaHQpICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghby5sb2NrWCkge1xuICAgICAgICBpZiAoIW8uYm91bmRpbmdCb3ggfHwgKHBhZ2VZID4gb2Zmc2V0Qm94LnRvcCArIF9vZmZzZXRZICYmIHBhZ2VZIDwgb2Zmc2V0Qm94LmJvdHRvbSArIF9vZmZzZXRZYikpIHtcbiAgICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKG8uYm91bmRpbmdCb3gpIHsgLy8gY2hlY2sgYWdhaW4gaW4gY2FzZSB1c2VyIHNjcm9sbGVkIHRoZSB2aWV3XG4gICAgICAgICAgaWYgKHBhZ2VZIDwgb2Zmc2V0Qm94LnRvcCArIF9vZmZzZXRZKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gKHBhZ2VZIC0gb2Zmc2V0Qm94LnRvcCkgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gX21pcnJvckhlaWdodCAtIChwYWdlWSAtIG9mZnNldEJveC5ib3R0b20pICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBfY2xpZW50WCwgX2NsaWVudFkpLFxuICAgICAgICBkcm9wVGFyZ2V0ID0gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgY2hhbmdlZCA9IGRyb3BUYXJnZXQgIT09IG51bGwgJiYgZHJvcFRhcmdldCAhPT0gX2xhc3REcm9wVGFyZ2V0O1xuXG4gICAgICAgIGlmIChlbGVtZW50QmVoaW5kQ3Vyc29yICE9PSBfbGFzdEVsZW1lbnRCZWhpbmRDdXJzb3IpIHtcbiAgICAgICAgICBmaXJlRXZlbnQoZWxlbWVudEJlaGluZEN1cnNvciwgX2RyYWdFbnRlckV2ZW50KTtcbiAgICAgICAgICBpZiAoX2xhc3RFbGVtZW50QmVoaW5kQ3Vyc29yKSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQoX2xhc3RFbGVtZW50QmVoaW5kQ3Vyc29yLCBfZHJhZ0xlYXZlRXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfbGFzdEVsZW1lbnRCZWhpbmRDdXJzb3IgPSBlbGVtZW50QmVoaW5kQ3Vyc29yO1xuICAgICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkIHx8IGRyb3BUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvdXQoKTtcbiAgICAgICAgICBfbGFzdERyb3BUYXJnZXQgPSBkcm9wVGFyZ2V0O1xuICAgICAgICAgIG92ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfbGFzdERyb3BUYXJnZXQgPSBkcm9wVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGRvIG5vdCBjb3B5IGluIHNhbWUgY29udGFpbmVyXG4gICAgICBpZiAoZHJvcFRhcmdldCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCAmJiBpdGVtLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0gZWxzZSBpZiAoby5jb250YWluZXJzTW9kZWwgJiYgX2xhc3RUYXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpICE9PSAtMSkge1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9sYXN0VGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSwgMSk7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZmVyZW5jZSxcbiAgICAgICAgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvciksXG4gICAgICAgIHJlZmVyZW5jZUluZGV4O1xuXG4gICAgICBpZiAoaW1tZWRpYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCBpbW1lZGlhdGUsIF9jbGllbnRYLCBfY2xpZW50WSk7XG4gICAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIGlmIChyZWZlcmVuY2UpIHsgLy8gcmVmZXJlbmNlIGlzIG51bGwgaWYgZHJhZyBpcyBvdmVyIGxhc3QgZWxlbWVudFxuICAgICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBkb21JbmRleE9mKHJlZmVyZW5jZSwgZHJvcFRhcmdldCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoby5yZXZlcnRPblNwaWxsID09PSB0cnVlICYmICFvLmNvcHkpIHtcbiAgICAgICAgLy8gdGhlIGNhc2UgdGhhdCBtaXJyb3IgaXMgbm90IG92ZXIgdmFsaWQgdGFyZ2V0IGFuZCByZXZlcnRpbmcgaXMgb24gYW5kIGNvcHkgaXMgb2ZmXG4gICAgICAgIHJlZmVyZW5jZSA9IF9pbml0aWFsU2libGluZztcbiAgICAgICAgZHJvcFRhcmdldCA9IF9zb3VyY2U7XG5cbiAgICAgICAgLy8gZ2V0dGluZyBtb2RlbCBpbnRpdGlhbCBwcm9wZXJ0aWVzIGludG8gY3VycmVudFxuICAgICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF9pbml0aWFsSW5kZXg7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZSBjYXNlIHRoYXQgbWlycm9yIGlzIG5vdCBvdmVyIHZhbGlkIHRhcmdldCBhbmQgcmVtb3ZpbmcgaXMgb24gb3IgY29weSBpcyBvblxuICAgICAgICBpZiAoKG8uY29weSB8fCBvLnJlbW92ZU9uU3BpbGwgPT09IHRydWUpICYmIGl0ZW0ucGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIG9yIGNvcHkgb2YgaXRlbVxuICAgICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShyZWZlcmVuY2VJbmRleCwgMSk7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseUFzeW5jKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwgfHxcbiAgICAgICAgcmVmZXJlbmNlICE9PSBpdGVtICYmXG4gICAgICAgIHJlZmVyZW5jZSAhPT0gbmV4dEVsKGl0ZW0pICYmXG4gICAgICAgIHJlZmVyZW5jZSAhPT0gX2N1cnJlbnRTaWJsaW5nKSB7XG4gICAgICAgIC8vIG1vdmluZyBpdGVtL2NvcHkgdG8gbmV3IGNvbnRhaW5lciBmcm9tIHByZXZpb3VzIG9uZVxuICAgICAgICBfY3VycmVudFNpYmxpbmcgPSByZWZlcmVuY2U7XG5cbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIGRyb3BUYXJnZXQuaW5zZXJ0QmVmb3JlKGl0ZW0sIHJlZmVyZW5jZSk7IC8vIGlmIHJlZmVyZW5jZSBpcyBudWxsIGl0ZW0gaXMgaW5zZXJ0ZWQgYXQgdGhlIGVuZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmVJbkNvbnRhaW5lcnNNb2RlbChyZWZlcmVuY2VJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG8uc2NvcGUuJGVtaXQoJ3NoYWRvdycsIGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG1vdmVkKHR5cGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCh0eXBlLCBpdGVtLCBfbGFzdERyb3BUYXJnZXQsIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvdmVyKCkge1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgIG1vdmVkKCdvdmVyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb3V0KCkge1xuICAgICAgICBpZiAoX2xhc3REcm9wVGFyZ2V0KSB7XG4gICAgICAgICAgbW92ZWQoJ291dCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZUluQ29udGFpbmVyc01vZGVsKHJlZmVyZW5jZUluZGV4KSB7XG4gICAgICBpZiAoX2xhc3RUYXJnZXRNb2RlbCA9PT0gX3RhcmdldE1vZGVsKSB7XG4gICAgICAgIGlmIChyZWZlcmVuY2VJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gX3RhcmdldE1vZGVsLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSByZWZlcmVuY2VJbmRleCA+IF9jdXJyZW50SW5kZXggPyByZWZlcmVuY2VJbmRleCAtIDEgOiByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShpbmRleCwgMCwgX2xhc3RUYXJnZXRNb2RlbC5zcGxpY2UoX2N1cnJlbnRJbmRleCwgMSlbMF0pO1xuICAgICAgICBfY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVmZXJlbmNlSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF90YXJnZXRNb2RlbC5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICghby5jb3B5IHx8IF9sYXN0VGFyZ2V0TW9kZWwgIT09IF9zb3VyY2VNb2RlbCkgeyAvLyBkb250IHJlbW92ZSBvcmlnaW5hbCBmcm9tIHNvdXJjZSB3aGlsZSBjb3B5aW5nXG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbC5zcGxpY2UoX2N1cnJlbnRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvLmNvcHkgfHwgX3RhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCkgPT09IC0xKSB7IC8vIGRvbnQgcGxhY2UgY29weSB0d2ljZSBpbiBvbmUgZHJhZ1xuICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDAsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgICAgX2N1cnJlbnRJbmRleCA9IHJlZmVyZW5jZUluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkcm9vdFNjb3BlLiRhcHBseUFzeW5jKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsQ29udGFpbmVyKGUpIHtcbiAgICAgIGlmIChfdGFyZ2V0Q29udGFpbmVyKSB7XG4gICAgICAgIHZhciBiZWZvcmUgPSBfdGFyZ2V0Q29udGFpbmVyLnNjcm9sbFRvcDtcbiAgICAgICAgX3RhcmdldENvbnRhaW5lci5zY3JvbGxUb3AgKz0gZS5kZWx0YVk7XG4gICAgICAgIC8vIGJsb2NrIHNjcm9sbCBvZiB0aGUgZG9jdW1lbnQgd2hlbiBjb250YWluZXIgY2FuIGJlIHNjcm9sbGVkXG4gICAgICAgIGlmIChiZWZvcmUgIT09IF90YXJnZXRDb250YWluZXIuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZWN0ID0gX2l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBfbWlycm9yID0gX2l0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgX21pcnJvcldpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgIF9taXJyb3JIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgIF9taXJyb3Iuc3R5bGUud2lkdGggPSBnZXRSZWN0V2lkdGgocmVjdCkgKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS5oZWlnaHQgPSBnZXRSZWN0SGVpZ2h0KHJlY3QpICsgJ3B4JztcbiAgICAgIHJtQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgYWRkQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLm1pcnJvcik7XG4gICAgICBvLm1pcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChfbWlycm9yKTtcbiAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgJ29uJywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgICAgYWRkQ2xhc3MoYm9keSwgby5jbGFzc2VzLnVuc2VsZWN0YWJsZSk7XG4gICAgICByZWdFdmVudChfbWlycm9yLCAnb24nLCAnd2hlZWwnLCBzY3JvbGxDb250YWluZXIpO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2xvbmVkJywgX21pcnJvciwgX2l0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcm1DbGFzcyhib2R5LCBvLmNsYXNzZXMudW5zZWxlY3RhYmxlKTtcbiAgICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCAnb2ZmJywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgICAgICByZWdFdmVudChfbWlycm9yLCAnb2ZmJywgJ3doZWVsJywgc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgICAgX21pcnJvci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKF9taXJyb3IpO1xuICAgICAgICBfbWlycm9yID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCB0YXJnZXQpIHtcbiAgICAgIHZhciBpbW1lZGlhdGUgPSB0YXJnZXQ7XG4gICAgICB3aGlsZSAoaW1tZWRpYXRlICE9PSBkcm9wVGFyZ2V0ICYmIGltbWVkaWF0ZS5wYXJlbnRFbGVtZW50ICE9PSBkcm9wVGFyZ2V0KSB7XG4gICAgICAgIGltbWVkaWF0ZSA9IGltbWVkaWF0ZS5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgaWYgKGltbWVkaWF0ZSA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGltbWVkaWF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgdGFyZ2V0LCB4LCB5KSB7XG4gICAgICB2YXIgaG9yaXpvbnRhbCA9IG8uZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB2YXIgcmVmZXJlbmNlID0gdGFyZ2V0ICE9PSBkcm9wVGFyZ2V0ID8gaW5zaWRlKCkgOiBvdXRzaWRlKCk7XG4gICAgICByZXR1cm4gcmVmZXJlbmNlO1xuXG4gICAgICBmdW5jdGlvbiBvdXRzaWRlKCkgeyAvLyBzbG93ZXIsIGJ1dCBhYmxlIHRvIGZpZ3VyZSBvdXQgYW55IHBvc2l0aW9uXG4gICAgICAgIHZhciBsZW4gPSBkcm9wVGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBlbDtcbiAgICAgICAgdmFyIHJlY3Q7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGVsID0gZHJvcFRhcmdldC5jaGlsZHJlbltpXTtcbiAgICAgICAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgcmVjdC5sZWZ0ID4geCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWhvcml6b250YWwgJiYgcmVjdC50b3AgPiB5KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbnNpZGUoKSB7IC8vIGZhc3RlciwgYnV0IG9ubHkgYXZhaWxhYmxlIGlmIGRyb3BwZWQgaW5zaWRlIGEgY2hpbGQgZWxlbWVudFxuICAgICAgICB2YXIgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh4ID4gcmVjdC5sZWZ0ICsgZ2V0UmVjdFdpZHRoKHJlY3QpIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoeSA+IHJlY3QudG9wICsgZ2V0UmVjdEhlaWdodChyZWN0KSAvIDIpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZXNvbHZlKGFmdGVyKSB7XG4gICAgICAgIHJldHVybiBhZnRlciA/IG5leHRFbCh0YXJnZXQpIDogdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbChzY3JvbGxQcm9wLCBvZmZzZXRQcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvd1tvZmZzZXRQcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvd1tvZmZzZXRQcm9wXTtcbiAgICAgIH1cbiAgICAgIGlmIChkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudEVsZW1lbnRbc2Nyb2xsUHJvcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9keVtzY3JvbGxQcm9wXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHNjcm9sbFRvcCA9IGdldFNjcm9sbCgnc2Nyb2xsVG9wJywgJ3BhZ2VZT2Zmc2V0JyksXG4gICAgICAgIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoJ3Njcm9sbExlZnQnLCAncGFnZVhPZmZzZXQnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnQsXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0ICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSArIHNjcm9sbFRvcFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50QmVoaW5kUG9pbnQocG9pbnQsIHgsIHkpIHtcbiAgICAgIGlmICgheCAmJiAheSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBwID0gcG9pbnQgfHwge30sXG4gICAgICAgIHN0YXRlID0gcC5jbGFzc05hbWUsXG4gICAgICAgIGVsO1xuICAgICAgcC5jbGFzc05hbWUgKz0gJyAnICsgby5jbGFzc2VzLmhpZGU7XG4gICAgICBlbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgICBwLmNsYXNzTmFtZSA9IHN0YXRlO1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByZWdFdmVudChlbCwgb3AsIHR5cGUsIGZuKSB7XG4gICAgdmFyIHRvdWNoID0ge1xuICAgICAgICBtb3VzZXVwOiAndG91Y2hlbmQnLFxuICAgICAgICBtb3VzZWRvd246ICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgbW91c2Vtb3ZlOiAndG91Y2htb3ZlJ1xuICAgICAgfSxcbiAgICAgICRlbCA9IGFuZ3VsYXIuZWxlbWVudChlbCk7XG5cbiAgICBpZiAodHlwZSAhPT0gJ3doZWVsJykge1xuICAgICAgJGVsW29wXSh0b3VjaFt0eXBlXSwgZm4pO1xuICAgIH1cbiAgICAkZWxbb3BdKHR5cGUsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ldmVyKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsd2F5cygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRFbChlbCkge1xuICAgIHJldHVybiBlbC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbWFudWFsbHkoKTtcblxuICAgIGZ1bmN0aW9uIG1hbnVhbGx5KCkge1xuICAgICAgdmFyIHNpYmxpbmcgPSBlbDtcbiAgICAgIGRvIHtcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICB9IHdoaWxlIChzaWJsaW5nICYmIHNpYmxpbmcubm9kZVR5cGUgIT09IDEpO1xuICAgICAgcmV0dXJuIHNpYmxpbmc7XG4gICAgfVxuICB9XG5cbiAgLy9DYW5ub3QgdXNlIGFuZ3VsYXIuaXNFbGVtZW50IGJlY2F1c2Ugd2UgbmVlZCB0byBjaGVjayBwbGFpbiBkb20gZWxlbWVudCwgbm8galFsaXRlIHdyYXBwZWRcbiAgZnVuY3Rpb24gaXNFbGVtZW50KG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0JyA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxuICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBsb29rdXBDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgY2FjaGVkID0gX2NhY2hlW2NsYXNzTmFtZV07XG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgY2FjaGVkLmxhc3RJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jYWNoZVtjbGFzc05hbWVdID0gY2FjaGVkID0gbmV3IFJlZ0V4cCgnKD86XnxcXFxccyknICsgY2xhc3NOYW1lICsgJyg/OlxcXFxzfCQpJywgJ2cnKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgY3VycmVudCA9IGVsLmNsYXNzTmFtZTtcbiAgICBpZiAoIWN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfSBlbHNlIGlmICghbG9va3VwQ2xhc3MoY2xhc3NOYW1lKS50ZXN0KGN1cnJlbnQpKSB7XG4gICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJtQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKGxvb2t1cENsYXNzKGNsYXNzTmFtZSksICcgJykudHJpbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIHJldHVybiAoJyAnICsgZWwuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSArICcgJykgPiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEV2ZW50SG9zdChlKSB7XG4gICAgLy8gb24gdG91Y2hlbmQgZXZlbnQsIHdlIGhhdmUgdG8gdXNlIGBlLmNoYW5nZWRUb3VjaGVzYFxuICAgIC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcxOTI1NjMvdG91Y2hlbmQtZXZlbnQtcHJvcGVydGllc1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMzRcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF07XG4gICAgfVxuICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb29yZChjb29yZCwgZSkge1xuICAgIHZhciBob3N0ID0gZ2V0RXZlbnRIb3N0KGUpO1xuICAgIHZhciBtaXNzTWFwID0ge1xuICAgICAgcGFnZVg6ICdjbGllbnRYJywgLy8gSUU4XG4gICAgICBwYWdlWTogJ2NsaWVudFknIC8vIElFOFxuICAgIH07XG4gICAgaWYgKGNvb3JkIGluIG1pc3NNYXAgJiYgIShjb29yZCBpbiBob3N0KSAmJiBtaXNzTWFwW2Nvb3JkXSBpbiBob3N0KSB7XG4gICAgICBjb29yZCA9IG1pc3NNYXBbY29vcmRdO1xuICAgIH1cbiAgICByZXR1cm4gaG9zdFtjb29yZF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0V2lkdGgocmVjdCkge1xuICAgIHJldHVybiByZWN0LndpZHRoIHx8IChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJlY3RIZWlnaHQocmVjdCkge1xuICAgIHJldHVybiByZWN0LmhlaWdodCB8fCAocmVjdC5ib3R0b20gLSByZWN0LnRvcCk7XG4gIH1cblxuICBmdW5jdGlvbiBkb21JbmRleE9mKGNoaWxkLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhbmd1bGFyLmVsZW1lbnQocGFyZW50KS5jaGlsZHJlbigpLCBjaGlsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBmaXJlRXZlbnQodGFyZ2V0LCBlKSB7XG4gICAgaWYgKHRhcmdldC5kaXNwYXRjaEV2ZW50KSB7XG4gICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmZpcmVFdmVudChcIm9uXCIgKyBlLmV2ZW50VHlwZSwgZSk7XG4gICAgfVxuICB9XG5cbn1dKTtcbiJdfQ==
