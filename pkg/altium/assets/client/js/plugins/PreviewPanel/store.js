/**
 * PreviewPanel Plugin - Store Module
 * Vuex store for managing preview items (document thumbnails)
 */
"use strict";

(function (PreviewPanel) {

    // Spread/deep copy helper
    function spread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] || {};
            Object.keys(n).forEach(function (k) { e[k] = n[k]; });
        }
        return e;
    }

    // Array from iterable helper  
    function toArray(e) {
        if (Array.isArray(e)) return e.slice();
        if (e && e[Symbol.iterator]) return Array.from(e);
        return [];
    }

    var p = window.__APP__.library.Vuex.createStore;

    var store = p({
        state: { items: [] },
        mutations: {
            setItems: function (e, t) {
                var n =
                    window.__CORE__ &&
                        window.__CORE__.response &&
                        window.__CORE__.response.metadata
                        ? window.__CORE__.response.metadata.projectTypeName
                        : undefined;
                var isEagle = n && "eagle" === n.toLowerCase();

                if (Array.isArray(t)) {
                    if (isEagle) {
                        // Eagle format: parse sheet numbers from filenames
                        if (t.length <= 1) {
                            e.items = t;
                        } else {
                            e.items = t.map(function (item) {
                                var num = +item.text
                                    .split(".")
                                    .slice(0, -1)
                                    .join(".")
                                    .split("_")
                                    .pop();
                                return spread(spread({}, item), {}, {
                                    text: isNaN(num) ? item.text : "Sheet ".concat(num + 1),
                                });
                            });
                        }
                    } else {
                        e.items = t;
                    }
                } else {
                    e.items = [];
                }
            },
        },
        getters: {
            items: function (e) {
                // Sort modified items (with no preview) to end
                var hasNoImg = e.items.some(function (item) { return !item.img; });
                var hasModKind = e.items.some(function (item) { return item.modificationKind; });

                if (hasNoImg && hasModKind) {
                    return [].concat(
                        toArray(e.items.filter(function (item) { return item.img; })),
                        toArray(e.items.filter(function (item) { return !item.img; }))
                    );
                }
                return e.items;
            },
        },
    });

    // Helper to format document name
    var formatDocName = function (text) {
        if (text.split(".").length <= 1 || text.endsWith(")")) return text;
        var t = text.split(".").slice(0, -1).join(".");
        var n = t.split("_");
        return parseInt(n[0]) ? "[".concat(n[0], "] ").concat(n.join("_")) : t;
    };

    // Export to namespace
    PreviewPanel.store = store;
    PreviewPanel.formatDocName = formatDocName;

})(window.PreviewPanel = window.PreviewPanel || {});
