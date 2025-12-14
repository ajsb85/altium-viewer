/**
 * Measurement Engine - SVG Helper
 * 
 * SVG element creation and manipulation utilities.
 */
"use strict";

(function (measurementEngine) {

    var SVG_NS = "http://www.w3.org/2000/svg";

    /**
     * SVG helper utilities
     */
    measurementEngine.svg = {
        /**
         * Create SVG element
         */
        createElement: function (tagName) {
            return document.createElementNS(SVG_NS, tagName);
        },

        /**
         * Set multiple attributes on element
         */
        setAttribute: function (element, attrs) {
            for (var key in attrs) {
                element.setAttribute(key, attrs[key]);
            }
            return element;
        },

        /**
         * Create left-rounded rectangle path
         */
        createLeftRoundedRectPath: function (x, y, width, height, radius) {
            return "M" + (x + radius) + "," + y +
                "h" + (width - radius) +
                "v" + height +
                "h" + (radius - width) +
                "a" + radius + "," + radius + " 0 0 1 " + (-radius) + "," + (-radius) +
                "v" + (2 * radius - height) +
                "a" + radius + "," + radius + " 0 0 1 " + radius + "," + (-radius) +
                "z";
        },

        /**
         * Create right-rounded rectangle path
         */
        createRightRoundedRectPath: function (x, y, width, height, radius) {
            return "M" + x + "," + y +
                "h" + (width - radius) +
                "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius +
                "v" + (height - 2 * radius) +
                "a" + radius + "," + radius + " 0 0 1 " + (-radius) + "," + radius +
                "h" + (radius - width) +
                "z";
        }
    };

})(window.measurementEngine = window.measurementEngine || {});
