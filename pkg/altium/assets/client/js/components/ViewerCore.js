/**
 * ViewerCore.js - Core Utilities and Constants
 * 
 * Contains fundamental utilities used by all other component modules.
 * This file MUST be loaded first before other Viewer component files.
 * 
 * Requires: Vue (global)
 */
var ViewerCore = (function (exports) {
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

    /**
     * Joins modifiers into a class string
     */
    function joinModifiers(modifiers, prefix) {
        return modifiers.join(" " + prefix + "_").replace(/^\s+|\s+$/g, "");
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
    // EXPORTS
    // ============================================================================

    exports.wrapComponent = wrapComponent;
    exports.getBEMClass = getBEMClass;
    exports.getRadiusClasses = getRadiusClasses;
    exports.joinModifiers = joinModifiers;
    exports.StateClasses = StateClasses;
    exports.CornerRadius = CornerRadius;
    exports.isFunction = isFunction;
    exports.ComponentRegistry = ComponentRegistry;

    return exports;
}({}));
