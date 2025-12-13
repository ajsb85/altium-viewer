/*! For license information please see PCBView.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [9581],
  {
    8861: (e, t, n) => {
      var r = n(63350),
        i = n(22021);
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
          l = c.toStringTag || "@@toStringTag";
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
        function f(e, t, n, r) {
          var o = t && t.prototype instanceof g ? t : g,
            a = Object.create(o.prototype),
            c = new j(r || []);
          return (i(a, "_invoke", { value: S(e, n, c) }), a);
        }
        function h(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = f;
        var p = "suspendedStart",
          v = "suspendedYield",
          w = "executing",
          y = "completed",
          m = {};
        function g() {}
        function b() {}
        function _() {}
        var P = {};
        d(P, u, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          C = E && E(E(D([])));
        C && C !== n && r.call(C, u) && (P = C);
        var O = (_.prototype = g.prototype = Object.create(P));
        function L(e) {
          ["next", "throw", "return"].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function n(i, a, c, u) {
            var s = h(e[i], e, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                d = l.value;
              return d && "object" == o(d) && r.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      n("next", e, c, u);
                    },
                    function (e) {
                      n("throw", e, c, u);
                    },
                  )
                : t.resolve(d).then(
                    function (e) {
                      ((l.value = e), c(l));
                    },
                    function (e) {
                      return n("throw", e, c, u);
                    },
                  );
            }
            u(s.arg);
          }
          var a;
          i(this, "_invoke", {
            value: function (e, r) {
              function i() {
                return new t(function (t, i) {
                  n(e, r, t, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function S(t, n, r) {
          var i = p;
          return function (o, a) {
            if (i === w) throw Error("Generator is already running");
            if (i === y) {
              if ("throw" === o) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = V(c, r);
                if (u) {
                  if (u === m) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === p) throw ((i = y), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = w;
              var s = h(t, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? y : v), s.arg === m)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = y), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function V(t, n) {
          var r = n.method,
            i = t.iterator[r];
          if (i === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                V(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var o = h(i, t.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"),
              (n.arg = o.arg),
              (n.delegate = null),
              m
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                m)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function B(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function x(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function j(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(B, this),
            this.reset(!0));
        }
        function D(t) {
          if (t || "" === t) {
            var n = t[u];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                a = function n() {
                  for (; ++i < t.length; )
                    if (r.call(t, i))
                      return ((n.value = t[i]), (n.done = !1), n);
                  return ((n.value = e), (n.done = !0), n);
                };
              return (a.next = a);
            }
          }
          throw new TypeError(o(t) + " is not iterable");
        }
        return (
          (b.prototype = _),
          i(O, "constructor", { value: _, configurable: !0 }),
          i(_, "constructor", { value: b, configurable: !0 }),
          (b.displayName = d(_, l, "GeneratorFunction")),
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
                : ((e.__proto__ = _), d(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          L(k.prototype),
          d(k.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = k),
          (t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new k(f(e, n, r, i), o);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          L(O),
          d(O, l, "Generator"),
          d(O, u, function () {
            return this;
          }),
          d(O, "toString", function () {
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
          (t.values = D),
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
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
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
                (this.delegate = { iterator: D(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      }
      function c(e, t, n, r, i, o, a) {
        try {
          var c = e[o](a),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(u) : Promise.resolve(u).then(r, i);
      }
      function u(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = e.apply(t, n);
            function a(e) {
              c(o, r, i, a, u, "next", e);
            }
            function u(e) {
              c(o, r, i, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, v(r.key), r));
        }
      }
      function l(e, t, n) {
        return (
          (t = f(t)),
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
            d()
              ? Reflect.construct(t, n || [], f(e).constructor)
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
      function f(e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          f(e)
        );
      }
      function h(e, t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          h(e, t)
        );
      }
      function p(e, t, n) {
        return (
          (t = v(t)) in e
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
      function v(e) {
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
      var w = window.__APP__,
        y = w.analytics,
        m = w.createModule,
        g = window.__APP__.library.i18n.t,
        b = [
          "PcbEngine:documentMove",
          "PcbEngine:documentZoom",
          "PcbEngine:resetDocumentView",
          "PcbEngine:documentClick",
          "PcbEngine:documentLocation",
        ],
        _ = m({
          type: "View",
          description: "PCB View module for show 2D designs.",
          create: function (e) {
            var t = (function (e) {
              function t() {
                var e;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  p(
                    (e = l(this, t, [
                      {
                        name: "PCBView",
                        displayName: g("viewer.plugins.PCBView.displayName"),
                        comment: "PCB 2D View module",
                        description: "PCB View module for show 2D designs.",
                        order: 11,
                        dependencies: ["pcb", "project"],
                      },
                    ])),
                    "canBeSelect",
                    function (t) {
                      if (!e.hidden && t) {
                        if (
                          Object.getOwnPropertyDescriptor(t, "pcbId") &&
                          void 0 !== t.pcbId
                        )
                          return !0;
                        var n = window.__CORE__.response.metadata;
                        if (
                          Object.getOwnPropertyDescriptor(t, "primitives") &&
                          t.primitives &&
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
                            Object.getOwnPropertyDescriptor(r, "pcbUniqueId") &&
                            Object.getOwnPropertyDescriptor(r, "pcbDocId")
                          );
                        }
                      }
                      return !1;
                    },
                  ),
                  p(e, "onProgress", function (t, n) {
                    (e.updateLoader("large", n, "render-loader-32"),
                      e.updatePreview(t));
                  }),
                  p(e, "onDocumentShown", function (t, n) {
                    if (
                      ((e.activeDocument = t),
                      e.updatePreview(),
                      e.active &&
                        y.dispatchViewEvent(
                          "".concat(
                            t.isMain
                              ? e.eventName
                              : "".concat(e.eventName, ".Additional"),
                          ),
                        ),
                      n)
                    )
                      switch (
                        (e.logger.LogError("Document show error", n),
                        e.active &&
                          window.__CORE__.bus.emit("Document:open-error", {
                            name: t.isMain
                              ? e.eventName
                              : "".concat(e.eventName, ".Additional"),
                            message: n.message,
                            error: n,
                            sendDetails: !0,
                          }),
                        e.updateLoader("error", n.message, null),
                        n.code)
                      ) {
                        case r.jK.StoreExpired:
                          e.updateLoader(
                            "error",
                            n.message,
                            "info-16",
                            "small",
                          );
                          break;
                        case r.jK.WebGLNotSupported:
                          y.dispatchCustomErrorEvent("NotShown.WebGL");
                          break;
                        case r.jK.WebGLNotSupportedExtension:
                          n.extensionsList.forEach(function (e) {
                            return y.dispatchCustomErrorEvent(
                              "NotShown.WebGLExtension.".concat(e),
                            );
                          });
                      }
                    else e.updateLoader();
                  }),
                  p(e, "onKeyUp", function (t) {
                    if (e.active) {
                      var n = window.__CORE__.engines.PcbEngine;
                      (!t || (82 !== t.keyCode && "KeyR" !== t.code)
                        ? n.pcbRenderer &&
                          t &&
                          (70 === t.keyCode || "KeyF" === t.code) &&
                          window.__CORE__.bus.emit(
                            "BoardItemsVisibility:viewChange",
                            n.pcbRenderer.flipped ? "top" : "bottom",
                          )
                        : setTimeout(function () {
                            return n.resetView();
                          }, 1),
                        t.ctrlKey ||
                          (n.layerManager &&
                            t &&
                            "+" === t.key &&
                            setTimeout(function () {
                              return n.layerManager.nextOnceLayer();
                            }, 1),
                          n.layerManager &&
                            t &&
                            "-" === t.key &&
                            setTimeout(function () {
                              return n.layerManager.prevOnceLayer();
                            }, 1)));
                    }
                  }),
                  (e.logger = window.__CORE__.createLogger("PCBView")),
                  (e.loadingSimulation = !1),
                  (e.pcbDidLoad = !1),
                  (e._hidden = !0),
                  (e.eventName = "PCB"),
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
                    t && h(e, t));
                })(t, e),
                (n = t),
                (o = [
                  {
                    key: "events",
                    get: function () {
                      return [
                        "PCBView:shown",
                        "PCBView:hidden",
                        "PCBView:documentInfo",
                        "PCBView:layerManagerCreated",
                        "PCBView:switchSimulation",
                        "PCBView:selectSimulationNet",
                        "PCBView:selectSimulationLayer",
                        "PCBView:selectSimulationViewOption",
                        "PCBView:probeActivated",
                        "PCBView:probeDeactivated",
                        "PCBView:resetView",
                        "PCBView:notification:sendFeedback",
                      ];
                    },
                  },
                  {
                    key: "keyboardHandlers",
                    get: function () {
                      return {
                        KeyR: this.onKeyUp,
                        KeyF: this.onKeyUp,
                        Digit2: function () {
                          return window.__CORE__.bus.emit(
                            "View:set",
                            "PCBView",
                          );
                        },
                        Numpad2: function () {
                          return window.__CORE__.bus.emit(
                            "View:set",
                            "PCBView",
                          );
                        },
                        NumpadAdd: this.onKeyUp,
                        NumpadSubtract: this.onKeyUp,
                        Equal: this.onKeyUp,
                        Minus: this.onKeyUp,
                      };
                    },
                  },
                  {
                    key: "hidden",
                    get: function () {
                      return this._hidden;
                    },
                  },
                  {
                    key: "updateHidden",
                    value: function (e, t) {
                      this._hidden !== t &&
                        ((this._hidden = t),
                        e.bus.emit(
                          "".concat(this.metaInfo.name, ":updateInterface"),
                          { hidden: t },
                        ));
                    },
                  },
                  {
                    key: "hasControls",
                    value: function (e) {
                      (e.push({ type: "select" }),
                        e.push({ type: "zoom" }),
                        e.push({ type: "pan" }),
                        e.push({ type: "reset" }),
                        e.push({ type: "layers" }),
                        e.push({ type: "flipBoard" }));
                    },
                  },
                  {
                    key: "setup",
                    value: function (e) {
                      var t = this,
                        n = e.engines.PcbEngine;
                      if ((this.attachToProject(e, n), n)) {
                        var r = e.bus;
                        (r.on("PcbEngine:progress", this.onProgress),
                          r.on("PcbEngine:documentShown", this.onDocumentShown),
                          r.on("PcbEngine:layerManagerCreated", function () {
                            ((t.layerManager = n.layerManager),
                              r.emit(
                                "PCBView:layerManagerCreated",
                                t.layerManager,
                              ));
                          }),
                          r.on("PCBView:documentInfo", function (e) {
                            var t;
                            if (e) {
                              var r;
                              if (e.id)
                                r = n.allDocuments.find(function (t) {
                                  return t.id === e.id;
                                });
                              else {
                                var i = n.activeDocumentIndex;
                                ((r = n.allDocuments[i]),
                                  (e.id = r.id),
                                  (e.altiumDesignerId = r.altiumDesignerId));
                              }
                              r &&
                                (e.name =
                                  null !== (t = r.displayName) && void 0 !== t
                                    ? t
                                    : r.name);
                            }
                          }),
                          r.on(
                            "PCBView:switchSimulation",
                            (function () {
                              var e = u(
                                a().mark(function e(r) {
                                  return a().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              ((e.prev = 0),
                                              t.logger.LogDebug(
                                                "Try switch to simulation",
                                              ),
                                              !n)
                                            ) {
                                              e.next = 18;
                                              break;
                                            }
                                            if (
                                              ((t.enabled = !(
                                                !r ||
                                                !r.some(function (e) {
                                                  return e.enabled;
                                                })
                                              )),
                                              !t.enabled)
                                            ) {
                                              e.next = 17;
                                              break;
                                            }
                                            return (
                                              (t.loadingSimulation = !0),
                                              (e.prev = 6),
                                              (e.next = 9),
                                              n.loadSimulation(r)
                                            );
                                          case 9:
                                            e.sent
                                              ? n.showSimulation()
                                              : n.hideSimulation();
                                          case 11:
                                            return (
                                              (e.prev = 11),
                                              (t.loadingSimulation = !1),
                                              t.pcbDidLoad && t.updateLoader(),
                                              e.finish(11)
                                            );
                                          case 15:
                                            e.next = 18;
                                            break;
                                          case 17:
                                            n.hideSimulation();
                                          case 18:
                                            e.next = 23;
                                            break;
                                          case 20:
                                            ((e.prev = 20),
                                              (e.t0 = e.catch(0)),
                                              t.logger.LogError(
                                                "Switch simulation failed ",
                                                e.t0,
                                              ));
                                          case 23:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [
                                      [0, 20],
                                      [6, , 11, 15],
                                    ],
                                  );
                                }),
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })(),
                          ),
                          r.on("PCBView:selectSimulationNet", function (e) {
                            n.showSimulation(e.kind, e.id);
                          }),
                          r.on("PCBView:selectSimulationLayer", function (e) {
                            n.showSimulation(void 0, void 0, e);
                          }),
                          r.on(
                            "PCBView:selectSimulationViewOption",
                            function (e) {
                              n.selectSimulationViewOption(e.text);
                            },
                          ),
                          r.on("PCBView:probeActivated", function () {
                            n.changeProbeState(!0);
                          }),
                          r.on("PCBView:probeDeactivated", function () {
                            n.changeProbeState(!1);
                          }),
                          r.on("PCBView:resetView", function () {
                            return t.onResetView();
                          }),
                          b.forEach(function (e) {
                            return r.on(e, function (e) {
                              r.emit("sceneInteracted", e);
                            });
                          }));
                      }
                      return Promise.resolve();
                    },
                  },
                  {
                    key: "activate",
                    value:
                      ((d = u(
                        a().mark(function e(t) {
                          var n, r, o;
                          return a().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      (this.logger.LogDebug(
                                        "Activate PCB 2D view",
                                      ),
                                      (this.active = !0),
                                      (this.div = t),
                                      (n = window.__CORE__).setupComplete)
                                    ) {
                                      e.next = 8;
                                      break;
                                    }
                                    return (
                                      this.updateLoader("large", "Loading..."),
                                      (e.next = 8),
                                      new Promise(function (e) {
                                        return n.bus.on(
                                          "complete",
                                          function () {
                                            return e();
                                          },
                                        );
                                      })
                                    );
                                  case 8:
                                    if (this.active) {
                                      e.next = 10;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 10:
                                    if (
                                      ((r = n.engines.PcbEngine),
                                      (e.prev = 11),
                                      r)
                                    ) {
                                      e.next = 14;
                                      break;
                                    }
                                    throw new Error(
                                      "PCB engine has not been found.",
                                    );
                                  case 14:
                                    return (
                                      (o = new i.Z()),
                                      (this.cancellationToken = o),
                                      (e.next = 18),
                                      r.showView(this.div, 2, o)
                                    );
                                  case 18:
                                    if (this.active) {
                                      e.next = 20;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 20:
                                    ((this.shown = !0),
                                      n.bus.emit("PCBView:shown", this.div),
                                      (e.next = 28));
                                    break;
                                  case 24:
                                    ((e.prev = 24),
                                      (e.t0 = e.catch(11)),
                                      this.logger.LogError(
                                        "Show document error.",
                                        e.t0,
                                      ),
                                      this.updateLoader(
                                        "error",
                                        "Show document error.",
                                        null,
                                      ));
                                  case 28:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[11, 24]],
                          );
                        }),
                      )),
                      function (e) {
                        return d.apply(this, arguments);
                      }),
                  },
                  {
                    key: "deactivate",
                    value: function () {
                      var e, t;
                      (this.logger.LogDebug("Deactivate PCB 2D view"),
                        this.cancellationToken &&
                          ((this.cancellationToken.isCancellationRequested =
                            !0),
                          (this.cancellationToken = null)),
                        (this.active = !1),
                        this.updateLoader(),
                        (this.shown = !1),
                        null === (e = window.__CORE__.engines.PcbEngine) ||
                          void 0 === e ||
                          e.hideView(),
                        window.__CORE__.bus.emit("PCBView:hidden"),
                        null === (t = this.notification) ||
                          void 0 === t ||
                          t.close());
                    },
                  },
                  {
                    key: "onResetView",
                    value: function () {
                      window.__CORE__.engines.PcbEngine.resetView();
                    },
                  },
                  {
                    key: "updatePreview",
                    value: function (e) {
                      try {
                        var t;
                        (null === (t = this.preview) ||
                          void 0 === t ||
                          t.destroy(),
                          (this.preview = null),
                          this.div &&
                            e &&
                            (this.preview = window.__APP__.preview(
                              this.div,
                              e.previewUrl2D,
                            )));
                      } catch (e) {
                        this.logger.LogError("Setup 2D preview error.", e);
                      }
                    },
                  },
                  {
                    key: "updateLoader",
                    value: function (e, t, n) {
                      var r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : "large";
                      try {
                        var i;
                        if (
                          (null === (i = this.loader) ||
                            void 0 === i ||
                            i.destroy(),
                          (this.loader = null),
                          this.div && e && t)
                        ) {
                          var o = { message: t, type: e, size: r };
                          (n && (o.icon = n),
                            (this.loader = window.__APP__.loader(this.div, o)));
                        }
                      } catch (e) {
                        this.logger.LogError("Setup loader error.", e);
                      }
                    },
                  },
                  {
                    key: "getDocumentByProjectItem",
                    value: function (e, t) {
                      return e.allDocuments.find(function (e) {
                        return e.id === t.fileName;
                      });
                    },
                  },
                  {
                    key: "onProjectItemActivate",
                    value: function (e, t) {
                      "pcb" === t.type &&
                        (e.attachMode ||
                          (void 0 !== e.renderMode && 2 !== e.renderMode) ||
                          (e.activateDocumentById(t.fileName),
                          !this.active &&
                            window.__CORE__.bus.emit(
                              "View:set",
                              this.metaInfo.name,
                            )));
                    },
                  },
                  {
                    key: "attachToProject",
                    value:
                      ((c = u(
                        a().mark(function e(t, n) {
                          var r,
                            i,
                            o,
                            c,
                            u,
                            s = this;
                          return a().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (r = t.engines.Project),
                                      (e.next = 3),
                                      r.getItems("documents", ["pcb"])
                                    );
                                  case 3:
                                    if (((i = e.sent), n.enabled)) {
                                      e.next = 6;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 6:
                                    if (0 !== i.length) {
                                      e.next = 8;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 8:
                                    (i.forEach(function (e) {
                                      return e.on(
                                        "highlightObjectByHash",
                                        function (t, r) {
                                          var i = s.getDocumentByProjectItem(
                                            n,
                                            e,
                                          );
                                          n.highlightObjectByHash(i, t, r);
                                        },
                                      );
                                    }),
                                      this.updateHidden(t, !1),
                                      i.sort(function (e, t) {
                                        return e.order - t.order;
                                      }),
                                      r.changeEnableState(!0, "documents", [
                                        "pcb",
                                      ]),
                                      t.bus.on(
                                        "Project:activateItem",
                                        function (e) {
                                          return s.onProjectItemActivate(n, e);
                                        },
                                      ),
                                      t.bus.on("PCBView:hidden", function () {
                                        var e = i.find(function (e) {
                                          return e.active;
                                        });
                                        e && r.deactivateItem(e.id);
                                      }),
                                      t.bus.on(
                                        "PcbEngine:documentShowing",
                                        function (e) {
                                          try {
                                            var t = i.find(function (t) {
                                              return e.id === t.fileName;
                                            });
                                            t &&
                                              !t.active &&
                                              r.activateItem(t.id);
                                          } catch (e) {
                                            s.logger.LogError(
                                              "Project item activation error.",
                                              e,
                                            );
                                          }
                                        },
                                      ),
                                      t.initialState.activeView ===
                                        this.metaInfo.displayName &&
                                        ((o = i.find(function (e) {
                                          return e.active;
                                        })),
                                        o
                                          ? this.onProjectItemActivate(n, o)
                                          : r.activateItem(
                                              null !==
                                                (c =
                                                  null ===
                                                    (u = i.find(function (e) {
                                                      return e.isMain;
                                                    })) || void 0 === u
                                                    ? void 0
                                                    : u.id) && void 0 !== c
                                                ? c
                                                : i[0].id,
                                            )));
                                  case 16:
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
                        return c.apply(this, arguments);
                      }),
                  },
                  {
                    key: "addShownEventListener",
                    value: function (e) {
                      var t = this;
                      (e &&
                        window.__CORE__.bus.on("PCBView:shown", function (t) {
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
                    key: "addHideEventListener",
                    value: function (e) {
                      e &&
                        window.__CORE__.bus.on("PCBView:hidden", function () {
                          return e();
                        });
                    },
                  },
                  {
                    key: "addDocumentShownEventListener",
                    value: function (e) {
                      var t = this;
                      (e &&
                        window.__CORE__.bus.on(
                          "PcbEngine:documentShown",
                          function (t) {
                            return e(t);
                          },
                        ),
                        e &&
                          this.activeDocument &&
                          setTimeout(function () {
                            return e(t.activeDocument);
                          }));
                    },
                  },
                ]),
                o && s(n.prototype, o),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, o, c, d;
            })(e);
            return new t();
          },
        });
      window.__CORE__ && window.__CORE__.addModule(_);
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 8861))), e.O());
  },
]);
