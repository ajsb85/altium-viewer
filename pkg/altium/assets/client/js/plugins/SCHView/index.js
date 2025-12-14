/**
 * SCHView Plugin - Entry Point
 * 
 * View module for showing schematic (SCH) SVG designs.
 */
"use strict";

(function (SCHView) {

    SCHView.version = "1.0.0";
    SCHView.name = "SCHView";

    // Events emitted by this view
    SCHView.events = [
        "SCHView:documentChanged",
        "SCHView:documents",
        "SCHView:showDocument",
        "SCHView:renderDocumentData",
        "SCHView:shown",
        "SCHView:hidden",
        "SCHView:enableSelection",
        "SCHView:zoomToFit",
        "SCHView:documentActivate",
    ];

    // Engine events
    SCHView.engineEvents = [
        "SchEngine:documentZoom",
        "SchEngine:documentMove",
        "SchEngine:documentClick",
        "SchEngine:resetDocumentView",
    ];

    SCHView.modules = [];

    SCHView.isReady = function () {
        return true;
    };

    SCHView.init = function () {
        console.log("[SCHView] Plugin initialized");
    };

})(window.SCHView = window.SCHView || {});
