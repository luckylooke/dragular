/* global angular */
'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

require('../../../src/dragularModule');
require('./templates');

/**
 *  Module Example App
 *
 *  DEMO app for dragular https://github.com/luckylooke/dragular
 */

module.exports = angular.module('examplesApp', ['dragularModule', 'templates']).controller('ExAppCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.examplesList = [{
        template: 'exampleBasic/exampleBasic.html',
        title: 'Basic'
    }, {
        template: 'exampleDirective/exampleDirective.html',
        title: 'Directive'
    }, {
        template: 'exampleEvents/exampleEvents.html',
        title: 'Events'
    }, {
        template: 'exampleRemoveOnSpill/exampleRemoveOnSpill.html',
        title: 'Remove on spill'
    }, {
        template: 'exampleRevertOnSpill/exampleRevertOnSpill.html',
        title: 'Revert on spill'
    }, {
        template: 'exampleCopy/exampleCopy.html',
        title: 'Copy'
    }, {
        template: 'exampleHandle/exampleHandle.html',
        title: 'Handle'
    }, {
        template: 'exampleCustomClasses/exampleCustomClasses.html',
        title: 'Custom classes'
    }, {
        template: 'exampleNameSpaces/exampleNameSpaces.html',
        title: 'NameSpaces'
    }, {
        template: 'exampleDragOverClasses/exampleDragOverClasses.html',
        title: 'DragOver classes'
    }, {
        template: 'exampleBoundingBox/exampleBoundingBox.html',
        title: 'BoundingBox'
    }, {
        template: 'exampleBoundingBoxLockX/exampleBoundingBoxLockX.html',
        title: 'BoundingBox + LockX'
    }, {
        template: 'exampleBoundingBoxLockY/exampleBoundingBoxLockY.html',
        title: 'BoundingBox + LockY'
    }, {
        template: 'exampleNgRepeat/exampleNgRepeat.html',
        title: 'ngRepeat'
    }, {
        template: 'exampleNestedNgRepeat/exampleNestedNgRepeat.html',
        title: 'Nested ngRepead'
    }, {
        template: 'exampleScrollingDrag/exampleScrollingDrag.html',
        title: 'Scrolling drag'
    }];

    $rootScope.globals = {
        showModelExamples: true
    };

    $scope.highlightCode = function () {
        if(document.getElementsByTagName('code').length){
            var codeBlocks = document.getElementsByTagName('code');
            for (var i = codeBlocks.length - 1; i >= 0; i--) {
                hljs.highlightBlock(codeBlocks[i]);
            };
        }
    }
}]);

bulk(__dirname, ['./**/!(*App).js']);
