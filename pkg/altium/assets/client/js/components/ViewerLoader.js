/**
 * ViewerLoader.js - Loader and Alert Components
 * 
 * Contains loading indicators and alert display components.
 * 
 * Requires: Vue (global), ViewerCore (global)
 */
var ViewerLoader = (function (exports) {
    'use strict';

    var wrapComponent = ViewerCore.wrapComponent;

    // ============================================================================
    // APP ALERT
    // ============================================================================

    var AppAlert = {
        name: "AppLoader",
        props: { icon: { type: String, default: "error-64" } },
        methods: { hasSlot: function (n) { return !!this.$slots[n]; } }
    };

    var APP_ALERT_ROOT = { class: "app-alert" };
    var APP_ALERT_CONTAINER = { class: "app-alert__container" };
    var APP_ALERT_FIGURE = { class: "app-alert__figure" };
    var APP_ALERT_TEXT = { key: 0, class: "app-alert__text" };
    var APP_ALERT_META = { key: 1, class: "app-alert__meta" };

    function renderAppAlert(ctx, cache, props, setup, data, options) {
        var AfsIcon = Vue.resolveComponent("AfsIcon");
        return (
            Vue.openBlock(),
            Vue.createElementBlock("div", APP_ALERT_ROOT, [
                Vue.createElementVNode("div", APP_ALERT_CONTAINER, [
                    Vue.createElementVNode("div", APP_ALERT_FIGURE, [
                        Vue.createVNode(AfsIcon, { filled: true, name: props.icon, class: "app-alert__icon" }, null, 8, ["name"])
                    ]),
                    options.hasSlot("default")
                        ? (Vue.openBlock(), Vue.createElementBlock("div", APP_ALERT_TEXT, [Vue.renderSlot(ctx.$slots, "default", {}, void 0, true)]))
                        : Vue.createCommentVNode("v-if", true),
                    options.hasSlot("meta")
                        ? (Vue.openBlock(), Vue.createElementBlock("div", APP_ALERT_META, [Vue.renderSlot(ctx.$slots, "meta", {}, void 0, true)]))
                        : Vue.createCommentVNode("v-if", true)
                ])
            ])
        );
    }

    var WrappedAppAlert = wrapComponent(AppAlert, [["render", renderAppAlert], ["__scopeId", "data-v-3abbf864"]]);

    // ============================================================================
    // APP LOADER
    // ============================================================================

    var AppLoader = {
        name: "AppLoader",
        props: {
            hasError: { type: Boolean, default: false },
            hasIcon: { type: Boolean, default: false },
            backgroundAlpha: { type: Boolean, default: false },
            icon: { type: String, default: "file-upload-32" },
            size: { type: String, default: "large" },
            primary: { type: Boolean, default: true }
        },
        computed: {
            bindTransition: function () {
                return {
                    "enter-class": "app-loader_enter", "enter-active-class": "app-loader_enter-active",
                    "enter-to-class": "app-loader_enter-to", "leave-class": "app-loader_leave",
                    "leave-active-class": "app-loader_leave-active", "leave-to-class": "app-loader_leave-to"
                };
            },
            errorIcon: function () { return this.icon && this.icon !== "file-upload-32" ? this.icon : "error-64"; },
            computedIcon: function () { return this.hasError ? this.errorIcon : this.icon; },
            classes: function () {
                return [{ "is-secondary": !this.primary, "app-loader_background-alhpa": this.backgroundAlpha }, "app-loader_" + this.size];
            }
        },
        methods: { hasSlot: function (n) { return !!this.$slots[n]; } }
    };

    var APP_LOADER_CONTAINER = { class: "app-loader__container" };
    var APP_LOADER_FIGURE = { class: "app-loader__figure" };
    var APP_LOADER_PROGRESS = { key: 0, class: "app-loader__progress" };
    var APP_LOADER_META = { key: 1, class: "app-loader__meta" };

    function renderAppLoader(ctx, cache, props, setup, data, options) {
        var AfsIcon = Vue.resolveComponent("AfsIcon");
        return (
            Vue.openBlock(),
            Vue.createBlock(Vue.Transition, Vue.normalizeProps(Vue.guardReactiveProps(options.bindTransition)), {
                default: Vue.withCtx(function () {
                    return [
                        Vue.createElementVNode("div", { class: Vue.normalizeClass(["app-loader", options.classes]) }, [
                            Vue.createElementVNode("div", APP_LOADER_CONTAINER, [
                                Vue.createElementVNode("div", APP_LOADER_FIGURE, [
                                    props.hasError
                                        ? Vue.createCommentVNode("v-if", true)
                                        : (Vue.openBlock(), Vue.createElementBlock("div", APP_LOADER_PROGRESS)),
                                    props.hasIcon
                                        ? (Vue.openBlock(), Vue.createBlock(AfsIcon, {
                                            key: 1, filled: props.hasError, name: options.computedIcon,
                                            class: Vue.normalizeClass(["app-loader__icon", { "is-error": props.hasError }])
                                        }, null, 8, ["filled", "name", "class"]))
                                        : Vue.createCommentVNode("v-if", true)
                                ]),
                                options.hasSlot("default")
                                    ? (Vue.openBlock(), Vue.createElementBlock("div", {
                                        key: 0, class: Vue.normalizeClass(["app-loader__text", { "is-processing": !props.hasError }])
                                    }, [Vue.renderSlot(ctx.$slots, "default", {}, void 0, true)], 2))
                                    : Vue.createCommentVNode("v-if", true),
                                options.hasSlot("meta")
                                    ? (Vue.openBlock(), Vue.createElementBlock("div", APP_LOADER_META, [Vue.renderSlot(ctx.$slots, "meta", {}, void 0, true)]))
                                    : Vue.createCommentVNode("v-if", true)
                            ])
                        ], 2)
                    ];
                }),
                _: 3
            }, 16)
        );
    }

    var WrappedAppLoader = wrapComponent(AppLoader, [["render", renderAppLoader], ["__scopeId", "data-v-30d447e2"]]);

    // ============================================================================
    // APPS LOADER
    // ============================================================================

    var AppsLoader = {
        name: "AppsLoader",
        props: {
            loading: { type: Boolean, default: false },
            title: { type: String, default: "" },
            subtitle: { type: String, default: "" }
        },
        data: function () { return { hasError: false, errorText: "" }; },
        computed: { isLoading: function () { return this.loading && !this.hasError; } },
        methods: {
            setError: function (t) { this.hasError = true; this.errorText = t || "An error occurred"; },
            clearError: function () { this.hasError = false; this.errorText = ""; }
        }
    };

    // ============================================================================
    // APP NOTIFICATION
    // ============================================================================

    var AppNotification = {
        name: "AppNotification",
        inject: ["appEmitter"],
        props: { containerId: { type: String, default: "" }, onClose: { type: Function } },
        data: function () {
            return { isOpened: false, icon: "help-16", autoClose: false, autoCloseDelay: 3000, text: "Something wrong", fontStyle: "normal", feedbackName: "" };
        },
        computed: {
            classes: function () { return ["app-notification_" + this.fontStyle]; },
            hasTextParts: function () { return Array.isArray(this.text); }
        },
        methods: {
            setData: function (k, v) { if (k === "text") return this.setText(v); this[k] = v; },
            setText: function (t) {
                var p = t.split("%");
                if (p.length <= 1) { this.text = t; return; }
                this.text = p.map(function (s) {
                    var id = Math.random().toString(36).substr(2, 9);
                    return s.startsWith("{") ? Object.assign({ id: id }, JSON.parse(s)) : { id: id, text: s };
                });
            },
            open: function () { var s = this; this.isOpened = true; if (this.autoClose) { this.clearAutoclose(); this.timer = setTimeout(function () { s.close(); }, this.autoCloseDelay); } },
            close: function (e) { this.isOpened = false; if (e) this.appEmitter.emit("close"); },
            clearAutoclose: function () { if (this.timer) clearTimeout(this.timer); }
        }
    };

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.AppAlert = AppAlert;
    exports.WrappedAppAlert = WrappedAppAlert;
    exports.AppLoader = AppLoader;
    exports.WrappedAppLoader = WrappedAppLoader;
    exports.AppsLoader = AppsLoader;
    exports.AppNotification = AppNotification;

    return exports;
}({}));
