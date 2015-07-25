/* global angular */
'use strict';
angular.module('examplesApp')
  .controller('Example1', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children());
  }])