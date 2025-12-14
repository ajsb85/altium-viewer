/**
 * Download Plugin - Store Module
 * Vuex store for managing download states (3D, original, outputs)
 */
"use strict";

(function (Download) {

    // Spread helper
    function spread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] || {};
            Object.keys(n).forEach(function (k) { e[k] = n[k]; });
        }
        return e;
    }

    var p = window.__APP__.library.Vuex.createStore;

    var store = p({
        state: {
            threeD: null,
            originalFile: null,
            outputs: null,
            outputError: "",
        },
        mutations: {
            setData: function (state, data) {
                state.outputs = data.outputs || null;
                state.originalFile = data.originalFile || null;
                state.threeD = data.threeD || null;
            },
            setOutputError: function (state, error) {
                state.outputError = error || "";
            },
            updateOutputs: function (state, update) {
                state.outputs = state.outputs.map(function (item) {
                    return item.id === update.id
                        ? spread(spread({}, item), {}, { isActive: update.isActive })
                        : item;
                });
            },
            updateThreeD: function (state, isActive) {
                state.threeD = spread(spread({}, state.threeD), {}, { isActive: isActive });
            },
            updateOriginal: function (state, isActive) {
                state.originalFile = spread(spread({}, state.originalFile), {}, { isActive: isActive });
            },
        },
    });

    // Export to namespace
    Download.store = store;

})(window.Download = window.Download || {});
