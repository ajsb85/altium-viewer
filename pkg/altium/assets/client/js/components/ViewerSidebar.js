/**
 * ViewerSidebar.js - Sidebar Components
 * 
 * Contains resizable sidebar components.
 * 
 * Requires: Vue (global), ViewerCore (global)
 */
var ViewerSidebar = (function (exports) {
    'use strict';

    var wrapComponent = ViewerCore.wrapComponent;

    // ============================================================================
    // AFS SIDEBAR
    // ============================================================================

    var AfsSidebar = {
        name: "AfsSidebar",
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
                if (this.resizable) base.push("afs-sidebar-container_resizable");
                return base;
            }
        },
        watch: {
            isResizing: function (val) {
                if (val) {
                    document.addEventListener("mousemove", this.handleResize);
                    document.addEventListener("mouseup", this.handleResizeEnd);
                    document.addEventListener("mouseout", this.handleMouseOutOfWindow);
                    document.body.style.pointerEvents = "none";
                    var resizer = document.querySelector(".afs-sidebar-container__resizer");
                    if (resizer) resizer.style.pointerEvents = "auto";
                } else {
                    document.removeEventListener("mousemove", this.handleResize);
                    document.removeEventListener("mouseup", this.handleResizeEnd);
                    document.removeEventListener("mouseout", this.handleMouseOutOfWindow);
                    document.body.style.pointerEvents = "auto";
                }
            }
        },
        methods: {
            handleResizeStart: function () { this.isResizing = true; },
            handleResizeEnd: function () {
                this.isResizing = false;
                this.$emit("size-changed", this.width);
            },
            handleResize: function (e) {
                var t = this.side === "right" ? window.innerWidth - e.pageX : e.pageX;
                if (t >= this.minWidth && t <= this.maxWidth) this.width = t + 2;
            },
            handleMouseOutOfWindow: function (e) {
                if (e.toElement == null && e.relatedTarget == null) this.isResizing = false;
            },
            setWidth: function (e) {
                var delta = (e.type === "add" ? 1 : -1) * e.value;
                var t = delta + this.width;
                if (t < this.minWidth) this.width = this.minWidth;
                else if (t > this.maxWidth) this.width = this.maxWidth;
                else this.width = t;
                this.handleResizeEnd();
            }
        }
    };

    function renderAfsSidebar(ctx, cache, props, setup, data, options) {
        var GridContainer = Vue.resolveComponent("GridContainer");
        return (
            Vue.openBlock(),
            Vue.createBlock(GridContainer, {
                type: "sidebar", direction: "column",
                class: Vue.normalizeClass(["afs-sidebar-container", options.classes]),
                style: Vue.normalizeStyle({ width: ctx.width + "px" })
            }, {
                default: Vue.withCtx(function () {
                    var children = [];
                    if (props.resizable && props.side === "right") {
                        children.push(Vue.createElementVNode("div", {
                            key: 0, class: "afs-sidebar-container__resizer",
                            onMousedown: cache[0] || (cache[0] = function () { return options.handleResizeStart(); })
                        }, null, 32));
                    }
                    children.push(Vue.renderSlot(ctx.$slots, "default"));
                    if (props.resizable && props.side === "left") {
                        children.push(Vue.createElementVNode("div", {
                            key: 1, class: "afs-sidebar-container__resizer",
                            onMousedown: cache[1] || (cache[1] = function () { return options.handleResizeStart(); })
                        }, null, 32));
                    }
                    return children;
                }),
                _: 3
            }, 8, ["class", "style"])
        );
    }

    var WrappedAfsSidebar = wrapComponent(AfsSidebar, [["render", renderAfsSidebar]]);

    // ============================================================================
    // APP SIDEBAR
    // ============================================================================

    var AppSidebar = {
        name: "AppSidebar",
        components: { AfsSidebar: WrappedAfsSidebar },
        props: {
            metaInfo: { type: Object, default: function () { return {}; } },
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
            hasSlot: function (name) { return !!this.$slots[name]; }
        }
    };

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.AfsSidebar = AfsSidebar;
    exports.WrappedAfsSidebar = WrappedAfsSidebar;
    exports.AppSidebar = AppSidebar;

    return exports;
}({}));
