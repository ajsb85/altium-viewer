/**
 * BoardItemsVisibility - Utility Functions
 * Shared helper functions for type checking, object manipulation, and array operations
 */
"use strict";

(function (BoardItemsVisibility) {
    /**
     * Type checking function (handles Symbol.iterator)
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
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            if (t) {
                n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                });
            }
            i.push.apply(i, n);
        }
        return i;
    }

    /**
     * Object spread helper
     */
    function spread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            if (t % 2) {
                getKeysWithSymbols(Object(i), true).forEach(function (t) {
                    defineProperty(e, t, i[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(i));
            } else {
                getKeysWithSymbols(Object(i)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                });
            }
        }
        return e;
    }

    /**
     * Define property helper with Symbol handling
     */
    function defineProperty(e, t, i) {
        t = toPrimitiveKey(t);
        if (t in e) {
            Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true,
            });
        } else {
            e[t] = i;
        }
        return e;
    }

    /**
     * Convert key to primitive (handles Symbol.toPrimitive)
     */
    function toPrimitiveKey(t) {
        var result = (function (e, t) {
            if ("object" != getType(e) || !e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var n = i.call(e, "string");
                if ("object" != getType(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
        })(t);
        return "symbol" == getType(result) ? result : result + "";
    }

    /**
     * Convert iterable to array (handles various types)
     */
    function toArray(e) {
        return (
            arrayFromArrayLike(e) ||
            arrayFromIterable(e) ||
            arrayFromArrayLikeObject(e) ||
            throwNonIterable()
        );
    }

    function arrayFromArrayLike(e) {
        if (Array.isArray(e)) return copyArray(e);
    }

    function arrayFromIterable(e) {
        if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
        )
            return Array.from(e);
    }

    function arrayFromArrayLikeObject(e, t) {
        if (e) {
            if ("string" == typeof e) return copyArray(e, t);
            var i = {}.toString.call(e).slice(8, -1);
            if ("Object" === i && e.constructor) {
                i = e.constructor.name;
            }
            if ("Map" === i || "Set" === i) {
                return Array.from(e);
            }
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) {
                return copyArray(e, t);
            }
        }
    }

    function copyArray(e, t) {
        if (null == t || t > e.length) t = e.length;
        var n = Array(t);
        for (var i = 0; i < t; i++) n[i] = e[i];
        return n;
    }

    function throwNonIterable() {
        throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
    }

    // Export to namespace
    BoardItemsVisibility.utils = {
        getType: getType,
        getKeysWithSymbols: getKeysWithSymbols,
        spread: spread,
        defineProperty: defineProperty,
        toPrimitiveKey: toPrimitiveKey,
        toArray: toArray,
        copyArray: copyArray,
    };

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
