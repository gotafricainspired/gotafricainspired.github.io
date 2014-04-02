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


(function(){

  $(window).on('scroll', function(){
    if($(window).scrollTop() > 166) {
        $('.fixed-globalnav').show();
    } else {
        $('.fixed-globalnav').hide();
    }
  });

//  $('ul.nav a').on('click', function(event){
//    event.preventDefault();
//    var targetID = $(this).attr('href');
//    var targetST = $(targetID).offset().top - 48;
//    $('body').animate({
//      scrollTop: targetST + 'px'
//    }, 300);
//  });

}());
