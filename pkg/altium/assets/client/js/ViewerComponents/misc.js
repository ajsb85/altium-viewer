/**
 * ViewerComponents/misc.js
 * 
 * Miscellaneous components: ModalDirective, AppWatermark
 * Extracted from ViewerComponents.js for modularity.
 */
(function(global) {
    'use strict';

    var ViewerComponents = global.ViewerComponents;
    var Factories = ViewerComponents.Factories;

    /**
     * Creates the Modal Directive (M)
     */
    Factories.createModalDirective = function(deps) {
        var ItemRegistry = deps.ItemRegistry; // n(34313)

        return {
            mounted: function (e, t) {
                var n = t.arg,
                    r = t.modifiers;
                if (n) {
                    var i = r.open,
                        o = r.close;
                    ((e.dataset.viewerModalControl = n),
                        e.addEventListener(
                            "click",
                            function (e) {
                                var t = ItemRegistry.getItem(n);
                                t && (i ? t.open() : o ? t.close() : t.toggle());
                            },
                            !1,
                        ));
                }
            },
        };
    };

    /**
     * Creates the AppWatermark component
     */
    Factories.createAppWatermark = function(deps) {
        var Vue = deps.Vue;
        var ViewerComponents = deps.ViewerComponents;

        var Ae = [
            (0, Vue.createStaticVNode)(
                '<svg class="app-watermark__icon" viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>',
                1,
            ),
        ];

        var Component = {
            name: "AppWatermark",
            data: function () {
                return { url: "http://altium.com/viewer" };
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createElementBlock)(
                            "a",
                            { href: e.url, target: "_blank", class: "app-watermark" },
                            Ae,
                            8,
                            ["href"],
                        )
                    );
                },
            ],
        ]);
    };

    console.log('[ViewerComponents/misc] Loaded');

})(typeof window !== 'undefined' ? window : this);
