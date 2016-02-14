'use strict';

module.exports = function DirectiveCtrl($scope) {
  $scope.dragularOptions = {
    classes: {
      mirror: 'custom-green-mirror'
    },
    nameSpace: 'same' // just connecting left and right container
  };
};
