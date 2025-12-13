"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [61941],
  {
    64967: (e, n, t) => {
      var r = t(67674);
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
      function u(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, f(r.key), r));
        }
      }
      function i(e, n, t) {
        return (
          (n = o(n)),
          (function (e, n) {
            if (n && ("object" == l(n) || "function" == typeof n)) return n;
            if (void 0 !== n)
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
            c()
              ? Reflect.construct(n, t || [], o(e).constructor)
              : n.apply(e, t),
          )
        );
      }
      function c() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (c = function () {
          return !!e;
        })();
      }
      function o(e) {
        return (
          (o = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          o(e)
        );
      }
      function a(e, n) {
        return (
          (a = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, n) {
                return ((e.__proto__ = n), e);
              }),
          a(e, n)
        );
      }
      function s(e, n, t) {
        return (
          (n = f(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function f(e) {
        var n = (function (e, n) {
          if ("object" != l(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != l(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == l(n) ? n : n + "";
      }
      var d = window.__CORE__,
        p = window.__APP__.createModule,
        v = window.__APP__.library.i18n.t,
        m = window.__APP__,
        y = m.analytics,
        b = m.parentEvents,
        w = m.utils.getIcon,
        h = "true" === (0, r.kD)("data-outside-fullscreen", !1),
        E = "true" === (0, r.kD)("data-force-outside-fullscreen", !1),
        S = p({
          type: "Plugin",
          name: "FullScreen",
          description: "FullScreen",
          create: function (e) {
            return new ((function (e) {
              function n() {
                var e;
                return (
                  (function (e, n) {
                    if (!(e instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, n),
                  s(
                    (e = i(this, n, [
                      {
                        name: "FullScreen",
                        displayIcon: w("viewer-fullscreen-16", "fullscreen-16"),
                        comment: "FullScreen",
                        description: "FullScreen",
                        order: 5,
                        hint: v("viewer.plugins.FullScreen.hint"),
                        preventModalClose: !0,
                        disableActiveBtnState: !0,
                      },
                    ])),
                    "screenExpanded",
                    !1,
                  ),
                  s(e, "changeScreenExpanded", function () {
                    e.screenExpanded
                      ? ((e.screenExpanded = !1),
                        document.removeEventListener(
                          e.fullScreenEvent,
                          e.changeScreenExpanded,
                        ),
                        d.bus.emit("FullScreen:disable"))
                      : (e.screenExpanded = !0);
                  }),
                  (e.fullScreenEvent = e.getFullScreenEvent()),
                  e
                );
              }
              return (
                (function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function",
                    );
                  ((e.prototype = Object.create(n && n.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    n && a(e, n));
                })(n, e),
                (t = n),
                (r = [
                  {
                    key: "hidden",
                    get: function () {
                      return this.isHidden;
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      return (
                        this.fullScreenEvent ||
                          h ||
                          ((this.isHidden = !0),
                          d.bus.emit("Fullscreen:updateInterface", {
                            hidden: !0,
                          })),
                        Promise.resolve()
                      );
                    },
                  },
                  {
                    key: "activate",
                    value: function () {
                      if (
                        (d.bus.emit("FullScreen:updateInterface", {
                          displayIcon: w(
                            "viewer-fullscreen-cancel-16",
                            "fullscreen-cancel-16",
                          ),
                        }),
                        y.dispatchClickEvent("Fullscreen", {
                          action: "Fullscreen",
                        }),
                        E)
                      )
                        return this.emitFullscreenEventToParentWindow(!0);
                      this.fullScreenEvent
                        ? (this.isIpad() && this.addIpadClass(),
                          this.toggleFullScreen(),
                          document.addEventListener(
                            this.fullScreenEvent,
                            this.changeScreenExpanded,
                          ))
                        : h && this.emitFullscreenEventToParentWindow(!0);
                    },
                  },
                  {
                    key: "deactivate",
                    value: function () {
                      return (
                        d.bus.emit("FullScreen:updateInterface", {
                          displayIcon: w(
                            "viewer-fullscreen-16",
                            "fullscreen-16",
                          ),
                        }),
                        E
                          ? this.emitFullscreenEventToParentWindow(!1)
                          : (this.isIpad() && this.removeIpadClass(),
                            this.fullScreenEvent
                              ? this.screenExpanded && this.toggleFullScreen()
                              : void this.emitFullscreenEventToParentWindow(!1))
                      );
                    },
                  },
                  {
                    key: "getFullScreenEvent",
                    value: function () {
                      var e = window.document.documentElement,
                        n = {
                          requestFullscreen: "fullscreenchange",
                          webkitRequestFullScreen: "webkitfullscreenchange",
                          mozRequestFullScreen: "mozfullscreenchange",
                          msRequestFullscreen: "MSFullscreenChange",
                        };
                      for (var t in n) if (e[t]) return n[t];
                      return null;
                    },
                  },
                  {
                    key: "toggleFullScreen",
                    value: function () {
                      var e = window.document,
                        n = e.documentElement,
                        t =
                          n.requestFullscreen ||
                          n.mozRequestFullScreen ||
                          n.webkitRequestFullScreen ||
                          n.msRequestFullscreen,
                        r =
                          e.exitFullscreen ||
                          e.mozCancelFullScreen ||
                          e.webkitExitFullscreen ||
                          e.msExitFullscreen;
                      e.fullscreenElement ||
                      e.mozFullScreenElement ||
                      e.webkitFullscreenElement ||
                      e.msFullscreenElement
                        ? r.call(e)
                        : t.call(n);
                    },
                  },
                  {
                    key: "isIpad",
                    value: function () {
                      return !!(
                        navigator.userAgent.match(/(iPad)/) ||
                        ("MacIntel" === navigator.platform &&
                          void 0 !== navigator.standalone)
                      );
                    },
                  },
                  {
                    key: "addIpadClass",
                    value: function () {
                      document
                        .querySelector(".app")
                        .classList.add("app_ipad-fullscreen");
                    },
                  },
                  {
                    key: "removeIpadClass",
                    value: function () {
                      document
                        .querySelector(".app")
                        .classList.remove("app_ipad-fullscreen");
                    },
                  },
                  {
                    key: "emitFullscreenEventToParentWindow",
                    value: function (e) {
                      b.emit("viewer:fullscreen", e);
                    },
                  },
                ]) && u(t.prototype, r),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
              var t, r;
            })(e))();
          },
        });
      window.__CORE__ && window.__CORE__.addModule(S);
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 64967))), e.O());
  },
]);
