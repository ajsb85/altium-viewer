/**
 * HelpPanel Plugin - Entry Point
 * 
 * Module Structure:
 * - store.js: Vuex store for views, controls, board info
 * - components/
 *   - BaseList.js: Navigation sections list
 *   - BaseAbout.js: About viewer text
 *   - BaseControls.js: Keyboard/mouse controls
 */
"use strict";

(function (HelpPanel) {

    HelpPanel.version = "1.0.0";
    HelpPanel.name = "HelpPanel";

    HelpPanel.modules = [
        "store",
        "components/BaseList"
    ];

    HelpPanel.isReady = function () {
        return !!(HelpPanel.store && HelpPanel.BaseListDef);
    };

    HelpPanel.init = function () {
        console.log("[HelpPanel] Plugin initialized");
    };

})(window.HelpPanel = window.HelpPanel || {});
