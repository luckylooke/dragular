/* global angular */
'use strict';

NestedRepeatsWithCustomDirective.$inject = ['dragularService', '$element', '$scope', '$timeout'];

angular.module('examplesApp')
	.directive('questionDirective', QuestionsDirective)
	.controller('QuestionsController', QuestionsController);

module.exports = NestedRepeatsWithCustomDirective;



function NestedRepeatsWithCustomDirective( dragularService, $element, $scope, $timeout) {

	dragularService.cleanEnviroment();

	$scope.items = [
		{
			questions:[
				{
					text: 'text1',
					points: 1
				},
				{
					text: 'text2',
					points: 2
				},
				{
					text: 'text3',
					points: 3
				}
			],
			order: 1,
			name: 'x',
			age: '1'
		},
		{
			questions:[
				{
					text: 'text1',
					points: 1
				},
				{
					text: 'text2',
					points: 2
				},
				{
					text: 'text3',
					points: 3
				}
			],
			order: 2,
			name: 'y',
			age: '2'
		}, {
			questions:[
				{
					text: 'text1',
					points: 1
				},
				{
					text: 'text2',
					points: 2
				},
				{
					text: 'text3',
					points: 3
				}
			],
			order: 3,
			name: 'z',
			age: '3'
		},
		{
			questions:[
				{
					text: 'text1',
					points: 1
				},
				{
					text: 'text2',
					points: 2
				},
				{
					text: 'text3',
					points: 3
				}
			],
			order: 1,
			name: 'x',
			age: '4'
		}, {
			questions:[
				{
					text: 'text1',
					points: 1
				},
				{
					text: 'text2',
					points: 2
				},
				{
					text: 'text3',
					points: 3
				}
			],
			order: 2,
			name: 'y',
			age: '5'
		}, {
			questions:[
				{
					text: 'text1',
					points: 1
				},
				{
					text: 'text2',
					points: 2
				},
				{
					text: 'text3',
					points: 3
				}
			],
			order: 3,
			name: 'z',
			age: '6'
		}];

	// timeout due to document not ready, jsfiddle settings issue?
	$timeout(function() {

		dragularService('#items', {
			containersModel: 'items',
			scope: $scope,
			moves: function itemsOnly (el, container, handle) {
				return handle.classList.contains('item');
			},
			nameSpace:'items'
		});

		$scope.$on('dragulardrop', function(){
			$scope.items.forEach(function(item, index){
				item.order = index + 1;
			});
		});

	});

}

function QuestionsDirective() {
	return {
		restrict    : 'E',
		template : '<div class="all-data"><div class="subitem" ng-repeat="subitem in question">{{subitem.points}}. {{subitem.text}}</div></div>',
		controller  : 'QuestionsController',
		scope       : {
			question: '='
		}
	};
}

function QuestionsController($scope, dragularService, $element) {

	dragularService( $element.children('.all-data'), {
		containersModel: 'question',
		scope: $scope,
		nameSpace: 'subitem',
		moves: function subItemsOnly (el, container, handle) {
			return handle.classList.contains('subitem');
		}
	});

	$scope.$on('dragulardrop', function(){
		$scope.question.forEach(function(item, index){
			item.points = index + 1;
		});
	});
}

