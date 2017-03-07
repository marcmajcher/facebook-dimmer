/* eslint-env jquery, browser */

(function() {
  'use strict';

  var selectors = [
    'body',
    '._42ft',
    '._4jy0',
    '._4jy3',
    '._517h',
    '._51sy',
    '._16ve',
    '._1osb',
    '._2aha',
    '._2xww',
    '._3ubp',
    '._4-u2',
    '._4-u8',
    '._42ef',
    '._5v6e',
    '._5xmp',
    '._ikh',
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
    '#rightCol'
  ];
  var originalColors = {};
  for (var i = 0; i < selectors.length; i++) {
    originalColors[selectors[i]] = $(selectors[i]).css('background-color');
  }
  console.log(originalColors);

  var darkestBodyColor = '#222222';

  function setColor() {
    $('.img').css('opacity', 0);
    for (var i = 0; i < selectors.length; i++) {
      $(selectors[i]).css('background-color', darkestBodyColor);
    }
  }

  setInterval(setColor, 100);
})();
