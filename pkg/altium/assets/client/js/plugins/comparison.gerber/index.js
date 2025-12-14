/**
 * Comparison Gerber Engine - Entry Point
 * 
 * Engine for comparing Gerber CAM files between revisions.
 */
"use strict";

(function (comparisonGerber) {

    comparisonGerber.version = "1.0.0";
    comparisonGerber.name = "comparison.gerber";

    // View types (lines 8-11)
    comparisonGerber.viewTypes = new Map([
        ["Compare", "GerberCompareView"],
        ["Source", "GerberCompareSourceView"],
        ["Target", "GerberCompareTargetView"],
    ]);

    // Major components
    comparisonGerber.components = [
        "InputState",        // Lines 59-139
        "CameraController",  // Extended class
        "CompareEngine",     // Main engine class
    ];

    comparisonGerber.modules = [
        "inputState.js",  // Input adapter for camera controller
        "index.js",       // Entry point
    ];

    comparisonGerber.isReady = function () {
        return true;
    };

    comparisonGerber.init = function () {
        console.log("[comparison.gerber] Engine initialized");
    };

})(window.comparisonGerber = window.comparisonGerber || {});
