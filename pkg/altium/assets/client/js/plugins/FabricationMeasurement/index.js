/**
 * FabricationMeasurement Plugin - Entry Point
 * 
 * Measurement plugin for fabrication view.
 */
"use strict";

(function (FabricationMeasurement) {

    FabricationMeasurement.version = "1.0.0";
    FabricationMeasurement.name = "Measurement";
    FabricationMeasurement.type = "Plugin";
    FabricationMeasurement.description = "Represent fabrication measurement plugin module.";

    // Analytics events
    FabricationMeasurement.analyticsEvents = [
        { action: "Point.First" },
        { action: "Point.Second" },
    ];

    // Methods
    FabricationMeasurement.methods = [
        "setup",
        "activate",
        "deactivate",
        "createController",
        "clearCurrent",
    ];

    FabricationMeasurement.modules = [];

    FabricationMeasurement.isReady = function () {
        return true;
    };

    FabricationMeasurement.init = function () {
        console.log("[FabricationMeasurement] Plugin initialized");
    };

})(window.FabricationMeasurement = window.FabricationMeasurement || {});
