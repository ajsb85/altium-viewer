/**
 * ViewerComponents/status.js
 * 
 * Status and loader components: AppAlert, AppLoader, AppsLoader
 * Extracted from ViewerComponents.js for modularity.
 */
(function(global) {
    'use strict';

    var ViewerComponents = global.ViewerComponents;
    var Factories = ViewerComponents.Factories;

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
                                                                                                        class: "apps-loader__title",
                                                                                                        type: "large title",
                                                                                                    },
                                                                                                    {
                                                                                                        default: (0, Vue.withCtx)(
                                                                                                            function () {
                                                                                                                return [
                                                                                                                    (0, Vue.createTextVNode)(
                                                                                                                        (0, Vue.toDisplayString)(e.title),
                                                                                                                        1,
                                                                                                                    ),
                                                                                                                ];
                                                                                                            },
                                                                                                        ),
                                                                                                        _: 2,
                                                                                                    },
                                                                                                    1024,
                                                                                                ))
                                                                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                                                                        e.text
                                                                                            ? ((0, Vue.openBlock)(),
                                                                                                (0, Vue.createElementBlock)(
                                                                                                    "span",
                                                                                                    ut,
                                                                                                    (0, Vue.toDisplayString)(e.text),
                                                                                                    1,
                                                                                                ))
                                                                                            : (0, Vue.createCommentVNode)("v-if", !0),
                                                                                        e.link
                                                                                            ? ((0, Vue.openBlock)(),
                                                                                                (0, Vue.createBlock)(
                                                                                                    c,
                                                                                                    {
                                                                                                        key: 2,
                                                                                                        href: e.url,
                                                                                                        "primary-on-accent": "",
                                                                                                        class: "apps-loader__link",
                                                                                                        target: "_blank",
                                                                                                        onClick: function (t) {
                                                                                                            return a.onLinkClick(t, e);
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        default: (0, Vue.withCtx)(
                                                                                                            function () {
                                                                                                                return [
                                                                                                                    (0, Vue.createTextVNode)(
                                                                                                                        (0, Vue.toDisplayString)(e.action),
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
                                                                                            : (0, Vue.createCommentVNode)("v-if", !0),
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
                                                                (0, Vue.createTextVNode)("Something went wrong"),
                                                            ];
                                                        }),
                                                    }
                                                    : void 0,
                                            ],
                                        ),
                                        1032,
                                        ["has-error", "has-icon", "icon", "size", "background-alpha"],
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

    console.log('[ViewerComponents/status] Loaded');

})(typeof window !== 'undefined' ? window : this);
