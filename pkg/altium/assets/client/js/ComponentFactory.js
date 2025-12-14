/**
 * ComponentFactory Standalone Library
 * 
 * IIFE bundle for Views, Plugins, and Engines factory.
 * Provides base classes for the Altium Viewer component system.
 * 
 * @version 1.0.0
 */
var ComponentFactory = (function (exports) {
    'use strict';

    // ============================================================================
    // Type Checking Utilities
    // ============================================================================

    /**
     * Returns the type of an object, handling Symbol properly.
     * @param {*} obj - Object to check
     * @returns {string} Type string
     */
    function getType(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            return typeof obj;
        }
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
    }

    // ============================================================================
    // Class Definition Helpers
    // ============================================================================

    /**
     * Defines properties on a target object from an array of property descriptors.
     * @param {Object} target - Target object
     * @param {Array} properties - Array of property descriptors
     */
    function defineClassProperties(target, properties) {
        for (var i = 0; i < properties.length; i++) {
            var descriptor = properties[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
        }
    }

    /**
     * Converts a value to a valid property key.
     * @param {*} arg - Value to convert
     * @returns {string|Symbol} Property key
     */
    function toPropertyKey(arg) {
        var key = toPrimitive(arg);
        return typeof key === "symbol" ? key : String(key);
    }

    /**
     * Converts an object to a primitive value.
     * @param {*} arg - Value to convert
     * @returns {*} Primitive value
     */
    function toPrimitive(arg) {
        if (getType(arg) !== "object" || !arg) return arg;
        var primitiveMethod = arg[Symbol.toPrimitive];
        if (primitiveMethod !== undefined) {
            var result = primitiveMethod.call(arg, "string");
            if (getType(result) !== "object") return result;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(arg);
    }

    /**
     * Creates a class with prototype and static methods.
     * @param {Function} Constructor - Constructor function
     * @param {Array} protoProps - Prototype properties
     * @param {Array} staticProps - Static properties
     * @returns {Function} Constructor with defined properties
     */
    function createClass(Constructor, protoProps, staticProps) {
        if (protoProps) defineClassProperties(Constructor.prototype, protoProps);
        if (staticProps) defineClassProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
    }

    // ============================================================================
    // Inheritance Helpers
    // ============================================================================

    /**
     * Sets up inheritance between subclass and superclass.
     * @param {Function} subClass - Child class
     * @param {Function} superClass - Parent class
     */
    function inheritsFrom(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, writable: true, configurable: true },
        });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass) setPrototype(subClass, superClass);
    }

    /**
     * Sets the prototype of an object.
     * @param {Object} obj - Object to modify
     * @param {Object} proto - New prototype
     * @returns {Object} Modified object
     */
    function setPrototype(obj, proto) {
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
    function getPrototype(obj) {
        if (Object.getPrototypeOf) {
            return Object.getPrototypeOf(obj);
        }
        return obj.__proto__ || Object.getPrototypeOf(obj);
    }

    /**
     * Checks if native Reflect.construct is available.
     * @returns {boolean} True if available
     */
    function hasNativeReflectConstruct() {
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
     * @param {Function} DerivedClass - The derived class
     * @returns {Function} Super constructor caller
     */
    function createSuperConstructor(DerivedClass) {
        var useNativeReflect = hasNativeReflectConstruct();
        return function callSuperConstructor() {
            var SuperClass = getPrototype(DerivedClass);
            var result;
            if (useNativeReflect) {
                var NewTarget = getPrototype(this).constructor;
                result = Reflect.construct(SuperClass, arguments, NewTarget);
            } else {
                result = SuperClass.apply(this, arguments);
            }
            return handleConstructorReturn(this, result);
        };
    }

    /**
     * Handles the return value from a constructor.
     * @param {Object} self - The 'this' context
     * @param {*} callResult - Result from super constructor
     * @returns {Object} Final instance
     */
    function handleConstructorReturn(self, callResult) {
        if (callResult && (getType(callResult) === "object" || typeof callResult === "function")) {
            return callResult;
        }
        if (callResult !== undefined) {
            throw new TypeError("Derived constructors may only return object or undefined");
        }
        return assertInitialized(self);
    }

    /**
     * Asserts that 'this' has been initialized.
     * @param {Object} self - The 'this' context
     * @returns {Object} The initialized object
     */
    function assertInitialized(self) {
        if (self === undefined) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
    }

    // ============================================================================
    // Async/Await Runtime (Generator-based Promises)
    // ============================================================================

    /**
     * Creates the async runtime for generator-based async/await.
     * This is a simplified regenerator runtime.
     * @returns {Object} Runtime with mark, wrap, async methods
     */
    function createAsyncRuntime() {
        var runtime = {};
        var GeneratorState = {
            SUSPENDED_START: "suspendedStart",
            SUSPENDED_YIELD: "suspendedYield",
            EXECUTING: "executing",
            COMPLETED: "completed"
        };
        var CONTINUE_SENTINEL = {};

        // Iterator symbol
        var iteratorSymbol = (typeof Symbol === "function" ? Symbol : {}).iterator || "@@iterator";
        var asyncIteratorSymbol = (typeof Symbol === "function" ? Symbol : {}).asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = (typeof Symbol === "function" ? Symbol : {}).toStringTag || "@@toStringTag";

        /**
         * Tries to invoke a method and catches any errors.
         */
        function tryInvoke(fn, context, arg) {
            try {
                return { type: "normal", arg: fn.call(context, arg) };
            } catch (err) {
                return { type: "throw", arg: err };
            }
        }

        /**
         * Base generator function.
         */
        function GeneratorFunction() { }
        function GeneratorFunctionPrototype() { }
        function Generator() { }

        // Set up prototype chain
        var IteratorPrototype = {};
        Object.defineProperty(IteratorPrototype, iteratorSymbol, {
            value: function () { return this; },
            writable: true,
            configurable: true
        });

        var nativeGetPrototype = Object.getPrototypeOf;
        var NativeIteratorPrototype = nativeGetPrototype && nativeGetPrototype(nativeGetPrototype(createValuesIterator([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Object.prototype &&
            Object.prototype.hasOwnProperty.call(NativeIteratorPrototype, iteratorSymbol)) {
            IteratorPrototype = NativeIteratorPrototype;
        }

        var GeneratorPrototype = Generator.prototype = GeneratorFunction.prototype = Object.create(IteratorPrototype);
        GeneratorFunctionPrototype.prototype = GeneratorPrototype.constructor = GeneratorFunction;
        GeneratorFunction.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.displayName = "GeneratorFunction";

        /**
         * Creates an iterator from an array for values().
         */
        function createValuesIterator(iterable) {
            if (!iterable && iterable !== "") return;
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var index = -1;
                var next = function nextValue() {
                    while (++index < iterable.length) {
                        if (Object.prototype.hasOwnProperty.call(iterable, index)) {
                            next.value = iterable[index];
                            next.done = false;
                            return next;
                        }
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
            throw new TypeError(getType(iterable) + " is not iterable");
        }

        /**
         * Context object for tracking generator state.
         */
        function GeneratorContext(tryLocsList) {
            this.tryEntries = [{ tryLoc: "root" }];
            (tryLocsList || []).forEach(this.pushTryEntry, this);
            this.reset(true);
        }

        GeneratorContext.prototype = {
            constructor: GeneratorContext,

            reset: function (skipTempReset) {
                this.prev = 0;
                this.next = 0;
                this.sent = this._sent = undefined;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = undefined;
                this.tryEntries.forEach(function (entry) {
                    entry.completion = entry.completion || {};
                    entry.completion.type = "normal";
                    delete entry.completion.arg;
                });
                if (!skipTempReset) {
                    for (var name in this) {
                        if (name.charAt(0) === "t" && Object.prototype.hasOwnProperty.call(this, name) && !isNaN(+name.slice(1))) {
                            this[name] = undefined;
                        }
                    }
                }
            },

            stop: function () {
                this.done = true;
                var rootCompletion = this.tryEntries[0].completion;
                if (rootCompletion.type === "throw") throw rootCompletion.arg;
                return this.rval;
            },

            dispatchException: function (exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                    record.type = "throw";
                    record.arg = exception;
                    context.next = loc;
                    if (caught) {
                        context.method = "next";
                        context.arg = undefined;
                    }
                    return !!caught;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    var record = entry.completion;
                    if (entry.tryLoc === "root") return handle("end");
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = Object.prototype.hasOwnProperty.call(entry, "catchLoc");
                        var hasFinally = Object.prototype.hasOwnProperty.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        } else if (hasFinally) {
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else {
                            throw new Error("try statement without catch or finally");
                        }
                    }
                }
            },

            abrupt: function (type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && Object.prototype.hasOwnProperty.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }
                if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                    finallyEntry = null;
                }
                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;
                if (finallyEntry) {
                    this.method = "next";
                    this.next = finallyEntry.finallyLoc;
                    return CONTINUE_SENTINEL;
                }
                return this.complete(record);
            },

            complete: function (record, afterLoc) {
                if (record.type === "throw") throw record.arg;
                if (record.type === "break" || record.type === "continue") {
                    this.next = record.arg;
                } else if (record.type === "return") {
                    this.rval = this.arg = record.arg;
                    this.method = "return";
                    this.next = "end";
                } else if (record.type === "normal" && afterLoc) {
                    this.next = afterLoc;
                }
                return CONTINUE_SENTINEL;
            },

            finish: function (finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) {
                        this.complete(entry.completion, entry.afterLoc);
                        entry.completion = { type: "normal" };
                        return CONTINUE_SENTINEL;
                    }
                }
            },

            catch: function (tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if (record.type === "throw") {
                            var thrown = record.arg;
                            entry.completion = { type: "normal" };
                        }
                        return thrown;
                    }
                }
                throw new Error("illegal catch attempt");
            },

            delegateYield: function (iterable, resultName, nextLoc) {
                this.delegate = {
                    iterator: createValuesIterator(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                };
                if (this.method === "next") {
                    this.arg = undefined;
                }
                return CONTINUE_SENTINEL;
            },

            pushTryEntry: function (locs) {
                var entry = { tryLoc: locs[0] };
                if (1 in locs) entry.catchLoc = locs[1];
                if (2 in locs) {
                    entry.finallyLoc = locs[2];
                    entry.afterLoc = locs[3];
                }
                this.tryEntries.push(entry);
            }
        };

        /**
         * Creates wrapper for generator execution.
         */
        function makeInvokeMethod(innerFn, self, context) {
            var state = GeneratorState.SUSPENDED_START;
            return function invoke(method, arg) {
                if (state === GeneratorState.EXECUTING) {
                    throw new Error("Generator is already running");
                }
                if (state === GeneratorState.COMPLETED) {
                    if (method === "throw") throw arg;
                    return { value: undefined, done: true };
                }
                context.method = method;
                context.arg = arg;
                while (true) {
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === CONTINUE_SENTINEL) continue;
                            return delegateResult;
                        }
                    }
                    if (context.method === "next") {
                        context.sent = context._sent = context.arg;
                    } else if (context.method === "throw") {
                        if (state === GeneratorState.SUSPENDED_START) {
                            state = GeneratorState.COMPLETED;
                            throw context.arg;
                        }
                        context.dispatchException(context.arg);
                    } else if (context.method === "return") {
                        context.abrupt("return", context.arg);
                    }
                    state = GeneratorState.EXECUTING;
                    var record = tryInvoke(innerFn, self, context);
                    if (record.type === "normal") {
                        state = context.done ? GeneratorState.COMPLETED : GeneratorState.SUSPENDED_YIELD;
                        if (record.arg === CONTINUE_SENTINEL) continue;
                        return { value: record.arg, done: context.done };
                    }
                    if (record.type === "throw") {
                        state = GeneratorState.COMPLETED;
                        context.method = "throw";
                        context.arg = record.arg;
                    }
                }
            };
        }

        /**
         * Handles delegate iterator invocation.
         */
        function maybeInvokeDelegate(delegate, context) {
            var method = context.method;
            var iterator = delegate.iterator;
            var methodFn = iterator[method];
            if (methodFn === undefined) {
                context.delegate = null;
                if (method === "throw" && iterator.return) {
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") return CONTINUE_SENTINEL;
                }
                if (method !== "return") {
                    context.method = "throw";
                    context.arg = new TypeError("The iterator does not provide a '" + method + "' method");
                }
                return CONTINUE_SENTINEL;
            }
            var record = tryInvoke(methodFn, iterator, context.arg);
            if (record.type === "throw") {
                context.method = "throw";
                context.arg = record.arg;
                context.delegate = null;
                return CONTINUE_SENTINEL;
            }
            var info = record.arg;
            if (!info) {
                context.method = "throw";
                context.arg = new TypeError("iterator result is not an object");
                context.delegate = null;
                return CONTINUE_SENTINEL;
            }
            if (info.done) {
                context[delegate.resultName] = info.value;
                context.next = delegate.nextLoc;
                if (context.method !== "return") {
                    context.method = "next";
                    context.arg = undefined;
                }
                context.delegate = null;
                return CONTINUE_SENTINEL;
            }
            return info;
        }

        // Define iterator methods on generator prototype
        ["next", "throw", "return"].forEach(function (method) {
            GeneratorPrototype[method] = function (arg) {
                return this._invoke(method, arg);
            };
        });

        Object.defineProperty(GeneratorPrototype, toStringTagSymbol, {
            value: "Generator",
            configurable: true
        });

        Object.defineProperty(GeneratorPrototype, iteratorSymbol, {
            value: function () { return this; }
        });

        GeneratorPrototype.toString = function () {
            return "[object Generator]";
        };

        /**
         * Wraps a generator function.
         */
        runtime.wrap = function (innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof GeneratorFunction ? outerFn : GeneratorFunction;
            var generator = Object.create(protoGenerator.prototype);
            var context = new GeneratorContext(tryLocsList || []);
            Object.defineProperty(generator, "_invoke", {
                value: makeInvokeMethod(innerFn, self, context)
            });
            return generator;
        };

        /**
         * Marks a function as a generator.
         */
        runtime.mark = function (genFn) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(genFn, GeneratorFunctionPrototype);
            } else {
                genFn.__proto__ = GeneratorFunctionPrototype;
                Object.defineProperty(genFn, toStringTagSymbol, {
                    value: "GeneratorFunction",
                    configurable: true
                });
            }
            genFn.prototype = Object.create(GeneratorPrototype);
            return genFn;
        };

        /**
         * Wraps an async operation.
         */
        runtime.awrap = function (arg) {
            return { __await: arg };
        };

        /**
         * Creates an async iterator from a generator.
         */
        function AsyncIterator(generator, PromiseImpl) {
            var previousPromise;
            function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function (resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = previousPromise
                    ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                    : callInvokeWithMethodAndArg();
            }
            function invoke(method, arg, resolve, reject) {
                var record = tryInvoke(generator[method], generator, arg);
                if (record.type === "throw") {
                    reject(record.arg);
                } else {
                    var result = record.arg;
                    var value = result.value;
                    if (value && getType(value) === "object" && Object.prototype.hasOwnProperty.call(value, "__await")) {
                        PromiseImpl.resolve(value.__await).then(
                            function (value) { invoke("next", value, resolve, reject); },
                            function (err) { invoke("throw", err, resolve, reject); }
                        );
                    } else {
                        PromiseImpl.resolve(value).then(
                            function (unwrapped) { result.value = unwrapped; resolve(result); },
                            function (error) { return invoke("throw", error, resolve, reject); }
                        );
                    }
                }
            }
            Object.defineProperty(this, "_invoke", {
                value: enqueue
            });
        }

        ["next", "throw", "return"].forEach(function (method) {
            AsyncIterator.prototype[method] = function (arg) {
                return this._invoke(method, arg);
            };
        });

        Object.defineProperty(AsyncIterator.prototype, asyncIteratorSymbol, {
            value: function () { return this; }
        });

        runtime.AsyncIterator = AsyncIterator;

        /**
         * Runs an async generator function.
         */
        runtime.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            if (PromiseImpl === undefined) PromiseImpl = Promise;
            var iter = new AsyncIterator(runtime.wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return runtime.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                });
        };

        /**
         * Checks if a function is a generator function.
         */
        runtime.isGeneratorFunction = function (fn) {
            var ctor = typeof fn === "function" && fn.constructor;
            return ctor
                ? ctor === GeneratorFunctionPrototype || (ctor.displayName || ctor.name) === "GeneratorFunction"
                : false;
        };

        /**
         * Returns an iterator for object keys.
         */
        runtime.keys = function (object) {
            var keys = Object.keys(Object(object)).reverse();
            return function next() {
                while (keys.length) {
                    var key = keys.pop();
                    if (key in object) {
                        next.value = key;
                        next.done = false;
                        return next;
                    }
                }
                next.done = true;
                return next;
            };
        };

        /**
         * Returns an iterator for iterable values.
         */
        runtime.values = createValuesIterator;

        return runtime;
    }

    // Create the async runtime instance
    var asyncRuntime = createAsyncRuntime();

    // ============================================================================
    // Validation Utilities
    // ============================================================================

    var ValidationUtils = {
        /**
         * Checks if a value is a non-empty string.
         * @param {*} value - Value to check
         * @returns {boolean} True if non-empty string
         */
        mI: function isNonEmptyString(value) {
            return value !== undefined && value !== null && value !== '';
        },

        /**
         * Checks if a value is a function.
         * @param {*} value - Value to check
         * @returns {boolean} True if function
         */
        Hd: function isFunction(value) {
            return typeof value === 'function';
        },

        /**
         * Error message generators.
         */
        Qj: {
            isRequired: function (fieldName) {
                return '"' + fieldName + '" is required';
            }
        }
    };

    // ============================================================================
    // Error Codes
    // ============================================================================

    var ErrorCodes = {
        jK: {
            StoreExpired: 'STORE_EXPIRED'
        }
    };

    // ============================================================================
    // CoreComponent - Base EventEmitter Class
    // ============================================================================

    /**
     * Base class providing event emitter functionality.
     * All Views, Plugins, and Engines inherit from this.
     */
    var CoreComponent = (function () {
        function CoreComponent() {
            this.listeners = {};
            // Aliases
            this.on = this.addListener;
            this.off = this.removeListener;
        }

        /**
         * Emits an event to all registered listeners.
         * @param {string} eventName - Event name
         * @param {...*} args - Arguments to pass to listeners
         * @returns {boolean} True if event had listeners
         */
        CoreComponent.prototype.emit = function (eventName) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (!(eventName in this.listeners)) return false;
            this.listeners[eventName].slice().forEach(function (listener) {
                listener.apply(null, args);
            });
            return true;
        };

        /**
         * Registers a one-time event listener.
         * @param {string} eventName - Event name
         * @param {Function} listener - Listener function
         * @returns {CoreComponent} This instance for chaining
         */
        CoreComponent.prototype.once = function (eventName, listener) {
            var self = this;
            function onceWrapper() {
                listener.apply(null, arguments);
                self.removeListener(eventName, onceWrapper);
            }
            return this.addListener(eventName, onceWrapper);
        };

        /**
         * Removes all listeners for an event (or all events).
         * @param {string} [eventName] - Optional event name
         */
        CoreComponent.prototype.removeAllListeners = function (eventName) {
            if (eventName) {
                delete this.listeners[eventName];
            } else {
                this.listeners = {};
            }
        };

        /**
         * Returns array of registered event names.
         * @returns {string[]} Event names
         */
        CoreComponent.prototype.eventNames = function () {
            return Object.keys(this.listeners);
        };

        /**
         * Registers an event listener.
         * @param {string} eventName - Event name
         * @param {Function} listener - Listener function
         * @returns {CoreComponent} This instance for chaining
         */
        CoreComponent.prototype.addListener = function (eventName, listener) {
            if (eventName in this.listeners) {
                this.listeners[eventName].push(listener);
            } else {
                this.listeners[eventName] = [listener];
            }
            return this;
        };

        /**
         * Removes an event listener.
         * @param {string} eventName - Event name
         * @param {Function} listener - Listener function
         * @returns {CoreComponent} This instance for chaining
         */
        CoreComponent.prototype.removeListener = function (eventName, listener) {
            if (eventName in this.listeners) {
                var index = this.listeners[eventName].indexOf(listener);
                if (index > -1) {
                    this.listeners[eventName].splice(index, 1);
                }
            }
            return this;
        };

        return CoreComponent;
    })();

    // ============================================================================
    // ViewBase - Base Class for Views
    // ============================================================================

    /**
     * Base class for Views in the application.
     * Handles lifecycle (activate/deactivate), visibility, badging, and loading states.
     * @extends CoreComponent
     */
    var ViewBase = (function (SuperClass) {
        inheritsFrom(ViewBase, SuperClass);
        var callSuperConstructor = createSuperConstructor(ViewBase);

        function ViewBase(config) {
            if (!(this instanceof ViewBase)) {
                throw new TypeError("Cannot call a class as a function");
            }

            var instance = callSuperConstructor.call(this, config);

            instance.badges = [];
            instance.loader = null;
            instance._hidden = false;
            instance._events = [];
            instance.active = false;
            instance._config = config;

            // Create logger (fallback to console if __CORE__ not available)
            instance.logger = (window.__CORE__ && window.__CORE__.createLogger)
                ? window.__CORE__.createLogger(config.name)
                : { LogDebug: console.log.bind(console), LogError: console.error.bind(console) };

            instance.validateMetaInfo(config);

            // Create metaInfo with getters
            var self = instance;
            instance.metaInfo = {
                get name() { return config.name; },
                get displayName() { return config.displayName; },
                get displayIcon() { return config.displayIcon; },
                get displayItems() { return config.displayItems; },
                get displayDropdown() { return config.displayDropdown; },
                get comment() { return config.comment || ""; },
                get order() { return config.order; },
                get disabled() { return config.disabled; },
                get description() { return config.description; },
                get dependencies() { return config.dependencies || []; },
                get disableActiveBtnState() { return config.disableActiveBtnState; },
                get badges() { return self.badges || []; },
                get noView() { return config.noView || false; },
                get hint() { return config.hint; },
                get isHiddenByDefault() { return config.isHiddenByDefault; },
                get buttonMinWidth() { return config.buttonMinWidth; },
                hasControls: function () { return self.hasControls(); }
            };

            instance._keyboardHandlers = instance.createKeyboardHandlers();

            return instance;
        }

        return createClass(ViewBase, [
            {
                key: "keyboardHandlers",
                get: function () { return this._keyboardHandlers; }
            },
            {
                key: "events",
                get: function () { return this._events; }
            },
            {
                key: "hidden",
                get: function () { return this._hidden; },
                set: function (value) {
                    var previousValue = this._hidden;
                    this._hidden = value;
                    if (previousValue !== this._hidden && window.__CORE__ && window.__CORE__.bus) {
                        window.__CORE__.bus.emit(this.metaInfo.name + ":updateInterface", { hidden: this._hidden });
                    }
                }
            },
            {
                key: "setup",
                value: function () {
                    return Promise.resolve();
                }
            },
            {
                key: "activate",
                value: function (element) {
                    var view = this;
                    return new Promise(function (resolve, reject) {
                        var generator = asyncRuntime.mark(function activateGenerator() {
                            return asyncRuntime.wrap(function (context) {
                                while (true) {
                                    switch (context.prev = context.next) {
                                        case 0:
                                            context.prev = 0;
                                            view.logger.LogDebug("Activate");
                                            view.active = true;
                                            view.div = element;
                                            context.next = 6;
                                            return view.activateInternal(element);
                                        case 6:
                                            context.next = 12;
                                            break;
                                        case 8:
                                            context.prev = 8;
                                            context.t0 = context["catch"](0);
                                            view.logger.LogError("View activate error.", context.t0);
                                            view.displayError(context.t0 instanceof Error ? context.t0 : new Error("Error during view displaying."));
                                        case 12:
                                        case "end":
                                            return context.stop();
                                    }
                                }
                            }, activateGenerator, null, [[0, 8]]);
                        })();

                        function step(method, arg) {
                            try {
                                var result = generator[method](arg);
                                if (result.done) {
                                    resolve(result.value);
                                } else {
                                    Promise.resolve(result.value).then(
                                        function (value) { step("next", value); },
                                        function (error) { step("throw", error); }
                                    );
                                }
                            } catch (error) {
                                reject(error);
                            }
                        }
                        step("next");
                    });
                }
            },
            {
                key: "deactivate",
                value: function () {
                    try {
                        this.logger.LogDebug("Deactivate");
                        this.deactivateInternal();
                    } catch (error) {
                        this.logger.LogError("Deactivate view error.", error);
                    }
                    this.div = undefined;
                    this.active = false;
                    this.updateLoader();
                }
            },
            {
                key: "validateMetaInfo",
                value: function (config) {
                    if (!ValidationUtils.mI(config.name)) {
                        throw new Error(ValidationUtils.Qj.isRequired("name"));
                    }
                    if (!ValidationUtils.mI(config.displayName) && !ValidationUtils.mI(config.displayIcon)) {
                        throw new Error(ValidationUtils.Qj.isRequired("displayName or displayIcon"));
                    }
                }
            },
            {
                key: "activateInternal",
                value: function (element) {
                    // Override in subclass
                }
            },
            {
                key: "deactivateInternal",
                value: function () {
                    // Override in subclass
                }
            },
            {
                key: "createKeyboardHandlers",
                value: function () {
                    return {};
                }
            },
            {
                key: "updateLoader",
                value: function (type, message, icon, size) {
                    if (this.loader) {
                        this.loader.destroy();
                    }
                    this.loader = null;
                    if (this.active && message && type && window.__APP__ && window.__APP__.loader) {
                        var options = { message: message, type: type };
                        if (icon) options.icon = icon;
                        if (size) options.size = size;
                        this.loader = window.__APP__.loader(this.div, options);
                    }
                }
            },
            {
                key: "updatePreview",
                value: function (options) {
                    if (this.preview) {
                        this.preview.destroy();
                    }
                    this.preview = undefined;
                    if (this.active && options && window.__APP__ && window.__APP__.preview) {
                        this.preview = window.__APP__.preview(this.div, options);
                    }
                }
            },
            {
                key: "displayError",
                value: function (error) {
                    var innerCode = (error.innerError && error.innerError.code) ? error.innerError.code : null;
                    if (innerCode === ErrorCodes.jK.StoreExpired || error.code === ErrorCodes.jK.StoreExpired) {
                        this.updateLoader("error", error.message, "info-16");
                    } else {
                        this.updateLoader("error", error.message);
                    }
                }
            },
            {
                key: "hasControls",
                value: function () {
                    // Override in subclass
                }
            },
            {
                key: "setBadges",
                value: function (badges) {
                    this.badges = badges;
                }
            }
        ]);
    })(CoreComponent);

    // ============================================================================
    // PluginBase - Base Class for Plugins
    // ============================================================================

    /**
     * Base class for Plugins.
     * Plugins are UI components that extend the application's functionality.
     * @extends CoreComponent
     */
    var PluginBase = (function (SuperClass) {
        inheritsFrom(PluginBase, SuperClass);
        var callSuperConstructor = createSuperConstructor(PluginBase);

        function PluginBase(config) {
            if (!(this instanceof PluginBase)) {
                throw new TypeError("Cannot call a class as a function");
            }

            var instance = callSuperConstructor.call(this, config);

            instance._events = [];
            instance._config = config;
            instance.active = false;

            instance.logger = (window.__CORE__ && window.__CORE__.createLogger)
                ? window.__CORE__.createLogger(config.name)
                : { LogDebug: console.log.bind(console), LogError: console.error.bind(console) };

            instance.validateMetaInfo(config);

            instance.metaInfo = {
                get name() { return config.name; },
                get displayName() { return config.displayName || ""; },
                get displayIcon() { return config.displayIcon; },
                get comment() { return config.comment || ""; },
                get isGlobal() { return !!config.isGlobal; },
                get dependencies() { return config.dependencies || []; },
                get description() { return config.description || ""; },
                get hint() { return config.hint; },
                get order() { return config.order; },
                get owner() { return config.owner; },
                get localType() { return config.localType; },
                get view() { return config.view; },
                get iconFilled() { return !!config.iconFilled; },
                get displayDropdown() { return config.displayDropdown; },
                get disabled() { return config.disabled; },
                get preventModalClose() { return config.preventModalClose; },
                get disableActiveBtnState() { return config.disableActiveBtnState; }
            };

            return instance;
        }

        return createClass(PluginBase, [
            {
                key: "events",
                get: function () { return this._events; }
            },
            {
                key: "hidden",
                get: function () { return false; }
            },
            {
                key: "activate",
                value: function () {
                    try {
                        this.active = true;
                        this.logger.LogDebug("Activate");
                        this.activateInternal();
                    } catch (error) {
                        this.logger.LogError("Plugin activate error.", error);
                    }
                }
            },
            {
                key: "deactivate",
                value: function () {
                    try {
                        this.active = false;
                        this.logger.LogDebug("Deactivate");
                        this.deactivateInternal();
                    } catch (error) {
                        this.logger.LogError("Deactivate plugin error.", error);
                    }
                }
            },
            {
                key: "setup",
                value: function () {
                    return Promise.resolve();
                }
            },
            {
                key: "activateInternal",
                value: function () {
                    // Override in subclass
                }
            },
            {
                key: "deactivateInternal",
                value: function () {
                    // Override in subclass
                }
            },
            {
                key: "validateMetaInfo",
                value: function (config) {
                    if (!ValidationUtils.mI(config.name)) {
                        throw new Error(ValidationUtils.Qj.isRequired("name"));
                    }
                }
            }
        ]);
    })(CoreComponent);

    // ============================================================================
    // EngineBase - Base Class for Engines
    // ============================================================================

    /**
     * Base class for Engines.
     * Engines are background services that provide functionality to the application.
     * @extends CoreComponent
     */
    var EngineBase = (function (SuperClass) {
        inheritsFrom(EngineBase, SuperClass);
        var callSuperConstructor = createSuperConstructor(EngineBase);

        function EngineBase(config) {
            if (!(this instanceof EngineBase)) {
                throw new TypeError("Cannot call a class as a function");
            }

            var instance = callSuperConstructor.call(this, config);

            instance._events = [];
            instance._config = config;

            instance.logger = (window.__CORE__ && window.__CORE__.createLogger)
                ? window.__CORE__.createLogger(config.name)
                : { LogDebug: console.log.bind(console), LogError: console.error.bind(console) };

            instance.validateMetaInfo(config);

            instance.metaInfo = {
                get name() { return config.name; },
                get comment() { return config.comment || ""; },
                get dependencies() { return config.dependencies || []; }
            };

            return instance;
        }

        return createClass(EngineBase, [
            {
                key: "events",
                get: function () { return this._events; }
            },
            {
                key: "setup",
                value: function () {
                    return Promise.resolve();
                }
            },
            {
                key: "validateMetaInfo",
                value: function (config) {
                    if (!ValidationUtils.mI(config.name)) {
                        throw new Error(ValidationUtils.Qj.isRequired("name"));
                    }
                }
            }
        ]);
    })(CoreComponent);

    // ============================================================================
    // ComponentFactory - Main Factory Function
    // ============================================================================

    /**
     * Factory function to create components (Views, Plugins, Engines).
     * @param {Object} config - Configuration object
     * @param {string} config.type - Component type: "Engine", "View", or "Plugin"
     * @param {Function} config.create - Factory function that receives base class and args
     * @param {string} [config.description] - Optional description
     * @returns {Object} Factory object with create method
     */
    function createComponentFactory(config) {
        if (!ValidationUtils.mI(config.type)) {
            throw new Error(ValidationUtils.Qj.isRequired("type"));
        }
        if (!ValidationUtils.Hd(config.create)) {
            throw new Error('"create" is required and must be a function');
        }

        return {
            get type() {
                return config.type;
            },
            get description() {
                return config.description;
            },
            create: function (args) {
                switch (config.type) {
                    case "Engine":
                        return config.create(EngineBase, args);
                    case "View":
                        return config.create(ViewBase, args);
                    case "Plugin":
                        return config.create(PluginBase, args);
                    default:
                        throw new Error('Undefined type "' + config.type + '"');
                }
            }
        };
    }

    // ============================================================================
    // Exports
    // ============================================================================

    exports.Z = createComponentFactory;
    exports.ViewBase = ViewBase;
    exports.PluginBase = PluginBase;
    exports.EngineBase = EngineBase;
    exports.CoreComponent = CoreComponent;
    exports.ValidationUtils = ValidationUtils;
    exports.ErrorCodes = ErrorCodes;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
