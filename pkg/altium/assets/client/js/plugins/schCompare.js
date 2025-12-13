/*! For license information please see schCompare.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [20483, 74687, 11903, 318],
  {
    10099: (t, e, n) => {
      var i,
        o = n(85425),
        r = n(63350),
        a = window.__CORE__,
        u = "No_Variant_Unique_Id";
      !(function (t) {
        ((t[(t.IDLE = 0)] = "IDLE"),
          (t[(t.LOAD = 1)] = "LOAD"),
          (t[(t.READY = 2)] = "READY"));
      })(i || (i = {}));
      var c = n(41497),
        s = n(12743);
      function l(t) {
        return (
          (l =
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
          l(t)
        );
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, f(i.key), i));
        }
      }
      function f(t) {
        var e = (function (t, e) {
          if ("object" != l(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != l(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == l(e) ? e : e + "";
      }
      function d(t, e, n) {
        return (
          (e = m(e)),
          (function (t, e) {
            if (e && ("object" == l(e) || "function" == typeof e)) return e;
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
            v()
              ? Reflect.construct(e, n || [], m(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function v() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (v = function () {
          return !!t;
        })();
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
      function p(t, e) {
        return (
          (p = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          p(t, e)
        );
      }
      var y = {
          where: function (t) {
            return ["Show" === t.type];
          },
          to: "SHOW",
        },
        g = {
          where: function (t) {
            return ["Error" === t.type];
          },
          to: "CRASHED",
          error: !0,
        },
        b = {
          IDLE: [
            {
              where: function (t) {
                return ["Setup" === t.type];
              },
              to: "SETUP",
            },
          ],
          SETUP: [
            {
              where: function (t) {
                return ["SetupComplete" === t.type];
              },
              to: "SETUP_COMPLETED",
            },
            g,
          ],
          SETUP_COMPLETED: [
            {
              where: function (t) {
                return ["Attach" === t.type];
              },
              to: "ATTACH",
            },
            g,
          ],
          ATTACH: [
            {
              where: function (t) {
                return ["AttachComplete" === t.type];
              },
              to: "ATTACH_COMPLETED",
            },
            g,
          ],
          ATTACH_COMPLETED: [y],
          SHOW: [
            {
              where: function (t) {
                return ["Close" === t.type];
              },
              to: "CLOSE",
            },
          ],
          CLOSE: [y],
        },
        w = (function (t) {
          function e(t) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((n = d(this, e, ["IDLE", b])).errorState = null),
              (n.onSetup = function (t) {
                try {
                  var e = t.core;
                  (n.owner.doSetup(e),
                    n.nextTick(function () {
                      return n.dispatch({ type: "SetupComplete" });
                    }));
                } catch (t) {
                  n.nextTick(function () {
                    return n.dispatch(new s.B(t.message, t));
                  });
                }
              }),
              (n.onAttachToWorkspace = function (t) {
                try {
                  (n.owner.doAttachToWorkspace(t.workspace),
                    n.nextTick(function () {
                      return n.dispatch({ type: "AttachComplete" });
                    }));
                } catch (t) {
                  n.nextTick(function () {
                    return n.dispatch(new s.B(t.message, t));
                  });
                }
              }),
              (n.onShow = function () {
                n.owner.doShow();
              }),
              (n.onClose = function () {
                n.owner.doClose();
              }),
              (n.owner = t),
              n.on("SETUP", n.onSetup),
              n.on("ATTACH", n.onAttachToWorkspace),
              n.on("SHOW", n.onShow),
              n.on("CLOSE", n.onClose),
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
                e && p(t, e));
            })(e, t),
            (n = e),
            (i = [
              {
                key: "goToSetup",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, i) {
                    e.dispatch({ type: "Setup", core: t }) ||
                    "SETUP" === e.state
                      ? (e.on("SETUP_COMPLETED", function () {
                          n();
                        }),
                        e.on("CRASHED", function (t) {
                          ((e.errorState = t), i(e.errorState));
                        }))
                      : "CRASHED" === e.state
                        ? i(e.errorState)
                        : n();
                  });
                },
              },
              {
                key: "goToAttach",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, i) {
                    e.dispatch({ type: "Attach", workspace: t }) ||
                    "ATTACH" === e.state
                      ? (e.on("ATTACH_COMPLETED", function () {
                          n();
                        }),
                        e.on("CRASHED", function (t) {
                          ((e.errorState = t), i(e.errorState));
                        }))
                      : "CRASHED" === e.state
                        ? i(e.errorState)
                        : n();
                  });
                },
              },
              {
                key: "goToShow",
                value: function () {
                  var t = this;
                  return new Promise(function (e, n) {
                    t.dispatch({ type: "Show" }) || "SHOW" === t.state
                      ? e()
                      : n("Cannot show. Wrong state [".concat(t.state, "]"));
                  });
                },
              },
              {
                key: "goToClose",
                value: function () {
                  var t = this;
                  return new Promise(function (e, n) {
                    t.dispatch({ type: "Close" }) || "CLOSE" === t.state
                      ? e()
                      : n("Cannot show. Wrong state [".concat(t.state, "]"));
                  });
                },
              },
              {
                key: "nextTick",
                value: function (t) {
                  setTimeout(function () {
                    t();
                  }, 1);
                },
              },
            ]),
            i && h(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(c.Z),
        S = n(10311);
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
      function k(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function C(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, A(i.key), i));
        }
      }
      function P(t, e, n) {
        return (
          e && C(t.prototype, e),
          n && C(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function A(t) {
        var e = (function (t, e) {
          if ("object" != E(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != E(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == E(e) ? e : e + "";
      }
      var T = "mousedown",
        x = "mousemove",
        M = "mouseup",
        O = "mouseenter",
        I = "mouseleave",
        L = "touchstart",
        D = "touchmove",
        j = "touchend",
        _ = function (t) {
          setTimeout(function () {
            t();
          }, 0);
        },
        N = (function () {
          return P(
            function t() {
              var e = this;
              (k(this, t),
                (this.panEventArgs = { deltaX: 0, deltaY: 0 }),
                (this.zoomEventArgs = { delta: 0, x: 0, y: 0 }),
                (this.onContextMenu = function (t) {
                  e.stopBubble(t);
                }),
                (this.onMouseEvent = function () {
                  e.workspace.focus();
                }),
                (this.onMouseWheel = function (t) {
                  ((e.zoomEventArgs.delta = t.deltaY > 0 ? 10 : -10),
                    (e.zoomEventArgs.x = t.clientX),
                    (e.zoomEventArgs.y = t.clientY),
                    _(function () {
                      return e.emit("zoom", e.zoomEventArgs);
                    }),
                    e.stopBubble(t));
                }),
                (this.onTouchStart = function (t) {
                  (2 === t.touches.length &&
                    (e.workspace.addEventListener(D, e.onTouchMove),
                    e.workspace.addEventListener(j, e.onTouchEnd),
                    e.onGestureStart(
                      t.touches[0].clientX,
                      t.touches[0].clientY,
                      t.touches[1].clientX,
                      t.touches[1].clientY,
                    )),
                    e.stopBubble(t));
                }),
                (this.onTouchEnd = function (t) {
                  (1 === t.touches.length &&
                    (e.workspace.removeEventListener(D, e.onTouchMove),
                    e.workspace.removeEventListener(j, e.onTouchEnd),
                    e.onGestureEnd(t.touches[0].clientX, t.touches[0].clientY)),
                    e.stopBubble(t));
                }),
                (this.onTouchMove = function (t) {
                  if (2 === t.touches.length) {
                    var n = t.touches[0],
                      i = t.touches[1];
                    e.onGesture(n.clientX, n.clientY, i.clientX, i.clientY);
                  }
                  e.stopBubble(t);
                }),
                (this.inputGesture = {
                  count: 0,
                  position1: { x: 0, y: 0 },
                  position2: { x: 0, y: 0 },
                  centerPoint: { x: 0, y: 0 },
                  startDistance: 0,
                  currentPercent: 0,
                }),
                (this.ee = window.__CORE__.createEventEmmiterInstance()),
                (this.userPanInteract = new R()),
                this.userPanInteract.on("panEnter", function () {
                  return e.emit("panEnter");
                }),
                this.userPanInteract.on("panLeave", function () {
                  return e.emit("panLeave");
                }),
                this.userPanInteract.on("panMove", function (t) {
                  return e.emit("panMove", t);
                }),
                (this.userSelectInteract = new B()),
                this.userSelectInteract.on("select", function (t) {
                  return e.emit("select", t);
                }));
            },
            [
              {
                key: "once",
                value: function (t, e) {
                  return this.ee.once(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  return this.ee.on(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  return this.ee.off(t, e);
                },
              },
              {
                key: "eventNames",
                value: function () {
                  return this.ee.eventNames();
                },
              },
              {
                key: "emit",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                  return this.ee.emit(t, e);
                },
              },
              {
                key: "attachToWorkspace",
                value: function (t) {
                  ((this.workspace = t),
                    this.initEvents(t),
                    this.userPanInteract.attachToWorkspace(t),
                    this.userSelectInteract.attachToWorkspace(t));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.workspace &&
                    (this.releaseEvents(this.workspace),
                    this.userPanInteract.destroy(),
                    this.userSelectInteract.destroy(),
                    (this.workspace = null));
                },
              },
              {
                key: "stopBubble",
                value: function (t) {
                  (t.preventDefault(), t.stopPropagation());
                },
              },
              {
                key: "initEvents",
                value: function (t) {
                  (t.addEventListener("contextmenu", this.onContextMenu),
                    t.addEventListener(O, this.onMouseEvent),
                    t.addEventListener("wheel", this.onMouseWheel),
                    t.addEventListener("mousewheel", this.onMouseWheel),
                    t.addEventListener(L, this.onTouchStart));
                },
              },
              {
                key: "releaseEvents",
                value: function (t) {
                  (t.removeEventListener("contextmenu", this.onContextMenu),
                    t.removeEventListener(O, this.onMouseEvent),
                    t.removeEventListener("wheel", this.onMouseWheel),
                    t.removeEventListener("mousewheel", this.onMouseWheel),
                    t.removeEventListener(L, this.onTouchStart));
                },
              },
              {
                key: "updateGestureStartPoint",
                value: function (t, e, n, i) {
                  ((this.inputGesture.position1.x = t),
                    (this.inputGesture.position1.y = e),
                    (this.inputGesture.position2.x = n),
                    (this.inputGesture.position2.y = i));
                  var o = n - t,
                    r = i - e;
                  ((this.inputGesture.startDistance = Math.sqrt(o * o + r * r)),
                    (this.inputGesture.currentPercent = 100),
                    (this.inputGesture.centerPoint.x =
                      t > n ? n + (t - n) / 2 : t + (n - t) / 2),
                    (this.inputGesture.centerPoint.y =
                      e > i ? i + (e - i) / 2 : e + (i - e) / 2));
                },
              },
              {
                key: "onGestureStart",
                value: function (t, e, n, i) {
                  this.updateGestureStartPoint(t, e, n, i);
                },
              },
              {
                key: "onGesture",
                value: function (t, e, n, i) {
                  var o = this;
                  if (2 == this.inputGesture.count++) {
                    this.inputGesture.count = 0;
                    var r = t - this.inputGesture.position1.x,
                      a = e - this.inputGesture.position1.y,
                      u = n - this.inputGesture.position2.x,
                      c = i - this.inputGesture.position2.y;
                    if (r > 0 == u > 0 && a > 0 == c > 0)
                      return (
                        (this.panEventArgs.deltaX =
                          Math.abs(r) < Math.abs(u) ? r : u),
                        (this.panEventArgs.deltaY =
                          Math.abs(a) < Math.abs(c) ? a : c),
                        _(function () {
                          return o.emit("panMove", o.panEventArgs);
                        }),
                        void this.updateGestureStartPoint(t, e, n, i)
                      );
                    var s = n - t,
                      l = i - e,
                      h = Math.sqrt(s * s + l * l),
                      f = Math.round(
                        (this.inputGesture.startDistance / h) * 100,
                      );
                    ((this.zoomEventArgs.delta =
                      f - this.inputGesture.currentPercent),
                      (this.zoomEventArgs.x = this.inputGesture.centerPoint.x),
                      (this.zoomEventArgs.y = this.inputGesture.centerPoint.y),
                      _(function () {
                        return o.emit("zoom", o.zoomEventArgs);
                      }),
                      (this.inputGesture.currentPercent = f));
                  }
                },
              },
              {
                key: "onGestureEnd",
                value: function (t, e) {
                  this.updateGestureStartPoint(0, 0, 0, 0);
                },
              },
            ],
          );
        })(),
        B = (function () {
          return P(
            function t() {
              var e = this;
              (k(this, t),
                (this.initClientX = 0),
                (this.initClientY = 0),
                (this.onMouseDown = function (t) {
                  0 === t.button &&
                    ((e.initClientX = t.clientX),
                    (e.initClientY = t.clientY),
                    e.workspace.addEventListener(M, e.onMouseUp),
                    e.workspace.addEventListener(x, e.onMouseMove));
                }),
                (this.onMouseMove = function (n) {
                  (Math.abs(e.initClientX - n.clientX) < t.delta &&
                    Math.abs(e.initClientY - n.clientY) < t.delta) ||
                    (e.workspace.removeEventListener(M, e.onMouseUp),
                    e.workspace.removeEventListener(x, e.onMouseMove));
                }),
                (this.onMouseUp = function (t) {
                  (e.workspace.removeEventListener(M, e.onMouseUp),
                    e.workspace.removeEventListener(x, e.onMouseMove),
                    e.emitSelect(t.currentTarget, t));
                }),
                (this.onTouchStart = function (t) {
                  1 === t.touches.length
                    ? ((e.initClientX = t.touches[0].clientX),
                      (e.initClientY = t.touches[0].clientY),
                      e.workspace.addEventListener(D, e.onTouchMove),
                      e.workspace.addEventListener(j, e.onTouchEnd))
                    : 2 === t.touches.length &&
                      (e.workspace.removeEventListener(D, e.onTouchMove),
                      e.workspace.removeEventListener(j, e.onTouchEnd));
                }),
                (this.onTouchMove = function (n) {
                  (Math.abs(e.initClientX - n.touches[0].clientX) < t.delta &&
                    Math.abs(e.initClientY - n.touches[0].clientY) < t.delta) ||
                    (e.workspace.removeEventListener(D, e.onTouchMove),
                    e.workspace.removeEventListener(j, e.onTouchEnd));
                }),
                (this.onTouchEnd = function (t) {
                  e.emitSelect(t.currentTarget, t.changedTouches[0]);
                }),
                (this.ee = window.__CORE__.createEventEmmiterInstance()));
            },
            [
              {
                key: "once",
                value: function (t, e) {
                  return this.ee.once(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  return this.ee.on(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  return this.ee.off(t, e);
                },
              },
              {
                key: "eventNames",
                value: function () {
                  return this.ee.eventNames();
                },
              },
              {
                key: "emit",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                  return this.ee.emit(t, e);
                },
              },
              {
                key: "attachToWorkspace",
                value: function (t) {
                  ((this.workspace = t), this.initEvents(t));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.workspace &&
                    (this.releaseEvents(this.workspace),
                    (this.workspace = null));
                },
              },
              {
                key: "initEvents",
                value: function (t) {
                  t &&
                    (t.addEventListener(T, this.onMouseDown),
                    t.addEventListener(L, this.onTouchStart));
                },
              },
              {
                key: "releaseEvents",
                value: function (t) {
                  t &&
                    (t.removeEventListener(T, this.onMouseDown),
                    t.removeEventListener(L, this.onTouchStart));
                },
              },
              {
                key: "emitSelect",
                value: function (t, e) {
                  var n = this;
                  (t.removeEventListener(D, this.onTouchMove),
                    t.removeEventListener(j, this.onTouchEnd),
                    _(function () {
                      n.emit("select", { x: e.clientX, y: e.clientY });
                    }));
                },
              },
            ],
          );
        })();
      B.delta = 1;
      var R = (function () {
        return P(
          function t() {
            var e = this;
            (k(this, t),
              (this.isEnter = !1),
              (this.panEventArgs = { deltaX: 0, deltaY: 0, x: 0, y: 0 }),
              (this.onMouseDown = function (t) {
                (1 !== t.buttons && 2 !== t.buttons) ||
                  ((e.panEventArgs.deltaX = 0),
                  (e.panEventArgs.deltaY = 0),
                  (e.panEventArgs.x = t.clientX),
                  (e.panEventArgs.y = t.clientY),
                  e.workspace.addEventListener(M, e.onMouseUp),
                  e.workspace.addEventListener(I, e.onMouseLeave),
                  e.workspace.addEventListener(x, e.onMouseMove),
                  e.workspace.addEventListener(O, e.onMouseEnter));
              }),
              (this.onMouseEnter = function (t) {
                1 === t.buttons || 2 === t.buttons
                  ? ((e.panEventArgs.deltaX = 0),
                    (e.panEventArgs.deltaY = 0),
                    (e.panEventArgs.x = t.clientX),
                    (e.panEventArgs.y = t.clientY),
                    e.workspace.addEventListener(M, e.onMouseUp),
                    e.workspace.addEventListener(I, e.onMouseLeave),
                    e.workspace.addEventListener(x, e.onMouseMove))
                  : e.workspace.removeEventListener(O, e.onMouseEnter);
              }),
              (this.onMouseUp = function (t) {
                ((e.isEnter = !1),
                  _(function () {
                    return e.emit("panLeave");
                  }),
                  e.workspace.removeEventListener(M, e.onMouseUp),
                  e.workspace.removeEventListener(I, e.onMouseLeave),
                  e.workspace.removeEventListener(x, e.onMouseMove),
                  e.workspace.removeEventListener(O, e.onMouseEnter));
              }),
              (this.onMouseLeave = function (t) {
                ((e.isEnter = !1),
                  _(function () {
                    return e.emit("panLeave");
                  }),
                  e.workspace.removeEventListener(M, e.onMouseUp),
                  e.workspace.removeEventListener(I, e.onMouseLeave),
                  e.workspace.removeEventListener(x, e.onMouseMove));
              }),
              (this.onMouseMove = function (n) {
                if (
                  !(
                    Math.abs(e.panEventArgs.x - n.clientX) < t.delta &&
                    Math.abs(e.panEventArgs.y - n.clientY) < t.delta
                  )
                ) {
                  (e.isEnter ||
                    ((e.isEnter = !0),
                    _(function () {
                      return e.emit("panEnter");
                    })),
                    (e.panEventArgs.deltaX = n.clientX - e.panEventArgs.x),
                    (e.panEventArgs.deltaY = n.clientY - e.panEventArgs.y),
                    (e.panEventArgs.x = n.clientX),
                    (e.panEventArgs.y = n.clientY));
                  var i = Object.assign({}, e.panEventArgs);
                  _(function () {
                    return e.emit("panMove", i);
                  });
                }
              }),
              (this.onTouchStart = function (t) {
                1 === t.touches.length
                  ? ((e.panEventArgs.deltaX = 0),
                    (e.panEventArgs.deltaY = 0),
                    (e.panEventArgs.x = t.touches[0].clientX),
                    (e.panEventArgs.y = t.touches[0].clientY),
                    e.workspace.addEventListener(D, e.onTouchMove),
                    e.workspace.addEventListener(j, e.onTouchEnd))
                  : 2 === t.touches.length &&
                    (e.workspace.removeEventListener(D, e.onTouchMove),
                    e.workspace.removeEventListener(j, e.onTouchEnd));
              }),
              (this.onTouchMove = function (n) {
                if (
                  !(
                    Math.abs(e.panEventArgs.x - n.touches[0].clientX) <
                      t.delta &&
                    Math.abs(e.panEventArgs.y - n.touches[0].clientY) < t.delta
                  )
                ) {
                  (e.isEnter ||
                    ((e.isEnter = !0),
                    _(function () {
                      return e.emit("panEnter");
                    })),
                    (e.panEventArgs.deltaX =
                      n.touches[0].clientX - e.panEventArgs.x),
                    (e.panEventArgs.deltaY =
                      n.touches[0].clientY - e.panEventArgs.y),
                    (e.panEventArgs.x = n.touches[0].clientX),
                    (e.panEventArgs.y = n.touches[0].clientY));
                  var i = Object.assign({}, e.panEventArgs);
                  _(function () {
                    return e.emit("panMove", i);
                  });
                }
              }),
              (this.onTouchEnd = function (t) {
                1 === t.touches.length
                  ? ((e.panEventArgs.deltaX = 0),
                    (e.panEventArgs.deltaY = 0),
                    (e.panEventArgs.x = t.touches[0].clientX),
                    (e.panEventArgs.y = t.touches[0].clientY),
                    e.workspace.addEventListener(D, e.onTouchMove),
                    e.workspace.addEventListener(j, e.onTouchEnd))
                  : 0 === t.touches.length &&
                    ((e.isEnter = !1),
                    _(function () {
                      return e.emit("panLeave");
                    }),
                    e.workspace.removeEventListener(D, e.onTouchMove),
                    e.workspace.removeEventListener(j, e.onTouchEnd));
              }),
              (this.ee = window.__CORE__.createEventEmmiterInstance()));
          },
          [
            {
              key: "once",
              value: function (t, e) {
                return this.ee.once(t, e);
              },
            },
            {
              key: "on",
              value: function (t, e) {
                return this.ee.on(t, e);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                return this.ee.off(t, e);
              },
            },
            {
              key: "eventNames",
              value: function () {
                return this.ee.eventNames();
              },
            },
            {
              key: "emit",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                return this.ee.emit(t, e);
              },
            },
            {
              key: "attachToWorkspace",
              value: function (t) {
                ((this.workspace = t), this.initEvents(t));
              },
            },
            {
              key: "destroy",
              value: function () {
                this.workspace &&
                  (this.releaseEvents(this.workspace), (this.workspace = null));
              },
            },
            {
              key: "initEvents",
              value: function (t) {
                (t.addEventListener(T, this.onMouseDown),
                  t.addEventListener(L, this.onTouchStart));
              },
            },
            {
              key: "releaseEvents",
              value: function (t) {
                (t.removeEventListener(T, this.onMouseDown),
                  t.removeEventListener(L, this.onTouchStart));
              },
            },
          ],
        );
      })();
      function z(t) {
        return (
          (z =
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
          z(t)
        );
      }
      function G(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, H(i.key), i));
        }
      }
      function H(t) {
        var e = (function (t, e) {
          if ("object" != z(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != z(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == z(e) ? e : e + "";
      }
      R.delta = 1;
      var Y = (function () {
        return (
          (t = function t(e) {
            var n = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.staticStyles = ""),
              (this.currentVariant = u),
              (this.styleElement = document.createElement("style")),
              e.insertBefore(this.styleElement, e.firstChild),
              this.update(),
              a.bus.on("Variants:set", function (t) {
                return n.showVariant(t);
              }));
          }),
          (e = [
            {
              key: "addStyle",
              value: function (t) {
                ((this.staticStyles = this.staticStyles + " " + t),
                  this.update());
              },
            },
            {
              key: "update",
              value: function () {
                var t = this.staticStyles;
                ((t += " [data-variant-id] { visibility: hidden }"),
                  (t +=
                    " .activeMouse[data-variant-id] { pointer-events:none }"),
                  (t += ' [data-variant-id="'.concat(
                    this.currentVariant,
                    '"] { visibility: visible }',
                  )),
                  (t += ' .activeMouse[data-variant-id="'.concat(
                    this.currentVariant,
                    '"] { pointer-events:all }',
                  )),
                  (this.styleElement.innerHTML = t));
              },
            },
            {
              key: "showVariant",
              value: function (t) {
                ((this.currentVariant = t), this.update());
              },
            },
          ]) && G(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function V(t) {
        return (
          (V =
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
          V(t)
        );
      }
      function F(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, W(i.key), i));
        }
      }
      function W(t) {
        var e = (function (t, e) {
          if ("object" != V(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != V(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == V(e) ? e : e + "";
      }
      var U = (function () {
        return (
          (t = function t(e, n, i, o) {
            var r = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.toString = function () {
                return ""
                  .concat(Math.round(r.x1), " : ")
                  .concat(Math.round(r.y1), " - ")
                  .concat(Math.round(r.x2), " : ")
                  .concat(Math.round(r.y2), " / ")
                  .concat(Math.round(r.width), " x ")
                  .concat(Math.round(r.height));
              }),
              this.setup(e, n, i, o));
          }),
          (e = [
            {
              key: "x1",
              get: function () {
                return this.left;
              },
            },
            {
              key: "y1",
              get: function () {
                return this.bottom;
              },
            },
            {
              key: "x2",
              get: function () {
                return this.right;
              },
            },
            {
              key: "y2",
              get: function () {
                return this.top;
              },
            },
            {
              key: "width",
              get: function () {
                return this.right - this.left;
              },
            },
            {
              key: "height",
              get: function () {
                return this.top - this.bottom;
              },
            },
            {
              key: "location1",
              get: function () {
                return { x: this.left, y: this.bottom };
              },
            },
            {
              key: "location2",
              get: function () {
                return { x: this.right, y: this.top };
              },
            },
            {
              key: "normalize",
              value: function () {
                this.setup(this.left, this.bottom, this.right, this.top);
              },
            },
            {
              key: "setup",
              value: function (t, e, n, i) {
                ((this.left = Math.min(t, n)),
                  (this.bottom = Math.min(e, i)),
                  (this.right = Math.max(t, n)),
                  (this.top = Math.max(e, i)));
              },
            },
          ]) && F(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function X(t, e) {
        return (e.normalize(), K(t.location1, e) && K(t.location2, e));
      }
      function K(t, e) {
        return t.x >= e.x1 && t.y >= e.y1 && t.x <= e.x2 && t.y <= e.y2;
      }
      function Z(t) {
        return (
          (Z =
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
          Z(t)
        );
      }
      function q(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Q(i.key), i));
        }
      }
      function Q(t) {
        var e = (function (t, e) {
          if ("object" != Z(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Z(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Z(e) ? e : e + "";
      }
      var $ = (function () {
        return (
          (t = function t(e) {
            var n = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.size = { width: 0, height: 0 }),
              (this.displayed = !1),
              (this.onWindowResize = function () {
                var t = n.size.width,
                  e = n.size.height;
                if (
                  0 === n.workspace.clientHeight ||
                  0 === n.workspace.clientWidth
                )
                  ((n.displayed = !1), n.emit("hidden"));
                else {
                  if (
                    ((n.size.width = n.workspace.clientWidth),
                    (n.size.height = n.workspace.clientHeight),
                    !n.displayed &&
                      ((n.displayed = !0),
                      n.emit("shown"),
                      e === n.size.height && t === n.size.width))
                  )
                    return;
                  0 !== t && n.emit("didSizeChange", n.size.width / t);
                }
              }),
              (this.ee = window.__CORE__.createEventEmmiterInstance()),
              (this.workspace = e),
              this.initEvents(e),
              (this.workspace.clientHeight > 0 ||
                this.workspace.clientWidth > 0) &&
                ((this.size.height = this.workspace.clientHeight),
                (this.size.width = this.workspace.clientWidth),
                (this.displayed = !0)));
          }),
          (e = [
            {
              key: "once",
              value: function (t, e) {
                return this.ee.once(t, e);
              },
            },
            {
              key: "on",
              value: function (t, e) {
                return this.ee.on(t, e);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                return this.ee.off(t, e);
              },
            },
            {
              key: "eventNames",
              value: function () {
                return this.ee.eventNames();
              },
            },
            {
              key: "emit",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                return this.ee.emit(t, e);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.workspace &&
                  (this.releaseEvents(this.workspace), (this.workspace = null));
              },
            },
            {
              key: "initEvents",
              value: function (t) {
                t && window.addEventListener("resize", this.onWindowResize);
              },
            },
            {
              key: "releaseEvents",
              value: function (t) {
                t && window.removeEventListener("resize", this.onWindowResize);
              },
            },
          ]),
          e && q(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function J(t, e, n) {
        return (
          (e = et(e)),
          (function (t, e) {
            if (e && ("object" == it(e) || "function" == typeof e)) return e;
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
            tt()
              ? Reflect.construct(e, n || [], et(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function tt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (tt = function () {
          return !!t;
        })();
      }
      function et(t) {
        return (
          (et = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          et(t)
        );
      }
      function nt(t, e) {
        return (
          (nt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          nt(t, e)
        );
      }
      function it(t) {
        return (
          (it =
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
          it(t)
        );
      }
      function ot(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function rt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, ut(i.key), i));
        }
      }
      function at(t, e, n) {
        return (
          e && rt(t.prototype, e),
          n && rt(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function ut(t) {
        var e = (function (t, e) {
          if ("object" != it(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != it(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == it(e) ? e : e + "";
      }
      function ct(t, e) {
        return "EMPTY" === t
          ? new lt()
          : "ERROR" === t
            ? new ht(e())
            : new ft(e());
      }
      var st = function (t, e) {
          a.bus.emit(t, e);
        },
        lt = (function () {
          return at(
            function t() {
              (ot(this, t),
                (this.errorState = null),
                (this.state = { zoom: 0, top: 0, left: 0 }),
                (this.useAnimatedZoomToFit = !1));
            },
            [
              {
                key: "type",
                get: function () {
                  return "EMPTY";
                },
              },
              {
                key: "documentId",
                get: function () {
                  return "";
                },
              },
              {
                key: "uniqueId",
                get: function () {
                  return "";
                },
              },
              {
                key: "channelId",
                get: function () {
                  return 0;
                },
              },
              {
                key: "render",
                value: function () {
                  return Promise.resolve();
                },
              },
              { key: "zoom", value: function () {} },
              {
                key: "zoomToFit",
                value: function () {
                  return Promise.resolve();
                },
              },
              { key: "move", value: function () {} },
              { key: "destroy", value: function () {} },
            ],
          );
        })(),
        ht = (function (t) {
          function e(t) {
            var n;
            return (
              ot(this, e),
              (n = J(this, e)),
              setTimeout(function () {
                return st("SchCompareEngine:didDocumentAttachError", {
                  error: t.errorState,
                  documentId: t.documentId,
                });
              }, 0),
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
                e && nt(t, e));
            })(e, t),
            at(e)
          );
        })(lt),
        ft = (function () {
          return at(
            function t(e) {
              var n = this;
              (ot(this, t),
                (this.position = { x: 0, y: 0 }),
                (this.originSize = { width: 0, height: 0 }),
                (this.currentSize = { width: 0, height: 0 }),
                (this.zoomRelativePoint = { x: 0, y: 0 }),
                (this.scale = 100),
                (this.fitToZoomNeed = !1),
                (this.logger = a.createLogger("SchDocumentRenderer")),
                (this.maskPath = null),
                (this.selectMask = null),
                (this.selectBound = null),
                (this.errorState = null),
                (this.useAnimatedZoomToFit = !1),
                (this.onDrawSelection = function (t) {
                  (n.logger.LogDebug("Draw selection"),
                    console.log("Renderer:onDrawSelection", t.items));
                  var e,
                    i = 0,
                    o = 0,
                    r = 0,
                    a = 0;
                  if (
                    (t.items.forEach(function (t) {
                      var u = null == t ? void 0 : t.item,
                        c = null == t ? void 0 : t.connectivity;
                      "NotChanged" !== u.ModificationKind &&
                        (null == u ? void 0 : u.subParts) &&
                        u.subParts.forEach(function (t) {
                          (c && (t.Id || t.ObjectHandle) !== c.id) ||
                            n.outlineItemByModificationKind(t);
                        });
                      var s = n.selectionService.getActiveObjectsForItem(u);
                      (console.log(
                        "Renderer:onDrawSelection resolved active objects",
                        s,
                      ),
                        s.forEach(function (t) {
                          t && n.drawSelection(t);
                        }),
                        (e =
                          ("Net" === u.type && !c) || "Component" === u.type
                            ? u
                            : "Removed" !== c.modificationKind
                              ? c
                              : c.owner),
                        n.selectionService
                          .getActiveObjectsForItem(e)
                          .forEach(function (t) {
                            t &&
                              t.bounds &&
                              t.bounds.forEach(function (t) {
                                ((o = o ? Math.min(o, t.x) : t.x),
                                  (i = i ? Math.min(i, t.y) : t.y),
                                  (r = r
                                    ? Math.max(r, t.x + t.width)
                                    : t.x + t.width),
                                  (a = a
                                    ? Math.max(a, t.y + t.height)
                                    : t.y + t.height));
                              });
                          }));
                    }),
                    t.fit && r - o && a - i)
                  ) {
                    var u = { x: o, y: i, width: r - o, height: a - i },
                      c =
                        Math.max(u.width, u.height) < 200
                          ? { Component: 0.2, Net: 0.5, Pin: 0.03 }[
                              null == e ? void 0 : e.type
                            ]
                          : 0.85;
                    (console.log("Zoom:", e, c, u), n.zoomToFit(u));
                  }
                }),
                (this.drawHighlight = function (t) {
                  var e = t.localName;
                  if ("rect" === e)
                    (t.setAttribute("stroke-width", "2px"),
                      t.setAttribute("stroke", "#868BFF"));
                  else if ("line" === e || "polyline" === e) {
                    var i = "stroke-width",
                      o = window.getComputedStyle(t)[i],
                      r = 1;
                    (o.match(/^\-?\d+(\.?\d*)px$/) &&
                      (r = parseFloat(o.substring(0, o.length - 2))),
                      t.setAttribute(i, "".concat(r + 2, "px")));
                  }
                  n.highlightGroup.appendChild(t);
                }),
                (this.clearHighlight = function () {
                  for (; n.highlightGroup.firstChild; )
                    n.highlightGroup.removeChild(n.highlightGroup.firstChild);
                }),
                this.logger.LogDebug("Create for " + e.documentId),
                (this.id = e.documentId),
                (this.unique = e.uniqueId),
                (this.channel = e.channelId),
                (this.workspace = e.workspace),
                (this.svg = e.workspace.appendChild(e.node)),
                (this.svg.style.opacity = "0"),
                (this.scene = this.svg.getElementById("scene")),
                (this.maskId = "".concat(this.scene.id, "_selection_mask")),
                (this.selectionService = e.selectionService),
                (this.originSize.width = this.svg.width.baseVal.value),
                (this.originSize.height = this.svg.height.baseVal.value),
                this.svg.setAttribute(
                  "viewBox",
                  "0 0 "
                    .concat(this.svg.width.baseVal.value, " ")
                    .concat(this.svg.height.baseVal.value),
                ),
                this.svg.setAttribute("width", "100%"),
                this.svg.setAttribute("height", "100%"),
                (this.spaceVisibilityService =
                  this.createSpaceVisibilityService(this.workspace)),
                (this.selectionMaskGroup = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.selectionMaskGroup.id = this.scene.id + "SelectionMask"),
                this.scene.appendChild(this.selectionMaskGroup),
                (this.selectionGroup = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.selectionGroup.id = this.scene.id + "Selection"),
                this.scene.appendChild(this.selectionGroup),
                (this.highlightGroup = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.highlightGroup.id = this.scene.id + "Highlight"),
                this.scene.appendChild(this.highlightGroup),
                this.createMask(),
                (this.overlay = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.overlay.id = this.scene.id + "Overlay"),
                this.scene.appendChild(this.overlay));
              var i = new CustomEvent("didTransformChange", {
                detail: this.scene.transform,
              });
              ((this.overlay.didTransformChangeEvent = i),
                (this.onTransformUpdate = function () {
                  return n.overlay.dispatchEvent(i);
                }),
                (this.styleManager = new Y(this.svg)),
                setTimeout(function (t) {
                  return st("SchCompareEngine:didDocumentAttach", {
                    workspace: n.workspace,
                    svg: n.svg,
                    styleManager: n.styleManager,
                    overlay: n.overlay,
                    uniqueId: n.uniqueId,
                    channelId: n.channelId,
                    documentId: n.documentId,
                    documentWidth: n.originSize.width,
                    documentHeight: n.originSize.height,
                  });
                }, 0),
                (this.clearSelection = this.clearSelection.bind(this)),
                this.doSetupChannel(e.metadata.LogicalChanges),
                a.bus.on(
                  "SchCompareEngine:clearHighlight",
                  this.clearHighlight,
                ),
                a.bus.on("SchCompareEngine:drawHighlight", this.drawHighlight),
                a.bus.on(
                  "SchCompareEngine:clearSelection",
                  this.clearSelection,
                ),
                a.bus.on(
                  "SchCompareEngine:drawSelection",
                  this.onDrawSelection,
                ));
            },
            [
              {
                key: "type",
                get: function () {
                  return "DEFAULT";
                },
              },
              {
                key: "documentId",
                get: function () {
                  return this.id;
                },
              },
              {
                key: "uniqueId",
                get: function () {
                  return this.unique;
                },
              },
              {
                key: "channelId",
                get: function () {
                  return this.channel;
                },
              },
              {
                key: "state",
                get: function () {
                  return {
                    zoom: this.scale,
                    top: this.position.y,
                    left: this.position.x,
                  };
                },
                set: function (t) {
                  ((this.scale = t.zoom),
                    (this.position.x = t.left),
                    (this.position.y = t.top),
                    this.updateTransform());
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  return new Promise(function (e) {
                    ((t.svg.style.opacity = "1"),
                      t.spaceVisibilityService.onWindowResize());
                    var n = t.selectionService.setupDocument(t);
                    (n && t.scene.insertBefore(n, t.overlay), e());
                  });
                },
              },
              {
                key: "zoom",
                value: function (t, e, n) {
                  this.setZoomRelativePoint(t, e);
                  var i = (this.scale * (100 - n)) / 100;
                  (this.doZoom(i),
                    st("SchCompareEngine:documentZoom", this.documentId));
                },
              },
              {
                key: "zoomToFit",
                value: function (t, e) {
                  var n = this;
                  return new Promise(function (i) {
                    new Promise(function (i) {
                      t
                        ? i(Object.assign({}, t))
                        : (((e = null != e ? e : [0, 0, 0, 0])[3] -=
                            window.__CORE__.settings.zoomOffsets[3]),
                          n.spaceVisibilityService.displayed
                            ? i({
                                x: 0,
                                y: 0,
                                width: n.scene.getBBox().width,
                                height: n.scene.getBBox().height,
                              })
                            : (n.fitToZoomNeed = !0));
                    })
                      .then(function (t) {
                        return n.zoomRectangleToFit(
                          t.x,
                          t.y,
                          t.width,
                          t.height,
                          e,
                        );
                      })
                      .then(function () {
                        (n.updateTransform(), i());
                      })
                      .catch(function (t) {
                        (n.logger.LogError(t.message), i());
                      });
                  });
                },
              },
              {
                key: "move",
                value: function (t, e) {
                  var n = Math.min(
                    this.spaceVisibilityService.size.width /
                      this.scene.getBBox().width,
                    this.spaceVisibilityService.size.height /
                      this.scene.getBBox().height,
                  );
                  n &&
                    ((this.position.x += t / n),
                    (this.position.y += e / n),
                    this.updateTransform(),
                    st("SchCompareEngine:documentMove", this.documentId));
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this.logger.LogDebug("Destroy for " + this.id),
                    a.bus.off(
                      "SchCompareEngine:clearHighlight",
                      this.clearHighlight,
                    ),
                    a.bus.off(
                      "SchCompareEngine:drawHighlight",
                      this.drawHighlight,
                    ),
                    a.bus.off(
                      "SchCompareEngine:clearSelection",
                      this.clearSelection,
                    ),
                    a.bus.off(
                      "SchCompareEngine:drawSelection",
                      this.onDrawSelection,
                    ),
                    st("SchCompareEngine:didDocumentDettach", null));
                  try {
                    (this.spaceVisibilityService.destroy(),
                      this.workspace &&
                        (this.workspace.removeChild(this.svg),
                        (this.workspace = null)));
                  } catch (t) {
                    this.logger.LogError(
                      "Destroy renderer error. ".concat(t.message),
                    );
                  }
                },
              },
              {
                key: "outlineItemByModificationKind",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10;
                  if (
                    (null == t ? void 0 : t.ModificationKind) &&
                    "Pin" === (null == t ? void 0 : t.ObjectKind)
                  ) {
                    var n = { Added: "#4caf50", Removed: "#f44336" }[
                      t.ModificationKind
                    ];
                    if (n) {
                      var i = 0,
                        o = 0,
                        r = 0,
                        a = 0;
                      if (
                        (this.selectionService
                          .getActiveObjectsForSubItem(t)
                          .forEach(function (t) {
                            t.bounds &&
                              t.bounds.forEach(function (t) {
                                ((i = i ? Math.min(i, t.x) : t.x),
                                  (o = o ? Math.min(o, t.y) : t.y),
                                  (r = r
                                    ? Math.max(r, t.x + t.width)
                                    : t.x + t.width),
                                  (a = a
                                    ? Math.max(a, t.y + t.height)
                                    : t.y + t.height));
                              });
                          }),
                        i && o && r && a)
                      ) {
                        var u = Math.min(i, r) - e,
                          c = Math.max(i, r) - Math.min(i, r) + 2 * e,
                          s = Math.min(o, a) - e,
                          l = Math.max(o, a) - Math.min(o, a) + 2 * e,
                          h = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "rect",
                          );
                        (h.setAttribute("x", String(u)),
                          h.setAttribute("y", String(s)),
                          h.setAttribute("width", String(c)),
                          h.setAttribute("height", String(l)),
                          h.setAttribute("stroke", n),
                          h.setAttribute("stroke-opacity", "0.8"),
                          h.setAttribute("stroke-dasharray", "3,3"),
                          this.selectionGroup.appendChild(h));
                      }
                    }
                  }
                },
              },
              {
                key: "createMask",
                value: function () {
                  var t = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "defs",
                    ),
                    e = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "mask",
                    );
                  (e.setAttribute("id", this.maskId),
                    e.setAttribute("maskContentUnits", "userSpaceOnUse"),
                    t.appendChild(e));
                  var n = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                  );
                  (n.setAttribute("width", "".concat(this.originSize.width)),
                    n.setAttribute("height", "".concat(this.originSize.height)),
                    n.setAttribute("fill", "white"),
                    n.setAttribute("opacity", "0.3"),
                    e.appendChild(n),
                    (this.maskPath = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path",
                    )),
                    this.maskPath.setAttribute("fill", "black"),
                    e.appendChild(this.maskPath),
                    this.scene.insertBefore(t, this.scene.firstChild),
                    (this.selectMask = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "rect",
                    )),
                    this.selectMask.setAttribute(
                      "width",
                      "".concat(this.originSize.width),
                    ),
                    this.selectMask.setAttribute(
                      "height",
                      "".concat(this.originSize.height),
                    ),
                    this.selectMask.setAttribute(
                      "mask",
                      "url(#".concat(this.maskId, ")"),
                    ),
                    this.selectMask.setAttribute("fill", "grey"),
                    (this.selectMask.style.visibility = "hidden"),
                    this.selectionMaskGroup.appendChild(this.selectMask),
                    (this.selectBound = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path",
                    )),
                    this.selectBound.setAttribute("stroke", "blue"),
                    this.selectBound.setAttribute("stroke-width", "3px"),
                    this.selectBound.setAttribute(
                      "mask",
                      "url(#".concat(this.maskId, ")"),
                    ),
                    (this.selectBound.style.visibility = "hidden"),
                    this.selectionMaskGroup.appendChild(this.selectBound));
                },
              },
              {
                key: "drawSelection",
                value: function (t) {
                  if (this.maskPath) {
                    if (t && t.bounds) {
                      var e = t.bounds
                          .map(function (t) {
                            return "M"
                              .concat(t.x, " ")
                              .concat(t.y, " H")
                              .concat(t.x + t.width, " V")
                              .concat(t.y + t.height, " H")
                              .concat(t.x, " Z");
                          })
                          .join(" "),
                        n = this.maskPath.getAttribute("d");
                      (n
                        ? this.maskPath.setAttribute("d", n + " " + e)
                        : this.maskPath.setAttribute("d", e),
                        this.selectBound &&
                          (this.selectBound.setAttribute(
                            "d",
                            this.maskPath.getAttribute("d"),
                          ),
                          (this.selectBound.style.visibility = "visible")),
                        this.selectMask &&
                          (this.selectMask.style.visibility = "visible"));
                    }
                    if (t && t.element) {
                      var i = t.element,
                        o = i.localName;
                      if ("line" === o || "polyline" === o) {
                        var r = "stroke-width",
                          a = window.getComputedStyle(i)[r],
                          u = 1;
                        (a.match(/^\-?\d+(\.?\d*)px$/) &&
                          (u = parseFloat(a.substring(0, a.length - 2))),
                          i.setAttribute(r, "".concat(u + 2, "px")));
                      }
                      this.selectionGroup.appendChild(i);
                    }
                  }
                },
              },
              {
                key: "clearSelection",
                value: function (t) {
                  if (this.maskPath)
                    for (
                      this.maskPath.setAttribute("d", ""),
                        t.update ||
                          (this.selectBound &&
                            (this.selectBound.style.visibility = "hidden"),
                          this.selectMask &&
                            (this.selectMask.style.visibility = "hidden"));
                      this.selectionGroup.firstChild;
                    )
                      this.selectionGroup.removeChild(
                        this.selectionGroup.firstChild,
                      );
                },
              },
              {
                key: "createSpaceVisibilityService",
                value: function (t) {
                  var e = this,
                    n = new $(t);
                  return (
                    n.on("didSizeChange", function () {
                      ((e.currentSize.width = n.size.width),
                        (e.currentSize.height = n.size.height),
                        setTimeout(function () {
                          e.onTransformUpdate && e.onTransformUpdate();
                        }, 0));
                    }),
                    n.on("shown", function () {
                      (e.fitToZoomNeed &&
                        ((e.fitToZoomNeed = !1), e.zoomToFit(null)),
                        (e.currentSize.width = n.size.width),
                        (e.currentSize.height = n.size.height),
                        setTimeout(function () {
                          e.onTransformUpdate && e.onTransformUpdate();
                        }, 0));
                    }),
                    n.on("hidden", function () {}),
                    n.displayed &&
                      ((this.currentSize.width = n.size.width),
                      (this.currentSize.height = n.size.height)),
                    n
                  );
                },
              },
              {
                key: "updateTransform",
                value: function () {
                  var t = "matrix("
                    .concat(this.scale / 100, " 0 0 ")
                    .concat(this.scale / 100, " ")
                    .concat(this.position.x, " ")
                    .concat(this.position.y, ")");
                  isNaN(this.scale) ||
                  isNaN(this.position.x) ||
                  isNaN(this.position.y)
                    ? this.logger.LogError("Transform value IsNAN")
                    : (this.scene.setAttribute("transform", t),
                      this.onTransformUpdate && this.onTransformUpdate());
                },
              },
              {
                key: "setZoomRelativePoint",
                value: function (t, e) {
                  ((this.zoomRelativePoint.x = t),
                    (this.zoomRelativePoint.y = e));
                },
              },
              {
                key: "zoomRectangleToFit",
                value: function (t, e, n, i, o) {
                  var r = this;
                  return new Promise(function (a, u) {
                    var c = r.scene.getBBox().width,
                      s = r.scene.getBBox().height;
                    if (c && s && n && 0 !== n && i && 0 !== i) {
                      var l = new U(t, e, t + n, e + i),
                        h = (function (t, e, n, i) {
                          var o = window.__CORE__.settings.zoomPrecision,
                            r = window.__CORE__.settings.zoomMaxPrecision;
                          if (o == r) return i;
                          var a = (r - o) / r,
                            u = Math.round(a * t),
                            c = Math.round(a * e);
                          if (X(i, n) && n.width <= u && n.height <= c)
                            return n;
                          var s = u / 10,
                            l = c / 10;
                          return (
                            (i.top += l),
                            (i.bottom -= l),
                            (i.left -= s),
                            (i.right += s),
                            (function (t, e, n, i) {
                              var o = t.left / 2 + t.right / 2,
                                r = t.top / 2 + t.bottom / 2,
                                a = Math.abs(t.right - t.left),
                                u = Math.abs(t.bottom - t.top);
                              (a < n && (a = n), u < i && (u = i));
                              var c = new U(
                                o - a / 2,
                                r - u / 2,
                                o + a / 2,
                                r + u / 2,
                              );
                              return (
                                X(c, e) ||
                                  (c.left < e.left &&
                                    ((c.left = e.left),
                                    (c.right = c.left + a),
                                    c.right > e.right && (c.right = e.right)),
                                  c.right > e.right &&
                                    ((c.right = e.right),
                                    (c.left = c.right - a),
                                    c.left < e.left && (c.left = e.left)),
                                  c.bottom < e.bottom &&
                                    ((c.bottom = e.bottom),
                                    (c.top = c.bottom + u),
                                    c.top > e.top && (c.top = e.top)),
                                  c.top > e.top &&
                                    ((c.top = e.top),
                                    (c.bottom = c.top - u),
                                    c.bottom < e.bottom &&
                                      (c.bottom = e.bottom))),
                                c
                              );
                            })(i, new U(0, 0, t, e), u, c)
                          );
                        })(c, s, r.getVirtualRect(), l);
                      if (h) {
                        var f = {
                          lastX: r.position.x,
                          lastY: r.position.y,
                          lastScale: r.scale / 100,
                        };
                        ((o = (o = o && 4 === o.length ? o : [0, 0, 0, 0]).map(
                          function (t, e) {
                            return t + window.__CORE__.settings.zoomOffsets[e];
                          },
                        )),
                          Math.min(n / h.width, i / h.height) <
                            1 -
                              Math.max(
                                (o[1] + o[3]) /
                                  r.spaceVisibilityService.size.width,
                                (o[0] + o[2]) /
                                  r.spaceVisibilityService.size.height,
                              ) && (o = [0, 0, 0, 0]));
                        var d = o[1] + o[3],
                          v = o[0] + o[2],
                          m = r.spaceVisibilityService.size.width - d,
                          p = r.spaceVisibilityService.size.height - v,
                          y = Math.abs(Math.min(m / h.width, p / h.height)),
                          g = Math.min((m + d) / c, (p + v) / s);
                        r.scale = Math.round(100 * y) / g;
                        var b = window.__CORE__.settings.zoomCenter ? l : h,
                          w = (c * g - b.width * y - d) / 2,
                          S = (s * g - b.height * y - v) / 2;
                        ((r.position.x = (-b.left * y + w + o[1]) / g),
                          (r.position.y = (-b.bottom * y + S + o[0]) / g),
                          a(f));
                      }
                    }
                  });
                },
              },
              {
                key: "getVirtualRect",
                value: function () {
                  var t = this.scene.getBBox().width,
                    e = this.scene.getBBox().height,
                    n = this.spaceVisibilityService.size.width,
                    i = this.spaceVisibilityService.size.height,
                    o = Math.min(n / t, i / e),
                    r = (this.scale * o) / 100,
                    a = (n - t * Math.abs(o)) / 2,
                    u = (i - e * Math.abs(o)) / 2,
                    c = (-this.position.x * o - a) / r,
                    s = (-this.position.y * o - u) / r;
                  return new U(c, s, c + n / r, s + i / r);
                },
              },
              {
                key: "animate",
                value: function (t, e, n, i) {
                  var o = this;
                  return new Promise(function (r) {
                    if (
                      o.useAnimatedZoomToFit &&
                      i &&
                      Math.min(
                        o.spaceVisibilityService.size.width /
                          o.scene.getBBox().width,
                        o.spaceVisibilityService.size.height /
                          o.scene.getBBox().height,
                      )
                    ) {
                      var a = o.position.x,
                        u = o.position.y,
                        c = o.scale / 100,
                        s = "0.4s",
                        l = "animateTransformTranslateSchSvg",
                        h = "animateTransformScaleSchSvg",
                        f = document.getElementById(l);
                      (f ||
                        ((f = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "animateTransform",
                        )).setAttribute("id", l),
                        f.setAttribute("attributeName", "transform"),
                        f.setAttribute("type", "translate"),
                        f.setAttribute("dur", s),
                        o.scene.appendChild(f)),
                        f.setAttribute("from", "".concat(t, ",").concat(e)),
                        f.setAttribute("to", "".concat(a, ",").concat(u)));
                      var d = document.getElementById(h);
                      (d ||
                        ((d = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "animateTransform",
                        )).setAttribute("id", h),
                        d.setAttribute("attributeName", "transform"),
                        d.setAttribute("type", "scale"),
                        d.setAttribute("dur", s),
                        d.setAttribute("additive", "sum"),
                        o.scene.appendChild(d)),
                        d.setAttribute("from", "".concat(n)),
                        d.setAttribute("to", "".concat(c)),
                        f.beginElement &&
                          d.beginElement &&
                          (d.beginElement(),
                          f.beginElement(),
                          (d.onEnd = function () {
                            o.logger.LogDebug("Animation end");
                          })));
                    }
                    r();
                  });
                },
              },
              {
                key: "checkZoomRelativePoint",
                value: function () {
                  -1 === this.zoomRelativePoint.x &&
                    -1 === this.zoomRelativePoint.y &&
                    ((this.zoomRelativePoint.x =
                      this.spaceVisibilityService.size.width / 2),
                    (this.zoomRelativePoint.y =
                      this.spaceVisibilityService.size.height / 2));
                },
              },
              {
                key: "getRelativePoint",
                value: function (t, e, n) {
                  return t < e ? e : t > n ? n : t;
                },
              },
              {
                key: "doZoom",
                value: function (t) {
                  var e = this.scene.getScreenCTM();
                  if (e) {
                    this.checkZoomRelativePoint();
                    var n = (t - this.scale) / 100,
                      i = this.scene.getBBox().width * n,
                      o = this.scene.getBBox().height * n,
                      r = e.e,
                      a = this.scene.getBBox().width * e.a,
                      u = e.f,
                      c = this.scene.getBBox().height * e.a,
                      s = this.getRelativePoint(
                        this.zoomRelativePoint.x,
                        r,
                        r + a,
                      ),
                      l = this.getRelativePoint(
                        this.zoomRelativePoint.y,
                        u,
                        u + c,
                      );
                    ((this.position.x -= (i * (s - r)) / a),
                      (this.position.y -= (o * (l - u)) / c),
                      (this.scale = t),
                      this.updateTransform(),
                      this.setZoomRelativePoint(-1, -1));
                  }
                },
              },
              {
                key: "doSetupChannel",
                value: function (t) {
                  var e = this;
                  if (null == t ? void 0 : t.channels) {
                    var n = null == t ? void 0 : t.components;
                    n &&
                      n.forEach(function (t) {
                        if (t.schId && t.channel === e.channel) {
                          var n = t.designator;
                          if (n) {
                            var i = n.lastIndexOf("(");
                            i > 0 && (n = n.substring(0, i));
                          }
                          e.setChannelDesignator(t.designatorId, n);
                        }
                      });
                  }
                },
              },
              {
                key: "setChannelDesignator",
                value: function (t, e) {
                  var n,
                    i = 0,
                    o = 0,
                    r = this.svg.getElementById(t);
                  r &&
                    Array.from(r.children).forEach(function (t) {
                      if ("text" === t.nodeName) {
                        var r = t;
                        if (0 === o) {
                          var a = r.textLength.baseVal.value;
                          ((n = "(".concat(t.textContent, ")")),
                            (t.textContent = e),
                            (i = r.textLength.baseVal.value - a),
                            o++);
                        } else if (1 === o) {
                          t.textContent = n;
                          var u = "translate(".concat(i, ",", 0, ")");
                          return void t.setAttribute("transform", u);
                        }
                      }
                    });
                },
              },
            ],
          );
        })();
      function dt(t) {
        return (
          (dt =
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
          dt(t)
        );
      }
      function vt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, mt(i.key), i));
        }
      }
      function mt(t) {
        var e = (function (t, e) {
          if ("object" != dt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != dt(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == dt(e) ? e : e + "";
      }
      function pt(t, e, n) {
        return (
          (e = gt(e)),
          (function (t, e) {
            if (e && ("object" == dt(e) || "function" == typeof e)) return e;
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
            yt()
              ? Reflect.construct(e, n || [], gt(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function yt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (yt = function () {
          return !!t;
        })();
      }
      function gt(t) {
        return (
          (gt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          gt(t)
        );
      }
      function bt(t, e) {
        return (
          (bt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          bt(t, e)
        );
      }
      var wt = {
          where: function (t) {
            return ["Attach" === t.type];
          },
          to: "DOCUMENT_ATTACH",
        },
        St = {
          IDLE: [
            {
              where: function (t) {
                return ["Setup" === t.type];
              },
              to: "SETUP",
            },
          ],
          SETUP: [wt],
          CRASHED: [wt],
          DOCUMENT_ATTACH: [
            {
              where: function (t) {
                return ["Dettach" === t.type];
              },
              to: "DOCUMENT_DETTACH",
            },
            {
              where: function (t) {
                return ["Error" === t.type];
              },
              to: "CRASHED",
              error: !0,
            },
          ],
          DOCUMENT_DETTACH: [wt],
        },
        Et = (function (t) {
          function e(t) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((n = pt(this, e, ["IDLE", St])).onSetup = function (t) {
                n.owner.doAttachToWorkspace(t.workspace);
              }),
              (n.onAttach = function (t) {
                n.owner.doAttachDocument(t.document);
              }),
              (n.onDettach = function () {
                n.owner.doDettachDocument();
              }),
              n.on("SETUP", n.onSetup),
              n.on("DOCUMENT_ATTACH", n.onAttach),
              n.on("DOCUMENT_DETTACH", n.onDettach),
              (n.owner = t),
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
                e && bt(t, e));
            })(e, t),
            (n = e),
            (i = [
              {
                key: "setup",
                value: function (t) {
                  this.dispatch({ type: "Setup", workspace: t });
                },
              },
              {
                key: "attachDocument",
                value: function (t) {
                  this.dispatch({ type: "Attach", document: t });
                },
              },
              {
                key: "dettachDocument",
                value: function () {
                  this.dispatch({ type: "Dettach" });
                },
              },
            ]) && vt(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(c.Z),
        kt = function (t) {
          return (
            (0, S.pushScopeId)("data-v-437d618a"),
            (t = t()),
            (0, S.popScopeId)(),
            t
          );
        },
        Ct = { class: "no-differences__container" },
        Pt = kt(function () {
          return (0, S.createElementVNode)(
            "div",
            { class: "no-differences__header-overlay-fix" },
            null,
            -1,
          );
        }),
        At = { class: "no-differences__inner" },
        Tt = { class: "no-differences__wrapper" },
        xt = { class: "no-differences__icon" },
        Mt = kt(function () {
          return (0, S.createElementVNode)(
            "div",
            { class: "no-differences__headline" },
            " No component or connectivity differences detected. ",
            -1,
          );
        }),
        Ot = kt(function () {
          return (0, S.createElementVNode)(
            "div",
            { class: "no-differences__description" },
            " Changes that are purely graphical are not included. ",
            -1,
          );
        }),
        It = n(77337);
      const Lt = {
        name: "NoDifferences",
        components: { Icon: It._ },
        data: function () {
          return {};
        },
        computed: {},
        methods: {},
      };
      var Dt = n(46021);
      const jt = (0, Dt.Z)(Lt, [
        [
          "render",
          function (t, e, n, i, o, r) {
            var a = (0, S.resolveComponent)("Icon");
            return (
              (0, S.openBlock)(),
              (0, S.createElementBlock)("div", Ct, [
                Pt,
                (0, S.createElementVNode)("div", At, [
                  (0, S.createElementVNode)("div", Tt, [
                    (0, S.createElementVNode)("div", xt, [
                      (0, S.createVNode)(a, { name: "compare-design-16" }),
                    ]),
                    Mt,
                    Ot,
                  ]),
                ]),
              ])
            );
          },
        ],
        ["__scopeId", "data-v-437d618a"],
      ]);
      function _t(t) {
        return (
          (_t =
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
          _t(t)
        );
      }
      function Nt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Bt(i.key), i));
        }
      }
      function Bt(t) {
        var e = (function (t, e) {
          if ("object" != _t(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != _t(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == _t(e) ? e : e + "";
      }
      var Rt = (function () {
          return (
            (t = function t(e) {
              var n = this;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.metadata = null),
                (this.renderStates = new Map()),
                (this.emptyDocumentRenederer = ct("EMPTY", function () {
                  return null;
                })),
                (this.documentRenederer = this.emptyDocumentRenederer),
                (this.selectionService = e),
                (this.documentRenderState = new Et(this)),
                (this.userInteractionService = new N()),
                this.userInteractionService.on("zoom", function (t) {
                  n.documentRenederer.zoom(t.x, t.y, t.delta);
                }),
                this.userInteractionService.on("panMove", function (t) {
                  n.documentRenederer.move(t.deltaX, t.deltaY);
                }),
                this.userInteractionService.on("select", function (t) {
                  n.selectionService.selectByPoint(t);
                }),
                a.bus.on("SchCompareEngine:zoomToFit", function (t) {
                  return n.documentRenederer.zoomToFit(
                    t.rect,
                    t.changeScale,
                    t.margin,
                  );
                }));
            }),
            (e = [
              {
                key: "isNoDifferences",
                value: function () {
                  return (
                    !this.metadata.Nets.filter(function (t) {
                      return "NotChanged" !== t.ModificationKind;
                    }).length &&
                    !this.metadata.Documents.some(function (t) {
                      return !!t.Items.filter(function (t) {
                        return "NotChanged" !== t.ModificationKind;
                      }).length;
                    })
                  );
                },
              },
              {
                key: "doAttachToWorkspace",
                value: function (t) {
                  var e = document.createElement("div");
                  (e.setAttribute("id", "sch_document_viewer"),
                    e.setAttribute("oncontextmenu", "return false"));
                  var n = e.style;
                  ((n.width = "100%"),
                    (n.height = "100%"),
                    (n.position = "relative"),
                    (n.overflow = "hidden"),
                    (this.documentContainer = t.appendChild(e)),
                    this.isNoDifferences() && (0, S.createApp)(jt).mount(e),
                    this.userInteractionService.attachToWorkspace(
                      this.documentContainer,
                    ));
                },
              },
              {
                key: "doAttachDocument",
                value: function (t) {
                  var e = this;
                  if (!this.isNoDifferences())
                    try {
                      if (null !== t.errorState) throw t.errorState;
                      var n = t.renderData.documentElement.cloneNode(!0);
                      ((this.documentRenederer = ct("DEFAULT", function () {
                        return {
                          workspace: e.documentContainer,
                          node: n,
                          uniqueId: t.uniqueId,
                          channelId: t.channelId,
                          documentId: t.id,
                          selectionService: e.selectionService,
                          metadata: e.metadata,
                        };
                      })),
                        (this.documentRenederer.useAnimatedZoomToFit = !0));
                    } catch (e) {
                      this.documentRenederer = ct("ERROR", function () {
                        return { errorState: e, documentId: t.id };
                      });
                    }
                },
              },
              {
                key: "doDettachDocument",
                value: function () {
                  "EMPTY" !== this.documentRenederer.type &&
                    (this.saveState(),
                    this.documentRenederer.destroy(),
                    (this.documentRenederer = this.emptyDocumentRenederer));
                },
              },
              {
                key: "saveState",
                value: function () {
                  "DEFAULT" === this.documentRenederer.type &&
                    this.renderStates.set(
                      this.documentRenederer.uniqueId,
                      this.documentRenederer.state,
                    );
                },
              },
              {
                key: "attachTo",
                value: function (t) {
                  this.documentRenderState.setup(t);
                },
              },
              {
                key: "attach",
                value: function (t) {
                  (this.documentRenederer &&
                    t.uniqueId === this.documentRenederer.uniqueId) ||
                    (this.documentRenderState.dettachDocument(),
                    this.documentRenderState.attachDocument(t));
                },
              },
              {
                key: "setPosition",
                value: function (t) {
                  var e = this,
                    n = this.renderStates.get(t.id);
                  return n
                    ? new Promise(function (t) {
                        ((e.documentRenederer.state = n), t());
                      })
                    : this.documentRenederer.zoomToFit(null);
                },
              },
              {
                key: "setMetadata",
                value: function (t) {
                  this.metadata = t;
                },
              },
              {
                key: "render",
                value: function (t) {
                  return (this.attach(t), this.documentRenederer.render());
                },
              },
              {
                key: "reset",
                value: function () {
                  this.documentRenederer.zoomToFit(null);
                },
              },
            ]),
            e && Nt(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        zt = n(61204);
      function Gt(t) {
        return (
          (Gt =
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
          Gt(t)
        );
      }
      function Ht(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Yt(i.key), i));
        }
      }
      function Yt(t) {
        var e = (function (t, e) {
          if ("object" != Gt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Gt(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Gt(e) ? e : e + "";
      }
      var Vt = (function () {
        function t() {
          (!(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.x = 0),
            (this.y = 0),
            (this.width = 0),
            (this.height = 0));
        }
        return (
          (e = t),
          (n = [
            {
              key: "createSvgElement",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                  );
                return (
                  e.setAttribute("x", "".concat(this.x - t)),
                  e.setAttribute("y", "".concat(this.y - t)),
                  e.setAttribute("width", "".concat(this.width + 2 * t)),
                  e.setAttribute("height", "".concat(this.height + 2 * t)),
                  e
                );
              },
            },
          ]),
          (i = [
            {
              key: "fromBox",
              value: function (e, n) {
                var i = new t();
                return (
                  e &&
                    (e.x || 0 === e.x
                      ? ((i.x = e.x),
                        (i.y = e.y),
                        (i.width = e.width),
                        (i.height = e.height))
                      : (e.top || 0 === e.top) &&
                        ((i.x = e.left),
                        (i.y = e.top),
                        (i.width = e.right - e.left),
                        (i.height = e.bottom - e.top))),
                  n > 0 &&
                    ((i.x -= n),
                    (i.y -= n),
                    (i.width += 2 * n),
                    (i.height += 2 * n)),
                  i
                );
              },
            },
            {
              key: "fromPoints",
              value: function (e, n, i, o, r) {
                var a = new t();
                return (
                  e > i
                    ? ((a.x = i), (a.width = e - i))
                    : ((a.x = e), (a.width = i - e)),
                  n > o
                    ? ((a.y = o), (a.height = n - o))
                    : ((a.y = n), (a.height = o - n)),
                  r > 0 &&
                    ((a.x -= r),
                    (a.y -= r),
                    (a.width += 2 * r),
                    (a.height += 2 * r)),
                  a
                );
              },
            },
          ]),
          n && Ht(e.prototype, n),
          i && Ht(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n, i;
      })();
      function Ft(t) {
        return (
          (Ft =
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
          Ft(t)
        );
      }
      function Wt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Ut(i.key), i));
        }
      }
      function Ut(t) {
        var e = (function (t, e) {
          if ("object" != Ft(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Ft(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Ft(e) ? e : e + "";
      }
      var Xt = (function () {
        function t() {
          (!(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.selectedPath = null));
        }
        return (
          (e = t),
          (n = [
            {
              key: "createSvgElement",
              value: function (t) {
                if (!this.selectedPath) return null;
                if (1 === this.selectedPath.length) {
                  var e = this.selectedPath[0].createSvgElement(0);
                  return (t(e), e);
                }
                var n = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                );
                return (
                  this.selectedPath.forEach(function (e) {
                    var i = e.createSvgElement(0);
                    (t(i), n.appendChild(i));
                  }),
                  n
                );
              },
            },
            {
              key: "test",
              value: function (t) {
                if (!this.selectedPath) return !1;
                for (var e = 0; e < this.selectedPath.length; e++) {
                  var n = this.selectedPath[e];
                  if (
                    n.x <= t.x &&
                    t.x <= n.x + n.width &&
                    n.y <= t.y &&
                    t.y <= n.y + n.height
                  )
                    return !0;
                }
                return !1;
              },
            },
          ]),
          (i = [
            {
              key: "join",
              value: function (e) {
                var n,
                  i = new t();
                i.selectedPath = [];
                for (var o = 0; o < e.length; o++)
                  null === (n = e[o].selectedPath) ||
                    void 0 === n ||
                    n.forEach(function (t) {
                      var e;
                      return null === (e = i.selectedPath) || void 0 === e
                        ? void 0
                        : e.push(t);
                    });
                return i;
              },
            },
            {
              key: "getPathForGroup",
              value: function (e) {
                return t.getPathBBox(e, 0);
              },
            },
            {
              key: "getPathForLine",
              value: function (e) {
                return t.getPathBBox(e, 3);
              },
            },
            {
              key: "getPathForEllipse",
              value: function (e) {
                return t.getPathBBox(e, 3);
              },
            },
            {
              key: "getPathForPolyLine",
              value: function (e) {
                var n = new t();
                n.selectedPath = [];
                for (var i = 0; i < e.points.length - 1; i++) {
                  var o = e.points[i],
                    r = e.points[i + 1],
                    a = Vt.fromPoints(o.x, o.y, r.x, r.y, 3);
                  n.selectedPath.push(a);
                }
                return n;
              },
            },
            {
              key: "getPathForPolygon",
              value: function (e) {
                return t.getPathBBox(e, 3);
              },
            },
            {
              key: "getPathBBox",
              value: function (e, n) {
                var i = new t(),
                  o = e.getBBox(),
                  r = Vt.fromBox(o, n);
                return ((i.selectedPath = [r]), i);
              },
            },
          ]),
          n && Wt(e.prototype, n),
          i && Wt(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n, i;
      })();
      Xt.margin = 3;
      const Kt = Xt;
      var Zt;
      function qt(t) {
        return (
          (qt =
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
          qt(t)
        );
      }
      function Qt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, $t(i.key), i));
        }
      }
      function $t(t) {
        var e = (function (t, e) {
          if ("object" != qt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != qt(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == qt(e) ? e : e + "";
      }
      !(function (t) {
        ((t[(t.Component = 1)] = "Component"),
          (t[(t.Net = 2)] = "Net"),
          (t[(t.Wire = 3)] = "Wire"),
          (t[(t.Port = 4)] = "Port"),
          (t[(t.SheetEntry = 5)] = "SheetEntry"),
          (t[(t.SheetSymbol = 6)] = "SheetSymbol"));
      })(Zt || (Zt = {}));
      var Jt = (function () {
        function t(e, n, i, o) {
          (!(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.hasBounds = !1),
            (this.boundElement = null),
            (this.variantBounds = null),
            (this.ee = window.__CORE__.createEventEmmiterInstance()),
            (this.owner = e),
            (this.type = n),
            (this.id = i),
            (this.parts = o));
        }
        return (
          (e = t),
          (n = [
            {
              key: "once",
              value: function (t, e) {
                return this.ee.once(t, e);
              },
            },
            {
              key: "on",
              value: function (t, e) {
                return this.ee.on(t, e);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                return this.ee.off(t, e);
              },
            },
            {
              key: "eventNames",
              value: function () {
                return this.ee.eventNames();
              },
            },
            {
              key: "emit",
              value: function (t, e) {
                return this.ee.emit(t, e);
              },
            },
            {
              key: "getRootOwner",
              value: function () {
                return this.owner ? this.owner.getRootOwner() : this;
              },
            },
            {
              key: "test",
              value: function (t) {
                return !!this.boundElement && this.boundElement.test(t);
              },
            },
            {
              key: "updateBoundRectangles",
              value: function (e) {
                var n = this;
                if (!this.hasBounds) {
                  if (((this.hasBounds = !0), this.type !== Zt.Net)) {
                    var i = document.getElementById(this.id),
                      o = new Map();
                    ((this.boundElement = (function e(i, o) {
                      if (i && i.localName) {
                        var r = i.localName;
                        if ("g" === r) {
                          if (n.type === Zt.Component) {
                            var a = i.querySelectorAll("[data-variant-id]");
                            return a && a.length > 0
                              ? (a.forEach(function (t) {
                                  o.set(
                                    t.dataset.variantId,
                                    Kt.getPathForGroup(t),
                                  );
                                }),
                                o.get(u))
                              : Kt.getPathForGroup(i);
                          }
                          if (n.type === Zt.Wire)
                            try {
                              for (
                                var c = [], s = 0;
                                s < i.children.length;
                                s++
                              ) {
                                var l = e(i.children[s], null);
                                l && c.push(l);
                              }
                              return Kt.join(c);
                            } catch (e) {
                              t.logger.LogError(
                                "Setup wire error. " + e.message,
                              );
                            }
                          else {
                            if (n.type === Zt.Port)
                              return Kt.getPathForGroup(i);
                            if (n.type === Zt.SheetEntry)
                              return Kt.getPathForGroup(i);
                            if (n.type === Zt.SheetSymbol)
                              return Kt.getPathForGroup(i);
                          }
                        } else {
                          if ("line" === r) return Kt.getPathForLine(i);
                          if ("ellipse" === r) return Kt.getPathForEllipse(i);
                          if ("polyline" === r) return Kt.getPathForPolyLine(i);
                          if ("polygon" === r) return Kt.getPathForPolygon(i);
                        }
                      }
                      return null;
                    })(i, o)),
                      (this.variantBounds = o.size > 0 ? o : null),
                      e.set(this.id, this));
                  }
                  this.parts &&
                    this.parts.forEach(function (t) {
                      return t.updateBoundRectangles(e);
                    });
                }
              },
            },
            {
              key: "updateScene",
              value: function (t, e, n, i) {
                var o = this;
                if (this.hasBounds)
                  if (this.parts && 0 !== this.parts.length) {
                    var r = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "g",
                    );
                    (r.setAttribute("data_id", this.id),
                      r.setAttribute("data_type", "".concat(this.type)));
                    var a = this.getRootElement(this.boundElement, n, i);
                    (a && r.appendChild(a),
                      this.parts.forEach(function (e) {
                        return e.updateScene(t, r, n, i);
                      }),
                      e.appendChild(r));
                  } else {
                    if (this.type === Zt.Net) return;
                    var u = function (t, r) {
                      var a = o.getRootElement(t, n, i);
                      a &&
                        (a.setAttribute("data_id", o.id),
                        a.setAttribute("data_type", "".concat(o.type)),
                        r && a.setAttribute("data-variant-id", "".concat(r)),
                        e.appendChild(a));
                    };
                    this.variantBounds
                      ? this.variantBounds.forEach(function (t, e) {
                          return u(t, e);
                        })
                      : u(this.boundElement, null);
                  }
              },
            },
            {
              key: "setBound",
              value: function (t) {
                var e;
                this.variantBounds &&
                  (this.boundElement =
                    null !== (e = this.variantBounds.get(t)) && void 0 !== e
                      ? e
                      : this.boundElement);
              },
            },
            {
              key: "getRootElement",
              value: function (t, e, n) {
                var i = this;
                if (!t) return null;
                var o = t.createSvgElement(function (t) {
                  (t.setAttribute("class", e),
                    t.addEventListener("mouseenter", function () {
                      setTimeout(function () {
                        var t = i.getRootOwner();
                        t.emit("highlightStart", t);
                      }, 1);
                    }),
                    t.addEventListener("mouseleave", function () {
                      setTimeout(function () {
                        var t = i.getRootOwner();
                        t.emit("highlightComplete", t);
                      }, 1);
                    }),
                    n(t));
                });
                return o || null;
              },
            },
          ]),
          n && Qt(e.prototype, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n;
      })();
      Jt.logger = window.__CORE__.createLogger("SchActiveObject");
      const te = Jt;
      var ee,
        ne = n(49455);
      function ie(t) {
        return ((t ? t.kind : 0) >> 8) & 255;
      }
      function oe(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function re(t) {
        return (
          (re =
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
          re(t)
        );
      }
      function ae(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function ue(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, se(i.key), i));
        }
      }
      function ce(t, e, n) {
        return (
          e && ue(t.prototype, e),
          n && ue(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function se(t) {
        var e = (function (t, e) {
          if ("object" != re(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != re(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == re(e) ? e : e + "";
      }
      !(function (t) {
        ((t[(t.Wire = 19)] = "Wire"),
          (t[(t.Component = 26)] = "Component"),
          (t[(t.Port = 38)] = "Port"),
          (t[(t.SheetEntry = 40)] = "SheetEntry"),
          (t[(t.SheetSymbol = 41)] = "SheetSymbol"));
      })(ee || (ee = {}));
      var le = (function () {
          return ce(
            function t(e, n, i) {
              (ae(this, t),
                (this.schId = e),
                (this.channelId = n),
                (this.primitives = i || []));
            },
            [
              {
                key: "documentId",
                get: function () {
                  return (0, ne.Z)(this.schId, this.channelId);
                },
              },
            ],
          );
        })(),
        he = (function () {
          return ce(
            function t() {
              (ae(this, t),
                (this.channels = []),
                (this.primitives = []),
                (this.links = []));
            },
            [
              { key: "setup", value: function (t) {} },
              {
                key: "getLinks",
                value: function () {
                  return (
                    (function (t) {
                      if (Array.isArray(t)) return oe(t);
                    })((t = this.links.values())) ||
                    (function (t) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != t[Symbol.iterator]) ||
                        null != t["@@iterator"]
                      )
                        return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return oe(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return (
                          "Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(t)
                            : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n,
                                )
                              ? oe(t, e)
                              : void 0
                        );
                      }
                    })(t) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })()
                  );
                  var t;
                },
              },
              {
                key: "canNavigate",
                value: function (t) {
                  return !0;
                },
              },
              {
                key: "invoke",
                value: function (t) {
                  a.bus.emit("SchCompareEngine:navigate", t);
                },
              },
              {
                key: "getNavigationItems",
                value: function (t, e) {
                  var n = this.links.get(t),
                    i = e
                      ? this.channels.find(function (t) {
                          return t.id === e;
                        })
                      : null;
                  if (n && i)
                    switch (ie(n)) {
                      case ee.Port:
                        if (i.parentId) {
                          var o = this.channels.find(function (t) {
                            return t.id === i.parentId;
                          });
                          if (o) {
                            var r = this.findPrimitive(
                              o.schId,
                              ee.SheetEntry,
                              i.id,
                              n.itemLink,
                            );
                            if (r) return new le(o.schId, o.id, [r]);
                          }
                        }
                        break;
                      case ee.SheetEntry:
                      case ee.SheetSymbol:
                        var a = this.channels.find(function (t) {
                          return n.channelLinks.find(function (e) {
                            return e === t.id;
                          });
                        });
                        if (a) {
                          if (n.itemLink) {
                            var u = this.findPrimitive(
                              a.schId,
                              ee.Port,
                              0,
                              n.itemLink,
                            );
                            if (u) return new le(a.schId, a.id, [u]);
                          }
                          return new le(a.schId, a.id, []);
                        }
                    }
                },
              },
              {
                key: "findPrimitive",
                value: function (t, e, n, i) {
                  return this.primitives.find(function (o) {
                    return (
                      o.schDocId === t &&
                      ie(o) == e &&
                      o.itemLink === i &&
                      (!n ||
                        o.channelLinks.find(function (t) {
                          return t === n;
                        }))
                    );
                  });
                },
              },
              {
                key: "navigateTo",
                value: function (t) {
                  var e = this;
                  if (t)
                    return new Promise(function (n) {
                      var i = function () {
                        (setTimeout(function () {
                          0 == t.primitives.length
                            ? a.bus.emit("SchCompareEngine:zoomToFit", {
                                rect: null,
                                changeScale: !0,
                              })
                            : (a.bus.emit("SchCompareEngine:clearSelection", {
                                update: !0,
                              }),
                              a.bus.emit("SchCompareEngine:drawSelection", {
                                items: t.primitives,
                                fit: !0,
                              }));
                        }, 100),
                          a.bus.off("SCHCompareView:documentChanged", i),
                          n());
                      }.bind(e);
                      (a.bus.on("SCHCompareView:documentChanged", i),
                        a.bus.emit(
                          "SCHCompareView:showDocument",
                          t.documentId,
                        ));
                    });
                },
              },
            ],
            [
              {
                key: "isNavigatedPrimitive",
                value: function (t) {
                  return !(!t || (!t.channelLinks && !t.itemLink));
                },
              },
            ],
          );
        })();
      function fe(t) {
        return (
          (fe =
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
          fe(t)
        );
      }
      function de(t, e) {
        if (t) {
          if ("string" == typeof t) return ve(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? ve(t, e)
                : void 0
          );
        }
      }
      function ve(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function me(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, pe(i.key), i));
        }
      }
      function pe(t) {
        var e = (function (t, e) {
          if ("object" != fe(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != fe(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == fe(e) ? e : e + "";
      }
      var ye = (function () {
        return (
          (t = function t() {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.activeObjects = new Map()),
              (this.metadata = null),
              (this.metadataLogical = null),
              (this.boundsMap = new Map()),
              (this.idsMaps = new Map()),
              (this.selectionEnabled = !0),
              (this.currentState = null),
              (this.logger = a.createLogger(
                "SchCompareEngine:selectionService",
              )),
              (this.navigation = new he()));
          }),
          (e = [
            {
              key: "setup",
              value: function (t) {
                var e = this;
                t
                  ? ((this.metadata = t),
                    this.activeObjects.clear(),
                    this.setupComponents(),
                    this.setupNets(),
                    this.setupNavigation(this.metadata),
                    a.bus.on("Variants:set", function (t) {
                      e.currentState &&
                        (e.currentState.activeObjects.forEach(function (e) {
                          return e.setBound(t);
                        }),
                        e.launchSelection(null));
                    }),
                    a.bus.on(
                      "SchCompareView:selectedItem+DocumentReady",
                      function (t) {
                        (console.log(
                          "on:SchCompareView:selectedItem+DocumentReady",
                          t,
                        ),
                          a.bus.emit("SchCompareEngine:clearSelection", {
                            update: !0,
                          }),
                          a.bus.emit("SchCompareEngine:drawSelection", {
                            items: [t],
                            fit: !0,
                          }),
                          a.bus.emit(
                            "select",
                            Object.assign(Object.assign({}, t), {
                              views: ["SchCompare"],
                            }),
                          ));
                      },
                    ))
                  : console.error("Metadata object is undefined or null");
              },
            },
            {
              key: "setupComponents",
              value: function () {
                var t = this;
                this.metadata.Documents.map(function (e) {
                  var n;
                  null === (n = e.Items) ||
                    void 0 === n ||
                    n.map(function (n, i) {
                      var o = t.createActiveObject(
                        null,
                        Zt[n.ObjectKind],
                        n.Id || n.ObjectHandle,
                        [],
                      );
                      t.addActiveObject(e.Id, o);
                    });
                });
              },
            },
            {
              key: "setupNets",
              value: function () {
                var t = this;
                (this.metadata.Nets.map(function (e, n) {
                  var i,
                    o =
                      (null === (i = null == e ? void 0 : e.Items) ||
                      void 0 === i
                        ? void 0
                        : i.reduce(function (t, e) {
                            return (
                              (t[e.DocumentId] = [].concat(
                                (function (t) {
                                  return (
                                    (function (t) {
                                      if (Array.isArray(t)) return ve(t);
                                    })(t) ||
                                    (function (t) {
                                      if (
                                        ("undefined" != typeof Symbol &&
                                          null != t[Symbol.iterator]) ||
                                        null != t["@@iterator"]
                                      )
                                        return Array.from(t);
                                    })(t) ||
                                    de(t) ||
                                    (function () {
                                      throw new TypeError(
                                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                      );
                                    })()
                                  );
                                })(t[e.DocumentId] || []),
                                [e],
                              )),
                              t
                            );
                          }, {})) || {};
                  Object.keys(o).map(function (e) {
                    var i = [],
                      r = t.createActiveObject(
                        null,
                        Zt.Net,
                        "net-".concat(n),
                        i,
                      );
                    (o[e].map(function (e) {
                      var n = t.createActiveObject(
                        r,
                        Zt[e.ObjectKind] || Zt.Wire,
                        e.Id || e.ObjectHandle,
                        [],
                      );
                      i.push(n);
                    }),
                      t.addActiveObject(e, r),
                      console.log("Adding Net to ".concat(e), r));
                  });
                }),
                  console.log(this.activeObjects));
              },
            },
            {
              key: "changeState",
              value: function (t) {
                var e;
                ((this.selectionEnabled = t),
                  (null === (e = this.currentState) || void 0 === e
                    ? void 0
                    : e.activeObjectsGroup) &&
                    (this.currentState.activeObjectsGroup.style.display = t
                      ? ""
                      : "none"));
              },
            },
            {
              key: "setupBounds",
              value: function (t) {
                if ((console.log("Selection:SetupBounds (Document)", t), t)) {
                  var e = t.documentId;
                  if (e) {
                    var n = this.idsMaps.get(e);
                    n || ((n = new Map()), this.idsMaps.set(e, n));
                    try {
                      var i = window.document.createElement("div");
                      window.document.body.appendChild(i);
                      try {
                        (i.appendChild(t.node.cloneNode(!0)),
                          this.getActiveObjects(e).forEach(function (t) {
                            return t.updateBoundRectangles(n);
                          }),
                          console.log(
                            "Selection:SetupBounds:after:",
                            this.getActiveObjects(e),
                          ));
                      } finally {
                        window.document.body.removeChild(i);
                      }
                    } catch (t) {
                      this.logger.LogWarn("Setup document error. " + t.message);
                    }
                  }
                }
              },
            },
            {
              key: "setupDocument",
              value: function (t) {
                var e = this;
                ((this.currentState = null), this.boundsMap.clear());
                var n = t.documentId;
                if (n) {
                  this.selectionEnabled = !0;
                  var i = this.idsMaps.get(n);
                  i || ((i = new Map()), this.idsMaps.set(n, i));
                  var o = {
                    documentId: n,
                    channelId: t.channelId,
                    svg: t.svg,
                    scene: t.scene,
                    svgPoint: t.svg.createSVGPoint(),
                    activeObjects: this.getActiveObjects(n),
                    activeObjectsGroup: document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "g",
                    ),
                    ids: i,
                  };
                  o.activeObjectsGroup.id = o.scene.id + "ActiveObjects";
                  for (var r = 0; r < o.scene.children.length; r++) {
                    var a = o.scene.children[r];
                    if (a.id === o.activeObjectsGroup.id) {
                      o.scene.removeChild(a);
                      break;
                    }
                  }
                  return (
                    console.log("Selection:setupDocument", o),
                    o.activeObjects.forEach(function (t) {
                      (t.updateBoundRectangles(o.ids),
                        t.updateScene(
                          o.svg,
                          o.activeObjectsGroup,
                          "activeMouse",
                          function (n) {
                            e.boundsMap.set(n, t);
                          },
                        ));
                    }),
                    (this.currentState = o),
                    o.activeObjectsGroup
                  );
                }
              },
            },
            {
              key: "selectByPoint",
              value: function (t) {
                if (this.currentState) {
                  ((this.currentState.svgPoint.x = t.x),
                    (this.currentState.svgPoint.y = t.y));
                  var e = this.currentState.scene.getScreenCTM();
                  if (e) {
                    var n,
                      i = this.currentState.svgPoint.matrixTransform(
                        e.inverse(),
                      ),
                      o = (function (t, e) {
                        var n =
                          ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                        if (!n) {
                          if (Array.isArray(t) || (n = de(t))) {
                            n && (t = n);
                            var i = 0,
                              o = function () {};
                            return {
                              s: o,
                              n: function () {
                                return i >= t.length
                                  ? { done: !0 }
                                  : { done: !1, value: t[i++] };
                              },
                              e: function (t) {
                                throw t;
                              },
                              f: o,
                            };
                          }
                          throw new TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        }
                        var r,
                          a = !0,
                          u = !1;
                        return {
                          s: function () {
                            n = n.call(t);
                          },
                          n: function () {
                            var t = n.next();
                            return ((a = t.done), t);
                          },
                          e: function (t) {
                            ((u = !0), (r = t));
                          },
                          f: function () {
                            try {
                              a || null == n.return || n.return();
                            } finally {
                              if (u) throw r;
                            }
                          },
                        };
                      })(this.currentState.ids.values());
                    try {
                      for (o.s(); !(n = o.n()).done; ) {
                        var r = n.value;
                        if (r.test(i))
                          return void (this.navigation.canNavigate(r.id)
                            ? this.navigation.invoke(r.id)
                            : this.launchSelection(r.getRootOwner()));
                      }
                    } catch (t) {
                      o.e(t);
                    } finally {
                      o.f();
                    }
                    this.launchSelection(null);
                  }
                }
              },
            },
            {
              key: "getActiveObjectsForItem",
              value: function (t) {
                var e = this,
                  n = [];
                return (
                  this.getActiveObjectById(String(t.id), n),
                  t.subParts &&
                    t.subParts.forEach(function (t) {
                      return e.getActiveObjectById(t.Id || t.ObjectHandle, n);
                    }),
                  n
                );
              },
            },
            {
              key: "getActiveObjectsForSubItem",
              value: function (t) {
                var e,
                  n = [];
                return (
                  t.DocumentId ===
                    (null === (e = this.currentState) || void 0 === e
                      ? void 0
                      : e.documentId) &&
                    this.getActiveObjectById(t.Id || t.ObjectHandle, n),
                  n
                );
              },
            },
            {
              key: "canSelect",
              value: function (t) {
                return ie(t) === ee.Wire;
              },
            },
            {
              key: "getActiveObjectById",
              value: function (t, e) {
                if (this.currentState) {
                  var n = this.currentState.ids.get(t);
                  if (n && n.boundElement && n.boundElement.selectedPath) {
                    var i = {
                      element: null,
                      bounds: n.boundElement.selectedPath,
                    };
                    (n.type === Zt.Wire &&
                      this.setupWireHighlight(
                        document.getElementById(n.id),
                        n,
                        function (t) {
                          return e.push({ element: t });
                        },
                      ),
                      e.push(i));
                  }
                }
              },
            },
            {
              key: "launchSelection",
              value: function (t) {
                var e = this;
                if (this.metadata) {
                  var n = this.metadata;
                  if (this.currentState) {
                    var i = null;
                    if (t)
                      if (t.type === Zt.Component && t.id) {
                        var o = this.currentState.documentId,
                          r = n.components.find(function (n) {
                            var i;
                            return (
                              (!n.channel ||
                                n.channel ===
                                  (null === (i = e.currentState) || void 0 === i
                                    ? void 0
                                    : i.channelId)) &&
                              ((n.schId === t.id && n.schDocId === o) ||
                                (!!n.subParts &&
                                  n.subParts.find(function (e) {
                                    return e.schId === t.id && e.schDocId === o;
                                  })))
                            );
                          });
                        r && (i = (0, zt.Z)("component", r, "SchEngine"));
                      } else if (t.type === Zt.Net) {
                        var u = n.nets[parseInt(t.id)];
                        i = (0, zt.Z)("net", u, "SchEngine");
                      }
                    (i && !this.selectionEnabled) ||
                      (i
                        ? a.bus.emit("select", i)
                        : a.bus.emit("SchCompareEngine:clearSelection", {
                            update: !1,
                          }));
                  }
                }
              },
            },
            {
              key: "getActiveObjects",
              value: function (t) {
                return (t && this.activeObjects.get(t)) || [];
              },
            },
            {
              key: "createActiveObject",
              value: function (t, e, n, i) {
                var o = this,
                  r = new te(t, e, n, i);
                return (
                  r.on("highlightStart", function (t) {
                    o.invokeHighlight(r);
                  }),
                  r.on("highlightComplete", function () {
                    return a.bus.emit("SchCompareEngine:clearHighlight");
                  }),
                  r
                );
              },
            },
            {
              key: "addActiveObject",
              value: function (t, e) {
                if (t && e) {
                  var n = this.activeObjects.get(t);
                  (n || ((n = []), this.activeObjects.set(t, n)), n.push(e));
                }
              },
            },
            {
              key: "setupNavigation",
              value: function (t) {
                var e = this;
                this.navigation.setup(t);
                var n = [];
                (this.navigation.getLinks().forEach(function (t) {
                  var i = (function (t) {
                      switch (ie(t)) {
                        case ee.Component:
                          return Zt.Component;
                        case ee.Port:
                          return Zt.Port;
                        case ee.SheetEntry:
                          return Zt.SheetEntry;
                        case ee.SheetSymbol:
                          return Zt.SheetSymbol;
                        case ee.Wire:
                          return Zt.Wire;
                      }
                      return 0;
                    })(t),
                    o = e.createActiveObject(null, i, t.schId, null);
                  i === Zt.SheetSymbol
                    ? n.push({ docId: t.schDocId, obj: o })
                    : e.addActiveObject(t.schDocId, o);
                }),
                  n.forEach(function (t) {
                    e.addActiveObject(t.docId, t.obj);
                  }));
              },
            },
            {
              key: "invokeHighlight",
              value: function (t) {
                var e = this;
                this.currentState &&
                  (t.type === Zt.Component
                    ? t.boundElement &&
                      t.boundElement.selectedPath &&
                      t.boundElement.selectedPath.forEach(function (e) {
                        var n = e.createSvgElement(3);
                        (n.setAttribute("data-id", t.id),
                          a.bus.emit("SchCompareEngine:drawHighlight", n));
                      })
                    : t.type === Zt.Wire &&
                      this.setupWireHighlight(
                        this.currentState.svg.getElementById(t.id),
                        t,
                        function (t) {
                          return a.bus.emit(
                            "SchCompareEngine:drawHighlight",
                            t,
                          );
                        },
                      ),
                  t.parts &&
                    t.parts.forEach(function (t) {
                      return e.invokeHighlight(t);
                    }));
              },
            },
            {
              key: "setupWireHighlight",
              value: function (t, e, n) {
                var i = this;
                if (t && t.localName) {
                  var o = t.localName;
                  if ("g" === o)
                    this.forEveryChild(t, function (t) {
                      return i.setupWireHighlight(t, e, n);
                    });
                  else if ("line" === o || "polyline" === o) {
                    var r = t.cloneNode(!0);
                    (r.setAttribute("data-id", e.id),
                      r.hasAttribute("id") && r.removeAttribute("id"),
                      n(r));
                  }
                }
              },
            },
            {
              key: "forEveryChild",
              value: function (t, e) {
                for (var n = t.children, i = 0; i < n.length; i++) {
                  var o = n[i];
                  o && e(o);
                }
              },
            },
          ]),
          e && me(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function ge(t) {
        return (
          (ge =
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
          ge(t)
        );
      }
      function be() {
        be = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          u = r.asyncIterator || "@@asyncIterator",
          c = r.toStringTag || "@@toStringTag";
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
        function l(t, e, n, i) {
          var r = e && e.prototype instanceof y ? e : y,
            a = Object.create(r.prototype),
            u = new O(i || []);
          return (o(a, "_invoke", { value: A(t, n, u) }), a);
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          d = "suspendedYield",
          v = "executing",
          m = "completed",
          p = {};
        function y() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          E = S && S(S(I([])));
        E && E !== n && i.call(E, a) && (w = E);
        var k = (b.prototype = y.prototype = Object.create(w));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(o, r, a, u) {
            var c = h(t[o], t, r);
            if ("throw" !== c.type) {
              var s = c.arg,
                l = s.value;
              return l && "object" == ge(l) && i.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, u);
                    },
                    function (t) {
                      n("throw", t, a, u);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return n("throw", t, a, u);
                    },
                  );
            }
            u(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function (t, i) {
              function o() {
                return new e(function (e, o) {
                  n(t, i, e, o);
                });
              }
              return (r = r ? r.then(o, o) : o());
            },
          });
        }
        function A(e, n, i) {
          var o = f;
          return function (r, a) {
            if (o === v) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === r) throw a;
              return { value: t, done: !0 };
            }
            for (i.method = r, i.arg = a; ; ) {
              var u = i.delegate;
              if (u) {
                var c = T(u, i);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (o === f) throw ((o = m), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              o = v;
              var s = h(e, n, i);
              if ("normal" === s.type) {
                if (((o = i.done ? m : d), s.arg === p)) continue;
                return { value: s.arg, done: i.done };
              }
              "throw" === s.type &&
                ((o = m), (i.method = "throw"), (i.arg = s.arg));
            }
          };
        }
        function T(e, n) {
          var i = n.method,
            o = e.iterator[i];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                T(e, n),
                "throw" === n.method)) ||
                ("return" !== i &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method",
                  )))),
              p
            );
          var r = h(o, e.iterator, n.arg);
          if ("throw" === r.type)
            return (
              (n.method = "throw"),
              (n.arg = r.arg),
              (n.delegate = null),
              p
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                p)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              p);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function M(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function O(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0));
        }
        function I(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function n() {
                  for (; ++o < e.length; )
                    if (i.call(e, o))
                      return ((n.value = e[o]), (n.done = !1), n);
                  return ((n.value = t), (n.done = !0), n);
                };
              return (r.next = r);
            }
          }
          throw new TypeError(ge(e) + " is not iterable");
        }
        return (
          (g.prototype = b),
          o(k, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = s(b, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), s(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(P.prototype),
          s(P.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, i, o, r) {
            void 0 === r && (r = Promise);
            var a = new P(l(t, n, i, o), r);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          s(k, c, "Generator"),
          s(k, a, function () {
            return this;
          }),
          s(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var i in e) n.push(i);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var i = n.pop();
                  if (i in e) return ((t.value = i), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = I),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(M),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
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
              function o(i, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = e),
                  (n.next = i),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r],
                  u = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = i.call(a, "catchLoc"),
                    s = i.call(a, "finallyLoc");
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
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  i.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var r = o;
                  break;
                }
              }
              r &&
                ("break" === t || "continue" === t) &&
                r.tryLoc <= e &&
                e <= r.finallyLoc &&
                (r = null);
              var a = r ? r.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                r
                  ? ((this.method = "next"), (this.next = r.finallyLoc), p)
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
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return (this.complete(n.completion, n.afterLoc), M(n), p);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var o = i.arg;
                    M(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, i) {
              return (
                (this.delegate = { iterator: I(e), resultName: n, nextLoc: i }),
                "next" === this.method && (this.arg = t),
                p
              );
            },
          }),
          e
        );
      }
      function we(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Se(i.key), i));
        }
      }
      function Se(t) {
        var e = (function (t, e) {
          if ("object" != ge(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != ge(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == ge(e) ? e : e + "";
      }
      var Ee = function (t, e, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(t) {
              try {
                c(i.next(t));
              } catch (t) {
                r(t);
              }
            }
            function u(t) {
              try {
                c(i.throw(t));
              } catch (t) {
                r(t);
              }
            }
            function c(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, u);
            }
            c((i = i.apply(t, e || [])).next());
          });
        },
        ke = (function () {
          return (
            (t = function t() {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.documents = []),
                (this.currentDocumentIndex = -1),
                (this.shown = !1),
                (this.state = new w(this)),
                (this.selectionService = new ye()),
                (this.renderService = new Rt(this.selectionService)),
                (this.logger = a.createLogger("SchCompareEngine")));
            }),
            (e = [
              {
                key: "name",
                get: function () {
                  return "SchCompareEngine";
                },
              },
              {
                key: "comment",
                get: function () {
                  return "SVG Schematic Compare documents handler engine";
                },
              },
              {
                key: "dependencies",
                get: function () {
                  return [];
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
                    "SchCompareEngine:loadAllDocuments",
                    "SchCompareEngine:didDocumentAttach",
                    "SchCompareEngine:didDocumentDettach",
                    "SchCompareEngine:didDocumentAttachError",
                    "SchCompareEngine:beforeDocumentLoad",
                    "SchCompareEngine:afterDocumentLoad",
                    "SchCompareEngine:documentMove",
                    "SchCompareEngine:documentZoom",
                    "SchCompareEngine:select",
                    "SchCompareEngine:navigate",
                    "SchCompareEngine:drawHighlight",
                    "SchCompareEngine:clearHighlight",
                    "SchCompareEngine:drawSelection",
                    "SchCompareEngine:clearSelection",
                    "SchCompareEngine:zoomToFit",
                    "SchCompareEngine:documentShown",
                    "SchCompareEngine:documents",
                    "SchCompareEngine:showDocument",
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
                key: "bus",
                get: function () {
                  return a.bus;
                },
              },
              {
                key: "setup",
                value: function (t) {
                  return this.state.goToSetup(t);
                },
              },
              {
                key: "showView",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, i) {
                    e.state
                      .goToAttach(t)
                      .then(function (t) {
                        return e.state.goToShow();
                      })
                      .then(function (t) {
                        return n();
                      })
                      .catch(function (t) {
                        i(t);
                      });
                  });
                },
              },
              {
                key: "showDocument",
                value: function (t) {
                  return Ee(
                    this,
                    void 0,
                    void 0,
                    be().mark(function e() {
                      var n;
                      return be().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.logger.LogDebug(
                                    "Show Document by id: " + t,
                                  ),
                                  (e.next = 3),
                                  this.setActiveDocumentById(t)
                                );
                              case 3:
                                if (
                                  ((n = e.sent),
                                  this.renderService.attach(n),
                                  a.bus.emit(
                                    "SchCompareEngine:documentShown",
                                    n,
                                  ),
                                  !this.shown)
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  this.renderService.setPosition(n)
                                );
                              case 9:
                                return (
                                  (e.next = 11),
                                  this.renderService.render(n)
                                );
                              case 11:
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
                key: "hideView",
                value: function () {
                  this.state.goToClose();
                },
              },
              {
                key: "resetView",
                value: function () {
                  this.renderService.reset();
                },
              },
              {
                key: "enableSelection",
                value: function (t) {
                  this.selectionService.changeState(t);
                },
              },
              {
                key: "doSetup",
                value: function (t) {
                  var e = this;
                  this.logger.LogDebug("To SETUP state");
                  var n = t.response,
                    o = [];
                  if (
                    (n &&
                      n.storage &&
                      n.storage.files &&
                      n.storage.files
                        .filter(function (t) {
                          return "SchSvgCompare" === t.fileType;
                        })
                        .forEach(function (t, e) {
                          var r = n.storage.files.find(function (e) {
                              return (
                                "Preview" === e.fileType &&
                                e.originalName
                                  .replace(".svg", "")
                                  .replace(".png", "") ===
                                  t.originalName
                                    .replace(".svg", "")
                                    .replace(".png", "")
                              );
                            }),
                            a = t.originalName
                              .replace("LC.", "")
                              .replace("PC.", "")
                              .replace(".svg", "")
                              .replace(".png", ""),
                            u = {
                              order: e,
                              id: e.toString(),
                              uniqueId: e.toString(),
                              channelId: 0,
                              url: t.dataFileUrl,
                              previewUrl: r ? r.dataFileUrl : "",
                              loadState: i.IDLE,
                              name: t.originalName,
                              displayName: a,
                              renderData: null,
                              errorState: null,
                              toString: function () {
                                return "["
                                  .concat(u.id, "] ")
                                  .concat(u.name, " [")
                                  .concat(u.loadState, "]");
                              },
                            };
                          o.push(u);
                        }),
                    n &&
                      n.metadata &&
                      ((this.metadata = n.metadata.LogicalChanges),
                      this.metadata.Documents.length ||
                        this.metadata.Nets.length))
                  ) {
                    this.renderService.setMetadata(this.metadata);
                    var r = this.metadata.Documents;
                    (this.setupDocuments(o, r),
                      this.selectionService.setup(this.metadata));
                  }
                  (o
                    .filter(function (t) {
                      return !e.documents.find(function (e) {
                        return e == t;
                      });
                    })
                    .forEach(function (t) {
                      ((t.order = e.documents.length), e.documents.push(t));
                    }),
                    this.bus.emit("SchCompareEngine:documents", this.documents),
                    this.bus.on("SchCompareEngine:showDocument", function (t) {
                      e.showDocument(t);
                    }));
                },
              },
              {
                key: "doAttachToWorkspace",
                value: function (t) {
                  (this.logger.LogDebug("To ATTACH_TO_WORKSPACE state"),
                    t.setAttribute("data-view-id", "schSvgView"),
                    this.renderService.attachTo(t));
                },
              },
              {
                key: "doShow",
                value: function () {
                  if (
                    (this.logger.LogDebug("To SHOW state"),
                    (this.shown = !0),
                    0 !== this.allDocuments.length)
                  ) {
                    var t =
                      -1 === this.currentDocumentIndex
                        ? 0
                        : this.currentDocumentIndex;
                    this.showDocument(this.documents[t].uniqueId);
                  } else this.logger.LogWarn("Any document to show");
                },
              },
              {
                key: "doClose",
                value: function () {
                  var t;
                  (this.logger.LogDebug("To CLOSE state"),
                    null === (t = this.renderService) ||
                      void 0 === t ||
                      t.saveState(),
                    (this.shown = !1));
                },
              },
              {
                key: "setupDocuments",
                value: function (t, e) {
                  var n = this;
                  e.forEach(function (e, i) {
                    var o = t.find(function (t) {
                      return e.Outputs.some(function (e) {
                        return n.isFileNameEqual(t.name, e.FilePath);
                      });
                    });
                    if (o) {
                      var r =
                        e.Id ||
                        Math.random().toString(36).slice(2, 10).toUpperCase();
                      ((o.id = r),
                        (o.uniqueId = r),
                        (o.order = i),
                        (o.isAdded = !e.BaseDocument && !!e.Document),
                        (o.isRemoved = !!e.BaseDocument && !e.Document),
                        n.documents.push(o));
                    } else
                      n.logger.LogWarn(
                        "Cannot find at metadata: ".concat(e.fileName),
                      );
                  });
                },
              },
              {
                key: "setActiveDocumentById",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, o) {
                    if (null !== t) {
                      var r = e.documents.findIndex(function (e) {
                        return e.uniqueId === t;
                      });
                      if (
                        (-1 == r &&
                          (r = e.documents.findIndex(function (e) {
                            return e.id === t;
                          })),
                        r < 0 || r >= e.documents.length)
                      )
                        o("Document index is out of range.");
                      else {
                        var u = e.documents[r];
                        switch (((e.currentDocumentIndex = r), u.loadState)) {
                          case i.IDLE:
                            (a.bus.emit(
                              "SchCompareEngine:beforeDocumentLoad",
                              u,
                            ),
                              (u.loadState = i.LOAD),
                              e.loadDocument(u).then(function (t) {
                                (a.bus.emit(
                                  "SchCompareEngine:afterDocumentLoad",
                                  u,
                                ),
                                  n(u));
                              }));
                            break;
                          case i.LOAD:
                            (a.bus.emit(
                              "SchCompareEngine:beforeDocumentLoad",
                              u,
                            ),
                              a.bus.on(
                                "SchCompareEngine:afterDocumentLoad",
                                function () {
                                  return n(u);
                                },
                              ));
                            break;
                          default:
                            n(u);
                        }
                      }
                    } else o("Document id is undefined.");
                  });
                },
              },
              {
                key: "loadAllDocuments",
                value: function () {
                  return Ee(
                    this,
                    void 0,
                    void 0,
                    be().mark(function t() {
                      var e, n;
                      return be().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                e = 0;
                              case 1:
                                if (!(e < this.documents.length)) {
                                  t.next = 10;
                                  break;
                                }
                                if (
                                  !(n = this.documents[e]) ||
                                  n.loadState !== i.IDLE
                                ) {
                                  t.next = 7;
                                  break;
                                }
                                return (
                                  (n.loadState = i.LOAD),
                                  (t.next = 7),
                                  this.loadDocument(n)
                                );
                              case 7:
                                (e++, (t.next = 1));
                                break;
                              case 10:
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
                key: "loadDocument",
                value: function (t) {
                  var e,
                    n,
                    o = this;
                  if (
                    null ===
                      (n =
                        null === (e = a.response) || void 0 === e
                          ? void 0
                          : e.storage) || void 0 === n
                      ? void 0
                      : n.isExpired
                  )
                    throw new r.CV();
                  return new Promise(function (e) {
                    fetch(t.url, { method: "GET" })
                      .then(function (t) {
                        if (t.ok) return t.text();
                        throw new Error(
                          "Document loading error. [".concat(t.statusText, "]"),
                        );
                      })
                      .then(function (n) {
                        t.loadState = i.READY;
                        var r = new DOMParser().parseFromString(n, "text/xml");
                        t.renderData = r;
                        var a = r.documentElement;
                        if (!a) throw new Error("Document is empty.");
                        if (a.hasAttribute("data-doc-id")) {
                          var u = a.getAttribute("data-doc-id");
                          t.id &&
                            u !== t.id &&
                            o.logger.LogError(
                              "Document meta id ["
                                .concat(t.id, "] is not equals id [")
                                .concat(u, "]"),
                            );
                        }
                        (o.selectionService.setupBounds({
                          documentId: t.id,
                          node: t.renderData.documentElement.cloneNode(!0),
                        }),
                          e());
                      })
                      .catch(function (n) {
                        ((t.loadState = i.READY), (t.errorState = n), e());
                      });
                  });
                },
              },
              {
                key: "isFileNameEqual",
                value: function (t, e) {
                  return t == this.getFileNameFromPath(e);
                },
              },
              {
                key: "getFileNameFromPath",
                value: function (t) {
                  return t.replace(/^.*[\\\/]/, "");
                },
              },
            ]),
            e && we(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      const Ce = {
        type: "Engine",
        name: "SchCompareEngineModule",
        description: "Presents schematic compare documents engine module",
        create: function () {
          return new ke();
        },
      };
      var Pe = n(92845);
      function Ae(t) {
        return (
          (Ae =
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
          Ae(t)
        );
      }
      function Te(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, xe(i.key), i));
        }
      }
      function xe(t) {
        var e = (function (t, e) {
          if ("object" != Ae(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Ae(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Ae(e) ? e : e + "";
      }
      function Me(t, e, n) {
        return (
          (e = Ie(e)),
          (function (t, e) {
            if (e && ("object" == Ae(e) || "function" == typeof e)) return e;
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
            Oe()
              ? Reflect.construct(e, n || [], Ie(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Oe() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Oe = function () {
          return !!t;
        })();
      }
      function Ie(t) {
        return (
          (Ie = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ie(t)
        );
      }
      function Le(t, e) {
        return (
          (Le = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          Le(t, e)
        );
      }
      var De = {
          where: function (t) {
            return ["Show" === t.type];
          },
          to: "SHOW",
        },
        je = {
          where: function (t) {
            return ["Error" === t.type];
          },
          to: "CRASHED",
          error: !0,
        },
        _e = {
          IDLE: [
            {
              where: function (t) {
                return ["Setup" === t.type];
              },
              to: "SETUP",
            },
          ],
          SETUP: [
            {
              where: function (t) {
                return ["SetupComplete" === t.type];
              },
              to: "SETUP_COMPLETED",
            },
            je,
          ],
          SETUP_COMPLETED: [
            {
              where: function (t) {
                return ["Attach" === t.type];
              },
              to: "ATTACH",
            },
            je,
          ],
          ATTACH: [
            {
              where: function (t) {
                return ["AttachComplete" === t.type];
              },
              to: "ATTACH_COMPLETED",
            },
            je,
          ],
          ATTACH_COMPLETED: [De],
          SHOW: [
            {
              where: function (t) {
                return ["Close" === t.type];
              },
              to: "CLOSE",
            },
          ],
          CLOSE: [De],
        },
        Ne = (function (t) {
          function e(t) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((n = Me(this, e, ["IDLE", _e])).errorState = null),
              (n.onSetup = function (t) {
                try {
                  var e = t.core;
                  (n.owner.doSetup(e),
                    n.nextTick(function () {
                      return n.dispatch({ type: "SetupComplete" });
                    }));
                } catch (t) {
                  n.nextTick(function () {
                    return n.dispatch(new s.B(t.message, t));
                  });
                }
              }),
              (n.onAttachToWorkspace = function (t) {
                try {
                  (n.owner.doAttachToWorkspace(t.workspace),
                    n.nextTick(function () {
                      return n.dispatch({ type: "AttachComplete" });
                    }));
                } catch (t) {
                  n.nextTick(function () {
                    return n.dispatch(new s.B(t.message, t));
                  });
                }
              }),
              (n.onShow = function () {
                n.owner.doShow();
              }),
              (n.onClose = function () {
                n.owner.doClose();
              }),
              (n.owner = t),
              n.on("SETUP", n.onSetup),
              n.on("ATTACH", n.onAttachToWorkspace),
              n.on("SHOW", n.onShow),
              n.on("CLOSE", n.onClose),
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
                e && Le(t, e));
            })(e, t),
            (n = e),
            (i = [
              {
                key: "goToSetup",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, i) {
                    e.dispatch({ type: "Setup", core: t }) ||
                    "SETUP" === e.state
                      ? (e.on("SETUP_COMPLETED", function () {
                          n();
                        }),
                        e.on("CRASHED", function (t) {
                          ((e.errorState = t), i(e.errorState));
                        }))
                      : "CRASHED" === e.state
                        ? i(e.errorState)
                        : n();
                  });
                },
              },
              {
                key: "goToAttach",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, i) {
                    e.dispatch({ type: "Attach", workspace: t }) ||
                    "ATTACH" === e.state
                      ? (e.on("ATTACH_COMPLETED", function () {
                          n();
                        }),
                        e.on("CRASHED", function (t) {
                          ((e.errorState = t), i(e.errorState));
                        }))
                      : "CRASHED" === e.state
                        ? i(e.errorState)
                        : n();
                  });
                },
              },
              {
                key: "goToShow",
                value: function () {
                  var t = this;
                  return new Promise(function (e, n) {
                    t.dispatch({ type: "Show" }) || "SHOW" === t.state
                      ? e()
                      : n("Cannot show. Wrong state [".concat(t.state, "]"));
                  });
                },
              },
              {
                key: "goToClose",
                value: function () {
                  var t = this;
                  return new Promise(function (e, n) {
                    t.dispatch({ type: "Close" }) || "CLOSE" === t.state
                      ? e()
                      : n("Cannot show. Wrong state [".concat(t.state, "]"));
                  });
                },
              },
              {
                key: "nextTick",
                value: function (t) {
                  setTimeout(function () {
                    t();
                  }, 1);
                },
              },
            ]),
            i && Te(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(c.Z);
      function Be(t) {
        return (
          (Be =
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
          Be(t)
        );
      }
      function Re(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function ze(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, He(i.key), i));
        }
      }
      function Ge(t, e, n) {
        return (
          e && ze(t.prototype, e),
          n && ze(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function He(t) {
        var e = (function (t, e) {
          if ("object" != Be(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Be(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Be(e) ? e : e + "";
      }
      var Ye = "mousedown",
        Ve = "mousemove",
        Fe = "mouseup",
        We = "mouseenter",
        Ue = "mouseleave",
        Xe = "touchstart",
        Ke = "touchmove",
        Ze = "touchend",
        qe = function (t) {
          setTimeout(function () {
            t();
          }, 0);
        },
        Qe = (function () {
          return Ge(
            function t() {
              var e = this;
              (Re(this, t),
                (this.panEventArgs = { deltaX: 0, deltaY: 0 }),
                (this.zoomEventArgs = { delta: 0, x: 0, y: 0 }),
                (this.onContextMenu = function (t) {
                  e.stopBubble(t);
                }),
                (this.onMouseEvent = function () {
                  e.workspace.focus();
                }),
                (this.onMouseWheel = function (t) {
                  ((e.zoomEventArgs.delta = t.deltaY > 0 ? 10 : -10),
                    (e.zoomEventArgs.x = t.clientX),
                    (e.zoomEventArgs.y = t.clientY),
                    qe(function () {
                      return e.emit("zoom", e.zoomEventArgs);
                    }),
                    e.stopBubble(t));
                }),
                (this.onTouchStart = function (t) {
                  (2 === t.touches.length &&
                    (e.workspace.addEventListener(Ke, e.onTouchMove),
                    e.workspace.addEventListener(Ze, e.onTouchEnd),
                    e.onGestureStart(
                      t.touches[0].clientX,
                      t.touches[0].clientY,
                      t.touches[1].clientX,
                      t.touches[1].clientY,
                    )),
                    e.stopBubble(t));
                }),
                (this.onTouchEnd = function (t) {
                  (1 === t.touches.length &&
                    (e.workspace.removeEventListener(Ke, e.onTouchMove),
                    e.workspace.removeEventListener(Ze, e.onTouchEnd),
                    e.onGestureEnd(t.touches[0].clientX, t.touches[0].clientY)),
                    e.stopBubble(t));
                }),
                (this.onTouchMove = function (t) {
                  if (2 === t.touches.length) {
                    var n = t.touches[0],
                      i = t.touches[1];
                    e.onGesture(n.clientX, n.clientY, i.clientX, i.clientY);
                  }
                  e.stopBubble(t);
                }),
                (this.inputGesture = {
                  count: 0,
                  position1: { x: 0, y: 0 },
                  position2: { x: 0, y: 0 },
                  centerPoint: { x: 0, y: 0 },
                  startDistance: 0,
                  currentPercent: 0,
                }),
                (this.ee = window.__CORE__.createEventEmmiterInstance()),
                (this.userPanInteract = new Je()),
                this.userPanInteract.on("panEnter", function () {
                  return e.emit("panEnter");
                }),
                this.userPanInteract.on("panLeave", function () {
                  return e.emit("panLeave");
                }),
                this.userPanInteract.on("panMove", function (t) {
                  return e.emit("panMove", t);
                }),
                (this.userSelectInteract = new $e()),
                this.userSelectInteract.on("select", function (t) {
                  return e.emit("select", t);
                }));
            },
            [
              {
                key: "once",
                value: function (t, e) {
                  return this.ee.once(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  return this.ee.on(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  return this.ee.off(t, e);
                },
              },
              {
                key: "eventNames",
                value: function () {
                  return this.ee.eventNames();
                },
              },
              {
                key: "emit",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                  return this.ee.emit(t, e);
                },
              },
              {
                key: "attachToWorkspace",
                value: function (t) {
                  ((this.workspace = t),
                    this.initEvents(t),
                    this.userPanInteract.attachToWorkspace(t),
                    this.userSelectInteract.attachToWorkspace(t));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.workspace &&
                    (this.releaseEvents(this.workspace),
                    this.userPanInteract.destroy(),
                    this.userSelectInteract.destroy(),
                    (this.workspace = null));
                },
              },
              {
                key: "stopBubble",
                value: function (t) {
                  (t.preventDefault(), t.stopPropagation());
                },
              },
              {
                key: "initEvents",
                value: function (t) {
                  (t.addEventListener("contextmenu", this.onContextMenu),
                    t.addEventListener(We, this.onMouseEvent),
                    t.addEventListener("wheel", this.onMouseWheel),
                    t.addEventListener("mousewheel", this.onMouseWheel),
                    t.addEventListener(Xe, this.onTouchStart));
                },
              },
              {
                key: "releaseEvents",
                value: function (t) {
                  (t.removeEventListener("contextmenu", this.onContextMenu),
                    t.removeEventListener(We, this.onMouseEvent),
                    t.removeEventListener("wheel", this.onMouseWheel),
                    t.removeEventListener("mousewheel", this.onMouseWheel),
                    t.removeEventListener(Xe, this.onTouchStart));
                },
              },
              {
                key: "updateGestureStartPoint",
                value: function (t, e, n, i) {
                  ((this.inputGesture.position1.x = t),
                    (this.inputGesture.position1.y = e),
                    (this.inputGesture.position2.x = n),
                    (this.inputGesture.position2.y = i));
                  var o = n - t,
                    r = i - e;
                  ((this.inputGesture.startDistance = Math.sqrt(o * o + r * r)),
                    (this.inputGesture.currentPercent = 100),
                    (this.inputGesture.centerPoint.x =
                      t > n ? n + (t - n) / 2 : t + (n - t) / 2),
                    (this.inputGesture.centerPoint.y =
                      e > i ? i + (e - i) / 2 : e + (i - e) / 2));
                },
              },
              {
                key: "onGestureStart",
                value: function (t, e, n, i) {
                  this.updateGestureStartPoint(t, e, n, i);
                },
              },
              {
                key: "onGesture",
                value: function (t, e, n, i) {
                  var o = this;
                  if (2 == this.inputGesture.count++) {
                    this.inputGesture.count = 0;
                    var r = t - this.inputGesture.position1.x,
                      a = e - this.inputGesture.position1.y,
                      u = n - this.inputGesture.position2.x,
                      c = i - this.inputGesture.position2.y;
                    if (r > 0 == u > 0 && a > 0 == c > 0)
                      return (
                        (this.panEventArgs.deltaX =
                          Math.abs(r) < Math.abs(u) ? r : u),
                        (this.panEventArgs.deltaY =
                          Math.abs(a) < Math.abs(c) ? a : c),
                        qe(function () {
                          return o.emit("panMove", o.panEventArgs);
                        }),
                        void this.updateGestureStartPoint(t, e, n, i)
                      );
                    var s = n - t,
                      l = i - e,
                      h = Math.sqrt(s * s + l * l),
                      f = Math.round(
                        (this.inputGesture.startDistance / h) * 100,
                      );
                    ((this.zoomEventArgs.delta =
                      f - this.inputGesture.currentPercent),
                      (this.zoomEventArgs.x = this.inputGesture.centerPoint.x),
                      (this.zoomEventArgs.y = this.inputGesture.centerPoint.y),
                      qe(function () {
                        return o.emit("zoom", o.zoomEventArgs);
                      }),
                      (this.inputGesture.currentPercent = f));
                  }
                },
              },
              {
                key: "onGestureEnd",
                value: function (t, e) {
                  this.updateGestureStartPoint(0, 0, 0, 0);
                },
              },
            ],
          );
        })(),
        $e = (function () {
          return Ge(
            function t() {
              var e = this;
              (Re(this, t),
                (this.initClientX = 0),
                (this.initClientY = 0),
                (this.onMouseDown = function (t) {
                  0 === t.button &&
                    ((e.initClientX = t.clientX),
                    (e.initClientY = t.clientY),
                    e.workspace.addEventListener(Fe, e.onMouseUp),
                    e.workspace.addEventListener(Ve, e.onMouseMove));
                }),
                (this.onMouseMove = function (n) {
                  (Math.abs(e.initClientX - n.clientX) < t.delta &&
                    Math.abs(e.initClientY - n.clientY) < t.delta) ||
                    (e.workspace.removeEventListener(Fe, e.onMouseUp),
                    e.workspace.removeEventListener(Ve, e.onMouseMove));
                }),
                (this.onMouseUp = function (t) {
                  (e.workspace.removeEventListener(Fe, e.onMouseUp),
                    e.workspace.removeEventListener(Ve, e.onMouseMove),
                    e.emitSelect(t.currentTarget, t));
                }),
                (this.onTouchStart = function (t) {
                  1 === t.touches.length
                    ? ((e.initClientX = t.touches[0].clientX),
                      (e.initClientY = t.touches[0].clientY),
                      e.workspace.addEventListener(Ke, e.onTouchMove),
                      e.workspace.addEventListener(Ze, e.onTouchEnd))
                    : 2 === t.touches.length &&
                      (e.workspace.removeEventListener(Ke, e.onTouchMove),
                      e.workspace.removeEventListener(Ze, e.onTouchEnd));
                }),
                (this.onTouchMove = function (n) {
                  (Math.abs(e.initClientX - n.touches[0].clientX) < t.delta &&
                    Math.abs(e.initClientY - n.touches[0].clientY) < t.delta) ||
                    (e.workspace.removeEventListener(Ke, e.onTouchMove),
                    e.workspace.removeEventListener(Ze, e.onTouchEnd));
                }),
                (this.onTouchEnd = function (t) {
                  e.emitSelect(t.currentTarget, t.changedTouches[0]);
                }),
                (this.ee = window.__CORE__.createEventEmmiterInstance()));
            },
            [
              {
                key: "once",
                value: function (t, e) {
                  return this.ee.once(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  return this.ee.on(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  return this.ee.off(t, e);
                },
              },
              {
                key: "eventNames",
                value: function () {
                  return this.ee.eventNames();
                },
              },
              {
                key: "emit",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                  return this.ee.emit(t, e);
                },
              },
              {
                key: "attachToWorkspace",
                value: function (t) {
                  ((this.workspace = t), this.initEvents(t));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.workspace &&
                    (this.releaseEvents(this.workspace),
                    (this.workspace = null));
                },
              },
              {
                key: "initEvents",
                value: function (t) {
                  t &&
                    (t.addEventListener(Ye, this.onMouseDown),
                    t.addEventListener(Xe, this.onTouchStart));
                },
              },
              {
                key: "releaseEvents",
                value: function (t) {
                  t &&
                    (t.removeEventListener(Ye, this.onMouseDown),
                    t.removeEventListener(Xe, this.onTouchStart));
                },
              },
              {
                key: "emitSelect",
                value: function (t, e) {
                  var n = this;
                  (t.removeEventListener(Ke, this.onTouchMove),
                    t.removeEventListener(Ze, this.onTouchEnd),
                    qe(function () {
                      n.emit("select", { x: e.clientX, y: e.clientY });
                    }));
                },
              },
            ],
          );
        })();
      $e.delta = 1;
      var Je = (function () {
        return Ge(
          function t() {
            var e = this;
            (Re(this, t),
              (this.isEnter = !1),
              (this.panEventArgs = { deltaX: 0, deltaY: 0, x: 0, y: 0 }),
              (this.onMouseDown = function (t) {
                (1 !== t.buttons && 2 !== t.buttons) ||
                  ((e.panEventArgs.deltaX = 0),
                  (e.panEventArgs.deltaY = 0),
                  (e.panEventArgs.x = t.clientX),
                  (e.panEventArgs.y = t.clientY),
                  e.workspace.addEventListener(Fe, e.onMouseUp),
                  e.workspace.addEventListener(Ue, e.onMouseLeave),
                  e.workspace.addEventListener(Ve, e.onMouseMove),
                  e.workspace.addEventListener(We, e.onMouseEnter));
              }),
              (this.onMouseEnter = function (t) {
                1 === t.buttons || 2 === t.buttons
                  ? ((e.panEventArgs.deltaX = 0),
                    (e.panEventArgs.deltaY = 0),
                    (e.panEventArgs.x = t.clientX),
                    (e.panEventArgs.y = t.clientY),
                    e.workspace.addEventListener(Fe, e.onMouseUp),
                    e.workspace.addEventListener(Ue, e.onMouseLeave),
                    e.workspace.addEventListener(Ve, e.onMouseMove))
                  : e.workspace.removeEventListener(We, e.onMouseEnter);
              }),
              (this.onMouseUp = function (t) {
                ((e.isEnter = !1),
                  qe(function () {
                    return e.emit("panLeave");
                  }),
                  e.workspace.removeEventListener(Fe, e.onMouseUp),
                  e.workspace.removeEventListener(Ue, e.onMouseLeave),
                  e.workspace.removeEventListener(Ve, e.onMouseMove),
                  e.workspace.removeEventListener(We, e.onMouseEnter));
              }),
              (this.onMouseLeave = function (t) {
                ((e.isEnter = !1),
                  qe(function () {
                    return e.emit("panLeave");
                  }),
                  e.workspace.removeEventListener(Fe, e.onMouseUp),
                  e.workspace.removeEventListener(Ue, e.onMouseLeave),
                  e.workspace.removeEventListener(Ve, e.onMouseMove));
              }),
              (this.onMouseMove = function (n) {
                if (
                  !(
                    Math.abs(e.panEventArgs.x - n.clientX) < t.delta &&
                    Math.abs(e.panEventArgs.y - n.clientY) < t.delta
                  )
                ) {
                  (e.isEnter ||
                    ((e.isEnter = !0),
                    qe(function () {
                      return e.emit("panEnter");
                    })),
                    (e.panEventArgs.deltaX = n.clientX - e.panEventArgs.x),
                    (e.panEventArgs.deltaY = n.clientY - e.panEventArgs.y),
                    (e.panEventArgs.x = n.clientX),
                    (e.panEventArgs.y = n.clientY));
                  var i = Object.assign({}, e.panEventArgs);
                  qe(function () {
                    return e.emit("panMove", i);
                  });
                }
              }),
              (this.onTouchStart = function (t) {
                1 === t.touches.length
                  ? ((e.panEventArgs.deltaX = 0),
                    (e.panEventArgs.deltaY = 0),
                    (e.panEventArgs.x = t.touches[0].clientX),
                    (e.panEventArgs.y = t.touches[0].clientY),
                    e.workspace.addEventListener(Ke, e.onTouchMove),
                    e.workspace.addEventListener(Ze, e.onTouchEnd))
                  : 2 === t.touches.length &&
                    (e.workspace.removeEventListener(Ke, e.onTouchMove),
                    e.workspace.removeEventListener(Ze, e.onTouchEnd));
              }),
              (this.onTouchMove = function (n) {
                if (
                  !(
                    Math.abs(e.panEventArgs.x - n.touches[0].clientX) <
                      t.delta &&
                    Math.abs(e.panEventArgs.y - n.touches[0].clientY) < t.delta
                  )
                ) {
                  (e.isEnter ||
                    ((e.isEnter = !0),
                    qe(function () {
                      return e.emit("panEnter");
                    })),
                    (e.panEventArgs.deltaX =
                      n.touches[0].clientX - e.panEventArgs.x),
                    (e.panEventArgs.deltaY =
                      n.touches[0].clientY - e.panEventArgs.y),
                    (e.panEventArgs.x = n.touches[0].clientX),
                    (e.panEventArgs.y = n.touches[0].clientY));
                  var i = Object.assign({}, e.panEventArgs);
                  qe(function () {
                    return e.emit("panMove", i);
                  });
                }
              }),
              (this.onTouchEnd = function (t) {
                1 === t.touches.length
                  ? ((e.panEventArgs.deltaX = 0),
                    (e.panEventArgs.deltaY = 0),
                    (e.panEventArgs.x = t.touches[0].clientX),
                    (e.panEventArgs.y = t.touches[0].clientY),
                    e.workspace.addEventListener(Ke, e.onTouchMove),
                    e.workspace.addEventListener(Ze, e.onTouchEnd))
                  : 0 === t.touches.length &&
                    ((e.isEnter = !1),
                    qe(function () {
                      return e.emit("panLeave");
                    }),
                    e.workspace.removeEventListener(Ke, e.onTouchMove),
                    e.workspace.removeEventListener(Ze, e.onTouchEnd));
              }),
              (this.ee = window.__CORE__.createEventEmmiterInstance()));
          },
          [
            {
              key: "once",
              value: function (t, e) {
                return this.ee.once(t, e);
              },
            },
            {
              key: "on",
              value: function (t, e) {
                return this.ee.on(t, e);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                return this.ee.off(t, e);
              },
            },
            {
              key: "eventNames",
              value: function () {
                return this.ee.eventNames();
              },
            },
            {
              key: "emit",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                return this.ee.emit(t, e);
              },
            },
            {
              key: "attachToWorkspace",
              value: function (t) {
                ((this.workspace = t), this.initEvents(t));
              },
            },
            {
              key: "destroy",
              value: function () {
                this.workspace &&
                  (this.releaseEvents(this.workspace), (this.workspace = null));
              },
            },
            {
              key: "initEvents",
              value: function (t) {
                (t.addEventListener(Ye, this.onMouseDown),
                  t.addEventListener(Xe, this.onTouchStart));
              },
            },
            {
              key: "releaseEvents",
              value: function (t) {
                (t.removeEventListener(Ye, this.onMouseDown),
                  t.removeEventListener(Xe, this.onTouchStart));
              },
            },
          ],
        );
      })();
      Je.delta = 1;
      var tn = "activeMouse";
      function en(t) {
        return (
          (en =
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
          en(t)
        );
      }
      function nn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, on(i.key), i));
        }
      }
      function on(t) {
        var e = (function (t, e) {
          if ("object" != en(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != en(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == en(e) ? e : e + "";
      }
      var rn = (function () {
        return (
          (t = function t(e) {
            var n = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.staticStyles = "."
                .concat(tn, " {pointer-events:all} .")
                .concat(
                  tn,
                  ":hover {cursor:pointer} text::selection { background: none; }",
                )),
              (this.currentVariant = Pe.hZ),
              (this.styleElement = document.createElement("style")),
              e.insertBefore(this.styleElement, e.firstChild),
              this.update(),
              Pe.QY.bus.on("Variants:set", function (t) {
                return n.showVariant(t);
              }));
          }),
          (e = [
            {
              key: "addStyle",
              value: function (t) {
                ((this.staticStyles = this.staticStyles + " " + t),
                  this.update());
              },
            },
            {
              key: "update",
              value: function () {
                var t = this.staticStyles;
                ((t = ""
                  .concat(
                    (t += " [data-variant-id] { visibility: hidden }"),
                    " .",
                  )
                  .concat(tn, "[data-variant-id] { pointer-events:none }")),
                  (t = ""
                    .concat(t, ' [data-variant-id="')
                    .concat(this.currentVariant, '"] { visibility: visible }')),
                  (t = ""
                    .concat(t, " .")
                    .concat(tn, '[data-variant-id="')
                    .concat(this.currentVariant, '"] { pointer-events:all }')),
                  (this.styleElement.innerHTML = t));
              },
            },
            {
              key: "showVariant",
              value: function (t) {
                ((this.currentVariant = t), this.update());
              },
            },
          ]) && nn(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function an(t) {
        return (
          (an =
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
          an(t)
        );
      }
      function un(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, cn(i.key), i));
        }
      }
      function cn(t) {
        var e = (function (t, e) {
          if ("object" != an(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != an(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == an(e) ? e : e + "";
      }
      var sn = (function () {
        return (
          (t = function t(e, n, i, o) {
            var r = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.toString = function () {
                return ""
                  .concat(Math.round(r.x1), " : ")
                  .concat(Math.round(r.y1), " - ")
                  .concat(Math.round(r.x2), " : ")
                  .concat(Math.round(r.y2), " / ")
                  .concat(Math.round(r.width), " x ")
                  .concat(Math.round(r.height));
              }),
              this.setup(e, n, i, o));
          }),
          (e = [
            {
              key: "x1",
              get: function () {
                return this.left;
              },
            },
            {
              key: "y1",
              get: function () {
                return this.bottom;
              },
            },
            {
              key: "x2",
              get: function () {
                return this.right;
              },
            },
            {
              key: "y2",
              get: function () {
                return this.top;
              },
            },
            {
              key: "width",
              get: function () {
                return this.right - this.left;
              },
            },
            {
              key: "height",
              get: function () {
                return this.top - this.bottom;
              },
            },
            {
              key: "location1",
              get: function () {
                return { x: this.left, y: this.bottom };
              },
            },
            {
              key: "location2",
              get: function () {
                return { x: this.right, y: this.top };
              },
            },
            {
              key: "normalize",
              value: function () {
                this.setup(this.left, this.bottom, this.right, this.top);
              },
            },
            {
              key: "setup",
              value: function (t, e, n, i) {
                ((this.left = Math.min(t, n)),
                  (this.bottom = Math.min(e, i)),
                  (this.right = Math.max(t, n)),
                  (this.top = Math.max(e, i)));
              },
            },
          ]) && un(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function ln(t, e) {
        return (e.normalize(), hn(t.location1, e) && hn(t.location2, e));
      }
      function hn(t, e) {
        return t.x >= e.x1 && t.y >= e.y1 && t.x <= e.x2 && t.y <= e.y2;
      }
      function fn(t) {
        return (
          (fn =
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
          fn(t)
        );
      }
      function dn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, vn(i.key), i));
        }
      }
      function vn(t) {
        var e = (function (t, e) {
          if ("object" != fn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != fn(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == fn(e) ? e : e + "";
      }
      var mn = (function () {
          return (
            (t = function t(e) {
              var n = this;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.size = { width: 0, height: 0 }),
                (this.displayed = !1),
                (this.onWindowResize = function () {
                  var t = n.size.width,
                    e = n.size.height;
                  if (
                    0 === n.workspace.clientHeight ||
                    0 === n.workspace.clientWidth
                  )
                    ((n.displayed = !1), n.emit("hidden"));
                  else {
                    if (
                      ((n.size.width = n.workspace.clientWidth),
                      (n.size.height = n.workspace.clientHeight),
                      !n.displayed &&
                        ((n.displayed = !0),
                        n.emit("shown"),
                        e === n.size.height && t === n.size.width))
                    )
                      return;
                    0 !== t && n.emit("didSizeChange", n.size.width / t);
                  }
                }),
                (this.ee = window.__CORE__.createEventEmmiterInstance()),
                (this.workspace = e),
                this.initEvents(e),
                (this.workspace.clientHeight > 0 ||
                  this.workspace.clientWidth > 0) &&
                  ((this.size.height = this.workspace.clientHeight),
                  (this.size.width = this.workspace.clientWidth),
                  (this.displayed = !0)));
            }),
            (e = [
              {
                key: "once",
                value: function (t, e) {
                  return this.ee.once(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  return this.ee.on(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  return this.ee.off(t, e);
                },
              },
              {
                key: "eventNames",
                value: function () {
                  return this.ee.eventNames();
                },
              },
              {
                key: "emit",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                  return this.ee.emit(t, e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.workspace &&
                    (this.releaseEvents(this.workspace),
                    (this.workspace = null));
                },
              },
              {
                key: "initEvents",
                value: function (t) {
                  t && window.addEventListener("resize", this.onWindowResize);
                },
              },
              {
                key: "releaseEvents",
                value: function (t) {
                  t &&
                    window.removeEventListener("resize", this.onWindowResize);
                },
              },
            ]),
            e && dn(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        pn = n(89242),
        yn = n(46607),
        gn = n(44047),
        bn = n(89519),
        wn = n(46254),
        Sn = n(25050),
        En = Sn.Z.hasLicense(Sn.Z.names.KillSwitchCmpNewSchObjectKinds),
        kn = [
          pn.k.SCH_RULE,
          pn.k.SCH_NET_CLASS,
          pn.k.SCH_DIFFERENTIAL_PAIR,
          pn.k.SCH_COMPONENT_CLASS,
          pn.k.SCH_DIFF_PAIR_CLASS,
        ],
        Cn = function (t) {
          return En || !kn.includes(t);
        };
      function Pn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      var An = function (t) {
          return !t.DocumentId || -1 === t.DocumentId.indexOf("@");
        },
        Tn = function (t) {
          return "NotChanged" !== t.ModificationKind;
        },
        xn = function (t) {
          var e;
          return null !== (e = t.ObjectHandle) && void 0 !== e
            ? e
            : (0, bn.p)();
        },
        Mn = function (t) {
          return t.map(function (t) {
            return {
              name: wn.hN[t.PropertyName] || t.PropertyName,
              oldValue: t.OldValue,
              newValue: t.NewValue,
            };
          });
        },
        On = function (t) {
          return {
            comment: t.Comment,
            description: t.Description,
            designItemId: t.DesignItemId,
            footprintDescription: "",
            footprintName: t.Footprint,
            itemGuid: "",
            itemRevisionGuid: "",
            layerId: void 0,
            location: "",
            rotation: void 0,
            vaultGuid: "",
          };
        },
        In = function (t) {
          return (
            t.ObjectKind === pn.k.SCH_DIFFERENTIAL_PAIR ||
            pn.N.includes(t.ObjectKind)
          );
        },
        Ln = function (t) {
          return In(t)
            ? t.DisplayText
            : t.ObjectKind === pn.k.SCH_RULE
              ? t.DisplayText.split(" [")[0]
              : t.Designator;
        },
        Dn = function t(e, n) {
          var i,
            o,
            r,
            a = [],
            u = [],
            c = [],
            s = [];
          return (
            null === (i = e.Items) ||
              void 0 === i ||
              i.map(function (n) {
                Tn(n)
                  ? (function (t) {
                      return t.ObjectKind === pn.k.SCH_PARAMETER;
                    })(n)
                    ? (a.push(t(n)), c.push(n))
                    : u.push(t(n))
                  : In(e) && s.push(t(n));
              }),
            {
              displayText: e.DisplayText,
              name: Ln(e),
              changedProps: Mn(
                null !== (o = e.ChangedProperties) && void 0 !== o ? o : [],
              ),
              changedParams:
                ((r = c),
                r.reduce(function (t, e) {
                  var n;
                  if ("Updated" === e.ModificationKind) {
                    var i =
                      null === (n = e.ChangedProperties) || void 0 === n
                        ? void 0
                        : n.find(function (t) {
                            return t.PropertyName === wn.Nd.VALUE;
                          });
                    i &&
                      t.push({
                        name: e.DisplayText,
                        oldValue: i.OldValue,
                        newValue: i.NewValue,
                      });
                  } else
                    t.push({
                      name: e.DisplayText,
                      oldValue:
                        "Removed" === e.ModificationKind ? e.Value : null,
                      newValue: "Added" === e.ModificationKind ? e.Value : null,
                    });
                  return t;
                }, [])),
              modificationKind: e.ModificationKind,
              objectHandle: xn(e),
              objectKind: e.ObjectKind,
              props: [],
              items: u,
              notChangedItems: s,
              params: a,
              metadata: On(e),
              documentId: e.DocumentId || n,
              filterTags: [],
            }
          );
        },
        jn = function (t, e, n) {
          var i, o;
          return (
            !!(null === (i = null == t ? void 0 : t.Items) || void 0 === i
              ? void 0
              : i.some(function (t) {
                  return t.DocumentId === e;
                })) &&
            (t.ModificationKind !== gn.bB.Updated ||
              !!(null === (o = null == t ? void 0 : t.ChangedProperties) ||
              void 0 === o
                ? void 0
                : o.length) ||
              n.some(function (t) {
                return t.DocumentId === e && "Net Label" !== t.ObjectKind;
              }))
          );
        },
        _n = function (t) {
          var e;
          return null === (e = t.Documents) || void 0 === e
            ? void 0
            : e.reduce(function (t, e) {
                if (e.Items) {
                  var n = e.Items.filter(function (t) {
                    return (function (t) {
                      return An(t) && Tn(t) && Cn(t.ObjectKind);
                    })(t);
                  }).map(function (t) {
                    return Dn(t, e.Id);
                  });
                  n.length &&
                    t.push.apply(
                      t,
                      (function (t) {
                        if (Array.isArray(t)) return Pn(t);
                      })((i = n)) ||
                        (function (t) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != t[Symbol.iterator]) ||
                            null != t["@@iterator"]
                          )
                            return Array.from(t);
                        })(i) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return Pn(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return (
                              "Object" === n &&
                                t.constructor &&
                                (n = t.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(t)
                                : "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n,
                                    )
                                  ? Pn(t, e)
                                  : void 0
                            );
                          }
                        })(i) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        })(),
                    );
                }
                var i;
                return t;
              }, []);
        };
      function Nn(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Bn(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Bn(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Bn(t, e)
                    : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Bn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      var Rn = (0, yn.Q_)("schCompareStore", function () {
        var t = (0, S.ref)(),
          e = (0, S.ref)(),
          n = (0, S.ref)(new Map()),
          i = (0, S.ref)(new Map()),
          o = (0, S.ref)(),
          r = (0, S.ref)(),
          a = (0, S.ref)(),
          u = (0, S.ref)(),
          c = (0, S.ref)(),
          s = (0, S.ref)(new Map()),
          l = (0, S.ref)(!1),
          h = (0, S.computed)(function () {
            return e.value
              ? ((t = e.value),
                null === (n = t.Nets) || void 0 === n
                  ? void 0
                  : n.reduce(function (e, n) {
                      if (n.ModificationKind !== gn.bB.NotChanged) {
                        var i = [],
                          o = [];
                        (n.Items.forEach(function (t) {
                          An(t) && (Tn(t) ? i.push(t) : o.push(t));
                        }),
                          (i.length || n.ChangedProperties.length) &&
                            e.push(
                              (function (t, e, n, i) {
                                return {
                                  displayText: t.DisplayText,
                                  name: t.DisplayText,
                                  changedProps: t.ChangedProperties
                                    ? Mn(t.ChangedProperties)
                                    : [],
                                  changedParams: [],
                                  modificationKind: t.ModificationKind,
                                  objectHandle: (0, bn.p)(),
                                  objectKind: t.ObjectKind,
                                  props: [],
                                  items: n.map(function (t) {
                                    return Dn(t);
                                  }),
                                  notChangedItems: i.map(function (t) {
                                    return Dn(t);
                                  }),
                                  params: [],
                                  metadata: null,
                                  documents:
                                    null == e
                                      ? void 0
                                      : e.reduce(function (e, i) {
                                          var o;
                                          return (
                                            i.Id &&
                                              (null ===
                                                (o =
                                                  null == t
                                                    ? void 0
                                                    : t.Items) || void 0 === o
                                                ? void 0
                                                : o.some(function (t) {
                                                    return (
                                                      i.Id === t.DocumentId
                                                    );
                                                  })) &&
                                              e.push({
                                                id: i.Id,
                                                name: i.Document,
                                                isModified: jn(t, i.Id, n),
                                              }),
                                            e
                                          );
                                        }, []),
                                  filterTags: [],
                                };
                              })(n, t.Documents, i, o),
                            ));
                      }
                      return e;
                    }, []))
              : [];
            var t, n;
          }),
          f = (0, S.computed)(function () {
            return e.value ? _n(e.value) : [];
          }),
          d = (0, S.computed)(function () {
            if (t.value) return i.value.get(t.value);
          }),
          v = function (t, e) {
            var n = i.value.get(t) || new Map();
            (n.set(e.id, e), i.value.set(t, n));
          },
          m = function (e) {
            var n, o;
            if (t.value) {
              var r =
                null ===
                  (o =
                    null === (n = i.value) || void 0 === n
                      ? void 0
                      : n.get(t.value)) || void 0 === o
                  ? void 0
                  : o.get(e);
              if (r && r.boundElement && r.boundElement.selectedPath)
                return r.boundElement;
            }
          };
        return {
          documentId: t,
          metadata: e,
          nets: h,
          svg: o,
          scene: a,
          components: f,
          activeObjectsGroup: u,
          boundsMap: s,
          selectionEnabled: l,
          svgPoint: c,
          activeObjectsMapByDocument: d,
          clearActiveObjects: function () {
            n.value.clear();
          },
          updateActiveObjectsBounds: function (t) {
            var e, i;
            null ===
              (i =
                null === (e = n.value) || void 0 === e ? void 0 : e.get(t)) ||
              void 0 === i ||
              i.forEach(function (e) {
                (e.updateBoundRectangles(),
                  v(t, e),
                  e.parts &&
                    e.parts.forEach(function (e) {
                      v(t, e);
                    }));
              });
          },
          setActiveObjectsVariantBounds: function (e) {
            var i, o;
            t.value &&
              (null ===
                (o =
                  null === (i = n.value) || void 0 === i
                    ? void 0
                    : i.get(t.value)) ||
                void 0 === o ||
                o.forEach(function (t) {
                  return t.setBound(e);
                }));
          },
          setupDocument: function (e) {
            var i, h, f, d, v, m, p, y;
            if (
              (console.log("Selection:SetupDocument", {
                documentId: e.documentId,
                activeObjects: n.value,
              }),
              s.value.clear(),
              e.documentId)
            ) {
              if (
                ((l.value = !0),
                (t.value = e.documentId),
                (r.value = e.channelId),
                (c.value = e.svg.createSVGPoint()),
                (a.value = e.scene),
                (o.value = e.svg),
                (u.value = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                u.value)
              ) {
                u.value.id =
                  (null === (i = a.value) || void 0 === i ? void 0 : i.id) +
                  "ActiveObjects";
                for (
                  var g =
                      null !==
                        (f =
                          null === (h = a.value) || void 0 === h
                            ? void 0
                            : h.children.length) && void 0 !== f
                        ? f
                        : 0,
                    b = 0;
                  b < g;
                  b++
                ) {
                  var w =
                    null === (d = a.value) || void 0 === d
                      ? void 0
                      : d.children[b];
                  if (
                    (null == w ? void 0 : w.id) ===
                    (null === (v = u.value) || void 0 === v ? void 0 : v.id)
                  ) {
                    null === (m = a.value) || void 0 === m || m.removeChild(w);
                    break;
                  }
                }
              }
              null ===
                (y =
                  null === (p = n.value) || void 0 === p
                    ? void 0
                    : p.get(t.value)) ||
                void 0 === y ||
                y.forEach(function (t) {
                  t.updateScene(o.value, u.value, tn, function (e) {
                    s.value.set(e, t);
                  });
                });
            }
          },
          addActiveObject: function (t, e) {
            if (t && e) {
              var i = n.value.get(t);
              (i || (i = []), i.push(e), n.value.set(t, i));
            }
          },
          updateEnabledState: function (t) {
            (console.log("Selection:UpdateEnabledState", { enabled: t }),
              (l.value = t),
              u.value && (u.value.style.display = t ? "" : "none"));
          },
          getActiveObjectBoundById: m,
          getActiveObjectsBoundsForItem: function (t) {
            var e = [],
              n = m(t.objectHandle);
            return (
              n && e.push(n),
              []
                .concat(Nn(t.items), Nn(t.notChangedItems || []))
                .forEach(function (t) {
                  var n = m(t.objectHandle);
                  n && e.push(n);
                }),
              e
            );
          },
        };
      });
      function zn(t, e, n) {
        return (
          (e = Hn(e)),
          (function (t, e) {
            if (e && ("object" == Vn(e) || "function" == typeof e)) return e;
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
            Gn()
              ? Reflect.construct(e, n || [], Hn(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Gn() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Gn = function () {
          return !!t;
        })();
      }
      function Hn(t) {
        return (
          (Hn = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Hn(t)
        );
      }
      function Yn(t, e) {
        return (
          (Yn = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          Yn(t, e)
        );
      }
      function Vn(t) {
        return (
          (Vn =
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
          Vn(t)
        );
      }
      function Fn(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Wn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Xn(i.key), i));
        }
      }
      function Un(t, e, n) {
        return (
          e && Wn(t.prototype, e),
          n && Wn(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Xn(t) {
        var e = (function (t, e) {
          if ("object" != Vn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Vn(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Vn(e) ? e : e + "";
      }
      var Kn = Rn(),
        Zn = (0, yn.Jk)(Kn).activeObjectsGroup,
        qn = Kn.setupDocument,
        Qn = Kn.getActiveObjectsBoundsForItem;
      function $n(t, e) {
        return "EMPTY" === t
          ? new ti()
          : "ERROR" === t
            ? new ei(e())
            : new ni(e());
      }
      Kn.getActiveObjectBoundById;
      var Jn = function (t, e) {
          Pe.QY.bus.emit(t, e);
        },
        ti = (function () {
          return Un(
            function t() {
              (Fn(this, t),
                (this.errorState = null),
                (this.state = { zoom: 0, top: 0, left: 0 }),
                (this.useAnimatedZoomToFit = !1));
            },
            [
              {
                key: "type",
                get: function () {
                  return "EMPTY";
                },
              },
              {
                key: "documentId",
                get: function () {
                  return "";
                },
              },
              {
                key: "uniqueId",
                get: function () {
                  return "";
                },
              },
              {
                key: "channelId",
                get: function () {
                  return 0;
                },
              },
              {
                key: "render",
                value: function () {
                  return Promise.resolve();
                },
              },
              { key: "zoom", value: function () {} },
              {
                key: "zoomToFit",
                value: function () {
                  return Promise.resolve();
                },
              },
              { key: "move", value: function () {} },
              { key: "destroy", value: function () {} },
            ],
          );
        })(),
        ei = (function (t) {
          function e(t) {
            var n;
            return (
              Fn(this, e),
              (n = zn(this, e)),
              setTimeout(function () {
                return Jn("SchCompareEngine:didDocumentAttachError", {
                  error: t.errorState,
                  documentId: t.documentId,
                });
              }, 0),
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
                e && Yn(t, e));
            })(e, t),
            Un(e)
          );
        })(ti),
        ni = (function () {
          return Un(
            function t(e) {
              var n = this;
              (Fn(this, t),
                (this.position = { x: 0, y: 0 }),
                (this.originSize = { width: 0, height: 0 }),
                (this.currentSize = { width: 0, height: 0 }),
                (this.zoomRelativePoint = { x: 0, y: 0 }),
                (this.scale = 100),
                (this.fitToZoomNeed = !1),
                (this.logger = Pe.QY.createLogger("SchDocumentRenderer")),
                (this.maskPath = null),
                (this.selectMask = null),
                (this.selectBound = null),
                (this.errorState = null),
                (this.useAnimatedZoomToFit = !1),
                (this.onDrawSelection = function (t) {
                  (n.logger.LogDebug("Draw selection"),
                    console.log("Renderer:onDrawSelection", t.items));
                  var e = 0,
                    i = 0,
                    o = 0,
                    r = 0,
                    a = void 0;
                  if (
                    (t.items.forEach(function (t) {
                      var u = null == t ? void 0 : t.item,
                        c = null == t ? void 0 : t.subItems;
                      (null == u ? void 0 : u.objectKind) === pn.k.SCH_NET &&
                        c.length &&
                        n.outlineItemByModificationKind(c[0]);
                      var s = Qn(u);
                      (console.log(
                        "Renderer:onDrawSelection resolved active objects",
                        s,
                      ),
                        s.forEach(function (t) {
                          t && n.drawSelection(t);
                        }),
                        (a =
                          (null == u ? void 0 : u.objectKind) !== pn.k.SCH_NET
                            ? u
                            : (null == c ? void 0 : c.length)
                              ? c[0]
                              : u),
                        Qn(a).forEach(function (t) {
                          t &&
                            t.selectedPath &&
                            t.selectedPath.forEach(function (t) {
                              ((i = i ? Math.min(i, t.x) : t.x),
                                (e = e ? Math.min(e, t.y) : t.y),
                                (o = o
                                  ? Math.max(o, t.x + t.width)
                                  : t.x + t.width),
                                (r = r
                                  ? Math.max(r, t.y + t.height)
                                  : t.y + t.height));
                            });
                        }));
                    }),
                    t.fit && o - i && r - e)
                  ) {
                    var u = { x: i, y: e, width: o - i, height: r - e },
                      c =
                        Math.max(u.width, u.height) < 200
                          ? { Component: 0.2, Net: 0.5, Pin: 0.03 }[
                              null == a ? void 0 : a.objectKind
                            ]
                          : 0.85;
                    (console.log("Zoom:", a, c, u), n.zoomToFit(u));
                  }
                }),
                (this.drawHighlight = function (t) {
                  var e = t.localName;
                  if ("rect" === e)
                    (t.setAttribute("stroke-width", "2px"),
                      t.setAttribute("stroke", "#0265DC"));
                  else if ("line" === e || "polyline" === e) {
                    var i = "stroke-width",
                      o = window.getComputedStyle(t)[i],
                      r = 1;
                    (o.match(/^\-?\d+(\.?\d*)px$/) &&
                      (r = parseFloat(o.substring(0, o.length - 2))),
                      t.setAttribute(i, "".concat(r + 2, "px")));
                  }
                  n.highlightGroup.appendChild(t);
                }),
                (this.clearHighlight = function () {
                  for (; n.highlightGroup.firstChild; )
                    n.highlightGroup.removeChild(n.highlightGroup.firstChild);
                }),
                this.logger.LogDebug("Create for " + e.documentId),
                (this.id = e.documentId),
                (this.unique = e.uniqueId),
                (this.channel = e.channelId),
                (this.workspace = e.workspace),
                (this.svg = e.workspace.appendChild(e.node)),
                (this.svg.style.opacity = "0"),
                (this.scene = this.svg.getElementById("scene")),
                (this.maskId = "".concat(this.scene.id, "_selection_mask")),
                (this.originSize.width = this.svg.width.baseVal.value),
                (this.originSize.height = this.svg.height.baseVal.value),
                this.svg.setAttribute(
                  "viewBox",
                  "0 0 "
                    .concat(this.svg.width.baseVal.value, " ")
                    .concat(this.svg.height.baseVal.value),
                ),
                this.svg.setAttribute("width", "100%"),
                this.svg.setAttribute("height", "100%"),
                (this.spaceVisibilityService =
                  this.createSpaceVisibilityService(this.workspace)),
                (this.selectionMaskGroup = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.selectionMaskGroup.id = this.scene.id + "SelectionMask"),
                this.scene.appendChild(this.selectionMaskGroup),
                (this.selectionGroup = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.selectionGroup.id = this.scene.id + "Selection"),
                this.scene.appendChild(this.selectionGroup),
                (this.highlightGroup = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.highlightGroup.id = this.scene.id + "Highlight"),
                this.scene.appendChild(this.highlightGroup),
                this.createMask(),
                (this.overlay = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.overlay.id = this.scene.id + "Overlay"),
                this.scene.appendChild(this.overlay));
              var i = new CustomEvent("didTransformChange", {
                detail: this.scene.transform,
              });
              ((this.overlay.didTransformChangeEvent = i),
                (this.onTransformUpdate = function () {
                  return n.overlay.dispatchEvent(i);
                }),
                (this.styleManager = new rn(this.svg)),
                setTimeout(function (t) {
                  return Jn("SchCompareEngine:didDocumentAttach", {
                    workspace: n.workspace,
                    svg: n.svg,
                    styleManager: n.styleManager,
                    overlay: n.overlay,
                    uniqueId: n.uniqueId,
                    channelId: n.channelId,
                    documentId: n.documentId,
                    documentWidth: n.originSize.width,
                    documentHeight: n.originSize.height,
                  });
                }, 0),
                (this.clearSelection = this.clearSelection.bind(this)),
                this.doSetupChannel(e.metadata.LogicalChanges),
                Pe.QY.bus.on(
                  "SchCompareEngine:clearHighlight",
                  this.clearHighlight,
                ),
                Pe.QY.bus.on(
                  "SchCompareEngine:drawHighlight",
                  this.drawHighlight,
                ),
                Pe.QY.bus.on(
                  "SchCompareEngine:clearSelection",
                  this.clearSelection,
                ),
                Pe.QY.bus.on(
                  "SchCompareEngine:drawSelection",
                  this.onDrawSelection,
                ));
            },
            [
              {
                key: "type",
                get: function () {
                  return "DEFAULT";
                },
              },
              {
                key: "documentId",
                get: function () {
                  return this.id;
                },
              },
              {
                key: "uniqueId",
                get: function () {
                  return this.unique;
                },
              },
              {
                key: "channelId",
                get: function () {
                  return this.channel;
                },
              },
              {
                key: "state",
                get: function () {
                  return {
                    zoom: this.scale,
                    top: this.position.y,
                    left: this.position.x,
                  };
                },
                set: function (t) {
                  ((this.scale = t.zoom),
                    (this.position.x = t.left),
                    (this.position.y = t.top),
                    this.updateTransform());
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  return new Promise(function (e) {
                    ((t.svg.style.opacity = "1"),
                      t.spaceVisibilityService.onWindowResize(),
                      qn(t),
                      Zn.value && t.scene.insertBefore(Zn.value, t.overlay),
                      e());
                  });
                },
              },
              {
                key: "zoom",
                value: function (t, e, n) {
                  this.setZoomRelativePoint(t, e);
                  var i = (this.scale * (100 - n)) / 100;
                  (this.doZoom(i),
                    Jn("SchCompareEngine:documentZoom", this.documentId));
                },
              },
              {
                key: "zoomToFit",
                value: function (t, e) {
                  var n = this;
                  return new Promise(function (i) {
                    new Promise(function (i) {
                      t
                        ? i(Object.assign({}, t))
                        : (((e = null != e ? e : [0, 0, 0, 0])[3] -=
                            window.__CORE__.settings.zoomOffsets[3]),
                          n.spaceVisibilityService.displayed
                            ? i({
                                x: 0,
                                y: 0,
                                width: n.scene.getBBox().width,
                                height: n.scene.getBBox().height,
                              })
                            : (n.fitToZoomNeed = !0));
                    })
                      .then(function (t) {
                        return n.zoomRectangleToFit(
                          t.x,
                          t.y,
                          t.width,
                          t.height,
                          e,
                        );
                      })
                      .then(function () {
                        (n.updateTransform(), i());
                      })
                      .catch(function (t) {
                        (n.logger.LogError(t.message), i());
                      });
                  });
                },
              },
              {
                key: "move",
                value: function (t, e) {
                  var n = Math.min(
                    this.spaceVisibilityService.size.width /
                      this.scene.getBBox().width,
                    this.spaceVisibilityService.size.height /
                      this.scene.getBBox().height,
                  );
                  n &&
                    ((this.position.x += t / n),
                    (this.position.y += e / n),
                    this.updateTransform(),
                    Jn("SchCompareEngine:documentMove", this.documentId));
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this.logger.LogDebug("Destroy for " + this.id),
                    Pe.QY.bus.off(
                      "SchCompareEngine:clearHighlight",
                      this.clearHighlight,
                    ),
                    Pe.QY.bus.off(
                      "SchCompareEngine:drawHighlight",
                      this.drawHighlight,
                    ),
                    Pe.QY.bus.off(
                      "SchCompareEngine:clearSelection",
                      this.clearSelection,
                    ),
                    Pe.QY.bus.off(
                      "SchCompareEngine:drawSelection",
                      this.onDrawSelection,
                    ),
                    Jn("SchCompareEngine:didDocumentDettach", null));
                  try {
                    (this.spaceVisibilityService.destroy(),
                      this.workspace &&
                        (this.workspace.removeChild(this.svg),
                        (this.workspace = null)));
                  } catch (t) {
                    this.logger.LogError(
                      "Destroy renderer error. ".concat(t.message),
                    );
                  }
                },
              },
              {
                key: "outlineItemByModificationKind",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10;
                  if (
                    (null == t ? void 0 : t.modificationKind) &&
                    "Pin" === (null == t ? void 0 : t.objectKind)
                  ) {
                    var n = { Added: "#4caf50", Removed: "#f44336" }[
                      t.modificationKind
                    ];
                    if (n) {
                      var i = 0,
                        o = 0,
                        r = 0,
                        a = 0,
                        u = Qn(t);
                      if (
                        (u &&
                          u.forEach(function (t) {
                            var e;
                            null === (e = t.selectedPath) ||
                              void 0 === e ||
                              e.forEach(function (t) {
                                ((i = i ? Math.min(i, t.x) : t.x),
                                  (o = o ? Math.min(o, t.y) : t.y),
                                  (r = r
                                    ? Math.max(r, t.x + t.width)
                                    : t.x + t.width),
                                  (a = a
                                    ? Math.max(a, t.y + t.height)
                                    : t.y + t.height));
                              });
                          }),
                        i && o && r && a)
                      ) {
                        var c = Math.min(i, r) - e,
                          s = Math.max(i, r) - Math.min(i, r) + 2 * e,
                          l = Math.min(o, a) - e,
                          h = Math.max(o, a) - Math.min(o, a) + 2 * e,
                          f = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "rect",
                          );
                        (f.setAttribute("x", String(c)),
                          f.setAttribute("y", String(l)),
                          f.setAttribute("width", String(s)),
                          f.setAttribute("height", String(h)),
                          f.setAttribute("stroke", n),
                          f.setAttribute("stroke-opacity", "0.8"),
                          f.setAttribute("stroke-dasharray", "3,3"),
                          this.selectionGroup.appendChild(f));
                      }
                    }
                  }
                },
              },
              {
                key: "createMask",
                value: function () {
                  var t = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "defs",
                    ),
                    e = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "mask",
                    );
                  (e.setAttribute("id", this.maskId),
                    e.setAttribute("maskContentUnits", "userSpaceOnUse"),
                    t.appendChild(e));
                  var n = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                  );
                  (n.setAttribute("width", "".concat(this.originSize.width)),
                    n.setAttribute("height", "".concat(this.originSize.height)),
                    n.setAttribute("fill", "white"),
                    e.appendChild(n),
                    (this.maskPath = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path",
                    )),
                    this.maskPath.setAttribute("fill", "black"),
                    e.appendChild(this.maskPath),
                    this.scene.insertBefore(t, this.scene.firstChild),
                    (this.selectMask = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "rect",
                    )),
                    this.selectMask.setAttribute(
                      "width",
                      "".concat(this.originSize.width),
                    ),
                    this.selectMask.setAttribute(
                      "height",
                      "".concat(this.originSize.height),
                    ),
                    this.selectMask.setAttribute(
                      "mask",
                      "url(#".concat(this.maskId, ")"),
                    ),
                    this.selectMask.setAttribute("fill", "grey"),
                    this.selectMask.setAttribute("opacity", "0.3"),
                    (this.selectMask.style.visibility = "hidden"),
                    this.selectionMaskGroup.appendChild(this.selectMask),
                    (this.selectBound = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path",
                    )),
                    this.selectBound.setAttribute("stroke", "#147AF3"),
                    this.selectBound.setAttribute("stroke-width", "3px"),
                    this.selectBound.setAttribute(
                      "mask",
                      "url(#".concat(this.maskId, ")"),
                    ),
                    (this.selectBound.style.visibility = "hidden"),
                    this.selectionMaskGroup.appendChild(this.selectBound));
                },
              },
              {
                key: "drawSelection",
                value: function (t) {
                  if (this.maskPath && t && t.selectedPath) {
                    var e = t.selectedPath
                        .map(function (t) {
                          return "M"
                            .concat(t.x, " ")
                            .concat(t.y, " H")
                            .concat(t.x + t.width, " V")
                            .concat(t.y + t.height, " H")
                            .concat(t.x, " Z");
                        })
                        .join(" "),
                      n = this.maskPath.getAttribute("d");
                    (n
                      ? this.maskPath.setAttribute("d", n + " " + e)
                      : this.maskPath.setAttribute("d", e),
                      this.selectBound &&
                        (this.selectBound.setAttribute(
                          "d",
                          this.maskPath.getAttribute("d"),
                        ),
                        (this.selectBound.style.visibility = "visible")),
                      this.selectMask &&
                        (this.selectMask.style.visibility = "visible"));
                  }
                },
              },
              {
                key: "clearSelection",
                value: function (t) {
                  if (this.maskPath)
                    for (
                      this.maskPath.setAttribute("d", ""),
                        t.update ||
                          (this.selectBound &&
                            (this.selectBound.style.visibility = "hidden"),
                          this.selectMask &&
                            (this.selectMask.style.visibility = "hidden"));
                      this.selectionGroup.firstChild;
                    )
                      this.selectionGroup.removeChild(
                        this.selectionGroup.firstChild,
                      );
                },
              },
              {
                key: "createSpaceVisibilityService",
                value: function (t) {
                  var e = this,
                    n = new mn(t);
                  return (
                    n.on("didSizeChange", function () {
                      ((e.currentSize.width = n.size.width),
                        (e.currentSize.height = n.size.height),
                        setTimeout(function () {
                          e.onTransformUpdate && e.onTransformUpdate();
                        }, 0));
                    }),
                    n.on("shown", function () {
                      (e.fitToZoomNeed &&
                        ((e.fitToZoomNeed = !1), e.zoomToFit(null)),
                        (e.currentSize.width = n.size.width),
                        (e.currentSize.height = n.size.height),
                        setTimeout(function () {
                          e.onTransformUpdate && e.onTransformUpdate();
                        }, 0));
                    }),
                    n.on("hidden", function () {}),
                    n.displayed &&
                      ((this.currentSize.width = n.size.width),
                      (this.currentSize.height = n.size.height)),
                    n
                  );
                },
              },
              {
                key: "updateTransform",
                value: function () {
                  var t = "matrix("
                    .concat(this.scale / 100, " 0 0 ")
                    .concat(this.scale / 100, " ")
                    .concat(this.position.x, " ")
                    .concat(this.position.y, ")");
                  isNaN(this.scale) ||
                  isNaN(this.position.x) ||
                  isNaN(this.position.y)
                    ? this.logger.LogError("Transform value IsNAN")
                    : (this.scene.setAttribute("transform", t),
                      this.onTransformUpdate && this.onTransformUpdate());
                },
              },
              {
                key: "setZoomRelativePoint",
                value: function (t, e) {
                  ((this.zoomRelativePoint.x = t),
                    (this.zoomRelativePoint.y = e));
                },
              },
              {
                key: "zoomRectangleToFit",
                value: function (t, e, n, i, o) {
                  var r = this;
                  return new Promise(function (a, u) {
                    var c = r.scene.getBBox().width,
                      s = r.scene.getBBox().height;
                    if (c && s && n && 0 !== n && i && 0 !== i) {
                      var l = new sn(t, e, t + n, e + i),
                        h = (function (t, e, n, i) {
                          var o = window.__CORE__.settings.zoomPrecision,
                            r = window.__CORE__.settings.zoomMaxPrecision;
                          if (o == r) return i;
                          var a = (r - o) / r,
                            u = Math.round(a * t),
                            c = Math.round(a * e);
                          if (ln(i, n) && n.width <= u && n.height <= c)
                            return n;
                          var s = u / 10,
                            l = c / 10;
                          return (
                            (i.top += l),
                            (i.bottom -= l),
                            (i.left -= s),
                            (i.right += s),
                            (function (t, e, n, i) {
                              var o = t.left / 2 + t.right / 2,
                                r = t.top / 2 + t.bottom / 2,
                                a = Math.abs(t.right - t.left),
                                u = Math.abs(t.bottom - t.top);
                              (a < n && (a = n), u < i && (u = i));
                              var c = new sn(
                                o - a / 2,
                                r - u / 2,
                                o + a / 2,
                                r + u / 2,
                              );
                              return (
                                ln(c, e) ||
                                  (c.left < e.left &&
                                    ((c.left = e.left),
                                    (c.right = c.left + a),
                                    c.right > e.right && (c.right = e.right)),
                                  c.right > e.right &&
                                    ((c.right = e.right),
                                    (c.left = c.right - a),
                                    c.left < e.left && (c.left = e.left)),
                                  c.bottom < e.bottom &&
                                    ((c.bottom = e.bottom),
                                    (c.top = c.bottom + u),
                                    c.top > e.top && (c.top = e.top)),
                                  c.top > e.top &&
                                    ((c.top = e.top),
                                    (c.bottom = c.top - u),
                                    c.bottom < e.bottom &&
                                      (c.bottom = e.bottom))),
                                c
                              );
                            })(i, new sn(0, 0, t, e), u, c)
                          );
                        })(c, s, r.getVirtualRect(), l);
                      if (h) {
                        var f = {
                          lastX: r.position.x,
                          lastY: r.position.y,
                          lastScale: r.scale / 100,
                        };
                        ((o = (o = o && 4 === o.length ? o : [0, 0, 0, 0]).map(
                          function (t, e) {
                            return t + window.__CORE__.settings.zoomOffsets[e];
                          },
                        )),
                          Math.min(n / h.width, i / h.height) <
                            1 -
                              Math.max(
                                (o[1] + o[3]) /
                                  r.spaceVisibilityService.size.width,
                                (o[0] + o[2]) /
                                  r.spaceVisibilityService.size.height,
                              ) && (o = [0, 0, 0, 0]));
                        var d = o[1] + o[3],
                          v = o[0] + o[2],
                          m = r.spaceVisibilityService.size.width - d,
                          p = r.spaceVisibilityService.size.height - v,
                          y = Math.abs(Math.min(m / h.width, p / h.height)),
                          g = Math.min((m + d) / c, (p + v) / s);
                        r.scale = Math.round(100 * y) / g;
                        var b = window.__CORE__.settings.zoomCenter ? l : h,
                          w = (c * g - b.width * y - d) / 2,
                          S = (s * g - b.height * y - v) / 2;
                        ((r.position.x = (-b.left * y + w + o[1]) / g),
                          (r.position.y = (-b.bottom * y + S + o[0]) / g),
                          a(f));
                      }
                    }
                  });
                },
              },
              {
                key: "getVirtualRect",
                value: function () {
                  var t = this.scene.getBBox().width,
                    e = this.scene.getBBox().height,
                    n = this.spaceVisibilityService.size.width,
                    i = this.spaceVisibilityService.size.height,
                    o = Math.min(n / t, i / e),
                    r = (this.scale * o) / 100,
                    a = (n - t * Math.abs(o)) / 2,
                    u = (i - e * Math.abs(o)) / 2,
                    c = (-this.position.x * o - a) / r,
                    s = (-this.position.y * o - u) / r;
                  return new sn(c, s, c + n / r, s + i / r);
                },
              },
              {
                key: "animate",
                value: function (t, e, n, i) {
                  var o = this;
                  return new Promise(function (r) {
                    if (
                      o.useAnimatedZoomToFit &&
                      i &&
                      Math.min(
                        o.spaceVisibilityService.size.width /
                          o.scene.getBBox().width,
                        o.spaceVisibilityService.size.height /
                          o.scene.getBBox().height,
                      )
                    ) {
                      var a = o.position.x,
                        u = o.position.y,
                        c = o.scale / 100,
                        s = "0.4s",
                        l = "animateTransformTranslateSchSvg",
                        h = "animateTransformScaleSchSvg",
                        f = document.getElementById(l);
                      (f ||
                        ((f = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "animateTransform",
                        )).setAttribute("id", l),
                        f.setAttribute("attributeName", "transform"),
                        f.setAttribute("type", "translate"),
                        f.setAttribute("dur", s),
                        o.scene.appendChild(f)),
                        f.setAttribute("from", "".concat(t, ",").concat(e)),
                        f.setAttribute("to", "".concat(a, ",").concat(u)));
                      var d = document.getElementById(h);
                      (d ||
                        ((d = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "animateTransform",
                        )).setAttribute("id", h),
                        d.setAttribute("attributeName", "transform"),
                        d.setAttribute("type", "scale"),
                        d.setAttribute("dur", s),
                        d.setAttribute("additive", "sum"),
                        o.scene.appendChild(d)),
                        d.setAttribute("from", "".concat(n)),
                        d.setAttribute("to", "".concat(c)),
                        f.beginElement &&
                          d.beginElement &&
                          (d.beginElement(),
                          f.beginElement(),
                          (d.onEnd = function () {
                            o.logger.LogDebug("Animation end");
                          })));
                    }
                    r();
                  });
                },
              },
              {
                key: "checkZoomRelativePoint",
                value: function () {
                  -1 === this.zoomRelativePoint.x &&
                    -1 === this.zoomRelativePoint.y &&
                    ((this.zoomRelativePoint.x =
                      this.spaceVisibilityService.size.width / 2),
                    (this.zoomRelativePoint.y =
                      this.spaceVisibilityService.size.height / 2));
                },
              },
              {
                key: "getRelativePoint",
                value: function (t, e, n) {
                  return t < e ? e : t > n ? n : t;
                },
              },
              {
                key: "doZoom",
                value: function (t) {
                  var e = this.scene.getScreenCTM();
                  if (e) {
                    this.checkZoomRelativePoint();
                    var n = (t - this.scale) / 100,
                      i = this.scene.getBBox().width * n,
                      o = this.scene.getBBox().height * n,
                      r = e.e,
                      a = this.scene.getBBox().width * e.a,
                      u = e.f,
                      c = this.scene.getBBox().height * e.a,
                      s = this.getRelativePoint(
                        this.zoomRelativePoint.x,
                        r,
                        r + a,
                      ),
                      l = this.getRelativePoint(
                        this.zoomRelativePoint.y,
                        u,
                        u + c,
                      );
                    ((this.position.x -= (i * (s - r)) / a),
                      (this.position.y -= (o * (l - u)) / c),
                      (this.scale = t),
                      this.updateTransform(),
                      this.setZoomRelativePoint(-1, -1));
                  }
                },
              },
              {
                key: "doSetupChannel",
                value: function (t) {
                  var e = this;
                  if (null == t ? void 0 : t.channels) {
                    var n = null == t ? void 0 : t.components;
                    n &&
                      n.forEach(function (t) {
                        if (t.schId && t.channel === e.channel) {
                          var n = t.designator;
                          if (n) {
                            var i = n.lastIndexOf("(");
                            i > 0 && (n = n.substring(0, i));
                          }
                          e.setChannelDesignator(t.designatorId, n);
                        }
                      });
                  }
                },
              },
              {
                key: "setChannelDesignator",
                value: function (t, e) {
                  var n,
                    i = 0,
                    o = 0,
                    r = this.svg.getElementById(t);
                  r &&
                    Array.from(r.children).forEach(function (t) {
                      if ("text" === t.nodeName) {
                        var r = t;
                        if (0 === o) {
                          var a = r.textLength.baseVal.value;
                          ((n = "(".concat(t.textContent, ")")),
                            (t.textContent = e),
                            (i = r.textLength.baseVal.value - a),
                            o++);
                        } else if (1 === o) {
                          t.textContent = n;
                          var u = "translate(".concat(i, ",", 0, ")");
                          return void t.setAttribute("transform", u);
                        }
                      }
                    });
                },
              },
            ],
          );
        })();
      function ii(t) {
        return (
          (ii =
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
          ii(t)
        );
      }
      function oi(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, ri(i.key), i));
        }
      }
      function ri(t) {
        var e = (function (t, e) {
          if ("object" != ii(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != ii(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == ii(e) ? e : e + "";
      }
      function ai(t, e, n) {
        return (
          (e = ci(e)),
          (function (t, e) {
            if (e && ("object" == ii(e) || "function" == typeof e)) return e;
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
            ui()
              ? Reflect.construct(e, n || [], ci(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function ui() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (ui = function () {
          return !!t;
        })();
      }
      function ci(t) {
        return (
          (ci = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ci(t)
        );
      }
      function si(t, e) {
        return (
          (si = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          si(t, e)
        );
      }
      var li,
        hi = {
          where: function (t) {
            return ["Attach" === t.type];
          },
          to: "DOCUMENT_ATTACH",
        },
        fi = {
          IDLE: [
            {
              where: function (t) {
                return ["Setup" === t.type];
              },
              to: "SETUP",
            },
          ],
          SETUP: [hi],
          CRASHED: [hi],
          DOCUMENT_ATTACH: [
            {
              where: function (t) {
                return ["Dettach" === t.type];
              },
              to: "DOCUMENT_DETTACH",
            },
            {
              where: function (t) {
                return ["Error" === t.type];
              },
              to: "CRASHED",
              error: !0,
            },
          ],
          DOCUMENT_DETTACH: [hi],
        },
        di = (function (t) {
          function e(t) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((n = ai(this, e, ["IDLE", fi])).onSetup = function (t) {
                n.owner.doAttachToWorkspace(t.workspace);
              }),
              (n.onAttach = function (t) {
                n.owner.doAttachDocument(t.document);
              }),
              (n.onDettach = function () {
                n.owner.doDettachDocument();
              }),
              n.on("SETUP", n.onSetup),
              n.on("DOCUMENT_ATTACH", n.onAttach),
              n.on("DOCUMENT_DETTACH", n.onDettach),
              (n.owner = t),
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
                e && si(t, e));
            })(e, t),
            (n = e),
            (i = [
              {
                key: "setup",
                value: function (t) {
                  this.dispatch({ type: "Setup", workspace: t });
                },
              },
              {
                key: "attachDocument",
                value: function (t) {
                  this.dispatch({ type: "Attach", document: t });
                },
              },
              {
                key: "dettachDocument",
                value: function () {
                  this.dispatch({ type: "Dettach" });
                },
              },
            ]) && oi(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, i;
        })(c.Z),
        vi = (0, S.createTextVNode)(
          "No component or connectivity differences detected.",
        ),
        mi = (0, S.createTextVNode)(
          "Changes that are purely graphical are not included.",
        ),
        pi = n(77453),
        yi = { class: "no-compare-differences" },
        gi =
          ((li = function () {
            return (0, S.createElementVNode)(
              "div",
              { class: "no-compare-differences__header-overlay-fix" },
              null,
              -1,
            );
          }),
          (0, S.pushScopeId)("data-v-607f177a"),
          (li = li()),
          (0, S.popScopeId)(),
          li),
        bi = { class: "no-compare-differences__inner" },
        wi = { class: "no-compare-differences__wrapper" },
        Si = { class: "no-compare-differences__icon" },
        Ei = (0, S.createTextVNode)("No differences detected");
      const ki = (0, S.defineComponent)({
          setup: function (t) {
            return function (t, e) {
              return (
                (0, S.openBlock)(),
                (0, S.createElementBlock)("div", yi, [
                  gi,
                  (0, S.createElementVNode)("div", bi, [
                    (0, S.createElementVNode)("div", wi, [
                      (0, S.createElementVNode)("div", Si, [
                        (0, S.createVNode)((0, S.unref)(It._), {
                          name: "compare-32",
                          filled: "",
                        }),
                      ]),
                      (0, S.createVNode)(
                        (0, S.unref)(pi.A),
                        {
                          type: "large title",
                          class: "no-compare-differences__headline",
                        },
                        {
                          default: (0, S.withCtx)(function () {
                            return [
                              (0, S.renderSlot)(
                                t.$slots,
                                "default",
                                {},
                                function () {
                                  return [Ei];
                                },
                              ),
                            ];
                          }),
                          _: 3,
                        },
                      ),
                      (0, S.createVNode)(
                        (0, S.unref)(pi.A),
                        {
                          type: "paragraph",
                          class: "no-compare-differences__description",
                        },
                        {
                          default: (0, S.withCtx)(function () {
                            return [(0, S.renderSlot)(t.$slots, "description")];
                          }),
                          _: 3,
                        },
                      ),
                    ]),
                  ]),
                ])
              );
            };
          },
        }),
        Ci = {
          name: "NoDifferences",
          components: {
            NoCompareDifferences: (0, Dt.Z)(ki, [
              ["__scopeId", "data-v-607f177a"],
            ]),
          },
        },
        Pi = (0, Dt.Z)(Ci, [
          [
            "render",
            function (t, e, n, i, o, r) {
              var a = (0, S.resolveComponent)("NoCompareDifferences");
              return (
                (0, S.openBlock)(),
                (0, S.createBlock)(a, null, {
                  default: (0, S.withCtx)(function () {
                    return [vi];
                  }),
                  description: (0, S.withCtx)(function () {
                    return [mi];
                  }),
                  _: 1,
                })
              );
            },
          ],
        ]);
      function Ai(t) {
        return (
          (Ai =
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
          Ai(t)
        );
      }
      function Ti(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, xi(i.key), i));
        }
      }
      function xi(t) {
        var e = (function (t, e) {
          if ("object" != Ai(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Ai(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Ai(e) ? e : e + "";
      }
      var Mi = (function () {
        return (
          (t = function t(e) {
            var n = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.metadata = null),
              (this.renderStates = new Map()),
              (this.emptyDocumentRenederer = $n("EMPTY", function () {
                return null;
              })),
              (this.documentRenederer = this.emptyDocumentRenederer),
              (this.selectionService = e),
              (this.documentRenderState = new di(this)),
              (this.userInteractionService = new Qe()),
              this.userInteractionService.on("zoom", function (t) {
                n.documentRenederer.zoom(t.x, t.y, t.delta);
              }),
              this.userInteractionService.on("panMove", function (t) {
                n.documentRenederer.move(t.deltaX, t.deltaY);
              }),
              this.userInteractionService.on("select", function (t) {
                n.selectionService.selectByPoint(t);
              }),
              Pe.QY.bus.on("SchCompareEngine:zoomToFit", function (t) {
                return n.documentRenederer.zoomToFit(
                  t.rect,
                  t.changeScale,
                  t.margin,
                );
              }));
          }),
          (e = [
            {
              key: "isNoDifferences",
              value: function () {
                return (
                  !this.metadata.Nets.filter(function (t) {
                    return "NotChanged" !== t.ModificationKind;
                  }).length &&
                  !this.metadata.Documents.some(function (t) {
                    return !!t.Items.filter(function (t) {
                      return (
                        "NotChanged" !== t.ModificationKind && Cn(t.ObjectKind)
                      );
                    }).length;
                  })
                );
              },
            },
            {
              key: "doAttachToWorkspace",
              value: function (t) {
                var e = document.createElement("div");
                (e.setAttribute("id", "sch_document_viewer"),
                  e.setAttribute("oncontextmenu", "return false"));
                var n = e.style;
                ((n.width = "100%"),
                  (n.height = "100%"),
                  (n.position = "relative"),
                  (n.overflow = "hidden"),
                  (this.documentContainer = t.appendChild(e)),
                  this.isNoDifferences() && (0, S.createApp)(Pi).mount(e),
                  this.userInteractionService.attachToWorkspace(
                    this.documentContainer,
                  ));
              },
            },
            {
              key: "doAttachDocument",
              value: function (t) {
                var e = this;
                if (!this.isNoDifferences())
                  try {
                    if (null !== t.errorState) throw t.errorState;
                    var n = t.renderData.documentElement.cloneNode(!0);
                    ((this.documentRenederer = $n("DEFAULT", function () {
                      return {
                        workspace: e.documentContainer,
                        node: n,
                        uniqueId: t.uniqueId,
                        channelId: t.channelId,
                        documentId: t.id,
                        selectionService: e.selectionService,
                        metadata: e.metadata,
                      };
                    })),
                      (this.documentRenederer.useAnimatedZoomToFit = !0));
                  } catch (e) {
                    this.documentRenederer = $n("ERROR", function () {
                      return { errorState: e, documentId: t.id };
                    });
                  }
              },
            },
            {
              key: "doDettachDocument",
              value: function () {
                "EMPTY" !== this.documentRenederer.type &&
                  (this.saveState(),
                  this.documentRenederer.destroy(),
                  (this.documentRenederer = this.emptyDocumentRenederer));
              },
            },
            {
              key: "saveState",
              value: function () {
                "DEFAULT" === this.documentRenederer.type &&
                  this.renderStates.set(
                    this.documentRenederer.uniqueId,
                    this.documentRenederer.state,
                  );
              },
            },
            {
              key: "attachTo",
              value: function (t) {
                this.documentRenderState.setup(t);
              },
            },
            {
              key: "attach",
              value: function (t) {
                (this.documentRenederer &&
                  t.uniqueId === this.documentRenederer.uniqueId) ||
                  (this.documentRenderState.dettachDocument(),
                  this.documentRenderState.attachDocument(t));
              },
            },
            {
              key: "setPosition",
              value: function (t) {
                var e = this,
                  n = this.renderStates.get(t.id);
                return n
                  ? new Promise(function (t) {
                      ((e.documentRenederer.state = n), t());
                    })
                  : this.documentRenederer.zoomToFit(null);
              },
            },
            {
              key: "setMetadata",
              value: function (t) {
                this.metadata = t;
              },
            },
            {
              key: "render",
              value: function (t) {
                return (this.attach(t), this.documentRenederer.render());
              },
            },
            {
              key: "reset",
              value: function () {
                this.documentRenederer.zoomToFit(null);
              },
            },
          ]),
          e && Ti(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Oi(t) {
        return (
          (Oi =
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
          Oi(t)
        );
      }
      function Ii(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Li(i.key), i));
        }
      }
      function Li(t) {
        var e = (function (t, e) {
          if ("object" != Oi(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Oi(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Oi(e) ? e : e + "";
      }
      var Di = (function () {
        function t() {
          (!(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.x = 0),
            (this.y = 0),
            (this.width = 0),
            (this.height = 0));
        }
        return (
          (e = t),
          (n = [
            {
              key: "createSvgElement",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                  );
                return (
                  e.setAttribute("x", "".concat(this.x - t)),
                  e.setAttribute("y", "".concat(this.y - t)),
                  e.setAttribute("width", "".concat(this.width + 2 * t)),
                  e.setAttribute("height", "".concat(this.height + 2 * t)),
                  e
                );
              },
            },
          ]),
          (i = [
            {
              key: "fromBox",
              value: function (e, n) {
                var i = new t();
                return (
                  e &&
                    (e.x || 0 === e.x
                      ? ((i.x = e.x),
                        (i.y = e.y),
                        (i.width = e.width),
                        (i.height = e.height))
                      : (e.top || 0 === e.top) &&
                        ((i.x = e.left),
                        (i.y = e.top),
                        (i.width = e.right - e.left),
                        (i.height = e.bottom - e.top))),
                  n > 0 &&
                    ((i.x -= n),
                    (i.y -= n),
                    (i.width += 2 * n),
                    (i.height += 2 * n)),
                  i
                );
              },
            },
            {
              key: "fromPoints",
              value: function (e, n, i, o, r) {
                var a = new t();
                return (
                  e > i
                    ? ((a.x = i), (a.width = e - i))
                    : ((a.x = e), (a.width = i - e)),
                  n > o
                    ? ((a.y = o), (a.height = n - o))
                    : ((a.y = n), (a.height = o - n)),
                  r > 0 &&
                    ((a.x -= r),
                    (a.y -= r),
                    (a.width += 2 * r),
                    (a.height += 2 * r)),
                  a
                );
              },
            },
          ]),
          n && Ii(e.prototype, n),
          i && Ii(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n, i;
      })();
      function ji(t) {
        return (
          (ji =
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
          ji(t)
        );
      }
      function _i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Ni(i.key), i));
        }
      }
      function Ni(t) {
        var e = (function (t, e) {
          if ("object" != ji(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != ji(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == ji(e) ? e : e + "";
      }
      var Bi = (function () {
        function t() {
          (!(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.selectedPath = null));
        }
        return (
          (e = t),
          (n = [
            {
              key: "createSvgElement",
              value: function (t) {
                if (!this.selectedPath) return null;
                if (1 === this.selectedPath.length) {
                  var e = this.selectedPath[0].createSvgElement(0);
                  return (t(e), e);
                }
                var n = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                );
                return (
                  this.selectedPath.forEach(function (e) {
                    var i = e.createSvgElement(0);
                    (t(i), n.appendChild(i));
                  }),
                  n
                );
              },
            },
            {
              key: "test",
              value: function (t) {
                if (!this.selectedPath) return !1;
                for (var e = 0; e < this.selectedPath.length; e++) {
                  var n = this.selectedPath[e];
                  if (
                    n.x <= t.x &&
                    t.x <= n.x + n.width &&
                    n.y <= t.y &&
                    t.y <= n.y + n.height
                  )
                    return !0;
                }
                return !1;
              },
            },
          ]),
          (i = [
            {
              key: "join",
              value: function (e) {
                var n,
                  i = new t();
                i.selectedPath = [];
                for (var o = 0; o < e.length; o++)
                  null === (n = e[o].selectedPath) ||
                    void 0 === n ||
                    n.forEach(function (t) {
                      var e;
                      return null === (e = i.selectedPath) || void 0 === e
                        ? void 0
                        : e.push(t);
                    });
                return i;
              },
            },
            {
              key: "getPathForGroup",
              value: function (e) {
                return t.getPathBBox(e, 0);
              },
            },
            {
              key: "getPathForLine",
              value: function (e) {
                return t.getPathBBox(e, 3);
              },
            },
            {
              key: "getPathForEllipse",
              value: function (e) {
                return t.getPathBBox(e, 3);
              },
            },
            {
              key: "getPathForPolyLine",
              value: function (e) {
                var n = new t();
                n.selectedPath = [];
                for (var i = 0; i < e.points.length - 1; i++) {
                  var o = e.points[i],
                    r = e.points[i + 1],
                    a = Di.fromPoints(o.x, o.y, r.x, r.y, 3);
                  n.selectedPath.push(a);
                }
                return n;
              },
            },
            {
              key: "getPathForPolygon",
              value: function (e) {
                return t.getPathBBox(e, 3);
              },
            },
            {
              key: "getPathBBox",
              value: function (e, n) {
                var i = new t(),
                  o = e.getBBox(),
                  r = Di.fromBox(o, n);
                return ((i.selectedPath = [r]), i);
              },
            },
          ]),
          n && _i(e.prototype, n),
          i && _i(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n, i;
      })();
      Bi.margin = 3;
      const Ri = Bi;
      var zi;
      function Gi(t) {
        return (
          (Gi =
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
          Gi(t)
        );
      }
      function Hi(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Yi(i.key), i));
        }
      }
      function Yi(t) {
        var e = (function (t, e) {
          if ("object" != Gi(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Gi(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Gi(e) ? e : e + "";
      }
      !(function (t) {
        ((t[(t.Component = 1)] = "Component"),
          (t[(t.Net = 2)] = "Net"),
          (t[(t.Wire = 3)] = "Wire"),
          (t[(t.Port = 4)] = "Port"),
          (t[(t.SheetEntry = 5)] = "SheetEntry"),
          (t[(t.SheetSymbol = 6)] = "SheetSymbol"));
      })(zi || (zi = {}));
      var Vi = (function () {
        function t(e, n, i, o) {
          (!(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.hasBounds = !1),
            (this.boundElement = null),
            (this.variantBounds = null),
            (this.ee = window.__CORE__.createEventEmmiterInstance()),
            (this.owner = e),
            (this.type = n),
            (this.id = i),
            (this.parts = o));
        }
        return (
          (e = t),
          (n = [
            {
              key: "once",
              value: function (t, e) {
                return this.ee.once(t, e);
              },
            },
            {
              key: "on",
              value: function (t, e) {
                return this.ee.on(t, e);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                return this.ee.off(t, e);
              },
            },
            {
              key: "eventNames",
              value: function () {
                return this.ee.eventNames();
              },
            },
            {
              key: "emit",
              value: function (t, e) {
                return this.ee.emit(t, e);
              },
            },
            {
              key: "getRootOwner",
              value: function () {
                return this.owner ? this.owner.getRootOwner() : this;
              },
            },
            {
              key: "test",
              value: function (t) {
                return !!this.boundElement && this.boundElement.test(t);
              },
            },
            {
              key: "updateBoundRectangles",
              value: function () {
                var e = this;
                if (!this.hasBounds) {
                  if (((this.hasBounds = !0), this.type !== zi.Net)) {
                    var n = document.getElementById(this.id),
                      i = new Map();
                    ((this.boundElement = (function n(i, o) {
                      if (i && i.localName) {
                        var r = i.localName;
                        if ("g" === r) {
                          if (e.type === zi.Component) {
                            var a = i.querySelectorAll("[data-variant-id]");
                            return a && a.length > 0
                              ? (a.forEach(function (t) {
                                  o.set(
                                    t.dataset.variantId,
                                    Ri.getPathForGroup(t),
                                  );
                                }),
                                o.get(Pe.hZ))
                              : Ri.getPathForGroup(i);
                          }
                          if (e.type === zi.Wire)
                            try {
                              for (
                                var u = [], c = 0;
                                c < i.children.length;
                                c++
                              ) {
                                var s = n(i.children[c], null);
                                s && u.push(s);
                              }
                              return Ri.join(u);
                            } catch (e) {
                              t.logger.LogError(
                                "Setup wire error. " + e.message,
                              );
                            }
                          else {
                            if (e.type === zi.Port)
                              return Ri.getPathForGroup(i);
                            if (e.type === zi.SheetEntry)
                              return Ri.getPathForGroup(i);
                            if (e.type === zi.SheetSymbol)
                              return Ri.getPathForGroup(i);
                          }
                        } else {
                          if ("line" === r) return Ri.getPathForLine(i);
                          if ("ellipse" === r) return Ri.getPathForEllipse(i);
                          if ("polyline" === r) return Ri.getPathForPolyLine(i);
                          if ("polygon" === r) return Ri.getPathForPolygon(i);
                        }
                      }
                      return null;
                    })(n, i)),
                      (this.variantBounds = i.size > 0 ? i : null));
                  }
                  this.parts &&
                    this.parts.forEach(function (t) {
                      return t.updateBoundRectangles();
                    });
                }
              },
            },
            {
              key: "updateScene",
              value: function (t, e, n, i) {
                var o = this;
                if (this.hasBounds)
                  if (this.parts && 0 !== this.parts.length) {
                    var r = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "g",
                    );
                    (r.setAttribute("data_id", this.id),
                      r.setAttribute("data_type", "".concat(this.type)));
                    var a = this.getRootElement(this.boundElement, n, i);
                    (a && r.appendChild(a),
                      this.parts.forEach(function (e) {
                        return e.updateScene(t, r, n, i);
                      }),
                      e.appendChild(r));
                  } else {
                    if (this.type === zi.Net) return;
                    var u = function (t, r) {
                      var a = o.getRootElement(t, n, i);
                      a &&
                        (a.setAttribute("data_id", o.id),
                        a.setAttribute("data_type", "".concat(o.type)),
                        r && a.setAttribute("data-variant-id", "".concat(r)),
                        e.appendChild(a));
                    };
                    this.variantBounds
                      ? this.variantBounds.forEach(function (t, e) {
                          return u(t, e);
                        })
                      : u(this.boundElement, null);
                  }
              },
            },
            {
              key: "setBound",
              value: function (t) {
                var e;
                this.variantBounds &&
                  (this.boundElement =
                    null !== (e = this.variantBounds.get(t)) && void 0 !== e
                      ? e
                      : this.boundElement);
              },
            },
            {
              key: "getRootElement",
              value: function (t, e, n) {
                var i = this;
                if (!t) return null;
                var o = t.createSvgElement(function (t) {
                  (t.setAttribute("class", e),
                    t.addEventListener("mouseenter", function () {
                      setTimeout(function () {
                        var t = i.getRootOwner();
                        t.emit("highlightStart", t);
                      });
                    }),
                    t.addEventListener("mouseleave", function () {
                      setTimeout(function () {
                        var t = i.getRootOwner();
                        t.emit("highlightComplete", t);
                      });
                    }),
                    n(t));
                });
                return o || null;
              },
            },
          ]),
          n && Hi(e.prototype, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n;
      })();
      Vi.logger = window.__CORE__.createLogger("SchActiveObject");
      const Fi = Vi;
      var Wi;
      function Ui(t) {
        return ((t ? t.kind : 0) >> 8) & 255;
      }
      function Xi(t) {
        return (
          (Xi =
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
          Xi(t)
        );
      }
      function Ki(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = qi(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var r,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return ((a = t.done), t);
          },
          e: function (t) {
            ((u = !0), (r = t));
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw r;
            }
          },
        };
      }
      function Zi(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Qi(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          qi(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function qi(t, e) {
        if (t) {
          if ("string" == typeof t) return Qi(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Qi(t, e)
                : void 0
          );
        }
      }
      function Qi(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function $i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, Ji(i.key), i));
        }
      }
      function Ji(t) {
        var e = (function (t, e) {
          if ("object" != Xi(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Xi(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Xi(e) ? e : e + "";
      }
      !(function (t) {
        ((t[(t.Wire = 19)] = "Wire"),
          (t[(t.Component = 26)] = "Component"),
          (t[(t.Port = 38)] = "Port"),
          (t[(t.SheetEntry = 40)] = "SheetEntry"),
          (t[(t.SheetSymbol = 41)] = "SheetSymbol"));
      })(Wi || (Wi = {}));
      var to = Rn(),
        eo = (0, yn.Jk)(to).metadata,
        no = (function () {
          function t(e) {
            var n = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.engine = e),
              (this.logger = Pe.QY.createLogger("SchCompareEngine:navigation")),
              (this.twoClickObjects = [Wi.ReuseSheetSymbol]),
              (this.nets = []),
              (this.primitives = []),
              Pe.QY.bus.on("select", function (t) {
                ((n.selectedItem = void 0),
                  "block" === (null == t ? void 0 : t.name) &&
                    "SchCompareEngine" === (null == t ? void 0 : t.senderId) &&
                    n.links.has(t.native.schId) &&
                    (n.selectedItem = t.native.schId));
              }));
          }
          return (
            (e = t),
            (n = [
              {
                key: "documents",
                get: function () {
                  return this.engine.allDocuments;
                },
              },
              {
                key: "currentDocument",
                get: function () {
                  var t = this.engine.activeDocumentIndex;
                  if (!(t < 0)) return this.documents[t];
                },
              },
              {
                key: "setup",
                value: function () {
                  var e = this;
                  eo.value &&
                    (Pe.QY.bus.on("SchCompareEngine:navigateTo", function (t) {
                      return e.navigateTo(t);
                    }),
                    (this.nets = eo.value.Nets || []),
                    (this.links = new Map(
                      this.primitives
                        .filter(function (e) {
                          return t.isNavigatedPrimitive(e);
                        })
                        .map(function (t) {
                          return [t.schId, t];
                        }),
                    )));
                },
              },
              {
                key: "getLinks",
                value: function () {
                  return Zi(this.links.values());
                },
              },
              {
                key: "canNavigate",
                value: function (t) {
                  var e = this.links.get(t);
                  return !(
                    !e ||
                    (this.twoClickObjects.includes(Ui(e)) &&
                      this.selectedItem !== e.schId)
                  );
                },
              },
              {
                key: "invoke",
                value: function (t, e, n) {
                  var i,
                    o,
                    r,
                    a,
                    u = this.links.get(n);
                  if (u) {
                    if (u.url)
                      return (
                        this.logger.LogDebug("Open url ".concat(u.url)),
                        void window.open(u.url, "_blank")
                      );
                    Pe.QY.bus.emit("select", null);
                    try {
                      var c = { x: t, y: e, items: new Array() };
                      switch (Ui(u)) {
                        case Wi.SheetSymbol:
                        case Wi.ReuseSheetSymbol:
                          var s = this.getSheetSymbolNavigationItem(n);
                          s && c.items.push(s);
                          break;
                        default:
                          var l = this.getNetNavigationItems(u.id);
                          l && (i = c.items).push.apply(i, Zi(l));
                      }
                      if (
                        1 == c.items.length &&
                        c.items[0].documentId ===
                          (null === (o = this.currentDocument) || void 0 === o
                            ? void 0
                            : o.id) &&
                        0 ===
                          (null !==
                            (a =
                              null === (r = c.items[0].child) || void 0 === r
                                ? void 0
                                : r.length) && void 0 !== a
                            ? a
                            : 0)
                      )
                        return;
                      Pe.QY.bus.emit("SchCompareEngine:readyNavigateTo", c);
                    } catch (t) {
                      this.logger.LogError(t);
                    }
                  } else
                    this.logger.LogWarn(
                      "Primitive ".concat(n, " in not navigate item"),
                    );
                },
              },
              {
                key: "getSheetSymbolNavigationItem",
                value: function (t) {
                  var e = this,
                    n = this.links.get(t);
                  if (n && this.currentDocument)
                    switch (Ui(n)) {
                      case Wi.Port:
                        var i = this.currentDocument.parentId;
                        if (i) {
                          var o = this.documents.find(function (t) {
                            return t.id === i;
                          });
                          if (o) {
                            var r = this.findPrimitive(
                              o.modelId,
                              Wi.SheetEntry,
                              this.currentDocument.channelId,
                              n.itemLink,
                            );
                            if (r) return this.createNavigationItem(o, [r]);
                          }
                        }
                        break;
                      case Wi.SheetEntry:
                      case Wi.SheetSymbol:
                      case Wi.ReuseSheetSymbol:
                        if (!Array.isArray(n.channelLinks)) break;
                        var a = this.documents.find(function (t) {
                          return n.channelLinks.find(function (e) {
                            return e === t.channelId;
                          });
                        });
                        if (!a && n.docLink) {
                          var u,
                            c = Ki(
                              n.docLink.split(";").map(function (t) {
                                return t.trim();
                              }),
                            );
                          try {
                            var s = function () {
                              var t = u.value;
                              if (
                                (a = e.documents.find(function (e) {
                                  return e.name === t;
                                }))
                              )
                                return 1;
                            };
                            for (c.s(); !(u = c.n()).done && !s(); );
                          } catch (t) {
                            c.e(t);
                          } finally {
                            c.f();
                          }
                        }
                        if (a) {
                          if (n.itemLink) {
                            var l = this.findPrimitive(
                              a.modelId,
                              Wi.Port,
                              0,
                              n.itemLink,
                            );
                            if (l) return this.createNavigationItem(a, [l]);
                          }
                          return this.createNavigationItem(a);
                        }
                    }
                },
              },
              {
                key: "getNetNavigationItems",
                value: function (t) {
                  var e,
                    n,
                    i,
                    o = this,
                    r = this.nets.filter(function (e) {
                      return e.name && e.primitives.includes(t);
                    }),
                    a = r
                      .map(function (t) {
                        return t.primitives;
                      })
                      .flat(1)
                      .filter(function (t, e, n) {
                        return n.indexOf(t) === e;
                      }),
                    u = new Map(),
                    c = Ki(this.documents);
                  try {
                    for (c.s(); !(i = c.n()).done; ) {
                      var s = i.value,
                        l = this.getDocumentPrimitives(s.modelId, a, r);
                      if (l) {
                        var h = this.createNavigationItem(
                          s,
                          l.map(function (t) {
                            return o.primitives[t];
                          }),
                        );
                        u.set(s.id, h);
                      }
                    }
                  } catch (t) {
                    c.e(t);
                  } finally {
                    c.f();
                  }
                  for (
                    var f = new Array(),
                      d = function () {
                        var t = (function (t, e) {
                            return (
                              (function (t) {
                                if (Array.isArray(t)) return t;
                              })(t) ||
                              (function (t, e) {
                                var n =
                                  null == t
                                    ? null
                                    : ("undefined" != typeof Symbol &&
                                        t[Symbol.iterator]) ||
                                      t["@@iterator"];
                                if (null != n) {
                                  var i,
                                    o,
                                    r,
                                    a,
                                    u = [],
                                    c = !0,
                                    s = !1;
                                  try {
                                    if (((r = (n = n.call(t)).next), 0 === e)) {
                                      if (Object(n) !== n) return;
                                      c = !1;
                                    } else
                                      for (
                                        ;
                                        !(c = (i = r.call(n)).done) &&
                                        (u.push(i.value), u.length !== e);
                                        c = !0
                                      );
                                  } catch (t) {
                                    ((s = !0), (o = t));
                                  } finally {
                                    try {
                                      if (
                                        !c &&
                                        null != n.return &&
                                        ((a = n.return()), Object(a) !== a)
                                      )
                                        return;
                                    } finally {
                                      if (s) throw o;
                                    }
                                  }
                                  return u;
                                }
                              })(t, e) ||
                              qi(t, e) ||
                              (function () {
                                throw new TypeError(
                                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                );
                              })()
                            );
                          })(m[v], 2),
                          i = t[0],
                          r = t[1],
                          a =
                            null !==
                              (n =
                                null ===
                                  (e = o.documents.find(function (t) {
                                    return t.id === i;
                                  })) || void 0 === e
                                  ? void 0
                                  : e.parentId) && void 0 !== n
                              ? n
                              : "",
                          c = u.get(a);
                        c && (c.child.push(r), f.push(r));
                      },
                      v = 0,
                      m = Array.from(u.entries());
                    v < m.length;
                    v++
                  )
                    d();
                  return Array.from(u.values()).filter(function (t) {
                    return !f.includes(t);
                  });
                },
              },
              {
                key: "getDocumentPrimitives",
                value: function (t, e, n) {
                  var i = this,
                    o = e.filter(function (e) {
                      return i.primitives[e].schDocId === t;
                    });
                  return o.length &&
                    o
                      .map(function (t) {
                        return i.primitives[t];
                      })
                      .filter(function (t) {
                        return [
                          Wi.Port,
                          Wi.SheetEntry,
                          Wi.CrossSheetConnector,
                        ].includes(Ui(t));
                      }).length
                    ? o
                    : null;
                },
              },
              {
                key: "createNavigationItem",
                value: function (t, e) {
                  var n;
                  return {
                    documentId: t.id,
                    primitives: e || [],
                    child: [],
                    name:
                      t.name +
                      (t.channelName ? "(".concat(t.channelName, ")") : ""),
                    selected:
                      t.id ===
                      (null === (n = this.currentDocument) || void 0 === n
                        ? void 0
                        : n.id),
                    icon:
                      t.sourceKind === SourceKind.ReuseBlock
                        ? "reuse-block-16"
                        : "schematic-16",
                    preventSelect: t.channelKind === ChannelKind.Logical,
                  };
                },
              },
              {
                key: "findPrimitive",
                value: function (t, e, n, i) {
                  return this.primitives.find(function (o) {
                    return (
                      o.schDocId === t &&
                      Ui(o) == e &&
                      o.itemLink === i &&
                      (!n ||
                        (o.channelLinks &&
                          o.channelLinks.find(function (t) {
                            return t === n;
                          })))
                    );
                  });
                },
              },
              {
                key: "navigateTo",
                value: function (t) {
                  var e = this;
                  t &&
                    (this.logger.LogDebug(
                      "Navigate to '"
                        .concat(t.name, "' (")
                        .concat(t.documentId, ") for ")
                        .concat(t.primitives.length, " prims"),
                    ),
                    this.currentDocument &&
                    t.documentId === this.currentDocument.id
                      ? this.highlightItems(t)
                      : new Promise(function (n) {
                          var i = function () {
                            (setTimeout(function () {
                              return e.highlightItems(t);
                            }, 100),
                              Pe.QY.bus.off("SCHView:documentChanged", i),
                              n());
                          }.bind(e);
                          (Pe.QY.bus.on("SCHView:documentChanged", i),
                            Pe.QY.bus.emit(
                              "SCHView:showDocument",
                              t.documentId,
                            ));
                        }));
                },
              },
              {
                key: "highlightItems",
                value: function (t) {
                  var e;
                  (null === (e = t.primitives) || void 0 === e
                    ? void 0
                    : e.length) > 0
                    ? Pe.QY.bus.emit("SchCompareEngine:drawSelection", {
                        items: t.primitives,
                        fit: !0,
                      })
                    : Pe.QY.bus.emit("SchCompareEngine:zoomToFit", {
                        rect: null,
                      });
                },
              },
            ]),
            (i = [
              {
                key: "isNavigatedPrimitive",
                value: function (t) {
                  return (
                    !!t &&
                    (!![
                      Wi.Port,
                      Wi.SheetEntry,
                      Wi.SheetSymbol,
                      Wi.ReuseSheetSymbol,
                      Wi.CrossSheetConnector,
                    ].includes(Ui(t)) ||
                      (void 0 !== t.url &&
                        [Wi.Label, Wi.Hyperlink].includes(Ui(t))))
                  );
                },
              },
            ]),
            n && $i(e.prototype, n),
            i && $i(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, n, i;
        })();
      function io(t) {
        return (
          (io =
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
          io(t)
        );
      }
      function oo(t, e) {
        if (t) {
          if ("string" == typeof t) return ro(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? ro(t, e)
                : void 0
          );
        }
      }
      function ro(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function ao(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, uo(i.key), i));
        }
      }
      function uo(t) {
        var e = (function (t, e) {
          if ("object" != io(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != io(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == io(e) ? e : e + "";
      }
      var co = Rn(),
        so = (0, yn.Jk)(co),
        lo = so.documentId,
        ho = so.metadata,
        fo = so.nets,
        vo = so.components,
        mo = so.svg,
        po = so.selectionEnabled,
        yo = so.svgPoint,
        go = so.scene,
        bo = so.activeObjectsMapByDocument,
        wo = co.clearActiveObjects,
        So = co.updateActiveObjectsBounds,
        Eo = co.setActiveObjectsVariantBounds,
        ko = co.addActiveObject,
        Co = (function () {
          return (
            (t = function t() {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.logger = Pe.QY.createLogger(
                  "SchCompareEngine:selectionService",
                )),
                (this.navigation = new no()));
            }),
            (e = [
              {
                key: "setup",
                value: function () {
                  var t = this;
                  (console.log("Selection:Setup", { metadata: ho.value }),
                    ho.value
                      ? (wo(),
                        this.setupComponents(),
                        this.setupNets(),
                        this.setupNavigation(),
                        Pe.QY.bus.on("Variants:set", function (e) {
                          (Eo(e), t.launchSelection(null));
                        }),
                        Pe.QY.bus.on(
                          "SchCompareView:selectedItem+DocumentReady",
                          function (t) {
                            (console.log(
                              "on:SchCompareView:selectedItem+DocumentReady",
                              t,
                            ),
                              Pe.QY.bus.emit(
                                "SchCompareEngine:clearSelection",
                                { update: !0 },
                              ),
                              Pe.QY.bus.emit("SchCompareEngine:drawSelection", {
                                items: [t],
                                fit: !0,
                              }),
                              Pe.QY.bus.emit(
                                "select",
                                Object.assign(Object.assign({}, t), {
                                  views: ["SchCompare"],
                                }),
                              ));
                          },
                        ),
                        Pe.QY.bus.on(
                          "SchCompareView:clearSelection",
                          function () {
                            Pe.QY.bus.emit("SchCompareEngine:clearSelection", {
                              update: !1,
                            });
                          },
                        ))
                      : console.error("Metadata object is undefined or null"));
                },
              },
              {
                key: "setupComponents",
                value: function () {
                  var t,
                    e = this;
                  null === (t = ho.value) ||
                    void 0 === t ||
                    t.Documents.map(function (t) {
                      var n;
                      null === (n = t.Items) ||
                        void 0 === n ||
                        n.map(function (n) {
                          var i = e.createActiveObject(
                            null,
                            zi[n.ObjectKind],
                            n.ObjectHandle,
                            [],
                          );
                          ko(t.Id, i);
                        });
                    });
                },
              },
              {
                key: "setupNets",
                value: function () {
                  var t,
                    e = this;
                  null === (t = ho.value) ||
                    void 0 === t ||
                    t.Nets.map(function (t, n) {
                      var i,
                        o =
                          (null === (i = null == t ? void 0 : t.Items) ||
                          void 0 === i
                            ? void 0
                            : i.reduce(function (t, e) {
                                return (
                                  (t[e.DocumentId] = [].concat(
                                    (function (t) {
                                      return (
                                        (function (t) {
                                          if (Array.isArray(t)) return ro(t);
                                        })(t) ||
                                        (function (t) {
                                          if (
                                            ("undefined" != typeof Symbol &&
                                              null != t[Symbol.iterator]) ||
                                            null != t["@@iterator"]
                                          )
                                            return Array.from(t);
                                        })(t) ||
                                        oo(t) ||
                                        (function () {
                                          throw new TypeError(
                                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                          );
                                        })()
                                      );
                                    })(t[e.DocumentId] || []),
                                    [e],
                                  )),
                                  t
                                );
                              }, {})) || {};
                      Object.keys(o).map(function (t) {
                        var i = [],
                          r = e.createActiveObject(
                            null,
                            zi.Net,
                            "net-".concat(n),
                            i,
                          );
                        (o[t].map(function (t) {
                          var n = e.createActiveObject(
                            r,
                            zi[t.ObjectKind] || zi.Wire,
                            t.ObjectHandle,
                            [],
                          );
                          i.push(n);
                        }),
                          ko(t, r),
                          console.log("Adding Net to ".concat(t), r));
                      });
                    });
                },
              },
              {
                key: "setupBounds",
                value: function (t) {
                  if ((console.log("Selection:SetupBounds (Document)", t), t)) {
                    var e = t.documentId;
                    if (e)
                      try {
                        var n = window.document.createElement("div");
                        window.document.body.appendChild(n);
                        try {
                          (n.appendChild(t.node.cloneNode(!0)), So(e));
                        } finally {
                          window.document.body.removeChild(n);
                        }
                      } catch (t) {
                        this.logger.LogWarn(
                          "Setup document error. " + t.message,
                        );
                      }
                  }
                },
              },
              {
                key: "selectByPoint",
                value: function (t) {
                  var e, n, i, o;
                  (console.log("Selection:SelectByPoint", { e: t }),
                    null === (e = yo.value) || void 0 === e || (e.x = t.x),
                    null === (n = yo.value) || void 0 === n || (n.y = t.y));
                  var r =
                    null === (i = go.value) || void 0 === i
                      ? void 0
                      : i.getScreenCTM();
                  if (r) {
                    var a =
                      null === (o = yo.value) || void 0 === o
                        ? void 0
                        : o.matrixTransform(r.inverse());
                    if (bo.value) {
                      var u,
                        c = (function (t, e) {
                          var n =
                            ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                            t["@@iterator"];
                          if (!n) {
                            if (Array.isArray(t) || (n = oo(t))) {
                              n && (t = n);
                              var i = 0,
                                o = function () {};
                              return {
                                s: o,
                                n: function () {
                                  return i >= t.length
                                    ? { done: !0 }
                                    : { done: !1, value: t[i++] };
                                },
                                e: function (t) {
                                  throw t;
                                },
                                f: o,
                              };
                            }
                            throw new TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                          }
                          var r,
                            a = !0,
                            u = !1;
                          return {
                            s: function () {
                              n = n.call(t);
                            },
                            n: function () {
                              var t = n.next();
                              return ((a = t.done), t);
                            },
                            e: function (t) {
                              ((u = !0), (r = t));
                            },
                            f: function () {
                              try {
                                a || null == n.return || n.return();
                              } finally {
                                if (u) throw r;
                              }
                            },
                          };
                        })(bo.value.values());
                      try {
                        for (c.s(); !(u = c.n()).done; ) {
                          var s = u.value;
                          if (s.test(a))
                            return void (this.navigation.canNavigate(s.id)
                              ? this.navigation.invoke(s.id)
                              : this.launchSelection(s.getRootOwner()));
                        }
                      } catch (t) {
                        c.e(t);
                      } finally {
                        c.f();
                      }
                      this.launchSelection(null);
                    }
                  }
                },
              },
              {
                key: "launchSelection",
                value: function (t) {
                  if (fo.value && vo.value) {
                    var e = null;
                    if (t)
                      if (t.type === zi.Component && t.id) {
                        var n = lo.value,
                          i = vo.value.find(function (e) {
                            return (
                              e.objectHandle === t.id && e.documentId === n
                            );
                          });
                        i && (e = i);
                      } else if (t.type === zi.Net) {
                        var o = t.id.replace("net-", "");
                        e = fo.value[parseInt(o)];
                      }
                    (e && !po.value) ||
                      (e
                        ? Pe.QY.bus.emit("SchCompareEngine:selectItem", e)
                        : (Pe.QY.bus.emit("SchCompareEngine:clearSelection", {
                            update: !1,
                          }),
                          Pe.QY.bus.emit(
                            "SchCompareEngine:selectNotFoundItem",
                          )));
                  }
                },
              },
              {
                key: "createActiveObject",
                value: function (t, e, n, i) {
                  var o = this,
                    r = new Fi(t, e, n, i);
                  return (
                    r.on("highlightStart", function (t) {
                      o.invokeHighlight(r);
                    }),
                    r.on("highlightComplete", function () {
                      return Pe.QY.bus.emit("SchCompareEngine:clearHighlight");
                    }),
                    r
                  );
                },
              },
              {
                key: "setupNavigation",
                value: function () {
                  var t = this;
                  this.navigation.setup();
                  var e = [];
                  (this.navigation.getLinks().forEach(function (n) {
                    var i = (function (t) {
                        switch (Ui(t)) {
                          case Wi.Component:
                            return zi.Component;
                          case Wi.Port:
                            return zi.Port;
                          case Wi.SheetEntry:
                            return zi.SheetEntry;
                          case Wi.SheetSymbol:
                            return zi.SheetSymbol;
                          case Wi.Wire:
                            return zi.Wire;
                        }
                        return 0;
                      })(n),
                      o = t.createActiveObject(null, i, n.schId, null);
                    i === zi.SheetSymbol
                      ? e.push({ docId: n.schDocId, obj: o })
                      : ko(n.schDocId, o);
                  }),
                    e.forEach(function (t) {
                      ko(t.docId, t.obj);
                    }));
                },
              },
              {
                key: "invokeHighlight",
                value: function (t) {
                  var e,
                    n = this;
                  (t.type === zi.Component
                    ? t.boundElement &&
                      t.boundElement.selectedPath &&
                      t.boundElement.selectedPath.forEach(function (e) {
                        var n = e.createSvgElement(3);
                        (n.setAttribute("data-id", t.id),
                          Pe.QY.bus.emit("SchCompareEngine:drawHighlight", n));
                      })
                    : t.type === zi.Wire &&
                      this.setupWireHighlight(
                        null === (e = mo.value) || void 0 === e
                          ? void 0
                          : e.getElementById(t.id),
                        t,
                        function (t) {
                          return Pe.QY.bus.emit(
                            "SchCompareEngine:drawHighlight",
                            t,
                          );
                        },
                      ),
                    t.parts &&
                      t.parts.forEach(function (t) {
                        return n.invokeHighlight(t);
                      }));
                },
              },
              {
                key: "setupWireHighlight",
                value: function (t, e, n) {
                  var i = this;
                  if (t && t.localName) {
                    var o = t.localName;
                    if ("g" === o)
                      this.forEveryChild(t, function (t) {
                        return i.setupWireHighlight(t, e, n);
                      });
                    else if ("line" === o || "polyline" === o) {
                      var r = t.cloneNode(!0);
                      (r.setAttribute("data-id", e.id),
                        r.hasAttribute("id") && r.removeAttribute("id"),
                        n(r));
                    }
                  }
                },
              },
              {
                key: "forEveryChild",
                value: function (t, e) {
                  for (var n = t.children, i = 0; i < n.length; i++) {
                    var o = n[i];
                    o && e(o);
                  }
                },
              },
            ]),
            e && ao(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      function Po(t) {
        return (
          (Po =
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
          Po(t)
        );
      }
      function Ao() {
        Ao = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          u = r.asyncIterator || "@@asyncIterator",
          c = r.toStringTag || "@@toStringTag";
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
        function l(t, e, n, i) {
          var r = e && e.prototype instanceof y ? e : y,
            a = Object.create(r.prototype),
            u = new O(i || []);
          return (o(a, "_invoke", { value: A(t, n, u) }), a);
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          d = "suspendedYield",
          v = "executing",
          m = "completed",
          p = {};
        function y() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          E = S && S(S(I([])));
        E && E !== n && i.call(E, a) && (w = E);
        var k = (b.prototype = y.prototype = Object.create(w));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(o, r, a, u) {
            var c = h(t[o], t, r);
            if ("throw" !== c.type) {
              var s = c.arg,
                l = s.value;
              return l && "object" == Po(l) && i.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, u);
                    },
                    function (t) {
                      n("throw", t, a, u);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return n("throw", t, a, u);
                    },
                  );
            }
            u(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function (t, i) {
              function o() {
                return new e(function (e, o) {
                  n(t, i, e, o);
                });
              }
              return (r = r ? r.then(o, o) : o());
            },
          });
        }
        function A(e, n, i) {
          var o = f;
          return function (r, a) {
            if (o === v) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === r) throw a;
              return { value: t, done: !0 };
            }
            for (i.method = r, i.arg = a; ; ) {
              var u = i.delegate;
              if (u) {
                var c = T(u, i);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (o === f) throw ((o = m), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              o = v;
              var s = h(e, n, i);
              if ("normal" === s.type) {
                if (((o = i.done ? m : d), s.arg === p)) continue;
                return { value: s.arg, done: i.done };
              }
              "throw" === s.type &&
                ((o = m), (i.method = "throw"), (i.arg = s.arg));
            }
          };
        }
        function T(e, n) {
          var i = n.method,
            o = e.iterator[i];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                T(e, n),
                "throw" === n.method)) ||
                ("return" !== i &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method",
                  )))),
              p
            );
          var r = h(o, e.iterator, n.arg);
          if ("throw" === r.type)
            return (
              (n.method = "throw"),
              (n.arg = r.arg),
              (n.delegate = null),
              p
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                p)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              p);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function M(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function O(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0));
        }
        function I(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function n() {
                  for (; ++o < e.length; )
                    if (i.call(e, o))
                      return ((n.value = e[o]), (n.done = !1), n);
                  return ((n.value = t), (n.done = !0), n);
                };
              return (r.next = r);
            }
          }
          throw new TypeError(Po(e) + " is not iterable");
        }
        return (
          (g.prototype = b),
          o(k, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = s(b, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), s(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(P.prototype),
          s(P.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, i, o, r) {
            void 0 === r && (r = Promise);
            var a = new P(l(t, n, i, o), r);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          s(k, c, "Generator"),
          s(k, a, function () {
            return this;
          }),
          s(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var i in e) n.push(i);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var i = n.pop();
                  if (i in e) return ((t.value = i), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = I),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(M),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
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
              function o(i, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = e),
                  (n.next = i),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r],
                  u = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = i.call(a, "catchLoc"),
                    s = i.call(a, "finallyLoc");
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
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  i.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var r = o;
                  break;
                }
              }
              r &&
                ("break" === t || "continue" === t) &&
                r.tryLoc <= e &&
                e <= r.finallyLoc &&
                (r = null);
              var a = r ? r.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                r
                  ? ((this.method = "next"), (this.next = r.finallyLoc), p)
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
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return (this.complete(n.completion, n.afterLoc), M(n), p);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var o = i.arg;
                    M(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, i) {
              return (
                (this.delegate = { iterator: I(e), resultName: n, nextLoc: i }),
                "next" === this.method && (this.arg = t),
                p
              );
            },
          }),
          e
        );
      }
      function To(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, xo(i.key), i));
        }
      }
      function xo(t) {
        var e = (function (t, e) {
          if ("object" != Po(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != Po(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Po(e) ? e : e + "";
      }
      var Mo = function (t, e, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(t) {
              try {
                c(i.next(t));
              } catch (t) {
                r(t);
              }
            }
            function u(t) {
              try {
                c(i.throw(t));
              } catch (t) {
                r(t);
              }
            }
            function c(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, u);
            }
            c((i = i.apply(t, e || [])).next());
          });
        },
        Oo = Rn(),
        Io = (0, yn.Jk)(Oo),
        Lo = Io.metadata,
        Do = Io.nets,
        jo = Io.components,
        _o = Oo.updateEnabledState,
        No = (function () {
          return (
            (t = function t() {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.documents = []),
                (this.currentDocumentIndex = -1),
                (this.shown = !1),
                (this.state = new Ne(this)),
                (this.selectionService = new Co()),
                (this.renderService = new Mi(this.selectionService)),
                (this.logger = Pe.QY.createLogger("SchCompareEngine")));
            }),
            (e = [
              {
                key: "name",
                get: function () {
                  return "SchCompareEngine";
                },
              },
              {
                key: "comment",
                get: function () {
                  return "SVG Schematic Compare documents handler engine";
                },
              },
              {
                key: "dependencies",
                get: function () {
                  return [];
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
                    "SchCompareEngine:loadAllDocuments",
                    "SchCompareEngine:didDocumentAttach",
                    "SchCompareEngine:didDocumentDettach",
                    "SchCompareEngine:didDocumentAttachError",
                    "SchCompareEngine:beforeDocumentLoad",
                    "SchCompareEngine:afterDocumentLoad",
                    "SchCompareEngine:documentMove",
                    "SchCompareEngine:documentZoom",
                    "SchCompareEngine:selectItem",
                    "SchCompareEngine:selectNotFoundItem",
                    "SchCompareEngine:navigate",
                    "SchCompareEngine:drawHighlight",
                    "SchCompareEngine:clearHighlight",
                    "SchCompareEngine:drawSelection",
                    "SchCompareEngine:clearSelection",
                    "SchCompareEngine:zoomToFit",
                    "SchCompareEngine:documentShown",
                    "SchCompareEngine:documents",
                    "SchCompareEngine:showDocument",
                    "SchCompareEngine:setup",
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
                key: "bus",
                get: function () {
                  return Pe.QY.bus;
                },
              },
              {
                key: "setup",
                value: function (t) {
                  return this.state.goToSetup(t);
                },
              },
              {
                key: "showView",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, i) {
                    e.state
                      .goToAttach(t)
                      .then(function (t) {
                        return e.state.goToShow();
                      })
                      .then(function (t) {
                        return n();
                      })
                      .catch(function (t) {
                        i(t);
                      });
                  });
                },
              },
              {
                key: "showDocument",
                value: function (t) {
                  return Mo(
                    this,
                    void 0,
                    void 0,
                    Ao().mark(function e() {
                      var n;
                      return Ao().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.logger.LogDebug(
                                    "Show Document by id: " + t,
                                  ),
                                  (e.next = 3),
                                  this.setActiveDocumentById(t)
                                );
                              case 3:
                                if (
                                  ((n = e.sent),
                                  this.renderService.attach(n),
                                  Pe.QY.bus.emit(
                                    "SchCompareEngine:documentShown",
                                    n,
                                  ),
                                  !this.shown)
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  this.renderService.setPosition(n)
                                );
                              case 9:
                                return (
                                  (e.next = 11),
                                  this.renderService.render(n)
                                );
                              case 11:
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
                key: "hideView",
                value: function () {
                  this.state.goToClose();
                },
              },
              {
                key: "resetView",
                value: function () {
                  this.renderService.reset();
                },
              },
              {
                key: "enableSelection",
                value: function (t) {
                  _o(t);
                },
              },
              {
                key: "doSetup",
                value: function (t) {
                  var e = this;
                  this.logger.LogDebug("To SETUP state");
                  var n = t.response,
                    i = [];
                  if (
                    (n &&
                      n.storage &&
                      n.storage.files &&
                      n.storage.files
                        .filter(function (t) {
                          return "SchSvgCompare" === t.fileType;
                        })
                        .forEach(function (t, e) {
                          var o = n.storage.files.find(function (e) {
                              return (
                                "Preview" === e.fileType &&
                                e.originalName
                                  .replace(".svg", "")
                                  .replace(".png", "") ===
                                  t.originalName
                                    .replace(".svg", "")
                                    .replace(".png", "")
                              );
                            }),
                            r = t.originalName
                              .replace("LC.", "")
                              .replace("PC.", "")
                              .replace(".svg", "")
                              .replace(".png", ""),
                            a = {
                              order: e,
                              id: e.toString(),
                              uniqueId: e.toString(),
                              channelId: 0,
                              url: t.dataFileUrl,
                              previewUrl: o ? o.dataFileUrl : "",
                              loadState: Pe.wF.IDLE,
                              name: t.originalName,
                              displayName: r,
                              renderData: null,
                              errorState: null,
                              toString: function () {
                                return "["
                                  .concat(a.id, "] ")
                                  .concat(a.name, " [")
                                  .concat(a.loadState, "]");
                              },
                            };
                          i.push(a);
                        }),
                    n &&
                      n.metadata &&
                      ((Lo.value = n.metadata.LogicalChanges),
                      (this.metadata = n.metadata.LogicalChanges),
                      this.bus.emit("SchCompareEngine:setup", {
                        nets: Do.value,
                        components: jo.value,
                      }),
                      this.metadata.Documents.length ||
                        this.metadata.Nets.length))
                  ) {
                    this.renderService.setMetadata(this.metadata);
                    var o = this.metadata.Documents;
                    (this.setupDocuments(i, o), this.selectionService.setup());
                  }
                  (i
                    .filter(function (t) {
                      return !e.documents.find(function (e) {
                        return e == t;
                      });
                    })
                    .forEach(function (t) {
                      ((t.order = e.documents.length), e.documents.push(t));
                    }),
                    this.bus.emit("SchCompareEngine:documents", this.documents),
                    this.bus.on("SchCompareEngine:showDocument", function (t) {
                      e.showDocument(t);
                    }));
                },
              },
              {
                key: "doAttachToWorkspace",
                value: function (t) {
                  (this.logger.LogDebug("To ATTACH_TO_WORKSPACE state"),
                    t.setAttribute("data-view-id", "schSvgView"),
                    this.renderService.attachTo(t));
                },
              },
              {
                key: "doShow",
                value: function () {
                  if (
                    (this.logger.LogDebug("To SHOW state"),
                    (this.shown = !0),
                    0 !== this.allDocuments.length)
                  ) {
                    var t =
                      -1 === this.currentDocumentIndex
                        ? 0
                        : this.currentDocumentIndex;
                    this.showDocument(this.documents[t].uniqueId);
                  } else this.logger.LogWarn("Any document to show");
                },
              },
              {
                key: "doClose",
                value: function () {
                  var t;
                  (this.logger.LogDebug("To CLOSE state"),
                    null === (t = this.renderService) ||
                      void 0 === t ||
                      t.saveState(),
                    (this.shown = !1));
                },
              },
              {
                key: "setupDocuments",
                value: function (t, e) {
                  var n = this;
                  e.forEach(function (e, i) {
                    var o = t.find(function (t) {
                      return e.Outputs.some(function (e) {
                        return n.isFileNameEqual(t.name, e.FilePath);
                      });
                    });
                    if (o) {
                      var r =
                        e.Id ||
                        Math.random().toString(36).slice(2, 10).toUpperCase();
                      ((o.id = r),
                        (o.uniqueId = r),
                        (o.order = i),
                        (o.isAdded = !e.BaseDocument && !!e.Document),
                        (o.isRemoved = !!e.BaseDocument && !e.Document),
                        n.documents.push(o));
                    } else
                      n.logger.LogWarn(
                        "Cannot find at metadata: ".concat(e.fileName),
                      );
                  });
                },
              },
              {
                key: "setActiveDocumentById",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, i) {
                    if (null !== t) {
                      var o = e.documents.findIndex(function (e) {
                        return e.uniqueId === t;
                      });
                      if (
                        (-1 == o &&
                          (o = e.documents.findIndex(function (e) {
                            return e.id === t;
                          })),
                        o < 0 || o >= e.documents.length)
                      )
                        i("Document index is out of range.");
                      else {
                        var r = e.documents[o];
                        switch (((e.currentDocumentIndex = o), r.loadState)) {
                          case Pe.wF.IDLE:
                            (Pe.QY.bus.emit(
                              "SchCompareEngine:beforeDocumentLoad",
                              r,
                            ),
                              (r.loadState = Pe.wF.LOAD),
                              e.loadDocument(r).then(function (t) {
                                (Pe.QY.bus.emit(
                                  "SchCompareEngine:afterDocumentLoad",
                                  r,
                                ),
                                  n(r));
                              }));
                            break;
                          case Pe.wF.LOAD:
                            (Pe.QY.bus.emit(
                              "SchCompareEngine:beforeDocumentLoad",
                              r,
                            ),
                              Pe.QY.bus.on(
                                "SchCompareEngine:afterDocumentLoad",
                                function () {
                                  return n(r);
                                },
                              ));
                            break;
                          default:
                            n(r);
                        }
                      }
                    } else i("Document id is undefined.");
                  });
                },
              },
              {
                key: "loadAllDocuments",
                value: function () {
                  return Mo(
                    this,
                    void 0,
                    void 0,
                    Ao().mark(function t() {
                      var e, n;
                      return Ao().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                e = 0;
                              case 1:
                                if (!(e < this.documents.length)) {
                                  t.next = 10;
                                  break;
                                }
                                if (
                                  !(n = this.documents[e]) ||
                                  n.loadState !== Pe.wF.IDLE
                                ) {
                                  t.next = 7;
                                  break;
                                }
                                return (
                                  (n.loadState = Pe.wF.LOAD),
                                  (t.next = 7),
                                  this.loadDocument(n)
                                );
                              case 7:
                                (e++, (t.next = 1));
                                break;
                              case 10:
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
                key: "loadDocument",
                value: function (t) {
                  var e,
                    n,
                    i = this;
                  if (
                    null ===
                      (n =
                        null === (e = Pe.QY.response) || void 0 === e
                          ? void 0
                          : e.storage) || void 0 === n
                      ? void 0
                      : n.isExpired
                  )
                    throw new r.CV();
                  return new Promise(function (e) {
                    fetch(t.url, { method: "GET" })
                      .then(function (t) {
                        if (t.ok) return t.text();
                        throw new Error(
                          "Document loading error. [".concat(t.statusText, "]"),
                        );
                      })
                      .then(function (n) {
                        t.loadState = Pe.wF.READY;
                        var o = new DOMParser().parseFromString(n, "text/xml");
                        t.renderData = o;
                        var r = o.documentElement;
                        if (!r) throw new Error("Document is empty.");
                        if (r.hasAttribute("data-doc-id")) {
                          var a = r.getAttribute("data-doc-id");
                          t.id &&
                            a !== t.id &&
                            i.logger.LogError(
                              "Document meta id ["
                                .concat(t.id, "] is not equals id [")
                                .concat(a, "]"),
                            );
                        }
                        (i.selectionService.setupBounds({
                          documentId: t.id,
                          node: t.renderData.documentElement.cloneNode(!0),
                        }),
                          e());
                      })
                      .catch(function (n) {
                        ((t.loadState = Pe.wF.READY), (t.errorState = n), e());
                      });
                  });
                },
              },
              {
                key: "isFileNameEqual",
                value: function (t, e) {
                  return t == this.getFileNameFromPath(e);
                },
              },
              {
                key: "getFileNameFromPath",
                value: function (t) {
                  return t.replace(/^.*[\\\/]/, "");
                },
              },
            ]),
            e && To(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      const Bo = {
        type: "Engine",
        name: "SchCompareEngineModule",
        description: "Presents schematic compare documents engine module",
        create: function () {
          return new No();
        },
      };
      var Ro = window.__CORE__;
      1 === o.i ? Ro.addModule(Ce) : Ro.addModule(Bo);
    },
    10311: (t) => {
      t.exports = Vue;
    },
  },
  (t) => {
    (t.O(0, [66951, 21759], () => t((t.s = 10099))), t.O());
  },
]);
