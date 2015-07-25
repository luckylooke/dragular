/* global angular */
'use strict';
angular.module('examplesApp')
  .controller('Example11', ['$element', 'dragularService', function TodoCtrl($element, dragularService) {
    var boundingBox = $element[0];
    dragularService($element.children(), {
      boundingBox: boundingBox
    });
  }])