# 2.1.0 Elder Scrolls

- fixed scrolling while drag #14
- added new events fired on elements behind cursor while dragging (dragularenter, dragularleave), could be used to add/remove classes
- added new scope event 'release' when mouse button is released whatever ending it has (drop, cancel, revert..)

# 2.0.1 Lightning

- fixed forgoten lint errors

# 2.0.0 Aloha

- ngRepeat can be synced with provided model
- gulp workflow (thanks to @alferov)
- gh-pages refactored
- Fixed a bug where `shadow` would trigger multiple times while dragging an element over the same spot
- Fixed a bug where adding and removing classes might've caused issues on elements that had foreign CSS classes
- Added an argument to `cloned` event that specifies the kind of clone. Possible values include `mirror` and `copy` at the moment
- Added `over` event that fires whenever an element is dragged over a container _(or whenever a drag event starts)_
- Added `out` event that fires whenever an element is dragged out of a container _(or whenever a drag event ends)_
- Fixed a bug caused in `2.0.6` where anything would be regarded as a `drake` container
- Fixed a bug where `isContainer` would be called with a `el=null` in some situations
- Set `gu-transit` after a drag event has fully started 
- Fixed a bug where using `.cancel` would throw an exception
- Fixed a bug where dragging a copy back to origin after hovering over another container would still result in a copy being made if you never spilled the item
- Deprecated addContainer method
- Deprecated removeContainer method
- Exposed dragula.containers collection
- Introduced dynamic isContainer method
- Can now omit containers argument to dragula(containers, options)
- Can now pass containers as an option
- Differentiate between drag and click using delay option
- Ability to specify which event targets are invalid drag triggers

# 1.3.2 Buggydown

- mousedown handlers moved from document to containers, due to bugs in namespacing-multiple-instances enviroment

# 1.3.1 Fix6

- fixes #6

# 1.3.0 Dragula203

- changes of dragula 2.0.3 against 1.6.1 implemented
- usage description augmented (#5)

# 1.2.1 Damn build

- forgot to build.. sorry

# 1.2.0 Directive

- feat(directive): accept options as JSON string
- fix(directive): minify-safe syntax added to directive, closes #3

# 1.1.0 tadaaa

- started correctly using Semantic Versioning 2.0.0 http://semver.org/
- avoiding angular.merge, so polyfill part was removed
- boundingBox (dragging element can me moved only in specific area)
- lockX/Y (dragging element can me moved only in specific direction)
- readded feature: automatic direction

# 1.0.3 nameSpaced containers

- allowing share of containers groups

# 1.0.2 customClasses

- custom classes via option.classes;

# 1.0.1 arraylike

- accepting arraylike objects as containers array;

# 1.0.0 IPO

- Initial Public Release (dragula 1.6.1, angular 1.4.1);
