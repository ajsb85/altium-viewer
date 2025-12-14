/**
 * BoardItemsVisibility - Plugin Module
 * Main plugin class that interfaces with the Altium viewer system
 */
"use strict";

(function (BoardItemsVisibility) {
    var ti = window.__CORE__,
        ii = window.__APP__,
        ni = ii.analytics,
        ri = ii.library.i18n.t;

    // Public API Emitter class
    function PublicApiEmitter(core) {
        this.core = core;
    }

    PublicApiEmitter.prototype = {
        paused: function (val) {
            this.core && this.core.bus && this.core.bus.emit("BoardItemsVisibility:paused", val);
        },
        enabled: function () {
            this.core && this.core.bus && this.core.bus.emit("BoardItemsVisibility:enabled");
        },
        disabled: function () {
            this.core && this.core.bus && this.core.bus.emit("BoardItemsVisibility:disabled");
        },
        activated: function () {
            this.core && this.core.bus && this.core.bus.emit("BoardItemsVisibility:activated");
        },
        deactivated: function () {
            this.core && this.core.bus && this.core.bus.emit("BoardItemsVisibility:deactivated");
        },
        activateRequested: {
            on: function (cb) {
                ti.bus && ti.bus.on("BoardItemsVisibility:activateRequested", cb);
            }
        },
        deactivateRequested: {
            on: function (cb) {
                ti.bus && ti.bus.on("BoardItemsVisibility:deactivateRequested", cb);
            }
        }
    };

    // PCB View Observer class  
    function PCBViewObserver(core) {
        this.core = core;
    }

    PCBViewObserver.prototype.setup = function () {
        // Setup PCB view observation
    };

    // Object type definitions
    var kt = ri;
    var objectTypes = {
        Arc: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.arc"),
            icon: "icon-arcs",
        },
        Pad: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.pads"),
            icon: "icon-pads",
        },
        Via: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.vias"),
            icon: "icon-vias",
        },
        Track: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.tracks"),
            icon: "icon-tracks",
        },
        Poly: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.poly"),
            icon: "icon-polygons",
        },
        Region: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.region"),
            icon: "icon-regions",
        },
        Fill: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.fill"),
            icon: "icon-fills",
        },
        Text: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.text"),
            icon: "icon-texts",
        },
        Dimension: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.dimension"),
            icon: "icon-dimension",
        },
        Coordinate: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.coordinate"),
            icon: "icon-coordinates",
        },
        Rule: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.rule"),
            icon: "icon-rooms",
        },
        ComponentBody: {
            name: kt("viewer.plugins.BoardItemsVisibility.objectsData.componentBody"),
            icon: "icon-3d-body",
        },
    };

    // Special object types
    var keepoutsObj = {
        id: "keepouts",
        name: ri("viewer.plugins.BoardItemsVisibility.objectsData.keepouts"),
        icon: "icon-keepouts",
        isVisible: true,
        isOnly2d: true,
    };

    var connectionLinesObj = {
        id: "unrotedNet",
        name: ri("viewer.plugins.BoardItemsVisibility.objectsData.connectionLines"),
        icon: "icon-connection-lines",
        isVisible: true,
        isOnly2d: true,
    };

    // Tab views generator
    function getTabViews(activeType) {
        activeType = activeType || "";
        var t = [
            {
                id: "layers",
                name: ri("viewer.plugins.BoardItemsVisibility.layers"),
                isActive: false,
            },
            {
                id: "objects",
                name: ri("viewer.plugins.BoardItemsVisibility.objects"),
                isActive: false,
            },
        ];
        var i = t.find(function (item) {
            return item.id === activeType;
        });
        return i ? [i] : t;
    }

    // Plugin metadata
    var pluginMetaInfo = {
        name: "BoardItemsVisibility",
        displayName: ri("viewer.plugins.BoardItemsVisibility.displayName"),
        displayIcon: "layers-v2-16",
        comment: "Board Items Visibility",
        description: "Board Items Visibility",
        dependencies: [],
        order: 1,
        owner: "PCBView,PCBView3D,FabricationView",
        hint: ri("viewer.plugins.BoardItemsVisibility.hint"),
        view: {
            type: "modal",
            title: ri("viewer.plugins.BoardItemsVisibility.displayNameObjects"),
            config: {
                type: "aside-left",
                hasCustomHeader: true,
                hasCloseButton: true,
                hasCloseOnOutsideClick: false,
            },
        },
    };

    // Plugin events
    var gt = "layerManagerInit";
    var pluginEvents = [
        "BoardItemsVisibility:change",
        "BoardItemsVisibility:reset",
        "BoardItemsVisibility:viewChange",
        "BoardItemsVisibility:onOnly",
        "BoardItemsVisibility:offOnly",
        "BoardItemsVisibility:layerOn",
        "BoardItemsVisibility:" + gt,
        "BoardItemsVisibility:getLayersIds",
        "BoardItemsVisibility:setLayerRecoveryData",
    ];

    // Export plugin utilities
    BoardItemsVisibility.PublicApiEmitter = PublicApiEmitter;
    BoardItemsVisibility.PCBViewObserver = PCBViewObserver;
    BoardItemsVisibility.objectTypes = objectTypes;
    BoardItemsVisibility.keepoutsObj = keepoutsObj;
    BoardItemsVisibility.connectionLinesObj = connectionLinesObj;
    BoardItemsVisibility.getTabViews = getTabViews;
    BoardItemsVisibility.pluginMetaInfo = pluginMetaInfo;
    BoardItemsVisibility.pluginEvents = pluginEvents;
    BoardItemsVisibility.layerManagerInitEvent = gt;

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
