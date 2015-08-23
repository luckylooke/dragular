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

dragularModule.factory('dragularService', ['$rootScope', function dragula($rootScope) {

  var serviceFn, // function returned as service
    _classesCache = {}, // classes lookup cache
    _containersModel = {}, // containers model
    _containers = {}, // containers managed by the drake
    _mirror; // mirror image

  serviceFn = function(initialContainers, options) {

    if (arguments.length === 1 && !Array.isArray(initialContainers) && !angular.isElement(initialContainers) && !initialContainers[0]) {
      // then containers are not provided, only options
      options = initialContainers;
      initialContainers = [];
    }

    var body = document.body,
      documentElement = document.documentElement,
      _source, // source container
      _item, // item being dragged
      _sourceItem, // item originaly dragged if copy is enabled
      _sourceModel, // source container model
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
      _isContainer, // internal isContainer
      _targetContainer, // droppable container under drag item
      _dragEnterEvent, // drag enter event fired on element behind cursor
      _dragLeaveEvent, // drag leave event fired on element behind cursor
      _lastElementBehindCursor, // last element behind cursor
      _grabbed, // holds mousedown context until first mousemove
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

    if (!o.mirrorContainer) {
      o.mirrorContainer = document.body;
    }

    // get initial containers from options, argument or fall back to empty array (containers can be also added later)
    initialContainers = o.containers || initialContainers || [];
    initialContainers = makeArray(initialContainers);

    if (o.containersModel) {
      //                            is 2D array?
      o.containersModel = Array.isArray(o.containersModel[0]) ? o.containersModel : [o.containersModel];
    }

    function proceedContainers(containers, nameSpace, initial) {
      if (!containers[nameSpace]) {
        containers[nameSpace] = [];
      }
      Array.prototype.push.apply(containers[nameSpace], initial);
    }

    // feed containers groups and optionaly shadow it by models
    if (!o.nameSpace) {
      o.nameSpace = ['dragularCommon'];
    }
    if (!Array.isArray(o.nameSpace)) {
      o.nameSpace = [o.nameSpace];
    }
    o.nameSpace.forEach(function eachNameSpace(nameSpace) {
      proceedContainers(_containers, nameSpace, initialContainers);
      if (o.containersModel) {
        proceedContainers(_containersModel, nameSpace, o.containersModel);
      }
    });
    _isContainer = isContainer;

    //register events
    events();

    if (document.createEvent) {
      _dragEnterEvent = document.createEvent('HTMLEvents');
      _dragEnterEvent.initEvent('dragularenter', true, true);
      _dragLeaveEvent = document.createEvent('HTMLEvents');
      _dragLeaveEvent.initEvent('dragularleave', true, true);
    } else {
      _dragEnterEvent = document.createEventObject();
      _dragEnterEvent.eventType = 'dragularenter';
      _dragLeaveEvent = document.createEventObject();
      _dragLeaveEvent.eventType = 'dragularleave';
    }

    var drake = {
      containers: _containers,
      containersModel: _containersModel,
      start: manualStart,
      end: end,
      cancel: cancel,
      remove: remove,
      destroy: destroy,
      dragging: false
    };

    return drake;

    // make array from array-like objects or from single element (based on bevacqua/atoa)
    function makeArray(all, startIndex) {
      if (Array.isArray(all)) {
        return all;
      }
      if (all.length) { // is array-like
        return Array.prototype.slice.call(all, startIndex);
      } else { // is one element
        return [all];
      }
    }

    // add or remove containers - deprecated
    function removeContainers(all) {
      $rootScope.applyAsync(function applyDestroyed() {
        var changes = Array.isArray(all) ? all : makeArray(all);
        changes.forEach(function forEachContainer(container) {
          angular.forEach(o.nameSpace, function forEachNs(nameSpace) {
            var index;
            index = _containers[nameSpace].indexOf(container);
            _containers[nameSpace].splice(index, 1);
            if (o.containersModel) {
              _containersModel[nameSpace].splice(index, 1);
            }
          });
        });
      });
    }

    function isContainer(el) {
      var i = o.nameSpace.length;
      while (i--) {
        if (drake.containers[o.nameSpace[i]].indexOf(el) !== -1) {
          return true;
        }
      }
      return o.isContainer(el);
    }

    function events(remove) {
      var op = remove ? 'off' : 'on';
      regEvent(documentElement, op, 'mouseup', release);

      initialContainers.forEach(function addMouseDown(container) {
        regEvent(container, 'on', 'mousedown', grab);
      });
    }

    function eventualMovements(remove) {
      var op = remove ? 'off' : 'on';
      regEvent(documentElement, op, 'mousemove', startBecauseMouseMoved);
    }

    function movements(remove) {
      var op = remove ? 'off' : 'on';
      regEvent(documentElement, op, 'selectstart', preventGrabbed); // IE8
      regEvent(documentElement, op, 'click', preventGrabbed);
    }

    function destroy() {
      events(true);
      removeContainers(initialContainers);
      release({});
    }

    function preventGrabbed(e) {
      if (_grabbed) {
        e.preventDefault();
      }
    }

    function grab(e) {
      e = e || window.event;

      // filter some odd situations
      if ((e.which !== 0 && e.which !== 1) || e.metaKey || e.ctrlKey) {
        return; // we only care about honest-to-god left clicks and touch events
      }

      var context = canStart(e.target);
      if (!context) {
        return;
      }

      _grabbed = context;
      eventualMovements();
      if (e.type === 'mousedown') {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }

    function startBecauseMouseMoved(e) {
      eventualMovements(true); // remove mousemove listener
      movements();
      end();
      start(_grabbed);

      // automaticly detect direction of elements if not set in options
      if (!o.direction) {
        var parent = _sourceItem.parentElement,
          parentHeight = parent.offsetHeight,
          parentWidth = parent.offsetWidth,
          childHeight = _sourceItem.clientHeight,
          childWidth = _sourceItem.clientWidth;
        o.direction = parentHeight / childHeight < parentWidth / childWidth ? 'horizontal' : 'vertical';
      }

      // get initial coordinates, used to render _mirror for first time
      var offset = getOffset(_sourceItem);
      _offsetX = getCoord('pageX', e) - offset.left;
      _offsetY = getCoord('pageY', e) - offset.top;
      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);

      // limiting area of _mirror movement, get initial coordinates
      if (o.boundingBox) {
        _offsetXr = getCoord('pageX', e) - offset.right;
        _offsetYb = getCoord('pageY', e) - offset.bottom;
      }

      e.preventDefault();

      addClass(_item, o.classes.transit);
      renderMirrorImage();
      // initial position
      _mirror.style.left = _clientX - _offsetX + 'px';
      _mirror.style.top = _clientY - _offsetY + 'px';

      drag(e);
    }


    function canStart(item) {
      if (drake.dragging && _mirror) {
        return; // already dragging
      }

      var handle = item;

      while (item.parentElement &&
        !_isContainer(item.parentElement)) {
        // break loop if user tries to drag item which is considered invalid handle
        if (o.invalid(item, handle)) {
          return;
        }
        item = item.parentElement; // drag target should be immediate child of container
        if (!item) {
          return;
        }
      }

      var source = item.parentElement;
      if (!source ||
        o.invalid(item, handle) ||
        !o.moves(item, source, handle)) {
        return;
      }

      return {
        item: item,
        source: source
      };
    }

    function manualStart(item) {
      var context = canStart(item);
      if (context) {
        start(context);
      }
    }

    function start(context) {
      _sourceItem = _item = context.item;
      _source = context.source;
      _initialSibling = _currentSibling = nextEl(context.item);

      if (o.copy) {
        _item = context.item.cloneNode(true);
        if (o.scope) {
          o.scope.$emit('cloned', _item, context.item);
        }
      }

      // prepare models operations
      if (o.containersModel) {
        var containerIndex = initialContainers.indexOf(context.source);
        _sourceModel = o.containersModel[containerIndex];
        _initialIndex = domIndexOf(context.item, context.source);
      }

      drake.dragging = true;
      if (o.scope) {
        o.scope.$emit('drag', _sourceItem, _source);
      }

      return true;
    }

    function invalidTarget() {
      return false;
    }

    function end() {
      if (!drake.dragging) {
        return;
      }
      drop(_item, _item.parentElement);
    }

    function ungrab() {
      _grabbed = false;
      eventualMovements(true);
      movements(true);
    }

    function release(e) {
      ungrab();
      if (!drake.dragging) {
        return;
      }
      e = e || window.event;

      _clientX = getCoord('clientX', e);
      _clientY = getCoord('clientY', e);

      var elementBehindCursor = getElementBehindPoint(_mirror, _clientX, _clientY),
        dropTarget = findDropTarget(elementBehindCursor, _clientX, _clientY);

      if (dropTarget && (o.copy === false || dropTarget !== _source)) {
        // found valid target and (is not copy case or target is not initial container)
        drop(_item, dropTarget);
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

      if (o.scope) {
        o.scope.$emit('release', _item, _source);
      }
    }

    function drop(item, target) {
      if (o.scope && isInitialPlacement(target)) {
        o.scope.$emit('cancel', item, _source, _sourceModel);
      } else if (o.scope) {
        o.scope.$emit('drop', item, target, _source, _sourceModel);
      }
      if (o.containersModel && !isInitialPlacement(target)) {
        var dropElm = item,
          dropIndex = domIndexOf(dropElm, target);
        $rootScope.$applyAsync(function applyDrop() {
          if (target === _source) {
            _sourceModel.splice(dropIndex, 0, _sourceModel.splice(_initialIndex, 1)[0]);
          } else {
            var targetModel,
              dropElmModel = o.copy ? angular.copy(_sourceModel[_initialIndex]) : _sourceModel[_initialIndex];

            var i = o.nameSpace.length;
            while (i--) {
              if (drake.containers[o.nameSpace[i]].indexOf(target) !== -1) {
                targetModel = _containersModel[o.nameSpace[i]][drake.containers[o.nameSpace[i]].indexOf(target)];
                break;
              }
            }

            target.removeChild(dropElm); // element must be removed for ngRepeat to apply correctly

            if (!o.copy) {
              _sourceModel.splice(_initialIndex, 1);
            }
            targetModel.splice(dropIndex, 0, dropElmModel);
          }

          if (item.parentElement) {
            item.parentElement.removeChild(item);
          }
          cleanup();
        });
      } else {
        cleanup();
      }
    }

    function remove() {
      if (!drake.dragging) {
        return;
      }
      var parent = _item.parentElement,
        itemModel = _sourceModel && _sourceModel[_initialIndex];

      if (parent) {
        parent.removeChild(_item);
      }

      if (o.containersModel) {
        $rootScope.$applyAsync(function removeModel() {
          _sourceModel.splice(_initialIndex, 1);
          cleanup();
        });
      }

      if (o.scope) {
        o.scope.$emit(o.copy ? 'cancel' : 'remove', _item, parent, itemModel, _sourceModel);
      }
      if (!o.containersModel) {
        cleanup();
      }
    }

    function cancel(revert) {
      if (!drake.dragging) {
        return;
      }
      var reverts = arguments.length > 0 ? revert : o.revertOnSpill,
        parent = _item.parentElement;

      var initial = isInitialPlacement(parent);
      if (initial === false && o.copy === false && reverts) {
        _source.insertBefore(_item, _initialSibling);
      }
      if (o.containersModel && !o.copy && !reverts) {
        drop(_item, parent);
      } else if (o.scope) {
        if (initial || reverts) {
          o.scope.$emit('cancel', _item, _source);
        } else {
          o.scope.$emit('drop', _item, parent, _source);
        }
      }

      if (!o.containersModel || o.copy || reverts || initial) {
        cleanup();
      }
    }

    function cleanup() {
      ungrab();
      removeMirrorImage();

      if (_item) {
        rmClass(_item, o.classes.transit);
      }

      drake.dragging = false;

      if (o.removeOnSpill === true) {
        spillOut();
      }

      if (o.scope) {
        o.scope.$emit('out', _item, _lastDropTarget, _source);
        o.scope.$emit('dragend', _item);
      }

      _source = _item = _sourceItem = _initialSibling = _currentSibling = _sourceModel = null;
      _initialIndex = _currentIndex = _lastDropTarget = null;
    }

    // is item currently placed in original container and original position?
    function isInitialPlacement(target, s) {
      var sibling = s || (_mirror ? _currentSibling : nextEl(_item));
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

          var immediate = getImmediateChild(target, elementBehindCursor),
            reference = getReference(target, immediate, clientX, clientY),
            initial = isInitialPlacement(target, reference);
          accepts = initial ? true : o.accepts(_item, target, _source, reference, _sourceModel);

          if (_targetContainer !== target) {
            _targetContainer = target;
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

      var elementBehindCursor = getElementBehindPoint(_mirror, _clientX, _clientY),
        dropTarget = findDropTarget(elementBehindCursor, _clientX, _clientY),
        changed = dropTarget !== null && dropTarget !== _lastDropTarget;

      if (elementBehindCursor !== _lastElementBehindCursor) {
        fireEvent(elementBehindCursor, _dragEnterEvent);
        if (_lastElementBehindCursor) {
          fireEvent(_lastElementBehindCursor, _dragLeaveEvent);
        }
        _lastElementBehindCursor = elementBehindCursor;
      }

      if (changed || dropTarget === null) {
        out();
        _lastDropTarget = dropTarget;
        over();
      }

      // do not copy in same container
      if (dropTarget === _source && o.copy) {
        if (_item.parentElement) {
          _item.parentElement.removeChild(_item);
        }
        return;
      }

      var reference,
        immediate = getImmediateChild(dropTarget, elementBehindCursor);

      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, _clientX, _clientY);
      } else if (o.revertOnSpill === true && !o.copy) {
        // the case that mirror is not over valid target and reverting is on and copy is off
        reference = _initialSibling;
        dropTarget = _source;
      } else {
        // the case that mirror is not over valid target and removing is on or copy is on
        if (o.copy && _item.parentElement !== null) {
          // remove item or copy of item
          _item.parentElement.removeChild(_item);
        }
        return;
      }
      if (reference === null ||
        reference !== _item &&
        reference !== nextEl(_item) &&
        reference !== _currentSibling) {
        // moving item/copy to new container from previous one
        _currentSibling = reference;

        dropTarget.insertBefore(_item, reference); // if reference is null item is inserted at the end

        if (o.scope) {
          o.scope.$emit('shadow', _item, dropTarget);
        }
      }

      function moved(type) {
        if (o.scope) {
          o.scope.$emit(type, _item, _lastDropTarget, _source);
        }
        if (o.removeOnSpill === true) {
          type === 'over' ? spillOver() : spillOut();
        }
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

    function spillOver() {
      rmClass(_item, o.classes.hide);
    }

    function spillOut() {
      if (drake.dragging) {
        addClass(_item, o.classes.hide);
      }
    }

    function scrollContainer(e) {
      if (_targetContainer) {
        var before = _targetContainer.scrollTop;
        _targetContainer.scrollTop += e.deltaY;
        // block scroll of the document when container can be scrolled
        if (before !== _targetContainer.scrollTop) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
    }

    function renderMirrorImage() {
      if (_mirror) {
        return;
      }
      var rect = _sourceItem.getBoundingClientRect();
      _mirror = _sourceItem.cloneNode(true);
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
        o.scope.$emit('cloned', _mirror, _sourceItem);
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
      var p = point || {},
        state = p.className,
        el;
      p.className += ' ' + o.classes.hide;
      el = document.elementFromPoint(x, y);
      p.className = state;
      return el;
    }
  };

// clean common/shared objects
  serviceFn.cleanEnviroment = function cleanEnviroment () {
    _classesCache = {};
    _containersModel = {};
    _containers = {};
    _mirror = undefined;
  };

  return serviceFn;


  // HELPERS FUNCTIONS:

  function regEvent(el, op, type, fn) {
    var touch = {
        mouseup: 'touchend',
        mousedown: 'touchstart',
        mousemove: 'touchmove'
      },
      $el = angular.element(el);

    if (touch[type]) {
      $el[op](touch[type], fn);
    }
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
    var cached = _classesCache[className];
    if (cached) {
      cached.lastIndex = 0;
    } else {
      _classesCache[className] = cached = new RegExp('(?:^|\\s)' + className + '(?:\\s|$)', 'g');
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

  function fireEvent(target, e) {
    if (!target) {
      return;
    }
    if (target.dispatchEvent) {
      target.dispatchEvent(e);
    } else {
      target.fireEvent('on' + e.eventType, e);
    }
  }

}]);
