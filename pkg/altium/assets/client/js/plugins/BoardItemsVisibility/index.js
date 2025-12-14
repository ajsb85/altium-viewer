/**
 * BoardItemsVisibility - Entry Point
 * 
 * This module serves as the entry point for the BoardItemsVisibility plugin.
 * It loads all component modules and exports them to the global namespace.
 * 
 * Module Structure:
 * - store.js: Vuex store for layer/object visibility state
 * - utils.js: Utility functions (spread, toArray, etc.)
 * - plugin.js: Plugin metadata and helper classes
 * - components/
 *   - AppLayersFooter.js: Footer with keyboard hints
 *   - AppLayersContent.js: Layer list with visibility controls
 *   - Layers.js: Main layers panel
 *   - AppObjectsButton.js: Object visibility button
 *   - AppObjectsList.js: Objects list panel
 *   - AppLayersPanel.js: Main panel with tabs
 */
"use strict";

(function (BoardItemsVisibility) {

    // Module registration
    BoardItemsVisibility.version = "1.0.0";
    BoardItemsVisibility.name = "BoardItemsVisibility";

    // List of required modules
    BoardItemsVisibility.modules = [
        "store",
        "utils",
        "plugin",
        "components/AppLayersFooter",
        "components/AppLayersContent",
        "components/Layers",
        "components/AppObjectsButton",
        "components/AppObjectsList",
        "components/AppLayersPanel"
    ];

    // Check if all modules are loaded
    BoardItemsVisibility.isReady = function () {
        return !!(
            BoardItemsVisibility.store &&
            BoardItemsVisibility.utils &&
            BoardItemsVisibility.AppLayersFooterDef
        );
    };

    // Initialize function called when all modules are loaded
    BoardItemsVisibility.init = function () {
        console.log("[BoardItemsVisibility] Plugin initialized");

        // Log loaded modules
        if (BoardItemsVisibility.store) {
            console.log("[BoardItemsVisibility] Store loaded");
        }
        if (BoardItemsVisibility.utils) {
            console.log("[BoardItemsVisibility] Utils loaded");
        }
    };

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
