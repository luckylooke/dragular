/* global angular */
'use strict';
angular.module('examplesApp')
  .controller('Example7', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    dragularService($element.children(), {
      classes: {
        mirror: 'custom-green-mirror'
      }
    });
  }])