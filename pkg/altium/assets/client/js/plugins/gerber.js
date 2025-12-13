/*! For license information please see gerber.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [40386],
  {
    96433: (e, t, r) => {
      var n = r(49235),
        o = r(41497),
        i = r(12743);
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
      function u() {
        u = function () {
          return t;
        };
        var e,
          t = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          c = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function f(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          f = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function h(e, t, r, n) {
          var i = t && t.prototype instanceof b ? t : b,
            a = Object.create(i.prototype),
            u = new _(n || []);
          return (o(a, "_invoke", { value: D(e, r, u) }), a);
        }
        function y(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = h;
        var p = "suspendedStart",
          d = "suspendedYield",
          v = "executing",
          g = "completed",
          m = {};
        function b() {}
        function w() {}
        function L() {}
        var E = {};
        f(E, c, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          k = S && S(S(j([])));
        k && k !== r && n.call(k, c) && (E = k);
        var x = (L.prototype = b.prototype = Object.create(E));
        function O(e) {
          ["next", "throw", "return"].forEach(function (t) {
            f(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function T(e, t) {
          function r(o, i, u, c) {
            var s = y(e[o], e, i);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == a(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      r("next", e, u, c);
                    },
                    function (e) {
                      r("throw", e, u, c);
                    },
                  )
                : t.resolve(f).then(
                    function (e) {
                      ((l.value = e), u(l));
                    },
                    function (e) {
                      return r("throw", e, u, c);
                    },
                  );
            }
            c(s.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, n) {
              function o() {
                return new t(function (t, o) {
                  r(e, n, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function D(t, r, n) {
          var o = p;
          return function (i, a) {
            if (o === v) throw Error("Generator is already running");
            if (o === g) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var c = I(u, n);
                if (c) {
                  if (c === m) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === p) throw ((o = g), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = v;
              var s = y(t, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? g : d), s.arg === m)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = g), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function I(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                I(t, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              m
            );
          var i = y(o, t.iterator, r.arg);
          if ("throw" === i.type)
            return (
              (r.method = "throw"),
              (r.arg = i.arg),
              (r.delegate = null),
              m
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[t.resultName] = a.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                (r.delegate = null),
                m)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              m);
        }
        function P(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function C(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function _(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(P, this),
            this.reset(!0));
        }
        function j(t) {
          if (t || "" === t) {
            var r = t[c];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function r() {
                  for (; ++o < t.length; )
                    if (n.call(t, o))
                      return ((r.value = t[o]), (r.done = !1), r);
                  return ((r.value = e), (r.done = !0), r);
                };
              return (i.next = i);
            }
          }
          throw new TypeError(a(t) + " is not iterable");
        }
        return (
          (w.prototype = L),
          o(x, "constructor", { value: L, configurable: !0 }),
          o(L, "constructor", { value: w, configurable: !0 }),
          (w.displayName = f(L, l, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(e, L)
                : ((e.__proto__ = L), f(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(x)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          O(T.prototype),
          f(T.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = T),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new T(h(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          O(x),
          f(x, l, "Generator"),
          f(x, c, function () {
            return this;
          }),
          f(x, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return ((e.value = n), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (t.values = j),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(C),
                !t)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function o(n, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
                  if (c && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
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
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return (this.complete(r.completion, r.afterLoc), C(r), m);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    C(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: j(t), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      }
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, s(n.key), n));
        }
      }
      function s(e) {
        var t = (function (e, t) {
          if ("object" != a(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != a(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == a(t) ? t : t + "";
      }
      function l(e, t, r) {
        return (
          (t = h(t)),
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
            f()
              ? Reflect.construct(t, r || [], h(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function f() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (f = function () {
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
      var p = {
          where: function (e) {
            return ["Show" === e.type];
          },
          to: "SHOW",
        },
        d = {
          where: function (e) {
            return ["Error" === e.type];
          },
          to: "CRASHED",
          error: !0,
        },
        v = {
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
            d,
          ],
          SETUP_COMPLETED: [
            {
              where: function (e) {
                return ["Init" === e.type];
              },
              to: "INIT",
            },
            d,
          ],
          INIT: [
            {
              where: function (e) {
                return ["InitComplete" === e.type];
              },
              to: "INIT_COMPLETED",
            },
            d,
          ],
          INIT_COMPLETED: [
            {
              where: function (e) {
                return ["Render" === e.type];
              },
              to: "RENDER",
            },
            d,
          ],
          RENDER: [
            {
              where: function (e) {
                return ["RenderComplete" === e.type];
              },
              to: "RENDER_COMPLETED",
            },
            d,
          ],
          RENDER_COMPLETED: [p, d],
          SHOW: [p, d],
        },
        g = (function (e) {
          function t(e) {
            var r;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((r = l(this, t, ["IDLE", v])).errorState = null),
              (r.engine = e),
              (r.onSetup = r.onSetup.bind(r)),
              (r.onInit = r.onInit.bind(r)),
              (r.onRender = r.onRender.bind(r)),
              (r.onShow = r.onShow.bind(r)),
              r.on("SETUP", r.onSetup),
              r.on("INIT", r.onInit),
              r.on("RENDER", r.onRender),
              r.on("SHOW", r.onShow),
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
            (r = t),
            (n = [
              {
                key: "goToSetup",
                value: function (e) {
                  var t = this;
                  return new Promise(function (r, n) {
                    t.dispatch({ type: "Setup", core: e }) ||
                    "SETUP" === t.state
                      ? (t.on("SETUP_COMPLETED", function () {
                          r();
                        }),
                        t.on("CRASHED", function (e) {
                          ((t.errorState = e), n(t.errorState));
                        }))
                      : "CRASHED" === t.state
                        ? n(t.errorState)
                        : r();
                  });
                },
              },
              {
                key: "goToInit",
                value: function (e) {
                  var t = this;
                  return new Promise(function (r, n) {
                    t.dispatch({ type: "Init", document: e }) ||
                    "INIT" === t.state
                      ? (window.__CORE__.bus.emit(
                          "GerberEngine:beforeDocumentInit",
                          e,
                        ),
                        t.on("INIT_COMPLETED", function () {
                          (window.__CORE__.bus.emit(
                            "GerberEngine:afterDocumentInit",
                          ),
                            r());
                        }),
                        t.on("CRASHED", function (e) {
                          ((t.errorState = e), n(t.errorState));
                        }))
                      : "CRASHED" === t.state
                        ? n(t.errorState)
                        : r();
                  });
                },
              },
              {
                key: "goToRender",
                value: function (e) {
                  var t = this;
                  return new Promise(function (r, n) {
                    t.dispatch({ type: "Render", document: e }) ||
                    "RENDER" === t.state
                      ? (window.__CORE__.bus.emit(
                          "GerberEngine:beforeImportPCB",
                          e,
                        ),
                        t.on("RENDER_COMPLETED", function () {
                          (window.__CORE__.bus.emit(
                            "GerberEngine:afterImportPCB",
                            e,
                          ),
                            r());
                        }),
                        t.on("CRASHED", function (e) {
                          ((t.errorState = e), n(t.errorState));
                        }))
                      : "CRASHED" === t.state
                        ? n(t.errorState)
                        : r();
                  });
                },
              },
              {
                key: "goToShow",
                value: function (e, t) {
                  var r = this;
                  return new Promise(function (n, o) {
                    r.dispatch({ type: "Show", workspace: e, renderMode: t }) ||
                    "SHOW" === r.state
                      ? n()
                      : o("Cannot show. Wrong state [".concat(r.state, "]"));
                  });
                },
              },
              {
                key: "nextTick",
                value: function (e) {
                  setTimeout(function () {
                    e();
                  }, 1);
                },
              },
              {
                key: "onSetup",
                value: function (e) {
                  var t = this;
                  try {
                    var r = e.core;
                    (this.engine.doSetup(r),
                      this.nextTick(function () {
                        return t.dispatch({ type: "SetupComplete" });
                      }));
                  } catch (e) {
                    this.nextTick(function () {
                      return t.dispatch(new i.B(e.message, e));
                    });
                  }
                },
              },
              {
                key: "onInit",
                value: function (e) {
                  return (
                    (t = this),
                    (r = void 0),
                    (n = void 0),
                    (o = u().mark(function t() {
                      var r = this;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  this.engine.doInit(e.document)
                                );
                              case 3:
                                (this.dispatch({ type: "InitComplete" }),
                                  (t.next = 9));
                                break;
                              case 6:
                                ((t.prev = 6),
                                  (t.t0 = t.catch(0)),
                                  this.nextTick(function () {
                                    return r.dispatch(
                                      new i.B(t.t0.message, t.t0),
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
                    })),
                    new (n || (n = Promise))(function (e, i) {
                      function a(e) {
                        try {
                          c(o.next(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function u(e) {
                        try {
                          c(o.throw(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function c(t) {
                        var r;
                        t.done
                          ? e(t.value)
                          : ((r = t.value),
                            r instanceof n
                              ? r
                              : new n(function (e) {
                                  e(r);
                                })).then(a, u);
                      }
                      c((o = o.apply(t, r || [])).next());
                    })
                  );
                  var t, r, n, o;
                },
              },
              {
                key: "onRender",
                value: function (e) {
                  var t = this;
                  try {
                    (this.engine.doRender(e.document),
                      this.nextTick(function () {
                        return t.dispatch({ type: "RenderComplete" });
                      }));
                  } catch (e) {
                    this.nextTick(function () {
                      return t.dispatch(new i.B(e.message, e));
                    });
                  }
                },
              },
              {
                key: "onShow",
                value: function (e) {
                  this.engine.doShow(e.workspace, e.renderMode);
                },
              },
            ]) && c(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(o.Z),
        m = r(92828),
        b = r(55760),
        w = r(11758),
        L = window.__CORE__,
        E = r(77254),
        S = r(73626);
      function k(e) {
        return (
          (k =
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
          k(e)
        );
      }
      function x(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return O(e);
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
              if ("string" == typeof e) return O(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? O(e, t)
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
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function T(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function D(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, P(n.key), n));
        }
      }
      function I(e, t, r) {
        return (
          t && D(e.prototype, t),
          r && D(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function P(e) {
        var t = (function (e, t) {
          if ("object" != k(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != k(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == k(t) ? t : t + "";
      }
      var C = (function () {
          return I(
            function e(t) {
              (T(this, e),
                (this.cachedBoardLayers = []),
                (this.layerViewType = "none"),
                (this.scene = t),
                (this.metadataLayers = this.initMetaLayers()),
                (this.onceLayerManager = new _(this)));
            },
            [
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
                key: "initMetaLayers",
                value: function () {
                  var e,
                    t = this,
                    r =
                      null === (e = L.response.metadata) || void 0 === e
                        ? void 0
                        : e.camtastic;
                  r || (r = []);
                  var n = [];
                  return (
                    r.length > 0 && r[0].layers && (n = r[0].layers),
                    n.forEach(function (e) {
                      var t = b.l.getLayer(e.soft);
                      ((e.group = t.getLayerGroup(e)),
                        (e.groupIndex = t.getLayerGroupStackIndex(e)),
                        (e.groupDisplayIndex =
                          t.getLayerGroupDisplayStackIndex(e)),
                        (e.searchName = e.name),
                        (e.name = t.getLayerName(e)));
                    }),
                    n
                      .sort(function (e, r) {
                        return t.compare(e, r);
                      })
                      .forEach(function (e, t) {
                        var r = b.l.getLayer(e.soft);
                        ((e.displayIndex = r.getDisplayIndex(e, t)),
                          (e.stackIndex = n.length - t));
                      }),
                    n
                  );
                },
              },
              {
                key: "getLayers",
                value: function () {
                  var e;
                  return (arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    !arguments[0]) ||
                    !(null === (e = this.layers) || void 0 === e
                      ? void 0
                      : e.length)
                    ? ((this.layers = this.getBoardLayers(
                        this.scene.layers,
                        !1,
                      )),
                      this.layers)
                    : this.layers;
                },
              },
              {
                key: "getGroupedLayers",
                value: function () {
                  var e = [],
                    t = this.getLayers(),
                    r = t
                      .map(function (e) {
                        return e;
                      })
                      .sort(function (e, t) {
                        return e.groupDisplayIndex - t.groupDisplayIndex;
                      })
                      .map(function (e) {
                        return e.layerGroup;
                      });
                  return (
                    x(new Set(r)).forEach(function (r) {
                      var n = t
                        .filter(function (e) {
                          return e.layerGroup === r;
                        })
                        .sort(function (e, t) {
                          return e.displayIndex - t.displayIndex;
                        });
                      n.length > 0 && e.push(n);
                    }),
                    e
                  );
                },
              },
              {
                key: "setLayers",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
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
                    (this.layerViewType = "none"),
                    this.emitLayerEvent("resetLayer", this.layers, !1));
                },
              },
              {
                key: "flipLayers",
                value: function () {
                  var e = new Map();
                  (this.layers
                    .sort(function (e, t) {
                      return e.stackIndex - t.stackIndex;
                    })
                    .forEach(function (t) {
                      var r = t.layerGroup;
                      if (r && t.stackIndex) {
                        var n = r,
                          o = e.get(n);
                        o ? o.push(t) : e.set(n, [t]);
                      }
                    }),
                    e.forEach(function (e) {
                      var t = e.map(function (e) {
                        return e.stackIndex;
                      });
                      e.forEach(function (e, r) {
                        e.stackIndex = t[t.length - r - 1];
                      });
                    }));
                },
              },
              {
                key: "nextOnceLayer",
                value: function () {
                  var e = this.onceLayerManager.nextOnceLayer();
                  return (this.emitLayerEvent("setOnceLayer", e), e);
                },
              },
              {
                key: "prevOnceLayer",
                value: function () {
                  var e = this.onceLayerManager.prevOnceLayer();
                  return (this.emitLayerEvent("setOnceLayer", e), e);
                },
              },
              {
                key: "setOnceLayer",
                value: function (e) {
                  (this.onceLayerManager.setOnceLayer(e),
                    this.emitLayerEvent("setOnceLayer", e));
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
                key: "setTopView",
                value: function () {
                  "top" !== this.layerViewType &&
                    (this.layers.forEach(function (e) {
                      e.isVisible = e.isTop || e.isDrills || e.isKeepOut;
                    }),
                    this.setLayers(this.layers, !1),
                    (this.layerViewType = "top"),
                    this.emitLayerEvent("setTopView", this.layers));
                },
              },
              {
                key: "setBottomView",
                value: function () {
                  "bottom" !== this.layerViewType &&
                    (this.layers.forEach(function (e) {
                      e.isVisible = e.isBottom || e.isDrills || e.isKeepOut;
                    }),
                    this.setLayers(this.layers, !1),
                    (this.layerViewType = "bottom"),
                    this.emitLayerEvent("setBottomView", this.layers));
                },
              },
              {
                key: "viewType",
                get: function () {
                  return this.layerViewType;
                },
              },
              {
                key: "getBoardLayers",
                value: function (e, t) {
                  var r = this;
                  if (!e || 0 === e.length) return [];
                  0 === this.cachedBoardLayers.length &&
                    (this.cachedBoardLayers = e
                      .filter(function (e) {
                        return e.name !== E.Z.SelectionLayerName;
                      })
                      .map(function (e) {
                        return r.createDefaultBoardLayer(e);
                      }));
                  var n = [],
                    o = this.metadataLayers ? this.metadataLayers : [];
                  return (
                    this.cachedBoardLayers.forEach(function (e) {
                      var t = o.find(function (t) {
                        return e.searchName === t.searchName;
                      });
                      if (t) {
                        var r = b.l.getLayer(t.soft);
                        ((e.metaId = t.id),
                          (e.name = t.name),
                          (e.color = t.color ? t.color : e.color),
                          (e.layerGroup = t.group),
                          (e.displayIndex = t.displayIndex),
                          (e.groupDisplayIndex = t.groupDisplayIndex),
                          (e.stackIndex = t.stackIndex),
                          (e.isVisible = !0),
                          (e.soft = t.soft),
                          (e.isTop = r.isTop(t)),
                          (e.isBottom = r.isBottom(t)),
                          (e.isDrills = r.isDrillMap(t)),
                          (e.isKeepOut = r.isKeepOut(t)),
                          n.push(e));
                      }
                    }),
                    this.cachedBoardLayers.forEach(function (e) {
                      n.find(function (t) {
                        return e.id === t.id;
                      }) || ((e.isVisible = !0), n.push(e));
                    }),
                    t ? n.reverse() : n
                  );
                },
              },
              {
                key: "createRenderOptions",
                value: function (e, t) {
                  var r = [];
                  return (
                    (
                      (arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null) || this.getBoardLayers(e, t)
                    )
                      .filter(function (e) {
                        return e.isVisible && !e.ignored;
                      })
                      .sort(function (e, t) {
                        return e.stackIndex - t.stackIndex;
                      })
                      .forEach(function (e) {
                        return r.push(new S.Z(e.id, e.name));
                      }),
                    r.push(new S.Z(e.length - 1, E.Z.HighlightLayerName)),
                    r
                  );
                },
              },
              {
                key: "createDefaultBoardLayer",
                value: function (e) {
                  var t = {},
                    r = { kind: w.B.Other },
                    n = b.l.getLayer("");
                  return (
                    (t.id = e.index),
                    (t.metaId = -1),
                    (t.name = e.name),
                    (t.searchName = e.name),
                    (t.color = "none"),
                    (t.isVisible = !0),
                    (t.groupIndex = n.getLayerGroupStackIndex(r)),
                    (t.groupDisplayIndex = n.getLayerGroupDisplayStackIndex(r)),
                    (t.group = n.getLayerGroup(r)),
                    (t.displayIndex = 100 + e.index),
                    (t.stackIndex = 100 + e.index),
                    t
                  );
                },
              },
              {
                key: "compare",
                value: function (e, t) {
                  var r = e.groupIndex,
                    n = t.groupIndex;
                  return r === n
                    ? e.subKind === t.subKind
                      ? e.indexFrom === t.indexFrom
                        ? e.indexTo - t.indexTo
                        : e.indexFrom - t.indexFrom
                      : e.subKind - t.subKind
                    : r - n;
                },
              },
              {
                key: "emitLayerEvent",
                value: function (e, t) {
                  var r = {
                    eventType: e,
                    data: t,
                    needLayersChange:
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                  };
                  L.bus.emit("LayerManager:changedLayers", r);
                },
              },
            ],
          );
        })(),
        _ = (function () {
          return I(
            function e(t) {
              (T(this, e),
                (this.layers = []),
                (this.lastOnceLayer = null),
                (this.currentLayerState = null),
                (this.layerManager = t));
            },
            [
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
                    var r = this.lastOnceLayer.name;
                    (this.layers.forEach(function (e) {
                      return (e.isVisible =
                        e.name == r || "Background" == e.name);
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
                    var r = this.lastOnceLayer.name,
                      n = t.findIndex(function (e) {
                        return e.name == r;
                      });
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
                key: "prevOnceLayer",
                value: function () {
                  var e,
                    t = this.getSortedLayers().reverse();
                  if (this.lastOnceLayer && this.currentLayerState) {
                    var r = t.indexOf(this.lastOnceLayer);
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
                      return e.push.apply(e, x(t));
                    }),
                    e
                  );
                },
              },
            ],
          );
        })();
      function j(e) {
        return (
          (j =
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
          j(e)
        );
      }
      function G(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, R(n.key), n));
        }
      }
      function R(e) {
        var t = (function (e, t) {
          if ("object" != j(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != j(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == j(t) ? t : t + "";
      }
      var M = (function () {
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
              value: function (e) {
                return new C(e);
              },
            },
          ]) && G(e.prototype, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t;
      })();
      function N(e) {
        return (
          (N =
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
          N(e)
        );
      }
      function F(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, B(n.key), n));
        }
      }
      function B(e) {
        var t = (function (e, t) {
          if ("object" != N(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != N(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == N(t) ? t : t + "";
      }
      var V = (function () {
        return (
          (e = function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.isSelected = !1));
          }),
          (t = [
            {
              key: "addSelection",
              value: function (e, t, r) {
                return Promise.resolve([]);
              },
            },
            { key: "clearSelection", value: function () {} },
            { key: "updateMaterialMap", value: function (e) {} },
            { key: "handleHighlight", value: function (e) {} },
            {
              key: "isHighlight",
              value: function (e) {
                return !1;
              },
            },
            { key: "addHighlight", value: function (e) {} },
            { key: "clearHighlight", value: function () {} },
          ]) && F(e.prototype, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t;
      })();
      function A(e) {
        return (
          (A =
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
          A(e)
        );
      }
      function U(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, H(n.key), n));
        }
      }
      function H(e) {
        var t = (function (e, t) {
          if ("object" != A(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != A(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == A(t) ? t : t + "";
      }
      var Z = (function () {
          return (
            (e = function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
            }),
            (t = [
              {
                key: "cretateSelectionManager2d",
                value: function (e) {
                  return new V(e);
                },
              },
              {
                key: "cretateSelectionManager3d",
                value: function (e) {
                  return new V(e);
                },
              },
            ]) && U(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        Q = r(31065),
        K = r(63350),
        W = r(7414),
        Y = r(6660);
      function z(e) {
        return (
          (z =
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
          z(e)
        );
      }
      function $() {
        $ = function () {
          return t;
        };
        var e,
          t = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          u = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, n) {
          var i = t && t.prototype instanceof g ? t : g,
            a = Object.create(i.prototype),
            u = new P(n || []);
          return (o(a, "_invoke", { value: O(e, r, u) }), a);
        }
        function f(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var h = "suspendedStart",
          y = "suspendedYield",
          p = "executing",
          d = "completed",
          v = {};
        function g() {}
        function m() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var L = Object.getPrototypeOf,
          E = L && L(L(C([])));
        E && E !== r && n.call(E, a) && (w = E);
        var S = (b.prototype = g.prototype = Object.create(w));
        function k(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function r(o, i, a, u) {
            var c = f(e[o], e, i);
            if ("throw" !== c.type) {
              var s = c.arg,
                l = s.value;
              return l && "object" == z(l) && n.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      r("next", e, a, u);
                    },
                    function (e) {
                      r("throw", e, a, u);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return r("throw", e, a, u);
                    },
                  );
            }
            u(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, n) {
              function o() {
                return new t(function (t, o) {
                  r(e, n, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function O(t, r, n) {
          var o = h;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === d) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var c = T(u, n);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = d), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = p;
              var s = f(t, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? d : y), s.arg === v)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = d), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function T(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                T(t, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              v
            );
          var i = f(o, t.iterator, r.arg);
          if ("throw" === i.type)
            return (
              (r.method = "throw"),
              (r.arg = i.arg),
              (r.delegate = null),
              v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[t.resultName] = a.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                (r.delegate = null),
                v)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              v);
        }
        function D(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function I(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function P(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(D, this),
            this.reset(!0));
        }
        function C(t) {
          if (t || "" === t) {
            var r = t[a];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function r() {
                  for (; ++o < t.length; )
                    if (n.call(t, o))
                      return ((r.value = t[o]), (r.done = !1), r);
                  return ((r.value = e), (r.done = !0), r);
                };
              return (i.next = i);
            }
          }
          throw new TypeError(z(t) + " is not iterable");
        }
        return (
          (m.prototype = b),
          o(S, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: m, configurable: !0 }),
          (m.displayName = s(b, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), s(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(S)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          k(x.prototype),
          s(x.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new x(l(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          k(S),
          s(S, c, "Generator"),
          s(S, a, function () {
            return this;
          }),
          s(S, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return ((e.value = n), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (t.values = C),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(I),
                !t)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function o(n, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
                  if (c && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return (this.complete(r.completion, r.afterLoc), I(r), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    I(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: C(t), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function q(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, J(n.key), n));
        }
      }
      function J(e) {
        var t = (function (e, t) {
          if ("object" != z(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != z(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == z(t) ? t : t + "";
      }
      var X = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                c(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((n = n.apply(e, t || [])).next());
          });
        },
        ee = (function () {
          return (
            (e = function e() {
              var t = this;
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.currentDocumentIndex = 0),
                (this.documents = []),
                (this.logger = n.Q.createLogger("GerberEngine")),
                (this.engineFsm = new g(this)),
                (this.layerFactory = new M()),
                (this.needInitialAllZoomToFit = !0),
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
                  var r, n;
                  return t.logger.LogDebug(
                    t.engineFsm.getState() +
                      " with error " +
                      (null !==
                        (n =
                          null === (r = e.error) || void 0 === r
                            ? void 0
                            : r.message) && void 0 !== n
                        ? n
                        : e.error),
                  );
                }),
                this.engineFsm.on("SHOW", function (e) {
                  return t.logger.LogDebug(
                    t.engineFsm.getState() + " for render mode " + e.renderMode,
                  );
                }));
            }),
            (t = [
              {
                key: "setup",
                value: function (e) {
                  return this.engineFsm.goToSetup(e);
                },
              },
              {
                key: "name",
                get: function () {
                  return "GerberEngine";
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
                  return ["graphite.engine"];
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
                    "GerberEngine:didDocumentAttach",
                    "GerberEngine:didDocumentDettach",
                    "GerberEngine:didDocumentAttachError",
                    "GerberEngine:beforeDocumentInit",
                    "GerberEngine:afterDocumentInit",
                    "GerberEngine:beforeImportPCB",
                    "GerberEngine:afterImportPCB",
                    "LayerManager:changedLayers",
                    "GerberEngine:flipped",
                    "GerberEngine:layerManagerCreated",
                    "GraphiteEngine:documentChanged",
                    "GerberEngine:fps",
                    "GerberEngine:renderTime",
                    "GerberEngine:renderDocumentData",
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
                key: "activeDocument",
                get: function () {
                  return this.documents && 0 !== this.documents.length
                    ? this.documents[
                        this.currentDocumentIndex > this.documents.length
                          ? 0
                          : this.currentDocumentIndex
                      ]
                    : null;
                },
              },
              {
                key: "init",
                value: function () {
                  return X(
                    this,
                    void 0,
                    void 0,
                    $().mark(function e() {
                      var t;
                      return $().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.documents[0]),
                                  (e.next = 3),
                                  this.engineFsm.goToInit(t)
                                );
                              case 3:
                                return (
                                  (e.next = 5),
                                  this.engineFsm.goToRender(t)
                                );
                              case 5:
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
                key: "showView",
                value: function (e, t) {
                  return X(
                    this,
                    void 0,
                    void 0,
                    $().mark(function r() {
                      return $().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (r.next = 2),
                                  this.engineFsm.goToShow(e, t)
                                );
                              case 2:
                                this.needInitialAllZoomToFit &&
                                  ((this.needInitialAllZoomToFit = !1),
                                  this.pcbRenderer.allZoomToFit());
                              case 3:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this,
                      );
                    }),
                  );
                },
              },
              {
                key: "hideView",
                value: function () {
                  this.canvasControl &&
                    this.canvasControl.peformanceMonitor.stopFpsMeter();
                },
              },
              {
                key: "resetView",
                value: function () {
                  this.pcbRenderer &&
                    (this.pcbRenderer.zoomToFit(),
                    this.canvasControl.invalidate());
                },
              },
              {
                key: "doSetup",
                value: function (e) {
                  var t = e.response;
                  if (!t) {
                    var r = "Response is empty.";
                    throw (this.logger.LogError(r), new Error(r));
                  }
                  ((this.onCreatedScene2D = this.onCreatedScene2D.bind(this)),
                    this.setupMetadata(t),
                    n.Q.bus.once(
                      "GraphiteEngine:createdScene2D",
                      this.onCreatedScene2D,
                    ),
                    this.setupDocuments(t));
                },
              },
              {
                key: "doInit",
                value: function (e) {
                  return X(
                    this,
                    void 0,
                    void 0,
                    $().mark(function t() {
                      var r, o;
                      return $().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (0, Q.Z)(),
                                  (r = "Load document error."),
                                  (t.prev = 2),
                                  (o = new Y.Z()),
                                  (t.next = 6),
                                  o.loadLibs()
                                );
                              case 6:
                                return ((t.next = 8), this.resolveGraphite());
                              case 8:
                                return ((t.next = 10), this.loadDocument(e));
                              case 10:
                                try {
                                  n.Q.bus.emit(
                                    "GraphiteEngine:documentChanged",
                                    e,
                                  );
                                } catch (e) {
                                  this.logger.LogError(
                                    "GraphiteEngine:documentChanged emit error. " +
                                      e.message,
                                  );
                                }
                                t.next = 21;
                                break;
                              case 13:
                                if (
                                  ((t.prev = 13),
                                  (t.t0 = t.catch(2)),
                                  this.logger.LogDebug(r + " " + t.t0.message),
                                  !(t.t0 instanceof K.CV))
                                ) {
                                  t.next = 20;
                                  break;
                                }
                                throw t.t0;
                              case 20:
                                throw new Error(r);
                              case 21:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[2, 13]],
                      );
                    }),
                  );
                },
              },
              {
                key: "doRender",
                value: function (e) {
                  try {
                    ((this.pcbRenderer = this.canvasControl.createRenderer(
                      e.id,
                    )),
                      this.canvasControl.loadData(
                        e.renderData,
                        this.metadata.projectTypeName,
                      ),
                      n.Q.bus.emit("GerberEngine:didDocumentAttach", e.id));
                  } catch (e) {
                    throw (
                      "string" == typeof e
                        ? this.logger.LogError(e)
                        : this.logger.LogError(
                            "Error "
                              .concat(e.name, ": ")
                              .concat(e.message, "\n")
                              .concat(e.stack),
                          ),
                      new Error("Render document error.")
                    );
                  }
                },
              },
              {
                key: "doShow",
                value: function (e, t) {
                  var r = this.canvasControl.getContainerId(),
                    n = document.getElementById(r);
                  if (!n) throw new Error("Paint has not found.");
                  (e.appendChild(n),
                    (this.pcbRenderer.renderMode = t),
                    this.canvasControl.onResize(),
                    this.canvasControl.invalidate(),
                    this.canvasControl.peformanceMonitor.startFpsMeter(1e3));
                },
              },
              {
                key: "loadDocument",
                value: function (e) {
                  var t,
                    r,
                    o = this;
                  if (
                    (this.logger.LogDebug("Load document: ".concat(e.url)),
                    null ===
                      (r =
                        null === (t = n.Q.response) || void 0 === t
                          ? void 0
                          : t.storage) || void 0 === r
                      ? void 0
                      : r.isExpired)
                  )
                    throw new K.CV();
                  return new Promise(function (t) {
                    fetch(e.url, { method: "GET" })
                      .then(function (e) {
                        if (e.ok) return e.arrayBuffer();
                        var t = "Document loading error. [".concat(
                          e.statusText,
                          "]",
                        );
                        throw (o.logger.LogError(t), new Error(t));
                      })
                      .then(function (r) {
                        if (((e.isLoaded = !0), (e.renderData = r), !r))
                          throw (
                            o.logger.LogError("Document is empty."),
                            new Error("Document is empty.")
                          );
                        (o.logger.LogDebug(
                          "Succes load document: ".concat(e.url),
                        ),
                          t());
                      })
                      .catch(function (r) {
                        ((e.errorState = r), t());
                      });
                  });
                },
              },
              {
                key: "resolveGraphite",
                value: function () {
                  var e = this,
                    t = new W.Z();
                  return (
                    (this.controlDiv = window.document.createElement("div")),
                    (this.controlDiv.style.display = "none"),
                    window.document.body.appendChild(this.controlDiv),
                    (this.canvasControl = new m.C(
                      this.controlDiv,
                      new Z(),
                      "GerberView",
                    )),
                    this.canvasControl.peformanceMonitor.on(
                      "aggregateFps",
                      function (e) {
                        return n.Q.bus.emit("GerberEngine:fps", e);
                      },
                    ),
                    this.canvasControl.peformanceMonitor.on(
                      "renderTime",
                      function (e, t) {
                        return n.Q.bus.emit("GerberEngine:renderTime", e, t);
                      },
                    ),
                    new Promise(function (r, n) {
                      t.on("COMPLETED", function (e) {
                        return r();
                      })
                        .on("CRASHED", function (e) {
                          return n(e);
                        })
                        .init(e.canvasControl.canvas);
                    })
                  );
                },
              },
              {
                key: "setupMetadata",
                value: function (e) {
                  this.metadata = e.metadata;
                },
              },
              {
                key: "setupDocuments",
                value: function (e) {
                  var t,
                    r = this,
                    n = [];
                  if (
                    (e &&
                      e.storage &&
                      e.storage.files &&
                      e.storage.files
                        .filter(function (e) {
                          return "CamGraphite" === e.fileType;
                        })
                        .forEach(function (t, r) {
                          var o = e.storage.files.find(function (e) {
                              return (
                                "Preview" === e.fileType &&
                                e.originalName === t.originalName &&
                                e.dataFileUrl.toLowerCase().includes("_2d.png")
                              );
                            }),
                            i = e.storage.files.find(function (e) {
                              return (
                                "Preview" === e.fileType &&
                                e.originalName === t.originalName &&
                                e.dataFileUrl.toLowerCase().includes("_3d.png")
                              );
                            }),
                            a = {
                              id: r.toString(),
                              url: t.dataFileUrl,
                              previewUrl2D: o ? o.dataFileUrl : "",
                              previewUrl3D: i ? i.dataFileUrl : "",
                              isLoaded: !1,
                              name: t.originalName,
                              displayName: t.originalName,
                              renderData: null,
                              errorState: null,
                              toString: function () {
                                return "["
                                  .concat(a.id, "] ")
                                  .concat(a.name, " [")
                                  .concat(
                                    a.isLoaded ? "Lodaed" : "Not Loaded",
                                    "]",
                                  );
                              },
                            };
                          n.push(a);
                        }),
                    0 === n.length)
                  )
                    throw new Error("No documents to display");
                  var o =
                    null === (t = e.metadata) || void 0 === t
                      ? void 0
                      : t.camtastic;
                  ((null == o ? void 0 : o.length) &&
                    o
                      .reduce(function (e, t) {
                        var r,
                          n =
                            null !== (r = t.sourceKind) && void 0 !== r
                              ? r
                              : "Gerber",
                          o = e.get(n);
                        return (void 0 !== o ? o.push(t) : e.set(n, [t]), e);
                      }, new Map())
                      .forEach(function (e, t) {
                        for (
                          var o =
                              "OdbPlusPlus" === t ? "ODBPLUSPLUS" : "GERBER",
                            i = function () {
                              var i = e[a].fileName + ".cam",
                                u = n.find(function (e) {
                                  return e.name == i;
                                });
                              if (void 0 === u) return 1;
                              ((u.id =
                                0 == a
                                  ? "DEFAULT_".concat(o)
                                  : "DOCUMENT_".concat(a, "_").concat(o)),
                                (u.type = t),
                                r.documents.push(u));
                            },
                            a = 0;
                          a < e.length;
                          a++
                        )
                          i();
                      }),
                    n
                      .filter(function (e) {
                        return !r.documents.find(function (t) {
                          return t == e;
                        });
                      })
                      .forEach(function (e) {
                        return r.documents.push(e);
                      }));
                },
              },
              {
                key: "onCreatedScene2D",
                value: function (e) {
                  var t = this;
                  this.layerFactory &&
                    ((this.layerManager_ =
                      this.layerFactory.createLayerManager(e)),
                    this.layerManager_.resetLayers(),
                    n.Q.bus.emit(
                      "GerberEngine:layerManagerCreated",
                      this.layerManager_,
                    ),
                    n.Q.bus.on("LayerManager:changedLayers", function () {
                      return t.canvasControl.invalidate();
                    }),
                    n.Q.bus.on("GerberEngine:flipped", function () {
                      return t.canvasControl.invalidate();
                    }));
                },
              },
            ]),
            t && q(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        te = {
          type: "Engine",
          name: "GerberEngine",
          description: "Presents Gerber documents engine module",
          create: function () {
            return new ee();
          },
        };
      L.addModule(te);
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 96433))), e.O());
  },
]);
