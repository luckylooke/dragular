/* global angular */
'use strict';
angular.module('examplesApp')
  .controller('Example4', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      revertOnSpill: true
    });
  }])