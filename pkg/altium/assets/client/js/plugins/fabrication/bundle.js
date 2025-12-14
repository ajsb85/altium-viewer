/**
 * Fabrication Engine - Events
 * 
 * Event constants for Fabrication engine communication.
 */
"use strict";

(function (Fabrication) {

    /**
     * Event names for bus communication
     */
    Fabrication.events = {
        progress: "Fabrication:progress",
        documentShow: "Fabrication:documentShow",
        documentShown: "Fabrication:documentShown",
        documentClose: "Fabrication:documentClose",
        documentClosed: "Fabrication:documentClosed",
    };

    /**
     * Document states
     */
    Fabrication.DocumentState = {
        INITIAL: "Initial",
        LOADING: "Loading",
        LOADED: "Loaded",
        RENDERING: "Rendering",
        RENDERED: "Rendered",
        ERROR: "Error",
    };

    /**
     * Document types
     */
    Fabrication.DocumentType = {
        GERBER: "Gerber",
        ODB: "OdbPlusPlus",
    };

    /**
     * Error codes
     */
    Fabrication.ErrorCode = {
        STORE_EXPIRED: "StoreExpired",
        WEBGL_NOT_SUPPORTED: "WebGLNotSupported",
        WEBGL_EXTENSION_NOT_SUPPORTED: "WebGLNotSupportedExtension",
    };

})(window.Fabrication = window.Fabrication || {});
/**
 * Fabrication Engine - State Machine (Base)
 * 
 * Event-based state machine with transitions.
 * Extracted from original webpack bundle.
 */
"use strict";

(function (Fabrication) {

    /**
     * Simple event emitter
     */
    Fabrication.EventEmitter = function () {
        this._events = {};
    };

    Fabrication.EventEmitter.prototype = {
        on: function (event, callback) {
            if (!this._events[event]) {
                this._events[event] = [];
            }
            this._events[event].push(callback);
            return this;
        },

        once: function (event, callback) {
            var self = this;
            var wrapper = function () {
                self.off(event, wrapper);
                callback.apply(self, arguments);
            };
            this.on(event, wrapper);
            return this;
        },

        off: function (event, callback) {
            if (!this._events[event]) return this;
            if (!callback) {
                delete this._events[event];
            } else {
                var idx = this._events[event].indexOf(callback);
                if (idx > -1) {
                    this._events[event].splice(idx, 1);
                }
            }
            return this;
        },

        emit: function (event) {
            if (!this._events[event]) return;
            var args = Array.prototype.slice.call(arguments, 1);
            var callbacks = this._events[event].slice();
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].apply(this, args);
            }
        }
    };

    /**
     * Base State Machine
     * @param {string} initialState - Initial state
     * @param {Object} transitions - State transition table
     */
    Fabrication.StateMachine = function (initialState, transitions) {
        Fabrication.EventEmitter.call(this);
        this.state = initialState;
        this.prevstate = null;
        this.transitions = transitions;
    };

    // Inherit from EventEmitter
    Fabrication.StateMachine.prototype = Object.create(Fabrication.EventEmitter.prototype);
    Fabrication.StateMachine.prototype.constructor = Fabrication.StateMachine;

    /**
     * Dispatch an action to transition state
     * @param {Object} action - Action with type property
     * @returns {boolean} True if transition occurred
     */
    Fabrication.StateMachine.prototype.dispatch = function (action) {
        var currentTransitions = this.transitions[this.state];
        if (!currentTransitions) return false;

        for (var i = 0; i < currentTransitions.length; i++) {
            var transition = currentTransitions[i];
            var conditions = transition.where(action);

            // Check if all conditions are met
            var valid = conditions.every(function (c) { return c; });
            if (valid) {
                this.prevstate = this.state;
                this.state = transition.to;
                this.emit("#Transition", action);
                return true;
            }
        }
        return false;
    };

})(window.Fabrication = window.Fabrication || {});
/**
 * Fabrication Engine - FSM (Finite State Machine)
 * 
 * Engine-specific FSM with setup, init, load, render states.
 * Extends StateMachine with transition table.
 */
"use strict";

(function (Fabrication) {

    /**
     * Transition helpers
     */
    var transitionLoad = {
        where: function (action) {
            return ["LOAD" === action.type];
        },
        to: "LOAD"
    };

    var transitionRender = {
        where: function (action) {
            return ["RENDER" === action.type];
        },
        to: "RENDER"
    };

    var transitionCrashed = {
        where: function (action) {
            return ["CRASHED" === action.type];
        },
        to: "CRASHED"
    };

    /**
     * State transition table for Fabrication Engine
     */
    Fabrication.StateTransitions = {
        IDLE: [
            { where: function (a) { return ["SETUP" === a.type]; }, to: "SETUP" },
            transitionCrashed
        ],
        SETUP: [
            { where: function (a) { return ["SETUP_COMPLETED" === a.type]; }, to: "SETUP_COMPLETED" },
            transitionCrashed
        ],
        SETUP_COMPLETED: [
            { where: function (a) { return ["INIT" === a.type]; }, to: "INIT" },
            transitionCrashed
        ],
        INIT: [
            { where: function (a) { return ["INIT_COMPLETED" === a.type]; }, to: "INIT_COMPLETED" },
            transitionCrashed
        ],
        INIT_COMPLETED: [transitionLoad],
        LOAD: [
            { where: function (a) { return ["LOAD_COMPLETED" === a.type]; }, to: "LOAD_COMPLETED" }
        ],
        LOAD_COMPLETED: [transitionRender, transitionLoad],
        RENDER: [
            { where: function (a) { return ["RENDER_COMPLETED" === a.type]; }, to: "RENDER_COMPLETED" }
        ],
        RENDER_COMPLETED: [transitionLoad, transitionRender]
    };

    /**
     * Fabrication FSM - Engine state controller
     * @param {Object} callback - Callback object with setup, initialize, loadDocument, renderDocument
     * @param {Object} logger - Logger instance
     */
    Fabrication.FSM = function (callback, logger) {
        Fabrication.StateMachine.call(this, "IDLE", Fabrication.StateTransitions);

        this.callback = callback;
        this.logger = logger;
        this.errorState = null;

        var self = this;
        this.on("#Transition", function (action) {
            if ("CRASHED" === self.state && action.error) {
                self.errorState = action.error;
            }
            logger.LogDebug(self.prevstate + " -> " + self.state);
        });
    };

    // Inherit from StateMachine
    Fabrication.FSM.prototype = Object.create(Fabrication.StateMachine.prototype);
    Fabrication.FSM.prototype.constructor = Fabrication.FSM;

    /**
     * Setup phase
     */
    Fabrication.FSM.prototype.setup = function (core) {
        if (this.dispatch({ type: "SETUP" })) {
            try {
                this.callback.setup(core);
                this.dispatch({ type: "SETUP_COMPLETED" });
            } catch (err) {
                this.logger.LogError("Setup engine error.", err);
                this.dispatch({
                    type: "CRASHED",
                    error: new Error("Graphics engine setup error.")
                });
            }
        }
    };

    /**
     * Initialize phase (async)
     */
    Fabrication.FSM.prototype.init = function () {
        var self = this;

        return new Promise(function (resolve, reject) {
            // Check for invalid states
            if ("IDLE" === self.state) {
                self.logger.LogError("Engine setup process has not called for initialize state.");
                self.dispatch({
                    type: "CRASHED",
                    error: new Error("Graphics engine failed state.")
                });
            }

            // Wait for SETUP to complete if needed
            var waitForSetup = function () {
                if ("SETUP" === self.state) {
                    return new Promise(function (res) {
                        self.once("#Transition", res);
                    }).then(waitForSetup);
                }
                return Promise.resolve();
            };

            waitForSetup().then(function () {
                if (!self.dispatch({ type: "INIT" })) {
                    return resolve();
                }

                return Promise.resolve(self.callback.initialize()).then(function () {
                    self.dispatch({ type: "INIT_COMPLETED" });
                }).catch(function (err) {
                    self.logger.LogError("Initialize engine error.", err);
                    self.dispatch({ type: "CRASHED", error: err });
                });
            }).then(function () {
                // Wait for INIT to complete if needed
                if ("INIT" === self.state) {
                    return new Promise(function (res) {
                        self.once("#Transition", res);
                    });
                }
            }).then(function () {
                if ("CRASHED" === self.state) {
                    reject(self.errorState);
                } else {
                    resolve();
                }
            }).catch(reject);
        });
    };

    /**
     * Load document phase (async)
     */
    Fabrication.FSM.prototype.loadDocument = function (document) {
        var self = this;

        return new Promise(function (resolve, reject) {
            if ("CRASHED" === self.state) {
                return reject(self.errorState);
            }

            if (!self.dispatch({ type: "LOAD", document: document })) {
                // Already loading, wait for transition
                if ("LOAD" === self.state) {
                    return new Promise(function (res) {
                        self.once("#Transition", res);
                    }).then(resolve);
                }
                return resolve();
            }

            Promise.resolve(self.callback.loadDocument(document)).then(function () {
                self.dispatch({ type: "LOAD_COMPLETED" });
                resolve();
            }).catch(function (err) {
                self.logger.LogError("Load document error.", err);
                reject(err);
            });
        });
    };

    /**
     * Render document phase (async)
     */
    Fabrication.FSM.prototype.renderDocument = function (document) {
        var self = this;

        return new Promise(function (resolve, reject) {
            if ("CRASHED" === self.state) {
                return reject(self.errorState);
            }

            if (!self.dispatch({ type: "RENDER", document: document })) {
                // Already rendering, wait for transition
                if ("RENDER" === self.state) {
                    return new Promise(function (res) {
                        self.once("#Transition", res);
                    }).then(resolve);
                }
                return resolve();
            }

            Promise.resolve(self.callback.renderDocument(document)).then(function () {
                self.dispatch({ type: "RENDER_COMPLETED" });
                resolve();
            }).catch(function (err) {
                self.logger.LogError("Render document error.", err);
                reject(err);
            });
        });
    };

})(window.Fabrication = window.Fabrication || {});
/**
 * Fabrication Engine - Layer Manager
 * 
 * Layer visibility and view management for fabrication output.
 */
"use strict";

(function (Fabrication) {

    /**
     * View types
     */
    Fabrication.ViewType = {
        NONE: "none",
        TOP: "top",
        BOTTOM: "bottom",
    };

    /**
     * Layer Manager - Static utility functions
     */
    Fabrication.LayerManager = {

        /**
         * Get layers from store
         * @param layers - Current layers
         * @param layersData - Original layer data
         * @param useCache - if false, creates new copies
         */
        getLayers: function (layers, layersData, useCache) {
            if (!useCache) {
                return layersData.map(function (layer) {
                    return Object.assign({}, layer);
                });
            }
            return layers;
        },

        /**
         * Set layer visibility and emit changed event
         */
        setLayers: function (scene, layers) {
            scene.renderOptions = this.createRenderOptions(layers);
        },

        /**
         * Reset all layers to original state
         */
        resetLayers: function (layersData) {
            return layersData.map(function (layer) {
                return Object.assign({}, layer);
            });
        },

        /**
         * Group layers by layerGroup
         */
        getGroupedLayers: function (layers) {
            var groups = [];
            var sortedLayers = layers.slice().sort(function (a, b) {
                return a.groupDisplayIndex - b.groupDisplayIndex;
            });

            var groupNames = Array.from(new Set(sortedLayers.map(function (l) {
                return l.layerGroup;
            })));

            groupNames.forEach(function (groupName) {
                var groupLayers = layers.filter(function (l) {
                    return l.layerGroup === groupName;
                }).sort(function (a, b) {
                    return a.displayIndex - b.displayIndex;
                });
                if (groupLayers.length > 0) {
                    groups.push(groupLayers);
                }
            });

            return groups;
        },

        /**
         * Set top-only view
         */
        setTopView: function (layers) {
            layers.forEach(function (layer) {
                layer.isVisible = layer.isTop || layer.isDrills || layer.isKeepOut;
            });
            return layers;
        },

        /**
         * Set bottom-only view
         */
        setBottomView: function (layers) {
            layers.forEach(function (layer) {
                layer.isVisible = layer.isBottom || layer.isDrills || layer.isKeepOut;
            });
            return layers;
        },

        /**
         * Set single layer visibility
         */
        setOnceLayer: function (layers, layerName) {
            layers.forEach(function (layer) {
                layer.isVisible = layer.name === layerName;
            });
            return layers;
        },

        /**
         * Find next visible layer index
         */
        nextOnceLayer: function (layers, currentIndex) {
            var visibleLayers = layers.filter(function (l) { return l.isVisible; });
            if (visibleLayers.length === 0) return -1;
            var idx = currentIndex + 1;
            if (idx >= layers.length) idx = 0;
            return idx;
        },

        /**
         * Find previous visible layer index
         */
        prevOnceLayer: function (layers, currentIndex) {
            var visibleLayers = layers.filter(function (l) { return l.isVisible; });
            if (visibleLayers.length === 0) return -1;
            var idx = currentIndex - 1;
            if (idx < 0) idx = layers.length - 1;
            return idx;
        },

        /**
         * Create render options from visible layers
         */
        createRenderOptions: function (layers) {
            return layers
                .filter(function (layer) {
                    return layer.isVisible;
                })
                .sort(function (a, b) {
                    return a.stackIndex - b.stackIndex;
                })
                .map(function (layer) {
                    return { layer: layer.id };
                });
        },

        /**
         * Convert layers to storable format
         */
        toStoredLayers: function (layers, viewType) {
            var visibleIds = layers
                .filter(function (l) { return l.isVisible; })
                .map(function (l) { return l.id; });

            var viewCode = viewType === "top" ? 1 : viewType === "bottom" ? 2 : 0;

            return [visibleIds.length].concat(visibleIds).concat([viewCode]);
        },

        /**
         * Restore layers from stored format
         */
        fromStoredLayers: function (data) {
            if (!data || data.length < 2 || data.length !== data[0] + 2) {
                return {};
            }

            var count = data[0];
            var visibleLayers = data.slice(1, 1 + count);
            var viewCode = data[1 + count];

            return {
                visibleLayers: visibleLayers,
                viewType: viewCode === 1 ? "top" : viewCode === 2 ? "bottom" : "none"
            };
        }
    };

    /**
     * UI events for input handling
     */
    Fabrication.UIEvents = {
        OWN: [
            "mousedown", "mouseup", "mousemove", "wheel",
            "touchstart", "touchmove", "touchend",
            "mouseleave", "mouseenter", "click", "dblclick"
        ],
        GLOBAL: ["keydown", "keyup"]
    };

})(window.Fabrication = window.Fabrication || {});
/**
 * Fabrication Engine - Viewport
 * 
 * Camera control, zoom, pan for fabrication view.
 */
"use strict";

(function (Fabrication) {

    /**
     * Viewport - Camera controller for 2D scene
     * @param {Object} scene - Graphite scene instance
     */
    Fabrication.Viewport = function (scene) {
        this.scene = scene;
        this._position = [0, 0, 1]; // x, y, zoom
        this._cnt = Fabrication.Viewport._instanceCount++;
    };

    Fabrication.Viewport._instanceCount = 0;

    Fabrication.Viewport.prototype = {

        /**
         * Get stored position [x, y, zoom]
         */
        get storedPosition() {
            return this._position;
        },

        /**
         * Get viewport coordinates
         */
        get coordinates() {
            var center = this.scene.viewport.GetCenter();
            var zoom = this.scene.viewport.GetZoom();
            return {
                x: center[0],
                y: center[1],
                zoom: zoom
            };
        },

        /**
         * Zoom in by factor
         * @param {number} delta - Zoom factor
         */
        zoomIn: function (delta) {
            delta = delta || 1.25;
            var current = this.scene.viewport.GetZoom();
            this.scene.viewport.SetZoom(current * delta);
            this.updatePosition();
            this.emit("changed");
        },

        /**
         * Zoom out by factor
         * @param {number} delta - Zoom factor
         */
        zoomOut: function (delta) {
            delta = delta || 1.25;
            var current = this.scene.viewport.GetZoom();
            this.scene.viewport.SetZoom(current / delta);
            this.updatePosition();
            this.emit("changed");
        },

        /**
         * Pan viewport by delta
         * @param {number} dx - X delta
         * @param {number} dy - Y delta
         */
        pan: function (dx, dy) {
            var center = this.scene.viewport.GetCenter();
            this.scene.viewport.SetCenter([center[0] + dx, center[1] + dy]);
            this.updatePosition();
            this.emit("changed");
        },

        /**
         * Reset to fit entire scene
         */
        reset: function () {
            this.scene.zoomToFit();
            this.updatePosition();
            this.emit("changed");
        },

        /**
         * Restore viewport from stored position
         * @param {Array} position - [x, y, zoom] or undefined for reset
         */
        restore: function (position) {
            if (position === undefined) {
                this.scene.zoomToFit();
            } else {
                this.scene.viewport.SetCenter(position.slice(0, 2));
                this.scene.viewport.SetZoom(position[2]);
            }
            this.updatePosition();
            return this;
        },

        /**
         * Update stored position from current viewport
         */
        updatePosition: function () {
            var center = this.scene.viewport.GetCenter();
            var zoom = this.scene.viewport.GetZoom();
            this._position[0] = center[0];
            this._position[1] = center[1];
            this._position[2] = zoom;
        },

        /**
         * Emit event (placeholder - actual implementation uses bus)
         */
        emit: function (eventName) {
            // Actual emit done via core.bus
        }
    };

})(window.Fabrication = window.Fabrication || {});
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
/**
 * Fabrication Engine - Document
 * 
 * Fabrication document class for loading and rendering Gerber/ODB++ files.
 */
"use strict";

(function (Fabrication) {

    var CORE = window.__CORE__;
    var events = Fabrication.events;

    /**
     * Fabrication Document
     * @param {Object} config - Document configuration
     */
    Fabrication.Document = function (config) {
        this.id = config.id;
        this.type = config.type;
        this.name = config.name;
        this.fileData = config.fileData;

        this._state = Fabrication.DocumentState.INITIAL;
        this.renderData = null;
        this.errorState = null;
        this.scene = null;
        this.layerManager = null;

        this.logger = CORE.createLogger("Fabrication:Document:" + this.id);
    };

    Fabrication.Document.prototype = {

        /**
         * Get document state
         */
        get state() {
            return this._state;
        },

        /**
         * Check if document is loaded
         */
        get isLoaded() {
            return this._state === Fabrication.DocumentState.LOADED ||
                this._state === Fabrication.DocumentState.RENDERED;
        },

        /**
         * Check if document has error
         */
        get hasError() {
            return this._state === Fabrication.DocumentState.ERROR;
        },

        /**
         * Load document data from storage
         */
        load: function () {
            var self = this;

            return new Promise(function (resolve, reject) {
                try {
                    self._state = Fabrication.DocumentState.LOADING;

                    var storage = CORE.response.storage;
                    if (!self.fileData) {
                        throw new Error("No document graphics to load.");
                    }

                    storage.documentLoader.loadDocument(
                        self.fileData.originalName,
                        self.fileData.fileType
                    ).then(function (response) {
                        return response.arrayBuffer();
                    }).then(function (buffer) {
                        if (!buffer) {
                            throw new Error("No document graphics to display.");
                        }
                        self.renderData = buffer;
                        self._state = Fabrication.DocumentState.LOADED;
                        resolve(self);
                    }).catch(function (err) {
                        self.logger.LogError("Load document error.", err);
                        self._state = Fabrication.DocumentState.ERROR;
                        self.errorState = err;
                        reject(err);
                    });
                } catch (err) {
                    self.logger.LogError("Load document error.", err);
                    self._state = Fabrication.DocumentState.ERROR;
                    self.errorState = err;
                    reject(err);
                }
            });
        },

        /**
         * Render document to scene
         * @param {Object} scene - Graphite scene
         * @param {Function} progressCallback - Progress callback
         */
        render: function (scene, progressCallback) {
            var self = this;

            return new Promise(function (resolve, reject) {
                try {
                    if (!self.renderData) {
                        throw new Error("Document not loaded.");
                    }

                    self._state = Fabrication.DocumentState.RENDERING;
                    self.scene = scene;

                    // Parse and render using graphite engine
                    var parseResult = scene.Parse(self.renderData);
                    if (!parseResult || parseResult.error) {
                        throw new Error(parseResult ? parseResult.error : "Parse failed");
                    }

                    // Create layer manager from parsed layers
                    var layers = parseResult.layers || [];
                    self.layersData = layers;
                    self.layers = layers.map(function (l) { return Object.assign({}, l); });

                    // Create layer manager instance
                    self.layerManager = new Fabrication.LayerManagerInstance(self.layers, self.layersData, scene);

                    self._state = Fabrication.DocumentState.RENDERED;
                    resolve(self);
                } catch (err) {
                    self.logger.LogError("Render document error.", err);
                    self._state = Fabrication.DocumentState.ERROR;
                    self.errorState = err;
                    reject(err);
                }
            });
        },

        /**
         * Clear rendered content
         */
        clearRender: function () {
            if (this.scene) {
                try {
                    this.scene.Clear();
                } catch (err) {
                    this.logger.LogError("Clear render error.", err);
                }
            }
        },

        /**
         * Reset render (re-render without reload)
         */
        resetRender: function () {
            if (this.scene && this.layerManager) {
                this.layerManager.setLayers(this.scene, this.layers);
            }
        },

        /**
         * Dispose document resources
         */
        dispose: function () {
            this.clearRender();
            this.scene = null;
            this.layerManager = null;
            this.renderData = null;
            this._state = Fabrication.DocumentState.INITIAL;
        }
    };

    /**
     * Layer Manager Instance - per-document layer state
     */
    Fabrication.LayerManagerInstance = function (layers, layersData, scene) {
        this.layers = layers;
        this.layersData = layersData;
        this.scene = scene;
        this.viewType = Fabrication.ViewType.NONE;
        this.onceLayerIndex = -1;
    };

    Fabrication.LayerManagerInstance.prototype = {

        get storedLayers() {
            return Fabrication.LayerManager.toStoredLayers(this.layers, this.viewType);
        },

        getLayers: function (useCache) {
            return Fabrication.LayerManager.getLayers(this.layers, this.layersData, useCache);
        },

        setLayers: function (layers) {
            this.layers = layers;
            Fabrication.LayerManager.setLayers(this.scene, layers);
        },

        resetLayers: function () {
            this.layers = Fabrication.LayerManager.resetLayers(this.layersData);
            this.viewType = Fabrication.ViewType.NONE;
            this.onceLayerIndex = -1;
            Fabrication.LayerManager.setLayers(this.scene, this.layers);
        },

        getGroupedLayers: function () {
            return Fabrication.LayerManager.getGroupedLayers(this.layers);
        },

        setTopView: function () {
            this.layers = Fabrication.LayerManager.setTopView(this.layers);
            this.viewType = Fabrication.ViewType.TOP;
            Fabrication.LayerManager.setLayers(this.scene, this.layers);
        },

        setBottomView: function () {
            this.layers = Fabrication.LayerManager.setBottomView(this.layers);
            this.viewType = Fabrication.ViewType.BOTTOM;
            Fabrication.LayerManager.setLayers(this.scene, this.layers);
        },

        setOnceLayer: function (layerName) {
            this.layers = Fabrication.LayerManager.setOnceLayer(this.layers, layerName);
            var idx = this.layers.findIndex(function (l) { return l.name === layerName; });
            this.onceLayerIndex = idx;
            Fabrication.LayerManager.setLayers(this.scene, this.layers);
        },

        nextOnceLayer: function () {
            if (this.layers.length === 0) return;
            var idx = Fabrication.LayerManager.nextOnceLayer(this.layers, this.onceLayerIndex);
            if (idx >= 0) {
                this.setOnceLayer(this.layers[idx].name);
            }
        },

        prevOnceLayer: function () {
            if (this.layers.length === 0) return;
            var idx = Fabrication.LayerManager.prevOnceLayer(this.layers, this.onceLayerIndex);
            if (idx >= 0) {
                this.setOnceLayer(this.layers[idx].name);
            }
        },

        restore: function (storedData) {
            var parsed = Fabrication.LayerManager.fromStoredLayers(storedData);
            if (parsed.visibleLayers) {
                var visibleSet = new Set(parsed.visibleLayers);
                this.layers.forEach(function (l) {
                    l.isVisible = visibleSet.has(l.id);
                });
                this.viewType = parsed.viewType || Fabrication.ViewType.NONE;
                Fabrication.LayerManager.setLayers(this.scene, this.layers);
            }
            return this;
        }
    };

})(window.Fabrication = window.Fabrication || {});
/**
 * Fabrication Engine - Main Engine
 * 
 * Main FabricationEngine class integrated with FSM and CanvasControl.
 */
"use strict";

(function (Fabrication) {

    var CORE = window.__CORE__;
    var APP = window.__APP__;
    var events = Fabrication.events;

    /**
     * Fabrication Engine
     * @param {Object} config - Engine configuration
     */
    Fabrication.Engine = function (config) {
        this.name = config.name || "Fabrication";
        this.comment = config.comment || "";
        this.dependencies = config.dependencies || ["graphite.engine", "fabricationMetadata"];

        this.documents = [];
        this.currentDocumentIndex = 0;
        this.canvasControl = new Fabrication.CanvasControl();
        this.onShowActiveDocument = null;

        this.logger = CORE.createLogger("FabricationEngine");
        this._events = Object.values(events);

        // Setup FSM with callbacks
        var self = this;
        var fsmCallbacks = {
            setup: function (core) { return self.set(core); },
            initialize: function () { return self.initialize(); },
            loadDocument: function (doc) { return self.loadDocumentInternal(doc); },
            renderDocument: function (doc) { return self.renderDocumentInternal(doc); }
        };

        this.fsm = new Fabrication.FSM(fsmCallbacks, this.logger);

        // Setup FSM event handlers
        this.fsm.on("INIT", function () {
            self.emitGlobalEvent(events.progress, null, "Initializing");
        });

        this.fsm.on("LOAD", function (action) {
            if (action.document) {
                var typeName = action.document.typeDisplayName || action.document.type || "Document";
                self.emitGlobalEvent(events.progress, action.document, "Downloading " + typeName);
            }
        });

        this.fsm.on("RENDER", function (action) {
            if (action.document) {
                var typeName = action.document.typeDisplayName || action.document.type || "Document";
                self.emitGlobalEvent(events.progress, action.document, "Rendering " + typeName);
            }
        });
    };

    Fabrication.Engine.prototype = {

        /**
         * Get engine events
         */
        get events() {
            return this._events;
        },

        /**
         * Get active document index
         */
        get activeDocumentIndex() {
            return this.currentDocumentIndex;
        },

        /**
         * Set active document index
         */
        set activeDocumentIndex(value) {
            if (!Number.isInteger(value)) {
                throw new Error("Argument [value=" + value + "] error.");
            }
            if (value < 0 || value >= this.documents.length) {
                throw new Error("Index was out of range. Must be non-negative and less than the size of the collection.");
            }

            var oldIndex = this.currentDocumentIndex;
            this.currentDocumentIndex = value;

            if (oldIndex !== value) {
                // Close old document
                if (oldIndex >= 0 && oldIndex < this.documents.length) {
                    var oldDoc = this.documents[oldIndex];
                    this.emitGlobalEvent(events.documentClose, oldDoc);
                    try {
                        if (oldDoc.clearRender) {
                            oldDoc.clearRender();
                        }
                    } finally {
                        this.emitGlobalEvent(events.documentClosed, oldDoc);
                    }
                }

                // Show new document
                if (this.onShowActiveDocument) {
                    this.onShowActiveDocument.apply(this);
                }
            }
        },

        /**
         * Get all documents
         */
        get allDocuments() {
            return this.documents;
        },

        /**
         * Get active document
         */
        get activeDocument() {
            if (this.activeDocumentIndex < 0 || this.activeDocumentIndex >= this.documents.length) {
                return undefined;
            }
            return this.documents[this.activeDocumentIndex];
        },

        /**
         * Emit event via global bus
         */
        emitGlobalEvent: function (eventName, data, message) {
            if (CORE && CORE.bus) {
                CORE.bus.emit(eventName, data, message);
            }
            return true;
        },

        /**
         * FSM callback: Setup
         */
        set: function (core) {
            // Get documents from metadata
            var metadata = core.response.fabricationMetadata;
            if (metadata) {
                var docs = metadata.getDocuments ? metadata.getDocuments() : (metadata.documents || []);
                this.documents = docs;

                if (this.documents.length > 0) {
                    this.currentDocumentIndex = 0;
                }
            }
        },

        /**
         * FSM callback: Initialize
         */
        initialize: function () {
            var self = this;

            // Load graphite engine
            return new Promise(function (resolve, reject) {
                var graphite = CORE.engines["graphite.engine"];
                if (graphite && graphite.createInstance) {
                    graphite.createInstance().then(function (instance) {
                        self.graphiteInstance = instance;
                        resolve();
                    }).catch(reject);
                } else if (graphite) {
                    self.graphiteInstance = graphite;
                    resolve();
                } else {
                    // Graphite not yet loaded, wait for it
                    self.graphiteInstance = null;
                    resolve();
                }
            });
        },

        /**
         * FSM callback: Load document data
         */
        loadDocumentInternal: function (doc) {
            if (doc && doc.load) {
                return doc.load();
            }
            return Promise.resolve();
        },

        /**
         * FSM callback: Render document
         */
        renderDocumentInternal: function (doc) {
            var self = this;

            return new Promise(function (resolve, reject) {
                try {
                    if (!doc) {
                        return resolve();
                    }

                    // Get graphite instance
                    var graphite = self.graphiteInstance || CORE.engines["graphite.engine"];
                    if (!graphite) {
                        return reject(new Error("Graphite engine not available."));
                    }

                    // Create scene if needed
                    var canvas = self.canvasControl.canvas;
                    var scene = graphite.scene || graphite.createScene(canvas);

                    if (doc.render) {
                        doc.render(scene, function (preview, msg) {
                            self.emitGlobalEvent(events.progress, preview, msg);
                        }).then(resolve).catch(reject);
                    } else {
                        resolve();
                    }
                } catch (err) {
                    reject(err);
                }
            });
        },

        /**
         * Setup engine with core (called by module system)
         */
        setup: function (core) {
            this.fsm.setup(core);
            return Promise.resolve();
        },

        /**
         * Show engine in container (called by view)
         */
        show: function (container) {
            var self = this;

            return new Promise(function (resolve, reject) {
                try {
                    // Attach canvas
                    self.canvasControl.attach(container);
                    self.canvasControl.start();

                    // Setup canvas paint handler
                    self.canvasControl.on("paint", function () {
                        self.onPaint();
                    });

                    // Setup show active document callback
                    self.onShowActiveDocument = function () {
                        return self.showActiveDocumentAsync();
                    };

                    // Initialize then show
                    self.fsm.init().then(function () {
                        return self.showActiveDocumentAsync();
                    }).then(resolve).catch(reject);

                } catch (err) {
                    self.logger.LogError("Show engine error.", err);
                    reject(err);
                }
            });
        },

        /**
         * Show active document async
         */
        showActiveDocumentAsync: function () {
            var self = this;
            var doc = this.activeDocument;

            if (!doc) {
                return Promise.resolve();
            }

            this.emitGlobalEvent(events.documentShow, doc);

            return this.fsm.loadDocument(doc).then(function () {
                return self.fsm.renderDocument(doc);
            }).then(function () {
                self.emitGlobalEvent(events.documentShown, doc, undefined);
            }).catch(function (err) {
                self.emitGlobalEvent(events.documentShown, doc, err);
                throw err;
            });
        },

        /**
         * Paint callback from canvas
         */
        onPaint: function () {
            var doc = this.activeDocument;
            if (doc && doc.scene) {
                doc.scene.Render();
            }
        },

        /**
         * Hide engine
         */
        hide: function () {
            var doc = this.activeDocument;
            if (doc && doc.clearRender) {
                doc.clearRender();
            }
            this.canvasControl.stop();
            this.canvasControl.detach();
        }
    };

    /**
     * Create engine (for addModule integration)
     */
    Fabrication.createEngine = function () {
        return new Fabrication.Engine({
            name: "Fabrication",
            comment: "",
            dependencies: ["graphite.engine", "fabricationMetadata"]
        });
    };

})(window.Fabrication = window.Fabrication || {});
/**
 * Fabrication Engine - Entry Point (Compatible with addModule)
 * 
 * Engine for PCB fabrication view (Gerber/CAM output preview).
 * 
 * NOTE: This file must be loaded AFTER all other modules.
 * These modules register on window.Fabrication namespace.
 */
"use strict";

(function () {
    var CORE = window.__CORE__;
    var APP = window.__APP__;

    // Check if modular components are loaded
    if (!window.Fabrication || !window.Fabrication.FSM) {
        console.error("[Fabrication] FSM not found. Load modules first.");
        return;
    }

    if (!CORE) {
        console.error("[Fabrication] __CORE__ not found.");
        return;
    }

    // Get createModule from APP
    var createModule = APP ? APP.createModule : null;

    if (!createModule) {
        console.warn("[Fabrication] createModule not available.");
        return;
    }

    // Create the module using createModule factory
    var module = createModule({
        type: "Engine",
        description: "Presents fabrication documents engine module",
        create: function (BaseClass, core) {
            // Create engine class that extends the base class
            var Fabrication = window.Fabrication;
            var events = Fabrication.events;

            /**
             * FabricationEngine - extends BaseClass from createModule
             */
            function FabricationEngine(config) {
                // Call base class constructor
                BaseClass.call(this, config);

                this.logger = CORE.createLogger("FabricationEngine");
                this.documents = [];
                this.currentDocumentIndex = 0;

                // Setup FSM with callbacks
                var self = this;
                var fsmCallbacks = {
                    setup: function (c) { return self.set(c); },
                    initialize: function () { return self.initialize(); },
                    loadDocument: function (doc) { return self.loadDocumentInternal(doc); },
                    renderDocument: function (doc) { return self.renderDocumentInternal(doc); }
                };

                this.fsm = new Fabrication.FSM(fsmCallbacks, this.logger);

                // Override emitGlobalEvent to use core.bus
                this.emitGlobalEvent = function () {
                    return false;
                };

                // Setup FSM event handlers
                this.fsm.on("INIT", function () {
                    self.emitGlobalEvent(events.progress, null, "Initializing");
                });

                this.fsm.on("LOAD", function (action) {
                    if (action.document) {
                        var typeName = action.document.typeDisplayName || action.document.type || "Document";
                        self.emitGlobalEvent(events.progress, action.document, "Downloading " + typeName);
                    }
                });

                this.fsm.on("RENDER", function (action) {
                    if (action.document) {
                        var typeName = action.document.typeDisplayName || action.document.type || "Document";
                        self.emitGlobalEvent(events.progress, action.document, "Rendering " + typeName);
                    }
                });

                // Create canvas control
                this.canvasControl = new Fabrication.CanvasControl();
            }

            // Inherit from BaseClass
            FabricationEngine.prototype = Object.create(BaseClass.prototype);
            FabricationEngine.prototype.constructor = FabricationEngine;

            // Define properties
            Object.defineProperty(FabricationEngine.prototype, "events", {
                get: function () {
                    return Object.values(events);
                }
            });

            Object.defineProperty(FabricationEngine.prototype, "activeDocumentIndex", {
                get: function () {
                    return this.currentDocumentIndex;
                },
                set: function (value) {
                    if (!Number.isInteger(value)) {
                        throw new Error("Argument [value=" + value + "] error.");
                    }
                    if (value < 0 || value >= this.documents.length) {
                        throw new Error("Index was out of range.");
                    }

                    var oldIndex = this.currentDocumentIndex;
                    this.currentDocumentIndex = value;

                    if (oldIndex !== value) {
                        if (oldIndex >= 0 && oldIndex < this.documents.length) {
                            var oldDoc = this.documents[oldIndex];
                            this.emitGlobalEvent(events.documentClose, oldDoc);
                            try {
                                if (oldDoc.clearRender) oldDoc.clearRender();
                            } finally {
                                this.emitGlobalEvent(events.documentClosed, oldDoc);
                            }
                        }
                        if (this.onShowActiveDocument) {
                            this.onShowActiveDocument.apply(this);
                        }
                    }
                }
            });

            Object.defineProperty(FabricationEngine.prototype, "allDocuments", {
                get: function () {
                    return this.documents;
                }
            });

            Object.defineProperty(FabricationEngine.prototype, "activeDocument", {
                get: function () {
                    if (this.activeDocumentIndex < 0 || this.activeDocumentIndex >= this.documents.length) {
                        return undefined;
                    }
                    return this.documents[this.activeDocumentIndex];
                }
            });

            // FSM callback: setup
            FabricationEngine.prototype.set = function (core) {
                var metadata = core.response.fabricationMetadata;
                if (metadata) {
                    var docs = metadata.getDocuments ? metadata.getDocuments() : (metadata.documents || []);
                    this.documents = docs;
                    if (this.documents.length > 0) {
                        this.currentDocumentIndex = 0;
                    }
                }
            };

            // FSM callback: initialize
            FabricationEngine.prototype.initialize = function () {
                var self = this;
                return new Promise(function (resolve) {
                    var graphite = CORE.engines["graphite.engine"];
                    self.graphiteInstance = graphite || null;
                    resolve();
                });
            };

            // FSM callback: load document
            FabricationEngine.prototype.loadDocumentInternal = function (doc) {
                if (doc && doc.load) {
                    return doc.load();
                }
                return Promise.resolve();
            };

            // FSM callback: render document
            FabricationEngine.prototype.renderDocumentInternal = function (doc) {
                var self = this;
                return new Promise(function (resolve, reject) {
                    try {
                        if (!doc) return resolve();
                        var graphite = self.graphiteInstance || CORE.engines["graphite.engine"];
                        if (!graphite) return reject(new Error("Graphite engine not available."));

                        var canvas = self.canvasControl.canvas;
                        var scene = graphite.scene || (graphite.createScene ? graphite.createScene(canvas) : null);

                        if (doc.render) {
                            doc.render(scene, function (preview, msg) {
                                self.emitGlobalEvent(events.progress, preview, msg);
                            }).then(resolve).catch(reject);
                        } else {
                            resolve();
                        }
                    } catch (err) {
                        reject(err);
                    }
                });
            };

            // Override setup from base class
            FabricationEngine.prototype.setup = function (core) {
                this.fsm.setup(core);
                return Promise.resolve();
            };

            // Override show from base class
            FabricationEngine.prototype.show = function (container) {
                var self = this;
                return new Promise(function (resolve, reject) {
                    try {
                        self.canvasControl.attach(container);
                        self.canvasControl.start();

                        self.canvasControl.on("paint", function () {
                            self.onPaint();
                        });

                        self.onShowActiveDocument = function () {
                            return self.showActiveDocumentAsync();
                        };

                        self.fsm.init().then(function () {
                            return self.showActiveDocumentAsync();
                        }).then(resolve).catch(reject);
                    } catch (err) {
                        self.logger.LogError("Show engine error.", err);
                        reject(err);
                    }
                });
            };

            FabricationEngine.prototype.showActiveDocumentAsync = function () {
                var self = this;
                var doc = this.activeDocument;
                if (!doc) return Promise.resolve();

                this.emitGlobalEvent(events.documentShow, doc);

                return this.fsm.loadDocument(doc).then(function () {
                    return self.fsm.renderDocument(doc);
                }).then(function () {
                    self.emitGlobalEvent(events.documentShown, doc, undefined);
                }).catch(function (err) {
                    self.emitGlobalEvent(events.documentShown, doc, err);
                    throw err;
                });
            };

            FabricationEngine.prototype.onPaint = function () {
                var doc = this.activeDocument;
                if (doc && doc.scene) {
                    doc.scene.Render();
                }
            };

            FabricationEngine.prototype.hide = function () {
                var doc = this.activeDocument;
                if (doc && doc.clearRender) doc.clearRender();
                this.canvasControl.stop();
                this.canvasControl.detach();
            };

            FabricationEngine.prototype.showDocument = function (docId, position) {
                // Find and show document by id
            };

            // Return new instance of engine
            return new FabricationEngine({
                name: "Fabrication",
                comment: "",
                dependencies: ["graphite.engine", "fabricationMetadata"]
            });
        }
    });

    // Register with core
    CORE.addModule(module);

    console.log("[Fabrication] Engine registered via addModule - 6 modules");
})();
