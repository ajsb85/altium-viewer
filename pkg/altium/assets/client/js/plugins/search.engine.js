"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [22322],
  {
    37567: (e, n, t) => {
      var r,
        o = window.__CORE__;
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
      function a(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, u(r.key), r));
        }
      }
      function u(e) {
        var n = (function (e, n) {
          if ("object" != i(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != i(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == i(n) ? n : n + "";
      }
      !(function (e) {
        ((e[(e.Nets = 1)] = "Nets"),
          (e[(e.Components = 2)] = "Components"),
          (e[(e.All = 3)] = "All"));
      })(r || (r = {}));
      var c = "component",
        f = "net",
        l = (function () {
          function e(n, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            ((function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.name = t),
              (this.item = n),
              (this.fit = r));
          }
          return (
            (n = e),
            (r = [
              {
                key: "createNet",
                value: function (n) {
                  return new e(
                    n,
                    f,
                    arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                  );
                },
              },
              {
                key: "createComponent",
                value: function (n) {
                  return new e(
                    n,
                    c,
                    arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                  );
                },
              },
            ]),
            (t = [
              {
                key: "isNet",
                get: function () {
                  return this.name === f;
                },
              },
              {
                key: "isComponent",
                get: function () {
                  return this.name === c;
                },
              },
            ]) && a(n.prototype, t),
            r && a(n, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, t, r;
        })(),
        s = t(49455);
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
      function y(e, n) {
        var t =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (e) {
                if ("string" == typeof e) return d(e, n);
                var t = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? d(e, n)
                      : void 0
                );
              }
            })(e)) ||
            (n && e && "number" == typeof e.length)
          ) {
            t && (e = t);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
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
            t = t.call(e);
          },
          n: function () {
            var e = t.next();
            return ((a = e.done), e);
          },
          e: function (e) {
            ((u = !0), (i = e));
          },
          f: function () {
            try {
              a || null == t.return || t.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function d(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function m(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r));
        }
      }
      function b(e, n, t) {
        return (
          n && p(e.prototype, n),
          t && p(e, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function h(e) {
        var n = (function (e, n) {
          if ("object" != v(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != v(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == v(n) ? n : n + "";
      }
      var g = (function () {
          return b(
            function e() {
              m(this, e);
            },
            null,
            [
              {
                key: "buildMap",
                value: function (e) {
                  var n = new Map(),
                    t = e.channels,
                    r = e.schDocuments;
                  if (r) {
                    var o,
                      i = y(r);
                    try {
                      var a = function () {
                        var e = o.value,
                          r = e.id,
                          i = e.fileName,
                          a = e.originalFileName;
                        if (t) {
                          var u = t
                            .filter(function (e) {
                              return e.schId === r;
                            })
                            .map(function (e) {
                              return {
                                id: (0, s.Z)(r, e.id),
                                fileName: i,
                                originalFileName: ""
                                  .concat(a, "(")
                                  .concat(e.name, ")"),
                              };
                            });
                          if (u.length > 0) {
                            var c,
                              f = y(u);
                            try {
                              for (f.s(); !(c = f.n()).done; ) {
                                var l = c.value;
                                n.set(l.id, [l]);
                              }
                            } catch (e) {
                              f.e(e);
                            } finally {
                              f.f();
                            }
                            n.set(r, u);
                          } else
                            n.set(r, [
                              { id: r, fileName: i, originalFileName: a },
                            ]);
                        } else
                          n.set(r, [
                            { id: r, fileName: i, originalFileName: a },
                          ]);
                      };
                      for (i.s(); !(o = i.n()).done; ) a();
                    } catch (e) {
                      i.e(e);
                    } finally {
                      i.f();
                    }
                  }
                  return n;
                },
              },
            ],
          );
        })(),
        w = (function () {
          return b(
            function e() {
              m(this, e);
            },
            null,
            [
              {
                key: "findById",
                value: function (e, n) {
                  var t, r;
                  return (
                    !!(null === (t = window.__CORE__.engines.PcbEngine) ||
                    void 0 === t
                      ? void 0
                      : t.enabled) &&
                      (e.pcbDocuments &&
                        (r = e.pcbDocuments.find(function (e) {
                          return e.id === n;
                        })),
                      e.pcbDocument &&
                        e.pcbDocument.id === n &&
                        (r = e.pcbDocument)),
                    r
                  );
                },
              },
            ],
          );
        })();
      function S(e) {
        return (
          (S =
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
          S(e)
        );
      }
      function j(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, I(r.key), r));
        }
      }
      function I(e) {
        var n = (function (e, n) {
          if ("object" != S(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != S(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == S(n) ? n : n + "";
      }
      var E = (function () {
        return (
          (e = function e() {
            !(function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }),
          (n = [
            {
              key: "createInstance",
              value: function (e) {
                for (
                  var n = Object.create(e.prototype),
                    t = arguments.length,
                    r = new Array(t > 1 ? t - 1 : 0),
                    o = 1;
                  o < t;
                  o++
                )
                  r[o - 1] = arguments[o];
                return (n.constructor.apply(n, r), n);
              },
            },
          ]),
          null && j(e.prototype, null),
          n && j(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n;
      })();
      function P(e) {
        return (
          (P =
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
          P(e)
        );
      }
      function C(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return k(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          A(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function A(e, n) {
        if (e) {
          if ("string" == typeof e) return k(e, n);
          var t = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? k(e, n)
                : void 0
          );
        }
      }
      function k(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function D(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, O(r.key), r));
        }
      }
      function O(e) {
        var n = (function (e, n) {
          if ("object" != P(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != P(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == P(n) ? n : n + "";
      }
      var _ = (function () {
        return (
          (e = function e(n) {
            (!(function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.searchEngines = n));
          }),
          (n = [
            {
              key: "find",
              value: function (e, n, t) {
                var r,
                  o = this;
                if (!t) return [];
                var i = [];
                if (
                  (this.searchEngines.forEach(function (r) {
                    var o = E.createInstance(r).find(e, n, t);
                    i.push(o);
                  }),
                  0 == i.length)
                )
                  return [];
                var a = i[0];
                if (1 == i.length) return a;
                for (var u = 1; u < i.length; u++) {
                  var c = i[u];
                  null == c ||
                    c.forEach(function (e) {
                      var n,
                        t = a.find(function (n) {
                          return n.document.id === e.document.id;
                        });
                      t
                        ? (n = t.objects).push.apply(n, C(e.objects))
                        : a.push(e);
                    });
                }
                var f = new Array();
                if ("pcb" === n.mode) {
                  var l =
                    null === (r = e.pcbDocument) || void 0 === r
                      ? void 0
                      : r.id;
                  (l && f.push(l),
                    n.currentDocId && f.push(n.currentDocId),
                    a.sort(function (e, n) {
                      return o.compare(e, n, ["sch", "pcb"], f);
                    }));
                } else
                  (n.currentDocId && f.push(n.currentDocId),
                    a.sort(function (e, n) {
                      return o.compare(e, n, ["pcb", "sch"], f);
                    }));
                return a;
              },
            },
            {
              key: "compare",
              value: function (e, n, t, r) {
                var o = function (e) {
                    return (
                      t.findIndex(function (n) {
                        return n === e.context;
                      }) +
                      r.findIndex(function (n) {
                        return n === e.document.id;
                      })
                    );
                  },
                  i = o(e);
                return o(n) - i;
              },
            },
          ]),
          (t = [
            {
              key: "merge",
              value: function (e, n) {
                var t,
                  r = e.reduce(function (e, n) {
                    return (
                      n.objects.forEach(function (n) {
                        e.has(n.item) || e.add(n.item);
                      }),
                      e
                    );
                  }, new Set()),
                  o = (function (e, n) {
                    var t =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!t) {
                      if (Array.isArray(e) || (t = A(e))) {
                        t && (e = t);
                        var r = 0,
                          o = function () {};
                        return {
                          s: o,
                          n: function () {
                            return r >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[r++] };
                          },
                          e: function (e) {
                            throw e;
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
                        t = t.call(e);
                      },
                      n: function () {
                        var e = t.next();
                        return ((a = e.done), e);
                      },
                      e: function (e) {
                        ((u = !0), (i = e));
                      },
                      f: function () {
                        try {
                          a || null == t.return || t.return();
                        } finally {
                          if (u) throw i;
                        }
                      },
                    };
                  })(n);
                try {
                  for (o.s(); !(t = o.n()).done; ) {
                    var i = t.value;
                    ((i.objects = i.objects.filter(function (e) {
                      return !r.has(e.item);
                    })),
                      i.objects.length && e.push(i));
                  }
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
                return e;
              },
            },
          ]),
          n && D(e.prototype, n),
          t && D(e, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n, t;
      })();
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
      function M(e, n) {
        var t =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (e) {
                if ("string" == typeof e) return T(e, n);
                var t = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? T(e, n)
                      : void 0
                );
              }
            })(e)) ||
            (n && e && "number" == typeof e.length)
          ) {
            t && (e = t);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
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
            t = t.call(e);
          },
          n: function () {
            var e = t.next();
            return ((a = e.done), e);
          },
          e: function (e) {
            ((u = !0), (i = e));
          },
          f: function () {
            try {
              a || null == t.return || t.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function T(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function N(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, U(r.key), r));
        }
      }
      function U(e) {
        var n = (function (e, n) {
          if ("object" != x(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != x(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == x(n) ? n : n + "";
      }
      var V = (function () {
        function e() {
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        return (
          (n = e),
          (t = [
            {
              key: "find",
              value: function (e, n, t) {
                if (!t) return [];
                var r = e.nets.filter(function (e) {
                  var n;
                  return (
                    e.name &&
                    e.name.toUpperCase().includes(t.toUpperCase()) &&
                    !Boolean(
                      null === (n = e.entries) || void 0 === n
                        ? void 0
                        : n.length,
                    )
                  );
                });
                return 0 == r.length
                  ? []
                  : "pcb" === n.mode
                    ? _.merge(this.findPcb(e, r), this.findSch(e, r))
                    : _.merge(this.findSch(e, r), this.findPcb(e, r));
              },
            },
            {
              key: "findSch",
              value: function (n, t) {
                var r,
                  o,
                  i,
                  a,
                  u = [],
                  c = g.buildMap(n),
                  v = M(t);
                try {
                  var y = function () {
                    var t = a.value;
                    if (!t.primitives) return 1;
                    var v,
                      y = new l(t, f),
                      d = M(
                        t.primitives.map(function (n) {
                          return e.primitivesMap.get(n);
                        }),
                      );
                    try {
                      var m = function () {
                        var e = v.value;
                        if (void 0 === e) return 0;
                        if (void 0 === e.schDocId) return 0;
                        var a =
                            null !==
                              (i =
                                null ===
                                  (o =
                                    null === (r = n.channels) || void 0 === r
                                      ? void 0
                                      : r.find(function (n) {
                                          return (
                                            n.schId === e.schDocId &&
                                            t.name.endsWith("_".concat(n.name))
                                          );
                                        })) || void 0 === o
                                  ? void 0
                                  : o.id) && void 0 !== i
                              ? i
                              : null,
                          f = (0, s.Z)(e.schDocId, a),
                          l = c.get(f);
                        if (!l) return 0;
                        var d,
                          m = M(l);
                        try {
                          var p = function () {
                            var e = d.value,
                              n = u.find(function (n) {
                                return n.document === e;
                              });
                            n
                              ? n.objects.indexOf(y) < 0 && n.objects.push(y)
                              : u.push({
                                  context: "sch",
                                  document: e,
                                  objects: [y],
                                });
                          };
                          for (m.s(); !(d = m.n()).done; ) p();
                        } catch (e) {
                          m.e(e);
                        } finally {
                          m.f();
                        }
                      };
                      for (d.s(); !(v = d.n()).done; ) m();
                    } catch (e) {
                      d.e(e);
                    } finally {
                      d.f();
                    }
                  };
                  for (v.s(); !(a = v.n()).done; ) y();
                } catch (e) {
                  v.e(e);
                } finally {
                  v.f();
                }
                return u;
              },
            },
            {
              key: "findPcb",
              value: function (n, t) {
                var r,
                  o = new Map(),
                  i = new Set(),
                  a = M(t);
                try {
                  var u = function () {
                    var t = r.value;
                    i.clear();
                    var a,
                      u = M(t.primitives);
                    try {
                      for (u.s(); !(a = u.n()).done; ) {
                        var c = a.value,
                          s = e.primitivesMap.get(c);
                        if (s && s.pcbId) {
                          var v = w.findById(n, s.pcbDocId);
                          v && (i.has(v) || i.add(v));
                        }
                      }
                    } catch (e) {
                      u.e(e);
                    } finally {
                      u.f();
                    }
                    i.forEach(function (e) {
                      var n = o.get(e);
                      n ? n.push(new l(t, f)) : o.set(e, [new l(t, f)]);
                    });
                  };
                  for (a.s(); !(r = a.n()).done; ) u();
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
                return Array.from(o.entries()).map(function (e) {
                  return { context: "pcb", document: e[0], objects: e[1] };
                });
              },
            },
          ]),
          t && N(n.prototype, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, t;
      })();
      function F(e) {
        return (
          (F =
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
          F(e)
        );
      }
      function R(e, n) {
        var t =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (e) {
                if ("string" == typeof e) return B(e, n);
                var t = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? B(e, n)
                      : void 0
                );
              }
            })(e)) ||
            (n && e && "number" == typeof e.length)
          ) {
            t && (e = t);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
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
            t = t.call(e);
          },
          n: function () {
            var e = t.next();
            return ((a = e.done), e);
          },
          e: function (e) {
            ((u = !0), (i = e));
          },
          f: function () {
            try {
              a || null == t.return || t.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function B(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function $(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, L(r.key), r));
        }
      }
      function L(e) {
        var n = (function (e, n) {
          if ("object" != F(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != F(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == F(n) ? n : n + "";
      }
      var Z = (function () {
        return (
          (e = function e() {
            !(function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }),
          (n = [
            {
              key: "find",
              value: function (e, n, t) {
                var r, o;
                if (!t) return [];
                var i =
                  null !==
                    (o =
                      null === (r = e.components) || void 0 === r
                        ? void 0
                        : r.filter(function (e) {
                            var n,
                              r,
                              o,
                              i,
                              a = t.toUpperCase();
                            return (
                              !!(
                                (null === (n = e.fullDesignator) || void 0 === n
                                  ? void 0
                                  : n.toUpperCase().includes(a)) ||
                                (null === (r = e.designator) || void 0 === r
                                  ? void 0
                                  : r.toUpperCase().includes(a)) ||
                                (null === (o = e.comment) || void 0 === o
                                  ? void 0
                                  : o.toUpperCase().includes(a))
                              ) ||
                              (!!(null === (i = e.subParts) || void 0 === i
                                ? void 0
                                : i.length) &&
                                e.subParts.find(function (e) {
                                  var n;
                                  return null === (n = e.designator) ||
                                    void 0 === n
                                    ? void 0
                                    : n.toUpperCase().includes(a);
                                }))
                            );
                          })) && void 0 !== o
                    ? o
                    : [];
                return 0 == i.length
                  ? []
                  : "pcb" === n.mode
                    ? _.merge(this.findPcb(e, i), this.findSch(e, i))
                    : _.merge(this.findSch(e, i), this.findPcb(e, i));
              },
            },
            {
              key: "findSch",
              value: function (e, n) {
                var t = [];
                n = this.prepareSch(n);
                var r,
                  o = g.buildMap(e),
                  i = R(n);
                try {
                  for (i.s(); !(r = i.n()).done; ) {
                    var a = r.value,
                      u = void 0 !== a.channel ? a.channel : null,
                      f = (0, s.Z)(a.schDocId, u),
                      v = o.get(f);
                    if (v) {
                      var y,
                        d = new l(a, c),
                        m = R(v);
                      try {
                        var p = function () {
                          var e = y.value,
                            n = t.find(function (n) {
                              return n.document === e;
                            });
                          n
                            ? n.objects.indexOf(d) < 0 && n.objects.push(d)
                            : t.push({
                                context: "sch",
                                document: e,
                                objects: [d],
                              });
                        };
                        for (m.s(); !(y = m.n()).done; ) p();
                      } catch (e) {
                        m.e(e);
                      } finally {
                        m.f();
                      }
                    }
                  }
                } catch (e) {
                  i.e(e);
                } finally {
                  i.f();
                }
                return t;
              },
            },
            {
              key: "findPcb",
              value: function (e, n) {
                var t,
                  r = new Array(),
                  o = function (e) {
                    var n,
                      t = new Array();
                    return (
                      e.pcbDocId && t.push(e.pcbDocId),
                      null === (n = e.otherPcb) ||
                        void 0 === n ||
                        n.forEach(function (e) {
                          return e.forEach(function (e) {
                            return (
                              e.pcbDocId &&
                              !t.find(function (n) {
                                return n === e.pcbDocId;
                              }) &&
                              t.push(e.pcbDocId)
                            );
                          });
                        }),
                      t
                    );
                  },
                  i = R(n);
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var a,
                      u = t.value,
                      f = new l(u, c),
                      s = R(o(u));
                    try {
                      var v = function () {
                        var n = a.value,
                          t = w.findById(e, n);
                        if (!t) return 1;
                        var o = r.find(function (e) {
                          return e.document === t;
                        });
                        o
                          ? o.objects.indexOf(f) < 0 && o.objects.push(f)
                          : r.push({
                              context: "pcb",
                              document: t,
                              objects: [f],
                            });
                      };
                      for (s.s(); !(a = s.n()).done; ) v();
                    } catch (e) {
                      s.e(e);
                    } finally {
                      s.f();
                    }
                  }
                } catch (e) {
                  i.e(e);
                } finally {
                  i.f();
                }
                return r;
              },
            },
            {
              key: "prepareSch",
              value: function (e) {
                var n,
                  t,
                  r = [],
                  o = R(
                    (e = e.filter(function (e) {
                      return e.schDocId;
                    })),
                  );
                try {
                  for (o.s(); !(t = o.n()).done; ) {
                    var i = t.value;
                    if (
                      null === (n = i.subParts) || void 0 === n
                        ? void 0
                        : n.length
                    ) {
                      var a = Object.assign({}, i);
                      r.push(a);
                      var u,
                        c = R(i.subParts);
                      try {
                        for (c.s(); !(u = c.n()).done; ) {
                          var f = u.value,
                            l = Object.assign({}, i);
                          ((l.schDocId = f.schDocId),
                            (l.fullDesignator = f.designator),
                            (l.designatorId = f.designatorId),
                            r.push(l));
                        }
                      } catch (e) {
                        c.e(e);
                      } finally {
                        c.f();
                      }
                    } else r.push(i);
                  }
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
                return r;
              },
            },
          ]),
          n && $(e.prototype, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n;
      })();
      function z(e) {
        return (
          (z =
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
          z(e)
        );
      }
      function H(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, q(r.key), r));
        }
      }
      function q(e) {
        var n = (function (e, n) {
          if ("object" != z(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != z(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == z(n) ? n : n + "";
      }
      var W = (function () {
          return (
            (e = function e() {
              var n = this;
              (!(function (e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.logger = o.createLogger("SearchEngine")),
                (this.searchEngines = new Map()),
                (this.searchContextModes = new Map()),
                (this.primitivesMap = new Map()),
                (this.onViewActivate = function (e) {
                  n.activeViewInstance = e.instance;
                }),
                (V.primitivesMap = this.primitivesMap),
                this.searchEngines.set(r.Components, Z),
                this.searchEngines.set(r.Nets, V),
                this.searchContextModes.set("SCHView", "sch"),
                this.searchContextModes.set("PCBView", "pcb"),
                this.searchContextModes.set("PCBView3D", "pcb"));
            }),
            (n = [
              {
                key: "setup",
                value: function (e) {
                  var n = this;
                  (this.logger.LogDebug("Setup"),
                    window.__APP__.eventAttachHelper.onViewActivate(
                      this.onViewActivate,
                    ));
                  var t = e.response.metadata,
                    r = function () {
                      var e,
                        r =
                          null !== (e = t.primitives) && void 0 !== e ? e : [];
                      if (n.primitivesMap.size !== r.length)
                        for (var o = n.primitivesMap.size; o < r.length; o++) {
                          var i = r[o];
                          n.primitivesMap.set(o, i);
                        }
                    };
                  return (
                    r(),
                    "complete" !== t.state && t.on("updated", r),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "name",
                get: function () {
                  return "SearchEngine";
                },
              },
              {
                key: "comment",
                get: function () {
                  return "Search handler engine";
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
                    "SearchEngine:beforeFound",
                    "SearchEngine:afterFound",
                  ];
                },
              },
              {
                key: "findObjects",
                value: function (e) {
                  var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : r.All;
                  if (!e) return [];
                  var t = new Array();
                  this.searchEngines.forEach(function (e, r) {
                    n & r && t.push(e);
                  });
                  var o = window.__CORE__.response.metadata,
                    i = this.createSearchContext(),
                    a = new _(t).find(o, i, e);
                  return this.convertToDocumentSearchResult(a, i);
                },
              },
              {
                key: "convertToDocumentSearchResult",
                value: function (e, n) {
                  if (!(null == e ? void 0 : e.length)) return [];
                  var t = function (e, n) {
                    var t,
                      r = "";
                    if (e.item)
                      if (e.name === c) {
                        var o = e.item;
                        r =
                          "pcb" === n
                            ? o.designator
                            : null !== (t = o.fullDesignator) && void 0 !== t
                              ? t
                              : o.designator;
                      } else e.name === f && (r = e.item.name);
                    return r;
                  };
                  return e.map(function (e, o) {
                    var i = e.objects.map(function (o, i) {
                      return {
                        id: i,
                        text: t(o, e.context),
                        type: o.name === f ? r.Nets : r.Components,
                        item: o.item,
                        documentId: e.document.id,
                        mode: e.context,
                        isCurrentMode: e.context === n.mode,
                      };
                    });
                    return {
                      id: o,
                      label: e.document.originalFileName,
                      items: i.filter(function (e) {
                        return e.text;
                      }),
                    };
                  });
                },
              },
              {
                key: "createSearchContext",
                value: function () {
                  var e,
                    n,
                    t,
                    r =
                      null !==
                        (t = this.searchContextModes.get(
                          null ===
                            (n =
                              null === (e = this.activeViewInstance) ||
                              void 0 === e
                                ? void 0
                                : e.metaInfo) || void 0 === n
                            ? void 0
                            : n.name,
                        )) && void 0 !== t
                        ? t
                        : "none",
                    o = null;
                  ("pcb" === r && (o = window.__CORE__.engines.PcbEngine),
                    "sch" === r && (o = window.__CORE__.engines.SchEngine));
                  try {
                    if ("none" !== r && (null == o ? void 0 : o.allDocuments)) {
                      var i = o.activeDocumentIndex;
                      i < 0 && (i = 0);
                      var a = o.allDocuments[i],
                        u = a.id;
                      return (
                        "pcb" === r
                          ? (u = a.altiumDesignerId)
                          : "sch" === r && (u = a.modelUniqueId),
                        { mode: r, currentDocId: u }
                      );
                    }
                  } catch (e) {
                    this.logger.LogError("Create search context error", e);
                  }
                  return { mode: "none", currentDocId: "" };
                },
              },
            ]),
            n && H(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, n;
        })(),
        G = {
          type: "Engine",
          name: "SearchEngine",
          description: "Presents Search engine module",
          create: function () {
            return new W();
          },
        };
      o.addModule(G);
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 37567))), e.O());
  },
]);
