/**
 * SCH Engine - Entry Point
 * 
 * Engine for schematic document handling and rendering.
 */
"use strict";

(function (sch) {

    sch.version = "1.0.0";
    sch.name = "sch";

    // Events emitted
    sch.events = [
        "SchEngine:clearHighlight",
        "SchEngine:clearSelection",
        "SchEngine:drawSelection",
    ];

    // Major components
    sch.components = [
        "Document",          // Lines 488-724
        "StyleManager",      // Lines 767-800+
        "SelectionService",  // Lines 8200-8467
        "SchEngine",         // Main engine class
    ];

    // Load states
    sch.LoadState = {
        IDLE: "IDLE",
        LOADING: "LOADING",
        LOADED: "LOADED",
        ERROR: "ERROR",
    };

    sch.modules = [
        "boundingBox.js",   // BoundingBox class for element bounds
        "styleManager.js",  // Dynamic CSS for variant visibility
        "index.js",         // Entry point
    ];

    sch.isReady = function () {
        return true;
    };

    sch.init = function () {
        console.log("[sch] Engine initialized");
    };

})(window.sch = window.sch || {});
