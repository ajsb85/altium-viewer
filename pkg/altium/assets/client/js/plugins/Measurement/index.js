/**
 * Measurement Plugin - Entry Point
 * 
 * Module Structure:
 * - stateMachine.js: FSM for interaction states (IDLE, MEASURING, etc.)
 * - MeasurementItem.js: Data model for measurements
 * - utils.js: Utility functions
 * - plugin.js: Plugin metadata
 * - components/: Vue UI components
 */
"use strict";

(function (Measurement) {

    Measurement.version = "1.0.0";
    Measurement.name = "Measurement";

    Measurement.modules = [
        "stateMachine",
        "MeasurementItem",
        "utils",
        "plugin"
    ];

    Measurement.isReady = function () {
        return !!(
            Measurement.stateMachine &&
            Measurement.MeasurementItem
        );
    };

    Measurement.init = function () {
        console.log("[Measurement] Plugin initialized");
    };

})(window.Measurement = window.Measurement || {});
