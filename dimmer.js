/* eslint-env jquery, browser */
/* global TimeMe */

(function() {
  'use strict';

  TimeMe.initialize({
    currentPageName: 'facebook-dimmer',
    idleTimeoutInSeconds: 300
  });
  TimeMe.startTimer();

  var lastTime = 0;
  var timeWindow = 60;
  var seconds = Array(timeWindow + 1).join('0');

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

    var idleSeconds = seconds.split('0').length - 1;
    console.log('Seconds idle in last minute:', idleSeconds);

    document.querySelector('body').style.opacity = idleSeconds / timeWindow;
  }

  setInterval(fade, 1000);
})();

// https://developer.chrome.com/extensions/storage#type-StorageArea
// chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
//     //  A data saved callback omg so fancy
// });
//
// chrome.storage.sync.get(/* String or Array */["yourBody"], function(items){
//     //  items = [ { "yourBody": "myBody" } ]
// });
