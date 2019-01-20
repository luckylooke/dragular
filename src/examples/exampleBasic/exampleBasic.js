'use strict';

var BasicCtrl = function ($element, dragularService) {
  dragularService.cleanEnviroment();
  dragularService('.container-vertical');
};

BasicCtrl.$inject = ['$element', 'dragularService'];

module.exports = BasicCtrl;
