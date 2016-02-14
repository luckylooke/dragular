'use strict';

module.exports = function TodoCtrl($element, dragularService) {
  dragularService.cleanEnviroment();
	dragularService($element.children(), {
    moves: function(el, container, handle) {
      return handle.className === 'handle';
    }
  });
};
