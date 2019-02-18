(function ($) {
    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
    $.fn.visible = function (partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);

var win = $(window);
var allMods = $(".slideUpPanel"); // defines panels that slide into view

$(window).scroll(function (event) {
    // the class name below to watch for entering the visible window
    $(".slideUpPanel").each(function (i, el) {
        addSlideIn(i, el);
    });
});

// runs on load...flag the already visible modules and don't slide them in
allMods.each(function (i, el) {
    addSlideIn(i, el);
});

function addSlideIn(i, el){
    var el = $(el);
    var keyVal = 0;
    if (el.visible(true)) {
        el.addClass("already-visible");
         // use the code below to have some of the initially-visible items slide in, too
        keyVal = parseInt(i % 10, 10);
        if (i > 0) el.addClass('come-in-' + keyVal);
        
    }
}
