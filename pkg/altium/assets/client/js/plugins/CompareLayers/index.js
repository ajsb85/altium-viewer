/**
 * CompareLayers Plugin - Entry Point
 * 
 * Layer comparison functionality for CAM/Gerber views.
 */
"use strict";

(function (CompareLayers) {

    CompareLayers.version = "1.0.0";
    CompareLayers.name = "CompareLayers";

    CompareLayers.modules = [];

    CompareLayers.isReady = function () {
        return true;
    };

    CompareLayers.init = function () {
        console.log("[CompareLayers] Plugin initialized");
    };

})(window.CompareLayers = window.CompareLayers || {});
