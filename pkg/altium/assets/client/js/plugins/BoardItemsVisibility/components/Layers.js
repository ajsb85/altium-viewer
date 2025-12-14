/**
 * BoardItemsVisibility - Layers Component
 * Main layers panel that combines footer and content
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

    var Q = window.__CORE__,
        W = window.__APP__,
        Y = W.analytics,
        ee = W.library.Vuex,
        te = ee.mapState,
        ie = ee.mapMutations;

    var h = { class: "app-layers-panel" };

    const LayersDef = {
        name: "Layers",
        components: {
            // LayersFooter and LayersContent will be injected at runtime
        },
        computed: spread(
            spread({}, te(["layers", "activeView", "prevLayersData"])),
            {},
            {
                hasLayersChanges: function () {
                    return JSON.stringify(this.layers) !== this.prevLayersData;
                },
            }
        ),
        watch: {
            hasLayersChanges: {
                immediate: true,
                handler: function (e) {
                    this.setResetData({ key: "layers", val: e });
                },
            },
        },
        methods: spread(
            spread({}, ie(["setResetData"])),
            {},
            {
                reset: function () {
                    Q.bus.emit("BoardItemsVisibility:reset");
                    Y.dispatchPanelsEvent(
                        "".concat(this.activeView, ".LayerFilter"),
                        { action: "Reset" }
                    );
                },
                setLayersChange: function (e) {
                    Q.bus.emit("BoardItemsVisibility:change", e);
                    Y.dispatchPanelsEvent(
                        "".concat(this.activeView, ".LayerFilter"),
                        { action: "VisibilityChanged" }
                    );
                },
                onOnly: function (e) {
                    Q.bus.emit("BoardItemsVisibility:onOnly", e);
                    Y.dispatchPanelsEvent(
                        "".concat(this.activeView, ".LayerFilter"),
                        { action: "Only" }
                    );
                },
                offOnly: function (e) {
                    Q.bus.emit("BoardItemsVisibility:offOnly", e);
                    Y.dispatchPanelsEvent(
                        "".concat(this.activeView, ".LayerFilter"),
                        { action: "Only" }
                    );
                },
            }
        ),
    };

    // Render function
    function render(e, t, i, r, o, a) {
        var s = n.resolveComponent("LayersContent"),
            c = n.resolveComponent("LayersFooter");
        return (
            n.openBlock(),
            n.createElementBlock("div", h, [
                n.createVNode(
                    s,
                    {
                        "model-value": e.layers,
                        "onUpdate:modelValue": a.setLayersChange,
                        onOnOnly: a.onOnly,
                        onOffOnly: a.offOnly,
                    },
                    null,
                    8,
                    ["model-value", "onUpdate:modelValue", "onOnOnly", "onOffOnly"]
                ),
                n.createVNode(c, { ref: "footer" }, null, 512),
            ])
        );
    }

    // Export component
    BoardItemsVisibility.LayersDef = LayersDef;
    BoardItemsVisibility.LayersRender = render;
    BoardItemsVisibility.LayersPanelClass = h;

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
