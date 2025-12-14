/*! For license information please see app.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
    [11804, 74687, 11903, 318],
    {
      54105: (e, t, n) => {
        var r = n(49041),
          i = n(17232);
        const o = {
          logger: { transports: new Map([["Console", { level: 0 }]]) },
        };
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
        function s(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, c(r.key), r));
          }
        }
        function c(e) {
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
        var l = (function () {
          function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.DEFAULT_COLOR = "default"),
              (this.async = !1),
              (this.level = t.level),
              (this.color = this.DEFAULT_COLOR));
          }
          return (
            (t = e),
            (i = [
              {
                key: "getFormattedDate",
                value: function (e) {
                  var t = new Date(e);
                  return ""
                    .concat(t.getFullYear(), "-")
                    .concat(t.getMonth() + 1, "-")
                    .concat(t.getDate(), " ")
                    .concat(t.getHours(), ":")
                    .concat(t.getMinutes(), ":")
                    .concat(t.getSeconds(), ".")
                    .concat(t.getMilliseconds());
                },
              },
            ]),
            (n = [
              {
                key: "log",
                value: function (t) {
                  var n,
                    i,
                    o,
                    a,
                    s,
                    c,
                    l = "%c"
                      .concat(t.name.padEnd(20, " "), "%c | ")
                      .concat(e.getFormattedDate(t.timestamp), " | %c")
                      .concat(t.level.padEnd(8, " "), "%c |"),
                    u = "";
                  t.error &&
                    (u = " | Error: "
                      .concat(t.error.message, " Stack: ")
                      .concat(t.error.stack));
                  var d = [
                    l,
                    "color:".concat(this.color, ";"),
                    "color:".concat(this.DEFAULT_COLOR, ";"),
                  ],
                    p = [
                      "color:".concat(this.DEFAULT_COLOR, ";"),
                      t.message,
                      u,
                    ];
                  switch (t.level) {
                    case r.i[r.i.Trace]:
                      (n = console).log.apply(
                        n,
                        d.concat(
                          [
                            "padding:2px;color:".concat(
                              this.DEFAULT_COLOR,
                              ";",
                            ),
                          ],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Debug]:
                      (i = console).log.apply(
                        i,
                        d.concat(
                          ["padding:2px;background:blue;color:white;"],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Info]:
                      (o = console).log.apply(
                        o,
                        d.concat(
                          ["padding:2px;background:green;color:white;"],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Warn]:
                      (a = console).log.apply(
                        a,
                        d.concat(
                          ["padding:2px;background:orange;color:black;"],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Error]:
                      (s = console).log.apply(
                        s,
                        d.concat(
                          ["padding:2px;background:red;color:white;"],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Critical]:
                      (c = console).log.apply(
                        c,
                        d.concat(
                          ["padding:2px;background:Maroon;color:white;"],
                          p,
                        ),
                      );
                  }
                },
              },
            ]) && s(t.prototype, n),
            i && s(t, i),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, n, i;
        })(),
          u = o.logger.transports.get("Console");
        u && i.oR.registerTransport(new l(u));
      },
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
      },
      69668: (e, t, n) => {
        var r = n(90450),
          i = n(10311),
          o = n(25979),
          a = { class: "app" },
          s = { class: "app__alert-text" },
          c = { key: 1 },
          l = ["id"],
          u = ["onClick"],
          d = { class: "app__back-btn-text" },
          p = ["id"],
          f = ["data-view"],
          m = n(77337),
          h = n(91261),
          v = n(30171),
          y = n(77453),
          g = n(48226),
          b = n(36480),
          w = function () {
            return (0, b.Z)({
              baseURL: window.__VIEWER_DOMAIN__ + "/api/",
              type: "json",
              withCredentials: !1,
            });
          };
        const k = function () {
          var e = document.createElement("canvas").getContext("webgl");
          if (e) {
            var t = e.getExtension("WEBGL_debug_renderer_info");
            return {
              vendor: e.getParameter(t.UNMASKED_VENDOR_WEBGL),
              renderer: e.getParameter(t.UNMASKED_RENDERER_WEBGL),
            };
          }
          return null;
        };
        function C(e) {
          return (
            (C =
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
            C(e)
          );
        }
        function _(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, P(r.key), r));
          }
        }
        function P(e) {
          var t = (function (e, t) {
            if ("object" != C(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != C(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == C(t) ? t : t + "";
        }
        const S = new ((function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.performance = t));
            }),
            (t = [
              {
                key: "getMemoryUsageDetails",
                value: function () {
                  var e;
                  return (
                    (null === (e = this.performance) || void 0 === e
                      ? void 0
                      : e.memory) || null
                  );
                },
              },
            ]) && _(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })())(window.performance);
        var E = { key: 0, class: "app-sidebar__sub-title-additional-text" },
          j = { class: "app-sidebar__content" },
          O = n(93891),
          D = n(29786),
          L = {
            name: "AfsSidebar",
            components: { GridContainer: g.G },
            props: {
              side: { type: String, default: "left" },
              size: { type: String, default: "md" },
              resizable: { type: Boolean, default: !1 },
              minPanelWidth: { type: Number, default: null },
              maxPanelWidth: { type: Number, default: null },
              initialWidth: { type: Number, default: null },
            },
            emits: ["size-changed"],
            data: function (e) {
              return {
                minWidth: e.minPanelWidth || 240,
                maxWidth: e.maxPanelWidth || 640,
                width: e.initialWidth,
                isResizing: null,
              };
            },
            computed: {
              classes: function () {
                return [
                  "afs-sidebar-container_".concat(this.side),
                  "afs-sidebar-container_".concat(this.size),
                ].concat(
                  this.resizable ? ["afs-sidebar-container_resizable"] : [],
                );
              },
            },
            watch: {
              isResizing: function (e) {
                e
                  ? (document.addEventListener("mousemove", this.handleResize),
                    document.addEventListener("mouseup", this.handleResizeEnd),
                    document.addEventListener(
                      "mouseout",
                      this.handleMouseOutOfWindow,
                    ),
                    (document.body.style.pointerEvents = "none"),
                    (document.querySelector(
                      ".afs-sidebar-container__resizer",
                    ).style.pointerEvents = "auto"))
                  : (document.removeEventListener("mousemove", this.handleResize),
                    document.removeEventListener("mouseup", this.handleResizeEnd),
                    document.removeEventListener(
                      "mouseout",
                      this.handleMouseOutOfWindow,
                    ),
                    (document.body.style.pointerEvents = "auto"));
              },
            },
            methods: {
              getBEMClass: function (e) {
                return (0, D.g)("afs-sidebar-container", e);
              },
              handleResizeStart: function () {
                this.isResizing = !0;
              },
              handleResizeEnd: function () {
                ((this.isResizing = !1), this.$emit("size-changed", this.width));
              },
              handleResize: function (e) {
                var t =
                  "right" === this.side ? window.innerWidth - e.pageX : e.pageX;
                t >= this.minWidth && t <= this.maxWidth && (this.width = t + 2);
              },
              handleMouseOutOfWindow: function (e) {
                null == e.toElement &&
                  null == e.relatedTarget &&
                  (this.isResizing = !1);
              },
              setWidth: function (e) {
                var t = ("add" === e.type ? 1 : -1) * e.value + this.width;
                (t < this.minWidth
                  ? (this.width = this.minWidth)
                  : t > this.maxWidth
                    ? (this.width = this.maxWidth)
                    : (this.width = t),
                  this.handleResizeEnd());
              },
            },
          };
        function B(e) {
          return (
            (B =
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
            B(e)
          );
        }
        function x(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" != B(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != B(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == B(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        const A = {
          name: "AppSidebar",
          components: {
            AfsSidebar: (0, O._)(L, [
              [
                "render",
                function (e, t, n, r, o, a) {
                  var s = (0, i.resolveComponent)("GridContainer");
                  return (
                    (0, i.openBlock)(),
                    (0, i.createBlock)(
                      s,
                      {
                        type: "sidebar",
                        direction: "column",
                        class: (0, i.normalizeClass)([
                          "afs-sidebar-container",
                          a.classes,
                        ]),
                        style: (0, i.normalizeStyle)({ width: e.width + "px" }),
                      },
                      {
                        default: (0, i.withCtx)(function () {
                          return [
                            n.resizable && "right" === n.side
                              ? ((0, i.openBlock)(),
                                (0, i.createElementBlock)(
                                  "div",
                                  {
                                    key: 0,
                                    class: "afs-sidebar-container__resizer",
                                    onMousedown:
                                      t[0] ||
                                      (t[0] = function (e) {
                                        return a.handleResizeStart();
                                      }),
                                  },
                                  null,
                                  32,
                                ))
                              : (0, i.createCommentVNode)("", !0),
                            (0, i.renderSlot)(e.$slots, "default"),
                            n.resizable && "left" === n.side
                              ? ((0, i.openBlock)(),
                                (0, i.createElementBlock)(
                                  "div",
                                  {
                                    key: 1,
                                    class: "afs-sidebar-container__resizer",
                                    onMousedown:
                                      t[1] ||
                                      (t[1] = function (e) {
                                        return a.handleResizeStart();
                                      }),
                                  },
                                  null,
                                  32,
                                ))
                              : (0, i.createCommentVNode)("", !0),
                          ];
                        }),
                        _: 3,
                      },
                      8,
                      ["class", "style"],
                    )
                  );
                },
              ],
            ]),
            AfsText: y.A,
          },
          props: {
            metaInfo: {
              type: Object,
              default: function () {
                return {};
              },
            },
            size: { type: String, default: "sm" },
            resizable: { type: Boolean, default: !1 },
            flex: { type: Boolean, default: !1 },
          },
          computed: {
            classes: function () {
              return x(
                x({}, "app-sidebar_".concat(this.size), this.size),
                "is-flex",
                this.flex,
              );
            },
          },
          methods: {
            hasSlot: function (e) {
              return !!this.$slots[e];
            },
          },
        };
        var V = n(46021);
        const T = (0, V.Z)(A, [
          [
            "render",
            function (e, t, n, r, o, a) {
              var s = (0, i.resolveComponent)("AfsText"),
                c = (0, i.resolveComponent)("AfsSidebar");
              return (
                (0, i.openBlock)(),
                (0, i.createBlock)(
                  c,
                  {
                    class: (0, i.normalizeClass)(["app-sidebar", a.classes]),
                    size: n.size,
                    resizable: n.resizable,
                  },
                  {
                    default: (0, i.withCtx)(function () {
                      return [
                        a.hasSlot("title")
                          ? ((0, i.openBlock)(),
                            (0, i.createBlock)(
                              s,
                              { key: 0, class: "app-sidebar__title" },
                              {
                                default: (0, i.withCtx)(function () {
                                  return [
                                    (0, i.renderSlot)(
                                      e.$slots,
                                      "title",
                                      {},
                                      void 0,
                                      !0,
                                    ),
                                  ];
                                }),
                                _: 3,
                              },
                            ))
                          : (0, i.createCommentVNode)("v-if", !0),
                        a.hasSlot("subTitle")
                          ? ((0, i.openBlock)(),
                            (0, i.createBlock)(
                              s,
                              { key: 1, class: "app-sidebar__sub-title" },
                              {
                                default: (0, i.withCtx)(function () {
                                  return [
                                    (0, i.renderSlot)(
                                      e.$slots,
                                      "subTitle",
                                      {},
                                      void 0,
                                      !0,
                                    ),
                                    n.metaInfo.subTitleAdditionalText
                                      ? ((0, i.openBlock)(),
                                        (0, i.createElementBlock)(
                                          "span",
                                          E,
                                          (0, i.toDisplayString)(
                                            n.metaInfo.subTitleAdditionalText,
                                          ),
                                          1,
                                        ))
                                      : (0, i.createCommentVNode)("v-if", !0),
                                  ];
                                }),
                                _: 3,
                              },
                            ))
                          : (0, i.createCommentVNode)("v-if", !0),
                        (0, i.createElementVNode)("div", j, [
                          (0, i.renderSlot)(e.$slots, "default", {}, void 0, !0),
                        ]),
                      ];
                    }),
                    _: 3,
                  },
                  8,
                  ["size", "class", "resizable"],
                )
              );
            },
          ],
          ["__scopeId", "data-v-56ae3e48"],
        ]);
        var N = n(34313);
        const M = {
          mounted: function (e, t) {
            var n = t.arg,
              r = t.modifiers;
            if (n) {
              var i = r.open,
                o = r.close;
              ((e.dataset.viewerModalControl = n),
                e.addEventListener(
                  "click",
                  function (e) {
                    var t = N.Z.getItem(n);
                    t && (i ? t.open() : o ? t.close() : t.toggle());
                  },
                  !1,
                ));
            }
          },
        };
        var I = n(38964),
          R = n(74839),
          F = n(38075);
        function H(e) {
          return (
            (H =
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
            H(e)
          );
        }
        function z(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function Z(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? z(Object(n), !0).forEach(function (t) {
                U(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : z(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
          }
          return e;
        }
        function U(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" != H(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != H(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == H(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        const G = function (e) {
          if (!e) return "";
          var t = e.split("%");
          return t.length <= 1
            ? e
            : t.map(function (e) {
              return e.startsWith("{")
                ? Z(Z({}, (0, F.Z)(e)), {}, { id: (0, R.c)() })
                : { id: (0, R.c)(), text: e };
            });
        };
        var W = n(67674),
          $ = { class: "app-alert" },
          Y = { class: "app-alert__container" },
          K = { class: "app-alert__figure" },
          X = { key: 0, class: "app-alert__text" },
          q = { key: 1, class: "app-alert__meta" };
        const J = {
          name: "AppLoader",
          components: { AfsIcon: m._ },
          props: { icon: { type: String, default: "error-64" } },
          methods: {
            hasSlot: function (e) {
              return !!this.$slots[e];
            },
          },
        },
          Q = (0, V.Z)(J, [
            [
              "render",
              function (e, t, n, r, o, a) {
                var s = (0, i.resolveComponent)("AfsIcon");
                return (
                  (0, i.openBlock)(),
                  (0, i.createElementBlock)("div", $, [
                    (0, i.createElementVNode)("div", Y, [
                      (0, i.createElementVNode)("div", K, [
                        (0, i.createVNode)(
                          s,
                          { filled: !0, name: n.icon, class: "app-alert__icon" },
                          null,
                          8,
                          ["name"],
                        ),
                      ]),
                      a.hasSlot("default")
                        ? ((0, i.openBlock)(),
                          (0, i.createElementBlock)("div", X, [
                            (0, i.renderSlot)(
                              e.$slots,
                              "default",
                              {},
                              void 0,
                              !0,
                            ),
                          ]))
                        : (0, i.createCommentVNode)("v-if", !0),
                      a.hasSlot("meta")
                        ? ((0, i.openBlock)(),
                          (0, i.createElementBlock)("div", q, [
                            (0, i.renderSlot)(e.$slots, "meta", {}, void 0, !0),
                          ]))
                        : (0, i.createCommentVNode)("v-if", !0),
                    ]),
                  ])
                );
              },
            ],
            ["__scopeId", "data-v-3abbf864"],
          ]);
        var ee = { class: "app-loader__container" },
          te = { class: "app-loader__figure" },
          ne = { key: 0, class: "app-loader__progress" },
          re = { key: 1, class: "app-loader__meta" },
          ie = "file-upload-32";
        const oe = {
          name: "AppLoader",
          components: { AfsIcon: m._ },
          props: {
            hasError: { type: Boolean, default: !1 },
            hasIcon: { type: Boolean, default: !1 },
            backgroundAlpha: { type: Boolean, default: !1 },
            icon: { type: String, default: ie },
            size: { type: String, default: "large" },
            primary: { type: Boolean, default: !0 },
          },
          computed: {
            bindTransition: function () {
              return {
                "enter-class": "app-loader_enter",
                "enter-active-class": "app-loader_enter-active",
                "enter-to-class": "app-loader_enter-to",
                "leave-class": "app-loader_leave",
                "leave-active-class": "app-loader_leave-active",
                "leave-to-class": "app-loader_leave-to",
              };
            },
            errorIcon: function () {
              return this.icon && this.icon !== ie ? this.icon : "error-64";
            },
            computedIcon: function () {
              return this.hasError ? this.errorIcon : this.icon;
            },
            classes: function () {
              return [
                {
                  "is-secondary": !this.primary,
                  "app-loader_background-alhpa": this.backgroundAlpha,
                },
                "app-loader_".concat(this.size),
              ];
            },
          },
          methods: {
            hasSlot: function (e) {
              return !!this.$slots[e];
            },
          },
        },
          ae = (0, V.Z)(oe, [
            [
              "render",
              function (e, t, n, r, o, a) {
                var s = (0, i.resolveComponent)("AfsIcon");
                return (
                  (0, i.openBlock)(),
                  (0, i.createBlock)(
                    i.Transition,
                    (0, i.normalizeProps)(
                      (0, i.guardReactiveProps)(a.bindTransition),
                    ),
                    {
                      default: (0, i.withCtx)(function () {
                        return [
                          (0, i.createElementVNode)(
                            "div",
                            {
                              class: (0, i.normalizeClass)([
                                "app-loader",
                                a.classes,
                              ]),
                            },
                            [
                              (0, i.createElementVNode)("div", ee, [
                                (0, i.createElementVNode)("div", te, [
                                  n.hasError
                                    ? (0, i.createCommentVNode)("v-if", !0)
                                    : ((0, i.openBlock)(),
                                      (0, i.createElementBlock)("div", ne)),
                                  n.hasIcon
                                    ? ((0, i.openBlock)(),
                                      (0, i.createBlock)(
                                        s,
                                        {
                                          key: 1,
                                          filled: n.hasError,
                                          name: a.computedIcon,
                                          class: (0, i.normalizeClass)([
                                            "app-loader__icon",
                                            { "is-error": n.hasError },
                                          ]),
                                        },
                                        null,
                                        8,
                                        ["filled", "name", "class"],
                                      ))
                                    : (0, i.createCommentVNode)("v-if", !0),
                                ]),
                                a.hasSlot("default")
                                  ? ((0, i.openBlock)(),
                                    (0, i.createElementBlock)(
                                      "div",
                                      {
                                        key: 0,
                                        class: (0, i.normalizeClass)([
                                          "app-loader__text",
                                          { "is-processing": !n.hasError },
                                        ]),
                                      },
                                      [
                                        (0, i.renderSlot)(
                                          e.$slots,
                                          "default",
                                          {},
                                          void 0,
                                          !0,
                                        ),
                                      ],
                                      2,
                                    ))
                                  : (0, i.createCommentVNode)("v-if", !0),
                                a.hasSlot("meta")
                                  ? ((0, i.openBlock)(),
                                    (0, i.createElementBlock)("div", re, [
                                      (0, i.renderSlot)(
                                        e.$slots,
                                        "meta",
                                        {},
                                        void 0,
                                        !0,
                                      ),
                                    ]))
                                  : (0, i.createCommentVNode)("v-if", !0),
                              ]),
                            ],
                            2,
                          ),
                        ];
                      }),
                      _: 3,
                    },
                    16,
                  )
                );
              },
            ],
            ["__scopeId", "data-v-30d447e2"],
          ]);
        var se = { class: "app-header" },
          ce = { class: "app-header__col app-header__secondary-controls" },
          le = { class: "app-header__col app-header__view-controls" },
          ue = { class: "app-header__col app-header__primary-controls" },
          de = { key: 0, class: "app-main-tabs" },
          pe = ["data-locator", "disabled", "onClick"],
          fe = { key: 0, class: "app-main-tabs__display-items" },
          me = { class: "app-main-tabs__name" },
          he = { class: "app-main-tabs__dropdown" },
          ve = { class: "app-main-tabs__menu-container" },
          ye = ["disabled", "onClick"],
          ge = n(23870),
          be = n(65725),
          we = n(75419);
        const ke = {
          name: "AppMainTabs",
          components: {
            AfsText: y.A,
            AfsIcon: m._,
            AfsContextMenu: h.C,
            AfsBadge: ge.B,
          },
          directives: { dropdown: be.d, hint: we.h },
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
              validator: function (e) {
                return (
                  !e.length ||
                  e.every(function (e) {
                    return (
                      (0, I.hasOwnProperty)(e, "text") &&
                      (0, I.hasOwnProperty)(e, "id")
                    );
                  })
                );
              },
            },
          },
          data: function () {
            return { isMenuOpened: !1, hintText: null };
          },
          computed: {
            hasTabs: function () {
              return this.items.length;
            },
            menuId: function () {
              return "app-main-tabs__menu";
            },
            reducedItems: function () {
              return this.items.reduce(
                function (e, t) {
                  return (
                    t.hidden ||
                    (t.isActive ? (e.active = t) : e.nonActive.push(t),
                      (e.mapped[t.id] = t)),
                    e
                  );
                },
                { active: {}, nonActive: [], mapped: {} },
              );
            },
            hintId: function () {
              return (0, R.g)();
            },
            hintConfig: function () {
              return {
                type: "hint",
                id: this.hintId,
                modifiers: { y: "bottom", x: "center" },
                offset: 8,
              };
            },
            isWip: function () {
              return !1;
            },
          },
          methods: {
            onClick: function (e) {
              (this.$emit("change", e),
                this.$refs[this.menuId] && this.$refs[this.menuId].close());
            },
            toggleIsOpened: function () {
              this.isMenuOpened = !this.isMenuOpened;
            },
            onHintOpen: function (e) {
              var t = this;
              return function () {
                t.hintText = t.reducedItems.mapped[e.id].hint;
              };
            },
            onHintClose: function () {
              var e = this;
              return function () {
                e.hintText = null;
              };
            },
          },
        },
          Ce = (0, V.Z)(ke, [
            [
              "render",
              function (e, t, n, r, o, a) {
                var s = (0, i.resolveComponent)("AfsIcon"),
                  c = (0, i.resolveComponent)("AfsText"),
                  l = (0, i.resolveComponent)("AfsBadge"),
                  u = (0, i.resolveComponent)("AfsContextMenu"),
                  d = (0, i.resolveDirective)("hint"),
                  p = (0, i.resolveDirective)("dropdown");
                return a.hasTabs
                  ? ((0, i.openBlock)(),
                    (0, i.createElementBlock)("div", de, [
                      ((0, i.openBlock)(!0),
                        (0, i.createElementBlock)(
                          i.Fragment,
                          null,
                          (0, i.renderList)(n.items, function (e) {
                            return (0, i.withDirectives)(
                              ((0, i.openBlock)(),
                                (0, i.createElementBlock)(
                                  "button",
                                  {
                                    key: e.id,
                                    "data-locator": e.id,
                                    type: "button",
                                    class: (0, i.normalizeClass)([
                                      "app-main-tabs__btn",
                                      {
                                        "is-selected":
                                          e.isActive && !e.disableActiveBtnState,
                                        "app-main-tabs__btn-icon": e.icon,
                                      },
                                    ]),
                                    style: (0, i.normalizeStyle)({
                                      minWidth: e.buttonMinWidth
                                        ? "".concat(e.buttonMinWidth, "px")
                                        : null,
                                    }),
                                    disabled: e.disabled,
                                    onClick: (0, i.withModifiers)(
                                      function (t) {
                                        return a.onClick(e);
                                      },
                                      ["prevent"],
                                    ),
                                  },
                                  [
                                    e.displayItems
                                      ? ((0, i.openBlock)(),
                                        (0, i.createElementBlock)("div", fe, [
                                          ((0, i.openBlock)(!0),
                                            (0, i.createElementBlock)(
                                              i.Fragment,
                                              null,
                                              (0, i.renderList)(
                                                e.displayItems,
                                                function (e, t) {
                                                  return (
                                                    (0, i.openBlock)(),
                                                    (0, i.createBlock)(
                                                      c,
                                                      {
                                                        key: e.text + t,
                                                        type: "title",
                                                        class: "app-main-tabs__text",
                                                      },
                                                      {
                                                        default: (0, i.withCtx)(
                                                          function () {
                                                            return [
                                                              e.icon
                                                                ? ((0, i.openBlock)(),
                                                                  (0, i.createBlock)(
                                                                    s,
                                                                    {
                                                                      key: 0,
                                                                      class:
                                                                        "app-main-tabs__icon",
                                                                      name: e.icon,
                                                                      filled: !0,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["name"],
                                                                  ))
                                                                : (0,
                                                                  i.createCommentVNode)(
                                                                    "v-if",
                                                                    !0,
                                                                  ),
                                                              (0, i.createElementVNode)(
                                                                "span",
                                                                null,
                                                                (0, i.toDisplayString)(
                                                                  e.text,
                                                                ),
                                                                1,
                                                              ),
                                                            ];
                                                          },
                                                        ),
                                                        _: 2,
                                                      },
                                                      1024,
                                                    )
                                                  );
                                                },
                                              ),
                                              128,
                                            )),
                                        ]))
                                      : ((0, i.openBlock)(),
                                        (0, i.createBlock)(
                                          c,
                                          {
                                            key: 1,
                                            type: "title",
                                            class: "app-main-tabs__text",
                                          },
                                          {
                                            default: (0, i.withCtx)(function () {
                                              return [
                                                e.icon
                                                  ? ((0, i.openBlock)(),
                                                    (0, i.createBlock)(
                                                      s,
                                                      {
                                                        key: 0,
                                                        class: "app-main-tabs__icon",
                                                        name: e.icon,
                                                        filled: !0,
                                                      },
                                                      null,
                                                      8,
                                                      ["name"],
                                                    ))
                                                  : (0, i.createCommentVNode)(
                                                    "v-if",
                                                    !0,
                                                  ),
                                                (0, i.createElementVNode)(
                                                  "span",
                                                  me,
                                                  (0, i.toDisplayString)(e.text),
                                                  1,
                                                ),
                                              ];
                                            }),
                                            _: 2,
                                          },
                                          1024,
                                        )),
                                    ((0, i.openBlock)(!0),
                                      (0, i.createElementBlock)(
                                        i.Fragment,
                                        null,
                                        (0, i.renderList)(e.badges, function (e) {
                                          return (
                                            (0, i.openBlock)(),
                                            (0, i.createBlock)(
                                              l,
                                              {
                                                key: e.text,
                                                size: e.size,
                                                class: "app-main-tabs__badge",
                                                type: e.type,
                                                uppercase: e.uppercase,
                                                style: {
                                                  "font-size": "11px",
                                                  "line-height": "12px",
                                                },
                                              },
                                              {
                                                default: (0, i.withCtx)(function () {
                                                  return [
                                                    (0, i.createTextVNode)(
                                                      (0, i.toDisplayString)(e.text),
                                                      1,
                                                    ),
                                                  ];
                                                }),
                                                _: 2,
                                              },
                                              1032,
                                              ["size", "type", "uppercase"],
                                            )
                                          );
                                        }),
                                        128,
                                      )),
                                  ],
                                  14,
                                  pe,
                                )),
                              [
                                [i.vShow, !e.hidden],
                                [
                                  d,
                                  e.hint && {
                                    id: a.hintId,
                                    delay: 100,
                                    onOpen: a.onHintOpen(e),
                                    onClose: a.onHintClose(),
                                  },
                                ],
                              ],
                            );
                          }),
                          128,
                        )),
                      (0, i.withDirectives)(
                        ((0, i.openBlock)(),
                          (0, i.createElementBlock)("button", he, [
                            (0, i.createVNode)(
                              c,
                              { type: "title", class: "app-main-tabs__text" },
                              {
                                default: (0, i.withCtx)(function () {
                                  return [
                                    (0, i.createTextVNode)(
                                      (0, i.toDisplayString)(
                                        a.reducedItems.active.text,
                                      ),
                                      1,
                                    ),
                                  ];
                                }),
                                _: 1,
                              },
                            ),
                            (0, i.withDirectives)(
                              (0, i.createVNode)(
                                s,
                                {
                                  name: "chevron-down-8",
                                  class: (0, i.normalizeClass)([
                                    "app-main-tabs__dropdown-icon",
                                    { "is-active": e.isMenuOpened },
                                  ]),
                                },
                                null,
                                8,
                                ["class"],
                              ),
                              [[i.vShow, a.reducedItems.nonActive.length]],
                            ),
                          ])),
                        [[p, void 0, a.menuId]],
                      ),
                      (0, i.createVNode)(
                        u,
                        {
                          id: a.menuId,
                          ref: a.menuId,
                          class: "app-main-tabs__menu",
                          type: "dropdown",
                          modifiers: { y: "bottom", x: "start" },
                          onOpen:
                            t[0] ||
                            (t[0] = function (e) {
                              return a.toggleIsOpened();
                            }),
                          onClose:
                            t[1] ||
                            (t[1] = function (e) {
                              return a.toggleIsOpened();
                            }),
                        },
                        {
                          default: (0, i.withCtx)(function () {
                            return [
                              (0, i.createElementVNode)("div", ve, [
                                ((0, i.openBlock)(!0),
                                  (0, i.createElementBlock)(
                                    i.Fragment,
                                    null,
                                    (0, i.renderList)(
                                      a.reducedItems.nonActive,
                                      function (e) {
                                        return (
                                          (0, i.openBlock)(),
                                          (0, i.createElementBlock)(
                                            "button",
                                            {
                                              key: e.id,
                                              class: "app-main-tabs__menu-item",
                                              disabled: e.disabled,
                                              onClick: (0, i.withModifiers)(
                                                function (t) {
                                                  return a.onClick(e);
                                                },
                                                ["prevent"],
                                              ),
                                            },
                                            [
                                              (0, i.createVNode)(
                                                c,
                                                {
                                                  type: "title",
                                                  class: "app-main-tabs__text",
                                                },
                                                {
                                                  default: (0, i.withCtx)(
                                                    function () {
                                                      return [
                                                        (0, i.createTextVNode)(
                                                          (0, i.toDisplayString)(
                                                            e.text,
                                                          ),
                                                          1,
                                                        ),
                                                      ];
                                                    },
                                                  ),
                                                  _: 2,
                                                },
                                                1024,
                                              ),
                                            ],
                                            8,
                                            ye,
                                          )
                                        );
                                      },
                                    ),
                                    128,
                                  )),
                              ]),
                            ];
                          }),
                          _: 1,
                        },
                        8,
                        ["id"],
                      ),
                      (0, i.withDirectives)(
                        (0, i.createVNode)(
                          u,
                          (0, i.normalizeProps)(
                            (0, i.guardReactiveProps)(a.hintConfig),
                          ),
                          {
                            default: (0, i.withCtx)(function () {
                              return [
                                e.hintText
                                  ? ((0, i.openBlock)(!0),
                                    (0, i.createElementBlock)(
                                      i.Fragment,
                                      { key: 0 },
                                      (0, i.renderList)(
                                        e.hintText.split("\n"),
                                        function (e, t) {
                                          return (
                                            (0, i.openBlock)(),
                                            (0, i.createBlock)(
                                              c,
                                              { key: t, type: "tooltip" },
                                              {
                                                default: (0, i.withCtx)(
                                                  function () {
                                                    return [
                                                      (0, i.createTextVNode)(
                                                        (0, i.toDisplayString)(e),
                                                        1,
                                                      ),
                                                    ];
                                                  },
                                                ),
                                                _: 2,
                                              },
                                              1024,
                                            )
                                          );
                                        },
                                      ),
                                      128,
                                    ))
                                  : (0, i.createCommentVNode)("v-if", !0),
                              ];
                            }),
                            _: 1,
                          },
                          16,
                        ),
                        [[i.vShow, e.hintText]],
                      ),
                    ]))
                  : (0, i.createCommentVNode)("v-if", !0);
              },
            ],
          ]);
        var _e = { class: "app-header-plugins" },
          Pe = ["id", "disabled", "onClick"];
        function Se(e) {
          return (
            (Se =
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
            Se(e)
          );
        }
        function Ee(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function je(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Ee(Object(n), !0).forEach(function (t) {
                Oe(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Ee(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
          }
          return e;
        }
        function Oe(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" != Se(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != Se(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == Se(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        const De = {
          name: "AppHeaderPlugin",
          components: { AfsIcon: m._, AfsContextMenu: h.C, AfsText: y.A },
          directives: { hint: we.h, modal: M },
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
              validator: function (e) {
                return (
                  !e.length ||
                  e.every(function (e) {
                    return (
                      ((0, I.hasOwnProperty)(e, "text") ||
                        (0, I.hasOwnProperty)(e, "icon")) &&
                      (0, I.hasOwnProperty)(e, "id")
                    );
                  })
                );
              },
            },
            isGlobal: { type: Boolean, default: !1 },
            isPrimary: { type: Boolean, default: !1 },
          },
          emits: ["click"],
          data: function () {
            return { hintText: null };
          },
          computed: {
            filteredItems: function () {
              return this.items.filter(function (e) {
                return e.hasButton;
              });
            },
            hintId: function () {
              return (0, R.g)();
            },
            hintConfig: function () {
              return {
                type: "hint",
                id: this.hintId,
                modifiers: { y: "bottom", x: "center" },
                offset: 8,
              };
            },
            mappedItems: function () {
              return this.filteredItems.reduce(function (e, t) {
                return je(je({}, e), {}, Oe({}, t.id, t));
              }, {});
            },
          },
          methods: {
            onHintOpen: function (e) {
              var t = this;
              return function () {
                t.hintText = t.mappedItems[e.id].hint;
              };
            },
            onHintClose: function (e) {
              var t = this;
              return function () {
                t.hintText = null;
              };
            },
            handleButtonClick: function (e, t) {
              t.modalTarget || (e.preventDefault(), this.$emit("click", t));
            },
          },
        },
          Le = {
            name: "AppHeader",
            components: {
              MainTabs: Ce,
              HeaderPlugins: (0, V.Z)(De, [
                [
                  "render",
                  function (e, t, n, r, o, a) {
                    var s = (0, i.resolveComponent)("AfsIcon"),
                      c = (0, i.resolveComponent)("AfsText"),
                      l = (0, i.resolveComponent)("AfsContextMenu"),
                      u = (0, i.resolveDirective)("hint"),
                      d = (0, i.resolveDirective)("modal");
                    return (
                      (0, i.openBlock)(),
                      (0, i.createElementBlock)("div", _e, [
                        ((0, i.openBlock)(!0),
                          (0, i.createElementBlock)(
                            i.Fragment,
                            null,
                            (0, i.renderList)(a.filteredItems, function (e) {
                              return (0, i.withDirectives)(
                                ((0, i.openBlock)(),
                                  (0, i.createElementBlock)(
                                    "button",
                                    {
                                      id: "".concat(e.id, "-control"),
                                      key: e.id,
                                      type: "button",
                                      class: (0, i.normalizeClass)([
                                        "app-header-plugins__btn",
                                        {
                                          "is-selected":
                                            e.isActive && !e.disableActiveBtnState,
                                          "app-header-plugins__btn_local":
                                            !n.isGlobal && !n.isPrimary,
                                          "prevent-modal-close": e.preventModalClose,
                                        },
                                      ]),
                                      disabled: e.disabled,
                                      onClick: function (t) {
                                        return a.handleButtonClick(t, e);
                                      },
                                    },
                                    [
                                      e.icon
                                        ? ((0, i.openBlock)(),
                                          (0, i.createBlock)(
                                            s,
                                            {
                                              key: 0,
                                              name: e.icon,
                                              filled: e.iconFilled,
                                              class: "app-header-plugins__icon",
                                            },
                                            null,
                                            8,
                                            ["name", "filled"],
                                          ))
                                        : (0, i.createCommentVNode)("v-if", !0),
                                      e.text
                                        ? ((0, i.openBlock)(),
                                          (0, i.createBlock)(
                                            c,
                                            {
                                              key: 1,
                                              class: "app-header-plugins__text",
                                            },
                                            {
                                              default: (0, i.withCtx)(function () {
                                                return [
                                                  (0, i.createTextVNode)(
                                                    (0, i.toDisplayString)(e.text),
                                                    1,
                                                  ),
                                                ];
                                              }),
                                              _: 2,
                                            },
                                            1024,
                                          ))
                                        : (0, i.createCommentVNode)("v-if", !0),
                                      e.dropdown
                                        ? ((0, i.openBlock)(),
                                          (0, i.createBlock)(
                                            s,
                                            {
                                              key: 2,
                                              name: "chevron-down-8",
                                              class: (0, i.normalizeClass)([
                                                "app-header-plugins__dropdown-icon",
                                                { "is-active": e.isActive },
                                              ]),
                                            },
                                            null,
                                            8,
                                            ["class"],
                                          ))
                                        : (0, i.createCommentVNode)("v-if", !0),
                                    ],
                                    10,
                                    Pe,
                                  )),
                                [
                                  [
                                    u,
                                    e.hint && {
                                      id: a.hintId,
                                      delay: 100,
                                      onOpen: a.onHintOpen(e),
                                      onClose: a.onHintClose(e),
                                    },
                                  ],
                                  [d, void 0, e.modalTarget],
                                ],
                              );
                            }),
                            128,
                          )),
                        (0, i.createVNode)(
                          l,
                          (0, i.normalizeProps)(
                            (0, i.guardReactiveProps)(a.hintConfig),
                          ),
                          {
                            default: (0, i.withCtx)(function () {
                              return [
                                (0, i.createTextVNode)(
                                  (0, i.toDisplayString)(e.hintText),
                                  1,
                                ),
                              ];
                            }),
                            _: 1,
                          },
                          16,
                        ),
                      ])
                    );
                  },
                ],
                ["__scopeId", "data-v-315549df"],
              ]),
            },
            props: {
              views: {
                type: Array,
                default: function () {
                  return [];
                },
              },
              globalPlugins: {
                type: Array,
                default: function () {
                  return [];
                },
              },
              localPlugins: {
                type: Array,
                default: function () {
                  return [];
                },
              },
            },
            computed: {
              localPluginsByType: function () {
                return this.localPlugins.reduce(
                  function (e, t) {
                    return (
                      "primary" === t.localType
                        ? e.primary.push(t)
                        : e.secondary.push(t),
                      e
                    );
                  },
                  { primary: [], secondary: [] },
                );
              },
            },
          },
          Be = (0, V.Z)(Le, [
            [
              "render",
              function (e, t, n, r, o, a) {
                var s = (0, i.resolveComponent)("HeaderPlugins"),
                  c = (0, i.resolveComponent)("MainTabs");
                return (
                  (0, i.openBlock)(),
                  (0, i.createElementBlock)("header", se, [
                    (0, i.createElementVNode)("div", ce, [
                      (0, i.createVNode)(
                        s,
                        {
                          items: a.localPluginsByType.secondary,
                          onClick:
                            t[0] ||
                            (t[0] = function (t) {
                              return e.$emit("local-plugin:click", t);
                            }),
                        },
                        null,
                        8,
                        ["items"],
                      ),
                    ]),
                    (0, i.createElementVNode)("div", le, [
                      (0, i.createVNode)(
                        c,
                        {
                          items: n.views,
                          onChange:
                            t[1] ||
                            (t[1] = function (t) {
                              return e.$emit("view:change", t);
                            }),
                        },
                        null,
                        8,
                        ["items"],
                      ),
                    ]),
                    (0, i.createElementVNode)("div", ue, [
                      (0, i.createVNode)(
                        s,
                        {
                          items: a.localPluginsByType.primary,
                          "is-primary": "",
                          onClick:
                            t[2] ||
                            (t[2] = function (t) {
                              return e.$emit("local-plugin:click", t);
                            }),
                        },
                        null,
                        8,
                        ["items"],
                      ),
                      (0, i.createVNode)(
                        s,
                        {
                          items: n.globalPlugins,
                          "is-global": "",
                          onClick:
                            t[3] ||
                            (t[3] = function (t) {
                              return e.$emit("global-plugin:click", t);
                            }),
                        },
                        null,
                        8,
                        ["items"],
                      ),
                    ]),
                  ])
                );
              },
            ],
            ["__scopeId", "data-v-4817c8b6"],
          ]);
        var xe = ["href"],
          Ae = [
            (0, i.createStaticVNode)(
              '<svg class="app-watermark__icon" viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4412_1895)"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.6492 37.2422C31.6492 37.2422 36.2741 34.5853 38.0398 33.5733C38.4566 33.3326 38.712 32.8913 38.712 32.4143C38.712 30.2521 38.6717 24.3008 38.6717 24.3008L23.8066 32.8155L31.6492 37.2422Z" fill="url(#paint0_linear_4412_1895)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 25.0005V32.3651C0 32.8421 0.255444 33.2834 0.672222 33.5241C2.55444 34.6074 7.74848 37.5452 7.74848 37.5452V20.4668L0 25.0005Z" fill="url(#paint1_linear_4412_1895)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26.4811 3.79846C26.4811 3.79846 21.8786 1.17719 20.1219 0.178603C19.7051 -0.0576681 19.1942 -0.0576681 18.7819 0.183061C16.8997 1.26189 11.7012 4.29329 11.7012 4.29329L26.5483 12.7277L26.4811 3.79846V3.79846Z" fill="url(#paint2_linear_4412_1895)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4496 8.67072V12.1435C19.4496 13.249 18.8581 14.2655 17.899 14.8227L1.39374 24.3583C0.587074 24.7996 0.0358519 25.6377 0 26.6051V11.9919C0 11.3544 0.340593 10.766 0.896296 10.4494C4.31567 8.48349 18.7819 0.178318 18.7819 0.178318C18.988 0.0579534 19.2211 0 19.4496 0V8.67072Z" fill="url(#paint3_linear_4412_1895)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7285 26.9037C11.6875 26.3509 12.8751 26.3465 13.8386 26.8948L30.3529 36.3323C30.7697 36.5953 31.2626 36.7469 31.7914 36.7469C32.3202 36.7469 32.7774 36.6042 33.1852 36.359C33.1852 36.359 23.3707 42.0028 20.3188 43.7592C19.7631 44.0802 19.0819 44.0802 18.5262 43.7592C15.2189 41.8602 0.63617 33.4792 0.63617 33.4792C0.434503 33.3588 0.27317 33.1939 0.161133 32.9977L2.04335 31.91C2.04335 31.91 3.32954 31.17 4.06002 30.7465L10.7285 26.9037Z" fill="url(#paint4_linear_4412_1895)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M38.7153 31.219V32.4093C38.7153 32.6456 38.6526 32.8774 38.536 33.0735L30.9847 28.7136C29.9092 28.094 28.8292 27.4699 27.897 26.9305C26.938 26.3777 26.3509 25.3613 26.3464 24.2646L26.2971 5.29155V5.25143C26.2971 4.25285 25.7459 3.37909 24.9258 2.91992C24.9258 2.91992 34.7671 8.58598 37.8235 10.3469C38.3792 10.6634 38.7198 11.2518 38.7198 11.8893L38.7153 31.219Z" fill="url(#paint5_linear_4412_1895)"></path><path d="M49.6602 11.582H50.6002L54.6502 20.454H53.5702L52.5302 18.126H47.6932L46.6392 20.454H45.6102L49.6602 11.582ZM52.1362 17.232L50.1172 12.74L48.0872 17.232H52.1362ZM56.2672 11.646H57.2702V19.536H62.2722V20.455H56.2672V11.646ZM64.8952 12.565H61.9102V11.646H68.8932V12.565H65.9102V20.455H64.8952V12.565ZM70.7292 11.646H71.7322V20.455H70.7292V11.646ZM74.1062 16.768V11.646H75.1092V16.705C75.1092 18.605 76.1252 19.675 77.8262 19.675C79.4642 19.675 80.5042 18.693 80.5042 16.768V11.646H81.5072V16.692C81.5072 19.259 80.0222 20.593 77.8002 20.593C75.6042 20.593 74.1062 19.259 74.1062 16.768ZM83.7482 11.646H84.7632L88.0002 16.453L91.2372 11.646H92.2532V20.455H91.2502V13.32L88.0132 18.039H87.9632L84.7252 13.332V20.455H83.7482V11.646ZM48.9952 33.947H51.2952L54.9222 24.942H52.2022L50.1702 30.6L48.1392 24.94H45.3672L48.9952 33.947ZM55.8392 33.883H58.3292V24.942H55.8392V33.883ZM59.9672 33.883H67.2222V31.776H62.4202V30.358H66.7132V28.403H62.4202V27.05H67.1602V24.943H59.9682V33.884L59.9672 33.883ZM70.8762 33.947H73.0352L74.8232 28.799L76.6242 33.947H78.7832L81.7732 24.942H79.2042L77.6462 30.115L75.9212 24.916H73.7882L72.0642 30.116L70.5052 24.942H67.8872L70.8762 33.947ZM82.7582 33.883H90.0142V31.776H85.2102V30.358H89.5022V28.403H85.2102V27.05H89.9492V24.943H82.7572V33.884L82.7582 33.883ZM91.2782 33.883H93.7572V31.175H94.8422L96.6442 33.883H99.5042L97.3722 30.767C98.4832 30.294 99.2122 29.387 99.2122 28.02V27.995C99.2122 27.113 98.9422 26.423 98.4192 25.912C97.8192 25.299 96.8742 24.942 95.5072 24.942H91.2782V33.883ZM93.7572 29.233V27.088H95.3792C96.2092 27.088 96.7202 27.445 96.7202 28.148V28.173C96.7202 28.825 96.2352 29.233 95.3922 29.233H93.7572ZM100.388 20.55C99.0122 20.55 97.9252 20.03 97.1252 18.987L97.8382 18.35C98.5462 19.217 99.4002 19.65 100.4 19.65C100.942 19.65 101.396 19.492 101.763 19.175C102.129 18.858 102.313 18.442 102.313 17.925C102.313 17.392 102.088 16.979 101.638 16.687C101.188 16.387 100.596 16.237 99.8622 16.237H99.3002L99.1002 15.65L101.863 12.537H97.5882V11.65H103.175V12.375L100.425 15.425C101.258 15.492 101.946 15.733 102.488 16.15C103.037 16.558 103.312 17.146 103.312 17.913C103.312 18.679 103.029 19.313 102.463 19.813C101.904 20.304 101.213 20.55 100.388 20.55ZM108.329 20.55C107.279 20.55 106.449 20.204 105.841 19.512C105.233 18.821 104.929 17.733 104.929 16.25C104.929 14.883 105.254 13.75 105.904 12.85C106.562 11.95 107.449 11.5 108.566 11.5C109.474 11.5 110.337 11.833 111.154 12.5L110.579 13.262C109.895 12.687 109.208 12.4 108.516 12.4C107.741 12.4 107.12 12.754 106.654 13.463C106.187 14.171 105.954 15.092 105.954 16.225V16.262C106.562 15.371 107.391 14.925 108.441 14.925C109.283 14.925 109.995 15.175 110.579 15.675C111.17 16.175 111.466 16.829 111.466 17.637C111.466 18.479 111.166 19.175 110.566 19.725C109.966 20.275 109.22 20.55 108.329 20.55ZM108.341 19.675C108.974 19.675 109.483 19.483 109.866 19.1C110.258 18.717 110.454 18.233 110.454 17.65C110.454 17.108 110.254 16.663 109.854 16.313C109.454 15.954 108.941 15.775 108.316 15.775C107.683 15.775 107.158 15.971 106.741 16.363C106.333 16.746 106.129 17.196 106.129 17.713C106.129 18.271 106.337 18.737 106.754 19.113C107.17 19.488 107.699 19.675 108.341 19.675ZM116.047 20.55C114.888 20.55 113.847 20.087 112.922 19.163L113.572 18.45C114.397 19.25 115.226 19.65 116.059 19.65C116.684 19.65 117.193 19.467 117.584 19.1C117.976 18.733 118.172 18.262 118.172 17.687C118.172 17.146 117.968 16.704 117.559 16.362C117.159 16.021 116.638 15.85 115.997 15.85C115.397 15.85 114.784 16.017 114.159 16.35L113.497 15.912L113.747 11.65H118.784V12.562H114.609L114.422 15.362C115.013 15.104 115.588 14.975 116.147 14.975C117.022 14.975 117.743 15.221 118.309 15.713C118.884 16.196 119.172 16.85 119.172 17.675C119.172 18.525 118.88 19.217 118.297 19.75C117.713 20.283 116.963 20.55 116.047 20.55Z" fill="#252A3A"></path></g><defs><linearGradient id="paint0_linear_4412_1895" x1="35.9022" y1="30.6034" x2="27.8392" y2="32.446" gradientUnits="userSpaceOnUse"><stop stop-color="#003E89"></stop><stop offset="1" stop-color="#1368BC"></stop></linearGradient><linearGradient id="paint1_linear_4412_1895" x1="1.38747" y1="25.0857" x2="8.10108" y2="29.6804" gradientUnits="userSpaceOnUse"><stop stop-color="#003E89"></stop><stop offset="1" stop-color="#1368BC"></stop></linearGradient><linearGradient id="paint2_linear_4412_1895" x1="16.6245" y1="5.02574" x2="26.819" y2="7.16563" gradientUnits="userSpaceOnUse"><stop stop-color="#1368BC"></stop><stop offset="1" stop-color="#003E89"></stop></linearGradient><linearGradient id="paint3_linear_4412_1895" x1="16.5125" y1="15.9314" x2="1.44834" y2="10.0347" gradientUnits="userSpaceOnUse"><stop stop-color="#57BFFF"></stop><stop offset="1" stop-color="#0B55D9"></stop></linearGradient><linearGradient id="paint4_linear_4412_1895" x1="18.3192" y1="30.8419" x2="14.283" y2="40.3478" gradientUnits="userSpaceOnUse"><stop stop-color="#5EB9FC"></stop><stop offset="1" stop-color="#0B55D9"></stop></linearGradient><linearGradient id="paint5_linear_4412_1895" x1="38.6544" y1="13.1603" x2="26.2432" y2="21.9214" gradientUnits="userSpaceOnUse"><stop stop-color="#0B55D9"></stop><stop offset="1" stop-color="#57BFFF"></stop></linearGradient><clipPath id="clip0_4412_1895"><rect width="120" height="44" fill="white"></rect></clipPath></defs></svg>',
              1,
            ),
          ];
        const Ve = {
          name: "AppWatermark",
          data: function () {
            return { url: "http://altium.com/viewer" };
          },
        },
          Te = (0, V.Z)(Ve, [
            [
              "render",
              function (e, t, n, r, o, a) {
                return (
                  (0, i.openBlock)(),
                  (0, i.createElementBlock)(
                    "a",
                    { href: e.url, target: "_blank", class: "app-watermark" },
                    Ae,
                    8,
                    xe,
                  )
                );
              },
            ],
          ]);
        var Ne = n(23864),
          Me = n(19577);
        function Ie(e) {
          return (
            (Ie =
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
            Ie(e)
          );
        }
        function Re(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, He(r.key), r));
          }
        }
        function Fe(e, t, n) {
          return (
            (t = He(t)) in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function He(e) {
          var t = (function (e, t) {
            if ("object" != Ie(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != Ie(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == Ie(t) ? t : t + "";
        }
        var ze = {
          2: "PCB.2D",
          3: "PCB.3D",
          Difference: "GerberCompare.Compare",
          Target: "GerberCompare.Target",
          Source: "GerberCompare.Source",
        },
          Ze = (function () {
            return (
              (e = function e(t, n) {
                var r = this;
                (!(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  Fe(this, "onFpsChange", function (e, t) {
                    r.sentReportTypes.includes(t) ||
                      (r.addItemToArray(e, 2),
                        r.averagePerformanceFps &&
                        r.averagePerformanceFps < 15 &&
                        r.sendReport(t));
                  }),
                  Fe(this, "onRenderTimeChange", function (e, t, n) {
                    r.sentReportTypes.includes(n) ||
                      ((r.docSize = t),
                        r.addItemToArray(e, 1),
                        r.averageRenderTime &&
                        r.averageRenderTime > 200 &&
                        r.sendReport(n));
                  }),
                  Fe(this, "addItemToArray", function (e, t) {
                    var n = 1 === t ? r.renderTimeArray : r.performanceFpsArray;
                    (n.push(e), n.length > 10 && n.shift());
                  }),
                  Fe(this, "logToConsole", function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 15;
                    if (!(e <= 0)) {
                      for (var n = "", r = 0; r < e; r++) n += "-";
                      n += e;
                      var i = e <= t ? "red" : "green";
                      console.log(
                        "%c ".concat(n),
                        "background: ".concat(i, "; color: black"),
                      );
                    }
                  }),
                  (this.appMonitoring = t),
                  (this.core = n),
                  (this.renderTimeArray = []),
                  (this.performanceFpsArray = []),
                  (this.sentReportTypes = []),
                  (this.docSize = null));
              }),
              (t = [
                { key: "init", value: function () { } },
                {
                  key: "averagePerformanceFps",
                  get: function () {
                    return (
                      10 === this.performanceFpsArray.length &&
                      this.performanceFpsArray.reduce(function (e, t) {
                        return e + t;
                      }, 0) / this.performanceFpsArray.length
                    );
                  },
                },
                {
                  key: "averageRenderTime",
                  get: function () {
                    return (
                      10 === this.renderTimeArray.length &&
                      this.renderTimeArray.reduce(function (e, t) {
                        return e + t;
                      }, 0) / this.renderTimeArray.length
                    );
                  },
                },
                {
                  key: "sendReport",
                  value: function (e) {
                    var t = this;
                    try {
                      var n = ze[e] || "Gerber";
                      if (this.appMonitoring.sentry) {
                        var r = k(),
                          i = r.vendor,
                          o = r.renderer;
                        this.appMonitoring.sentry.withScope(function (e) {
                          (e.setLevel("info"),
                            t.appMonitoring.capture(
                              new Error(
                                "Viewer.".concat(n, ".RenderSpeedDecrease"),
                              ),
                              {
                                tags: {
                                  render_time: Math.round(t.averageRenderTime),
                                  fps: Math.round(t.averagePerformanceFps),
                                  webgl_vendor: i,
                                  webgl_renderer: o,
                                  document_size: t.docSize,
                                },
                              },
                            ));
                        });
                      }
                    } catch (e) {
                      console.error(e);
                    } finally {
                      this.sentReportTypes.push(e);
                    }
                  },
                },
              ]),
              t && Re(e.prototype, t),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
            var e, t;
          })();
        function Ue(e) {
          return (
            (Ue =
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
            Ue(e)
          );
        }
        function Ge(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, We(r.key), r));
          }
        }
        function We(e) {
          var t = (function (e, t) {
            if ("object" != Ue(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != Ue(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == Ue(t) ? t : t + "";
        }
        var $e = (function () {
          return (
            (e = function e(t) {
              var n = this;
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.bus = t),
                (this.windowWidth = 0),
                (this.windowHeight = 0),
                (this.headerHeight = 0),
                (this.sidebarWidth = 0),
                (this.updated = !1),
                (this.modals = new Map()),
                (this.logger = window.__CORE__.createLogger(
                  "App:AppLayoutUpdateNotifier",
                )),
                (this.onWindowResize = function () {
                  ((n.windowWidth = window.innerWidth),
                    (n.windowHeight = window.innerHeight),
                    n.updateLayout());
                }));
            }),
            (t = [
              {
                key: "initialize",
                value: function () {
                  (window.addEventListener("resize", this.onWindowResize),
                    this.onWindowResize());
                },
              },
              {
                key: "setHeaderHeight",
                value: function (e) {
                  Number.isFinite(e) &&
                    e !== this.headerHeight &&
                    ((this.headerHeight = e), this.updateLayoutImmediate());
                },
              },
              {
                key: "setSideBarWidth",
                value: function (e) {
                  Number.isFinite(e) &&
                    e !== this.sidebarWidth &&
                    ((window.__APP__.sidebarWidth = e),
                      (this.sidebarWidth = e),
                      this.updateLayoutImmediate());
                },
              },
              {
                key: "addModal",
                value: function (e) {
                  (this.modals.set(e.id, Object.assign({}, e)),
                    this.updateLayoutImmediate());
                },
              },
              {
                key: "removeModal",
                value: function (e) {
                  this.modals.delete(e) && this.updateLayoutImmediate();
                },
              },
              {
                key: "updateModalWidth",
                value: function (e, t) {
                  var n = this.modals.get(e);
                  n &&
                    n.width !== t &&
                    ((n.width = t), this.updateLayoutImmediate());
                },
              },
              {
                key: "updateLayoutImmediate",
                value: function () {
                  try {
                    var e = function (e, t, n) {
                      return (n(t) && e.push({ id: t.id, offset: t.width }), e);
                    },
                      t = Array.from(this.modals.values()),
                      n = t.reduce(function (t, n) {
                        return e(t, n, function (e) {
                          return e.isLeftModal;
                        });
                      }, new Array()),
                      r = t.reduce(function (t, n) {
                        return e(t, n, function (e) {
                          return e.isRightModal;
                        });
                      }, new Array());
                    if (n.length < 2 && r.length < 2) {
                      this.sidebarWidth > 0 &&
                        n.unshift({ id: "Sidebar", offset: this.sidebarWidth });
                      var i = {
                        width: this.windowWidth,
                        height: this.windowHeight,
                        left: n,
                        right: r,
                        top: this.headerHeight
                          ? [{ id: "Header", offset: this.headerHeight }]
                          : [],
                        bottom: [],
                      };
                      this.bus.emit("Layout:update", i);
                    }
                    this.updated = !0;
                  } catch (e) {
                    this.logger.LogError("Upadate layout changing error", e);
                  }
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  var e = this;
                  ((this.updated = !1),
                    window.__APP__.utils.debounce(
                      "app:layout:changed",
                      function () {
                        e.updated || e.updateLayoutImmediate();
                      },
                      20,
                    ));
                },
              },
            ]),
            t && Ge(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
        function Ye(e) {
          return (
            (Ye =
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
            Ye(e)
          );
        }
        function Ke(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function Xe(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function qe(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Xe(Object(n), !0).forEach(function (t) {
                Je(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Xe(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
          }
          return e;
        }
        function Je(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" != Ye(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != Ye(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == Ye(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        const Qe = {
          name: "Viewer",
          components: {
            Header: Be,
            Loader: ae,
            Watermark: Te,
            AfsIcon: m._,
            AfsContextMenu: h.C,
            AfsLink: v.A,
            AfsText: y.A,
            Alert: Q,
            Sidebar: T,
            GridContainer: g.G,
          },
          directives: { modal: M },
          data: function () {
            return {
              isExpired: !1,
              isLoading: !0,
              isLoadingFailed: !1,
              loaderMessage: "",
              loaderMeta: "",
              isLoaderPrimary: !0,
              hasLoaderIcon: !0,
              loaderIcon: "",
              isLogoVisible: !0,
              viewsPadding: { left: 0, right: 0 },
              presentViews: [],
              isDesignProcessed: !0,
              unloadPageSignal: !1,
              appLayoutUpdateNotifier: new $e(window.__CORE__.bus),
              excludeViewsFromAnalytics: [
                "PCBView",
                "PCBView3D",
                "GerberCompareSourceView",
                "GerberCompareTargetView",
                "TABLE_COMPARE_LEFT",
                "TABLE_COMPARE_RIGHT",
                "SwitchPcbSide",
              ],
              layoutChanged: !1,
              headerBottom: 0,
            };
          },
          computed: qe(
            qe(
              qe(
                {},
                (0, o.rn)([
                  "views",
                  "globalPlugins",
                  "localPluginsDictionary",
                  "activeView",
                  "activePlugins",
                  "modals",
                  "sidebar",
                  "trimmedText",
                ]),
              ),
              (0, o.Se)(["localPlugins", "globalPluginsList", "viewsList"]),
            ),
            {},
            {
              viewsStyles: function () {
                return {
                  paddingLeft: "".concat(this.viewsPadding.left, "px"),
                  paddingRight: "".concat(this.viewsPadding.right, "px"),
                };
              },
              modalsList: function () {
                var e = this;
                return (0, I.isEmptyObject)(this.modals)
                  ? []
                  : Object.values(this.modals).map(function (t) {
                    return qe(
                      qe({}, t),
                      {},
                      {
                        listeners: {
                          open: function (n) {
                            (e.setActivePlugin(t.module),
                              e.appLayoutUpdateNotifier.addModal(n),
                              (e.layoutChanged = !0));
                          },
                          close: function () {
                            return e.appLayoutUpdateNotifier.removeModal(
                              t.id,
                            );
                          },
                          closed: function () {
                            (e.removeActivePlugin(t.module),
                              (e.layoutChanged = !0));
                          },
                          resized: function (n) {
                            (e.appLayoutUpdateNotifier.updateModalWidth(
                              t.id,
                              n,
                            ),
                              n &&
                              Ne.Z.bus.emit("Modal:panelWidth", {
                                id: e.id,
                                width: n,
                              }));
                          },
                        },
                      },
                    );
                  });
              },
              trimmedTextMenuBind: function () {
                return {
                  id: "app-trimmed-text-hint",
                  type: "hint",
                  modifiers: { y: "top", x: "center" },
                  offset: 8,
                };
              },
              hasLogo: function () {
                return (
                  this.isLogoVisible &&
                  !this.coreInitialData.attributes["data-logo-hidden"]
                );
              },
              isAfsCompare: function () {
                return !1;
              },
              isCompare: function () {
                var e, t;
                return null === (e = this.coreInitialData) ||
                  void 0 === e ||
                  null === (t = e.attributes) ||
                  void 0 === t
                  ? void 0
                  : t["data-comparison-source-id"];
              },
              token: function () {
                var e, t;
                return null === (e = this.coreInitialData) ||
                  void 0 === e ||
                  null === (t = e.attributes) ||
                  void 0 === t
                  ? void 0
                  : t["data-project-token"];
              },
              hiddenHeader: function () {
                var e, t;
                return null === (e = this.coreInitialData) ||
                  void 0 === e ||
                  null === (t = e.attributes) ||
                  void 0 === t
                  ? void 0
                  : t["data-hide-header"];
              },
              parentEvents: function () {
                return window.__APP__.parentEvents;
              },
            },
          ),
          watch: {
            viewsList: {
              handler: function (e) {
                if (
                  e.some(function (e) {
                    return e.hidden && e.isActive;
                  })
                )
                  this.changeView(
                    this.views.find(function (e) {
                      return !e.hidden;
                    }),
                  );
                else if (
                  e.some(function (e) {
                    return e.isActive;
                  }) ||
                  e.every(function (e) {
                    return e.hidden;
                  })
                ) {
                  Ne.Z.bus.emit(
                    "Views:update",
                    e.map(function (e) {
                      return qe({}, e);
                    }),
                  );
                  var t = this.presentViews.length,
                    n = e.reduce(function (e, t) {
                      return (
                        (null != t && t.hidden) ||
                        e.push({ id: t.id, name: t.text }),
                        e
                      );
                    }, []);
                  ((this.presentViews = n.length
                    ? n.map(function (e) {
                      return e.name;
                    })
                    : []),
                    t !== this.presentViews.length &&
                    (this.parentEvents.emit(
                      "viewer:set-present-views",
                      this.presentViews,
                    ),
                      this.parentEvents.emit(
                        "viewer:set-present-list-views",
                        n,
                      )));
                }
              },
              deep: !0,
            },
            isLoading: {
              handler: function (e) {
                e || this.appLayoutUpdateNotifier.initialize();
              },
            },
            layoutChanged: function (e) {
              var t = this;
              if (e) {
                var n = document.querySelector(".app-header"),
                  r = n ? n.offsetHeight + n.offsetTop : 0;
                ((this.headerBottom = r),
                  (0, i.nextTick)(function () {
                    return (t.layoutChanged = !1);
                  }));
              }
            },
          },
          props: ["domain", "coreInitialData"],
          created: function () {
            var e = this;
            (window.addEventListener("beforeunload", function (t) {
              e.unloadPageSignal = !0;
            }),
              Object.defineProperty(window.__APP__, "isDesignProcessed", {
                get: function () {
                  return e.isDesignProcessed;
                },
              }),
              this.initCommon(),
              this.initCore(),
              this.initUnits(),
              this.initOnSceneItnteracted(),
              setTimeout(function () {
                return e.parentEvents.emit("viewer-inited");
              }, 200),
              document.addEventListener("keyup", this.handleKey),
              (this.loaderMessage = this.$t(
                "viewer.plugins.ui.App.initializing",
              )),
              this.parentEvents.on("app:view:activate", function (e) {
                Ne.Z.bus.emit("View:set", e.id);
              }));
          },
          mounted: function () {
            this.layoutChanged = !0;
          },
          beforeUnmount: function () {
            document.removeEventListener("keyup", this.handleKey);
          },
          methods: qe(
            qe(
              {},
              (0, o.OI)([
                "setView",
                "setGlobalPlugin",
                "setLocalPluginDictionary",
                "setModal",
                "setActiveView",
                "setActivePlugin",
                "removeActivePlugin",
                "updateViewInterface",
                "updateGlobalPluginsInterface",
                "updateLocalPluginsInterface",
              ]),
            ),
            {},
            {
              initCommon: function () {
                var e = this;
                ("ontouchstart" in window &&
                  document.body.classList.add("is-touch"),
                  Ne.Z.bus.on("storageResolveComplete", function (t) {
                    return e.parentEvents.emit("data-storage-resolve", {
                      files: t.files,
                    });
                  }),
                  this.initOnUpdateInterface(),
                  this.initAnalytics(),
                  this.checkWebGl2());
              },
              initUnits: function () {
                (!Me.Z.get() && Me.Z.set("mm"),
                  Ne.Z.bus.on("metadataResolveComplete", function (e) {
                    var t, n, r, i;
                    "number" ==
                      typeof (null == e ||
                        null === (t = e.pcbDocument) ||
                        void 0 === t
                        ? void 0
                        : t.units) &&
                      W.LG[
                      null == e ||
                        null === (n = e.pcbDocument) ||
                        void 0 === n
                        ? void 0
                        : n.units
                      ] &&
                      (Me.Z.set(
                        W.LG[
                        null == e ||
                          null === (r = e.pcbDocument) ||
                          void 0 === r
                          ? void 0
                          : r.units
                        ],
                      ),
                        Ne.Z.bus.emit(
                          "HelpPanel:changeUnit",
                          W.LG[
                          null == e ||
                            null === (i = e.pcbDocument) ||
                            void 0 === i
                            ? void 0
                            : i.units
                          ],
                        ));
                  }));
              },
              initCore: function () {
                var e = this;
                (Ne.Z.bus.registerEvent("View:activate"),
                  Ne.Z.bus.registerEvent("View:deactivate"),
                  Ne.Z.bus.registerEvent("Views:update"),
                  Ne.Z.bus.registerEvent("Views:disable"),
                  Ne.Z.bus.registerEvent("Views:enable"),
                  Ne.Z.bus.registerEvent("Views:updatePadding"),
                  Ne.Z.bus.registerEvent("GlobalPlugins:disable"),
                  Ne.Z.bus.registerEvent("GlobalPlugins:enable"),
                  Ne.Z.bus.registerEvent("LocalPlugins:disable"),
                  Ne.Z.bus.registerEvent("LocalPlugins:enable"),
                  Ne.Z.bus.registerEvent("Logo:show"),
                  Ne.Z.bus.registerEvent("Logo:hide"),
                  Ne.Z.bus.registerEvent("Modal:panelWidth"),
                  Ne.Z.bus.registerEvent("View:set"),
                  Ne.Z.bus.registerEvent("Document:open-error"),
                  Ne.Z.bus.registerEvent("Layout:update"),
                  this.initViewsListeners(),
                  this.initPluginsListeners(),
                  this.initLogoVisibilityListeners(),
                  Ne.Z.bus.on("designResolveFirstStatus", function (t) {
                    return e.parentEvents.emit("source:status", t);
                  }),
                  Ne.Z.bus.on("progress", this.onDesignProcessing),
                  Ne.Z.bus.on("designId", this.onSetupDeisgnId),
                  Ne.Z.bus.on("error", this.onSetupError),
                  Ne.Z.bus.on("moduleSetupCompleted", this.onModuleSetup),
                  Ne.Z.bus.on("view", this.onSetupReadyToView),
                  Ne.Z.bus.on("complete", this.onSetupComplete),
                  Ne.Z.bus.on("unAuthorized", function (t) {
                    e.parentEvents.emit("viewer:unAuthorized");
                  }),
                  Ne.Z.bus.on("Document:open-error", this.onDocumentOpenError),
                  Ne.Z.bus.on(
                    "designResolveComplete",
                    this.onDesignResolveComplete,
                  ),
                  Ne.Z.bus.on("newDesignVersionReady", this.onNewDesignReady),
                  Ne.Z.bus.on("newDesignVersionError", this.onNewDesignReady),
                  Ne.Z.bus.on("View:get", function (t) {
                    t.current = e.activeView;
                  }),
                  Ne.Z.bus.on("Layout:update", function (t) {
                    e.parentEvents.emit("app:layout:changed", t);
                  }),
                  this.parentEvents.on("app:layout:closePanels", function (t) {
                    if (t.panelIds) {
                      var n,
                        r = (function (e, t) {
                          var n =
                            ("undefined" != typeof Symbol &&
                              e[Symbol.iterator]) ||
                            e["@@iterator"];
                          if (!n) {
                            if (
                              Array.isArray(e) ||
                              (n = (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e) return Ke(e, t);
                                  var n = {}.toString.call(e).slice(8, -1);
                                  return (
                                    "Object" === n &&
                                    e.constructor &&
                                    (n = e.constructor.name),
                                    "Map" === n || "Set" === n
                                      ? Array.from(e)
                                      : "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n,
                                        )
                                        ? Ke(e, t)
                                        : void 0
                                  );
                                }
                              })(e)) ||
                              (t && e && "number" == typeof e.length)
                            ) {
                              n && (e = n);
                              var r = 0,
                                i = function () { };
                              return {
                                s: i,
                                n: function () {
                                  return r >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[r++] };
                                },
                                e: function (e) {
                                  throw e;
                                },
                                f: i,
                              };
                            }
                            throw new TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                          }
                          var o,
                            a = !0,
                            s = !1;
                          return {
                            s: function () {
                              n = n.call(e);
                            },
                            n: function () {
                              var e = n.next();
                              return ((a = e.done), e);
                            },
                            e: function (e) {
                              ((s = !0), (o = e));
                            },
                            f: function () {
                              try {
                                a || null == n.return || n.return();
                              } finally {
                                if (s) throw o;
                              }
                            },
                          };
                        })(
                          t.panelIds.filter(function (t) {
                            return e.activePlugins.find(function (e) {
                              return e.id === t;
                            });
                          }),
                        );
                      try {
                        for (r.s(); !(n = r.n()).done;) {
                          var i = n.value;
                          Ne.Z.bus.emit("".concat(i, ":disable"));
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                    }
                  }),
                  this.parentEvents.on("csrf-token:update", function (e) {
                    (0, W.zX)("data-csrf-token", e.data);
                  }));
                var t,
                  n =
                    this.domain ||
                    (this.coreInitialData &&
                      this.coreInitialData.attributes &&
                      this.coreInitialData.attributes.domain);
                this.token
                  ? ((t = this.token),
                    w()
                      .get("token/resolve-token?token=".concat(t))
                      .then(function (e) {
                        var t;
                        if (
                          "Success" ===
                          (null == e || null === (t = e.data) || void 0 === t
                            ? void 0
                            : t.status)
                        )
                          return e.data;
                        throw Error("Resolve token error.");
                      }))
                    .then(function (t) {
                      Ne.Z.setup(
                        n,
                        qe(
                          qe({}, e.coreInitialData),
                          {},
                          {
                            designUrl: null == t ? void 0 : t.designId,
                            attributes: qe(
                              qe({}, e.coreInitialData.attributes),
                              {},
                              {
                                "data-project-src":
                                  null == t ? void 0 : t.designId,
                              },
                            ),
                          },
                        ),
                      );
                    })
                    .catch(function () {
                      e.isExpired = !0;
                    })
                  : Ne.Z.setup(n, this.coreInitialData);
              },
              initOnSceneItnteracted: function () {
                var e = this;
                Ne.Z.bus.on("sceneInteracted", function (t) {
                  return e.parentEvents.emit(
                    "scene-interacted",
                    qe(qe({}, t), {}, { viewName: e.activeView.name }),
                  );
                });
              },
              filterViewsByStr: function (e, t) {
                var n = (null != t ? t : "")
                  .split(",")
                  .map(function (e) {
                    return e.trim().toLowerCase();
                  })
                  .filter(function (e) {
                    return e;
                  });
                if (!n.length) return e;
                var r = e.filter(function (e) {
                  var t;
                  return (
                    n.includes(
                      (
                        (null == e || null === (t = e.metaInfo) || void 0 === t
                          ? void 0
                          : t.displayName) || (null == e ? void 0 : e.text)
                      ).toLowerCase(),
                    ) ||
                    n.includes(
                      null == e ? void 0 : e.metaInfo.name.toLowerCase(),
                    )
                  );
                });
                return r.length ? r : e;
              },
              filterViewByStr: function (e, t) {
                var n,
                  r = (null != t ? t : "")
                    .split(",")
                    .map(function (e) {
                      return e.trim().toLowerCase();
                    })
                    .filter(function (e) {
                      return e;
                    });
                return (
                  !r.length ||
                  r.includes(
                    (
                      (null === (n = e.metaInfo) || void 0 === n
                        ? void 0
                        : n.displayName) || e.text
                    ).toLowerCase() ||
                    r.includes(
                      null == e ? void 0 : e.metaInfo.name.toLowerCase(),
                    ),
                  )
                );
              },
              setInitialView: function () {
                try {
                  var e,
                    t,
                    n =
                      null === (e = this.coreInitialData) ||
                        void 0 === e ||
                        null === (t = e.attributes) ||
                        void 0 === t
                        ? void 0
                        : t["data-active-view"];
                  if (!n) return this.setDefaultView();
                  var r = this.filterViewsByStr(this.views, n).find(
                    function (e) {
                      return !e.hidden || (e.hidden && e.isHiddenByDefault);
                    },
                  );
                  if (!r) return this.setDefaultView();
                  (window.__APP__.analytics.sendViewInitEvent(
                    null == r ? void 0 : r.text,
                  ),
                    this.changeView(r, !0));
                } catch (e) {
                  this.setDefaultView();
                }
              },
              setDefaultView: function () {
                var e = this.views.find(function (e) {
                  return !e.hidden;
                });
                return (
                  window.__APP__.analytics.sendViewInitEvent(
                    null == e ? void 0 : e.text,
                  ),
                  this.changeView(e, !0)
                );
              },
              setFilteredView: function (e) {
                var t,
                  n,
                  r =
                    null === (t = this.coreInitialData) ||
                      void 0 === t ||
                      null === (n = t.attributes) ||
                      void 0 === n
                      ? void 0
                      : n["data-enabled-views"];
                if (this.filterViewByStr(e, r))
                  return (
                    this.setView(e),
                    this.views.find(function (t) {
                      return t.id === e.metaInfo.name;
                    })
                  );
              },
              onDesignProcessing: function (e, t) {
                ((this.isDesignProcessed = !1), this.setLoaderMessage(e, t));
              },
              setLoaderMessage: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "",
                  i = this.isCompare && !t ? "Comparison in progress" : e,
                  o =
                    this.isAfsCompare && !t
                      ? "You can wait or close the page. We will email you when completed."
                      : this.isCompare && !t
                        ? "It will take a few moments"
                        : "";
                (this.isCompare &&
                  !this.isAfsCompare &&
                  !t &&
                  setTimeout(function () {
                    ((n.loaderMessage = "Comparison is still in progress"),
                      (n.loaderMeta = "It will take longer than expected"),
                      (n.isLoaderPrimary = !1));
                  }, 3e4),
                  (this.hasLoaderIcon =
                    !this.isCompare || (this.isCompare && t)),
                  (this.isLoading = !0),
                  (this.isLoadingFailed = t));
                var a = G(i);
                ((this.loaderMessage =
                  a || this.$t("viewer.plugins.ui.App.initializing")),
                  (this.loaderMeta = o),
                  (this.loaderIcon = r));
              },
              onSetupError: function (e) {
                var t, n;
                (!e || e.isEmptySource || e.isSourceHasNotExists
                  ? this.parentEvents.emit("documents:loaded", {})
                  : (this.captureError(e),
                    this.parentEvents.emit("design-data-loaded", {
                      error: "object" === Ye(e) ? qe({}, e) : e,
                    })),
                  this.setLoaderMessage(
                    (null == e || null === (t = e.innerError) || void 0 === t
                      ? void 0
                      : t.message) ||
                    (null == e ? void 0 : e.message) ||
                    e ||
                    "Error occurred. Please refresh the page or try a bit later.",
                    !0,
                    null != e &&
                      null !== (n = e.innerError) &&
                      void 0 !== n &&
                      n.isManaged
                      ? "info-16"
                      : "",
                  ));
              },
              onSetupDeisgnId: function (e) {
                this.parentEvents.emit("design-loaded", { designId: e });
              },
              onModuleSetup: function (e, t) {
                var n = this;
                try {
                  switch (e) {
                    case "View":
                      var r = this.setFilteredView(t);
                      if (r) {
                        var i = r.name;
                        (Ne.Z.bus.on(r.events.updateInterface, function (e) {
                          return n.updateViewInterface({ view: r, data: e });
                        }),
                          Ne.Z.bus.on(
                            "LocalPlugins:disable",
                            this.toggleModulesDisableState({
                              getItems: function () {
                                return n.localPluginsDictionary[i];
                              },
                              disabled: !0,
                              callback: function (e) {
                                return n.updateLocalPluginsInterface({
                                  name: i,
                                  plugin: e,
                                  data: { disabled: !0 },
                                });
                              },
                            }),
                          ),
                          Ne.Z.bus.on(
                            "LocalPlugins:enable",
                            this.toggleModulesDisableState({
                              getItems: function () {
                                return n.localPluginsDictionary[i];
                              },
                              disabled: !1,
                              callback: function (e) {
                                return n.updateLocalPluginsInterface({
                                  name: i,
                                  plugin: e,
                                  data: { disabled: !1 },
                                });
                              },
                            }),
                          ));
                      }
                      break;
                    case "Plugin":
                      if (t.metaInfo.owner)
                        t.metaInfo.owner.split(",").forEach(function (e) {
                          var r = e.trim();
                          n.setLocalPluginDictionary({ name: r, data: t });
                          var i = n.localPluginsDictionary[r].find(
                            function (e) {
                              return e.id === t.metaInfo.name;
                            },
                          );
                          (n.addModalListeners(i),
                            Ne.Z.bus.on(i.events.updateInterface, function (e) {
                              return n.updateLocalPluginsInterface({
                                name: r,
                                plugin: i,
                                data: e,
                              });
                            }));
                        });
                      else {
                        this.setGlobalPlugin(t);
                        var o = this.globalPlugins.find(function (e) {
                          return e.id === t.metaInfo.name;
                        });
                        (this.addModalListeners(o),
                          Ne.Z.bus.on(o.events.updateInterface, function (e) {
                            return n.updateGlobalPluginsInterface({
                              plugin: o,
                              data: e,
                            });
                          }));
                      }
                  }
                } catch (t) {
                  Ne.Z.createLogger("App").LogError(
                    "[".concat(e, "] module setup error."),
                    t,
                  );
                }
              },
              onSetupReadyToView: function () {
                var e = this;
                window.__CORE__.useFastView &&
                  ((this.isLoading = !1),
                    (0, i.nextTick)().then(function () {
                      return e.setInitialView();
                    }));
              },
              setInitialPlugin: function () {
                try {
                  var e,
                    t,
                    n =
                      null === (e = this.coreInitialData) ||
                        void 0 === e ||
                        null === (t = e.attributes) ||
                        void 0 === t
                        ? void 0
                        : t["data-active-plugin"];
                  n && Ne.Z.bus.emit("".concat(n, ":enable"));
                } catch (e) { }
              },
              onSetupComplete: function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  a,
                  s,
                  c,
                  l = this;
                (this.isLoading
                  ? ((this.isLoading = !1),
                    (0, i.nextTick)().then(function () {
                      return l.setInitialView();
                    }))
                  : this.setInitialPlugin(),
                  this.parentEvents.emit("design-data-loaded", {
                    projectTypeName:
                      null === (e = Ne.Z.response) ||
                        void 0 === e ||
                        null === (t = e.metadata) ||
                        void 0 === t
                        ? void 0
                        : t.projectTypeName,
                    camtasticSourceKind:
                      (null === (n = Ne.Z.response) ||
                        void 0 === n ||
                        null === (r = n.metadata) ||
                        void 0 === r ||
                        null === (o = r.camtastic) ||
                        void 0 === o ||
                        null === (a = o[0]) ||
                        void 0 === a
                        ? void 0
                        : a.sourceKind) || null,
                    files:
                      null === (s = Ne.Z.response) ||
                        void 0 === s ||
                        null === (c = s.storage) ||
                        void 0 === c
                        ? void 0
                        : c.files,
                  }));
              },
              initLogoVisibilityListeners: function () {
                var e = this;
                (Ne.Z.bus.on("Logo:show", function () {
                  e.isLogoVisible = !0;
                }),
                  Ne.Z.bus.on("Logo:hide", function () {
                    e.isLogoVisible = !1;
                  }));
              },
              initViewsListeners: function () {
                var e = this;
                (Ne.Z.bus.on("View:set", function (t) {
                  return e.changeView(
                    e.views.find(function (e) {
                      return e.id === t;
                    }),
                  );
                }),
                  Ne.Z.bus.on("Views:updatePadding", function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                      n = t.left,
                      r = t.right;
                    (isFinite(n) && (e.viewsPadding.left = n),
                      isFinite(r) && (e.viewsPadding.right = r));
                  }),
                  Ne.Z.bus.on(
                    "Views:disable",
                    this.toggleModulesDisableState({
                      getItems: function () {
                        return e.views;
                      },
                      disabled: !0,
                      callback: function (t) {
                        return e.updateViewInterface({
                          view: t,
                          data: { disabled: !0 },
                        });
                      },
                    }),
                  ),
                  Ne.Z.bus.on(
                    "Views:enable",
                    this.toggleModulesDisableState({
                      getItems: function () {
                        return e.views;
                      },
                      disabled: !1,
                      callback: function (t) {
                        return e.updateViewInterface({
                          view: t,
                          data: { disabled: !1 },
                        });
                      },
                    }),
                  ));
              },
              initPluginsListeners: function () {
                var e = this;
                (Ne.Z.bus.on(
                  "GlobalPlugins:disable",
                  this.toggleModulesDisableState({
                    getItems: function () {
                      return e.globalPlugins;
                    },
                    disabled: !0,
                    callback: function (t) {
                      return e.updateGlobalPluginsInterface({
                        plugin: t,
                        data: { disabled: !0 },
                      });
                    },
                  }),
                ),
                  Ne.Z.bus.on(
                    "GlobalPlugins:enable",
                    this.toggleModulesDisableState({
                      getItems: function () {
                        return e.globalPlugins;
                      },
                      disabled: !1,
                      callback: function (t) {
                        return e.updateGlobalPluginsInterface({
                          plugin: t,
                          data: { disabled: !1 },
                        });
                      },
                    }),
                  ));
              },
              toggleModulesDisableState: function (e) {
                var t = e.getItems,
                  n = e.callback,
                  r = e.disabled;
                return function () {
                  var e = (
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  ).exclude,
                    i = void 0 === e ? null : e;
                  ("string" == typeof i && (i = [i]),
                    Array.isArray(i) || (i = null),
                    t().forEach(function (e) {
                      (i && i.includes(e.id)) ||
                        !!e.disabled == !!r ||
                        e.hidden ||
                        n(e);
                    }));
                };
              },
              addModalListeners: function (e) {
                var t = this;
                (Ne.Z.bus.on(e.events.disable, function () {
                  (t.parentEvents.emit("plugin-events", {
                    plugin: e.name,
                    event: "disable",
                  }),
                    t.$refs[e.name]
                      ? t.$refs[e.name][0].close()
                      : t.removeActivePlugin(e));
                }),
                  Ne.Z.bus.on(e.events.enable, function () {
                    (t.parentEvents.emit("plugin-events", {
                      plugin: e.name,
                      event: "enable",
                    }),
                      t.$refs[e.name]
                        ? t.$refs[e.name][0].open()
                        : t.setActivePlugin(e));
                  }));
              },
              changeView: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                  n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                try {
                  var r;
                  (null == e ? void 0 : e.id) !==
                    (null === (r = this.activeView) || void 0 === r
                      ? void 0
                      : r.id) &&
                    (null == e ? void 0 : e.analyticsEventName) &&
                    window.__APP__.analytics.dispatchViewEvent(
                      e.analyticsEventName,
                    );
                  var i = this.$refs[null == e ? void 0 : e.id];
                  if (null != e && e.hasNoView) {
                    var o,
                      a =
                        null === Ne.Z ||
                          void 0 === Ne.Z ||
                          null === (o = Ne.Z.views) ||
                          void 0 === o
                          ? void 0
                          : o[null == e ? void 0 : e.name];
                    return void (null == a || a.activate(n));
                  }
                  (this.setActiveView({ view: e, el: i && i[0] }),
                    t && this.initOnDocumentShown(e));
                } catch (e) {
                  console.error(e);
                }
              },
              initOnDocumentShown: function (e) {
                var t = this;
                e &&
                  e.name &&
                  Ne.Z.bus.once("".concat(e.name, ":shown"), function () {
                    try {
                      (t.setInitialPlugin(),
                        t.parentEvents.emit(
                          "render-complete",
                          window.__APP__.analytics.getOpenPerformanceEventName(
                            e.name,
                          ),
                        ));
                    } catch (e) {
                      console.error(e);
                    }
                  });
              },
              onViewChange: function (e) {
                this.changeView(e, !1, !0);
              },
              onPluginClick: function (e) {
                e.isActive
                  ? this.removeActivePlugin(e)
                  : this.setActivePlugin(e);
              },
              onBackButtonClick: function (e) {
                Ne.Z.bus.emit(e.events.back);
              },
              initOnUpdateInterface: function () {
                this.parentEvents.on("updateInterface", function (e) {
                  return Ne.Z.bus.emit(
                    "".concat(e.name, ":updateInterface"),
                    e.interface,
                  );
                });
              },
              captureError: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                  n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = this.getErrorDetails(e);
                if (!r.skipMonitoring) {
                  if (window.__APP__.appMonitoring) {
                    var i = this.getErrorContent(e),
                      o = {
                        analytics_error:
                          window.__APP__.analytics.getErrorEventName(t),
                        unload_page_signal: this.unloadPageSignal,
                      };
                    if (e.sendDetails || n) {
                      var a = k(),
                        s = a.vendor,
                        c = a.renderer,
                        l = S.getMemoryUsageDetails();
                      ((o = qe(
                        qe({}, o),
                        {},
                        {
                          webgl_vendor: s,
                          webgl_renderer: c,
                          document_size: null == e ? void 0 : e.dataSize,
                        },
                      )),
                        l &&
                        (o = qe(
                          qe({}, o),
                          {},
                          {
                            js_heap_size_limit: l.jsHeapSizeLimit,
                            total_js_heap_size: l.totalJSHeapSize,
                            used_js_heap_size: l.usedJSHeapSize,
                          },
                        )));
                    }
                    (r.isManaged &&
                      (o = qe(qe({}, o), {}, { is_managed_error: !0 })),
                      window.__APP__.appMonitoring.capture(i, { tags: o }));
                  }
                  this.unloadPageSignal ||
                    r.isManaged ||
                    window.__APP__.analytics.dispatchErrorEvent(t);
                }
              },
              handleKey: function (e) {
                this.parentEvents.emit("viewer-key", {
                  key: e.key,
                  code: e.code,
                  altKey: e.altKey,
                  ctrlKey: e.ctrlKey,
                  shiftKey: e.shiftKey,
                  metaKey: e.metaKey,
                });
              },
              onDocumentOpenError: function (e) {
                try {
                  this.captureError(e.error, e.name, e.sendDetails);
                } catch (e) { }
              },
              onDesignResolveComplete: function (e) {
                e &&
                  e.activeVersion &&
                  this.parentEvents.emit(
                    "viewer:generating-new-version",
                    e.activeVersion,
                  );
              },
              onNewDesignReady: function () {
                this.parentEvents.emit("viewer:generated-new-version");
              },
              getErrorContent: function (e) {
                var t = null == e ? void 0 : e.innerError,
                  n = t
                    ? t instanceof Error
                      ? "\nInner "
                        .concat(t.name, ": ")
                        .concat(t.message, "\n")
                        .concat(t.stack)
                      : "\nInner Error: ".concat(t)
                    : "";
                return (null == e ? void 0 : e.toString()) + n;
              },
              getErrorDetails: function (e) {
                var t, n;
                return {
                  isManaged:
                    (null == e ? void 0 : e.isManaged) ||
                    (null == e || null === (t = e.innerError) || void 0 === t
                      ? void 0
                      : t.isManaged),
                  skipMonitoring:
                    (null == e ? void 0 : e.skipMonitoring) ||
                    (null == e || null === (n = e.innerError) || void 0 === n
                      ? void 0
                      : n.skipMonitoring),
                };
              },
              initAnalytics: function () {
                (window.__APP__.analytics.initData(
                  this.coreInitialData.attributes,
                ),
                  new Ze(window.__APP__.appMonitoring, Ne.Z).init());
              },
              onLinkClick: function (e, t) {
                t.eventName && (e.preventDefault(), Ne.Z.bus.emit(t.eventName));
              },
              onSidebarUpdated: function () {
                var e,
                  t,
                  n,
                  r,
                  i =
                    (null === (e = this.$refs) ||
                      void 0 === e ||
                      null === (t = e.viewerContainer) ||
                      void 0 === t ||
                      null === (n = t.$el) ||
                      void 0 === n ||
                      null === (r = n.getBoundingClientRect()) ||
                      void 0 === r
                      ? void 0
                      : r.left) || 0;
                this.appLayoutUpdateNotifier.setSideBarWidth(i);
              },
              onHeaderUpdated: function () {
                var e,
                  t =
                    (null === (e = this.$refs.header) || void 0 === e
                      ? void 0
                      : e.$el.getBoundingClientRect().height) || 0;
                (this.appLayoutUpdateNotifier.setHeaderHeight(t),
                  (this.layoutChanged = !0));
              },
              checkWebGl2: function () {
                var e = window.__APP__.analytics;
                document.createElement("canvas").getContext("webgl2")
                  ? e.dispatchAnalyticsEvent("WebGL2", "On")
                  : "undefined" != typeof WebGL2RenderingContext
                    ? e.dispatchAnalyticsEvent("WebGL2", "Off")
                    : e.dispatchAnalyticsEvent("WebGL2", "None");
              },
              setLoader: function (e, t, n, r, i) {
                this.isLoadingFailed = "error" === e;
                var o = G(t);
                ((this.loaderMessage =
                  o || this.$t("viewer.plugins.ui.App.initializing")),
                  (this.loaderMeta = i),
                  (this.loaderIcon = n));
              },
            },
          ),
        },
          et = (0, V.Z)(Qe, [
            [
              "render",
              function (e, t, n, r, o, m) {
                var h = (0, i.resolveComponent)("AfsLink"),
                  v = (0, i.resolveComponent)("Alert"),
                  y = (0, i.resolveComponent)("AfsText"),
                  g = (0, i.resolveComponent)("Loader"),
                  b = (0, i.resolveComponent)("Sidebar"),
                  w = (0, i.resolveComponent)("Header"),
                  k = (0, i.resolveComponent)("AfsIcon"),
                  C = (0, i.resolveComponent)("LibModal"),
                  _ = (0, i.resolveComponent)("Watermark"),
                  P = (0, i.resolveComponent)("GridContainer"),
                  S = (0, i.resolveComponent)("AfsContextMenu");
                return (
                  (0, i.openBlock)(),
                  (0, i.createElementBlock)("div", a, [
                    e.isExpired
                      ? ((0, i.openBlock)(),
                        (0, i.createBlock)(
                          v,
                          { key: 0, icon: "expired" },
                          {
                            default: (0, i.withCtx)(function () {
                              return [
                                (0, i.createElementVNode)(
                                  "span",
                                  s,
                                  (0, i.toDisplayString)(
                                    e.$t("viewer.ui.App.expiredMessage"),
                                  ),
                                  1,
                                ),
                              ];
                            }),
                            meta: (0, i.withCtx)(function () {
                              return [
                                (0, i.createVNode)(
                                  h,
                                  {
                                    href: "https://365.altium.com/signin",
                                    target: "_blank",
                                  },
                                  {
                                    default: (0, i.withCtx)(function () {
                                      return [
                                        (0, i.createTextVNode)(
                                          (0, i.toDisplayString)(
                                            e.$t("viewer.ui.App.goTo365"),
                                          ),
                                          1,
                                        ),
                                      ];
                                    }),
                                    _: 1,
                                  },
                                ),
                              ];
                            }),
                            _: 1,
                          },
                        ))
                      : e.isLoading
                        ? ((0, i.openBlock)(),
                          (0, i.createBlock)(
                            g,
                            {
                              key: 1,
                              icon: e.loaderIcon,
                              "has-icon": e.hasLoaderIcon,
                              "has-error": e.isLoadingFailed,
                              primary: e.isLoaderPrimary,
                            },
                            (0, i.createSlots)(
                              {
                                default: (0, i.withCtx)(function () {
                                  return [
                                    Array.isArray(e.loaderMessage)
                                      ? ((0, i.openBlock)(!0),
                                        (0, i.createElementBlock)(
                                          i.Fragment,
                                          { key: 1 },
                                          (0, i.renderList)(
                                            e.loaderMessage,
                                            function (e) {
                                              return (
                                                (0, i.openBlock)(),
                                                (0, i.createElementBlock)(
                                                  "span",
                                                  { key: e.id },
                                                  [
                                                    e.title
                                                      ? ((0, i.openBlock)(),
                                                        (0, i.createBlock)(
                                                          y,
                                                          {
                                                            key: 0,
                                                            class:
                                                              "apps-loader__title",
                                                            type: "large title",
                                                          },
                                                          {
                                                            default: (0,
                                                              i.withCtx)(
                                                                function () {
                                                                  return [
                                                                    (0,
                                                                      i.createTextVNode)(
                                                                        (0,
                                                                          i.toDisplayString)(
                                                                            e.title,
                                                                          ),
                                                                        1,
                                                                      ),
                                                                  ];
                                                                },
                                                              ),
                                                            _: 2,
                                                          },
                                                          1024,
                                                        ))
                                                      : (0, i.createCommentVNode)(
                                                        "v-if",
                                                        !0,
                                                      ),
                                                    e.text
                                                      ? ((0, i.openBlock)(),
                                                        (0, i.createElementBlock)(
                                                          "span",
                                                          c,
                                                          (0, i.toDisplayString)(
                                                            e.text,
                                                          ),
                                                          1,
                                                        ))
                                                      : (0, i.createCommentVNode)(
                                                        "v-if",
                                                        !0,
                                                      ),
                                                    e.link
                                                      ? ((0, i.openBlock)(),
                                                        (0, i.createBlock)(
                                                          h,
                                                          {
                                                            key: 2,
                                                            href: e.link,
                                                            target: "_blank",
                                                            onClick: function (
                                                              t,
                                                            ) {
                                                              return m.onLinkClick(
                                                                t,
                                                                e,
                                                              );
                                                            },
                                                          },
                                                          {
                                                            default: (0,
                                                              i.withCtx)(
                                                                function () {
                                                                  return [
                                                                    (0,
                                                                      i.createTextVNode)(
                                                                        (0,
                                                                          i.toDisplayString)(
                                                                            e.name,
                                                                          ),
                                                                        1,
                                                                      ),
                                                                  ];
                                                                },
                                                              ),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["href", "onClick"],
                                                        ))
                                                      : (0, i.createCommentVNode)(
                                                        "v-if",
                                                        !0,
                                                      ),
                                                  ],
                                                )
                                              );
                                            },
                                          ),
                                          128,
                                        ))
                                      : ((0, i.openBlock)(),
                                        (0, i.createElementBlock)(
                                          i.Fragment,
                                          { key: 0 },
                                          [
                                            (0, i.createTextVNode)(
                                              (0, i.toDisplayString)(
                                                e.loaderMessage,
                                              ),
                                              1,
                                            ),
                                          ],
                                          2112,
                                        )),
                                  ];
                                }),
                                _: 2,
                              },
                              [
                                e.loaderMeta
                                  ? {
                                    name: "meta",
                                    fn: (0, i.withCtx)(function () {
                                      return [
                                        (0, i.createTextVNode)(
                                          (0, i.toDisplayString)(e.loaderMeta),
                                          1,
                                        ),
                                      ];
                                    }),
                                  }
                                  : void 0,
                              ],
                            ),
                            1032,
                            ["icon", "has-icon", "has-error", "primary"],
                          ))
                        : ((0, i.openBlock)(),
                          (0, i.createBlock)(
                            P,
                            { key: 2, size: "remain" },
                            {
                              default: (0, i.withCtx)(function () {
                                return [
                                  e.sidebar && !e.sidebar.isHidden
                                    ? ((0, i.openBlock)(),
                                      (0, i.createBlock)(
                                        b,
                                        {
                                          key: 0,
                                          "meta-info": e.sidebar,
                                          ref: e.sidebar.id,
                                          size: e.sidebar.binds.size,
                                          resizable: e.sidebar.binds.resizable,
                                          flex: e.sidebar.binds.flex,
                                          onVnodeMounted: m.onSidebarUpdated,
                                          onVnodeUpdated: m.onSidebarUpdated,
                                        },
                                        (0, i.createSlots)(
                                          {
                                            default: (0, i.withCtx)(function () {
                                              return [
                                                (0, i.createElementVNode)(
                                                  "div",
                                                  { id: e.sidebar.binds.id },
                                                  null,
                                                  8,
                                                  l,
                                                ),
                                              ];
                                            }),
                                            _: 2,
                                          },
                                          [
                                            e.sidebar.title
                                              ? {
                                                name: "title",
                                                fn: (0, i.withCtx)(function () {
                                                  return [
                                                    (0, i.createTextVNode)(
                                                      (0, i.toDisplayString)(
                                                        e.sidebar.title,
                                                      ),
                                                      1,
                                                    ),
                                                  ];
                                                }),
                                              }
                                              : void 0,
                                            e.sidebar.subTitle
                                              ? {
                                                name: "subTitle",
                                                fn: (0, i.withCtx)(function () {
                                                  return [
                                                    (0, i.createTextVNode)(
                                                      (0, i.toDisplayString)(
                                                        e.sidebar.subTitle,
                                                      ),
                                                      1,
                                                    ),
                                                  ];
                                                }),
                                              }
                                              : void 0,
                                          ],
                                        ),
                                        1032,
                                        [
                                          "meta-info",
                                          "size",
                                          "resizable",
                                          "flex",
                                          "onVnodeMounted",
                                          "onVnodeUpdated",
                                        ],
                                      ))
                                    : (0, i.createCommentVNode)("v-if", !0),
                                  (0, i.createVNode)(
                                    P,
                                    {
                                      id: "viewer__container",
                                      ref: "viewerContainer",
                                      size: "remain",
                                      class: "app__container",
                                    },
                                    {
                                      default: (0, i.withCtx)(function () {
                                        return [
                                          m.hiddenHeader
                                            ? (0, i.createCommentVNode)(
                                              "v-if",
                                              !0,
                                            )
                                            : ((0, i.openBlock)(),
                                              (0, i.createBlock)(
                                                w,
                                                {
                                                  key: 0,
                                                  class: "app__header",
                                                  ref: "header",
                                                  views: e.viewsList,
                                                  "global-plugins":
                                                    e.globalPluginsList,
                                                  "local-plugins": e.localPlugins,
                                                  "onView:change": m.onViewChange,
                                                  "onLocalPlugin:click":
                                                    m.onPluginClick,
                                                  "onGlobalPlugin:click":
                                                    m.onPluginClick,
                                                  onVnodeMounted:
                                                    m.onHeaderUpdated,
                                                  onVnodeUpdated:
                                                    m.onHeaderUpdated,
                                                },
                                                null,
                                                8,
                                                [
                                                  "views",
                                                  "global-plugins",
                                                  "local-plugins",
                                                  "onView:change",
                                                  "onLocalPlugin:click",
                                                  "onGlobalPlugin:click",
                                                  "onVnodeMounted",
                                                  "onVnodeUpdated",
                                                ],
                                              )),
                                          ((0, i.openBlock)(!0),
                                            (0, i.createElementBlock)(
                                              i.Fragment,
                                              null,
                                              (0, i.renderList)(
                                                m.modalsList,
                                                function (t) {
                                                  return (
                                                    (0, i.openBlock)(),
                                                    (0, i.createBlock)(
                                                      C,
                                                      (0, i.mergeProps)(
                                                        t.binds,
                                                        {
                                                          key: t.id,
                                                          ref_for: !0,
                                                          ref: t.id,
                                                          "header-bottom":
                                                            e.headerBottom,
                                                        },
                                                        (0, i.toHandlers)(
                                                          t.listeners,
                                                        ),
                                                      ),
                                                      (0, i.createSlots)(
                                                        {
                                                          default: (0, i.withCtx)(
                                                            function () {
                                                              return [
                                                                (0,
                                                                  i.createElementVNode)(
                                                                    "div",
                                                                    {
                                                                      id: t.binds.id,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    p,
                                                                  ),
                                                              ];
                                                            },
                                                          ),
                                                          _: 2,
                                                        },
                                                        [
                                                          t.header
                                                            ? {
                                                              name: "header",
                                                              fn: (0, i.withCtx)(
                                                                function () {
                                                                  return [
                                                                    t.hasBackButton
                                                                      ? ((0,
                                                                        i.openBlock)(),
                                                                        (0,
                                                                          i.createElementBlock)(
                                                                            "button",
                                                                            {
                                                                              key: 0,
                                                                              type: "button",
                                                                              class:
                                                                                "app__back-btn",
                                                                              onClick:
                                                                                (0,
                                                                                  i.withModifiers)(
                                                                                    function (
                                                                                      e,
                                                                                    ) {
                                                                                      return m.onBackButtonClick(
                                                                                        t,
                                                                                      );
                                                                                    },
                                                                                    [
                                                                                      "prevent",
                                                                                    ],
                                                                                  ),
                                                                            },
                                                                            [
                                                                              (0,
                                                                                i.createVNode)(
                                                                                  k,
                                                                                  {
                                                                                    name: "utility-chevron-left",
                                                                                    class:
                                                                                      "app__back-btn-icon",
                                                                                  },
                                                                                ),
                                                                              (0,
                                                                                i.createElementVNode)(
                                                                                  "div",
                                                                                  d,
                                                                                  (0,
                                                                                    i.toDisplayString)(
                                                                                      t.header,
                                                                                    ),
                                                                                  1,
                                                                                ),
                                                                            ],
                                                                            8,
                                                                            u,
                                                                          ))
                                                                      : ((0,
                                                                        i.openBlock)(),
                                                                        (0,
                                                                          i.createElementBlock)(
                                                                            i.Fragment,
                                                                            {
                                                                              key: 1,
                                                                            },
                                                                            [
                                                                              (0,
                                                                                i.createTextVNode)(
                                                                                  (0,
                                                                                    i.toDisplayString)(
                                                                                      t.header,
                                                                                    ),
                                                                                  1,
                                                                                ),
                                                                            ],
                                                                            2112,
                                                                          )),
                                                                  ];
                                                                },
                                                              ),
                                                            }
                                                            : void 0,
                                                        ],
                                                      ),
                                                      1040,
                                                      ["header-bottom"],
                                                    )
                                                  );
                                                },
                                              ),
                                              128,
                                            )),
                                          (0, i.createElementVNode)(
                                            "div",
                                            {
                                              class: "app__views",
                                              onContextmenu:
                                                t[0] ||
                                                (t[0] = (0, i.withModifiers)(
                                                  function () { },
                                                  ["prevent"],
                                                )),
                                            },
                                            [
                                              ((0, i.openBlock)(!0),
                                                (0, i.createElementBlock)(
                                                  i.Fragment,
                                                  null,
                                                  (0, i.renderList)(
                                                    e.viewsList,
                                                    function (e) {
                                                      return (0, i.withDirectives)(
                                                        ((0, i.openBlock)(),
                                                          (0, i.createElementBlock)(
                                                            "div",
                                                            {
                                                              key: e.id,
                                                              ref_for: !0,
                                                              ref: e.id,
                                                              style: (0,
                                                                i.normalizeStyle)(
                                                                  m.viewsStyles,
                                                                ),
                                                              class: (0,
                                                                i.normalizeClass)([
                                                                  "app__view",
                                                                  "app__view_".concat(
                                                                    e.id,
                                                                  ),
                                                                ]),
                                                              "data-view": e.id,
                                                            },
                                                            null,
                                                            14,
                                                            f,
                                                          )),
                                                        [[i.vShow, e.isActive]],
                                                      );
                                                    },
                                                  ),
                                                  128,
                                                )),
                                            ],
                                            32,
                                          ),
                                          (0, i.withDirectives)(
                                            (0, i.createVNode)(
                                              _,
                                              null,
                                              null,
                                              512,
                                            ),
                                            [[i.vShow, m.hasLogo]],
                                          ),
                                        ];
                                      }),
                                      _: 1,
                                    },
                                    512,
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                          )),
                    (0, i.createVNode)(
                      S,
                      (0, i.normalizeProps)(
                        (0, i.guardReactiveProps)(m.trimmedTextMenuBind),
                      ),
                      null,
                      16,
                    ),
                  ])
                );
              },
            ],
          ]);
        var tt = n(77826),
          nt = n(62091);
        function rt(e) {
          return (
            (rt =
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
            rt(e)
          );
        }
        function it(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, ot(r.key), r));
          }
        }
        function ot(e) {
          var t = (function (e, t) {
            if ("object" != rt(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != rt(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == rt(t) ? t : t + "";
        }
        var at = (function () {
          return (
            (e = function e() {
              var t = this;
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.listeners = {}),
                window.addEventListener("message", function (e) {
                  var n;
                  (null === (n = null == e ? void 0 : e.data) || void 0 === n
                    ? void 0
                    : n.message) &&
                    t.listeners[e.data.message] &&
                    t.listeners[e.data.message].forEach(function (t) {
                      return t(e.data);
                    });
                }));
            }),
            (t = [
              {
                key: "logger",
                get: function () {
                  return window.__CORE__.createLogger("App:ParentEvents");
                },
              },
              {
                key: "as",
                value: function () {
                  return this;
                },
              },
              {
                key: "emit",
                value: function (e) {
                  try {
                    if (window.parent !== window) {
                      for (
                        var t = void 0,
                        n = !1,
                        r = function (e) {
                          return "object" === rt(e)
                            ? JSON.parse(JSON.stringify(e))
                            : e;
                        },
                        i = arguments.length,
                        o = new Array(i > 1 ? i - 1 : 0),
                        a = 1;
                        a < i;
                        a++
                      )
                        o[a - 1] = arguments[a];
                      1 === o.length
                        ? (t = r(o[0]))
                        : o.length > 1 &&
                        ((n = !0),
                          (t = o.map(function (e) {
                            return r(e);
                          })));
                      var s = {
                        message: e,
                        data: t,
                        id: window.__iframeId,
                        packed: n,
                      };
                      window.parent.postMessage(s, "*");
                    }
                  } catch (e) {
                    this.logger.LogError("Emit event error.", e);
                  }
                  return this;
                },
              },
              {
                key: "once",
                value: function (e, t) {
                  var n = this;
                  return (
                    this.on(e, function r() {
                      (t.apply(void 0, arguments), n.off(e, r));
                    }),
                    this
                  );
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return (
                    e in this.listeners
                      ? this.listeners[e].push(t)
                      : (this.listeners[e] = [t]),
                    this
                  );
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  if (e in this.listeners) {
                    var n = this.listeners[e].indexOf(t);
                    n > -1 && this.listeners[e].splice(n, 1);
                  }
                  return this;
                },
              },
            ]),
            t && it(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
          st = {},
          ct = n(48434),
          lt = { class: "apps-loader" },
          ut = { key: 1 },
          dt = n(77232),
          pt = { large: "large", small: "small", error: "error" },
          ft = window.__CORE__;
        const mt = {
          name: "AppsLoader",
          components: {
            AppLoader: ae,
            AfsLoader: dt.A,
            AfsLink: v.A,
            AfsText: y.A,
          },
          data: function () {
            return {
              icon: null,
              size: "large",
              message: "Loading",
              meta: null,
              type: pt.large,
            };
          },
          setup: function () {
            return {
              setData: function (e, t) {
                if ("message" === e) return this.setMessage(t);
                this[e] = t;
              },
              setType: function (e) {
                this.type = this.typesArray.includes(e) ? e : pt.large;
              },
              setMessage: function (e) {
                this.message = G(e);
              },
              onLinkClick: function (e, t) {
                t.eventName && (e.preventDefault(), ft.bus.emit(t.eventName));
              },
            };
          },
          computed: {
            typesArray: function () {
              return Object.values(pt);
            },
            isLarge: function () {
              return this.type === pt.large;
            },
            isError: function () {
              return this.type === pt.error;
            },
            hasIcon: function () {
              return this.isError || !!this.icon;
            },
            hasMessageParts: function () {
              return Array.isArray(this.message);
            },
          },
        },
          ht = (0, V.Z)(mt, [
            [
              "render",
              function (e, t, n, r, o, a) {
                var s = (0, i.resolveComponent)("AfsText"),
                  c = (0, i.resolveComponent)("AfsLink"),
                  l = (0, i.resolveComponent)("AppLoader"),
                  u = (0, i.resolveComponent)("AfsLoader");
                return (
                  (0, i.openBlock)(),
                  (0, i.createElementBlock)("div", lt, [
                    a.isLarge || a.isError
                      ? ((0, i.openBlock)(),
                        (0, i.createBlock)(
                          l,
                          {
                            key: 0,
                            "has-error": a.isError,
                            "has-icon": a.hasIcon,
                            icon: o.icon,
                            size: o.size,
                            "background-alpha": "",
                          },
                          (0, i.createSlots)(
                            {
                              default: (0, i.withCtx)(function () {
                                return [
                                  a.hasMessageParts
                                    ? ((0, i.openBlock)(!0),
                                      (0, i.createElementBlock)(
                                        i.Fragment,
                                        { key: 1 },
                                        (0, i.renderList)(
                                          o.message,
                                          function (e) {
                                            return (
                                              (0, i.openBlock)(),
                                              (0, i.createElementBlock)(
                                                "span",
                                                { key: e.id },
                                                [
                                                  e.title
                                                    ? ((0, i.openBlock)(),
                                                      (0, i.createBlock)(
                                                        s,
                                                        {
                                                          key: 0,
                                                          class:
                                                            "apps-loader__title",
                                                          type: "large title",
                                                        },
                                                        {
                                                          default: (0, i.withCtx)(
                                                            function () {
                                                              return [
                                                                (0,
                                                                  i.createTextVNode)(
                                                                    (0,
                                                                      i.toDisplayString)(
                                                                        e.title,
                                                                      ),
                                                                    1,
                                                                  ),
                                                              ];
                                                            },
                                                          ),
                                                          _: 2,
                                                        },
                                                        1024,
                                                      ))
                                                    : (0, i.createCommentVNode)(
                                                      "v-if",
                                                      !0,
                                                    ),
                                                  e.text
                                                    ? ((0, i.openBlock)(),
                                                      (0, i.createElementBlock)(
                                                        "span",
                                                        ut,
                                                        (0, i.toDisplayString)(
                                                          e.text,
                                                        ),
                                                        1,
                                                      ))
                                                    : (0, i.createCommentVNode)(
                                                      "v-if",
                                                      !0,
                                                    ),
                                                  e.link
                                                    ? ((0, i.openBlock)(),
                                                      (0, i.createBlock)(
                                                        c,
                                                        {
                                                          key: 2,
                                                          href: e.link,
                                                          target: "_blank",
                                                          onClick: function (t) {
                                                            return r.onLinkClick(
                                                              t,
                                                              e,
                                                            );
                                                          },
                                                        },
                                                        {
                                                          default: (0, i.withCtx)(
                                                            function () {
                                                              return [
                                                                (0,
                                                                  i.createTextVNode)(
                                                                    (0,
                                                                      i.toDisplayString)(
                                                                        e.name,
                                                                      ),
                                                                    1,
                                                                  ),
                                                              ];
                                                            },
                                                          ),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ["href", "onClick"],
                                                      ))
                                                    : (0, i.createCommentVNode)(
                                                      "v-if",
                                                      !0,
                                                    ),
                                                ],
                                              )
                                            );
                                          },
                                        ),
                                        128,
                                      ))
                                    : ((0, i.openBlock)(),
                                      (0, i.createElementBlock)(
                                        i.Fragment,
                                        { key: 0 },
                                        [
                                          (0, i.createTextVNode)(
                                            (0, i.toDisplayString)(o.message),
                                            1,
                                          ),
                                        ],
                                        2112,
                                      )),
                                ];
                              }),
                              _: 2,
                            },
                            [
                              o.meta
                                ? {
                                  name: "meta",
                                  fn: (0, i.withCtx)(function () {
                                    return [
                                      (0, i.createTextVNode)(
                                        (0, i.toDisplayString)(o.meta),
                                        1,
                                      ),
                                    ];
                                  }),
                                }
                                : void 0,
                            ],
                          ),
                          1032,
                          ["has-error", "has-icon", "icon", "size"],
                        ))
                      : ((0, i.openBlock)(),
                        (0, i.createBlock)(
                          u,
                          {
                            key: 1,
                            "has-text": "",
                            class: "apps-loader__container",
                          },
                          {
                            default: (0, i.withCtx)(function () {
                              return [
                                (0, i.createTextVNode)(
                                  (0, i.toDisplayString)(o.message),
                                  1,
                                ),
                              ];
                            }),
                            _: 1,
                          },
                        )),
                  ])
                );
              },
            ],
            ["__scopeId", "data-v-0da06dd3"],
          ]);
        var vt = function (e, t) {
          ((0, I.hasOwnProperty)(t, "message") && e.setData("message", t.message),
            (0, I.hasOwnProperty)(t, "meta") && e.setData("meta", t.meta),
            (0, I.hasOwnProperty)(t, "icon") && e.setData("icon", t.icon),
            (0, I.hasOwnProperty)(t, "type") && e.setType(t.type),
            (0, I.hasOwnProperty)(t, "size") && e.setData("size", t.size));
        };
        const yt = function (e, t) {
          var n = document.createElement("div");
          (e = e || document.body).appendChild(n);
          var r = (0, i.createApp)(ht),
            o = r.mount(n);
          return (
            t && vt(o, t),
            {
              update: function (e) {
                return (vt(o, e), this);
              },
              destroy: function () {
                return (
                  r.unmount(),
                  n.parentNode && e.removeChild(n),
                  delete this.update,
                  delete this.destroy,
                  this
                );
              },
            }
          );
        };
        var gt = ["src"];
        const bt = {
          setup: function (e, t) {
            var n = t.expose,
              r = (0, i.reactive)({ src: null, isLoaded: !1 }),
              o = function () {
                r.isLoaded = !0;
              };
            return (
              n({
                setSrc: function (e) {
                  ((r.src = e), (r.isLoaded = !1));
                },
              }),
              function (e, t) {
                return (
                  (0, i.openBlock)(),
                  (0, i.createElementBlock)(
                    "div",
                    {
                      class: (0, i.normalizeClass)([
                        "apps-preview",
                        { "is-loaded": (0, i.unref)(r).isLoaded },
                      ]),
                    },
                    [
                      (0, i.createElementVNode)(
                        "img",
                        {
                          src: (0, i.unref)(r).src,
                          class: "apps-preview__img",
                          onLoad: o,
                        },
                        null,
                        40,
                        gt,
                      ),
                    ],
                    2,
                  )
                );
              }
            );
          },
        };
        var wt = function (e, t) {
          return t && e.setSrc(t);
        };
        const kt = function (e, t) {
          var n = document.createElement("div");
          (e = e || document.body).appendChild(n);
          var r = (0, i.createApp)(bt),
            o = r.mount(n);
          return (
            wt(o, t),
            {
              update: function (e) {
                return (wt(r, e), this);
              },
              destroy: function () {
                return (
                  r.unmount(),
                  e.removeChild(n),
                  delete this.update,
                  delete this.destroy,
                  this
                );
              },
            }
          );
        },
          Ct = {
            name: "AppSnackbar",
            components: { AfsSnackbar: n(11539).A, Icon: m._ },
            props: { containerId: { type: String, default: "" } },
            data: function () {
              return {
                icon: "",
                autoClose: !1,
                text: "Something wrong",
                hideClose: !0,
                position: "top",
                zIndex: 15,
                primary: !1,
                type: "info",
                iconSprite: "",
                spriteFilled: !1,
              };
            },
            computed: {
              classes: function () {
                return [
                  this.position && ["top", "bottom"].includes(this.position)
                    ? "app-snackbar__".concat(this.position)
                    : "app-snackbar__top",
                ];
              },
            },
            setup: function () {
              return {
                setData: function (e, t) {
                  this[e] = t;
                },
                open: function () {
                  this.$refs.appSnackbar.open();
                },
                close: function () {
                  this.$refs.appSnackbar.close();
                },
              };
            },
            methods: {
              handleClosed: function () {
                this.restoreDefaults();
              },
              restoreDefaults: function () {
                ((this.type = "info"),
                  (this.zIndex = 2),
                  (this.icon = ""),
                  (this.primary = !1),
                  (this.spriteFilled = !1),
                  (this.iconSprite = ""));
              },
            },
          },
          _t = (0, V.Z)(Ct, [
            [
              "render",
              function (e, t, n, r, o, a) {
                var s = (0, i.resolveComponent)("Icon"),
                  c = (0, i.resolveComponent)("AfsSnackbar");
                return (
                  (0, i.openBlock)(),
                  (0, i.createBlock)(
                    c,
                    {
                      ref: "appSnackbar",
                      "hide-close": e.hideClose,
                      icon: e.icon,
                      autoclose: e.autoClose,
                      class: (0, i.normalizeClass)(["app-snackbar", a.classes]),
                      "container-id": n.containerId,
                      "z-index": e.zIndex,
                      primary: e.primary,
                      type: e.type,
                      onClosed: a.handleClosed,
                    },
                    (0, i.createSlots)(
                      {
                        default: (0, i.withCtx)(function () {
                          return [
                            (0, i.createTextVNode)(
                              " " + (0, i.toDisplayString)(e.text),
                              1,
                            ),
                          ];
                        }),
                        _: 2,
                      },
                      [
                        e.iconSprite
                          ? {
                            name: "icon",
                            fn: (0, i.withCtx)(function () {
                              return [
                                (0, i.createVNode)(
                                  s,
                                  {
                                    name: e.iconSprite,
                                    filled: e.spriteFilled,
                                  },
                                  null,
                                  8,
                                  ["name", "filled"],
                                ),
                              ];
                            }),
                          }
                          : void 0,
                      ],
                    ),
                    1032,
                    [
                      "hide-close",
                      "icon",
                      "autoclose",
                      "class",
                      "container-id",
                      "z-index",
                      "primary",
                      "type",
                      "onClosed",
                    ],
                  )
                );
              },
            ],
            ["__scopeId", "data-v-5b3e3fcf"],
          ]);
        var Pt = function (e, t) {
          [
            "text",
            "autoClose",
            "icon",
            "hideClose",
            "position",
            "zIndex",
            "type",
            "primary",
            "iconSprite",
            "spriteFilled",
          ].forEach(function (n) {
            return (0, I.hasOwnProperty)(t, n) && e.setData(n, t[n]);
          });
        };
        const St = function (e, t) {
          var n = document.createElement("div");
          (e = e || document.body).appendChild(n);
          var r = (0, i.createApp)(_t, { containerId: e.id }).mount(n);
          return (
            t && Pt(r, t),
            {
              update: function (e) {
                return (Pt(r, e), this);
              },
              open: function () {
                return (r.open(), this);
              },
              close: function () {
                return (r.close(), this);
              },
            }
          );
        };
        var Et = { key: 1 },
          jt = { key: 1 },
          Ot = (0, i.createTextVNode)("Send feedback "),
          Dt = n(69314),
          Lt = n(53103);
        function Bt(e) {
          return (
            (Bt =
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
            Bt(e)
          );
        }
        function xt(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function At(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? xt(Object(n), !0).forEach(function (t) {
                Vt(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : xt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
          }
          return e;
        }
        function Vt(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" != Bt(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != Bt(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == Bt(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        var Tt = window.__CORE__;
        const Nt = {
          name: "AppNotification",
          components: {
            AfsText: y.A,
            AfsButtonIcon: Dt.A,
            AfsIcon: m._,
            AfsLink: v.A,
          },
          directives: { inject: Lt.i },
          inject: ["appEmitter"],
          props: {
            containerId: { type: String, default: "" },
            onClose: { type: Function },
          },
          data: function () {
            return {
              isOpened: !1,
              icon: "help-16",
              autoClose: !1,
              autoCloseDelay: 3e3,
              text: "Something wrong",
              fontStyle: "normal",
              feedbackName: "",
            };
          },
          computed: {
            classes: function () {
              return ["app-notification_".concat(this.fontStyle)];
            },
            hasTextParts: function () {
              return Array.isArray(this.text);
            },
          },
          methods: {
            setData: function (e, t) {
              if ("text" === e) return this.setText(t);
              this[e] = t;
            },
            setText: function (e) {
              var t = e.split("%");
              if (t.length <= 1) return (this.text = e);
              var n = t.map(function (e) {
                return e.startsWith("{")
                  ? At(At({}, (0, F.Z)(e)), {}, { id: (0, R.c)() })
                  : { id: (0, R.c)(), text: e };
              });
              this.text = n;
            },
            open: function () {
              ((this.isOpened = !0),
                this.autoClose &&
                (this.clearAutoclose(),
                  (this.timer = setTimeout(this.close, this.autoCloseDelay))));
            },
            close: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              ((this.isOpened = !1), e && this.appEmitter.emit("close"));
            },
            clearAutoclose: function () {
              this.timer && clearTimeout(this.timer);
            },
            onLinkClick: function (e, t, n) {
              t.eventName &&
                (e.preventDefault(), Tt.bus.emit(t.eventName, t.data));
            },
            onFeedbackClick: function (e) {
              e &&
                (e.preventDefault(),
                  this.appEmitter.emit("feedback", e.target));
            },
          },
        },
          Mt = (0, V.Z)(Nt, [
            [
              "render",
              function (e, t, n, r, o, a) {
                var s = (0, i.resolveComponent)("AfsIcon"),
                  c = (0, i.resolveComponent)("AfsText"),
                  l = (0, i.resolveComponent)("AfsLink"),
                  u = (0, i.resolveComponent)("AfsButtonIcon"),
                  d = (0, i.resolveDirective)("inject");
                return e.isOpened
                  ? (0, i.withDirectives)(
                    ((0, i.openBlock)(),
                      (0, i.createElementBlock)(
                        "div",
                        {
                          key: 0,
                          class: (0, i.normalizeClass)([
                            "app-notification",
                            a.classes,
                          ]),
                        },
                        [
                          (0, i.createVNode)(
                            s,
                            { name: e.icon, class: "app-notification__icon" },
                            null,
                            8,
                            ["name"],
                          ),
                          a.hasTextParts
                            ? ((0, i.openBlock)(),
                              (0, i.createElementBlock)("div", Et, [
                                ((0, i.openBlock)(!0),
                                  (0, i.createElementBlock)(
                                    i.Fragment,
                                    null,
                                    (0, i.renderList)(e.text, function (e) {
                                      return (
                                        (0, i.openBlock)(),
                                        (0, i.createElementBlock)(
                                          "span",
                                          { key: e.id },
                                          [
                                            e.title
                                              ? ((0, i.openBlock)(),
                                                (0, i.createBlock)(
                                                  c,
                                                  {
                                                    key: 0,
                                                    class:
                                                      "apps-notification__title",
                                                    type: "large title",
                                                  },
                                                  {
                                                    default: (0, i.withCtx)(
                                                      function () {
                                                        return [
                                                          (0, i.createTextVNode)(
                                                            (0, i.toDisplayString)(
                                                              e.title,
                                                            ),
                                                            1,
                                                          ),
                                                        ];
                                                      },
                                                    ),
                                                    _: 2,
                                                  },
                                                  1024,
                                                ))
                                              : (0, i.createCommentVNode)(
                                                "v-if",
                                                !0,
                                              ),
                                            e.text
                                              ? ((0, i.openBlock)(),
                                                (0, i.createElementBlock)(
                                                  "span",
                                                  jt,
                                                  (0, i.toDisplayString)(e.text),
                                                  1,
                                                ))
                                              : (0, i.createCommentVNode)(
                                                "v-if",
                                                !0,
                                              ),
                                            e.icon
                                              ? ((0, i.openBlock)(),
                                                (0, i.createBlock)(
                                                  s,
                                                  {
                                                    key: 2,
                                                    name: e.icon,
                                                    class:
                                                      "app-notification__part-icon",
                                                  },
                                                  null,
                                                  8,
                                                  ["name"],
                                                ))
                                              : (0, i.createCommentVNode)(
                                                "v-if",
                                                !0,
                                              ),
                                            e.link
                                              ? ((0, i.openBlock)(),
                                                (0, i.createBlock)(
                                                  l,
                                                  {
                                                    key: 3,
                                                    href: e.link,
                                                    "primary-on-accent": "",
                                                    target: "_blank",
                                                    class:
                                                      "app-notification__part-link",
                                                    onClick: function (t) {
                                                      return a.onLinkClick(t, e);
                                                    },
                                                  },
                                                  {
                                                    default: (0, i.withCtx)(
                                                      function () {
                                                        return [
                                                          (0, i.createTextVNode)(
                                                            (0, i.toDisplayString)(
                                                              e.name,
                                                            ),
                                                            1,
                                                          ),
                                                        ];
                                                      },
                                                    ),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["href", "onClick"],
                                                ))
                                              : (0, i.createCommentVNode)(
                                                "v-if",
                                                !0,
                                              ),
                                          ],
                                        )
                                      );
                                    }),
                                    128,
                                  )),
                              ]))
                            : ((0, i.openBlock)(),
                              (0, i.createBlock)(
                                c,
                                { key: 0 },
                                {
                                  default: (0, i.withCtx)(function () {
                                    return [
                                      (0, i.createTextVNode)(
                                        (0, i.toDisplayString)(e.text),
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 1,
                                },
                              )),
                          e.feedbackName
                            ? ((0, i.openBlock)(),
                              (0, i.createBlock)(
                                l,
                                {
                                  key: 2,
                                  href: "#",
                                  "primary-on-accent": "",
                                  class: "app-notification__link",
                                  onClick: a.onFeedbackClick,
                                },
                                {
                                  default: (0, i.withCtx)(function () {
                                    return [Ot];
                                  }),
                                  _: 1,
                                },
                                8,
                                ["onClick"],
                              ))
                            : (0, i.createCommentVNode)("v-if", !0),
                          (0, i.createVNode)(u, {
                            icon: "cross-16",
                            transparent: "",
                            class: "app-notification__close",
                            onClick:
                              t[0] ||
                              (t[0] = function (e) {
                                return a.close(!0);
                              }),
                          }),
                        ],
                        2,
                      )),
                    [[d, n.containerId]],
                  )
                  : (0, i.createCommentVNode)("v-if", !0);
              },
            ],
            ["__scopeId", "data-v-3c13eb8e"],
          ]);
        var It = n(70438),
          Rt = {},
          Ft = function (e, t) {
            ((0, I.hasOwnProperty)(t, "text") && e.setData("text", t.text),
              (0, I.hasOwnProperty)(t, "feedbackName") &&
              e.setData("feedbackName", t.feedbackName),
              (0, I.hasOwnProperty)(t, "autoClose") &&
              e.setData("autoClose", t.autoClose),
              (0, I.hasOwnProperty)(t, "icon") && e.setData("icon", t.icon),
              (0, I.hasOwnProperty)(t, "fontStyle") &&
              e.setData("fontStyle", t.fontStyle));
          };
        const Ht = function (e, t, n, r) {
          var o = document.createElement("div"),
            a = [],
            s = [];
          ((e = e || document.body),
            (o.id =
              e.id +
              "-notification-banner-" +
              (t || (0, tt.Z)().substring(0, 8))),
            e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o));
          var c = new It.TinyEmitter(),
            l = (0, i.createApp)(Mt, { containerId: o.id });
          l.provide("appEmitter", c);
          var u = l.mount(o);
          return (
            c.on("close", function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              a.forEach(function (e) {
                return e.apply(void 0, t);
              });
            }),
            c.on("feedback", function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              s.forEach(function (e) {
                return e.apply(void 0, t);
              });
            }),
            r && Ft(u, r),
            n && Rt[n] && null !== Rt[n]
              ? Rt[n].push(u)
              : n && null !== Rt[n] && (Rt[n] = [u]),
            {
              instance: u,
              update: function (e) {
                return (Ft(u, e), this);
              },
              open: function () {
                if (!n || null !== Rt[n]) return (u.open(), this);
              },
              close: function () {
                return (u.close(), this);
              },
              onClose: function (e) {
                (e && !a.includes(e) && a.push(e),
                  n &&
                  Rt[n] &&
                  a.push(function () {
                    (Rt[n].forEach(function (e) {
                      return e.close();
                    }),
                      (Rt[n] = null));
                  }));
              },
              onFeedback: function (e) {
                e && !s.includes(e) && s.push(e);
              },
            }
          );
        };
        var zt = { class: "app-menu" },
          Zt = n(12561),
          Ut = n(25668);
        const Gt = {
          name: "TreeItem",
          components: { AfsText: y.A, AfsIcon: m._, Accordion: Ut.U },
          directives: { trim: Zt.t },
          props: {
            item: {
              type: Object,
              default: function () {
                return {};
              },
            },
            level: { type: Number, default: 0 },
            startPadding: { type: [String, Number], default: 32 },
            selectedItem: { type: [String, Number], default: "" },
          },
          data: function () {
            return { refPrefix: "group-", isOpened: !1 };
          },
          computed: {
            paddingLeft: function () {
              return "".concat(+this.startPadding + 24 * +this.level, "px");
            },
            childrenLevel: function () {
              return +this.level + 1;
            },
            isSelected: function () {
              return (
                this.item.selected ||
                this.item.name === this.selectedItem ||
                this.item.id === this.selectedItem
              );
            },
            isIconFilled: function () {
              return !("iconFilled" in this.item) || this.item.iconFilled;
            },
          },
          watch: {
            item: {
              deep: !0,
              handler: function (e) {
                e.selected && this.openTree();
              },
            },
          },
          mounted: function () {
            this.isSelected && this.openTree();
          },
          methods: {
            onItemClick: function (e, t) {
              (null == t || t.target.dispatchEvent(new Event("mouseleave")),
                this.$emit("item-click", e));
            },
            onOpenChange: function () {
              var e, t, n, r;
              (this.isOpened
                ? null === (e = this.$refs) ||
                void 0 === e ||
                null === (t = e.container) ||
                void 0 === t ||
                t.close()
                : null === (n = this.$refs) ||
                void 0 === n ||
                null === (r = n.container) ||
                void 0 === r ||
                r.open(),
                (this.isOpened = !this.isOpened));
            },
            openTree: function () {
              var e, t;
              (null === (e = this.$refs) ||
                void 0 === e ||
                null === (t = e.container) ||
                void 0 === t ||
                t.open(),
                (this.isOpened = !0),
                this.level && this.$emit("open-parent"));
            },
          },
        },
          Wt = (0, V.Z)(Gt, [
            [
              "render",
              function (e, t, n, r, o, a) {
                var s = (0, i.resolveComponent)("AfsIcon"),
                  c = (0, i.resolveComponent)("AfsText"),
                  l = (0, i.resolveComponent)("TreeItem", !0),
                  u = (0, i.resolveComponent)("Accordion"),
                  d = (0, i.resolveDirective)("trim");
                return (
                  (0, i.openBlock)(),
                  (0, i.createElementBlock)("div", null, [
                    (0, i.createElementVNode)(
                      "div",
                      {
                        class: (0, i.normalizeClass)([
                          "tree-item",
                          { "is-selected": a.isSelected },
                        ]),
                        style: (0, i.normalizeStyle)({
                          "padding-left": a.paddingLeft,
                        }),
                        onClick:
                          t[1] ||
                          (t[1] = function (e) {
                            return a.onItemClick(n.item, e);
                          }),
                      },
                      [
                        n.item.child && n.item.child.length
                          ? ((0, i.openBlock)(),
                            (0, i.createBlock)(
                              s,
                              {
                                key: 0,
                                class: (0, i.normalizeClass)([
                                  "tree-item__acc-icon acc-control",
                                  { "is-opened": e.isOpened },
                                ]),
                                name: "arrow-right-8",
                                onClick:
                                  t[0] ||
                                  (t[0] = (0, i.withModifiers)(
                                    function (e) {
                                      return a.onOpenChange(n.item);
                                    },
                                    ["stop"],
                                  )),
                              },
                              null,
                              8,
                              ["class"],
                            ))
                          : (0, i.createCommentVNode)("v-if", !0),
                        (0, i.createVNode)(
                          s,
                          {
                            class: "tree-item__icon",
                            name: n.item.icon,
                            filled: a.isIconFilled,
                          },
                          null,
                          8,
                          ["name", "filled"],
                        ),
                        (0, i.withDirectives)(
                          ((0, i.openBlock)(),
                            (0, i.createBlock)(
                              c,
                              { class: "tree-item__text", ellipsis: "" },
                              {
                                default: (0, i.withCtx)(function () {
                                  return [
                                    (0, i.createTextVNode)(
                                      (0, i.toDisplayString)(n.item.name),
                                      1,
                                    ),
                                  ];
                                }),
                                _: 1,
                              },
                            )),
                          [[d, { hint: n.item.name, delay: 1 }]],
                        ),
                      ],
                      6,
                    ),
                    n.item.child && n.item.child.length
                      ? ((0, i.openBlock)(),
                        (0, i.createBlock)(
                          u,
                          { key: 0, ref: "container", opened: e.isOpened },
                          {
                            body: (0, i.withCtx)(function () {
                              return [
                                ((0, i.openBlock)(!0),
                                  (0, i.createElementBlock)(
                                    i.Fragment,
                                    null,
                                    (0, i.renderList)(n.item.child, function (e) {
                                      return (
                                        (0, i.openBlock)(),
                                        (0, i.createBlock)(
                                          l,
                                          {
                                            key: e.name,
                                            item: e,
                                            level: a.childrenLevel,
                                            onItemClick: a.onItemClick,
                                            onOpenParent: a.openTree,
                                            "selected-item": n.selectedItem,
                                          },
                                          null,
                                          8,
                                          [
                                            "item",
                                            "level",
                                            "onItemClick",
                                            "onOpenParent",
                                            "selected-item",
                                          ],
                                        )
                                      );
                                    }),
                                    128,
                                  )),
                              ];
                            }),
                            _: 1,
                          },
                          8,
                          ["opened"],
                        ))
                      : (0, i.createCommentVNode)("v-if", !0),
                  ])
                );
              },
            ],
            ["__scopeId", "data-v-b85329d6"],
          ]),
          $t = {
            name: "AppMenu",
            components: { ContextMenu: h.C, TreeItem: Wt },
            inject: [],
            data: function () {
              return { selectedItem: "" };
            },
            computed: {
              startPadding: function () {
                return this.items &&
                  this.items.every(function (e) {
                    return !e.child || 0 === e.child.length;
                  })
                  ? 8
                  : 32;
              },
            },
            methods: {
              setData: function (e, t) {
                this[e] = t;
              },
              open: function (e) {
                this.$refs.contextMenu.open(document.body, {
                  clientX: null == e ? void 0 : e.x,
                  clientY: null == e ? void 0 : e.y,
                });
              },
              close: function () {
                var e;
                null !== (e = this.$refs) && void 0 !== e && e.contextMenu
                  ? this.$refs.contextMenu.close()
                  : this.onClose();
              },
              onClick: function (e) {
                this.$root.$emit("item-click", e);
              },
              onClose: function () {
                this.$root.$emit("close");
              },
            },
          },
          Yt = (0, V.Z)($t, [
            [
              "render",
              function (e, t, n, r, o, a) {
                var s = (0, i.resolveComponent)("TreeItem"),
                  c = (0, i.resolveComponent)("ContextMenu");
                return (
                  (0, i.openBlock)(),
                  (0, i.createElementBlock)("div", zt, [
                    (0, i.createVNode)(
                      c,
                      {
                        id: "dropdown",
                        ref: "contextMenu",
                        type: "dropdown",
                        class: "app-menu__inner",
                        onClose:
                          t[0] ||
                          (t[0] = function (e) {
                            return a.onClose();
                          }),
                        offset: 6,
                        "init-width": 400,
                        "max-width-limit": 600,
                        "max-height-limit": 600,
                        "is-sticky": "",
                        modifiers: { y: "bottom", x: "start" },
                      },
                      {
                        default: (0, i.withCtx)(function () {
                          return [
                            ((0, i.openBlock)(!0),
                              (0, i.createElementBlock)(
                                i.Fragment,
                                null,
                                (0, i.renderList)(e.items, function (t) {
                                  return (
                                    (0, i.openBlock)(),
                                    (0, i.createBlock)(
                                      s,
                                      {
                                        key: t.name,
                                        item: t,
                                        "selected-item": e.selectedItem,
                                        startPadding: a.startPadding,
                                        onItemClick: a.onClick,
                                      },
                                      null,
                                      8,
                                      [
                                        "item",
                                        "selected-item",
                                        "startPadding",
                                        "onItemClick",
                                      ],
                                    )
                                  );
                                }),
                                128,
                              )),
                          ];
                        }),
                        _: 1,
                      },
                      512,
                    ),
                  ])
                );
              },
            ],
            ["__scopeId", "data-v-012bf2a3"],
          ]);
        function Kt(e) {
          return (
            (Kt =
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
            Kt(e)
          );
        }
        function Xt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, qt(r.key), r));
          }
        }
        function qt(e) {
          var t = (function (e, t) {
            if ("object" != Kt(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != Kt(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == Kt(t) ? t : t + "";
        }
        var Jt = (function () {
          return (
            (e = function e(t, n) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.data = n),
                (this.closeCallbacks = new Array()),
                (this.itemClickCallbacks = new Array()),
                (this.active = !1),
                (this.container = (null != t ? t : document.body).appendChild(
                  document.createElement("div"),
                )));
            }),
            (t = [
              {
                key: "open",
                value: function (e, t) {
                  var n = this;
                  return (
                    this.vueApp ||
                    ((this.vueApp = (0, i.createApp)(Yt, {
                      onClose: function () {
                        return n.invokeOnClose(!!t);
                      },
                      onItemClick: function (e) {
                        return n.itemClickCallbacks.forEach(function (t) {
                          return t(e);
                        });
                      },
                    })),
                      (this.vueAppInstance = this.vueApp.mount(
                        this.container,
                      ))),
                    this.vueAppInstance &&
                    (this.data &&
                      this.updateVueAppData(this.vueAppInstance, this.data),
                      this.vueAppInstance.open(e),
                      (this.active = !0)),
                    this
                  );
                },
              },
              {
                key: "update",
                value: function (e) {
                  return (
                    (this.data = e),
                    this.active &&
                    this.vueAppInstance &&
                    this.updateVueAppData(this.vueAppInstance, e),
                    this
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  return (
                    this.vueAppInstance && this.vueAppInstance.close(),
                    this
                  );
                },
              },
              {
                key: "onClose",
                value: function (e) {
                  this.closeCallbacks.push(e);
                },
              },
              {
                key: "onItemClick",
                value: function (e) {
                  this.itemClickCallbacks.push(e);
                },
              },
              {
                key: "clearSubscribtion",
                value: function () {
                  ((this.closeCallbacks.length = 0),
                    (this.itemClickCallbacks.length = 0));
                },
              },
              {
                key: "updateVueAppData",
                value: function (e, t) {
                  (void 0 !== t.items && e.setData("items", t.items),
                    void 0 !== t.selectedItem &&
                    e.setData("selectedItem", t.selectedItem));
                },
              },
              {
                key: "invokeOnClose",
                value: function (e) {
                  var t = this;
                  ((this.active = !1),
                    e &&
                    (0, i.nextTick)(function () {
                      if (t.vueApp)
                        try {
                          (t.clearSubscribtion(),
                            t.vueApp.unmount(),
                            t.container.remove());
                        } finally {
                          ((t.vueApp = void 0), (t.vueAppInstance = void 0));
                        }
                    }),
                    this.closeCallbacks.forEach(function (e) {
                      return e();
                    }));
                },
              },
            ]),
            t && Xt(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
          Qt = n(727),
          en = n(87785),
          tn = n(56357),
          nn = n(97878),
          rn = n(85843),
          on = n(57455),
          an = n(89471);
        function sn(e) {
          return (
            (sn =
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
            sn(e)
          );
        }
        function cn(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function ln(e, t, n) {
          return (
            (t = dn(t)) in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function un(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, dn(r.key), r));
          }
        }
        function dn(e) {
          var t = (function (e, t) {
            if ("object" != sn(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != sn(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == sn(t) ? t : t + "";
        }
        var pn = !1,
          fn = !1,
          mn = { production: !0, development: !0 },
          hn = {
            Project: "Viewer.WIP",
            Release: "Release.DesignSnapshot",
            MfgPackage: "MfgPackage",
            Upload: "Upload",
            Project_CM: "Project_CM",
          },
          vn = {
            SCHView: "Schematic",
            PCBView: "PCB",
            PCBView3D: "PCB3D",
            FabricationView: "Fabrication",
            GerberCompareView: "GerberCompare",
            CadexView: "MCAD",
            SchematicCompareView: "SchematicCompare",
          },
          yn = window.__CORE__,
          gn = (function () {
            return (
              (e = function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
              }),
              (t = [
                {
                  key: "initData",
                  value: function (e) {
                    var t = "production";
                    (t || e.domainOrigin || e["data-project-src"]) &&
                      (this.data = {
                        env: t,
                        domain:
                          e.domainOrigin ||
                          "No Origin Domain for URL: ".concat(
                            e["data-project-src"],
                          ),
                        url:
                          e["data-project-src"] ||
                          "No URL for Domain: ".concat(e.domainOrigin),
                      });
                  },
                },
                {
                  key: "sendViewInitEvent",
                  value: function (e) {
                    this.dispatchEvent("startup", {
                      category: "Initialization",
                      label: "Initialization.".concat(e),
                    });
                  },
                },
                {
                  key: "initTrackingService",
                  value: function (e) {
                    var t = this,
                      n = e["data-user-id"] || "";
                    (e["data-is-ccv"], e["data-is-gov"]);
                    ((this.eventSubject =
                      e["data-analytics-subject"] || "NoSubject"),
                      (this.workspaceId = e["data-workspace-id"]),
                      (this.sessionId = e["data-session-id"] || ""),
                      (this.contextId =
                        e["data-subject-guid"] || e["data-project-src"]),
                      (this.anonym = fn),
                      (this.appName = "Viewer"));
                    var i = (0, b.Z)({
                      baseURL: window.__VIEWER_DOMAIN__,
                      withCredentials: !0,
                      headers: { "X-AUTH": this.sessionId },
                    });
                    ((this.tracking =
                      window.__trackingService ||
                      new r.e2({
                        userId: n,
                        apiClient: i,
                        userName: window.__userFullName,
                        tenantId: this.workspaceId,
                        behaviorTracking: pn,
                        businessTracking: pn,
                        metricTracking: pn,
                      })),
                      yn.bus.on("metadataResolveComplete", function (e) {
                        ("Orcad" === e.projectTypeName &&
                          (t.eventSubject += "_OrCAD"),
                          "KiCad" === e.projectTypeName &&
                          (t.eventSubject += "_KiCAD"),
                          "Eagle" === e.projectTypeName &&
                          (t.eventSubject += "_Eagle"),
                          "PadsXpedition" === e.projectTypeName &&
                          (t.eventSubject += "_PADS"));
                      }));
                  },
                },
                {
                  key: "dispatchEvent",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                      n = t.category,
                      r = t.label;
                    this.data &&
                      !(function (e) {
                        return (
                          !!e &&
                          window.dataLayer.some(function (t) {
                            return t[1] && t[2] && t[2].event_label === e;
                          })
                        );
                      })(r) &&
                      mn[this.data.env] &&
                      window.gtag(
                        "event",
                        e,
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? cn(Object(n), !0).forEach(function (t) {
                                ln(e, t, n[t]);
                              })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n),
                                )
                                : cn(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t),
                                  );
                                });
                          }
                          return e;
                        })({ event_category: n, event_label: r }, this.data),
                      );
                  },
                },
                {
                  key: "dispatchNavigationEvent",
                  value: function (e) {
                    this.dispatchAnalyticsEvent("Navigation", e);
                  },
                },
                {
                  key: "dispatchAnalyticsEvent",
                  value: function (e, t) {
                    var n = this.getFormattedEventName([
                      "Web",
                      this.appName,
                      this.eventSubject,
                      e,
                      t,
                    ]);
                    this.dispatchCustomAnalyticsEvent(n);
                  },
                },
                {
                  key: "dispatchCustomAnalyticsEvent",
                  value: function (e) {
                    this.tracking &&
                      (this.anonym
                        ? this.tracking.sendBehavior(e, this.contextId)
                        : this.tracking.sendBusiness(e, this.contextId));
                  },
                },
                { key: "dispatchErrorEvent", value: function (e) { } },
                {
                  key: "dispatchMetricEventStart",
                  value: function (e) {
                    this.anonym || this.tracking.startMetric(e, this.contextId);
                  },
                },
                {
                  key: "dispatchMetricEventEnd",
                  value: function (e) {
                    this.anonym || this.tracking.endMetric(e, this.contextId);
                  },
                },
                { key: "dispatchDocumentLoadedMetric", value: function (e) { } },
                {
                  key: "getOpenPerformanceEventName",
                  value: function (e) {
                    var t = [
                      "Performance",
                      hn[this.eventSubject] || this.eventSubject,
                      "Open",
                      vn[e] || e,
                    ];
                    return (
                      !window.__APP__.isDesignProcessed &&
                      t.push("BeingProcessed"),
                      this.getFormattedEventName(t)
                    );
                  },
                },
                {
                  key: "dispatchFpsPerformanceMetrics",
                  value: function (e, t) { },
                },
                {
                  key: "dispatchViewEvent",
                  value: function (e) {
                    this.dispatchEvent("click", {
                      category: "View switching",
                      label: "Action.View.".concat(e),
                    });
                  },
                },
                {
                  key: "dispatchClickEvent",
                  value: function (e, t) {
                    var n = t.action;
                    this.dispatchEvent("click", {
                      category: e,
                      label: "Action.".concat(n),
                    });
                  },
                },
                {
                  key: "dispatchViewNavigationEvent",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                      n = t.event,
                      r = void 0 === n ? "click" : n,
                      i = t.action;
                    this.dispatchEvent(r, {
                      category: "Navigation",
                      label: "Navigation.".concat(e, ".").concat(i),
                    });
                  },
                },
                {
                  key: "dispatchPanelsEvent",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                      n = t.event,
                      r = void 0 === n ? "click" : n,
                      i = t.action;
                    this.dispatchEvent(r, {
                      category: "Panels",
                      label: "Panels.".concat(e, ".").concat(i),
                    });
                  },
                },
                {
                  key: "getErrorEventName",
                  value: function (e) {
                    var t = this.getErrorBaseEventName();
                    return this.getFormattedEventName([t, e, "NotShown.Web"]);
                  },
                },
                {
                  key: "getErrorBaseEventName",
                  value: function () {
                    return "Error."
                      .concat(this.appName, ".")
                      .concat(this.eventSubject);
                  },
                },
                { key: "dispatchCustomErrorEvent", value: function (e) { } },
                {
                  key: "getFormattedEventName",
                  value: function () {
                    return (
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : []
                    )
                      .filter(Boolean)
                      .join(".");
                  },
                },
              ]),
              t && un(e.prototype, t),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
            var e, t;
          })();
        function bn(e) {
          return (
            (bn =
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
            bn(e)
          );
        }
        function wn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, kn(r.key), r));
          }
        }
        function kn(e) {
          var t = (function (e, t) {
            if ("object" != bn(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != bn(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == bn(t) ? t : t + "";
        }
        var Cn = (function () {
          return (
            (e = function e() {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._duration = 0));
            }),
            (t = [
              {
                key: "setInitialDuration",
                value: function (e) {
                  this._duration = e;
                },
              },
              {
                key: "measure",
                value: function (e) {
                  var t = this;
                  if (performance && performance.measure)
                    try {
                      var n = performance.measure(e).duration;
                      setTimeout(function () {
                        t.print(e, n);
                      });
                    } catch (e) {
                      window.__CORE__
                        .createLogger("PERFORMANCE")
                        .LogError("Measure performance error.", e);
                    }
                },
              },
              {
                key: "format",
                value: function (e, t) {
                  var n = new Date(e);
                  return t
                    ? ""
                      .concat(n.getUTCMinutes(), ":")
                      .concat(n.getUTCSeconds(), ".")
                      .concat(n.getUTCMilliseconds())
                    : ""
                      .concat(n.getFullYear(), "-")
                      .concat(n.getMonth() + 1, "-")
                      .concat(n.getDate(), " ")
                      .concat(n.getHours(), ":")
                      .concat(n.getMinutes(), ":")
                      .concat(n.getSeconds(), ".")
                      .concat(n.getMilliseconds());
                },
              },
              {
                key: "print",
                value: function (e, t) {
                  var n = this.format(t, !0),
                    r = this.format(t + this._duration, !0);
                  window.__CORE__
                    .createLogger("PERFORMANCE")
                    .LogTrace(
                      "".concat(e, " at ").concat(n, " (").concat(r, ")"),
                    );
                },
              },
            ]),
            t && wn(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
        function _n(e) {
          return (
            (_n =
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
            _n(e)
          );
        }
        function Pn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, Sn(r.key), r));
          }
        }
        function Sn(e) {
          var t = (function (e, t) {
            if ("object" != _n(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != _n(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == _n(t) ? t : t + "";
        }
        var En = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.store = t));
            }),
            (t = [
              {
                key: "onViewActivate",
                value: function (e) {
                  if (e) {
                    var t = window.__CORE__,
                      n = this.store.state.activeView;
                    (n &&
                      setTimeout(function () {
                        return e({ name: n.name, instance: t.views[n.name] });
                      }),
                      t.bus.on("View:activate", function (t) {
                        return e(t);
                      }));
                  }
                },
              },
            ]),
            t && Pn(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
          jn = n(66675);
        function On(e) {
          return (
            (On =
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
            On(e)
          );
        }
        function Dn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, Ln(r.key), r));
          }
        }
        function Ln(e) {
          var t = (function (e, t) {
            if ("object" != On(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != On(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == On(t) ? t : t + "";
        }
        function Bn(e, t, n) {
          return (
            (t = An(t)),
            (function (e, t) {
              if (t && ("object" == On(t) || "function" == typeof t)) return t;
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
              xn()
                ? Reflect.construct(t, n || [], An(e).constructor)
                : t.apply(e, n),
            )
          );
        }
        function xn() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () { }),
            );
          } catch (e) { }
          return (xn = function () {
            return !!e;
          })();
        }
        function An(e) {
          return (
            (An = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
            An(e)
          );
        }
        function Vn(e, t) {
          return (
            (Vn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
            Vn(e, t)
          );
        }
        var Tn = (function (e) {
          function t() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((e = Bn(this, t, arguments))._background =
                e.extractRawBackgroundColor()),
              e
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
                t && Vn(e, t));
            })(t, e),
            (n = t),
            (i = [
              {
                key: "defaultTheme",
                get: function () {
                  return this._defaultTheme;
                },
              },
              {
                key: "theme",
                get: function () {
                  return this.colorThemeService.theme;
                },
              },
              {
                key: "background",
                get: function () {
                  return this._background;
                },
              },
              {
                key: "start",
                value: function (e, t, n) {
                  var i,
                    o = this;
                  ((this._background = this.extractRawBackgroundColor()),
                    (this._defaultTheme =
                      null !== (i = this.getDefaultTheme(e)) && void 0 !== i
                        ? i
                        : t),
                    (this.colorThemeService = new r.NA({
                      isAudioEnabled: !1,
                      isThemeChangeEnabled: !0,
                      defaultTheme: this.defaultTheme,
                      isDarkContrastEnabled: n.licensesService.hasLicense(
                        "KillSwitch_ColorTheme_DarkContrast",
                      ),
                      url: window.location.href,
                    })),
                    (this.colorThemeService.theme = this.defaultTheme),
                    window.__APP__.parentEvents.on(
                      "update-color-theme",
                      function (e) {
                        return o.updateTheme(e.data);
                      },
                    ),
                    (n.onThemeChanged = this.onThemeChanged.bind(this)),
                    (n.utils.colorStringToRgba =
                      this.colorStringToRgba.bind(this)));
                },
              },
              {
                key: "colorStringToRgba",
                value: function (e, t) {
                  return (
                    this.convertColorHexString(e) ||
                    this.convertColorRgbaString(e) ||
                    this.convertColorNameString(e) ||
                    t || { r: 0, g: 0, b: 0, a: 1 }
                  );
                },
              },
              {
                key: "convertColorHexString",
                value: function (e) {
                  if (e.startsWith("#")) {
                    if (3 === (e = e.slice(1)).length)
                      return {
                        r: parseInt(e.slice(0, 1).concat(e.slice(0, 1)), 16),
                        g: parseInt(e.slice(1, 2).concat(e.slice(1, 2)), 16),
                        b: parseInt(e.slice(2, 3).concat(e.slice(2, 3)), 16),
                        a: 1,
                      };
                    if (6 === e.length)
                      return {
                        r: parseInt(e.slice(0, 2), 16),
                        g: parseInt(e.slice(2, 4), 16),
                        b: parseInt(e.slice(4, 6), 16),
                        a: 1,
                      };
                  }
                },
              },
              {
                key: "convertColorRgbaString",
                value: function (e) {
                  var t = e.match(
                    /^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*?(\d*\.?\d*)?\)/,
                  );
                  if (t)
                    return {
                      r: Number(t[1]),
                      g: Number(t[2]),
                      b: Number(t[3]),
                      a: t[4] ? Number(t[4]) : 1,
                    };
                },
              },
              {
                key: "convertColorNameString",
                value: function (e) {
                  e = e.toLowerCase();
                  var t = window.__CORE__.colorNames[e];
                  return t ? this.convertColorHexString(t) : void 0;
                },
              },
              {
                key: "extractRawBackgroundColor",
                value: function () {
                  var e = window
                    .getComputedStyle(document.body)
                    .getPropertyValue("--afs-viewer"),
                    t = this.colorStringToRgba(e, {
                      r: 200,
                      g: 200,
                      b: 200,
                      a: 1,
                    }),
                    n = t.r,
                    r = t.g,
                    i = t.b;
                  return {
                    css: "#".concat(
                      ((1 << 24) + (n << 16) + (r << 8) + i)
                        .toString(16)
                        .slice(1),
                    ),
                    number: (n << 16) + (r << 8) + i,
                    array: [n, r, i],
                  };
                },
              },
              {
                key: "getDefaultTheme",
                value: function (e) {
                  if (
                    e &&
                    ((e = e && e.trim().toLowerCase()),
                      ["light", "dark", "dark-contrast"].includes(e))
                  )
                    return e;
                },
              },
              {
                key: "updateTheme",
                value: function (e) {
                  var t = e || this.defaultTheme,
                    n = this.colorThemeService.theme;
                  ((this.colorThemeService.theme = t),
                    n !== t && this.emit("changed"));
                },
              },
              {
                key: "onThemeChanged",
                value: function (e) {
                  var t = this,
                    n = function (n) {
                      t._background = t.extractRawBackgroundColor();
                      var r = t.background;
                      try {
                        r && (null == e || e.apply(t, [r, n]));
                      } catch (e) {
                        window.__CORE__
                          .createLogger("ThemeManager")
                          .LogError(
                            "Update theme callback invocation error.",
                            e,
                          );
                      }
                    };
                  (n(!0),
                    this.on("changed", function () {
                      return n(!1);
                    }));
                },
              },
            ]),
            i && Dn(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(jn.Z),
          Nn = n(25050),
          Mn = n(52017),
          In = n(37631),
          Rn = n(74646),
          Fn = n(2466);
        const Hn = JSON.parse(
          '{"viewer":{"common":{"saveToPersonalSpace":"Save to Personal Space","preparing":"Preparing","processing":"Processing document"},"plugins":{"PCBDWFView":{"displayName":"Draftsman"},"MBAView":{"downloading_mba":"Downloading MBA","PartsHeader":{"title":"Multiboard Assembly"},"parts":{"displayNameObjects":"Objects","descriptionMultiboardModule":"Multiboard Assembly Objects module","ObjectTreeItem":{"disableTransparencyHint":"Disable Transparency","enableTransparencyHint":"Enable Transparency"}},"displayName":"MBA","comment":"Represent MBA graphical representation","engine":{"document":{"dataGettingError":"Data getting error.","compileDocumentError":"Compile document error.","binDataNotLoaded":"Bin data has not loaded."},"services":{"annotation":{"showDocumentNotPossible":"Show document is not possible."},"render":{"renderingNotInitialized":"Rendering has not initialized.","unexpectedError":"Unexpected error.","graphicsCompilationError":"Graphics compilation error."}}}},"BoardItemsVisibility":{"description":"Board Items Visibility","displayName":"Board Items Visibility","displayNameLayersObjects":"Layers/Objects","displayNameLayers":"Layers","displayNameObjects":"Objects","hint":"Board Items Visibility","viewStackup":"View Stackup","resetLayers":"Reset Layers","resetObjects":"Reset Objects","only":"Only","nextPrevLayer":"Next / Previous Layer","keyHint":"Key +/-","layers":"Layers","layersObjects":"Layers/Objects","objects":"Objects","objectsData":{"arc":"Arcs ","pads":"Pads","vias":"Vias","tracks":"Tracks","poly":"Polygons","region":"Regions","fill":"Fills","text":"Texts","dimension":"Dimensions","coordinate":"Coordinates","rule":"Rooms","componentBody":"3D Body","keepouts":"Keepouts","connectionLines":"Connection Lines"},"groupAllObjects":"All Objects","layersViews":{"top":"Top","bottom":"Bottom"}},"BOMCompareView":{"downloadHint":"Download: BOM Difference"},"BOMCompareDocument":{"description":"BOM Compare Document","displayName":"BOM Compare","hint":"BOM Compare Document Options","title":"BOM Compare Document","modifiedComponents":"Modified Components","differences":"Differences","components":"Components","noVariations":"[No Variations]","filterAdded":"Added","filterRemoved":"Removed","filterModified":"Modified","filterNotModified":"Not Modified","alternatives":"Alternatives","statusAdded":"Added","statusRemoved":"Removed","statusModified":"Modified","addedParams":"Added Parameters","removedParams":"Removed Parameters","modifiedParams":"Modified Parameters","notAvailable":"N/A","variantsTitle":"Variants {name}"},"BOMCompareTab":{"description":"A design BOM view module","initMessage":"BOM Compare initialization","initMeta":"It will take a few moments","errorMessage":"Something went wrong. Please try again later.","baseTab":"Base","targetTab":"Target","diffTab":"Differences","noBomDiff":"No BOM differences detected","noDiff":"No differences detected","noRemoved":"No removed items detected","noAdded":"No added items detected","noModified":"No modified items detected","FooterText":{"total":"Total","price":"Price"}},"SCHView":{"displayName":"SCH","description":"Schematic SVG main view"},"lsmBack":{"displayName":"Back","description":"Exit from Layer Stackup View"},"LSMView":{"notificationMessage":"Note: The following features are not displayed in the Web UI: "},"ldrView":{"displayName":"Layout"},"PCBView":{"displayName":"PCB","description":"PCB View module for show 2D designs."},"3D":{"displayName":"3D","description":"PCB View module for show 3D designs."},"BOMView":{"description":"BOM View","loading":"Loading BOM data","error":"Something went wrong. Please try again later).","displayName":"BOM","comment":"BOM View","empty":"BOM data is empty","total":"Total","namesUnit":"{count} Names","notFound":"{query} not found","graphicalSoonHint":"Graphical differences displaying is coming soon","Item":{"connectivityChangesTitle":"Connectivity Changes"}},"BOMViewOnPremise":{"description":"A design BOM view module"},"CadExExport":{"comment":"MCAD export plugin","description":"Download","hint":"Downloads","exportError":"Something went wrong during export","exportSectionTitle":"Export to Specific Format","messageAvailableAuto":"The {format} file download should start automatically. If it does not, {link}.","downloadLinkText":"download by the link","messageAvailableManual":"The {format} file export is finished. It can be {link}.","messagePendingAuto":"The download will start after the {format} file generation. It will take a few moments.","messagePendingManual":"The {format} file will available after generation. It will take a few moments.","polyToBRepWarning":"The document does not contain boundary (B-Rep) representations for the model. The polygonal representations in the model will be automatically converted to B-Rep, as required by the {format} format. Note that while the B-Rep model is suitable for viewing, it will have limited usability for further modeling operations. Would you like to export to the {format} format anyway?","exportButton":"Export","cancelButton":"Cancel","unitsTitle":"Units"},"CadexView":{"description":"Cadex View","displayName":"3D","loadFailed":"Failed to load model from url: {url}","partsTree":{"unnamedPart":"Unnamed Part","unnamedAssembly":"Unnamed Assembly"}},"CCVCommentPanel":{"commentsHint":"Comments","commentsTasksHint":"Comments and Tasks","commentsTitle":"Comments","commentsTasksTitle":"Comments and Tasks","taskPrefix":"Task ","assignedToJoiner":", assigned to ","commentFallback":"Comment…","placeComment":"Place a Comment"},"CompareChanges":{"filterAll":"All","filterFreeObject":"Free Object","groupBoardShape":"Board Shape","groupComponents":"Components","groupNets":"Nets","groupStackup":"Stackup","groupFreeObjects":"Free Object","kindTrack":"Track","kindArc":"Arc","kindFill":"Fill","kindPad":"Pad","kindVia":"Via","kindText":"Text","kindRegion":"Region","kindPolygon":"Polygon","kindComponent":"Component","kindBoardShape":"Board Shape","kindLayer":"Layer","kindNet":"Net","kindParameter":"Parameter","pcbTitle":"PCB Compare Document","pcbCompareTitle":"PCB Compare"},"CompareDocument":{"description":"A design schematic compare document module","displayName":"Schematic Compare","noData":"No data to display","logicalOnlyNote":"Showing logical differences only","graphicalSoonHint":"Graphical differences displaying is coming soon","Item":{"connectivityChangesTitle":"Connectivity Changes","modificationLabel":{"added":"Added","removed":"Removed","updated":"Modified"}}},"CompareLayers":{"moduleDescription":"Compare Layers","displayName":"Layers","comment":"Layers","description":"Layers","title":"Layers","titleDifferences":"Differences ({count})","hintDifferences":"Differences","hintDifferencesCount":"{count} Differences","noDifferencesIdentical":"No differences. The compared files are identical.","snackbarStatusText":"{statusText} {layerName}","statusAdded":"The compared layer exists in the target package only","statusRemoved":"The compared layer exists in the source package only","statusIdentical":"No differences for layer","hintDifferent":"Different layers","hintAdded":"Target only layer","hintRemoved":"Source only layer","hintIdentical":"Identical layers","pinPanel":"Pin Panel","unpinPanel":"Unpin Panel","coordX":"X","coordY":"Y","coordLabel":"{coord}: {value}{unit}","coordsXYUnit":"X: {x}{unit}; Y: {y}{unit}","Item":{"noDifferences":"No Differences","diffsDetectedHint":"{count} difference(s) detected on the sheet","modificationHint":{"added":"Added sheet","updated":"Modified sheet","removed":"Removed sheet","unchanged":"Unchanged sheet"}}},"DetailsPanel":{"comment":"Details Panel","description":"Details Panel","hint":"Details Panel","lifecycleNew":"New Product","lifecycleProduction":"Volume Production","lifecycleNRND":"Not Recommended for New Design","lifecycleEOL":"End of Life","lifecycleObsolete":"Obsolete","lifecycleUnknown":"Unknown","shapeNone":"None","shapeRound":"Round","shapeRectangle":"Rectangle","shapeOctagonal":"Octagonal","shapeCircle":"Circle","shapeArc":"Arc Shape","shapeTerminator":"Terminator","shapeRoundRectangle":"Round Rectangle","shapeRotatedRectangle":"Rotated Rectangle","shapeRoundedRectangle":"Rounded Rectangle","shapeCustomPad":"Custom Pad","customShapeNone":"None","customShapeOctagonalFinger":"Octagonal Finger","customShapeRoundedFinger":"Rounded Finger","customShapeRoundedRectangle":"Rounded Rectangle","customShapeChamferedRectangle":"Chamfered Rectangle","customShapeDonut":"Donut","noVariations":"[No Variations]","rowMargin":"Row Margin","rowSpacing":"Row Spacing","columnMargin":"Column Margin","columnSpacing":"Column Spacing","bomUnknownServer":"Unknown server","bomSourceServerNotAccessible":"Source server {source} is not accessible","bomRevisionState":"Revision State: {state}","bomRevisionStatus":"Revision Status: {status}","bomMinStock":"Minimum Available Stock: {stock}","bomUnitPrice":"Unit Price: {price}","bomManufacturerLifecycle":"Manufacturer Lifecycle State","bomMultipleLifecyclesDetected":"We detected multiple lifecycles from available data providers","bomPartInUse":"In use","bomLibraryParameters":"Library Parameters","bomDesignParameters":"Design Parameters","bomManufacturerLifecycleState":"Manufacturer Lifecycle State: {state}","bomNoData":"no data","bomHealthCheckClean":"Clean","bomManufacturerLifecycleStateToken":"Manufacturer Lifecycle State","crossSelectLabel":"Cross Select Across Tabs","crossSelectHint":"When enabled, view the same object in unique views across different browser tabs","pcbDocument":"PCB Document","columnCount":"Column Count","rowCount":"Row Count","embeddedBoardArray":"Embedded Board Array","coordsXY":"X: {x}; Y: {y}","rotation":"Rotation: {rotation}","layer":"Layer: {layerName}","netHidden":"Net is Hidden","routingIncomplete":"Routing Incomplete","physicalName":"Physical Name","netName":"Net Name","routedLength":"Routed Length","propName":"Name","propRadius":"Radius","propWidth":"Width","propType":"Type","propVia":"Via","propLayer":"Layer","propLength":"Length","smdPad":"SMD Pad","plated":"Plated","unplated":"Unplated","hole":"Hole","holeSize":"Hole Size","propShape":"Shape","stock":"Stock"},"FBOM":{"description":"A design BOM view module","loadingDefault":"Loading...","colName":"Name","colDescription":"Description","colDesignator":"Designator","colPartNumber":"Part Number","colPrice":"Price","colQty":"Qty","bannerTitle":"Try ActiveBOM","bannerDescription":"With ActiveBOM you can manage alternate parts and replacements, perform BOM checks, and enjoy a host of other capabilities","bannerGotIt":"Got It","bannerLearnMore":"Learn More","compareSelectedColumns":"Compare only selected columns","showMore":"Show More","showLess":"Show Less","footerTotals":"{lines} lines, {components} components","hintPricePerBoard":"Price per board: {price}","hintOrderPrice":"Order price: {price}","warningValuesOutOfDate":"Some values may be out of date due to a server error – {link} or come back later","warningReloadLink":"reload the page","searchNotFoundTitle":"No results for your search","searchNotFoundHint":"Clear the search and start again.","colSettings":"Column Settings","providerHint":"Data provided by {providerName}","libraryParamHint":"This data is sourced from the parts provider included with your subscription level.","base":{"setupError":"Setup error.","bomViewSetupError":"BOM view setup error."},"tableDocumentsCell":{"complianceHeader":"Compliance"},"baseBomEngine":{"getBomDataError":"Get BOM data error."},"systemBomEngine":{"loadingError":"Loading error."},"viewManager":{"lifecycleTitle":"Manufacturer Lifecycle State","statusUnknown":"Unknown","noVariations":"[No Variations]"},"composables":{"virtualScrollInitError":"[FBOM] Can\'t initialize virtual scroll. Container element not found."}},"ui":{"App":{"expiredMessage":"This design has expired.","goTo365":"Go to Altium 365","initializing":"Initializing Viewer","refreshPage":"Refresh Page","previewAltText":"Preview"},"KeyValueList":{"link":"Link"},"SignupButton":{"register":"Register in Altium 365"}},"HelpPanel":{"BaseMeasurements":{"title":"measurements"},"BaseUnitSwitcher":{"unitsTitle":"Units"},"boardInfo":{"sections":{"boardSize":"Board Size","layers":"Layers","layersLink":"Stackup View","components":"Components","nets":"Nets"},"items":{"horizontal":"Horizontal","vertical":"Vertical","total":"Total","top":"Top","bottom":"Bottom","signal":"Signal","internal":"Internal Plane","unrouted":"Unrouted","hidden":"Hidden"}},"sections":{"controls":"Controls","boardInfo":"Board Info","pdfData":"PDF document data","documentation":"Documentation","about":"About Altium 365 Viewer","gerberAbout":"About Altium 365 Gerber Compare"},"controls":{"select":"Select","zoom":"Zoom In/Out","pan":"Pan","pan3d":"Pan 3D","reset":"Reset View","rotate3d":"Rotate in 3D","switch2d":"Switch to 2D","switch3d":"Switch to 3D","nextPrevLayer":"Next / Previous Layer ","fold3d":"Fold / Unfold in 3D (rigid-flex)","flip":"Flip Board Top / Bottom","scroll":"Scroll Left/Right","units":{"mm":"mm","mil":"mil"},"mobile":{"tap":"Tap","pinch":"Pinch","drag":"Drag","doubleTap":"Double Tap"},"desktop":{"lmb":"LMB","scroll":"Scroll","rmb":"RMB","drag":"Drag"}}},"PreviewPanel":{"App":{"newVisualizationAvailable":"New visualization is available","refreshPage":"Refresh Page","previewAltText":"Preview"},"Item":{"noDifferences":"No Differences","diffsDetectedHint":"{count} difference(s) detected on the sheet","modificationHint":{"added":"Added sheet","updated":"Modified sheet","removed":"Removed sheet","unchanged":"Unchanged sheet"}}},"Search":{"hint":"Search components and nets","BaseForm":{"searchPlaceholder":"Search"},"BaseHeader":{"keyboardShortcutHint":"(Ctrl+F)"},"BaseRecentSearch":{"title":"RECENT SEARCH"},"revisionStateHeader":"Revision state","searchResult":"Search {result}","filterTypes":{"all":"All","component":"Component","net":"Net"}},"SimulationLayers":{"AppPin":{"pinPanel":"Pin Panel","unpinPanel":"Unpin Panel","resetLayers":"Reset Layers"},"LayersControls":{"resetLayers":"Reset Layers"}},"StandaloneCommentPanel":{"App":{"cancelButton":"Cancel","postButton":"Post","deleteButton":"Delete","deleteConfirmationMessage":"Are you sure you want to delete this comment?","leaveFeedbackLink":"Leave Feedback","commentButton":"Comment"},"CommentForm":{"commentPlaceholder":"Please leave a comment"},"CommentInfo":{"updateButton":"Update"}},"ComparePanel":{"App":{"orSeparator":"or","chooseFromComputerLink":"choose from your computer"}},"DownloadRedirect":{"App":{"projectSourceFilesTitle":"Project Source Files","derivedFilesTitle":"Derived Files"}},"ESDView":{"displayName":"ESD","AddDocument":{"title":"System Design Document","description":{"add":"Add Electronic System Design (ESD) document to your project and handle the whole device idea in one place.","exists":"Electronic System Design (ESD) document is exists. You can open it in editor."},"addButton":"Add","openButton":"Open in Editor","defaultDocumentName":"System Design"}},"FabricationCompareView":{"layersPanel":{"layerColorTitle":"Layer Color","subTitle":{"gerber":"Gerber Compare","odb":"ODB++ Compare"}},"baseView":{"showComparisonResult":"Show comparison result."},"separatedView":{"displayName":"Side by Side","comment":"Presents fabrication compare separated view"},"combinedView":{"displayName":"Combined","comment":"Presents fabrication compare merged view"},"measurement":{"comment":"Measurements Panel for Fabrication Compare","description":"Fabrication Compare Measurement plugin","hint":"Measure","title":"Measurements"},"separatedViewUi":{"mountElementNotFound":"Mount element has not found."},"engine":{"preparing":"Preparing"},"hints":{"different":"Different layers","targetOnly":"Target only layer","sourceOnly":"Source only layer","identical":"Identical layers"}},"ParentDownload":{"App":{"registrationRequiredMessage":"To download a file, you must register in Altium 365."}},"HarnessDetailsPanel":{"HarnessAssociatedParts":{"componentHeader":"Component","revisionStateHeader":"Revision state","noComponents":"There are no components to display"}},"FullScreen":{"name":"FullScreen","comment":"FullScreen","description":"FullScreen","hint":"Switch full screen mode"},"Export":{"name":"Export","description":"Export plugin with on demand requests","panelDescription":"Download","panelHint":"Downloads","convertExportData":{"projectSourceFilesTitle":"Project Source Files","lastModifiedPrefix":"last modified ","noVariantsFallback":"No variants","derivedFilesTitle":"Derived Files","forPcbContextPrefix":" for ","releasesTitle":"Releases"},"fileTypes":{"gerber":{"name":"Gerber"},"ansysEdb":{"name":"Ansys EDB"},"assemblyDocs":{"name":"Assembly Docs","shortName":"Assembly","hintFullDraftsman":"Full documentation generated from project Draftsman document","hintPartialNoDraftsman":"Assembly Drawings generated only. Full documentation requires a Draftsman document."},"pdfSchematic":{"name":"PDF Schematic","shortName":"PDF","hintPrefix":"Download PDF Schematic_"},"step":{"name":"STEP","hintPrefix":"Download STEP_"},"bom":{"name":"BOM","hintPrefix":"Download BOM_"}},"viewApp":{"migrateToEnableDownloads":"Migrate this project to Altium Versioned Storage to enable downloads","noDownloadPermissions":"You don\'t have permissions to download project files","downloadLinkExpired":"Download link has expired. Please, try again later","somethingWentWrongExport":"Something went wrong during export"},"BaseHeader":{"title":"Download"},"DownloadItem":{"longWaitEmailNotification":"You can wait or close the panel. We will email you the {name} file download link...","generationInProgress":"The download will start after the {name} file generation. It will take a few moments...","hintGeneratingVisualization":"New visualization is generating now...","hintVisualizationAvailableRefresh":"New visualization is available. Please, refresh page and try again"},"ExportSection":{"showMore":"Show More","showLess":"Show Less"}},"Variants":{"moduleDescription":"Variants","name":"Variants","comment":"Variants","appModuleDescription":"Variants","notAvailable":"N/A"},"FabricationMeasurement":{"meta":{"comment":"Measurement","description":"Measurement","hint":"Measure","viewTitle":"Measurements"},"moduleDescription":"Represent fabrication measurement plugin module."},"FabricationPCBDWFView":{"meta":{"displayName":"Draftsman","comment":"Draftsman SVG main view for Fabrication Package in Workspace"},"moduleDescription":"Represent Drafstman view for Fabrication Package in Workspace provider module."},"FabricationView":{"meta":{"displayName":"Fabrication","comment":"Fabrication documents UI view"},"engineNotDefinedError":"Engine has not defined.","showDocumentError":"Show document error.","moduleDescription":"Represent fabrication view provider module."},"FakeViews":{"description":"FakeViews plugin","comment":"Plugin to parse views from data-attribute and create new views instances","fakeViewDescription":"Fake view","fakeViewComment":"Fake view (dynamically created)"},"GerberCompareMeasurement":{"meta":{"comment":"Measurement for Gerber Compare","description":"Gerber Compare Measurement plugin","hint":"Measure","viewTitle":"Measurements"},"freeModeName":"Free","moduleDescription":"Represent fabrication comparison measurement plugin module."},"Measurement":{"viewTitle":"Measurements","hint":"Measure"},"ComponentView":{"modes":{"free":"Free","point2point":"Point to Point","object2object":"Object to Object"}},"AdvancedSearch":{"search":{"keywords":{"component":{"name":"component","description":"A component data to search"},"designator":{"name":"designator","description":"A component\'s designator data to search"},"document":{"name":"document","description":"A document data to search"},"hasParameter":{"name":"hasParameter","description":"A component\'s parameter data to check"},"net":{"name":"net","description":"A net data to search"}}}}},"lib":{"snapshot":"Original Snapshot","contextMenu":{"convertToTask":"Convert to Task","edit":"Edit","delete":"Delete","copyLink":"Copy Link"}},"engines":{"pcb":{"downloading":"Downloading PCB","rendering":"Rendering PCB","initializing":"Initializing PCB"},"measurement":{"results":{"disXY":"Distance XY","disX":"Distance X","disY":"Distance Y"},"items":{"p1":"Point 1","p2":"Point 2","fallback":"Select on design"},"prevMeasurements":"previous measurements"}}}}',
        ),
          zn = JSON.parse(
            '{"viewer":{"common":{"saveToPersonalSpace":"保存到个人空间","preparing":"准备中","processing":"正在处理文档"},"plugins":{"PCBDWFView":{"displayName":"Draftsman"},"MBAView":{"downloading_mba":"正在下载 MBA","PartsHeader":{"title":"多板装配"},"parts":{"displayNameObjects":"对象","descriptionMultiboardModule":"多板装配对象模块","ObjectTreeItem":{"disableTransparencyHint":"禁用透明度","enableTransparencyHint":"启用透明度"}},"displayName":"MBA","comment":"展示 MBA 图形表示","engine":{"document":{"dataGettingError":"获取数据出错.","compileDocumentError":"编译文档出错.","binDataNotLoaded":"二进制数据未加载."},"services":{"annotation":{"showDocumentNotPossible":"无法显示文档."},"render":{"renderingNotInitialized":"渲染未初始化.","unexpectedError":"意外错误.","graphicsCompilationError":"图形编译错误."}}}},"BoardItemsVisibility":{"description":"板项可见性","displayName":"板项可见性","displayNameLayersObjects":"层/对象","displayNameLayers":"层","displayNameObjects":"对象","hint":"板项可见性","viewStackup":"查看层叠","resetLayers":"重置层","resetObjects":"重置对象","only":"仅","nextPrevLayer":"上一层 / 下一层","keyHint":"按键 +/-","layers":"层","layersObjects":"层/对象","objects":"对象","objectsData":{"arc":"圆弧 ","pads":"焊盘","vias":"过孔","tracks":"走线","poly":"多边形","region":"区域","fill":"填充","text":"文本","dimension":"尺寸","coordinate":"坐标","rule":"Rooms","componentBody":"3D 实体","keepouts":"禁布区","connectionLines":"连接线"},"groupAllObjects":"所有对象","layersViews":{"top":"顶层","bottom":"底层"}},"BOMCompareView":{"downloadHint":"Download: BOM Difference"},"BOMCompareDocument":{"description":"BOM 比较文档","displayName":"BOM 比较","hint":"BOM 比较文档选项","title":"BOM 比较文档","modifiedComponents":"已修改的元器件","differences":"差异","components":"元器件","noVariations":"[无装配变量]","filterAdded":"新增","filterRemoved":"移除","filterModified":"修改","filterNotModified":"未修改","alternatives":"替代料","statusAdded":"新增","statusRemoved":"移除","statusModified":"修改","addedParams":"新增参数","removedParams":"移除参数","modifiedParams":"修改参数","notAvailable":"N/A","variantsTitle":"装配变量 {name}"},"BOMCompareTab":{"description":"设计 BOM 视图模块","initMessage":"BOM 比较初始化","initMeta":"这将需要一点时间","errorMessage":"出现问题，请稍后再试.","baseTab":"基础","targetTab":"目标","diffTab":"差异","noBomDiff":"未检测到 BOM 差异","noDiff":"未检测到差异","noRemoved":"未检测到移除项","noAdded":"未检测到新增项","noModified":"未检测到修改项","FooterText":{"total":"总计","price":"价格"}},"SCHView":{"displayName":"原理图","description":"原理图 SVG 主视图"},"lsmBack":{"displayName":"返回","description":"退出层叠视图"},"LSMView":{"notificationMessage":"注意：以下功能在 Web UI 中不可用："},"ldrView":{"displayName":"布局"},"PCBView":{"displayName":"PCB","description":"用于显示 2D 设计的 PCB 视图模块."},"3D":{"displayName":"3D","description":"用于显示 3D 设计的 PCB 视图模块."},"BOMView":{"description":"BOM 视图","loading":"加载 BOM 数据","error":"出现问题，请稍后再试.","displayName":"BOM","comment":"BOM 视图","empty":"BOM 数据为空","total":"总计","namesUnit":"{count} 个名称","notFound":"{query} 未找到","graphicalSoonHint":"图形差异显示即将推出","Item":{"connectivityChangesTitle":"连接更改"}},"BOMViewOnPremise":{"description":"设计 BOM 视图模块"},"CadExExport":{"comment":"MCAD 导出插件","description":"下载","hint":"下载","exportError":"导出过程中出现问题","exportSectionTitle":"导出为特定格式","messageAvailableAuto":"{format} 文件下载应会自动开始. 如果没有, 请{link}.","downloadLinkText":"通过链接下载","messageAvailableManual":"{format} 文件导出已完成. 它可以 {link}.","messagePendingAuto":"在生成 {format} 文件后将开始下载. 这将需要一点时间.","messagePendingManual":"{format} 文件将在生成后可用. 这将需要一点时间.","polyToBRepWarning":"文档不包含模型的边界(B-Rep)表示. 模型中的多边形表示将自动转换为B-Rep, 以符合 {format} 格式要求. 请注意，虽然 B-Rep 模型适合查看，但在进一步建模操作中可用性有限. 是否仍要导出为 {format} 格式?","exportButton":"导出","cancelButton":"取消","unitsTitle":"单位"},"CadexView":{"description":"Cadex 视图","displayName":"3D","loadFailed":"从URL加载模型失败: {url}","partsTree":{"unnamedPart":"未命名器件","unnamedAssembly":"未命名装配体"}},"CCVCommentPanel":{"commentsHint":"评论","commentsTasksHint":"评论与任务","commentsTitle":"评论","commentsTasksTitle":"评论与任务","taskPrefix":"任务 ","assignedToJoiner":", 指派给 ","commentFallback":"评论…","placeComment":"添加评论"},"CompareChanges":{"filterAll":"全部","filterFreeObject":"自由对象","groupBoardShape":"板形状","groupComponents":"元器件","groupNets":"网络","groupStackup":"叠层","groupFreeObjects":"自由对象","kindTrack":"走线","kindArc":"弧线","kindFill":"填充","kindPad":"焊盘","kindVia":"过孔","kindText":"文本","kindRegion":"区域","kindPolygon":"多边形","kindComponent":"元器件","kindBoardShape":"板形状","kindLayer":"层","kindNet":"网络","kindParameter":"参数","pcbTitle":"PCB 比较文档","pcbCompareTitle":"PCB 比较"},"CompareDocument":{"description":"设计原理图比较文档模块","displayName":"原理图比较","noData":"无数据显示","logicalOnlyNote":"仅显示逻辑差异","graphicalSoonHint":"图形差异显示即将推出","Item":{"connectivityChangesTitle":"连接更改","modificationLabel":{"added":"新增","removed":"移除","updated":"修改"}}},"CompareLayers":{"moduleDescription":"层比较","displayName":"层","comment":"层","description":"层","title":"层","titleDifferences":"差异 ({count})","hintDifferences":"差异","hintDifferencesCount":"{count} 个差异","noDifferencesIdentical":"无差异. 对比文件完全一致.","snackbarStatusText":"{statusText} {layerName}","statusAdded":"对比图层仅存在于目标包中","statusRemoved":"对比图层仅存在于源包中","statusIdentical":"层无差异","hintDifferent":"不同层","hintAdded":"仅目标层","hintRemoved":"仅源层","hintIdentical":"相同层","pinPanel":"固定面板","unpinPanel":"取消固定面板","coordX":"X","coordY":"Y","coordLabel":"{coord}: {value}{unit}","coordsXYUnit":"X: {x}{unit}; Y: {y}{unit}","Item":{"noDifferences":"无差异","diffsDetectedHint":"在图纸上检测到 {count} 个差异","modificationHint":{"added":"新增图纸","updated":"修改图纸","removed":"移除图纸","unchanged":"未更改图纸"}}},"DetailsPanel":{"comment":"详细信息面板","description":"详细信息面板","hint":"详细信息面板","lifecycleNew":"新产品","lifecycleProduction":"量产中","lifecycleNRND":"不推荐用于新设计","lifecycleEOL":"生命周期结束","lifecycleObsolete":"已淘汰","lifecycleUnknown":"未知","shapeNone":"无","shapeRound":"圆形","shapeRectangle":"矩形","shapeOctagonal":"八边形","shapeCircle":"圆","shapeArc":"弧形","shapeTerminator":"终止器形","shapeRoundRectangle":"圆角矩形","shapeRotatedRectangle":"旋转矩形","shapeRoundedRectangle":"圆角矩形","shapeCustomPad":"自定义焊盘","customShapeNone":"无","customShapeOctagonalFinger":"八边形指状焊盘","customShapeRoundedFinger":"圆角指状焊盘","customShapeRoundedRectangle":"圆角矩形","customShapeChamferedRectangle":"倒角矩形","customShapeDonut":"圆环形","noVariations":"[无装配变量]","rowMargin":"行边距","rowSpacing":"行间距","columnMargin":"列边距","columnSpacing":"列间距","bomUnknownServer":"未知服务器","bomSourceServerNotAccessible":"源服务器 {source} 无法访问","bomRevisionState":"版本状态: {state}","bomRevisionStatus":"版本状态: {status}","bomMinStock":"最小可用库存: {stock}","bomUnitPrice":"单价: {price}","bomManufacturerLifecycle":"制造商生命周期状态","bomMultipleLifecyclesDetected":"检测到来自多个数据提供商的生命周期状态","bomPartInUse":"正在使用","bomLibraryParameters":"库参数","bomDesignParameters":"设计参数","bomManufacturerLifecycleState":"制造商生命周期状态: {state}","bomNoData":"无数据","bomHealthCheckClean":"正常","bomManufacturerLifecycleStateToken":"制造商生命周期状态","crossSelectLabel":"跨标签页交叉选择","crossSelectHint":"启用后，可在不同浏览器标签页中查看同一对象的不同视图","pcbDocument":"PCB 文档","columnCount":"列数","rowCount":"行数","embeddedBoardArray":"嵌入式板阵列","coordsXY":"X: {x}; Y: {y}","rotation":"旋转: {rotation}","layer":"层: {layerName}","netHidden":"网络已隐藏","routingIncomplete":"布线未完成","physicalName":"物理名称","netName":"网络名称","routedLength":"布线长度","propName":"名称","propRadius":"半径","propWidth":"宽度","propType":"类型","propVia":"过孔","propLayer":"层","propLength":"长度","smdPad":"贴片焊盘","plated":"有镀层","unplated":"无镀层","hole":"孔","holeSize":"孔径","propShape":"形状","stock":"Stock"},"FBOM":{"description":"设计 BOM 视图模块","loadingDefault":"加载中...","colName":"名称","colDescription":"描述","colDesignator":"位号","colPartNumber":"料号","colPrice":"价格","colQty":"数量","bannerTitle":"试用 ActiveBOM","bannerDescription":"使用 ActiveBOM，您可以管理替代料，执行 BOM 检查，并享受更多功能","bannerGotIt":"知道了","bannerLearnMore":"了解更多","compareSelectedColumns":"仅比较选中的列","showMore":"显示更多","showLess":"显示更少","footerTotals":"{lines} 行, {components} 个元器件","hintPricePerBoard":"每块板价格: {price}","hintOrderPrice":"订单总价: {price}","warningValuesOutOfDate":"由于服务器错误，某些值可能已过期 – {link} 或稍后再试","warningReloadLink":"重新加载页面","searchNotFoundTitle":"未找到搜索结果","searchNotFoundHint":"清除搜索并重新开始.","colSettings":"列设置","providerHint":"数据由 {providerName} 提供","libraryParamHint":"此数据来自您订阅级别包含的器件供应商.","base":{"setupError":"设置错误.","bomViewSetupError":"BOM 视图设置错误."},"tableDocumentsCell":{"complianceHeader":"合规性"},"baseBomEngine":{"getBomDataError":"获取 BOM 数据出错."},"systemBomEngine":{"loadingError":"加载错误."},"viewManager":{"lifecycleTitle":"制造商生命周期状态","statusUnknown":"未知","noVariations":"[无装配变量]"},"composables":{"virtualScrollInitError":"[FBOM] 无法初始化虚拟滚动. 未找到容器元素."}},"ui":{"App":{"expiredMessage":"该设计已过期.","goTo365":"前往 Altium 365","initializing":"正在初始化查看器","refreshPage":"刷新页面","previewAltText":"预览"},"KeyValueList":{"link":"链接"},"SignupButton":{"register":"注册 Altium 365"}},"HelpPanel":{"BaseMeasurements":{"title":"测量"},"BaseUnitSwitcher":{"unitsTitle":"单位"},"boardInfo":{"sections":{"boardSize":"板尺寸","layers":"层","layersLink":"叠层视图","components":"元器件","nets":"网络"},"items":{"horizontal":"水平","vertical":"垂直","total":"总计","top":"顶层","bottom":"底层","signal":"信号层","internal":"内电层","unrouted":"未布线","hidden":"隐藏"}},"sections":{"controls":"控件","boardInfo":"板信息","pdfData":"PDF 文档数据","documentation":"文档","about":"关于 Altium 365 查看器","gerberAbout":"关于 Altium 365 Gerber 比较"},"controls":{"select":"选择","zoom":"放大/缩小","pan":"平移","pan3d":"3D 平移","reset":"重置视图","rotate3d":"3D 旋转","switch2d":"切换到 2D","switch3d":"切换到 3D","nextPrevLayer":"上一层 / 下一层","fold3d":"3D 折叠/展开（刚柔结合）","flip":"翻转顶层/底层","scroll":"左右滚动","units":{"mm":"mm","mil":"mil"},"mobile":{"tap":"点击","pinch":"捏合","drag":"拖动","doubleTap":"双击"},"desktop":{"lmb":"左键","scroll":"滚轮","rmb":"右键","drag":"拖动"}}},"PreviewPanel":{"App":{"newVisualizationAvailable":"有新的可视化内容可用","refreshPage":"刷新页面","previewAltText":"预览"},"Item":{"noDifferences":"无差异","diffsDetectedHint":"在图纸上检测到 {count} 个差异","modificationHint":{"added":"新增图纸","updated":"修改图纸","removed":"移除图纸","unchanged":"未更改图纸"}}},"Search":{"hint":"搜索元器件和网络","BaseForm":{"searchPlaceholder":"搜索"},"BaseHeader":{"keyboardShortcutHint":"(Ctrl+F)"},"BaseRecentSearch":{"title":"最近搜索"},"revisionStateHeader":"版本状态","searchResult":"搜索 {result}","filterTypes":{"all":"全部","component":"元器件","net":"网络"}},"SimulationLayers":{"AppPin":{"pinPanel":"固定面板","unpinPanel":"取消固定面板","resetLayers":"重置层"},"LayersControls":{"resetLayers":"重置层"}},"StandaloneCommentPanel":{"App":{"cancelButton":"取消","postButton":"发布","deleteButton":"删除","deleteConfirmationMessage":"确定要删除此评论吗?","leaveFeedbackLink":"留下反馈","commentButton":"评论"},"CommentForm":{"commentPlaceholder":"请留下评论"},"CommentInfo":{"updateButton":"更新"}},"ComparePanel":{"App":{"orSeparator":"或","chooseFromComputerLink":"从您的计算机选择"}},"DownloadRedirect":{"App":{"projectSourceFilesTitle":"项目源文件","derivedFilesTitle":"派生文件"}},"ESDView":{"displayName":"ESD","AddDocument":{"title":"系统设计文档","description":{"add":"将电子系统设计 (ESD) 文档添加到您的项目中，在一个地方处理整个设备的构想.","exists":"电子系统设计 (ESD) 文档已存在. 您可以在编辑器中打开它."},"addButton":"添加","openButton":"在编辑器中打开","defaultDocumentName":"系统设计"}},"FabricationCompareView":{"LayersPanel":{"layerColorTitle":"层颜色"},"layersPanel":{"subTitle":{"gerber":"Gerber 比较","odb":"ODB++ 比较"},"hints":{"different":"不同层","targetOnly":"仅目标层","sourceOnly":"仅源层","identical":"相同层"},"measurement":{"comment":"用于制造对比的测量面板","description":"制造对比测量插件","hint":"测量","title":"测量"},"combinedView":{"displayName":"合并视图","comment":"显示制造对比的合并视图"},"separatedView":{"displayName":"并排视图","comment":"显示制造对比的分离视图"},"baseView":{"showComparisonResult":"显示对比结果."},"separatedViewUi":{"mountElementNotFound":"未找到挂载元素."},"engine":{"preparing":"准备中"}},"hints":{"different":"不同层","targetOnly":"仅目标层","sourceOnly":"仅源层","identical":"相同层"}},"ParentDownload":{"App":{"registrationRequiredMessage":"要下载文件，您必须在 Altium 365 注册."}},"HarnessDetailsPanel":{"HarnessAssociatedParts":{"componentHeader":"元器件","revisionStateHeader":"版本状态","noComponents":"无可显示的元器件"}},"FullScreen":{"name":"全屏","comment":"全屏","description":"全屏","hint":"切换全屏模式"},"Export":{"name":"导出","description":"按需请求的导出插件","panelDescription":"下载","panelHint":"下载","convertExportData":{"projectSourceFilesTitle":"项目源文件","lastModifiedPrefix":"最后修改 ","noVariantsFallback":"无装配变量","derivedFilesTitle":"派生文件","forPcbContextPrefix":" 用于 ","releasesTitle":"发布"},"fileTypes":{"gerber":{"name":"Gerber"},"ansysEdb":{"name":"Ansys EDB"},"assemblyDocs":{"name":"装配文档","shortName":"装配","hintFullDraftsman":"从项目 Draftsman 文档生成的完整文档","hintPartialNoDraftsman":"仅生成装配图. 完整文档需要 Draftsman 文档."},"pdfSchematic":{"name":"PDF 原理图","shortName":"PDF","hintPrefix":"下载 PDF 原理图_"},"step":{"name":"STEP","hintPrefix":"下载 STEP_"},"bom":{"name":"BOM","hintPrefix":"下载 BOM_"}},"viewApp":{"migrateToEnableDownloads":"将此项目迁移到 Altium 版本化存储以启用下载","noDownloadPermissions":"您没有下载项目文件的权限","downloadLinkExpired":"下载链接已过期，请稍后再试","somethingWentWrongExport":"导出过程中出现问题"},"BaseHeader":{"title":"下载"},"DownloadItem":{"longWaitEmailNotification":"您可以等待或关闭面板. 我们将通过电子邮件发送 {name} 文件的下载链接...","generationInProgress":"在生成 {name} 文件后将开始下载. 这将需要一点时间...","hintGeneratingVisualization":"正在生成新的可视化内容...","hintVisualizationAvailableRefresh":"新的可视化内容已可用. 请刷新页面后重试"},"ExportSection":{"showMore":"Show More显示更多","showLess":"显示更少"}},"Variants":{"moduleDescription":"装配变量","name":"装配变量","comment":"装配变量","appModuleDescription":"装配变量","notAvailable":"N/A"},"FabricationMeasurement":{"meta":{"comment":"测量","description":"测量","hint":"测量","viewTitle":"测量"},"moduleDescription":"表示制造测量插件模块."},"FabricationPCBDWFView":{"meta":{"displayName":"Draftsman","comment":"用于工作区中制造包的 Draftsman SVG 主视图"},"moduleDescription":"表示工作区中制造包的 Draftsman 视图提供模块."},"FabricationView":{"meta":{"displayName":"制造","comment":"制造文档用户界面视图"},"engineNotDefinedError":"未定义引擎.","showDocumentError":"显示文档出错.","moduleDescription":"表示制造视图提供模块."},"FakeViews":{"description":"FakeViews 插件","comment":"用于从 data-attribute 解析视图并创建新视图实例的插件","fakeViewDescription":"虚拟视图","fakeViewComment":"虚拟视图 (动态创建)"},"GerberCompareMeasurement":{"meta":{"comment":"Gerber 对比测量","description":"Gerber 对比测量插件","hint":"测量","viewTitle":"测量"},"freeModeName":"自由","moduleDescription":"表示制造对比测量插件模块."},"Measurement":{"viewTitle":"测量","hint":"测量"},"ComponentView":{"modes":{"free":"自由","point2point":"点到点","object2object":"对象到对象"}}},"lib":{"snapshot":"原始快照","contextMenu":{"convertToTask":"转换为任务","edit":"编辑","delete":"删除","copyLink":"复制链接"}},"engines":{"pcb":{"downloading":"正在下载 PCB","rendering":"正在渲染 PCB","initializing":"正在初始化 PCB"},"measurement":{"results":{"disXY":"XY 距离","disX":"X 距离","disY":"Y 距离"},"items":{"p1":"点 1","p2":"点 2","fallback":"在设计中选择"},"prevMeasurements":"上次测量"}}}}',
          );
        var Zn = ["en-US", "zh-CN"],
          Un = function (e) {
            return e && Zn.includes(e) ? e : Zn[0];
          },
          Gn = n(92815),
          Wn = n(14594);
        function $n(e) {
          return (
            ($n =
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
            $n(e)
          );
        }
        function Yn() {
          Yn = function () {
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
            a = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
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
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof y ? t : y,
              a = Object.create(o.prototype),
              s = new L(r || []);
            return (i(a, "_invoke", { value: E(e, n, s) }), a);
          }
          function d(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            f = "suspendedYield",
            m = "executing",
            h = "completed",
            v = {};
          function y() { }
          function g() { }
          function b() { }
          var w = {};
          l(w, a, function () {
            return this;
          });
          var k = Object.getPrototypeOf,
            C = k && k(k(B([])));
          C && C !== n && r.call(C, a) && (w = C);
          var _ = (b.prototype = y.prototype = Object.create(w));
          function P(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function S(e, t) {
            function n(i, o, a, s) {
              var c = d(e[i], e, o);
              if ("throw" !== c.type) {
                var l = c.arg,
                  u = l.value;
                return u && "object" == $n(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    },
                  )
                  : t.resolve(u).then(
                    function (e) {
                      ((l.value = e), a(l));
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    },
                  );
              }
              s(c.arg);
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
          function E(t, n, r) {
            var i = p;
            return function (o, a) {
              if (i === m) throw Error("Generator is already running");
              if (i === h) {
                if ("throw" === o) throw a;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = a; ;) {
                var s = r.delegate;
                if (s) {
                  var c = j(s, r);
                  if (c) {
                    if (c === v) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (i === p) throw ((i = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = m;
                var l = d(t, n, r);
                if ("normal" === l.type) {
                  if (((i = r.done ? h : f), l.arg === v)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((i = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function j(t, n) {
            var r = n.method,
              i = t.iterator[r];
            if (i === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                    (n.arg = e),
                    j(t, n),
                    "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method",
                    )))),
                v
              );
            var o = d(i, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"),
                (n.arg = o.arg),
                (n.delegate = null),
                v
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[t.resultName] = a.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  v)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function O(e) {
            var t = { tryLoc: e[0] };
            (1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t));
          }
          function D(e) {
            var t = e.completion || {};
            ((t.type = "normal"), delete t.arg, (e.completion = t));
          }
          function L(e) {
            ((this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(O, this),
              this.reset(!0));
          }
          function B(t) {
            if (t || "" === t) {
              var n = t[a];
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
            throw new TypeError($n(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            i(_, "constructor", { value: b, configurable: !0 }),
            i(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, c, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, c, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            P(S.prototype),
            l(S.prototype, s, function () {
              return this;
            }),
            (t.AsyncIterator = S),
            (t.async = function (e, n, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new S(u(e, n, r, i), o);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
            }),
            P(_),
            l(_, c, "Generator"),
            l(_, a, function () {
              return this;
            }),
            l(_, "toString", function () {
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
            (t.values = B),
            (L.prototype = {
              constructor: L,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = e),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = e),
                    this.tryEntries.forEach(D),
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
                    ? ((this.method = "next"), (this.next = o.finallyLoc), v)
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
                  v
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return (this.complete(n.completion, n.afterLoc), D(n), v);
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var i = r.arg;
                      D(n);
                    }
                    return i;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = { iterator: B(t), resultName: n, nextLoc: r }),
                  "next" === this.method && (this.arg = e),
                  v
                );
              },
            }),
            t
          );
        }
        function Kn(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function Xn(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Kn(Object(n), !0).forEach(function (t) {
                qn(e, t, n[t]);
              })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Kn(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
          }
          return e;
        }
        function qn(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" != $n(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != $n(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == $n(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
              : (e[t] = n),
            e
          );
        }
        function Jn(e, t, n, r, i, o, a) {
          try {
            var s = e[o](a),
              c = s.value;
          } catch (e) {
            return void n(e);
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        function Qn(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, i) {
              var o = e.apply(t, n);
              function a(e) {
                Jn(o, r, i, a, s, "next", e);
              }
              function s(e) {
                Jn(o, r, i, a, s, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function er(e) {
          return tr.apply(this, arguments);
        }
        function tr() {
          return (tr = Qn(
            Yn().mark(function e(t) {
              var n, r, i, o;
              return Yn().wrap(
                function (e) {
                  for (; ;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t["data-viewer-api-url"]) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", t["data-viewer-api-url"]);
                      case 2:
                        ((n = ""), (e.next = 17));
                        break;
                      case 7:
                        return ((r = e.sent), (e.next = 10), r.json());
                      case 10:
                        ((i = e.sent).services.viewer && (n = i.services.viewer),
                          (e.next = 17));
                        break;
                      case 14:
                        ((e.prev = 14),
                          (e.t0 = e.catch(4)),
                          nr.LogWarn(
                            "Load configuration file error. Use built value.",
                            e.t0,
                          ));
                      case 17:
                        return (
                          (o = ["https:", "http:"].find(function (e) {
                            return n.includes(e);
                          })),
                          e.abrupt(
                            "return",
                            o ? n : t["data-service-base-url"] + n,
                          )
                        );
                      case 19:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 14]],
              );
            }),
          )).apply(this, arguments);
        }
        window.__APP__ = {
          get afsConfig() {
            return { assets: "./assets" };
          },
          createModule: n(65294).Z,
          preview: function (e, t) {
            return e instanceof Element ? kt(e, t) : kt(null, e);
          },
          loader: function (e, t) {
            return e instanceof Element ? yt(e, t) : yt(null, e);
          },
          snackbar: function (e, t) {
            return e instanceof Element ? St(e, t) : St(null);
          },
          notification: function (e, t, n) {
            return e instanceof Element ? Ht(e, t, n) : Ht(null);
          },
          menu: function (e, t) {
            return new Jt(e, t);
          },
          analytics: new gn(),
          eventAttachHelper: new En(Mn.Z),
          parentEvents: new at(),
          licensesService: Nn.Z,
          utils: {
            validator: I,
            debounce: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 500;
              (st[e] && clearTimeout(st[e]),
                (st[e] = setTimeout(function () {
                  (t(), delete st[e]);
                }, n)));
            },
            keyboard: ct.Z,
            generateGUID: tt.Z,
            getIcon: nt.Z,
            getAttributeValue: W.kD,
            directives: {
              lazy: en.Z,
              hint: tn.Z,
              domChange: nn.Z,
              highlight: rn.Z,
              resize: on.Z,
              trim: an.Z,
            },
          },
          library: { Vuex: o.ZP },
          sidebarWidth: 0,
          appPerformanceReporter: new Cn(),
          onThemeChanged: null,
          eventEmitters: {
            TypedNames: function () {
              return jn.Z;
            },
            TypedEventMap: function () {
              return Gn.Z;
            },
            TypedEventMapHandlers: function (e) {
              return (0, Wn.Z)(e);
            },
          },
        };
        var nr = window.__CORE__.createLogger("Index"),
          rr = (function () {
            var e = Qn(
              Yn().mark(function e(t) {
                var n, r, o, a;
                return Yn().wrap(function (e) {
                  for (; ;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s = (n = Xn({}, t.attributes))["data-i18n-lang"]),
                          (r = (0, Fn.o)({
                            locale: Un(s),
                            allowComposition: !0,
                            messages: { "en-US": Hn, "zh-CN": zn },
                            missing: function (e, t) {
                              return "[$".concat(t, "$]");
                            },
                          })),
                          (window.__APP__.library.i18n = r.global),
                          window.__APP__.licensesService.setup(
                            n["data-license-features"],
                          ),
                          new Tn().start(n["data-theme"], "dark", window.__APP__),
                          (o =
                            null == n
                              ? void 0
                              : n["data-external-styles-link"]) && (0, Qt.Z)(o),
                          (window.__DATA_SERVICE_URL__ =
                            n["data-service-base-url"]),
                          (e.next = 11),
                          er(n)
                        );
                      case 11:
                        return (
                          (window.__VIEWER_DOMAIN__ = e.sent),
                          (a = (0, i.createApp)(et, {
                            domain: window.__VIEWER_DOMAIN__,
                            coreInitialData: {
                              designUrl: t.designUrl,
                              userPluginsNames: Array.isArray(t.userPluginsNames)
                                ? t.userPluginsNames
                                : [],
                              modulesNamesToUrls: {
                                advancedsearch:
                                  "js/plugins/AdvancedSearch.js?1761730629786",
                                bomcomparedocument:
                                  "js/plugins/BOMCompareDocument.js?1761730629786",
                                bomcomparetab:
                                  "js/plugins/BOMCompareTab.js?1761730629786",
                                bomcompareview:
                                  "js/plugins/BOMCompareView.js?1761730629786",
                                bomview: "js/plugins/BOMView.js?1761730629786",
                                bomviewonpremise:
                                  "js/plugins/BOMViewOnPremise.js?1761730629786",
                                boarditemsvisibility:
                                  "js/plugins/BoardItemsVisibility.js?1761730629786",
                                ccvcommentpanel:
                                  "js/plugins/CCVCommentPanel.js?1761730629786",
                                cadexexport:
                                  "js/plugins/CadExExport.js?1761730629786",
                                cadexview:
                                  "js/plugins/CadexView.js?1761730629786",
                                comparechangedetails:
                                  "js/plugins/CompareChangeDetails.js?1761730629786",
                                comparechanges:
                                  "js/plugins/CompareChanges.js?1761730629786",
                                comparedocument:
                                  "js/plugins/CompareDocument.js?1761730629786",
                                comparelayers:
                                  "js/plugins/CompareLayers.js?1761730629786",
                                comparepanel:
                                  "js/plugins/ComparePanel.js?1761730629786",
                                componentview:
                                  "js/plugins/ComponentView.js?1761730629786",
                                designreview:
                                  "js/plugins/DesignReview.js?1761730629786",
                                detailspanel:
                                  "js/plugins/DetailsPanel.js?1761730629786",
                                download: "js/plugins/Download.js?1761730629786",
                                downloadredirect:
                                  "js/plugins/DownloadRedirect.js?1761730629786",
                                esdview: "js/plugins/ESDView.js?1761730629786",
                                export: "js/plugins/Export.js?1761730629786",
                                exportonpremise:
                                  "js/plugins/ExportOnPremise.js?1761730629786",
                                fbom: "js/plugins/FBOM.js?1761730629786",
                                fabricationcompareview:
                                  "js/plugins/FabricationCompareView.js?1761730629786",
                                fabricationmeasurement:
                                  "js/plugins/FabricationMeasurement.js?1761730629786",
                                fabricationpcbdwfview:
                                  "js/plugins/FabricationPCBDWFView.js?1761730629786",
                                fabricationview:
                                  "js/plugins/FabricationView/bundle.js?1761730629786",
                                fullscreen:
                                  "js/plugins/FullScreen/bundle.js?1761730629786",
                                gerbercomparemeasurement:
                                  "js/plugins/GerberCompareMeasurement.js?1761730629786",
                                gerbercompareview:
                                  "js/plugins/GerberCompareView.js?1761730629786",
                                harnessbomview:
                                  "js/plugins/HarnessBOMView.js?1761730629786",
                                harnessdetailspanel:
                                  "js/plugins/HarnessDetailsPanel.js?1761730629786",
                                helppanel:
                                  "js/plugins/HelpPanel.js?1761730629786",
                                kernelcommentpanel:
                                  "js/plugins/KernelCommentPanel.js?1761730629786",
                                ldrview: "js/plugins/LDRView.js?1761730629786",
                                lsmview: "js/plugins/LSMView.js?1761730629786",
                                lsmback: "js/plugins/LsmBack.js?1761730629786",
                                lsmproperties:
                                  "js/plugins/LsmProperties.js?1761730629786",
                                mbaview: "js/plugins/MBAView.js?1761730629786",
                                mbsview: "js/plugins/MBSView.js?1761730629786",
                                measurement:
                                  "js/plugins/Measurement.js?1761730629786",
                                multiboarddetailspanel:
                                  "js/plugins/MultiboardDetailsPanel.js?1761730629786",
                                multiboardfbom:
                                  "js/plugins/MultiboardFBOM.js?1761730629786",
                                onpremcommentpanel:
                                  "js/plugins/OnPremCommentPanel.js?1761730629786",
                                pcbcomparedocument:
                                  "js/plugins/PCBCompareDocument.js?1761730629786",
                                pcbcomparelayers:
                                  "js/plugins/PCBCompareLayers.js?1761730629786",
                                pcbcompareview:
                                  "js/plugins/PCBCompareView.js?1761730629786",
                                pcbdwfview:
                                  "js/plugins/PCBDWFView.js?1761730629786",
                                pcbview: "js/plugins/PCBView.js?1761730629786",
                                pcbview3d:
                                  "js/plugins/PCBView3D.js?1761730629786",
                                pdfview: "js/plugins/PDFView.js?1761730629786",
                                pdfviewdetached:
                                  "js/plugins/PDFViewDetached.js?1761730629786",
                                previewpanel:
                                  "js/plugins/PreviewPanel.js?1761730629786",
                                requirements:
                                  "js/plugins/Requirements.js?1761730629786",
                                schview: "js/plugins/SCHView.js?1761730629786",
                                schcompareview:
                                  "js/plugins/SchCompareView.js?1761730629786",
                                search: "js/plugins/Search.js?1761730629786",
                                searchbutton:
                                  "js/plugins/SearchButton.js?1761730629786",
                                select: "js/plugins/Select.js?1761730629786",
                                selectschcompare:
                                  "js/plugins/SelectSchCompare.js?1761730629786",
                                simulation:
                                  "js/plugins/Simulation.js?1761730629786",
                                simulationinfopanel:
                                  "js/plugins/SimulationInfoPanel.js?1761730629786",
                                simulationlayers:
                                  "js/plugins/SimulationLayers.js?1761730629786",
                                simulationprobing:
                                  "js/plugins/SimulationProbing.js?1761730629786",
                                snapping: "js/plugins/Snapping.js?1761730629786",
                                standalonecommentpanel:
                                  "js/plugins/StandaloneCommentPanel.js?1761730629786",
                                supportlibrary:
                                  "js/plugins/SupportLibrary.js?1761730629786",
                                validationdetails:
                                  "js/plugins/ValidationDetails.js?1761730629786",
                                variants: "js/plugins/Variants.js?1761730629786",
                                wirview: "js/plugins/WIRView.js?1761730629786",
                                "comment.engine":
                                  "js/plugins/comment.engine.js?1761730629786",
                                "comparison.gerber":
                                  "js/plugins/comparison.gerber.js?1761730629786",
                                "comparison.pcb":
                                  "js/plugins/comparison.pcb.js?1761730629786",
                                fabrication:
                                  "js/plugins/fabrication.js?1761730629786",
                                fabricationmetadata:
                                  "js/plugins/fabricationMetadata.js?1761730629786",
                                generalsvg:
                                  "js/plugins/generalSVG.js?1761730629786",
                                gerber: "js/plugins/gerber/bundle.js?1761730629786",
                                graphite: "js/plugins/graphite.js?1761730629786",
                                "graphite.engine":
                                  "js/plugins/graphite.engine/bundle.js?1761730629786",
                                "harness.common":
                                  "js/plugins/harness.common.js?1761730629786",
                                ldr: "js/plugins/ldr.js?1761730629786",
                                lsm: "js/plugins/lsm.js?1761730629786",
                                mbs: "js/plugins/mbs.js?1761730629786",
                                "measurement.engine":
                                  "js/plugins/measurement.engine.js?1761730629786",
                                pcb: "js/plugins/pcb.js?1761730629786",
                                pcbdwf: "js/plugins/pcbdwf.js?1761730629786",
                                pdf: "js/plugins/pdf.js?1761730629786",
                                project: "js/plugins/project.js?1761730629786",
                                sch: "js/plugins/sch.js?1761730629786",
                                schcompare:
                                  "js/plugins/schCompare.js?1761730629786",
                                "search.engine":
                                  "js/plugins/search.engine.js?1761730629786",
                                wir: "js/plugins/wir.js?1761730629786",
                              },
                              attributes: n,
                            },
                          })
                            .use(Mn.Z)
                            .use(In.X)
                            .use(Rn.K)
                            .use(r)).mount("#viewer-app"),
                          e.abrupt("return", a)
                        );
                      case 15:
                      case "end":
                        return e.stop();
                    }
                  var s;
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        const ir = function (e) {
          var t = e.url;
          return (0, r.qv)(e, function (e) {
            return fetch(t, { body: e.body, method: "POST" })
              .then(function (e) {
                429 === e.status &&
                  window.__APP__.analytics.dispatchAnalyticsEvent(
                    "AppMonitoring.NotSent.RateLimit",
                  );
              })
              .catch(function () {
                var n,
                  r = window.__CORE__,
                  i =
                    null !== (n = r.response.designId) && void 0 !== n
                      ? n
                      : (0, W.kD)("data-project-src", ""),
                  o =
                    window.__VIEWER_DOMAIN__ +
                    "/api/monitoringtunnel?source_id=".concat(i),
                  a = Object.assign({}, r.apiHeaders, {
                    "Content-Type": "text/plain;charset=UTF-8",
                    Accept: "*/*",
                    Dsn: t,
                  });
                fetch(o, { body: e.body, method: "POST", headers: a }).catch(
                  function () {
                    return window.__APP__.analytics.dispatchAnalyticsEvent(
                      "AppMonitoring.NotSent.TunnelError",
                    );
                  },
                );
              });
          });
        };
        var or = n(73791);
        function ar(e) {
          return (
            (ar =
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
            ar(e)
          );
        }
        function sr() {
          sr = function () {
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
            a = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
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
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof y ? t : y,
              a = Object.create(o.prototype),
              s = new L(r || []);
            return (i(a, "_invoke", { value: E(e, n, s) }), a);
          }
          function d(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = u;
          var p = "suspendedStart",
            f = "suspendedYield",
            m = "executing",
            h = "completed",
            v = {};
          function y() { }
          function g() { }
          function b() { }
          var w = {};
          l(w, a, function () {
            return this;
          });
          var k = Object.getPrototypeOf,
            C = k && k(k(B([])));
          C && C !== n && r.call(C, a) && (w = C);
          var _ = (b.prototype = y.prototype = Object.create(w));
          function P(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function S(e, t) {
            function n(i, o, a, s) {
              var c = d(e[i], e, o);
              if ("throw" !== c.type) {
                var l = c.arg,
                  u = l.value;
                return u && "object" == ar(u) && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    },
                  )
                  : t.resolve(u).then(
                    function (e) {
                      ((l.value = e), a(l));
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    },
                  );
              }
              s(c.arg);
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
          function E(t, n, r) {
            var i = p;
            return function (o, a) {
              if (i === m) throw Error("Generator is already running");
              if (i === h) {
                if ("throw" === o) throw a;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = a; ;) {
                var s = r.delegate;
                if (s) {
                  var c = j(s, r);
                  if (c) {
                    if (c === v) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (i === p) throw ((i = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = m;
                var l = d(t, n, r);
                if ("normal" === l.type) {
                  if (((i = r.done ? h : f), l.arg === v)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((i = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function j(t, n) {
            var r = n.method,
              i = t.iterator[r];
            if (i === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                    (n.arg = e),
                    j(t, n),
                    "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method",
                    )))),
                v
              );
            var o = d(i, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"),
                (n.arg = o.arg),
                (n.delegate = null),
                v
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[t.resultName] = a.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  v)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function O(e) {
            var t = { tryLoc: e[0] };
            (1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t));
          }
          function D(e) {
            var t = e.completion || {};
            ((t.type = "normal"), delete t.arg, (e.completion = t));
          }
          function L(e) {
            ((this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(O, this),
              this.reset(!0));
          }
          function B(t) {
            if (t || "" === t) {
              var n = t[a];
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
            throw new TypeError(ar(t) + " is not iterable");
          }
          return (
            (g.prototype = b),
            i(_, "constructor", { value: b, configurable: !0 }),
            i(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = l(b, c, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), l(e, c, "GeneratorFunction")),
                (e.prototype = Object.create(_)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            P(S.prototype),
            l(S.prototype, s, function () {
              return this;
            }),
            (t.AsyncIterator = S),
            (t.async = function (e, n, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new S(u(e, n, r, i), o);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
            }),
            P(_),
            l(_, c, "Generator"),
            l(_, a, function () {
              return this;
            }),
            l(_, "toString", function () {
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
            (t.values = B),
            (L.prototype = {
              constructor: L,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = e),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = e),
                    this.tryEntries.forEach(D),
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
                    ? ((this.method = "next"), (this.next = o.finallyLoc), v)
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
                  v
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return (this.complete(n.completion, n.afterLoc), D(n), v);
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var i = r.arg;
                      D(n);
                    }
                    return i;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = { iterator: B(t), resultName: n, nextLoc: r }),
                  "next" === this.method && (this.arg = e),
                  v
                );
              },
            }),
            t
          );
        }
        function cr(e, t, n, r, i, o, a) {
          try {
            var s = e[o](a),
              c = s.value;
          } catch (e) {
            return void n(e);
          }
          s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        function lr(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, i) {
              var o = e.apply(t, n);
              function a(e) {
                cr(o, r, i, a, s, "next", e);
              }
              function s(e) {
                cr(o, r, i, a, s, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function ur() {
          return (ur = lr(
            sr().mark(function e() {
              var t, n, r, i, o, a, s, c, l, u, d, p;
              return sr().wrap(
                function (e) {
                  for (; ;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(t = window.location.search)) {
                          e.next = 30;
                          break;
                        }
                        if (
                          ((n = new URLSearchParams(t)),
                            (r = n.get("feature")),
                            (i = "embed" === r),
                            "oembed" !== r && !i)
                        ) {
                          e.next = 30;
                          break;
                        }
                        return (
                          (a = document.referrer),
                          (s = {}),
                          (c =
                            null !== (o = n.get("source")) && void 0 !== o
                              ? o
                              : ""),
                          (l = n.get("activeView")),
                          (s.domainOrigin = a),
                          (s["data-project-src"] = c),
                          (s["data-comment-panel-hide"] = "true"),
                          l && (s["data-active-view"] = l),
                          (e.prev = 15),
                          (e.next = 18),
                          w().get("embed/settings")
                        );
                      case 18:
                        ((u = e.sent),
                          (d = u.data),
                          (s["data-register-url"] = d.a365SignUpUrl),
                          (e.next = 26));
                        break;
                      case 23:
                        ((e.prev = 23),
                          (e.t0 = e.catch(15)),
                          nr.LogError("Get embedded viewer sign up url.", e.t0));
                      case 26:
                        return (
                          (p = {
                            id: window.__APP__.utils.generateGUID(),
                            src: s,
                          }),
                          (e.next = 29),
                          dr(p)
                        );
                      case 29:
                        return e.abrupt("return", !0);
                      case 30:
                        return e.abrupt("return", !1);
                      case 31:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[15, 23]],
              );
            }),
          )).apply(this, arguments);
        }
        function dr(e) {
          return pr.apply(this, arguments);
        }
        function pr() {
          return (pr = lr(
            sr().mark(function e(t) {
              var n, i;
              return sr().wrap(function (e) {
                for (; ;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (nr.LogInfo("Run application"),
                          (window.currentHttpScheme = t.scheme || "https"),
                          !window.__iframeId)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      return (
                        (window.__iframeId = t.id),
                        (e.next = 7),
                        rr({
                          designUrl: t.src["data-project-src"],
                          attributes: t.src,
                        })
                      );
                    case 7:
                      ((i = e.sent),
                        window.__APP__.appPerformanceReporter.setInitialDuration(
                          null !== (n = t.duration) && void 0 !== n ? n : 0,
                        ),
                        (window.__APP__.appMonitoring = new r.KX({
                          app: i,
                          url: t.src["data-monitoring-url"] || "",
                          env: t.src["data-monitoring-env"] || "",
                          isEnabled:
                            "true" === t.src["data-monitoring-enabled"] &&
                            "true" === t.src["data-is-ccv"],
                          customTransport: ir,
                          tags: {
                            tenantId: t.src["data-workspace-id"] || "",
                            entityId: t.src["data-project-src"],
                            appName: "Standalone Viewer",
                          },
                          userId: t.src["data-user-id"] || "",
                          beforeBreadcrumb: function (e) {
                            var t;
                            if ("console" !== e.category) return e;
                            if (
                              (e.message && (e.message = (0, or.T)(e.message)),
                                null !== (t = e.data) &&
                                void 0 !== t &&
                                t.arguments &&
                                e.data.arguments.length)
                            ) {
                              var n = e.data.arguments.filter(function (e) {
                                return "object" === ar(e);
                              });
                              n.length
                                ? (e.data = { arguments: n })
                                : (e.data = void 0);
                            }
                            return e;
                          },
                        })));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        (function () {
          return ur.apply(this, arguments);
        })()
          .then(function (e) {
            console.log("App: Registering app:load listener. e =", e);
            e ||
              window.__APP__.parentEvents.on("app:load", function (p) {
                console.log("App: Event received", p);
                dr(p);
              });
          })
          .catch(function (e) {
            return nr.LogError("Run application error.", e);
          });
      },
      10311: (e) => {
        e.exports = Vue;
      },
    },
    (e) => {
      var t = (t) => e((e.s = t));
      (e.O(0, [66951, 21759], () => (t(72768), t(69668), t(54105))), e.O());
    },
  ]);
