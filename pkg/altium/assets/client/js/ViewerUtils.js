/**
 * Viewer Utilities Library
 * 
 * IIFE bundle containing shared Babel helper functions used throughout the viewer.
 * These are duplicated in the original webpack bundle and extracted here for reuse.
 * 
 * @version 1.0.0
 */
var ViewerUtils = (function (exports) {
    'use strict';

    // ============================================================================
    // Type Checking
    // ============================================================================

    /**
     * Returns the type of an object, handling Symbol properly.
     * This is Babel's _typeof helper.
     * @param {*} obj - Object to check
     * @returns {string} Type string
     */
    function getType(obj) {
        return (
            (getType =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (obj) {
                        return typeof obj;
                    }
                    : function (obj) {
                        return obj &&
                            "function" == typeof Symbol &&
                            obj.constructor === Symbol &&
                            obj !== Symbol.prototype
                            ? "symbol"
                            : typeof obj;
                    }),
            getType(obj)
        );
    }

    // ============================================================================
    // Property Key Conversion
    // ============================================================================

    /**
     * Converts a value to a valid property key.
     * This is Babel's _toPropertyKey helper.
     * @param {*} arg - Value to convert
     * @returns {string|Symbol} Property key
     */
    function toPropertyKey(arg) {
        var key = toPrimitive(arg);
        return "symbol" == getType(key) ? key : key + "";
    }

    /**
     * Converts an object to a primitive value.
     * @param {*} arg - Value to convert
     * @returns {*} Primitive value
     */
    function toPrimitive(arg) {
        if ("object" != getType(arg) || !arg) return arg;
        var prim = arg[Symbol.toPrimitive];
        if (void 0 !== prim) {
            var res = prim.call(arg, "string");
            if ("object" != getType(res)) return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(arg);
    }

    // ============================================================================
    // Class Definition Helpers
    // ============================================================================

    /**
     * Defines properties on a target from an array of descriptors.
     * This is Babel's _defineProperties helper.
     * @param {Object} target - Target object
     * @param {Array} props - Property descriptors
     */
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
        }
    }

    /**
     * Creates a class with prototype and static methods.
     * This is Babel's _createClass helper.
     * @param {Function} Constructor - Constructor function
     * @param {Array} protoProps - Prototype properties
     * @param {Array} staticProps - Static properties
     * @returns {Function} Constructor
     */
    function createClass(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
    }

    /**
     * Checks if a value is an instance of a constructor.
     * This is Babel's _classCallCheck helper.
     * @param {*} instance - Instance to check
     * @param {Function} Constructor - Constructor function
     */
    function classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    // ============================================================================
    // Object Property Helpers
    // ============================================================================

    /**
     * Defines a property on an object with proper descriptors.
     * This is Babel's _defineProperty helper.
     * @param {Object} obj - Target object
     * @param {string} key - Property key
     * @param {*} value - Property value
     * @returns {Object} The modified object
     */
    function defineProperty(obj, key, value) {
        key = toPropertyKey(key);
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }

    /**
     * Gets all own enumerable keys of an object including symbols.
     * This is Babel's _objectKeys helper for object spread.
     * @param {Object} obj - Object to get keys from
     * @param {boolean} enumerableOnly - Only include enumerable properties
     * @returns {Array} Array of keys
     */
    function getOwnKeys(obj, enumerableOnly) {
        var keys = Object.keys(obj);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(obj);
            if (enumerableOnly) {
                symbols = symbols.filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
                });
            }
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    /**
     * Spreads properties from source objects to target.
     * This is Babel's _objectSpread2 helper.
     * @param {Object} target - Target object
     * @returns {Object} Target with spreaded properties
     */
    function objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            if (i % 2) {
                getOwnKeys(Object(source), true).forEach(function (key) {
                    defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                getOwnKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(
                        target,
                        key,
                        Object.getOwnPropertyDescriptor(source, key)
                    );
                });
            }
        }
        return target;
    }

    // ============================================================================
    // Inheritance Helpers
    // ============================================================================

    /**
     * Sets the prototype of an object.
     * @param {Object} obj - Object to modify
     * @param {Object} proto - New prototype
     * @returns {Object} Modified object
     */
    function setPrototypeOf(obj, proto) {
        if (Object.setPrototypeOf) {
            return Object.setPrototypeOf(obj, proto);
        }
        obj.__proto__ = proto;
        return obj;
    }

    /**
     * Gets the prototype of an object.
     * @param {Object} obj - Object to check
     * @returns {Object} Prototype
     */
    function getPrototypeOf(obj) {
        if (Object.getPrototypeOf) {
            return Object.getPrototypeOf(obj);
        }
        return obj.__proto__ || Object.getPrototypeOf(obj);
    }

    /**
     * Sets up inheritance between subclass and superclass.
     * This is Babel's _inherits helper.
     * @param {Function} subClass - Child class
     * @param {Function} superClass - Parent class
     */
    function inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, writable: true, configurable: true }
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) setPrototypeOf(subClass, superClass);
    }

    /**
     * Checks if native Reflect.construct is available.
     * @returns {boolean} True if available
     */
    function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }));
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * Creates a super constructor caller for derived classes.
     * This is Babel's _createSuper helper.
     * @param {Function} Derived - The derived class
     * @returns {Function} Super constructor caller
     */
    function createSuper(Derived) {
        var hasNativeReflect = isNativeReflectConstruct();
        return function callSuper() {
            var Super = getPrototypeOf(Derived);
            var result;
            if (hasNativeReflect) {
                var NewTarget = getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return possibleConstructorReturn(this, result);
        };
    }

    /**
     * Handles the return value from a constructor.
     * This is Babel's _possibleConstructorReturn helper.
     * @param {Object} self - The 'this' context
     * @param {*} call - Result from super constructor
     * @returns {Object} Final instance
     */
    function possibleConstructorReturn(self, call) {
        if (call && (getType(call) === "object" || typeof call === "function")) {
            return call;
        }
        if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return assertThisInitialized(self);
    }

    /**
     * Asserts that 'this' has been initialized.
     * This is Babel's _assertThisInitialized helper.
     * @param {Object} self - The 'this' context
     * @returns {Object} The initialized object
     */
    function assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
    }

    // ============================================================================
    // Utility Functions
    // ============================================================================

    /**
     * Checks if an object has a property.
     * @param {Object} obj - Object to check
     * @param {string} prop - Property name
     * @returns {boolean} True if property exists
     */
    function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    // ============================================================================
    // Unique ID Helper
    // ============================================================================

    /**
     * Generates a unique ID (UUID v4 style).
     * @returns {string} Unique ID
     */
    function getUniqueId() {
        return ["", "", "-", "-", "-", "-", "", "", ""].reduce(
            function (e, t) {
                return (
                    e +
                    Math.floor(65536 * (1 + Math.random()))
                        .toString(16)
                        .substring(1) +
                    t
                );
            }
        );
    }

    // ============================================================================
    // Exports
    // ============================================================================

    exports.getType = getType;
    exports.toPropertyKey = toPropertyKey;
    exports.toPrimitive = toPrimitive;
    exports.defineProperties = defineProperties;
    exports.createClass = createClass;
    exports.classCallCheck = classCallCheck;
    exports.defineProperty = defineProperty;
    exports.getOwnKeys = getOwnKeys;
    exports.objectSpread = objectSpread;
    exports.setPrototypeOf = setPrototypeOf;
    exports.getPrototypeOf = getPrototypeOf;
    exports.inherits = inherits;
    exports.isNativeReflectConstruct = isNativeReflectConstruct;
    exports.createSuper = createSuper;
    exports.possibleConstructorReturn = possibleConstructorReturn;
    exports.assertThisInitialized = assertThisInitialized;
    exports.hasOwnProperty = hasOwnProperty;
    exports.getUniqueId = getUniqueId;

    // Aliases matching Babel output naming
    exports._typeof = getType;
    exports._toPropertyKey = toPropertyKey;
    exports._defineProperties = defineProperties;
    exports._createClass = createClass;
    exports._classCallCheck = classCallCheck;
    exports._defineProperty = defineProperty;
    exports._objectSpread2 = objectSpread;
    exports._inherits = inherits;
    exports._createSuper = createSuper;
    exports._possibleConstructorReturn = possibleConstructorReturn;
    exports._assertThisInitialized = assertThisInitialized;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
