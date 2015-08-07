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
