/* global angular */
'use strict';

/**
 *  Module Example App
 *
 *  DEMO app for dragular https://github.com/luckylooke/dragular
 */
angular.module('examplesApp', ['dragularModule']).controller('ExAppCtrl', ['$rootScope', function($rootScope) {
    $scope.examplesList = [{
        template: 'exampleBasic',
        title: 'Basic'
    }, {
        template: 'exampleDirective',
        title: 'Directive'
    }, {
        template: 'exampleEvents',
        title: 'Events'
    }, {
        template: 'exampleRemoveOnSpill',
        title: 'Remove on spill'
    }, {
        template: 'exampleRevertOnSpill',
        title: 'Revert on spill'
    }, {
        template: 'exampleCopy',
        title: 'Copy'
    }, {
        template: 'exampleHandle',
        title: 'Handle'
    }, {
        template: 'exampleCustomClasses',
        title: 'Custom classes'
    }, {
        template: 'exampleNameSpaces',
        title: 'NameSpaces'
    }, {
        template: 'exampleDragOverClasses',
        title: 'DragOver classes'
    }, {
        template: 'exampleBoundingBox',
        title: 'BoundingBox'
    }, {
        template: 'exampleBoundingBoxLockX',
        title: 'BoundingBox + LockX'
    }, {
        template: 'exampleBoundingBoxLockY',
        title: 'BoundingBox + LockY'
    }, {
        template: 'exampleNgRepeat',
        title: 'ngRepeat'
    }, {
        template: 'exampleNestedNgRepeat',
        title: 'Nested ngRepead'
    }, {
        template: 'exampleScrollingDrag',
        title: 'Scrolling drag'
    }];
    $rootScope.models = false;
    $scope.toggleModels = function toggleModels() {
        $rootScope.models = !$rootScope.models;
    }
}]);
