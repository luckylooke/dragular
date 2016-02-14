'use strict';

module.exports = function ($element, dragularService) {
  dragularService.cleanEnviroment();
  dragularService($element.children(), {
    revertOnSpill: true
  });
};
