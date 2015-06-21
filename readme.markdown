# Dragular (angular version of [dragula](https://github.com/bevacqua/dragula))

> Drag and drop so simple it hurts

Browser support includes every sane browser and **IE7+**. <sub>_(Granted you polyfill the functional `Array` methods in ES5)_</sub>

# Demo

[![demo.png][1]][2]

# Inspiration

Have you ever wanted a drag and drop library that just works? That actually understands where to place the elements when they are dropped? That doesn't need you to do a zillion things to get it to work? Well, so did [Nicolas Bevacqua](https://github.com/bevacqua) and I have forked it into angular module!

<b>Actual version 0.1.2 is made from dragula 1.6.1 and tested with angular 1.4.1.</b>

# What I have done

- replaced crossvent by angulars event binding
- replaced contra.emitter by $scope.$emit if scope provided in options (options.scope)
- encapsulated the code into angular factory (dragularService)
- created directive dragular where options can be passed providing scope property name
- both service and directive provided as angular module (dragularModule)
- automatic direction if not provided in options, instead of default vertical
- accepting arraylike objects as containers array
- accepting custom classes via option.classes

# Todo

- more/better examples
- npm/bower packaging
- better workflow (gulp?)
- publish more (blog?)

# Features

- Super easy to set up
- No bloated dependencies
- **Figures out sort order** on its own
- A shadow where the item would be dropped offers **visual feedback**
- Touch events!

# Install

download dragular.js and dragular.css from dist folder and include it in your html
```html
  <link href='styles/dragular.css' rel='stylesheet' type='text/css' />
  <script src='scripts/dragular.js'></script>
```
and put dragularModule into dependency array
```javascript
var app = angular.module('myApp', ['dragularModule', 'otherDependencies']);
```

TODO: npm, bower pacakges

# Usage

Dragula provides the easiest possible API to make drag and drop a breeze in your applications.

## As service `dragularService(containers, options?)`

By default, `dragular` will allow the user to drag an element in any of the `containers` and drop it in any other container in the list. If the element is dropped anywhere that's not one of the `containers`, the event will be gracefully cancelled according to the `revertOnSpill` and `removeOnSpill` options.

Note that dragging is only triggered on left clicks, and only if no meta keys are pressed. Clicks on buttons and anchor tags are ignored, too.

The example below allows the user to drag elements from `left` into `right`, and from `right` into `left`.

```js
dragularService([document.querySelector('#left'), document.querySelector('#right')]);
```

You can also provide an `options` object. Here's an overview.

```js
dragularService(containers, {
  moves: function (el, container, handle) {
    return true;         // elements are always draggable by default
  },
  accepts: function (el, target, source, sibling) {
    return true;         // elements can be dropped in any of the `containers` by default
  },
  direction: 'vertical', // Y axis is considered when determining where an element would be dropped
  copy: false,           // elements are moved by default, not copied
  revertOnSpill: false,  // spilling will put the element back where it was dragged from, if this is true
  removeOnSpill: false   // spilling will `.remove` the element, if this is true
});
```

The options are detailed below.

#### `options.moves`

You can define a `moves` method which will be invoked with `(el, container, handle)` whenever an element is clicked. If this method returns `false`, a drag event won't begin, and the event won't be prevented either. The `handle` element will be the original click target, which comes in handy to test if that element is an expected _"drag handle"_.

#### `options.accepts`

You can set `accepts` to a method with the following signature: `(el, target, source, sibling)`. It'll be called to make sure that an element `el`, that came from container `source`, can be dropped on container `target` before a `sibling` element. The `sibling` can be `null`, which would mean that the element would be placed as the last element in the container. Note that if `options.copy` is set to `true`, `el` will be set to the copy, instead of the originally dragged element.

Also note that **the position where a drag starts is always going to be a valid place where to drop the element**, even if `accepts` returned `false` for all cases.

#### `options.copy`

If `copy` is set to `true`, items will be copied rather than moved. This implies the following differences:

Event     | Move                                     | Copy
----------|------------------------------------------|---------------------------------------------
`drag`    | Element will be concealed from `source`  | Nothing happens
`drop`    | Element will be moved into `target`      | Element will be cloned into `target`
`remove`  | Element will be removed from DOM         | Nothing happens
`cancel`  | Element will stay in `source`            | Nothing happens

#### `options.revertOnSpill`

By default, spilling an element outside of any containers will move the element back to the _drop position previewed by the feedback shadow_. Setting `revertOnSpill` to `true` will ensure elements dropped outside of any approved containers are moved back to the source element where the drag event began, rather than stay at the _drop position previewed by the feedback shadow_.

#### `options.removeOnSpill`

By default, spilling an element outside of any containers will move the element back to the _drop position previewed by the feedback shadow_. Setting `removeOnSpill` to `true` will ensure elements dropped outside of any approved containers are removed from the DOM. Note that `remove` events won't fire if `copy` is set to `true`.

#### `options.direction`

When an element is dropped onto a container, it'll be placed near the point where the mouse was released. If the `direction` is `'vertical'`, the Y axis will be considered. Otherwise, if the `direction` is `'horizontal'`, the X axis will be considered. Default is automatic, where simple logic determines direction by comparison of dimensions of parent and its first child.

#### `options.scope`

Scope can be provided for emitting events, you can provide whichever scope you like.

## `Events`

If $scope is provided as options.scope the following events can be tracked using `$scope.on(type, listener)`:

Event Name | Listener Arguments      | Event Description
-----------|-------------------------|-------------------------------------------------------------------------------------
`drag`     | `el, container`         | `el` was lifted from `container`
`dragend`  | `el`                    | Dragging event for `el` ended with either `cancel`, `remove`, or `drop`
`drop`     | `el, container, source` | `el` was dropped into `container`, and originally came from `source`
`cancel`   | `el, container`         | `el` was being dragged but it got nowhere and went back into `container`, its last stable parent
`remove`   | `el, container`         | `el` was being dragged but it got nowhere and it was removed from the DOM. Its last stable parent was `container`.
`shadow`   | `el, container`         | `el`, _the visual aid shadow_, was moved into `container`. May trigger many times as the position of `el` changes, even within the same `container`
`cloned`   | `clone, original`       | DOM element `original` was cloned as `clone`. Triggers for mirror images and when `copy: true`

## API

The `dragularService` method returns a tiny object with a concise API. We'll refer to the API returned by `dragularService` as `drake`.

#### `drake.addContainer(container)`

Adds a `container` to the `containers` collection. It can be a single DOM element or an array.

#### `drake.removeContainer(container)`

Removes a `container` from the `containers` collection. It can be a single DOM element or an array.

#### `drake.dragging`

This property will be `true` whenever an element is being dragged.

#### `drake.start(item)`

Enter drag mode **without a shadow**. This method is most useful when providing complementary keyboard shortcuts to an existing drag and drop solution. Even though a shadow won't be created at first, the user will get one as soon as they click on `item` and start dragging it around. Note that if they click and drag something else, `.end` will be called before picking up the new item.

#### `drake.end()`

Gracefully end the drag event as if using **the last position marked by the preview shadow** as the drop target. The proper `cancel` or `drop` event will be fired, depending on whether the item was dropped back where it was originally lifted from _(which is essentially a no-op that's treated as a `cancel` event)_.

#### `drake.cancel(revert)`

If an element managed by `drake` is currently being dragged, this method will gracefully cancel the drag action. You can also pass in `revert` at the method invocation level, effectively producing the same result as if `revertOnSpill` was `true`.

Note that **a _"cancellation"_ will result in a `cancel` event** only in the following scenarios.

- `revertOnSpill` is `true`
- Drop target _(as previewed by the feedback shadow)_ is the source container **and** the item is dropped in the same position where it was originally dragged from

#### `drake.remove()`

If an element managed by `drake` is currently being dragged, this method will gracefully remove it from the DOM.

#### `drake.destroy()`

Removes all drag and drop events used by `dragularService` to manage drag and drop between the `containers`. If `.destroy` is called while an element is being dragged, the drag will be effectively cancelled.

# License

MIT

[![eyes.png][3]][4]

[1]: https://github.com/luckylooke/dragular/blob/master/resources/demo.png
[2]: http://luckylooke.github.io/dragular/
[3]: https://github.com/luckylooke/dragular/blob/master/resources/eyes.png
[4]: https://www.youtube.com/watch?v=EqQuihD0hoI
