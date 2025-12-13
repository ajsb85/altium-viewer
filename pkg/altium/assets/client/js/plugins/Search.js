/*! For license information please see Search.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [12955, 74687, 11903, 318],
  {
    14711: (e, t, r) => {
      var n = r(61204),
        o = r(10311),
        i = { net: 1, component: 2, all: 3 },
        c = r(77826);
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
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                s(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function s(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != a(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != a(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == a(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var f = window.__APP__.library.Vuex.createStore,
        p = window.__APP__.library.i18n.t,
        h = f({
          state: {
            value: "",
            resultLimit: 5,
            isOpenedFilters: !1,
            filters: [
              {
                id: i.all,
                name: p("viewer.plugins.Search.filterTypes.all"),
                isActive: !0,
              },
              {
                id: i.component,
                name: p("viewer.plugins.Search.filterTypes.component"),
              },
              { id: i.net, name: p("viewer.plugins.Search.filterTypes.net") },
            ],
            recentSearch: [],
            result: [],
          },
          getters: {
            activeFilter: function (e) {
              var t;
              return e.isOpenedFilters
                ? null == e || null === (t = e.filters) || void 0 === t
                  ? void 0
                  : t.find(function (e) {
                      return e.isActive;
                    })
                : e.filters[0];
            },
            result: function (e) {
              var t = e.resultLimit;
              return e.result.reduce(
                function (e, r) {
                  var n = r.items;
                  return (
                    null != n &&
                      n.length &&
                      ((e.length += null == n ? void 0 : n.length),
                      (e.limitedLength +=
                        null !== t && isFinite(t)
                          ? n.slice(0, 5).length
                          : n.length),
                      e.sections.push(l(l({}, r), {}, { items: n }))),
                    e
                  );
                },
                { length: 0, limitedLength: 0, sections: [] },
              );
            },
          },
          mutations: {
            setValue: function (e, t) {
              e.value = t;
            },
            resetValue: function (e) {
              e.value = "";
            },
            setFilters: function (e, t) {
              e.filters = t;
            },
            resetFilters: function (e) {
              e.filters = e.filters.map(function (e, t) {
                return l(l({}, e), {}, { isActive: 0 === t });
              });
            },
            openFilters: function (e) {
              e.isOpenedFilters = !0;
            },
            closeFilters: function (e) {
              e.isOpenedFilters = !1;
            },
            setResult: function (e, t) {
              e.result = t.map(function (e) {
                return l(l({}, e), {}, { clientId: (0, c.Z)() });
              });
            },
            setRecentSearch: function (e, t) {
              e.recentSearch = t;
            },
            resetLimit: function (e) {
              e.resultLimit = 5;
            },
            removeLimit: function (e) {
              e.resultLimit = null;
            },
          },
        }),
        m = function (e) {
          return h.commit("setValue", e);
        };
      const v = h;
      var d = { class: "search" },
        y = { key: 0, class: "search__body" },
        b = { class: "form__section" },
        g = { key: 0, class: "form__section" },
        w = r(69314),
        S = r(96956),
        _ = r(15938);
      function O(e) {
        return (
          (O =
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
          O(e)
        );
      }
      function P() {
        P = function () {
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
          a = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function l(e, t, r) {
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
          l({}, "");
        } catch (e) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function s(e, t, r, n) {
          var i = t && t.prototype instanceof y ? t : y,
            c = Object.create(i.prototype),
            a = new F(n || []);
          return (o(c, "_invoke", { value: L(e, r, a) }), c);
        }
        function f(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = s;
        var p = "suspendedStart",
          h = "suspendedYield",
          m = "executing",
          v = "completed",
          d = {};
        function y() {}
        function b() {}
        function g() {}
        var w = {};
        l(w, c, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          _ = S && S(S(V([])));
        _ && _ !== r && n.call(_, c) && (w = _);
        var j = (g.prototype = y.prototype = Object.create(w));
        function k(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function r(o, i, c, a) {
            var u = f(e[o], e, i);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == O(s) && n.call(s, "__await")
                ? t.resolve(s.__await).then(
                    function (e) {
                      r("next", e, c, a);
                    },
                    function (e) {
                      r("throw", e, c, a);
                    },
                  )
                : t.resolve(s).then(
                    function (e) {
                      ((l.value = e), c(l));
                    },
                    function (e) {
                      return r("throw", e, c, a);
                    },
                  );
            }
            a(u.arg);
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
        function L(t, r, n) {
          var o = p;
          return function (i, c) {
            if (o === m) throw Error("Generator is already running");
            if (o === v) {
              if ("throw" === i) throw c;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = c; ; ) {
              var a = n.delegate;
              if (a) {
                var u = x(a, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === p) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = m;
              var l = f(t, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : h), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function x(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                x(t, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              d
            );
          var i = f(o, t.iterator, r.arg);
          if ("throw" === i.type)
            return (
              (r.method = "throw"),
              (r.arg = i.arg),
              (r.delegate = null),
              d
            );
          var c = i.arg;
          return c
            ? c.done
              ? ((r[t.resultName] = c.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                (r.delegate = null),
                d)
              : c
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function C(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function B(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function F(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(C, this),
            this.reset(!0));
        }
        function V(t) {
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
          throw new TypeError(O(t) + " is not iterable");
        }
        return (
          (b.prototype = g),
          o(j, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: b, configurable: !0 }),
          (b.displayName = l(g, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), l(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(j)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          k(E.prototype),
          l(E.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var c = new E(s(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          k(j),
          l(j, u, "Generator"),
          l(j, c, function () {
            return this;
          }),
          l(j, "toString", function () {
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
          (t.values = V),
          (F.prototype = {
            constructor: F,
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var c = this.tryEntries[i],
                  a = c.completion;
                if ("root" === c.tryLoc) return o("end");
                if (c.tryLoc <= this.prev) {
                  var u = n.call(c, "catchLoc"),
                    l = n.call(c, "finallyLoc");
                  if (u && l) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                  } else if (u) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
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
              var c = i ? i.completion : {};
              return (
                (c.type = e),
                (c.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                  : this.complete(c)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return (this.complete(r.completion, r.afterLoc), B(r), d);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    B(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: V(t), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = e),
                d
              );
            },
          }),
          t
        );
      }
      function j(e, t, r, n, o, i, c) {
        try {
          var a = e[i](c),
            u = a.value;
        } catch (e) {
          return void r(e);
        }
        a.done ? t(u) : Promise.resolve(u).then(n, o);
      }
      function k(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function c(e) {
              j(i, n, o, c, a, "next", e);
            }
            function a(e) {
              j(i, n, o, c, a, "throw", e);
            }
            c(void 0);
          });
        };
      }
      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                x(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : E(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function x(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != O(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != O(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == O(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var C = window.__APP__.library,
        B = C.Vuex,
        F = B.mapState,
        V = B.mapGetters,
        A = B.mapMutations,
        T = C.i18n.t,
        D = window.__CORE__;
      const N = {
        name: "BaseForm",
        components: { AfsButtonIcon: w.A, AfsInput: S.A, AfsTabs: _.Z },
        data: function () {
          return { t: T };
        },
        computed: L(
          L(
            L(
              {},
              F({
                _value: "value",
                _filters: "filters",
                isOpenedFilters: "isOpenedFilters",
              }),
            ),
            V(["activeFilter", "result"]),
          ),
          {},
          {
            value: {
              get: function () {
                return this._value;
              },
              set: function (e) {
                this.setValue(e);
              },
            },
            filters: {
              get: function () {
                return this._filters;
              },
              set: function (e) {
                this.setFilters(e);
              },
            },
            computedValue: function () {
              return { value: this.value, filter: this.activeFilter.id };
            },
          },
        ),
        watch: {
          computedValue: function (e, t) {
            D.bus.emit("Search:change", e);
          },
        },
        mounted: function () {
          var e = this;
          return k(
            P().mark(function t() {
              return P().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return ((t.next = 2), e.$nextTick());
                    case 2:
                      (e.focus(), D.bus.on("Search:activate", e.focus));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          )();
        },
        unmounted: function () {
          D.bus.off("Search:activate", this.focus);
        },
        methods: L(
          L({}, A(["setValue", "setFilters", "openFilters", "closeFilters"])),
          {},
          {
            focus: function () {
              var e = this;
              return k(
                P().mark(function t() {
                  return P().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return ((t.next = 2), e.$nextTick());
                        case 2:
                          setTimeout(function () {
                            var t,
                              r,
                              n =
                                null === (t = e.$refs.input) ||
                                void 0 === t ||
                                null === (r = t.$refs) ||
                                void 0 === r
                                  ? void 0
                                  : r.input;
                            n && n.focus();
                          }, 50);
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
            onSubmit: function () {
              this.$emit("submit", this.computedValue);
            },
            onFilterClick: function () {
              this.isOpenedFilters ? this.closeFilters() : this.openFilters();
            },
          },
        ),
      };
      var I = r(46021);
      const R = (0, I.Z)(N, [
        [
          "render",
          function (e, t, r, n, i, c) {
            var a = (0, o.resolveComponent)("AfsInput"),
              u = (0, o.resolveComponent)("AfsButtonIcon"),
              l = (0, o.resolveComponent)("AfsTabs");
            return (
              (0, o.openBlock)(),
              (0, o.createElementBlock)(
                "form",
                {
                  class: "form",
                  onSubmit:
                    t[4] ||
                    (t[4] = (0, o.withModifiers)(
                      function () {
                        return c.onSubmit && c.onSubmit.apply(c, arguments);
                      },
                      ["prevent"],
                    )),
                },
                [
                  (0, o.createElementVNode)("div", b, [
                    (0, o.createVNode)(
                      a,
                      {
                        ref: "input",
                        modelValue: c.value,
                        "onUpdate:modelValue":
                          t[0] ||
                          (t[0] = function (e) {
                            return (c.value = e);
                          }),
                        placeholder: i.t(
                          "viewer.plugins.Search.BaseForm.searchPlaceholder",
                        ),
                        class: "form__input",
                        onKeyup:
                          t[1] ||
                          (t[1] = (0, o.withModifiers)(function () {}, [
                            "stop",
                          ])),
                        onKeydown:
                          t[2] ||
                          (t[2] = (0, o.withModifiers)(function () {}, [
                            "stop",
                          ])),
                      },
                      null,
                      8,
                      ["modelValue", "placeholder"],
                    ),
                    (0, o.createVNode)(u, {
                      primary: "",
                      type: "submit",
                      icon: "search-thin-16",
                      class: "form__btn form__icon-search",
                    }),
                    (0, o.createVNode)(
                      u,
                      {
                        icon: "filters-12",
                        class: "form__btn",
                        onClick: c.onFilterClick,
                      },
                      null,
                      8,
                      ["onClick"],
                    ),
                  ]),
                  e.isOpenedFilters
                    ? ((0, o.openBlock)(),
                      (0, o.createElementBlock)("div", g, [
                        (0, o.createVNode)(
                          l,
                          {
                            modelValue: c.filters,
                            "onUpdate:modelValue":
                              t[3] ||
                              (t[3] = function (e) {
                                return (c.filters = e);
                              }),
                          },
                          null,
                          8,
                          ["modelValue"],
                        ),
                      ]))
                    : (0, o.createCommentVNode)("v-if", !0),
                ],
                32,
              )
            );
          },
        ],
        ["__scopeId", "data-v-0f40e223"],
      ]);
      var G = { class: "recent-search" },
        $ = { class: "list" },
        H = ["onClick", "onKeydown"],
        M = r(77337),
        Z = r(91261),
        K = r(77453),
        Y = r(75419),
        q = r(12561),
        U = r(74839);
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
      function J(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != z(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != z(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == z(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var Q = window.__APP__.utils.keyboard,
        W = window.__APP__.analytics,
        X = J(J({}, i.component, "union-12"), i.net, "net-12"),
        ee = J(J({}, i.component, "Component"), i.net, "Net"),
        te = J(J({}, i.component, "Component"), i.net, "Net");
      const re = {
          name: "List",
          components: { AfsIcon: M._, AfsContextMenu: Z.C, AfsText: K.A },
          directives: { hint: Y.h, trim: q.t },
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return { hintText: null };
          },
          computed: {
            keyboard: function () {
              return new Q([
                { name: "backward", codes: [37, 38] },
                { name: "forward", codes: [39, 40] },
                { name: "enter", codes: [13, 32] },
              ]);
            },
            hintId: function () {
              return (0, U.g)();
            },
            hintConfig: function () {
              return {
                type: "hint",
                id: this.hintId,
                modifiers: { y: "top", x: "center" },
                offset: 8,
              };
            },
          },
          watch: {
            keyboard: {
              immediate: !0,
              handler: function (e) {
                e
                  ? (e.on("backward", this.onBackward),
                    e.on("forward", this.onForward),
                    e.on("enter", this.onEnter))
                  : (e.off("backward", this.onBackward),
                    e.off("forward", this.onForward),
                    e.off("enter", this.onEnter));
              },
            },
          },
          methods: {
            onHintOpen: function (e) {
              var t = this;
              return function () {
                t.hintText = ee[e.type];
              };
            },
            onHintClose: function (e) {
              var t = this;
              return function () {
                t.hintText = null;
              };
            },
            onClick: function (e) {
              this.$emit("item-click", e);
              var t = te[e.type];
              W.dispatchPanelsEvent("Search", { action: t });
            },
            onPress: function (e, t) {
              this.keyboard.emit(e.keyCode, t, e);
            },
            onEnter: function (e) {
              this.$emit("item-click", this.items[e]);
            },
            onBackward: function (e) {
              this.$emit("backward", e);
            },
            onForward: function (e) {
              this.$emit("forward", e);
            },
            getIconByType: function (e) {
              return X[e];
            },
          },
        },
        ne = (0, I.Z)(re, [
          [
            "render",
            function (e, t, r, n, i, c) {
              var a = (0, o.resolveComponent)("AfsText"),
                u = (0, o.resolveComponent)("AfsIcon"),
                l = (0, o.resolveComponent)("AfsContextMenu"),
                s = (0, o.resolveDirective)("trim"),
                f = (0, o.resolveDirective)("hint");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)("div", $, [
                  ((0, o.openBlock)(!0),
                  (0, o.createElementBlock)(
                    o.Fragment,
                    null,
                    (0, o.renderList)(r.items, function (e, t) {
                      return (
                        (0, o.openBlock)(),
                        (0, o.createElementBlock)(
                          "div",
                          { key: e.clientID, class: "list__item" },
                          [
                            (0, o.createElementVNode)(
                              "button",
                              {
                                ref_for: !0,
                                ref: "item",
                                type: "button",
                                class: "list__control",
                                onClick: (0, o.withModifiers)(
                                  function (t) {
                                    return c.onClick(e);
                                  },
                                  ["prevent"],
                                ),
                                onKeydown: function (e) {
                                  return c.onPress(e, t);
                                },
                              },
                              [
                                (0, o.withDirectives)(
                                  ((0, o.openBlock)(),
                                  (0, o.createBlock)(
                                    a,
                                    {
                                      class: "list__text",
                                      type: "single line",
                                      ellipsis: "",
                                    },
                                    {
                                      default: (0, o.withCtx)(function () {
                                        return [
                                          (0, o.createTextVNode)(
                                            (0, o.toDisplayString)(e.text),
                                            1,
                                          ),
                                        ];
                                      }),
                                      _: 2,
                                    },
                                    1024,
                                  )),
                                  [[s, { hint: e.text }]],
                                ),
                                (0, o.withDirectives)(
                                  (0, o.createVNode)(
                                    u,
                                    {
                                      name: c.getIconByType(e.type),
                                      class: "list__icon",
                                    },
                                    null,
                                    8,
                                    ["name"],
                                  ),
                                  [
                                    [
                                      f,
                                      {
                                        id: c.hintId,
                                        onOpen: c.onHintOpen(e),
                                        onClose: c.onHintClose(e),
                                      },
                                    ],
                                  ],
                                ),
                              ],
                              40,
                              H,
                            ),
                          ],
                        )
                      );
                    }),
                    128,
                  )),
                  (0, o.createVNode)(
                    l,
                    (0, o.normalizeProps)(
                      (0, o.guardReactiveProps)(c.hintConfig),
                    ),
                    {
                      default: (0, o.withCtx)(function () {
                        return [
                          (0, o.createTextVNode)(
                            (0, o.toDisplayString)(e.hintText),
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
          ["__scopeId", "data-v-bd042d40"],
        ]);
      var oe = { class: "label" };
      const ie = { name: "Label" },
        ce = (0, I.Z)(ie, [
          [
            "render",
            function (e, t, r, n, i, c) {
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)("div", oe, [
                  (0, o.renderSlot)(e.$slots, "default", {}, void 0, !0),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-4d420261"],
        ]);
      function ae(e) {
        return (
          (ae =
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
          ae(e)
        );
      }
      function ue(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(Object(r), !0).forEach(function (t) {
                se(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ue(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function se(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ae(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != ae(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == ae(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var fe = window.__APP__.library.Vuex,
        pe = fe.mapState,
        he = fe.mapGetters,
        me = window.__APP__.library.i18n.t,
        ve = window.__CORE__;
      const de = {
          name: "BaseRecentSearch",
          components: { Label: ce, List: ne },
          computed: le(
            le(
              {},
              pe(["recentSearch", "value", "isOpenedFilters", "resultLimit"]),
            ),
            he(["activeFilter"]),
          ),
          data: function () {
            return { t: me };
          },
          methods: {
            onClick: function (e) {
              ve.bus.emit("Search:select", {
                data: {
                  value: this.value,
                  filter: this.activeFilter.id,
                  isOpenedFilters: this.isOpenedFilters,
                  resultLimit: this.resultLimit,
                },
                item: le({}, e),
              });
            },
          },
        },
        ye = (0, I.Z)(de, [
          [
            "render",
            function (e, t, r, n, i, c) {
              var a = (0, o.resolveComponent)("Label"),
                u = (0, o.resolveComponent)("List");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)("div", G, [
                  (0, o.createVNode)(a, null, {
                    default: (0, o.withCtx)(function () {
                      return [
                        (0, o.createTextVNode)(
                          (0, o.toDisplayString)(
                            i.t("viewer.plugins.Search.BaseRecentSearch.title"),
                          ),
                          1,
                        ),
                      ];
                    }),
                    _: 1,
                  }),
                  (0, o.createVNode)(
                    u,
                    { items: e.recentSearch, onItemClick: c.onClick },
                    null,
                    8,
                    ["items", "onItemClick"],
                  ),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-16b3501c"],
        ]);
      var be = { class: "result" },
        ge = { key: 0, class: "result__items" },
        we = { class: "result__label-wrapper" },
        Se = { key: 1, class: "result__not-found" },
        _e = { class: "result__not-found-container" },
        Oe = { class: "result-section" },
        Pe = { class: "result-section__header" };
      function je(e) {
        return (
          (je =
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
          je(e)
        );
      }
      function ke(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ke(Object(r), !0).forEach(function (t) {
                Le(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ke(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function Le(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != je(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != je(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == je(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var xe = window.__APP__.library.Vuex,
        Ce = xe.mapState,
        Be = xe.mapMutations,
        Fe = xe.mapGetters,
        Ve = window.__CORE__;
      const Ae = {
          name: "ResultSection",
          components: { Label: ce, List: ne },
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: Ee(
            Ee(
              Ee(
                {},
                Ce(["recentSearch", "value", "isOpenedFilters", "resultLimit"]),
              ),
              Fe(["activeFilter"]),
            ),
            {},
            {
              list: function () {
                return null !== this.resultLimit && isFinite(this.resultLimit)
                  ? this.items.slice(0, this.resultLimit)
                  : this.items;
              },
            },
          ),
          methods: Ee(
            Ee({}, Be(["setRecentSearch"])),
            {},
            {
              goTo: function (e) {
                var t, r, n, o, i, c, a, u;
                if (e < 0) return this.$emit("backward");
                if (
                  e >=
                  (null === (t = this.$refs) ||
                  void 0 === t ||
                  null === (r = t.list) ||
                  void 0 === r ||
                  null === (n = r.$refs) ||
                  void 0 === n ||
                  null === (o = n.item) ||
                  void 0 === o
                    ? void 0
                    : o.length)
                )
                  return this.$emit("forward");
                var l =
                  null === (i = this.$refs) ||
                  void 0 === i ||
                  null === (c = i.list) ||
                  void 0 === c ||
                  null === (a = c.$refs) ||
                  void 0 === a ||
                  null === (u = a.item) ||
                  void 0 === u
                    ? void 0
                    : u[e];
                l && l.focus();
              },
              onBackward: function (e) {
                this.goTo(--e);
              },
              onForward: function (e) {
                this.goTo(++e);
              },
              onClick: function (e) {
                var t = this.recentSearch.filter(function (t) {
                  return t.text !== e.text;
                });
                (t.unshift(e),
                  this.setRecentSearch(t.slice(0, 5)),
                  Ve.bus.emit("Search:select", {
                    data: {
                      value: this.value,
                      filter: this.activeFilter.id,
                      isOpenedFilters: this.isOpenedFilters,
                      resultLimit: this.resultLimit,
                    },
                    item: Ee({}, e),
                  }));
              },
            },
          ),
        },
        Te = (0, I.Z)(Ae, [
          [
            "render",
            function (e, t, r, n, i, c) {
              var a = (0, o.resolveComponent)("Label"),
                u = (0, o.resolveComponent)("List");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)("div", Oe, [
                  (0, o.createElementVNode)("div", Pe, [
                    (0, o.createVNode)(
                      a,
                      { class: "result-section__label" },
                      {
                        default: (0, o.withCtx)(function () {
                          return [(0, o.renderSlot)(e.$slots, "label")];
                        }),
                        _: 3,
                      },
                    ),
                  ]),
                  (0, o.createVNode)(
                    u,
                    {
                      ref: "list",
                      items: c.list,
                      onItemClick: c.onClick,
                      onBackward: c.onBackward,
                      onForward: c.onForward,
                    },
                    null,
                    8,
                    ["items", "onItemClick", "onBackward", "onForward"],
                  ),
                ])
              );
            },
          ],
        ]);
      function De(e) {
        return (
          (De =
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
          De(e)
        );
      }
      function Ne(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ne(Object(r), !0).forEach(function (t) {
                Re(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ne(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function Re(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != De(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != De(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == De(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var Ge = window.__APP__.library.Vuex,
        $e = Ge.mapState,
        He = Ge.mapGetters;
      const Me = {
          name: "BaseResult",
          components: { ResultSection: Te },
          directives: { trim: q.t },
          computed: Ie(
            Ie(Ie({}, $e(["value"])), He(["result"])),
            {},
            {
              notFound: function () {
                return '"'.concat(this.value, '" not found');
              },
              hasResult: function () {
                var e, t;
                return !(
                  null === (e = this.result) ||
                  void 0 === e ||
                  null === (t = e.sections) ||
                  void 0 === t ||
                  !t.length
                );
              },
            },
          ),
          methods: {
            goTo: function (e, t) {
              var r,
                n,
                o,
                i,
                c,
                a,
                u =
                  null === (r = this.$refs) ||
                  void 0 === r ||
                  null === (n = r.section) ||
                  void 0 === n
                    ? void 0
                    : n[e],
                l =
                  null == u ||
                  null === (o = u.$refs) ||
                  void 0 === o ||
                  null === (i = o.list) ||
                  void 0 === i ||
                  null === (c = i.$refs) ||
                  void 0 === c ||
                  null === (a = c.item) ||
                  void 0 === a
                    ? void 0
                    : a.length;
              u && u.goTo(t ? l - 1 : 0);
            },
            onBackward: function (e) {
              this.goTo(--e, !0);
            },
            onForward: function (e) {
              this.goTo(++e);
            },
          },
        },
        Ze = (0, I.Z)(Me, [
          [
            "render",
            function (e, t, r, n, i, c) {
              var a = (0, o.resolveComponent)("ResultSection"),
                u = (0, o.resolveDirective)("trim");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)("div", be, [
                  c.hasResult
                    ? ((0, o.openBlock)(),
                      (0, o.createElementBlock)("div", ge, [
                        ((0, o.openBlock)(!0),
                        (0, o.createElementBlock)(
                          o.Fragment,
                          null,
                          (0, o.renderList)(e.result.sections, function (e, t) {
                            return (
                              (0, o.openBlock)(),
                              (0, o.createBlock)(
                                a,
                                {
                                  ref_for: !0,
                                  ref: "section",
                                  key: e.id,
                                  items: e.items,
                                  onBackward: function (e) {
                                    return c.onBackward(t);
                                  },
                                  onForward: function (e) {
                                    return c.onForward(t);
                                  },
                                },
                                {
                                  label: (0, o.withCtx)(function () {
                                    return [
                                      (0, o.withDirectives)(
                                        ((0, o.openBlock)(),
                                        (0, o.createElementBlock)("div", we, [
                                          (0, o.createElementVNode)(
                                            "span",
                                            null,
                                            (0, o.toDisplayString)(e.label),
                                            1,
                                          ),
                                        ])),
                                        [[u, { hint: e.label }]],
                                      ),
                                    ];
                                  }),
                                  _: 2,
                                },
                                1032,
                                ["items", "onBackward", "onForward"],
                              )
                            );
                          }),
                          128,
                        )),
                      ]))
                    : ((0, o.openBlock)(),
                      (0, o.createElementBlock)("div", Se, [
                        (0, o.createElementVNode)(
                          "div",
                          _e,
                          (0, o.toDisplayString)(c.notFound),
                          1,
                        ),
                      ])),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-1a122fc5"],
        ]);
      var Ke = { class: "footer" };
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
      function qe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function Ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qe(Object(r), !0).forEach(function (t) {
                ze(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : qe(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function ze(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Ye(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != Ye(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == Ye(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var Je = window.__APP__.library.Vuex,
        Qe = Je.mapGetters,
        We = Je.mapMutations;
      const Xe = {
          name: "BaseFooter",
          computed: Ue(
            Ue({}, Qe(["result"])),
            {},
            {
              length: function () {
                var e, t;
                return (
                  (null === (e = this.result) || void 0 === e
                    ? void 0
                    : e.length) -
                  (null === (t = this.result) || void 0 === t
                    ? void 0
                    : t.limitedLength)
                );
              },
            },
          ),
          methods: Ue({}, We(["removeLimit"])),
        },
        et = (0, I.Z)(Xe, [
          [
            "render",
            function (e, t, r, n, i, c) {
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)("div", Ke, [
                  (0, o.createElementVNode)(
                    "button",
                    {
                      type: "button",
                      class: "footer__control",
                      onClick:
                        t[0] ||
                        (t[0] = (0, o.withModifiers)(
                          function () {
                            return (
                              e.removeLimit && e.removeLimit.apply(e, arguments)
                            );
                          },
                          ["prevent"],
                        )),
                    },
                    " and " +
                      (0, o.toDisplayString)(c.length) +
                      " more press Enter ",
                    1,
                  ),
                ])
              );
            },
          ],
        ]);
      var tt = r(18154),
        rt = window.__APP__.library.i18n.t;
      const nt = {
          name: "AppBaseHeader",
          components: { AfsSubHeader: tt.A, AfsText: K.A },
          props: { title: { type: String, default: "Search" } },
          data: function () {
            return { t: rt };
          },
        },
        ot = (0, I.Z)(nt, [
          [
            "render",
            function (e, t, r, n, i, c) {
              var a = (0, o.resolveComponent)("AfsText"),
                u = (0, o.resolveComponent)("AfsSubHeader");
              return (
                (0, o.openBlock)(),
                (0, o.createBlock)(
                  u,
                  { class: "app-search-header", center: !1 },
                  {
                    default: (0, o.withCtx)(function () {
                      return [
                        (0, o.createTextVNode)(
                          (0, o.toDisplayString)(r.title) + " ",
                          1,
                        ),
                        (0, o.createVNode)(
                          a,
                          { tag: "span", class: "app-search-header__subtitle" },
                          {
                            default: (0, o.withCtx)(function () {
                              return [
                                (0, o.createTextVNode)(
                                  (0, o.toDisplayString)(
                                    i.t(
                                      "viewer.plugins.Search.BaseHeader.keyboardShortcutHint",
                                    ),
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
                )
              );
            },
          ],
        ]);
      function it(e) {
        return (
          (it =
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
          it(e)
        );
      }
      function ct() {
        ct = function () {
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
          a = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function l(e, t, r) {
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
          l({}, "");
        } catch (e) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function s(e, t, r, n) {
          var i = t && t.prototype instanceof y ? t : y,
            c = Object.create(i.prototype),
            a = new C(n || []);
          return (o(c, "_invoke", { value: k(e, r, a) }), c);
        }
        function f(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = s;
        var p = "suspendedStart",
          h = "suspendedYield",
          m = "executing",
          v = "completed",
          d = {};
        function y() {}
        function b() {}
        function g() {}
        var w = {};
        l(w, c, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          _ = S && S(S(B([])));
        _ && _ !== r && n.call(_, c) && (w = _);
        var O = (g.prototype = y.prototype = Object.create(w));
        function P(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function j(e, t) {
          function r(o, i, c, a) {
            var u = f(e[o], e, i);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == it(s) && n.call(s, "__await")
                ? t.resolve(s.__await).then(
                    function (e) {
                      r("next", e, c, a);
                    },
                    function (e) {
                      r("throw", e, c, a);
                    },
                  )
                : t.resolve(s).then(
                    function (e) {
                      ((l.value = e), c(l));
                    },
                    function (e) {
                      return r("throw", e, c, a);
                    },
                  );
            }
            a(u.arg);
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
        function k(t, r, n) {
          var o = p;
          return function (i, c) {
            if (o === m) throw Error("Generator is already running");
            if (o === v) {
              if ("throw" === i) throw c;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = c; ; ) {
              var a = n.delegate;
              if (a) {
                var u = E(a, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === p) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = m;
              var l = f(t, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : h), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function E(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                E(t, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              d
            );
          var i = f(o, t.iterator, r.arg);
          if ("throw" === i.type)
            return (
              (r.method = "throw"),
              (r.arg = i.arg),
              (r.delegate = null),
              d
            );
          var c = i.arg;
          return c
            ? c.done
              ? ((r[t.resultName] = c.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                (r.delegate = null),
                d)
              : c
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function x(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function C(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0));
        }
        function B(t) {
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
          throw new TypeError(it(t) + " is not iterable");
        }
        return (
          (b.prototype = g),
          o(O, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: b, configurable: !0 }),
          (b.displayName = l(g, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), l(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          P(j.prototype),
          l(j.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = j),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var c = new j(s(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          P(O),
          l(O, u, "Generator"),
          l(O, c, function () {
            return this;
          }),
          l(O, "toString", function () {
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
          (t.values = B),
          (C.prototype = {
            constructor: C,
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var c = this.tryEntries[i],
                  a = c.completion;
                if ("root" === c.tryLoc) return o("end");
                if (c.tryLoc <= this.prev) {
                  var u = n.call(c, "catchLoc"),
                    l = n.call(c, "finallyLoc");
                  if (u && l) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                  } else if (u) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
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
              var c = i ? i.completion : {};
              return (
                (c.type = e),
                (c.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                  : this.complete(c)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return (this.complete(r.completion, r.afterLoc), x(r), d);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    x(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: B(t), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = e),
                d
              );
            },
          }),
          t
        );
      }
      function at(e, t, r, n, o, i, c) {
        try {
          var a = e[i](c),
            u = a.value;
        } catch (e) {
          return void r(e);
        }
        a.done ? t(u) : Promise.resolve(u).then(n, o);
      }
      function ut(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ut(Object(r), !0).forEach(function (t) {
                st(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ut(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function st(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != it(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != it(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == it(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var ft = window.__APP__.library.Vuex,
        pt = ft.mapState,
        ht = ft.mapMutations,
        mt = ft.mapGetters,
        vt = window.__CORE__,
        dt = window.__APP__.library.i18n.t;
      const yt = {
          name: "Search",
          components: {
            BaseForm: R,
            BaseRecentSearch: ye,
            BaseResult: Ze,
            BaseFooter: et,
            BaseHeader: ot,
          },
          setup: function () {
            return { t: dt };
          },
          computed: lt(
            lt(
              lt({}, pt(["value", "recentSearch", "resultLimit"])),
              mt(["result"]),
            ),
            {},
            {
              hasResult: function () {
                var e, t;
                return !(
                  null === (e = this.result) ||
                  void 0 === e ||
                  null === (t = e.sections) ||
                  void 0 === t ||
                  !t.length
                );
              },
              resultLength: function () {
                var e, t;
                return null === (e = this.result) ||
                  void 0 === e ||
                  null === (t = e.sections) ||
                  void 0 === t
                  ? void 0
                  : t.reduce(function (e, t) {
                      return e + t.items.length;
                    }, 0);
              },
              headerTitle: function () {
                return this.t(
                  "viewer.plugins.Search.searchResult",
                  this.resultLength,
                );
              },
              hasBody: function () {
                return this.hasSearchValue || this.hasRecentSearch;
              },
              hasSearchValue: function () {
                var e;
                return !(
                  null === (e = this.value) ||
                  void 0 === e ||
                  !e.length
                );
              },
              hasRecentSearch: function () {
                var e;
                return !(
                  null === (e = this.recentSearch) ||
                  void 0 === e ||
                  !e.length
                );
              },
              hasFooter: function () {
                return (
                  this.hasSearchValue && this.resultLimit && this.hasResult
                );
              },
            },
          ),
          created: function () {
            var e = this;
            vt.bus.on("Search:deactivate", function () {
              (e.closeFilters(),
                e.resetValue(),
                e.resetLimit(),
                e.resetFilters());
            });
          },
          methods: lt(
            lt(
              {},
              ht([
                "resetValue",
                "resetFilters",
                "resetLimit",
                "removeLimit",
                "closeFilters",
              ]),
            ),
            {},
            {
              onSubmit: function () {
                var e,
                  t = this;
                return ((e = ct().mark(function e() {
                  var r, n;
                  return ct().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (t.removeLimit(), (e.next = 3), t.$nextTick());
                        case 3:
                          (n =
                            null === (r = t.$refs) || void 0 === r
                              ? void 0
                              : r.result) && n.goTo(0);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })),
                function () {
                  var t = this,
                    r = arguments;
                  return new Promise(function (n, o) {
                    var i = e.apply(t, r);
                    function c(e) {
                      at(i, n, o, c, a, "next", e);
                    }
                    function a(e) {
                      at(i, n, o, c, a, "throw", e);
                    }
                    c(void 0);
                  });
                })();
              },
            },
          ),
        },
        bt = (0, I.Z)(yt, [
          [
            "render",
            function (e, t, r, n, i, c) {
              var a = (0, o.resolveComponent)("BaseHeader"),
                u = (0, o.resolveComponent)("BaseForm"),
                l = (0, o.resolveComponent)("BaseResult"),
                s = (0, o.resolveComponent)("BaseRecentSearch"),
                f = (0, o.resolveComponent)("BaseFooter");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)("div", d, [
                  (0, o.createVNode)(a, { title: c.headerTitle }, null, 8, [
                    "title",
                  ]),
                  (0, o.createVNode)(
                    u,
                    {
                      ref: "form",
                      class: "search__header",
                      onSubmit: c.onSubmit,
                    },
                    null,
                    8,
                    ["onSubmit"],
                  ),
                  c.hasBody
                    ? ((0, o.openBlock)(),
                      (0, o.createElementBlock)("div", y, [
                        c.hasSearchValue
                          ? ((0, o.openBlock)(),
                            (0, o.createBlock)(
                              l,
                              { key: 0, ref: "result" },
                              null,
                              512,
                            ))
                          : c.hasRecentSearch
                            ? ((0, o.openBlock)(),
                              (0, o.createBlock)(s, { key: 1 }))
                            : (0, o.createCommentVNode)("v-if", !0),
                      ]))
                    : (0, o.createCommentVNode)("v-if", !0),
                  c.hasFooter
                    ? ((0, o.openBlock)(), (0, o.createBlock)(f, { key: 1 }))
                    : (0, o.createCommentVNode)("v-if", !0),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-43369818"],
        ]);
      function gt(e) {
        return (
          (gt =
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
          gt(e)
        );
      }
      function wt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, St(n.key), n));
        }
      }
      function St(e) {
        var t = (function (e, t) {
          if ("object" != gt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != gt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == gt(t) ? t : t + "";
      }
      function _t(e, t, r) {
        return (
          (t = Pt(t)),
          (function (e, t) {
            if (t && ("object" == gt(t) || "function" == typeof t)) return t;
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
            Ot()
              ? Reflect.construct(t, r || [], Pt(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function Ot() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (Ot = function () {
          return !!e;
        })();
      }
      function Pt(e) {
        return (
          (Pt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Pt(e)
        );
      }
      function jt(e, t) {
        return (
          (jt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          jt(e, t)
        );
      }
      var kt = window.__CORE__,
        Et = window.__APP__.createModule,
        Lt = window.__APP__,
        xt = Lt.parentEvents,
        Ct = Lt.utils,
        Bt = Ct.validator.hasOwnProperty,
        Ft = Ct.getIcon,
        Vt = window.__APP__.library.i18n.t,
        At = Et({
          type: "Plugin",
          description: "Search",
          create: function (e) {
            var t = (function (e) {
              function t() {
                var e;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  ((e = _t(this, t, [
                    {
                      name: "Search",
                      displayIcon: Ft("viewer-search-16", "search-thin-16"),
                      comment: "Search",
                      description: "Search",
                      order: 2,
                      dependencies: ["search.engine"],
                      hint: Vt("viewer.plugins.Search.hint"),
                      view: {
                        type: "modal",
                        config: {
                          type: "aside-right",
                          fullHeight: !1,
                          hasCustomHeader: !0,
                        },
                      },
                    },
                  ])).isActive = !1),
                  (e.onSearchChange = e.onSearchChange.bind(e)),
                  (e.onSearchSelect = e.onSearchSelect.bind(e)),
                  (e.onActiveDocumentChange = e.onActiveDocumentChange.bind(e)),
                  (e.onSearchSet = e.onSearchSet.bind(e)),
                  (e.logger = kt.createLogger("Search Plugin")),
                  kt.bus.on("Search:set", e.onSearchSet),
                  document.addEventListener("keydown", function (e) {
                    e.ctrlKey &&
                      "f" === e.key &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      kt.bus.emit("Search:enable"));
                  }),
                  kt.bus.on("Search:change", e.onSearchChange),
                  kt.bus.on("Search:select", e.onSearchSelect),
                  kt.bus.on(
                    "PcbEngine:documentChanged",
                    e.onActiveDocumentChange,
                  ),
                  kt.bus.on(
                    "SCHView:documentChanged",
                    e.onActiveDocumentChange,
                  ),
                  xt.on("search:activate", function (t) {
                    return (
                      !e.hidden &&
                      !e.isActive &&
                      kt.bus.emit("".concat(e.metaInfo.name, ":enable"))
                    );
                  }),
                  xt.on("search:deactivate", function (t) {
                    return (
                      e.isActive &&
                      kt.bus.emit("".concat(e.metaInfo.name, ":disable"))
                    );
                  }),
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
                    t && jt(e, t));
                })(t, e),
                (r = t),
                (c = [
                  {
                    key: "events",
                    get: function () {
                      return [
                        "Search:change",
                        "Search:select",
                        "Search:set",
                        "Search:display",
                      ];
                    },
                  },
                  {
                    key: "hidden",
                    get: function () {
                      var e,
                        t,
                        r,
                        n =
                          !this.engine ||
                          !(
                            null !== (e = kt.response) &&
                            void 0 !== e &&
                            null !== (t = e.storage) &&
                            void 0 !== t &&
                            null !== (r = t.files) &&
                            void 0 !== r &&
                            r.find(function (e) {
                              return (
                                "PcbGraphiteData" === e.fileType ||
                                "SchSvg" === e.fileType
                              );
                            })
                          );
                      return n;
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      return (
                        (this.engine = kt.engines.SearchEngine),
                        Promise.resolve()
                      );
                    },
                  },
                  {
                    key: "initView",
                    value: function () {
                      var e, t;
                      ((this.hasView = !0),
                        (this.view =
                          ((e = this.metaInfo.name),
                          (t = (t = document.querySelector("#".concat(e)))
                            .parentNode),
                          (0, o.createApp)(bt).use(v).mount(t))));
                    },
                  },
                  {
                    key: "activate",
                    value: function () {
                      this.hasView || this.initView();
                      var e = { can: !0 };
                      if ((kt.bus.emit("Search:display", e), !e.can)) {
                        var t = document.querySelector(
                          '[data-modal-id="'.concat(this.metaInfo.name, '"]'),
                        );
                        if (t)
                          return (
                            (t.style.display = "none"),
                            void kt.bus.emit("Search:disable")
                          );
                      }
                      (this.reassignValue(),
                        (this.isActive = !0),
                        xt.emit("search:activated"),
                        this.logger.LogDebug(
                          "Search ACTIVATED, Search:updateInterface",
                        ));
                    },
                  },
                  {
                    key: "deactivate",
                    value: function () {
                      (this.logger.LogDebug("Search DEACTIVATED"),
                        (this.isActive = !1),
                        xt.emit("search:deactivated"));
                    },
                  },
                  {
                    key: "onSearchChange",
                    value: function (e) {
                      var t;
                      (this.logger.LogDebug(
                        "Search change: "
                          .concat(e.value, ". Filter: ")
                          .concat(e.filter),
                      ),
                        (t = this.engine.findObjects(e.value, e.filter)),
                        h.commit("setResult", t));
                    },
                  },
                  {
                    key: "onSearchSelect",
                    value: function (e) {
                      (this.logger.LogDebug(
                        "Search select: "
                          .concat(e.value, ". Filter: ")
                          .concat(e.filter),
                      ),
                        2 === e.item.type
                          ? this.handleSelect(
                              "component",
                              e.item.item,
                              e.item.documentId,
                            )
                          : 1 === e.item.type &&
                            this.handleSelect(
                              "net",
                              e.item.item,
                              e.item.documentId,
                            ),
                        e.item.isCurrentMode ||
                          ("sch" === e.item.mode &&
                            window.__CORE__.bus.emit("View:set", "SCHView"),
                          "pcb" === e.item.mode &&
                            window.__CORE__.bus.emit("View:set", "PCBView")));
                    },
                  },
                  {
                    key: "handleSelect",
                    value: function (e, t, r) {
                      var o = (0, n.Z)(e, t, "Search", r);
                      ((o.isPrimitiveContainer = !0), kt.bus.emit("select", o));
                    },
                  },
                  {
                    key: "onSearchSet",
                    value: function (e) {
                      var t;
                      ("string" == typeof e.value && m(e.value),
                        Bt(e, "filter") &&
                          ((t = e.filter),
                          Object.values(i).includes(t) &&
                            h.commit(
                              "setFilters",
                              h.state.filters.map(function (e) {
                                return l(
                                  l({}, e),
                                  {},
                                  { isActive: e.id === t },
                                );
                              }),
                            )),
                        Bt(e, "isOpenedFilters") &&
                          (e.isOpenedFilters
                            ? h.commit("openFilters")
                            : h.commit("closeFilters")),
                        Bt(e, "resultLimit") &&
                          ("number" == typeof e.resultLimit &&
                          isFinite(e.resultLimit)
                            ? h.commit("resetLimit")
                            : h.commit("removeLimit")));
                    },
                  },
                  {
                    key: "onActiveDocumentChange",
                    value: function () {
                      this.isActive && this.reassignValue();
                    },
                  },
                  {
                    key: "reassignValue",
                    value: function () {
                      var e = h.state.value;
                      e && (h.commit("resetValue"), m(e));
                    },
                  },
                ]),
                c && wt(r.prototype, c),
                Object.defineProperty(r, "prototype", { writable: !1 }),
                r
              );
              var r, c;
            })(e);
            return new t();
          },
        });
      window.__CORE__ && window.__CORE__.addModule(At);
    },
    10311: (e) => {
      e.exports = Vue;
    },
  },
  (e) => {
    (e.O(0, [66951, 21759], () => e((e.s = 14711))), e.O());
  },
]);
