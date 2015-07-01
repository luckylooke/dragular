!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.dragular=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global angular */
'use strict';

/**
 * dragular Module by Luckylooke https://github.com/luckylooke
 *
 * Angular version of dragula https://github.com/bevacqua/dragula
 */

angular.module('dragularModule', []).factory('dragularService', function dragula() {
  var containersNameSpaced = []; // name-spaced containers managed by the drakes
  return function(initialContainers, options) {
    var body = document.body,
      documentElement = document.documentElement,
      _mirror, // mirror image
      _source, // source container
      _item, // item being dragged
      _offsetX, // reference x
      _offsetY, // reference y
      _initialSibling, // reference sibling when grabbed
      _currentSibling, // reference sibling now
      _lastOverElem, // last element behind the cursor (dragOverClasses feature)
      _lastOverClass, // last overClass used (dragOverClasses feature)
      _copy, // item used for copying
      _containers = [], // containers managed by the drake
      o = { // options
        classes: {
          mirror: 'gu-mirror',
          hide: 'gu-hide',
          unselectable: 'gu-unselectable',
          transit: 'gu-transit',
          overActive: 'gu-over-active',
          overAccepts: 'gu-over-accept',
          overDeclines: 'gu-over-decline'
        },
        moves: always,
        accepts: always,
        copy: false,
        revertOnSpill: false,
        removeOnSpill: false,
        dragOverClasses: false,
        lockX: false,
        lockY: false
      };

    if (!angular.merge) { // angular.merge pollyfill for angular < 1.4.1
      angular.merge = (function mergePollyfill() {
        function setHashKey(obj, h) {
          if (h) {
            obj.$$hashKey = h;
          } else {
            delete obj.$$hashKey;
          }
        }

        function baseExtend(dst, objs, deep) {
          var h = dst.$$hashKey;

          for (var i = 0, ii = objs.length; i < ii; ++i) {
            var obj = objs[i];
            if (!angular.isObject(obj) && !angular.isFunction(obj)) {
              continue;
            }
            var keys = Object.keys(obj);
            for (var j = 0, jj = keys.length; j < jj; j++) {
              var key = keys[j];
              var src = obj[key];

              if (deep && angular.isObject(src)) {
                if (angular.isDate(src)) {
                  dst[key] = new Date(src.valueOf());
                } else {
                  if (!angular.isObject(dst[key])) {
                    dst[key] = angular.isArray(src) ? [] : {};
                  }
                  baseExtend(dst[key], [src], true);
                }
              } else {
                dst[key] = src;
              }
            }
          }

          setHashKey(dst, h);
          return dst;
        }

        return function merge(dst) {
          return baseExtend(dst, [].slice.call(arguments, 1), true);
        };
      })();
    }

    if (options && options.scope) {
      var temp = options.scope;
      options.scope = undefined;
      angular.merge(o, options);
      options.scope = o.scope = temp;
    } else {
      angular.merge(o, options);
    }

    if (o.nameSpace) {
      if (!containersNameSpaced[o.nameSpace]) {
        containersNameSpaced[o.nameSpace] = [];
      }
      _containers = containersNameSpaced[o.nameSpace];
    }

    var api = {
      addContainer: manipulateContainers('add'),
      removeContainer: manipulateContainers('remove'),
      start: start,
      end: end,
      cancel: cancel,
      remove: remove,
      destroy: destroy,
      dragging: false
    };

    events();
    api.addContainer(initialContainers);

    return api;


    function manipulateContainers(op) {
      return function addOrRemove(all) {
        var changes = Array.isArray(all) ? all : makeArray(all);
        changes.forEach(function forEachContainer(container) {
          if (op === 'add') {
            _containers.push(container);
            regEvent(container, 'on', 'mousedown', grab);
          } else {
            _containers.splice(_containers.indexOf(container), 1);
            regEvent(container, 'off', 'mousedown', grab);
          }
        });

        function makeArray(all) {
          if (all.length) {
            var iAll = all.length,
              newArray = [];
            while (iAll) {
              iAll--;
              newArray.push(all[iAll]);
            }
            return newArray;
          } else {
            return [all];
          }
        }
      };
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
      var item = e.target;

      if ((e.which !== 0 && e.which !== 1) || e.metaKey || e.ctrlKey) {
        return; // we only care about honest-to-god left clicks and touch events
      }
      if (start(item) !== true) {
        return;
      }

      var offset = getOffset(_item);
      _offsetX = getCoord('pageX', e) - offset.left;
      _offsetY = getCoord('pageY', e) - offset.top;
      renderMirrorImage();

      // init _mirror position
      var clientX = getCoord('clientX', e),
        clientY = getCoord('clientY', e),
        x = clientX - _offsetX,
        y = clientY - _offsetY;

      _mirror.style.left = x + 'px';
      _mirror.style.top = y + 'px';

      drag(e);
      e.preventDefault();
    }

    function start(item) {
      var handle = item;

      if (api.dragging && _mirror) {
        return false;
      }

      if (_containers.indexOf(item) !== -1) {
        return false; // don't drag container itself
      }
      while (_containers.indexOf(item.parentElement) === -1) {
        if (invalidTarget(item)) {
          return false;
        }
        item = item.parentElement; // drag target should be a top element
      }
      if (invalidTarget(item)) {
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

      var item = _copy || _item,
        clientX = getCoord('clientX', e),
        clientY = getCoord('clientY', e),
        elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY),
        dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
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
      rmClass(item, o.classes.transit);
      _source = _item = _copy = _initialSibling = _currentSibling = null;
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

        if (_containers.indexOf(target) !== -1) { // is droppable?
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

      var clientX = getCoord('clientX', e),
        clientY = getCoord('clientY', e),
        x = clientX - _offsetX,
        y = clientY - _offsetY;

      if (!o.lockX) {
        _mirror.style.left = x + 'px';
      }
      if (!o.lockY) {
        _mirror.style.top = y + 'px';
      }

      var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY),
        dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);

      if (dropTarget === _source && o.copy) {
        return;
      }
      var reference,
        item = _copy || _item,
        immediate = getImmediateChild(dropTarget, elementBehindCursor);
      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, clientX, clientY);
      } else if (o.revertOnSpill === true) {
        reference = _initialSibling;
        dropTarget = _source;
      } else {
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
      _mirror.style.width = rect.width + 'px';
      _mirror.style.height = rect.height + 'px';
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
      var horizontal = o.direction === 'horizontal',
        reference = target !== dropTarget ? inside() : outside();
      return reference;

      function outside() { // slower, but able to figure out any position
        var len = dropTarget.children.length,
          i,
          el,
          rect;
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
          return resolve(x > rect.left + rect.width / 2);
        }
        return resolve(y > rect.top + rect.height / 2);
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
      var rect = el.getBoundingClientRect();
      return {
        left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
        top: rect.top + getScroll('scrollTop', 'pageYOffset')
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

  function getCoord(coord, e) {
    if (typeof e.targetTouches === 'undefined') {
      return e[coord];
    }
    // on touchend event, we have to use `e.changedTouches`
    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
    // see https://github.com/bevacqua/dragula/issues/34
    return (
      (e.targetTouches && e.targetTouches.length && e.targetTouches[0][coord]) ||
      (e.changedTouches && e.changedTouches.length && e.changedTouches[0][coord]) ||
      0
    );
  }

}).directive('dragular', function(dragularService) {
  return function($scope, iElm, iAttrs) {
    dragularService(iElm[0], $scope[iAttrs.dragular || 'undefined']);
  };
});

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkcmFndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogZHJhZ3VsYXIgTW9kdWxlIGJ5IEx1Y2t5bG9va2UgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2VcbiAqXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCdkcmFndWxhck1vZHVsZScsIFtdKS5mYWN0b3J5KCdkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbiBkcmFndWxhKCkge1xuICB2YXIgY29udGFpbmVyc05hbWVTcGFjZWQgPSBbXTsgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVycyBtYW5hZ2VkIGJ5IHRoZSBkcmFrZXNcbiAgcmV0dXJuIGZ1bmN0aW9uKGluaXRpYWxDb250YWluZXJzLCBvcHRpb25zKSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgX21pcnJvciwgLy8gbWlycm9yIGltYWdlXG4gICAgICBfc291cmNlLCAvLyBzb3VyY2UgY29udGFpbmVyXG4gICAgICBfaXRlbSwgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gICAgICBfb2Zmc2V0WCwgLy8gcmVmZXJlbmNlIHhcbiAgICAgIF9vZmZzZXRZLCAvLyByZWZlcmVuY2UgeVxuICAgICAgX2luaXRpYWxTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50U2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgbm93XG4gICAgICBfbGFzdE92ZXJFbGVtLCAvLyBsYXN0IGVsZW1lbnQgYmVoaW5kIHRoZSBjdXJzb3IgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2xhc3RPdmVyQ2xhc3MsIC8vIGxhc3Qgb3ZlckNsYXNzIHVzZWQgKGRyYWdPdmVyQ2xhc3NlcyBmZWF0dXJlKVxuICAgICAgX2NvcHksIC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICAgICAgX2NvbnRhaW5lcnMgPSBbXSwgLy8gY29udGFpbmVycyBtYW5hZ2VkIGJ5IHRoZSBkcmFrZVxuICAgICAgbyA9IHsgLy8gb3B0aW9uc1xuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgbWlycm9yOiAnZ3UtbWlycm9yJyxcbiAgICAgICAgICBoaWRlOiAnZ3UtaGlkZScsXG4gICAgICAgICAgdW5zZWxlY3RhYmxlOiAnZ3UtdW5zZWxlY3RhYmxlJyxcbiAgICAgICAgICB0cmFuc2l0OiAnZ3UtdHJhbnNpdCcsXG4gICAgICAgICAgb3ZlckFjdGl2ZTogJ2d1LW92ZXItYWN0aXZlJyxcbiAgICAgICAgICBvdmVyQWNjZXB0czogJ2d1LW92ZXItYWNjZXB0JyxcbiAgICAgICAgICBvdmVyRGVjbGluZXM6ICdndS1vdmVyLWRlY2xpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIG1vdmVzOiBhbHdheXMsXG4gICAgICAgIGFjY2VwdHM6IGFsd2F5cyxcbiAgICAgICAgY29weTogZmFsc2UsXG4gICAgICAgIHJldmVydE9uU3BpbGw6IGZhbHNlLFxuICAgICAgICByZW1vdmVPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgZHJhZ092ZXJDbGFzc2VzOiBmYWxzZSxcbiAgICAgICAgbG9ja1g6IGZhbHNlLFxuICAgICAgICBsb2NrWTogZmFsc2VcbiAgICAgIH07XG5cbiAgICBpZiAoIWFuZ3VsYXIubWVyZ2UpIHsgLy8gYW5ndWxhci5tZXJnZSBwb2xseWZpbGwgZm9yIGFuZ3VsYXIgPCAxLjQuMVxuICAgICAgYW5ndWxhci5tZXJnZSA9IChmdW5jdGlvbiBtZXJnZVBvbGx5ZmlsbCgpIHtcbiAgICAgICAgZnVuY3Rpb24gc2V0SGFzaEtleShvYmosIGgpIHtcbiAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgb2JqLiQkaGFzaEtleSA9IGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouJCRoYXNoS2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGJhc2VFeHRlbmQoZHN0LCBvYmpzLCBkZWVwKSB7XG4gICAgICAgICAgdmFyIGggPSBkc3QuJCRoYXNoS2V5O1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gb2Jqcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gb2Jqc1tpXTtcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc09iamVjdChvYmopICYmICFhbmd1bGFyLmlzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqaiA9IGtleXMubGVuZ3RoOyBqIDwgamo7IGorKykge1xuICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgICAgICAgdmFyIHNyYyA9IG9ialtrZXldO1xuXG4gICAgICAgICAgICAgIGlmIChkZWVwICYmIGFuZ3VsYXIuaXNPYmplY3Qoc3JjKSkge1xuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGF0ZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IG5ldyBEYXRlKHNyYy52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNPYmplY3QoZHN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gYW5ndWxhci5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYmFzZUV4dGVuZChkc3Rba2V5XSwgW3NyY10sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IHNyYztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldEhhc2hLZXkoZHN0LCBoKTtcbiAgICAgICAgICByZXR1cm4gZHN0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlKGRzdCkge1xuICAgICAgICAgIHJldHVybiBiYXNlRXh0ZW5kKGRzdCwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zY29wZSkge1xuICAgICAgdmFyIHRlbXAgPSBvcHRpb25zLnNjb3BlO1xuICAgICAgb3B0aW9ucy5zY29wZSA9IHVuZGVmaW5lZDtcbiAgICAgIGFuZ3VsYXIubWVyZ2Uobywgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnNjb3BlID0gby5zY29wZSA9IHRlbXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuZ3VsYXIubWVyZ2Uobywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKG8ubmFtZVNwYWNlKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lcnNOYW1lU3BhY2VkW28ubmFtZVNwYWNlXSkge1xuICAgICAgICBjb250YWluZXJzTmFtZVNwYWNlZFtvLm5hbWVTcGFjZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIF9jb250YWluZXJzID0gY29udGFpbmVyc05hbWVTcGFjZWRbby5uYW1lU3BhY2VdO1xuICAgIH1cblxuICAgIHZhciBhcGkgPSB7XG4gICAgICBhZGRDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdhZGQnKSxcbiAgICAgIHJlbW92ZUNvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ3JlbW92ZScpLFxuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgZW5kOiBlbmQsXG4gICAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICBldmVudHMoKTtcbiAgICBhcGkuYWRkQ29udGFpbmVyKGluaXRpYWxDb250YWluZXJzKTtcblxuICAgIHJldHVybiBhcGk7XG5cblxuICAgIGZ1bmN0aW9uIG1hbmlwdWxhdGVDb250YWluZXJzKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYWRkT3JSZW1vdmUoYWxsKSB7XG4gICAgICAgIHZhciBjaGFuZ2VzID0gQXJyYXkuaXNBcnJheShhbGwpID8gYWxsIDogbWFrZUFycmF5KGFsbCk7XG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgICAgICAgIGlmIChvcCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgIF9jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJlZ0V2ZW50KGNvbnRhaW5lciwgJ29uJywgJ21vdXNlZG93bicsIGdyYWIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udGFpbmVycy5zcGxpY2UoX2NvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLCAxKTtcbiAgICAgICAgICAgIHJlZ0V2ZW50KGNvbnRhaW5lciwgJ29mZicsICdtb3VzZWRvd24nLCBncmFiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VBcnJheShhbGwpIHtcbiAgICAgICAgICBpZiAoYWxsLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGlBbGwgPSBhbGwubGVuZ3RoLFxuICAgICAgICAgICAgICBuZXdBcnJheSA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKGlBbGwpIHtcbiAgICAgICAgICAgICAgaUFsbC0tO1xuICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGFsbFtpQWxsXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbYWxsXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZlbnRzKHJlbSkge1xuICAgICAgdmFyIG9wID0gcmVtID8gJ29mZicgOiAnb24nO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNldXAnLCByZWxlYXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZXZlbnRzKHRydWUpO1xuICAgICAgYXBpLnJlbW92ZUNvbnRhaW5lcihfY29udGFpbmVycyk7XG4gICAgICByZWxlYXNlKHt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiKGUpIHtcbiAgICAgIHZhciBpdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgIGlmICgoZS53aGljaCAhPT0gMCAmJiBlLndoaWNoICE9PSAxKSB8fCBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybjsgLy8gd2Ugb25seSBjYXJlIGFib3V0IGhvbmVzdC10by1nb2QgbGVmdCBjbGlja3MgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgfVxuICAgICAgaWYgKHN0YXJ0KGl0ZW0pICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldChfaXRlbSk7XG4gICAgICBfb2Zmc2V0WCA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICBfb2Zmc2V0WSA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LnRvcDtcbiAgICAgIHJlbmRlck1pcnJvckltYWdlKCk7XG5cbiAgICAgIC8vIGluaXQgX21pcnJvciBwb3NpdGlvblxuICAgICAgdmFyIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpLFxuICAgICAgICBjbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKSxcbiAgICAgICAgeCA9IGNsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IGNsaWVudFkgLSBfb2Zmc2V0WTtcblxuICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXG4gICAgICBkcmFnKGUpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGl0ZW0pIHtcbiAgICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuXG4gICAgICBpZiAoYXBpLmRyYWdnaW5nICYmIF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2NvbnRhaW5lcnMuaW5kZXhPZihpdGVtKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBkb24ndCBkcmFnIGNvbnRhaW5lciBpdHNlbGZcbiAgICAgIH1cbiAgICAgIHdoaWxlIChfY29udGFpbmVycy5pbmRleE9mKGl0ZW0ucGFyZW50RWxlbWVudCkgPT09IC0xKSB7XG4gICAgICAgIGlmIChpbnZhbGlkVGFyZ2V0KGl0ZW0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudEVsZW1lbnQ7IC8vIGRyYWcgdGFyZ2V0IHNob3VsZCBiZSBhIHRvcCBlbGVtZW50XG4gICAgICB9XG4gICAgICBpZiAoaW52YWxpZFRhcmdldChpdGVtKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBpdGVtLnBhcmVudEVsZW1lbnQsXG4gICAgICAgIG1vdmFibGUgPSBvLm1vdmVzKGl0ZW0sIGNvbnRhaW5lciwgaGFuZGxlKTtcbiAgICAgIGlmICghbW92YWJsZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGVuZCgpO1xuXG4gICAgICBpZiAoby5jb3B5KSB7XG4gICAgICAgIF9jb3B5ID0gaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGFkZENsYXNzKF9jb3B5LCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnY2xvbmVkJywgX2NvcHksIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGFzcyhpdGVtLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICB9XG5cbiAgICAgIF9zb3VyY2UgPSBjb250YWluZXI7XG4gICAgICBfaXRlbSA9IGl0ZW07XG4gICAgICBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBuZXh0RWwoaXRlbSk7XG5cbiAgICAgIGFwaS5kcmFnZ2luZyA9IHRydWU7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnJywgX2l0ZW0sIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZhbGlkVGFyZ2V0KGVsKSB7XG4gICAgICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0EnIHx8IGVsLnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICBkcm9wKGl0ZW0sIGl0ZW0ucGFyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVsZWFzZShlKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpLFxuICAgICAgICBjbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgaWYgKGRyb3BUYXJnZXQgJiYgKG8uY29weSA9PT0gZmFsc2UgfHwgZHJvcFRhcmdldCAhPT0gX3NvdXJjZSkpIHtcbiAgICAgICAgZHJvcChpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAoby5yZW1vdmVPblNwaWxsKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG4gICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiYgX2xhc3RPdmVyRWxlbSkge1xuICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgX2xhc3RPdmVyRWxlbSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJvcChpdGVtLCB0YXJnZXQpIHtcbiAgICAgIGlmIChvLnNjb3BlICYmIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCB0YXJnZXQsIF9zb3VyY2UpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdChvLmNvcHkgPyAnY2FuY2VsJyA6ICdyZW1vdmUnLCBpdGVtLCBwYXJlbnQpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbChyZXZlcnQpIHtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZXZlcnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgPyByZXZlcnQgOiBvLnJldmVydE9uU3BpbGwsXG4gICAgICAgIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHBhcmVudCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9jb3B5KTtcbiAgICAgIH1cbiAgICAgIHZhciBpbml0aWFsID0gaXNJbml0aWFsUGxhY2VtZW50KHBhcmVudCk7XG4gICAgICBpZiAoaW5pdGlhbCA9PT0gZmFsc2UgJiYgby5jb3B5ID09PSBmYWxzZSAmJiByZXZlcnRzKSB7XG4gICAgICAgIF9zb3VyY2UuaW5zZXJ0QmVmb3JlKGl0ZW0sIF9pbml0aWFsU2libGluZyk7XG4gICAgICB9XG4gICAgICBpZiAoby5zY29wZSAmJiAoaW5pdGlhbCB8fCByZXZlcnRzKSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlKTtcbiAgICAgIH0gZWxzZSBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcm9wJywgaXRlbSwgcGFyZW50LCBfc291cmNlKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICAgIHJlbW92ZU1pcnJvckltYWdlKCk7XG4gICAgICBybUNsYXNzKGl0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIF9zb3VyY2UgPSBfaXRlbSA9IF9jb3B5ID0gX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gbnVsbDtcbiAgICAgIGFwaS5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJhZ2VuZCcsIGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHMpIHtcbiAgICAgIHZhciBzaWJsaW5nO1xuICAgICAgaWYgKHMgIT09IHZvaWQgMCkge1xuICAgICAgICBzaWJsaW5nID0gcztcbiAgICAgIH0gZWxzZSBpZiAoX21pcnJvcikge1xuICAgICAgICBzaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2libGluZyA9IG5leHRFbChfaXRlbSB8fCBfY29weSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0ID09PSBfc291cmNlICYmIHNpYmxpbmcgPT09IF9pbml0aWFsU2libGluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kRHJvcFRhcmdldChlbGVtZW50QmVoaW5kQ3Vyc29yLCBjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZWxlbWVudEJlaGluZEN1cnNvcjtcbiAgICAgIHdoaWxlICh0YXJnZXQgJiYgIWFjY2VwdGVkKCkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuXG4gICAgICBmdW5jdGlvbiBhY2NlcHRlZCgpIHtcbiAgICAgICAgdmFyIGFjY2VwdHMgPSBmYWxzZTtcblxuICAgICAgICBpZiAoX2NvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpICE9PSAtMSkgeyAvLyBpcyBkcm9wcGFibGU/XG4gICAgICAgICAgdmFyIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKHRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvciksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UodGFyZ2V0LCBpbW1lZGlhdGUsIGNsaWVudFgsIGNsaWVudFkpLFxuICAgICAgICAgICAgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgYWNjZXB0cyA9IGluaXRpYWwgPyB0cnVlIDogby5hY2NlcHRzKF9pdGVtLCB0YXJnZXQsIF9zb3VyY2UsIHJlZmVyZW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiZcbiAgICAgICAgICBoYXNDbGFzcyh0YXJnZXQsIG8uY2xhc3Nlcy5vdmVyQWN0aXZlKSAmJlxuICAgICAgICAgIHRhcmdldCAhPT0gX2xhc3RPdmVyRWxlbSkge1xuXG4gICAgICAgICAgaWYgKF9sYXN0T3ZlckVsZW0pIHtcbiAgICAgICAgICAgIHJtQ2xhc3MoX2xhc3RPdmVyRWxlbSwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9sYXN0T3ZlckNsYXNzID0gYWNjZXB0cyA/IG8uY2xhc3Nlcy5vdmVyQWNjZXB0cyA6IG8uY2xhc3Nlcy5vdmVyRGVjbGluZXM7XG4gICAgICAgICAgYWRkQ2xhc3ModGFyZ2V0LCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgX2xhc3RPdmVyRWxlbSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjZXB0cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICAgIGlmICghX21pcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKSxcbiAgICAgICAgY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSksXG4gICAgICAgIHggPSBjbGllbnRYIC0gX29mZnNldFgsXG4gICAgICAgIHkgPSBjbGllbnRZIC0gX29mZnNldFk7XG5cbiAgICAgIGlmICghby5sb2NrWCkge1xuICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmICghby5sb2NrWSkge1xuICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuXG4gICAgICBpZiAoZHJvcFRhcmdldCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJlZmVyZW5jZSxcbiAgICAgICAgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZChkcm9wVGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKTtcbiAgICAgIGlmIChpbW1lZGlhdGUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICB9IGVsc2UgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdHJ1ZSkge1xuICAgICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICAgIGRyb3BUYXJnZXQgPSBfc291cmNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCB8fCByZWZlcmVuY2UgIT09IGl0ZW0gJiYgcmVmZXJlbmNlICE9PSBuZXh0RWwoaXRlbSkpIHtcbiAgICAgICAgX2N1cnJlbnRTaWJsaW5nID0gcmVmZXJlbmNlO1xuICAgICAgICBkcm9wVGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCByZWZlcmVuY2UpO1xuICAgICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICAgIG8uc2NvcGUuJGVtaXQoJ3NoYWRvdycsIGl0ZW0sIGRyb3BUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWlycm9ySW1hZ2UoKSB7XG4gICAgICBpZiAoX21pcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmVjdCA9IF9pdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgX21pcnJvciA9IF9pdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIF9taXJyb3Iuc3R5bGUud2lkdGggPSByZWN0LndpZHRoICsgJ3B4JztcbiAgICAgIF9taXJyb3Iuc3R5bGUuaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKyAncHgnO1xuICAgICAgcm1DbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICBhZGRDbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMubWlycm9yKTtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoX21pcnJvcik7XG4gICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvbicsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgIGFkZENsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2xvbmVkJywgX21pcnJvciwgX2l0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcm1DbGFzcyhib2R5LCBvLmNsYXNzZXMudW5zZWxlY3RhYmxlKTtcbiAgICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCAnb2ZmJywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgICAgICBfbWlycm9yLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX21pcnJvcik7XG4gICAgICAgIF9taXJyb3IgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIHRhcmdldCkge1xuICAgICAgdmFyIGltbWVkaWF0ZSA9IHRhcmdldDtcbiAgICAgIHdoaWxlIChpbW1lZGlhdGUgIT09IGRyb3BUYXJnZXQgJiYgaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQgIT09IGRyb3BUYXJnZXQpIHtcbiAgICAgICAgaW1tZWRpYXRlID0gaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAoaW1tZWRpYXRlID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW1tZWRpYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCB0YXJnZXQsIHgsIHkpIHtcbiAgICAgIHZhciBob3Jpem9udGFsID0gby5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcbiAgICAgICAgcmVmZXJlbmNlID0gdGFyZ2V0ICE9PSBkcm9wVGFyZ2V0ID8gaW5zaWRlKCkgOiBvdXRzaWRlKCk7XG4gICAgICByZXR1cm4gcmVmZXJlbmNlO1xuXG4gICAgICBmdW5jdGlvbiBvdXRzaWRlKCkgeyAvLyBzbG93ZXIsIGJ1dCBhYmxlIHRvIGZpZ3VyZSBvdXQgYW55IHBvc2l0aW9uXG4gICAgICAgIHZhciBsZW4gPSBkcm9wVGFyZ2V0LmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIHJlY3Q7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGVsID0gZHJvcFRhcmdldC5jaGlsZHJlbltpXTtcbiAgICAgICAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgcmVjdC5sZWZ0ID4geCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWhvcml6b250YWwgJiYgcmVjdC50b3AgPiB5KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbnNpZGUoKSB7IC8vIGZhc3RlciwgYnV0IG9ubHkgYXZhaWxhYmxlIGlmIGRyb3BwZWQgaW5zaWRlIGEgY2hpbGQgZWxlbWVudFxuICAgICAgICB2YXIgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh4ID4gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHkgPiByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmUoYWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGFmdGVyID8gbmV4dEVsKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsKHNjcm9sbFByb3AsIG9mZnNldFByb3ApIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93W29mZnNldFByb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93W29mZnNldFByb3BdO1xuICAgICAgfVxuICAgICAgaWYgKGRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib2R5W3Njcm9sbFByb3BdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIGdldFNjcm9sbCgnc2Nyb2xsTGVmdCcsICdwYWdlWE9mZnNldCcpLFxuICAgICAgICB0b3A6IHJlY3QudG9wICsgZ2V0U2Nyb2xsKCdzY3JvbGxUb3AnLCAncGFnZVlPZmZzZXQnKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50QmVoaW5kUG9pbnQocG9pbnQsIHgsIHkpIHtcbiAgICAgIGlmICgheCAmJiAheSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBwID0gcG9pbnQgfHwge30sXG4gICAgICAgIHN0YXRlID0gcC5jbGFzc05hbWUsXG4gICAgICAgIGVsO1xuICAgICAgcC5jbGFzc05hbWUgKz0gJyAnICsgby5jbGFzc2VzLmhpZGU7XG4gICAgICBlbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgICBwLmNsYXNzTmFtZSA9IHN0YXRlO1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByZWdFdmVudChlbCwgb3AsIHR5cGUsIGZuKSB7XG4gICAgdmFyIHRvdWNoID0ge1xuICAgICAgICBtb3VzZXVwOiAndG91Y2hlbmQnLFxuICAgICAgICBtb3VzZWRvd246ICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgbW91c2Vtb3ZlOiAndG91Y2htb3ZlJ1xuICAgICAgfSxcbiAgICAgICRlbCA9IGFuZ3VsYXIuZWxlbWVudChlbCk7XG5cbiAgICAkZWxbb3BdKHRvdWNoW3R5cGVdLCBmbik7XG4gICAgJGVsW29wXSh0eXBlLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0RWwoZWwpIHtcbiAgICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG5cbiAgICBmdW5jdGlvbiBtYW51YWxseSgpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgICBkbyB7XG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NOYW1lLmluZGV4T2YoJyAnICsgY2xhc3NOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm1DbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgYW5ndWxhci5lbGVtZW50KGVsKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIHJldHVybiAoJyAnICsgZWwuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSArICcgJykgPiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvb3JkKGNvb3JkLCBlKSB7XG4gICAgaWYgKHR5cGVvZiBlLnRhcmdldFRvdWNoZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZVtjb29yZF07XG4gICAgfVxuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgcmV0dXJuIChcbiAgICAgIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCAmJiBlLnRhcmdldFRvdWNoZXNbMF1bY29vcmRdKSB8fFxuICAgICAgKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggJiYgZS5jaGFuZ2VkVG91Y2hlc1swXVtjb29yZF0pIHx8XG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG59KS5kaXJlY3RpdmUoJ2RyYWd1bGFyJywgZnVuY3Rpb24oZHJhZ3VsYXJTZXJ2aWNlKSB7XG4gIHJldHVybiBmdW5jdGlvbigkc2NvcGUsIGlFbG0sIGlBdHRycykge1xuICAgIGRyYWd1bGFyU2VydmljZShpRWxtWzBdLCAkc2NvcGVbaUF0dHJzLmRyYWd1bGFyIHx8ICd1bmRlZmluZWQnXSk7XG4gIH07XG59KTtcbiJdfQ==
