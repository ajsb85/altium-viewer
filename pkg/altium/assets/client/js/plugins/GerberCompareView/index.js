/**
 * GerberCompareView Plugin - Entry Point
 * 
 * View module for comparing Gerber files.
 */
"use strict";

(function (GerberCompareView) {

    GerberCompareView.version = "1.0.0";
    GerberCompareView.name = "GerberCompareView";

    GerberCompareView.modules = [];

    GerberCompareView.isReady = function () {
        return true;
    };

    GerberCompareView.init = function () {
        console.log("[GerberCompareView] Plugin initialized");
    };

})(window.GerberCompareView = window.GerberCompareView || {});
