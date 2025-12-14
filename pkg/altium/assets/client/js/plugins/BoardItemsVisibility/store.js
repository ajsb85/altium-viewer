/**
 * BoardItemsVisibility - Store Module
 * Vuex store for managing layer and object visibility state
 */
"use strict";

(function (BoardItemsVisibility) {
    var r = { 1: "top", 2: "bottom" };

    // Spread helper function
    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            var keys = Object.keys(i);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(i);
                n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                });
                keys.push.apply(keys, n);
            }
            keys.forEach(function (t) {
                if (t in e) {
                    Object.defineProperty(e, t, {
                        value: i[t],
                        enumerable: true,
                        configurable: true,
                        writable: true,
                    });
                } else {
                    e[t] = i[t];
                }
            });
        }
        return e;
    }

    var l = window.__APP__.library.Vuex.createStore,
        u = window.__APP__.library.i18n.t;

    var store = l({
        state: {
            layers: [],
            objects: [],
            groupAllObjects: {
                id: "all",
                name: u("viewer.plugins.BoardItemsVisibility.groupAllObjects"),
                isVisible: true,
                visibleOnly: null,
            },
            prevLayersData: null,
            prevObjectData: null,
            layersViews: [
                {
                    id: 1,
                    name: u("viewer.plugins.BoardItemsVisibility.layersViews.top"),
                    isActive: false,
                },
                {
                    id: 2,
                    name: u("viewer.plugins.BoardItemsVisibility.layersViews.bottom"),
                    isActive: false,
                },
            ],
            tabViews: [],
            activeTabView: "",
            activeLayersView: "top",
            activeView: null,
            activeViewId: null,
            hasLayerStack: false,
            layerStackBadge: null,
            resetData: { layers: false, objects: false },
        },
        mutations: {
            setLayers: function (e, t) {
                e.layers = Array.isArray(t) ? t : [];
            },
            setObjects: function (e, t) {
                e.objects = Array.isArray(t) ? t : [];
            },
            setPrevLayersData: function (e, t) {
                e.prevLayersData = JSON.stringify(Array.isArray(t) ? t : []);
            },
            setPrevObjectData: function (e, t) {
                e.prevObjectData = JSON.stringify(Array.isArray(t) ? t : []);
            },
            setActiveView: function (e, t) {
                e.activeView = t;
            },
            setActiveViewId: function (e, t) {
                e.activeViewId = t;
            },
            setActiveLayersView: function (e, t) {
                e.activeLayersView = t;
            },
            setActiveTabView: function (e, t) {
                e.activeTabView = t;
            },
            sethasLayerStack: function (e, t) {
                e.hasLayerStack = t;
            },
            setLayerStackBadge: function (e, t) {
                e.layerStackBadge = t;
            },
            setResetData: function (e, t) {
                e.resetData[t.key] = t.val;
            },
            setTabViews: function (e, t) {
                e.tabViews = t;
                e.activeTabView = t[0].id;
            },
            setGroupAllObjectsVisible: function (e, t) {
                e.groupAllObjects.isVisible = t;
            },
            setGroupAllObjectsVisibleOnly: function (e, t) {
                e.groupAllObjects.visibleOnly = t;
            },
        },
        getters: {
            getTabsViews: function (e) {
                return e.tabViews.map(function (t) {
                    return s(s({}, t), {}, { isActive: t.id === e.activeTabView });
                });
            },
            getLayersViews: function (e) {
                return e.layersViews.map(function (t) {
                    return s(s({}, t), {}, {
                        isActive:
                            r[t.id] === e.activeLayersView &&
                            "PCBView3D" !== e.activeViewId,
                    });
                });
            },
            isLayersPanel: function (e) {
                return "layers" === e.activeTabView;
            },
            isObjectsPanel: function (e) {
                return "objects" === e.activeTabView;
            },
            isPCBView3D: function (e) {
                return "PCBView3D" === e.activeViewId;
            },
            getIsResetData: function (e) {
                return e.resetData[e.activeTabView];
            },
        },
    });

    // Store action helpers
    var setPrevLayersData = function (e) {
        return store.commit("setPrevLayersData", e);
    };
    var setActiveLayersView = function (e) {
        return store.commit("setActiveLayersView", e);
    };
    var sethasLayerStack = function (e) {
        return store.commit("sethasLayerStack", e);
    };
    var setLayerStackBadge = function (e) {
        return store.commit("setLayerStackBadge", e);
    };

    // Export to namespace
    BoardItemsVisibility.store = store;
    BoardItemsVisibility.setPrevLayersData = setPrevLayersData;
    BoardItemsVisibility.setActiveLayersView = setActiveLayersView;
    BoardItemsVisibility.sethasLayerStack = sethasLayerStack;
    BoardItemsVisibility.setLayerStackBadge = setLayerStackBadge;
    BoardItemsVisibility.viewTypeMap = r;

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
