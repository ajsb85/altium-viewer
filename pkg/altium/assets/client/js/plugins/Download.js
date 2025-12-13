/*! For license information please see Download.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [75500, 74687, 11903, 318],
  {
    44718: (t, e, r) => {
      var n = r(10311);
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
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          (e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(r), !0).forEach(function (e) {
                u(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function u(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != o(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != o(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" == o(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var l = (0, window.__APP__.library.Vuex.createStore)({
        state: {
          threeD: null,
          originalFile: null,
          outputs: null,
          outputError: "",
        },
        mutations: {
          setData: function (t, e) {
            ((t.outputs = e.outputs || null),
              (t.originalFile = e.originalFile || null),
              (t.threeD = e.threeD || null));
          },
          setOutputError: function (t, e) {
            t.outputError = e || "";
          },
          updateOutputs: function (t, e) {
            t.outputs = t.outputs.map(function (t) {
              return t.id === e.id
                ? a(a({}, t), {}, { isActive: e.isActive })
                : t;
            });
          },
          updateThreeD: function (t, e) {
            t.threeD = a(a({}, t.threeD), {}, { isActive: e });
          },
          updateOriginal: function (t, e) {
            t.originalFile = a(a({}, t.originalFile), {}, { isActive: e });
          },
        },
      });
      const c = l;
      var s = ["id"],
        f = { class: "download-panel__btn-wrapper" },
        p = r(39308),
        h = r(65212),
        d = r(91261),
        y = r(77453),
        v = r(75419),
        m = r(74839),
        w = r(61762),
        g = r.n(w),
        b = r(51275),
        _ = r.n(b);
      function O(t) {
        return (
          (O =
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
          O(t)
        );
      }
      function E() {
        E = function () {
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
          u = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function c(t, e, r) {
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
          c({}, "");
        } catch (t) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            u = new N(n || []);
          return (o(a, "_invoke", { value: L(t, r, u) }), a);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var p = "suspendedStart",
          h = "suspendedYield",
          d = "executing",
          y = "completed",
          v = {};
        function m() {}
        function w() {}
        function g() {}
        var b = {};
        c(b, a, function () {
          return this;
        });
        var _ = Object.getPrototypeOf,
          P = _ && _(_(T([])));
        P && P !== r && n.call(P, a) && (b = P);
        var D = (g.prototype = m.prototype = Object.create(b));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, i, a, u) {
            var l = f(t[o], t, i);
            if ("throw" !== l.type) {
              var c = l.arg,
                s = c.value;
              return s && "object" == O(s) && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, a, u);
                    },
                    function (t) {
                      r("throw", t, a, u);
                    },
                  )
                : e.resolve(s).then(
                    function (t) {
                      ((c.value = t), a(c));
                    },
                    function (t) {
                      return r("throw", t, a, u);
                    },
                  );
            }
            u(l.arg);
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
        function L(e, r, n) {
          var o = p;
          return function (i, a) {
            if (o === d) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var l = A(u, n);
                if (l) {
                  if (l === v) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === p) throw ((o = y), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = d;
              var c = f(e, r, n);
              if ("normal" === c.type) {
                if (((o = n.done ? y : h), c.arg === v)) continue;
                return { value: c.arg, done: n.done };
              }
              "throw" === c.type &&
                ((o = y), (n.method = "throw"), (n.arg = c.arg));
            }
          };
        }
        function A(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                A(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              v
            );
          var i = f(o, e.iterator, r.arg);
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
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                v)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              v);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function S(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function N(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0));
        }
        function T(e) {
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
          throw new TypeError(O(e) + " is not iterable");
        }
        return (
          (w.prototype = g),
          o(D, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: w, configurable: !0 }),
          (w.displayName = c(g, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), c(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(D)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(j.prototype),
          c(j.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new j(s(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(D),
          c(D, l, "Generator"),
          c(D, a, function () {
            return this;
          }),
          c(D, "toString", function () {
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
          (e.values = T),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
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
                  (u.type = "throw"),
                  (u.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = n.call(a, "catchLoc"),
                    c = n.call(a, "finallyLoc");
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), S(r), v);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function P(t, e, r, n, o, i, a) {
        try {
          var u = t[i](a),
            l = u.value;
        } catch (t) {
          return void r(t);
        }
        u.done ? e(l) : Promise.resolve(l).then(n, o);
      }
      var D = window.__APP__.library.i18n.t;
      const x = (function () {
        var t,
          e =
            ((t = E().mark(function t(e) {
              return E().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        new Promise(function (t, r) {
                          var n = e.map(function (t) {
                            return fetch(t.fileUrl, { method: "GET" })
                              .then(function (t) {
                                if (!t.ok)
                                  throw new Error(
                                    D(
                                      "plugins.Download.downloadFiles.networkError",
                                    ),
                                  );
                                return t.blob();
                              })
                              .catch(function (t) {
                                r(t);
                              });
                          });
                          Promise.all(n)
                            .then(function (r) {
                              if (1 === r.length)
                                (g()(r[0], e[0].fileName), t());
                              else {
                                var n = new (_())();
                                (e.forEach(function (t, e) {
                                  var o = new Blob([r[e]], {
                                      type: "application/zip",
                                    }),
                                    i =
                                      t.fileName.split(".").length > 1
                                        ? t.fileName
                                        : "".concat(t.fileName, ".zip");
                                  n.file(i, o);
                                }),
                                  n
                                    .generateAsync({ type: "blob" })
                                    .then(function (e) {
                                      (g()(
                                        e,
                                        D(
                                          "plugins.Download.downloadFiles.defaultZipName",
                                        ),
                                      ),
                                        t());
                                    }));
                              }
                            })
                            .catch(function (t) {
                              return r(t);
                            });
                        }),
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })),
            function () {
              var e = this,
                r = arguments;
              return new Promise(function (n, o) {
                var i = t.apply(e, r);
                function a(t) {
                  P(i, n, o, a, u, "next", t);
                }
                function u(t) {
                  P(i, n, o, a, u, "throw", t);
                }
                a(void 0);
              });
            });
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      function j(t) {
        return (
          (j =
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
          j(t)
        );
      }
      function L() {
        L = function () {
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
          u = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function c(t, e, r) {
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
          c({}, "");
        } catch (t) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            u = new N(n || []);
          return (o(a, "_invoke", { value: x(t, r, u) }), a);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var p = "suspendedStart",
          h = "suspendedYield",
          d = "executing",
          y = "completed",
          v = {};
        function m() {}
        function w() {}
        function g() {}
        var b = {};
        c(b, a, function () {
          return this;
        });
        var _ = Object.getPrototypeOf,
          O = _ && _(_(T([])));
        O && O !== r && n.call(O, a) && (b = O);
        var E = (g.prototype = m.prototype = Object.create(b));
        function P(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function D(t, e) {
          function r(o, i, a, u) {
            var l = f(t[o], t, i);
            if ("throw" !== l.type) {
              var c = l.arg,
                s = c.value;
              return s && "object" == j(s) && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, a, u);
                    },
                    function (t) {
                      r("throw", t, a, u);
                    },
                  )
                : e.resolve(s).then(
                    function (t) {
                      ((c.value = t), a(c));
                    },
                    function (t) {
                      return r("throw", t, a, u);
                    },
                  );
            }
            u(l.arg);
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
        function x(e, r, n) {
          var o = p;
          return function (i, a) {
            if (o === d) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var l = A(u, n);
                if (l) {
                  if (l === v) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === p) throw ((o = y), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = d;
              var c = f(e, r, n);
              if ("normal" === c.type) {
                if (((o = n.done ? y : h), c.arg === v)) continue;
                return { value: c.arg, done: n.done };
              }
              "throw" === c.type &&
                ((o = y), (n.method = "throw"), (n.arg = c.arg));
            }
          };
        }
        function A(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                A(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              v
            );
          var i = f(o, e.iterator, r.arg);
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
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                v)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              v);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function S(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function N(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0));
        }
        function T(e) {
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
          throw new TypeError(j(e) + " is not iterable");
        }
        return (
          (w.prototype = g),
          o(E, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: w, configurable: !0 }),
          (w.displayName = c(g, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), c(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          P(D.prototype),
          c(D.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = D),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new D(s(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          P(E),
          c(E, l, "Generator"),
          c(E, a, function () {
            return this;
          }),
          c(E, "toString", function () {
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
          (e.values = T),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
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
                  (u.type = "throw"),
                  (u.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = n.call(a, "catchLoc"),
                    c = n.call(a, "finallyLoc");
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return (this.complete(r.completion, r.afterLoc), S(r), v);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function A(t, e, r, n, o, i, a) {
        try {
          var u = t[i](a),
            l = u.value;
        } catch (t) {
          return void r(t);
        }
        u.done ? e(l) : Promise.resolve(l).then(n, o);
      }
      function k(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          (e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                N(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : k(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function N(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != j(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, "string");
                if ("object" != j(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" == j(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var T = window.__APP__.library.i18n.t,
        F = window.__APP__,
        C = F.analytics,
        I = F.library.Vuex,
        B = I.mapState,
        U = I.mapMutations;
      const V = {
          name: "DownloadPanel",
          directives: { hint: v.h },
          components: {
            AfsCheckbox: p.A,
            AfsButton: h.A,
            AfsContextMenu: d.C,
            AfsText: y.A,
          },
          data: function () {
            return { isDownloading: !1, error: null, t: T };
          },
          props: { id: String },
          computed: S(
            S({}, B(["threeD", "originalFile", "outputs"])),
            {},
            {
              isActiveItems: function () {
                return this.downloadItems.some(function (t) {
                  return t.outputs.some(function (t) {
                    return t.isActive;
                  });
                });
              },
              hintConfig: function () {
                return {
                  type: "hint",
                  id: this.hintId,
                  modifiers: { y: "bottom", x: "center" },
                  offset: 8,
                  viewboxOffset: 0,
                };
              },
              hintId: function () {
                return (0, m.g)();
              },
              downloadItems: function () {
                var t = this,
                  e = [];
                return (
                  this.originalFile &&
                    e.push({
                      id: 1,
                      name: this.t(
                        "plugins.Download.viewApp.sectionTitleExport",
                      ),
                      outputs: [
                        this.getComputedItem(
                          this.originalFile,
                          this.updateOriginal,
                        ),
                      ],
                    }),
                  this.threeD &&
                    e.push({
                      id: 2,
                      name: this.t(
                        "plugins.Download.viewApp.sectionTitle3DModel",
                      ),
                      outputs: [
                        this.getComputedItem(this.threeD, this.updateThreeD),
                      ],
                    }),
                  this.outputs &&
                    e.push({
                      id: 3,
                      name: this.t(
                        "plugins.Download.viewApp.sectionTitleOutputs",
                      ),
                      outputs: this.outputs.map(function (e) {
                        return t.getComputedItem(e, function (r) {
                          return t.updateOutputs({ id: e.id, isActive: r });
                        });
                      }),
                    }),
                  e
                );
              },
            },
          ),
          watch: {
            downloadItems: function (t) {
              this.resetError();
            },
          },
          methods: S(
            S({}, U(["updateOutputs", "updateThreeD", "updateOriginal"])),
            {},
            {
              getComputedItem: function (t, e) {
                return S(
                  S({}, t),
                  {},
                  {
                    get _isActive() {
                      return this.isActive;
                    },
                    set _isActive(t) {
                      return e(t);
                    },
                  },
                );
              },
              download: function () {
                var t,
                  e = this;
                return ((t = L().mark(function t() {
                  var r, n;
                  return L().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              e.resetError(),
                              (r = e.getActiveLinks()),
                              (t.prev = 2),
                              (e.isDownloading = !0),
                              (t.next = 6),
                              Promise.all([x(r), e.resolveWithTimeout()])
                            );
                          case 6:
                            ((n = r.reduce(function (t, e) {
                              return t + ".".concat(e.typeName);
                            }, "Files")),
                              C.dispatchPanelsEvent("Download", { action: n }),
                              (t.next = 14));
                            break;
                          case 10:
                            ((t.prev = 10),
                              (t.t0 = t.catch(2)),
                              console.error(t.t0),
                              (e.error = t.t0));
                          case 14:
                            return (
                              (t.prev = 14),
                              (e.isDownloading = !1),
                              t.finish(14)
                            );
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 10, 14, 17]],
                  );
                })),
                function () {
                  var e = this,
                    r = arguments;
                  return new Promise(function (n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                      A(i, n, o, a, u, "next", t);
                    }
                    function u(t) {
                      A(i, n, o, a, u, "throw", t);
                    }
                    a(void 0);
                  });
                })();
              },
              getActiveLinks: function () {
                return this.downloadItems.reduce(function (t, e) {
                  var r = e.outputs.filter(function (t) {
                    return t.isActive;
                  });
                  return t.concat(r);
                }, []);
              },
              resolveWithTimeout: function () {
                return new Promise(function (t) {
                  return setTimeout(t, 2e3);
                });
              },
              resetError: function () {
                this.error = null;
              },
            },
          ),
        },
        G = (0, r(46021).Z)(V, [
          [
            "render",
            function (t, e, r, o, i, a) {
              var u = (0, n.resolveComponent)("AfsText"),
                l = (0, n.resolveComponent)("AfsCheckbox"),
                c = (0, n.resolveComponent)("AfsButton"),
                p = (0, n.resolveComponent)("AfsContextMenu"),
                h = (0, n.resolveDirective)("hint");
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)(
                  "div",
                  { id: r.id, class: "download-panel" },
                  [
                    ((0, n.openBlock)(!0),
                    (0, n.createElementBlock)(
                      n.Fragment,
                      null,
                      (0, n.renderList)(a.downloadItems, function (e) {
                        return (
                          (0, n.openBlock)(),
                          (0, n.createElementBlock)(
                            "div",
                            { key: e.id, class: "download-panel__item" },
                            [
                              (0, n.createVNode)(
                                u,
                                {
                                  class: "download-panel__title",
                                  type: "title",
                                },
                                {
                                  default: (0, n.withCtx)(function () {
                                    return [
                                      (0, n.createTextVNode)(
                                        (0, n.toDisplayString)(e.name),
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 2,
                                },
                                1024,
                              ),
                              ((0, n.openBlock)(!0),
                              (0, n.createElementBlock)(
                                n.Fragment,
                                null,
                                (0, n.renderList)(e.outputs, function (e) {
                                  return (
                                    (0, n.openBlock)(),
                                    (0, n.createElementBlock)(
                                      "div",
                                      {
                                        key: e.id,
                                        class: "download-panel__output",
                                      },
                                      [
                                        (0, n.createVNode)(
                                          l,
                                          {
                                            modelValue: e._isActive,
                                            "onUpdate:modelValue": function (
                                              t,
                                            ) {
                                              return (e._isActive = t);
                                            },
                                            disabled: t.isDownloading,
                                          },
                                          {
                                            default: (0, n.withCtx)(
                                              function () {
                                                return [
                                                  (0, n.createTextVNode)(
                                                    (0, n.toDisplayString)(
                                                      e.typeName,
                                                    ),
                                                    1,
                                                  ),
                                                ];
                                              },
                                            ),
                                            _: 2,
                                          },
                                          1032,
                                          [
                                            "modelValue",
                                            "onUpdate:modelValue",
                                            "disabled",
                                          ],
                                        ),
                                      ],
                                    )
                                  );
                                }),
                                128,
                              )),
                            ],
                          )
                        );
                      }),
                      128,
                    )),
                    (0, n.withDirectives)(
                      ((0, n.openBlock)(),
                      (0, n.createElementBlock)("div", f, [
                        (0, n.createVNode)(
                          c,
                          {
                            disabled: !a.isActiveItems,
                            primary: "",
                            wide: "",
                            "is-busy": t.isDownloading,
                            onClick: a.download,
                          },
                          {
                            default: (0, n.withCtx)(function () {
                              return [
                                (0, n.createTextVNode)(
                                  (0, n.toDisplayString)(
                                    t.t(
                                      "plugins.Download.viewApp.downloadButton",
                                    ),
                                  ),
                                  1,
                                ),
                              ];
                            }),
                            _: 1,
                          },
                          8,
                          ["disabled", "is-busy", "onClick"],
                        ),
                      ])),
                      [[h, void 0, a.hintId]],
                    ),
                    a.isActiveItems
                      ? (0, n.createCommentVNode)("v-if", !0)
                      : ((0, n.openBlock)(),
                        (0, n.createBlock)(
                          p,
                          (0, n.normalizeProps)(
                            (0, n.mergeProps)({ key: 0 }, a.hintConfig),
                          ),
                          {
                            default: (0, n.withCtx)(function () {
                              return [
                                (0, n.createTextVNode)(
                                  (0, n.toDisplayString)(
                                    t.t(
                                      "plugins.Download.viewApp.selectAtLeastOneItemHint",
                                    ),
                                  ),
                                  1,
                                ),
                              ];
                            }),
                            _: 1,
                          },
                          16,
                        )),
                    (0, n.withDirectives)(
                      (0, n.createElementVNode)(
                        "p",
                        { class: "download-panel__errors" },
                        (0, n.toDisplayString)(t.error),
                        513,
                      ),
                      [[n.vShow, t.error]],
                    ),
                  ],
                  8,
                  s,
                )
              );
            },
          ],
        ]);
      function R(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var H = window.__APP__.library.i18n.t;
      const M = function (t) {
        var e,
          r = { originalFile: null, threeD: null, outputs: [] },
          n = 0,
          o = (function (t, e) {
            var r =
              ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
            if (!r) {
              if (
                Array.isArray(t) ||
                (r = (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return R(t, e);
                    var r = {}.toString.call(t).slice(8, -1);
                    return (
                      "Object" === r &&
                        t.constructor &&
                        (r = t.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(t)
                        : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? R(t, e)
                          : void 0
                    );
                  }
                })(t)) ||
                (e && t && "number" == typeof t.length)
              ) {
                r && (t = r);
                var n = 0,
                  o = function () {};
                return {
                  s: o,
                  n: function () {
                    return n >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[n++] };
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
            var i,
              a = !0,
              u = !1;
            return {
              s: function () {
                r = r.call(t);
              },
              n: function () {
                var t = r.next();
                return ((a = t.done), t);
              },
              e: function (t) {
                ((u = !0), (i = t));
              },
              f: function () {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (u) throw i;
                }
              },
            };
          })(t);
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var i = e.value,
              a = i.fileType.toLowerCase();
            (a.includes("step") &&
              (r.threeD = {
                id: n,
                isActive: !1,
                typeName: H("plugins.Download.fileTypes.step.name"),
                fileUrl: i.dataFileUrl,
                fileName:
                  i.originalName ||
                  H("plugins.Download.fileTypes.step.defaultFilename"),
              }),
              a.includes("altium") &&
                r.outputs.push({
                  id: n++,
                  isActive: !1,
                  typeName: H("plugins.Download.fileTypes.altiumDesigner.name"),
                  fileUrl: i.dataFileUrl,
                  fileName:
                    i.originalName ||
                    H(
                      "plugins.Download.fileTypes.altiumDesigner.defaultFilename",
                    ),
                }),
              a.includes("gerber") &&
                r.outputs.push({
                  id: n++,
                  isActive: !1,
                  typeName: H("plugins.Download.fileTypes.gerber.name"),
                  fileUrl: i.dataFileUrl,
                  fileName:
                    i.originalName ||
                    H("plugins.Download.fileTypes.gerber.defaultFilename"),
                }),
              a.includes("idf") &&
                r.outputs.push({
                  id: n++,
                  isActive: !1,
                  typeName: H("plugins.Download.fileTypes.idf.name"),
                  fileUrl: i.dataFileUrl,
                  fileName:
                    i.originalName ||
                    H("plugins.Download.fileTypes.idf.defaultFilename"),
                }),
              a.includes("ipc2581") &&
                r.outputs.push({
                  id: n++,
                  isActive: !1,
                  typeName: H("plugins.Download.fileTypes.ipc2581.name"),
                  fileUrl: i.dataFileUrl,
                  fileName:
                    i.originalName ||
                    H("plugins.Download.fileTypes.ipc2581.defaultFilename"),
                }),
              a.includes("odb") &&
                r.outputs.push({
                  id: n++,
                  isActive: !1,
                  typeName: H("plugins.Download.fileTypes.odbpp.name"),
                  fileUrl: i.dataFileUrl,
                  fileName:
                    i.originalName ||
                    H("plugins.Download.fileTypes.odbpp.defaultFilename"),
                }),
              a.includes("pdf") &&
                r.outputs.push({
                  id: n++,
                  isActive: !1,
                  typeName: H("plugins.Download.fileTypes.pdf.name"),
                  fileUrl: i.dataFileUrl,
                  fileName:
                    i.originalName ||
                    H("plugins.Download.fileTypes.pdf.defaultFilename"),
                }));
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
        return r;
      };
      var Y = r(67674);
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
      function W(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Z(n.key), n));
        }
      }
      function Z(t) {
        var e = (function (t, e) {
          if ("object" != z(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != z(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == z(e) ? e : e + "";
      }
      function q(t, e, r) {
        return (
          (e = J(e)),
          (function (t, e) {
            if (e && ("object" == z(e) || "function" == typeof e)) return e;
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
            $()
              ? Reflect.construct(e, r || [], J(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function $() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return ($ = function () {
          return !!t;
        })();
      }
      function J(t) {
        return (
          (J = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          J(t)
        );
      }
      function K(t, e) {
        return (
          (K = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          K(t, e)
        );
      }
      var Q = window.__CORE__,
        X = window.__APP__.createModule,
        tt = window.__APP__.library.i18n.t,
        et = (0, Y.kD)("data-show-download-redirect", !1),
        rt = window.__APP__.utils.getIcon,
        nt = X({
          type: "Plugin",
          name: "Download",
          description: "Download",
          create: function (t) {
            var e = (function (t) {
              function e() {
                var t;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  (t = q(this, e, [
                    {
                      name: "Download",
                      displayIcon: rt("viewer-download-16", "download-v2-16"),
                      comment: "Download",
                      description: "Download",
                      order: 4,
                      hint: tt("plugins.Download.hint"),
                      view: {
                        type: "modal",
                        title: tt("plugins.Download.viewTitle"),
                        config: { type: "aside-right" },
                      },
                    },
                  ])).onStorageResolve(),
                  t
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
                    e && K(t, e));
                })(e, t),
                (r = e),
                (o = [
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
                        (this.hasDownloadData(M(Q.response.storage.files)) &&
                          !et) ||
                          this.setPluginHidden(!0),
                        Promise.resolve()
                      );
                    },
                  },
                  {
                    key: "activate",
                    value: function () {
                      var t;
                      (this.inited || this.initView(),
                        (t = M(Q.response.storage.files)),
                        l.commit("setData", t));
                    },
                  },
                  { key: "deactivate", value: function () {} },
                  {
                    key: "initView",
                    value: function () {
                      var t, e;
                      ((this.inited = !0),
                        (this.view =
                          ((t = this.metaInfo.name),
                          (e = (e = document.querySelector("#".concat(t)))
                            .parentNode),
                          (0, n.createApp)(G, { id: t }).use(c).mount(e))));
                    },
                  },
                  {
                    key: "onStorageResolve",
                    value: function () {
                      var t = this;
                      Q.bus.on("storageResolveComplete", function (e) {
                        !t.hasDownloadData(M(e.files)) || et
                          ? t.setPluginHidden(!0)
                          : t.setPluginHidden(!1);
                      });
                    },
                  },
                  {
                    key: "hasDownloadData",
                    value: function (t) {
                      return t.originalFile || t.threeD || t.outputs.length;
                    },
                  },
                  {
                    key: "setPluginHidden",
                    value: function (t) {
                      ((this.isHidden = t),
                        Q.bus.emit("Download:updateInterface", { hidden: t }));
                    },
                  },
                ]) && W(r.prototype, o),
                Object.defineProperty(r, "prototype", { writable: !1 }),
                r
              );
              var r, o;
            })(t);
            return new e();
          },
        });
      window.__CORE__ && window.__CORE__.addModule(nt);
    },
    10311: (t) => {
      t.exports = Vue;
    },
  },
  (t) => {
    (t.O(0, [66951, 21759], () => t((t.s = 44718))), t.O());
  },
]);
