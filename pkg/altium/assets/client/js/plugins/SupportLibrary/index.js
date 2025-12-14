/**
 * Support Library - Entry Point
 * 
 * Utility library for geometric calculations, transformations, and math.
 */
"use strict";

(function (SupportLibrary) {

    SupportLibrary.version = "1.0.0";
    SupportLibrary.name = "SupportLibrary";

    // Precision constants (lines 9-10)
    SupportLibrary.EPSILON = 0.01;

    // Major utility classes and functions
    SupportLibrary.components = [
        "GeometryHelper",       // Lines 459-628 - rotations, arc vertices, intersections
        "UnitConverter",        // Track size, point transforms
        "SegmentCalculator",    // Distance calculations
    ];

    // Exported functions
    SupportLibrary.functions = [
        "getUniTrackSize",
        "transformUniPoint",
        "rotatePoint",
        "rotatePointRad",
        "getUniAngles",
        "getArcVertices",
        "distanceBetweenSegments",
        "isIntersected",
        "getCrossPoint",
        "distanceToSegmentSq",
    ];

    SupportLibrary.modules = [
        "geometry.js",  // Point transforms, intersections, distances
        "index.js",     // Entry point
    ];

    SupportLibrary.isReady = function () {
        return true;
    };

    SupportLibrary.init = function () {
        console.log("[SupportLibrary] Library initialized");
    };

})(window.SupportLibrary = window.SupportLibrary || {});
