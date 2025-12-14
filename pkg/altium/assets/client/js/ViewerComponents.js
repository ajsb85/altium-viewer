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
    // GRID CONTAINER (from module 48226)
    // ============================================================================

    /**
     * Joins modifiers into a class string
     */
    function joinModifiers(modifiers, prefix) {
        return modifiers.join(" " + prefix + "_").replace(/^\s+|\s+$/g, "");
    }

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

    // ============================================================================
    // EXPORTS
    // ============================================================================

    // Utilities
    exports.wrapComponent = wrapComponent;
    exports.getBEMClass = getBEMClass;
    exports.getRadiusClasses = getRadiusClasses;
    exports.joinModifiers = joinModifiers;

    // Grid components
    exports.GridContainer = GridContainer;
    exports.WrappedGridContainer = WrappedGridContainer;

    // Typography
    exports.AfsText = AfsText;
    exports.WrappedAfsText = WrappedAfsText;

    // Sidebar components
    exports.AfsSidebar = AfsSidebar;
    exports.WrappedAfsSidebar = WrappedAfsSidebar;
    exports.AppSidebar = AppSidebar;

    // Loader components
    exports.AppAlert = AppAlert;
    exports.AppLoader = AppLoader;

    return exports;
}({}));
