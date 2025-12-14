/**
 * Select Plugin - Store Module
 * Vuex store for managing selected item and available views
 */
"use strict";

(function (Select) {
    var p = window.__APP__.library.Vuex.createStore;

    var store = p({
        state: { views: [], item: null, enabledViews: [] },
        mutations: {
            setItem: function (e, t) {
                e.item = t;
            },
            setViews: function (e, t) {
                e.views = Array.isArray(t) ? t : [];
            },
            setEnabledViews: function (e, t) {
                e.enabledViews = t;
            },
        },
        getters: {
            getEnabledViews: function (e) {
                return e.views.filter(function (t) {
                    return (
                        !t.hidden &&
                        (e.enabledViews.includes(t.id) || t.showInControls)
                    );
                });
            },
        },
    });

    // Helper functions
    var getItem = function () {
        return store.state.item;
    };
    var setItem = function (e) {
        return store.commit("setItem", e);
    };
    var setEnabledViews = function (e) {
        return store.commit("setEnabledViews", e);
    };

    // Export to namespace
    Select.store = store;
    Select.getItem = getItem;
    Select.setItem = setItem;
    Select.setEnabledViews = setEnabledViews;

})(window.Select = window.Select || {});
