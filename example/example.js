/* global dragular */
'use strict';

function $(id) {
  return document.getElementById(id);
}

dragular([$('left1'), $('right1')]);
dragular([$('left2'), $('right2')], {
  copy: true
});
dragular([$('left3'), $('right3')]).on('drag', function(el) {
  el.className = el.className.replace(' ex-moved', '');
}).on('drop', function(el) {
  setTimeout(function() {
    el.className += ' ex-moved';
  }, 0);
});
dragular([$('left4'), $('right4')], {
  revertOnSpill: true
});
dragular([$('left5'), $('right5')], {
  moves: function(el, container, handle) {
    return handle.className === 'handle';
  }
});
dragular([$('single1')], {
  removeOnSpill: true
});
