/**
 * SCH Engine - Bounding Box
 * 
 * Bounding box class for schematic element bounds calculations.
 */
"use strict";

(function (sch) {

    /**
     * BoundingBox class for rectangle bounds
     * Used for selection, viewport, and element bounds
     */
    sch.BoundingBox = function (left, bottom, right, top) {
        this.left = 0;
        this.bottom = 0;
        this.right = 0;
        this.top = 0;
        this.setup(left, bottom, right, top);
    };

    sch.BoundingBox.prototype = {
        // Getters
        get x1() { return this.left; },
        get y1() { return this.bottom; },
        get x2() { return this.right; },
        get y2() { return this.top; },
        get width() { return this.right - this.left; },
        get height() { return this.top - this.bottom; },
        get location1() { return { x: this.left, y: this.bottom }; },
        get location2() { return { x: this.right, y: this.top }; },

        // Methods
        normalize: function () {
            this.setup(this.left, this.bottom, this.right, this.top);
        },

        setup: function (left, bottom, right, top) {
            this.left = Math.min(left, right);
            this.bottom = Math.min(bottom, top);
            this.right = Math.max(left, right);
            this.top = Math.max(bottom, top);
        },

        toString: function () {
            return Math.round(this.x1) + " : " + Math.round(this.y1) +
                " - " + Math.round(this.x2) + " : " + Math.round(this.y2) +
                " / " + Math.round(this.width) + " x " + Math.round(this.height);
        }
    };

    /**
     * Check if one bounding box contains another
     */
    sch.containsBounds = function (inner, outer) {
        outer.normalize();
        return sch.containsPoint(inner.location1, outer) &&
            sch.containsPoint(inner.location2, outer);
    };

    /**
     * Check if a point is inside a bounding box
     */
    sch.containsPoint = function (point, bounds) {
        return point.x >= bounds.x1 &&
            point.y >= bounds.y1 &&
            point.x <= bounds.x2 &&
            point.y <= bounds.y2;
    };

})(window.sch = window.sch || {});
