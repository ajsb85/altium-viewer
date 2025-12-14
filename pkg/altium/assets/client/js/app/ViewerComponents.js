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

})(window);
