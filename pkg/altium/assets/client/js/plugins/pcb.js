/*! For license information please see pcb.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [11972],
  {
    142: (e, t, n) => {
      var r = n(49235),
        i = n(5226),
        o = n(41497),
        a = n(12743);
      function c(e) {
        return (
          (c =
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
          c(e)
        );
      }
      function u() {
        u = function () {
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
          l = o.toStringTag || "@@toStringTag";
        function f(e, t, n) {
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
          f({}, "");
        } catch (e) {
          f = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function d(e, t, n, r) {
          var o = t && t.prototype instanceof b ? t : b,
            a = Object.create(o.prototype),
            c = new j(r || []);
          return (i(a, "_invoke", { value: I(e, n, c) }), a);
        }
        function h(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = d;
        var y = "suspendedStart",
          p = "suspendedYield",
          v = "executing",
          m = "completed",
          g = {};
        function b() {}
        function w() {}
        function S() {}
        var L = {};
        f(L, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          P = k && k(k(T([])));
        P && P !== n && r.call(P, a) && (L = P);
        var E = (S.prototype = b.prototype = Object.create(L));
        function O(e) {
          ["next", "throw", "return"].forEach(function (t) {
            f(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function D(e, t) {
          function n(i, o, a, u) {
            var s = h(e[i], e, o);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == c(f) && r.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      n("next", e, a, u);
                    },
                    function (e) {
                      n("throw", e, a, u);
                    },
                  )
                : t.resolve(f).then(
                    function (e) {
                      ((l.value = e), a(l));
                    },
                    function (e) {
                      return n("throw", e, a, u);
                    },
                  );
            }
            u(s.arg);
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
        function I(t, n, r) {
          var i = y;
          return function (o, a) {
            if (i === v) throw Error("Generator is already running");
            if (i === m) {
              if ("throw" === o) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = x(c, r);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === y) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = v;
              var s = h(t, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? m : p), s.arg === g)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = m), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function x(t, n) {
          var r = n.method,
            i = t.iterator[r];
          if (i === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                x(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              g
            );
          var o = h(i, t.iterator, n.arg);
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
        function N(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function M(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function j(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(N, this),
            this.reset(!0));
        }
        function T(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < t.length; )
                    if (r.call(t, i))
                      return ((n.value = t[i]), (n.done = !1), n);
                  return ((n.value = e), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError(c(t) + " is not iterable");
        }
        return (
          (w.prototype = S),
          i(E, "constructor", { value: S, configurable: !0 }),
          i(S, "constructor", { value: w, configurable: !0 }),
          (w.displayName = f(S, l, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(e, S)
                : ((e.__proto__ = S), f(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(E)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          O(D.prototype),
          f(D.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = D),
          (t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new D(d(e, n, r, i), o);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          O(E),
          f(E, l, "Generator"),
          f(E, a, function () {
            return this;
          }),
          f(E, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return ((e.value = r), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (t.values = T),
          (j.prototype = {
            constructor: j,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(M),
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
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = e)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
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
                  return (this.complete(n.completion, n.afterLoc), M(n), g);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    M(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: T(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function s(e, t) {
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
          if ("object" != c(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != c(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == c(t) ? t : t + "";
      }
      function f(e, t, n) {
        return (
          (t = h(t)),
          (function (e, t) {
            if (t && ("object" == c(t) || "function" == typeof t)) return t;
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
              ? Reflect.construct(t, n || [], h(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function d() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (d = function () {
          return !!e;
        })();
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function y(e, t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          y(e, t)
        );
      }
      var p = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, c);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        v = window.__APP__.library.i18n.t,
        m = {
          where: function (e) {
            return ["Load" === e.type];
          },
          to: "LOAD",
        },
        g = {
          where: function (e) {
            return ["Render" === e.type];
          },
          to: "RENDER",
        },
        b = {
          where: function (e) {
            return ["Show" === e.type];
          },
          to: "SHOW",
        },
        w = {
          where: function (e) {
            return ["Error" === e.type];
          },
          to: "CRASHED",
          error: !0,
        },
        S = {
          IDLE: [
            {
              where: function (e) {
                return ["Setup" === e.type];
              },
              to: "SETUP",
            },
          ],
          SETUP: [
            {
              where: function (e) {
                return ["SetupComplete" === e.type];
              },
              to: "SETUP_COMPLETED",
            },
            w,
          ],
          SETUP_COMPLETED: [
            {
              where: function (e) {
                return ["Init" === e.type];
              },
              to: "INIT",
            },
            w,
          ],
          INIT: [
            {
              where: function (e) {
                return ["InitComplete" === e.type];
              },
              to: "INIT_COMPLETED",
            },
            w,
          ],
          INIT_COMPLETED: [m],
          LOAD: [
            {
              where: function (e) {
                return ["LoadComplete" === e.type];
              },
              to: "LOAD_COMPLETED",
            },
          ],
          LOAD_COMPLETED: [g, m],
          RENDER: [
            {
              where: function (e) {
                return ["RenderComplete" === e.type];
              },
              to: "RENDER_COMPLETED",
            },
          ],
          RENDER_COMPLETED: [b, m, g],
          SHOW: [b, m, g],
        },
        L = (function (e) {
          function t(e, n) {
            var r;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((r = f(this, t, ["IDLE", S])).callback = e),
              (r.logger = n),
              (r.errorState = null),
              r.on("SETUP", r.onSetup.bind(r)),
              r.on("INIT", r.onInit.bind(r)),
              r.on("CRASHED", function (e) {
                var t;
                return (r.errorState =
                  null !== (t = e.innerError) && void 0 !== t ? t : e);
              }),
              r
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
                t && y(e, t));
            })(t, e),
            (n = t),
            (r = [
              {
                key: "waitForComplete",
                value: function () {
                  var e = this;
                  if (
                    "CRASHED" === this.state &&
                    ["SETUP", "INIT"].includes(this.prevstate)
                  )
                    throw new Error(this.errorState);
                  return [
                    "SETUP_COMPLETED",
                    "INIT_COMPLETED",
                    "LOAD_COMPLETED",
                    "RENDER_COMPLETED",
                    "SHOW",
                  ].includes(this.state)
                    ? Promise.resolve()
                    : new Promise(function (t) {
                        var n = function n() {
                          [
                            "SETUP_COMPLETED",
                            "INIT_COMPLETED",
                            "LOAD_COMPLETED",
                            "RENDER_COMPLETED",
                          ].includes(e.state) &&
                            (e.off("#Transition", n), e.off("#Error", n), t());
                        };
                        (e.on("#Transition", n), e.on("#Error", n));
                      });
                },
              },
              {
                key: "goToSetup",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n, r) {
                    if (
                      t.dispatch({ type: "Setup", core: e }) ||
                      "SETUP" === t.state
                    ) {
                      var i = function e() {
                        (t.off("#Transition", e),
                          t.off("#Error", e),
                          "SETUP_COMPLETED" === t.state && n(),
                          "CRASHED" === t.state &&
                            (t.logger.LogError("Setup error.", t.errorState),
                            r(t.errorState)));
                      };
                      (t.on("#Transition", i), t.on("#Error", i));
                    } else "CRASHED" === t.state ? r(t.errorState) : n();
                  });
                },
              },
              {
                key: "goToInit",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    if (e.dispatch({ type: "Init" }) || "INIT" === e.state) {
                      e.emitEngineEvent(
                        "PcbEngine:progress",
                        null,
                        v("viewer.engines.pcb.initializing"),
                      );
                      var r = function r() {
                        (e.off("#Transition", r),
                          e.off("#Error", r),
                          "INIT_COMPLETED" === e.state && t(),
                          "CRASHED" === e.state &&
                            (e.logger.LogError(
                              "Initialization error.",
                              e.errorState,
                            ),
                            n(e.errorState)));
                      };
                      (e.on("#Transition", r), e.on("#Error", r));
                    } else "CRASHED" === e.state ? n(e.errorState) : t();
                  });
                },
              },
              {
                key: "goToLoad",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n, r) {
                    return p(
                      t,
                      void 0,
                      void 0,
                      u().mark(function t() {
                        var i = this;
                        return u().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!this.dispatch({ type: "Load" })) {
                                    t.next = 7;
                                    break;
                                  }
                                  return (
                                    this.emitEngineEvent(
                                      "PcbEngine:progress",
                                      e,
                                      v("viewer.engines.pcb.downloading"),
                                    ),
                                    (t.next = 4),
                                    this.callback.doLoad(e)
                                  );
                                case 4:
                                  (this.nextTick(function () {
                                    (i.dispatch({ type: "LoadComplete" }), n());
                                  }),
                                    (t.next = 8));
                                  break;
                                case 7:
                                  "CRASHED" === this.state
                                    ? r(this.errorState)
                                    : n();
                                case 8:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                  });
                },
              },
              {
                key: "goToRender",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n, r) {
                    return p(
                      t,
                      void 0,
                      void 0,
                      u().mark(function t() {
                        var i = this;
                        return u().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!this.dispatch({ type: "Render" })) {
                                    t.next = 7;
                                    break;
                                  }
                                  return (
                                    this.emitEngineEvent(
                                      "PcbEngine:progress",
                                      e,
                                      v("viewer.engines.pcb.rendering"),
                                    ),
                                    (t.next = 4),
                                    this.callback.doRender(e)
                                  );
                                case 4:
                                  (this.nextTick(function () {
                                    (i.dispatch({ type: "RenderComplete" }),
                                      n());
                                  }),
                                    (t.next = 8));
                                  break;
                                case 7:
                                  "CRASHED" === this.state
                                    ? r(this.errorState)
                                    : n();
                                case 8:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                  });
                },
              },
              {
                key: "goToShow",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n, r) {
                    t.dispatch({ type: "Show" })
                      ? (t.callback.doShow(e), n())
                      : "CRASHED" === t.state
                        ? r(t.errorState)
                        : n();
                  });
                },
              },
              {
                key: "emitEngineEvent",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  try {
                    window.__CORE__.bus.emit.apply(window.__CORE__.bus, t);
                  } catch (e) {
                    this.logger.LogError(
                      "Emit state event [".concat(t[0], "] error"),
                      e,
                    );
                  }
                },
              },
              {
                key: "nextTick",
                value: function (e) {
                  setTimeout(function () {
                    e();
                  });
                },
              },
              {
                key: "onSetup",
                value: function (e) {
                  return p(
                    this,
                    void 0,
                    void 0,
                    u().mark(function t() {
                      var n = this;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  this.callback.doSetup(e.core)
                                );
                              case 3:
                                (this.nextTick(function () {
                                  return n.dispatch({ type: "SetupComplete" });
                                }),
                                  (t.next = 9));
                                break;
                              case 6:
                                ((t.prev = 6),
                                  (t.t0 = t.catch(0)),
                                  this.nextTick(function () {
                                    return n.dispatch(
                                      new a.B(t.t0.message, t.t0),
                                    );
                                  }));
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 6]],
                      );
                    }),
                  );
                },
              },
              {
                key: "onInit",
                value: function () {
                  return p(
                    this,
                    void 0,
                    void 0,
                    u().mark(function e() {
                      var t = this;
                      return u().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.callback.doInit()
                                );
                              case 3:
                                (this.nextTick(function () {
                                  return t.dispatch({ type: "InitComplete" });
                                }),
                                  (e.next = 9));
                                break;
                              case 6:
                                ((e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  this.nextTick(function () {
                                    return t.dispatch(
                                      new a.B(e.t0.message, e.t0),
                                    );
                                  }));
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 6]],
                      );
                    }),
                  );
                },
              },
            ]),
            r && s(n.prototype, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, r;
        })(o.Z),
        k = n(52118),
        P = n(18446);
      function E(e) {
        return (
          (E =
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
          E(e)
        );
      }
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function D(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, I(r.key), r));
        }
      }
      function I(e) {
        var t = (function (e, t) {
          if ("object" != E(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != E(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == E(t) ? t : t + "";
      }
      var x = (function () {
          return (
            (e = function e(t, n, i) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.scene = t),
                (this.materialId = i),
                (this.renderMode = n),
                (this.logger = r.Q.createLogger("PadAppearance_" + n)));
            }),
            (t = [
              {
                key: "set",
                value: function (e, t) {
                  try {
                    var n = this.scene.getBoundingBoxForItem(e),
                      r = this.getSizeAndPosition(n),
                      i = P.Z.createRectangle(
                        r.x,
                        r.y,
                        r.radius,
                        r.radius,
                        this.materialId,
                        [1, 0],
                        r.radius / 2,
                        r.z,
                      );
                    return this.scene.addItem(t, [i], [], [], [], [], []);
                  } catch (e) {
                    return (this.logger.LogError("Set mark.", e), null);
                  }
                },
              },
              {
                key: "getSizeAndPosition",
                value: function (e) {
                  var t,
                    n,
                    r =
                      ((n = 6),
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })((t = e)) ||
                        (function (e, t) {
                          var n =
                            null == e
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  e[Symbol.iterator]) ||
                                e["@@iterator"];
                          if (null != n) {
                            var r,
                              i,
                              o,
                              a,
                              c = [],
                              u = !0,
                              s = !1;
                            try {
                              if (((o = (n = n.call(e)).next), 0 === t)) {
                                if (Object(n) !== n) return;
                                u = !1;
                              } else
                                for (
                                  ;
                                  !(u = (r = o.call(n)).done) &&
                                  (c.push(r.value), c.length !== t);
                                  u = !0
                                );
                            } catch (e) {
                              ((s = !0), (i = e));
                            } finally {
                              try {
                                if (
                                  !u &&
                                  null != n.return &&
                                  ((a = n.return()), Object(a) !== a)
                                )
                                  return;
                              } finally {
                                if (s) throw i;
                              }
                            }
                            return c;
                          }
                        })(t, n) ||
                        (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return O(e, t);
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
                                  ? O(e, t)
                                  : void 0
                            );
                          }
                        })(t, n) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        })()),
                    i = r[0],
                    o = r[1],
                    a = r[2],
                    c = r[3],
                    u = r[4];
                  return {
                    x: i + (c - i) / 2,
                    y: o + (u - o) / 2,
                    z: [a - 0.005, r[5] + 0.005],
                    radius: 0.4 * Math.min(c - i, u - o),
                  };
                },
              },
            ]),
            t && D(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        N = n(31444),
        M = n(4348),
        j = n(3664);
      function T(e) {
        return (
          (T =
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
          T(e)
        );
      }
      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function _() {
        _ = function () {
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
          c = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(e, t, n) {
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
          s({}, "");
        } catch (e) {
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var o = t && t.prototype instanceof m ? t : m,
            a = Object.create(o.prototype),
            c = new N(r || []);
          return (i(a, "_invoke", { value: O(e, n, c) }), a);
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var d = "suspendedStart",
          h = "suspendedYield",
          y = "executing",
          p = "completed",
          v = {};
        function m() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          L = S && S(S(M([])));
        L && L !== n && r.call(L, a) && (w = L);
        var k = (b.prototype = m.prototype = Object.create(w));
        function P(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(i, o, a, c) {
            var u = f(e[i], e, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == T(l) && r.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      n("next", e, a, c);
                    },
                    function (e) {
                      n("throw", e, a, c);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return n("throw", e, a, c);
                    },
                  );
            }
            c(u.arg);
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
          var i = d;
          return function (o, a) {
            if (i === y) throw Error("Generator is already running");
            if (i === p) {
              if ("throw" === o) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = D(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === d) throw ((i = p), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = y;
              var s = f(t, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? p : h), s.arg === v)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = p), (r.method = "throw"), (r.arg = s.arg));
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
              v
            );
          var o = f(i, t.iterator, n.arg);
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
        function I(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function x(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function N(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(I, this),
            this.reset(!0));
        }
        function M(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < t.length; )
                    if (r.call(t, i))
                      return ((n.value = t[i]), (n.done = !1), n);
                  return ((n.value = e), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError(T(t) + " is not iterable");
        }
        return (
          (g.prototype = b),
          i(k, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = s(b, u, "GeneratorFunction")),
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
                : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(k)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          P(E.prototype),
          s(E.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new E(l(e, n, r, i), o);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          P(k),
          s(k, u, "Generator"),
          s(k, a, function () {
            return this;
          }),
          s(k, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return ((e.value = r), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (t.values = M),
          (N.prototype = {
            constructor: N,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(x),
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
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = e)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
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
                  return (this.complete(n.completion, n.afterLoc), x(n), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    x(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: M(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function R(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, V(r.key), r));
        }
      }
      function V(e) {
        var t = (function (e, t) {
          if ("object" != T(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != T(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == T(t) ? t : t + "";
      }
      var A = (function () {
          return (
            (e = function e(t, n) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.pinPadMap = new Map()),
                (this.padAppearance = t),
                (this.scene = n),
                (this.logger = r.Q.createLogger("ComponentPadAppearance")));
            }),
            (t = [
              {
                key: "setAppearancePadComponents",
                value: function (e, t) {
                  var n = this;
                  if (this.scene) {
                    var r = new Map(),
                      i = new Map(),
                      o = new Map();
                    try {
                      var a = e.getLayers(),
                        c = e
                          .getLayers()
                          .filter(function (e) {
                            return (
                              "Pad Holes" === e.searchName ||
                              "Via Holes" === e.searchName
                            );
                          })
                          .map(function (e) {
                            return e.id;
                          });
                      t.forEach(function (e) {
                        var t,
                          n =
                            null === (t = j.q.instance.getChildPads(e)) ||
                            void 0 === t
                              ? void 0
                              : t.find(function (e) {
                                  return "1" === e.name;
                                });
                        n &&
                          n.pcbId &&
                          (r.set(n.pcbId, e),
                          i.set(n.pcbId, n),
                          o.has(e.layerId) ||
                            o.set(
                              e.layerId,
                              a.find(function (t) {
                                return t.metaId === e.layerId;
                              }),
                            ));
                      });
                      var u = this.scene.getNodeItemsByIds(
                        Array.from(r.keys()),
                      );
                      if (!u) return;
                      u.forEach(function (e) {
                        var t;
                        if (e) {
                          var a = e.GetId(),
                            u = r.get(a),
                            s = i.get(a);
                          if (u && s)
                            try {
                              var l = o.get(u.layerId);
                              if (!l) return;
                              var f =
                                  null !== (t = n.isSpecialHoleLayer(e, c)) &&
                                  void 0 !== t
                                    ? t
                                    : l.id,
                                d = n.padAppearance.set(e, f);
                              if (!d) return;
                              var h = d.GetId();
                              (s.customNodes || (s.customNodes = []),
                                s.customNodes.push(h),
                                n.pinPadMap.set(h, s));
                            } catch (e) {
                              n.logger.LogError(
                                "Failed set pad appearance for component ".concat(
                                  u.designator,
                                  ".",
                                ),
                                e,
                              );
                            }
                        }
                      });
                    } finally {
                      (r.clear(), i.clear(), o.clear());
                    }
                  }
                },
              },
              {
                key: "setVisibleAppearances",
                value: function (e) {
                  return (
                    (t = this),
                    (n = void 0),
                    (r = void 0),
                    (i = _().mark(function t() {
                      var n;
                      return _().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  (n = Array.from(this.pinPadMap.keys())).length
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return");
                              case 3:
                                try {
                                  this.scene.setNodeItemsVisibility(n, e);
                                } catch (t) {
                                  this.logger.LogError(
                                    "Set Visible = ".concat(
                                      e,
                                      " for appearances.",
                                    ),
                                    t,
                                  );
                                }
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    })),
                    new (r || (r = Promise))(function (e, o) {
                      function a(e) {
                        try {
                          u(i.next(e));
                        } catch (e) {
                          o(e);
                        }
                      }
                      function c(e) {
                        try {
                          u(i.throw(e));
                        } catch (e) {
                          o(e);
                        }
                      }
                      function u(t) {
                        var n;
                        t.done
                          ? e(t.value)
                          : ((n = t.value),
                            n instanceof r
                              ? n
                              : new r(function (e) {
                                  e(n);
                                })).then(a, c);
                      }
                      u((i = i.apply(t, n || [])).next());
                    })
                  );
                  var t, n, r, i;
                },
              },
              {
                key: "clearAppearance",
                value: function () {
                  var e = Array.from(this.pinPadMap.keys()),
                    t = this.scene.getNodeItemsByIds(e);
                  if (t) {
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
                                if ("string" == typeof e) return C(e, t);
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
                                      ? C(e, t)
                                      : void 0
                                );
                              }
                            })(e)) ||
                            (t && e && "number" == typeof e.length)
                          ) {
                            n && (e = n);
                            var r = 0,
                              i = function () {};
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
                          c = !1;
                        return {
                          s: function () {
                            n = n.call(e);
                          },
                          n: function () {
                            var e = n.next();
                            return ((a = e.done), e);
                          },
                          e: function (e) {
                            ((c = !0), (o = e));
                          },
                          f: function () {
                            try {
                              a || null == n.return || n.return();
                            } finally {
                              if (c) throw o;
                            }
                          },
                        };
                      })(t);
                    try {
                      for (r.s(); !(n = r.n()).done; ) {
                        var i = n.value;
                        try {
                          var o = i.GetId(),
                            a = this.pinPadMap.get(o);
                          if (a && a.customNodes) {
                            var c = a.customNodes.indexOf(o);
                            c >= 0 && a.customNodes.splice(c, 1);
                          }
                          this.scene.deleteItem(i);
                        } catch (e) {
                          this.logger.LogError(
                            "Failed to remove nodeItem for Pad appearance",
                            e,
                          );
                        }
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  }
                  this.pinPadMap.clear();
                },
              },
              {
                key: "setVisibleComponents",
                value: function (e, t) {
                  try {
                    var n = j.q.instance;
                    e || (e = j.q.instance.components);
                    var r = e
                      .flatMap(function (e) {
                        return n.getChildPrimitives(e);
                      })
                      .filter(function (e) {
                        return n.getObjectId(e) !== N.Zw.Pad;
                      })
                      .filter(function (e) {
                        return e && e.pcbId;
                      })
                      .map(function (e) {
                        return e.pcbId;
                      });
                    try {
                      this.scene.setNodeItemsVisibility(r, t);
                    } catch (e) {
                      this.logger.LogError("Set nodes visibility", e);
                    }
                  } catch (e) {
                    this.logger.LogError(
                      "Failed to remove nodeItem for Pad appearance.",
                      e,
                    );
                  }
                },
              },
              {
                key: "isSpecialHoleLayer",
                value: function (e, t) {
                  if (e && this.padAppearance.renderMode === M.Z.Render2D)
                    for (var n = 0; n < e.GetLayersCount(); n++) {
                      var r = e.GetLayerGeometry(n).GetLayerIndex();
                      if (t.indexOf(r) >= 0) return r;
                    }
                  return null;
                },
              },
            ]),
            t && R(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        B = n(70315),
        G = n(32699);
      function F(e) {
        return (
          (F =
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
          F(e)
        );
      }
      function Z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, U(r.key), r));
        }
      }
      function U(e) {
        var t = (function (e, t) {
          if ("object" != F(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != F(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == F(t) ? t : t + "";
      }
      var H = [0, 0, 0, 230],
        K = [0, 0, 0, 230],
        Q = (function () {
          return (
            (e = function e(t, n, i) {
              var o = this;
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.logger = r.Q.createLogger("PadAppearanceManager")),
                i == M.Z.Render3D
                  ? ((this.componentPadAppearance2d = this.createAppearance(
                      t,
                      H,
                      M.Z.Render2D,
                    )),
                    (this.componentPadAppearance3d = this.createAppearance(
                      n,
                      K,
                      M.Z.Render3D,
                    )))
                  : ((this.componentPadAppearance3d = this.createAppearance(
                      n,
                      K,
                      M.Z.Render3D,
                    )),
                    (this.componentPadAppearance2d = this.createAppearance(
                      t,
                      H,
                      M.Z.Render2D,
                    ))),
                r.Q.bus.on("PcbEngine:changedRenderMode", function (e) {
                  return o.setRenderMode(e);
                }));
            }),
            (t = [
              {
                key: "setPadAppearance",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                  n || (n = j.q.instance.components);
                  try {
                    (this.componentPadAppearance2d.setAppearancePadComponents(
                      e,
                      n,
                    ),
                      this.componentPadAppearance3d.setAppearancePadComponents(
                        e,
                        n,
                      ),
                      this.setRenderMode(t));
                  } catch (e) {
                    this.logger.LogError(
                      "Failed set pad appearance for components",
                      e,
                    );
                  }
                },
              },
              {
                key: "clearPadAppearance",
                value: function () {
                  (this.componentPadAppearance2d.clearAppearance(),
                    this.componentPadAppearance3d.clearAppearance());
                },
              },
              {
                key: "setRenderMode",
                value: function (e) {
                  e == M.Z.Render2D
                    ? (this.componentPadAppearance3d.setVisibleAppearances(!1),
                      this.componentPadAppearance2d.setVisibleAppearances(!0))
                    : (this.componentPadAppearance2d.setVisibleAppearances(!1),
                      this.componentPadAppearance3d.setVisibleAppearances(!0));
                },
              },
              {
                key: "createAppearance",
                value: function (e, t, n) {
                  var r = e.addMaterial(
                      new G.Z(new Uint8Array(t), B.lc.None, !1),
                    ),
                    i = new x(e, n, r);
                  return new A(i, e);
                },
              },
            ]),
            t && Z(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        W = n(92828),
        q = n(77254),
        z = n(73626),
        Y = n(79791);
      function X(e) {
        return (
          (X =
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
          X(e)
        );
      }
      function J(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function $(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, ee(r.key), r));
        }
      }
      function ee(e) {
        var t = (function (e, t) {
          if ("object" != X(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != X(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == X(t) ? t : t + "";
      }
      var te = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.layers = []),
              (this.lastOnceLayer = null),
              (this.currentLayerState = null),
              (this.layerManager = t));
          }),
          (t = [
            {
              key: "setOnceLayer",
              value: function (e) {
                var t;
                if ("string" == typeof e) {
                  if (
                    !(t = this.layers.find(function (t) {
                      return t.name === e;
                    }))
                  )
                    return;
                  this.currentLayerState ||
                    (this.currentLayerState = this.layers.map(function (e) {
                      return Object.assign({}, e);
                    }));
                } else t = e;
                if (t) {
                  this.lastOnceLayer = t;
                  var n = this.lastOnceLayer.name;
                  (this.layers.forEach(function (e) {
                    var t = e.name == n;
                    ((e.isVisible =
                      t ||
                      e.name == Y.N.BoardShape ||
                      e.name == Y.N.BackgroundLayer ||
                      e.name == Y.N.Background),
                      (e.isActive = t));
                  }),
                    this.updateLayersVisibility());
                }
              },
            },
            {
              key: "nextOnceLayer",
              value: function () {
                var e,
                  t = this.getSortedLayers();
                if (this.lastOnceLayer && this.currentLayerState) {
                  var n = this.lastOnceLayer.name,
                    r = t.findIndex(function (e) {
                      return e.name == n;
                    });
                  (r == t.length - 1 && (r = -1),
                    (e = t.find(function (e, t) {
                      return !e.ignored && t > r;
                    })));
                } else
                  ((this.currentLayerState = this.layers.map(function (e) {
                    return Object.assign({}, e);
                  })),
                    (e = t.find(function (e) {
                      return e.isVisible && !e.ignored;
                    })));
                return (e && this.setOnceLayer(e), e);
              },
            },
            {
              key: "prevOnceLayer",
              value: function () {
                var e,
                  t = this.getSortedLayers().reverse();
                if (this.lastOnceLayer && this.currentLayerState) {
                  var n = t.indexOf(this.lastOnceLayer);
                  (n == t.length - 1 && (n = -1),
                    (e = t.find(function (e, t) {
                      return !e.ignored && t > n;
                    })));
                } else
                  ((this.currentLayerState = this.layers.map(function (e) {
                    return Object.assign({}, e);
                  })),
                    (e = t.find(function (e) {
                      return e.isVisible && !e.ignored;
                    })));
                return (e && this.setOnceLayer(e), e);
              },
            },
            {
              key: "resetOnceLayer",
              value: function () {
                ((this.lastOnceLayer = null),
                  this.currentLayerState &&
                    ((this.layers = this.currentLayerState),
                    this.updateLayersVisibility(),
                    (this.currentLayerState = null)));
              },
            },
            {
              key: "updateLayersVisibility",
              value: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                this.layerManager.setLayers(this.layers, e);
              },
            },
            {
              key: "getSortedLayers",
              value: function () {
                var e = [];
                return (
                  this.layerManager.getGroupedLayers().forEach(function (t) {
                    return e.push.apply(
                      e,
                      (function (e) {
                        if (Array.isArray(e)) return J(e);
                      })((n = t)) ||
                        (function (e) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != e[Symbol.iterator]) ||
                            null != e["@@iterator"]
                          )
                            return Array.from(e);
                        })(n) ||
                        (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return J(e, t);
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
                                  ? J(e, t)
                                  : void 0
                            );
                          }
                        })(n) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        })(),
                    );
                    var n;
                  }),
                  e
                );
              },
            },
          ]),
          t && $(e.prototype, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t;
      })();
      function ne(e) {
        return (
          (ne =
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
          ne(e)
        );
      }
      function re(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ie(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ie(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ie(e, t)
                    : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ie(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function oe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, ae(r.key), r));
        }
      }
      function ae(e) {
        var t = (function (e, t) {
          if ("object" != ne(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != ne(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == ne(t) ? t : t + "";
      }
      var ce = "setOnceLayer",
        ue = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.holeConnecterLayerKins = [
                  Y.V.Signal,
                  Y.V.Solder,
                  Y.V.Plane,
                ]),
                (this.scene = t),
                (this.onceLayerManager = new te(this)));
            }),
            (t = [
              {
                key: "flipped",
                get: function () {
                  return this.scene.flipped;
                },
              },
              {
                key: "viewType",
                get: function () {
                  return this.flipped ? "bottom" : "top";
                },
              },
              {
                key: "layers",
                get: function () {
                  return this.onceLayerManager.layers;
                },
                set: function (e) {
                  this.onceLayerManager.layers = e;
                },
              },
              {
                key: "setLayers",
                value: function (e, t) {
                  ((this.scene.renderOptions = this.createRenderOptions(
                    this.scene.layers,
                    t,
                    e,
                  )),
                    (this.layers = e),
                    this.emitLayerEvent("setLayer", e, !1));
                },
              },
              {
                key: "resetLayers",
                value: function () {
                  ((this.layers = this.getLayers(!1)),
                    this.setLayers(this.layers, !1),
                    this.emitLayerEvent("resetLayer", this.layers, !1));
                },
              },
              {
                key: "recoveryLayers",
                value: function (e) {
                  if (e) {
                    var t = this.getLayers(!1);
                    this.setLayers(
                      t.map(function (t) {
                        return Object.assign(Object.assign({}, t), {
                          isActive:
                            t.metaId === (null == e ? void 0 : e.active),
                          isVisible:
                            null == e ? void 0 : e.visible.includes(t.metaId),
                        });
                      }),
                      !1,
                    );
                  }
                },
              },
              {
                key: "getGroupedLayers",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = function (e) {
                      return "Copper" == e
                        ? 1
                        : "Solder Mask" == e
                          ? 2
                          : "Paste Mask" == e
                            ? 3
                            : "Silkscreen" == e
                              ? 4
                              : "Mechanical" == e
                                ? 5
                                : "Other" == e
                                  ? 6
                                  : 0;
                    },
                    n = [],
                    r = this.getLayers(e);
                  return (
                    re(
                      new Set(
                        r.map(function (e) {
                          return e.layerGroup;
                        }),
                      ),
                    )
                      .sort()
                      .filter(function (e) {
                        return "none" !== e && "System Colors" !== e;
                      })
                      .sort(function (e, n) {
                        return t(e) - t(n);
                      })
                      .forEach(function (e) {
                        var t = r.filter(function (t) {
                          return !t.ignored && t.layerGroup === e;
                        });
                        (("Mechanical" !== e && "Silkscreen" !== e) ||
                          (t = t
                            .map(function (e) {
                              return {
                                layer: e,
                                stackIndex: e.stackIndex ? e.stackIndex : 1e3,
                              };
                            })
                            .sort(function (e, t) {
                              return e.stackIndex - t.stackIndex;
                            })
                            .map(function (e) {
                              return e.layer;
                            })),
                          t.length > 0 && n.push(t));
                      }),
                    n
                  );
                },
              },
              {
                key: "setTopView",
                value: function () {
                  this.flipped &&
                    (this.flipBoard(),
                    this.emitLayerEvent("setTopView", this.layers, !1));
                },
              },
              {
                key: "setBottomView",
                value: function () {
                  this.flipped ||
                    (this.flipBoard(),
                    this.emitLayerEvent("setBottomView", this.layers, !1));
                },
              },
              {
                key: "setOnceLayer",
                value: function (e) {
                  (this.onceLayerManager.setOnceLayer(e),
                    this.emitLayerEvent(ce, e));
                },
              },
              {
                key: "nextOnceLayer",
                value: function () {
                  var e = this.onceLayerManager.nextOnceLayer();
                  return (this.emitLayerEvent(ce, e), e);
                },
              },
              {
                key: "prevOnceLayer",
                value: function () {
                  var e = this.onceLayerManager.prevOnceLayer();
                  return (this.emitLayerEvent(ce, e), e);
                },
              },
              {
                key: "resetOnceLayer",
                value: function () {
                  (this.onceLayerManager.resetOnceLayer(),
                    this.emitLayerEvent("resetOnceLayer", null, !1));
                },
              },
              {
                key: "setLayerOn",
                value: function (e) {
                  if (e) {
                    var t = this.getLayers(!1);
                    this.setLayers(
                      t.map(function (t) {
                        return Object.assign(Object.assign({}, t), {
                          isVisible: !!e.includes(t.metaId) || t.isVisible,
                        });
                      }),
                      !1,
                    );
                  }
                },
              },
              {
                key: "emitLayerEvent",
                value: function (e, t) {
                  var n = {
                    eventType: e,
                    data: t,
                    needLayersChange:
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                  };
                  r.Q.bus.emit("LayerManager:changedLayers", n);
                },
              },
              {
                key: "defineLayerGroup",
                value: function (e, t) {
                  return e & Y.V.Signal || e & Y.V.Plane
                    ? "Copper"
                    : e & Y.V.Paste
                      ? "Paste Mask"
                      : e & Y.V.Overlay
                        ? "Silkscreen"
                        : e & Y.V.Solder
                          ? "Solder Mask"
                          : e & Y.V.Mechanical
                            ? "Mechanical"
                            : e & Y.V.Other
                              ? "Other"
                              : e & Y.V.System
                                ? "System Colors"
                                : e & Y.V.Dielectric
                                  ? "Dielectric"
                                  : t;
                },
              },
              {
                key: "addSelectionRenderOptions",
                value: function (e, t) {
                  var n =
                      t.length -
                      t.filter(function (e) {
                        return e.name == q.Z.SelectionLayerName;
                      }).length,
                    r = e.map(function (e) {
                      var r = "SL:" + t[e.layer].name;
                      return new z.Z(e.layer + n, r);
                    });
                  (e.push(new z.Z(t.length - 2, q.Z.SelectionLayerName)),
                    e.push.apply(e, re(r)),
                    e.push(new z.Z(t.length - 1, q.Z.HighlightLayerName)));
                },
              },
              {
                key: "isViaPadKind",
                value: function (e) {
                  return this.holeConnecterLayerKins.some(function (t) {
                    return !!(t & e);
                  });
                },
              },
              {
                key: "isVisibleViaPadLayers",
                value: function (e) {
                  var t = this;
                  return e.some(function (e) {
                    return (
                      e.isVisible &&
                      (t.isViaPadKind(e.kind) ||
                        e.searchName === Y.N.MultiLayer)
                    );
                  });
                },
              },
              {
                key: "isHolesLayer",
                value: function (e) {
                  return (
                    !!e &&
                    (e.searchName.startsWith("Pad Holes") ||
                      e.searchName.startsWith("Via Holes"))
                  );
                },
              },
              {
                key: "getActiveForRenderOptions",
                value: function (e, t) {
                  var n = (t || []).find(function (t) {
                      return t.id === (null == e ? void 0 : e.layer);
                    }),
                    r = 0;
                  return (
                    n &&
                      ((r |= n.isActive ? 1 : r),
                      (r |= n.kind & Y.V.Overlay ? 2 : r),
                      (r |= n.searchName === Y.N.MultiLayer ? 4 : r),
                      (r |= this.isHolesLayer(n) ? 8 : r)),
                    r
                  );
                },
              },
              {
                key: "getLayerSortNumber",
                value: function (e, t) {
                  var n = e.z_range,
                    r = t.z_range,
                    i = -(n[0] + r[1]),
                    o = -(n[0] + r[1]);
                  if (i !== o) return i - o;
                  var a = Number(e.is_cutout) ^ Number(e.is_inverted) ? 0 : 1,
                    c = Number(t.is_cutout) ^ Number(t.is_inverted) ? 0 : 1;
                  return a !== c ? a - c : e.index - t.index;
                },
              },
            ]),
            t && oe(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
      const se = ue;
      function le(e) {
        return (
          (le =
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
          le(e)
        );
      }
      function fe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, de(r.key), r));
        }
      }
      function de(e) {
        var t = (function (e, t) {
          if ("object" != le(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != le(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == le(t) ? t : t + "";
      }
      function he(e, t, n) {
        return (
          (t = pe(t)),
          (function (e, t) {
            if (t && ("object" == le(t) || "function" == typeof t)) return t;
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
            ye()
              ? Reflect.construct(t, n || [], pe(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function ye() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (ye = function () {
          return !!e;
        })();
      }
      function pe(e) {
        return (
          (pe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          pe(e)
        );
      }
      function ve(e, t) {
        return (
          (ve = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          ve(e, t)
        );
      }
      var me, ge;
      (!(function (e) {
        ((e[(e.BoardShape = 0)] = "BoardShape"),
          (e[(e.Background = 1)] = "Background"),
          (e[(e.Other = 2)] = "Other"),
          (e[(e.DrillDrawing = 3)] = "DrillDrawing"),
          (e[(e.Mechanichal = 4)] = "Mechanichal"),
          (e[(e.KeepOut = 5)] = "KeepOut"),
          (e[(e.DrillGuide = 6)] = "DrillGuide"),
          (e[(e.Plane = 7)] = "Plane"),
          (e[(e.SolderMask = 8)] = "SolderMask"),
          (e[(e.Paste = 9)] = "Paste"),
          (e[(e.Signal = 10)] = "Signal"),
          (e[(e.Current = 11)] = "Current"),
          (e[(e.Overlay = 12)] = "Overlay"),
          (e[(e.MultiLayer = 13)] = "MultiLayer"),
          (e[(e.Holes = 14)] = "Holes"),
          (e[(e.Ignored = 15)] = "Ignored"));
      })(me || (me = {})),
        (function (e) {
          ((e[(e.Bottom = 0)] = "Bottom"),
            (e[(e.Internal = 1)] = "Internal"),
            (e[(e.Top = 2)] = "Top"));
        })(ge || (ge = {})));
      var be = new Map([
          [Y.N.BoardShape, { kind: Y.V.System, stackKind: me.BoardShape }],
          [Y.N.BackgroundLayer, { kind: Y.V.System, stackKind: me.Background }],
          [Y.N.Background, { kind: Y.V.System, stackKind: me.Background }],
          [Y.N.MultiLayer, { kind: Y.V.Other, stackKind: me.MultiLayer }],
          [
            Y.N.TopOverlayLayer,
            {
              kind: Y.V.Overlay | Y.V.Top | Y.V.LayerPair,
              stackKind: me.Overlay,
            },
          ],
          [
            Y.N.BottomOverlayLayer,
            {
              kind: Y.V.Overlay | Y.V.Bottom | Y.V.LayerPair,
              stackKind: me.Overlay,
            },
          ],
          [Y.N.TopLayer, { kind: Y.V.Signal | Y.V.Top, stackKind: me.Signal }],
          [
            Y.N.BottomLayer,
            { kind: Y.V.Signal | Y.V.Bottom, stackKind: me.Signal },
          ],
          [
            Y.N.TopPasteLayer,
            { kind: Y.V.Paste | Y.V.Top | Y.V.LayerPair, stackKind: me.Paste },
          ],
          [
            Y.N.BottomPasteLayer,
            {
              kind: Y.V.Paste | Y.V.Bottom | Y.V.LayerPair,
              stackKind: me.Paste,
            },
          ],
          [
            Y.N.TopSolderLayer,
            {
              kind: Y.V.Solder | Y.V.Top | Y.V.LayerPair,
              stackKind: me.SolderMask,
            },
          ],
          [
            Y.N.BottomSolderLayer,
            {
              kind: Y.V.Solder | Y.V.Bottom | Y.V.LayerPair,
              stackKind: me.SolderMask,
            },
          ],
          [Y.N.PadHolesLayer, { kind: Y.V.System, stackKind: me.Holes }],
          [Y.N.ViaHolesLayer, { kind: Y.V.System, stackKind: me.Holes }],
          [Y.N.DrillGuideLayer, { kind: Y.V.Other, stackKind: me.DrillGuide }],
          [Y.N.KeepOutLayer, { kind: Y.V.Other, stackKind: me.KeepOut }],
          [
            Y.N.DrillDrawingLayer,
            { kind: Y.V.Other, stackKind: me.DrillDrawing },
          ],
          [Y.N.SelectionsLayer, { kind: Y.V.System, stackKind: me.Ignored }],
          [Y.N.ConnectionsLayer, { kind: Y.V.System, stackKind: me.Ignored }],
        ]),
        we = [
          [Y.N.MidLayer, { kind: Y.V.Signal, stackKind: me.Signal }],
          [Y.N.InternalPlaneLayer, { kind: Y.V.Signal, stackKind: me.Plane }],
          [
            Y.N.MechanicalLayer,
            { kind: Y.V.Mechanical, stackKind: me.Mechanichal },
          ],
          [
            Y.N.DielectricLayer,
            { kind: Y.V.Dielectric, stackKind: me.Ignored },
          ],
        ],
        Se = (function (e) {
          function t() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((e = he(this, t, arguments)).logger = r.Q.createLogger(
                "NoMetadataPcbLayerManager",
              )),
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
                t && ve(e, t));
            })(t, e),
            (n = t),
            (i = [
              {
                key: "flipSortedLayers",
                value: function (e) {
                  var t = e.reduce(function (e, t) {
                    if (
                      !t.ignored &&
                      t.kind !== Y.V.System &&
                      t.kind !== Y.V.Other
                    ) {
                      var n = e.get(t.layerGroup);
                      n ? n.push(t) : e.set(t.layerGroup, [t]);
                    }
                    return e;
                  }, new Map());
                  t.forEach(function (e) {
                    var t = e.map(function (e) {
                      return e.stackIndex;
                    });
                    e.forEach(function (e, n) {
                      e.stackIndex = t[t.length - n - 1];
                    });
                  });
                },
              },
              {
                key: "getLayers",
                value: function () {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return (arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    !arguments[0]) ||
                    !this.layers.length
                    ? ((this.layers = this.getBoardLayers(this.scene.layers)),
                      e && this.flipSortedLayers(this.layers),
                      this.layers)
                    : this.layers;
                },
              },
              {
                key: "flipBoard",
                value: function () {
                  ((this.scene.flipped = !this.scene.flipped),
                    this.layers
                      ? (this.flipSortedLayers(this.layers),
                        this.setLayers(this.layers, !1))
                      : this.setLayers(this.layers, this.scene.flipped),
                    console.log(
                      "flipBoard",
                      this.layers
                        .map(function (e) {
                          return e.name;
                        })
                        .join(" | "),
                    ));
                },
              },
              {
                key: "createRenderOptions",
                value: function (e, t, n) {
                  var r = this,
                    i = [],
                    o = n ? this.setSystemLayers(n) : this.getLayers(!1, t);
                  (this.setDefaultVisibility(o),
                    o.forEach(function (t) {
                      t.ignored ||
                        (t.isVisible &&
                          e
                            .filter(function (e) {
                              return e.name === t.name;
                            })
                            .sort(function (e, t) {
                              return (
                                (Number(e.is_cutout) ^ Number(e.is_inverted)
                                  ? 0
                                  : 1) -
                                (Number(t.is_cutout) ^ Number(t.is_inverted)
                                  ? 0
                                  : 1)
                              );
                            })
                            .forEach(function (e) {
                              return i.push(new z.Z(e.index, e.name));
                            }));
                    }),
                    i.sort(function (e, t) {
                      return (
                        r.getActiveForRenderOptions(e, o) -
                        r.getActiveForRenderOptions(t, o)
                      );
                    }),
                    this.addSelectionRenderOptions(i, e));
                  var a = i
                    .filter(function (e) {
                      return (
                        e.layer % 3 == 0 || e.layerName.startsWith("Highligh")
                      );
                    })
                    .reduce(function (e, t, n) {
                      return (
                        e +
                        " | [".concat(t.layer, "] ").concat(t.layerName, " ")
                      );
                    }, "Layers to render: ");
                  return (this.logger.LogInfo(a), i);
                },
              },
              {
                key: "getBoardLayers",
                value: function (e) {
                  var t = this,
                    n = [
                      q.Z.SelectionLayerName,
                      q.Z.HighlightLayerName,
                      "NoLayer",
                    ],
                    r = Array.from(
                      new Map(
                        e
                          .filter(function (e) {
                            return !n.includes(e.name);
                          })
                          .map(function (e) {
                            return [e.name, e];
                          }),
                      ).values(),
                    ),
                    i = r
                      .map(function (e) {
                        var n = {
                          layer: e,
                          kind: Y.V.None,
                          group: "Unknown",
                          stackKind: me.Ignored,
                          levelKind: ge.Internal,
                          levelIndex: 0,
                          ignored: !0,
                        };
                        return t.setBoardLayerInfo(n);
                      })
                      .sort(function (e, t) {
                        return e.stackKind !== t.stackKind
                          ? e.stackKind - t.stackKind
                          : e.levelKind !== t.levelKind
                            ? e.levelKind - t.levelKind
                            : t.levelIndex - e.levelIndex;
                      })
                      .map(function (e, t) {
                        return {
                          id: e.layer.index,
                          metaId: -1,
                          name: e.layer.name,
                          searchName: e.layer.name,
                          color: "none",
                          layerGroup: e.group,
                          isVisible: !(
                            e.ignored ||
                            e.kind === Y.V.Other ||
                            e.kind === Y.V.System ||
                            e.kind === Y.V.Mechanical
                          ),
                          isActive: !1,
                          ignored: e.ignored,
                          kind: e.kind,
                          stackIndex: t,
                        };
                      });
                  return i;
                },
              },
              {
                key: "setBoardLayerInfo",
                value: function (e) {
                  if (e.layer.name) {
                    var t = be.get(e.layer.name);
                    if (t)
                      return (
                        (e.kind = t.kind),
                        (e.stackKind = t.stackKind),
                        e.kind & Y.V.Top && (e.levelKind = ge.Top),
                        e.kind & Y.V.Bottom && (e.levelKind = ge.Bottom),
                        (e.group = this.defineLayerGroup(e.kind, e.group)),
                        (e.ignored = e.stackKind === me.Ignored),
                        e
                      );
                    var n = 0,
                      r = we.find(function (t) {
                        var r = e.layer.name.match("".concat(t[0], " (\\d*)"));
                        if (
                          r &&
                          r[0] &&
                          "".concat(t[0], " ").concat(r[1]) === r[0]
                        )
                          return ((n = r[1] ? Number.parseInt(r[1]) : n), !0);
                      });
                    if (r)
                      return (
                        (e.kind = r[1].kind),
                        (e.stackKind = r[1].stackKind),
                        (e.levelIndex = n),
                        (e.group = this.defineLayerGroup(e.kind, e.group)),
                        (e.ignored = e.stackKind === me.Ignored),
                        e
                      );
                  }
                  return e;
                },
              },
              {
                key: "setSystemLayers",
                value: function (e) {
                  var t = this,
                    n = function (n) {
                      if (
                        !e.find(function (e) {
                          return e.kind === Y.V.System && e.searchName === n;
                        })
                      ) {
                        var r = t.layers.find(function (e) {
                          return e.searchName === n;
                        });
                        r && e.push(r);
                      }
                    };
                  return (
                    n(Y.N.BoardShape),
                    n(Y.N.BackgroundLayer),
                    n(Y.N.Background),
                    n(Y.N.ViaHolesLayer),
                    n(Y.N.PadHolesLayer),
                    e.sort(function (e, t) {
                      return e.stackIndex - t.stackIndex;
                    })
                  );
                },
              },
              {
                key: "setDefaultVisibility",
                value: function (e) {
                  var t = this.isVisibleViaPadLayers(e);
                  e.forEach(function (e) {
                    (e.kind !== Y.V.System ||
                      (e.searchName !== Y.N.BoardShape &&
                        e.searchName !== Y.N.BackgroundLayer &&
                        e.searchName !== Y.N.Background) ||
                      (e.isVisible = !0),
                      e.kind === Y.V.System &&
                        e.searchName === Y.N.ViaHolesLayer &&
                        (e.isVisible = t),
                      e.kind === Y.V.System &&
                        e.searchName === Y.N.PadHolesLayer &&
                        (e.isVisible = t),
                      e.searchName === Y.N.MultiLayer &&
                        t &&
                        (e.isVisible = t));
                  });
                },
              },
            ]),
            i && fe(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(ue),
        Le = n(49865);
      function ke(e) {
        return (
          (ke =
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
          ke(e)
        );
      }
      function Pe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Ee(r.key), r));
        }
      }
      function Ee(e) {
        var t = (function (e, t) {
          if ("object" != ke(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != ke(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == ke(t) ? t : t + "";
      }
      function Oe(e, t, n) {
        return (
          (t = Ie(t)),
          (function (e, t) {
            if (t && ("object" == ke(t) || "function" == typeof t)) return t;
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
            De()
              ? Reflect.construct(t, n || [], Ie(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function De() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (De = function () {
          return !!e;
        })();
      }
      function Ie(e) {
        return (
          (Ie = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ie(e)
        );
      }
      function xe(e, t) {
        return (
          (xe = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          xe(e, t)
        );
      }
      var Ne,
        Me = "Copper",
        je = "Silkscreen",
        Te = ["tPlace", "bPlace", "tValues", "bValues"];
      !(function (e) {
        ((e[(e.topSystem = 0)] = "topSystem"),
          (e[(e.top = 1)] = "top"),
          (e[(e.middle = 2)] = "middle"),
          (e[(e.plane = 3)] = "plane"),
          (e[(e.bottom = 4)] = "bottom"),
          (e[(e.mechanical = 5)] = "mechanical"),
          (e[(e.other = 6)] = "other"),
          (e[(e.bottomSystem = 7)] = "bottomSystem"),
          (e[(e.ignored = 8)] = "ignored"),
          (e[(e.max = 9)] = "max"));
      })(Ne || (Ne = {}));
      var Ce = r.Q.createLogger("PcbLayerManager"),
        _e = (function (e) {
          function t(e, n) {
            var r;
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              ((r = Oe(this, t, [e])).metaLayers = new Map()));
            var i = j.q.instance;
            return (
              (r.metaProjectTypeName = i.metadata.projectTypeName),
              r.initMetaLayers(i.getDocumentLayers(n)),
              r
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
                t && xe(e, t));
            })(t, e),
            (n = t),
            (i = [
              {
                key: "getLayers",
                value: function () {
                  var e,
                    t = this;
                  if (
                    (!(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0]) &&
                    (null === (e = this.layers) || void 0 === e
                      ? void 0
                      : e.length)
                  )
                    return this.layers;
                  ((this.layers = this.getBoardLayers(this.scene.layers, !1)),
                    this.IsKiCadProject() &&
                      (this.layers = this.layers.filter(function (e) {
                        return t.metadataLayers.find(function (t) {
                          return t.searchName == e.name;
                        });
                      })));
                  var n = 3e3;
                  this.metadataLayers.forEach(function (e) {
                    var r = t.layers.find(function (t) {
                      return t.searchName === e.searchName;
                    });
                    if (r)
                      ((r.name = e.name),
                        (r.color = e.color),
                        (r.metaId = e.id),
                        (r.stackIndex = e.stackIndex),
                        (r.kind = e.kind),
                        void 0 !== e.isVisible && (r.isVisible = e.isVisible),
                        void 0 !== e.ignored
                          ? (r.ignored = e.ignored)
                          : void 0 === e.stackIndex && (r.ignored = !0),
                        e.kind && (r.layerGroup = t.getLayerGroup(r, e.kind)));
                    else {
                      var i = {
                        id: n++,
                        name: e.name,
                        color: e.color,
                        metaId: e.id,
                        ignored: e.ignored,
                        searchName: e.searchName,
                        isVisible: !0,
                        isActive: !1,
                        stackIndex: e.stackIndex,
                        layerGroup: "",
                        kind: e.kind,
                      };
                      (void 0 !== e.isVisible && (i.isVisible = e.isVisible),
                        void 0 !== e.ignored
                          ? (i.ignored = e.ignored)
                          : void 0 === e.stackIndex && (i.ignored = !0),
                        e.kind && (i.layerGroup = t.getLayerGroup(i, e.kind)),
                        t.layers.push(i));
                    }
                  });
                  var r = this.layers.find(function (e) {
                    return 129 === e.kind;
                  });
                  if (
                    (r &&
                      (null == r ? void 0 : r.isVisible) &&
                      (r.isActive = !0),
                    (0, Le.Z)("3.0.0.2", j.q.instance.metadata.version))
                  ) {
                    var i = this.layers
                        .map(function (e, t) {
                          return { l: e, i: t };
                        })
                        .filter(function (e) {
                          return e.l.layerGroup === Me;
                        }),
                      o = i.slice().sort(function (e, t) {
                        return e.i - t.i;
                      });
                    i.slice()
                      .sort(function (e, t) {
                        return e.l.stackIndex - t.l.stackIndex;
                      })
                      .forEach(function (e, n) {
                        t.layers[o[n].i] = e.l;
                      });
                  }
                  return this.layers;
                },
              },
              {
                key: "flipBoard",
                value: function () {
                  var e = this,
                    t = this.scene;
                  t.flipped = !t.flipped;
                  var n = new Map();
                  (this.metadataLayers
                    .slice()
                    .sort(function (e, t) {
                      return e.stackIndex - t.stackIndex;
                    })
                    .forEach(function (t) {
                      var r = e.getLayerGroup(t, t.kind);
                      if (r && t.stackIndex) {
                        var i = n.get(r);
                        i ? i.push(t) : n.set(r, [t]);
                      }
                    }),
                    n.forEach(function (e, t) {
                      if (
                        "System Colors" !== t &&
                        "Other" !== t &&
                        "Dielectric" !== t
                      ) {
                        var n = e.map(function (e) {
                          return e.stackIndex;
                        });
                        e.forEach(function (e, t) {
                          e.stackIndex = n[n.length - t - 1];
                        });
                      }
                    }),
                    this.setLayers(this.layers, !1),
                    r.Q.bus.emit("PcbEngine:flipped", this.flipped));
                },
              },
              {
                key: "createRenderOptions",
                value: function (e, t, n) {
                  var r,
                    i = this,
                    o = [],
                    a = [Y.N.BackgroundLayer, Y.N.Background];
                  if (
                    ((r = n
                      ? this.setViaPadFilter(n)
                      : this.getBoardLayers(e, t)).forEach(function (t) {
                      var n;
                      t.ignored ||
                        (t.isVisible &&
                          ((i.metaLayers &&
                            !(null === (n = i.metaLayers.get(t.searchName)) ||
                            void 0 === n
                              ? void 0
                              : n.stackIndex)) ||
                            e
                              .filter(function (e) {
                                return (
                                  "NoLayer" != e.name &&
                                  t.id <= e.index &&
                                  e.index < t.id + 3
                                );
                              })
                              .forEach(function (e) {
                                return o.push(new z.Z(e.index, e.name));
                              })));
                    }),
                    !o.find(function (e) {
                      return e.layerName === Y.N.BoardShape;
                    }))
                  ) {
                    var c = e.find(function (e) {
                      return e.name === Y.N.BoardShape;
                    });
                    c && o.push(new z.Z(c.index, c.name));
                  }
                  if (
                    !o.find(function (e) {
                      return a.includes(e.layerName);
                    })
                  ) {
                    var u = e.find(function (e) {
                      return a.includes(e.name);
                    });
                    u && o.push(new z.Z(u.index, u.name));
                  }
                  if (this.metaLayers.size > 0) {
                    var s = this.metaLayers;
                    o.sort(function (t, n) {
                      var r,
                        o,
                        a,
                        c,
                        u = i.getLayerName(t.layerName),
                        l = i.getLayerName(n.layerName),
                        f =
                          null !==
                            (o =
                              null === (r = s.get(u)) || void 0 === r
                                ? void 0
                                : r.stackIndex) && void 0 !== o
                            ? o
                            : 0,
                        d =
                          null !==
                            (c =
                              null === (a = s.get(l)) || void 0 === a
                                ? void 0
                                : a.stackIndex) && void 0 !== c
                            ? c
                            : 0;
                      if (f !== d) return d - f;
                      var h = e[t.layer],
                        y = e[n.layer];
                      return i.getLayerSortNumber(h, y);
                    }).sort(function (e, t) {
                      var n = e.layerName === Y.N.BoardShape ? 0 : 2,
                        r = t.layerName === Y.N.BoardShape ? 0 : 2;
                      return (
                        a.includes(e.layerName) && (n = 1),
                        a.includes(t.layerName) && (r = 1),
                        n - r
                      );
                    });
                  } else {
                    var l = {};
                    (o.reverse().forEach(function (e, t) {
                      l[e.layer] = Math.floor(t / 3);
                    }),
                      o.sort(function (t, n) {
                        (l[t.layer], l[n.layer]);
                        var r = e[t.layer],
                          o = e[n.layer];
                        return i.getLayerSortNumber(r, o);
                      }));
                  }
                  (o.sort(function (e, t) {
                    return (
                      i.getActiveForRenderOptions(e, r) -
                      i.getActiveForRenderOptions(t, r)
                    );
                  }),
                    this.addSelectionRenderOptions(o, e));
                  var f = o
                    .filter(function (e) {
                      return (
                        e.layer % 3 == 0 || e.layerName.startsWith("Highligh")
                      );
                    })
                    .reduce(function (e, t, n) {
                      return (
                        e +
                        " | [".concat(t.layer, "] ").concat(t.layerName, " ")
                      );
                    }, "Layers to render: ");
                  return (Ce.LogInfo(f), o);
                },
              },
              {
                key: "getLayerName",
                value: function (e) {
                  return e === Y.N.BoardShape || e === Y.N.BackgroundLayer
                    ? Y.N.Background
                    : e;
                },
              },
              {
                key: "initMetaLayers",
                value: function (e) {
                  var t,
                    n = this;
                  if (
                    ((this.metadataLayers = e.filter(function (e) {
                      return e.stackIndex;
                    })),
                    !(null === (t = this.metadataLayers) || void 0 === t
                      ? void 0
                      : t.length))
                  ) {
                    var r = "Empty metadata layers.";
                    throw (Ce.LogError(r), new Error(r));
                  }
                  this.metadataLayers.forEach(function (e) {
                    return n.metaLayers.set(e.searchName, e);
                  });
                },
              },
              {
                key: "groupLayers",
                value: function (e) {
                  var t = ["Pad Holes", "Via Holes", "Connections"],
                    n = [Y.N.BoardShape, Y.N.BackgroundLayer, Y.N.Background],
                    r = [
                      Y.N.MultiLayer,
                      "Drill Guide",
                      "Keep-Out Layer",
                      "Drill Drawing",
                    ],
                    i = [];
                  i.length = Ne.max;
                  for (var o = 0; o < i.length; o++) i[o] = [];
                  return (
                    e.forEach(function (e) {
                      t.indexOf(e.name) >= 0
                        ? i[Ne.topSystem].push(e)
                        : e.name.startsWith("Top")
                          ? i[Ne.top].push(e)
                          : e.name.startsWith("Mid-Layer")
                            ? i[Ne.middle].push(e)
                            : e.name.startsWith("Internal Plane")
                              ? i[Ne.plane].push(e)
                              : e.name.startsWith("Bottom")
                                ? i[Ne.bottom].push(e)
                                : e.name.startsWith("Mechanical")
                                  ? i[Ne.mechanical].push(e)
                                  : r.indexOf(e.name) >= 0
                                    ? i[Ne.other].push(e)
                                    : n.indexOf(e.name) >= 0
                                      ? i[Ne.bottomSystem].push(e)
                                      : i[Ne.ignored].push(e);
                    }),
                    i
                  );
                },
              },
              {
                key: "updateGroupNames",
                value: function (e) {
                  var t = function (e) {
                    return "Paste" === e
                      ? "Paste Mask"
                      : "Overlay" === e
                        ? je
                        : "Solder" === e
                          ? "Solder Mask"
                          : "Layer" === e
                            ? Me
                            : "none";
                  };
                  (e[Ne.mechanical].forEach(function (e) {
                    ((e.isVisible = !1), (e.layerGroup = "Mechanical"));
                  }),
                    e[Ne.other].forEach(function (e) {
                      ((e.isVisible = e.name === Y.N.MultiLayer),
                        (e.layerGroup = "Other"));
                    }),
                    e[Ne.middle].forEach(function (e) {
                      e.layerGroup = Me;
                    }),
                    e[Ne.plane].forEach(function (e) {
                      e.layerGroup = Me;
                    }),
                    e[Ne.topSystem].forEach(function (e) {
                      e.layerGroup = "System Colors";
                    }),
                    e[Ne.bottomSystem].forEach(function (e) {
                      e.layerGroup = "System Colors";
                    }),
                    e[Ne.top].forEach(function (e) {
                      e.layerGroup = t(e.name.replace("Top ", ""));
                    }),
                    e[Ne.bottom].forEach(function (e) {
                      e.layerGroup = t(e.name.replace("Bottom ", ""));
                    }));
                },
              },
              {
                key: "getLayerGroup",
                value: function (e, t) {
                  if (t & Y.V.Signal) return Me;
                  if (t & Y.V.LayerPair) {
                    if (e.searchName.endsWith("Paste")) return "Paste Mask";
                    if (e.searchName.endsWith("Overlay")) return je;
                    if (e.searchName.endsWith("Solder")) return "Solder Mask";
                  }
                  return t & Y.V.Plane
                    ? Me
                    : t & Y.V.Mechanical
                      ? this.getMechanicalLayerGroup(e)
                      : t & Y.V.Other
                        ? "Other"
                        : t & Y.V.System
                          ? "System Colors"
                          : t & Y.V.Dielectric
                            ? "Dielectric"
                            : e.layerGroup;
                },
              },
              {
                key: "getMechanicalLayerGroup",
                value: function (e) {
                  return this.IsEagleProject() &&
                    Te.find(function (t) {
                      return t === e.name;
                    })
                    ? je
                    : "Mechanical";
                },
              },
              {
                key: "sortTopOrBottomLayers",
                value: function (e, t) {
                  var n = function (n) {
                    var r = n.name.replace(e + " ", "");
                    return "Pad Master" === r
                      ? t.length
                      : "Paste" === r
                        ? t.length - 1
                        : "Overlay" === r
                          ? t.length - 2
                          : "Solder" === r
                            ? t.length - 3
                            : "Layer" === r
                              ? t.length - 4
                              : 0;
                  };
                  return t.sort(function (e, t) {
                    return n(e) - n(t);
                  });
                },
              },
              {
                key: "sortLayersByIndex",
                value: function (e) {
                  var t = function (e) {
                    return parseInt(e.name.replace(/[^0-9\.]+/g, ""));
                  };
                  return e.sort(function (e, n) {
                    return t(e) - t(n);
                  });
                },
              },
              {
                key: "sortLayers",
                value: function (e) {
                  ((e[Ne.middle] = this.sortLayersByIndex(e[Ne.middle])),
                    (e[Ne.plane] = this.sortLayersByIndex(e[Ne.plane])),
                    (e[Ne.mechanical] = this.sortLayersByIndex(
                      e[Ne.mechanical],
                    )),
                    (e[Ne.top] = this.sortTopOrBottomLayers(
                      "Top",
                      e[Ne.top],
                    ).reverse()),
                    (e[Ne.bottom] = this.sortTopOrBottomLayers(
                      "Bottom",
                      e[Ne.bottom],
                    )));
                },
              },
              {
                key: "getStack",
                value: function (e, t) {
                  var n = [],
                    r = [];
                  return (
                    e[Ne.top].forEach(function (e) {
                      return n.push(e);
                    }),
                    e[Ne.middle].forEach(function (e) {
                      return n.push(e);
                    }),
                    e[Ne.plane].forEach(function (e) {
                      return n.push(e);
                    }),
                    e[Ne.bottom].forEach(function (e) {
                      return n.push(e);
                    }),
                    t && n.reverse(),
                    e[Ne.topSystem].forEach(function (e) {
                      return r.push(e);
                    }),
                    n.forEach(function (e) {
                      return r.push(e);
                    }),
                    e[Ne.mechanical].forEach(function (e) {
                      return r.push(e);
                    }),
                    e[Ne.other].forEach(function (e) {
                      return r.push(e);
                    }),
                    e[Ne.bottomSystem].forEach(function (e) {
                      return r.push(e);
                    }),
                    e[Ne.ignored].forEach(function (e) {
                      return r.push(e);
                    }),
                    r
                  );
                },
              },
              {
                key: "getBoardLayers",
                value: function (e, t) {
                  var n = e
                      .slice(0)
                      .filter(function (e) {
                        return (
                          e.index % 3 == 0 &&
                          e.name !== q.Z.SelectionLayerName &&
                          "NoLayer" != e.name
                        );
                      })
                      .map(function (e) {
                        return {
                          id: e.index,
                          metaId: -1,
                          name: e.name,
                          searchName: e.name,
                          color: "none",
                          layerGroup: "none",
                          isVisible: !0,
                          isActive: !1,
                          ignored: !1,
                          kind: 0,
                          stackIndex: 0,
                        };
                      }),
                    r = this.groupLayers(n);
                  return (
                    r[Ne.ignored].forEach(function (e) {
                      return (e.ignored = !0);
                    }),
                    this.updateGroupNames(r),
                    this.sortLayers(r),
                    this.getStack(r, t)
                  );
                },
              },
              {
                key: "setViaPadFilter",
                value: function (e) {
                  var t = this;
                  return this.isVisibleViaPadLayers(e)
                    ? (e = this.setViaPadHolesFilter(e))
                    : e.filter(function (e) {
                        return !t.isHolesLayer(e);
                      });
                },
              },
              {
                key: "setViaPadHolesFilter",
                value: function (e) {
                  var t = this,
                    n = this.metadataLayers.filter(function (e) {
                      return t.isHolesLayer(e);
                    });
                  return (
                    (e = e.slice()),
                    null == n ||
                      n.forEach(function (n) {
                        var r,
                          i,
                          o = e.find(function (e) {
                            return e.metaId === n.id;
                          });
                        if (o) o.isVisible = !0;
                        else {
                          var a = Object.assign(Object.assign({}, n), {
                            metaId: n.id,
                            isVisible: !0,
                          });
                          ((a.id =
                            null !==
                              (i =
                                null ===
                                  (r = t.scene.layers.find(function (e) {
                                    return e.name === a.searchName;
                                  })) || void 0 === r
                                  ? void 0
                                  : r.index) && void 0 !== i
                              ? i
                              : -999),
                            e.push(a));
                        }
                      }),
                    e
                  );
                },
              },
              {
                key: "IsEagleProject",
                value: function () {
                  return "Eagle" == this.metaProjectTypeName;
                },
              },
              {
                key: "IsKiCadProject",
                value: function () {
                  return "KiCad" == this.metaProjectTypeName;
                },
              },
            ]),
            i && Pe(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(se);
      function Re(e) {
        return (
          (Re =
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
          Re(e)
        );
      }
      function Ve(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Ae(r.key), r));
        }
      }
      function Ae(e) {
        var t = (function (e, t) {
          if ("object" != Re(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Re(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Re(t) ? t : t + "";
      }
      var Be = (function () {
          return (
            (e = function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
            }),
            (t = [
              {
                key: "createLayerManager",
                value: function (e, t) {
                  var n = j.q.instance;
                  return n.metadata && 0 !== n.getDocumentLayers(t).length
                    ? new _e(e, t)
                    : new Se(e);
                },
              },
            ]) && Ve(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        Ge = n(31065),
        Fe = n(61924);
      function Ze(e) {
        return (
          (Ze =
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
          Ze(e)
        );
      }
      function Ue(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function He() {
        He = function () {
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
          c = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(e, t, n) {
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
          s({}, "");
        } catch (e) {
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var o = t && t.prototype instanceof m ? t : m,
            a = Object.create(o.prototype),
            c = new N(r || []);
          return (i(a, "_invoke", { value: O(e, n, c) }), a);
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var d = "suspendedStart",
          h = "suspendedYield",
          y = "executing",
          p = "completed",
          v = {};
        function m() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          L = S && S(S(M([])));
        L && L !== n && r.call(L, a) && (w = L);
        var k = (b.prototype = m.prototype = Object.create(w));
        function P(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(i, o, a, c) {
            var u = f(e[i], e, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == Ze(l) && r.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      n("next", e, a, c);
                    },
                    function (e) {
                      n("throw", e, a, c);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return n("throw", e, a, c);
                    },
                  );
            }
            c(u.arg);
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
          var i = d;
          return function (o, a) {
            if (i === y) throw Error("Generator is already running");
            if (i === p) {
              if ("throw" === o) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = D(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === d) throw ((i = p), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = y;
              var s = f(t, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? p : h), s.arg === v)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = p), (r.method = "throw"), (r.arg = s.arg));
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
              v
            );
          var o = f(i, t.iterator, n.arg);
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
        function I(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function x(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function N(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(I, this),
            this.reset(!0));
        }
        function M(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < t.length; )
                    if (r.call(t, i))
                      return ((n.value = t[i]), (n.done = !1), n);
                  return ((n.value = e), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError(Ze(t) + " is not iterable");
        }
        return (
          (g.prototype = b),
          i(k, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = s(b, u, "GeneratorFunction")),
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
                : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(k)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          P(E.prototype),
          s(E.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new E(l(e, n, r, i), o);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          P(k),
          s(k, u, "Generator"),
          s(k, a, function () {
            return this;
          }),
          s(k, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return ((e.value = r), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (t.values = M),
          (N.prototype = {
            constructor: N,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(x),
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
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = e)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
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
                  return (this.complete(n.completion, n.afterLoc), x(n), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    x(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: M(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function Ke(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Qe(r.key), r));
        }
      }
      function Qe(e) {
        var t = (function (e, t) {
          if ("object" != Ze(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Ze(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Ze(t) ? t : t + "";
      }
      var We,
        qe = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, c);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        ze = new Uint8Array([255, 216, 0, 200]),
        Ye = (function () {
          return (
            (e = function e(t, n) {
              var i = this;
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.linesNodeIds = []),
                (this.selectedLinesNodeIds = []),
                (this.selectedNode = null),
                (this.isSelected = !1),
                (this.toggleLinesVisibility = !0),
                (this.renderMode = M.Z.Render2D),
                (this.onSelectedItem = function (e) {
                  return qe(
                    i,
                    void 0,
                    void 0,
                    He().mark(function t() {
                      var n;
                      return He().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                ((this.isSelected = !!e),
                                  this.clearSelection(),
                                  e && this.addSelection(e),
                                  (n = this.toggleLinesVisibility),
                                  this.setVisibleUnroutedLines(n));
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  );
                }),
                (this.layerId = t.layers.length - 1),
                (this.scene = t),
                (this.pcbDocId = n),
                (this.logger = r.Q.createLogger("UnroutedConnectionBuilder")),
                (this.setRenderMode = this.setRenderMode.bind(this)),
                r.Q.bus.on("PcbEngine:changedRenderMode", this.setRenderMode),
                r.Q.bus.on("select", this.onSelectedItem));
            }),
            (t = [
              {
                key: "dispose",
                value: function () {
                  (r.Q.bus.off(
                    "PcbEngine:changedRenderMode",
                    this.setRenderMode,
                  ),
                    r.Q.bus.off("select", this.onSelectedItem));
                },
              },
              {
                key: "addConnectionsToScene",
                value: function (e) {
                  return qe(
                    this,
                    void 0,
                    void 0,
                    He().mark(function t() {
                      var n = this;
                      return He().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                "return",
                                new Promise(function (t, r) {
                                  var i;
                                  try {
                                    n.renderMode = e;
                                    var o = j.q.instance;
                                    if (
                                      !(null === (i = o.primitives) ||
                                      void 0 === i
                                        ? void 0
                                        : i.length)
                                    )
                                      return;
                                    var a = new Map();
                                    if (
                                      (o.allNets.forEach(function (e) {
                                        var t,
                                          r = e.color,
                                          i = e.primitives
                                            .map(function (e) {
                                              return o.primitives[e];
                                            })
                                            .filter(function (e) {
                                              return (
                                                o.getObjectId(e) ===
                                                  N.Zw.Connection &&
                                                e.pcbDocId === n.pcbDocId
                                              );
                                            });
                                        if (a.has(r)) {
                                          var c = a.get(r);
                                          null == c ||
                                            c.push.apply(
                                              c,
                                              (function (e) {
                                                if (Array.isArray(e))
                                                  return Ue(e);
                                              })((t = i)) ||
                                                (function (e) {
                                                  if (
                                                    ("undefined" !=
                                                      typeof Symbol &&
                                                      null !=
                                                        e[Symbol.iterator]) ||
                                                    null != e["@@iterator"]
                                                  )
                                                    return Array.from(e);
                                                })(t) ||
                                                (function (e, t) {
                                                  if (e) {
                                                    if ("string" == typeof e)
                                                      return Ue(e, t);
                                                    var n = {}.toString
                                                      .call(e)
                                                      .slice(8, -1);
                                                    return (
                                                      "Object" === n &&
                                                        e.constructor &&
                                                        (n =
                                                          e.constructor.name),
                                                      "Map" === n || "Set" === n
                                                        ? Array.from(e)
                                                        : "Arguments" === n ||
                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                              n,
                                                            )
                                                          ? Ue(e, t)
                                                          : void 0
                                                    );
                                                  }
                                                })(t) ||
                                                (function () {
                                                  throw new TypeError(
                                                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                                  );
                                                })(),
                                            );
                                        } else a.set(r, i);
                                      }),
                                      !a.size)
                                    )
                                      return;
                                    ((n.linesNodeIds = []),
                                      (n.selectedLinesNodeIds = []),
                                      a.forEach(function (e, t) {
                                        var r,
                                          i,
                                          o,
                                          a,
                                          c,
                                          u,
                                          s = n.getColor(t),
                                          l =
                                            null !==
                                              (i =
                                                null ===
                                                  (r =
                                                    n.addConnectionNodeToScene(
                                                      e,
                                                      n.layerId,
                                                      s,
                                                    )) || void 0 === r
                                                  ? void 0
                                                  : r.GetId()) && void 0 !== i
                                              ? i
                                              : null;
                                        l &&
                                          (null === (o = n.linesNodeIds) ||
                                            void 0 === o ||
                                            o.push(l));
                                        var f = Fe.Z.toGrayscale(s);
                                        (l =
                                          null !==
                                            (c =
                                              null ===
                                                (a = n.addConnectionNodeToScene(
                                                  e,
                                                  n.layerId,
                                                  f,
                                                )) || void 0 === a
                                                ? void 0
                                                : a.GetId()) && void 0 !== c
                                            ? c
                                            : null) &&
                                          (null ===
                                            (u = n.selectedLinesNodeIds) ||
                                            void 0 === u ||
                                            u.push(l));
                                      }));
                                    var c = n.toggleLinesVisibility;
                                    (n.setVisibleUnroutedLines(c), t());
                                  } catch (e) {
                                    (n.logger.LogError(
                                      "Failed add unrouted connections to scene.",
                                      e,
                                    ),
                                      r(e));
                                  }
                                }),
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    }),
                  );
                },
              },
              {
                key: "getColor",
                value: function (e) {
                  return e ? Fe.Z.toRgbaArray(e, ze) : ze;
                },
              },
              {
                key: "addConnectionNodeToScene",
                value: function (e, t, n) {
                  var r = this;
                  try {
                    var i = new Array();
                    return (
                      e
                        .filter(function (e) {
                          return (
                            null != (t = e).x &&
                            null != t.x1 &&
                            null != t.y &&
                            null != t.y1
                          );
                          var t;
                        })
                        .forEach(function (e) {
                          var t = r.createLine(e, n);
                          i.push(t);
                        }),
                      this.scene.addItem(t, [], [], [], [], i, [])
                    );
                  } catch (e) {
                    return (
                      this.logger.LogError("Add connection node error.", e),
                      null
                    );
                  }
                },
              },
              {
                key: "createLine",
                value: function (e, t) {
                  var n = 1e6;
                  return {
                    from: [e.x / n, e.y / n, 0],
                    to: [e.x1 / n, e.y1 / n, 0],
                    color: t,
                    width: 1,
                    dash: 0,
                  };
                },
              },
              {
                key: "toggleVisibleUnroutedLines",
                value: function (e) {
                  return (
                    (this.toggleLinesVisibility = e),
                    this.setVisibleUnroutedLines(e)
                  );
                },
              },
              {
                key: "setVisibleUnroutedLines",
                value: function (e) {
                  return qe(
                    this,
                    void 0,
                    void 0,
                    He().mark(function t() {
                      return He().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  this.linesNodeIds.length &&
                                  this.selectedLinesNodeIds.length
                                ) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                e = e && this.renderMode === M.Z.Render2D;
                                try {
                                  (this.scene.setNodeItemsVisibility(
                                    this.linesNodeIds,
                                    e && !this.isSelected,
                                  ),
                                    this.scene.setNodeItemsVisibility(
                                      this.selectedLinesNodeIds,
                                      e && this.isSelected,
                                    ),
                                    this.selectedNode &&
                                      this.scene.setNodeItemsVisibility(
                                        [this.selectedNode.GetId()],
                                        e,
                                      ),
                                    this.invalidateScene());
                                } catch (t) {
                                  this.logger.LogError(
                                    "Set Visible = ".concat(
                                      e,
                                      " for unrouted net lines.",
                                    ),
                                    t,
                                  );
                                }
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  );
                },
              },
              {
                key: "setRenderMode",
                value: function (e) {
                  this.renderMode = e;
                  var t = this.toggleLinesVisibility;
                  this.setVisibleUnroutedLines(t);
                },
              },
              {
                key: "clearSelection",
                value: function () {
                  try {
                    (this.selectedNode &&
                      this.scene.removeItem(this.selectedNode),
                      (this.selectedNode = null));
                  } catch (e) {
                    this.logger.LogError("Remove selected node from scene.", e);
                  }
                },
              },
              {
                key: "addSelection",
                value: function (e) {
                  var t = this;
                  if (
                    "net" === (null == e ? void 0 : e.name) &&
                    (null == e.isPrimitiveContainer || e.isPrimitiveContainer)
                  ) {
                    var n = j.q.instance,
                      r = e.native,
                      i = r.primitives
                        .map(function (e) {
                          return n.primitives[e];
                        })
                        .filter(function (e) {
                          return (
                            e &&
                            n.getObjectId(e) === N.Zw.Connection &&
                            e.pcbDocId === t.pcbDocId
                          );
                        });
                    (null == i ? void 0 : i.length) &&
                      ((this.selectedNode = this.addConnectionNodeToScene(
                        i,
                        this.layerId,
                        this.getColor(r.color),
                      )),
                      this.invalidateScene());
                  }
                },
              },
              {
                key: "invalidateScene",
                value: function () {
                  r.Q.bus.emit("PcbEngine:invalidate");
                },
              },
            ]),
            t && Ke(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
      !(function (e) {
        ((e[(e.Voltage = 0)] = "Voltage"), (e[(e.Density = 1)] = "Density"));
      })(We || (We = {}));
      var Xe = n(66675);
      function Je(e) {
        return (
          (Je =
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
          Je(e)
        );
      }
      function $e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, et(r.key), r));
        }
      }
      function et(e) {
        var t = (function (e, t) {
          if ("object" != Je(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Je(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Je(t) ? t : t + "";
      }
      function tt(e, t, n) {
        return (
          (t = rt(t)),
          (function (e, t) {
            if (t && ("object" == Je(t) || "function" == typeof t)) return t;
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
            nt()
              ? Reflect.construct(t, n || [], rt(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function nt() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (nt = function () {
          return !!e;
        })();
      }
      function rt(e) {
        return (
          (rt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          rt(e)
        );
      }
      function it(e, t) {
        return (
          (it = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          it(e, t)
        );
      }
      var ot = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            tt(this, t)
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
              t && it(e, t));
          })(t, e),
          (n = t),
          (r = [
            { key: "setFrameBasedAnimation", value: function (e) {} },
            { key: "startAnimationOrigin", value: function (e, t) {} },
            { key: "startAnimationFit", value: function (e, t, n, r, i, o) {} },
            { key: "updateAnimation", value: function () {} },
          ]) && $e(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(Xe.Z);
      function at(e) {
        return (
          (at =
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
          at(e)
        );
      }
      function ct(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, st(r.key), r));
        }
      }
      function ut(e, t, n) {
        return (
          t && ct(e.prototype, t),
          n && ct(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function st(e) {
        var t = (function (e, t) {
          if ("object" != at(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != at(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == at(t) ? t : t + "";
      }
      var lt = ut(function e(t, n, r) {
        var i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : null,
          a =
            arguments.length > 5 && void 0 !== arguments[5]
              ? arguments[5]
              : null;
        (!(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.mesh_id = t),
          (this.material = n),
          (this.position = i || [0, 0, 0]),
          (this.rotation = o || [1, 1, 1]),
          (this.scale = a || [1, 1, 1]),
          "number" == typeof r
            ? ((this.angle = r), (this.matrix = []))
            : ((this.matrix = r), (this.angle = 0)));
      });
      function ft(e) {
        return (
          (ft =
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
          ft(e)
        );
      }
      function dt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, ht(r.key), r));
        }
      }
      function ht(e) {
        var t = (function (e, t) {
          if ("object" != ft(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != ft(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == ft(t) ? t : t + "";
      }
      function yt(e, t, n) {
        return (
          (t = mt(t)),
          (function (e, t) {
            if (t && ("object" == ft(t) || "function" == typeof t)) return t;
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
            pt()
              ? Reflect.construct(t, n || [], mt(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function pt() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (pt = function () {
          return !!e;
        })();
      }
      function vt() {
        return (
          (vt =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(e, t) && null !== (e = mt(e));
                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, t);
                    return i.get
                      ? i.get.call(arguments.length < 3 ? e : n)
                      : i.value;
                  }
                }),
          vt.apply(null, arguments)
        );
      }
      function mt(e) {
        return (
          (mt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          mt(e)
        );
      }
      function gt(e, t) {
        return (
          (gt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          gt(e, t)
        );
      }
      var bt = (function (e) {
        function t(e, n, r) {
          var i;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((i = yt(this, t, [
              e,
              [],
              [new G.Z(new Uint8Array([255, 255, 255, 255]), 0, !1, !1, !1)],
              void 0,
              void 0,
              n,
              r,
            ])).activeNodeItem = null),
            (i.animationController_ = new ot()),
            (i.viewportZoom_ = i.defZoom),
            (i.viewportCenter_ = [0, 0]),
            i.logger.LogInfo("Simulation scene successfully initialized."),
            i
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
              t && gt(e, t));
          })(t, e),
          (n = t),
          (r = [
            {
              key: "viewport",
              get: function () {
                return vt(mt(t.prototype), "viewport", this);
              },
            },
            {
              key: "renderPath",
              get: function () {
                return vt(mt(t.prototype), "renderPath", this);
              },
            },
            {
              key: "parentScene",
              get: function () {
                return vt(mt(t.prototype), "parentScene", this);
              },
            },
            {
              key: "viewportZoom",
              get: function () {
                return this.isRoot
                  ? this.viewportZoom_
                  : this.parentScene.viewportZoom;
              },
            },
            {
              key: "viewportCenter",
              get: function () {
                return this.isRoot
                  ? this.viewportCenter_
                  : this.parentScene.viewportCenter;
              },
            },
            {
              key: "animationController",
              get: function () {
                return this.animationController_;
              },
            },
            {
              key: "createRenderPath",
              value: function () {
                return this.scene.CreateRenderPath();
              },
            },
            {
              key: "addViewport",
              value: function (e) {
                return this.scene.AddViewport2D(e);
              },
            },
            {
              key: "clear",
              value: function () {
                this.tryClear();
              },
            },
            {
              key: "getZoom",
              value: function () {
                return this.viewport.GetZoom();
              },
            },
            {
              key: "renderScene",
              value: function () {
                if (this.renderPath.BeginRender()) {
                  var e = this.scene.GetRenderSmoother();
                  do {
                    (e.BeginRender(),
                      e.SelectViewport2D(this.viewport),
                      this.renderPath.SelectViewport2D(this.viewport),
                      this.renderPath.Render(this.rootNode),
                      e.EndRender());
                  } while (e.NeedRepeat());
                  this.renderPath.EndRender();
                }
              },
            },
            {
              key: "setCenterOffset",
              value: function (e, t) {
                this.viewport.SetCenter(this.viewportCenter);
              },
            },
            { key: "setSelection", value: function (e) {} },
            {
              key: "setZoom",
              value: function (e) {
                ((e = this.defZoom / e),
                  (this.viewportZoom_ = e),
                  this.viewport.SetZoom(e));
              },
            },
            {
              key: "zoomToFit",
              value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0.8,
                  r = this.renderOptions
                    .filter(function (e) {
                      return e.layerName !== q.Z.HighlightLayerName;
                    })
                    .map(function (e) {
                      return e.layer;
                    }),
                  i =
                    r.length > 0
                      ? r
                      : this.layers.map(function (e) {
                          return e.index;
                        }),
                  o = this.rootNode.GetBoxForLayers(i);
                (null == e && (e = [o[0], o[1], o[2]]),
                  null == t && (t = [o[3], o[4], o[5]]),
                  this.viewport.FitFixedView(e, t, n),
                  this.viewport.SetZoom(this.viewportZoom));
              },
            },
            {
              key: "setFitFixedView",
              value: function (e, t, n) {
                if ((n || (n = 0.8), null == e || null == t)) {
                  var r = this.renderOptions.map(function (e) {
                      return e.layer;
                    }),
                    i = this.rootNode.GetBoxForLayers(r);
                  (null == e && (e = [i[0], i[1], i[2]]),
                    null == t && (t = [i[3], i[4], i[5]]));
                }
                this.viewport.FitFixedView(e, t, n);
              },
            },
            {
              key: "updateSimulationMesh",
              value: function (e) {
                this.tryClear();
                var t = this.scene.AddMesh(e);
                this.activeMeshId = t;
                var n = new lt(
                  t,
                  0,
                  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  [0, 0, 0],
                  [0, 0, 1],
                  [1, 1, 1],
                );
                if (
                  ((this.activeNodeItem = this.rootNodeData.AddItem({
                    GetLayerGeometry: function () {
                      return [];
                    },
                    GetMeshParts: function () {
                      return [n];
                    },
                  })),
                  !this.activeNodeItem)
                )
                  throw new Error("RootNodeItem didn't add");
              },
            },
            {
              key: "viewportToWorld",
              value: function (e) {
                return this.viewport.ViewportToWorld(e);
              },
            },
            {
              key: "tryClear",
              value: function () {
                return (
                  !!this.activeMeshId &&
                  (this.activeNodeItem &&
                    this.rootNodeData.DeleteItem(this.activeNodeItem),
                  this.scene.DeleteMesh(this.activeMeshId),
                  (this.activeMeshId = void 0),
                  (this.activeNodeItem = null),
                  !0)
                );
              },
            },
          ]),
          r && dt(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(n(1518).Z);
      function wt(e) {
        return (
          (wt =
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
          wt(e)
        );
      }
      function St(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Lt(r.key), r));
        }
      }
      function Lt(e) {
        var t = (function (e, t) {
          if ("object" != wt(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != wt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == wt(t) ? t : t + "";
      }
      var kt = (function () {
          return (
            (e = function e(t, n, r) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.baseScene = t),
                (this.simulation = n),
                (this.selectionManager = r),
                (this.beforeRenderHandler = this.onBeforeRender.bind(this)),
                (this.renderHandler = this.onRender.bind(this)),
                (this.grayMaterialsApplied = !1),
                (this.subscribed = !1));
            }),
            (t = [
              {
                key: "deactivate",
                value: function () {
                  this.setNormalMaterials();
                },
              },
              {
                key: "setNormalMaterials",
                value: function () {
                  this.grayMaterialsApplied &&
                    this.materials &&
                    (this.baseScene.setMaterials(this.materials),
                    (this.grayMaterialsApplied = !1),
                    this.baseScene.setDirty(!0));
                },
              },
              {
                key: "startRendering",
                value: function () {
                  this.subscribed ||
                    ((this.subscribed = !0),
                    this.baseScene.on("beforeRender", this.beforeRenderHandler),
                    this.baseScene.on("rendered", this.renderHandler));
                },
              },
              {
                key: "stopRendering",
                value: function () {
                  this.subscribed &&
                    ((this.subscribed = !1),
                    this.baseScene.off(
                      "beforeRender",
                      this.beforeRenderHandler,
                    ),
                    this.baseScene.off("rendered", this.renderHandler));
                },
              },
              {
                key: "copyMaterials",
                value: function () {
                  this.grayMaterials ||
                    ((this.materials = this.baseScene.getMaterials()),
                    (this.grayMaterials = this.toGrayscaleMaterials(
                      this.materials,
                    )));
                },
              },
              {
                key: "onBeforeRender",
                value: function () {
                  (this.copyMaterials(), this.setGrayMaterials());
                },
              },
              {
                key: "onRender",
                value: function () {
                  this.simulation.render(!1);
                },
              },
              {
                key: "setGrayMaterials",
                value: function () {
                  this.subscribed &&
                    !this.grayMaterialsApplied &&
                    this.grayMaterials &&
                    (this.baseScene.setMaterials(this.grayMaterials),
                    (this.grayMaterialsApplied = !0),
                    this.baseScene.setDirty(!0));
                },
              },
              {
                key: "toGrayscaleMaterials",
                value: function (e) {
                  return e.map(function (e) {
                    var t = Fe.Z.toGrayscale(e.Diffuse);
                    return new G.Z(t, e.Hatching, e.Bordered, !1, !0);
                  });
                },
              },
            ]) && St(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        Pt = n(98681),
        Et = n(50971),
        Ot = n(43020),
        Dt = n(42024);
      function It(e) {
        return (
          (It =
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
          It(e)
        );
      }
      function xt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Nt(r.key), r));
        }
      }
      function Nt(e) {
        var t = (function (e, t) {
          if ("object" != It(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != It(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == It(t) ? t : t + "";
      }
      function Mt(e, t, n) {
        return (
          (t = Tt(t)),
          (function (e, t) {
            if (t && ("object" == It(t) || "function" == typeof t)) return t;
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
            jt()
              ? Reflect.construct(t, n || [], Tt(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function jt() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (jt = function () {
          return !!e;
        })();
      }
      function Tt(e) {
        return (
          (Tt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Tt(e)
        );
      }
      function Ct(e, t) {
        return (
          (Ct = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Ct(e, t)
        );
      }
      var _t = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((i = Mt(this, t, [
                e,
                [],
                [new G.Z(new Uint8Array([255, 255, 255, 255]), 0, !1, !1, !1)],
                void 0,
                void 0,
                n,
                r,
              ])).activeNodeItem = null),
              i.updatePerspectiveMatrix(),
              i.setZoom(0.4),
              i.logger.LogInfo("Simulation scene successfully initialized."),
              i
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
                t && Ct(e, t));
            })(t, e),
            (n = t),
            (r = [
              {
                key: "createRenderPath",
                value: function () {
                  return this.scene.CreateRenderPath();
                },
              },
              {
                key: "addViewport",
                value: function (e) {
                  return this.scene.AddViewport(e);
                },
              },
              {
                key: "getForward",
                value: function () {
                  return this.viewport.GetForward();
                },
              },
              {
                key: "getEye",
                value: function () {
                  return this.viewport.GetEye();
                },
              },
              {
                key: "getAt",
                value: function () {
                  return this.viewport.GetAt();
                },
              },
              {
                key: "getUp",
                value: function () {
                  return this.viewport.GetUp();
                },
              },
              {
                key: "getView",
                value: function () {
                  return this.viewport.GetView();
                },
              },
              {
                key: "getInverseView",
                value: function () {
                  return this.viewport.GetInverseView();
                },
              },
              {
                key: "clear",
                value: function () {
                  this.tryClear();
                },
              },
              {
                key: "getZoom",
                value: function () {
                  return this.viewportOffset;
                },
              },
              {
                key: "renderScene",
                value: function () {
                  if (this.renderPath.BeginRender()) {
                    var e = this.scene.GetRenderSmoother();
                    do {
                      (e.BeginRender(),
                        e.SelectViewport(this.viewport),
                        this.renderPath.SelectViewport(this.viewport),
                        this.renderPath.Render(this.rootNode),
                        e.EndRender());
                    } while (e.NeedRepeat());
                    this.renderPath.EndRender();
                  }
                },
              },
              {
                key: "setCenterOffset",
                value: function (e, t) {
                  var n = window.vec2,
                    r = window.vec3,
                    i = window.quat,
                    o = n.fromValues(e, t),
                    a = n.scale(n.create(), o, this.rotationSensitivity),
                    c = r.transformQuat(
                      r.create(),
                      r.fromValues(0, 1, 0),
                      this.viewportQuat,
                    );
                  r.normalize(c, c);
                  var u = i.setAxisAngle(i.create(), c, a[0]);
                  i.mul(this.viewportQuat, u, this.viewportQuat);
                  var s = r.transformQuat(
                    r.create(),
                    r.fromValues(1, 0, 0),
                    this.viewportQuat,
                  );
                  r.normalize(s, s);
                  var l = i.setAxisAngle(i.create(), s, a[1]);
                  (i.mul(this.viewportQuat, l, this.viewportQuat),
                    this.updateViewMatrix(),
                    this.emit("centerChanged", new Pt.Z(e, t)));
                },
              },
              { key: "setSelection", value: function (e) {} },
              {
                key: "setZoom",
                value: function (e) {
                  ((e = this.defZoom / e),
                    (this.viewportOffset = e),
                    this.updateViewMatrix());
                },
              },
              {
                key: "zoomToFit",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0.8;
                  if (null == e || null == t) {
                    var r = this.getRenderLayers(),
                      i = this.rootNode.GetBoxForLayers(r);
                    (null == e && (e = [i[0], i[1], i[2]]),
                      null == t && (t = [i[3], i[4], i[5]]));
                  }
                  if (1 != n) {
                    n /= this.getRelativeAspect(e, t);
                    var o = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                      a = (o[0] / n - o[0]) / 2,
                      c = (o[1] / n - o[1]) / 2,
                      u = (o[2] / n - o[2]) / 2;
                    ((e = [e[0] - a, e[1] - c, e[2] - u]),
                      (t = [t[0] + a, t[1] + c, t[2] + u]));
                  }
                  ((this.fitFixedView_ = {
                    boxMin: e,
                    boxMax: t,
                    fixedScale: 0.8,
                  }),
                    this.viewport.FitFixedView(e, t, 0.8),
                    this.emit("zoomToFitChanged", new Et.Z(e, t)));
                },
              },
              {
                key: "setFitFixedView",
                value: function (e, t, n) {
                  if ((n || (n = 0.8), null == e || null == t)) {
                    var r = this.renderOptions.map(function (e) {
                        return e.layer;
                      }),
                      i = this.rootNode.GetBoxForLayers(r);
                    (null == e && (e = [i[0], i[1], i[2]]),
                      null == t && (t = [i[3], i[4], i[5]]));
                  }
                  this.viewport.FitFixedView(e, t, n);
                },
              },
              {
                key: "updateSimulationMesh",
                value: function (e) {
                  this.tryClear();
                  var t = this.scene.AddMesh(e);
                  this.activeMeshId = t;
                  var n = new lt(
                    t,
                    0,
                    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                    [0, 0, 0],
                    [0, 0, 1],
                    [1, 1, 1],
                  );
                  if (
                    ((this.activeNodeItem = this.rootNodeData.AddItem({
                      GetLayerGeometry: function () {
                        return [];
                      },
                      GetMeshParts: function () {
                        return [n];
                      },
                    })),
                    !this.activeNodeItem)
                  )
                    throw new Error("RootNodeItem didn't add");
                },
              },
              {
                key: "tryClear",
                value: function () {
                  return (
                    !!this.activeMeshId &&
                    (this.activeNodeItem &&
                      this.rootNodeData.DeleteItem(this.activeNodeItem),
                    this.scene.DeleteMesh(this.activeMeshId),
                    (this.activeMeshId = void 0),
                    (this.activeNodeItem = null),
                    !0)
                  );
                },
              },
              {
                key: "getRenderLayers",
                value: function () {
                  var e = {};
                  return (
                    this.layers.forEach(function (t, n) {
                      return (e[n] = t.show3d);
                    }),
                    this.renderOptions
                      .filter(function (t) {
                        return e[t.layer];
                      })
                      .map(function (e) {
                        return e.layer;
                      })
                  );
                },
              },
              {
                key: "updateViewMatrix",
                value: function () {
                  var e = window.vec3,
                    t = e.transformQuat(
                      [0, 0, 0],
                      [0, 0, 1],
                      this.viewportQuat,
                    );
                  e.scale(t, t, this.viewportOffset);
                  var n = this.viewportAt,
                    r = e.transformQuat(
                      [0, 0, 0],
                      [0, 1, 0],
                      this.viewportQuat,
                    ),
                    i = e.sub([0, 0, 0], n, t);
                  this.viewport.ViewSetLookAt(i, n, r);
                },
              },
              {
                key: "updatePerspectiveMatrix",
                value: function () {
                  var e = (Dt.Z.ViewportFov * Math.PI) / 180,
                    t = this.canvasWidth / this.canvasHeight;
                  (this.viewport.ProjectionSetPerspective(
                    e,
                    t,
                    this.viewportNear,
                    this.viewportFar,
                  ),
                    this.scene.Resize(this.canvasWidth, this.canvasHeight));
                },
              },
              {
                key: "getRelativeAspect",
                value: function (e, t) {
                  var n = window.vec2,
                    r = n.sub([0, 0], t, e);
                  n.scale(r, r, 0.5);
                  var i = this.viewport.GetRectangle(),
                    o = r[0] / r[1],
                    a = i[2] / i[3],
                    c = o > a ? (o / a) * 1.2 : 1;
                  return (c > 2 && (c = 1), c);
                },
              },
            ]),
            r && xt(n.prototype, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, r;
        })(Ot.Z),
        Rt = n(67674),
        Vt = n(51275),
        At = n.n(Vt);
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
      function Gt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Zt(r.key), r));
        }
      }
      function Ft(e, t, n) {
        return (
          t && Gt(e.prototype, t),
          n && Gt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function Zt(e) {
        var t = (function (e, t) {
          if ("object" != Bt(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Bt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Bt(t) ? t : t + "";
      }
      var Ut = Ft(function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
        (!(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.GetVertices = function () {
            return this.vertices;
          }),
          (this.GetIndices = function () {
            return this.indices;
          }),
          (this.vertices = t || []),
          (this.indices = n || []));
      });
      function Ht(e) {
        return (
          (Ht =
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
          Ht(e)
        );
      }
      function Kt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Wt(r.key), r));
        }
      }
      function Qt(e, t, n) {
        return (
          t && Kt(e.prototype, t),
          n && Kt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function Wt(e) {
        var t = (function (e, t) {
          if ("object" != Ht(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Ht(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Ht(t) ? t : t + "";
      }
      var qt = Qt(function e(t, n, r, i) {
        (!(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.position = t),
          (this.normal = n),
          (this.color = r),
          (this.tex_coord = i));
      });
      function zt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== t);
                    u = !0
                  );
              } catch (e) {
                ((s = !0), (i = e));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return c;
            }
          })(e, t) ||
          Jt(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Yt(e) {
        return (
          (Yt =
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
          Yt(e)
        );
      }
      function Xt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return $t(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          Jt(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Jt(e, t) {
        if (e) {
          if ("string" == typeof e) return $t(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? $t(e, t)
                : void 0
          );
        }
      }
      function $t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function en(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, tn(r.key), r));
        }
      }
      function tn(e) {
        var t = (function (e, t) {
          if ("object" != Yt(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Yt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Yt(t) ? t : t + "";
      }
      function nn(e, t, n) {
        return (
          (t = on(t)),
          (function (e, t) {
            if (t && ("object" == Yt(t) || "function" == typeof t)) return t;
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
            rn()
              ? Reflect.construct(t, n || [], on(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function rn() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (rn = function () {
          return !!e;
        })();
      }
      function on(e) {
        return (
          (on = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          on(e)
        );
      }
      function an(e, t) {
        return (
          (an = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          an(e, t)
        );
      }
      var cn = (function (e) {
          function t(e) {
            var n;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((n = nn(this, t)).apiHeaders = e),
              (n.cache = {}),
              (n.currentViewType = We.Voltage),
              (n.isSimulationEnabled = !1),
              (n.logger = r.Q.createLogger("SimulationManager")),
              (n.probeEnabled = !1),
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
                t && an(e, t));
            })(t, e),
            (n = t),
            (i = [
              {
                key: "simulationEnabled",
                get: function () {
                  return this.isSimulationEnabled;
                },
              },
              {
                key: "createSimulationScene2d",
                value: function (e, t) {
                  var n;
                  if (
                    (null === (n = this.scene2D) || void 0 === n
                      ? void 0
                      : n.baseScene) === e
                  )
                    return this.scene2D.simulation;
                  var r = new bt(null, e, "PCB_2D_Simulation_Scene");
                  return (
                    (this.scene2D = new kt(e, r, t)),
                    this.tryShowSimulation(),
                    r
                  );
                },
              },
              {
                key: "createSimulationScene3d",
                value: function (e, t) {
                  var n;
                  if (
                    (null === (n = this.scene3D) || void 0 === n
                      ? void 0
                      : n.baseScene) === e
                  )
                    return this.scene3D.simulation;
                  var r = new _t(null, e, "PCB_3D_Simulation_Scene");
                  return (
                    (this.scene3D = new kt(e, r, t)),
                    this.tryShowSimulation(),
                    r
                  );
                },
              },
              {
                key: "changeRenderMode",
                value: function (e) {
                  var t, n, r, i;
                  if (this.currentRenderMode && this.currentRenderMode !== e) {
                    switch (e) {
                      case M.J.Render2D:
                        (null === (t = this.scene3D) ||
                          void 0 === t ||
                          t.setNormalMaterials(),
                          null === (n = this.scene2D) ||
                            void 0 === n ||
                            n.baseScene.render(!1));
                        break;
                      case M.J.Render3D:
                        (null === (r = this.scene2D) ||
                          void 0 === r ||
                          r.setNormalMaterials(),
                          null === (i = this.scene3D) ||
                            void 0 === i ||
                            i.baseScene.render(!1));
                    }
                    this.currentRenderMode = e;
                  } else this.currentRenderMode = e;
                },
              },
              {
                key: "getSimulationValue2d",
                value: function (e) {
                  if (!this.probeEnabled) return null;
                  var t = this.scene2D,
                    n = this.currentSimulationMesh;
                  if (!t || !n) return null;
                  var r = t.simulation.viewportToWorld(e),
                    i = this.getValueAtXY(n, r);
                  return i
                    ? {
                        x: e[0],
                        y: e[1],
                        value: i,
                        units: this.getSimulationUnits(),
                      }
                    : null;
                },
              },
              {
                key: "getUniqueLayerNames",
                value: function (e, t) {
                  if (
                    t &&
                    e.Meshes.find(function (e) {
                      return e.Layer.toUpperCase() == t;
                    })
                  )
                    return [t];
                  this.logger.LogInfo(
                    "Preferred layer ".concat(
                      t,
                      " not found - selected first default layer",
                    ),
                  );
                  var n = e.Meshes.map(function (e) {
                    return e.Layer;
                  });
                  return Xt(new Set(n));
                },
              },
              {
                key: "getUniqueNetNames",
                value: function (e, t) {
                  var n = e.Meshes;
                  t &&
                    0 ===
                      (n = n.filter(function (e) {
                        return e.Layer.toUpperCase() == t;
                      })).length &&
                    ((n = e.Meshes),
                    this.logger.LogInfo(
                      "Nets for layer ".concat(
                        t,
                        " not found - selected all nets",
                      ),
                    ));
                  var r = n.map(function (e) {
                    return e.Net;
                  });
                  return Xt(new Set(r));
                },
              },
              {
                key: "hideSimulation",
                value: function () {
                  var e,
                    t = this.scene3D;
                  t &&
                    (t.stopRendering(),
                    t.simulation.clear(),
                    t.setNormalMaterials(),
                    this.currentRenderMode == M.J.Render3D &&
                      t.baseScene.render(!1));
                  var n = this.scene2D;
                  (n &&
                    (n.stopRendering(),
                    n.simulation.clear(),
                    n.setNormalMaterials(),
                    this.currentRenderMode == M.J.Render2D &&
                      n.baseScene.render(!1)),
                    null === (e = this.canvasControl) ||
                      void 0 === e ||
                      e.invalidate(),
                    (this.isSimulationEnabled = !1));
                },
              },
              {
                key: "loadSimulationData",
                value: function (e) {
                  var t = this;
                  return (
                    this.logger.LogDebug(
                      "Load document PDN simulation: ".concat(e),
                    ),
                    new Promise(function (n, r) {
                      fetch(e, { method: "GET", headers: t.apiHeaders })
                        .then(function (e) {
                          if (!e.ok)
                            throw new Error(
                              "Document simulation loading error. [".concat(
                                e.statusText,
                                "]",
                              ),
                            );
                          return e.json();
                        })
                        .then(function (r) {
                          if (!r || "object" !== Yt(r))
                            throw new Error("Simulation PDN data is wrong");
                          (r.BoardOriginX
                            ? ((r.BoardOriginX = 0),
                              (r.BoardOriginY = 0),
                              (r.useOriginPoint = !0))
                            : (r.useOriginPoint = !1),
                            t.logger.LogDebug(
                              "Success load document PDN simulation: ".concat(
                                e,
                              ),
                            ),
                            (r.kind = "PDNAnalyzer"),
                            n(r));
                        })
                        .catch(function (e) {
                          return r(e);
                        });
                    })
                  );
                },
              },
              {
                key: "loadSimulationAnsysData",
                value: function (e) {
                  var t = this;
                  return (
                    this.logger.LogDebug(
                      "Load Ansys document with simulation: ".concat(e),
                    ),
                    new Promise(function (n, r) {
                      fetch(e, { method: "GET", headers: t.apiHeaders })
                        .then(function (e) {
                          if (!e.ok)
                            throw new Error(
                              "Ansys document with simulation loading error. [".concat(
                                e.statusText,
                                "]",
                              ),
                            );
                          return e.blob();
                        })
                        .then(At().loadAsync)
                        .then(function (e) {
                          for (var t in e.files)
                            if (t.endsWith(".json"))
                              return e.file(t).async("string");
                          throw new Error(
                            "Not found json file with simulation data in Ansys document",
                          );
                        })
                        .then(function (r) {
                          var i = JSON.parse(r);
                          if (!i || "object" !== Yt(i))
                            throw new Error("Simulation data is wrong");
                          (i.BoardOriginX
                            ? ((i.BoardOriginX = 0),
                              (i.BoardOriginY = 0),
                              (i.useOriginPoint = !0))
                            : (i.useOriginPoint = !1),
                            t.logger.LogDebug(
                              "Success load document simulation: ".concat(e),
                            ),
                            (i.kind = "Signal Integrity"),
                            n(i));
                        })
                        .catch(function (e) {
                          return r(e);
                        });
                    })
                  );
                },
              },
              {
                key: "showSimulationData",
                value: function (e, t, n, r) {
                  ((this.isSimulationEnabled = !0),
                    (r = r
                      ? r.toUpperCase().replace(" ", "_")
                      : this.currentLayer
                        ? this.currentLayer
                        : this.getUniqueLayerNames(
                            e,
                            "TOP_LAYER",
                          )[0].toUpperCase()),
                    n ||
                      (n = this.currentNet
                        ? this.currentNet
                        : this.getUniqueNetNames(e, r)[0].toUpperCase()),
                    (this.currentNet = n),
                    (this.currentLayer = r));
                  var i = ""
                      .concat(t, "-")
                      .concat(r, "-")
                      .concat(n, "-")
                      .concat(this.currentViewType),
                    o = this.cache[i],
                    a = e.Meshes.find(function (e) {
                      return (
                        e.Net.toUpperCase() === n && e.Layer.toUpperCase() === r
                      );
                    });
                  if (!a)
                    return (
                      this.logger.LogDebug(
                        "Mesh for '".concat(i, "' not found"),
                      ),
                      (this.currentRenderMesh = void 0),
                      void this.clearSimulationMesh()
                    );
                  (e.useOriginPoint
                    ? this.overrideOriginPoint(e.BoardOriginX, e.BoardOriginY)
                    : this.restoreOriginPoint(),
                    o
                      ? this.logger.LogDebug(
                          "Render mesh for '".concat(i, "' already exists"),
                        )
                      : ((o = this.buildRenderMesh(a)),
                        this.logger.LogInfo(
                          "Render mesh for '".concat(i, "' has been created"),
                        ),
                        (this.cache[i] = o)),
                    (this.currentRenderMesh = o),
                    (this.currentSimulationMesh = a),
                    this.tryShowSimulation());
                },
              },
              {
                key: "selectSimulationViewOption",
                value: function (e) {
                  switch (e) {
                    case "Voltage":
                      this.currentViewType = We.Voltage;
                      break;
                    case "Current Density":
                      this.currentViewType = We.Density;
                      break;
                    default:
                      throw new Error(
                        "Simulation view option ".concat(
                          e,
                          " is not supported",
                        ),
                      );
                  }
                  return !0;
                },
              },
              {
                key: "startRendering",
                value: function () {
                  (this.scene2D && this.scene2D.startRendering(),
                    this.scene3D && this.scene3D.startRendering());
                },
              },
              {
                key: "useOriginPoint",
                value: function (e, t) {
                  ((this.pcbOriginPoint = [e, t, 0]),
                    (this.originPoint = this.convertToInches(
                      this.pcbOriginPoint,
                    )));
                },
              },
              {
                key: "useCanvasControl",
                value: function (e) {
                  this.canvasControl = e;
                },
              },
              {
                key: "buildRenderMesh",
                value: function (e) {
                  for (var t, n = [], r = e.Patches, i = 0; i < r.length; i++) {
                    var o = r[i];
                    (n.push(o[0] - 1), n.push(o[1] - 1), n.push(o[2] - 1));
                  }
                  for (
                    var a = zt(
                        null !== (t = this.originPoint) && void 0 !== t
                          ? t
                          : [0, 0, 0],
                        3,
                      ),
                      c = a[0],
                      u = a[1],
                      s = a[2],
                      l = zt(this.getMeshValueRange(e), 2),
                      f = l[0],
                      d = l[1],
                      h = e.Vertices,
                      y = this.getSimulationDrawData(e),
                      p = [0, 0, -1],
                      v = new Array(h.length),
                      m = 0;
                    m < h.length;
                    m++
                  ) {
                    var g = this.convertToInches(h[m]);
                    v[m] = new qt(
                      [g[0] + c, g[1] + u, g[2] + s],
                      p,
                      this.buildColor(y[m], f, d),
                      [0, 0],
                    );
                  }
                  return new Ut(v, n);
                },
              },
              {
                key: "buildColor",
                value: function (e, t, n) {
                  var r = this.logNormalize(e, t, n),
                    i = 1;
                  r < 0 ? ((r = 0), (i = 0)) : r > 1 && ((r = 1), (i = 0));
                  var o = 0.66 * (1 - r);
                  return this.convertHsvToRgb(o, 1, 1, i);
                },
              },
              {
                key: "clearSimulationMesh",
                value: function () {
                  var e = this.scene2D;
                  e && e.simulation.clear();
                  var t = this.scene3D;
                  t && t.simulation.clear();
                },
              },
              {
                key: "convertToInches",
                value: function (e) {
                  var t = 1e-6;
                  return [e[0] * t, e[1] * t, e[2] * t];
                },
              },
              {
                key: "convertHsvToRgb",
                value: function (e, t, n, r) {
                  var i = 0,
                    o = 0,
                    a = 0,
                    c = Math.floor(6 * e),
                    u = 6 * e - c,
                    s = n * (1 - t),
                    l = n * (1 - u * t),
                    f = n * (1 - (1 - u) * t);
                  switch (c % 6) {
                    case 0:
                      ((i = n), (o = f), (a = s));
                      break;
                    case 1:
                      ((i = l), (o = n), (a = s));
                      break;
                    case 2:
                      ((i = s), (o = n), (a = f));
                      break;
                    case 3:
                      ((i = s), (o = l), (a = n));
                      break;
                    case 4:
                      ((i = f), (o = s), (a = n));
                      break;
                    case 5:
                      ((i = n), (o = s), (a = l));
                  }
                  return new Uint8Array([
                    Math.round(255 * i),
                    Math.round(255 * o),
                    Math.round(255 * a),
                    Math.round(255 * r),
                  ]);
                },
              },
              {
                key: "getValueAtXY",
                value: function (e, t) {
                  for (
                    var n,
                      r = zt(
                        null !== (n = this.originPoint) && void 0 !== n
                          ? n
                          : [0, 0, 0],
                        3,
                      ),
                      i = r[0],
                      o = r[1],
                      a = r[2],
                      c = e.Patches,
                      u = this.getSimulationDrawData(e),
                      s = e.Vertices,
                      l = 0;
                    l < c.length;
                    l++
                  ) {
                    var f = c[l],
                      d = f[0] - 1,
                      h = f[1] - 1,
                      y = f[2] - 1,
                      p = this.convertToInches(s[d]),
                      v = this.convertToInches(s[h]),
                      m = this.convertToInches(s[y]),
                      g = this.ptInTriangle_UVW(
                        t,
                        [p[0] + i, p[1] + o, p[2] + a],
                        [v[0] + i, v[1] + o, v[2] + a],
                        [m[0] + i, m[1] + o, m[2] + a],
                      );
                    if (g) return u[d] * g[0] + u[h] * g[1] + u[y] * g[2];
                  }
                },
              },
              {
                key: "getMeshValueRange",
                value: function (e) {
                  for (
                    var t = 1e9,
                      n = -1e9,
                      r = this.getSimulationDrawData(e),
                      i = 0;
                    i < r.length;
                    i++
                  ) {
                    var o = r[i];
                    (o < t && (t = o), o > n && (n = o));
                  }
                  return (t === n && (n += 1), [t, n]);
                },
              },
              {
                key: "getSimulationDrawData",
                value: function (e) {
                  switch (
                    this.currentViewType ? this.currentViewType : We.Voltage
                  ) {
                    case We.Voltage:
                      return e.Voltage;
                    case We.Density:
                      return e.CurrentDensity;
                  }
                },
              },
              {
                key: "getSimulationUnits",
                value: function () {
                  switch (
                    this.currentViewType ? this.currentViewType : We.Voltage
                  ) {
                    case We.Voltage:
                      return Rt.wz.voltage;
                    case We.Density:
                      return Rt.wz.currentDensity;
                  }
                },
              },
              {
                key: "overrideOriginPoint",
                value: function (e, t) {
                  this.originPoint = [e, t, 0];
                },
              },
              {
                key: "linearNormalize",
                value: function (e, t, n) {
                  return n - t < 5e-324 ? 1 : (e - t) / (n - t);
                },
              },
              {
                key: "logNormalize",
                value: function (e, t, n) {
                  return n - t < 5e-324
                    ? 1
                    : n - t < 1e3
                      ? this.linearNormalize(e, t, n)
                      : (t < 0 && ((e += -t), (n += -t), (t = 0)),
                        t < 1 && ((e += 1), (t += 1), (n += 1)),
                        (Math.log10(e) - Math.log10(t)) /
                          (Math.log10(n) - Math.log10(t)));
                },
              },
              {
                key: "ptInTriangle_UVW",
                value: function (e, t, n, r) {
                  var i = t[0],
                    o = t[1],
                    a = n[0] - i,
                    c = n[1] - o,
                    u = r[0] - i,
                    s = r[1] - o,
                    l = e[0] - i,
                    f = e[1] - o,
                    d = a * s - u * c;
                  if (0 == d) return [];
                  var h = (l * s - u * f) / d;
                  if (!(h < 0 || h > 1)) {
                    var y = (a * f - l * c) / d;
                    if (!(y < 0 || y > 1)) {
                      var p = 1 - h - y;
                      if (!(p < 0 || p > 1)) return [p, h, y];
                    }
                  }
                },
              },
              {
                key: "restoreOriginPoint",
                value: function () {
                  this.pcbOriginPoint
                    ? (this.originPoint = this.convertToInches([
                        this.pcbOriginPoint[0],
                        this.pcbOriginPoint[1],
                        0,
                      ]))
                    : (this.originPoint = this.convertToInches([0, 0, 0]));
                },
              },
              {
                key: "tryShowSimulation",
                value: function () {
                  var e,
                    t = this.currentRenderMesh;
                  if (!t) return !1;
                  var n = this.scene2D;
                  n &&
                    (n.selectionManager.clearSelection(!1),
                    n.simulation.updateSimulationMesh(t));
                  var r = this.scene3D;
                  return (
                    r &&
                      (r.selectionManager.clearSelection(!1),
                      r.simulation.updateSimulationMesh(t)),
                    null === (e = this.canvasControl) ||
                      void 0 === e ||
                      e.invalidate(),
                    this.emit("SHOW"),
                    !0
                  );
                },
              },
            ]),
            i && en(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(Xe.Z),
        un = n(7414),
        sn = n(6660),
        ln = n(43772),
        fn = n(22021),
        dn = n(84619);
      function hn(e) {
        return (
          (hn =
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
          hn(e)
        );
      }
      function yn(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return pn(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? pn(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
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
          c = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((a = e.done), e);
          },
          e: function (e) {
            ((c = !0), (o = e));
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function pn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function vn() {
        vn = function () {
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
          c = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(e, t, n) {
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
          s({}, "");
        } catch (e) {
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var o = t && t.prototype instanceof m ? t : m,
            a = Object.create(o.prototype),
            c = new N(r || []);
          return (i(a, "_invoke", { value: O(e, n, c) }), a);
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var d = "suspendedStart",
          h = "suspendedYield",
          y = "executing",
          p = "completed",
          v = {};
        function m() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          L = S && S(S(M([])));
        L && L !== n && r.call(L, a) && (w = L);
        var k = (b.prototype = m.prototype = Object.create(w));
        function P(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(i, o, a, c) {
            var u = f(e[i], e, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == hn(l) && r.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      n("next", e, a, c);
                    },
                    function (e) {
                      n("throw", e, a, c);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return n("throw", e, a, c);
                    },
                  );
            }
            c(u.arg);
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
          var i = d;
          return function (o, a) {
            if (i === y) throw Error("Generator is already running");
            if (i === p) {
              if ("throw" === o) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = D(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === d) throw ((i = p), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = y;
              var s = f(t, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? p : h), s.arg === v)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = p), (r.method = "throw"), (r.arg = s.arg));
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
              v
            );
          var o = f(i, t.iterator, n.arg);
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
        function I(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function x(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function N(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(I, this),
            this.reset(!0));
        }
        function M(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < t.length; )
                    if (r.call(t, i))
                      return ((n.value = t[i]), (n.done = !1), n);
                  return ((n.value = e), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError(hn(t) + " is not iterable");
        }
        return (
          (g.prototype = b),
          i(k, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = s(b, u, "GeneratorFunction")),
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
                : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(k)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          P(E.prototype),
          s(E.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new E(l(e, n, r, i), o);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          P(k),
          s(k, u, "Generator"),
          s(k, a, function () {
            return this;
          }),
          s(k, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return ((e.value = r), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (t.values = M),
          (N.prototype = {
            constructor: N,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(x),
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
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = e)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
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
                  return (this.complete(n.completion, n.afterLoc), x(n), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    x(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: M(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function mn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, gn(r.key), r));
        }
      }
      function gn(e) {
        var t = (function (e, t) {
          if ("object" != hn(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != hn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == hn(t) ? t : t + "";
      }
      var bn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, c);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        wn = (function () {
          return (
            (e = function e() {
              var t = this;
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.currentDocumentIndex = -1),
                (this.documents = []),
                (this.logger = r.Q.createLogger("PcbEngine")),
                (this.workspace = null),
                (this._attachMode = !1),
                (this._enabled = !1),
                (this.resetView = function () {
                  t.pcbRenderer &&
                    (t.pcbRenderer.zoomToFit(500),
                    t.canvasControl.invalidate(),
                    r.Q.bus.emit("PcbEngine:resetDocumentView", {
                      type: "reset",
                    }),
                    t.pcbRenderer.emitDocumentLocation2D());
                }),
                (this.engineFsm = new L(
                  {
                    doSetup: this.doSetup.bind(this),
                    doInit: this.doInit.bind(this),
                    doLoad: this.doLoad.bind(this),
                    doRender: this.doRender.bind(this),
                    doShow: this.doShow.bind(this),
                  },
                  this.logger,
                )),
                (this.layerFactory = new Be()),
                (this.pcbLoaded = !1),
                (this.simulationManager = new cn(r.Q.apiHeaders)),
                this.engineFsm.once("SETUP_COMPLETED", function () {
                  try {
                    var e = t.allDocuments.find(function (e) {
                      return e.isMain;
                    });
                    if (!e) return;
                    var n = ln.q.instance.metadata.pcbDocuments.find(
                      function (t) {
                        return t.id === e.altiumDesignerId;
                      },
                    );
                    if (!n) return;
                    t.simulationManager.useOriginPoint(n.originX, n.originY);
                  } catch (e) {
                    t.logger.LogError(
                      "Init simulation manager origin point",
                      e,
                    );
                  }
                }),
                this.engineFsm.on("SETUP", function () {
                  return t.logger.LogDebug(t.engineFsm.getState());
                }),
                this.engineFsm.on("SETUP_COMPLETED", function () {
                  return t.logger.LogDebug(t.engineFsm.getState());
                }),
                this.engineFsm.on("INIT", function () {
                  return t.logger.LogDebug(t.engineFsm.getState());
                }),
                this.engineFsm.on("INIT_COMPLETED", function () {
                  return t.logger.LogDebug(t.engineFsm.getState());
                }),
                this.engineFsm.on("RENDER", function () {
                  return t.logger.LogDebug(t.engineFsm.getState());
                }),
                this.engineFsm.on("RENDER_COMPLETED", function () {
                  return t.logger.LogDebug(t.engineFsm.getState());
                }),
                this.engineFsm.on("CRASHED", function (e) {
                  var n, r, i;
                  return t.logger.LogDebug(
                    t.engineFsm.getState() +
                      " with error " +
                      (null !==
                        (i =
                          null !==
                            (r =
                              null === (n = e.error) || void 0 === n
                                ? void 0
                                : n.message) && void 0 !== r
                            ? r
                            : e.error) && void 0 !== i
                        ? i
                        : e),
                  );
                }),
                this.engineFsm.on("SHOW", function () {
                  return t.logger.LogDebug(
                    t.engineFsm.getState() + " for render mode " + t.renderMode,
                  );
                }),
                this.engineFsm.on("#Transition", function () {
                  return t.logger.LogInfo(
                    "#Transition from "
                      .concat(t.engineFsm.prevstate, " to ")
                      .concat(t.engineFsm.getState()),
                  );
                }),
                (this.selectionItemsObserver = new k.OQ(this)));
            }),
            (t = [
              {
                key: "pcbRenderer",
                get: function () {
                  var e;
                  return null === (e = this.activeDocument) || void 0 === e
                    ? void 0
                    : e.renderer;
                },
              },
              {
                key: "enabled",
                get: function () {
                  return this._enabled;
                },
              },
              {
                key: "name",
                get: function () {
                  return "PcbEngine";
                },
              },
              {
                key: "comment",
                get: function () {
                  return "PCB documents handler engine";
                },
              },
              {
                key: "dependencies",
                get: function () {
                  return ["graphite.engine", "project"];
                },
              },
              {
                key: "metaInfo",
                get: function () {
                  return this;
                },
              },
              {
                key: "events",
                get: function () {
                  return [
                    "PcbEngine:documentShowing",
                    "PcbEngine:progress",
                    "PcbEngine:documentChanged",
                    "PcbEngine:documentShown",
                    "LayerManager:changedLayers",
                    "PcbEngine:flipped",
                    "PcbEngine:layerManagerCreated",
                    "PcbEngine:select",
                    "PcbEngine:clearSelection",
                    "PcbEngine:selectNodes",
                    "PcbEngine:highlightNodes",
                    "PcbEngine:highlight",
                    "PcbEngine:documents",
                    "PcbEngine:showDocument",
                    "PcbEngine:enableSelection",
                    "PcbEngine:rendererCreated",
                    "PcbEngine:initScenes",
                    "PcbEngine:changedRenderMode",
                    "PcbEngine:invalidate",
                    "PcbEngine:fps",
                    "PcbEngine:simulationLoaded",
                    "PcbEngine:simulationMouseData",
                    "PcbEngine:renderTime",
                    "PcbEngine:documentMove",
                    "PcbEngine:documentZoom",
                    "PcbEngine:resetDocumentView",
                    "PcbEngine:documentClick",
                    "PcbEngine:renderDocumentData",
                    "PcbEngine:documentLocation",
                    "PcbEngine:on3DBoardDidRotate",
                    "PcbEngine:onSetDocumentLocation",
                    "PcbEngine:recoveryLayers",
                    "PcbEngine:updateLayers",
                    "PcbEngine:resetLayersToDefault",
                    "PcbEngine:toggleObject",
                    "PcbEngine:toggleObjectVariant",
                    "PcbEngine:listObjectIds",
                    "PcbEngine:toggleUnrotedNet",
                    "PcbEngine:animationFinished",
                    "PcbEngine:foldStateChanged",
                    "PcbEngine:setPadAppearance",
                    "PcbEngine:clearPadAppearance",
                  ];
                },
              },
              {
                key: "activeDocumentIndex",
                get: function () {
                  return this.currentDocumentIndex;
                },
              },
              {
                key: "allDocuments",
                get: function () {
                  return this.documents;
                },
              },
              {
                key: "layerManager",
                get: function () {
                  return this.layerManager_;
                },
              },
              {
                key: "renderMode",
                get: function () {
                  return this.renderMode_;
                },
              },
              {
                key: "activeDocument",
                get: function () {
                  var e;
                  return 0 ==
                    (null === (e = this.documents) || void 0 === e
                      ? void 0
                      : e.length) ||
                    this.activeDocumentIndex > this.documents.length
                    ? null
                    : this.documents[this.activeDocumentIndex];
                },
              },
              {
                key: "viewShown",
                get: function () {
                  return !!this.workspace;
                },
              },
              {
                key: "attachMode",
                get: function () {
                  return this._attachMode;
                },
              },
              {
                key: "setAttachMode",
                value: function (e) {
                  this._attachMode = e;
                },
              },
              {
                key: "setup",
                value: function (e) {
                  return (this.engineFsm.goToSetup(e), Promise.resolve());
                },
              },
              {
                key: "changeProbeState",
                value: function (e) {
                  this.simulationManager.probeEnabled = e;
                },
              },
              {
                key: "activateDocumentById",
                value: function (e) {
                  return bn(
                    this,
                    void 0,
                    void 0,
                    vn().mark(function t() {
                      var n;
                      return vn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((t.prev = 0),
                                  (t.t0 = "SETUP" == this.engineFsm.getState()),
                                  !t.t0)
                                ) {
                                  t.next = 5;
                                  break;
                                }
                                return (
                                  (t.next = 5),
                                  this.engineFsm.waitForComplete()
                                );
                              case 5:
                                t.next = 10;
                                break;
                              case 7:
                                ((t.prev = 7),
                                  (t.t1 = t.catch(0)),
                                  this.logger.LogError(
                                    "Activate document error ".concat(e),
                                    t.t1,
                                  ));
                              case 10:
                                if (
                                  ((n = this.documents.find(function (t) {
                                    return t.id === e;
                                  })),
                                  (t.t2 = n),
                                  !t.t2)
                                ) {
                                  t.next = 15;
                                  break;
                                }
                                return (
                                  (t.next = 15),
                                  this.activateDocument(n)
                                );
                              case 15:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 7]],
                      );
                    }),
                  );
                },
              },
              {
                key: "activateDocument",
                value: function (e) {
                  return bn(
                    this,
                    void 0,
                    void 0,
                    vn().mark(function t() {
                      var n, r, i;
                      return vn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (e) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                if (!((r = this.documents.indexOf(e)) < 0)) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt("return");
                              case 5:
                                if (this.activeDocumentIndex === r) {
                                  t.next = 18;
                                  break;
                                }
                                if (
                                  ((i =
                                    this.documents[this.activeDocumentIndex]) &&
                                    ("Rendered" === i.state &&
                                      (i.state = "Loaded"),
                                    null === (n = i.onReady) ||
                                      void 0 === n ||
                                      n.call(this),
                                    (i.onReady = void 0),
                                    ["SHOW", "RENDER_COMPLETED"].includes(
                                      this.engineFsm.getState(),
                                    ) &&
                                      (this.canvasControl.saveRenderState(),
                                      this.selectionItemsObserver.clearRenderMode())),
                                  (this.currentDocumentIndex = r),
                                  !this.workspace)
                                ) {
                                  t.next = 18;
                                  break;
                                }
                                return (
                                  (t.prev = 10),
                                  (t.next = 13),
                                  this.showView(
                                    this.workspace,
                                    this.renderMode,
                                    new fn.Z(),
                                  )
                                );
                              case 13:
                                t.next = 18;
                                break;
                              case 15:
                                ((t.prev = 15),
                                  (t.t0 = t.catch(10)),
                                  this.logger.LogError(
                                    "Activate document error.",
                                    t.t0,
                                  ));
                              case 18:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[10, 15]],
                      );
                    }),
                  );
                },
              },
              {
                key: "showView",
                value: function (e, t, n) {
                  return bn(
                    this,
                    void 0,
                    void 0,
                    vn().mark(function r() {
                      var i,
                        o,
                        a,
                        c,
                        u = this;
                      return vn().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (
                                  ((this.renderMode_ = t),
                                  (o = this.activeDocument))
                                ) {
                                  r.next = 5;
                                  break;
                                }
                                return (
                                  window.__CORE__.bus.emit(
                                    "PcbEngine:documentShown",
                                    null,
                                    new Error("Any document has nod found"),
                                  ),
                                  r.abrupt("return")
                                );
                              case 5:
                                return (
                                  (a = function (e) {
                                    if (
                                      (n.throwIfCancellationRequested(),
                                      null == e || e.call(u),
                                      o.errorState)
                                    )
                                      throw o.errorState;
                                  }),
                                  (r.prev = 6),
                                  (o.errorState = null),
                                  window.__CORE__.bus.emit(
                                    "PcbEngine:documentShowing",
                                    o,
                                  ),
                                  "Rendered" !== o.state &&
                                    ((o.renderer = void 0),
                                    null === (i = this.canvasControl) ||
                                      void 0 === i ||
                                      i.destroyRenderer()),
                                  this.cancellationToken &&
                                    (this.cancellationToken.isCancellationRequested =
                                      !0),
                                  (this.cancellationToken = n),
                                  (this.workspace = e),
                                  (c = this.engineFsm),
                                  (r.next = 16),
                                  c.goToInit()
                                );
                              case 16:
                                return (
                                  a(),
                                  (r.next = 19),
                                  c.waitForComplete()
                                );
                              case 19:
                                if ((a(), "Progress" !== o.state)) {
                                  r.next = 25;
                                  break;
                                }
                                return (
                                  window.__CORE__.bus.emit(
                                    "PcbEngine:progress",
                                    o,
                                    "Processing PCB",
                                  ),
                                  (r.next = 24),
                                  new Promise(function (e) {
                                    return (o.onReady = function () {
                                      return e();
                                    });
                                  })
                                );
                              case 24:
                                a();
                              case 25:
                                if ("Ready" !== o.state) {
                                  r.next = 29;
                                  break;
                                }
                                return ((r.next = 28), c.goToLoad(o));
                              case 28:
                                a();
                              case 29:
                                if ("Loaded" !== o.state) {
                                  r.next = 34;
                                  break;
                                }
                                return ((r.next = 32), c.goToRender(o));
                              case 32:
                                (a(function () {
                                  return window.__CORE__.bus.emit(
                                    "PcbEngine:documentChanged",
                                    o,
                                  );
                                }),
                                  this.canvasControl.restoreRendererState());
                              case 34:
                                return ((r.next = 36), c.goToShow(o));
                              case 36:
                                (a(),
                                  window.__CORE__.bus.emit(
                                    "PcbEngine:documentShown",
                                    o,
                                  ),
                                  (r.next = 45));
                                break;
                              case 40:
                                if (
                                  ((r.prev = 40),
                                  (r.t0 = r.catch(6)),
                                  !n.isCancellationRequested)
                                ) {
                                  r.next = 44;
                                  break;
                                }
                                return r.abrupt("return");
                              case 44:
                                window.__CORE__.bus.emit(
                                  "PcbEngine:documentShown",
                                  o,
                                  r.t0,
                                );
                              case 45:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this,
                        [[6, 40]],
                      );
                    }),
                  );
                },
              },
              {
                key: "hideView",
                value: function () {
                  ((this.workspace = null),
                    this.canvasControl &&
                      this.canvasControl.peformanceMonitor.stopFpsMeter());
                },
              },
              {
                key: "toggleFoldFlex",
                value: function () {
                  this.pcbRenderer &&
                    this.pcbRenderer.getScene3D() &&
                    this.pcbRenderer
                      .getScene3D()
                      .toggleFoldFlex(this.canvasControl);
                },
              },
              {
                key: "setPcbLocation",
                value: function (e, t) {
                  var n;
                  (e || t) &&
                    (e.viewport.SetCenter([t.left, t.top]),
                    e.viewport.SetZoom(t.zoom),
                    this.canvasControl.invalidate(),
                    null === (n = this.pcbRenderer) ||
                      void 0 === n ||
                      n.emitDocumentLocation2D());
                },
              },
              {
                key: "set3dLocation",
                value: function (e, t) {
                  var n;
                  if (e || t) {
                    var r = (null == t ? void 0 : t.matrix) || "";
                    ((null == r ? void 0 : r.eye) &&
                      (null == r ? void 0 : r.at) &&
                      (null == r ? void 0 : r.up) &&
                      e.viewport.ViewSetLookAt(r.eye, r.at, r.up),
                      this.canvasControl.invalidate(),
                      null === (n = this.pcbRenderer) ||
                        void 0 === n ||
                        n.emitDocumentLocation3D());
                  }
                },
              },
              {
                key: "highlightObjectByHash",
                value: function (e, t, n) {
                  var r;
                  if (e) {
                    var i = ln.q.instance;
                    if (i) {
                      var o = void 0;
                      switch (t) {
                        case "component":
                          var a = i.components.find(function (t) {
                            return (
                              t.designator === n &&
                              t.pcbDocId === e.altiumDesignerId
                            );
                          });
                          a && (o = k.kn.createComponent(a, !0));
                          break;
                        case "net":
                          var c = i.nets.find(function (t) {
                            return (
                              t.name === n &&
                              t.primitives.find(function (t) {
                                return (
                                  i.primitives[t].pcbDocId ===
                                  e.altiumDesignerId
                                );
                              })
                            );
                          });
                          c && (o = k.kn.createNet(c, !0));
                          break;
                        case "pinOrPad":
                          var u = i.primitives.find(function (t) {
                            return (
                              t.hash === n && t.pcbDocId === e.altiumDesignerId
                            );
                          });
                          u && (o = k.kn.createFromPrimitive(u));
                      }
                      window.__CORE__.bus.emit(
                        "select",
                        null !==
                          (r =
                            null == o
                              ? void 0
                              : o.createSelectItemData(
                                  e.altiumDesignerId,
                                  "External",
                                )) && void 0 !== r
                          ? r
                          : null,
                      );
                    }
                  }
                },
              },
              {
                key: "doSetup",
                value: function (e) {
                  return bn(
                    this,
                    void 0,
                    void 0,
                    vn().mark(function t() {
                      var n,
                        i,
                        o = this;
                      return vn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e.response),
                                  (this._enabled = !0),
                                  window.__CORE__.bus.on(
                                    "Project:objectHighlight:data",
                                    function (e) {
                                      if (
                                        "custom" === e.objectData.type &&
                                        "PcbEngine" === e.objectData.senderId &&
                                        void 0 !== e.objectData.item.pcbId
                                      ) {
                                        var t = k.kn
                                          .createFromPrimitive(
                                            e.objectData.item,
                                          )
                                          .createSelectItemData(
                                            e.objectData.item.pcbId,
                                            e.senderId,
                                          );
                                        t && (e.selectionData = t);
                                      }
                                    },
                                  ),
                                  (t.next = 5),
                                  e.engines.Project.metadataReady()
                                );
                              case 5:
                                if ((ln.q.instance.attach(n.metadata), n)) {
                                  t.next = 10;
                                  break;
                                }
                                throw (
                                  (i = "Response is empty."),
                                  this.logger.LogError(i),
                                  new Error(i)
                                );
                              case 10:
                                ((this.onCreatedScene2D =
                                  this.onCreatedScene2D.bind(this)),
                                  (this.metadata = n.metadata),
                                  e.bus.on(
                                    "GraphiteEngine:createdScene2D",
                                    this.onCreatedScene2D,
                                  ),
                                  e.bus.once(
                                    "ParentConnection:setDocumentLocationPCB",
                                    function (e) {
                                      o.currentDocumentLocation = e;
                                    },
                                  ),
                                  e.bus.once(
                                    "ParentConnection:setDocumentLocation3D",
                                    function (e) {
                                      o.currentDocumentLocation = e;
                                    },
                                  ),
                                  e.bus.on("PcbEngine:flipped", function () {
                                    var e;
                                    null === (e = o.pcbRenderer) ||
                                      void 0 === e ||
                                      e.emitDocumentLocation2D();
                                  }),
                                  e.bus.on(
                                    "PcbEngine:on3DBoardDidRotate",
                                    function () {
                                      var e;
                                      null === (e = o.pcbRenderer) ||
                                        void 0 === e ||
                                        e.emitDocumentLocation3D();
                                    },
                                  ),
                                  e.bus.on(
                                    "PcbEngine:onSetDocumentLocation",
                                    function (e) {
                                      var t, n;
                                      ("pcb" === e &&
                                        (null === (t = o.pcbRenderer) ||
                                          void 0 === t ||
                                          t.emitDocumentLocation2D()),
                                        "3d" === e &&
                                          (null === (n = o.pcbRenderer) ||
                                            void 0 === n ||
                                            n.emitDocumentLocation3D()));
                                    },
                                  ),
                                  e.bus.on(
                                    "PcbEngine:initScenes",
                                    function (e, t, n) {
                                      (o.addUnroutedNets(e, n),
                                        setTimeout(function () {
                                          o.currentDocumentLocation &&
                                            ("pcb" ===
                                              o.currentDocumentLocation.type &&
                                              o.setPcbLocation(
                                                e,
                                                o.currentDocumentLocation,
                                              ),
                                            "3d" ===
                                              o.currentDocumentLocation.type &&
                                              o.set3dLocation(
                                                t,
                                                o.currentDocumentLocation,
                                              ),
                                            (o.currentDocumentLocation = null));
                                        }, 50));
                                    },
                                  ),
                                  r.Q.bus.on(
                                    "PcbEngine:setPadAppearance",
                                    function (e) {
                                      return o.setPadAppearance(e);
                                    },
                                  ),
                                  r.Q.bus.on(
                                    "PcbEngine:clearPadAppearance",
                                    function () {
                                      return o.clearPadAppearance();
                                    },
                                  ),
                                  e.bus.on("PcbEngine:invalidate", function () {
                                    return o.canvasControl.invalidate();
                                  }),
                                  e.bus.on(
                                    "PcbEngine:recoveryLayers",
                                    function (e) {
                                      o.recoveryLayers = e;
                                    },
                                  ),
                                  e.bus.on(
                                    "PcbEngine:resetLayersToDefault",
                                    function () {
                                      o.recoveryLayers = null;
                                    },
                                  ),
                                  e.bus.on(
                                    "PcbEngine:listObjectIds",
                                    function (e) {
                                      o.listObjectIds = e;
                                    },
                                  ),
                                  e.bus.on(
                                    "PcbEngine:toggleObject",
                                    function (e) {
                                      if (e) {
                                        var t = o.listObjectIds[e.kind];
                                        t &&
                                          o.toggleNodeItemsVisibility({
                                            ids: t.ids,
                                            visible: e.visible,
                                          });
                                      }
                                    },
                                  ),
                                  e.bus.on(
                                    "PcbEngine:toggleObjectVariant",
                                    function (e) {
                                      e && o.toggleNodeItemsVisibility(e);
                                    },
                                  ),
                                  e.bus.on(
                                    "PcbEngine:resetView",
                                    this.resetView,
                                  ),
                                  e.bus.on(
                                    "PcbEngine:showDocument",
                                    function (e) {
                                      var t = o.allDocuments.find(function (t) {
                                        return t.id === e;
                                      });
                                      t && o.activateDocument(t);
                                    },
                                  ),
                                  this.setupDocuments(e.response));
                              case 30:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  );
                },
              },
              {
                key: "doInit",
                value: function () {
                  return bn(
                    this,
                    void 0,
                    void 0,
                    vn().mark(function e() {
                      var t;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (0, Ge.Z)(),
                                  (t = new sn.Z()),
                                  (e.next = 4),
                                  t.loadLibs()
                                );
                              case 4:
                                return ((e.next = 6), this.resolveGraphite());
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                },
              },
              {
                key: "doLoad",
                value: function (e) {
                  return bn(
                    this,
                    void 0,
                    void 0,
                    vn().mark(function t() {
                      var n, i, o;
                      return vn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e.errorState = null),
                                  (t.prev = 1),
                                  "Ready" === e.state)
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return");
                              case 4:
                                if (
                                  ((n = r.Q.response.storage),
                                  void 0 !== e.fileData)
                                ) {
                                  t.next = 7;
                                  break;
                                }
                                throw new Error("Graphics data is an empty.");
                              case 7:
                                return (
                                  (t.next = 9),
                                  n.documentLoader.loadDocument(
                                    e.fileData.originalName,
                                    e.fileData.fileType,
                                  )
                                );
                              case 9:
                                return (
                                  (i = t.sent),
                                  (t.next = 12),
                                  i.arrayBuffer()
                                );
                              case 12:
                                if ((o = t.sent)) {
                                  t.next = 15;
                                  break;
                                }
                                throw new Error("Document data is empty.");
                              case 15:
                                ((e.renderData = o),
                                  (e.state = "Loaded"),
                                  (t.next = 23));
                                break;
                              case 19:
                                ((t.prev = 19),
                                  (t.t0 = t.catch(1)),
                                  this.logger.LogError(
                                    "Load document [".concat(e.id, "] error."),
                                    t.t0,
                                  ),
                                  (e.errorState = t.t0));
                              case 23:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 19]],
                      );
                    }),
                  );
                },
              },
              {
                key: "doRender",
                value: function (e) {
                  return bn(
                    this,
                    void 0,
                    void 0,
                    vn().mark(function t() {
                      var n,
                        r = this;
                      return vn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e.errorState = null),
                                  (t.prev = 1),
                                  "Loaded" === e.state)
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return");
                              case 4:
                                return (
                                  (t.next = 6),
                                  new Promise(function (e) {
                                    return setTimeout(function () {
                                      return e();
                                    });
                                  })
                                );
                              case 6:
                                if (
                                  null ===
                                    (n = this.getCurrentDocumentBoardInfo()) ||
                                  void 0 === n
                                    ? void 0
                                    : n.document
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                throw Error("Meta info has not found");
                              case 9:
                                ((e.renderer =
                                  this.canvasControl.createRenderer(e.id)),
                                  e.renderer.renderModeChanged.on(function () {
                                    var e;
                                    r.canvasControl &&
                                      (null === (e = r.canvasControl) ||
                                        void 0 === e ||
                                        e.peformanceMonitor.startFpsMeter(1e3));
                                  }),
                                  this.selectionItemsObserver.setup(e.renderer),
                                  this.canvasControl.loadData(
                                    e.renderData,
                                    this.metadata.projectTypeName,
                                  ),
                                  this.initPadAppearanceManager(
                                    e.renderer.getScene2D(),
                                    e.renderer.getScene3D(),
                                    this.renderMode,
                                  ),
                                  (e.state = "Rendered"),
                                  (t.next = 21));
                                break;
                              case 17:
                                ((t.prev = 17),
                                  (t.t0 = t.catch(1)),
                                  this.logger.LogError(
                                    "Render document [".concat(
                                      e.id,
                                      "] error.",
                                    ),
                                    t.t0,
                                  ),
                                  (e.errorState = t.t0));
                              case 21:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 17]],
                      );
                    }),
                  );
                },
              },
              {
                key: "doShow",
                value: function (e) {
                  var t,
                    n = this;
                  try {
                    e.errorState = null;
                  } catch (t) {
                    (this.logger.LogError(
                      "Render document [".concat(e.id, "] error."),
                      t,
                    ),
                      (e.errorState = t));
                  }
                  if (!this.workspace)
                    throw new Error("Workspace has not defined.");
                  var r = this.canvasControl.getContainerId(),
                    i = document.getElementById(r);
                  if (!i) throw new Error("Paint has not found.");
                  this.workspace.contains(i) || this.workspace.appendChild(i);
                  var o = e.renderer;
                  (o && (o.renderMode = this.renderMode),
                    this.selectionItemsObserver.setRenderMode(this.renderMode),
                    null === (t = this.selectionNodesObserver) ||
                      void 0 === t ||
                      t.setRenderMode(this.renderMode),
                    this.canvasControl.onResize(),
                    this.canvasControl.invalidate(),
                    this.canvasControl.peformanceMonitor.startFpsMeter(1e3),
                    (this.pcbLoaded = !0),
                    this.simulationManager.simulationEnabled &&
                      this.showSimulation(),
                    o &&
                      !this.currentDocumentLocation &&
                      setTimeout(function () {
                        (2 === n.renderMode && o.emitDocumentLocation2D(),
                          3 === n.renderMode && o.emitDocumentLocation3D());
                      }, 100));
                },
              },
              {
                key: "hideSimulation",
                value: function () {
                  var e,
                    t =
                      null === (e = this.activeDocument) || void 0 === e
                        ? void 0
                        : e.simulation;
                  t &&
                    !t.loading &&
                    t.items.some(function (e) {
                      return e.data;
                    }) &&
                    t.shown &&
                    (this.simulationManager.hideSimulation(),
                    r.Q.bus.emit("select", null),
                    r.Q.bus.emit("PcbEngine:enableSelection", !0),
                    this.logger.LogDebug("Simulation hidden"),
                    (t.shown = !1));
                },
              },
              {
                key: "loadSimulation",
                value: function (e) {
                  return bn(
                    this,
                    void 0,
                    void 0,
                    vn().mark(function t() {
                      var n, i, o, a, c, u, s, l;
                      return vn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((t.prev = 0), (n = this.activeDocument))) {
                                  t.next = 5;
                                  break;
                                }
                                return (
                                  this.logger.LogDebug(
                                    "Simulation won't load - no document",
                                  ),
                                  t.abrupt("return", Promise.resolve(!1))
                                );
                              case 5:
                                if (
                                  ((i = n.simulation) ||
                                    ((i = {
                                      items: e,
                                      loading: !1,
                                      shown: !1,
                                      loaded: !1,
                                    }),
                                    (n.simulation = i)),
                                  !i.loading)
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return (
                                  this.logger.LogDebug(
                                    "Simulation is already loading",
                                  ),
                                  t.abrupt("return", Promise.resolve(!1))
                                );
                              case 10:
                                if (!i.loaded) {
                                  t.next = 13;
                                  break;
                                }
                                return (
                                  this.logger.LogDebug("Simulation loaded"),
                                  t.abrupt("return", Promise.resolve(!0))
                                );
                              case 13:
                                (this.logger.LogDebug(
                                  "Start loading simulation data...",
                                ),
                                  (i.loading = !0),
                                  (o = this.simulationManager),
                                  (a = yn(i.items)),
                                  (t.prev = 17),
                                  a.s());
                              case 19:
                                if ((c = a.n()).done) {
                                  t.next = 45;
                                  break;
                                }
                                if ((u = c.value).url) {
                                  t.next = 24;
                                  break;
                                }
                                return (
                                  this.logger.LogDebug(
                                    "".concat(
                                      u.type,
                                      " document is not present",
                                    ),
                                  ),
                                  t.abrupt("continue", 43)
                                );
                              case 24:
                                ((s = void 0),
                                  (t.t0 = u.type.toLowerCase()),
                                  (t.next =
                                    t.t0 === "AnsysEDB".toLowerCase() ||
                                    t.t0 === "Signal Integrity".toLowerCase()
                                      ? 28
                                      : t.t0 === "PDNAnalyzer".toLowerCase()
                                        ? 32
                                        : 36));
                                break;
                              case 28:
                                return (
                                  (t.next = 30),
                                  o.loadSimulationAnsysData(u.url)
                                );
                              case 30:
                                return ((s = t.sent), t.abrupt("break", 38));
                              case 32:
                                return (
                                  (t.next = 34),
                                  o.loadSimulationData(u.url)
                                );
                              case 34:
                                return ((s = t.sent), t.abrupt("break", 38));
                              case 36:
                                return (
                                  this.logger.LogWarn(
                                    "Unsupported type of simulation ".concat(
                                      u.type,
                                    ),
                                  ),
                                  t.abrupt("break", 38)
                                );
                              case 38:
                                if (s) {
                                  t.next = 40;
                                  break;
                                }
                                return t.abrupt("continue", 43);
                              case 40:
                                ((u.data = s),
                                  (l = o.getUniqueNetNames(s)),
                                  r.Q.bus.emit("PcbEngine:simulationLoaded", {
                                    kind: u.data.kind,
                                    type: u.type,
                                    data: s,
                                    nets: l,
                                    url: u.url,
                                  }));
                              case 43:
                                t.next = 19;
                                break;
                              case 45:
                                t.next = 50;
                                break;
                              case 47:
                                ((t.prev = 47),
                                  (t.t1 = t.catch(17)),
                                  a.e(t.t1));
                              case 50:
                                return ((t.prev = 50), a.f(), t.finish(50));
                              case 53:
                                return (
                                  (i.loading = !1),
                                  (i.loaded = !0),
                                  this.logger.LogDebug(
                                    "Simulation data loaded",
                                  ),
                                  t.abrupt("return", !0)
                                );
                              case 59:
                                throw (
                                  (t.prev = 59),
                                  (t.t2 = t.catch(0)),
                                  console.error(t.t2),
                                  t.t2
                                );
                              case 63:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [
                          [0, 59],
                          [17, 47, 50, 53],
                        ],
                      );
                    }),
                  );
                },
              },
              {
                key: "showSimulation",
                value: function (e, t, n) {
                  var r = this,
                    i = this.documents.find(function (e) {
                      return e.isMain;
                    });
                  this.activateDocument(i).then(function () {
                    r.showActiveSimulation(e, t, n);
                  });
                },
              },
              {
                key: "showActiveSimulation",
                value: function (e, t, n) {
                  var i,
                    o,
                    a,
                    c =
                      null === (i = this.documents[0]) || void 0 === i
                        ? void 0
                        : i.simulation;
                  if (c && !c.loading) {
                    var u = c.items;
                    if (!e)
                      if (this.currentSimulationType)
                        e = this.currentSimulationType;
                      else if (
                        !(e =
                          null ===
                            (a =
                              null ===
                                (o = u.find(function (e) {
                                  return e.data;
                                })) || void 0 === o
                                ? void 0
                                : o.data) || void 0 === a
                            ? void 0
                            : a.kind)
                      )
                        return void this.logger.LogWarn(
                          "Default simulation data is not found",
                        );
                    this.currentSimulationType = e;
                    var s = u.find(function (t) {
                      return t.data && t.data.kind === e;
                    });
                    s && s.data
                      ? (this.simulationManager.showSimulationData(
                          s.data,
                          e,
                          t,
                          n,
                        ),
                        (c.shown = !0),
                        this.logger.LogDebug("Simulation data added to scene"),
                        this.pcbLoaded
                          ? (r.Q.bus.emit("select", null),
                            r.Q.bus.emit("PcbEngine:enableSelection", !1),
                            this.simulationManager.startRendering())
                          : this.logger.LogDebug(
                              "Simulation ready to render, but PCB is not loaded yet",
                            ))
                      : this.logger.LogWarn(
                          "There isn't data for show ".concat(e),
                        );
                  }
                },
              },
              {
                key: "selectSimulationViewOption",
                value: function (e) {
                  this.simulationManager.selectSimulationViewOption(e) &&
                    this.showSimulation();
                },
              },
              {
                key: "resolveGraphite",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    var i = new un.Z();
                    ((e.controlDiv = window.document.createElement("div")),
                      (e.controlDiv.style.display = "none"),
                      window.document.body.appendChild(e.controlDiv),
                      (e.canvasControl = new W.C(
                        e.controlDiv,
                        new k.B7(),
                        e.simulationManager,
                      )),
                      e.canvasControl.peformanceMonitor.on(
                        "aggregateFps",
                        function (t) {
                          return (
                            e.pcbRenderer &&
                            r.Q.bus.emit(
                              "PcbEngine:fps",
                              t,
                              e.pcbRenderer.renderMode,
                            )
                          );
                        },
                      ),
                      e.canvasControl.peformanceMonitor.on(
                        "renderTime",
                        function (t, n) {
                          return (
                            e.pcbRenderer &&
                            r.Q.bus.emit(
                              "PcbEngine:renderTime",
                              t,
                              n,
                              e.pcbRenderer.renderMode,
                            )
                          );
                        },
                      ),
                      i
                        .on("COMPLETED", function () {
                          return t();
                        })
                        .on("CRASHED", function (e) {
                          return n(e);
                        })
                        .init(e.canvasControl.canvas));
                  });
                },
              },
              {
                key: "definePreviewUrlProperty",
                value: function (e, t, n, r) {
                  Object.defineProperty(
                    e,
                    2 === r ? "previewUrl2D" : "previewUrl3D",
                    {
                      get: function () {
                        var e, i;
                        return null !==
                          (i =
                            null ===
                              (e = t.files.find(function (e) {
                                return (
                                  "Preview" === e.fileType &&
                                  e.originalName === n &&
                                  e.dataFileUrl
                                    .toLowerCase()
                                    .includes(2 === r ? "_2d.png" : "_3d.png")
                                );
                              })) || void 0 === e
                              ? void 0
                              : e.dataFileUrl) && void 0 !== i
                          ? i
                          : "";
                      },
                    },
                  );
                },
              },
              {
                key: "setupDocuments",
                value: function (e) {
                  var t,
                    n,
                    r,
                    o,
                    a,
                    c = this;
                  if (!e) throw new Error("Response is empty");
                  var u,
                    s = e.metadata,
                    l = e.storage,
                    f = yn(
                      null !==
                        (r =
                          null !==
                            (n =
                              null === (t = s.documents) || void 0 === t
                                ? void 0
                                : t.filter(function (e) {
                                    return e.kind === i.iZ.Pcb;
                                  })) && void 0 !== n
                            ? n
                            : s.pcbDocuments) && void 0 !== r
                        ? r
                        : s.pcbDocument
                          ? [s.pcbDocument]
                          : [],
                    );
                  try {
                    var d = function () {
                      var t = u.value,
                        n = t.fileName,
                        r = t.id,
                        i = t.originalFileName,
                        f = t.active,
                        d = function (e) {
                          var t;
                          return null === (t = l.files) || void 0 === t
                            ? void 0
                            : t.find(function (t) {
                                return (
                                  "PcbGraphiteData" === t.fileType &&
                                  t.originalName === e
                                );
                              });
                        },
                        h =
                          null === (o = s.pcbDocuments) || void 0 === o
                            ? void 0
                            : o.find(function (e) {
                                return e.fileName === n;
                              }),
                        y = {
                          id: n,
                          altiumDesignerId:
                            null !== (a = null == h ? void 0 : h.id) &&
                            void 0 !== a
                              ? a
                              : r,
                          previewUrl2D: "",
                          previewUrl3D: "",
                          name: i,
                          displayName: i,
                          errorState: null,
                          fileData: d(n),
                          simulation: void 0,
                          isMain: !!f,
                          renderData: null,
                          state: "Ready",
                          renderer: void 0,
                          metadataRepository: void 0,
                        };
                      ((y.metadataRepository = {
                        getPrimitiveById: function (e) {
                          return ln.q.instance.getPrimitiveById(e);
                        },
                        getDocument: function () {
                          return ln.q.instance.getDocument(y.altiumDesignerId);
                        },
                        getObjectId: function (e) {
                          return ln.q.instance.getObjectId(e);
                        },
                        getDocumentLayers: function () {
                          return ln.q.instance.getDocumentLayers(
                            y.altiumDesignerId,
                          );
                        },
                      }),
                        c.definePreviewUrlProperty(y, l, i, 2),
                        c.definePreviewUrlProperty(y, l, i, 3),
                        (y.toString = function () {
                          return "["
                            .concat(y.id, "|")
                            .concat(y.altiumDesignerId, "] ")
                            .concat(y.name, " [")
                            .concat(y.state, "]");
                        }),
                        void 0 === y.fileData &&
                          "PartialComplete" === e.sourceStatus &&
                          ((y.state = "Progress"),
                          l.on("updated", function e() {
                            if (
                              ((y.fileData = d(y.id)), y.fileData || l.fullList)
                            ) {
                              var t = function t() {
                                var r,
                                  i,
                                  o =
                                    null === (r = s.pcbDocuments) ||
                                    void 0 === r
                                      ? void 0
                                      : r.find(function (e) {
                                          return e.fileName === n;
                                        });
                                return !(
                                  (!o && "complete" !== s.state) ||
                                  ((y.altiumDesignerId =
                                    null !== (i = null == o ? void 0 : o.id) &&
                                    void 0 !== i
                                      ? i
                                      : y.altiumDesignerId),
                                  setTimeout(function () {
                                    var t;
                                    (l.off("updated", e),
                                      (y.state = "Ready"),
                                      null === (t = y.onReady) ||
                                        void 0 === t ||
                                        t.call(c));
                                  }),
                                  s.off("updated", t),
                                  0)
                                );
                              };
                              t() || s.on("updated", t);
                            }
                          })),
                        c.documents.push(y));
                    };
                    for (f.s(); !(u = f.n()).done; ) d();
                  } catch (e) {
                    f.e(e);
                  } finally {
                    f.f();
                  }
                  var h = this.documents.find(function (e) {
                    return e.isMain;
                  });
                  (!h &&
                    s.pcbDocument &&
                    ((h = this.documents.find(function (e) {
                      return e.altiumDesignerId === s.pcbDocument.id;
                    })),
                    h && (h.isMain = !0)),
                    h
                      ? (this.currentDocumentIndex = this.documents.indexOf(h))
                      : this.documents.length > 0 &&
                        (this.currentDocumentIndex = 0));
                },
              },
              {
                key: "onRecoveryLayers",
                value: function () {
                  var e = (this.layerManager_.getGroupedLayers() || [])
                    .flat()
                    .reduce(
                      function (e, t) {
                        return (
                          t.isActive && (e.active = t.metaId),
                          t.isVisible && e.visible.push(t.metaId),
                          e
                        );
                      },
                      { active: -1, visible: new Array() },
                    );
                  JSON.stringify(this.recoveryLayers) !== JSON.stringify(e) &&
                    this.layerManager_.recoveryLayers(this.recoveryLayers);
                },
              },
              {
                key: "onCreatedScene2D",
                value: function (e) {
                  return bn(
                    this,
                    void 0,
                    void 0,
                    vn().mark(function t() {
                      var n,
                        i,
                        o,
                        a,
                        c = this;
                      return vn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.layerFactory) {
                                  t.next = 14;
                                  break;
                                }
                                return ((t.next = 3), (0, dn.Z)());
                              case 3:
                                ((a =
                                  null === (n = this.activeDocument) ||
                                  void 0 === n
                                    ? void 0
                                    : n.altiumDesignerId),
                                  (this.layerManager_ =
                                    this.layerFactory.createLayerManager(e, a)),
                                  this.layerManager_.resetLayers(),
                                  null === (i = this.selectionNodesObserver) ||
                                    void 0 === i ||
                                    i.dispose(),
                                  (this.selectionNodesObserver = new k.yM(
                                    this.layerManager_,
                                    a,
                                    this.simulationManager,
                                  )),
                                  r.Q.bus.emit(
                                    "BoardItemsVisibility:setLayerRecoveryData",
                                    this.layerManager_.getGroupedLayers(),
                                  ),
                                  this.recoveryLayers &&
                                    this.onRecoveryLayers(),
                                  r.Q.bus.emit(
                                    "PcbEngine:layerManagerCreated",
                                    this.layerManager_,
                                    null === (o = this.activeDocument) ||
                                      void 0 === o
                                      ? void 0
                                      : o.id,
                                  ),
                                  r.Q.bus.on(
                                    "LayerManager:changedLayers",
                                    function () {
                                      return c.canvasControl.invalidate();
                                    },
                                  ),
                                  r.Q.bus.on("PcbEngine:flipped", function () {
                                    return c.canvasControl.invalidate();
                                  }),
                                  r.Q.bus.on(
                                    "PcbEngine:updateLayers",
                                    function (e) {
                                      c.layerManager_.recoveryLayers(e);
                                    },
                                  ));
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  );
                },
              },
              {
                key: "initPadAppearanceManager",
                value: function (e, t, n) {
                  e &&
                    t &&
                    ((this.padAppearanceManager = new Q(e, t, n)),
                    this.canvasControl.invalidate());
                },
              },
              {
                key: "setPadAppearance",
                value: function (e) {
                  if (this.padAppearanceManager) {
                    var t = performance.now();
                    try {
                      (this.padAppearanceManager.clearPadAppearance(),
                        this.padAppearanceManager.setPadAppearance(
                          this.layerManager,
                          e,
                          null,
                        ),
                        this.canvasControl.invalidate(),
                        this.logger.LogDebug(
                          "setPadAppearance " + (performance.now() - t),
                        ));
                    } catch (e) {
                      this.logger.LogError("Set pad appearences.", e);
                    }
                  }
                },
              },
              {
                key: "clearPadAppearance",
                value: function () {
                  var e;
                  (null === (e = this.padAppearanceManager) ||
                    void 0 === e ||
                    e.clearPadAppearance(),
                    this.canvasControl.invalidate());
                },
              },
              {
                key: "addUnroutedNets",
                value: function (e, t) {
                  var n,
                    i,
                    o = this;
                  if (e) {
                    var a = new Ye(
                      e,
                      null === (n = this.activeDocument) || void 0 === n
                        ? void 0
                        : n.altiumDesignerId,
                    );
                    (null === (i = this.unroutedConnectionBuilder) ||
                      void 0 === i ||
                      i.dispose(),
                      (this.unroutedConnectionBuilder = a),
                      a.addConnectionsToScene(t).then(function () {
                        return o.canvasControl.invalidate();
                      }),
                      r.Q.bus.on("PcbEngine:toggleUnrotedNet", function (e) {
                        a.toggleVisibleUnroutedLines(e.visible).then(
                          function () {
                            var e, t;
                            (o.canvasControl.invalidate(),
                              null === (e = o.pcbRenderer) ||
                                void 0 === e ||
                                e.getSceneCurrent().setDirty(!0),
                              null === (t = o.pcbRenderer) ||
                                void 0 === t ||
                                t.render());
                          },
                        );
                      }),
                      this.selectionItemsObserver.selectedItem &&
                        a.onSelectedItem(
                          this.selectionItemsObserver.selectedItem,
                        ));
                  }
                },
              },
              {
                key: "toggleNodeItemsVisibility",
                value: function (e) {
                  this.pcbRenderer &&
                    (this.pcbRenderer
                      .getSceneCurrent()
                      .setNodeItemsVisibility(e.ids, e.visible),
                    this.pcbRenderer.getSceneCurrent().setDirty(!0),
                    this.pcbRenderer.render());
                },
              },
              {
                key: "getBoardInfoByDocId",
                value: function (e) {
                  var t = ln.q.instance.getPcbDocById(e);
                  if (null === t) throw new Error("Mata info has not found.");
                  return {
                    document: t,
                    components: ln.q.instance.getComponentsByPcbId(e),
                    nets: ln.q.instance.getNetsByPcbId(e),
                  };
                },
              },
              {
                key: "getCurrentDocumentBoardInfo",
                value: function () {
                  var e,
                    t =
                      null === (e = this.activeDocument) || void 0 === e
                        ? void 0
                        : e.altiumDesignerId;
                  return t ? this.getBoardInfoByDocId(t) : null;
                },
              },
              {
                key: "getMainBoardInfo",
                value: function () {
                  var e =
                    this.allDocuments.find(function (e) {
                      return e.isMain;
                    }) || this.allDocuments[0];
                  return e
                    ? this.getBoardInfoByDocId(
                        null == e ? void 0 : e.altiumDesignerId,
                      )
                    : null;
                },
              },
              {
                key: "getCurrentDocumentNetByName",
                value: function (e) {
                  var t,
                    n =
                      null === (t = this.activeDocument) || void 0 === t
                        ? void 0
                        : t.altiumDesignerId;
                  return ln.q.instance.getDocumentNetByName(e, n);
                },
              },
            ]),
            t && mn(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        Sn = {
          type: "Engine",
          name: "PcbEngine",
          description: "Presents PCB documents engine module",
          create: function () {
            return new wn();
          },
        };
      r.Q.addModule(Sn);
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 142))), e.O());
  },
]);
