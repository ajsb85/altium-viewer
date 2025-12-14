/**
 * PreviewPanel Plugin - Entry Point
 * 
 * Module Structure:
 * - store.js: Vuex store for preview items
 * - components/
 *   - Item.js: Document preview item with modification icons
 */
"use strict";

(function (PreviewPanel) {

    PreviewPanel.version = "1.0.0";
    PreviewPanel.name = "PreviewPanel";

    PreviewPanel.modules = [
        "store",
        "components/Item"
    ];

    PreviewPanel.isReady = function () {
        return !!(PreviewPanel.store && PreviewPanel.ItemDef);
    };

    PreviewPanel.init = function () {
        console.log("[PreviewPanel] Plugin initialized");
    };

})(window.PreviewPanel = window.PreviewPanel || {});
