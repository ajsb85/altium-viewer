/**
 * SchCompare Engine - State Machine
 * 
 * State machine transitions for schematic comparison engine lifecycle.
 */
"use strict";

(function (schCompare) {

    /**
     * State machine states for schematic comparison engine
     */
    schCompare.states = {
        IDLE: "IDLE",
        SETUP: "SETUP",
        SETUP_COMPLETED: "SETUP_COMPLETED",
        ATTACH: "ATTACH",
        ATTACH_COMPLETED: "ATTACH_COMPLETED",
        SHOW: "SHOW",
        CLOSE: "CLOSE",
        CRASHED: "CRASHED",
    };

    /**
     * State transition events
     */
    schCompare.eventTypes = {
        Setup: "Setup",
        SetupComplete: "SetupComplete",
        Attach: "Attach",
        AttachComplete: "AttachComplete",
        Show: "Show",
        Close: "Close",
        Error: "Error",
    };

    /**
     * State transitions map
     * Defines valid transitions between states
     */
    schCompare.transitions = {
        IDLE: [
            { event: "Setup", to: "SETUP" }
        ],
        SETUP: [
            { event: "SetupComplete", to: "SETUP_COMPLETED" },
            { event: "Error", to: "CRASHED" }
        ],
        SETUP_COMPLETED: [
            { event: "Attach", to: "ATTACH" },
            { event: "Error", to: "CRASHED" }
        ],
        ATTACH: [
            { event: "AttachComplete", to: "ATTACH_COMPLETED" },
            { event: "Error", to: "CRASHED" }
        ],
        ATTACH_COMPLETED: [
            { event: "Show", to: "SHOW" }
        ],
        SHOW: [
            { event: "Close", to: "CLOSE" }
        ],
        CLOSE: [
            { event: "Show", to: "SHOW" }
        ]
    };

})(window.schCompare = window.schCompare || {});
