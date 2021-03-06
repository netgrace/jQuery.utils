﻿// loc
// $.utils.loc
// .Point
(function ($) {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    //百度02坐标转Gcj09坐标
    Point.bd2Gcj = function (lng, lat) {
        var X_PI = Math.PI * 3000.0 / 180.0;
        var x = lng - 0.0065;
        var y = lat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
        var gg_lon = z * Math.cos(theta);
        var gg_lat = z * Math.sin(theta);
        return { lat: gg_lat, lng: gg_lon };
    }
    if (!$.utils.loc) $.utils.loc = {};
    $.extend($.utils.loc, { Point: Point });
})(jQuery);