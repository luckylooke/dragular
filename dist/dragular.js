(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

      var options = $scope[iAttrs.dragular] || tryJson(iAttrs.dragular);

      function tryJson(json) {
        try { // I dont like try catch solutions but I havent find sattisfying way of chcecking json validity.
          return JSON.parse(json);
        } catch (e) {
          return undefined;
        }
      }

      if(options && options.containersModel && typeof options.containersModel === 'string'){
        options.containersModel = $scope.$eval(options.containersModel);
      }

      dragularService(iElm[0], options);
    }
  };
}]);

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

dragularModule.factory('dragularService', ['$rootScope', '$timeout', function dragula($rootScope, $timeout) {

  var containersNameSpaced = {}, // name-spaced containers
    containersNameSpacedModel = {}, // name-spaced containers models
    _cache = {}, // classes lookup cache
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
      _lastDropTarget = null, // last container item was over
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

    if (o.mirrorContainer === void 0) {
      o.mirrorContainer = document.body;
    }

    // get initial containers from options, argument or fall back to empty array (containers can be added later)
    initialContainers = o.containers || (initialContainers ? makeArray(initialContainers) : []);
    if (o.containers) {
      // make array from o.containers
      initialContainers = makeArray(initialContainers);
    }
    if (o.containersModel) {
      o.containersModel = Array.isArray(o.containersModel[0]) ? o.containersModel : [o.containersModel];
    }

    function proceedNameSpaces(_containers, containersNameSpaced, nameSpace, initialContainers) {
      if (!containersNameSpaced[nameSpace]) {
        containersNameSpaced[nameSpace] = [];
      }
      Array.prototype.push.apply(containersNameSpaced[nameSpace], initialContainers);
      _containers[nameSpace] = containersNameSpaced[nameSpace];
    }

    // feed namespaced containers groups and optionaly shadow it by models
    if (o.nameSpace) {
      if (!Array.isArray(o.nameSpace)) {
        o.nameSpace = [o.nameSpace];
      }
      o.nameSpace.forEach(function eachNameSpace(nameSpace) {
        proceedNameSpaces(_containers, containersNameSpaced, nameSpace, initialContainers);
        if (o.containersModel) {
          proceedNameSpaces(_containersModel, containersNameSpacedModel, nameSpace, o.containersModel);
        }
      });
      _isContainer = isContainerNameSpaced;
    } else {
      // default (not using nameSpaces)
      _containers = initialContainers;
      _isContainer = isContainer;
      if (o.containersModel) {
        _containersModel = o.containersModel;
      }
    }

    //register events
    events();

    var drake = {
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

    return drake;

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
          if (o.nameSpace) {
            angular.forEach(o.nameSpace, function addRemoveNamespaced(containers, nameSpace) {
              if (op === 'add') {
                _containers[nameSpace].push(container);
                console.warn && console.warn('drake.addContainer is deprecated. please access drake.containers directly, instead');
              } else {
                _containers[nameSpace].splice(_containers.indexOf(container), 1);
                console.warn && console.warn('drake.removeContainer is deprecated. please access drake.containers directly, instead');
              }
            });
          } else {
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
      return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
    }

    function isContainerNameSpaced(el) {
      var nameSpace;
      for (nameSpace in drake.containers) {
        if (drake.containers.hasOwnProperty(nameSpace) && drake.containers[nameSpace].indexOf(el) !== -1) {
          return true;
        }
      }
      return false;
    }

    function events(rem) {
      var op = rem ? 'off' : 'on';
      regEvent(documentElement, op, 'mouseup', release);

      initialContainers.forEach(function addMouseDown(container) {
        regEvent(container, 'on', 'mousedown', grab);
      });
    }

    function destroy() {
      events(true);
      drake.removeContainer(_containers);
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
        _renderTimer = $timeout(function() {
          renderMirrorAndDrag(e);
        }, o.delay);
      } else {
        renderMirrorAndDrag(e);
      }

      e.preventDefault();
    }

    function renderMirrorAndDrag(e) {
      addClass(_copy || _item, o.classes.transit);
      renderMirrorImage();
      // initial position
      _mirror.style.left = _clientX - _offsetX + 'px';
      _mirror.style.top = _clientY - _offsetY + 'px';

      drag(e);
    }


    function start(item) {
      var handle = item;

      if (drake.dragging && _mirror) {
        return; // already dragging
      }

      if (_isContainer(item)) {
        return; // don't drag container itself
      }

      while (item.parentElement && !_isContainer(item.parentElement)) {
        // break loop if user tries to drag item which is considered invalid handle
        if (o.invalid(item, handle)) {
          return;
        }
        item = item.parentElement; // drag target should be immediate child of container
        if (!item) {
          return;
        }
      }

      var container = item.parentElement;
      if (!container) {
        return;
      }
      if (!container || o.invalid(item, handle) || !o.moves(item, container, handle, _itemModel, _sourceModel)) { // is movable
        return;
      }

      end();

      // prepare models operations
      if (o.containersModel) {
        var containerIndex = initialContainers.indexOf(container),
          itemIndex = domIndexOf(item, container);

        _initialIndex = _currentIndex = itemIndex;
        _sourceModel = o.containersModel[containerIndex];
        _targetModel = _sourceModel;
        _itemModel = _sourceModel[itemIndex];
        if (o.copy) {
          _copyModel = angular.copy(_itemModel);
        }
      }

      if (o.copy) {
        _copy = item.cloneNode(true);
        if (o.scope) {
          o.scope.$emit('cloned', _copy, item, _copyModel, _itemModel);
        }
      }

      _source = container;
      _item = item;
      _initialSibling = _currentSibling = nextEl(item);

      drake.dragging = true;
      if (o.scope) {
        o.scope.$emit('drag', _item, _source);
      }

      return true;
    }

    function invalidTarget(el) {
      return el.tagName === 'A' || el.tagName === 'BUTTON';
    }

    function end() {
      if (!drake.dragging) {
        return;
      }
      console.log('!!!!! I havent seen this message in any case');
      var item = _copy || _item;
      drop(item, item.parentElement);
    }

    function release(e) {
      if (!drake.dragging) {
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
      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item,
        parent = item.parentElement,
        itemModel;

      if (!o.containersModel) {
        if (parent) {
          parent.removeChild(item);
        }
      } else {
        itemModel = _copyModel || _itemModel;
        _targetModel.splice(_targetModel.indexOf(itemModel), 1);
      }

      if (o.scope) {
        o.scope.$emit(o.copy ? 'cancel' : 'remove', item, parent, itemModel, _sourceModel, _targetModel);
      }
      cleanup();
    }

    function cancel(revert) {
      if (!drake.dragging) {
        return;
      }
      var reverts = arguments.length > 0 ? revert : o.revertOnSpill,
        item = _copy || _item,
        parent = item.parentElement;

      if (parent === _source && o.copy) {
        console.log('!!!!!!!!!!!!!!!!! I think this is never possible because copy cannot be placed into source');
        if (!o.containersModel) {
          parent.removeChild(_copy);
        } else {
          _targetModel.splice(_targetModel.indexOf(_copyModel), 1, _copyModel);
        }
      }

      var initial = isInitialPlacement(parent);
      if (initial === false && o.copy === false && reverts) {
        if (!o.containersModel) {
          _source.insertBefore(item, _initialSibling);
        } else {
          _lastTargetModel = _targetModel;
          _targetModel = _sourceModel;
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
        $timeout.cancel(_renderTimer);
      }

      drake.dragging = false;

      if (o.scope) {
        o.scope.$emit('dragend', item);
        o.scope.$emit('out', item, _lastDropTarget, _source);
      }

      _source = _item = _copy = _initialSibling = _currentSibling = _sourceModel = null;
      _itemModel = _copyModel = _initialIndex = _currentIndex = _renderTimer = _lastDropTarget = null;
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

          if (accepts && o.containersModel) {
            _lastTargetModel = _targetModel;
            if (!o.nameSpace) {
              _targetModel = _containersModel[drake.containers.indexOf(target)];
            } else {
              for (var nameSpace in drake.containers) {
                if (drake.containers.hasOwnProperty(nameSpace) && drake.containers[nameSpace].indexOf(target) !== -1) {
                  _lastTargetModel = _targetModel;
                  _targetModel = _containersModel[nameSpace][drake.containers[nameSpace].indexOf(target)];
                  break;
                }
              }
            }
          }
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
        dropTarget = findDropTarget(elementBehindCursor, _clientX, _clientY),
        changed = dropTarget !== null && dropTarget !== _lastDropTarget;

      if (changed || dropTarget === null) {
        if (o.scope) {
          out();
          _lastDropTarget = dropTarget;
          over();
        } else {
          _lastDropTarget = dropTarget;
        }
      }

      // do not copy in same container
      if (dropTarget === _source && o.copy) {
        if (!o.containersModel && item.parentElement) {
          item.parentElement.removeChild(item);
        } else if (o.containersModel && _lastTargetModel.indexOf(_copyModel) !== -1) {
          _lastTargetModel.splice(_lastTargetModel.indexOf(_copyModel), 1);
          $rootScope.$applyAsync();
        }
        return;
      }

      var reference,
        immediate = getImmediateChild(dropTarget, elementBehindCursor),
        referenceIndex;

      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, _clientX, _clientY);
        if (o.containersModel) {
          if (reference) { // reference is null if drag is over last element
            referenceIndex = domIndexOf(reference, dropTarget);
          } else {
            referenceIndex = null;
          }
        }
      } else if (o.revertOnSpill === true && !o.copy) {
        // the case that mirror is not over valid target and reverting is on and copy is off
        reference = _initialSibling;
        dropTarget = _source;

        // getting model intitial properties into current
        if (o.containersModel) {
          referenceIndex = _initialIndex;
          _lastTargetModel = _targetModel;
          _targetModel = _sourceModel;
        }
      } else {
        // the case that mirror is not over valid target and removing is on or copy is on
        if ((o.copy || o.removeOnSpill === true) && item.parentElement !== null) {
          // remove item or copy of item
          if (!o.containersModel) {
            item.parentElement.removeChild(item);
          } else {
            _targetModel.splice(referenceIndex, 1);
            $rootScope.$applyAsync();
          }
        }
        return;
      }
      if (reference === null ||
        reference !== item &&
        reference !== nextEl(item) &&
        reference !== _currentSibling) {
        // moving item/copy to new container from previous one
        _currentSibling = reference;

        if (!o.containersModel) {
          dropTarget.insertBefore(item, reference); // if reference is null item is inserted at the end
        } else {
          moveInContainersModel(referenceIndex);
        }

        if (o.scope) {
          o.scope.$emit('shadow', item, dropTarget);
        }
      }

      function moved(type) {
        o.scope.$emit(type, item, _lastDropTarget, _source);
      }

      function over() {
        if (changed) {
          moved('over');
        }
      }

      function out() {
        if (_lastDropTarget) {
          moved('out');
        }
      }
    }

    function moveInContainersModel(referenceIndex) {
      if (_lastTargetModel === _targetModel) {
        if (referenceIndex === null) {
          referenceIndex = _targetModel.length;
        }
        var index = referenceIndex > _currentIndex ? referenceIndex - 1 : referenceIndex;
        _targetModel.splice(index, 0, _lastTargetModel.splice(_currentIndex, 1)[0]);
        _currentIndex = index;
      } else {
        if (referenceIndex === null) {
          referenceIndex = _targetModel.length - 1;
        }
        if (!o.copy || _lastTargetModel !== _sourceModel) { // dont remove original from source while copying
          _lastTargetModel.splice(_currentIndex, 1);
        }
        if (!o.copy || _targetModel.indexOf(_copyModel) === -1) { // dont place copy twice in one drag
          _targetModel.splice(referenceIndex, 0, _copyModel || _itemModel);
          _currentIndex = referenceIndex;
        }
      }
      $rootScope.$applyAsync();
    }

    function scrollContainer(e) {
      if (_targetContainer) {
        _targetContainer.scrollTop += e.deltaY;
        e.stopPropagation();
        e.preventDefault();
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
      o.mirrorContainer.appendChild(_mirror);
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
        mousemove: 'touchmove',
        wheel: 'wheel'
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

  function lookupClass(className) {
    var cached = _cache[className];
    if (cached) {
      cached.lastIndex = 0;
    } else {
      _cache[className] = cached = new RegExp('(?:^|\\s)' + className + '(?:\\s|$)', 'g');
    }
    return cached;
  }

  function addClass(el, className) {
    var current = el.className;
    if (!current.length) {
      el.className = className;
    } else if (!lookupClass(className).test(current)) {
      el.className += ' ' + className;
    }
  }

  function rmClass(el, className) {
    el.className = el.className.replace(lookupClass(className), ' ').trim();
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

  function domIndexOf(child, parent) {
    return Array.prototype.indexOf.call(angular.element(parent).children(), child);
  }

}]);

},{"./dragularModule":2}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9zcmMvZHJhZ3VsYXJEaXJlY3RpdmUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9zcmMvZHJhZ3VsYXJNb2R1bGUuanMiLCIvaG9tZS9jdGlib3IvcHJvamVjdHMvYWRtaW5tb2RlL25vZGVfbW9kdWxlcy9kcmFndWxhci9zcmMvZHJhZ3VsYXJTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7OztDQU1DLElBQUksaUJBQWlCLFFBQVE7Ozs7OztBQU05QixlQUFlLFVBQVUsWUFBWSxDQUFDLG1CQUFtQixTQUFTLGlCQUFpQjtFQUNqRixPQUFPO0lBQ0wsVUFBVTtJQUNWLE1BQU0sU0FBUyxRQUFRLE1BQU0sUUFBUTs7TUFFbkMsSUFBSSxVQUFVLE9BQU8sT0FBTyxhQUFhLFFBQVEsT0FBTzs7TUFFeEQsU0FBUyxRQUFRLE1BQU07UUFDckIsSUFBSTtVQUNGLE9BQU8sS0FBSyxNQUFNO1VBQ2xCLE9BQU8sR0FBRztVQUNWLE9BQU87Ozs7TUFJWCxHQUFHLFdBQVcsUUFBUSxtQkFBbUIsT0FBTyxRQUFRLG9CQUFvQixTQUFTO1FBQ25GLFFBQVEsa0JBQWtCLE9BQU8sTUFBTSxRQUFROzs7TUFHakQsZ0JBQWdCLEtBQUssSUFBSTs7OztBQUkvQjs7QUNuQ0E7QUFDQTs7OztBQUlBLE9BQU8sVUFBVSxRQUFRLE9BQU8sa0JBQWtCOztBQUVsRCxDQUFDLENBQUMsb0JBQW9CLFFBQVEsMEJBQTBCLGtCQUFrQixRQUFRO0FBQ2xGOztBQ1JBO0FBQ0E7Ozs7Ozs7QUFPQSxJQUFJLGlCQUFpQixRQUFROzs7Ozs7QUFNN0IsZUFBZSxRQUFRLG1CQUFtQixDQUFD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LEtBQUs7OztFQUcxQyxTQUFTLGNBQWMsTUFBTTtJQUMzQixPQUFPLEtBQUssV0FBVyxLQUFLLFNBQVMsS0FBSzs7O0VBRzVDLFNBQVMsV0FBVyxPQUFPLFFBQVE7SUFDakMsT0FBTyxNQUFNLFVBQVUsUUFBUSxLQUFLLFFBQVEsUUFBUSxRQUFRLFlBQVk7Ozs7QUFJNUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIGRyYWd1bGFyIERpcmVjdGl2ZSBieSBMdWNreWxvb2tlIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWNreWxvb2tlL2RyYWd1bGFyXG4gKiBBbmd1bGFyIHZlcnNpb24gb2YgZHJhZ3VsYSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYVxuICovXG4gdmFyIGRyYWd1bGFyTW9kdWxlID0gcmVxdWlyZSgnLi9kcmFndWxhck1vZHVsZScpO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuXG5kcmFndWxhck1vZHVsZS5kaXJlY3RpdmUoJ2RyYWd1bGFyJywgWydkcmFndWxhclNlcnZpY2UnLCBmdW5jdGlvbihkcmFndWxhclNlcnZpY2UpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uKCRzY29wZSwgaUVsbSwgaUF0dHJzKSB7XG5cbiAgICAgIHZhciBvcHRpb25zID0gJHNjb3BlW2lBdHRycy5kcmFndWxhcl0gfHwgdHJ5SnNvbihpQXR0cnMuZHJhZ3VsYXIpO1xuXG4gICAgICBmdW5jdGlvbiB0cnlKc29uKGpzb24pIHtcbiAgICAgICAgdHJ5IHsgLy8gSSBkb250IGxpa2UgdHJ5IGNhdGNoIHNvbHV0aW9ucyBidXQgSSBoYXZlbnQgZmluZCBzYXR0aXNmeWluZyB3YXkgb2YgY2hjZWNraW5nIGpzb24gdmFsaWRpdHkuXG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5jb250YWluZXJzTW9kZWwgJiYgdHlwZW9mIG9wdGlvbnMuY29udGFpbmVyc01vZGVsID09PSAnc3RyaW5nJyl7XG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyc01vZGVsID0gJHNjb3BlLiRldmFsKG9wdGlvbnMuY29udGFpbmVyc01vZGVsKTtcbiAgICAgIH1cblxuICAgICAgZHJhZ3VsYXJTZXJ2aWNlKGlFbG1bMF0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcbn1dKTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdkcmFndWxhck1vZHVsZScsIFtdKTtcblxuKHtcImRyYWd1bGFyRGlyZWN0aXZlXCI6cmVxdWlyZShcIi4vZHJhZ3VsYXJEaXJlY3RpdmUuanNcIiksXCJkcmFndWxhclNlcnZpY2VcIjpyZXF1aXJlKFwiLi9kcmFndWxhclNlcnZpY2UuanNcIil9KTtcbiIsIi8qIGdsb2JhbCBhbmd1bGFyICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogZHJhZ3VsYXIgTW9kdWxlIGFuZCBTZXJ2aWNlIGJ5IEx1Y2t5bG9va2UgaHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5bG9va2UvZHJhZ3VsYXJcbiAqIEFuZ3VsYXIgdmVyc2lvbiBvZiBkcmFndWxhIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhXG4gKi9cblxudmFyIGRyYWd1bGFyTW9kdWxlID0gcmVxdWlyZSgnLi9kcmFndWxhck1vZHVsZScpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5cbmRyYWd1bGFyTW9kdWxlLmZhY3RvcnkoJ2RyYWd1bGFyU2VydmljZScsIFsnJHJvb3RTY29wZScsICckdGltZW91dCcsIGZ1bmN0aW9uIGRyYWd1bGEoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcblxuICB2YXIgY29udGFpbmVyc05hbWVTcGFjZWQgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVyc1xuICAgIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwgPSB7fSwgLy8gbmFtZS1zcGFjZWQgY29udGFpbmVycyBtb2RlbHNcbiAgICBfY2FjaGUgPSB7fSwgLy8gY2xhc3NlcyBsb29rdXAgY2FjaGVcbiAgICBfbWlycm9yOyAvLyBtaXJyb3IgaW1hZ2VcblxuICByZXR1cm4gZnVuY3Rpb24oaW5pdGlhbENvbnRhaW5lcnMsIG9wdGlvbnMpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxDb250YWluZXJzKSAmJiAhYW5ndWxhci5pc0VsZW1lbnQoaW5pdGlhbENvbnRhaW5lcnMpICYmICFpbml0aWFsQ29udGFpbmVyc1swXSkge1xuICAgICAgLy8gdGhlbiBjb250YWluZXJzIGFyZSBub3QgcHJvdmlkZWQsIG9ubHkgb3B0aW9uc1xuICAgICAgb3B0aW9ucyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBfc291cmNlLCAvLyBzb3VyY2UgY29udGFpbmVyXG4gICAgICBfaXRlbSwgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gICAgICBfc291cmNlTW9kZWwsIC8vIHNvdXJjZSBjb250YWluZXIgbW9kZWxcbiAgICAgIF9pdGVtTW9kZWwsIC8vIGl0ZW0tbW9kZWwgYmVpbmcgZHJhZ2dlZFxuICAgICAgX3RhcmdldE1vZGVsLCAvLyB0YXJnZXQgY29udGFpbmVyIG1vZGVsXG4gICAgICBfbGFzdFRhcmdldE1vZGVsLCAvLyBsYXN0IHRhcmdldCBjb250YWluZXIgbW9kZWxcbiAgICAgIF9sYXN0RHJvcFRhcmdldCA9IG51bGwsIC8vIGxhc3QgY29udGFpbmVyIGl0ZW0gd2FzIG92ZXJcbiAgICAgIF9vZmZzZXRYLCAvLyByZWZlcmVuY2UgeFxuICAgICAgX29mZnNldFksIC8vIHJlZmVyZW5jZSB5XG4gICAgICBfb2Zmc2V0WHIsIC8vIHJlZmVyZW5jZSB4IHJpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfb2Zmc2V0WWIsIC8vIHJlZmVyZW5jZSB5IGJvdHRvbSBmb3IgYm91bmRpbmdCb3ggZmVhdHVyZVxuICAgICAgX2NsaWVudFgsIC8vIGNhY2hlIGNsaWVudCB4LCBpbml0IGF0IGdyYWIsIHVwZGF0ZSBhdCBkcmFnXG4gICAgICBfY2xpZW50WSwgLy8gY2FjaGUgY2xpZW50IHksIGluaXQgYXQgZ3JhYiwgdXBkYXRlIGF0IGRyYWdcbiAgICAgIF9taXJyb3JXaWR0aCwgLy8gbWlycm9yIHdpZHRoIGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfbWlycm9ySGVpZ2h0LCAvLyBtaXJyb3IgaGVpZ2h0IGZvciBib3VuZGluZ0JveCBmZWF0dXJlXG4gICAgICBfaW5pdGlhbFNpYmxpbmcsIC8vIHJlZmVyZW5jZSBzaWJsaW5nIHdoZW4gZ3JhYmJlZFxuICAgICAgX2N1cnJlbnRTaWJsaW5nLCAvLyByZWZlcmVuY2Ugc2libGluZyBub3dcbiAgICAgIF9pbml0aWFsSW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCB3aGVuIGdyYWJiZWRcbiAgICAgIF9jdXJyZW50SW5kZXgsIC8vIHJlZmVyZW5jZSBtb2RlbCBpbmRleCBub3dcbiAgICAgIF9sYXN0T3ZlckVsZW0sIC8vIGxhc3QgZWxlbWVudCBiZWhpbmQgdGhlIGN1cnNvciAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfbGFzdE92ZXJDbGFzcywgLy8gbGFzdCBvdmVyQ2xhc3MgdXNlZCAoZHJhZ092ZXJDbGFzc2VzIGZlYXR1cmUpXG4gICAgICBfY29weSwgLy8gaXRlbSB1c2VkIGZvciBjb3B5aW5nXG4gICAgICBfY29weU1vZGVsLCAvLyBpdGVtLW1vZGVsIHVzZWQgZm9yIGNvcHlpbmdcbiAgICAgIF9jb250YWluZXJzID0ge30sIC8vIGNvbnRhaW5lcnMgbWFuYWdlZCBieSB0aGUgZHJha2VcbiAgICAgIF9jb250YWluZXJzTW9kZWwgPSB7fSwgLy8gY29udGFpbmVycyBtb2RlbFxuICAgICAgX3JlbmRlclRpbWVyLCAvLyB0aW1lciBmb3Igc2V0VGltZW91dCByZW5kZXJNaXJyb3JJbWFnZVxuICAgICAgX2lzQ29udGFpbmVyLCAvLyBpbnRlcm5hbCBpc0NvbnRhaW5lclxuICAgICAgX3RhcmdldENvbnRhaW5lciwgLy8gZHJvcHBhYmxlIGNvbnRhaW5lciB1bmRlciBkcmFnIGl0ZW1cbiAgICAgIGRlZmF1bHRDbGFzc2VzID0ge1xuICAgICAgICBtaXJyb3I6ICdndS1taXJyb3InLFxuICAgICAgICBoaWRlOiAnZ3UtaGlkZScsXG4gICAgICAgIHVuc2VsZWN0YWJsZTogJ2d1LXVuc2VsZWN0YWJsZScsXG4gICAgICAgIHRyYW5zaXQ6ICdndS10cmFuc2l0JyxcbiAgICAgICAgb3ZlckFjdGl2ZTogJ2d1LW92ZXItYWN0aXZlJyxcbiAgICAgICAgb3ZlckFjY2VwdHM6ICdndS1vdmVyLWFjY2VwdCcsXG4gICAgICAgIG92ZXJEZWNsaW5lczogJ2d1LW92ZXItZGVjbGluZSdcbiAgICAgIH0sXG4gICAgICBvID0geyAvLyBvcHRpb25zXG4gICAgICAgIGNsYXNzZXM6IGRlZmF1bHRDbGFzc2VzLFxuICAgICAgICBjb250YWluZXJzOiBmYWxzZSxcbiAgICAgICAgbW92ZXM6IGFsd2F5cyxcbiAgICAgICAgYWNjZXB0czogYWx3YXlzLFxuICAgICAgICBpc0NvbnRhaW5lcjogbmV2ZXIsXG4gICAgICAgIGNvcHk6IGZhbHNlLFxuICAgICAgICBkZWxheTogZmFsc2UsXG4gICAgICAgIGludmFsaWQ6IGludmFsaWRUYXJnZXQsXG4gICAgICAgIHJldmVydE9uU3BpbGw6IGZhbHNlLFxuICAgICAgICByZW1vdmVPblNwaWxsOiBmYWxzZSxcbiAgICAgICAgZHJhZ092ZXJDbGFzc2VzOiBmYWxzZSxcbiAgICAgICAgbG9ja1g6IGZhbHNlLFxuICAgICAgICBsb2NrWTogZmFsc2UsXG4gICAgICAgIGJvdW5kaW5nQm94OiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyc01vZGVsOiBmYWxzZVxuICAgICAgfTtcblxuICAgIGlmICghaXNFbGVtZW50KG8uYm91bmRpbmdCb3gpKSB7XG4gICAgICBvLmJvdW5kaW5nQm94ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmNsYXNzZXMpIHtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRlZmF1bHRDbGFzc2VzLCBvcHRpb25zLmNsYXNzZXMpO1xuICAgICAgYW5ndWxhci5leHRlbmQob3B0aW9ucy5jbGFzc2VzLCBkZWZhdWx0Q2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgYW5ndWxhci5leHRlbmQobywgb3B0aW9ucyk7XG5cbiAgICBpZiAoby5kZWxheSA9PT0gdHJ1ZSkge1xuICAgICAgby5kZWxheSA9IDMwMDtcbiAgICB9XG5cbiAgICBpZiAoby5taXJyb3JDb250YWluZXIgPT09IHZvaWQgMCkge1xuICAgICAgby5taXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIC8vIGdldCBpbml0aWFsIGNvbnRhaW5lcnMgZnJvbSBvcHRpb25zLCBhcmd1bWVudCBvciBmYWxsIGJhY2sgdG8gZW1wdHkgYXJyYXkgKGNvbnRhaW5lcnMgY2FuIGJlIGFkZGVkIGxhdGVyKVxuICAgIGluaXRpYWxDb250YWluZXJzID0gby5jb250YWluZXJzIHx8IChpbml0aWFsQ29udGFpbmVycyA/IG1ha2VBcnJheShpbml0aWFsQ29udGFpbmVycykgOiBbXSk7XG4gICAgaWYgKG8uY29udGFpbmVycykge1xuICAgICAgLy8gbWFrZSBhcnJheSBmcm9tIG8uY29udGFpbmVyc1xuICAgICAgaW5pdGlhbENvbnRhaW5lcnMgPSBtYWtlQXJyYXkoaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgIH1cbiAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgIG8uY29udGFpbmVyc01vZGVsID0gQXJyYXkuaXNBcnJheShvLmNvbnRhaW5lcnNNb2RlbFswXSkgPyBvLmNvbnRhaW5lcnNNb2RlbCA6IFtvLmNvbnRhaW5lcnNNb2RlbF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2VlZE5hbWVTcGFjZXMoX2NvbnRhaW5lcnMsIGNvbnRhaW5lcnNOYW1lU3BhY2VkLCBuYW1lU3BhY2UsIGluaXRpYWxDb250YWluZXJzKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV0pIHtcbiAgICAgICAgY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSA9IFtdO1xuICAgICAgfVxuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyc05hbWVTcGFjZWRbbmFtZVNwYWNlXSwgaW5pdGlhbENvbnRhaW5lcnMpO1xuICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXSA9IGNvbnRhaW5lcnNOYW1lU3BhY2VkW25hbWVTcGFjZV07XG4gICAgfVxuXG4gICAgLy8gZmVlZCBuYW1lc3BhY2VkIGNvbnRhaW5lcnMgZ3JvdXBzIGFuZCBvcHRpb25hbHkgc2hhZG93IGl0IGJ5IG1vZGVsc1xuICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8ubmFtZVNwYWNlKSkge1xuICAgICAgICBvLm5hbWVTcGFjZSA9IFtvLm5hbWVTcGFjZV07XG4gICAgICB9XG4gICAgICBvLm5hbWVTcGFjZS5mb3JFYWNoKGZ1bmN0aW9uIGVhY2hOYW1lU3BhY2UobmFtZVNwYWNlKSB7XG4gICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzLCBjb250YWluZXJzTmFtZVNwYWNlZCwgbmFtZVNwYWNlLCBpbml0aWFsQ29udGFpbmVycyk7XG4gICAgICAgIGlmIChvLmNvbnRhaW5lcnNNb2RlbCkge1xuICAgICAgICAgIHByb2NlZWROYW1lU3BhY2VzKF9jb250YWluZXJzTW9kZWwsIGNvbnRhaW5lcnNOYW1lU3BhY2VkTW9kZWwsIG5hbWVTcGFjZSwgby5jb250YWluZXJzTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIF9pc0NvbnRhaW5lciA9IGlzQ29udGFpbmVyTmFtZVNwYWNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdCAobm90IHVzaW5nIG5hbWVTcGFjZXMpXG4gICAgICBfY29udGFpbmVycyA9IGluaXRpYWxDb250YWluZXJzO1xuICAgICAgX2lzQ29udGFpbmVyID0gaXNDb250YWluZXI7XG4gICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgX2NvbnRhaW5lcnNNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vcmVnaXN0ZXIgZXZlbnRzXG4gICAgZXZlbnRzKCk7XG5cbiAgICB2YXIgZHJha2UgPSB7XG4gICAgICBhZGRDb250YWluZXI6IG1hbmlwdWxhdGVDb250YWluZXJzKCdhZGQnKSxcbiAgICAgIHJlbW92ZUNvbnRhaW5lcjogbWFuaXB1bGF0ZUNvbnRhaW5lcnMoJ3JlbW92ZScpLFxuICAgICAgY29udGFpbmVyczogX2NvbnRhaW5lcnMsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGNhbmNlbDogY2FuY2VsLFxuICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHJldHVybiBkcmFrZTtcblxuICAgIC8vIG1ha2UgYXJyYXkgZnJvbSBhcnJheS1saWtlIG9iamVjdHMgb3IgZnJvbSBzaW5nbGUgZWxlbWVudFxuICAgIGZ1bmN0aW9uIG1ha2VBcnJheShhbGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFsbCkpIHtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICAgIH1cbiAgICAgIGlmIChhbGwubGVuZ3RoKSB7IC8vIGlzIGFycmF5LWxpa2VcbiAgICAgICAgdmFyIGlBbGwgPSBhbGwubGVuZ3RoLFxuICAgICAgICAgIG5ld0FycmF5ID0gW107XG4gICAgICAgIHdoaWxlIChpQWxsKSB7XG4gICAgICAgICAgaUFsbC0tO1xuICAgICAgICAgIG5ld0FycmF5LnB1c2goYWxsW2lBbGxdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICB9IGVsc2UgeyAvLyBpcyBvbmUgZWxlbWVudFxuICAgICAgICByZXR1cm4gW2FsbF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIG9yIHJlbW92ZSBjb250YWluZXJzIC0gZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIG1hbmlwdWxhdGVDb250YWluZXJzKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYWRkT3JSZW1vdmUoYWxsKSB7XG4gICAgICAgIHZhciBjaGFuZ2VzID0gQXJyYXkuaXNBcnJheShhbGwpID8gYWxsIDogbWFrZUFycmF5KGFsbCk7XG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgICAgICAgIGlmIChvLm5hbWVTcGFjZSkge1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKG8ubmFtZVNwYWNlLCBmdW5jdGlvbiBhZGRSZW1vdmVOYW1lc3BhY2VkKGNvbnRhaW5lcnMsIG5hbWVTcGFjZSkge1xuICAgICAgICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lcnNbbmFtZVNwYWNlXS5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UuYWRkQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9jb250YWluZXJzW25hbWVTcGFjZV0uc3BsaWNlKF9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSwgMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignZHJha2UucmVtb3ZlQ29udGFpbmVyIGlzIGRlcHJlY2F0ZWQuIHBsZWFzZSBhY2Nlc3MgZHJha2UuY29udGFpbmVycyBkaXJlY3RseSwgaW5zdGVhZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wID09PSAnYWRkJykge1xuICAgICAgICAgICAgICBfY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ2RyYWtlLmFkZENvbnRhaW5lciBpcyBkZXByZWNhdGVkLiBwbGVhc2UgYWNjZXNzIGRyYWtlLmNvbnRhaW5lcnMgZGlyZWN0bHksIGluc3RlYWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9jb250YWluZXJzLnNwbGljZShfY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpO1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKCdkcmFrZS5yZW1vdmVDb250YWluZXIgaXMgZGVwcmVjYXRlZC4gcGxlYXNlIGFjY2VzcyBkcmFrZS5jb250YWluZXJzIGRpcmVjdGx5LCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDb250YWluZXIoZWwpIHtcbiAgICAgIHJldHVybiBkcmFrZS5jb250YWluZXJzLmluZGV4T2YoZWwpICE9PSAtMSB8fCBvLmlzQ29udGFpbmVyKGVsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NvbnRhaW5lck5hbWVTcGFjZWQoZWwpIHtcbiAgICAgIHZhciBuYW1lU3BhY2U7XG4gICAgICBmb3IgKG5hbWVTcGFjZSBpbiBkcmFrZS5jb250YWluZXJzKSB7XG4gICAgICAgIGlmIChkcmFrZS5jb250YWluZXJzLmhhc093blByb3BlcnR5KG5hbWVTcGFjZSkgJiYgZHJha2UuY29udGFpbmVyc1tuYW1lU3BhY2VdLmluZGV4T2YoZWwpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZlbnRzKHJlbSkge1xuICAgICAgdmFyIG9wID0gcmVtID8gJ29mZicgOiAnb24nO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNldXAnLCByZWxlYXNlKTtcblxuICAgICAgaW5pdGlhbENvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiBhZGRNb3VzZURvd24oY29udGFpbmVyKSB7XG4gICAgICAgIHJlZ0V2ZW50KGNvbnRhaW5lciwgJ29uJywgJ21vdXNlZG93bicsIGdyYWIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGV2ZW50cyh0cnVlKTtcbiAgICAgIGRyYWtlLnJlbW92ZUNvbnRhaW5lcihfY29udGFpbmVycyk7XG4gICAgICByZWxlYXNlKHt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiKGUpIHtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIHZhciBpdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgIC8vIGZpbHRlciBzb21lIG9kZCBzaXR1YXRpb25zXG4gICAgICBpZiAoKGUud2hpY2ggIT09IDAgJiYgZS53aGljaCAhPT0gMSkgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm47IC8vIHdlIG9ubHkgY2FyZSBhYm91dCBob25lc3QtdG8tZ29kIGxlZnQgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgZHJhZyBjYW4gc3RhcnRcbiAgICAgIGlmIChzdGFydChpdGVtKSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG9tYXRpY2x5IGRldGVjdCBkaXJlY3Rpb24gb2YgZWxlbWVudHMgaWYgbm90IHNldCBpbiBvcHRpb25zXG4gICAgICBpZiAoIW8uZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgcGFyZW50SGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICBwYXJlbnRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBjaGlsZEhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGNoaWxkV2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuICAgICAgICBvLmRpcmVjdGlvbiA9IHBhcmVudEhlaWdodCAvIGNoaWxkSGVpZ2h0IDwgcGFyZW50V2lkdGggLyBjaGlsZFdpZHRoID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXMsIHVzZWQgdG8gcmVuZGVyIF9taXJyb3IgZm9yIGZpcnN0IHRpbWVcbiAgICAgIHZhciBvZmZzZXQgPSBnZXRPZmZzZXQoX2l0ZW0pO1xuICAgICAgX29mZnNldFggPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5sZWZ0O1xuICAgICAgX29mZnNldFkgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC50b3A7XG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIC8vIGxpbWl0aW5nIGFyZWEgb2YgX21pcnJvciBtb3ZlbWVudCwgZ2V0IGluaXRpYWwgY29vcmRpbmF0ZXNcbiAgICAgIGlmIChvLmJvdW5kaW5nQm94KSB7XG4gICAgICAgIF9vZmZzZXRYciA9IGdldENvb3JkKCdwYWdlWCcsIGUpIC0gb2Zmc2V0LnJpZ2h0O1xuICAgICAgICBfb2Zmc2V0WWIgPSBnZXRDb29yZCgncGFnZVknLCBlKSAtIG9mZnNldC5ib3R0b207XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbGF5ZWQgcmVuZGVyaW5nXG4gICAgICBpZiAodHlwZW9mIG8uZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIF9yZW5kZXJUaW1lciA9ICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlbmRlck1pcnJvckFuZERyYWcoZSk7XG4gICAgICAgIH0sIG8uZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyTWlycm9yQW5kRHJhZyhlKTtcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckFuZERyYWcoZSkge1xuICAgICAgYWRkQ2xhc3MoX2NvcHkgfHwgX2l0ZW0sIG8uY2xhc3Nlcy50cmFuc2l0KTtcbiAgICAgIHJlbmRlck1pcnJvckltYWdlKCk7XG4gICAgICAvLyBpbml0aWFsIHBvc2l0aW9uXG4gICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSBfY2xpZW50WCAtIF9vZmZzZXRYICsgJ3B4JztcbiAgICAgIF9taXJyb3Iuc3R5bGUudG9wID0gX2NsaWVudFkgLSBfb2Zmc2V0WSArICdweCc7XG5cbiAgICAgIGRyYWcoZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdGFydChpdGVtKSB7XG4gICAgICB2YXIgaGFuZGxlID0gaXRlbTtcblxuICAgICAgaWYgKGRyYWtlLmRyYWdnaW5nICYmIF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBhbHJlYWR5IGRyYWdnaW5nXG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBkb24ndCBkcmFnIGNvbnRhaW5lciBpdHNlbGZcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGl0ZW0ucGFyZW50RWxlbWVudCAmJiAhX2lzQ29udGFpbmVyKGl0ZW0ucGFyZW50RWxlbWVudCkpIHtcbiAgICAgICAgLy8gYnJlYWsgbG9vcCBpZiB1c2VyIHRyaWVzIHRvIGRyYWcgaXRlbSB3aGljaCBpcyBjb25zaWRlcmVkIGludmFsaWQgaGFuZGxlXG4gICAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtID0gaXRlbS5wYXJlbnRFbGVtZW50OyAvLyBkcmFnIHRhcmdldCBzaG91bGQgYmUgaW1tZWRpYXRlIGNoaWxkIG9mIGNvbnRhaW5lclxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRhaW5lciA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghY29udGFpbmVyIHx8IG8uaW52YWxpZChpdGVtLCBoYW5kbGUpIHx8ICFvLm1vdmVzKGl0ZW0sIGNvbnRhaW5lciwgaGFuZGxlLCBfaXRlbU1vZGVsLCBfc291cmNlTW9kZWwpKSB7IC8vIGlzIG1vdmFibGVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbmQoKTtcblxuICAgICAgLy8gcHJlcGFyZSBtb2RlbHMgb3BlcmF0aW9uc1xuICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGluaXRpYWxDb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKSxcbiAgICAgICAgICBpdGVtSW5kZXggPSBkb21JbmRleE9mKGl0ZW0sIGNvbnRhaW5lcik7XG5cbiAgICAgICAgX2luaXRpYWxJbmRleCA9IF9jdXJyZW50SW5kZXggPSBpdGVtSW5kZXg7XG4gICAgICAgIF9zb3VyY2VNb2RlbCA9IG8uY29udGFpbmVyc01vZGVsW2NvbnRhaW5lckluZGV4XTtcbiAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICBfaXRlbU1vZGVsID0gX3NvdXJjZU1vZGVsW2l0ZW1JbmRleF07XG4gICAgICAgIGlmIChvLmNvcHkpIHtcbiAgICAgICAgICBfY29weU1vZGVsID0gYW5ndWxhci5jb3B5KF9pdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvLmNvcHkpIHtcbiAgICAgICAgX2NvcHkgPSBpdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfY29weSwgaXRlbSwgX2NvcHlNb2RlbCwgX2l0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3NvdXJjZSA9IGNvbnRhaW5lcjtcbiAgICAgIF9pdGVtID0gaXRlbTtcbiAgICAgIF9pbml0aWFsU2libGluZyA9IF9jdXJyZW50U2libGluZyA9IG5leHRFbChpdGVtKTtcblxuICAgICAgZHJha2UuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJhZycsIF9pdGVtLCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52YWxpZFRhcmdldChlbCkge1xuICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICdBJyB8fCBlbC50YWdOYW1lID09PSAnQlVUVE9OJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCchISEhISBJIGhhdmVudCBzZWVuIHRoaXMgbWVzc2FnZSBpbiBhbnkgY2FzZScpO1xuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICAgIGRyb3AoaXRlbSwgaXRlbS5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWxlYXNlKGUpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBfY2xpZW50WCA9IGdldENvb3JkKCdjbGllbnRYJywgZSk7XG4gICAgICBfY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG5cbiAgICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBnZXRFbGVtZW50QmVoaW5kUG9pbnQoX21pcnJvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIF9jbGllbnRYLCBfY2xpZW50WSk7XG5cbiAgICAgIGlmIChkcm9wVGFyZ2V0ICYmIChvLmNvcHkgPT09IGZhbHNlIHx8IGRyb3BUYXJnZXQgIT09IF9zb3VyY2UpKSB7XG4gICAgICAgIC8vIGZvdW5kIHZhbGlkIHRhcmdldCBhbmQgKGlzIG5vdCBjb3B5IGNhc2Ugb3IgdGFyZ2V0IGlzIG5vdCBpbml0aWFsIGNvbnRhaW5lcilcbiAgICAgICAgZHJvcChpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAoby5yZW1vdmVPblNwaWxsKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFmdGVyIHJlbGVhc2UgdGhlcmUgaXMgbm8gY29udGFpbmVyIGhvdmVyZWRcbiAgICAgIF90YXJnZXRDb250YWluZXIgPSBudWxsO1xuXG4gICAgICAvLyByZW1vdmUgY2xhc3NlcyBpZiB1c2VkXG4gICAgICBpZiAoby5kcmFnT3ZlckNsYXNzZXMgJiYgX2xhc3RPdmVyRWxlbSkge1xuICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgX2xhc3RPdmVyRWxlbSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJvcChpdGVtLCB0YXJnZXQpIHtcbiAgICAgIGlmIChvLnNjb3BlICYmIGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfSBlbHNlIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2Ryb3AnLCBpdGVtLCB0YXJnZXQsIF9zb3VyY2UsIF9jb3B5TW9kZWwgfHwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsLCBfdGFyZ2V0TW9kZWwpO1xuICAgICAgfVxuICAgICAgY2xlYW51cCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGlmICghZHJha2UuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50LFxuICAgICAgICBpdGVtTW9kZWw7XG5cbiAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbU1vZGVsID0gX2NvcHlNb2RlbCB8fCBfaXRlbU1vZGVsO1xuICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKF90YXJnZXRNb2RlbC5pbmRleE9mKGl0ZW1Nb2RlbCksIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KG8uY29weSA/ICdjYW5jZWwnIDogJ3JlbW92ZScsIGl0ZW0sIHBhcmVudCwgaXRlbU1vZGVsLCBfc291cmNlTW9kZWwsIF90YXJnZXRNb2RlbCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsKHJldmVydCkge1xuICAgICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmV2ZXJ0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gcmV2ZXJ0IDogby5yZXZlcnRPblNwaWxsLFxuICAgICAgICBpdGVtID0gX2NvcHkgfHwgX2l0ZW0sXG4gICAgICAgIHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcblxuICAgICAgaWYgKHBhcmVudCA9PT0gX3NvdXJjZSAmJiBvLmNvcHkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyEhISEhISEhISEhISEhISEhIEkgdGhpbmsgdGhpcyBpcyBuZXZlciBwb3NzaWJsZSBiZWNhdXNlIGNvcHkgY2Fubm90IGJlIHBsYWNlZCBpbnRvIHNvdXJjZScpO1xuICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9jb3B5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKF90YXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpLCAxLCBfY29weU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudChwYXJlbnQpO1xuICAgICAgaWYgKGluaXRpYWwgPT09IGZhbHNlICYmIG8uY29weSA9PT0gZmFsc2UgJiYgcmV2ZXJ0cykge1xuICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgX3NvdXJjZS5pbnNlcnRCZWZvcmUoaXRlbSwgX2luaXRpYWxTaWJsaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9zb3VyY2VNb2RlbDtcbiAgICAgICAgICAvLyBtb3ZlIGJhY2sgdG8gaW5pdGlhbCBwbGFjZW1lbnRcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwoX2luaXRpYWxJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG8uc2NvcGUgJiYgKGluaXRpYWwgfHwgcmV2ZXJ0cykpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnY2FuY2VsJywgaXRlbSwgX3NvdXJjZSk7XG4gICAgICB9IGVsc2UgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnZHJvcCcsIGl0ZW0sIHBhcmVudCwgX3NvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICAgIHJlbW92ZU1pcnJvckltYWdlKCk7XG5cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJtQ2xhc3MoaXRlbSwgby5jbGFzc2VzLnRyYW5zaXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBjYW5jZWwgdGltZXJcbiAgICAgIGlmIChfcmVuZGVyVGltZXIpIHtcbiAgICAgICAgJHRpbWVvdXQuY2FuY2VsKF9yZW5kZXJUaW1lcik7XG4gICAgICB9XG5cbiAgICAgIGRyYWtlLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQoJ2RyYWdlbmQnLCBpdGVtKTtcbiAgICAgICAgby5zY29wZS4kZW1pdCgnb3V0JywgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgX3NvdXJjZSA9IF9pdGVtID0gX2NvcHkgPSBfaW5pdGlhbFNpYmxpbmcgPSBfY3VycmVudFNpYmxpbmcgPSBfc291cmNlTW9kZWwgPSBudWxsO1xuICAgICAgX2l0ZW1Nb2RlbCA9IF9jb3B5TW9kZWwgPSBfaW5pdGlhbEluZGV4ID0gX2N1cnJlbnRJbmRleCA9IF9yZW5kZXJUaW1lciA9IF9sYXN0RHJvcFRhcmdldCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gaXMgaXRlbSBjdXJyZW50bHkgcGxhY2VkIGluIG9yaWdpbmFsIGNvbnRhaW5lciBhbmQgb3JpZ2luYWwgcG9zaXRpb24/XG4gICAgZnVuY3Rpb24gaXNJbml0aWFsUGxhY2VtZW50KHRhcmdldCwgcykge1xuICAgICAgdmFyIHNpYmxpbmcgPSBzIHx8IChfbWlycm9yID8gX2N1cnJlbnRTaWJsaW5nIDogbmV4dEVsKF9pdGVtIHx8IF9jb3B5KSk7XG4gICAgICByZXR1cm4gdGFyZ2V0ID09PSBfc291cmNlICYmIHNpYmxpbmcgPT09IF9pbml0aWFsU2libGluZztcbiAgICB9XG5cbiAgICAvLyBmaW5kIHZhbGlkIGRyb3AgY29udGFpbmVyXG4gICAgZnVuY3Rpb24gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnRCZWhpbmRDdXJzb3I7XG4gICAgICB3aGlsZSAodGFyZ2V0ICYmICFhY2NlcHRlZCgpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcblxuICAgICAgZnVuY3Rpb24gYWNjZXB0ZWQoKSB7XG4gICAgICAgIHZhciBhY2NlcHRzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF9pc0NvbnRhaW5lcih0YXJnZXQpKSB7IC8vIGlzIGRyb3BwYWJsZT9cbiAgICAgICAgICBfdGFyZ2V0Q29udGFpbmVyID0gdGFyZ2V0O1xuXG4gICAgICAgICAgdmFyIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKHRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvciksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UodGFyZ2V0LCBpbW1lZGlhdGUsIGNsaWVudFgsIGNsaWVudFkpLFxuICAgICAgICAgICAgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgYWNjZXB0cyA9IGluaXRpYWwgPyB0cnVlIDogby5hY2NlcHRzKF9pdGVtLCB0YXJnZXQsIF9zb3VyY2UsIHJlZmVyZW5jZSwgX2l0ZW1Nb2RlbCwgX3NvdXJjZU1vZGVsKTtcblxuICAgICAgICAgIGlmIChhY2NlcHRzICYmIG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsID0gX3RhcmdldE1vZGVsO1xuICAgICAgICAgICAgaWYgKCFvLm5hbWVTcGFjZSkge1xuICAgICAgICAgICAgICBfdGFyZ2V0TW9kZWwgPSBfY29udGFpbmVyc01vZGVsW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIG5hbWVTcGFjZSBpbiBkcmFrZS5jb250YWluZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRyYWtlLmNvbnRhaW5lcnMuaGFzT3duUHJvcGVydHkobmFtZVNwYWNlKSAmJiBkcmFrZS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZih0YXJnZXQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgX2xhc3RUYXJnZXRNb2RlbCA9IF90YXJnZXRNb2RlbDtcbiAgICAgICAgICAgICAgICAgIF90YXJnZXRNb2RlbCA9IF9jb250YWluZXJzTW9kZWxbbmFtZVNwYWNlXVtkcmFrZS5jb250YWluZXJzW25hbWVTcGFjZV0uaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBjbGFzcyBpZiBlbGVtZW50IGlzIGVuYWJsZWQgZm9yIGl0IGFuZCBpdCBoYXMgbm90IGFscmVhZHkgdGhlIGNsYXNzXG4gICAgICAgIGlmIChvLmRyYWdPdmVyQ2xhc3NlcyAmJlxuICAgICAgICAgIGhhc0NsYXNzKHRhcmdldCwgby5jbGFzc2VzLm92ZXJBY3RpdmUpICYmXG4gICAgICAgICAgdGFyZ2V0ICE9PSBfbGFzdE92ZXJFbGVtKSB7XG5cbiAgICAgICAgICBpZiAoX2xhc3RPdmVyRWxlbSkgeyAvLyBjbGVhciBmcm9tIHByZXZpb3VzXG4gICAgICAgICAgICBybUNsYXNzKF9sYXN0T3ZlckVsZW0sIF9sYXN0T3ZlckNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfbGFzdE92ZXJDbGFzcyA9IGFjY2VwdHMgPyBvLmNsYXNzZXMub3ZlckFjY2VwdHMgOiBvLmNsYXNzZXMub3ZlckRlY2xpbmVzO1xuICAgICAgICAgIGFkZENsYXNzKHRhcmdldCwgX2xhc3RPdmVyQ2xhc3MpO1xuICAgICAgICAgIF9sYXN0T3ZlckVsZW0gPSB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjZXB0cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICAgIGlmICghX21pcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIC8vIHVwZGF0ZSBjb29yZGluYXRlc1xuICAgICAgX2NsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgX2NsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuXG4gICAgICAvLyBjb3VudCBtaXJyb3IgY29vcmRpYXRlc1xuICAgICAgdmFyIHggPSBfY2xpZW50WCAtIF9vZmZzZXRYLFxuICAgICAgICB5ID0gX2NsaWVudFkgLSBfb2Zmc2V0WSxcbiAgICAgICAgcGFnZVgsXG4gICAgICAgIHBhZ2VZLFxuICAgICAgICBvZmZzZXRCb3g7XG5cbiAgICAgIC8vIGZpbGwgZXh0cmEgcHJvcGVydGllcyBpZiBib3VuZGluZ0JveCBpcyB1c2VkXG4gICAgICBpZiAoby5ib3VuZGluZ0JveCkge1xuICAgICAgICBwYWdlWCA9IGdldENvb3JkKCdwYWdlWCcsIGUpO1xuICAgICAgICBwYWdlWSA9IGdldENvb3JkKCdwYWdlWScsIGUpO1xuICAgICAgICBvZmZzZXRCb3ggPSBnZXRPZmZzZXQoby5ib3VuZGluZ0JveCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghby5sb2NrWSkge1xuICAgICAgICBpZiAoIW8uYm91bmRpbmdCb3ggfHwgKHBhZ2VYID4gb2Zmc2V0Qm94LmxlZnQgKyBfb2Zmc2V0WCAmJiBwYWdlWCA8IG9mZnNldEJveC5yaWdodCArIF9vZmZzZXRYcikpIHtcbiAgICAgICAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChvLmJvdW5kaW5nQm94KSB7IC8vIGNoZWNrIGFnYWluIGluIGNhc2UgdXNlciBzY3JvbGxlZCB0aGUgdmlld1xuICAgICAgICAgIGlmIChwYWdlWCA8IG9mZnNldEJveC5sZWZ0ICsgX29mZnNldFgpIHtcbiAgICAgICAgICAgIF9taXJyb3Iuc3R5bGUubGVmdCA9IF9jbGllbnRYIC0gKHBhZ2VYIC0gb2Zmc2V0Qm94LmxlZnQpICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pcnJvci5zdHlsZS5sZWZ0ID0gX2NsaWVudFggLSBfbWlycm9yV2lkdGggLSAocGFnZVggLSBvZmZzZXRCb3gucmlnaHQpICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghby5sb2NrWCkge1xuICAgICAgICBpZiAoIW8uYm91bmRpbmdCb3ggfHwgKHBhZ2VZID4gb2Zmc2V0Qm94LnRvcCArIF9vZmZzZXRZICYmIHBhZ2VZIDwgb2Zmc2V0Qm94LmJvdHRvbSArIF9vZmZzZXRZYikpIHtcbiAgICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKG8uYm91bmRpbmdCb3gpIHsgLy8gY2hlY2sgYWdhaW4gaW4gY2FzZSB1c2VyIHNjcm9sbGVkIHRoZSB2aWV3XG4gICAgICAgICAgaWYgKHBhZ2VZIDwgb2Zmc2V0Qm94LnRvcCArIF9vZmZzZXRZKSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gKHBhZ2VZIC0gb2Zmc2V0Qm94LnRvcCkgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbWlycm9yLnN0eWxlLnRvcCA9IF9jbGllbnRZIC0gX21pcnJvckhlaWdodCAtIChwYWdlWSAtIG9mZnNldEJveC5ib3R0b20pICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbSxcbiAgICAgICAgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBfY2xpZW50WCwgX2NsaWVudFkpLFxuICAgICAgICBkcm9wVGFyZ2V0ID0gZmluZERyb3BUYXJnZXQoZWxlbWVudEJlaGluZEN1cnNvciwgX2NsaWVudFgsIF9jbGllbnRZKSxcbiAgICAgICAgY2hhbmdlZCA9IGRyb3BUYXJnZXQgIT09IG51bGwgJiYgZHJvcFRhcmdldCAhPT0gX2xhc3REcm9wVGFyZ2V0O1xuXG4gICAgICBpZiAoY2hhbmdlZCB8fCBkcm9wVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIGlmIChvLnNjb3BlKSB7XG4gICAgICAgICAgb3V0KCk7XG4gICAgICAgICAgX2xhc3REcm9wVGFyZ2V0ID0gZHJvcFRhcmdldDtcbiAgICAgICAgICBvdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2xhc3REcm9wVGFyZ2V0ID0gZHJvcFRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkbyBub3QgY29weSBpbiBzYW1lIGNvbnRhaW5lclxuICAgICAgaWYgKGRyb3BUYXJnZXQgPT09IF9zb3VyY2UgJiYgby5jb3B5KSB7XG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwgJiYgaXRlbS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9IGVsc2UgaWYgKG8uY29udGFpbmVyc01vZGVsICYmIF9sYXN0VGFyZ2V0TW9kZWwuaW5kZXhPZihfY29weU1vZGVsKSAhPT0gLTEpIHtcbiAgICAgICAgICBfbGFzdFRhcmdldE1vZGVsLnNwbGljZShfbGFzdFRhcmdldE1vZGVsLmluZGV4T2YoX2NvcHlNb2RlbCksIDEpO1xuICAgICAgICAgICRyb290U2NvcGUuJGFwcGx5QXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZWZlcmVuY2UsXG4gICAgICAgIGltbWVkaWF0ZSA9IGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpLFxuICAgICAgICByZWZlcmVuY2VJbmRleDtcblxuICAgICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UoZHJvcFRhcmdldCwgaW1tZWRpYXRlLCBfY2xpZW50WCwgX2NsaWVudFkpO1xuICAgICAgICBpZiAoby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBpZiAocmVmZXJlbmNlKSB7IC8vIHJlZmVyZW5jZSBpcyBudWxsIGlmIGRyYWcgaXMgb3ZlciBsYXN0IGVsZW1lbnRcbiAgICAgICAgICAgIHJlZmVyZW5jZUluZGV4ID0gZG9tSW5kZXhPZihyZWZlcmVuY2UsIGRyb3BUYXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG8ucmV2ZXJ0T25TcGlsbCA9PT0gdHJ1ZSAmJiAhby5jb3B5KSB7XG4gICAgICAgIC8vIHRoZSBjYXNlIHRoYXQgbWlycm9yIGlzIG5vdCBvdmVyIHZhbGlkIHRhcmdldCBhbmQgcmV2ZXJ0aW5nIGlzIG9uIGFuZCBjb3B5IGlzIG9mZlxuICAgICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICAgIGRyb3BUYXJnZXQgPSBfc291cmNlO1xuXG4gICAgICAgIC8vIGdldHRpbmcgbW9kZWwgaW50aXRpYWwgcHJvcGVydGllcyBpbnRvIGN1cnJlbnRcbiAgICAgICAgaWYgKG8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfaW5pdGlhbEluZGV4O1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwgPSBfdGFyZ2V0TW9kZWw7XG4gICAgICAgICAgX3RhcmdldE1vZGVsID0gX3NvdXJjZU1vZGVsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGUgY2FzZSB0aGF0IG1pcnJvciBpcyBub3Qgb3ZlciB2YWxpZCB0YXJnZXQgYW5kIHJlbW92aW5nIGlzIG9uIG9yIGNvcHkgaXMgb25cbiAgICAgICAgaWYgKChvLmNvcHkgfHwgby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSAmJiBpdGVtLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyByZW1vdmUgaXRlbSBvciBjb3B5IG9mIGl0ZW1cbiAgICAgICAgICBpZiAoIW8uY29udGFpbmVyc01vZGVsKSB7XG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UocmVmZXJlbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsIHx8XG4gICAgICAgIHJlZmVyZW5jZSAhPT0gaXRlbSAmJlxuICAgICAgICByZWZlcmVuY2UgIT09IG5leHRFbChpdGVtKSAmJlxuICAgICAgICByZWZlcmVuY2UgIT09IF9jdXJyZW50U2libGluZykge1xuICAgICAgICAvLyBtb3ZpbmcgaXRlbS9jb3B5IHRvIG5ldyBjb250YWluZXIgZnJvbSBwcmV2aW91cyBvbmVcbiAgICAgICAgX2N1cnJlbnRTaWJsaW5nID0gcmVmZXJlbmNlO1xuXG4gICAgICAgIGlmICghby5jb250YWluZXJzTW9kZWwpIHtcbiAgICAgICAgICBkcm9wVGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCByZWZlcmVuY2UpOyAvLyBpZiByZWZlcmVuY2UgaXMgbnVsbCBpdGVtIGlzIGluc2VydGVkIGF0IHRoZSBlbmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3ZlSW5Db250YWluZXJzTW9kZWwocmVmZXJlbmNlSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG8uc2NvcGUpIHtcbiAgICAgICAgICBvLnNjb3BlLiRlbWl0KCdzaGFkb3cnLCBpdGVtLCBkcm9wVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtb3ZlZCh0eXBlKSB7XG4gICAgICAgIG8uc2NvcGUuJGVtaXQodHlwZSwgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb3ZlcigpIHtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICBtb3ZlZCgnb3ZlcicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG91dCgpIHtcbiAgICAgICAgaWYgKF9sYXN0RHJvcFRhcmdldCkge1xuICAgICAgICAgIG1vdmVkKCdvdXQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVJbkNvbnRhaW5lcnNNb2RlbChyZWZlcmVuY2VJbmRleCkge1xuICAgICAgaWYgKF9sYXN0VGFyZ2V0TW9kZWwgPT09IF90YXJnZXRNb2RlbCkge1xuICAgICAgICBpZiAocmVmZXJlbmNlSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VJbmRleCA9IF90YXJnZXRNb2RlbC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gcmVmZXJlbmNlSW5kZXggPiBfY3VycmVudEluZGV4ID8gcmVmZXJlbmNlSW5kZXggLSAxIDogcmVmZXJlbmNlSW5kZXg7XG4gICAgICAgIF90YXJnZXRNb2RlbC5zcGxpY2UoaW5kZXgsIDAsIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpWzBdKTtcbiAgICAgICAgX2N1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlZmVyZW5jZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgcmVmZXJlbmNlSW5kZXggPSBfdGFyZ2V0TW9kZWwubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW8uY29weSB8fCBfbGFzdFRhcmdldE1vZGVsICE9PSBfc291cmNlTW9kZWwpIHsgLy8gZG9udCByZW1vdmUgb3JpZ2luYWwgZnJvbSBzb3VyY2Ugd2hpbGUgY29weWluZ1xuICAgICAgICAgIF9sYXN0VGFyZ2V0TW9kZWwuc3BsaWNlKF9jdXJyZW50SW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghby5jb3B5IHx8IF90YXJnZXRNb2RlbC5pbmRleE9mKF9jb3B5TW9kZWwpID09PSAtMSkgeyAvLyBkb250IHBsYWNlIGNvcHkgdHdpY2UgaW4gb25lIGRyYWdcbiAgICAgICAgICBfdGFyZ2V0TW9kZWwuc3BsaWNlKHJlZmVyZW5jZUluZGV4LCAwLCBfY29weU1vZGVsIHx8IF9pdGVtTW9kZWwpO1xuICAgICAgICAgIF9jdXJyZW50SW5kZXggPSByZWZlcmVuY2VJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHJvb3RTY29wZS4kYXBwbHlBc3luYygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbENvbnRhaW5lcihlKSB7XG4gICAgICBpZiAoX3RhcmdldENvbnRhaW5lcikge1xuICAgICAgICBfdGFyZ2V0Q29udGFpbmVyLnNjcm9sbFRvcCArPSBlLmRlbHRhWTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pcnJvckltYWdlKCkge1xuICAgICAgaWYgKF9taXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF9taXJyb3IgPSBfaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBfbWlycm9yV2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgX21pcnJvckhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgX21pcnJvci5zdHlsZS53aWR0aCA9IGdldFJlY3RXaWR0aChyZWN0KSArICdweCc7XG4gICAgICBfbWlycm9yLnN0eWxlLmhlaWdodCA9IGdldFJlY3RIZWlnaHQocmVjdCkgKyAncHgnO1xuICAgICAgcm1DbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMudHJhbnNpdCk7XG4gICAgICBhZGRDbGFzcyhfbWlycm9yLCBvLmNsYXNzZXMubWlycm9yKTtcbiAgICAgIG8ubWlycm9yQ29udGFpbmVyLmFwcGVuZENoaWxkKF9taXJyb3IpO1xuICAgICAgcmVnRXZlbnQoZG9jdW1lbnRFbGVtZW50LCAnb24nLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICBhZGRDbGFzcyhib2R5LCBvLmNsYXNzZXMudW5zZWxlY3RhYmxlKTtcbiAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvbicsICd3aGVlbCcsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgICBpZiAoby5zY29wZSkge1xuICAgICAgICBvLnNjb3BlLiRlbWl0KCdjbG9uZWQnLCBfbWlycm9yLCBfaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWlycm9ySW1hZ2UoKSB7XG4gICAgICBpZiAoX21pcnJvcikge1xuICAgICAgICBybUNsYXNzKGJvZHksIG8uY2xhc3Nlcy51bnNlbGVjdGFibGUpO1xuICAgICAgICByZWdFdmVudChkb2N1bWVudEVsZW1lbnQsICdvZmYnLCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgICAgIHJlZ0V2ZW50KF9taXJyb3IsICdvZmYnLCAnd2hlZWwnLCBzY3JvbGxDb250YWluZXIpO1xuICAgICAgICBfbWlycm9yLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX21pcnJvcik7XG4gICAgICAgIF9taXJyb3IgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEltbWVkaWF0ZUNoaWxkKGRyb3BUYXJnZXQsIHRhcmdldCkge1xuICAgICAgdmFyIGltbWVkaWF0ZSA9IHRhcmdldDtcbiAgICAgIHdoaWxlIChpbW1lZGlhdGUgIT09IGRyb3BUYXJnZXQgJiYgaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQgIT09IGRyb3BUYXJnZXQpIHtcbiAgICAgICAgaW1tZWRpYXRlID0gaW1tZWRpYXRlLnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAoaW1tZWRpYXRlID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW1tZWRpYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZShkcm9wVGFyZ2V0LCB0YXJnZXQsIHgsIHkpIHtcbiAgICAgIHZhciBob3Jpem9udGFsID0gby5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgICAgIHZhciByZWZlcmVuY2UgPSB0YXJnZXQgIT09IGRyb3BUYXJnZXQgPyBpbnNpZGUoKSA6IG91dHNpZGUoKTtcbiAgICAgIHJldHVybiByZWZlcmVuY2U7XG5cbiAgICAgIGZ1bmN0aW9uIG91dHNpZGUoKSB7IC8vIHNsb3dlciwgYnV0IGFibGUgdG8gZmlndXJlIG91dCBhbnkgcG9zaXRpb25cbiAgICAgICAgdmFyIGxlbiA9IGRyb3BUYXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGVsO1xuICAgICAgICB2YXIgcmVjdDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgZWwgPSBkcm9wVGFyZ2V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiByZWN0LmxlZnQgPiB4KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiByZWN0LnRvcCA+IHkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGluc2lkZSgpIHsgLy8gZmFzdGVyLCBidXQgb25seSBhdmFpbGFibGUgaWYgZHJvcHBlZCBpbnNpZGUgYSBjaGlsZCBlbGVtZW50XG4gICAgICAgIHZhciByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHggPiByZWN0LmxlZnQgKyBnZXRSZWN0V2lkdGgocmVjdCkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh5ID4gcmVjdC50b3AgKyBnZXRSZWN0SGVpZ2h0KHJlY3QpIC8gMik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmUoYWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGFmdGVyID8gbmV4dEVsKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsKHNjcm9sbFByb3AsIG9mZnNldFByb3ApIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93W29mZnNldFByb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93W29mZnNldFByb3BdO1xuICAgICAgfVxuICAgICAgaWYgKGRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib2R5W3Njcm9sbFByb3BdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKCdzY3JvbGxUb3AnLCAncGFnZVlPZmZzZXQnKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbCgnc2Nyb2xsTGVmdCcsICdwYWdlWE9mZnNldCcpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBzY3JvbGxMZWZ0LFxuICAgICAgICB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tICsgc2Nyb2xsVG9wXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRCZWhpbmRQb2ludChwb2ludCwgeCwgeSkge1xuICAgICAgaWYgKCF4ICYmICF5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHAgPSBwb2ludCB8fCB7fSxcbiAgICAgICAgc3RhdGUgPSBwLmNsYXNzTmFtZSxcbiAgICAgICAgZWw7XG4gICAgICBwLmNsYXNzTmFtZSArPSAnICcgKyBvLmNsYXNzZXMuaGlkZTtcbiAgICAgIGVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgICAgIHAuY2xhc3NOYW1lID0gc3RhdGU7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZ0V2ZW50KGVsLCBvcCwgdHlwZSwgZm4pIHtcbiAgICB2YXIgdG91Y2ggPSB7XG4gICAgICAgIG1vdXNldXA6ICd0b3VjaGVuZCcsXG4gICAgICAgIG1vdXNlZG93bjogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3VzZW1vdmU6ICd0b3VjaG1vdmUnLFxuICAgICAgICB3aGVlbDogJ3doZWVsJ1xuICAgICAgfSxcbiAgICAgICRlbCA9IGFuZ3VsYXIuZWxlbWVudChlbCk7XG5cbiAgICAkZWxbb3BdKHRvdWNoW3R5cGVdLCBmbik7XG4gICAgJGVsW29wXSh0eXBlLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXZlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0RWwoZWwpIHtcbiAgICByZXR1cm4gZWwubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG1hbnVhbGx5KCk7XG5cbiAgICBmdW5jdGlvbiBtYW51YWxseSgpIHtcbiAgICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgICBkbyB7XG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vQ2Fubm90IHVzZSBhbmd1bGFyLmlzRWxlbWVudCBiZWNhdXNlIHdlIG5lZWQgdG8gY2hlY2sgcGxhaW4gZG9tIGVsZW1lbnQsIG5vIGpRbGl0ZSB3cmFwcGVkXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcbiAgICAgIG8gJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9va3VwQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNhY2hlZCA9IF9jYWNoZVtjbGFzc05hbWVdO1xuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIGNhY2hlZC5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBfY2FjaGVbY2xhc3NOYW1lXSA9IGNhY2hlZCA9IG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMpJyArIGNsYXNzTmFtZSArICcoPzpcXFxcc3wkKScsICdnJyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBlbC5jbGFzc05hbWU7XG4gICAgaWYgKCFjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoIWxvb2t1cENsYXNzKGNsYXNzTmFtZSkudGVzdChjdXJyZW50KSkge1xuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBybUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShsb29rdXBDbGFzcyhjbGFzc05hbWUpLCAnICcpLnRyaW0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudEhvc3QoZSkge1xuICAgIC8vIG9uIHRvdWNoZW5kIGV2ZW50LCB3ZSBoYXZlIHRvIHVzZSBgZS5jaGFuZ2VkVG91Y2hlc2BcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEvaXNzdWVzLzM0XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH1cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmQoY29vcmQsIGUpIHtcbiAgICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgICB2YXIgbWlzc01hcCA9IHtcbiAgICAgIHBhZ2VYOiAnY2xpZW50WCcsIC8vIElFOFxuICAgICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgICB9O1xuICAgIGlmIChjb29yZCBpbiBtaXNzTWFwICYmICEoY29vcmQgaW4gaG9zdCkgJiYgbWlzc01hcFtjb29yZF0gaW4gaG9zdCkge1xuICAgICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RbY29vcmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVjdFdpZHRoKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWN0SGVpZ2h0KHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgfHwgKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9tSW5kZXhPZihjaGlsZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYW5ndWxhci5lbGVtZW50KHBhcmVudCkuY2hpbGRyZW4oKSwgY2hpbGQpO1xuICB9XG5cbn1dKTtcbiJdfQ==
