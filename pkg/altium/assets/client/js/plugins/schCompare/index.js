/**
 * SchCompare Engine - Entry Point
 * 
 * Engine for comparing schematic documents between revisions.
 */
"use strict";

(function (schCompare) {

    schCompare.version = "1.0.0";
    schCompare.name = "schCompare";

    // State Machine states (lines 127-173)
    schCompare.states = [
        "IDLE",
        "SETUP",
        "SETUP_COMPLETED",
        "ATTACH",
        "ATTACH_COMPLETED",
        "SHOW",
        "CLOSE",
        "CRASHED",
    ];

    // Major components
    schCompare.components = [
        "StateMachine",       // Lines 174-310
        "InputHandler",       // Lines 377-599
        "SelectionInteract",  // Lines 600-724
        "PanInteract",        // Lines 726-800+
        "SchCompareEngine",   // Main engine class
    ];

    // Exported modules
    schCompare.exportedModules = [
        "SchCompareEngineModule",  // Line 11103
    ];

    schCompare.modules = [
        "stateMachine.js",  // State transitions
        "inputHandler.js",  // Mouse/touch/gesture handling
        "index.js",         // Entry point
    ];

    schCompare.isReady = function () {
        return true;
    };

    schCompare.init = function () {
        console.log("[schCompare] Engine initialized");
    };

})(window.schCompare = window.schCompare || {});
