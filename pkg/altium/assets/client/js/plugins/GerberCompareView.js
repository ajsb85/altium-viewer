/*! For license information please see GerberCompareView.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [1170],
  {
    47771: (e, t, r) => {
      var n = r(63350);
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
      function i() {
        i = function () {
          return t;
        };
        var e,
          t = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          c = "function" == typeof Symbol ? Symbol : {},
          u = c.iterator || "@@iterator",
          s = c.asyncIterator || "@@asyncIterator",
          h = c.toStringTag || "@@toStringTag";
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
        function f(e, t, r, n) {
          var o = t && t.prototype instanceof w ? t : w,
            i = Object.create(o.prototype),
            c = new j(n || []);
          return (a(i, "_invoke", { value: S(e, r, c) }), i);
        }
        function p(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = f;
        var d = "suspendedStart",
          y = "suspendedYield",
          v = "executing",
          m = "completed",
          g = {};
        function w() {}
        function b() {}
        function E() {}
        var _ = {};
        l(_, u, function () {
          return this;
        });
        var L = Object.getPrototypeOf,
          k = L && L(L(O([])));
        k && k !== r && n.call(k, u) && (_ = k);
        var x = (E.prototype = w.prototype = Object.create(_));
        function G(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function N(e, t) {
          function r(i, a, c, u) {
            var s = p(e[i], e, a);
            if ("throw" !== s.type) {
              var h = s.arg,
                l = h.value;
              return l && "object" == o(l) && n.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      r("next", e, c, u);
                    },
                    function (e) {
                      r("throw", e, c, u);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((h.value = e), c(h));
                    },
                    function (e) {
                      return r("throw", e, c, u);
                    },
                  );
            }
            u(s.arg);
          }
          var i;
          a(this, "_invoke", {
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
        function S(t, r, n) {
          var o = d;
          return function (i, a) {
            if (o === v) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = C(c, n);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === d) throw ((o = m), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = v;
              var s = p(t, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? m : y), s.arg === g)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = m), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function C(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                C(t, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              g
            );
          var i = p(o, t.iterator, r.arg);
          if ("throw" === i.type)
            return (
              (r.method = "throw"),
              (r.arg = i.arg),
              (r.delegate = null),
              g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[t.resultName] = a.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                (r.delegate = null),
                g)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              g);
        }
        function P(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function V(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function j(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(P, this),
            this.reset(!0));
        }
        function O(t) {
          if (t || "" === t) {
            var r = t[u];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                a = function r() {
                  for (; ++i < t.length; )
                    if (n.call(t, i))
                      return ((r.value = t[i]), (r.done = !1), r);
                  return ((r.value = e), (r.done = !0), r);
                };
              return (a.next = a);
            }
          }
          throw new TypeError(o(t) + " is not iterable");
        }
        return (
          (b.prototype = E),
          a(x, "constructor", { value: E, configurable: !0 }),
          a(E, "constructor", { value: b, configurable: !0 }),
          (b.displayName = l(E, h, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(e, E)
                : ((e.__proto__ = E), l(e, h, "GeneratorFunction")),
              (e.prototype = Object.create(x)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          G(N.prototype),
          l(N.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = N),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new N(f(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          G(x),
          l(x, h, "Generator"),
          l(x, u, function () {
            return this;
          }),
          l(x, "toString", function () {
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
          (t.values = O),
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
                this.tryEntries.forEach(V),
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
                  (c.type = "throw"),
                  (c.arg = t),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
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
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return (this.complete(r.completion, r.afterLoc), V(r), g);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    V(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: O(t), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, c(n.key), n));
        }
      }
      function c(e) {
        var t = (function (e, t) {
          if ("object" != o(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == o(t) ? t : t + "";
      }
      var u = window.__APP__.analytics,
        s = { resetView: !0 },
        h = (function () {
          return (
            (e = function e(t) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.active = !1),
                (this.resetView = !0),
                (this.badges = []),
                (this.hidden = !1),
                (this._name = t.name),
                (this._displayName = t.displayName),
                (this._displayIcon = t.displayIcon),
                (this._comment = t.comment),
                (this._mode = t.mode),
                (this._hint = t.hint),
                (this._analyticsEventName = t.analyticaEventName),
                (this.core = t.core),
                (this.hidden = !0));
            }),
            (t = [
              {
                key: "name",
                get: function () {
                  return this._name;
                },
              },
              {
                key: "displayName",
                get: function () {
                  return this._displayName;
                },
              },
              {
                key: "displayIcon",
                get: function () {
                  return this._displayIcon;
                },
              },
              {
                key: "comment",
                get: function () {
                  return this._comment;
                },
              },
              {
                key: "hint",
                get: function () {
                  return this._hint;
                },
              },
              {
                key: "analyticsEventName",
                get: function () {
                  return this._analyticsEventName;
                },
              },
              {
                key: "dependencies",
                get: function () {
                  return ["comparison.gerber"];
                },
              },
              {
                key: "hasControls",
                value: function (e) {
                  (e.push({ type: "zoom" }),
                    e.push({ type: "pan" }),
                    e.push({ type: "reset" }));
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
                  return ["GerberCompareView:shown"];
                },
              },
              {
                key: "setup",
                value: function (e) {
                  var t = this,
                    r = e.engines.GerberComparisonEngine.viewEngines.get(
                      this._mode,
                    );
                  return (
                    r &&
                      ((this.viewEngine = r),
                      (this.onKeyUp = this.onKeyUp.bind(this)),
                      window.addEventListener("keyup", this.onKeyUp),
                      this.viewEngine.on("INIT", function () {
                        t.updateLoader(
                          "large",
                          "Initializing document",
                          "icon-render-loader-32",
                        );
                      }),
                      this.viewEngine.on("RENDER", function () {
                        t.updateLoader(
                          "large",
                          "Rendering document",
                          "icon-render-loader-32",
                        );
                      }),
                      (this.hidden = r.hidden)),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "layerManager",
                get: function () {
                  return this.viewEngine ? this.viewEngine.layerManager : null;
                },
              },
              {
                key: "activate",
                value: function (e) {
                  return (
                    (t = this),
                    (r = void 0),
                    (o = void 0),
                    (a = i().mark(function t() {
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((this.active = !0),
                                  (this.div = e),
                                  (e.id = "GerberView_".concat(
                                    this._mode,
                                    "_2D_Container",
                                  )),
                                  this.viewEngine)
                                ) {
                                  t.next = 6;
                                  break;
                                }
                                return (
                                  this.updateLoader(
                                    "error",
                                    "Compare engine has not found.",
                                  ),
                                  t.abrupt("return")
                                );
                              case 6:
                                return (
                                  (t.prev = 6),
                                  (t.next = 9),
                                  this.viewEngine.show(this.div, 0)
                                );
                              case 9:
                                (this.updateLoader(),
                                  this.active &&
                                    (this.core.bus.emit(
                                      "GerberCompareView:shown",
                                      this,
                                    ),
                                    s.resetView &&
                                      ((s.resetView = !1),
                                      this.viewEngine.resetView())),
                                  (t.next = 18));
                                break;
                              case 13:
                                ((t.prev = 13),
                                  (t.t0 = t.catch(6)),
                                  t.t0
                                    ? t.t0.innerError &&
                                      (t.t0.innerError.code ===
                                        n.jK.StoreExpired &&
                                        this.updateLoader(
                                          "error",
                                          t.t0.message,
                                          "warning-16-v2",
                                        ),
                                      t.t0.innerError.code ===
                                        n.jK.WebGLNotSupported &&
                                        u.dispatchCustomErrorEvent(
                                          "NotShown.WebGL",
                                        ),
                                      t.t0.innerError.code ===
                                        n.jK.WebGLNotSupportedExtension &&
                                        t.t0.innerError.extensionsList.forEach(
                                          function (e) {
                                            return u.dispatchCustomErrorEvent(
                                              "NotShown.WebGLExtension.".concat(
                                                e,
                                              ),
                                            );
                                          },
                                        ))
                                    : (t.t0 = new Error("Undefined error.")),
                                  this.updateLoader("error", t.t0.message),
                                  this.core.bus.emit("Document:open-error", {
                                    name: "GerberCompare",
                                    message: t.t0.message,
                                    error: t.t0,
                                  }));
                              case 18:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[6, 13]],
                      );
                    })),
                    new (o || (o = Promise))(function (e, n) {
                      function i(e) {
                        try {
                          u(a.next(e));
                        } catch (e) {
                          n(e);
                        }
                      }
                      function c(e) {
                        try {
                          u(a.throw(e));
                        } catch (e) {
                          n(e);
                        }
                      }
                      function u(t) {
                        var r;
                        t.done
                          ? e(t.value)
                          : ((r = t.value),
                            r instanceof o
                              ? r
                              : new o(function (e) {
                                  e(r);
                                })).then(i, c);
                      }
                      u((a = a.apply(t, r || [])).next());
                    })
                  );
                  var t, r, o, a;
                },
              },
              {
                key: "deactivate",
                value: function () {
                  var e;
                  (null === (e = this.viewEngine) || void 0 === e || e.hide(),
                    (this.active = !1),
                    this.updateLoader());
                },
              },
              {
                key: "onKeyUp",
                value: function (e) {
                  var t = this;
                  this.active &&
                    (!e ||
                      (82 !== e.keyCode && "KeyR" !== e.code) ||
                      setTimeout(function () {
                        return t.viewEngine.resetView();
                      }, 0));
                },
              },
              {
                key: "updateLoader",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                  if (
                    (this.loader &&
                      (this.loader.destroy(), (this.loader = null)),
                    this.active && this.div && e && t)
                  ) {
                    var n = { message: t, type: e };
                    (r && (n.icon = r),
                      (this.loader = window.__APP__.loader(this.div, n)));
                  }
                },
              },
            ]),
            t && a(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        l = window.__APP__.createModule;
      !(function () {
        var e = window.__CORE__;
        if (!e) throw new Error("Core is not defined");
        var t = l({
          type: "View",
          name: "GerberCompareSourceView",
          description: "Gerber Source View",
          create: function () {
            return new h({
              core: e,
              mode: "Source",
              name: "GerberCompareSourceView",
              displayName: "Source",
              comment: "Presents Gerber Source documents",
              displayIcon: "compare-removed-12",
              hint: "Source",
              analyticaEventName: "GerberSource",
            });
          },
        });
        e.addModule(t);
        var r = l({
          type: "View",
          name: "GerberCompareTargetView",
          description: "Gerber Target View",
          create: function () {
            return new h({
              core: e,
              mode: "Target",
              name: "GerberCompareTargetView",
              displayName: "Target",
              comment: "Presents Gerber Target documents",
              displayIcon: "compare-added-12",
              hint: "Target",
              analyticaEventName: "GerberTarget",
            });
          },
        });
        e.addModule(r);
        var n = l({
          type: "View",
          name: "GerberCompareView",
          description: "Gerber Compare View",
          create: function () {
            return new h({
              core: e,
              mode: "Difference",
              name: "GerberCompareView",
              displayName: "Compare",
              comment: "Presents Gerber compare documents",
              displayIcon: "compare-different-12",
              hint: "Compare",
              analyticaEventName: "GerberCompare",
            });
          },
        });
        e.addModule(n);
      })();
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 47771))), e.O());
  },
]);
