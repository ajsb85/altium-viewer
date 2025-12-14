/**
 * PCB Engine - State Machine
 * 
 * State transitions for the PCB engine lifecycle.
 */
"use strict";

(function (pcb) {

    // State machine transitions
    pcb.transitions = {
        IDLE: [{ type: "Setup", to: "SETUP" }],
        SETUP: [
            { type: "SetupComplete", to: "SETUP_COMPLETED" },
            { type: "Error", to: "CRASHED" },
        ],
        SETUP_COMPLETED: [
            { type: "Init", to: "INIT" },
            { type: "Error", to: "CRASHED" },
        ],
        INIT: [
            { type: "InitComplete", to: "INIT_COMPLETED" },
            { type: "Error", to: "CRASHED" },
        ],
        INIT_COMPLETED: [{ type: "Load", to: "LOAD" }],
        LOAD: [{ type: "LoadComplete", to: "LOAD_COMPLETED" }],
        LOAD_COMPLETED: [
            { type: "Render", to: "RENDER" },
            { type: "Load", to: "LOAD" },
        ],
        RENDER: [{ type: "RenderComplete", to: "RENDER_COMPLETED" }],
        RENDER_COMPLETED: [
            { type: "Show", to: "SHOW" },
            { type: "Load", to: "LOAD" },
            { type: "Render", to: "RENDER" },
        ],
        SHOW: [
            { type: "Show", to: "SHOW" },
            { type: "Load", to: "LOAD" },
            { type: "Render", to: "RENDER" },
        ],
    };

    // Completion states
    pcb.completionStates = [
        "SETUP_COMPLETED",
        "INIT_COMPLETED",
        "LOAD_COMPLETED",
        "RENDER_COMPLETED",
        "SHOW",
    ];

})(window.pcb = window.pcb || {});
