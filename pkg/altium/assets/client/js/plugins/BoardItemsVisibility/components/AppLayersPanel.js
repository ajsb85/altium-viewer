/**
 * BoardItemsVisibility - AppLayersPanel Component
 * Main panel component that combines tabs, board control, and dynamic panels
 */
"use strict";

(function (BoardItemsVisibility) {
    var Vue = window.Vue || require("vue");
    var n = Vue;
    var spread = BoardItemsVisibility.utils ? BoardItemsVisibility.utils.spread : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t] || {};
            Object.keys(i).forEach(function (k) { e[k] = i[k]; });
        }
        return e;
    };

    var ct = window.__APP__.library.Vuex,
        lt = ct.mapState,
        ut = ct.mapGetters,
        pt = window.__CORE__;

    var bt = { layers: "LayersPanel", objects: "ObjectsPanel" };
    var v = ["id"];

    const AppBoardItemsVisibilityDef = {
        name: "AppBoardItemsVisibility",
        components: {
            // LayersPanel, ObjectsPanel, TabPanel, BoardControl will be injected at runtime
        },
        props: { id: String },
        computed: spread(
            spread(spread({}, lt(["activeTabView"])), ut(["isPCBView3D"])),
            {},
            {
                activeComponent: function () {
                    return bt[this.activeTabView];
                },
            }
        ),
        methods: {
            resetData: function () {
                if (this.$refs.component) {
                    this.$refs.component.reset();
                }
            },
            changeView: function (e) {
                if (this.isPCBView3D) {
                    pt.bus.emit("PCBView3D:flipBoard", e);
                } else {
                    pt.bus.emit("BoardItemsVisibility:viewChange", e);
                }
            },
        },
    };

    // Render function
    function render(e, t, i, r, o, a) {
        var s = n.resolveComponent("TabPanel"),
            c = n.resolveComponent("BoardControl");
        return (
            n.openBlock(),
            n.createElementBlock(
                "div",
                { id: i.id, class: "board-visibility" },
                [
                    n.createVNode(s, { onReset: a.resetData }, null, 8, ["onReset"]),
                    n.createVNode(
                        c,
                        { onViewChange: a.changeView },
                        null,
                        8,
                        ["onViewChange"]
                    ),
                    (n.openBlock(),
                        n.createBlock(
                            n.resolveDynamicComponent(a.activeComponent),
                            { ref: "component" },
                            null,
                            512
                        )),
                ],
                8,
                v
            )
        );
    }

    // Export component
    BoardItemsVisibility.AppBoardItemsVisibilityDef = AppBoardItemsVisibilityDef;
    BoardItemsVisibility.AppBoardItemsVisibilityRender = render;
    BoardItemsVisibility.panelComponentMap = bt;

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
