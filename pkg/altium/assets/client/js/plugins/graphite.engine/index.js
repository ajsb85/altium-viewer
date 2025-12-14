/**
 * Graphite Engine - Entry Point
 * 
 * Graphics rendering engine using WebGL.
 */
"use strict";

(function (graphiteEngine) {

    graphiteEngine.version = "1.0.0";
    graphiteEngine.name = "graphite.engine";

    graphiteEngine.modules = [];

    graphiteEngine.isReady = function () {
        return true;
    };

    graphiteEngine.init = function () {
        console.log("[graphite.engine] Engine initialized");
    };

})(window.graphiteEngine = window.graphiteEngine || {});
