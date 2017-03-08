/* eslint-env jquery, browser */

(function() {
  'use strict';

  var ratio = 1;

  function fade() {
    if (ratio > 0) {
      ratio -= 0.01;
    }

    $('body').css('opacity', ratio);
  }

  setInterval(fade, 100);
})();
