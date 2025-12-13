/*! For license information please see comparison.gerber.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [90666],
  {
    97379: (e, t, r) => {
      var n = window.__CORE__,
        o = new Map([
          ["Difference", "GerberCompareView"],
          ["Source", "GerberCompareSourceView"],
          ["Target", "GerberCompareTargetView"],
        ]),
        i = r(41497),
        a = r(66675),
        c = r(46156),
        u = r(56785),
        s = r(34073);
      function l(e) {
        return (
          (l =
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
          l(e)
        );
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, h(n.key), n));
        }
      }
      function h(e) {
        var t = (function (e, t) {
          if ("object" != l(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != l(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == l(t) ? t : t + "";
      }
      var d = (function () {
          return (
            (e = function e(t, r) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.cameraController = t),
                (this.fsm = r));
            }),
            (t = [
              {
                key: "KeyDown",
                value: function (e) {
                  this.cameraController.KeyDown(e);
                },
              },
              {
                key: "KeyUp",
                value: function (e) {
                  this.cameraController.KeyUp(e);
                },
              },
              {
                key: "MouseDown",
                value: function (e, t, r) {
                  var n = this.fsm.offset;
                  this.cameraController.MouseDown(e, t - n.left, r - n.top);
                },
              },
              {
                key: "MouseUp",
                value: function (e, t, r) {
                  var n = this.fsm.offset;
                  this.cameraController.MouseUp(e, t - n.left, r - n.top);
                },
              },
              {
                key: "MouseMove",
                value: function (e, t) {
                  var r = this.fsm.offset;
                  this.cameraController.MouseMove(e - r.left, t - r.top);
                },
              },
              {
                key: "MouseWheel",
                value: function (e) {
                  this.cameraController.MouseWheel(e);
                },
              },
              {
                key: "TouchStart",
                value: function (e) {
                  this.cameraController.TouchStart(e);
                },
              },
              {
                key: "TouchMove",
                value: function (e) {
                  this.cameraController.TouchMove(e);
                },
              },
              {
                key: "TouchEnd",
                value: function (e) {
                  this.cameraController.TouchEnd(e);
                },
              },
              {
                key: "SetOrbitingType",
                value: function (e) {
                  this.cameraController.SetOrbitingType(e);
                },
              },
            ]) && f(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        p = r(4348),
        y = r(39485);
      function v(e) {
        return (
          (v =
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
          v(e)
        );
      }
      function g(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, m(n.key), n));
        }
      }
      function m(e) {
        var t = (function (e, t) {
          if ("object" != v(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != v(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == v(t) ? t : t + "";
      }
      function b(e, t, r) {
        return (
          (t = E(t)),
          (function (e, t) {
            if (t && ("object" == v(t) || "function" == typeof t)) return t;
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
            w()
              ? Reflect.construct(t, r || [], E(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function w() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (w = function () {
          return !!e;
        })();
      }
      function E(e) {
        return (
          (E = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          E(e)
        );
      }
      function S(e, t) {
        return (
          (S = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          S(e, t)
        );
      }
      var O = (function (e) {
        function t() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = b(this, t)).isBoardMoving = !1),
            (e.width = 0),
            (e.height = 0),
            (e.on2DIdle = function (t) {
              (e.emit("focus"),
                "mouseup" === t.type &&
                  e.cameraController2d.MouseUp(t.button, t.clientX, t.clientY),
                "mousemove" === t.type &&
                  e.cameraController2d.MouseMove(t.clientX, t.clientY));
            }),
            (e.on2DComponentLaunchSelection = function (t) {
              e.cameraController2d.MouseUp(t.button, t.clientX, t.clientY);
            }),
            (e.on2DMouseMoves = function (t) {
              e.cameraController2d.MouseMove(t.clientX, t.clientY);
            }),
            (e.on2DRightButtonIsPressed = function (t) {
              e.cameraController2d.MouseDown(2, t.clientX, t.clientY);
            }),
            (e.on2DBoardTranslates = function (t) {
              e.cameraController2d.MouseMove(t.clientX, t.clientY);
            }),
            (e.on2DBoardDidTranslate = function (t) {
              e.cameraController2d.MouseUp(2, t.clientX, t.clientY);
            }),
            (e.on2DBoardZooms = function (t) {
              (e.cameraController2d.MouseMove(t.clientX, t.clientY),
                e.cameraController2d.MouseWheel(Math.sign(-t.deltaY)));
            }),
            (e.on2DLeftButtonIsPressed = function (t) {
              e.cameraController2d.MouseDown(2, t.clientX, t.clientY);
              var r = { x: t.clientX, y: t.clientY };
              e.fsm.HEAD.setDataTransfer({ clickPos: r });
            }),
            (e.on2DBoardTranslatesButtonIsPressed = function (t) {
              t.buttons &&
                (e.cameraController2d.MouseDown(2, t.clientX, t.clientY),
                e.cameraController2d.MouseMove(t.clientX, t.clientY));
            }),
            (e.onTouchStart = function (t) {
              (e.cameraController2d.TouchStart(t.touches),
                e.onChange(),
                (e.isBoardMoving = t.touches.length > 1),
                t.preventDefault(),
                t.stopPropagation());
            }),
            (e.onTouchMove = function (t) {
              (e.cameraController2d.TouchMove(t.touches),
                e.onChange(),
                (e.isBoardMoving = !0),
                t.preventDefault(),
                t.stopPropagation());
            }),
            (e.onTouchEnd = function (t) {
              (e.cameraController2d.TouchEnd(t.touches),
                e.onChange(),
                0 != t.touches.length ||
                  e.isBoardMoving ||
                  (e.isBoardMoving = !1),
                t.preventDefault(),
                t.stopPropagation());
            }),
            (e.onChange = function () {
              e.emit("change");
            }),
            (e.branches = { "2D": new i.Z("2D/IDLE", c.r) }),
            e.branches["2D"]
              .on("2D/IDLE", e.on2DIdle)
              .on("2D/L_BUTTON_IS_PRESSED", e.on2DLeftButtonIsPressed)
              .on("2D/COMPONENT_LAUNCH_SELECTION", function (t) {
                return setTimeout(function () {
                  return e.on2DComponentLaunchSelection(t);
                }, 0);
              })
              .on("2D/MOUSE_MOVES", e.on2DMouseMoves)
              .on("2D/R_BUTTON_IS_PRESSED", e.on2DRightButtonIsPressed)
              .on("2D/BOARD_TRANSLATES", e.on2DBoardTranslates)
              .on("2D/BOARD_DID_TRANSLATE", e.on2DBoardDidTranslate)
              .on("2D/BOARD_ZOOMS", e.on2DBoardZooms)
              .on("2D/TOUCH_START", e.onTouchStart)
              .on("2D/TOUCH_MOVE", e.onTouchMove)
              .on("2D/TOUCH_END", e.onTouchEnd)
              .on(i.Z.TRANSITION_EVENT, function (t) {
                ("mousemove" === t.type && 0 === t.buttons) || e.onChange();
              }),
            window.__APP__.onThemeChanged(function (t, r) {
              var n = t.array;
              n &&
                ((e.backgroundColor = [n[0] / 255, n[1] / 255, n[2] / 255, 1]),
                e.setBackground(e.backgroundColor));
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
              t && S(e, t));
          })(t, e),
          (r = t),
          (n = [
            {
              key: "canvasFsm",
              get: function () {
                return this.fsm;
              },
            },
            {
              key: "masterBranches",
              get: function () {
                return this.branches;
              },
            },
            {
              key: "enabled",
              get: function () {
                return (
                  null !== this.scene2d && 0 !== this.width && 0 !== this.height
                );
              },
            },
            {
              key: "needRender",
              get: function () {
                var e, t;
                return (
                  null !==
                    (t =
                      null === (e = this.scene2d) || void 0 === e
                        ? void 0
                        : e.needRender) &&
                  void 0 !== t &&
                  t
                );
              },
            },
            {
              key: "restoreState",
              get: function () {
                var e = this.scene2d.getBoxForLayers();
                return {
                  delta: Math.max(e[3] - e[0], e[4] - e[1]),
                  center: this.scene2d.viewport.GetCenter(),
                  zoom: this.scene2d.viewport.GetZoom(),
                };
              },
              set: function (e) {
                if (e) {
                  var t = this.scene2d.getBoxForLayers(),
                    r = Math.max(t[3] - t[0], t[4] - t[1]) / e.delta;
                  (this.scene2d.viewport.SetCenter(
                    e.center.map(function (e) {
                      return e * r;
                    }),
                  ),
                    this.scene2d.viewport.SetZoom(e.zoom * r));
                }
              },
            },
            {
              key: "enable",
              value: function (e, t) {
                var r = this;
                (this.emit("enable", { sender: this, canvas: t }),
                  (this.scene2d = e.scene2d),
                  (this.scene2d.background = this.backgroundColor),
                  this.scene2d.on("zoomToFitChanged", function () {
                    return r.onChange();
                  }),
                  (this.fsm = new s.F(t, "IDLE", u.B, this.branches)),
                  (this.cameraController2d = new d(
                    this.scene2d.cameraController,
                    this.fsm,
                  )),
                  this.fsm.on("2D", this.on2DIdle),
                  this.updateClientRectangle(t.width, t.height),
                  this.fsm.dispatch({
                    type: "rendermodechange",
                    mode: p.Z.Render2D,
                  }),
                  this.emit("didEnable", {
                    sender: this,
                    canvas: t,
                    fsm: this.fsm,
                    scene2d: this.scene2d,
                  }));
              },
            },
            {
              key: "disable",
              value: function () {
                var e;
                this.enabled &&
                  (this.emit("disable", {
                    sender: this,
                    scene2d: this.scene2d,
                  }),
                  this.scene2d.dispose(),
                  null === (e = this.fsm) || void 0 === e || e.destroy(),
                  this.emit("didDisable", {
                    sender: this,
                    scene2d: this.scene2d,
                  }));
              },
            },
            {
              key: "setBackground",
              value: function (e) {
                this.enabled &&
                  ((this.scene2d.background = e),
                  this.scene2d.setDirty(!0),
                  this.onChange());
              },
            },
            {
              key: "render",
              value: function () {
                this.enabled && (this.scene2d.render(), this.onChange());
              },
            },
            {
              key: "updateClientRectangle",
              value: function (e, t) {
                ((this.width = e),
                  (this.height = t),
                  this.enabled && this.scene2d.resize(e, t));
              },
            },
            {
              key: "zoomToFit",
              value: function (e, r) {
                if (this.enabled && 0 !== this.width && 0 !== this.height) {
                  var n = this.scene2d,
                    o = {
                      rects: e ? [e] : void 0,
                      nodes: void 0 !== r ? [n.getNodeItemById(r)] : void 0,
                      renderMode: p.Z.Render2D,
                      zoomReset: y.B2.FitBoard,
                      useOffsets: !0,
                      margin: t.RectMargin / t.ScaleFactor,
                    };
                  (0, y.lE)(n, o);
                }
              },
            },
          ]),
          n && g(r.prototype, n),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n;
      })(a.Z);
      ((O.RectMargin = 5e3), (O.ScaleFactor = 1e6));
      const L = O;
      function x(e) {
        return (
          (x =
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
          x(e)
        );
      }
      function k() {
        k = function () {
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
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
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
            c = new I(n || []);
          return (o(a, "_invoke", { value: P(e, r, c) }), a);
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
          d = "suspendedYield",
          p = "executing",
          y = "completed",
          v = {};
        function g() {}
        function m() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          S = E && E(E(j([])));
        S && S !== r && n.call(S, a) && (w = S);
        var O = (b.prototype = g.prototype = Object.create(w));
        function L(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function _(e, t) {
          function r(o, i, a, c) {
            var u = f(e[o], e, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == x(l) && n.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      r("next", e, a, c);
                    },
                    function (e) {
                      r("throw", e, a, c);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return r("throw", e, a, c);
                    },
                  );
            }
            c(u.arg);
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
        function P(t, r, n) {
          var o = h;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = D(c, n);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = y), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = p;
              var s = f(t, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? y : d), s.arg === v)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = y), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function D(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                D(t, r),
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
        function T(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function C(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function I(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(T, this),
            this.reset(!0));
        }
        function j(t) {
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
          throw new TypeError(x(t) + " is not iterable");
        }
        return (
          (m.prototype = b),
          o(O, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: m, configurable: !0 }),
          (m.displayName = s(b, u, "GeneratorFunction")),
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
                : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          L(_.prototype),
          s(_.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = _),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(l(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          L(O),
          s(O, u, "Generator"),
          s(O, a, function () {
            return this;
          }),
          s(O, "toString", function () {
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
          (I.prototype = {
            constructor: I,
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
                  return (this.complete(r.completion, r.afterLoc), C(r), v);
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
                v
              );
            },
          }),
          t
        );
      }
      function _(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, P(n.key), n));
        }
      }
      function P(e) {
        var t = (function (e, t) {
          if ("object" != x(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != x(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == x(t) ? t : t + "";
      }
      function D(e, t, r) {
        return (
          (t = C(t)),
          (function (e, t) {
            if (t && ("object" == x(t) || "function" == typeof t)) return t;
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
            T()
              ? Reflect.construct(t, r || [], C(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function T() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (T = function () {
          return !!e;
        })();
      }
      function C(e) {
        return (
          (C = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          C(e)
        );
      }
      function I(e, t) {
        return (
          (I = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          I(e, t)
        );
      }
      var j = (function (e) {
          function t(e, r, n) {
            var o;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((o = D(this, t)).onRendererChange = o.onRendererChange.bind(o)),
              (o.onSceneSizeChanged = o.onSceneSizeChanged.bind(o)),
              (o.zoomPrecision = n),
              o.on("set", function () {
                (o.onSceneSizeChanged(o.renderer.scene2d.getSize()),
                  o.onRendererChange());
              }),
              (o.renderer = e),
              (o.workspaceId = r),
              o
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
                t && I(e, t));
            })(t, e),
            (r = t),
            (n = [
              {
                key: "setup",
                value: function () {
                  (this.setupInfo(this.workspaceId),
                    this.renderer.on("change", this.onRendererChange),
                    this.renderer.scene2d.on(
                      "resized",
                      this.onSceneSizeChanged,
                    ),
                    this.emit("set"));
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.emit("clear"),
                    this.renderer.scene2d.off(
                      "resized",
                      this.onSceneSizeChanged,
                    ),
                    this.renderer.off("change", this.onRendererChange),
                    this.clearInfo());
                },
              },
              {
                key: "addLayer",
                value: function (e) {
                  if (!this.info.scene) throw new Error("Scene has not found.");
                  var t = Array.from(this.info.scene.children).find(
                    function (t) {
                      return t.getAttribute("data-owner") === e;
                    },
                  );
                  return (
                    t ||
                      ((t = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "g",
                      )).setAttribute("data-owner", e),
                      this.info.scene.appendChild(t)),
                    t
                  );
                },
              },
              {
                key: "onRendererChange",
                value: function () {
                  return (
                    (e = this),
                    (t = void 0),
                    (r = void 0),
                    (n = k().mark(function e() {
                      var t, r, n, o, i, a, c;
                      return k().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.info.svg) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                if (
                                  ((t = this.renderer.scene2d),
                                  (r = t.viewportToWorld([0, 0])),
                                  !isNaN(r[0]))
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return");
                              case 6:
                                ((n = t.viewportToWorld([
                                  0,
                                  this.zoomPrecision,
                                ])),
                                  (o = t.viewportToWorld([
                                    this.zoomPrecision,
                                    0,
                                  ])),
                                  (i = 1 / Math.abs(r[0] - o[0])),
                                  (a = 1 / Math.abs(r[1] - n[1])),
                                  (c = t.worldToViewport([0, 0])),
                                  this.info.scene.setAttribute(
                                    "transform",
                                    "matrix("
                                      .concat(i, " 0 0 ")
                                      .concat(a, " ")
                                      .concat(c[0], " ")
                                      .concat(c[1], ")"),
                                  ),
                                  this.onTransformUpdate &&
                                    this.onTransformUpdate());
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    })),
                    new (r || (r = Promise))(function (o, i) {
                      function a(e) {
                        try {
                          u(n.next(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function c(e) {
                        try {
                          u(n.throw(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function u(e) {
                        var t;
                        e.done
                          ? o(e.value)
                          : ((t = e.value),
                            t instanceof r
                              ? t
                              : new r(function (e) {
                                  e(t);
                                })).then(a, c);
                      }
                      u((n = n.apply(e, t || [])).next());
                    })
                  );
                  var e, t, r, n;
                },
              },
              {
                key: "onSceneSizeChanged",
                value: function (e) {
                  this.info.svg &&
                    (this.info.svg.setAttribute("width", "".concat(e.width)),
                    this.info.svg.setAttribute("height", "".concat(e.height)));
                },
              },
              {
                key: "setupInfo",
                value: function (e) {
                  var t = e + "_graphic_document_viewer_svg_plane_overlay",
                    r = document.getElementById(t);
                  if (!r) {
                    (((r = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "svg",
                    )).id = t),
                      (r.style.position = "absolute"),
                      r.setAttribute("oncontextmenu", "return false"));
                    var n = document.getElementById(e);
                    null == n || n.appendChild(r);
                  }
                  var o = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "style",
                  );
                  r.appendChild(o);
                  var i = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "g",
                    ),
                    a = new CustomEvent("didTransformChange", {
                      detail: i.transform,
                    });
                  ((i.didTransformChangeEvent = a),
                    (this.onTransformUpdate = function () {
                      return i.dispatchEvent(a);
                    }),
                    r.appendChild(i),
                    (this.info = {}),
                    (this.info.svg = r),
                    (this.info.style = o),
                    (this.info.scene = i));
                },
              },
              {
                key: "clearInfo",
                value: function () {
                  this.info.svg &&
                    (this.info.svg.removeChild(this.info.style),
                    this.info.svg.removeChild(this.info.scene),
                    (this.info = {}));
                },
              },
            ]),
            n && _(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(a.Z),
        M = r(31065),
        N = r(63350),
        R = r(12743);
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
      function G() {
        G = function () {
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
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
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
            c = new T(n || []);
          return (o(a, "_invoke", { value: k(e, r, c) }), a);
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
          d = "suspendedYield",
          p = "executing",
          y = "completed",
          v = {};
        function g() {}
        function m() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          S = E && E(E(C([])));
        S && S !== r && n.call(S, a) && (w = S);
        var O = (b.prototype = g.prototype = Object.create(w));
        function L(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function r(o, i, a, c) {
            var u = f(e[o], e, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == B(l) && n.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      r("next", e, a, c);
                    },
                    function (e) {
                      r("throw", e, a, c);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return r("throw", e, a, c);
                    },
                  );
            }
            c(u.arg);
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
          var o = h;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = _(c, n);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = y), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = p;
              var s = f(t, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? y : d), s.arg === v)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = y), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function _(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                _(t, r),
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
        function P(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function D(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function T(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(P, this),
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
          throw new TypeError(B(t) + " is not iterable");
        }
        return (
          (m.prototype = b),
          o(O, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: m, configurable: !0 }),
          (m.displayName = s(b, u, "GeneratorFunction")),
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
                : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          L(x.prototype),
          s(x.prototype, c, function () {
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
          L(O),
          s(O, u, "Generator"),
          s(O, a, function () {
            return this;
          }),
          s(O, "toString", function () {
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
          (T.prototype = {
            constructor: T,
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
                  return (this.complete(r.completion, r.afterLoc), D(r), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    D(r);
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
      function A(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, F(n.key), n));
        }
      }
      function F(e) {
        var t = (function (e, t) {
          if ("object" != B(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != B(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == B(t) ? t : t + "";
      }
      function U(e, t, r) {
        return (
          (t = Y(t)),
          (function (e, t) {
            if (t && ("object" == B(t) || "function" == typeof t)) return t;
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
            H()
              ? Reflect.construct(t, r || [], Y(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function H() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (H = function () {
          return !!e;
        })();
      }
      function Y(e) {
        return (
          (Y = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Y(e)
        );
      }
      function z(e, t) {
        return (
          (z = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          z(e, t)
        );
      }
      var V = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, c);
            }
            u((n = n.apply(e, t || [])).next());
          });
        },
        Z = {
          where: function (e) {
            return ["SETUP_COMPLETED" === e.type];
          },
          to: "SETUP_COMPLETED",
        },
        X = {
          where: function (e) {
            return ["INIT_COMPLETED" === e.type];
          },
          to: "INIT_COMPLETED",
        },
        K = {
          where: function (e) {
            return ["RENDER" === e.type];
          },
          to: "RENDER",
        },
        W = {
          where: function (e) {
            return ["Error" === e.type];
          },
          to: "CRASHED",
        },
        q = {
          IDLE: [
            {
              where: function (e) {
                return ["SETUP" === e.type];
              },
              to: "SETUP",
            },
            W,
          ],
          SETUP: [Z, W],
          SETUP_COMPLETED: [
            {
              where: function (e) {
                return ["INIT" === e.type];
              },
              to: "INIT",
            },
            W,
          ],
          INIT: [X, W],
          INIT_COMPLETED: [K, W],
          RENDER: [
            {
              where: function (e) {
                return ["RENDER_COMPLETED" === e.type];
              },
              to: "RENDER_COMPLETED",
            },
            W,
          ],
          RENDER_COMPLETED: [Z, K, W],
          CRASHED: [X],
        },
        J = (function (e) {
          function t(e) {
            var r;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((r = U(this, t, ["IDLE", q])).errorState = null),
              (r.active = !0),
              (r.documents = []),
              (r.currentDocumentIndex = 0),
              (r.graphicsState = {}),
              (r.isEnabledMeasurement = !1),
              (r.type = e),
              (r.logger = n.createLogger("GDE_ViewEngine_" + e)),
              (r.gotoSetup = r.gotoSetup.bind(r)),
              r.on("SETUP", r.gotoSetup),
              (r.gotoInit = r.gotoInit.bind(r)),
              r.on("INIT", r.gotoInit),
              (r.gotoRender = r.gotoRender.bind(r)),
              r.on("RENDER", r.gotoRender),
              r.on("SETUP_COMPLETED", function () {
                return r.logger.LogDebug("SETUP_COMPLETED");
              }),
              r.on("INIT_COMPLETED", function () {
                return r.logger.LogDebug("INIT_COMPLETED");
              }),
              r.on("RENDER_COMPLETED", function () {
                return r.logger.LogDebug("RENDER_COMPLETED");
              }),
              (r.onFpsMeter = r.onFpsMeter.bind(r)),
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
                t && z(e, t));
            })(t, e),
            (r = t),
            (i = [
              {
                key: "viewName",
                get: function () {
                  var e;
                  return null !== (e = o.get(this.type)) && void 0 !== e
                    ? e
                    : "GerberCompareView";
                },
              },
              {
                key: "hidden",
                get: function () {
                  return !1;
                },
              },
              {
                key: "setup",
                value: function (e) {
                  return V(
                    this,
                    void 0,
                    void 0,
                    G().mark(function t() {
                      return G().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.gotoCompleteStep(
                                    { type: "SETUP", core: e },
                                    "SETUP_COMPLETED",
                                  )
                                );
                              case 2:
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
                key: "show",
                value: function (e, t) {
                  return V(
                    this,
                    void 0,
                    void 0,
                    G().mark(function t() {
                      var r,
                        o,
                        i = this;
                      return G().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (this.active = !0),
                                  (t.next = 3),
                                  this.gotoCompleteStep(
                                    { type: "SETUP" },
                                    "SETUP_COMPLETED",
                                  )
                                );
                              case 3:
                                if (this.active) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt("return");
                              case 5:
                                return (
                                  (t.next = 7),
                                  this.gotoCompleteStep(
                                    { type: "INIT" },
                                    "INIT_COMPLETED",
                                  )
                                );
                              case 7:
                                if (this.active) {
                                  t.next = 9;
                                  break;
                                }
                                return t.abrupt("return");
                              case 9:
                                return (
                                  (t.next = 11),
                                  this.gotoCompleteStep(
                                    {
                                      type: "RENDER",
                                      graphicsState: this.graphicsState,
                                    },
                                    "RENDER_COMPLETED",
                                  )
                                );
                              case 11:
                                if (this.active) {
                                  t.next = 13;
                                  break;
                                }
                                return t.abrupt("return");
                              case 13:
                                if (
                                  ((r = this.canvasControl.containerId),
                                  (o = document.getElementById(r)))
                                ) {
                                  t.next = 17;
                                  break;
                                }
                                throw new Error("Paint has not found.");
                              case 17:
                                (e.appendChild(o),
                                  this.canvasControl.onResize(),
                                  this.canvasControl.invalidate(),
                                  this.canvasControl.peformanceMonitor.startFpsMeter(
                                    1e3,
                                  ),
                                  this.canvasControl.peformanceMonitor.on(
                                    "aggregateFps",
                                    this.onFpsMeter,
                                  ),
                                  this.canvasControl.peformanceMonitor.on(
                                    "renderTime",
                                    function (e, t) {
                                      return n.bus.emit(
                                        "GerberComparisonEngine:renderTime",
                                        e,
                                        t,
                                        i.type,
                                      );
                                    },
                                  ));
                              case 23:
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
                key: "hide",
                value: function () {
                  var e;
                  (this.canvasControl &&
                    (this.canvasControl.peformanceMonitor.off(
                      "aggregateFps",
                      this.onFpsMeter,
                    ),
                    this.canvasControl.peformanceMonitor.stopFpsMeter()),
                    null === (e = this.renderer) || void 0 === e || e.disable(),
                    (this.active = !1));
                },
              },
              {
                key: "resetView",
                value: function () {
                  var e;
                  null === (e = this.renderer) || void 0 === e || e.zoomToFit();
                },
              },
              {
                key: "handleResponse",
                value: function (e) {
                  return V(
                    this,
                    void 0,
                    void 0,
                    G().mark(function t() {
                      return G().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (this.metadata = e.metadata),
                                  (this.response = e),
                                  this.setupDocuments(e),
                                  (t.next = 5),
                                  Promise.resolve()
                                );
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
                },
              },
              {
                key: "doInit",
                value: function () {
                  return V(
                    this,
                    void 0,
                    void 0,
                    G().mark(function e() {
                      var t,
                        r = this;
                      return G().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (0, M.Z)(),
                                  (t = n.engines["Graphite.Engine"]),
                                  (e.next = 4),
                                  t.init()
                                );
                              case 4:
                                ((this.canvasControl = e.sent),
                                  window.__APP__.onThemeChanged(
                                    function (e, t) {
                                      var n = e.css;
                                      n &&
                                        (r.canvasControl.canvas.style.backgroundColor =
                                          n);
                                    },
                                  ));
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
                key: "doRender",
                value: function () {
                  return V(
                    this,
                    void 0,
                    void 0,
                    G().mark(function e() {
                      var t, r;
                      return G().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((e.next = 2), this.nextTick());
                              case 2:
                                return (
                                  (t = "Render document error."),
                                  (e.prev = 3),
                                  (r =
                                    this.documents[this.currentDocumentIndex]),
                                  (e.next = 7),
                                  this.loadDocument(r)
                                );
                              case 7:
                                if (this.active) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("return");
                              case 9:
                                return (
                                  this.renderer ||
                                    ((this.onRenedererDidEnable =
                                      this.onRenedererDidEnable.bind(this)),
                                    (this.onRenedererDisable =
                                      this.onRenedererDisable.bind(this)),
                                    (this.renderer = new L()),
                                    this.renderer.on(
                                      "didEnable",
                                      this.onRenedererDidEnable,
                                    ),
                                    this.renderer.on(
                                      "disable",
                                      this.onRenedererDisable,
                                    )),
                                  (e.next = 12),
                                  this.canvasControl.loadData(
                                    r,
                                    this.loadMode,
                                    this.renderer,
                                  )
                                );
                              case 12:
                                e.next = 22;
                                break;
                              case 14:
                                if (
                                  ((e.prev = 14),
                                  (e.t0 = e.catch(3)),
                                  this.logger.LogError("Render error.", e.t0),
                                  !(e.t0 instanceof N.CV))
                                ) {
                                  e.next = 21;
                                  break;
                                }
                                throw e.t0;
                              case 21:
                                throw new Error(t);
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 14]],
                      );
                    }),
                  );
                },
              },
              {
                key: "gotoCompleteStep",
                value: function (e, t) {
                  var r = this;
                  return new Promise(function (n, o) {
                    r.dispatch(e) || r.state === e.type
                      ? (r.on(t, function () {
                          n();
                        }),
                        r.on("CRASHED", function (e) {
                          ((r.errorState = e), o(r.errorState));
                        }))
                      : "CRASHED" === r.state
                        ? o(r.errorState)
                        : n();
                  });
                },
              },
              {
                key: "nextTick",
                value: function () {
                  return new Promise(function (e) {
                    return setTimeout(function () {
                      return e(null);
                    }, 0);
                  });
                },
              },
              {
                key: "gotoSetup",
                value: function (e) {
                  return V(
                    this,
                    void 0,
                    void 0,
                    G().mark(function t() {
                      return G().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return ((t.next = 2), this.nextTick());
                              case 2:
                                return (
                                  (t.prev = 2),
                                  (t.next = 5),
                                  this.doSetup(e.core)
                                );
                              case 5:
                                (this.dispatch({ type: "SETUP_COMPLETED" }),
                                  (t.next = 11));
                                break;
                              case 8:
                                ((t.prev = 8),
                                  (t.t0 = t.catch(2)),
                                  this.dispatch(new R.B(t.t0.message, t.t0)));
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
                key: "gotoInit",
                value: function () {
                  return V(
                    this,
                    void 0,
                    void 0,
                    G().mark(function e() {
                      return G().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((e.next = 2), this.nextTick());
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this.doInit()
                                );
                              case 5:
                                (this.dispatch({ type: "INIT_COMPLETED" }),
                                  (e.next = 11));
                                break;
                              case 8:
                                ((e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  this.dispatch(new R.B(e.t0.message, e.t0)));
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
                key: "gotoRender",
                value: function () {
                  return V(
                    this,
                    void 0,
                    void 0,
                    G().mark(function e() {
                      return G().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((e.next = 2), this.nextTick());
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this.doRender()
                                );
                              case 5:
                                (this.dispatch({ type: "RENDER_COMPLETED" }),
                                  (e.next = 11));
                                break;
                              case 8:
                                ((e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  this.dispatch(new R.B(e.t0.message, e.t0)));
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
                key: "getDocumentsFromStorage",
                value: function (e) {
                  var t = [];
                  return (
                    e &&
                      e.files &&
                      e.files
                        .filter(function (e) {
                          return "CamGraphite" === e.fileType;
                        })
                        .forEach(function (e, r) {
                          var n = {
                            id: r.toString(),
                            isLoaded: !1,
                            name: e.originalName,
                            displayName: e.originalName,
                            renderData: null,
                            errorState: null,
                            fileData: e,
                            toString: function () {
                              return "["
                                .concat(n.id, "] ")
                                .concat(n.name, " [")
                                .concat(
                                  n.isLoaded ? "Loaded" : "Not Loaded",
                                  "]",
                                );
                            },
                          };
                          t.push(n);
                        }),
                    t
                  );
                },
              },
              {
                key: "setupDocuments",
                value: function (e) {
                  var t = this,
                    r = this.getDocumentsFromStorage(e.storage);
                  if (0 === r.length)
                    throw new Error("No documents to display");
                  r.filter(function (e) {
                    return !t.documents.find(function (t) {
                      return t == e;
                    });
                  }).forEach(function (e) {
                    return t.documents.push(e);
                  });
                },
              },
              {
                key: "loadDocument",
                value: function (e) {
                  return V(
                    this,
                    void 0,
                    void 0,
                    G().mark(function t() {
                      var r, n, o;
                      return G().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!e.isLoaded) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                if (
                                  ((r = this.response.storage), !e.errorState)
                                ) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt("return");
                              case 5:
                                if (((t.prev = 5), void 0 !== e.fileData)) {
                                  t.next = 8;
                                  break;
                                }
                                throw new Error("File data is empty.");
                              case 8:
                                return (
                                  (t.next = 10),
                                  r.documentLoader.loadDocument(
                                    e.fileData.originalName,
                                    e.fileData.fileType,
                                  )
                                );
                              case 10:
                                if (((n = t.sent), e.isLoaded)) {
                                  t.next = 17;
                                  break;
                                }
                                return ((t.next = 14), n.arrayBuffer());
                              case 14:
                                ((o = t.sent),
                                  (e.isLoaded = !0),
                                  (e.renderData = o));
                              case 17:
                                if (e.renderData) {
                                  t.next = 19;
                                  break;
                                }
                                throw new Error("Document is empty.");
                              case 19:
                                t.next = 25;
                                break;
                              case 21:
                                throw (
                                  (t.prev = 21),
                                  (t.t0 = t.catch(5)),
                                  (e.errorState = t.t0),
                                  t.t0
                                );
                              case 25:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[5, 21]],
                      );
                    }),
                  );
                },
              },
              {
                key: "onFpsMeter",
                value: function (e) {
                  n.bus.emit("GerberComparisonEngine:fps", e, this.type);
                },
              },
              {
                key: "createSvgPlaneOverlay",
                value: function (e, t) {
                  return new j(
                    e,
                    t,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  );
                },
              },
              { key: "setScene", value: function (e, t) {} },
              { key: "clearScene", value: function (e, t) {} },
              {
                key: "onRenedererDidEnable",
                value: function (e) {
                  var r,
                    o = this,
                    i =
                      null === (r = this.metadata) || void 0 === r
                        ? void 0
                        : r.camtastic[0];
                  (this.setScene(e.sender, i),
                    this.layerManager ||
                      (this.layerManager = this.createLayerManager(i)),
                    this.layerManager.on("enable", function () {
                      return o.canvasControl.invalidate();
                    }),
                    this.layerManager.on("select", function () {
                      return o.canvasControl.invalidate();
                    }),
                    this.layerManager.enable(
                      e.sender,
                      t.graphicsState.layerManagerState,
                    ),
                    this.svgPlaneOverlay ||
                      (this.svgPlaneOverlay = this.createSvgPlaneOverlay(
                        e.sender,
                        this.canvasControl.containerId,
                      )),
                    this.svgPlaneOverlay.setup(),
                    n.bus.emit("GerberComparisonEngine:rendererDidEnable", {
                      sender: this,
                      viewName: this.viewName,
                      renderer: e.sender,
                      svOverlay: this.svgPlaneOverlay.info.svg,
                      scene: e.scene2d,
                      canvasControl: this.canvasControl,
                    }),
                    (e.sender.restoreState = t.graphicsState.rendererState));
                },
              },
              {
                key: "onRenedererDisable",
                value: function (e) {
                  try {
                    ((t.graphicsState.rendererState = e.sender.restoreState),
                      (t.graphicsState.layerManagerState =
                        this.layerManager.state),
                      this.layerManager.disable(),
                      n.bus.emit("GerberComparisonEngine:rendererDidDisable", {
                        sender: this,
                        viewName: this.viewName,
                        renderer: e.sender,
                        svOverlay: this.svgPlaneOverlay.info.svg,
                        scene: e.scene2d,
                        canvasControl: this.canvasControl,
                      }),
                      this.svgPlaneOverlay.clear());
                  } catch (e) {
                    this.logger.LogError("Renderer disabling error. ", e);
                  }
                },
              },
            ]),
            i && A(r.prototype, i),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, i;
        })(i.Z);
      J.graphicsState = {};
      const Q = J;
      var $ = r(55214),
        ee = r(11758),
        te = r(55760),
        re = r(73626),
        ne = r(77254);
      function oe(e) {
        return (
          (oe =
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
          oe(e)
        );
      }
      function ie(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ae(n.key), n));
        }
      }
      function ae(e) {
        var t = (function (e, t) {
          if ("object" != oe(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != oe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == oe(t) ? t : t + "";
      }
      function ce(e, t, r) {
        return (
          (t = se(t)),
          (function (e, t) {
            if (t && ("object" == oe(t) || "function" == typeof t)) return t;
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
            ue()
              ? Reflect.construct(t, r || [], se(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function ue() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (ue = function () {
          return !!e;
        })();
      }
      function se(e) {
        return (
          (se = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          se(e)
        );
      }
      function le(e, t) {
        return (
          (le = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          le(e, t)
        );
      }
      var fe,
        he = (function (e) {
          function t(e, r) {
            var n;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((n = ce(this, t)).layersInitialized = !1),
              (n.renderer = null),
              (n._layers = []),
              (n.layerShift = 0),
              (n.metadata = e),
              (n.type = r),
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
                t && le(e, t));
            })(t, e),
            (r = t),
            (n = [
              {
                key: "enable",
                value: function (e, t) {
                  if (((this.renderer = e), !this.layersInitialized)) {
                    this.layersInitialized = !0;
                    var r = e.scene2d;
                    ((this.layerShift =
                      r.layers.length -
                      r.layers.filter(function (e) {
                        return "Selection Layer" === e.name;
                      }).length),
                      (this._layers = this.getBoardLayers()),
                      this.emit("layersInitialized"),
                      this.layers.length &&
                        (this.activeLayerId = this.getFirstActiveLayer()));
                  }
                  return (
                    t &&
                      ((this.activeLayerId = this.getLayerIdByState(t)),
                      (this.activeNodeId = t.nodeId)),
                    this.updateLayersVisibility(),
                    this.emit("enable"),
                    this
                  );
                },
              },
              {
                key: "getLayerIdByState",
                value: function (e) {
                  var t, r, n, o;
                  return null !==
                    (o =
                      null !==
                        (r =
                          null ===
                            (t = this.layers.find(function (t) {
                              return t.searchName === e.layerName;
                            })) || void 0 === t
                            ? void 0
                            : t.id) && void 0 !== r
                        ? r
                        : null ===
                              (n = this.layers.find(function (t) {
                                return t.name === e.layerDisplayName;
                              })) || void 0 === n
                          ? void 0
                          : n.id) && void 0 !== o
                    ? o
                    : this.layers[0].id;
                },
              },
              {
                key: "getFirstActiveLayer",
                value: function () {
                  return this.layers[0].id;
                },
              },
              {
                key: "state",
                get: function () {
                  var e,
                    t,
                    r = this,
                    n = this.layers.find(function (e) {
                      return e.id === r.activeLayerId;
                    });
                  return {
                    layerName:
                      -1 === this.activeLayerId
                        ? ""
                        : null !== (e = null == n ? void 0 : n.searchName) &&
                            void 0 !== e
                          ? e
                          : "",
                    layerDisplayName:
                      -1 === this.activeLayerId
                        ? ""
                        : null !== (t = null == n ? void 0 : n.name) &&
                            void 0 !== t
                          ? t
                          : "",
                    nodeId: this.activeNodeId,
                  };
                },
              },
              {
                key: "disable",
                value: function () {
                  ((this.renderer = null), this.emit("disable"));
                },
              },
              {
                key: "layers",
                get: function () {
                  var e;
                  return null !== (e = this._layers) && void 0 !== e ? e : [];
                },
              },
              {
                key: "setActiveNode",
                value: function (e, t) {
                  var r =
                    !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2];
                  ((this.activeLayerId = e),
                    (this.activeNodeId = t),
                    this.updateLayersVisibility(),
                    r || this.zoomToFit(t),
                    this.emit("select"));
                },
              },
              {
                key: "zoomToFit",
                value: function (e, t) {
                  var r;
                  null === (r = this.renderer) ||
                    void 0 === r ||
                    r.zoomToFit(t, e ? Number.parseInt(e) : void 0);
                },
              },
              {
                key: "updateLayersVisibility",
                value: function () {
                  var e = this;
                  (this.layers.forEach(function (t) {
                    t.id === e.activeLayerId
                      ? (t.isVisible = !0)
                      : (t.isVisible = !1);
                  }),
                    this.renderer &&
                      (this.renderer.scene2d.renderOptions =
                        this.createRenderOptions()));
                },
              },
              {
                key: "skipBoardLayer",
                value: function (e) {
                  return "Selection Layer" === e.name;
                },
              },
              {
                key: "updateBoardLayer",
                value: function (e, t) {
                  var r = te.l.getLayer(t.soft);
                  ((e.metaId = t.id),
                    (e.name = t.name),
                    (e.color = t.color ? t.color : e.color),
                    (e.layerGroup = t.group),
                    (e.group = t.group),
                    (e.displayIndex = t.displayIndex),
                    (e.groupDisplayIndex = t.groupDisplayIndex),
                    (e.stackIndex = t.stackIndex),
                    (e.isVisible = !1),
                    (e.soft = t.soft),
                    (e.isTop = r.isTop(t)),
                    (e.isBottom = r.isBottom(t)),
                    (e.isDrills = r.isDrillMap(t)),
                    (e.isKeepOut = r.isKeepOut(t)));
                },
              },
              {
                key: "createDefaultBoardLayer",
                value: function (e) {
                  var t = {},
                    r = { kind: ee.B.Other },
                    n = te.l.getLayer("");
                  return (
                    (t.id = e.index),
                    (t.metaId = -1),
                    (t.name = e.name),
                    (t.searchName = e.name),
                    (t.color = "none"),
                    (t.isVisible = !1),
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
                key: "skipMetaLayer",
                value: function (e) {
                  return !1;
                },
              },
              {
                key: "updateMetaLayer",
                value: function (e) {
                  var t = te.l.getLayer(e.soft);
                  ((e.group = t.getLayerGroup(e)),
                    (e.groupIndex = t.getLayerGroupStackIndex(e)),
                    (e.groupDisplayIndex = t.getLayerGroupDisplayStackIndex(e)),
                    (e.searchName = e.name),
                    (e.name = t.getLayerName(e)));
                },
              },
              {
                key: "getMetaLayers",
                value: function () {
                  var e = this;
                  if (null === this.metadata) return [];
                  var t = [];
                  return (
                    this.metadata.layers.forEach(function (r) {
                      if (!e.skipMetaLayer(r)) {
                        var n = {};
                        (Object.assign(n, r), e.updateMetaLayer(n), t.push(n));
                      }
                    }),
                    t
                      .sort(function (t, r) {
                        return e.compare(t, r);
                      })
                      .forEach(function (e, r) {
                        var n = te.l.getLayer(e.soft);
                        ((e.displayIndex = n.getDisplayIndex(e, r)),
                          (e.stackIndex = t.length - r));
                      }),
                    t
                  );
                },
              },
              {
                key: "createRenderOptions",
                value: function () {
                  var e = [];
                  return (
                    this.layers
                      .filter(function (e) {
                        return e.isVisible && !e.ignored;
                      })
                      .sort(function (e, t) {
                        return e.stackIndex - t.stackIndex;
                      })
                      .forEach(function (t) {
                        return e.push(new re.Z(t.id, t.searchName));
                      }),
                    this.addHighlightRenderOptions(e),
                    e
                  );
                },
              },
              {
                key: "addHighlightRenderOptions",
                value: function (e) {
                  this.renderer &&
                    e.push(
                      new re.Z(
                        this.renderer.scene2d.layers.length - 1,
                        ne.Z.HighlightLayerName,
                      ),
                    );
                },
              },
              {
                key: "getBoardLayers",
                value: function () {
                  var e = this,
                    t = [],
                    r = this.getMetaLayers();
                  if (!this.renderer) return t;
                  var n = this.renderer.scene2d.layers;
                  return (
                    this.getLogicalBoardLayers(n)
                      .concat(n)
                      .forEach(function (n) {
                        if (!e.skipBoardLayer(n)) {
                          var o = e.createDefaultBoardLayer(n),
                            i = r.find(function (e) {
                              return e.searchName === o.searchName;
                            });
                          (i && e.updateBoardLayer(o, i), t.push(o));
                        }
                      }),
                    t.sort(function (e, t) {
                      return e.groupDisplayIndex === t.groupDisplayIndex
                        ? e.displayIndex - t.displayIndex
                        : e.groupDisplayIndex - t.groupDisplayIndex;
                    })
                  );
                },
              },
              {
                key: "getLogicalBoardLayers",
                value: function (e) {
                  return [];
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
            ]),
            n && ie(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(a.Z),
        de = r(20595);
      function pe(e) {
        return (
          (pe =
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
          pe(e)
        );
      }
      function ye(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ve(n.key), n));
        }
      }
      function ve(e) {
        var t = (function (e, t) {
          if ("object" != pe(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != pe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == pe(t) ? t : t + "";
      }
      function ge(e, t, r) {
        return (
          (t = we(t)),
          (function (e, t) {
            if (t && ("object" == pe(t) || "function" == typeof t)) return t;
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
            me()
              ? Reflect.construct(t, r || [], we(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function me() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (me = function () {
          return !!e;
        })();
      }
      function be() {
        return (
          (be =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, r) {
                  var n = (function (e, t) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(e, t) && null !== (e = we(e));
                    );
                    return e;
                  })(e, t);
                  if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : r)
                      : o.value;
                  }
                }),
          be.apply(null, arguments)
        );
      }
      function we(e) {
        return (
          (we = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          we(e)
        );
      }
      function Ee(e, t) {
        return (
          (Ee = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Ee(e, t)
        );
      }
      !(function (e) {
        ((e[(e.Diff = 0)] = "Diff"),
          (e[(e.Added = 1)] = "Added"),
          (e[(e.Removed = 2)] = "Removed"));
      })(fe || (fe = {}));
      var Se = (function (e) {
          function t(e) {
            var r;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (r = ge(this, t, [e, "Difference"])).on(
                "layersInitialized",
                function () {
                  var e = 1;
                  r.layers.forEach(function (t) {
                    t.layerStatus === fe.Diff &&
                      t.groups.forEach(function (t) {
                        return (t.groupNumber = e++);
                      });
                  });
                },
              ),
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
                t && Ee(e, t));
            })(t, e),
            (r = t),
            (n = [
              {
                key: "layers",
                get: function () {
                  return be(we(t.prototype), "layers", this);
                },
              },
              {
                key: "setActiveNode",
                value: function (e, r) {
                  var n,
                    o,
                    i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  r
                    ? ((e =
                        null !==
                          (o =
                            null ===
                              (n = this.layers.find(function (e) {
                                return e.groups.find(function (e) {
                                  return e.groupId === r;
                                });
                              })) || void 0 === n
                              ? void 0
                              : n.id) && void 0 !== o
                          ? o
                          : e),
                      be(we(t.prototype), "setActiveNode", this).call(
                        this,
                        e,
                        r,
                        i,
                      ))
                    : be(we(t.prototype), "setActiveNode", this).call(
                        this,
                        e,
                        "",
                        i,
                      );
                },
              },
              {
                key: "highlightNode",
                value: function (e) {
                  (e === this.activeNodeId && (e = ""),
                    this.emit("highlight", e));
                },
              },
              {
                key: "getFirstActiveLayer",
                value: function () {
                  var e,
                    t = this.layers.find(function (e) {
                      return e.groups && e.groups.length;
                    });
                  return null !== (e = null == t ? void 0 : t.id) &&
                    void 0 !== e
                    ? e
                    : this.layers[0].id;
                },
              },
              {
                key: "createDefaultBoardLayer",
                value: function (e) {
                  var r = be(
                    we(t.prototype),
                    "createDefaultBoardLayer",
                    this,
                  ).call(this, e);
                  return ((r.groups = []), (r.diffLayers = []), r);
                },
              },
              {
                key: "skipBoardLayer",
                value: function (e) {
                  return (
                    be(we(t.prototype), "skipBoardLayer", this).call(this, e) ||
                    null !== this.isDiffLayer(e.name)
                  );
                },
              },
              {
                key: "getLogicalBoardLayers",
                value: function (e) {
                  for (
                    var t = [],
                      r = "diff-added-",
                      n = "diff-removed-",
                      o = function () {
                        var o = e[i],
                          a = o.name.startsWith(r)
                            ? o.name.replace(r, "")
                            : o.name.startsWith(n)
                              ? o.name.replace(n, "")
                              : o.name;
                        e.find(function (e) {
                          return e.name === a;
                        }) ||
                          t.some(function (e) {
                            return e.name === a;
                          }) ||
                          t.push(new de.Z(a, -100 - i));
                      },
                      i = 0;
                    i < e.length;
                    i++
                  )
                    o();
                  return t;
                },
              },
              {
                key: "updateBoardLayer",
                value: function (e, r) {
                  (be(we(t.prototype), "updateBoardLayer", this).call(
                    this,
                    e,
                    r,
                  ),
                    (e.diffLayers = r.diffLayers),
                    (e.layerStatus = r.layerStatus),
                    (e.groups = r.groups));
                },
              },
              {
                key: "skipMetaLayer",
                value: function (e) {
                  return null !== this.isDiffLayer(e.searchName);
                },
              },
              {
                key: "updateMetaLayer",
                value: function (e) {
                  (be(we(t.prototype), "updateMetaLayer", this).call(this, e),
                    (e.groups = []),
                    (e.diffLayers = []));
                },
              },
              {
                key: "getMetaLayers",
                value: function () {
                  var e = this,
                    r = be(we(t.prototype), "getMetaLayers", this).call(this);
                  this.metadata.layers.forEach(function (t) {
                    var n = e.isDiffLayer(t.searchName);
                    if (n) {
                      var o = r.find(function (e) {
                        return e.searchName === t.name;
                      });
                      if (o && n.primitives) {
                        var i = e.isAddedDiffLayer(t.searchName) ? 0 : 1;
                        (n.primitives.forEach(function (t) {
                          var r = e.getTopLeftCoordinate(t.nodeId);
                          (r && ((t.x = r.x), (t.y = r.y)),
                            (t.layerName = n.name),
                            (t.kind = i));
                        }),
                          o.diffLayers.push(n.name));
                      }
                    }
                  });
                  var n = function (t) {
                    var n = e.metadata.groups[t];
                    if (n.ids.length > 0) {
                      var o = n.ids[0].toString();
                      r.forEach(function (r) {
                        r.diffLayers.forEach(function (i) {
                          var a = e.isDiffLayer(i);
                          (null == a ? void 0 : a.primitives) &&
                            a.primitives.find(function (e) {
                              return e.nodeId === o;
                            }) &&
                            r.groups.push({
                              groupId: t,
                              groupNumber: 0,
                              x: n.bBox.minX,
                              y: n.bBox.minY,
                            });
                        });
                      });
                    }
                  };
                  for (var o in this.metadata.groups) n(o);
                  return r;
                },
              },
              {
                key: "createRenderOptions",
                value: function () {
                  var e = this,
                    t = [];
                  if (this.renderer) {
                    var r = this.renderer.scene2d;
                    this.layers
                      .filter(function (e) {
                        return e.isVisible && !e.ignored;
                      })
                      .sort(function (e, t) {
                        return e.stackIndex - t.stackIndex;
                      })
                      .forEach(function (n) {
                        var o;
                        (t.push(new re.Z(n.id, n.searchName)),
                          null === (o = n.diffLayers) ||
                            void 0 === o ||
                            o.forEach(function (n) {
                              var o = r.layers.find(function (e) {
                                return e.name === n;
                              });
                              if (o) {
                                t.push(new re.Z(o.index, o.name));
                                var i = r.layers.find(function (t) {
                                  return t.index === o.index + e.layerShift;
                                });
                                i && t.push(new re.Z(i.index, i.name));
                              }
                            }));
                      });
                  }
                  return (this.addHighlightRenderOptions(t), t);
                },
              },
              {
                key: "zoomToFit",
                value: function (e) {
                  if (this.renderer) {
                    var r = void 0;
                    if (e) {
                      var n = this.metadata.groups[e];
                      if (n && n.bBox) {
                        var o = 1e6;
                        ((e = ""),
                          (r = [
                            n.bBox.minX / o,
                            n.bBox.minY / o,
                            0,
                            n.bBox.maxX / o,
                            n.bBox.maxY / o,
                            0,
                          ]));
                      }
                    }
                    be(we(t.prototype), "zoomToFit", this).call(this, e, r);
                  }
                },
              },
              {
                key: "getTopLeftCoordinate",
                value: function (e) {
                  var t;
                  if (!this.renderer || !e) return null;
                  var r = this.renderer.scene2d.getNodeItemById(
                      Number.parseInt(e),
                    ),
                    n =
                      null === (t = this.renderer) || void 0 === t
                        ? void 0
                        : t.scene2d.getBoundingBoxForItem(r);
                  return n ? { x: n[0], y: n[1] } : void 0;
                },
              },
              {
                key: "isDiffLayer",
                value: function (e) {
                  var t = this.isAddedDiffLayer(e);
                  return (
                    t || (t = this.isRemovedDiffLayer(e)),
                    null != t ? t : null
                  );
                },
              },
              {
                key: "isAddedDiffLayer",
                value: function (e) {
                  var t = this.metadata.added.find(function (t) {
                    return t.name === e;
                  });
                  return null != t ? t : null;
                },
              },
              {
                key: "isRemovedDiffLayer",
                value: function (e) {
                  var t = this.metadata.removed.find(function (t) {
                    return t.name === e;
                  });
                  return null != t ? t : null;
                },
              },
            ]),
            n && ye(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(he),
        Oe = r(70315);
      function Le(e) {
        return (
          (Le =
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
          Le(e)
        );
      }
      function xe(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ke(n.key), n));
        }
      }
      function ke(e) {
        var t = (function (e, t) {
          if ("object" != Le(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != Le(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Le(t) ? t : t + "";
      }
      function _e(e, t, r) {
        return (
          (t = De(t)),
          (function (e, t) {
            if (t && ("object" == Le(t) || "function" == typeof t)) return t;
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
            Pe()
              ? Reflect.construct(t, r || [], De(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function Pe() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (Pe = function () {
          return !!e;
        })();
      }
      function De(e) {
        return (
          (De = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          De(e)
        );
      }
      function Te(e, t) {
        return (
          (Te = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Te(e, t)
        );
      }
      var Ce = (function (e) {
          function t(e, r, n) {
            var o;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((o = _e(this, t)).destroyed = !1),
              (o.center = { x: 0, y: 0 }),
              (o.center = n),
              (o.g = o.createIconGroup(e, r)),
              (o.circle = o.createCircle(o.g)),
              (o.text = o.createText(o.g, r)),
              o.once("destroy", function () {
                return e.removeChild(o.g);
              }),
              o
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
                t && Te(e, t));
            })(t, e),
            (r = t),
            (n = [
              {
                key: "destroy",
                value: function () {
                  this.destroyed ||
                    ((this.destroyed = !0), this.emit("destroy"));
                },
              },
              {
                key: "onTransformChaged",
                value: function (e) {
                  this.destroyed ||
                    ((this.circle.cx.baseVal.value = e.x),
                    (this.circle.cy.baseVal.value = e.y),
                    this.text.setAttribute("x", "".concat(e.x)),
                    this.text.setAttribute("y", "".concat(e.y)));
                },
              },
              {
                key: "addClickEventListener",
                value: function (e) {
                  (this.g.addEventListener("mousedown", function (e) {
                    return e.stopPropagation();
                  }),
                    this.g.addEventListener("mouseup", function (e) {
                      return e.stopPropagation();
                    }),
                    this.g.addEventListener("touchstart", function (e) {
                      return e.stopPropagation();
                    }),
                    this.g.addEventListener("click", function (t) {
                      (t.stopPropagation(), e(t));
                    }),
                    this.g.addEventListener("touchend", function (t) {
                      (t.stopPropagation(), e(t));
                    }));
                },
              },
              {
                key: "createIconGroup",
                value: function (e, t) {
                  var r = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g",
                  );
                  return (
                    r.setAttribute("data-group-id", t),
                    (r.style.cursor = "pointer"),
                    e.appendChild(r)
                  );
                },
              },
              {
                key: "createCircle",
                value: function (e) {
                  var t = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "circle",
                  );
                  return (
                    (t.r.baseVal.value = 16),
                    (t.style.fill = "#267FEB"),
                    e.appendChild(t)
                  );
                },
              },
              {
                key: "createText",
                value: function (e, t) {
                  var r = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "text",
                  );
                  return (
                    r.setAttribute("text-anchor", "middle"),
                    r.setAttribute("transform-origin", "center"),
                    r.setAttribute("dy", "0.35em"),
                    (r.innerHTML = t),
                    (r.style.fill = "#FFFFFF"),
                    e.appendChild(r)
                  );
                },
              },
            ]),
            n && xe(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(a.Z),
        Ie = r(32699);
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
      function Me() {
        Me = function () {
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
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
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
            c = new T(n || []);
          return (o(a, "_invoke", { value: k(e, r, c) }), a);
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
          d = "suspendedYield",
          p = "executing",
          y = "completed",
          v = {};
        function g() {}
        function m() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          S = E && E(E(C([])));
        S && S !== r && n.call(S, a) && (w = S);
        var O = (b.prototype = g.prototype = Object.create(w));
        function L(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function r(o, i, a, c) {
            var u = f(e[o], e, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == je(l) && n.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      r("next", e, a, c);
                    },
                    function (e) {
                      r("throw", e, a, c);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return r("throw", e, a, c);
                    },
                  );
            }
            c(u.arg);
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
          var o = h;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = _(c, n);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = y), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = p;
              var s = f(t, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? y : d), s.arg === v)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = y), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function _(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                _(t, r),
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
        function P(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function D(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function T(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(P, this),
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
          throw new TypeError(je(t) + " is not iterable");
        }
        return (
          (m.prototype = b),
          o(O, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: m, configurable: !0 }),
          (m.displayName = s(b, u, "GeneratorFunction")),
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
                : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          L(x.prototype),
          s(x.prototype, c, function () {
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
          L(O),
          s(O, u, "Generator"),
          s(O, a, function () {
            return this;
          }),
          s(O, "toString", function () {
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
          (T.prototype = {
            constructor: T,
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
                  return (this.complete(r.completion, r.afterLoc), D(r), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    D(r);
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
      function Ne(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Re(n.key), n));
        }
      }
      function Re(e) {
        var t = (function (e, t) {
          if ("object" != je(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != je(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == je(t) ? t : t + "";
      }
      function Be(e, t, r) {
        return (
          (t = Fe(t)),
          (function (e, t) {
            if (t && ("object" == je(t) || "function" == typeof t)) return t;
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
            Ge()
              ? Reflect.construct(t, r || [], Fe(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function Ge() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (Ge = function () {
          return !!e;
        })();
      }
      function Ae() {
        return (
          (Ae =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, r) {
                  var n = (function (e, t) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(e, t) && null !== (e = Fe(e));
                    );
                    return e;
                  })(e, t);
                  if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : r)
                      : o.value;
                  }
                }),
          Ae.apply(null, arguments)
        );
      }
      function Fe(e) {
        return (
          (Fe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Fe(e)
        );
      }
      function Ue(e, t) {
        return (
          (Ue = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Ue(e, t)
        );
      }
      var He = (function (e) {
          function t() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((e = Be(this, t, ["Difference"])).selectionScene = null),
              (e.selectedNodes = []),
              (e.highlightScene = null),
              (e.highlightedNodes = []),
              (e.groupBorderScene = null),
              (e.groupNodes = []),
              (e.bubblesScene = null),
              (e.materialsInfo = {
                set: !1,
                bgColor: new Array(),
                color: new Uint8Array([158, 158, 158, 255]),
                addedColor: new Uint8Array([0, 191, 165, 153]),
                removedColor: new Uint8Array([197, 17, 98, 204]),
                groupBorderColor: new Uint8Array([38, 127, 235, 204]),
                materials: [],
                dimmedNodeMaterials: [],
              }),
              (e.loadMode = $.L.SceneBinZipStream),
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
                t && Ue(e, t));
            })(t, e),
            (r = t),
            (n = [
              {
                key: "doSetup",
                value: function (e) {
                  return (
                    (t = this),
                    (r = void 0),
                    (n = void 0),
                    (o = Me().mark(function t() {
                      var r;
                      return Me().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if ((r = e.response)) {
                                  t.next = 3;
                                  break;
                                }
                                throw new Error("Response is empty.");
                              case 3:
                                return ((t.next = 5), this.handleResponse(r));
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    })),
                    new (n || (n = Promise))(function (e, i) {
                      function a(e) {
                        try {
                          u(o.next(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function c(e) {
                        try {
                          u(o.throw(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function u(t) {
                        var r;
                        t.done
                          ? e(t.value)
                          : ((r = t.value),
                            r instanceof n
                              ? r
                              : new n(function (e) {
                                  e(r);
                                })).then(a, c);
                      }
                      u((o = o.apply(t, r || [])).next());
                    })
                  );
                  var t, r, n, o;
                },
              },
              {
                key: "createLayerManager",
                value: function (e) {
                  var t = this,
                    r = new Se(e);
                  return (
                    r.on("enable", function () {
                      (t.clearHighlight(), t.drawSelect(r.activeNodeId));
                    }),
                    r.on("disable", function () {
                      (t.clearHighlight(), t.clearSelect());
                    }),
                    r.on("select", function () {
                      (t.clearHighlight(), t.drawSelect(r.activeNodeId));
                    }),
                    r.on("highlight", function (e) {
                      t.drawHighlight(e);
                    }),
                    r
                  );
                },
              },
              {
                key: "createSvgPlaneOverlay",
                value: function (e, r) {
                  var n,
                    o = this,
                    i = Ae(Fe(t.prototype), "createSvgPlaneOverlay", this).call(
                      this,
                      e,
                      r,
                      1,
                    ),
                    a = !1,
                    c = -1;
                  this.layerManager.on("select", function () {
                    a &&
                      o.layerManager.activeLayerId !== c &&
                      ((c = o.layerManager.activeLayerId),
                      o.drawBubblesForGroups());
                  });
                  var u = function () {
                    var t, r;
                    if (o.bubblesScene) {
                      var a =
                        null === (t = i.info.scene.getScreenCTM()) ||
                        void 0 === t
                          ? void 0
                          : t.inverse();
                      a &&
                        (o.bubblesScene.setAttribute(
                          "transform",
                          "scale(".concat(a.a, ", ").concat(a.d, ")"),
                        ),
                        (a =
                          null === (r = o.bubblesScene.getScreenCTM()) ||
                          void 0 === r
                            ? void 0
                            : r.inverse()) &&
                          o.groupNodes.forEach(function (t) {
                            if (t.icon) {
                              var r = e.scene2d.worldToViewport([
                                t.icon.center.x,
                                t.icon.center.y,
                              ]);
                              ((n.x = r[0] + window.__APP__.sidebarWidth),
                                (n.y = r[1]),
                                t.icon.onTransformChaged(n.matrixTransform(a)));
                            }
                          }));
                    }
                  };
                  return (
                    i.on("set", function () {
                      ((a = !0),
                        (c = o.layerManager.activeLayerId),
                        n || (n = i.info.svg.createSVGPoint()),
                        i.info.scene.addEventListener("didTransformChange", u),
                        (o.bubblesScene = i.info.scene.appendChild(
                          document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "g",
                          ),
                        )),
                        o.bubblesScene.setAttribute(
                          "data-owner",
                          "bubbles-draw-icons",
                        ),
                        o.drawBubblesForGroups());
                    }),
                    i.on("clear", function () {
                      var e;
                      a &&
                        (null === (e = i.info.scene) ||
                          void 0 === e ||
                          e.removeEventListener("didTransformChange", u),
                        o.clearBubblesForGroups(),
                        (o.bubblesScene = null),
                        (a = !1));
                    }),
                    i
                  );
                },
              },
              {
                key: "setScene",
                value: function (e, t) {
                  var r = null == e ? void 0 : e.scene2d;
                  r &&
                    (this.initGroupScene(r),
                    this.initHighlightScene(r),
                    this.initSelectionScene(r),
                    this.materialsInfo.set || this.initSceneMaterials(r, t),
                    e.scene2d.setMaterials(this.materialsInfo.materials));
                },
              },
              {
                key: "clearScene",
                value: function () {
                  var e, t, r;
                  (null === (e = this.groupBorderScene) ||
                    void 0 === e ||
                    e.dispose(),
                    (this.groupBorderScene = null),
                    null === (t = this.highlightScene) ||
                      void 0 === t ||
                      t.dispose(),
                    (this.highlightScene = null),
                    null === (r = this.selectionScene) ||
                      void 0 === r ||
                      r.dispose(),
                    (this.selectionScene = null));
                },
              },
              {
                key: "cloneNodesToOverlayScene",
                value: function (e, t, r) {
                  var n = this.getActiveLayerItemsForGroup(e),
                    o = function (e, n) {
                      t.parentScene.getNodeItemsByIds(e).forEach(function (e) {
                        if (e) {
                          var o = t.parentScene.cloneNodeItemToLayer(
                            e,
                            0,
                            n,
                            0,
                            t,
                          );
                          o && r.push(o);
                        }
                      });
                    };
                  (o(n.added, 0), o(n.removed, 1));
                },
              },
              {
                key: "getActiveLayerItemsForGroup",
                value: function (e) {
                  var t,
                    r = this,
                    n = this.metadata.camtastic[0];
                  try {
                    if (!n) throw new Error("Document metadata has not found.");
                    if (!n.groups)
                      throw new Error(
                        "Document metadata has not contain groups.",
                      );
                    var o = n.groups[e];
                    if (!o)
                      throw new Error(
                        "Document metadata has not contain group ".concat(
                          e,
                          ".",
                        ),
                      );
                    if (this.layerManager) {
                      var i = this.layerManager.layers.find(function (e) {
                        return e.id === r.layerManager.activeLayerId;
                      });
                      if (i) {
                        var a = new Set(
                            null !== (t = o.ids) && void 0 !== t ? t : [],
                          ),
                          c = function (e) {
                            if (!e) return [];
                            var t = e.find(function (e) {
                              return i.diffLayers.find(function (t) {
                                return t === e.name;
                              });
                            });
                            return t
                              ? t.primitives
                                  .map(function (e) {
                                    return parseInt(e.nodeId);
                                  })
                                  .filter(function (e) {
                                    return a.has(e);
                                  })
                              : [];
                          };
                        return { added: c(n.added), removed: c(n.removed) };
                      }
                    }
                  } catch (e) {}
                  return { added: [], removed: [] };
                },
              },
              {
                key: "initGroupScene",
                value: function (e) {
                  var t = {
                      Diffuse: this.materialsInfo.groupBorderColor,
                      Hatching: Oe.lc.None,
                      Bordered: !1,
                      GrayscaleMesh: !1,
                      OnTop: !1,
                      Offset2D: 0,
                      Drc: [0, 0, 0, 0],
                      OverrideColor: [0, 0, 0, 0],
                    },
                    r = {
                      name: "Default_Groups_Layer",
                      z_range: [-1, 1],
                      is_keepout: !1,
                      is_layer_marks: !1,
                      is_inverted: !1,
                      is_cutout: !1,
                      layer_type:
                        window.GraphiteResolverInstance.module.LayerType
                          .Regular,
                      show3d: !1,
                    };
                  this.groupBorderScene = e.createOverlayScene(
                    "Gerber_Defference_2D_Groups_Scene",
                    [r],
                    [t],
                  );
                },
              },
              {
                key: "clearBubblesForGroups",
                value: function () {
                  var e = this;
                  (this.groupNodes.forEach(function (t) {
                    var r;
                    (t.node &&
                      e.groupBorderScene &&
                      e.groupBorderScene.removeItem(t.node),
                      null === (r = t.icon) || void 0 === r || r.destroy());
                  }),
                    (this.groupNodes.length = 0));
                },
              },
              {
                key: "drawBubblesForGroups",
                value: function () {
                  var e,
                    t = this;
                  this.clearBubblesForGroups();
                  var r = this.layerManager.layers.find(function (e) {
                    return e.id === t.layerManager.activeLayerId;
                  });
                  r &&
                    r.layerStatus === fe.Diff &&
                    (null === (e = r.groups) ||
                      void 0 === e ||
                      e.forEach(function (e) {
                        var r = t.metadata.camtastic[0].groups[e.groupId];
                        if (null == r ? void 0 : r.bBox) {
                          var n = Object.assign(
                              {},
                              null == r ? void 0 : r.bBox,
                            ),
                            o = L.RectMargin,
                            i = L.ScaleFactor;
                          ((n.minX = (n.minX - o) / i),
                            (n.minY = (n.minY - o) / i),
                            (n.maxX = (n.maxX + o) / i),
                            (n.maxY = (n.maxY + o) / i));
                          var a = {
                            node: t.createGroupRectNode(n),
                            icon: new Ce(
                              t.bubblesScene,
                              "".concat(e.groupNumber),
                              { x: n.maxX, y: n.maxY },
                            ),
                          };
                          (a.icon.addClickEventListener(function (r) {
                            return t.onGroupClick(r.detail, e.groupId);
                          }),
                            t.groupNodes.push(a));
                        }
                      }));
                },
              },
              {
                key: "createGroupRectNode",
                value: function (e) {
                  if (this.groupBorderScene) {
                    for (
                      var t = [
                          [e.minX, e.minY, 0],
                          [e.maxX, e.minY, 0],
                          [e.maxX, e.maxY, 0],
                          [e.minX, e.maxY, 0],
                          [e.minX, e.minY, 0],
                        ],
                        r = [],
                        n = 0;
                      n < t.length - 1;
                      n++
                    ) {
                      var o = t[n],
                        i = t[n + 1];
                      r.push({
                        from: o,
                        to: i,
                        material: 0,
                        width: 2,
                        dash: 0,
                      });
                    }
                    return this.groupBorderScene.addItem(
                      0,
                      [],
                      [],
                      [],
                      [],
                      r,
                      [],
                    );
                  }
                },
              },
              {
                key: "initHighlightScene",
                value: function (e) {
                  var t = {
                      Diffuse: new Uint8Array(
                        this.dimmingColor(this.materialsInfo.addedColor, 1.4),
                      ),
                      Hatching: Oe.lc.None,
                      Bordered: !1,
                      GrayscaleMesh: !1,
                      OnTop: !1,
                      Offset2D: 0,
                      Drc: [0, 0, 0, 0],
                      OverrideColor: [0, 0, 0, 0],
                    },
                    r = {
                      Diffuse: new Uint8Array(
                        this.dimmingColor(this.materialsInfo.removedColor, 1.4),
                      ),
                      Hatching: Oe.lc.None,
                      Bordered: !1,
                      GrayscaleMesh: !1,
                      OnTop: !1,
                      Offset2D: 0,
                      Drc: [0, 0, 0, 0],
                      OverrideColor: [0, 0, 0, 0],
                    },
                    n = {
                      name: "Default_Highlight_Layer",
                      z_range: [-1, 1],
                      is_keepout: !1,
                      is_layer_marks: !1,
                      is_inverted: !1,
                      is_cutout: !1,
                      layer_type:
                        window.GraphiteResolverInstance.module.LayerType
                          .Regular,
                      show3d: !1,
                    };
                  this.highlightScene = e.createOverlayScene(
                    "Gerber_Defference_2D_Highlight_Scene",
                    [n],
                    [t, r],
                  );
                },
              },
              {
                key: "clearHighlight",
                value: function () {
                  if (this.highlightScene)
                    try {
                      (this.highlightScene.deleteItems(this.highlightedNodes),
                        this.highlightScene.setDirty(!0),
                        (this.highlightedNodes = []));
                    } finally {
                      this.canvasControl.invalidate();
                    }
                },
              },
              {
                key: "drawHighlight",
                value: function (e) {
                  if (this.highlightScene)
                    try {
                      if ((this.clearHighlight(), !e)) return;
                      (this.cloneNodesToOverlayScene(
                        e,
                        this.highlightScene,
                        this.highlightedNodes,
                      ),
                        this.highlightScene.setDirty(!0));
                    } finally {
                      this.canvasControl.invalidate();
                    }
                },
              },
              {
                key: "initSelectionScene",
                value: function (e) {
                  var t = {
                      Diffuse: this.materialsInfo.addedColor,
                      Hatching: Oe.lc.None,
                      Bordered: !1,
                      GrayscaleMesh: !1,
                      OnTop: !1,
                      Offset2D: 0,
                      Drc: [0, 0, 0, 0],
                      OverrideColor: [0, 0, 0, 0],
                    },
                    r = {
                      Diffuse: this.materialsInfo.removedColor,
                      Hatching: Oe.lc.None,
                      Bordered: !1,
                      GrayscaleMesh: !1,
                      OnTop: !1,
                      Offset2D: 0,
                      Drc: [0, 0, 0, 0],
                      OverrideColor: [0, 0, 0, 0],
                    },
                    n = {
                      name: "Default_Selection_Layer",
                      z_range: [-1, 1],
                      is_keepout: !1,
                      is_layer_marks: !1,
                      is_inverted: !1,
                      is_cutout: !1,
                      layer_type:
                        window.GraphiteResolverInstance.module.LayerType
                          .Regular,
                      show3d: !1,
                    };
                  this.selectionScene = e.createOverlayScene(
                    "Gerber_Defference_2D_Selection_Scene",
                    [n],
                    [t, r],
                  );
                },
              },
              {
                key: "updateMaterials",
                value: function (e, t) {
                  if (e && (null == t ? void 0 : t.length)) {
                    var r = e.getMaterialMap().GetMaterialsCount();
                    if (r > t.length)
                      for (var n = t.length; n < r; n++) {
                        var o = e.getMaterialMap().GetMaterial(n);
                        o && t.push(o);
                      }
                    e.setMaterials(t);
                  }
                },
              },
              {
                key: "clearSelect",
                value: function () {
                  this.selectionScene &&
                    (this.selectionScene.deleteItems(this.selectedNodes),
                    this.selectionScene.setDirty(!0),
                    (this.selectedNodes = []),
                    this.updateMaterials(
                      this.selectionScene.parentScene,
                      this.materialsInfo.materials,
                    ),
                    (this.selectionScene.parentScene.background =
                      this.materialsInfo.bgColor));
                },
              },
              {
                key: "drawSelect",
                value: function (e) {
                  if (this.selectionScene && (this.clearSelect(), e))
                    try {
                      (this.cloneNodesToOverlayScene(
                        e,
                        this.selectionScene,
                        this.selectedNodes,
                      ),
                        this.selectionScene.setDirty(!0),
                        (this.selectionScene.parentScene.background =
                          this.dimmingColor(this.materialsInfo.bgColor, 0.6)),
                        this.updateMaterials(
                          this.selectionScene.parentScene,
                          this.materialsInfo.dimmedNodeMaterials,
                        ));
                    } catch (e) {
                      ((this.selectionScene.parentScene.background =
                        this.materialsInfo.bgColor),
                        this.updateMaterials(
                          this.selectionScene.parentScene,
                          this.materialsInfo.materials,
                        ));
                    }
                },
              },
              {
                key: "initSceneMaterials",
                value: function (e, t) {
                  var r,
                    n,
                    o = this,
                    i = [],
                    a = e
                      .getMaterials()
                      .slice()
                      .map(function (e) {
                        return new Ie.Z(
                          e.Diffuse,
                          e.Hatching,
                          e.Bordered,
                          !1,
                          e.GrayscaleMesh,
                        );
                      }),
                    c = e
                      .getMaterials()
                      .slice()
                      .map(function (e) {
                        return new Ie.Z(
                          e.Diffuse,
                          e.Hatching,
                          e.Bordered,
                          !1,
                          e.GrayscaleMesh,
                        );
                      });
                  (t &&
                    (null === (r = t.added) ||
                      void 0 === r ||
                      r.forEach(function (t) {
                        var r = o.getMaterialIdByPrim(e, t);
                        r &&
                          (i.push(r),
                          (a[r].Diffuse = o.materialsInfo.addedColor),
                          (c[r].Diffuse = new Uint8Array(
                            o.dimmingColor(o.materialsInfo.addedColor, 0.6),
                          )));
                      }),
                    null === (n = t.removed) ||
                      void 0 === n ||
                      n.forEach(function (t) {
                        var r = o.getMaterialIdByPrim(e, t);
                        r &&
                          (i.push(r),
                          (a[r].Diffuse = o.materialsInfo.removedColor),
                          (c[r].Diffuse = new Uint8Array(
                            o.dimmingColor(o.materialsInfo.removedColor, 0.6),
                          )));
                      })),
                    a.forEach(function (e, t) {
                      -1 === i.indexOf(t) &&
                        ((e.Diffuse = o.materialsInfo.color),
                        (c[t].Diffuse = new Uint8Array(
                          o.dimmingColor(o.materialsInfo.color, 0.6),
                        )));
                    }),
                    (this.materialsInfo.set = !0),
                    (this.materialsInfo.materials = a),
                    (this.materialsInfo.dimmedNodeMaterials = c),
                    (this.materialsInfo.bgColor = e.background.slice()));
                },
              },
              {
                key: "dimmingColor",
                value: function (e, t) {
                  var r = this.rgbToHsl(e[0], e[1], e[2]),
                    n = this.hslToRgb(r[0], r[1], r[2] * t);
                  return [n[0], n[1], n[2], e[3]];
                },
              },
              {
                key: "rgbToHsl",
                value: function (e, t, r) {
                  ((e /= 255), (t /= 255), (r /= 255));
                  var n = Math.max(e, t, r),
                    o = Math.min(e, t, r),
                    i = (n + o) / 2;
                  if (n !== o) {
                    var a = n - o,
                      c = i > 0.5 ? a / (2 - n - o) : a / (n + o),
                      u = 0;
                    switch (n) {
                      case e:
                        u = (t - r) / a + (t < r ? 6 : 0);
                        break;
                      case t:
                        u = (r - e) / a + 2;
                        break;
                      case r:
                        u = (e - t) / a + 4;
                    }
                    return [u / 6, c, i];
                  }
                  return [0, 0, i];
                },
              },
              {
                key: "hslToRgb",
                value: function (e, t, r) {
                  var n = 0,
                    o = 0,
                    i = 0;
                  if (0 == t) n = o = i = r;
                  else {
                    var a = function (e, t, r) {
                        return (
                          r < 0 && (r += 1),
                          r > 1 && (r -= 1),
                          r < 1 / 6
                            ? e + 6 * (t - e) * r
                            : r < 0.5
                              ? t
                              : r < 2 / 3
                                ? e + (t - e) * (2 / 3 - r) * 6
                                : e
                        );
                      },
                      c = r < 0.5 ? r * (1 + t) : r + t - r * t,
                      u = 2 * r - c;
                    ((n = a(u, c, e + 1 / 3)),
                      (o = a(u, c, e)),
                      (i = a(u, c, e - 1 / 3)));
                  }
                  return [255 * n, 255 * o, 255 * i];
                },
              },
              {
                key: "getMaterialIdByPrim",
                value: function (e, t) {
                  if (t.primitives && t.primitives.length > 0) {
                    var r = t.primitives[0],
                      n = e.getNodeItemById(Number.parseInt(r.nodeId));
                    if (n) return this.getMaterialId(n);
                  }
                },
              },
              {
                key: "getMaterialId",
                value: function (e) {
                  if (e.GetLayersCount() > 0) {
                    var t = e.GetLayerGeometry(0);
                    return this.getMaterialIdByLayerGeometry(t);
                  }
                },
              },
              {
                key: "getMaterialIdByLayerGeometry",
                value: function (e) {
                  var t = e.GetUnisCount();
                  if (t > 0) {
                    var r = e.GetUni(0);
                    if (r) return r.material;
                  }
                  if ((t = e.GetArcsCount()) > 0) {
                    var n = e.GetArc(0);
                    if (n) return n.material;
                  }
                  if ((t = e.GetPolysCount()) > 0) {
                    var o = e.GetPoly(0);
                    if (o) return o.material;
                  }
                },
              },
              {
                key: "onGroupClick",
                value: function (e, t) {
                  this.layerManager.emit("clickGroup", { id: t, type: e });
                },
              },
              {
                key: "onRenedererDisable",
                value: function (e) {
                  (Ae(Fe(t.prototype), "onRenedererDisable", this).call(
                    this,
                    e,
                  ),
                    (this.materialsInfo.set = !1),
                    (this.materialsInfo.materials = []),
                    (this.materialsInfo.dimmedNodeMaterials = []));
                },
              },
            ]),
            n && Ne(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(Q),
        Ye = r(58652);
      function ze(e) {
        return (
          (ze =
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
          ze(e)
        );
      }
      function Ve() {
        Ve = function () {
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
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
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
            c = new T(n || []);
          return (o(a, "_invoke", { value: k(e, r, c) }), a);
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
          d = "suspendedYield",
          p = "executing",
          y = "completed",
          v = {};
        function g() {}
        function m() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          S = E && E(E(C([])));
        S && S !== r && n.call(S, a) && (w = S);
        var O = (b.prototype = g.prototype = Object.create(w));
        function L(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function r(o, i, a, c) {
            var u = f(e[o], e, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == ze(l) && n.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      r("next", e, a, c);
                    },
                    function (e) {
                      r("throw", e, a, c);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return r("throw", e, a, c);
                    },
                  );
            }
            c(u.arg);
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
          var o = h;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = _(c, n);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = y), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = p;
              var s = f(t, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? y : d), s.arg === v)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = y), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function _(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                _(t, r),
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
        function P(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function D(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function T(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(P, this),
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
          throw new TypeError(ze(t) + " is not iterable");
        }
        return (
          (m.prototype = b),
          o(O, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: m, configurable: !0 }),
          (m.displayName = s(b, u, "GeneratorFunction")),
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
                : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          L(x.prototype),
          s(x.prototype, c, function () {
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
          L(O),
          s(O, u, "Generator"),
          s(O, a, function () {
            return this;
          }),
          s(O, "toString", function () {
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
          (T.prototype = {
            constructor: T,
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
                  return (this.complete(r.completion, r.afterLoc), D(r), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    D(r);
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
      function Ze(e, t) {
        return (
          (r = this),
          (n = void 0),
          (o = void 0),
          (i = Ve().mark(function r() {
            var n, o;
            return Ve().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return ((n = {}), (r.next = 3), Xe(e, t));
                  case 3:
                    if ("Error" !== (o = r.sent).status) {
                      r.next = 6;
                      break;
                    }
                    throw new Error(o.message);
                  case 6:
                    return ((n.designId = o.designId), (r.next = 9), Ke(e, o));
                  case 9:
                    return (
                      (n.storage = r.sent),
                      (r.next = 12),
                      We(e, n.storage)
                    );
                  case 12:
                    return ((n.metadata = r.sent), r.abrupt("return", n));
                  case 14:
                  case "end":
                    return r.stop();
                }
            }, r);
          })),
          new (o || (o = Promise))(function (e, t) {
            function a(e) {
              try {
                u(i.next(e));
              } catch (e) {
                t(e);
              }
            }
            function c(e) {
              try {
                u(i.throw(e));
              } catch (e) {
                t(e);
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
                      })).then(a, c);
            }
            u((i = i.apply(r, n || [])).next());
          })
        );
        var r, n, o, i;
      }
      function Xe(e, t) {
        return new Promise(function (r, n) {
          var o = Object.assign({}, e.setupOptions);
          o.designUrl = t;
          var i = e.resolverProvider.createDesignResolver(!0);
          i.on("COMPLETED", function e(t) {
            (i.off("PARTIAL_COMPLETED", e),
              i.off("COMPLETED", e),
              r(t.payload));
          })
            .on("CRASHED", function (e) {
              return n(e);
            })
            .init(e.domain, e.apiHeaders, o);
        });
      }
      function Ke(e, t) {
        return new Promise(function (r, n) {
          var o = e.resolverProvider.createStorageResolver(),
            i = (0, Ye.U)(o, e.domain, e.apiHeaders, t.designId);
          o.once("COMPLETED", function () {
            return r(i);
          })
            .once("CRASHED", function (e) {
              return n(e);
            })
            .init(e.domain, t, e.apiHeaders)
            .update();
        });
      }
      function We(e, t) {
        return new Promise(function (r, n) {
          e.resolverProvider
            .createMetadataResolver(!0)
            .once("COMPLETED", function (e) {
              return r(Object.assign({}, e.payload));
            })
            .on("CRASHED", function (e) {
              return n(e);
            })
            .init(t);
        });
      }
      function qe(e) {
        return (
          (qe =
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
          qe(e)
        );
      }
      function Je(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Qe(n.key), n));
        }
      }
      function Qe(e) {
        var t = (function (e, t) {
          if ("object" != qe(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != qe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == qe(t) ? t : t + "";
      }
      function $e(e, t, r) {
        return (
          (t = rt(t)),
          (function (e, t) {
            if (t && ("object" == qe(t) || "function" == typeof t)) return t;
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
            et()
              ? Reflect.construct(t, r || [], rt(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function et() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (et = function () {
          return !!e;
        })();
      }
      function tt() {
        return (
          (tt =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, r) {
                  var n = (function (e, t) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(e, t) && null !== (e = rt(e));
                    );
                    return e;
                  })(e, t);
                  if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : r)
                      : o.value;
                  }
                }),
          tt.apply(null, arguments)
        );
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
      function nt(e, t) {
        return (
          (nt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          nt(e, t)
        );
      }
      var ot = (function (e) {
        function t(e, r) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            $e(this, t, [e, r])
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
              t && nt(e, t));
          })(t, e),
          (r = t),
          (n = [
            {
              key: "setActiveNode",
              value: function (e) {
                tt(rt(t.prototype), "setActiveNode", this).call(this, e, "");
              },
            },
          ]) && Je(r.prototype, n),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n;
      })(he);
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
      function at() {
        at = function () {
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
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
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
            c = new T(n || []);
          return (o(a, "_invoke", { value: k(e, r, c) }), a);
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
          d = "suspendedYield",
          p = "executing",
          y = "completed",
          v = {};
        function g() {}
        function m() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          S = E && E(E(C([])));
        S && S !== r && n.call(S, a) && (w = S);
        var O = (b.prototype = g.prototype = Object.create(w));
        function L(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function r(o, i, a, c) {
            var u = f(e[o], e, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == it(l) && n.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      r("next", e, a, c);
                    },
                    function (e) {
                      r("throw", e, a, c);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return r("throw", e, a, c);
                    },
                  );
            }
            c(u.arg);
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
          var o = h;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = _(c, n);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = y), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = p;
              var s = f(t, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? y : d), s.arg === v)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = y), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function _(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                _(t, r),
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
        function P(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function D(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function T(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(P, this),
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
          throw new TypeError(it(t) + " is not iterable");
        }
        return (
          (m.prototype = b),
          o(O, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: m, configurable: !0 }),
          (m.displayName = s(b, u, "GeneratorFunction")),
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
                : ((e.__proto__ = b), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(O)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          L(x.prototype),
          s(x.prototype, c, function () {
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
          L(O),
          s(O, u, "Generator"),
          s(O, a, function () {
            return this;
          }),
          s(O, "toString", function () {
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
          (T.prototype = {
            constructor: T,
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
                  return (this.complete(r.completion, r.afterLoc), D(r), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    D(r);
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
      function ct(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, ut(n.key), n));
        }
      }
      function ut(e) {
        var t = (function (e, t) {
          if ("object" != it(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != it(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == it(t) ? t : t + "";
      }
      function st(e, t, r) {
        return (
          (t = ft(t)),
          (function (e, t) {
            if (t && ("object" == it(t) || "function" == typeof t)) return t;
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
            lt()
              ? Reflect.construct(t, r || [], ft(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function lt() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (lt = function () {
          return !!e;
        })();
      }
      function ft(e) {
        return (
          (ft = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ft(e)
        );
      }
      function ht(e, t) {
        return (
          (ht = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          ht(e, t)
        );
      }
      var dt = (function (e) {
        function t(e, r) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = st(this, t, [e])).id = null != r ? r : ""),
            (n.loadMode = $.L.BinaryZip),
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
              t && ht(e, t));
          })(t, e),
          (r = t),
          (n = [
            {
              key: "hidden",
              get: function () {
                return !this.id;
              },
            },
            {
              key: "doSetup",
              value: function (e) {
                return (
                  (t = this),
                  (r = void 0),
                  (n = void 0),
                  (o = at().mark(function t() {
                    var r;
                    return at().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return ((t.next = 2), Ze(e, this.id));
                            case 2:
                              return (
                                (r = t.sent),
                                (t.next = 5),
                                this.handleResponse(r)
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                    );
                  })),
                  new (n || (n = Promise))(function (e, i) {
                    function a(e) {
                      try {
                        u(o.next(e));
                      } catch (e) {
                        i(e);
                      }
                    }
                    function c(e) {
                      try {
                        u(o.throw(e));
                      } catch (e) {
                        i(e);
                      }
                    }
                    function u(t) {
                      var r;
                      t.done
                        ? e(t.value)
                        : ((r = t.value),
                          r instanceof n
                            ? r
                            : new n(function (e) {
                                e(r);
                              })).then(a, c);
                    }
                    u((o = o.apply(t, r || [])).next());
                  })
                );
                var t, r, n, o;
              },
            },
            {
              key: "createLayerManager",
              value: function (e) {
                return new ot(e, this.type);
              },
            },
            {
              key: "setupDocuments",
              value: function (e) {
                var t = this;
                window.__CORE__.engines.FabricationMetadata.getDocuments(e)
                  .filter(function (e) {
                    return "Gerber" === e.type;
                  })
                  .forEach(function (e) {
                    return t.documents.push({
                      id: e.id,
                      displayName: e.name,
                      name: e.name,
                      errorState: null,
                      renderData: null,
                      isLoaded: !1,
                      fileData: e.fileData,
                    });
                  });
              },
            },
          ]) && ct(r.prototype, n),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n;
      })(Q);
      function pt(e) {
        return (
          (pt =
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
          pt(e)
        );
      }
      function yt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, vt(n.key), n));
        }
      }
      function vt(e) {
        var t = (function (e, t) {
          if ("object" != pt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != pt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == pt(t) ? t : t + "";
      }
      var gt = window.__APP__.createModule,
        mt = (function () {
          return (
            (e = function e() {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.viewEngines = new Map()),
                (this.logger = n.createLogger("GCE_Engine")));
            }),
            (t = [
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
                    "GerberComparisonEngine:rendererDidEnable",
                    "GerberComparisonEngine:rendererDidDisable",
                    "GerberComparisonEngine:fps",
                  ];
                },
              },
              {
                key: "name",
                get: function () {
                  return "GerberComparisonEngine";
                },
              },
              {
                key: "comment",
                get: function () {
                  return "Presents Gerber documents difference engine";
                },
              },
              {
                key: "dependencies",
                get: function () {
                  return [
                    "graphite.engine",
                    "GerberCompareMeasurement",
                    "fabricationMetadata",
                  ];
                },
              },
              {
                key: "setup",
                value: function (e) {
                  var t = this,
                    r = new He();
                  (this.viewEngines.set("Difference", r),
                    r.setup(e).catch(function (e) {
                      return t.logger.LogError(
                        "Setup difference view engine error. " + e.message,
                      );
                    }));
                  var n = { value: null };
                  if (e.tryGetAttributeValue("data-comparison-source-id", n)) {
                    var o = new dt("Source", n.value);
                    (this.viewEngines.set("Source", o),
                      o.setup(e).catch(function (e) {
                        return t.logger.LogError(
                          "Setup source view engine error. " + e.message,
                        );
                      }));
                  }
                  if (e.tryGetAttributeValue("data-comparison-target-id", n)) {
                    var i = new dt("Target", n.value);
                    (this.viewEngines.set("Target", i),
                      i.setup(e).catch(function (e) {
                        return t.logger.LogError(
                          "Setup target view engine error. " + e.message,
                        );
                      }));
                  }
                  return Promise.resolve();
                },
              },
            ]) && yt(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
      n.addModule(
        gt({
          type: "Engine",
          name: "GerberComparisonEngine",
          description: "Presents Gerber documents difference engine module",
          create: function () {
            return new mt();
          },
        }),
      );
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 97379))), e.O());
  },
]);
