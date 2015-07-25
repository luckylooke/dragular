(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/ctibor/projects/adminmode/gulp/node_modules/dragular/dragular.js":[function(require,module,exports){
/* global angular */
'use strict';

/**
 * dragular Module by Luckylooke https://github.com/luckylooke
 *
 * Angular version of dragula https://github.com/bevacqua/dragula
 */

angular.module('dragularModule', []).factory('dragularService', function dragula() {

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

}).directive('dragular', ['dragularService', function(dragularService) {
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
}]);

},{}]},{},["/home/ctibor/projects/adminmode/gulp/node_modules/dragular/dragular.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkcmFndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogZHJhZ3VsYXIgTW9kdWxlIGJ5IEx1Y2t5bG9va2UgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2VcbiAqXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCdkcmFndWxhck1vZHVsZScsIFtdKS5mYWN0b3J5KCdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBkcmFndWxhKCkge1xuXG4gIHZhciBjb250YWluZXJzTmFtZVNwYWNlZCA9IHt9LCAvLyBuYW1lLXNwYWNlZCBjb250YWluZXJzXG4gICAgY29udGFpbmVyc05hbWVTcGFjZWRNb2RlbCA9IHt9LCAvLyBuYW1lLXNwYWNlZCBjb250YWluZXJzIG1vZGVsc1xuICAgICAgX21pcnJvcjsgLy8gbWlycm9yIGltYWdlXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGluaXRpYWxDb250YWluZXJzLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiAhQXJyYXkuaXNBcnJheShpbml0aWFsQ29udGFpbmVycykgJiYgIWFuZ3VsYXIuaXNFbGVtZW50KGluaXRpYWxDb250YWluZXJzKSAmJiAhaW5pdGlhbENvbnRhaW5lcnNbMF0pIHtcbiAgICAgIC8vIHRoZW4gY29udGFpbmVycyBhcmUgbm90IHByb3ZpZGVkLCBvbmx5IG9wdGlvbnNcbiAgICAgIG9wdGlvbnMgPSBpbml0aWFsQ29udGFpbmVycztcbiAgICAgIGluaXRpYWxDb250YWluZXJzID0gW107XG4gICAgfVxuXG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgX3NvdXJjZSwgLy8gc291cmNlIGNvbnRhaW5lclxuICAgICAgX2l0ZW0sIC8vIGl0ZW0gYmVpbmcgZHJhZ2dlZFxuICAgICAgX3NvdXJjZU1vZGVsLCAvLyBzb3VyY2UgY29udGFpbmVyIG1vZGVsXG4gICAgICBfaXRlbU1vZGVsLCAvLyBpdGVtLW1vZGVsIGJlaW5nIGRyYWdnZWRcbiAgICAgIF90YXJnZXRNb2RlbCwgLy8gdGFyZ2V0IGNvbnRhaW5lciBtb2RlbFxuICAgICAgX2xhc3RUYXJnZXRNb2RlbCwgLy8gbGFzdCB0YXJnZXQgY29udGFpbmVyIG1vZGVsXG4gICAgICBfdGFyZ2V0U2NvcGUsIC8vIHRhcmdldCBtb2RlbCBzY29wZSAodXNlZCBmb3IgJGFwcGx5LWluZyBjaGFuZ2VzIGluIG1vZGVsKVxuICAgICAgX2xhc3RUYXJnZXRTY29wZSwgLy8gdGFyZ2V0IG1vZGVsIHNjb3BlICh1c2VkIGZvciAkYXBwbHktaW5nIGNoYW5nZXMgaW4gbW9kZWwpXG4gICAgICBfb2Zmc2V0WCwgLy8gcmVmZXJlbmNlIHhcbiAgICAgIF9vZmZzZXRZLCAvLyByZWZlcmVuY2UgeVxuICAgICAgX29mZnNldFhyLCAvLyByZWZlcmVuY2UgeCByaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX29mZnNldFliLCAvLyByZWZlcmVuY2UgeSBib3R0b20gZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9jbGllbnRYLCAvLyBjYWNoZSBjbGllbnQgeCwgaW5pdCBhdCBncmFiLCB1cGRhdGUgYXQgZHJhZ1xuICAgICAgX2NsaWVudFksIC8vIGNhY2hlIGNsaWVudCB5LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfbWlycm9yV2lkdGgsIC8vIG1pcnJvciB3aWR0aCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX21pcnJvckhlaWdodCwgLy8gbWlycm9yIGhlaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2luaXRpYWxTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50U2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgbm93XG4gICAgICBfaW5pdGlhbEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggd2hlbiBncmFiYmVkXG4gICAgICBfY3VycmVudEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggbm93XG4gICAgICBfbGFzdE92ZXJFbGVtLCAvLyBsYXN0IGVsZW1lbnQgYmVoaW5kIHRoZSBjdXJzb3IgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2xhc3RPdmVyQ2xhc3MsIC8vIGxhc3Qgb3ZlckNsYXNzIHVzZWQgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2NvcHksIC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICAgICAgX2NvcHlNb2RlbCwgLy8gaXRlbS1tb2RlbCB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29udGFpbmVycyA9IHt9LCAvLyBjb250YWluZXJzIG1hbmFnZWQgYnkgdGhlIGRyYWtlXG4gICAgICBfY29udGFpbmVyc01vZGVsID0ge30sIC8vIGNvbnRhaW5lcnMgbW9kZWxcbiAgICAgIF9yZW5kZXJUaW1lciwgLy8gdGltZXIgZm9yIHNldFRpbWVvdXQgcmVuZGVyTWlycm9ySW1hZ2VcbiAgICAgIF9pc0NvbnRhaW5lciwgLy8gaW50ZXJuYWwgaXNDb250YWluZXJcbiAgICAgIF90YXJnZXRDb250YWluZXIsIC8vIGRyb3BwYWJsZSBjb250YWluZXIgdW5kZXIgZHJhZyBpdGVtXG4gICAgICBkZWZhdWx0Q2xhc3NlcyA9IHtcbiAgICAgICAgbWlycm9yOiAnZ3UtbWlycm9yJyxcbiAgICAgICAgaGlkZTogJ2d1LWhpZGUnLFxuICAgICAgICB1bnNlbGVjdGFibGU6ICdndS11bnNlbGVjdGFibGUnLFxuICAgICAgICB0cmFuc2l0OiAnZ3UtdHJhbnNpdCcsXG4gICAgICAgIG92ZXJBY3RpdmU6ICdndS1vdmVyLWFjdGl2ZScsXG4gICAgICAgIG92ZXJBY2NlcHRzOiAnZ3Utb3Zlci1hY2NlcHQnLFxuICAgICAgICBvdmVyRGVjbGluZXM6ICdndS1vdmVyLWRlY2xpbmUnXG4gICAgICB9LFxuICAgICAgbyA9IHsgLy8gb3B0aW9uc1xuICAgICAgICBjbGFzc2VzOiBkZWZhdWx0Q2xhc3NlcyxcbiAgICAgICAgY29udGFpbmVyczogZmFsc2UsXG4gICAgICAgIG1vdmVzOiBhbHdheXMsXG4gICAgICAgIGFjY2VwdHM6IGFsd2F5cyxcbiAgICAgICAgaXNDb250YWluZXI6IG5ldmVyLFxuICAgICAgICBjb3B5OiBmYWxzZSxcbiAgICAgICAgZGVsYXk6IGZhbHNlLFxuICAgICAgICBpbnZhbGlkOiBpbnZhbGlkVGFyZ2V0LFxuICAgICAgICByZXZlcnRPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgcmVtb3ZlT25TcGlsbDogZmFsc2UsXG4gICAgICAgIGRyYWdPdmVyQ2xhc3NlczogZmFsc2UsXG4gICAgICAgIGxvY2tYOiBmYWxzZSxcbiAgICAgICAgbG9ja1k6IGZhbHNlLFxuICAgICAgICBib3VuZGluZ0JveDogZmFsc2UsXG4gICAgICAgIGNvbnRhaW5lcnNNb2RlbDogZmFsc2VcbiAgICAgIH07XG5cbiAgICBpZiAoIWlzRWxlbWVudChvLmJvdW5kaW5nQm94KSkge1xuICAgICAgby5ib3VuZGluZ0JveCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5jbGFzc2VzKSB7XG4gICAgICBhbmd1bGFyLmV4dGVuZChkZWZhdWx0Q2xhc3Nlcywgb3B0aW9ucy5jbGFzc2VzKTtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKG9wdGlvbnMuY2xhc3NlcywgZGVmYXVsdENsYXNzZXMpO1xuICAgIH1cblxuICAgIGFuZ3VsYXIuZXh0ZW5kKG8sIG9wdGlvbnMpO1xuXG4gICAgaWYgKG8uZGVsYXkgPT09IHRydWUpIHtcbiAgICAgIG8uZGVsYXkgPSAzMDA7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGluaXRpYWwgY29udGFpbmVycyBmcm9tIG9wdGlvbnMsIGFyZ3VtZW50IG9yIGZhbGwgYmFjayB0byBlbXB0eSBhcnJheSAoY29udGFpbmVycyBjYW4gYmUgYWRkZWQgbGF0ZXIpXG4gICAgaW5pdGlhbENvbnRhaW5lcnMgPSBvLmNvbnRhaW5lcnMgfHwgKGluaXRpYWxDb250YWluZXJzID8gbWFrZUFycmF5KGluaXRpYWxDb250YWluZXJzKSA6IFtdKTtcbiAgICBpZihvLmNvbnRhaW5lcnMpe1xuICAgICAgLy8gbWFrZSBhcnJheSBmcm9tIG8uY29udGFpbmVyc1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgIH1cbiAgICBpZihvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICBvLmNvbnRhaW5lcnNNb2RlbCA9IG1ha2VBcnJheShvLmNvbnRhaW5lcnNNb2RlbCk7XG4gICAgfVxuXG4gICAgLy8gZmVlZCBuYW1lc3BhY2VkIGNvbnRhaW5lcnMgZ3JvdXBzIGFuZCBvcHRpb25hbHkgc2hhZG93IGl0IGJ5IG1vZGVsc1xuICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvLm5hbWVTcGFjZSkpIHtcbiAgICAgICAgICBvLm5hbWVTcGFjZSA9IFtvLm5hbWVTcGFjZV07XG4gICAgICAgfVxuICAgICAgIGZ1bmN0aW9uIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycyl7XG4gICAgICAgIGlmICghY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSkge1xuICAgICAgICAgIGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdLCBpbml0aWFsQ29udGFpbmVycyk7XG4gICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0gPSBjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdO1xuICAgICAgIH1cbiAgICAgIG8ubmFtZVNwYWNlLmZvckVhY2goZnVuY3Rpb24gZWFjaE5hbWVTcGFjZSAobmFtZVNwYWNlKSB7XG4gICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycyk7XG4gICAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICBwcm9jZWVkTmFtZVNwYWNlcyhfY29udGFpbmVyc01vZGVsLCBjb250YWluZXJzTmFtZVNwYWNlZE1vZGVsLCBuYW1lU3BhY2UsIG8uY29udGFpbmVyc01vZGVsKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIF9pc0NvbnRhaW5lciA9IGlzQ29udGFpbmVyTmFtZVNwYWNlZDtcbiAgICB9ZWxzZXtcbiAgICAgIC8vIGRlZmF1bHQgKG5vdCB1c2luZyBuYW1lU3BhY2VzKVxuICAgICAgX2NvbnRhaW5lcnMgPSBpbml0aWFsQ29udGFpbmVycztcbiAgICAgIF9pc0NvbnRhaW5lciA9IGlzQ29udGFpbmVyO1xuICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICAgIF9jb250YWluZXJzTW9kZWwgPSBvLmNvbnRhaW5lcnNNb2RlbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vcmVnaXN0ZXIgZXZlbnRzXG4gICAgZXZlbnRzKCk7XG5cbiAgICB2YXIgYXBpID0ge1xuICAgICAgYWRkQ29udGFpbmVyOiBtYW5pcHVsYXRlQ29udGFpbmVycygnYWRkJyksXG4gICAgICByZW1vdmVDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdyZW1vdmUnKSxcbiAgICAgIGNvbnRhaW5lcnM6IF9jb250YWluZXJzLFxuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgZW5kOiBlbmQsXG4gICAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICByZXR1cm4gYXBpO1xuXG4gICAgLy8gbWFrZSBhcnJheSBmcm9tIGFycmF5LWxpa2Ugb2JqZWN0cyBvciBmcm9tIHNpbmdsZSBlbGVtZW50XG4gICAgZnVuY3Rpb24gbWFrZUFycmF5KGFsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWxsKSkge1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgICAgfVxuICAgICAgaWYgKGFsbC5sZW5ndGgpIHsgLy8gaXMgYXJyYXktbGlrZVxuICAgICAgICB2YXIgaUFsbCA9IGFsbC5sZW5ndGgsXG4gICAgICAgICAgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgd2hpbGUgKGlBbGwpIHtcbiAgICAgICAgICBpQWxsLS07XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChhbGxbaUFsbF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgIH0gZWxzZSB7IC8vIGlzIG9uZSBlbGVtZW50XG4gICAgICAgIHJldHVybiBbYWxsXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgb3IgcmVtb3ZlIGNvbnRhaW5lcnMgLSBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gbWFuaXB1bGF0ZUNvbnRhaW5lcnMob3ApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhZGRPclJlbW92ZShhbGwpIHtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSBBcnJheS5pc0FycmF5KGFsbCkgPyBhbGwgOiBtYWtlQXJyYXkoYWxsKTtcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgICAgICAgaWYoby5uYW1lU3BhY2Upe1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG8ubmFtZVNwYWNlLCBmdW5jdGlvbiBhZGRSZW1vdmVOYW1lc3BhY2VkIChjb250YWluZXJzLCBuYW1lU3BhY2UpIHtcbiAgICAgICAgICAgICAgaWYgKG9wID09PSAnYWRkJykge1xuICAgICAgICAgICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0ucHVzaChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLmFkZENvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfY29udGFpbmVyc1tuYW1lU3BhY2VdLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLnJlbW92ZUNvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgIF9jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UuYWRkQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX2NvbnRhaW5lcnMuc3BsaWNlKF9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSwgMSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLnJlbW92ZUNvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NvbnRhaW5lcihlbCkge1xuICAgICAgaWYoYXBpLmNvbnRhaW5lcnMuaW5kZXhPZihlbCkgIT09IC0xIHx8IG8uaXNDb250YWluZXIoZWwpKXtcbiAgICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgX3RhcmdldE1vZGVsID0gX2NvbnRhaW5lcnNNb2RlbFthcGkuY29udGFpbmVycy5pbmRleE9mKGVsKV07XG4gICAgICAgICAgLy8gdHJhY2sgc2NvcGVzIHRvb1xuICAgICAgICAgIF9sYXN0VGFyZ2V0U2NvcGUgPSBfdGFyZ2V0U2NvcGU7XG4gICAgICAgICAgX3RhcmdldFNjb3BlID0gYW5ndWxhci5lbGVtZW50KGVsKS5zY29wZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ29udGFpbmVyTmFtZVNwYWNlZChlbCkge1xuICAgICAgdmFyIG5hbWVTcGFjZTtcbiAgICAgIGZvciAobmFtZVNwYWNlIGluIGFwaS5jb250YWluZXJzKSB7XG4gICAgICAgICAgaWYgKGFwaS5jb250YWluZXJzLmhhc093blByb3BlcnR5KG5hbWVTcGFjZSkgJiYgYXBpLmNvbnRhaW5lcnNbbmFtZVNwYWNlXS5pbmRleE9mKGVsKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgICAgICAgX3RhcmdldE1vZGVsID0gX2NvbnRhaW5lcnNNb2RlbFtuYW1lU3BhY2VdW2FwaS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZihlbCldO1xuICAgICAgICAgICAgICAgIC8vIHRyYWNrIHNjb3BlcyB0b29cbiAgICAgICAgICAgICAgICBfbGFzdFRhcmdldFNjb3BlID0gX3RhcmdldFNjb3BlO1xuICAgICAgICAgICAgICAgIF90YXJnZXRTY29wZSA9IGFuZ3VsYXIuZWxlbWVudChlbCkuc2NvcGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihvLmlzQ29udGFpbmVyKGVsKSl7XG4gICAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsICYmIG8uaXNDb250YWluZXJNb2RlbCl7XG4gICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgZnVuY3Rpb24gdHJ5U2NvcGUgKHNjb3BlKSB7XG4gICAgICAgICAgICBpZihzY29wZSAmJiBzY29wZVtvLmlzQ29udGFpbmVyTW9kZWxdKXtcbiAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBzY29wZVtvLmlzQ29udGFpbmVyTW9kZWxdO1xuICAgICAgICAgICAgICBfbGFzdFRhcmdldFNjb3BlID0gX3RhcmdldFNjb3BlO1xuICAgICAgICAgICAgICBfdGFyZ2V0U2NvcGUgPSBhbmd1bGFyLmVsZW1lbnQoZWwpLnNjb3BlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyeVNjb3BlKGFuZ3VsYXIuZWxlbWVudCh0YXJnZXQpLmlzb2xhdGVTY29wZSgpKTtcbiAgICAgICAgICBpZighZm91bmQpeyAvLyBkb250IHNlYXJjaCBpbiBzY29wZSBpZiBhbHJlYWR5IGZvdW5kIGluIGlzb2xhdGVTY29wZVxuICAgICAgICAgICAgdHJ5U2NvcGUoYW5ndWxhci5lbGVtZW50KHRhcmdldCkuc2NvcGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2ZW50cyhyZW0pIHtcbiAgICAgIHZhciBvcCA9IHJlbSA/ICdvZmYnIDogJ29uJztcbiAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgb3AsICdtb3VzZXVwJywgcmVsZWFzZSk7XG5cbiAgICAgIGluaXRpYWxDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gYWRkTW91c2VEb3duIChjb250YWluZXIpIHtcbiAgICAgICAgcmVnRXZlbnQoY29udGFpbmVyLCAnb24nLCAnbW91c2Vkb3duJywgZ3JhYik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZXZlbnRzKHRydWUpO1xuICAgICAgYXBpLnJlbW92ZUNvbnRhaW5lcihfY29udGFpbmVycyk7XG4gICAgICByZWxlYXNlKHt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiKGUpIHtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIHZhciBpdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgIC8vIGZpbHRlciBzb21lIG9kZCBzaXR1YXRpb25zXG4gICAgICBpZiAoKGUud2hpY2ggIT09IDAgJiYgZS53aGljaCAhPT0gMSkgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm47IC8vIHdlIG9ubHkgY2FyZSBhYm91dCBob25lc3QtdG8tZ29kIGxlZnQgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgZHJhZyBjYW4gc3RhcnRcbiAgICAgIGlmIChzdGFydChpdGVtKSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG9tYXRpY2x5IGRldGVjdCBkaXJlY3Rpb24gb2YgZWxlbWVudHMgaWYgbm90IHNldCBpbiBvcHRpb25zXG4gICAgICBpZiAoIW8uZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgcGFyZW50SGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICBwYXJlbnRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBjaGlsZEhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGNoaWxkV2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuICAgICAgICBvLmRpcmVjdGlvbiA9IHBhcmVudEhlaWdodCAvIGNoaWxkSGVpZ2h0IDwgcGFyZW50V2lkdGggLyBjaGlsZFdpZHRoID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXMsIHVzZWQgdG8gcmVuZGVyIF9taXJyb3IgZm9yIGZpcnN0IHRpbWVcbiAgICAgIHZhciBvZmZzZXQgPSBnZXRPZmZzZXQoX2l0ZW0pO1xuICAgICAgX29mZnNldFggPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5sZWZ0O1xuICAgICAgX29mZnNldFkgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC50b3A7XG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIC8vIGxpbWl0aW5nIGFyZWEgb2YgX21pcnJvciBtb3ZlbWVudCwgZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXNcbiAgICAgIGlmIChvLmJvdW5kaW5nQm94KSB7XG4gICAgICAgIF9vZmZzZXRYciA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LnJpZ2h0O1xuICAgICAgICBfb2Zmc2V0WWIgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC5ib3R0b207XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbGF5ZWQgcmVuZGVyaW5nXG4gICAgICBpZiAodHlwZW9mIG8uZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIF9yZW5kZXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgICAgfSwgby5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJNaXJyb3JBbmREcmFnKGUpO1xuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWlycm9yQW5kRHJhZyhlKSB7XG4gICAgICByZW5kZXJNaXJyb3JJbWFnZSgpO1xuICAgICAgLy8gaW5pdGlhbCBwb3NpdGlvblxuICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0gX2NsaWVudFggLSBfb2Zmc2V0WCArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gX29mZnNldFkgKyAncHgnO1xuXG4gICAgICBkcmFnKGUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RhcnQoaXRlbSkge1xuICAgICAgdmFyIGhhbmRsZSA9IGl0ZW07XG5cbiAgICAgIGlmIChhcGkuZHJhZ2dpbmcgJiYgX21pcnJvcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGFscmVhZHkgZHJhZ2dpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc0NvbnRhaW5lcihpdGVtKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGRvbid0IGRyYWcgY29udGFpbmVyIGl0c2VsZlxuICAgICAgfVxuXG4gICAgICB3aGlsZSAoIV9pc0NvbnRhaW5lcihpdGVtLnBhcmVudEVsZW1lbnQpKSB7XG4gICAgICAgIC8vIGJyZWFrIGxvb3AgaWYgdXNlciB0cmllcyB0byBkcmFnIGl0ZW0gd2hpY2ggaXMgY29uc2lkZXJlZCBpbnZhbGlkIGhhbmRsZVxuICAgICAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50RWxlbWVudDsgLy8gZHJhZyB0YXJnZXQgc2hvdWxkIGJlIGltbWVkaWF0ZSBjaGlsZCBvZiBjb250YWluZXJcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGxhc3QgaXRlbSBjaGNlY2tcbiAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAoIW8ubW92ZXMoaXRlbSwgY29udGFpbmVyLCBoYW5kbGUsIF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCkpIHsgLy8gaXMgbW92YWJsZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGVuZCgpO1xuXG4gICAgICAvLyBwcmVwYXJlIG1vZGVscyBvcGVyYXRpb25zXG4gICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICB2YXIgY29udGFpbmVySW5kZXggPSBpbml0aWFsQ29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksXG4gICAgICAgICAgaXRlbUluZGV4ID0gZG9tSW5kZXhPZihpdGVtLCBjb250YWluZXIpO1xuXG4gICAgICAgIF9pbml0aWFsSW5kZXggPSBfY3VycmVudEluZGV4ID0gaXRlbUluZGV4O1xuICAgICAgICBfc291cmNlTW9kZWwgPSBvLmNvbnRhaW5lcnNNb2RlbFtjb250YWluZXJJbmRleF07XG4gICAgICAgIF9pdGVtTW9kZWwgPSBfc291cmNlTW9kZWxbaXRlbUluZGV4XTtcbiAgICAgICAgaWYoby5jb3B5KXtcbiAgICAgICAgICBfY29weU1vZGVsID0gYW5ndWxhci5jb3B5KF9pdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBkcmFnJyxfaXRlbU1vZGVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG8uY29weSkge1xuICAgICAgICBfY29weSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBhZGRDbGFzcyhfY29weSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9jb3B5LCBpdGVtLCBfY29weU1vZGVsLCBfaXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgfVxuXG4gICAgICBfc291cmNlID0gY29udGFpbmVyO1xuICAgICAgX2l0ZW0gPSBpdGVtO1xuICAgICAgX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gbmV4dEVsKGl0ZW0pO1xuXG4gICAgICBhcGkuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJhZycsIF9pdGVtLCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52YWxpZFRhcmdldChlbCkge1xuICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICdBJyB8fCBlbC50YWdOYW1lID09PSAnQlVUVE9OJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZW5kJyk7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnZW5kLWRyb3AnKTtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICBkcm9wKGl0ZW0sIGl0ZW0ucGFyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVsZWFzZShlKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBfY2xpZW50WCwgX2NsaWVudFkpLFxuICAgICAgICBkcm9wVGFyZ2V0ID0gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgX2NsaWVudFgsIF9jbGllbnRZKTtcblxuICAgICAgaWYgKGRyb3BUYXJnZXQgJiYgKG8uY29weSA9PT0gZmFsc2UgfHwgZHJvcFRhcmdldCAhPT0gX3NvdXJjZSkpIHtcbiAgICAgICAgLy8gZm91bmQgdmFsaWQgdGFyZ2V0IGFuZCAoaXMgbm90IGNvcHkgY2FzZSBvciB0YXJnZXQgaXMgbm90IGluaXRpYWwgY29udGFpbmVyKVxuICAgICAgICBkcm9wKGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgICAgfSBlbHNlIGlmIChvLnJlbW92ZU9uU3BpbGwpIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWZ0ZXIgcmVsZWFzZSB0aGVyZSBpcyBubyBjb250YWluZXIgaG92ZXJlZFxuICAgICAgX3RhcmdldENvbnRhaW5lciA9IG51bGw7XG5cbiAgICAgIC8vIHJlbW92ZSBjbGFzc2VzIGlmIHVzZWRcbiAgICAgIGlmIChvLmRyYWdPdmVyQ2xhc3NlcyAmJiBfbGFzdE92ZXJFbGVtKSB7XG4gICAgICAgIHJtQ2xhc3MoX2xhc3RPdmVyRWxlbSwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICBfbGFzdE92ZXJFbGVtID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcm9wKGl0ZW0sIHRhcmdldCkge1xuICAgICAgaWYgKG8uc2NvcGUgJiYgaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCkpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSwgX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9IGVsc2UgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJvcCcsIGl0ZW0sIHRhcmdldCwgX3NvdXJjZSwgX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBcbiAgICAgIGlmKCFvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgIGlmKHBhcmVudCl7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFyIGl0ZW1Nb2RlbCA9IF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbDtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nIGl0ZW0vY29weSBmcm9tIGN1cmVudCB0YXJnZXQnKTtcbiAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihpdGVtTW9kZWwpLDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KG8uY29weSA/ICdjYW5jZWwnIDogJ3JlbW92ZScsIGl0ZW0sIHBhcmVudCwgaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsKHJldmVydCkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJldmVydHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHJldmVydCA6IG8ucmV2ZXJ0T25TcGlsbCxcbiAgICAgICAgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGlmKCFvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9jb3B5KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgX3RhcmdldE1vZGVsLnNwbGljZShfdGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSwgMSwgX2NvcHlNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQocGFyZW50KTtcbiAgICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiBvLmNvcHkgPT09IGZhbHNlICYmIHJldmVydHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JldmVydGluZyBpdGVtL2NvcHkgYmFjayB0byBzb3VyY2UnKTtcbiAgICAgICAgaWYoIW8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICBfc291cmNlLmluc2VydEJlZm9yZShpdGVtLCBfaW5pdGlhbFNpYmxpbmcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9zb3VyY2VNb2RlbDtcbiAgICAgICAgICAvLyB0cmFjayBzY29wZXMgdG9vXG4gICAgICAgICAgX2xhc3RUYXJnZXRTY29wZSA9IF90YXJnZXRTY29wZTtcbiAgICAgICAgICBfdGFyZ2V0U2NvcGUgPSBhbmd1bGFyLmVsZW1lbnQoZWwpLnNjb3BlKCk7XG4gICAgICAgICAgLy8gbW92ZSBiYWNrIHRvIGluaXRpYWwgcGxhY2VtZW50XG4gICAgICAgICAgbW92ZUluQ29udGFpbmVyc01vZGVsKF9pbml0aWFsSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNjb3BlICYmIChpbml0aWFsIHx8IHJldmVydHMpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICByZW1vdmVNaXJyb3JJbWFnZSgpO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBybUNsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FuY2VsIHRpbWVyXG4gICAgICBpZiAoX3JlbmRlclRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfcmVuZGVyVGltZXIpO1xuICAgICAgfVxuXG4gICAgICBfc291cmNlID0gX2l0ZW0gPSBfY29weSA9IF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IF9zb3VyY2VNb2RlbCA9IG51bGw7XG4gICAgICBfaXRlbU1vZGVsID0gX2NvcHlNb2RlbCA9IF9pbml0aWFsSW5kZXggPSBfY3VycmVudEluZGV4ID0gX3JlbmRlclRpbWVyID0gbnVsbDtcblxuICAgICAgYXBpLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnZW5kJywgaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXMgaXRlbSBjdXJyZW50bHkgcGxhY2VkIGluIG9yaWdpbmFsIGNvbnRhaW5lciBhbmQgb3JpZ2luYWwgcG9zaXRpb24/XG4gICAgZnVuY3Rpb24gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcykge1xuICAgICAgdmFyIHNpYmxpbmcgPSBzIHx8IChfbWlycm9yID8gX2N1cnJlbnRTaWJsaW5nIDogbmV4dEVsKF9pdGVtIHx8IF9jb3B5KSk7XG4gICAgICByZXR1cm4gdGFyZ2V0ID09PSBfc291cmNlICYmIHNpYmxpbmcgPT09IF9pbml0aWFsU2libGluZztcbiAgICB9XG5cbiAgICAvLyBmaW5kIHZhbGlkIGRyb3AgY29udGFpbmVyXG4gICAgZnVuY3Rpb24gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnRCZWhpbmRDdXJzb3I7XG4gICAgICB3aGlsZSAodGFyZ2V0ICYmICFhY2NlcHRlZCgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcblxuICAgICAgZnVuY3Rpb24gYWNjZXB0ZWQoKSB7XG4gICAgICAgIHZhciBhY2NlcHRzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF9pc0NvbnRhaW5lcih0YXJnZXQpKSB7IC8vIGlzIGRyb3BwYWJsZT9cbiAgICAgICAgICAgX3RhcmdldENvbnRhaW5lciA9IHRhcmdldDtcblxuICAgICAgICAgIHZhciBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZCh0YXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKHRhcmdldCwgaW1tZWRpYXRlLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgICAgIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCByZWZlcmVuY2UpO1xuICAgICAgICAgIGFjY2VwdHMgPSBpbml0aWFsID8gdHJ1ZSA6IG8uYWNjZXB0cyhfaXRlbSwgdGFyZ2V0LCBfc291cmNlLCByZWZlcmVuY2UsIF9pdGVtTW9kZWwsIF9zb3VyY2VNb2RlbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY2xhc3MgaWYgZWxlbWVudCBpcyBlbmFibGVkIGZvciBpdCBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IHRoZSBjbGFzc1xuICAgICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiZcbiAgICAgICAgICBoYXNDbGFzcyh0YXJnZXQsIG8uY2xhc3Nlcy5vdmVyQWN0aXZlKSAmJlxuICAgICAgICAgIHRhcmdldCAhPT0gX2xhc3RPdmVyRWxlbSkge1xuXG4gICAgICAgICAgaWYgKF9sYXN0T3ZlckVsZW0pIHsgLy8gY2xlYXIgZnJvbSBwcmV2aW91c1xuICAgICAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2xhc3RPdmVyQ2xhc3MgPSBhY2NlcHRzID8gby5jbGFzc2VzLm92ZXJBY2NlcHRzIDogby5jbGFzc2VzLm92ZXJEZWNsaW5lcztcbiAgICAgICAgICBhZGRDbGFzcyh0YXJnZXQsIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICBfbGFzdE92ZXJFbGVtID0gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY2VwdHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgICBpZiAoIV9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAvLyB1cGRhdGUgY29vcmRpbmF0ZXNcbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgLy8gY291bnQgbWlycm9yIGNvb3JkaWF0ZXNcbiAgICAgIHZhciB4ID0gX2NsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IF9jbGllbnRZIC0gX29mZnNldFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgICAgb2Zmc2V0Qm94O1xuXG4gICAgICAvLyBmaWxsIGV4dHJhIHByb3BlcnRpZXMgaWYgYm91bmRpbmdCb3ggaXMgdXNlZFxuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgcGFnZVggPSBnZXRDb29yZCgncGFnZVgnLCBlKTtcbiAgICAgICAgcGFnZVkgPSBnZXRDb29yZCgncGFnZVknLCBlKTtcbiAgICAgICAgb2Zmc2V0Qm94ID0gZ2V0T2Zmc2V0KG8uYm91bmRpbmdCb3gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW8ubG9ja1kpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWCA+IG9mZnNldEJveC5sZWZ0ICsgX29mZnNldFggJiYgcGFnZVggPCBvZmZzZXRCb3gucmlnaHQgKyBfb2Zmc2V0WHIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoby5ib3VuZGluZ0JveCkgeyAvLyBjaGVjayBhZ2FpbiBpbiBjYXNlIHVzZXIgc2Nyb2xsZWQgdGhlIHZpZXdcbiAgICAgICAgICBpZiAocGFnZVggPCBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIChwYWdlWCAtIG9mZnNldEJveC5sZWZ0KSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX21pcnJvcldpZHRoIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LnJpZ2h0KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIW8ubG9ja1gpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWSA+IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSAmJiBwYWdlWSA8IG9mZnNldEJveC5ib3R0b20gKyBfb2Zmc2V0WWIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGNoZWNrIGFnYWluIGluIGNhc2UgdXNlciBzY3JvbGxlZCB0aGUgdmlld1xuICAgICAgICAgIGlmIChwYWdlWSA8IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSkge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIChwYWdlWSAtIG9mZnNldEJveC50b3ApICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9taXJyb3JIZWlnaHQgLSAocGFnZVkgLSBvZmZzZXRCb3guYm90dG9tKSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSk7XG5cbiAgICAgIC8vIGRvIG5vdCBjb3B5IGluIHNhbWUgY29udGFpbmVyXG4gICAgICBpZiAoZHJvcFRhcmdldCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVmZXJlbmNlLFxuICAgICAgICBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKTtcblxuICAgICAgLy8gcHJlcGFyZSBtb2RlbHMgb3BlcmF0aW9uc1xuICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICB2YXIgcmVmZXJlbmNlSW5kZXg7XG5cbiAgICAgICAgX2xhc3RUYXJnZXRTY29wZSA9IF90YXJnZXRTY29wZSB8fCBhbmd1bGFyLmVsZW1lbnQoX3NvdXJjZSkuc2NvcGUoKTtcbiAgICAgICAgX3RhcmdldFNjb3BlID0gYW5ndWxhci5lbGVtZW50KGRyb3BUYXJnZXQpLnNjb3BlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbW1lZGlhdGUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIGltbWVkaWF0ZSwgX2NsaWVudFgsIF9jbGllbnRZKTtcbiAgICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gZG9tSW5kZXhPZihyZWZlcmVuY2UsIGRyb3BUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdHJ1ZSAmJiAhby5jb3B5KSB7XG4gICAgICAgIC8vIHRoZSBjYXNlIHRoYXQgbWlycm9yIGlzIG5vdCBvdmVyIHZhbGlkIHRhcmdldCBhbmQgcmV2ZXJ0aW5nIGlzIG9uIGFuZCBjb3B5IGlzIG9mZlxuICAgICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICAgIGRyb3BUYXJnZXQgPSBfc291cmNlO1xuXG4gICAgICAgIC8vIGdldHRpbmcgbW9kZWwgaW50aXRpYWwgcHJvcGVydGllcyBpbnRvIGN1cnJlbnRcbiAgICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gX2luaXRpYWxJbmRleDtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9zb3VyY2VNb2RlbDtcbiAgICAgICAgICBfbGFzdFRhcmdldFNjb3BlID0gX3RhcmdldFNjb3BlO1xuICAgICAgICAgIF90YXJnZXRTY29wZSA9IGFuZ3VsYXIuZWxlbWVudChkcm9wVGFyZ2V0KS5zY29wZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGUgY2FzZSB0aGF0IG1pcnJvciBpcyBub3Qgb3ZlciB2YWxpZCB0YXJnZXQgYW5kIHJlbW92aW5nIGlzIG9uIG9yIGNvcHkgaXMgb25cbiAgICAgICAgaWYgKChvLmNvcHkgfHwgby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSAmJiBpdGVtLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhvLmNvcHkgPyAncmVtb3ZlIGl0ZW0gY29weSBmcm9tIGxhc3QgcG9zaXRpb24nIDogJ3JlbW92ZSBpdGVtIGZyb20gbGFzdCBwb3NpdGlvbicpXG4gICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gb3IgY29weSBvZiBpdGVtXG4gICAgICAgICAgaWYoIW8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgX3RhcmdldFNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8IHJlZmVyZW5jZSAhPT0gaXRlbSAmJiByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSkge1xuICAgICAgICAvLyBtb3ZpbmcgaXRlbS9jb3B5IHRvIG5ldyBjb250YWluZXIgZnJvbSBwcmV2aW91cyBvbmVcbiAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyBpdGVtL2NvcHkgdG8gbmV3IHBsYWNlbWVudCcpO1xuICAgICAgICBfY3VycmVudFNpYmxpbmcgPSByZWZlcmVuY2U7XG5cbiAgICAgICAgaWYoIW8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICBkcm9wVGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCByZWZlcmVuY2UpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwocmVmZXJlbmNlSW5kZXgpO1xuICAgICAgICAgIF9jdXJyZW50SW5kZXggPSByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnc2hhZG93JywgaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlSW5Db250YWluZXJzTW9kZWwgKHJlZmVyZW5jZUluZGV4KSB7XG4gICAgICBpZihfbGFzdFRhcmdldE1vZGVsID09PSBfdGFyZ2V0TW9kZWwpe1xuICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAwLCBfbGFzdFRhcmdldE1vZGVsLnNwbGljZShfY3VycmVudEluZGV4LCAxKVswXSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgX2xhc3RUYXJnZXRNb2RlbC5zcGxpY2UoX2N1cnJlbnRJbmRleCwgMSk7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgIF9sYXN0VGFyZ2V0U2NvcGUuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgICBfdGFyZ2V0U2NvcGUuJGFwcGx5KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsQ29udGFpbmVyKGUpeyAgIFxuICAgICAgaWYoX3RhcmdldENvbnRhaW5lcil7X3RhcmdldENvbnRhaW5lci5zY3JvbGxUb3AgKz0gZS5kZWx0YVl9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF9taXJyb3IgPSBfaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBfbWlycm9yV2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgX21pcnJvckhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgX21pcnJvci5zdHlsZS53aWR0aCA9IGdldFJlY3RXaWR0aChyZWN0KSArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLmhlaWdodCA9IGdldFJlY3RIZWlnaHQocmVjdCkgKyAncHgnO1xuICAgICAgcm1DbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICBhZGRDbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMubWlycm9yKTtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoX21pcnJvcik7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvbicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgIGFkZENsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29uJywgJ3doZWVsJywgc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9taXJyb3IsIF9pdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJtQ2xhc3MoYm9keSwgby5jbGFzc2VzLnVuc2VsZWN0YWJsZSk7XG4gICAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgJ29mZicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgICAgcmVnRXZlbnQoX21pcnJvciwgJ29mZicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICAgIF9taXJyb3IucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChfbWlycm9yKTtcbiAgICAgICAgX21pcnJvciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgdGFyZ2V0KSB7XG4gICAgICB2YXIgaW1tZWRpYXRlID0gdGFyZ2V0O1xuICAgICAgd2hpbGUgKGltbWVkaWF0ZSAhPT0gZHJvcFRhcmdldCAmJiBpbW1lZGlhdGUucGFyZW50RWxlbWVudCAhPT0gZHJvcFRhcmdldCkge1xuICAgICAgICBpbW1lZGlhdGUgPSBpbW1lZGlhdGUucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChpbW1lZGlhdGUgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbW1lZGlhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIHRhcmdldCwgeCwgeSkge1xuICAgICAgdmFyIGhvcml6b250YWwgPSBvLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIHJlZmVyZW5jZSA9IHRhcmdldCAhPT0gZHJvcFRhcmdldCA/IGluc2lkZSgpIDogb3V0c2lkZSgpO1xuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcblxuICAgICAgZnVuY3Rpb24gb3V0c2lkZSgpIHsgLy8gc2xvd2VyLCBidXQgYWJsZSB0byBmaWd1cmUgb3V0IGFueSBwb3NpdGlvblxuICAgICAgICB2YXIgbGVuID0gZHJvcFRhcmdldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgZWw7XG4gICAgICAgIHZhciByZWN0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBlbCA9IGRyb3BUYXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmIHJlY3QubGVmdCA+IHgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFob3Jpem9udGFsICYmIHJlY3QudG9wID4geSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaW5zaWRlKCkgeyAvLyBmYXN0ZXIsIGJ1dCBvbmx5IGF2YWlsYWJsZSBpZiBkcm9wcGVkIGluc2lkZSBhIGNoaWxkIGVsZW1lbnRcbiAgICAgICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeCA+IHJlY3QubGVmdCArIGdldFJlY3RXaWR0aChyZWN0KSAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHkgPiByZWN0LnRvcCArIGdldFJlY3RIZWlnaHQocmVjdCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzb2x2ZShhZnRlcikge1xuICAgICAgICByZXR1cm4gYWZ0ZXIgPyBuZXh0RWwodGFyZ2V0KSA6IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGwoc2Nyb2xsUHJvcCwgb2Zmc2V0UHJvcCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbb2Zmc2V0UHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbb2Zmc2V0UHJvcF07XG4gICAgICB9XG4gICAgICBpZiAoZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRFbGVtZW50W3Njcm9sbFByb3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJvZHlbc2Nyb2xsUHJvcF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoJ3Njcm9sbFRvcCcsICdwYWdlWU9mZnNldCcpLFxuICAgICAgICBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKCdzY3JvbGxMZWZ0JywgJ3BhZ2VYT2Zmc2V0Jyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCArIHNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20gKyBzY3JvbGxUb3BcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEJlaGluZFBvaW50KHBvaW50LCB4LCB5KSB7XG4gICAgICBpZiAoIXggJiYgIXkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgcCA9IHBvaW50IHx8IHt9LFxuICAgICAgICBzdGF0ZSA9IHAuY2xhc3NOYW1lLFxuICAgICAgICBlbDtcbiAgICAgIHAuY2xhc3NOYW1lICs9ICcgJyArIG8uY2xhc3Nlcy5oaWRlO1xuICAgICAgZWwgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgICAgcC5jbGFzc05hbWUgPSBzdGF0ZTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVnRXZlbnQoZWwsIG9wLCB0eXBlLCBmbikge1xuICAgIHZhciB0b3VjaCA9IHtcbiAgICAgICAgbW91c2V1cDogJ3RvdWNoZW5kJyxcbiAgICAgICAgbW91c2Vkb3duOiAndG91Y2hzdGFydCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ3RvdWNobW92ZSdcbiAgICAgIH0sXG4gICAgICAkZWwgPSBhbmd1bGFyLmVsZW1lbnQoZWwpO1xuXG4gICAgaWYodHlwZSAhPT0gJ3doZWVsJyl7JGVsW29wXSh0b3VjaFt0eXBlXSwgZm4pfTtcbiAgICAkZWxbb3BdKHR5cGUsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ldmVyKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsd2F5cygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRFbChlbCkge1xuICAgIHJldHVybiBlbC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbWFudWFsbHkoKTtcblxuICAgIGZ1bmN0aW9uIG1hbnVhbGx5KCkge1xuICAgICAgdmFyIHNpYmxpbmcgPSBlbDtcbiAgICAgIGRvIHtcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICB9IHdoaWxlIChzaWJsaW5nICYmIHNpYmxpbmcubm9kZVR5cGUgIT09IDEpO1xuICAgICAgcmV0dXJuIHNpYmxpbmc7XG4gICAgfVxuICB9XG5cbiAgLy9DYW5ub3QgdXNlIGFuZ3VsYXIuaXNFbGVtZW50IGJlY2F1c2Ugd2UgbmVlZCB0byBjaGVjayBwbGFpbiBkb20gZWxlbWVudCwgbm8galFsaXRlIHdyYXBwZWQgIFxuICBmdW5jdGlvbiBpc0VsZW1lbnQobykge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdvYmplY3QnID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy9ET00yXG4gICAgICBvICYmIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09ICdzdHJpbmcnXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NOYW1lLmluZGV4T2YoJyAnICsgY2xhc3NOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm1DbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgYW5ndWxhci5lbGVtZW50KGVsKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIHJldHVybiAoJyAnICsgZWwuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSArICcgJykgPiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEV2ZW50SG9zdChlKSB7XG4gICAgLy8gb24gdG91Y2hlbmQgZXZlbnQsIHdlIGhhdmUgdG8gdXNlIGBlLmNoYW5nZWRUb3VjaGVzYFxuICAgIC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcxOTI1NjMvdG91Y2hlbmQtZXZlbnQtcHJvcGVydGllc1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMzRcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF07XG4gICAgfVxuICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb29yZChjb29yZCwgZSkge1xuICAgIHZhciBob3N0ID0gZ2V0RXZlbnRIb3N0KGUpO1xuICAgIHZhciBtaXNzTWFwID0ge1xuICAgICAgcGFnZVg6ICdjbGllbnRYJywgLy8gSUU4XG4gICAgICBwYWdlWTogJ2NsaWVudFknIC8vIElFOFxuICAgIH07XG4gICAgaWYgKGNvb3JkIGluIG1pc3NNYXAgJiYgIShjb29yZCBpbiBob3N0KSAmJiBtaXNzTWFwW2Nvb3JkXSBpbiBob3N0KSB7XG4gICAgICBjb29yZCA9IG1pc3NNYXBbY29vcmRdO1xuICAgIH1cbiAgICByZXR1cm4gaG9zdFtjb29yZF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0V2lkdGgocmVjdCkge1xuICAgIHJldHVybiByZWN0LndpZHRoIHx8IChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJlY3RIZWlnaHQocmVjdCkge1xuICAgIHJldHVybiByZWN0LmhlaWdodCB8fCAocmVjdC5ib3R0b20gLSByZWN0LnRvcCk7XG4gIH1cblxuICBmdW5jdGlvbiBkb21JbmRleE9mKGNoaWxkLCBwYXJlbnQpe1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFuZ3VsYXIuZWxlbWVudChwYXJlbnQpLmNoaWxkcmVuKCksIGNoaWxkKTtcbiAgfVxuXG59KS5kaXJlY3RpdmUoJ2RyYWd1bGFyJywgWydkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbihkcmFndWxhclNlcnZpY2UpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uKCRzY29wZSwgaUVsbSwgaUF0dHJzKSB7XG4gICAgICBkcmFndWxhclNlcnZpY2UoaUVsbVswXSwgJHNjb3BlW2lBdHRycy5kcmFndWxhciB8fCAndW5kZWZpbmVkJ10gfHwgdHJ5SnNvbihpQXR0cnMuZHJhZ3VsYXIpKTtcblxuICAgICAgZnVuY3Rpb24gdHJ5SnNvbihqc29uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLCAnRHJhZ3VsYXI6IG5vdCB2YWxpZCBKU09OIGZvciBvcHRpb25zIScsIGlFbG0pO1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XSk7XG4iXX0=

//# sourceMappingURL=dragular.js.map