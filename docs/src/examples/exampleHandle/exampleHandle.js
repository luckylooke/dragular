/* global angular */
'use strict';
angular.module('examplesApp')
  .controller('Example6', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      moves: function(el, container, handle) {
        return handle.className === 'handle';
      }
    });
  }])