/*! For license information please see PCBView3D.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [51916],
  {
    36314: (e, t, n) => {
      var r = n(63350),
        i = n(88312),
        o = n(22021);
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
      function c() {
        c = function () {
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
          u = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          l = o.toStringTag || "@@toStringTag";
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
          var o = t && t.prototype instanceof b ? t : b,
            a = Object.create(o.prototype),
            c = new x(r || []);
          return (i(a, "_invoke", { value: B(e, n, c) }), a);
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
        function b() {}
        function g() {}
        function _() {}
        var P = {};
        d(P, u, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          D = E && E(E(S([])));
        D && D !== n && r.call(D, u) && (P = D);
        var C = (_.prototype = b.prototype = Object.create(P));
        function O(e) {
          ["next", "throw", "return"].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function n(i, o, c, u) {
            var s = h(e[i], e, o);
            if ("throw" !== s.type) {
              var l = s.arg,
                d = l.value;
              return d && "object" == a(d) && r.call(d, "__await")
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
        function B(t, n, r) {
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
                var u = L(c, r);
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
        function L(t, n) {
          var r = n.method,
            i = t.iterator[r];
          if (i === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                L(t, n),
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
        function V(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function j(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function x(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(V, this),
            this.reset(!0));
        }
        function S(t) {
          if (t || "" === t) {
            var n = t[u];
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
          throw new TypeError(a(t) + " is not iterable");
        }
        return (
          (g.prototype = _),
          i(C, "constructor", { value: _, configurable: !0 }),
          i(_, "constructor", { value: g, configurable: !0 }),
          (g.displayName = d(_, l, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(e, _)
                : ((e.__proto__ = _), d(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(C)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          O(k.prototype),
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
          O(C),
          d(C, l, "Generator"),
          d(C, u, function () {
            return this;
          }),
          d(C, "toString", function () {
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
          (t.values = S),
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
                this.tryEntries.forEach(j),
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
                  return (this.complete(n.completion, n.afterLoc), j(n), m);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    j(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: S(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      }
      function u(e, t, n, r, i, o, a) {
        try {
          var c = e[o](a),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(u) : Promise.resolve(u).then(r, i);
      }
      function s(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = e.apply(t, n);
            function a(e) {
              u(o, r, i, a, c, "next", e);
            }
            function c(e) {
              u(o, r, i, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, w(r.key), r));
        }
      }
      function d(e, t, n) {
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
              ? Reflect.construct(t, n || [], h(e).constructor)
              : t.apply(e, n),
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
          (t = w(t)) in e
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
      function w(e) {
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
      var y = window.__APP__,
        m = y.analytics,
        b = y.createModule,
        g = window.__APP__.library.i18n.t,
        _ = b({
          type: "View",
          description: "PCB View module for show 3D designs.",
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
                    (e = d(this, t, [
                      {
                        name: "PCBView3D",
                        displayName: g("viewer.plugins.3D.displayName"),
                        comment: "PCB 3D View module",
                        description: "PCB View module for show 3D designs.",
                        order: 12,
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
                  v(e, "onProgress", function (t, n) {
                    (e.updateLoader("large", n, "render-loader-32"),
                      e.updatePreview(t));
                  }),
                  v(e, "onDocumentShown", function (t, n) {
                    if (
                      ((e.activeDocument = t),
                      e.updatePreview(),
                      e.active &&
                        m.dispatchViewEvent(
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
                          m.dispatchCustomErrorEvent("NotShown.WebGL");
                          break;
                        case r.jK.WebGLNotSupportedExtension:
                          n.extensionsList.forEach(function (e) {
                            return m.dispatchCustomErrorEvent(
                              "NotShown.WebGLExtension.".concat(e),
                            );
                          });
                      }
                    else e.updateLoader();
                  }),
                  v(e, "onKeyDown", function (t) {
                    if (e.active) {
                      var n = window.__CORE__.engines.PcbEngine;
                      (!t || (82 !== t.keyCode && "KeyR" !== t.code)
                        ? !t ||
                          (70 !== t.keyCode && "KeyF" !== t.code) ||
                          window.__CORE__.bus.emit(
                            "PCBView3D:flipBoard",
                            e._side == i.B.Front ? "bottom" : "top",
                          )
                        : setTimeout(function () {
                            return n.resetView();
                          }, 1),
                        !t ||
                          (53 !== t.keyCode && "Digit5" !== t.code) ||
                          setTimeout(function () {
                            return n.toggleFoldFlex();
                          }, 1));
                    }
                  }),
                  (e.logger = window.__CORE__.createLogger("PCBView3D")),
                  (e.eventName = "PCB3D"),
                  (e._hidden = !0),
                  (e._side = i.B.Front),
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
                (a = [
                  {
                    key: "events",
                    get: function () {
                      return [
                        "PCBView3D:shown",
                        "PCBView3D:hidden",
                        "PCBView3D:documentInfo",
                        "PCBView3D:updateItemsVisibility",
                        "PCBView3D:flipBoard",
                        "PCBView3D:resetView",
                        "PCBView3D:switchSimulation",
                        "PCBView3D:selectSimulationNet",
                        "PCBView3D:selectSimulationLayer",
                        "PCBView3D:selectSimulationViewOption",
                        "PCBView3D:probeActivated",
                        "PCBView3D:probeDeactivated",
                      ];
                    },
                  },
                  {
                    key: "keyboardHandlers",
                    get: function () {
                      return {
                        KeyR: this.onKeyDown,
                        KeyF: this.onKeyDown,
                        Digit5: this.onKeyDown,
                        Digit3: function () {
                          return window.__CORE__.bus.emit(
                            "View:set",
                            "PCBView3D",
                          );
                        },
                        Numpad3: function () {
                          return window.__CORE__.bus.emit(
                            "View:set",
                            "PCBView3D",
                          );
                        },
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
                        e.push({ type: "pan3D" }),
                        e.push({ type: "rotate3D" }),
                        e.push({ type: "reset" }),
                        e.push({ type: "switch2D" }),
                        e.push({ type: "switch3D" }),
                        e.push({ type: "flipBoard" }),
                        e.push({ type: "foldUnfold" }));
                    },
                  },
                  {
                    key: "setup",
                    value: function (e) {
                      var t = this;
                      return new Promise(function (n) {
                        var r = e.engines.PcbEngine;
                        if ((t.attachToProject(e, r), r)) {
                          var i = e.bus;
                          (i.on("PcbEngine:progress", t.onProgress),
                            i.on("PcbEngine:documentShown", t.onDocumentShown),
                            i.on("PCBView3D:documentInfo", function (e) {
                              var t;
                              if (e) {
                                var n;
                                if (e.id)
                                  n = r.allDocuments.find(function (t) {
                                    return t.id === e.id;
                                  });
                                else {
                                  var i = r.activeDocumentIndex;
                                  ((n = r.allDocuments[i]), (e.id = n.id));
                                }
                                n &&
                                  (e.name =
                                    null !== (t = n.displayName) && void 0 !== t
                                      ? t
                                      : n.name);
                              }
                            }),
                            i.on(
                              "PCBView3D:updateItemsVisibility",
                              function (e) {
                                return t.onUpdateItemsVisibility(e);
                              },
                            ),
                            i.on("PCBView3D:flipBoard", function (e) {
                              return t.onFlipBoard(e);
                            }),
                            i.on("PCBView3D:resetView", function () {
                              return t.onResetView();
                            }));
                        }
                        n();
                      });
                    },
                  },
                  {
                    key: "activate",
                    value:
                      ((f = s(
                        c().mark(function e(t) {
                          var n, r, i;
                          return c().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      (this.logger.LogDebug(
                                        "Activate PCB 3D view",
                                      ),
                                      (this.active = !0),
                                      (this.isReady = !1),
                                      (this.div = t),
                                      (this.active = !0),
                                      (this.div = t),
                                      (n = window.__CORE__).setupComplete)
                                    ) {
                                      e.next = 11;
                                      break;
                                    }
                                    return (
                                      this.updateLoader("large", "Loading..."),
                                      (e.next = 11),
                                      new Promise(function (e) {
                                        return n.bus.on(
                                          "complete",
                                          function () {
                                            return e();
                                          },
                                        );
                                      })
                                    );
                                  case 11:
                                    if (this.active) {
                                      e.next = 13;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 13:
                                    if (
                                      ((r = n.engines.PcbEngine),
                                      (e.prev = 14),
                                      r)
                                    ) {
                                      e.next = 17;
                                      break;
                                    }
                                    throw new Error(
                                      "PCB engine has not found.",
                                    );
                                  case 17:
                                    return (
                                      (i = new o.Z()),
                                      (this.cancellationToken = i),
                                      (e.next = 21),
                                      r.showView(this.div, 3, i)
                                    );
                                  case 21:
                                    if (this.active) {
                                      e.next = 23;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 23:
                                    ((this.shown = !0),
                                      n.bus.emit("PCBView3D:shown", this.div),
                                      (e.next = 31));
                                    break;
                                  case 27:
                                    ((e.prev = 27),
                                      (e.t0 = e.catch(14)),
                                      this.logger.LogError(
                                        "Show document error.",
                                        e.t0,
                                      ),
                                      this.updateLoader(
                                        "error",
                                        "Show document error.",
                                        null,
                                      ));
                                  case 31:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[14, 27]],
                          );
                        }),
                      )),
                      function (e) {
                        return f.apply(this, arguments);
                      }),
                  },
                  {
                    key: "deactivate",
                    value: function () {
                      var e, t;
                      (this.logger.LogDebug("Deactivate PCB 3D view"),
                        this.cancellationToken &&
                          ((this.cancellationToken.isCancellationRequested =
                            !0),
                          (this.cancellationToken = null)),
                        (this.active = !1),
                        this.updateLoader(),
                        null === (e = window.__CORE__.engines.PcbEngine) ||
                          void 0 === e ||
                          e.hideView(),
                        (this.shown = !1),
                        window.__CORE__.bus.emit("PCBView3D:hidden"),
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
                    key: "onUpdateItemsVisibility",
                    value: function (e) {
                      var t = window.__CORE__.engines.PcbEngine;
                      if (t.pcbRenderer) {
                        var n = e
                            .filter(function (e) {
                              return e.visible;
                            })
                            .map(function (e) {
                              return e.pcbId;
                            }),
                          r = e
                            .filter(function (e) {
                              return !e.visible;
                            })
                            .map(function (e) {
                              return e.pcbId;
                            });
                        (r.length &&
                          t.pcbRenderer
                            .getScene3D()
                            .setNodeItemsVisibility(r, !1),
                          n.length &&
                            t.pcbRenderer
                              .getScene3D()
                              .setNodeItemsVisibility(n, !0),
                          t.pcbRenderer.render());
                      }
                    },
                  },
                  {
                    key: "onFlipBoard",
                    value: function (e) {
                      var t = window.__CORE__.engines.PcbEngine;
                      t.pcbRenderer &&
                        ("top" === e
                          ? this.switchToFrontSide()
                          : this.switchToBackSide(),
                        t.canvasControl.invalidate());
                    },
                  },
                  {
                    key: "updatePreview",
                    value: function (e) {
                      if (
                        (this.preview &&
                          (this.preview.destroy(), (this.preview = null)),
                        this.active)
                      )
                        try {
                          e &&
                            (this.preview = window.__APP__.preview(
                              this.div,
                              e.previewUrl3D,
                            ));
                        } catch (e) {
                          console.log("Setup 3D preview error");
                        }
                    },
                  },
                  {
                    key: "switchToFrontSide",
                    value: function () {
                      ((this._side = i.B.Front),
                        window.__CORE__.engines.PcbEngine.pcbRenderer.scene3d.zoomToFitAnimated(
                          window.__CORE__.engines.PcbEngine.pcbRenderer
                            .canvasControl,
                          500,
                          i.B.Front,
                          null,
                          null,
                          0.8,
                        ));
                    },
                  },
                  {
                    key: "switchToBackSide",
                    value: function () {
                      ((this._side = i.B.Back),
                        window.__CORE__.engines.PcbEngine.pcbRenderer.scene3d.zoomToFitAnimated(
                          window.__CORE__.engines.PcbEngine.pcbRenderer
                            .canvasControl,
                          500,
                          i.B.Back,
                          null,
                          null,
                          0.8,
                        ));
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
                        var i = { message: t, type: e, size: r };
                        (n && (i.icon = n),
                          (this.loader = window.__APP__.loader(this.div, i)));
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
                          (void 0 !== e.renderMode && 3 !== e.renderMode) ||
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
                      ((u = s(
                        c().mark(function e(t, n) {
                          var r,
                            i,
                            o,
                            a,
                            u,
                            s = this;
                          return c().wrap(
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
                                    (this.updateHidden(t, !1),
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
                                      t.bus.on("PCBView3D:hidden", function () {
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
                                                (a =
                                                  null ===
                                                    (u = i.find(function (e) {
                                                      return e.isMain;
                                                    })) || void 0 === u
                                                    ? void 0
                                                    : u.id) && void 0 !== a
                                                ? a
                                                : i[0].id,
                                            )));
                                  case 15:
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
                    key: "addShownEventListener",
                    value: function (e) {
                      var t = this;
                      (e &&
                        window.__CORE__.bus.on("PCBView3D:shown", function (t) {
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
                        window.__CORE__.bus.on("PCBView3D:hidden", function () {
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
                a && l(n.prototype, a),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, a, u, f;
            })(e);
            return new t();
          },
        });
      window.__CORE__ && window.__CORE__.addModule(_);
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 36314))), e.O());
  },
]);
