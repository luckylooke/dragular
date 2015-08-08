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
$templateCache.put("exampleScrollingDrag/exampleScrollingDrag.html","<div class=\'parent\'>\n    <h2>Scrolling drag</h2>\n    <label for=\'hy\'> Containre can be scrolled by hovering dragged item over most top visible item or most bottom, scroll direction respectively or by using mouse wheel during drag. <b>NOT FINISHED CHECK ISSUE #14!</b>\n    </label>\n    <div ng-controller=\"ScrollingDrag\">\n        <div class=\"containerVertical scrollingDrag\">\n            <div>Item 1</div>\n            <div>Item 2</div>\n            <div>Item 3.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n            <div>Item 6.</div>\n            <div>Item 7.</div>\n            <div>Item 9.</div>\n            <div>Item 10.</div>\n            <div>Item 11.</div>\n            <div>Item 12.</div>\n            <div>Item 13.</div>\n        </div>\n        <div class=\"containerVertical scrollingDrag\">\n            <div>Item 1</div>\n            <div>Item 2</div>\n            <div>Item 3.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n            <div>Item 6.</div>\n            <div>Item 7.</div>\n            <div>Item 9.</div>\n            <div>Item 10.</div>\n            <div>Item 11.</div>\n            <div>Item 12.</div>\n            <div>Item 13.</div>\n        </div>\n    </div>\n</div>\n");
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUJhc2ljV2l0aE1vZGVsL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveC9leGFtcGxlQm91bmRpbmdCb3guanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC9leGFtcGxlQm91bmRpbmdCb3hMb2NrWC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmVzdGVkTmdSZXBlYXQvZXhhbXBsZU5lc3RlZE5nUmVwZWF0LmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlUmV2ZXJ0T25TcGlsbC9leGFtcGxlUmV2ZXJ0T25TcGlsbC5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL2V4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmpzIiwiL2hvbWUvY3RpYm9yL3Byb2plY3RzL2FkbWlubW9kZS9ub2RlX21vZHVsZXMvZHJhZ3VsYXIvZG9jcy9zcmMvZXhhbXBsZXMvZXhhbXBsZXNBcHAuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9kb2NzL3NyYy9leGFtcGxlcy9leGFtcGxlc1JvdXRlci5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL2RvY3Mvc3JjL2V4YW1wbGVzL3RlbXBsYXRlcy5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhckRpcmVjdGl2ZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhck1vZHVsZS5qcyIsIi9ob21lL2N0aWJvci9wcm9qZWN0cy9hZG1pbm1vZGUvbm9kZV9tb2R1bGVzL2RyYWd1bGFyL3NyYy9kcmFndWxhclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLG9CQUFvQixRQUFROzs7Ozs7QUFNaEM7R0FDRyxXQUFXLFNBQVMsQ0FBQyxZQUFZLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxpQkFBaUI7SUFDaEcsZ0JBQWdCLFNBQVM7TUFDdkI7OztBQ1hOOztBQUVBLElBQUksb0JBQW9CLFFBQVE7Ozs7OztBQU1oQztHQUNHLFdBQVcsU0FBUyxDQUFDLFlBQVksbUJBQW1CLFNBQVMsU0FBUyxVQUFVLGlCQUFpQjtJQUNoRyxnQkFBZ0IsU0FBUzs7O0FBRzdCO0dBQ0csV0FBVyxjQUFjLENBQUMsVUFBVSxZQUFZLG1CQUFtQixTQUFTLFNBQVMsUUFBUSxVQUFVLGlCQUFpQjtJQUN2SCxPQUFPLFNBQVMsQ0FBQztNQUNmLFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7T0FDUjtNQUNELFNBQVM7O0lBRVgsT0FBTyxTQUFTLENBQUM7TUFDZixTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTO09BQ1I7TUFDRCxTQUFTOztJQUVYLElBQUksYUFBYSxTQUFTLFdBQVcsR0FBRyxHQUFHO0lBQzNDLGdCQUFnQixDQUFDLFdB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Ozs7O0FBSTVFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0Jhc2ljJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQmFzaWMnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSk7XG4gIH1dKTtcblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0Jhc2ljTW9kZWwnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdNb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XG4gICAgICBjb250ZW50OiAnSXRlbSA1J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDYnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNydcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA4J1xuICAgIH1dO1xuICAgIHZhciBjb250YWluZXJzID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpO1xuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdCb3VuZGluZ0JveCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIHZhciBib3VuZGluZ0JveCA9ICRlbGVtZW50WzBdO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBib3VuZGluZ0JveDogYm91bmRpbmdCb3hcbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQm91bmRpbmdCb3hMb2NrWCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIHZhciBib3VuZGluZ0JveCA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKVswXTtcbiAgICBkcmFndWxhclNlcnZpY2UoYm91bmRpbmdCb3gsIHtcbiAgICAgIGJvdW5kaW5nQm94OiBib3VuZGluZ0JveCxcbiAgICAgIGxvY2tYOiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0JvdW5kaW5nQm94TG9ja1knLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKClbMF07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKGJvdW5kaW5nQm94LCB7XG4gICAgICBib3VuZGluZ0JveDogYm91bmRpbmdCb3gsXG4gICAgICBsb2NrWTogdHJ1ZVxuICAgIH0pO1xuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignQ29weScsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICBjb3B5OiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ0NvcHlNb2RlbCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICRzY29wZS5pdGVtczEgPSBbe1xuICAgICAgY29udGVudDogJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDMnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNCdcbiAgICB9XTtcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDUnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA3J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDgnXG4gICAgfV07XG4gICAgdmFyIGNvbnRhaW5lcnMgPSAkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCk7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogWyRzY29wZS5pdGVtczEsICRzY29wZS5pdGVtczJdLFxuICAgICAgY29weTogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdDdXN0b21DbGFzc2VzJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbWlycm9yOiAnY3VzdG9tLWdyZWVuLW1pcnJvcidcbiAgICAgIH1cbiAgICB9KTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdEaXJlY3RpdmUnLCBbJyRzY29wZScsIGZ1bmN0aW9uIERpcmVjdGl2ZUN0cmwoJHNjb3BlKSB7XG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbWlycm9yOiAnY3VzdG9tLWdyZWVuLW1pcnJvcidcbiAgICAgIH0sXG4gICAgICBuYW1lU3BhY2U6ICdzYW1lJyAvLyBqdXN0IGNvbm5lY3RpbmcgbGVmdCBhbmQgcmlnaHQgY29udGFpbmVyXG4gICAgfTtcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignRGlyZWN0aXZlTW9kZWwnLCBbJyRzY29wZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSkge1xuICAgICRzY29wZS5pdGVtczEgPSBbe1xuICAgICAgY29udGVudDogJ01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDMnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNCdcbiAgICB9XTtcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDUnXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gNidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSA3J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDgnXG4gICAgfV07XG4gICAgJHNjb3BlLmRyYWd1bGFyT3B0aW9ucyA9IHtcbiAgICAgIGNvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zMSxcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbWlycm9yOiAnY3VzdG9tLWdyZWVuLW1pcnJvcidcbiAgICAgIH0sXG4gICAgICBuYW1lU3BhY2U6ICdjb21tb24nIC8vIGp1c3QgY29ubmVjdGluZyBsZWZ0IGFuZCByaWdodCBjb250YWluZXJcbiAgICB9O1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gLmNvbnRyb2xsZXIoJ0RyYWdPdmVyQ2xhc3NlcycsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcbiAgICAgIG5hbWVTcGFjZTogJ2FwcGxlcycsXG4gICAgICBkcmFnT3ZlckNsYXNzZXM6IHRydWVcbiAgICB9KTtcbiAgICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMV0sICRlbGVtZW50LmNoaWxkcmVuKClbM11dLCB7XG4gICAgICBuYW1lU3BhY2U6ICdvcmFuZ2VzJyxcbiAgICAgIGRyYWdPdmVyQ2xhc3NlczogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdFdmVudHMnLCBbJyRzY29wZScsICckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UsICR0aW1lb3V0KSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICB9KTtcbiAgICAkc2NvcGUuJG9uKCdkcmFnJywgZnVuY3Rpb24oZSwgZWwpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZSgnIGV4LW1vdmVkJywgJycpO1xuICAgIH0pO1xuICAgICRzY29wZS4kb24oJ2Ryb3AnLCBmdW5jdGlvbihlLCBlbCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyBleC1tb3ZlZCc7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIC8vICRzY29wZS4kb24oJ2Nsb25lZCcsIG15Rm4oJ2Nsb25lZCcpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdkcmFnJywgbXlGbignZHJhZycpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdjYW5jZWwnLCBteUZuKCdjYW5jZWwnKSk7XG4gICAgLy8gJHNjb3BlLiRvbignZHJvcCcsIG15Rm4oJ2Ryb3AnKSk7XG4gICAgLy8gJHNjb3BlLiRvbigncmVtb3ZlJywgbXlGbigncmVtb3ZlJykpO1xuICAgIC8vICRzY29wZS4kb24oJ2RyYWdlbmQnLCBteUZuKCdkcmFnZW5kJykpO1xuICAgIC8vICRzY29wZS4kb24oJ3NoYWRvdycsIG15Rm4oJ3NoYWRvdycpKTtcbiAgICAvLyAkc2NvcGUuJG9uKCdzaGFkb3dSZW1vdmVkJywgbXlGbignc2hhZG93JykpO1xuXG4gICAgLy8gZnVuY3Rpb24gbXlGbihldmVudE5hbWUpIHtcbiAgICAvLyAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXZlbnROYW1lLCBhcmd1bWVudHMpO1xuICAgIC8vICAgfTtcbiAgICAvLyB9XG5cbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignSGFuZGxlJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc05hbWUgPT09ICdoYW5kbGUnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOYW1lU3BhY2VzJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLCAkZWxlbWVudC5jaGlsZHJlbigpWzJdXSwge1xuICAgICAgbmFtZVNwYWNlOiAnYXBwbGVzJ1xuICAgIH0pO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzFdLCB7XG4gICAgICBuYW1lU3BhY2U6ICdvcmFuZ2VzJ1xuICAgIH0pO1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpWzNdLCB7IC8vIG1peGVkXG4gICAgICBuYW1lU3BhY2U6IFsnb3JhbmdlcycsICdhcHBsZXMnXVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZXN0ZWROZ1JlcGVhdCcsIFsnJHRpbWVvdXQnLCAnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCR0aW1lb3V0LCAkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5nUmVwZWF0IHRvIGJlIHJlYWR5XG4gICAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQsIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3ctaGFuZGxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCksIHtcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xuICAgICAgICAgIHJldHVybiAhaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucygncm93LWhhbmRsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGExJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGE0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjQnXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjNCdcbiAgICAgIH1dXG4gICAgfV07XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ05lc3RlZE5nUmVwZWF0V2l0aE1vZGVsJywgWyckdGltZW91dCcsICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHRpbWVvdXQsICRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyB0aW1lb3VudCBkdWUgdG8gbmVzdGVkIG5nUmVwZWF0IHRvIGJlIHJlYWR5XG4gICAgICB2YXIgY29udGFpbmVyID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5lcSgwKS5jaGlsZHJlbigpLFxuICAgICAgICBwYXJlbnRDb250YWluZXJzID0gY29udGFpbmVyLmNoaWxkcmVuKCksXG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMgPSBbXTtcblxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGNvbnRhaW5lciwge1xuICAgICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXNcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb2xsZWN0IG5lc3RlZCBjb250aWFuZXJzXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudENvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmVzdGVkQ29udGFpbmVycy5wdXNoKHBhcmVudENvbnRhaW5lcnMuZXEoaSkuY2hpbGRyZW4oKVsxXSk7XG4gICAgICB9XG5cbiAgICAgIGRyYWd1bGFyU2VydmljZShuZXN0ZWRDb250YWluZXJzLCB7XG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICByZXR1cm4gIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1oYW5kbGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiAoZnVuY3Rpb24gZ2V0TmVzdGVkQ29udGFpbmVyc01vZGVsKCl7XG4gICAgICAgICAgdmFyIHBhcmVudCA9ICRzY29wZS5pdGVtcyxcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbCA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250YWluZXJzTW9kZWwucHVzaChwYXJlbnRbaV0uaXRlbXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyc01vZGVsO1xuICAgICAgICB9KSgpXG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGExJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBhMidcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYTMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGE0J1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGIyJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBiMydcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYjQnXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjMSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29udGVudDogJ0l0ZW0gYzInXG4gICAgICB9LCB7XG4gICAgICAgIGNvbnRlbnQ6ICdJdGVtIGMzJ1xuICAgICAgfSwge1xuICAgICAgICBjb250ZW50OiAnSXRlbSBjNCdcbiAgICAgIH1dXG4gICAgfV07XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ05nUmVwZWF0JywgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICAgICRzY29wZS5pdGVtcyA9IFt7XG4gICAgICBjb250ZW50OiAnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgJy1jb3B5J1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oKSB7XG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdOZ1JlcGVhdFdpdGhNb2RlbCcsIFsnJHNjb3BlJywgJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgICRzY29wZS5pdGVtcyA9IFt7XG4gICAgICBjb250ZW50OiAnVHJ5IHRvIGFkZCBvciByZW1vdmUgc29tZSBlbGVtZW50cyAoY2xpY2sgb24gKy0gYnV0dG9ucyksIHlvdSB3aWxsIHNlZSB0aGF0IGl0IGlzIG5vdCBwcm9ibGVtIGZvciBkcmFndWxhci4nXG4gICAgfSwge1xuICAgICAgY29udGVudDogJ0l0ZW0gMidcbiAgICB9LCB7XG4gICAgICBjb250ZW50OiAnSXRlbSAzJ1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6ICdJdGVtIDQnXG4gICAgfV07XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSwge2NvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zfSk7XG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKCkge1xuICAgICAgdmFyIGluZGV4ID0gJHNjb3BlLml0ZW1zLmluZGV4T2YodGhpcy5pdGVtKSArIDE7XG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuaXRlbS5jb250ZW50ICsgJy1jb3B5J1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oKSB7XG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xuICAgICAgJHNjb3BlLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXhhbXBsZXNBcHBNb2R1bGUgPSByZXF1aXJlKCcuLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5leGFtcGxlc0FwcE1vZHVsZVxuICAuY29udHJvbGxlcignUmVtb3ZlT25TcGlsbCcsIFsnJGVsZW1lbnQnLCAnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpLCB7XG4gICAgICByZW1vdmVPblNwaWxsOiB0cnVlXG4gICAgfSk7XG4gIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXNBcHAnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZXhhbXBsZXNBcHBNb2R1bGVcbiAgLmNvbnRyb2xsZXIoJ1JldmVydE9uU3BpbGwnLCBbJyRlbGVtZW50JywgJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIFRvZG9DdHJsKCRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xuICAgICAgcmV2ZXJ0T25TcGlsbDogdHJ1ZVxuICAgIH0pO1xuICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleGFtcGxlc0FwcE1vZHVsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzQXBwJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb250cm9sbGVyKCdTY3JvbGxpbmdEcmFnJywgWyckZWxlbWVudCcsICdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkpO1xuICB9XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciwgaGxqcyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyB2YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcblxuXG5yZXF1aXJlKCcuLi8uLi8uLi9zcmMvZHJhZ3VsYXJNb2R1bGUnKTtcbnJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5cbi8qKlxuICogIE1vZHVsZSBFeGFtcGxlIEFwcFxuICpcbiAqICBERU1PIGFwcCBmb3IgZHJhZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXJcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdleGFtcGxlc0FwcCcsIFsnZHJhZ3VsYXJNb2R1bGUnLCAndGVtcGxhdGVzJywgJ3VpLnJvdXRlciddKS5jb250cm9sbGVyKCdFeEFwcEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5leGFtcGxlc0xpc3QgPSBbe1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCYXNpYy9leGFtcGxlQmFzaWMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQmFzaWMnLFxuICAgICAgICB0aXRsZTogJ0Jhc2ljJ1xuICAgIH0se1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCYXNpY1dpdGhNb2RlbC9leGFtcGxlQmFzaWNXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlQmFzaWNXaXRoTW9kZWwnLFxuICAgICAgICB0aXRsZTogJ0Jhc2ljIC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZURpcmVjdGl2ZS9leGFtcGxlRGlyZWN0aXZlLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZURpcmVjdGl2ZScsXG4gICAgICAgIHRpdGxlOiAnRGlyZWN0aXZlJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsL2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICdEaXJlY3RpdmUgLSB3aXRoIG1vZGVsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlRXZlbnRzL2V4YW1wbGVFdmVudHMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlRXZlbnRzJyxcbiAgICAgICAgdGl0bGU6ICdFdmVudHMnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVSZW1vdmVPblNwaWxsL2V4YW1wbGVSZW1vdmVPblNwaWxsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZVJlbW92ZU9uU3BpbGwnLFxuICAgICAgICB0aXRsZTogJ1JlbW92ZSBvbiBzcGlsbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZVJldmVydE9uU3BpbGwvZXhhbXBsZVJldmVydE9uU3BpbGwuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlUmV2ZXJ0T25TcGlsbCcsXG4gICAgICAgIHRpdGxlOiAnUmV2ZXJ0IG9uIHNwaWxsJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQ29weS9leGFtcGxlQ29weS5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVDb3B5JyxcbiAgICAgICAgdGl0bGU6ICdDb3B5J1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQ29weVdpdGhNb2RlbC9leGFtcGxlQ29weVdpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVDb3B5V2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICdDb3B5IC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUhhbmRsZS9leGFtcGxlSGFuZGxlLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUhhbmRsZScsXG4gICAgICAgIHRpdGxlOiAnSGFuZGxlJ1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlQ3VzdG9tQ2xhc3Nlcy9leGFtcGxlQ3VzdG9tQ2xhc3Nlcy5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVDdXN0b21DbGFzc2VzJyxcbiAgICAgICAgdGl0bGU6ICdDdXN0b20gY2xhc3NlcydcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5hbWVTcGFjZXMvZXhhbXBsZU5hbWVTcGFjZXMuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmFtZVNwYWNlcycsXG4gICAgICAgIHRpdGxlOiAnTmFtZVNwYWNlcydcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZURyYWdPdmVyQ2xhc3NlcycsXG4gICAgICAgIHRpdGxlOiAnRHJhZ092ZXIgY2xhc3NlcydcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZUJvdW5kaW5nQm94L2V4YW1wbGVCb3VuZGluZ0JveC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVCb3VuZGluZ0JveCcsXG4gICAgICAgIHRpdGxlOiAnQm91bmRpbmdCb3gnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCb3VuZGluZ0JveExvY2tYL2V4YW1wbGVCb3VuZGluZ0JveExvY2tYLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1gnLFxuICAgICAgICB0aXRsZTogJ0JvdW5kaW5nQm94ICsgTG9ja1gnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZUJvdW5kaW5nQm94TG9ja1knLFxuICAgICAgICB0aXRsZTogJ0JvdW5kaW5nQm94ICsgTG9ja1knXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOZ1JlcGVhdC9leGFtcGxlTmdSZXBlYXQuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmdSZXBlYXQnLFxuICAgICAgICB0aXRsZTogJ25nUmVwZWF0J1xuICAgIH0sIHtcbiAgICAgICAgdGVtcGxhdGU6ICdleGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsLmh0bWwnLFxuICAgICAgICBsaW5rOiAnZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsJyxcbiAgICAgICAgdGl0bGU6ICduZ1JlcGVhdCAtIHdpdGggbW9kZWwnXG4gICAgfSwge1xuICAgICAgICB0ZW1wbGF0ZTogJ2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC9leGFtcGxlTmVzdGVkTmdSZXBlYXQuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlTmVzdGVkTmdSZXBlYXQnLFxuICAgICAgICB0aXRsZTogJ05lc3RlZCBuZ1JlcGVhZCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5odG1sJyxcbiAgICAgICAgbGluazogJ2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbCcsXG4gICAgICAgIHRpdGxlOiAnTmVzdGVkIG5nUmVwZWFkIC0gd2l0aCBtb2RlbCdcbiAgICB9LCB7XG4gICAgICAgIHRlbXBsYXRlOiAnZXhhbXBsZVNjcm9sbGluZ0RyYWcvZXhhbXBsZVNjcm9sbGluZ0RyYWcuaHRtbCcsXG4gICAgICAgIGxpbms6ICdleGFtcGxlU2Nyb2xsaW5nRHJhZycsXG4gICAgICAgIHRpdGxlOiAnU2Nyb2xsaW5nIGRyYWcnXG4gICAgfV07XG5cbiAgICAvLyBkZWZhdWx0IHRlbXBsYXRlIGxvYWRlZCBmaXJzdCB0aW1lXG4gICAgJHNjb3BlLmV4YW1wbGVUZW1wbGF0ZSA9ICdleGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmh0bWwnO1xuXG4gICAgJHNjb3BlLmhpZ2hsaWdodENvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjb2RlJykubGVuZ3RoKXtcbiAgICAgICAgICAgIHZhciBjb2RlQmxvY2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvZGUnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjb2RlQmxvY2tzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayhjb2RlQmxvY2tzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcm93T2ZmY2FudmFzID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3dPZmZjYW52YXMnKSk7XG4gICAgJHNjb3BlLnRvZ2dsZVNpZGViYXIgPSBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyICgpIHtcbiAgICAgICAgcm93T2ZmY2FudmFzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9O1xuXG59XSk7XG5cbih7XCJleGFtcGxlQmFzaWNcIjooe1wiZXhhbXBsZUJhc2ljXCI6cmVxdWlyZShcIi4vZXhhbXBsZUJhc2ljL2V4YW1wbGVCYXNpYy5qc1wiKX0pLFwiZXhhbXBsZUJhc2ljV2l0aE1vZGVsXCI6KHtcImV4YW1wbGVCYXNpY1dpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVCYXNpY1dpdGhNb2RlbC9leGFtcGxlQmFzaWNXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVCb3VuZGluZ0JveFwiOih7XCJleGFtcGxlQm91bmRpbmdCb3hcIjpyZXF1aXJlKFwiLi9leGFtcGxlQm91bmRpbmdCb3gvZXhhbXBsZUJvdW5kaW5nQm94LmpzXCIpfSksXCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWFwiOih7XCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVCb3VuZGluZ0JveExvY2tYL2V4YW1wbGVCb3VuZGluZ0JveExvY2tYLmpzXCIpfSksXCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWVwiOih7XCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWVwiOnJlcXVpcmUoXCIuL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZL2V4YW1wbGVCb3VuZGluZ0JveExvY2tZLmpzXCIpfSksXCJleGFtcGxlQ29weVwiOih7XCJleGFtcGxlQ29weVwiOnJlcXVpcmUoXCIuL2V4YW1wbGVDb3B5L2V4YW1wbGVDb3B5LmpzXCIpfSksXCJleGFtcGxlQ29weVdpdGhNb2RlbFwiOih7XCJleGFtcGxlQ29weVdpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVDb3B5V2l0aE1vZGVsL2V4YW1wbGVDb3B5V2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlQ3VzdG9tQ2xhc3Nlc1wiOih7XCJleGFtcGxlQ3VzdG9tQ2xhc3Nlc1wiOnJlcXVpcmUoXCIuL2V4YW1wbGVDdXN0b21DbGFzc2VzL2V4YW1wbGVDdXN0b21DbGFzc2VzLmpzXCIpfSksXCJleGFtcGxlRGlyZWN0aXZlXCI6KHtcImV4YW1wbGVEaXJlY3RpdmVcIjpyZXF1aXJlKFwiLi9leGFtcGxlRGlyZWN0aXZlL2V4YW1wbGVEaXJlY3RpdmUuanNcIil9KSxcImV4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWxcIjooe1wiZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVEaXJlY3RpdmVXaXRoTW9kZWwvZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC5qc1wiKX0pLFwiZXhhbXBsZURyYWdPdmVyQ2xhc3Nlc1wiOih7XCJleGFtcGxlRHJhZ092ZXJDbGFzc2VzXCI6cmVxdWlyZShcIi4vZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy9leGFtcGxlRHJhZ092ZXJDbGFzc2VzLmpzXCIpfSksXCJleGFtcGxlRXZlbnRzXCI6KHtcImV4YW1wbGVFdmVudHNcIjpyZXF1aXJlKFwiLi9leGFtcGxlRXZlbnRzL2V4YW1wbGVFdmVudHMuanNcIil9KSxcImV4YW1wbGVIYW5kbGVcIjooe1wiZXhhbXBsZUhhbmRsZVwiOnJlcXVpcmUoXCIuL2V4YW1wbGVIYW5kbGUvZXhhbXBsZUhhbmRsZS5qc1wiKX0pLFwiZXhhbXBsZU5hbWVTcGFjZXNcIjooe1wiZXhhbXBsZU5hbWVTcGFjZXNcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmFtZVNwYWNlcy9leGFtcGxlTmFtZVNwYWNlcy5qc1wiKX0pLFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0XCI6KHtcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC9leGFtcGxlTmVzdGVkTmdSZXBlYXQuanNcIil9KSxcImV4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbFwiOih7XCJleGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWxcIjpyZXF1aXJlKFwiLi9leGFtcGxlTmVzdGVkTmdSZXBlYXRXaXRoTW9kZWwvZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsLmpzXCIpfSksXCJleGFtcGxlTmdSZXBlYXRcIjooe1wiZXhhbXBsZU5nUmVwZWF0XCI6cmVxdWlyZShcIi4vZXhhbXBsZU5nUmVwZWF0L2V4YW1wbGVOZ1JlcGVhdC5qc1wiKX0pLFwiZXhhbXBsZU5nUmVwZWF0V2l0aE1vZGVsXCI6KHtcImV4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbFwiOnJlcXVpcmUoXCIuL2V4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwuanNcIil9KSxcImV4YW1wbGVSZW1vdmVPblNwaWxsXCI6KHtcImV4YW1wbGVSZW1vdmVPblNwaWxsXCI6cmVxdWlyZShcIi4vZXhhbXBsZVJlbW92ZU9uU3BpbGwvZXhhbXBsZVJlbW92ZU9uU3BpbGwuanNcIil9KSxcImV4YW1wbGVSZXZlcnRPblNwaWxsXCI6KHtcImV4YW1wbGVSZXZlcnRPblNwaWxsXCI6cmVxdWlyZShcIi4vZXhhbXBsZVJldmVydE9uU3BpbGwvZXhhbXBsZVJldmVydE9uU3BpbGwuanNcIil9KSxcImV4YW1wbGVTY3JvbGxpbmdEcmFnXCI6KHtcImV4YW1wbGVTY3JvbGxpbmdEcmFnXCI6cmVxdWlyZShcIi4vZXhhbXBsZVNjcm9sbGluZ0RyYWcvZXhhbXBsZVNjcm9sbGluZ0RyYWcuanNcIil9KSxcImV4YW1wbGVzUm91dGVyXCI6cmVxdWlyZShcIi4vZXhhbXBsZXNSb3V0ZXIuanNcIiksXCJ0ZW1wbGF0ZXNcIjpyZXF1aXJlKFwiLi90ZW1wbGF0ZXMuanNcIil9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4YW1wbGVzQXBwTW9kdWxlID0gcmVxdWlyZSgnLi9leGFtcGxlc0FwcCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmV4YW1wbGVzQXBwTW9kdWxlXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9ob21lJyk7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvcGFydGlhbC1ob21lLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdkb2NzJywge1xuICAgICAgICB1cmw6ICcvZG9jcycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvcGFydGlhbC1kb2NzLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHN0YXRlKSB7XG4gICAgICAgICAgLy8gZ28gdG8gaW5zdGFsbCBub3RlcyBieSBkZWZhdWx0XG4gICAgICAgICAgJHN0YXRlLmdvKCdkb2NzLmRldGFpbCcsIHtsaW5rOiAnZXhhbXBsZVNjcm9sbGluZ0RyYWcnfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2RvY3MuZGV0YWlsJywge1xuICAgICAgICB1cmw6ICcvOmxpbmsnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24oJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgcmV0dXJuICRzdGF0ZVBhcmFtcy5saW5rICsgJy8nICsgJHN0YXRlUGFyYW1zLmxpbmsgKyAnLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250cmlidXRlJywge1xuICAgICAgICB1cmw6ICcvY29udHJpYnV0ZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvcGFydGlhbC1jb250cmlidXRlLmh0bWwnXG4gICAgICB9KTtcbiAgfSk7XG4iLCIndXNlIHN0cmljdCc7IG1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImRvY3NJbnN0YWxsL2RvY3NJbnN0YWxsLmh0bWxcIixcIjxoMj5JbnN0YWxsPC9oMj5cXG48cD5kb3dubG9hZCBkcmFndWxhci5qcyBhbmQgZHJhZ3VsYXIuY3NzIGZyb20gZGlzdCBmb2xkZXI8L3A+XFxuPHA+T1IgY2xvbmUgZ2l0PC9wPlxcbjxwcmU+PGNvZGU+XFxuZ2l0IGNsb25lIGh0dHA6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXIuZ2l0XFxuPC9jb2RlPjwvcHJlPlxcbjxwPk9SIHVzZSBucG08L3A+XFxuPHByZT48Y29kZT5cXG5bc3Vkb10gbnBtIGluc3RhbGwgZHJhZ3VsYXJcXG48L2NvZGU+PC9wcmU+XFxuPHA+T1IgdXNlIGJvd2VyPC9wPlxcbjxwcmU+PGNvZGU+XFxuYm93ZXIgaW5zdGFsbCBkcmFndWxhclxcbjwvY29kZT48L3ByZT5cXG48cD5BTkQgaW5jbHVkZSBmaWxlcyBpbnRvIHlvdXIgcHJvamVjdDwvcD5cXG48cHJlPjxjb2RlPlxcbiZsdDtsaW5rIGhyZWY9XFwnc3R5bGVzL2RyYWd1bGFyLmNzc1xcJyByZWw9XFwnc3R5bGVzaGVldFxcJyB0eXBlPVxcJ3RleHQvY3NzXFwnIC8mZ3Q7XFxuJmx0O3NjcmlwdCBzcmM9XFwnc2NyaXB0cy9kcmFndWxhci5qc1xcJyZndDsmbHQ7L3NjcmlwdCZndDtcXG48L2NvZGU+PC9wcmU+XFxuPHA+QU5EIHB1dCBkcmFndWxhck1vZHVsZSBpbnRvIGRlcGVuZGVuY3kgYXJyYXk8L3A+XFxuPHByZT48Y29kZT5cXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoXFwnbXlBcHBcXCcsIFtcXCdkcmFndWxhck1vZHVsZVxcJywgXFwnb3RoZXJEZXBlbmRlbmNpZXNcXCddKTtcXG48L2NvZGU+PC9wcmU+XFxuPHA+RE9ORSA6KTwvcD5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQmFzaWMvZXhhbXBsZUJhc2ljLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkJhc2ljPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+TW92ZSBzdHVmZiBiZXR3ZWVuIHRoZXNlIHR3byBjb250YWluZXJzLiBOb3RlIGhvdyB0aGUgc3R1ZmYgZ2V0cyBpbnNlcnRlZCBuZWFyIHRoZSBtb3VzZSBwb2ludGVyPyBHcmVhdCBzdHVmZi48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJhc2ljXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnQmFzaWNcXCcsIFtcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcXG4gIH1dKVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7QmFzaWMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2Jmd0O01vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy4mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay4mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbSAzLiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDYuJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtZb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS4mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbSA0LiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtIDUuJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCYXNpY1dpdGhNb2RlbC9leGFtcGxlQmFzaWNXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+QmFzaWMgLSB3aXRoIG1vZGVsPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+TW92ZSBzdHVmZiBiZXR3ZWVuIHRoZXNlIHR3byBjb250YWluZXJzLiBOb3RlIGhvdyB0aGUgc3R1ZmYgZ2V0cyBpbnNlcnRlZCBuZWFyIHRoZSBtb3VzZSBwb2ludGVyPyBHcmVhdCBzdHVmZi48L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9XFxcIkJhc2ljTW9kZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczFcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMyXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxwcmU+SXRlbXMxOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMxIHwganNvbn19PC9wcmU+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxwcmU+SXRlbXMyOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMyIHwganNvbn19PC9wcmU+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnQmFzaWNNb2RlbFxcJywgW1xcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHNjb3BlLCAkZWxlbWVudCwgZHJhZ3VsYXJTZXJ2aWNlKSB7XFxuICAgICRzY29wZS5pdGVtczEgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ01vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFxcXFxcJ2xsIGp1c3QgY29tZSBiYWNrLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDRcXCdcXG4gICAgfV07XFxuICAgICRzY29wZS5pdGVtczIgPSBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA2XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDdcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gOFxcJ1xcbiAgICB9XTtcXG4gICAgdmFyIGNvbnRhaW5lcnMgPSAkZWxlbWVudC5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XFxuICAgIGRyYWd1bGFyU2VydmljZShbY29udGFpbmVyc1swXSxjb250YWluZXJzWzFdXSx7XFxuICAgICAgY29udGFpbmVyc01vZGVsOiBbJHNjb3BlLml0ZW1zMSwgJHNjb3BlLml0ZW1zMl1cXG4gICAgfSk7XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtCYXNpYyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJyZndDtcXG4gICAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczEmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMyJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz0mcXVvdDt0YWJsZVJvdyZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICZsdDtkaXYmZ3Q7SXRlbXMxOlxcbiAgICAgICAgICAgICAgICAmbHQ7YnIvJmd0O3t7aXRlbXMxIHwganNvbn19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICZsdDtkaXYmZ3Q7SXRlbXMyOlxcbiAgICAgICAgICAgICAgICAmbHQ7YnIvJmd0O3t7aXRlbXMyIHwganNvbn19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUJvdW5kaW5nQm94L2V4YW1wbGVCb3VuZGluZ0JveC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5Cb3VuZGluZ0JveDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Zb3UgY2FuIHByb3ZpZGUgZWxlbWVudCBpbiBvcHRpb25zLmJvdW5kaW5nQm94IHRvIGxpbWl0IGNyb3NzaW5nIGVsZW1lbnQgYm9yZGVycy48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCb3VuZGluZ0JveFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXRlbXMgY2Fubm90IGNyb3NzIGl0cyBleGFtcGxlIGVsZW1lbnQsIGp1c3QgdHJ5IGl0IHlvdXIgc2VsdmVzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDIuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBpdGVtcyBjYW5ub3QgY3Jvc3MgaXRzIGV4YW1wbGUgZWxlbWVudCwganVzdCB0cnkgaXQgeW91ciBzZWx2ZXMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNC48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKCksIHtcXG4gICAgYm91bmRpbmdCb3g6ICRlbGVtZW50XFxuICB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVCb3VuZGluZ0JveExvY2tYL2V4YW1wbGVCb3VuZGluZ0JveExvY2tYLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5Cb3VuZGluZ0JveCBhbmQgbG9ja1g8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+TW92ZW1lbnQgY2FuIGJlIGxvY2tlZCB0byBYIG9yIFkgYXhpcyBhbmQgYWxzbyB5b3UgY2FuIHByb3ZpZGUgZWxlbWVudCBpbiBvcHRpb25zLmJvdW5kaW5nQm94IHRvIGxpbWl0IGNyb3NzaW5nIGVsZW1lbnQgYm9yZGVycy48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCb3VuZGluZ0JveExvY2tYXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJIb3Jpem9udGFsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdib3VuZGluZ0JveFxcJz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aDI1XFxcIj5JdGVtcyBhcmUgbG9ja2VkIGluIFggYXhpcyBtb3ZlbWVudCBhbmQgY2Fubm90IGNyb3NzIGl0cyBjbG9zZXN0IHBhcmVudCBkaXYuYm91bmRpbmdCb3gsIGp1c3QgdHJ5IGl0IHlvdXIgc2VsdmVzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoMjVcXFwiPml0ZW0gMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoMjVcXFwiPml0ZW0gMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoMjVcXFwiPml0ZW0gNDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXS5jaGlsZHJlbigpLCB7XFxuICAgIGJvdW5kaW5nQm94OiAkZWxlbWVudC5jaGlsZHJlbigpWzBdLFxcbiAgICBsb2NrWDogdHJ1ZVxcbiAgfSk7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJleGFtcGxlQm91bmRpbmdCb3hMb2NrWS9leGFtcGxlQm91bmRpbmdCb3hMb2NrWS5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5Cb3VuZGluZ0JveCBhbmQgTG9ja1k8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+TW92ZW1lbnQgY2FuIGJlIGxvY2tlZCB0byBYIG9yIFkgYXhpcyBhbmQgYWxzbyB5b3UgY2FuIHByb3ZpZGUgZWxlbWVudCBpbiBvcHRpb25zLmJvdW5kaW5nQm94IHRvIGxpbWl0IGNyb3NzaW5nIGVsZW1lbnQgYm9yZGVycy48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJCb3VuZGluZ0JveExvY2tZXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnYm91bmRpbmdCb3hcXCc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtcyBhcmUgbG9ja2VkIGluIFkgYXhpcyBtb3ZlbWVudCBhbmQgY2Fubm90IGNyb3NzIGl0cyBjbG9zZXN0IHBhcmVudCBkaXYuYm91bmRpbmdCb3gsIGp1c3QgdHJ5IGl0IHlvdXIgc2VsdmVzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSAyPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pml0ZW0gNDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aXRlbSA1PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5pdGVtIDY8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMF0uY2hpbGRyZW4oKSwge1xcbiAgICBib3VuZGluZ0JveDogJGVsZW1lbnQuY2hpbGRyZW4oKVswXSxcXG4gICAgbG9ja1k6IHRydWVcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUNvcHkvZXhhbXBsZUNvcHkuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+Q29weTwvaDI+XFxuICA8bGFiZWwgZm9yPVxcJ2h5XFwnPkNvcHlpbmcgc3R1ZmYgaXMgZ3JlYXQgdG9vLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiQ29weVxcXCIgbmctaGlkZT1cXFwiZ2xvYmFscy5zaG93TW9kZWxFeGFtcGxlc1xcXCI+XFxuICAgIDxkaXYgaWQ9XFwnbGVmdDJcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgPGRpdj5Nb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuPC9kaXY+XFxuICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBpZD1cXCdyaWdodDJcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4vLyBKU1xcbiAgY29udHJvbGxlcihcXCdDb3B5XFwnLCBbXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xcbiAgICAgIGNvcHk6IHRydWVcXG4gICAgfSk7XFxuICB9XSlcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICAgIDxjb2RlPlxcbiZsdDshLS0gSFRNTCAtLSZndDtcXG4mbHQ7ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj0mcXVvdDtDb3B5JnF1b3Q7IG5nLWhpZGU9JnF1b3Q7Z2xvYmFscy5zaG93TW9kZWxFeGFtcGxlcyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBpZD1cXCdsZWZ0MlxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O01vdmUgbWUsIGFuZCBtYWtlIGNvcHkgb24gZHJvcC4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGlkPVxcJ3JpZ2h0MlxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O1lvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLiZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVDb3B5V2l0aE1vZGVsL2V4YW1wbGVDb3B5V2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkNvcHkgLSB3aXRoIG1vZGVsPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+Q29weWluZyBzdHVmZiBpcyBncmVhdCB0b28uPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJDb3B5TW9kZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ3RhYmxlUm93XFwnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczFcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXMyXFxcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXMxOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMxIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXMyOlxcbiAgICAgICAgICA8YnIvPnt7aXRlbXMyIHwganNvbn19PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnQ29weU1vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zMSA9IFt7XFxuICAgICAgY29udGVudDogXFwnTW92ZSBtZSwgYW5kIG1ha2UgY29weSBvbiBkcm9wLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXFxcXFwnbGwganVzdCBjb21lIGJhY2suXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgJHNjb3BlLml0ZW1zMiA9IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA1XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDZcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gN1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA4XFwnXFxuICAgIH1dO1xcbiAgICB2YXIgY29udGFpbmVycyA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKFtjb250YWluZXJzWzBdLGNvbnRhaW5lcnNbMV1dLHtcXG4gICAgICBjb250YWluZXJzTW9kZWw6IFskc2NvcGUuaXRlbXMxLCAkc2NvcGUuaXRlbXMyXSxcXG4gICAgICBjb3B5OiB0cnVlXFxuICAgIH0pO1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7Q29weU1vZGVsJnF1b3Q7IG5nLXNob3c9JnF1b3Q7Z2xvYmFscy5zaG93TW9kZWxFeGFtcGxlcyZxdW90OyZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnJmd0O1xcbiAgICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtczEmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zMiZxdW90OyZndDt7e2l0ZW0uY29udGVudH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3RhYmxlUm93JnF1b3Q7Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGFpbmVyJnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2RpdiZndDtJdGVtczE6XFxuICAgICAgICAgICZsdDtici8mZ3Q7e3tpdGVtczEgfCBqc29ufX0mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbnRhaW5lciZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYmZ3Q7SXRlbXMyOlxcbiAgICAgICAgICAmbHQ7YnIvJmd0O3t7aXRlbXMyIHwganNvbn19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUN1c3RvbUNsYXNzZXMvZXhhbXBsZUN1c3RvbUNsYXNzZXMuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgIDxoMj5DdXN0b20gY2xhc3NlczwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+WW91IGNhbiBvdmVyd3JpdGUgYnVpbGRpbiBjbGFzc2VzIGJ5IHByb3ZpZGluZyBjbGFzc2VzIG5hbWVzIGluIG9iamVjdCB2aWEgb3B0aW9ucy5jbGFzc2VzLjwvbGFiZWw+XFxuICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJDdXN0b21DbGFzc2VzXFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFwnbGVmdDRcXCcgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgaW4gb25lIG9mIHRoZXNlIGNvbnRhaW5lcnMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGlkPVxcJ3JpZ2h0M1xcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2PllvdSBjYW4gZHJvcCBtZSBpbiB0aGUgbGVmdCBjb250YWluZXIsIG90aGVyd2lzZSBJXFwnbGwgc3RheSBoZXJlLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICBkcmFndWxhclNlcnZpY2UoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxlZnQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWdodCldLCB7IGNsYXNzZXM6IHtcXG4gICAgbWlycm9yOiBcXCdjdXN0b20tZ3JlZW4tbWlycm9yXFwnXFxuICB9IH0pO1xcblxcbiAgLy8gRGVmYXVsdCBjbGFzc2VzIGFyZTpcXG4gIG9wdGlvbi5jbGFzc2VzID0ge1xcbiAgICBtaXJyb3I6IFxcJ2d1LW1pcnJvclxcJyxcXG4gICAgaGlkZTogXFwnZ3UtaGlkZVxcJyxcXG4gICAgdW5zZWxlY3RhYmxlOiBcXCdndS11bnNlbGVjdGFibGVcXCcsXFxuICAgIHRyYW5zaXQ6IFxcJ2d1LXRyYW5zaXRcXCcsXFxuICAgIG92ZXJBY3RpdmU6IFxcJ2d1LW92ZXItYWN0aXZlXFwnLFxcbiAgICBvdmVyQWNjZXB0czogXFwnZ3Utb3Zlci1hY2NlcHRcXCcsXFxuICAgIG92ZXJEZWNsaW5lczogXFwnZ3Utb3Zlci1kZWNsaW5lXFwnXFxuICB9O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVEaXJlY3RpdmUvZXhhbXBsZURpcmVjdGl2ZS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5EaXJlY3RpdmU8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5TYW1lIGFzIGN1c3RvbSBjbGFzc2VzIGV4YW1wbGUsIGJ1dCBzaG93aW5nIHVzZSBvZiBkaXJlY3RpdmUuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJEaXJlY3RpdmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcXCJkcmFndWxhck9wdGlvbnNcXFwiPlxcbiAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgIDxkaXY+SWYgeW91IHRyeSB0byBkcm9wIG1lIHNvbWV3aGVyZSBvdGhlciB0aGFuIHRoZXNlIGNvbnRhaW5lcnMsIElcXCdsbCBqdXN0IGNvbWUgYmFjay48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gMy48L2Rpdj5cXG4gICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFwne1xcXCJjbGFzc2VzXFxcIjp7XFxcIm1pcnJvclxcXCI6XFxcImN1c3RvbS1ncmVlbi1taXJyb3JcXFwifSxcXFwibmFtZVNwYWNlXFxcIjpcXFwic2FtZVxcXCJ9XFwnPlxcbiAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnRGlyZWN0aXZlXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCdkcmFndWxhclNlcnZpY2VcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSkge1xcbiAgICAkc2NvcGUuZHJhZ3VsYXJPcHRpb25zID0ge1xcbiAgICAgIGNsYXNzZXM6IHtcXG4gICAgICAgIG1pcnJvcjogXFwnY3VzdG9tLWdyZWVuLW1pcnJvclxcJ1xcbiAgICAgIH0sXFxuICAgICAgbmFtZVNwYWNlOiBcXCdjb21tb25cXCcgLy8ganVzdCBjb25uZWN0aW5nIGxlZnQgYW5kIHJpZ2h0IGNvbnRhaW5lclxcbiAgICB9O1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7RGlyZWN0aXZlJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPSZxdW90O2RyYWd1bGFyT3B0aW9ucyZxdW90OyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O01vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy4mbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O0lmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJdGVtIDMuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJdGVtIDYuJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnIGRyYWd1bGFyPVxcJ3smcXVvdDtjbGFzc2VzJnF1b3Q7OnsmcXVvdDttaXJyb3ImcXVvdDs6JnF1b3Q7Y3VzdG9tLWdyZWVuLW1pcnJvciZxdW90O30sJnF1b3Q7bmFtZVNwYWNlJnF1b3Q7OiZxdW90O3NhbWUmcXVvdDt9XFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJdGVtIDQuJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtJdGVtIDUuJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZURpcmVjdGl2ZVdpdGhNb2RlbC9leGFtcGxlRGlyZWN0aXZlV2l0aE1vZGVsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgPGgyPkRpcmVjdGl2ZSAtIHdpdGggbW9kZWw8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5TYW1lIGFzIGN1c3RvbSBjbGFzc2VzIGV4YW1wbGUsIGJ1dCBzaG93aW5nIHVzZSBvZiBkaXJlY3RpdmUuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJEaXJlY3RpdmVNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXFwiZHJhZ3VsYXJPcHRpb25zXFxcIj5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zMVxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcgZHJhZ3VsYXI9XFwne1xcXCJjb250YWluZXJzTW9kZWxcXFwiOlxcXCJpdGVtczJcXFwiLFxcXCJjbGFzc2VzXFxcIjp7XFxcIm1pcnJvclxcXCI6XFxcImN1c3RvbS1ncmVlbi1taXJyb3JcXFwifSxcXFwibmFtZVNwYWNlXFxcIjpcXFwiY29tbW9uXFxcIn1cXCc+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtczJcXFwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlUm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczE6XFxuICAgICAgICAgIDxici8+e3tpdGVtczEgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdj5JdGVtczI6XFxuICAgICAgICAgIDxici8+e3tpdGVtczIgfCBqc29ufX08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxwcmU+XFxuICAgICAgIFxcbiAgICAgICAgPGNvZGU+XFxuLy8gSlNcXG4gIGNvbnRyb2xsZXIoXFwnRGlyZWN0aXZlTW9kZWxcXCcsIFtcXCckc2NvcGVcXCcsIGZ1bmN0aW9uIFRvZG9DdHJsKCRzY29wZSkge1xcbiAgICAkc2NvcGUuaXRlbXMxID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdNb3ZlIG1lLCBhbmQgbWFrZSBjb3B5IG9uIGRyb3AuXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcXFxcXCdsbCBqdXN0IGNvbWUgYmFjay5cXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICAgIH1dO1xcbiAgICAkc2NvcGUuaXRlbXMyID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDVcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSA3XFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDhcXCdcXG4gICAgfV07XFxuICAgICRzY29wZS5kcmFndWxhck9wdGlvbnMgPSB7XFxuICAgICAgY29udGFpbmVyc01vZGVsOiAkc2NvcGUuaXRlbXMxLFxcbiAgICAgIGNsYXNzZXM6IHtcXG4gICAgICAgIG1pcnJvcjogXFwnY3VzdG9tLWdyZWVuLW1pcnJvclxcJ1xcbiAgICAgIH0sXFxuICAgICAgbmFtZVNwYWNlOiBcXCdjb21tb25cXCcgLy8ganVzdCBjb25uZWN0aW5nIGxlZnQgYW5kIHJpZ2h0IGNvbnRhaW5lclxcbiAgICB9O1xcbiAgfV0pXFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgICA8Y29kZT5cXG4mbHQ7IS0tIEhUTUwgLS0mZ3Q7XFxuICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O0RpcmVjdGl2ZU1vZGVsJnF1b3Q7Jmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj0mcXVvdDtkcmFndWxhck9wdGlvbnMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMxJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyBkcmFndWxhcj1cXCd7JnF1b3Q7Y29udGFpbmVyc01vZGVsJnF1b3Q7OiZxdW90O2l0ZW1zMiZxdW90OywmcXVvdDtjbGFzc2VzJnF1b3Q7OnsmcXVvdDttaXJyb3ImcXVvdDs6JnF1b3Q7Y3VzdG9tLWdyZWVuLW1pcnJvciZxdW90O30sJnF1b3Q7bmFtZVNwYWNlJnF1b3Q7OiZxdW90O2NvbW1vbiZxdW90O31cXCcmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMyJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiZsdDsvZGl2Jmd0O1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVEcmFnT3ZlckNsYXNzZXMvZXhhbXBsZURyYWdPdmVyQ2xhc3Nlcy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5EcmFnT3ZlckNsYXNzZXM8L2gyPlxcbiAgPGxhYmVsIGZvcj1cXCdoeVxcJz5Zb3UgY2FuIGludGVyYWN0IHdpdGggZHJhZ2dpbmcgZWxlbWVudCBieSBzZXR0aW5nIGRyYWdPdmVyQ2xhc3Nlczp0cnVlIGluIG9wdGlvbnMgYW5kIGFkZGluZyBwb2ludGVyIGNsYXNzIChkZWZhdWx0IGlzOiBcXCdndS1vdmVyLWFjdGl2ZVxcJykgdG8gZWxlbWVudCB5b3Ugd2FudCB0byBiZSBpbnRlcmFjdGl2ZSAoZ2V0dGluZyBjbGFzc2VzKS4gVXN1YWxseSB5b3Ugd2FudCB0byBjb250YWluZXJzIHNob3cgd2hlYXRoZXIgdGhleSBhY2NlcHRzIGVsZW1lbnQgb3Igbm90LCBidXQgeW91IGNhbiB1c2UgaXQgYW55d2hlcmUuIFRyeSB0byBkcmFnIG92ZXIgdGhlIG5vdC1jb250YWluZXIgdG9vLjwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiRHJhZ092ZXJDbGFzc2VzXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnPlxcbiAgICAgIDxkaXY+YXBwbGVzIGFuZCBvcmFuZ2VzIGNhbm5vdCBiZSBtaXhlZDwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgMjwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgMzwvZGl2PlxcbiAgICAgIDxkaXY+YXBwbGUgNDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnPlxcbiAgICAgIDxkaXY+b3JhbmdlIDE8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSAyPC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgMzwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDQ8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2PmFwcGxlIDU8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDY8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDc8L2Rpdj5cXG4gICAgICA8ZGl2PmFwcGxlIDg8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJz5cXG4gICAgICA8ZGl2Pm9yYW5nZSA1PC9kaXY+XFxuICAgICAgPGRpdj5vcmFuZ2UgNjwvZGl2PlxcbiAgICAgIDxkaXY+b3JhbmdlIDc8L2Rpdj5cXG4gICAgICA8ZGl2Pm9yYW5nZSA4PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJub3RDb250YWluZXIgZ3Utb3Zlci1hY3RpdmVcXFwiPiBUZXN0IGFjdGl2ZSBjbGFzcyBvbiBOT1QgY29udGFpbmVyLjwvZGl2PlxcblxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiAgJmx0O2RpdiBjbGFzcz1cXCd3cmFwcGVyXFwnIG5nLWNvbnRyb2xsZXI9JnF1b3Q7RHJhZ092ZXJDbGFzc2VzJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lciB3aWR0aDI1IGd1LW92ZXItYWN0aXZlXFwnJmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7YXBwbGVzIGFuZCBvcmFuZ2VzIGNhbm5vdCBiZSBtaXhlZCZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7YXBwbGUgMiZsdDsvZGl2Jmd0O1xcbiAgICAgIC4uLlxcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O29yYW5nZSAxJmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtvcmFuZ2UgMiZsdDsvZGl2Jmd0O1xcbiAgICAgIC4uLlxcbiAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXIgd2lkdGgyNSBndS1vdmVyLWFjdGl2ZVxcJyZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlIDUmbHQ7L2RpdiZndDtcXG4gICAgICAmbHQ7ZGl2Jmd0O2FwcGxlIDYmbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyIHdpZHRoMjUgZ3Utb3Zlci1hY3RpdmVcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiZndDtvcmFuZ2UgNSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYmZ3Q7b3JhbmdlIDYmbHQ7L2RpdiZndDtcXG4gICAgICAuLi5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICZsdDtkaXYgY2xhc3M9JnF1b3Q7bm90Q29udGFpbmVyJnF1b3Q7Jmd0OyBUZXN0IGFjdGl2ZSBjbGFzcyBvbiBOT1QgY29udGFpbmVyLiZsdDsvZGl2Jmd0O1xcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gQ1NTXFxuLmNvbnRhaW5lci5ndS1vdmVyLWFjdGl2ZS5ndS1vdmVyLWFjY2VwdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNvbnRhaW5lci5ndS1vdmVyLWFjdGl2ZS5ndS1vdmVyLWRlY2xpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubm90Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMmVtO1xcbn1cXG5cXG4ubm90Q29udGFpbmVyLmd1LW92ZXItYWN0aXZlLmd1LW92ZXItZGVjbGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gSlNcXG4gIGRyYWd1bGFyU2VydmljZShbJGVsZW1lbnQuY2hpbGRyZW4oKVswXSwgJGVsZW1lbnQuY2hpbGRyZW4oKVsyXV0sIHtcXG4gICAgbmFtZVNwYWNlOiBcXCdhcHBsZXNcXCcsXFxuICAgIGRyYWdPdmVyQ2xhc3NlczogdHJ1ZVxcbiAgfSk7XFxuICBkcmFndWxhclNlcnZpY2UoWyRlbGVtZW50LmNoaWxkcmVuKClbMV0sICRlbGVtZW50LmNoaWxkcmVuKClbM11dLCB7XFxuICAgIG5hbWVTcGFjZTogXFwnb3Jhbmdlc1xcJyxcXG4gICAgZHJhZ092ZXJDbGFzc2VzOiB0cnVlXFxuICB9KTtcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZUV2ZW50cy9leGFtcGxlRXZlbnRzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+RXZlbnRzPC9oMj5cXG4gICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5BZGQgc29tZSBmYW50YXN0aWMgZXZlbnRzITwvbGFiZWw+XFxuICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJFdmVudHNcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXCdsZWZ0M1xcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2Pk1vdmUgbWUsIGJ1dCB5b3UgY2FuIG9ubHkgZHJvcCBtZSBpbiBvbmUgb2YgdGhlc2UgY29udGFpbmVycy48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PklmIHlvdSB0cnkgdG8gZHJvcCBtZSBzb21ld2hlcmUgb3RoZXIgdGhhbiB0aGVzZSBjb250YWluZXJzLCBJXFwnbGwganVzdCBjb21lIGJhY2suPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDYuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgaWQ9XFwncmlnaHQzXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgIDxkaXY+WW91IGNhbiBkcm9wIG1lIGluIHRoZSBsZWZ0IGNvbnRhaW5lciwgb3RoZXJ3aXNlIElcXCdsbCBzdGF5IGhlcmUuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDQuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVmdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZ2h0KV0sIHtcXG4gICAgc2NvcGU6ICRzY29wZVxcbiAgfSk7XFxuICAkc2NvcGUuJG9uKFxcJ2RyYWdcXCcsIGZ1bmN0aW9uKGUsIGVsKSB7XFxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XFxuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKFxcJyBleC1tb3ZlZFxcJywgXFwnXFwnKTtcXG4gIH0pO1xcbiAgJHNjb3BlLiRvbihcXCdkcm9wXFwnLCBmdW5jdGlvbihlLCBlbCkge1xcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcXG4gICAgICBlbC5jbGFzc05hbWUgKz0gXFwnIGV4LW1vdmVkXFwnO1xcbiAgICB9LCAwKTtcXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVIYW5kbGUvZXhhbXBsZUhhbmRsZS5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPkhhbmRsZTwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+RHJhZyBoYW5kbGVzIGZsb2F0IHlvdXIgY3J1aXNlPzwvbGFiZWw+XFxuICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJIYW5kbGVcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXCdsZWZ0NVxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzPVxcJ2hhbmRsZVxcJz4rPC9zcGFuPk1vdmUgbWUsIGJ1dCB5b3UgY2FuIHVzZSB0aGUgcGx1cyBzaWduIHRvIGRyYWcgbWUgYXJvdW5kLjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGlkPVxcJ3JpZ2h0NVxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgZHJhZ3VsYXJTZXJ2aWNlKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWZ0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlnaHQpXSwge1xcbiAgICBtb3ZlczogZnVuY3Rpb24gKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NOYW1lID09PSBcXCdoYW5kbGVcXCc7XFxuICAgIH1cXG4gIH0pO1xcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOYW1lU3BhY2VzL2V4YW1wbGVOYW1lU3BhY2VzLmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPk5hbWVTcGFjZXM8L2gyPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+VHJ5IHRvIG1peCBhcHBsZXMgYW5kIG9yYW5nZXMuIFlvdSBjYW5ub3QgcGxhY2UgYXBwbGVzIGludG8gb3JhbmdlcywgYnV0IG5vdGljZSB0aGF0IHlvdSBjYW4gcGxhY2UgaXQgaW50byBtaXhlZC4gTWl4ZWQgY2FuIGJlIHBsYWNlZCBpbnRvIGFwcGxlcyBhbmQgb3Jhbmdlcy4gTm90aWNlIHRoYXQgbWl4ZWQgYmVjb21lcyBvcmFuZ2Ugb3IgYXBwbGUgaWYgcGxhY2VkIGludG8gdGhlaXIgY29udGFpbmVyLiA8Yj5TbyByZW1lbWJlciBpZiB5b3UgYXJlIHVzaW5nIG5hbWVzcGFjaW5nLCB0aGVuIGl0ZW0gaXMgbmFtZXNwYWNlZCBhY2NvcmRpbmcgdG8gYWN0dWFsIGNvbnRhaW5lciBpdCBpcyBwbGFjZWQgaW4uIElmIHlvdSBuZWVkIHRvIGl0ZW0gcHJlc2VydmUgdGhpZXIgc3RhdGUgeW91IG5lZWQgdG8gdXNlIGNsYXNzZXMgaW4gY29tYmluYXRpb24gd2l0aCBvcHRpb25zLmFjY2VwdHMgYW5kIG9wdGlvbmFsbHkgb3B0aW9ucy5pc0NvbnRhaW5lci48L2I+IEl0IGRlcGVuZHMgb24gc2V0dXAuIChTZWUgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXIvaXNzdWVzLzlcXFwiPmlzc3VlICM5PC9hPi4pPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ3dyYXBwZXJcXCcgbmctY29udHJvbGxlcj1cXFwiTmFtZVNwYWNlc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNVxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+dHJ5IHRvIG1peCBvcmFuZ2VzIGFuZCBhcHBsZXM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSAzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNVxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+b3JhbmdlIDE8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+b3JhbmdlIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+b3JhbmdlIDM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+b3JhbmdlIDQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWwgd2lkdGgyNVxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgNTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hcHBsZSA2PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmFwcGxlIDc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YXBwbGUgODwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbCB3aWR0aDI1XFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCAxPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pm1peGVkIDI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bWl4ZWQgMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5taXhlZCA0PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgPGNvZGU+XFxuZHJhZ3VsYXJTZXJ2aWNlKFskZWxlbWVudC5jaGlsZHJlbigpWzBdLCAkZWxlbWVudC5jaGlsZHJlbigpWzJdXSwge1xcbiAgbmFtZVNwYWNlOiBcXCdhcHBsZXNcXCdcXG59KTtcXG5kcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKVsxXSwge1xcbiAgbmFtZVNwYWNlOiBcXCdvcmFuZ2VzXFwnXFxufSk7XFxuZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKClbM10sIHsgLy8gbWl4ZWRcXG4gIG5hbWVTcGFjZTogW1xcJ29yYW5nZXNcXCcsIFxcJ2FwcGxlc1xcJ11cXG59KTtcXG4gICAgICA8L2NvZGU+XFxuICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0L2V4YW1wbGVOZXN0ZWROZ1JlcGVhdC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gICAgPGgyPk5lc3RlZCBuZ1JlcGVhdDwvaDI+XFxuICAgIDxsYWJlbCBmb3I9XFwnaHlcXCc+IFlvdSBjYW4gbW92ZSB3aG9sZSByb3dzIGJ5IGdyYWJpbmcgcm93IHRpdGxlLCBhbGwgaXRlbXMgaXQgc2VsdmVzLiBUcnkgaXQgb3V0IVxcbiAgICAgICAgPGhyLz5cXG4gICAgICAgIDxiPk9sZCBJRSBkb2VzbnQgc3VwcG9ydCBGbGV4aWJsZSBCb3ggTGF5b3V0PC9iPiBzbyBpdCBjYW4gbG9vayB3ZWlyZC4gQnV0IGluIG1vZGVybiBicm93c2VycyBpdCBpcyBhd3NvbWUhIERyYWd1bGFyIHdpbGwgYmUgd29ya2luZyB3ZWxsIGFsc28gaW4gb2xkIElFIGJ1dCB5b3UgaGF2ZSB0byB1c2UgZGlmZmVyZW50IGNzcyBmb3IgbGF5b3V0LlxcbiAgICAgICAgPGhyLz5cXG4gICAgPC9sYWJlbD5cXG4gICAgPGRpdiBuZy1jb250cm9sbGVyPVxcXCJOZXN0ZWROZ1JlcGVhdFxcXCI+XFxuICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCIgY2xhc3M9XFwnZXhhbXBsZVJvd1xcJz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3ctaGFuZGxlXFxcIj5Sb3cge3skaW5kZXh9fTwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW0uaXRlbXNcXFwiIGNsYXNzPVxcXCJleGFtcGxlQ2VsbFxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAvLyBIVE1MXFxuXFxuICAmbHQ7ZGl2IG5nLWNvbnRyb2xsZXI9JnF1b3Q7RXhhbXBsZTE1JnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zJnF1b3Q7IGNsYXNzPVxcJ2V4YW1wbGVSb3dcXCcmZ3Q7XFxuICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtyb3ctaGFuZGxlJnF1b3Q7Jmd0O1JvdyB7eyRpbmRleH19Jmx0Oy9kaXYmZ3Q7XFxuICAgICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtLml0ZW1zJnF1b3Q7IGNsYXNzPSZxdW90O2V4YW1wbGVDZWxsJnF1b3Q7Jmd0O3t7aXRlbS5jb250ZW50fX0mbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuICAmbHQ7L2RpdiZndDtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgPHByZT5cXG4gICAgICAgIDxjb2RlPlxcbiAgLy8gQ1NTXFxuXFxuICAuZXhhbXBsZVJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuZXhhbXBsZUNlbGwge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAuZXhhbXBsZVJvdyxcXG4gIC5leGFtcGxlQ2VsbCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IG1vdmU7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgY3Vyc29yOiAtbW96LWdyYWI7XFxuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbiAgfVxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgIDwvcHJlPlxcbiAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAvLyBKU1xcblxcbiAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIHRpbWVvdW50IGR1ZSB0byBuZ1JlcGVhdCB0byBiZSByZWFkeVxcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQsIHtcXG4gICAgICBtb3ZlczogZnVuY3Rpb24oZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XFxuICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcXCdyb3ctaGFuZGxlXFwnKTtcXG4gICAgICB9XFxuICAgIH0pO1xcbiAgICBkcmFndWxhclNlcnZpY2UoJGVsZW1lbnQuY2hpbGRyZW4oKSwge1xcbiAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICAgIHJldHVybiAhaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcXCdyb3ctaGFuZGxlXFwnKTtcXG4gICAgICB9XFxuICAgIH0pO1xcbiAgfSwgMCk7XFxuICAkc2NvcGUuaXRlbXMgPSBbe1xcbiAgICBpdGVtczogW3tcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGExXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGEyXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGEzXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIGE0XFwnXFxuICAgIH1dXFxuICB9LCB7XFxuICAgIGl0ZW1zOiBbe1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjFcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjJcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjRcXCdcXG4gICAgfV1cXG4gIH0sIHtcXG4gICAgaXRlbXM6IFt7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBjMVxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBjMlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBjM1xcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSBjNFxcJ1xcbiAgICB9XVxcbiAgfV07XFxuICAgICAgICA8L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsL2V4YW1wbGVOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ3BhcmVudFxcJz5cXG4gIDxoMj5OZXN0ZWQgbmdSZXBlYXQgLSB3aXRoIG1vZGVsPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+IFlvdSBjYW4gbW92ZSB3aG9sZSByb3dzIGJ5IGdyYWJpbmcgcm93IHRpdGxlLCBhbGwgaXRlbXMgaXQgc2VsdmVzLiBUcnkgaXQgb3V0IVxcbiAgICA8aHIvPlxcbiAgICA8Yj5PbGQgSUUgZG9lc250IHN1cHBvcnQgRmxleGlibGUgQm94IExheW91dDwvYj4gc28gaXQgY2FuIGxvb2sgd2VpcmQuIEJ1dCBpbiBtb2Rlcm4gYnJvd3NlcnMgaXQgaXMgYXdzb21lISBEcmFndWxhciB3aWxsIGJlIHdvcmtpbmcgd2VsbCBhbHNvIGluIG9sZCBJRSBidXQgeW91IGhhdmUgdG8gdXNlIGRpZmZlcmVudCBjc3MgZm9yIGxheW91dC5cXG4gICAgPGhyLz5cXG4gIDwvbGFiZWw+XFxuICA8ZGl2IG5nLWNvbnRyb2xsZXI9XFxcIk5lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXCd0YWJsZVJvd1xcJz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiIGNsYXNzPVxcJ2V4YW1wbGVSb3dcXCc+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdy1oYW5kbGVcXFwiPlJvdyB7ezo6JGluZGV4fX08L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXhhbXBsZVJvdyBleGFtcGxlQ2VsbCBjb250YWluZXJOZXN0ZWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW0uaXRlbXNcXFwiIGNsYXNzPVxcXCJleGFtcGxlQ2VsbFxcXCI+e3tpdGVtLmNvbnRlbnR9fTwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGVSb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICA8cHJlPlxcbiAgICAgICAgICAgIDxkaXY+SXRlbXM6XFxuICAgICAgICAgICAgICA8YnIvPnt7aXRlbXMgfCBqc29ufX08L2Rpdj5cXG4gICAgICAgIDwvcHJlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuJmx0OyEtLSBIVE1MIC0tJmd0O1xcbiZsdDtkaXYgbmctY29udHJvbGxlcj0mcXVvdDtOZXN0ZWROZ1JlcGVhdFdpdGhNb2RlbCZxdW90OyZndDtcXG4gICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICZsdDtkaXYgbmctcmVwZWF0PSZxdW90O2l0ZW0gaW4gaXRlbXMmcXVvdDsgY2xhc3M9XFwnZXhhbXBsZVJvd1xcJyZndDtcXG4gICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O3Jvdy1oYW5kbGUmcXVvdDsmZ3Q7Um93IHt7OjokaW5kZXh9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7ZXhhbXBsZVJvdyBleGFtcGxlQ2VsbCBjb250YWluZXJOZXN0ZWQmcXVvdDsmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW0uaXRlbXMmcXVvdDsgY2xhc3M9JnF1b3Q7ZXhhbXBsZUNlbGwmcXVvdDsmZ3Q7e3tpdGVtLmNvbnRlbnR9fSZsdDsvZGl2Jmd0O1xcbiAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiZsdDsvZGl2Jmd0O1xcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gQ1NTXFxuXFxuICAuZXhhbXBsZVJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuZXhhbXBsZUNlbGwge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuXFxuICAuZXhhbXBsZVJvdyxcXG4gIC5leGFtcGxlQ2VsbCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IG1vdmU7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgY3Vyc29yOiAtbW96LWdyYWI7XFxuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbiAgfVxcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gSlNcXG5jb250cm9sbGVyKFxcJ05lc3RlZE5nUmVwZWF0V2l0aE1vZGVsXFwnLCBbXFwnJHRpbWVvdXRcXCcsIFxcJyRzY29wZVxcJywgXFwnJGVsZW1lbnRcXCcsIFxcJ2RyYWd1bGFyU2VydmljZVxcJywgZnVuY3Rpb24gVG9kb0N0cmwoJHRpbWVvdXQsICRzY29wZSwgJGVsZW1lbnQsIGRyYWd1bGFyU2VydmljZSkge1xcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHsgLy8gdGltZW91bnQgZHVlIHRvIG5lc3RlZCBuZ1JlcGVhdCB0byBiZSByZWFkeVxcbiAgICAgIHZhciBjb250YWluZXIgPSAkZWxlbWVudC5jaGlsZHJlbigpLmVxKDApLmNoaWxkcmVuKCksXFxuICAgICAgICBwYXJlbnRDb250YWluZXJzID0gY29udGFpbmVyLmNoaWxkcmVuKCksXFxuICAgICAgICBuZXN0ZWRDb250YWluZXJzID0gW107XFxuXFxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGNvbnRhaW5lciwge1xcbiAgICAgICAgbW92ZXM6IGZ1bmN0aW9uKGVsLCBjb250YWluZXIsIGhhbmRsZSkge1xcbiAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcXCdyb3ctaGFuZGxlXFwnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250YWluZXJzTW9kZWw6ICRzY29wZS5pdGVtc1xcbiAgICAgIH0pO1xcblxcbiAgICAgIC8vIGNvbGxlY3QgbmVzdGVkIGNvbnRpYW5lcnNcXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudENvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIG5lc3RlZENvbnRhaW5lcnMucHVzaChwYXJlbnRDb250YWluZXJzLmVxKGkpLmNoaWxkcmVuKClbMV0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKG5lc3RlZENvbnRhaW5lcnMsIHtcXG4gICAgICAgIG1vdmVzOiBmdW5jdGlvbihlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcXG4gICAgICAgICAgcmV0dXJuICFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxcJ3Jvdy1oYW5kbGVcXCcpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogKGZ1bmN0aW9uIGdldE5lc3RlZENvbnRhaW5lcnNNb2RlbCgpe1xcbiAgICAgICAgICB2YXIgcGFyZW50ID0gJHNjb3BlLml0ZW1zLFxcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbCA9IFtdO1xcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudC5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgIGNvbnRhaW5lcnNNb2RlbC5wdXNoKHBhcmVudFtpXS5pdGVtcyk7XFxuICAgICAgICAgIH07XFxuICAgICAgICAgIHJldHVybiBjb250YWluZXJzTW9kZWw7XFxuICAgICAgICB9KSgpXFxuICAgICAgfSk7XFxuICAgIH0sIDApO1xcbiAgICAkc2NvcGUuaXRlbXMgPSBbe1xcbiAgICAgIGl0ZW1zOiBbe1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhMVxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYTJcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGEzXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBhNFxcJ1xcbiAgICAgIH1dXFxuICAgIH0sIHtcXG4gICAgICBpdGVtczogW3tcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjFcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGIyXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBiM1xcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYjRcXCdcXG4gICAgICB9XVxcbiAgICB9LCB7XFxuICAgICAgaXRlbXM6IFt7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGMxXFwnXFxuICAgICAgfSwge1xcbiAgICAgICAgY29udGVudDogXFwnSXRlbSBjMlxcJ1xcbiAgICAgIH0sIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gYzNcXCdcXG4gICAgICB9LCB7XFxuICAgICAgICBjb250ZW50OiBcXCdJdGVtIGM0XFwnXFxuICAgICAgfV1cXG4gICAgfV07XFxuICB9XSlcXG4gICAgPC9jb2RlPlxcbiAgPC9wcmU+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZXhhbXBsZU5nUmVwZWF0L2V4YW1wbGVOZ1JlcGVhdC5odG1sXCIsXCIgICAgICAgIDxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICAgICAgICAgIDxoMj5uZ1JlcGVhdDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5FeGFtcGxlIG9mIHVzaW5nIG5nLXJlcGVhdCB3aXRoIGRyYWd1bGFyIGFuZCBhZGRpbmcvcmVtb3ZpbmcgaXRlbXMgZHluYW1pY2FseS48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJOZ1JlcGVhdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCc+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiaXRlbSBpbiBpdGVtc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz1cXFwiYWRkSXRlbSgpXFxcIj4rPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPVxcXCJyZW1vdmVJdGVtKClcXFwiPng8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAvLyBIVE1MOlxcbiAgJmx0O2RpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJyZndDtcXG4gICAgJmx0O2RpdiBuZy1yZXBlYXQ9JnF1b3Q7aXRlbSBpbiBpdGVtcyZxdW90OyZndDtcXG4gICAgICB7e2l0ZW0uY29udGVudH19XFxuICAgICAgJmx0O2J1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPSZxdW90O2FkZEl0ZW0oKSZxdW90OyZndDsrJmx0Oy9idXR0b24mZ3Q7XFxuICAgICAgJmx0O2J1dHRvbiBjbGFzcz1cXCdjdXJzb3JEZWZhdWx0XFwnIG5nLWNsaWNrPSZxdW90O3JlbW92ZUl0ZW0oKSZxdW90OyZndDt4Jmx0Oy9idXR0b24mZ3Q7XFxuICAgICZsdDsvZGl2Jmd0O1xcbiAgJmx0Oy9kaXYmZ3Q7XFxuXFxuICAvLyBKUzpcXG4gIGRyYWd1bGFyU2VydmljZSgkZWxlbWVudC5jaGlsZHJlbigpKTtcXG4gICRzY29wZS5pdGVtcyA9IFt7XFxuICAgIGNvbnRlbnQ6IFxcJ1RyeSB0byBhZGQgb3IgcmVtb3ZlIHNvbWUgZWxlbWVudHMgKGNsaWNrIG9uICstIGJ1dHRvbnMpLCB5b3Ugd2lsbCBzZWUgdGhhdCBpdCBpcyBub3QgcHJvYmxlbSBmb3IgZHJhZ3VsYXIuXFwnXFxuICB9LHtcXG4gICAgY29udGVudDogXFwnSXRlbSAyXFwnXFxuICB9LHtcXG4gICAgY29udGVudDogXFwnSXRlbSAzXFwnXFxuICB9LHtcXG4gICAgY29udGVudDogXFwnSXRlbSA0XFwnXFxuICB9XTtcXG4gICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSAoKSB7XFxuICAgIHZhciBpbmRleCA9ICRzY29wZS5pdGVtcy5pbmRleE9mKHRoaXMuaXRlbSkgKyAxO1xcbiAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLHtjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArIFxcJy1jb3B5XFwnfSk7XFxuICB9XFxuICAkc2NvcGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0gKCkge1xcbiAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xcbiAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcXG4gIH1cXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVOZ1JlcGVhdFdpdGhNb2RlbC9leGFtcGxlTmdSZXBlYXRXaXRoTW9kZWwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICA8aDI+bmdSZXBlYXQgLSB3aXRoIG1vZGVsPC9oMj5cXG4gIDxsYWJlbCBmb3I9XFwnaHlcXCc+RXhhbXBsZSBvZiB1c2luZyBuZy1yZXBlYXQgd2l0aCBkcmFndWxhciBhbmQgYWRkaW5nL3JlbW92aW5nIGl0ZW1zIGR5bmFtaWNhbHkuPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJOZ1JlcGVhdFdpdGhNb2RlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFwndGFibGVSb3dcXCc+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIj5cXG4gICAgICAgICAge3tpdGVtLmNvbnRlbnR9fVxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcImFkZEl0ZW0oKVxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9XFxcInJlbW92ZUl0ZW0oKVxcXCI+eDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZVJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgIDxkaXY+SXRlbXM6XFxuICAgICAgICAgIDxici8+e3tpdGVtcyB8IGpzb259fTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPHByZT5cXG4gICAgPGNvZGU+XFxuICAvLyBIVE1MOlxcbiAgICZsdDtkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPSZxdW90O05nUmVwZWF0V2l0aE1vZGVsJnF1b3Q7Jmd0O1xcbiAgICAgICZsdDtkaXYgY2xhc3M9XFwnY29udGFpbmVyVmVydGljYWxcXCcmZ3Q7XFxuICAgICAgICAmbHQ7ZGl2IG5nLXJlcGVhdD0mcXVvdDtpdGVtIGluIGl0ZW1zJnF1b3Q7Jmd0O1xcbiAgICAgICAgICB7e2l0ZW0uY29udGVudH19XFxuICAgICAgICAgICZsdDtidXR0b24gY2xhc3M9XFwnY3Vyc29yRGVmYXVsdFxcJyBuZy1jbGljaz0mcXVvdDthZGRJdGVtKCkmcXVvdDsmZ3Q7KyZsdDsvYnV0dG9uJmd0O1xcbiAgICAgICAgICAmbHQ7YnV0dG9uIGNsYXNzPVxcJ2N1cnNvckRlZmF1bHRcXCcgbmctY2xpY2s9JnF1b3Q7cmVtb3ZlSXRlbSgpJnF1b3Q7Jmd0O3gmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG4gICZsdDsvZGl2Jmd0O1xcbiAgICA8L2NvZGU+XFxuICA8L3ByZT5cXG4gIDxwcmU+XFxuICAgIDxjb2RlPlxcbiAgLy8gSlM6XFxuICBjb250cm9sbGVyKFxcJ05nUmVwZWF0V2l0aE1vZGVsXFwnLCBbXFwnJHNjb3BlXFwnLCBcXCckZWxlbWVudFxcJywgXFwnZHJhZ3VsYXJTZXJ2aWNlXFwnLCBmdW5jdGlvbiBUb2RvQ3RybCgkc2NvcGUsICRlbGVtZW50LCBkcmFndWxhclNlcnZpY2UpIHtcXG4gICAgJHNjb3BlLml0ZW1zID0gW3tcXG4gICAgICBjb250ZW50OiBcXCdUcnkgdG8gYWRkIG9yIHJlbW92ZSBzb21lIGVsZW1lbnRzIChjbGljayBvbiArLSBidXR0b25zKSwgeW91IHdpbGwgc2VlIHRoYXQgaXQgaXMgbm90IHByb2JsZW0gZm9yIGRyYWd1bGFyLlxcJ1xcbiAgICB9LCB7XFxuICAgICAgY29udGVudDogXFwnSXRlbSAyXFwnXFxuICAgIH0sIHtcXG4gICAgICBjb250ZW50OiBcXCdJdGVtIDNcXCdcXG4gICAgfSwge1xcbiAgICAgIGNvbnRlbnQ6IFxcJ0l0ZW0gNFxcJ1xcbiAgICB9XTtcXG4gICAgZHJhZ3VsYXJTZXJ2aWNlKCRlbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY2hpbGRyZW4oKSwge2NvbnRhaW5lcnNNb2RlbDogJHNjb3BlLml0ZW1zfSk7XFxuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24gYWRkSXRlbSgpIHtcXG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pICsgMTtcXG4gICAgICAkc2NvcGUuaXRlbXMuc3BsaWNlKGluZGV4LCAwLCB7XFxuICAgICAgICBjb250ZW50OiB0aGlzLml0ZW0uY29udGVudCArIFxcJy1jb3B5XFwnXFxuICAgICAgfSk7XFxuICAgIH07XFxuICAgICRzY29wZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbSgpIHtcXG4gICAgICB2YXIgaW5kZXggPSAkc2NvcGUuaXRlbXMuaW5kZXhPZih0aGlzLml0ZW0pO1xcbiAgICAgICRzY29wZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xcbiAgICB9O1xcbiAgfV0pXFxuICAgIDwvY29kZT5cXG4gIDwvcHJlPlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVSZW1vdmVPblNwaWxsL2V4YW1wbGVSZW1vdmVPblNwaWxsLmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPlJlbW92ZSBvbiBzcGlsbDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5OZWVkIHRvIGJlIGFibGUgdG8gcXVpY2tseSBkZWxldGUgc3R1ZmYgd2hlbiBpdCBzcGlsbHMgb3V0IG9mIHRoZSBjaG9zZW4gY29udGFpbmVycz88L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJSZW1vdmVPblNwaWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXCdzaW5nbGUxXFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Nb3ZlIG1lLCBidXQgeW91IGNhbiBvbmx5IGRyb3AgbWUgc29tZXdoZXJlIGluIHRoaXMgY29udGFpbmVyLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gaGVyZSwgSVxcJ2xsIGRpZSBhIGZpZXJ5IGRlYXRoLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2luZ2xlKV0sIHsgcmVtb3ZlT25TcGlsbDogdHJ1ZSB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVSZXZlcnRPblNwaWxsL2V4YW1wbGVSZXZlcnRPblNwaWxsLmh0bWxcIixcIiAgICAgICAgPGRpdiBjbGFzcz1cXCdwYXJlbnRcXCc+XFxuICAgICAgICAgICAgPGgyPlJldmVydCBvbiBzcGlsbDwvaDI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXCdoeVxcJz5CeSBkZWZhdWx0LCBkcm9wcGluZyBhbiBlbGVtZW50IG91dHNpZGUgb2YgYW55IGtub3duIGNvbnRhaW5lcnMgd2lsbCBrZWVwIHRoZSBlbGVtZW50IGluIHRoZSBsYXN0IHBsYWNlIGl0IGhvdmVyZWQgb3Zlci4gWW91IGNhbiBtYWtlIGVsZW1lbnRzIGdvIGJhY2sgaG9tZSBpZiB0aGV5XFwncmUgZHJvcHBlZCBvdXRzaWRlIG9mIGtub3duIGNvbnRhaW5lcnMsIHRvby48L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFwnd3JhcHBlclxcJyBuZy1jb250cm9sbGVyPVxcXCJSZXZlcnRPblNwaWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXCdsZWZ0NFxcJyBjbGFzcz1cXCdjb250YWluZXJWZXJ0aWNhbFxcJz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TW92ZSBtZSwgYnV0IHlvdSBjYW4gb25seSBkcm9wIG1lIGluIG9uZSBvZiB0aGVzZSBjb250YWluZXJzLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JZiB5b3UgdHJ5IHRvIGRyb3AgbWUgc29tZXdoZXJlIG90aGVyIHRoYW4gdGhlc2UgY29udGFpbmVycywgSVxcJ2xsIGp1c3QgY29tZSBiYWNrLjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDMuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkl0ZW0gNi48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFwncmlnaHQ0XFwnIGNsYXNzPVxcJ2NvbnRhaW5lclZlcnRpY2FsXFwnPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Zb3UgY2FuIGRyb3AgbWUgaW4gdGhlIGxlZnQgY29udGFpbmVyLCBvdGhlcndpc2UgSVxcJ2xsIHN0YXkgaGVyZS48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5JdGVtIDUuPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT5cXG4gIGRyYWd1bGFyU2VydmljZShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVmdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZ2h0KV0sIHsgcmV2ZXJ0T25TcGlsbDogdHJ1ZSB9KTtcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImV4YW1wbGVTY3JvbGxpbmdEcmFnL2V4YW1wbGVTY3JvbGxpbmdEcmFnLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwncGFyZW50XFwnPlxcbiAgICA8aDI+U2Nyb2xsaW5nIGRyYWc8L2gyPlxcbiAgICA8bGFiZWwgZm9yPVxcJ2h5XFwnPiBDb250YWlucmUgY2FuIGJlIHNjcm9sbGVkIGJ5IGhvdmVyaW5nIGRyYWdnZWQgaXRlbSBvdmVyIG1vc3QgdG9wIHZpc2libGUgaXRlbSBvciBtb3N0IGJvdHRvbSwgc2Nyb2xsIGRpcmVjdGlvbiByZXNwZWN0aXZlbHkgb3IgYnkgdXNpbmcgbW91c2Ugd2hlZWwgZHVyaW5nIGRyYWcuIDxiPk5PVCBGSU5JU0hFRCBDSEVDSyBJU1NVRSAjMTQhPC9iPlxcbiAgICA8L2xhYmVsPlxcbiAgICA8ZGl2IG5nLWNvbnRyb2xsZXI9XFxcIlNjcm9sbGluZ0RyYWdcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyVmVydGljYWwgc2Nyb2xsaW5nRHJhZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDE8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA3LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA5LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxMC48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMTEuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDEyLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxMy48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyVmVydGljYWwgc2Nyb2xsaW5nRHJhZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDE8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAzLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA0LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA1LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA2LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA3LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSA5LjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxMC48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2Pkl0ZW0gMTEuPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5JdGVtIDEyLjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+SXRlbSAxMy48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJwYXJ0aWFscy9wYXJ0aWFsLWNvbnRyaWJ1dGUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXCdjb250YWluZXJcXCc+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgICAgIENvbnRyaWJ1dGluZyBub3RlcyB3aWxsIGJlIG1vdmVkIGhlcmUsIHNpbmNlIHRoZW4sIHBsZWFzZSB1c2UgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXIvYmxvYi9tYXN0ZXIvQ09OVFJJQlVUSU5HLm1kXFxcIj5jb250cmlidXRpb24gbm90ZXMgb24gZ2l0aHViPC9hPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInBhcnRpYWxzL3BhcnRpYWwtZG9jcy5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcJ2NvbnRhaW5lclxcJz5cXG4gIDxkaXYgaWQ9XFxcInJvd09mZmNhbnZhc1xcXCIgY2xhc3M9XFxcInJvdyByb3ctb2ZmY2FudmFzIHJvdy1vZmZjYW52YXMtbGVmdFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0zIHNpZGViYXItb2ZmY2FudmFzXFxcIiBpZD1cXFwic2lkZWJhclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8YSB1aS1zcmVmPVxcXCJkb2NzLmRldGFpbCh7bGluazpcXCdkb2NzSW5zdGFsbFxcJ30pXFxcIiB1aS1zcmVmLWFjdGl2ZT1cXFwiYWN0aXZlXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5JbnN0YWxsYXRpb248L2E+XFxuICAgICAgICA8YSBuZy1yZXBlYXQ9XFxcImV4YW1wbGUgaW4gZXhhbXBsZXNMaXN0XFxcIiB1aS1zcmVmPVxcXCJkb2NzLmRldGFpbCh7bGluazpleGFtcGxlLmxpbmt9KVxcXCIgdWktc3JlZi1hY3RpdmU9XFxcImFjdGl2ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+e3tleGFtcGxlLnRpdGxlfX08L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tLy5zaWRlYmFyLW9mZmNhbnZhcy0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTlcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJwdWxsLWxlZnQgdmlzaWJsZS14c1xcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZVNpZGViYXIoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4teHNcXFwiPlRvZ2dsZSBuYXY8L2J1dHRvbj5cXG4gICAgICA8L3A+XFxuICAgICAgPCEtLSBkb2NzLmRldGFpbCAtLT5cXG4gICAgICA8ZGl2IHVpLXZpZXcgb25sb2FkPVxcXCJoaWdobGlnaHRDb2RlKClcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLS8uY29sLXhzLTEyLmNvbC1zbS05LS0+XFxuICA8L2Rpdj5cXG4gIDwhLS0vcm93LS0+XFxuPC9kaXY+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwicGFydGlhbHMvcGFydGlhbC1ob21lLmh0bWxcIixcIjxkaXYgY2xhc3M9XFwnY29udGFpbmVyXFwnPlxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPCEtLS8uc2lkZWJhci1vZmZjYW52YXMtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb25cXFwiPlxcbiAgICAgICAgPGgxPkRSQUdVTEFSPC9oMT5cXG4gICAgICAgIDxwPkFuZ3VsYXIgZHJhZyZkcm9wIGJhc2VkIG9uIDxhIGhyZWY9XFxcImh0dHA6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGFcXFwiPmRyYWd1bGE8L2E+LjwvcD5cXG4gICAgICAgIDxwPjxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiB1aS1zcmVmPVxcXCJkb2NzXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPkxpdmUgZXhhbXBsZXMgaW4gZG9jczwvYT48L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxuICAgICAgICAgIDxwPkJyb3dzZXIgc3VwcG9ydCBpbmNsdWRlcyBldmVyeSBzYW5lIGJyb3dzZXIgYW5kICoqSUU3KyoqLiA8c3ViPl8oR3JhbnRlZCB5b3UgcG9seWZpbGwgdGhlIGZ1bmN0aW9uYWwgYEFycmF5YCBtZXRob2RzIGluIEVTNSlfPC9zdWI+PC9wPlxcbiAgICAgICAgICA8aDI+SW5zcGlyYXRpb248L2gyPlxcbiAgICAgICAgICA8cD5IYXZlIHlvdSBldmVyIHdhbnRlZCBhIGRyYWcgYW5kIGRyb3AgbGlicmFyeSB0aGF0IGp1c3Qgd29ya3M/IFRoYXQgYWN0dWFsbHkgdW5kZXJzdGFuZHMgd2hlcmUgdG8gcGxhY2UgdGhlIGVsZW1lbnRzIHdoZW4gdGhleSBhcmUgZHJvcHBlZD8gVGhhdCBkb2VzbuKAmXQgbmVlZCB5b3UgdG8gZG8gYSB6aWxsaW9uIHRoaW5ncyB0byBnZXQgaXQgdG8gd29yaz8gV2VsbCwgc28gZGlkIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YVxcXCI+Tmljb2xhcyBCZXZhY3F1YTwvYT4gYW5kIEkgaGF2ZSBmb3JrZWQgaXQgaW50byBhbmd1bGFyIG1vZHVsZSBhbmQgYWxzbyBwdXQgc29tZSBmZWF0dXJlcyE8L3A+XFxuICAgICAgICAgIDxwPjxiPkFjdHVhbCB2ZXJzaW9uIDIuMC4xIGlzIGJhc2VkIG9uIGRyYWd1bGEgMi4xLjIgYW5kIHRlc3RlZCB3aXRoIGFuZ3VsYXIgMS40LjMuPC9iPjwvcD5cXG4gICAgICAgICAgPGgyPkRpZmZlcmVuY2VzIG9mIGRyYWd1bGFyIChhZ2FpbnN0IGRyYWd1bGEpPC9oMj5cXG4gICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgIDxsaT5yZXBsYWNlZCBjcm9zc3ZlbnQgd2l0aCBhbmd1bGFycyBldmVudCBiaW5kaW5nPC9saT5cXG4gICAgICAgICAgICA8bGk+cmVwbGFjZWQgY29udHJhLmVtaXR0ZXIgd2l0aCAkc2NvcGUuJGVtaXQgaWYgc2NvcGUgcHJvdmlkZWQgaW4gb3B0aW9ucyAob3B0aW9ucy5zY29wZSk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5lbmNhcHN1bGF0ZWQgdGhlIGNvZGUgaW50byBhbmd1bGFyIGZhY3RvcnkgKGRyYWd1bGFyU2VydmljZSk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5jcmVhdGVkIGRpcmVjdGl2ZSBkcmFndWxhciB3aGVyZSBvcHRpb25zIGNhbiBiZSBwYXNzZWQgcHJvdmlkaW5nIHNjb3BlIHByb3BlcnR5IG5hbWU8L2xpPlxcbiAgICAgICAgICAgIDxsaT5ib3RoIHNlcnZpY2UgYW5kIGRpcmVjdGl2ZSBwcm92aWRlZCBhcyBhbmd1bGFyIG1vZHVsZSAoZHJhZ3VsYXJNb2R1bGUpPC9saT5cXG4gICAgICAgICAgICA8bGk+YXV0b21hdGljIGRpcmVjdGlvbiBpZiBub3QgcHJvdmlkZWQgaW4gb3B0aW9ucywgaW5zdGVhZCBvZiBkZWZhdWx0IHZlcnRpY2FsPC9saT5cXG4gICAgICAgICAgICA8bGk+YWNjZXB0aW5nIGFycmF5bGlrZSBvYmplY3RzIGFzIGNvbnRhaW5lcnMgYXJyYXk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hY2NlcHRpbmcgY3VzdG9tIGNsYXNzZXMgdmlhIG9wdGlvbi5jbGFzc2VzPC9saT5cXG4gICAgICAgICAgICA8bGk+bmFtZXNwYWNlZCBjb250YWluZXJzIGdyb3VwcyBhdmFpbGFibGUgdmlhIG9wdGlvbi5uYW1lU3BhY2U8L2xpPlxcbiAgICAgICAgICAgIDxsaT5ib3VuZGluZ0JveCAoZHJhZ2dpbmcgZWxlbWVudCBjYW4gbWUgbW92ZWQgb25seSBpbiBzcGVjaWZpYyBhcmVhKTwvbGk+XFxuICAgICAgICAgICAgPGxpPmxvY2tYL1kgKGRyYWdnaW5nIGVsZW1lbnQgY2FuIG1lIG1vdmVkIG9ubHkgaW4gc3BlY2lmaWMgZGlyZWN0aW9uKTwvbGk+XFxuICAgICAgICAgICAgPGxpPm1vcmUgZXhhbXBsZXM8L2xpPlxcbiAgICAgICAgICAgIDxsaT5hY2NlcHQgSlNPTiBvcHRpb25zIGluIGRyYWd1bGFyIGRpcmVjdGl2ZSAoIzIpPC9saT5cXG4gICAgICAgICAgICA8bGk+YWRkL3JlbW92ZSB3aXRoIG5nLXJlcGVhdDwvbGk+XFxuICAgICAgICAgICAgPGxpPmFkZGVkIHN5bnRheCBoaWdobGlnaHRlciB0byBleGFtcGxlIGNvZGVzPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPGgyPlRvZG88L2gyPlxcbiAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgPGxpPmV4YW1wbGUgZm9yIGRlbGF5PC9saT5cXG4gICAgICAgICAgICA8bGk+by5pc0NvbnRhaW5lciBpbiBfaXNDb250YWluZXIgKGZuIG8uaXNDb250YWluZXJHZXRNb2RlbChjb250YWluZXJFbG0pKTwvbGk+XFxuICAgICAgICAgICAgPGxpPnNvbHZlIG1peGluZyB3aXRoIGFuZCB3aXRob3V0IG1vZGVsIGNvbnRhaW5lcnM8L2xpPlxcbiAgICAgICAgICAgIDxsaT5yZW1vdmUgbnBtIHdvcmtmbG93PC9saT5cXG4gICAgICAgICAgICA8bGk+c3VwcG9ydCBzZWxlY3RvcnMgaW4gc2VydmljZSAoIzIpPzwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxoMj5GZWF0dXJlczwvaDI+XFxuICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICA8bGk+cHJvdmlkZWQgYXMgc2VydmljZSBhbmQgYWxzbyBhcyBkaXJlY3RpdmU8L2xpPlxcbiAgICAgICAgICAgIDxsaT5TdXBlciBlYXN5IHRvIHNldCB1cDwvbGk+XFxuICAgICAgICAgICAgPGxpPk5vIGJsb2F0ZWQgZGVwZW5kZW5jaWVzPC9saT5cXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5GaWd1cmVzIG91dCBzb3J0IG9yZGVyPC9zdHJvbmc+IG9uIGl0cyBvd248L2xpPlxcbiAgICAgICAgICAgIDxsaT5BIHNoYWRvdyB3aGVyZSB0aGUgaXRlbSB3b3VsZCBiZSBkcm9wcGVkIG9mZmVycyA8c3Ryb25nPnZpc3VhbCBmZWVkYmFjazwvc3Ryb25nPjwvbGk+XFxuICAgICAgICAgICAgPGxpPlRvdWNoIGV2ZW50cyE8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8aDI+Rm9yIGluc3RhbGxhdGlvbiwgdXNhZ2UgYW5kIGV4YW1wbGVzIGdvIHRvIDxhIHVpLXNyZWY9XFxcImRvY3NcXFwiPmRvY3M8L2E+PC9oMj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDwhLS0vcm93LS0+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tLy5jb2wteHMtMTIuY29sLXNtLTktLT5cXG4gIDwvZGl2PlxcbiAgPCEtLS9yb3ctLT5cXG48L2Rpdj5cXG5cIik7fV0pOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBkcmFndWxhciBEaXJlY3RpdmUgYnkgTHVja3lsb29rZSBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhclxuICogQW5ndWxhciB2ZXJzaW9uIG9mIGRyYWd1bGEgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGFcbiAqL1xuIHZhciBkcmFndWxhck1vZHVsZSA9IHJlcXVpcmUoJy4vZHJhZ3VsYXJNb2R1bGUnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZHJhZ3VsYXJNb2R1bGUuZGlyZWN0aXZlKCdkcmFndWxhcicsIFsnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24oZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbigkc2NvcGUsIGlFbG0sIGlBdHRycykge1xuXG4gICAgICB2YXIgb3B0aW9ucyA9ICRzY29wZVtpQXR0cnMuZHJhZ3VsYXJdIHx8IHRyeUpzb24oaUF0dHJzLmRyYWd1bGFyKTtcblxuICAgICAgZnVuY3Rpb24gdHJ5SnNvbihqc29uKSB7XG4gICAgICAgIHRyeSB7IC8vIEkgZG9udCBsaWtlIHRyeSBjYXRjaCBzb2x1dGlvbnMgYnV0IEkgaGF2ZW50IGZpbmQgc2F0dGlzZnlpbmcgd2F5IG9mIGNoY2Vja2luZyBqc29uIHZhbGlkaXR5LlxuICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMuY29udGFpbmVyc01vZGVsICYmIHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCA9PT0gJ3N0cmluZycpe1xuICAgICAgICBvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCA9ICRzY29wZS4kZXZhbChvcHRpb25zLmNvbnRhaW5lcnNNb2RlbCk7XG4gICAgICB9XG5cbiAgICAgIGRyYWd1bGFyU2VydmljZShpRWxtWzBdLCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG59XSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnZHJhZ3VsYXJNb2R1bGUnLCBbXSk7XG5cbih7XCJkcmFndWxhckRpcmVjdGl2ZVwiOnJlcXVpcmUoXCIuL2RyYWd1bGFyRGlyZWN0aXZlLmpzXCIpLFwiZHJhZ3VsYXJTZXJ2aWNlXCI6cmVxdWlyZShcIi4vZHJhZ3VsYXJTZXJ2aWNlLmpzXCIpfSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGRyYWd1bGFyIE1vZHVsZSBhbmQgU2VydmljZSBieSBMdWNreWxvb2tlIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG5cbnZhciBkcmFndWxhck1vZHVsZSA9IHJlcXVpcmUoJy4vZHJhZ3VsYXJNb2R1bGUnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5kcmFndWxhck1vZHVsZS5mYWN0b3J5KCdkcmFndWxhclNlcnZpY2UnLCBbJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiBkcmFndWxhKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XG5cbiAgdmFyIGNvbnRhaW5lcnNOYW1lU3BhY2VkID0ge30sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnNcbiAgICBjb250YWluZXJzTmFtZVNwYWNlZE1vZGVsID0ge30sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnMgbW9kZWxzXG4gICAgX2NhY2hlID0ge30sIC8vIGNsYXNzZXMgbG9va3VwIGNhY2hlXG4gICAgX21pcnJvcjsgLy8gbWlycm9yIGltYWdlXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGluaXRpYWxDb250YWluZXJzLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiAhQXJyYXkuaXNBcnJheShpbml0aWFsQ29udGFpbmVycykgJiYgIWFuZ3VsYXIuaXNFbGVtZW50KGluaXRpYWxDb250YWluZXJzKSAmJiAhaW5pdGlhbENvbnRhaW5lcnNbMF0pIHtcbiAgICAgIC8vIHRoZW4gY29udGFpbmVycyBhcmUgbm90IHByb3ZpZGVkLCBvbmx5IG9wdGlvbnNcbiAgICAgIG9wdGlvbnMgPSBpbml0aWFsQ29udGFpbmVycztcbiAgICAgIGluaXRpYWxDb250YWluZXJzID0gW107XG4gICAgfVxuXG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgX3NvdXJjZSwgLy8gc291cmNlIGNvbnRhaW5lclxuICAgICAgX2l0ZW0sIC8vIGl0ZW0gYmVpbmcgZHJhZ2dlZFxuICAgICAgX3NvdXJjZU1vZGVsLCAvLyBzb3VyY2UgY29udGFpbmVyIG1vZGVsXG4gICAgICBfaXRlbU1vZGVsLCAvLyBpdGVtLW1vZGVsIGJlaW5nIGRyYWdnZWRcbiAgICAgIF90YXJnZXRNb2RlbCwgLy8gdGFyZ2V0IGNvbnRhaW5lciBtb2RlbFxuICAgICAgX2xhc3RUYXJnZXRNb2RlbCwgLy8gbGFzdCB0YXJnZXQgY29udGFpbmVyIG1vZGVsXG4gICAgICBfbGFzdERyb3BUYXJnZXQgPSBudWxsLCAvLyBsYXN0IGNvbnRhaW5lciBpdGVtIHdhcyBvdmVyXG4gICAgICBfb2Zmc2V0WCwgLy8gcmVmZXJlbmNlIHhcbiAgICAgIF9vZmZzZXRZLCAvLyByZWZlcmVuY2UgeVxuICAgICAgX29mZnNldFhyLCAvLyByZWZlcmVuY2UgeCByaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX29mZnNldFliLCAvLyByZWZlcmVuY2UgeSBib3R0b20gZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9jbGllbnRYLCAvLyBjYWNoZSBjbGllbnQgeCwgaW5pdCBhdCBncmFiLCB1cGRhdGUgYXQgZHJhZ1xuICAgICAgX2NsaWVudFksIC8vIGNhY2hlIGNsaWVudCB5LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfbWlycm9yV2lkdGgsIC8vIG1pcnJvciB3aWR0aCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX21pcnJvckhlaWdodCwgLy8gbWlycm9yIGhlaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2luaXRpYWxTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50U2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgbm93XG4gICAgICBfaW5pdGlhbEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggd2hlbiBncmFiYmVkXG4gICAgICBfY3VycmVudEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggbm93XG4gICAgICBfbGFzdE92ZXJFbGVtLCAvLyBsYXN0IGVsZW1lbnQgYmVoaW5kIHRoZSBjdXJzb3IgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2xhc3RPdmVyQ2xhc3MsIC8vIGxhc3Qgb3ZlckNsYXNzIHVzZWQgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2NvcHksIC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICAgICAgX2NvcHlNb2RlbCwgLy8gaXRlbS1tb2RlbCB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29udGFpbmVycyA9IHt9LCAvLyBjb250YWluZXJzIG1hbmFnZWQgYnkgdGhlIGRyYWtlXG4gICAgICBfY29udGFpbmVyc01vZGVsID0ge30sIC8vIGNvbnRhaW5lcnMgbW9kZWxcbiAgICAgIF9yZW5kZXJUaW1lciwgLy8gdGltZXIgZm9yIHNldFRpbWVvdXQgcmVuZGVyTWlycm9ySW1hZ2VcbiAgICAgIF9pc0NvbnRhaW5lciwgLy8gaW50ZXJuYWwgaXNDb250YWluZXJcbiAgICAgIF90YXJnZXRDb250YWluZXIsIC8vIGRyb3BwYWJsZSBjb250YWluZXIgdW5kZXIgZHJhZyBpdGVtXG4gICAgICBkZWZhdWx0Q2xhc3NlcyA9IHtcbiAgICAgICAgbWlycm9yOiAnZ3UtbWlycm9yJyxcbiAgICAgICAgaGlkZTogJ2d1LWhpZGUnLFxuICAgICAgICB1bnNlbGVjdGFibGU6ICdndS11bnNlbGVjdGFibGUnLFxuICAgICAgICB0cmFuc2l0OiAnZ3UtdHJhbnNpdCcsXG4gICAgICAgIG92ZXJBY3RpdmU6ICdndS1vdmVyLWFjdGl2ZScsXG4gICAgICAgIG92ZXJBY2NlcHRzOiAnZ3Utb3Zlci1hY2NlcHQnLFxuICAgICAgICBvdmVyRGVjbGluZXM6ICdndS1vdmVyLWRlY2xpbmUnXG4gICAgICB9LFxuICAgICAgbyA9IHsgLy8gb3B0aW9uc1xuICAgICAgICBjbGFzc2VzOiBkZWZhdWx0Q2xhc3NlcyxcbiAgICAgICAgY29udGFpbmVyczogZmFsc2UsXG4gICAgICAgIG1vdmVzOiBhbHdheXMsXG4gICAgICAgIGFjY2VwdHM6IGFsd2F5cyxcbiAgICAgICAgaXNDb250YWluZXI6IG5ldmVyLFxuICAgICAgICBjb3B5OiBmYWxzZSxcbiAgICAgICAgZGVsYXk6IGZhbHNlLFxuICAgICAgICBpbnZhbGlkOiBpbnZhbGlkVGFyZ2V0LFxuICAgICAgICByZXZlcnRPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgcmVtb3ZlT25TcGlsbDogZmFsc2UsXG4gICAgICAgIGRyYWdPdmVyQ2xhc3NlczogZmFsc2UsXG4gICAgICAgIGxvY2tYOiBmYWxzZSxcbiAgICAgICAgbG9ja1k6IGZhbHNlLFxuICAgICAgICBib3VuZGluZ0JveDogZmFsc2UsXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogZmFsc2VcbiAgICAgIH07XG5cbiAgICBpZiAoIWlzRWxlbWVudChvLmJvdW5kaW5nQm94KSkge1xuICAgICAgby5ib3VuZGluZ0JveCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5jbGFzc2VzKSB7XG4gICAgICBhbmd1bGFyLmV4dGVuZChkZWZhdWx0Q2xhc3Nlcywgb3B0aW9ucy5jbGFzc2VzKTtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKG9wdGlvbnMuY2xhc3NlcywgZGVmYXVsdENsYXNzZXMpO1xuICAgIH1cblxuICAgIGFuZ3VsYXIuZXh0ZW5kKG8sIG9wdGlvbnMpO1xuXG4gICAgaWYgKG8uZGVsYXkgPT09IHRydWUpIHtcbiAgICAgIG8uZGVsYXkgPSAzMDA7XG4gICAgfVxuXG4gICAgaWYgKG8ubWlycm9yQ29udGFpbmVyID09PSB2b2lkIDApIHtcbiAgICAgIG8ubWlycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICAvLyBnZXQgaW5pdGlhbCBjb250YWluZXJzIGZyb20gb3B0aW9ucywgYXJndW1lbnQgb3IgZmFsbCBiYWNrIHRvIGVtcHR5IGFycmF5IChjb250YWluZXJzIGNhbiBiZSBhZGRlZCBsYXRlcilcbiAgICBpbml0aWFsQ29udGFpbmVycyA9IG8uY29udGFpbmVycyB8fCAoaW5pdGlhbENvbnRhaW5lcnMgPyBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpIDogW10pO1xuICAgIGlmIChvLmNvbnRhaW5lcnMpIHtcbiAgICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBvLmNvbnRhaW5lcnNcbiAgICAgIGluaXRpYWxDb250YWluZXJzID0gbWFrZUFycmF5KGluaXRpYWxDb250YWluZXJzKTtcbiAgICB9XG4gICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICBvLmNvbnRhaW5lcnNNb2RlbCA9IEFycmF5LmlzQXJyYXkoby5jb250YWluZXJzTW9kZWxbMF0pID8gby5jb250YWluZXJzTW9kZWwgOiBbby5jb250YWluZXJzTW9kZWxdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycykge1xuICAgICAgaWYgKCFjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdKSB7XG4gICAgICAgIGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0sIGluaXRpYWxDb250YWluZXJzKTtcbiAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0gPSBjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdO1xuICAgIH1cblxuICAgIC8vIGZlZWQgbmFtZXNwYWNlZCBjb250YWluZXJzIGdyb3VwcyBhbmQgb3B0aW9uYWx5IHNoYWRvdyBpdCBieSBtb2RlbHNcbiAgICBpZiAoby5uYW1lU3BhY2UpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShvLm5hbWVTcGFjZSkpIHtcbiAgICAgICAgby5uYW1lU3BhY2UgPSBbby5uYW1lU3BhY2VdO1xuICAgICAgfVxuICAgICAgby5uYW1lU3BhY2UuZm9yRWFjaChmdW5jdGlvbiBlYWNoTmFtZVNwYWNlKG5hbWVTcGFjZSkge1xuICAgICAgICBwcm9jZWVkTmFtZVNwYWNlcyhfY29udGFpbmVycywgY29udGFpbmVyc05hbWVTcGFjZWQsIG5hbWVTcGFjZSwgaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBwcm9jZWVkTmFtZVNwYWNlcyhfY29udGFpbmVyc01vZGVsLCBjb250YWluZXJzTmFtZVNwYWNlZE1vZGVsLCBuYW1lU3BhY2UsIG8uY29udGFpbmVyc01vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBfaXNDb250YWluZXIgPSBpc0NvbnRhaW5lck5hbWVTcGFjZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlZmF1bHQgKG5vdCB1c2luZyBuYW1lU3BhY2VzKVxuICAgICAgX2NvbnRhaW5lcnMgPSBpbml0aWFsQ29udGFpbmVycztcbiAgICAgIF9pc0NvbnRhaW5lciA9IGlzQ29udGFpbmVyO1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIF9jb250YWluZXJzTW9kZWwgPSBvLmNvbnRhaW5lcnNNb2RlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL3JlZ2lzdGVyIGV2ZW50c1xuICAgIGV2ZW50cygpO1xuXG4gICAgdmFyIGRyYWtlID0ge1xuICAgICAgYWRkQ29udGFpbmVyOiBtYW5pcHVsYXRlQ29udGFpbmVycygnYWRkJyksXG4gICAgICByZW1vdmVDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdyZW1vdmUnKSxcbiAgICAgIGNvbnRhaW5lcnM6IF9jb250YWluZXJzLFxuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgZW5kOiBlbmQsXG4gICAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICByZXR1cm4gZHJha2U7XG5cbiAgICAvLyBtYWtlIGFycmF5IGZyb20gYXJyYXktbGlrZSBvYmplY3RzIG9yIGZyb20gc2luZ2xlIGVsZW1lbnRcbiAgICBmdW5jdGlvbiBtYWtlQXJyYXkoYWxsKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhbGwpKSB7XG4gICAgICAgIHJldHVybiBhbGw7XG4gICAgICB9XG4gICAgICBpZiAoYWxsLmxlbmd0aCkgeyAvLyBpcyBhcnJheS1saWtlXG4gICAgICAgIHZhciBpQWxsID0gYWxsLmxlbmd0aCxcbiAgICAgICAgICBuZXdBcnJheSA9IFtdO1xuICAgICAgICB3aGlsZSAoaUFsbCkge1xuICAgICAgICAgIGlBbGwtLTtcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGFsbFtpQWxsXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgfSBlbHNlIHsgLy8gaXMgb25lIGVsZW1lbnRcbiAgICAgICAgcmV0dXJuIFthbGxdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCBvciByZW1vdmUgY29udGFpbmVycyAtIGRlcHJlY2F0ZWRcbiAgICBmdW5jdGlvbiBtYW5pcHVsYXRlQ29udGFpbmVycyhvcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFkZE9yUmVtb3ZlKGFsbCkge1xuICAgICAgICB2YXIgY2hhbmdlcyA9IEFycmF5LmlzQXJyYXkoYWxsKSA/IGFsbCA6IG1ha2VBcnJheShhbGwpO1xuICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICAgICAgICBpZiAoby5uYW1lU3BhY2UpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChvLm5hbWVTcGFjZSwgZnVuY3Rpb24gYWRkUmVtb3ZlTmFtZXNwYWNlZChjb250YWluZXJzLCBuYW1lU3BhY2UpIHtcbiAgICAgICAgICAgICAgaWYgKG9wID09PSAnYWRkJykge1xuICAgICAgICAgICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0ucHVzaChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLmFkZENvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfY29udGFpbmVyc1tuYW1lU3BhY2VdLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLnJlbW92ZUNvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgICAgX2NvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5hZGRDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfY29udGFpbmVycy5zcGxpY2UoX2NvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLCAxKTtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UucmVtb3ZlQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ29udGFpbmVyKGVsKSB7XG4gICAgICByZXR1cm4gZHJha2UuY29udGFpbmVycy5pbmRleE9mKGVsKSAhPT0gLTEgfHwgby5pc0NvbnRhaW5lcihlbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDb250YWluZXJOYW1lU3BhY2VkKGVsKSB7XG4gICAgICB2YXIgbmFtZVNwYWNlO1xuICAgICAgZm9yIChuYW1lU3BhY2UgaW4gZHJha2UuY29udGFpbmVycykge1xuICAgICAgICBpZiAoZHJha2UuY29udGFpbmVycy5oYXNPd25Qcm9wZXJ0eShuYW1lU3BhY2UpICYmIGRyYWtlLmNvbnRhaW5lcnNbbmFtZVNwYWNlXS5pbmRleE9mKGVsKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2ZW50cyhyZW0pIHtcbiAgICAgIHZhciBvcCA9IHJlbSA/ICdvZmYnIDogJ29uJztcbiAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgb3AsICdtb3VzZXVwJywgcmVsZWFzZSk7XG5cbiAgICAgIGluaXRpYWxDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gYWRkTW91c2VEb3duKGNvbnRhaW5lcikge1xuICAgICAgICByZWdFdmVudChjb250YWluZXIsICdvbicsICdtb3VzZWRvd24nLCBncmFiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBldmVudHModHJ1ZSk7XG4gICAgICBkcmFrZS5yZW1vdmVDb250YWluZXIoX2NvbnRhaW5lcnMpO1xuICAgICAgcmVsZWFzZSh7fSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ3JhYihlKSB7XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICB2YXIgaXRlbSA9IGUudGFyZ2V0O1xuXG4gICAgICAvLyBmaWx0ZXIgc29tZSBvZGQgc2l0dWF0aW9uc1xuICAgICAgaWYgKChlLndoaWNoICE9PSAwICYmIGUud2hpY2ggIT09IDEpIHx8IGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuOyAvLyB3ZSBvbmx5IGNhcmUgYWJvdXQgaG9uZXN0LXRvLWdvZCBsZWZ0IGNsaWNrcyBhbmQgdG91Y2ggZXZlbnRzXG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGRyYWcgY2FuIHN0YXJ0XG4gICAgICBpZiAoc3RhcnQoaXRlbSkgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdXRvbWF0aWNseSBkZXRlY3QgZGlyZWN0aW9uIG9mIGVsZW1lbnRzIGlmIG5vdCBzZXQgaW4gb3B0aW9uc1xuICAgICAgaWYgKCFvLmRpcmVjdGlvbikge1xuICAgICAgICB2YXIgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgIHBhcmVudEhlaWdodCA9IHBhcmVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgcGFyZW50V2lkdGggPSBwYXJlbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgY2hpbGRIZWlnaHQgPSBpdGVtLmNsaWVudEhlaWdodCxcbiAgICAgICAgICBjaGlsZFdpZHRoID0gaXRlbS5jbGllbnRXaWR0aDtcbiAgICAgICAgby5kaXJlY3Rpb24gPSBwYXJlbnRIZWlnaHQgLyBjaGlsZEhlaWdodCA8IHBhcmVudFdpZHRoIC8gY2hpbGRXaWR0aCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICB9XG5cbiAgICAgIC8vIGdldCBpbml0aWFsIGNvb3JkaW5hdGVzLCB1c2VkIHRvIHJlbmRlciBfbWlycm9yIGZvciBmaXJzdCB0aW1lXG4gICAgICB2YXIgb2Zmc2V0ID0gZ2V0T2Zmc2V0KF9pdGVtKTtcbiAgICAgIF9vZmZzZXRYID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSkgLSBvZmZzZXQubGVmdDtcbiAgICAgIF9vZmZzZXRZID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSkgLSBvZmZzZXQudG9wO1xuICAgICAgX2NsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgX2NsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuXG4gICAgICAvLyBsaW1pdGluZyBhcmVhIG9mIF9taXJyb3IgbW92ZW1lbnQsIGdldCBpbml0aWFsIGNvb3JkaW5hdGVzXG4gICAgICBpZiAoby5ib3VuZGluZ0JveCkge1xuICAgICAgICBfb2Zmc2V0WHIgPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5yaWdodDtcbiAgICAgICAgX29mZnNldFliID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSkgLSBvZmZzZXQuYm90dG9tO1xuICAgICAgfVxuXG4gICAgICAvLyBkZWxheWVkIHJlbmRlcmluZ1xuICAgICAgaWYgKHR5cGVvZiBvLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBfcmVuZGVyVGltZXIgPSAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZW5kZXJNaXJyb3JBbmREcmFnKGUpO1xuICAgICAgICB9LCBvLmRlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlck1pcnJvckFuZERyYWcoZSk7XG4gICAgICB9XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXJyb3JBbmREcmFnKGUpIHtcbiAgICAgIGFkZENsYXNzKF9jb3B5IHx8IF9pdGVtLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICByZW5kZXJNaXJyb3JJbWFnZSgpO1xuICAgICAgLy8gaW5pdGlhbCBwb3NpdGlvblxuICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0gX2NsaWVudFggLSBfb2Zmc2V0WCArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gX29mZnNldFkgKyAncHgnO1xuXG4gICAgICBkcmFnKGUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RhcnQoaXRlbSkge1xuICAgICAgdmFyIGhhbmRsZSA9IGl0ZW07XG5cbiAgICAgIGlmIChkcmFrZS5kcmFnZ2luZyAmJiBfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjsgLy8gYWxyZWFkeSBkcmFnZ2luZ1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzQ29udGFpbmVyKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybjsgLy8gZG9uJ3QgZHJhZyBjb250YWluZXIgaXRzZWxmXG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChpdGVtLnBhcmVudEVsZW1lbnQgJiYgIV9pc0NvbnRhaW5lcihpdGVtLnBhcmVudEVsZW1lbnQpKSB7XG4gICAgICAgIC8vIGJyZWFrIGxvb3AgaWYgdXNlciB0cmllcyB0byBkcmFnIGl0ZW0gd2hpY2ggaXMgY29uc2lkZXJlZCBpbnZhbGlkIGhhbmRsZVxuICAgICAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50RWxlbWVudDsgLy8gZHJhZyB0YXJnZXQgc2hvdWxkIGJlIGltbWVkaWF0ZSBjaGlsZCBvZiBjb250YWluZXJcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWNvbnRhaW5lciB8fCBvLmludmFsaWQoaXRlbSwgaGFuZGxlKSB8fCAhby5tb3ZlcyhpdGVtLCBjb250YWluZXIsIGhhbmRsZSwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsKSkgeyAvLyBpcyBtb3ZhYmxlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZW5kKCk7XG5cbiAgICAgIC8vIHByZXBhcmUgbW9kZWxzIG9wZXJhdGlvbnNcbiAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICB2YXIgY29udGFpbmVySW5kZXggPSBpbml0aWFsQ29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksXG4gICAgICAgICAgaXRlbUluZGV4ID0gZG9tSW5kZXhPZihpdGVtLCBjb250YWluZXIpO1xuXG4gICAgICAgIF9pbml0aWFsSW5kZXggPSBfY3VycmVudEluZGV4ID0gaXRlbUluZGV4O1xuICAgICAgICBfc291cmNlTW9kZWwgPSBvLmNvbnRhaW5lcnNNb2RlbFtjb250YWluZXJJbmRleF07XG4gICAgICAgIF90YXJnZXRNb2RlbCA9IF9zb3VyY2VNb2RlbDtcbiAgICAgICAgX2l0ZW1Nb2RlbCA9IF9zb3VyY2VNb2RlbFtpdGVtSW5kZXhdO1xuICAgICAgICBpZiAoby5jb3B5KSB7XG4gICAgICAgICAgX2NvcHlNb2RlbCA9IGFuZ3VsYXIuY29weShfaXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoby5jb3B5KSB7XG4gICAgICAgIF9jb3B5ID0gaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnY2xvbmVkJywgX2NvcHksIGl0ZW0sIF9jb3B5TW9kZWwsIF9pdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9zb3VyY2UgPSBjb250YWluZXI7XG4gICAgICBfaXRlbSA9IGl0ZW07XG4gICAgICBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBuZXh0RWwoaXRlbSk7XG5cbiAgICAgIGRyYWtlLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2RyYWcnLCBfaXRlbSwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludmFsaWRUYXJnZXQoZWwpIHtcbiAgICAgIHJldHVybiBlbC50YWdOYW1lID09PSAnQScgfHwgZWwudGFnTmFtZSA9PT0gJ0JVVFRPTic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kKCkge1xuICAgICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnISEhISEgSSBoYXZlbnQgc2VlbiB0aGlzIG1lc3NhZ2UgaW4gYW55IGNhc2UnKTtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICBkcm9wKGl0ZW0sIGl0ZW0ucGFyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVsZWFzZShlKSB7XG4gICAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgX2NsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgX2NsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuXG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBlbGVtZW50QmVoaW5kQ3Vyc29yID0gZ2V0RWxlbWVudEJlaGluZFBvaW50KF9taXJyb3IsIF9jbGllbnRYLCBfY2xpZW50WSksXG4gICAgICAgIGRyb3BUYXJnZXQgPSBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuXG4gICAgICBpZiAoZHJvcFRhcmdldCAmJiAoby5jb3B5ID09PSBmYWxzZSB8fCBkcm9wVGFyZ2V0ICE9PSBfc291cmNlKSkge1xuICAgICAgICAvLyBmb3VuZCB2YWxpZCB0YXJnZXQgYW5kIChpcyBub3QgY29weSBjYXNlIG9yIHRhcmdldCBpcyBub3QgaW5pdGlhbCBjb250YWluZXIpXG4gICAgICAgIGRyb3AoaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgICB9IGVsc2UgaWYgKG8ucmVtb3ZlT25TcGlsbCkge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBhZnRlciByZWxlYXNlIHRoZXJlIGlzIG5vIGNvbnRhaW5lciBob3ZlcmVkXG4gICAgICBfdGFyZ2V0Q29udGFpbmVyID0gbnVsbDtcblxuICAgICAgLy8gcmVtb3ZlIGNsYXNzZXMgaWYgdXNlZFxuICAgICAgaWYgKG8uZHJhZ092ZXJDbGFzc2VzICYmIF9sYXN0T3ZlckVsZW0pIHtcbiAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgIF9sYXN0T3ZlckVsZW0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyb3AoaXRlbSwgdGFyZ2V0KSB7XG4gICAgICBpZiAoby5zY29wZSAmJiBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCwgX3RhcmdldE1vZGVsKTtcbiAgICAgIH0gZWxzZSBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcm9wJywgaXRlbSwgdGFyZ2V0LCBfc291cmNlLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCwgX3RhcmdldE1vZGVsKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudCxcbiAgICAgICAgaXRlbU1vZGVsO1xuXG4gICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1Nb2RlbCA9IF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbDtcbiAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihpdGVtTW9kZWwpLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdChvLmNvcHkgPyAnY2FuY2VsJyA6ICdyZW1vdmUnLCBpdGVtLCBwYXJlbnQsIGl0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbChyZXZlcnQpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJldmVydHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHJldmVydCA6IG8ucmV2ZXJ0T25TcGlsbCxcbiAgICAgICAgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCchISEhISEhISEhISEhISEhISBJIHRoaW5rIHRoaXMgaXMgbmV2ZXIgcG9zc2libGUgYmVjYXVzZSBjb3B5IGNhbm5vdCBiZSBwbGFjZWQgaW50byBzb3VyY2UnKTtcbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfY29weSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSwgMSwgX2NvcHlNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQocGFyZW50KTtcbiAgICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiBvLmNvcHkgPT09IGZhbHNlICYmIHJldmVydHMpIHtcbiAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIF9zb3VyY2UuaW5zZXJ0QmVmb3JlKGl0ZW0sIF9pbml0aWFsU2libGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgICAgLy8gbW92ZSBiYWNrIHRvIGluaXRpYWwgcGxhY2VtZW50XG4gICAgICAgICAgbW92ZUluQ29udGFpbmVyc01vZGVsKF9pbml0aWFsSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlICYmIChpbml0aWFsIHx8IHJldmVydHMpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICByZW1vdmVNaXJyb3JJbWFnZSgpO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBybUNsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FuY2VsIHRpbWVyXG4gICAgICBpZiAoX3JlbmRlclRpbWVyKSB7XG4gICAgICAgICR0aW1lb3V0LmNhbmNlbChfcmVuZGVyVGltZXIpO1xuICAgICAgfVxuXG4gICAgICBkcmFrZS5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnZW5kJywgaXRlbSk7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ291dCcsIGl0ZW0sIF9sYXN0RHJvcFRhcmdldCwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIF9zb3VyY2UgPSBfaXRlbSA9IF9jb3B5ID0gX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gX3NvdXJjZU1vZGVsID0gbnVsbDtcbiAgICAgIF9pdGVtTW9kZWwgPSBfY29weU1vZGVsID0gX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBfcmVuZGVyVGltZXIgPSBfbGFzdERyb3BUYXJnZXQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGlzIGl0ZW0gY3VycmVudGx5IHBsYWNlZCBpbiBvcmlnaW5hbCBjb250YWluZXIgYW5kIG9yaWdpbmFsIHBvc2l0aW9uP1xuICAgIGZ1bmN0aW9uIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHMpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gcyB8fCAoX21pcnJvciA/IF9jdXJyZW50U2libGluZyA6IG5leHRFbChfaXRlbSB8fCBfY29weSkpO1xuICAgICAgcmV0dXJuIHRhcmdldCA9PT0gX3NvdXJjZSAmJiBzaWJsaW5nID09PSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgfVxuXG4gICAgLy8gZmluZCB2YWxpZCBkcm9wIGNvbnRhaW5lclxuICAgIGZ1bmN0aW9uIGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlbGVtZW50QmVoaW5kQ3Vyc29yO1xuICAgICAgd2hpbGUgKHRhcmdldCAmJiAhYWNjZXB0ZWQoKSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG5cbiAgICAgIGZ1bmN0aW9uIGFjY2VwdGVkKCkge1xuICAgICAgICB2YXIgYWNjZXB0cyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfaXNDb250YWluZXIodGFyZ2V0KSkgeyAvLyBpcyBkcm9wcGFibGU/XG4gICAgICAgICAgX3RhcmdldENvbnRhaW5lciA9IHRhcmdldDtcblxuICAgICAgICAgIHZhciBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZCh0YXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKHRhcmdldCwgaW1tZWRpYXRlLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgICAgIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCByZWZlcmVuY2UpO1xuICAgICAgICAgIGFjY2VwdHMgPSBpbml0aWFsID8gdHJ1ZSA6IG8uYWNjZXB0cyhfaXRlbSwgdGFyZ2V0LCBfc291cmNlLCByZWZlcmVuY2UsIF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCk7XG5cbiAgICAgICAgICBpZiAoYWNjZXB0cyAmJiBvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICAgIGlmICghby5uYW1lU3BhY2UpIHtcbiAgICAgICAgICAgICAgX3RhcmdldE1vZGVsID0gX2NvbnRhaW5lcnNNb2RlbFtkcmFrZS5jb250YWluZXJzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lU3BhY2UgaW4gZHJha2UuY29udGFpbmVycykge1xuICAgICAgICAgICAgICAgIGlmIChkcmFrZS5jb250YWluZXJzLmhhc093blByb3BlcnR5KG5hbWVTcGFjZSkgJiYgZHJha2UuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YodGFyZ2V0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW25hbWVTcGFjZV1bZHJha2UuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY2xhc3MgaWYgZWxlbWVudCBpcyBlbmFibGVkIGZvciBpdCBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IHRoZSBjbGFzc1xuICAgICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiZcbiAgICAgICAgICBoYXNDbGFzcyh0YXJnZXQsIG8uY2xhc3Nlcy5vdmVyQWN0aXZlKSAmJlxuICAgICAgICAgIHRhcmdldCAhPT0gX2xhc3RPdmVyRWxlbSkge1xuXG4gICAgICAgICAgaWYgKF9sYXN0T3ZlckVsZW0pIHsgLy8gY2xlYXIgZnJvbSBwcmV2aW91c1xuICAgICAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2xhc3RPdmVyQ2xhc3MgPSBhY2NlcHRzID8gby5jbGFzc2VzLm92ZXJBY2NlcHRzIDogby5jbGFzc2VzLm92ZXJEZWNsaW5lcztcbiAgICAgICAgICBhZGRDbGFzcyh0YXJnZXQsIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICBfbGFzdE92ZXJFbGVtID0gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY2VwdHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgICBpZiAoIV9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAvLyB1cGRhdGUgY29vcmRpbmF0ZXNcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gY291bnQgbWlycm9yIGNvb3JkaWF0ZXNcbiAgICAgIHZhciB4ID0gX2NsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IF9jbGllbnRZIC0gX29mZnNldFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgICAgb2Zmc2V0Qm94O1xuXG4gICAgICAvLyBmaWxsIGV4dHJhIHByb3BlcnRpZXMgaWYgYm91bmRpbmdCb3ggaXMgdXNlZFxuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgcGFnZVggPSBnZXRDb29yZCgncGFnZVgnLCBlKTtcbiAgICAgICAgcGFnZVkgPSBnZXRDb29yZCgncGFnZVknLCBlKTtcbiAgICAgICAgb2Zmc2V0Qm94ID0gZ2V0T2Zmc2V0KG8uYm91bmRpbmdCb3gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW8ubG9ja1kpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWCA+IG9mZnNldEJveC5sZWZ0ICsgX29mZnNldFggJiYgcGFnZVggPCBvZmZzZXRCb3gucmlnaHQgKyBfb2Zmc2V0WHIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoby5ib3VuZGluZ0JveCkgeyAvLyBjaGVjayBhZ2FpbiBpbiBjYXNlIHVzZXIgc2Nyb2xsZWQgdGhlIHZpZXdcbiAgICAgICAgICBpZiAocGFnZVggPCBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIChwYWdlWCAtIG9mZnNldEJveC5sZWZ0KSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX21pcnJvcldpZHRoIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LnJpZ2h0KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIW8ubG9ja1gpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWSA+IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSAmJiBwYWdlWSA8IG9mZnNldEJveC5ib3R0b20gKyBfb2Zmc2V0WWIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGNoZWNrIGFnYWluIGluIGNhc2UgdXNlciBzY3JvbGxlZCB0aGUgdmlld1xuICAgICAgICAgIGlmIChwYWdlWSA8IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSkge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIChwYWdlWSAtIG9mZnNldEJveC50b3ApICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9taXJyb3JIZWlnaHQgLSAocGFnZVkgLSBvZmZzZXRCb3guYm90dG9tKSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSksXG4gICAgICAgIGNoYW5nZWQgPSBkcm9wVGFyZ2V0ICE9PSBudWxsICYmIGRyb3BUYXJnZXQgIT09IF9sYXN0RHJvcFRhcmdldDtcblxuICAgICAgaWYgKGNoYW5nZWQgfHwgZHJvcFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG91dCgpO1xuICAgICAgICAgIF9sYXN0RHJvcFRhcmdldCA9IGRyb3BUYXJnZXQ7XG4gICAgICAgICAgb3ZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9sYXN0RHJvcFRhcmdldCA9IGRyb3BUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZG8gbm90IGNvcHkgaW4gc2FtZSBjb250YWluZXJcbiAgICAgIGlmIChkcm9wVGFyZ2V0ID09PSBfc291cmNlICYmIG8uY29weSkge1xuICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsICYmIGl0ZW0ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfSBlbHNlIGlmIChvLmNvbnRhaW5lcnNNb2RlbCAmJiBfbGFzdFRhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCkgIT09IC0xKSB7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbC5zcGxpY2UoX2xhc3RUYXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpLCAxKTtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVmZXJlbmNlLFxuICAgICAgICBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKSxcbiAgICAgICAgcmVmZXJlbmNlSW5kZXg7XG5cbiAgICAgIGlmIChpbW1lZGlhdGUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIGltbWVkaWF0ZSwgX2NsaWVudFgsIF9jbGllbnRZKTtcbiAgICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgaWYgKHJlZmVyZW5jZSkgeyAvLyByZWZlcmVuY2UgaXMgbnVsbCBpZiBkcmFnIGlzIG92ZXIgbGFzdCBlbGVtZW50XG4gICAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IGRvbUluZGV4T2YocmVmZXJlbmNlLCBkcm9wVGFyZ2V0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvLnJldmVydE9uU3BpbGwgPT09IHRydWUgJiYgIW8uY29weSkge1xuICAgICAgICAvLyB0aGUgY2FzZSB0aGF0IG1pcnJvciBpcyBub3Qgb3ZlciB2YWxpZCB0YXJnZXQgYW5kIHJldmVydGluZyBpcyBvbiBhbmQgY29weSBpcyBvZmZcbiAgICAgICAgcmVmZXJlbmNlID0gX2luaXRpYWxTaWJsaW5nO1xuICAgICAgICBkcm9wVGFyZ2V0ID0gX3NvdXJjZTtcblxuICAgICAgICAvLyBnZXR0aW5nIG1vZGVsIGludGl0aWFsIHByb3BlcnRpZXMgaW50byBjdXJyZW50XG4gICAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gX2luaXRpYWxJbmRleDtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9zb3VyY2VNb2RlbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhlIGNhc2UgdGhhdCBtaXJyb3IgaXMgbm90IG92ZXIgdmFsaWQgdGFyZ2V0IGFuZCByZW1vdmluZyBpcyBvbiBvciBjb3B5IGlzIG9uXG4gICAgICAgIGlmICgoby5jb3B5IHx8IG8ucmVtb3ZlT25TcGlsbCA9PT0gdHJ1ZSkgJiYgaXRlbS5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gb3IgY29weSBvZiBpdGVtXG4gICAgICAgICAgaWYgKCFvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAxKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuJGFwcGx5QXN5bmMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCB8fFxuICAgICAgICByZWZlcmVuY2UgIT09IGl0ZW0gJiZcbiAgICAgICAgcmVmZXJlbmNlICE9PSBuZXh0RWwoaXRlbSkgJiZcbiAgICAgICAgcmVmZXJlbmNlICE9PSBfY3VycmVudFNpYmxpbmcpIHtcbiAgICAgICAgLy8gbW92aW5nIGl0ZW0vY29weSB0byBuZXcgY29udGFpbmVyIGZyb20gcHJldmlvdXMgb25lXG4gICAgICAgIF9jdXJyZW50U2libGluZyA9IHJlZmVyZW5jZTtcblxuICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgZHJvcFRhcmdldC5pbnNlcnRCZWZvcmUoaXRlbSwgcmVmZXJlbmNlKTsgLy8gaWYgcmVmZXJlbmNlIGlzIG51bGwgaXRlbSBpcyBpbnNlcnRlZCBhdCB0aGUgZW5kXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW92ZUluQ29udGFpbmVyc01vZGVsKHJlZmVyZW5jZUluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnc2hhZG93JywgaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbW92ZWQodHlwZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KHR5cGUsIGl0ZW0sIF9sYXN0RHJvcFRhcmdldCwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG92ZXIoKSB7XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgbW92ZWQoJ292ZXInKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvdXQoKSB7XG4gICAgICAgIGlmIChfbGFzdERyb3BUYXJnZXQpIHtcbiAgICAgICAgICBtb3ZlZCgnb3V0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlSW5Db250YWluZXJzTW9kZWwocmVmZXJlbmNlSW5kZXgpIHtcbiAgICAgIGlmIChfbGFzdFRhcmdldE1vZGVsID09PSBfdGFyZ2V0TW9kZWwpIHtcbiAgICAgICAgaWYgKHJlZmVyZW5jZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfdGFyZ2V0TW9kZWwubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHJlZmVyZW5jZUluZGV4ID4gX2N1cnJlbnRJbmRleCA/IHJlZmVyZW5jZUluZGV4IC0gMSA6IHJlZmVyZW5jZUluZGV4O1xuICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKGluZGV4LCAwLCBfbGFzdFRhcmdldE1vZGVsLnNwbGljZShfY3VycmVudEluZGV4LCAxKVswXSk7XG4gICAgICAgIF9jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZWZlcmVuY2VJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gX3RhcmdldE1vZGVsLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvLmNvcHkgfHwgX2xhc3RUYXJnZXRNb2RlbCAhPT0gX3NvdXJjZU1vZGVsKSB7IC8vIGRvbnQgcmVtb3ZlIG9yaWdpbmFsIGZyb20gc291cmNlIHdoaWxlIGNvcHlpbmdcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsLnNwbGljZShfY3VycmVudEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW8uY29weSB8fCBfdGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSA9PT0gLTEpIHsgLy8gZG9udCBwbGFjZSBjb3B5IHR3aWNlIGluIG9uZSBkcmFnXG4gICAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShyZWZlcmVuY2VJbmRleCwgMCwgX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsKTtcbiAgICAgICAgICBfY3VycmVudEluZGV4ID0gcmVmZXJlbmNlSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRyb290U2NvcGUuJGFwcGx5QXN5bmMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxDb250YWluZXIoZSkge1xuICAgICAgaWYgKF90YXJnZXRDb250YWluZXIpIHtcbiAgICAgICAgdmFyIGJlZm9yZSA9IF90YXJnZXRDb250YWluZXIuc2Nyb2xsVG9wO1xuICAgICAgICBfdGFyZ2V0Q29udGFpbmVyLnNjcm9sbFRvcCArPSBlLmRlbHRhWTtcbiAgICAgICAgLy8gYmxvY2sgc2Nyb2xsIG9mIHRoZSBkb2N1bWVudCB3aGVuIGNvbnRhaW5lciBjYW4gYmUgc2Nyb2xsZWRcbiAgICAgICAgaWYgKGJlZm9yZSAhPT0gX3RhcmdldENvbnRhaW5lci5zY3JvbGxUb3ApIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF9taXJyb3IgPSBfaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBfbWlycm9yV2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgX21pcnJvckhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgX21pcnJvci5zdHlsZS53aWR0aCA9IGdldFJlY3RXaWR0aChyZWN0KSArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLmhlaWdodCA9IGdldFJlY3RIZWlnaHQocmVjdCkgKyAncHgnO1xuICAgICAgcm1DbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICBhZGRDbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMubWlycm9yKTtcbiAgICAgIG8ubWlycm9yQ29udGFpbmVyLmFwcGVuZENoaWxkKF9taXJyb3IpO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCAnb24nLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICBhZGRDbGFzcyhib2R5LCBvLmNsYXNzZXMudW5zZWxlY3RhYmxlKTtcbiAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvbicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfbWlycm9yLCBfaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWlycm9ySW1hZ2UoKSB7XG4gICAgICBpZiAoX21pcnJvcikge1xuICAgICAgICBybUNsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvZmYnLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvZmYnLCAnd2hlZWwnLCBzY3JvbGxDb250YWluZXIpO1xuICAgICAgICBfbWlycm9yLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX21pcnJvcik7XG4gICAgICAgIF9taXJyb3IgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIHRhcmdldCkge1xuICAgICAgdmFyIGltbWVkaWF0ZSA9IHRhcmdldDtcbiAgICAgIHdoaWxlIChpbW1lZGlhdGUgIT09IGRyb3BUYXJnZXQgJiYgaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQgIT09IGRyb3BUYXJnZXQpIHtcbiAgICAgICAgaW1tZWRpYXRlID0gaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAoaW1tZWRpYXRlID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW1tZWRpYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCB0YXJnZXQsIHgsIHkpIHtcbiAgICAgIHZhciBob3Jpem9udGFsID0gby5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgICAgIHZhciByZWZlcmVuY2UgPSB0YXJnZXQgIT09IGRyb3BUYXJnZXQgPyBpbnNpZGUoKSA6IG91dHNpZGUoKTtcbiAgICAgIHJldHVybiByZWZlcmVuY2U7XG5cbiAgICAgIGZ1bmN0aW9uIG91dHNpZGUoKSB7IC8vIHNsb3dlciwgYnV0IGFibGUgdG8gZmlndXJlIG91dCBhbnkgcG9zaXRpb25cbiAgICAgICAgdmFyIGxlbiA9IGRyb3BUYXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGVsO1xuICAgICAgICB2YXIgcmVjdDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgZWwgPSBkcm9wVGFyZ2V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiByZWN0LmxlZnQgPiB4KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiByZWN0LnRvcCA+IHkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGluc2lkZSgpIHsgLy8gZmFzdGVyLCBidXQgb25seSBhdmFpbGFibGUgaWYgZHJvcHBlZCBpbnNpZGUgYSBjaGlsZCBlbGVtZW50XG4gICAgICAgIHZhciByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHggPiByZWN0LmxlZnQgKyBnZXRSZWN0V2lkdGgocmVjdCkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh5ID4gcmVjdC50b3AgKyBnZXRSZWN0SGVpZ2h0KHJlY3QpIC8gMik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmUoYWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGFmdGVyID8gbmV4dEVsKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsKHNjcm9sbFByb3AsIG9mZnNldFByb3ApIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93W29mZnNldFByb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93W29mZnNldFByb3BdO1xuICAgICAgfVxuICAgICAgaWYgKGRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib2R5W3Njcm9sbFByb3BdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKCdzY3JvbGxUb3AnLCAncGFnZVlPZmZzZXQnKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbCgnc2Nyb2xsTGVmdCcsICdwYWdlWE9mZnNldCcpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tICsgc2Nyb2xsVG9wXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRCZWhpbmRQb2ludChwb2ludCwgeCwgeSkge1xuICAgICAgaWYgKCF4ICYmICF5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHAgPSBwb2ludCB8fCB7fSxcbiAgICAgICAgc3RhdGUgPSBwLmNsYXNzTmFtZSxcbiAgICAgICAgZWw7XG4gICAgICBwLmNsYXNzTmFtZSArPSAnICcgKyBvLmNsYXNzZXMuaGlkZTtcbiAgICAgIGVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgIHAuY2xhc3NOYW1lID0gc3RhdGU7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZ0V2ZW50KGVsLCBvcCwgdHlwZSwgZm4pIHtcbiAgICB2YXIgdG91Y2ggPSB7XG4gICAgICAgIG1vdXNldXA6ICd0b3VjaGVuZCcsXG4gICAgICAgIG1vdXNlZG93bjogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3VzZW1vdmU6ICd0b3VjaG1vdmUnLFxuICAgICAgICB3aGVlbDogJ3doZWVsJ1xuICAgICAgfSxcbiAgICAgICRlbCA9IGFuZ3VsYXIuZWxlbWVudChlbCk7XG5cbiAgICAkZWxbb3BdKHRvdWNoW3R5cGVdLCBmbik7XG4gICAgJGVsW29wXSh0eXBlLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXZlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0RWwoZWwpIHtcbiAgICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG5cbiAgICBmdW5jdGlvbiBtYW51YWxseSgpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgICBkbyB7XG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vQ2Fubm90IHVzZSBhbmd1bGFyLmlzRWxlbWVudCBiZWNhdXNlIHdlIG5lZWQgdG8gY2hlY2sgcGxhaW4gZG9tIGVsZW1lbnQsIG5vIGpRbGl0ZSB3cmFwcGVkXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcbiAgICAgIG8gJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9va3VwQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNhY2hlZCA9IF9jYWNoZVtjbGFzc05hbWVdO1xuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIGNhY2hlZC5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBfY2FjaGVbY2xhc3NOYW1lXSA9IGNhY2hlZCA9IG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMpJyArIGNsYXNzTmFtZSArICcoPzpcXFxcc3wkKScsICdnJyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBlbC5jbGFzc05hbWU7XG4gICAgaWYgKCFjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoIWxvb2t1cENsYXNzKGNsYXNzTmFtZSkudGVzdChjdXJyZW50KSkge1xuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBybUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShsb29rdXBDbGFzcyhjbGFzc05hbWUpLCAnICcpLnRyaW0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudEhvc3QoZSkge1xuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgICB2YXIgbWlzc01hcCA9IHtcbiAgICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgICB9O1xuICAgIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RbY29vcmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdFdpZHRoKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0SGVpZ2h0KHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgfHwgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9tSW5kZXhPZihjaGlsZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYW5ndWxhci5lbGVtZW50KHBhcmVudCkuY2hpbGRyZW4oKSwgY2hpbGQpO1xuICB9XG5cbn1dKTtcbiJdfQ==
