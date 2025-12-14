/**
 * ViewerMisc.js - Miscellaneous Components
 * 
 * Contains watermark, snackbar, tree item, menu, and layout notifier.
 * 
 * Requires: Vue (global), ViewerCore (global)
 */
var ViewerMisc = (function (exports) {
    'use strict';

    var wrapComponent = ViewerCore.wrapComponent;

    // ============================================================================
    // APP WATERMARK
    // ============================================================================

    var AppWatermark = {
        name: "AppWatermark",
        data: function () { return { url: "http://altium.com/viewer" }; }
    };

    function renderAppWatermark(ctx) {
        return (
            Vue.openBlock(),
            Vue.createElementBlock("a", { href: ctx.url, target: "_blank", class: "app-watermark" }, [
                Vue.createElementVNode("span", { class: "app-watermark__image" })
            ], 8, ["href"])
        );
    }

    var WrappedAppWatermark = wrapComponent(AppWatermark, [["render", renderAppWatermark]]);

    // ============================================================================
    // APP SNACKBAR
    // ============================================================================

    var AppSnackbar = {
        name: "AppSnackbar",
        props: { containerId: { type: String, default: "" } },
        data: function () {
            return { icon: "", autoClose: false, text: "Something wrong", hideClose: true, position: "top", zIndex: 15, primary: false, type: "info", iconSprite: "", spriteFilled: false };
        },
        computed: {
            classes: function () {
                var p = this.position;
                return (p && ["top", "bottom"].includes(p)) ? ["app-snackbar__" + p] : ["app-snackbar__top"];
            }
        },
        setup: function () {
            return {
                setData: function (k, v) { this[k] = v; },
                open: function () { this.$refs.appSnackbar.open(); },
                close: function () { this.$refs.appSnackbar.close(); }
            };
        },
        methods: {
            handleClosed: function () { this.restoreDefaults(); },
            restoreDefaults: function () { this.type = "info"; this.zIndex = 2; this.icon = ""; this.primary = false; this.spriteFilled = false; this.iconSprite = ""; }
        }
    };

    // ============================================================================
    // TREE ITEM
    // ============================================================================

    var TreeItem = {
        name: "TreeItem",
        props: {
            item: { type: Object, default: function () { return {}; } },
            level: { type: Number, default: 0 },
            startPadding: { type: [String, Number], default: 32 },
            selectedItem: { type: [String, Number], default: "" }
        },
        data: function () { return { refPrefix: "group-", isOpened: false }; },
        computed: {
            paddingLeft: function () { return (+this.startPadding + 24 * +this.level) + "px"; },
            childrenLevel: function () { return +this.level + 1; },
            isSelected: function () { return this.item.selected || this.item.name === this.selectedItem || this.item.id === this.selectedItem; },
            isIconFilled: function () { return !("iconFilled" in this.item) || this.item.iconFilled; }
        },
        watch: { item: { deep: true, handler: function (v) { v.selected && this.openTree(); } } },
        mounted: function () { this.isSelected && this.openTree(); },
        methods: {
            onItemClick: function (i, e) { if (e) e.target.dispatchEvent(new Event("mouseleave")); this.$emit("item-click", i); },
            onOpenChange: function () {
                var r = this.$refs;
                if (this.isOpened) r && r.container && r.container.close();
                else r && r.container && r.container.open();
                this.isOpened = !this.isOpened;
            },
            openTree: function () { var r = this.$refs; r && r.container && r.container.open(); this.isOpened = true; if (this.level) this.$emit("open-parent"); }
        }
    };

    // ============================================================================
    // APP MENU
    // ============================================================================

    var AppMenu = {
        name: "AppMenu",
        inject: [],
        data: function () { return { selectedItem: "" }; },
        computed: {
            startPadding: function () {
                var i = this.items;
                return (i && i.every(function (e) { return !e.child || e.child.length === 0; })) ? 8 : 32;
            }
        },
        methods: {
            setData: function (k, v) { this[k] = v; },
            open: function (p) { this.$refs.contextMenu.open(document.body, { clientX: p ? p.x : undefined, clientY: p ? p.y : undefined }); },
            close: function () { var r = this.$refs; if (r && r.contextMenu) r.contextMenu.close(); else this.onClose(); },
            onClick: function (i) { this.$root.$emit("item-click", i); },
            onClose: function () { this.$root.$emit("close"); }
        }
    };

    // ============================================================================
    // LAYOUT UPDATE NOTIFIER
    // ============================================================================

    var LayoutUpdateNotifier = (function () {
        function LayoutUpdateNotifier(bus) {
            var s = this;
            this.bus = bus;
            this.windowWidth = 0; this.windowHeight = 0; this.headerHeight = 0; this.sidebarWidth = 0;
            this.updated = false; this.modals = new Map();
            this.logger = window.__CORE__ ? window.__CORE__.createLogger("App:AppLayoutUpdateNotifier") : console;
            this.onWindowResize = function () { s.windowWidth = window.innerWidth; s.windowHeight = window.innerHeight; s.updateLayout(); };
        }
        LayoutUpdateNotifier.prototype.initialize = function () { window.addEventListener("resize", this.onWindowResize); this.onWindowResize(); };
        LayoutUpdateNotifier.prototype.setHeaderHeight = function (h) { if (Number.isFinite(h) && h !== this.headerHeight) { this.headerHeight = h; this.updateLayoutImmediate(); } };
        LayoutUpdateNotifier.prototype.setSideBarWidth = function (w) { if (Number.isFinite(w) && w !== this.sidebarWidth) { if (window.__APP__) window.__APP__.sidebarWidth = w; this.sidebarWidth = w; this.updateLayoutImmediate(); } };
        LayoutUpdateNotifier.prototype.addModal = function (m) { this.modals.set(m.id, Object.assign({}, m)); this.updateLayoutImmediate(); };
        LayoutUpdateNotifier.prototype.removeModal = function (id) { if (this.modals.delete(id)) this.updateLayoutImmediate(); };
        LayoutUpdateNotifier.prototype.updateModalWidth = function (id, w) { var m = this.modals.get(id); if (m && m.width !== w) { m.width = w; this.updateLayoutImmediate(); } };
        LayoutUpdateNotifier.prototype.updateLayoutImmediate = function () {
            try {
                var c = function (a, m, f) { if (f(m)) a.push({ id: m.id, offset: m.width }); return a; };
                var arr = Array.from(this.modals.values());
                var left = arr.reduce(function (a, m) { return c(a, m, function (x) { return x.isLeftModal; }); }, []);
                var right = arr.reduce(function (a, m) { return c(a, m, function (x) { return x.isRightModal; }); }, []);
                if (left.length < 2 && right.length < 2) {
                    if (this.sidebarWidth > 0) left.unshift({ id: "Sidebar", offset: this.sidebarWidth });
                    this.bus.emit("Layout:update", { width: this.windowWidth, height: this.windowHeight, left: left, right: right, top: this.headerHeight ? [{ id: "Header", offset: this.headerHeight }] : [], bottom: [] });
                }
                this.updated = true;
            } catch (e) { if (this.logger && this.logger.LogError) this.logger.LogError("Update layout error", e); }
        };
        LayoutUpdateNotifier.prototype.updateLayout = function () {
            var s = this; this.updated = false;
            if (window.__APP__ && window.__APP__.utils && window.__APP__.utils.debounce) {
                window.__APP__.utils.debounce("app:layout:changed", function () { if (!s.updated) s.updateLayoutImmediate(); }, 20);
            } else this.updateLayoutImmediate();
        };
        return LayoutUpdateNotifier;
    })();

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.AppWatermark = AppWatermark;
    exports.WrappedAppWatermark = WrappedAppWatermark;
    exports.AppSnackbar = AppSnackbar;
    exports.TreeItem = TreeItem;
    exports.AppMenu = AppMenu;
    exports.LayoutUpdateNotifier = LayoutUpdateNotifier;

    return exports;
}({}));
