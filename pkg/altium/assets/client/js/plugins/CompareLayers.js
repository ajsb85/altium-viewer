"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [61845, 74687, 11903, 318],
  {
    28256: (e, t, r) => {
      var n = window.__APP__.library.i18n.t,
        i = {
          0: "compare-different-12",
          1: "compare-added-12",
          2: "compare-removed-12",
          3: "compare-identical-12",
        },
        o = {
          0: n("viewer.plugins.CompareLayers.hintDifferent"),
          1: n("viewer.plugins.CompareLayers.hintAdded"),
          2: n("viewer.plugins.CompareLayers.hintRemoved"),
          3: n("viewer.plugins.CompareLayers.hintIdentical"),
        },
        a = {
          0: "",
          1: n("viewer.plugins.CompareLayers.statusAdded"),
          2: n("viewer.plugins.CompareLayers.statusRemoved"),
          3: n("viewer.plugins.CompareLayers.statusIdentical"),
        },
        u = r(10311);
      function c(e) {
        return (
          (c =
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
          c(e)
        );
      }
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                f(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : s(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function f(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != c(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != c(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == c(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var p = (0, window.__APP__.library.Vuex.createStore)({
          state: { sections: [], totalDiffCount: null },
          mutations: {
            setLayerGroups: function (e, t) {
              e.sections = Array.isArray(t) ? t : [];
            },
            setGroupSelect: function (e, t) {
              e.sections = e.sections.map(function (e) {
                return (
                  (e.groups = e.groups.map(function (e) {
                    return l(
                      l({}, e),
                      {},
                      {
                        isSelected: e.id === t.id,
                        items: e.items.map(function (e) {
                          return l(l({}, e), {}, { isSelected: !1 });
                        }),
                      },
                    );
                  })),
                  e
                );
              });
            },
            setItemSelect: function (e, t) {
              e.sections = e.sections.map(function (e) {
                return (
                  (e.groups = e.groups.map(function (e) {
                    return l(
                      l({}, e),
                      {},
                      {
                        isSelected: !1,
                        items: e.items.map(function (e) {
                          return l(
                            l({}, e),
                            {},
                            {
                              isSelected:
                                e.id === t.id ||
                                (null == e ? void 0 : e.groupId) === t.id,
                            },
                          );
                        }),
                      },
                    );
                  })),
                  e
                );
              });
            },
            setTotalDiffCount: function (e, t) {
              e.totalDiffCount = t;
            },
          },
        }),
        y = function (e) {
          return p.commit("setItemSelect", e);
        },
        m = function () {
          return p.state.sections;
        };
      const v = p;
      var d = { class: "app-compare-layers-panel" },
        b = r(25668);
      function g(e) {
        return (
          (g =
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
          g(e)
        );
      }
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function w(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != g(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != g(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == g(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var O = window.__CORE__,
        S = window.__APP__.library.Vuex.mapState;
      const C = {
          name: "CompareLayers",
          components: { AfsLayersSection: b.Z },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? h(Object(r), !0).forEach(function (t) {
                    w(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r),
                    )
                  : h(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t),
                      );
                    });
            }
            return e;
          })({}, S(["sections"])),
          methods: {
            onItemClick: function (e) {
              O.bus.emit("CompareLayers:primitiveSelect", e);
            },
            onGroupClick: function (e) {
              O.bus.emit("CompareLayers:groupSelect", e);
            },
            onItemOver: function (e) {
              O.bus.emit("CompareLayers:primitiveEnter", e);
            },
            onItemLeave: function (e) {
              O.bus.emit("CompareLayers:primitiveLeave", e);
            },
          },
        },
        P = (0, r(46021).Z)(C, [
          [
            "render",
            function (e, t, r, n, i, o) {
              var a = (0, u.resolveComponent)("AfsLayersSection");
              return (
                (0, u.openBlock)(),
                (0, u.createElementBlock)("div", d, [
                  ((0, u.openBlock)(!0),
                  (0, u.createElementBlock)(
                    u.Fragment,
                    null,
                    (0, u.renderList)(e.sections, function (e, t) {
                      return (
                        (0, u.openBlock)(),
                        (0, u.createBlock)(
                          a,
                          {
                            key: t + e.title,
                            section: e,
                            onClickItem: o.onItemClick,
                            onClickGroup: o.onGroupClick,
                            onOverItem: o.onItemOver,
                            onLeaveItem: o.onItemLeave,
                          },
                          null,
                          8,
                          [
                            "section",
                            "onClickItem",
                            "onClickGroup",
                            "onOverItem",
                            "onLeaveItem",
                          ],
                        )
                      );
                    }),
                    128,
                  )),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-54e6fb10"],
        ]);
      var L = r(74839),
        j = r(19997),
        _ = r(67674);
      function k(e) {
        return (
          (k =
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
          k(e)
        );
      }
      function I(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                A(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : I(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function A(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != k(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != k(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == k(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function E(e, t) {
        var r =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return M(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? M(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var o,
          a = !0,
          u = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return ((a = e.done), e);
          },
          e: function (e) {
            ((u = !0), (o = e));
          },
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var T = window.__APP__.library.i18n.t,
        G = ["Source", "Target"],
        N = function (e, t, r) {
          var n = e.reduce(function (e, t) {
              return (e[t.name] ? e[t.name].push(t) : (e[t.name] = [t]), e);
            }, {}),
            u = [],
            c = 0;
          for (var s in n) {
            var l,
              f = E(n[s]);
            try {
              for (f.s(); !(l = f.n()).done; ) {
                var p = l.value;
                if (p.groups && t) {
                  0 === p.layerStatus && (c += p.groups.length);
                  var y = B(p),
                    m = 0 === y ? x(p.groups, r) : [];
                  u.push(
                    D(
                      {
                        id: n.id || (0, L.c)(),
                        name: s,
                        items: m,
                        type: y,
                        hint: o[y],
                        icon: i[y],
                        isSelected: !1,
                        statusText: a[y],
                        hasPrimitives: t,
                      },
                      p,
                    ),
                  );
                } else
                  u.push(
                    D(
                      {
                        id: n.id || (0, L.c)(),
                        name: s,
                        items: [],
                        isSelected: !1,
                        hasPrimitives: t,
                      },
                      p,
                    ),
                  );
              }
            } catch (e) {
              f.e(e);
            } finally {
              f.f();
            }
          }
          return { items: u, count: c };
        },
        x = function (e, t) {
          return Array.isArray(e)
            ? e
                .sort(function (e, t) {
                  return e.groupNumber - t.groupNumber;
                })
                .map(function (e) {
                  var r = {};
                  return (
                    (0, _.hj)(e.x) && (0, _.hj)(e.y) && (r.text = V(e, t)),
                    (r.id = (0, L.c)()),
                    (r.isSelected = !1),
                    D(D({}, e), r)
                  );
                })
            : [];
        },
        V = function (e, t) {
          var r = "mm" === t,
            n = r ? (0, j.mB)(e.x / 1e3, 2) : (0, j.LS)(e.x / 1e3, 2),
            i = r ? (0, j.mB)(e.y / 1e3, 2) : (0, j.LS)(e.y / 1e3, 2);
          return T("viewer.plugins.CompareLayers.coordsXYUnit", {
            x: n,
            y: i,
            unit: t,
          });
        },
        B = function (e) {
          return 0 === (null == e ? void 0 : e.groups.length)
            ? 3
            : e.layerStatus;
        },
        H = r(19577);
      function R(e) {
        return (
          (R =
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
          R(e)
        );
      }
      function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function F(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Z(n.key), n));
        }
      }
      function Z(e) {
        var t = (function (e, t) {
          if ("object" != R(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != R(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == R(t) ? t : t + "";
      }
      function $(e, t, r) {
        return (
          (t = z(t)),
          (function (e, t) {
            if (t && ("object" == R(t) || "function" == typeof t)) return t;
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
            q()
              ? Reflect.construct(t, r || [], z(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function q() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (q = function () {
          return !!e;
        })();
      }
      function z(e) {
        return (
          (z = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          z(e)
        );
      }
      function X(e, t) {
        return (
          (X = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          X(e, t)
        );
      }
      var Y = window.__APP__.library.i18n.t,
        J = window.__APP__.createModule,
        K = window.__CORE__,
        Q = window.__APP__.analytics,
        W = "true" === (0, _.kD)("data-comparison-outside-control", "false"),
        ee = J({
          type: "Plugin",
          description: "Compare Layers",
          create: function (e) {
            var t = (function (e) {
              function t() {
                var e;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  ((e = $(this, t, [
                    {
                      name: "CompareLayers",
                      displayName: Y(
                        "viewer.plugins.CompareLayers.displayName",
                      ),
                      comment: "Layers",
                      description: "Layers",
                      owner:
                        "GerberCompareView,GerberCompareSourceView,GerberCompareTargetView",
                      view: {
                        type: "sidebar",
                        title: Y("viewer.plugins.CompareLayers.title"),
                        config: { size: "sm" },
                        isHidden: !0,
                      },
                    },
                  ])).isHidden = !0),
                  (e.totalDiffCount = null),
                  e.initListeners(),
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
                    t && X(e, t));
                })(t, e),
                (r = t),
                (n = [
                  {
                    key: "hidden",
                    get: function () {
                      return this.isHidden;
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      return Promise.resolve();
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return [
                        "CompareLayers:groupSelect",
                        "CompareLayers:primitiveSelect",
                        "CompareLayers:primitiveEnter",
                        "CompareLayers:primitiveLeave",
                        "CompareLayers:pin",
                        "CompareLayers:unpin",
                        "CompareLayers:enablePin",
                        "CompareLayers:disablePin",
                        "CompareLayers:sendDataToParent",
                      ];
                    },
                  },
                  {
                    key: "initView",
                    value: function () {
                      var e;
                      ((this.inited = !0),
                        (this.view =
                          ((e = this.metaInfo.name),
                          (0, u.createApp)(P).use(v).mount("#".concat(e)))));
                    },
                  },
                  {
                    key: "activate",
                    value: function () {
                      (this.inited || this.initView(),
                        Q.dispatchPanelsEvent("Gerber.CompareLayers", {
                          action: "Opened",
                        }));
                    },
                  },
                  { key: "deactivate", value: function () {} },
                  {
                    key: "initListeners",
                    value: function () {
                      (this.initOnLayerManagerCreated(),
                        this.initOnPrimitiveSelect(),
                        this.initOnGroupSelect(),
                        this.initOnUnitsChange());
                    },
                  },
                  {
                    key: "initOnUnitsChange",
                    value: function () {
                      var e = this;
                      K.bus.on("HelpPanel:changeUnit", function () {
                        return e.initLayers();
                      });
                    },
                  },
                  {
                    key: "initLayers",
                    value: function (e) {
                      var t = this;
                      if (
                        (null != e &&
                          e.layerManager &&
                          (this.layerManager = e.layerManager),
                        this.layerManager)
                      ) {
                        var r = H.Z.get(),
                          n = (function (e, t, r) {
                            if (e) {
                              var n = !G.includes(t),
                                i = e.reduce(function (e, t) {
                                  return (
                                    e[t.group]
                                      ? e[t.group].push(t)
                                      : (e[t.group] = [t]),
                                    e
                                  );
                                }, {}),
                                o = [],
                                a = 0;
                              for (var u in i) {
                                var c = N(i[u], n, r);
                                (o.push({
                                  id: (0, L.c)(),
                                  title: u,
                                  groups: c.items,
                                }),
                                  (a += c.count));
                              }
                              return { sections: o, differencesCount: a };
                            }
                          })(
                            this.layerManager.layers,
                            this.layerManager.type,
                            r,
                          );
                        (this.layerManager.on("clickGroup", function (e) {
                          (y(e),
                            t.layerManager.setActiveNode(
                              0,
                              e.id.toString(),
                              !0,
                            ),
                            2 === e.type &&
                              t.layerManager.setActiveNode(0, e.id.toString()),
                            W && t.sendDataToParent({ sections: m() }));
                        }),
                          this.updateInterface(
                            n.differencesCount,
                            this.layerManager.type,
                          ));
                        var i = "";
                        (n.sections.forEach(function (e) {
                          return e.groups.forEach(function (e) {
                            ((e.isSelected =
                              e.id === t.layerManager.activeLayerId),
                              e.isSelected && (i = e.name),
                              e.items.forEach(function (r) {
                                ((r.isSelected =
                                  t.layerManager.activeNodeId &&
                                  (r.nodeId === t.layerManager.activeNodeId ||
                                    r.groupId === t.layerManager.activeNodeId)),
                                  r.isSelected && (e.isSelected = !1));
                              }));
                          });
                        }),
                          this.updateViewHint(n),
                          (this.isIdenticalFiles = n.sections.every(
                            function (e) {
                              return e.groups.every(function (e) {
                                return 3 === e.type;
                              });
                            },
                          )));
                        var o = this.getSelectedGroup(n.sections);
                        (this.checkDiffCount(o),
                          (function (e) {
                            p.commit("setLayerGroups", e);
                          })(n.sections),
                          K.bus.emit("CompareLayers:updateInterface", {
                            displayName: i,
                          }),
                          this.inited ||
                            W ||
                            (K.bus.emit("CompareLayers:updateInterface", {
                              view: { isHidden: !1 },
                            }),
                            setTimeout(function () {
                              return t.activate();
                            }, 0)),
                          W && this.sendDataToParent(n));
                      }
                    },
                  },
                  {
                    key: "initOnLayerManagerCreated",
                    value: function () {
                      var e = this;
                      K.bus.on("GerberCompareView:shown", function (t) {
                        e.initLayers(t);
                      });
                    },
                  },
                  {
                    key: "updateInterface",
                    value: function (e, t) {
                      var r = "Difference" === t;
                      (!(function (e) {
                        p.commit("setTotalDiffCount", e);
                      })(r ? e : null),
                        K.bus.emit("CompareLayers:updateInterface", {
                          view: {
                            title: r
                              ? Y(
                                  "viewer.plugins.CompareLayers.titleDifferences",
                                  { count: e },
                                )
                              : Y("viewer.plugins.CompareLayers.title"),
                          },
                          hint: Y(
                            r
                              ? "viewer.plugins.CompareLayers.hintDifferences"
                              : "viewer.plugins.CompareLayers.title",
                          ),
                        }));
                    },
                  },
                  {
                    key: "updateViewHint",
                    value: function (e) {
                      "Difference" === this.layerManager.type &&
                        null === this.totalDiffCount &&
                        ((this.totalDiffCount = e.differencesCount),
                        K.bus.emit("GerberCompareView:updateInterface", {
                          hint: Y(
                            "viewer.plugins.CompareLayers.hintDifferencesCount",
                            { count: this.totalDiffCount },
                          ),
                        }));
                    },
                  },
                  {
                    key: "initOnPrimitiveSelect",
                    value: function () {
                      var e = this;
                      (K.bus.on("CompareLayers:primitiveSelect", function (t) {
                        (t.layerName &&
                          K.bus.emit("CompareLayers:updateInterface", {
                            displayName: t.layerName,
                          }),
                          e.layerManager.setActiveNode(0, t.groupId),
                          y(t),
                          e.checkDiffCount(t),
                          W && e.sendDataToParent({ sections: m() }));
                      }),
                        K.bus.on("CompareLayers:primitiveEnter", function (t) {
                          e.layerManager.highlightNode(t.groupId);
                        }),
                        K.bus.on("CompareLayers:primitiveLeave", function () {
                          e.layerManager.highlightNode("");
                        }));
                    },
                  },
                  {
                    key: "initOnGroupSelect",
                    value: function () {
                      var e = this;
                      K.bus.on("CompareLayers:groupSelect", function (t) {
                        var r;
                        (t.name &&
                          K.bus.emit("CompareLayers:updateInterface", {
                            displayName: t.name,
                          }),
                          e.layerManager.setActiveNode(t.id, ""),
                          (r = t),
                          p.commit("setGroupSelect", r),
                          e.checkDiffCount(t),
                          W && e.sendDataToParent({ sections: m() }));
                      });
                    },
                  },
                  {
                    key: "sendDataToParent",
                    value: function (e) {
                      K.bus.emit("CompareLayers:sendDataToParent", e);
                    },
                  },
                  {
                    key: "checkDiffCount",
                    value: function (e) {
                      var t =
                        0 === this.totalDiffCount && this.isIdenticalFiles
                          ? Y(
                              "viewer.plugins.CompareLayers.noDifferencesIdentical",
                            )
                          : null != e &&
                              e.type &&
                              0 !== (null == e ? void 0 : e.type)
                            ? ""
                                .concat(null == e ? void 0 : e.statusText, " ")
                                .concat(
                                  3 === (null == e ? void 0 : e.type)
                                    ? e.name
                                    : "",
                                )
                            : null;
                      (this.snackbar ||
                        (this.snackbar = window.__APP__.snackbar(
                          document.querySelector(".app__container"),
                        )),
                        t
                          ? this.snackbar.update({ text: t }) &&
                            this.snackbar.open()
                          : this.snackbar.close());
                    },
                  },
                  {
                    key: "getSelectedGroup",
                    value: function (e) {
                      var t,
                        r = (function (e, t) {
                          var r =
                            ("undefined" != typeof Symbol &&
                              e[Symbol.iterator]) ||
                            e["@@iterator"];
                          if (!r) {
                            if (
                              Array.isArray(e) ||
                              (r = (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e) return U(e, t);
                                  var r = {}.toString.call(e).slice(8, -1);
                                  return (
                                    "Object" === r &&
                                      e.constructor &&
                                      (r = e.constructor.name),
                                    "Map" === r || "Set" === r
                                      ? Array.from(e)
                                      : "Arguments" === r ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                            r,
                                          )
                                        ? U(e, t)
                                        : void 0
                                  );
                                }
                              })(e)) ||
                              (t && e && "number" == typeof e.length)
                            ) {
                              r && (e = r);
                              var n = 0,
                                i = function () {};
                              return {
                                s: i,
                                n: function () {
                                  return n >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[n++] };
                                },
                                e: function (e) {
                                  throw e;
                                },
                                f: i,
                              };
                            }
                            throw new TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                          }
                          var o,
                            a = !0,
                            u = !1;
                          return {
                            s: function () {
                              r = r.call(e);
                            },
                            n: function () {
                              var e = r.next();
                              return ((a = e.done), e);
                            },
                            e: function (e) {
                              ((u = !0), (o = e));
                            },
                            f: function () {
                              try {
                                a || null == r.return || r.return();
                              } finally {
                                if (u) throw o;
                              }
                            },
                          };
                        })(e);
                      try {
                        for (r.s(); !(t = r.n()).done; ) {
                          var n = t.value.groups.find(function (e) {
                            return e.isSelected;
                          });
                          if (n) return n;
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                      return null;
                    },
                  },
                ]),
                n && F(r.prototype, n),
                Object.defineProperty(r, "prototype", { writable: !1 }),
                r
              );
              var r, n;
            })(e);
            return new t();
          },
        });
      K && K.addModule(ee);
    },
    10311: (e) => {
      e.exports = Vue;
    },
  },
  (e) => {
    (e.O(0, [66951, 21759], () => e((e.s = 28256))), e.O());
  },
]);
