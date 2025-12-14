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
