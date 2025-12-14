/**
 * ComparePanel Plugin - Store Module
 * Vuex store for managing compare panel tree menu
 */
"use strict";

(function (ComparePanel) {
    var p = window.__APP__.library.Vuex.createStore;

    var store = p({
        state: { treeMenu: [] },
        mutations: {
            setTreeMenu: function (state, menu) {
                state.treeMenu = Array.isArray(menu) ? menu : [];
            },
        },
    });

    // Export to namespace
    ComparePanel.store = store;

})(window.ComparePanel = window.ComparePanel || {});
