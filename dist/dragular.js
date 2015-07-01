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
        dragOverClasses: false
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

      _mirror.style.left = x + 'px';
      _mirror.style.top = y + 'px';

      var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY),
        dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);

      // if (o.dragOverClasses &&
      //   elementBehindCursor &&
      //   hasClass(elementBehindCursor, o.classes.overActive)
      //   elementBehindCursor !== _lastOverElem) {
      //   if (_lastOverElem) {
      //     rmClass(_lastOverElem, _lastOverClass);
      //     console.log('removed0', _lastOverClass);
      //   }
      //   _lastOverClass = o.classes.overDeclines;
      //   addClass(elementBehindCursor, _lastOverClass);
      //   _lastOverElem = elementBehindCursor;
      // }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkcmFndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBnbG9iYWwgYW5ndWxhciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGRyYWd1bGFyIE1vZHVsZSBieSBMdWNreWxvb2tlIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlXG4gKlxuICogQW5ndWxhciB2ZXJzaW9uIG9mIGRyYWd1bGEgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGFcbiAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnZHJhZ3VsYXJNb2R1bGUnLCBbXSkuZmFjdG9yeSgnZHJhZ3VsYXJTZXJ2aWNlJywgZnVuY3Rpb24gZHJhZ3VsYSgpIHtcbiAgdmFyIGNvbnRhaW5lcnNOYW1lU3BhY2VkID0gW107IC8vIG5hbWUtc3BhY2VkIGNvbnRhaW5lcnMgbWFuYWdlZCBieSB0aGUgZHJha2VzXG4gIHJldHVybiBmdW5jdGlvbihpbml0aWFsQ29udGFpbmVycywgb3B0aW9ucykge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIF9taXJyb3IsIC8vIG1pcnJvciBpbWFnZVxuICAgICAgX3NvdXJjZSwgLy8gc291cmNlIGNvbnRhaW5lclxuICAgICAgX2l0ZW0sIC8vIGl0ZW0gYmVpbmcgZHJhZ2dlZFxuICAgICAgX29mZnNldFgsIC8vIHJlZmVyZW5jZSB4XG4gICAgICBfb2Zmc2V0WSwgLy8gcmVmZXJlbmNlIHlcbiAgICAgIF9pbml0aWFsU2libGluZywgLy8gcmVmZXJlbmNlIHNpYmxpbmcgd2hlbiBncmFiYmVkXG4gICAgICBfY3VycmVudFNpYmxpbmcsIC8vIHJlZmVyZW5jZSBzaWJsaW5nIG5vd1xuICAgICAgX2xhc3RPdmVyRWxlbSwgLy8gbGFzdCBlbGVtZW50IGJlaGluZCB0aGUgY3Vyc29yIChkcmFnT3ZlckNsYXNzZXMgZmVhdHVyZSlcbiAgICAgIF9sYXN0T3ZlckNsYXNzLCAvLyBsYXN0IG92ZXJDbGFzcyB1c2VkIChkcmFnT3ZlckNsYXNzZXMgZmVhdHVyZSlcbiAgICAgIF9jb3B5LCAvLyBpdGVtIHVzZWQgZm9yIGNvcHlpbmdcbiAgICAgIF9jb250YWluZXJzID0gW10sIC8vIGNvbnRhaW5lcnMgbWFuYWdlZCBieSB0aGUgZHJha2VcbiAgICAgIG8gPSB7IC8vIG9wdGlvbnNcbiAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgIG1pcnJvcjogJ2d1LW1pcnJvcicsXG4gICAgICAgICAgaGlkZTogJ2d1LWhpZGUnLFxuICAgICAgICAgIHVuc2VsZWN0YWJsZTogJ2d1LXVuc2VsZWN0YWJsZScsXG4gICAgICAgICAgdHJhbnNpdDogJ2d1LXRyYW5zaXQnLFxuICAgICAgICAgIG92ZXJBY3RpdmU6ICdndS1vdmVyLWFjdGl2ZScsXG4gICAgICAgICAgb3ZlckFjY2VwdHM6ICdndS1vdmVyLWFjY2VwdCcsXG4gICAgICAgICAgb3ZlckRlY2xpbmVzOiAnZ3Utb3Zlci1kZWNsaW5lJ1xuICAgICAgICB9LFxuICAgICAgICBtb3ZlczogYWx3YXlzLFxuICAgICAgICBhY2NlcHRzOiBhbHdheXMsXG4gICAgICAgIGNvcHk6IGZhbHNlLFxuICAgICAgICByZXZlcnRPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgcmVtb3ZlT25TcGlsbDogZmFsc2UsXG4gICAgICAgIGRyYWdPdmVyQ2xhc3NlczogZmFsc2VcbiAgICAgIH07XG5cbiAgICBpZiAoIWFuZ3VsYXIubWVyZ2UpIHsgLy8gYW5ndWxhci5tZXJnZSBwb2xseWZpbGwgZm9yIGFuZ3VsYXIgPCAxLjQuMVxuICAgICAgYW5ndWxhci5tZXJnZSA9IChmdW5jdGlvbiBtZXJnZVBvbGx5ZmlsbCgpIHtcbiAgICAgICAgZnVuY3Rpb24gc2V0SGFzaEtleShvYmosIGgpIHtcbiAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgb2JqLiQkaGFzaEtleSA9IGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouJCRoYXNoS2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGJhc2VFeHRlbmQoZHN0LCBvYmpzLCBkZWVwKSB7XG4gICAgICAgICAgdmFyIGggPSBkc3QuJCRoYXNoS2V5O1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gb2Jqcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gb2Jqc1tpXTtcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc09iamVjdChvYmopICYmICFhbmd1bGFyLmlzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqaiA9IGtleXMubGVuZ3RoOyBqIDwgamo7IGorKykge1xuICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgICAgICAgdmFyIHNyYyA9IG9ialtrZXldO1xuXG4gICAgICAgICAgICAgIGlmIChkZWVwICYmIGFuZ3VsYXIuaXNPYmplY3Qoc3JjKSkge1xuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGF0ZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IG5ldyBEYXRlKHNyYy52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNPYmplY3QoZHN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gYW5ndWxhci5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYmFzZUV4dGVuZChkc3Rba2V5XSwgW3NyY10sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IHNyYztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldEhhc2hLZXkoZHN0LCBoKTtcbiAgICAgICAgICByZXR1cm4gZHN0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlKGRzdCkge1xuICAgICAgICAgIHJldHVybiBiYXNlRXh0ZW5kKGRzdCwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zY29wZSkge1xuICAgICAgdmFyIHRlbXAgPSBvcHRpb25zLnNjb3BlO1xuICAgICAgb3B0aW9ucy5zY29wZSA9IHVuZGVmaW5lZDtcbiAgICAgIGFuZ3VsYXIubWVyZ2Uobywgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnNjb3BlID0gby5zY29wZSA9IHRlbXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuZ3VsYXIubWVyZ2Uobywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKG8ubmFtZVNwYWNlKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lcnNOYW1lU3BhY2VkW28ubmFtZVNwYWNlXSkge1xuICAgICAgICBjb250YWluZXJzTmFtZVNwYWNlZFtvLm5hbWVTcGFjZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIF9jb250YWluZXJzID0gY29udGFpbmVyc05hbWVTcGFjZWRbby5uYW1lU3BhY2VdO1xuICAgIH1cblxuICAgIHZhciBhcGkgPSB7XG4gICAgICBhZGRDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdhZGQnKSxcbiAgICAgIHJlbW92ZUNvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ3JlbW92ZScpLFxuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgZW5kOiBlbmQsXG4gICAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICBldmVudHMoKTtcbiAgICBhcGkuYWRkQ29udGFpbmVyKGluaXRpYWxDb250YWluZXJzKTtcblxuICAgIHJldHVybiBhcGk7XG5cblxuICAgIGZ1bmN0aW9uIG1hbmlwdWxhdGVDb250YWluZXJzKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYWRkT3JSZW1vdmUoYWxsKSB7XG4gICAgICAgIHZhciBjaGFuZ2VzID0gQXJyYXkuaXNBcnJheShhbGwpID8gYWxsIDogbWFrZUFycmF5KGFsbCk7XG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgICAgICAgIGlmIChvcCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgIF9jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJlZ0V2ZW50KGNvbnRhaW5lciwgJ29uJywgJ21vdXNlZG93bicsIGdyYWIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udGFpbmVycy5zcGxpY2UoX2NvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpLCAxKTtcbiAgICAgICAgICAgIHJlZ0V2ZW50KGNvbnRhaW5lciwgJ29mZicsICdtb3VzZWRvd24nLCBncmFiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VBcnJheShhbGwpIHtcbiAgICAgICAgICBpZiAoYWxsLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGlBbGwgPSBhbGwubGVuZ3RoLFxuICAgICAgICAgICAgICBuZXdBcnJheSA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKGlBbGwpIHtcbiAgICAgICAgICAgICAgaUFsbC0tO1xuICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGFsbFtpQWxsXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbYWxsXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZlbnRzKHJlbSkge1xuICAgICAgdmFyIG9wID0gcmVtID8gJ29mZicgOiAnb24nO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNldXAnLCByZWxlYXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgZXZlbnRzKHRydWUpO1xuICAgICAgYXBpLnJlbW92ZUNvbnRhaW5lcihfY29udGFpbmVycyk7XG4gICAgICByZWxlYXNlKHt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiKGUpIHtcbiAgICAgIHZhciBpdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgIGlmICgoZS53aGljaCAhPT0gMCAmJiBlLndoaWNoICE9PSAxKSB8fCBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybjsgLy8gd2Ugb25seSBjYXJlIGFib3V0IGhvbmVzdC10by1nb2QgbGVmdCBjbGlja3MgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgfVxuICAgICAgaWYgKHN0YXJ0KGl0ZW0pICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldChfaXRlbSk7XG4gICAgICBfb2Zmc2V0WCA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICBfb2Zmc2V0WSA9IGdldENvb3JkKCdwYWdlWScsIGUpIC0gb2Zmc2V0LnRvcDtcbiAgICAgIHJlbmRlck1pcnJvckltYWdlKCk7XG4gICAgICBkcmFnKGUpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGl0ZW0pIHtcbiAgICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuXG4gICAgICBpZiAoYXBpLmRyYWdnaW5nICYmIF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2NvbnRhaW5lcnMuaW5kZXhPZihpdGVtKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBkb24ndCBkcmFnIGNvbnRhaW5lciBpdHNlbGZcbiAgICAgIH1cbiAgICAgIHdoaWxlIChfY29udGFpbmVycy5pbmRleE9mKGl0ZW0ucGFyZW50RWxlbWVudCkgPT09IC0xKSB7XG4gICAgICAgIGlmIChpbnZhbGlkVGFyZ2V0KGl0ZW0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudEVsZW1lbnQ7IC8vIGRyYWcgdGFyZ2V0IHNob3VsZCBiZSBhIHRvcCBlbGVtZW50XG4gICAgICB9XG4gICAgICBpZiAoaW52YWxpZFRhcmdldChpdGVtKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBpdGVtLnBhcmVudEVsZW1lbnQsXG4gICAgICAgIG1vdmFibGUgPSBvLm1vdmVzKGl0ZW0sIGNvbnRhaW5lciwgaGFuZGxlKTtcbiAgICAgIGlmICghbW92YWJsZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGVuZCgpO1xuXG4gICAgICBpZiAoby5jb3B5KSB7XG4gICAgICAgIF9jb3B5ID0gaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGFkZENsYXNzKF9jb3B5LCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnY2xvbmVkJywgX2NvcHksIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGFzcyhpdGVtLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICB9XG5cbiAgICAgIF9zb3VyY2UgPSBjb250YWluZXI7XG4gICAgICBfaXRlbSA9IGl0ZW07XG4gICAgICBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBuZXh0RWwoaXRlbSk7XG5cbiAgICAgIGFwaS5kcmFnZ2luZyA9IHRydWU7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnJywgX2l0ZW0sIF9zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZhbGlkVGFyZ2V0KGVsKSB7XG4gICAgICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0EnIHx8IGVsLnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgIGlmICghYXBpLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgICBkcm9wKGl0ZW0sIGl0ZW0ucGFyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVsZWFzZShlKSB7XG4gICAgICBpZiAoIWFwaS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpLFxuICAgICAgICBjbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgaWYgKGRyb3BUYXJnZXQgJiYgKG8uY29weSA9PT0gZmFsc2UgfHwgZHJvcFRhcmdldCAhPT0gX3NvdXJjZSkpIHtcbiAgICAgICAgZHJvcChpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAoby5yZW1vdmVPblNwaWxsKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG4gICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiYgX2xhc3RPdmVyRWxlbSkge1xuICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcm9wKGl0ZW0sIHRhcmdldCkge1xuICAgICAgaWYgKG8uc2NvcGUgJiYgaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCkpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSk7XG4gICAgICB9IGVsc2UgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJvcCcsIGl0ZW0sIHRhcmdldCwgX3NvdXJjZSk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KG8uY29weSA/ICdjYW5jZWwnIDogJ3JlbW92ZScsIGl0ZW0sIHBhcmVudCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsKHJldmVydCkge1xuICAgICAgaWYgKCFhcGkuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJldmVydHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHJldmVydCA6IG8ucmV2ZXJ0T25TcGlsbCxcbiAgICAgICAgaXRlbSA9IF9jb3B5IHx8IF9pdGVtLFxuICAgICAgICBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAocGFyZW50ID09PSBfc291cmNlICYmIG8uY29weSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX2NvcHkpO1xuICAgICAgfVxuICAgICAgdmFyIGluaXRpYWwgPSBpc0luaXRpYWxQbGFjZW1lbnQocGFyZW50KTtcbiAgICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiBvLmNvcHkgPT09IGZhbHNlICYmIHJldmVydHMpIHtcbiAgICAgICAgX3NvdXJjZS5pbnNlcnRCZWZvcmUoaXRlbSwgX2luaXRpYWxTaWJsaW5nKTtcbiAgICAgIH1cbiAgICAgIGlmIChvLnNjb3BlICYmIChpbml0aWFsIHx8IHJldmVydHMpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgICAgcmVtb3ZlTWlycm9ySW1hZ2UoKTtcbiAgICAgIHJtQ2xhc3MoaXRlbSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgX3NvdXJjZSA9IF9pdGVtID0gX2NvcHkgPSBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBudWxsO1xuICAgICAgYXBpLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdkcmFnZW5kJywgaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcykge1xuICAgICAgdmFyIHNpYmxpbmc7XG4gICAgICBpZiAocyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHNpYmxpbmcgPSBzO1xuICAgICAgfSBlbHNlIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWJsaW5nID0gbmV4dEVsKF9pdGVtIHx8IF9jb3B5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQgPT09IF9zb3VyY2UgJiYgc2libGluZyA9PT0gX2luaXRpYWxTaWJsaW5nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlbGVtZW50QmVoaW5kQ3Vyc29yO1xuICAgICAgd2hpbGUgKHRhcmdldCAmJiAhYWNjZXB0ZWQoKSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG5cbiAgICAgIGZ1bmN0aW9uIGFjY2VwdGVkKCkge1xuICAgICAgICB2YXIgYWNjZXB0cyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfY29udGFpbmVycy5pbmRleE9mKHRhcmdldCkgIT09IC0xKSB7IC8vIGlzIGRyb3BwYWJsZT9cbiAgICAgICAgICB2YXIgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQodGFyZ2V0LCBlbGVtZW50QmVoaW5kQ3Vyc29yKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZSh0YXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSksXG4gICAgICAgICAgICBpbml0aWFsID0gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcmVmZXJlbmNlKTtcbiAgICAgICAgICBhY2NlcHRzID0gaW5pdGlhbCA/IHRydWUgOiBvLmFjY2VwdHMoX2l0ZW0sIHRhcmdldCwgX3NvdXJjZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvLmRyYWdPdmVyQ2xhc3NlcyAmJlxuICAgICAgICAgIGhhc0NsYXNzKHRhcmdldCwgby5jbGFzc2VzLm92ZXJBY3RpdmUpICYmXG4gICAgICAgICAgdGFyZ2V0ICE9PSBfbGFzdE92ZXJFbGVtKSB7XG5cbiAgICAgICAgICBpZiAoX2xhc3RPdmVyRWxlbSkge1xuICAgICAgICAgICAgcm1DbGFzcyhfbGFzdE92ZXJFbGVtLCBfbGFzdE92ZXJDbGFzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2xhc3RPdmVyQ2xhc3MgPSBhY2NlcHRzID8gby5jbGFzc2VzLm92ZXJBY2NlcHRzIDogby5jbGFzc2VzLm92ZXJEZWNsaW5lcztcbiAgICAgICAgICBhZGRDbGFzcyh0YXJnZXQsIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICBfbGFzdE92ZXJFbGVtID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2NlcHRzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgICAgaWYgKCFfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpLFxuICAgICAgICBjbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKSxcbiAgICAgICAgeCA9IGNsaWVudFggLSBfb2Zmc2V0WCxcbiAgICAgICAgeSA9IGNsaWVudFkgLSBfb2Zmc2V0WTtcblxuICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXG4gICAgICB2YXIgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuXG4gICAgICAvLyBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiZcbiAgICAgIC8vICAgZWxlbWVudEJlaGluZEN1cnNvciAmJlxuICAgICAgLy8gICBoYXNDbGFzcyhlbGVtZW50QmVoaW5kQ3Vyc29yLCBvLmNsYXNzZXMub3ZlckFjdGl2ZSlcbiAgICAgIC8vICAgZWxlbWVudEJlaGluZEN1cnNvciAhPT0gX2xhc3RPdmVyRWxlbSkge1xuICAgICAgLy8gICBpZiAoX2xhc3RPdmVyRWxlbSkge1xuICAgICAgLy8gICAgIHJtQ2xhc3MoX2xhc3RPdmVyRWxlbSwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkMCcsIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBfbGFzdE92ZXJDbGFzcyA9IG8uY2xhc3Nlcy5vdmVyRGVjbGluZXM7XG4gICAgICAvLyAgIGFkZENsYXNzKGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgIC8vICAgX2xhc3RPdmVyRWxlbSA9IGVsZW1lbnRCZWhpbmRDdXJzb3I7XG4gICAgICAvLyB9XG5cbiAgICAgIGlmIChkcm9wVGFyZ2V0ID09PSBfc291cmNlICYmIG8uY29weSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmVmZXJlbmNlLFxuICAgICAgICBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpO1xuICAgICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgaW1tZWRpYXRlLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgIH0gZWxzZSBpZiAoby5yZXZlcnRPblNwaWxsID09PSB0cnVlKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IF9pbml0aWFsU2libGluZztcbiAgICAgICAgZHJvcFRhcmdldCA9IF9zb3VyY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8IHJlZmVyZW5jZSAhPT0gaXRlbSAmJiByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSkge1xuICAgICAgICBfY3VycmVudFNpYmxpbmcgPSByZWZlcmVuY2U7XG4gICAgICAgIGRyb3BUYXJnZXQuaW5zZXJ0QmVmb3JlKGl0ZW0sIHJlZmVyZW5jZSk7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgby5zY29wZS4kZW1pdCgnc2hhZG93JywgaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXJyb3JJbWFnZSgpIHtcbiAgICAgIGlmIChfbWlycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByZWN0ID0gX2l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBfbWlycm9yID0gX2l0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgX21pcnJvci5zdHlsZS53aWR0aCA9IHJlY3Qud2lkdGggKyAncHgnO1xuICAgICAgX21pcnJvci5zdHlsZS5oZWlnaHQgPSByZWN0LmhlaWdodCArICdweCc7XG4gICAgICBybUNsYXNzKF9taXJyb3IsIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIGFkZENsYXNzKF9taXJyb3IsIG8uY2xhc3Nlcy5taXJyb3IpO1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChfbWlycm9yKTtcbiAgICAgIHJlZ0V2ZW50KGRvY3VtZW50RWxlbWVudCwgJ29uJywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgICAgYWRkQ2xhc3MoYm9keSwgby5jbGFzc2VzLnVuc2VsZWN0YWJsZSk7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfbWlycm9yLCBfaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWlycm9ySW1hZ2UoKSB7XG4gICAgICBpZiAoX21pcnJvcikge1xuICAgICAgICBybUNsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvZmYnLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICAgIF9taXJyb3IucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChfbWlycm9yKTtcbiAgICAgICAgX21pcnJvciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgdGFyZ2V0KSB7XG4gICAgICB2YXIgaW1tZWRpYXRlID0gdGFyZ2V0O1xuICAgICAgd2hpbGUgKGltbWVkaWF0ZSAhPT0gZHJvcFRhcmdldCAmJiBpbW1lZGlhdGUucGFyZW50RWxlbWVudCAhPT0gZHJvcFRhcmdldCkge1xuICAgICAgICBpbW1lZGlhdGUgPSBpbW1lZGlhdGUucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChpbW1lZGlhdGUgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbW1lZGlhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIHRhcmdldCwgeCwgeSkge1xuICAgICAgdmFyIGhvcml6b250YWwgPSBvLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxuICAgICAgICByZWZlcmVuY2UgPSB0YXJnZXQgIT09IGRyb3BUYXJnZXQgPyBpbnNpZGUoKSA6IG91dHNpZGUoKTtcbiAgICAgIHJldHVybiByZWZlcmVuY2U7XG5cbiAgICAgIGZ1bmN0aW9uIG91dHNpZGUoKSB7IC8vIHNsb3dlciwgYnV0IGFibGUgdG8gZmlndXJlIG91dCBhbnkgcG9zaXRpb25cbiAgICAgICAgdmFyIGxlbiA9IGRyb3BUYXJnZXQuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICAgIGksXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgcmVjdDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgZWwgPSBkcm9wVGFyZ2V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiByZWN0LmxlZnQgPiB4KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiByZWN0LnRvcCA+IHkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGluc2lkZSgpIHsgLy8gZmFzdGVyLCBidXQgb25seSBhdmFpbGFibGUgaWYgZHJvcHBlZCBpbnNpZGUgYSBjaGlsZCBlbGVtZW50XG4gICAgICAgIHZhciByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHggPiByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoeSA+IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzb2x2ZShhZnRlcikge1xuICAgICAgICByZXR1cm4gYWZ0ZXIgPyBuZXh0RWwodGFyZ2V0KSA6IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGwoc2Nyb2xsUHJvcCwgb2Zmc2V0UHJvcCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbb2Zmc2V0UHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbb2Zmc2V0UHJvcF07XG4gICAgICB9XG4gICAgICBpZiAoZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRFbGVtZW50W3Njcm9sbFByb3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJvZHlbc2Nyb2xsUHJvcF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgZ2V0U2Nyb2xsKCdzY3JvbGxMZWZ0JywgJ3BhZ2VYT2Zmc2V0JyksXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBnZXRTY3JvbGwoJ3Njcm9sbFRvcCcsICdwYWdlWU9mZnNldCcpXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRCZWhpbmRQb2ludChwb2ludCwgeCwgeSkge1xuICAgICAgaWYgKCF4ICYmICF5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHAgPSBwb2ludCB8fCB7fSxcbiAgICAgICAgc3RhdGUgPSBwLmNsYXNzTmFtZSxcbiAgICAgICAgZWw7XG4gICAgICBwLmNsYXNzTmFtZSArPSAnICcgKyBvLmNsYXNzZXMuaGlkZTtcbiAgICAgIGVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgIHAuY2xhc3NOYW1lID0gc3RhdGU7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZ0V2ZW50KGVsLCBvcCwgdHlwZSwgZm4pIHtcbiAgICB2YXIgdG91Y2ggPSB7XG4gICAgICAgIG1vdXNldXA6ICd0b3VjaGVuZCcsXG4gICAgICAgIG1vdXNlZG93bjogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3VzZW1vdmU6ICd0b3VjaG1vdmUnXG4gICAgICB9LFxuICAgICAgJGVsID0gYW5ndWxhci5lbGVtZW50KGVsKTtcblxuICAgICRlbFtvcF0odG91Y2hbdHlwZV0sIGZuKTtcbiAgICAkZWxbb3BdKHR5cGUsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsd2F5cygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRFbChlbCkge1xuICAgIHJldHVybiBlbC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbWFudWFsbHkoKTtcblxuICAgIGZ1bmN0aW9uIG1hbnVhbGx5KCkge1xuICAgICAgdmFyIHNpYmxpbmcgPSBlbDtcbiAgICAgIGRvIHtcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICB9IHdoaWxlIChzaWJsaW5nICYmIHNpYmxpbmcubm9kZVR5cGUgIT09IDEpO1xuICAgICAgcmV0dXJuIHNpYmxpbmc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbC5jbGFzc05hbWUuaW5kZXhPZignICcgKyBjbGFzc05hbWUpID09PSAtMSkge1xuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBybUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBhbmd1bGFyLmVsZW1lbnQoZWwpLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuICgnICcgKyBlbC5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyAnICsgY2xhc3NOYW1lICsgJyAnKSA+IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICBpZiAodHlwZW9mIGUudGFyZ2V0VG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBlW2Nvb3JkXTtcbiAgICB9XG4gICAgLy8gb24gdG91Y2hlbmQgZXZlbnQsIHdlIGhhdmUgdG8gdXNlIGBlLmNoYW5nZWRUb3VjaGVzYFxuICAgIC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcxOTI1NjMvdG91Y2hlbmQtZXZlbnQtcHJvcGVydGllc1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMzRcbiAgICByZXR1cm4gKFxuICAgICAgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoICYmIGUudGFyZ2V0VG91Y2hlc1swXVtjb29yZF0pIHx8XG4gICAgICAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdW2Nvb3JkXSkgfHxcbiAgICAgIDBcbiAgICApO1xuICB9XG5cbn0pLmRpcmVjdGl2ZSgnZHJhZ3VsYXInLCBmdW5jdGlvbihkcmFndWxhclNlcnZpY2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCRzY29wZSwgaUVsbSwgaUF0dHJzKSB7XG4gICAgZHJhZ3VsYXJTZXJ2aWNlKGlFbG1bMF0sICRzY29wZVtpQXR0cnMuZHJhZ3VsYXIgfHwgJ3VuZGVmaW5lZCddKTtcbiAgfTtcbn0pO1xuIl19
