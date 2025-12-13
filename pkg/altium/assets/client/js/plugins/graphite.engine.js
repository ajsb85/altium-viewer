/*! For license information please see graphite.engine.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [9203],
  {
    31055: (t, e, n) => {
      var r = n(41497);
      function o(t) {
        return (
          (o =
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
          o(t)
        );
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, a(r.key), r));
        }
      }
      function a(t) {
        var e = (function (t, e) {
          if ("object" != o(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == o(e) ? e : e + "";
      }
      var c = (function () {
          return (
            (t = function t() {
              if (
                ((function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                (this.urls = ["./js/thenBy.js", "./js/gl-matrix.js"]),
                t.instance)
              )
                return t.instance;
              ((this.state = "IDLE"), (t.instance = this));
            }),
            (e = [
              {
                key: "load",
                value: function () {
                  var t = this;
                  switch (this.state) {
                    case "IDLE":
                      return new Promise(function (e, n) {
                        ((t.state = "LOADING"),
                          t
                            .loadLibs()
                            .then(function () {
                              ((t.state = "LOADED"),
                                t.onLoaded ? t.onLoaded(null) : e());
                            })
                            .catch(function (e) {
                              ((t.state = "ERROR"),
                                t.onLoaded ? t.onLoaded(e) : n(e));
                            }));
                      });
                    case "ERROR":
                      return ((this.state = "IDLE"), this.load());
                    case "LOADED":
                      return Promise.resolve();
                    case "LOADING":
                      return new Promise(function (e, n) {
                        t.onLoaded = function (r) {
                          ((t.state = r ? "ERROR" : "LOADED"), r ? n(r) : e());
                        };
                      });
                  }
                },
              },
              {
                key: "loadLibByUrl",
                value: function (t) {
                  return new Promise(function (e, n) {
                    var r = document.createElement("script");
                    ((r.src = t),
                      (r.async = !0),
                      (r.onload = function () {
                        (console.info("Loaded library: ".concat(t)), e(t));
                      }),
                      (r.onerror = function (e) {
                        (console.error(
                          "Error loading library: "
                            .concat(t, ". Details: ")
                            .concat(e),
                        ),
                          n(e));
                      }),
                      document.getElementsByTagName("body")[0].appendChild(r));
                  });
                },
              },
              {
                key: "loadLibs",
                value: function () {
                  return Promise.all(this.urls.map(this.loadLibByUrl));
                },
              },
            ]),
            e && i(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        u = n(87908),
        s = n(20892),
        l = n(4348);
      function f(t) {
        return (
          (f =
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
          f(t)
        );
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, p(r.key), r));
        }
      }
      function p(t) {
        var e = (function (t, e) {
          if ("object" != f(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != f(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == f(e) ? e : e + "";
      }
      function d(t, e, n) {
        return (
          (e = m(e)),
          (function (t, e) {
            if (e && ("object" == f(e) || "function" == typeof e)) return e;
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
            y()
              ? Reflect.construct(e, n || [], m(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function y() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (y = function () {
          return !!t;
        })();
      }
      function v() {
        return (
          (v =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, n) {
                  var r = (function (t, e) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(t, e) && null !== (t = m(t));
                    );
                    return t;
                  })(t, e);
                  if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, e);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? t : n)
                      : o.value;
                  }
                }),
          v.apply(null, arguments)
        );
      }
      function m(t) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          m(t)
        );
      }
      function b(t, e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          b(t, e)
        );
      }
      var g = (function (t) {
          function e(t) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((n = d(this, e, [t]))._renderMode = l.Z.Render2D),
              (n.lastId = 0),
              (n.renderer = null),
              (n.pcbLoader = new s.Z()),
              (n.onRendererChange = n.onRendererChange.bind(n)),
              (n.onRendererFocus = n.onRendererFocus.bind(n)),
              n
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
                e && b(t, e));
            })(e, t),
            (n = e),
            (r = [
              {
                key: "loadData",
                value: function (t, e, n) {
                  var r = this;
                  return (
                    t.id ||
                      (this.lastId++,
                      (t.id = "graphite_document_".concat(this.lastId))),
                    t.id === this.currentDocumentId
                      ? Promise.resolve()
                      : new Promise(function (o, i) {
                          (r.renderer &&
                            (r.renderer.disable(),
                            r.renderer.off("change", r.onRendererChange),
                            r.renderer.off("focus", r.onRendererFocus)),
                            (r.renderer = null));
                          var a = function (e) {
                            try {
                              ((r.renderer = n),
                                r.renderer.on("change", r.onRendererChange),
                                r.renderer.on("focus", r.onRendererFocus),
                                r.renderer.enable(e, r.canvas),
                                r.canvas.focus(),
                                r.invalidate(),
                                window.__CORE__.bus.emit(
                                  "GerberComparisonEngine:afterImportPCB",
                                  t,
                                ),
                                o());
                            } catch (t) {
                              i(t);
                            }
                          };
                          r.pcbLoader.on("afterLoad", a);
                          try {
                            r.pcbLoader.load(t.renderData, e);
                          } finally {
                            r.pcbLoader.off("afterLoad", a);
                          }
                        })
                  );
                },
              },
              {
                key: "renderMode",
                get: function () {
                  return this._renderMode;
                },
                set: function (t) {
                  this._renderMode = t;
                },
              },
              {
                key: "width",
                get: function () {
                  var t, e;
                  return null !==
                    (e =
                      null === (t = this.canvas) || void 0 === t
                        ? void 0
                        : t.width) && void 0 !== e
                    ? e
                    : 0;
                },
              },
              {
                key: "height",
                get: function () {
                  var t, e;
                  return null !==
                    (e =
                      null === (t = this.canvas) || void 0 === t
                        ? void 0
                        : t.height) && void 0 !== e
                    ? e
                    : 0;
                },
              },
              {
                key: "emit",
                value: function (t) {
                  for (
                    var n,
                      r = arguments.length,
                      o = new Array(r > 1 ? r - 1 : 0),
                      i = 1;
                    i < r;
                    i++
                  )
                    o[i - 1] = arguments[i];
                  return (n = v(m(e.prototype), "emit", this)).call.apply(
                    n,
                    [this, t].concat(o),
                  );
                },
              },
              {
                key: "onResize",
                value: function () {
                  var t, e;
                  if (
                    0 !== document.body.clientWidth &&
                    0 !== document.body.clientHeight
                  ) {
                    this.canvas.hidden = !0;
                    try {
                      var n =
                        null !==
                          (t = document.getElementById(this.containerId)) &&
                        void 0 !== t
                          ? t
                          : document.body;
                      ((this.canvas.width = n.clientWidth),
                        (this.canvas.height = n.clientHeight));
                    } finally {
                      this.canvas.hidden = !1;
                    }
                    (null === (e = this.renderer) ||
                      void 0 === e ||
                      e.updateClientRectangle(this.width, this.height),
                      this.invalidate(),
                      this.emit("resized"));
                  }
                },
              },
              {
                key: "onPaint",
                value: function () {
                  var t;
                  null === (t = this.renderer) || void 0 === t || t.render();
                },
              },
              { key: "initEvents", value: function () {} },
              {
                key: "onRendererChange",
                value: function () {
                  this.invalidate();
                },
              },
              {
                key: "onRendererFocus",
                value: function () {
                  this.canvas.focus();
                },
              },
              {
                key: "initControl",
                value: function (t) {
                  var e,
                    n,
                    r = this;
                  if (
                    (t instanceof HTMLDivElement
                      ? ((n = t), (e = "aov365_graphite"))
                      : ((n = document.getElementById(t)), (e = t)),
                    null == n)
                  )
                    throw new Error(
                      "Parent with id ".concat(e, " did not found at DOM."),
                    );
                  var o = document.createElement("div");
                  ((this.containerId = e + "_document_viewer"),
                    (o.id = this.containerId),
                    (o.style.width = "100%"),
                    (o.style.height = "100%"),
                    (o.style.position = "relative"));
                  var i = document.createElement("div");
                  ((i.id = e + "_graphic_document_viewer"),
                    (i.style.width = "100%"),
                    (i.style.height = "100%"));
                  var a = this.canvas;
                  ((a.id = e + "_graphic_document_viewer_canvas"),
                    (a.tabIndex = 0),
                    (a.oncontextmenu = function () {
                      return !1;
                    }),
                    (a.style.opacity = "1"),
                    o.appendChild(this.canvas));
                  var c = n.appendChild(o);
                  window.ResizeObserver
                    ? new ResizeObserver(function () {
                        window.requestAnimationFrame(function () {
                          r.onResize();
                        });
                      }).observe(c)
                    : window.addEventListener("resize", function () {
                        return r.onResize();
                      });
                },
              },
            ]),
            r && h(n.prototype, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, r;
        })(u.Z),
        w = n(7414);
      function E(t) {
        return (
          (E =
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
          E(t)
        );
      }
      function O() {
        O = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
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
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            c = new I(r || []);
          return (o(a, "_invoke", { value: k(t, n, c) }), a);
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var h = "suspendedStart",
          p = "suspendedYield",
          d = "executing",
          y = "completed",
          v = {};
        function m() {}
        function b() {}
        function g() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var P = Object.getPrototypeOf,
          L = P && P(P(C([])));
        L && L !== n && r.call(L, a) && (w = L);
        var _ = (g.prototype = m.prototype = Object.create(w));
        function S(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function T(t, e) {
          function n(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == E(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function k(e, n, r) {
          var o = h;
          return function (i, a) {
            if (o === d) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = x(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === h) throw ((o = y), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = d;
              var s = f(e, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? y : p), s.arg === v)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = y), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function x(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var i = f(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"),
              (n.arg = i.arg),
              (n.delegate = null),
              v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function R(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function j(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function I(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(R, this),
            this.reset(!0));
        }
        function C(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o))
                      return ((n.value = e[o]), (n.done = !1), n);
                  return ((n.value = t), (n.done = !0), n);
                };
              return (i.next = i);
            }
          }
          throw new TypeError(E(e) + " is not iterable");
        }
        return (
          (b.prototype = g),
          o(_, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: b, configurable: !0 }),
          (b.displayName = s(g, u, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(_)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          S(T.prototype),
          s(T.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = T),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new T(l(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          S(_),
          s(_, u, "Generator"),
          s(_, a, function () {
            return this;
          }),
          s(_, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return ((t.value = r), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = C),
          (I.prototype = {
            constructor: I,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
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
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
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
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return (this.complete(n.completion, n.afterLoc), j(n), v);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    j(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function P() {
        return (
          (P =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, n) {
                  var r = (function (t, e) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(t, e) && null !== (t = C(t));
                    );
                    return t;
                  })(t, e);
                  if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, e);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? t : n)
                      : o.value;
                  }
                }),
          P.apply(null, arguments)
        );
      }
      function L(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function _(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, T(r.key), r));
        }
      }
      function S(t, e, n) {
        return (
          e && _(t.prototype, e),
          n && _(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function T(t) {
        var e = (function (t, e) {
          if ("object" != E(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != E(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == E(e) ? e : e + "";
      }
      function k(t, e, n) {
        return (
          (e = C(e)),
          (function (t, e) {
            if (e && ("object" == E(e) || "function" == typeof e)) return e;
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
            j()
              ? Reflect.construct(e, n || [], C(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function x(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && I(t, e));
      }
      function R(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (R = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (j()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return (n && I(o, n.prototype), o);
              })(t, arguments, C(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              I(n, t)
            );
          }),
          R(t)
        );
      }
      function j() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (j = function () {
          return !!t;
        })();
      }
      function I(t, e) {
        return (
          (I = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          I(t, e)
        );
      }
      function C(t) {
        return (
          (C = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          C(t)
        );
      }
      var D = function (t, e, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                i(t);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        },
        G = (function (t) {
          function e(t) {
            var n;
            return (L(this, e), ((n = k(this, e, [t])).type = "CRASHED"), n);
          }
          return (
            x(e, t),
            S(e, [
              {
                key: "toString",
                value: function () {
                  return this.message;
                },
              },
            ])
          );
        })(R(Error)),
        M = {
          where: function (t) {
            return ["SETUP_COMPLETED" === t.type];
          },
          to: "SETUP_COMPLETED",
        },
        N = {
          where: function (t) {
            return ["CRASHED" === t.type];
          },
          to: "CRASHED",
        },
        A = {
          IDLE: [
            {
              where: function (t) {
                return ["SETUP" === t.type];
              },
              to: "SETUP",
            },
            N,
          ],
          SETUP: [M, N],
          SETUP_COMPLETED: [
            {
              where: function (t) {
                return ["INIT" === t.type];
              },
              to: "INIT",
            },
            N,
          ],
          INIT: [
            {
              where: function (t) {
                return ["INIT_COMPLETED" === t.type];
              },
              to: "INIT_COMPLETED",
            },
            N,
          ],
          INIT_COMPLETED: [N],
          CRASHED: [M],
        },
        F = (function (t) {
          function e() {
            var t;
            return (
              L(this, e),
              ((t = k(this, e, ["IDLE", A])).graphiteResolver = new w.Z()),
              (t.errorState = null),
              (t.name = "Graphite.Engine"),
              (t.comment = ""),
              (t.dependencies = []),
              (t.events = [
                "GraphiteEngine:beforeGraphiteLoad",
                "GraphiteEngine:afterGraphiteLoad",
                "GraphiteEngine:beforeGraphiteInit",
                "GraphiteEngine:afterGraphiteInit",
                "GraphiteEngine:createdScene2D",
                "GraphiteEngine:createdScene3D",
                "GraphiteEngine:removedMaterial2d",
                "GraphiteEngine:removedMaterial3d",
              ]),
              (t.gotoSetup = t.gotoSetup.bind(t)),
              t.on("SETUP", t.gotoSetup),
              (t.gotoInit = t.gotoInit.bind(t)),
              t.on("INIT", t.gotoInit),
              t
            );
          }
          return (
            x(e, t),
            S(e, [
              {
                key: "metaInfo",
                get: function () {
                  return this;
                },
              },
              {
                key: "dispatch",
                value: function (t) {
                  return P(C(e.prototype), "dispatch", this).call(this, t);
                },
              },
              {
                key: "setup",
                value: function (t) {
                  return D(
                    this,
                    void 0,
                    void 0,
                    O().mark(function e() {
                      return O().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.gotoCompleteStep(
                                    { type: "SETUP", core: t },
                                    "SETUP_COMPLETED",
                                  )
                                );
                              case 2:
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
                key: "init",
                value: function () {
                  return D(
                    this,
                    void 0,
                    void 0,
                    O().mark(function t() {
                      return O().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.gotoCompleteStep(
                                    { type: "INIT" },
                                    "INIT_COMPLETED",
                                  )
                                );
                              case 2:
                                return t.abrupt("return", this.viewControl);
                              case 3:
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
                key: "resolveGraphite",
                value: function () {
                  var t = this;
                  return new Promise(function (e, n) {
                    t.graphiteResolver
                      .on("COMPLETED", function (t) {
                        e(t.payload.graphiteResolver);
                      })
                      .on("CRASHED", function (t) {
                        return n(t);
                      })
                      .init(t.viewControl.canvas);
                  });
                },
              },
              {
                key: "nextTick",
                value: function () {
                  return new Promise(function (t) {
                    return setTimeout(function () {
                      return t();
                    }, 0);
                  });
                },
              },
              {
                key: "doSetup",
                value: function (t) {
                  return Promise.resolve();
                },
              },
              {
                key: "doInit",
                value: function () {
                  return D(
                    this,
                    void 0,
                    void 0,
                    O().mark(function t() {
                      var e;
                      return O().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return ((t.next = 2), new c().load());
                              case 2:
                                return (
                                  ((e =
                                    window.document.createElement(
                                      "div",
                                    )).style.display = "none"),
                                  window.document.body.appendChild(e),
                                  (this.viewControl = new g(e, "transparent")),
                                  (t.next = 8),
                                  this.resolveGraphite()
                                );
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
                },
              },
              {
                key: "gotoSetup",
                value: function (t) {
                  return D(
                    this,
                    void 0,
                    void 0,
                    O().mark(function e() {
                      return O().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((e.next = 2), this.nextTick());
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this.doSetup(t.core)
                                );
                              case 5:
                                (this.dispatch({ type: "SETUP_COMPLETED" }),
                                  (e.next = 11));
                                break;
                              case 8:
                                ((e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  this.dispatch(new G(e.t0.message)));
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 8]],
                      );
                    }),
                  );
                },
              },
              {
                key: "gotoInit",
                value: function () {
                  return D(
                    this,
                    void 0,
                    void 0,
                    O().mark(function t() {
                      return O().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return ((t.next = 2), this.nextTick());
                              case 2:
                                return (
                                  (t.prev = 2),
                                  (t.next = 5),
                                  this.doInit()
                                );
                              case 5:
                                (this.dispatch({ type: "INIT_COMPLETED" }),
                                  (t.next = 11));
                                break;
                              case 8:
                                ((t.prev = 8),
                                  (t.t0 = t.catch(2)),
                                  this.dispatch(new G(t.t0.message)));
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[2, 8]],
                      );
                    }),
                  );
                },
              },
              {
                key: "gotoCompleteStep",
                value: function (t, e) {
                  var n = this;
                  return new Promise(function (r, o) {
                    n.dispatch(t) || n.state === t.type
                      ? (n.on(e, function () {
                          r();
                        }),
                        n.on("CRASHED", function (t) {
                          ((n.errorState = t), o(n.errorState));
                        }))
                      : "CRASHED" === n.state
                        ? o(n.errorState)
                        : r();
                  });
                },
              },
            ])
          );
        })(r.Z),
        U = {
          type: "Engine",
          name: "GraphiteEngineModule",
          description: "Presents Graphite engine module",
          create: function () {
            return new F();
          },
        };
      window.__CORE__.addModule(U);
    },
  },
  (t) => {
    (t.O(0, [21759], () => t((t.s = 31055))), t.O());
  },
]);
