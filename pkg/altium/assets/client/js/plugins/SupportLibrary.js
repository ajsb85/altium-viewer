/*! For license information please see SupportLibrary.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [65019],
  {
    24997: (t, e, r) => {
      var n = r(49235),
        o = 0.01,
        i = o;
      function a(t) {
        return (
          (a =
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
          a(t)
        );
      }
      function u() {
        u = function () {
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
          s = i.iterator || "@@iterator",
          l = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function f(t, e, r) {
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
          f({}, "");
        } catch (t) {
          f = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function h(t, e, r, n) {
          var i = e && e.prototype instanceof b ? e : b,
            a = Object.create(i.prototype),
            u = new j(n || []);
          return (o(a, "_invoke", { value: T(t, r, u) }), a);
        }
        function p(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = h;
        var y = "suspendedStart",
          d = "suspendedYield",
          v = "executing",
          m = "completed",
          g = {};
        function b() {}
        function w() {}
        function S() {}
        var k = {};
        f(k, s, function () {
          return this;
        });
        var P = Object.getPrototypeOf,
          C = P && P(P(A([])));
        C && C !== r && n.call(C, s) && (k = C);
        var L = (S.prototype = b.prototype = Object.create(k));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            f(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function M(t, e) {
          function r(o, i, u, s) {
            var l = p(t[o], t, i);
            if ("throw" !== l.type) {
              var c = l.arg,
                f = c.value;
              return f && "object" == a(f) && n.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      r("next", t, u, s);
                    },
                    function (t) {
                      r("throw", t, u, s);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      ((c.value = t), u(c));
                    },
                    function (t) {
                      return r("throw", t, u, s);
                    },
                  );
            }
            s(l.arg);
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
        function T(e, r, n) {
          var o = y;
          return function (i, a) {
            if (o === v) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var s = E(u, n);
                if (s) {
                  if (s === g) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === y) throw ((o = m), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = v;
              var l = p(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? m : d), l.arg === g)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = m), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function E(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                E(e, r),
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
        function D(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function O(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function j(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(D, this),
            this.reset(!0));
        }
        function A(e) {
          if (e || "" === e) {
            var r = e[s];
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
          throw new TypeError(a(e) + " is not iterable");
        }
        return (
          (w.prototype = S),
          o(L, "constructor", { value: S, configurable: !0 }),
          o(S, "constructor", { value: w, configurable: !0 }),
          (w.displayName = f(S, c, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(t, S)
                : ((t.__proto__ = S), f(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(M.prototype),
          f(M.prototype, l, function () {
            return this;
          }),
          (e.AsyncIterator = M),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new M(h(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(L),
          f(L, c, "Generator"),
          f(L, s, function () {
            return this;
          }),
          f(L, "toString", function () {
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
          (e.values = A),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(O),
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
                  var s = n.call(a, "catchLoc"),
                    l = n.call(a, "finallyLoc");
                  if (s && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
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
                  return (this.complete(r.completion, r.afterLoc), O(r), g);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    O(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: A(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      }
      function s(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, l(n.key), n));
        }
      }
      function l(t) {
        var e = (function (t, e) {
          if ("object" != a(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != a(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == a(e) ? e : e + "";
      }
      var c = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        return (
          (e = t),
          (r = [
            {
              key: "getUniTrackSize",
              value: function (t) {
                return t.size[0] > t.size[1]
                  ? [0.5 * t.size[0] - t.radius, 0]
                  : [0, 0.5 * t.size[1] - t.radius];
              },
            },
            {
              key: "transformUniPoint",
              value: function (t, e) {
                return [
                  (t = this.rotatePoint(t, e.direction))[0] + e.position[0],
                  t[1] + e.position[1],
                ];
              },
            },
            {
              key: "rotatePoint",
              value: function (t, e) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [0, 0],
                  n = e[0],
                  o = e[1];
                return [
                  n * (t[0] - r[0]) - o * (t[1] - r[1]) + r[0],
                  o * (t[0] - r[0]) + n * (t[1] - r[1]) + r[1],
                ];
              },
            },
            {
              key: "rotatePointRad",
              value: function (t, e) {
                var r = Math.cos(e),
                  n = Math.sin(e);
                return [t[0] * r - t[1] * n, t[0] * n + t[1] * r];
              },
            },
            {
              key: "getUniAngles",
              value: function (t, e) {
                var r = Math.atan2(e.direction[1], e.direction[0]);
                return [t[0] + r, t[1] + r];
              },
            },
            {
              key: "getArcVertices",
              value: u().mark(function t(e, r, n, o) {
                var i, a, s, l;
                return u().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        ((i = o / r), (a = n[0]));
                      case 2:
                        if (!(a <= n[1])) {
                          t.next = 10;
                          break;
                        }
                        return (
                          (s = e[0] + r * Math.cos(a)),
                          (l = e[1] + r * Math.sin(a)),
                          (a += i),
                          (t.next = 8),
                          [s, l]
                        );
                      case 8:
                        t.next = 2;
                        break;
                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            },
            {
              key: "distanceBetweenSegments",
              value: function (e, r, n, o) {
                var i, a, u;
                if (this.isIntersected(e, r, n, o)) {
                  var s =
                    null !== (i = this.getCrossPoint(e, r, n, o)) &&
                    void 0 !== i
                      ? i
                      : e;
                  return [0, new S(s, s)];
                }
                var l = Number.MAX_VALUE;
                return (
                  (u = t.distanceToSegmentSq(e, n, o))[0] < l &&
                    ((l = u[0]), (a = new S(e, u[1]))),
                  (u = t.distanceToSegmentSq(r, n, o))[0] < l &&
                    ((l = u[0]), (a = new S(r, u[1]))),
                  (u = t.distanceToSegmentSq(n, e, r))[0] < l &&
                    ((l = u[0]), (a = new S(u[1], n))),
                  (u = t.distanceToSegmentSq(o, e, r))[0] < l &&
                    ((l = u[0]), (a = new S(u[1], o))),
                  [l, a]
                );
              },
            },
            {
              key: "isIntersected",
              value: function (t, e, r, n) {
                var o = e[0] - t[0],
                  i = e[1] - t[1],
                  a = n[0] - r[0],
                  u = n[1] - r[1],
                  s = i * a - o * u,
                  l = ((t[0] - r[0]) * u + (r[1] - t[1]) * a) / s;
                if (Number.isNaN(l)) return !1;
                var c = ((r[0] - t[0]) * i + (t[1] - r[1]) * o) / -s;
                return l >= 0 && l <= 1 && c >= 0 && c <= 1;
              },
            },
            {
              key: "getCrossPoint",
              value: function (t, e, r, n) {
                var o;
                if (e[1] - t[1] != 0) {
                  var i = (e[0] - t[0]) / (t[1] - e[1]),
                    a = r[0] - n[0] + (r[1] - n[1]) * i;
                  if (!a) return null;
                  o = (r[0] - t[0] + (r[1] - t[1]) * i) / a;
                } else {
                  if (!(r[1] - n[1])) return null;
                  o = (r[1] - t[1]) / (r[1] - n[1]);
                }
                return [r[0] + (n[0] - r[0]) * o, r[1] + (n[1] - r[1]) * o];
              },
            },
            {
              key: "distanceToSegmentSq",
              value: function (t, e, r) {
                var n,
                  o = r[0] - e[0],
                  i = r[1] - e[1];
                if (0 == o && 0 == i)
                  return (
                    (n = e),
                    [(o = t[0] - e[0]) * o + (i = t[1] - e[1]) * i, n]
                  );
                var a =
                  ((t[0] - e[0]) * o + (t[1] - e[1]) * i) / (o * o + i * i);
                return (
                  a < 0
                    ? ((n = [e[0], e[1]]), (o = t[0] - e[0]), (i = t[1] - e[1]))
                    : a > 1
                      ? ((n = [r[0], r[1]]),
                        (o = t[0] - r[0]),
                        (i = t[1] - r[1]))
                      : ((n = [e[0] + a * o, e[1] + a * i]),
                        (o = t[0] - n[0]),
                        (i = t[1] - n[1])),
                  [o * o + i * i, n]
                );
              },
            },
            {
              key: "isOverlappedBoundRects",
              value: function (t, e, r, n) {
                var o = Math.abs(e[0] - t[0]),
                  i = Math.abs(e[1] - t[1]),
                  a = Math.abs(n[0] - r[0]),
                  u = Math.abs(n[1] - r[1]);
                return (
                  2 * Math.abs(t[0] + o / 2 - (r[0] + a / 2)) < o + a &&
                  2 * Math.abs(t[1] + i / 2 - (r[1] + u / 2)) < i + u
                );
              },
            },
          ]),
          r && s(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, r;
      })();
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
      function h() {
        h = function () {
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
          s = i.toStringTag || "@@toStringTag";
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
        function c(t, e, r, n) {
          var i = e && e.prototype instanceof b ? e : b,
            a = Object.create(i.prototype),
            u = new j(n || []);
          return (o(a, "_invoke", { value: T(t, r, u) }), a);
        }
        function p(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = c;
        var y = "suspendedStart",
          d = "suspendedYield",
          v = "executing",
          m = "completed",
          g = {};
        function b() {}
        function w() {}
        function S() {}
        var k = {};
        l(k, a, function () {
          return this;
        });
        var P = Object.getPrototypeOf,
          C = P && P(P(A([])));
        C && C !== r && n.call(C, a) && (k = C);
        var L = (S.prototype = b.prototype = Object.create(k));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function M(t, e) {
          function r(o, i, a, u) {
            var s = p(t[o], t, i);
            if ("throw" !== s.type) {
              var l = s.arg,
                c = l.value;
              return c && "object" == f(c) && n.call(c, "__await")
                ? e.resolve(c.__await).then(
                    function (t) {
                      r("next", t, a, u);
                    },
                    function (t) {
                      r("throw", t, a, u);
                    },
                  )
                : e.resolve(c).then(
                    function (t) {
                      ((l.value = t), a(l));
                    },
                    function (t) {
                      return r("throw", t, a, u);
                    },
                  );
            }
            u(s.arg);
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
        function T(e, r, n) {
          var o = y;
          return function (i, a) {
            if (o === v) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var s = E(u, n);
                if (s) {
                  if (s === g) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === y) throw ((o = m), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = v;
              var l = p(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? m : d), l.arg === g)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = m), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function E(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                E(e, r),
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
        function D(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function O(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function j(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(D, this),
            this.reset(!0));
        }
        function A(e) {
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
          throw new TypeError(f(e) + " is not iterable");
        }
        return (
          (w.prototype = S),
          o(L, "constructor", { value: S, configurable: !0 }),
          o(S, "constructor", { value: w, configurable: !0 }),
          (w.displayName = l(S, s, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(t, S)
                : ((t.__proto__ = S), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(M.prototype),
          l(M.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = M),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new M(c(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(L),
          l(L, s, "Generator"),
          l(L, a, function () {
            return this;
          }),
          l(L, "toString", function () {
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
          (e.values = A),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(O),
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
                  var s = n.call(a, "catchLoc"),
                    l = n.call(a, "finallyLoc");
                  if (s && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
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
                  return (this.complete(r.completion, r.afterLoc), O(r), g);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    O(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: A(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      }
      function p(t, e) {
        var r =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return y(t, e);
                var r = {}.toString.call(t).slice(8, -1);
                return (
                  "Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? y(t, e)
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
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function d(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, m(n.key), n));
        }
      }
      function v(t, e, r) {
        return (
          e && d(t.prototype, e),
          r && d(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function m(t) {
        var e = (function (t, e) {
          if ("object" != f(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != f(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == f(e) ? e : e + "";
      }
      function g(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var b,
        w = function (t, e, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(t) {
              try {
                s(n.next(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              try {
                s(n.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function s(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(a, u);
            }
            s((n = n.apply(t, e || [])).next());
          });
        };
      !(function (t) {
        ((t[(t.Vertices = 0)] = "Vertices"),
          (t[(t.Lines = 1)] = "Lines"),
          (t[(t.Both = 2)] = "Both"));
      })(b || (b = {}));
      var S = v(function t(e, r) {
          (g(this, t), (this.from = e), (this.to = r));
        }),
        k = (function () {
          function t() {
            (g(this, t),
              (this.vertices = []),
              (this.lines = []),
              (this._reduced = !1));
          }
          return v(
            t,
            [
              {
                key: "reduced",
                get: function () {
                  return this._reduced;
                },
              },
              {
                key: "reduce",
                value: function () {
                  ((this._reduced = !0), (this.lines = []));
                },
              },
              {
                key: "addLine",
                value: function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : b.Vertices;
                  if (e && !(e.length < 2)) {
                    var n = r === b.Lines || r === b.Both,
                      o = r === b.Vertices || r === b.Both;
                    (o && this.vertices.push(e),
                      ((!this.reduced && o) || (this.reduced && n)) &&
                        t.buildLines(e, this.lines));
                  }
                },
              },
              {
                key: "addArc",
                value: function (t, e, r) {
                  var n = Array.from(c.getArcVertices(t, e, r, i));
                  this.addLine(n);
                },
              },
            ],
            [
              {
                key: "buildLines",
                value: function (t, e) {
                  for (var r = t[0], n = 1; n < t.length; n++) {
                    var o = t[n];
                    (e.push(new S(r, o)), (r = o));
                  }
                },
              },
            ],
          );
        })(),
        P = (function () {
          return v(
            function t() {
              (g(this, t),
                (this.epsilon = 1e-4),
                (this.logger = n.Q.createLogger("Support library")));
            },
            [
              {
                key: "setScene2D",
                value: function (t) {
                  this.scene2D = t;
                },
              },
              {
                key: "getContour",
                value: function (t) {
                  for (var e = [], r = 0; r < t.length; r++) {
                    var n = t[r],
                      o = new k();
                    o.layerIndex = n.GetLayerIndex();
                    for (var i = 0; i < n.GetArcsCount(); i++)
                      this.addArcContour(o, n.GetArc(i));
                    for (i = 0; i < n.GetPolysCount(); i++)
                      this.addPolyContour(o, n.GetPoly(i));
                    for (i = 0; i < n.GetUnisCount(); i++)
                      this.addUniContour(o, n.GetUni(i));
                    0 != o.vertices.length && e.push(o);
                  }
                  return e;
                },
              },
              {
                key: "getClosestDistance",
                value: function (t, e) {
                  return w(
                    this,
                    void 0,
                    void 0,
                    h().mark(function r() {
                      var n, i, a, u, s, l, c, f, y, d;
                      return h().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (!(n = this.tryReduceContours(t, e, -1))) {
                                  r.next = 3;
                                  break;
                                }
                                return r.abrupt("return", n);
                              case 3:
                                ((a = Number.MAX_VALUE),
                                  (u = p(t)),
                                  (r.prev = 5),
                                  u.s());
                              case 7:
                                if ((s = u.n()).done) {
                                  r.next = 36;
                                  break;
                                }
                                ((l = s.value),
                                  (c = p(e)),
                                  (r.prev = 10),
                                  c.s());
                              case 12:
                                if ((f = c.n()).done) {
                                  r.next = 26;
                                  break;
                                }
                                return (
                                  (y = f.value),
                                  (r.next = 16),
                                  this.getClosestLines(l.lines, y.lines, a)
                                );
                              case 16:
                                if (!(d = r.sent)) {
                                  r.next = 24;
                                  break;
                                }
                                if (
                                  (((i = d).contour1 = l),
                                  (i.contour2 = y),
                                  (a = i.distance),
                                  0 !== i.distance)
                                ) {
                                  r.next = 24;
                                  break;
                                }
                                return r.abrupt("return", i);
                              case 24:
                                r.next = 12;
                                break;
                              case 26:
                                r.next = 31;
                                break;
                              case 28:
                                ((r.prev = 28),
                                  (r.t0 = r.catch(10)),
                                  c.e(r.t0));
                              case 31:
                                return ((r.prev = 31), c.f(), r.finish(31));
                              case 34:
                                r.next = 7;
                                break;
                              case 36:
                                r.next = 41;
                                break;
                              case 38:
                                ((r.prev = 38), (r.t1 = r.catch(5)), u.e(r.t1));
                              case 41:
                                return ((r.prev = 41), u.f(), r.finish(41));
                              case 44:
                                return (
                                  i &&
                                    (i.distance =
                                      Math.round((Math.sqrt(a) / o) * 100) /
                                      100),
                                  r.abrupt("return", i)
                                );
                              case 46:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this,
                        [
                          [5, 38, 41, 44],
                          [10, 28, 31, 34],
                        ],
                      );
                    }),
                  );
                },
              },
              {
                key: "tryReduceContours",
                value: function (t, e, r) {
                  var n = this.logStatistic(t, e, r),
                    o = this.needReduce(n[0], t[0].reduced, n[1], e[0].reduced);
                  if (-1 !== o) {
                    var i = [t, e],
                      a = this.getReducedContours(t, e);
                    return Array.isArray(a)
                      ? (i[o].forEach(function (t) {
                          return t.reduce();
                        }),
                        (i[o][0].lines = a[o]),
                        this.tryReduceContours(t, e, o))
                      : a;
                  }
                  return null;
                },
              },
              {
                key: "logStatistic",
                value: function (t, e, r) {
                  var n = 0,
                    o = 0;
                  (t.forEach(function (t) {
                    return (n += t.lines.length);
                  }),
                    e.forEach(function (t) {
                      return (o += t.lines.length);
                    }));
                  var i = -1 === r ? "Precise" : "Reduce #".concat(r);
                  return (
                    this.logger.LogDebug(
                      ""
                        .concat(i, ": ")
                        .concat(n, " x ")
                        .concat(o, " lines, ")
                        .concat(n * o, " hits."),
                    ),
                    [n, o]
                  );
                },
              },
              {
                key: "needReduce",
                value: function (t, e, r, n) {
                  return e && n
                    ? -1
                    : t * r > 3e6
                      ? t > r
                        ? e
                          ? 1
                          : 0
                        : n
                          ? 0
                          : 1
                      : -1;
                },
              },
              {
                key: "getReducedContours",
                value: function (t, e) {
                  var r = t
                      .map(function (t) {
                        return t.vertices;
                      })
                      .reduce(function (t, e) {
                        return t.concat(e);
                      }, []),
                    n = e
                      .map(function (t) {
                        return t.vertices;
                      })
                      .reduce(function (t, e) {
                        return t.concat(e);
                      }, []);
                  if (0 !== r.length && 0 !== n.length) {
                    var o,
                      i = Number.MAX_VALUE,
                      a = null,
                      u = null,
                      s = -1,
                      l = -1,
                      c = p(r);
                    try {
                      for (c.s(); !(o = c.n()).done; ) {
                        var f,
                          h = o.value,
                          y = p(n);
                        try {
                          for (y.s(); !(f = y.n()).done; ) {
                            for (
                              var d = f.value,
                                v = -1,
                                m = -1,
                                g = Number.MAX_VALUE,
                                b = 0;
                              b < h.length;
                              b++
                            )
                              for (var w = 0; w < d.length; w++) {
                                var S =
                                  Math.pow(h[b][0] - d[w][0], 2) +
                                  Math.pow(h[b][1] - d[w][1], 2);
                                g > S && ((v = b), (m = w), (g = S));
                              }
                            if (
                              i > g &&
                              ((a = h),
                              (u = d),
                              (s = v),
                              (l = m),
                              (i = g) < this.epsilon)
                            )
                              return {
                                contour1: t[0],
                                point1: h[v],
                                line1: null,
                                contour2: e[0],
                                point2: d[m],
                                line2: null,
                                distance: 0,
                              };
                          }
                        } catch (t) {
                          y.e(t);
                        } finally {
                          y.f();
                        }
                      }
                    } catch (t) {
                      c.e(t);
                    } finally {
                      c.f();
                    }
                    return [
                      this.getReducedLines(a, s),
                      this.getReducedLines(u, l),
                    ];
                  }
                },
              },
              {
                key: "getReducedLines",
                value: function (t, e) {
                  var r = [];
                  if (!t) return r;
                  var n = Math.max(e - 5, 0),
                    o = Math.min(e + 5, t.length);
                  return (k.buildLines(t.slice(n, o), r), r);
                },
              },
              {
                key: "getClosestLines",
                value: function (t, e, r) {
                  return w(
                    this,
                    void 0,
                    void 0,
                    h().mark(function n() {
                      var o, i, a, u, s, l, f, y, d, v;
                      return h().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                ((a = p(t)), (n.prev = 1), a.s());
                              case 3:
                                if ((u = a.n()).done) {
                                  n.next = 32;
                                  break;
                                }
                                ((s = u.value),
                                  (l = p(e)),
                                  (n.prev = 6),
                                  l.s());
                              case 8:
                                if ((f = l.n()).done) {
                                  n.next = 22;
                                  break;
                                }
                                if (
                                  ((y = f.value),
                                  !(
                                    (d = c.distanceBetweenSegments(
                                      s.from,
                                      s.to,
                                      y.from,
                                      y.to,
                                    ))[0] < r
                                  ))
                                ) {
                                  n.next = 20;
                                  break;
                                }
                                if (
                                  ((r = d[0]),
                                  (i = {
                                    contour1: null,
                                    point1: d[1].from,
                                    line1: s,
                                    contour2: null,
                                    point2: d[1].to,
                                    line2: y,
                                    distance: d[0],
                                  }),
                                  !(r < this.epsilon))
                                ) {
                                  n.next = 20;
                                  break;
                                }
                                return (
                                  (v =
                                    null !==
                                      (o = c.getCrossPoint(
                                        s.from,
                                        s.to,
                                        y.from,
                                        y.to,
                                      )) && void 0 !== o
                                      ? o
                                      : i.point1),
                                  (i.point1 = v),
                                  (i.point2 = v),
                                  (i.distance = 0),
                                  n.abrupt("return", i)
                                );
                              case 20:
                                n.next = 8;
                                break;
                              case 22:
                                n.next = 27;
                                break;
                              case 24:
                                ((n.prev = 24), (n.t0 = n.catch(6)), l.e(n.t0));
                              case 27:
                                return ((n.prev = 27), l.f(), n.finish(27));
                              case 30:
                                n.next = 3;
                                break;
                              case 32:
                                n.next = 37;
                                break;
                              case 34:
                                ((n.prev = 34), (n.t1 = n.catch(1)), a.e(n.t1));
                              case 37:
                                return ((n.prev = 37), a.f(), n.finish(37));
                              case 40:
                                return n.abrupt("return", i);
                              case 41:
                              case "end":
                                return n.stop();
                            }
                        },
                        n,
                        this,
                        [
                          [1, 34, 37, 40],
                          [6, 24, 27, 30],
                        ],
                      );
                    }),
                  );
                },
              },
              {
                key: "addUniContour",
                value: function (t, e) {
                  var r = 0.5 * e.size[0],
                    n = 0.5 * e.size[1];
                  if (e.radius < i) {
                    var o = c.transformUniPoint([-r, -n], e),
                      a = c.transformUniPoint([-r, n], e),
                      u = c.transformUniPoint([r, n], e),
                      s = c.transformUniPoint([r, -n], e);
                    t.addLine([o, a, u, s]);
                  } else {
                    var l = c.transformUniPoint([-r, -n + e.radius], e),
                      f = c.transformUniPoint([-r, n - e.radius], e),
                      h = c.transformUniPoint([-r + e.radius, n], e),
                      p = c.transformUniPoint([r - e.radius, n], e),
                      y = c.transformUniPoint([r, n - e.radius], e),
                      d = c.transformUniPoint([r, -n + e.radius], e),
                      v = c.transformUniPoint([r - e.radius, -n], e),
                      m = c.transformUniPoint([-r + e.radius, -n], e);
                    (this.equalVectors(l, f) || t.addLine([l, f]),
                      this.equalVectors(h, p) || t.addLine([h, p]),
                      this.equalVectors(y, d) || t.addLine([y, d]),
                      this.equalVectors(v, m) || t.addLine([v, m]),
                      t.addArc(
                        c.transformUniPoint([-r + e.radius, -n + e.radius], e),
                        e.radius,
                        c.getUniAngles([Math.PI, (3 * Math.PI) / 2], e),
                      ),
                      t.addArc(
                        c.transformUniPoint([-r + e.radius, n - e.radius], e),
                        e.radius,
                        c.getUniAngles([Math.PI / 2, Math.PI], e),
                      ),
                      t.addArc(
                        c.transformUniPoint([r - e.radius, n - e.radius], e),
                        e.radius,
                        c.getUniAngles([0, Math.PI / 2], e),
                      ),
                      t.addArc(
                        c.transformUniPoint([r - e.radius, -n + e.radius], e),
                        e.radius,
                        c.getUniAngles([(3 * Math.PI) / 2, 2 * Math.PI], e),
                      ));
                  }
                },
              },
              {
                key: "addPolyContour",
                value: function (t, e) {
                  for (
                    var r = this.scene2D
                        .getSystemScene()
                        .GetPolygonByID(e.polygon),
                      n = r.GetOutlineIndices(),
                      o = r.GetVertices(),
                      i = e.angle,
                      a = null,
                      u = [],
                      s = 1;
                    s < n.length;
                    s += 2
                  ) {
                    var l = c.rotatePointRad(o[n[s - 1]].position, i),
                      f = c.rotatePointRad(o[n[s]].position, i),
                      h = e.position[0] + l[0] * e.scale[0],
                      p = e.position[1] + l[1] * e.scale[1],
                      y = e.position[0] + f[0] * e.scale[0],
                      d = e.position[1] + f[1] * e.scale[1];
                    this.equalVectors([h, p], [y, d]) ||
                      (!a ||
                        (a[0] === h && a[1] === p) ||
                        (t.addLine(u), (u = [])),
                      u.length || u.push([h, p]),
                      (a = [y, d]),
                      u.push(a));
                  }
                  t.addLine(u);
                },
              },
              {
                key: "addArcContour",
                value: function (t, e) {
                  (t.addArc(e.center, e.radius + e.width / 2, e.angles),
                    t.addArc(e.center, e.radius - e.width / 2, e.angles));
                  var r = e.center[0] + e.radius * Math.cos(e.angles[0]),
                    n = e.center[1] + e.radius * Math.sin(e.angles[0]),
                    o = e.angles[0],
                    i = e.angles[0] - Math.PI;
                  (t.addArc([r, n], e.width / 2, [i, o]),
                    (r = e.center[0] + e.radius * Math.cos(e.angles[1])),
                    (n = e.center[1] + e.radius * Math.sin(e.angles[1])),
                    (i = e.angles[1]),
                    (o = e.angles[1] + Math.PI),
                    t.addArc([r, n], e.width / 2, [i, o]));
                },
              },
              {
                key: "equalVectors",
                value: function (t, e) {
                  return t[0] === e[0] && t[1] === e[1];
                },
              },
            ],
          );
        })();
      function C(t) {
        return (
          (C =
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
          C(t)
        );
      }
      function L(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, M(n.key), n));
        }
      }
      function x(t, e, r) {
        return (
          e && L(t.prototype, e),
          r && L(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function M(t) {
        var e = (function (t, e) {
          if ("object" != C(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != C(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == C(e) ? e : e + "";
      }
      var T = x(function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
      });
      ((T.MetaInfo =
        'version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'),
        (T.SvgStyles = 'stroke-linecap="{0}" stroke-linejoin="{1}" fill="{2}"'),
        (T.XmlHeader =
          '<?xml version="1.0"  encoding="UTF-8" standalone="no"?>'),
        (T.DocHeader =
          '<svg {0} {1} width="{2}" height="{3}" data-doc-id="{4}">'),
        (T.DocFooter = "</svg>"),
        (T.GroupHeader = '<g id = "{0}">'),
        (T.UnitGroupHeader = '<g data-unit-id="{0}">'),
        (T.VariantGroupHeader = '<g data-variant-id="{0}">'),
        (T.ClipGroupHeader =
          '<g> <clipPath id = "ClipRect{0}"> <rect x = "{1}" y="{2}" width="{3}" height="{4}"/></clipPath>'),
        (T.GroupFooter = "</g>"),
        (T.Line = '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}"{4}/>'),
        (T.Rect =
          '<rect x = "{0}" y="{1}" width="{2}" height="{3}"{4}{5}{6}/>'),
        (T.RectCorners = ' rx="{0}" ry="{1}"'),
        (T.Fill = ' fill="{0}" fill-opacity="{1}"'),
        (T.Text =
          '<text {0} x = "{1}" y="{2}" font-size="{3}px" font-family="{4}" fill="{5}" {6} {7} xml:space="preserve">{8}</text>'),
        (T.ClipUrl = 'clip-path="url(#ClipRect{0})"'),
        (T.Polygon = '<polygon points = "{0}"{1}{2}/>'),
        (T.Points = "{0},{1}"),
        (T.ArcPath = "M{0},{1} A{2},{3} 0 {4},1 {5},{6}"),
        (T.Path = '<path{0} d="{1}"/>'),
        (T.Ellipse = '<ellipse cx="{0}" cy="{1}" rx="{2}" ry="{3}" {4}/>'),
        (T.Png = "data:image/png;base64,"),
        (T.Image =
          '<image x = "{0}" y="{1}" width="{2}" height="{3}" xlink:href="{4}"/>'),
        (T.NonScalingPen =
          ' stroke="{0}" stroke-width="{1}px" vector-effect="non-scaling-stroke"'),
        (T.PenWidth = ' stroke="{0}" stroke-width="{1}px"'),
        (T.StrokeDash = ' stroke-dasharray="4"'),
        (T.StrokeDot = ' stroke-dasharray="2"'),
        (T.StrokeDashDot = ' stroke-dasharray="4 2"'),
        (T.StrokeDashDotDot = ' stroke-dasharray="4 2 2"'),
        (T.TextDecorations = 'text-decoration="{0}"'),
        (T.Underline = "underline"),
        (T.Strikout = "line-through"),
        (T.Delimiter = " "),
        (T.Weight = 'font-weight="{0}"'),
        (T.Italic = 'font-style="italic"'),
        (T.Rotate = 'transform= "rotate({0} {1} {2})"'),
        (T.stubPreview =
          '<?xml version="1.0"  encoding="UTF-8" standalone="no"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100"><g id = "scene"><g id = "DocumentMainGroup"><g id = "BackgroundGroup"></g></g></g></svg>'));
      const E = T;
      function D(t) {
        return (
          (D =
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
          D(t)
        );
      }
      function O(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, j(n.key), n));
        }
      }
      function j(t) {
        var e = (function (t, e) {
          if ("object" != D(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != D(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == D(e) ? e : e + "";
      }
      var A = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "normalizeAngle",
              value: function (t) {
                for (var e = t; e > 360; ) e -= 360;
                for (; e < 0; ) e += 360;
                return e;
              },
            },
            {
              key: "GetPointFromAngle",
              value: function (t, e, r, n) {
                return [
                  t + r * Math.cos(this.toRadian(n)),
                  e + r * Math.sin(this.toRadian(n)),
                ];
              },
            },
            {
              key: "getPointFromAngleForEllipse",
              value: function (t, e, r, n, o) {
                var i = this.getRawVector2FromAngleForEllipse(t, e, r, n, o);
                return [Math.trunc(i[0]), Math.trunc(i[1])];
              },
            },
            {
              key: "getRawVector2FromAngleForEllipse",
              value: function (t, e, r, n, o) {
                if (0 == r || 0 == n) return [t, e];
                var i = this.toRadian(o),
                  a = Math.cos(i),
                  u = Math.sin(i),
                  s = Math.sqrt(1 / (Math.pow(a / r, 2) + Math.pow(u / n, 2)));
                return [t + s * a, e + s * u];
              },
            },
            {
              key: "toRadian",
              value: function (t) {
                return (t * Math.PI) / 180;
              },
            },
          ]),
          null && O(t.prototype, null),
          e && O(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function G(t) {
        return (
          (G =
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
          G(t)
        );
      }
      function _(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function F(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, I(n.key), n));
        }
      }
      function X(t, e, r) {
        return (
          e && F(t.prototype, e),
          r && F(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function I(t) {
        var e = (function (t, e) {
          if ("object" != G(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != G(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == G(e) ? e : e + "";
      }
      var N,
        V,
        B = (function () {
          return X(
            function t(e) {
              (_(this, t), (this.offset = e));
            },
            [
              {
                key: "transform",
                value: function (t) {
                  return [t[0] + this.offset[0], t[1] + this.offset[1]];
                },
              },
            ],
          );
        })(),
        H = (function () {
          return X(
            function t(e, r) {
              (_(this, t), (this.base = e), (this.angle = A.toRadian(r)));
            },
            [
              {
                key: "transform",
                value: function (t) {
                  ((t[0] -= this.base[0]), (t[1] -= this.base[1]));
                  var e = Math.sin(this.angle),
                    r = Math.cos(this.angle);
                  return [
                    t[0] * r - t[1] * e + this.base[0],
                    t[0] * e + t[1] * r + this.base[1],
                  ];
                },
              },
            ],
          );
        })();
      function R(t) {
        return (
          (R =
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
          R(t)
        );
      }
      function U(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Y(n.key), n));
        }
      }
      function Y(t) {
        var e = (function (t, e) {
          if ("object" != R(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != R(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == R(e) ? e : e + "";
      }
      (!(function (t) {
        ((t[(t.Solid = 0)] = "Solid"),
          (t[(t.Dash = 1)] = "Dash"),
          (t[(t.Dot = 2)] = "Dot"),
          (t[(t.DashDot = 3)] = "DashDot"),
          (t[(t.DashDotDot = 4)] = "DashDotDot"));
      })(N || (N = {})),
        (function (t) {
          ((t[(t.Alternate = 0)] = "Alternate"),
            (t[(t.Winding = 1)] = "Winding"));
        })(V || (V = {})));
      var z = (function () {
        return (
          (t = function t() {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this._content = ""),
              (this._size = [0, 0]),
              (this._origin = [0, 0]),
              (this.totalClipCount = 0),
              (this.currentClipCount = 0),
              (this.transforms = []));
          }),
          (e = [
            {
              key: "content",
              get: function () {
                return this._content;
              },
            },
            {
              key: "size",
              get: function () {
                return [
                  this._size[0] - this._origin[0],
                  this._size[1] - this._origin[1],
                ];
              },
            },
            {
              key: "origin",
              get: function () {
                return this._origin;
              },
            },
            {
              key: "startDraw",
              value: function (t, e, r) {
                ((this._size = e),
                  (this._origin = [0, 0]),
                  (this._content = ""),
                  (this.totalClipCount = 0),
                  (this.currentClipCount = 0),
                  this.appendLine(E.XmlHeader),
                  this.appendFmt(
                    E.DocHeader,
                    E.MetaInfo,
                    t,
                    this.getZoomStr(e[0]),
                    this.getZoomStr(e[1]),
                    r,
                  ),
                  this.appendLine());
              },
            },
            {
              key: "endDraw",
              value: function () {
                this.appendLine(E.DocFooter);
              },
            },
            {
              key: "beginGroup",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : E.GroupHeader;
                ((e = null != e ? e : E.GroupHeader), this.appendFmt(e, t));
              },
            },
            {
              key: "endGroup",
              value: function () {
                this.appendLine(E.GroupFooter);
              },
            },
            {
              key: "append",
              value: function (t) {
                ((this._content = this._content + t._content),
                  this.updateSize(t._size));
              },
            },
            {
              key: "appendLine",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                this._content += "".concat(t, "\n");
              },
            },
            {
              key: "appendFmt",
              value: function (t) {
                for (
                  var e = arguments.length,
                    r = new Array(e > 1 ? e - 1 : 0),
                    n = 1;
                  n < e;
                  n++
                )
                  r[n - 1] = arguments[n];
                this._content =
                  this._content + this.format.apply(this, [t].concat(r));
              },
            },
            {
              key: "format",
              value: function (t) {
                for (
                  var e = 0;
                  e < (arguments.length <= 1 ? 0 : arguments.length - 1);
                  e++
                ) {
                  var r = "{".concat(e, "}");
                  t = t.replace(
                    r,
                    e + 1 < 1 || arguments.length <= e + 1
                      ? void 0
                      : arguments[e + 1],
                  );
                }
                return t;
              },
            },
            {
              key: "applyTransform",
              value: function (t) {
                var e =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                return (
                  this.transforms.forEach(function (e) {
                    return (t = e.transform(t));
                  }),
                  e && this.updateSize(t),
                  t
                );
              },
            },
            {
              key: "updateSize",
              value: function (t) {
                ((this._size[0] = Math.max(this._size[0], t[0])),
                  (this._size[1] = Math.max(this._size[1], t[1])),
                  (this._origin[0] = Math.min(this._origin[0], t[0])),
                  (this._origin[1] = Math.min(this._origin[1], t[1])));
              },
            },
            {
              key: "applyZoom",
              value: function (t) {
                var e = this.applyTransform([1, 0], !1),
                  r = this.applyTransform([0, 0], !1),
                  n = r[0] - e[0],
                  o = r[1] - e[1];
                return Math.sqrt(n * n + o * o) * t;
              },
            },
            {
              key: "getZoomStr",
              value: function (t) {
                return this.applyZoom(t).toString();
              },
            },
            {
              key: "GetArcStr",
              value: function (t, e, r, n, o, i) {
                for (
                  var a = A.getPointFromAngleForEllipse(t, e, r, n, i),
                    u = A.getPointFromAngleForEllipse(t, e, r, n, o),
                    s = this.applyTransform(a),
                    l = this.applyTransform(u),
                    c = -i,
                    f = -o;
                  c < f;
                )
                  c += 360;
                var h = c - f <= 180 ? 0 : 1;
                return this.format(
                  E.ArcPath,
                  s[0],
                  s[1],
                  this.getZoomStr(r),
                  this.getZoomStr(n),
                  h,
                  l[0],
                  l[1],
                );
              },
            },
            {
              key: "drawArc",
              value: function (t, e, r, n, o, i, a) {
                if (A.normalizeAngle(i) == A.normalizeAngle(a)) {
                  var u = this.applyTransform([e, r]);
                  this.appendFmt(
                    E.Ellipse,
                    u[0],
                    u[0],
                    this.getZoomStr(n / 2),
                    this.getZoomStr(o / 2),
                    this.penToString(t),
                  );
                } else {
                  var s = this.GetArcStr(e, r, n / 2, o / 2, i, a);
                  this.appendFmt(E.Path, this.penToString(t), s);
                }
                this.appendLine();
              },
            },
            {
              key: "penToString",
              value: function (t) {
                var e,
                  r = t.color;
                e = t.nonScaled
                  ? this.format(E.NonScalingPen, r, t.width)
                  : this.format(E.PenWidth, r, this.getZoomStr(t.width));
                var n = "";
                switch (t.style) {
                  case N.Dash:
                    n = E.StrokeDash;
                    break;
                  case N.Dot:
                    n = E.StrokeDot;
                    break;
                  case N.DashDot:
                    n = E.StrokeDashDot;
                    break;
                  case N.DashDotDot:
                    n = E.StrokeDashDotDot;
                }
                return e + n;
              },
            },
            {
              key: "drawLine",
              value: function (t, e, r, n, o) {
                var i = this.applyTransform([e, r]),
                  a = this.applyTransform([n, o]);
                (this.appendFmt(
                  E.Line,
                  i[0],
                  i[1],
                  a[0],
                  a[1],
                  this.penToString(t),
                ),
                  this.appendLine());
              },
            },
            {
              key: "drawLines",
              value: function (t, e) {
                if (!(e.length < 2))
                  for (var r = 0; r < e.length - 2; r++)
                    this.drawLine(
                      t,
                      e[r][0],
                      e[r][1],
                      e[r + 1][0],
                      e[r + 1][1],
                    );
              },
            },
            {
              key: "drawBounds",
              value: function (t, e) {
                this.drawRectangle(t, e[0], e[1], e[2], e[3]);
              },
            },
            {
              key: "drawRectangle",
              value: function (t, e, r, n, o) {
                var i = this.applyTransform([e, r]),
                  a = this.applyTransform([n, o]);
                (this.appendFmt(
                  E.Rect,
                  Math.min(i[0], a[0]),
                  Math.min(i[1], a[1]),
                  Math.abs(i[0] - a[0]),
                  Math.abs(i[1] - a[1]),
                  this.penToString(t),
                  "",
                  "",
                ),
                  this.appendLine());
              },
            },
            {
              key: "appendStr",
              value: function (t, e, r) {
                return t ? (e ? t + r + e : t) : e;
              },
            },
            {
              key: "getTextStyle",
              value: function (t) {
                var e = "";
                if (t.underline || t.strikout) {
                  var r = "";
                  (t.underline && (r = E.Underline),
                    t.strikout &&
                      (r = this.appendStr(r, E.Strikout, E.Delimiter)),
                    (e = this.format(E.TextDecorations, r)));
                }
                return (
                  t.weight &&
                    (e = this.appendStr(
                      e,
                      this.format(E.Weight, t.weight),
                      E.Delimiter,
                    )),
                  t.italic && (e = this.appendStr(e, E.Italic, E.Delimiter)),
                  e
                );
              },
            },
            {
              key: "drawString",
              value: function (t, e, r, n) {
                var o = this.applyTransform([r, n]),
                  i = Math.trunc(this.applyZoom(e.size));
                i = i <= 0 ? 1 : i;
                var a = e.getSize(t),
                  u = [r + a[0], n + a[1]],
                  s = "";
                if (0 != e.rotation) {
                  ((o = A.GetPointFromAngle(o[0], o[1], i, e.rotation + 90)),
                    (s = this.format(E.Rotate, e.rotation, o[0], o[1])));
                  var l = new H(o, e.rotation);
                  this.applyTransform(l.transform(u));
                } else ((o[1] += i), this.applyTransform(u));
                var c = "";
                (this.currentClipCount > 0 &&
                  (c = this.format(E.ClipUrl, this.totalClipCount)),
                  this.appendFmt(
                    E.Text,
                    c,
                    o[0],
                    o[1],
                    i,
                    e.name,
                    e.color,
                    this.getTextStyle(e),
                    s,
                    t,
                  ),
                  this.appendLine());
              },
            },
            {
              key: "pointsToString",
              value: function (t) {
                for (var e = "", r = 0; r < t.length; r++) {
                  e.length > 0 && (e += E.Delimiter);
                  var n = this.applyTransform([t[r][0], t[r][1]]);
                  e += this.format(E.Points, n[0], n[1]);
                }
                return e;
              },
            },
            {
              key: "drawPolygons",
              value: function (t, e) {
                for (var r = 0; r < e.length; r++)
                  this.appendFmt(
                    E.Polygon,
                    this.pointsToString(e[r]),
                    this.penToString(t),
                    "",
                  );
              },
            },
            {
              key: "fillPolygons",
              value: function (t, e) {
                for (var r = 0; r < e.length; r++)
                  this.appendFmt(
                    E.Polygon,
                    this.pointsToString(e[r]),
                    "",
                    this.brushToString(t),
                  );
              },
            },
            {
              key: "brushToString",
              value: function (t) {
                return this.format(E.Fill, t.color, t.opacity);
              },
            },
            {
              key: "fillBounds",
              value: function (t, e) {
                this.fillRectangle(t, e[0], e[1], e[2], e[3]);
              },
            },
            {
              key: "fillRectangle",
              value: function (t, e, r, n, o) {
                var i = this.applyTransform([e, r]),
                  a = this.applyTransform([n, o]);
                (this.appendFmt(
                  E.Rect,
                  Math.min(i[0], a[0]),
                  Math.min(i[1], a[1]),
                  Math.abs(i[0] - a[0]),
                  Math.abs(i[1] - a[1]),
                  "",
                  "",
                  this.brushToString(t),
                ),
                  this.appendLine());
              },
            },
            {
              key: "resetClip",
              value: function () {
                this.currentClipCount = 0;
              },
            },
            {
              key: "pushTransform",
              value: function (t) {
                this.transforms.push(t);
              },
            },
            {
              key: "popTransform",
              value: function () {
                this.transforms.pop();
              },
            },
            {
              key: "pushClip",
              value: function (t, e, r, n) {
                (this.totalClipCount++, this.currentClipCount++);
                var o = this.applyTransform([t, e]),
                  i = this.applyTransform([r, n]);
                this.appendFmt(
                  E.ClipGroupHeader,
                  this.totalClipCount,
                  Math.min(o[0], i[0]),
                  Math.min(o[1], i[1]),
                  Math.abs(o[0] - i[0]),
                  Math.abs(o[1] - i[1]),
                );
              },
            },
            {
              key: "popClip",
              value: function () {
                (this.appendFmt(E.GroupFooter), this.currentClipCount--);
              },
            },
            {
              key: "drawRoundedRectangle",
              value: function (t, e, r, n, o, i, a) {
                var u = this.applyTransform([e, r]),
                  s = this.applyTransform([n, o]),
                  l = "";
                ((0 == i && 0 == a) ||
                  (l = this.format(
                    E.RectCorners,
                    this.getZoomStr(i),
                    this.getZoomStr(a),
                  )),
                  this.appendFmt(
                    E.Rect,
                    Math.min(u[0], s[0]),
                    Math.min(u[1], s[1]),
                    Math.abs(u[0] - s[0]),
                    Math.abs(u[1] - s[1]),
                    this.penToString(t),
                    l,
                    "",
                  ),
                  this.appendLine());
              },
            },
            {
              key: "fillRoundedRectangle",
              value: function (t, e, r, n, o, i, a) {
                var u = this.applyTransform([e, r]),
                  s = this.applyTransform([n, o]),
                  l = "";
                (0 == i && 0 == a) ||
                  (l = this.format(
                    E.RectCorners,
                    this.getZoomStr(i),
                    this.getZoomStr(a),
                  ));
                var c = this.brushToString(t);
                (this.appendFmt(
                  E.Rect,
                  Math.min(u[0], s[0]),
                  Math.min(u[1], s[1]),
                  Math.abs(u[0] - s[0]),
                  Math.abs(u[1] - s[1]),
                  "",
                  l,
                  c,
                ),
                  this.appendLine());
              },
            },
          ]),
          e && U(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
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
      function W(t, e, r) {
        if ($()) return Reflect.construct.apply(null, arguments);
        var n = [null];
        n.push.apply(n, e);
        var o = new (t.bind.apply(t, n))();
        return (r && q(o, r.prototype), o);
      }
      function q(t, e) {
        return (
          (q = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          q(t, e)
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
      function K(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Q(t);
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
              if ("string" == typeof t) return Q(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? Q(t, e)
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
      function Q(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function J(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, et(n.key), n));
        }
      }
      function tt(t, e, r) {
        return (
          e && J(t.prototype, e),
          r && J(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function et(t) {
        var e = (function (t, e) {
          if ("object" != Z(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != Z(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Z(e) ? e : e + "";
      }
      function rt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var nt = tt(function t() {
        rt(this, t);
      });
      ((nt.FixedMM = 4),
        (nt.FixedMIL = 3),
        (nt.DefaultFontName = "Inter, Helvetica, Arial, sans-serif"),
        (nt.DefaultFontSize = 8),
        (nt.DefaultFontColor = "#080A0A"),
        (nt.DefaultFontWeight = "normal"),
        (nt.DefaultPenColor = "#000000"),
        (nt.DefaultPenStyle = N.Solid),
        (nt.DefaultPenWidth = 1),
        (nt.DefaultPenNonScaled = !0),
        (nt.DefaultBrushColor = "#FFFFFF"),
        (nt.DefaultBrushOpacity = 1),
        (nt.TransparentOpacity = 0),
        (nt.ColumnNo = "#"),
        (nt.ColumnThk = "THK"),
        (nt.ColumnName = "NAME"),
        (nt.ColumnType = "TYPE"),
        (nt.ColumnGap = 20),
        (nt.Scale = 8),
        (nt.Margin = 30),
        (nt.HeaderGap = 1),
        (nt.LayerToTextGap = 32),
        (nt.DefaultThickness = 2),
        (nt.MinViaCount = 5),
        (nt.ViaZoneWidth = 50),
        (nt.ViaPadDX = 18),
        (nt.ViaOuterDX = 10),
        (nt.ViaInnerDX = 5),
        (nt.ViaOuterMDX = 7),
        (nt.ViaInnerMDX = 3),
        (nt.CopperObjectLongDX = 9),
        (nt.CopperObjectShortDX = 6),
        (nt.Scene = "scene"),
        (nt.MainGroup = "DocumentMainGroup"),
        (nt.BackgroundGroup = "BackgroundGroup"));
      var ot = (function () {
          return tt(
            function t() {
              var e, r, n, o;
              (rt(this, t),
                (this.name =
                  null !==
                    (e = arguments.length <= 0 ? void 0 : arguments[0]) &&
                  void 0 !== e
                    ? e
                    : nt.DefaultFontName),
                (this.size =
                  null !==
                    (r = arguments.length <= 1 ? void 0 : arguments[1]) &&
                  void 0 !== r
                    ? r
                    : nt.DefaultFontSize),
                (this.color =
                  null !==
                    (n = arguments.length <= 2 ? void 0 : arguments[2]) &&
                  void 0 !== n
                    ? n
                    : nt.DefaultFontColor),
                (this.weight =
                  null !==
                    (o = arguments.length <= 3 ? void 0 : arguments[3]) &&
                  void 0 !== o
                    ? o
                    : nt.DefaultFontWeight),
                (this.rotation = 0),
                (this.italic = !1),
                (this.strikout = !1),
                (this.underline = !1));
            },
            [
              {
                key: "getSize",
                value: function (t) {
                  return [(this.size / 2.3) * t.length, this.size + 4];
                },
              },
            ],
          );
        })(),
        it = tt(function t() {
          var e, r, n, o;
          (rt(this, t),
            (this.color =
              null !== (e = arguments.length <= 0 ? void 0 : arguments[0]) &&
              void 0 !== e
                ? e
                : nt.DefaultPenColor),
            (this.width =
              null !== (r = arguments.length <= 1 ? void 0 : arguments[1]) &&
              void 0 !== r
                ? r
                : nt.DefaultPenWidth),
            (this.style =
              null !== (n = arguments.length <= 2 ? void 0 : arguments[2]) &&
              void 0 !== n
                ? n
                : nt.DefaultPenStyle),
            (this.nonScaled =
              null !== (o = arguments.length <= 3 ? void 0 : arguments[3]) &&
              void 0 !== o
                ? o
                : nt.DefaultPenNonScaled));
        }),
        at = tt(function t() {
          var e, r;
          (rt(this, t),
            (this.color =
              null !== (e = arguments.length <= 0 ? void 0 : arguments[0]) &&
              void 0 !== e
                ? e
                : nt.DefaultBrushColor),
            (this.opacity = (
              null !== (r = arguments.length <= 1 ? void 0 : arguments[1]) &&
              void 0 !== r
                ? r
                : arguments.length <= 0
                  ? void 0
                  : arguments[0]
            )
              ? nt.DefaultBrushOpacity
              : nt.TransparentOpacity));
        }),
        ut = (function () {
          return tt(
            function t(e) {
              var r;
              (rt(this, t),
                (this.defaultFields = [
                  nt.ColumnNo,
                  nt.ColumnName,
                  nt.ColumnType,
                  nt.ColumnThk,
                ]),
                (this.defaultBrushes = new Map([
                  ["Background", ["#E9E9E9"]],
                  ["Overlay", ["#9AAF89"]],
                  ["Solder Mask", ["#29763C"]],
                  ["Dielectric", ["#5E5747"]],
                  ["Core", ["#5E5747"]],
                  ["Prepreg", ["#AA9E81"]],
                  ["Non-Conductive", ["#AA9E81"]],
                  ["Plane", ["#DBAB61"]],
                  ["Signal", ["#000000", 0]],
                  ["ViaBarrel", ["#CDB475"]],
                  ["ViaHole", ["#E8C8A4"]],
                  ["ViaSkip", ["#DEB984"]],
                  ["Grid", ["#DADADA"]],
                  ["CopperObject", ["#CDA86C"]],
                  ["Debug", ["#FF0000"]],
                ])),
                (this.defaultFonts = new Map([
                  [
                    "TableHeader",
                    [nt.DefaultFontName, nt.DefaultFontSize, "#727272"],
                  ],
                  [
                    "TableData",
                    [nt.DefaultFontName, nt.DefaultFontSize, "#080A0A"],
                  ],
                ])),
                (this.defaultPens = new Map([
                  ["Overlay", ["#707A69"]],
                  ["Solder Mask", ["#1C582B"]],
                  ["Dielectric", ["#4B4537"]],
                  ["Core", ["#4B4537"]],
                  ["Prepreg", ["#575252"]],
                  ["Non-Conductive", ["#575252"]],
                  ["Plane", ["#655337"]],
                  ["Via", ["#5C5134"]],
                  ["Debug", ["#FF0000"]],
                  ["Callout", ["#9E9E9E"]],
                  ["CopperObject", ["#7E6E53"]],
                ])),
                (this.fields =
                  null !== (r = null == e ? void 0 : e.fields) && void 0 !== r
                    ? r
                    : this.defaultFields),
                (this.brushes = this.merge(
                  null == e ? void 0 : e.brushes,
                  this.defaultBrushes,
                )),
                (this.fonts = this.merge(
                  null == e ? void 0 : e.fonts,
                  this.defaultFonts,
                )),
                (this.pens = this.merge(
                  null == e ? void 0 : e.pens,
                  this.defaultPens,
                )));
            },
            [
              {
                key: "getBrush",
                value: function (t) {
                  var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.brushes.get(t);
                  return r ? W(at, K(r)) : e ? null : new at();
                },
              },
              {
                key: "getFont",
                value: function (t) {
                  var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.fonts.get(t);
                  return r ? W(ot, K(r)) : e ? null : new ot();
                },
              },
              {
                key: "getPen",
                value: function (t) {
                  var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.pens.get(t);
                  return r ? W(it, K(r)) : e ? null : new it();
                },
              },
              {
                key: "merge",
                value: function (t, e) {
                  return t ? new Map([].concat(K(e), K(t))) : e;
                },
              },
            ],
          );
        })();
      function st(t) {
        return (
          (st =
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
          st(t)
        );
      }
      function lt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ct(t);
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
              if ("string" == typeof t) return ct(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? ct(t, e)
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
      function ct(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function ft(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, pt(n.key), n));
        }
      }
      function ht(t, e, r) {
        return (
          e && ft(t.prototype, e),
          r && ft(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function pt(t) {
        var e = (function (t, e) {
          if ("object" != st(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != st(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == st(e) ? e : e + "";
      }
      function yt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var dt = ht(function t(e, r, n) {
          (yt(this, t),
            (this.text = e),
            (this.size = r.getSize(e)),
            (this.unit = n),
            (this.position = [0, 0]));
        }),
        vt = ht(function t(e, r) {
          (yt(this, t),
            (this.cells = e),
            (this.height =
              Math.max.apply(
                Math,
                lt(
                  e.map(function (t) {
                    return t.size[1];
                  }),
                ),
              ) + r),
            (this.position = 0));
        }),
        mt = ht(function t(e) {
          (yt(this, t),
            (this.cells = e),
            (this.width = Math.max.apply(
              Math,
              lt(
                e.map(function (t) {
                  return t.size[0];
                }),
              ),
            )),
            (this.position = 0));
        }),
        gt = (function () {
          return ht(
            function t(e) {
              (yt(this, t), this.clear(), (this.units = e));
            },
            [
              {
                key: "width",
                get: function () {
                  return this._width;
                },
              },
              {
                key: "height",
                get: function () {
                  return this._rows.length;
                },
              },
              {
                key: "rows",
                get: function () {
                  return this._rows;
                },
              },
              {
                key: "columns",
                get: function () {
                  return this._cols;
                },
              },
              {
                key: "clear",
                value: function () {
                  ((this._width = 0),
                    (this._cols = []),
                    (this._rows = []),
                    (this.cells = []),
                    (this.units = []));
                },
              },
              {
                key: "add",
                value: function (t, e) {
                  var r = this,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    o = t.map(function (t, n) {
                      return new dt(t, e, r.units && r.units[n]);
                    });
                  ((this._width = Math.max(this._width, t.length)),
                    this.cells.push(o));
                  var i = new vt(o, n);
                  return (this._rows.push(i), i);
                },
              },
              {
                key: "align",
                value: function (t) {
                  var e = this;
                  this._cols = [];
                  for (var r = 0; r < this.width; r++) {
                    var n = this.cells.map(function (t) {
                      return t[r];
                    });
                    this._cols.push(new mt(n));
                  }
                  t.forEach(function (t) {
                    return t.align(e);
                  });
                },
              },
            ],
          );
        })(),
        bt = r(15351);
      function wt(t) {
        return (
          (wt =
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
          wt(t)
        );
      }
      function St(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function kt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Pt(n.key), n));
        }
      }
      function Pt(t) {
        var e = (function (t, e) {
          if ("object" != wt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != wt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == wt(e) ? e : e + "";
      }
      function Ct(t, e) {
        var r,
          n,
          o = t.properties.find(function (t) {
            return "Thickness" === t.name;
          });
        if (o) {
          var i = e
            ? null === (r = o.valueInMms) || void 0 === r
              ? void 0
              : r.replace("mm", "")
            : null === (n = o.valueInMils) || void 0 === n
              ? void 0
              : n.replace("mil", "");
          return i ? Number.parseFloat(i) : 0;
        }
        return 0;
      }
      function Lt(t) {
        return (
          "Signal" === t.typeName ||
          "Plane" === t.typeName ||
          "Conductive" === t.typeName
        );
      }
      var xt = (function () {
        return (
          (t = function t(e) {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.fields = e));
            var r = e.indexOf(nt.ColumnThk);
            this.counter = {
              mmTotal: 0,
              milTotal: 0,
              layerNo: 1,
              columnNo: 0,
              colTotal: r > 0 ? e[r - 1] : null,
            };
          }),
          (e = [
            {
              key: "getColumnHeaders",
              value: function () {
                return this.getValues(null, this.getColumnHeader);
              },
            },
            {
              key: "getColumnValues",
              value: function (t) {
                return this.getValues(t, this.getColumnValue);
              },
            },
            {
              key: "getColumnUnits",
              value: function () {
                return this.getValues(null, this.getColumnUnit);
              },
            },
            {
              key: "getColumnFooters",
              value: function () {
                return this.getValues(null, this.getColumnFooter);
              },
            },
            {
              key: "getColumnIndexes",
              value: function () {
                return this.getValues(null, this.getColumnIndex);
              },
            },
            {
              key: "getValues",
              value: function (t, e) {
                var r = this,
                  n = [];
                return (
                  this.fields.forEach(function (o) {
                    return n.push.apply(
                      n,
                      (function (t) {
                        return (
                          (function (t) {
                            if (Array.isArray(t)) return St(t);
                          })(t) ||
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
                              if ("string" == typeof t) return St(t, e);
                              var r = {}.toString.call(t).slice(8, -1);
                              return (
                                "Object" === r &&
                                  t.constructor &&
                                  (r = t.constructor.name),
                                "Map" === r || "Set" === r
                                  ? Array.from(t)
                                  : "Arguments" === r ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        r,
                                      )
                                    ? St(t, e)
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
                      })(e(o, t, r.counter)),
                    );
                  }),
                  n
                );
              },
            },
            {
              key: "getColumnHeader",
              value: function (t, e, r) {
                switch (t) {
                  case nt.ColumnNo:
                    return [""];
                  case nt.ColumnThk:
                    return ["Thk (mm)", "Thk (mil)"];
                  case nt.ColumnName:
                    return ["Layer"];
                  case nt.ColumnType:
                    return ["Type"];
                  default:
                    return [""];
                }
              },
            },
            {
              key: "getColumnValue",
              value: function (t, e, r) {
                switch (t) {
                  case nt.ColumnNo:
                    return [Lt(e) ? (r.layerNo++).toString() : "-"];
                  case nt.ColumnThk:
                    var n = Ct(e, !0),
                      o = Ct(e, !1),
                      i = 0 === n ? "" : n.toFixed(nt.FixedMM),
                      a = 0 === o ? "" : o.toFixed(nt.FixedMIL);
                    return ((r.mmTotal += n), (r.milTotal += o), [i, a]);
                  case nt.ColumnName:
                    return [e.name];
                  case nt.ColumnType:
                    return [e.typeName];
                  default:
                    return [""];
                }
              },
            },
            {
              key: "getColumnUnit",
              value: function (t, e, r) {
                return t === nt.ColumnThk ? [bt.q, bt.R] : [null];
              },
            },
            {
              key: "getColumnFooter",
              value: function (t, e, r) {
                return t === nt.ColumnThk
                  ? [
                      r.mmTotal.toFixed(nt.FixedMM),
                      r.milTotal.toFixed(nt.FixedMIL),
                    ]
                  : t === r.colTotal
                    ? ["Total"]
                    : [""];
              },
            },
            {
              key: "getColumnIndex",
              value: function (t, e, r) {
                var n = r.columnNo;
                return (r.columnNo++, t === nt.ColumnThk ? [n, n] : [n]);
              },
            },
          ]) && kt(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Mt(t) {
        return (
          (Mt =
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
          Mt(t)
        );
      }
      function Tt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Et(t);
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
              if ("string" == typeof t) return Et(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? Et(t, e)
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
      function Et(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Dt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ot(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, At(n.key), n));
        }
      }
      function jt(t, e, r) {
        return (
          e && Ot(t.prototype, e),
          r && Ot(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function At(t) {
        var e = (function (t, e) {
          if ("object" != Mt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != Mt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Mt(e) ? e : e + "";
      }
      var Gt = (function () {
          return jt(
            function t(e, r) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
              (Dt(this, t),
                (this.gap = r),
                (this.offset = e),
                (this.indexMap = n));
            },
            [
              {
                key: "align",
                value: function (t) {
                  var e;
                  if (
                    this.indexMap &&
                    this.indexMap.length === t.columns.length
                  ) {
                    var r = this.indexMap.reduce(function (e, r, n) {
                      return (
                        (e[r] = [].concat(Tt(e[r] || []), [t.columns[n]])),
                        e
                      );
                    }, []);
                    r.filter(function (t) {
                      return t.length > 1;
                    }).forEach(function (t) {
                      var e = Math.max.apply(
                        Math,
                        Tt(
                          t.map(function (t) {
                            return t.width;
                          }),
                        ),
                      );
                      t.forEach(function (t) {
                        return (t.width = e);
                      });
                    });
                  }
                  for (
                    var n = Math.trunc(this.gap / 2),
                      o = this.offset,
                      i = 0,
                      a = 0,
                      u = 0;
                    u < t.width;
                    u++
                  ) {
                    var s =
                        null !== (e = this.indexMap && this.indexMap[u]) &&
                        void 0 !== e
                          ? e
                          : u,
                      l = t.columns[u];
                    (i !== s && (o = o + a + this.gap),
                      (l.position = o),
                      (l.width = l.width + this.gap),
                      l.cells.forEach(function (t) {
                        return (t.position[0] = o + n);
                      }),
                      (i = s),
                      (a = l.width));
                  }
                },
              },
            ],
          );
        })(),
        _t = (function () {
          return jt(
            function t(e, r) {
              (Dt(this, t),
                (this.gap = e),
                (this.rowBases = r),
                (this.rowCenters = r.map(function (t) {
                  return t[2];
                })));
            },
            [
              {
                key: "align",
                value: function (t) {
                  var e = t.rows;
                  if (e.length === this.rowBases.length) {
                    var r, n;
                    if (e.length % 2 == 0) r = (n = t.rows.length / 2) - 1;
                    else {
                      var o = Math.trunc(t.rows.length / 2);
                      ((r = o - 1), (n = o + 1));
                    }
                    (this.alignTextsUp(t, r),
                      this.alignTextsDown(t, n),
                      this.setTextPositions(t),
                      this.expandRowHeights(t));
                  }
                },
              },
              {
                key: "alignTextsUp",
                value: function (t, e) {
                  for (var r = e; r >= 0; r--) {
                    var n = this.rowCenters[r + 1],
                      o = this.rowCenters[r];
                    if (-1 != o) {
                      var i = t.rows[r].height - (n - o);
                      i > 0 && (this.rowCenters[r] -= i);
                    } else this.rowCenters[r] = n - this.gap - t.rows[r].height;
                  }
                },
              },
              {
                key: "alignTextsDown",
                value: function (t, e) {
                  for (var r = e; r < t.rows.length; r++) {
                    var n = this.rowCenters[r - 1],
                      o = this.rowCenters[r];
                    if (-1 != o) {
                      var i = t.rows[r].height - (o - n);
                      i > 0 && (this.rowCenters[r] += i);
                    } else this.rowCenters[r] = n + this.gap + t.rows[r].height;
                  }
                },
              },
              {
                key: "setTextPositions",
                value: function (t) {
                  for (
                    var e = this,
                      r = function () {
                        var r = t.rows[n];
                        ((r.position = e.rowCenters[n] - r.height / 2),
                          r.cells.forEach(function (t) {
                            return (t.position[1] = r.position);
                          }));
                      },
                      n = 0;
                    n < t.rows.length;
                    n++
                  )
                    r();
                },
              },
              {
                key: "expandRowHeights",
                value: function (t) {
                  for (var e = 0; e < t.rows.length; e++)
                    if (-1 !== this.rowBases[e][2]) {
                      var r = t.rows[e - 1],
                        n = t.rows[e],
                        o = t.rows[e + 1],
                        i =
                          n.position -
                          Math.max(this.rowBases[e][0], r.position + r.height);
                      i > 0 && ((n.position -= i), (n.height += i));
                      var a =
                        Math.min(this.rowBases[e][1], o.position) -
                        (n.position + n.height);
                      a > 0 && (n.height += a);
                    }
                },
              },
            ],
          );
        })(),
        Ft = r(79606);
      function Xt(t) {
        return (
          (Xt =
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
          Xt(t)
        );
      }
      function It(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Nt(n.key), n));
        }
      }
      function Nt(t) {
        var e = (function (t, e) {
          if ("object" != Xt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != Xt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Xt(e) ? e : e + "";
      }
      var Vt = (function () {
          return (
            (t = function t(e, r, n, o, i) {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.id = e.id),
                (this.skip = e.type == Ft.WU.SkipMicroVia),
                (this.micro =
                  e.type == Ft.WU.SkipMicroVia ||
                  e.type == Ft.WU.StackedMicroVia),
                (this.baseX = o),
                (this.baseY =
                  i > 0 ? [r[1], r[3], n[1], n[3]] : [r[3], r[1], n[3], n[1]]));
            }),
            (e = [
              {
                key: "innerMX1",
                get: function () {
                  return this.baseX - nt.ViaInnerMDX;
                },
              },
              {
                key: "innerMX2",
                get: function () {
                  return this.baseX + nt.ViaInnerMDX;
                },
              },
              {
                key: "outerMX1",
                get: function () {
                  return this.baseX - nt.ViaOuterMDX;
                },
              },
              {
                key: "outerMX2",
                get: function () {
                  return this.baseX + nt.ViaOuterMDX;
                },
              },
              {
                key: "innerX1",
                get: function () {
                  return this.baseX - nt.ViaInnerDX;
                },
              },
              {
                key: "innerX2",
                get: function () {
                  return this.baseX + nt.ViaInnerDX;
                },
              },
              {
                key: "outerX1",
                get: function () {
                  return this.baseX - nt.ViaOuterDX;
                },
              },
              {
                key: "outerX2",
                get: function () {
                  return this.baseX + nt.ViaOuterDX;
                },
              },
              {
                key: "padX1",
                get: function () {
                  return this.baseX - nt.ViaPadDX;
                },
              },
              {
                key: "padX2",
                get: function () {
                  return this.baseX + nt.ViaPadDX;
                },
              },
              {
                key: "hole",
                get: function () {
                  return this.micro ? this.getMicroHole() : this.getThruHole();
                },
              },
              {
                key: "contour",
                get: function () {
                  return this.micro
                    ? this.getMicroContour()
                    : this.getThruContour();
                },
              },
              {
                key: "getThruHole",
                value: function () {
                  return [
                    [this.innerX1, this.baseY[0]],
                    [this.innerX2, this.baseY[0]],
                    [this.innerX2, this.baseY[3]],
                    [this.innerX1, this.baseY[3]],
                    [this.innerX1, this.baseY[0]],
                  ];
                },
              },
              {
                key: "getMicroHole",
                value: function () {
                  return [
                    [this.innerX1, this.baseY[0]],
                    [this.innerX2, this.baseY[0]],
                    [this.innerX2, this.baseY[1]],
                    [this.innerMX2, this.baseY[2]],
                    [this.innerMX1, this.baseY[2]],
                    [this.innerX1, this.baseY[1]],
                    [this.innerX1, this.baseY[0]],
                  ];
                },
              },
              {
                key: "getThruContour",
                value: function () {
                  return [
                    [this.padX1, this.baseY[0]],
                    [this.padX2, this.baseY[0]],
                    [this.padX2, this.baseY[1]],
                    [this.outerX2, this.baseY[1]],
                    [this.outerX2, this.baseY[2]],
                    [this.padX2, this.baseY[2]],
                    [this.padX2, this.baseY[3]],
                    [this.padX1, this.baseY[3]],
                    [this.padX1, this.baseY[2]],
                    [this.outerX1, this.baseY[2]],
                    [this.outerX1, this.baseY[1]],
                    [this.padX1, this.baseY[1]],
                    [this.padX1, this.baseY[0]],
                  ];
                },
              },
              {
                key: "getMicroContour",
                value: function () {
                  return [
                    [this.padX1, this.baseY[0]],
                    [this.padX2, this.baseY[0]],
                    [this.padX2, this.baseY[1]],
                    [this.outerX2, this.baseY[1]],
                    [this.outerMX2, this.baseY[2]],
                    [this.padX2, this.baseY[2]],
                    [this.padX2, this.baseY[3]],
                    [this.padX1, this.baseY[3]],
                    [this.padX1, this.baseY[2]],
                    [this.outerMX1, this.baseY[2]],
                    [this.outerX1, this.baseY[1]],
                    [this.padX1, this.baseY[1]],
                    [this.padX1, this.baseY[0]],
                  ];
                },
              },
            ]) && It(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        Bt = r(73791);
      function Ht(t) {
        return (
          (Ht =
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
          Ht(t)
        );
      }
      function Rt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Ut(n.key), n));
        }
      }
      function Ut(t) {
        var e = (function (t, e) {
          if ("object" != Ht(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != Ht(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Ht(e) ? e : e + "";
      }
      var Yt,
        zt = (function () {
          return (
            (t = function t(e, r, n) {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.baseX = r),
                (this.orientation = n),
                (this.y1 = n ? e[3] : e[1]),
                (this.y2 = n ? e[1] : e[3]));
            }),
            (e = [
              {
                key: "longX1",
                get: function () {
                  return this.baseX - nt.CopperObjectLongDX;
                },
              },
              {
                key: "longX2",
                get: function () {
                  return this.baseX + nt.CopperObjectLongDX;
                },
              },
              {
                key: "shortX1",
                get: function () {
                  return this.baseX - nt.CopperObjectShortDX;
                },
              },
              {
                key: "shortX2",
                get: function () {
                  return this.baseX + nt.CopperObjectShortDX;
                },
              },
              {
                key: "contour",
                get: function () {
                  return this.getContour();
                },
              },
              {
                key: "getContour",
                value: function () {
                  return [
                    [this.shortX1, this.y1],
                    [this.shortX2, this.y1],
                    [this.longX2, this.y2],
                    [this.longX1, this.y2],
                    [this.shortX1, this.y1],
                  ];
                },
              },
            ]) && Rt(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      function Zt(t) {
        return (
          (Zt =
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
          Zt(t)
        );
      }
      function Wt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return qt(t);
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
              if ("string" == typeof t) return qt(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? qt(t, e)
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
      function qt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function $t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Qt(n.key), n));
        }
      }
      function Kt(t, e, r) {
        return (
          e && $t(t.prototype, e),
          r && $t(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Qt(t) {
        var e = (function (t, e) {
          if ("object" != Zt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != Zt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Zt(e) ? e : e + "";
      }
      function Jt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      !(function (t) {
        ((t[(t.Layers = 1)] = "Layers"),
          (t[(t.Table = 2)] = "Table"),
          (t[(t.Vias = 4)] = "Vias"),
          (t[(t.Preview = 5)] = "Preview"),
          (t[(t.All = 7)] = "All"));
      })(Yt || (Yt = {}));
      var te = Kt(function t() {
          Jt(this, t);
        }),
        ee = (function () {
          return Kt(
            function t() {
              Jt(this, t);
            },
            [
              {
                key: "getLayerCY",
                value: function () {
                  return (
                    this.layerBox[1] + (this.layerBox[3] - this.layerBox[1]) / 2
                  );
                },
              },
              {
                key: "getRowBase",
                value: function () {
                  return [
                    this.layerBox[1],
                    this.layerBox[3],
                    this.getLayerCY(),
                  ];
                },
              },
            ],
          );
        })(),
        re = (function () {
          return Kt(
            function t() {
              Jt(this, t);
            },
            [
              {
                key: "draw",
                value: function (t, e) {
                  this.options = new ut(e);
                  var r = new z();
                  r.pushTransform(new B([nt.Margin, nt.Margin]));
                  var n = this.calculateStack(t.activeStack, Yt.All);
                  return (
                    this.drawStack(r, n),
                    this.drawDocument(t.id, r, nt.Margin)
                  );
                },
              },
              {
                key: "drawPreview",
                value: function (t, e) {
                  this.options = new ut(e);
                  var r = new z(),
                    n = this.calculateStack(t.activeStack, Yt.Preview);
                  return (this.drawStack(r, n), this.drawDocument(t.id, r, 0));
                },
              },
              {
                key: "drawDocument",
                value: function (t, e, r) {
                  var n = new z(),
                    o = [e.size[0] + r, e.size[1] + r],
                    i = (0, Bt.Z)(E.SvgStyles, "rect", "rect", "none");
                  return (
                    n.startDraw(i, o, t),
                    n.beginGroup(nt.Scene),
                    n.beginGroup(nt.MainGroup),
                    n.beginGroup(nt.BackgroundGroup),
                    n.fillRectangle(
                      this.options.getBrush("Background"),
                      0,
                      0,
                      o[0],
                      o[1],
                    ),
                    n.append(e),
                    n.endGroup(),
                    n.endGroup(),
                    n.endGroup(),
                    n.endDraw(),
                    n.content
                  );
                },
              },
              {
                key: "calculateStack",
                value: function (t, e) {
                  var r = new te();
                  ((r.stack = t),
                    (r.electricCount = 0),
                    (r.dataFont = this.options.getFont("TableData")),
                    (r.headerFont = this.options.getFont("TableHeader")),
                    (r.drawVias = !!(e & Yt.Vias)),
                    (r.drawTable = !!(e & Yt.Table)),
                    (r.drawLayers = !!(e & Yt.Layers)),
                    (r.drawCallout =
                      (r.drawLayers || r.drawVias) && r.drawTable),
                    (r.columns = Math.max(t.viaSpans.length, nt.MinViaCount)),
                    (r.rows = t.layers
                      .filter(function (t) {
                        return t.isSupported;
                      })
                      .map(function (t) {
                        var e = Lt(t);
                        r.electricCount += e ? 1 : 0;
                        var n = new ee();
                        return (
                          (n.layer = t),
                          (n.electricNo = e ? r.electricCount : 0),
                          (n.thickness = r.drawLayers
                            ? Ct(t, !1)
                            : nt.DefaultThickness),
                          n
                        );
                      })));
                  var n =
                    r.drawLayers || r.drawVias
                      ? r.columns * nt.ViaZoneWidth
                      : 0;
                  return (
                    this.fillGraphics(n, r),
                    r.drawTable &&
                      this.fillTable(
                        r,
                        r.drawCallout ? n + nt.LayerToTextGap : 0,
                      ),
                    r
                  );
                },
              },
              {
                key: "fillGraphics",
                value: function (t, e) {
                  var r = 0,
                    n = Math.min.apply(
                      Math,
                      Wt(
                        e.rows
                          .map(function (t) {
                            return t.thickness;
                          })
                          .filter(function (t) {
                            return t > 0;
                          }),
                      ),
                    );
                  e.rows.forEach(function (e) {
                    var o = r + Math.max(e.thickness, n) * nt.Scale;
                    ((e.layerBox = [0, r, t, o]), (r = o));
                  });
                },
              },
              {
                key: "fillTable",
                value: function (t, e) {
                  var r = new xt(this.options.fields);
                  ((t.table = new gt(r.getColumnUnits())),
                    t.table.add(
                      r.getColumnHeaders(),
                      t.headerFont,
                      nt.HeaderGap,
                    ),
                    t.rows.forEach(function (e) {
                      e.text = t.table.add(
                        r.getColumnValues(e.layer),
                        t.dataFont,
                      );
                    }),
                    t.table.add(
                      r.getColumnFooters(),
                      t.headerFont,
                      nt.HeaderGap,
                    ));
                  var n = [0, 0, -1],
                    o = [n].concat(
                      Wt(
                        t.rows.map(function (t) {
                          return t.getRowBase();
                        }),
                      ),
                      [n],
                    );
                  t.table.align([
                    new Gt(e, nt.ColumnGap, r.getColumnIndexes()),
                    new _t(nt.HeaderGap, o),
                  ]);
                },
              },
              {
                key: "drawStack",
                value: function (t, e) {
                  if (e.drawTable) {
                    var r = e.table.rows[0];
                    (r.position < 0 &&
                      t.pushTransform(new B([0, Math.abs(r.position)])),
                      this.drawCells(t, r.cells, e.headerFont));
                  }
                  if (
                    ((e.drawLayers || e.drawTable) && this.drawLayers(t, e),
                    e.drawVias && this.drawVias(t, e.stack.viaSpans, e),
                    e.drawTable)
                  ) {
                    var n = e.table.rows[0],
                      o = e.table.rows[e.table.height - 1];
                    (e.drawTable && this.drawCells(t, o.cells, e.headerFont),
                      n.position < 0 && t.popTransform());
                  }
                },
              },
              {
                key: "drawLayers",
                value: function (t, e) {
                  var r = this,
                    n = 1,
                    o = this.options.getBrush("Grid"),
                    i = this.options.getBrush("Background"),
                    a = this.options.getPen("Callout");
                  e.rows.forEach(function (u) {
                    (e.drawLayers &&
                      r.drawGroup(
                        t,
                        "".concat(u.layer.id, ":I"),
                        null,
                        function () {
                          var e = r.options.getBrush(u.layer.typeName);
                          e && t.fillBounds(e, u.layerBox);
                          var n = r.options.getPen(u.layer.typeName, !0);
                          n && t.drawBounds(n, u.layerBox);
                        },
                      ),
                      e.drawTable &&
                        (r.drawGroup(
                          t,
                          "".concat(u.layer.id, ":T"),
                          null,
                          function () {
                            var r = e.table.columns[0].position,
                              a = u.text.position,
                              s =
                                e.table.columns[e.table.width - 1].position +
                                e.table.columns[e.table.width - 1].width,
                              l = u.text.position + u.text.height;
                            t.fillRectangle(n % 2 == 0 ? i : o, r, a, s, l);
                          },
                        ),
                        r.drawCells(t, u.text.cells, e.dataFont),
                        e.drawCallout &&
                          r.drawGroup(
                            t,
                            "".concat(u.layer.id, ":C"),
                            null,
                            function () {
                              var r = u.layerBox[2],
                                n = u.getLayerCY(),
                                o = e.table.columns[0].position,
                                i = u.text.position + u.text.height / 2;
                              t.drawLine(a, r, n, o, i);
                            },
                          )),
                      n++);
                  });
                },
              },
              {
                key: "drawGroup",
                value: function (t, e, r, n) {
                  (e && t.beginGroup(e, r), n(), e && t.endGroup());
                },
              },
              {
                key: "drawCells",
                value: function (t, e, r) {
                  var n = this;
                  e.forEach(function (e) {
                    n.drawGroup(t, e.unit, E.UnitGroupHeader, function () {
                      t.drawString(e.text, r, e.position[0], e.position[1] + 1);
                    });
                  });
                },
              },
              {
                key: "drawVias",
                value: function (t, e, r) {
                  var n = this,
                    o = -nt.ViaZoneWidth / 2;
                  (e.forEach(function (e) {
                    var i = n.getStartStopLayer(e, r);
                    if (-1 !== i.start && -1 !== i.stop) {
                      var a = [];
                      if (
                        (a.push(
                          n.drawVia(
                            t,
                            e,
                            r,
                            i.start,
                            i.stop,
                            (o += nt.ViaZoneWidth),
                            i.direction,
                            !0,
                          ),
                        ),
                        e.isSymmetric)
                      ) {
                        var u =
                            r.electricCount - r.rows[i.start].electricNo + 1,
                          s = r.electricCount - r.rows[i.stop].electricNo + 1;
                        ((u = r.rows.findIndex(function (t) {
                          return t.electricNo === u;
                        })),
                          (s = r.rows.findIndex(function (t) {
                            return t.electricNo === s;
                          })),
                          -1 !== u &&
                            -1 !== s &&
                            a.push(
                              n.drawVia(t, e, r, u, s, o, -i.direction, !1),
                            ));
                      }
                      var l = n.options.getPen("Via");
                      n.drawGroup(t, "".concat(a[0].id), null, function () {
                        a.forEach(function (e) {
                          return t.drawPolygons(l, [e.contour]);
                        });
                      });
                    }
                  }),
                    this.range(r.columns - e.length).forEach(function (e) {
                      return n.drawCopperObjects(
                        t,
                        r,
                        -1,
                        -1,
                        (o += nt.ViaZoneWidth),
                      );
                    }));
                },
              },
              {
                key: "getStartStopLayer",
                value: function (t, e) {
                  var r = e.rows.findIndex(function (e) {
                      return e.layer.id === t.startLayerId;
                    }),
                    n = e.rows.findIndex(function (e) {
                      return e.layer.id === t.stopLayerId;
                    });
                  return { start: r, stop: n, direction: r < n ? 1 : -1 };
                },
              },
              {
                key: "drawVia",
                value: function (t, e, r, n, o, i, a, u) {
                  var s = this.options.getPen("Via"),
                    l = this.options.getBrush("ViaBarrel"),
                    c = this.options.getBrush("ViaHole"),
                    f = new Vt(e, r.rows[n].layerBox, r.rows[o].layerBox, i, a);
                  return (
                    f.skip && this.drawSkipPlanes(t, r, f, n, o),
                    t.fillPolygons(l, [f.contour]),
                    t.fillPolygons(c, [f.hole]),
                    t.drawPolygons(s, [f.hole]),
                    f.micro &&
                      t.drawLine(
                        s,
                        f.innerX1,
                        f.baseY[1],
                        f.innerX2,
                        f.baseY[1],
                      ),
                    u && this.drawCopperObjects(t, r, n, o, i),
                    f
                  );
                },
              },
              {
                key: "drawSkipPlanes",
                value: function (t, e, r, n, o) {
                  var i = Math.min(n, o) + 1,
                    a = Math.max(n, o) - 1;
                  if (!(i >= a))
                    for (
                      var u = this.options.getPen("Via"),
                        s = this.options.getBrush("ViaSkip"),
                        l = i;
                      l <= a;
                      l++
                    ) {
                      var c = e.rows[l];
                      if ("Plane" === c.layer.typeName) {
                        var f = c.layerBox[1],
                          h = c.layerBox[3],
                          p = [
                            r.padX1,
                            f + u.width / 2,
                            r.padX2,
                            h - u.width / 2,
                          ];
                        (t.fillBounds(s, p),
                          t.drawLine(u, r.padX1, f, r.padX1, h),
                          t.drawLine(u, r.padX2, f, r.padX2, h));
                      }
                    }
                },
              },
              {
                key: "drawCopperObjects",
                value: function (t, e, r, n, o) {
                  for (
                    var i = Math.min(r, n),
                      a = Math.max(r, n),
                      u = this.options.getPen("CopperObject"),
                      s = this.options.getBrush("CopperObject"),
                      l = 0;
                    l < e.rows.length;
                    l++
                  )
                    if (!(l >= i && l <= a)) {
                      var c = e.rows[l];
                      if ("Signal" == c.layer.typeName) {
                        var f = c.layer.properties.find(function (t) {
                          return "CopperOrientation" === t.name;
                        });
                        if (f) {
                          var h = new zt(
                            c.layerBox,
                            o,
                            Number.parseInt(f.text),
                          );
                          (t.fillPolygons(s, [h.contour]),
                            t.drawPolygons(u, [h.contour]));
                        }
                      }
                    }
                },
              },
              {
                key: "range",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  return Wt(Array(t).keys()).map(function (t) {
                    return t + e;
                  });
                },
              },
            ],
          );
        })();
      function ne(t) {
        return (
          (ne =
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
          ne(t)
        );
      }
      function oe() {
        oe = function () {
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
          s = i.toStringTag || "@@toStringTag";
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
        function c(t, e, r, n) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            u = new D(n || []);
          return (o(a, "_invoke", { value: x(t, r, u) }), a);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = c;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          d = "completed",
          v = {};
        function m() {}
        function g() {}
        function b() {}
        var w = {};
        l(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          k = S && S(S(O([])));
        k && k !== r && n.call(k, a) && (w = k);
        var P = (b.prototype = m.prototype = Object.create(w));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function L(t, e) {
          function r(o, i, a, u) {
            var s = f(t[o], t, i);
            if ("throw" !== s.type) {
              var l = s.arg,
                c = l.value;
              return c && "object" == ne(c) && n.call(c, "__await")
                ? e.resolve(c.__await).then(
                    function (t) {
                      r("next", t, a, u);
                    },
                    function (t) {
                      r("throw", t, a, u);
                    },
                  )
                : e.resolve(c).then(
                    function (t) {
                      ((l.value = t), a(l));
                    },
                    function (t) {
                      return r("throw", t, a, u);
                    },
                  );
            }
            u(s.arg);
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
          var o = h;
          return function (i, a) {
            if (o === y) throw Error("Generator is already running");
            if (o === d) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var s = M(u, n);
                if (s) {
                  if (s === v) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = d), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? d : p), l.arg === v)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = d), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function M(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                M(e, r),
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
        function T(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function E(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function D(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0));
        }
        function O(e) {
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
          throw new TypeError(ne(e) + " is not iterable");
        }
        return (
          (g.prototype = b),
          o(P, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(b, s, "GeneratorFunction")),
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
                : ((t.__proto__ = b), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(P)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(L.prototype),
          l(L.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = L),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(c(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(P),
          l(P, s, "Generator"),
          l(P, a, function () {
            return this;
          }),
          l(P, "toString", function () {
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
          (e.values = O),
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
                this.tryEntries.forEach(E),
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
                  var s = n.call(a, "catchLoc"),
                    l = n.call(a, "finallyLoc");
                  if (s && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
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
                  return (this.complete(r.completion, r.afterLoc), E(r), v);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function ie(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, ae(n.key), n));
        }
      }
      function ae(t) {
        var e = (function (t, e) {
          if ("object" != ne(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != ne(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == ne(e) ? e : e + "";
      }
      var ue,
        se = (function () {
          return (
            (t = function t(e, r, n, o) {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.logger = e),
                (this.dataHelper = r),
                (this.hintHelper = o),
                (this.contourHelper = n));
            }),
            (e = [
              {
                key: "getOtoDistance",
                value: function (t, e, r) {
                  var n = this,
                    o = {
                      state: "Failed",
                      pcbId1: t,
                      pcbId2: e,
                      object1:
                        this.dataHelper.getPcbPrimitiveDescriptionById(t),
                      object2:
                        this.dataHelper.getPcbPrimitiveDescriptionById(e),
                    };
                  try {
                    var i = this.dataHelper.getNodeItemById(t),
                      a = this.dataHelper.getNodeItemById(e);
                    if (!i || !a) return o;
                    var u = this.contourHelper.getContour(
                        this.dataHelper.getPrimitiveGeometry(i, r.includes(t)),
                      ),
                      s = this.contourHelper.getContour(
                        this.dataHelper.getPrimitiveGeometry(a, r.includes(e)),
                      );
                    if (0 === u.length || 0 === s.length) return o;
                    (setTimeout(function () {
                      return n.getOtoDistanceResult(t, e, u, s);
                    }, 0),
                      (o.state = "Started"));
                  } catch (t) {
                    (this.logger.LogError(null == t ? void 0 : t.stack),
                      (o.state = "Failed"));
                  }
                  return o;
                },
              },
              {
                key: "getOtoDistanceResult",
                value: function (t, e, r, n) {
                  return (
                    (o = this),
                    (i = void 0),
                    (a = void 0),
                    (u = oe().mark(function o() {
                      var i, a, u, s, l, c, f;
                      return oe().wrap(
                        function (o) {
                          for (;;)
                            switch ((o.prev = o.next)) {
                              case 0:
                                return (
                                  (s = {
                                    pcbId1: t,
                                    pcbId2: e,
                                    distance: 0,
                                    point1: null,
                                    point2: null,
                                    state: "Failed",
                                    flattened: !1,
                                    time: 0,
                                  }),
                                  (l = Date.now()),
                                  (c = null),
                                  (o.prev = 3),
                                  (o.next = 6),
                                  this.contourHelper.getClosestDistance(r, n)
                                );
                              case 6:
                                ((c = o.sent), (o.next = 13));
                                break;
                              case 9:
                                ((o.prev = 9),
                                  (o.t0 = o.catch(3)),
                                  this.logger.LogError(
                                    null === o.t0 || void 0 === o.t0
                                      ? void 0
                                      : o.t0.stack,
                                  ),
                                  (c = null));
                              case 13:
                                ((s.time = Date.now() - l),
                                  c &&
                                    ((s.state = "Completed"),
                                    (s.point1 = c.point1),
                                    (s.point2 = c.point2),
                                    (s.distance = c.distance),
                                    (s.flattened =
                                      (null === (i = c.contour1) || void 0 === i
                                        ? void 0
                                        : i.layerIndex) !=
                                      (null === (a = c.contour2) || void 0 === a
                                        ? void 0
                                        : a.layerIndex))),
                                  window.__CORE__.bus.emit(
                                    "SupportLibrary:getOtoDistanceResult",
                                    s,
                                  ),
                                  c &&
                                    (null === (u = this.hintHelper) ||
                                    void 0 === u
                                      ? void 0
                                      : u.mode) &&
                                    ((f = Array.from(r).concat(n))[0].addLine(
                                      [c.point1, c.point2],
                                      b.Both,
                                    ),
                                    this.hintHelper.showContour(f)));
                              case 17:
                              case "end":
                                return o.stop();
                            }
                        },
                        o,
                        this,
                        [[3, 9]],
                      );
                    })),
                    new (a || (a = Promise))(function (t, e) {
                      function r(t) {
                        try {
                          s(u.next(t));
                        } catch (t) {
                          e(t);
                        }
                      }
                      function n(t) {
                        try {
                          s(u.throw(t));
                        } catch (t) {
                          e(t);
                        }
                      }
                      function s(e) {
                        var o;
                        e.done
                          ? t(e.value)
                          : ((o = e.value),
                            o instanceof a
                              ? o
                              : new a(function (t) {
                                  t(o);
                                })).then(r, n);
                      }
                      s((u = u.apply(o, i || [])).next());
                    })
                  );
                  var o, i, a, u;
                },
              },
              {
                key: "lsmToSvg",
                value: function (t, e, r) {
                  var n = { svg: E.stubPreview, state: "Failed" };
                  if (t)
                    try {
                      var o = new re();
                      ((n.svg =
                        "Preview" === r ? o.drawPreview(t, e) : o.draw(t, e)),
                        (n.state = "Completed"));
                    } catch (t) {
                      this.logger.LogError(null == t ? void 0 : t.stack);
                    }
                  return n;
                },
              },
            ]) && ie(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        le = r(43772),
        ce = r(79791);
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
      function he(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, pe(n.key), n));
        }
      }
      function pe(t) {
        var e = (function (t, e) {
          if ("object" != fe(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != fe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == fe(e) ? e : e + "";
      }
      !(function (t) {
        ((t[(t.None = 0)] = "None"),
          (t[(t.Signal = 1)] = "Signal"),
          (t[(t.Other = 2)] = "Other"));
      })(ue || (ue = {}));
      var ye,
        de,
        ve = (function () {
          return (
            (t = function t() {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.layerMap = new Map()),
                (this.holeLayers = []));
            }),
            (e = [
              {
                key: "setup",
                value: function (t) {
                  var e = this;
                  this.layerManager = t;
                  var r = this.layerManager.getLayers();
                  ((this.holeLayers = r
                    .filter(function (t) {
                      return e.isHolesLayer(t);
                    })
                    .map(function (t) {
                      return t.id;
                    })),
                    this.setLayers(
                      r.filter(function (t) {
                        return !e.isHolesLayer(t);
                      }),
                    ));
                },
              },
              {
                key: "setLayers",
                value: function (t) {
                  var e = this;
                  ((this.layerMap = new Map()),
                    t.forEach(function (t) {
                      var r = {};
                      (Object.assign(r, t), e.layerMap.set(r.id, r));
                    }));
                },
              },
              {
                key: "setLayerOnly",
                value: function (t) {
                  var e,
                    r,
                    n = this;
                  this.layerMap.forEach(function (t) {
                    return (t.isVisible = !1);
                  });
                  var o =
                    null ===
                      (r =
                        null === (e = this.layerManager) || void 0 === e
                          ? void 0
                          : e.getLayers()) || void 0 === r
                      ? void 0
                      : r.filter(function (e) {
                          return e.name == t || "Multi-Layer" === e.searchName;
                        });
                  null == o ||
                    o.forEach(function (t) {
                      var e = n.layerMap.get(t.id);
                      e && (e.isVisible = !0);
                    });
                },
              },
              {
                key: "resetLayers",
                value: function () {
                  this.layerManager &&
                    (this.layerManager.resetLayers(),
                    this.setLayers(this.layerManager.getLayers()));
                },
              },
              {
                key: "getLayerKind",
                value: function (t, e) {
                  var r = this.layerMap.get(t),
                    n = ce.V.Signal | ce.V.Plane;
                  return r
                    ? (!r.ignored && r.isVisible) || e
                      ? (r.kind & n) > 0
                        ? ue.Signal
                        : ue.Other
                      : ue.None
                    : this.holeLayers.find(function (e) {
                          return e === t;
                        })
                      ? ue.Other
                      : ue.None;
                },
              },
              {
                key: "isHolesLayer",
                value: function (t) {
                  return (
                    !!t &&
                    (t.searchName.startsWith("Pad Holes") ||
                      t.searchName.startsWith("Via Holes"))
                  );
                },
              },
            ]) && he(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        me = r(31444);
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
      function be(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, we(n.key), n));
        }
      }
      function we(t) {
        var e = (function (t, e) {
          if ("object" != ge(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != ge(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == ge(e) ? e : e + "";
      }
      (!(function (t) {
        ((t[(t.Metric = 0)] = "Metric"), (t[(t.Imperial = 1)] = "Imperial"));
      })(ye || (ye = {})),
        (function (t) {
          ((t[(t.Mil = 0)] = "Mil"),
            (t[(t.Meta = 1)] = "Meta"),
            (t[(t.Graphite = 2)] = "Graphite"));
        })(de || (de = {})));
      var Se,
        ke = (function () {
          return (
            (t = function t(e) {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.layerHelper = e));
            }),
            (e = [
              {
                key: "setScene2D",
                value: function (t) {
                  this.scene2D = t;
                },
              },
              {
                key: "setup",
                value: function () {
                  var t, e, r, o, i;
                  ((this.metadataRepository = le.q.instance),
                    (this.metadata =
                      null === (t = n.Q.response) || void 0 === t
                        ? void 0
                        : t.metadata),
                    (this.pcbUnits =
                      "number" ==
                      typeof (null ===
                        (r =
                          null === (e = this.metadata) || void 0 === e
                            ? void 0
                            : e.pcbDocument) || void 0 === r
                        ? void 0
                        : r.units)
                        ? null ===
                            (i =
                              null === (o = this.metadata) || void 0 === o
                                ? void 0
                                : o.pcbDocument) || void 0 === i
                          ? void 0
                          : i.units
                        : ye.Imperial));
                },
              },
              {
                key: "getNodeItemById",
                value: function (t) {
                  return this.scene2D.getNodeItemById(t);
                },
              },
              {
                key: "getMetadataLayer",
                value: function (t) {
                  return this.metadata && this.metadata.layers
                    ? this.metadata.layers.find(function (e) {
                        return e.id == t;
                      })
                    : null;
                },
              },
              {
                key: "getPcbPrimitiveDescriptionById",
                value: function (t) {
                  var e = this.metadataRepository.getPrimitiveById(t);
                  return e ? this.getPcbPrimitiveDescription(e) : "Unknown";
                },
              },
              {
                key: "pcbFormat",
                value: function (t, e) {
                  var r = this,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : de.Mil,
                    i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                  e = void 0 === e ? this.pcbUnits : e;
                  var a = 1;
                  switch (n) {
                    case de.Graphite:
                      a = o;
                      break;
                    case de.Meta:
                      a = 1e4;
                  }
                  var u = "";
                  return (
                    t.forEach(function (t) {
                      var n = "".concat(r.round(t / a), "mil"),
                        o = "".concat(r.round((t / a) * 0.0254), "mm"),
                        s = "",
                        l = "";
                      (e == ye.Metric ? ((s = o), (l = n)) : ((s = n), (l = o)),
                        u && (u += ","),
                        (u = u + s + (i ? " (".concat(l, ")") : "")));
                    }),
                    u
                  );
                },
              },
              {
                key: "round",
                value: function (t) {
                  return Math.round(1e3 * t) / 1e3;
                },
              },
              {
                key: "getPcbPrimitiveDescription",
                value: function (t) {
                  var e = 255 & t.kind,
                    r = this.getPcbPrimiviveNameByKind(e),
                    n = this.getLayerName(t.layerId);
                  return "".concat(r, " on ").concat(n);
                },
              },
              {
                key: "getPcbPrimiviveNameByKind",
                value: function (t) {
                  return (0, me.cE)(t);
                },
              },
              {
                key: "getLayerName",
                value: function (t) {
                  var e = this.getMetadataLayer(t);
                  return e ? e.name : "#".concat(t);
                },
              },
              {
                key: "getPrimitiveGeometry",
                value: function (t, e) {
                  var r = this,
                    n = [],
                    o = [],
                    i = t.GetLayersCount();
                  if ((ce.V.Signal, ce.V.Plane, 0 == i)) {
                    var a = this.scene2D.getBoundingUniForItem(t, -1);
                    return [
                      {
                        GetLayerIndex: function () {
                          return 0;
                        },
                        GetUnisCount: function () {
                          return 1;
                        },
                        GetUni: function (t) {
                          return a;
                        },
                        GetArcsCount: function () {
                          return 0;
                        },
                        GetArc: function (t) {
                          return null;
                        },
                        GetPolysCount: function () {
                          return 0;
                        },
                        GetPoly: function (t) {
                          return null;
                        },
                        GetLabelsCount: function () {
                          return 0;
                        },
                        GetLabel: function (t) {
                          return null;
                        },
                        GetLinesCount: function () {
                          return 0;
                        },
                        GetLine: function (t) {
                          return null;
                        },
                      },
                    ];
                  }
                  for (var u = 0; u < i; u++) {
                    var s = t.GetLayerGeometry(u);
                    if (
                      s &&
                      (0 != s.GetPolysCount() ||
                        0 != s.GetArcsCount() ||
                        0 != s.GetUnisCount())
                    ) {
                      var l = this.layerHelper.getLayerKind(
                        s.GetLayerIndex(),
                        e,
                      );
                      l == ue.Signal ? o.push(s) : l == ue.Other && n.push(s);
                    }
                  }
                  return (o.length > 0 ? o : n).reduce(function (t, e) {
                    return (
                      t.find(function (t) {
                        return r.equalGeometries(t, e);
                      }) || t.push(e),
                      t
                    );
                  }, []);
                },
              },
              {
                key: "equalGeometries",
                value: function (t, e) {
                  var r = t.GetArcsCount(),
                    n = t.GetUnisCount(),
                    o = t.GetPolysCount();
                  if (r !== e.GetArcsCount()) return !1;
                  if (n !== e.GetUnisCount()) return !1;
                  if (o !== e.GetPolysCount()) return !1;
                  for (var i = 0; i < r; i++) {
                    var a = t.GetArc(i),
                      u = e.GetArc(i);
                    if (a.width !== u.width) return !1;
                    if (a.radius !== u.radius) return !1;
                    if (a.angles[0] !== u.center[0]) return !1;
                    if (a.angles[1] !== u.center[1]) return !1;
                    if (a.center[0] !== u.center[0]) return !1;
                    if (a.center[1] !== u.center[1]) return !1;
                  }
                  for (i = 0; i < n; i++) {
                    var s = t.GetUni(i),
                      l = e.GetUni(i);
                    if (s.radius !== l.radius) return !1;
                    if (s.size[0] !== l.size[0]) return !1;
                    if (s.size[1] !== l.size[1]) return !1;
                    if (s.position[0] !== l.position[0]) return !1;
                    if (s.position[1] !== l.position[1]) return !1;
                    if (s.direction[0] !== l.direction[0]) return !1;
                    if (s.direction[1] !== l.direction[1]) return !1;
                  }
                  for (i = 0; i < o; i++) {
                    var c = t.GetPoly(i),
                      f = e.GetPoly(i);
                    if (c.polygon !== f.polygon) return !1;
                    if (c.angle[0] !== f.angle[0]) return !1;
                    if (c.angle[1] !== f.angle[1]) return !1;
                    if (c.scale[0] !== f.scale[0]) return !1;
                    if (c.scale[1] !== f.scale[1]) return !1;
                    if (c.position[0] !== f.position[0]) return !1;
                    if (c.position[1] !== f.position[1]) return !1;
                  }
                  return !0;
                },
              },
            ]),
            e && be(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        Pe = r(32699),
        Ce = r(18446),
        Le = r(85780),
        xe = r(70315);
      function Me(t) {
        return (
          (Me =
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
          Me(t)
        );
      }
      function Te(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Ee(n.key), n));
        }
      }
      function Ee(t) {
        var e = (function (t, e) {
          if ("object" != Me(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != Me(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Me(e) ? e : e + "";
      }
      !(function (t) {
        ((t[(t.None = 0)] = "None"),
          (t[(t.Reduced = 1)] = "Reduced"),
          (t[(t.Full = 2)] = "Full"));
      })(Se || (Se = {}));
      var De = (function () {
        return (
          (t = function t() {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.hintNode = null),
              (this.hintMaterial = -1),
              (this.mode = Se.None),
              (this.logger = n.Q.createLogger("Support library")));
          }),
          (e = [
            {
              key: "setScene2D",
              value: function (t) {
                this.scene2D = t;
              },
            },
            {
              key: "clear",
              value: function () {
                this.hintNode &&
                  (this.scene2D.removeItem(this.hintNode),
                  (this.hintNode = null));
              },
            },
            {
              key: "showContour",
              value: function (t) {
                if (
                  (this.clear(),
                  this.mode && (null == t ? void 0 : t.length) && this.scene2D)
                ) {
                  var e;
                  switch (
                    (this.hintMaterial < 0 &&
                      (this.hintMaterial = this.scene2D.addMaterial(
                        new Pe.Z(
                          new Uint8Array([0, 175, 14, 255]),
                          xe.lc.None,
                          !1,
                          !1,
                          !1,
                        ),
                      )),
                    this.mode)
                  ) {
                    case Se.Reduced:
                      e = this.getReducedContainer(t);
                      break;
                    case Se.Full:
                      e = this.getFullContainer(t);
                      break;
                    default:
                      return;
                  }
                  if (e) {
                    var r = this.scene2D.layerMap.GetLayersCount() - 2;
                    this.hintNode = this.scene2D.addNode(r, e);
                  }
                }
              },
            },
            {
              key: "getReducedContainer",
              value: function (t) {
                var e = new Le.Z(),
                  r = t
                    .map(function (t) {
                      return t.lines;
                    })
                    .reduce(function (t, e) {
                      return t.concat(e);
                    }, []);
                e.unis.length = r.length;
                for (var n = 0; n < r.length; n++) {
                  var o = r[n];
                  e.unis[n] = Ce.Z.createLine(
                    o.from[0],
                    o.from[1],
                    o.to[0],
                    o.to[1],
                    0.001,
                    this.hintMaterial,
                    "round",
                  );
                }
                return e;
              },
            },
            {
              key: "getFullContainer",
              value: function (t) {
                for (
                  var e = new Le.Z(),
                    r = t
                      .map(function (t) {
                        return t.vertices;
                      })
                      .reduce(function (t, e) {
                        return t.concat(e);
                      }, []),
                    n = 0;
                  n < r.length;
                  n++
                )
                  for (var o = r[n], i = o[0], a = 1; a < o.length; a++) {
                    var u = o[a],
                      s = Ce.Z.createLine(
                        i[0],
                        i[1],
                        u[0],
                        u[1],
                        0.001,
                        this.hintMaterial,
                        "round",
                      );
                    (e.unis.push(s), (i = u));
                  }
                return e;
              },
            },
          ]) && Te(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Oe(t) {
        return (
          (Oe =
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
          Oe(t)
        );
      }
      function je(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Ae(n.key), n));
        }
      }
      function Ae(t) {
        var e = (function (t, e) {
          if ("object" != Oe(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != Oe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Oe(e) ? e : e + "";
      }
      function Ge(t, e, r) {
        return (
          (e = Fe(e)),
          (function (t, e) {
            if (e && ("object" == Oe(e) || "function" == typeof e)) return e;
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
            _e()
              ? Reflect.construct(e, r || [], Fe(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function _e() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (_e = function () {
          return !!t;
        })();
      }
      function Fe(t) {
        return (
          (Fe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Fe(t)
        );
      }
      function Xe(t, e) {
        return (
          (Xe = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          Xe(t, e)
        );
      }
      var Ie = window.__CORE__,
        Ne = (0, window.__APP__.createModule)({
          type: "Plugin",
          description: "SupportLibrary",
          create: function (t) {
            return new ((function (t) {
              function e() {
                var t;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  ((t = Ge(this, e, [
                    {
                      name: "SupportLibrary",
                      comment: "SupportLibrary",
                      description: "SupportLibrary",
                    },
                  ])).logger = Ie.createLogger("Support library")),
                  (t.layerHelper = new ve()),
                  (t.dataHelper = new ke(t.layerHelper)),
                  (t.hintHelper = new De()),
                  (t.contourHelper = new P()),
                  (t.library = new se(
                    t.logger,
                    t.dataHelper,
                    t.contourHelper,
                    t.hintHelper,
                  )),
                  Ie.bus.on("GraphiteEngine:createdScene2D", function (e) {
                    return new Promise(function (r) {
                      (t.dataHelper.setScene2D(e),
                        t.hintHelper.setScene2D(e),
                        t.contourHelper.setScene2D(e),
                        r());
                    });
                  }),
                  Ie.bus.on("PcbEngine:layerManagerCreated", function (e) {
                    t.layerHelper.setup(e);
                  }),
                  Ie.bus.on("BoardItemsVisibility:change", function (e) {
                    t.layerHelper.setLayers(e.flat());
                  }),
                  Ie.bus.on("BoardItemsVisibility:offOnly", function (e) {
                    t.layerHelper.setLayers(e.flat());
                  }),
                  Ie.bus.on("BoardItemsVisibility:onOnly", function (e) {
                    t.layerHelper.setLayerOnly(e);
                  }),
                  Ie.bus.on("BoardItemsVisibility:reset", function () {
                    t.layerHelper.resetLayers();
                  }),
                  Ie.bus.on("SupportLibrary:hintMode", function (e) {
                    t.hintHelper.hintMode = e;
                  }),
                  Ie.bus.on("SupportLibrary:getOtoDistance", function (e) {
                    e.result = t.library.getOtoDistance(
                      e.id1,
                      e.id2,
                      e.allLayersIds,
                    );
                  }),
                  Ie.bus.on("SupportLibrary:lsmToSvg", function (e) {
                    var r;
                    e.result = t.library.lsmToSvg(
                      e.lsm,
                      e.options,
                      null !== (r = e.kind) && void 0 !== r ? r : "View",
                    );
                  }),
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
                    e && Xe(t, e));
                })(e, t),
                (r = e),
                (n = [
                  {
                    key: "events",
                    get: function () {
                      return [
                        "SupportLibrary:hintMode",
                        "SupportLibrary:getOtoDistance",
                        "SupportLibrary:getOtoDistanceResult",
                        "SupportLibrary:lsmToSvg",
                      ];
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      var t = this;
                      return (
                        this.logger.LogDebug("Setup"),
                        new Promise(function (e) {
                          (t.dataHelper.setup(), e());
                        })
                      );
                    },
                  },
                  {
                    key: "handleOtoResult",
                    value: function (t) {
                      (this.logger.LogDebug(
                        "OTO #"
                          .concat(t.pcbId1, " - #")
                          .concat(t.pcbId2, " : ")
                          .concat(t.state, " in ")
                          .concat(t.time, "ms"),
                      ),
                        this.logger.LogDebug(
                          this.dataHelper.pcbFormat(
                            [t.distance],
                            ye.Imperial,
                            de.Mil,
                            !0,
                          ) + (t.flattened ? " (flattened)" : ""),
                        ));
                    },
                  },
                ]) && je(r.prototype, n),
                Object.defineProperty(r, "prototype", { writable: !1 }),
                r
              );
              var r, n;
            })(t))();
          },
        });
      Ie && Ie.addModule(Ne);
    },
  },
  (t) => {
    (t.O(0, [21759], () => t((t.s = 24997))), t.O());
  },
]);
