/**
 * Search Plugin - Plugin Module
 * Plugin metadata and initialization logic
 */
"use strict";

(function (Search) {
    var ti = window.__CORE__,
        ii = window.__APP__,
        ri = ii.library.i18n.t;

    // Plugin metadata
    var pluginMetaInfo = {
        name: "Search",
        displayName: ri("viewer.plugins.Search.displayName"),
        displayIcon: "search-thin-16",
        comment: "Search",
        description: "Search components and nets",
        dependencies: [],
        order: 2,
        owner: "PCBView,SCHView",
        hint: ri("viewer.plugins.Search.hint"),
        view: {
            type: "modal",
            title: ri("viewer.plugins.Search.displayName"),
            config: {
                type: "aside-left",
                hasCustomHeader: true,
                hasCloseButton: true,
                hasCloseOnOutsideClick: false,
            },
        },
    };

    // Plugin events
    var pluginEvents = [
        "Search:change",
        "Search:activate",
        "Search:submit",
        "Search:result",
        "Search:clear",
    ];

    // Export plugin utilities
    Search.pluginMetaInfo = pluginMetaInfo;
    Search.pluginEvents = pluginEvents;

})(window.Search = window.Search || {});
