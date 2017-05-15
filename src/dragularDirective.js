'use strict';

/**
 * dragular Directive by Luckylooke https://github.com/luckylooke/dragular
 * Angular version of dragula https://github.com/bevacqua/dragula
 */

var dragular = function ( dragularService ) {
	return {
		restrict: 'A',
		link: function ( $scope, iElm, iAttrs ) {

			var options = $scope.$eval( iAttrs.dragular ) || tryJson( iAttrs.dragular ) || {};

			function tryJson( json ) {
				try { // I dont like try catch solutions but I havent find sattisfying way of chcecking json validity.
					return JSON.parse( json );
				} catch ( e ) {
					return undefined;
				}
			}

			if ( iAttrs.dragularModel ) {
				options.containersModel = iAttrs.dragularModel;
				if ( !options.scope ){
					options.scope = $scope;
				}
			}

			if ( iAttrs.dragularNameSpace ) {
				options.nameSpace = iAttrs.dragularNameSpace.split( ' ' );
			}

			if ( iAttrs.dragularOnInit ) {
				options.onInit = $scope.$eval( iAttrs.dragularOnInit );
			}

			dragularService( iElm[ 0 ], options );
		}
	};
};

dragular.$inject = [ 'dragularService' ];

module.exports = dragular;
