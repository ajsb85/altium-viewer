/**
 * ViewerComponents.js - Extracted UI Components Library
 * 
 * Contains the sidebar and loader Vue components extracted from ViewerApp.js.
 * Requires: Vue (global), ViewerUtils (global)
 */
var ViewerComponents = (function (exports) {
    'use strict';

    // ============================================================================
    // COMPONENT WRAPPER UTILITY
    // ============================================================================

    /**
     * Wraps a Vue component with additional options like render function and scoped styles.
     * Replaces webpack modules 46021 (V.Z) and 93891 (O._)
     * @param {Object} component - The Vue component options object
     * @param {Array} options - Array of [key, value] pairs to apply
     * @returns {Object} The wrapped component
     */
    function wrapComponent(component, options) {
        var target = component.__vccOpts || component;

        for (var i = 0; i < options.length; i++) {
            var pair = options[i];
            var key = pair[0];
            var value = pair[1];
            target[key] = value;
        }

        return target;
    }

    // ============================================================================
    // BEM HELPERS (from module 29786)
    // ============================================================================

    /**
     * Creates a BEM element class name
     * Replaces module 29786 export 'g'
     * @param {string} block - Block name
     * @param {string} element - Element name
     * @returns {string} BEM class like "block__element"
     */
    function getBEMClass(block, element) {
        return block + "__" + element;
    }

    /**
     * Creates radius classes for corners
     * Replaces module 29786 export 'a'
     */
    function getRadiusClasses(block, corners) {
        var result = {};
        result[block + "_radius-tl"] = corners.indexOf("tl") !== -1;
        result[block + "_radius-tr"] = corners.indexOf("tr") !== -1;
        result[block + "_radius-bl"] = corners.indexOf("bl") !== -1;
        result[block + "_radius-br"] = corners.indexOf("br") !== -1;
        return result;
    }

    // ============================================================================
    // CONSTANTS (from module 55592)
    // ============================================================================

    /**
     * CSS state classes
     */
    var StateClasses = {
        isNotouch: "is-notouch",
        isTouch: "is-touch",
        isOpened: "is-opened",
        isActive: "is-active",
        isSelected: "is-selected",
        isError: "is-error"
    };

    /**
     * Corner radius constants
     */
    var CornerRadius = {
        tl: "top-left",
        tr: "top-right",
        bl: "bottom-left",
        br: "bottom-right"
    };

    /**
     * Check if value is a function
     */
    function isFunction(e) {
        return typeof e === "function";
    }

    /**
     * Component registry for global access
     */
    var ComponentRegistry = {
        set: function (opts) {
            window.__afsComponents = window.__afsComponents || {};
            window.__afsComponents[opts.id] = opts.component;
        },
        get: function (id) {
            return window.__afsComponents && window.__afsComponents[id];
        },
        delete: function (id) {
            if (window.__afsComponents && window.__afsComponents[id]) {
                delete window.__afsComponents[id];
            }
        }
    };

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

    /**
     * AfsBadge render function
     */
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

    // Wrap AfsBadge with its render function
    var WrappedAfsBadge = wrapComponent(AfsBadge, [
        ["render", renderAfsBadge]
    ]);


    // ============================================================================
    // GRID COMPONENTS (from modules 48226 and 20533)
    // ============================================================================

    /**
     * Joins modifiers into a class string
     */
    function joinModifiers(modifiers, prefix) {
        return modifiers.join(" " + prefix + "_").replace(/^\s+|\s+$/g, "");
    }

    /**
     * AfsGridSection - Grid section with padding
     * Replaces module 20533 export 'G'
     */
    var GridSection = {
        name: "AfsGridSection",
        inheritAttrs: false,
        props: {
            dataLocator: { type: String, default: "grid-section" },
            tag: { type: String, default: "div" },
            paddingSize: {
                type: String,
                default: "lg",
                validator: function (v) { return ["xl", "lg", "md", "sm", "xs"].includes(v); }
            }
        },
        computed: {
            classes: function () {
                return "afs-grid-section_" + this.paddingSize;
            }
        }
    };

    /**
     * GridSection render function
     */
    function renderGridSection(ctx, cache, props, setup, data, options) {
        return (
            Vue.openBlock(),
            Vue.createBlock(
                Vue.resolveDynamicComponent(props.tag),
                Vue.mergeProps(ctx.$attrs, {
                    class: ["afs-grid-section", options.classes],
                    "data-locator": props.dataLocator
                }),
                {
                    default: Vue.withCtx(function () {
                        return [Vue.renderSlot(ctx.$slots, "default")];
                    }),
                    _: 3
                },
                16,
                ["class", "data-locator"]
            )
        );
    }

    // Wrap GridSection with render function
    var WrappedGridSection = wrapComponent(GridSection, [
        ["render", renderGridSection]
    ]);

    /**
     * AfsGridContainer - Flexible grid container component
     * Replaces module 48226 export 'G'
     */
    var GridContainer = {
        name: "AfsGridContainer",
        inheritAttrs: false,
        props: {
            dataLocator: { type: String, default: "grid-container" },
            tag: { type: String, default: "div" },
            type: {
                type: String,
                default: "",
                validator: function (v) { return !v.length || ["sidebar"].includes(v); }
            },
            size: {
                type: String,
                default: "",
                validator: function (v) { return !v.length || ["auto", "fullscreen", "remain"].includes(v); }
            },
            direction: {
                type: String,
                default: "row",
                validator: function (v) { return ["row", "row-reverse", "column", "column-reverse"].includes(v); }
            },
            modifiers: { type: String, default: "" },
            centerContent: { type: Boolean, default: false },
            searchData: { type: String, default: "" }
        },
        computed: {
            classes: function () {
                return [
                    this.computedModifiers,
                    this.size.length ? "afs-grid-container_" + this.size : null,
                    this.type.length ? "afs-grid-container_" + this.type : null,
                    { "afs-grid-container_center-content": this.centerContent },
                    "afs-grid-container_direction-" + this.direction
                ];
            },
            computedModifiers: function () {
                var mods = this.modifiers;
                if (!mods) return "";
                if (Array.isArray(mods) && mods.length) {
                    return joinModifiers([""].concat(mods), "afs-grid-container");
                }
                if (typeof mods === "string" && mods.length) {
                    return joinModifiers([""].concat(mods.split(" ")), "afs-grid-container");
                }
                return "";
            }
        }
    };

    /**
     * GridContainer render function
     */
    function renderGridContainer(ctx, cache, props, setup, data, options) {
        return (
            Vue.openBlock(),
            Vue.createBlock(
                Vue.resolveDynamicComponent(props.tag),
                Vue.mergeProps(ctx.$attrs, {
                    class: ["afs-grid-container", options.classes],
                    "data-locator": props.dataLocator
                }),
                {
                    default: Vue.withCtx(function () {
                        return [Vue.renderSlot(ctx.$slots, "default")];
                    }),
                    _: 3
                },
                16,
                ["class", "data-locator"]
            )
        );
    }

    // Wrap GridContainer with its render function
    var WrappedGridContainer = wrapComponent(GridContainer, [
        ["render", renderGridContainer]
    ]);

    // ============================================================================
    // TYPOGRAPHY COMPONENT (from module 77453)
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

    /**
     * AfsText render function
     */
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

    // Wrap AfsText with its render function
    var WrappedAfsText = wrapComponent(AfsText, [
        ["render", renderAfsText]
    ]);

    // ============================================================================
    // SIDEBAR COMPONENTS
    // ============================================================================

    /**
     * AfsSidebar - Base resizable sidebar component
     */
    var AfsSidebar = {
        name: "AfsSidebar",
        components: {
            // GridContainer will be resolved at runtime
        },
        props: {
            side: { type: String, default: "left" },
            size: { type: String, default: "md" },
            resizable: { type: Boolean, default: false },
            minPanelWidth: { type: Number, default: null },
            maxPanelWidth: { type: Number, default: null },
            initialWidth: { type: Number, default: null }
        },
        emits: ["size-changed"],
        data: function (vm) {
            return {
                minWidth: vm.minPanelWidth || 240,
                maxWidth: vm.maxPanelWidth || 640,
                width: vm.initialWidth,
                isResizing: null
            };
        },
        computed: {
            classes: function () {
                var base = [
                    "afs-sidebar-container_" + this.side,
                    "afs-sidebar-container_" + this.size
                ];
                if (this.resizable) {
                    base.push("afs-sidebar-container_resizable");
                }
                return base;
            }
        },
        watch: {
            isResizing: function (val) {
                var self = this;
                if (val) {
                    document.addEventListener("mousemove", this.handleResize);
                    document.addEventListener("mouseup", this.handleResizeEnd);
                    document.addEventListener("mouseout", this.handleMouseOutOfWindow);
                    document.body.style.pointerEvents = "none";
                    var resizer = document.querySelector(".afs-sidebar-container__resizer");
                    if (resizer) {
                        resizer.style.pointerEvents = "auto";
                    }
                } else {
                    document.removeEventListener("mousemove", this.handleResize);
                    document.removeEventListener("mouseup", this.handleResizeEnd);
                    document.removeEventListener("mouseout", this.handleMouseOutOfWindow);
                    document.body.style.pointerEvents = "auto";
                }
            }
        },
        methods: {
            handleResizeStart: function () {
                this.isResizing = true;
            },
            handleResizeEnd: function () {
                this.isResizing = false;
                this.$emit("size-changed", this.width);
            },
            handleResize: function (e) {
                var t = this.side === "right" ? window.innerWidth - e.pageX : e.pageX;
                if (t >= this.minWidth && t <= this.maxWidth) {
                    this.width = t + 2;
                }
            },
            handleMouseOutOfWindow: function (e) {
                if (e.toElement == null && e.relatedTarget == null) {
                    this.isResizing = false;
                }
            },
            setWidth: function (e) {
                var delta = (e.type === "add" ? 1 : -1) * e.value;
                var t = delta + this.width;
                if (t < this.minWidth) {
                    this.width = this.minWidth;
                } else if (t > this.maxWidth) {
                    this.width = this.maxWidth;
                } else {
                    this.width = t;
                }
                this.handleResizeEnd();
            }
        }
    };

    /**
     * AfsSidebar render function
     * Uses Vue's runtime functions for rendering
     */
    function renderAfsSidebar(ctx, cache, props, setup, data, options) {
        var GridContainer = Vue.resolveComponent("GridContainer");
        return (
            Vue.openBlock(),
            Vue.createBlock(
                GridContainer,
                {
                    type: "sidebar",
                    direction: "column",
                    class: Vue.normalizeClass(["afs-sidebar-container", options.classes]),
                    style: Vue.normalizeStyle({ width: ctx.width + "px" })
                },
                {
                    default: Vue.withCtx(function () {
                        var children = [];

                        // Right resizer
                        if (props.resizable && props.side === "right") {
                            children.push(
                                Vue.openBlock(),
                                Vue.createElementBlock("div", {
                                    key: 0,
                                    class: "afs-sidebar-container__resizer",
                                    onMousedown: cache[0] || (cache[0] = function (e) {
                                        return options.handleResizeStart();
                                    })
                                }, null, 32)
                            );
                        }

                        // Default slot
                        children.push(Vue.renderSlot(ctx.$slots, "default"));

                        // Left resizer
                        if (props.resizable && props.side === "left") {
                            children.push(
                                Vue.openBlock(),
                                Vue.createElementBlock("div", {
                                    key: 1,
                                    class: "afs-sidebar-container__resizer",
                                    onMousedown: cache[1] || (cache[1] = function (e) {
                                        return options.handleResizeStart();
                                    })
                                }, null, 32)
                            );
                        }

                        return children;
                    }),
                    _: 3
                },
                8,
                ["class", "style"]
            )
        );
    }

    // Wrap AfsSidebar with its render function
    var WrappedAfsSidebar = wrapComponent(AfsSidebar, [
        ["render", renderAfsSidebar]
    ]);

    /**
     * AppSidebar - Application sidebar with title/subtitle support
     */
    var AppSidebar = {
        name: "AppSidebar",
        components: {
            AfsSidebar: WrappedAfsSidebar
            // AfsText will be resolved at runtime
        },
        props: {
            metaInfo: {
                type: Object,
                default: function () { return {}; }
            },
            size: { type: String, default: "sm" },
            resizable: { type: Boolean, default: false },
            flex: { type: Boolean, default: false }
        },
        computed: {
            classes: function () {
                var result = {};
                result["app-sidebar_" + this.size] = this.size;
                result["is-flex"] = this.flex;
                return result;
            }
        },
        methods: {
            hasSlot: function (name) {
                return !!this.$slots[name];
            }
        }
    };

    // ============================================================================
    // LOADER COMPONENTS
    // ============================================================================

    /**
     * AppAlert - Error/alert display component
     */
    var AppAlert = {
        name: "AppLoader",
        components: {
            // AfsIcon will be resolved at runtime
        },
        props: {
            icon: { type: String, default: "error-64" }
        },
        methods: {
            hasSlot: function (name) {
                return !!this.$slots[name];
            }
        }
    };

    /**
     * AppLoader - Loading indicator component
     */
    var AppLoader = {
        name: "AppLoader",
        components: {
            // AfsIcon will be resolved at runtime
        },
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
                    "enter-class": "app-loader_enter",
                    "enter-active-class": "app-loader_enter-active",
                    "enter-to-class": "app-loader_enter-to",
                    "leave-class": "app-loader_leave",
                    "leave-active-class": "app-loader_leave-active",
                    "leave-to-class": "app-loader_leave-to"
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
                        "app-loader_background-alhpa": this.backgroundAlpha
                    },
                    "app-loader_" + this.size
                ];
            }
        },
        methods: {
            hasSlot: function (name) {
                return !!this.$slots[name];
            }
        }
    };

    // Template element constants for AppAlert
    var APP_ALERT_ROOT = { class: "app-alert" };
    var APP_ALERT_CONTAINER = { class: "app-alert__container" };
    var APP_ALERT_FIGURE = { class: "app-alert__figure" };
    var APP_ALERT_TEXT = { key: 0, class: "app-alert__text" };
    var APP_ALERT_META = { key: 1, class: "app-alert__meta" };

    /**
     * AppAlert render function
     */
    function renderAppAlert(ctx, cache, props, setup, data, options) {
        var AfsIcon = Vue.resolveComponent("AfsIcon");
        return (
            Vue.openBlock(),
            Vue.createElementBlock("div", APP_ALERT_ROOT, [
                Vue.createElementVNode("div", APP_ALERT_CONTAINER, [
                    Vue.createElementVNode("div", APP_ALERT_FIGURE, [
                        Vue.createVNode(
                            AfsIcon,
                            { filled: true, name: props.icon, class: "app-alert__icon" },
                            null,
                            8,
                            ["name"]
                        )
                    ]),
                    options.hasSlot("default")
                        ? (Vue.openBlock(),
                            Vue.createElementBlock("div", APP_ALERT_TEXT, [
                                Vue.renderSlot(ctx.$slots, "default", {}, void 0, true)
                            ]))
                        : Vue.createCommentVNode("v-if", true),
                    options.hasSlot("meta")
                        ? (Vue.openBlock(),
                            Vue.createElementBlock("div", APP_ALERT_META, [
                                Vue.renderSlot(ctx.$slots, "meta", {}, void 0, true)
                            ]))
                        : Vue.createCommentVNode("v-if", true)
                ])
            ])
        );
    }

    // Wrap AppAlert with render function and scoped style
    var WrappedAppAlert = wrapComponent(AppAlert, [
        ["render", renderAppAlert],
        ["__scopeId", "data-v-3abbf864"]
    ]);

    // Template element constants for AppLoader
    var APP_LOADER_CONTAINER = { class: "app-loader__container" };
    var APP_LOADER_FIGURE = { class: "app-loader__figure" };
    var APP_LOADER_PROGRESS = { key: 0, class: "app-loader__progress" };
    var APP_LOADER_META = { key: 1, class: "app-loader__meta" };

    /**
     * AppLoader render function (with transition)
     */
    function renderAppLoader(ctx, cache, props, setup, data, options) {
        var AfsIcon = Vue.resolveComponent("AfsIcon");
        return (
            Vue.openBlock(),
            Vue.createBlock(
                Vue.Transition,
                Vue.normalizeProps(Vue.guardReactiveProps(options.bindTransition)),
                {
                    default: Vue.withCtx(function () {
                        return [
                            Vue.createElementVNode(
                                "div",
                                {
                                    class: Vue.normalizeClass(["app-loader", options.classes])
                                },
                                [
                                    Vue.createElementVNode("div", APP_LOADER_CONTAINER, [
                                        Vue.createElementVNode("div", APP_LOADER_FIGURE, [
                                            props.hasError
                                                ? Vue.createCommentVNode("v-if", true)
                                                : (Vue.openBlock(), Vue.createElementBlock("div", APP_LOADER_PROGRESS)),
                                            props.hasIcon
                                                ? (Vue.openBlock(),
                                                    Vue.createBlock(
                                                        AfsIcon,
                                                        {
                                                            key: 1,
                                                            filled: props.hasError,
                                                            name: options.computedIcon,
                                                            class: Vue.normalizeClass([
                                                                "app-loader__icon",
                                                                { "is-error": props.hasError }
                                                            ])
                                                        },
                                                        null,
                                                        8,
                                                        ["filled", "name", "class"]
                                                    ))
                                                : Vue.createCommentVNode("v-if", true)
                                        ]),
                                        options.hasSlot("default")
                                            ? (Vue.openBlock(),
                                                Vue.createElementBlock(
                                                    "div",
                                                    {
                                                        key: 0,
                                                        class: Vue.normalizeClass([
                                                            "app-loader__text",
                                                            { "is-processing": !props.hasError }
                                                        ])
                                                    },
                                                    [Vue.renderSlot(ctx.$slots, "default", {}, void 0, true)],
                                                    2
                                                ))
                                            : Vue.createCommentVNode("v-if", true),
                                        options.hasSlot("meta")
                                            ? (Vue.openBlock(),
                                                Vue.createElementBlock("div", APP_LOADER_META, [
                                                    Vue.renderSlot(ctx.$slots, "meta", {}, void 0, true)
                                                ]))
                                            : Vue.createCommentVNode("v-if", true)
                                    ])
                                ],
                                2
                            )
                        ];
                    }),
                    _: 3
                },
                16
            )
        );
    }

    // Wrap AppLoader with render function and scoped style
    var WrappedAppLoader = wrapComponent(AppLoader, [
        ["render", renderAppLoader],
        ["__scopeId", "data-v-30d447e2"]
    ]);

    // ============================================================================
    // WATERMARK COMPONENT (from ViewerApp.js line 1431)
    // ============================================================================

    /**
     * AppWatermark - Altium Viewer watermark/branding overlay
     */
    var AppWatermark = {
        name: "AppWatermark",
        data: function () {
            return { url: "http://altium.com/viewer" };
        }
    };

    // Watermark template content
    var WATERMARK_CONTENT = [
        Vue.createElementVNode("span", { class: "app-watermark__image" })
    ];
    var WATERMARK_HREF = ["href"];

    /**
     * AppWatermark render function
     */
    function renderAppWatermark(ctx, cache, props, setup, data, options) {
        return (
            Vue.openBlock(),
            Vue.createElementBlock(
                "a",
                { href: ctx.url, target: "_blank", class: "app-watermark" },
                WATERMARK_CONTENT,
                8,
                WATERMARK_HREF
            )
        );
    }

    var WrappedAppWatermark = wrapComponent(AppWatermark, [
        ["render", renderAppWatermark]
    ]);

    // ============================================================================
    // SNACKBAR COMPONENT (from ViewerApp.js line 3995)
    // ============================================================================

    /**
     * AppSnackbar - Toast notification wrapper
     */
    var AppSnackbar = {
        name: "AppSnackbar",
        components: {
            // AfsSnackbar and Icon resolved at runtime
        },
        props: {
            containerId: { type: String, default: "" }
        },
        data: function () {
            return {
                icon: "",
                autoClose: false,
                text: "Something wrong",
                hideClose: true,
                position: "top",
                zIndex: 15,
                primary: false,
                type: "info",
                iconSprite: "",
                spriteFilled: false
            };
        },
        computed: {
            classes: function () {
                var pos = this.position;
                if (pos && ["top", "bottom"].includes(pos)) {
                    return ["app-snackbar__" + pos];
                }
                return ["app-snackbar__top"];
            }
        },
        setup: function () {
            return {
                setData: function (key, value) {
                    this[key] = value;
                },
                open: function () {
                    this.$refs.appSnackbar.open();
                },
                close: function () {
                    this.$refs.appSnackbar.close();
                }
            };
        },
        methods: {
            handleClosed: function () {
                this.restoreDefaults();
            },
            restoreDefaults: function () {
                this.type = "info";
                this.zIndex = 2;
                this.icon = "";
                this.primary = false;
                this.spriteFilled = false;
                this.iconSprite = "";
            }
        }
    };

    // ============================================================================
    // HEADER PLUGIN COMPONENT (from ViewerApp.js line 1094)
    // ============================================================================

    /**
     * AppHeaderPlugin - Header plugin buttons
     */
    var AppHeaderPlugin = {
        name: "AppHeaderPlugin",
        components: {
            // AfsIcon, AfsContextMenu, AfsText resolved at runtime
        },
        directives: {
            // hint and modal directives resolved at runtime
        },
        props: {
            items: {
                type: Array,
                default: function () { return []; },
                validator: function (arr) {
                    return !arr.length || arr.every(function (e) {
                        return (e.text !== undefined || e.icon !== undefined) && e.id !== undefined;
                    });
                }
            },
            isGlobal: { type: Boolean, default: false },
            isPrimary: { type: Boolean, default: false }
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
            }
        },
        methods: {
            onClick: function (item) {
                this.$emit("click", item);
            },
            hasSlot: function (name) {
                return !!this.$slots[name];
            }
        }
    };

    // ============================================================================
    // TREE ITEM COMPONENT (from ViewerApp.js line 4523)
    // ============================================================================

    /**
     * TreeItem - Tree view item with expand/collapse
     */
    var TreeItem = {
        name: "TreeItem",
        components: {
            // AfsText, AfsIcon, Accordion resolved at runtime
        },
        directives: {
            // trim directive resolved at runtime
        },
        props: {
            item: {
                type: Object,
                default: function () { return {}; }
            },
            level: { type: Number, default: 0 },
            startPadding: { type: [String, Number], default: 32 },
            selectedItem: { type: [String, Number], default: "" }
        },
        data: function () {
            return { refPrefix: "group-", isOpened: false };
        },
        computed: {
            paddingLeft: function () {
                return (+this.startPadding + 24 * +this.level) + "px";
            },
            childrenLevel: function () {
                return +this.level + 1;
            },
            isSelected: function () {
                return this.item.selected ||
                    this.item.name === this.selectedItem ||
                    this.item.id === this.selectedItem;
            },
            isIconFilled: function () {
                return !("iconFilled" in this.item) || this.item.iconFilled;
            }
        },
        watch: {
            item: {
                deep: true,
                handler: function (val) {
                    val.selected && this.openTree();
                }
            }
        },
        mounted: function () {
            this.isSelected && this.openTree();
        },
        methods: {
            onItemClick: function (item, event) {
                if (event) {
                    event.target.dispatchEvent(new Event("mouseleave"));
                }
                this.$emit("item-click", item);
            },
            onOpenChange: function () {
                var refs = this.$refs;
                if (this.isOpened) {
                    refs && refs.container && refs.container.close();
                } else {
                    refs && refs.container && refs.container.open();
                }
                this.isOpened = !this.isOpened;
            },
            openTree: function () {
                var refs = this.$refs;
                refs && refs.container && refs.container.open();
                this.isOpened = true;
                if (this.level) this.$emit("open-parent");
            }
        }
    };

    // ============================================================================
    // NOTIFICATION COMPONENT (from ViewerApp.js line 4169)
    // ============================================================================

    /**
     * AppNotification - In-app notification display
     */
    var AppNotification = {
        name: "AppNotification",
        components: {
            // AfsText, AfsButtonIcon, AfsIcon, AfsLink resolved at runtime
        },
        directives: {
            // inject directive resolved at runtime
        },
        inject: ["appEmitter"],
        props: {
            containerId: { type: String, default: "" },
            onClose: { type: Function }
        },
        data: function () {
            return {
                isOpened: false,
                icon: "help-16",
                autoClose: false,
                autoCloseDelay: 3000,
                text: "Something wrong",
                fontStyle: "normal",
                feedbackName: ""
            };
        },
        computed: {
            classes: function () {
                return ["app-notification_" + this.fontStyle];
            },
            hasTextParts: function () {
                return Array.isArray(this.text);
            }
        },
        methods: {
            setData: function (key, value) {
                if (key === "text") return this.setText(value);
                this[key] = value;
            },
            setText: function (text) {
                var parts = text.split("%");
                if (parts.length <= 1) {
                    this.text = text;
                    return;
                }
                var result = parts.map(function (part) {
                    if (part.startsWith("{")) {
                        return { id: Math.random().toString(36).substr(2, 9), ...JSON.parse(part) };
                    }
                    return { id: Math.random().toString(36).substr(2, 9), text: part };
                });
                this.text = result;
            },
            open: function () {
                var self = this;
                this.isOpened = true;
                if (this.autoClose) {
                    this.clearAutoclose();
                    this.timer = setTimeout(function () { self.close(); }, this.autoCloseDelay);
                }
            },
            close: function (emit) {
                this.isOpened = false;
                if (emit) this.appEmitter.emit("close");
            },
            clearAutoclose: function () {
                if (this.timer) clearTimeout(this.timer);
            }
        }
    };

    // ============================================================================
    // APPS LOADER COMPONENT (from ViewerApp.js line 3648)
    // ============================================================================

    /**
     * AppsLoader - Full-page loading screen
     */
    var AppsLoader = {
        name: "AppsLoader",
        components: {
            // AppLoader resolved at runtime
        },
        props: {
            loading: { type: Boolean, default: false },
            title: { type: String, default: "" },
            subtitle: { type: String, default: "" }
        },
        data: function () {
            return {
                hasError: false,
                errorText: ""
            };
        },
        computed: {
            isLoading: function () {
                return this.loading && !this.hasError;
            }
        },
        methods: {
            setError: function (text) {
                this.hasError = true;
                this.errorText = text || "An error occurred";
            },
            clearError: function () {
                this.hasError = false;
                this.errorText = "";
            }
        }
    };

    // ============================================================================
    // MAIN TABS COMPONENT (from ViewerApp.js line 607)
    // ============================================================================

    /**
     * AppMainTabs - Header tab navigation
     */
    var AppMainTabs = {
        name: "AppMainTabs",
        components: {
            // AfsText, AfsIcon, AfsContextMenu, AfsBadge resolved at runtime
        },
        directives: {
            // dropdown, hint directives resolved at runtime
        },
        props: {
            items: {
                type: Array,
                default: function () { return []; },
                validator: function (arr) {
                    return !arr.length || arr.every(function (e) {
                        return e.text !== undefined && e.id !== undefined;
                    });
                }
            }
        },
        data: function () {
            return { isMenuOpened: false, hintText: null };
        },
        computed: {
            hasTabs: function () {
                return this.items.length;
            },
            menuId: function () {
                return "app-main-tabs__menu";
            },
            reducedItems: function () {
                return this.items.reduce(function (acc, item) {
                    if (!item.hidden) {
                        if (item.isActive) {
                            acc.active = item;
                        } else {
                            acc.nonActive.push(item);
                        }
                        acc.mapped[item.id] = item;
                    }
                    return acc;
                }, { active: {}, nonActive: [], mapped: {} });
            },
            isWip: function () {
                return false;
            }
        },
        methods: {
            onClick: function (item) {
                this.$emit("change", item);
                if (this.$refs[this.menuId]) {
                    this.$refs[this.menuId].close();
                }
            },
            toggleIsOpened: function () {
                this.isMenuOpened = !this.isMenuOpened;
            },
            onHintOpen: function (item) {
                var self = this;
                return function () {
                    self.hintText = self.reducedItems.mapped[item.id].hint;
                };
            },
            onHintClose: function () {
                var self = this;
                return function () {
                    self.hintText = null;
                };
            }
        }
    };

    // ============================================================================
    // APP HEADER COMPONENT (from ViewerApp.js line 1165)
    // ============================================================================

    /**
     * AppHeader - Main application header
     */
    var AppHeader = {
        name: "AppHeader",
        components: {
            // MainTabs, HeaderPlugins resolved at runtime
        },
        props: {
            tabs: { type: Array, default: function () { return []; } },
            primaryPlugins: { type: Array, default: function () { return []; } },
            secondaryPlugins: { type: Array, default: function () { return []; } },
            viewPlugins: { type: Array, default: function () { return []; } }
        },
        emits: ["tab-change", "plugin-click"],
        methods: {
            onTabChange: function (tab) {
                this.$emit("tab-change", tab);
            },
            onPluginClick: function (plugin) {
                this.$emit("plugin-click", plugin);
            }
        }
    };

    // ============================================================================
    // APP MENU COMPONENT (from ViewerApp.js line 4742)
    // ============================================================================

    /**
     * AppMenu - Context menu with tree items
     */
    var AppMenu = {
        name: "AppMenu",
        components: {
            // ContextMenu, TreeItem resolved at runtime
        },
        inject: [],
        data: function () {
            return { selectedItem: "" };
        },
        computed: {
            startPadding: function () {
                var items = this.items;
                if (items && items.every(function (e) {
                    return !e.child || e.child.length === 0;
                })) {
                    return 8;
                }
                return 32;
            }
        },
        methods: {
            setData: function (key, value) {
                this[key] = value;
            },
            open: function (pos) {
                this.$refs.contextMenu.open(document.body, {
                    clientX: pos ? pos.x : undefined,
                    clientY: pos ? pos.y : undefined
                });
            },
            close: function () {
                var refs = this.$refs;
                if (refs && refs.contextMenu) {
                    refs.contextMenu.close();
                } else {
                    this.onClose();
                }
            },
            onClick: function (item) {
                this.$root.$emit("item-click", item);
            },
            onClose: function () {
                this.$root.$emit("close");
            }
        }
    };

    // ============================================================================
    // EXPORTS
    // ============================================================================

    // Utilities
    exports.wrapComponent = wrapComponent;
    exports.getBEMClass = getBEMClass;
    exports.getRadiusClasses = getRadiusClasses;
    exports.joinModifiers = joinModifiers;

    // Constants (module 55592)
    exports.StateClasses = StateClasses;
    exports.CornerRadius = CornerRadius;
    exports.isFunction = isFunction;
    exports.ComponentRegistry = ComponentRegistry;

    // Grid components (modules 48226, 20533)
    exports.GridContainer = GridContainer;
    exports.WrappedGridContainer = WrappedGridContainer;
    exports.GridSection = GridSection;
    exports.WrappedGridSection = WrappedGridSection;

    // Badge
    exports.AfsBadge = AfsBadge;
    exports.WrappedAfsBadge = WrappedAfsBadge;

    // Typography
    exports.AfsText = AfsText;
    exports.WrappedAfsText = WrappedAfsText;

    // Sidebar components
    exports.AfsSidebar = AfsSidebar;
    exports.WrappedAfsSidebar = WrappedAfsSidebar;
    exports.AppSidebar = AppSidebar;

    // Loader components
    exports.AppAlert = AppAlert;
    exports.WrappedAppAlert = WrappedAppAlert;
    exports.AppLoader = AppLoader;
    exports.WrappedAppLoader = WrappedAppLoader;

    // Watermark
    exports.AppWatermark = AppWatermark;
    exports.WrappedAppWatermark = WrappedAppWatermark;

    // Snackbar (toast notifications)
    exports.AppSnackbar = AppSnackbar;

    // Header plugin
    exports.AppHeaderPlugin = AppHeaderPlugin;

    // Tree view
    exports.TreeItem = TreeItem;

    // Notification
    exports.AppNotification = AppNotification;

    // Apps loader (full page)
    exports.AppsLoader = AppsLoader;

    // Header/tabs
    exports.AppMainTabs = AppMainTabs;
    exports.AppHeader = AppHeader;
    exports.AppMenu = AppMenu;

    return exports;
}({}));
