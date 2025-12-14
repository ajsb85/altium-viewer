/**
 * FabricationView Plugin - Meta Info
 * 
 * Metadata and controls configuration for FabricationView plugin.
 */
"use strict";

(function (FabricationView) {
    /**
     * Meta information for plugin registration
     */
    FabricationView.meta = {
        name: "FabricationView",
        dependencies: ["fabrication"],
        order: 2,
    };

    /**
     * Control types supported by this view
     */
    FabricationView.controls = [
        { type: "zoom" },
        { type: "pan" },
        { type: "reset" },
        { type: "layers" },
    ];

    /**
     * Add controls to array
     */
    FabricationView.addControls = function (controlsArray) {
        FabricationView.controls.forEach(function (control) {
            controlsArray.push(control);
        });
    };

    /**
     * Key bindings
     */
    FabricationView.keyBindings = {
        resetRender: [82, "KeyR"],     // R key
        nextLayer: "+",
        prevLayer: "-",
    };

    /**
     * Handle key up events
     */
    FabricationView.handleKeyUp = function (document, event) {
        if (!event) return;

        // Reset render on R key
        if (event.keyCode === 82 || event.code === "KeyR") {
            document.resetRender();
            return;
        }

        // Layer navigation (not with Ctrl)
        if (!event.ctrlKey) {
            if (event.key === "+") {
                document.layerManager.nextOnceLayer();
            } else if (event.key === "-") {
                document.layerManager.prevOnceLayer();
            }
        }
    };

})(window.FabricationView = window.FabricationView || {});
