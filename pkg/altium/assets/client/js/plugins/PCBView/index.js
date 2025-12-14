/**
 * PCBView Plugin - Entry Point
 * 
 * View module for showing 2D PCB designs.
 * This is a view-type plugin unlike the store-based UI plugins.
 */
"use strict";

(function (PCBView) {

    PCBView.version = "1.0.0";
    PCBView.name = "PCBView";

    // Events emitted by this view
    PCBView.events = [
        "PCBView:shown",
        "PCBView:hidden",
        "PCBView:documentInfo",
        "PCBView:layerManagerCreated",
        "PCBView:switchSimulation",
        "PCBView:selectSimulationNet",
        "PCBView:selectSimulationLayer",
        "PCBView:selectSimulationViewOption",
        "PCBView:probeActivated",
        "PCBView:probeDeactivated",
        "PCBView:resetView",
        "PCBView:notification:sendFeedback",
    ];

    // Related engine events
    PCBView.engineEvents = [
        "PcbEngine:documentMove",
        "PcbEngine:documentZoom",
        "PcbEngine:resetDocumentView",
        "PcbEngine:documentClick",
        "PcbEngine:documentLocation",
    ];

    PCBView.modules = [];

    PCBView.isReady = function () {
        return true;
    };

    PCBView.init = function () {
        console.log("[PCBView] Plugin initialized");
    };

})(window.PCBView = window.PCBView || {});
