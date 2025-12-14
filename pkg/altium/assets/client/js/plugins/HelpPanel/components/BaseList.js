/**
 * HelpPanel Plugin - BaseList Component
 * Sections list with navigation items
 */
"use strict";

(function (HelpPanel) {
    var spread = function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] || {};
            Object.keys(n).forEach(function (k) { e[k] = n[k]; });
        }
        return e;
    };

    var C = window.__APP__,
        j = C.analytics,
        A = C.library.Vuex,
        x = A.mapMutations,
        V = A.mapGetters;

    const BaseListDef = {
        name: "BaseList",
        components: {
            // AfsIcon, AfsText will be injected
        },
        computed: spread(
            spread({}, V(["sections"])),
            {},
            {
                computedSections: function () {
                    var self = this;
                    return this.sections.map(function (t) {
                        return spread(spread({}, t), {}, {
                            items: t.items.map(function (item) {
                                return spread(spread({}, item), {}, {
                                    class: self.getBEMClass(item.icon),
                                });
                            }),
                        });
                    });
                },
            }
        ),
        methods: spread(
            spread({}, x(["setView"])),
            {},
            {
                getComponentName: function (e) {
                    return e.link ? "a" : "button";
                },
                getAttr: function (e) {
                    return e.link
                        ? { href: e.link, target: "_blank" }
                        : { type: "button" };
                },
                getBEMClass: function (e) {
                    return "list__".concat(e);
                },
                onClick: function (e, t) {
                    j.dispatchPanelsEvent("Help", { action: e.view || e.text });
                    if (!e.link) {
                        t.preventDefault();
                        this.setView(e.view);
                    }
                },
            }
        ),
    };

    // Export component
    HelpPanel.BaseListDef = BaseListDef;

})(window.HelpPanel = window.HelpPanel || {});
