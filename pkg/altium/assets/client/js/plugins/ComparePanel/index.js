/**
 * ComparePanel Plugin - Entry Point
 * 
 * Module Structure:
 * - store.js: Vuex store for tree menu
 * - components/: Upload area/file components
 */
"use strict";

(function (ComparePanel) {

    ComparePanel.version = "1.0.0";
    ComparePanel.name = "ComparePanel";

    ComparePanel.modules = ["store"];

    ComparePanel.isReady = function () {
        return !!ComparePanel.store;
    };

    ComparePanel.init = function () {
        console.log("[ComparePanel] Plugin initialized");
    };

})(window.ComparePanel = window.ComparePanel || {});
