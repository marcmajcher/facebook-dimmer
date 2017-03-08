/* eslint-env jquery, browser */
/* global TimeMe, chrome */

(function() {
  'use strict';

  var lastTime = 0;
  var maxActive = 60; // Set to only allow sixty minutes of facebook time
  var timeWindow = 60 * 4; // every four hours
  var idleString = Array(timeWindow + 1).join('0');
  var delay = 60 * 1000; // minutes

  window.onload = function() {
    TimeMe.initialize({
      currentPageName: 'facebook-dimmer',
      idleTimeoutInSeconds: 60
    });
    TimeMe.startTimer();

    chrome.storage.sync.get(null, function(items) {
      if (items.idleTime) {
        idleString = items.idleTime;
        var timeAway = Math.floor((new Date().getTime() - items.lastTime) / 1000);
        idleString += Array(timeAway + 1).join('0');
        idleString = idleString.slice(-timeWindow);
        setOpacity();
      }
      setInterval(fade, delay);
    });
  };

  function setOpacity() {
    var idleTime = Math.max(0, maxActive - (idleString.split('1').length - 1));
    document.querySelector('body').style.opacity = idleTime / maxActive;
  }

  function fade() {
    var time = TimeMe.getTimeOnCurrentPageInSeconds();
    if (idleString.length >= timeWindow) {
      idleString = idleString.slice(1);
    }
    if (time === lastTime) {
      idleString += '0';
    }
    else {
      idleString += '1';
    }
    lastTime = time;

    chrome.storage.sync.set({
      idleTime: idleString,
      lastTime: new Date().getTime()
    });
    // chrome.storage.sync.clear();

    setOpacity();
  }
})();
