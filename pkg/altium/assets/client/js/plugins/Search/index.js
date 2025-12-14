/**
 * Search Plugin - Entry Point
 * 
 * This module serves as the entry point for the Search plugin.
 * It loads all component modules and exports them to the global namespace.
 * 
 * Module Structure:
 * - store.js: Vuex store for search state and results
 * - utils.js: Utility functions (spread, async helpers)
 * - plugin.js: Plugin metadata
 * - components/
 *   - BaseForm.js: Search input form with filters
 *   - SearchList.js: Search results list
 */
"use strict";

(function (Search) {

    // Module registration
    Search.version = "1.0.0";
    Search.name = "Search";

    // List of required modules
    Search.modules = [
        "store",
        "utils",
        "plugin",
        "components/BaseForm",
        "components/SearchList"
    ];

    // Check if all modules are loaded
    Search.isReady = function () {
        return !!(
            Search.store &&
            Search.utils &&
            Search.BaseFormDef
        );
    };

    // Initialize function called when all modules are loaded
    Search.init = function () {
        console.log("[Search] Plugin initialized");
    };

})(window.Search = window.Search || {});
