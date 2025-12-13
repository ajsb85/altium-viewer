/*! For license information please see SchCompareView.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [7938],
  {
    92078: (t, e, r) => {
      var n = r(4530);
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
      function i() {
        i = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          c = "function" == typeof Symbol ? Symbol : {},
          u = c.iterator || "@@iterator",
          s = c.asyncIterator || "@@asyncIterator",
          h = c.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function f(t, e, r, n) {
          var o = e && e.prototype instanceof w ? e : w,
            i = Object.create(o.prototype),
            c = new D(n || []);
          return (a(i, "_invoke", { value: P(t, r, c) }), i);
        }
        function p(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = f;
        var v = "suspendedStart",
          d = "suspendedYield",
          y = "executing",
          m = "completed",
          g = {};
        function w() {}
        function b() {}
        function _() {}
        var L = {};
        l(L, u, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          x = S && S(S(I([])));
        x && x !== r && n.call(x, u) && (L = x);
        var E = (_.prototype = w.prototype = Object.create(L));
        function k(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function C(t, e) {
          function r(i, a, c, u) {
            var s = p(t[i], t, a);
            if ("throw" !== s.type) {
              var h = s.arg,
                l = h.value;
              return l && "object" == o(l) && n.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      r("next", t, c, u);
                    },
                    function (t) {
                      r("throw", t, c, u);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((h.value = t), c(h));
                    },
                    function (t) {
                      return r("throw", t, c, u);
                    },
                  );
            }
            u(s.arg);
          }
          var i;
          a(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function P(e, r, n) {
          var o = v;
          return function (i, a) {
            if (o === y) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = O(c, n);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === v) throw ((o = m), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var s = p(e, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? m : d), s.arg === g)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = m), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function O(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                O(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              g
            );
          var i = p(o, e.iterator, r.arg);
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
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                g)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              g);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function V(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function D(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function I(e) {
          if (e || "" === e) {
            var r = e[u];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                a = function r() {
                  for (; ++i < e.length; )
                    if (n.call(e, i))
                      return ((r.value = e[i]), (r.done = !1), r);
                  return ((r.value = t), (r.done = !0), r);
                };
              return (a.next = a);
            }
          }
          throw new TypeError(o(e) + " is not iterable");
        }
        return (
          (b.prototype = _),
          a(E, "constructor", { value: _, configurable: !0 }),
          a(_, "constructor", { value: b, configurable: !0 }),
          (b.displayName = l(_, h, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(t, _)
                : ((t.__proto__ = _), l(t, h, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          k(C.prototype),
          l(C.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = C),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new C(f(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          k(E),
          l(E, h, "Generator"),
          l(E, u, function () {
            return this;
          }),
          l(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = I),
          (D.prototype = {
            constructor: D,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(V),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
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
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
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
                g
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), V(r), g);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
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
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: I(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      }
      function a(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, c(n.key), n));
        }
      }
      function c(t) {
        var e = (function (t, e) {
          if ("object" != o(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == o(e) ? e : e + "";
      }
      var u = window.__APP__.library.i18n.t,
        s = (function () {
          return (
            (t = function t(e, r, n) {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.viewEngines = new Map()),
                (this.active = !1),
                (this.badges = ""),
                (this.name = "SchCompareView"),
                (this.displayName = "Schematic Compare"),
                (this.comment = "SchCompareView"),
                (this.hidden = !1),
                (this.comment = n),
                (this.core = e),
                (this.logger = this.core.createLogger(r)),
                (this.hidden = !1));
            }),
            (e = [
              {
                key: "dependencies",
                get: function () {
                  return ["schCompare"];
                },
              },
              { key: "hasControls", value: function (t) {} },
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
                    "SchCompareView:shown",
                    "SchCompareView:selectedItem",
                    "SchCompareView:selectedItem+DocumentReady",
                  ];
                },
              },
              {
                key: "setup",
                value: function (t) {
                  var e = this;
                  return (
                    (this.core = t),
                    (this.engine = this.core.engines.SchCompareEngine),
                    this.logger.LogDebug("Setup SCH view"),
                    this.core.bus.on(
                      "SchCompareView:showDocument",
                      this.engine.showDocument,
                    ),
                    this.core.bus.on(
                      "SchCompareView:selectedItem",
                      function (t) {
                        return (
                          (r = e),
                          (n = void 0),
                          (o = void 0),
                          (a = i().mark(function e() {
                            var r, n, o, a, c, u;
                            return i().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((a = t.item),
                                        (c = t.connectivity),
                                        !(u =
                                          (null ===
                                            (r =
                                              null == c ? void 0 : c.owner) ||
                                          void 0 === r
                                            ? void 0
                                            : r.docId) ||
                                          a.docId ||
                                          (null == a
                                            ? void 0
                                            : a.currentDocId) ||
                                          (null ===
                                            (o =
                                              null ===
                                                (n =
                                                  null == a
                                                    ? void 0
                                                    : a.documents) ||
                                              void 0 === n
                                                ? void 0
                                                : n.find(function (t) {
                                                    return !!t.isModified;
                                                  })) || void 0 === o
                                            ? void 0
                                            : o.id)))
                                      ) {
                                        e.next = 5;
                                        break;
                                      }
                                      return (
                                        (e.next = 5),
                                        this.engine.showDocument(u)
                                      );
                                    case 5:
                                      (this.core.bus.emit(
                                        "SchCompareView:selectedItem+DocumentReady",
                                        t,
                                      ),
                                        this.logger.LogDebug(a));
                                    case 7:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          })),
                          new (o || (o = Promise))(function (t, e) {
                            function i(t) {
                              try {
                                u(a.next(t));
                              } catch (t) {
                                e(t);
                              }
                            }
                            function c(t) {
                              try {
                                u(a.throw(t));
                              } catch (t) {
                                e(t);
                              }
                            }
                            function u(e) {
                              var r;
                              e.done
                                ? t(e.value)
                                : ((r = e.value),
                                  r instanceof o
                                    ? r
                                    : new o(function (t) {
                                        t(r);
                                      })).then(i, c);
                            }
                            u((a = a.apply(r, n || [])).next());
                          })
                        );
                        var r, n, o, a;
                      },
                    ),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "activate",
                value: function (t) {
                  (this.logger.LogDebug("Activate SCH view"),
                    (this.active = !0),
                    (this.div = t),
                    this.engine
                      ? this.engine.showView(t)
                      : this.updateLoader(
                          "error",
                          "Schematic Compare engine has not found.",
                        ));
                },
              },
              { key: "deactivate", value: function () {} },
              {
                key: "updateLoader",
                value: function (t, e) {
                  (this.loader && (this.loader.destroy(), (this.loader = null)),
                    t &&
                      e &&
                      (this.loader = window.__APP__.loader(this.div, {
                        message: e,
                        type: t,
                      })));
                },
              },
              {
                key: "onSchDocumentLoad",
                value: function (t) {
                  this.active &&
                    (this.updateLoader("large", u("viewer.common.processing")),
                    (this.preview = window.__APP__.preview(
                      this.div,
                      t.previewUrl,
                    )));
                },
              },
              {
                key: "onSchDocumentDidLoad",
                value: function () {
                  this.preview &&
                    (this.preview.destroy(), (this.preview = null));
                },
              },
            ]),
            e && a(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        h = window.__CORE__;
      const l = (0, window.__APP__.createModule)({
        type: "View",
        name: "SchCompare",
        description: "Schematic Compare View",
        create: function () {
          return new s(
            h,
            "SchCompareView",
            "Compare",
            "Presents sch compare documents",
          );
        },
      });
      var f = r(89242);
      function p(t) {
        return (
          (p =
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
          p(t)
        );
      }
      function v() {
        v = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function s(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
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
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function h(t, e, r, n) {
          var i = e && e.prototype instanceof w ? e : w,
            a = Object.create(i.prototype),
            c = new D(n || []);
          return (o(a, "_invoke", { value: P(t, r, c) }), a);
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = h;
        var f = "suspendedStart",
          d = "suspendedYield",
          y = "executing",
          m = "completed",
          g = {};
        function w() {}
        function b() {}
        function _() {}
        var L = {};
        s(L, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          x = S && S(S(I([])));
        x && x !== r && n.call(x, a) && (L = x);
        var E = (_.prototype = w.prototype = Object.create(L));
        function k(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function C(t, e) {
          function r(o, i, a, c) {
            var u = l(t[o], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                h = s.value;
              return h && "object" == p(h) && n.call(h, "__await")
                ? e.resolve(h.__await).then(
                    function (t) {
                      r("next", t, a, c);
                    },
                    function (t) {
                      r("throw", t, a, c);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return r("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function P(e, r, n) {
          var o = f;
          return function (i, a) {
            if (o === y) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = O(c, n);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === f) throw ((o = m), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var s = l(e, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? m : d), s.arg === g)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = m), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function O(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                O(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              g
            );
          var i = l(o, e.iterator, r.arg);
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
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                g)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              g);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function V(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function D(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function I(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o))
                      return ((r.value = e[o]), (r.done = !1), r);
                  return ((r.value = t), (r.done = !0), r);
                };
              return (i.next = i);
            }
          }
          throw new TypeError(p(e) + " is not iterable");
        }
        return (
          (b.prototype = _),
          o(E, "constructor", { value: _, configurable: !0 }),
          o(_, "constructor", { value: b, configurable: !0 }),
          (b.displayName = s(_, u, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(t, _)
                : ((t.__proto__ = _), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          k(C.prototype),
          s(C.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = C),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new C(h(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          k(E),
          s(E, u, "Generator"),
          s(E, a, function () {
            return this;
          }),
          s(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return ((t.value = n), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = I),
          (D.prototype = {
            constructor: D,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(V),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
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
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
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
                g
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), V(r), g);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
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
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: I(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      }
      function d(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, y(n.key), n));
        }
      }
      function y(t) {
        var e = (function (t, e) {
          if ("object" != p(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != p(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == p(e) ? e : e + "";
      }
      var m = (function () {
          return (
            (t = function t(e, r, n) {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.viewEngines = new Map()),
                (this.active = !1),
                (this.badges = ""),
                (this.name = "SchCompareView"),
                (this.displayName = "Schematic Compare"),
                (this.comment = "SchCompareView"),
                (this.hidden = !1),
                (this.comment = n),
                (this.core = e),
                (this.logger = this.core.createLogger(r)),
                (this.hidden = !1));
            }),
            (e = [
              {
                key: "dependencies",
                get: function () {
                  return ["schCompare"];
                },
              },
              { key: "hasControls", value: function (t) {} },
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
                    "SchCompareView:shown",
                    "SchCompareView:selectedItem",
                    "SchCompareView:clearSelection",
                    "SchCompareView:selectedItem+DocumentReady",
                  ];
                },
              },
              {
                key: "setup",
                value: function (t) {
                  var e = this;
                  return (
                    (this.core = t),
                    (this.engine = this.core.engines.SchCompareEngine),
                    this.logger.LogDebug("Setup SCH view"),
                    this.core.bus.on(
                      "SchCompareView:showDocument",
                      this.engine.showDocument,
                    ),
                    this.core.bus.on(
                      "SchCompareView:selectedItem",
                      function (t) {
                        return (
                          (r = e),
                          (n = void 0),
                          (o = void 0),
                          (i = v().mark(function e() {
                            var r, n, o, i, a, c;
                            return v().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((o = t.item),
                                        (i = t.subItems),
                                        (null == o ? void 0 : o.objectKind) ===
                                          f.k.SCH_NET &&
                                          i.length &&
                                          (a = i[0]),
                                        !(c =
                                          (null == a ? void 0 : a.documentId) ||
                                          o.documentId ||
                                          (null ===
                                            (n =
                                              null ===
                                                (r =
                                                  null == o
                                                    ? void 0
                                                    : o.documents) ||
                                              void 0 === r
                                                ? void 0
                                                : r.find(function (t) {
                                                    return !!t.isModified;
                                                  })) || void 0 === n
                                            ? void 0
                                            : n.id)))
                                      ) {
                                        e.next = 6;
                                        break;
                                      }
                                      return (
                                        (e.next = 6),
                                        this.engine.showDocument(c)
                                      );
                                    case 6:
                                      (this.core.bus.emit(
                                        "SchCompareView:selectedItem+DocumentReady",
                                        t,
                                      ),
                                        this.logger.LogDebug(o));
                                    case 8:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          })),
                          new (o || (o = Promise))(function (t, e) {
                            function a(t) {
                              try {
                                u(i.next(t));
                              } catch (t) {
                                e(t);
                              }
                            }
                            function c(t) {
                              try {
                                u(i.throw(t));
                              } catch (t) {
                                e(t);
                              }
                            }
                            function u(e) {
                              var r;
                              e.done
                                ? t(e.value)
                                : ((r = e.value),
                                  r instanceof o
                                    ? r
                                    : new o(function (t) {
                                        t(r);
                                      })).then(a, c);
                            }
                            u((i = i.apply(r, n || [])).next());
                          })
                        );
                        var r, n, o, i;
                      },
                    ),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "activate",
                value: function (t) {
                  (this.logger.LogDebug("Activate SCH view"),
                    (this.active = !0),
                    (this.div = t),
                    this.engine
                      ? this.engine.showView(t)
                      : this.updateLoader(
                          "error",
                          "Schematic Compare engine has not found.",
                        ));
                },
              },
              { key: "deactivate", value: function () {} },
              {
                key: "updateLoader",
                value: function (t, e) {
                  (this.loader && (this.loader.destroy(), (this.loader = null)),
                    t &&
                      e &&
                      (this.loader = window.__APP__.loader(this.div, {
                        message: e,
                        type: t,
                      })));
                },
              },
              {
                key: "onSchDocumentLoad",
                value: function (t) {
                  this.active &&
                    (this.updateLoader("large", "Processing document"),
                    (this.preview = window.__APP__.preview(
                      this.div,
                      t.previewUrl,
                    )));
                },
              },
              {
                key: "onSchDocumentDidLoad",
                value: function () {
                  this.preview &&
                    (this.preview.destroy(), (this.preview = null));
                },
              },
            ]),
            e && d(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        g = window.__CORE__;
      const w = (0, window.__APP__.createModule)({
        type: "View",
        name: "SchCompare",
        description: "Schematic Compare View",
        create: function () {
          return new m(
            g,
            "SchCompareView",
            "Compare",
            "Presents sch compare documents",
          );
        },
      });
      var b = window.__CORE__;
      1 === n.i ? b.addModule(l) : b.addModule(w);
    },
  },
  (t) => {
    (t.O(0, [21759], () => t((t.s = 92078))), t.O());
  },
]);
