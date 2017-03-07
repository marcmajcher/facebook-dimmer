/* eslint-env jquery, browser */

(function() {
  'use strict';

  window.alert('facebook dimmer loaded');

  // var defaultBodyColor = '#e9ebee';
  var darkestBodyColor = '#222222';

  function setColor() {
    var selectors = [
      '_1dc8',
      '_2t_k',
      '_3-8_',
      '_42ft',
      '_42ft',
      '_42ft',
      '_4jy0',
      '_4jy0',
      '_4jy0',
      '_4jy3',
      '_4jy3',
      '_4jy3',
      '_517h',
      '_517h',
      '_517h',
      '_51sy',
      '_51sy',
      '_51sy',
      '.__c_',
      '._--6',
      '._16ve',
      '._1osb',
      '._29_4',
      '._2aha',
      '._2cnj',
      '._2xww',
      '._3c21',
      '._3ekx',
      '._3ubp',
      '._4-u2',
      '._4-u8',
      '._42ef',
      '._4arz',
      '._52c6',
      '._5s6c',
      '._5v6e',
      '._5xmp',
      '._5yk1',
      '._6l-',
      '._6m3',
      '._6m6',
      '._ikh',
      '._sg1',
      '._sg2',
      '.cardRightCol',
      '.img',
      '.mbs ',
      '.PageLikeButton',
      '.u_0_q',
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
      'sp_0zrv6w-CP-h_2x',
      'sx_7c236c'
    ];

    $('body').css('background-color', darkestBodyColor);
    $('.img').css('opacity', 0.2);
    for (var i = 0; i < selectors.length; i++) {
      $(selectors[i]).css('background-color', darkestBodyColor);
    }
  }

  setInterval(setColor, 100);
})();
