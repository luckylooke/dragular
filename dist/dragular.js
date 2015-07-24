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
      _renderTimer, // timer for setTimeout renderMirrorImage
      _isContainer, // internal isContainer
      _dropContainer, // droppable container under drag item
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

    initialContainers = o.containers || (initialContainers ? makeArray(initialContainers) : []);
    if(o.containers){
      initialContainers = makeArray(initialContainers);
    }
    if(o.containersModel){
      o.containersModel = makeArray(o.containersModel);
    }

    initialContainers.forEach(function addMouseDown (container) {
      regEvent(container, 'on', 'mousedown', grab);
    });

    if (o.nameSpace) {
       if (!Array.isArray(o.nameSpace)) {
          o.nameSpace = [o.nameSpace];
       }
      o.nameSpace.forEach(function eachNameSpace (nameSpace) {
        if (!containersNameSpaced[nameSpace]) {
          containersNameSpaced[nameSpace] = [];
        }
        Array.prototype.push.apply(containersNameSpaced[nameSpace], initialContainers);
        _containers[nameSpace] = containersNameSpaced[nameSpace];
      });
      _isContainer = isContainerNameSpaced;
    }else{
      _containers = initialContainers;
      _isContainer = isContainer;
    }

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
      return api.containers.indexOf(el) !== -1 || o.isContainer(el);
    }

    function isContainerNameSpaced(el) {
      var nameSpace;
      for (nameSpace in api.containers) {
          if (api.containers.hasOwnProperty(nameSpace) && api.containers[nameSpace].indexOf(el) !== -1) {
              return true;
          }
      }
      if(o.isContainer(el)){
        return true;
      }
      return false;
    }

    function events(rem) {
      var op = rem ? 'off' : 'on';
      regEvent(documentElement, op, 'mouseup', release);
    }

    function destroy() {
      events(true);
      api.removeContainer(_containers);
      release({});
    }

    function grab(e) {
      e = e || window.event;
      var item = e.target;

      if ((e.which !== 0 && e.which !== 1) || e.metaKey || e.ctrlKey) {
        return; // we only care about honest-to-god left clicks and touch events
      }
      if (start(item) !== true) {
        return;
      }

      if (!o.direction) {
        var parent = item.parentElement,
          parentHeight = parent.offsetHeight,
          parentWidth = parent.offsetWidth,
          childHeight = item.clientHeight,
          childWidth = item.clientWidth;
        o.direction = parentHeight / childHeight < parentWidth / childWidth ? 'horizontal' : 'vertical';
      }

      var offset = getOffset(_item);
      _offsetX = getCoord('pageX', e) - offset.left;
      _offsetY = getCoord('pageY', e) - offset.top;
      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);
      if (o.boundingBox) {
        _offsetXr = getCoord('pageX', e) - offset.right;
        _offsetYb = getCoord('pageY', e) - offset.bottom;
      }

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
        return false;
      }

      if (_isContainer(item)) {
        return false; // don't drag container itself
      }
      while (!_isContainer(item.parentElement)) {
        if (o.invalid(item, handle)) {
          return false;
        }
        item = item.parentElement; // drag target should be a top element
        if (!item) {
          return;
        }

      }
      if (o.invalid(item, handle)) {
        return false;
      }

      var container = item.parentElement,
        movable = o.moves(item, container, handle);
      if (!movable) {
        return false;
      }

      end();

      if (o.containersModel){
        var containerIndex = initialContainers.indexOf(container),
          itemIndex = Array.prototype.indexOf.call(angular.element(item.parentElement).children(), item);

        _initialIndex = _currentIndex = itemIndex;
        _sourceModel = o.containersModel[containerIndex];
        _itemModel = _sourceModel[itemIndex];
        if(o.copy){
          _copyModel = angular.copy(_itemModel);
        }
      }

      if (o.copy) {
        _copy = item.cloneNode(true);
        addClass(_copy, o.classes.transit);
        if (o.scope) {
          o.scope.$emit('cloned', _copy, item);
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
      if (!api.dragging) {
        return;
      }
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
        drop(item, dropTarget);
      } else if (o.removeOnSpill) {
        remove();
      } else {
        cancel();
      }
      if (o.dragOverClasses && _lastOverElem) {
        rmClass(_lastOverElem, _lastOverClass);
        _dropContainer = null;
        _lastOverElem = null;
      }
    }

    function drop(item, target) {
      if (o.scope && isInitialPlacement(target)) {
        o.scope.$emit('cancel', item, _source);
      } else if (o.scope) {
        o.scope.$emit('drop', item, target, _source);
      }
      cleanup();
    }

    function remove() {
      if (!api.dragging) {
        return;
      }
      var item = _copy || _item,
        parent = item.parentElement;
      if (parent) {
        parent.removeChild(item);
      }
      if(o.containersModel && !o.copy){
        _sourceModel.splice(_sourceModel.indexOf(_itemModel),1);
      }
      if (o.scope) {
        o.scope.$emit(o.copy ? 'cancel' : 'remove', item, parent);
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
        parent.removeChild(_copy);
      }
      var initial = isInitialPlacement(parent);
      if (initial === false && o.copy === false && reverts) {
        _source.insertBefore(item, _initialSibling);
        if(o.containersModel){
          _sourceModel.splice(_initialIndex, 1, _itemModel);
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
      if (_renderTimer) {
        clearTimeout(_renderTimer);
      }
      _source = _item = _copy = _initialSibling = _currentSibling = _sourceModel = _itemModel = _copyModel = _initialIndex = _currentIndex = _renderTimer = null;

      api.dragging = false;
      if (o.scope) {
        o.scope.$emit('dragend', item);
      }
    }

    function isInitialPlacement(target, s) {
      var sibling;
      if (s !== void 0) {
        sibling = s;
      } else if (_mirror) {
        sibling = _currentSibling;
      } else {
        sibling = nextEl(_item || _copy);
      }
      return target === _source && sibling === _initialSibling;
    }

    function findDropTarget(elementBehindCursor, clientX, clientY) {
      var target = elementBehindCursor;
      while (target && !accepted()) {
        target = target.parentElement;
      }
      return target;

      function accepted() {
        var accepts = false;

        if (_isContainer(target)) { // is droppable?
          var immediate = getImmediateChild(target, elementBehindCursor),
            reference = getReference(target, immediate, clientX, clientY),
            initial = isInitialPlacement(target, reference);
          accepts = initial ? true : o.accepts(_item, target, _source, reference, _itemModel, _sourceModel);
        }

        if (o.dragOverClasses &&
          hasClass(target, o.classes.overActive) &&
          target !== _lastOverElem) {

          if (_lastOverElem) {
            rmClass(_lastOverElem, _lastOverClass);
          }

          _lastOverClass = accepts ? o.classes.overAccepts : o.classes.overDeclines;
          addClass(target, _lastOverClass);
          _dropContainer = accepts ? target : null;
          _lastOverElem = target;
        }
        return accepts;
      }
    }

    function findDropTargetModel(target) {
      var targetModel = false;
      if(o.nameSpace){
        o.nameSpace.forEach(function findDropTargetModelInNameSpace (nameSpace) {
          if(!targetModel && _containers[nameSpace].indexOf(target) !== -1){
            targetModel = _containers[nameSpace][_containers[nameSpace].indexOf(target)];
          }
        });
      }else{
        if(_containers.indexOf(target) !== -1){
            targetModel = _containers[_containers.indexOf(target)];
          }
      }

      if(!targetModel && o.isContainerModel){
        var scope = angular.element(target).scope() || angular.element(target).isolateScope();
        if(scope){
          targetModel = scope[o.isContainerModel];
        }
      }
      return targetModel;
    }

    function drag(e) {
      if (!_mirror) {
        return;
      }
      e = e || window.event;

      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);

      var x = _clientX - _offsetX,
        y = _clientY - _offsetY,
        pageX,
        pageY,
        offsetBox;

      if (o.boundingBox) {
        pageX = getCoord('pageX', e);
        pageY = getCoord('pageY', e);
        offsetBox = getOffset(o.boundingBox);
      }

      if (!o.lockY) {
        if (!o.boundingBox || (pageX > offsetBox.left + _offsetX && pageX < offsetBox.right + _offsetXr)) {
          _mirror.style.left = x + 'px';
        } else if (o.boundingBox) { // in case user scroll
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
        } else if (o.boundingBox) { // in case user scroll
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

      if (dropTarget === _source && o.copy) {
        return;
      }

      var reference,
        immediate = getImmediateChild(dropTarget, elementBehindCursor);

      if(o.containersModel){
        var itemModel = _copyModel || _itemModel,
          targetModel = findDropTargetModel(target),
          referenceIndex = targetModel ? targetModel.indexOf(_itemModel) : 0;
      }

      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, _clientX, _clientY);
      } else if (o.revertOnSpill === true && !o.copy) {
        reference = _initialSibling;
        dropTarget = _source;
        if(o.containersModel){
          referenceIndex = _initialIndex;
          targetModel = _sourceModel;
        }
      } else {
        if ((o.copy || o.removeOnSpill === true) && item.parentElement !== null) {
          item.parentElement.removeChild(item);
          if(o.containersModel){
            targetModel.splice(referenceIndex, 1);
          }
        }
        return;
      }
      if (reference === null || reference !== item && reference !== nextEl(item)) {
        _currentSibling = reference;
        dropTarget.insertBefore(item, reference);

        if(o.containersModel){
          _currentIndex = referenceIndex;
          targetModel.splice(referenceIndex, 1, _itemModel);
        }

        if (o.scope) {
          o.scope.$emit('shadow', item, dropTarget);
        }
      }
    }

    function scrollContainer(e){   
      _dropContainer.scrollTop += e.deltaY;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkcmFndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBkcmFndWxhciBNb2R1bGUgYnkgTHVja3lsb29rZSBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZVxuICpcbiAqIEFuZ3VsYXIgdmVyc2lvbiBvZiBkcmFndWxhIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2RyYWd1bGFyTW9kdWxlJywgW10pLmZhY3RvcnkoJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIGRyYWd1bGEoKSB7XG5cbiAgdmFyIGNvbnRhaW5lcnNOYW1lU3BhY2VkID0ge30sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnNcbiAgICAgIF9taXJyb3I7IC8vIG1pcnJvciBpbWFnZVxuXG4gIHJldHVybiBmdW5jdGlvbihpbml0aWFsQ29udGFpbmVycywgb3B0aW9ucykge1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgIUFycmF5LmlzQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpICYmICFhbmd1bGFyLmlzRWxlbWVudChpbml0aWFsQ29udGFpbmVycykgJiYgIWluaXRpYWxDb250YWluZXJzWzBdKSB7XG4gICAgICAvLyB0aGVuIGNvbnRhaW5lcnMgYXJlIG5vdCBwcm92aWRlZCwgb25seSBvcHRpb25zXG4gICAgICBvcHRpb25zID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgICBpbml0aWFsQ29udGFpbmVycyA9IFtdO1xuICAgIH1cblxuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIF9zb3VyY2UsIC8vIHNvdXJjZSBjb250YWluZXJcbiAgICAgIF9pdGVtLCAvLyBpdGVtIGJlaW5nIGRyYWdnZWRcbiAgICAgIF9zb3VyY2VNb2RlbCwgLy8gc291cmNlIGNvbnRhaW5lciBtb2RlbFxuICAgICAgX2l0ZW1Nb2RlbCwgLy8gaXRlbS1tb2RlbCBiZWluZyBkcmFnZ2VkXG4gICAgICBfb2Zmc2V0WCwgLy8gcmVmZXJlbmNlIHhcbiAgICAgIF9vZmZzZXRZLCAvLyByZWZlcmVuY2UgeVxuICAgICAgX29mZnNldFhyLCAvLyByZWZlcmVuY2UgeCByaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX29mZnNldFliLCAvLyByZWZlcmVuY2UgeSBib3R0b20gZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9jbGllbnRYLCAvLyBjYWNoZSBjbGllbnQgeCwgaW5pdCBhdCBncmFiLCB1cGRhdGUgYXQgZHJhZ1xuICAgICAgX2NsaWVudFksIC8vIGNhY2hlIGNsaWVudCB5LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfbWlycm9yV2lkdGgsIC8vIG1pcnJvciB3aWR0aCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX21pcnJvckhlaWdodCwgLy8gbWlycm9yIGhlaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2luaXRpYWxTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50U2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgbm93XG4gICAgICBfaW5pdGlhbEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggd2hlbiBncmFiYmVkXG4gICAgICBfY3VycmVudEluZGV4LCAvLyByZWZlcmVuY2UgbW9kZWwgaW5kZXggbm93XG4gICAgICBfbGFzdE92ZXJFbGVtLCAvLyBsYXN0IGVsZW1lbnQgYmVoaW5kIHRoZSBjdXJzb3IgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2xhc3RPdmVyQ2xhc3MsIC8vIGxhc3Qgb3ZlckNsYXNzIHVzZWQgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2NvcHksIC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICAgICAgX2NvcHlNb2RlbCwgLy8gaXRlbS1tb2RlbCB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29udGFpbmVycyA9IHt9LCAvLyBjb250YWluZXJzIG1hbmFnZWQgYnkgdGhlIGRyYWtlXG4gICAgICBfcmVuZGVyVGltZXIsIC8vIHRpbWVyIGZvciBzZXRUaW1lb3V0IHJlbmRlck1pcnJvckltYWdlXG4gICAgICBfaXNDb250YWluZXIsIC8vIGludGVybmFsIGlzQ29udGFpbmVyXG4gICAgICBfZHJvcENvbnRhaW5lciwgLy8gZHJvcHBhYmxlIGNvbnRhaW5lciB1bmRlciBkcmFnIGl0ZW1cbiAgICAgIGRlZmF1bHRDbGFzc2VzID0ge1xuICAgICAgICBtaXJyb3I6ICdndS1taXJyb3InLFxuICAgICAgICBoaWRlOiAnZ3UtaGlkZScsXG4gICAgICAgIHVuc2VsZWN0YWJsZTogJ2d1LXVuc2VsZWN0YWJsZScsXG4gICAgICAgIHRyYW5zaXQ6ICdndS10cmFuc2l0JyxcbiAgICAgICAgb3ZlckFjdGl2ZTogJ2d1LW92ZXItYWN0aXZlJyxcbiAgICAgICAgb3ZlckFjY2VwdHM6ICdndS1vdmVyLWFjY2VwdCcsXG4gICAgICAgIG92ZXJEZWNsaW5lczogJ2d1LW92ZXItZGVjbGluZSdcbiAgICAgIH0sXG4gICAgICBvID0geyAvLyBvcHRpb25zXG4gICAgICAgIGNsYXNzZXM6IGRlZmF1bHRDbGFzc2VzLFxuICAgICAgICBjb250YWluZXJzOiBmYWxzZSxcbiAgICAgICAgbW92ZXM6IGFsd2F5cyxcbiAgICAgICAgYWNjZXB0czogYWx3YXlzLFxuICAgICAgICBpc0NvbnRhaW5lcjogbmV2ZXIsXG4gICAgICAgIGNvcHk6IGZhbHNlLFxuICAgICAgICBkZWxheTogZmFsc2UsXG4gICAgICAgIGludmFsaWQ6IGludmFsaWRUYXJnZXQsXG4gICAgICAgIHJldmVydE9uU3BpbGw6IGZhbHNlLFxuICAgICAgICByZW1vdmVPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgZHJhZ092ZXJDbGFzc2VzOiBmYWxzZSxcbiAgICAgICAgbG9ja1g6IGZhbHNlLFxuICAgICAgICBsb2NrWTogZmFsc2UsXG4gICAgICAgIGJvdW5kaW5nQm94OiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiBmYWxzZVxuICAgICAgfTtcblxuICAgIGlmICghaXNFbGVtZW50KG8uYm91bmRpbmdCb3gpKSB7XG4gICAgICBvLmJvdW5kaW5nQm94ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmNsYXNzZXMpIHtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRlZmF1bHRDbGFzc2VzLCBvcHRpb25zLmNsYXNzZXMpO1xuICAgICAgYW5ndWxhci5leHRlbmQob3B0aW9ucy5jbGFzc2VzLCBkZWZhdWx0Q2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgYW5ndWxhci5leHRlbmQobywgb3B0aW9ucyk7XG5cbiAgICBpZiAoby5kZWxheSA9PT0gdHJ1ZSkge1xuICAgICAgby5kZWxheSA9IDMwMDtcbiAgICB9XG5cbiAgICBpbml0aWFsQ29udGFpbmVycyA9IG8uY29udGFpbmVycyB8fCAoaW5pdGlhbENvbnRhaW5lcnMgPyBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpIDogW10pO1xuICAgIGlmKG8uY29udGFpbmVycyl7XG4gICAgICBpbml0aWFsQ29udGFpbmVycyA9IG1ha2VBcnJheShpbml0aWFsQ29udGFpbmVycyk7XG4gICAgfVxuICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgIG8uY29udGFpbmVyc01vZGVsID0gbWFrZUFycmF5KG8uY29udGFpbmVyc01vZGVsKTtcbiAgICB9XG5cbiAgICBpbml0aWFsQ29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIGFkZE1vdXNlRG93biAoY29udGFpbmVyKSB7XG4gICAgICByZWdFdmVudChjb250YWluZXIsICdvbicsICdtb3VzZWRvd24nLCBncmFiKTtcbiAgICB9KTtcblxuICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvLm5hbWVTcGFjZSkpIHtcbiAgICAgICAgICBvLm5hbWVTcGFjZSA9IFtvLm5hbWVTcGFjZV07XG4gICAgICAgfVxuICAgICAgby5uYW1lU3BhY2UuZm9yRWFjaChmdW5jdGlvbiBlYWNoTmFtZVNwYWNlIChuYW1lU3BhY2UpIHtcbiAgICAgICAgaWYgKCFjb250YWluZXJzTmFtZVNwYWNlZFtuYW1lU3BhY2VdKSB7XG4gICAgICAgICAgY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0sIGluaXRpYWxDb250YWluZXJzKTtcbiAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXSA9IGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV07XG4gICAgICB9KTtcbiAgICAgIF9pc0NvbnRhaW5lciA9IGlzQ29udGFpbmVyTmFtZVNwYWNlZDtcbiAgICB9ZWxzZXtcbiAgICAgIF9jb250YWluZXJzID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgICBfaXNDb250YWluZXIgPSBpc0NvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBldmVudHMoKTtcblxuICAgIHZhciBhcGkgPSB7XG4gICAgICBhZGRDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdhZGQnKSxcbiAgICAgIHJlbW92ZUNvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ3JlbW92ZScpLFxuICAgICAgY29udGFpbmVyczogX2NvbnRhaW5lcnMsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGNhbmNlbDogY2FuY2VsLFxuICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHJldHVybiBhcGk7XG5cblxuICAgIGZ1bmN0aW9uIG1ha2VBcnJheShhbGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFsbCkpIHtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICAgIH1cbiAgICAgIGlmIChhbGwubGVuZ3RoKSB7IC8vIGlzIGFycmF5LWxpa2VcbiAgICAgICAgdmFyIGlBbGwgPSBhbGwubGVuZ3RoLFxuICAgICAgICAgIG5ld0FycmF5ID0gW107XG4gICAgICAgIHdoaWxlIChpQWxsKSB7XG4gICAgICAgICAgaUFsbC0tO1xuICAgICAgICAgIG5ld0FycmF5LnB1c2goYWxsW2lBbGxdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICB9IGVsc2UgeyAvLyBpcyBvbmUgZWxlbWVudFxuICAgICAgICByZXR1cm4gW2FsbF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFuaXB1bGF0ZUNvbnRhaW5lcnMob3ApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhZGRPclJlbW92ZShhbGwpIHtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSBBcnJheS5pc0FycmF5KGFsbCkgPyBhbGwgOiBtYWtlQXJyYXkoYWxsKTtcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgICAgICAgaWYoby5uYW1lU3BhY2Upe1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG8ubmFtZVNwYWNlLCBmdW5jdGlvbiBhZGRSZW1vdmVOYW1lc3BhY2VkIChjb250YWluZXJzLCBuYW1lU3BhY2UpIHtcbiAgICAgICAgICAgICAgaWYgKG9wID09PSAnYWRkJykge1xuICAgICAgICAgICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0ucHVzaChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLmFkZENvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfY29udGFpbmVyc1tuYW1lU3BhY2VdLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLnJlbW92ZUNvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgIF9jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UuYWRkQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX2NvbnRhaW5lcnMuc3BsaWNlKF9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSwgMSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLnJlbW92ZUNvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NvbnRhaW5lcihlbCkge1xuICAgICAgcmV0dXJuIGFwaS5jb250YWluZXJzLmluZGV4T2YoZWwpICE9PSAtMSB8fCBvLmlzQ29udGFpbmVyKGVsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NvbnRhaW5lck5hbWVTcGFjZWQoZWwpIHtcbiAgICAgIHZhciBuYW1lU3BhY2U7XG4gICAgICBmb3IgKG5hbWVTcGFjZSBpbiBhcGkuY29udGFpbmVycykge1xuICAgICAgICAgIGlmIChhcGkuY29udGFpbmVycy5oYXNPd25Qcm9wZXJ0eShuYW1lU3BhY2UpICYmIGFwaS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZihlbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKG8uaXNDb250YWluZXIoZWwpKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZlbnRzKHJlbSkge1xuICAgICAgdmFyIG9wID0gcmVtID8gJ29mZicgOiAnb24nO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNldXAnLCByZWxlYXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZXZlbnRzKHRydWUpO1xuICAgICAgYXBpLnJlbW92ZUNvbnRhaW5lcihfY29udGFpbmVycyk7XG4gICAgICByZWxlYXNlKHt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiKGUpIHtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIHZhciBpdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgIGlmICgoZS53aGljaCAhPT0gMCAmJiBlLndoaWNoICE9PSAxKSB8fCBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybjsgLy8gd2Ugb25seSBjYXJlIGFib3V0IGhvbmVzdC10by1nb2QgbGVmdCBjbGlja3MgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgfVxuICAgICAgaWYgKHN0YXJ0KGl0ZW0pICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvLmRpcmVjdGlvbikge1xuICAgICAgICB2YXIgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgIHBhcmVudEhlaWdodCA9IHBhcmVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgcGFyZW50V2lkdGggPSBwYXJlbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgY2hpbGRIZWlnaHQgPSBpdGVtLmNsaWVudEhlaWdodCxcbiAgICAgICAgICBjaGlsZFdpZHRoID0gaXRlbS5jbGllbnRXaWR0aDtcbiAgICAgICAgby5kaXJlY3Rpb24gPSBwYXJlbnRIZWlnaHQgLyBjaGlsZEhlaWdodCA8IHBhcmVudFdpZHRoIC8gY2hpbGRXaWR0aCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZzZXQgPSBnZXRPZmZzZXQoX2l0ZW0pO1xuICAgICAgX29mZnNldFggPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5sZWZ0O1xuICAgICAgX29mZnNldFkgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC50b3A7XG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG4gICAgICBpZiAoby5ib3VuZGluZ0JveCkge1xuICAgICAgICBfb2Zmc2V0WHIgPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5yaWdodDtcbiAgICAgICAgX29mZnNldFliID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSkgLSBvZmZzZXQuYm90dG9tO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG8uZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIF9yZW5kZXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgICAgfSwgby5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJNaXJyb3JBbmREcmFnKGUpO1xuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWlycm9yQW5kRHJhZyhlKSB7XG4gICAgICByZW5kZXJNaXJyb3JJbWFnZSgpO1xuICAgICAgLy8gaW5pdGlhbCBwb3NpdGlvblxuICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0gX2NsaWVudFggLSBfb2Zmc2V0WCArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gX29mZnNldFkgKyAncHgnO1xuXG4gICAgICBkcmFnKGUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RhcnQoaXRlbSkge1xuICAgICAgdmFyIGhhbmRsZSA9IGl0ZW07XG5cbiAgICAgIGlmIChhcGkuZHJhZ2dpbmcgJiYgX21pcnJvcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBkb24ndCBkcmFnIGNvbnRhaW5lciBpdHNlbGZcbiAgICAgIH1cbiAgICAgIHdoaWxlICghX2lzQ29udGFpbmVyKGl0ZW0ucGFyZW50RWxlbWVudCkpIHtcbiAgICAgICAgaWYgKG8uaW52YWxpZChpdGVtLCBoYW5kbGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudEVsZW1lbnQ7IC8vIGRyYWcgdGFyZ2V0IHNob3VsZCBiZSBhIHRvcCBlbGVtZW50XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVyID0gaXRlbS5wYXJlbnRFbGVtZW50LFxuICAgICAgICBtb3ZhYmxlID0gby5tb3ZlcyhpdGVtLCBjb250YWluZXIsIGhhbmRsZSk7XG4gICAgICBpZiAoIW1vdmFibGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBlbmQoKTtcblxuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gaW5pdGlhbENvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLFxuICAgICAgICAgIGl0ZW1JbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYW5ndWxhci5lbGVtZW50KGl0ZW0ucGFyZW50RWxlbWVudCkuY2hpbGRyZW4oKSwgaXRlbSk7XG5cbiAgICAgICAgX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBpdGVtSW5kZXg7XG4gICAgICAgIF9zb3VyY2VNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsW2NvbnRhaW5lckluZGV4XTtcbiAgICAgICAgX2l0ZW1Nb2RlbCA9IF9zb3VyY2VNb2RlbFtpdGVtSW5kZXhdO1xuICAgICAgICBpZihvLmNvcHkpe1xuICAgICAgICAgIF9jb3B5TW9kZWwgPSBhbmd1bGFyLmNvcHkoX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG8uY29weSkge1xuICAgICAgICBfY29weSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBhZGRDbGFzcyhfY29weSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9jb3B5LCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgfVxuXG4gICAgICBfc291cmNlID0gY29udGFpbmVyO1xuICAgICAgX2l0ZW0gPSBpdGVtO1xuICAgICAgX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gbmV4dEVsKGl0ZW0pO1xuXG4gICAgICBhcGkuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJhZycsIF9pdGVtLCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52YWxpZFRhcmdldChlbCkge1xuICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICdBJyB8fCBlbC50YWdOYW1lID09PSAnQlVUVE9OJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgICAgZHJvcChpdGVtLCBpdGVtLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGVhc2UoZSkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSk7XG4gICAgICBpZiAoZHJvcFRhcmdldCAmJiAoby5jb3B5ID09PSBmYWxzZSB8fCBkcm9wVGFyZ2V0ICE9PSBfc291cmNlKSkge1xuICAgICAgICBkcm9wKGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgICAgfSBlbHNlIGlmIChvLnJlbW92ZU9uU3BpbGwpIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cbiAgICAgIGlmIChvLmRyYWdPdmVyQ2xhc3NlcyAmJiBfbGFzdE92ZXJFbGVtKSB7XG4gICAgICAgIHJtQ2xhc3MoX2xhc3RPdmVyRWxlbSwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICBfZHJvcENvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIF9sYXN0T3ZlckVsZW0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyb3AoaXRlbSwgdGFyZ2V0KSB7XG4gICAgICBpZiAoby5zY29wZSAmJiBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlKTtcbiAgICAgIH0gZWxzZSBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcm9wJywgaXRlbSwgdGFyZ2V0LCBfc291cmNlKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsICYmICFvLmNvcHkpe1xuICAgICAgICBfc291cmNlTW9kZWwuc3BsaWNlKF9zb3VyY2VNb2RlbC5pbmRleE9mKF9pdGVtTW9kZWwpLDEpO1xuICAgICAgfVxuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdChvLmNvcHkgPyAnY2FuY2VsJyA6ICdyZW1vdmUnLCBpdGVtLCBwYXJlbnQpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbChyZXZlcnQpIHtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZXZlcnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgPyByZXZlcnQgOiBvLnJldmVydE9uU3BpbGwsXG4gICAgICAgIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHBhcmVudCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9jb3B5KTtcbiAgICAgIH1cbiAgICAgIHZhciBpbml0aWFsID0gaXNJbml0aWFsUGxhY2VtZW50KHBhcmVudCk7XG4gICAgICBpZiAoaW5pdGlhbCA9PT0gZmFsc2UgJiYgby5jb3B5ID09PSBmYWxzZSAmJiByZXZlcnRzKSB7XG4gICAgICAgIF9zb3VyY2UuaW5zZXJ0QmVmb3JlKGl0ZW0sIF9pbml0aWFsU2libGluZyk7XG4gICAgICAgIGlmKG8uY29udGFpbmVyc01vZGVsKXtcbiAgICAgICAgICBfc291cmNlTW9kZWwuc3BsaWNlKF9pbml0aWFsSW5kZXgsIDEsIF9pdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoby5zY29wZSAmJiAoaW5pdGlhbCB8fCByZXZlcnRzKSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlKTtcbiAgICAgIH0gZWxzZSBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcm9wJywgaXRlbSwgcGFyZW50LCBfc291cmNlKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICAgIHJlbW92ZU1pcnJvckltYWdlKCk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBybUNsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIH1cbiAgICAgIGlmIChfcmVuZGVyVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF9yZW5kZXJUaW1lcik7XG4gICAgICB9XG4gICAgICBfc291cmNlID0gX2l0ZW0gPSBfY29weSA9IF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IF9zb3VyY2VNb2RlbCA9IF9pdGVtTW9kZWwgPSBfY29weU1vZGVsID0gX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBfcmVuZGVyVGltZXIgPSBudWxsO1xuXG4gICAgICBhcGkuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2RyYWdlbmQnLCBpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCBzKSB7XG4gICAgICB2YXIgc2libGluZztcbiAgICAgIGlmIChzICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2libGluZyA9IHM7XG4gICAgICB9IGVsc2UgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgc2libGluZyA9IF9jdXJyZW50U2libGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpYmxpbmcgPSBuZXh0RWwoX2l0ZW0gfHwgX2NvcHkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldCA9PT0gX3NvdXJjZSAmJiBzaWJsaW5nID09PSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnRCZWhpbmRDdXJzb3I7XG4gICAgICB3aGlsZSAodGFyZ2V0ICYmICFhY2NlcHRlZCgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcblxuICAgICAgZnVuY3Rpb24gYWNjZXB0ZWQoKSB7XG4gICAgICAgIHZhciBhY2NlcHRzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF9pc0NvbnRhaW5lcih0YXJnZXQpKSB7IC8vIGlzIGRyb3BwYWJsZT9cbiAgICAgICAgICB2YXIgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQodGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZSh0YXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSksXG4gICAgICAgICAgICBpbml0aWFsID0gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcmVmZXJlbmNlKTtcbiAgICAgICAgICBhY2NlcHRzID0gaW5pdGlhbCA/IHRydWUgOiBvLmFjY2VwdHMoX2l0ZW0sIHRhcmdldCwgX3NvdXJjZSwgcmVmZXJlbmNlLCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG8uZHJhZ092ZXJDbGFzc2VzICYmXG4gICAgICAgICAgaGFzQ2xhc3ModGFyZ2V0LCBvLmNsYXNzZXMub3ZlckFjdGl2ZSkgJiZcbiAgICAgICAgICB0YXJnZXQgIT09IF9sYXN0T3ZlckVsZW0pIHtcblxuICAgICAgICAgIGlmIChfbGFzdE92ZXJFbGVtKSB7XG4gICAgICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfbGFzdE92ZXJDbGFzcyA9IGFjY2VwdHMgPyBvLmNsYXNzZXMub3ZlckFjY2VwdHMgOiBvLmNsYXNzZXMub3ZlckRlY2xpbmVzO1xuICAgICAgICAgIGFkZENsYXNzKHRhcmdldCwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICAgIF9kcm9wQ29udGFpbmVyID0gYWNjZXB0cyA/IHRhcmdldCA6IG51bGw7XG4gICAgICAgICAgX2xhc3RPdmVyRWxlbSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjZXB0cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kRHJvcFRhcmdldE1vZGVsKHRhcmdldCkge1xuICAgICAgdmFyIHRhcmdldE1vZGVsID0gZmFsc2U7XG4gICAgICBpZihvLm5hbWVTcGFjZSl7XG4gICAgICAgIG8ubmFtZVNwYWNlLmZvckVhY2goZnVuY3Rpb24gZmluZERyb3BUYXJnZXRNb2RlbEluTmFtZVNwYWNlIChuYW1lU3BhY2UpIHtcbiAgICAgICAgICBpZighdGFyZ2V0TW9kZWwgJiYgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXS5pbmRleE9mKHRhcmdldCkgIT09IC0xKXtcbiAgICAgICAgICAgIHRhcmdldE1vZGVsID0gX2NvbnRhaW5lcnNbbmFtZVNwYWNlXVtfY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICBpZihfY29udGFpbmVycy5pbmRleE9mKHRhcmdldCkgIT09IC0xKXtcbiAgICAgICAgICAgIHRhcmdldE1vZGVsID0gX2NvbnRhaW5lcnNbX2NvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCF0YXJnZXRNb2RlbCAmJiBvLmlzQ29udGFpbmVyTW9kZWwpe1xuICAgICAgICB2YXIgc2NvcGUgPSBhbmd1bGFyLmVsZW1lbnQodGFyZ2V0KS5zY29wZSgpIHx8IGFuZ3VsYXIuZWxlbWVudCh0YXJnZXQpLmlzb2xhdGVTY29wZSgpO1xuICAgICAgICBpZihzY29wZSl7XG4gICAgICAgICAgdGFyZ2V0TW9kZWwgPSBzY29wZVtvLmlzQ29udGFpbmVyTW9kZWxdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0TW9kZWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgICBpZiAoIV9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIHZhciB4ID0gX2NsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IF9jbGllbnRZIC0gX29mZnNldFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgICAgb2Zmc2V0Qm94O1xuXG4gICAgICBpZiAoby5ib3VuZGluZ0JveCkge1xuICAgICAgICBwYWdlWCA9IGdldENvb3JkKCdwYWdlWCcsIGUpO1xuICAgICAgICBwYWdlWSA9IGdldENvb3JkKCdwYWdlWScsIGUpO1xuICAgICAgICBvZmZzZXRCb3ggPSBnZXRPZmZzZXQoby5ib3VuZGluZ0JveCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghby5sb2NrWSkge1xuICAgICAgICBpZiAoIW8uYm91bmRpbmdCb3ggfHwgKHBhZ2VYID4gb2Zmc2V0Qm94LmxlZnQgKyBfb2Zmc2V0WCAmJiBwYWdlWCA8IG9mZnNldEJveC5yaWdodCArIF9vZmZzZXRYcikpIHtcbiAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGluIGNhc2UgdXNlciBzY3JvbGxcbiAgICAgICAgICBpZiAocGFnZVggPCBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIChwYWdlWCAtIG9mZnNldEJveC5sZWZ0KSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX21pcnJvcldpZHRoIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LnJpZ2h0KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIW8ubG9ja1gpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWSA+IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSAmJiBwYWdlWSA8IG9mZnNldEJveC5ib3R0b20gKyBfb2Zmc2V0WWIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGluIGNhc2UgdXNlciBzY3JvbGxcbiAgICAgICAgICBpZiAocGFnZVkgPCBvZmZzZXRCb3gudG9wICsgX29mZnNldFkpIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSAocGFnZVkgLSBvZmZzZXRCb3gudG9wKSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSBfbWlycm9ySGVpZ2h0IC0gKHBhZ2VZIC0gb2Zmc2V0Qm94LmJvdHRvbSkgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBlbGVtZW50QmVoaW5kQ3Vyc29yID0gZ2V0RWxlbWVudEJlaGluZFBvaW50KF9taXJyb3IsIF9jbGllbnRYLCBfY2xpZW50WSksXG4gICAgICAgIGRyb3BUYXJnZXQgPSBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuXG4gICAgICBpZiAoZHJvcFRhcmdldCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVmZXJlbmNlLFxuICAgICAgICBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKTtcblxuICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICB2YXIgaXRlbU1vZGVsID0gX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsLFxuICAgICAgICAgIHRhcmdldE1vZGVsID0gZmluZERyb3BUYXJnZXRNb2RlbCh0YXJnZXQpLFxuICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gdGFyZ2V0TW9kZWwgPyB0YXJnZXRNb2RlbC5pbmRleE9mKF9pdGVtTW9kZWwpIDogMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgaW1tZWRpYXRlLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuICAgICAgfSBlbHNlIGlmIChvLnJldmVydE9uU3BpbGwgPT09IHRydWUgJiYgIW8uY29weSkge1xuICAgICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICAgIGRyb3BUYXJnZXQgPSBfc291cmNlO1xuICAgICAgICBpZihvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfaW5pdGlhbEluZGV4O1xuICAgICAgICAgIHRhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKG8uY29weSB8fCBvLnJlbW92ZU9uU3BpbGwgPT09IHRydWUpICYmIGl0ZW0ucGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgICBpZihvLmNvbnRhaW5lcnNNb2RlbCl7XG4gICAgICAgICAgICB0YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8IHJlZmVyZW5jZSAhPT0gaXRlbSAmJiByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSkge1xuICAgICAgICBfY3VycmVudFNpYmxpbmcgPSByZWZlcmVuY2U7XG4gICAgICAgIGRyb3BUYXJnZXQuaW5zZXJ0QmVmb3JlKGl0ZW0sIHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYoby5jb250YWluZXJzTW9kZWwpe1xuICAgICAgICAgIF9jdXJyZW50SW5kZXggPSByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgICB0YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEsIF9pdGVtTW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdzaGFkb3cnLCBpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbENvbnRhaW5lcihlKXsgICBcbiAgICAgIF9kcm9wQ29udGFpbmVyLnNjcm9sbFRvcCArPSBlLmRlbHRhWTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZWN0ID0gX2l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBfbWlycm9yID0gX2l0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgX21pcnJvcldpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgIF9taXJyb3JIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgIF9taXJyb3Iuc3R5bGUud2lkdGggPSBnZXRSZWN0V2lkdGgocmVjdCkgKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS5oZWlnaHQgPSBnZXRSZWN0SGVpZ2h0KHJlY3QpICsgJ3B4JztcbiAgICAgIHJtQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgYWRkQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLm1pcnJvcik7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKF9taXJyb3IpO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCAnb24nLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICBhZGRDbGFzcyhib2R5LCBvLmNsYXNzZXMudW5zZWxlY3RhYmxlKTtcbiAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvbicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfbWlycm9yLCBfaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWlycm9ySW1hZ2UoKSB7XG4gICAgICBpZiAoX21pcnJvcikge1xuICAgICAgICBybUNsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvZmYnLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvZmYnLCAnd2hlZWwnLCBzY3JvbGxDb250YWluZXIpO1xuICAgICAgICBfbWlycm9yLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX21pcnJvcik7XG4gICAgICAgIF9taXJyb3IgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIHRhcmdldCkge1xuICAgICAgdmFyIGltbWVkaWF0ZSA9IHRhcmdldDtcbiAgICAgIHdoaWxlIChpbW1lZGlhdGUgIT09IGRyb3BUYXJnZXQgJiYgaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQgIT09IGRyb3BUYXJnZXQpIHtcbiAgICAgICAgaW1tZWRpYXRlID0gaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAoaW1tZWRpYXRlID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW1tZWRpYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCB0YXJnZXQsIHgsIHkpIHtcbiAgICAgIHZhciBob3Jpem9udGFsID0gby5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgICAgIHZhciByZWZlcmVuY2UgPSB0YXJnZXQgIT09IGRyb3BUYXJnZXQgPyBpbnNpZGUoKSA6IG91dHNpZGUoKTtcbiAgICAgIHJldHVybiByZWZlcmVuY2U7XG5cbiAgICAgIGZ1bmN0aW9uIG91dHNpZGUoKSB7IC8vIHNsb3dlciwgYnV0IGFibGUgdG8gZmlndXJlIG91dCBhbnkgcG9zaXRpb25cbiAgICAgICAgdmFyIGxlbiA9IGRyb3BUYXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGVsO1xuICAgICAgICB2YXIgcmVjdDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgZWwgPSBkcm9wVGFyZ2V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiByZWN0LmxlZnQgPiB4KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiByZWN0LnRvcCA+IHkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGluc2lkZSgpIHsgLy8gZmFzdGVyLCBidXQgb25seSBhdmFpbGFibGUgaWYgZHJvcHBlZCBpbnNpZGUgYSBjaGlsZCBlbGVtZW50XG4gICAgICAgIHZhciByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHggPiByZWN0LmxlZnQgKyBnZXRSZWN0V2lkdGgocmVjdCkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh5ID4gcmVjdC50b3AgKyBnZXRSZWN0SGVpZ2h0KHJlY3QpIC8gMik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmUoYWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGFmdGVyID8gbmV4dEVsKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsKHNjcm9sbFByb3AsIG9mZnNldFByb3ApIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93W29mZnNldFByb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93W29mZnNldFByb3BdO1xuICAgICAgfVxuICAgICAgaWYgKGRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib2R5W3Njcm9sbFByb3BdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKCdzY3JvbGxUb3AnLCAncGFnZVlPZmZzZXQnKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbCgnc2Nyb2xsTGVmdCcsICdwYWdlWE9mZnNldCcpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tICsgc2Nyb2xsVG9wXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRCZWhpbmRQb2ludChwb2ludCwgeCwgeSkge1xuICAgICAgaWYgKCF4ICYmICF5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHAgPSBwb2ludCB8fCB7fSxcbiAgICAgICAgc3RhdGUgPSBwLmNsYXNzTmFtZSxcbiAgICAgICAgZWw7XG4gICAgICBwLmNsYXNzTmFtZSArPSAnICcgKyBvLmNsYXNzZXMuaGlkZTtcbiAgICAgIGVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgIHAuY2xhc3NOYW1lID0gc3RhdGU7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZ0V2ZW50KGVsLCBvcCwgdHlwZSwgZm4pIHtcbiAgICB2YXIgdG91Y2ggPSB7XG4gICAgICAgIG1vdXNldXA6ICd0b3VjaGVuZCcsXG4gICAgICAgIG1vdXNlZG93bjogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3VzZW1vdmU6ICd0b3VjaG1vdmUnXG4gICAgICB9LFxuICAgICAgJGVsID0gYW5ndWxhci5lbGVtZW50KGVsKTtcblxuICAgIGlmKHR5cGUgIT09ICd3aGVlbCcpeyRlbFtvcF0odG91Y2hbdHlwZV0sIGZuKX07XG4gICAgJGVsW29wXSh0eXBlLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXZlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0RWwoZWwpIHtcbiAgICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG5cbiAgICBmdW5jdGlvbiBtYW51YWxseSgpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgICBkbyB7XG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vQ2Fubm90IHVzZSBhbmd1bGFyLmlzRWxlbWVudCBiZWNhdXNlIHdlIG5lZWQgdG8gY2hlY2sgcGxhaW4gZG9tIGVsZW1lbnQsIG5vIGpRbGl0ZSB3cmFwcGVkICBcbiAgZnVuY3Rpb24gaXNFbGVtZW50KG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0JyA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxuICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTmFtZS5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSkgPT09IC0xKSB7XG4gICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJtQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGFuZ3VsYXIuZWxlbWVudChlbCkucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudEhvc3QoZSkge1xuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgICB2YXIgbWlzc01hcCA9IHtcbiAgICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgICB9O1xuICAgIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RbY29vcmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdFdpZHRoKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0SGVpZ2h0KHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgfHwgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApO1xuICB9XG5cbn0pLmRpcmVjdGl2ZSgnZHJhZ3VsYXInLCBbJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uKGRyYWd1bGFyU2VydmljZSkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24oJHNjb3BlLCBpRWxtLCBpQXR0cnMpIHtcbiAgICAgIGRyYWd1bGFyU2VydmljZShpRWxtWzBdLCAkc2NvcGVbaUF0dHJzLmRyYWd1bGFyIHx8ICd1bmRlZmluZWQnXSB8fCB0cnlKc29uKGlBdHRycy5kcmFndWxhcikpO1xuXG4gICAgICBmdW5jdGlvbiB0cnlKc29uKGpzb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUsICdEcmFndWxhcjogbm90IHZhbGlkIEpTT04gZm9yIG9wdGlvbnMhJywgaUVsbSk7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1dKTtcbiJdfQ==

//# sourceMappingURL=dragular.js.map