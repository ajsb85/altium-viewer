/**
 * FabricationView Plugin - Events
 * 
 * Event constants for FabricationView plugin communication.
 */
"use strict";

(function (FabricationView) {

    /**
     * Event names for bus communication
     */
    FabricationView.events = {
        shown: "FabricationView:shown",
        hidden: "FabricationView:hidden",
        documentChange: "FabricationView:documentChange",
        documentChanged: "FabricationView:documentChanged",
        layerManagerCreated: "FabricationView:layerManagerCreated",
        activateDocument: "FabricationView:activateDocument",
        updateInterface: "FabricationView:updateInterface",
    };

    /**
     * Document types for analytics
     */
    FabricationView.documentTypes = {
        GERBER: "Gerber",
        ODB: "OdbPlusPlus",
    };

    /**
     * Get analytics event name from document type
     */
    FabricationView.getAnalyticsName = function (doc) {
        if (!doc) return "Fabrication";
        switch (doc.type) {
            case "Gerber":
                return "Gerber";
            case "OdbPlusPlus":
                return "ODB";
            default:
                return "Fabrication";
        }
    };

})(window.FabricationView = window.FabricationView || {});
