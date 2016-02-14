'use strict';

module.exports = function ($element, dragularService) {
  dragularService.cleanEnviroment();
	dragularService($element.children(), {
    removeOnSpill: true
  });
};
