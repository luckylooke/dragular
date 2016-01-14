(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

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
    dragularService.cleanEnviroment();
    dragularService([containers[0],containers[1]],{
      containersModel: [$scope.items1, $scope.items2]
    });
  }]);

},{"../examplesApp":26}],2:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Basic', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService.cleanEnviroment();
	dragularService('.containerVertical');
  }]);
},{"../examplesApp":26}],3:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('BoundingBoxLockX', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    var boundingBox = $element.children().children()[0];
    dragularService.cleanEnviroment();
	dragularService(boundingBox, {
      boundingBox: boundingBox,
      lockX: true
    });
  }]);

},{"../examplesApp":26}],4:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('BoundingBoxLockY', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    var boundingBox = $element.children().children()[0];
    dragularService.cleanEnviroment();
	dragularService(boundingBox, {
      boundingBox: boundingBox,
      lockY: true
    });
  }]);
},{"../examplesApp":26}],5:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('BoundingBox', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    var boundingBox = $element[0];
    dragularService.cleanEnviroment();
	dragularService($element.children(), {
      boundingBox: boundingBox
    });
  }]);

},{"../examplesApp":26}],6:[function(require,module,exports){
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
    dragularService.cleanEnviroment();
    dragularService([containers[0],containers[1]],{
      containersModel: [$scope.items1, $scope.items2],
      copy: true
    });
  }]);

},{"../examplesApp":26}],7:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Copy', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService.cleanEnviroment();
	dragularService($element.children(), {
      copy: true
    });
  }]);

},{"../examplesApp":26}],8:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('CustomClasses', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService.cleanEnviroment();
	dragularService($element.children(), {
      classes: {
        mirror: 'custom-green-mirror'
      }
    });
  }]);

},{"../examplesApp":26}],9:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('DifferentOptionsModel', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
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

    var containerLeft = document.querySelector('#containerLeft'),
      containerRight = document.querySelector('#containerRight');

    function accepts(el, target, source) {
      // left->right || in same container
      if (source === containerLeft || source === target) {
        return true;
      }
    }

    dragularService.cleanEnviroment();
    dragularService([containerLeft], {
      containersModel: [$scope.items1],
      copy: true,
      copySortSource: true,
      //move only from left to right
      accepts: accepts
    });

    dragularService([containerRight], {
      containersModel: [$scope.items2],
      removeOnSpill: true,
      //move only from left to right
      accepts: accepts
    });

  }]);

},{"../examplesApp":26}],10:[function(require,module,exports){
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

},{"../examplesApp":26}],11:[function(require,module,exports){
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
},{"../examplesApp":26}],12:[function(require,module,exports){
/* global angular */
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('DragOverEvents', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService.cleanEnviroment();
    dragularService([$element.children()[0], $element.children()[2]], {
      nameSpace: 'apples'
    });
    dragularService([$element.children()[1], $element.children()[3]], {
      nameSpace: 'oranges'
    });

    // containers events handling
    function registerEvents(el) {
      el.on('dragularenter', function(e) {
        if (el[0] === e.target) { // filter bubbled
          el.addClass(dragularService.shared.extra ? 'gu-over-accept' : 'gu-over-decline');
        }
      });
      el.on('dragularleave dragularrelease', function(e) {
        if ((el[0] === e.target && // filter bubbled
          dragularService.shared.extra && // extra on dragleave contains element the drag is leaving to
          dragularService.shared.extra.parentElement !== e.target) || // is that element child of this container?
          e.type === 'dragularrelease') {
          el.removeClass('gu-over-accept');
          el.removeClass('gu-over-decline');
        }
      });
    }

    angular.forEach($element.children(), function forEachChild(el) {
      registerEvents(angular.element(el));
    });

    // notContainer events handling
    var notContainer = angular.element(document.getElementsByClassName('notContainer'));
    notContainer.on('dragularenter', function() {
      notContainer.addClass('gu-over');
    });
    notContainer.on('dragularleave dragularrelease', function() {
      notContainer.removeClass('gu-over');
    });
  }]);

},{"../examplesApp":26}],13:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Events', ['$scope', '$element', 'dragularService', '$timeout', function TodoCtrl($scope, $element, dragularService, $timeout) {
    dragularService.cleanEnviroment();
    dragularService($element.children(), {
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

    $scope.$on('dragularcloned', myFn('cloned'));
    $scope.$on('dragulardrag', myFn('drag'));
    $scope.$on('dragularcancel', myFn('cancel'));
    $scope.$on('dragulardrop', myFn('drop'));
    $scope.$on('dragularremove', myFn('remove'));
    $scope.$on('dragulardragend', myFn('dragend'));
    $scope.$on('dragularshadow', myFn('shadow'));

    function myFn(eventName) {
      return function() {
        console.log(eventName, arguments);
      };
    }

  }]);

},{"../examplesApp":26}],14:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('Handle', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService.cleanEnviroment();
	dragularService($element.children(), {
      moves: function(el, container, handle) {
        return handle.className === 'handle';
      }
    });
  }]);

},{"../examplesApp":26}],15:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('IsContainerModel', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    $scope.items1 = [{
      content: 'Move me, but you can only drop me in one of these containers.'
    }, {
      content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
    }, {
      content: 'Item 3'
    }, {
      content: 'Item 4'
    }];
    $scope.cartModel = [];

    var containerLeft = document.querySelector('#containerLeft');

    dragularService.cleanEnviroment();
    dragularService([containerLeft], {
      containersModel: [$scope.items1],
      copy: true,
      isContainer: function isContainer (el) {
        return el.id === 'cart';
      },
      isContainerModel: function getModel (){
        return $scope.cartModel;
      }
    });

    $scope.removeItem = function removeItem() {
      var index = $scope.cartModel.indexOf(this.item);
      $scope.cartModel.splice(index, 1);
    };

  }]);

},{"../examplesApp":26}],16:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NameSpaces', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService.cleanEnviroment();
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

},{"../examplesApp":26}],17:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NestedNgRepeatWithModel', ['$timeout', '$scope', '$element', 'dragularService', function NestedNgRepeatWithModelCtrl($timeout, $scope, $element, dragularService) {
    $timeout(function() { // timeount due to nested ngRepeat to be ready
      var container = $element.children().eq(0).children(),
        parentContainers = container.children(),
        nestedContainers = [];

      dragularService.cleanEnviroment();
      dragularService(container, {
        moves: function(el, container, handle) {
          return handle.classList.contains('row-handle');
        },
        containersModel: $scope.items,
        nameSpace: 'rows'
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
        })(),
        nameSpace: 'cells'
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

},{"../examplesApp":26}],18:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NestedNgRepeat', ['$timeout', '$scope', '$element', 'dragularService', function NestedNgRepeatCtrl($timeout, $scope, $element, dragularService) {
    $timeout(function() { // timeount due to ngRepeat to be ready
      dragularService.cleanEnviroment();
      dragularService($element, {
        nameSpace: 'rows',
        moves: function rowOnly (el, container, handle) {
          return handle.classList.contains('row-handle');
        }
      });

      dragularService($element.children(), {
        nameSpace: 'cells',
        moves: function excludeHandle (el, container, handle) {
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

},{"../examplesApp":26}],19:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NgRepeatFilteredWithModel', ['$scope', '$element', 'dragularService', '$filter', function TodoCtrl($scope, $element, dragularService, $filter) {
    $scope.items1 = [{
      content: 'Move me, but you can only drop me in one of these containers.'
    }, {
      content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
    }, {
      content: 'Apple 3'
    }, {
      content: 'Orange 4'
    }, {
      content: 'Orange 5'
    }, {
      content: 'Apple 6'
    }, {
      content: 'Apple 7'
    }, {
      content: 'Apple 8'
    }];
    $scope.items2 = [{
      content: 'Apple 9'
    }, {
      content: 'Orange 10'
    }, {
      content: 'Orange 11'
    }, {
      content: 'Apple 12'
    }, {
      content: 'Orange 13'
    }, {
      content: 'Apple 14'
    }];
    $scope.filter1query = 'Orange';
    $scope.filter2query = 'Orange';
    $scope.filteredModel1 = [];
    $scope.filteredModel2 = [];
    $scope.getFilteredModel = function (filteredModel, items, filterQuery) {
      filteredModel.length = 0;
      /*
      * Following one-liner is same like:
      *   var filteredModelTemp = $filter('filter')(items, filterQuery);
      *   angular.forEach(filteredModelTemp, function(item){
      *     filteredModel.push(item);
      *   });
      * Or like:
      *   var filteredModelTemp = $filter('filter')(items, filterQuery);
      *   for(var i; i < filteredModelTemp.length; i++){
      *     filteredModel.push(filteredModelTemp[i]);
      *   }
      *
      * You cannot just assign filtered array to filteredModel like this:
      *   filteredModel = $filter('filter')(items, filterQuery);
      * Because you would replace the array object you provide to dragular with new one.
      * So dragular will continue to use the one it was provided on init.
      * Hopefully I make it clear. :)
       */
      [].push.apply(filteredModel, $filter('filter')(items, filterQuery));
      return filteredModel;
    };
    var containers = $element.children().eq(1).children();
    dragularService.cleanEnviroment();
    dragularService([containers[0],containers[1]],{
      containersModel: [$scope.items1, $scope.items2],
      containersFilteredModel: [$scope.filteredModel1, $scope.filteredModel2]
    });
  }]);

},{"../examplesApp":26}],20:[function(require,module,exports){
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
    dragularService.cleanEnviroment();
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

},{"../examplesApp":26}],21:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('NgRepeat', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    dragularService.cleanEnviroment();
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

},{"../examplesApp":26}],22:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('RemoveOnSpillWithModel', ['$scope', '$element', 'dragularService', function TodoCtrl($scope, $element, dragularService) {
    $scope.items1 = [{
      content: 'Move me, but you can only drop me in containers.'
    }, {
      content: 'If you try to drop me somewhere other than containers, I\'ll die a fiery death.'
    }, {
      content: 'Item 3'
    }, {
      content: 'Item 4'
    }];
    $scope.items2 = [{
      content: 'You can drop me in the left container.'
    }, {
      content: 'Item 6'
    }, {
      content: 'Item 7'
    }, {
      content: 'Item 8'
    }];
    var containers = $element.children().eq(0).children();
    dragularService.cleanEnviroment();
    dragularService([containers[0], containers[1]], {
      containersModel: [$scope.items1, $scope.items2],
      removeOnSpill: true
    });
  }]);

},{"../examplesApp":26}],23:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('RemoveOnSpill', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService.cleanEnviroment();
	dragularService($element.children(), {
      removeOnSpill: true
    });
  }]);

},{"../examplesApp":26}],24:[function(require,module,exports){
'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
  .controller('RevertOnSpill', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService.cleanEnviroment();
	dragularService($element.children(), {
      revertOnSpill: true
    });
  }]);

},{"../examplesApp":26}],25:[function(require,module,exports){
/* global angular */
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('ScrollingDrag', ['$interval', '$element', 'dragularService', function TodoCtrl($interval, $element, dragularService) {


    var timer,
      leftScrollContainer = document.getElementById('leftScroll'),
      rightScrollContainer = document.getElementById('rightScroll'),
      leftTopBar = document.getElementById('leftTopBar'),
      leftBottomBar = document.getElementById('leftBottomBar'),
      rightTopBar = document.getElementById('rightTopBar'),
      rightBottomBar = document.getElementById('rightBottomBar');

    dragularService.cleanEnviroment();
    dragularService([leftScrollContainer, rightScrollContainer]);

    registerEvents(leftTopBar, leftScrollContainer, -5);
    registerEvents(leftBottomBar, leftScrollContainer, 5);
    registerEvents(rightTopBar, rightScrollContainer, -5);
    registerEvents(rightBottomBar, rightScrollContainer, 5);

    function registerEvents(bar, container, inc, speed) {
      if (!speed) {
        speed = 20;
      }
      angular.element(bar).on('dragularenter', function() {
        container.scrollTop += inc;
        timer = $interval(function moveScroll() {
          container.scrollTop += inc;
        }, speed);
      });
      angular.element(bar).on('dragularleave dragularrelease', function() {
        $interval.cancel(timer);
      });
    }
  }]);

},{"../examplesApp":26}],26:[function(require,module,exports){
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
        template: 'docsInstall/docsInstall.html',
        link: 'docsInstall',
        title: 'Installation'
    },{
        template: 'exampleBasic/exampleBasic.html',
        link: 'exampleBasic',
        title: 'Basic'
    },{
        template: 'exampleBasicWithModel/exampleBasicWithModel.html',
        link: 'exampleBasicWithModel',
        title: 'Basic - with model'
    },{
        template: 'exampleDifferentOptionsWithModel/exampleDifferentOptionsWithModel.html',
        link: 'exampleDifferentOptionsWithModel',
        title: 'Different options - with model'
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
        template: 'exampleRemoveOnSpillWithModel/exampleRemoveOnSpillWithModel.html',
        link: 'exampleRemoveOnSpillWithModel',
        title: 'Remove on spill - with model'
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
        template: 'exampleIsContainerWithModel/exampleIsContainerWithModel.html',
        link: 'exampleIsContainerWithModel',
        title: 'isContainer - with model'
    }, {
        template: 'exampleCustomClasses/exampleCustomClasses.html',
        link: 'exampleCustomClasses',
        title: 'Custom classes'
    }, {
        template: 'exampleNameSpaces/exampleNameSpaces.html',
        link: 'exampleNameSpaces',
        title: 'NameSpaces'
    }, {
        template: 'exampleDragOverEvents/exampleDragOverEvents.html',
        link: 'exampleDragOverEvents',
        title: 'Drag-over events'
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
        template: 'exampleNgRepeatFilteredWithModel/exampleNgRepeatFilteredWithModel.html',
        link: 'exampleNgRepeatFilteredWithModel',
        title: 'Filtered ngRepeat - with model'
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

    $scope.highlightCode = function () {
        if(document.getElementsByTagName('code').length){
            var codeBlocks = document.getElementsByTagName('code');
            for (var i = codeBlocks.length - 1; i >= 0; i--) {
                hljs.highlightBlock(codeBlocks[i]);
            }
        }
    };

    var rowOffcanvas;
    $scope.toggleSidebar = function toggleSidebar () {
        if(!rowOffcanvas){
            rowOffcanvas = angular.element(document.getElementById('rowOffcanvas'));
        }
        rowOffcanvas.toggleClass('active');
    };

}]);

({"exampleBasic":({"exampleBasic":require("./exampleBasic\\exampleBasic.js")}),"exampleBasicWithModel":({"exampleBasicWithModel":require("./exampleBasicWithModel\\exampleBasicWithModel.js")}),"exampleBoundingBox":({"exampleBoundingBox":require("./exampleBoundingBox\\exampleBoundingBox.js")}),"exampleBoundingBoxLockX":({"exampleBoundingBoxLockX":require("./exampleBoundingBoxLockX\\exampleBoundingBoxLockX.js")}),"exampleBoundingBoxLockY":({"exampleBoundingBoxLockY":require("./exampleBoundingBoxLockY\\exampleBoundingBoxLockY.js")}),"exampleCopy":({"exampleCopy":require("./exampleCopy\\exampleCopy.js")}),"exampleCopyWithModel":({"exampleCopyWithModel":require("./exampleCopyWithModel\\exampleCopyWithModel.js")}),"exampleCustomClasses":({"exampleCustomClasses":require("./exampleCustomClasses\\exampleCustomClasses.js")}),"exampleDifferentOptionsWithModel":({"exampleDifferentOptionsWithModel":require("./exampleDifferentOptionsWithModel\\exampleDifferentOptionsWithModel.js")}),"exampleDirective":({"exampleDirective":require("./exampleDirective\\exampleDirective.js")}),"exampleDirectiveWithModel":({"exampleDirectiveWithModel":require("./exampleDirectiveWithModel\\exampleDirectiveWithModel.js")}),"exampleDragOverEvents":({"exampleDragOverEvents":require("./exampleDragOverEvents\\exampleDragOverEvents.js")}),"exampleEvents":({"exampleEvents":require("./exampleEvents\\exampleEvents.js")}),"exampleHandle":({"exampleHandle":require("./exampleHandle\\exampleHandle.js")}),"exampleIsContainerWithModel":({"exampleIsContainerWithModel":require("./exampleIsContainerWithModel\\exampleIsContainerWithModel.js")}),"exampleNameSpaces":({"exampleNameSpaces":require("./exampleNameSpaces\\exampleNameSpaces.js")}),"exampleNestedNgRepeat":({"exampleNestedNgRepeat":require("./exampleNestedNgRepeat\\exampleNestedNgRepeat.js")}),"exampleNestedNgRepeatWithModel":({"exampleNestedNgRepeatWithModel":require("./exampleNestedNgRepeatWithModel\\exampleNestedNgRepeatWithModel.js")}),"exampleNgRepeat":({"exampleNgRepeat":require("./exampleNgRepeat\\exampleNgRepeat.js")}),"exampleNgRepeatFilteredWithModel":({"exampleNgRepeatFilteredWithModel":require("./exampleNgRepeatFilteredWithModel\\exampleNgRepeatFilteredWithModel.js")}),"exampleNgRepeatWithModel":({"exampleNgRepeatWithModel":require("./exampleNgRepeatWithModel\\exampleNgRepeatWithModel.js")}),"exampleRemoveOnSpill":({"exampleRemoveOnSpill":require("./exampleRemoveOnSpill\\exampleRemoveOnSpill.js")}),"exampleRemoveOnSpillWithModel":({"exampleRemoveOnSpillWithModel":require("./exampleRemoveOnSpillWithModel\\exampleRemoveOnSpillWithModel.js")}),"exampleRevertOnSpill":({"exampleRevertOnSpill":require("./exampleRevertOnSpill\\exampleRevertOnSpill.js")}),"exampleScrollingDrag":({"exampleScrollingDrag":require("./exampleScrollingDrag\\exampleScrollingDrag.js")}),"examplesRouter":require("./examplesRouter.js"),"templates":require("./templates.js")});

},{"../../../src/dragularModule":30,"./exampleBasicWithModel\\exampleBasicWithModel.js":1,"./exampleBasic\\exampleBasic.js":2,"./exampleBoundingBoxLockX\\exampleBoundingBoxLockX.js":3,"./exampleBoundingBoxLockY\\exampleBoundingBoxLockY.js":4,"./exampleBoundingBox\\exampleBoundingBox.js":5,"./exampleCopyWithModel\\exampleCopyWithModel.js":6,"./exampleCopy\\exampleCopy.js":7,"./exampleCustomClasses\\exampleCustomClasses.js":8,"./exampleDifferentOptionsWithModel\\exampleDifferentOptionsWithModel.js":9,"./exampleDirectiveWithModel\\exampleDirectiveWithModel.js":10,"./exampleDirective\\exampleDirective.js":11,"./exampleDragOverEvents\\exampleDragOverEvents.js":12,"./exampleEvents\\exampleEvents.js":13,"./exampleHandle\\exampleHandle.js":14,"./exampleIsContainerWithModel\\exampleIsContainerWithModel.js":15,"./exampleNameSpaces\\exampleNameSpaces.js":16,"./exampleNestedNgRepeatWithModel\\exampleNestedNgRepeatWithModel.js":17,"./exampleNestedNgRepeat\\exampleNestedNgRepeat.js":18,"./exampleNgRepeatFilteredWithModel\\exampleNgRepeatFilteredWithModel.js":19,"./exampleNgRepeatWithModel\\exampleNgRepeatWithModel.js":20,"./exampleNgRepeat\\exampleNgRepeat.js":21,"./exampleRemoveOnSpillWithModel\\exampleRemoveOnSpillWithModel.js":22,"./exampleRemoveOnSpill\\exampleRemoveOnSpill.js":23,"./exampleRevertOnSpill\\exampleRevertOnSpill.js":24,"./exampleScrollingDrag\\exampleScrollingDrag.js":25,"./examplesRouter.js":27,"./templates":28,"./templates.js":28}],27:[function(require,module,exports){
'use strict';

var examplesAppModule = require('./examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    var timer,
      ctrl = function routerCtrl($state, $stateParams, $timeout) {
        // go to install notes by default
        if (!$stateParams.link) {
          timer = $timeout(function timer() {
            $state.go('docs.detail', {
              link: 'docsInstall'
            });
          },0);
        }else{
          $timeout.cancel(timer);
        }
      };
      ctrl.$inject = ["$state", "$stateParams", "$timeout"];

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partials/partial-home.html'
      })
      .state('docs', {
        url: '/docs',
        templateUrl: 'partials/partial-docs.html',
        controller: ctrl
      })
      .state('docs.detail', {
        url: '/:link',
        templateUrl: function($stateParams) {
          return $stateParams.link + '/' + $stateParams.link + '.html';
        },
        controller: ctrl
      })
      .state('contribute', {
        url: '/contribute',
        templateUrl: 'partials/partial-contribute.html'
      });
  }]);

},{"./examplesApp":26}],28:[function(require,module,exports){
'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("docsInstall/docsInstall.html","<h2>Install</h2>\r\n<p>download dragular.js and dragular.css from dist folder</p>\r\n<p>OR clone git</p>\r\n<pre><code>\r\ngit clone http://github.com/luckylooke/dragular.git\r\n</code></pre>\r\n<p>OR use npm</p>\r\n<pre><code>\r\n[sudo] npm install dragular\r\n</code></pre>\r\n<p>OR use bower</p>\r\n<pre><code>\r\nbower install dragular\r\n</code></pre>\r\n<p>AND include files into your project</p>\r\n<pre><code>\r\n&lt;link href=\'styles/dragular.css\' rel=\'stylesheet\' type=\'text/css\' /&gt;\r\n&lt;script src=\'scripts/dragular.js\'&gt;&lt;/script&gt;\r\n</code></pre>\r\n<p>AND put dragularModule into dependency array</p>\r\n<pre><code>\r\nvar app = angular.module(\'myApp\', [\'dragularModule\', \'otherDependencies\']);\r\n</code></pre>\r\n<p>DONE :)</p>\r\n");
$templateCache.put("exampleBasic/exampleBasic.html","<div class=\'parent\'>\r\n  <h2>Basic</h2>\r\n  <label for=\'hy\'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\r\n  <div class=\'wrapper\' ng-controller=\"Basic\">\r\n    <div class=\'containerVertical\'>\r\n      <div>Move me, but you can only drop me in one of these containers.</div>\r\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\r\n      <div>Item 3.</div>\r\n      <div>Item 6.</div>\r\n    </div>\r\n    <div class=\'containerVertical\'>\r\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\r\n      <div ng-click=\"clicked = !clicked\" ng-class=\"clicked && \'clickedClass\'\">Try to click me, dragular distinguish drag from click</div>\r\n      <div>Item 5.</div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n        <code>\r\n// JS\r\n  controller(\'Basic\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\r\n    dragularService(\'.containerVertical\');\r\n  }])\r\n        </code>\r\n        <code>\r\n// CSS\r\n.clickedClass {\r\n  background-color: orange !important;\r\n}\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n  &lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;&gt;\r\n    &lt;div class=\'containerVertical\'&gt;\r\n        &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\r\n        &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\r\n        &lt;div&gt;Item 3.&lt;/div&gt;\r\n        &lt;div&gt;Item 6.&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\'containerVertical\'&gt;\r\n        &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\r\n        &lt;div ng-click=\"clicked = !clicked\" ng-class=\"clicked && \'clickedClass\'\"&gt;Try to click me, dragular distinguish drag from click&lt;/div&gt;\r\n        &lt;div&gt;Item 5.&lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleBasicWithModel/exampleBasicWithModel.html","<div class=\'parent\'>\r\n  <h2>Basic - with model</h2>\r\n  <label for=\'hy\'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\r\n  <div class=\'wrapper\' ng-controller=\"BasicModel\">\r\n    <div class=\'tableRow\'>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <pre>Items1:\r\n          <br/>{{items1 | json}}</pre>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <pre>Items2:\r\n          <br/>{{items2 | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n        <code>\r\n// JS\r\n  controller(\'BasicModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\r\n    $scope.items1 = [{\r\n      content: \'Move me, but you can only drop me in one of these containers.\'\r\n    }, {\r\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\r\n    }, {\r\n      content: \'Item 3\'\r\n    }, {\r\n      content: \'Item 4\'\r\n    }];\r\n    $scope.items2 = [{\r\n      content: \'Item 5\'\r\n    }, {\r\n      content: \'Item 6\'\r\n    }, {\r\n      content: \'Item 7\'\r\n    }, {\r\n      content: \'Item 8\'\r\n    }];\r\n    var containers = $element.children().children();\r\n    dragularService([containers[0],containers[1]],{\r\n      containersModel: [$scope.items1, $scope.items2]\r\n    });\r\n  }])\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n&lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;&gt;\r\n    &lt;div class=\'tableRow\'&gt;\r\n        &lt;div class=\'containerVertical\'&gt;\r\n            &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\'containerVertical\'&gt;\r\n            &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=&quot;tableRow&quot;&gt;\r\n        &lt;div class=&quot;container&quot;&gt;\r\n            &lt;div&gt;Items1:\r\n                &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=&quot;container&quot;&gt;\r\n            &lt;div&gt;Items2:\r\n                &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleBoundingBox/exampleBoundingBox.html","        <div class=\'parent\'>\r\n            <h2>BoundingBox</h2>\r\n            <label for=\'hy\'>You can provide element in options.boundingBox to limit crossing element borders.</label>\r\n            <div class=\'wrapper\' ng-controller=\"BoundingBox\">\r\n                <div class=\'containerVertical\'>\r\n                    <div>This items cannot cross its example element, just try it your selves.</div>\r\n                    <div>Item 2.</div>\r\n                    <div>Item 3.</div>\r\n                    <div>Item 6.</div>\r\n                </div>\r\n                <div class=\'containerVertical\'>\r\n                    <div>This items cannot cross its example element, just try it your selves.</div>\r\n                    <div>Item 4.</div>\r\n                    <div>Item 5.</div>\r\n                </div>\r\n            </div>\r\n            <pre>\r\n        <code>\r\n  dragularService([$element.children(), {\r\n    boundingBox: $element\r\n  });\r\n        </code>\r\n      </pre>\r\n        </div>");
$templateCache.put("exampleBoundingBoxLockX/exampleBoundingBoxLockX.html","<div class=\'parent\'>\r\n            <h2>BoundingBox and lockX</h2>\r\n            <label for=\'hy\'>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\r\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockX\">\r\n                <div class=\'containerHorizontal\'>\r\n                    <div class=\'boundingBox\'>\r\n                        <div class=\"width25\">Items are locked in X axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\r\n                        <div class=\"width25\">item 2</div>\r\n                        <div class=\"width25\">item 3</div>\r\n                        <div class=\"width25\">item 4</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <pre>\r\n        <code>\r\n  dragularService([$element.children()[0].children(), {\r\n    boundingBox: $element.children()[0],\r\n    lockX: true\r\n  });\r\n        </code>\r\n      </pre>\r\n        </div>");
$templateCache.put("exampleBoundingBoxLockY/exampleBoundingBoxLockY.html","        <div class=\'parent\'>\r\n            <h2>BoundingBox and LockY</h2>\r\n            <label for=\'hy\'>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\r\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockY\">\r\n                <div class=\'containerVertical\'>\r\n                    <div class=\'boundingBox\'>\r\n                        <div>Items are locked in Y axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\r\n                        <div>item 2</div>\r\n                        <div>item 3</div>\r\n                        <div>item 4</div>\r\n                        <div>item 5</div>\r\n                        <div>item 6</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <pre>\r\n        <code>\r\n  dragularService([$element.children()[0].children(), {\r\n    boundingBox: $element.children()[0],\r\n    lockY: true\r\n  });\r\n        </code>\r\n      </pre>\r\n        </div>");
$templateCache.put("exampleCopy/exampleCopy.html","<div class=\'parent\'>\r\n  <h2>Copy</h2>\r\n  <label for=\'hy\'>Copying stuff is great too.</label>\r\n  <div class=\'wrapper\' ng-controller=\"Copy\" ng-hide=\"globals.showModelExamples\">\r\n    <div id=\'left2\' class=\'containerVertical\'>\r\n      <div>Move me, and make copy on drop.</div>\r\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\r\n    </div>\r\n    <div id=\'right2\' class=\'containerVertical\'>\r\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n        <code>\r\n// JS\r\n  controller(\'Copy\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\r\n    dragularService($element.children(), {\r\n      copy: true\r\n    });\r\n  }])\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n&lt;div class=\'wrapper\' ng-controller=&quot;Copy&quot; ng-hide=&quot;globals.showModelExamples&quot;&gt;\r\n    &lt;div id=\'left2\' class=\'containerVertical\'&gt;\r\n      &lt;div&gt;Move me, and make copy on drop.&lt;/div&gt;\r\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div id=\'right2\' class=\'containerVertical\'&gt;\r\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleCopyWithModel/exampleCopyWithModel.html","<div class=\'parent\'>\r\n  <h2>Copy - with model</h2>\r\n  <label for=\'hy\'>Copying stuff is great too.</label>\r\n  <div class=\'wrapper\' ng-controller=\"CopyModel\">\r\n    <div class=\'tableRow\'>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <div>Items1:\r\n          <br/>{{items1 | json}}</div>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <div>Items2:\r\n          <br/>{{items2 | json}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n        <code>\r\n// JS\r\n  controller(\'CopyModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\r\n    $scope.items1 = [{\r\n      content: \'Move me, and make copy on drop.\'\r\n    }, {\r\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\r\n    }, {\r\n      content: \'Item 3\'\r\n    }, {\r\n      content: \'Item 4\'\r\n    }];\r\n    $scope.items2 = [{\r\n      content: \'Item 5\'\r\n    }, {\r\n      content: \'Item 6\'\r\n    }, {\r\n      content: \'Item 7\'\r\n    }, {\r\n      content: \'Item 8\'\r\n    }];\r\n    var containers = $element.children().children();\r\n    dragularService([containers[0],containers[1]],{\r\n      containersModel: [$scope.items1, $scope.items2],\r\n      copy: true\r\n    });\r\n  }])\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n&lt;div class=\'wrapper\' ng-controller=&quot;CopyModel&quot; ng-show=&quot;globals.showModelExamples&quot;&gt;\r\n    &lt;div class=\'tableRow\'&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=&quot;tableRow&quot;&gt;\r\n      &lt;div class=&quot;container&quot;&gt;\r\n        &lt;div&gt;Items1:\r\n          &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;container&quot;&gt;\r\n        &lt;div&gt;Items2:\r\n          &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleCustomClasses/exampleCustomClasses.html","<div class=\'parent\'>\r\n    <h2>Custom classes</h2>\r\n    <label for=\'hy\'>You can overwrite buildin classes by providing classes names in object via options.classes.</label>\r\n    <div class=\'wrapper\' ng-controller=\"CustomClasses\">\r\n        <div id=\'left4\' class=\'containerVertical\'>\r\n            <div>Move me, but you can only drop me in one of these containers.</div>\r\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\r\n            <div>Item 3.</div>\r\n            <div>Item 6.</div>\r\n        </div>\r\n        <div id=\'right3\' class=\'containerVertical\'>\r\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\r\n            <div>Item 4.</div>\r\n            <div>Item 5.</div>\r\n        </div>\r\n    </div>\r\n    <pre>\r\n        <code>\r\n  dragularService([document.getElementById(left), document.getElementById(right)], { classes: {\r\n    mirror: \'custom-green-mirror\'\r\n  } });\r\n\r\n  // Default classes are:\r\n  option.classes = {\r\n    mirror: \'gu-mirror\',\r\n    hide: \'gu-hide\',\r\n    unselectable: \'gu-unselectable\',\r\n    transit: \'gu-transit\',\r\n    overActive: \'gu-over-active\',\r\n    overAccepts: \'gu-over-accept\',\r\n    overDeclines: \'gu-over-decline\'\r\n  };\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleDirective/exampleDirective.html","<div class=\'parent\'>\r\n  <h2>Directive</h2>\r\n  <label for=\'hy\'>Same as custom classes example, but showing use of directive.</label>\r\n  <div class=\'wrapper\' ng-controller=\"Directive\">\r\n    <div class=\'containerVertical\' dragular=\"dragularOptions\">\r\n      <div>Move me, but you can only drop me in one of these containers.</div>\r\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\r\n      <div>Item 3.</div>\r\n      <div>Item 6.</div>\r\n    </div>\r\n    <div class=\'containerVertical\' dragular=\'{\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"same\"}\'>\r\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\r\n      <div>Item 4.</div>\r\n      <div>Item 5.</div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n        <code>\r\n// JS\r\n  controller(\'Directive\', [\'$scope\', \'dragularService\', function TodoCtrl($scope) {\r\n    $scope.dragularOptions = {\r\n      classes: {\r\n        mirror: \'custom-green-mirror\'\r\n      },\r\n      nameSpace: \'common\' // just connecting left and right container\r\n    };\r\n  }])\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n&lt;div class=\'wrapper\' ng-controller=&quot;Directive&quot;&gt;\r\n    &lt;div class=\'containerVertical\' dragular=&quot;dragularOptions&quot;&gt;\r\n      &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\r\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\r\n      &lt;div&gt;Item 3.&lt;/div&gt;\r\n      &lt;div&gt;Item 6.&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\'containerVertical\' dragular=\'{&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;same&quot;}\'&gt;\r\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\r\n      &lt;div&gt;Item 4.&lt;/div&gt;\r\n      &lt;div&gt;Item 5.&lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleDirectiveWithModel/exampleDirectiveWithModel.html","<div class=\'parent\'>\r\n  <h2>Directive - with model</h2>\r\n  <label for=\'hy\'>Same as custom classes example, but showing use of directive.</label>\r\n  <div class=\'wrapper\' ng-controller=\"DirectiveModel\">\r\n    <div class=\'tableRow\'>\r\n      <div class=\'containerVertical\' dragular=\"dragularOptions\">\r\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\r\n      </div>\r\n      <div class=\'containerVertical\' dragular=\'{\"containersModel\":\"items2\",\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"common\"}\'>\r\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <div>Items1:\r\n          <br/>{{items1 | json}}</div>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <div>Items2:\r\n          <br/>{{items2 | json}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n       \r\n        <code>\r\n// JS\r\n  controller(\'DirectiveModel\', [\'$scope\', function TodoCtrl($scope) {\r\n    $scope.items1 = [{\r\n      content: \'Move me, and make copy on drop.\'\r\n    }, {\r\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\r\n    }, {\r\n      content: \'Item 3\'\r\n    }, {\r\n      content: \'Item 4\'\r\n    }];\r\n    $scope.items2 = [{\r\n      content: \'Item 5\'\r\n    }, {\r\n      content: \'Item 6\'\r\n    }, {\r\n      content: \'Item 7\'\r\n    }, {\r\n      content: \'Item 8\'\r\n    }];\r\n    $scope.dragularOptions = {\r\n      containersModel: $scope.items1,\r\n      classes: {\r\n        mirror: \'custom-green-mirror\'\r\n      },\r\n      nameSpace: \'common\' // just connecting left and right container\r\n    };\r\n  }])\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n &lt;div class=\'wrapper\' ng-controller=&quot;DirectiveModel&quot;&gt;\r\n  &lt;div class=\'containerVertical\' dragular=&quot;dragularOptions&quot;&gt;\r\n    &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\r\n  &lt;/div&gt;\r\n  &lt;div class=\'containerVertical\' dragular=\'{&quot;containersModel&quot;:&quot;items2&quot;,&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;common&quot;}\'&gt;\r\n    &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\r\n  &lt;/div&gt;\r\n&lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleDragOverEvents/exampleDragOverEvents.html","<div class=\'parent\'>\r\n  <h2>Drag-over events</h2>\r\n  <p>You can interact with dragging element by litening to dragOver events. Usually you want to containers show wheather they accepts element or not, but you can use it anywhere. DragOver events are: dragenter, dragleave and dragrelease. On dragOver events dragularService reveals several useful properties.</p>\r\n\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-hover\">\r\n    <tr>\r\n      <td>dragularService.shared.item</td>\r\n      <td>item beeing dragged (it is copy of item if copy is enabled via options)</td>\r\n    </tr>\r\n    <tr>\r\n      <td>dragularService.shared.source</td>\r\n      <td>source container item is dragged from</td>\r\n    </tr>\r\n    <tr>\r\n      <td>dragularService.shared.sourceModel</td>\r\n      <td>source container model representation if model was porvided</td>\r\n    </tr>\r\n    <tr>\r\n      <td>dragularService.shared.initialIndex</td>\r\n      <td>original index of item, can be used to get item model from sourceModel</td>\r\n    </tr>\r\n    <tr>\r\n      <td>dragularService.shared.extra</td>\r\n      <td>contains accepting information (boolean) on dragenter, element drag is leaving to on dragleave and element behind the cursor on dragrelease</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n\r\n  <p> Try to drag over the not-container too.</p>\r\n  <div class=\'wrapper\' ng-controller=\"DragOverEvents\">\r\n    <div class=\'containerVertical width25\'>\r\n      <div>apples and oranges cannot be mixed</div>\r\n      <div>apple 2</div>\r\n      <div>apple 3</div>\r\n      <div>apple 4</div>\r\n    </div>\r\n    <div class=\'containerVertical width25\'>\r\n      <div>orange 1</div>\r\n      <div>orange 2</div>\r\n      <div>orange 3</div>\r\n      <div>orange 4</div>\r\n    </div>\r\n    <div class=\'containerVertical width25\'>\r\n      <div>apple 5</div>\r\n      <div>apple 6</div>\r\n      <div>apple 7</div>\r\n      <div>apple 8</div>\r\n    </div>\r\n    <div class=\'containerVertical width25\'>\r\n      <div>orange 5</div>\r\n      <div>orange 6</div>\r\n      <div>orange 7</div>\r\n      <div>orange 8</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"notContainer gu-over-active\"> Test active class on NOT container.</div>\r\n\r\n  <pre>\r\n    <code>\r\n&lt;!-- HTML --&gt;\r\n  &lt;div class=\'wrapper\' ng-controller=&quot;DragOverEvents&quot;&gt;\r\n    &lt;div class=\'container width25\'&gt;\r\n      &lt;div&gt;apples and oranges cannot be mixed&lt;/div&gt;\r\n      &lt;div&gt;apple 2&lt;/div&gt;\r\n      ...\r\n    &lt;/div&gt;\r\n    &lt;div class=\'container width25\'&gt;\r\n      &lt;div&gt;orange 1&lt;/div&gt;\r\n      &lt;div&gt;orange 2&lt;/div&gt;\r\n      ...\r\n    &lt;/div&gt;\r\n    &lt;div class=\'container width25\'&gt;\r\n      &lt;div&gt;apple 5&lt;/div&gt;\r\n      &lt;div&gt;apple 6&lt;/div&gt;\r\n      ...\r\n    &lt;/div&gt;\r\n    &lt;div class=\'container width25\'&gt;\r\n      &lt;div&gt;orange 5&lt;/div&gt;\r\n      &lt;div&gt;orange 6&lt;/div&gt;\r\n      ...\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  &lt;div class=&quot;notContainer&quot;&gt; Test active class on NOT container.&lt;/div&gt;\r\n    </code>\r\n  </pre>\r\n\r\n  <pre>\r\n    <code>\r\n  // CSS\r\n  \r\n.notContainer.gu-over {\r\n  background-color: yellow;\r\n}\r\n\r\n.containerVertical.gu-over-accept {\r\n  background-color: green;\r\n}\r\n\r\n.containerVertical.gu-over-decline {\r\n  background-color: red;\r\n}\r\n    </code>\r\n  </pre>\r\n\r\n  <pre>\r\n    <code>\r\n  // JS\r\n  controller(\'DragOverEvents\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\r\n    dragularService.cleanEnviroment();\r\n    dragularService([$element.children()[0], $element.children()[2]], {\r\n      nameSpace: \'apples\'\r\n    });\r\n    dragularService([$element.children()[1], $element.children()[3]], {\r\n      nameSpace: \'oranges\'\r\n    });\r\n\r\n    // containers events handling\r\n    function registerEvents(el) {\r\n      el.on(\'dragularenter\', function(e) {\r\n        if (el[0] === e.target) { // filter bubbled\r\n          el.addClass(dragularService.shared.extra ? \'gu-over-accept\' : \'gu-over-decline\');\r\n        }\r\n      });\r\n      el.on(\'dragularleave dragularrelease\', function(e) {\r\n        if ((el[0] === e.target && // filter bubbled\r\n          dragularService.shared.extra && // extra on dragleave contains element the drag is leaving to\r\n          dragularService.shared.extra.parentElement !== e.target) // is that element child of this container?\r\n          || e.type === \'dragularrelease\') {\r\n          el.removeClass(\'gu-over-accept\');\r\n          el.removeClass(\'gu-over-decline\');\r\n        }\r\n      });\r\n    }\r\n\r\n    angular.forEach($element.children(), function forEachChild(el) {\r\n      registerEvents(angular.element(el));\r\n    });\r\n\r\n    // notContainer events handling\r\n    var notContainer = angular.element(document.getElementsByClassName(\'notContainer\'));\r\n    notContainer.on(\'dragularenter\', function() {\r\n      notContainer.addClass(\'gu-over\');\r\n    });\r\n    notContainer.on(\'dragularleave dragularrelease\', function() {\r\n      notContainer.removeClass(\'gu-over\');\r\n    });\r\n  }])\r\n    </code>\r\n  </pre>\r\n</div>\r\n");
$templateCache.put("exampleEvents/exampleEvents.html","<div class=\'parent\'>\r\n    <h2>Events</h2>\r\n    <label for=\'hy\'>Add some fantastic events!</label>\r\n    <div class=\'wrapper\' ng-controller=\"Events\">\r\n        <div id=\'left3\' class=\'containerVertical\'>\r\n            <div>Move me, but you can only drop me in one of these containers.</div>\r\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\r\n            <div>Item 3.</div>\r\n            <div>Item 6.</div>\r\n        </div>\r\n        <div id=\'right3\' class=\'containerVertical\'>\r\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\r\n            <div>Item 4.</div>\r\n            <div>Item 5.</div>\r\n        </div>\r\n    </div>\r\n    <pre>\r\n        <code>\r\n.controller(\'Events\', [\'$scope\', \'$element\', \'dragularService\', \'$timeout\', function TodoCtrl($scope, $element, dragularService, $timeout) {\r\n    dragularService($element.children(), {\r\n      scope: $scope\r\n    });\r\n    $scope.$on(\'dragulardrag\', function(e, el) {\r\n      e.stopPropagation();\r\n      el.className = el.className.replace(\' ex-moved\', \'\');\r\n    });\r\n    $scope.$on(\'dragulardrop\', function(e, el) {\r\n      e.stopPropagation();\r\n      $timeout(function() {\r\n        el.className += \' ex-moved\';\r\n      }, 0);\r\n    });\r\n\r\n    $scope.$on(\'dragularcloned\', myFn(\'cloned\'));\r\n    $scope.$on(\'dragulardrag\', myFn(\'drag\'));\r\n    $scope.$on(\'dragularcancel\', myFn(\'cancel\'));\r\n    $scope.$on(\'dragulardrop\', myFn(\'drop\'));\r\n    $scope.$on(\'dragularremove\', myFn(\'remove\'));\r\n    $scope.$on(\'dragulardragend\', myFn(\'dragend\'));\r\n    $scope.$on(\'dragularshadow\', myFn(\'shadow\'));\r\n\r\n    function myFn(eventName) {\r\n      return function() {\r\n        console.log(eventName, arguments);\r\n      };\r\n    }\r\n\r\n  }]);\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleHandle/exampleHandle.html","<div class=\'parent\'>\r\n    <h2>Handle</h2>\r\n    <label for=\'hy\'>Drag handles float your cruise?</label>\r\n    <div class=\'wrapper\' ng-controller=\"Handle\">\r\n        <div id=\'left5\' class=\'containerVertical\'>\r\n            <div><span class=\'handle\'>+</span>Move me, but you can use the plus sign to drag me around.</div>\r\n        </div>\r\n        <div id=\'right5\' class=\'containerVertical\'>\r\n        </div>\r\n    </div>\r\n    <pre>\r\n        <code>\r\n  dragularService([document.getElementById(left), document.getElementById(right)], {\r\n    moves: function (el, container, handle) {\r\n      return handle.className === \'handle\';\r\n    }\r\n  });\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleIsContainerWithModel/exampleIsContainerWithModel.html","<div class=\'parent\'>\r\n  <h2>isContainer - with model</h2>\r\n  <label for=\'hy\'>Possible use case of <b>options.isContainer</b> combined with model. When you provide function <b>isContainer</b> and in case it returns true and you are providing models (<b>options.containersModel</b>), dragular check for model by calling <b>options.isContainerModel(el)</b> function. If not provided, model is discarted.</label>\r\n  <div class=\'wrapper\' ng-controller=\"IsContainerModel\">\r\n    <div class=\'tableRow\'>\r\n      <div id=\"containerLeft\" class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\r\n      </div>\r\n      <div id=\"cart\" class=\'containerVertical\'>\r\n        <div class=\'cursorDefault\' ng-repeat=\"item in cartModel\">{{item.content}}\r\n        <button class=\'cursorDefault\' ng-click=\"removeItem()\">x</button></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <pre>Items1:\r\n          <br/>{{items1 | json}}</pre>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <pre>Cart:\r\n          <br/>{{cartModel | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n        <code>\r\n// JS\r\n  .controller(\'IsContainerModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\r\n    $scope.items1 = [{\r\n      content: \'Move me, but you can only drop me in one of these containers.\'\r\n    }, {\r\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\r\n    }, {\r\n      content: \'Item 3\'\r\n    }, {\r\n      content: \'Item 4\'\r\n    }];\r\n    $scope.cartModel = [];\r\n\r\n    var containerLeft = document.querySelector(\'#containerLeft\');\r\n\r\n    dragularService.cleanEnviroment();\r\n    dragularService([containerLeft], {\r\n      containersModel: [$scope.items1],\r\n      copy: true,\r\n      isContainer: function isContainer (el) {\r\n        return el.id === \'cart\';\r\n      },\r\n      isContainerModel: function getModel (){\r\n        return $scope.cartModel;\r\n      }\r\n    });\r\n\r\n    $scope.removeItem = function removeItem() {\r\n      var index = $scope.cartModel.indexOf(this.item);\r\n      $scope.cartModel.splice(index, 1);\r\n    };\r\n\r\n  }])\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n &lt;div class=\'wrapper\' ng-controller=&quot;IsContainerModel&quot;&gt;\r\n    &lt;div class=\'tableRow\'&gt;\r\n      &lt;div id=&quot;containerLeft&quot; class=\'containerVertical\'&gt;\r\n        &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n      &lt;div id=&quot;cart&quot; class=\'containerVertical\'&gt;\r\n        &lt;div class=\'cursorDefault\' ng-repeat=&quot;item in cartModel&quot;&gt;{{item.content}}\r\n        &lt;button class=\'cursorDefault\' ng-click=&quot;removeItem()&quot;&gt;x&lt;/button&gt;&lt;/div&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=&quot;tableRow&quot;&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;pre&gt;Items1:\r\n          &lt;br/&gt;{{items1 | json}}&lt;/pre&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;pre&gt;Cart:\r\n          &lt;br/&gt;{{cartModel | json}}&lt;/pre&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleNameSpaces/exampleNameSpaces.html","        <div class=\'parent\'>\r\n            <h2>NameSpaces</h2>\r\n            <label for=\'hy\'>Try to mix apples and oranges. You cannot place apples into oranges, but notice that you can place it into mixed. Mixed can be placed into apples and oranges. Notice that mixed becomes orange or apple if placed into their container. <b>So remember if you are using namespacing, then item is namespaced according to actual container it is placed in. If you need to item preserve thier state you need to use classes in combination with options.accepts and optionally options.isContainer.</b> It depends on setup. (See <a href=\"https://github.com/luckylooke/dragular/issues/9\">issue #9</a>.)</label>\r\n            <div class=\'wrapper\' ng-controller=\"NameSpaces\">\r\n                <div class=\'containerVertical width25\'>\r\n                    <div>try to mix oranges and apples</div>\r\n                    <div>apple 2</div>\r\n                    <div>apple 3</div>\r\n                    <div>apple 4</div>\r\n                </div>\r\n                <div class=\'containerVertical width25\'>\r\n                    <div>orange 1</div>\r\n                    <div>orange 2</div>\r\n                    <div>orange 3</div>\r\n                    <div>orange 4</div>\r\n                </div>\r\n                <div class=\'containerVertical width25\'>\r\n                    <div>apple 5</div>\r\n                    <div>apple 6</div>\r\n                    <div>apple 7</div>\r\n                    <div>apple 8</div>\r\n                </div>\r\n                <div class=\'containerVertical width25\'>\r\n                    <div>mixed 1</div>\r\n                    <div>mixed 2</div>\r\n                    <div>mixed 3</div>\r\n                    <div>mixed 4</div>\r\n                </div>\r\n            </div>\r\n            <pre>\r\n      <code>\r\ndragularService([$element.children()[0], $element.children()[2]], {\r\n  nameSpace: \'apples\'\r\n});\r\ndragularService($element.children()[1], {\r\n  nameSpace: \'oranges\'\r\n});\r\ndragularService($element.children()[3], { // mixed\r\n  nameSpace: [\'oranges\', \'apples\']\r\n});\r\n      </code>\r\n    </pre>\r\n        </div>");
$templateCache.put("exampleNestedNgRepeat/exampleNestedNgRepeat.html","<div class=\'parent\'>\r\n    <h2>Nested ngRepeat</h2>\r\n    <label for=\'hy\'> You can move whole rows by grabing row title, all items it selves. Try it out!\r\n        <hr/>\r\n        <b>Old IE doesnt support Flexible Box Layout</b> so it can look weird. But in modern browsers it is awsome! Dragular will be working well also in old IE but you have to use different css for layout.\r\n        <hr/>\r\n    </label>\r\n    <div ng-controller=\"NestedNgRepeat\">\r\n        <div ng-repeat=\"item in items\" class=\'exampleRow\'>\r\n            <div class=\"row-handle\">Row {{$index}}</div>\r\n            <div ng-repeat=\"item in item.items\" class=\"exampleCell\">{{item.content}}</div>\r\n        </div>\r\n    </div>\r\n    <pre>\r\n        <code>\r\n  // HTML\r\n\r\n  &lt;div ng-controller=&quot;Example15&quot;&gt;\r\n    &lt;div ng-repeat=&quot;item in items&quot; class=\'exampleRow\'&gt;\r\n      &lt;div class=&quot;row-handle&quot;&gt;Row {{$index}}&lt;/div&gt;\r\n      &lt;div ng-repeat=&quot;item in item.items&quot; class=&quot;exampleCell&quot;&gt;{{item.content}}&lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n    <pre>\r\n        <code>\r\n  // CSS\r\n\r\n  .exampleRow {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .exampleCell {\r\n    flex-grow: 1;\r\n  }\r\n\r\n  .exampleRow,\r\n  .exampleCell {\r\n    margin: 10px;\r\n    padding: 10px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    cursor: move;\r\n    cursor: grab;\r\n    cursor: -moz-grab;\r\n    cursor: -webkit-grab;\r\n  }\r\n        </code>\r\n      </pre>\r\n    <pre>\r\n        <code>\r\n  // JS\r\n\r\n  .controller(\'NestedNgRepeat\', [\'$timeout\', \'$scope\', \'$element\', \'dragularService\', function NestedNgRepeatCtrl($timeout, $scope, $element, dragularService) {\r\n    $timeout(function() { // timeount due to ngRepeat to be ready\r\n      dragularService($element, {\r\n        nameSpace: \'rows\',\r\n        moves: function rowOnly (el, container, handle) {\r\n          return handle.classList.contains(\'row-handle\');\r\n        }\r\n      });\r\n      dragularService($element.children(), {\r\n        nameSpace: \'cells\',\r\n        moves: function excludeHandle (el, container, handle) {\r\n          return !handle.classList.contains(\'row-handle\');\r\n        }\r\n      });\r\n    }, 0);\r\n    $scope.items = [{\r\n      items: [{\r\n        content: \'Item a1\'\r\n      }, {\r\n        content: \'Item a2\'\r\n      }, {\r\n        content: \'Item a3\'\r\n      }, {\r\n        content: \'Item a4\'\r\n      }]\r\n    }, {\r\n      items: [{\r\n        content: \'Item b1\'\r\n      }, {\r\n        content: \'Item b2\'\r\n      }, {\r\n        content: \'Item b3\'\r\n      }, {\r\n        content: \'Item b4\'\r\n      }]\r\n    }, {\r\n      items: [{\r\n        content: \'Item c1\'\r\n      }, {\r\n        content: \'Item c2\'\r\n      }, {\r\n        content: \'Item c3\'\r\n      }, {\r\n        content: \'Item c4\'\r\n      }]\r\n    }];\r\n  }])\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.html","<div class=\'parent\'>\r\n  <h2>Nested ngRepeat - with model</h2>\r\n  <label for=\'hy\'> You can move whole rows by grabing row title, all items it selves. Try it out!\r\n    <hr/>\r\n    <b>Old IE doesnt support Flexible Box Layout</b> so it can look weird. But in modern browsers it is awsome! Dragular will be working well also in old IE but you have to use different css for layout.\r\n    <hr/>\r\n  </label>\r\n  <div ng-controller=\"NestedNgRepeatWithModel\">\r\n    <div class=\'tableRow\'>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items\" class=\'exampleRow\'>\r\n          <div class=\"row-handle\">Row {{::$index}}</div>\r\n          <div class=\"exampleRow exampleCell containerNested\">\r\n            <div ng-repeat=\"item in item.items\" class=\"exampleCell\">{{item.content}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <pre>\r\n            <div>Items:\r\n              <br/>{{items | json}}</div>\r\n        </pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n    <code>\r\n&lt;!-- HTML --&gt;\r\n&lt;div ng-controller=&quot;NestedNgRepeatWithModel&quot;&gt;\r\n  &lt;div class=\'containerVertical\'&gt;\r\n    &lt;div ng-repeat=&quot;item in items&quot; class=\'exampleRow\'&gt;\r\n      &lt;div class=&quot;row-handle&quot;&gt;Row {{::$index}}&lt;/div&gt;\r\n      &lt;div class=&quot;exampleRow exampleCell containerNested&quot;&gt;\r\n        &lt;div ng-repeat=&quot;item in item.items&quot; class=&quot;exampleCell&quot;&gt;{{item.content}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n&lt;/div&gt;\r\n    </code>\r\n  </pre>\r\n  <pre>\r\n    <code>\r\n  // CSS\r\n\r\n  .exampleRow {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .exampleCell {\r\n    flex-grow: 1;\r\n  }\r\n\r\n  .exampleRow,\r\n  .exampleCell {\r\n    margin: 10px;\r\n    padding: 10px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    cursor: move;\r\n    cursor: grab;\r\n    cursor: -moz-grab;\r\n    cursor: -webkit-grab;\r\n  }\r\n    </code>\r\n  </pre>\r\n  <pre>\r\n    <code>\r\n  // JS\r\n.controller(\'NestedNgRepeatWithModel\', [\'$timeout\', \'$scope\', \'$element\', \'dragularService\', function NestedNgRepeatWithModelCtrl($timeout, $scope, $element, dragularService) {\r\n    $timeout(function() { // timeount due to nested ngRepeat to be ready\r\n      var container = $element.children().eq(0).children(),\r\n        parentContainers = container.children(),\r\n        nestedContainers = [];\r\n\r\n      dragularService(container, {\r\n        moves: function(el, container, handle) {\r\n          return handle.classList.contains(\'row-handle\');\r\n        },\r\n        containersModel: $scope.items,\r\n        nameSpace: \'rows\'\r\n      });\r\n\r\n      // collect nested contianers\r\n      for (var i = 0; i < parentContainers.length; i++) {\r\n        nestedContainers.push(parentContainers.eq(i).children()[1]);\r\n      }\r\n\r\n      dragularService(nestedContainers, {\r\n        moves: function(el, container, handle) {\r\n          return !handle.classList.contains(\'row-handle\');\r\n        },\r\n        containersModel: (function getNestedContainersModel(){\r\n          var parent = $scope.items,\r\n            containersModel = [];\r\n          for (var i = 0; i < parent.length; i++) {\r\n            containersModel.push(parent[i].items);\r\n          }\r\n          return containersModel;\r\n        })(),\r\n        nameSpace: \'cells\'\r\n      });\r\n    }, 0);\r\n    $scope.items = [{\r\n      items: [{\r\n        content: \'Item a1\'\r\n      }, {\r\n        content: \'Item a2\'\r\n      }, {\r\n        content: \'Item a3\'\r\n      }, {\r\n        content: \'Item a4\'\r\n      }]\r\n    }, {\r\n      items: [{\r\n        content: \'Item b1\'\r\n      }, {\r\n        content: \'Item b2\'\r\n      }, {\r\n        content: \'Item b3\'\r\n      }, {\r\n        content: \'Item b4\'\r\n      }]\r\n    }, {\r\n      items: [{\r\n        content: \'Item c1\'\r\n      }, {\r\n        content: \'Item c2\'\r\n      }, {\r\n        content: \'Item c3\'\r\n      }, {\r\n        content: \'Item c4\'\r\n      }]\r\n    }];\r\n  }])\r\n    </code>\r\n  </pre>\r\n</div>\r\n");
$templateCache.put("exampleNgRepeat/exampleNgRepeat.html","        <div class=\'parent\'>\r\n            <h2>ngRepeat</h2>\r\n            <label for=\'hy\'>Example of using ng-repeat with dragular and adding/removing items dynamicaly.</label>\r\n            <div class=\'wrapper\' ng-controller=\"NgRepeat\">\r\n                <div class=\'containerVertical\'>\r\n                    <div ng-repeat=\"item in items\">\r\n                        {{item.content}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <pre>\r\n        <code>\r\n  // HTML:\r\n  &lt;div class=\'containerVertical\'&gt;\r\n    &lt;div ng-repeat=&quot;item in items&quot;&gt;\r\n      {{item.content}}\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n\r\n  // JS:\r\n  dragularService($element.children());\r\n  $scope.items = [{\r\n    content: \'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.\'\r\n  },{\r\n    content: \'Item 2\'\r\n  },{\r\n    content: \'Item 3\'\r\n  },{\r\n    content: \'Item 4\'\r\n  }];\r\n        </code>\r\n      </pre>\r\n        </div>\r\n");
$templateCache.put("exampleNgRepeatFilteredWithModel/exampleNgRepeatFilteredWithModel.html","<div class=\'parent\'>\r\n  <h2>Filtered ngRepeat - with model</h2>\r\n  <label for=\'hy\'>Move stuff between these two filtered containers. You can play with filter inputs to see that everything goes right.\r\n    <br/>\r\n    <b>Please notify the getFilteredModel function, it is necessery for not replacing the initial array object with new filtered one!</b></label>\r\n  <div class=\'wrapper\' ng-controller=\"NgRepeatFilteredWithModel\">\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <input ng-model=\"filter1query\" style=\"margin:10px 10px\">\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <input ng-model=\"filter2query\" style=\"margin:10px 10px\">\r\n      </div>\r\n    </div>\r\n    <div class=\'tableRow\'>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in getFilteredModel(filteredModel1, items1, filter1query)\">{{item.content}}</div>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in getFilteredModel(filteredModel2, items2, filter2query)\">{{item.content}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <pre>Items1:\r\n          <br/>{{items1 | json}}</pre>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <pre>Items2:\r\n          <br/>{{items2 | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n        <code>\r\n// JS\r\n  .controller(\'NgRepeatFilteredWithModel\', [\'$scope\', \'$element\', \'dragularService\', \'$filter\', function TodoCtrl($scope, $element, dragularService, $filter) {\r\n    $scope.items1 = [{\r\n      content: \'Move me, but you can only drop me in one of these containers.\'\r\n    }, {\r\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\r\n    }, {\r\n      content: \'Apple 3\'\r\n    }, {\r\n      content: \'Orange 4\'\r\n    }, {\r\n      content: \'Orange 5\'\r\n    }, {\r\n      content: \'Apple 6\'\r\n    }, {\r\n      content: \'Apple 7\'\r\n    }, {\r\n      content: \'Apple 8\'\r\n    }];\r\n    $scope.items2 = [{\r\n      content: \'Apple 9\'\r\n    }, {\r\n      content: \'Orange 10\'\r\n    }, {\r\n      content: \'Orange 11\'\r\n    }, {\r\n      content: \'Apple 12\'\r\n    }, {\r\n      content: \'Orange 13\'\r\n    }, {\r\n      content: \'Apple 14\'\r\n    }];\r\n    $scope.filter1query = \'Orange\';\r\n    $scope.filter2query = \'Orange\';\r\n    $scope.filteredModel1 = [];\r\n    $scope.filteredModel2 = [];\r\n    $scope.getFilteredModel = function (filteredModel, items, filterQuery) {\r\n      filteredModel.length = 0;\r\n      /*\r\n      * Following one-liner is same like:\r\n      *   var filteredModelTemp = $filter(\'filter\')(items, filterQuery);\r\n      *   angular.forEach(filteredModelTemp, function(item){\r\n      *     filteredModel.push(item);\r\n      *   });\r\n      * Or like:\r\n      *   var filteredModelTemp = $filter(\'filter\')(items, filterQuery);\r\n      *   for(var i; i < filteredModelTemp.length; i++){\r\n      *     filteredModel.push(filteredModelTemp[i]);\r\n      *   }\r\n      *\r\n      * You cannot just assign filtered array to filteredModel like this:\r\n      *   filteredModel = $filter(\'filter\')(items, filterQuery);\r\n      * Because you would replace the array object you provide to dragular with new one.\r\n      * So dragular will continue to use the one it was provided on init.\r\n      * Hopefully I make it clear. :)\r\n       */\r\n      [].push.apply(filteredModel, $filter(\'filter\')(items, filterQuery));\r\n      return filteredModel;\r\n    };\r\n    var containers = $element.children().eq(1).children();\r\n    dragularService.cleanEnviroment();\r\n    dragularService([containers[0],containers[1]],{\r\n      containersModel: [$scope.items1, $scope.items2],\r\n      containersFilteredModel: [$scope.filteredModel1, $scope.filteredModel2]\r\n    });\r\n  }]);\r\n\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n  &lt;div class=\'wrapper\' ng-controller=&quot;NgRepeatFilteredWithModel&quot;&gt;\r\n    &lt;div class=&quot;tableRow&quot;&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;input ng-model=&quot;filter1query&quot; style=&quot;margin:10px 10px&quot;&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;input ng-model=&quot;filter2query&quot; style=&quot;margin:10px 10px&quot;&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\'tableRow\'&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;div ng-repeat=&quot;item in getFilteredModel(filteredModel1, items1, filter1query)&quot;&gt;{{item.content}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;div ng-repeat=&quot;item in getFilteredModel(filteredModel2, items2, filter2query)&quot;&gt;{{item.content}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=&quot;tableRow&quot;&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;pre&gt;Items1:\r\n          &lt;br/&gt;{{items1 | json}}&lt;/pre&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;pre&gt;Items2:\r\n          &lt;br/&gt;{{items2 | json}}&lt;/pre&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleNgRepeatWithModel/exampleNgRepeatWithModel.html","<div class=\'parent\'>\r\n  <h2>ngRepeat - with model</h2>\r\n  <label for=\'hy\'>Example of using ng-repeat with dragular and adding/removing items dynamicaly.</label>\r\n  <div class=\'wrapper\' ng-controller=\"NgRepeatWithModel\">\r\n    <div class=\'tableRow\'>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items\">\r\n          {{item.content}}\r\n          <button class=\'cursorDefault\' ng-click=\"addItem()\">+</button>\r\n          <button class=\'cursorDefault\' ng-click=\"removeItem()\">x</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <div>Items:\r\n          <br/>{{items | json}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n    <code>\r\n  // HTML:\r\n   &lt;div class=\'wrapper\' ng-controller=&quot;NgRepeatWithModel&quot;&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;div ng-repeat=&quot;item in items&quot;&gt;\r\n          {{item.content}}\r\n          &lt;button class=\'cursorDefault\' ng-click=&quot;addItem()&quot;&gt;+&lt;/button&gt;\r\n          &lt;button class=\'cursorDefault\' ng-click=&quot;removeItem()&quot;&gt;x&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n    </code>\r\n  </pre>\r\n  <pre>\r\n    <code>\r\n  // JS:\r\n  controller(\'NgRepeatWithModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\r\n    $scope.items = [{\r\n      content: \'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.\'\r\n    }, {\r\n      content: \'Item 2\'\r\n    }, {\r\n      content: \'Item 3\'\r\n    }, {\r\n      content: \'Item 4\'\r\n    }];\r\n    dragularService($element.children().eq(0).children(), {containersModel: $scope.items});\r\n    $scope.addItem = function addItem() {\r\n      var index = $scope.items.indexOf(this.item) + 1;\r\n      $scope.items.splice(index, 0, {\r\n        content: this.item.content + \'-copy\'\r\n      });\r\n    };\r\n    $scope.removeItem = function removeItem() {\r\n      var index = $scope.items.indexOf(this.item);\r\n      $scope.items.splice(index, 1);\r\n    };\r\n  }])\r\n    </code>\r\n  </pre>\r\n</div>\r\n");
$templateCache.put("exampleRemoveOnSpill/exampleRemoveOnSpill.html","        <div class=\'parent\'>\r\n            <h2>Remove on spill</h2>\r\n            <label for=\'hy\'>Need to be able to quickly delete stuff when it spills out of the chosen containers?</label>\r\n            <div class=\'wrapper\' ng-controller=\"RemoveOnSpill\">\r\n                <div id=\'left\' class=\'containerVertical\'>\r\n                    <div>Move me, but you can only drop me in containers.</div>\r\n                    <div>If you try to drop me somewhere other than containers, I\'ll die a fiery death.</div>\r\n                    <div>Item 3.</div>\r\n                    <div>Item 6.</div>\r\n                    <div>Item 4.</div>\r\n                    <div>Item 5.</div>\r\n                </div>\r\n                <div id=\'right\' class=\'containerVertical\'>\r\n                    <div>You can drop me in the left container.</div>\r\n                    <div>Item 4.</div>\r\n                    <div>Item 5.</div>\r\n                </div>\r\n            </div>\r\n            <pre>\r\n        <code>\r\n  dragularService([document.getElementById(single)], { removeOnSpill: true });\r\n        </code>\r\n      </pre>\r\n        </div>");
$templateCache.put("exampleRemoveOnSpillWithModel/exampleRemoveOnSpillWithModel.html","<div class=\'parent\'>\r\n  <h2>Remove on spill - with model</h2>\r\n  <label for=\'hy\'>Need to be able to quickly delete stuff when it spills out of the chosen containers?</label>\r\n  <div class=\'wrapper\' ng-controller=\"RemoveOnSpillWithModel\">\r\n    <div class=\'tableRow\'>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <pre>Items1:\r\n          <br/>{{items1 | json}}</pre>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <pre>Items2:\r\n          <br/>{{items2 | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n   <pre>\r\n        <code>\r\n// JS\r\n  .controller(\'RemoveOnSpillWithModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\r\n    $scope.items1 = [{\r\n      content: \'Move me, but you can only drop me in containers.\'\r\n    }, {\r\n      content: \'If you try to drop me somewhere other than containers, I\\\'ll die a fiery death.\'\r\n    }, {\r\n      content: \'Item 3\'\r\n    }, {\r\n      content: \'Item 4\'\r\n    }];\r\n    $scope.items2 = [{\r\n      content: \'You can drop me in the left container.\'\r\n    }, {\r\n      content: \'Item 6\'\r\n    }, {\r\n      content: \'Item 7\'\r\n    }, {\r\n      content: \'Item 8\'\r\n    }];\r\n    var containers = $element.children().eq(0).children();\r\n    dragularService.cleanEnviroment();\r\n    dragularService([containers[0],containers[1]],{\r\n      containersModel: [$scope.items1, $scope.items2],\r\n      removeOnSpill: true\r\n    });\r\n  }])\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n&lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;&gt;\r\n    &lt;div class=\'tableRow\'&gt;\r\n        &lt;div class=\'containerVertical\'&gt;\r\n            &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\'containerVertical\'&gt;\r\n            &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=&quot;tableRow&quot;&gt;\r\n        &lt;div class=&quot;container&quot;&gt;\r\n            &lt;div&gt;Items1:\r\n                &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=&quot;container&quot;&gt;\r\n            &lt;div&gt;Items2:\r\n                &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("exampleRevertOnSpill/exampleRevertOnSpill.html","        <div class=\'parent\'>\r\n            <h2>Revert on spill</h2>\r\n            <label for=\'hy\'>By default, dropping an element outside of any known containers will keep the element in the last place it hovered over. You can make elements go back home if they\'re dropped outside of known containers, too.</label>\r\n            <div class=\'wrapper\' ng-controller=\"RevertOnSpill\">\r\n                <div id=\'left4\' class=\'containerVertical\'>\r\n                    <div>Move me, but you can only drop me in one of these containers.</div>\r\n                    <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\r\n                    <div>Item 3.</div>\r\n                    <div>Item 6.</div>\r\n                </div>\r\n                <div id=\'right4\' class=\'containerVertical\'>\r\n                    <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\r\n                    <div>Item 4.</div>\r\n                    <div>Item 5.</div>\r\n                </div>\r\n            </div>\r\n            <pre>\r\n        <code>\r\n  dragularService([document.getElementById(left), document.getElementById(right)], { revertOnSpill: true });\r\n        </code>\r\n      </pre>\r\n        </div>");
$templateCache.put("exampleScrollingDrag/exampleScrollingDrag.html","<div class=\'parent\'>\r\n  <h2>Scrolling drag</h2>\r\n  <label for=\'hy\'> Containers can be scrolled by hovering up/down bar near containers. Bars on right side are transparent and moved a bit over containers. It can be scrolled also by mouse wheel.\r\n  </label>\r\n  <div ng-controller=\"ScrollingDrag\">\r\n    <div class=\"containerVertical scrollingDrag\">\r\n      <div class=\"scrollBar\" id=\"leftTopBar\">up</div>\r\n      <div id=\"leftScroll\" class=\"scrollingDragInner\">\r\n        <div>Item 1.</div>\r\n        <div>Item 2.</div>\r\n        <div>Item 3.</div>\r\n        <div>Item 4.</div>\r\n        <div>Item 5.</div>\r\n        <div>Item 6.</div>\r\n        <div>Item 7.</div>\r\n        <div>Item 9.</div>\r\n        <div>Item 10.</div>\r\n        <div>Item 11.</div>\r\n        <div>Item 12.</div>\r\n        <div>Item 13.</div>\r\n      </div>\r\n      <div class=\"scrollBar\" id=\"leftBottomBar\">down</div>\r\n    </div>\r\n    <div class=\"containerVertical scrollingDrag\">\r\n      <div class=\"scrollBar\" id=\"rightTopBar\"></div>\r\n      <div id=\"rightScroll\" class=\"scrollingDragInner\">\r\n        <div>Item 1.</div>\r\n        <div>Item 2.</div>\r\n        <div>Item 3.</div>\r\n        <div>Item 4.</div>\r\n        <div>Item 5.</div>\r\n        <div>Item 6.</div>\r\n        <div>Item 7.</div>\r\n        <div>Item 9.</div>\r\n        <div>Item 10.</div>\r\n        <div>Item 11.</div>\r\n        <div>Item 12.</div>\r\n        <div>Item 13.</div>\r\n      </div>\r\n      <div class=\"scrollBar\" id=\"rightBottomBar\"></div>\r\n    </div>\r\n  </div>\r\n   <pre>\r\n        <code>\r\n// JS\r\ncontroller(\'ScrollingDrag\', [\'$interval\', \'$element\', \'dragularService\', function TodoCtrl($interval, $element, dragularService) {\r\n\r\n\r\n    var timer,\r\n      leftScrollContainer = document.getElementById(\'leftScroll\'),\r\n      rightScrollContainer = document.getElementById(\'rightScroll\'),\r\n      leftTopBar = document.getElementById(\'leftTopBar\'),\r\n      leftBottomBar = document.getElementById(\'leftBottomBar\'),\r\n      rightTopBar = document.getElementById(\'rightTopBar\'),\r\n      rightBottomBar = document.getElementById(\'rightBottomBar\');\r\n\r\n    dragularService.cleanEnviroment();\r\n    dragularService([leftScrollContainer, rightScrollContainer]);\r\n\r\n    registerEvents(leftTopBar, leftScrollContainer, -5);\r\n    registerEvents(leftBottomBar, leftScrollContainer, 5);\r\n    registerEvents(rightTopBar, rightScrollContainer, -5);\r\n    registerEvents(rightBottomBar, rightScrollContainer, 5);\r\n\r\n    function registerEvents(bar, container, inc, speed) {\r\n      if (!speed) {\r\n        speed = 20;\r\n      }\r\n      angular.element(bar).on(\'dragularenter\', function() {\r\n        container.scrollTop += inc;\r\n        timer = $interval(function moveScroll() {\r\n          container.scrollTop += inc;\r\n        }, speed);\r\n      });\r\n      angular.element(bar).on(\'dragularleave dragularrelease\', function() {\r\n        $interval.cancel(timer);\r\n      });\r\n    }\r\n  }])\r\n        </code>\r\n      </pre>\r\n      <pre>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n&lt;div ng-controller=&quot;ScrollingDrag&quot;&gt;\r\n    &lt;div class=&quot;containerVertical scrollingDrag&quot;&gt;\r\n      &lt;div class=&quot;scrollBar&quot; id=&quot;leftTopBar&quot;&gt;up&lt;/div&gt;\r\n      &lt;div id=&quot;leftScroll&quot; class=&quot;scrollingDragInner&quot;&gt;\r\n        &lt;div&gt;Item 1&lt;/div&gt;\r\n        &lt;div&gt;Item 2&lt;/div&gt;\r\n            ...\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;scrollBar&quot; id=&quot;leftBottomBar&quot;&gt;down&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=&quot;containerVertical scrollingDrag&quot;&gt;\r\n      &lt;div class=&quot;scrollBar&quot; id=&quot;rightTopBar&quot;&gt;up&lt;/div&gt;\r\n      &lt;div id=&quot;rightScroll&quot; class=&quot;scrollingDragInner&quot;&gt;\r\n        &lt;div&gt;Item 1&lt;/div&gt;\r\n        &lt;div&gt;Item 2&lt;/div&gt;\r\n            ...\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;scrollBar&quot; id=&quot;rightBottomBar&quot;&gt;down&lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n       <pre>\r\n        <code>\r\n// CSS\r\n.scrollingDrag {\r\n  width: 45%;\r\n  display: inline-block;\r\n}\r\n\r\n.scrollingDragInner {\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\n#rightTopBar,\r\n#rightBottomBar {\r\n  background: transparent;\r\n  position: relative;\r\n  height: 20px;\r\n}\r\n\r\n#rightTopBar {\r\n  top: 10px;\r\n}\r\n\r\n#rightBottomBar {\r\n  bottom: 10px;\r\n}\r\n\r\ndiv.scrollBar {\r\n  background: yellow;\r\n  text-align: center;\r\n  padding: 1px;\r\n}\r\n\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("partials/partial-contribute.html","<div class=\'container\'>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <ng-include src=\"\'partials/autogenerated/contribute.html\'\"> </ng-include>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("partials/partial-docs.html","<div class=\'container\'>\r\n  <div id=\"rowOffcanvas\" class=\"row row-offcanvas row-offcanvas-left\">\r\n    <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\r\n      <div class=\"list-group\">\r\n        <a ng-repeat=\"example in examplesList\" ui-sref=\"docs.detail({link:example.link})\" ui-sref-active=\"active\" class=\"list-group-item\">{{example.title}}</a>\r\n      </div>\r\n    </div>\r\n    <!--/.sidebar-offcanvas-->\r\n    <div class=\"col-xs-12 col-sm-9\">\r\n      <p class=\"pull-left visible-xs\">\r\n        <button type=\"button\" ng-click=\"toggleSidebar()\" class=\"btn btn-primary btn-xs\">Toggle nav</button>\r\n      </p>\r\n      <!-- docs.detail -->\r\n      <div ui-view onload=\"highlightCode()\"></div>\r\n    </div>\r\n    <!--/.col-xs-12.col-sm-9-->\r\n  </div>\r\n  <!--/row-->\r\n</div>\r\n");
$templateCache.put("partials/partial-home.html","<div class=\'container\'>\r\n  <div class=\"row\">\r\n    <!--/.sidebar-offcanvas-->\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"jumbotron\">\r\n        <h1>DRAGULAR</h1>\r\n        <p>Angular drag&drop based on <a href=\"http://github.com/bevacqua/dragula\">dragula</a>.</p>\r\n        <p><a class=\"btn btn-primary btn-lg\" ui-sref=\"docs\" role=\"button\">Live examples in docs</a></p>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <p>Browser support includes every sane browser and **IE7+**. <sub>_(Granted you polyfill the functional `Array` methods in ES5)_</sub></p>\r\n          <h2>Inspiration</h2>\r\n          <p>I am working on huge angular project and I am using several drag&drop libraries in it, one for UI, one for lists, etc.. I want to use one full-featured drag&drop library for whole project. As I could not find any suitable, I decided to create one. I have choosen great library <a href=\"http://github.com/bevacqua/dragula\">dragula</a> by <a href=\"https://github.com/bevacqua\">Nicolas Bevacqua</a> as my starting point, make it more angular and started to put features in it! If you wish light-weight angular version of dragula, there is <a href=\"http://github.com/bevacqua/angular-dragula\">official angular version of dragula</a>.</p>\r\n          <p><b>Actual version 3.4.0 is based on dragula 3.6.0 and tested with angular 1.4.3.</b></p>\r\n          <h2>Differences of dragular (against dragula)</h2>\r\n          <ul>\r\n            <li>replaced dragula crossvent with angulars event binding</li>\r\n            <li>replaced dragula contra.emitter with $scope.$emit if scope provided in options (options.scope)</li>\r\n            <li>provided as service or directive dragular where options can be passed via atribute dragular</li>\r\n            <li>automatic direction if not provided in options, instead of default vertical</li>\r\n            <li>accepting arraylike objects as containers array (jQuery, jQlite collections etc..)</li>\r\n            <li>accepting custom classes via option.classes</li>\r\n            <li>namespaced containers groups available via option.nameSpace (containers in same nameSpace cooperate)</li>\r\n            <li>boundingBox (dragging element can me moved only in specific area)</li>\r\n            <li>lockX/Y (dragging element can me moved only in specific direction)</li>\r\n            <li>DOM can be synced with scope model</li>\r\n            <li>support css selectors to define containers</li>\r\n            <li>added syntax highlighter to example codes</li>\r\n            <li>etc..</li>\r\n          </ul>\r\n          <h2>Todo</h2>\r\n          <ul>\r\n            <li>improve docs</li>\r\n          </ul>\r\n          <h2>Features</h2>\r\n          <ul>\r\n            <li>provided as service and also as directive</li>\r\n            <li>Super easy to set up</li>\r\n            <li>No bloated dependencies</li>\r\n            <li><strong>Figures out sort order</strong> on its own</li>\r\n            <li>A shadow where the item would be dropped offers <strong>visual feedback</strong></li>\r\n            <li>Touch events!</li>\r\n          </ul>\r\n          <h2>For installation, usage and examples go to <a ui-sref=\"docs\">docs</a></h2>\r\n        </div>\r\n      </div>\r\n      <!--/row-->\r\n    </div>\r\n    <!--/.col-xs-12.col-sm-9-->\r\n  </div>\r\n  <!--/row-->\r\n</div>\r\n");
$templateCache.put("exampleDifferentOptionsWithModel/exampleDifferentOptionsWithModel.html","<div class=\'parent\'>\r\n  <h2>Different options - with model</h2>\r\n  <label for=\'hy\'>You may need to setup different options (rules) for each container. For such setup you need to initialize each container separately. <b>Do not initialize same container twice!</b> In example bellow you can copy from left to right, but not otherwise. And from right container items can be removed on spill.</label>\r\n  <div class=\'wrapper\' ng-controller=\"DifferentOptionsModel\">\r\n    <div class=\'tableRow\'>\r\n      <div id=\"containerLeft\" class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\r\n      </div>\r\n      <div id=\"containerRight\" class=\'containerVertical\'>\r\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tableRow\">\r\n      <div class=\'containerVertical\'>\r\n        <pre>Items1:\r\n          <br/>{{items1 | json}}</pre>\r\n      </div>\r\n      <div class=\'containerVertical\'>\r\n        <pre>Items2:\r\n          <br/>{{items2 | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <pre>\r\n        <code>\r\n// JS\r\n  .controller(\'DifferentOptionsModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\r\n    $scope.items1 = [{\r\n      content: \'Move me, but you can only drop me in one of these containers.\'\r\n    }, {\r\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\r\n    }, {\r\n      content: \'Item 3\'\r\n    }, {\r\n      content: \'Item 4\'\r\n    }];\r\n    $scope.items2 = [{\r\n      content: \'Item 5\'\r\n    }, {\r\n      content: \'Item 6\'\r\n    }, {\r\n      content: \'Item 7\'\r\n    }, {\r\n      content: \'Item 8\'\r\n    }];\r\n\r\n    var containerLeft = document.querySelector(\'#containerLeft\'),\r\n      containerRight = document.querySelector(\'#containerRight\');\r\n\r\n    function accepts(el, target, source) {\r\n      if (source === containerLeft || source === target) {\r\n        return true;\r\n      }\r\n    }\r\n\r\n    dragularService([containerLeft], {\r\n      containersModel: [$scope.items1],\r\n      copy: true,\r\n      //move only from left to right  \r\n      accepts: accepts\r\n    });\r\n\r\n    dragularService([containerRight], {\r\n      containersModel: [$scope.items2],\r\n      removeOnSpill: true,\r\n      //move only from left to right  \r\n      accepts: accepts\r\n    });\r\n\r\n  }])\r\n        </code>\r\n        <code>\r\n&lt;!-- HTML --&gt;\r\n&lt;div class=\'wrapper\' ng-controller=&quot;DifferentOptionsModel&quot;&gt;\r\n    &lt;div class=\'tableRow\'&gt;\r\n      &lt;div id=&quot;containerLeft&quot; class=\'containerVertical\'&gt;\r\n        &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n      &lt;div id=&quot;containerRight&quot; class=\'containerVertical\'&gt;\r\n        &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=&quot;tableRow&quot;&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;pre&gt;Items1:\r\n          &lt;br/&gt;{{items1 | json}}&lt;/pre&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=\'containerVertical\'&gt;\r\n        &lt;pre&gt;Items2:\r\n          &lt;br/&gt;{{items2 | json}}&lt;/pre&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n        </code>\r\n      </pre>\r\n</div>\r\n");
$templateCache.put("partials/autogenerated/contribute.html","<h1 id=\"how-to-contribute\">How to contribute</h1>\n<p>It&#39;s important to us that you feel you can contribute towards the evolution of Dragular. This can take many forms: from helping to fix bugs or improve the docs, to adding in new features to the source. This guide should help you in making that process as smooth as possible.</p>\n<p>Before contributing, please read the <a href=\"https://github.com/luckylooke/dragular/blob/master/CODE_OF_CONDUCT.md\">code of conduct</a>.</p>\n<h2 id=\"reporting-issues\">Reporting issues</h2>\n<p><a href=\"https://github.com/luckylooke/dragular/issues\">GitHub Issues</a> is the place to report bugs you may have found in either the core library or any of the examples that are part of the repository. When submitting a bug please do the following:</p>\n<p><strong>1. Search for existing issues.</strong> Your bug may have already been fixed or addressed in a development branch version of Dragular, so be sure to search the issues first before putting in a duplicate issue.</p>\n<p><strong>2. Not sure if it&#39;s a bug?.</strong> Then please ask via issues and tag it [question].</p>\n<p><strong>3. Create an isolated and reproducible test case.</strong> If you are reporting a bug, make sure you also have a minimal, runnable, code example that reproduces the problem you have.</p>\n<p><strong>4. Include a live example.</strong> After narrowing your code down to only the problem areas, make use of <a href=\"http://jsfiddle.net\">jsFiddle</a>, <a href=\"http://jsbin.com/\">jsBin</a>, or a link to your live site so that we can view a live example of the problem.</p>\n<p><strong>5. Share as much information as possible.</strong> Include browser version affected, your OS, version of the library, steps to reproduce, etc. &quot;X isn&#39;t working!!!1!&quot; will probably just be closed.</p>\n<h2 id=\"dev-vs-master\">Dev vs. Master</h2>\n<p>The dev branch of Dragular is our &#39;current working&#39; version. It is always ahead of the master branch in terms of features and fixes. However it&#39;s also bleeding-edge and experimental and we cannot and do not guarantee it will compile or work for you. Very often we have to break things for a few days while we rebuild and patch. So by all means please export the dev branch and contribute towards it, indeed that is where all Pull Requests should be sent, but do so understanding the API may change beneath you.</p>\n<h2 id=\"making-changes\">Making Changes</h2>\n<p>To take advantage of our npm build script and jshint config it will be easiest for you if you have node.js installed locally.</p>\n<p>You can download node.js from <a href=\"http://nodejs.org\">nodejs.org</a>.</p>\n<p>After that you can clone the repository and run <code>npm i</code> inside the cloned folder. This will install dependencies necessary for building the project. For development workflow automation dragular uses <code>gulp &gt;= 3.9.0</code>. Before starting development, make sure that <code>gulp</code> is installed on your machine globally: <code>npm i -g gulp</code>.</p>\n<h3 id=\"developing\">Developing</h3>\n<p>There are several gulp tasks that are used for generating different builds:</p>\n<ul>\n<li><code>gulp dev</code> - Serves files with BrowserSync server, watches &amp; automatically refreshes connected browsers on changes, generates non-minified but concatenated styles &amp; scripts from the dragular source.</li>\n<li><code>gulp dev:docs</code> - Does exactly the same as <code>gulp dev</code>, except it works with the documentation source.</li>\n<li><code>gulp build</code> - Concatenates and minifies dragular source files.</li>\n<li><code>gulp build:docs</code> - Concatenates and minifies documentation source files.</li>\n</ul>\n<h3 id=\"linting\">Linting</h3>\n<ul>\n<li><code>gulp lint</code> &amp; <code>gulp lint:docs</code> - Lint JavaScript files.</li>\n</ul>\n<h3 id=\"making-a-pull-request\">Making a pull request</h3>\n<p>Once that is ready, make your changes and submit a Pull Request:</p>\n<ul>\n<li><p><strong>Send Pull Requests to the <code>dev</code> branch.</strong> All Pull Requests must be sent to the <code>dev</code> branch, <code>master</code> is the latest release and PRs to that branch will be closed.</p>\n</li>\n<li><p><strong>Ensure changes are jshint validated.</strong> Our JSHint configuration file is provided in the repository and you should check against it before submitting.</p>\n</li>\n<li><p><strong>Only commit relevant changes.</strong> Don&#39;t include changes that are not directly relevant to the fix you are making. The more focused a PR is, the faster it will get attention and be merged. Extra files changing only whitespace or trash files will likely get your PR closed.</p>\n</li>\n</ul>\n<p>Dependencies for building from source and running tests:</p>\n<h2 id=\"coding-style-preferences-are-not-contributions\">Coding style preferences are not contributions</h2>\n<p>If your PR is doing little more than changing the Dragular source code into a format / coding style that you prefer then we will automatically close it. All PRs must adhere to the coding style already set-out across the lines of code in Dragular. Your personal preferences for how things should &quot;look&quot; or be structured do not apply here, sorry. PRs should fix bugs, fix documentation or add features. No changes for the sake of change.</p>\n<h2 id=\"i-don-t-really-like-git-node-js-but-i-can-fix-this-bug\">I don&#39;t really like git / node.js, but I can fix this bug</h2>\n<p>That is fine too. While Pull Requests are the best thing in the world for us, they are not the only way to help. You&#39;re welcome to post fixes to our forum or even just email them to us. All we ask is that you still adhere to the guidelines presented here re: JSHint, etc.</p>\n");}]);
},{}],29:[function(require,module,exports){
/* global angular */
'use strict';

/**
 * dragular Directive by Luckylooke https://github.com/luckylooke/dragular
 * Angular version of dragula https://github.com/bevacqua/dragula
 */
 var dragularModule = require('./dragularModule');

dragularModule.directive('dragular', ["dragularService", function(dragularService) {
  return {
    restrict: 'A',
    link: function($scope, iElm, iAttrs) {

      var options = $scope.$eval(iAttrs.dragular) || tryJson(iAttrs.dragular) || {};

      function tryJson(json) {
        try { // I dont like try catch solutions but I havent find sattisfying way of chcecking json validity.
          return JSON.parse(json);
        } catch (e) {
          return undefined;
        }
      }

      if(iAttrs.dragularModel){
        options = angular.extend({containersModel: $scope.$eval(iAttrs.dragularModel)}, options);
      }else if(options && options.containersModel && typeof options.containersModel === 'string'){
        options.containersModel = $scope.$eval(options.containersModel);
      }

      dragularService(iElm[0], options);
    }
  };
}]);

},{"./dragularModule":30}],30:[function(require,module,exports){
/* global angular */
'use strict';



/**
 * Dragular 3.4.0 by Luckylooke https://github.com/luckylooke/dragular
 * Angular version of dragula https://github.com/bevacqua/dragula
 */
module.exports = angular.module('dragularModule', []);

({"dragularDirective":require("./dragularDirective.js"),"dragularService":require("./dragularService.js")});

},{"./dragularDirective.js":29,"./dragularService.js":31}],31:[function(require,module,exports){
/* global angular */
'use strict';

/**
 * dragular Service by Luckylooke https://github.com/luckylooke/dragular
 * Angular version of dragula https://github.com/bevacqua/dragula
 */

var dragularModule = require('./dragularModule'),
  shared = { // sahred object between all service instances
      classesCache: {}, // classes lookup cache
      containersCtx: {}, // containers model
      containers: {}, // containers
      mirror: null, // mirror image
      source: null, // source container
      item: null, // item being dragged
      copy: null, // isCopy flag
      sourceItem: null, // item originaly dragged if copy is enabled
      sourceModel: null, // source container model
      sourceFilteredModel: null, // source container filtered model if relevant
      target: null, // droppable container under drag item
      targetCtx: null, // target container context
      targetModel: null, // target container model
      lastDropTarget: null, // last container item was over
      offsetX: null, // reference x
      offsetY: null, // reference y
      moveX: null, // reference move x
      moveY: null, // reference move y
      offsetXr: null, // reference x right for boundingBox feature
      offsetYb: null, // reference y bottom for boundingBox feature
      clientX: null, // cache client x, init at grab, update at drag
      clientY: null, // cache client y, init at grab, update at drag
      mirrorWidth: null, // mirror width for boundingBox feature
      mirrorHeight: null, // mirror height for boundingBox feature
      initialSibling: null, // reference sibling when grabbed
      currentSibling: null, // reference sibling now
      initialIndex: null, // reference model index when grabbed
      currentIndex: null, // reference model index now
      tempModel: null, // if o.isContainer is used, model can be provided as well, it is temporary saved here during drags
      dragOverEvents: {}, // drag over events fired on element behind cursor
      lastElementBehindCursor: null, // last element behind cursor
      grabbed: null // holds mousedown context until first mousemove
    };

dragularModule.factory('dragularService', ["$rootScope", function dragularServiceFunction($rootScope) {
  // abbreviations
  var doc = document,
      body = doc.body,
      docElm = doc.documentElement;

  // clean common/shared objects
  service.cleanEnviroment = function cleanEnviroment() {
    shared.classesCache = {};
    shared.containersCtx = {};
    shared.containers = {};
    shared.mirror = undefined;
  };

  service.shared = shared;

  return service;

  // service definition
  function service(arg0, arg1) {
    var initialContainers = arg0 || [],
      options = arg1 || {},
      // defaults
      defaultClasses = {
        mirror: 'gu-mirror',
        hide: 'gu-hide',
        unselectable: 'gu-unselectable',
        transit: 'gu-transit'
      },
      defaultEventNames = {
        // drag-over DOM events
        dragularenter: 'dragularenter',
        dragularleave: 'dragularleave',
        dragularrelease: 'dragularrelease',
        // $scope events
        dragularcloned: 'dragularcloned',
        dragulardrag: 'dragulardrag',
        dragularcancel: 'dragularcancel',
        dragulardrop: 'dragulardrop',
        dragularremove: 'dragularremove',
        dragulardragend: 'dragulardragend',
        dragularshadow: 'dragularshadow',
        dragularover: 'dragularover',
        dragularout: 'dragularout'
      },
      o = { // options with defaults
        // classes used by dragular
        classes: defaultClasses,
        // event names used by dragular
        eventNames: defaultEventNames,
        // initial containers provided via options object (are provided via parameter by default)
        containers: false,
        // if provided, model will be synced with DOM
        containersModel: false,
        // if provided, dragular will handle filtered model cases
        containersFilteredModel: false,
        // potential target can be forced to be container by custom logic
        isContainer: never,
        // if isContainer function is provided, you can provide also respective model
        isContainerModel: getEmptyObject,
        // can drag start?
        moves: always,
        // can target accept dragged item? (target context used)
        accepts: always,
        // can be dragged item accepted by target? (source context used)
        canBeAccepted: always,
        // dragged item will be copy of source? flag or function
        copy: false,
        // target (in)validity function
        invalid: never,
        // item returns to original place
        revertOnSpill: false,
        // item will be removed if not placed into valid target
        removeOnSpill: false,
        // lock movement into x-axis
        lockX: false,
        // lock movement into y-axis
        lockY: false,
        // lock movement inside this element boundaries
        boundingBox: false,
        // element for appending mirror
        mirrorContainer: doc.body,
        // text selection in inputs wont be considered as drag
        ignoreInputTextSelection: false
      };

    processServiceArguments(); // both arguments (containers and options) are optional, this function handle this
    extendDefaultOptions();
    processOptionsObject();
    registerEvents();

    var drake = {
      containers: shared.containers,
      containersCtx: shared.containersCtx,
      isContainer: isContainer,
      start: manualStart,
      end: end,
      cancel: cancel,
      remove: remove,
      destroy: destroy,
      dragging: false
    };

    return drake;

    // Function definitions: ==============================================================================================================
    // Initial functions: -----------------------------------------------------------------------------------------------------------------

    function getContainersModel(options) {
      return (typeof(options.containersModel) === 'function') ? sanitizeContainersModel(options.containersModel()) : options.containersModel;
    }

    function sanitizeContainersModel(containersModel) {
      if (typeof(containersModel) === 'function') {
        return containersModel;
      }
      if (Array.isArray(containersModel)) {
        //                  |-------- is 2D array? -----------|
        return Array.isArray(containersModel[0]) ? containersModel : [containersModel];
      } else {
        return [];
      }
    }

    function processServiceArguments(){
      if (arguments.length === 1 && // if there is only one argument we need to distinguish if it is options object or container(s) reference
          !Array.isArray(arg0) && // array of containers elements
          !angular.isElement(arg0) && // one container element
          !arg0[0] && // array-like object with containers elements
          typeof arg0 !== 'string') { // selector
        // then arg0 is options object
        options = arg0 || {};
        initialContainers = []; // containers are not provided on init
      } else if (typeof arg0 === 'string') {
        initialContainers = document.querySelectorAll(arg0);
      }
    }

    function extendDefaultOptions(){
      angular.extend(o, options);
      if(options.classes){
        o.classes = angular.extend({}, defaultClasses, options.classes);
      }
      if(options.eventNames){
        o.eventNames = angular.extend({}, defaultEventNames, options.eventNames);
      }
    }

    function processOptionsObject(){
      // bounding box must be pure DOM element, not jQuery wrapper or something else..
      if (!isElement(o.boundingBox)) {
        o.boundingBox = false;
      }

      // initial containers provided via options are higher priority then by parameter
      if(o.containers){
        initialContainers = o.containers;
      }
      // sanitize initialContainers
      initialContainers = makeArray(initialContainers);

      // sanitize o.containersModel
      o.containersModel = sanitizeContainersModel(o.containersModel);

      // sanitize o.containersFilteredModel
      if (Array.isArray(o.containersFilteredModel)) {
        //                  |-------- is 2D array? -----------|
        o.containersFilteredModel = Array.isArray(o.containersFilteredModel[0]) ? o.containersFilteredModel : [o.containersFilteredModel];
      } else {
        o.containersFilteredModel = [];
      }

      // feed containers groups and optionaly do same for models
      if (!o.nameSpace) {
        o.nameSpace = ['dragularCommon'];
      }
      if (!Array.isArray(o.nameSpace)) {
        o.nameSpace = [o.nameSpace];
      }
      o.nameSpace.forEach(function eachNameSpace(nameSpace) {
        if (!shared.containers[nameSpace]) {
          shared.containers[nameSpace] = [];
          shared.containersCtx[nameSpace] = [];
        }
        var len = initialContainers.length,
          shLen = shared.containers[nameSpace].length;
        for (var i = 0; i < len; i++) {
          shared.containers[nameSpace][i + shLen] = initialContainers[i];
          shared.containersCtx[nameSpace][i + shLen] = {
            o: o,
            m: getContainersModel(o)[i], // can be undefined
            fm: o.containersFilteredModel[i] // can be undefined
          };
        }
      });
    }

    function registerEvents(remove) {
      var op = remove ? 'off' : 'on';
      regEvent(docElm, op, 'mouseup', release);
      // regEvent(docElm, op, 'mousemove', startBecauseMouseMoved);

      initialContainers.forEach(function addMouseDown(container) {
        regEvent(container, 'on', 'mousedown', grab);
      });

      if(!remove){ // create dragular DOM events
        angular.forEach(['dragularenter', 'dragularleave', 'dragularrelease'], function prepareDragOverEvents(name) {
          var eventName = o.eventNames[name];
          if(!shared.dragOverEvents[eventName]){
            if (doc.createEvent) {
              shared.dragOverEvents[eventName] = doc.createEvent('HTMLEvents');
              shared.dragOverEvents[eventName].initEvent(eventName, true, true);
            } else {
              shared.dragOverEvents[eventName] = doc.createEventObject();
              shared.dragOverEvents[eventName].eventType = eventName;
            }
          }
        });
      }
    }

    // Event handlers functions (end of initial functions): -----------------------------------------------------------------------------------------------------------------

    function grab(e) {
      // filter some odd situations
      if (whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey) {
        return; // we only care about honest-to-god left clicks and touch events
      }

      // set itial values
      shared.moveX = e.clientX;
      shared.moveY = e.clientY;

      var context = canStart(e.target);
      if (!context || !context.item) {
        return;
      }

      shared.grabbed = context;
      eventualMovements();
      if (e.type === 'mousedown') {
        if (isInput(context.item)) { // see also: https://github.com/bevacqua/dragula/issues/208
          context.item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
        } else {
          e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
        }
      }
    }

    function release(e) {
      ungrab();
      if (!drake.dragging) {
        return;
      }

      shared.clientX = getCoord('clientX', e);
      shared.clientY = getCoord('clientY', e);

      var elementBehindCursor = getElementBehindPoint(shared.mirror, shared.clientX, shared.clientY),
        dropTarget = findDropTarget(elementBehindCursor, shared.clientX, shared.clientY);

      if (dropTarget && ((shared.copy && o.copySortSource) || (!shared.copy || dropTarget !== shared.source))) {
        // found valid target and (is not copy case or target is not initial container)
        drop(shared.item, dropTarget);
      } else if (o.removeOnSpill) {
        remove();
      } else {
        cancel();
      }

      // after release there is no container hovered
      shared.target = null;

      if (shared.lastElementBehindCursor) {
        fireEvent(shared.lastElementBehindCursor, shared.dragOverEvents.dragularrelease, elementBehindCursor);
      }

      if (o.scope) {
        o.scope.$emit(o.eventNames.dragularrelease, shared.item, shared.source);
      }
    }

    // Main logic functions (end of event handler functions): -----------------------------------------------------------------------------------------------------------------

    function isContainer(el) {
      if(!el){
        return false;
      }
      var i = o.nameSpace.length;
      while (i--) {
        if (shared.containers[o.nameSpace[i]].indexOf(el) !== -1) {
          return true;
        }
      }
      if (o.isContainer(el)) {
        shared.tempModel = o.isContainerModel(el);
        return true;
      } else {
        shared.tempModel = null;
      }
      return false;
    }

    function removeContainers(all) {
      $rootScope.$applyAsync(function applyDestroyed() {
        var changes = Array.isArray(all) ? all : makeArray(all);
        changes.forEach(function forEachContainer(container) {
          angular.forEach(o.nameSpace, function forEachNs(nameSpace) {
            var index;
            index = shared.containers[nameSpace].indexOf(container);
            shared.containers[nameSpace].splice(index, 1);
            shared.containersCtx[nameSpace].splice(index, 1);
          });
        });
      });
    }

    function eventualMovements(remove) {
      var op = remove ? 'off' : 'on';
      regEvent(docElm, op, 'mousemove', startBecauseMouseMoved);
    }

    function movements(remove) {
      var op = remove ? 'off' : 'on';
      regEvent(docElm, op, 'selectstart', preventGrabbed); // IE8
      regEvent(docElm, op, 'click', preventGrabbed);
      regEvent(docElm, op, 'touchmove', preventGrabbed); // fixes touch devices scrolling while drag
    }

    function destroy() {
      registerEvents(true);
      removeContainers(initialContainers);
      release({});
    }

    function startBecauseMouseMoved(e) {
      if (!shared.grabbed || drake.dragging) {
        return;
      }
      if (whichMouseButton(e) === 0) {
        release({});
        return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
      }
      // truthy check fixes dragula-#239, equality fixes dragula-#207
      if (e.clientX && e.clientX === shared.moveX && e.clientY && e.clientY === shared.moveY) {
        return;
      }
      if (o.ignoreInputTextSelection) {
        var clientX = getCoord('clientX', e),
          clientY = getCoord('clientY', e),
          elementBehindCursor = doc.elementFromPoint(clientX, clientY);
        if (isInput(elementBehindCursor)) {
          return;
        }
      }

      var grabbed = shared.grabbed; // calling end() unsets shared.grabbed
      eventualMovements('remove'); // remove mousemove listener
      movements();
      end();
      start(grabbed);

      // automaticly detect direction of elements if not set in options
      if (!o.direction && getParent(shared.sourceItem)) {
        var parent = shared.sourceItem.parentNode,
          parentHeight = parent.offsetHeight,
          parentWidth = parent.offsetWidth,
          childHeight = shared.sourceItem.clientHeight,
          childWidth = shared.sourceItem.clientWidth;
        o.direction = parentHeight / childHeight < parentWidth / childWidth ? 'horizontal' : 'vertical';
      }

      // get initial coordinates, used to render shared.mirror for first time
      var offset = getOffset(shared.sourceItem);
      shared.offsetX = getCoord('pageX', e) - offset.left;
      shared.offsetY = getCoord('pageY', e) - offset.top;
      shared.clientX = getCoord('clientX', e);
      shared.clientY = getCoord('clientY', e);

      // limiting area of shared.mirror movement, get initial coordinates
      if (o.boundingBox) {
        shared.offsetXr = getCoord('pageX', e) - offset.right;
        shared.offsetYb = getCoord('pageY', e) - offset.bottom;
      }

      e.preventDefault();

      addClass(shared.item, o.classes.transit);
      renderMirrorImage();
      // initial position
      shared.mirror.style.left = shared.clientX - shared.offsetX + 'px';
      shared.mirror.style.top = shared.clientY - shared.offsetY + 'px';

      drag(e);
    }

    function canStart(item) {
      if (drake.dragging && shared.mirror) {
        console.log('usecase?');
        return; // already dragging
      }

      var handle = item;
      while (getParent(item) && !isContainer(getParent(item))) {
        // break loop if user tries to drag item which is considered invalid handle
        if (o.invalid(item, handle)) {
          return;
        }
        item = getParent(item); // drag target should be immediate child of container
        if (!item) {
          return;
        }
      }

      var source = getParent(item);
      if (!source ||
        o.invalid(item, handle) ||
        !o.moves(item, source, handle, nextEl(item))) {
        return;
      }

      return {
        item: item,
        source: source
      };
    }

    function manualStart(item) {
      var context = canStart(item);
      if (context) {
        start(context);
      }
    }

    function start(context) {
      shared.sourceItem = shared.item = context.item;
      shared.source = context.source;
      shared.initialSibling = shared.currentSibling = nextEl(context.item);

      if (isCopy(context.item, context.source)) {
        shared.item = context.item.cloneNode(true);
        shared.copy = true;
        if (o.scope) {
          o.scope.$emit(o.eventNames.dragularcloned, shared.item, context.item);
        }
      } else {
        shared.copy = false;
      }

      // prepare models operations
      var containerIndex = initialContainers.indexOf(context.source);
      shared.sourceModel = getContainersModel(o)[containerIndex];

      shared.sourceFilteredModel = o.containersFilteredModel[containerIndex];
      shared.initialIndex = domIndexOf(context.item, context.source);

      drake.dragging = true;
      if (o.scope) {
        o.scope.$emit(o.eventNames.dragulardrag, shared.sourceItem, shared.source);
      }

      return true;
    }

    function end() {
      if (!drake.dragging || !shared.item) {
        return;
      }
      drop(shared.item, getParent(shared.item));
    }

    function ungrab() {
      shared.grabbed = false;
      eventualMovements('remove');
      movements('remove');
    }

    function drop(item, target) {
      if (shared.copy && o.copySortSource && target === shared.source && getParent(item)) {
        item.parentNode.removeChild(shared.sourceItem);
      }

      if (shared.sourceModel && !isInitialPlacement(target)) {

        var dropIndex = domIndexOf(item, target);
        if(shared.targetCtx.fm){ // target has filtered model
          // convert index from index-in-filteredModel to index-in-model
          dropIndex = shared.targetCtx.m.indexOf(shared.targetCtx.fm[dropIndex]);
        }
        if(shared.sourceFilteredModel){ // target has filtered model
          // convert index from index-in-filteredModel to index-in-model
          shared.initialIndex = shared.sourceModel.indexOf(shared.sourceFilteredModel[shared.initialIndex]);
        }
        $rootScope.$applyAsync(function applyDrop() {
          if (target === shared.source) {
            shared.sourceModel.splice(dropIndex, 0, shared.sourceModel.splice(shared.initialIndex, 1)[0]);
          } else {
            shared.dropElmModel = shared.copy ? angular.copy(shared.sourceModel[shared.initialIndex]) : shared.sourceModel[shared.initialIndex];

            if (!shared.tempModel) {
              shared.targetModel = shared.targetCtx.m;
            } else {
              shared.targetModel = shared.tempModel;
            }

            target.removeChild(item); // element must be removed for ngRepeat to apply correctly

            if (!shared.copy) {
              shared.sourceModel.splice(shared.initialIndex, 1);
            }
            shared.targetModel.splice(dropIndex, 0, shared.dropElmModel);
          }

          if (getParent(item)) {
            item.parentNode.removeChild(item);
          }

          emitDropEvent();
          cleanup();
        });
      } else {
        emitDropEvent();
        cleanup();
      }

      function emitDropEvent() {
        if (o.scope) {
          if (isInitialPlacement(target)) {
            o.scope.$emit(o.eventNames.dragularcancel, item, shared.source, shared.sourceModel, shared.initialIndex);
          } else {
            o.scope.$emit(o.eventNames.dragulardrop, item, target, shared.source, shared.sourceModel, shared.initialIndex, shared.targetModel, dropIndex);
          }
        }
      }
    }

    function remove() {
      if (!drake.dragging) {
        return;
      }
      var parent = getParent(shared.item);

      if (parent) {
        parent.removeChild(shared.item);
      }

      if (shared.sourceModel) {
        $rootScope.$applyAsync(function removeModel() {
          shared.sourceModel.splice(shared.initialIndex, 1);
          cleanup();
        });
      }

      if (o.scope) {
        o.scope.$emit(shared.copy ? o.eventNames.dragularcancel : o.eventNames.dragularremove, shared.item, parent, shared.sourceModel, shared.initialIndex);
      }
      if (!shared.sourceModel) {
        cleanup();
      }
    }

    function cancel(revert) {
      if (!drake.dragging) {
        return;
      }
      var reverts = arguments.length > 0 ? revert : o.revertOnSpill,
        parent = getParent(shared.item);

      var initial = isInitialPlacement(parent);
      if (!initial && !shared.copy && reverts) {
        shared.source.insertBefore(shared.item, shared.initialSibling);
      }
      if (shared.sourceModel && !shared.copy && !reverts) {
        drop(shared.item, parent);
      } else if (o.scope) {
        if (initial || reverts) {
          o.scope.$emit(o.eventNames.dragularcancel, shared.item, shared.source);
        }
      }

      if (!shared.sourceModel || shared.copy || reverts || initial) {
        cleanup();
      }
    }

    function cleanup() {
      ungrab();
      removeMirrorImage();

      if (shared.item) {
        rmClass(shared.item, o.classes.transit);
      }

      drake.dragging = false;

      if (o.removeOnSpill === true) {
        spillOut();
      }

      if (o.scope) {
        if(shared.lastDropTarget){
         o.scope.$emit(o.eventNames.dragularout, shared.item, shared.lastDropTarget, shared.source);
        }
        o.scope.$emit(o.eventNames.dragulardragend, shared.item);
      }

      shared.source = shared.item = shared.sourceItem = shared.initialSibling = shared.currentSibling = shared.sourceModel = null;
      shared.initialIndex = shared.currentIndex = shared.lastDropTarget = shared.tempModel = shared.targetModel = null;
      shared.dropElmModel = shared.targetCtx = shared.copy = shared.moveX = shared.moveY = null;
    }

    // is item currently placed in original container and original position?
    function isInitialPlacement(target, s) { // watch performance - running each move several times!
      var sibling = s || (shared.mirror ? shared.currentSibling : nextEl(shared.item));
      return target === shared.source && sibling === shared.initialSibling;
    }

    // find valid drop container
    function findDropTarget(elementBehindCursor, clientX, clientY) {  // watch performance - running each move!
      var target = elementBehindCursor;

      while (target && !accepted()) {
        target = getParent(target);
      }
      return target;

      function accepted() {
        var accepts = false;

        if (isContainer(target)) { // is droppable?

          var immediate = getImmediateChild(target, elementBehindCursor),
            reference = getReference(target, immediate, clientX, clientY),
            initial = isInitialPlacement(target, reference),
            i = o.nameSpace.length;

          while (i--) {
            if (shared.containers[o.nameSpace[i]].indexOf(target) !== -1) {
              shared.targetCtx = shared.containersCtx[o.nameSpace[i]][shared.containers[o.nameSpace[i]].indexOf(target)];
              break;
            }
            if (!shared.targetCtx) {
              shared.targetCtx = shared.containersCtx.dragularCommon[shared.containers.dragularCommon.indexOf(target)];
            }
          }

          accepts = initial ||
            (shared.targetCtx.o.accepts(shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex) &&
              o.canBeAccepted(shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex));

          if (shared.target !== target) { // used for scroll issue
            shared.target = target;
          }
        }
        return accepts;
      }
    }

    function drag(e) { // watch performance - running each move!
      if (!shared.mirror) {
        return;
      }

      // update coordinates
      shared.clientX = getCoord('clientX', e);
      shared.clientY = getCoord('clientY', e);

      // count mirror coordiates
      var x = shared.clientX - shared.offsetX,
        y = shared.clientY - shared.offsetY,
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
        if (!o.boundingBox || (pageX > offsetBox.left + shared.offsetX && pageX < offsetBox.right + shared.offsetXr)) {
          shared.mirror.style.left = x + 'px';
        } else if (o.boundingBox) { // check again in case user scrolled the view
          if (pageX < offsetBox.left + shared.offsetX) {
            shared.mirror.style.left = shared.clientX - (pageX - offsetBox.left) + 'px';
          } else {
            shared.mirror.style.left = shared.clientX - shared.mirrorWidth - (pageX - offsetBox.right) + 'px';
          }
        }
      }
      if (!o.lockX) {
        if (!o.boundingBox || (pageY > offsetBox.top + shared.offsetY && pageY < offsetBox.bottom + shared.offsetYb)) {
          shared.mirror.style.top = y + 'px';
        } else if (o.boundingBox) { // check again in case user scrolled the view
          if (pageY < offsetBox.top + shared.offsetY) {
            shared.mirror.style.top = shared.clientY - (pageY - offsetBox.top) + 'px';
          } else {
            shared.mirror.style.top = shared.clientY - shared.mirrorHeight - (pageY - offsetBox.bottom) + 'px';
          }
        }
      }

      var elementBehindCursor = getElementBehindPoint(shared.mirror, shared.clientX, shared.clientY),
        dropTarget = findDropTarget(elementBehindCursor, shared.clientX, shared.clientY),
        changed = dropTarget !== shared.lastDropTarget;

      if (elementBehindCursor !== shared.lastElementBehindCursor) {
        fireEvent(elementBehindCursor, shared.dragOverEvents.dragularenter, !!dropTarget);
        if (shared.lastElementBehindCursor) {
          fireEvent(shared.lastElementBehindCursor, shared.dragOverEvents.dragularleave, elementBehindCursor);
        }
        shared.lastElementBehindCursor = elementBehindCursor;
      }

      if (changed) {
        if (shared.lastDropTarget) {
          moved('out');
        }
        shared.lastDropTarget = dropTarget;
        moved('over');
      }

      // do not copy in same container
      if (dropTarget === shared.source && shared.copy && !o.copySortSource) {
        if (getParent(shared.item)) {
          shared.item.parentNode.removeChild(shared.item);
        }
        return;
      }

      var reference,
        immediate = getImmediateChild(dropTarget, elementBehindCursor);

      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, shared.clientX, shared.clientY);
      } else if (o.revertOnSpill === true && !shared.copy) {
        // the case that mirror is not over valid target and reverting is on and copy is off
        reference = shared.initialSibling;
        dropTarget = shared.source;
      } else {
        // the case that mirror is not over valid target and removing is on or copy is on
        if (shared.copy && getParent(shared.item)) {
          // remove item or copy of item
          shared.item.parentNode.removeChild(shared.item);
        }
        return;
      }

      if (reference === null ||
        reference !== shared.item &&
        reference !== nextEl(shared.item) &&
        reference !== shared.currentSibling) {
        // moving item/copy to new container from previous one
        shared.currentSibling = reference;

        dropTarget.insertBefore(shared.item, reference); // if reference is null item is inserted at the end

        if (o.scope) {
          o.scope.$emit(o.eventNames.dragularshadow, shared.item, dropTarget);
        }
      }

      function moved(type) {
        if (o.scope) {
          o.scope.$emit(o.eventNames['dragular' + type], shared.item, shared.lastDropTarget, shared.source);
        }
        if (o.removeOnSpill === true) {
          type === 'over' ? spillOver() : spillOut();
        }
      }
    }

    function spillOver() {
      rmClass(shared.item, o.classes.hide);
    }

    function spillOut() {
      if (drake.dragging) {
        addClass(shared.item, o.classes.hide);
      }
    }

    function scrollContainer(e) {
      if (shared.target) {
        var before = shared.target.scrollTop;
        shared.target.scrollTop += e.deltaY;
        // block scroll of the document when container can be scrolled
        if (before !== shared.target.scrollTop) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
    }

    function renderMirrorImage() {
      if (shared.mirror) {
        return;
      }
      var rect = shared.sourceItem.getBoundingClientRect();
      shared.mirror = shared.sourceItem.cloneNode(true);
      shared.mirrorWidth = rect.width;
      shared.mirrorHeight = rect.height;
      shared.mirror.style.width = getRectWidth(rect) + 'px';
      shared.mirror.style.height = getRectHeight(rect) + 'px';
      rmClass(shared.mirror, o.classes.transit);
      addClass(shared.mirror, o.classes.mirror);
      o.mirrorContainer.appendChild(shared.mirror);
      regEvent(docElm, 'on', 'mousemove', drag);
      addClass(body, o.classes.unselectable);
      regEvent(shared.mirror, 'on', 'wheel', scrollContainer);
      if (o.scope) {
        o.scope.$emit(o.eventNames.dragularcloned, shared.mirror, shared.sourceItem);
      }
    }

    function removeMirrorImage() {
      if (shared.mirror) {
        rmClass(body, o.classes.unselectable);
        regEvent(docElm, 'off', 'mousemove', drag);
        regEvent(shared.mirror, 'off', 'wheel', scrollContainer);
        if(getParent(shared.mirror)){
          shared.mirror.parentNode.removeChild(shared.mirror);
        }
        shared.mirror = null;
      }
    }

    function getImmediateChild(dropTarget, target) { // watch performance - running each move several times!
      var immediate = target;
      while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
        immediate = getParent(immediate);
      }
      if (immediate === docElm) {
        return null;
      }
      return immediate;
    }

    function getReference(dropTarget, target, x, y) { // watch performance - running each move several times!
      var horizontal = o.direction === 'horizontal';
      return target !== dropTarget ? inside() : outside();

      function outside() { // slower, but able to figure out any position
        var len = dropTarget.children.length,
          i, el, rect;
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

    function isCopy(item, container) {
      return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
    }

    function getElementBehindPoint(point, x, y) { // watch performance - running each move!
      var p = point || {},
        state = p.className,
        el;
      p.className += ' ' + o.classes.hide;
      el = doc.elementFromPoint(x, y);
      p.className = state;
      return el;
    }
  } // end of service

  /****************************************************************************************************************************/
  /****************************************************************************************************************************/
  /****************************************************************************************************************************/

  // HELPERS FUNCTIONS:

  function regEvent(el, op, type, fn) {
    var touch = {
        mouseup: 'touchend',
        mousedown: 'touchstart',
        mousemove: 'touchmove'
      },
      $el = angular.element(el);

    if (touch[type]) {
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

  // make array from array-like objects or from single element (based on bevacqua/atoa)
  function makeArray(all, startIndex) {
    if (Array.isArray(all)) {
      return all;
    }
    if (all.length) { // is array-like
      return Array.prototype.slice.call(all, startIndex); // convert to vanilla js array
    } else { // is one element
      return [all];
    }
  }

  function whichMouseButton (e) {
    if (e.touches !== void 0) { return e.touches.length; }
    if (e.buttons !== undefined) { return e.buttons; }
    if (e.which !== undefined) { return e.which; }
    var button = e.button;
    if (button !== undefined) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
      return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
    }
  }

  function preventGrabbed(e) {
    if (shared.grabbed) {
      e.preventDefault();
    }
  }

  function getScroll(scrollProp, offsetProp) {
    if (typeof window[offsetProp] !== 'undefined') {
      return window[offsetProp];
    }
    if (docElm.clientHeight) {
      return docElm[scrollProp];
    }
    return body[scrollProp];
  }

  function getOffset(el) { // watch performance - running each move!
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

  function getRectWidth(rect) {
    return rect.width || (rect.right - rect.left);
  }

  function getRectHeight(rect) {
    return rect.height || (rect.bottom - rect.top);
  }

  function getEmptyObject() {
    return {};
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
    var cached = shared.classesCache[className];
    if (cached) {
      cached.lastIndex = 0;
    } else {
      shared.classesCache[className] = cached = new RegExp('(?:^|\\s)' + className + '(?:\\s|$)', 'g');
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

  function getCoord(coord, e) { // watch performance - running each move several times!
    var host = getEventHost(e);
    var missMap = {
      pageX: 'clientX', // IE8
      pageY: 'clientY' // IE8
    };
    if (coord in missMap && !(coord in host) && missMap[coord] in host) {
      coord = missMap[coord];
    }

    // Adding support for touch events, as they are not functional in the original
    if (!host.type || host.type.indexOf('touch') < 0) {
      return host[coord];
    } else {
      if (host.type.indexOf('end') === -1) {
        // No clientX or clientY in a touch event
        return host.originalEvent.touches[0][coord.replace('client', 'page')];
      }
      // Nothing should happen for touchend
      return false;
    }
  }

  function getParent (el) { // watch performance - running each move!
    return el.parentNode === document ? null : el.parentNode;
  }

  function isInput (el) {
    return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
  }

  function isEditable (el) {
    if (!el) { return false; } // no parents were editable
    if (el.contentEditable === 'false') { return false; } // stop the lookup
    if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
    return isEditable(getParent(el)); // contentEditable is set to 'inherit'
  }

  function domIndexOf(child, parent) {
    return Array.prototype.indexOf.call(angular.element(parent).children(), child);
  }

  function fireEvent(target, e, extra) { // watch performance - running each move!
    if (!target) {
      return;
    }
    shared.extra = extra;
    if (target.dispatchEvent) {
      target.dispatchEvent(e);
    } else {
      target.fireEvent('on' + e.eventType, e);
    }
  }

}]);

},{"./dragularModule":30}]},{},[26]);
