/**
 * Search Plugin - Utility Functions
 * Shared helper functions for async operations and object manipulation
 */
"use strict";

(function (Search) {
    /**
     * Type checking function
     */
    function getType(e) {
        return (
            (getType =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                    }
                    : function (e) {
                        return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                    }),
            getType(e)
        );
    }

    /**
     * Get object keys including symbols
     */
    function getKeysWithSymbols(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            if (t) {
                n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                });
            }
            r.push.apply(r, n);
        }
        return r;
    }

    /**
     * Object spread helper
     */
    function spread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            if (t % 2) {
                getKeysWithSymbols(Object(r), true).forEach(function (t) {
                    defineProperty(e, t, r[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
            } else {
                getKeysWithSymbols(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
            }
        }
        return e;
    }

    /**
     * Define property helper
     */
    function defineProperty(e, t, r) {
        t = toPrimitiveKey(t);
        if (t in e) {
            Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true,
            });
        } else {
            e[t] = r;
        }
        return e;
    }

    /**
     * Convert key to primitive
     */
    function toPrimitiveKey(t) {
        var result = (function (e) {
            if ("object" != getType(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != getType(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
        })(t);
        return "symbol" == getType(result) ? result : result + "";
    }

    /**
     * Async generator step helper
     */
    function asyncGeneratorStep(e, t, r, n, o, i, c) {
        try {
            var a = e[i](c),
                u = a.value;
        } catch (e) {
            return void r(e);
        }
        a.done ? t(u) : Promise.resolve(u).then(n, o);
    }

    /**
     * Convert to async function
     */
    function asyncToGenerator(e) {
        return function () {
            var t = this,
                r = arguments;
            return new Promise(function (n, o) {
                var i = e.apply(t, r);
                function c(e) {
                    asyncGeneratorStep(i, n, o, c, a, "next", e);
                }
                function a(e) {
                    asyncGeneratorStep(i, n, o, c, a, "throw", e);
                }
                c(void 0);
            });
        };
    }

    // Export to namespace
    Search.utils = {
        getType: getType,
        getKeysWithSymbols: getKeysWithSymbols,
        spread: spread,
        defineProperty: defineProperty,
        toPrimitiveKey: toPrimitiveKey,
        asyncGeneratorStep: asyncGeneratorStep,
        asyncToGenerator: asyncToGenerator,
    };

})(window.Search = window.Search || {});
