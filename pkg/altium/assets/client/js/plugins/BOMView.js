"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [46206, 74687, 11903, 318],
  {
    57515: (e, t, r) => {
      var o = r(83404),
        n = r(64067);
      function i(e) {
        return (
          (i =
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
          i(e)
        );
      }
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, u(o.key), o));
        }
      }
      function u(e) {
        var t = (function (e, t) {
          if ("object" != i(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, "string");
            if ("object" != i(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == i(t) ? t : t + "";
      }
      function a(e, t, r) {
        return (
          (t = s(t)),
          (function (e, t) {
            if (t && ("object" == i(t) || "function" == typeof t)) return t;
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
              ? Reflect.construct(t, r || [], s(e).constructor)
              : t.apply(e, r),
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
      function s(e) {
        return (
          (s = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          s(e)
        );
      }
      function l(e, t) {
        return (
          (l = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          l(e, t)
        );
      }
      var d = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              a(this, t, arguments)
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
                t && l(e, t));
            })(t, e),
            (r = t),
            (o = [
              {
                key: "loadBomData",
                value: function (e) {
                  var t = this;
                  return (0, n.wG)(function () {
                    return fetch(
                      ""
                        .concat(t.domain, "/api/design/bom/octopart/")
                        .concat(t.designId),
                      { method: "GET", headers: t.apiHeaders },
                    );
                  })
                    .then(function (e) {
                      if (e.ok) return e.json();
                      throw (
                        t.logger.LogError(
                          "Bad bom data request of design ".concat(t.designId),
                        ),
                        new Error("Loading error. [".concat(e.statusText, "]"))
                      );
                    })
                    .then(function (e) {
                      if ("Progress" === e.status)
                        throw (
                          setTimeout(function () {
                            return t.loadBomData(!0).catch(function (e) {
                              !0 !== e &&
                                t.logger.LogError(
                                  "Update BOM data error. ".concat(
                                    e.message,
                                    ".",
                                  ),
                                );
                            });
                          }, 5e3),
                          new Error("Processing")
                        );
                      if (e.dataFileUrl)
                        return fetch(e.dataFileUrl, { method: "GET" });
                      t.logger.LogError(
                        "Bom data file url is 'undefined' for design ".concat(
                          t.designId,
                        ),
                      );
                    })
                    .then(function (e) {
                      if (e) {
                        if (e.ok) return e.json();
                        throw (
                          t.logger.LogError(
                            "Bad request of bom data file for design ".concat(
                              t.designId,
                            ),
                          ),
                          new Error(
                            "Loading error. [".concat(e.statusText, "]"),
                          )
                        );
                      }
                    })
                    .then(function (e) {
                      return (
                        t.dispatch({ type: "Run", data: t.toViewItems(e) }),
                        Promise.resolve(!0)
                      );
                    })
                    .catch(function (e) {
                      return "Processing" === e.message
                        ? Promise.resolve(!1)
                        : Promise.reject(e);
                    });
                },
              },
            ]),
            o && c(r.prototype, o),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, o;
        })(r(98170).Z),
        p = window.__APP__.createModule,
        y =
          (window.__APP__.library.i18n.t,
          p({
            type: "View",
            description: "A design BOM view module",
            create: function (e) {
              return (0, o.Z)(e, d);
            },
          }));
      window.__CORE__ && window.__CORE__.addModule(y);
    },
    10311: (e) => {
      e.exports = Vue;
    },
  },
  (e) => {
    (e.O(0, [66951, 21759], () => e((e.s = 57515))), e.O());
  },
]);
