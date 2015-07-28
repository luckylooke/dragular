/* global angular */
'use strict';

var bulk = require('bulk-require');

module.exports = angular.module('dragularModule', []);

bulk(__dirname, ['./**/!(*Module).js']);
