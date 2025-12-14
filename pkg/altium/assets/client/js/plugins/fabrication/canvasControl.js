/**
 * Fabrication Engine - Canvas Control
 * 
 * Canvas management with render loop, input handling, and resize.
 */
"use strict";

(function (Fabrication) {

    var CORE = window.__CORE__;
    var APP = window.__APP__;

    /**
     * Canvas Control - manages canvas element and render loop
     */
    Fabrication.CanvasControl = function () {
        Fabrication.EventEmitter.call(this);

        this.requestId = -1;
        this.documentFileSize = 0;
        this.logger = CORE.createLogger("FabricationCanvasControl");

        // Create canvas
        this.canvas = document.createElement("canvas");
        this.canvas.tabIndex = 0;
        this.canvas.oncontextmenu = function () { return false; };
        this.canvas.style.opacity = "1";

        // Create container div
        this.div = document.createElement("div");
        this.div.setAttribute("style", "width: 100%; height: 100%;");
        this.div.appendChild(this.canvas);

        // Theme handling
        var self = this;
        if (APP && APP.onThemeChanged) {
            APP.onThemeChanged(function (theme) {
                if (theme && theme.css) {
                    self.canvas.style.backgroundColor = theme.css;
                }
            });
        }

        // Setup resize observer
        if (window.ResizeObserver) {
            new ResizeObserver(function () {
                self.onResize();
            }).observe(this.div);
        } else {
            window.addEventListener("resize", function () {
                self.onResize();
            });
        }

        // Render function (bound)
        this.render = function () {
            try {
                var startTime = performance.now();
                self.emit("paint");
                var renderTime = performance.now() - startTime;
                self.emit("renderTime", renderTime, self.documentFileSize);
            } catch (err) {
                self.logger.LogError("Render error.", err);
            } finally {
                self.requestId = window.requestAnimationFrame(self.render);
            }
        };

        // Setup input event handling
        this._setupInputEvents();
    };

    // Inherit from EventEmitter
    Fabrication.CanvasControl.prototype = Object.create(Fabrication.EventEmitter.prototype);
    Fabrication.CanvasControl.prototype.constructor = Fabrication.CanvasControl;

    /**
     * Setup canvas input events
     */
    Fabrication.CanvasControl.prototype._setupInputEvents = function () {
        var self = this;
        var canvas = this.canvas;
        var isPanning = false;
        var lastX = 0;
        var lastY = 0;

        // Mouse events
        canvas.addEventListener("mousedown", function (e) {
            isPanning = true;
            lastX = e.clientX;
            lastY = e.clientY;
            self.emit("pan", "start", e.clientX, e.clientY);
        });

        canvas.addEventListener("mousemove", function (e) {
            if (isPanning) {
                self.emit("pan", "move", e.clientX, e.clientY);
            }
            lastX = e.clientX;
            lastY = e.clientY;
        });

        canvas.addEventListener("mouseup", function (e) {
            if (isPanning) {
                isPanning = false;
                self.emit("pan", "end", e.clientX, e.clientY);
            }
        });

        canvas.addEventListener("mouseleave", function (e) {
            if (isPanning) {
                isPanning = false;
                self.emit("pan", "end", e.clientX, e.clientY);
            }
        });

        canvas.addEventListener("click", function (e) {
            self.emit("click", e.clientX, e.clientY);
        });

        canvas.addEventListener("dblclick", function (e) {
            self.emit("dblclick", e.clientX, e.clientY);
        });

        // Wheel/zoom
        canvas.addEventListener("wheel", function (e) {
            e.preventDefault();
            self.emit("zoom", e.deltaY, e.clientX, e.clientY);
        }, { passive: false });

        // Touch events
        canvas.addEventListener("touchstart", function (e) {
            self.emit("touch", "start", e.touches);
        });

        canvas.addEventListener("touchmove", function (e) {
            self.emit("touch", "move", e.touches);
        });

        canvas.addEventListener("touchend", function (e) {
            self.emit("touch", "end", e.touches);
        });
    };

    /**
     * Handle resize
     */
    Fabrication.CanvasControl.prototype.onResize = function () {
        var rect = this.div.getBoundingClientRect();
        this.canvas.width = rect.width * (window.devicePixelRatio || 1);
        this.canvas.height = rect.height * (window.devicePixelRatio || 1);
        this.emit("resize", rect.width, rect.height);
    };

    /**
     * Start render loop
     */
    Fabrication.CanvasControl.prototype.start = function () {
        if (this.requestId === -1) {
            this.onResize();
            this.requestId = window.requestAnimationFrame(this.render);
        }
    };

    /**
     * Stop render loop
     */
    Fabrication.CanvasControl.prototype.stop = function () {
        if (this.requestId !== -1) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = -1;
        }
    };

    /**
     * Attach to container element
     */
    Fabrication.CanvasControl.prototype.attach = function (container) {
        container.appendChild(this.div);
        this.onResize();
    };

    /**
     * Detach from container
     */
    Fabrication.CanvasControl.prototype.detach = function () {
        if (this.div.parentNode) {
            this.div.parentNode.removeChild(this.div);
        }
    };

    /**
     * Get WebGL context
     */
    Fabrication.CanvasControl.prototype.getContext = function () {
        return this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");
    };

})(window.Fabrication = window.Fabrication || {});
