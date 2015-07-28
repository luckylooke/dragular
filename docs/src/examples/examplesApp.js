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

module.exports = angular.module('examplesApp', ['dragularModule']);

bulk(__dirname, ['./**/!(*App).js']);
