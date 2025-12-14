/**
 * BOMViewOnPremise Plugin - Entry Point
 * 
 * BOM view for on-premise deployment.
 */
"use strict";

(function (BOMViewOnPremise) {

    BOMViewOnPremise.version = "1.0.0";
    BOMViewOnPremise.name = "BOMView";
    BOMViewOnPremise.type = "View";
    BOMViewOnPremise.description = "A design BOM view module";

    // Methods
    BOMViewOnPremise.methods = [
        "loadBomData",
    ];

    BOMViewOnPremise.modules = [];

    BOMViewOnPremise.isReady = function () {
        return true;
    };

    BOMViewOnPremise.init = function () {
        console.log("[BOMViewOnPremise] Plugin initialized");
    };

})(window.BOMViewOnPremise = window.BOMViewOnPremise || {});
