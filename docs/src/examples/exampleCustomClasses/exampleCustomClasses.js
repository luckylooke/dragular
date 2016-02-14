'use strict';

module.exports = function ($element, dragularService) {
  dragularService.cleanEnviroment();
  dragularService($element.children(), {
    classes: {
      mirror: 'custom-green-mirror'
    }
  });
};
