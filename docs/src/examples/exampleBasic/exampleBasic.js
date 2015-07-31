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
  .controller('BasicModel', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children());
  }]);
