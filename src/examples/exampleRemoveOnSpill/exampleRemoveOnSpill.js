/* global angular */
'use strict';
angular.module('examplesApp')
  .controller('Example3', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      removeOnSpill: true
    });
  }])