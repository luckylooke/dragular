'use strict';

module.exports = function TodoCtrl($element, dragularService) {
  var boundingBox = $element.children().children()[0];
  dragularService.cleanEnviroment();
  dragularService(boundingBox, {
    boundingBox: boundingBox,
    lockY: true
  });
};
