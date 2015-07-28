(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/alferov/www/dragular/src/dragularDirective.js":[function(require,module,exports){
/* global angular */
'use strict';

/**
 * dragular Directive by Luckylooke https://github.com/luckylooke/dragular
 * Angular version of dragula https://github.com/bevacqua/dragula
 */
 var dragularModule = require('./dragularModule');

/**
* @ngInject
*/

dragularModule.directive('dragular', ['dragularService', function(dragularService) {
  return {
    restrict: 'A',
    link: function($scope, iElm, iAttrs) {
      dragularService(iElm[0], $scope[iAttrs.dragular || 'undefined'] || tryJson(iAttrs.dragular));

      function tryJson(json) {
        try {
          return JSON.parse(json);
        } catch (e) {
          console.log(e, 'Dragular: not valid JSON for options!', iElm);
          return undefined;
        }
      }
    }
  };
}])

},{"./dragularModule":"/home/alferov/www/dragular/src/dragularModule.js"}],"/home/alferov/www/dragular/src/dragularModule.js":[function(require,module,exports){
/* global angular */
'use strict';



module.exports = angular.module('dragularModule', []);

({"dragularDirective":require("./dragularDirective.js"),"dragularService":require("./dragularService.js")});

},{"./dragularDirective.js":"/home/alferov/www/dragular/src/dragularDirective.js","./dragularService.js":"/home/alferov/www/dragular/src/dragularService.js"}],"/home/alferov/www/dragular/src/dragularService.js":[function(require,module,exports){
/* global angular */
'use strict';

/**
 * dragular Module and Service by Luckylooke https://github.com/luckylooke/dragular
 * Angular version of dragula https://github.com/bevacqua/dragula
 */

var dragularModule = require('./dragularModule');

/**
* @ngInject
*/

dragularModule.factory('dragularService', function dragula() {

  var containersNameSpaced = {}, // name-spaced containers
    containersNameSpacedModel = {}, // name-spaced containers models
      _mirror; // mirror image

  return function(initialContainers, options) {

    if (arguments.length === 1 && !Array.isArray(initialContainers) && !angular.isElement(initialContainers) && !initialContainers[0]) {
      // then containers are not provided, only options
      options = initialContainers;
      initialContainers = [];
    }

    var body = document.body,
      documentElement = document.documentElement,
      _source, // source container
      _item, // item being dragged
      _sourceModel, // source container model
      _itemModel, // item-model being dragged
      _targetModel, // target container model
      _lastTargetModel, // last target container model
      _targetScope, // target model scope (used for $apply-ing changes in model)
      _lastTargetScope, // target model scope (used for $apply-ing changes in model)
      _offsetX, // reference x
      _offsetY, // reference y
      _offsetXr, // reference x right for boundingBox feature
      _offsetYb, // reference y bottom for boundingBox feature
      _clientX, // cache client x, init at grab, update at drag
      _clientY, // cache client y, init at grab, update at drag
      _mirrorWidth, // mirror width for boundingBox feature
      _mirrorHeight, // mirror height for boundingBox feature
      _initialSibling, // reference sibling when grabbed
      _currentSibling, // reference sibling now
      _initialIndex, // reference model index when grabbed
      _currentIndex, // reference model index now
      _lastOverElem, // last element behind the cursor (dragOverClasses feature)
      _lastOverClass, // last overClass used (dragOverClasses feature)
      _copy, // item used for copying
      _copyModel, // item-model used for copying
      _containers = {}, // containers managed by the drake
      _containersModel = {}, // containers model
      _renderTimer, // timer for setTimeout renderMirrorImage
      _isContainer, // internal isContainer
      _targetContainer, // droppable container under drag item
      defaultClasses = {
        mirror: 'gu-mirror',
        hide: 'gu-hide',
        unselectable: 'gu-unselectable',
        transit: 'gu-transit',
        overActive: 'gu-over-active',
        overAccepts: 'gu-over-accept',
        overDeclines: 'gu-over-decline'
      },
      o = { // options
        classes: defaultClasses,
        containers: false,
        moves: always,
        accepts: always,
        isContainer: never,
        copy: false,
        delay: false,
        invalid: invalidTarget,
        revertOnSpill: false,
        removeOnSpill: false,
        dragOverClasses: false,
        lockX: false,
        lockY: false,
        boundingBox: false,
        containersModel: false
      };

    if (!isElement(o.boundingBox)) {
      o.boundingBox = null;
    }

    if (options && options.classes) {
      angular.extend(defaultClasses, options.classes);
      angular.extend(options.classes, defaultClasses);
    }

    angular.extend(o, options);

    if (o.delay === true) {
      o.delay = 300;
    }

    // get initial containers from options, argument or fall back to empty array (containers can be added later)
    initialContainers = o.containers || (initialContainers ? makeArray(initialContainers) : []);
    if(o.containers){
      // make array from o.containers
      initialContainers = makeArray(initialContainers);
    }
    if(o.containersModel){
      o.containersModel = makeArray(o.containersModel);
    }

    // feed namespaced containers groups and optionaly shadow it by models
    if (o.nameSpace) {
       if (!Array.isArray(o.nameSpace)) {
          o.nameSpace = [o.nameSpace];
       }
       function proceedNameSpaces(_containers, containersNameSpaced, nameSpace, initialContainers){
        if (!containersNameSpaced[nameSpace]) {
          containersNameSpaced[nameSpace] = [];
        }
        Array.prototype.push.apply(containersNameSpaced[nameSpace], initialContainers);
        _containers[nameSpace] = containersNameSpaced[nameSpace];
       }
      o.nameSpace.forEach(function eachNameSpace (nameSpace) {
        proceedNameSpaces(_containers, containersNameSpaced, nameSpace, initialContainers);
        if(o.containersModel){
          proceedNameSpaces(_containersModel, containersNameSpacedModel, nameSpace, o.containersModel)
        }
      });
      _isContainer = isContainerNameSpaced;
    }else{
      // default (not using nameSpaces)
      _containers = initialContainers;
      _isContainer = isContainer;
      if(o.containersModel){
          _containersModel = o.containersModel;
        }
    }

    //register events
    events();

    var api = {
      addContainer: manipulateContainers('add'),
      removeContainer: manipulateContainers('remove'),
      containers: _containers,
      start: start,
      end: end,
      cancel: cancel,
      remove: remove,
      destroy: destroy,
      dragging: false
    };

    return api;

    // make array from array-like objects or from single element
    function makeArray(all) {
      if (Array.isArray(all)) {
        return all;
      }
      if (all.length) { // is array-like
        var iAll = all.length,
          newArray = [];
        while (iAll) {
          iAll--;
          newArray.push(all[iAll]);
        }
        return newArray;
      } else { // is one element
        return [all];
      }
    }

    // add or remove containers - deprecated
    function manipulateContainers(op) {
      return function addOrRemove(all) {
        var changes = Array.isArray(all) ? all : makeArray(all);
        changes.forEach(function forEachContainer(container) {
          if(o.nameSpace){
            angular.forEach(o.nameSpace, function addRemoveNamespaced (containers, nameSpace) {
              if (op === 'add') {
                _containers[nameSpace].push(container);
                console.warn && console.warn('drake.addContainer is deprecated. please access drake.containers directly, instead');
              } else {
                _containers[nameSpace].splice(_containers.indexOf(container), 1);
                console.warn && console.warn('drake.removeContainer is deprecated. please access drake.containers directly, instead');
              }
            });
          }else{
            if (op === 'add') {
              _containers.push(container);
              console.warn && console.warn('drake.addContainer is deprecated. please access drake.containers directly, instead');
            } else {
              _containers.splice(_containers.indexOf(container), 1);
              console.warn && console.warn('drake.removeContainer is deprecated. please access drake.containers directly, instead');
            }
          }
        });
      };
    }

    function isContainer(el) {
      if(api.containers.indexOf(el) !== -1 || o.isContainer(el)){
        if(o.containersModel){
          _lastTargetModel = _targetModel;
          _targetModel = _containersModel[api.containers.indexOf(el)];
          // track scopes too
          _lastTargetScope = _targetScope;
          _targetScope = angular.element(el).scope();
        }
        return true;
      }
      return false;
    }

    function isContainerNameSpaced(el) {
      var nameSpace;
      for (nameSpace in api.containers) {
          if (api.containers.hasOwnProperty(nameSpace) && api.containers[nameSpace].indexOf(el) !== -1) {
              if(o.containersModel){
                _lastTargetModel = _targetModel;
                _targetModel = _containersModel[nameSpace][api.containers[nameSpace].indexOf(el)];
                // track scopes too
                _lastTargetScope = _targetScope;
                _targetScope = angular.element(el).scope();
              }
              return true;
          }
      }
      if(o.isContainer(el)){
        if(o.containersModel && o.isContainerModel){
          var found = false;
          function tryScope (scope) {
            if(scope && scope[o.isContainerModel]){
              found = true;
              _lastTargetModel = _targetModel;
              _targetModel = scope[o.isContainerModel];
              _lastTargetScope = _targetScope;
              _targetScope = angular.element(el).scope();
            }
          }
          tryScope(angular.element(target).isolateScope());
          if(!found){ // dont search in scope if already found in isolateScope
            tryScope(angular.element(target).scope());
          }
        }
        return true;
      }
      return false;
    }

    function events(rem) {
      var op = rem ? 'off' : 'on';
      regEvent(documentElement, op, 'mouseup', release);

      initialContainers.forEach(function addMouseDown (container) {
        regEvent(container, 'on', 'mousedown', grab);
      });
    }

    function destroy() {
      events(true);
      api.removeContainer(_containers);
      release({});
    }

    function grab(e) {
      e = e || window.event;
      var item = e.target;

      // filter some odd situations
      if ((e.which !== 0 && e.which !== 1) || e.metaKey || e.ctrlKey) {
        return; // we only care about honest-to-god left clicks and touch events
      }

      // check if drag can start
      if (start(item) !== true) {
        return;
      }

      // automaticly detect direction of elements if not set in options
      if (!o.direction) {
        var parent = item.parentElement,
          parentHeight = parent.offsetHeight,
          parentWidth = parent.offsetWidth,
          childHeight = item.clientHeight,
          childWidth = item.clientWidth;
        o.direction = parentHeight / childHeight < parentWidth / childWidth ? 'horizontal' : 'vertical';
      }

      // get initial coordinates, used to render _mirror for first time
      var offset = getOffset(_item);
      _offsetX = getCoord('pageX', e) - offset.left;
      _offsetY = getCoord('pageY', e) - offset.top;
      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);

      // limiting area of _mirror movement, get initial coordinates
      if (o.boundingBox) {
        _offsetXr = getCoord('pageX', e) - offset.right;
        _offsetYb = getCoord('pageY', e) - offset.bottom;
      }

      // delayed rendering
      if (typeof o.delay === 'number') {
        _renderTimer = setTimeout(function() {
          renderMirrorAndDrag(e);
        }, o.delay);
      } else {
        renderMirrorAndDrag(e);
      }

      e.preventDefault();
    }

    function renderMirrorAndDrag(e) {
      renderMirrorImage();
      // initial position
      _mirror.style.left = _clientX - _offsetX + 'px';
      _mirror.style.top = _clientY - _offsetY + 'px';

      drag(e);
    }


    function start(item) {
      var handle = item;

      if (api.dragging && _mirror) {
        return false; // already dragging
      }

      if (_isContainer(item)) {
        return false; // don't drag container itself
      }

      while (!_isContainer(item.parentElement)) {
        // break loop if user tries to drag item which is considered invalid handle
        if (o.invalid(item, handle)) {
          return false;
        }
        item = item.parentElement; // drag target should be immediate child of container
        if (!item) {
          return;
        }
      }

      // last item chceck
      if (o.invalid(item, handle)) {
        return false;
      }

      var container = item.parentElement;
      if (!o.moves(item, container, handle, _itemModel, _sourceModel)) { // is movable
        return false;
      }

      end();

      // prepare models operations
      if (o.containersModel){
        var containerIndex = initialContainers.indexOf(container),
          itemIndex = domIndexOf(item, container);

        _initialIndex = _currentIndex = itemIndex;
        _sourceModel = o.containersModel[containerIndex];
        _itemModel = _sourceModel[itemIndex];
        if(o.copy){
          _copyModel = angular.copy(_itemModel);
        }
        console.log('starting drag',_itemModel);
      }

      if (o.copy) {
        _copy = item.cloneNode(true);
        addClass(_copy, o.classes.transit);
        if (o.scope) {
          o.scope.$emit('cloned', _copy, item, _copyModel, _itemModel);
        }
      } else {
        addClass(item, o.classes.transit);
      }

      _source = container;
      _item = item;
      _initialSibling = _currentSibling = nextEl(item);

      api.dragging = true;
      if (o.scope) {
        o.scope.$emit('drag', _item, _source);
      }

      return true;
    }

    function invalidTarget(el) {
      return el.tagName === 'A' || el.tagName === 'BUTTON';
    }

    function end() {
      console.log('end');
      if (!api.dragging) {
        return;
      }
      console.log('end-drop');
      var item = _copy || _item;
      drop(item, item.parentElement);
    }

    function release(e) {
      if (!api.dragging) {
        return;
      }
      e = e || window.event;

      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);

      var item = _copy || _item,
        elementBehindCursor = getElementBehindPoint(_mirror, _clientX, _clientY),
        dropTarget = findDropTarget(elementBehindCursor, _clientX, _clientY);

      if (dropTarget && (o.copy === false || dropTarget !== _source)) {
        // found valid target and (is not copy case or target is not initial container)
        drop(item, dropTarget);
      } else if (o.removeOnSpill) {
        remove();
      } else {
        cancel();
      }

      // after release there is no container hovered
      _targetContainer = null;

      // remove classes if used
      if (o.dragOverClasses && _lastOverElem) {
        rmClass(_lastOverElem, _lastOverClass);
        _lastOverElem = null;
      }
    }

    function drop(item, target) {
      if (o.scope && isInitialPlacement(target)) {
        o.scope.$emit('cancel', item, _source, _copyModel || _itemModel, _sourceModel, _targetModel);
      } else if (o.scope) {
        o.scope.$emit('drop', item, target, _source, _copyModel || _itemModel, _sourceModel, _targetModel);
      }
      cleanup();
    }

    function remove() {
      if (!api.dragging) {
        return;
      }
      var item = _copy || _item,
        parent = item.parentElement;

      if(!o.containersModel){
        if(parent){
          parent.removeChild(item);
        }
      }else{
        var itemModel = _copyModel || _itemModel;
        console.log('removing item/copy from curent target');
        _targetModel.splice(_targetModel.indexOf(itemModel),1);
      }

      if (o.scope) {
        o.scope.$emit(o.copy ? 'cancel' : 'remove', item, parent, itemModel, _sourceModel, _targetModel);
      }
      cleanup();
    }

    function cancel(revert) {
      if (!api.dragging) {
        return;
      }
      var reverts = arguments.length > 0 ? revert : o.revertOnSpill,
        item = _copy || _item,
        parent = item.parentElement;

      if (parent === _source && o.copy) {
        if(!o.containersModel){
          parent.removeChild(_copy);
        }else{
          _targetModel.splice(_targetModel.indexOf(_copyModel), 1, _copyModel);
        }
      }

      var initial = isInitialPlacement(parent);
      if (initial === false && o.copy === false && reverts) {
        console.log('reverting item/copy back to source');
        if(!o.containersModel){
          _source.insertBefore(item, _initialSibling);
        }else{
          _lastTargetModel = _targetModel;
          _targetModel = _sourceModel;
          // track scopes too
          _lastTargetScope = _targetScope;
          _targetScope = angular.element(el).scope();
          // move back to initial placement
          moveInContainersModel(_initialIndex);
        }
      }

      if (o.scope && (initial || reverts)) {
        o.scope.$emit('cancel', item, _source);
      } else if (o.scope) {
        o.scope.$emit('drop', item, parent, _source);
      }

      cleanup();
    }

    function cleanup() {
      var item = _copy || _item;
      removeMirrorImage();

      if (item) {
        rmClass(item, o.classes.transit);
      }

      // cancel timer
      if (_renderTimer) {
        clearTimeout(_renderTimer);
      }

      _source = _item = _copy = _initialSibling = _currentSibling = _sourceModel = null;
      _itemModel = _copyModel = _initialIndex = _currentIndex = _renderTimer = null;

      api.dragging = false;
      if (o.scope) {
        o.scope.$emit('dragend', item);
      }
    }

    // is item currently placed in original container and original position?
    function isInitialPlacement(target, s) {
      var sibling = s || (_mirror ? _currentSibling : nextEl(_item || _copy));
      return target === _source && sibling === _initialSibling;
    }

    // find valid drop container
    function findDropTarget(elementBehindCursor, clientX, clientY) {
      var target = elementBehindCursor;
      while (target && !accepted()) {
        target = target.parentElement;
      }
      return target;

      function accepted() {
        var accepts = false;

        if (_isContainer(target)) { // is droppable?
           _targetContainer = target;

          var immediate = getImmediateChild(target, elementBehindCursor),
            reference = getReference(target, immediate, clientX, clientY),
            initial = isInitialPlacement(target, reference);
          accepts = initial ? true : o.accepts(_item, target, _source, reference, _itemModel, _sourceModel);
        }

        // add class if element is enabled for it and it has not already the class
        if (o.dragOverClasses &&
          hasClass(target, o.classes.overActive) &&
          target !== _lastOverElem) {

          if (_lastOverElem) { // clear from previous
            rmClass(_lastOverElem, _lastOverClass);
          }

          _lastOverClass = accepts ? o.classes.overAccepts : o.classes.overDeclines;
          addClass(target, _lastOverClass);
          _lastOverElem = target;
        }

        return accepts;
      }
    }

    function drag(e) {
      if (!_mirror) {
        return;
      }
      e = e || window.event;

      // update coordinates
      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);

      // count mirror coordiates
      var x = _clientX - _offsetX,
        y = _clientY - _offsetY,
        pageX,
        pageY,
        offsetBox;

      // fill extra properties if boundingBox is used
      if (o.boundingBox) {
        pageX = getCoord('pageX', e);
        pageY = getCoord('pageY', e);
        offsetBox = getOffset(o.boundingBox);
      }

      if (!o.lockY) {
        if (!o.boundingBox || (pageX > offsetBox.left + _offsetX && pageX < offsetBox.right + _offsetXr)) {
          _mirror.style.left = x + 'px';
        } else if (o.boundingBox) { // check again in case user scrolled the view
          if (pageX < offsetBox.left + _offsetX) {
            _mirror.style.left = _clientX - (pageX - offsetBox.left) + 'px';
          } else {
            _mirror.style.left = _clientX - _mirrorWidth - (pageX - offsetBox.right) + 'px';
          }
        }
      }
      if (!o.lockX) {
        if (!o.boundingBox || (pageY > offsetBox.top + _offsetY && pageY < offsetBox.bottom + _offsetYb)) {
          _mirror.style.top = y + 'px';
        } else if (o.boundingBox) { // check again in case user scrolled the view
          if (pageY < offsetBox.top + _offsetY) {
            _mirror.style.top = _clientY - (pageY - offsetBox.top) + 'px';
          } else {
            _mirror.style.top = _clientY - _mirrorHeight - (pageY - offsetBox.bottom) + 'px';
          }
        }
      }

      var item = _copy || _item,
        elementBehindCursor = getElementBehindPoint(_mirror, _clientX, _clientY),
        dropTarget = findDropTarget(elementBehindCursor, _clientX, _clientY);

      // do not copy in same container
      if (dropTarget === _source && o.copy) {
        return;
      }

      var reference,
        immediate = getImmediateChild(dropTarget, elementBehindCursor);

      // prepare models operations
      if(o.containersModel){
        var referenceIndex;

        _lastTargetScope = _targetScope || angular.element(_source).scope();
        _targetScope = angular.element(dropTarget).scope();
      }

      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, _clientX, _clientY);
        if(o.containersModel){
          referenceIndex = domIndexOf(reference, dropTarget);
        }
      } else if (o.revertOnSpill === true && !o.copy) {
        // the case that mirror is not over valid target and reverting is on and copy is off
        reference = _initialSibling;
        dropTarget = _source;

        // getting model intitial properties into current
        if(o.containersModel){
          referenceIndex = _initialIndex;
          _lastTargetModel = _targetModel;
          _targetModel = _sourceModel;
          _lastTargetScope = _targetScope;
          _targetScope = angular.element(dropTarget).scope();
        }
      } else {
        // the case that mirror is not over valid target and removing is on or copy is on
        if ((o.copy || o.removeOnSpill === true) && item.parentElement !== null) {
          console.log(o.copy ? 'remove item copy from last position' : 'remove item from last position')
          // remove item or copy of item
          if(!o.containersModel){
            item.parentElement.removeChild(item);
          }else{
            _targetModel.splice(referenceIndex, 1);
            _targetScope.$apply();
          }
        }
        return;
      }
      if (reference === null || reference !== item && reference !== nextEl(item)) {
        // moving item/copy to new container from previous one
        console.log('moving item/copy to new placement');
        _currentSibling = reference;

        if(!o.containersModel){
          dropTarget.insertBefore(item, reference);
        }else{
          moveInContainersModel(referenceIndex);
          _currentIndex = referenceIndex;
        }

        if (o.scope) {
          o.scope.$emit('shadow', item, dropTarget);
        }
      }
    }

    function moveInContainersModel (referenceIndex) {
      if(_lastTargetModel === _targetModel){
        _targetModel.splice(referenceIndex, 0, _lastTargetModel.splice(_currentIndex, 1)[0]);
      }else{
        _lastTargetModel.splice(_currentIndex, 1);
        _targetModel.splice(referenceIndex, 1, _copyModel || _itemModel);
        _lastTargetScope.$apply();
      }
      _targetScope.$apply();
    }

    function scrollContainer(e){
      if(_targetContainer){_targetContainer.scrollTop += e.deltaY};
    }

    function renderMirrorImage() {
      if (_mirror) {
        return;
      }
      var rect = _item.getBoundingClientRect();
      _mirror = _item.cloneNode(true);
      _mirrorWidth = rect.width;
      _mirrorHeight = rect.height;
      _mirror.style.width = getRectWidth(rect) + 'px';
      _mirror.style.height = getRectHeight(rect) + 'px';
      rmClass(_mirror, o.classes.transit);
      addClass(_mirror, o.classes.mirror);
      body.appendChild(_mirror);
      regEvent(documentElement, 'on', 'mousemove', drag);
      addClass(body, o.classes.unselectable);
      regEvent(_mirror, 'on', 'wheel', scrollContainer);
      if (o.scope) {
        o.scope.$emit('cloned', _mirror, _item);
      }
    }

    function removeMirrorImage() {
      if (_mirror) {
        rmClass(body, o.classes.unselectable);
        regEvent(documentElement, 'off', 'mousemove', drag);
        regEvent(_mirror, 'off', 'wheel', scrollContainer);
        _mirror.parentElement.removeChild(_mirror);
        _mirror = null;
      }
    }

    function getImmediateChild(dropTarget, target) {
      var immediate = target;
      while (immediate !== dropTarget && immediate.parentElement !== dropTarget) {
        immediate = immediate.parentElement;
      }
      if (immediate === documentElement) {
        return null;
      }
      return immediate;
    }

    function getReference(dropTarget, target, x, y) {
      var horizontal = o.direction === 'horizontal';
      var reference = target !== dropTarget ? inside() : outside();
      return reference;

      function outside() { // slower, but able to figure out any position
        var len = dropTarget.children.length;
        var i;
        var el;
        var rect;
        for (i = 0; i < len; i++) {
          el = dropTarget.children[i];
          rect = el.getBoundingClientRect();
          if (horizontal && rect.left > x) {
            return el;
          }
          if (!horizontal && rect.top > y) {
            return el;
          }
        }
        return null;
      }

      function inside() { // faster, but only available if dropped inside a child element
        var rect = target.getBoundingClientRect();
        if (horizontal) {
          return resolve(x > rect.left + getRectWidth(rect) / 2);
        }
        return resolve(y > rect.top + getRectHeight(rect) / 2);
      }

      function resolve(after) {
        return after ? nextEl(target) : target;
      }
    }

    function getScroll(scrollProp, offsetProp) {
      if (typeof window[offsetProp] !== 'undefined') {
        return window[offsetProp];
      }
      if (documentElement.clientHeight) {
        return documentElement[scrollProp];
      }
      return body[scrollProp];
    }

    function getOffset(el) {
      var rect = el.getBoundingClientRect(),
        scrollTop = getScroll('scrollTop', 'pageYOffset'),
        scrollLeft = getScroll('scrollLeft', 'pageXOffset');
      return {
        left: rect.left + scrollLeft,
        right: rect.right + scrollLeft,
        top: rect.top + scrollTop,
        bottom: rect.bottom + scrollTop
      };
    }

    function getElementBehindPoint(point, x, y) {
      if (!x && !y) {
        return null;
      }
      var p = point || {},
        state = p.className,
        el;
      p.className += ' ' + o.classes.hide;
      el = document.elementFromPoint(x, y);
      p.className = state;
      return el;
    }
  };

  function regEvent(el, op, type, fn) {
    var touch = {
        mouseup: 'touchend',
        mousedown: 'touchstart',
        mousemove: 'touchmove'
      },
      $el = angular.element(el);

    if(type !== 'wheel'){$el[op](touch[type], fn)};
    $el[op](type, fn);
  }

  function never() {
    return false;
  }

  function always() {
    return true;
  }

  function nextEl(el) {
    return el.nextElementSibling || manually();

    function manually() {
      var sibling = el;
      do {
        sibling = sibling.nextSibling;
      } while (sibling && sibling.nodeType !== 1);
      return sibling;
    }
  }

  //Cannot use angular.isElement because we need to check plain dom element, no jQlite wrapped
  function isElement(o) {
    return (
      typeof HTMLElement === 'object' ? o instanceof HTMLElement : //DOM2
      o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
    );
  }

  function addClass(el, className) {
    if (el.className.indexOf(' ' + className) === -1) {
      el.className += ' ' + className;
    }
  }

  function rmClass(el, className) {
    angular.element(el).removeClass(className);
  }

  function hasClass(el, className) {
    return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
  }

  function getEventHost(e) {
    // on touchend event, we have to use `e.changedTouches`
    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
    // see https://github.com/bevacqua/dragula/issues/34
    if (e.targetTouches && e.targetTouches.length) {
      return e.targetTouches[0];
    }
    if (e.changedTouches && e.changedTouches.length) {
      return e.changedTouches[0];
    }
    return e;
  }

  function getCoord(coord, e) {
    var host = getEventHost(e);
    var missMap = {
      pageX: 'clientX', // IE8
      pageY: 'clientY' // IE8
    };
    if (coord in missMap && !(coord in host) && missMap[coord] in host) {
      coord = missMap[coord];
    }
    return host[coord];
  }

  function getRectWidth(rect) {
    return rect.width || (rect.right - rect.left);
  }

  function getRectHeight(rect) {
    return rect.height || (rect.bottom - rect.top);
  }

  function domIndexOf(child, parent){
    return Array.prototype.indexOf.call(angular.element(parent).children(), child);
  }

});

},{"./dragularModule":"/home/alferov/www/dragular/src/dragularModule.js"}]},{},["/home/alferov/www/dragular/src/dragularModule.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9zcmMvZHJhZ3VsYXJEaXJlY3RpdmUuanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9zcmMvZHJhZ3VsYXJNb2R1bGUuanMiLCIvaG9tZS9hbGZlcm92L3d3dy9kcmFndWxhci9zcmMvZHJhZ3VsYXJTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7Ozs7O0NBTUMsSUFBSSxpQkFBaUIsUUFBUTs7Ozs7O0FBTTlCLGVBQWUsVUFBVSxZQUFZLENBQUMsbUJBQW1CLFNBQVMsaUJBQWlCO0VBQ2pGLE9BQU87SUFDTCxVQUFVO0lBQ1YsTUFBTSxTQUFTLFFBQVEsTUFBTSxRQUFRO01BQ25DLGdCQUFnQixLQUFLLElBQUksT0FBTyxPQUFPLFlBQVksZ0JBQWdCLFFBQVEsT0FBTzs7TUFFbEYsU0FBUyxRQUFRLE1BQU07UUFDckIsSUFBSTtVQUNGLE9BQU8sS0FBSyxNQUFNO1VBQ2xCLE9BQU8sR0FBRztVQUNWLFFBQVEsSUFBSSxHQUFHLHlDQUF5QztVQUN4RCxPQUFPOzs7Ozs7QUFNakI7O0FDOUJBO0FBQ0E7Ozs7QUFJQSxPQUFPLFVBQVUsUUFBUSxPQUFPLGtCQUFrQjs7QUFFbEQsQ0FBQyxDQUFDLG9CQUFvQixRQUFRLDBCQUEwQixrQkFBa0IsUUFBUTtBQUNsRjs7QUNSQTtBQUNBOzs7Ozs7O0FBT0EsSUFBSSxpQkFBaUIsUUFBUTs7Ozs7O0FBTTdCLGVBQWUsUUFBUSxtQkFBbUIsU0FBUyxVQUFVOztFQUUzRCxJQUFJLHVCQUF1QjtJQUN6Qiw0QkFBNEI7TUFDMUI7O0VBRUosT0FBTyxTQUFTLG1CQUFtQixTQUFTOztJQUUxQyxJQUFJLFVBQVUsV0FBVyxLQUFLLENBQUMsTUFBTSxRQUFRLHNCQUFzQixDQUFDLFFBQVEsVUFBVSxzQkFBc0Is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RTFCLE9BQU87OztFQUdULFNBQVMsU0FBUyxPQUFPLEdBQUc7SUFDMUIsSUFBSSxPQUFPLGFBQWE7SUFDeEIsSUFBSSxVQUFVO01BQ1osT0FBTztNQUNQLE9BQU87O0lBRVQsSUFBSSxTQUFTLFdBQVcsRUFBRSxTQUFTLFNBQVMsUUFBUSxVQUFVLE1BQU07TUFDbEUsUUFBUSxRQUFROztJQUVsQixPQUFPLEtBQUs7OztFQUdkLFNBQVMsYUFBYSxNQUFNO0lBQzFCLE9BQU8sS0FBSyxVQUFVLEtBQUssUUFBUSxLQUFLOzs7RUFHMUMsU0FBUyxjQUFjLE1BQU07SUFDM0IsT0FBTyxLQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUs7OztFQUc1QyxTQUFTLFdBQVcsT0FBTyxPQUFPO0lBQ2hDLE9BQU8sTUFBTSxVQUFVLFFBQVEsS0FBSyxRQUFRLFFBQVEsUUFBUSxZQUFZOzs7O0FBSTVFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogZHJhZ3VsYXIgRGlyZWN0aXZlIGJ5IEx1Y2t5bG9va2UgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXJcbiAqIEFuZ3VsYXIgdmVyc2lvbiBvZiBkcmFndWxhIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhXG4gKi9cbiB2YXIgZHJhZ3VsYXJNb2R1bGUgPSByZXF1aXJlKCcuL2RyYWd1bGFyTW9kdWxlJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmRyYWd1bGFyTW9kdWxlLmRpcmVjdGl2ZSgnZHJhZ3VsYXInLCBbJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uKGRyYWd1bGFyU2VydmljZSkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24oJHNjb3BlLCBpRWxtLCBpQXR0cnMpIHtcbiAgICAgIGRyYWd1bGFyU2VydmljZShpRWxtWzBdLCAkc2NvcGVbaUF0dHJzLmRyYWd1bGFyIHx8ICd1bmRlZmluZWQnXSB8fCB0cnlKc29uKGlBdHRycy5kcmFndWxhcikpO1xuXG4gICAgICBmdW5jdGlvbiB0cnlKc29uKGpzb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUsICdEcmFndWxhcjogbm90IHZhbGlkIEpTT04gZm9yIG9wdGlvbnMhJywgaUVsbSk7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1dKVxuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2RyYWd1bGFyTW9kdWxlJywgW10pO1xuXG4oe1wiZHJhZ3VsYXJEaXJlY3RpdmVcIjpyZXF1aXJlKFwiLi9kcmFndWxhckRpcmVjdGl2ZS5qc1wiKSxcImRyYWd1bGFyU2VydmljZVwiOnJlcXVpcmUoXCIuL2RyYWd1bGFyU2VydmljZS5qc1wiKX0pO1xuIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBkcmFndWxhciBNb2R1bGUgYW5kIFNlcnZpY2UgYnkgTHVja3lsb29rZSBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhclxuICogQW5ndWxhciB2ZXJzaW9uIG9mIGRyYWd1bGEgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGFcbiAqL1xuXG52YXIgZHJhZ3VsYXJNb2R1bGUgPSByZXF1aXJlKCcuL2RyYWd1bGFyTW9kdWxlJyk7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5cbmRyYWd1bGFyTW9kdWxlLmZhY3RvcnkoJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIGRyYWd1bGEoKSB7XG5cbiAgdmFyIGNvbnRhaW5lcnNOYW1lU3BhY2VkID0ge30sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnNcbiAgICBjb250YWluZXJzTmFtZVNwYWNlZE1vZGVsID0ge30sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnMgbW9kZWxzXG4gICAgICBfbWlycm9yOyAvLyBtaXJyb3IgaW1hZ2VcblxuICByZXR1cm4gZnVuY3Rpb24oaW5pdGlhbENvbnRhaW5lcnMsIG9wdGlvbnMpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxDb250YWluZXJzKSAmJiAhYW5ndWxhci5pc0VsZW1lbnQoaW5pdGlhbENvbnRhaW5lcnMpICYmICFpbml0aWFsQ29udGFpbmVyc1swXSkge1xuICAgICAgLy8gdGhlbiBjb250YWluZXJzIGFyZSBub3QgcHJvdmlkZWQsIG9ubHkgb3B0aW9uc1xuICAgICAgb3B0aW9ucyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBfc291cmNlLCAvLyBzb3VyY2UgY29udGFpbmVyXG4gICAgICBfaXRlbSwgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gICAgICBfc291cmNlTW9kZWwsIC8vIHNvdXJjZSBjb250YWluZXIgbW9kZWxcbiAgICAgIF9pdGVtTW9kZWwsIC8vIGl0ZW0tbW9kZWwgYmVpbmcgZHJhZ2dlZFxuICAgICAgX3RhcmdldE1vZGVsLCAvLyB0YXJnZXQgY29udGFpbmVyIG1vZGVsXG4gICAgICBfbGFzdFRhcmdldE1vZGVsLCAvLyBsYXN0IHRhcmdldCBjb250YWluZXIgbW9kZWxcbiAgICAgIF90YXJnZXRTY29wZSwgLy8gdGFyZ2V0IG1vZGVsIHNjb3BlICh1c2VkIGZvciAkYXBwbHktaW5nIGNoYW5nZXMgaW4gbW9kZWwpXG4gICAgICBfbGFzdFRhcmdldFNjb3BlLCAvLyB0YXJnZXQgbW9kZWwgc2NvcGUgKHVzZWQgZm9yICRhcHBseS1pbmcgY2hhbmdlcyBpbiBtb2RlbClcbiAgICAgIF9vZmZzZXRYLCAvLyByZWZlcmVuY2UgeFxuICAgICAgX29mZnNldFksIC8vIHJlZmVyZW5jZSB5XG4gICAgICBfb2Zmc2V0WHIsIC8vIHJlZmVyZW5jZSB4IHJpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfb2Zmc2V0WWIsIC8vIHJlZmVyZW5jZSB5IGJvdHRvbSBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2NsaWVudFgsIC8vIGNhY2hlIGNsaWVudCB4LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfY2xpZW50WSwgLy8gY2FjaGUgY2xpZW50IHksIGluaXQgYXQgZ3JhYiwgdXBkYXRlIGF0IGRyYWdcbiAgICAgIF9taXJyb3JXaWR0aCwgLy8gbWlycm9yIHdpZHRoIGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfbWlycm9ySGVpZ2h0LCAvLyBtaXJyb3IgaGVpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfaW5pdGlhbFNpYmxpbmcsIC8vIHJlZmVyZW5jZSBzaWJsaW5nIHdoZW4gZ3JhYmJlZFxuICAgICAgX2N1cnJlbnRTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyBub3dcbiAgICAgIF9pbml0aWFsSW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50SW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCBub3dcbiAgICAgIF9sYXN0T3ZlckVsZW0sIC8vIGxhc3QgZWxlbWVudCBiZWhpbmQgdGhlIGN1cnNvciAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfbGFzdE92ZXJDbGFzcywgLy8gbGFzdCBvdmVyQ2xhc3MgdXNlZCAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfY29weSwgLy8gaXRlbSB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29weU1vZGVsLCAvLyBpdGVtLW1vZGVsIHVzZWQgZm9yIGNvcHlpbmdcbiAgICAgIF9jb250YWluZXJzID0ge30sIC8vIGNvbnRhaW5lcnMgbWFuYWdlZCBieSB0aGUgZHJha2VcbiAgICAgIF9jb250YWluZXJzTW9kZWwgPSB7fSwgLy8gY29udGFpbmVycyBtb2RlbFxuICAgICAgX3JlbmRlclRpbWVyLCAvLyB0aW1lciBmb3Igc2V0VGltZW91dCByZW5kZXJNaXJyb3JJbWFnZVxuICAgICAgX2lzQ29udGFpbmVyLCAvLyBpbnRlcm5hbCBpc0NvbnRhaW5lclxuICAgICAgX3RhcmdldENvbnRhaW5lciwgLy8gZHJvcHBhYmxlIGNvbnRhaW5lciB1bmRlciBkcmFnIGl0ZW1cbiAgICAgIGRlZmF1bHRDbGFzc2VzID0ge1xuICAgICAgICBtaXJyb3I6ICdndS1taXJyb3InLFxuICAgICAgICBoaWRlOiAnZ3UtaGlkZScsXG4gICAgICAgIHVuc2VsZWN0YWJsZTogJ2d1LXVuc2VsZWN0YWJsZScsXG4gICAgICAgIHRyYW5zaXQ6ICdndS10cmFuc2l0JyxcbiAgICAgICAgb3ZlckFjdGl2ZTogJ2d1LW92ZXItYWN0aXZlJyxcbiAgICAgICAgb3ZlckFjY2VwdHM6ICdndS1vdmVyLWFjY2VwdCcsXG4gICAgICAgIG92ZXJEZWNsaW5lczogJ2d1LW92ZXItZGVjbGluZSdcbiAgICAgIH0sXG4gICAgICBvID0geyAvLyBvcHRpb25zXG4gICAgICAgIGNsYXNzZXM6IGRlZmF1bHRDbGFzc2VzLFxuICAgICAgICBjb250YWluZXJzOiBmYWxzZSxcbiAgICAgICAgbW92ZXM6IGFsd2F5cyxcbiAgICAgICAgYWNjZXB0czogYWx3YXlzLFxuICAgICAgICBpc0NvbnRhaW5lcjogbmV2ZXIsXG4gICAgICAgIGNvcHk6IGZhbHNlLFxuICAgICAgICBkZWxheTogZmFsc2UsXG4gICAgICAgIGludmFsaWQ6IGludmFsaWRUYXJnZXQsXG4gICAgICAgIHJldmVydE9uU3BpbGw6IGZhbHNlLFxuICAgICAgICByZW1vdmVPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgZHJhZ092ZXJDbGFzc2VzOiBmYWxzZSxcbiAgICAgICAgbG9ja1g6IGZhbHNlLFxuICAgICAgICBsb2NrWTogZmFsc2UsXG4gICAgICAgIGJvdW5kaW5nQm94OiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiBmYWxzZVxuICAgICAgfTtcblxuICAgIGlmICghaXNFbGVtZW50KG8uYm91bmRpbmdCb3gpKSB7XG4gICAgICBvLmJvdW5kaW5nQm94ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmNsYXNzZXMpIHtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRlZmF1bHRDbGFzc2VzLCBvcHRpb25zLmNsYXNzZXMpO1xuICAgICAgYW5ndWxhci5leHRlbmQob3B0aW9ucy5jbGFzc2VzLCBkZWZhdWx0Q2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgYW5ndWxhci5leHRlbmQobywgb3B0aW9ucyk7XG5cbiAgICBpZiAoby5kZWxheSA9PT0gdHJ1ZSkge1xuICAgICAgby5kZWxheSA9IDMwMDtcbiAgICB9XG5cbiAgICAvLyBnZXQgaW5pdGlhbCBjb250YWluZXJzIGZyb20gb3B0aW9ucywgYXJndW1lbnQgb3IgZmFsbCBiYWNrIHRvIGVtcHR5IGFycmF5IChjb250YWluZXJzIGNhbiBiZSBhZGRlZCBsYXRlcilcbiAgICBpbml0aWFsQ29udGFpbmVycyA9IG8uY29udGFpbmVycyB8fCAoaW5pdGlhbENvbnRhaW5lcnMgPyBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpIDogW10pO1xuICAgIGlmKG8uY29udGFpbmVycyl7XG4gICAgICAvLyBtYWtlIGFycmF5IGZyb20gby5jb250YWluZXJzXG4gICAgICBpbml0aWFsQ29udGFpbmVycyA9IG1ha2VBcnJheShpbml0aWFsQ29udGFpbmVycyk7XG4gICAgfVxuICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgIG8uY29udGFpbmVyc01vZGVsID0gbWFrZUFycmF5KG8uY29udGFpbmVyc01vZGVsKTtcbiAgICB9XG5cbiAgICAvLyBmZWVkIG5hbWVzcGFjZWQgY29udGFpbmVycyBncm91cHMgYW5kIG9wdGlvbmFseSBzaGFkb3cgaXQgYnkgbW9kZWxzXG4gICAgaWYgKG8ubmFtZVNwYWNlKSB7XG4gICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8ubmFtZVNwYWNlKSkge1xuICAgICAgICAgIG8ubmFtZVNwYWNlID0gW28ubmFtZVNwYWNlXTtcbiAgICAgICB9XG4gICAgICAgZnVuY3Rpb24gcHJvY2VlZE5hbWVTcGFjZXMoX2NvbnRhaW5lcnMsIGNvbnRhaW5lcnNOYW1lU3BhY2VkLCBuYW1lU3BhY2UsIGluaXRpYWxDb250YWluZXJzKXtcbiAgICAgICAgaWYgKCFjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdKSB7XG4gICAgICAgICAgY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0sIGluaXRpYWxDb250YWluZXJzKTtcbiAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXSA9IGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV07XG4gICAgICAgfVxuICAgICAgby5uYW1lU3BhY2UuZm9yRWFjaChmdW5jdGlvbiBlYWNoTmFtZVNwYWNlIChuYW1lU3BhY2UpIHtcbiAgICAgICAgcHJvY2VlZE5hbWVTcGFjZXMoX2NvbnRhaW5lcnMsIGNvbnRhaW5lcnNOYW1lU3BhY2VkLCBuYW1lU3BhY2UsIGluaXRpYWxDb250YWluZXJzKTtcbiAgICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzTW9kZWwsIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwsIG5hbWVTcGFjZSwgby5jb250YWluZXJzTW9kZWwpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgX2lzQ29udGFpbmVyID0gaXNDb250YWluZXJOYW1lU3BhY2VkO1xuICAgIH1lbHNle1xuICAgICAgLy8gZGVmYXVsdCAobm90IHVzaW5nIG5hbWVTcGFjZXMpXG4gICAgICBfY29udGFpbmVycyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgX2lzQ29udGFpbmVyID0gaXNDb250YWluZXI7XG4gICAgICBpZihvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgX2NvbnRhaW5lcnNNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9yZWdpc3RlciBldmVudHNcbiAgICBldmVudHMoKTtcblxuICAgIHZhciBhcGkgPSB7XG4gICAgICBhZGRDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdhZGQnKSxcbiAgICAgIHJlbW92ZUNvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ3JlbW92ZScpLFxuICAgICAgY29udGFpbmVyczogX2NvbnRhaW5lcnMsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGNhbmNlbDogY2FuY2VsLFxuICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHJldHVybiBhcGk7XG5cbiAgICAvLyBtYWtlIGFycmF5IGZyb20gYXJyYXktbGlrZSBvYmplY3RzIG9yIGZyb20gc2luZ2xlIGVsZW1lbnRcbiAgICBmdW5jdGlvbiBtYWtlQXJyYXkoYWxsKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhbGwpKSB7XG4gICAgICAgIHJldHVybiBhbGw7XG4gICAgICB9XG4gICAgICBpZiAoYWxsLmxlbmd0aCkgeyAvLyBpcyBhcnJheS1saWtlXG4gICAgICAgIHZhciBpQWxsID0gYWxsLmxlbmd0aCxcbiAgICAgICAgICBuZXdBcnJheSA9IFtdO1xuICAgICAgICB3aGlsZSAoaUFsbCkge1xuICAgICAgICAgIGlBbGwtLTtcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGFsbFtpQWxsXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgfSBlbHNlIHsgLy8gaXMgb25lIGVsZW1lbnRcbiAgICAgICAgcmV0dXJuIFthbGxdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCBvciByZW1vdmUgY29udGFpbmVycyAtIGRlcHJlY2F0ZWRcbiAgICBmdW5jdGlvbiBtYW5pcHVsYXRlQ29udGFpbmVycyhvcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFkZE9yUmVtb3ZlKGFsbCkge1xuICAgICAgICB2YXIgY2hhbmdlcyA9IEFycmF5LmlzQXJyYXkoYWxsKSA/IGFsbCA6IG1ha2VBcnJheShhbGwpO1xuICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICAgICAgICBpZihvLm5hbWVTcGFjZSl7XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goby5uYW1lU3BhY2UsIGZ1bmN0aW9uIGFkZFJlbW92ZU5hbWVzcGFjZWQgKGNvbnRhaW5lcnMsIG5hbWVTcGFjZSkge1xuICAgICAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXS5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UuYWRkQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0uc3BsaWNlKF9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSwgMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UucmVtb3ZlQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmIChvcCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgICAgX2NvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5hZGRDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfY29udGFpbmVycy5zcGxpY2UoX2NvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLCAxKTtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UucmVtb3ZlQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ29udGFpbmVyKGVsKSB7XG4gICAgICBpZihhcGkuY29udGFpbmVycy5pbmRleE9mKGVsKSAhPT0gLTEgfHwgby5pc0NvbnRhaW5lcihlbCkpe1xuICAgICAgICBpZihvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW2FwaS5jb250YWluZXJzLmluZGV4T2YoZWwpXTtcbiAgICAgICAgICAvLyB0cmFjayBzY29wZXMgdG9vXG4gICAgICAgICAgX2xhc3RUYXJnZXRTY29wZSA9IF90YXJnZXRTY29wZTtcbiAgICAgICAgICBfdGFyZ2V0U2NvcGUgPSBhbmd1bGFyLmVsZW1lbnQoZWwpLnNjb3BlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDb250YWluZXJOYW1lU3BhY2VkKGVsKSB7XG4gICAgICB2YXIgbmFtZVNwYWNlO1xuICAgICAgZm9yIChuYW1lU3BhY2UgaW4gYXBpLmNvbnRhaW5lcnMpIHtcbiAgICAgICAgICBpZiAoYXBpLmNvbnRhaW5lcnMuaGFzT3duUHJvcGVydHkobmFtZVNwYWNlKSAmJiBhcGkuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YoZWwpICE9PSAtMSkge1xuICAgICAgICAgICAgICBpZihvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW25hbWVTcGFjZV1bYXBpLmNvbnRhaW5lcnNbbmFtZVNwYWNlXS5pbmRleE9mKGVsKV07XG4gICAgICAgICAgICAgICAgLy8gdHJhY2sgc2NvcGVzIHRvb1xuICAgICAgICAgICAgICAgIF9sYXN0VGFyZ2V0U2NvcGUgPSBfdGFyZ2V0U2NvcGU7XG4gICAgICAgICAgICAgICAgX3RhcmdldFNjb3BlID0gYW5ndWxhci5lbGVtZW50KGVsKS5zY29wZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKG8uaXNDb250YWluZXIoZWwpKXtcbiAgICAgICAgaWYoby5jb250YWluZXJzTW9kZWwgJiYgby5pc0NvbnRhaW5lck1vZGVsKXtcbiAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICBmdW5jdGlvbiB0cnlTY29wZSAoc2NvcGUpIHtcbiAgICAgICAgICAgIGlmKHNjb3BlICYmIHNjb3BlW28uaXNDb250YWluZXJNb2RlbF0pe1xuICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgICAgIF90YXJnZXRNb2RlbCA9IHNjb3BlW28uaXNDb250YWluZXJNb2RlbF07XG4gICAgICAgICAgICAgIF9sYXN0VGFyZ2V0U2NvcGUgPSBfdGFyZ2V0U2NvcGU7XG4gICAgICAgICAgICAgIF90YXJnZXRTY29wZSA9IGFuZ3VsYXIuZWxlbWVudChlbCkuc2NvcGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdHJ5U2NvcGUoYW5ndWxhci5lbGVtZW50KHRhcmdldCkuaXNvbGF0ZVNjb3BlKCkpO1xuICAgICAgICAgIGlmKCFmb3VuZCl7IC8vIGRvbnQgc2VhcmNoIGluIHNjb3BlIGlmIGFscmVhZHkgZm91bmQgaW4gaXNvbGF0ZVNjb3BlXG4gICAgICAgICAgICB0cnlTY29wZShhbmd1bGFyLmVsZW1lbnQodGFyZ2V0KS5zY29wZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZlbnRzKHJlbSkge1xuICAgICAgdmFyIG9wID0gcmVtID8gJ29mZicgOiAnb24nO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNldXAnLCByZWxlYXNlKTtcblxuICAgICAgaW5pdGlhbENvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiBhZGRNb3VzZURvd24gKGNvbnRhaW5lcikge1xuICAgICAgICByZWdFdmVudChjb250YWluZXIsICdvbicsICdtb3VzZWRvd24nLCBncmFiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBldmVudHModHJ1ZSk7XG4gICAgICBhcGkucmVtb3ZlQ29udGFpbmVyKF9jb250YWluZXJzKTtcbiAgICAgIHJlbGVhc2Uoe30pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdyYWIoZSkge1xuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgdmFyIGl0ZW0gPSBlLnRhcmdldDtcblxuICAgICAgLy8gZmlsdGVyIHNvbWUgb2RkIHNpdHVhdGlvbnNcbiAgICAgIGlmICgoZS53aGljaCAhPT0gMCAmJiBlLndoaWNoICE9PSAxKSB8fCBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybjsgLy8gd2Ugb25seSBjYXJlIGFib3V0IGhvbmVzdC10by1nb2QgbGVmdCBjbGlja3MgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiBkcmFnIGNhbiBzdGFydFxuICAgICAgaWYgKHN0YXJ0KGl0ZW0pICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXV0b21hdGljbHkgZGV0ZWN0IGRpcmVjdGlvbiBvZiBlbGVtZW50cyBpZiBub3Qgc2V0IGluIG9wdGlvbnNcbiAgICAgIGlmICghby5kaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudCxcbiAgICAgICAgICBwYXJlbnRIZWlnaHQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIHBhcmVudFdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIGNoaWxkSGVpZ2h0ID0gaXRlbS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgY2hpbGRXaWR0aCA9IGl0ZW0uY2xpZW50V2lkdGg7XG4gICAgICAgIG8uZGlyZWN0aW9uID0gcGFyZW50SGVpZ2h0IC8gY2hpbGRIZWlnaHQgPCBwYXJlbnRXaWR0aCAvIGNoaWxkV2lkdGggPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgfVxuXG4gICAgICAvLyBnZXQgaW5pdGlhbCBjb29yZGluYXRlcywgdXNlZCB0byByZW5kZXIgX21pcnJvciBmb3IgZmlyc3QgdGltZVxuICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldChfaXRlbSk7XG4gICAgICBfb2Zmc2V0WCA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICBfb2Zmc2V0WSA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LnRvcDtcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gbGltaXRpbmcgYXJlYSBvZiBfbWlycm9yIG1vdmVtZW50LCBnZXQgaW5pdGlhbCBjb29yZGluYXRlc1xuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgX29mZnNldFhyID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSkgLSBvZmZzZXQucmlnaHQ7XG4gICAgICAgIF9vZmZzZXRZYiA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LmJvdHRvbTtcbiAgICAgIH1cblxuICAgICAgLy8gZGVsYXllZCByZW5kZXJpbmdcbiAgICAgIGlmICh0eXBlb2Ygby5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgX3JlbmRlclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZW5kZXJNaXJyb3JBbmREcmFnKGUpO1xuICAgICAgICB9LCBvLmRlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlck1pcnJvckFuZERyYWcoZSk7XG4gICAgICB9XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXJyb3JBbmREcmFnKGUpIHtcbiAgICAgIHJlbmRlck1pcnJvckltYWdlKCk7XG4gICAgICAvLyBpbml0aWFsIHBvc2l0aW9uXG4gICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIF9vZmZzZXRYICsgJ3B4JztcbiAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSBfb2Zmc2V0WSArICdweCc7XG5cbiAgICAgIGRyYWcoZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdGFydChpdGVtKSB7XG4gICAgICB2YXIgaGFuZGxlID0gaXRlbTtcblxuICAgICAgaWYgKGFwaS5kcmFnZ2luZyAmJiBfbWlycm9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gYWxyZWFkeSBkcmFnZ2luZ1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzQ29udGFpbmVyKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gZG9uJ3QgZHJhZyBjb250YWluZXIgaXRzZWxmXG4gICAgICB9XG5cbiAgICAgIHdoaWxlICghX2lzQ29udGFpbmVyKGl0ZW0ucGFyZW50RWxlbWVudCkpIHtcbiAgICAgICAgLy8gYnJlYWsgbG9vcCBpZiB1c2VyIHRyaWVzIHRvIGRyYWcgaXRlbSB3aGljaCBpcyBjb25zaWRlcmVkIGludmFsaWQgaGFuZGxlXG4gICAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtID0gaXRlbS5wYXJlbnRFbGVtZW50OyAvLyBkcmFnIHRhcmdldCBzaG91bGQgYmUgaW1tZWRpYXRlIGNoaWxkIG9mIGNvbnRhaW5lclxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbGFzdCBpdGVtIGNoY2Vja1xuICAgICAgaWYgKG8uaW52YWxpZChpdGVtLCBoYW5kbGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRhaW5lciA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgIGlmICghby5tb3ZlcyhpdGVtLCBjb250YWluZXIsIGhhbmRsZSwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsKSkgeyAvLyBpcyBtb3ZhYmxlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZW5kKCk7XG5cbiAgICAgIC8vIHByZXBhcmUgbW9kZWxzIG9wZXJhdGlvbnNcbiAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGluaXRpYWxDb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSxcbiAgICAgICAgICBpdGVtSW5kZXggPSBkb21JbmRleE9mKGl0ZW0sIGNvbnRhaW5lcik7XG5cbiAgICAgICAgX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBpdGVtSW5kZXg7XG4gICAgICAgIF9zb3VyY2VNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsW2NvbnRhaW5lckluZGV4XTtcbiAgICAgICAgX2l0ZW1Nb2RlbCA9IF9zb3VyY2VNb2RlbFtpdGVtSW5kZXhdO1xuICAgICAgICBpZihvLmNvcHkpe1xuICAgICAgICAgIF9jb3B5TW9kZWwgPSBhbmd1bGFyLmNvcHkoX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGRyYWcnLF9pdGVtTW9kZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoby5jb3B5KSB7XG4gICAgICAgIF9jb3B5ID0gaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGFkZENsYXNzKF9jb3B5LCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnY2xvbmVkJywgX2NvcHksIGl0ZW0sIF9jb3B5TW9kZWwsIF9pdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGFzcyhpdGVtLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICB9XG5cbiAgICAgIF9zb3VyY2UgPSBjb250YWluZXI7XG4gICAgICBfaXRlbSA9IGl0ZW07XG4gICAgICBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBuZXh0RWwoaXRlbSk7XG5cbiAgICAgIGFwaS5kcmFnZ2luZyA9IHRydWU7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnJywgX2l0ZW0sIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZhbGlkVGFyZ2V0KGVsKSB7XG4gICAgICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0EnIHx8IGVsLnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQnKTtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdlbmQtZHJvcCcpO1xuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICAgIGRyb3AoaXRlbSwgaXRlbS5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWxlYXNlKGUpIHtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgX2NsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgX2NsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuXG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBlbGVtZW50QmVoaW5kQ3Vyc29yID0gZ2V0RWxlbWVudEJlaGluZFBvaW50KF9taXJyb3IsIF9jbGllbnRYLCBfY2xpZW50WSksXG4gICAgICAgIGRyb3BUYXJnZXQgPSBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuXG4gICAgICBpZiAoZHJvcFRhcmdldCAmJiAoby5jb3B5ID09PSBmYWxzZSB8fCBkcm9wVGFyZ2V0ICE9PSBfc291cmNlKSkge1xuICAgICAgICAvLyBmb3VuZCB2YWxpZCB0YXJnZXQgYW5kIChpcyBub3QgY29weSBjYXNlIG9yIHRhcmdldCBpcyBub3QgaW5pdGlhbCBjb250YWluZXIpXG4gICAgICAgIGRyb3AoaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgICB9IGVsc2UgaWYgKG8ucmVtb3ZlT25TcGlsbCkge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBhZnRlciByZWxlYXNlIHRoZXJlIGlzIG5vIGNvbnRhaW5lciBob3ZlcmVkXG4gICAgICBfdGFyZ2V0Q29udGFpbmVyID0gbnVsbDtcblxuICAgICAgLy8gcmVtb3ZlIGNsYXNzZXMgaWYgdXNlZFxuICAgICAgaWYgKG8uZHJhZ092ZXJDbGFzc2VzICYmIF9sYXN0T3ZlckVsZW0pIHtcbiAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgIF9sYXN0T3ZlckVsZW0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyb3AoaXRlbSwgdGFyZ2V0KSB7XG4gICAgICBpZiAoby5zY29wZSAmJiBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCwgX3RhcmdldE1vZGVsKTtcbiAgICAgIH0gZWxzZSBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcm9wJywgaXRlbSwgdGFyZ2V0LCBfc291cmNlLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCwgX3RhcmdldE1vZGVsKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmKCFvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgIGlmKHBhcmVudCl7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFyIGl0ZW1Nb2RlbCA9IF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbDtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nIGl0ZW0vY29weSBmcm9tIGN1cmVudCB0YXJnZXQnKTtcbiAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihpdGVtTW9kZWwpLDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KG8uY29weSA/ICdjYW5jZWwnIDogJ3JlbW92ZScsIGl0ZW0sIHBhcmVudCwgaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsKHJldmVydCkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJldmVydHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHJldmVydCA6IG8ucmV2ZXJ0T25TcGlsbCxcbiAgICAgICAgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGlmKCFvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9jb3B5KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSwgMSwgX2NvcHlNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQocGFyZW50KTtcbiAgICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiBvLmNvcHkgPT09IGZhbHNlICYmIHJldmVydHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JldmVydGluZyBpdGVtL2NvcHkgYmFjayB0byBzb3VyY2UnKTtcbiAgICAgICAgaWYoIW8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICBfc291cmNlLmluc2VydEJlZm9yZShpdGVtLCBfaW5pdGlhbFNpYmxpbmcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9zb3VyY2VNb2RlbDtcbiAgICAgICAgICAvLyB0cmFjayBzY29wZXMgdG9vXG4gICAgICAgICAgX2xhc3RUYXJnZXRTY29wZSA9IF90YXJnZXRTY29wZTtcbiAgICAgICAgICBfdGFyZ2V0U2NvcGUgPSBhbmd1bGFyLmVsZW1lbnQoZWwpLnNjb3BlKCk7XG4gICAgICAgICAgLy8gbW92ZSBiYWNrIHRvIGluaXRpYWwgcGxhY2VtZW50XG4gICAgICAgICAgbW92ZUluQ29udGFpbmVyc01vZGVsKF9pbml0aWFsSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlICYmIChpbml0aWFsIHx8IHJldmVydHMpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICByZW1vdmVNaXJyb3JJbWFnZSgpO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBybUNsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FuY2VsIHRpbWVyXG4gICAgICBpZiAoX3JlbmRlclRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfcmVuZGVyVGltZXIpO1xuICAgICAgfVxuXG4gICAgICBfc291cmNlID0gX2l0ZW0gPSBfY29weSA9IF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IF9zb3VyY2VNb2RlbCA9IG51bGw7XG4gICAgICBfaXRlbU1vZGVsID0gX2NvcHlNb2RlbCA9IF9pbml0aWFsSW5kZXggPSBfY3VycmVudEluZGV4ID0gX3JlbmRlclRpbWVyID0gbnVsbDtcblxuICAgICAgYXBpLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnZW5kJywgaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXMgaXRlbSBjdXJyZW50bHkgcGxhY2VkIGluIG9yaWdpbmFsIGNvbnRhaW5lciBhbmQgb3JpZ2luYWwgcG9zaXRpb24/XG4gICAgZnVuY3Rpb24gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcykge1xuICAgICAgdmFyIHNpYmxpbmcgPSBzIHx8IChfbWlycm9yID8gX2N1cnJlbnRTaWJsaW5nIDogbmV4dEVsKF9pdGVtIHx8IF9jb3B5KSk7XG4gICAgICByZXR1cm4gdGFyZ2V0ID09PSBfc291cmNlICYmIHNpYmxpbmcgPT09IF9pbml0aWFsU2libGluZztcbiAgICB9XG5cbiAgICAvLyBmaW5kIHZhbGlkIGRyb3AgY29udGFpbmVyXG4gICAgZnVuY3Rpb24gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnRCZWhpbmRDdXJzb3I7XG4gICAgICB3aGlsZSAodGFyZ2V0ICYmICFhY2NlcHRlZCgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcblxuICAgICAgZnVuY3Rpb24gYWNjZXB0ZWQoKSB7XG4gICAgICAgIHZhciBhY2NlcHRzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF9pc0NvbnRhaW5lcih0YXJnZXQpKSB7IC8vIGlzIGRyb3BwYWJsZT9cbiAgICAgICAgICAgX3RhcmdldENvbnRhaW5lciA9IHRhcmdldDtcblxuICAgICAgICAgIHZhciBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZCh0YXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKHRhcmdldCwgaW1tZWRpYXRlLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgICAgIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCByZWZlcmVuY2UpO1xuICAgICAgICAgIGFjY2VwdHMgPSBpbml0aWFsID8gdHJ1ZSA6IG8uYWNjZXB0cyhfaXRlbSwgdGFyZ2V0LCBfc291cmNlLCByZWZlcmVuY2UsIF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY2xhc3MgaWYgZWxlbWVudCBpcyBlbmFibGVkIGZvciBpdCBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IHRoZSBjbGFzc1xuICAgICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiZcbiAgICAgICAgICBoYXNDbGFzcyh0YXJnZXQsIG8uY2xhc3Nlcy5vdmVyQWN0aXZlKSAmJlxuICAgICAgICAgIHRhcmdldCAhPT0gX2xhc3RPdmVyRWxlbSkge1xuXG4gICAgICAgICAgaWYgKF9sYXN0T3ZlckVsZW0pIHsgLy8gY2xlYXIgZnJvbSBwcmV2aW91c1xuICAgICAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2xhc3RPdmVyQ2xhc3MgPSBhY2NlcHRzID8gby5jbGFzc2VzLm92ZXJBY2NlcHRzIDogby5jbGFzc2VzLm92ZXJEZWNsaW5lcztcbiAgICAgICAgICBhZGRDbGFzcyh0YXJnZXQsIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICBfbGFzdE92ZXJFbGVtID0gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY2VwdHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgICBpZiAoIV9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAvLyB1cGRhdGUgY29vcmRpbmF0ZXNcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gY291bnQgbWlycm9yIGNvb3JkaWF0ZXNcbiAgICAgIHZhciB4ID0gX2NsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IF9jbGllbnRZIC0gX29mZnNldFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgICAgb2Zmc2V0Qm94O1xuXG4gICAgICAvLyBmaWxsIGV4dHJhIHByb3BlcnRpZXMgaWYgYm91bmRpbmdCb3ggaXMgdXNlZFxuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgcGFnZVggPSBnZXRDb29yZCgncGFnZVgnLCBlKTtcbiAgICAgICAgcGFnZVkgPSBnZXRDb29yZCgncGFnZVknLCBlKTtcbiAgICAgICAgb2Zmc2V0Qm94ID0gZ2V0T2Zmc2V0KG8uYm91bmRpbmdCb3gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW8ubG9ja1kpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWCA+IG9mZnNldEJveC5sZWZ0ICsgX29mZnNldFggJiYgcGFnZVggPCBvZmZzZXRCb3gucmlnaHQgKyBfb2Zmc2V0WHIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoby5ib3VuZGluZ0JveCkgeyAvLyBjaGVjayBhZ2FpbiBpbiBjYXNlIHVzZXIgc2Nyb2xsZWQgdGhlIHZpZXdcbiAgICAgICAgICBpZiAocGFnZVggPCBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIChwYWdlWCAtIG9mZnNldEJveC5sZWZ0KSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX21pcnJvcldpZHRoIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LnJpZ2h0KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIW8ubG9ja1gpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWSA+IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSAmJiBwYWdlWSA8IG9mZnNldEJveC5ib3R0b20gKyBfb2Zmc2V0WWIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGNoZWNrIGFnYWluIGluIGNhc2UgdXNlciBzY3JvbGxlZCB0aGUgdmlld1xuICAgICAgICAgIGlmIChwYWdlWSA8IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSkge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIChwYWdlWSAtIG9mZnNldEJveC50b3ApICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9taXJyb3JIZWlnaHQgLSAocGFnZVkgLSBvZmZzZXRCb3guYm90dG9tKSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSk7XG5cbiAgICAgIC8vIGRvIG5vdCBjb3B5IGluIHNhbWUgY29udGFpbmVyXG4gICAgICBpZiAoZHJvcFRhcmdldCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVmZXJlbmNlLFxuICAgICAgICBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKTtcblxuICAgICAgLy8gcHJlcGFyZSBtb2RlbHMgb3BlcmF0aW9uc1xuICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICB2YXIgcmVmZXJlbmNlSW5kZXg7XG5cbiAgICAgICAgX2xhc3RUYXJnZXRTY29wZSA9IF90YXJnZXRTY29wZSB8fCBhbmd1bGFyLmVsZW1lbnQoX3NvdXJjZSkuc2NvcGUoKTtcbiAgICAgICAgX3RhcmdldFNjb3BlID0gYW5ndWxhci5lbGVtZW50KGRyb3BUYXJnZXQpLnNjb3BlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbW1lZGlhdGUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIGltbWVkaWF0ZSwgX2NsaWVudFgsIF9jbGllbnRZKTtcbiAgICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gZG9tSW5kZXhPZihyZWZlcmVuY2UsIGRyb3BUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdHJ1ZSAmJiAhby5jb3B5KSB7XG4gICAgICAgIC8vIHRoZSBjYXNlIHRoYXQgbWlycm9yIGlzIG5vdCBvdmVyIHZhbGlkIHRhcmdldCBhbmQgcmV2ZXJ0aW5nIGlzIG9uIGFuZCBjb3B5IGlzIG9mZlxuICAgICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICAgIGRyb3BUYXJnZXQgPSBfc291cmNlO1xuXG4gICAgICAgIC8vIGdldHRpbmcgbW9kZWwgaW50aXRpYWwgcHJvcGVydGllcyBpbnRvIGN1cnJlbnRcbiAgICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gX2luaXRpYWxJbmRleDtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9zb3VyY2VNb2RlbDtcbiAgICAgICAgICBfbGFzdFRhcmdldFNjb3BlID0gX3RhcmdldFNjb3BlO1xuICAgICAgICAgIF90YXJnZXRTY29wZSA9IGFuZ3VsYXIuZWxlbWVudChkcm9wVGFyZ2V0KS5zY29wZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGUgY2FzZSB0aGF0IG1pcnJvciBpcyBub3Qgb3ZlciB2YWxpZCB0YXJnZXQgYW5kIHJlbW92aW5nIGlzIG9uIG9yIGNvcHkgaXMgb25cbiAgICAgICAgaWYgKChvLmNvcHkgfHwgby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSAmJiBpdGVtLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhvLmNvcHkgPyAncmVtb3ZlIGl0ZW0gY29weSBmcm9tIGxhc3QgcG9zaXRpb24nIDogJ3JlbW92ZSBpdGVtIGZyb20gbGFzdCBwb3NpdGlvbicpXG4gICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gb3IgY29weSBvZiBpdGVtXG4gICAgICAgICAgaWYoIW8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgX3RhcmdldFNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8IHJlZmVyZW5jZSAhPT0gaXRlbSAmJiByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSkge1xuICAgICAgICAvLyBtb3ZpbmcgaXRlbS9jb3B5IHRvIG5ldyBjb250YWluZXIgZnJvbSBwcmV2aW91cyBvbmVcbiAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyBpdGVtL2NvcHkgdG8gbmV3IHBsYWNlbWVudCcpO1xuICAgICAgICBfY3VycmVudFNpYmxpbmcgPSByZWZlcmVuY2U7XG5cbiAgICAgICAgaWYoIW8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICBkcm9wVGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCByZWZlcmVuY2UpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwocmVmZXJlbmNlSW5kZXgpO1xuICAgICAgICAgIF9jdXJyZW50SW5kZXggPSByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnc2hhZG93JywgaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlSW5Db250YWluZXJzTW9kZWwgKHJlZmVyZW5jZUluZGV4KSB7XG4gICAgICBpZihfbGFzdFRhcmdldE1vZGVsID09PSBfdGFyZ2V0TW9kZWwpe1xuICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAwLCBfbGFzdFRhcmdldE1vZGVsLnNwbGljZShfY3VycmVudEluZGV4LCAxKVswXSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgX2xhc3RUYXJnZXRNb2RlbC5zcGxpY2UoX2N1cnJlbnRJbmRleCwgMSk7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgIF9sYXN0VGFyZ2V0U2NvcGUuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgICBfdGFyZ2V0U2NvcGUuJGFwcGx5KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsQ29udGFpbmVyKGUpe1xuICAgICAgaWYoX3RhcmdldENvbnRhaW5lcil7X3RhcmdldENvbnRhaW5lci5zY3JvbGxUb3AgKz0gZS5kZWx0YVl9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF9taXJyb3IgPSBfaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBfbWlycm9yV2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgX21pcnJvckhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgX21pcnJvci5zdHlsZS53aWR0aCA9IGdldFJlY3RXaWR0aChyZWN0KSArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLmhlaWdodCA9IGdldFJlY3RIZWlnaHQocmVjdCkgKyAncHgnO1xuICAgICAgcm1DbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICBhZGRDbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMubWlycm9yKTtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoX21pcnJvcik7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvbicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgIGFkZENsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29uJywgJ3doZWVsJywgc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9taXJyb3IsIF9pdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJtQ2xhc3MoYm9keSwgby5jbGFzc2VzLnVuc2VsZWN0YWJsZSk7XG4gICAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgJ29mZicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29mZicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICAgIF9taXJyb3IucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChfbWlycm9yKTtcbiAgICAgICAgX21pcnJvciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgdGFyZ2V0KSB7XG4gICAgICB2YXIgaW1tZWRpYXRlID0gdGFyZ2V0O1xuICAgICAgd2hpbGUgKGltbWVkaWF0ZSAhPT0gZHJvcFRhcmdldCAmJiBpbW1lZGlhdGUucGFyZW50RWxlbWVudCAhPT0gZHJvcFRhcmdldCkge1xuICAgICAgICBpbW1lZGlhdGUgPSBpbW1lZGlhdGUucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChpbW1lZGlhdGUgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbW1lZGlhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIHRhcmdldCwgeCwgeSkge1xuICAgICAgdmFyIGhvcml6b250YWwgPSBvLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIHJlZmVyZW5jZSA9IHRhcmdldCAhPT0gZHJvcFRhcmdldCA/IGluc2lkZSgpIDogb3V0c2lkZSgpO1xuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcblxuICAgICAgZnVuY3Rpb24gb3V0c2lkZSgpIHsgLy8gc2xvd2VyLCBidXQgYWJsZSB0byBmaWd1cmUgb3V0IGFueSBwb3NpdGlvblxuICAgICAgICB2YXIgbGVuID0gZHJvcFRhcmdldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgZWw7XG4gICAgICAgIHZhciByZWN0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBlbCA9IGRyb3BUYXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmIHJlY3QubGVmdCA+IHgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFob3Jpem9udGFsICYmIHJlY3QudG9wID4geSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaW5zaWRlKCkgeyAvLyBmYXN0ZXIsIGJ1dCBvbmx5IGF2YWlsYWJsZSBpZiBkcm9wcGVkIGluc2lkZSBhIGNoaWxkIGVsZW1lbnRcbiAgICAgICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeCA+IHJlY3QubGVmdCArIGdldFJlY3RXaWR0aChyZWN0KSAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHkgPiByZWN0LnRvcCArIGdldFJlY3RIZWlnaHQocmVjdCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzb2x2ZShhZnRlcikge1xuICAgICAgICByZXR1cm4gYWZ0ZXIgPyBuZXh0RWwodGFyZ2V0KSA6IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGwoc2Nyb2xsUHJvcCwgb2Zmc2V0UHJvcCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbb2Zmc2V0UHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbb2Zmc2V0UHJvcF07XG4gICAgICB9XG4gICAgICBpZiAoZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRFbGVtZW50W3Njcm9sbFByb3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJvZHlbc2Nyb2xsUHJvcF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoJ3Njcm9sbFRvcCcsICdwYWdlWU9mZnNldCcpLFxuICAgICAgICBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKCdzY3JvbGxMZWZ0JywgJ3BhZ2VYT2Zmc2V0Jyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCArIHNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20gKyBzY3JvbGxUb3BcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEJlaGluZFBvaW50KHBvaW50LCB4LCB5KSB7XG4gICAgICBpZiAoIXggJiYgIXkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgcCA9IHBvaW50IHx8IHt9LFxuICAgICAgICBzdGF0ZSA9IHAuY2xhc3NOYW1lLFxuICAgICAgICBlbDtcbiAgICAgIHAuY2xhc3NOYW1lICs9ICcgJyArIG8uY2xhc3Nlcy5oaWRlO1xuICAgICAgZWwgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgICAgcC5jbGFzc05hbWUgPSBzdGF0ZTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVnRXZlbnQoZWwsIG9wLCB0eXBlLCBmbikge1xuICAgIHZhciB0b3VjaCA9IHtcbiAgICAgICAgbW91c2V1cDogJ3RvdWNoZW5kJyxcbiAgICAgICAgbW91c2Vkb3duOiAndG91Y2hzdGFydCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ3RvdWNobW92ZSdcbiAgICAgIH0sXG4gICAgICAkZWwgPSBhbmd1bGFyLmVsZW1lbnQoZWwpO1xuXG4gICAgaWYodHlwZSAhPT0gJ3doZWVsJyl7JGVsW29wXSh0b3VjaFt0eXBlXSwgZm4pfTtcbiAgICAkZWxbb3BdKHR5cGUsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ldmVyKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsd2F5cygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRFbChlbCkge1xuICAgIHJldHVybiBlbC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbWFudWFsbHkoKTtcblxuICAgIGZ1bmN0aW9uIG1hbnVhbGx5KCkge1xuICAgICAgdmFyIHNpYmxpbmcgPSBlbDtcbiAgICAgIGRvIHtcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICB9IHdoaWxlIChzaWJsaW5nICYmIHNpYmxpbmcubm9kZVR5cGUgIT09IDEpO1xuICAgICAgcmV0dXJuIHNpYmxpbmc7XG4gICAgfVxuICB9XG5cbiAgLy9DYW5ub3QgdXNlIGFuZ3VsYXIuaXNFbGVtZW50IGJlY2F1c2Ugd2UgbmVlZCB0byBjaGVjayBwbGFpbiBkb20gZWxlbWVudCwgbm8galFsaXRlIHdyYXBwZWRcbiAgZnVuY3Rpb24gaXNFbGVtZW50KG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0JyA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxuICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTmFtZS5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSkgPT09IC0xKSB7XG4gICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJtQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGFuZ3VsYXIuZWxlbWVudChlbCkucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudEhvc3QoZSkge1xuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgICB2YXIgbWlzc01hcCA9IHtcbiAgICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgICB9O1xuICAgIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RbY29vcmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdFdpZHRoKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0SGVpZ2h0KHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgfHwgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9tSW5kZXhPZihjaGlsZCwgcGFyZW50KXtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhbmd1bGFyLmVsZW1lbnQocGFyZW50KS5jaGlsZHJlbigpLCBjaGlsZCk7XG4gIH1cblxufSk7XG4iXX0=

//# sourceMappingURL=dragular.js.map