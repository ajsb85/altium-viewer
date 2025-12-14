/**
 * SupportLibrary - Geometry Utilities
 * 
 * Geometric calculations for points, segments, arcs, and intersections.
 */
"use strict";

(function (SupportLibrary) {

    /**
     * Geometry helper class
     */
    SupportLibrary.geometry = {

        /**
         * Get track size from dimensions
         */
        getUniTrackSize: function (track) {
            return track.size[0] > track.size[1]
                ? [0.5 * track.size[0] - track.radius, 0]
                : [0, 0.5 * track.size[1] - track.radius];
        },

        /**
         * Transform point by position and direction
         */
        transformUniPoint: function (point, transform) {
            var rotated = this.rotatePoint(point, transform.direction);
            return [
                rotated[0] + transform.position[0],
                rotated[1] + transform.position[1]
            ];
        },

        /**
         * Rotate point by direction vector
         * @param point - [x, y]
         * @param direction - [cos, sin]
         * @param origin - optional origin point
         */
        rotatePoint: function (point, direction, origin) {
            origin = origin || [0, 0];
            var cos = direction[0];
            var sin = direction[1];
            return [
                cos * (point[0] - origin[0]) - sin * (point[1] - origin[1]) + origin[0],
                sin * (point[0] - origin[0]) + cos * (point[1] - origin[1]) + origin[1]
            ];
        },

        /**
         * Rotate point by radians
         */
        rotatePointRad: function (point, angle) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            return [
                point[0] * cos - point[1] * sin,
                point[0] * sin + point[1] * cos
            ];
        },

        /**
         * Get arc angles with direction offset
         */
        getUniAngles: function (angles, transform) {
            var r = Math.atan2(transform.direction[1], transform.direction[0]);
            return [angles[0] + r, angles[1] + r];
        },

        /**
         * Check if two segments intersect
         */
        isIntersected: function (p1, p2, p3, p4) {
            var dx1 = p2[0] - p1[0];
            var dy1 = p2[1] - p1[1];
            var dx2 = p4[0] - p3[0];
            var dy2 = p4[1] - p3[1];
            var cross = dy1 * dx2 - dx1 * dy2;
            var t = ((p1[0] - p3[0]) * dy2 + (p3[1] - p1[1]) * dx2) / cross;
            if (Number.isNaN(t)) return false;
            var u = ((p3[0] - p1[0]) * dy1 + (p1[1] - p3[1]) * dx1) / -cross;
            return t >= 0 && t <= 1 && u >= 0 && u <= 1;
        },

        /**
         * Get intersection point of two segments
         */
        getCrossPoint: function (p1, p2, p3, p4) {
            var t;
            if (p2[1] - p1[1] !== 0) {
                var a = (p2[0] - p1[0]) / (p1[1] - p2[1]);
                var b = p3[0] - p4[0] + (p3[1] - p4[1]) * a;
                if (!b) return null;
                t = (p3[0] - p1[0] + (p3[1] - p1[1]) * a) / b;
            } else {
                if (!(p3[1] - p4[1])) return null;
                t = (p3[1] - p1[1]) / (p3[1] - p4[1]);
            }
            return [
                p3[0] + (p4[0] - p3[0]) * t,
                p3[1] + (p4[1] - p3[1]) * t
            ];
        },

        /**
         * Calculate squared distance from point to segment
         * @returns [distanceSq, closestPoint]
         */
        distanceToSegmentSq: function (point, segStart, segEnd) {
            var dx = segEnd[0] - segStart[0];
            var dy = segEnd[1] - segStart[1];

            if (dx === 0 && dy === 0) {
                var d = point[0] - segStart[0];
                var e = point[1] - segStart[1];
                return [d * d + e * e, segStart];
            }

            var t = ((point[0] - segStart[0]) * dx + (point[1] - segStart[1]) * dy) / (dx * dx + dy * dy);
            var closest;

            if (t < 0) {
                closest = [segStart[0], segStart[1]];
                dx = point[0] - segStart[0];
                dy = point[1] - segStart[1];
            } else if (t > 1) {
                closest = [segEnd[0], segEnd[1]];
                dx = point[0] - segEnd[0];
                dy = point[1] - segEnd[1];
            } else {
                closest = [segStart[0] + t * dx, segStart[1] + t * dy];
                dx = point[0] - closest[0];
                dy = point[1] - closest[1];
            }

            return [dx * dx + dy * dy, closest];
        },

        /**
         * Check if two bounding rectangles overlap
         */
        isOverlappedBoundRects: function (min1, max1, min2, max2) {
            var w1 = Math.abs(max1[0] - min1[0]);
            var h1 = Math.abs(max1[1] - min1[1]);
            var w2 = Math.abs(max2[0] - min2[0]);
            var h2 = Math.abs(max2[1] - min2[1]);
            return (
                2 * Math.abs(min1[0] + w1 / 2 - (min2[0] + w2 / 2)) < w1 + w2 &&
                2 * Math.abs(min1[1] + h1 / 2 - (min2[1] + h2 / 2)) < h1 + h2
            );
        }
    };

})(window.SupportLibrary = window.SupportLibrary || {});
