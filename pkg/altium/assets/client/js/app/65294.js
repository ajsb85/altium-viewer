(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
    [65294],
    {
      65294: (module, exports, __webpack_require__) => {
        __webpack_require__.d(exports, { Z: () => ComponentFactory });

        var ValidationUtils = __webpack_require__(67674);
        var ErrorCodes = __webpack_require__(63350);
        var CoreComponent = __webpack_require__(92815);

        function _typeof(obj) {
          return (_typeof =
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
              })(obj);
        }

        // Regenerator Runtime Polyfill
        function getGlobal() {
          getGlobal = function () {
            return this;
          };
          var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            i =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            o = "function" == typeof Symbol ? Symbol : {},
            c = o.iterator || "@@iterator",
            l = o.asyncIterator || "@@asyncIterator",
            u = o.toStringTag || "@@toStringTag";
          function d(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            d({}, "");
          } catch (e) {
            d = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function p(e, t, n, r) {
            var o = t && t.prototype instanceof b ? t : b,
              a = Object.create(o.prototype),
              s = new x(r || []);
            return i(a, "_invoke", { value: O(e, n, s) }), a;
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = p;
          var m = "suspendedStart",
            h = "suspendedYield",
            v = "executing",
            y = "completed",
            g = {};
          function b() { }
          function w() { }
          function k() { }
          var C = {};
          d(C, c, function () {
            return this;
          });
          var _ = Object.getPrototypeOf,
            P = _ && _(_(A([])));
          P && P !== n && r.call(P, c) && (C = P);
          var S = (k.prototype = b.prototype = Object.create(C));
          function E(e) {
            ["next", "throw", "return"].forEach(function (t) {
              d(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function j(e, t) {
            function n(i, o, s, c) {
              var l = f(e[i], e, o);
              if ("throw" !== l.type) {
                var u = l.arg,
                  d = u.value;
                return d && "object" == _typeof(d) && r.call(d, "__await")
                  ? t.resolve(d.__await).then(
                    function (e) {
                      n("next", e, s, c);
                    },
                    function (e) {
                      n("throw", e, s, c);
                    }
                  )
                  : t.resolve(d).then(
                    function (e) {
                      ((u.value = e), s(u));
                    },
                    function (e) {
                      return n("throw", e, s, c);
                    }
                  );
              }
              c(l.arg);
            }
            var o;
            i(this, "_invoke", {
              value: function (e, r) {
                function i() {
                  return new t(function (t, i) {
                    n(e, r, t, i);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
            });
          }
          function O(t, n, r) {
            var i = m;
            return function (o, a) {
              if (i === v) throw Error("Generator is already running");
              if (i === y) {
                if ("throw" === o) throw a;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = a; ;) {
                var s = r.delegate;
                if (s) {
                  var c = D(s, r);
                  if (c) {
                    if (c === g) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (i === m) throw ((i = y), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = v;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                  if (((i = r.done ? y : h), l.arg === g)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((i = y), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function D(t, n) {
            var r = n.method,
              i = t.iterator[r];
            if (i === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                    (n.arg = e),
                    D(t, n),
                    "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                g
              );
            var o = f(i, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"),
                (n.arg = o.arg),
                (n.delegate = null),
                g
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[t.resultName] = a.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  g)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                g);
          }
          function L(e) {
            var t = { tryLoc: e[0] };
            (1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t));
          }
          function B(e) {
            var t = e.completion || {};
            ((t.type = "normal"), delete t.arg, (e.completion = t));
          }
          function x(e) {
            ((this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(L, this),
              this.reset(!0));
          }
          function A(t) {
            if (t || "" === t) {
              var n = t[c];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var i = -1,
                  o = function n() {
                    for (; ++i < t.length;)
                      if (r.call(t, i))
                        return ((n.value = t[i]), (n.done = !1), n);
                    return ((n.value = e), (n.done = !0), n);
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(_typeof(t) + " is not iterable");
          }
          return (
            (w.prototype = k),
            i(S, "constructor", { value: k, configurable: !0 }),
            i(k, "constructor", { value: w, configurable: !0 }),
            (w.displayName = d(k, u, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === w || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, k)
                  : ((e.__proto__ = k), d(e, u, "GeneratorFunction")),
                (e.prototype = Object.create(S)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            E(j.prototype),
            d(j.prototype, l, function () {
              return this;
            }),
            (t.AsyncIterator = j),
            (t.async = function (e, n, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new j(p(e, n, r, i), o);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
            }),
            E(S),
            d(S, u, "Generator"),
            d(S, c, function () {
              return this;
            }),
            d(S, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length;) {
                    var r = n.pop();
                    if (r in t) return ((e.value = r), (e.done = !1), e);
                  }
                  return ((e.done = !0), e);
                }
              );
            }),
            (t.values = A),
            (x.prototype = {
              constructor: x,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = e),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = e),
                    this.tryEntries.forEach(B),
                    !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function i(r, i) {
                  return (
                    (s.type = "throw"),
                    (s.arg = t),
                    (n.next = r),
                    i && ((n.method = "next"), (n.arg = e)),
                    !!i
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    s = a.completion;
                  if ("root" === a.tryLoc) return i("end");
                  if (a.tryLoc <= this.prev) {
                    var c = r.call(a, "catchLoc"),
                      l = r.call(a, "finallyLoc");
                    if (c && l) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    } else if (c) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    } else {
                      if (!l)
                        throw Error("try statement without catch or finally");
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (
                    i.tryLoc <= this.prev &&
                    r.call(i, "finallyLoc") &&
                    this.prev < i.finallyLoc
                  ) {
                    var o = i;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                  g
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return (this.complete(n.completion, n.afterLoc), B(n), g);
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var i = r.arg;
                      B(n);
                    }
                    return i;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = { iterator: A(t), resultName: n, nextLoc: r }),
                  "next" === this.method && (this.arg = e),
                  g
                );
              },
            }),
            t
          );
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }

        function _toPropertyKey(arg) {
          var key = (function (arg) {
            if ("object" != _typeof(arg) || !arg) return arg;
            var prim = arg[Symbol.toPrimitive];
            if (void 0 !== prim) {
              var res = prim.call(arg, "string");
              if ("object" != _typeof(res)) return res;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(arg);
          })(arg);
          return "symbol" == _typeof(key) ? key : key + "";
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          // Add decorators/mixins support if needed
          return Constructor;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, writable: true, configurable: true },
          });
          Object.defineProperty(subClass, "prototype", { writable: false });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () { })
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
          return _getPrototypeOf(o);
        }

        /**
         * Base class for Views in the application.
         * Handles lifecycle (activate/deactivate), visibility, badging, and loading states.
         * @class ViewBase
         * @extends CoreComponent.Z
         */
        var ViewBase = (function (SuperClass) {
          _inherits(ViewBase, SuperClass);

          var _super = _createSuper(ViewBase);

          function ViewBase(config) {
            var _this;
            (function (instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, ViewBase);

            _this = _super.call(this, config);
            _this.badges = [];
            _this.loader = null;
            _this._hidden = false;
            _this._events = [];
            _this.active = false;
            _this.logger = window.__CORE__.createLogger(config.name);
            _this.validateMetaInfo(config);
            var self = _this;

            _this.metaInfo = {
              get name() {
                return config.name;
              },
              get displayName() {
                return config.displayName;
              },
              get displayIcon() {
                return config.displayIcon;
              },
              get displayItems() {
                return config.displayItems;
              },
              get displayDpodown() {
                return config.displayDropdown;
              },
              get comment() {
                return config.comment || "";
              },
              get order() {
                return config.order;
              },
              get disabled() {
                return config.disabled;
              },
              get description() {
                return config.description;
              },
              get dependencies() {
                return config.dependencies || [];
              },
              get disableActiveBtnState() {
                return config.disableActiveBtnState;
              },
              get badges() {
                return self.badges || [];
              },
              get noView() {
                return config.noView || false;
              },
              get hint() {
                return config.hint;
              },
              get isHiddenByDefault() {
                return config.isHiddenByDefault;
              },
              get buttonMinWidth() {
                return config.buttonMinWidth;
              },
              hasControls: self.hasControls,
            };
            _this._keyboardHandlers = _this.createKeyboardHandlers();
            return _this;
          }

          return _createClass(
            ViewBase,
            [
              {
                key: "keyboardHandlers",
                get: function () {
                  return this._keyboardHandlers;
                },
              },
              {
                key: "events",
                get: function () {
                  return this._events;
                },
              },
              {
                key: "hidden",
                get: function () {
                  return this._hidden;
                },
                set: function (isHidden) {
                  var currentHidden = this._hidden;
                  this._hidden = isHidden;
                  if (currentHidden !== this._hidden) {
                    window.__CORE__.bus.emit(
                      "".concat(this.metaInfo.name, ":updateInterface"),
                      { hidden: this._hidden }
                    );
                  }
                },
              },
              {
                key: "setup",
                value: function () {
                  return Promise.resolve();
                },
              },
              {
                key: "activate",
                value: function (element) {
                  var _this = this;
                  var _AsyncIterator = getGlobal();
                  return new Promise(function (resolve, reject) {
                    var gen = _AsyncIterator.mark(function _callee() {
                      return _AsyncIterator.wrap(
                        function (_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.prev = 0;
                                _this.logger.LogDebug("Activate");
                                _this.active = true;
                                _this.div = element;
                                _context.next = 6;
                                return _this.activateInternal(element);
                              case 6:
                                _context.next = 12;
                                break;
                              case 8:
                                _context.prev = 8;
                                _context.t0 = _context["catch"](0);
                                _this.logger.LogError(
                                  "View activate error.",
                                  _context.t0
                                );
                                _this.displayError(
                                  _context.t0 instanceof Error
                                    ? _context.t0
                                    : new Error("Error during view displaying.")
                                );
                              case 12:
                              case "end":
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        null,
                        [[0, 8]]
                      );
                    })();

                    // Helper to drive the generator
                    function step(key, arg) {
                      try {
                        var info = gen[key](arg);
                        var value = info.value;
                      } catch (error) {
                        reject(error);
                        return;
                      }
                      if (info.done) {
                        resolve(value);
                      } else {
                        Promise.resolve(value).then(
                          function (v) {
                            step("next", v);
                          },
                          function (err) {
                            step("throw", err);
                          }
                        );
                      }
                    }
                    step("next");
                  });
                },
              },
              {
                key: "deactivate",
                value: function () {
                  try {
                    this.logger.LogDebug("Deactivate");
                    this.deactivateInternal();
                  } catch (e) {
                    this.logger.LogError("Deactivate view error.", e);
                  }
                  this.div = undefined;
                  this.active = false;
                  this.updateLoader();
                },
              },
              {
                key: "validateMetaInfo",
                value: function (config) {
                  if (!ValidationUtils.mI(config.name))
                    throw Error(ValidationUtils.Qj.isRequired("name"));
                  if (
                    !ValidationUtils.mI(config.displayName) &&
                    !ValidationUtils.mI(config.displayIcon)
                  )
                    throw Error(
                      ValidationUtils.Qj.isRequired("displayName or displayIcon")
                    );
                },
              },
              { key: "activateInternal", value: function (element) { } },
              { key: "deactivateInternal", value: function () { } },
              {
                key: "createKeyboardHandlers",
                value: function () {
                  return {};
                },
              },
              {
                key: "updateLoader",
                value: function (type, message, icon, size) {
                  if (this.loader) {
                    this.loader.destroy();
                  }
                  this.loader = null;
                  if (this.active && message && type) {
                    var options = { message: message, type: type };
                    if (icon) options.icon = icon;
                    if (size) options.size = size;
                    this.loader = window.__APP__.loader(this.div, options);
                  }
                },
              },
              {
                key: "updatePreview",
                value: function (options) {
                  if (this.preview) {
                    this.preview.destroy();
                  }
                  this.preview = undefined;
                  if (this.active && options) {
                    this.preview = window.__APP__.preview(this.div, options);
                  }
                },
              },
              {
                key: "displayError",
                value: function (error) {
                  var innerCode =
                    error.innerError && error.innerError.code
                      ? error.innerError.code
                      : null;
                  if (
                    innerCode === ErrorCodes.jK.StoreExpired ||
                    error.code === ErrorCodes.jK.StoreExpired
                  ) {
                    this.updateLoader("error", error.message, "info-16");
                  } else {
                    this.updateLoader("error", error.message);
                  }
                },
              },
              { key: "hasControls", value: function () { } },
              {
                key: "setBadges",
                value: function (badges) {
                  this.badges = badges;
                },
              },
            ]
          );
        })(CoreComponent.Z);

        /**
         * Base class for Plugins.
         * @class PluginBase
         * @extends CoreComponent.Z
         */
        var PluginBase = (function (SuperClass) {
          _inherits(PluginBase, SuperClass);

          var _super = _createSuper(PluginBase);

          function PluginBase(config) {
            var _this;
            (function (instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, PluginBase);
            _this = _super.call(this, config);
            _this._events = [];
            _this.logger = window.__CORE__.createLogger(config.name);
            _this.validateMetaInfo(config);

            _this.metaInfo = {
              get name() {
                return config.name;
              },
              get displayName() {
                return config.displayName || "";
              },
              get displayIcon() {
                return config.displayIcon;
              },
              get comment() {
                return config.comment ?? "";
              },
              get isGlobal() {
                return !!config.isGlobal;
              },
              get dependencies() {
                return config.dependencies || [];
              },
              get description() {
                return config.description || "";
              },
              get hint() {
                return config.hint;
              },
              get order() {
                return config.order;
              },
              get owner() {
                return config.owner;
              },
              get localType() {
                return config.localType;
              },
              get view() {
                return config.view;
              },
              get iconFilled() {
                return !!config.iconFilled;
              },
              get displayDropdown() {
                return config.displayDropdown;
              },
              get disabled() {
                return config.disabled;
              },
              get preventModalClose() {
                return config.preventModalClose;
              },
              get disableActiveBtnState() {
                return config.disableActiveBtnState;
              },
            };
            return _this;
          }

          return _createClass(PluginBase, [
            {
              key: "events",
              get: function () {
                return this._events;
              },
            },
            {
              key: "hidden",
              get: function () {
                return false;
              },
            },
            {
              key: "activate",
              value: function () {
                try {
                  this.active = true;
                  this.logger.LogDebug("Activate");
                  this.activateInternal();
                } catch (e) {
                  this.logger.LogError("Plugin activate error.", e);
                }
              },
            },
            {
              key: "deactivate",
              value: function () {
                try {
                  this.active = false;
                  this.logger.LogDebug("Deactivate");
                  this.deactivateInternal();
                } catch (e) {
                  this.logger.LogError("Deactivate plugin error.", e);
                }
              },
            },
            {
              key: "setup",
              value: function () {
                return Promise.resolve();
              },
            },
            { key: "activateInternal", value: function () { } },
            { key: "deactivateInternal", value: function () { } },
            {
              key: "validateMetaInfo",
              value: function (config) {
                if (!ValidationUtils.mI(config.name))
                  throw Error(ValidationUtils.Qj.isRequired("name"));
              },
            },
          ]);
        })(CoreComponent.Z);

        /**
         * Base class for Engines.
         * @class EngineBase
         * @extends CoreComponent.Z
         */
        var EngineBase = (function (SuperClass) {
          _inherits(EngineBase, SuperClass);

          var _super = _createSuper(EngineBase);

          function EngineBase(config) {
            var _this;
            (function (instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, EngineBase);

            _this = _super.call(this, config);
            _this._events = [];
            _this.logger = window.__CORE__.createLogger(config.name);
            _this.validateMetaInfo(config);

            _this.metaInfo = {
              get name() {
                return config.name;
              },
              get comment() {
                return config.comment ?? "";
              },
              get dependencies() {
                return config.dependencies || [];
              }
            };
            return _this;
          }

          return _createClass(EngineBase, [
            {
              key: "events",
              get: function () {
                return this._events;
              },
            },
            {
              key: "setup",
              value: function () {
                return Promise.resolve();
              },
            },
            {
              key: "validateMetaInfo",
              value: function (config) {
                if (!ValidationUtils.mI(config.name))
                  throw Error(ValidationUtils.Qj.isRequired("name"));
              },
            },
          ]);
        })(CoreComponent.Z);

        /**
         * Factory function to create components (Views, Plugins, Engines).
         * @param {Object} config - Configuration object.
         * @returns {Object} Factory object with create method.
         */
        const ComponentFactory = function (config) {
          if (!ValidationUtils.mI(config.type))
            throw Error(ValidationUtils.Qj.isRequired("type"));
          if (!ValidationUtils.Hd(config.create))
            throw Error('"create" is required and must be a function');

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
                  throw new Error('Undefined type "'.concat(config.type, '"'));
              }
            },
          };
        };
      },
    },
  ]);