/* global angular */
'use strict';

var examplesAppModule = require('../examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .controller('ScrollingDrag', ['$scope', '$interval', '$element', 'dragularService', function TodoCtrl($scope, $interval, $element, dragularService) {


    var timer,
      leftScroll = document.getElementById('leftScroll'),
      rightScroll = document.getElementById('rightScroll'),
      leftTopBar = document.getElementById('leftTopBar'),
      leftBottomBar = document.getElementById('leftBottomBar'),
      rightTopBar = document.getElementById('rightTopBar'),
      rightBottomBar = document.getElementById('rightBottomBar');

    dragularService.cleanEnviroment();
    dragularService([leftScroll, rightScroll], {
      scope: $scope
    });

    registerEvents(leftTopBar, leftScroll, -5);
    registerEvents(leftBottomBar, leftScroll, 5);
    registerEvents(rightTopBar, rightScroll, -5);
    registerEvents(rightBottomBar, rightScroll, 5);

    function registerEvents(bar, container, inc, speed) {
      if (!speed) {
        speed = 20;
      }
      angular.element(bar).on('dragularenter', function() {
        container.scrollTop += inc;
        timer = $interval(function moveScroll() {
          container.scrollTop += inc;
        }, speed);
      });
      angular.element(bar).on('dragularleave', function() {
        $interval.cancel(timer);
      });
    }

    // in case you release drag over bar
    $scope.$on('release', function stopScroll () {
    	$interval.cancel(timer);
    });

  }]);
