/**
 * Measurement Engine - Entry Point
 * 
 * Engine for measurement tools (distance, coordinates, labels).
 */
"use strict";

(function (measurementEngine) {

    measurementEngine.version = "1.0.0";
    measurementEngine.name = "measurement.engine";

    // Supported events (lines 374-384)
    measurementEngine.events = [
        "mousedown",
        "mouseup",
        "mousemove",
        "mouseleave",
        "mouseenter",
        "touchstart",
        "touchmove",
        "touchend",
        "click",
        "dblclick",
    ];

    // Major components
    measurementEngine.components = [
        "CursorManager",     // Lines 49-129 (circle, cross, square, triangle cursors)
        "SVGHelper",         // Lines 170-274 (createElement, rounded rect paths)
        "MeasurementLabel",  // Lines 386+ (labelXY, labelX getters)
    ];

    // Cursor types
    measurementEngine.cursorTypes = [
        "circleCursor",
        "crossCursor",
        "squareCursor",
        "triangleCursor",
    ];

    measurementEngine.modules = [
        "cursorManager.js",  // Cursor types and SVG templates
        "svgHelper.js",      // SVG element creation utilities
        "index.js",          // Entry point
    ];

    measurementEngine.isReady = function () {
        return true;
    };

    measurementEngine.init = function () {
        console.log("[measurement.engine] Engine initialized");
    };

})(window.measurementEngine = window.measurementEngine || {});
