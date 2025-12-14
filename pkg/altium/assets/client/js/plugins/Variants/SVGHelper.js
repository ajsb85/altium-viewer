/**
 * Variants Plugin - SVG Helper
 * Utility functions for creating SVG elements
 */
"use strict";

(function (Variants) {
    var SVG_NS = "http://www.w3.org/2000/svg";

    var SVGHelper = {
        createLine: function (x1, y1, x2, y2, stroke, strokeWidth, linecap) {
            linecap = linecap || "butt";
            var line = document.createElementNS(SVG_NS, "line");
            line.setAttribute("x1", x1.toString());
            line.setAttribute("y1", y1.toString());
            line.setAttribute("x2", x2.toString());
            line.setAttribute("y2", y2.toString());
            line.setAttribute("stroke", stroke || "black");
            line.setAttribute("stroke-width", (strokeWidth || 0).toString());
            line.setAttribute("stroke-linecap", linecap);
            return line;
        },

        createBoundCrossLine: function (bounds, color, width, linecap) {
            color = color || "red";
            width = width || 2;
            linecap = linecap || "round";

            var g = document.createElementNS(SVG_NS, "g");
            var x1 = bounds.x,
                y1 = bounds.y,
                x2 = bounds.x + bounds.width,
                y2 = bounds.y + bounds.height;

            var line1 = this.createLine(x1, y1, x2, y2, color, width, linecap);
            g.appendChild(line1);

            var line2 = this.createLine(x1, y2, x2, y1, color, width, linecap);
            g.appendChild(line2);

            return g;
        },

        createRectangle: function (x, y, width, height) {
            var rect = document.createElementNS(SVG_NS, "rect");
            rect.setAttribute("x", "" + x);
            rect.setAttribute("y", "" + y);
            rect.setAttribute("width", "" + width);
            rect.setAttribute("height", "" + height);
            return rect;
        },

        createBoundBox: function (x1, y1, x2, y2) {
            var bounds = { x: 0, y: 0, width: 0, height: 0 };
            if (x1 > x2) {
                bounds.x = x2;
                bounds.width = x1 - x2;
            } else {
                bounds.x = x1;
                bounds.width = x2 - x1;
            }
            if (y1 > y2) {
                bounds.y = y2;
                bounds.height = y1 - y2;
            } else {
                bounds.y = y1;
                bounds.height = y2 - y1;
            }
            return bounds;
        },

        createBoundBoxFromArray: function (arr) {
            if (arr.length !== 4) {
                throw new Error("Incorrect input parameter. Estimate array with 4 items.");
            }
            return this.createBoundBox(arr[0], arr[1], arr[2], arr[3]);
        },
    };

    // Export to namespace
    Variants.SVGHelper = SVGHelper;
    Variants.SVG_NS = SVG_NS;

})(window.Variants = window.Variants || {});
