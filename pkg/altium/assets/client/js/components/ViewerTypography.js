/**
 * ViewerTypography.js - Typography Components
 * 
 * Contains text and badge components.
 * 
 * Requires: Vue (global), ViewerCore (global)
 */
var ViewerTypography = (function (exports) {
    'use strict';

    // Import from ViewerCore
    var wrapComponent = ViewerCore.wrapComponent;
    var getBEMClass = ViewerCore.getBEMClass;
    var getRadiusClasses = ViewerCore.getRadiusClasses;
    var CornerRadius = ViewerCore.CornerRadius;

    // ============================================================================
    // BADGE COMPONENT (from module 23870)
    // ============================================================================

    var BADGE_SIZES = { default: "", xs: "xs", small: "small", middle: "middle" };
    var BADGE_TYPES = { default: "", base: "base", pro: "pro", success: "success", alpha: "alpha", new: "new", guest: "guest" };

    /**
     * AfsBadge - Label/badge component
     * Replaces module 23870 export 'B'
     */
    var AfsBadge = {
        name: "AfsBadge",
        props: {
            tag: { type: String, default: "div" },
            size: {
                type: String,
                default: "",
                validator: function (v) { return Object.values(BADGE_SIZES).includes(v); }
            },
            type: {
                type: String,
                default: "",
                validator: function (v) { return Object.values(BADGE_TYPES).includes(v); }
            },
            uppercase: { type: Boolean, default: false },
            radius: {
                type: String,
                default: CornerRadius.tl + " " + CornerRadius.tr + " " + CornerRadius.bl + " " + CornerRadius.br
            },
            dataLocator: { type: String, default: "badge" }
        },
        computed: {
            classes: function () {
                var result = [];
                if (this.type && this.type.length) {
                    var typeClass = {};
                    typeClass["afs-badge_" + this.type] = true;
                    result.push(typeClass);
                }
                if (this.size && this.size.length) {
                    var sizeClass = {};
                    sizeClass["afs-badge_" + this.size] = true;
                    result.push(sizeClass);
                }
                result.push(getRadiusClasses("afs-badge", this.radius));
                if (this.uppercase) {
                    result.push("afs-badge_uppercase");
                }
                return result;
            }
        }
    };

    function renderAfsBadge(ctx, cache, props, setup, data, options) {
        return (
            Vue.openBlock(),
            Vue.createBlock(
                Vue.resolveDynamicComponent(props.tag),
                {
                    class: Vue.normalizeClass(["afs-badge", options.classes]),
                    "data-locator": props.dataLocator
                },
                {
                    default: Vue.withCtx(function () {
                        return [Vue.renderSlot(ctx.$slots, "default")];
                    }),
                    _: 3
                },
                8,
                ["data-locator", "class"]
            )
        );
    }

    var WrappedAfsBadge = wrapComponent(AfsBadge, [
        ["render", renderAfsBadge]
    ]);

    // ============================================================================
    // TEXT COMPONENT (from module 77453)
    // ============================================================================

    var TEXT_TYPES = [
        "large title", "medium title", "title", "paragraph",
        "single line", "hint", "tooltip", "group", "sticker", "text"
    ];

    /**
     * AfsText - Typography component
     * Replaces module 77453 export 'A'
     */
    var AfsText = {
        name: "AfsText",
        props: {
            type: {
                type: String,
                default: "paragraph",
                validator: function (v) { return TEXT_TYPES.includes(v); }
            },
            inline: { type: Boolean, default: false },
            ellipsis: { type: Boolean, default: false },
            tag: { type: String, default: "" }
        },
        computed: {
            checkType: function () {
                return {
                    isLargeTitle: this.type === "large title",
                    isMediumTitle: this.type === "medium title",
                    isTitle: this.type === "title",
                    isParagraph: this.type === "paragraph",
                    isSingleLine: this.type === "single line",
                    isHint: this.type === "hint",
                    isTooltip: this.type === "tooltip",
                    isGroup: this.type === "group",
                    isSticker: this.type === "sticker",
                    isText: this.type === "text"
                };
            },
            textEllipsisClass: function () {
                return {
                    "afs-typography_ellipsis": this.checkType.isSingleLine || this.ellipsis
                };
            },
            typeClass: function () {
                var e = this.checkType;
                var t = "afs-typography_";
                return e.isLargeTitle ? t + "large-title"
                    : e.isMediumTitle ? t + "medium-title"
                        : e.isTitle ? t + "title"
                            : e.isSingleLine ? t + "single-line"
                                : e.isHint || e.isTooltip ? t + "hint-tooltip"
                                    : e.isGroup ? t + "group"
                                        : e.isSticker ? t + "sticker"
                                            : e.isText ? t + "text"
                                                : t + "paragraph";
            },
            componentType: function () {
                return this.tag ? this.tag : this.inline ? "span" : "div";
            }
        },
        methods: {
            getBEMClass: function (e) {
                return getBEMClass("afs-typography", e);
            }
        }
    };

    function renderAfsText(ctx, cache, props, setup, data, options) {
        return (
            Vue.openBlock(),
            Vue.createBlock(
                Vue.resolveDynamicComponent(options.componentType),
                {
                    class: Vue.normalizeClass([
                        [options.typeClass, options.textEllipsisClass],
                        "afs-typography"
                    ])
                },
                {
                    default: Vue.withCtx(function () {
                        return [
                            Vue.renderSlot(ctx.$slots, "default", {
                                getBEMClass: options.getBEMClass
                            })
                        ];
                    }),
                    _: 3
                },
                8,
                ["class"]
            )
        );
    }

    var WrappedAfsText = wrapComponent(AfsText, [
        ["render", renderAfsText]
    ]);

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.BADGE_SIZES = BADGE_SIZES;
    exports.BADGE_TYPES = BADGE_TYPES;
    exports.AfsBadge = AfsBadge;
    exports.WrappedAfsBadge = WrappedAfsBadge;
    exports.TEXT_TYPES = TEXT_TYPES;
    exports.AfsText = AfsText;
    exports.WrappedAfsText = WrappedAfsText;

    return exports;
}({}));
