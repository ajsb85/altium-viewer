/**
 * HelpPanel Plugin - Store Module
 * Vuex store for managing help panel views, controls, and board info
 */
"use strict";

(function (HelpPanel) {
    // View types
    var viewTypes = {
        controls: "controls",
        boardInfo: "boardInfo",
        measurements: "measurements",
        about: "about",
        aboutGerberCompare: "aboutGerberCompare",
        documentation: "documentation",
        pdfMetadata: "pdfMetadata",
    };

    // Control types
    var controlTypes = {
        select: "select",
        zoom: "zoom",
        pan: "pan",
        pan3D: "pan3D",
        rotate3D: "rotate3D",
        reset: "reset",
        layers: "layers",
        horizontalScroll: "horizontalScroll",
        switch2D: "switch2D",
        switch3D: "switch3D",
        flipBoard: "flipBoard",
        foldUnfold: "foldUnfold",
    };

    // Spread helper
    function spread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] || {};
            Object.keys(n).forEach(function (k) { e[k] = n[k]; });
        }
        return e;
    }

    var p = window.__APP__.library.Vuex.createStore,
        d = window.__APP__.library.i18n.t;

    var store = p({
        state: {
            view: null,
            boardInfo: null,
            pdfMetadata: null,
            enabledViews: Object.values(viewTypes),
            enabledControls: Object.values(controlTypes),
            sections: [
                {
                    id: 1,
                    items: [
                        {
                            id: 1,
                            icon: "controls-12",
                            text: d("viewer.plugins.HelpPanel.sections.controls"),
                            view: viewTypes.controls,
                        },
                        {
                            id: 2,
                            icon: "board-info-12",
                            text: d("viewer.plugins.HelpPanel.sections.boardInfo"),
                            view: viewTypes.boardInfo,
                        },
                        {
                            id: 3,
                            icon: "board-info-12",
                            text: d("viewer.plugins.HelpPanel.sections.pdfData"),
                            view: viewTypes.pdfMetadata,
                        },
                    ],
                },
                {
                    id: 2,
                    items: [
                        {
                            id: 1,
                            icon: "help-12",
                            filled: true,
                            text: d("viewer.plugins.HelpPanel.sections.documentation"),
                            link: "https://www.altium.com/documentation/altium-designer/altium-365-viewer",
                            view: viewTypes.documentation,
                        },
                        {
                            id: 2,
                            icon: "info-12",
                            filled: true,
                            text: d("viewer.plugins.HelpPanel.sections.about"),
                            view: viewTypes.about,
                        },
                        {
                            id: 3,
                            icon: "info-12",
                            filled: true,
                            text: d("viewer.plugins.HelpPanel.sections.gerberAbout"),
                            view: viewTypes.aboutGerberCompare,
                        },
                    ],
                },
            ],
            controls: {
                touch: [
                    {
                        id: controlTypes.select,
                        title: d("viewer.plugins.HelpPanel.controls.select"),
                        controls: [
                            { id: 1, text: d("viewer.plugins.HelpPanel.controls.mobile.tap") },
                        ],
                    },
                    {
                        id: controlTypes.zoom,
                        title: d("viewer.plugins.HelpPanel.controls.zoom"),
                        controls: [
                            { id: 1, text: d("viewer.plugins.HelpPanel.controls.mobile.pinch") },
                        ],
                    },
                    {
                        id: controlTypes.pan,
                        title: d("viewer.plugins.HelpPanel.controls.pan"),
                        controls: [
                            { id: 1, text: d("viewer.plugins.HelpPanel.controls.mobile.tap") },
                            { id: 2, text: d("viewer.plugins.HelpPanel.controls.mobile.drag") },
                        ],
                    },
                    {
                        id: controlTypes.pan3D,
                        title: d("viewer.plugins.HelpPanel.controls.pan3d"),
                        controls: [
                            { id: 1, text: d("viewer.plugins.HelpPanel.controls.mobile.doubleTap") },
                            { id: 2, text: d("viewer.plugins.HelpPanel.controls.mobile.drag") },
                        ],
                    },
                ],
                desktop: [
                    {
                        id: controlTypes.select,
                        title: d("viewer.plugins.HelpPanel.controls.select"),
                        isMainSection: true,
                        controls: [
                            { id: 1, text: d("viewer.plugins.HelpPanel.controls.desktop.lmb") },
                        ],
                    },
                    {
                        id: controlTypes.zoom,
                        title: d("viewer.plugins.HelpPanel.controls.zoom"),
                        isMainSection: true,
                        controls: [
                            { id: 1, text: d("viewer.plugins.HelpPanel.controls.desktop.scroll") },
                        ],
                    },
                    {
                        id: controlTypes.pan,
                        title: d("viewer.plugins.HelpPanel.controls.pan"),
                        isMainSection: true,
                        controls: [
                            { id: 1, text: d("viewer.plugins.HelpPanel.controls.desktop.rmb") },
                            { id: 2, text: d("viewer.plugins.HelpPanel.controls.desktop.drag") },
                        ],
                    },
                    {
                        id: controlTypes.rotate3D,
                        title: d("viewer.plugins.HelpPanel.controls.rotate3d"),
                        isMainSection: true,
                        controls: [
                            { id: 1, text: d("viewer.plugins.HelpPanel.controls.desktop.lmb") },
                            { id: 2, text: d("viewer.plugins.HelpPanel.controls.desktop.drag") },
                        ],
                    },
                    {
                        id: controlTypes.reset,
                        title: d("viewer.plugins.HelpPanel.controls.reset"),
                        controls: [{ id: 1, text: "R" }],
                    },
                    {
                        id: controlTypes.switch2D,
                        title: d("viewer.plugins.HelpPanel.controls.switch2d"),
                        controls: [{ id: 1, text: "2" }],
                    },
                    {
                        id: controlTypes.switch3D,
                        title: d("viewer.plugins.HelpPanel.controls.switch3d"),
                        controls: [{ id: 1, text: "3" }],
                    },
                    {
                        id: controlTypes.layers,
                        title: d("viewer.plugins.HelpPanel.controls.nextPrevLayer"),
                        controls: [{ id: 1, text: "+/-" }],
                    },
                    {
                        id: controlTypes.foldUnfold,
                        title: d("viewer.plugins.HelpPanel.controls.fold3d"),
                        meta: "5",
                        controls: [{ id: 1, text: "5" }],
                    },
                    {
                        id: controlTypes.flipBoard,
                        title: d("viewer.plugins.HelpPanel.controls.flip"),
                        controls: [{ id: 1, text: "F" }],
                    },
                    {
                        id: controlTypes.horizontalScroll,
                        title: d("viewer.plugins.HelpPanel.controls.scroll"),
                        controls: [
                            { id: 1, text: "Shift" },
                            { id: 2, text: d("viewer.plugins.HelpPanel.controls.desktop.scroll") },
                        ],
                    },
                ],
            },
            units: [
                {
                    id: 1,
                    name: d("viewer.plugins.HelpPanel.controls.units.mm"),
                    type: 0,
                    isActive: true,
                },
                {
                    id: 2,
                    name: d("viewer.plugins.HelpPanel.controls.units.mil"),
                    type: 1,
                    isActive: false,
                },
            ],
            isUnitsEnabled: false,
        },
        getters: {
            sections: function (e) {
                return e.sections.reduce(function (t, n) {
                    n.items.forEach(function (o) {
                        if (e.enabledViews.includes(o.view)) {
                            var r = t.find(function (e) {
                                return e.id === n.id;
                            });
                            if (r) {
                                r.items.push(o);
                            } else {
                                t.push({ id: n.id, items: [o] });
                            }
                        }
                    });
                    return t;
                }, []);
            },
            controls: function (e) {
                return Object.entries(e.controls).reduce(function (t, n) {
                    var o = n[0],
                        r = n[1];
                    t[o] = r.filter(function (t) {
                        return e.enabledControls.includes(t.id);
                    });
                    return t;
                }, {});
            },
        },
        mutations: {
            setView: function (e, t) {
                e.view = Object.values(viewTypes).includes(t) ? t : null;
            },
            setViews: function (e, t) {
                e.enabledViews =
                    Array.isArray(t) && t.some(function (e) { return viewTypes[e]; })
                        ? t
                        : Object.values(viewTypes);
            },
            setControls: function (e, t) {
                e.enabledControls = Array.isArray(t) ? t : Object.values(controlTypes);
            },
            setBoardInfo: function (e, t) {
                e.boardInfo = t;
            },
            setPdfMetadata: function (e, t) {
                e.pdfMetadata = t;
            },
            setUnits: function (e, t) {
                e.units = t;
            },
            setUnitsEnabled: function (e, t) {
                e.isUnitsEnabled = t;
            },
        },
        actions: {
            setActiveUnit: function (e, t) {
                var n = e.state;
                e.commit(
                    "setUnits",
                    n.units.map(function (unit) {
                        return spread(spread({}, unit), {}, {
                            isActive: t.id === unit.id || t === unit.name,
                        });
                    })
                );
            },
        },
    });

    // Store action helpers
    var setViews = function (e) {
        return store.commit("setViews", e);
    };
    var setControls = function (e) {
        return store.commit("setControls", e);
    };
    var setBoardInfo = function (e) {
        return store.commit("setBoardInfo", e);
    };

    // Export to namespace
    HelpPanel.store = store;
    HelpPanel.setViews = setViews;
    HelpPanel.setControls = setControls;
    HelpPanel.setBoardInfo = setBoardInfo;
    HelpPanel.viewTypes = viewTypes;
    HelpPanel.controlTypes = controlTypes;

})(window.HelpPanel = window.HelpPanel || {});
