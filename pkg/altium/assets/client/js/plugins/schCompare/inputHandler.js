/**
 * SchCompare Engine - Input Handler
 * 
 * Mouse, touch, and gesture input handling for comparison view.
 */
"use strict";

(function (schCompare) {

    /**
     * Mouse event types
     */
    schCompare.mouseEvents = {
        MOUSEDOWN: "mousedown",
        MOUSEMOVE: "mousemove",
        MOUSEUP: "mouseup",
        MOUSEENTER: "mouseenter",
        MOUSELEAVE: "mouseleave",
    };

    /**
     * Touch event types
     */
    schCompare.touchEvents = {
        TOUCHSTART: "touchstart",
        TOUCHMOVE: "touchmove",
        TOUCHEND: "touchend",
    };

    /**
     * Input events emitted by InputHandler
     */
    schCompare.inputEvents = [
        "zoom",
        "panEnter",
        "panLeave",
        "panMove",
        "select",
    ];

    /**
     * Gesture state for multi-touch
     */
    schCompare.GestureState = function () {
        this.count = 0;
        this.position1 = { x: 0, y: 0 };
        this.position2 = { x: 0, y: 0 };
        this.centerPoint = { x: 0, y: 0 };
        this.startDistance = 0;
        this.currentPercent = 100;
    };

    /**
     * Calculate distance between two points
     */
    schCompare.calculateDistance = function (x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    };

    /**
     * Calculate center point between two points
     */
    schCompare.calculateCenter = function (x1, y1, x2, y2) {
        return {
            x: x1 > x2 ? x2 + (x1 - x2) / 2 : x1 + (x2 - x1) / 2,
            y: y1 > y2 ? y2 + (y1 - y2) / 2 : y1 + (y2 - y1) / 2
        };
    };

})(window.schCompare = window.schCompare || {});
