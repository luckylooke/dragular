/* global angular */
'use strict';
angular.module('examplesApp')
  .controller('Example5', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      copy: true
    });
  }])