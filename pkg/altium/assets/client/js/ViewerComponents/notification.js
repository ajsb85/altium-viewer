/**
 * ViewerComponents/notification.js
 * 
 * Notification components: AppSnackbar, AppNotification
 * Extracted from ViewerComponents.js for modularity.
 */
(function(global) {
    'use strict';

    var ViewerComponents = global.ViewerComponents;
    var Factories = ViewerComponents.Factories;

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

    console.log('[ViewerComponents/notification] Loaded');

})(typeof window !== 'undefined' ? window : this);
