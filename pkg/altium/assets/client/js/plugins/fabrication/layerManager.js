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
