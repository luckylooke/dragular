(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global angular */
	'use strict';
	var dragularDirective = __webpack_require__( 1 );
	var dragularService = __webpack_require__( 2 );

	/**
	 * Dragular 4.4.5 by Luckylooke https://github.com/luckylooke/dragular
	 * Angular version of dragula https://github.com/bevacqua/dragula
	 */
	module.exports = 'dragularModule';

	angular
		.module( 'dragularModule', [] )
		.factory( 'dragularService', dragularService )
		.directive( 'dragular', dragularDirective );


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* global angular */
	'use strict';

	/**
	 * dragular Service by Luckylooke https://github.com/luckylooke/dragular
	 * Angular version of dragula https://github.com/bevacqua/dragula
	 */

	var shared = { // sahred object between all service instances
		classesCache: {}, // classes lookup cache
		containersCtx: {}, // containers model
		containers: {}, // containers
		mirror: null, // mirror image
		source: null, // source container
		item: null, // item being dragged
		copy: null, // copy flag
		sourceItem: null, // item originaly dragged if copy is enabled
		sourceModel: null, // source container model
		sourceFilteredModel: null, // source container filtered model if relevant
		target: null, // droppable container under drag item
		targetCtx: null, // target container context
		targetModel: null, // target container model
		lastDropTarget: null, // last container item was over
		offsetX: null, // reference x
		offsetY: null, // reference y
		moveX: null, // reference move x
		moveY: null, // reference move y
		offsetXr: null, // reference x right for boundingBox feature
		offsetYb: null, // reference y bottom for boundingBox feature
		clientX: null, // cache client x, init at grab, update at drag
		clientY: null, // cache client y, init at grab, update at drag
		mirrorWidth: null, // mirror width for boundingBox feature
		mirrorHeight: null, // mirror height for boundingBox feature
		initialSibling: null, // reference sibling when grabbed
		currentSibling: null, // reference sibling now
		initialIndex: null, // reference model index when grabbed
		currentIndex: null, // reference model index now
		tempModel: null, // if o.isContainer is used, model can be provided as well, it is temporary saved here during drags
		dragOverEvents: {}, // drag over events fired on element behind cursor
		lastElementBehindCursor: null, // last element behind cursor
		grabbed: null // holds mousedown context until first mousemove
	};

	var dragularService = function ( $rootScope, $compile ) {

		// abbreviations
		var _doc = document,
			_docElm = _doc.documentElement,
			_isArray = Array.isArray,
			_isFunction = angular.isFunction;

		// clean common/shared objects
		service.cleanEnviroment = function cleanEnviroment() {
			shared.classesCache = {};
			shared.containersCtx = {};
			shared.containers = {};
			shared.mirror = undefined;
		};

		service.shared = shared;

		return service;

		// service definition
		function service( arg0, arg1 ) {

			// console.log('dragularService arg0, arg1', arg0, arg1);

			var initialContainers = arg0 || [],
				options = arg1 || {},
				o, // shorthand for options
				g = getBool, // shorthand for getBool

				// defaults
				defaultClasses = {
					mirror: 'gu-mirror',
					hide: 'gu-hide',
					unselectable: 'gu-unselectable',
					transit: 'gu-transit'
				},
				defaultEventNames = {
					// drag-over DOM events
					dragularenter: 'dragularenter',
					dragularleave: 'dragularleave',
					dragularrelease: 'dragularrelease',
					// $scope events
					dragularcloned: 'dragularcloned',
					dragulardrag: 'dragulardrag',
					dragularcancel: 'dragularcancel',
					dragulardrop: 'dragulardrop',
					dragularremove: 'dragularremove',
					dragulardragend: 'dragulardragend',
					dragularshadow: 'dragularshadow',
					dragularover: 'dragularover',
					dragularout: 'dragularout'
				},
				defaultOptions = { // options with defaults
					copyOptions: false, // copy options object when provided
					classes: defaultClasses, // classes used by dragular
					eventNames: defaultEventNames, // event names used by dragular
					containers: false, // initial containers provided via options object (are provided via parameter by default)
					containersModel: false, // if provided, model will be synced with DOM
					containersFilteredModel: false, // if provided, dragular will handle filtered model cases
					isContainer: never, // potential target can be forced to be container by custom logic
					isContainerModel: getEmptyObject, // if isContainer function is provided, you can provide also respective model
					isContainerAccepts: always, // if isContainer function is provided, you can provide also respective accept function
					moves: always, // can drag start?
					accepts: always, // can target accept dragged item? (target context used)
					canBeAccepted: always, // can be dragged item accepted by target? (source context used)
					copy: false, // dragged item will be copy of source? flag or function
					copySortSource: false, // enable sorting in source when copying item
					dontCopyModel: false, // dont make copy of model when coping item (#61)
					invalid: never, // target (in)validity function
					revertOnSpill: false, // item returns to original place
					removeOnSpill: false, // item will be removed if not placed into valid target
					lockX: false, // lock movement into x-axis
					lockY: false, // lock movement into y-axis
					boundingBox: false, // lock movement inside this element boundaries
					mirrorContainer: _doc.body, // element for appending mirror
					ignoreInputTextSelection: true, // text selection in inputs wont be considered as drag
					compileItemOnDrop: false,
					onInit: false // function callback called after dragular initialisation and providing drake as first argument
				},

				drake = {
					containers: shared.containers, // all containers
					containersCtx: shared.containersCtx, // all contexts to containers
					sanitizeContainersModel: depSanitize,
					sanitizeContainers: sanitizeContainers,
					isContainer: isContainer,
					start: manualStart,
					end: end,
					cancel: cancel,
					remove: remove,
					destroy: destroy,
					dragging: false
				};

			processServiceArguments(); // both arguments (containers and options) are optional, this function handle this
			extendOptions();
			processOptionsObject();
			registerEvents();

			if ( o.onInit ) {
				o.onInit( drake, o );
			}
			return drake;


			// Function definitions: ==============================================================================================================


			// ====================================================================================================================================
			// Dragular service init functions: ---------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function processServiceArguments() {

				if ( arguments.length === 1 && // if there is only one argument we need to distinguish if it is options object or container(s) reference

					!_isArray( arg0 ) && // array of containers elements
					!angular.isElement( arg0 ) && // one container element
					!arg0[ 0 ] && // array-like object with containers elements
					typeof arg0 !== 'string' ) { // selector
					// then arg0 is options object
					options = arg0 || {};
					initialContainers = []; // containers are not provided on init
				}
				else if ( typeof arg0 === 'string' ) {

					initialContainers = document.querySelectorAll( arg0 );
				}

				o = options.copyOptions ? angular.copy( options ) : options;
			}

			function extendOptions() {

				var tmp = angular.extend( {}, defaultOptions, o ); // tmp for keeping defaults untouched
				angular.extend( o, tmp ); // merge defaults back into options

				if ( o.classes ) {

					tmp = angular.extend( {}, defaultClasses, o.classes );
					angular.extend( o.classes, tmp );
				}

				if ( o.eventNames ) {

					tmp = angular.extend( {}, defaultEventNames, o.eventNames );
					angular.extend( o.eventNames, tmp );
				}
			}

			function processOptionsObject() {

				// bounding box must be pure DOM element, not jQuery wrapper or something else..
				if ( !isElement( o.boundingBox ) ) {
					o.boundingBox = false;
				}

				// initial containers provided via options are higher priority then by parameter
				if ( o.containers ) {
					initialContainers = o.containers;
				}

				// sanitize initialContainers
				o.containers = sanitizeContainers( initialContainers, false, o.scope );

				// sanitize o.containersModel
				o.containersModel = sanitizeContainers( o.containersModel, true, o.scope );

				// sanitize o.containersFilteredModel
				if ( _isArray( o.containersFilteredModel ) ) {
					//                  |-------- is 2D array? -----------|
					o.containersFilteredModel = _isArray( o.containersFilteredModel[ 0 ] ) ? o.containersFilteredModel : [ o.containersFilteredModel ];
				} else {
					o.containersFilteredModel = [];
				}

				// feed containers groups and optionaly do same for models
				if ( !o.nameSpace ) {
					o.nameSpace = [ 'dragularCommon' ];
				}

				if ( !_isArray( o.nameSpace ) ) {
					o.nameSpace = [ o.nameSpace ];
				}

				o.nameSpace.forEach( function eachNameSpace( nameSpace ) {

					if ( !shared.containers[ nameSpace ] ) {

						shared.containers[ nameSpace ] = [];
						shared.containersCtx[ nameSpace ] = [];
					}

					var len = getContainers( o ).length,
						cont;

					for ( var i = 0; i < len; i++ ) {

						cont = getContainers( o )[ i ];

						if (!cont) {
							throw new Error( 'Container element must be defined!' );
						}

						if (shared.containers[ nameSpace ].indexOf(cont) !== -1) {
							throw new Error( 'Cannot register container element more than once! Container element: ' );
						}

						shared.containers[ nameSpace ].push(cont);
						shared.containersCtx[ nameSpace ].push({
							o: o,
							m: getContainersModel( o )[ i ], // can be undefined
							fm: o.containersFilteredModel[ i ] // can be undefined
						});
					}
				} );
			}

			function registerEvents( remove ) {
				var op = remove ? 'off' : 'on';
				regEvent( _docElm, op, 'mouseup', release );

				getContainers( o ).forEach( function addMouseDown( container ) {
					regEvent( container, 'on', 'mousedown', grab );
				} );

				if ( !remove ) { // create dragular DOM events
					angular.forEach( [ 'dragularenter', 'dragularleave', 'dragularrelease' ], function prepareDragOverEvents( name ) {
						var eventName = o.eventNames[ name ];
						if ( !shared.dragOverEvents[ eventName ] ) {
							if ( _doc.createEvent ) {
								shared.dragOverEvents[ eventName ] = _doc.createEvent( 'HTMLEvents' );
								shared.dragOverEvents[ eventName ].initEvent( eventName, true, true );
							} else {
								shared.dragOverEvents[ eventName ] = _doc.createEventObject();
								shared.dragOverEvents[ eventName ].eventType = eventName;
							}
						}
					} );
				}
			}


			// ====================================================================================================================================
			// Grab stage: ------------------------------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function grab( e ) {

				// filter some odd situations
				if ( whichMouseButton( e ) !== 1 || e.metaKey || e.ctrlKey ) {
					return; // we only care about honest-to-god left clicks and touch events
				}

				// set itial values
				shared.moveX = e.clientX;
				shared.moveY = e.clientY;

				var context = canStart( e.target );
				if ( !context || !context.item ) {
					return;
				}

				shared.grabbed = context;
				eventualMovements();
				if ( e.type === 'mousedown' ) {
					if ( isInput( e.target ) ) { // see also: https://github.com/bevacqua/dragula/issues/208
						e.target.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
						// changed from context.item to e.target fixing https://github.com/luckylooke/dragular/issues/87#issuecomment-256865796
					} else {
						e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
					}
				}
			}

			function eventualMovements( remove ) {

				var op = remove ? 'off' : 'on';
				regEvent( _docElm, op, 'mousemove', startBecauseMouseMoved );
			}

			function startBecauseMouseMoved( e ) {

				if ( !shared.grabbed || drake.dragging ) {
					return;
				}

				if ( e.originalEvent ) {
					e = e.originalEvent; // jQuery enviroment
				}

				if ( whichMouseButton( e ) === 0 ) {
					release( {} );
					return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
				}

				// truthy check fixes dragula-#239, equality fixes dragula-#207
				if ( e.clientX && e.clientX === shared.moveX && e.clientY && e.clientY === shared.moveY ) {
					return;
				}

				if ( g( o.ignoreInputTextSelection ) ) {

					var clientX = getCoord( 'clientX', e ),
						clientY = getCoord( 'clientY', e ),
						elementBehindCursor = _doc.elementFromPoint( clientX, clientY );
					if ( isInput( elementBehindCursor ) ) {
						return;
					}
				}

				var grabbed = shared.grabbed; // calling end() unsets shared.grabbed
				eventualMovements( 'remove' ); // remove mousemove listener
				movements();
				end();
				start( grabbed );

				if ( !shared.item ) {
					return;
				}

				// automaticly detect direction of elements if not set in options
				if ( !o.direction && getParent( shared.sourceItem ) ) {
					var parent = shared.sourceItem.parentNode,
						parentHeight = parent.offsetHeight,
						parentWidth = parent.offsetWidth,
						childHeight = shared.sourceItem.clientHeight,
						childWidth = shared.sourceItem.clientWidth;
					o.direction = parentHeight / childHeight < parentWidth / childWidth ? 'horizontal' : 'vertical';
				}

				// get initial coordinates, used to render shared.mirror for first time
				var offset = getOffset( shared.sourceItem );
				shared.offsetX = getCoord( 'pageX', e ) - offset.left;
				shared.offsetY = getCoord( 'pageY', e ) - offset.top;
				shared.clientX = getCoord( 'clientX', e );
				shared.clientY = getCoord( 'clientY', e );

				// limiting area of shared.mirror movement, get initial coordinates
				if ( o.boundingBox ) {
					shared.offsetXr = getCoord( 'pageX', e ) - offset.right;
					shared.offsetYb = getCoord( 'pageY', e ) - offset.bottom;
				}

				e.preventDefault();

				renderMirrorImage();
				addClass( shared.item, o.classes.transit );
				// initial position
				shared.mirror.style.left = shared.clientX - shared.offsetX + 'px';
				shared.mirror.style.top = shared.clientY - shared.offsetY + 'px';

				drag( e );
			}

			function movements( remove ) {

				var op = remove ? 'off' : 'on';
				regEvent( _docElm, op, 'selectstart', preventGrabbed ); // IE8
				regEvent( _docElm, op, 'click', preventGrabbed );
				regEvent( _docElm, op, 'touchmove', preventGrabbed ); // fixes touch devices scrolling while drag
			}

			function canStart( item ) {
				if ( drake.dragging && shared.mirror ) {
					return; // already dragging
				}

				var handle = item;
				while ( getParent( item ) && !isContainer( getParent( item ) ) ) {
					// break loop if user tries to drag item which is considered invalid handle
					if ( o.invalid( item, handle ) ) {
						return;
					}
					item = getParent( item ); // drag target should be immediate child of container
					if ( !item ) {
						return;
					}
				}

				var source = getParent( item );
				if ( !source ||
					o.invalid( item, handle ) || !o.moves( item, source, handle, nextEl( item ) ) ) {
					return;
				}

				return {
					item: item,
					source: source
				};
			}

			function start( context ) {
				shared.sourceItem = shared.item = context.item;
				shared.source = context.source;
				shared.initialSibling = shared.currentSibling = nextEl( context.item );

				if ( g( o.copy, [ context.item, context.source ] ) ) {
					shared.item = context.item.cloneNode( true );
					shared.copy = true;
					if ( o.scope ) {
						o.scope.$emit( o.eventNames.dragularcloned, shared.item, context.item );
					}
				} else {
					shared.copy = false;
				}

				// prepare models operations
				var containerIndex = getContainers( o ).indexOf( context.source );
				shared.sourceModel = getContainersModel( o )[ containerIndex ];

				shared.sourceFilteredModel = o.containersFilteredModel[ containerIndex ];
				shared.initialIndex = domIndexOf( context.item, context.source );

				drake.dragging = true;
				if ( o.scope ) {
					o.scope.$emit( o.eventNames.dragulardrag, shared.sourceItem, shared.source );
				}

				return true;
			}

			function manualStart( item ) {
				var context = canStart( item );
				if ( context ) {
					shared.grabbed = context;
					eventualMovements();
					//start(context);
				}
			}

			function renderMirrorImage() {
				if ( shared.mirror ) {
					return;
				}
				var rect = shared.sourceItem.getBoundingClientRect();
				shared.mirror = shared.sourceItem.cloneNode( true );
				shared.mirrorWidth = rect.width;
				shared.mirrorHeight = rect.height;
				shared.mirror.style.width = getRectWidth( rect ) + 'px';
				shared.mirror.style.height = getRectHeight( rect ) + 'px';
				addClass( shared.mirror, o.classes.mirror );
				o.mirrorContainer.appendChild( shared.mirror );
				regEvent( _docElm, 'on', 'mousemove', drag );
				addClass( _doc.body, o.classes.unselectable );
				regEvent( shared.mirror, 'on', 'wheel', scrollContainer );
				if ( o.scope ) {
					o.scope.$emit( o.eventNames.dragularcloned, shared.mirror, shared.sourceItem );
				}
			}

			function end() {
				if ( !drake.dragging || !shared.item ) {
					return;
				}
				drop( shared.item, getParent( shared.item ) );
			}

			function ungrab() {
				shared.grabbed = false;
				eventualMovements( 'remove' );
				movements( 'remove' );
			}


			// ====================================================================================================================================
			// Drag stage: ------------------------------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function drag( e ) { // watch performance!! - function is running each mousemove!
				if ( !shared.mirror ) {
					return;
				}
				if ( e.originalEvent ) {
					e = e.originalEvent; // jQuery environment
				}

				// update coordinates
				shared.clientX = getCoord( 'clientX', e );
				shared.clientY = getCoord( 'clientY', e );

				// count mirror coordinates
				var x = shared.clientX - shared.offsetX,
					y = shared.clientY - shared.offsetY,
					pageX,
					pageY,
					offsetBox;

				// fill extra properties if boundingBox is used
				if ( o.boundingBox ) {
					pageX = getCoord( 'pageX', e );
					pageY = getCoord( 'pageY', e );
					offsetBox = getOffset( o.boundingBox );
				}

				if ( !o.lockY ) {
					if ( !o.boundingBox || (pageX > offsetBox.left + shared.offsetX && pageX < offsetBox.right + shared.offsetXr) ) {
						shared.mirror.style.left = x + 'px';
					} else if ( o.boundingBox ) { // check again in case user scrolled the view
						if ( pageX < offsetBox.left + shared.offsetX ) {
							shared.mirror.style.left = shared.clientX - (pageX - offsetBox.left) + 'px';
						} else {
							shared.mirror.style.left = shared.clientX - shared.mirrorWidth - (pageX - offsetBox.right) + 'px';
						}
					}
				}
				if ( !o.lockX ) {
					if ( !o.boundingBox || (pageY > offsetBox.top + shared.offsetY && pageY < offsetBox.bottom + shared.offsetYb) ) {
						shared.mirror.style.top = y + 'px';
					} else if ( o.boundingBox ) { // check again in case user scrolled the view
						if ( pageY < offsetBox.top + shared.offsetY ) {
							shared.mirror.style.top = shared.clientY - (pageY - offsetBox.top) + 'px';
						} else {
							shared.mirror.style.top = shared.clientY - shared.mirrorHeight - (pageY - offsetBox.bottom) + 'px';
						}
					}
				}

				var elementBehindCursor = getElementBehindPoint( shared.mirror, shared.clientX, shared.clientY ),
					dropTarget = findDropTarget( elementBehindCursor, shared.clientX, shared.clientY ),
					changed = dropTarget !== shared.lastDropTarget;

				if ( elementBehindCursor !== shared.lastElementBehindCursor ) {
					fireEvent( elementBehindCursor, shared.dragOverEvents.dragularenter, !!dropTarget );
					if ( shared.lastElementBehindCursor ) {
						fireEvent( shared.lastElementBehindCursor, shared.dragOverEvents.dragularleave, elementBehindCursor );
					}
					shared.lastElementBehindCursor = elementBehindCursor;
				}

				if ( changed ) {
					if ( shared.lastDropTarget ) {
						moved( 'out' );
					}
					shared.lastDropTarget = dropTarget;
					moved( 'over' );
				}

				// do not copy in same container
				if ( dropTarget === shared.source && shared.copy && !g( o.copySortSource ) ) {
					if ( getParent( shared.item ) ) {
						shared.item.parentNode.removeChild( shared.item );
					}
					return;
				}

				var reference,
					immediate = getImmediateChild( dropTarget, elementBehindCursor );

				if ( immediate !== null ) {
					reference = getReference( dropTarget, immediate, shared.clientX, shared.clientY );
				} else if ( g( o.revertOnSpill ) === true && !shared.copy ) {
					// the case that mirror is not over valid target and reverting is on and copy is off
					reference = shared.initialSibling;
					dropTarget = shared.source;
				} else {
					// the case that mirror is not over valid target and removing is on or copy is on
					if ( shared.copy && getParent( shared.item ) ) {
						// remove item or copy of item
						shared.item.parentNode.removeChild( shared.item );
					}
					return;
				}

				if ( reference === null ||
					reference !== shared.item &&
					reference !== nextEl( shared.item ) &&
					reference !== shared.currentSibling ) {
					// moving item/copy to new container from previous one
					shared.currentSibling = reference;

					dropTarget.insertBefore( shared.item, reference ); // if reference is null item is inserted at the end

					if ( o.scope ) {
						o.scope.$emit( o.eventNames.dragularshadow, shared.item, dropTarget, e );
					}
				}

				function moved( type ) {
					if ( o.scope ) {
						notify( o.scope );
					}

					if ( shared.targetCtx && shared.targetCtx.o.scope && shared.targetCtx.o.scope !== o.scope ) {
						notify( shared.targetCtx.o.scope );
					}

					if ( g( o.removeOnSpill ) === true ) {
						type === 'over' ? spillOver() : spillOut();
					}	

					function notify( scope ){
						scope.$emit( o.eventNames[ 'dragular' + type ], shared.item, shared.lastDropTarget, shared.source, e );
					}
				}
			}

			// find valid drop container
			function findDropTarget( elementBehindCursor, clientX, clientY ) {  // watch performance!! - running each move!
				var target = elementBehindCursor,
					targetCtx = null;

				while ( target && !accepted() ) {
					target = getParent( target );
				}

				// bugfix #148 model not updated on spill
				if ( targetCtx ){
					shared.targetCtx = targetCtx;
				}

				return target;

				function accepted() {

					if ( !isContainer( target ) ) { // is not droppable?
						return false;
					}

					var immediate = getImmediateChild( target, elementBehindCursor ),
						reference = getReference( target, immediate, clientX, clientY ),
						initial = isInitialPlacement( target, reference ),
						i = o.nameSpace.length,
						nameSpace;

					while ( i-- ) { // for each namespace
						nameSpace = o.nameSpace[ i ];
						if ( shared.containers[ nameSpace ].indexOf( target ) !== -1 ) {
							targetCtx = getTargetCtx( nameSpace );
							break;
						}
					}

					// shared.target must be actual (used for scroll functionality)
					shared.target = target;

					if ( initial ) {

						return true; // accepts = true;

					} else {

						// try to find target in default set of containers
						if ( !targetCtx ) {
							targetCtx = getTargetCtx( 'dragularCommon' );
						}

						// if found and containersModel is dynamic, retrieve model
						if ( targetCtx && _isFunction( targetCtx.o.containersModel ) ) {
							// fix targetCtx.m(odel) for dynamic containersModel
							targetCtx.m = getContainersModel( targetCtx.o )[ getContainers( targetCtx.o ).indexOf( target ) ];
						}

						if ( targetCtx && // target container is defined via service or directive
							targetCtx.o.accepts && !targetCtx.o.accepts( shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex ) ) {

							return false;

						} else if ( o.isContainer && // target container is recognized via o.isContainer
							o.isContainerAccepts && !o.isContainerAccepts( shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex ) ) {

							return false;

						}

						return !o.canBeAccepted || o.canBeAccepted( shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex );

					}

				}

				function getTargetCtx( nameSpace ) {
					return shared.containersCtx[ nameSpace ][ shared.containers[ nameSpace ].indexOf( target ) ];
				}
			}

			function spillOver() {
				rmClass( shared.item, o.classes.hide );
			}

			function spillOut() {
				if ( drake.dragging ) {
					addClass( shared.item, o.classes.hide );
				}
			}

			// is item currently placed in original container and original position?
			function isInitialPlacement( target, s ) { // watch performance - running each move several times!
				var sibling = s !== undefined ? s : (shared.mirror ? shared.currentSibling : nextEl( shared.item ));
				return target === shared.source && sibling === shared.initialSibling;
			}

			function getImmediateChild( dropTarget, target ) { // watch performance - running each move several times!
				var immediate = target;
				while ( immediate !== dropTarget && getParent( immediate ) !== dropTarget ) {
					immediate = getParent( immediate );
				}
				if ( immediate === _docElm ) {
					return null;
				}
				return immediate;
			}

			function getReference( dropTarget, target, x, y ) { // watch performance - running each move several times!
				var horizontal = o.direction === 'horizontal';
				return target !== dropTarget ? inside() : outside();

				function outside() { // slower, but able to figure out any position
					var len = dropTarget.children.length,
						i, el, rect;
					for ( i = 0; i < len; i++ ) {
						el = dropTarget.children[ i ];
						rect = el.getBoundingClientRect();
						if ( horizontal && rect.left > x ) {
							return el;
						}
						if ( !horizontal && rect.top > y ) {
							return el;
						}
					}
					return null;
				}

				function inside() { // faster, but only available if dropped inside a child element
					var rect = target.getBoundingClientRect();
					if ( horizontal ) {
						return resolve( x > rect.left + getRectWidth( rect ) / 2 );
					}
					return resolve( y > rect.top + getRectHeight( rect ) / 2 );
				}

				function resolve( after ) {
					return after ? nextEl( target ) : target;
				}
			}

			function getElementBehindPoint( point, x, y ) { // watch performance!! - function is running each mousemove!
				var p = point || {},
					state = p.className,
					el;
				p.className += ' ' + o.classes.hide;
				el = _doc.elementFromPoint( x, y );
				p.className = state;
				return el;
			}

			function isContainer( el ) {

				if ( !el ) {
					return false;
				}

				var i = o.nameSpace.length;
				while ( i-- ) {

					if ( shared.containers[ o.nameSpace[ i ] ].indexOf( el ) !== -1 ) {
						return true;
					}
				}

				if ( o.isContainer( el ) ) {

					shared.tempModel = o.isContainerModel( el );
					return true;
				} else {

					shared.tempModel = null;
				}
				return false;
			}

			function getContainers( opt ) {

				return _getContainers( 'containers', opt );
			}

			function getContainersModel( opt ) {

				return _getContainers( 'containersModel', opt, true );
			}

			function _getContainers( containersType, opt, to2d ) {

				return _isFunction( opt[ containersType ] ) ? sanitizeContainers(
					opt[ containersType ](
						(opt === o ? drake : null),
						shared
					),
					to2d,
					opt.scope
				) : opt[ containersType ];
			}

			function cancel( revert ) {
				if ( !drake.dragging ) {
					return;
				}
				var reverts = arguments.length > 0 ? revert : g( o.revertOnSpill ),
					parent = getParent( shared.item );

				var initial = isInitialPlacement( parent );
				if ( !initial && !shared.copy && reverts ) {
					shared.source.insertBefore( shared.item, shared.initialSibling );
				}
				if ( shared.sourceModel && !shared.copy && !reverts ) {
					drop( shared.item, parent );
				} else if ( o.scope ) {
					if ( initial || reverts ) {
						o.scope.$emit( o.eventNames.dragularcancel, shared.item, shared.source, shared.sourceModel, shared.initialIndex );
					}
				}

				if ( !shared.sourceModel || shared.copy || reverts || initial ) {
					cleanup();
				}
			}


			// ====================================================================================================================================
			// Release stage: ------------------------------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function release( e ) {

				ungrab();
				if ( !drake.dragging ) {
					return;
				}
				if ( e.originalEvent ) {
					e = e.originalEvent; // jQuery enviroment
				}

				shared.clientX = getCoord( 'clientX', e );
				shared.clientY = getCoord( 'clientY', e );

				var elementBehindCursor = getElementBehindPoint( shared.mirror, shared.clientX, shared.clientY ),
					dropTarget = findDropTarget( elementBehindCursor, shared.clientX, shared.clientY );

				if ( dropTarget && ((shared.copy && g( o.copySortSource )) || (!shared.copy || dropTarget !== shared.source)) ) {
					// found valid target and (is not copy case or target is not initial container)
					drop( shared.item, dropTarget );
				} else if ( g( o.removeOnSpill ) ) {
					remove();
				} else {
					cancel();
				}

				// after release there is no container hovered
				shared.target = null;

				if ( shared.lastElementBehindCursor ) {
					fireEvent( shared.lastElementBehindCursor, shared.dragOverEvents.dragularrelease, elementBehindCursor );
				}

				if ( o.scope ) {
					o.scope.$emit( o.eventNames.dragularrelease, shared.item, shared.source, e );
				}
			}

			function drop( item, target ) {
				if ( !item ) { // https://github.com/luckylooke/dragular/issues/102
					cleanup();
					return;
				}
				var sourceItem = shared.sourceItem,
					currentSibling = shared.currentSibling,
					dropIndex = domIndexOf( item, target );

				if ( shared.copy && target === shared.source && getParent( item ) && g( o.copySortSource ) ) {
					item.parentNode.removeChild( shared.sourceItem );
				}

				if ( shared.sourceModel && !isInitialPlacement( target ) ) {
					if ( shared.targetCtx && shared.targetCtx.fm ) { // target has filtered model
						// convert index from index-in-filteredModel to index-in-model
						dropIndex = shared.targetCtx.m.indexOf( shared.targetCtx.fm[ dropIndex ] );
					}
					if ( shared.sourceFilteredModel ) { // source has filtered model
						// convert index from index-in-filteredModel to index-in-model
						shared.initialIndex = shared.sourceModel.indexOf( shared.sourceFilteredModel[ shared.initialIndex ] );
					}
					$rootScope.$applyAsync( function applyDrop() {
						if ( !shared.sourceModel ) {
							return;
						}
						if ( target === shared.source ) {
							shared.sourceModel.splice( dropIndex, 0, shared.sourceModel.splice( shared.initialIndex, 1 )[ 0 ] );
						} else {
							shared.dropElmModel = shared.copy && !o.dontCopyModel ? angular.copy( shared.sourceModel[ shared.initialIndex ] ) : shared.sourceModel[ shared.initialIndex ];

							if ( !shared.tempModel ) {
								shared.targetModel = ( shared.targetCtx && shared.targetCtx.m ) || shared.sourceModel;
							} else {
								shared.targetModel = shared.tempModel;
							}

							item.parentNode.removeChild( item ); // element must be removed for ngRepeat to apply correctly

							if ( !shared.copy ) {
								shared.sourceModel.splice( shared.initialIndex, 1 );
							}

							if ( shared.targetModel ) {
								shared.targetModel.splice( dropIndex, 0, shared.dropElmModel );
							}
						}

						// removing element, as protection against duplicates, angular ng-repeat will create new item according to model
						if ( getParent( item ) ) {
							item.parentNode.removeChild( item );
						}

						afterDrop();
					} );
				} else {
					afterDrop();
				}

				function afterDrop() {

					// in nested containers case, new containers doesnt have registered mousedown
					getContainers( o ).forEach( function readdMouseDown( container ) {
						regEvent( container, 'off', 'mousedown', grab );
						regEvent( container, 'on', 'mousedown', grab );
					} );

					if ( o.compileItemOnDrop ) {
						var scope = angular.element( target ).scope ? angular.element( target ).scope() : o.scope;
						if ( scope ) {
							scope.$applyAsync( function () {
								var content = $compile( shared.copy ? sourceItem.cloneNode( true ) : sourceItem )( scope );
								if ( item.parentNode === target ) {
									target.removeChild( item );
								}
								target.insertBefore( content[ 0 ], currentSibling );
								cleanup();
							} );
						}
					}

					if ( o.scope ) {
						notify( o.scope );
					}

					if ( shared.targetCtx && shared.targetCtx.o.scope && shared.targetCtx.o.scope !== o.scope ) {
						notify( shared.targetCtx.o.scope );
					}

					if ( !o.compileItemOnDrop ) {
						cleanup();
					}

					function notify( scope ){
						if ( isInitialPlacement( target ) ) {
							scope.$emit( o.eventNames.dragularcancel, item, shared.source, shared.sourceModel, shared.initialIndex );
						} else {
							scope.$emit( o.eventNames.dragulardrop, item, target, shared.source, shared.sourceModel, shared.initialIndex, shared.targetModel, dropIndex );
						}
					}
				}
			}

			function remove() {
				if ( !drake.dragging ) {
					return;
				}
				var parent = getParent( shared.item );

				if ( parent ) {
					parent.removeChild( shared.item );
				}

				if ( shared.sourceModel ) {
					$rootScope.$applyAsync( function removeModel() {
						shared.sourceModel.splice( shared.initialIndex, 1 );
						cleanup();
					} );
				}

				if ( o.scope ) {
					o.scope.$emit( shared.copy ? o.eventNames.dragularcancel : o.eventNames.dragularremove, shared.item, parent, shared.sourceModel, shared.initialIndex );
				}
				if ( !shared.sourceModel ) {
					cleanup();
				}
			}

			function cleanup() {
				ungrab();
				removeMirrorImage();

				if ( shared.item ) {
					rmClass( shared.item, o.classes.transit );
				}

				drake.dragging = false;

				if ( g( o.removeOnSpill ) === true ) {
					spillOut();
				}

				if ( o.scope ) {
					if ( shared.lastDropTarget ) {
						o.scope.$emit( o.eventNames.dragularout, shared.item, shared.lastDropTarget, shared.source );
					}
					o.scope.$emit( o.eventNames.dragulardragend, shared.item );
				}

				shared.source = shared.item = shared.sourceItem = shared.initialSibling = shared.currentSibling = shared.sourceModel = null;
				shared.initialIndex = shared.currentIndex = shared.lastDropTarget = shared.tempModel = shared.targetModel = null;
				shared.dropElmModel = shared.targetCtx = shared.copy = shared.moveX = shared.moveY = null;
			}

			function destroy() {

				registerEvents( true );
				removeContainers( o.containers );
				release( {} );
			}

			function removeContainers( all ) {

				$rootScope.$applyAsync( function applyDestroyed() {

					var changes = _isArray( all ) ? all : makeArray( all );
					changes.forEach( function forEachContainer( container ) {

						angular.forEach( o.nameSpace, function forEachNs( nameSpace ) {

							var index;
							index = shared.containers[ nameSpace ].indexOf( container );
							shared.containers[ nameSpace ].splice( index, 1 );
							shared.containersCtx[ nameSpace ].splice( index, 1 );
						} );
					} );
				} );
			}

			function scrollContainer( e ) {
				if ( shared.target ) {
					if ( e.originalEvent ) {
						e = e.originalEvent; // jQuery enviroment
					}
					var before = shared.target.scrollTop;
					shared.target.scrollTop += e.deltaY;
					// block scroll of the document when container can be scrolled
					if ( before !== shared.target.scrollTop ) {
						e.stopPropagation();
						e.preventDefault();
					}
				}
			}

			function removeMirrorImage() {
				if ( shared.mirror ) {
					rmClass( _doc.body, o.classes.unselectable );
					regEvent( _docElm, 'off', 'mousemove', drag );
					regEvent( shared.mirror, 'off', 'wheel', scrollContainer );
					if ( getParent( shared.mirror ) ) {
						shared.mirror.parentNode.removeChild( shared.mirror );
					}
					shared.mirror = null;
				}
			}


			// ====================================================================================================================================
			// Other fns: -------------------------------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function depSanitize( containersModel ) {
				console.warn( 'Deprecated method drake.sanitizeContainersModel! Will be removed in next major release! Please use sanitizeContainers instead.' );
				sanitizeContainers( containersModel, true, o.scope );
			}

		} // end of service

		/****************************************************************************************************************************/
		/****************************************************************************************************************************/
		/****************************************************************************************************************************/

		// HELPERS FUNCTIONS:

		function sanitizeContainers( containers, to2d, scope ) {

			if ( _isFunction( containers ) ) {

				return containers;
			}
			else if ( _isArray( containers ) ) {

				if ( to2d ) {
					//                  |-------- is 2D array? -----------|
					return _isArray( containers[ 0 ] ) ? containers : [ containers ];
				}
				else {
					return containers;
				}
			}
			else if ( typeof containers === 'string' && scope ) {

				var evaluated = scope.$eval( containers );

				if ( _isFunction( evaluated ) ) {
					return evaluated;
				}
				else {
					return function () {
						return scope.$eval( containers );
					};
				}
			}
			else if ( containers ) {

				return makeArray( containers );
			}

			return [];
		}

		function regEvent( el, op, type, fn ) {
			var touch = {
					mouseup: 'touchend',
					mousedown: 'touchstart',
					mousemove: 'touchmove'
				},
				pointers = {
					mouseup: 'pointerup',
					mousedown: 'pointerdown',
					mousemove: 'pointermove'
				},
				microsoft = {
					mouseup: 'MSPointerUp',
					mousedown: 'MSPointerDown',
					mousemove: 'MSPointerMove'
				},
				$el = angular.element( el );

			if ( el.addEventListener ) {

				var opConvert = { on: 'addEventListener', off: 'removeEventListener' };
				el[ opConvert[ op ] ]( type, fn, { passive: false } );
				el[ opConvert[ op ] ]( touch[ type ], fn, { passive: false } );

			} else {

				if ( typeof navigator !== 'undefined' && navigator.pointerEnabled && pointers[ type ] ) {
					$el[ op ]( pointers[ type ], fn );
				} else if ( typeof navigator !== 'undefined' && navigator.msPointerEnabled && microsoft[ type ] ) {
					$el[ op ]( microsoft[ type ], fn );
				} else if ( touch[ type ] ) {
					$el[ op ]( touch[ type ], fn );
				}
				$el[ op ]( type, fn );

			}
		}

		function never() {
			return false;
		}

		function always() {
			return true;
		}

		// make array from array-like objects or from single element (based on bevacqua/atoa)
		function makeArray( all, startIndex ) {
			if ( _isArray( all ) ) {
				return all;
			}
			if ( all.length ) { // is array-like
				return Array.prototype.slice.call( all, startIndex ); // convert to vanilla js array
			} else { // is one element
				return [ all ];
			}
		}

		function whichMouseButton( e ) {
			if ( e.touches ) {
				return e.touches.length;
			}
			if ( e.originalEvent && e.originalEvent.touches ) {
				return e.originalEvent.touches.length;
			}
			if ( e.which !== void 0 && e.which !== 0 ) {
				return e.which;
			} // github.com/bevacqua/dragula/issues/261
			if ( e.buttons !== undefined ) {
				return e.buttons;
			}
			var button = e.button;
			if ( button !== undefined ) { // see github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
				return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
			}
		}

		function preventGrabbed( e ) {
			if ( e.originalEvent ) {
				e = e.originalEvent; // jQuery enviroment
			}
			if ( shared.grabbed ) {
				e.preventDefault();
			}
		}

		function getScroll( scrollProp, offsetProp ) {
			if ( typeof window[ offsetProp ] !== 'undefined' ) {
				return window[ offsetProp ];
			}
			if ( _docElm.clientHeight ) {
				return _docElm[ scrollProp ];
			}
			return _doc.body[ scrollProp ];
		}

		function getOffset( el ) { // watch performance!! - function is running each mousemove!
			var rect = el.getBoundingClientRect(),
				scrollTop = getScroll( 'scrollTop', 'pageYOffset' ),
				scrollLeft = getScroll( 'scrollLeft', 'pageXOffset' );
			return {
				left: rect.left + scrollLeft,
				right: rect.right + scrollLeft,
				top: rect.top + scrollTop,
				bottom: rect.bottom + scrollTop
			};
		}

		function getRectWidth( rect ) {
			return rect.width || (rect.right - rect.left);
		}

		function getRectHeight( rect ) {
			return rect.height || (rect.bottom - rect.top);
		}

		function getEmptyObject() {
			return {};
		}

		function nextEl( el ) {
			if ( !el ) { // https://github.com/luckylooke/dragular/issues/102
				return;
			}
			return el.nextElementSibling || manually();

			function manually() {
				var sibling = el;
				do {
					sibling = sibling.nextSibling;
				} while ( sibling && sibling.nodeType !== 1 );
				return sibling;
			}
		}

		//Cannot use angular.isElement because we need to check plain dom element, no jQlite wrapped
		function isElement( obj ) {
			return (
				typeof HTMLElement === 'object' ? obj instanceof HTMLElement : //DOM2
					obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string'
			);
		}

		function lookupClass( className ) {
			var cached = shared.classesCache[ className ];
			if ( cached ) {
				cached.lastIndex = 0;
			} else {
				shared.classesCache[ className ] = cached = new RegExp( '(?:^|\\s)' + className + '(?:\\s|$)', 'g' );
			}
			return cached;
		}

		function addClass( el, className ) {
			var current = el.className;
			if ( !current.length ) {
				el.className = className;
			} else if ( !lookupClass( className ).test( current ) ) {
				el.className += ' ' + className;
			}
		}

		function rmClass( el, className ) {
			el.className = el.className.replace( lookupClass( className ), ' ' ).trim();
		}

		function getEventHost( e ) {
			// on touchend event, we have to use `e.changedTouches`
			// see http://stackoverflow.com/questions/7192563/touchend-event-properties
			// see https://github.com/bevacqua/dragula/issues/34
			if ( e.targetTouches && e.targetTouches.length ) {
				return e.targetTouches[ 0 ];
			}
			if ( e.changedTouches && e.changedTouches.length ) {
				return e.changedTouches[ 0 ];
			}
			return e;
		}

		function getCoord( coord, e ) { // watch performance - running each move several times!
			var host = getEventHost( e );
			var missMap = {
				pageX: 'clientX', // IE8
				pageY: 'clientY' // IE8
			};
			if ( coord in missMap && !(coord in host) && missMap[ coord ] in host ) {
				coord = missMap[ coord ];
			}

			// Adding support for touch events, as they are not functional in the original
			if ( !host.type || host.type.indexOf( 'touch' ) < 0 ) {
				return host[ coord ];
			} else {
				if ( host.type.indexOf( 'end' ) === -1 ) {
					// No clientX or clientY in a touch event
					return host.originalEvent.touches[ 0 ][ coord.replace( 'client', 'page' ) ];
				}
				// Nothing should happen for touchend
				return false;
			}
		}

		function getParent( el ) { // watch performance!! - function is running each mousemove!
			return el.parentNode === document ? null : el.parentNode;
		}

		function isInput( el ) {
			return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable( el );
		}

		function isEditable( el ) {
			if ( !el ) {
				return false;
			} // no parents were editable
			if ( el.contentEditable === 'false' ) {
				return false;
			} // stop the lookup
			if ( el.contentEditable === 'true' ) {
				return true;
			} // found a contentEditable element in the chain
			return isEditable( getParent( el ) ); // contentEditable is set to 'inherit'
		}

		function domIndexOf( child, parent ) {
			return Array.prototype.indexOf.call( angular.element( parent ).children(), child );
		}

		function fireEvent( target, e, extra ) { // watch performance!! - function is running each mousemove!
			if ( !target ) {
				return;
			}
			shared.extra = extra;
			if ( target.dispatchEvent ) {
				target.dispatchEvent( e );
			} else {
				target.fireEvent( 'on' + e.eventType, e );
			}
		}

		function getBool( prop, args, context ) {
			if ( _isFunction( prop ) ) {
				return !!prop.apply( context || this, args || shared );
			} else {
				return !!prop;
			}
		}

	};

	dragularService.$inject = [ '$rootScope', '$compile' ];

	module.exports = dragularService;


/***/ }
/******/ ])
});
;