/**
 * ViewerComponents/core.js
 * 
 * Core utilities, constants, and helper functions.
 * Extracted from ViewerComponents.js for modularity.
 */
(function(global) {
    'use strict';

    global.ViewerComponents = global.ViewerComponents || {};
    global.ViewerComponents.Factories = global.ViewerComponents.Factories || {};

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
     * Factories.defineProperties helper for class definition
     */
    global.ViewerComponents.Factories.defineProperties = function(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            "value" in r && (r.writable = !0);
            Object.defineProperty(e, r.key, r);
        }
        return true;
    };

    console.log('[ViewerComponents/core] Loaded');

})(typeof window !== 'undefined' ? window : this);
