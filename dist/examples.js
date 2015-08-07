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
$templateCache.put("exampleScrollingDrag/exampleScrollingDrag.html","<div class=\'parent\'>\n    <h2>Scrolling drag</h2>\n    <label for=\'hy\'> Containre can be scrolled by hovering dragged item over most top visible item or most bottom, scroll direction respectively or by using mouse wheel during drag. <b>NOT FINISHED CHECK ISSUE #14!</b>\n    </label>\n    <div ng-controller=\"ScrollingDrag\">\n        <div class=\"containerVertical heightLimit\">\n            <div>Item 1</div>\n            <div>Item 2</div>\n            <div>Item 3.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n            <div>Item 6.</div>\n            <div>Item 7.</div>\n            <div>Item 9.</div>\n            <div>Item 10.</div>\n            <div>Item 11.</div>\n            <div>Item 12.</div>\n            <div>Item 13.</div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("partials/partial-contribute.html","<div class=\'container\'>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      Contributing notes will be moved here, since then, please use <a href=\"https://github.com/luckylooke/dragular/blob/master/CONTRIBUTING.md\">contribution notes on github</a>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("partials/partial-docs.html","<div class=\'container\'>\n  <div id=\"rowOffcanvas\" class=\"row row-offcanvas row-offcanvas-left\">\n    <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\n      <div class=\"list-group\">\n        <a ui-sref=\"docs.detail({link:\'docsInstall\'})\" ui-sref-active=\"active\" class=\"list-group-item\">Installation</a>\n        <a ng-repeat=\"example in examplesList\" ui-sref=\"docs.detail({link:example.link})\" ui-sref-active=\"active\" class=\"list-group-item\">{{example.title}}</a>\n      </div>\n    </div>\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-xs-12 col-sm-9\">\n      <p class=\"pull-left visible-xs\">\n        <button type=\"button\" ng-click=\"toggleSidebar()\" class=\"btn btn-primary btn-xs\">Toggle nav</button>\n      </p>\n      <!-- docs.detail -->\n      <div ui-view onload=\"highlightCode()\"></div>\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");
$templateCache.put("partials/partial-home.html","<div class=\'container\'>\n  <div class=\"row\">\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-lg-12\">\n      <div class=\"jumbotron\">\n        <h1>DRAGULAR</h1>\n        <p>Angular drag&drop based on <a href=\"http://github.com/bevacqua/dragula\">dragula</a>.</p>\n        <p><a class=\"btn btn-primary btn-lg\" ui-sref=\"docs\" role=\"button\">Live examples in docs</a></p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p>Browser support includes every sane browser and **IE7+**. <sub>_(Granted you polyfill the functional `Array` methods in ES5)_</sub></p>\n          <h2>Inspiration</h2>\n          <p>Have you ever wanted a drag and drop library that just works? That actually understands where to place the elements when they are dropped? That doesn’t need you to do a zillion things to get it to work? Well, so did <a href=\"https://github.com/bevacqua\">Nicolas Bevacqua</a> and I have forked it into angular module and also put some features!</p>\n          <p><b>Actual version 2.0.0 is based on dragula 2.1.2 and tested with angular 1.4.3.</b></p>\n          <h2>Differences of dragular (against dragula)</h2>\n          <ul>\n            <li>replaced crossvent with angulars event binding</li>\n            <li>replaced contra.emitter with $scope.$emit if scope provided in options (options.scope)</li>\n            <li>encapsulated the code into angular factory (dragularService)</li>\n            <li>created directive dragular where options can be passed providing scope property name</li>\n            <li>both service and directive provided as angular module (dragularModule)</li>\n            <li>automatic direction if not provided in options, instead of default vertical</li>\n            <li>accepting arraylike objects as containers array</li>\n            <li>accepting custom classes via option.classes</li>\n            <li>namespaced containers groups available via option.nameSpace</li>\n            <li>boundingBox (dragging element can me moved only in specific area)</li>\n            <li>lockX/Y (dragging element can me moved only in specific direction)</li>\n            <li>more examples</li>\n            <li>accept JSON options in dragular directive (#2)</li>\n            <li>add/remove with ng-repeat</li>\n            <li>added syntax highlighter to example codes</li>\n          </ul>\n          <h2>Todo</h2>\n          <ul>\n            <li>example for delay</li>\n            <li>o.isContainer in _isContainer (fn o.isContainerGetModel(containerElm))</li>\n            <li>solve mixing with and without model containers</li>\n            <li>remove npm workflow</li>\n            <li>support selectors in service (#2)?</li>\n          </ul>\n          <h2>Features</h2>\n          <ul>\n            <li>provided as service and also as directive</li>\n            <li>Super easy to set up</li>\n            <li>No bloated dependencies</li>\n            <li><strong>Figures out sort order</strong> on its own</li>\n            <li>A shadow where the item would be dropped offers <strong>visual feedback</strong></li>\n            <li>Touch events!</li>\n          </ul>\n          <h2>For installation, usage and examples go to <a ui-sref=\"docs\">docs</a></h2>\n        </div>\n      </div>\n      <!--/row-->\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");}]);

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
        _targetContainer.scrollTop += e.deltaY;
        e.stopPropagation();
        e.preventDefault();
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
        mousemove: 'touchmove',
        wheel: 'wheel'
      },
      $el = angular.element(el);

    $el[op](touch[type], fn);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0LmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZXNBcHAuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlc1JvdXRlci5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL3RlbXBsYXRlcy5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhckRpcmVjdGl2ZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhck1vZHVsZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLFNBQVMsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDaEcsZ0JBQWdCLFNBQVM7TUFDdkI7OztBQ1hOOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsU0FBUyxDQUFDLFlBQVksbUJBQW1CLFNBQVMsU0FBUyxVQUFVLGlCQUFpQjtJQUNoRyxnQkFBZ0IsU0FBUzs7O0FBRzdCO0dBQ0csV0FBVyxjQUFjLENBQUMsVUFBVSxZQUFZLG1CQUFtQixTQUFTLFNBQVMsUUFBUSxVQUFVLGlCQUFpQjtJQUN2SCxPQUFPLFNBQVMsQ0FBQztNQUNmLFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7O0lBRVgsT0FBTyxTQUFTLENBQUM7TUFDZixTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLElBQUksYUFBYSxTQUFTLFdBQVcsR0FBRyxHQUFHO0lBQzNDLGdCQUFnQixDQUFDLFdB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cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCYXNpYycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0Jhc2ljJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICB9XSk7XG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCYXNpY01vZGVsJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XG4gICAgICBjb250ZW50OiAnTW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgICRzY29wZS5pdGVtczIgPSBbe1xuICAgICAgY29udGVudDogJ0l0ZW0gNSdcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA2J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDcnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gOCdcbiAgICB9XTtcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKTtcbiAgICBkcmFndWxhclNlcnZpY2UoW2NvbnRhaW5lcnNbMF0sY29udGFpbmVyc1sxXV0se1xuICAgICAgY29udGFpbmVyc01vZGVsOiBbJHNjb3BlLml0ZW1zMSwgJHNjb3BlLml0ZW1zMl1cbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQm91bmRpbmdCb3gnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSAkZWxlbWVudFswXTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgYm91bmRpbmdCb3g6IGJvdW5kaW5nQm94XG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0JvdW5kaW5nQm94TG9ja1gnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKClbMF07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKGJvdW5kaW5nQm94LCB7XG4gICAgICBib3VuZGluZ0JveDogYm91bmRpbmdCb3gsXG4gICAgICBsb2NrWDogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCb3VuZGluZ0JveExvY2tZJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5jaGlsZHJlbigpWzBdO1xuICAgIGRyYWd1bGFyU2VydmljZShib3VuZGluZ0JveCwge1xuICAgICAgYm91bmRpbmdCb3g6IGJvdW5kaW5nQm94LFxuICAgICAgbG9ja1k6IHRydWVcbiAgICB9KTtcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0NvcHknLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgY29weTogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdDb3B5TW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XG4gICAgICBjb250ZW50OiAnSXRlbSA1J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDYnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA4J1xuICAgIH1dO1xuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpO1xuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXSxcbiAgICAgIGNvcHk6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQ3VzdG9tQ2xhc3NlcycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1pcnJvcjogJ2N1c3RvbS1ncmVlbi1taXJyb3InXG4gICAgICB9XG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignRGlyZWN0aXZlJywgWyckc2NvcGUnLCBmdW5jdGlvbiBEaXJlY3RpdmVDdHJsKCRzY29wZSkge1xuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1pcnJvcjogJ2N1c3RvbS1ncmVlbi1taXJyb3InXG4gICAgICB9LFxuICAgICAgbmFtZVNwYWNlOiAnc2FtZScgLy8ganVzdCBjb25uZWN0aW5nIGxlZnQgYW5kIHJpZ2h0IGNvbnRhaW5lclxuICAgIH07XG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0RpcmVjdGl2ZU1vZGVsJywgWyckc2NvcGUnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUpIHtcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XG4gICAgICBjb250ZW50OiAnSXRlbSA1J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDYnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA4J1xuICAgIH1dO1xuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XG4gICAgICBjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtczEsXG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIG1pcnJvcjogJ2N1c3RvbS1ncmVlbi1taXJyb3InXG4gICAgICB9LFxuICAgICAgbmFtZVNwYWNlOiAnY29tbW9uJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXG4gICAgfTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuIC5jb250cm9sbGVyKCdEcmFnT3ZlckNsYXNzZXMnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0sICRlbGVtZW50LmNoaWxkcmVuKClbMl1dLCB7XG4gICAgICBuYW1lU3BhY2U6ICdhcHBsZXMnLFxuICAgICAgZHJhZ092ZXJDbGFzc2VzOiB0cnVlXG4gICAgfSk7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzFdLCAkZWxlbWVudC5jaGlsZHJlbigpWzNdXSwge1xuICAgICAgbmFtZVNwYWNlOiAnb3JhbmdlcycsXG4gICAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignRXZlbnRzJywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlLCAkdGltZW91dCkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBzY29wZTogJHNjb3BlXG4gICAgfSk7XG4gICAgJHNjb3BlLiRvbignZHJhZycsIGZ1bmN0aW9uKGUsIGVsKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoJyBleC1tb3ZlZCcsICcnKTtcbiAgICB9KTtcbiAgICAkc2NvcGUuJG9uKCdkcm9wJywgZnVuY3Rpb24oZSwgZWwpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgZXgtbW92ZWQnO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG5cbiAgICAvLyAkc2NvcGUuJG9uKCdjbG9uZWQnLCBteUZuKCdjbG9uZWQnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignZHJhZycsIG15Rm4oJ2RyYWcnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignY2FuY2VsJywgbXlGbignY2FuY2VsJykpO1xuICAgIC8vICRzY29wZS4kb24oJ2Ryb3AnLCBteUZuKCdkcm9wJykpO1xuICAgIC8vICRzY29wZS4kb24oJ3JlbW92ZScsIG15Rm4oJ3JlbW92ZScpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdkcmFnZW5kJywgbXlGbignZHJhZ2VuZCcpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdzaGFkb3cnLCBteUZuKCdzaGFkb3cnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignc2hhZG93UmVtb3ZlZCcsIG15Rm4oJ3NoYWRvdycpKTtcblxuICAgIC8vIGZ1bmN0aW9uIG15Rm4oZXZlbnROYW1lKSB7XG4gICAgLy8gICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSwgYXJndW1lbnRzKTtcbiAgICAvLyAgIH07XG4gICAgLy8gfVxuXG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0hhbmRsZScsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NOYW1lID09PSAnaGFuZGxlJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmFtZVNwYWNlcycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcbiAgICAgIG5hbWVTcGFjZTogJ2FwcGxlcydcbiAgICB9KTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVsxXSwge1xuICAgICAgbmFtZVNwYWNlOiAnb3JhbmdlcydcbiAgICB9KTtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVszXSwgeyAvLyBtaXhlZFxuICAgICAgbmFtZVNwYWNlOiBbJ29yYW5nZXMnLCAnYXBwbGVzJ11cbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmVzdGVkTmdSZXBlYXQnLCBbJyR0aW1lb3V0JywgJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkdGltZW91dCwgJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIHRpbWVvdW50IGR1ZSB0byBuZ1JlcGVhdCB0byBiZSByZWFkeVxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucygncm93LWhhbmRsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gICAgJHNjb3BlLml0ZW1zID0gW3tcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGEzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhNCdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIxJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGI0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzQnXG4gICAgICB9XVxuICAgIH1dO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbCcsIFsnJHRpbWVvdXQnLCAnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCR0aW1lb3V0LCAkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5lc3RlZCBuZ1JlcGVhdCB0byBiZSByZWFkeVxuICAgICAgdmFyIGNvbnRhaW5lciA9ICRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSxcbiAgICAgICAgcGFyZW50Q29udGFpbmVycyA9IGNvbnRhaW5lci5jaGlsZHJlbigpLFxuICAgICAgICBuZXN0ZWRDb250YWluZXJzID0gW107XG5cbiAgICAgIGRyYWd1bGFyU2VydmljZShjb250YWluZXIsIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zXG4gICAgICB9KTtcblxuICAgICAgLy8gY29sbGVjdCBuZXN0ZWQgY29udGlhbmVyc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRDb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMucHVzaChwYXJlbnRDb250YWluZXJzLmVxKGkpLmNoaWxkcmVuKClbMV0pO1xuICAgICAgfVxuXG4gICAgICBkcmFndWxhclNlcnZpY2UobmVzdGVkQ29udGFpbmVycywge1xuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuICFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogKGZ1bmN0aW9uIGdldE5lc3RlZENvbnRhaW5lcnNNb2RlbCgpe1xuICAgICAgICAgIHZhciBwYXJlbnQgPSAkc2NvcGUuaXRlbXMsXG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGFpbmVyc01vZGVsLnB1c2gocGFyZW50W2ldLml0ZW1zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnNNb2RlbDtcbiAgICAgICAgfSkoKVxuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gICAgJHNjb3BlLml0ZW1zID0gW3tcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGEzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhNCdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIxJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGI0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzQnXG4gICAgICB9XVxuICAgIH1dO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZ1JlcGVhdCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgY29udGVudDogJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDInXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSgpIHtcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCwge1xuICAgICAgICBjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArICctY29weSdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignTmdSZXBlYXRXaXRoTW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgY29udGVudDogJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDInXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA0J1xuICAgIH1dO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksIHtjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc30pO1xuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSgpIHtcbiAgICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCwge1xuICAgICAgICBjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArICctY29weSdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ1JlbW92ZU9uU3BpbGwnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgcmVtb3ZlT25TcGlsbDogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdSZXZlcnRPblNwaWxsJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIHJldmVydE9uU3BpbGw6IHRydWVcbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignU2Nyb2xsaW5nRHJhZycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcbiAgfV0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIsIGhsanMgKi9cbid1c2Ugc3RyaWN0JztcblxuLy8gdmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG5cblxucmVxdWlyZSgnLi4vLi4vLi4vc3JjL2RyYWd1bGFyTW9kdWxlJyk7XG5yZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xuXG4vKipcbiAqICBNb2R1bGUgRXhhbXBsZSBBcHBcbiAqXG4gKiAgREVNTyBhcHAgZm9yIGRyYWd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnZXhhbXBsZXNBcHAnLCBbJ2RyYWd1bGFyTW9kdWxlJywgJ3RlbXBsYXRlcycsICd1aS5yb3V0ZXInXSkuY29udHJvbGxlcignRXhBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUuZXhhbXBsZXNMaXN0ID0gW3tcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJhc2ljJyxcbiAgICAgICAgdGl0bGU6ICdCYXNpYydcbiAgICB9LHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQmFzaWNXaXRoTW9kZWwvZXhhbXBsZUJhc2ljV2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJhc2ljV2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICdCYXNpYyAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVEaXJlY3RpdmUvZXhhbXBsZURpcmVjdGl2ZS5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVEaXJlY3RpdmUnLFxuICAgICAgICB0aXRsZTogJ0RpcmVjdGl2ZSdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnRGlyZWN0aXZlIC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUV2ZW50cycsXG4gICAgICAgIHRpdGxlOiAnRXZlbnRzJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlUmVtb3ZlT25TcGlsbC9leGFtcGxlUmVtb3ZlT25TcGlsbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVSZW1vdmVPblNwaWxsJyxcbiAgICAgICAgdGl0bGU6ICdSZW1vdmUgb24gc3BpbGwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVSZXZlcnRPblNwaWxsL2V4YW1wbGVSZXZlcnRPblNwaWxsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZVJldmVydE9uU3BpbGwnLFxuICAgICAgICB0aXRsZTogJ1JldmVydCBvbiBzcGlsbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQ29weScsXG4gICAgICAgIHRpdGxlOiAnQ29weSdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUNvcHlXaXRoTW9kZWwvZXhhbXBsZUNvcHlXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQ29weVdpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnQ29weSAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVIYW5kbGUvZXhhbXBsZUhhbmRsZS5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVIYW5kbGUnLFxuICAgICAgICB0aXRsZTogJ0hhbmRsZSdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUN1c3RvbUNsYXNzZXMvZXhhbXBsZUN1c3RvbUNsYXNzZXMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQ3VzdG9tQ2xhc3NlcycsXG4gICAgICAgIHRpdGxlOiAnQ3VzdG9tIGNsYXNzZXMnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOYW1lU3BhY2VzL2V4YW1wbGVOYW1lU3BhY2VzLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5hbWVTcGFjZXMnLFxuICAgICAgICB0aXRsZTogJ05hbWVTcGFjZXMnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMnLFxuICAgICAgICB0aXRsZTogJ0RyYWdPdmVyIGNsYXNzZXMnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQm91bmRpbmdCb3gnLFxuICAgICAgICB0aXRsZTogJ0JvdW5kaW5nQm94J1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCb3VuZGluZ0JveExvY2tYJyxcbiAgICAgICAgdGl0bGU6ICdCb3VuZGluZ0JveCArIExvY2tYJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQm91bmRpbmdCb3hMb2NrWS9leGFtcGxlQm91bmRpbmdCb3hMb2NrWS5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCb3VuZGluZ0JveExvY2tZJyxcbiAgICAgICAgdGl0bGU6ICdCb3VuZGluZ0JveCArIExvY2tZJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmdSZXBlYXQvZXhhbXBsZU5nUmVwZWF0Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5nUmVwZWF0JyxcbiAgICAgICAgdGl0bGU6ICduZ1JlcGVhdCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnbmdSZXBlYXQgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0Lmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0JyxcbiAgICAgICAgdGl0bGU6ICdOZXN0ZWQgbmdSZXBlYWQnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ05lc3RlZCBuZ1JlcGVhZCAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZVNjcm9sbGluZ0RyYWcnLFxuICAgICAgICB0aXRsZTogJ1Njcm9sbGluZyBkcmFnJ1xuICAgIH1dO1xuXG4gICAgLy8gZGVmYXVsdCB0ZW1wbGF0ZSBsb2FkZWQgZmlyc3QgdGltZVxuICAgICRzY29wZS5leGFtcGxlVGVtcGxhdGUgPSAnZXhhbXBsZUJhc2ljL2V4YW1wbGVCYXNpYy5odG1sJztcblxuICAgICRzY29wZS5oaWdobGlnaHRDb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY29kZScpLmxlbmd0aCl7XG4gICAgICAgICAgICB2YXIgY29kZUJsb2NrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjb2RlJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gY29kZUJsb2Nrcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soY29kZUJsb2Nrc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJvd09mZmNhbnZhcyA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm93T2ZmY2FudmFzJykpO1xuICAgICRzY29wZS50b2dnbGVTaWRlYmFyID0gZnVuY3Rpb24gdG9nZ2xlU2lkZWJhciAoKSB7XG4gICAgICAgIHJvd09mZmNhbnZhcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfTtcblxufV0pO1xuXG4oe1wiZXhhbXBsZUJhc2ljXCI6KHtcImV4YW1wbGVCYXNpY1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuanNcIil9KSxcImV4YW1wbGVCYXNpY1dpdGhNb2RlbFwiOih7XCJleGFtcGxlQmFzaWNXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlQmFzaWNXaXRoTW9kZWwvZXhhbXBsZUJhc2ljV2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlQm91bmRpbmdCb3hcIjooe1wiZXhhbXBsZUJvdW5kaW5nQm94XCI6cmVxdWlyZShcIi4vZXhhbXBsZUJvdW5kaW5nQm94L2V4YW1wbGVCb3VuZGluZ0JveC5qc1wiKX0pLFwiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1hcIjooe1wiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1hcIjpyZXF1aXJlKFwiLi9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5qc1wiKX0pLFwiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1lcIjooe1wiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1lcIjpyZXF1aXJlKFwiLi9leGFtcGxlQm91bmRpbmdCb3hMb2NrWS9leGFtcGxlQm91bmRpbmdCb3hMb2NrWS5qc1wiKX0pLFwiZXhhbXBsZUNvcHlcIjooe1wiZXhhbXBsZUNvcHlcIjpyZXF1aXJlKFwiLi9leGFtcGxlQ29weS9leGFtcGxlQ29weS5qc1wiKX0pLFwiZXhhbXBsZUNvcHlXaXRoTW9kZWxcIjooe1wiZXhhbXBsZUNvcHlXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZUN1c3RvbUNsYXNzZXNcIjooe1wiZXhhbXBsZUN1c3RvbUNsYXNzZXNcIjpyZXF1aXJlKFwiLi9leGFtcGxlQ3VzdG9tQ2xhc3Nlcy9leGFtcGxlQ3VzdG9tQ2xhc3Nlcy5qc1wiKX0pLFwiZXhhbXBsZURpcmVjdGl2ZVwiOih7XCJleGFtcGxlRGlyZWN0aXZlXCI6cmVxdWlyZShcIi4vZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmpzXCIpfSksXCJleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsXCI6KHtcImV4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsL2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVEcmFnT3ZlckNsYXNzZXNcIjooe1wiZXhhbXBsZURyYWdPdmVyQ2xhc3Nlc1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy5qc1wiKX0pLFwiZXhhbXBsZUV2ZW50c1wiOih7XCJleGFtcGxlRXZlbnRzXCI6cmVxdWlyZShcIi4vZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmpzXCIpfSksXCJleGFtcGxlSGFuZGxlXCI6KHtcImV4YW1wbGVIYW5kbGVcIjpyZXF1aXJlKFwiLi9leGFtcGxlSGFuZGxlL2V4YW1wbGVIYW5kbGUuanNcIil9KSxcImV4YW1wbGVOYW1lU3BhY2VzXCI6KHtcImV4YW1wbGVOYW1lU3BhY2VzXCI6cmVxdWlyZShcIi4vZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuanNcIil9KSxcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFwiOih7XCJleGFtcGxlTmVzdGVkTmdSZXBlYXRcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0LmpzXCIpfSksXCJleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWxcIjooe1wiZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXCI6cmVxdWlyZShcIi4vZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZU5nUmVwZWF0XCI6KHtcImV4YW1wbGVOZ1JlcGVhdFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuanNcIil9KSxcImV4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbFwiOih7XCJleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlUmVtb3ZlT25TcGlsbFwiOih7XCJleGFtcGxlUmVtb3ZlT25TcGlsbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVSZW1vdmVPblNwaWxsL2V4YW1wbGVSZW1vdmVPblNwaWxsLmpzXCIpfSksXCJleGFtcGxlUmV2ZXJ0T25TcGlsbFwiOih7XCJleGFtcGxlUmV2ZXJ0T25TcGlsbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVSZXZlcnRPblNwaWxsL2V4YW1wbGVSZXZlcnRPblNwaWxsLmpzXCIpfSksXCJleGFtcGxlU2Nyb2xsaW5nRHJhZ1wiOih7XCJleGFtcGxlU2Nyb2xsaW5nRHJhZ1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmpzXCIpfSksXCJleGFtcGxlc1JvdXRlclwiOnJlcXVpcmUoXCIuL2V4YW1wbGVzUm91dGVyLmpzXCIpLFwidGVtcGxhdGVzXCI6cmVxdWlyZShcIi4vdGVtcGxhdGVzLmpzXCIpfSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaG9tZScpO1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgdXJsOiAnL2hvbWUnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3BhcnRpYWwtaG9tZS5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnZG9jcycsIHtcbiAgICAgICAgdXJsOiAnL2RvY3MnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3BhcnRpYWwtZG9jcy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzdGF0ZSkge1xuICAgICAgICAgIC8vIGdvIHRvIGluc3RhbGwgbm90ZXMgYnkgZGVmYXVsdFxuICAgICAgICAgICRzdGF0ZS5nbygnZG9jcy5kZXRhaWwnLCB7bGluazogJ2RvY3NJbnN0YWxsJ30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdkb2NzLmRldGFpbCcsIHtcbiAgICAgICAgdXJsOiAnLzpsaW5rJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgIHJldHVybiAkc3RhdGVQYXJhbXMubGluayArICcvJyArICRzdGF0ZVBhcmFtcy5saW5rICsgJy5odG1sJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29udHJpYnV0ZScsIHtcbiAgICAgICAgdXJsOiAnL2NvbnRyaWJ1dGUnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3BhcnRpYWwtY29udHJpYnV0ZS5odG1sJ1xuICAgICAgfSk7XG4gIH0pO1xuIiwiJ3VzZSBzdHJpY3QnOyBtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJkb2NzSW5zdGFsbC9kb2NzSW5zdGFsbC5odG1sXCIsXCI8aDI+SW5zdGFsbDwvaDI+XFxuPHA+ZG93bmxvYWQgZHJhZ3VsYXIuanMgYW5kIGRyYWd1bGFyLmNzcyBmcm9tIGRpc3QgZm9sZGVyPC9wPlxcbjxwPk9SIGNsb25lIGdpdDwvcD5cXG48cHJlPjxjb2RlPlxcbmdpdCBjbG9uZSBodHRwOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyLmdpdFxcbjwvY29kZT48L3ByZT5cXG48cD5PUiB1c2UgbnBtPC9wPlxcbjxwcmU+PGNvZGU+XFxuW3N1ZG9dIG5wbSBpbnN0YWxsIGRyYWd1bGFyXFxuPC9jb2RlPjwvcHJlPlxcbjxwPk9SIHVzZSBib3dlcjwvcD5cXG48cHJlPjxjb2RlPlxcbmJvd2VyIGluc3RhbGwgZHJhZ3VsYXJcXG48L2NvZGU+PC9wcmU+XFxuPHA+QU5EIGluY2x1ZGUgZmlsZXMgaW50byB5b3VyIHByb2plY3Q8L3A+XFxuPHByZT48Y29kZT5cXG4mbHQ7bGluayBocmVmPVxcJ3N0eWxlcy9kcmFndWxhci5jc3NcXCcgcmVsPVxcJ3N0eWxlc2hlZXRcXCcgdHlwZT1cXCd0ZXh0L2Nzc1xcJyAvJmd0O1xcbiZsdDtzY3JpcHQgc3JjPVxcJ3NjcmlwdHMvZHJhZ3VsYXIuanNcXCcmZ3Q7Jmx0Oy9zY3JpcHQmZ3Q7XFxuPC9jb2RlPjwvcHJlPlxcbjxwPkFORCBwdXQgZHJhZ3VsYXJNb2R1bGUgaW50byBkZXBlbmRlbmN5IGFycmF5PC9wPlxcbjxwcmU+PGNvZGU+XFxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKFxcJ215QXBwXFwnLCBbXFwnZHJhZ3VsYXJNb2R1bGVcXCcsIFxcJ290aGVyRGVwZW5kZW5jaWVzXFwnXSk7XFxuPC9jb2RlPjwvcHJlPlxcbjxwPkRPTkUgOik8L3A+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJhc2ljL2V4YW1wbGVCYXNpYy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5CYXNpYzwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk1vdmUgc3R1ZmYgYmV0d2VlbiB0aGVzZSB0d28gY29udGFpbmVycy4gTm90ZSBob3cgdGhlIHN0dWZmIGdldHMgaW5zZXJ0ZWQgbmVhciB0aGUgbW91c2UgcG9pbnRlcj8gR3JlYXQgc3R1ZmYuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCYXNpY1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0Jhc2ljXFwnLCBbXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0Jhc2ljJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gMy4mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbSA2LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW0gNC4mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbSA1LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQmFzaWNXaXRoTW9kZWwvZXhhbXBsZUJhc2ljV2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkJhc2ljIC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk1vdmUgc3R1ZmYgYmV0d2VlbiB0aGVzZSB0d28gY29udGFpbmVycy4gTm90ZSBob3cgdGhlIHN0dWZmIGdldHMgaW5zZXJ0ZWQgbmVhciB0aGUgbW91c2UgcG9pbnRlcj8gR3JlYXQgc3R1ZmYuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCYXNpY01vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMxXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMlxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8cHJlPkl0ZW1zMTpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMSB8IGpzb259fTwvcHJlPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8cHJlPkl0ZW1zMjpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMiB8IGpzb259fTwvcHJlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0Jhc2ljTW9kZWxcXCcsIFtcXCckc2NvcGVcXCcsIFxcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcXFxcXCdsbCBqdXN0IGNvbWUgYmFjay5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICAgIH1dO1xcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDVcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA3XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDhcXCdcXG4gICAgfV07XFxuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xcbiAgICBkcmFndWxhclNlcnZpY2UoW2NvbnRhaW5lcnNbMF0sY29udGFpbmVyc1sxXV0se1xcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogWyRzY29wZS5pdGVtczEsICRzY29wZS5pdGVtczJdXFxuICAgIH0pO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7QmFzaWMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwndGFibGVSb3dcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMxJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMiZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7dGFibGVSb3cmcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMTpcXG4gICAgICAgICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMSB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMjpcXG4gICAgICAgICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMiB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+Qm91bmRpbmdCb3g8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+WW91IGNhbiBwcm92aWRlIGVsZW1lbnQgaW4gb3B0aW9ucy5ib3VuZGluZ0JveCB0byBsaW1pdCBjcm9zc2luZyBlbGVtZW50IGJvcmRlcnMuPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQm91bmRpbmdCb3hcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGl0ZW1zIGNhbm5vdCBjcm9zcyBpdHMgZXhhbXBsZSBlbGVtZW50LCBqdXN0IHRyeSBpdCB5b3VyIHNlbHZlcy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSAyLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXRlbXMgY2Fubm90IGNyb3NzIGl0cyBleGFtcGxlIGVsZW1lbnQsIGp1c3QgdHJ5IGl0IHlvdXIgc2VsdmVzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpLCB7XFxuICAgIGJvdW5kaW5nQm94OiAkZWxlbWVudFxcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+Qm91bmRpbmdCb3ggYW5kIGxvY2tYPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk1vdmVtZW50IGNhbiBiZSBsb2NrZWQgdG8gWCBvciBZIGF4aXMgYW5kIGFsc28geW91IGNhbiBwcm92aWRlIGVsZW1lbnQgaW4gb3B0aW9ucy5ib3VuZGluZ0JveCB0byBsaW1pdCBjcm9zc2luZyBlbGVtZW50IGJvcmRlcnMuPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQm91bmRpbmdCb3hMb2NrWFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVySG9yaXpvbnRhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnYm91bmRpbmdCb3hcXCc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgyNVxcXCI+SXRlbXMgYXJlIGxvY2tlZCBpbiBYIGF4aXMgbW92ZW1lbnQgYW5kIGNhbm5vdCBjcm9zcyBpdHMgY2xvc2VzdCBwYXJlbnQgZGl2LmJvdW5kaW5nQm94LCBqdXN0IHRyeSBpdCB5b3VyIHNlbHZlcy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aDI1XFxcIj5pdGVtIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aDI1XFxcIj5pdGVtIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aDI1XFxcIj5pdGVtIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0uY2hpbGRyZW4oKSwge1xcbiAgICBib3VuZGluZ0JveDogJGVsZW1lbnQuY2hpbGRyZW4oKVswXSxcXG4gICAgbG9ja1g6IHRydWVcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kvZXhhbXBsZUJvdW5kaW5nQm94TG9ja1kuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+Qm91bmRpbmdCb3ggYW5kIExvY2tZPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPk1vdmVtZW50IGNhbiBiZSBsb2NrZWQgdG8gWCBvciBZIGF4aXMgYW5kIGFsc28geW91IGNhbiBwcm92aWRlIGVsZW1lbnQgaW4gb3B0aW9ucy5ib3VuZGluZ0JveCB0byBsaW1pdCBjcm9zc2luZyBlbGVtZW50IGJvcmRlcnMuPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQm91bmRpbmdCb3hMb2NrWVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2JvdW5kaW5nQm94XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbXMgYXJlIGxvY2tlZCBpbiBZIGF4aXMgbW92ZW1lbnQgYW5kIGNhbm5vdCBjcm9zcyBpdHMgY2xvc2VzdCBwYXJlbnQgZGl2LmJvdW5kaW5nQm94LCBqdXN0IHRyeSBpdCB5b3VyIHNlbHZlcy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gNTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSA2PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLmNoaWxkcmVuKCksIHtcXG4gICAgYm91bmRpbmdCb3g6ICRlbGVtZW50LmNoaWxkcmVuKClbMF0sXFxuICAgIGxvY2tZOiB0cnVlXFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVDb3B5L2V4YW1wbGVDb3B5Lmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkNvcHk8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Db3B5aW5nIHN0dWZmIGlzIGdyZWF0IHRvby48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkNvcHlcXFwiIG5nLWhpZGU9XFxcImdsb2JhbHMuc2hvd01vZGVsRXhhbXBsZXNcXFwiPlxcbiAgICA8ZGl2IGlkPVxcJ2xlZnQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgIDxkaXY+TW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLjwvZGl2PlxcbiAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgaWQ9XFwncmlnaHQyXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnQ29weVxcJywgW1xcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcXG4gICAgICBjb3B5OiB0cnVlXFxuICAgIH0pO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7Q29weSZxdW90OyBuZy1oaWRlPSZxdW90O2dsb2JhbHMuc2hvd01vZGVsRXhhbXBsZXMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgaWQ9XFwnbGVmdDJcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBpZD1cXCdyaWdodDJcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtZb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS4mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5Db3B5IC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkNvcHlpbmcgc3R1ZmYgaXMgZ3JlYXQgdG9vLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQ29weU1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMxXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMlxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zMTpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMSB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zMjpcXG4gICAgICAgICAgPGJyLz57e2l0ZW1zMiB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0NvcHlNb2RlbFxcJywgW1xcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgICRzY29wZS5pdGVtczEgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFxcXFxcJ2xsIGp1c3QgY29tZSBiYWNrLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gICAgfV07XFxuICAgICRzY29wZS5pdGVtczIgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA2XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDdcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gOFxcJ1xcbiAgICB9XTtcXG4gICAgdmFyIGNvbnRhaW5lcnMgPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XFxuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XFxuICAgICAgY29udGFpbmVyc01vZGVsOiBbJHNjb3BlLml0ZW1zMSwgJHNjb3BlLml0ZW1zMl0sXFxuICAgICAgY29weTogdHJ1ZVxcbiAgICB9KTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0NvcHlNb2RlbCZxdW90OyBuZy1zaG93PSZxdW90O2dsb2JhbHMuc2hvd01vZGVsRXhhbXBsZXMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwndGFibGVSb3dcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMxJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczImcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz0mcXVvdDt0YWJsZVJvdyZxdW90OyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbXMxOlxcbiAgICAgICAgICAmbHQ7YnIvJmd0O3t7aXRlbXMxIHwganNvbn19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250YWluZXImcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O0l0ZW1zMjpcXG4gICAgICAgICAgJmx0O2JyLyZndDt7e2l0ZW1zMiB8IGpzb259fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+Q3VzdG9tIGNsYXNzZXM8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPllvdSBjYW4gb3ZlcndyaXRlIGJ1aWxkaW4gY2xhc3NlcyBieSBwcm92aWRpbmcgY2xhc3NlcyBuYW1lcyBpbiBvYmplY3QgdmlhIG9wdGlvbnMuY2xhc3Nlcy48L2xhYmVsPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQ3VzdG9tQ2xhc3Nlc1xcXCI+XFxuICAgICAgICA8ZGl2IGlkPVxcJ2xlZnQ0XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBpZD1cXCdyaWdodDNcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gNS48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWZ0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlnaHQpXSwgeyBjbGFzc2VzOiB7XFxuICAgIG1pcnJvcjogXFwnY3VzdG9tLWdyZWVuLW1pcnJvclxcJ1xcbiAgfSB9KTtcXG5cXG4gIC8vIERlZmF1bHQgY2xhc3NlcyBhcmU6XFxuICBvcHRpb24uY2xhc3NlcyA9IHtcXG4gICAgbWlycm9yOiBcXCdndS1taXJyb3JcXCcsXFxuICAgIGhpZGU6IFxcJ2d1LWhpZGVcXCcsXFxuICAgIHVuc2VsZWN0YWJsZTogXFwnZ3UtdW5zZWxlY3RhYmxlXFwnLFxcbiAgICB0cmFuc2l0OiBcXCdndS10cmFuc2l0XFwnLFxcbiAgICBvdmVyQWN0aXZlOiBcXCdndS1vdmVyLWFjdGl2ZVxcJyxcXG4gICAgb3ZlckFjY2VwdHM6IFxcJ2d1LW92ZXItYWNjZXB0XFwnLFxcbiAgICBvdmVyRGVjbGluZXM6IFxcJ2d1LW92ZXItZGVjbGluZVxcJ1xcbiAgfTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRGlyZWN0aXZlL2V4YW1wbGVEaXJlY3RpdmUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+RGlyZWN0aXZlPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+U2FtZSBhcyBjdXN0b20gY2xhc3NlcyBleGFtcGxlLCBidXQgc2hvd2luZyB1c2Ugb2YgZGlyZWN0aXZlLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRGlyZWN0aXZlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXFwiZHJhZ3VsYXJPcHRpb25zXFxcIj5cXG4gICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcJ3tcXFwiY2xhc3Nlc1xcXCI6e1xcXCJtaXJyb3JcXFwiOlxcXCJjdXN0b20tZ3JlZW4tbWlycm9yXFxcIn0sXFxcIm5hbWVTcGFjZVxcXCI6XFxcInNhbWVcXFwifVxcJz5cXG4gICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0RpcmVjdGl2ZVxcJywgW1xcJyRzY29wZVxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUpIHtcXG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcXG4gICAgICBjbGFzc2VzOiB7XFxuICAgICAgICBtaXJyb3I6IFxcJ2N1c3RvbS1ncmVlbi1taXJyb3JcXCdcXG4gICAgICB9LFxcbiAgICAgIG5hbWVTcGFjZTogXFwnY29tbW9uXFwnIC8vIGp1c3QgY29ubmVjdGluZyBsZWZ0IGFuZCByaWdodCBjb250YWluZXJcXG4gICAgfTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0RpcmVjdGl2ZSZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj0mcXVvdDtkcmFndWxhck9wdGlvbnMmcXVvdDsmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSAzLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSA2LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXCd7JnF1b3Q7Y2xhc3NlcyZxdW90Ozp7JnF1b3Q7bWlycm9yJnF1b3Q7OiZxdW90O2N1c3RvbS1ncmVlbi1taXJyb3ImcXVvdDt9LCZxdW90O25hbWVTcGFjZSZxdW90OzomcXVvdDtzYW1lJnF1b3Q7fVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O1lvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSA0LiZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7SXRlbSA1LiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5EaXJlY3RpdmUgLSB3aXRoIG1vZGVsPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+U2FtZSBhcyBjdXN0b20gY2xhc3NlcyBleGFtcGxlLCBidXQgc2hvd2luZyB1c2Ugb2YgZGlyZWN0aXZlLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRGlyZWN0aXZlTW9kZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFxcImRyYWd1bGFyT3B0aW9uc1xcXCI+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczFcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcJ3tcXFwiY29udGFpbmVyc01vZGVsXFxcIjpcXFwiaXRlbXMyXFxcIixcXFwiY2xhc3Nlc1xcXCI6e1xcXCJtaXJyb3JcXFwiOlxcXCJjdXN0b20tZ3JlZW4tbWlycm9yXFxcIn0sXFxcIm5hbWVTcGFjZVxcXCI6XFxcImNvbW1vblxcXCJ9XFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMyXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXMxOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMxIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXMyOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMyIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICBcXG4gICAgICAgIDxjb2RlPlxcbi8vIEpTXFxuICBjb250cm9sbGVyKFxcJ0RpcmVjdGl2ZU1vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUpIHtcXG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XFxuICAgICAgY29udGVudDogXFwnTW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXFxcXFwnbGwganVzdCBjb21lIGJhY2suXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA1XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDZcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gN1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA4XFwnXFxuICAgIH1dO1xcbiAgICAkc2NvcGUuZHJhZ3VsYXJPcHRpb25zID0ge1xcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zMSxcXG4gICAgICBjbGFzc2VzOiB7XFxuICAgICAgICBtaXJyb3I6IFxcJ2N1c3RvbS1ncmVlbi1taXJyb3JcXCdcXG4gICAgICB9LFxcbiAgICAgIG5hbWVTcGFjZTogXFwnY29tbW9uXFwnIC8vIGp1c3QgY29ubmVjdGluZyBsZWZ0IGFuZCByaWdodCBjb250YWluZXJcXG4gICAgfTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtEaXJlY3RpdmVNb2RlbCZxdW90OyZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9JnF1b3Q7ZHJhZ3VsYXJPcHRpb25zJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMSZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFwneyZxdW90O2NvbnRhaW5lcnNNb2RlbCZxdW90OzomcXVvdDtpdGVtczImcXVvdDssJnF1b3Q7Y2xhc3NlcyZxdW90Ozp7JnF1b3Q7bWlycm9yJnF1b3Q7OiZxdW90O2N1c3RvbS1ncmVlbi1taXJyb3ImcXVvdDt9LCZxdW90O25hbWVTcGFjZSZxdW90OzomcXVvdDtjb21tb24mcXVvdDt9XFwnJmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMiZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlRHJhZ092ZXJDbGFzc2VzL2V4YW1wbGVEcmFnT3ZlckNsYXNzZXMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+RHJhZ092ZXJDbGFzc2VzPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+WW91IGNhbiBpbnRlcmFjdCB3aXRoIGRyYWdnaW5nIGVsZW1lbnQgYnkgc2V0dGluZyBkcmFnT3ZlckNsYXNzZXM6dHJ1ZSBpbiBvcHRpb25zIGFuZCBhZGRpbmcgcG9pbnRlciBjbGFzcyAoZGVmYXVsdCBpczogXFwnZ3Utb3Zlci1hY3RpdmVcXCcpIHRvIGVsZW1lbnQgeW91IHdhbnQgdG8gYmUgaW50ZXJhY3RpdmUgKGdldHRpbmcgY2xhc3NlcykuIFVzdWFsbHkgeW91IHdhbnQgdG8gY29udGFpbmVycyBzaG93IHdoZWF0aGVyIHRoZXkgYWNjZXB0cyBlbGVtZW50IG9yIG5vdCwgYnV0IHlvdSBjYW4gdXNlIGl0IGFueXdoZXJlLiBUcnkgdG8gZHJhZyBvdmVyIHRoZSBub3QtY29udGFpbmVyIHRvby48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkRyYWdPdmVyQ2xhc3Nlc1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2PmFwcGxlcyBhbmQgb3JhbmdlcyBjYW5ub3QgYmUgbWl4ZWQ8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDI8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDM8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDQ8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2Pm9yYW5nZSAxPC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgMjwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDM8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSA0PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5hcHBsZSA1PC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSA2PC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSA3PC9kaXY+XFxuICAgICAgPGRpdj5hcHBsZSA4PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCc+XFxuICAgICAgPGRpdj5vcmFuZ2UgNTwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDY8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSA3PC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgODwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibm90Q29udGFpbmVyIGd1LW92ZXItYWN0aXZlXFxcIj4gVGVzdCBhY3RpdmUgY2xhc3Mgb24gTk9UIGNvbnRhaW5lci48L2Rpdj5cXG5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0RyYWdPdmVyQ2xhc3NlcyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlcyBhbmQgb3JhbmdlcyBjYW5ub3QgYmUgbWl4ZWQmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlIDImbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtvcmFuZ2UgMSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDImbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZSA1Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDthcHBsZSA2Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDUmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O29yYW5nZSA2Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgLi4uXFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPSZxdW90O25vdENvbnRhaW5lciZxdW90OyZndDsgVGVzdCBhY3RpdmUgY2xhc3Mgb24gTk9UIGNvbnRhaW5lci4mbHQ7L2RpdiZndDtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuXFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIENTU1xcbi5jb250YWluZXIuZ3Utb3Zlci1hY3RpdmUuZ3Utb3Zlci1hY2NlcHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jb250YWluZXIuZ3Utb3Zlci1hY3RpdmUuZ3Utb3Zlci1kZWNsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm5vdENvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG59XFxuXFxuLm5vdENvbnRhaW5lci5ndS1vdmVyLWFjdGl2ZS5ndS1vdmVyLWRlY2xpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuXFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEpTXFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0sICRlbGVtZW50LmNoaWxkcmVuKClbMl1dLCB7XFxuICAgIG5hbWVTcGFjZTogXFwnYXBwbGVzXFwnLFxcbiAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcXG4gIH0pO1xcbiAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzFdLCAkZWxlbWVudC5jaGlsZHJlbigpWzNdXSwge1xcbiAgICBuYW1lU3BhY2U6IFxcJ29yYW5nZXNcXCcsXFxuICAgIGRyYWdPdmVyQ2xhc3NlczogdHJ1ZVxcbiAgfSk7XFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVFdmVudHMvZXhhbXBsZUV2ZW50cy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPkV2ZW50czwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+QWRkIHNvbWUgZmFudGFzdGljIGV2ZW50cyE8L2xhYmVsPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRXZlbnRzXFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFwnbGVmdDNcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGlkPVxcJ3JpZ2h0M1xcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7XFxuICAgIHNjb3BlOiAkc2NvcGVcXG4gIH0pO1xcbiAgJHNjb3BlLiRvbihcXCdkcmFnXFwnLCBmdW5jdGlvbihlLCBlbCkge1xcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShcXCcgZXgtbW92ZWRcXCcsIFxcJ1xcJyk7XFxuICB9KTtcXG4gICRzY29wZS4kb24oXFwnZHJvcFxcJywgZnVuY3Rpb24oZSwgZWwpIHtcXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XFxuICAgICAgZWwuY2xhc3NOYW1lICs9IFxcJyBleC1tb3ZlZFxcJztcXG4gICAgfSwgMCk7XFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlSGFuZGxlL2V4YW1wbGVIYW5kbGUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgIDxoMj5IYW5kbGU8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkRyYWcgaGFuZGxlcyBmbG9hdCB5b3VyIGNydWlzZT88L2xhYmVsPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiSGFuZGxlXFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFwnbGVmdDVcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzcz1cXCdoYW5kbGVcXCc+Kzwvc3Bhbj5Nb3ZlIG1lLCBidXQgeW91IGNhbiB1c2UgdGhlIHBsdXMgc2lnbiB0byBkcmFnIG1lIGFyb3VuZC48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBpZD1cXCdyaWdodDVcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVmdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZ2h0KV0sIHtcXG4gICAgbW92ZXM6IGZ1bmN0aW9uIChlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTmFtZSA9PT0gXFwnaGFuZGxlXFwnO1xcbiAgICB9XFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmFtZVNwYWNlcy9leGFtcGxlTmFtZVNwYWNlcy5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5OYW1lU3BhY2VzPC9oMj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPlRyeSB0byBtaXggYXBwbGVzIGFuZCBvcmFuZ2VzLiBZb3UgY2Fubm90IHBsYWNlIGFwcGxlcyBpbnRvIG9yYW5nZXMsIGJ1dCBub3RpY2UgdGhhdCB5b3UgY2FuIHBsYWNlIGl0IGludG8gbWl4ZWQuIE1peGVkIGNhbiBiZSBwbGFjZWQgaW50byBhcHBsZXMgYW5kIG9yYW5nZXMuIE5vdGljZSB0aGF0IG1peGVkIGJlY29tZXMgb3JhbmdlIG9yIGFwcGxlIGlmIHBsYWNlZCBpbnRvIHRoZWlyIGNvbnRhaW5lci4gPGI+U28gcmVtZW1iZXIgaWYgeW91IGFyZSB1c2luZyBuYW1lc3BhY2luZywgdGhlbiBpdGVtIGlzIG5hbWVzcGFjZWQgYWNjb3JkaW5nIHRvIGFjdHVhbCBjb250YWluZXIgaXQgaXMgcGxhY2VkIGluLiBJZiB5b3UgbmVlZCB0byBpdGVtIHByZXNlcnZlIHRoaWVyIHN0YXRlIHlvdSBuZWVkIHRvIHVzZSBjbGFzc2VzIGluIGNvbWJpbmF0aW9uIHdpdGggb3B0aW9ucy5hY2NlcHRzIGFuZCBvcHRpb25hbGx5IG9wdGlvbnMuaXNDb250YWluZXIuPC9iPiBJdCBkZXBlbmRzIG9uIHNldHVwLiAoU2VlIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyL2lzc3Vlcy85XFxcIj5pc3N1ZSAjOTwvYT4uKTwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIk5hbWVTcGFjZXNcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjVcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnRyeSB0byBtaXggb3JhbmdlcyBhbmQgYXBwbGVzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjVcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSAxPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm9yYW5nZSA0PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsIHdpZHRoMjVcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgNjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA3PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDg8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNVxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bWl4ZWQgMTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm1peGVkIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bWl4ZWQgNDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgIDxjb2RlPlxcbmRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcXG4gIG5hbWVTcGFjZTogXFwnYXBwbGVzXFwnXFxufSk7XFxuZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKClbMV0sIHtcXG4gIG5hbWVTcGFjZTogXFwnb3Jhbmdlc1xcJ1xcbn0pO1xcbmRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzNdLCB7IC8vIG1peGVkXFxuICBuYW1lU3BhY2U6IFtcXCdvcmFuZ2VzXFwnLCBcXCdhcHBsZXNcXCddXFxufSk7XFxuICAgICAgPC9jb2RlPlxcbiAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdC9leGFtcGxlTmVzdGVkTmdSZXBlYXQuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgIDxoMj5OZXN0ZWQgbmdSZXBlYXQ8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPiBZb3UgY2FuIG1vdmUgd2hvbGUgcm93cyBieSBncmFiaW5nIHJvdyB0aXRsZSwgYWxsIGl0ZW1zIGl0IHNlbHZlcy4gVHJ5IGl0IG91dCFcXG4gICAgICAgIDxoci8+XFxuICAgICAgICA8Yj5PbGQgSUUgZG9lc250IHN1cHBvcnQgRmxleGlibGUgQm94IExheW91dDwvYj4gc28gaXQgY2FuIGxvb2sgd2VpcmQuIEJ1dCBpbiBtb2Rlcm4gYnJvd3NlcnMgaXQgaXMgYXdzb21lISBEcmFndWxhciB3aWxsIGJlIHdvcmtpbmcgd2VsbCBhbHNvIGluIG9sZCBJRSBidXQgeW91IGhhdmUgdG8gdXNlIGRpZmZlcmVudCBjc3MgZm9yIGxheW91dC5cXG4gICAgICAgIDxoci8+XFxuICAgIDwvbGFiZWw+XFxuICAgIDxkaXYgbmctY29udHJvbGxlcj1cXFwiTmVzdGVkTmdSZXBlYXRcXFwiPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiIGNsYXNzPVxcJ2V4YW1wbGVSb3dcXCc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93LWhhbmRsZVxcXCI+Um93IHt7JGluZGV4fX08L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtLml0ZW1zXFxcIiBjbGFzcz1cXFwiZXhhbXBsZUNlbGxcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gSFRNTFxcblxcbiAgJmx0O2RpdiBuZy1jb250cm9sbGVyPSZxdW90O0V4YW1wbGUxNSZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyBjbGFzcz1cXCdleGFtcGxlUm93XFwnJmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7cm93LWhhbmRsZSZxdW90OyZndDtSb3cge3skaW5kZXh9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbS5pdGVtcyZxdW90OyBjbGFzcz0mcXVvdDtleGFtcGxlQ2VsbCZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIC8vIENTU1xcblxcbiAgLmV4YW1wbGVSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLmV4YW1wbGVDZWxsIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcblxcbiAgLmV4YW1wbGVSb3csXFxuICAuZXhhbXBsZUNlbGwge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGN1cnNvcjogLW1vei1ncmFiO1xcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIH1cXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gSlNcXG5cXG4gICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyB0aW1lb3VudCBkdWUgdG8gbmdSZXBlYXQgdG8gYmUgcmVhZHlcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LCB7XFxuICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcXG4gICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gIH0sIDApO1xcbiAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgaXRlbXM6IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhMVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBhNFxcJ1xcbiAgICB9XVxcbiAgfSwge1xcbiAgICBpdGVtczogW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGIxXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGIyXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGIzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGI0XFwnXFxuICAgIH1dXFxuICB9LCB7XFxuICAgIGl0ZW1zOiBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzFcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzJcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzRcXCdcXG4gICAgfV1cXG4gIH1dO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+TmVzdGVkIG5nUmVwZWF0IC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPiBZb3UgY2FuIG1vdmUgd2hvbGUgcm93cyBieSBncmFiaW5nIHJvdyB0aXRsZSwgYWxsIGl0ZW1zIGl0IHNlbHZlcy4gVHJ5IGl0IG91dCFcXG4gICAgPGhyLz5cXG4gICAgPGI+T2xkIElFIGRvZXNudCBzdXBwb3J0IEZsZXhpYmxlIEJveCBMYXlvdXQ8L2I+IHNvIGl0IGNhbiBsb29rIHdlaXJkLiBCdXQgaW4gbW9kZXJuIGJyb3dzZXJzIGl0IGlzIGF3c29tZSEgRHJhZ3VsYXIgd2lsbCBiZSB3b3JraW5nIHdlbGwgYWxzbyBpbiBvbGQgSUUgYnV0IHlvdSBoYXZlIHRvIHVzZSBkaWZmZXJlbnQgY3NzIGZvciBsYXlvdXQuXFxuICAgIDxoci8+XFxuICA8L2xhYmVsPlxcbiAgPGRpdiBuZy1jb250cm9sbGVyPVxcXCJOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIiBjbGFzcz1cXCdleGFtcGxlUm93XFwnPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3ctaGFuZGxlXFxcIj5Sb3cge3s6OiRpbmRleH19PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImV4YW1wbGVSb3cgZXhhbXBsZUNlbGwgY29udGFpbmVyTmVzdGVkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtLml0ZW1zXFxcIiBjbGFzcz1cXFwiZXhhbXBsZUNlbGxcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPHByZT5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW1zOlxcbiAgICAgICAgICAgICAgPGJyLz57e2l0ZW1zIHwganNvbn19PC9kaXY+XFxuICAgICAgICA8L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IG5nLWNvbnRyb2xsZXI9JnF1b3Q7TmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwmcXVvdDsmZ3Q7XFxuICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zJnF1b3Q7IGNsYXNzPVxcJ2V4YW1wbGVSb3dcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtyb3ctaGFuZGxlJnF1b3Q7Jmd0O1JvdyB7ezo6JGluZGV4fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2V4YW1wbGVSb3cgZXhhbXBsZUNlbGwgY29udGFpbmVyTmVzdGVkJnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtLml0ZW1zJnF1b3Q7IGNsYXNzPSZxdW90O2V4YW1wbGVDZWxsJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIENTU1xcblxcbiAgLmV4YW1wbGVSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLmV4YW1wbGVDZWxsIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcblxcbiAgLmV4YW1wbGVSb3csXFxuICAuZXhhbXBsZUNlbGwge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGN1cnNvcjogLW1vei1ncmFiO1xcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIH1cXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEpTXFxuY29udHJvbGxlcihcXCdOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFxcJywgW1xcJyR0aW1lb3V0XFwnLCBcXCckc2NvcGVcXCcsIFxcJyRlbGVtZW50XFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCR0aW1lb3V0LCAkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIHRpbWVvdW50IGR1ZSB0byBuZXN0ZWQgbmdSZXBlYXQgdG8gYmUgcmVhZHlcXG4gICAgICB2YXIgY29udGFpbmVyID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpLFxcbiAgICAgICAgcGFyZW50Q29udGFpbmVycyA9IGNvbnRhaW5lci5jaGlsZHJlbigpLFxcbiAgICAgICAgbmVzdGVkQ29udGFpbmVycyA9IFtdO1xcblxcbiAgICAgIGRyYWd1bGFyU2VydmljZShjb250YWluZXIsIHtcXG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXFwncm93LWhhbmRsZVxcJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXNcXG4gICAgICB9KTtcXG5cXG4gICAgICAvLyBjb2xsZWN0IG5lc3RlZCBjb250aWFuZXJzXFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRDb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBuZXN0ZWRDb250YWluZXJzLnB1c2gocGFyZW50Q29udGFpbmVycy5lcShpKS5jaGlsZHJlbigpWzFdKTtcXG4gICAgICB9O1xcblxcbiAgICAgIGRyYWd1bGFyU2VydmljZShuZXN0ZWRDb250YWluZXJzLCB7XFxuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgICAgIHJldHVybiAhaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcXCdyb3ctaGFuZGxlXFwnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250YWluZXJzTW9kZWw6IChmdW5jdGlvbiBnZXROZXN0ZWRDb250YWluZXJzTW9kZWwoKXtcXG4gICAgICAgICAgdmFyIHBhcmVudCA9ICRzY29wZS5pdGVtcyxcXG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwgPSBbXTtcXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnQubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwucHVzaChwYXJlbnRbaV0uaXRlbXMpO1xcbiAgICAgICAgICB9O1xcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyc01vZGVsO1xcbiAgICAgICAgfSkoKVxcbiAgICAgIH0pO1xcbiAgICB9LCAwKTtcXG4gICAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgICBpdGVtczogW3tcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTFcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGEyXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhM1xcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTRcXCdcXG4gICAgICB9XVxcbiAgICB9LCB7XFxuICAgICAgaXRlbXM6IFt7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGIxXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBiMlxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjNcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGI0XFwnXFxuICAgICAgfV1cXG4gICAgfSwge1xcbiAgICAgIGl0ZW1zOiBbe1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBjMVxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzJcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGMzXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBjNFxcJ1xcbiAgICAgIH1dXFxuICAgIH1dO1xcbiAgfV0pXFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuaHRtbFwiLFwiICAgICAgICA8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgICAgICAgICA8aDI+bmdSZXBlYXQ8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+RXhhbXBsZSBvZiB1c2luZyBuZy1yZXBlYXQgd2l0aCBkcmFndWxhciBhbmQgYWRkaW5nL3JlbW92aW5nIGl0ZW1zIGR5bmFtaWNhbHkuPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiTmdSZXBlYXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcImFkZEl0ZW0oKVxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz1cXFwicmVtb3ZlSXRlbSgpXFxcIj54PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gSFRNTDpcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMmcXVvdDsmZ3Q7XFxuICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICZsdDtidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz0mcXVvdDthZGRJdGVtKCkmcXVvdDsmZ3Q7KyZsdDsvYnV0dG9uJmd0O1xcbiAgICAgICZsdDtidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz0mcXVvdDtyZW1vdmVJdGVtKCkmcXVvdDsmZ3Q7eCZsdDsvYnV0dG9uJmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcblxcbiAgLy8gSlM6XFxuICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XFxuICAkc2NvcGUuaXRlbXMgPSBbe1xcbiAgICBjb250ZW50OiBcXCdUcnkgdG8gYWRkIG9yIHJlbW92ZSBzb21lIGVsZW1lbnRzIChjbGljayBvbiArLSBidXR0b25zKSwgeW91IHdpbGwgc2VlIHRoYXQgaXQgaXMgbm90IHByb2JsZW0gZm9yIGRyYWd1bGFyLlxcJ1xcbiAgfSx7XFxuICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gMlxcJ1xcbiAgfSx7XFxuICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgfSx7XFxuICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgfV07XFxuICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uIGFkZEl0ZW0gKCkge1xcbiAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pICsgMTtcXG4gICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCx7Y29udGVudDogdGhpcy5pdGVtLmNvbnRlbnQgKyBcXCctY29weVxcJ30pO1xcbiAgfVxcbiAgJHNjb3BlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtICgpIHtcXG4gICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcXG4gICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XFxuICB9XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPm5nUmVwZWF0IC0gd2l0aCBtb2RlbDwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkV4YW1wbGUgb2YgdXNpbmcgbmctcmVwZWF0IHdpdGggZHJhZ3VsYXIgYW5kIGFkZGluZy9yZW1vdmluZyBpdGVtcyBkeW5hbWljYWx5LjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiTmdSZXBlYXRXaXRoTW9kZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCI+XFxuICAgICAgICAgIHt7aXRlbS5jb250ZW50fX1cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPVxcXCJhZGRJdGVtKClcXFwiPis8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPVxcXCJyZW1vdmVJdGVtKClcXFwiPng8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2Pkl0ZW1zOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gSFRNTDpcXG4gICAmbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtOZ1JlcGVhdFdpdGhNb2RlbCZxdW90OyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyZndDtcXG4gICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7YWRkSXRlbSgpJnF1b3Q7Jmd0OysmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAgICAgJmx0O2J1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPSZxdW90O3JlbW92ZUl0ZW0oKSZxdW90OyZndDt4Jmx0Oy9idXR0b24mZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuICA8cHJlPlxcbiAgICA8Y29kZT5cXG4gIC8vIEpTOlxcbiAgY29udHJvbGxlcihcXCdOZ1JlcGVhdFdpdGhNb2RlbFxcJywgW1xcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgICRzY29wZS5pdGVtcyA9IFt7XFxuICAgICAgY29udGVudDogXFwnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gICAgfV07XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksIHtjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc30pO1xcbiAgICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uIGFkZEl0ZW0oKSB7XFxuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XFxuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMCwge1xcbiAgICAgICAgY29udGVudDogdGhpcy5pdGVtLmNvbnRlbnQgKyBcXCctY29weVxcJ1xcbiAgICAgIH0pO1xcbiAgICB9O1xcbiAgICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oKSB7XFxuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKTtcXG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcXG4gICAgfTtcXG4gIH1dKVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlUmVtb3ZlT25TcGlsbC9leGFtcGxlUmVtb3ZlT25TcGlsbC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5SZW1vdmUgb24gc3BpbGw8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+TmVlZCB0byBiZSBhYmxlIHRvIHF1aWNrbHkgZGVsZXRlIHN0dWZmIHdoZW4gaXQgc3BpbGxzIG91dCBvZiB0aGUgY2hvc2VuIGNvbnRhaW5lcnM/PC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiUmVtb3ZlT25TcGlsbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFwnc2luZ2xlMVxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIHNvbWV3aGVyZSBpbiB0aGlzIGNvbnRhaW5lci48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIGhlcmUsIElcXCdsbCBkaWUgYSBmaWVyeSBkZWF0aC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNpbmdsZSldLCB7IHJlbW92ZU9uU3BpbGw6IHRydWUgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5SZXZlcnQgb24gc3BpbGw8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+QnkgZGVmYXVsdCwgZHJvcHBpbmcgYW4gZWxlbWVudCBvdXRzaWRlIG9mIGFueSBrbm93biBjb250YWluZXJzIHdpbGwga2VlcCB0aGUgZWxlbWVudCBpbiB0aGUgbGFzdCBwbGFjZSBpdCBob3ZlcmVkIG92ZXIuIFlvdSBjYW4gbWFrZSBlbGVtZW50cyBnbyBiYWNrIGhvbWUgaWYgdGhleVxcJ3JlIGRyb3BwZWQgb3V0c2lkZSBvZiBrbm93biBjb250YWluZXJzLCB0b28uPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiUmV2ZXJ0T25TcGlsbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFwnbGVmdDRcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcJ3JpZ2h0NFxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7IHJldmVydE9uU3BpbGw6IHRydWUgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlU2Nyb2xsaW5nRHJhZy9leGFtcGxlU2Nyb2xsaW5nRHJhZy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPlNjcm9sbGluZyBkcmFnPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz4gQ29udGFpbnJlIGNhbiBiZSBzY3JvbGxlZCBieSBob3ZlcmluZyBkcmFnZ2VkIGl0ZW0gb3ZlciBtb3N0IHRvcCB2aXNpYmxlIGl0ZW0gb3IgbW9zdCBib3R0b20sIHNjcm9sbCBkaXJlY3Rpb24gcmVzcGVjdGl2ZWx5IG9yIGJ5IHVzaW5nIG1vdXNlIHdoZWVsIGR1cmluZyBkcmFnLiA8Yj5OT1QgRklOSVNIRUQgQ0hFQ0sgSVNTVUUgIzE0ITwvYj5cXG4gICAgPC9sYWJlbD5cXG4gICAgPGRpdiBuZy1jb250cm9sbGVyPVxcXCJTY3JvbGxpbmdEcmFnXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclZlcnRpY2FsIGhlaWdodExpbWl0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMTwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAyPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDcuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDkuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDEwLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxMS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMTIuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDEzLjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInBhcnRpYWxzL3BhcnRpYWwtY29udHJpYnV0ZS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgQ29udHJpYnV0aW5nIG5vdGVzIHdpbGwgYmUgbW92ZWQgaGVyZSwgc2luY2UgdGhlbiwgcGxlYXNlIHVzZSA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhci9ibG9iL21hc3Rlci9DT05UUklCVVRJTkcubWRcXFwiPmNvbnRyaWJ1dGlvbiBub3RlcyBvbiBnaXRodWI8L2E+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwicGFydGlhbHMvcGFydGlhbC1kb2NzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgPGRpdiBpZD1cXFwicm93T2ZmY2FudmFzXFxcIiBjbGFzcz1cXFwicm93IHJvdy1vZmZjYW52YXMgcm93LW9mZmNhbnZhcy1sZWZ0XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgc2lkZWJhci1vZmZjYW52YXNcXFwiIGlkPVxcXCJzaWRlYmFyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG4gICAgICAgIDxhIHVpLXNyZWY9XFxcImRvY3MuZGV0YWlsKHtsaW5rOlxcJ2RvY3NJbnN0YWxsXFwnfSlcXFwiIHVpLXNyZWYtYWN0aXZlPVxcXCJhY3RpdmVcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPkluc3RhbGxhdGlvbjwvYT5cXG4gICAgICAgIDxhIG5nLXJlcGVhdD1cXFwiZXhhbXBsZSBpbiBleGFtcGxlc0xpc3RcXFwiIHVpLXNyZWY9XFxcImRvY3MuZGV0YWlsKHtsaW5rOmV4YW1wbGUubGlua30pXFxcIiB1aS1zcmVmLWFjdGl2ZT1cXFwiYWN0aXZlXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj57e2V4YW1wbGUudGl0bGV9fTwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0vLnNpZGViYXItb2ZmY2FudmFzLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tOVxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInB1bGwtbGVmdCB2aXNpYmxlLXhzXFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlU2lkZWJhcigpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1xcXCI+VG9nZ2xlIG5hdjwvYnV0dG9uPlxcbiAgICAgIDwvcD5cXG4gICAgICA8IS0tIGRvY3MuZGV0YWlsIC0tPlxcbiAgICAgIDxkaXYgdWktdmlldyBvbmxvYWQ9XFxcImhpZ2hsaWdodENvZGUoKVxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tLy5jb2wteHMtMTIuY29sLXNtLTktLT5cXG4gIDwvZGl2PlxcbiAgPCEtLS9yb3ctLT5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJwYXJ0aWFscy9wYXJ0aWFsLWhvbWUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8IS0tLy5zaWRlYmFyLW9mZmNhbnZhcy0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxuICAgICAgICA8aDE+RFJBR1VMQVI8L2gxPlxcbiAgICAgICAgPHA+QW5ndWxhciBkcmFnJmRyb3AgYmFzZWQgb24gPGEgaHJlZj1cXFwiaHR0cDovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxcXCI+ZHJhZ3VsYTwvYT4uPC9wPlxcbiAgICAgICAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHVpLXNyZWY9XFxcImRvY3NcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+TGl2ZSBleGFtcGxlcyBpbiBkb2NzPC9hPjwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICAgICAgPHA+QnJvd3NlciBzdXBwb3J0IGluY2x1ZGVzIGV2ZXJ5IHNhbmUgYnJvd3NlciBhbmQgKipJRTcrKiouIDxzdWI+XyhHcmFudGVkIHlvdSBwb2x5ZmlsbCB0aGUgZnVuY3Rpb25hbCBgQXJyYXlgIG1ldGhvZHMgaW4gRVM1KV88L3N1Yj48L3A+XFxuICAgICAgICAgIDxoMj5JbnNwaXJhdGlvbjwvaDI+XFxuICAgICAgICAgIDxwPkhhdmUgeW91IGV2ZXIgd2FudGVkIGEgZHJhZyBhbmQgZHJvcCBsaWJyYXJ5IHRoYXQganVzdCB3b3Jrcz8gVGhhdCBhY3R1YWxseSB1bmRlcnN0YW5kcyB3aGVyZSB0byBwbGFjZSB0aGUgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSBkcm9wcGVkPyBUaGF0IGRvZXNu4oCZdCBuZWVkIHlvdSB0byBkbyBhIHppbGxpb24gdGhpbmdzIHRvIGdldCBpdCB0byB3b3JrPyBXZWxsLCBzbyBkaWQgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhXFxcIj5OaWNvbGFzIEJldmFjcXVhPC9hPiBhbmQgSSBoYXZlIGZvcmtlZCBpdCBpbnRvIGFuZ3VsYXIgbW9kdWxlIGFuZCBhbHNvIHB1dCBzb21lIGZlYXR1cmVzITwvcD5cXG4gICAgICAgICAgPHA+PGI+QWN0dWFsIHZlcnNpb24gMi4wLjAgaXMgYmFzZWQgb24gZHJhZ3VsYSAyLjEuMiBhbmQgdGVzdGVkIHdpdGggYW5ndWxhciAxLjQuMy48L2I+PC9wPlxcbiAgICAgICAgICA8aDI+RGlmZmVyZW5jZXMgb2YgZHJhZ3VsYXIgKGFnYWluc3QgZHJhZ3VsYSk8L2gyPlxcbiAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgPGxpPnJlcGxhY2VkIGNyb3NzdmVudCB3aXRoIGFuZ3VsYXJzIGV2ZW50IGJpbmRpbmc8L2xpPlxcbiAgICAgICAgICAgIDxsaT5yZXBsYWNlZCBjb250cmEuZW1pdHRlciB3aXRoICRzY29wZS4kZW1pdCBpZiBzY29wZSBwcm92aWRlZCBpbiBvcHRpb25zIChvcHRpb25zLnNjb3BlKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmVuY2Fwc3VsYXRlZCB0aGUgY29kZSBpbnRvIGFuZ3VsYXIgZmFjdG9yeSAoZHJhZ3VsYXJTZXJ2aWNlKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmNyZWF0ZWQgZGlyZWN0aXZlIGRyYWd1bGFyIHdoZXJlIG9wdGlvbnMgY2FuIGJlIHBhc3NlZCBwcm92aWRpbmcgc2NvcGUgcHJvcGVydHkgbmFtZTwvbGk+XFxuICAgICAgICAgICAgPGxpPmJvdGggc2VydmljZSBhbmQgZGlyZWN0aXZlIHByb3ZpZGVkIGFzIGFuZ3VsYXIgbW9kdWxlIChkcmFndWxhck1vZHVsZSk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hdXRvbWF0aWMgZGlyZWN0aW9uIGlmIG5vdCBwcm92aWRlZCBpbiBvcHRpb25zLCBpbnN0ZWFkIG9mIGRlZmF1bHQgdmVydGljYWw8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hY2NlcHRpbmcgYXJyYXlsaWtlIG9iamVjdHMgYXMgY29udGFpbmVycyBhcnJheTwvbGk+XFxuICAgICAgICAgICAgPGxpPmFjY2VwdGluZyBjdXN0b20gY2xhc3NlcyB2aWEgb3B0aW9uLmNsYXNzZXM8L2xpPlxcbiAgICAgICAgICAgIDxsaT5uYW1lc3BhY2VkIGNvbnRhaW5lcnMgZ3JvdXBzIGF2YWlsYWJsZSB2aWEgb3B0aW9uLm5hbWVTcGFjZTwvbGk+XFxuICAgICAgICAgICAgPGxpPmJvdW5kaW5nQm94IChkcmFnZ2luZyBlbGVtZW50IGNhbiBtZSBtb3ZlZCBvbmx5IGluIHNwZWNpZmljIGFyZWEpPC9saT5cXG4gICAgICAgICAgICA8bGk+bG9ja1gvWSAoZHJhZ2dpbmcgZWxlbWVudCBjYW4gbWUgbW92ZWQgb25seSBpbiBzcGVjaWZpYyBkaXJlY3Rpb24pPC9saT5cXG4gICAgICAgICAgICA8bGk+bW9yZSBleGFtcGxlczwvbGk+XFxuICAgICAgICAgICAgPGxpPmFjY2VwdCBKU09OIG9wdGlvbnMgaW4gZHJhZ3VsYXIgZGlyZWN0aXZlICgjMik8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hZGQvcmVtb3ZlIHdpdGggbmctcmVwZWF0PC9saT5cXG4gICAgICAgICAgICA8bGk+YWRkZWQgc3ludGF4IGhpZ2hsaWdodGVyIHRvIGV4YW1wbGUgY29kZXM8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8aDI+VG9kbzwvaDI+XFxuICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICA8bGk+ZXhhbXBsZSBmb3IgZGVsYXk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5vLmlzQ29udGFpbmVyIGluIF9pc0NvbnRhaW5lciAoZm4gby5pc0NvbnRhaW5lckdldE1vZGVsKGNvbnRhaW5lckVsbSkpPC9saT5cXG4gICAgICAgICAgICA8bGk+c29sdmUgbWl4aW5nIHdpdGggYW5kIHdpdGhvdXQgbW9kZWwgY29udGFpbmVyczwvbGk+XFxuICAgICAgICAgICAgPGxpPnJlbW92ZSBucG0gd29ya2Zsb3c8L2xpPlxcbiAgICAgICAgICAgIDxsaT5zdXBwb3J0IHNlbGVjdG9ycyBpbiBzZXJ2aWNlICgjMik/PC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPGgyPkZlYXR1cmVzPC9oMj5cXG4gICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgIDxsaT5wcm92aWRlZCBhcyBzZXJ2aWNlIGFuZCBhbHNvIGFzIGRpcmVjdGl2ZTwvbGk+XFxuICAgICAgICAgICAgPGxpPlN1cGVyIGVhc3kgdG8gc2V0IHVwPC9saT5cXG4gICAgICAgICAgICA8bGk+Tm8gYmxvYXRlZCBkZXBlbmRlbmNpZXM8L2xpPlxcbiAgICAgICAgICAgIDxsaT48c3Ryb25nPkZpZ3VyZXMgb3V0IHNvcnQgb3JkZXI8L3N0cm9uZz4gb24gaXRzIG93bjwvbGk+XFxuICAgICAgICAgICAgPGxpPkEgc2hhZG93IHdoZXJlIHRoZSBpdGVtIHdvdWxkIGJlIGRyb3BwZWQgb2ZmZXJzIDxzdHJvbmc+dmlzdWFsIGZlZWRiYWNrPC9zdHJvbmc+PC9saT5cXG4gICAgICAgICAgICA8bGk+VG91Y2ggZXZlbnRzITwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxoMj5Gb3IgaW5zdGFsbGF0aW9uLCB1c2FnZSBhbmQgZXhhbXBsZXMgZ28gdG8gPGEgdWktc3JlZj1cXFwiZG9jc1xcXCI+ZG9jczwvYT48L2gyPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPCEtLS9yb3ctLT5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0vLmNvbC14cy0xMi5jb2wtc20tOS0tPlxcbiAgPC9kaXY+XFxuICA8IS0tL3Jvdy0tPlxcbjwvZGl2PlxcblwiKTt9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGRyYWd1bGFyIERpcmVjdGl2ZSBieSBMdWNreWxvb2tlIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG4gdmFyIGRyYWd1bGFyTW9kdWxlID0gcmVxdWlyZSgnLi9kcmFndWxhck1vZHVsZScpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5kcmFndWxhck1vZHVsZS5kaXJlY3RpdmUoJ2RyYWd1bGFyJywgWydkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbihkcmFndWxhclNlcnZpY2UpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uKCRzY29wZSwgaUVsbSwgaUF0dHJzKSB7XG5cbiAgICAgIHZhciBvcHRpb25zID0gJHNjb3BlW2lBdHRycy5kcmFndWxhcl0gfHwgdHJ5SnNvbihpQXR0cnMuZHJhZ3VsYXIpO1xuXG4gICAgICBmdW5jdGlvbiB0cnlKc29uKGpzb24pIHtcbiAgICAgICAgdHJ5IHsgLy8gSSBkb250IGxpa2UgdHJ5IGNhdGNoIHNvbHV0aW9ucyBidXQgSSBoYXZlbnQgZmluZCBzYXR0aXNmeWluZyB3YXkgb2YgY2hjZWNraW5nIGpzb24gdmFsaWRpdHkuXG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5jb250YWluZXJzTW9kZWwgJiYgdHlwZW9mIG9wdGlvbnMuY29udGFpbmVyc01vZGVsID09PSAnc3RyaW5nJyl7XG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyc01vZGVsID0gJHNjb3BlLiRldmFsKG9wdGlvbnMuY29udGFpbmVyc01vZGVsKTtcbiAgICAgIH1cblxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGlFbG1bMF0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcbn1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdkcmFndWxhck1vZHVsZScsIFtdKTtcblxuKHtcImRyYWd1bGFyRGlyZWN0aXZlXCI6cmVxdWlyZShcIi4vZHJhZ3VsYXJEaXJlY3RpdmUuanNcIiksXCJkcmFndWxhclNlcnZpY2VcIjpyZXF1aXJlKFwiLi9kcmFndWxhclNlcnZpY2UuanNcIil9KTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogZHJhZ3VsYXIgTW9kdWxlIGFuZCBTZXJ2aWNlIGJ5IEx1Y2t5bG9va2UgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXJcbiAqIEFuZ3VsYXIgdmVyc2lvbiBvZiBkcmFndWxhIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhXG4gKi9cblxudmFyIGRyYWd1bGFyTW9kdWxlID0gcmVxdWlyZSgnLi9kcmFndWxhck1vZHVsZScpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmRyYWd1bGFyTW9kdWxlLmZhY3RvcnkoJ2RyYWd1bGFyU2VydmljZScsIFsnJHJvb3RTY29wZScsICckdGltZW91dCcsIGZ1bmN0aW9uIGRyYWd1bGEoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcblxuICB2YXIgY29udGFpbmVyc05hbWVTcGFjZWQgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVyc1xuICAgIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVycyBtb2RlbHNcbiAgICBfY2FjaGUgPSB7fSwgLy8gY2xhc3NlcyBsb29rdXAgY2FjaGVcbiAgICBfbWlycm9yOyAvLyBtaXJyb3IgaW1hZ2VcblxuICByZXR1cm4gZnVuY3Rpb24oaW5pdGlhbENvbnRhaW5lcnMsIG9wdGlvbnMpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxDb250YWluZXJzKSAmJiAhYW5ndWxhci5pc0VsZW1lbnQoaW5pdGlhbENvbnRhaW5lcnMpICYmICFpbml0aWFsQ29udGFpbmVyc1swXSkge1xuICAgICAgLy8gdGhlbiBjb250YWluZXJzIGFyZSBub3QgcHJvdmlkZWQsIG9ubHkgb3B0aW9uc1xuICAgICAgb3B0aW9ucyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBfc291cmNlLCAvLyBzb3VyY2UgY29udGFpbmVyXG4gICAgICBfaXRlbSwgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gICAgICBfc291cmNlTW9kZWwsIC8vIHNvdXJjZSBjb250YWluZXIgbW9kZWxcbiAgICAgIF9pdGVtTW9kZWwsIC8vIGl0ZW0tbW9kZWwgYmVpbmcgZHJhZ2dlZFxuICAgICAgX3RhcmdldE1vZGVsLCAvLyB0YXJnZXQgY29udGFpbmVyIG1vZGVsXG4gICAgICBfbGFzdFRhcmdldE1vZGVsLCAvLyBsYXN0IHRhcmdldCBjb250YWluZXIgbW9kZWxcbiAgICAgIF9sYXN0RHJvcFRhcmdldCA9IG51bGwsIC8vIGxhc3QgY29udGFpbmVyIGl0ZW0gd2FzIG92ZXJcbiAgICAgIF9vZmZzZXRYLCAvLyByZWZlcmVuY2UgeFxuICAgICAgX29mZnNldFksIC8vIHJlZmVyZW5jZSB5XG4gICAgICBfb2Zmc2V0WHIsIC8vIHJlZmVyZW5jZSB4IHJpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfb2Zmc2V0WWIsIC8vIHJlZmVyZW5jZSB5IGJvdHRvbSBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2NsaWVudFgsIC8vIGNhY2hlIGNsaWVudCB4LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfY2xpZW50WSwgLy8gY2FjaGUgY2xpZW50IHksIGluaXQgYXQgZ3JhYiwgdXBkYXRlIGF0IGRyYWdcbiAgICAgIF9taXJyb3JXaWR0aCwgLy8gbWlycm9yIHdpZHRoIGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfbWlycm9ySGVpZ2h0LCAvLyBtaXJyb3IgaGVpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfaW5pdGlhbFNpYmxpbmcsIC8vIHJlZmVyZW5jZSBzaWJsaW5nIHdoZW4gZ3JhYmJlZFxuICAgICAgX2N1cnJlbnRTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyBub3dcbiAgICAgIF9pbml0aWFsSW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50SW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCBub3dcbiAgICAgIF9sYXN0T3ZlckVsZW0sIC8vIGxhc3QgZWxlbWVudCBiZWhpbmQgdGhlIGN1cnNvciAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfbGFzdE92ZXJDbGFzcywgLy8gbGFzdCBvdmVyQ2xhc3MgdXNlZCAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfY29weSwgLy8gaXRlbSB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29weU1vZGVsLCAvLyBpdGVtLW1vZGVsIHVzZWQgZm9yIGNvcHlpbmdcbiAgICAgIF9jb250YWluZXJzID0ge30sIC8vIGNvbnRhaW5lcnMgbWFuYWdlZCBieSB0aGUgZHJha2VcbiAgICAgIF9jb250YWluZXJzTW9kZWwgPSB7fSwgLy8gY29udGFpbmVycyBtb2RlbFxuICAgICAgX3JlbmRlclRpbWVyLCAvLyB0aW1lciBmb3Igc2V0VGltZW91dCByZW5kZXJNaXJyb3JJbWFnZVxuICAgICAgX2lzQ29udGFpbmVyLCAvLyBpbnRlcm5hbCBpc0NvbnRhaW5lclxuICAgICAgX3RhcmdldENvbnRhaW5lciwgLy8gZHJvcHBhYmxlIGNvbnRhaW5lciB1bmRlciBkcmFnIGl0ZW1cbiAgICAgIGRlZmF1bHRDbGFzc2VzID0ge1xuICAgICAgICBtaXJyb3I6ICdndS1taXJyb3InLFxuICAgICAgICBoaWRlOiAnZ3UtaGlkZScsXG4gICAgICAgIHVuc2VsZWN0YWJsZTogJ2d1LXVuc2VsZWN0YWJsZScsXG4gICAgICAgIHRyYW5zaXQ6ICdndS10cmFuc2l0JyxcbiAgICAgICAgb3ZlckFjdGl2ZTogJ2d1LW92ZXItYWN0aXZlJyxcbiAgICAgICAgb3ZlckFjY2VwdHM6ICdndS1vdmVyLWFjY2VwdCcsXG4gICAgICAgIG92ZXJEZWNsaW5lczogJ2d1LW92ZXItZGVjbGluZSdcbiAgICAgIH0sXG4gICAgICBvID0geyAvLyBvcHRpb25zXG4gICAgICAgIGNsYXNzZXM6IGRlZmF1bHRDbGFzc2VzLFxuICAgICAgICBjb250YWluZXJzOiBmYWxzZSxcbiAgICAgICAgbW92ZXM6IGFsd2F5cyxcbiAgICAgICAgYWNjZXB0czogYWx3YXlzLFxuICAgICAgICBpc0NvbnRhaW5lcjogbmV2ZXIsXG4gICAgICAgIGNvcHk6IGZhbHNlLFxuICAgICAgICBkZWxheTogZmFsc2UsXG4gICAgICAgIGludmFsaWQ6IGludmFsaWRUYXJnZXQsXG4gICAgICAgIHJldmVydE9uU3BpbGw6IGZhbHNlLFxuICAgICAgICByZW1vdmVPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgZHJhZ092ZXJDbGFzc2VzOiBmYWxzZSxcbiAgICAgICAgbG9ja1g6IGZhbHNlLFxuICAgICAgICBsb2NrWTogZmFsc2UsXG4gICAgICAgIGJvdW5kaW5nQm94OiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiBmYWxzZVxuICAgICAgfTtcblxuICAgIGlmICghaXNFbGVtZW50KG8uYm91bmRpbmdCb3gpKSB7XG4gICAgICBvLmJvdW5kaW5nQm94ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmNsYXNzZXMpIHtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRlZmF1bHRDbGFzc2VzLCBvcHRpb25zLmNsYXNzZXMpO1xuICAgICAgYW5ndWxhci5leHRlbmQob3B0aW9ucy5jbGFzc2VzLCBkZWZhdWx0Q2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgYW5ndWxhci5leHRlbmQobywgb3B0aW9ucyk7XG5cbiAgICBpZiAoby5kZWxheSA9PT0gdHJ1ZSkge1xuICAgICAgby5kZWxheSA9IDMwMDtcbiAgICB9XG5cbiAgICBpZiAoby5taXJyb3JDb250YWluZXIgPT09IHZvaWQgMCkge1xuICAgICAgby5taXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIC8vIGdldCBpbml0aWFsIGNvbnRhaW5lcnMgZnJvbSBvcHRpb25zLCBhcmd1bWVudCBvciBmYWxsIGJhY2sgdG8gZW1wdHkgYXJyYXkgKGNvbnRhaW5lcnMgY2FuIGJlIGFkZGVkIGxhdGVyKVxuICAgIGluaXRpYWxDb250YWluZXJzID0gby5jb250YWluZXJzIHx8IChpbml0aWFsQ29udGFpbmVycyA/IG1ha2VBcnJheShpbml0aWFsQ29udGFpbmVycykgOiBbXSk7XG4gICAgaWYgKG8uY29udGFpbmVycykge1xuICAgICAgLy8gbWFrZSBhcnJheSBmcm9tIG8uY29udGFpbmVyc1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgIH1cbiAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgIG8uY29udGFpbmVyc01vZGVsID0gQXJyYXkuaXNBcnJheShvLmNvbnRhaW5lcnNNb2RlbFswXSkgPyBvLmNvbnRhaW5lcnNNb2RlbCA6IFtvLmNvbnRhaW5lcnNNb2RlbF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2VlZE5hbWVTcGFjZXMoX2NvbnRhaW5lcnMsIGNvbnRhaW5lcnNOYW1lU3BhY2VkLCBuYW1lU3BhY2UsIGluaXRpYWxDb250YWluZXJzKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0pIHtcbiAgICAgICAgY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSA9IFtdO1xuICAgICAgfVxuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSwgaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXSA9IGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV07XG4gICAgfVxuXG4gICAgLy8gZmVlZCBuYW1lc3BhY2VkIGNvbnRhaW5lcnMgZ3JvdXBzIGFuZCBvcHRpb25hbHkgc2hhZG93IGl0IGJ5IG1vZGVsc1xuICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8ubmFtZVNwYWNlKSkge1xuICAgICAgICBvLm5hbWVTcGFjZSA9IFtvLm5hbWVTcGFjZV07XG4gICAgICB9XG4gICAgICBvLm5hbWVTcGFjZS5mb3JFYWNoKGZ1bmN0aW9uIGVhY2hOYW1lU3BhY2UobmFtZVNwYWNlKSB7XG4gICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycyk7XG4gICAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzTW9kZWwsIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwsIG5hbWVTcGFjZSwgby5jb250YWluZXJzTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIF9pc0NvbnRhaW5lciA9IGlzQ29udGFpbmVyTmFtZVNwYWNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdCAobm90IHVzaW5nIG5hbWVTcGFjZXMpXG4gICAgICBfY29udGFpbmVycyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgX2lzQ29udGFpbmVyID0gaXNDb250YWluZXI7XG4gICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgX2NvbnRhaW5lcnNNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vcmVnaXN0ZXIgZXZlbnRzXG4gICAgZXZlbnRzKCk7XG5cbiAgICB2YXIgZHJha2UgPSB7XG4gICAgICBhZGRDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdhZGQnKSxcbiAgICAgIHJlbW92ZUNvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ3JlbW92ZScpLFxuICAgICAgY29udGFpbmVyczogX2NvbnRhaW5lcnMsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGNhbmNlbDogY2FuY2VsLFxuICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHJldHVybiBkcmFrZTtcblxuICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBhcnJheS1saWtlIG9iamVjdHMgb3IgZnJvbSBzaW5nbGUgZWxlbWVudFxuICAgIGZ1bmN0aW9uIG1ha2VBcnJheShhbGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFsbCkpIHtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICAgIH1cbiAgICAgIGlmIChhbGwubGVuZ3RoKSB7IC8vIGlzIGFycmF5LWxpa2VcbiAgICAgICAgdmFyIGlBbGwgPSBhbGwubGVuZ3RoLFxuICAgICAgICAgIG5ld0FycmF5ID0gW107XG4gICAgICAgIHdoaWxlIChpQWxsKSB7XG4gICAgICAgICAgaUFsbC0tO1xuICAgICAgICAgIG5ld0FycmF5LnB1c2goYWxsW2lBbGxdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICB9IGVsc2UgeyAvLyBpcyBvbmUgZWxlbWVudFxuICAgICAgICByZXR1cm4gW2FsbF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIG9yIHJlbW92ZSBjb250YWluZXJzIC0gZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIG1hbmlwdWxhdGVDb250YWluZXJzKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYWRkT3JSZW1vdmUoYWxsKSB7XG4gICAgICAgIHZhciBjaGFuZ2VzID0gQXJyYXkuaXNBcnJheShhbGwpID8gYWxsIDogbWFrZUFycmF5KGFsbCk7XG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgICAgICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG8ubmFtZVNwYWNlLCBmdW5jdGlvbiBhZGRSZW1vdmVOYW1lc3BhY2VkKGNvbnRhaW5lcnMsIG5hbWVTcGFjZSkge1xuICAgICAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXS5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UuYWRkQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0uc3BsaWNlKF9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSwgMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UucmVtb3ZlQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wID09PSAnYWRkJykge1xuICAgICAgICAgICAgICBfY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLmFkZENvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9jb250YWluZXJzLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5yZW1vdmVDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDb250YWluZXIoZWwpIHtcbiAgICAgIHJldHVybiBkcmFrZS5jb250YWluZXJzLmluZGV4T2YoZWwpICE9PSAtMSB8fCBvLmlzQ29udGFpbmVyKGVsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NvbnRhaW5lck5hbWVTcGFjZWQoZWwpIHtcbiAgICAgIHZhciBuYW1lU3BhY2U7XG4gICAgICBmb3IgKG5hbWVTcGFjZSBpbiBkcmFrZS5jb250YWluZXJzKSB7XG4gICAgICAgIGlmIChkcmFrZS5jb250YWluZXJzLmhhc093blByb3BlcnR5KG5hbWVTcGFjZSkgJiYgZHJha2UuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YoZWwpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZlbnRzKHJlbSkge1xuICAgICAgdmFyIG9wID0gcmVtID8gJ29mZicgOiAnb24nO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNldXAnLCByZWxlYXNlKTtcblxuICAgICAgaW5pdGlhbENvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiBhZGRNb3VzZURvd24oY29udGFpbmVyKSB7XG4gICAgICAgIHJlZ0V2ZW50KGNvbnRhaW5lciwgJ29uJywgJ21vdXNlZG93bicsIGdyYWIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGV2ZW50cyh0cnVlKTtcbiAgICAgIGRyYWtlLnJlbW92ZUNvbnRhaW5lcihfY29udGFpbmVycyk7XG4gICAgICByZWxlYXNlKHt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiKGUpIHtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIHZhciBpdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgIC8vIGZpbHRlciBzb21lIG9kZCBzaXR1YXRpb25zXG4gICAgICBpZiAoKGUud2hpY2ggIT09IDAgJiYgZS53aGljaCAhPT0gMSkgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm47IC8vIHdlIG9ubHkgY2FyZSBhYm91dCBob25lc3QtdG8tZ29kIGxlZnQgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgZHJhZyBjYW4gc3RhcnRcbiAgICAgIGlmIChzdGFydChpdGVtKSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG9tYXRpY2x5IGRldGVjdCBkaXJlY3Rpb24gb2YgZWxlbWVudHMgaWYgbm90IHNldCBpbiBvcHRpb25zXG4gICAgICBpZiAoIW8uZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgcGFyZW50SGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICBwYXJlbnRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBjaGlsZEhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGNoaWxkV2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuICAgICAgICBvLmRpcmVjdGlvbiA9IHBhcmVudEhlaWdodCAvIGNoaWxkSGVpZ2h0IDwgcGFyZW50V2lkdGggLyBjaGlsZFdpZHRoID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXMsIHVzZWQgdG8gcmVuZGVyIF9taXJyb3IgZm9yIGZpcnN0IHRpbWVcbiAgICAgIHZhciBvZmZzZXQgPSBnZXRPZmZzZXQoX2l0ZW0pO1xuICAgICAgX29mZnNldFggPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5sZWZ0O1xuICAgICAgX29mZnNldFkgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC50b3A7XG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIC8vIGxpbWl0aW5nIGFyZWEgb2YgX21pcnJvciBtb3ZlbWVudCwgZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXNcbiAgICAgIGlmIChvLmJvdW5kaW5nQm94KSB7XG4gICAgICAgIF9vZmZzZXRYciA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LnJpZ2h0O1xuICAgICAgICBfb2Zmc2V0WWIgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC5ib3R0b207XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbGF5ZWQgcmVuZGVyaW5nXG4gICAgICBpZiAodHlwZW9mIG8uZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIF9yZW5kZXJUaW1lciA9ICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlbmRlck1pcnJvckFuZERyYWcoZSk7XG4gICAgICAgIH0sIG8uZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckFuZERyYWcoZSkge1xuICAgICAgYWRkQ2xhc3MoX2NvcHkgfHwgX2l0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIHJlbmRlck1pcnJvckltYWdlKCk7XG4gICAgICAvLyBpbml0aWFsIHBvc2l0aW9uXG4gICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIF9vZmZzZXRYICsgJ3B4JztcbiAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSBfb2Zmc2V0WSArICdweCc7XG5cbiAgICAgIGRyYWcoZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdGFydChpdGVtKSB7XG4gICAgICB2YXIgaGFuZGxlID0gaXRlbTtcblxuICAgICAgaWYgKGRyYWtlLmRyYWdnaW5nICYmIF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBhbHJlYWR5IGRyYWdnaW5nXG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBkb24ndCBkcmFnIGNvbnRhaW5lciBpdHNlbGZcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGl0ZW0ucGFyZW50RWxlbWVudCAmJiAhX2lzQ29udGFpbmVyKGl0ZW0ucGFyZW50RWxlbWVudCkpIHtcbiAgICAgICAgLy8gYnJlYWsgbG9vcCBpZiB1c2VyIHRyaWVzIHRvIGRyYWcgaXRlbSB3aGljaCBpcyBjb25zaWRlcmVkIGludmFsaWQgaGFuZGxlXG4gICAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtID0gaXRlbS5wYXJlbnRFbGVtZW50OyAvLyBkcmFnIHRhcmdldCBzaG91bGQgYmUgaW1tZWRpYXRlIGNoaWxkIG9mIGNvbnRhaW5lclxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRhaW5lciA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghY29udGFpbmVyIHx8IG8uaW52YWxpZChpdGVtLCBoYW5kbGUpIHx8ICFvLm1vdmVzKGl0ZW0sIGNvbnRhaW5lciwgaGFuZGxlLCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwpKSB7IC8vIGlzIG1vdmFibGVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbmQoKTtcblxuICAgICAgLy8gcHJlcGFyZSBtb2RlbHMgb3BlcmF0aW9uc1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGluaXRpYWxDb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSxcbiAgICAgICAgICBpdGVtSW5kZXggPSBkb21JbmRleE9mKGl0ZW0sIGNvbnRhaW5lcik7XG5cbiAgICAgICAgX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBpdGVtSW5kZXg7XG4gICAgICAgIF9zb3VyY2VNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsW2NvbnRhaW5lckluZGV4XTtcbiAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICBfaXRlbU1vZGVsID0gX3NvdXJjZU1vZGVsW2l0ZW1JbmRleF07XG4gICAgICAgIGlmIChvLmNvcHkpIHtcbiAgICAgICAgICBfY29weU1vZGVsID0gYW5ndWxhci5jb3B5KF9pdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLmNvcHkpIHtcbiAgICAgICAgX2NvcHkgPSBpdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfY29weSwgaXRlbSwgX2NvcHlNb2RlbCwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3NvdXJjZSA9IGNvbnRhaW5lcjtcbiAgICAgIF9pdGVtID0gaXRlbTtcbiAgICAgIF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IG5leHRFbChpdGVtKTtcblxuICAgICAgZHJha2UuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJhZycsIF9pdGVtLCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52YWxpZFRhcmdldChlbCkge1xuICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICdBJyB8fCBlbC50YWdOYW1lID09PSAnQlVUVE9OJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCchISEhISBJIGhhdmVudCBzZWVuIHRoaXMgbWVzc2FnZSBpbiBhbnkgY2FzZScpO1xuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICAgIGRyb3AoaXRlbSwgaXRlbS5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWxlYXNlKGUpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSk7XG5cbiAgICAgIGlmIChkcm9wVGFyZ2V0ICYmIChvLmNvcHkgPT09IGZhbHNlIHx8IGRyb3BUYXJnZXQgIT09IF9zb3VyY2UpKSB7XG4gICAgICAgIC8vIGZvdW5kIHZhbGlkIHRhcmdldCBhbmQgKGlzIG5vdCBjb3B5IGNhc2Ugb3IgdGFyZ2V0IGlzIG5vdCBpbml0aWFsIGNvbnRhaW5lcilcbiAgICAgICAgZHJvcChpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAoby5yZW1vdmVPblNwaWxsKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFmdGVyIHJlbGVhc2UgdGhlcmUgaXMgbm8gY29udGFpbmVyIGhvdmVyZWRcbiAgICAgIF90YXJnZXRDb250YWluZXIgPSBudWxsO1xuXG4gICAgICAvLyByZW1vdmUgY2xhc3NlcyBpZiB1c2VkXG4gICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiYgX2xhc3RPdmVyRWxlbSkge1xuICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgX2xhc3RPdmVyRWxlbSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJvcChpdGVtLCB0YXJnZXQpIHtcbiAgICAgIGlmIChvLnNjb3BlICYmIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCB0YXJnZXQsIF9zb3VyY2UsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50LFxuICAgICAgICBpdGVtTW9kZWw7XG5cbiAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbU1vZGVsID0gX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsO1xuICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKF90YXJnZXRNb2RlbC5pbmRleE9mKGl0ZW1Nb2RlbCksIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KG8uY29weSA/ICdjYW5jZWwnIDogJ3JlbW92ZScsIGl0ZW0sIHBhcmVudCwgaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsKHJldmVydCkge1xuICAgICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmV2ZXJ0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gcmV2ZXJ0IDogby5yZXZlcnRPblNwaWxsLFxuICAgICAgICBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcblxuICAgICAgaWYgKHBhcmVudCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyEhISEhISEhISEhISEhISEhIEkgdGhpbmsgdGhpcyBpcyBuZXZlciBwb3NzaWJsZSBiZWNhdXNlIGNvcHkgY2Fubm90IGJlIHBsYWNlZCBpbnRvIHNvdXJjZScpO1xuICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9jb3B5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKF90YXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpLCAxLCBfY29weU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudChwYXJlbnQpO1xuICAgICAgaWYgKGluaXRpYWwgPT09IGZhbHNlICYmIG8uY29weSA9PT0gZmFsc2UgJiYgcmV2ZXJ0cykge1xuICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgX3NvdXJjZS5pbnNlcnRCZWZvcmUoaXRlbSwgX2luaXRpYWxTaWJsaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9zb3VyY2VNb2RlbDtcbiAgICAgICAgICAvLyBtb3ZlIGJhY2sgdG8gaW5pdGlhbCBwbGFjZW1lbnRcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwoX2luaXRpYWxJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG8uc2NvcGUgJiYgKGluaXRpYWwgfHwgcmV2ZXJ0cykpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSk7XG4gICAgICB9IGVsc2UgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJvcCcsIGl0ZW0sIHBhcmVudCwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICAgIHJlbW92ZU1pcnJvckltYWdlKCk7XG5cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJtQ2xhc3MoaXRlbSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBjYW5jZWwgdGltZXJcbiAgICAgIGlmIChfcmVuZGVyVGltZXIpIHtcbiAgICAgICAgJHRpbWVvdXQuY2FuY2VsKF9yZW5kZXJUaW1lcik7XG4gICAgICB9XG5cbiAgICAgIGRyYWtlLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2RyYWdlbmQnLCBpdGVtKTtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnb3V0JywgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgX3NvdXJjZSA9IF9pdGVtID0gX2NvcHkgPSBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBfc291cmNlTW9kZWwgPSBudWxsO1xuICAgICAgX2l0ZW1Nb2RlbCA9IF9jb3B5TW9kZWwgPSBfaW5pdGlhbEluZGV4ID0gX2N1cnJlbnRJbmRleCA9IF9yZW5kZXJUaW1lciA9IF9sYXN0RHJvcFRhcmdldCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gaXMgaXRlbSBjdXJyZW50bHkgcGxhY2VkIGluIG9yaWdpbmFsIGNvbnRhaW5lciBhbmQgb3JpZ2luYWwgcG9zaXRpb24/XG4gICAgZnVuY3Rpb24gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcykge1xuICAgICAgdmFyIHNpYmxpbmcgPSBzIHx8IChfbWlycm9yID8gX2N1cnJlbnRTaWJsaW5nIDogbmV4dEVsKF9pdGVtIHx8IF9jb3B5KSk7XG4gICAgICByZXR1cm4gdGFyZ2V0ID09PSBfc291cmNlICYmIHNpYmxpbmcgPT09IF9pbml0aWFsU2libGluZztcbiAgICB9XG5cbiAgICAvLyBmaW5kIHZhbGlkIGRyb3AgY29udGFpbmVyXG4gICAgZnVuY3Rpb24gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnRCZWhpbmRDdXJzb3I7XG4gICAgICB3aGlsZSAodGFyZ2V0ICYmICFhY2NlcHRlZCgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcblxuICAgICAgZnVuY3Rpb24gYWNjZXB0ZWQoKSB7XG4gICAgICAgIHZhciBhY2NlcHRzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF9pc0NvbnRhaW5lcih0YXJnZXQpKSB7IC8vIGlzIGRyb3BwYWJsZT9cbiAgICAgICAgICBfdGFyZ2V0Q29udGFpbmVyID0gdGFyZ2V0O1xuXG4gICAgICAgICAgdmFyIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKHRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvciksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UodGFyZ2V0LCBpbW1lZGlhdGUsIGNsaWVudFgsIGNsaWVudFkpLFxuICAgICAgICAgICAgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgYWNjZXB0cyA9IGluaXRpYWwgPyB0cnVlIDogby5hY2NlcHRzKF9pdGVtLCB0YXJnZXQsIF9zb3VyY2UsIHJlZmVyZW5jZSwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsKTtcblxuICAgICAgICAgIGlmIChhY2NlcHRzICYmIG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgICAgaWYgKCFvLm5hbWVTcGFjZSkge1xuICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIG5hbWVTcGFjZSBpbiBkcmFrZS5jb250YWluZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRyYWtlLmNvbnRhaW5lcnMuaGFzT3duUHJvcGVydHkobmFtZVNwYWNlKSAmJiBkcmFrZS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZih0YXJnZXQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9jb250YWluZXJzTW9kZWxbbmFtZVNwYWNlXVtkcmFrZS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBjbGFzcyBpZiBlbGVtZW50IGlzIGVuYWJsZWQgZm9yIGl0IGFuZCBpdCBoYXMgbm90IGFscmVhZHkgdGhlIGNsYXNzXG4gICAgICAgIGlmIChvLmRyYWdPdmVyQ2xhc3NlcyAmJlxuICAgICAgICAgIGhhc0NsYXNzKHRhcmdldCwgby5jbGFzc2VzLm92ZXJBY3RpdmUpICYmXG4gICAgICAgICAgdGFyZ2V0ICE9PSBfbGFzdE92ZXJFbGVtKSB7XG5cbiAgICAgICAgICBpZiAoX2xhc3RPdmVyRWxlbSkgeyAvLyBjbGVhciBmcm9tIHByZXZpb3VzXG4gICAgICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfbGFzdE92ZXJDbGFzcyA9IGFjY2VwdHMgPyBvLmNsYXNzZXMub3ZlckFjY2VwdHMgOiBvLmNsYXNzZXMub3ZlckRlY2xpbmVzO1xuICAgICAgICAgIGFkZENsYXNzKHRhcmdldCwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICAgIF9sYXN0T3ZlckVsZW0gPSB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjZXB0cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICAgIGlmICghX21pcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIC8vIHVwZGF0ZSBjb29yZGluYXRlc1xuICAgICAgX2NsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgX2NsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuXG4gICAgICAvLyBjb3VudCBtaXJyb3IgY29vcmRpYXRlc1xuICAgICAgdmFyIHggPSBfY2xpZW50WCAtIF9vZmZzZXRYLFxuICAgICAgICB5ID0gX2NsaWVudFkgLSBfb2Zmc2V0WSxcbiAgICAgICAgcGFnZVgsXG4gICAgICAgIHBhZ2VZLFxuICAgICAgICBvZmZzZXRCb3g7XG5cbiAgICAgIC8vIGZpbGwgZXh0cmEgcHJvcGVydGllcyBpZiBib3VuZGluZ0JveCBpcyB1c2VkXG4gICAgICBpZiAoby5ib3VuZGluZ0JveCkge1xuICAgICAgICBwYWdlWCA9IGdldENvb3JkKCdwYWdlWCcsIGUpO1xuICAgICAgICBwYWdlWSA9IGdldENvb3JkKCdwYWdlWScsIGUpO1xuICAgICAgICBvZmZzZXRCb3ggPSBnZXRPZmZzZXQoby5ib3VuZGluZ0JveCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghby5sb2NrWSkge1xuICAgICAgICBpZiAoIW8uYm91bmRpbmdCb3ggfHwgKHBhZ2VYID4gb2Zmc2V0Qm94LmxlZnQgKyBfb2Zmc2V0WCAmJiBwYWdlWCA8IG9mZnNldEJveC5yaWdodCArIF9vZmZzZXRYcikpIHtcbiAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGNoZWNrIGFnYWluIGluIGNhc2UgdXNlciBzY3JvbGxlZCB0aGUgdmlld1xuICAgICAgICAgIGlmIChwYWdlWCA8IG9mZnNldEJveC5sZWZ0ICsgX29mZnNldFgpIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LmxlZnQpICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0gX2NsaWVudFggLSBfbWlycm9yV2lkdGggLSAocGFnZVggLSBvZmZzZXRCb3gucmlnaHQpICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghby5sb2NrWCkge1xuICAgICAgICBpZiAoIW8uYm91bmRpbmdCb3ggfHwgKHBhZ2VZID4gb2Zmc2V0Qm94LnRvcCArIF9vZmZzZXRZICYmIHBhZ2VZIDwgb2Zmc2V0Qm94LmJvdHRvbSArIF9vZmZzZXRZYikpIHtcbiAgICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKG8uYm91bmRpbmdCb3gpIHsgLy8gY2hlY2sgYWdhaW4gaW4gY2FzZSB1c2VyIHNjcm9sbGVkIHRoZSB2aWV3XG4gICAgICAgICAgaWYgKHBhZ2VZIDwgb2Zmc2V0Qm94LnRvcCArIF9vZmZzZXRZKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gKHBhZ2VZIC0gb2Zmc2V0Qm94LnRvcCkgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gX21pcnJvckhlaWdodCAtIChwYWdlWSAtIG9mZnNldEJveC5ib3R0b20pICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBfY2xpZW50WCwgX2NsaWVudFkpLFxuICAgICAgICBkcm9wVGFyZ2V0ID0gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgY2hhbmdlZCA9IGRyb3BUYXJnZXQgIT09IG51bGwgJiYgZHJvcFRhcmdldCAhPT0gX2xhc3REcm9wVGFyZ2V0O1xuXG4gICAgICBpZiAoY2hhbmdlZCB8fCBkcm9wVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgb3V0KCk7XG4gICAgICAgICAgX2xhc3REcm9wVGFyZ2V0ID0gZHJvcFRhcmdldDtcbiAgICAgICAgICBvdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2xhc3REcm9wVGFyZ2V0ID0gZHJvcFRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkbyBub3QgY29weSBpbiBzYW1lIGNvbnRhaW5lclxuICAgICAgaWYgKGRyb3BUYXJnZXQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwgJiYgaXRlbS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9IGVsc2UgaWYgKG8uY29udGFpbmVyc01vZGVsICYmIF9sYXN0VGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSAhPT0gLTEpIHtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsLnNwbGljZShfbGFzdFRhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCksIDEpO1xuICAgICAgICAgICRyb290U2NvcGUuJGFwcGx5QXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZWZlcmVuY2UsXG4gICAgICAgIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpLFxuICAgICAgICByZWZlcmVuY2VJbmRleDtcblxuICAgICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgaW1tZWRpYXRlLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuICAgICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBpZiAocmVmZXJlbmNlKSB7IC8vIHJlZmVyZW5jZSBpcyBudWxsIGlmIGRyYWcgaXMgb3ZlciBsYXN0IGVsZW1lbnRcbiAgICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gZG9tSW5kZXhPZihyZWZlcmVuY2UsIGRyb3BUYXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdHJ1ZSAmJiAhby5jb3B5KSB7XG4gICAgICAgIC8vIHRoZSBjYXNlIHRoYXQgbWlycm9yIGlzIG5vdCBvdmVyIHZhbGlkIHRhcmdldCBhbmQgcmV2ZXJ0aW5nIGlzIG9uIGFuZCBjb3B5IGlzIG9mZlxuICAgICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICAgIGRyb3BUYXJnZXQgPSBfc291cmNlO1xuXG4gICAgICAgIC8vIGdldHRpbmcgbW9kZWwgaW50aXRpYWwgcHJvcGVydGllcyBpbnRvIGN1cnJlbnRcbiAgICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfaW5pdGlhbEluZGV4O1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGUgY2FzZSB0aGF0IG1pcnJvciBpcyBub3Qgb3ZlciB2YWxpZCB0YXJnZXQgYW5kIHJlbW92aW5nIGlzIG9uIG9yIGNvcHkgaXMgb25cbiAgICAgICAgaWYgKChvLmNvcHkgfHwgby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSAmJiBpdGVtLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyByZW1vdmUgaXRlbSBvciBjb3B5IG9mIGl0ZW1cbiAgICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8XG4gICAgICAgIHJlZmVyZW5jZSAhPT0gaXRlbSAmJlxuICAgICAgICByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSAmJlxuICAgICAgICByZWZlcmVuY2UgIT09IF9jdXJyZW50U2libGluZykge1xuICAgICAgICAvLyBtb3ZpbmcgaXRlbS9jb3B5IHRvIG5ldyBjb250YWluZXIgZnJvbSBwcmV2aW91cyBvbmVcbiAgICAgICAgX2N1cnJlbnRTaWJsaW5nID0gcmVmZXJlbmNlO1xuXG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBkcm9wVGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCByZWZlcmVuY2UpOyAvLyBpZiByZWZlcmVuY2UgaXMgbnVsbCBpdGVtIGlzIGluc2VydGVkIGF0IHRoZSBlbmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwocmVmZXJlbmNlSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdzaGFkb3cnLCBpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtb3ZlZCh0eXBlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQodHlwZSwgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb3ZlcigpIHtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICBtb3ZlZCgnb3ZlcicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG91dCgpIHtcbiAgICAgICAgaWYgKF9sYXN0RHJvcFRhcmdldCkge1xuICAgICAgICAgIG1vdmVkKCdvdXQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVJbkNvbnRhaW5lcnNNb2RlbChyZWZlcmVuY2VJbmRleCkge1xuICAgICAgaWYgKF9sYXN0VGFyZ2V0TW9kZWwgPT09IF90YXJnZXRNb2RlbCkge1xuICAgICAgICBpZiAocmVmZXJlbmNlSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF90YXJnZXRNb2RlbC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gcmVmZXJlbmNlSW5kZXggPiBfY3VycmVudEluZGV4ID8gcmVmZXJlbmNlSW5kZXggLSAxIDogcmVmZXJlbmNlSW5kZXg7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UoaW5kZXgsIDAsIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpWzBdKTtcbiAgICAgICAgX2N1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlZmVyZW5jZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfdGFyZ2V0TW9kZWwubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW8uY29weSB8fCBfbGFzdFRhcmdldE1vZGVsICE9PSBfc291cmNlTW9kZWwpIHsgLy8gZG9udCByZW1vdmUgb3JpZ2luYWwgZnJvbSBzb3VyY2Ugd2hpbGUgY29weWluZ1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghby5jb3B5IHx8IF90YXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpID09PSAtMSkgeyAvLyBkb250IHBsYWNlIGNvcHkgdHdpY2UgaW4gb25lIGRyYWdcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAwLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwpO1xuICAgICAgICAgIF9jdXJyZW50SW5kZXggPSByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbENvbnRhaW5lcihlKSB7XG4gICAgICBpZiAoX3RhcmdldENvbnRhaW5lcikge1xuICAgICAgICBfdGFyZ2V0Q29udGFpbmVyLnNjcm9sbFRvcCArPSBlLmRlbHRhWTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF9taXJyb3IgPSBfaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBfbWlycm9yV2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgX21pcnJvckhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgX21pcnJvci5zdHlsZS53aWR0aCA9IGdldFJlY3RXaWR0aChyZWN0KSArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLmhlaWdodCA9IGdldFJlY3RIZWlnaHQocmVjdCkgKyAncHgnO1xuICAgICAgcm1DbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICBhZGRDbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMubWlycm9yKTtcbiAgICAgIG8ubWlycm9yQ29udGFpbmVyLmFwcGVuZENoaWxkKF9taXJyb3IpO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCAnb24nLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICBhZGRDbGFzcyhib2R5LCBvLmNsYXNzZXMudW5zZWxlY3RhYmxlKTtcbiAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvbicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfbWlycm9yLCBfaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWlycm9ySW1hZ2UoKSB7XG4gICAgICBpZiAoX21pcnJvcikge1xuICAgICAgICBybUNsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvZmYnLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvZmYnLCAnd2hlZWwnLCBzY3JvbGxDb250YWluZXIpO1xuICAgICAgICBfbWlycm9yLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX21pcnJvcik7XG4gICAgICAgIF9taXJyb3IgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIHRhcmdldCkge1xuICAgICAgdmFyIGltbWVkaWF0ZSA9IHRhcmdldDtcbiAgICAgIHdoaWxlIChpbW1lZGlhdGUgIT09IGRyb3BUYXJnZXQgJiYgaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQgIT09IGRyb3BUYXJnZXQpIHtcbiAgICAgICAgaW1tZWRpYXRlID0gaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAoaW1tZWRpYXRlID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW1tZWRpYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCB0YXJnZXQsIHgsIHkpIHtcbiAgICAgIHZhciBob3Jpem9udGFsID0gby5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgICAgIHZhciByZWZlcmVuY2UgPSB0YXJnZXQgIT09IGRyb3BUYXJnZXQgPyBpbnNpZGUoKSA6IG91dHNpZGUoKTtcbiAgICAgIHJldHVybiByZWZlcmVuY2U7XG5cbiAgICAgIGZ1bmN0aW9uIG91dHNpZGUoKSB7IC8vIHNsb3dlciwgYnV0IGFibGUgdG8gZmlndXJlIG91dCBhbnkgcG9zaXRpb25cbiAgICAgICAgdmFyIGxlbiA9IGRyb3BUYXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGVsO1xuICAgICAgICB2YXIgcmVjdDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgZWwgPSBkcm9wVGFyZ2V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiByZWN0LmxlZnQgPiB4KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiByZWN0LnRvcCA+IHkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGluc2lkZSgpIHsgLy8gZmFzdGVyLCBidXQgb25seSBhdmFpbGFibGUgaWYgZHJvcHBlZCBpbnNpZGUgYSBjaGlsZCBlbGVtZW50XG4gICAgICAgIHZhciByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHggPiByZWN0LmxlZnQgKyBnZXRSZWN0V2lkdGgocmVjdCkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh5ID4gcmVjdC50b3AgKyBnZXRSZWN0SGVpZ2h0KHJlY3QpIC8gMik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmUoYWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGFmdGVyID8gbmV4dEVsKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsKHNjcm9sbFByb3AsIG9mZnNldFByb3ApIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93W29mZnNldFByb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93W29mZnNldFByb3BdO1xuICAgICAgfVxuICAgICAgaWYgKGRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib2R5W3Njcm9sbFByb3BdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKCdzY3JvbGxUb3AnLCAncGFnZVlPZmZzZXQnKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbCgnc2Nyb2xsTGVmdCcsICdwYWdlWE9mZnNldCcpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tICsgc2Nyb2xsVG9wXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRCZWhpbmRQb2ludChwb2ludCwgeCwgeSkge1xuICAgICAgaWYgKCF4ICYmICF5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHAgPSBwb2ludCB8fCB7fSxcbiAgICAgICAgc3RhdGUgPSBwLmNsYXNzTmFtZSxcbiAgICAgICAgZWw7XG4gICAgICBwLmNsYXNzTmFtZSArPSAnICcgKyBvLmNsYXNzZXMuaGlkZTtcbiAgICAgIGVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgIHAuY2xhc3NOYW1lID0gc3RhdGU7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZ0V2ZW50KGVsLCBvcCwgdHlwZSwgZm4pIHtcbiAgICB2YXIgdG91Y2ggPSB7XG4gICAgICAgIG1vdXNldXA6ICd0b3VjaGVuZCcsXG4gICAgICAgIG1vdXNlZG93bjogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3VzZW1vdmU6ICd0b3VjaG1vdmUnLFxuICAgICAgICB3aGVlbDogJ3doZWVsJ1xuICAgICAgfSxcbiAgICAgICRlbCA9IGFuZ3VsYXIuZWxlbWVudChlbCk7XG5cbiAgICAkZWxbb3BdKHRvdWNoW3R5cGVdLCBmbik7XG4gICAgJGVsW29wXSh0eXBlLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXZlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0RWwoZWwpIHtcbiAgICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG5cbiAgICBmdW5jdGlvbiBtYW51YWxseSgpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgICBkbyB7XG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vQ2Fubm90IHVzZSBhbmd1bGFyLmlzRWxlbWVudCBiZWNhdXNlIHdlIG5lZWQgdG8gY2hlY2sgcGxhaW4gZG9tIGVsZW1lbnQsIG5vIGpRbGl0ZSB3cmFwcGVkXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcbiAgICAgIG8gJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9va3VwQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNhY2hlZCA9IF9jYWNoZVtjbGFzc05hbWVdO1xuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIGNhY2hlZC5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBfY2FjaGVbY2xhc3NOYW1lXSA9IGNhY2hlZCA9IG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMpJyArIGNsYXNzTmFtZSArICcoPzpcXFxcc3wkKScsICdnJyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBlbC5jbGFzc05hbWU7XG4gICAgaWYgKCFjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoIWxvb2t1cENsYXNzKGNsYXNzTmFtZSkudGVzdChjdXJyZW50KSkge1xuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBybUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShsb29rdXBDbGFzcyhjbGFzc05hbWUpLCAnICcpLnRyaW0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudEhvc3QoZSkge1xuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgICB2YXIgbWlzc01hcCA9IHtcbiAgICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgICB9O1xuICAgIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RbY29vcmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdFdpZHRoKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0SGVpZ2h0KHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgfHwgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9tSW5kZXhPZihjaGlsZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYW5ndWxhci5lbGVtZW50KHBhcmVudCkuY2hpbGRyZW4oKSwgY2hpbGQpO1xuICB9XG5cbn1dKTtcbiJdfQ==
