/**
 * BoardItemsVisibility - AppLayersFooter Component
 * Footer component showing keyboard hints for layer navigation
 */
"use strict";

(function (BoardItemsVisibility) {
    var Vue = window.Vue || require("vue");
    var n = Vue;

    // Get AfsText component from vendors
    var AfsText = window.__APP__.components && window.__APP__.components.AfsText;

    var g = { class: "app-layers-panel__footer" };
    var V = window.__APP__.library.i18n.t;

    const AppLayersFooterDef = {
        name: "AppLayersFooter",
        components: { AfsText: AfsText },
        data: function () {
            return { t: V };
        },
    };

    // Render function
    function render(e, t, i, r, o, a) {
        var s = n.resolveComponent("AfsText");
        return (
            n.openBlock(),
            n.createElementBlock("div", g, [
                n.createVNode(
                    s,
                    { class: "app-layers-panel__footer-title" },
                    {
                        default: n.withCtx(function () {
                            return [
                                n.createTextVNode(
                                    n.toDisplayString(
                                        o.t("viewer.plugins.BoardItemsVisibility.nextPrevLayer")
                                    ),
                                    1
                                ),
                            ];
                        }),
                        _: 1,
                    }
                ),
                n.createVNode(s, null, {
                    default: n.withCtx(function () {
                        return [
                            n.createTextVNode(
                                n.toDisplayString(
                                    o.t("viewer.plugins.BoardItemsVisibility.keyHint")
                                ),
                                1
                            ),
                        ];
                    }),
                    _: 1,
                }),
            ])
        );
    }

    // Export component
    BoardItemsVisibility.AppLayersFooterDef = AppLayersFooterDef;
    BoardItemsVisibility.AppLayersFooterRender = render;

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
