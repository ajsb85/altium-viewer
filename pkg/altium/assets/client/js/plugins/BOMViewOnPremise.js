/*! For license information please see BOMViewOnPremise.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [26602, 74687, 11903, 318],
  {
    50041: (t, e, r) => {
      var n = r(83404),
        o = r(98170);
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          i(t)
        );
      }
      function a() {
        a = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          c = "function" == typeof Symbol ? Symbol : {},
          u = c.iterator || "@@iterator",
          f = c.asyncIterator || "@@asyncIterator",
          l = c.toStringTag || "@@toStringTag";
        function s(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function h(t, e, r, n) {
          var i = e && e.prototype instanceof g ? e : g,
            a = Object.create(i.prototype),
            c = new N(n || []);
          return (o(a, "_invoke", { value: k(t, r, c) }), a);
        }
        function p(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = h;
        var y = "suspendedStart",
          v = "suspendedYield",
          d = "executing",
          w = "completed",
          m = {};
        function g() {}
        function b() {}
        function _() {}
        var O = {};
        s(O, u, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          E = x && x(x(R([])));
        E && E !== r && n.call(E, u) && (O = E);
        var L = (_.prototype = g.prototype = Object.create(O));
        function j(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function r(o, a, c, u) {
            var f = p(t[o], t, a);
            if ("throw" !== f.type) {
              var l = f.arg,
                s = l.value;
              return s && "object" == i(s) && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, c, u);
                    },
                    function (t) {
                      r("throw", t, c, u);
                    },
                  )
                : e.resolve(s).then(
                    function (t) {
                      ((l.value = t), c(l));
                    },
                    function (t) {
                      return r("throw", t, c, u);
                    },
                  );
            }
            u(f.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function k(e, r, n) {
          var o = y;
          return function (i, a) {
            if (o === d) throw Error("Generator is already running");
            if (o === w) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = S(c, n);
                if (u) {
                  if (u === m) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === y) throw ((o = w), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = d;
              var f = p(e, r, n);
              if ("normal" === f.type) {
                if (((o = n.done ? w : v), f.arg === m)) continue;
                return { value: f.arg, done: n.done };
              }
              "throw" === f.type &&
                ((o = w), (n.method = "throw"), (n.arg = f.arg));
            }
          };
        }
        function S(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                S(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              m
            );
          var i = p(o, e.iterator, r.arg);
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
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                m)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              m);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function G(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function N(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0));
        }
        function R(e) {
          if (e || "" === e) {
            var r = e[u];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o))
                      return ((r.value = e[o]), (r.done = !1), r);
                  return ((r.value = t), (r.done = !0), r);
                };
              return (a.next = a);
            }
          }
          throw new TypeError(i(e) + " is not iterable");
        }
        return (
          (b.prototype = _),
          o(L, "constructor", { value: _, configurable: !0 }),
          o(_, "constructor", { value: b, configurable: !0 }),
          (b.displayName = s(_, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === b || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, _)
                : ((t.__proto__ = _), s(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          j(P.prototype),
          s(P.prototype, f, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new P(h(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          j(L),
          s(L, l, "Generator"),
          s(L, u, function () {
            return this;
          }),
          s(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = R),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(G),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, "catchLoc"),
                    f = n.call(a, "finallyLoc");
                  if (u && f) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!f)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                m
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), G(r), m);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    G(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: R(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                m
              );
            },
          }),
          e
        );
      }
      function c(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, u(n.key), n));
        }
      }
      function u(t) {
        var e = (function (t, e) {
          if ("object" != i(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != i(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == i(e) ? e : e + "";
      }
      function f(t, e, r) {
        return (
          (e = s(e)),
          (function (t, e) {
            if (e && ("object" == i(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            l()
              ? Reflect.construct(e, r || [], s(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function l() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (l = function () {
          return !!t;
        })();
      }
      function s(t) {
        return (
          (s = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          s(t)
        );
      }
      function h(t, e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          h(t, e)
        );
      }
      var p = window.__CORE__,
        y = (function (t) {
          function e() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              f(this, e, arguments)
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && h(t, e));
            })(e, t),
            (r = e),
            (n = [
              {
                key: "loadBomData",
                value: function () {
                  return (
                    (t = this),
                    (e = void 0),
                    (r = void 0),
                    (n = a().mark(function t() {
                      var e, r, n, o;
                      return a().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = p.response),
                                  (r = e.storage.files.find(function (t) {
                                    return "Bom" === t.fileType;
                                  })),
                                  (t.next = 4),
                                  fetch(r.dataFileUrl, { method: "GET" })
                                );
                              case 4:
                                if ((n = t.sent).ok) {
                                  t.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "Loading error. [".concat(n.statusText, "]"),
                                );
                              case 7:
                                return ((t.next = 9), n.json());
                              case 9:
                                ((o = t.sent),
                                  this.dispatch({
                                    type: "Run",
                                    data: this.toViewItems(o),
                                  }));
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    })),
                    new (r || (r = Promise))(function (o, i) {
                      function a(t) {
                        try {
                          u(n.next(t));
                        } catch (t) {
                          i(t);
                        }
                      }
                      function c(t) {
                        try {
                          u(n.throw(t));
                        } catch (t) {
                          i(t);
                        }
                      }
                      function u(t) {
                        var e;
                        t.done
                          ? o(t.value)
                          : ((e = t.value),
                            e instanceof r
                              ? e
                              : new r(function (t) {
                                  t(e);
                                })).then(a, c);
                      }
                      u((n = n.apply(t, e || [])).next());
                    })
                  );
                  var t, e, r, n;
                },
              },
            ]),
            n && c(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(o.Z),
        v = window.__APP__.createModule,
        d =
          (window.__APP__.library.i18n.t,
          v({
            type: "View",
            description: "A design BOM view module",
            create: function (t) {
              return (0, n.Z)(t, y);
            },
          }));
      window.__CORE__ && window.__CORE__.addModule(d);
    },
    10311: (t) => {
      t.exports = Vue;
    },
  },
  (t) => {
    (t.O(0, [66951, 21759], () => t((t.s = 50041))), t.O());
  },
]);
