/*! For license information please see SCHView.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [87172],
  {
    30314: (e, t, n) => {
      var r = n(63350);
      function o(e) {
        return (
          (o =
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
          o(e)
        );
      }
      function i(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function a() {
        a = function () {
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
          c = "function" == typeof Symbol ? Symbol : {},
          u = c.iterator || "@@iterator",
          s = c.asyncIterator || "@@asyncIterator",
          h = c.toStringTag || "@@toStringTag";
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
        function l(e, t, n, r) {
          var o = t && t.prototype instanceof g ? t : g,
            c = Object.create(o.prototype),
            a = new H(r || []);
          return (i(c, "_invoke", { value: C(e, n, a) }), c);
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var p = "suspendedStart",
          v = "suspendedYield",
          y = "executing",
          w = "completed",
          m = {};
        function g() {}
        function b() {}
        function _() {}
        var S = {};
        f(S, u, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          O = E && E(E(V([])));
        O && O !== n && r.call(O, u) && (S = O);
        var D = (_.prototype = g.prototype = Object.create(S));
        function k(e) {
          ["next", "throw", "return"].forEach(function (t) {
            f(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function j(e, t) {
          function n(i, c, a, u) {
            var s = d(e[i], e, c);
            if ("throw" !== s.type) {
              var h = s.arg,
                f = h.value;
              return f && "object" == o(f) && r.call(f, "__await")
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
                      ((h.value = e), a(h));
                    },
                    function (e) {
                      return n("throw", e, a, u);
                    },
                  );
            }
            u(s.arg);
          }
          var c;
          i(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (c = c ? c.then(o, o) : o());
            },
          });
        }
        function C(t, n, r) {
          var o = p;
          return function (i, c) {
            if (o === y) throw Error("Generator is already running");
            if (o === w) {
              if ("throw" === i) throw c;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = c; ; ) {
              var a = r.delegate;
              if (a) {
                var u = P(a, r);
                if (u) {
                  if (u === m) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = w), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = y;
              var s = d(t, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? w : v), s.arg === m)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = w), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function P(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                P(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"),
              (n.arg = i.arg),
              (n.delegate = null),
              m
            );
          var c = i.arg;
          return c
            ? c.done
              ? ((n[t.resultName] = c.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                m)
              : c
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
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
        function H(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0));
        }
        function V(t) {
          if (t || "" === t) {
            var n = t[u];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                c = function n() {
                  for (; ++i < t.length; )
                    if (r.call(t, i))
                      return ((n.value = t[i]), (n.done = !1), n);
                  return ((n.value = e), (n.done = !0), n);
                };
              return (c.next = c);
            }
          }
          throw new TypeError(o(t) + " is not iterable");
        }
        return (
          (b.prototype = _),
          i(D, "constructor", { value: _, configurable: !0 }),
          i(_, "constructor", { value: b, configurable: !0 }),
          (b.displayName = f(_, h, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(e, _)
                : ((e.__proto__ = _), f(e, h, "GeneratorFunction")),
              (e.prototype = Object.create(D)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          k(j.prototype),
          f(j.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = j),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var c = new j(l(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          k(D),
          f(D, h, "Generator"),
          f(D, u, function () {
            return this;
          }),
          f(D, "toString", function () {
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
          (t.values = V),
          (H.prototype = {
            constructor: H,
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
              function o(r, o) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var c = this.tryEntries[i],
                  a = c.completion;
                if ("root" === c.tryLoc) return o("end");
                if (c.tryLoc <= this.prev) {
                  var u = r.call(c, "catchLoc"),
                    s = r.call(c, "finallyLoc");
                  if (u && s) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                  } else if (u) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
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
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
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
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return (this.complete(n.completion, n.afterLoc), x(n), m);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    x(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: V(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      }
      function u(e, t, n, r, o, i, c) {
        try {
          var a = e[i](c),
            u = a.value;
        } catch (e) {
          return void n(e);
        }
        a.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function s(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function c(e) {
              u(i, r, o, c, a, "next", e);
            }
            function a(e) {
              u(i, r, o, c, a, "throw", e);
            }
            c(void 0);
          });
        };
      }
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, y(r.key), r));
        }
      }
      function f(e, t, n) {
        return (
          (t = d(t)),
          (function (e, t) {
            if (t && ("object" == o(t) || "function" == typeof t)) return t;
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
            l()
              ? Reflect.construct(t, n || [], d(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function l() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (l = function () {
          return !!e;
        })();
      }
      function d(e) {
        return (
          (d = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          d(e)
        );
      }
      function p(e, t) {
        return (
          (p = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          p(e, t)
        );
      }
      function v(e, t, n) {
        return (
          (t = y(t)) in e
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
      function y(e) {
        var t = (function (e, t) {
          if ("object" != o(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == o(t) ? t : t + "";
      }
      var w = [
          "SchEngine:documentZoom",
          "SchEngine:documentMove",
          "SchEngine:documentClick",
          "SchEngine:resetDocumentView",
        ],
        m = window.__APP__.createModule,
        g = window.__APP__.library.i18n.t,
        b = m({
          type: "View",
          name: "SCHViewModule",
          description: "My Awesome Module",
          create: function (e) {
            var t = (function (e) {
              function t() {
                var e;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  v(
                    (e = f(this, t, [
                      {
                        name: "SCHView",
                        displayName: g("viewer.plugins.SCHView.displayName"),
                        comment: "",
                        description: "Schematic SVG main view",
                        order: 1,
                        dependencies: ["sch", "project"],
                      },
                    ])),
                    "canBeSelect",
                    function (t) {
                      if (t) {
                        if (
                          Object.getOwnPropertyDescriptor(t, "schDocId") &&
                          Object.getOwnPropertyDescriptor(t, "schId")
                        )
                          return !0;
                        var n = window.__CORE__.response.metadata;
                        if (
                          Object.getOwnPropertyDescriptor(t, "primitives") &&
                          t.primitives &&
                          void 0 !==
                            t.primitives.find(function (t) {
                              return e.canBeSelect(n.primitives[t]);
                            })
                        )
                          return !0;
                        if (
                          Object.getOwnPropertyDescriptor(t, "reuseBlockId")
                        ) {
                          var r = n.reuseBlocks[t.reuseBlockId];
                          return (
                            r &&
                            Object.getOwnPropertyDescriptor(r, "schDocId") &&
                            Object.getOwnPropertyDescriptor(r, "schId")
                          );
                        }
                      }
                      return !1;
                    },
                  ),
                  v(e, "onKeyDown", function (t) {
                    e.active &&
                      (!t ||
                        (82 !== t.keyCode && "KeyR" !== t.code) ||
                        setTimeout(function () {
                          window.__CORE__.engines.SchEngine.resetView();
                        }, 1));
                  }),
                  v(
                    e,
                    "showDocument",
                    (function () {
                      var t = s(
                        a().mark(function t(n, r) {
                          return a().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      !e.active &&
                                        window.__CORE__.bus.emit(
                                          "View:set",
                                          e.metaInfo.name,
                                        ),
                                      (t.prev = 1),
                                      e.portsMenu && e.portsMenu.close(),
                                      (t.next = 5),
                                      n.showDocument(r)
                                    );
                                  case 5:
                                    t.next = 10;
                                    break;
                                  case 7:
                                    ((t.prev = 7),
                                      (t.t0 = t.catch(1)),
                                      e.checkError(t.t0));
                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[1, 7]],
                          );
                        }),
                      );
                      return function (e, n) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  ),
                  (e.logger = window.__CORE__.createLogger("SCHView")),
                  (e.renderDocumentData = null),
                  (e.currentDocId = null),
                  (e._hidden = !0),
                  (e.active = !1),
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
                    t && p(e, t));
                })(t, e),
                (n = t),
                (o = [
                  {
                    key: "events",
                    get: function () {
                      return [
                        "SCHView:documentChanged",
                        "SCHView:documents",
                        "SCHView:showDocument",
                        "SCHView:renderDocumentData",
                        "SCHView:shown",
                        "SCHView:hidden",
                        "SCHView:enableSelection",
                        "SCHView:zoomToFit",
                        "SCHView:documentActivate",
                      ];
                    },
                  },
                  {
                    key: "hidden",
                    get: function () {
                      return this._hidden;
                    },
                  },
                  {
                    key: "keyboardHandlers",
                    get: function () {
                      return { KeyR: this.onKeyDown };
                    },
                  },
                  {
                    key: "updateHidden",
                    value: function (e, t) {
                      this._hidden !== t &&
                        ((this._hidden = t),
                        e.bus.emit("SCHView:updateInterface", { hidden: t }));
                    },
                  },
                  {
                    key: "analyticsEventName",
                    get: function () {
                      return "SCH";
                    },
                  },
                  {
                    key: "engine",
                    get: function () {
                      return window.__CORE__.engines.SchEngine;
                    },
                  },
                  {
                    key: "documents",
                    get: function () {
                      return this.engine.allDocuments;
                    },
                  },
                  {
                    key: "activeDocument",
                    get: function () {
                      var e = this;
                      return this.documents.find(function (t) {
                        return t.id === e.currentDocId;
                      });
                    },
                  },
                  {
                    key: "setup",
                    value:
                      ((d = s(
                        a().mark(function e(t) {
                          var n,
                            r = this;
                          return a().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    (this.attachToProject(t, this.engine),
                                      this.engine
                                        ? ((n = t.bus),
                                          this.logger.LogDebug(
                                            "Setup SCH view",
                                          ),
                                          n.emit(
                                            "SCHView:documents",
                                            this.engine.allDocuments,
                                          ),
                                          n.on(
                                            "SCHView:zoomToFit",
                                            function (e) {
                                              return n.emit(
                                                "SchEngine:zoomToFit",
                                                e,
                                              );
                                            },
                                          ),
                                          n.on(
                                            "SchEngine:didDocumentActivate",
                                            function (e) {
                                              ((r.currentDocId = e.id),
                                                (r.currentDocModelId =
                                                  e.modelId),
                                                n.emit(
                                                  "SCHView:documentActivate",
                                                  e,
                                                ));
                                            },
                                          ),
                                          n.on(
                                            "SchEngine:didDocumentAttachError",
                                            function (e) {
                                              var t = e.error;
                                              ((r.renderDocumentData = null),
                                                r.checkError(t),
                                                n.emit(
                                                  "SCHView:documentChanged",
                                                  r.currentDocId,
                                                  r.currentDocModelId,
                                                ),
                                                n.emit("Document:open-error", {
                                                  name: r.analyticsEventName,
                                                  message: t.message,
                                                  error: t,
                                                }));
                                            },
                                          ),
                                          n.on("select", function (e) {
                                            return r.engine
                                              .onSelect(e)
                                              .catch(function (e) {
                                                r.checkError(e);
                                              });
                                          }),
                                          n.on(
                                            "SchEngine:display",
                                            function () {
                                              r.active ||
                                                n.emit("View:set", "SCHView");
                                            },
                                          ),
                                          n.on("selectMany", function (e) {
                                            return r.engine
                                              .onSelectMany(e)
                                              .catch(function (e) {
                                                r.checkError(e);
                                              });
                                          }),
                                          n.on(
                                            "SchEngine:didDocumentAttach",
                                            function (e) {
                                              ((r.renderDocumentData = c(
                                                {},
                                                e,
                                              )),
                                                r.updateLoader(),
                                                n.emit(
                                                  "SCHView:documentChanged",
                                                  r.currentDocId,
                                                  r.currentDocModelId,
                                                ));
                                            },
                                          ),
                                          n.on(
                                            "SchEngine:beforeDocumentLoad",
                                            function (e) {
                                              return r.onSchDocumentLoad(e);
                                            },
                                          ),
                                          n.on(
                                            "SchEngine:afterDocumentLoad",
                                            function () {
                                              return r.onSchDocumentDidLoad();
                                            },
                                          ),
                                          n.on(
                                            "SCHView:showDocument",
                                            function (e) {
                                              return r.showDocument(
                                                r.engine,
                                                e,
                                              );
                                            },
                                          ),
                                          n.on(
                                            "SCHView:enableSelection",
                                            function (e) {
                                              r.engine.enableSelection(e);
                                            },
                                          ),
                                          n.on(
                                            "SCHView:renderDocumentData",
                                            function (e) {
                                              e.renderDocumentData =
                                                r.renderDocumentData;
                                            },
                                          ),
                                          w.forEach(function (e) {
                                            return n.on(e, function (e) {
                                              n.emit("sceneInteracted", e);
                                            });
                                          }),
                                          n.on(
                                            "SchEngine:readyNavigateTo",
                                            function (e) {
                                              var t = e.x,
                                                n = e.y,
                                                o = e.items;
                                              r.initMenu(t, n, o);
                                            },
                                          ))
                                        : this.logger.LogError(
                                            "Schematic engine has not found.",
                                          ));
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                          );
                        }),
                      )),
                      function (e) {
                        return d.apply(this, arguments);
                      }),
                  },
                  {
                    key: "hasControls",
                    value: function (e) {
                      (e.push({ type: "select" }),
                        e.push({ type: "zoom" }),
                        e.push({ type: "pan" }),
                        e.push({ type: "reset" }));
                    },
                  },
                  {
                    key: "activate",
                    value:
                      ((l = s(
                        a().mark(function e(t) {
                          var n;
                          return a().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      (this.logger.LogDebug(
                                        "Activate SCH view",
                                      ),
                                      (this.active = !0),
                                      (this.div = t),
                                      (n = window.__CORE__),
                                      !this.engine)
                                    ) {
                                      e.next = 21;
                                      break;
                                    }
                                    return (
                                      (e.prev = 5),
                                      (e.next = 8),
                                      this.engine.showView(t)
                                    );
                                  case 8:
                                    if (this.active) {
                                      e.next = 10;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 10:
                                    if (
                                      (n.bus.emit("SCHView:shown", t),
                                      (this.shown = !0),
                                      !this.error)
                                    ) {
                                      e.next = 14;
                                      break;
                                    }
                                    throw this.error;
                                  case 14:
                                    e.next = 19;
                                    break;
                                  case 16:
                                    ((e.prev = 16),
                                      (e.t0 = e.catch(5)),
                                      this.checkError(e.t0));
                                  case 19:
                                    e.next = 22;
                                    break;
                                  case 21:
                                    this.updateLoader(
                                      "error",
                                      "Schematic engine has not found.",
                                    );
                                  case 22:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[5, 16]],
                          );
                        }),
                      )),
                      function (e) {
                        return l.apply(this, arguments);
                      }),
                  },
                  {
                    key: "deactivate",
                    value: function () {
                      var e;
                      (this.logger.LogDebug("Deactivate SCH view"),
                        (this.active = !1),
                        (this.shown = !1),
                        this.engine && this.engine.hideView(),
                        window.__CORE__.bus.emit("SCHView:hidden"),
                        this.portsMenu && this.portsMenu.close(),
                        this.updateLoader(),
                        null === (e = this.notification) ||
                          void 0 === e ||
                          e.close());
                    },
                  },
                  {
                    key: "onShown",
                    value: function (e) {
                      var t = this;
                      (e &&
                        window.__CORE__.bus.on("SCHView:shown", function (t) {
                          return e(t);
                        }),
                        e &&
                          this.shown &&
                          setTimeout(function () {
                            return e(t.div);
                          }));
                    },
                  },
                  {
                    key: "onHide",
                    value: function (e) {
                      e &&
                        window.__CORE__.bus.on("SCHView:hidden", function () {
                          return e();
                        });
                    },
                  },
                  {
                    key: "onSchDocumentLoad",
                    value: function (e) {
                      if (this.active) {
                        if (this.error) return this.checkError(this.error);
                        (this.updateLoader(
                          "large",
                          g("viewer.common.processing"),
                        ),
                          this.preview ||
                            (this.preview = window.__APP__.preview(
                              this.div,
                              e.previewUrl,
                            )));
                      }
                    },
                  },
                  {
                    key: "onSchDocumentDidLoad",
                    value: function () {
                      (this.preview &&
                        (this.preview.destroy(), (this.preview = null)),
                        this.updateLoader());
                    },
                  },
                  {
                    key: "updateLoader",
                    value: function (e, t, n) {
                      var r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : "large";
                      if (
                        (this.loader &&
                          (this.loader.destroy(), (this.loader = null)),
                        this.div && e && t)
                      ) {
                        var o = { message: t, type: e, size: r };
                        (n && (o.icon = n),
                          (this.loader = window.__APP__.loader(this.div, o)));
                      }
                    },
                  },
                  {
                    key: "checkError",
                    value: function (e) {
                      var t;
                      (null == e || null === (t = e.innerError) || void 0 === t
                        ? void 0
                        : t.code) === r.jK.StoreExpired ||
                      e.code === r.jK.StoreExpired
                        ? this.updateLoader(
                            "error",
                            e.message,
                            "info-16",
                            "small",
                          )
                        : this.updateLoader("error", e.message);
                    },
                  },
                  {
                    key: "getDocumentByProjectItem",
                    value: function (e, t) {
                      return e.allDocuments.find(function (e) {
                        return (
                          e.name === t.fileName && e.channelId === t.channelId
                        );
                      });
                    },
                  },
                  {
                    key: "onProjectItemActivate",
                    value:
                      ((u = s(
                        a().mark(function e(t, n) {
                          return a().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if ("sch" === n.type) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 2:
                                    this.showDocument(t, n.id);
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                          );
                        }),
                      )),
                      function (e, t) {
                        return u.apply(this, arguments);
                      }),
                  },
                  {
                    key: "attachToProject",
                    value:
                      ((i = s(
                        a().mark(function e(t, n) {
                          var r,
                            o,
                            i,
                            c = this;
                          return a().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (r = t.engines.Project),
                                      (e.next = 3),
                                      r.getItems("documents", ["sch"])
                                    );
                                  case 3:
                                    if (0 !== (o = e.sent).length) {
                                      e.next = 6;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 6:
                                    (o.forEach(function (e) {
                                      return e.on(
                                        "highlightObjectByHash",
                                        function (t, r) {
                                          var o = c.getDocumentByProjectItem(
                                            n,
                                            e,
                                          );
                                          n.highlightObjectByHash(o, t, r);
                                        },
                                      );
                                    }),
                                      this.updateHidden(t, !1),
                                      r.changeEnableState(!0, "documents", [
                                        "sch",
                                      ]),
                                      t.bus.on(
                                        "Project:activateItem",
                                        function (e) {
                                          return c.onProjectItemActivate(n, e);
                                        },
                                      ),
                                      t.bus.on("SCHView:hidden", function () {
                                        var e = o.find(function (e) {
                                          return e.active;
                                        });
                                        e && r.deactivateItem(e.id);
                                      }),
                                      t.bus.on(
                                        "SchEngine:documentShowing",
                                        function (e) {
                                          try {
                                            var t = o.find(function (t) {
                                              return e.id === t.id;
                                            });
                                            t &&
                                              !t.active &&
                                              r.activateItem(t.id);
                                          } catch (e) {
                                            c.logger.LogError(
                                              "Project item activation error.",
                                              e,
                                            );
                                          }
                                        },
                                      ),
                                      [
                                        this.metaInfo.displayName,
                                        void 0,
                                        "",
                                      ].includes(t.initialState.activeView) &&
                                        ((i = o.find(function (e) {
                                          return e.active;
                                        })),
                                        i
                                          ? (i.initialState &&
                                              n.renderService.setLocation(
                                                Object.assign(
                                                  { docId: i.id },
                                                  i.initialState,
                                                ),
                                              ),
                                            this.onProjectItemActivate(n, i))
                                          : r.activateItem(o[0].id)));
                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                          );
                        }),
                      )),
                      function (e, t) {
                        return i.apply(this, arguments);
                      }),
                  },
                  {
                    key: "initMenu",
                    value: function (e, t, n) {
                      var r = this;
                      (this.portsMenu ||
                        (this.portsMenu = window.__APP__.menu()),
                        n.length &&
                          (1 === n.length && 0 === n[0].child.length
                            ? window.__CORE__.bus.emit(
                                "SchEngine:navigateTo",
                                n[0],
                              )
                            : this.portsMenu
                                .update({ items: n })
                                .open({ x: e, y: t })
                                .onItemClick(function (e) {
                                  e.preventSelect ||
                                    (window.__CORE__.bus.emit(
                                      "SchEngine:navigateTo",
                                      e,
                                    ),
                                    r.portsMenu.close(),
                                    r.portsMenu.clearSubscribtion());
                                })));
                    },
                  },
                ]),
                o && h(n.prototype, o),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, o, i, u, l, d;
            })(e);
            return new t();
          },
        });
      window.__CORE__ && window.__CORE__.addModule(b);
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 30314))), e.O());
  },
]);
