"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [84358],
  {
    61548: (t, e, n) => {
      var r = n(70315),
        o = n(49235),
        i = n(32699),
        a = n(85780),
        u = n(36035),
        s = n(71094),
        c = 0.01;
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
      function f(t, e) {
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
          if ("object" != l(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != l(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == l(e) ? e : e + "";
      }
      var y = (function () {
        return (
          (t = function t() {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.enabled = !0),
              (this.objects = s.V.Default),
              (this.auto = !0),
              (this.userDistance = 15),
              (this.autoDistance = 10),
              (this.autoDistanceMil = 15));
          }),
          (e = [
            {
              key: "distance",
              get: function () {
                return Math.round(
                  this.auto ? this.autoDistanceMil : this.userDistance,
                );
              },
            },
            {
              key: "updateDistance",
              value: function (t) {
                var e = t.pixelsToUnits(1) / c;
                this.autoDistanceMil = e * this.autoDistance;
              },
            },
            {
              key: "apply",
              value: function (t) {
                t &&
                  ((this.auto = null != t.auto ? t.auto : this.auto),
                  (this.enabled = null != t.enabled ? t.enabled : this.enabled),
                  (this.objects = t.objects ? t.objects : this.objects),
                  (this.autoDistance = t.autoDistance
                    ? Math.abs(t.autoDistance)
                    : this.autoDistance),
                  (this.userDistance = t.userDistance
                    ? Math.abs(t.userDistance)
                    : this.userDistance));
              },
            },
          ]) && f(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function h(t, e, n, r, o, i) {
        if (!(o - r <= n)) {
          var a = (r + o) >> 1;
          (b(t, e, a, r, o, i % 2),
            h(t, e, n, r, a - 1, i + 1),
            h(t, e, n, a + 1, o, i + 1));
        }
      }
      function b(t, e, n, r, o, i) {
        for (; o > r; ) {
          if (o - r > 600) {
            var a = o - r + 1,
              u = n - r + 1,
              s = Math.log(a),
              c = 0.5 * Math.exp((2 * s) / 3),
              l =
                0.5 *
                Math.sqrt((s * c * (a - c)) / a) *
                (u - a / 2 < 0 ? -1 : 1);
            b(
              t,
              e,
              n,
              Math.max(r, Math.floor(n - (u * c) / a + l)),
              Math.min(o, Math.floor(n + ((a - u) * c) / a + l)),
              i,
            );
          }
          var f = e[2 * n + i],
            p = r,
            y = o;
          for (g(t, e, r, n), e[2 * o + i] > f && g(t, e, r, o); p < y; ) {
            for (g(t, e, p, y), p++, y--; e[2 * p + i] < f; ) p++;
            for (; e[2 * y + i] > f; ) y--;
          }
          (e[2 * r + i] === f ? g(t, e, r, y) : g(t, e, ++y, o),
            y <= n && (r = y + 1),
            n <= y && (o = y - 1));
        }
      }
      function g(t, e, n, r) {
        (v(t, n, r), v(e, 2 * n, 2 * r), v(e, 2 * n + 1, 2 * r + 1));
      }
      function v(t, e, n) {
        var r = t[e];
        ((t[e] = t[n]), (t[n] = r));
      }
      function m(t, e, n, r) {
        var o = t - n,
          i = e - r;
        return o * o + i * i;
      }
      function d(t) {
        return (
          (d =
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
          d(t)
        );
      }
      function w(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, S(r.key), r));
        }
      }
      function S(t) {
        var e = (function (t, e) {
          if ("object" != d(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != d(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == d(e) ? e : e + "";
      }
      var P = function (t) {
          return t[0];
        },
        k = function (t) {
          return t[1];
        },
        j = (function () {
          return (
            (t = function t(e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : P,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : k,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 64,
                i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : Float64Array;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.nodeSize = o),
                (this.points = e));
              for (
                var a = e.length < 65536 ? Uint16Array : Uint32Array,
                  u = (this.ids = new a(e.length)),
                  s = (this.coords = new i(2 * e.length)),
                  c = 0;
                c < e.length;
                c++
              )
                ((u[c] = c), (s[2 * c] = n(e[c])), (s[2 * c + 1] = r(e[c])));
              h(u, s, o, 0, u.length - 1, 0);
            }),
            (e = [
              {
                key: "range",
                value: function (t, e, n, r) {
                  return (function (t, e, n, r, o, i, a) {
                    for (
                      var u, s, c = [0, t.length - 1, 0], l = [];
                      c.length;
                    ) {
                      var f = c.pop(),
                        p = c.pop(),
                        y = c.pop();
                      if (p - y <= a)
                        for (var h = y; h <= p; h++)
                          ((u = e[2 * h]),
                            (s = e[2 * h + 1]),
                            u >= n &&
                              u <= o &&
                              s >= r &&
                              s <= i &&
                              l.push(t[h]));
                      else {
                        var b = Math.floor((y + p) / 2);
                        ((u = e[2 * b]),
                          (s = e[2 * b + 1]),
                          u >= n && u <= o && s >= r && s <= i && l.push(t[b]));
                        var g = (f + 1) % 2;
                        ((0 === f ? n <= u : r <= s) &&
                          (c.push(y), c.push(b - 1), c.push(g)),
                          (0 === f ? o >= u : i >= s) &&
                            (c.push(b + 1), c.push(p), c.push(g)));
                      }
                    }
                    return l;
                  })(this.ids, this.coords, t, e, n, r, this.nodeSize);
                },
              },
              {
                key: "within",
                value: function (t, e, n) {
                  return (function (t, e, n, r, o, i) {
                    for (
                      var a = [0, t.length - 1, 0], u = [], s = o * o;
                      a.length;
                    ) {
                      var c = a.pop(),
                        l = a.pop(),
                        f = a.pop();
                      if (l - f <= i)
                        for (var p = f; p <= l; p++)
                          m(e[2 * p], e[2 * p + 1], n, r) <= s && u.push(t[p]);
                      else {
                        var y = Math.floor((f + l) / 2),
                          h = e[2 * y],
                          b = e[2 * y + 1];
                        m(h, b, n, r) <= s && u.push(t[y]);
                        var g = (c + 1) % 2;
                        ((0 === c ? n - o <= h : r - o <= b) &&
                          (a.push(f), a.push(y - 1), a.push(g)),
                          (0 === c ? n + o >= h : r + o >= b) &&
                            (a.push(y + 1), a.push(l), a.push(g)));
                      }
                    }
                    return u;
                  })(this.ids, this.coords, t, e, n, this.nodeSize);
                },
              },
            ]) && w(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
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
      function D(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, C(r.key), r));
        }
      }
      function M(t, e, n) {
        return (
          e && D(t.prototype, e),
          n && D(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function C(t) {
        var e = (function (t, e) {
          if ("object" != O(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != O(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == O(e) ? e : e + "";
      }
      var E = M(function t(e, n, r, o) {
        (!(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.point = e),
          (this.object = n),
          (this.item = r),
          (this.layer = o));
      });
      function T(t) {
        return (
          (T =
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
          T(t)
        );
      }
      function _(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, R(r.key), r));
        }
      }
      function R(t) {
        var e = (function (t, e) {
          if ("object" != T(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != T(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == T(e) ? e : e + "";
      }
      var L = (function () {
        return (
          (t = function t(e) {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.coords = new Float32Array(2 * e.length)),
              (this.data = new Uint8Array(3 * e.length)));
            for (var n = 0; n < e.length; ++n) {
              var r = e[n];
              ((this.coords[2 * n] = r.point[0]),
                (this.coords[2 * n + 1] = r.point[1]),
                (this.data[3 * n] = r.object),
                (this.data[3 * n + 1] = r.item),
                (this.data[3 * n + 2] = r.layer));
            }
            ((this.index = new j(
              e,
              function (t) {
                return t.point[0];
              },
              function (t) {
                return t.point[1];
              },
              16,
              Float64Array,
            )),
              (this.index.points = []));
          }),
          (e = [
            {
              key: "getPointCount",
              value: function () {
                return this.coords.length / 2;
              },
            },
            {
              key: "getPoint",
              value: function (t) {
                var e = this.coords;
                return new E(
                  [e[2 * t], e[2 * t + 1]],
                  this.data[3 * t],
                  this.data[3 * t + 1],
                  this.data[3 * t + 2],
                );
              },
            },
            {
              key: "getAllPoints",
              value: function () {
                for (
                  var t = new Array(this.getPointCount()), e = 0;
                  e < t.length;
                  ++e
                )
                  t[e] = this.getPoint(e);
                return t;
              },
            },
            {
              key: "getClosestPoints",
              value: function (t, e) {
                var n = this;
                return this.index.within(t[0], t[1], e).map(function (t) {
                  return n.getPoint(t);
                });
              },
            },
          ]) && _(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function I(t) {
        return (
          (I =
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
          I(t)
        );
      }
      function x(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, A(r.key), r));
        }
      }
      function A(t) {
        var e = (function (t, e) {
          if ("object" != I(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != I(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == I(e) ? e : e + "";
      }
      var N = [],
        V = (function () {
          return (
            (t = function t() {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.isReady_ = !1),
                (this.pointIndex = new L([])));
            }),
            (e = [
              {
                key: "pointsTemp",
                get: function () {
                  return N;
                },
              },
              {
                key: "clear",
                value: function () {
                  this.isReady || (N = []);
                },
              },
              {
                key: "addPoints",
                value: function (t) {
                  var e = this;
                  this.isReady ||
                    t.forEach(function (t) {
                      return e.pointsTemp.push(t);
                    });
                },
              },
              {
                key: "getPointCount",
                value: function () {
                  return this.pointIndex.getPointCount();
                },
              },
              {
                key: "isReady",
                get: function () {
                  return this.isReady_;
                },
              },
              {
                key: "getAllPoints",
                value: function (t, e) {
                  var n = this;
                  return this.pointIndex
                    ? this.pointIndex
                        .getAllPoints()
                        .filter(function (r) {
                          return n.filterPoint(r, t, e);
                        })
                        .map(function (t) {
                          return t.point;
                        })
                    : [];
                },
              },
              {
                key: "filterPoint",
                value: function (t, e, n) {
                  return !!t && !!(t.object & e.objects) && n.includes(t.layer);
                },
              },
              {
                key: "indexPoints",
                value: function () {
                  this.isReady ||
                    ((this.pointIndex = new L(this.pointsTemp)),
                    (N = []),
                    (this.isReady_ = !0));
                },
              },
              {
                key: "distance",
                value: function (t, e) {
                  return Math.sqrt(
                    Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2),
                  );
                },
              },
              {
                key: "getClosestPoint",
                value: function (t, e, n) {
                  if (0 !== e.distance && e.objects & s.V.AllPoints) {
                    var r = e.distance * c,
                      o = this.getClosestSnappingPoint(t, e, n);
                    if (o && this.distance(t, o.point) < r)
                      return {
                        point: o.point,
                        layer: o.layer,
                        object: o.object,
                        item: o.item,
                      };
                  }
                },
              },
              {
                key: "getClosestSnappingPoint",
                value: function (t, e, n) {
                  var r = this,
                    o = e.distance * c,
                    i = this.pointIndex.getClosestPoints(t, o);
                  if (i.length > 0)
                    return (
                      i.forEach(function (e) {
                        return (e.distance = r.distance(e.point, t));
                      }),
                      i.sort(function (t, e) {
                        return t.distance - e.distance;
                      }),
                      i.find(function (t) {
                        return r.filterPoint(t, e, n);
                      })
                    );
                },
              },
            ]) && x(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      function B(t) {
        return (
          (B =
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
          B(t)
        );
      }
      function U(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, F(r.key), r));
        }
      }
      function F(t) {
        var e = (function (t, e) {
          if ("object" != B(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != B(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == B(e) ? e : e + "";
      }
      var W = (function () {
        return (
          (t = function t() {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.storageMap = new Map()));
          }),
          (e = [
            {
              key: "getStorage",
              value: function (t) {
                return (
                  this.storageMap.has(t) || this.storageMap.set(t, new V()),
                  this.storageMap.get(t)
                );
              },
            },
            {
              key: "addPoints",
              value: function (t, e) {
                var n = this.getStorage(t);
                (0 == n.getPointCount() && (this.filledDocumentId = t),
                  t != this.filledDocumentId && n.clear(),
                  n.addPoints(e));
              },
            },
            {
              key: "indexPoints",
              value: function (t) {
                var e = this.getStorage(t);
                return (
                  e.indexPoints(),
                  (this.filledDocumentId = null),
                  e.getPointCount()
                );
              },
            },
          ]) && U(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
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
      function Z(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, q(r.key), r));
        }
      }
      function q(t) {
        var e = (function (t, e) {
          if ("object" != z(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != z(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == z(e) ? e : e + "";
      }
      var G = (function () {
        return (
          (t = function t() {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.points = []));
          }),
          (e = [
            {
              key: "clear",
              value: function () {
                this.points = [];
              },
            },
            {
              key: "load",
              value: function (t) {
                var e = JSON.parse(t);
                return (Object.assign(this, e), this);
              },
            },
            {
              key: "count",
              value: function () {
                return this.points.length;
              },
            },
            {
              key: "get",
              value: function () {
                return this.points;
              },
            },
            {
              key: "addPoint",
              value: function (t, e, n, r) {
                return (
                  !!Number.isSafeInteger(r) &&
                  (this.points.push(new E(t, e, n, r)), !0)
                );
              },
            },
          ]) && Z(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function J(t) {
        return (
          (J =
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
          J(t)
        );
      }
      function Q(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Y(r.key), r));
        }
      }
      function Y(t) {
        var e = (function (t, e) {
          if ("object" != J(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != J(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == J(e) ? e : e + "";
      }
      var H = "Multi-Layer",
        K = (function () {
          return (
            (t = function t() {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.logger =
                  window.__CORE__.createLogger("Snapping Manager")),
                (this.showSnappings = !1),
                (this.snappingNode = null),
                (this.materialId = null),
                (this.options = new y()),
                (this.storages = new W()));
            }),
            (e = [
              { key: "setup", value: function () {} },
              {
                key: "isReady",
                value: function (t) {
                  return this.storages.getStorage(t).isReady;
                },
              },
              {
                key: "fillStorage",
                value: function (t) {
                  var e = t.documentId;
                  switch (t.status) {
                    case "SnappingChankReady":
                      var n = new G().load(t.data);
                      (this.storages.addPoints(e, n.get()),
                        this.logger.LogDebug(
                          "Added points: " + n.get().length + "   " + e,
                        ));
                      break;
                    case "SnappingFinished":
                      var r = this.storages.indexPoints(e);
                      (this.logger.LogDebug(
                        "Storage data is ready. Point count: ".concat(r),
                      ),
                        o.Q.bus.emit("Snapping:loaded"));
                  }
                },
              },
              {
                key: "init",
                value: function (t, e, n) {
                  ((this.scene = t),
                    (this.layerManager = e),
                    (this.currentDocumentId = n),
                    (this.allLayers = e.getLayers()),
                    this.setLayers(this.allLayers, !1));
                },
              },
              {
                key: "checkPoint",
                value: function (t) {
                  try {
                    if (this.options.enabled && this.storage)
                      return (
                        this.options.updateDistance(this.scene),
                        this.storage.getClosestPoint(
                          t,
                          this.options,
                          this.layers,
                        )
                      );
                  } catch (t) {
                    this.logger.LogDebug("Check snapping point error.");
                  }
                },
              },
              {
                key: "getOptions",
                value: function () {
                  return this.options;
                },
              },
              {
                key: "setOptions",
                value: function (t) {
                  (t ? this.options.apply(t) : (this.options = new y()),
                    this.updateDisplay());
                },
              },
              {
                key: "setLayers",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n = t.filter(function (t) {
                      return (t.isVisible && !t.ignored) || t.searchName === H;
                    });
                  ((this.layers = n.map(function (t) {
                    return t.metaId;
                  })),
                    e && this.updateDisplay());
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
                key: "setLayerOnly",
                value: function (t) {
                  var e,
                    n =
                      null === (e = this.allLayers) || void 0 === e
                        ? void 0
                        : e.filter(function (e) {
                            return e.name == t || e.searchName === H;
                          });
                  (null == n ? void 0 : n.length) &&
                    ((this.layers = n.map(function (t) {
                      return t.metaId;
                    })),
                    this.updateDisplay());
                },
              },
              {
                key: "show",
                value: function () {
                  ((this.showSnappings = !0), this.updateDisplay());
                },
              },
              {
                key: "hide",
                value: function () {
                  ((this.showSnappings = !1), this.updateDisplay());
                },
              },
              {
                key: "storage",
                get: function () {
                  return this.storages.getStorage(this.currentDocumentId);
                },
              },
              {
                key: "updateDisplay",
                value: function () {
                  if (
                    (this.snappingNode &&
                      (this.scene.removeItem(this.snappingNode),
                      (this.snappingNode = null)),
                    this.storage && this.showSnappings)
                  ) {
                    null === this.materialId &&
                      (this.materialId = this.scene.addMaterial(
                        new i.Z(
                          new Uint8Array([0, 175, 14, 255]),
                          r.lc.None,
                          !1,
                          !1,
                          !1,
                        ),
                      ));
                    var t = new a.Z(),
                      e = this.storage.getAllPoints(this.options, this.layers);
                    t.arcs.length = e.length;
                    for (var n = 0; n < e.length; n++)
                      t.arcs[n] = u.Z.createCircleFill(
                        e[n][0],
                        e[n][1],
                        0.05,
                        this.materialId,
                      );
                    var o = this.scene.layerMap.GetLayersCount() - 2;
                    this.snappingNode = this.scene.addNode(o, t);
                  }
                },
              },
            ]),
            e && Q(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      function X(t) {
        return (
          (X =
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
          X(t)
        );
      }
      function $(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, tt(r.key), r));
        }
      }
      function tt(t) {
        var e = (function (t, e) {
          if ("object" != X(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != X(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == X(e) ? e : e + "";
      }
      var et = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "setData",
              value: function (t, e, n) {
                return (
                  (this.renderData = t),
                  (this.metadata = e),
                  (this.documentId = n),
                  (this.status = "RunProcessing"),
                  this
                );
              },
            },
            {
              key: "setCancelled",
              value: function () {
                return ((this.status = "CancelProcessing"), this);
              },
            },
          ]) && $(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function nt(t) {
        return (
          (nt =
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
          nt(t)
        );
      }
      function rt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, it(r.key), r));
        }
      }
      function ot(t, e, n) {
        return (
          e && rt(t.prototype, e),
          n && rt(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function it(t) {
        var e = (function (t, e) {
          if ("object" != nt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != nt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == nt(e) ? e : e + "";
      }
      var at = ot(function t(e) {
        (!(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.primitives = e.primitives),
          (this.components = e.components),
          (this.layers = e.layers));
      });
      function ut(t) {
        return (
          (ut =
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
          ut(t)
        );
      }
      function st(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ct(r.key), r));
        }
      }
      function ct(t) {
        var e = (function (t, e) {
          if ("object" != ut(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != ut(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == ut(e) ? e : e + "";
      }
      var lt = window.__CORE__,
        ft = (function () {
          return (
            (t = function t() {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.logger = lt.createLogger("Snapping ThreadRunner")),
                this.logger.LogDebug("Runned."),
                lt.bus.registerEvent("ThreadRunner:snappingPointsChunkReady"));
            }),
            (e = [
              {
                key: "runWorker",
                value: function () {
                  if (window.Worker)
                    try {
                      ((this.worker = new Worker(
                        new URL(n.p + n.u(47580), n.b),
                      )),
                        (this.worker.onmessage = function (t) {
                          lt.bus.emit(
                            "ThreadRunner:snappingPointsChunkReady",
                            t.data,
                          );
                        }),
                        this.logger.LogDebug("Thread started"));
                    } catch (t) {
                      this.logger.LogDebug(
                        "Can't load thread worker: ".concat(t),
                      );
                    }
                  else
                    this.logger.LogDebug(
                      "Your browser doesn't support web workers.",
                    );
                },
              },
              {
                key: "terminateThread",
                value: function () {
                  this.worker &&
                    (this.worker.terminate(),
                    this.logger.LogDebug("Thread terminated"));
                },
              },
              {
                key: "cancelSnappingProcessing",
                value: function () {
                  if (this.worker) {
                    var t = new et().setCancelled();
                    (this.worker.postMessage(t),
                      this.logger.LogDebug("Snapping cancelled"));
                  }
                },
              },
              {
                key: "processSnappingData",
                value: function (t, e) {
                  try {
                    if (this.worker) {
                      var n = new at(lt.response.metadata),
                        r = new et().setData(t, n, e);
                      this.worker.postMessage(r);
                    }
                  } catch (t) {
                    this.logger.LogError("Processing snapping data error.", t);
                  }
                },
              },
            ]),
            e && st(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      function pt(t) {
        return (
          (pt =
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
          pt(t)
        );
      }
      function yt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ht(r.key), r));
        }
      }
      function ht(t) {
        var e = (function (t, e) {
          if ("object" != pt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != pt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == pt(e) ? e : e + "";
      }
      var bt = window.__CORE__,
        gt = (function () {
          return (
            (t = function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t);
            }),
            (e = [
              {
                key: "documentIds",
                get: function () {
                  var t = bt.response.metadata;
                  return t.pcbDocuments
                    ? t.pcbDocuments.map(function (t) {
                        return t.fileName;
                      })
                    : t.pcbDocument
                      ? [t.pcbDocument.fileName]
                      : [];
                },
              },
            ]),
            null && yt(t.prototype, null),
            e && yt(t, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      function vt(t) {
        return (
          (vt =
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
          vt(t)
        );
      }
      function mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, dt(r.key), r));
        }
      }
      function dt(t) {
        var e = (function (t, e) {
          if ("object" != vt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != vt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == vt(e) ? e : e + "";
      }
      function wt(t, e, n) {
        return (
          (e = Pt(e)),
          (function (t, e) {
            if (e && ("object" == vt(e) || "function" == typeof e)) return e;
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
            St()
              ? Reflect.construct(e, n || [], Pt(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function St() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (St = function () {
          return !!t;
        })();
      }
      function Pt(t) {
        return (
          (Pt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Pt(t)
        );
      }
      function kt(t, e) {
        return (
          (kt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          kt(t, e)
        );
      }
      var jt = window.__CORE__,
        Ot = (0, window.__APP__.createModule)({
          type: "Plugin",
          description: "Snapping",
          create: function (t) {
            return new ((function (t) {
              function e() {
                var t;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  ((t = wt(this, e, [
                    {
                      name: "Snapping",
                      comment: "Snapping",
                      description: "Snapping",
                    },
                  ])).logger = window.__CORE__.createLogger("Snapping")),
                  (t.snappingManager = new K()),
                  jt.bus.on(
                    "ThreadRunner:snappingPointsChunkReady",
                    function (e) {
                      return t.snappingManager.fillStorage(e);
                    },
                  ),
                  jt.bus.on("Snapping:loaded", function () {
                    gt.documentIds.every(function (e) {
                      return t.snappingManager.isReady(e);
                    }) && t.threadRuner.terminateThread();
                  }),
                  jt.bus.on("Snapping:checkPoint", function (e) {
                    e.result = t.snappingManager.checkPoint(e.point);
                  }),
                  jt.bus.on("Snapping:setOptions", function (e) {
                    t.snappingManager.setOptions(e);
                  }),
                  jt.bus.on("Snapping:getOptions", function (e) {
                    e.options = t.snappingManager.getOptions();
                  }),
                  jt.bus.on("GraphiteEngine:createdScene2D", function (e) {
                    t.scene = e;
                  }),
                  jt.bus.on("PcbEngine:layerManagerCreated", function (e, n) {
                    t.snappingManager.init(t.scene, e, n);
                  }),
                  jt.bus.on("PcbEngine:documentChanged", function (e) {
                    (t.threadRuner ||
                      ((t.threadRuner = new ft()), t.threadRuner.runWorker()),
                      t.snappingManager.isReady(e.Id) ||
                        t.threadRuner.processSnappingData(e.renderData, e.id));
                  }),
                  jt.bus.on("BoardItemsVisibility:change", function (e) {
                    t.snappingManager.setLayers(e.flat());
                  }),
                  jt.bus.on("BoardItemsVisibility:offOnly", function (e) {
                    t.snappingManager.setLayers(e.flat());
                  }),
                  jt.bus.on("BoardItemsVisibility:onOnly", function (e) {
                    t.snappingManager.setLayerOnly(e);
                  }),
                  jt.bus.on("BoardItemsVisibility:reset", function () {
                    t.snappingManager.resetLayers();
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
                    e && kt(t, e));
                })(e, t),
                (n = e),
                (r = [
                  {
                    key: "events",
                    get: function () {
                      return [
                        "Snapping:loaded",
                        "Snapping:checkPoint",
                        "Snapping:setOptions",
                        "Snapping:getOptions",
                      ];
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      var t = this;
                      return new Promise(function (e) {
                        (t.logger.LogDebug("Setup"),
                          t.snappingManager.setup(),
                          e());
                      });
                    },
                  },
                ]) && mt(n.prototype, r),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, r;
            })(t))();
          },
        });
      jt && jt.addModule(Ot);
    },
  },
  (t) => {
    (t.O(0, [21759], () => t((t.s = 61548))), t.O());
  },
]);
