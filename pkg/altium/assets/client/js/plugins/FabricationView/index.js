/**
 * FabricationView Plugin - Entry Point (Compatible with addModule)
 * 
 * View module for fabrication/manufacturing data (Gerber, ODB++).
 * 
 * NOTE: This file must be loaded AFTER:
 * - events.js, meta.js, documentHandler.js, loaderPreview.js, presenter.js
 * 
 * These modules register on window.FabricationView namespace.
 */
"use strict";

(function () {
    var h = window.__CORE__;

    // Check if modular components are loaded
    if (!window.FabricationView || !window.FabricationView.Presenter) {
        console.error("[FabricationView] Presenter not found. Load modules first.");
        return;
    }

    // Get update display name setting
    var f = { value: null };
    var d = !h.tryGetAttributeValue(
        "data-fabrication-view-update-display-name",
        f
    ) || "true" === f.value;

    // Register with the app's module system
    h.addModule({
        type: "View",
        description: "Represent fabrication view provider module.",
        create: function () {
            return window.FabricationView.create(d);
        },
    });

    console.log("[FabricationView] Plugin registered via addModule - 6 modules");
})();
