/**
 * PCB Engine - Entry Point
 * 
 * Main engine for PCB document handling, rendering, and interaction.
 * State machine: IDLE → SETUP → INIT → LOAD → RENDER → SHOW
 */
"use strict";

(function (pcb) {

    pcb.version = "1.0.0";
    pcb.name = "pcb";

    // State machine states
    pcb.states = [
        "IDLE",
        "SETUP",
        "SETUP_COMPLETED",
        "INIT",
        "INIT_COMPLETED",
        "LOAD",
        "LOAD_COMPLETED",
        "RENDER",
        "RENDER_COMPLETED",
        "SHOW",
        "CRASHED",
    ];

    // Events emitted by the engine
    pcb.events = [
        "PcbEngine:progress",
        "PcbEngine:layerManagerCreated",
        "PcbEngine:changedRenderMode",
        "PcbEngine:beforeDocumentInit",
        "PcbEngine:afterDocumentInit",
        "PcbEngine:beforeImportPCB",
        "PcbEngine:afterImportPCB",
        "PcbEngine:flipped",
        "PcbEngine:updateLayers",
        "PcbEngine:invalidate",
        "PcbEngine:toggleUnrotedNet",
    ];

    // Major components (for documentation)
    pcb.components = [
        "StateMachine",
        "LayerManager",
        "NoMetadataPcbLayerManager",
        "SimulationManager",
        "PadAppearanceManager",
        "UnroutedConnectionBuilder",
        "SelectionNodesObserver",
    ];

    // Layer kind enums
    pcb.LayerKinds = {
        BoardShape: 0,
        Background: 1,
        Other: 2,
        DrillDrawing: 3,
        Mechanical: 4,
        KeepOut: 5,
        DrillGuide: 6,
        Plane: 7,
        SolderMask: 8,
        Paste: 9,
        Signal: 10,
        Current: 11,
        Overlay: 12,
        MultiLayer: 13,
        Holes: 14,
        Ignored: 15,
    };

    pcb.modules = [];

    pcb.isReady = function () {
        return true;
    };

    pcb.init = function () {
        console.log("[pcb] Engine initialized");
    };

})(window.pcb = window.pcb || {});
