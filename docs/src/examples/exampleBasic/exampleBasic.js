'use strict';

module.exports = function TodoCtrl($element, dragularService) {
  dragularService.cleanEnviroment();
  dragularService('.containerVertical');
};
