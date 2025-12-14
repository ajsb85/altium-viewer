/**
 * ViewerComponents/layout.js
 * 
 * Layout components: AfsSidebar, AppSidebar
 * Extracted from ViewerComponents.js for modularity.
 */
(function(global) {
    'use strict';

    var ViewerComponents = global.ViewerComponents;
    var Factories = ViewerComponents.Factories;

    /**
     * Creates the AfsSidebar component
     */
    Factories.createAfsSidebar = function(deps) {
        var Vue = deps.Vue;            // n(10311)
        var BEM = deps.BEM;            // n(29786)
        var GridContainer = deps.GridContainer; // n(48226).G

        return {
            name: "AfsSidebar",
            components: { GridContainer: GridContainer },
            props: {
                side: { type: String, default: "left" },
                size: { type: String, default: "md" },
                resizable: { type: Boolean, default: !1 },
                minPanelWidth: { type: Number, default: null },
                maxPanelWidth: { type: Number, default: null },
                initialWidth: { type: Number, default: null },
            },
            emits: ["size-changed"],
            data: function (e) {
                return {
                    minWidth: e.minPanelWidth || 240,
                    maxWidth: e.maxPanelWidth || 640,
                    width: e.initialWidth,
                    isResizing: null,
                };
            },
            computed: {
                classes: function () {
                    return [
                        "afs-sidebar-container_".concat(this.side),
                        "afs-sidebar-container_".concat(this.size),
                    ].concat(
                        this.resizable ? ["afs-sidebar-container_resizable"] : [],
                    );
                },
            },
            watch: {
                isResizing: function (e) {
                    e
                        ? (document.addEventListener("mousemove", this.handleResize),
                            document.addEventListener("mouseup", this.handleResizeEnd),
                            document.addEventListener(
                                "mouseout",
                                this.handleMouseOutOfWindow,
                            ),
                            (document.body.style.pointerEvents = "none"),
                            (document.querySelector(
                                ".afs-sidebar-container__resizer",
                            ).style.pointerEvents = "auto"))
                        : (document.removeEventListener("mousemove", this.handleResize),
                            document.removeEventListener("mouseup", this.handleResizeEnd),
                            document.removeEventListener(
                                "mouseout",
                                this.handleMouseOutOfWindow,
                            ),
                            (document.body.style.pointerEvents = "auto"));
                },
            },
            methods: {
                getBEMClass: function (e) {
                    return (0, BEM.g)("afs-sidebar-container", e);
                },
                handleResizeStart: function () {
                    this.isResizing = !0;
                },
                handleResizeEnd: function () {
                    ((this.isResizing = !1), this.$emit("size-changed", this.width));
                },
                handleResize: function (e) {
                    var t =
                        "right" === this.side ? window.innerWidth - e.pageX : e.pageX;
                    t >= this.minWidth && t <= this.maxWidth && (this.width = t + 2);
                },
                handleMouseOutOfWindow: function (e) {
                    null == e.toElement &&
                        null == e.relatedTarget &&
                        (this.isResizing = !1);
                },
                setWidth: function (e) {
                    var t = ("add" === e.type ? 1 : -1) * e.value + this.width;
                    (t < this.minWidth
                        ? (this.width = this.minWidth)
                        : t > this.maxWidth
                            ? (this.width = this.maxWidth)
                            : (this.width = t),
                        this.handleResizeEnd());
                },
            },
        };
    };

    /**
     * Creates the AppSidebar component
     */
    Factories.createAppSidebar = function(deps) {
        var Vue = deps.Vue;
        var Utils = deps.Utils; // ViewerUtils
        var AfsText = deps.AfsText;
        var AfsSidebar = deps.AfsSidebar;
        var ViewerComponents = deps.ViewerComponents;

        var x = Utils.defineProperty;

        var Component = {
            name: "AppSidebar",
            components: {
                AfsSidebar: AfsSidebar, // Already wrapped
                AfsText: AfsText,
            },
            props: {
                metaInfo: {
                    type: Object,
                    default: function () {
                        return {};
                    },
                },
                size: { type: String, default: "sm" },
                resizable: { type: Boolean, default: !1 },
                flex: { type: Boolean, default: !1 },
            },
            computed: {
                classes: function () {
                    return x(
                        x({}, "app-sidebar_".concat(this.size), this.size),
                        "is-flex",
                        this.flex,
                    );
                },
            },
            methods: {
                hasSlot: function (e) {
                    return !!this.$slots[e];
                },
            },
        };

        // Return wrapped component with Render function
        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    var s = (0, Vue.resolveComponent)("AfsText"),
                        c = (0, Vue.resolveComponent)("AfsSidebar");
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createBlock)(
                            c,
                            {
                                class: (0, Vue.normalizeClass)(["app-sidebar", a.classes]),
                                size: n.size,
                                resizable: n.resizable,
                            },
                            {
                                default: (0, Vue.withCtx)(function () {
                                    return [
                                        a.hasSlot("title")
                                            ? ((0, Vue.openBlock)(),
                                                (0, Vue.createBlock)(
                                                    s,
                                                    { key: 0, class: "app-sidebar__title" },
                                                    {
                                                        default: (0, Vue.withCtx)(function () {
                                                            return [
                                                                (0, Vue.renderSlot)(
                                                                    e.$slots,
                                                                    "title",
                                                                    {},
                                                                    void 0,
                                                                    !0,
                                                                ),
                                                            ];
                                                        }),
                                                        _: 3,
                                                    },
                                                ))
                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                        a.hasSlot("subTitle")
                                            ? ((0, Vue.openBlock)(),
                                                (0, Vue.createBlock)(
                                                    s,
                                                    { key: 1, class: "app-sidebar__sub-title" },
                                                    {
                                                        default: (0, Vue.withCtx)(function () {
                                                            return [
                                                                (0, Vue.renderSlot)(
                                                                    e.$slots,
                                                                    "subTitle",
                                                                    {},
                                                                    void 0,
                                                                    !0,
                                                                ),
                                                                n.metaInfo.subTitleAdditionalText
                                                                    ? ((0, Vue.openBlock)(),
                                                                        (0, Vue.createElementBlock)(
                                                                            "span",
                                                                            { key: 0, class: "app-sidebar__sub-title-additional-text" },
                                                                            (0, Vue.toDisplayString)(
                                                                                n.metaInfo.subTitleAdditionalText,
                                                                            ),
                                                                            1,
                                                                        ))
                                                                    : (0, Vue.createCommentVNode)("v-if", !0),
                                                            ];
                                                        }),
                                                        _: 3,
                                                    },
                                                ))
                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                        (0, Vue.createElementVNode)("div", { class: "app-sidebar__content" }, [
                                            (0, Vue.renderSlot)(e.$slots, "default", {}, void 0, !0),
                                        ]),
                                    ];
                                }),
                                _: 3,
                            },
                            8,
                            ["size", "class", "resizable"],
                        )
                    );
                },
            ],
            ["__scopeId", "data-v-56ae3e48"],
        ]);
    };

    console.log('[ViewerComponents/layout] Loaded');

})(typeof window !== 'undefined' ? window : this);
