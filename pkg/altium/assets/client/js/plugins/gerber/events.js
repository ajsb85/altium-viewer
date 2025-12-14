/**
 * Gerber Engine - Events & Constants
 * 
 * Event names and action types for Gerber state machine.
 */
"use strict";

(function (Gerber) {

    /**
     * Event constants
     */
    Gerber.events = {
        // Document events
        documentShow: "GerberEngine:documentShow",
        documentShown: "GerberEngine:documentShown",
        documentClose: "GerberEngine:documentClose",
        documentClosed: "GerberEngine:documentClosed",

        // Engine events  
        progress: "GerberEngine:progress",
        layerManagerCreated: "GerberEngine:layerManagerCreated",
        didDocumentAttach: "GerberEngine:didDocumentAttach",
        flipped: "GerberEngine:flipped"
    };

    /**
     * FSM action types (PascalCase for Gerber)
     */
    Gerber.ActionType = {
        Setup: "Setup",
        SetupComplete: "SetupComplete",
        Init: "Init",
        InitComplete: "InitComplete",
        Render: "Render",
        RenderComplete: "RenderComplete",
        Show: "Show",
        Error: "Error"
    };

    /**
     * FSM States
     */
    Gerber.State = {
        IDLE: "IDLE",
        SETUP: "SETUP",
        SETUP_COMPLETED: "SETUP_COMPLETED",
        INIT: "INIT",
        INIT_COMPLETED: "INIT_COMPLETED",
        RENDER: "RENDER",
        RENDER_COMPLETED: "RENDER_COMPLETED",
        SHOW: "SHOW",
        CRASHED: "CRASHED"
    };

})(window.Gerber = window.Gerber || {});
