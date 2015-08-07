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
$templateCache.put("partials/partial-home.html","<div class=\'container\'>\n  <div class=\"row\">\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-lg-12\">\n      <div class=\"jumbotron\">\n        <h1>DRAGULAR</h1>\n        <p>Angular drag&drop based on <a href=\"http://github.com/bevacqua/dragula\">dragula</a>.</p>\n        <p><a class=\"btn btn-primary btn-lg\" ui-sref=\"docs\" role=\"button\">Live examples in docs</a></p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p>Browser support includes every sane browser and **IE7+**. <sub>_(Granted you polyfill the functional `Array` methods in ES5)_</sub></p>\n          <h2>Inspiration</h2>\n          <p>Have you ever wanted a drag and drop library that just works? That actually understands where to place the elements when they are dropped? That doesn’t need you to do a zillion things to get it to work? Well, so did <a href=\"https://github.com/bevacqua\">Nicolas Bevacqua</a> and I have forked it into angular module and also put some features!</p>\n          <p><b>Actual version 2.0.0 is based on dragula 2.1.2 and tested with angular 1.4.1.</b></p>\n          <h2>Differences of dragular (against dragula)</h2>\n          <ul>\n            <li>replaced crossvent with angulars event binding</li>\n            <li>replaced contra.emitter with $scope.$emit if scope provided in options (options.scope)</li>\n            <li>encapsulated the code into angular factory (dragularService)</li>\n            <li>created directive dragular where options can be passed providing scope property name</li>\n            <li>both service and directive provided as angular module (dragularModule)</li>\n            <li>automatic direction if not provided in options, instead of default vertical</li>\n            <li>accepting arraylike objects as containers array</li>\n            <li>accepting custom classes via option.classes</li>\n            <li>namespaced containers groups available via option.nameSpace</li>\n            <li>boundingBox (dragging element can me moved only in specific area)</li>\n            <li>lockX/Y (dragging element can me moved only in specific direction)</li>\n            <li>more examples</li>\n            <li>accept JSON options in dragular directive (#2)</li>\n            <li>add/remove with ng-repeat</li>\n            <li>added syntax highlighter to example codes</li>\n          </ul>\n          <h2>Todo</h2>\n          <ul>\n            <li>example for delay</li>\n            <li>o.isContainer in _isContainer (fn o.isContainerGetModel(containerElm))</li>\n            <li>solve mixing with and without model containers</li>\n            <li>remove npm workflow</li>\n            <li>support selectors in service (#2)?</li>\n          </ul>\n          <h2>Features</h2>\n          <ul>\n            <li>provided as service and also as directive</li>\n            <li>Super easy to set up</li>\n            <li>No bloated dependencies</li>\n            <li><strong>Figures out sort order</strong> on its own</li>\n            <li>A shadow where the item would be dropped offers <strong>visual feedback</strong></li>\n            <li>Touch events!</li>\n          </ul>\n          <h2>For installation, usage and examples go to <a ui-sref=\"docs\">docs</a></h2>\n        </div>\n      </div>\n      <!--/row-->\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");}]);

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
        _targetContainer.scrollTop += e.deltaY;
        e.stopPropagation();
        e.preventDefault();
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
        mousemove: 'touchmove',
        wheel: 'wheel'
      },
      $el = angular.element(el);

    $el[op](touch[type], fn)
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

}]);

},{"./dragularModule":26}]},{},[22])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0LmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZXNBcHAuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlc1JvdXRlci5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL3RlbXBsYXRlcy5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhckRpcmVjdGl2ZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhck1vZHVsZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsU0FBUyxDQUFDLFlBQVksbUJBQW1CLFNBQVMsU0FBUyxVQUFVLGlCQUFpQjtJQUNoRyxnQkFBZ0IsU0FBUztNQUN2Qjs7O0FDWk47QUFDQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLFNBQVMsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDaEcsZ0JBQWdCLFNBQVM7OztBQUc3QjtHQUNHLFdBQVcsY0FBYyxDQUFDLFVBQVUsWUFBWSxtQkFBbUIsU0FBUyxTQUFTLFFBQVEsVUFBVSxpQkFBaUI7SUFDdkgsT0FBTyxTQUFTLENBQUM7TUFDZixTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLE9BQU8sU0FBUyxDQUFDO01BQ2YsU0FBUztPQUNSO01BQ0QsU0FBUztPQUNSO01BQ0QsU0FBUztPQUNSO01BQ0QsU0FBUzs7SUFFWCxJQUFJLGFBQWEsU0FBUyxXQUFXLEdBQUcsR0FBRztJQUMzQyxnQkFB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LEtBQUssUUFBUSxLQUFLOzs7RUFHMUMsU0FBUyxjQUFjLE1BQU07SUFDM0IsT0FBTyxLQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUs7OztFQUc1QyxTQUFTLFdBQVcsT0FBTyxRQUFRO0lBQ2pDLE9BQU8sTUFBTSxVQUFVLFFBQVEsS0FBSyxRQUFRLFFBQVEsUUFBUSxZQUFZOzs7O0FBSTVFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCYXNpYycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcbiAgfV0pOyIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCYXNpYycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcbiAgfV0pO1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQmFzaWNNb2RlbCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICRzY29wZS5pdGVtczEgPSBbe1xuICAgICAgY29udGVudDogJ01vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDMnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNCdcbiAgICB9XTtcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDUnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA3J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDgnXG4gICAgfV07XG4gICAgdmFyIGNvbnRhaW5lcnMgPSAkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCk7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogWyRzY29wZS5pdGVtczEsICRzY29wZS5pdGVtczJdXG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCb3VuZGluZ0JveCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIHZhciBib3VuZGluZ0JveCA9ICRlbGVtZW50WzBdO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBib3VuZGluZ0JveDogYm91bmRpbmdCb3hcbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0JvdW5kaW5nQm94TG9ja1gnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKClbMF07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKGJvdW5kaW5nQm94LCB7XG4gICAgICBib3VuZGluZ0JveDogYm91bmRpbmdCb3gsXG4gICAgICBsb2NrWDogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQm91bmRpbmdCb3hMb2NrWScsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIHZhciBib3VuZGluZ0JveCA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKVswXTtcbiAgICBkcmFndWxhclNlcnZpY2UoYm91bmRpbmdCb3gsIHtcbiAgICAgIGJvdW5kaW5nQm94OiBib3VuZGluZ0JveCxcbiAgICAgIGxvY2tZOiB0cnVlXG4gICAgfSk7XG4gIH1dKSIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdDb3B5JywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIGNvcHk6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0NvcHlNb2RlbCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICRzY29wZS5pdGVtczEgPSBbe1xuICAgICAgY29udGVudDogJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDMnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNCdcbiAgICB9XTtcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDUnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA3J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDgnXG4gICAgfV07XG4gICAgdmFyIGNvbnRhaW5lcnMgPSAkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCk7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogWyRzY29wZS5pdGVtczEsICRzY29wZS5pdGVtczJdLFxuICAgICAgY29weTogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQ3VzdG9tQ2xhc3NlcycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1pcnJvcjogJ2N1c3RvbS1ncmVlbi1taXJyb3InXG4gICAgICB9XG4gICAgfSk7XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0RpcmVjdGl2ZScsIFsnJHNjb3BlJywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSkge1xuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1pcnJvcjogJ2N1c3RvbS1ncmVlbi1taXJyb3InXG4gICAgICB9LFxuICAgICAgbmFtZVNwYWNlOiAnc2FtZScgLy8ganVzdCBjb25uZWN0aW5nIGxlZnQgYW5kIHJpZ2h0IGNvbnRhaW5lclxuICAgIH07XG4gIH1dKTsiLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdEaXJlY3RpdmVNb2RlbCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICRzY29wZS5pdGVtczEgPSBbe1xuICAgICAgY29udGVudDogJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDMnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNCdcbiAgICB9XTtcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDUnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA3J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDgnXG4gICAgfV07XG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zMSxcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbWlycm9yOiAnY3VzdG9tLWdyZWVuLW1pcnJvcidcbiAgICAgIH0sXG4gICAgICBuYW1lU3BhY2U6ICdjb21tb24nIC8vIGp1c3QgY29ubmVjdGluZyBsZWZ0IGFuZCByaWdodCBjb250YWluZXJcbiAgICB9O1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuIC5jb250cm9sbGVyKCdEcmFnT3ZlckNsYXNzZXMnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0sICRlbGVtZW50LmNoaWxkcmVuKClbMl1dLCB7XG4gICAgICBuYW1lU3BhY2U6ICdhcHBsZXMnLFxuICAgICAgZHJhZ092ZXJDbGFzc2VzOiB0cnVlXG4gICAgfSk7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzFdLCAkZWxlbWVudC5jaGlsZHJlbigpWzNdXSwge1xuICAgICAgbmFtZVNwYWNlOiAnb3JhbmdlcycsXG4gICAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0V2ZW50cycsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsICckdGltZW91dCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSwgJHRpbWVvdXQpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgc2NvcGU6ICRzY29wZVxuICAgIH0pO1xuICAgICRzY29wZS4kb24oJ2RyYWcnLCBmdW5jdGlvbihlLCBlbCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKCcgZXgtbW92ZWQnLCAnJyk7XG4gICAgfSk7XG4gICAgJHNjb3BlLiRvbignZHJvcCcsIGZ1bmN0aW9uKGUsIGVsKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSArPSAnIGV4LW1vdmVkJztcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuXG4gICAgLy8gJHNjb3BlLiRvbignY2xvbmVkJywgbXlGbignY2xvbmVkJykpO1xuICAgIC8vICRzY29wZS4kb24oJ2RyYWcnLCBteUZuKCdkcmFnJykpO1xuICAgIC8vICRzY29wZS4kb24oJ2NhbmNlbCcsIG15Rm4oJ2NhbmNlbCcpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdkcm9wJywgbXlGbignZHJvcCcpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdyZW1vdmUnLCBteUZuKCdyZW1vdmUnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignZHJhZ2VuZCcsIG15Rm4oJ2RyYWdlbmQnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignc2hhZG93JywgbXlGbignc2hhZG93JykpO1xuICAgIC8vICRzY29wZS4kb24oJ3NoYWRvd1JlbW92ZWQnLCBteUZuKCdzaGFkb3cnKSk7XG5cbiAgICAvLyBmdW5jdGlvbiBteUZuKGV2ZW50TmFtZSkge1xuICAgIC8vICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhldmVudE5hbWUsIGFyZ3VtZW50cyk7XG4gICAgLy8gICB9O1xuICAgIC8vIH1cblxuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignSGFuZGxlJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc05hbWUgPT09ICdoYW5kbGUnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmFtZVNwYWNlcycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcbiAgICAgIG5hbWVTcGFjZTogJ2FwcGxlcydcbiAgICB9KTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVsxXSwge1xuICAgICAgbmFtZVNwYWNlOiAnb3JhbmdlcydcbiAgICB9KTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVszXSwgeyAvLyBtaXhlZFxuICAgICAgbmFtZVNwYWNlOiBbJ29yYW5nZXMnLCAnYXBwbGVzJ11cbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ05lc3RlZE5nUmVwZWF0JywgWyckdGltZW91dCcsICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHRpbWVvdXQsICRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyB0aW1lb3VudCBkdWUgdG8gbmdSZXBlYXQgdG8gYmUgcmVhZHlcbiAgICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudCwge1xuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuICFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICAgICRzY29wZS5pdGVtcyA9IFt7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGEyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTQnXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiNCdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMxJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGM0J1xuICAgICAgfV1cbiAgICB9XTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ05lc3RlZE5nUmVwZWF0V2l0aE1vZGVsJywgWyckdGltZW91dCcsICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHRpbWVvdXQsICRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyB0aW1lb3VudCBkdWUgdG8gbmVzdGVkIG5nUmVwZWF0IHRvIGJlIHJlYWR5XG4gICAgICB2YXIgY29udGFpbmVyID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpLFxuICAgICAgICBwYXJlbnRDb250YWluZXJzID0gY29udGFpbmVyLmNoaWxkcmVuKCksXG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMgPSBbXTtcblxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGNvbnRhaW5lciwge1xuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXNcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb2xsZWN0IG5lc3RlZCBjb250aWFuZXJzXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudENvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmVzdGVkQ29udGFpbmVycy5wdXNoKHBhcmVudENvbnRhaW5lcnMuZXEoaSkuY2hpbGRyZW4oKVsxXSk7XG4gICAgICB9O1xuXG4gICAgICBkcmFndWxhclNlcnZpY2UobmVzdGVkQ29udGFpbmVycywge1xuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuICFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogKGZ1bmN0aW9uIGdldE5lc3RlZENvbnRhaW5lcnNNb2RlbCgpe1xuICAgICAgICAgIHZhciBwYXJlbnQgPSAkc2NvcGUuaXRlbXMsXG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGFpbmVyc01vZGVsLnB1c2gocGFyZW50W2ldLml0ZW1zKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJzTW9kZWw7XG4gICAgICAgIH0pKClcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICAgICRzY29wZS5pdGVtcyA9IFt7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGEyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTQnXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiNCdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMxJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGM0J1xuICAgICAgfV1cbiAgICB9XTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ05nUmVwZWF0JywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICAgICRzY29wZS5pdGVtcyA9IFt7XG4gICAgICBjb250ZW50OiAnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgJy1jb3B5J1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oKSB7XG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmdSZXBlYXRXaXRoTW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgY29udGVudDogJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDInXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksIHtjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc30pO1xuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSgpIHtcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCwge1xuICAgICAgICBjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArICctY29weSdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdSZW1vdmVPblNwaWxsJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIHJlbW92ZU9uU3BpbGw6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ1JldmVydE9uU3BpbGwnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgcmV2ZXJ0T25TcGlsbDogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignU2Nyb2xsaW5nRHJhZycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxuLy8gdmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG5cblxucmVxdWlyZSgnLi4vLi4vLi4vc3JjL2RyYWd1bGFyTW9kdWxlJyk7XG5yZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xuXG4vKipcbiAqICBNb2R1bGUgRXhhbXBsZSBBcHBcbiAqXG4gKiAgREVNTyBhcHAgZm9yIGRyYWd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnZXhhbXBsZXNBcHAnLCBbJ2RyYWd1bGFyTW9kdWxlJywgJ3RlbXBsYXRlcycsICd1aS5yb3V0ZXInXSkuY29udHJvbGxlcignRXhBcHBDdHJsJywgWyckc2NvcGUnLCAnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSkge1xuICAgICRzY29wZS5leGFtcGxlc0xpc3QgPSBbe1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQmFzaWMnLFxuICAgICAgICB0aXRsZTogJ0Jhc2ljJ1xuICAgIH0se1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCYXNpY1dpdGhNb2RlbC9leGFtcGxlQmFzaWNXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQmFzaWNXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ0Jhc2ljIC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZURpcmVjdGl2ZScsXG4gICAgICAgIHRpdGxlOiAnRGlyZWN0aXZlJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsL2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICdEaXJlY3RpdmUgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRXZlbnRzL2V4YW1wbGVFdmVudHMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRXZlbnRzJyxcbiAgICAgICAgdGl0bGU6ICdFdmVudHMnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVSZW1vdmVPblNwaWxsL2V4YW1wbGVSZW1vdmVPblNwaWxsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZVJlbW92ZU9uU3BpbGwnLFxuICAgICAgICB0aXRsZTogJ1JlbW92ZSBvbiBzcGlsbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZVJldmVydE9uU3BpbGwvZXhhbXBsZVJldmVydE9uU3BpbGwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlUmV2ZXJ0T25TcGlsbCcsXG4gICAgICAgIHRpdGxlOiAnUmV2ZXJ0IG9uIHNwaWxsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQ29weS9leGFtcGxlQ29weS5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVDb3B5JyxcbiAgICAgICAgdGl0bGU6ICdDb3B5J1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVDb3B5V2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICdDb3B5IC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUhhbmRsZScsXG4gICAgICAgIHRpdGxlOiAnSGFuZGxlJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQ3VzdG9tQ2xhc3Nlcy9leGFtcGxlQ3VzdG9tQ2xhc3Nlcy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVDdXN0b21DbGFzc2VzJyxcbiAgICAgICAgdGl0bGU6ICdDdXN0b20gY2xhc3NlcydcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmFtZVNwYWNlcycsXG4gICAgICAgIHRpdGxlOiAnTmFtZVNwYWNlcydcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZURyYWdPdmVyQ2xhc3NlcycsXG4gICAgICAgIHRpdGxlOiAnRHJhZ092ZXIgY2xhc3NlcydcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJvdW5kaW5nQm94L2V4YW1wbGVCb3VuZGluZ0JveC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCb3VuZGluZ0JveCcsXG4gICAgICAgIHRpdGxlOiAnQm91bmRpbmdCb3gnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCb3VuZGluZ0JveExvY2tYL2V4YW1wbGVCb3VuZGluZ0JveExvY2tYLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gnLFxuICAgICAgICB0aXRsZTogJ0JvdW5kaW5nQm94ICsgTG9ja1gnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1knLFxuICAgICAgICB0aXRsZTogJ0JvdW5kaW5nQm94ICsgTG9ja1knXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmdSZXBlYXQnLFxuICAgICAgICB0aXRsZTogJ25nUmVwZWF0J1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICduZ1JlcGVhdCAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC9leGFtcGxlTmVzdGVkTmdSZXBlYXQuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmVzdGVkTmdSZXBlYXQnLFxuICAgICAgICB0aXRsZTogJ05lc3RlZCBuZ1JlcGVhZCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnTmVzdGVkIG5nUmVwZWFkIC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZVNjcm9sbGluZ0RyYWcvZXhhbXBsZVNjcm9sbGluZ0RyYWcuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlU2Nyb2xsaW5nRHJhZycsXG4gICAgICAgIHRpdGxlOiAnU2Nyb2xsaW5nIGRyYWcnXG4gICAgfV07XG5cbiAgICAvLyBkZWZhdWx0IHRlbXBsYXRlIGxvYWRlZCBmaXJzdCB0aW1lXG4gICAgJHNjb3BlLmV4YW1wbGVUZW1wbGF0ZSA9ICdleGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmh0bWwnO1xuXG4gICAgJHNjb3BlLmhpZ2hsaWdodENvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjb2RlJykubGVuZ3RoKXtcbiAgICAgICAgICAgIHZhciBjb2RlQmxvY2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvZGUnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjb2RlQmxvY2tzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayhjb2RlQmxvY2tzW2ldKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcm93T2ZmY2FudmFzID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3dPZmZjYW52YXMnKSk7XG4gICAgJHNjb3BlLnRvZ2dsZVNpZGViYXIgPSBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyICgpIHtcbiAgICAgICAgcm93T2ZmY2FudmFzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG5cbn1dKTtcblxuKHtcImV4YW1wbGVCYXNpY1wiOih7XCJleGFtcGxlQmFzaWNcIjpyZXF1aXJlKFwiLi9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzXCIpfSksXCJleGFtcGxlQmFzaWNXaXRoTW9kZWxcIjooe1wiZXhhbXBsZUJhc2ljV2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZUJvdW5kaW5nQm94XCI6KHtcImV4YW1wbGVCb3VuZGluZ0JveFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanNcIil9KSxcImV4YW1wbGVCb3VuZGluZ0JveExvY2tYXCI6KHtcImV4YW1wbGVCb3VuZGluZ0JveExvY2tYXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1guanNcIil9KSxcImV4YW1wbGVCb3VuZGluZ0JveExvY2tZXCI6KHtcImV4YW1wbGVCb3VuZGluZ0JveExvY2tZXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kuanNcIil9KSxcImV4YW1wbGVDb3B5XCI6KHtcImV4YW1wbGVDb3B5XCI6cmVxdWlyZShcIi4vZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanNcIil9KSxcImV4YW1wbGVDb3B5V2l0aE1vZGVsXCI6KHtcImV4YW1wbGVDb3B5V2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZUNvcHlXaXRoTW9kZWwvZXhhbXBsZUNvcHlXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVDdXN0b21DbGFzc2VzXCI6KHtcImV4YW1wbGVDdXN0b21DbGFzc2VzXCI6cmVxdWlyZShcIi4vZXhhbXBsZUN1c3RvbUNsYXNzZXMvZXhhbXBsZUN1c3RvbUNsYXNzZXMuanNcIil9KSxcImV4YW1wbGVEaXJlY3RpdmVcIjooe1wiZXhhbXBsZURpcmVjdGl2ZVwiOnJlcXVpcmUoXCIuL2V4YW1wbGVEaXJlY3RpdmUvZXhhbXBsZURpcmVjdGl2ZS5qc1wiKX0pLFwiZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbFwiOih7XCJleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlRHJhZ092ZXJDbGFzc2VzXCI6KHtcImV4YW1wbGVEcmFnT3ZlckNsYXNzZXNcIjpyZXF1aXJlKFwiLi9leGFtcGxlRHJhZ092ZXJDbGFzc2VzL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMuanNcIil9KSxcImV4YW1wbGVFdmVudHNcIjooe1wiZXhhbXBsZUV2ZW50c1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVFdmVudHMvZXhhbXBsZUV2ZW50cy5qc1wiKX0pLFwiZXhhbXBsZUhhbmRsZVwiOih7XCJleGFtcGxlSGFuZGxlXCI6cmVxdWlyZShcIi4vZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzXCIpfSksXCJleGFtcGxlTmFtZVNwYWNlc1wiOih7XCJleGFtcGxlTmFtZVNwYWNlc1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVOYW1lU3BhY2VzL2V4YW1wbGVOYW1lU3BhY2VzLmpzXCIpfSksXCJleGFtcGxlTmVzdGVkTmdSZXBlYXRcIjooe1wiZXhhbXBsZU5lc3RlZE5nUmVwZWF0XCI6cmVxdWlyZShcIi4vZXhhbXBsZU5lc3RlZE5nUmVwZWF0L2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC5qc1wiKX0pLFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXCI6KHtcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVOZ1JlcGVhdFwiOih7XCJleGFtcGxlTmdSZXBlYXRcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmdSZXBlYXQvZXhhbXBsZU5nUmVwZWF0LmpzXCIpfSksXCJleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWxcIjooe1wiZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZVJlbW92ZU9uU3BpbGxcIjooe1wiZXhhbXBsZVJlbW92ZU9uU3BpbGxcIjpyZXF1aXJlKFwiLi9leGFtcGxlUmVtb3ZlT25TcGlsbC9leGFtcGxlUmVtb3ZlT25TcGlsbC5qc1wiKX0pLFwiZXhhbXBsZVJldmVydE9uU3BpbGxcIjooe1wiZXhhbXBsZVJldmVydE9uU3BpbGxcIjpyZXF1aXJlKFwiLi9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qc1wiKX0pLFwiZXhhbXBsZVNjcm9sbGluZ0RyYWdcIjooe1wiZXhhbXBsZVNjcm9sbGluZ0RyYWdcIjpyZXF1aXJlKFwiLi9leGFtcGxlU2Nyb2xsaW5nRHJhZy9leGFtcGxlU2Nyb2xsaW5nRHJhZy5qc1wiKX0pLFwiZXhhbXBsZXNSb3V0ZXJcIjpyZXF1aXJlKFwiLi9leGFtcGxlc1JvdXRlci5qc1wiKSxcInRlbXBsYXRlc1wiOnJlcXVpcmUoXCIuL3RlbXBsYXRlcy5qc1wiKX0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9ob21lJyk7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvcGFydGlhbC1ob21lLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdkb2NzJywge1xuICAgICAgICB1cmw6ICcvZG9jcycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvcGFydGlhbC1kb2NzLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHN0YXRlKSB7XG4gICAgICAgICAgLy8gZ28gdG8gaW5zdGFsbCBub3RlcyBieSBkZWZhdWx0XG4gICAgICAgICAgJHN0YXRlLmdvKCdkb2NzLmRldGFpbCcsIHtsaW5rOiAnZG9jc0luc3RhbGwnfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2RvY3MuZGV0YWlsJywge1xuICAgICAgICB1cmw6ICcvOmxpbmsnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24oJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgcmV0dXJuICRzdGF0ZVBhcmFtcy5saW5rICsgJy8nICsgJHN0YXRlUGFyYW1zLmxpbmsgKyAnLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250cmlidXRlJywge1xuICAgICAgICB1cmw6ICcvY29udHJpYnV0ZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvcGFydGlhbC1jb250cmlidXRlLmh0bWwnXG4gICAgICB9KTtcbiAgfSk7XG4iLCIndXNlIHN0cmljdCc7IG1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImRvY3NJbnN0YWxsL2RvY3NJbnN0YWxsLmh0bWxcIixcIjxoMj5JbnN0YWxsPC9oMj5cXG48cD5kb3dubG9hZCBkcmFndWxhci5qcyBhbmQgZHJhZ3VsYXIuY3NzIGZyb20gZGlzdCBmb2xkZXI8L3A+XFxuPHA+T1IgY2xvbmUgZ2l0PC9wPlxcbjxwcmU+PGNvZGU+XFxuZ2l0IGNsb25lIGh0dHA6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXIuZ2l0XFxuPC9jb2RlPjwvcHJlPlxcbjxwPk9SIHVzZSBucG08L3A+XFxuPHByZT48Y29kZT5cXG5bc3Vkb10gbnBtIGluc3RhbGwgZHJhZ3VsYXJcXG48L2NvZGU+PC9wcmU+XFxuPHA+T1IgdXNlIGJvd2VyPC9wPlxcbjxwcmU+PGNvZGU+XFxuYm93ZXIgaW5zdGFsbCBkcmFndWxhclxcbjwvY29kZT48L3ByZT5cXG48cD5BTkQgaW5jbHVkZSBmaWxlcyBpbnRvIHlvdXIgcHJvamVjdDwvcD5cXG48cHJlPjxjb2RlPlxcbiZsdDtsaW5rIGhyZWY9XFwnc3R5bGVzL2RyYWd1bGFyLmNzc1xcJyByZWw9XFwnc3R5bGVzaGVldFxcJyB0eXBlPVxcJ3RleHQvY3NzXFwnIC8mZ3Q7XFxuJmx0O3NjcmlwdCBzcmM9XFwnc2NyaXB0cy9kcmFndWxhci5qc1xcJyZndDsmbHQ7L3NjcmlwdCZndDtcXG48L2NvZGU+PC9wcmU+XFxuPHA+QU5EIHB1dCBkcmFndWxhck1vZHVsZSBpbnRvIGRlcGVuZGVuY3kgYXJyYXk8L3A+XFxuPHByZT48Y29kZT5cXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoXFwnbXlBcHBcXCcsIFtcXCdkcmFndWxhck1vZHVsZVxcJywgXFwnb3RoZXJEZXBlbmRlbmNpZXNcXCddKTtcXG48L2NvZGU+PC9wcmU+XFxuPHA+RE9ORSA6KTwvcD5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkJhc2ljPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+TW92ZSBzdHVmZiBiZXR3ZWVuIHRoZXNlIHR3byBjb250YWluZXJzLiBOb3RlIGhvdyB0aGUgc3R1ZmYgZ2V0cyBpbnNlcnRlZCBuZWFyIHRoZSBtb3VzZSBwb2ludGVyPyBHcmVhdCBzdHVmZi48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJhc2ljXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnQmFzaWNcXCcsIFtcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7QmFzaWMmcXVvdDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNi4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O1lvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDQuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5CYXNpYyAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Nb3ZlIHN0dWZmIGJldHdlZW4gdGhlc2UgdHdvIGNvbnRhaW5lcnMuIE5vdGUgaG93IHRoZSBzdHVmZiBnZXRzIGluc2VydGVkIG5lYXIgdGhlIG1vdXNlIHBvaW50ZXI/IEdyZWF0IHN0dWZmLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQmFzaWNNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczJcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPHByZT5JdGVtczE6XFxuICAgICAgICAgIDxici8+e3tpdGVtczEgfCBqc29ufX08L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPHByZT5JdGVtczI6XFxuICAgICAgICAgIDxici8+e3tpdGVtczIgfCBqc29ufX08L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdCYXNpY01vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XFxuICAgICAgY29udGVudDogXFwnTW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXFxcXFwnbGwganVzdCBjb21lIGJhY2suXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA1XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDZcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gN1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA4XFwnXFxuICAgIH1dO1xcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcXG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXVxcbiAgICB9KTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0Jhc2ljJnF1b3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwndGFibGVSb3dcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMxJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMiZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7dGFibGVSb3cmcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMTpcXG4gICAgICAgICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMSB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMjpcXG4gICAgICAgICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMiB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+Qm91bmRpbmdCb3g8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+WW91IGNhbiBwcm92aWRlIGVsZW1lbnQgaW4gb3B0aW9ucy5ib3VuZGluZ0JveCB0byBsaW1pdCBjcm9zc2luZyBlbGVtZW50IGJvcmRlcnMuPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQm91bmRpbmdCb3hcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGl0ZW1zIGNhbm5vdCBjcm9zcyBpdHMgZXhhbXBsZSBlbGVtZW50LCBqdXN0IHRyeSBpdCB5b3VyIHNlbHZlcy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSAyLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXRlbXMgY2Fubm90IGNyb3NzIGl0cyBleGFtcGxlIGVsZW1lbnQsIGp1c3QgdHJ5IGl0IHlvdXIgc2VsdmVzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpLCB7XFxuICAgIGJvdW5kaW5nQm94OiAkZWxlbWVudFxcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+Qm91bmRpbmdCb3ggYW5kIGxvY2tYPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk1vdmVtZW50IGNhbiBiZSBsb2NrZWQgdG8gWCBvciBZIGF4aXMgYW5kIGFsc28geW91IGNhbiBwcm92aWRlIGVsZW1lbnQgaW4gb3B0aW9ucy5ib3VuZGluZ0JveCB0byBsaW1pdCBjcm9zc2luZyBlbGVtZW50IGJvcmRlcnMuPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQm91bmRpbmdCb3hMb2NrWFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVySG9yaXpvbnRhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnYm91bmRpbmdCb3hcXCc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+SXRlbXMgYXJlIGxvY2tlZCBpbiBYIGF4aXMgbW92ZW1lbnQgYW5kIGNhbm5vdCBjcm9zcyBpdHMgY2xvc2VzdCBwYXJlbnQgZGl2LmJvdW5kaW5nQm94LCBqdXN0IHRyeSBpdCB5b3VyIHNlbHZlcy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aDI1XFxcIj5pdGVtIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aDI1XFxcIj5pdGVtIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aDI1XFxcIj5pdGVtIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0uY2hpbGRyZW4oKSwge1xcbiAgICBib3VuZGluZ0JveDogJGVsZW1lbnQuY2hpbGRyZW4oKVswXSxcXG4gICAgbG9ja1g6IHRydWVcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+Qm91bmRpbmdCb3ggYW5kIExvY2tZPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk1vdmVtZW50IGNhbiBiZSBsb2NrZWQgdG8gWCBvciBZIGF4aXMgYW5kIGFsc28geW91IGNhbiBwcm92aWRlIGVsZW1lbnQgaW4gb3B0aW9ucy5ib3VuZGluZ0JveCB0byBsaW1pdCBjcm9zc2luZyBlbGVtZW50IGJvcmRlcnMuPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQm91bmRpbmdCb3hMb2NrWVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2JvdW5kaW5nQm94XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbXMgYXJlIGxvY2tlZCBpbiBZIGF4aXMgbW92ZW1lbnQgYW5kIGNhbm5vdCBjcm9zcyBpdHMgY2xvc2VzdCBwYXJlbnQgZGl2LmJvdW5kaW5nQm94LCBqdXN0IHRyeSBpdCB5b3VyIHNlbHZlcy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gNTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSA2PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLmNoaWxkcmVuKCksIHtcXG4gICAgYm91bmRpbmdCb3g6ICRlbGVtZW50LmNoaWxkcmVuKClbMF0sXFxuICAgIGxvY2tZOiB0cnVlXFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVDb3B5L2V4YW1wbGVDb3B5Lmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkNvcHk8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Db3B5aW5nIHN0dWZmIGlzIGdyZWF0IHRvby48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkNvcHlcXFwiIG5nLWhpZGU9XFxcImdsb2JhbHMuc2hvd01vZGVsRXhhbXBsZXNcXFwiPlxcbiAgICA8ZGl2IGlkPVxcJ2xlZnQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgIDxkaXY+TW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLjwvZGl2PlxcbiAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgaWQ9XFwncmlnaHQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnQ29weVxcJywgW1xcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcXG4gICAgICBjb3B5OiB0cnVlXFxuICAgIH0pO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7Q29weSZxdW90OyBuZy1oaWRlPSZxdW90O2dsb2JhbHMuc2hvd01vZGVsRXhhbXBsZXMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgaWQ9XFwnbGVmdDJcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBpZD1cXCdyaWdodDJcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtZb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5Db3B5IC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkNvcHlpbmcgc3R1ZmYgaXMgZ3JlYXQgdG9vLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQ29weU1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMxXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMlxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zMTpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMSB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zMjpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMiB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0NvcHlNb2RlbFxcJywgW1xcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgICRzY29wZS5pdGVtczEgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFxcXFxcJ2xsIGp1c3QgY29tZSBiYWNrLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gICAgfV07XFxuICAgICRzY29wZS5pdGVtczIgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA2XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDdcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gOFxcJ1xcbiAgICB9XTtcXG4gICAgdmFyIGNvbnRhaW5lcnMgPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XFxuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XFxuICAgICAgY29udGFpbmVyc01vZGVsOiBbJHNjb3BlLml0ZW1zMSwgJHNjb3BlLml0ZW1zMl0sXFxuICAgICAgY29weTogdHJ1ZVxcbiAgICB9KTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0NvcHlNb2RlbCZxdW90OyBuZy1zaG93PSZxdW90O2dsb2JhbHMuc2hvd01vZGVsRXhhbXBsZXMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwndGFibGVSb3dcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMxJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczImcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz0mcXVvdDt0YWJsZVJvdyZxdW90OyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbXMxOlxcbiAgICAgICAgICAmbHQ7YnIvJmd0O3t7aXRlbXMxIHwganNvbn19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXImcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMjpcXG4gICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMiB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+Q3VzdG9tIGNsYXNzZXM8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPllvdSBjYW4gb3ZlcndyaXRlIGJ1aWxkaW4gY2xhc3NlcyBieSBwcm92aWRpbmcgY2xhc3NlcyBuYW1lcyBpbiBvYmplY3QgdmlhIG9wdGlvbnMuY2xhc3Nlcy48L2xhYmVsPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQ3VzdG9tQ2xhc3Nlc1xcXCI+XFxuICAgICAgICA8ZGl2IGlkPVxcJ2xlZnQ0XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBpZD1cXCdyaWdodDNcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWZ0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlnaHQpXSwgeyBjbGFzc2VzOiB7XFxuICAgIG1pcnJvcjogXFwnY3VzdG9tLWdyZWVuLW1pcnJvclxcJ1xcbiAgfSB9KTtcXG5cXG4gIC8vIERlZmF1bHQgY2xhc3NlcyBhcmU6XFxuICBvcHRpb24uY2xhc3NlcyA9IHtcXG4gICAgbWlycm9yOiBcXCdndS1taXJyb3JcXCcsXFxuICAgIGhpZGU6IFxcJ2d1LWhpZGVcXCcsXFxuICAgIHVuc2VsZWN0YWJsZTogXFwnZ3UtdW5zZWxlY3RhYmxlXFwnLFxcbiAgICB0cmFuc2l0OiBcXCdndS10cmFuc2l0XFwnLFxcbiAgICBvdmVyQWN0aXZlOiBcXCdndS1vdmVyLWFjdGl2ZVxcJyxcXG4gICAgb3ZlckFjY2VwdHM6IFxcJ2d1LW92ZXItYWNjZXB0XFwnLFxcbiAgICBvdmVyRGVjbGluZXM6IFxcJ2d1LW92ZXItZGVjbGluZVxcJ1xcbiAgfTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRGlyZWN0aXZlL2V4YW1wbGVEaXJlY3RpdmUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+RGlyZWN0aXZlPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+U2FtZSBhcyBjdXN0b20gY2xhc3NlcyBleGFtcGxlLCBidXQgc2hvd2luZyB1c2Ugb2YgZGlyZWN0aXZlLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRGlyZWN0aXZlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXFwiZHJhZ3VsYXJPcHRpb25zXFxcIj5cXG4gICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcJ3tcXFwiY2xhc3Nlc1xcXCI6e1xcXCJtaXJyb3JcXFwiOlxcXCJjdXN0b20tZ3JlZW4tbWlycm9yXFxcIn0sXFxcIm5hbWVTcGFjZVxcXCI6XFxcInNhbWVcXFwifVxcJz5cXG4gICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0RpcmVjdGl2ZVxcJywgW1xcJyRzY29wZVxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUpIHtcXG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcXG4gICAgICBjbGFzc2VzOiB7XFxuICAgICAgICBtaXJyb3I6IFxcJ2N1c3RvbS1ncmVlbi1taXJyb3JcXCdcXG4gICAgICB9LFxcbiAgICAgIG5hbWVTcGFjZTogXFwnY29tbW9uXFwnIC8vIGp1c3QgY29ubmVjdGluZyBsZWZ0IGFuZCByaWdodCBjb250YWluZXJcXG4gICAgfTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0RpcmVjdGl2ZSZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj0mcXVvdDtkcmFndWxhck9wdGlvbnMmcXVvdDsmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSAzLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSA2LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXCd7JnF1b3Q7Y2xhc3NlcyZxdW90Ozp7JnF1b3Q7bWlycm9yJnF1b3Q7OiZxdW90O2N1c3RvbS1ncmVlbi1taXJyb3ImcXVvdDt9LCZxdW90O25hbWVTcGFjZSZxdW90OzomcXVvdDtzYW1lJnF1b3Q7fVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O1lvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSA0LiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSA1LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5EaXJlY3RpdmUgLSB3aXRoIG1vZGVsPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+U2FtZSBhcyBjdXN0b20gY2xhc3NlcyBleGFtcGxlLCBidXQgc2hvd2luZyB1c2Ugb2YgZGlyZWN0aXZlLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRGlyZWN0aXZlTW9kZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFxcImRyYWd1bGFyT3B0aW9uc1xcXCI+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczFcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcJ3tcXFwiY29udGFpbmVyc01vZGVsXFxcIjpcXFwiaXRlbXMyXFxcIixcXFwiY2xhc3Nlc1xcXCI6e1xcXCJtaXJyb3JcXFwiOlxcXCJjdXN0b20tZ3JlZW4tbWlycm9yXFxcIn0sXFxcIm5hbWVTcGFjZVxcXCI6XFxcImNvbW1vblxcXCJ9XFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMyXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXMxOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMxIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXMyOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMyIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICBcXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0RpcmVjdGl2ZU1vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XFxuICAgICAgY29udGVudDogXFwnTW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXFxcXFwnbGwganVzdCBjb21lIGJhY2suXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA1XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDZcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gN1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA4XFwnXFxuICAgIH1dO1xcbiAgICAkc2NvcGUuZHJhZ3VsYXJPcHRpb25zID0ge1xcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zMSxcXG4gICAgICBjbGFzc2VzOiB7XFxuICAgICAgICBtaXJyb3I6IFxcJ2N1c3RvbS1ncmVlbi1taXJyb3JcXCdcXG4gICAgICB9LFxcbiAgICAgIG5hbWVTcGFjZTogXFwnY29tbW9uXFwnIC8vIGp1c3QgY29ubmVjdGluZyBsZWZ0IGFuZCByaWdodCBjb250YWluZXJcXG4gICAgfTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtEaXJlY3RpdmVNb2RlbCZxdW90OyZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9JnF1b3Q7ZHJhZ3VsYXJPcHRpb25zJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMSZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFwneyZxdW90O2NvbnRhaW5lcnNNb2RlbCZxdW90OzomcXVvdDtpdGVtczImcXVvdDssJnF1b3Q7Y2xhc3NlcyZxdW90Ozp7JnF1b3Q7bWlycm9yJnF1b3Q7OiZxdW90O2N1c3RvbS1ncmVlbi1taXJyb3ImcXVvdDt9LCZxdW90O25hbWVTcGFjZSZxdW90OzomcXVvdDtjb21tb24mcXVvdDt9XFwnJmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMiZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRHJhZ092ZXJDbGFzc2VzL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+RHJhZ092ZXJDbGFzc2VzPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+WW91IGNhbiBpbnRlcmFjdCB3aXRoIGRyYWdnaW5nIGVsZW1lbnQgYnkgc2V0dGluZyBkcmFnT3ZlckNsYXNzZXM6dHJ1ZSBpbiBvcHRpb25zIGFuZCBhZGRpbmcgcG9pbnRlciBjbGFzcyAoZGVmYXVsdCBpczogXFwnZ3Utb3Zlci1hY3RpdmVcXCcpIHRvIGVsZW1lbnQgeW91IHdhbnQgdG8gYmUgaW50ZXJhY3RpdmUgKGdldHRpbmcgY2xhc3NlcykuIFVzdWFsbHkgeW91IHdhbnQgdG8gY29udGFpbmVycyBzaG93IHdoZWF0aGVyIHRoZXkgYWNjZXB0cyBlbGVtZW50IG9yIG5vdCwgYnV0IHlvdSBjYW4gdXNlIGl0IGFueXdoZXJlLiBUcnkgdG8gZHJhZyBvdmVyIHRoZSBub3QtY29udGFpbmVyIHRvby48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkRyYWdPdmVyQ2xhc3Nlc1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2PmFwcGxlcyBhbmQgb3JhbmdlcyBjYW5ub3QgYmUgbWl4ZWQ8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDI8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDM8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDQ8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2Pm9yYW5nZSAxPC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgMjwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDM8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSA0PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5hcHBsZSA1PC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSA2PC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSA3PC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSA4PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5vcmFuZ2UgNTwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDY8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSA3PC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgODwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibm90Q29udGFpbmVyIGd1LW92ZXItYWN0aXZlXFxcIj4gVGVzdCBhY3RpdmUgY2xhc3Mgb24gTk9UIGNvbnRhaW5lci48L2Rpdj5cXG5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0RyYWdPdmVyQ2xhc3NlcyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlcyBhbmQgb3JhbmdlcyBjYW5ub3QgYmUgbWl4ZWQmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlIDImbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtvcmFuZ2UgMSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDImbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZSA1Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZSA2Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDUmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O29yYW5nZSA2Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPSZxdW90O25vdENvbnRhaW5lciZxdW90OyZndDsgVGVzdCBhY3RpdmUgY2xhc3Mgb24gTk9UIGNvbnRhaW5lci4mbHQ7L2RpdiZndDtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuXFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIENTU1xcbi5jb250YWluZXIuZ3Utb3Zlci1hY3RpdmUuZ3Utb3Zlci1hY2NlcHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jb250YWluZXIuZ3Utb3Zlci1hY3RpdmUuZ3Utb3Zlci1kZWNsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm5vdENvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG59XFxuXFxuLm5vdENvbnRhaW5lci5ndS1vdmVyLWFjdGl2ZS5ndS1vdmVyLWRlY2xpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuXFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEpTXFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0sICRlbGVtZW50LmNoaWxkcmVuKClbMl1dLCB7XFxuICAgIG5hbWVTcGFjZTogXFwnYXBwbGVzXFwnLFxcbiAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcXG4gIH0pO1xcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzFdLCAkZWxlbWVudC5jaGlsZHJlbigpWzNdXSwge1xcbiAgICBuYW1lU3BhY2U6IFxcJ29yYW5nZXNcXCcsXFxuICAgIGRyYWdPdmVyQ2xhc3NlczogdHJ1ZVxcbiAgfSk7XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVFdmVudHMvZXhhbXBsZUV2ZW50cy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPkV2ZW50czwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+QWRkIHNvbWUgZmFudGFzdGljIGV2ZW50cyE8L2xhYmVsPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRXZlbnRzXFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFwnbGVmdDNcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGlkPVxcJ3JpZ2h0M1xcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7XFxuICAgIHNjb3BlOiAkc2NvcGVcXG4gIH0pO1xcbiAgJHNjb3BlLiRvbihcXCdkcmFnXFwnLCBmdW5jdGlvbihlLCBlbCkge1xcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShcXCcgZXgtbW92ZWRcXCcsIFxcJ1xcJyk7XFxuICB9KTtcXG4gICRzY29wZS4kb24oXFwnZHJvcFxcJywgZnVuY3Rpb24oZSwgZWwpIHtcXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XFxuICAgICAgZWwuY2xhc3NOYW1lICs9IFxcJyBleC1tb3ZlZFxcJztcXG4gICAgfSwgMCk7XFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlSGFuZGxlL2V4YW1wbGVIYW5kbGUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgIDxoMj5IYW5kbGU8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkRyYWcgaGFuZGxlcyBmbG9hdCB5b3VyIGNydWlzZT88L2xhYmVsPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiSGFuZGxlXFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFwnbGVmdDVcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzcz1cXCdoYW5kbGVcXCc+Kzwvc3Bhbj5Nb3ZlIG1lLCBidXQgeW91IGNhbiB1c2UgdGhlIHBsdXMgc2lnbiB0byBkcmFnIG1lIGFyb3VuZC48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBpZD1cXCdyaWdodDVcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVmdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZ2h0KV0sIHtcXG4gICAgbW92ZXM6IGZ1bmN0aW9uIChlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTmFtZSA9PT0gXFwnaGFuZGxlXFwnO1xcbiAgICB9XFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmFtZVNwYWNlcy9leGFtcGxlTmFtZVNwYWNlcy5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5OYW1lU3BhY2VzPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPlRyeSB0byBtaXggYXBwbGVzIGFuZCBvcmFuZ2VzLiBZb3UgY2Fubm90IHBsYWNlIGFwcGxlcyBpbnRvIG9yYW5nZXMsIGJ1dCBub3RpY2UgdGhhdCB5b3UgY2FuIHBsYWNlIGl0IGludG8gbWl4ZWQuIE1peGVkIGNhbiBiZSBwbGFjZWQgaW50byBhcHBsZXMgYW5kIG9yYW5nZXMuIE5vdGljZSB0aGF0IG1peGVkIGJlY29tZXMgb3JhbmdlIG9yIGFwcGxlIGlmIHBsYWNlZCBpbnRvIHRoZWlyIGNvbnRhaW5lci4gPGI+U28gcmVtZW1iZXIgaWYgeW91IGFyZSB1c2luZyBuYW1lc3BhY2luZywgdGhlbiBpdGVtIGlzIG5hbWVzcGFjZWQgYWNjb3JkaW5nIHRvIGFjdHVhbCBjb250YWluZXIgaXQgaXMgcGxhY2VkIGluLiBJZiB5b3UgbmVlZCB0byBpdGVtIHByZXNlcnZlIHRoaWVyIHN0YXRlIHlvdSBuZWVkIHRvIHVzZSBjbGFzc2VzIGluIGNvbWJpbmF0aW9uIHdpdGggb3B0aW9ucy5hY2NlcHRzIGFuZCBvcHRpb25hbGx5IG9wdGlvbnMuaXNDb250YWluZXIuPC9iPiBJdCBkZXBlbmRzIG9uIHNldHVwLiAoU2VlIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyL2lzc3Vlcy85XFxcIj5pc3N1ZSAjOTwvYT4uKTwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIk5hbWVTcGFjZXNcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjVcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnRyeSB0byBtaXggb3JhbmdlcyBhbmQgYXBwbGVzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjVcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSAxPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjVcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgNjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA3PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDg8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNVxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bWl4ZWQgMTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm1peGVkIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bWl4ZWQgNDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgIDxjb2RlPlxcbmRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcXG4gIG5hbWVTcGFjZTogXFwnYXBwbGVzXFwnXFxufSk7XFxuZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKClbMV0sIHtcXG4gIG5hbWVTcGFjZTogXFwnb3Jhbmdlc1xcJ1xcbn0pO1xcbmRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzNdLCB7IC8vIG1peGVkXFxuICBuYW1lU3BhY2U6IFtcXCdvcmFuZ2VzXFwnLCBcXCdhcHBsZXNcXCddXFxufSk7XFxuICAgICAgPC9jb2RlPlxcbiAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdC9leGFtcGxlTmVzdGVkTmdSZXBlYXQuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgIDxoMj5OZXN0ZWQgbmdSZXBlYXQ8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPiBZb3UgY2FuIG1vdmUgd2hvbGUgcm93cyBieSBncmFiaW5nIHJvdyB0aXRsZSwgYWxsIGl0ZW1zIGl0IHNlbHZlcy4gVHJ5IGl0IG91dCFcXG4gICAgICAgIDxoci8+XFxuICAgICAgICA8Yj5PbGQgSUUgZG9lc250IHN1cHBvcnQgRmxleGlibGUgQm94IExheW91dDwvYj4gc28gaXQgY2FuIGxvb2sgd2VpcmQuIEJ1dCBpbiBtb2Rlcm4gYnJvd3NlcnMgaXQgaXMgYXdzb21lISBEcmFndWxhciB3aWxsIGJlIHdvcmtpbmcgd2VsbCBhbHNvIGluIG9sZCBJRSBidXQgeW91IGhhdmUgdG8gdXNlIGRpZmZlcmVudCBjc3MgZm9yIGxheW91dC5cXG4gICAgICAgIDxoci8+XFxuICAgIDwvbGFiZWw+XFxuICAgIDxkaXYgbmctY29udHJvbGxlcj1cXFwiTmVzdGVkTmdSZXBlYXRcXFwiPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiIGNsYXNzPVxcJ2V4YW1wbGVSb3dcXCc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93LWhhbmRsZVxcXCI+Um93IHt7JGluZGV4fX08L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtLml0ZW1zXFxcIiBjbGFzcz1cXFwiZXhhbXBsZUNlbGxcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gSFRNTFxcblxcbiAgJmx0O2RpdiBuZy1jb250cm9sbGVyPSZxdW90O0V4YW1wbGUxNSZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyBjbGFzcz1cXCdleGFtcGxlUm93XFwnJmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7cm93LWhhbmRsZSZxdW90OyZndDtSb3cge3skaW5kZXh9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbS5pdGVtcyZxdW90OyBjbGFzcz0mcXVvdDtleGFtcGxlQ2VsbCZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIC8vIENTU1xcblxcbiAgLmV4YW1wbGVSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLmV4YW1wbGVDZWxsIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcblxcbiAgLmV4YW1wbGVSb3csXFxuICAuZXhhbXBsZUNlbGwge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGN1cnNvcjogLW1vei1ncmFiO1xcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIH1cXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gSlNcXG5cXG4gICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyB0aW1lb3VudCBkdWUgdG8gbmdSZXBlYXQgdG8gYmUgcmVhZHlcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LCB7XFxuICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcXG4gICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gIH0sIDApO1xcbiAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgaXRlbXM6IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhMVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhNFxcJ1xcbiAgICB9XVxcbiAgfSwge1xcbiAgICBpdGVtczogW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGIxXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGIyXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGIzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGI0XFwnXFxuICAgIH1dXFxuICB9LCB7XFxuICAgIGl0ZW1zOiBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzFcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzJcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzRcXCdcXG4gICAgfV1cXG4gIH1dO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+TmVzdGVkIG5nUmVwZWF0IC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPiBZb3UgY2FuIG1vdmUgd2hvbGUgcm93cyBieSBncmFiaW5nIHJvdyB0aXRsZSwgYWxsIGl0ZW1zIGl0IHNlbHZlcy4gVHJ5IGl0IG91dCFcXG4gICAgPGhyLz5cXG4gICAgPGI+T2xkIElFIGRvZXNudCBzdXBwb3J0IEZsZXhpYmxlIEJveCBMYXlvdXQ8L2I+IHNvIGl0IGNhbiBsb29rIHdlaXJkLiBCdXQgaW4gbW9kZXJuIGJyb3dzZXJzIGl0IGlzIGF3c29tZSEgRHJhZ3VsYXIgd2lsbCBiZSB3b3JraW5nIHdlbGwgYWxzbyBpbiBvbGQgSUUgYnV0IHlvdSBoYXZlIHRvIHVzZSBkaWZmZXJlbnQgY3NzIGZvciBsYXlvdXQuXFxuICAgIDxoci8+XFxuICA8L2xhYmVsPlxcbiAgPGRpdiBuZy1jb250cm9sbGVyPVxcXCJOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIiBjbGFzcz1cXCdleGFtcGxlUm93XFwnPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3ctaGFuZGxlXFxcIj5Sb3cge3s6OiRpbmRleH19PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImV4YW1wbGVSb3cgZXhhbXBsZUNlbGwgY29udGFpbmVyTmVzdGVkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtLml0ZW1zXFxcIiBjbGFzcz1cXFwiZXhhbXBsZUNlbGxcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPHByZT5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW1zOlxcbiAgICAgICAgICAgICAgPGJyLz57e2l0ZW1zIHwganNvbn19PC9kaXY+XFxuICAgICAgICA8L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IG5nLWNvbnRyb2xsZXI9JnF1b3Q7TmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwmcXVvdDsmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zJnF1b3Q7IGNsYXNzPVxcJ2V4YW1wbGVSb3dcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtyb3ctaGFuZGxlJnF1b3Q7Jmd0O1JvdyB7ezo6JGluZGV4fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2V4YW1wbGVSb3cgZXhhbXBsZUNlbGwgY29udGFpbmVyTmVzdGVkJnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtLml0ZW1zJnF1b3Q7IGNsYXNzPSZxdW90O2V4YW1wbGVDZWxsJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIENTU1xcblxcbiAgLmV4YW1wbGVSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLmV4YW1wbGVDZWxsIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcblxcbiAgLmV4YW1wbGVSb3csXFxuICAuZXhhbXBsZUNlbGwge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGN1cnNvcjogLW1vei1ncmFiO1xcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIH1cXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEpTXFxuY29udHJvbGxlcihcXCdOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFxcJywgW1xcJyR0aW1lb3V0XFwnLCBcXCckc2NvcGVcXCcsIFxcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCR0aW1lb3V0LCAkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIHRpbWVvdW50IGR1ZSB0byBuZXN0ZWQgbmdSZXBlYXQgdG8gYmUgcmVhZHlcXG4gICAgICB2YXIgY29udGFpbmVyID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpLFxcbiAgICAgICAgcGFyZW50Q29udGFpbmVycyA9IGNvbnRhaW5lci5jaGlsZHJlbigpLFxcbiAgICAgICAgbmVzdGVkQ29udGFpbmVycyA9IFtdO1xcblxcbiAgICAgIGRyYWd1bGFyU2VydmljZShjb250YWluZXIsIHtcXG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXNcXG4gICAgICB9KTtcXG5cXG4gICAgICAvLyBjb2xsZWN0IG5lc3RlZCBjb250aWFuZXJzXFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRDb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBuZXN0ZWRDb250YWluZXJzLnB1c2gocGFyZW50Q29udGFpbmVycy5lcShpKS5jaGlsZHJlbigpWzFdKTtcXG4gICAgICB9O1xcblxcbiAgICAgIGRyYWd1bGFyU2VydmljZShuZXN0ZWRDb250YWluZXJzLCB7XFxuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgICAgIHJldHVybiAhaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcXCdyb3ctaGFuZGxlXFwnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250YWluZXJzTW9kZWw6IChmdW5jdGlvbiBnZXROZXN0ZWRDb250YWluZXJzTW9kZWwoKXtcXG4gICAgICAgICAgdmFyIHBhcmVudCA9ICRzY29wZS5pdGVtcyxcXG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwgPSBbXTtcXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnQubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwucHVzaChwYXJlbnRbaV0uaXRlbXMpO1xcbiAgICAgICAgICB9O1xcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyc01vZGVsO1xcbiAgICAgICAgfSkoKVxcbiAgICAgIH0pO1xcbiAgICB9LCAwKTtcXG4gICAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgICBpdGVtczogW3tcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTFcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGEyXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhM1xcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTRcXCdcXG4gICAgICB9XVxcbiAgICB9LCB7XFxuICAgICAgaXRlbXM6IFt7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGIxXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBiMlxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjNcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGI0XFwnXFxuICAgICAgfV1cXG4gICAgfSwge1xcbiAgICAgIGl0ZW1zOiBbe1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBjMVxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzJcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGMzXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBjNFxcJ1xcbiAgICAgIH1dXFxuICAgIH1dO1xcbiAgfV0pXFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+bmdSZXBlYXQ8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+RXhhbXBsZSBvZiB1c2luZyBuZy1yZXBlYXQgd2l0aCBkcmFndWxhciBhbmQgYWRkaW5nL3JlbW92aW5nIGl0ZW1zIGR5bmFtaWNhbHkuPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiTmdSZXBlYXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcImFkZEl0ZW0oKVxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz1cXFwicmVtb3ZlSXRlbSgpXFxcIj54PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gSFRNTDpcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMmcXVvdDsmZ3Q7XFxuICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICZsdDtidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz0mcXVvdDthZGRJdGVtKCkmcXVvdDsmZ3Q7KyZsdDsvYnV0dG9uJmd0O1xcbiAgICAgICZsdDtidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz0mcXVvdDtyZW1vdmVJdGVtKCkmcXVvdDsmZ3Q7eCZsdDsvYnV0dG9uJmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcblxcbiAgLy8gSlM6XFxuICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XFxuICAkc2NvcGUuaXRlbXMgPSBbe1xcbiAgICBjb250ZW50OiBcXCdUcnkgdG8gYWRkIG9yIHJlbW92ZSBzb21lIGVsZW1lbnRzIChjbGljayBvbiArLSBidXR0b25zKSwgeW91IHdpbGwgc2VlIHRoYXQgaXQgaXMgbm90IHByb2JsZW0gZm9yIGRyYWd1bGFyLlxcJ1xcbiAgfSx7XFxuICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gMlxcJ1xcbiAgfSx7XFxuICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgfSx7XFxuICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgfV07XFxuICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uIGFkZEl0ZW0gKCkge1xcbiAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pICsgMTtcXG4gICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCx7Y29udGVudDogdGhpcy5pdGVtLmNvbnRlbnQgKyBcXCctY29weVxcJ30pO1xcbiAgfVxcbiAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtICgpIHtcXG4gICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcXG4gICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XFxuICB9XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPm5nUmVwZWF0IC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkV4YW1wbGUgb2YgdXNpbmcgbmctcmVwZWF0IHdpdGggZHJhZ3VsYXIgYW5kIGFkZGluZy9yZW1vdmluZyBpdGVtcyBkeW5hbWljYWx5LjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiTmdSZXBlYXRXaXRoTW9kZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCI+XFxuICAgICAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPVxcXCJhZGRJdGVtKClcXFwiPis8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPVxcXCJyZW1vdmVJdGVtKClcXFwiPng8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gSFRNTDpcXG4gICAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtOZ1JlcGVhdFdpdGhNb2RlbCZxdW90OyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyZndDtcXG4gICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7YWRkSXRlbSgpJnF1b3Q7Jmd0OysmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAgICAgJmx0O2J1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPSZxdW90O3JlbW92ZUl0ZW0oKSZxdW90OyZndDt4Jmx0Oy9idXR0b24mZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEpTOlxcbiAgY29udHJvbGxlcihcXCdOZ1JlcGVhdFdpdGhNb2RlbFxcJywgW1xcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgICRzY29wZS5pdGVtcyA9IFt7XFxuICAgICAgY29udGVudDogXFwnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gICAgfV07XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksIHtjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc30pO1xcbiAgICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uIGFkZEl0ZW0oKSB7XFxuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XFxuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCwge1xcbiAgICAgICAgY29udGVudDogdGhpcy5pdGVtLmNvbnRlbnQgKyBcXCctY29weVxcJ1xcbiAgICAgIH0pO1xcbiAgICB9O1xcbiAgICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oKSB7XFxuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcXG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcXG4gICAgfTtcXG4gIH1dKVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlUmVtb3ZlT25TcGlsbC9leGFtcGxlUmVtb3ZlT25TcGlsbC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5SZW1vdmUgb24gc3BpbGw8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+TmVlZCB0byBiZSBhYmxlIHRvIHF1aWNrbHkgZGVsZXRlIHN0dWZmIHdoZW4gaXQgc3BpbGxzIG91dCBvZiB0aGUgY2hvc2VuIGNvbnRhaW5lcnM/PC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiUmVtb3ZlT25TcGlsbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFwnc2luZ2xlMVxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIHNvbWV3aGVyZSBpbiB0aGlzIGNvbnRhaW5lci48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIGhlcmUsIElcXCdsbCBkaWUgYSBmaWVyeSBkZWF0aC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNpbmdsZSldLCB7IHJlbW92ZU9uU3BpbGw6IHRydWUgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5SZXZlcnQgb24gc3BpbGw8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+QnkgZGVmYXVsdCwgZHJvcHBpbmcgYW4gZWxlbWVudCBvdXRzaWRlIG9mIGFueSBrbm93biBjb250YWluZXJzIHdpbGwga2VlcCB0aGUgZWxlbWVudCBpbiB0aGUgbGFzdCBwbGFjZSBpdCBob3ZlcmVkIG92ZXIuIFlvdSBjYW4gbWFrZSBlbGVtZW50cyBnbyBiYWNrIGhvbWUgaWYgdGhleVxcJ3JlIGRyb3BwZWQgb3V0c2lkZSBvZiBrbm93biBjb250YWluZXJzLCB0b28uPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiUmV2ZXJ0T25TcGlsbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFwnbGVmdDRcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcJ3JpZ2h0NFxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7IHJldmVydE9uU3BpbGw6IHRydWUgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlU2Nyb2xsaW5nRHJhZy9leGFtcGxlU2Nyb2xsaW5nRHJhZy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPlNjcm9sbGluZyBkcmFnPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz4gQ29udGFpbnJlIGNhbiBiZSBzY3JvbGxlZCBieSBob3ZlcmluZyBkcmFnZ2VkIGl0ZW0gb3ZlciBtb3N0IHRvcCB2aXNpYmxlIGl0ZW0gb3IgbW9zdCBib3R0b20sIHNjcm9sbCBkaXJlY3Rpb24gcmVzcGVjdGl2ZWx5LlxcbiAgICA8L2xhYmVsPlxcbiAgICA8ZGl2IG5nLWNvbnRyb2xsZXI9XFxcIlNjcm9sbGluZ0RyYWdcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyVmVydGljYWwgaGVpZ2h0TGltaXRcXFwiPlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDI8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gOS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMTAuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDExLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxMi48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMTMuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwicGFydGlhbHMvcGFydGlhbC1jb250cmlidXRlLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICBDb250cmlidXRpbmcgbm90ZXMgd2lsbCBiZSBtb3ZlZCBoZXJlLCBzaW5jZSB0aGVuLCBwbGVhc2UgdXNlIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyL2Jsb2IvbWFzdGVyL0NPTlRSSUJVVElORy5tZFxcXCI+Y29udHJpYnV0aW9uIG5vdGVzIG9uIGdpdGh1YjwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJwYXJ0aWFscy9wYXJ0aWFsLWRvY3MuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICA8ZGl2IGlkPVxcXCJyb3dPZmZjYW52YXNcXFwiIGNsYXNzPVxcXCJyb3cgcm93LW9mZmNhbnZhcyByb3ctb2ZmY2FudmFzLWxlZnRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMyBzaWRlYmFyLW9mZmNhbnZhc1xcXCIgaWQ9XFxcInNpZGViYXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcbiAgICAgICAgPGEgdWktc3JlZj1cXFwiZG9jcy5kZXRhaWwoe2xpbms6XFwnZG9jc0luc3RhbGxcXCd9KVxcXCIgdWktc3JlZi1hY3RpdmU9XFxcImFjdGl2ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+SW5zdGFsbGF0aW9uPC9hPlxcbiAgICAgICAgPGEgbmctcmVwZWF0PVxcXCJleGFtcGxlIGluIGV4YW1wbGVzTGlzdFxcXCIgdWktc3JlZj1cXFwiZG9jcy5kZXRhaWwoe2xpbms6ZXhhbXBsZS5saW5rfSlcXFwiIHVpLXNyZWYtYWN0aXZlPVxcXCJhY3RpdmVcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPnt7ZXhhbXBsZS50aXRsZX19PC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLS8uc2lkZWJhci1vZmZjYW52YXMtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS05XFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwicHVsbC1sZWZ0IHZpc2libGUteHNcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVTaWRlYmFyKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXFxcIj5Ub2dnbGUgbmF2PC9idXR0b24+XFxuICAgICAgPC9wPlxcbiAgICAgIDwhLS0gZG9jcy5kZXRhaWwgLS0+XFxuICAgICAgPGRpdiB1aS12aWV3PjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLS8uY29sLXhzLTEyLmNvbC1zbS05LS0+XFxuICA8L2Rpdj5cXG4gIDwhLS0vcm93LS0+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwicGFydGlhbHMvcGFydGlhbC1ob21lLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPCEtLS8uc2lkZWJhci1vZmZjYW52YXMtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb25cXFwiPlxcbiAgICAgICAgPGgxPkRSQUdVTEFSPC9oMT5cXG4gICAgICAgIDxwPkFuZ3VsYXIgZHJhZyZkcm9wIGJhc2VkIG9uIDxhIGhyZWY9XFxcImh0dHA6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGFcXFwiPmRyYWd1bGE8L2E+LjwvcD5cXG4gICAgICAgIDxwPjxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiB1aS1zcmVmPVxcXCJkb2NzXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPkxpdmUgZXhhbXBsZXMgaW4gZG9jczwvYT48L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgICAgIDxwPkJyb3dzZXIgc3VwcG9ydCBpbmNsdWRlcyBldmVyeSBzYW5lIGJyb3dzZXIgYW5kICoqSUU3KyoqLiA8c3ViPl8oR3JhbnRlZCB5b3UgcG9seWZpbGwgdGhlIGZ1bmN0aW9uYWwgYEFycmF5YCBtZXRob2RzIGluIEVTNSlfPC9zdWI+PC9wPlxcbiAgICAgICAgICA8aDI+SW5zcGlyYXRpb248L2gyPlxcbiAgICAgICAgICA8cD5IYXZlIHlvdSBldmVyIHdhbnRlZCBhIGRyYWcgYW5kIGRyb3AgbGlicmFyeSB0aGF0IGp1c3Qgd29ya3M/IFRoYXQgYWN0dWFsbHkgdW5kZXJzdGFuZHMgd2hlcmUgdG8gcGxhY2UgdGhlIGVsZW1lbnRzIHdoZW4gdGhleSBhcmUgZHJvcHBlZD8gVGhhdCBkb2VzbuKAmXQgbmVlZCB5b3UgdG8gZG8gYSB6aWxsaW9uIHRoaW5ncyB0byBnZXQgaXQgdG8gd29yaz8gV2VsbCwgc28gZGlkIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YVxcXCI+Tmljb2xhcyBCZXZhY3F1YTwvYT4gYW5kIEkgaGF2ZSBmb3JrZWQgaXQgaW50byBhbmd1bGFyIG1vZHVsZSBhbmQgYWxzbyBwdXQgc29tZSBmZWF0dXJlcyE8L3A+XFxuICAgICAgICAgIDxwPjxiPkFjdHVhbCB2ZXJzaW9uIDIuMC4wIGlzIGJhc2VkIG9uIGRyYWd1bGEgMi4xLjIgYW5kIHRlc3RlZCB3aXRoIGFuZ3VsYXIgMS40LjEuPC9iPjwvcD5cXG4gICAgICAgICAgPGgyPkRpZmZlcmVuY2VzIG9mIGRyYWd1bGFyIChhZ2FpbnN0IGRyYWd1bGEpPC9oMj5cXG4gICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgIDxsaT5yZXBsYWNlZCBjcm9zc3ZlbnQgd2l0aCBhbmd1bGFycyBldmVudCBiaW5kaW5nPC9saT5cXG4gICAgICAgICAgICA8bGk+cmVwbGFjZWQgY29udHJhLmVtaXR0ZXIgd2l0aCAkc2NvcGUuJGVtaXQgaWYgc2NvcGUgcHJvdmlkZWQgaW4gb3B0aW9ucyAob3B0aW9ucy5zY29wZSk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5lbmNhcHN1bGF0ZWQgdGhlIGNvZGUgaW50byBhbmd1bGFyIGZhY3RvcnkgKGRyYWd1bGFyU2VydmljZSk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5jcmVhdGVkIGRpcmVjdGl2ZSBkcmFndWxhciB3aGVyZSBvcHRpb25zIGNhbiBiZSBwYXNzZWQgcHJvdmlkaW5nIHNjb3BlIHByb3BlcnR5IG5hbWU8L2xpPlxcbiAgICAgICAgICAgIDxsaT5ib3RoIHNlcnZpY2UgYW5kIGRpcmVjdGl2ZSBwcm92aWRlZCBhcyBhbmd1bGFyIG1vZHVsZSAoZHJhZ3VsYXJNb2R1bGUpPC9saT5cXG4gICAgICAgICAgICA8bGk+YXV0b21hdGljIGRpcmVjdGlvbiBpZiBub3QgcHJvdmlkZWQgaW4gb3B0aW9ucywgaW5zdGVhZCBvZiBkZWZhdWx0IHZlcnRpY2FsPC9saT5cXG4gICAgICAgICAgICA8bGk+YWNjZXB0aW5nIGFycmF5bGlrZSBvYmplY3RzIGFzIGNvbnRhaW5lcnMgYXJyYXk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hY2NlcHRpbmcgY3VzdG9tIGNsYXNzZXMgdmlhIG9wdGlvbi5jbGFzc2VzPC9saT5cXG4gICAgICAgICAgICA8bGk+bmFtZXNwYWNlZCBjb250YWluZXJzIGdyb3VwcyBhdmFpbGFibGUgdmlhIG9wdGlvbi5uYW1lU3BhY2U8L2xpPlxcbiAgICAgICAgICAgIDxsaT5ib3VuZGluZ0JveCAoZHJhZ2dpbmcgZWxlbWVudCBjYW4gbWUgbW92ZWQgb25seSBpbiBzcGVjaWZpYyBhcmVhKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmxvY2tYL1kgKGRyYWdnaW5nIGVsZW1lbnQgY2FuIG1lIG1vdmVkIG9ubHkgaW4gc3BlY2lmaWMgZGlyZWN0aW9uKTwvbGk+XFxuICAgICAgICAgICAgPGxpPm1vcmUgZXhhbXBsZXM8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hY2NlcHQgSlNPTiBvcHRpb25zIGluIGRyYWd1bGFyIGRpcmVjdGl2ZSAoIzIpPC9saT5cXG4gICAgICAgICAgICA8bGk+YWRkL3JlbW92ZSB3aXRoIG5nLXJlcGVhdDwvbGk+XFxuICAgICAgICAgICAgPGxpPmFkZGVkIHN5bnRheCBoaWdobGlnaHRlciB0byBleGFtcGxlIGNvZGVzPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPGgyPlRvZG88L2gyPlxcbiAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgPGxpPmV4YW1wbGUgZm9yIGRlbGF5PC9saT5cXG4gICAgICAgICAgICA8bGk+by5pc0NvbnRhaW5lciBpbiBfaXNDb250YWluZXIgKGZuIG8uaXNDb250YWluZXJHZXRNb2RlbChjb250YWluZXJFbG0pKTwvbGk+XFxuICAgICAgICAgICAgPGxpPnNvbHZlIG1peGluZyB3aXRoIGFuZCB3aXRob3V0IG1vZGVsIGNvbnRhaW5lcnM8L2xpPlxcbiAgICAgICAgICAgIDxsaT5yZW1vdmUgbnBtIHdvcmtmbG93PC9saT5cXG4gICAgICAgICAgICA8bGk+c3VwcG9ydCBzZWxlY3RvcnMgaW4gc2VydmljZSAoIzIpPzwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxoMj5GZWF0dXJlczwvaDI+XFxuICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICA8bGk+cHJvdmlkZWQgYXMgc2VydmljZSBhbmQgYWxzbyBhcyBkaXJlY3RpdmU8L2xpPlxcbiAgICAgICAgICAgIDxsaT5TdXBlciBlYXN5IHRvIHNldCB1cDwvbGk+XFxuICAgICAgICAgICAgPGxpPk5vIGJsb2F0ZWQgZGVwZW5kZW5jaWVzPC9saT5cXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5GaWd1cmVzIG91dCBzb3J0IG9yZGVyPC9zdHJvbmc+IG9uIGl0cyBvd248L2xpPlxcbiAgICAgICAgICAgIDxsaT5BIHNoYWRvdyB3aGVyZSB0aGUgaXRlbSB3b3VsZCBiZSBkcm9wcGVkIG9mZmVycyA8c3Ryb25nPnZpc3VhbCBmZWVkYmFjazwvc3Ryb25nPjwvbGk+XFxuICAgICAgICAgICAgPGxpPlRvdWNoIGV2ZW50cyE8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8aDI+Rm9yIGluc3RhbGxhdGlvbiwgdXNhZ2UgYW5kIGV4YW1wbGVzIGdvIHRvIDxhIHVpLXNyZWY9XFxcImRvY3NcXFwiPmRvY3M8L2E+PC9oMj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDwhLS0vcm93LS0+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tLy5jb2wteHMtMTIuY29sLXNtLTktLT5cXG4gIDwvZGl2PlxcbiAgPCEtLS9yb3ctLT5cXG48L2Rpdj5cXG5cIik7fV0pOyIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogZHJhZ3VsYXIgRGlyZWN0aXZlIGJ5IEx1Y2t5bG9va2UgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXJcbiAqIEFuZ3VsYXIgdmVyc2lvbiBvZiBkcmFndWxhIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhXG4gKi9cbiB2YXIgZHJhZ3VsYXJNb2R1bGUgPSByZXF1aXJlKCcuL2RyYWd1bGFyTW9kdWxlJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmRyYWd1bGFyTW9kdWxlLmRpcmVjdGl2ZSgnZHJhZ3VsYXInLCBbJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uKGRyYWd1bGFyU2VydmljZSkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24oJHNjb3BlLCBpRWxtLCBpQXR0cnMpIHtcblxuICAgICAgdmFyIG9wdGlvbnMgPSAkc2NvcGVbaUF0dHJzLmRyYWd1bGFyXSB8fCB0cnlKc29uKGlBdHRycy5kcmFndWxhcik7XG5cbiAgICAgIGZ1bmN0aW9uIHRyeUpzb24oanNvbikge1xuICAgICAgICB0cnkgeyAvLyBJIGRvbnQgbGlrZSB0cnkgY2F0Y2ggc29sdXRpb25zIGJ1dCBJIGhhdmVudCBmaW5kIHNhdHRpc2Z5aW5nIHdheSBvZiBjaGNlY2tpbmcganNvbiB2YWxpZGl0eS5cbiAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCAmJiB0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJzTW9kZWwgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgb3B0aW9ucy5jb250YWluZXJzTW9kZWwgPSAkc2NvcGUuJGV2YWwob3B0aW9ucy5jb250YWluZXJzTW9kZWwpO1xuICAgICAgfVxuXG4gICAgICBkcmFndWxhclNlcnZpY2UoaUVsbVswXSwgb3B0aW9ucyk7XG4gICAgfVxuICB9O1xufV0pXG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnZHJhZ3VsYXJNb2R1bGUnLCBbXSk7XG5cbih7XCJkcmFndWxhckRpcmVjdGl2ZVwiOnJlcXVpcmUoXCIuL2RyYWd1bGFyRGlyZWN0aXZlLmpzXCIpLFwiZHJhZ3VsYXJTZXJ2aWNlXCI6cmVxdWlyZShcIi4vZHJhZ3VsYXJTZXJ2aWNlLmpzXCIpfSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGRyYWd1bGFyIE1vZHVsZSBhbmQgU2VydmljZSBieSBMdWNreWxvb2tlIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG5cbnZhciBkcmFndWxhck1vZHVsZSA9IHJlcXVpcmUoJy4vZHJhZ3VsYXJNb2R1bGUnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5kcmFndWxhck1vZHVsZS5mYWN0b3J5KCdkcmFndWxhclNlcnZpY2UnLCBbJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiBkcmFndWxhKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XG5cbiAgdmFyIGNvbnRhaW5lcnNOYW1lU3BhY2VkID0ge30sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnNcbiAgICBjb250YWluZXJzTmFtZVNwYWNlZE1vZGVsID0ge30sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnMgbW9kZWxzXG4gICAgX2NhY2hlID0ge30sIC8vIGNsYXNzZXMgbG9va3VwIGNhY2hlXG4gICAgX21pcnJvcjsgLy8gbWlycm9yIGltYWdlXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGluaXRpYWxDb250YWluZXJzLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiAhQXJyYXkuaXNBcnJheShpbml0aWFsQ29udGFpbmVycykgJiYgIWFuZ3VsYXIuaXNFbGVtZW50KGluaXRpYWxDb250YWluZXJzKSAmJiAhaW5pdGlhbENvbnRhaW5lcnNbMF0pIHtcbiAgICAgIC8vIHRoZW4gY29udGFpbmVycyBhcmUgbm90IHByb3ZpZGVkLCBvbmx5IG9wdGlvbnNcbiAgICAgIG9wdGlvbnMgPSBpbml0aWFsQ29udGFpbmVycztcbiAgICAgIGluaXRpYWxDb250YWluZXJzID0gW107XG4gICAgfVxuXG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgX3NvdXJjZSwgLy8gc291cmNlIGNvbnRhaW5lclxuICAgICAgX2l0ZW0sIC8vIGl0ZW0gYmVpbmcgZHJhZ2dlZFxuICAgICAgX3NvdXJjZU1vZGVsLCAvLyBzb3VyY2UgY29udGFpbmVyIG1vZGVsXG4gICAgICBfaXRlbU1vZGVsLCAvLyBpdGVtLW1vZGVsIGJlaW5nIGRyYWdnZWRcbiAgICAgIF90YXJnZXRNb2RlbCwgLy8gdGFyZ2V0IGNvbnRhaW5lciBtb2RlbFxuICAgICAgX2xhc3RUYXJnZXRNb2RlbCwgLy8gbGFzdCB0YXJnZXQgY29udGFpbmVyIG1vZGVsXG4gICAgICBfbGFzdERyb3BUYXJnZXQgPSBudWxsLCAvLyBsYXN0IGNvbnRhaW5lciBpdGVtIHdhcyBvdmVyXG4gICAgICBfb2Zmc2V0WCwgLy8gcmVmZXJlbmNlIHhcbiAgICAgIF9vZmZzZXRZLCAvLyByZWZlcmVuY2UgeVxuICAgICAgX29mZnNldFhyLCAvLyByZWZlcmVuY2UgeCByaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX29mZnNldFliLCAvLyByZWZlcmVuY2UgeSBib3R0b20gZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9jbGllbnRYLCAvLyBjYWNoZSBjbGllbnQgeCwgaW5pdCBhdCBncmFiLCB1cGRhdGUgYXQgZHJhZ1xuICAgICAgX2NsaWVudFksIC8vIGNhY2hlIGNsaWVudCB5LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfbWlycm9yV2lkdGgsIC8vIG1pcnJvciB3aWR0aCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX21pcnJvckhlaWdodCwgLy8gbWlycm9yIGhlaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2luaXRpYWxTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50U2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgbm93XG4gICAgICBfaW5pdGlhbEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggd2hlbiBncmFiYmVkXG4gICAgICBfY3VycmVudEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggbm93XG4gICAgICBfbGFzdE92ZXJFbGVtLCAvLyBsYXN0IGVsZW1lbnQgYmVoaW5kIHRoZSBjdXJzb3IgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2xhc3RPdmVyQ2xhc3MsIC8vIGxhc3Qgb3ZlckNsYXNzIHVzZWQgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2NvcHksIC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICAgICAgX2NvcHlNb2RlbCwgLy8gaXRlbS1tb2RlbCB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29udGFpbmVycyA9IHt9LCAvLyBjb250YWluZXJzIG1hbmFnZWQgYnkgdGhlIGRyYWtlXG4gICAgICBfY29udGFpbmVyc01vZGVsID0ge30sIC8vIGNvbnRhaW5lcnMgbW9kZWxcbiAgICAgIF9yZW5kZXJUaW1lciwgLy8gdGltZXIgZm9yIHNldFRpbWVvdXQgcmVuZGVyTWlycm9ySW1hZ2VcbiAgICAgIF9pc0NvbnRhaW5lciwgLy8gaW50ZXJuYWwgaXNDb250YWluZXJcbiAgICAgIF90YXJnZXRDb250YWluZXIsIC8vIGRyb3BwYWJsZSBjb250YWluZXIgdW5kZXIgZHJhZyBpdGVtXG4gICAgICBkZWZhdWx0Q2xhc3NlcyA9IHtcbiAgICAgICAgbWlycm9yOiAnZ3UtbWlycm9yJyxcbiAgICAgICAgaGlkZTogJ2d1LWhpZGUnLFxuICAgICAgICB1bnNlbGVjdGFibGU6ICdndS11bnNlbGVjdGFibGUnLFxuICAgICAgICB0cmFuc2l0OiAnZ3UtdHJhbnNpdCcsXG4gICAgICAgIG92ZXJBY3RpdmU6ICdndS1vdmVyLWFjdGl2ZScsXG4gICAgICAgIG92ZXJBY2NlcHRzOiAnZ3Utb3Zlci1hY2NlcHQnLFxuICAgICAgICBvdmVyRGVjbGluZXM6ICdndS1vdmVyLWRlY2xpbmUnXG4gICAgICB9LFxuICAgICAgbyA9IHsgLy8gb3B0aW9uc1xuICAgICAgICBjbGFzc2VzOiBkZWZhdWx0Q2xhc3NlcyxcbiAgICAgICAgY29udGFpbmVyczogZmFsc2UsXG4gICAgICAgIG1vdmVzOiBhbHdheXMsXG4gICAgICAgIGFjY2VwdHM6IGFsd2F5cyxcbiAgICAgICAgaXNDb250YWluZXI6IG5ldmVyLFxuICAgICAgICBjb3B5OiBmYWxzZSxcbiAgICAgICAgZGVsYXk6IGZhbHNlLFxuICAgICAgICBpbnZhbGlkOiBpbnZhbGlkVGFyZ2V0LFxuICAgICAgICByZXZlcnRPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgcmVtb3ZlT25TcGlsbDogZmFsc2UsXG4gICAgICAgIGRyYWdPdmVyQ2xhc3NlczogZmFsc2UsXG4gICAgICAgIGxvY2tYOiBmYWxzZSxcbiAgICAgICAgbG9ja1k6IGZhbHNlLFxuICAgICAgICBib3VuZGluZ0JveDogZmFsc2UsXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogZmFsc2VcbiAgICAgIH07XG5cbiAgICBpZiAoIWlzRWxlbWVudChvLmJvdW5kaW5nQm94KSkge1xuICAgICAgby5ib3VuZGluZ0JveCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5jbGFzc2VzKSB7XG4gICAgICBhbmd1bGFyLmV4dGVuZChkZWZhdWx0Q2xhc3Nlcywgb3B0aW9ucy5jbGFzc2VzKTtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKG9wdGlvbnMuY2xhc3NlcywgZGVmYXVsdENsYXNzZXMpO1xuICAgIH1cblxuICAgIGFuZ3VsYXIuZXh0ZW5kKG8sIG9wdGlvbnMpO1xuXG4gICAgaWYgKG8uZGVsYXkgPT09IHRydWUpIHtcbiAgICAgIG8uZGVsYXkgPSAzMDA7XG4gICAgfVxuXG4gICAgaWYgKG8ubWlycm9yQ29udGFpbmVyID09PSB2b2lkIDApIHtcbiAgICAgIG8ubWlycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICAvLyBnZXQgaW5pdGlhbCBjb250YWluZXJzIGZyb20gb3B0aW9ucywgYXJndW1lbnQgb3IgZmFsbCBiYWNrIHRvIGVtcHR5IGFycmF5IChjb250YWluZXJzIGNhbiBiZSBhZGRlZCBsYXRlcilcbiAgICBpbml0aWFsQ29udGFpbmVycyA9IG8uY29udGFpbmVycyB8fCAoaW5pdGlhbENvbnRhaW5lcnMgPyBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpIDogW10pO1xuICAgIGlmIChvLmNvbnRhaW5lcnMpIHtcbiAgICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBvLmNvbnRhaW5lcnNcbiAgICAgIGluaXRpYWxDb250YWluZXJzID0gbWFrZUFycmF5KGluaXRpYWxDb250YWluZXJzKTtcbiAgICB9XG4gICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICBvLmNvbnRhaW5lcnNNb2RlbCA9IEFycmF5LmlzQXJyYXkoby5jb250YWluZXJzTW9kZWxbMF0pID8gby5jb250YWluZXJzTW9kZWwgOiBbby5jb250YWluZXJzTW9kZWxdO1xuICAgIH1cblxuICAgIC8vIGZlZWQgbmFtZXNwYWNlZCBjb250YWluZXJzIGdyb3VwcyBhbmQgb3B0aW9uYWx5IHNoYWRvdyBpdCBieSBtb2RlbHNcbiAgICBpZiAoby5uYW1lU3BhY2UpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShvLm5hbWVTcGFjZSkpIHtcbiAgICAgICAgby5uYW1lU3BhY2UgPSBbby5uYW1lU3BhY2VdO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcm9jZWVkTmFtZVNwYWNlcyhfY29udGFpbmVycywgY29udGFpbmVyc05hbWVTcGFjZWQsIG5hbWVTcGFjZSwgaW5pdGlhbENvbnRhaW5lcnMpIHtcbiAgICAgICAgaWYgKCFjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdKSB7XG4gICAgICAgICAgY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0sIGluaXRpYWxDb250YWluZXJzKTtcbiAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXSA9IGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV07XG4gICAgICB9XG4gICAgICBvLm5hbWVTcGFjZS5mb3JFYWNoKGZ1bmN0aW9uIGVhY2hOYW1lU3BhY2UobmFtZVNwYWNlKSB7XG4gICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycyk7XG4gICAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzTW9kZWwsIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwsIG5hbWVTcGFjZSwgby5jb250YWluZXJzTW9kZWwpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgX2lzQ29udGFpbmVyID0gaXNDb250YWluZXJOYW1lU3BhY2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWZhdWx0IChub3QgdXNpbmcgbmFtZVNwYWNlcylcbiAgICAgIF9jb250YWluZXJzID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgICBfaXNDb250YWluZXIgPSBpc0NvbnRhaW5lcjtcbiAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICBfY29udGFpbmVyc01vZGVsID0gby5jb250YWluZXJzTW9kZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9yZWdpc3RlciBldmVudHNcbiAgICBldmVudHMoKTtcblxuICAgIHZhciBkcmFrZSA9IHtcbiAgICAgIGFkZENvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ2FkZCcpLFxuICAgICAgcmVtb3ZlQ29udGFpbmVyOiBtYW5pcHVsYXRlQ29udGFpbmVycygncmVtb3ZlJyksXG4gICAgICBjb250YWluZXJzOiBfY29udGFpbmVycyxcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZW5kLFxuICAgICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICBkcmFnZ2luZzogZmFsc2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRyYWtlO1xuXG4gICAgLy8gbWFrZSBhcnJheSBmcm9tIGFycmF5LWxpa2Ugb2JqZWN0cyBvciBmcm9tIHNpbmdsZSBlbGVtZW50XG4gICAgZnVuY3Rpb24gbWFrZUFycmF5KGFsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWxsKSkge1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgICAgfVxuICAgICAgaWYgKGFsbC5sZW5ndGgpIHsgLy8gaXMgYXJyYXktbGlrZVxuICAgICAgICB2YXIgaUFsbCA9IGFsbC5sZW5ndGgsXG4gICAgICAgICAgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgd2hpbGUgKGlBbGwpIHtcbiAgICAgICAgICBpQWxsLS07XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChhbGxbaUFsbF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgIH0gZWxzZSB7IC8vIGlzIG9uZSBlbGVtZW50XG4gICAgICAgIHJldHVybiBbYWxsXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgb3IgcmVtb3ZlIGNvbnRhaW5lcnMgLSBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gbWFuaXB1bGF0ZUNvbnRhaW5lcnMob3ApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhZGRPclJlbW92ZShhbGwpIHtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSBBcnJheS5pc0FycmF5KGFsbCkgPyBhbGwgOiBtYWtlQXJyYXkoYWxsKTtcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgICAgICAgaWYgKG8ubmFtZVNwYWNlKSB7XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goby5uYW1lU3BhY2UsIGZ1bmN0aW9uIGFkZFJlbW92ZU5hbWVzcGFjZWQoY29udGFpbmVycywgbmFtZVNwYWNlKSB7XG4gICAgICAgICAgICAgIGlmIChvcCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgICAgICBfY29udGFpbmVyc1tuYW1lU3BhY2VdLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5hZGRDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXS5zcGxpY2UoX2NvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLCAxKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5yZW1vdmVDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgIF9jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UuYWRkQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX2NvbnRhaW5lcnMuc3BsaWNlKF9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSwgMSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLnJlbW92ZUNvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NvbnRhaW5lcihlbCkge1xuICAgICAgcmV0dXJuIGRyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihlbCkgIT09IC0xIHx8IG8uaXNDb250YWluZXIoZWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ29udGFpbmVyTmFtZVNwYWNlZChlbCkge1xuICAgICAgdmFyIG5hbWVTcGFjZTtcbiAgICAgIGZvciAobmFtZVNwYWNlIGluIGRyYWtlLmNvbnRhaW5lcnMpIHtcbiAgICAgICAgaWYgKGRyYWtlLmNvbnRhaW5lcnMuaGFzT3duUHJvcGVydHkobmFtZVNwYWNlKSAmJiBkcmFrZS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZihlbCkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldmVudHMocmVtKSB7XG4gICAgICB2YXIgb3AgPSByZW0gPyAnb2ZmJyA6ICdvbic7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsIG9wLCAnbW91c2V1cCcsIHJlbGVhc2UpO1xuXG4gICAgICBpbml0aWFsQ29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIGFkZE1vdXNlRG93bihjb250YWluZXIpIHtcbiAgICAgICAgcmVnRXZlbnQoY29udGFpbmVyLCAnb24nLCAnbW91c2Vkb3duJywgZ3JhYik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZXZlbnRzKHRydWUpO1xuICAgICAgZHJha2UucmVtb3ZlQ29udGFpbmVyKF9jb250YWluZXJzKTtcbiAgICAgIHJlbGVhc2Uoe30pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdyYWIoZSkge1xuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgdmFyIGl0ZW0gPSBlLnRhcmdldDtcblxuICAgICAgLy8gZmlsdGVyIHNvbWUgb2RkIHNpdHVhdGlvbnNcbiAgICAgIGlmICgoZS53aGljaCAhPT0gMCAmJiBlLndoaWNoICE9PSAxKSB8fCBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybjsgLy8gd2Ugb25seSBjYXJlIGFib3V0IGhvbmVzdC10by1nb2QgbGVmdCBjbGlja3MgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiBkcmFnIGNhbiBzdGFydFxuICAgICAgaWYgKHN0YXJ0KGl0ZW0pICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXV0b21hdGljbHkgZGV0ZWN0IGRpcmVjdGlvbiBvZiBlbGVtZW50cyBpZiBub3Qgc2V0IGluIG9wdGlvbnNcbiAgICAgIGlmICghby5kaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudCxcbiAgICAgICAgICBwYXJlbnRIZWlnaHQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIHBhcmVudFdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIGNoaWxkSGVpZ2h0ID0gaXRlbS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgY2hpbGRXaWR0aCA9IGl0ZW0uY2xpZW50V2lkdGg7XG4gICAgICAgIG8uZGlyZWN0aW9uID0gcGFyZW50SGVpZ2h0IC8gY2hpbGRIZWlnaHQgPCBwYXJlbnRXaWR0aCAvIGNoaWxkV2lkdGggPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgfVxuXG4gICAgICAvLyBnZXQgaW5pdGlhbCBjb29yZGluYXRlcywgdXNlZCB0byByZW5kZXIgX21pcnJvciBmb3IgZmlyc3QgdGltZVxuICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldChfaXRlbSk7XG4gICAgICBfb2Zmc2V0WCA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICBfb2Zmc2V0WSA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LnRvcDtcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gbGltaXRpbmcgYXJlYSBvZiBfbWlycm9yIG1vdmVtZW50LCBnZXQgaW5pdGlhbCBjb29yZGluYXRlc1xuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgX29mZnNldFhyID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSkgLSBvZmZzZXQucmlnaHQ7XG4gICAgICAgIF9vZmZzZXRZYiA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LmJvdHRvbTtcbiAgICAgIH1cblxuICAgICAgLy8gZGVsYXllZCByZW5kZXJpbmdcbiAgICAgIGlmICh0eXBlb2Ygby5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgX3JlbmRlclRpbWVyID0gJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgICAgfSwgby5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJNaXJyb3JBbmREcmFnKGUpO1xuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWlycm9yQW5kRHJhZyhlKSB7XG4gICAgICBhZGRDbGFzcyhfY29weSB8fCBfaXRlbSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgcmVuZGVyTWlycm9ySW1hZ2UoKTtcbiAgICAgIC8vIGluaXRpYWwgcG9zaXRpb25cbiAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX29mZnNldFggKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9vZmZzZXRZICsgJ3B4JztcblxuICAgICAgZHJhZyhlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGl0ZW0pIHtcbiAgICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuXG4gICAgICBpZiAoZHJha2UuZHJhZ2dpbmcgJiYgX21pcnJvcikge1xuICAgICAgICByZXR1cm47IC8vIGFscmVhZHkgZHJhZ2dpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc0NvbnRhaW5lcihpdGVtKSkge1xuICAgICAgICByZXR1cm47IC8vIGRvbid0IGRyYWcgY29udGFpbmVyIGl0c2VsZlxuICAgICAgfVxuXG4gICAgICB3aGlsZSAoaXRlbS5wYXJlbnRFbGVtZW50ICYmICFfaXNDb250YWluZXIoaXRlbS5wYXJlbnRFbGVtZW50KSkge1xuICAgICAgICAvLyBicmVhayBsb29wIGlmIHVzZXIgdHJpZXMgdG8gZHJhZyBpdGVtIHdoaWNoIGlzIGNvbnNpZGVyZWQgaW52YWxpZCBoYW5kbGVcbiAgICAgICAgaWYgKG8uaW52YWxpZChpdGVtLCBoYW5kbGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudEVsZW1lbnQ7IC8vIGRyYWcgdGFyZ2V0IHNob3VsZCBiZSBpbW1lZGlhdGUgY2hpbGQgb2YgY29udGFpbmVyXG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVyID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFjb250YWluZXIgfHwgby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkgfHwgIW8ubW92ZXMoaXRlbSwgY29udGFpbmVyLCBoYW5kbGUsIF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCkpIHsgLy8gaXMgbW92YWJsZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVuZCgpO1xuXG4gICAgICAvLyBwcmVwYXJlIG1vZGVscyBvcGVyYXRpb25zXG4gICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gaW5pdGlhbENvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLFxuICAgICAgICAgIGl0ZW1JbmRleCA9IGRvbUluZGV4T2YoaXRlbSwgY29udGFpbmVyKTtcblxuICAgICAgICBfaW5pdGlhbEluZGV4ID0gX2N1cnJlbnRJbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgICAgX3NvdXJjZU1vZGVsID0gby5jb250YWluZXJzTW9kZWxbY29udGFpbmVySW5kZXhdO1xuICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgIF9pdGVtTW9kZWwgPSBfc291cmNlTW9kZWxbaXRlbUluZGV4XTtcbiAgICAgICAgaWYgKG8uY29weSkge1xuICAgICAgICAgIF9jb3B5TW9kZWwgPSBhbmd1bGFyLmNvcHkoX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG8uY29weSkge1xuICAgICAgICBfY29weSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9jb3B5LCBpdGVtLCBfY29weU1vZGVsLCBfaXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfc291cmNlID0gY29udGFpbmVyO1xuICAgICAgX2l0ZW0gPSBpdGVtO1xuICAgICAgX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gbmV4dEVsKGl0ZW0pO1xuXG4gICAgICBkcmFrZS5kcmFnZ2luZyA9IHRydWU7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnJywgX2l0ZW0sIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZhbGlkVGFyZ2V0KGVsKSB7XG4gICAgICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0EnIHx8IGVsLnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJyEhISEhIEkgaGF2ZW50IHNlZW4gdGhpcyBtZXNzYWdlIGluIGFueSBjYXNlJyk7XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgICAgZHJvcChpdGVtLCBpdGVtLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGVhc2UoZSkge1xuICAgICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBfY2xpZW50WCwgX2NsaWVudFkpLFxuICAgICAgICBkcm9wVGFyZ2V0ID0gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgX2NsaWVudFgsIF9jbGllbnRZKTtcblxuICAgICAgaWYgKGRyb3BUYXJnZXQgJiYgKG8uY29weSA9PT0gZmFsc2UgfHwgZHJvcFRhcmdldCAhPT0gX3NvdXJjZSkpIHtcbiAgICAgICAgLy8gZm91bmQgdmFsaWQgdGFyZ2V0IGFuZCAoaXMgbm90IGNvcHkgY2FzZSBvciB0YXJnZXQgaXMgbm90IGluaXRpYWwgY29udGFpbmVyKVxuICAgICAgICBkcm9wKGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgICAgfSBlbHNlIGlmIChvLnJlbW92ZU9uU3BpbGwpIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWZ0ZXIgcmVsZWFzZSB0aGVyZSBpcyBubyBjb250YWluZXIgaG92ZXJlZFxuICAgICAgX3RhcmdldENvbnRhaW5lciA9IG51bGw7XG5cbiAgICAgIC8vIHJlbW92ZSBjbGFzc2VzIGlmIHVzZWRcbiAgICAgIGlmIChvLmRyYWdPdmVyQ2xhc3NlcyAmJiBfbGFzdE92ZXJFbGVtKSB7XG4gICAgICAgIHJtQ2xhc3MoX2xhc3RPdmVyRWxlbSwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICBfbGFzdE92ZXJFbGVtID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcm9wKGl0ZW0sIHRhcmdldCkge1xuICAgICAgaWYgKG8uc2NvcGUgJiYgaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCkpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSwgX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9IGVsc2UgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJvcCcsIGl0ZW0sIHRhcmdldCwgX3NvdXJjZSwgX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGl0ZW1Nb2RlbCA9IF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbDtcbiAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihpdGVtTW9kZWwpLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdChvLmNvcHkgPyAnY2FuY2VsJyA6ICdyZW1vdmUnLCBpdGVtLCBwYXJlbnQsIGl0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbChyZXZlcnQpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJldmVydHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHJldmVydCA6IG8ucmV2ZXJ0T25TcGlsbCxcbiAgICAgICAgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCchISEhISEhISEhISEhISEhISBJIHRoaW5rIHRoaXMgaXMgbmV2ZXIgcG9zc2libGUgYmVjYXVzZSBjb3B5IGNhbm5vdCBiZSBwbGFjZWQgaW50byBzb3VyY2UnKTtcbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfY29weSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSwgMSwgX2NvcHlNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQocGFyZW50KTtcbiAgICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiBvLmNvcHkgPT09IGZhbHNlICYmIHJldmVydHMpIHtcbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIF9zb3VyY2UuaW5zZXJ0QmVmb3JlKGl0ZW0sIF9pbml0aWFsU2libGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgICAgLy8gbW92ZSBiYWNrIHRvIGluaXRpYWwgcGxhY2VtZW50XG4gICAgICAgICAgbW92ZUluQ29udGFpbmVyc01vZGVsKF9pbml0aWFsSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlICYmIChpbml0aWFsIHx8IHJldmVydHMpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICByZW1vdmVNaXJyb3JJbWFnZSgpO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBybUNsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FuY2VsIHRpbWVyXG4gICAgICBpZiAoX3JlbmRlclRpbWVyKSB7XG4gICAgICAgICR0aW1lb3V0LmNhbmNlbChfcmVuZGVyVGltZXIpO1xuICAgICAgfVxuXG4gICAgICBkcmFrZS5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnZW5kJywgaXRlbSk7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ291dCcsIGl0ZW0sIF9sYXN0RHJvcFRhcmdldCwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIF9zb3VyY2UgPSBfaXRlbSA9IF9jb3B5ID0gX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gX3NvdXJjZU1vZGVsID0gbnVsbDtcbiAgICAgIF9pdGVtTW9kZWwgPSBfY29weU1vZGVsID0gX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBfcmVuZGVyVGltZXIgPSBfbGFzdERyb3BUYXJnZXQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGlzIGl0ZW0gY3VycmVudGx5IHBsYWNlZCBpbiBvcmlnaW5hbCBjb250YWluZXIgYW5kIG9yaWdpbmFsIHBvc2l0aW9uP1xuICAgIGZ1bmN0aW9uIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHMpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gcyB8fCAoX21pcnJvciA/IF9jdXJyZW50U2libGluZyA6IG5leHRFbChfaXRlbSB8fCBfY29weSkpO1xuICAgICAgcmV0dXJuIHRhcmdldCA9PT0gX3NvdXJjZSAmJiBzaWJsaW5nID09PSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgfVxuXG4gICAgLy8gZmluZCB2YWxpZCBkcm9wIGNvbnRhaW5lclxuICAgIGZ1bmN0aW9uIGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlbGVtZW50QmVoaW5kQ3Vyc29yO1xuICAgICAgd2hpbGUgKHRhcmdldCAmJiAhYWNjZXB0ZWQoKSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG5cbiAgICAgIGZ1bmN0aW9uIGFjY2VwdGVkKCkge1xuICAgICAgICB2YXIgYWNjZXB0cyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfaXNDb250YWluZXIodGFyZ2V0KSkgeyAvLyBpcyBkcm9wcGFibGU/XG4gICAgICAgICAgX3RhcmdldENvbnRhaW5lciA9IHRhcmdldDtcblxuICAgICAgICAgIHZhciBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZCh0YXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKHRhcmdldCwgaW1tZWRpYXRlLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgICAgIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCByZWZlcmVuY2UpO1xuICAgICAgICAgIGFjY2VwdHMgPSBpbml0aWFsID8gdHJ1ZSA6IG8uYWNjZXB0cyhfaXRlbSwgdGFyZ2V0LCBfc291cmNlLCByZWZlcmVuY2UsIF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCk7XG5cbiAgICAgICAgICBpZiAoYWNjZXB0cyAmJiBvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICAgIGlmICghby5uYW1lU3BhY2UpIHtcbiAgICAgICAgICAgICAgX3RhcmdldE1vZGVsID0gX2NvbnRhaW5lcnNNb2RlbFtkcmFrZS5jb250YWluZXJzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lU3BhY2UgaW4gZHJha2UuY29udGFpbmVycykge1xuICAgICAgICAgICAgICAgIGlmIChkcmFrZS5jb250YWluZXJzLmhhc093blByb3BlcnR5KG5hbWVTcGFjZSkgJiYgZHJha2UuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YodGFyZ2V0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW25hbWVTcGFjZV1bZHJha2UuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY2xhc3MgaWYgZWxlbWVudCBpcyBlbmFibGVkIGZvciBpdCBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IHRoZSBjbGFzc1xuICAgICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiZcbiAgICAgICAgICBoYXNDbGFzcyh0YXJnZXQsIG8uY2xhc3Nlcy5vdmVyQWN0aXZlKSAmJlxuICAgICAgICAgIHRhcmdldCAhPT0gX2xhc3RPdmVyRWxlbSkge1xuXG4gICAgICAgICAgaWYgKF9sYXN0T3ZlckVsZW0pIHsgLy8gY2xlYXIgZnJvbSBwcmV2aW91c1xuICAgICAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2xhc3RPdmVyQ2xhc3MgPSBhY2NlcHRzID8gby5jbGFzc2VzLm92ZXJBY2NlcHRzIDogby5jbGFzc2VzLm92ZXJEZWNsaW5lcztcbiAgICAgICAgICBhZGRDbGFzcyh0YXJnZXQsIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICBfbGFzdE92ZXJFbGVtID0gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY2VwdHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgICBpZiAoIV9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAvLyB1cGRhdGUgY29vcmRpbmF0ZXNcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gY291bnQgbWlycm9yIGNvb3JkaWF0ZXNcbiAgICAgIHZhciB4ID0gX2NsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IF9jbGllbnRZIC0gX29mZnNldFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgICAgb2Zmc2V0Qm94O1xuXG4gICAgICAvLyBmaWxsIGV4dHJhIHByb3BlcnRpZXMgaWYgYm91bmRpbmdCb3ggaXMgdXNlZFxuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgcGFnZVggPSBnZXRDb29yZCgncGFnZVgnLCBlKTtcbiAgICAgICAgcGFnZVkgPSBnZXRDb29yZCgncGFnZVknLCBlKTtcbiAgICAgICAgb2Zmc2V0Qm94ID0gZ2V0T2Zmc2V0KG8uYm91bmRpbmdCb3gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW8ubG9ja1kpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWCA+IG9mZnNldEJveC5sZWZ0ICsgX29mZnNldFggJiYgcGFnZVggPCBvZmZzZXRCb3gucmlnaHQgKyBfb2Zmc2V0WHIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoby5ib3VuZGluZ0JveCkgeyAvLyBjaGVjayBhZ2FpbiBpbiBjYXNlIHVzZXIgc2Nyb2xsZWQgdGhlIHZpZXdcbiAgICAgICAgICBpZiAocGFnZVggPCBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIChwYWdlWCAtIG9mZnNldEJveC5sZWZ0KSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX21pcnJvcldpZHRoIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LnJpZ2h0KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIW8ubG9ja1gpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWSA+IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSAmJiBwYWdlWSA8IG9mZnNldEJveC5ib3R0b20gKyBfb2Zmc2V0WWIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGNoZWNrIGFnYWluIGluIGNhc2UgdXNlciBzY3JvbGxlZCB0aGUgdmlld1xuICAgICAgICAgIGlmIChwYWdlWSA8IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSkge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIChwYWdlWSAtIG9mZnNldEJveC50b3ApICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9taXJyb3JIZWlnaHQgLSAocGFnZVkgLSBvZmZzZXRCb3guYm90dG9tKSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSksXG4gICAgICAgIGNoYW5nZWQgPSBkcm9wVGFyZ2V0ICE9PSBudWxsICYmIGRyb3BUYXJnZXQgIT09IF9sYXN0RHJvcFRhcmdldDtcblxuICAgICAgaWYgKGNoYW5nZWQgfHwgZHJvcFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG91dCgpO1xuICAgICAgICAgIF9sYXN0RHJvcFRhcmdldCA9IGRyb3BUYXJnZXQ7XG4gICAgICAgICAgb3ZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9sYXN0RHJvcFRhcmdldCA9IGRyb3BUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZG8gbm90IGNvcHkgaW4gc2FtZSBjb250YWluZXJcbiAgICAgIGlmIChkcm9wVGFyZ2V0ID09PSBfc291cmNlICYmIG8uY29weSkge1xuICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsICYmIGl0ZW0ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfSBlbHNlIGlmIChvLmNvbnRhaW5lcnNNb2RlbCAmJiBfbGFzdFRhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCkgIT09IC0xKSB7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbC5zcGxpY2UoX2xhc3RUYXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpLCAxKTtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVmZXJlbmNlLFxuICAgICAgICBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKTtcblxuICAgICAgLy8gcHJlcGFyZSBtb2RlbHMgb3BlcmF0aW9uc1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIHZhciByZWZlcmVuY2VJbmRleDtcbiAgICAgIH1cblxuICAgICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgaW1tZWRpYXRlLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuICAgICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBpZiAocmVmZXJlbmNlKSB7IC8vIHJlZmVyZW5jZSBpcyBudWxsIGlmIGRyYWcgaXMgb3ZlciBsYXN0IGVsZW1lbnRcbiAgICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gZG9tSW5kZXhPZihyZWZlcmVuY2UsIGRyb3BUYXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdHJ1ZSAmJiAhby5jb3B5KSB7XG4gICAgICAgIC8vIHRoZSBjYXNlIHRoYXQgbWlycm9yIGlzIG5vdCBvdmVyIHZhbGlkIHRhcmdldCBhbmQgcmV2ZXJ0aW5nIGlzIG9uIGFuZCBjb3B5IGlzIG9mZlxuICAgICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICAgIGRyb3BUYXJnZXQgPSBfc291cmNlO1xuXG4gICAgICAgIC8vIGdldHRpbmcgbW9kZWwgaW50aXRpYWwgcHJvcGVydGllcyBpbnRvIGN1cnJlbnRcbiAgICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfaW5pdGlhbEluZGV4O1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGUgY2FzZSB0aGF0IG1pcnJvciBpcyBub3Qgb3ZlciB2YWxpZCB0YXJnZXQgYW5kIHJlbW92aW5nIGlzIG9uIG9yIGNvcHkgaXMgb25cbiAgICAgICAgaWYgKChvLmNvcHkgfHwgby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSAmJiBpdGVtLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyByZW1vdmUgaXRlbSBvciBjb3B5IG9mIGl0ZW1cbiAgICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8XG4gICAgICAgIHJlZmVyZW5jZSAhPT0gaXRlbSAmJlxuICAgICAgICByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSAmJlxuICAgICAgICByZWZlcmVuY2UgIT09IF9jdXJyZW50U2libGluZykge1xuICAgICAgICAvLyBtb3ZpbmcgaXRlbS9jb3B5IHRvIG5ldyBjb250YWluZXIgZnJvbSBwcmV2aW91cyBvbmVcbiAgICAgICAgX2N1cnJlbnRTaWJsaW5nID0gcmVmZXJlbmNlO1xuXG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBkcm9wVGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCByZWZlcmVuY2UpOyAvLyBpZiByZWZlcmVuY2UgaXMgbnVsbCBpdGVtIGlzIGluc2VydGVkIGF0IHRoZSBlbmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwocmVmZXJlbmNlSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdzaGFkb3cnLCBpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtb3ZlZCh0eXBlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQodHlwZSwgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb3ZlcigpIHtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICBtb3ZlZCgnb3ZlcicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG91dCgpIHtcbiAgICAgICAgaWYgKF9sYXN0RHJvcFRhcmdldCkge1xuICAgICAgICAgIG1vdmVkKCdvdXQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVJbkNvbnRhaW5lcnNNb2RlbChyZWZlcmVuY2VJbmRleCkge1xuICAgICAgaWYgKF9sYXN0VGFyZ2V0TW9kZWwgPT09IF90YXJnZXRNb2RlbCkge1xuICAgICAgICBpZiAocmVmZXJlbmNlSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF90YXJnZXRNb2RlbC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gcmVmZXJlbmNlSW5kZXggPiBfY3VycmVudEluZGV4ID8gcmVmZXJlbmNlSW5kZXggLSAxIDogcmVmZXJlbmNlSW5kZXg7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UoaW5kZXgsIDAsIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpWzBdKTtcbiAgICAgICAgX2N1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlZmVyZW5jZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfdGFyZ2V0TW9kZWwubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW8uY29weSB8fCBfbGFzdFRhcmdldE1vZGVsICE9PSBfc291cmNlTW9kZWwpIHsgLy8gZG9udCByZW1vdmUgb3JpZ2luYWwgZnJvbSBzb3VyY2Ugd2hpbGUgY29weWluZ1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghby5jb3B5IHx8IF90YXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpID09PSAtMSkgeyAvLyBkb250IHBsYWNlIGNvcHkgdHdpY2UgaW4gb25lIGRyYWdcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAwLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwpO1xuICAgICAgICAgIF9jdXJyZW50SW5kZXggPSByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbENvbnRhaW5lcihlKSB7XG4gICAgICBpZiAoX3RhcmdldENvbnRhaW5lcikge1xuICAgICAgICBfdGFyZ2V0Q29udGFpbmVyLnNjcm9sbFRvcCArPSBlLmRlbHRhWTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZWN0ID0gX2l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBfbWlycm9yID0gX2l0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgX21pcnJvcldpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgIF9taXJyb3JIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgIF9taXJyb3Iuc3R5bGUud2lkdGggPSBnZXRSZWN0V2lkdGgocmVjdCkgKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS5oZWlnaHQgPSBnZXRSZWN0SGVpZ2h0KHJlY3QpICsgJ3B4JztcbiAgICAgIHJtQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgYWRkQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLm1pcnJvcik7XG4gICAgICBvLm1pcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChfbWlycm9yKTtcbiAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgJ29uJywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgICAgYWRkQ2xhc3MoYm9keSwgby5jbGFzc2VzLnVuc2VsZWN0YWJsZSk7XG4gICAgICByZWdFdmVudChfbWlycm9yLCAnb24nLCAnd2hlZWwnLCBzY3JvbGxDb250YWluZXIpO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2xvbmVkJywgX21pcnJvciwgX2l0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcm1DbGFzcyhib2R5LCBvLmNsYXNzZXMudW5zZWxlY3RhYmxlKTtcbiAgICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCAnb2ZmJywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgICAgICByZWdFdmVudChfbWlycm9yLCAnb2ZmJywgJ3doZWVsJywgc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgICAgX21pcnJvci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKF9taXJyb3IpO1xuICAgICAgICBfbWlycm9yID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCB0YXJnZXQpIHtcbiAgICAgIHZhciBpbW1lZGlhdGUgPSB0YXJnZXQ7XG4gICAgICB3aGlsZSAoaW1tZWRpYXRlICE9PSBkcm9wVGFyZ2V0ICYmIGltbWVkaWF0ZS5wYXJlbnRFbGVtZW50ICE9PSBkcm9wVGFyZ2V0KSB7XG4gICAgICAgIGltbWVkaWF0ZSA9IGltbWVkaWF0ZS5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgaWYgKGltbWVkaWF0ZSA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGltbWVkaWF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgdGFyZ2V0LCB4LCB5KSB7XG4gICAgICB2YXIgaG9yaXpvbnRhbCA9IG8uZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB2YXIgcmVmZXJlbmNlID0gdGFyZ2V0ICE9PSBkcm9wVGFyZ2V0ID8gaW5zaWRlKCkgOiBvdXRzaWRlKCk7XG4gICAgICByZXR1cm4gcmVmZXJlbmNlO1xuXG4gICAgICBmdW5jdGlvbiBvdXRzaWRlKCkgeyAvLyBzbG93ZXIsIGJ1dCBhYmxlIHRvIGZpZ3VyZSBvdXQgYW55IHBvc2l0aW9uXG4gICAgICAgIHZhciBsZW4gPSBkcm9wVGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBlbDtcbiAgICAgICAgdmFyIHJlY3Q7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGVsID0gZHJvcFRhcmdldC5jaGlsZHJlbltpXTtcbiAgICAgICAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgcmVjdC5sZWZ0ID4geCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWhvcml6b250YWwgJiYgcmVjdC50b3AgPiB5KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbnNpZGUoKSB7IC8vIGZhc3RlciwgYnV0IG9ubHkgYXZhaWxhYmxlIGlmIGRyb3BwZWQgaW5zaWRlIGEgY2hpbGQgZWxlbWVudFxuICAgICAgICB2YXIgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh4ID4gcmVjdC5sZWZ0ICsgZ2V0UmVjdFdpZHRoKHJlY3QpIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoeSA+IHJlY3QudG9wICsgZ2V0UmVjdEhlaWdodChyZWN0KSAvIDIpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZXNvbHZlKGFmdGVyKSB7XG4gICAgICAgIHJldHVybiBhZnRlciA/IG5leHRFbCh0YXJnZXQpIDogdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbChzY3JvbGxQcm9wLCBvZmZzZXRQcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvd1tvZmZzZXRQcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvd1tvZmZzZXRQcm9wXTtcbiAgICAgIH1cbiAgICAgIGlmIChkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudEVsZW1lbnRbc2Nyb2xsUHJvcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9keVtzY3JvbGxQcm9wXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHNjcm9sbFRvcCA9IGdldFNjcm9sbCgnc2Nyb2xsVG9wJywgJ3BhZ2VZT2Zmc2V0JyksXG4gICAgICAgIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoJ3Njcm9sbExlZnQnLCAncGFnZVhPZmZzZXQnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnQsXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0ICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSArIHNjcm9sbFRvcFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50QmVoaW5kUG9pbnQocG9pbnQsIHgsIHkpIHtcbiAgICAgIGlmICgheCAmJiAheSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBwID0gcG9pbnQgfHwge30sXG4gICAgICAgIHN0YXRlID0gcC5jbGFzc05hbWUsXG4gICAgICAgIGVsO1xuICAgICAgcC5jbGFzc05hbWUgKz0gJyAnICsgby5jbGFzc2VzLmhpZGU7XG4gICAgICBlbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgICBwLmNsYXNzTmFtZSA9IHN0YXRlO1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByZWdFdmVudChlbCwgb3AsIHR5cGUsIGZuKSB7XG4gICAgdmFyIHRvdWNoID0ge1xuICAgICAgICBtb3VzZXVwOiAndG91Y2hlbmQnLFxuICAgICAgICBtb3VzZWRvd246ICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgbW91c2Vtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgICAgd2hlZWw6ICd3aGVlbCdcbiAgICAgIH0sXG4gICAgICAkZWwgPSBhbmd1bGFyLmVsZW1lbnQoZWwpO1xuXG4gICAgJGVsW29wXSh0b3VjaFt0eXBlXSwgZm4pXG4gICAgJGVsW29wXSh0eXBlLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXZlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0RWwoZWwpIHtcbiAgICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG5cbiAgICBmdW5jdGlvbiBtYW51YWxseSgpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgICBkbyB7XG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vQ2Fubm90IHVzZSBhbmd1bGFyLmlzRWxlbWVudCBiZWNhdXNlIHdlIG5lZWQgdG8gY2hlY2sgcGxhaW4gZG9tIGVsZW1lbnQsIG5vIGpRbGl0ZSB3cmFwcGVkXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcbiAgICAgIG8gJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9va3VwQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNhY2hlZCA9IF9jYWNoZVtjbGFzc05hbWVdO1xuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIGNhY2hlZC5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBfY2FjaGVbY2xhc3NOYW1lXSA9IGNhY2hlZCA9IG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMpJyArIGNsYXNzTmFtZSArICcoPzpcXFxcc3wkKScsICdnJyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBlbC5jbGFzc05hbWU7XG4gICAgaWYgKCFjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoIWxvb2t1cENsYXNzKGNsYXNzTmFtZSkudGVzdChjdXJyZW50KSkge1xuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBybUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShsb29rdXBDbGFzcyhjbGFzc05hbWUpLCAnICcpLnRyaW0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudEhvc3QoZSkge1xuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgICB2YXIgbWlzc01hcCA9IHtcbiAgICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgICB9O1xuICAgIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RbY29vcmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdFdpZHRoKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0SGVpZ2h0KHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgfHwgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9tSW5kZXhPZihjaGlsZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYW5ndWxhci5lbGVtZW50KHBhcmVudCkuY2hpbGRyZW4oKSwgY2hpbGQpO1xuICB9XG5cbn1dKTtcbiJdfQ==
