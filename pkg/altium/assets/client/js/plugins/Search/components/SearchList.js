/**
 * Search Plugin - SearchList Component
 * List of search results with keyboard navigation
 */
"use strict";

(function (Search) {
    var i = Search.filterTypes || { net: 1, component: 2, all: 3 };

    var Q = window.__APP__.utils.keyboard,
        W = window.__APP__.analytics;

    // Type to icon mapping
    var typeIcons = {};
    typeIcons[i.component] = "union-12";
    typeIcons[i.net] = "net-12";

    // Type to name mapping
    var typeNames = {};
    typeNames[i.component] = "Component";
    typeNames[i.net] = "Net";

    const SearchListDef = {
        name: "List",
        components: {
            // AfsIcon, AfsContextMenu, AfsText will be injected
        },
        directives: {},
        props: {
            items: {
                type: Array,
                default: function () {
                    return [];
                },
            },
        },
        data: function () {
            return { hintText: null };
        },
        computed: {
            keyboard: function () {
                return new Q([
                    { name: "backward", codes: [37, 38] },
                    { name: "forward", codes: [39, 40] },
                    { name: "enter", codes: [13, 32] },
                ]);
            },
            hintId: function () {
                return Math.random().toString(36).substr(2, 9);
            },
            hintConfig: function () {
                return {
                    type: "hint",
                    id: this.hintId,
                    modifiers: { y: "top", x: "center" },
                    offset: 8,
                };
            },
        },
        watch: {
            keyboard: {
                immediate: true,
                handler: function (e) {
                    if (e) {
                        e.on("backward", this.onBackward);
                        e.on("forward", this.onForward);
                        e.on("enter", this.onEnter);
                    } else {
                        e.off("backward", this.onBackward);
                        e.off("forward", this.onForward);
                        e.off("enter", this.onEnter);
                    }
                },
            },
        },
        methods: {
            onHintOpen: function (e) {
                var self = this;
                return function () {
                    self.hintText = typeNames[e.type];
                };
            },
            onHintClose: function () {
                var self = this;
                return function () {
                    self.hintText = null;
                };
            },
            onClick: function (e) {
                this.$emit("item-click", e);
                var t = typeNames[e.type];
                W.dispatchPanelsEvent("Search", { action: t });
            },
            onPress: function (e, t) {
                this.keyboard.emit(e.keyCode, t, e);
            },
            onEnter: function (e) {
                this.$emit("item-click", this.items[e]);
            },
            onBackward: function (e) {
                this.$emit("backward", e);
            },
            onForward: function (e) {
                this.$emit("forward", e);
            },
            getIconByType: function (e) {
                return typeIcons[e];
            },
        },
    };

    // Export component and mappings
    Search.SearchListDef = SearchListDef;
    Search.typeIcons = typeIcons;
    Search.typeNames = typeNames;

})(window.Search = window.Search || {});
