/**
 * Snapping Plugin - Entry Point
 * 
 * Module Structure:
 * - SnappingSettings.js: Configuration class
 * - PointStorage.js: KD-tree spatial indexing for snap points
 */
"use strict";

(function (Snapping) {

    Snapping.version = "1.0.0";
    Snapping.name = "Snapping";

    Snapping.modules = ["SnappingSettings"];

    Snapping.isReady = function () {
        return !!Snapping.SnappingSettings;
    };

    Snapping.init = function () {
        console.log("[Snapping] Plugin initialized");
    };

})(window.Snapping = window.Snapping || {});
