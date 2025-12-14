/**
 * ViewerGrid.js - Grid Layout Components
 * 
 * Contains grid container and section components.
 * 
 * Requires: Vue (global), ViewerCore (global)
 */
var ViewerGrid = (function (exports) {
    'use strict';

    // Import from ViewerCore
    var wrapComponent = ViewerCore.wrapComponent;
    var joinModifiers = ViewerCore.joinModifiers;

    // ============================================================================
    // GRID SECTION (from module 20533)
    // ============================================================================

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

    var WrappedGridSection = wrapComponent(GridSection, [
        ["render", renderGridSection]
    ]);

    // ============================================================================
    // GRID CONTAINER (from module 48226)
    // ============================================================================

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

    var WrappedGridContainer = wrapComponent(GridContainer, [
        ["render", renderGridContainer]
    ]);

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.GridSection = GridSection;
    exports.WrappedGridSection = WrappedGridSection;
    exports.GridContainer = GridContainer;
    exports.WrappedGridContainer = WrappedGridContainer;

    return exports;
}({}));
