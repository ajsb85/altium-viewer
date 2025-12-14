/**
 * Search Plugin - Store Module
 * Vuex store for managing search state, filters, and results
 */
"use strict";

(function (Search) {
    var i = { net: 1, component: 2, all: 3 };

    // Spread helper function
    function spread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] || {};
            Object.keys(r).forEach(function (k) { e[k] = r[k]; });
        }
        return e;
    }

    var f = window.__APP__.library.Vuex.createStore,
        p = window.__APP__.library.i18n.t;

    var store = f({
        state: {
            value: "",
            resultLimit: 5,
            isOpenedFilters: false,
            filters: [
                {
                    id: i.all,
                    name: p("viewer.plugins.Search.filterTypes.all"),
                    isActive: true,
                },
                {
                    id: i.component,
                    name: p("viewer.plugins.Search.filterTypes.component"),
                },
                { id: i.net, name: p("viewer.plugins.Search.filterTypes.net") },
            ],
            recentSearch: [],
            result: [],
        },
        getters: {
            activeFilter: function (e) {
                if (e.isOpenedFilters) {
                    return e.filters ? e.filters.find(function (f) {
                        return f.isActive;
                    }) : undefined;
                }
                return e.filters[0];
            },
            result: function (e) {
                var t = e.resultLimit;
                return e.result.reduce(
                    function (acc, r) {
                        var n = r.items;
                        if (n && n.length) {
                            acc.length += n.length;
                            acc.limitedLength +=
                                null !== t && isFinite(t)
                                    ? n.slice(0, 5).length
                                    : n.length;
                            acc.sections.push(spread(spread({}, r), {}, { items: n }));
                        }
                        return acc;
                    },
                    { length: 0, limitedLength: 0, sections: [] }
                );
            },
        },
        mutations: {
            setValue: function (e, t) {
                e.value = t;
            },
            resetValue: function (e) {
                e.value = "";
            },
            setFilters: function (e, t) {
                e.filters = t;
            },
            resetFilters: function (e) {
                e.filters = e.filters.map(function (f, idx) {
                    return spread(spread({}, f), {}, { isActive: idx === 0 });
                });
            },
            openFilters: function (e) {
                e.isOpenedFilters = true;
            },
            closeFilters: function (e) {
                e.isOpenedFilters = false;
            },
            setResult: function (e, t) {
                e.result = t.map(function (r) {
                    return spread(spread({}, r), {}, { clientId: Math.random().toString(36).substr(2, 9) });
                });
            },
            setRecentSearch: function (e, t) {
                e.recentSearch = t;
            },
            resetLimit: function (e) {
                e.resultLimit = 5;
            },
            removeLimit: function (e) {
                e.resultLimit = null;
            },
        },
    });

    // Store action helper
    var setValue = function (e) {
        return store.commit("setValue", e);
    };

    // Export to namespace
    Search.store = store;
    Search.setValue = setValue;
    Search.filterTypes = i;

})(window.Search = window.Search || {});
