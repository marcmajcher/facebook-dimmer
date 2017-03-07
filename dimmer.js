/* eslint-env jquery, browser */

(function() {
  'use strict';

  var ratio = 1;
  var dark = {
    r: 34,
    g: 34,
    b: 34
  };

  var selectors = [
    '.__c_',
    '._16ve',
    '._1osb',
    '._2aha',
    '._2r3x',
    '._2xww',
    '._36_q',
    '._3ubp',
    '._4-u2',
    '._4-u8',
    '._42ef',
    '._42ft',
    '._4arz',
    '._4jy0',
    '._4jy3',
    '._517h',
    '._51sy',
    '._5v6e',
    '._5xmp',
    '._6l-',
    '._ikh',
    '._ipo',
    '._sg1',
    '._sg2',
    '.cardRightCol',
    '.img',
    '.mbs ',
    '.UFIAddCommentInput',
    '.UFICommentPhotoIcon',
    '.UFICommentStickerButton',
    '.UFIList',
    '.UFIPhotoAttachLinkWrapper',
    '.UFIRow',
    '.userContentWrapper',
    '#contentArea',
    '#contentCol',
    '#rightCol',
    'body'
  ];

  var originalColors = {};
  for (var i = 0; i < selectors.length; i++) {
    var color = $(selectors[i]).css('background-color');
    if (color) {
      var colors = color.match(/^rgba?\((\d+), ?(\d+), ?(\d+),? ?(\d+)?\)/);
      originalColors[selectors[i]] = {
        r: parseInt(colors[1]),
        g: parseInt(colors[2]),
        b: parseInt(colors[3])
      };
    }
  }

  function getColor(color) {
    var rgb = {
      r: dark.r + ((color.r - dark.r) * ratio),
      g: dark.g + ((color.g - dark.g) * ratio),
      b: dark.b + ((color.b - dark.b) * ratio)
    };
    return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
  }

  function setColor() {
    if (ratio > 0) {
      ratio -= 0.01;
    }

    $('.img').css('opacity', ratio);
    for (var i = 0; i < selectors.length; i++) {
      if (selectors[i] && originalColors[selectors[i]]) {
        $(selectors[i]).css('background-color', getColor(originalColors[selectors[i]]));
      }
    }
  }

  setInterval(setColor, 100);
})();
