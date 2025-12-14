/**
 * GerberCompareMeasurement Plugin - Entry Point
 * 
 * Measurement plugin for Gerber comparison view.
 */
"use strict";

(function (GerberCompareMeasurement) {

    GerberCompareMeasurement.version = "1.0.0";
    GerberCompareMeasurement.name = "GerberCompareMeasurement";
    GerberCompareMeasurement.type = "Plugin";
    GerberCompareMeasurement.description = "Represent fabrication comparison measurement plugin module.";

    // Analytics events
    GerberCompareMeasurement.analyticsEvents = [
        { action: "Point.First" },
        { action: "Point.Second" },
    ];

    // Methods
    GerberCompareMeasurement.methods = [
        "setup",
        "activate",
        "deactivate",
        "createController",
        "clearCurrent",
    ];

    GerberCompareMeasurement.modules = [];

    GerberCompareMeasurement.isReady = function () {
        return true;
    };

    GerberCompareMeasurement.init = function () {
        console.log("[GerberCompareMeasurement] Plugin initialized");
    };

})(window.GerberCompareMeasurement = window.GerberCompareMeasurement || {});
