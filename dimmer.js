/* eslint-env jquery, browser */
/* global TimeMe, chrome */

(function() {
  'use strict';

  var lastTime = 0;
  var timeWindow = 15;
  var seconds = Array(timeWindow + 1).join('0');

  window.onload = function() {
    TimeMe.initialize({
      currentPageName: 'facebook-dimmer',
      idleTimeoutInSeconds: 300
    });
    TimeMe.startTimer();

    chrome.storage.sync.get(null, function(items) {
      if (items.idleSeconds) {
        seconds = items.idleSeconds;
        var secondsGone = Math.floor((new Date().getTime() - items.lastTime) / 1000);
        seconds += Array(secondsGone + 1).join('0');
        seconds = seconds.slice(-timeWindow);
        setOpacity();
        setInterval(fade, 1000);
      }
    });

  };

  function setOpacity() {
    document.querySelector('body').style.opacity = (seconds.split('0').length - 1) / timeWindow;
  }

  function fade() {
    var time = TimeMe.getTimeOnCurrentPageInSeconds();
    if (seconds.length >= timeWindow) {
      seconds = seconds.slice(1);
    }
    if (time === lastTime) {
      seconds += '0';
    }
    else {
      seconds += '1';
    }
    lastTime = time;

    chrome.storage.sync.set({
      idleSeconds: seconds,
      lastTime: new Date().getTime()
    });
    setOpacity();
  }
})();
