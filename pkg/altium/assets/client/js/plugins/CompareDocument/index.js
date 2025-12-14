/**
 * CompareDocument Plugin - Entry Point
 * 
 * Plugin for comparing document differences (components, nets).
 */
"use strict";

(function (CompareDocument) {

    CompareDocument.version = "1.0.0";
    CompareDocument.name = "CompareDocument";

    // Difference types (line 9)
    CompareDocument.differenceKind = {
        added: 1,
        updated: 2,
        removed: 3,
    };

    // Display labels (line 10)
    CompareDocument.differenceLabel = {
        1: "added",
        2: "modified",
        3: "deleted",
    };

    // Vuex store (lines 92-366)
    CompareDocument.storeConfig = {
        state: ["data", "differencesCount", "search", "isOpenedFilters", "filters"],
        getters: ["activeFilter", "getItemById", "filteredData"],
        mutations: ["setSearch", "setFilters", "openFilters", "closeFilters", "setData", "switchItemExpand", "setSelectedItem", "setDifferencesCount"],
    };

    // Filter types
    CompareDocument.filters = [
        { id: 1, name: "All" },
        { id: 2, name: "Component" },
        { id: 3, name: "Net" },
    ];

    CompareDocument.modules = [];

    CompareDocument.isReady = function () {
        return true;
    };

    CompareDocument.init = function () {
        console.log("[CompareDocument] Plugin initialized");
    };

})(window.CompareDocument = window.CompareDocument || {});
