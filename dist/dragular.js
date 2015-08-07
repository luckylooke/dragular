(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./dragularModule":2}],2:[function(require,module,exports){
/* global angular */
'use strict';



module.exports = angular.module('dragularModule', []);

({"dragularDirective":require("./dragularDirective.js"),"dragularService":require("./dragularService.js")});

},{"./dragularDirective.js":1,"./dragularService.js":3}],3:[function(require,module,exports){
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
          console.log('_copyModel');
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
      console.log(_lastTargetModel[_currentIndex]);
      if(_lastTargetModel === _targetModel){
        _targetModel.splice(referenceIndex, 0, _lastTargetModel.splice(_currentIndex, 1)[0]);
      }else{
        _lastTargetModel.splice(_currentIndex, 1);
        _targetModel.splice(referenceIndex, 0, _copyModel || _itemModel);
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

},{"./dragularModule":2}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9zcmMvZHJhZ3VsYXJEaXJlY3RpdmUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9zcmMvZHJhZ3VsYXJNb2R1bGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9zcmMvZHJhZ3VsYXJTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7Ozs7O0NBTUMsSUFBSSxpQkFBaUIsUUFBUTs7Ozs7O0FBTTlCLGVBQWUsVUFBVSxZQUFZLENBQUMsbUJBQW1CLFNBQVMsaUJBQWlCO0VBQ2pGLE9BQU87SUFDTCxVQUFVO0lBQ1YsTUFBTSxTQUFTLFFBQVEsTUFBTSxRQUFRO01BQ25DLGdCQUFnQixLQUFLLElBQUksT0FBTyxPQUFPLFlBQVksZ0JBQWdCLFFBQVEsT0FBTzs7TUFFbEYsU0FBUyxRQUFRLE1BQU07UUFDckIsSUFBSTtVQUNGLE9BQU8sS0FBSyxNQUFNO1VBQ2xCLE9BQU8sR0FBRztVQUNWLFFBQVEsSUFBSSxHQUFHLHlDQUF5QztVQUN4RCxPQUFPOzs7Ozs7QUFNakI7O0FDOUJBO0FBQ0E7Ozs7QUFJQSxPQUFPLFVBQVUsUUFBUSxPQUFPLGtCQUFrQjs7QUFFbEQsQ0FBQyxDQUFDLG9CQUFvQixRQUFRLDBCQUEwQixrQkFBa0IsUUFBUTtBQUNsRjs7QUNSQTtBQUNBOzs7Ozs7O0FBT0EsSUFBSSxpQkFBaUIsUUFBUTs7Ozs7O0FBTTdCLGVBQWUsUUFBUSxtQkFBbUIsU0FBUyxVQUFVOztFQUUzRCxJQUFJLHVCQUF1QjtJQUN6Qiw0QkFBNEI7TUFDMUI7O0VBRUosT0FBTyxTQUFTLG1C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dkIsSUFBSSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsUUFBUTtNQUM3QyxPQUFPLEVBQUUsY0FBYzs7SUFFekIsSUFBSSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsUUFBUTtNQUMvQyxPQUFPLEVBQUUsZUFBZTs7SUFFMUIsT0FBTzs7O0VBR1QsU0FBUyxTQUFTLE9BQU8sR0FBRztJQUMxQixJQUFJLE9BQU8sYUFBYTtJQUN4QixJQUFJLFVBQVU7TUFDWixPQUFPO01BQ1AsT0FBTzs7SUFFVCxJQUFJLFNBQVMsV0FBVyxFQUFFLFNBQVMsU0FBUyxRQUFRLFVBQVUsTUFBTTtNQUNsRSxRQUFRLFFBQVE7O0lBRWxCLE9BQU8sS0FBSzs7O0VBR2QsU0FBUyxhQUFhLE1BQU07SUFDMUIsT0FBTyxLQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUs7OztFQUcxQyxTQUFTLGNBQWMsTUFBTTtJQUMzQixPQUFPLEtBQUssV0FBVyxLQUFLLFNBQVMsS0FBSzs7O0VBRzVDLFNBQVMsV0FBVyxPQUFPLE9BQU87SUFDaEMsT0FBTyxNQUFNLFVBQVUsUUFBUSxLQUFLLFFBQVEsUUFBUSxRQUFRLFlBQVk7Ozs7QUFJNUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBkcmFndWxhciBEaXJlY3RpdmUgYnkgTHVja3lsb29rZSBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZS9kcmFndWxhclxuICogQW5ndWxhciB2ZXJzaW9uIG9mIGRyYWd1bGEgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGFcbiAqL1xuIHZhciBkcmFndWxhck1vZHVsZSA9IHJlcXVpcmUoJy4vZHJhZ3VsYXJNb2R1bGUnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZHJhZ3VsYXJNb2R1bGUuZGlyZWN0aXZlKCdkcmFndWxhcicsIFsnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24oZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbigkc2NvcGUsIGlFbG0sIGlBdHRycykge1xuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGlFbG1bMF0sICRzY29wZVtpQXR0cnMuZHJhZ3VsYXIgfHwgJ3VuZGVmaW5lZCddIHx8IHRyeUpzb24oaUF0dHJzLmRyYWd1bGFyKSk7XG5cbiAgICAgIGZ1bmN0aW9uIHRyeUpzb24oanNvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSwgJ0RyYWd1bGFyOiBub3QgdmFsaWQgSlNPTiBmb3Igb3B0aW9ucyEnLCBpRWxtKTtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufV0pXG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnZHJhZ3VsYXJNb2R1bGUnLCBbXSk7XG5cbih7XCJkcmFndWxhckRpcmVjdGl2ZVwiOnJlcXVpcmUoXCIuL2RyYWd1bGFyRGlyZWN0aXZlLmpzXCIpLFwiZHJhZ3VsYXJTZXJ2aWNlXCI6cmVxdWlyZShcIi4vZHJhZ3VsYXJTZXJ2aWNlLmpzXCIpfSk7XG4iLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGRyYWd1bGFyIE1vZHVsZSBhbmQgU2VydmljZSBieSBMdWNreWxvb2tlIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG5cbnZhciBkcmFndWxhck1vZHVsZSA9IHJlcXVpcmUoJy4vZHJhZ3VsYXJNb2R1bGUnKTtcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cblxuZHJhZ3VsYXJNb2R1bGUuZmFjdG9yeSgnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gZHJhZ3VsYSgpIHtcblxuICB2YXIgY29udGFpbmVyc05hbWVTcGFjZWQgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVyc1xuICAgIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVycyBtb2RlbHNcbiAgICAgIF9taXJyb3I7IC8vIG1pcnJvciBpbWFnZVxuXG4gIHJldHVybiBmdW5jdGlvbihpbml0aWFsQ29udGFpbmVycywgb3B0aW9ucykge1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgIUFycmF5LmlzQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpICYmICFhbmd1bGFyLmlzRWxlbWVudChpbml0aWFsQ29udGFpbmVycykgJiYgIWluaXRpYWxDb250YWluZXJzWzBdKSB7XG4gICAgICAvLyB0aGVuIGNvbnRhaW5lcnMgYXJlIG5vdCBwcm92aWRlZCwgb25seSBvcHRpb25zXG4gICAgICBvcHRpb25zID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgICBpbml0aWFsQ29udGFpbmVycyA9IFtdO1xuICAgIH1cblxuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIF9zb3VyY2UsIC8vIHNvdXJjZSBjb250YWluZXJcbiAgICAgIF9pdGVtLCAvLyBpdGVtIGJlaW5nIGRyYWdnZWRcbiAgICAgIF9zb3VyY2VNb2RlbCwgLy8gc291cmNlIGNvbnRhaW5lciBtb2RlbFxuICAgICAgX2l0ZW1Nb2RlbCwgLy8gaXRlbS1tb2RlbCBiZWluZyBkcmFnZ2VkXG4gICAgICBfdGFyZ2V0TW9kZWwsIC8vIHRhcmdldCBjb250YWluZXIgbW9kZWxcbiAgICAgIF9sYXN0VGFyZ2V0TW9kZWwsIC8vIGxhc3QgdGFyZ2V0IGNvbnRhaW5lciBtb2RlbFxuICAgICAgX3RhcmdldFNjb3BlLCAvLyB0YXJnZXQgbW9kZWwgc2NvcGUgKHVzZWQgZm9yICRhcHBseS1pbmcgY2hhbmdlcyBpbiBtb2RlbClcbiAgICAgIF9sYXN0VGFyZ2V0U2NvcGUsIC8vIHRhcmdldCBtb2RlbCBzY29wZSAodXNlZCBmb3IgJGFwcGx5LWluZyBjaGFuZ2VzIGluIG1vZGVsKVxuICAgICAgX29mZnNldFgsIC8vIHJlZmVyZW5jZSB4XG4gICAgICBfb2Zmc2V0WSwgLy8gcmVmZXJlbmNlIHlcbiAgICAgIF9vZmZzZXRYciwgLy8gcmVmZXJlbmNlIHggcmlnaHQgZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9vZmZzZXRZYiwgLy8gcmVmZXJlbmNlIHkgYm90dG9tIGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfY2xpZW50WCwgLy8gY2FjaGUgY2xpZW50IHgsIGluaXQgYXQgZ3JhYiwgdXBkYXRlIGF0IGRyYWdcbiAgICAgIF9jbGllbnRZLCAvLyBjYWNoZSBjbGllbnQgeSwgaW5pdCBhdCBncmFiLCB1cGRhdGUgYXQgZHJhZ1xuICAgICAgX21pcnJvcldpZHRoLCAvLyBtaXJyb3Igd2lkdGggZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9taXJyb3JIZWlnaHQsIC8vIG1pcnJvciBoZWlnaHQgZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9pbml0aWFsU2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgd2hlbiBncmFiYmVkXG4gICAgICBfY3VycmVudFNpYmxpbmcsIC8vIHJlZmVyZW5jZSBzaWJsaW5nIG5vd1xuICAgICAgX2luaXRpYWxJbmRleCwgLy8gcmVmZXJlbmNlIG1vZGVsIGluZGV4IHdoZW4gZ3JhYmJlZFxuICAgICAgX2N1cnJlbnRJbmRleCwgLy8gcmVmZXJlbmNlIG1vZGVsIGluZGV4IG5vd1xuICAgICAgX2xhc3RPdmVyRWxlbSwgLy8gbGFzdCBlbGVtZW50IGJlaGluZCB0aGUgY3Vyc29yIChkcmFnT3ZlckNsYXNzZXMgZmVhdHVyZSlcbiAgICAgIF9sYXN0T3ZlckNsYXNzLCAvLyBsYXN0IG92ZXJDbGFzcyB1c2VkIChkcmFnT3ZlckNsYXNzZXMgZmVhdHVyZSlcbiAgICAgIF9jb3B5LCAvLyBpdGVtIHVzZWQgZm9yIGNvcHlpbmdcbiAgICAgIF9jb3B5TW9kZWwsIC8vIGl0ZW0tbW9kZWwgdXNlZCBmb3IgY29weWluZ1xuICAgICAgX2NvbnRhaW5lcnMgPSB7fSwgLy8gY29udGFpbmVycyBtYW5hZ2VkIGJ5IHRoZSBkcmFrZVxuICAgICAgX2NvbnRhaW5lcnNNb2RlbCA9IHt9LCAvLyBjb250YWluZXJzIG1vZGVsXG4gICAgICBfcmVuZGVyVGltZXIsIC8vIHRpbWVyIGZvciBzZXRUaW1lb3V0IHJlbmRlck1pcnJvckltYWdlXG4gICAgICBfaXNDb250YWluZXIsIC8vIGludGVybmFsIGlzQ29udGFpbmVyXG4gICAgICBfdGFyZ2V0Q29udGFpbmVyLCAvLyBkcm9wcGFibGUgY29udGFpbmVyIHVuZGVyIGRyYWcgaXRlbVxuICAgICAgZGVmYXVsdENsYXNzZXMgPSB7XG4gICAgICAgIG1pcnJvcjogJ2d1LW1pcnJvcicsXG4gICAgICAgIGhpZGU6ICdndS1oaWRlJyxcbiAgICAgICAgdW5zZWxlY3RhYmxlOiAnZ3UtdW5zZWxlY3RhYmxlJyxcbiAgICAgICAgdHJhbnNpdDogJ2d1LXRyYW5zaXQnLFxuICAgICAgICBvdmVyQWN0aXZlOiAnZ3Utb3Zlci1hY3RpdmUnLFxuICAgICAgICBvdmVyQWNjZXB0czogJ2d1LW92ZXItYWNjZXB0JyxcbiAgICAgICAgb3ZlckRlY2xpbmVzOiAnZ3Utb3Zlci1kZWNsaW5lJ1xuICAgICAgfSxcbiAgICAgIG8gPSB7IC8vIG9wdGlvbnNcbiAgICAgICAgY2xhc3NlczogZGVmYXVsdENsYXNzZXMsXG4gICAgICAgIGNvbnRhaW5lcnM6IGZhbHNlLFxuICAgICAgICBtb3ZlczogYWx3YXlzLFxuICAgICAgICBhY2NlcHRzOiBhbHdheXMsXG4gICAgICAgIGlzQ29udGFpbmVyOiBuZXZlcixcbiAgICAgICAgY29weTogZmFsc2UsXG4gICAgICAgIGRlbGF5OiBmYWxzZSxcbiAgICAgICAgaW52YWxpZDogaW52YWxpZFRhcmdldCxcbiAgICAgICAgcmV2ZXJ0T25TcGlsbDogZmFsc2UsXG4gICAgICAgIHJlbW92ZU9uU3BpbGw6IGZhbHNlLFxuICAgICAgICBkcmFnT3ZlckNsYXNzZXM6IGZhbHNlLFxuICAgICAgICBsb2NrWDogZmFsc2UsXG4gICAgICAgIGxvY2tZOiBmYWxzZSxcbiAgICAgICAgYm91bmRpbmdCb3g6IGZhbHNlLFxuICAgICAgICBjb250YWluZXJzTW9kZWw6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgaWYgKCFpc0VsZW1lbnQoby5ib3VuZGluZ0JveCkpIHtcbiAgICAgIG8uYm91bmRpbmdCb3ggPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuY2xhc3Nlcykge1xuICAgICAgYW5ndWxhci5leHRlbmQoZGVmYXVsdENsYXNzZXMsIG9wdGlvbnMuY2xhc3Nlcyk7XG4gICAgICBhbmd1bGFyLmV4dGVuZChvcHRpb25zLmNsYXNzZXMsIGRlZmF1bHRDbGFzc2VzKTtcbiAgICB9XG5cbiAgICBhbmd1bGFyLmV4dGVuZChvLCBvcHRpb25zKTtcblxuICAgIGlmIChvLmRlbGF5ID09PSB0cnVlKSB7XG4gICAgICBvLmRlbGF5ID0gMzAwO1xuICAgIH1cblxuICAgIC8vIGdldCBpbml0aWFsIGNvbnRhaW5lcnMgZnJvbSBvcHRpb25zLCBhcmd1bWVudCBvciBmYWxsIGJhY2sgdG8gZW1wdHkgYXJyYXkgKGNvbnRhaW5lcnMgY2FuIGJlIGFkZGVkIGxhdGVyKVxuICAgIGluaXRpYWxDb250YWluZXJzID0gby5jb250YWluZXJzIHx8IChpbml0aWFsQ29udGFpbmVycyA/IG1ha2VBcnJheShpbml0aWFsQ29udGFpbmVycykgOiBbXSk7XG4gICAgaWYoby5jb250YWluZXJzKXtcbiAgICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBvLmNvbnRhaW5lcnNcbiAgICAgIGluaXRpYWxDb250YWluZXJzID0gbWFrZUFycmF5KGluaXRpYWxDb250YWluZXJzKTtcbiAgICB9XG4gICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgby5jb250YWluZXJzTW9kZWwgPSBtYWtlQXJyYXkoby5jb250YWluZXJzTW9kZWwpO1xuICAgIH1cblxuICAgIC8vIGZlZWQgbmFtZXNwYWNlZCBjb250YWluZXJzIGdyb3VwcyBhbmQgb3B0aW9uYWx5IHNoYWRvdyBpdCBieSBtb2RlbHNcbiAgICBpZiAoby5uYW1lU3BhY2UpIHtcbiAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoby5uYW1lU3BhY2UpKSB7XG4gICAgICAgICAgby5uYW1lU3BhY2UgPSBbby5uYW1lU3BhY2VdO1xuICAgICAgIH1cbiAgICAgICBmdW5jdGlvbiBwcm9jZWVkTmFtZVNwYWNlcyhfY29udGFpbmVycywgY29udGFpbmVyc05hbWVTcGFjZWQsIG5hbWVTcGFjZSwgaW5pdGlhbENvbnRhaW5lcnMpe1xuICAgICAgICBpZiAoIWNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0pIHtcbiAgICAgICAgICBjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSwgaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgICAgICBfY29udGFpbmVyc1tuYW1lU3BhY2VdID0gY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXTtcbiAgICAgICB9XG4gICAgICBvLm5hbWVTcGFjZS5mb3JFYWNoKGZ1bmN0aW9uIGVhY2hOYW1lU3BhY2UgKG5hbWVTcGFjZSkge1xuICAgICAgICBwcm9jZWVkTmFtZVNwYWNlcyhfY29udGFpbmVycywgY29udGFpbmVyc05hbWVTcGFjZWQsIG5hbWVTcGFjZSwgaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgICAgICBpZihvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgcHJvY2VlZE5hbWVTcGFjZXMoX2NvbnRhaW5lcnNNb2RlbCwgY29udGFpbmVyc05hbWVTcGFjZWRNb2RlbCwgbmFtZVNwYWNlLCBvLmNvbnRhaW5lcnNNb2RlbClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBfaXNDb250YWluZXIgPSBpc0NvbnRhaW5lck5hbWVTcGFjZWQ7XG4gICAgfWVsc2V7XG4gICAgICAvLyBkZWZhdWx0IChub3QgdXNpbmcgbmFtZVNwYWNlcylcbiAgICAgIF9jb250YWluZXJzID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgICBfaXNDb250YWluZXIgPSBpc0NvbnRhaW5lcjtcbiAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICBfY29udGFpbmVyc01vZGVsID0gby5jb250YWluZXJzTW9kZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3JlZ2lzdGVyIGV2ZW50c1xuICAgIGV2ZW50cygpO1xuXG4gICAgdmFyIGFwaSA9IHtcbiAgICAgIGFkZENvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ2FkZCcpLFxuICAgICAgcmVtb3ZlQ29udGFpbmVyOiBtYW5pcHVsYXRlQ29udGFpbmVycygncmVtb3ZlJyksXG4gICAgICBjb250YWluZXJzOiBfY29udGFpbmVycyxcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZW5kLFxuICAgICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICBkcmFnZ2luZzogZmFsc2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFwaTtcblxuICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBhcnJheS1saWtlIG9iamVjdHMgb3IgZnJvbSBzaW5nbGUgZWxlbWVudFxuICAgIGZ1bmN0aW9uIG1ha2VBcnJheShhbGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFsbCkpIHtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICAgIH1cbiAgICAgIGlmIChhbGwubGVuZ3RoKSB7IC8vIGlzIGFycmF5LWxpa2VcbiAgICAgICAgdmFyIGlBbGwgPSBhbGwubGVuZ3RoLFxuICAgICAgICAgIG5ld0FycmF5ID0gW107XG4gICAgICAgIHdoaWxlIChpQWxsKSB7XG4gICAgICAgICAgaUFsbC0tO1xuICAgICAgICAgIG5ld0FycmF5LnB1c2goYWxsW2lBbGxdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICB9IGVsc2UgeyAvLyBpcyBvbmUgZWxlbWVudFxuICAgICAgICByZXR1cm4gW2FsbF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIG9yIHJlbW92ZSBjb250YWluZXJzIC0gZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIG1hbmlwdWxhdGVDb250YWluZXJzKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYWRkT3JSZW1vdmUoYWxsKSB7XG4gICAgICAgIHZhciBjaGFuZ2VzID0gQXJyYXkuaXNBcnJheShhbGwpID8gYWxsIDogbWFrZUFycmF5KGFsbCk7XG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgICAgICAgIGlmKG8ubmFtZVNwYWNlKXtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChvLm5hbWVTcGFjZSwgZnVuY3Rpb24gYWRkUmVtb3ZlTmFtZXNwYWNlZCAoY29udGFpbmVycywgbmFtZVNwYWNlKSB7XG4gICAgICAgICAgICAgIGlmIChvcCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgICAgICBfY29udGFpbmVyc1tuYW1lU3BhY2VdLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5hZGRDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXS5zcGxpY2UoX2NvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLCAxKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5yZW1vdmVDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYgKG9wID09PSAnYWRkJykge1xuICAgICAgICAgICAgICBfY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLmFkZENvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9jb250YWluZXJzLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5yZW1vdmVDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDb250YWluZXIoZWwpIHtcbiAgICAgIGlmKGFwaS5jb250YWluZXJzLmluZGV4T2YoZWwpICE9PSAtMSB8fCBvLmlzQ29udGFpbmVyKGVsKSl7XG4gICAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9jb250YWluZXJzTW9kZWxbYXBpLmNvbnRhaW5lcnMuaW5kZXhPZihlbCldO1xuICAgICAgICAgIC8vIHRyYWNrIHNjb3BlcyB0b29cbiAgICAgICAgICBfbGFzdFRhcmdldFNjb3BlID0gX3RhcmdldFNjb3BlO1xuICAgICAgICAgIF90YXJnZXRTY29wZSA9IGFuZ3VsYXIuZWxlbWVudChlbCkuc2NvcGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NvbnRhaW5lck5hbWVTcGFjZWQoZWwpIHtcbiAgICAgIHZhciBuYW1lU3BhY2U7XG4gICAgICBmb3IgKG5hbWVTcGFjZSBpbiBhcGkuY29udGFpbmVycykge1xuICAgICAgICAgIGlmIChhcGkuY29udGFpbmVycy5oYXNPd25Qcm9wZXJ0eShuYW1lU3BhY2UpICYmIGFwaS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZihlbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9jb250YWluZXJzTW9kZWxbbmFtZVNwYWNlXVthcGkuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YoZWwpXTtcbiAgICAgICAgICAgICAgICAvLyB0cmFjayBzY29wZXMgdG9vXG4gICAgICAgICAgICAgICAgX2xhc3RUYXJnZXRTY29wZSA9IF90YXJnZXRTY29wZTtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0U2NvcGUgPSBhbmd1bGFyLmVsZW1lbnQoZWwpLnNjb3BlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoby5pc0NvbnRhaW5lcihlbCkpe1xuICAgICAgICBpZihvLmNvbnRhaW5lcnNNb2RlbCAmJiBvLmlzQ29udGFpbmVyTW9kZWwpe1xuICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIGZ1bmN0aW9uIHRyeVNjb3BlIChzY29wZSkge1xuICAgICAgICAgICAgaWYoc2NvcGUgJiYgc2NvcGVbby5pc0NvbnRhaW5lck1vZGVsXSl7XG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICAgICAgX3RhcmdldE1vZGVsID0gc2NvcGVbby5pc0NvbnRhaW5lck1vZGVsXTtcbiAgICAgICAgICAgICAgX2xhc3RUYXJnZXRTY29wZSA9IF90YXJnZXRTY29wZTtcbiAgICAgICAgICAgICAgX3RhcmdldFNjb3BlID0gYW5ndWxhci5lbGVtZW50KGVsKS5zY29wZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0cnlTY29wZShhbmd1bGFyLmVsZW1lbnQodGFyZ2V0KS5pc29sYXRlU2NvcGUoKSk7XG4gICAgICAgICAgaWYoIWZvdW5kKXsgLy8gZG9udCBzZWFyY2ggaW4gc2NvcGUgaWYgYWxyZWFkeSBmb3VuZCBpbiBpc29sYXRlU2NvcGVcbiAgICAgICAgICAgIHRyeVNjb3BlKGFuZ3VsYXIuZWxlbWVudCh0YXJnZXQpLnNjb3BlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldmVudHMocmVtKSB7XG4gICAgICB2YXIgb3AgPSByZW0gPyAnb2ZmJyA6ICdvbic7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsIG9wLCAnbW91c2V1cCcsIHJlbGVhc2UpO1xuXG4gICAgICBpbml0aWFsQ29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIGFkZE1vdXNlRG93biAoY29udGFpbmVyKSB7XG4gICAgICAgIHJlZ0V2ZW50KGNvbnRhaW5lciwgJ29uJywgJ21vdXNlZG93bicsIGdyYWIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGV2ZW50cyh0cnVlKTtcbiAgICAgIGFwaS5yZW1vdmVDb250YWluZXIoX2NvbnRhaW5lcnMpO1xuICAgICAgcmVsZWFzZSh7fSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ3JhYihlKSB7XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICB2YXIgaXRlbSA9IGUudGFyZ2V0O1xuXG4gICAgICAvLyBmaWx0ZXIgc29tZSBvZGQgc2l0dWF0aW9uc1xuICAgICAgaWYgKChlLndoaWNoICE9PSAwICYmIGUud2hpY2ggIT09IDEpIHx8IGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuOyAvLyB3ZSBvbmx5IGNhcmUgYWJvdXQgaG9uZXN0LXRvLWdvZCBsZWZ0IGNsaWNrcyBhbmQgdG91Y2ggZXZlbnRzXG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGRyYWcgY2FuIHN0YXJ0XG4gICAgICBpZiAoc3RhcnQoaXRlbSkgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdXRvbWF0aWNseSBkZXRlY3QgZGlyZWN0aW9uIG9mIGVsZW1lbnRzIGlmIG5vdCBzZXQgaW4gb3B0aW9uc1xuICAgICAgaWYgKCFvLmRpcmVjdGlvbikge1xuICAgICAgICB2YXIgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgIHBhcmVudEhlaWdodCA9IHBhcmVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgcGFyZW50V2lkdGggPSBwYXJlbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgY2hpbGRIZWlnaHQgPSBpdGVtLmNsaWVudEhlaWdodCxcbiAgICAgICAgICBjaGlsZFdpZHRoID0gaXRlbS5jbGllbnRXaWR0aDtcbiAgICAgICAgby5kaXJlY3Rpb24gPSBwYXJlbnRIZWlnaHQgLyBjaGlsZEhlaWdodCA8IHBhcmVudFdpZHRoIC8gY2hpbGRXaWR0aCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICB9XG5cbiAgICAgIC8vIGdldCBpbml0aWFsIGNvb3JkaW5hdGVzLCB1c2VkIHRvIHJlbmRlciBfbWlycm9yIGZvciBmaXJzdCB0aW1lXG4gICAgICB2YXIgb2Zmc2V0ID0gZ2V0T2Zmc2V0KF9pdGVtKTtcbiAgICAgIF9vZmZzZXRYID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSkgLSBvZmZzZXQubGVmdDtcbiAgICAgIF9vZmZzZXRZID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSkgLSBvZmZzZXQudG9wO1xuICAgICAgX2NsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgX2NsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuXG4gICAgICAvLyBsaW1pdGluZyBhcmVhIG9mIF9taXJyb3IgbW92ZW1lbnQsIGdldCBpbml0aWFsIGNvb3JkaW5hdGVzXG4gICAgICBpZiAoby5ib3VuZGluZ0JveCkge1xuICAgICAgICBfb2Zmc2V0WHIgPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5yaWdodDtcbiAgICAgICAgX29mZnNldFliID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSkgLSBvZmZzZXQuYm90dG9tO1xuICAgICAgfVxuXG4gICAgICAvLyBkZWxheWVkIHJlbmRlcmluZ1xuICAgICAgaWYgKHR5cGVvZiBvLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBfcmVuZGVyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlbmRlck1pcnJvckFuZERyYWcoZSk7XG4gICAgICAgIH0sIG8uZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckFuZERyYWcoZSkge1xuICAgICAgcmVuZGVyTWlycm9ySW1hZ2UoKTtcbiAgICAgIC8vIGluaXRpYWwgcG9zaXRpb25cbiAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX29mZnNldFggKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9vZmZzZXRZICsgJ3B4JztcblxuICAgICAgZHJhZyhlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGl0ZW0pIHtcbiAgICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuXG4gICAgICBpZiAoYXBpLmRyYWdnaW5nICYmIF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBhbHJlYWR5IGRyYWdnaW5nXG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBkb24ndCBkcmFnIGNvbnRhaW5lciBpdHNlbGZcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKCFfaXNDb250YWluZXIoaXRlbS5wYXJlbnRFbGVtZW50KSkge1xuICAgICAgICAvLyBicmVhayBsb29wIGlmIHVzZXIgdHJpZXMgdG8gZHJhZyBpdGVtIHdoaWNoIGlzIGNvbnNpZGVyZWQgaW52YWxpZCBoYW5kbGVcbiAgICAgICAgaWYgKG8uaW52YWxpZChpdGVtLCBoYW5kbGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudEVsZW1lbnQ7IC8vIGRyYWcgdGFyZ2V0IHNob3VsZCBiZSBpbW1lZGlhdGUgY2hpbGQgb2YgY29udGFpbmVyXG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBsYXN0IGl0ZW0gY2hjZWNrXG4gICAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVyID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKCFvLm1vdmVzKGl0ZW0sIGNvbnRhaW5lciwgaGFuZGxlLCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwpKSB7IC8vIGlzIG1vdmFibGVcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBlbmQoKTtcblxuICAgICAgLy8gcHJlcGFyZSBtb2RlbHMgb3BlcmF0aW9uc1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gaW5pdGlhbENvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLFxuICAgICAgICAgIGl0ZW1JbmRleCA9IGRvbUluZGV4T2YoaXRlbSwgY29udGFpbmVyKTtcblxuICAgICAgICBfaW5pdGlhbEluZGV4ID0gX2N1cnJlbnRJbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgICAgX3NvdXJjZU1vZGVsID0gby5jb250YWluZXJzTW9kZWxbY29udGFpbmVySW5kZXhdO1xuICAgICAgICBfaXRlbU1vZGVsID0gX3NvdXJjZU1vZGVsW2l0ZW1JbmRleF07XG4gICAgICAgIGlmKG8uY29weSl7XG4gICAgICAgICAgX2NvcHlNb2RlbCA9IGFuZ3VsYXIuY29weShfaXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcgZHJhZycsX2l0ZW1Nb2RlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvLmNvcHkpIHtcbiAgICAgICAgX2NvcHkgPSBpdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgYWRkQ2xhc3MoX2NvcHksIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfY29weSwgaXRlbSwgX2NvcHlNb2RlbCwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZENsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIH1cblxuICAgICAgX3NvdXJjZSA9IGNvbnRhaW5lcjtcbiAgICAgIF9pdGVtID0gaXRlbTtcbiAgICAgIF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IG5leHRFbChpdGVtKTtcblxuICAgICAgYXBpLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2RyYWcnLCBfaXRlbSwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludmFsaWRUYXJnZXQoZWwpIHtcbiAgICAgIHJldHVybiBlbC50YWdOYW1lID09PSAnQScgfHwgZWwudGFnTmFtZSA9PT0gJ0JVVFRPTic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kKCkge1xuICAgICAgY29uc29sZS5sb2coJ2VuZCcpO1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2VuZC1kcm9wJyk7XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgICAgZHJvcChpdGVtLCBpdGVtLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGVhc2UoZSkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSk7XG5cbiAgICAgIGlmIChkcm9wVGFyZ2V0ICYmIChvLmNvcHkgPT09IGZhbHNlIHx8IGRyb3BUYXJnZXQgIT09IF9zb3VyY2UpKSB7XG4gICAgICAgIC8vIGZvdW5kIHZhbGlkIHRhcmdldCBhbmQgKGlzIG5vdCBjb3B5IGNhc2Ugb3IgdGFyZ2V0IGlzIG5vdCBpbml0aWFsIGNvbnRhaW5lcilcbiAgICAgICAgZHJvcChpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAoby5yZW1vdmVPblNwaWxsKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFmdGVyIHJlbGVhc2UgdGhlcmUgaXMgbm8gY29udGFpbmVyIGhvdmVyZWRcbiAgICAgIF90YXJnZXRDb250YWluZXIgPSBudWxsO1xuXG4gICAgICAvLyByZW1vdmUgY2xhc3NlcyBpZiB1c2VkXG4gICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiYgX2xhc3RPdmVyRWxlbSkge1xuICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgX2xhc3RPdmVyRWxlbSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJvcChpdGVtLCB0YXJnZXQpIHtcbiAgICAgIGlmIChvLnNjb3BlICYmIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCB0YXJnZXQsIF9zb3VyY2UsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcblxuICAgICAgaWYoIW8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgaWYocGFyZW50KXtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICB2YXIgaXRlbU1vZGVsID0gX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsO1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZpbmcgaXRlbS9jb3B5IGZyb20gY3VyZW50IHRhcmdldCcpO1xuICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKF90YXJnZXRNb2RlbC5pbmRleE9mKGl0ZW1Nb2RlbCksMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoby5jb3B5ID8gJ2NhbmNlbCcgOiAncmVtb3ZlJywgaXRlbSwgcGFyZW50LCBpdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCwgX3RhcmdldE1vZGVsKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWwocmV2ZXJ0KSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmV2ZXJ0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gcmV2ZXJ0IDogby5yZXZlcnRPblNwaWxsLFxuICAgICAgICBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcblxuICAgICAgaWYgKHBhcmVudCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgaWYoIW8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX2NvcHkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBjb25zb2xlLmxvZygnX2NvcHlNb2RlbCcpO1xuICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UoX3RhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCksIDEsIF9jb3B5TW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpbml0aWFsID0gaXNJbml0aWFsUGxhY2VtZW50KHBhcmVudCk7XG4gICAgICBpZiAoaW5pdGlhbCA9PT0gZmFsc2UgJiYgby5jb3B5ID09PSBmYWxzZSAmJiByZXZlcnRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXZlcnRpbmcgaXRlbS9jb3B5IGJhY2sgdG8gc291cmNlJyk7XG4gICAgICAgIGlmKCFvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgX3NvdXJjZS5pbnNlcnRCZWZvcmUoaXRlbSwgX2luaXRpYWxTaWJsaW5nKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgICAgLy8gdHJhY2sgc2NvcGVzIHRvb1xuICAgICAgICAgIF9sYXN0VGFyZ2V0U2NvcGUgPSBfdGFyZ2V0U2NvcGU7XG4gICAgICAgICAgX3RhcmdldFNjb3BlID0gYW5ndWxhci5lbGVtZW50KGVsKS5zY29wZSgpO1xuICAgICAgICAgIC8vIG1vdmUgYmFjayB0byBpbml0aWFsIHBsYWNlbWVudFxuICAgICAgICAgIG1vdmVJbkNvbnRhaW5lcnNNb2RlbChfaW5pdGlhbEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoby5zY29wZSAmJiAoaW5pdGlhbCB8fCByZXZlcnRzKSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlKTtcbiAgICAgIH0gZWxzZSBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcm9wJywgaXRlbSwgcGFyZW50LCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgICAgcmVtb3ZlTWlycm9ySW1hZ2UoKTtcblxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgcm1DbGFzcyhpdGVtLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhbmNlbCB0aW1lclxuICAgICAgaWYgKF9yZW5kZXJUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3JlbmRlclRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgX3NvdXJjZSA9IF9pdGVtID0gX2NvcHkgPSBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBfc291cmNlTW9kZWwgPSBudWxsO1xuICAgICAgX2l0ZW1Nb2RlbCA9IF9jb3B5TW9kZWwgPSBfaW5pdGlhbEluZGV4ID0gX2N1cnJlbnRJbmRleCA9IF9yZW5kZXJUaW1lciA9IG51bGw7XG5cbiAgICAgIGFwaS5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJhZ2VuZCcsIGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlzIGl0ZW0gY3VycmVudGx5IHBsYWNlZCBpbiBvcmlnaW5hbCBjb250YWluZXIgYW5kIG9yaWdpbmFsIHBvc2l0aW9uP1xuICAgIGZ1bmN0aW9uIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHMpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gcyB8fCAoX21pcnJvciA/IF9jdXJyZW50U2libGluZyA6IG5leHRFbChfaXRlbSB8fCBfY29weSkpO1xuICAgICAgcmV0dXJuIHRhcmdldCA9PT0gX3NvdXJjZSAmJiBzaWJsaW5nID09PSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgfVxuXG4gICAgLy8gZmluZCB2YWxpZCBkcm9wIGNvbnRhaW5lclxuICAgIGZ1bmN0aW9uIGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlbGVtZW50QmVoaW5kQ3Vyc29yO1xuICAgICAgd2hpbGUgKHRhcmdldCAmJiAhYWNjZXB0ZWQoKSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG5cbiAgICAgIGZ1bmN0aW9uIGFjY2VwdGVkKCkge1xuICAgICAgICB2YXIgYWNjZXB0cyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfaXNDb250YWluZXIodGFyZ2V0KSkgeyAvLyBpcyBkcm9wcGFibGU/XG4gICAgICAgICAgIF90YXJnZXRDb250YWluZXIgPSB0YXJnZXQ7XG5cbiAgICAgICAgICB2YXIgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQodGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZSh0YXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSksXG4gICAgICAgICAgICBpbml0aWFsID0gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcmVmZXJlbmNlKTtcbiAgICAgICAgICBhY2NlcHRzID0gaW5pdGlhbCA/IHRydWUgOiBvLmFjY2VwdHMoX2l0ZW0sIHRhcmdldCwgX3NvdXJjZSwgcmVmZXJlbmNlLCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGNsYXNzIGlmIGVsZW1lbnQgaXMgZW5hYmxlZCBmb3IgaXQgYW5kIGl0IGhhcyBub3QgYWxyZWFkeSB0aGUgY2xhc3NcbiAgICAgICAgaWYgKG8uZHJhZ092ZXJDbGFzc2VzICYmXG4gICAgICAgICAgaGFzQ2xhc3ModGFyZ2V0LCBvLmNsYXNzZXMub3ZlckFjdGl2ZSkgJiZcbiAgICAgICAgICB0YXJnZXQgIT09IF9sYXN0T3ZlckVsZW0pIHtcblxuICAgICAgICAgIGlmIChfbGFzdE92ZXJFbGVtKSB7IC8vIGNsZWFyIGZyb20gcHJldmlvdXNcbiAgICAgICAgICAgIHJtQ2xhc3MoX2xhc3RPdmVyRWxlbSwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9sYXN0T3ZlckNsYXNzID0gYWNjZXB0cyA/IG8uY2xhc3Nlcy5vdmVyQWNjZXB0cyA6IG8uY2xhc3Nlcy5vdmVyRGVjbGluZXM7XG4gICAgICAgICAgYWRkQ2xhc3ModGFyZ2V0LCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgX2xhc3RPdmVyRWxlbSA9IHRhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2NlcHRzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgICAgaWYgKCFfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgLy8gdXBkYXRlIGNvb3JkaW5hdGVzXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIC8vIGNvdW50IG1pcnJvciBjb29yZGlhdGVzXG4gICAgICB2YXIgeCA9IF9jbGllbnRYIC0gX29mZnNldFgsXG4gICAgICAgIHkgPSBfY2xpZW50WSAtIF9vZmZzZXRZLFxuICAgICAgICBwYWdlWCxcbiAgICAgICAgcGFnZVksXG4gICAgICAgIG9mZnNldEJveDtcblxuICAgICAgLy8gZmlsbCBleHRyYSBwcm9wZXJ0aWVzIGlmIGJvdW5kaW5nQm94IGlzIHVzZWRcbiAgICAgIGlmIChvLmJvdW5kaW5nQm94KSB7XG4gICAgICAgIHBhZ2VYID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSk7XG4gICAgICAgIHBhZ2VZID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSk7XG4gICAgICAgIG9mZnNldEJveCA9IGdldE9mZnNldChvLmJvdW5kaW5nQm94KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvLmxvY2tZKSB7XG4gICAgICAgIGlmICghby5ib3VuZGluZ0JveCB8fCAocGFnZVggPiBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYICYmIHBhZ2VYIDwgb2Zmc2V0Qm94LnJpZ2h0ICsgX29mZnNldFhyKSkge1xuICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKG8uYm91bmRpbmdCb3gpIHsgLy8gY2hlY2sgYWdhaW4gaW4gY2FzZSB1c2VyIHNjcm9sbGVkIHRoZSB2aWV3XG4gICAgICAgICAgaWYgKHBhZ2VYIDwgb2Zmc2V0Qm94LmxlZnQgKyBfb2Zmc2V0WCkge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0gX2NsaWVudFggLSAocGFnZVggLSBvZmZzZXRCb3gubGVmdCkgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIF9taXJyb3JXaWR0aCAtIChwYWdlWCAtIG9mZnNldEJveC5yaWdodCkgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFvLmxvY2tYKSB7XG4gICAgICAgIGlmICghby5ib3VuZGluZ0JveCB8fCAocGFnZVkgPiBvZmZzZXRCb3gudG9wICsgX29mZnNldFkgJiYgcGFnZVkgPCBvZmZzZXRCb3guYm90dG9tICsgX29mZnNldFliKSkge1xuICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoby5ib3VuZGluZ0JveCkgeyAvLyBjaGVjayBhZ2FpbiBpbiBjYXNlIHVzZXIgc2Nyb2xsZWQgdGhlIHZpZXdcbiAgICAgICAgICBpZiAocGFnZVkgPCBvZmZzZXRCb3gudG9wICsgX29mZnNldFkpIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSAocGFnZVkgLSBvZmZzZXRCb3gudG9wKSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSBfbWlycm9ySGVpZ2h0IC0gKHBhZ2VZIC0gb2Zmc2V0Qm94LmJvdHRvbSkgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBlbGVtZW50QmVoaW5kQ3Vyc29yID0gZ2V0RWxlbWVudEJlaGluZFBvaW50KF9taXJyb3IsIF9jbGllbnRYLCBfY2xpZW50WSksXG4gICAgICAgIGRyb3BUYXJnZXQgPSBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuXG4gICAgICAvLyBkbyBub3QgY29weSBpbiBzYW1lIGNvbnRhaW5lclxuICAgICAgaWYgKGRyb3BUYXJnZXQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZmVyZW5jZSxcbiAgICAgICAgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvcik7XG5cbiAgICAgIC8vIHByZXBhcmUgbW9kZWxzIG9wZXJhdGlvbnNcbiAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgdmFyIHJlZmVyZW5jZUluZGV4O1xuXG4gICAgICAgIF9sYXN0VGFyZ2V0U2NvcGUgPSBfdGFyZ2V0U2NvcGUgfHwgYW5ndWxhci5lbGVtZW50KF9zb3VyY2UpLnNjb3BlKCk7XG4gICAgICAgIF90YXJnZXRTY29wZSA9IGFuZ3VsYXIuZWxlbWVudChkcm9wVGFyZ2V0KS5zY29wZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW1tZWRpYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCBpbW1lZGlhdGUsIF9jbGllbnRYLCBfY2xpZW50WSk7XG4gICAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IGRvbUluZGV4T2YocmVmZXJlbmNlLCBkcm9wVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvLnJldmVydE9uU3BpbGwgPT09IHRydWUgJiYgIW8uY29weSkge1xuICAgICAgICAvLyB0aGUgY2FzZSB0aGF0IG1pcnJvciBpcyBub3Qgb3ZlciB2YWxpZCB0YXJnZXQgYW5kIHJldmVydGluZyBpcyBvbiBhbmQgY29weSBpcyBvZmZcbiAgICAgICAgcmVmZXJlbmNlID0gX2luaXRpYWxTaWJsaW5nO1xuICAgICAgICBkcm9wVGFyZ2V0ID0gX3NvdXJjZTtcblxuICAgICAgICAvLyBnZXR0aW5nIG1vZGVsIGludGl0aWFsIHByb3BlcnRpZXMgaW50byBjdXJyZW50XG4gICAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF9pbml0aWFsSW5kZXg7XG4gICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfc291cmNlTW9kZWw7XG4gICAgICAgICAgX2xhc3RUYXJnZXRTY29wZSA9IF90YXJnZXRTY29wZTtcbiAgICAgICAgICBfdGFyZ2V0U2NvcGUgPSBhbmd1bGFyLmVsZW1lbnQoZHJvcFRhcmdldCkuc2NvcGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhlIGNhc2UgdGhhdCBtaXJyb3IgaXMgbm90IG92ZXIgdmFsaWQgdGFyZ2V0IGFuZCByZW1vdmluZyBpcyBvbiBvciBjb3B5IGlzIG9uXG4gICAgICAgIGlmICgoby5jb3B5IHx8IG8ucmVtb3ZlT25TcGlsbCA9PT0gdHJ1ZSkgJiYgaXRlbS5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coby5jb3B5ID8gJ3JlbW92ZSBpdGVtIGNvcHkgZnJvbSBsYXN0IHBvc2l0aW9uJyA6ICdyZW1vdmUgaXRlbSBmcm9tIGxhc3QgcG9zaXRpb24nKVxuICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIG9yIGNvcHkgb2YgaXRlbVxuICAgICAgICAgIGlmKCFvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAxKTtcbiAgICAgICAgICAgIF90YXJnZXRTY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCB8fCByZWZlcmVuY2UgIT09IGl0ZW0gJiYgcmVmZXJlbmNlICE9PSBuZXh0RWwoaXRlbSkpIHtcbiAgICAgICAgLy8gbW92aW5nIGl0ZW0vY29weSB0byBuZXcgY29udGFpbmVyIGZyb20gcHJldmlvdXMgb25lXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmcgaXRlbS9jb3B5IHRvIG5ldyBwbGFjZW1lbnQnKTtcbiAgICAgICAgX2N1cnJlbnRTaWJsaW5nID0gcmVmZXJlbmNlO1xuXG4gICAgICAgIGlmKCFvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgZHJvcFRhcmdldC5pbnNlcnRCZWZvcmUoaXRlbSwgcmVmZXJlbmNlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbW92ZUluQ29udGFpbmVyc01vZGVsKHJlZmVyZW5jZUluZGV4KTtcbiAgICAgICAgICBfY3VycmVudEluZGV4ID0gcmVmZXJlbmNlSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG8uc2NvcGUuJGVtaXQoJ3NoYWRvdycsIGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZUluQ29udGFpbmVyc01vZGVsIChyZWZlcmVuY2VJbmRleCkge1xuICAgICAgY29uc29sZS5sb2coX2xhc3RUYXJnZXRNb2RlbFtfY3VycmVudEluZGV4XSk7XG4gICAgICBpZihfbGFzdFRhcmdldE1vZGVsID09PSBfdGFyZ2V0TW9kZWwpe1xuICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAwLCBfbGFzdFRhcmdldE1vZGVsLnNwbGljZShfY3VycmVudEluZGV4LCAxKVswXSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgX2xhc3RUYXJnZXRNb2RlbC5zcGxpY2UoX2N1cnJlbnRJbmRleCwgMSk7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDAsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgIF9sYXN0VGFyZ2V0U2NvcGUuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgICBfdGFyZ2V0U2NvcGUuJGFwcGx5KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsQ29udGFpbmVyKGUpe1xuICAgICAgaWYoX3RhcmdldENvbnRhaW5lcil7X3RhcmdldENvbnRhaW5lci5zY3JvbGxUb3AgKz0gZS5kZWx0YVl9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF9taXJyb3IgPSBfaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBfbWlycm9yV2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgX21pcnJvckhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgX21pcnJvci5zdHlsZS53aWR0aCA9IGdldFJlY3RXaWR0aChyZWN0KSArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLmhlaWdodCA9IGdldFJlY3RIZWlnaHQocmVjdCkgKyAncHgnO1xuICAgICAgcm1DbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICBhZGRDbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMubWlycm9yKTtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoX21pcnJvcik7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvbicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgIGFkZENsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29uJywgJ3doZWVsJywgc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9taXJyb3IsIF9pdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJtQ2xhc3MoYm9keSwgby5jbGFzc2VzLnVuc2VsZWN0YWJsZSk7XG4gICAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgJ29mZicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29mZicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICAgIF9taXJyb3IucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChfbWlycm9yKTtcbiAgICAgICAgX21pcnJvciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgdGFyZ2V0KSB7XG4gICAgICB2YXIgaW1tZWRpYXRlID0gdGFyZ2V0O1xuICAgICAgd2hpbGUgKGltbWVkaWF0ZSAhPT0gZHJvcFRhcmdldCAmJiBpbW1lZGlhdGUucGFyZW50RWxlbWVudCAhPT0gZHJvcFRhcmdldCkge1xuICAgICAgICBpbW1lZGlhdGUgPSBpbW1lZGlhdGUucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChpbW1lZGlhdGUgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbW1lZGlhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIHRhcmdldCwgeCwgeSkge1xuICAgICAgdmFyIGhvcml6b250YWwgPSBvLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIHJlZmVyZW5jZSA9IHRhcmdldCAhPT0gZHJvcFRhcmdldCA/IGluc2lkZSgpIDogb3V0c2lkZSgpO1xuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcblxuICAgICAgZnVuY3Rpb24gb3V0c2lkZSgpIHsgLy8gc2xvd2VyLCBidXQgYWJsZSB0byBmaWd1cmUgb3V0IGFueSBwb3NpdGlvblxuICAgICAgICB2YXIgbGVuID0gZHJvcFRhcmdldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgZWw7XG4gICAgICAgIHZhciByZWN0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBlbCA9IGRyb3BUYXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmIHJlY3QubGVmdCA+IHgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFob3Jpem9udGFsICYmIHJlY3QudG9wID4geSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaW5zaWRlKCkgeyAvLyBmYXN0ZXIsIGJ1dCBvbmx5IGF2YWlsYWJsZSBpZiBkcm9wcGVkIGluc2lkZSBhIGNoaWxkIGVsZW1lbnRcbiAgICAgICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeCA+IHJlY3QubGVmdCArIGdldFJlY3RXaWR0aChyZWN0KSAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHkgPiByZWN0LnRvcCArIGdldFJlY3RIZWlnaHQocmVjdCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzb2x2ZShhZnRlcikge1xuICAgICAgICByZXR1cm4gYWZ0ZXIgPyBuZXh0RWwodGFyZ2V0KSA6IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGwoc2Nyb2xsUHJvcCwgb2Zmc2V0UHJvcCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbb2Zmc2V0UHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbb2Zmc2V0UHJvcF07XG4gICAgICB9XG4gICAgICBpZiAoZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRFbGVtZW50W3Njcm9sbFByb3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJvZHlbc2Nyb2xsUHJvcF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoJ3Njcm9sbFRvcCcsICdwYWdlWU9mZnNldCcpLFxuICAgICAgICBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKCdzY3JvbGxMZWZ0JywgJ3BhZ2VYT2Zmc2V0Jyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCArIHNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20gKyBzY3JvbGxUb3BcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEJlaGluZFBvaW50KHBvaW50LCB4LCB5KSB7XG4gICAgICBpZiAoIXggJiYgIXkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgcCA9IHBvaW50IHx8IHt9LFxuICAgICAgICBzdGF0ZSA9IHAuY2xhc3NOYW1lLFxuICAgICAgICBlbDtcbiAgICAgIHAuY2xhc3NOYW1lICs9ICcgJyArIG8uY2xhc3Nlcy5oaWRlO1xuICAgICAgZWwgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgICAgcC5jbGFzc05hbWUgPSBzdGF0ZTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVnRXZlbnQoZWwsIG9wLCB0eXBlLCBmbikge1xuICAgIHZhciB0b3VjaCA9IHtcbiAgICAgICAgbW91c2V1cDogJ3RvdWNoZW5kJyxcbiAgICAgICAgbW91c2Vkb3duOiAndG91Y2hzdGFydCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ3RvdWNobW92ZSdcbiAgICAgIH0sXG4gICAgICAkZWwgPSBhbmd1bGFyLmVsZW1lbnQoZWwpO1xuXG4gICAgaWYodHlwZSAhPT0gJ3doZWVsJyl7JGVsW29wXSh0b3VjaFt0eXBlXSwgZm4pfTtcbiAgICAkZWxbb3BdKHR5cGUsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ldmVyKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsd2F5cygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRFbChlbCkge1xuICAgIHJldHVybiBlbC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbWFudWFsbHkoKTtcblxuICAgIGZ1bmN0aW9uIG1hbnVhbGx5KCkge1xuICAgICAgdmFyIHNpYmxpbmcgPSBlbDtcbiAgICAgIGRvIHtcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICB9IHdoaWxlIChzaWJsaW5nICYmIHNpYmxpbmcubm9kZVR5cGUgIT09IDEpO1xuICAgICAgcmV0dXJuIHNpYmxpbmc7XG4gICAgfVxuICB9XG5cbiAgLy9DYW5ub3QgdXNlIGFuZ3VsYXIuaXNFbGVtZW50IGJlY2F1c2Ugd2UgbmVlZCB0byBjaGVjayBwbGFpbiBkb20gZWxlbWVudCwgbm8galFsaXRlIHdyYXBwZWRcbiAgZnVuY3Rpb24gaXNFbGVtZW50KG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0JyA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxuICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTmFtZS5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSkgPT09IC0xKSB7XG4gICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJtQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGFuZ3VsYXIuZWxlbWVudChlbCkucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudEhvc3QoZSkge1xuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgICB2YXIgbWlzc01hcCA9IHtcbiAgICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgICB9O1xuICAgIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RbY29vcmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdFdpZHRoKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0SGVpZ2h0KHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgfHwgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9tSW5kZXhPZihjaGlsZCwgcGFyZW50KXtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhbmd1bGFyLmVsZW1lbnQocGFyZW50KS5jaGlsZHJlbigpLCBjaGlsZCk7XG4gIH1cblxufSk7XG4iXX0=
