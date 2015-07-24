(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/ctibor/projects/adminmode/gulp/node_modules/dragular/dragular.js":[function(require,module,exports){
/* global angular */
'use strict';

/**
 * dragular Module by Luckylooke https://github.com/luckylooke
 *
 * Angular version of dragula https://github.com/bevacqua/dragula
 */

angular.module('dragularModule', []).factory('dragularService', function dragula() {

  var containersNameSpaced = [], // name-spaced containers managed by the drakes
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
      _lastOverElem, // last element behind the cursor (dragOverClasses feature)
      _lastOverClass, // last overClass used (dragOverClasses feature)
      _copy, // item used for copying
      _containers = initialContainers ? makeArray(initialContainers) : [], // containers managed by the drake
      _renderTimer, // timer for setTimeout renderMirrorImage
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
        boundingBox: false
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

    _containers = o.containers || _containers;

    angular.forEach(_containers, function addMouseDown (container) {
      regEvent(container, 'on', 'mousedown', grab);
    });

    if (o.nameSpace) {
      if (!containersNameSpaced[o.nameSpace]) {
        containersNameSpaced[o.nameSpace] = _containers;
      } else {
        Array.prototype.push.apply(containersNameSpaced[o.nameSpace], _containers);
        _containers = containersNameSpaced[o.nameSpace];
      }
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
          if (op === 'add') {
            _containers.push(container);
            console.warn && console.warn('drake.addContainer is deprecated. please access drake.containers directly, instead');
          } else {
            _containers.splice(_containers.indexOf(container), 1);
            console.warn && console.warn('drake.removeContainer is deprecated. please access drake.containers directly, instead');
          }
        });
      };
    }

    function isContainer(el) {
      return api.containers.indexOf(el) !== -1 || o.isContainer(el);
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

      if (isContainer(item)) {
        return false; // don't drag container itself
      }
      while (!isContainer(item.parentElement)) {
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
      _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = null;

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

        if (isContainer(target)) { // is droppable?
          var immediate = getImmediateChild(target, elementBehindCursor),
            reference = getReference(target, immediate, clientX, clientY),
            initial = isInitialPlacement(target, reference);
          accepts = initial ? true : o.accepts(_item, target, _source, reference);
        }

        if (o.dragOverClasses &&
          hasClass(target, o.classes.overActive) &&
          target !== _lastOverElem) {

          if (_lastOverElem) {
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
      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, _clientX, _clientY);
      } else if (o.revertOnSpill === true && !o.copy) {
        reference = _initialSibling;
        dropTarget = _source;
      } else {
        if ((o.copy || o.removeOnSpill === true) && item.parentElement !== null) {
          item.parentElement.removeChild(item);
        }
        return;
      }
      if (reference === null || reference !== item && reference !== nextEl(item)) {
        _currentSibling = reference;
        dropTarget.insertBefore(item, reference);
        if (o.scope) {
          o.scope.$emit('shadow', item, dropTarget);
        }
      }
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
      if (o.scope) {
        o.scope.$emit('cloned', _mirror, _item);
      }
    }

    function removeMirrorImage() {
      if (_mirror) {
        rmClass(body, o.classes.unselectable);
        regEvent(documentElement, 'off', 'mousemove', drag);
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

    $el[op](touch[type], fn);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkcmFndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBkcmFndWxhciBNb2R1bGUgYnkgTHVja3lsb29rZSBodHRwczovL2dpdGh1Yi5jb20vbHVja3lsb29rZVxuICpcbiAqIEFuZ3VsYXIgdmVyc2lvbiBvZiBkcmFndWxhIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2RyYWd1bGFyTW9kdWxlJywgW10pLmZhY3RvcnkoJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uIGRyYWd1bGEoKSB7XG5cbiAgdmFyIGNvbnRhaW5lcnNOYW1lU3BhY2VkID0gW10sIC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnMgbWFuYWdlZCBieSB0aGUgZHJha2VzXG4gICAgICBfbWlycm9yOyAvLyBtaXJyb3IgaW1hZ2VcblxuICByZXR1cm4gZnVuY3Rpb24oaW5pdGlhbENvbnRhaW5lcnMsIG9wdGlvbnMpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxDb250YWluZXJzKSAmJiAhYW5ndWxhci5pc0VsZW1lbnQoaW5pdGlhbENvbnRhaW5lcnMpICYmICFpbml0aWFsQ29udGFpbmVyc1swXSkge1xuICAgICAgLy8gdGhlbiBjb250YWluZXJzIGFyZSBub3QgcHJvdmlkZWQsIG9ubHkgb3B0aW9uc1xuICAgICAgb3B0aW9ucyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBfc291cmNlLCAvLyBzb3VyY2UgY29udGFpbmVyXG4gICAgICBfaXRlbSwgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gICAgICBfb2Zmc2V0WCwgLy8gcmVmZXJlbmNlIHhcbiAgICAgIF9vZmZzZXRZLCAvLyByZWZlcmVuY2UgeVxuICAgICAgX29mZnNldFhyLCAvLyByZWZlcmVuY2UgeCByaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX29mZnNldFliLCAvLyByZWZlcmVuY2UgeSBib3R0b20gZm9yIGJvdW5kaW5nQm94IGZlYXR1cmVcbiAgICAgIF9jbGllbnRYLCAvLyBjYWNoZSBjbGllbnQgeCwgaW5pdCBhdCBncmFiLCB1cGRhdGUgYXQgZHJhZ1xuICAgICAgX2NsaWVudFksIC8vIGNhY2hlIGNsaWVudCB5LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfbWlycm9yV2lkdGgsIC8vIG1pcnJvciB3aWR0aCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX21pcnJvckhlaWdodCwgLy8gbWlycm9yIGhlaWdodCBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2luaXRpYWxTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50U2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgbm93XG4gICAgICBfbGFzdE92ZXJFbGVtLCAvLyBsYXN0IGVsZW1lbnQgYmVoaW5kIHRoZSBjdXJzb3IgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2xhc3RPdmVyQ2xhc3MsIC8vIGxhc3Qgb3ZlckNsYXNzIHVzZWQgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2NvcHksIC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICAgICAgX2NvbnRhaW5lcnMgPSBpbml0aWFsQ29udGFpbmVycyA/IG1ha2VBcnJheShpbml0aWFsQ29udGFpbmVycykgOiBbXSwgLy8gY29udGFpbmVycyBtYW5hZ2VkIGJ5IHRoZSBkcmFrZVxuICAgICAgX3JlbmRlclRpbWVyLCAvLyB0aW1lciBmb3Igc2V0VGltZW91dCByZW5kZXJNaXJyb3JJbWFnZVxuICAgICAgZGVmYXVsdENsYXNzZXMgPSB7XG4gICAgICAgIG1pcnJvcjogJ2d1LW1pcnJvcicsXG4gICAgICAgIGhpZGU6ICdndS1oaWRlJyxcbiAgICAgICAgdW5zZWxlY3RhYmxlOiAnZ3UtdW5zZWxlY3RhYmxlJyxcbiAgICAgICAgdHJhbnNpdDogJ2d1LXRyYW5zaXQnLFxuICAgICAgICBvdmVyQWN0aXZlOiAnZ3Utb3Zlci1hY3RpdmUnLFxuICAgICAgICBvdmVyQWNjZXB0czogJ2d1LW92ZXItYWNjZXB0JyxcbiAgICAgICAgb3ZlckRlY2xpbmVzOiAnZ3Utb3Zlci1kZWNsaW5lJ1xuICAgICAgfSxcbiAgICAgIG8gPSB7IC8vIG9wdGlvbnNcbiAgICAgICAgY2xhc3NlczogZGVmYXVsdENsYXNzZXMsXG4gICAgICAgIGNvbnRhaW5lcnM6IGZhbHNlLFxuICAgICAgICBtb3ZlczogYWx3YXlzLFxuICAgICAgICBhY2NlcHRzOiBhbHdheXMsXG4gICAgICAgIGlzQ29udGFpbmVyOiBuZXZlcixcbiAgICAgICAgY29weTogZmFsc2UsXG4gICAgICAgIGRlbGF5OiBmYWxzZSxcbiAgICAgICAgaW52YWxpZDogaW52YWxpZFRhcmdldCxcbiAgICAgICAgcmV2ZXJ0T25TcGlsbDogZmFsc2UsXG4gICAgICAgIHJlbW92ZU9uU3BpbGw6IGZhbHNlLFxuICAgICAgICBkcmFnT3ZlckNsYXNzZXM6IGZhbHNlLFxuICAgICAgICBsb2NrWDogZmFsc2UsXG4gICAgICAgIGxvY2tZOiBmYWxzZSxcbiAgICAgICAgYm91bmRpbmdCb3g6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgaWYgKCFpc0VsZW1lbnQoby5ib3VuZGluZ0JveCkpIHtcbiAgICAgIG8uYm91bmRpbmdCb3ggPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuY2xhc3Nlcykge1xuICAgICAgYW5ndWxhci5leHRlbmQoZGVmYXVsdENsYXNzZXMsIG9wdGlvbnMuY2xhc3Nlcyk7XG4gICAgICBhbmd1bGFyLmV4dGVuZChvcHRpb25zLmNsYXNzZXMsIGRlZmF1bHRDbGFzc2VzKTtcbiAgICB9XG5cbiAgICBhbmd1bGFyLmV4dGVuZChvLCBvcHRpb25zKTtcblxuICAgIGlmIChvLmRlbGF5ID09PSB0cnVlKSB7XG4gICAgICBvLmRlbGF5ID0gMzAwO1xuICAgIH1cblxuICAgIF9jb250YWluZXJzID0gby5jb250YWluZXJzIHx8IF9jb250YWluZXJzO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKF9jb250YWluZXJzLCBmdW5jdGlvbiBhZGRNb3VzZURvd24gKGNvbnRhaW5lcikge1xuICAgICAgcmVnRXZlbnQoY29udGFpbmVyLCAnb24nLCAnbW91c2Vkb3duJywgZ3JhYik7XG4gICAgfSk7XG5cbiAgICBpZiAoby5uYW1lU3BhY2UpIHtcbiAgICAgIGlmICghY29udGFpbmVyc05hbWVTcGFjZWRbby5uYW1lU3BhY2VdKSB7XG4gICAgICAgIGNvbnRhaW5lcnNOYW1lU3BhY2VkW28ubmFtZVNwYWNlXSA9IF9jb250YWluZXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyc05hbWVTcGFjZWRbby5uYW1lU3BhY2VdLCBfY29udGFpbmVycyk7XG4gICAgICAgIF9jb250YWluZXJzID0gY29udGFpbmVyc05hbWVTcGFjZWRbby5uYW1lU3BhY2VdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cygpO1xuXG4gICAgdmFyIGFwaSA9IHtcbiAgICAgIGFkZENvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ2FkZCcpLFxuICAgICAgcmVtb3ZlQ29udGFpbmVyOiBtYW5pcHVsYXRlQ29udGFpbmVycygncmVtb3ZlJyksXG4gICAgICBjb250YWluZXJzOiBfY29udGFpbmVycyxcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZW5kLFxuICAgICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICBkcmFnZ2luZzogZmFsc2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFwaTtcblxuXG4gICAgZnVuY3Rpb24gbWFrZUFycmF5KGFsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWxsKSkge1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgICAgfVxuICAgICAgaWYgKGFsbC5sZW5ndGgpIHsgLy8gaXMgYXJyYXktbGlrZVxuICAgICAgICB2YXIgaUFsbCA9IGFsbC5sZW5ndGgsXG4gICAgICAgICAgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgd2hpbGUgKGlBbGwpIHtcbiAgICAgICAgICBpQWxsLS07XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChhbGxbaUFsbF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgIH0gZWxzZSB7IC8vIGlzIG9uZSBlbGVtZW50XG4gICAgICAgIHJldHVybiBbYWxsXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYW5pcHVsYXRlQ29udGFpbmVycyhvcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFkZE9yUmVtb3ZlKGFsbCkge1xuICAgICAgICB2YXIgY2hhbmdlcyA9IEFycmF5LmlzQXJyYXkoYWxsKSA/IGFsbCA6IG1ha2VBcnJheShhbGwpO1xuICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICBfY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5hZGRDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9jb250YWluZXJzLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UucmVtb3ZlQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ29udGFpbmVyKGVsKSB7XG4gICAgICByZXR1cm4gYXBpLmNvbnRhaW5lcnMuaW5kZXhPZihlbCkgIT09IC0xIHx8IG8uaXNDb250YWluZXIoZWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2ZW50cyhyZW0pIHtcbiAgICAgIHZhciBvcCA9IHJlbSA/ICdvZmYnIDogJ29uJztcbiAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgb3AsICdtb3VzZXVwJywgcmVsZWFzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGV2ZW50cyh0cnVlKTtcbiAgICAgIGFwaS5yZW1vdmVDb250YWluZXIoX2NvbnRhaW5lcnMpO1xuICAgICAgcmVsZWFzZSh7fSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ3JhYihlKSB7XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICB2YXIgaXRlbSA9IGUudGFyZ2V0O1xuXG4gICAgICBpZiAoKGUud2hpY2ggIT09IDAgJiYgZS53aGljaCAhPT0gMSkgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm47IC8vIHdlIG9ubHkgY2FyZSBhYm91dCBob25lc3QtdG8tZ29kIGxlZnQgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICAgIH1cbiAgICAgIGlmIChzdGFydChpdGVtKSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghby5kaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudCxcbiAgICAgICAgICBwYXJlbnRIZWlnaHQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIHBhcmVudFdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIGNoaWxkSGVpZ2h0ID0gaXRlbS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgY2hpbGRXaWR0aCA9IGl0ZW0uY2xpZW50V2lkdGg7XG4gICAgICAgIG8uZGlyZWN0aW9uID0gcGFyZW50SGVpZ2h0IC8gY2hpbGRIZWlnaHQgPCBwYXJlbnRXaWR0aCAvIGNoaWxkV2lkdGggPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2Zmc2V0ID0gZ2V0T2Zmc2V0KF9pdGVtKTtcbiAgICAgIF9vZmZzZXRYID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSkgLSBvZmZzZXQubGVmdDtcbiAgICAgIF9vZmZzZXRZID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSkgLSBvZmZzZXQudG9wO1xuICAgICAgX2NsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgX2NsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuICAgICAgaWYgKG8uYm91bmRpbmdCb3gpIHtcbiAgICAgICAgX29mZnNldFhyID0gZ2V0Q29vcmQoJ3BhZ2VYJywgZSkgLSBvZmZzZXQucmlnaHQ7XG4gICAgICAgIF9vZmZzZXRZYiA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LmJvdHRvbTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBfcmVuZGVyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlbmRlck1pcnJvckFuZERyYWcoZSk7XG4gICAgICAgIH0sIG8uZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckFuZERyYWcoZSkge1xuICAgICAgcmVuZGVyTWlycm9ySW1hZ2UoKTtcbiAgICAgIC8vIGluaXRpYWwgcG9zaXRpb25cbiAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX29mZnNldFggKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS50b3AgPSBfY2xpZW50WSAtIF9vZmZzZXRZICsgJ3B4JztcblxuICAgICAgZHJhZyhlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGl0ZW0pIHtcbiAgICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuXG4gICAgICBpZiAoYXBpLmRyYWdnaW5nICYmIF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBkb24ndCBkcmFnIGNvbnRhaW5lciBpdHNlbGZcbiAgICAgIH1cbiAgICAgIHdoaWxlICghaXNDb250YWluZXIoaXRlbS5wYXJlbnRFbGVtZW50KSkge1xuICAgICAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50RWxlbWVudDsgLy8gZHJhZyB0YXJnZXQgc2hvdWxkIGJlIGEgdG9wIGVsZW1lbnRcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBpdGVtLnBhcmVudEVsZW1lbnQsXG4gICAgICAgIG1vdmFibGUgPSBvLm1vdmVzKGl0ZW0sIGNvbnRhaW5lciwgaGFuZGxlKTtcbiAgICAgIGlmICghbW92YWJsZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGVuZCgpO1xuXG4gICAgICBpZiAoby5jb3B5KSB7XG4gICAgICAgIF9jb3B5ID0gaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGFkZENsYXNzKF9jb3B5LCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnY2xvbmVkJywgX2NvcHksIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGFzcyhpdGVtLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICB9XG5cbiAgICAgIF9zb3VyY2UgPSBjb250YWluZXI7XG4gICAgICBfaXRlbSA9IGl0ZW07XG4gICAgICBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBuZXh0RWwoaXRlbSk7XG5cbiAgICAgIGFwaS5kcmFnZ2luZyA9IHRydWU7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnJywgX2l0ZW0sIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZhbGlkVGFyZ2V0KGVsKSB7XG4gICAgICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0EnIHx8IGVsLnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICBkcm9wKGl0ZW0sIGl0ZW0ucGFyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVsZWFzZShlKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIF9jbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICAgIF9jbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcblxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBfY2xpZW50WCwgX2NsaWVudFkpLFxuICAgICAgICBkcm9wVGFyZ2V0ID0gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgX2NsaWVudFgsIF9jbGllbnRZKTtcbiAgICAgIGlmIChkcm9wVGFyZ2V0ICYmIChvLmNvcHkgPT09IGZhbHNlIHx8IGRyb3BUYXJnZXQgIT09IF9zb3VyY2UpKSB7XG4gICAgICAgIGRyb3AoaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgICB9IGVsc2UgaWYgKG8ucmVtb3ZlT25TcGlsbCkge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbCgpO1xuICAgICAgfVxuICAgICAgaWYgKG8uZHJhZ092ZXJDbGFzc2VzICYmIF9sYXN0T3ZlckVsZW0pIHtcbiAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgIF9sYXN0T3ZlckVsZW0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyb3AoaXRlbSwgdGFyZ2V0KSB7XG4gICAgICBpZiAoby5zY29wZSAmJiBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlKTtcbiAgICAgIH0gZWxzZSBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcm9wJywgaXRlbSwgdGFyZ2V0LCBfc291cmNlKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoby5jb3B5ID8gJ2NhbmNlbCcgOiAncmVtb3ZlJywgaXRlbSwgcGFyZW50KTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWwocmV2ZXJ0KSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmV2ZXJ0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gcmV2ZXJ0IDogby5yZXZlcnRPblNwaWxsLFxuICAgICAgICBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgIGlmIChwYXJlbnQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfY29weSk7XG4gICAgICB9XG4gICAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudChwYXJlbnQpO1xuICAgICAgaWYgKGluaXRpYWwgPT09IGZhbHNlICYmIG8uY29weSA9PT0gZmFsc2UgJiYgcmV2ZXJ0cykge1xuICAgICAgICBfc291cmNlLmluc2VydEJlZm9yZShpdGVtLCBfaW5pdGlhbFNpYmxpbmcpO1xuICAgICAgfVxuICAgICAgaWYgKG8uc2NvcGUgJiYgKGluaXRpYWwgfHwgcmV2ZXJ0cykpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSk7XG4gICAgICB9IGVsc2UgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJvcCcsIGl0ZW0sIHBhcmVudCwgX3NvdXJjZSk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICByZW1vdmVNaXJyb3JJbWFnZSgpO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgcm1DbGFzcyhpdGVtLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICB9XG4gICAgICBpZiAoX3JlbmRlclRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfcmVuZGVyVGltZXIpO1xuICAgICAgfVxuICAgICAgX3NvdXJjZSA9IF9pdGVtID0gX2NvcHkgPSBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBfcmVuZGVyVGltZXIgPSBudWxsO1xuXG4gICAgICBhcGkuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2RyYWdlbmQnLCBpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCBzKSB7XG4gICAgICB2YXIgc2libGluZztcbiAgICAgIGlmIChzICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2libGluZyA9IHM7XG4gICAgICB9IGVsc2UgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgc2libGluZyA9IF9jdXJyZW50U2libGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpYmxpbmcgPSBuZXh0RWwoX2l0ZW0gfHwgX2NvcHkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldCA9PT0gX3NvdXJjZSAmJiBzaWJsaW5nID09PSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnRCZWhpbmRDdXJzb3I7XG4gICAgICB3aGlsZSAodGFyZ2V0ICYmICFhY2NlcHRlZCgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcblxuICAgICAgZnVuY3Rpb24gYWNjZXB0ZWQoKSB7XG4gICAgICAgIHZhciBhY2NlcHRzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzQ29udGFpbmVyKHRhcmdldCkpIHsgLy8gaXMgZHJvcHBhYmxlP1xuICAgICAgICAgIHZhciBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZCh0YXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKHRhcmdldCwgaW1tZWRpYXRlLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgICAgIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQodGFyZ2V0LCByZWZlcmVuY2UpO1xuICAgICAgICAgIGFjY2VwdHMgPSBpbml0aWFsID8gdHJ1ZSA6IG8uYWNjZXB0cyhfaXRlbSwgdGFyZ2V0LCBfc291cmNlLCByZWZlcmVuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG8uZHJhZ092ZXJDbGFzc2VzICYmXG4gICAgICAgICAgaGFzQ2xhc3ModGFyZ2V0LCBvLmNsYXNzZXMub3ZlckFjdGl2ZSkgJiZcbiAgICAgICAgICB0YXJnZXQgIT09IF9sYXN0T3ZlckVsZW0pIHtcblxuICAgICAgICAgIGlmIChfbGFzdE92ZXJFbGVtKSB7XG4gICAgICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfbGFzdE92ZXJDbGFzcyA9IGFjY2VwdHMgPyBvLmNsYXNzZXMub3ZlckFjY2VwdHMgOiBvLmNsYXNzZXMub3ZlckRlY2xpbmVzO1xuICAgICAgICAgIGFkZENsYXNzKHRhcmdldCwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICAgIF9sYXN0T3ZlckVsZW0gPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY2VwdHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgICBpZiAoIV9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIHZhciB4ID0gX2NsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IF9jbGllbnRZIC0gX29mZnNldFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgICAgb2Zmc2V0Qm94O1xuXG4gICAgICBpZiAoby5ib3VuZGluZ0JveCkge1xuICAgICAgICBwYWdlWCA9IGdldENvb3JkKCdwYWdlWCcsIGUpO1xuICAgICAgICBwYWdlWSA9IGdldENvb3JkKCdwYWdlWScsIGUpO1xuICAgICAgICBvZmZzZXRCb3ggPSBnZXRPZmZzZXQoby5ib3VuZGluZ0JveCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghby5sb2NrWSkge1xuICAgICAgICBpZiAoIW8uYm91bmRpbmdCb3ggfHwgKHBhZ2VYID4gb2Zmc2V0Qm94LmxlZnQgKyBfb2Zmc2V0WCAmJiBwYWdlWCA8IG9mZnNldEJveC5yaWdodCArIF9vZmZzZXRYcikpIHtcbiAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGluIGNhc2UgdXNlciBzY3JvbGxcbiAgICAgICAgICBpZiAocGFnZVggPCBvZmZzZXRCb3gubGVmdCArIF9vZmZzZXRYKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIChwYWdlWCAtIG9mZnNldEJveC5sZWZ0KSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gX21pcnJvcldpZHRoIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LnJpZ2h0KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIW8ubG9ja1gpIHtcbiAgICAgICAgaWYgKCFvLmJvdW5kaW5nQm94IHx8IChwYWdlWSA+IG9mZnNldEJveC50b3AgKyBfb2Zmc2V0WSAmJiBwYWdlWSA8IG9mZnNldEJveC5ib3R0b20gKyBfb2Zmc2V0WWIpKSB7XG4gICAgICAgICAgX21pcnJvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGluIGNhc2UgdXNlciBzY3JvbGxcbiAgICAgICAgICBpZiAocGFnZVkgPCBvZmZzZXRCb3gudG9wICsgX29mZnNldFkpIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSAocGFnZVkgLSBvZmZzZXRCb3gudG9wKSArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSBfbWlycm9ySGVpZ2h0IC0gKHBhZ2VZIC0gb2Zmc2V0Qm94LmJvdHRvbSkgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBlbGVtZW50QmVoaW5kQ3Vyc29yID0gZ2V0RWxlbWVudEJlaGluZFBvaW50KF9taXJyb3IsIF9jbGllbnRYLCBfY2xpZW50WSksXG4gICAgICAgIGRyb3BUYXJnZXQgPSBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuXG4gICAgICBpZiAoZHJvcFRhcmdldCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJlZmVyZW5jZSxcbiAgICAgICAgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvcik7XG4gICAgICBpZiAoaW1tZWRpYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCBpbW1lZGlhdGUsIF9jbGllbnRYLCBfY2xpZW50WSk7XG4gICAgICB9IGVsc2UgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdHJ1ZSAmJiAhby5jb3B5KSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IF9pbml0aWFsU2libGluZztcbiAgICAgICAgZHJvcFRhcmdldCA9IF9zb3VyY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKG8uY29weSB8fCBvLnJlbW92ZU9uU3BpbGwgPT09IHRydWUpICYmIGl0ZW0ucGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8IHJlZmVyZW5jZSAhPT0gaXRlbSAmJiByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSkge1xuICAgICAgICBfY3VycmVudFNpYmxpbmcgPSByZWZlcmVuY2U7XG4gICAgICAgIGRyb3BUYXJnZXQuaW5zZXJ0QmVmb3JlKGl0ZW0sIHJlZmVyZW5jZSk7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnc2hhZG93JywgaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZWN0ID0gX2l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBfbWlycm9yID0gX2l0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgX21pcnJvcldpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgIF9taXJyb3JIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgIF9taXJyb3Iuc3R5bGUud2lkdGggPSBnZXRSZWN0V2lkdGgocmVjdCkgKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS5oZWlnaHQgPSBnZXRSZWN0SGVpZ2h0KHJlY3QpICsgJ3B4JztcbiAgICAgIHJtQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgYWRkQ2xhc3MoX21pcnJvciwgby5jbGFzc2VzLm1pcnJvcik7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKF9taXJyb3IpO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCAnb24nLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICBhZGRDbGFzcyhib2R5LCBvLmNsYXNzZXMudW5zZWxlY3RhYmxlKTtcbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Nsb25lZCcsIF9taXJyb3IsIF9pdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJtQ2xhc3MoYm9keSwgby5jbGFzc2VzLnVuc2VsZWN0YWJsZSk7XG4gICAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgJ29mZicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgICAgX21pcnJvci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKF9taXJyb3IpO1xuICAgICAgICBfbWlycm9yID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCB0YXJnZXQpIHtcbiAgICAgIHZhciBpbW1lZGlhdGUgPSB0YXJnZXQ7XG4gICAgICB3aGlsZSAoaW1tZWRpYXRlICE9PSBkcm9wVGFyZ2V0ICYmIGltbWVkaWF0ZS5wYXJlbnRFbGVtZW50ICE9PSBkcm9wVGFyZ2V0KSB7XG4gICAgICAgIGltbWVkaWF0ZSA9IGltbWVkaWF0ZS5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgaWYgKGltbWVkaWF0ZSA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGltbWVkaWF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgdGFyZ2V0LCB4LCB5KSB7XG4gICAgICB2YXIgaG9yaXpvbnRhbCA9IG8uZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB2YXIgcmVmZXJlbmNlID0gdGFyZ2V0ICE9PSBkcm9wVGFyZ2V0ID8gaW5zaWRlKCkgOiBvdXRzaWRlKCk7XG4gICAgICByZXR1cm4gcmVmZXJlbmNlO1xuXG4gICAgICBmdW5jdGlvbiBvdXRzaWRlKCkgeyAvLyBzbG93ZXIsIGJ1dCBhYmxlIHRvIGZpZ3VyZSBvdXQgYW55IHBvc2l0aW9uXG4gICAgICAgIHZhciBsZW4gPSBkcm9wVGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBlbDtcbiAgICAgICAgdmFyIHJlY3Q7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGVsID0gZHJvcFRhcmdldC5jaGlsZHJlbltpXTtcbiAgICAgICAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgcmVjdC5sZWZ0ID4geCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWhvcml6b250YWwgJiYgcmVjdC50b3AgPiB5KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbnNpZGUoKSB7IC8vIGZhc3RlciwgYnV0IG9ubHkgYXZhaWxhYmxlIGlmIGRyb3BwZWQgaW5zaWRlIGEgY2hpbGQgZWxlbWVudFxuICAgICAgICB2YXIgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh4ID4gcmVjdC5sZWZ0ICsgZ2V0UmVjdFdpZHRoKHJlY3QpIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoeSA+IHJlY3QudG9wICsgZ2V0UmVjdEhlaWdodChyZWN0KSAvIDIpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZXNvbHZlKGFmdGVyKSB7XG4gICAgICAgIHJldHVybiBhZnRlciA/IG5leHRFbCh0YXJnZXQpIDogdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbChzY3JvbGxQcm9wLCBvZmZzZXRQcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvd1tvZmZzZXRQcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvd1tvZmZzZXRQcm9wXTtcbiAgICAgIH1cbiAgICAgIGlmIChkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudEVsZW1lbnRbc2Nyb2xsUHJvcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9keVtzY3JvbGxQcm9wXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHNjcm9sbFRvcCA9IGdldFNjcm9sbCgnc2Nyb2xsVG9wJywgJ3BhZ2VZT2Zmc2V0JyksXG4gICAgICAgIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoJ3Njcm9sbExlZnQnLCAncGFnZVhPZmZzZXQnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnQsXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0ICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSArIHNjcm9sbFRvcFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50QmVoaW5kUG9pbnQocG9pbnQsIHgsIHkpIHtcbiAgICAgIGlmICgheCAmJiAheSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBwID0gcG9pbnQgfHwge30sXG4gICAgICAgIHN0YXRlID0gcC5jbGFzc05hbWUsXG4gICAgICAgIGVsO1xuICAgICAgcC5jbGFzc05hbWUgKz0gJyAnICsgby5jbGFzc2VzLmhpZGU7XG4gICAgICBlbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgICBwLmNsYXNzTmFtZSA9IHN0YXRlO1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByZWdFdmVudChlbCwgb3AsIHR5cGUsIGZuKSB7XG4gICAgdmFyIHRvdWNoID0ge1xuICAgICAgICBtb3VzZXVwOiAndG91Y2hlbmQnLFxuICAgICAgICBtb3VzZWRvd246ICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgbW91c2Vtb3ZlOiAndG91Y2htb3ZlJ1xuICAgICAgfSxcbiAgICAgICRlbCA9IGFuZ3VsYXIuZWxlbWVudChlbCk7XG5cbiAgICAkZWxbb3BdKHRvdWNoW3R5cGVdLCBmbik7XG4gICAgJGVsW29wXSh0eXBlLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXZlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0RWwoZWwpIHtcbiAgICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG5cbiAgICBmdW5jdGlvbiBtYW51YWxseSgpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgICBkbyB7XG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vQ2Fubm90IHVzZSBhbmd1bGFyLmlzRWxlbWVudCBiZWNhdXNlIHdlIG5lZWQgdG8gY2hlY2sgcGxhaW4gZG9tIGVsZW1lbnQsIG5vIGpRbGl0ZSB3cmFwcGVkICBcbiAgZnVuY3Rpb24gaXNFbGVtZW50KG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0JyA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxuICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTmFtZS5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSkgPT09IC0xKSB7XG4gICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJtQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGFuZ3VsYXIuZWxlbWVudChlbCkucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudEhvc3QoZSkge1xuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgICB2YXIgbWlzc01hcCA9IHtcbiAgICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgICB9O1xuICAgIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RbY29vcmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdFdpZHRoKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0SGVpZ2h0KHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgfHwgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApO1xuICB9XG5cbn0pLmRpcmVjdGl2ZSgnZHJhZ3VsYXInLCBbJ2RyYWd1bGFyU2VydmljZScsIGZ1bmN0aW9uKGRyYWd1bGFyU2VydmljZSkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24oJHNjb3BlLCBpRWxtLCBpQXR0cnMpIHtcbiAgICAgIGRyYWd1bGFyU2VydmljZShpRWxtWzBdLCAkc2NvcGVbaUF0dHJzLmRyYWd1bGFyIHx8ICd1bmRlZmluZWQnXSB8fCB0cnlKc29uKGlBdHRycy5kcmFndWxhcikpO1xuXG4gICAgICBmdW5jdGlvbiB0cnlKc29uKGpzb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUsICdEcmFndWxhcjogbm90IHZhbGlkIEpTT04gZm9yIG9wdGlvbnMhJywgaUVsbSk7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1dKTtcbiJdfQ==

//# sourceMappingURL=dragular.js.map