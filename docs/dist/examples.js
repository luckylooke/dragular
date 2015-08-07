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
      .state('docs', {
        url: '/docs',
        templateUrl: 'partials/partial-docs.html',
        controller: ["$state", function ($state) {
          // go to install notes by default
          $state.go('docs.detail', {link: 'docsInstall'});
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
$templateCache.put("exampleBasic/exampleBasic.html","<div class=\'parent\'>\n  <h2>Basic</h2>\n  <label for=\'hy\'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\n  <div class=\'wrapper\' ng-controller=\"Basic\">\n    <div class=\'containerVertical\'>\n      <div>Move me, but you can only drop me in one of these containers.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n      <div>Item 3.</div>\n      <div>Item 6.</div>\n    </div>\n    <div class=\'containerVertical\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n      <div>Item 4.</div>\n      <div>Item 5.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Basic\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\n    dragularService($element.children());\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n  &lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;\n    &lt;div class=\'containerVertical\'&gt;\n        &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\n        &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n        &lt;div&gt;Item 3.&lt;/div&gt;\n        &lt;div&gt;Item 6.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\'containerVertical\'&gt;\n        &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n        &lt;div&gt;Item 4.&lt;/div&gt;\n        &lt;div&gt;Item 5.&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleBasicWithModel/exampleBasicWithModel.html","<div class=\'parent\'>\n  <h2>Basic - with model</h2>\n  <label for=\'hy\'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\n  <div class=\'wrapper\' ng-controller=\"BasicModel\">\n    <div class=\'tableRow\'>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\'containerVertical\'>\n        <pre>Items1:\n          <br/>{{items1 | json}}</pre>\n      </div>\n      <div class=\'containerVertical\'>\n        <pre>Items2:\n          <br/>{{items2 | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'BasicModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, but you can only drop me in one of these containers.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    var containers = $element.children().children();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2]\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;\n    &lt;div class=\'tableRow\'&gt;\n        &lt;div class=\'containerVertical\'&gt;\n            &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\'containerVertical\'&gt;\n            &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;tableRow&quot;&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items1:\n                &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items2:\n                &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleBoundingBox/exampleBoundingBox.html","        <div class=\'parent\'>\n            <h2>BoundingBox</h2>\n            <label for=\'hy\'>You can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBox\">\n                <div class=\'containerVertical\'>\n                    <div>This items cannot cross its example element, just try it your selves.</div>\n                    <div>Item 2.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                </div>\n                <div class=\'containerVertical\'>\n                    <div>This items cannot cross its example element, just try it your selves.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children(), {\n    boundingBox: $element\n  });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleBoundingBoxLockX/exampleBoundingBoxLockX.html","<div class=\'parent\'>\n            <h2>BoundingBox and lockX</h2>\n            <label for=\'hy\'>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockX\">\n                <div class=\'containerHorizontal\'>\n                    <div class=\'boundingBox\'>\n                        <div class=\"width25\">Items are locked in X axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\n                        <div class=\"width25\">item 2</div>\n                        <div class=\"width25\">item 3</div>\n                        <div class=\"width25\">item 4</div>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children()[0].children(), {\n    boundingBox: $element.children()[0],\n    lockX: true\n  });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleBoundingBoxLockY/exampleBoundingBoxLockY.html","        <div class=\'parent\'>\n            <h2>BoundingBox and LockY</h2>\n            <label for=\'hy\'>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockY\">\n                <div class=\'containerVertical\'>\n                    <div class=\'boundingBox\'>\n                        <div>Items are locked in Y axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\n                        <div>item 2</div>\n                        <div>item 3</div>\n                        <div>item 4</div>\n                        <div>item 5</div>\n                        <div>item 6</div>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children()[0].children(), {\n    boundingBox: $element.children()[0],\n    lockY: true\n  });\n        </code>\n      </pre>\n        </div>");
$templateCache.put("exampleCopy/exampleCopy.html","<div class=\'parent\'>\n  <h2>Copy</h2>\n  <label for=\'hy\'>Copying stuff is great too.</label>\n  <div class=\'wrapper\' ng-controller=\"Copy\" ng-hide=\"globals.showModelExamples\">\n    <div id=\'left2\' class=\'containerVertical\'>\n      <div>Move me, and make copy on drop.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n    </div>\n    <div id=\'right2\' class=\'containerVertical\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Copy\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\n    dragularService($element.children(), {\n      copy: true\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Copy&quot; ng-hide=&quot;globals.showModelExamples&quot;&gt;\n    &lt;div id=\'left2\' class=\'containerVertical\'&gt;\n      &lt;div&gt;Move me, and make copy on drop.&lt;/div&gt;\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div id=\'right2\' class=\'containerVertical\'&gt;\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleCopyWithModel/exampleCopyWithModel.html","<div class=\'parent\'>\n  <h2>Copy - with model</h2>\n  <label for=\'hy\'>Copying stuff is great too.</label>\n  <div class=\'wrapper\' ng-controller=\"CopyModel\">\n    <div class=\'tableRow\'>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'containerVertical\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\'containerVertical\'>\n        <div>Items1:\n          <br/>{{items1 | json}}</div>\n      </div>\n      <div class=\'containerVertical\'>\n        <div>Items2:\n          <br/>{{items2 | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'CopyModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, and make copy on drop.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    var containers = $element.children().children();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2],\n      copy: true\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;CopyModel&quot; ng-show=&quot;globals.showModelExamples&quot;&gt;\n    &lt;div class=\'tableRow\'&gt;\n      &lt;div class=\'containerVertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\'containerVertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;tableRow&quot;&gt;\n      &lt;div class=&quot;container&quot;&gt;\n        &lt;div&gt;Items1:\n          &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;container&quot;&gt;\n        &lt;div&gt;Items2:\n          &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleCustomClasses/exampleCustomClasses.html","<div class=\'parent\'>\n    <h2>Custom classes</h2>\n    <label for=\'hy\'>You can overwrite buildin classes by providing classes names in object via options.classes.</label>\n    <div class=\'wrapper\' ng-controller=\"CustomClasses\">\n        <div id=\'left4\' class=\'containerVertical\'>\n            <div>Move me, but you can only drop me in one of these containers.</div>\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n            <div>Item 3.</div>\n            <div>Item 6.</div>\n        </div>\n        <div id=\'right3\' class=\'containerVertical\'>\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n        </div>\n    </div>\n    <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], { classes: {\n    mirror: \'custom-green-mirror\'\n  } });\n\n  // Default classes are:\n  option.classes = {\n    mirror: \'gu-mirror\',\n    hide: \'gu-hide\',\n    unselectable: \'gu-unselectable\',\n    transit: \'gu-transit\',\n    overActive: \'gu-over-active\',\n    overAccepts: \'gu-over-accept\',\n    overDeclines: \'gu-over-decline\'\n  };\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleDirective/exampleDirective.html","<div class=\'parent\'>\n  <h2>Directive</h2>\n  <label for=\'hy\'>Same as custom classes example, but showing use of directive.</label>\n  <div class=\'wrapper\' ng-controller=\"Directive\">\n    <div class=\'containerVertical\' dragular=\"dragularOptions\">\n      <div>Move me, but you can only drop me in one of these containers.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n      <div>Item 3.</div>\n      <div>Item 6.</div>\n    </div>\n    <div class=\'containerVertical\' dragular=\'{\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"same\"}\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n      <div>Item 4.</div>\n      <div>Item 5.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Directive\', [\'$scope\', \'dragularService\', function TodoCtrl($scope) {\n    $scope.dragularOptions = {\n      classes: {\n        mirror: \'custom-green-mirror\'\n      },\n      nameSpace: \'common\' // just connecting left and right container\n    };\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Directive&quot;&gt;\n    &lt;div class=\'containerVertical\' dragular=&quot;dragularOptions&quot;&gt;\n      &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n      &lt;div&gt;Item 3.&lt;/div&gt;\n      &lt;div&gt;Item 6.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\'containerVertical\' dragular=\'{&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;same&quot;}\'&gt;\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n      &lt;div&gt;Item 4.&lt;/div&gt;\n      &lt;div&gt;Item 5.&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
$templateCache.put("exampleDirectiveWithModel/exampleDirectiveWithModel.html","<div class=\'parent\'>\n  <h2>Directive - with model</h2>\n  <label for=\'hy\'>Same as custom classes example, but showing use of directive.</label>\n  <div class=\'wrapper\' ng-controller=\"DirectiveModel\">\n    <div class=\'tableRow\'>\n      <div class=\'containerVertical\' dragular=\"dragularOptions\">\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'containerVertical\' dragular=\'{\"containersModel\":\"items2\",\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"common\"}\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"tableRow\">\n      <div class=\'containerVertical\'>\n        <div>Items1:\n          <br/>{{items1 | json}}</div>\n      </div>\n      <div class=\'containerVertical\'>\n        <div>Items2:\n          <br/>{{items2 | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n       \n        <code>\n// JS\n  controller(\'DirectiveModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, and make copy on drop.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    $scope.dragularOptions = {\n      containersModel: $scope.items1,\n      classes: {\n        mirror: \'custom-green-mirror\'\n      },\n      nameSpace: \'common\' // just connecting left and right container\n    };\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n &lt;div class=\'wrapper\' ng-controller=&quot;DirectiveModel&quot;&gt;\n  &lt;div class=\'containerVertical\' dragular=&quot;dragularOptions&quot;&gt;\n    &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=\'containerVertical\' dragular=\'{&quot;containersModel&quot;:&quot;items2&quot;,&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;common&quot;}\'&gt;\n    &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
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
$templateCache.put("exampleScrollingDrag/exampleScrollingDrag.html","<div class=\'parent\'>\n    <h2>Scrolling drag</h2>\n    <label for=\'hy\'> Containre can be scrolled by hovering dragged item over most top visible item or most bottom, scroll direction respectively.\n    </label>\n    <div ng-controller=\"ScrollingDrag\">\n        <div class=\"containerVertical heightLimit\">\n            <div>Item 1</div>\n            <div>Item 2</div>\n            <div>Item 3.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n            <div>Item 6.</div>\n            <div>Item 7.</div>\n            <div>Item 9.</div>\n            <div>Item 10.</div>\n            <div>Item 11.</div>\n            <div>Item 12.</div>\n            <div>Item 13.</div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("partials/partial-contribute.html","<div class=\'container\'>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      Contributing notes will be moved here, since then, please use <a href=\"https://github.com/luckylooke/dragular/blob/master/CONTRIBUTING.md\">contribution notes on github</a>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("partials/partial-docs.html","<div class=\'container\'>\n  <div id=\"rowOffcanvas\" class=\"row row-offcanvas row-offcanvas-left\">\n    <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\n      <div class=\"list-group\">\n        <a ui-sref=\"docs.detail({link:\'docsInstall\'})\" ui-sref-active=\"active\" class=\"list-group-item\">Installation</a>\n        <a ng-repeat=\"example in examplesList\" ui-sref=\"docs.detail({link:example.link})\" ui-sref-active=\"active\" class=\"list-group-item\">{{example.title}}</a>\n      </div>\n    </div>\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-xs-12 col-sm-9\">\n      <p class=\"pull-left visible-xs\">\n        <button type=\"button\" ng-click=\"toggleSidebar()\" class=\"btn btn-primary btn-xs\">Toggle nav</button>\n      </p>\n      <!-- docs.detail -->\n      <div ui-view></div>\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");
$templateCache.put("partials/partial-home.html","<div class=\'container\'>\n  <div class=\"row\">\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-lg-12\">\n      <div class=\"jumbotron\">\n        <h1>DRAGULAR</h1>\n        <p>Angular drag&drop based on <a href=\"http://github.com/bevacqua/dragula\">dragula</a>.</p>\n        <p><a class=\"btn btn-primary btn-lg\" ui-sref=\"docs\" role=\"button\">Live examples in docs</a></p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p>Browser support includes every sane browser and **IE7+**. <sub>_(Granted you polyfill the functional `Array` methods in ES5)_</sub></p>\n          <h2>Inspiration</h2>\n          <p>Have you ever wanted a drag and drop library that just works? That actually understands where to place the elements when they are dropped? That doesn’t need you to do a zillion things to get it to work? Well, so did <a href=\"https://github.com/bevacqua\">Nicolas Bevacqua</a> and I have forked it into angular module and also put some features!</p>\n          <p><b>Actual version 1.3.1 is based on dragula 2.0.3 and tested with angular 1.4.1.</b></p>\n          <h2>Differences of dragular (against dragula)</h2>\n          <ul>\n            <li>replaced crossvent with angulars event binding</li>\n            <li>replaced contra.emitter with $scope.$emit if scope provided in options (options.scope)</li>\n            <li>encapsulated the code into angular factory (dragularService)</li>\n            <li>created directive dragular where options can be passed providing scope property name</li>\n            <li>both service and directive provided as angular module (dragularModule)</li>\n            <li>automatic direction if not provided in options, instead of default vertical</li>\n            <li>accepting arraylike objects as containers array</li>\n            <li>accepting custom classes via option.classes</li>\n            <li>namespaced containers groups available via option.nameSpace</li>\n            <li>boundingBox (dragging element can me moved only in specific area)</li>\n            <li>lockX/Y (dragging element can me moved only in specific direction)</li>\n            <li>more examples</li>\n            <li>accept JSON options in dragular directive (#2)</li>\n            <li>add/remove with ng-repeat</li>\n            <li>added syntax highlighter to example codes</li>\n          </ul>\n          <h2>Todo</h2>\n          <ul>\n            <li>gh-pages as mixed api and examples</li>\n            <li>example for delay</li>\n            <li>o.isContainer in _isContainer (fn o.isContainerGetModel(containerElm))</li>\n            <li>solve mixing with and without model containers</li>\n            <li>remove npm workflow</li>\n            <li>support selectors in service (#2)</li>\n          </ul>\n          <h2>Features</h2>\n          <ul>\n            <li>provided as service and also as directive</li>\n            <li>Super easy to set up</li>\n            <li>No bloated dependencies</li>\n            <li><strong>Figures out sort order</strong> on its own</li>\n            <li>A shadow where the item would be dropped offers <strong>visual feedback</strong></li>\n            <li>Touch events!</li>\n          </ul>\n          <h2>For installation, usage and examples go to <a ui-sref=\"docs\">docs</a></h2>\n        </div>\n      </div>\n      <!--/row-->\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");}]);

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0LmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZXNBcHAuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlc1JvdXRlci5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL3RlbXBsYXRlcy5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhckRpcmVjdGl2ZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhck1vZHVsZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsU0FBUyxDQUFDLFlBQVksbUJBQW1CLFNBQVMsU0FBUyxVQUFVLGlCQUFpQjtJQUNoRyxnQkFBZ0IsU0FBUztNQUN2Qjs7O0FDWk47QUFDQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLFNBQVMsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDaEcsZ0JBQWdCLFNBQVM7OztBQUc3QjtHQUNHLFdBQVcsY0FBYyxDQUFDLFVBQVUsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFFBQVEsVUFBVSxpQkFBaUI7SUFDdkgsT0FBTyxTQUFTLENBQUM7TUFDZixTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLE9BQU8sU0FBUyxDQUFDO01BQ2YsU0FBUztPQUNSO01BQ0QsU0FBUztPQUNSO01BQ0QsU0FBUztPQUNSO01BQ0QsU0FBUzs7SUFFWCxJQUFJLGFBQWEsU0FBUyxXQUFXLEdBQUcsR0FBRztJQUMzQyxnQkFB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LGtCQUFrQixFQUFFLGVBQWUsUUFBUTtNQUMvQyxPQUFPLEVBQUUsZUFBZTs7SUFFMUIsT0FBTzs7O0VBR1QsU0FBUyxTQUFTLE9BQU8sR0FBRztJQUMxQixJQUFJLE9BQU8sYUFBYTtJQUN4QixJQUFJLFVBQVU7TUFDWixPQUFPO01BQ1AsT0FBTzs7SUFFVCxJQUFJLFNBQVMsV0FBVyxFQUFFLFNBQVMsU0FBUyxRQUFRLFVBQVUsTUFBTTtNQUNsRSxRQUFRLFFBQVE7O0lBRWxCLE9BQU8sS0FBSzs7O0VBR2QsU0FBUyxhQUFhLE1BQU07SUFDMUIsT0FBTyxLQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUs7OztFQUcxQyxTQUFTLGNBQWMsTUFBTTtJQUMzQixPQUFPLEtBQUssV0FBVyxLQUFLLFNBQVMsS0FBSzs7O0VBRzVDLFNBQVMsV0FBVyxPQUFPLFFBQVE7SUFDakMsT0FBTyxNQUFNLFVBQVUsUUFBUSxLQUFLLFFBQVEsUUFBUSxRQUFRLFlBQVk7Ozs7QUFJNUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0Jhc2ljJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICB9XSk7IiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0Jhc2ljJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICB9XSk7XG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCYXNpY01vZGVsJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XG4gICAgICBjb250ZW50OiAnTW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgICRzY29wZS5pdGVtczIgPSBbe1xuICAgICAgY29udGVudDogJ0l0ZW0gNSdcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA2J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDcnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gOCdcbiAgICB9XTtcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKTtcbiAgICBkcmFndWxhclNlcnZpY2UoW2NvbnRhaW5lcnNbMF0sY29udGFpbmVyc1sxXV0se1xuICAgICAgY29udGFpbmVyc01vZGVsOiBbJHNjb3BlLml0ZW1zMSwgJHNjb3BlLml0ZW1zMl1cbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0JvdW5kaW5nQm94JywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gJGVsZW1lbnRbMF07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIGJvdW5kaW5nQm94OiBib3VuZGluZ0JveFxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQm91bmRpbmdCb3hMb2NrWCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIHZhciBib3VuZGluZ0JveCA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKVswXTtcbiAgICBkcmFndWxhclNlcnZpY2UoYm91bmRpbmdCb3gsIHtcbiAgICAgIGJvdW5kaW5nQm94OiBib3VuZGluZ0JveCxcbiAgICAgIGxvY2tYOiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCb3VuZGluZ0JveExvY2tZJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5jaGlsZHJlbigpWzBdO1xuICAgIGRyYWd1bGFyU2VydmljZShib3VuZGluZ0JveCwge1xuICAgICAgYm91bmRpbmdCb3g6IGJvdW5kaW5nQm94LFxuICAgICAgbG9ja1k6IHRydWVcbiAgICB9KTtcbiAgfV0pIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0NvcHknLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgY29weTogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQ29weU1vZGVsJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XG4gICAgICBjb250ZW50OiAnTW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgICRzY29wZS5pdGVtczIgPSBbe1xuICAgICAgY29udGVudDogJ0l0ZW0gNSdcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA2J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDcnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gOCdcbiAgICB9XTtcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKTtcbiAgICBkcmFndWxhclNlcnZpY2UoW2NvbnRhaW5lcnNbMF0sY29udGFpbmVyc1sxXV0se1xuICAgICAgY29udGFpbmVyc01vZGVsOiBbJHNjb3BlLml0ZW1zMSwgJHNjb3BlLml0ZW1zMl0sXG4gICAgICBjb3B5OiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdDdXN0b21DbGFzc2VzJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbWlycm9yOiAnY3VzdG9tLWdyZWVuLW1pcnJvcidcbiAgICAgIH1cbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignRGlyZWN0aXZlJywgWyckc2NvcGUnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlKSB7XG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbWlycm9yOiAnY3VzdG9tLWdyZWVuLW1pcnJvcidcbiAgICAgIH0sXG4gICAgICBuYW1lU3BhY2U6ICdzYW1lJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXG4gICAgfTtcbiAgfV0pOyIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0RpcmVjdGl2ZU1vZGVsJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XG4gICAgICBjb250ZW50OiAnTW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgICRzY29wZS5pdGVtczIgPSBbe1xuICAgICAgY29udGVudDogJ0l0ZW0gNSdcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA2J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDcnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gOCdcbiAgICB9XTtcbiAgICAkc2NvcGUuZHJhZ3VsYXJPcHRpb25zID0ge1xuICAgICAgY29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXMxLFxuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBtaXJyb3I6ICdjdXN0b20tZ3JlZW4tbWlycm9yJ1xuICAgICAgfSxcbiAgICAgIG5hbWVTcGFjZTogJ2NvbW1vbicgLy8ganVzdCBjb25uZWN0aW5nIGxlZnQgYW5kIHJpZ2h0IGNvbnRhaW5lclxuICAgIH07XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gLmNvbnRyb2xsZXIoJ0RyYWdPdmVyQ2xhc3NlcycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcbiAgICAgIG5hbWVTcGFjZTogJ2FwcGxlcycsXG4gICAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcbiAgICB9KTtcbiAgICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMV0sICRlbGVtZW50LmNoaWxkcmVuKClbM11dLCB7XG4gICAgICBuYW1lU3BhY2U6ICdvcmFuZ2VzJyxcbiAgICAgIGRyYWdPdmVyQ2xhc3NlczogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignRXZlbnRzJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlLCAkdGltZW91dCkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBzY29wZTogJHNjb3BlXG4gICAgfSk7XG4gICAgJHNjb3BlLiRvbignZHJhZycsIGZ1bmN0aW9uKGUsIGVsKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoJyBleC1tb3ZlZCcsICcnKTtcbiAgICB9KTtcbiAgICAkc2NvcGUuJG9uKCdkcm9wJywgZnVuY3Rpb24oZSwgZWwpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgZXgtbW92ZWQnO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG5cbiAgICAvLyAkc2NvcGUuJG9uKCdjbG9uZWQnLCBteUZuKCdjbG9uZWQnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignZHJhZycsIG15Rm4oJ2RyYWcnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignY2FuY2VsJywgbXlGbignY2FuY2VsJykpO1xuICAgIC8vICRzY29wZS4kb24oJ2Ryb3AnLCBteUZuKCdkcm9wJykpO1xuICAgIC8vICRzY29wZS4kb24oJ3JlbW92ZScsIG15Rm4oJ3JlbW92ZScpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdkcmFnZW5kJywgbXlGbignZHJhZ2VuZCcpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdzaGFkb3cnLCBteUZuKCdzaGFkb3cnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignc2hhZG93UmVtb3ZlZCcsIG15Rm4oJ3NoYWRvdycpKTtcblxuICAgIC8vIGZ1bmN0aW9uIG15Rm4oZXZlbnROYW1lKSB7XG4gICAgLy8gICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSwgYXJndW1lbnRzKTtcbiAgICAvLyAgIH07XG4gICAgLy8gfVxuXG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdIYW5kbGUnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTmFtZSA9PT0gJ2hhbmRsZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOYW1lU3BhY2VzJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLCAkZWxlbWVudC5jaGlsZHJlbigpWzJdXSwge1xuICAgICAgbmFtZVNwYWNlOiAnYXBwbGVzJ1xuICAgIH0pO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzFdLCB7XG4gICAgICBuYW1lU3BhY2U6ICdvcmFuZ2VzJ1xuICAgIH0pO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzNdLCB7IC8vIG1peGVkXG4gICAgICBuYW1lU3BhY2U6IFsnb3JhbmdlcycsICdhcHBsZXMnXVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmVzdGVkTmdSZXBlYXQnLCBbJyR0aW1lb3V0JywgJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkdGltZW91dCwgJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIHRpbWVvdW50IGR1ZSB0byBuZ1JlcGVhdCB0byBiZSByZWFkeVxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucygncm93LWhhbmRsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gICAgJHNjb3BlLml0ZW1zID0gW3tcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGEzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhNCdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIxJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGI0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzQnXG4gICAgICB9XVxuICAgIH1dO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwnLCBbJyR0aW1lb3V0JywgJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkdGltZW91dCwgJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIHRpbWVvdW50IGR1ZSB0byBuZXN0ZWQgbmdSZXBlYXQgdG8gYmUgcmVhZHlcbiAgICAgIHZhciBjb250YWluZXIgPSAkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksXG4gICAgICAgIHBhcmVudENvbnRhaW5lcnMgPSBjb250YWluZXIuY2hpbGRyZW4oKSxcbiAgICAgICAgbmVzdGVkQ29udGFpbmVycyA9IFtdO1xuXG4gICAgICBkcmFndWxhclNlcnZpY2UoY29udGFpbmVyLCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucygncm93LWhhbmRsZScpO1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGNvbGxlY3QgbmVzdGVkIGNvbnRpYW5lcnNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Q29udGFpbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXN0ZWRDb250YWluZXJzLnB1c2gocGFyZW50Q29udGFpbmVycy5lcShpKS5jaGlsZHJlbigpWzFdKTtcbiAgICAgIH07XG5cbiAgICAgIGRyYWd1bGFyU2VydmljZShuZXN0ZWRDb250YWluZXJzLCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAoZnVuY3Rpb24gZ2V0TmVzdGVkQ29udGFpbmVyc01vZGVsKCl7XG4gICAgICAgICAgdmFyIHBhcmVudCA9ICRzY29wZS5pdGVtcyxcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbCA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwucHVzaChwYXJlbnRbaV0uaXRlbXMpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnNNb2RlbDtcbiAgICAgICAgfSkoKVxuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gICAgJHNjb3BlLml0ZW1zID0gW3tcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGEzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhNCdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIxJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGI0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzQnXG4gICAgICB9XVxuICAgIH1dO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmdSZXBlYXQnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XG4gICAgJHNjb3BlLml0ZW1zID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdUcnkgdG8gYWRkIG9yIHJlbW92ZSBzb21lIGVsZW1lbnRzIChjbGljayBvbiArLSBidXR0b25zKSwgeW91IHdpbGwgc2VlIHRoYXQgaXQgaXMgbm90IHByb2JsZW0gZm9yIGRyYWd1bGFyLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAyJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDMnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNCdcbiAgICB9XTtcbiAgICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uIGFkZEl0ZW0oKSB7XG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pICsgMTtcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDAsIHtcbiAgICAgICAgY29udGVudDogdGhpcy5pdGVtLmNvbnRlbnQgKyAnLWNvcHknXG4gICAgICB9KTtcbiAgICB9O1xuICAgICRzY29wZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbSgpIHtcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSk7XG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZ1JlcGVhdFdpdGhNb2RlbCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICRzY29wZS5pdGVtcyA9IFt7XG4gICAgICBjb250ZW50OiAnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSwge2NvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zfSk7XG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgJy1jb3B5J1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oKSB7XG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ1JlbW92ZU9uU3BpbGwnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgcmVtb3ZlT25TcGlsbDogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignUmV2ZXJ0T25TcGlsbCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICByZXZlcnRPblNwaWxsOiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdTY3JvbGxpbmdEcmFnJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyB2YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcblxuXG5yZXF1aXJlKCcuLi8uLi8uLi9zcmMvZHJhZ3VsYXJNb2R1bGUnKTtcbnJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5cbi8qKlxuICogIE1vZHVsZSBFeGFtcGxlIEFwcFxuICpcbiAqICBERU1PIGFwcCBmb3IgZHJhZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXJcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdleGFtcGxlc0FwcCcsIFsnZHJhZ3VsYXJNb2R1bGUnLCAndGVtcGxhdGVzJywgJ3VpLnJvdXRlciddKS5jb250cm9sbGVyKCdFeEFwcEN0cmwnLCBbJyRzY29wZScsICckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKSB7XG4gICAgJHNjb3BlLmV4YW1wbGVzTGlzdCA9IFt7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJhc2ljL2V4YW1wbGVCYXNpYy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCYXNpYycsXG4gICAgICAgIHRpdGxlOiAnQmFzaWMnXG4gICAgfSx7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCYXNpY1dpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnQmFzaWMgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRGlyZWN0aXZlL2V4YW1wbGVEaXJlY3RpdmUuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRGlyZWN0aXZlJyxcbiAgICAgICAgdGl0bGU6ICdEaXJlY3RpdmUnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ0RpcmVjdGl2ZSAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVFdmVudHMvZXhhbXBsZUV2ZW50cy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVFdmVudHMnLFxuICAgICAgICB0aXRsZTogJ0V2ZW50cydcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlUmVtb3ZlT25TcGlsbCcsXG4gICAgICAgIHRpdGxlOiAnUmVtb3ZlIG9uIHNwaWxsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVSZXZlcnRPblNwaWxsJyxcbiAgICAgICAgdGl0bGU6ICdSZXZlcnQgb24gc3BpbGwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVDb3B5L2V4YW1wbGVDb3B5Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUNvcHknLFxuICAgICAgICB0aXRsZTogJ0NvcHknXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVDb3B5V2l0aE1vZGVsL2V4YW1wbGVDb3B5V2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUNvcHlXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ0NvcHkgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlSGFuZGxlL2V4YW1wbGVIYW5kbGUuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlSGFuZGxlJyxcbiAgICAgICAgdGl0bGU6ICdIYW5kbGUnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUN1c3RvbUNsYXNzZXMnLFxuICAgICAgICB0aXRsZTogJ0N1c3RvbSBjbGFzc2VzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmFtZVNwYWNlcy9leGFtcGxlTmFtZVNwYWNlcy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOYW1lU3BhY2VzJyxcbiAgICAgICAgdGl0bGU6ICdOYW1lU3BhY2VzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRHJhZ092ZXJDbGFzc2VzL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRHJhZ092ZXJDbGFzc2VzJyxcbiAgICAgICAgdGl0bGU6ICdEcmFnT3ZlciBjbGFzc2VzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQm91bmRpbmdCb3gvZXhhbXBsZUJvdW5kaW5nQm94Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJvdW5kaW5nQm94JyxcbiAgICAgICAgdGl0bGU6ICdCb3VuZGluZ0JveCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1guaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWCcsXG4gICAgICAgIHRpdGxlOiAnQm91bmRpbmdCb3ggKyBMb2NrWCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWScsXG4gICAgICAgIHRpdGxlOiAnQm91bmRpbmdCb3ggKyBMb2NrWSdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5nUmVwZWF0L2V4YW1wbGVOZ1JlcGVhdC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZ1JlcGVhdCcsXG4gICAgICAgIHRpdGxlOiAnbmdSZXBlYXQnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ25nUmVwZWF0IC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0L2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZXN0ZWROZ1JlcGVhdCcsXG4gICAgICAgIHRpdGxlOiAnTmVzdGVkIG5nUmVwZWFkJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICdOZXN0ZWQgbmdSZXBlYWQgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlU2Nyb2xsaW5nRHJhZy9leGFtcGxlU2Nyb2xsaW5nRHJhZy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVTY3JvbGxpbmdEcmFnJyxcbiAgICAgICAgdGl0bGU6ICdTY3JvbGxpbmcgZHJhZydcbiAgICB9XTtcblxuICAgIC8vIGRlZmF1bHQgdGVtcGxhdGUgbG9hZGVkIGZpcnN0IHRpbWVcbiAgICAkc2NvcGUuZXhhbXBsZVRlbXBsYXRlID0gJ2V4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuaHRtbCc7XG5cbiAgICAkc2NvcGUuaGlnaGxpZ2h0Q29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgdmFyIGNvZGVCbG9ja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY29kZScpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNvZGVCbG9ja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGNvZGVCbG9ja3NbaV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByb3dPZmZjYW52YXMgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvd09mZmNhbnZhcycpKTtcbiAgICAkc2NvcGUudG9nZ2xlU2lkZWJhciA9IGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIgKCkge1xuICAgICAgICByb3dPZmZjYW52YXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cblxufV0pO1xuXG4oe1wiZXhhbXBsZUJhc2ljXCI6KHtcImV4YW1wbGVCYXNpY1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuanNcIil9KSxcImV4YW1wbGVCYXNpY1dpdGhNb2RlbFwiOih7XCJleGFtcGxlQmFzaWNXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlQmFzaWNXaXRoTW9kZWwvZXhhbXBsZUJhc2ljV2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlQm91bmRpbmdCb3hcIjooe1wiZXhhbXBsZUJvdW5kaW5nQm94XCI6cmVxdWlyZShcIi4vZXhhbXBsZUJvdW5kaW5nQm94L2V4YW1wbGVCb3VuZGluZ0JveC5qc1wiKX0pLFwiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1hcIjooe1wiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1hcIjpyZXF1aXJlKFwiLi9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5qc1wiKX0pLFwiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1lcIjooe1wiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1lcIjpyZXF1aXJlKFwiLi9leGFtcGxlQm91bmRpbmdCb3hMb2NrWS9leGFtcGxlQm91bmRpbmdCb3hMb2NrWS5qc1wiKX0pLFwiZXhhbXBsZUNvcHlcIjooe1wiZXhhbXBsZUNvcHlcIjpyZXF1aXJlKFwiLi9leGFtcGxlQ29weS9leGFtcGxlQ29weS5qc1wiKX0pLFwiZXhhbXBsZUNvcHlXaXRoTW9kZWxcIjooe1wiZXhhbXBsZUNvcHlXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZUN1c3RvbUNsYXNzZXNcIjooe1wiZXhhbXBsZUN1c3RvbUNsYXNzZXNcIjpyZXF1aXJlKFwiLi9leGFtcGxlQ3VzdG9tQ2xhc3Nlcy9leGFtcGxlQ3VzdG9tQ2xhc3Nlcy5qc1wiKX0pLFwiZXhhbXBsZURpcmVjdGl2ZVwiOih7XCJleGFtcGxlRGlyZWN0aXZlXCI6cmVxdWlyZShcIi4vZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmpzXCIpfSksXCJleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsXCI6KHtcImV4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsL2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVEcmFnT3ZlckNsYXNzZXNcIjooe1wiZXhhbXBsZURyYWdPdmVyQ2xhc3Nlc1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy5qc1wiKX0pLFwiZXhhbXBsZUV2ZW50c1wiOih7XCJleGFtcGxlRXZlbnRzXCI6cmVxdWlyZShcIi4vZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmpzXCIpfSksXCJleGFtcGxlSGFuZGxlXCI6KHtcImV4YW1wbGVIYW5kbGVcIjpyZXF1aXJlKFwiLi9leGFtcGxlSGFuZGxlL2V4YW1wbGVIYW5kbGUuanNcIil9KSxcImV4YW1wbGVOYW1lU3BhY2VzXCI6KHtcImV4YW1wbGVOYW1lU3BhY2VzXCI6cmVxdWlyZShcIi4vZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuanNcIil9KSxcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFwiOih7XCJleGFtcGxlTmVzdGVkTmdSZXBlYXRcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0LmpzXCIpfSksXCJleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWxcIjooe1wiZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZU5nUmVwZWF0XCI6KHtcImV4YW1wbGVOZ1JlcGVhdFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuanNcIil9KSxcImV4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbFwiOih7XCJleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlUmVtb3ZlT25TcGlsbFwiOih7XCJleGFtcGxlUmVtb3ZlT25TcGlsbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVSZW1vdmVPblNwaWxsL2V4YW1wbGVSZW1vdmVPblNwaWxsLmpzXCIpfSksXCJleGFtcGxlUmV2ZXJ0T25TcGlsbFwiOih7XCJleGFtcGxlUmV2ZXJ0T25TcGlsbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVSZXZlcnRPblNwaWxsL2V4YW1wbGVSZXZlcnRPblNwaWxsLmpzXCIpfSksXCJleGFtcGxlU2Nyb2xsaW5nRHJhZ1wiOih7XCJleGFtcGxlU2Nyb2xsaW5nRHJhZ1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmpzXCIpfSksXCJleGFtcGxlc1JvdXRlclwiOnJlcXVpcmUoXCIuL2V4YW1wbGVzUm91dGVyLmpzXCIpLFwidGVtcGxhdGVzXCI6cmVxdWlyZShcIi4vdGVtcGxhdGVzLmpzXCIpfSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgIHVybDogJy9ob21lJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWhvbWUuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2RvY3MnLCB7XG4gICAgICAgIHVybDogJy9kb2NzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWRvY3MuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc3RhdGUpIHtcbiAgICAgICAgICAvLyBnbyB0byBpbnN0YWxsIG5vdGVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICAkc3RhdGUuZ28oJ2RvY3MuZGV0YWlsJywge2xpbms6ICdkb2NzSW5zdGFsbCd9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnZG9jcy5kZXRhaWwnLCB7XG4gICAgICAgIHVybDogJy86bGluaycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICByZXR1cm4gJHN0YXRlUGFyYW1zLmxpbmsgKyAnLycgKyAkc3RhdGVQYXJhbXMubGluayArICcuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbnRyaWJ1dGUnLCB7XG4gICAgICAgIHVybDogJy9jb250cmlidXRlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wYXJ0aWFsLWNvbnRyaWJ1dGUuaHRtbCdcbiAgICAgIH0pO1xuICB9KTtcbiIsIid1c2Ugc3RyaWN0JzsgbW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiZG9jc0luc3RhbGwvZG9jc0luc3RhbGwuaHRtbFwiLFwiPGgyPkluc3RhbGw8L2gyPlxcbjxwPmRvd25sb2FkIGRyYWd1bGFyLmpzIGFuZCBkcmFndWxhci5jc3MgZnJvbSBkaXN0IGZvbGRlcjwvcD5cXG48cD5PUiBjbG9uZSBnaXQ8L3A+XFxuPHByZT48Y29kZT5cXG5naXQgY2xvbmUgaHR0cDovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhci5naXRcXG48L2NvZGU+PC9wcmU+XFxuPHA+T1IgdXNlIG5wbTwvcD5cXG48cHJlPjxjb2RlPlxcbltzdWRvXSBucG0gaW5zdGFsbCBkcmFndWxhclxcbjwvY29kZT48L3ByZT5cXG48cD5PUiB1c2UgYm93ZXI8L3A+XFxuPHByZT48Y29kZT5cXG5ib3dlciBpbnN0YWxsIGRyYWd1bGFyXFxuPC9jb2RlPjwvcHJlPlxcbjxwPkFORCBpbmNsdWRlIGZpbGVzIGludG8geW91ciBwcm9qZWN0PC9wPlxcbjxwcmU+PGNvZGU+XFxuJmx0O2xpbmsgaHJlZj1cXCdzdHlsZXMvZHJhZ3VsYXIuY3NzXFwnIHJlbD1cXCdzdHlsZXNoZWV0XFwnIHR5cGU9XFwndGV4dC9jc3NcXCcgLyZndDtcXG4mbHQ7c2NyaXB0IHNyYz1cXCdzY3JpcHRzL2RyYWd1bGFyLmpzXFwnJmd0OyZsdDsvc2NyaXB0Jmd0O1xcbjwvY29kZT48L3ByZT5cXG48cD5BTkQgcHV0IGRyYWd1bGFyTW9kdWxlIGludG8gZGVwZW5kZW5jeSBhcnJheTwvcD5cXG48cHJlPjxjb2RlPlxcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcXCdteUFwcFxcJywgW1xcJ2RyYWd1bGFyTW9kdWxlXFwnLCBcXCdvdGhlckRlcGVuZGVuY2llc1xcJ10pO1xcbjwvY29kZT48L3ByZT5cXG48cD5ET05FIDopPC9wPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+QmFzaWM8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlIHN0dWZmIGJldHdlZW4gdGhlc2UgdHdvIGNvbnRhaW5lcnMuIE5vdGUgaG93IHRoZSBzdHVmZiBnZXRzIGluc2VydGVkIG5lYXIgdGhlIG1vdXNlIHBvaW50ZXI/IEdyZWF0IHN0dWZmLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQmFzaWNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdCYXNpY1xcJywgW1xcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtCYXNpYyZxdW90O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gMy4mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbSA2LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNC4mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbSA1LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQmFzaWNXaXRoTW9kZWwvZXhhbXBsZUJhc2ljV2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkJhc2ljIC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk1vdmUgc3R1ZmYgYmV0d2VlbiB0aGVzZSB0d28gY29udGFpbmVycy4gTm90ZSBob3cgdGhlIHN0dWZmIGdldHMgaW5zZXJ0ZWQgbmVhciB0aGUgbW91c2UgcG9pbnRlcj8gR3JlYXQgc3R1ZmYuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCYXNpY01vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMxXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMlxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8cHJlPkl0ZW1zMTpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMSB8IGpzb259fTwvcHJlPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8cHJlPkl0ZW1zMjpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMiB8IGpzb259fTwvcHJlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0Jhc2ljTW9kZWxcXCcsIFtcXCckc2NvcGVcXCcsIFxcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcXFxcXCdsbCBqdXN0IGNvbWUgYmFjay5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICAgIH1dO1xcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDVcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA3XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDhcXCdcXG4gICAgfV07XFxuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xcbiAgICBkcmFndWxhclNlcnZpY2UoW2NvbnRhaW5lcnNbMF0sY29udGFpbmVyc1sxXV0se1xcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogWyRzY29wZS5pdGVtczEsICRzY29wZS5pdGVtczJdXFxuICAgIH0pO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7QmFzaWMmcXVvdDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJyZndDtcXG4gICAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczEmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMyJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz0mcXVvdDt0YWJsZVJvdyZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICZsdDtkaXYmZ3Q7SXRlbXMxOlxcbiAgICAgICAgICAgICAgICAmbHQ7YnIvJmd0O3t7aXRlbXMxIHwganNvbn19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICZsdDtkaXYmZ3Q7SXRlbXMyOlxcbiAgICAgICAgICAgICAgICAmbHQ7YnIvJmd0O3t7aXRlbXMyIHwganNvbn19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJvdW5kaW5nQm94L2V4YW1wbGVCb3VuZGluZ0JveC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5Cb3VuZGluZ0JveDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Zb3UgY2FuIHByb3ZpZGUgZWxlbWVudCBpbiBvcHRpb25zLmJvdW5kaW5nQm94IHRvIGxpbWl0IGNyb3NzaW5nIGVsZW1lbnQgYm9yZGVycy48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCb3VuZGluZ0JveFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXRlbXMgY2Fubm90IGNyb3NzIGl0cyBleGFtcGxlIGVsZW1lbnQsIGp1c3QgdHJ5IGl0IHlvdXIgc2VsdmVzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDIuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBpdGVtcyBjYW5ub3QgY3Jvc3MgaXRzIGV4YW1wbGUgZWxlbWVudCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKCksIHtcXG4gICAgYm91bmRpbmdCb3g6ICRlbGVtZW50XFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCb3VuZGluZ0JveExvY2tYL2V4YW1wbGVCb3VuZGluZ0JveExvY2tYLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5Cb3VuZGluZ0JveCBhbmQgbG9ja1g8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+TW92ZW1lbnQgY2FuIGJlIGxvY2tlZCB0byBYIG9yIFkgYXhpcyBhbmQgYWxzbyB5b3UgY2FuIHByb3ZpZGUgZWxlbWVudCBpbiBvcHRpb25zLmJvdW5kaW5nQm94IHRvIGxpbWl0IGNyb3NzaW5nIGVsZW1lbnQgYm9yZGVycy48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCb3VuZGluZ0JveExvY2tYXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJIb3Jpem9udGFsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdib3VuZGluZ0JveFxcJz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aDI1XFxcIj5JdGVtcyBhcmUgbG9ja2VkIGluIFggYXhpcyBtb3ZlbWVudCBhbmQgY2Fubm90IGNyb3NzIGl0cyBjbG9zZXN0IHBhcmVudCBkaXYuYm91bmRpbmdCb3gsIGp1c3QgdHJ5IGl0IHlvdXIgc2VsdmVzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoMjVcXFwiPml0ZW0gMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoMjVcXFwiPml0ZW0gMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoMjVcXFwiPml0ZW0gNDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXS5jaGlsZHJlbigpLCB7XFxuICAgIGJvdW5kaW5nQm94OiAkZWxlbWVudC5jaGlsZHJlbigpWzBdLFxcbiAgICBsb2NrWDogdHJ1ZVxcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWS9leGFtcGxlQm91bmRpbmdCb3hMb2NrWS5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5Cb3VuZGluZ0JveCBhbmQgTG9ja1k8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+TW92ZW1lbnQgY2FuIGJlIGxvY2tlZCB0byBYIG9yIFkgYXhpcyBhbmQgYWxzbyB5b3UgY2FuIHByb3ZpZGUgZWxlbWVudCBpbiBvcHRpb25zLmJvdW5kaW5nQm94IHRvIGxpbWl0IGNyb3NzaW5nIGVsZW1lbnQgYm9yZGVycy48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCb3VuZGluZ0JveExvY2tZXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnYm91bmRpbmdCb3hcXCc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtcyBhcmUgbG9ja2VkIGluIFkgYXhpcyBtb3ZlbWVudCBhbmQgY2Fubm90IGNyb3NzIGl0cyBjbG9zZXN0IHBhcmVudCBkaXYuYm91bmRpbmdCb3gsIGp1c3QgdHJ5IGl0IHlvdXIgc2VsdmVzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gNDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSA1PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDY8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0uY2hpbGRyZW4oKSwge1xcbiAgICBib3VuZGluZ0JveDogJGVsZW1lbnQuY2hpbGRyZW4oKVswXSxcXG4gICAgbG9ja1k6IHRydWVcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+Q29weTwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkNvcHlpbmcgc3R1ZmYgaXMgZ3JlYXQgdG9vLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQ29weVxcXCIgbmctaGlkZT1cXFwiZ2xvYmFscy5zaG93TW9kZWxFeGFtcGxlc1xcXCI+XFxuICAgIDxkaXYgaWQ9XFwnbGVmdDJcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgPGRpdj5Nb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuPC9kaXY+XFxuICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBpZD1cXCdyaWdodDJcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdDb3B5XFwnLCBbXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xcbiAgICAgIGNvcHk6IHRydWVcXG4gICAgfSk7XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtDb3B5JnF1b3Q7IG5nLWhpZGU9JnF1b3Q7Z2xvYmFscy5zaG93TW9kZWxFeGFtcGxlcyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBpZD1cXCdsZWZ0MlxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGlkPVxcJ3JpZ2h0MlxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O1lvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVDb3B5V2l0aE1vZGVsL2V4YW1wbGVDb3B5V2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkNvcHkgLSB3aXRoIG1vZGVsPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+Q29weWluZyBzdHVmZiBpcyBncmVhdCB0b28uPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJDb3B5TW9kZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczFcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMyXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXMxOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMxIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXMyOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMyIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnQ29weU1vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XFxuICAgICAgY29udGVudDogXFwnTW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXFxcXFwnbGwganVzdCBjb21lIGJhY2suXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA1XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDZcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gN1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA4XFwnXFxuICAgIH1dO1xcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcXG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXSxcXG4gICAgICBjb3B5OiB0cnVlXFxuICAgIH0pO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7Q29weU1vZGVsJnF1b3Q7IG5nLXNob3c9JnF1b3Q7Z2xvYmFscy5zaG93TW9kZWxFeGFtcGxlcyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczEmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMiZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3RhYmxlUm93JnF1b3Q7Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyJnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtczE6XFxuICAgICAgICAgICZsdDtici8mZ3Q7e3tpdGVtczEgfCBqc29ufX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbXMyOlxcbiAgICAgICAgICAmbHQ7YnIvJmd0O3t7aXRlbXMyIHwganNvbn19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUN1c3RvbUNsYXNzZXMvZXhhbXBsZUN1c3RvbUNsYXNzZXMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgIDxoMj5DdXN0b20gY2xhc3NlczwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+WW91IGNhbiBvdmVyd3JpdGUgYnVpbGRpbiBjbGFzc2VzIGJ5IHByb3ZpZGluZyBjbGFzc2VzIG5hbWVzIGluIG9iamVjdCB2aWEgb3B0aW9ucy5jbGFzc2VzLjwvbGFiZWw+XFxuICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJDdXN0b21DbGFzc2VzXFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFwnbGVmdDRcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGlkPVxcJ3JpZ2h0M1xcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7IGNsYXNzZXM6IHtcXG4gICAgbWlycm9yOiBcXCdjdXN0b20tZ3JlZW4tbWlycm9yXFwnXFxuICB9IH0pO1xcblxcbiAgLy8gRGVmYXVsdCBjbGFzc2VzIGFyZTpcXG4gIG9wdGlvbi5jbGFzc2VzID0ge1xcbiAgICBtaXJyb3I6IFxcJ2d1LW1pcnJvclxcJyxcXG4gICAgaGlkZTogXFwnZ3UtaGlkZVxcJyxcXG4gICAgdW5zZWxlY3RhYmxlOiBcXCdndS11bnNlbGVjdGFibGVcXCcsXFxuICAgIHRyYW5zaXQ6IFxcJ2d1LXRyYW5zaXRcXCcsXFxuICAgIG92ZXJBY3RpdmU6IFxcJ2d1LW92ZXItYWN0aXZlXFwnLFxcbiAgICBvdmVyQWNjZXB0czogXFwnZ3Utb3Zlci1hY2NlcHRcXCcsXFxuICAgIG92ZXJEZWNsaW5lczogXFwnZ3Utb3Zlci1kZWNsaW5lXFwnXFxuICB9O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVEaXJlY3RpdmUvZXhhbXBsZURpcmVjdGl2ZS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5EaXJlY3RpdmU8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5TYW1lIGFzIGN1c3RvbSBjbGFzc2VzIGV4YW1wbGUsIGJ1dCBzaG93aW5nIHVzZSBvZiBkaXJlY3RpdmUuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJEaXJlY3RpdmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcXCJkcmFndWxhck9wdGlvbnNcXFwiPlxcbiAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFwne1xcXCJjbGFzc2VzXFxcIjp7XFxcIm1pcnJvclxcXCI6XFxcImN1c3RvbS1ncmVlbi1taXJyb3JcXFwifSxcXFwibmFtZVNwYWNlXFxcIjpcXFwic2FtZVxcXCJ9XFwnPlxcbiAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnRGlyZWN0aXZlXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSkge1xcbiAgICAkc2NvcGUuZHJhZ3VsYXJPcHRpb25zID0ge1xcbiAgICAgIGNsYXNzZXM6IHtcXG4gICAgICAgIG1pcnJvcjogXFwnY3VzdG9tLWdyZWVuLW1pcnJvclxcJ1xcbiAgICAgIH0sXFxuICAgICAgbmFtZVNwYWNlOiBcXCdjb21tb25cXCcgLy8ganVzdCBjb25uZWN0aW5nIGxlZnQgYW5kIHJpZ2h0IGNvbnRhaW5lclxcbiAgICB9O1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7RGlyZWN0aXZlJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPSZxdW90O2RyYWd1bGFyT3B0aW9ucyZxdW90OyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O01vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJdGVtIDMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJdGVtIDYuJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcJ3smcXVvdDtjbGFzc2VzJnF1b3Q7OnsmcXVvdDttaXJyb3ImcXVvdDs6JnF1b3Q7Y3VzdG9tLWdyZWVuLW1pcnJvciZxdW90O30sJnF1b3Q7bmFtZVNwYWNlJnF1b3Q7OiZxdW90O3NhbWUmcXVvdDt9XFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJdGVtIDQuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJdGVtIDUuJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkRpcmVjdGl2ZSAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5TYW1lIGFzIGN1c3RvbSBjbGFzc2VzIGV4YW1wbGUsIGJ1dCBzaG93aW5nIHVzZSBvZiBkaXJlY3RpdmUuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJEaXJlY3RpdmVNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXFwiZHJhZ3VsYXJPcHRpb25zXFxcIj5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFwne1xcXCJjb250YWluZXJzTW9kZWxcXFwiOlxcXCJpdGVtczJcXFwiLFxcXCJjbGFzc2VzXFxcIjp7XFxcIm1pcnJvclxcXCI6XFxcImN1c3RvbS1ncmVlbi1taXJyb3JcXFwifSxcXFwibmFtZVNwYWNlXFxcIjpcXFwiY29tbW9uXFxcIn1cXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczJcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczE6XFxuICAgICAgICAgIDxici8+e3tpdGVtczEgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczI6XFxuICAgICAgICAgIDxici8+e3tpdGVtczIgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgIFxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnRGlyZWN0aXZlTW9kZWxcXCcsIFtcXCckc2NvcGVcXCcsIFxcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcXFxcXCdsbCBqdXN0IGNvbWUgYmFjay5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICAgIH1dO1xcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDVcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA3XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDhcXCdcXG4gICAgfV07XFxuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XFxuICAgICAgY29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXMxLFxcbiAgICAgIGNsYXNzZXM6IHtcXG4gICAgICAgIG1pcnJvcjogXFwnY3VzdG9tLWdyZWVuLW1pcnJvclxcJ1xcbiAgICAgIH0sXFxuICAgICAgbmFtZVNwYWNlOiBcXCdjb21tb25cXCcgLy8ganVzdCBjb25uZWN0aW5nIGxlZnQgYW5kIHJpZ2h0IGNvbnRhaW5lclxcbiAgICB9O1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0RpcmVjdGl2ZU1vZGVsJnF1b3Q7Jmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj0mcXVvdDtkcmFndWxhck9wdGlvbnMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMxJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXCd7JnF1b3Q7Y29udGFpbmVyc01vZGVsJnF1b3Q7OiZxdW90O2l0ZW1zMiZxdW90OywmcXVvdDtjbGFzc2VzJnF1b3Q7OnsmcXVvdDttaXJyb3ImcXVvdDs6JnF1b3Q7Y3VzdG9tLWdyZWVuLW1pcnJvciZxdW90O30sJnF1b3Q7bmFtZVNwYWNlJnF1b3Q7OiZxdW90O2NvbW1vbiZxdW90O31cXCcmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMyJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVEcmFnT3ZlckNsYXNzZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5EcmFnT3ZlckNsYXNzZXM8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Zb3UgY2FuIGludGVyYWN0IHdpdGggZHJhZ2dpbmcgZWxlbWVudCBieSBzZXR0aW5nIGRyYWdPdmVyQ2xhc3Nlczp0cnVlIGluIG9wdGlvbnMgYW5kIGFkZGluZyBwb2ludGVyIGNsYXNzIChkZWZhdWx0IGlzOiBcXCdndS1vdmVyLWFjdGl2ZVxcJykgdG8gZWxlbWVudCB5b3Ugd2FudCB0byBiZSBpbnRlcmFjdGl2ZSAoZ2V0dGluZyBjbGFzc2VzKS4gVXN1YWxseSB5b3Ugd2FudCB0byBjb250YWluZXJzIHNob3cgd2hlYXRoZXIgdGhleSBhY2NlcHRzIGVsZW1lbnQgb3Igbm90LCBidXQgeW91IGNhbiB1c2UgaXQgYW55d2hlcmUuIFRyeSB0byBkcmFnIG92ZXIgdGhlIG5vdC1jb250YWluZXIgdG9vLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRHJhZ092ZXJDbGFzc2VzXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnPlxcbiAgICAgIDxkaXY+YXBwbGVzIGFuZCBvcmFuZ2VzIGNhbm5vdCBiZSBtaXhlZDwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgMjwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgMzwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgNDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnPlxcbiAgICAgIDxkaXY+b3JhbmdlIDE8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSAyPC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgMzwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDQ8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2PmFwcGxlIDU8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDY8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDc8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDg8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2Pm9yYW5nZSA1PC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgNjwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDc8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSA4PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJub3RDb250YWluZXIgZ3Utb3Zlci1hY3RpdmVcXFwiPiBUZXN0IGFjdGl2ZSBjbGFzcyBvbiBOT1QgY29udGFpbmVyLjwvZGl2PlxcblxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7RHJhZ092ZXJDbGFzc2VzJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7YXBwbGVzIGFuZCBvcmFuZ2VzIGNhbm5vdCBiZSBtaXhlZCZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7YXBwbGUgMiZsdDsvZGl2Jmd0O1xcbiAgICAgIC4uLlxcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O29yYW5nZSAxJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtvcmFuZ2UgMiZsdDsvZGl2Jmd0O1xcbiAgICAgIC4uLlxcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlIDUmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlIDYmbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtvcmFuZ2UgNSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDYmbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICZsdDtkaXYgY2xhc3M9JnF1b3Q7bm90Q29udGFpbmVyJnF1b3Q7Jmd0OyBUZXN0IGFjdGl2ZSBjbGFzcyBvbiBOT1QgY29udGFpbmVyLiZsdDsvZGl2Jmd0O1xcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gQ1NTXFxuLmNvbnRhaW5lci5ndS1vdmVyLWFjdGl2ZS5ndS1vdmVyLWFjY2VwdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNvbnRhaW5lci5ndS1vdmVyLWFjdGl2ZS5ndS1vdmVyLWRlY2xpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubm90Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMmVtO1xcbn1cXG5cXG4ubm90Q29udGFpbmVyLmd1LW92ZXItYWN0aXZlLmd1LW92ZXItZGVjbGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gSlNcXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcXG4gICAgbmFtZVNwYWNlOiBcXCdhcHBsZXNcXCcsXFxuICAgIGRyYWdPdmVyQ2xhc3NlczogdHJ1ZVxcbiAgfSk7XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMV0sICRlbGVtZW50LmNoaWxkcmVuKClbM11dLCB7XFxuICAgIG5hbWVTcGFjZTogXFwnb3Jhbmdlc1xcJyxcXG4gICAgZHJhZ092ZXJDbGFzc2VzOiB0cnVlXFxuICB9KTtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+RXZlbnRzPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5BZGQgc29tZSBmYW50YXN0aWMgZXZlbnRzITwvbGFiZWw+XFxuICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJFdmVudHNcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXCdsZWZ0M1xcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgaWQ9XFwncmlnaHQzXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVmdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZ2h0KV0sIHtcXG4gICAgc2NvcGU6ICRzY29wZVxcbiAgfSk7XFxuICAkc2NvcGUuJG9uKFxcJ2RyYWdcXCcsIGZ1bmN0aW9uKGUsIGVsKSB7XFxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XFxuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKFxcJyBleC1tb3ZlZFxcJywgXFwnXFwnKTtcXG4gIH0pO1xcbiAgJHNjb3BlLiRvbihcXCdkcm9wXFwnLCBmdW5jdGlvbihlLCBlbCkge1xcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcXG4gICAgICBlbC5jbGFzc05hbWUgKz0gXFwnIGV4LW1vdmVkXFwnO1xcbiAgICB9LCAwKTtcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVIYW5kbGUvZXhhbXBsZUhhbmRsZS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPkhhbmRsZTwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+RHJhZyBoYW5kbGVzIGZsb2F0IHlvdXIgY3J1aXNlPzwvbGFiZWw+XFxuICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJIYW5kbGVcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXCdsZWZ0NVxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzPVxcJ2hhbmRsZVxcJz4rPC9zcGFuPk1vdmUgbWUsIGJ1dCB5b3UgY2FuIHVzZSB0aGUgcGx1cyBzaWduIHRvIGRyYWcgbWUgYXJvdW5kLjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGlkPVxcJ3JpZ2h0NVxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWZ0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlnaHQpXSwge1xcbiAgICBtb3ZlczogZnVuY3Rpb24gKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NOYW1lID09PSBcXCdoYW5kbGVcXCc7XFxuICAgIH1cXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOYW1lU3BhY2VzL2V4YW1wbGVOYW1lU3BhY2VzLmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPk5hbWVTcGFjZXM8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+VHJ5IHRvIG1peCBhcHBsZXMgYW5kIG9yYW5nZXMuIFlvdSBjYW5ub3QgcGxhY2UgYXBwbGVzIGludG8gb3JhbmdlcywgYnV0IG5vdGljZSB0aGF0IHlvdSBjYW4gcGxhY2UgaXQgaW50byBtaXhlZC4gTWl4ZWQgY2FuIGJlIHBsYWNlZCBpbnRvIGFwcGxlcyBhbmQgb3Jhbmdlcy4gTm90aWNlIHRoYXQgbWl4ZWQgYmVjb21lcyBvcmFuZ2Ugb3IgYXBwbGUgaWYgcGxhY2VkIGludG8gdGhlaXIgY29udGFpbmVyLiA8Yj5TbyByZW1lbWJlciBpZiB5b3UgYXJlIHVzaW5nIG5hbWVzcGFjaW5nLCB0aGVuIGl0ZW0gaXMgbmFtZXNwYWNlZCBhY2NvcmRpbmcgdG8gYWN0dWFsIGNvbnRhaW5lciBpdCBpcyBwbGFjZWQgaW4uIElmIHlvdSBuZWVkIHRvIGl0ZW0gcHJlc2VydmUgdGhpZXIgc3RhdGUgeW91IG5lZWQgdG8gdXNlIGNsYXNzZXMgaW4gY29tYmluYXRpb24gd2l0aCBvcHRpb25zLmFjY2VwdHMgYW5kIG9wdGlvbmFsbHkgb3B0aW9ucy5pc0NvbnRhaW5lci48L2I+IEl0IGRlcGVuZHMgb24gc2V0dXAuIChTZWUgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXIvaXNzdWVzLzlcXFwiPmlzc3VlICM5PC9hPi4pPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiTmFtZVNwYWNlc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNVxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+dHJ5IHRvIG1peCBvcmFuZ2VzIGFuZCBhcHBsZXM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNVxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+b3JhbmdlIDE8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+b3JhbmdlIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+b3JhbmdlIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+b3JhbmdlIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNVxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgNTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA2PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgODwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCAxPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm1peGVkIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bWl4ZWQgMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCA0PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgPGNvZGU+XFxuZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLCAkZWxlbWVudC5jaGlsZHJlbigpWzJdXSwge1xcbiAgbmFtZVNwYWNlOiBcXCdhcHBsZXNcXCdcXG59KTtcXG5kcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVsxXSwge1xcbiAgbmFtZVNwYWNlOiBcXCdvcmFuZ2VzXFwnXFxufSk7XFxuZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKClbM10sIHsgLy8gbWl4ZWRcXG4gIG5hbWVTcGFjZTogW1xcJ29yYW5nZXNcXCcsIFxcJ2FwcGxlc1xcJ11cXG59KTtcXG4gICAgICA8L2NvZGU+XFxuICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0L2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPk5lc3RlZCBuZ1JlcGVhdDwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+IFlvdSBjYW4gbW92ZSB3aG9sZSByb3dzIGJ5IGdyYWJpbmcgcm93IHRpdGxlLCBhbGwgaXRlbXMgaXQgc2VsdmVzLiBUcnkgaXQgb3V0IVxcbiAgICAgICAgPGhyLz5cXG4gICAgICAgIDxiPk9sZCBJRSBkb2VzbnQgc3VwcG9ydCBGbGV4aWJsZSBCb3ggTGF5b3V0PC9iPiBzbyBpdCBjYW4gbG9vayB3ZWlyZC4gQnV0IGluIG1vZGVybiBicm93c2VycyBpdCBpcyBhd3NvbWUhIERyYWd1bGFyIHdpbGwgYmUgd29ya2luZyB3ZWxsIGFsc28gaW4gb2xkIElFIGJ1dCB5b3UgaGF2ZSB0byB1c2UgZGlmZmVyZW50IGNzcyBmb3IgbGF5b3V0LlxcbiAgICAgICAgPGhyLz5cXG4gICAgPC9sYWJlbD5cXG4gICAgPGRpdiBuZy1jb250cm9sbGVyPVxcXCJOZXN0ZWROZ1JlcGVhdFxcXCI+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCIgY2xhc3M9XFwnZXhhbXBsZVJvd1xcJz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3ctaGFuZGxlXFxcIj5Sb3cge3skaW5kZXh9fTwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW0uaXRlbXNcXFwiIGNsYXNzPVxcXCJleGFtcGxlQ2VsbFxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAvLyBIVE1MXFxuXFxuICAmbHQ7ZGl2IG5nLWNvbnRyb2xsZXI9JnF1b3Q7RXhhbXBsZTE1JnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zJnF1b3Q7IGNsYXNzPVxcJ2V4YW1wbGVSb3dcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtyb3ctaGFuZGxlJnF1b3Q7Jmd0O1JvdyB7eyRpbmRleH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtLml0ZW1zJnF1b3Q7IGNsYXNzPSZxdW90O2V4YW1wbGVDZWxsJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gQ1NTXFxuXFxuICAuZXhhbXBsZVJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuZXhhbXBsZUNlbGwge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAuZXhhbXBsZVJvdyxcXG4gIC5leGFtcGxlQ2VsbCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IG1vdmU7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgY3Vyc29yOiAtbW96LWdyYWI7XFxuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbiAgfVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAvLyBKU1xcblxcbiAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIHRpbWVvdW50IGR1ZSB0byBuZ1JlcGVhdCB0byBiZSByZWFkeVxcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQsIHtcXG4gICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcXCdyb3ctaGFuZGxlXFwnKTtcXG4gICAgICB9XFxuICAgIH0pO1xcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xcbiAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICAgIHJldHVybiAhaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcXCdyb3ctaGFuZGxlXFwnKTtcXG4gICAgICB9XFxuICAgIH0pO1xcbiAgfSwgMCk7XFxuICAkc2NvcGUuaXRlbXMgPSBbe1xcbiAgICBpdGVtczogW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGExXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGEyXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGEzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGE0XFwnXFxuICAgIH1dXFxuICB9LCB7XFxuICAgIGl0ZW1zOiBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjFcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjJcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjRcXCdcXG4gICAgfV1cXG4gIH0sIHtcXG4gICAgaXRlbXM6IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBjMVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBjMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBjM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBjNFxcJ1xcbiAgICB9XVxcbiAgfV07XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5OZXN0ZWQgbmdSZXBlYXQgLSB3aXRoIG1vZGVsPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+IFlvdSBjYW4gbW92ZSB3aG9sZSByb3dzIGJ5IGdyYWJpbmcgcm93IHRpdGxlLCBhbGwgaXRlbXMgaXQgc2VsdmVzLiBUcnkgaXQgb3V0IVxcbiAgICA8aHIvPlxcbiAgICA8Yj5PbGQgSUUgZG9lc250IHN1cHBvcnQgRmxleGlibGUgQm94IExheW91dDwvYj4gc28gaXQgY2FuIGxvb2sgd2VpcmQuIEJ1dCBpbiBtb2Rlcm4gYnJvd3NlcnMgaXQgaXMgYXdzb21lISBEcmFndWxhciB3aWxsIGJlIHdvcmtpbmcgd2VsbCBhbHNvIGluIG9sZCBJRSBidXQgeW91IGhhdmUgdG8gdXNlIGRpZmZlcmVudCBjc3MgZm9yIGxheW91dC5cXG4gICAgPGhyLz5cXG4gIDwvbGFiZWw+XFxuICA8ZGl2IG5nLWNvbnRyb2xsZXI9XFxcIk5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiIGNsYXNzPVxcJ2V4YW1wbGVSb3dcXCc+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdy1oYW5kbGVcXFwiPlJvdyB7ezo6JGluZGV4fX08L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXhhbXBsZVJvdyBleGFtcGxlQ2VsbCBjb250YWluZXJOZXN0ZWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW0uaXRlbXNcXFwiIGNsYXNzPVxcXCJleGFtcGxlQ2VsbFxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8cHJlPlxcbiAgICAgICAgICAgIDxkaXY+SXRlbXM6XFxuICAgICAgICAgICAgICA8YnIvPnt7aXRlbXMgfCBqc29ufX08L2Rpdj5cXG4gICAgICAgIDwvcHJlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgbmctY29udHJvbGxlcj0mcXVvdDtOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbCZxdW90OyZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMmcXVvdDsgY2xhc3M9XFwnZXhhbXBsZVJvd1xcJyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3Jvdy1oYW5kbGUmcXVvdDsmZ3Q7Um93IHt7OjokaW5kZXh9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7ZXhhbXBsZVJvdyBleGFtcGxlQ2VsbCBjb250YWluZXJOZXN0ZWQmcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW0uaXRlbXMmcXVvdDsgY2xhc3M9JnF1b3Q7ZXhhbXBsZUNlbGwmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiZsdDsvZGl2Jmd0O1xcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gQ1NTXFxuXFxuICAuZXhhbXBsZVJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuZXhhbXBsZUNlbGwge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAuZXhhbXBsZVJvdyxcXG4gIC5leGFtcGxlQ2VsbCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IG1vdmU7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgY3Vyc29yOiAtbW96LWdyYWI7XFxuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbiAgfVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gSlNcXG5jb250cm9sbGVyKFxcJ05lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXFwnLCBbXFwnJHRpbWVvdXRcXCcsIFxcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHRpbWVvdXQsICRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5lc3RlZCBuZ1JlcGVhdCB0byBiZSByZWFkeVxcbiAgICAgIHZhciBjb250YWluZXIgPSAkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksXFxuICAgICAgICBwYXJlbnRDb250YWluZXJzID0gY29udGFpbmVyLmNoaWxkcmVuKCksXFxuICAgICAgICBuZXN0ZWRDb250YWluZXJzID0gW107XFxuXFxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGNvbnRhaW5lciwge1xcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcXCdyb3ctaGFuZGxlXFwnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc1xcbiAgICAgIH0pO1xcblxcbiAgICAgIC8vIGNvbGxlY3QgbmVzdGVkIGNvbnRpYW5lcnNcXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudENvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMucHVzaChwYXJlbnRDb250YWluZXJzLmVxKGkpLmNoaWxkcmVuKClbMV0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKG5lc3RlZENvbnRhaW5lcnMsIHtcXG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICAgICAgcmV0dXJuICFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxcJ3Jvdy1oYW5kbGVcXCcpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogKGZ1bmN0aW9uIGdldE5lc3RlZENvbnRhaW5lcnNNb2RlbCgpe1xcbiAgICAgICAgICB2YXIgcGFyZW50ID0gJHNjb3BlLml0ZW1zLFxcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbCA9IFtdO1xcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudC5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbC5wdXNoKHBhcmVudFtpXS5pdGVtcyk7XFxuICAgICAgICAgIH07XFxuICAgICAgICAgIHJldHVybiBjb250YWluZXJzTW9kZWw7XFxuICAgICAgICB9KSgpXFxuICAgICAgfSk7XFxuICAgIH0sIDApO1xcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xcbiAgICAgIGl0ZW1zOiBbe1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhMVxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTJcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGEzXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhNFxcJ1xcbiAgICAgIH1dXFxuICAgIH0sIHtcXG4gICAgICBpdGVtczogW3tcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjFcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGIyXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBiM1xcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjRcXCdcXG4gICAgICB9XVxcbiAgICB9LCB7XFxuICAgICAgaXRlbXM6IFt7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGMxXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBjMlxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzNcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGM0XFwnXFxuICAgICAgfV1cXG4gICAgfV07XFxuICB9XSlcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5nUmVwZWF0L2V4YW1wbGVOZ1JlcGVhdC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5uZ1JlcGVhdDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5FeGFtcGxlIG9mIHVzaW5nIG5nLXJlcGVhdCB3aXRoIGRyYWd1bGFyIGFuZCBhZGRpbmcvcmVtb3ZpbmcgaXRlbXMgZHluYW1pY2FseS48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJOZ1JlcGVhdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz1cXFwiYWRkSXRlbSgpXFxcIj4rPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPVxcXCJyZW1vdmVJdGVtKClcXFwiPng8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAvLyBIVE1MOlxcbiAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyZndDtcXG4gICAgICB7e2l0ZW0uY29udGVudH19XFxuICAgICAgJmx0O2J1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPSZxdW90O2FkZEl0ZW0oKSZxdW90OyZndDsrJmx0Oy9idXR0b24mZ3Q7XFxuICAgICAgJmx0O2J1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPSZxdW90O3JlbW92ZUl0ZW0oKSZxdW90OyZndDt4Jmx0Oy9idXR0b24mZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuXFxuICAvLyBKUzpcXG4gIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcXG4gICRzY29wZS5pdGVtcyA9IFt7XFxuICAgIGNvbnRlbnQ6IFxcJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuXFwnXFxuICB9LHtcXG4gICAgY29udGVudDogXFwnSXRlbSAyXFwnXFxuICB9LHtcXG4gICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICB9LHtcXG4gICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICB9XTtcXG4gICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSAoKSB7XFxuICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xcbiAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLHtjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArIFxcJy1jb3B5XFwnfSk7XFxuICB9XFxuICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0gKCkge1xcbiAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xcbiAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcXG4gIH1cXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+bmdSZXBlYXQgLSB3aXRoIG1vZGVsPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+RXhhbXBsZSBvZiB1c2luZyBuZy1yZXBlYXQgd2l0aCBkcmFndWxhciBhbmQgYWRkaW5nL3JlbW92aW5nIGl0ZW1zIGR5bmFtaWNhbHkuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJOZ1JlcGVhdFdpdGhNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIj5cXG4gICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcImFkZEl0ZW0oKVxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcInJlbW92ZUl0ZW0oKVxcXCI+eDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXM6XFxuICAgICAgICAgIDxici8+e3tpdGVtcyB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBIVE1MOlxcbiAgICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O05nUmVwZWF0V2l0aE1vZGVsJnF1b3Q7Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zJnF1b3Q7Jmd0O1xcbiAgICAgICAgICB7e2l0ZW0uY29udGVudH19XFxuICAgICAgICAgICZsdDtidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz0mcXVvdDthZGRJdGVtKCkmcXVvdDsmZ3Q7KyZsdDsvYnV0dG9uJmd0O1xcbiAgICAgICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7cmVtb3ZlSXRlbSgpJnF1b3Q7Jmd0O3gmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gSlM6XFxuICBjb250cm9sbGVyKFxcJ05nUmVwZWF0V2l0aE1vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdUcnkgdG8gYWRkIG9yIHJlbW92ZSBzb21lIGVsZW1lbnRzIChjbGljayBvbiArLSBidXR0b25zKSwgeW91IHdpbGwgc2VlIHRoYXQgaXQgaXMgbm90IHByb2JsZW0gZm9yIGRyYWd1bGFyLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAyXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSwge2NvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zfSk7XFxuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSgpIHtcXG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pICsgMTtcXG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLCB7XFxuICAgICAgICBjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArIFxcJy1jb3B5XFwnXFxuICAgICAgfSk7XFxuICAgIH07XFxuICAgICRzY29wZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbSgpIHtcXG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xcbiAgICB9O1xcbiAgfV0pXFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVSZW1vdmVPblNwaWxsL2V4YW1wbGVSZW1vdmVPblNwaWxsLmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPlJlbW92ZSBvbiBzcGlsbDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5OZWVkIHRvIGJlIGFibGUgdG8gcXVpY2tseSBkZWxldGUgc3R1ZmYgd2hlbiBpdCBzcGlsbHMgb3V0IG9mIHRoZSBjaG9zZW4gY29udGFpbmVycz88L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJSZW1vdmVPblNwaWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXCdzaW5nbGUxXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgc29tZXdoZXJlIGluIHRoaXMgY29udGFpbmVyLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gaGVyZSwgSVxcJ2xsIGRpZSBhIGZpZXJ5IGRlYXRoLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2luZ2xlKV0sIHsgcmVtb3ZlT25TcGlsbDogdHJ1ZSB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVSZXZlcnRPblNwaWxsL2V4YW1wbGVSZXZlcnRPblNwaWxsLmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPlJldmVydCBvbiBzcGlsbDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5CeSBkZWZhdWx0LCBkcm9wcGluZyBhbiBlbGVtZW50IG91dHNpZGUgb2YgYW55IGtub3duIGNvbnRhaW5lcnMgd2lsbCBrZWVwIHRoZSBlbGVtZW50IGluIHRoZSBsYXN0IHBsYWNlIGl0IGhvdmVyZWQgb3Zlci4gWW91IGNhbiBtYWtlIGVsZW1lbnRzIGdvIGJhY2sgaG9tZSBpZiB0aGV5XFwncmUgZHJvcHBlZCBvdXRzaWRlIG9mIGtub3duIGNvbnRhaW5lcnMsIHRvby48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJSZXZlcnRPblNwaWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXCdsZWZ0NFxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFwncmlnaHQ0XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVmdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZ2h0KV0sIHsgcmV2ZXJ0T25TcGlsbDogdHJ1ZSB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+U2Nyb2xsaW5nIGRyYWc8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPiBDb250YWlucmUgY2FuIGJlIHNjcm9sbGVkIGJ5IGhvdmVyaW5nIGRyYWdnZWQgaXRlbSBvdmVyIG1vc3QgdG9wIHZpc2libGUgaXRlbSBvciBtb3N0IGJvdHRvbSwgc2Nyb2xsIGRpcmVjdGlvbiByZXNwZWN0aXZlbHkuXFxuICAgIDwvbGFiZWw+XFxuICAgIDxkaXYgbmctY29udHJvbGxlcj1cXFwiU2Nyb2xsaW5nRHJhZ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJWZXJ0aWNhbCBoZWlnaHRMaW1pdFxcXCI+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDE8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA3LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA5LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxMC48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMTEuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDEyLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxMy48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJwYXJ0aWFscy9wYXJ0aWFsLWNvbnRyaWJ1dGUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgICAgIENvbnRyaWJ1dGluZyBub3RlcyB3aWxsIGJlIG1vdmVkIGhlcmUsIHNpbmNlIHRoZW4sIHBsZWFzZSB1c2UgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXIvYmxvYi9tYXN0ZXIvQ09OVFJJQlVUSU5HLm1kXFxcIj5jb250cmlidXRpb24gbm90ZXMgb24gZ2l0aHViPC9hPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInBhcnRpYWxzL3BhcnRpYWwtZG9jcy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gIDxkaXYgaWQ9XFxcInJvd09mZmNhbnZhc1xcXCIgY2xhc3M9XFxcInJvdyByb3ctb2ZmY2FudmFzIHJvdy1vZmZjYW52YXMtbGVmdFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0zIHNpZGViYXItb2ZmY2FudmFzXFxcIiBpZD1cXFwic2lkZWJhclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8YSB1aS1zcmVmPVxcXCJkb2NzLmRldGFpbCh7bGluazpcXCdkb2NzSW5zdGFsbFxcJ30pXFxcIiB1aS1zcmVmLWFjdGl2ZT1cXFwiYWN0aXZlXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5JbnN0YWxsYXRpb248L2E+XFxuICAgICAgICA8YSBuZy1yZXBlYXQ9XFxcImV4YW1wbGUgaW4gZXhhbXBsZXNMaXN0XFxcIiB1aS1zcmVmPVxcXCJkb2NzLmRldGFpbCh7bGluazpleGFtcGxlLmxpbmt9KVxcXCIgdWktc3JlZi1hY3RpdmU9XFxcImFjdGl2ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+e3tleGFtcGxlLnRpdGxlfX08L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tLy5zaWRlYmFyLW9mZmNhbnZhcy0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTlcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJwdWxsLWxlZnQgdmlzaWJsZS14c1xcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZVNpZGViYXIoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4teHNcXFwiPlRvZ2dsZSBuYXY8L2J1dHRvbj5cXG4gICAgICA8L3A+XFxuICAgICAgPCEtLSBkb2NzLmRldGFpbCAtLT5cXG4gICAgICA8ZGl2IHVpLXZpZXc+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tLy5jb2wteHMtMTIuY29sLXNtLTktLT5cXG4gIDwvZGl2PlxcbiAgPCEtLS9yb3ctLT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJwYXJ0aWFscy9wYXJ0aWFsLWhvbWUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8IS0tLy5zaWRlYmFyLW9mZmNhbnZhcy0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxuICAgICAgICA8aDE+RFJBR1VMQVI8L2gxPlxcbiAgICAgICAgPHA+QW5ndWxhciBkcmFnJmRyb3AgYmFzZWQgb24gPGEgaHJlZj1cXFwiaHR0cDovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxcXCI+ZHJhZ3VsYTwvYT4uPC9wPlxcbiAgICAgICAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHVpLXNyZWY9XFxcImRvY3NcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+TGl2ZSBleGFtcGxlcyBpbiBkb2NzPC9hPjwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICAgICAgPHA+QnJvd3NlciBzdXBwb3J0IGluY2x1ZGVzIGV2ZXJ5IHNhbmUgYnJvd3NlciBhbmQgKipJRTcrKiouIDxzdWI+XyhHcmFudGVkIHlvdSBwb2x5ZmlsbCB0aGUgZnVuY3Rpb25hbCBgQXJyYXlgIG1ldGhvZHMgaW4gRVM1KV88L3N1Yj48L3A+XFxuICAgICAgICAgIDxoMj5JbnNwaXJhdGlvbjwvaDI+XFxuICAgICAgICAgIDxwPkhhdmUgeW91IGV2ZXIgd2FudGVkIGEgZHJhZyBhbmQgZHJvcCBsaWJyYXJ5IHRoYXQganVzdCB3b3Jrcz8gVGhhdCBhY3R1YWxseSB1bmRlcnN0YW5kcyB3aGVyZSB0byBwbGFjZSB0aGUgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSBkcm9wcGVkPyBUaGF0IGRvZXNu4oCZdCBuZWVkIHlvdSB0byBkbyBhIHppbGxpb24gdGhpbmdzIHRvIGdldCBpdCB0byB3b3JrPyBXZWxsLCBzbyBkaWQgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhXFxcIj5OaWNvbGFzIEJldmFjcXVhPC9hPiBhbmQgSSBoYXZlIGZvcmtlZCBpdCBpbnRvIGFuZ3VsYXIgbW9kdWxlIGFuZCBhbHNvIHB1dCBzb21lIGZlYXR1cmVzITwvcD5cXG4gICAgICAgICAgPHA+PGI+QWN0dWFsIHZlcnNpb24gMS4zLjEgaXMgYmFzZWQgb24gZHJhZ3VsYSAyLjAuMyBhbmQgdGVzdGVkIHdpdGggYW5ndWxhciAxLjQuMS48L2I+PC9wPlxcbiAgICAgICAgICA8aDI+RGlmZmVyZW5jZXMgb2YgZHJhZ3VsYXIgKGFnYWluc3QgZHJhZ3VsYSk8L2gyPlxcbiAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgPGxpPnJlcGxhY2VkIGNyb3NzdmVudCB3aXRoIGFuZ3VsYXJzIGV2ZW50IGJpbmRpbmc8L2xpPlxcbiAgICAgICAgICAgIDxsaT5yZXBsYWNlZCBjb250cmEuZW1pdHRlciB3aXRoICRzY29wZS4kZW1pdCBpZiBzY29wZSBwcm92aWRlZCBpbiBvcHRpb25zIChvcHRpb25zLnNjb3BlKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmVuY2Fwc3VsYXRlZCB0aGUgY29kZSBpbnRvIGFuZ3VsYXIgZmFjdG9yeSAoZHJhZ3VsYXJTZXJ2aWNlKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmNyZWF0ZWQgZGlyZWN0aXZlIGRyYWd1bGFyIHdoZXJlIG9wdGlvbnMgY2FuIGJlIHBhc3NlZCBwcm92aWRpbmcgc2NvcGUgcHJvcGVydHkgbmFtZTwvbGk+XFxuICAgICAgICAgICAgPGxpPmJvdGggc2VydmljZSBhbmQgZGlyZWN0aXZlIHByb3ZpZGVkIGFzIGFuZ3VsYXIgbW9kdWxlIChkcmFndWxhck1vZHVsZSk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hdXRvbWF0aWMgZGlyZWN0aW9uIGlmIG5vdCBwcm92aWRlZCBpbiBvcHRpb25zLCBpbnN0ZWFkIG9mIGRlZmF1bHQgdmVydGljYWw8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hY2NlcHRpbmcgYXJyYXlsaWtlIG9iamVjdHMgYXMgY29udGFpbmVycyBhcnJheTwvbGk+XFxuICAgICAgICAgICAgPGxpPmFjY2VwdGluZyBjdXN0b20gY2xhc3NlcyB2aWEgb3B0aW9uLmNsYXNzZXM8L2xpPlxcbiAgICAgICAgICAgIDxsaT5uYW1lc3BhY2VkIGNvbnRhaW5lcnMgZ3JvdXBzIGF2YWlsYWJsZSB2aWEgb3B0aW9uLm5hbWVTcGFjZTwvbGk+XFxuICAgICAgICAgICAgPGxpPmJvdW5kaW5nQm94IChkcmFnZ2luZyBlbGVtZW50IGNhbiBtZSBtb3ZlZCBvbmx5IGluIHNwZWNpZmljIGFyZWEpPC9saT5cXG4gICAgICAgICAgICA8bGk+bG9ja1gvWSAoZHJhZ2dpbmcgZWxlbWVudCBjYW4gbWUgbW92ZWQgb25seSBpbiBzcGVjaWZpYyBkaXJlY3Rpb24pPC9saT5cXG4gICAgICAgICAgICA8bGk+bW9yZSBleGFtcGxlczwvbGk+XFxuICAgICAgICAgICAgPGxpPmFjY2VwdCBKU09OIG9wdGlvbnMgaW4gZHJhZ3VsYXIgZGlyZWN0aXZlICgjMik8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hZGQvcmVtb3ZlIHdpdGggbmctcmVwZWF0PC9saT5cXG4gICAgICAgICAgICA8bGk+YWRkZWQgc3ludGF4IGhpZ2hsaWdodGVyIHRvIGV4YW1wbGUgY29kZXM8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8aDI+VG9kbzwvaDI+XFxuICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICA8bGk+Z2gtcGFnZXMgYXMgbWl4ZWQgYXBpIGFuZCBleGFtcGxlczwvbGk+XFxuICAgICAgICAgICAgPGxpPmV4YW1wbGUgZm9yIGRlbGF5PC9saT5cXG4gICAgICAgICAgICA8bGk+by5pc0NvbnRhaW5lciBpbiBfaXNDb250YWluZXIgKGZuIG8uaXNDb250YWluZXJHZXRNb2RlbChjb250YWluZXJFbG0pKTwvbGk+XFxuICAgICAgICAgICAgPGxpPnNvbHZlIG1peGluZyB3aXRoIGFuZCB3aXRob3V0IG1vZGVsIGNvbnRhaW5lcnM8L2xpPlxcbiAgICAgICAgICAgIDxsaT5yZW1vdmUgbnBtIHdvcmtmbG93PC9saT5cXG4gICAgICAgICAgICA8bGk+c3VwcG9ydCBzZWxlY3RvcnMgaW4gc2VydmljZSAoIzIpPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPGgyPkZlYXR1cmVzPC9oMj5cXG4gICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgIDxsaT5wcm92aWRlZCBhcyBzZXJ2aWNlIGFuZCBhbHNvIGFzIGRpcmVjdGl2ZTwvbGk+XFxuICAgICAgICAgICAgPGxpPlN1cGVyIGVhc3kgdG8gc2V0IHVwPC9saT5cXG4gICAgICAgICAgICA8bGk+Tm8gYmxvYXRlZCBkZXBlbmRlbmNpZXM8L2xpPlxcbiAgICAgICAgICAgIDxsaT48c3Ryb25nPkZpZ3VyZXMgb3V0IHNvcnQgb3JkZXI8L3N0cm9uZz4gb24gaXRzIG93bjwvbGk+XFxuICAgICAgICAgICAgPGxpPkEgc2hhZG93IHdoZXJlIHRoZSBpdGVtIHdvdWxkIGJlIGRyb3BwZWQgb2ZmZXJzIDxzdHJvbmc+dmlzdWFsIGZlZWRiYWNrPC9zdHJvbmc+PC9saT5cXG4gICAgICAgICAgICA8bGk+VG91Y2ggZXZlbnRzITwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxoMj5Gb3IgaW5zdGFsbGF0aW9uLCB1c2FnZSBhbmQgZXhhbXBsZXMgZ28gdG8gPGEgdWktc3JlZj1cXFwiZG9jc1xcXCI+ZG9jczwvYT48L2gyPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPCEtLS9yb3ctLT5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0vLmNvbC14cy0xMi5jb2wtc20tOS0tPlxcbiAgPC9kaXY+XFxuICA8IS0tL3Jvdy0tPlxcbjwvZGl2PlxcblwiKTt9XSk7IiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBkcmFndWxhciBEaXJlY3RpdmUgYnkgTHVja3lsb29rZSBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhclxuICogQW5ndWxhciB2ZXJzaW9uIG9mIGRyYWd1bGEgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGFcbiAqL1xuIHZhciBkcmFndWxhck1vZHVsZSA9IHJlcXVpcmUoJy4vZHJhZ3VsYXJNb2R1bGUnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZHJhZ3VsYXJNb2R1bGUuZGlyZWN0aXZlKCdkcmFndWxhcicsIFsnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24oZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbigkc2NvcGUsIGlFbG0sIGlBdHRycykge1xuXG4gICAgICB2YXIgb3B0aW9ucyA9ICRzY29wZVtpQXR0cnMuZHJhZ3VsYXJdIHx8IHRyeUpzb24oaUF0dHJzLmRyYWd1bGFyKTtcblxuICAgICAgZnVuY3Rpb24gdHJ5SnNvbihqc29uKSB7XG4gICAgICAgIHRyeSB7IC8vIEkgZG9udCBsaWtlIHRyeSBjYXRjaCBzb2x1dGlvbnMgYnV0IEkgaGF2ZW50IGZpbmQgc2F0dGlzZnlpbmcgd2F5IG9mIGNoY2Vja2luZyBqc29uIHZhbGlkaXR5LlxuICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMuY29udGFpbmVyc01vZGVsICYmIHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCA9PT0gJ3N0cmluZycpe1xuICAgICAgICBvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCA9ICRzY29wZS4kZXZhbChvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCk7XG4gICAgICB9XG5cbiAgICAgIGRyYWd1bGFyU2VydmljZShpRWxtWzBdLCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG59XSlcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdkcmFndWxhck1vZHVsZScsIFtdKTtcblxuKHtcImRyYWd1bGFyRGlyZWN0aXZlXCI6cmVxdWlyZShcIi4vZHJhZ3VsYXJEaXJlY3RpdmUuanNcIiksXCJkcmFndWxhclNlcnZpY2VcIjpyZXF1aXJlKFwiLi9kcmFndWxhclNlcnZpY2UuanNcIil9KTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogZHJhZ3VsYXIgTW9kdWxlIGFuZCBTZXJ2aWNlIGJ5IEx1Y2t5bG9va2UgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXJcbiAqIEFuZ3VsYXIgdmVyc2lvbiBvZiBkcmFndWxhIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhXG4gKi9cblxudmFyIGRyYWd1bGFyTW9kdWxlID0gcmVxdWlyZSgnLi9kcmFndWxhck1vZHVsZScpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmRyYWd1bGFyTW9kdWxlLmZhY3RvcnkoJ2RyYWd1bGFyU2VydmljZScsIFsnJHJvb3RTY29wZScsICckdGltZW91dCcsIGZ1bmN0aW9uIGRyYWd1bGEoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcblxuICB2YXIgY29udGFpbmVyc05hbWVTcGFjZWQgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVyc1xuICAgIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVycyBtb2RlbHNcbiAgICBfbWlycm9yOyAvLyBtaXJyb3IgaW1hZ2VcblxuICByZXR1cm4gZnVuY3Rpb24oaW5pdGlhbENvbnRhaW5lcnMsIG9wdGlvbnMpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxDb250YWluZXJzKSAmJiAhYW5ndWxhci5pc0VsZW1lbnQoaW5pdGlhbENvbnRhaW5lcnMpICYmICFpbml0aWFsQ29udGFpbmVyc1swXSkge1xuICAgICAgLy8gdGhlbiBjb250YWluZXJzIGFyZSBub3QgcHJvdmlkZWQsIG9ubHkgb3B0aW9uc1xuICAgICAgb3B0aW9ucyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBfc291cmNlLCAvLyBzb3VyY2UgY29udGFpbmVyXG4gICAgICBfaXRlbSwgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gICAgICBfc291cmNlTW9kZWwsIC8vIHNvdXJjZSBjb250YWluZXIgbW9kZWxcbiAgICAgIF9pdGVtTW9kZWwsIC8vIGl0ZW0tbW9kZWwgYmVpbmcgZHJhZ2dlZFxuICAgICAgX3RhcmdldE1vZGVsLCAvLyB0YXJnZXQgY29udGFpbmVyIG1vZGVsXG4gICAgICBfbGFzdFRhcmdldE1vZGVsLCAvLyBsYXN0IHRhcmdldCBjb250YWluZXIgbW9kZWxcbiAgICAgIF9vZmZzZXRYLCAvLyByZWZlcmVuY2UgeFxuICAgICAgX29mZnNldFksIC8vIHJlZmVyZW5jZSB5XG4gICAgICBfb2Zmc2V0WHIsIC8vIHJlZmVyZW5jZSB4IHJpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfb2Zmc2V0WWIsIC8vIHJlZmVyZW5jZSB5IGJvdHRvbSBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2NsaWVudFgsIC8vIGNhY2hlIGNsaWVudCB4LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfY2xpZW50WSwgLy8gY2FjaGUgY2xpZW50IHksIGluaXQgYXQgZ3JhYiwgdXBkYXRlIGF0IGRyYWdcbiAgICAgIF9taXJyb3JXaWR0aCwgLy8gbWlycm9yIHdpZHRoIGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfbWlycm9ySGVpZ2h0LCAvLyBtaXJyb3IgaGVpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfaW5pdGlhbFNpYmxpbmcsIC8vIHJlZmVyZW5jZSBzaWJsaW5nIHdoZW4gZ3JhYmJlZFxuICAgICAgX2N1cnJlbnRTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyBub3dcbiAgICAgIF9pbml0aWFsSW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50SW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCBub3dcbiAgICAgIF9sYXN0T3ZlckVsZW0sIC8vIGxhc3QgZWxlbWVudCBiZWhpbmQgdGhlIGN1cnNvciAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfbGFzdE92ZXJDbGFzcywgLy8gbGFzdCBvdmVyQ2xhc3MgdXNlZCAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfY29weSwgLy8gaXRlbSB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29weU1vZGVsLCAvLyBpdGVtLW1vZGVsIHVzZWQgZm9yIGNvcHlpbmdcbiAgICAgIF9jb250YWluZXJzID0ge30sIC8vIGNvbnRhaW5lcnMgbWFuYWdlZCBieSB0aGUgZHJha2VcbiAgICAgIF9jb250YWluZXJzTW9kZWwgPSB7fSwgLy8gY29udGFpbmVycyBtb2RlbFxuICAgICAgX3JlbmRlclRpbWVyLCAvLyB0aW1lciBmb3Igc2V0VGltZW91dCByZW5kZXJNaXJyb3JJbWFnZVxuICAgICAgX2lzQ29udGFpbmVyLCAvLyBpbnRlcm5hbCBpc0NvbnRhaW5lclxuICAgICAgX3RhcmdldENvbnRhaW5lciwgLy8gZHJvcHBhYmxlIGNvbnRhaW5lciB1bmRlciBkcmFnIGl0ZW1cbiAgICAgIGRlZmF1bHRDbGFzc2VzID0ge1xuICAgICAgICBtaXJyb3I6ICdndS1taXJyb3InLFxuICAgICAgICBoaWRlOiAnZ3UtaGlkZScsXG4gICAgICAgIHVuc2VsZWN0YWJsZTogJ2d1LXVuc2VsZWN0YWJsZScsXG4gICAgICAgIHRyYW5zaXQ6ICdndS10cmFuc2l0JyxcbiAgICAgICAgb3ZlckFjdGl2ZTogJ2d1LW92ZXItYWN0aXZlJyxcbiAgICAgICAgb3ZlckFjY2VwdHM6ICdndS1vdmVyLWFjY2VwdCcsXG4gICAgICAgIG92ZXJEZWNsaW5lczogJ2d1LW92ZXItZGVjbGluZSdcbiAgICAgIH0sXG4gICAgICBvID0geyAvLyBvcHRpb25zXG4gICAgICAgIGNsYXNzZXM6IGRlZmF1bHRDbGFzc2VzLFxuICAgICAgICBjb250YWluZXJzOiBmYWxzZSxcbiAgICAgICAgbW92ZXM6IGFsd2F5cyxcbiAgICAgICAgYWNjZXB0czogYWx3YXlzLFxuICAgICAgICBpc0NvbnRhaW5lcjogbmV2ZXIsXG4gICAgICAgIGNvcHk6IGZhbHNlLFxuICAgICAgICBkZWxheTogZmFsc2UsXG4gICAgICAgIGludmFsaWQ6IGludmFsaWRUYXJnZXQsXG4gICAgICAgIHJldmVydE9uU3BpbGw6IGZhbHNlLFxuICAgICAgICByZW1vdmVPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgZHJhZ092ZXJDbGFzc2VzOiBmYWxzZSxcbiAgICAgICAgbG9ja1g6IGZhbHNlLFxuICAgICAgICBsb2NrWTogZmFsc2UsXG4gICAgICAgIGJvdW5kaW5nQm94OiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiBmYWxzZVxuICAgICAgfTtcblxuICAgIGlmICghaXNFbGVtZW50KG8uYm91bmRpbmdCb3gpKSB7XG4gICAgICBvLmJvdW5kaW5nQm94ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmNsYXNzZXMpIHtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRlZmF1bHRDbGFzc2VzLCBvcHRpb25zLmNsYXNzZXMpO1xuICAgICAgYW5ndWxhci5leHRlbmQob3B0aW9ucy5jbGFzc2VzLCBkZWZhdWx0Q2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgYW5ndWxhci5leHRlbmQobywgb3B0aW9ucyk7XG5cbiAgICBpZiAoby5kZWxheSA9PT0gdHJ1ZSkge1xuICAgICAgby5kZWxheSA9IDMwMDtcbiAgICB9XG5cbiAgICAvLyBnZXQgaW5pdGlhbCBjb250YWluZXJzIGZyb20gb3B0aW9ucywgYXJndW1lbnQgb3IgZmFsbCBiYWNrIHRvIGVtcHR5IGFycmF5IChjb250YWluZXJzIGNhbiBiZSBhZGRlZCBsYXRlcilcbiAgICBpbml0aWFsQ29udGFpbmVycyA9IG8uY29udGFpbmVycyB8fCAoaW5pdGlhbENvbnRhaW5lcnMgPyBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpIDogW10pO1xuICAgIGlmIChvLmNvbnRhaW5lcnMpIHtcbiAgICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBvLmNvbnRhaW5lcnNcbiAgICAgIGluaXRpYWxDb250YWluZXJzID0gbWFrZUFycmF5KGluaXRpYWxDb250YWluZXJzKTtcbiAgICB9XG4gICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICBvLmNvbnRhaW5lcnNNb2RlbCA9IEFycmF5LmlzQXJyYXkoby5jb250YWluZXJzTW9kZWxbMF0pID8gby5jb250YWluZXJzTW9kZWwgOiBbby5jb250YWluZXJzTW9kZWxdO1xuICAgIH1cblxuICAgIC8vIGZlZWQgbmFtZXNwYWNlZCBjb250YWluZXJzIGdyb3VwcyBhbmQgb3B0aW9uYWx5IHNoYWRvdyBpdCBieSBtb2RlbHNcbiAgICBpZiAoby5uYW1lU3BhY2UpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShvLm5hbWVTcGFjZSkpIHtcbiAgICAgICAgby5uYW1lU3BhY2UgPSBbby5uYW1lU3BhY2VdO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcm9jZWVkTmFtZVNwYWNlcyhfY29udGFpbmVycywgY29udGFpbmVyc05hbWVTcGFjZWQsIG5hbWVTcGFjZSwgaW5pdGlhbENvbnRhaW5lcnMpIHtcbiAgICAgICAgaWYgKCFjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdKSB7XG4gICAgICAgICAgY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0sIGluaXRpYWxDb250YWluZXJzKTtcbiAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXSA9IGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV07XG4gICAgICB9XG4gICAgICBvLm5hbWVTcGFjZS5mb3JFYWNoKGZ1bmN0aW9uIGVhY2hOYW1lU3BhY2UobmFtZVNwYWNlKSB7XG4gICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycyk7XG4gICAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzTW9kZWwsIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwsIG5hbWVTcGFjZSwgby5jb250YWluZXJzTW9kZWwpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgX2lzQ29udGFpbmVyID0gaXNDb250YWluZXJOYW1lU3BhY2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWZhdWx0IChub3QgdXNpbmcgbmFtZVNwYWNlcylcbiAgICAgIF9jb250YWluZXJzID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgICBfaXNDb250YWluZXIgPSBpc0NvbnRhaW5lcjtcbiAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICBfY29udGFpbmVyc01vZGVsID0gby5jb250YWluZXJzTW9kZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9yZWdpc3RlciBldmVudHNcbiAgICBldmVudHMoKTtcblxuICAgIHZhciBhcGkgPSB7XG4gICAgICBhZGRDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdhZGQnKSxcbiAgICAgIHJlbW92ZUNvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ3JlbW92ZScpLFxuICAgICAgY29udGFpbmVyczogX2NvbnRhaW5lcnMsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGNhbmNlbDogY2FuY2VsLFxuICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHJldHVybiBhcGk7XG5cbiAgICAvLyBtYWtlIGFycmF5IGZyb20gYXJyYXktbGlrZSBvYmplY3RzIG9yIGZyb20gc2luZ2xlIGVsZW1lbnRcbiAgICBmdW5jdGlvbiBtYWtlQXJyYXkoYWxsKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhbGwpKSB7XG4gICAgICAgIHJldHVybiBhbGw7XG4gICAgICB9XG4gICAgICBpZiAoYWxsLmxlbmd0aCkgeyAvLyBpcyBhcnJheS1saWtlXG4gICAgICAgIHZhciBpQWxsID0gYWxsLmxlbmd0aCxcbiAgICAgICAgICBuZXdBcnJheSA9IFtdO1xuICAgICAgICB3aGlsZSAoaUFsbCkge1xuICAgICAgICAgIGlBbGwtLTtcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGFsbFtpQWxsXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgfSBlbHNlIHsgLy8gaXMgb25lIGVsZW1lbnRcbiAgICAgICAgcmV0dXJuIFthbGxdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCBvciByZW1vdmUgY29udGFpbmVycyAtIGRlcHJlY2F0ZWRcbiAgICBmdW5jdGlvbiBtYW5pcHVsYXRlQ29udGFpbmVycyhvcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFkZE9yUmVtb3ZlKGFsbCkge1xuICAgICAgICB2YXIgY2hhbmdlcyA9IEFycmF5LmlzQXJyYXkoYWxsKSA/IGFsbCA6IG1ha2VBcnJheShhbGwpO1xuICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICAgICAgICBpZiAoby5uYW1lU3BhY2UpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChvLm5hbWVTcGFjZSwgZnVuY3Rpb24gYWRkUmVtb3ZlTmFtZXNwYWNlZChjb250YWluZXJzLCBuYW1lU3BhY2UpIHtcbiAgICAgICAgICAgICAgaWYgKG9wID09PSAnYWRkJykge1xuICAgICAgICAgICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0ucHVzaChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLmFkZENvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfY29udGFpbmVyc1tuYW1lU3BhY2VdLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLnJlbW92ZUNvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgICAgX2NvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5hZGRDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfY29udGFpbmVycy5zcGxpY2UoX2NvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLCAxKTtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UucmVtb3ZlQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ29udGFpbmVyKGVsKSB7XG4gICAgICByZXR1cm4gYXBpLmNvbnRhaW5lcnMuaW5kZXhPZihlbCkgIT09IC0xIHx8IG8uaXNDb250YWluZXIoZWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ29udGFpbmVyTmFtZVNwYWNlZChlbCkge1xuICAgICAgdmFyIG5hbWVTcGFjZTtcbiAgICAgIGZvciAobmFtZVNwYWNlIGluIGFwaS5jb250YWluZXJzKSB7XG4gICAgICAgIGlmIChhcGkuY29udGFpbmVycy5oYXNPd25Qcm9wZXJ0eShuYW1lU3BhY2UpICYmIGFwaS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZihlbCkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldmVudHMocmVtKSB7XG4gICAgICB2YXIgb3AgPSByZW0gPyAnb2ZmJyA6ICdvbic7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsIG9wLCAnbW91c2V1cCcsIHJlbGVhc2UpO1xuXG4gICAgICBpbml0aWFsQ29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIGFkZE1vdXNlRG93bihjb250YWluZXIpIHtcbiAgICAgICAgcmVnRXZlbnQoY29udGFpbmVyLCAnb24nLCAnbW91c2Vkb3duJywgZ3JhYik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZXZlbnRzKHRydWUpO1xuICAgICAgYXBpLnJlbW92ZUNvbnRhaW5lcihfY29udGFpbmVycyk7XG4gICAgICByZWxlYXNlKHt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiKGUpIHtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIHZhciBpdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgIC8vIGZpbHRlciBzb21lIG9kZCBzaXR1YXRpb25zXG4gICAgICBpZiAoKGUud2hpY2ggIT09IDAgJiYgZS53aGljaCAhPT0gMSkgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm47IC8vIHdlIG9ubHkgY2FyZSBhYm91dCBob25lc3QtdG8tZ29kIGxlZnQgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgZHJhZyBjYW4gc3RhcnRcbiAgICAgIGlmIChzdGFydChpdGVtKSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG9tYXRpY2x5IGRldGVjdCBkaXJlY3Rpb24gb2YgZWxlbWVudHMgaWYgbm90IHNldCBpbiBvcHRpb25zXG4gICAgICBpZiAoIW8uZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgcGFyZW50SGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICBwYXJlbnRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBjaGlsZEhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGNoaWxkV2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuICAgICAgICBvLmRpcmVjdGlvbiA9IHBhcmVudEhlaWdodCAvIGNoaWxkSGVpZ2h0IDwgcGFyZW50V2lkdGggLyBjaGlsZFdpZHRoID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXMsIHVzZWQgdG8gcmVuZGVyIF9taXJyb3IgZm9yIGZpcnN0IHRpbWVcbiAgICAgIHZhciBvZmZzZXQgPSBnZXRPZmZzZXQoX2l0ZW0pO1xuICAgICAgX29mZnNldFggPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5sZWZ0O1xuICAgICAgX29mZnNldFkgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC50b3A7XG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIC8vIGxpbWl0aW5nIGFyZWEgb2YgX21pcnJvciBtb3ZlbWVudCwgZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXNcbiAgICAgIGlmIChvLmJvdW5kaW5nQm94KSB7XG4gICAgICAgIF9vZmZzZXRYciA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LnJpZ2h0O1xuICAgICAgICBfb2Zmc2V0WWIgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC5ib3R0b207XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbGF5ZWQgcmVuZGVyaW5nXG4gICAgICBpZiAodHlwZW9mIG8uZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIF9yZW5kZXJUaW1lciA9ICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlbmRlck1pcnJvckFuZERyYWcoZSk7XG4gICAgICAgIH0sIG8uZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckFuZERyYWcoZSkge1xuICAgICAgcmVuZGVyTWlycm9ySW1hZ2UoKTtcbiAgICAgIC8vIGluaXRpYWwgcG9zaXRpb25cbiAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX29mZnNldFggKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9vZmZzZXRZICsgJ3B4JztcblxuICAgICAgZHJhZyhlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGl0ZW0pIHtcbiAgICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuXG4gICAgICBpZiAoYXBpLmRyYWdnaW5nICYmIF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBhbHJlYWR5IGRyYWdnaW5nXG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBkb24ndCBkcmFnIGNvbnRhaW5lciBpdHNlbGZcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKCFfaXNDb250YWluZXIoaXRlbS5wYXJlbnRFbGVtZW50KSkge1xuICAgICAgICAvLyBicmVhayBsb29wIGlmIHVzZXIgdHJpZXMgdG8gZHJhZyBpdGVtIHdoaWNoIGlzIGNvbnNpZGVyZWQgaW52YWxpZCBoYW5kbGVcbiAgICAgICAgaWYgKG8uaW52YWxpZChpdGVtLCBoYW5kbGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudEVsZW1lbnQ7IC8vIGRyYWcgdGFyZ2V0IHNob3VsZCBiZSBpbW1lZGlhdGUgY2hpbGQgb2YgY29udGFpbmVyXG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBsYXN0IGl0ZW0gY2hjZWNrXG4gICAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVyID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKCFvLm1vdmVzKGl0ZW0sIGNvbnRhaW5lciwgaGFuZGxlLCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwpKSB7IC8vIGlzIG1vdmFibGVcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBlbmQoKTtcblxuICAgICAgLy8gcHJlcGFyZSBtb2RlbHMgb3BlcmF0aW9uc1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGluaXRpYWxDb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSxcbiAgICAgICAgICBpdGVtSW5kZXggPSBkb21JbmRleE9mKGl0ZW0sIGNvbnRhaW5lcik7XG5cbiAgICAgICAgX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBpdGVtSW5kZXg7XG4gICAgICAgIF9zb3VyY2VNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsW2NvbnRhaW5lckluZGV4XTtcbiAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICBfaXRlbU1vZGVsID0gX3NvdXJjZU1vZGVsW2l0ZW1JbmRleF07XG4gICAgICAgIGlmIChvLmNvcHkpIHtcbiAgICAgICAgICBfY29weU1vZGVsID0gYW5ndWxhci5jb3B5KF9pdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLmNvcHkpIHtcbiAgICAgICAgX2NvcHkgPSBpdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgYWRkQ2xhc3MoX2NvcHksIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfY29weSwgaXRlbSwgX2NvcHlNb2RlbCwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZENsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIH1cblxuICAgICAgX3NvdXJjZSA9IGNvbnRhaW5lcjtcbiAgICAgIF9pdGVtID0gaXRlbTtcbiAgICAgIF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IG5leHRFbChpdGVtKTtcblxuICAgICAgYXBpLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2RyYWcnLCBfaXRlbSwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludmFsaWRUYXJnZXQoZWwpIHtcbiAgICAgIHJldHVybiBlbC50YWdOYW1lID09PSAnQScgfHwgZWwudGFnTmFtZSA9PT0gJ0JVVFRPTic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kKCkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJyEhISEhIEkgaGF2ZW50IHNlZW4gdGhpcyBtZXNzYWdlIGluIGFueSBjYXNlJyk7XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgICAgZHJvcChpdGVtLCBpdGVtLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGVhc2UoZSkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSk7XG5cbiAgICAgIGlmIChkcm9wVGFyZ2V0ICYmIChvLmNvcHkgPT09IGZhbHNlIHx8IGRyb3BUYXJnZXQgIT09IF9zb3VyY2UpKSB7XG4gICAgICAgIC8vIGZvdW5kIHZhbGlkIHRhcmdldCBhbmQgKGlzIG5vdCBjb3B5IGNhc2Ugb3IgdGFyZ2V0IGlzIG5vdCBpbml0aWFsIGNvbnRhaW5lcilcbiAgICAgICAgZHJvcChpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAoby5yZW1vdmVPblNwaWxsKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFmdGVyIHJlbGVhc2UgdGhlcmUgaXMgbm8gY29udGFpbmVyIGhvdmVyZWRcbiAgICAgIF90YXJnZXRDb250YWluZXIgPSBudWxsO1xuXG4gICAgICAvLyByZW1vdmUgY2xhc3NlcyBpZiB1c2VkXG4gICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiYgX2xhc3RPdmVyRWxlbSkge1xuICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgX2xhc3RPdmVyRWxlbSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJvcChpdGVtLCB0YXJnZXQpIHtcbiAgICAgIGlmIChvLnNjb3BlICYmIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCB0YXJnZXQsIF9zb3VyY2UsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcblxuICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaXRlbU1vZGVsID0gX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsO1xuICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKF90YXJnZXRNb2RlbC5pbmRleE9mKGl0ZW1Nb2RlbCksIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KG8uY29weSA/ICdjYW5jZWwnIDogJ3JlbW92ZScsIGl0ZW0sIHBhcmVudCwgaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsKHJldmVydCkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJldmVydHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHJldmVydCA6IG8ucmV2ZXJ0T25TcGlsbCxcbiAgICAgICAgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCchISEhISEhISEhISEhISEhISBJIHRoaW5rIHRoaXMgaXMgbmV2ZXIgcG9zc2libGUgYmVjYXVzZSBjb3B5IGNhbm5vdCBiZSBwbGFjZWQgaW50byBzb3VyY2UnKTtcbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfY29weSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSwgMSwgX2NvcHlNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQocGFyZW50KTtcbiAgICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiBvLmNvcHkgPT09IGZhbHNlICYmIHJldmVydHMpIHtcbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIF9zb3VyY2UuaW5zZXJ0QmVmb3JlKGl0ZW0sIF9pbml0aWFsU2libGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgICAgLy8gbW92ZSBiYWNrIHRvIGluaXRpYWwgcGxhY2VtZW50XG4gICAgICAgICAgbW92ZUluQ29udGFpbmVyc01vZGVsKF9pbml0aWFsSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlICYmIChpbml0aWFsIHx8IHJldmVydHMpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICByZW1vdmVNaXJyb3JJbWFnZSgpO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBybUNsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FuY2VsIHRpbWVyXG4gICAgICBpZiAoX3JlbmRlclRpbWVyKSB7XG4gICAgICAgICR0aW1lb3V0LmNhbmNlbChfcmVuZGVyVGltZXIpO1xuICAgICAgfVxuXG4gICAgICBfc291cmNlID0gX2l0ZW0gPSBfY29weSA9IF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IF9zb3VyY2VNb2RlbCA9IG51bGw7XG4gICAgICBfaXRlbU1vZGVsID0gX2NvcHlNb2RlbCA9IF9pbml0aWFsSW5kZXggPSBfY3VycmVudEluZGV4ID0gX3JlbmRlclRpbWVyID0gbnVsbDtcblxuICAgICAgYXBpLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnZW5kJywgaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXMgaXRlbSBjdXJyZW50bHkgcGxhY2VkIGluIG9yaWdpbmFsIGNvbnRhaW5lciBhbmQgb3JpZ2luYWwgcG9zaXRpb24/XG4gICAgZnVuY3Rpb24gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcykge1xuICAgICAgdmFyIHNpYmxpbmcgPSBzIHx8IChfbWlycm9yID8gX2N1cnJlbnRTaWJsaW5nIDogbmV4dEVsKF9pdGVtIHx8IF9jb3B5KSk7XG4gICAgICByZXR1cm4gdGFyZ2V0ID09PSBfc291cmNlICYmIHNpYmxpbmcgPT09IF9pbml0aWFsU2libGluZztcbiAgICB9XG5cbiAgICAvLyBmaW5kIHZhbGlkIGRyb3AgY29udGFpbmVyXG4gICAgZnVuY3Rpb24gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnRCZWhpbmRDdXJzb3I7XG4gICAgICB3aGlsZSAodGFyZ2V0ICYmICFhY2NlcHRlZCgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcblxuICAgICAgZnVuY3Rpb24gYWNjZXB0ZWQoKSB7XG4gICAgICAgIHZhciBhY2NlcHRzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF9pc0NvbnRhaW5lcih0YXJnZXQpKSB7IC8vIGlzIGRyb3BwYWJsZT9cbiAgICAgICAgICBfdGFyZ2V0Q29udGFpbmVyID0gdGFyZ2V0O1xuXG4gICAgICAgICAgdmFyIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKHRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvciksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UodGFyZ2V0LCBpbW1lZGlhdGUsIGNsaWVudFgsIGNsaWVudFkpLFxuICAgICAgICAgICAgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgYWNjZXB0cyA9IGluaXRpYWwgPyB0cnVlIDogby5hY2NlcHRzKF9pdGVtLCB0YXJnZXQsIF9zb3VyY2UsIHJlZmVyZW5jZSwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsKTtcblxuICAgICAgICAgIGlmIChhY2NlcHRzICYmIG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgICAgaWYgKCFvLm5hbWVTcGFjZSkge1xuICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW2FwaS5jb250YWluZXJzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lU3BhY2UgaW4gYXBpLmNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXBpLmNvbnRhaW5lcnMuaGFzT3duUHJvcGVydHkobmFtZVNwYWNlKSAmJiBhcGkuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YodGFyZ2V0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW25hbWVTcGFjZV1bYXBpLmNvbnRhaW5lcnNbbmFtZVNwYWNlXS5pbmRleE9mKHRhcmdldCldO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGNsYXNzIGlmIGVsZW1lbnQgaXMgZW5hYmxlZCBmb3IgaXQgYW5kIGl0IGhhcyBub3QgYWxyZWFkeSB0aGUgY2xhc3NcbiAgICAgICAgaWYgKG8uZHJhZ092ZXJDbGFzc2VzICYmXG4gICAgICAgICAgaGFzQ2xhc3ModGFyZ2V0LCBvLmNsYXNzZXMub3ZlckFjdGl2ZSkgJiZcbiAgICAgICAgICB0YXJnZXQgIT09IF9sYXN0T3ZlckVsZW0pIHtcblxuICAgICAgICAgIGlmIChfbGFzdE92ZXJFbGVtKSB7IC8vIGNsZWFyIGZyb20gcHJldmlvdXNcbiAgICAgICAgICAgIHJtQ2xhc3MoX2xhc3RPdmVyRWxlbSwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9sYXN0T3ZlckNsYXNzID0gYWNjZXB0cyA/IG8uY2xhc3Nlcy5vdmVyQWNjZXB0cyA6IG8uY2xhc3Nlcy5vdmVyRGVjbGluZXM7XG4gICAgICAgICAgYWRkQ2xhc3ModGFyZ2V0LCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgX2xhc3RPdmVyRWxlbSA9IHRhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2NlcHRzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgICAgaWYgKCFfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgLy8gdXBkYXRlIGNvb3JkaW5hdGVzXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIC8vIGNvdW50IG1pcnJvciBjb29yZGlhdGVzXG4gICAgICB2YXIgeCA9IF9jbGllbnRYIC0gX29mZnNldFgsXG4gICAgICAgIHkgPSBfY2xpZW50WSAtIF9vZmZzZXRZLFxuICAgICAgICBwYWdlWCxcbiAgICAgICAgcGFnZVksXG4gICAgICAgIG9mZnNldEJveDtcblxuICAgICAgLy8gZmlsbCBleHRyYSBwcm9wZXJ0aWVzIGlmIGJvdW5kaW5nQm94IGlzIHVzZWRcbiAgICAgIGlmIChvLmJvdW5kaW5nQm94KSB7XG4gICAgICAgIHBhZ2VYID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSk7XG4gICAgICAgIHBhZ2VZID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSk7XG4gICAgICAgIG9mZnNldEJveCA9IGdldE9mZnNldChvLmJvdW5kaW5nQm94KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvLmxvY2tZKSB7XG4gICAgICAgIGlmICghby5ib3VuZGluZ0JveCB8fCAocGFnZVggPiBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYICYmIHBhZ2VYIDwgb2Zmc2V0Qm94LnJpZ2h0ICsgX29mZnNldFhyKSkge1xuICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKG8uYm91bmRpbmdCb3gpIHsgLy8gY2hlY2sgYWdhaW4gaW4gY2FzZSB1c2VyIHNjcm9sbGVkIHRoZSB2aWV3XG4gICAgICAgICAgaWYgKHBhZ2VYIDwgb2Zmc2V0Qm94LmxlZnQgKyBfb2Zmc2V0WCkge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0gX2NsaWVudFggLSAocGFnZVggLSBvZmZzZXRCb3gubGVmdCkgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIF9taXJyb3JXaWR0aCAtIChwYWdlWCAtIG9mZnNldEJveC5yaWdodCkgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFvLmxvY2tYKSB7XG4gICAgICAgIGlmICghby5ib3VuZGluZ0JveCB8fCAocGFnZVkgPiBvZmZzZXRCb3gudG9wICsgX29mZnNldFkgJiYgcGFnZVkgPCBvZmZzZXRCb3guYm90dG9tICsgX29mZnNldFliKSkge1xuICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoby5ib3VuZGluZ0JveCkgeyAvLyBjaGVjayBhZ2FpbiBpbiBjYXNlIHVzZXIgc2Nyb2xsZWQgdGhlIHZpZXdcbiAgICAgICAgICBpZiAocGFnZVkgPCBvZmZzZXRCb3gudG9wICsgX29mZnNldFkpIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSAocGFnZVkgLSBvZmZzZXRCb3gudG9wKSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSBfbWlycm9ySGVpZ2h0IC0gKHBhZ2VZIC0gb2Zmc2V0Qm94LmJvdHRvbSkgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBlbGVtZW50QmVoaW5kQ3Vyc29yID0gZ2V0RWxlbWVudEJlaGluZFBvaW50KF9taXJyb3IsIF9jbGllbnRYLCBfY2xpZW50WSksXG4gICAgICAgIGRyb3BUYXJnZXQgPSBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuXG4gICAgICAvLyBkbyBub3QgY29weSBpbiBzYW1lIGNvbnRhaW5lclxuICAgICAgaWYgKGRyb3BUYXJnZXQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9sYXN0VGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSAhPT0gLTEpIHtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsLnNwbGljZShfbGFzdFRhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCksIDEpO1xuICAgICAgICB9XG4gICAgICAgICRyb290U2NvcGUuJGFwcGx5QXN5bmMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVmZXJlbmNlLFxuICAgICAgICBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKTtcblxuICAgICAgLy8gcHJlcGFyZSBtb2RlbHMgb3BlcmF0aW9uc1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIHZhciByZWZlcmVuY2VJbmRleDtcbiAgICAgIH1cblxuICAgICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgaW1tZWRpYXRlLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuICAgICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBpZiAocmVmZXJlbmNlKSB7IC8vIHJlZmVyZW5jZSBpcyBudWxsIGlmIGRyYWcgaXMgb3ZlciBsYXN0IGVsZW1lbnRcbiAgICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gZG9tSW5kZXhPZihyZWZlcmVuY2UsIGRyb3BUYXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdHJ1ZSAmJiAhby5jb3B5KSB7XG4gICAgICAgIC8vIHRoZSBjYXNlIHRoYXQgbWlycm9yIGlzIG5vdCBvdmVyIHZhbGlkIHRhcmdldCBhbmQgcmV2ZXJ0aW5nIGlzIG9uIGFuZCBjb3B5IGlzIG9mZlxuICAgICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICAgIGRyb3BUYXJnZXQgPSBfc291cmNlO1xuXG4gICAgICAgIC8vIGdldHRpbmcgbW9kZWwgaW50aXRpYWwgcHJvcGVydGllcyBpbnRvIGN1cnJlbnRcbiAgICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfaW5pdGlhbEluZGV4O1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGUgY2FzZSB0aGF0IG1pcnJvciBpcyBub3Qgb3ZlciB2YWxpZCB0YXJnZXQgYW5kIHJlbW92aW5nIGlzIG9uIG9yIGNvcHkgaXMgb25cbiAgICAgICAgaWYgKChvLmNvcHkgfHwgby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSAmJiBpdGVtLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyByZW1vdmUgaXRlbSBvciBjb3B5IG9mIGl0ZW1cbiAgICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8IHJlZmVyZW5jZSAhPT0gaXRlbSAmJiByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSkge1xuICAgICAgICAvLyBtb3ZpbmcgaXRlbS9jb3B5IHRvIG5ldyBjb250YWluZXIgZnJvbSBwcmV2aW91cyBvbmVcbiAgICAgICAgX2N1cnJlbnRTaWJsaW5nID0gcmVmZXJlbmNlO1xuXG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBkcm9wVGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCByZWZlcmVuY2UpOyAvLyBpZiByZWZlcmVuY2UgaXMgbnVsbCBpdGVtIGlzIGluc2VydGVkIGF0IHRoZSBlbmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwocmVmZXJlbmNlSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdzaGFkb3cnLCBpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVJbkNvbnRhaW5lcnNNb2RlbChyZWZlcmVuY2VJbmRleCkge1xuICAgICAgaWYgKF9sYXN0VGFyZ2V0TW9kZWwgPT09IF90YXJnZXRNb2RlbCkge1xuICAgICAgICBpZiAocmVmZXJlbmNlSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF90YXJnZXRNb2RlbC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gcmVmZXJlbmNlSW5kZXggPiBfY3VycmVudEluZGV4ID8gcmVmZXJlbmNlSW5kZXggLSAxIDogcmVmZXJlbmNlSW5kZXg7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UoaW5kZXgsIDAsIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpWzBdKTtcbiAgICAgICAgX2N1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlZmVyZW5jZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfdGFyZ2V0TW9kZWwubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW8uY29weSB8fCBfbGFzdFRhcmdldE1vZGVsICE9PSBfc291cmNlTW9kZWwpIHsgLy8gZG9udCByZW1vdmUgb3JpZ2luYWwgZnJvbSBzb3VyY2Ugd2hpbGUgY29weWluZ1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghby5jb3B5IHx8IF90YXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpID09PSAtMSkgeyAvLyBkb250IHBsYWNlIGNvcHkgdHdpY2UgaW4gb25lIGRyYWdcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAwLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwpO1xuICAgICAgICAgIF9jdXJyZW50SW5kZXggPSByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbENvbnRhaW5lcihlKSB7XG4gICAgICBpZiAoX3RhcmdldENvbnRhaW5lcikge1xuICAgICAgICBfdGFyZ2V0Q29udGFpbmVyLnNjcm9sbFRvcCArPSBlLmRlbHRhWVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZWN0ID0gX2l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBfbWlycm9yID0gX2l0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgX21pcnJvcldpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgIF9taXJyb3JIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgIF9taXJyb3Iuc3R5bGUud2lkdGggPSBnZXRSZWN0V2lkdGgocmVjdCkgKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS5oZWlnaHQgPSBnZXRSZWN0SGVpZ2h0KHJlY3QpICsgJ3B4JztcbiAgICAgIHJtQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgYWRkQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLm1pcnJvcik7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKF9taXJyb3IpO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCAnb24nLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICBhZGRDbGFzcyhib2R5LCBvLmNsYXNzZXMudW5zZWxlY3RhYmxlKTtcbiAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvbicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfbWlycm9yLCBfaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWlycm9ySW1hZ2UoKSB7XG4gICAgICBpZiAoX21pcnJvcikge1xuICAgICAgICBybUNsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvZmYnLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvZmYnLCAnd2hlZWwnLCBzY3JvbGxDb250YWluZXIpO1xuICAgICAgICBfbWlycm9yLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX21pcnJvcik7XG4gICAgICAgIF9taXJyb3IgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIHRhcmdldCkge1xuICAgICAgdmFyIGltbWVkaWF0ZSA9IHRhcmdldDtcbiAgICAgIHdoaWxlIChpbW1lZGlhdGUgIT09IGRyb3BUYXJnZXQgJiYgaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQgIT09IGRyb3BUYXJnZXQpIHtcbiAgICAgICAgaW1tZWRpYXRlID0gaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAoaW1tZWRpYXRlID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW1tZWRpYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCB0YXJnZXQsIHgsIHkpIHtcbiAgICAgIHZhciBob3Jpem9udGFsID0gby5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgICAgIHZhciByZWZlcmVuY2UgPSB0YXJnZXQgIT09IGRyb3BUYXJnZXQgPyBpbnNpZGUoKSA6IG91dHNpZGUoKTtcbiAgICAgIHJldHVybiByZWZlcmVuY2U7XG5cbiAgICAgIGZ1bmN0aW9uIG91dHNpZGUoKSB7IC8vIHNsb3dlciwgYnV0IGFibGUgdG8gZmlndXJlIG91dCBhbnkgcG9zaXRpb25cbiAgICAgICAgdmFyIGxlbiA9IGRyb3BUYXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGVsO1xuICAgICAgICB2YXIgcmVjdDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgZWwgPSBkcm9wVGFyZ2V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiByZWN0LmxlZnQgPiB4KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiByZWN0LnRvcCA+IHkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGluc2lkZSgpIHsgLy8gZmFzdGVyLCBidXQgb25seSBhdmFpbGFibGUgaWYgZHJvcHBlZCBpbnNpZGUgYSBjaGlsZCBlbGVtZW50XG4gICAgICAgIHZhciByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHggPiByZWN0LmxlZnQgKyBnZXRSZWN0V2lkdGgocmVjdCkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh5ID4gcmVjdC50b3AgKyBnZXRSZWN0SGVpZ2h0KHJlY3QpIC8gMik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmUoYWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGFmdGVyID8gbmV4dEVsKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsKHNjcm9sbFByb3AsIG9mZnNldFByb3ApIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93W29mZnNldFByb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93W29mZnNldFByb3BdO1xuICAgICAgfVxuICAgICAgaWYgKGRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib2R5W3Njcm9sbFByb3BdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKCdzY3JvbGxUb3AnLCAncGFnZVlPZmZzZXQnKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbCgnc2Nyb2xsTGVmdCcsICdwYWdlWE9mZnNldCcpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tICsgc2Nyb2xsVG9wXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRCZWhpbmRQb2ludChwb2ludCwgeCwgeSkge1xuICAgICAgaWYgKCF4ICYmICF5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHAgPSBwb2ludCB8fCB7fSxcbiAgICAgICAgc3RhdGUgPSBwLmNsYXNzTmFtZSxcbiAgICAgICAgZWw7XG4gICAgICBwLmNsYXNzTmFtZSArPSAnICcgKyBvLmNsYXNzZXMuaGlkZTtcbiAgICAgIGVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgIHAuY2xhc3NOYW1lID0gc3RhdGU7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZ0V2ZW50KGVsLCBvcCwgdHlwZSwgZm4pIHtcbiAgICB2YXIgdG91Y2ggPSB7XG4gICAgICAgIG1vdXNldXA6ICd0b3VjaGVuZCcsXG4gICAgICAgIG1vdXNlZG93bjogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3VzZW1vdmU6ICd0b3VjaG1vdmUnXG4gICAgICB9LFxuICAgICAgJGVsID0gYW5ndWxhci5lbGVtZW50KGVsKTtcblxuICAgIGlmICh0eXBlICE9PSAnd2hlZWwnKSB7XG4gICAgICAkZWxbb3BdKHRvdWNoW3R5cGVdLCBmbilcbiAgICB9O1xuICAgICRlbFtvcF0odHlwZSwgZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV2ZXIoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYWx3YXlzKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dEVsKGVsKSB7XG4gICAgcmV0dXJuIGVsLm5leHRFbGVtZW50U2libGluZyB8fCBtYW51YWxseSgpO1xuXG4gICAgZnVuY3Rpb24gbWFudWFsbHkoKSB7XG4gICAgICB2YXIgc2libGluZyA9IGVsO1xuICAgICAgZG8ge1xuICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcbiAgICAgIH0gd2hpbGUgKHNpYmxpbmcgJiYgc2libGluZy5ub2RlVHlwZSAhPT0gMSk7XG4gICAgICByZXR1cm4gc2libGluZztcbiAgICB9XG4gIH1cblxuICAvL0Nhbm5vdCB1c2UgYW5ndWxhci5pc0VsZW1lbnQgYmVjYXVzZSB3ZSBuZWVkIHRvIGNoZWNrIHBsYWluIGRvbSBlbGVtZW50LCBubyBqUWxpdGUgd3JhcHBlZFxuICBmdW5jdGlvbiBpc0VsZW1lbnQobykge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdvYmplY3QnID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy9ET00yXG4gICAgICBvICYmIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09ICdzdHJpbmcnXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NOYW1lLmluZGV4T2YoJyAnICsgY2xhc3NOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm1DbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgYW5ndWxhci5lbGVtZW50KGVsKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIHJldHVybiAoJyAnICsgZWwuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSArICcgJykgPiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEV2ZW50SG9zdChlKSB7XG4gICAgLy8gb24gdG91Y2hlbmQgZXZlbnQsIHdlIGhhdmUgdG8gdXNlIGBlLmNoYW5nZWRUb3VjaGVzYFxuICAgIC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcxOTI1NjMvdG91Y2hlbmQtZXZlbnQtcHJvcGVydGllc1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMzRcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF07XG4gICAgfVxuICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb29yZChjb29yZCwgZSkge1xuICAgIHZhciBob3N0ID0gZ2V0RXZlbnRIb3N0KGUpO1xuICAgIHZhciBtaXNzTWFwID0ge1xuICAgICAgcGFnZVg6ICdjbGllbnRYJywgLy8gSUU4XG4gICAgICBwYWdlWTogJ2NsaWVudFknIC8vIElFOFxuICAgIH07XG4gICAgaWYgKGNvb3JkIGluIG1pc3NNYXAgJiYgIShjb29yZCBpbiBob3N0KSAmJiBtaXNzTWFwW2Nvb3JkXSBpbiBob3N0KSB7XG4gICAgICBjb29yZCA9IG1pc3NNYXBbY29vcmRdO1xuICAgIH1cbiAgICByZXR1cm4gaG9zdFtjb29yZF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0V2lkdGgocmVjdCkge1xuICAgIHJldHVybiByZWN0LndpZHRoIHx8IChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJlY3RIZWlnaHQocmVjdCkge1xuICAgIHJldHVybiByZWN0LmhlaWdodCB8fCAocmVjdC5ib3R0b20gLSByZWN0LnRvcCk7XG4gIH1cblxuICBmdW5jdGlvbiBkb21JbmRleE9mKGNoaWxkLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhbmd1bGFyLmVsZW1lbnQocGFyZW50KS5jaGlsZHJlbigpLCBjaGlsZCk7XG4gIH1cblxufV0pO1xuIl19
