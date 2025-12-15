/**
 * FPSMonitor.js
 * 
 * Monitors FPS and render time, sends performance reports to monitoring service.
 * Extracted from ViewerApp.js (Ze class).
 */
(function(global) {
    'use strict';

    var ViewerUtils = global.ViewerUtils;
    var defineProperty = ViewerUtils.defineProperty;
    var defineProperties = ViewerUtils.defineProperties;

    // View type mapping for report labels
    var VIEW_TYPES = {
        2: "PCB.2D",
        3: "PCB.3D",
        Difference: "GerberCompare.Compare",
        Target: "GerberCompare.Target",
        Source: "GerberCompare.Source",
    };

    /**
     * Get WebGL renderer info
     */
    function getWebGlInfo() {
        try {
            var canvas = document.createElement("canvas");
            var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (gl) {
                var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
                if (debugInfo) {
                    return {
                        vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
                        renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
                    };
                }
            }
        } catch (e) {
            console.warn("Failed to get WebGL info:", e);
        }
        return { vendor: "unknown", renderer: "unknown" };
    }

    /**
     * FPSMonitor class - monitors performance and sends reports when FPS drops
     * @param {Object} appMonitoring - App monitoring service with sentry
     * @param {Object} core - Core instance
     */
    var FPSMonitor = (function() {
        function FPSMonitor(appMonitoring, core) {
            var self = this;
            
            this.appMonitoring = appMonitoring;
            this.core = core;
            this.renderTimeArray = [];
            this.performanceFpsArray = [];
            this.sentReportTypes = [];
            this.docSize = null;

            // Define instance methods
            this.onFpsChange = function(fps, viewType) {
                if (!self.sentReportTypes.includes(viewType)) {
                    self.addItemToArray(fps, 2);
                    if (self.averagePerformanceFps && self.averagePerformanceFps < 15) {
                        self.sendReport(viewType);
                    }
                }
            };

            this.onRenderTimeChange = function(renderTime, docSize, viewType) {
                if (!self.sentReportTypes.includes(viewType)) {
                    self.docSize = docSize;
                    self.addItemToArray(renderTime, 1);
                    if (self.averageRenderTime && self.averageRenderTime > 200) {
                        self.sendReport(viewType);
                    }
                }
            };

            this.addItemToArray = function(value, type) {
                var arr = type === 1 ? self.renderTimeArray : self.performanceFpsArray;
                arr.push(value);
                if (arr.length > 10) arr.shift();
            };

            this.logToConsole = function(value, threshold) {
                threshold = threshold || 15;
                if (value <= 0) return;
                
                var bar = "";
                for (var i = 0; i < value; i++) bar += "-";
                bar += value;
                
                var color = value <= threshold ? "red" : "green";
                console.log("%c " + bar, "background: " + color + "; color: black");
            };
        }

        // Prototype methods
        FPSMonitor.prototype.init = function() {};

        Object.defineProperty(FPSMonitor.prototype, "averagePerformanceFps", {
            get: function() {
                if (this.performanceFpsArray.length !== 10) return null;
                return this.performanceFpsArray.reduce(function(a, b) { return a + b; }, 0) / 10;
            }
        });

        Object.defineProperty(FPSMonitor.prototype, "averageRenderTime", {
            get: function() {
                if (this.renderTimeArray.length !== 10) return null;
                return this.renderTimeArray.reduce(function(a, b) { return a + b; }, 0) / 10;
            }
        });

        FPSMonitor.prototype.sendReport = function(viewType) {
            var self = this;
            try {
                var viewName = VIEW_TYPES[viewType] || "Gerber";
                if (this.appMonitoring.sentry) {
                    var glInfo = getWebGlInfo();
                    this.appMonitoring.sentry.withScope(function(scope) {
                        scope.setLevel("info");
                        self.appMonitoring.capture(
                            new Error("Viewer." + viewName + ".RenderSpeedDecrease"),
                            {
                                tags: {
                                    render_time: Math.round(self.averageRenderTime),
                                    fps: Math.round(self.averagePerformanceFps),
                                    webgl_vendor: glInfo.vendor,
                                    webgl_renderer: glInfo.renderer,
                                    document_size: self.docSize,
                                },
                            }
                        );
                    });
                }
            } catch (e) {
                console.error(e);
            } finally {
                this.sentReportTypes.push(viewType);
            }
        };

        return FPSMonitor;
    })();

    // Export
    global.FPSMonitor = FPSMonitor;

    console.log('[FPSMonitor] Loaded');

})(typeof window !== 'undefined' ? window : this);
