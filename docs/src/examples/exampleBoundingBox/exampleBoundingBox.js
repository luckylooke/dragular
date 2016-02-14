'use strict';

module.exports = function TodoCtrl($element, dragularService) {
  var boundingBox = $element[0];
  dragularService.cleanEnviroment();

  dragularService($element.children(), {
    boundingBox: boundingBox
  });
};
