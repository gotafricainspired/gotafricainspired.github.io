// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any Zepto/helper plugins in here.

// Adaptive image backgrounds
//(function() {
//
//          var defaults      = {
//                    selector:             '[data-adaptive-background="1"]',
//                    parent:               '.site-content',
//                    normalizeTextColor:   false,
//                    normalizedTextColors:  {
//                             light:      "#fff",
//                             dark:       "#000"
//                    },
//                    lumaClasses:  {
//                             light:      "ab-light",
//                             dark:       "ab-dark"
//                    }
//          };
//          $.adaptiveBackground.run(defaults);
//
//}());


// Dynamically inserting the Youtube video iframe
/* global YT:false */
(function (document) {

    'use strict';

    var configs = {
        //youTubeVideoId: 'HtU2vttOdyM'
        youTubeVideoId: 'qsJYrwzfd6w'
    };

    // YouTube Player API Reference for iframe Embeds:
    // https://developers.google.com/youtube/iframe_api_reference

    function loadYouTubePlayer() {

        var firstScriptTag = document.getElementsByTagName('script')[0];
        var tag = document.createElement('script');

        tag.src = 'https://www.youtube.com/iframe_api';
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // The YouTube API will call this function when the page has finished
        // downloading the JavaScript for the player API
        window.onYouTubeIframeAPIReady = function () {
            // Create the `<iframe>` after the YouTube API code has downloaded
            /* jshint nonew:false */
            new YT.Player('js-youtube-player', {
                videoId: configs.youTubeVideoId,
                playerVars: {
                    theme: 'light'
                }
            });
            /* jshint nonew:true */
        };

    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // load widgets asynchronously
    loadYouTubePlayer();

}(document));

