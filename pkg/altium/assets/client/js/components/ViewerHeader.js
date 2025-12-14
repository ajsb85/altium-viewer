/**
 * ViewerHeader.js - Header and Tab Components
 * 
 * Contains header, tabs, and header plugin components.
 * 
 * Requires: Vue (global), ViewerCore (global)
 */
var ViewerHeader = (function (exports) {
    'use strict';

    // ============================================================================
    // APP MAIN TABS
    // ============================================================================

    var AppMainTabs = {
        name: "AppMainTabs",
        props: {
            items: {
                type: Array,
                default: function () { return []; },
                validator: function (arr) {
                    return !arr.length || arr.every(function (e) { return e.text !== undefined && e.id !== undefined; });
                }
            }
        },
        data: function () { return { isMenuOpened: false, hintText: null }; },
        computed: {
            hasTabs: function () { return this.items.length; },
            menuId: function () { return "app-main-tabs__menu"; },
            reducedItems: function () {
                return this.items.reduce(function (acc, item) {
                    if (!item.hidden) {
                        if (item.isActive) acc.active = item;
                        else acc.nonActive.push(item);
                        acc.mapped[item.id] = item;
                    }
                    return acc;
                }, { active: {}, nonActive: [], mapped: {} });
            },
            isWip: function () { return false; }
        },
        methods: {
            onClick: function (item) {
                this.$emit("change", item);
                if (this.$refs[this.menuId]) this.$refs[this.menuId].close();
            },
            toggleIsOpened: function () { this.isMenuOpened = !this.isMenuOpened; },
            onHintOpen: function (item) {
                var s = this;
                return function () { s.hintText = s.reducedItems.mapped[item.id].hint; };
            },
            onHintClose: function () {
                var s = this;
                return function () { s.hintText = null; };
            }
        }
    };

    // ============================================================================
    // APP HEADER
    // ============================================================================

    var AppHeader = {
        name: "AppHeader",
        props: {
            tabs: { type: Array, default: function () { return []; } },
            primaryPlugins: { type: Array, default: function () { return []; } },
            secondaryPlugins: { type: Array, default: function () { return []; } },
            viewPlugins: { type: Array, default: function () { return []; } }
        },
        emits: ["tab-change", "plugin-click"],
        methods: {
            onTabChange: function (tab) { this.$emit("tab-change", tab); },
            onPluginClick: function (plugin) { this.$emit("plugin-click", plugin); }
        }
    };

    // ============================================================================
    // APP HEADER PLUGIN
    // ============================================================================

    var AppHeaderPlugin = {
        name: "AppHeaderPlugin",
        props: {
            items: {
                type: Array,
                default: function () { return []; },
                validator: function (arr) {
                    return !arr.length || arr.every(function (e) { return (e.text !== undefined || e.icon !== undefined) && e.id !== undefined; });
                }
            },
            isGlobal: { type: Boolean, default: false },
            isPrimary: { type: Boolean, default: false }
        },
        emits: ["click"],
        data: function () { return { hintText: null }; },
        computed: {
            filteredItems: function () { return this.items.filter(function (e) { return e.hasButton; }); }
        },
        methods: {
            onClick: function (item) { this.$emit("click", item); },
            hasSlot: function (n) { return !!this.$slots[n]; }
        }
    };

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.AppMainTabs = AppMainTabs;
    exports.AppHeader = AppHeader;
    exports.AppHeaderPlugin = AppHeaderPlugin;

    return exports;
}({}));
