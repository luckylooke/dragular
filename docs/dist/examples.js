(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global angular */
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
/* global angular */
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
/* global angular */
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
/* global angular */
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
/* global angular */
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
  }])

},{"../examplesApp":22}],6:[function(require,module,exports){
/* global angular */
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
/* global angular */
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
/* global angular */
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
/* global angular */
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('Directive', ['$scope', 'dragularService', function TodoCtrl($scope) {
    $scope.dragularOptions = {
      classes: {
        mirror: 'custom-green-mirror'
      },
      nameSpace: 'same' // just connecting left and right container
    };
  }]);

},{"../examplesApp":22}],10:[function(require,module,exports){
/* global angular */
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('DirectiveModel', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
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
/* global angular */
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
/* global angular */
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
/* global angular */
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
/* global angular */
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
/* global angular */
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
/* global angular */
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
      };

      dragularService(nestedContainers, {
        moves: function(el, container, handle) {
          return !handle.classList.contains('row-handle');
        },
        containersModel: (function getNestedContainersModel(){
          var parent = $scope.items,
            containersModel = [];
          for (var i = 0; i < parent.length; i++) {
            containersModel.push(parent[i].items);
          };
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
/* global angular */
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
/* global angular */
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
/* global angular */
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
/* global angular */
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
  .controller('ScrollingDrag', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children());
  }]);

},{"../examplesApp":22}],22:[function(require,module,exports){
/* global angular */
'use strict';

// var angular = require('angular');


require('../../../src/dragularModule');
require('./templates');

/**
 *  Module Example App
 *
 *  DEMO app for dragular https://github.com/luckylooke/dragular
 */

module.exports = angular.module('examplesApp', ['dragularModule', 'templates', 'ui.router']).controller('ExAppCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
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
            };
        }
    }

    var rowOffcanvas = angular.element(document.getElementById('rowOffcanvas'));
    $scope.toggleSidebar = function toggleSidebar () {
        rowOffcanvas.toggleClass('active');
    }

}]);

({"exampleBasic":({"exampleBasic":require("./exampleBasic/exampleBasic.js")}),"exampleBasicWithModel":({"exampleBasicWithModel":require("./exampleBasicWithModel/exampleBasicWithModel.js")}),"exampleBoundingBox":({"exampleBoundingBox":require("./exampleBoundingBox/exampleBoundingBox.js")}),"exampleBoundingBoxLockX":({"exampleBoundingBoxLockX":require("./exampleBoundingBoxLockX/exampleBoundingBoxLockX.js")}),"exampleBoundingBoxLockY":({"exampleBoundingBoxLockY":require("./exampleBoundingBoxLockY/exampleBoundingBoxLockY.js")}),"exampleCopy":({"exampleCopy":require("./exampleCopy/exampleCopy.js")}),"exampleCopyWithModel":({"exampleCopyWithModel":require("./exampleCopyWithModel/exampleCopyWithModel.js")}),"exampleCustomClasses":({"exampleCustomClasses":require("./exampleCustomClasses/exampleCustomClasses.js")}),"exampleDirective":({"exampleDirective":require("./exampleDirective/exampleDirective.js")}),"exampleDirectiveWithModel":({"exampleDirectiveWithModel":require("./exampleDirectiveWithModel/exampleDirectiveWithModel.js")}),"exampleDragOverClasses":({"exampleDragOverClasses":require("./exampleDragOverClasses/exampleDragOverClasses.js")}),"exampleEvents":({"exampleEvents":require("./exampleEvents/exampleEvents.js")}),"exampleHandle":({"exampleHandle":require("./exampleHandle/exampleHandle.js")}),"exampleNameSpaces":({"exampleNameSpaces":require("./exampleNameSpaces/exampleNameSpaces.js")}),"exampleNestedNgRepeat":({"exampleNestedNgRepeat":require("./exampleNestedNgRepeat/exampleNestedNgRepeat.js")}),"exampleNestedNgRepeatWithModel":({"exampleNestedNgRepeatWithModel":require("./exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.js")}),"exampleNgRepeat":({"exampleNgRepeat":require("./exampleNgRepeat/exampleNgRepeat.js")}),"exampleNgRepeatWithModel":({"exampleNgRepeatWithModel":require("./exampleNgRepeatWithModel/exampleNgRepeatWithModel.js")}),"exampleRemoveOnSpill":({"exampleRemoveOnSpill":require("./exampleRemoveOnSpill/exampleRemoveOnSpill.js")}),"exampleRevertOnSpill":({"exampleRevertOnSpill":require("./exampleRevertOnSpill/exampleRevertOnSpill.js")}),"exampleScrollingDrag":({"exampleScrollingDrag":require("./exampleScrollingDrag/exampleScrollingDrag.js")}),"examplesRouter":require("./examplesRouter.js"),"templates":require("./templates.js")});

},{"../../../src/dragularModule":26,"./exampleBasic/exampleBasic.js":1,"./exampleBasicWithModel/exampleBasicWithModel.js":2,"./exampleBoundingBox/exampleBoundingBox.js":3,"./exampleBoundingBoxLockX/exampleBoundingBoxLockX.js":4,"./exampleBoundingBoxLockY/exampleBoundingBoxLockY.js":5,"./exampleCopy/exampleCopy.js":6,"./exampleCopyWithModel/exampleCopyWithModel.js":7,"./exampleCustomClasses/exampleCustomClasses.js":8,"./exampleDirective/exampleDirective.js":9,"./exampleDirectiveWithModel/exampleDirectiveWithModel.js":10,"./exampleDragOverClasses/exampleDragOverClasses.js":11,"./exampleEvents/exampleEvents.js":12,"./exampleHandle/exampleHandle.js":13,"./exampleNameSpaces/exampleNameSpaces.js":14,"./exampleNestedNgRepeat/exampleNestedNgRepeat.js":15,"./exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.js":16,"./exampleNgRepeat/exampleNgRepeat.js":17,"./exampleNgRepeatWithModel/exampleNgRepeatWithModel.js":18,"./exampleRemoveOnSpill/exampleRemoveOnSpill.js":19,"./exampleRevertOnSpill/exampleRevertOnSpill.js":20,"./exampleScrollingDrag/exampleScrollingDrag.js":21,"./examplesRouter.js":23,"./templates":24,"./templates.js":24}],23:[function(require,module,exports){
/* global angular */
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
      .state('api', {
        url: '/api',
        templateUrl: 'partials/partial-api.html'
      })
      .state('api.detail', {
        url: '/:link',
        templateUrl: function($stateParams) {
          return $stateParams.link + '/' + $stateParams.link + '.html';
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/partial-contact.html'
      });
  }]);

},{"./examplesApp":22}],24:[function(require,module,exports){
'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("exampleBasicWithModel/exampleBasicWithModel.html","<div class=\'parent\'>\n  <h2>Basic - with model</h2>\n  <label for=\'hy\'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\n  <div class=\'wrapper\' ng-controller=\"BasicModel\">\n    <div class=\'tableRow\'>\n      <div class=\'container\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'container\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\"container\">\n        <div>Items1:\n          <br/>{{items1 | json}}</div>\n      </div>\n      <div class=\"container\">\n        <div>Items2:\n          <br/>{{items2 | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'BasicModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, but you can only drop me in one of these containers.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    var containers = $element.children().children();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2]\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;\n    &lt;div class=\'tableRow\'&gt;\n        &lt;div class=\'container\'&gt;\n            &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\'container\'&gt;\n            &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;tableRow&quot;&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items1:\n                &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items2:\n                &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleBoundingBox/exampleBoundingBox.html","        <div class=\'parent\'>\n            <h2>BoundingBox</h2>\n            <label for=\'hy\'>You can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBox\">\n                <div class=\'container\'>\n                    <div>This items cannot cross its example element, just try it your selves.</div>\n                    <div>Item 2.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                </div>\n                <div class=\'container\'>\n                    <div>This items cannot cross its example element, just try it your selves.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children(), {\n    boundingBox: $element\n  });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleBasic/exampleBasic.html","<div class=\'parent\'>\n  <h2>Basic</h2>\n  <label for=\'hy\'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\n  <div class=\'wrapper\' ng-controller=\"Basic\">\n    <div class=\'container\'>\n      <div>Move me, but you can only drop me in one of these containers.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n      <div>Item 3.</div>\n      <div>Item 6.</div>\n    </div>\n    <div class=\'container\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n      <div>Item 4.</div>\n      <div>Item 5.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Basic\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\n    dragularService($element.children());\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n  &lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;\n    &lt;div class=\'container\'&gt;\n        &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\n        &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n        &lt;div&gt;Item 3.&lt;/div&gt;\n        &lt;div&gt;Item 6.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\'container\'&gt;\n        &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n        &lt;div&gt;Item 4.&lt;/div&gt;\n        &lt;div&gt;Item 5.&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleBoundingBoxLockX/exampleBoundingBoxLockX.html","<div class=\'parent\'>\n            <h2>BoundingBox and lockX</h2>\n            <label for=\'hy\'>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockX\">\n                <div class=\'containerHorizontal\'>\n                    <div class=\'boundingBox\'>\n                        <div class=\"width25\">Items are locked in X axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\n                        <div class=\"width25\">item 2</div>\n                        <div class=\"width25\">item 3</div>\n                        <div class=\"width25\">item 4</div>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children()[0].children(), {\n    boundingBox: $element.children()[0],\n    lockX: true\n  });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleBoundingBoxLockY/exampleBoundingBoxLockY.html","        <div class=\'parent\'>\n            <h2>BoundingBox and LockY</h2>\n            <label for=\'hy\'>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockY\">\n                <div class=\'container\'>\n                    <div class=\'boundingBox\'>\n                        <div>Items are locked in Y axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\n                        <div>item 2</div>\n                        <div>item 3</div>\n                        <div>item 4</div>\n                        <div>item 5</div>\n                        <div>item 6</div>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children()[0].children(), {\n    boundingBox: $element.children()[0],\n    lockY: true\n  });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleCopy/exampleCopy.html","<div class=\'parent\'>\n  <h2>Copy</h2>\n  <label for=\'hy\'>Copying stuff is great too.</label>\n  <div class=\'wrapper\' ng-controller=\"Copy\" ng-hide=\"globals.showModelExamples\">\n    <div id=\'left2\' class=\'container\'>\n      <div>Move me, and make copy on drop.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n    </div>\n    <div id=\'right2\' class=\'container\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Copy\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\n    dragularService($element.children(), {\n      copy: true\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Copy&quot; ng-hide=&quot;globals.showModelExamples&quot;&gt;\n    &lt;div id=\'left2\' class=\'container\'&gt;\n      &lt;div&gt;Move me, and make copy on drop.&lt;/div&gt;\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div id=\'right2\' class=\'container\'&gt;\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleCopyWithModel/exampleCopyWithModel.html","<div class=\'parent\'>\n  <h2>Copy - with model</h2>\n  <label for=\'hy\'>Copying stuff is great too.</label>\n  <div class=\'wrapper\' ng-controller=\"CopyModel\">\n    <div class=\'tableRow\'>\n      <div class=\'container\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'container\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\"container\">\n        <div>Items1:\n          <br/>{{items1 | json}}</div>\n      </div>\n      <div class=\"container\">\n        <div>Items2:\n          <br/>{{items2 | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'CopyModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, and make copy on drop.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    var containers = $element.children().children();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2],\n      copy: true\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;CopyModel&quot; ng-show=&quot;globals.showModelExamples&quot;&gt;\n    &lt;div class=\'tableRow\'&gt;\n      &lt;div class=\'container\'&gt;\n        &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\'container\'&gt;\n        &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;tableRow&quot;&gt;\n      &lt;div class=&quot;container&quot;&gt;\n        &lt;div&gt;Items1:\n          &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;container&quot;&gt;\n        &lt;div&gt;Items2:\n          &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleCustomClasses/exampleCustomClasses.html","<div class=\'parent\'>\n    <h2>Custom classes</h2>\n    <label for=\'hy\'>You can overwrite buildin classes by providing classes names in object via options.classes.</label>\n    <div class=\'wrapper\' ng-controller=\"CustomClasses\">\n        <div id=\'left4\' class=\'container\'>\n            <div>Move me, but you can only drop me in one of these containers.</div>\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n            <div>Item 3.</div>\n            <div>Item 6.</div>\n        </div>\n        <div id=\'right3\' class=\'container\'>\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n        </div>\n    </div>\n    <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], { classes: {\n    mirror: \'custom-green-mirror\'\n  } });\n\n  // Default classes are:\n  option.classes = {\n    mirror: \'gu-mirror\',\n    hide: \'gu-hide\',\n    unselectable: \'gu-unselectable\',\n    transit: \'gu-transit\',\n    overActive: \'gu-over-active\',\n    overAccepts: \'gu-over-accept\',\n    overDeclines: \'gu-over-decline\'\n  };\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleDirective/exampleDirective.html","<div class=\'parent\'>\n  <h2>Directive</h2>\n  <label for=\'hy\'>Same as custom classes example, but showing use of directive.</label>\n  <div class=\'wrapper\' ng-controller=\"Directive\">\n    <div class=\'container\' dragular=\"dragularOptions\">\n      <div>Move me, but you can only drop me in one of these containers.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n      <div>Item 3.</div>\n      <div>Item 6.</div>\n    </div>\n    <div class=\'container\' dragular=\'{\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"same\"}\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n      <div>Item 4.</div>\n      <div>Item 5.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Directive\', [\'$scope\', \'dragularService\', function TodoCtrl($scope) {\n    $scope.dragularOptions = {\n      classes: {\n        mirror: \'custom-green-mirror\'\n      },\n      nameSpace: \'common\' // just connecting left and right container\n    };\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Directive&quot;&gt;\n    &lt;div class=\'container\' dragular=&quot;dragularOptions&quot;&gt;\n      &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n      &lt;div&gt;Item 3.&lt;/div&gt;\n      &lt;div&gt;Item 6.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\'container\' dragular=\'{&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;same&quot;}\'&gt;\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n      &lt;div&gt;Item 4.&lt;/div&gt;\n      &lt;div&gt;Item 5.&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleDirectiveWithModel/exampleDirectiveWithModel.html","<div class=\'parent\'>\n  <h2>Directive - with model</h2>\n  <label for=\'hy\'>Same as custom classes example, but showing use of directive.</label>\n  <div class=\'wrapper\' ng-controller=\"DirectiveModel\">\n    <div class=\'tableRow\'>\n      <div class=\'container\' dragular=\"dragularOptions\">\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'container\' dragular=\'{\"containersModel\":\"items2\",\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"common\"}\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\"container\">\n        <div>Items1:\n          <br/>{{items1 | json}}</div>\n      </div>\n      <div class=\"container\">\n        <div>Items2:\n          <br/>{{items2 | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n       \n        <code>\n// JS\n  controller(\'DirectiveModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, and make copy on drop.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    $scope.dragularOptions = {\n      containersModel: $scope.items1,\n      classes: {\n        mirror: \'custom-green-mirror\'\n      },\n      nameSpace: \'common\' // just connecting left and right container\n    };\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n &lt;div class=\'wrapper\' ng-controller=&quot;DirectiveModel&quot;&gt;\n  &lt;div class=\'container\' dragular=&quot;dragularOptions&quot;&gt;\n    &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=\'container\' dragular=\'{&quot;containersModel&quot;:&quot;items2&quot;,&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;common&quot;}\'&gt;\n    &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleDragOverClasses/exampleDragOverClasses.html","<div class=\'parent\'>\n  <h2>DragOverClasses</h2>\n  <label for=\'hy\'>You can interact with dragging element by setting dragOverClasses:true in options and adding pointer class (default is: \'gu-over-active\') to element you want to be interactive (getting classes). Usually you want to containers show wheather they accepts element or not, but you can use it anywhere. Try to drag over the not-container too.</label>\n  <div class=\'wrapper\' ng-controller=\"DragOverClasses\">\n    <div class=\'container width25 gu-over-active\'>\n      <div>apples and oranges cannot be mixed</div>\n      <div>apple 2</div>\n      <div>apple 3</div>\n      <div>apple 4</div>\n    </div>\n    <div class=\'container width25 gu-over-active\'>\n      <div>orange 1</div>\n      <div>orange 2</div>\n      <div>orange 3</div>\n      <div>orange 4</div>\n    </div>\n    <div class=\'container width25 gu-over-active\'>\n      <div>apple 5</div>\n      <div>apple 6</div>\n      <div>apple 7</div>\n      <div>apple 8</div>\n    </div>\n    <div class=\'container width25 gu-over-active\'>\n      <div>orange 5</div>\n      <div>orange 6</div>\n      <div>orange 7</div>\n      <div>orange 8</div>\n    </div>\n  </div>\n  <div class=\"notContainer gu-over-active\"> Test active class on NOT container.</div>\n\n  <pre>\n    <code>\n&lt;!-- HTML --&gt;\n  &lt;div class=\'wrapper\' ng-controller=&quot;DragOverClasses&quot;&gt;\n    &lt;div class=\'container width25 gu-over-active\'&gt;\n      &lt;div&gt;apples and oranges cannot be mixed&lt;/div&gt;\n      &lt;div&gt;apple 2&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n    &lt;div class=\'container width25 gu-over-active\'&gt;\n      &lt;div&gt;orange 1&lt;/div&gt;\n      &lt;div&gt;orange 2&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n    &lt;div class=\'container width25 gu-over-active\'&gt;\n      &lt;div&gt;apple 5&lt;/div&gt;\n      &lt;div&gt;apple 6&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n    &lt;div class=\'container width25 gu-over-active\'&gt;\n      &lt;div&gt;orange 5&lt;/div&gt;\n      &lt;div&gt;orange 6&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=&quot;notContainer&quot;&gt; Test active class on NOT container.&lt;/div&gt;\n    </code>\n  </pre>\n\n  <pre>\n    <code>\n  // CSS\n.container.gu-over-active.gu-over-accept {\n  background-color: green;\n}\n\n.container.gu-over-active.gu-over-decline {\n  background-color: red;\n}\n\n.notContainer {\n  width: 100%;\n  padding: 2em;\n}\n\n.notContainer.gu-over-active.gu-over-decline {\n  background-color: yellow;\n}\n    </code>\n  </pre>\n\n  <pre>\n    <code>\n  // JS\n  dragularService([$element.children()[0], $element.children()[2]], {\n    nameSpace: \'apples\',\n    dragOverClasses: true\n  });\n  dragularService([$element.children()[1], $element.children()[3]], {\n    nameSpace: \'oranges\',\n    dragOverClasses: true\n  });\n    </code>\n  </pre>\n</div>\n");
$templateCache.put("exampleEvents/exampleEvents.html","<div class=\'parent\'>\n    <h2>Events</h2>\n    <label for=\'hy\'>Add some fantastic events!</label>\n    <div class=\'wrapper\' ng-controller=\"Events\">\n        <div id=\'left3\' class=\'container\'>\n            <div>Move me, but you can only drop me in one of these containers.</div>\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n            <div>Item 3.</div>\n            <div>Item 6.</div>\n        </div>\n        <div id=\'right3\' class=\'container\'>\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n        </div>\n    </div>\n    <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], {\n    scope: $scope\n  });\n  $scope.$on(\'drag\', function(e, el) {\n    e.stopPropagation();\n    el.className = el.className.replace(\' ex-moved\', \'\');\n  });\n  $scope.$on(\'drop\', function(e, el) {\n    e.stopPropagation();\n    $timeout(function() {\n      el.className += \' ex-moved\';\n    }, 0);\n  });\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleHandle/exampleHandle.html","<div class=\'parent\'>\n    <h2>Handle</h2>\n    <label for=\'hy\'>Drag handles float your cruise?</label>\n    <div class=\'wrapper\' ng-controller=\"Handle\">\n        <div id=\'left5\' class=\'container\'>\n            <div><span class=\'handle\'>+</span>Move me, but you can use the plus sign to drag me around.</div>\n        </div>\n        <div id=\'right5\' class=\'container\'>\n        </div>\n    </div>\n    <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], {\n    moves: function (el, container, handle) {\n      return handle.className === \'handle\';\n    }\n  });\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleNameSpaces/exampleNameSpaces.html","        <div class=\'parent\'>\n            <h2>NameSpaces</h2>\n            <label for=\'hy\'>Try to mix apples and oranges. You cannot place apples into oranges, but notice that you can place it into mixed. Mixed can be placed into apples and oranges. Notice that mixed becomes orange or apple if placed into their container. <b>So remember if you are using namespacing, then item is namespaced according to actual container it is placed in. If you need to item preserve thier state you need to use classes in combination with options.accepts and optionally options.isContainer.</b> It depends on setup. (See <a href=\"https://github.com/luckylooke/dragular/issues/9\">issue #9</a>.)</label>\n            <div class=\'wrapper\' ng-controller=\"NameSpaces\">\n                <div class=\'container width25\'>\n                    <div>try to mix oranges and apples</div>\n                    <div>apple 2</div>\n                    <div>apple 3</div>\n                    <div>apple 4</div>\n                </div>\n                <div class=\'container width25\'>\n                    <div>orange 1</div>\n                    <div>orange 2</div>\n                    <div>orange 3</div>\n                    <div>orange 4</div>\n                </div>\n                <div class=\'container width25\'>\n                    <div>apple 5</div>\n                    <div>apple 6</div>\n                    <div>apple 7</div>\n                    <div>apple 8</div>\n                </div>\n                <div class=\'container width25\'>\n                    <div>mixed 1</div>\n                    <div>mixed 2</div>\n                    <div>mixed 3</div>\n                    <div>mixed 4</div>\n                </div>\n            </div>\n            <pre>\n      <code>\ndragularService([$element.children()[0], $element.children()[2]], {\n  nameSpace: \'apples\'\n});\ndragularService($element.children()[1], {\n  nameSpace: \'oranges\'\n});\ndragularService($element.children()[3], { // mixed\n  nameSpace: [\'oranges\', \'apples\']\n});\n      </code>\n    </pre>\n        </div>");
$templateCache.put("exampleNestedNgRepeat/exampleNestedNgRepeat.html","<div class=\'parent\'>\n    <h2>Nested ngRepeat</h2>\n    <label for=\'hy\'> You can move whole rows by grabing row title, all items it selves. Try it out!\n        <hr/>\n        <b>Old IE doesnt support Flexible Box Layout</b> so it can look weird. But in modern browsers it is awsome! Dragular will be working well also in old IE but you have to use different css for layout.\n        <hr/>\n    </label>\n    <div ng-controller=\"NestedNgRepeat\">\n        <div ng-repeat=\"item in items\" class=\'row\'>\n            <div class=\"row-handle\">Row {{$index}}</div>\n            <div ng-repeat=\"item in item.items\" class=\"cell\">{{item.content}}</div>\n        </div>\n    </div>\n    <pre>\n        <code>\n  // HTML\n\n  &lt;div ng-controller=&quot;Example15&quot;&gt;\n    &lt;div ng-repeat=&quot;item in items&quot; class=\'row\'&gt;\n      &lt;div class=&quot;row-handle&quot;&gt;Row {{$index}}&lt;/div&gt;\n      &lt;div ng-repeat=&quot;item in item.items&quot; class=&quot;cell&quot;&gt;{{item.content}}&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n    <pre>\n        <code>\n  // CSS\n\n  .row {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .cell {\n    flex-grow: 1;\n  }\n\n  .row,\n  .cell {\n    margin: 10px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n        </code>\n      </pre>\n    <pre>\n        <code>\n  // JS\n\n  $timeout(function() { // timeount due to ngRepeat to be ready\n    dragularService($element, {\n      moves: function(el, container, handle) {\n        return handle.classList.contains(\'row-handle\');\n      }\n    });\n    dragularService($element.children(), {\n      moves: function(el, container, handle) {\n        return !handle.classList.contains(\'row-handle\');\n      }\n    });\n  }, 0);\n  $scope.items = [{\n    items: [{\n      content: \'Item a1\'\n    }, {\n      content: \'Item a2\'\n    }, {\n      content: \'Item a3\'\n    }, {\n      content: \'Item a4\'\n    }]\n  }, {\n    items: [{\n      content: \'Item b1\'\n    }, {\n      content: \'Item b2\'\n    }, {\n      content: \'Item b3\'\n    }, {\n      content: \'Item b4\'\n    }]\n  }, {\n    items: [{\n      content: \'Item c1\'\n    }, {\n      content: \'Item c2\'\n    }, {\n      content: \'Item c3\'\n    }, {\n      content: \'Item c4\'\n    }]\n  }];\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.html","<div class=\'parent\'>\n  <h2>Nested ngRepeat - with model</h2>\n  <label for=\'hy\'> You can move whole rows by grabing row title, all items it selves. Try it out!\n    <hr/>\n    <b>Old IE doesnt support Flexible Box Layout</b> so it can look weird. But in modern browsers it is awsome! Dragular will be working well also in old IE but you have to use different css for layout.\n    <hr/>\n  </label>\n  <div ng-controller=\"NestedNgRepeatWithModel\">\n    <div class=\'tableRow\'>\n      <div class=\'container\'>\n        <div ng-repeat=\"item in items\" class=\'row\'>\n          <div class=\"row-handle\">Row {{::$index}}</div>\n          <div class=\"row cell containerNested\">\n            <div ng-repeat=\"item in item.items\" class=\"cell\">{{item.content}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\"container\">\n        <pre>\n            <div>Items:\n              <br/>{{items | json}}</div>\n        </pre>\n      </div>\n    </div>\n  </div>\n  <pre>\n    <code>\n&lt;!-- HTML --&gt;\n&lt;div ng-controller=&quot;NestedNgRepeatWithModel&quot;&gt;\n  &lt;div class=\'container\'&gt;\n    &lt;div ng-repeat=&quot;item in items&quot; class=\'row\'&gt;\n      &lt;div class=&quot;row-handle&quot;&gt;Row {{::$index}}&lt;/div&gt;\n      &lt;div class=&quot;row cell containerNested&quot;&gt;\n        &lt;div ng-repeat=&quot;item in item.items&quot; class=&quot;cell&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n    </code>\n  </pre>\n  <pre>\n    <code>\n  // CSS\n\n  .row {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .cell {\n    flex-grow: 1;\n  }\n\n  .row,\n  .cell {\n    margin: 10px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n    </code>\n  </pre>\n  <pre>\n    <code>\n  // JS\ncontroller(\'NestedNgRepeatWithModel\', [\'$timeout\', \'$scope\', \'$element\', \'dragularService\', function TodoCtrl($timeout, $scope, $element, dragularService) {\n    $timeout(function() { // timeount due to nested ngRepeat to be ready\n      var container = $element.children().eq(0).children(),\n        parentContainers = container.children(),\n        nestedContainers = [];\n\n      dragularService(container, {\n        moves: function(el, container, handle) {\n          return handle.classList.contains(\'row-handle\');\n        },\n        containersModel: $scope.items\n      });\n\n      // collect nested contianers\n      for (var i = 0; i < parentContainers.length; i++) {\n        nestedContainers.push(parentContainers.eq(i).children()[1]);\n      };\n\n      dragularService(nestedContainers, {\n        moves: function(el, container, handle) {\n          return !handle.classList.contains(\'row-handle\');\n        },\n        containersModel: (function getNestedContainersModel(){\n          var parent = $scope.items,\n            containersModel = [];\n          for (var i = 0; i < parent.length; i++) {\n            containersModel.push(parent[i].items);\n          };\n          return containersModel;\n        })()\n      });\n    }, 0);\n    $scope.items = [{\n      items: [{\n        content: \'Item a1\'\n      }, {\n        content: \'Item a2\'\n      }, {\n        content: \'Item a3\'\n      }, {\n        content: \'Item a4\'\n      }]\n    }, {\n      items: [{\n        content: \'Item b1\'\n      }, {\n        content: \'Item b2\'\n      }, {\n        content: \'Item b3\'\n      }, {\n        content: \'Item b4\'\n      }]\n    }, {\n      items: [{\n        content: \'Item c1\'\n      }, {\n        content: \'Item c2\'\n      }, {\n        content: \'Item c3\'\n      }, {\n        content: \'Item c4\'\n      }]\n    }];\n  }])\n    </code>\n  </pre>\n</div>\n");
$templateCache.put("exampleNgRepeat/exampleNgRepeat.html","        <div class=\'parent\'>\n            <h2>ngRepeat</h2>\n            <label for=\'hy\'>Example of using ng-repeat with dragular and adding/removing items dynamicaly.</label>\n            <div class=\'wrapper\' ng-controller=\"NgRepeat\">\n                <div class=\'container\'>\n                    <div ng-repeat=\"item in items\">\n                        {{item.content}}\n                        <button class=\'cursorDefault\' ng-click=\"addItem()\">+</button>\n                        <button class=\'cursorDefault\' ng-click=\"removeItem()\">x</button>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  // HTML:\n  &lt;div class=\'container\'&gt;\n    &lt;div ng-repeat=&quot;item in items&quot;&gt;\n      {{item.content}}\n      &lt;button class=\'cursorDefault\' ng-click=&quot;addItem()&quot;&gt;+&lt;/button&gt;\n      &lt;button class=\'cursorDefault\' ng-click=&quot;removeItem()&quot;&gt;x&lt;/button&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n\n  // JS:\n  dragularService($element.children());\n  $scope.items = [{\n    content: \'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.\'\n  },{\n    content: \'Item 2\'\n  },{\n    content: \'Item 3\'\n  },{\n    content: \'Item 4\'\n  }];\n  $scope.addItem = function addItem () {\n    var index = $scope.items.indexOf(this.item) + 1;\n    $scope.items.splice(index, 0,{content: this.item.content + \'-copy\'});\n  }\n  $scope.removeItem = function removeItem () {\n    var index = $scope.items.indexOf(this.item);\n    $scope.items.splice(index, 1);\n  }\n        </code>\n      </pre>\n        </div>\n");
$templateCache.put("exampleNgRepeatWithModel/exampleNgRepeatWithModel.html","<div class=\'parent\'>\n  <h2>ngRepeat - with model</h2>\n  <label for=\'hy\'>Example of using ng-repeat with dragular and adding/removing items dynamicaly.</label>\n  <div class=\'wrapper\' ng-controller=\"NgRepeatWithModel\">\n    <div class=\'tableRow\'>\n      <div class=\'container\'>\n        <div ng-repeat=\"item in items\">\n          {{item.content}}\n          <button class=\'cursorDefault\' ng-click=\"addItem()\">+</button>\n          <button class=\'cursorDefault\' ng-click=\"removeItem()\">x</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\"container\">\n        <div>Items:\n          <br/>{{items | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n    <code>\n  // HTML:\n   &lt;div class=\'wrapper\' ng-controller=&quot;NgRepeatWithModel&quot;&gt;\n      &lt;div class=\'container\'&gt;\n        &lt;div ng-repeat=&quot;item in items&quot;&gt;\n          {{item.content}}\n          &lt;button class=\'cursorDefault\' ng-click=&quot;addItem()&quot;&gt;+&lt;/button&gt;\n          &lt;button class=\'cursorDefault\' ng-click=&quot;removeItem()&quot;&gt;x&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n    </code>\n  </pre>\n  <pre>\n    <code>\n  // JS:\n  controller(\'NgRepeatWithModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items = [{\n      content: \'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.\'\n    }, {\n      content: \'Item 2\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    dragularService($element.children().eq(0).children(), {containersModel: $scope.items});\n    $scope.addItem = function addItem() {\n      var index = $scope.items.indexOf(this.item) + 1;\n      $scope.items.splice(index, 0, {\n        content: this.item.content + \'-copy\'\n      });\n    };\n    $scope.removeItem = function removeItem() {\n      var index = $scope.items.indexOf(this.item);\n      $scope.items.splice(index, 1);\n    };\n  }])\n    </code>\n  </pre>\n</div>\n");
$templateCache.put("exampleRemoveOnSpill/exampleRemoveOnSpill.html","        <div class=\'parent\'>\n            <h2>Remove on spill</h2>\n            <label for=\'hy\'>Need to be able to quickly delete stuff when it spills out of the chosen containers?</label>\n            <div class=\'wrapper\' ng-controller=\"RemoveOnSpill\">\n                <div id=\'single1\' class=\'container\'>\n                    <div>Move me, but you can only drop me somewhere in this container.</div>\n                    <div>If you try to drop me somewhere other than here, I\'ll die a fiery death.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([document.getElementById(single)], { removeOnSpill: true });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleRevertOnSpill/exampleRevertOnSpill.html","        <div class=\'parent\'>\n            <h2>Revert on spill</h2>\n            <label for=\'hy\'>By default, dropping an element outside of any known containers will keep the element in the last place it hovered over. You can make elements go back home if they\'re dropped outside of known containers, too.</label>\n            <div class=\'wrapper\' ng-controller=\"RevertOnSpill\">\n                <div id=\'left4\' class=\'container\'>\n                    <div>Move me, but you can only drop me in one of these containers.</div>\n                    <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                </div>\n                <div id=\'right4\' class=\'container\'>\n                    <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], { revertOnSpill: true });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleScrollingDrag/exampleScrollingDrag.html","<div class=\'parent\'>\n    <h2>Scrolling drag</h2>\n    <label for=\'hy\'> Containre can be scrolled by hovering dragged item over most top visible item or most bottom, scroll direction respectively.\n    </label>\n    <div ng-controller=\"ScrollingDrag\">\n        <div class=\"container heightLimit\">\n            <div>Item 1</div>\n            <div>Item 2</div>\n            <div>Item 3.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n            <div>Item 6.</div>\n            <div>Item 7.</div>\n            <div>Item 9.</div>\n            <div>Item 10.</div>\n            <div>Item 11.</div>\n            <div>Item 12.</div>\n            <div>Item 13.</div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("partials/partial-api-default.html","<div class=\"container\">\n  API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT API DEFAULT\n</div>");
$templateCache.put("partials/partial-api.html","<div class=\"container\">\n  <div id=\"rowOffcanvas\" class=\"row row-offcanvas row-offcanvas-left\">\n    <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\n      <div class=\"list-group\">\n        <a ng-repeat=\"example in examplesList\" href=\"#/api/{{example.link}}\" class=\"list-group-item\">{{example.title}}</a>\n      </div>\n    </div>\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-xs-12 col-sm-9\">\n      <p class=\"pull-left visible-xs\">\n        <button type=\"button\" ng-click=\"toggleSidebar()\" class=\"btn btn-primary btn-xs\">Toggle nav</button>\n      </p>\n      <div ui-view> <h1>DEFAULT</h1> </div>\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>");
$templateCache.put("partials/partial-contact.html","PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT PARTIAL CONTACT ");
$templateCache.put("partials/partial-home.html","<div class=\"container\">\n  <div class=\"row\">\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-lg-12\">\n      <div class=\"jumbotron\">\n        <h1>Hello, world!</h1>\n        <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details »</a></p>\n        </div>\n        <!--/.col-xs-6.col-lg-4-->\n        <div class=\"col-xs-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details »</a></p>\n        </div>\n        <!--/.col-xs-6.col-lg-4-->\n        <div class=\"col-xs-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details »</a></p>\n        </div>\n        <!--/.col-xs-6.col-lg-4-->\n        <div class=\"col-xs-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details »</a></p>\n        </div>\n        <!--/.col-xs-6.col-lg-4-->\n        <div class=\"col-xs-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details »</a></p>\n        </div>\n        <!--/.col-xs-6.col-lg-4-->\n        <div class=\"col-xs-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details »</a></p>\n        </div>\n        <!--/.col-xs-6.col-lg-4-->\n      </div>\n      <!--/row-->\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");}]);

},{}],25:[function(require,module,exports){
/* global angular */
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
}])

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

    // get initial containers from options, argument or fall back to empty array (containers can be added later)
    initialContainers = o.containers || (initialContainers ? makeArray(initialContainers) : []);
    if (o.containers) {
      // make array from o.containers
      initialContainers = makeArray(initialContainers);
    }
    if (o.containersModel) {
      o.containersModel = Array.isArray(o.containersModel[0]) ? o.containersModel : [o.containersModel];
    }

    // feed namespaced containers groups and optionaly shadow it by models
    if (o.nameSpace) {
      if (!Array.isArray(o.nameSpace)) {
        o.nameSpace = [o.nameSpace];
      }

      function proceedNameSpaces(_containers, containersNameSpaced, nameSpace, initialContainers) {
        if (!containersNameSpaced[nameSpace]) {
          containersNameSpaced[nameSpace] = [];
        }
        Array.prototype.push.apply(containersNameSpaced[nameSpace], initialContainers);
        _containers[nameSpace] = containersNameSpaced[nameSpace];
      }
      o.nameSpace.forEach(function eachNameSpace(nameSpace) {
        proceedNameSpaces(_containers, containersNameSpaced, nameSpace, initialContainers);
        if (o.containersModel) {
          proceedNameSpaces(_containersModel, containersNameSpacedModel, nameSpace, o.containersModel)
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

    var api = {
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

    return api;

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
      return api.containers.indexOf(el) !== -1 || o.isContainer(el);
    }

    function isContainerNameSpaced(el) {
      var nameSpace;
      for (nameSpace in api.containers) {
        if (api.containers.hasOwnProperty(nameSpace) && api.containers[nameSpace].indexOf(el) !== -1) {
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
      api.removeContainer(_containers);
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
      renderMirrorImage();
      // initial position
      _mirror.style.left = _clientX - _offsetX + 'px';
      _mirror.style.top = _clientY - _offsetY + 'px';

      drag(e);
    }


    function start(item) {
      var handle = item;

      if (api.dragging && _mirror) {
        return false; // already dragging
      }

      if (_isContainer(item)) {
        return false; // don't drag container itself
      }

      while (!_isContainer(item.parentElement)) {
        // break loop if user tries to drag item which is considered invalid handle
        if (o.invalid(item, handle)) {
          return false;
        }
        item = item.parentElement; // drag target should be immediate child of container
        if (!item) {
          return;
        }
      }

      // last item chceck
      if (o.invalid(item, handle)) {
        return false;
      }

      var container = item.parentElement;
      if (!o.moves(item, container, handle, _itemModel, _sourceModel)) { // is movable
        return false;
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
        addClass(_copy, o.classes.transit);
        if (o.scope) {
          o.scope.$emit('cloned', _copy, item, _copyModel, _itemModel);
        }
      } else {
        addClass(item, o.classes.transit);
      }

      _source = container;
      _item = item;
      _initialSibling = _currentSibling = nextEl(item);

      api.dragging = true;
      if (o.scope) {
        o.scope.$emit('drag', _item, _source);
      }

      return true;
    }

    function invalidTarget(el) {
      return el.tagName === 'A' || el.tagName === 'BUTTON';
    }

    function end() {
      if (!api.dragging) {
        return;
      }
      console.log('!!!!! I havent seen this message in any case');
      var item = _copy || _item;
      drop(item, item.parentElement);
    }

    function release(e) {
      if (!api.dragging) {
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
      if (!api.dragging) {
        return;
      }
      var item = _copy || _item,
        parent = item.parentElement;

      if (!o.containersModel) {
        if (parent) {
          parent.removeChild(item);
        }
      } else {
        var itemModel = _copyModel || _itemModel;
        _targetModel.splice(_targetModel.indexOf(itemModel), 1);
      }

      if (o.scope) {
        o.scope.$emit(o.copy ? 'cancel' : 'remove', item, parent, itemModel, _sourceModel, _targetModel);
      }
      cleanup();
    }

    function cancel(revert) {
      if (!api.dragging) {
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

      _source = _item = _copy = _initialSibling = _currentSibling = _sourceModel = null;
      _itemModel = _copyModel = _initialIndex = _currentIndex = _renderTimer = null;

      api.dragging = false;
      if (o.scope) {
        o.scope.$emit('dragend', item);
      }
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
              _targetModel = _containersModel[api.containers.indexOf(target)];
            } else {
              for (var nameSpace in api.containers) {
                if (api.containers.hasOwnProperty(nameSpace) && api.containers[nameSpace].indexOf(target) !== -1) {
                  _lastTargetModel = _targetModel;
                  _targetModel = _containersModel[nameSpace][api.containers[nameSpace].indexOf(target)];
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
        dropTarget = findDropTarget(elementBehindCursor, _clientX, _clientY);

      // do not copy in same container
      if (dropTarget === _source && o.copy) {
        if (item.parentElement) {
          item.parentElement.removeChild(item);
        }
        if (_lastTargetModel.indexOf(_copyModel) !== -1) {
          _lastTargetModel.splice(_lastTargetModel.indexOf(_copyModel), 1);
        }
        $rootScope.$applyAsync();
        return;
      }

      var reference,
        immediate = getImmediateChild(dropTarget, elementBehindCursor);

      // prepare models operations
      if (o.containersModel) {
        var referenceIndex;
      }

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
      if (reference === null || reference !== item && reference !== nextEl(item)) {
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
        _targetContainer.scrollTop += e.deltaY
      };
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
      body.appendChild(_mirror);
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
      $el[op](touch[type], fn)
    };
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

  function addClass(el, className) {
    if (el.className.indexOf(' ' + className) === -1) {
      el.className += ' ' + className;
    }
  }

  function rmClass(el, className) {
    angular.element(el).removeClass(className);
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

}]);

},{"./dragularModule":26}]},{},[22])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0LmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZXNBcHAuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlc1JvdXRlci5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL3RlbXBsYXRlcy5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhckRpcmVjdGl2ZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhck1vZHVsZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsU0FBUyxDQUFDLFlBQVksbUJBQW1CLFNBQVMsU0FBUyxVQUFVLGlCQUFpQjtJQUNoRyxnQkFBZ0IsU0FBUztNQUN2Qjs7O0FDWk47QUFDQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLFNBQVMsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDaEcsZ0JBQWdCLFNBQVM7OztBQUc3QjtHQUNHLFdBQVcsY0FBYyxDQUFDLFVBQVUsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFFBQVEsVUFBVSxpQkFBaUI7SUFDdkgsT0FBTyxTQUFTLENBQUM7TUFDZixTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLE9BQU8sU0FBUyxDQUFDO01BQ2YsU0FBUztPQUNSO01BQ0QsU0FBUztPQUNSO01BQ0QsU0FBUztPQUNSO01BQ0QsU0FBUzs7SUFFWCxJQUFJLGFBQWEsU0FBUyxXQUFXLEdBQUcsR0FBRztJQUMzQyxnQkFB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Ozs7RUFHVCxTQUFTLFNBQVMsT0FBTyxHQUFHO0lBQzFCLElBQUksT0FBTyxhQUFhO0lBQ3hCLElBQUksVUFBVTtNQUNaLE9BQU87TUFDUCxPQUFPOztJQUVULElBQUksU0FBUyxXQUFXLEVBQUUsU0FBUyxTQUFTLFFBQVEsVUFBVSxNQUFNO01BQ2xFLFFBQVEsUUFBUTs7SUFFbEIsT0FBTyxLQUFLOzs7RUFHZCxTQUFTLGFBQWEsTUFBTTtJQUMxQixPQUFPLEtBQUssVUFBVSxLQUFLLFFBQVEsS0FBSzs7O0VBRzFDLFNBQVMsY0FBYyxNQUFNO0lBQzNCLE9BQU8sS0FBSyxXQUFXLEtBQUssU0FBUyxLQUFLOzs7RUFHNUMsU0FBUyxXQUFXLE9BQU8sUUFBUTtJQUNqQyxPQUFPLE1BQU0sVUFBVSxRQUFRLEtBQUssUUFBUSxRQUFRLFFBQVEsWUFBWTs7OztBQUk1RSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQmFzaWMnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XG4gIH1dKTsiLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQmFzaWMnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XG4gIH1dKTtcblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0Jhc2ljTW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XG4gICAgICBjb250ZW50OiAnSXRlbSA1J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDYnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA4J1xuICAgIH1dO1xuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpO1xuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQm91bmRpbmdCb3gnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSAkZWxlbWVudFswXTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgYm91bmRpbmdCb3g6IGJvdW5kaW5nQm94XG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCb3VuZGluZ0JveExvY2tYJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5jaGlsZHJlbigpWzBdO1xuICAgIGRyYWd1bGFyU2VydmljZShib3VuZGluZ0JveCwge1xuICAgICAgYm91bmRpbmdCb3g6IGJvdW5kaW5nQm94LFxuICAgICAgbG9ja1g6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0JvdW5kaW5nQm94TG9ja1knLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKClbMF07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKGJvdW5kaW5nQm94LCB7XG4gICAgICBib3VuZGluZ0JveDogYm91bmRpbmdCb3gsXG4gICAgICBsb2NrWTogdHJ1ZVxuICAgIH0pO1xuICB9XSkiLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQ29weScsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBjb3B5OiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdDb3B5TW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XG4gICAgICBjb250ZW50OiAnSXRlbSA1J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDYnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA4J1xuICAgIH1dO1xuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpO1xuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXSxcbiAgICAgIGNvcHk6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0N1c3RvbUNsYXNzZXMnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBtaXJyb3I6ICdjdXN0b20tZ3JlZW4tbWlycm9yJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdEaXJlY3RpdmUnLCBbJyRzY29wZScsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUpIHtcbiAgICAkc2NvcGUuZHJhZ3VsYXJPcHRpb25zID0ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBtaXJyb3I6ICdjdXN0b20tZ3JlZW4tbWlycm9yJ1xuICAgICAgfSxcbiAgICAgIG5hbWVTcGFjZTogJ3NhbWUnIC8vIGp1c3QgY29ubmVjdGluZyBsZWZ0IGFuZCByaWdodCBjb250YWluZXJcbiAgICB9O1xuICB9XSk7IiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignRGlyZWN0aXZlTW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XG4gICAgICBjb250ZW50OiAnSXRlbSA1J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDYnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA4J1xuICAgIH1dO1xuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XG4gICAgICBjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtczEsXG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1pcnJvcjogJ2N1c3RvbS1ncmVlbi1taXJyb3InXG4gICAgICB9LFxuICAgICAgbmFtZVNwYWNlOiAnY29tbW9uJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXG4gICAgfTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAuY29udHJvbGxlcignRHJhZ092ZXJDbGFzc2VzJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLCAkZWxlbWVudC5jaGlsZHJlbigpWzJdXSwge1xuICAgICAgbmFtZVNwYWNlOiAnYXBwbGVzJyxcbiAgICAgIGRyYWdPdmVyQ2xhc3NlczogdHJ1ZVxuICAgIH0pO1xuICAgIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVsxXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVszXV0sIHtcbiAgICAgIG5hbWVTcGFjZTogJ29yYW5nZXMnLFxuICAgICAgZHJhZ092ZXJDbGFzc2VzOiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdFdmVudHMnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UsICR0aW1lb3V0KSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICB9KTtcbiAgICAkc2NvcGUuJG9uKCdkcmFnJywgZnVuY3Rpb24oZSwgZWwpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZSgnIGV4LW1vdmVkJywgJycpO1xuICAgIH0pO1xuICAgICRzY29wZS4kb24oJ2Ryb3AnLCBmdW5jdGlvbihlLCBlbCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyBleC1tb3ZlZCc7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIC8vICRzY29wZS4kb24oJ2Nsb25lZCcsIG15Rm4oJ2Nsb25lZCcpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdkcmFnJywgbXlGbignZHJhZycpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdjYW5jZWwnLCBteUZuKCdjYW5jZWwnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignZHJvcCcsIG15Rm4oJ2Ryb3AnKSk7XG4gICAgLy8gJHNjb3BlLiRvbigncmVtb3ZlJywgbXlGbigncmVtb3ZlJykpO1xuICAgIC8vICRzY29wZS4kb24oJ2RyYWdlbmQnLCBteUZuKCdkcmFnZW5kJykpO1xuICAgIC8vICRzY29wZS4kb24oJ3NoYWRvdycsIG15Rm4oJ3NoYWRvdycpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdzaGFkb3dSZW1vdmVkJywgbXlGbignc2hhZG93JykpO1xuXG4gICAgLy8gZnVuY3Rpb24gbXlGbihldmVudE5hbWUpIHtcbiAgICAvLyAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXZlbnROYW1lLCBhcmd1bWVudHMpO1xuICAgIC8vICAgfTtcbiAgICAvLyB9XG5cbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0hhbmRsZScsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NOYW1lID09PSAnaGFuZGxlJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ05hbWVTcGFjZXMnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0sICRlbGVtZW50LmNoaWxkcmVuKClbMl1dLCB7XG4gICAgICBuYW1lU3BhY2U6ICdhcHBsZXMnXG4gICAgfSk7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKClbMV0sIHtcbiAgICAgIG5hbWVTcGFjZTogJ29yYW5nZXMnXG4gICAgfSk7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKClbM10sIHsgLy8gbWl4ZWRcbiAgICAgIG5hbWVTcGFjZTogWydvcmFuZ2VzJywgJ2FwcGxlcyddXG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZXN0ZWROZ1JlcGVhdCcsIFsnJHRpbWVvdXQnLCAnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCR0aW1lb3V0LCAkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5nUmVwZWF0IHRvIGJlIHJlYWR5XG4gICAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQsIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiAhaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucygncm93LWhhbmRsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGExJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGE0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjQnXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjNCdcbiAgICAgIH1dXG4gICAgfV07XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbCcsIFsnJHRpbWVvdXQnLCAnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCR0aW1lb3V0LCAkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5lc3RlZCBuZ1JlcGVhdCB0byBiZSByZWFkeVxuICAgICAgdmFyIGNvbnRhaW5lciA9ICRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSxcbiAgICAgICAgcGFyZW50Q29udGFpbmVycyA9IGNvbnRhaW5lci5jaGlsZHJlbigpLFxuICAgICAgICBuZXN0ZWRDb250YWluZXJzID0gW107XG5cbiAgICAgIGRyYWd1bGFyU2VydmljZShjb250YWluZXIsIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zXG4gICAgICB9KTtcblxuICAgICAgLy8gY29sbGVjdCBuZXN0ZWQgY29udGlhbmVyc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRDb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMucHVzaChwYXJlbnRDb250YWluZXJzLmVxKGkpLmNoaWxkcmVuKClbMV0pO1xuICAgICAgfTtcblxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKG5lc3RlZENvbnRhaW5lcnMsIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiAhaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucygncm93LWhhbmRsZScpO1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluZXJzTW9kZWw6IChmdW5jdGlvbiBnZXROZXN0ZWRDb250YWluZXJzTW9kZWwoKXtcbiAgICAgICAgICB2YXIgcGFyZW50ID0gJHNjb3BlLml0ZW1zLFxuICAgICAgICAgICAgY29udGFpbmVyc01vZGVsID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbC5wdXNoKHBhcmVudFtpXS5pdGVtcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyc01vZGVsO1xuICAgICAgICB9KSgpXG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGExJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGE0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjQnXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjNCdcbiAgICAgIH1dXG4gICAgfV07XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZ1JlcGVhdCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgY29udGVudDogJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDInXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSgpIHtcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCwge1xuICAgICAgICBjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArICctY29weSdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ05nUmVwZWF0V2l0aE1vZGVsJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLml0ZW1zID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdUcnkgdG8gYWRkIG9yIHJlbW92ZSBzb21lIGVsZW1lbnRzIChjbGljayBvbiArLSBidXR0b25zKSwgeW91IHdpbGwgc2VlIHRoYXQgaXQgaXMgbm90IHByb2JsZW0gZm9yIGRyYWd1bGFyLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAyJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDMnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNCdcbiAgICB9XTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpLCB7Y29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXN9KTtcbiAgICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uIGFkZEl0ZW0oKSB7XG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pICsgMTtcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDAsIHtcbiAgICAgICAgY29udGVudDogdGhpcy5pdGVtLmNvbnRlbnQgKyAnLWNvcHknXG4gICAgICB9KTtcbiAgICB9O1xuICAgICRzY29wZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbSgpIHtcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSk7XG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignUmVtb3ZlT25TcGlsbCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICByZW1vdmVPblNwaWxsOiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdSZXZlcnRPblNwaWxsJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIHJldmVydE9uU3BpbGw6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ1Njcm9sbGluZ0RyYWcnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIHZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xuXG5cbnJlcXVpcmUoJy4uLy4uLy4uL3NyYy9kcmFndWxhck1vZHVsZScpO1xucmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblxuLyoqXG4gKiAgTW9kdWxlIEV4YW1wbGUgQXBwXG4gKlxuICogIERFTU8gYXBwIGZvciBkcmFndWxhciBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhclxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2V4YW1wbGVzQXBwJywgWydkcmFndWxhck1vZHVsZScsICd0ZW1wbGF0ZXMnLCAndWkucm91dGVyJ10pLmNvbnRyb2xsZXIoJ0V4QXBwQ3RybCcsIFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpIHtcbiAgICAkc2NvcGUuZXhhbXBsZXNMaXN0ID0gW3tcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJhc2ljJyxcbiAgICAgICAgdGl0bGU6ICdCYXNpYydcbiAgICB9LHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQmFzaWNXaXRoTW9kZWwvZXhhbXBsZUJhc2ljV2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJhc2ljV2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICdCYXNpYyAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVEaXJlY3RpdmUvZXhhbXBsZURpcmVjdGl2ZS5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVEaXJlY3RpdmUnLFxuICAgICAgICB0aXRsZTogJ0RpcmVjdGl2ZSdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnRGlyZWN0aXZlIC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUV2ZW50cycsXG4gICAgICAgIHRpdGxlOiAnRXZlbnRzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlUmVtb3ZlT25TcGlsbC9leGFtcGxlUmVtb3ZlT25TcGlsbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVSZW1vdmVPblNwaWxsJyxcbiAgICAgICAgdGl0bGU6ICdSZW1vdmUgb24gc3BpbGwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVSZXZlcnRPblNwaWxsL2V4YW1wbGVSZXZlcnRPblNwaWxsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZVJldmVydE9uU3BpbGwnLFxuICAgICAgICB0aXRsZTogJ1JldmVydCBvbiBzcGlsbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQ29weScsXG4gICAgICAgIHRpdGxlOiAnQ29weSdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUNvcHlXaXRoTW9kZWwvZXhhbXBsZUNvcHlXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQ29weVdpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnQ29weSAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVIYW5kbGUvZXhhbXBsZUhhbmRsZS5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVIYW5kbGUnLFxuICAgICAgICB0aXRsZTogJ0hhbmRsZSdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUN1c3RvbUNsYXNzZXMvZXhhbXBsZUN1c3RvbUNsYXNzZXMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQ3VzdG9tQ2xhc3NlcycsXG4gICAgICAgIHRpdGxlOiAnQ3VzdG9tIGNsYXNzZXMnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOYW1lU3BhY2VzL2V4YW1wbGVOYW1lU3BhY2VzLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5hbWVTcGFjZXMnLFxuICAgICAgICB0aXRsZTogJ05hbWVTcGFjZXMnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMnLFxuICAgICAgICB0aXRsZTogJ0RyYWdPdmVyIGNsYXNzZXMnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQm91bmRpbmdCb3gnLFxuICAgICAgICB0aXRsZTogJ0JvdW5kaW5nQm94J1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCb3VuZGluZ0JveExvY2tYJyxcbiAgICAgICAgdGl0bGU6ICdCb3VuZGluZ0JveCArIExvY2tYJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWS9leGFtcGxlQm91bmRpbmdCb3hMb2NrWS5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCb3VuZGluZ0JveExvY2tZJyxcbiAgICAgICAgdGl0bGU6ICdCb3VuZGluZ0JveCArIExvY2tZJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmdSZXBlYXQvZXhhbXBsZU5nUmVwZWF0Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5nUmVwZWF0JyxcbiAgICAgICAgdGl0bGU6ICduZ1JlcGVhdCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnbmdSZXBlYXQgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0JyxcbiAgICAgICAgdGl0bGU6ICdOZXN0ZWQgbmdSZXBlYWQnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ05lc3RlZCBuZ1JlcGVhZCAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZVNjcm9sbGluZ0RyYWcnLFxuICAgICAgICB0aXRsZTogJ1Njcm9sbGluZyBkcmFnJ1xuICAgIH1dO1xuXG4gICAgLy8gZGVmYXVsdCB0ZW1wbGF0ZSBsb2FkZWQgZmlyc3QgdGltZVxuICAgICRzY29wZS5leGFtcGxlVGVtcGxhdGUgPSAnZXhhbXBsZUJhc2ljL2V4YW1wbGVCYXNpYy5odG1sJztcblxuICAgICRzY29wZS5oaWdobGlnaHRDb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY29kZScpLmxlbmd0aCl7XG4gICAgICAgICAgICB2YXIgY29kZUJsb2NrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjb2RlJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gY29kZUJsb2Nrcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soY29kZUJsb2Nrc1tpXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJvd09mZmNhbnZhcyA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm93T2ZmY2FudmFzJykpO1xuICAgICRzY29wZS50b2dnbGVTaWRlYmFyID0gZnVuY3Rpb24gdG9nZ2xlU2lkZWJhciAoKSB7XG4gICAgICAgIHJvd09mZmNhbnZhcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuXG59XSk7XG5cbih7XCJleGFtcGxlQmFzaWNcIjooe1wiZXhhbXBsZUJhc2ljXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJhc2ljL2V4YW1wbGVCYXNpYy5qc1wiKX0pLFwiZXhhbXBsZUJhc2ljV2l0aE1vZGVsXCI6KHtcImV4YW1wbGVCYXNpY1dpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC9leGFtcGxlQmFzaWNXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVCb3VuZGluZ0JveFwiOih7XCJleGFtcGxlQm91bmRpbmdCb3hcIjpyZXF1aXJlKFwiLi9leGFtcGxlQm91bmRpbmdCb3gvZXhhbXBsZUJvdW5kaW5nQm94LmpzXCIpfSksXCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWFwiOih7XCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVCb3VuZGluZ0JveExvY2tYL2V4YW1wbGVCb3VuZGluZ0JveExvY2tYLmpzXCIpfSksXCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWVwiOih7XCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWVwiOnJlcXVpcmUoXCIuL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmpzXCIpfSksXCJleGFtcGxlQ29weVwiOih7XCJleGFtcGxlQ29weVwiOnJlcXVpcmUoXCIuL2V4YW1wbGVDb3B5L2V4YW1wbGVDb3B5LmpzXCIpfSksXCJleGFtcGxlQ29weVdpdGhNb2RlbFwiOih7XCJleGFtcGxlQ29weVdpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVDb3B5V2l0aE1vZGVsL2V4YW1wbGVDb3B5V2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlQ3VzdG9tQ2xhc3Nlc1wiOih7XCJleGFtcGxlQ3VzdG9tQ2xhc3Nlc1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmpzXCIpfSksXCJleGFtcGxlRGlyZWN0aXZlXCI6KHtcImV4YW1wbGVEaXJlY3RpdmVcIjpyZXF1aXJlKFwiLi9leGFtcGxlRGlyZWN0aXZlL2V4YW1wbGVEaXJlY3RpdmUuanNcIil9KSxcImV4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWxcIjooe1wiZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZURyYWdPdmVyQ2xhc3Nlc1wiOih7XCJleGFtcGxlRHJhZ092ZXJDbGFzc2VzXCI6cmVxdWlyZShcIi4vZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmpzXCIpfSksXCJleGFtcGxlRXZlbnRzXCI6KHtcImV4YW1wbGVFdmVudHNcIjpyZXF1aXJlKFwiLi9leGFtcGxlRXZlbnRzL2V4YW1wbGVFdmVudHMuanNcIil9KSxcImV4YW1wbGVIYW5kbGVcIjooe1wiZXhhbXBsZUhhbmRsZVwiOnJlcXVpcmUoXCIuL2V4YW1wbGVIYW5kbGUvZXhhbXBsZUhhbmRsZS5qc1wiKX0pLFwiZXhhbXBsZU5hbWVTcGFjZXNcIjooe1wiZXhhbXBsZU5hbWVTcGFjZXNcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmFtZVNwYWNlcy9leGFtcGxlTmFtZVNwYWNlcy5qc1wiKX0pLFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0XCI6KHtcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC9leGFtcGxlTmVzdGVkTmdSZXBlYXQuanNcIil9KSxcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFwiOih7XCJleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlTmdSZXBlYXRcIjooe1wiZXhhbXBsZU5nUmVwZWF0XCI6cmVxdWlyZShcIi4vZXhhbXBsZU5nUmVwZWF0L2V4YW1wbGVOZ1JlcGVhdC5qc1wiKX0pLFwiZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsXCI6KHtcImV4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVSZW1vdmVPblNwaWxsXCI6KHtcImV4YW1wbGVSZW1vdmVPblNwaWxsXCI6cmVxdWlyZShcIi4vZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuanNcIil9KSxcImV4YW1wbGVSZXZlcnRPblNwaWxsXCI6KHtcImV4YW1wbGVSZXZlcnRPblNwaWxsXCI6cmVxdWlyZShcIi4vZXhhbXBsZVJldmVydE9uU3BpbGwvZXhhbXBsZVJldmVydE9uU3BpbGwuanNcIil9KSxcImV4YW1wbGVTY3JvbGxpbmdEcmFnXCI6KHtcImV4YW1wbGVTY3JvbGxpbmdEcmFnXCI6cmVxdWlyZShcIi4vZXhhbXBsZVNjcm9sbGluZ0RyYWcvZXhhbXBsZVNjcm9sbGluZ0RyYWcuanNcIil9KSxcImV4YW1wbGVzUm91dGVyXCI6cmVxdWlyZShcIi4vZXhhbXBsZXNSb3V0ZXIuanNcIiksXCJ0ZW1wbGF0ZXNcIjpyZXF1aXJlKFwiLi90ZW1wbGF0ZXMuanNcIil9KTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaG9tZScpO1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgdXJsOiAnL2hvbWUnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3BhcnRpYWwtaG9tZS5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnYXBpJywge1xuICAgICAgICB1cmw6ICcvYXBpJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWFwaS5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnYXBpLmRldGFpbCcsIHtcbiAgICAgICAgdXJsOiAnLzpsaW5rJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgIHJldHVybiAkc3RhdGVQYXJhbXMubGluayArICcvJyArICRzdGF0ZVBhcmFtcy5saW5rICsgJy5odG1sJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29udGFjdCcsIHtcbiAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3BhcnRpYWwtY29udGFjdC5odG1sJ1xuICAgICAgfSk7XG4gIH0pO1xuIiwiJ3VzZSBzdHJpY3QnOyBtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQmFzaWNXaXRoTW9kZWwvZXhhbXBsZUJhc2ljV2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkJhc2ljIC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk1vdmUgc3R1ZmYgYmV0d2VlbiB0aGVzZSB0d28gY29udGFpbmVycy4gTm90ZSBob3cgdGhlIHN0dWZmIGdldHMgaW5zZXJ0ZWQgbmVhciB0aGUgbW91c2UgcG9pbnRlcj8gR3JlYXQgc3R1ZmYuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCYXNpY01vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMyXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbXMxOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMxIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbXMyOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMyIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnQmFzaWNNb2RlbFxcJywgW1xcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgICRzY29wZS5pdGVtczEgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ01vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFxcXFxcJ2xsIGp1c3QgY29tZSBiYWNrLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gICAgfV07XFxuICAgICRzY29wZS5pdGVtczIgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA2XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDdcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gOFxcJ1xcbiAgICB9XTtcXG4gICAgdmFyIGNvbnRhaW5lcnMgPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XFxuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XFxuICAgICAgY29udGFpbmVyc01vZGVsOiBbJHNjb3BlLml0ZW1zMSwgJHNjb3BlLml0ZW1zMl1cXG4gICAgfSk7XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtCYXNpYyZxdW90O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJcXCcmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczEmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMiZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7dGFibGVSb3cmcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMTpcXG4gICAgICAgICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMSB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMjpcXG4gICAgICAgICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMiB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+Qm91bmRpbmdCb3g8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+WW91IGNhbiBwcm92aWRlIGVsZW1lbnQgaW4gb3B0aW9ucy5ib3VuZGluZ0JveCB0byBsaW1pdCBjcm9zc2luZyBlbGVtZW50IGJvcmRlcnMuPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQm91bmRpbmdCb3hcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBpdGVtcyBjYW5ub3QgY3Jvc3MgaXRzIGV4YW1wbGUgZWxlbWVudCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBpdGVtcyBjYW5ub3QgY3Jvc3MgaXRzIGV4YW1wbGUgZWxlbWVudCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKCksIHtcXG4gICAgYm91bmRpbmdCb3g6ICRlbGVtZW50XFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+QmFzaWM8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlIHN0dWZmIGJldHdlZW4gdGhlc2UgdHdvIGNvbnRhaW5lcnMuIE5vdGUgaG93IHRoZSBzdHVmZiBnZXRzIGluc2VydGVkIG5lYXIgdGhlIG1vdXNlIHBvaW50ZXI/IEdyZWF0IHN0dWZmLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQmFzaWNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0Jhc2ljXFwnLCBbXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0Jhc2ljJnF1b3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gMy4mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbSA2LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O1lvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDQuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1guaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPkJvdW5kaW5nQm94IGFuZCBsb2NrWDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlbWVudCBjYW4gYmUgbG9ja2VkIHRvIFggb3IgWSBheGlzIGFuZCBhbHNvIHlvdSBjYW4gcHJvdmlkZSBlbGVtZW50IGluIG9wdGlvbnMuYm91bmRpbmdCb3ggdG8gbGltaXQgY3Jvc3NpbmcgZWxlbWVudCBib3JkZXJzLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJvdW5kaW5nQm94TG9ja1hcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lckhvcml6b250YWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2JvdW5kaW5nQm94XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoMjVcXFwiPkl0ZW1zIGFyZSBsb2NrZWQgaW4gWCBheGlzIG1vdmVtZW50IGFuZCBjYW5ub3QgY3Jvc3MgaXRzIGNsb3Nlc3QgcGFyZW50IGRpdi5ib3VuZGluZ0JveCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+aXRlbSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+aXRlbSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+aXRlbSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLmNoaWxkcmVuKCksIHtcXG4gICAgYm91bmRpbmdCb3g6ICRlbGVtZW50LmNoaWxkcmVuKClbMF0sXFxuICAgIGxvY2tYOiB0cnVlXFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPkJvdW5kaW5nQm94IGFuZCBMb2NrWTwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlbWVudCBjYW4gYmUgbG9ja2VkIHRvIFggb3IgWSBheGlzIGFuZCBhbHNvIHlvdSBjYW4gcHJvdmlkZSBlbGVtZW50IGluIG9wdGlvbnMuYm91bmRpbmdCb3ggdG8gbGltaXQgY3Jvc3NpbmcgZWxlbWVudCBib3JkZXJzLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJvdW5kaW5nQm94TG9ja1lcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnYm91bmRpbmdCb3hcXCc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtcyBhcmUgbG9ja2VkIGluIFkgYXhpcyBtb3ZlbWVudCBhbmQgY2Fubm90IGNyb3NzIGl0cyBjbG9zZXN0IHBhcmVudCBkaXYuYm91bmRpbmdCb3gsIGp1c3QgdHJ5IGl0IHlvdXIgc2VsdmVzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gNDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSA1PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDY8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0uY2hpbGRyZW4oKSwge1xcbiAgICBib3VuZGluZ0JveDogJGVsZW1lbnQuY2hpbGRyZW4oKVswXSxcXG4gICAgbG9ja1k6IHRydWVcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+Q29weTwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkNvcHlpbmcgc3R1ZmYgaXMgZ3JlYXQgdG9vLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQ29weVxcXCIgbmctaGlkZT1cXFwiZ2xvYmFscy5zaG93TW9kZWxFeGFtcGxlc1xcXCI+XFxuICAgIDxkaXYgaWQ9XFwnbGVmdDJcXCcgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgICAgIDxkaXY+TW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLjwvZGl2PlxcbiAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgaWQ9XFwncmlnaHQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0NvcHlcXCcsIFtcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XFxuICAgICAgY29weTogdHJ1ZVxcbiAgICB9KTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0NvcHkmcXVvdDsgbmctaGlkZT0mcXVvdDtnbG9iYWxzLnNob3dNb2RlbEV4YW1wbGVzJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGlkPVxcJ2xlZnQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGlkPVxcJ3JpZ2h0MlxcJyBjbGFzcz1cXCdjb250YWluZXJcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtZb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5Db3B5IC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkNvcHlpbmcgc3R1ZmYgaXMgZ3JlYXQgdG9vLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQ29weU1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMyXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbXMxOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMxIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbXMyOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMyIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnQ29weU1vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XFxuICAgICAgY29udGVudDogXFwnTW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXFxcXFwnbGwganVzdCBjb21lIGJhY2suXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA1XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDZcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gN1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA4XFwnXFxuICAgIH1dO1xcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcXG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXSxcXG4gICAgICBjb3B5OiB0cnVlXFxuICAgIH0pO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7Q29weU1vZGVsJnF1b3Q7IG5nLXNob3c9JnF1b3Q7Z2xvYmFscy5zaG93TW9kZWxFeGFtcGxlcyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMxJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMyJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7dGFibGVSb3cmcXVvdDsmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXImcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMTpcXG4gICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMSB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyJnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtczI6XFxuICAgICAgICAgICZsdDtici8mZ3Q7e3tpdGVtczIgfCBqc29ufX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQ3VzdG9tQ2xhc3Nlcy9leGFtcGxlQ3VzdG9tQ2xhc3Nlcy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPkN1c3RvbSBjbGFzc2VzPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Zb3UgY2FuIG92ZXJ3cml0ZSBidWlsZGluIGNsYXNzZXMgYnkgcHJvdmlkaW5nIGNsYXNzZXMgbmFtZXMgaW4gb2JqZWN0IHZpYSBvcHRpb25zLmNsYXNzZXMuPC9sYWJlbD5cXG4gICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkN1c3RvbUNsYXNzZXNcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXCdsZWZ0NFxcJyBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICAgICAgICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGlkPVxcJ3JpZ2h0M1xcJyBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICAgICAgICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWZ0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlnaHQpXSwgeyBjbGFzc2VzOiB7XFxuICAgIG1pcnJvcjogXFwnY3VzdG9tLWdyZWVuLW1pcnJvclxcJ1xcbiAgfSB9KTtcXG5cXG4gIC8vIERlZmF1bHQgY2xhc3NlcyBhcmU6XFxuICBvcHRpb24uY2xhc3NlcyA9IHtcXG4gICAgbWlycm9yOiBcXCdndS1taXJyb3JcXCcsXFxuICAgIGhpZGU6IFxcJ2d1LWhpZGVcXCcsXFxuICAgIHVuc2VsZWN0YWJsZTogXFwnZ3UtdW5zZWxlY3RhYmxlXFwnLFxcbiAgICB0cmFuc2l0OiBcXCdndS10cmFuc2l0XFwnLFxcbiAgICBvdmVyQWN0aXZlOiBcXCdndS1vdmVyLWFjdGl2ZVxcJyxcXG4gICAgb3ZlckFjY2VwdHM6IFxcJ2d1LW92ZXItYWNjZXB0XFwnLFxcbiAgICBvdmVyRGVjbGluZXM6IFxcJ2d1LW92ZXItZGVjbGluZVxcJ1xcbiAgfTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRGlyZWN0aXZlL2V4YW1wbGVEaXJlY3RpdmUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+RGlyZWN0aXZlPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+U2FtZSBhcyBjdXN0b20gY2xhc3NlcyBleGFtcGxlLCBidXQgc2hvd2luZyB1c2Ugb2YgZGlyZWN0aXZlLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRGlyZWN0aXZlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCcgZHJhZ3VsYXI9XFxcImRyYWd1bGFyT3B0aW9uc1xcXCI+XFxuICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCcgZHJhZ3VsYXI9XFwne1xcXCJjbGFzc2VzXFxcIjp7XFxcIm1pcnJvclxcXCI6XFxcImN1c3RvbS1ncmVlbi1taXJyb3JcXFwifSxcXFwibmFtZVNwYWNlXFxcIjpcXFwic2FtZVxcXCJ9XFwnPlxcbiAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnRGlyZWN0aXZlXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSkge1xcbiAgICAkc2NvcGUuZHJhZ3VsYXJPcHRpb25zID0ge1xcbiAgICAgIGNsYXNzZXM6IHtcXG4gICAgICAgIG1pcnJvcjogXFwnY3VzdG9tLWdyZWVuLW1pcnJvclxcJ1xcbiAgICAgIH0sXFxuICAgICAgbmFtZVNwYWNlOiBcXCdjb21tb25cXCcgLy8ganVzdCBjb25uZWN0aW5nIGxlZnQgYW5kIHJpZ2h0IGNvbnRhaW5lclxcbiAgICB9O1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7RGlyZWN0aXZlJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJyBkcmFndWxhcj0mcXVvdDtkcmFndWxhck9wdGlvbnMmcXVvdDsmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSAzLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSA2LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJcXCcgZHJhZ3VsYXI9XFwneyZxdW90O2NsYXNzZXMmcXVvdDs6eyZxdW90O21pcnJvciZxdW90OzomcXVvdDtjdXN0b20tZ3JlZW4tbWlycm9yJnF1b3Q7fSwmcXVvdDtuYW1lU3BhY2UmcXVvdDs6JnF1b3Q7c2FtZSZxdW90O31cXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtZb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNC4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsL2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+RGlyZWN0aXZlIC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPlNhbWUgYXMgY3VzdG9tIGNsYXNzZXMgZXhhbXBsZSwgYnV0IHNob3dpbmcgdXNlIG9mIGRpcmVjdGl2ZS48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkRpcmVjdGl2ZU1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJyBkcmFndWxhcj1cXFwiZHJhZ3VsYXJPcHRpb25zXFxcIj5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnIGRyYWd1bGFyPVxcJ3tcXFwiY29udGFpbmVyc01vZGVsXFxcIjpcXFwiaXRlbXMyXFxcIixcXFwiY2xhc3Nlc1xcXCI6e1xcXCJtaXJyb3JcXFwiOlxcXCJjdXN0b20tZ3JlZW4tbWlycm9yXFxcIn0sXFxcIm5hbWVTcGFjZVxcXCI6XFxcImNvbW1vblxcXCJ9XFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMyXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbXMxOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMxIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbXMyOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMyIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICBcXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0RpcmVjdGl2ZU1vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XFxuICAgICAgY29udGVudDogXFwnTW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXFxcXFwnbGwganVzdCBjb21lIGJhY2suXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA1XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDZcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gN1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA4XFwnXFxuICAgIH1dO1xcbiAgICAkc2NvcGUuZHJhZ3VsYXJPcHRpb25zID0ge1xcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zMSxcXG4gICAgICBjbGFzc2VzOiB7XFxuICAgICAgICBtaXJyb3I6IFxcJ2N1c3RvbS1ncmVlbi1taXJyb3JcXCdcXG4gICAgICB9LFxcbiAgICAgIG5hbWVTcGFjZTogXFwnY29tbW9uXFwnIC8vIGp1c3QgY29ubmVjdGluZyBsZWZ0IGFuZCByaWdodCBjb250YWluZXJcXG4gICAgfTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtEaXJlY3RpdmVNb2RlbCZxdW90OyZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnIGRyYWd1bGFyPSZxdW90O2RyYWd1bGFyT3B0aW9ucyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczEmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJyBkcmFndWxhcj1cXCd7JnF1b3Q7Y29udGFpbmVyc01vZGVsJnF1b3Q7OiZxdW90O2l0ZW1zMiZxdW90OywmcXVvdDtjbGFzc2VzJnF1b3Q7OnsmcXVvdDttaXJyb3ImcXVvdDs6JnF1b3Q7Y3VzdG9tLWdyZWVuLW1pcnJvciZxdW90O30sJnF1b3Q7bmFtZVNwYWNlJnF1b3Q7OiZxdW90O2NvbW1vbiZxdW90O31cXCcmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMyJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVEcmFnT3ZlckNsYXNzZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5EcmFnT3ZlckNsYXNzZXM8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Zb3UgY2FuIGludGVyYWN0IHdpdGggZHJhZ2dpbmcgZWxlbWVudCBieSBzZXR0aW5nIGRyYWdPdmVyQ2xhc3Nlczp0cnVlIGluIG9wdGlvbnMgYW5kIGFkZGluZyBwb2ludGVyIGNsYXNzIChkZWZhdWx0IGlzOiBcXCdndS1vdmVyLWFjdGl2ZVxcJykgdG8gZWxlbWVudCB5b3Ugd2FudCB0byBiZSBpbnRlcmFjdGl2ZSAoZ2V0dGluZyBjbGFzc2VzKS4gVXN1YWxseSB5b3Ugd2FudCB0byBjb250YWluZXJzIHNob3cgd2hlYXRoZXIgdGhleSBhY2NlcHRzIGVsZW1lbnQgb3Igbm90LCBidXQgeW91IGNhbiB1c2UgaXQgYW55d2hlcmUuIFRyeSB0byBkcmFnIG92ZXIgdGhlIG5vdC1jb250YWluZXIgdG9vLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRHJhZ092ZXJDbGFzc2VzXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2PmFwcGxlcyBhbmQgb3JhbmdlcyBjYW5ub3QgYmUgbWl4ZWQ8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDI8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDM8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDQ8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5vcmFuZ2UgMTwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDI8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSAzPC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgNDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2PmFwcGxlIDU8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDY8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDc8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDg8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5vcmFuZ2UgNTwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDY8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSA3PC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgODwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibm90Q29udGFpbmVyIGd1LW92ZXItYWN0aXZlXFxcIj4gVGVzdCBhY3RpdmUgY2xhc3Mgb24gTk9UIGNvbnRhaW5lci48L2Rpdj5cXG5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0RyYWdPdmVyQ2xhc3NlcyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlcyBhbmQgb3JhbmdlcyBjYW5ub3QgYmUgbWl4ZWQmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlIDImbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtvcmFuZ2UgMSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDImbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZSA1Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZSA2Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDUmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O29yYW5nZSA2Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPSZxdW90O25vdENvbnRhaW5lciZxdW90OyZndDsgVGVzdCBhY3RpdmUgY2xhc3Mgb24gTk9UIGNvbnRhaW5lci4mbHQ7L2RpdiZndDtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuXFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIENTU1xcbi5jb250YWluZXIuZ3Utb3Zlci1hY3RpdmUuZ3Utb3Zlci1hY2NlcHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jb250YWluZXIuZ3Utb3Zlci1hY3RpdmUuZ3Utb3Zlci1kZWNsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm5vdENvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG59XFxuXFxuLm5vdENvbnRhaW5lci5ndS1vdmVyLWFjdGl2ZS5ndS1vdmVyLWRlY2xpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuXFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEpTXFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0sICRlbGVtZW50LmNoaWxkcmVuKClbMl1dLCB7XFxuICAgIG5hbWVTcGFjZTogXFwnYXBwbGVzXFwnLFxcbiAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcXG4gIH0pO1xcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzFdLCAkZWxlbWVudC5jaGlsZHJlbigpWzNdXSwge1xcbiAgICBuYW1lU3BhY2U6IFxcJ29yYW5nZXNcXCcsXFxuICAgIGRyYWdPdmVyQ2xhc3NlczogdHJ1ZVxcbiAgfSk7XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVFdmVudHMvZXhhbXBsZUV2ZW50cy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPkV2ZW50czwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+QWRkIHNvbWUgZmFudGFzdGljIGV2ZW50cyE8L2xhYmVsPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRXZlbnRzXFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFwnbGVmdDNcXCcgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBpZD1cXCdyaWdodDNcXCcgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgICAgICAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVmdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZ2h0KV0sIHtcXG4gICAgc2NvcGU6ICRzY29wZVxcbiAgfSk7XFxuICAkc2NvcGUuJG9uKFxcJ2RyYWdcXCcsIGZ1bmN0aW9uKGUsIGVsKSB7XFxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XFxuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKFxcJyBleC1tb3ZlZFxcJywgXFwnXFwnKTtcXG4gIH0pO1xcbiAgJHNjb3BlLiRvbihcXCdkcm9wXFwnLCBmdW5jdGlvbihlLCBlbCkge1xcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcXG4gICAgICBlbC5jbGFzc05hbWUgKz0gXFwnIGV4LW1vdmVkXFwnO1xcbiAgICB9LCAwKTtcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVIYW5kbGUvZXhhbXBsZUhhbmRsZS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPkhhbmRsZTwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+RHJhZyBoYW5kbGVzIGZsb2F0IHlvdXIgY3J1aXNlPzwvbGFiZWw+XFxuICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJIYW5kbGVcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXCdsZWZ0NVxcJyBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzcz1cXCdoYW5kbGVcXCc+Kzwvc3Bhbj5Nb3ZlIG1lLCBidXQgeW91IGNhbiB1c2UgdGhlIHBsdXMgc2lnbiB0byBkcmFnIG1lIGFyb3VuZC48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBpZD1cXCdyaWdodDVcXCcgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7XFxuICAgIG1vdmVzOiBmdW5jdGlvbiAoZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc05hbWUgPT09IFxcJ2hhbmRsZVxcJztcXG4gICAgfVxcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+TmFtZVNwYWNlczwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5UcnkgdG8gbWl4IGFwcGxlcyBhbmQgb3Jhbmdlcy4gWW91IGNhbm5vdCBwbGFjZSBhcHBsZXMgaW50byBvcmFuZ2VzLCBidXQgbm90aWNlIHRoYXQgeW91IGNhbiBwbGFjZSBpdCBpbnRvIG1peGVkLiBNaXhlZCBjYW4gYmUgcGxhY2VkIGludG8gYXBwbGVzIGFuZCBvcmFuZ2VzLiBOb3RpY2UgdGhhdCBtaXhlZCBiZWNvbWVzIG9yYW5nZSBvciBhcHBsZSBpZiBwbGFjZWQgaW50byB0aGVpciBjb250YWluZXIuIDxiPlNvIHJlbWVtYmVyIGlmIHlvdSBhcmUgdXNpbmcgbmFtZXNwYWNpbmcsIHRoZW4gaXRlbSBpcyBuYW1lc3BhY2VkIGFjY29yZGluZyB0byBhY3R1YWwgY29udGFpbmVyIGl0IGlzIHBsYWNlZCBpbi4gSWYgeW91IG5lZWQgdG8gaXRlbSBwcmVzZXJ2ZSB0aGllciBzdGF0ZSB5b3UgbmVlZCB0byB1c2UgY2xhc3NlcyBpbiBjb21iaW5hdGlvbiB3aXRoIG9wdGlvbnMuYWNjZXB0cyBhbmQgb3B0aW9uYWxseSBvcHRpb25zLmlzQ29udGFpbmVyLjwvYj4gSXQgZGVwZW5kcyBvbiBzZXR1cC4gKFNlZSA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhci9pc3N1ZXMvOVxcXCI+aXNzdWUgIzk8L2E+Lik8L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJOYW1lU3BhY2VzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNVxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+dHJ5IHRvIG1peCBvcmFuZ2VzIGFuZCBhcHBsZXM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjVcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSAxPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA1PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDY8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgNzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA4PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCAxPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm1peGVkIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bWl4ZWQgMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCA0PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgPGNvZGU+XFxuZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLCAkZWxlbWVudC5jaGlsZHJlbigpWzJdXSwge1xcbiAgbmFtZVNwYWNlOiBcXCdhcHBsZXNcXCdcXG59KTtcXG5kcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVsxXSwge1xcbiAgbmFtZVNwYWNlOiBcXCdvcmFuZ2VzXFwnXFxufSk7XFxuZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKClbM10sIHsgLy8gbWl4ZWRcXG4gIG5hbWVTcGFjZTogW1xcJ29yYW5nZXNcXCcsIFxcJ2FwcGxlc1xcJ11cXG59KTtcXG4gICAgICA8L2NvZGU+XFxuICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0L2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPk5lc3RlZCBuZ1JlcGVhdDwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+IFlvdSBjYW4gbW92ZSB3aG9sZSByb3dzIGJ5IGdyYWJpbmcgcm93IHRpdGxlLCBhbGwgaXRlbXMgaXQgc2VsdmVzLiBUcnkgaXQgb3V0IVxcbiAgICAgICAgPGhyLz5cXG4gICAgICAgIDxiPk9sZCBJRSBkb2VzbnQgc3VwcG9ydCBGbGV4aWJsZSBCb3ggTGF5b3V0PC9iPiBzbyBpdCBjYW4gbG9vayB3ZWlyZC4gQnV0IGluIG1vZGVybiBicm93c2VycyBpdCBpcyBhd3NvbWUhIERyYWd1bGFyIHdpbGwgYmUgd29ya2luZyB3ZWxsIGFsc28gaW4gb2xkIElFIGJ1dCB5b3UgaGF2ZSB0byB1c2UgZGlmZmVyZW50IGNzcyBmb3IgbGF5b3V0LlxcbiAgICAgICAgPGhyLz5cXG4gICAgPC9sYWJlbD5cXG4gICAgPGRpdiBuZy1jb250cm9sbGVyPVxcXCJOZXN0ZWROZ1JlcGVhdFxcXCI+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCIgY2xhc3M9XFwncm93XFwnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdy1oYW5kbGVcXFwiPlJvdyB7eyRpbmRleH19PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbS5pdGVtc1xcXCIgY2xhc3M9XFxcImNlbGxcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gSFRNTFxcblxcbiAgJmx0O2RpdiBuZy1jb250cm9sbGVyPSZxdW90O0V4YW1wbGUxNSZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyBjbGFzcz1cXCdyb3dcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtyb3ctaGFuZGxlJnF1b3Q7Jmd0O1JvdyB7eyRpbmRleH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtLml0ZW1zJnF1b3Q7IGNsYXNzPSZxdW90O2NlbGwmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAvLyBDU1NcXG5cXG4gIC5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLmNlbGwge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAucm93LFxcbiAgLmNlbGwge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIH1cXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gSlNcXG5cXG4gICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyB0aW1lb3VudCBkdWUgdG8gbmdSZXBlYXQgdG8gYmUgcmVhZHlcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LCB7XFxuICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcXG4gICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gIH0sIDApO1xcbiAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgaXRlbXM6IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhMVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhNFxcJ1xcbiAgICB9XVxcbiAgfSwge1xcbiAgICBpdGVtczogW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGIxXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGIyXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGIzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGI0XFwnXFxuICAgIH1dXFxuICB9LCB7XFxuICAgIGl0ZW1zOiBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzFcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzJcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzRcXCdcXG4gICAgfV1cXG4gIH1dO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+TmVzdGVkIG5nUmVwZWF0IC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPiBZb3UgY2FuIG1vdmUgd2hvbGUgcm93cyBieSBncmFiaW5nIHJvdyB0aXRsZSwgYWxsIGl0ZW1zIGl0IHNlbHZlcy4gVHJ5IGl0IG91dCFcXG4gICAgPGhyLz5cXG4gICAgPGI+T2xkIElFIGRvZXNudCBzdXBwb3J0IEZsZXhpYmxlIEJveCBMYXlvdXQ8L2I+IHNvIGl0IGNhbiBsb29rIHdlaXJkLiBCdXQgaW4gbW9kZXJuIGJyb3dzZXJzIGl0IGlzIGF3c29tZSEgRHJhZ3VsYXIgd2lsbCBiZSB3b3JraW5nIHdlbGwgYWxzbyBpbiBvbGQgSUUgYnV0IHlvdSBoYXZlIHRvIHVzZSBkaWZmZXJlbnQgY3NzIGZvciBsYXlvdXQuXFxuICAgIDxoci8+XFxuICA8L2xhYmVsPlxcbiAgPGRpdiBuZy1jb250cm9sbGVyPVxcXCJOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCIgY2xhc3M9XFwncm93XFwnPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3ctaGFuZGxlXFxcIj5Sb3cge3s6OiRpbmRleH19PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBjZWxsIGNvbnRhaW5lck5lc3RlZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbS5pdGVtc1xcXCIgY2xhc3M9XFxcImNlbGxcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgPHByZT5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW1zOlxcbiAgICAgICAgICAgICAgPGJyLz57e2l0ZW1zIHwganNvbn19PC9kaXY+XFxuICAgICAgICA8L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IG5nLWNvbnRyb2xsZXI9JnF1b3Q7TmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwmcXVvdDsmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyBjbGFzcz1cXCdyb3dcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtyb3ctaGFuZGxlJnF1b3Q7Jmd0O1JvdyB7ezo6JGluZGV4fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3JvdyBjZWxsIGNvbnRhaW5lck5lc3RlZCZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbS5pdGVtcyZxdW90OyBjbGFzcz0mcXVvdDtjZWxsJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIENTU1xcblxcbiAgLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuY2VsbCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gIC5yb3csXFxuICAuY2VsbCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgfVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gSlNcXG5jb250cm9sbGVyKFxcJ05lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXFwnLCBbXFwnJHRpbWVvdXRcXCcsIFxcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHRpbWVvdXQsICRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5lc3RlZCBuZ1JlcGVhdCB0byBiZSByZWFkeVxcbiAgICAgIHZhciBjb250YWluZXIgPSAkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksXFxuICAgICAgICBwYXJlbnRDb250YWluZXJzID0gY29udGFpbmVyLmNoaWxkcmVuKCksXFxuICAgICAgICBuZXN0ZWRDb250YWluZXJzID0gW107XFxuXFxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGNvbnRhaW5lciwge1xcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcXCdyb3ctaGFuZGxlXFwnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc1xcbiAgICAgIH0pO1xcblxcbiAgICAgIC8vIGNvbGxlY3QgbmVzdGVkIGNvbnRpYW5lcnNcXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudENvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMucHVzaChwYXJlbnRDb250YWluZXJzLmVxKGkpLmNoaWxkcmVuKClbMV0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKG5lc3RlZENvbnRhaW5lcnMsIHtcXG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICAgICAgcmV0dXJuICFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxcJ3Jvdy1oYW5kbGVcXCcpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogKGZ1bmN0aW9uIGdldE5lc3RlZENvbnRhaW5lcnNNb2RlbCgpe1xcbiAgICAgICAgICB2YXIgcGFyZW50ID0gJHNjb3BlLml0ZW1zLFxcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbCA9IFtdO1xcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudC5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbC5wdXNoKHBhcmVudFtpXS5pdGVtcyk7XFxuICAgICAgICAgIH07XFxuICAgICAgICAgIHJldHVybiBjb250YWluZXJzTW9kZWw7XFxuICAgICAgICB9KSgpXFxuICAgICAgfSk7XFxuICAgIH0sIDApO1xcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xcbiAgICAgIGl0ZW1zOiBbe1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhMVxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTJcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGEzXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhNFxcJ1xcbiAgICAgIH1dXFxuICAgIH0sIHtcXG4gICAgICBpdGVtczogW3tcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjFcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGIyXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBiM1xcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjRcXCdcXG4gICAgICB9XVxcbiAgICB9LCB7XFxuICAgICAgaXRlbXM6IFt7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGMxXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBjMlxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzNcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGM0XFwnXFxuICAgICAgfV1cXG4gICAgfV07XFxuICB9XSlcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5nUmVwZWF0L2V4YW1wbGVOZ1JlcGVhdC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5uZ1JlcGVhdDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5FeGFtcGxlIG9mIHVzaW5nIG5nLXJlcGVhdCB3aXRoIGRyYWd1bGFyIGFuZCBhZGRpbmcvcmVtb3ZpbmcgaXRlbXMgZHluYW1pY2FseS48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJOZ1JlcGVhdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcImFkZEl0ZW0oKVxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz1cXFwicmVtb3ZlSXRlbSgpXFxcIj54PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gSFRNTDpcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnJmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zJnF1b3Q7Jmd0O1xcbiAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7YWRkSXRlbSgpJnF1b3Q7Jmd0OysmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7cmVtb3ZlSXRlbSgpJnF1b3Q7Jmd0O3gmbHQ7L2J1dHRvbiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG5cXG4gIC8vIEpTOlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xcbiAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgY29udGVudDogXFwnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci5cXCdcXG4gIH0se1xcbiAgICBjb250ZW50OiBcXCdJdGVtIDJcXCdcXG4gIH0se1xcbiAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gIH0se1xcbiAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gIH1dO1xcbiAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtICgpIHtcXG4gICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XFxuICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDAse2NvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgXFwnLWNvcHlcXCd9KTtcXG4gIH1cXG4gICRzY29wZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbSAoKSB7XFxuICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSk7XFxuICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xcbiAgfVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5uZ1JlcGVhdCAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5FeGFtcGxlIG9mIHVzaW5nIG5nLXJlcGVhdCB3aXRoIGRyYWd1bGFyIGFuZCBhZGRpbmcvcmVtb3ZpbmcgaXRlbXMgZHluYW1pY2FseS48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIk5nUmVwZWF0V2l0aE1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIj5cXG4gICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcImFkZEl0ZW0oKVxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcInJlbW92ZUl0ZW0oKVxcXCI+eDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXY+SXRlbXM6XFxuICAgICAgICAgIDxici8+e3tpdGVtcyB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBIVE1MOlxcbiAgICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O05nUmVwZWF0V2l0aE1vZGVsJnF1b3Q7Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyZndDtcXG4gICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7YWRkSXRlbSgpJnF1b3Q7Jmd0OysmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAgICAgJmx0O2J1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPSZxdW90O3JlbW92ZUl0ZW0oKSZxdW90OyZndDt4Jmx0Oy9idXR0b24mZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEpTOlxcbiAgY29udHJvbGxlcihcXCdOZ1JlcGVhdFdpdGhNb2RlbFxcJywgW1xcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgICRzY29wZS5pdGVtcyA9IFt7XFxuICAgICAgY29udGVudDogXFwnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gICAgfV07XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksIHtjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc30pO1xcbiAgICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uIGFkZEl0ZW0oKSB7XFxuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XFxuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCwge1xcbiAgICAgICAgY29udGVudDogdGhpcy5pdGVtLmNvbnRlbnQgKyBcXCctY29weVxcJ1xcbiAgICAgIH0pO1xcbiAgICB9O1xcbiAgICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oKSB7XFxuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcXG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcXG4gICAgfTtcXG4gIH1dKVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlUmVtb3ZlT25TcGlsbC9leGFtcGxlUmVtb3ZlT25TcGlsbC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5SZW1vdmUgb24gc3BpbGw8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+TmVlZCB0byBiZSBhYmxlIHRvIHF1aWNrbHkgZGVsZXRlIHN0dWZmIHdoZW4gaXQgc3BpbGxzIG91dCBvZiB0aGUgY2hvc2VuIGNvbnRhaW5lcnM/PC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiUmVtb3ZlT25TcGlsbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFwnc2luZ2xlMVxcJyBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBzb21ld2hlcmUgaW4gdGhpcyBjb250YWluZXIuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiBoZXJlLCBJXFwnbGwgZGllIGEgZmllcnkgZGVhdGguPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaW5nbGUpXSwgeyByZW1vdmVPblNwaWxsOiB0cnVlIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZVJldmVydE9uU3BpbGwvZXhhbXBsZVJldmVydE9uU3BpbGwuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+UmV2ZXJ0IG9uIHNwaWxsPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkJ5IGRlZmF1bHQsIGRyb3BwaW5nIGFuIGVsZW1lbnQgb3V0c2lkZSBvZiBhbnkga25vd24gY29udGFpbmVycyB3aWxsIGtlZXAgdGhlIGVsZW1lbnQgaW4gdGhlIGxhc3QgcGxhY2UgaXQgaG92ZXJlZCBvdmVyLiBZb3UgY2FuIG1ha2UgZWxlbWVudHMgZ28gYmFjayBob21lIGlmIHRoZXlcXCdyZSBkcm9wcGVkIG91dHNpZGUgb2Yga25vd24gY29udGFpbmVycywgdG9vLjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIlJldmVydE9uU3BpbGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcJ2xlZnQ0XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFwncmlnaHQ0XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7IHJldmVydE9uU3BpbGw6IHRydWUgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlU2Nyb2xsaW5nRHJhZy9leGFtcGxlU2Nyb2xsaW5nRHJhZy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPlNjcm9sbGluZyBkcmFnPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz4gQ29udGFpbnJlIGNhbiBiZSBzY3JvbGxlZCBieSBob3ZlcmluZyBkcmFnZ2VkIGl0ZW0gb3ZlciBtb3N0IHRvcCB2aXNpYmxlIGl0ZW0gb3IgbW9zdCBib3R0b20sIHNjcm9sbCBkaXJlY3Rpb24gcmVzcGVjdGl2ZWx5LlxcbiAgICA8L2xhYmVsPlxcbiAgICA8ZGl2IG5nLWNvbnRyb2xsZXI9XFxcIlNjcm9sbGluZ0RyYWdcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGhlaWdodExpbWl0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMTwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAyPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDcuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDkuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDEwLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxMS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMTIuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDEzLjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInBhcnRpYWxzL3BhcnRpYWwtYXBpLWRlZmF1bHQuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUIEFQSSBERUZBVUxUXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwicGFydGlhbHMvcGFydGlhbC1hcGkuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gIDxkaXYgaWQ9XFxcInJvd09mZmNhbnZhc1xcXCIgY2xhc3M9XFxcInJvdyByb3ctb2ZmY2FudmFzIHJvdy1vZmZjYW52YXMtbGVmdFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0zIHNpZGViYXItb2ZmY2FudmFzXFxcIiBpZD1cXFwic2lkZWJhclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8YSBuZy1yZXBlYXQ9XFxcImV4YW1wbGUgaW4gZXhhbXBsZXNMaXN0XFxcIiBocmVmPVxcXCIjL2FwaS97e2V4YW1wbGUubGlua319XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj57e2V4YW1wbGUudGl0bGV9fTwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0vLnNpZGViYXItb2ZmY2FudmFzLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tOVxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInB1bGwtbGVmdCB2aXNpYmxlLXhzXFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlU2lkZWJhcigpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1xcXCI+VG9nZ2xlIG5hdjwvYnV0dG9uPlxcbiAgICAgIDwvcD5cXG4gICAgICA8ZGl2IHVpLXZpZXc+IDxoMT5ERUZBVUxUPC9oMT4gPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tLy5jb2wteHMtMTIuY29sLXNtLTktLT5cXG4gIDwvZGl2PlxcbiAgPCEtLS9yb3ctLT5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJwYXJ0aWFscy9wYXJ0aWFsLWNvbnRhY3QuaHRtbFwiLFwiUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgUEFSVElBTCBDT05UQUNUIFBBUlRJQUwgQ09OVEFDVCBQQVJUSUFMIENPTlRBQ1QgXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwicGFydGlhbHMvcGFydGlhbC1ob21lLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8IS0tLy5zaWRlYmFyLW9mZmNhbnZhcy0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxuICAgICAgICA8aDE+SGVsbG8sIHdvcmxkITwvaDE+XFxuICAgICAgICA8cD5UaGlzIGlzIGFuIGV4YW1wbGUgdG8gc2hvdyB0aGUgcG90ZW50aWFsIG9mIGFuIG9mZmNhbnZhcyBsYXlvdXQgcGF0dGVybiBpbiBCb290c3RyYXAuIFRyeSBzb21lIHJlc3BvbnNpdmUtcmFuZ2Ugdmlld3BvcnQgc2l6ZXMgdG8gc2VlIGl0IGluIGFjdGlvbi48L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1sZy00XFxcIj5cXG4gICAgICAgICAgPGgyPkhlYWRpbmc8L2gyPlxcbiAgICAgICAgICA8cD5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuIEV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmEgbW9sbGlzIGV1aXNtb2QuIERvbmVjIHNlZCBvZGlvIGR1aS4gPC9wPlxcbiAgICAgICAgICA8cD48YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBocmVmPVxcXCIjXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPlZpZXcgZGV0YWlscyDCuzwvYT48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0vLmNvbC14cy02LmNvbC1sZy00LS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtbGctNFxcXCI+XFxuICAgICAgICAgIDxoMj5IZWFkaW5nPC9oMj5cXG4gICAgICAgICAgPHA+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvciBtYXVyaXMgY29uZGltZW50dW0gbmliaCwgdXQgZmVybWVudHVtIG1hc3NhIGp1c3RvIHNpdCBhbWV0IHJpc3VzLiBFdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hIG1vbGxpcyBldWlzbW9kLiBEb25lYyBzZWQgb2RpbyBkdWkuIDwvcD5cXG4gICAgICAgICAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgaHJlZj1cXFwiI1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5WaWV3IGRldGFpbHMgwrs8L2E+PC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tLy5jb2wteHMtNi5jb2wtbGctNC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLWxnLTRcXFwiPlxcbiAgICAgICAgICA8aDI+SGVhZGluZzwvaDI+XFxuICAgICAgICAgIDxwPkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gRnVzY2UgZGFwaWJ1cywgdGVsbHVzIGFjIGN1cnN1cyBjb21tb2RvLCB0b3J0b3IgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy4gRXRpYW0gcG9ydGEgc2VtIG1hbGVzdWFkYSBtYWduYSBtb2xsaXMgZXVpc21vZC4gRG9uZWMgc2VkIG9kaW8gZHVpLiA8L3A+XFxuICAgICAgICAgIDxwPjxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGhyZWY9XFxcIiNcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+VmlldyBkZXRhaWxzIMK7PC9hPjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLS8uY29sLXhzLTYuY29sLWxnLTQtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1sZy00XFxcIj5cXG4gICAgICAgICAgPGgyPkhlYWRpbmc8L2gyPlxcbiAgICAgICAgICA8cD5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuIEV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmEgbW9sbGlzIGV1aXNtb2QuIERvbmVjIHNlZCBvZGlvIGR1aS4gPC9wPlxcbiAgICAgICAgICA8cD48YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBocmVmPVxcXCIjXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPlZpZXcgZGV0YWlscyDCuzwvYT48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0vLmNvbC14cy02LmNvbC1sZy00LS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtbGctNFxcXCI+XFxuICAgICAgICAgIDxoMj5IZWFkaW5nPC9oMj5cXG4gICAgICAgICAgPHA+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvciBtYXVyaXMgY29uZGltZW50dW0gbmliaCwgdXQgZmVybWVudHVtIG1hc3NhIGp1c3RvIHNpdCBhbWV0IHJpc3VzLiBFdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hIG1vbGxpcyBldWlzbW9kLiBEb25lYyBzZWQgb2RpbyBkdWkuIDwvcD5cXG4gICAgICAgICAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgaHJlZj1cXFwiI1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5WaWV3IGRldGFpbHMgwrs8L2E+PC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tLy5jb2wteHMtNi5jb2wtbGctNC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLWxnLTRcXFwiPlxcbiAgICAgICAgICA8aDI+SGVhZGluZzwvaDI+XFxuICAgICAgICAgIDxwPkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gRnVzY2UgZGFwaWJ1cywgdGVsbHVzIGFjIGN1cnN1cyBjb21tb2RvLCB0b3J0b3IgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy4gRXRpYW0gcG9ydGEgc2VtIG1hbGVzdWFkYSBtYWduYSBtb2xsaXMgZXVpc21vZC4gRG9uZWMgc2VkIG9kaW8gZHVpLiA8L3A+XFxuICAgICAgICAgIDxwPjxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGhyZWY9XFxcIiNcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+VmlldyBkZXRhaWxzIMK7PC9hPjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLS8uY29sLXhzLTYuY29sLWxnLTQtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8IS0tL3Jvdy0tPlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLS8uY29sLXhzLTEyLmNvbC1zbS05LS0+XFxuICA8L2Rpdj5cXG4gIDwhLS0vcm93LS0+XFxuPC9kaXY+XFxuXCIpO31dKTsiLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGRyYWd1bGFyIERpcmVjdGl2ZSBieSBMdWNreWxvb2tlIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG4gdmFyIGRyYWd1bGFyTW9kdWxlID0gcmVxdWlyZSgnLi9kcmFndWxhck1vZHVsZScpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5kcmFndWxhck1vZHVsZS5kaXJlY3RpdmUoJ2RyYWd1bGFyJywgWydkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbihkcmFndWxhclNlcnZpY2UpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uKCRzY29wZSwgaUVsbSwgaUF0dHJzKSB7XG5cbiAgICAgIHZhciBvcHRpb25zID0gJHNjb3BlW2lBdHRycy5kcmFndWxhcl0gfHwgdHJ5SnNvbihpQXR0cnMuZHJhZ3VsYXIpO1xuXG4gICAgICBmdW5jdGlvbiB0cnlKc29uKGpzb24pIHtcbiAgICAgICAgdHJ5IHsgLy8gSSBkb250IGxpa2UgdHJ5IGNhdGNoIHNvbHV0aW9ucyBidXQgSSBoYXZlbnQgZmluZCBzYXR0aXNmeWluZyB3YXkgb2YgY2hjZWNraW5nIGpzb24gdmFsaWRpdHkuXG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5jb250YWluZXJzTW9kZWwgJiYgdHlwZW9mIG9wdGlvbnMuY29udGFpbmVyc01vZGVsID09PSAnc3RyaW5nJyl7XG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyc01vZGVsID0gJHNjb3BlLiRldmFsKG9wdGlvbnMuY29udGFpbmVyc01vZGVsKTtcbiAgICAgIH1cblxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGlFbG1bMF0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcbn1dKVxuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2RyYWd1bGFyTW9kdWxlJywgW10pO1xuXG4oe1wiZHJhZ3VsYXJEaXJlY3RpdmVcIjpyZXF1aXJlKFwiLi9kcmFndWxhckRpcmVjdGl2ZS5qc1wiKSxcImRyYWd1bGFyU2VydmljZVwiOnJlcXVpcmUoXCIuL2RyYWd1bGFyU2VydmljZS5qc1wiKX0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBkcmFndWxhciBNb2R1bGUgYW5kIFNlcnZpY2UgYnkgTHVja3lsb29rZSBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhclxuICogQW5ndWxhciB2ZXJzaW9uIG9mIGRyYWd1bGEgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGFcbiAqL1xuXG52YXIgZHJhZ3VsYXJNb2R1bGUgPSByZXF1aXJlKCcuL2RyYWd1bGFyTW9kdWxlJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxuZHJhZ3VsYXJNb2R1bGUuZmFjdG9yeSgnZHJhZ3VsYXJTZXJ2aWNlJywgWyckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gZHJhZ3VsYSgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xuXG4gIHZhciBjb250YWluZXJzTmFtZVNwYWNlZCA9IHt9LCAvLyBuYW1lLXNwYWNlZCBjb250YWluZXJzXG4gICAgY29udGFpbmVyc05hbWVTcGFjZWRNb2RlbCA9IHt9LCAvLyBuYW1lLXNwYWNlZCBjb250YWluZXJzIG1vZGVsc1xuICAgIF9taXJyb3I7IC8vIG1pcnJvciBpbWFnZVxuXG4gIHJldHVybiBmdW5jdGlvbihpbml0aWFsQ29udGFpbmVycywgb3B0aW9ucykge1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgIUFycmF5LmlzQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpICYmICFhbmd1bGFyLmlzRWxlbWVudChpbml0aWFsQ29udGFpbmVycykgJiYgIWluaXRpYWxDb250YWluZXJzWzBdKSB7XG4gICAgICAvLyB0aGVuIGNvbnRhaW5lcnMgYXJlIG5vdCBwcm92aWRlZCwgb25seSBvcHRpb25zXG4gICAgICBvcHRpb25zID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgICBpbml0aWFsQ29udGFpbmVycyA9IFtdO1xuICAgIH1cblxuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIF9zb3VyY2UsIC8vIHNvdXJjZSBjb250YWluZXJcbiAgICAgIF9pdGVtLCAvLyBpdGVtIGJlaW5nIGRyYWdnZWRcbiAgICAgIF9zb3VyY2VNb2RlbCwgLy8gc291cmNlIGNvbnRhaW5lciBtb2RlbFxuICAgICAgX2l0ZW1Nb2RlbCwgLy8gaXRlbS1tb2RlbCBiZWluZyBkcmFnZ2VkXG4gICAgICBfdGFyZ2V0TW9kZWwsIC8vIHRhcmdldCBjb250YWluZXIgbW9kZWxcbiAgICAgIF9sYXN0VGFyZ2V0TW9kZWwsIC8vIGxhc3QgdGFyZ2V0IGNvbnRhaW5lciBtb2RlbFxuICAgICAgX29mZnNldFgsIC8vIHJlZmVyZW5jZSB4XG4gICAgICBfb2Zmc2V0WSwgLy8gcmVmZXJlbmNlIHlcbiAgICAgIF9vZmZzZXRYciwgLy8gcmVmZXJlbmNlIHggcmlnaHQgZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9vZmZzZXRZYiwgLy8gcmVmZXJlbmNlIHkgYm90dG9tIGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfY2xpZW50WCwgLy8gY2FjaGUgY2xpZW50IHgsIGluaXQgYXQgZ3JhYiwgdXBkYXRlIGF0IGRyYWdcbiAgICAgIF9jbGllbnRZLCAvLyBjYWNoZSBjbGllbnQgeSwgaW5pdCBhdCBncmFiLCB1cGRhdGUgYXQgZHJhZ1xuICAgICAgX21pcnJvcldpZHRoLCAvLyBtaXJyb3Igd2lkdGggZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9taXJyb3JIZWlnaHQsIC8vIG1pcnJvciBoZWlnaHQgZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9pbml0aWFsU2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgd2hlbiBncmFiYmVkXG4gICAgICBfY3VycmVudFNpYmxpbmcsIC8vIHJlZmVyZW5jZSBzaWJsaW5nIG5vd1xuICAgICAgX2luaXRpYWxJbmRleCwgLy8gcmVmZXJlbmNlIG1vZGVsIGluZGV4IHdoZW4gZ3JhYmJlZFxuICAgICAgX2N1cnJlbnRJbmRleCwgLy8gcmVmZXJlbmNlIG1vZGVsIGluZGV4IG5vd1xuICAgICAgX2xhc3RPdmVyRWxlbSwgLy8gbGFzdCBlbGVtZW50IGJlaGluZCB0aGUgY3Vyc29yIChkcmFnT3ZlckNsYXNzZXMgZmVhdHVyZSlcbiAgICAgIF9sYXN0T3ZlckNsYXNzLCAvLyBsYXN0IG92ZXJDbGFzcyB1c2VkIChkcmFnT3ZlckNsYXNzZXMgZmVhdHVyZSlcbiAgICAgIF9jb3B5LCAvLyBpdGVtIHVzZWQgZm9yIGNvcHlpbmdcbiAgICAgIF9jb3B5TW9kZWwsIC8vIGl0ZW0tbW9kZWwgdXNlZCBmb3IgY29weWluZ1xuICAgICAgX2NvbnRhaW5lcnMgPSB7fSwgLy8gY29udGFpbmVycyBtYW5hZ2VkIGJ5IHRoZSBkcmFrZVxuICAgICAgX2NvbnRhaW5lcnNNb2RlbCA9IHt9LCAvLyBjb250YWluZXJzIG1vZGVsXG4gICAgICBfcmVuZGVyVGltZXIsIC8vIHRpbWVyIGZvciBzZXRUaW1lb3V0IHJlbmRlck1pcnJvckltYWdlXG4gICAgICBfaXNDb250YWluZXIsIC8vIGludGVybmFsIGlzQ29udGFpbmVyXG4gICAgICBfdGFyZ2V0Q29udGFpbmVyLCAvLyBkcm9wcGFibGUgY29udGFpbmVyIHVuZGVyIGRyYWcgaXRlbVxuICAgICAgZGVmYXVsdENsYXNzZXMgPSB7XG4gICAgICAgIG1pcnJvcjogJ2d1LW1pcnJvcicsXG4gICAgICAgIGhpZGU6ICdndS1oaWRlJyxcbiAgICAgICAgdW5zZWxlY3RhYmxlOiAnZ3UtdW5zZWxlY3RhYmxlJyxcbiAgICAgICAgdHJhbnNpdDogJ2d1LXRyYW5zaXQnLFxuICAgICAgICBvdmVyQWN0aXZlOiAnZ3Utb3Zlci1hY3RpdmUnLFxuICAgICAgICBvdmVyQWNjZXB0czogJ2d1LW92ZXItYWNjZXB0JyxcbiAgICAgICAgb3ZlckRlY2xpbmVzOiAnZ3Utb3Zlci1kZWNsaW5lJ1xuICAgICAgfSxcbiAgICAgIG8gPSB7IC8vIG9wdGlvbnNcbiAgICAgICAgY2xhc3NlczogZGVmYXVsdENsYXNzZXMsXG4gICAgICAgIGNvbnRhaW5lcnM6IGZhbHNlLFxuICAgICAgICBtb3ZlczogYWx3YXlzLFxuICAgICAgICBhY2NlcHRzOiBhbHdheXMsXG4gICAgICAgIGlzQ29udGFpbmVyOiBuZXZlcixcbiAgICAgICAgY29weTogZmFsc2UsXG4gICAgICAgIGRlbGF5OiBmYWxzZSxcbiAgICAgICAgaW52YWxpZDogaW52YWxpZFRhcmdldCxcbiAgICAgICAgcmV2ZXJ0T25TcGlsbDogZmFsc2UsXG4gICAgICAgIHJlbW92ZU9uU3BpbGw6IGZhbHNlLFxuICAgICAgICBkcmFnT3ZlckNsYXNzZXM6IGZhbHNlLFxuICAgICAgICBsb2NrWDogZmFsc2UsXG4gICAgICAgIGxvY2tZOiBmYWxzZSxcbiAgICAgICAgYm91bmRpbmdCb3g6IGZhbHNlLFxuICAgICAgICBjb250YWluZXJzTW9kZWw6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgaWYgKCFpc0VsZW1lbnQoby5ib3VuZGluZ0JveCkpIHtcbiAgICAgIG8uYm91bmRpbmdCb3ggPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuY2xhc3Nlcykge1xuICAgICAgYW5ndWxhci5leHRlbmQoZGVmYXVsdENsYXNzZXMsIG9wdGlvbnMuY2xhc3Nlcyk7XG4gICAgICBhbmd1bGFyLmV4dGVuZChvcHRpb25zLmNsYXNzZXMsIGRlZmF1bHRDbGFzc2VzKTtcbiAgICB9XG5cbiAgICBhbmd1bGFyLmV4dGVuZChvLCBvcHRpb25zKTtcblxuICAgIGlmIChvLmRlbGF5ID09PSB0cnVlKSB7XG4gICAgICBvLmRlbGF5ID0gMzAwO1xuICAgIH1cblxuICAgIC8vIGdldCBpbml0aWFsIGNvbnRhaW5lcnMgZnJvbSBvcHRpb25zLCBhcmd1bWVudCBvciBmYWxsIGJhY2sgdG8gZW1wdHkgYXJyYXkgKGNvbnRhaW5lcnMgY2FuIGJlIGFkZGVkIGxhdGVyKVxuICAgIGluaXRpYWxDb250YWluZXJzID0gby5jb250YWluZXJzIHx8IChpbml0aWFsQ29udGFpbmVycyA/IG1ha2VBcnJheShpbml0aWFsQ29udGFpbmVycykgOiBbXSk7XG4gICAgaWYgKG8uY29udGFpbmVycykge1xuICAgICAgLy8gbWFrZSBhcnJheSBmcm9tIG8uY29udGFpbmVyc1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgIH1cbiAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgIG8uY29udGFpbmVyc01vZGVsID0gQXJyYXkuaXNBcnJheShvLmNvbnRhaW5lcnNNb2RlbFswXSkgPyBvLmNvbnRhaW5lcnNNb2RlbCA6IFtvLmNvbnRhaW5lcnNNb2RlbF07XG4gICAgfVxuXG4gICAgLy8gZmVlZCBuYW1lc3BhY2VkIGNvbnRhaW5lcnMgZ3JvdXBzIGFuZCBvcHRpb25hbHkgc2hhZG93IGl0IGJ5IG1vZGVsc1xuICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8ubmFtZVNwYWNlKSkge1xuICAgICAgICBvLm5hbWVTcGFjZSA9IFtvLm5hbWVTcGFjZV07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycykge1xuICAgICAgICBpZiAoIWNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0pIHtcbiAgICAgICAgICBjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSwgaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgICAgICBfY29udGFpbmVyc1tuYW1lU3BhY2VdID0gY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXTtcbiAgICAgIH1cbiAgICAgIG8ubmFtZVNwYWNlLmZvckVhY2goZnVuY3Rpb24gZWFjaE5hbWVTcGFjZShuYW1lU3BhY2UpIHtcbiAgICAgICAgcHJvY2VlZE5hbWVTcGFjZXMoX2NvbnRhaW5lcnMsIGNvbnRhaW5lcnNOYW1lU3BhY2VkLCBuYW1lU3BhY2UsIGluaXRpYWxDb250YWluZXJzKTtcbiAgICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgcHJvY2VlZE5hbWVTcGFjZXMoX2NvbnRhaW5lcnNNb2RlbCwgY29udGFpbmVyc05hbWVTcGFjZWRNb2RlbCwgbmFtZVNwYWNlLCBvLmNvbnRhaW5lcnNNb2RlbClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBfaXNDb250YWluZXIgPSBpc0NvbnRhaW5lck5hbWVTcGFjZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlZmF1bHQgKG5vdCB1c2luZyBuYW1lU3BhY2VzKVxuICAgICAgX2NvbnRhaW5lcnMgPSBpbml0aWFsQ29udGFpbmVycztcbiAgICAgIF9pc0NvbnRhaW5lciA9IGlzQ29udGFpbmVyO1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIF9jb250YWluZXJzTW9kZWwgPSBvLmNvbnRhaW5lcnNNb2RlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL3JlZ2lzdGVyIGV2ZW50c1xuICAgIGV2ZW50cygpO1xuXG4gICAgdmFyIGFwaSA9IHtcbiAgICAgIGFkZENvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ2FkZCcpLFxuICAgICAgcmVtb3ZlQ29udGFpbmVyOiBtYW5pcHVsYXRlQ29udGFpbmVycygncmVtb3ZlJyksXG4gICAgICBjb250YWluZXJzOiBfY29udGFpbmVycyxcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZW5kLFxuICAgICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICBkcmFnZ2luZzogZmFsc2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFwaTtcblxuICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBhcnJheS1saWtlIG9iamVjdHMgb3IgZnJvbSBzaW5nbGUgZWxlbWVudFxuICAgIGZ1bmN0aW9uIG1ha2VBcnJheShhbGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFsbCkpIHtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICAgIH1cbiAgICAgIGlmIChhbGwubGVuZ3RoKSB7IC8vIGlzIGFycmF5LWxpa2VcbiAgICAgICAgdmFyIGlBbGwgPSBhbGwubGVuZ3RoLFxuICAgICAgICAgIG5ld0FycmF5ID0gW107XG4gICAgICAgIHdoaWxlIChpQWxsKSB7XG4gICAgICAgICAgaUFsbC0tO1xuICAgICAgICAgIG5ld0FycmF5LnB1c2goYWxsW2lBbGxdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICB9IGVsc2UgeyAvLyBpcyBvbmUgZWxlbWVudFxuICAgICAgICByZXR1cm4gW2FsbF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIG9yIHJlbW92ZSBjb250YWluZXJzIC0gZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIG1hbmlwdWxhdGVDb250YWluZXJzKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYWRkT3JSZW1vdmUoYWxsKSB7XG4gICAgICAgIHZhciBjaGFuZ2VzID0gQXJyYXkuaXNBcnJheShhbGwpID8gYWxsIDogbWFrZUFycmF5KGFsbCk7XG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgICAgICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG8ubmFtZVNwYWNlLCBmdW5jdGlvbiBhZGRSZW1vdmVOYW1lc3BhY2VkKGNvbnRhaW5lcnMsIG5hbWVTcGFjZSkge1xuICAgICAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXS5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UuYWRkQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0uc3BsaWNlKF9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSwgMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UucmVtb3ZlQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wID09PSAnYWRkJykge1xuICAgICAgICAgICAgICBfY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLmFkZENvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9jb250YWluZXJzLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5yZW1vdmVDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDb250YWluZXIoZWwpIHtcbiAgICAgIHJldHVybiBhcGkuY29udGFpbmVycy5pbmRleE9mKGVsKSAhPT0gLTEgfHwgby5pc0NvbnRhaW5lcihlbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDb250YWluZXJOYW1lU3BhY2VkKGVsKSB7XG4gICAgICB2YXIgbmFtZVNwYWNlO1xuICAgICAgZm9yIChuYW1lU3BhY2UgaW4gYXBpLmNvbnRhaW5lcnMpIHtcbiAgICAgICAgaWYgKGFwaS5jb250YWluZXJzLmhhc093blByb3BlcnR5KG5hbWVTcGFjZSkgJiYgYXBpLmNvbnRhaW5lcnNbbmFtZVNwYWNlXS5pbmRleE9mKGVsKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2ZW50cyhyZW0pIHtcbiAgICAgIHZhciBvcCA9IHJlbSA/ICdvZmYnIDogJ29uJztcbiAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgb3AsICdtb3VzZXVwJywgcmVsZWFzZSk7XG5cbiAgICAgIGluaXRpYWxDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gYWRkTW91c2VEb3duKGNvbnRhaW5lcikge1xuICAgICAgICByZWdFdmVudChjb250YWluZXIsICdvbicsICdtb3VzZWRvd24nLCBncmFiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBldmVudHModHJ1ZSk7XG4gICAgICBhcGkucmVtb3ZlQ29udGFpbmVyKF9jb250YWluZXJzKTtcbiAgICAgIHJlbGVhc2Uoe30pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdyYWIoZSkge1xuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgdmFyIGl0ZW0gPSBlLnRhcmdldDtcblxuICAgICAgLy8gZmlsdGVyIHNvbWUgb2RkIHNpdHVhdGlvbnNcbiAgICAgIGlmICgoZS53aGljaCAhPT0gMCAmJiBlLndoaWNoICE9PSAxKSB8fCBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybjsgLy8gd2Ugb25seSBjYXJlIGFib3V0IGhvbmVzdC10by1nb2QgbGVmdCBjbGlja3MgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiBkcmFnIGNhbiBzdGFydFxuICAgICAgaWYgKHN0YXJ0KGl0ZW0pICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXV0b21hdGljbHkgZGV0ZWN0IGRpcmVjdGlvbiBvZiBlbGVtZW50cyBpZiBub3Qgc2V0IGluIG9wdGlvbnNcbiAgICAgIGlmICghby5kaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudCxcbiAgICAgICAgICBwYXJlbnRIZWlnaHQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIHBhcmVudFdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIGNoaWxkSGVpZ2h0ID0gaXRlbS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgY2hpbGRXaWR0aCA9IGl0ZW0uY2xpZW50V2lkdGg7XG4gICAgICAgIG8uZGlyZWN0aW9uID0gcGFyZW50SGVpZ2h0IC8gY2hpbGRIZWlnaHQgPCBwYXJlbnRXaWR0aCAvIGNoaWxkV2lkdGggPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgfVxuXG4gICAgICAvLyBnZXQgaW5pdGlhbCBjb29yZGluYXRlcywgdXNlZCB0byByZW5kZXIgX21pcnJvciBmb3IgZmlyc3QgdGltZVxuICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldChfaXRlbSk7XG4gICAgICBfb2Zmc2V0WCA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICBfb2Zmc2V0WSA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LnRvcDtcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gbGltaXRpbmcgYXJlYSBvZiBfbWlycm9yIG1vdmVtZW50LCBnZXQgaW5pdGlhbCBjb29yZGluYXRlc1xuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgX29mZnNldFhyID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSkgLSBvZmZzZXQucmlnaHQ7XG4gICAgICAgIF9vZmZzZXRZYiA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LmJvdHRvbTtcbiAgICAgIH1cblxuICAgICAgLy8gZGVsYXllZCByZW5kZXJpbmdcbiAgICAgIGlmICh0eXBlb2Ygby5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgX3JlbmRlclRpbWVyID0gJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgICAgfSwgby5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJNaXJyb3JBbmREcmFnKGUpO1xuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWlycm9yQW5kRHJhZyhlKSB7XG4gICAgICByZW5kZXJNaXJyb3JJbWFnZSgpO1xuICAgICAgLy8gaW5pdGlhbCBwb3NpdGlvblxuICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0gX2NsaWVudFggLSBfb2Zmc2V0WCArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gX29mZnNldFkgKyAncHgnO1xuXG4gICAgICBkcmFnKGUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RhcnQoaXRlbSkge1xuICAgICAgdmFyIGhhbmRsZSA9IGl0ZW07XG5cbiAgICAgIGlmIChhcGkuZHJhZ2dpbmcgJiYgX21pcnJvcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGFscmVhZHkgZHJhZ2dpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc0NvbnRhaW5lcihpdGVtKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGRvbid0IGRyYWcgY29udGFpbmVyIGl0c2VsZlxuICAgICAgfVxuXG4gICAgICB3aGlsZSAoIV9pc0NvbnRhaW5lcihpdGVtLnBhcmVudEVsZW1lbnQpKSB7XG4gICAgICAgIC8vIGJyZWFrIGxvb3AgaWYgdXNlciB0cmllcyB0byBkcmFnIGl0ZW0gd2hpY2ggaXMgY29uc2lkZXJlZCBpbnZhbGlkIGhhbmRsZVxuICAgICAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50RWxlbWVudDsgLy8gZHJhZyB0YXJnZXQgc2hvdWxkIGJlIGltbWVkaWF0ZSBjaGlsZCBvZiBjb250YWluZXJcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGxhc3QgaXRlbSBjaGNlY2tcbiAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAoIW8ubW92ZXMoaXRlbSwgY29udGFpbmVyLCBoYW5kbGUsIF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCkpIHsgLy8gaXMgbW92YWJsZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGVuZCgpO1xuXG4gICAgICAvLyBwcmVwYXJlIG1vZGVscyBvcGVyYXRpb25zXG4gICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gaW5pdGlhbENvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLFxuICAgICAgICAgIGl0ZW1JbmRleCA9IGRvbUluZGV4T2YoaXRlbSwgY29udGFpbmVyKTtcblxuICAgICAgICBfaW5pdGlhbEluZGV4ID0gX2N1cnJlbnRJbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgICAgX3NvdXJjZU1vZGVsID0gby5jb250YWluZXJzTW9kZWxbY29udGFpbmVySW5kZXhdO1xuICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgIF9pdGVtTW9kZWwgPSBfc291cmNlTW9kZWxbaXRlbUluZGV4XTtcbiAgICAgICAgaWYgKG8uY29weSkge1xuICAgICAgICAgIF9jb3B5TW9kZWwgPSBhbmd1bGFyLmNvcHkoX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG8uY29weSkge1xuICAgICAgICBfY29weSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBhZGRDbGFzcyhfY29weSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9jb3B5LCBpdGVtLCBfY29weU1vZGVsLCBfaXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgfVxuXG4gICAgICBfc291cmNlID0gY29udGFpbmVyO1xuICAgICAgX2l0ZW0gPSBpdGVtO1xuICAgICAgX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gbmV4dEVsKGl0ZW0pO1xuXG4gICAgICBhcGkuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJhZycsIF9pdGVtLCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52YWxpZFRhcmdldChlbCkge1xuICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICdBJyB8fCBlbC50YWdOYW1lID09PSAnQlVUVE9OJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnISEhISEgSSBoYXZlbnQgc2VlbiB0aGlzIG1lc3NhZ2UgaW4gYW55IGNhc2UnKTtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICBkcm9wKGl0ZW0sIGl0ZW0ucGFyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVsZWFzZShlKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBfY2xpZW50WCwgX2NsaWVudFkpLFxuICAgICAgICBkcm9wVGFyZ2V0ID0gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgX2NsaWVudFgsIF9jbGllbnRZKTtcblxuICAgICAgaWYgKGRyb3BUYXJnZXQgJiYgKG8uY29weSA9PT0gZmFsc2UgfHwgZHJvcFRhcmdldCAhPT0gX3NvdXJjZSkpIHtcbiAgICAgICAgLy8gZm91bmQgdmFsaWQgdGFyZ2V0IGFuZCAoaXMgbm90IGNvcHkgY2FzZSBvciB0YXJnZXQgaXMgbm90IGluaXRpYWwgY29udGFpbmVyKVxuICAgICAgICBkcm9wKGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgICAgfSBlbHNlIGlmIChvLnJlbW92ZU9uU3BpbGwpIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWZ0ZXIgcmVsZWFzZSB0aGVyZSBpcyBubyBjb250YWluZXIgaG92ZXJlZFxuICAgICAgX3RhcmdldENvbnRhaW5lciA9IG51bGw7XG5cbiAgICAgIC8vIHJlbW92ZSBjbGFzc2VzIGlmIHVzZWRcbiAgICAgIGlmIChvLmRyYWdPdmVyQ2xhc3NlcyAmJiBfbGFzdE92ZXJFbGVtKSB7XG4gICAgICAgIHJtQ2xhc3MoX2xhc3RPdmVyRWxlbSwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICBfbGFzdE92ZXJFbGVtID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcm9wKGl0ZW0sIHRhcmdldCkge1xuICAgICAgaWYgKG8uc2NvcGUgJiYgaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCkpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSwgX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9IGVsc2UgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJvcCcsIGl0ZW0sIHRhcmdldCwgX3NvdXJjZSwgX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpdGVtTW9kZWwgPSBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWw7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UoX3RhcmdldE1vZGVsLmluZGV4T2YoaXRlbU1vZGVsKSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoby5jb3B5ID8gJ2NhbmNlbCcgOiAncmVtb3ZlJywgaXRlbSwgcGFyZW50LCBpdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCwgX3RhcmdldE1vZGVsKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWwocmV2ZXJ0KSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmV2ZXJ0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gcmV2ZXJ0IDogby5yZXZlcnRPblNwaWxsLFxuICAgICAgICBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcblxuICAgICAgaWYgKHBhcmVudCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyEhISEhISEhISEhISEhISEhIEkgdGhpbmsgdGhpcyBpcyBuZXZlciBwb3NzaWJsZSBiZWNhdXNlIGNvcHkgY2Fubm90IGJlIHBsYWNlZCBpbnRvIHNvdXJjZScpO1xuICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9jb3B5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKF90YXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpLCAxLCBfY29weU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudChwYXJlbnQpO1xuICAgICAgaWYgKGluaXRpYWwgPT09IGZhbHNlICYmIG8uY29weSA9PT0gZmFsc2UgJiYgcmV2ZXJ0cykge1xuICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgX3NvdXJjZS5pbnNlcnRCZWZvcmUoaXRlbSwgX2luaXRpYWxTaWJsaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9zb3VyY2VNb2RlbDtcbiAgICAgICAgICAvLyBtb3ZlIGJhY2sgdG8gaW5pdGlhbCBwbGFjZW1lbnRcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwoX2luaXRpYWxJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG8uc2NvcGUgJiYgKGluaXRpYWwgfHwgcmV2ZXJ0cykpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSk7XG4gICAgICB9IGVsc2UgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJvcCcsIGl0ZW0sIHBhcmVudCwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICAgIHJlbW92ZU1pcnJvckltYWdlKCk7XG5cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJtQ2xhc3MoaXRlbSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBjYW5jZWwgdGltZXJcbiAgICAgIGlmIChfcmVuZGVyVGltZXIpIHtcbiAgICAgICAgJHRpbWVvdXQuY2FuY2VsKF9yZW5kZXJUaW1lcik7XG4gICAgICB9XG5cbiAgICAgIF9zb3VyY2UgPSBfaXRlbSA9IF9jb3B5ID0gX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gX3NvdXJjZU1vZGVsID0gbnVsbDtcbiAgICAgIF9pdGVtTW9kZWwgPSBfY29weU1vZGVsID0gX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBfcmVuZGVyVGltZXIgPSBudWxsO1xuXG4gICAgICBhcGkuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2RyYWdlbmQnLCBpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpcyBpdGVtIGN1cnJlbnRseSBwbGFjZWQgaW4gb3JpZ2luYWwgY29udGFpbmVyIGFuZCBvcmlnaW5hbCBwb3NpdGlvbj9cbiAgICBmdW5jdGlvbiBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCBzKSB7XG4gICAgICB2YXIgc2libGluZyA9IHMgfHwgKF9taXJyb3IgPyBfY3VycmVudFNpYmxpbmcgOiBuZXh0RWwoX2l0ZW0gfHwgX2NvcHkpKTtcbiAgICAgIHJldHVybiB0YXJnZXQgPT09IF9zb3VyY2UgJiYgc2libGluZyA9PT0gX2luaXRpYWxTaWJsaW5nO1xuICAgIH1cblxuICAgIC8vIGZpbmQgdmFsaWQgZHJvcCBjb250YWluZXJcbiAgICBmdW5jdGlvbiBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZWxlbWVudEJlaGluZEN1cnNvcjtcbiAgICAgIHdoaWxlICh0YXJnZXQgJiYgIWFjY2VwdGVkKCkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuXG4gICAgICBmdW5jdGlvbiBhY2NlcHRlZCgpIHtcbiAgICAgICAgdmFyIGFjY2VwdHMgPSBmYWxzZTtcblxuICAgICAgICBpZiAoX2lzQ29udGFpbmVyKHRhcmdldCkpIHsgLy8gaXMgZHJvcHBhYmxlP1xuICAgICAgICAgIF90YXJnZXRDb250YWluZXIgPSB0YXJnZXQ7XG5cbiAgICAgICAgICB2YXIgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQodGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZSh0YXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSksXG4gICAgICAgICAgICBpbml0aWFsID0gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcmVmZXJlbmNlKTtcbiAgICAgICAgICBhY2NlcHRzID0gaW5pdGlhbCA/IHRydWUgOiBvLmFjY2VwdHMoX2l0ZW0sIHRhcmdldCwgX3NvdXJjZSwgcmVmZXJlbmNlLCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwpO1xuXG4gICAgICAgICAgaWYgKGFjY2VwdHMgJiYgby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgICBpZiAoIW8ubmFtZVNwYWNlKSB7XG4gICAgICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9jb250YWluZXJzTW9kZWxbYXBpLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIG5hbWVTcGFjZSBpbiBhcGkuY29udGFpbmVycykge1xuICAgICAgICAgICAgICAgIGlmIChhcGkuY29udGFpbmVycy5oYXNPd25Qcm9wZXJ0eShuYW1lU3BhY2UpICYmIGFwaS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZih0YXJnZXQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9jb250YWluZXJzTW9kZWxbbmFtZVNwYWNlXVthcGkuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY2xhc3MgaWYgZWxlbWVudCBpcyBlbmFibGVkIGZvciBpdCBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IHRoZSBjbGFzc1xuICAgICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiZcbiAgICAgICAgICBoYXNDbGFzcyh0YXJnZXQsIG8uY2xhc3Nlcy5vdmVyQWN0aXZlKSAmJlxuICAgICAgICAgIHRhcmdldCAhPT0gX2xhc3RPdmVyRWxlbSkge1xuXG4gICAgICAgICAgaWYgKF9sYXN0T3ZlckVsZW0pIHsgLy8gY2xlYXIgZnJvbSBwcmV2aW91c1xuICAgICAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2xhc3RPdmVyQ2xhc3MgPSBhY2NlcHRzID8gby5jbGFzc2VzLm92ZXJBY2NlcHRzIDogby5jbGFzc2VzLm92ZXJEZWNsaW5lcztcbiAgICAgICAgICBhZGRDbGFzcyh0YXJnZXQsIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICBfbGFzdE92ZXJFbGVtID0gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY2VwdHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgICBpZiAoIV9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAvLyB1cGRhdGUgY29vcmRpbmF0ZXNcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gY291bnQgbWlycm9yIGNvb3JkaWF0ZXNcbiAgICAgIHZhciB4ID0gX2NsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IF9jbGllbnRZIC0gX29mZnNldFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgICAgb2Zmc2V0Qm94O1xuXG4gICAgICAvLyBmaWxsIGV4dHJhIHByb3BlcnRpZXMgaWYgYm91bmRpbmdCb3ggaXMgdXNlZFxuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgcGFnZVggPSBnZXRDb29yZCgncGFnZVgnLCBlKTtcbiAgICAgICAgcGFnZVkgPSBnZXRDb29yZCgncGFnZVknLCBlKTtcbiAgICAgICAgb2Zmc2V0Qm94ID0gZ2V0T2Zmc2V0KG8uYm91bmRpbmdCb3gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW8ubG9ja1kpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWCA+IG9mZnNldEJveC5sZWZ0ICsgX29mZnNldFggJiYgcGFnZVggPCBvZmZzZXRCb3gucmlnaHQgKyBfb2Zmc2V0WHIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoby5ib3VuZGluZ0JveCkgeyAvLyBjaGVjayBhZ2FpbiBpbiBjYXNlIHVzZXIgc2Nyb2xsZWQgdGhlIHZpZXdcbiAgICAgICAgICBpZiAocGFnZVggPCBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIChwYWdlWCAtIG9mZnNldEJveC5sZWZ0KSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX21pcnJvcldpZHRoIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LnJpZ2h0KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIW8ubG9ja1gpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWSA+IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSAmJiBwYWdlWSA8IG9mZnNldEJveC5ib3R0b20gKyBfb2Zmc2V0WWIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGNoZWNrIGFnYWluIGluIGNhc2UgdXNlciBzY3JvbGxlZCB0aGUgdmlld1xuICAgICAgICAgIGlmIChwYWdlWSA8IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSkge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIChwYWdlWSAtIG9mZnNldEJveC50b3ApICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9taXJyb3JIZWlnaHQgLSAocGFnZVkgLSBvZmZzZXRCb3guYm90dG9tKSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSk7XG5cbiAgICAgIC8vIGRvIG5vdCBjb3B5IGluIHNhbWUgY29udGFpbmVyXG4gICAgICBpZiAoZHJvcFRhcmdldCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2xhc3RUYXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpICE9PSAtMSkge1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9sYXN0VGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZWZlcmVuY2UsXG4gICAgICAgIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpO1xuXG4gICAgICAvLyBwcmVwYXJlIG1vZGVscyBvcGVyYXRpb25zXG4gICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgdmFyIHJlZmVyZW5jZUluZGV4O1xuICAgICAgfVxuXG4gICAgICBpZiAoaW1tZWRpYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCBpbW1lZGlhdGUsIF9jbGllbnRYLCBfY2xpZW50WSk7XG4gICAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIGlmIChyZWZlcmVuY2UpIHsgLy8gcmVmZXJlbmNlIGlzIG51bGwgaWYgZHJhZyBpcyBvdmVyIGxhc3QgZWxlbWVudFxuICAgICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBkb21JbmRleE9mKHJlZmVyZW5jZSwgZHJvcFRhcmdldCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoby5yZXZlcnRPblNwaWxsID09PSB0cnVlICYmICFvLmNvcHkpIHtcbiAgICAgICAgLy8gdGhlIGNhc2UgdGhhdCBtaXJyb3IgaXMgbm90IG92ZXIgdmFsaWQgdGFyZ2V0IGFuZCByZXZlcnRpbmcgaXMgb24gYW5kIGNvcHkgaXMgb2ZmXG4gICAgICAgIHJlZmVyZW5jZSA9IF9pbml0aWFsU2libGluZztcbiAgICAgICAgZHJvcFRhcmdldCA9IF9zb3VyY2U7XG5cbiAgICAgICAgLy8gZ2V0dGluZyBtb2RlbCBpbnRpdGlhbCBwcm9wZXJ0aWVzIGludG8gY3VycmVudFxuICAgICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF9pbml0aWFsSW5kZXg7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZSBjYXNlIHRoYXQgbWlycm9yIGlzIG5vdCBvdmVyIHZhbGlkIHRhcmdldCBhbmQgcmVtb3ZpbmcgaXMgb24gb3IgY29weSBpcyBvblxuICAgICAgICBpZiAoKG8uY29weSB8fCBvLnJlbW92ZU9uU3BpbGwgPT09IHRydWUpICYmIGl0ZW0ucGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIG9yIGNvcHkgb2YgaXRlbVxuICAgICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShyZWZlcmVuY2VJbmRleCwgMSk7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseUFzeW5jKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwgfHwgcmVmZXJlbmNlICE9PSBpdGVtICYmIHJlZmVyZW5jZSAhPT0gbmV4dEVsKGl0ZW0pKSB7XG4gICAgICAgIC8vIG1vdmluZyBpdGVtL2NvcHkgdG8gbmV3IGNvbnRhaW5lciBmcm9tIHByZXZpb3VzIG9uZVxuICAgICAgICBfY3VycmVudFNpYmxpbmcgPSByZWZlcmVuY2U7XG5cbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIGRyb3BUYXJnZXQuaW5zZXJ0QmVmb3JlKGl0ZW0sIHJlZmVyZW5jZSk7IC8vIGlmIHJlZmVyZW5jZSBpcyBudWxsIGl0ZW0gaXMgaW5zZXJ0ZWQgYXQgdGhlIGVuZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmVJbkNvbnRhaW5lcnNNb2RlbChyZWZlcmVuY2VJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG8uc2NvcGUuJGVtaXQoJ3NoYWRvdycsIGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZUluQ29udGFpbmVyc01vZGVsKHJlZmVyZW5jZUluZGV4KSB7XG4gICAgICBpZiAoX2xhc3RUYXJnZXRNb2RlbCA9PT0gX3RhcmdldE1vZGVsKSB7XG4gICAgICAgIGlmIChyZWZlcmVuY2VJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gX3RhcmdldE1vZGVsLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSByZWZlcmVuY2VJbmRleCA+IF9jdXJyZW50SW5kZXggPyByZWZlcmVuY2VJbmRleCAtIDEgOiByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShpbmRleCwgMCwgX2xhc3RUYXJnZXRNb2RlbC5zcGxpY2UoX2N1cnJlbnRJbmRleCwgMSlbMF0pO1xuICAgICAgICBfY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVmZXJlbmNlSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF90YXJnZXRNb2RlbC5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICghby5jb3B5IHx8IF9sYXN0VGFyZ2V0TW9kZWwgIT09IF9zb3VyY2VNb2RlbCkgeyAvLyBkb250IHJlbW92ZSBvcmlnaW5hbCBmcm9tIHNvdXJjZSB3aGlsZSBjb3B5aW5nXG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbC5zcGxpY2UoX2N1cnJlbnRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvLmNvcHkgfHwgX3RhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCkgPT09IC0xKSB7IC8vIGRvbnQgcGxhY2UgY29weSB0d2ljZSBpbiBvbmUgZHJhZ1xuICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDAsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgICAgX2N1cnJlbnRJbmRleCA9IHJlZmVyZW5jZUluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkcm9vdFNjb3BlLiRhcHBseUFzeW5jKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsQ29udGFpbmVyKGUpIHtcbiAgICAgIGlmIChfdGFyZ2V0Q29udGFpbmVyKSB7XG4gICAgICAgIF90YXJnZXRDb250YWluZXIuc2Nyb2xsVG9wICs9IGUuZGVsdGFZXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF9taXJyb3IgPSBfaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBfbWlycm9yV2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgX21pcnJvckhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgX21pcnJvci5zdHlsZS53aWR0aCA9IGdldFJlY3RXaWR0aChyZWN0KSArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLmhlaWdodCA9IGdldFJlY3RIZWlnaHQocmVjdCkgKyAncHgnO1xuICAgICAgcm1DbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICBhZGRDbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMubWlycm9yKTtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoX21pcnJvcik7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvbicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgIGFkZENsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29uJywgJ3doZWVsJywgc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9taXJyb3IsIF9pdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJtQ2xhc3MoYm9keSwgby5jbGFzc2VzLnVuc2VsZWN0YWJsZSk7XG4gICAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgJ29mZicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29mZicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICAgIF9taXJyb3IucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChfbWlycm9yKTtcbiAgICAgICAgX21pcnJvciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgdGFyZ2V0KSB7XG4gICAgICB2YXIgaW1tZWRpYXRlID0gdGFyZ2V0O1xuICAgICAgd2hpbGUgKGltbWVkaWF0ZSAhPT0gZHJvcFRhcmdldCAmJiBpbW1lZGlhdGUucGFyZW50RWxlbWVudCAhPT0gZHJvcFRhcmdldCkge1xuICAgICAgICBpbW1lZGlhdGUgPSBpbW1lZGlhdGUucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChpbW1lZGlhdGUgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbW1lZGlhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIHRhcmdldCwgeCwgeSkge1xuICAgICAgdmFyIGhvcml6b250YWwgPSBvLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIHJlZmVyZW5jZSA9IHRhcmdldCAhPT0gZHJvcFRhcmdldCA/IGluc2lkZSgpIDogb3V0c2lkZSgpO1xuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcblxuICAgICAgZnVuY3Rpb24gb3V0c2lkZSgpIHsgLy8gc2xvd2VyLCBidXQgYWJsZSB0byBmaWd1cmUgb3V0IGFueSBwb3NpdGlvblxuICAgICAgICB2YXIgbGVuID0gZHJvcFRhcmdldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgZWw7XG4gICAgICAgIHZhciByZWN0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBlbCA9IGRyb3BUYXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmIHJlY3QubGVmdCA+IHgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFob3Jpem9udGFsICYmIHJlY3QudG9wID4geSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaW5zaWRlKCkgeyAvLyBmYXN0ZXIsIGJ1dCBvbmx5IGF2YWlsYWJsZSBpZiBkcm9wcGVkIGluc2lkZSBhIGNoaWxkIGVsZW1lbnRcbiAgICAgICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeCA+IHJlY3QubGVmdCArIGdldFJlY3RXaWR0aChyZWN0KSAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHkgPiByZWN0LnRvcCArIGdldFJlY3RIZWlnaHQocmVjdCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzb2x2ZShhZnRlcikge1xuICAgICAgICByZXR1cm4gYWZ0ZXIgPyBuZXh0RWwodGFyZ2V0KSA6IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGwoc2Nyb2xsUHJvcCwgb2Zmc2V0UHJvcCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbb2Zmc2V0UHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbb2Zmc2V0UHJvcF07XG4gICAgICB9XG4gICAgICBpZiAoZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRFbGVtZW50W3Njcm9sbFByb3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJvZHlbc2Nyb2xsUHJvcF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoJ3Njcm9sbFRvcCcsICdwYWdlWU9mZnNldCcpLFxuICAgICAgICBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKCdzY3JvbGxMZWZ0JywgJ3BhZ2VYT2Zmc2V0Jyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCArIHNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20gKyBzY3JvbGxUb3BcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEJlaGluZFBvaW50KHBvaW50LCB4LCB5KSB7XG4gICAgICBpZiAoIXggJiYgIXkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgcCA9IHBvaW50IHx8IHt9LFxuICAgICAgICBzdGF0ZSA9IHAuY2xhc3NOYW1lLFxuICAgICAgICBlbDtcbiAgICAgIHAuY2xhc3NOYW1lICs9ICcgJyArIG8uY2xhc3Nlcy5oaWRlO1xuICAgICAgZWwgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgICAgcC5jbGFzc05hbWUgPSBzdGF0ZTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVnRXZlbnQoZWwsIG9wLCB0eXBlLCBmbikge1xuICAgIHZhciB0b3VjaCA9IHtcbiAgICAgICAgbW91c2V1cDogJ3RvdWNoZW5kJyxcbiAgICAgICAgbW91c2Vkb3duOiAndG91Y2hzdGFydCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ3RvdWNobW92ZSdcbiAgICAgIH0sXG4gICAgICAkZWwgPSBhbmd1bGFyLmVsZW1lbnQoZWwpO1xuXG4gICAgaWYgKHR5cGUgIT09ICd3aGVlbCcpIHtcbiAgICAgICRlbFtvcF0odG91Y2hbdHlwZV0sIGZuKVxuICAgIH07XG4gICAgJGVsW29wXSh0eXBlLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXZlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0RWwoZWwpIHtcbiAgICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG5cbiAgICBmdW5jdGlvbiBtYW51YWxseSgpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgICBkbyB7XG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vQ2Fubm90IHVzZSBhbmd1bGFyLmlzRWxlbWVudCBiZWNhdXNlIHdlIG5lZWQgdG8gY2hlY2sgcGxhaW4gZG9tIGVsZW1lbnQsIG5vIGpRbGl0ZSB3cmFwcGVkXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcbiAgICAgIG8gJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbC5jbGFzc05hbWUuaW5kZXhPZignICcgKyBjbGFzc05hbWUpID09PSAtMSkge1xuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBybUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBhbmd1bGFyLmVsZW1lbnQoZWwpLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuICgnICcgKyBlbC5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyAnICsgY2xhc3NOYW1lICsgJyAnKSA+IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RXZlbnRIb3N0KGUpIHtcbiAgICAvLyBvbiB0b3VjaGVuZCBldmVudCwgd2UgaGF2ZSB0byB1c2UgYGUuY2hhbmdlZFRvdWNoZXNgXG4gICAgLy8gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzE5MjU2My90b3VjaGVuZC1ldmVudC1wcm9wZXJ0aWVzXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8zNFxuICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXTtcbiAgICB9XG4gICAgaWYgKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvb3JkKGNvb3JkLCBlKSB7XG4gICAgdmFyIGhvc3QgPSBnZXRFdmVudEhvc3QoZSk7XG4gICAgdmFyIG1pc3NNYXAgPSB7XG4gICAgICBwYWdlWDogJ2NsaWVudFgnLCAvLyBJRThcbiAgICAgIHBhZ2VZOiAnY2xpZW50WScgLy8gSUU4XG4gICAgfTtcbiAgICBpZiAoY29vcmQgaW4gbWlzc01hcCAmJiAhKGNvb3JkIGluIGhvc3QpICYmIG1pc3NNYXBbY29vcmRdIGluIGhvc3QpIHtcbiAgICAgIGNvb3JkID0gbWlzc01hcFtjb29yZF07XG4gICAgfVxuICAgIHJldHVybiBob3N0W2Nvb3JkXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJlY3RXaWR0aChyZWN0KSB7XG4gICAgcmV0dXJuIHJlY3Qud2lkdGggfHwgKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdEhlaWdodChyZWN0KSB7XG4gICAgcmV0dXJuIHJlY3QuaGVpZ2h0IHx8IChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbUluZGV4T2YoY2hpbGQsIHBhcmVudCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFuZ3VsYXIuZWxlbWVudChwYXJlbnQpLmNoaWxkcmVuKCksIGNoaWxkKTtcbiAgfVxuXG59XSk7XG4iXX0=
