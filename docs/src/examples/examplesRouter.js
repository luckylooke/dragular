/* global angular */
'use strict';

var examplesAppModule = require('./examplesApp');

/**
 * @ngInject
 */

examplesAppModule
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partials/partial-home.html'
      })
      .state('api', {
        url: '/api',
        templateUrl: 'partials/partial-api.html'
      })
      .state('api.detail', {
        url: '/:link',
        templateUrl: function($stateParams) {
          return $stateParams.link + '/' + $stateParams.link + '.html';
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/partial-contact.html'
      });
  });
