'use strict';

var examplesAppModule = require('../examplesApp');

/**
* @ngInject
*/

examplesAppModule
 .controller('DragOverClasses', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService.cleanEnviroment();
	dragularService([$element.children()[0], $element.children()[2]], {
      nameSpace: 'apples',
      dragOverClasses: true
    });
	dragularService([$element.children()[1], $element.children()[3]], {
      nameSpace: 'oranges',
      dragOverClasses: true
    });
  }]);
