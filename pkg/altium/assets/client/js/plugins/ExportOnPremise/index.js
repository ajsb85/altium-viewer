/**
 * ExportOnPremise Plugin - Entry Point
 * 
 * Export plugin for on-premise deployment (disables email/vote).
 */
"use strict";

(function (ExportOnPremise) {

    ExportOnPremise.version = "1.0.0";
    ExportOnPremise.name = "Export";
    ExportOnPremise.type = "Plugin";
    ExportOnPremise.description = "Export plugin with on demand requests";

    // On-premise specific configuration
    ExportOnPremise.config = {
        showEmailNotification: false,
        showVote: false,
    };

    ExportOnPremise.modules = [];

    ExportOnPremise.isReady = function () {
        return true;
    };

    ExportOnPremise.init = function () {
        console.log("[ExportOnPremise] Plugin initialized");
    };

})(window.ExportOnPremise = window.ExportOnPremise || {});
