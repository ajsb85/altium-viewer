/**
 * Gerber Engine - Entry Point
 * 
 * Registration with addModule for Gerber engine.
 */
"use strict";

(function () {
    var CORE = window.__CORE__;

    // Check if modular components are loaded
    if (!window.Gerber || !window.Gerber.Engine) {
        console.error("[Gerber] Engine not found. Load modules first.");
        return;
    }

    if (!CORE) {
        console.error("[Gerber] __CORE__ not found.");
        return;
    }

    // Module configuration (simple pattern - no createModule needed)
    var moduleConfig = {
        type: "Engine",
        name: "GerberEngine",
        description: "Presents Gerber documents engine module",
        create: function () {
            return new Gerber.Engine();
        }
    };

    // Register with core
    CORE.addModule(moduleConfig);

    console.log("[Gerber] Engine registered via addModule - 4 modules");
})();
