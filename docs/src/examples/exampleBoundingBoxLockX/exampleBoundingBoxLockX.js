'use strict';

module.exports = function ($element, dragularService) {
  var boundingBox = $element.children().children()[0];
  dragularService.cleanEnviroment();
  dragularService(boundingBox, {
    boundingBox: boundingBox,
    lockX: true
  });
};
