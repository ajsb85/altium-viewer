/*! 
 * Graphite Engine Plugin for Altium Web Viewer
 * Author: Alexander Salas Bastidas
 * IEEE Member 41608430
 * Email: a.salas@ieee.org
 * ORCID: 0000-0003-1735-203X
 * GitHub: ajsb85
 */
"use strict";

(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
    [9203],
    {
        31055: (exports, module, require) => {
            const StateMachine = require(41497);
            const EventEmitter = require(87908);
            const PCBLoader = require(20892);
            const RenderMode = require(4348);
            const GraphiteResolver = require(7414);

            // ===================================================================
            // Utility Functions
            // ===================================================================
            function getType(value) {
                return typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                    ? typeof value
                    : value && typeof Symbol === "function" && value.constructor === Symbol && value !== Symbol.prototype
                        ? "symbol"
                        : typeof value;
            }

            function defineProperties(target, properties) {
                for (let i = 0; i < properties.length; i++) {
                    const descriptor = properties[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
                }
            }

            function toPropertyKey(key) {
                const converted = toPrimitive(key);
                return getType(converted) === "symbol" ? converted : String(converted);
            }

            function toPrimitive(value) {
                if (getType(value) !== "object" || !value) return value;
                const primitiveMethod = value[Symbol.toPrimitive];
                if (primitiveMethod !== undefined) {
                    const result = primitiveMethod.call(value, "string");
                    if (getType(result) !== "object") return result;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(value);
            }

            // Helper for async/await pattern
            function asyncHelper(thisArg, _arguments, generator) {
                return new Promise(function (resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (error) {
                            reject(error);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (error) {
                            reject(error);
                        }
                    }
                    function step(result) {
                        result.done
                            ? resolve(result.value)
                            : Promise.resolve(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }

            // ===================================================================
            // Library Loader - Singleton for loading external dependencies
            // ===================================================================
            const LibraryLoader = (function () {
                function LibraryLoaderClass() {
                    if (!(this instanceof LibraryLoaderClass)) {
                        throw new TypeError("Cannot call a class as a function");
                    }

                    this.urls = ["./js/thenBy.js", "./js/gl-matrix.js"];

                    // Singleton pattern
                    if (LibraryLoaderClass.instance) {
                        return LibraryLoaderClass.instance;
                    }

                    this.state = "IDLE";
                    LibraryLoaderClass.instance = this;
                }

                defineProperties(LibraryLoaderClass.prototype, [
                    {
                        key: "load",
                        value: function () {
                            const self = this;
                            switch (this.state) {
                                case "IDLE":
                                    return new Promise(function (resolve, reject) {
                                        self.state = "LOADING";
                                        self.loadLibs()
                                            .then(function () {
                                                self.state = "LOADED";
                                                self.onLoaded ? self.onLoaded(null) : resolve();
                                            })
                                            .catch(function (error) {
                                                self.state = "ERROR";
                                                self.onLoaded ? self.onLoaded(error) : reject(error);
                                            });
                                    });
                                case "ERROR":
                                    this.state = "IDLE";
                                    return this.load();
                                case "LOADED":
                                    return Promise.resolve();
                                case "LOADING":
                                    return new Promise(function (resolve, reject) {
                                        self.onLoaded = function (error) {
                                            self.state = error ? "ERROR" : "LOADED";
                                            error ? reject(error) : resolve();
                                        };
                                    });
                            }
                        },
                    },
                    {
                        key: "loadLibByUrl",
                        value: function (url) {
                            return new Promise(function (resolve, reject) {
                                const script = document.createElement("script");
                                script.src = url;
                                script.async = true;
                                script.onload = function () {
                                    console.info("Loaded library: ".concat(url));
                                    resolve(url);
                                };
                                script.onerror = function (error) {
                                    console.error("Error loading library: ".concat(url, ". Details: ").concat(error));
                                    reject(error);
                                };
                                document.getElementsByTagName("body")[0].appendChild(script);
                            });
                        },
                    },
                    {
                        key: "loadLibs",
                        value: function () {
                            return Promise.all(this.urls.map(this.loadLibByUrl));
                        },
                    },
                ]);

                Object.defineProperty(LibraryLoaderClass, "prototype", { writable: false });
                return LibraryLoaderClass;
            })();

            // ===================================================================
            // Custom Error for Engine Crashes
            // ===================================================================
            class EngineError extends Error {
                constructor(message) {
                    super(message);
                    this.type = "CRASHED";
                }

                toString() {
                    return this.message;
                }
            }

            // ===================================================================
            // State Machine Transitions
            // ===================================================================
            const SETUP_COMPLETED_TRANSITION = {
                where: function (event) {
                    return ["SETUP_COMPLETED" === event.type];
                },
                to: "SETUP_COMPLETED",
            };

            const CRASHED_TRANSITION = {
                where: function (event) {
                    return ["CRASHED" === event.type];
                },
                to: "CRASHED",
            };

            const STATE_TRANSITIONS = {
                IDLE: [
                    {
                        where: function (event) {
                            return ["SETUP" === event.type];
                        },
                        to: "SETUP",
                    },
                    CRASHED_TRANSITION,
                ],
                SETUP: [SETUP_COMPLETED_TRANSITION, CRASHED_TRANSITION],
                SETUP_COMPLETED: [
                    {
                        where: function (event) {
                            return ["INIT" === event.type];
                        },
                        to: "INIT",
                    },
                    CRASHED_TRANSITION,
                ],
                INIT: [
                    {
                        where: function (event) {
                            return ["INIT_COMPLETED" === event.type];
                        },
                        to: "INIT_COMPLETED",
                    },
                    CRASHED_TRANSITION,
                ],
                INIT_COMPLETED: [CRASHED_TRANSITION],
                CRASHED: [SETUP_COMPLETED_TRANSITION],
            };

            // ===================================================================
            // Graphite Engine - Main engine class
            // ===================================================================
            class GraphiteEngine extends StateMachine.Z {
                constructor() {
                    super("IDLE", STATE_TRANSITIONS);

                    this.graphiteResolver = new GraphiteResolver.Z();
                    this.errorState = null;
                    this.name = "Graphite.Engine";
                    this.comment = "";
                    this.dependencies = [];
                    this.events = [
                        "GraphiteEngine:beforeGraphiteLoad",
                        "GraphiteEngine:afterGraphiteLoad",
                        "GraphiteEngine:beforeGraphiteInit",
                        "GraphiteEngine:afterGraphiteInit",
                        "GraphiteEngine:createdScene2D",
                        "GraphiteEngine:createdScene3D",
                        "GraphiteEngine:removedMaterial2d",
                        "GraphiteEngine:removedMaterial3d",
                    ];

                    // Bind event handlers
                    this.gotoSetup = this.gotoSetup.bind(this);
                    this.on("SETUP", this.gotoSetup);

                    this.gotoInit = this.gotoInit.bind(this);
                    this.on("INIT", this.gotoInit);
                }

                get metaInfo() {
                    return this;
                }

                dispatch(event) {
                    return super.dispatch(event);
                }

                async setup(core) {
                    await this.gotoCompleteStep({ type: "SETUP", core: core }, "SETUP_COMPLETED");
                }

                async init() {
                    await this.gotoCompleteStep({ type: "INIT" }, "INIT_COMPLETED");
                    return this.viewControl;
                }

                resolveGraphite() {
                    const self = this;
                    return new Promise(function (resolve, reject) {
                        self.graphiteResolver
                            .on("COMPLETED", function (event) {
                                resolve(event.payload.graphiteResolver);
                            })
                            .on("CRASHED", function (error) {
                                reject(error);
                            })
                            .init(self.viewControl.canvas);
                    });
                }

                nextTick() {
                    return new Promise(function (resolve) {
                        setTimeout(resolve, 0);
                    });
                }

                async doSetup(core) {
                    return Promise.resolve();
                }

                async doInit() {
                    // Load external libraries
                    await new LibraryLoader().load();

                    // Create hidden container div
                    const container = document.createElement("div");
                    container.style.display = "none";
                    document.body.appendChild(container);

                    // Create view control with transparent background
                    this.viewControl = new ViewControl(container, "transparent");

                    // Initialize Graphite resolver
                    await this.resolveGraphite();
                }

                async gotoSetup(event) {
                    await this.nextTick();
                    try {
                        await this.doSetup(event.core);
                        this.dispatch({ type: "SETUP_COMPLETED" });
                    } catch (error) {
                        this.dispatch(new EngineError(error.message));
                    }
                }

                async gotoInit() {
                    await this.nextTick();
                    try {
                        await this.doInit();
                        this.dispatch({ type: "INIT_COMPLETED" });
                    } catch (error) {
                        this.dispatch(new EngineError(error.message));
                    }
                }

                gotoCompleteStep(event, targetState) {
                    const self = this;
                    return new Promise(function (resolve, reject) {
                        if (self.dispatch(event) || self.state === event.type) {
                            self.on(targetState, function () {
                                resolve();
                            });
                            self.on("CRASHED", function (error) {
                                self.errorState = error;
                                reject(self.errorState);
                            });
                        } else if (self.state === "CRASHED") {
                            reject(self.errorState);
                        } else {
                            resolve();
                        }
                    });
                }
            }

            // ===================================================================
            // View Control - Manages rendering canvas (simplified)
            // ===================================================================
            class ViewControl extends EventEmitter.Z {
                constructor(canvas, backgroundColor) {
                    super(canvas);
                    this._renderMode = RenderMode.Z.Render2D;
                    this.lastId = 0;
                    this.renderer = null;
                    this.pcbLoader = new PCBLoader.Z();
                    this.onRendererChange = this.onRendererChange.bind(this);
                    this.onRendererFocus = this.onRendererFocus.bind(this);
                }

                async loadData(document, config, renderer) {
                    // Assign unique ID if not present
                    if (!document.id) {
                        this.lastId++;
                        document.id = "graphite_document_".concat(this.lastId);
                    }

                    // Skip if same document
                    if (document.id === this.currentDocumentId) {
                        return;
                    }

                    const self = this;
                    return new Promise(function (resolve, reject) {
                        // Clean up previous renderer
                        if (self.renderer) {
                            self.renderer.disable();
                            self.renderer.off("change", self.onRendererChange);
                            self.renderer.off("focus", self.onRendererFocus);
                            self.renderer = null;
                        }

                        const afterLoadCallback = function (data) {
                            try {
                                self.renderer = renderer;
                                self.renderer.on("change", self.onRendererChange);
                                self.renderer.on("focus", self.onRendererFocus);
                                self.renderer.enable(data, self.canvas);
                                self.canvas.focus();
                                self.invalidate();
                                window.__CORE__.bus.emit("GerberComparisonEngine:afterImportPCB", document);
                                resolve();
                            } catch (error) {
                                reject(error);
                            }
                        };

                        self.pcbLoader.on("afterLoad", afterLoadCallback);
                        try {
                            self.pcbLoader.load(document.renderData, config);
                        } finally {
                            self.pcbLoader.off("afterLoad", afterLoadCallback);
                        }
                    });
                }

                get renderMode() {
                    return this._renderMode;
                }

                set renderMode(mode) {
                    this._renderMode = mode;
                }

                get width() {
                    return this.canvas?.width ?? 0;
                }

                get height() {
                    return this.canvas?.height ?? 0;
                }

                onResize() {
                    if (document.body.clientWidth === 0 || document.body.clientHeight === 0) {
                        return;
                    }

                    this.canvas.hidden = true;
                    try {
                        const container = document.getElementById(this.containerId) ?? document.body;
                        this.canvas.width = container.clientWidth;
                        this.canvas.height = container.clientHeight;
                    } finally {
                        this.canvas.hidden = false;
                    }

                    this.renderer?.updateClientRectangle(this.width, this.height);
                    this.invalidate();
                    this.emit("resized");
                }

                onPaint() {
                    this.renderer?.render();
                }

                initEvents() {
                    // Override in subclass if needed
                }

                onRendererChange() {
                    this.invalidate();
                }

                onRendererFocus() {
                    this.canvas.focus();
                }

                initControl(parentElement) {
                    const self = this;
                    let container, containerId;

                    // Handle both HTMLDivElement and string ID
                    if (parentElement instanceof HTMLDivElement) {
                        container = parentElement;
                        containerId = "aov365_graphite";
                    } else {
                        container = document.getElementById(parentElement);
                        containerId = parentElement;
                    }

                    if (!container) {
                        throw new Error("Parent with id ".concat(containerId, " did not found at DOM."));
                    }

                    // Create container structure
                    const containerDiv = document.createElement("div");
                    this.containerId = containerId + "_document_viewer";
                    containerDiv.id = this.containerId;
                    containerDiv.style.width = "100%";
                    containerDiv.style.height = "100%";
                    containerDiv.style.position = "relative";

                    // Setup canvas
                    const canvas = this.canvas;
                    canvas.id = containerId + "_graphic_document_viewer_canvas";
                    canvas.tabIndex = 0;
                    canvas.oncontextmenu = () => false; // Disable context menu
                    canvas.style.opacity = "1";
                    containerDiv.appendChild(canvas);

                    const appendedContainer = container.appendChild(containerDiv);

                    // Setup resize observer or fallback
                    if (window.ResizeObserver) {
                        new ResizeObserver(() => {
                            window.requestAnimationFrame(() => self.onResize());
                        }).observe(appendedContainer);
                    } else {
                        window.addEventListener("resize", () => self.onResize());
                    }
                }
            }

            // ===================================================================
            // Module Registration
            // ===================================================================
            const GraphiteEngineModule = {
                type: "Engine",
                name: "GraphiteEngineModule",
                description: "Presents Graphite engine module",
                create: function () {
                    return new GraphiteEngine();
                },
            };

            window.__CORE__.addModule(GraphiteEngineModule);
        },
    },
    (webpackRequire) => {
        webpackRequire.O(0, [21759], () => webpackRequire(webpackRequire.s = 31055));
        webpackRequire.O();
    },
]);