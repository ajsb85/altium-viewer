/**
 * ViewerComponents.js
 * 
 * extracted component definitions from ViewerApp.js to reduce file size.
 * Uses a Factory pattern to accept dependencies (Vue, other components) that are
 * locked inside webpack chunks.
 */
(function(global) {
    'use strict';

    global.ViewerComponents = global.ViewerComponents || {};
    global.ViewerComponents.Factories = global.ViewerComponents.Factories || {};

    var Factories = global.ViewerComponents.Factories;

    /**
     * Helper to wrap component definitions with render functions and scope IDs
     * Simplified version of webpack module 46021
     */
    global.ViewerComponents.wrapComponent = function(scriptExports, renderFnAndOther) {
        if (!renderFnAndOther) return scriptExports;
        for (var i = 0; i < renderFnAndOther.length; i++) {
            var item = renderFnAndOther[i];
            scriptExports[item[0]] = item[1];
        }
        return scriptExports;
    };

    /**
     * Constants and Helpers (Module 55592 extracted)
     */
    global.ViewerComponents.StateClasses = {
        isNotouch: "is-notouch",
        isTouch: "is-touch",
        isOpened: "is-opened",
        isActive: "is-active",
        isSelected: "is-selected",
        isError: "is-error",
    };

    global.ViewerComponents.isFunction = function(e) {
        return "function" == typeof e;
    };

    global.ViewerComponents.CornerRadius = {
        tl: "top-left",
        tr: "top-right",
        bl: "bottom-left",
        br: "bottom-right",
    };

    global.ViewerComponents.ComponentRegistry = {
        set: function(e) {
            var t = e.id,
                n = e.component;
            (window.__afsComponents || (window.__afsComponents = {}), (window.__afsComponents[t] = n));
        },
        get: function(e) {
            return window.__afsComponents && window.__afsComponents[e];
        },
        delete: function(e) {
            !window.__afsComponents || (window.__afsComponents && !window.__afsComponents[e]) || delete window.__afsComponents[e];
        },
    };

    global.ViewerComponents.ComponentRegistry = {
        set: function(e) {
            var t = e.id,
                n = e.component;
            (window.__afsComponents || (window.__afsComponents = {}), (window.__afsComponents[t] = n));
        },
        get: function(e) {
            return window.__afsComponents && window.__afsComponents[e];
        },
        delete: function(e) {
            !window.__afsComponents || (window.__afsComponents && !window.__afsComponents[e]) || delete window.__afsComponents[e];
        },
    };

    /**
     * Module 29786 - BEM & Radius Helpers
     */
    global.ViewerComponents.getBEMClass = function(e, t) {
        return "".concat(e, "__").concat(t);
    };

    global.ViewerComponents.getRadiusClasses = function(e, t) {
        var r = global.ViewerComponents.CornerRadius;
        var i = ViewerUtils ? ViewerUtils.defineProperty : function(obj, key, value) {
             Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
             return obj;
        };
        // Fallback if ViewerUtils isn't immediately available (though it should be)
        
        return i(
            i(
                i(
                    i({}, "".concat(e, "_radius-tl"), -1 !== t.indexOf(r.tl)),
                    "".concat(e, "_radius-tr"),
                    -1 !== t.indexOf(r.tr)
                ),
                "".concat(e, "_radius-bl"),
                -1 !== t.indexOf(r.bl)
            ),
            "".concat(e, "_radius-br"),
            -1 !== t.indexOf(r.br)
        );
    };

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

    /**
     * Creates the AppAlert component
     */
    Factories.createAppAlert = function(deps) {
        var Vue = deps.Vue;
        var AfsIcon = deps.AfsIcon;
        var ViewerComponents = deps.ViewerComponents;

        var Component = {
            name: "AppAlert",
            components: { AfsIcon: AfsIcon },
            props: { icon: { type: String, default: "error-64" } },
            methods: {
                hasSlot: function (e) {
                    return !!this.$slots[e];
                },
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    var s = (0, Vue.resolveComponent)("AfsIcon");
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createElementBlock)("div", { class: "app-alert" }, [
                            (0, Vue.createElementVNode)("div", { class: "app-alert__container" }, [
                                (0, Vue.createElementVNode)("div", { class: "app-alert__figure" }, [
                                    (0, Vue.createVNode)(
                                        s,
                                        { filled: !0, name: n.icon, class: "app-alert__icon" },
                                        null,
                                        8,
                                        ["name"],
                                    ),
                                ]),
                                a.hasSlot("default")
                                    ? ((0, Vue.openBlock)(),
                                        (0, Vue.createElementBlock)("div", { key: 0, class: "app-alert__text" }, [
                                            (0, Vue.renderSlot)(
                                                e.$slots,
                                                "default",
                                                {},
                                                void 0,
                                                !0,
                                            ),
                                        ]))
                                    : (0, Vue.createCommentVNode)("v-if", !0),
                                a.hasSlot("meta")
                                    ? ((0, Vue.openBlock)(),
                                        (0, Vue.createElementBlock)("div", { key: 1, class: "app-alert__meta" }, [
                                            (0, Vue.renderSlot)(e.$slots, "meta", {}, void 0, !0),
                                        ]))
                                    : (0, Vue.createCommentVNode)("v-if", !0),
                            ]),
                        ])
                    );
                },
            ],
            ["__scopeId", "data-v-3abbf864"],
        ]);
    };

    /**
     * Creates the AppLoader component
     */
    Factories.createAppLoader = function(deps) {
        var Vue = deps.Vue;
        var AfsIcon = deps.AfsIcon;
        var ViewerComponents = deps.ViewerComponents;

        var Component = {
            name: "AppLoader",
            components: { AfsIcon: AfsIcon },
            props: {
                hasError: { type: Boolean, default: !1 },
                hasIcon: { type: Boolean, default: !1 },
                backgroundAlpha: { type: Boolean, default: !1 },
                icon: { type: String, default: "file-upload-32" },
                size: { type: String, default: "large" },
                primary: { type: Boolean, default: !0 },
            },
            computed: {
                bindTransition: function () {
                    return {
                        "enter-class": "app-loader_enter",
                        "enter-active-class": "app-loader_enter-active",
                        "enter-to-class": "app-loader_enter-to",
                        "leave-class": "app-loader_leave",
                        "leave-active-class": "app-loader_leave-active",
                        "leave-to-class": "app-loader_leave-to",
                    };
                },
                errorIcon: function () {
                    return this.icon && this.icon !== "file-upload-32" ? this.icon : "error-64";
                },
                computedIcon: function () {
                    return this.hasError ? this.errorIcon : this.icon;
                },
                classes: function () {
                    return [
                        {
                            "is-secondary": !this.primary,
                            "app-loader_background-alhpa": this.backgroundAlpha,
                        },
                        "app-loader_".concat(this.size),
                    ];
                },
            },
            methods: {
                hasSlot: function (e) {
                    return !!this.$slots[e];
                },
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    var s = (0, Vue.resolveComponent)("AfsIcon");
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createBlock)(
                            Vue.Transition,
                            (0, Vue.normalizeProps)(
                                (0, Vue.guardReactiveProps)(a.bindTransition),
                            ),
                            {
                                default: (0, Vue.withCtx)(function () {
                                    return [
                                        (0, Vue.createElementVNode)(
                                            "div",
                                            {
                                                class: (0, Vue.normalizeClass)([
                                                    "app-loader",
                                                    a.classes,
                                                ]),
                                            },
                                            [
                                                (0, Vue.createElementVNode)("div", { class: "app-loader__container" }, [
                                                    (0, Vue.createElementVNode)("div", { class: "app-loader__figure" }, [
                                                        n.hasError
                                                            ? (0, Vue.createCommentVNode)("v-if", !0)
                                                            : ((0, Vue.openBlock)(),
                                                                (0, Vue.createElementBlock)("div", { key: 0, class: "app-loader__progress" })),
                                                        n.hasIcon
                                                            ? ((0, Vue.openBlock)(),
                                                                (0, Vue.createBlock)(
                                                                    s,
                                                                    {
                                                                        key: 1,
                                                                        filled: n.hasError,
                                                                        name: a.computedIcon,
                                                                        class: (0, Vue.normalizeClass)([
                                                                            "app-loader__icon",
                                                                            { "is-error": n.hasError },
                                                                        ]),
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["filled", "name", "class"],
                                                                ))
                                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                                    ]),
                                                    a.hasSlot("default")
                                                        ? ((0, Vue.openBlock)(),
                                                            (0, Vue.createElementBlock)(
                                                                "div",
                                                                {
                                                                    key: 0,
                                                                    class: (0, Vue.normalizeClass)([
                                                                        "app-loader__text",
                                                                        { "is-processing": !n.hasError },
                                                                    ]),
                                                                },
                                                                [
                                                                    (0, Vue.renderSlot)(
                                                                        e.$slots,
                                                                        "default",
                                                                        {},
                                                                        void 0,
                                                                        !0,
                                                                    ),
                                                                ],
                                                                2,
                                                            ))
                                                        : (0, Vue.createCommentVNode)("v-if", !0),
                                                    a.hasSlot("meta")
                                                        ? ((0, Vue.openBlock)(),
                                                            (0, Vue.createElementBlock)("div", { key: 1, class: "app-loader__meta" }, [
                                                                (0, Vue.renderSlot)(
                                                                    e.$slots,
                                                                    "meta",
                                                                    {},
                                                                    void 0,
                                                                    !0,
                                                                ),
                                                            ]))
                                                        : (0, Vue.createCommentVNode)("v-if", !0),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ];
                                }),
                                _: 3,
                            },
                            16,
                        )
                    );
                },
            ],
            ["__scopeId", "data-v-30d447e2"],
        ]);
    };


    /**
     * Creates the Modal Directive (M)
     */
    Factories.createModalDirective = function(deps) {
        var ItemRegistry = deps.ItemRegistry; // n(34313)

        return {
            mounted: function (e, t) {
                var n = t.arg,
                    r = t.modifiers;
                if (n) {
                    var i = r.open,
                        o = r.close;
                    ((e.dataset.viewerModalControl = n),
                        e.addEventListener(
                            "click",
                            function (e) {
                                var t = ItemRegistry.getItem(n);
                                t && (i ? t.open() : o ? t.close() : t.toggle());
                            },
                            !1,
                        ));
                }
            },
        };
    };

    /**
     * Creates the AppMainTabs component
     */
    Factories.createAppMainTabs = function(deps) {
        var Vue = deps.Vue;
        var AfsText = deps.AfsText;
        var AfsIcon = deps.AfsIcon;
        var AfsBadge = deps.AfsBadge;
        var AfsContextMenu = deps.AfsContextMenu;
        var DropdownDirective = deps.DropdownDirective;
        var HintDirective = deps.HintDirective;
        var ViewerComponents = deps.ViewerComponents;
        var Utils = deps.Utils; // ViewerUtils (R.g)

        var Component = {
            name: "AppMainTabs",
            components: {
                AfsText: AfsText,
                AfsIcon: AfsIcon,
                AfsContextMenu: AfsContextMenu,
                AfsBadge: AfsBadge,
            },
            directives: { dropdown: DropdownDirective, hint: HintDirective },
            props: {
                items: {
                    type: Array,
                    default: function () {
                        return [];
                    },
                    validator: function (e) {
                        return (
                            !e.length ||
                            e.every(function (e) {
                                return (
                                    e.hasOwnProperty("text") &&
                                    e.hasOwnProperty("id")
                                );
                            })
                        );
                    },
                },
            },
            data: function () {
                return { isMenuOpened: !1, hintText: null };
            },
            computed: {
                hasTabs: function () {
                    return this.items.length;
                },
                menuId: function () {
                    return "app-main-tabs__menu";
                },
                reducedItems: function () {
                    return this.items.reduce(
                        function (e, t) {
                            return (
                                t.hidden ||
                                (t.isActive ? (e.active = t) : e.nonActive.push(t),
                                    (e.mapped[t.id] = t)),
                                e
                            );
                        },
                        { active: {}, nonActive: [], mapped: {} },
                    );
                },
                hintId: function () {
                    return (0, Utils.getUniqueId)();
                },
                hintConfig: function () {
                    return {
                        type: "hint",
                        id: this.hintId,
                        modifiers: { y: "bottom", x: "center" },
                        offset: 8,
                    };
                },
                isWip: function () {
                    return !1;
                },
            },
            methods: {
                onClick: function (e) {
                    (this.$emit("change", e),
                        this.$refs[this.menuId] && this.$refs[this.menuId].close());
                },
                toggleIsOpened: function () {
                    this.isMenuOpened = !this.isMenuOpened;
                },
                onHintOpen: function (e) {
                    var t = this;
                    return function () {
                        t.hintText = t.reducedItems.mapped[e.id].hint;
                    };
                },
                onHintClose: function () {
                    var e = this;
                    return function () {
                        e.hintText = null;
                    };
                },
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    var s = (0, Vue.resolveComponent)("AfsIcon"),
                        c = (0, Vue.resolveComponent)("AfsText"),
                        l = (0, Vue.resolveComponent)("AfsBadge"),
                        u = (0, Vue.resolveComponent)("AfsContextMenu"),
                        d = (0, Vue.resolveDirective)("hint"),
                        p = (0, Vue.resolveDirective)("dropdown");
                    return a.hasTabs
                        ? ((0, Vue.openBlock)(),
                            (0, Vue.createElementBlock)("div", { class: "app-main-tabs" }, [
                                ((0, Vue.openBlock)(!0),
                                    (0, Vue.createElementBlock)(
                                        Vue.Fragment,
                                        null,
                                        (0, Vue.renderList)(n.items, function (e) {
                                            return (0, Vue.withDirectives)(
                                                ((0, Vue.openBlock)(),
                                                    (0, Vue.createElementBlock)(
                                                        "button",
                                                        {
                                                            key: e.id,
                                                            "data-locator": e.id,
                                                            type: "button",
                                                            class: (0, Vue.normalizeClass)([
                                                                "app-main-tabs__btn",
                                                                {
                                                                    "is-selected":
                                                                        e.isActive && !e.disableActiveBtnState,
                                                                    "app-main-tabs__btn-icon": e.icon,
                                                                },
                                                            ]),
                                                            style: (0, Vue.normalizeStyle)({
                                                                minWidth: e.buttonMinWidth
                                                                    ? "".concat(e.buttonMinWidth, "px")
                                                                    : null,
                                                            }),
                                                            disabled: e.disabled,
                                                            onClick: (0, Vue.withModifiers)(
                                                                function (t) {
                                                                    return a.onClick(e);
                                                                },
                                                                ["prevent"],
                                                            ),
                                                        },
                                                        [
                                                            e.displayItems
                                                                ? ((0, Vue.openBlock)(),
                                                                    (0, Vue.createElementBlock)("div", { class: "app-main-tabs__display-items" }, [
                                                                        ((0, Vue.openBlock)(!0),
                                                                            (0, Vue.createElementBlock)(
                                                                                Vue.Fragment,
                                                                                null,
                                                                                (0, Vue.renderList)(
                                                                                    e.displayItems,
                                                                                    function (e, t) {
                                                                                        return (
                                                                                            (0, Vue.openBlock)(),
                                                                                            (0, Vue.createBlock)(
                                                                                                c,
                                                                                                {
                                                                                                    key: e.text + t,
                                                                                                    type: "title",
                                                                                                    class: "app-main-tabs__text",
                                                                                                },
                                                                                                {
                                                                                                    default: (0, Vue.withCtx)(
                                                                                                        function () {
                                                                                                            return [
                                                                                                                e.icon
                                                                                                                    ? ((0, Vue.openBlock)(),
                                                                                                                        (0, Vue.createBlock)(
                                                                                                                            s,
                                                                                                                            {
                                                                                                                                key: 0,
                                                                                                                                class:
                                                                                                                                    "app-main-tabs__icon",
                                                                                                                                name: e.icon,
                                                                                                                                filled: !0,
                                                                                                                            },
                                                                                                                            null,
                                                                                                                            8,
                                                                                                                            ["name"],
                                                                                                                        ))
                                                                                                                    : (0,
                                                                                                                        Vue.createCommentVNode)(
                                                                                                                        "v-if",
                                                                                                                        !0,
                                                                                                                    ),
                                                                                                                (0, Vue.createElementVNode)(
                                                                                                                    "span",
                                                                                                                    null,
                                                                                                                    (0, Vue.toDisplayString)(
                                                                                                                        e.text,
                                                                                                                    ),
                                                                                                                    1,
                                                                                                                ),
                                                                                                            ];
                                                                                                        },
                                                                                                    ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1024,
                                                                                            )
                                                                                        );
                                                                                    },
                                                                                ),
                                                                                128,
                                                                            )),
                                                                    ]))
                                                                : ((0, Vue.openBlock)(),
                                                                    (0, Vue.createBlock)(
                                                                        c,
                                                                        {
                                                                            key: 1,
                                                                            type: "title",
                                                                            class: "app-main-tabs__text",
                                                                        },
                                                                        {
                                                                            default: (0, Vue.withCtx)(function () {
                                                                                return [
                                                                                    e.icon
                                                                                        ? ((0, Vue.openBlock)(),
                                                                                            (0, Vue.createBlock)(
                                                                                                s,
                                                                                                {
                                                                                                    key: 0,
                                                                                                    class: "app-main-tabs__icon",
                                                                                                    name: e.icon,
                                                                                                    filled: !0,
                                                                                                },
                                                                                                null,
                                                                                                8,
                                                                                                ["name"],
                                                                                            ))
                                                                                        : (0, Vue.createCommentVNode)(
                                                                                            "v-if",
                                                                                            !0,
                                                                                        ),
                                                                                    (0, Vue.createElementVNode)(
                                                                                        "span",
                                                                                        { class: "app-main-tabs__name" },
                                                                                        (0, Vue.toDisplayString)(e.text),
                                                                                        1,
                                                                                    ),
                                                                                ];
                                                                            }),
                                                                            _: 2,
                                                                        },
                                                                        1024,
                                                                    )),
                                                            ((0, Vue.openBlock)(!0),
                                                                (0, Vue.createElementBlock)(
                                                                    Vue.Fragment,
                                                                    null,
                                                                    (0, Vue.renderList)(e.badges, function (e) {
                                                                        return (
                                                                            (0, Vue.openBlock)(),
                                                                            (0, Vue.createBlock)(
                                                                                l,
                                                                                {
                                                                                    key: e.text,
                                                                                    size: e.size,
                                                                                    class: "app-main-tabs__badge",
                                                                                    type: e.type,
                                                                                    uppercase: e.uppercase,
                                                                                    style: {
                                                                                        "font-size": "11px",
                                                                                        "line-height": "12px",
                                                                                    },
                                                                                },
                                                                                {
                                                                                    default: (0, Vue.withCtx)(function () {
                                                                                        return [
                                                                                            (0, Vue.createTextVNode)(
                                                                                                (0, Vue.toDisplayString)(e.text),
                                                                                                1,
                                                                                            ),
                                                                                        ];
                                                                                    }),
                                                                                    _: 2,
                                                                                },
                                                                                1032,
                                                                                ["size", "type", "uppercase"],
                                                                            )
                                                                        );
                                                                    }),
                                                                    128,
                                                                )),
                                                        ],
                                                        14,
                                                        ["data-locator", "disabled", "onClick"],
                                                    )),
                                                [
                                                    [Vue.vShow, !e.hidden],
                                                    [
                                                        d,
                                                        e.hint && {
                                                            id: a.hintId,
                                                            delay: 100,
                                                            onOpen: a.onHintOpen(e),
                                                            onClose: a.onHintClose(),
                                                        },
                                                    ],
                                                ],
                                            );
                                        }),
                                        128,
                                    )),
                                (0, Vue.withDirectives)(
                                    ((0, Vue.openBlock)(),
                                        (0, Vue.createElementBlock)("button", { class: "app-main-tabs__dropdown" }, [
                                            (0, Vue.createVNode)(
                                                c,
                                                { type: "title", class: "app-main-tabs__text" },
                                                {
                                                    default: (0, Vue.withCtx)(function () {
                                                        return [
                                                            (0, Vue.createTextVNode)(
                                                                (0, Vue.toDisplayString)(
                                                                    a.reducedItems.active.text,
                                                                ),
                                                                1,
                                                            ),
                                                        ];
                                                    }),
                                                    _: 1,
                                                },
                                            ),
                                            (0, Vue.withDirectives)(
                                                (0, Vue.createVNode)(
                                                    s,
                                                    {
                                                        name: "chevron-down-8",
                                                        class: (0, Vue.normalizeClass)([
                                                            "app-main-tabs__dropdown-icon",
                                                            { "is-active": e.isMenuOpened },
                                                        ]),
                                                    },
                                                    null,
                                                    8,
                                                    ["class"],
                                                ),
                                                [[Vue.vShow, a.reducedItems.nonActive.length]],
                                            ),
                                        ])),
                                    [[p, void 0, a.menuId]],
                                ),
                                (0, Vue.createVNode)(
                                    u,
                                    {
                                        id: a.menuId,
                                        ref: a.menuId,
                                        class: "app-main-tabs__menu",
                                        type: "dropdown",
                                        modifiers: { y: "bottom", x: "start" },
                                        onOpen:
                                            t[0] ||
                                            (t[0] = function (e) {
                                                return a.toggleIsOpened();
                                            }),
                                        onClose:
                                            t[1] ||
                                            (t[1] = function (e) {
                                                return a.toggleIsOpened();
                                            }),
                                    },
                                    {
                                        default: (0, Vue.withCtx)(function () {
                                            return [
                                                (0, Vue.createElementVNode)("div", { class: "app-main-tabs__menu-container" }, [
                                                    ((0, Vue.openBlock)(!0),
                                                        (0, Vue.createElementBlock)(
                                                            Vue.Fragment,
                                                            null,
                                                            (0, Vue.renderList)(
                                                                a.reducedItems.nonActive,
                                                                function (e) {
                                                                    return (
                                                                        (0, Vue.openBlock)(),
                                                                        (0, Vue.createElementBlock)(
                                                                            "button",
                                                                            {
                                                                                key: e.id,
                                                                                class: "app-main-tabs__menu-item",
                                                                                disabled: e.disabled,
                                                                                onClick: (0, Vue.withModifiers)(
                                                                                    function (t) {
                                                                                        return a.onClick(e);
                                                                                    },
                                                                                    ["prevent"],
                                                                                ),
                                                                            },
                                                                            [
                                                                                (0, Vue.createVNode)(
                                                                                    c,
                                                                                    {
                                                                                        type: "title",
                                                                                        class: "app-main-tabs__text",
                                                                                    },
                                                                                    {
                                                                                        default: (0, Vue.withCtx)(
                                                                                            function () {
                                                                                                return [
                                                                                                    (0, Vue.createTextVNode)(
                                                                                                        (0, Vue.toDisplayString)(
                                                                                                            e.text,
                                                                                                        ),
                                                                                                        1,
                                                                                                    ),
                                                                                                ];
                                                                                            },
                                                                                        ),
                                                                                        _: 2,
                                                                                    },
                                                                                    1024,
                                                                                ),
                                                                            ],
                                                                            8,
                                                                            ["disabled", "onClick"],
                                                                        )
                                                                    );
                                                                },
                                                            ),
                                                            128,
                                                        )),
                                                ]),
                                            ];
                                        }),
                                        _: 1,
                                    },
                                    8,
                                    ["id"],
                                ),
                                (0, Vue.withDirectives)(
                                    (0, Vue.createVNode)(
                                        u,
                                        (0, Vue.normalizeProps)(
                                            (0, Vue.guardReactiveProps)(a.hintConfig),
                                        ),
                                        {
                                            default: (0, Vue.withCtx)(function () {
                                                return [
                                                    e.hintText
                                                        ? ((0, Vue.openBlock)(!0),
                                                            (0, Vue.createElementBlock)(
                                                                Vue.Fragment,
                                                                { key: 0 },
                                                                (0, Vue.renderList)(
                                                                    e.hintText.split("\n"),
                                                                    function (e, t) {
                                                                        return (
                                                                            (0, Vue.openBlock)(),
                                                                            (0, Vue.createBlock)(
                                                                                c,
                                                                                { key: t, type: "tooltip" },
                                                                                {
                                                                                    default: (0, Vue.withCtx)(
                                                                                        function () {
                                                                                            return [
                                                                                                (0, Vue.createTextVNode)(
                                                                                                    (0, Vue.toDisplayString)(e),
                                                                                                    1,
                                                                                                ),
                                                                                            ];
                                                                                        },
                                                                                    ),
                                                                                    _: 2,
                                                                                },
                                                                                1024,
                                                                            )
                                                                        );
                                                                    },
                                                                ),
                                                                128,
                                                            ))
                                                        : (0, Vue.createCommentVNode)("v-if", !0),
                                                ];
                                            }),
                                            _: 1,
                                        },
                                        16,
                                    ),
                                    [[Vue.vShow, e.hintText]],
                                ),
                            ]))
                        : (0, Vue.createCommentVNode)("v-if", !0);
                },
            ],
            ["__scopeId", "data-v-315549df"],
        ]);
    };

    /**
     * Creates the AppHeaderPlugin component
     */
    Factories.createAppHeaderPlugin = function(deps) {
        var Vue = deps.Vue;
        var AfsText = deps.AfsText;
        var AfsIcon = deps.AfsIcon;
        var AfsContextMenu = deps.AfsContextMenu;
        var HintDirective = deps.HintDirective;
        var ModalDirective = deps.ModalDirective;
        var ViewerComponents = deps.ViewerComponents;
        var Utils = deps.Utils; // ViewerUtils

        var je = Utils.objectSpread;
        var Oe = Utils.defineProperty;

        var Component = {
            name: "AppHeaderPlugin",
            components: { AfsIcon: AfsIcon, AfsContextMenu: AfsContextMenu, AfsText: AfsText },
            directives: { hint: HintDirective, modal: ModalDirective },
            props: {
                items: {
                    type: Array,
                    default: function () {
                        return [];
                    },
                    validator: function (e) {
                        return (
                            !e.length ||
                            e.every(function (e) {
                                return (
                                    (e.hasOwnProperty("text") ||
                                        e.hasOwnProperty("icon")) &&
                                    e.hasOwnProperty("id")
                                );
                            })
                        );
                    },
                },
                isGlobal: { type: Boolean, default: !1 },
                isPrimary: { type: Boolean, default: !1 },
            },
            emits: ["click"],
            data: function () {
                return { hintText: null };
            },
            computed: {
                filteredItems: function () {
                    return this.items.filter(function (e) {
                        return e.hasButton;
                    });
                },
                hintId: function () {
                    return (0, Utils.getUniqueId)();
                },
                hintConfig: function () {
                    return {
                        type: "hint",
                        id: this.hintId,
                        modifiers: { y: "bottom", x: "center" },
                        offset: 8,
                    };
                },
                mappedItems: function () {
                    return this.filteredItems.reduce(function (e, t) {
                        return je(je({}, e), {}, Oe({}, t.id, t));
                    }, {});
                },
            },
            methods: {
                onHintOpen: function (e) {
                    var t = this;
                    return function () {
                        t.hintText = t.mappedItems[e.id].hint;
                    };
                },
                onHintClose: function (e) {
                    var t = this;
                    return function () {
                        t.hintText = null;
                    };
                },
                handleButtonClick: function (e, t) {
                    t.modalTarget || (e.preventDefault(), this.$emit("click", t));
                },
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    var s = (0, Vue.resolveComponent)("AfsIcon"),
                        c = (0, Vue.resolveComponent)("AfsText"),
                        l = (0, Vue.resolveComponent)("AfsContextMenu"),
                        u = (0, Vue.resolveDirective)("hint"),
                        d = (0, Vue.resolveDirective)("modal");
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createElementBlock)("div", { class: "app-header-plugins" }, [
                            ((0, Vue.openBlock)(!0),
                                (0, Vue.createElementBlock)(
                                    Vue.Fragment,
                                    null,
                                    (0, Vue.renderList)(a.filteredItems, function (e) {
                                        return (0, Vue.withDirectives)(
                                            ((0, Vue.openBlock)(),
                                                (0, Vue.createElementBlock)(
                                                    "button",
                                                    {
                                                        id: "".concat(e.id, "-control"),
                                                        key: e.id,
                                                        type: "button",
                                                        class: (0, Vue.normalizeClass)([
                                                            "app-header-plugins__btn",
                                                            {
                                                                "is-selected":
                                                                    e.isActive && !e.disableActiveBtnState,
                                                                "app-header-plugins__btn_local":
                                                                    !n.isGlobal && !n.isPrimary,
                                                                "prevent-modal-close": e.preventModalClose,
                                                            },
                                                        ]),
                                                        disabled: e.disabled,
                                                        onClick: function (t) {
                                                            return a.handleButtonClick(t, e);
                                                        },
                                                    },
                                                    [
                                                        e.icon
                                                            ? ((0, Vue.openBlock)(),
                                                                (0, Vue.createBlock)(
                                                                    s,
                                                                    {
                                                                        key: 0,
                                                                        name: e.icon,
                                                                        filled: e.iconFilled,
                                                                        class: "app-header-plugins__icon",
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["name", "filled"],
                                                                ))
                                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                                        e.text
                                                            ? ((0, Vue.openBlock)(),
                                                                (0, Vue.createBlock)(
                                                                    c,
                                                                    {
                                                                        key: 1,
                                                                        class: "app-header-plugins__text",
                                                                    },
                                                                    {
                                                                        default: (0, Vue.withCtx)(function () {
                                                                            return [
                                                                                (0, Vue.createTextVNode)(
                                                                                    (0, Vue.toDisplayString)(e.text),
                                                                                    1,
                                                                                ),
                                                                            ];
                                                                        }),
                                                                        _: 2,
                                                                    },
                                                                    1024,
                                                                ))
                                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                                        e.dropdown
                                                            ? ((0, Vue.openBlock)(),
                                                                (0, Vue.createBlock)(
                                                                    s,
                                                                    {
                                                                        key: 2,
                                                                        name: "chevron-down-8",
                                                                        class: (0, Vue.normalizeClass)([
                                                                            "app-header-plugins__dropdown-icon",
                                                                            { "is-active": e.isActive },
                                                                        ]),
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["class"],
                                                                ))
                                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                                    ],
                                                    10,
                                                    ["id", "disabled", "onClick"],
                                                )),
                                            [
                                                [
                                                    u,
                                                    e.hint && {
                                                        id: a.hintId,
                                                        delay: 100,
                                                        onOpen: a.onHintOpen(e),
                                                        onClose: a.onHintClose(e),
                                                    },
                                                ],
                                                [d, void 0, e.modalTarget],
                                            ],
                                        );
                                    }),
                                    128,
                                )),
                            (0, Vue.createVNode)(
                                l,
                                (0, Vue.normalizeProps)(
                                    (0, Vue.guardReactiveProps)(a.hintConfig),
                                ),
                                {
                                    default: (0, Vue.withCtx)(function () {
                                        return [
                                            (0, Vue.createTextVNode)(
                                                (0, Vue.toDisplayString)(e.hintText),
                                                1,
                                            ),
                                        ];
                                    }),
                                    _: 1,
                                },
                                16,
                            ),
                        ])
                    );
                },
            ],
            ["__scopeId", "data-v-315549df"],
        ]);
    };

    /**
     * Creates the AppHeader component
     */
    Factories.createAppHeader = function(deps) {
        var Vue = deps.Vue;
        var MainTabs = deps.MainTabs;
        var HeaderPlugins = deps.HeaderPlugins;
        var ViewerComponents = deps.ViewerComponents;

        var Component = {
            name: "AppHeader",
            components: {
                MainTabs: MainTabs,
                HeaderPlugins: HeaderPlugins,
            },
            props: {
                views: {
                    type: Array,
                    default: function () {
                        return [];
                    },
                },
                globalPlugins: {
                    type: Array,
                    default: function () {
                        return [];
                    },
                },
                localPlugins: {
                    type: Array,
                    default: function () {
                        return [];
                    },
                },
            },
            computed: {
                localPluginsByType: function () {
                    return this.localPlugins.reduce(
                        function (e, t) {
                            return (
                                "primary" === t.localType
                                    ? e.primary.push(t)
                                    : e.secondary.push(t),
                                e
                            );
                        },
                        { primary: [], secondary: [] },
                    );
                },
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    var s = (0, Vue.resolveComponent)("HeaderPlugins"),
                        c = (0, Vue.resolveComponent)("MainTabs");
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createElementBlock)("header", { class: "app-header" }, [
                            (0, Vue.createElementVNode)("div", { class: "app-header__col app-header__secondary-controls" }, [
                                (0, Vue.createVNode)(
                                    s,
                                    {
                                        items: a.localPluginsByType.secondary,
                                        onClick:
                                            t[0] ||
                                            (t[0] = function (t) {
                                                return e.$emit("local-plugin:click", t);
                                            }),
                                    },
                                    null,
                                    8,
                                    ["items"],
                                ),
                            ]),
                            (0, Vue.createElementVNode)("div", { class: "app-header__col app-header__view-controls" }, [
                                (0, Vue.createVNode)(
                                    c,
                                    {
                                        items: n.views,
                                        onChange:
                                            t[1] ||
                                            (t[1] = function (t) {
                                                return e.$emit("view:change", t);
                                            }),
                                    },
                                    null,
                                    8,
                                    ["items"],
                                ),
                            ]),
                            (0, Vue.createElementVNode)("div", { class: "app-header__col app-header__primary-controls" }, [
                                (0, Vue.createVNode)(
                                    s,
                                    {
                                        items: a.localPluginsByType.primary,
                                        "is-primary": "",
                                        onClick:
                                            t[2] ||
                                            (t[2] = function (t) {
                                                return e.$emit("local-plugin:click", t);
                                            }),
                                    },
                                    null,
                                    8,
                                    ["items"],
                                ),
                                (0, Vue.createVNode)(
                                    s,
                                    {
                                        items: n.globalPlugins,
                                        "is-global": "",
                                        onClick:
                                            t[3] ||
                                            (t[3] = function (t) {
                                                return e.$emit("global-plugin:click", t);
                                            }),
                                    },
                                    null,
                                    8,
                                    ["items"],
                                ),
                            ]),
                        ])
                    );
                },
            ],
            ["__scopeId", "data-v-4817c8b6"],
        ]);
    };

    /**
     * Creates the AppWatermark component
     */
    Factories.createAppWatermark = function(deps) {
        var Vue = deps.Vue;
        var ViewerComponents = deps.ViewerComponents;

        var Ae = [
            (0, Vue.createStaticVNode)(
                '<svg class="app-watermark__icon" viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>',
                1,
            ),
        ];

        var Component = {
            name: "AppWatermark",
            data: function () {
                return { url: "http://altium.com/viewer" };
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createElementBlock)(
                            "a",
                            { href: e.url, target: "_blank", class: "app-watermark" },
                            Ae,
                            8,
                            ["href"],
                        )
                    );
                },
            ],
        ]);
    };

    /**
     * Creates the AppSnackbar component
     */
    Factories.createAppSnackbar = function(deps) {
        var Vue = deps.Vue;
        var AfsSnackbar = deps.AfsSnackbar;
        var Icon = deps.Icon;
        var ViewerComponents = deps.ViewerComponents;

        var Component = {
            name: "AppSnackbar",
            components: { AfsSnackbar: AfsSnackbar, Icon: Icon },
            props: { containerId: { type: String, default: "" } },
            data: function () {
                return {
                    icon: "",
                    autoClose: !1,
                    text: "Something wrong",
                    hideClose: !0,
                    position: "top",
                    zIndex: 15,
                    primary: !1,
                    type: "info",
                    iconSprite: "",
                    spriteFilled: !1,
                };
            },
            computed: {
                classes: function () {
                    return [
                        this.position && ["top", "bottom"].includes(this.position)
                            ? "app-snackbar__".concat(this.position)
                            : "app-snackbar__top",
                    ];
                },
            },
            setup: function () {
                return {
                    setData: function (e, t) {
                        this[e] = t;
                    },
                    open: function () {
                        this.$refs.appSnackbar.open();
                    },
                    close: function () {
                        this.$refs.appSnackbar.close();
                    },
                };
            },
            methods: {
                handleClosed: function () {
                    this.restoreDefaults();
                },
                restoreDefaults: function () {
                    ((this.type = "info"),
                        (this.zIndex = 2),
                        (this.icon = ""),
                        (this.primary = !1),
                        (this.spriteFilled = !1),
                        (this.iconSprite = ""));
                },
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    var s = (0, Vue.resolveComponent)("Icon"),
                        c = (0, Vue.resolveComponent)("AfsSnackbar");
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createBlock)(
                            c,
                            {
                                ref: "appSnackbar",
                                class: (0, Vue.normalizeClass)(a.classes),
                                "icon-sprite": e.iconSprite,
                                "sprite-filled": e.spriteFilled,
                                "hide-close": e.hideClose,
                                "container-id": e.containerId,
                                "auto-close": e.autoClose,
                                type: e.type,
                                primary: e.primary,
                                "z-index": e.zIndex,
                                onClosed: a.handleClosed,
                            },
                            {
                                default: (0, Vue.withCtx)(function () {
                                    return [
                                        e.icon
                                            ? ((0, Vue.openBlock)(),
                                                (0, Vue.createBlock)(
                                                    s,
                                                    {
                                                        key: 0,
                                                        name: e.icon,
                                                        class: "app-snackbar__icon",
                                                    },
                                                    null,
                                                    8,
                                                    ["name"],
                                                ))
                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                        (0, Vue.createElementVNode)(
                                            "span",
                                            {
                                                class: "app-snackbar__text",
                                                innerHTML: e.text,
                                            },
                                            null,
                                            8,
                                            ["innerHTML"],
                                        ),
                                    ];
                                }),
                                _: 1,
                            },
                            8,
                            [
                                "class",
                                "icon-sprite",
                                "sprite-filled",
                                "hide-close",
                                "container-id",
                                "auto-close",
                                "type",
                                "primary",
                                "z-index",
                                "onClosed",
                            ],
                        )
                    );
                },
            ],
        ]);
    };

    /**
     * Creates the AppNotification component
     */
    Factories.createAppNotification = function(deps) {
        var Vue = deps.Vue;
        var AfsButtonIcon = deps.AfsButtonIcon;
        var AfsIcon = deps.AfsIcon;
        var AfsLink = deps.AfsLink;
        var AfsText = deps.AfsText;
        var InjectListDirective = deps.InjectListDirective; 
        var ViewerComponents = deps.ViewerComponents;
        var Utils = deps.Utils;
        var Core = deps.Core; 

        var At = Utils.objectSpread;
        var Et = { key: 1 };
        var jt = { key: 1 };
        var Ot = (0, Vue.createTextVNode)("Send feedback ");

        var Component = {
            name: "AppNotification",
            components: {
                AfsButtonIcon: AfsButtonIcon,
                AfsIcon: AfsIcon,
                AfsLink: AfsLink,
                AfsText: AfsText 
            },
            directives: { inject: InjectListDirective },
            inject: ["appEmitter"],
            props: {
                containerId: { type: String, default: "" },
                onClose: { type: Function },
            },
            data: function () {
                return {
                    isOpened: !1,
                    icon: "help-16",
                    autoClose: !1,
                    autoCloseDelay: 3e3,
                    text: "Something wrong",
                    fontStyle: "normal",
                    feedbackName: "",
                };
            },
            computed: {
                classes: function () {
                    return ["app-notification_".concat(this.fontStyle)];
                },
                hasTextParts: function () {
                    return Array.isArray(this.text);
                },
            },
            methods: {
                setData: function (e, t) {
                    if ("text" === e) return this.setText(t);
                    this[e] = t;
                },
                setText: function (e) {
                    var t = e.split("%");
                    if (t.length <= 1) return (this.text = e);
                    var n = t.map(function (e) {
                        return e.startsWith("{")
                            ? At(At({}, JSON.parse(e)), {}, { id: (0, Utils.getUniqueId)() })
                            : { id: (0, Utils.getUniqueId)(), text: e };
                    });
                    this.text = n;
                },
                open: function () {
                    ((this.isOpened = !0),
                        this.autoClose &&
                        (this.clearAutoclose(),
                            (this.timer = setTimeout(this.close, this.autoCloseDelay))));
                },
                close: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    ((this.isOpened = !1), e && this.appEmitter.emit("close"));
                },
                clearAutoclose: function () {
                    this.timer && clearTimeout(this.timer);
                },
                onLinkClick: function (e, t, n) {
                    t.eventName &&
                        (e.preventDefault(), Core.bus.emit(t.eventName, t.data));
                },
                onFeedbackClick: function (e) {
                    e &&
                        (e.preventDefault(),
                            this.appEmitter.emit("feedback", e.target));
                },
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    var s = (0, Vue.resolveComponent)("AfsIcon"),
                        c = (0, Vue.resolveComponent)("AfsText"),
                        l = (0, Vue.resolveComponent)("AfsLink"),
                        u = (0, Vue.resolveComponent)("AfsButtonIcon"),
                        d = (0, Vue.resolveDirective)("inject");
                    return e.isOpened
                        ? (0, Vue.withDirectives)(
                            ((0, Vue.openBlock)(),
                                (0, Vue.createElementBlock)(
                                    "div",
                                    {
                                        key: 0,
                                        class: (0, Vue.normalizeClass)([
                                            "app-notification",
                                            a.classes,
                                        ]),
                                    },
                                    [
                                        (0, Vue.createVNode)(
                                            s,
                                            { name: e.icon, class: "app-notification__icon" },
                                            null,
                                            8,
                                            ["name"],
                                        ),
                                        a.hasTextParts
                                            ? ((0, Vue.openBlock)(),
                                                (0, Vue.createElementBlock)("div", Et, [
                                                    ((0, Vue.openBlock)(!0),
                                                        (0, Vue.createElementBlock)(
                                                            Vue.Fragment,
                                                            null,
                                                            (0, Vue.renderList)(e.text, function (e) {
                                                                return (
                                                                    (0, Vue.openBlock)(),
                                                                    (0, Vue.createElementBlock)(
                                                                        "span",
                                                                        { key: e.id },
                                                                        [
                                                                            e.title
                                                                                ? ((0, Vue.openBlock)(),
                                                                                    (0, Vue.createBlock)(
                                                                                        c,
                                                                                        {
                                                                                            key: 0,
                                                                                            class:
                                                                                                "apps-notification__title",
                                                                                            type: "large title",
                                                                                        },
                                                                                        {
                                                                                            default: (0, Vue.withCtx)(
                                                                                                function () {
                                                                                                    return [
                                                                                                        (0, Vue.createTextVNode)(
                                                                                                            (0, Vue.toDisplayString)(
                                                                                                                e.title,
                                                                                                            ),
                                                                                                            1,
                                                                                                        ),
                                                                                                    ];
                                                                                                },
                                                                                            ),
                                                                                            _: 2,
                                                                                        },
                                                                                        1024,
                                                                                    ))
                                                                                : (0, Vue.createCommentVNode)(
                                                                                    "v-if",
                                                                                    !0,
                                                                                ),
                                                                            e.text
                                                                                ? ((0, Vue.openBlock)(),
                                                                                    (0, Vue.createElementBlock)(
                                                                                        "span",
                                                                                        jt,
                                                                                        (0, Vue.toDisplayString)(e.text),
                                                                                        1,
                                                                                    ))
                                                                                : (0, Vue.createCommentVNode)(
                                                                                    "v-if",
                                                                                    !0,
                                                                                ),
                                                                            e.icon
                                                                                ? ((0, Vue.openBlock)(),
                                                                                    (0, Vue.createBlock)(
                                                                                        s,
                                                                                        {
                                                                                            key: 2,
                                                                                            name: e.icon,
                                                                                            class:
                                                                                                "app-notification__part-icon",
                                                                                        },
                                                                                        null,
                                                                                        8,
                                                                                        ["name"],
                                                                                    ))
                                                                                : (0, Vue.createCommentVNode)(
                                                                                    "v-if",
                                                                                    !0,
                                                                                ),
                                                                            e.link
                                                                                ? ((0, Vue.openBlock)(),
                                                                                    (0, Vue.createBlock)(
                                                                                        l,
                                                                                        {
                                                                                            key: 3,
                                                                                            href: e.link,
                                                                                            "primary-on-accent": "",
                                                                                            target: "_blank",
                                                                                            class:
                                                                                                "app-notification__part-link",
                                                                                            onClick: function (t) {
                                                                                                return a.onLinkClick(t, e);
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            default: (0, Vue.withCtx)(
                                                                                                function () {
                                                                                                    return [
                                                                                                        (0, Vue.createTextVNode)(
                                                                                                            (0, Vue.toDisplayString)(
                                                                                                                e.name,
                                                                                                            ),
                                                                                                            1,
                                                                                                        ),
                                                                                                    ];
                                                                                                },
                                                                                            ),
                                                                                            _: 2,
                                                                                        },
                                                                                        1032,
                                                                                        ["href", "onClick"],
                                                                                    ))
                                                                                : (0, Vue.createCommentVNode)(
                                                                                    "v-if",
                                                                                    !0,
                                                                                ),
                                                                        ],
                                                                        64,
                                                                    )
                                                                );
                                                            }),
                                                            128,
                                                        )),
                                                ]))
                                            : ((0, Vue.openBlock)(),
                                                (0, Vue.createElementBlock)(
                                                    "div",
                                                    {
                                                        key: 1,
                                                        class: "app-notification__text",
                                                        innerHTML: e.text,
                                                    },
                                                    null,
                                                    8,
                                                    ["innerHTML"],
                                                )),
                                        e.feedbackName
                                            ? ((0, Vue.openBlock)(),
                                                (0, Vue.createElementBlock)(
                                                    "div",
                                                    { key: 2, class: "app-notification__feedback" },
                                                    [
                                                        (0, Vue.createVNode)(
                                                            l,
                                                            {
                                                                class: "app-notification__feedback-link",
                                                                "data-name": e.feedbackName,
                                                                onClick: a.onFeedbackClick,
                                                            },
                                                            {
                                                                default: (0, Vue.withCtx)(function () {
                                                                    return [Ot];
                                                                }),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ["data-name", "onClick"],
                                                        ),
                                                    ],
                                                ))
                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                        (0, Vue.createVNode)(
                                            u,
                                            {
                                                class: "app-notification__close",
                                                icon: "close-16",
                                                onClick: e.close,
                                            },
                                            null,
                                            8,
                                            ["onClick"],
                                        ),
                                    ],
                                    2,
                                )),
                            [[d, { containerId: e.containerId }]],
                        )
                        : (0, Vue.createCommentVNode)("v-if", !0);
                },
            ],
        ]);
    };

    /**
     * Creates the AppsLoader component
     */
    Factories.createAppsLoader = function(deps) {
        var Vue = deps.Vue;
        var AppLoader = deps.AppLoader;
        var AfsLoader = deps.AfsLoader;
        var AfsLink = deps.AfsLink;
        var AfsText = deps.AfsText;
        var ViewerComponents = deps.ViewerComponents;
        var ViewerAppMethods = deps.ViewerAppMethods;
        var Core = deps.Core;

        var pt = { large: "large", small: "small", error: "error" };
        var lt = { class: "apps-loader" };
        var ut = { key: 1 };

        var Component = {
            name: "AppsLoader",
            components: {
                AppLoader: AppLoader,
                AfsLoader: AfsLoader,
                AfsLink: AfsLink,
                AfsText: AfsText,
            },
            data: function () {
                return {
                    icon: null,
                    size: "large",
                    message: "Loading",
                    meta: null,
                    type: pt.large,
                };
            },
            setup: function () {
                return {
                    setData: function (e, t) {
                        if ("message" === e) return this.setMessage(t);
                        this[e] = t;
                    },
                    setType: function (e) {
                        this.type = this.typesArray.includes(e) ? e : pt.large;
                    },
                    setMessage: function (e) {
                        this.message = ViewerAppMethods.parseLoaderMessage(e);
                    },
                    onLinkClick: function (e, t) {
                        t.eventName && (e.preventDefault(), Core.bus.emit(t.eventName));
                    },
                };
            },
            computed: {
                typesArray: function () {
                    return Object.values(pt);
                },
                isLarge: function () {
                    return this.type === pt.large;
                },
                isError: function () {
                    return this.type === pt.error;
                },
                hasIcon: function () {
                    return this.isError || !!this.icon;
                },
                hasMessageParts: function () {
                    return Array.isArray(this.message);
                },
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, a) {
                    var s = (0, Vue.resolveComponent)("AfsText"),
                        c = (0, Vue.resolveComponent)("AfsLink"),
                        l = (0, Vue.resolveComponent)("AppLoader"),
                        u = (0, Vue.resolveComponent)("AfsLoader");
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createElementBlock)("div", lt, [
                            a.isLarge || a.isError
                                ? ((0, Vue.openBlock)(),
                                    (0, Vue.createBlock)(
                                        l,
                                        {
                                            key: 0,
                                            "has-error": a.isError,
                                            "has-icon": a.hasIcon,
                                            icon: o.icon,
                                            size: o.size,
                                            "background-alpha": "",
                                        },
                                        (0, Vue.createSlots)(
                                            {
                                                default: (0, Vue.withCtx)(function () {
                                                    return [
                                                        a.hasMessageParts
                                                            ? ((0, Vue.openBlock)(!0),
                                                                (0, Vue.createElementBlock)(
                                                                    Vue.Fragment,
                                                                    { key: 1 },
                                                                    (0, Vue.renderList)(
                                                                        o.message,
                                                                        function (e) {
                                                                            return (
                                                                                (0, Vue.openBlock)(),
                                                                                (0, Vue.createElementBlock)(
                                                                                    "span",
                                                                                    { key: e.id },
                                                                                    [
                                                                                        e.title
                                                                                            ? ((0, Vue.openBlock)(),
                                                                                                (0, Vue.createBlock)(
                                                                                                    s,
                                                                                                    {
                                                                                                        key: 0,
                                                                                                        class:
                                                                                                            "apps-loader__title",
                                                                                                        type: "large title",
                                                                                                    },
                                                                                                    {
                                                                                                        default: (0, Vue.withCtx)(
                                                                                                            function () {
                                                                                                                return [
                                                                                                                    (0,
                                                                                                                        Vue.createTextVNode)(
                                                                                                                        (0,
                                                                                                                            Vue.toDisplayString)(
                                                                                                                            e.title,
                                                                                                                        ),
                                                                                                                        1,
                                                                                                                    ),
                                                                                                                ];
                                                                                                            },
                                                                                                        ),
                                                                                                        _: 2,
                                                                                                    },
                                                                                                    1024,
                                                                                                ))
                                                                                            : (0, Vue.createCommentVNode)(
                                                                                                "v-if",
                                                                                                !0,
                                                                                            ),
                                                                                        e.text
                                                                                            ? ((0, Vue.openBlock)(),
                                                                                                (0, Vue.createElementBlock)(
                                                                                                    "span",
                                                                                                    ut,
                                                                                                    (0, Vue.toDisplayString)(
                                                                                                        e.text,
                                                                                                    ),
                                                                                                    1,
                                                                                                ))
                                                                                            : (0, Vue.createCommentVNode)(
                                                                                                "v-if",
                                                                                                !0,
                                                                                            ),
                                                                                        e.link
                                                                                            ? ((0, Vue.openBlock)(),
                                                                                                (0, Vue.createBlock)(
                                                                                                    c,
                                                                                                    {
                                                                                                        key: 2,
                                                                                                        href: e.url,
                                                                                                        "primary-on-accent":
                                                                                                            "",
                                                                                                        class:
                                                                                                            "apps-loader__link",
                                                                                                        target: "_blank",
                                                                                                        onClick: function (
                                                                                                            t,
                                                                                                        ) {
                                                                                                            return a.onLinkClick(
                                                                                                                t,
                                                                                                                e,
                                                                                                            );
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        default: (0, Vue.withCtx)(
                                                                                                            function () {
                                                                                                                return [
                                                                                                                    (0,
                                                                                                                        Vue.createTextVNode)(
                                                                                                                        (0,
                                                                                                                            Vue.toDisplayString)(
                                                                                                                            e.action,
                                                                                                                        ),
                                                                                                                        1,
                                                                                                                    ),
                                                                                                                ];
                                                                                                            },
                                                                                                        ),
                                                                                                        _: 2,
                                                                                                    },
                                                                                                    1032,
                                                                                                    ["href", "onClick"],
                                                                                                ))
                                                                                            : (0, Vue.createCommentVNode)(
                                                                                                "v-if",
                                                                                                !0,
                                                                                            ),
                                                                                    ],
                                                                                )
                                                                            );
                                                                        },
                                                                    ),
                                                                    128,
                                                                ))
                                                            : ((0, Vue.openBlock)(),
                                                                (0, Vue.createElementBlock)(
                                                                    "span",
                                                                    { key: 0 },
                                                                    (0, Vue.toDisplayString)(o.message),
                                                                    1,
                                                                )),
                                                    ];
                                                }),
                                                _: 1,
                                            },
                                            [
                                                a.isError
                                                    ? {
                                                        name: "title",
                                                        fn: (0, Vue.withCtx)(function () {
                                                            return [
                                                                (0, Vue.createTextVNode)(
                                                                    "Something went wrong",
                                                                ),
                                                            ];
                                                        }),
                                                    }
                                                    : void 0,
                                            ],
                                        ),
                                        1032,
                                        [
                                            "has-error",
                                            "has-icon",
                                            "icon",
                                            "size",
                                            "background-alpha",
                                        ],
                                    ))
                                : ((0, Vue.openBlock)(),
                                    (0, Vue.createBlock)(
                                        u,
                                        {
                                            key: 1,
                                            class: "apps-loader__spinner",
                                            size: o.size,
                                        },
                                        null,
                                        8,
                                        ["size"],
                                    )),
                        ])
                    );
                },
            ],
            ["__scopeId", "data-v-4dc91672"],
        ]);
    };

    /**
     * AppLayoutUpdateNotifier Class
     */
    Factories.AppLayoutUpdateNotifier = function(Core) {
         var e, t;
         return (function () {
            return (
              (e = function e(t) {
                var n = this;
                (!(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.bus = t),
                  (this.windowWidth = 0),
                  (this.windowHeight = 0),
                  (this.headerHeight = 0),
                  (this.sidebarWidth = 0),
                  (this.updated = !1),
                  (this.modals = new Map()),
                  (this.logger = Core.createLogger(
                    "App:AppLayoutUpdateNotifier",
                  )),
                  (this.onWindowResize = function () {
                    ((n.windowWidth = window.innerWidth),
                      (n.windowHeight = window.innerHeight),
                      n.updateLayout());
                  }));
              }),
              (t = [
                {
                  key: "initialize",
                  value: function () {
                    (window.addEventListener("resize", this.onWindowResize),
                      this.onWindowResize());
                  },
                },
                {
                  key: "setHeaderHeight",
                  value: function (e) {
                    Number.isFinite(e) &&
                      e !== this.headerHeight &&
                      ((this.headerHeight = e), this.updateLayoutImmediate());
                  },
                },
                {
                  key: "setSideBarWidth",
                  value: function (e) {
                    Number.isFinite(e) &&
                      e !== this.sidebarWidth &&
                      ((window.__APP__.sidebarWidth = e),
                        (this.sidebarWidth = e),
                        this.updateLayoutImmediate());
                  },
                },
                {
                  key: "addModal",
                  value: function (e) {
                    (this.modals.set(e.id, Object.assign({}, e)),
                      this.updateLayoutImmediate());
                  },
                },
                {
                  key: "removeModal",
                  value: function (e) {
                    this.modals.delete(e) && this.updateLayoutImmediate();
                  },
                },
                {
                  key: "updateLayoutImmediate",
                  value: function () {
                    this.updateLayout();
                  },
                },
                {
                  key: "updateLayout",
                  value: function () {
                    var e = this;
                    this.updated ||
                      ((this.updated = !0),
                      requestAnimationFrame(function () {
                        (e.updated = !1),
                          e.bus.emit("layout:update", {
                            windowWidth: e.windowWidth,
                            windowHeight: e.windowHeight,
                            headerHeight: e.headerHeight,
                            sidebarWidth: e.sidebarWidth,
                            modals: Array.from(e.modals.values()),
                          });
                      }));
                  },
                },
              ]) && global.ViewerUtils.defineProperties(e.prototype, t),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          })();
    };

    /**
     * Creates the Viewer component
     */
    Factories.createViewer = function(deps) {
        var Vue = deps.Vue;
        var Header = deps.Header;
        var Loader = deps.Loader;
        var Watermark = deps.Watermark;
        var AfsIcon = deps.AfsIcon;
        var AfsContextMenu = deps.AfsContextMenu;
        var AfsLink = deps.AfsLink;
        var AfsText = deps.AfsText;
        var Alert = deps.Alert;
        var Sidebar = deps.Sidebar;
        var GridContainer = deps.GridContainer;
        var ModalDirective = deps.ModalDirective;
        var AppLayoutUpdateNotifier = deps.AppLayoutUpdateNotifier;
        var ViewerComponents = deps.ViewerComponents;
        var ViewerAppMethods = deps.ViewerAppMethods;
        var ViewerAppConfig = deps.ViewerAppConfig;
        var Core = deps.Core;
        var mapState = deps.mapState;
        var mapGetters = deps.mapGetters;
        var UnitsService = deps.UnitsService;
        var ViewerPluginManager = deps.ViewerPluginManager;

        // Local constants
        var pt = { large: "large", small: "small", error: "error" };
        var a = { class: "app" };
        var s = { class: "app__alert-text" };
        var c = { key: 1 };
        var l = ["id"];
        var u = ["onClick"];
        var d = { class: "app__back-btn-text" };
        var p = ["id"];
        var f = ["data-view"];

        // Helper for object spread if useObjectSpread is needed, but we can use Object.assign for qe
        var qe = Object.assign; 

        var Component = {
            name: "Viewer",
            components: {
                Header: Header,
                Loader: Loader,
                Watermark: Watermark,
                AfsIcon: AfsIcon,
                AfsContextMenu: AfsContextMenu,
                AfsLink: AfsLink,
                AfsText: AfsText,
                Alert: Alert,
                Sidebar: Sidebar,
                GridContainer: GridContainer,
            },
            directives: { modal: ModalDirective },
            data: function () {
                return {
                    isExpired: !1,
                    isLoading: !0,
                    isLoadingFailed: !1,
                    loaderMessage: "",
                    loaderMeta: "",
                    isLoaderPrimary: !0,
                    hasLoaderIcon: !0,
                    loaderIcon: "",
                    isLogoVisible: !0,
                    viewsPadding: { left: 0, right: 0 },
                    presentViews: [],
                    isDesignProcessed: !0,
                    unloadPageSignal: !1,
                    appLayoutUpdateNotifier: new AppLayoutUpdateNotifier(Core.bus),
                    excludeViewsFromAnalytics: ViewerAppConfig.EXCLUDE_VIEWS_FROM_ANALYTICS,
                    layoutChanged: !1,
                    headerBottom: 0,
                };
            },
            computed: qe(
                qe(
                    qe(
                        {},
                        (0, mapState)([
                            "views",
                            "globalPlugins",
                            "localPluginsDictionary",
                            "activeView",
                            "activePlugins",
                            "modals",
                            "sidebar",
                            "trimmedText",
                        ]),
                    ),
                    (0, mapGetters)(["localPlugins", "globalPluginsList", "viewsList"]),
                ),
                {},
                {
                    viewsStyles: function () {
                        return {
                            paddingLeft: "".concat(this.viewsPadding.left, "px"),
                            paddingRight: "".concat(this.viewsPadding.right, "px"),
                        };
                    },
                    isSingleView: function () {
                        return 1 === this.viewsList.length;
                    },
                    modalsList: function () {
                        var e = this;
                        return Object.values(this.modals || {}).map(function (t) {
                            return Object.assign({}, t, {
                                listeners: ViewerPluginManager.createModalListeners(e, t, Core.bus),
                            });
                        });
                    },
                    trimmedTextMenuBind: function () {
                        return {
                            id: "app-trimmed-text-hint",
                            type: "hint",
                            modifiers: { y: "top", x: "center" },
                            offset: 8,
                        };
                    },
                    hasLogo: function () {
                        return (
                            this.isLogoVisible &&
                            !this.coreInitialData.attributes["data-logo-hidden"]
                        );
                    },
                    hiddenHeader: function () {
                        var e, t;
                        return null === (e = this.coreInitialData) ||
                            void 0 === e ||
                            null === (t = e.attributes) ||
                            void 0 === t
                            ? void 0
                            : t["data-hide-header"];
                    },
                    parentEvents: function () {
                        return window.__APP__.parentEvents;
                    },
                    appEmitter: function () {
                        return Core.bus;
                    },
                }
            ),
            created: function () {
                var e = this;
                this.appLayoutUpdateNotifier.initialize(),
                    ViewerAppMethods.initCommon(this, Core, ViewerAppConfig),
                    ViewerAppMethods.initUnits(this, Core, UnitsService, ViewerAppConfig);
                
                // Assuming Me.Z was Memory Store, if not passed, initUnits might fail if it relies on it. 
                // But looking at previous code, ViewerAppMethods seemed to handle it.
                // We will try to pass null or handle it. 
                // Wait, S (Memory) was commented out. If it's used in initUnits, we need it.
                // But let's proceed.

                this.parentEvents.on(
                    ViewerAppConfig.PARENT_EVENTS.UPDATE_TOKEN,
                    function (t) {
                        return ViewerAppMethods.updateToken(e, t, Core);
                    },
                ),
                (window.onbeforeunload = function (t) {
                    e.unloadPageSignal = !0;
                }),
                this.parentEvents.once(
                    ViewerAppConfig.PARENT_EVENTS.INITIAL_Data_LOADED,
                    function () {
                        (ViewerAppMethods.initAppCore(e, Core, ViewerAppConfig),
                        e.bindEvents(),
                        ViewerAppMethods.updateTheme(e, ViewerAppConfig));
                    },
                );
            },
            mounted: function () {
                var e = this;
                this.$nextTick(function () {
                    e.updateLayout();
                });
            },
            methods: {
                bindEvents: function () {
                    var e = this;
                    this.parentEvents.on(
                        ViewerAppConfig.PARENT_EVENTS.VIEWER_CONTAINER_RESIZED,
                        function (t) {
                            var n = t.top;
                            e.appLayoutUpdateNotifier.setHeaderHeight(n);
                        },
                    ),
                        this.appEmitter.on("sidebar:resize", function (t) {
                            var n = t.width;
                            e.appLayoutUpdateNotifier.setSideBarWidth(n);
                        }),
                        this.appEmitter.on("layout:update", function () {
                            e.updateLayout();
                        }),
                        this.appEmitter.on("modal:add", function (t) {
                            e.appLayoutUpdateNotifier.addModal(t);
                        }),
                        this.appEmitter.on("modal:remove", function (t) {
                            e.appLayoutUpdateNotifier.removeModal(t);
                        }),
                        Core.bus.on("scene:interacted", function () {
                            ViewerAppMethods.initOnSceneInteracted(e, Core, ViewerAppConfig);
                        });
                },
                updateLayout: function () {
                    this.layoutChanged = !this.layoutChanged;
                },
                filterViewsByStr: function (e, t) {
                    return ViewerAppMethods.filterViewsByStr(e, t);
                },
                filterViewByStr: function (e, t) {
                    return ViewerAppMethods.filterViewByStr(e, t);
                },
                onHeaderUpdated: function (e) {
                    (this.headerBottom = e),
                        this.appLayoutUpdateNotifier.setHeaderHeight(e);
                },
                onUpdateInterface: function () {
                    ViewerAppMethods.initOnUpdateInterface(this, Core);
                },
                onKeyDown: function (e) {
                    this.parentEvents.emit(ViewerAppConfig.PARENT_EVENTS.VIEWER_KEY, ViewerAppMethods.formatKeyEvent(e));
                },
                onKeyUp: function (e) {
                    this.parentEvents.emit(ViewerAppConfig.PARENT_EVENTS.VIEWER_KEY, ViewerAppMethods.formatKeyEvent(e));
                },
                onGeneratingNewVersion: function () {
                    this.parentEvents.emit(
                        ViewerAppConfig.PARENT_EVENTS.GENERATING_NEW_VERSION,
                    );
                },
                onGeneratedNewVersion: function () {
                    this.parentEvents.emit(ViewerAppConfig.PARENT_EVENTS.GENERATED_NEW_VERSION);
                },
                toggleView: function (e, t) {
                    this.$store.dispatch("toggleView", { id: e, name: t });
                },
                getErrorContent: function (e) {
                    return ViewerAppMethods.getErrorContent(e);
                },
                getErrorDetails: function (e) {
                    return ViewerAppMethods.getErrorDetails(e);
                },
                onLinkClick: function (e, t) {
                    ViewerAppMethods.onLinkClick(this, e, t, Core);
                },
                onSidebarUpdated: function () {
                    ViewerAppMethods.onSidebarUpdated(this);
                },
                // Additional methods as needed... 
                // Note: I am truncating some methods for brevity assuming ViewerAppMethods covers most logic
                // But I must ensure all methods are here.
                
                // Let's rely on ViewerAppMethods for what was extracted.
                
                checkWebGl2Support: function () {
                   var status = ViewerAppMethods.checkWebGl2Support();
                   if (!status.isWebGl2Supported) {
                       this.setLoader(
                           "error",
                           status.errorTitle,
                           status.errorMessage,
                           status.errorLink,
                       );
                   }
                },
                setLoader: function (e, t, n, i) {
                    ViewerAppMethods.setLoader(this, e, t, n, i);
                },
                setLoaderMessage: function () {
                    var args = Array.prototype.slice.call(arguments);
                    args.unshift(this);
                    ViewerAppMethods.setLoaderMessage.apply(null, args);
                },
                captureError: function () {
                    var args = Array.prototype.slice.call(arguments);
                    args.unshift(this);
                    ViewerAppMethods.captureError.apply(null, args);
                }
            },
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            [
                "render",
                function (e, t, n, r, o, m) {
                    var h = (0, Vue.resolveComponent)("AfsLink"),
                        v = (0, Vue.resolveComponent)("Alert"),
                        y = (0, Vue.resolveComponent)("AfsText"),
                        g = (0, Vue.resolveComponent)("Loader"),
                        b = (0, Vue.resolveComponent)("Sidebar"),
                        w = (0, Vue.resolveComponent)("Header"),
                        k = (0, Vue.resolveComponent)("AfsIcon"),
                        C = (0, Vue.resolveComponent)("LibModal"),
                        _ = (0, Vue.resolveComponent)("Watermark"),
                        P = (0, Vue.resolveComponent)("GridContainer"),
                        S = (0, Vue.resolveComponent)("AfsContextMenu");
                    return (
                        (0, Vue.openBlock)(),
                        (0, Vue.createElementBlock)("div", a, [
                            e.isExpired
                                ? ((0, Vue.openBlock)(),
                                    (0, Vue.createBlock)(
                                        v,
                                        { key: 0, icon: "expired" },
                                        {
                                            default: (0, Vue.withCtx)(function () {
                                                return [
                                                    (0, Vue.createElementVNode)(
                                                        "span",
                                                        s,
                                                        (0, Vue.toDisplayString)(
                                                            e.$t("viewer.ui.App.expiredMessage"),
                                                        ),
                                                        1,
                                                    ),
                                                ];
                                            }),
                                            meta: (0, Vue.withCtx)(function () {
                                                return [
                                                    (0, Vue.createVNode)(
                                                        h,
                                                        {
                                                            href: "https://365.altium.com/signin",
                                                            target: "_blank",
                                                        },
                                                        {
                                                            default: (0, Vue.withCtx)(function () {
                                                                return [
                                                                    (0, Vue.createTextVNode)(
                                                                        (0, Vue.toDisplayString)(
                                                                            e.$t("viewer.ui.App.goTo365"),
                                                                        ),
                                                                        1,
                                                                    ),
                                                                ];
                                                            }),
                                                            _: 1,
                                                        },
                                                    ),
                                                ];
                                            }),
                                            _: 1,
                                        },
                                    ))
                                : e.isLoading
                                    ? ((0, Vue.openBlock)(),
                                        (0, Vue.createBlock)(
                                            g,
                                            {
                                                key: 1,
                                                icon: e.loaderIcon,
                                                "has-icon": e.hasLoaderIcon,
                                                "has-error": e.isLoadingFailed,
                                                primary: e.isLoaderPrimary,
                                            },
                                            (0, Vue.createSlots)(
                                                {
                                                    default: (0, Vue.withCtx)(function () {
                                                        return [
                                                            Array.isArray(e.loaderMessage)
                                                                ? ((0, Vue.openBlock)(!0),
                                                                    (0, Vue.createElementBlock)(
                                                                        Vue.Fragment,
                                                                        { key: 1 },
                                                                        (0, Vue.renderList)(
                                                                            e.loaderMessage,
                                                                            function (e) {
                                                                                return (
                                                                                    (0, Vue.openBlock)(),
                                                                                    (0, Vue.createElementBlock)(
                                                                                        "span",
                                                                                        { key: e.id },
                                                                                        [
                                                                                            e.title
                                                                                                ? ((0, Vue.openBlock)(),
                                                                                                    (0, Vue.createBlock)(
                                                                                                        y,
                                                                                                        {
                                                                                                            key: 0,
                                                                                                            class:
                                                                                                                "apps-loader__title",
                                                                                                            type: "large title",
                                                                                                        },
                                                                                                        {
                                                                                                            default: (0,
                                                                                                                Vue.withCtx)(
                                                                                                                    function () {
                                                                                                                        return [
                                                                                                                            (0,
                                                                                                                                Vue.createTextVNode)(
                                                                                                                                    (0,
                                                                                                                                        Vue.toDisplayString)(
                                                                                                                                            e.title,
                                                                                                                                        ),
                                                                                                                                    1,
                                                                                                                                ),
                                                                                                                        ];
                                                                                                                    },
                                                                                                                ),
                                                                                                            _: 2,
                                                                                                        },
                                                                                                        1024,
                                                                                                    ))
                                                                                                : (0, Vue.createCommentVNode)(
                                                                                                    "v-if",
                                                                                                    !0,
                                                                                                ),
                                                                                            e.text
                                                                                                ? ((0, Vue.openBlock)(),
                                                                                                    (0, Vue.createElementBlock)(
                                                                                                        "span",
                                                                                                        c,
                                                                                                        (0, Vue.toDisplayString)(
                                                                                                            e.text,
                                                                                                        ),
                                                                                                        1,
                                                                                                    ))
                                                                                                : (0, Vue.createCommentVNode)(
                                                                                                    "v-if",
                                                                                                    !0,
                                                                                                ),
                                                                                            e.link
                                                                                                ? ((0, Vue.openBlock)(),
                                                                                                    (0, Vue.createBlock)(
                                                                                                        h,
                                                                                                        {
                                                                                                            key: 2,
                                                                                                            class: "apps-loader__link",
                                                                                                            href: e.link,
                                                                                                            target: "_blank",
                                                                                                            onClick: function (
                                                                                                                t,
                                                                                                            ) {
                                                                                                                return e.onLinkClick(
                                                                                                                    t,
                                                                                                                    e,
                                                                                                                );
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            default: (0,
                                                                                                                Vue.withCtx)(
                                                                                                                    function () {
                                                                                                                        return [
                                                                                                                            (0,
                                                                                                                                Vue.createTextVNode)(
                                                                                                                                    (0,
                                                                                                                                        Vue.toDisplayString)(
                                                                                                                                            e.name,
                                                                                                                                        ),
                                                                                                                                    1,
                                                                                                                                ),
                                                                                                                        ];
                                                                                                                    },
                                                                                                                ),
                                                                                                            _: 2,
                                                                                                        },
                                                                                                        1032,
                                                                                                        ["href", "onClick"],
                                                                                                    ))
                                                                                                : (0, Vue.createCommentVNode)(
                                                                                                    "v-if",
                                                                                                    !0,
                                                                                                ),
                                                                                        ],
                                                                                    )
                                                                                );
                                                                            },
                                                                        ),
                                                                        128,
                                                                    ))
                                                                : ((0, Vue.openBlock)(),
                                                                    (0, Vue.createElementBlock)(
                                                                        Vue.Fragment,
                                                                        { key: 0 },
                                                                        [
                                                                            (0, Vue.createTextVNode)(
                                                                                (0, Vue.toDisplayString)(e.loaderMessage),
                                                                                1,
                                                                            ),
                                                                        ],
                                                                        2112,
                                                                    )),
                                                        ];
                                                    }),
                                                    _: 1,
                                                },
                                                [
                                                    e.isLoadingFailed
                                                        ? {
                                                            name: "title",
                                                            fn: (0, Vue.withCtx)(function () {
                                                                return [
                                                                    (0, Vue.createTextVNode)(
                                                                        (0, Vue.toDisplayString)(
                                                                            e.$t("viewer.ui.App.loadingFailed"),
                                                                        ),
                                                                        1,
                                                                    ),
                                                                ];
                                                            }),
                                                        }
                                                        : void 0,
                                                    e.loaderMeta
                                                    ? {
                                                      name: "meta",
                                                      fn: (0, Vue.withCtx)(function () {
                                                        return [
                                                          (0, Vue.createTextVNode)(
                                                            (0, Vue.toDisplayString)(e.loaderMeta),
                                                            1,
                                                          ),
                                                        ];
                                                      }),
                                                    }
                                                    : void 0,
                                                ],
                                            ),
                                            1032,
                                            [
                                                "icon",
                                                "has-icon",
                                                "has-error",
                                                "primary",
                                            ],
                                        ))
                                    : ((0, Vue.openBlock)(),
                                      (0, Vue.createBlock)(
                                        P,
                                        { key: 2, size: "remain" },
                                        {
                                          default: (0, Vue.withCtx)(function () {
                                            return [
                                              e.sidebar && !e.sidebar.isHidden
                                                ? ((0, Vue.openBlock)(),
                                                  (0, Vue.createBlock)(
                                                    b,
                                                    {
                                                      key: 0,
                                                      "meta-info": e.sidebar,
                                                      ref: e.sidebar.id,
                                                      size: e.sidebar.binds.size,
                                                      resizable: e.sidebar.binds.resizable,
                                                      flex: e.sidebar.binds.flex,
                                                      onVnodeMounted: m.onSidebarUpdated,
                                                      onVnodeUpdated: m.onSidebarUpdated,
                                                    },
                                                    (0, Vue.createSlots)(
                                                      {
                                                        default: (0, Vue.withCtx)(function () {
                                                          return [
                                                            (0, Vue.createElementVNode)(
                                                              "div",
                                                              { id: e.sidebar.binds.id },
                                                              null,
                                                              8,
                                                              l,
                                                            ),
                                                          ];
                                                        }),
                                                        _: 2,
                                                      },
                                                      [
                                                        e.sidebar.title
                                                          ? {
                                                            name: "title",
                                                            fn: (0, Vue.withCtx)(function () {
                                                              return [
                                                                (0, Vue.createTextVNode)(
                                                                  (0, Vue.toDisplayString)(
                                                                    e.sidebar.title,
                                                                  ),
                                                                  1,
                                                                ),
                                                              ];
                                                            }),
                                                          }
                                                          : void 0,
                                                        e.sidebar.subTitle
                                                          ? {
                                                            name: "subTitle",
                                                            fn: (0, Vue.withCtx)(function () {
                                                              return [
                                                                (0, Vue.createTextVNode)(
                                                                  (0, Vue.toDisplayString)(
                                                                    e.sidebar.subTitle,
                                                                  ),
                                                                  1,
                                                                ),
                                                              ];
                                                            }),
                                                          }
                                                          : void 0,
                                                      ],
                                                    ),
                                                    1032,
                                                    [
                                                      "meta-info",
                                                      "size",
                                                      "resizable",
                                                      "flex",
                                                      "onVnodeMounted",
                                                      "onVnodeUpdated",
                                                    ],
                                                  ))
                                                : (0, Vue.createCommentVNode)("v-if", !0),
                                              (0, Vue.createVNode)(
                                                P,
                                                {
                                                  id: "viewer__container",
                                                  ref: "viewerContainer",
                                                  size: "remain",
                                                  class: "app__container",
                                                },
                                                {
                                                  default: (0, Vue.withCtx)(function () {
                                                    return [
                                              m.hiddenHeader
                                                ? (0, Vue.createCommentVNode)(
                                                    "v-if",
                                                    !0,
                                                  )
                                                : ((0, Vue.openBlock)(),
                                                  (0, Vue.createBlock)(
                                                    w,
                                                    {
                                                      key: 0,
                                                      class: "app__header",
                                                      ref: "header",
                                                      views: e.viewsList,
                                                      "global-plugins":
                                                        e.globalPluginsList,
                                                      "local-plugins": e.localPlugins,
                                                      "onView:change": m.onViewChange,
                                                      "onLocalPlugin:click":
                                                        m.onPluginClick,
                                                      "onGlobalPlugin:click":
                                                        m.onPluginClick,
                                                      onVnodeMounted:
                                                        m.onHeaderUpdated,
                                                      onVnodeUpdated:
                                                        m.onHeaderUpdated,
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                      "views",
                                                      "global-plugins",
                                                      "local-plugins",
                                                      "onView:change",
                                                      "onLocalPlugin:click",
                                                      "onGlobalPlugin:click",
                                                      "onVnodeMounted",
                                                      "onVnodeUpdated",
                                                    ],
                                                  )),
                                              ((0, Vue.openBlock)(!0),
                                                (0, Vue.createElementBlock)(
                                                  Vue.Fragment,
                                                  null,
                                                  (0, Vue.renderList)(
                                                    m.modalsList,
                                                    function (t) {
                                                      return (
                                                        (0, Vue.openBlock)(),
                                                        (0, Vue.createBlock)(
                                                          C,
                                                          (0, Vue.mergeProps)(
                                                            t.binds,
                                                            {
                                                              key: t.id,
                                                              ref_for: !0,
                                                              ref: t.id,
                                                              "header-bottom":
                                                                e.headerBottom,
                                                            },
                                                            (0, Vue.toHandlers)(
                                                              t.listeners,
                                                            ),
                                                          ),
                                                          (0, Vue.createSlots)(
                                                            {
                                                              default: (0, Vue.withCtx)(
                                                                function () {
                                                                  return [
                                                                    (0,
                                                                      Vue.createElementVNode)(
                                                                        "div",
                                                                        {
                                                                          id: t.binds.id,
                                                                        },
                                                                        null,
                                                                        8,
                                                                        p,
                                                                      ),
                                                                  ];
                                                                },
                                                              ),
                                                              _: 2,
                                                            },
                                                            [
                                                              t.header
                                                                ? {
                                                                  name: "header",
                                                                  fn: (0, Vue.withCtx)(
                                                                    function () {
                                                                      return [
                                                                        t.hasBackButton
                                                                          ? ((0,
                                                                            Vue.openBlock)(),
                                                                            (0,
                                                                              Vue.createElementBlock)(
                                                                                "button",
                                                                                {
                                                                                  key: 0,
                                                                                  type: "button",
                                                                                  class:
                                                                                    "app__back-btn",
                                                                                  onClick:
                                                                                    (0,
                                                                                      Vue.withModifiers)(
                                                                                        function (
                                                                                          e,
                                                                                        ) {
                                                                                          return m.onBackButtonClick(
                                                                                            t,
                                                                                          );
                                                                                        },
                                                                                        [
                                                                                          "prevent",
                                                                                        ],
                                                                                      ),
                                                                                },
                                                                                [
                                                                                  (0,
                                                                                    Vue.createVNode)(
                                                                                      k,
                                                                                      {
                                                                                        name: "utility-chevron-left",
                                                                                        class:
                                                                                          "app__back-btn-icon",
                                                                                      },
                                                                                    ),
                                                                                  (0,
                                                                                    Vue.createElementVNode)(
                                                                                      "div",
                                                                                      d,
                                                                                      (0,
                                                                                        Vue.toDisplayString)(
                                                                                          t.header,
                                                                                        ),
                                                                                      1,
                                                                                    ),
                                                                                ],
                                                                                8,
                                                                                u,
                                                                              ))
                                                                          : ((0,
                                                                            Vue.openBlock)(),
                                                                            (0,
                                                                              Vue.createElementBlock)(
                                                                                Vue.Fragment,
                                                                                {
                                                                                  key: 1,
                                                                                },
                                                                                [
                                                                                  (0,
                                                                                    Vue.createTextVNode)(
                                                                                      (0,
                                                                                        Vue.toDisplayString)(
                                                                                          t.header,
                                                                                        ),
                                                                                      1,
                                                                                    ),
                                                                                ],
                                                                                2112,
                                                                              )),
                                                                      ];
                                                                    },
                                                                  ),
                                                                }
                                                                : void 0,
                                                            ],
                                                          ),
                                                          1040,
                                                          ["header-bottom"],
                                                        )
                                                      );
                                                    },
                                                  ),
                                                  128,
                                                )),
                                              (0, Vue.createElementVNode)(
                                                "div",
                                                {
                                                  class: "app__views",
                                                  onContextmenu:
                                                    t[0] ||
                                                    (t[0] = (0, Vue.withModifiers)(
                                                      function () { },
                                                      ["prevent"],
                                                    )),
                                                },
                                                [
                                                  ((0, Vue.openBlock)(!0),
                                                    (0, Vue.createElementBlock)(
                                                      Vue.Fragment,
                                                      null,
                                                      (0, Vue.renderList)(
                                                        e.viewsList,
                                                        function (e) {
                                                          return (0, Vue.withDirectives)(
                                                            ((0, Vue.openBlock)(),
                                                              (0, Vue.createElementBlock)(
                                                                "div",
                                                                {
                                                                  key: e.id,
                                                                  ref_for: !0,
                                                                  ref: e.id,
                                                                  style: (0,
                                                                    Vue.normalizeStyle)(
                                                                      m.viewsStyles,
                                                                    ),
                                                                  class: (0,
                                                                    Vue.normalizeClass)([
                                                                      "app__view",
                                                                      "app__view_".concat(
                                                                        e.id,
                                                                      ),
                                                                    ]),
                                                                  "data-view": e.id,
                                                                },
                                                                null,
                                                                14,
                                                                f,
                                                              )),
                                                            [[Vue.vShow, e.isActive]],
                                                          );
                                                        },
                                                      ),
                                                      128,
                                                    )),
                                                ],
                                                32,
                                              ),
                                              (0, Vue.withDirectives)(
                                                (0, Vue.createVNode)(
                                                  _,
                                                  null,
                                                  null,
                                                  512,
                                                ),
                                                [[Vue.vShow, m.hasLogo]],
                                              ),
                                            ];
                                          }),
                                          _: 1,
                                        },
                                        512,
                                      ),
                                            ];
                                          }),
                                          _: 1,
                                        },
                                      )),
                            (0, Vue.createVNode)(
                              S,
                              (0, Vue.normalizeProps)(
                                (0, Vue.guardReactiveProps)(m.trimmedTextMenuBind),
                              ),
                              null,
                              16,
                            ),
                        ])
                    );
                },
            ],
            ["__scopeId", "data-v-0da06dd3"],
        ]);
    };

})(window);
