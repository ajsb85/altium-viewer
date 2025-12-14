(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
    [65294],
    {
65294: (e, t, n) => {
        n.d(t, { Z: () => B });
        var r = n(67674),
          i = n(63350),
          o = n(92815);
        function a(e) {
          return (
            (a =
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
            a(e)
          );
        }
        function s() {
          s = function () {
            return t;
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
            return (i(a, "_invoke", { value: O(e, n, s) }), a);
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
                return d && "object" == a(d) && r.call(d, "__await")
                  ? t.resolve(d.__await).then(
                    function (e) {
                      n("next", e, s, c);
                    },
                    function (e) {
                      n("throw", e, s, c);
                    },
                  )
                  : t.resolve(d).then(
                    function (e) {
                      ((u.value = e), s(u));
                    },
                    function (e) {
                      return n("throw", e, s, c);
                    },
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
                      "The iterator does not provide a '" + r + "' method",
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
            throw new TypeError(a(t) + " is not iterable");
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
        function c(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, l(r.key), r));
          }
        }
        function l(e) {
          var t = (function (e, t) {
            if ("object" != a(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != a(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == a(t) ? t : t + "";
        }
        function u(e, t, n) {
          return (
            (t = p(t)),
            (function (e, t) {
              if (t && ("object" == a(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              })(e);
            })(
              e,
              d()
                ? Reflect.construct(t, n || [], p(e).constructor)
                : t.apply(e, n),
            )
          );
        }
        function d() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () { }),
            );
          } catch (e) { }
          return (d = function () {
            return !!e;
          })();
        }
        function p(e) {
          return (
            (p = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            p(e)
          );
        }
        function f(e, t) {
          return (
            (f = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
            f(e, t)
          );
        }
        var m = (function (e) {
          function t(e) {
            var n;
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              ((n = u(this, t)).badges = new Array()),
              (n.loader = null),
              (n._hidden = !1),
              (n._events = new Array()),
              (n.active = !1),
              (n.logger = window.__CORE__.createLogger(e.name)),
              n.validateMetaInfo(e));
            var r = n;
            return (
              (n.metaInfo = {
                get name() {
                  return e.name;
                },
                get displayName() {
                  return e.displayName;
                },
                get displayIcon() {
                  return e.displayIcon;
                },
                get displayItems() {
                  return e.displayItems;
                },
                get displayDpodown() {
                  return e.displayDropdown;
                },
                get comment() {
                  return e.comment || "";
                },
                get order() {
                  return e.order;
                },
                get disabled() {
                  return e.disabled;
                },
                get description() {
                  return e.description;
                },
                get dependencies() {
                  return e.dependencies || [];
                },
                get disableActiveBtnState() {
                  return e.disableActiveBtnState;
                },
                get badges() {
                  return r.badges || [];
                },
                get noView() {
                  return e.noView || !1;
                },
                get hint() {
                  return e.hint;
                },
                get isHiddenByDefault() {
                  return e.isHiddenByDefault;
                },
                get buttonMinWidth() {
                  return e.buttonMinWidth;
                },
                hasControls: r.hasControls,
              }),
              (n._keyboardHandlers = n.createKeyboardHandlers()),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && f(e, t));
            })(t, e),
            (n = t),
            (o = [
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
                set: function (e) {
                  var t = this._hidden;
                  ((this._hidden = e),
                    t !== this._hidden &&
                    window.__CORE__.bus.emit(
                      "".concat(this.metaInfo.name, ":updateInterface"),
                      { hidden: this._hidden },
                    ));
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
                value: function (e) {
                  return (
                    (t = this),
                    (n = void 0),
                    (r = void 0),
                    (i = s().mark(function t() {
                      return s().wrap(
                        function (t) {
                          for (; ;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  this.logger.LogDebug("Activate"),
                                  (this.active = !0),
                                  (this.div = e),
                                  (t.next = 6),
                                  this.activateInternal(e)
                                );
                              case 6:
                                t.next = 12;
                                break;
                              case 8:
                                ((t.prev = 8),
                                  (t.t0 = t.catch(0)),
                                  this.logger.LogError(
                                    "View activate error.",
                                    t.t0,
                                  ),
                                  this.displayError(
                                    t.t0 instanceof Error
                                      ? t.t0
                                      : new Error(
                                        "Error during view displaying.",
                                      ),
                                  ));
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 8]],
                      );
                    })),
                    new (r || (r = Promise))(function (e, o) {
                      function a(e) {
                        try {
                          c(i.next(e));
                        } catch (e) {
                          o(e);
                        }
                      }
                      function s(e) {
                        try {
                          c(i.throw(e));
                        } catch (e) {
                          o(e);
                        }
                      }
                      function c(t) {
                        var n;
                        t.done
                          ? e(t.value)
                          : ((n = t.value),
                            n instanceof r
                              ? n
                              : new r(function (e) {
                                e(n);
                              })).then(a, s);
                      }
                      c((i = i.apply(t, n || [])).next());
                    })
                  );
                  var t, n, r, i;
                },
              },
              {
                key: "deactivate",
                value: function () {
                  try {
                    (this.logger.LogDebug("Deactivate"),
                      this.deactivateInternal());
                  } catch (e) {
                    this.logger.LogError("Deactivate view error.", e);
                  }
                  ((this.div = void 0), (this.active = !1), this.updateLoader());
                },
              },
              {
                key: "validateMetaInfo",
                value: function (e) {
                  if (!(0, r.mI)(e.name)) throw Error(r.Qj.isRequired("name"));
                  if (!(0, r.mI)(e.displayName) && !(0, r.mI)(e.displayIcon))
                    throw Error(r.Qj.isRequired("displayName or displayIcon"));
                },
              },
              { key: "activateInternal", value: function (e) { } },
              { key: "deactivateInternal", value: function () { } },
              {
                key: "createKeyboardHandlers",
                value: function () {
                  return {};
                },
              },
              {
                key: "updateLoader",
                value: function (e, t, n, r) {
                  var i;
                  if (
                    (null === (i = this.loader) || void 0 === i || i.destroy(),
                      (this.loader = null),
                      this.active && t && e)
                  ) {
                    var o = { message: t, type: e };
                    (n && (o.icon = n),
                      r && (o.size = r),
                      (this.loader = window.__APP__.loader(this.div, o)));
                  }
                },
              },
              {
                key: "updatePreview",
                value: function (e) {
                  var t;
                  (null === (t = this.preview) || void 0 === t || t.destroy(),
                    (this.preview = void 0),
                    this.active &&
                    e &&
                    (this.preview = window.__APP__.preview(this.div, e)));
                },
              },
              {
                key: "displayError",
                value: function (e) {
                  var t;
                  (null === (t = e.innerError) || void 0 === t
                    ? void 0
                    : t.code) === i.jK.StoreExpired ||
                    e.code === i.jK.StoreExpired
                    ? this.updateLoader("error", e.message, "info-16")
                    : this.updateLoader("error", e.message);
                },
              },
              { key: "hasControls", value: function () { } },
              {
                key: "setBadges",
                value: function (e) {
                  this.badges = e;
                },
              },
            ]) && c(n.prototype, o),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, o;
        })(o.Z);
        function h(e) {
          return (
            (h =
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
            h(e)
          );
        }
        function v(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, y(r.key), r));
          }
        }
        function y(e) {
          var t = (function (e, t) {
            if ("object" != h(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != h(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == h(t) ? t : t + "";
        }
        function g(e, t, n) {
          return (
            (t = w(t)),
            (function (e, t) {
              if (t && ("object" == h(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              })(e);
            })(
              e,
              b()
                ? Reflect.construct(t, n || [], w(e).constructor)
                : t.apply(e, n),
            )
          );
        }
        function b() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () { }),
            );
          } catch (e) { }
          return (b = function () {
            return !!e;
          })();
        }
        function w(e) {
          return (
            (w = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            w(e)
          );
        }
        function k(e, t) {
          return (
            (k = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
            k(e, t)
          );
        }
        var C = (function (e) {
          function t(e) {
            var n;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((n = g(this, t))._events = new Array()),
              (n.logger = window.__CORE__.createLogger(e.name)),
              n.validateMetaInfo(e),
              (n.metaInfo = {
                get name() {
                  return e.name;
                },
                get displayName() {
                  return e.displayName || "";
                },
                get displayIcon() {
                  return e.displayIcon;
                },
                get comment() {
                  var t;
                  return null !== (t = e.comment) && void 0 !== t ? t : "";
                },
                get isGlobal() {
                  return !!e.isGlobal;
                },
                get dependencies() {
                  return e.dependencies || [];
                },
                get description() {
                  return e.description || "";
                },
                get hint() {
                  return e.hint;
                },
                get order() {
                  return e.order;
                },
                get owner() {
                  return e.owner;
                },
                get localType() {
                  return e.localType;
                },
                get view() {
                  return e.view;
                },
                get iconFilled() {
                  return !!e.iconFilled;
                },
                get displayDropdown() {
                  return e.displayDropdown;
                },
                get disabled() {
                  return e.disabled;
                },
                get preventModalClose() {
                  return e.preventModalClose;
                },
                get disableActiveBtnState() {
                  return e.disableActiveBtnState;
                },
              }),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && k(e, t));
            })(t, e),
            (n = t),
            (i = [
              {
                key: "events",
                get: function () {
                  return this._events;
                },
              },
              {
                key: "hidden",
                get: function () {
                  return !1;
                },
              },
              {
                key: "activate",
                value: function () {
                  try {
                    ((this.active = !0),
                      this.logger.LogDebug("Activate"),
                      this.activateInternal());
                  } catch (e) {
                    this.logger.LogError("Plugin activate error.", e);
                  }
                },
              },
              {
                key: "deactivate",
                value: function () {
                  try {
                    ((this.active = !1),
                      this.logger.LogDebug("Deactivate"),
                      this.deactivateInternal());
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
                value: function (e) {
                  if (!(0, r.mI)(e.name)) throw Error(r.Qj.isRequired("name"));
                },
              },
            ]) && v(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(o.Z);
        function _(e) {
          return (
            (_ =
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
            _(e)
          );
        }
        function P(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, S(r.key), r));
          }
        }
        function S(e) {
          var t = (function (e, t) {
            if ("object" != _(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != _(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == _(t) ? t : t + "";
        }
        function E(e, t, n) {
          return (
            (t = O(t)),
            (function (e, t) {
              if (t && ("object" == _(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              })(e);
            })(
              e,
              j()
                ? Reflect.construct(t, n || [], O(e).constructor)
                : t.apply(e, n),
            )
          );
        }
        function j() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () { }),
            );
          } catch (e) { }
          return (j = function () {
            return !!e;
          })();
        }
        function O(e) {
          return (
            (O = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            O(e)
          );
        }
        function D(e, t) {
          return (
            (D = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
            D(e, t)
          );
        }
        var L = (function (e) {
          function t(e) {
            var n;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((n = E(this, t))._events = new Array()),
              (n.logger = window.__CORE__.createLogger(e.name)),
              n.validateMetaInfo(e),
              (n.metaInfo = {
                get name() {
                  return e.name;
                },
                get comment() {
                  var t;
                  return null !== (t = e.comment) && void 0 !== t ? t : "";
                },
                get dependencies() {
                  return e.dependencies || [];
                },
              }),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && D(e, t));
            })(t, e),
            (n = t),
            (i = [
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
                value: function (e) {
                  if (!(0, r.mI)(e.name)) throw Error(r.Qj.isRequired("name"));
                },
              },
            ]) && P(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(o.Z);
        const B = function (e) {
          if (!(0, r.mI)(e.type)) throw Error(r.Qj.isRequired("type"));
          if (!(0, r.Hd)(e.create))
            throw Error('"create" is required and must be a function');
          return {
            get type() {
              return e.type;
            },
            get description() {
              return e.description;
            },
            create: function (t) {
              switch (e.type) {
                case "Engine":
                  return e.create(L, t);
                case "View":
                  return e.create(m, t);
                case "Plugin":
                  return e.create(C, t);
                default:
                  throw new Error('Undefined type "'.concat(e.type, '"'));
              }
            },
          };
        };
      }
    }
]);