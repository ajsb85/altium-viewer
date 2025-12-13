/*! For license information please see fabrication.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [80954],
  {
    98213: (t, e, r) => {
      var n = r(22021),
        o = r(66675);
      function i(t) {
        return (
          (i =
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
          i(t)
        );
      }
      function a(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return u(t);
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
              if ("string" == typeof t) return u(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? u(t, e)
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
      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function c(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, s(n.key), n));
        }
      }
      function s(t) {
        var e = (function (t, e) {
          if ("object" != i(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != i(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == i(e) ? e : e + "";
      }
      function l(t, e, r) {
        return (
          (e = h(e)),
          (function (t, e) {
            if (e && ("object" == i(e) || "function" == typeof e)) return e;
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
            f()
              ? Reflect.construct(e, r || [], h(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function f() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (f = function () {
          return !!t;
        })();
      }
      function h(t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          h(t)
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
      var y = (function (t) {
          function e(t) {
            var r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((r = l(this, e))._viewType = "none"),
              (r.layersData = new Array()),
              (r.lastOnceLayer = null),
              (r.currentLayerState = null),
              (r.getSortedLayers = function () {
                return r.getGroupedLayers().reduce(function (t, e) {
                  return t.concat(e);
                }, []);
              }),
              (r.onChanged = function () {
                r._storedLayers = r.toStoredLayers();
              }),
              (r._scene = t),
              r.on("changed", r.onChanged),
              r
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
            (r = e),
            (n = [
              {
                key: "storedLayers",
                get: function () {
                  return this._storedLayers;
                },
              },
              {
                key: "viewType",
                get: function () {
                  return this._viewType;
                },
              },
              {
                key: "scene",
                get: function () {
                  return this._scene;
                },
              },
              {
                key: "dispose",
                value: function () {
                  (this.off("changed", this.onChanged),
                    (this._scene = null),
                    (this.lastOnceLayer = null),
                    (this.currentLayerState = null),
                    this.layers.splice(0, this.layers.length),
                    this.layersData.splice(0, this.layersData.length));
                },
              },
              {
                key: "getLayers",
                value: function () {
                  return arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    !arguments[0]
                    ? ((this.layers = this.layersData.map(function (t) {
                        return Object.assign({}, t);
                      })),
                      this.layers)
                    : this.layers;
                },
              },
              {
                key: "setLayers",
                value: function (t) {
                  ((this.scene.renderOptions = this.createRenderOptions(t)),
                    (this.layers = t),
                    this.emit("changed", this));
                },
              },
              {
                key: "resetLayers",
                value: function () {
                  ((this.layers = this.getLayers(!1)),
                    (this._viewType = "none"),
                    this.setLayers(this.layers));
                },
              },
              {
                key: "getGroupedLayers",
                value: function () {
                  var t = [],
                    e = this.getLayers(),
                    r = e
                      .map(function (t) {
                        return t;
                      })
                      .sort(function (t, e) {
                        return t.groupDisplayIndex - e.groupDisplayIndex;
                      })
                      .map(function (t) {
                        return t.layerGroup;
                      });
                  return (
                    a(new Set(r)).forEach(function (r) {
                      var n = e
                        .filter(function (t) {
                          return t.layerGroup === r;
                        })
                        .sort(function (t, e) {
                          return t.displayIndex - e.displayIndex;
                        });
                      n.length > 0 && t.push(n);
                    }),
                    t
                  );
                },
              },
              {
                key: "setTopView",
                value: function (t) {
                  "top" !== this._viewType &&
                    (this.layers.forEach(function (t) {
                      return (t.isVisible =
                        t.isTop || t.isDrills || t.isKeepOut);
                    }),
                    (this._viewType = "top"),
                    t || this.setLayers(this.layers));
                },
              },
              {
                key: "setBottomView",
                value: function (t) {
                  "bottom" !== this._viewType &&
                    (this.layers.forEach(function (t) {
                      return (t.isVisible =
                        t.isBottom || t.isDrills || t.isKeepOut);
                    }),
                    (this._viewType = "bottom"),
                    t || this.setLayers(this.layers));
                },
              },
              {
                key: "setOnceLayer",
                value: function (t) {
                  var e;
                  if ("string" == typeof t) {
                    if (
                      !(e = this.layers.find(function (e) {
                        return e.name === t;
                      }))
                    )
                      return;
                    this.currentLayerState ||
                      (this.currentLayerState = this.layers.map(function (t) {
                        return Object.assign({}, t);
                      }));
                  } else e = t;
                  if (e) {
                    this.lastOnceLayer = e;
                    var r = this.lastOnceLayer.name;
                    (this.layers.forEach(function (t) {
                      return (t.isVisible = t.name == r);
                    }),
                      this.setLayers(this.layers));
                  }
                },
              },
              {
                key: "nextOnceLayer",
                value: function () {
                  var t,
                    e = this.getSortedLayers().slice();
                  if (this.lastOnceLayer && this.currentLayerState) {
                    var r = this.lastOnceLayer.name,
                      n = e.findIndex(function (t) {
                        return t.name == r;
                      });
                    (n == e.length - 1 && (n = -1),
                      (t = e.find(function (t, e) {
                        return e > n;
                      })));
                  } else
                    ((this.currentLayerState = this.layers.map(function (t) {
                      return Object.assign({}, t);
                    })),
                      (t = e.find(function (t) {
                        return t.isVisible;
                      })));
                  return (t && this.setOnceLayer(t), t);
                },
              },
              {
                key: "prevOnceLayer",
                value: function () {
                  var t,
                    e = this.getSortedLayers().slice().reverse();
                  if (this.lastOnceLayer && this.currentLayerState) {
                    var r = e.indexOf(this.lastOnceLayer);
                    (r == e.length - 1 && (r = -1),
                      (t = e.find(function (t, e) {
                        return e > r;
                      })));
                  } else
                    ((this.currentLayerState = this.layers.map(function (t) {
                      return Object.assign({}, t);
                    })),
                      (t = e.find(function (t) {
                        return t.isVisible;
                      })));
                  return (t && this.setOnceLayer(t), t);
                },
              },
              {
                key: "resetOnceLayer",
                value: function () {
                  ((this.lastOnceLayer = null),
                    this.currentLayerState &&
                      ((this.layers = this.currentLayerState),
                      (this.currentLayerState = null),
                      this.setLayers(this.layers)));
                },
              },
              {
                key: "createRenderOptions",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                  return (null != t ? t : this.layers)
                    .filter(function (t) {
                      return t.isVisible;
                    })
                    .sort(function (t, e) {
                      return t.stackIndex - e.stackIndex;
                    })
                    .map(function (t) {
                      return { layer: t.id };
                    });
                },
              },
              {
                key: "withLayerData",
                value: function (t) {
                  var e = this;
                  if (void 0 !== t)
                    for (
                      var r = function () {
                          var r = t[n],
                            o = r.boardName,
                            i = r.color,
                            a = r.displayIndex,
                            u = r.groupDisplayIndex,
                            c = r.groupIndex,
                            s = r.id,
                            l = r.isBottom,
                            f = r.isDrillMap,
                            h = r.isKeepOut,
                            p = r.isTop,
                            y = r.layerGroup,
                            d = r.name,
                            v = e.scene.layers.find(function (t) {
                              return t.name === o;
                            });
                          if (v) {
                            var m = {
                              id: v.index,
                              metaId: s,
                              name: d,
                              searchName: v.name,
                              color: i,
                              layerGroup: y,
                              groupIndex: c,
                              groupDisplayIndex: u,
                              displayIndex: a,
                              stackIndex: t.length - n,
                              isVisible: !0,
                              isTop: p,
                              isBottom: l,
                              isDrills: f,
                              isKeepOut: h,
                            };
                            e.layersData.push(m);
                          }
                        },
                        n = 0;
                      n < t.length;
                      n++
                    )
                      r();
                  return this;
                },
              },
              {
                key: "restore",
                value: function (t) {
                  this.layers = this.layersData.map(function (t) {
                    return Object.assign({}, t);
                  });
                  var e = this.fromStoredLayers(t);
                  if (void 0 !== e.viewType)
                    switch (e.viewType) {
                      case "top":
                        this.setTopView(!0);
                        break;
                      case "bottom":
                        this.setBottomView(!0);
                        break;
                      default:
                        if (void 0 !== e.visibleLayers) {
                          var r = e.visibleLayers;
                          this.layers.forEach(function (t) {
                            return (t.isVisible = r.includes(t.id));
                          });
                        }
                    }
                  return (this.setLayers(this.layers), this);
                },
              },
              {
                key: "toStoredLayers",
                value: function () {
                  var t = new Array(),
                    e = this.layers
                      .filter(function (t) {
                        return t.isVisible;
                      })
                      .map(function (t) {
                        return t.id;
                      });
                  return (
                    t.push(e.length),
                    t.push.apply(t, a(e)),
                    t.push(
                      "top" === this._viewType
                        ? 1
                        : "bottom" === this._viewType
                          ? 2
                          : 0,
                    ),
                    t
                  );
                },
              },
              {
                key: "fromStoredLayers",
                value: function (t) {
                  if (void 0 !== t && t.length > 1 && t.length === t[0] + 2) {
                    var e = t.splice(0, 1)[0],
                      r = t.splice(0, e),
                      n = t.splice(0, 1)[0];
                    return {
                      visibleLayers: r,
                      viewType: 1 === n ? "top" : 2 === n ? "bottom" : "none",
                    };
                  }
                  return {};
                },
              },
            ]),
            (o = [
              {
                key: "create",
                value: function (t, r, n) {
                  return new e(t).withLayerData(r).restore(n);
                },
              },
            ]),
            n && c(r.prototype, n),
            o && c(r, o),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n, o;
        })(o.Z),
        d = r(41497);
      function v(t) {
        return (
          (v =
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
          v(t)
        );
      }
      function m(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, b(n.key), n));
        }
      }
      function b(t) {
        var e = (function (t, e) {
          if ("object" != v(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != v(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == v(e) ? e : e + "";
      }
      function w(t, e, r) {
        return (
          (e = E(e)),
          (function (t, e) {
            if (e && ("object" == v(e) || "function" == typeof e)) return e;
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
            g()
              ? Reflect.construct(e, r || [], E(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function g() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (g = function () {
          return !!t;
        })();
      }
      function O() {
        return (
          (O =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, r) {
                  var n = (function (t, e) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(t, e) && null !== (t = E(t));
                    );
                    return t;
                  })(t, e);
                  if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, e);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? t : r)
                      : o.value;
                  }
                }),
          O.apply(null, arguments)
        );
      }
      function E(t) {
        return (
          (E = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          E(t)
        );
      }
      function _(t, e) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          _(t, e)
        );
      }
      var L = (function (t) {
        function e(t, r, n, o, i) {
          var a;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((a = w(this, e, [o, i])).id = t),
            (a.branches = r),
            (a.dispatch = a.dispatch.bind(a)),
            a.bindUiEvents(n),
            a
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
              e && _(t, e));
          })(e, t),
          (r = e),
          (n = [
            {
              key: "bindUiEvents",
              value: function (t) {
                var r = this,
                  n = t.parentElement;
                null !== n &&
                  (e.OWN_UI_EVENTS_TO_LISTEN.forEach(function (t) {
                    return n.addEventListener(t, r.dispatch);
                  }),
                  e.GLOBAL_UI_EVENTS_TO_LISTEN.forEach(function (t) {
                    return document.addEventListener(t, r.dispatch);
                  }));
              },
            },
            {
              key: "dispatch",
              value: function (t) {
                return (
                  t instanceof Event &&
                    !(t instanceof KeyboardEvent) &&
                    t.preventDefault(),
                  this.branches.HEAD === this.id &&
                    O(E(e.prototype), "dispatch", this).call(this, t)
                );
              },
            },
          ]) && m(r.prototype, n),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n;
      })(d.Z);
      ((L.OWN_UI_EVENTS_TO_LISTEN = [
        "mousedown",
        "mouseup",
        "mousemove",
        "wheel",
        "touchstart",
        "touchmove",
        "touchend",
        "mouseleave",
        "mouseenter",
        "click",
        "dblclick",
      ]),
        (L.GLOBAL_UI_EVENTS_TO_LISTEN = ["keydown", "keyup"]));
      const P = L;
      var S = {};
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
      function k(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, x(n.key), n));
        }
      }
      function x(t) {
        var e = (function (t, e) {
          if ("object" != T(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != T(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == T(e) ? e : e + "";
      }
      function j(t, e, r) {
        return (
          (e = N(e)),
          (function (t, e) {
            if (e && ("object" == T(e) || "function" == typeof e)) return e;
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
            D()
              ? Reflect.construct(e, r || [], N(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function D() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (D = function () {
          return !!t;
        })();
      }
      function N(t) {
        return (
          (N = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          N(t)
        );
      }
      function C(t, e) {
        return (
          (C = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          C(t, e)
        );
      }
      ((S.IDLE = [
        {
          to: "MOUSE_MOVES",
          where: function (t) {
            return ["mousemove" === t.type];
          },
        },
        {
          to: "ZOOM",
          where: function (t) {
            return ["wheel" === t.type];
          },
        },
        {
          to: "R_BUTTON_IS_PRESS",
          where: function (t) {
            return ["mousedown" === t.type, 2 === t.button];
          },
        },
        {
          to: "L_BUTTON_IS_PRESS",
          where: function (t) {
            return ["mousedown" === t.type, 0 === t.button];
          },
        },
        {
          to: "PAN_START",
          where: function (t) {
            return ["mouseenter" === t.type, 2 === t.buttons];
          },
        },
        {
          to: "OPTIONAL_PAN_START",
          where: function (t) {
            return ["mouseenter" === t.type, 1 === t.buttons];
          },
        },
        {
          to: "TOUCH_START",
          where: function (t) {
            return ["touchstart" === t.type];
          },
        },
      ]),
        (S.MOUSE_MOVES = S.IDLE),
        (S.R_BUTTON_IS_PRESS = [
          {
            to: "PAN_START",
            where: function (t) {
              return ["mousemove" === t.type, 0 === t.button];
            },
          },
          {
            to: "OPTIONAL_CLICK",
            where: function (t) {
              return ["mouseup" === t.type];
            },
          },
          {
            to: "IDLE",
            where: function (t) {
              return ["mousemove" !== t.type, 2 === t.button];
            },
          },
        ]),
        (S.L_BUTTON_IS_PRESS = [
          {
            to: "OPTIONAL_PAN_START",
            where: function (t) {
              return ["mousemove" === t.type, 0 === t.button];
            },
          },
          {
            to: "CLICK",
            where: function (t) {
              return ["mouseup" === t.type];
            },
          },
          {
            to: "IDLE",
            where: function (t) {
              return ["mouseup" === t.type, 0 === t.button];
            },
          },
        ]),
        (S.PAN = [
          {
            to: "PAN",
            where: function (t) {
              return ["mousemove" === t.type];
            },
          },
          {
            to: "PAN_END",
            where: function (t) {
              return ["mouseup" === t.type, 2 === t.button];
            },
          },
          {
            to: "PAN_END",
            where: function (t) {
              return ["mouseleave" === t.type];
            },
          },
        ]),
        (S.OPTIONAL_PAN = [
          {
            to: "OPTIONAL_PAN",
            where: function (t) {
              return ["mousemove" === t.type];
            },
          },
          {
            to: "OPTIONAL_PAN_END",
            where: function (t) {
              return ["mouseup" === t.type, 0 === t.button];
            },
          },
          {
            to: "OPTIONAL_PAN_END",
            where: function (t) {
              return ["mouseleave" === t.type];
            },
          },
        ]),
        (S.PAN_START = S.PAN),
        (S.PAN_END = S.IDLE),
        (S.OPTIONAL_PAN_START = S.OPTIONAL_PAN),
        (S.OPTIONAL_PAN_END = S.IDLE),
        (S.ZOOM = S.IDLE),
        (S.CLICK = S.IDLE),
        (S.OPTIONAL_CLICK = S.IDLE),
        (S.TOUCH_END = S.IDLE),
        (S.TOUCH_START = [
          {
            to: "TOUCH_START",
            where: function (t) {
              return ["touchstart" === t.type];
            },
          },
          {
            to: "TOUCH_MOVE",
            where: function (t) {
              return ["touchmove" === t.type];
            },
          },
          {
            to: "TOUCH_END",
            where: function (t) {
              return ["touchend" === t.type];
            },
          },
        ]),
        (S.TOUCH_MOVE = [
          {
            to: "TOUCH_START",
            where: function (t) {
              return ["touchstart" === t.type];
            },
          },
          {
            to: "TOUCH_MOVE",
            where: function (t) {
              return ["touchmove" === t.type];
            },
          },
          {
            to: "TOUCH_END",
            where: function (t) {
              return ["touchend" === t.type];
            },
          },
        ]));
      var I = (function (t) {
        function e(t, r) {
          var n;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((n = j(this, e)).logger = t),
            (n.scene = r),
            (n.paint = function () {
              var t;
              try {
                n.scene.render();
              } catch (e) {
                if (
                  n.lastPaintError === e ||
                  (null === (t = n.lastPaintError) || void 0 === t
                    ? void 0
                    : t.message) === e.message
                )
                  return;
                ((n.lastPaintError = e),
                  n.logger.LogError("Render scene error.", e));
              }
            }),
            (n.resize = function (t, e) {
              0 === t ||
                0 === e ||
                Number.isNaN(t) ||
                Number.isNaN(e) ||
                n.scene.resize(t, e);
            }),
            (n.zoom = function (t, e, r) {
              (n.scene.cameraController.MouseMove(e, r),
                n.scene.cameraController.MouseWheel(Math.sign(-t)),
                n.emit("changed", n));
            }),
            (n.pan = function (t, e, r) {
              switch (t) {
                case "start":
                  (n.scene.cameraController.MouseMove(e, r),
                    n.scene.cameraController.MouseDown(2, e, r));
                  break;
                case "move":
                  n.scene.cameraController.MouseMove(e, r);
                  break;
                case "end":
                  n.scene.cameraController.MouseUp(2, e, r);
              }
              n.emit("changed", n);
            }),
            (n.onChanged = function () {
              var t = n.scene.viewport.GetCenter(),
                e = n.scene.viewport.GetZoom();
              (void 0 === n._position && (n._position = []),
                (n.storedPosition[0] = t[0]),
                (n.storedPosition[1] = t[1]),
                (n.storedPosition[2] = e));
            }),
            window.__APP__.onThemeChanged(function (t, e) {
              var r = t.array;
              r &&
                ((n.scene.background = [r[0] / 255, r[1] / 255, r[2] / 255, 1]),
                n.paint());
            }),
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
              e && C(t, e));
          })(e, t),
          (r = e),
          (o = [
            {
              key: "createRenderer",
              value: function (t, r, n) {
                return new e(
                  t,
                  window.GraphiteResolverInstance.loadScenes(r, 2).scene2d,
                ).restore(n);
              },
            },
          ]),
          (n = [
            {
              key: "storedPosition",
              get: function () {
                return this._position;
              },
            },
            {
              key: "dispose",
              value: function () {
                (this.off("changed", this.onChanged),
                  this.scene.clear(),
                  this.scene.dispose());
              },
            },
            {
              key: "reset",
              value: function () {
                (this.scene.zoomToFit(), this.emit("changed"));
              },
            },
            {
              key: "restore",
              value: function (t) {
                return (
                  void 0 === t
                    ? this.scene.zoomToFit()
                    : (this.scene.viewport.SetCenter(t.slice(0, 2)),
                      this.scene.viewport.SetZoom(t[2])),
                  this.updatePosition(),
                  this
                );
              },
            },
            {
              key: "updatePosition",
              value: function () {
                var t = this.scene.viewport.GetCenter(),
                  e = this.scene.viewport.GetZoom();
                (void 0 === this._position && (this._position = []),
                  (this.storedPosition[0] = t[0]),
                  (this.storedPosition[1] = t[1]),
                  (this.storedPosition[2] = e));
              },
            },
          ]) && k(r.prototype, n),
          o && k(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(o.Z);
      I.cnt = 0;
      const A = I;
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
      function M() {
        M = function () {
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
          c = i.toStringTag || "@@toStringTag";
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
        function l(t, e, r, n) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            u = new j(n || []);
          return (o(a, "_invoke", { value: S(t, r, u) }), a);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          d = "completed",
          v = {};
        function m() {}
        function b() {}
        function w() {}
        var g = {};
        s(g, a, function () {
          return this;
        });
        var O = Object.getPrototypeOf,
          E = O && O(O(D([])));
        E && E !== r && n.call(E, a) && (g = E);
        var _ = (w.prototype = m.prototype = Object.create(g));
        function L(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function r(o, i, a, u) {
            var c = f(t[o], t, i);
            if ("throw" !== c.type) {
              var s = c.arg,
                l = s.value;
              return l && "object" == R(l) && n.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      r("next", t, a, u);
                    },
                    function (t) {
                      r("throw", t, a, u);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return r("throw", t, a, u);
                    },
                  );
            }
            u(c.arg);
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
        function S(e, r, n) {
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
                var c = T(u, n);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = d), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var s = f(e, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? d : p), s.arg === v)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = d), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function T(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                T(e, r),
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
        function x(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function j(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0));
        }
        function D(e) {
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
          throw new TypeError(R(e) + " is not iterable");
        }
        return (
          (b.prototype = w),
          o(_, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: b, configurable: !0 }),
          (b.displayName = s(w, c, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), s(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(_)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          L(P.prototype),
          s(P.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new P(l(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          L(_),
          s(_, c, "Generator"),
          s(_, a, function () {
            return this;
          }),
          s(_, "toString", function () {
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
          (e.values = D),
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
                this.tryEntries.forEach(x),
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
                  var c = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
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
                  return (this.complete(r.completion, r.afterLoc), x(r), v);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    x(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: D(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function G(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function F(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, U(n.key), n));
        }
      }
      function U(t) {
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
      function z(t, e, r) {
        return (
          (e = V(e)),
          (function (t, e) {
            if (e && ("object" == R(e) || "function" == typeof e)) return e;
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
            B()
              ? Reflect.construct(e, r || [], V(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function B() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (B = function () {
          return !!t;
        })();
      }
      function H() {
        return (
          (H =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, r) {
                  var n = (function (t, e) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(t, e) && null !== (t = V(t));
                    );
                    return t;
                  })(t, e);
                  if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, e);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? t : r)
                      : o.value;
                  }
                }),
          H.apply(null, arguments)
        );
      }
      function V(t) {
        return (
          (V = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          V(t)
        );
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
      var Z = ["pan", "optionalPan", "zoom", "click"],
        Y = (function (t) {
          function e(t) {
            var r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((r = z(this, e))._metadata = t),
              (r.storedStateInfo = {}),
              (r._state = "None"),
              (r._renderer = null),
              (r._layerManager = null),
              (r.unbindFromControl = function () {}),
              (r.errorState = null),
              (r.toString = function () {
                return "".concat(r.typeDisplayName, ":").concat(r.name);
              }),
              (r.onPan = function (t, e, n) {
                return (r.emit("pan", t, e, n), !0);
              }),
              (r.onOptionalPan = function (t, e, n) {
                return (r.emit("optionalPan", t, e, n), !0);
              }),
              (r.onZoom = function (t, e, n) {
                return (r.emit("zoom", t, e, n), !0);
              }),
              (r.onClick = function (t, e) {
                return (r.emit("click", t, e), !0);
              }),
              (r.onOptionalClick = function (t, e) {
                return (r.emit("optionalClick", t, e), !0);
              }),
              (r.onPaint = function () {
                r.emit("paint");
              }),
              (r._state = "None"),
              (r.logger = window.__CORE__.createLogger("FabricationDocument")),
              r.on("pan", function (t, e, n) {
                var o;
                return null === (o = r._renderer) || void 0 === o
                  ? void 0
                  : o.pan(t, e, n);
              }),
              r.on("optionalPan", function (t, e, n) {
                var o;
                return null === (o = r._renderer) || void 0 === o
                  ? void 0
                  : o.pan(t, e, n);
              }),
              r.on("zoom", function (t, e, n) {
                var o;
                return null === (o = r._renderer) || void 0 === o
                  ? void 0
                  : o.zoom(t, e, n);
              }),
              r.on("paint", function () {
                var t;
                return null === (t = r._renderer) || void 0 === t
                  ? void 0
                  : t.paint();
              }),
              r
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
                e && q(t, e));
            })(e, t),
            (r = e),
            (n = [
              {
                key: "id",
                get: function () {
                  return this._metadata.id;
                },
              },
              {
                key: "name",
                get: function () {
                  return this._metadata.name;
                },
              },
              {
                key: "type",
                get: function () {
                  return this._metadata.type;
                },
              },
              {
                key: "state",
                get: function () {
                  return this._state;
                },
              },
              {
                key: "layerManager",
                get: function () {
                  if (null === this._layerManager)
                    throw new Error("Layer manager has not created.");
                  return this._layerManager;
                },
              },
              {
                key: "preview",
                get: function () {
                  return this._metadata.preview();
                },
              },
              {
                key: "fileData",
                get: function () {
                  return this._metadata.fileData;
                },
              },
              {
                key: "typeDisplayName",
                get: function () {
                  switch (this.type) {
                    case "Gerber":
                      return "Gerber";
                    case "OdbPlusPlus":
                      return "ODB++";
                    default:
                      return "Fabrication";
                  }
                },
              },
              {
                key: "emit",
                value: function (t) {
                  for (
                    var r,
                      n = arguments.length,
                      o = new Array(n > 1 ? n - 1 : 0),
                      i = 1;
                    i < n;
                    i++
                  )
                    o[i - 1] = arguments[i];
                  if (!Z.includes(t))
                    return (r = H(V(e.prototype), "emit", this)).call.apply(
                      r,
                      [this, t].concat(o),
                    );
                  if (t in this.listeners) {
                    var a,
                      u = (function (t, e) {
                        var r =
                          ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                        if (!r) {
                          if (
                            Array.isArray(t) ||
                            (r = (function (t, e) {
                              if (t) {
                                if ("string" == typeof t) return G(t, e);
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
                                      ? G(t, e)
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
                      })(this.listeners[t].slice().reverse());
                    try {
                      for (
                        u.s();
                        !(a = u.n()).done && !a.value.apply(void 0, o);
                      );
                    } catch (t) {
                      u.e(t);
                    } finally {
                      u.f();
                    }
                    return !0;
                  }
                  return !1;
                },
              },
              {
                key: "load",
                value: function () {
                  return (
                    (t = this),
                    (e = void 0),
                    (r = void 0),
                    (n = M().mark(function t() {
                      var e, r, n;
                      return M().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((t.prev = 0),
                                  (e = window.__CORE__.response.storage),
                                  void 0 !== this.fileData)
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                throw new Error(
                                  "No document graphics to load.",
                                );
                              case 4:
                                return (
                                  (t.next = 6),
                                  e.documentLoader.loadDocument(
                                    this.fileData.originalName,
                                    this.fileData.fileType,
                                  )
                                );
                              case 6:
                                return (
                                  (r = t.sent),
                                  (t.next = 9),
                                  r.arrayBuffer()
                                );
                              case 9:
                                if ((n = t.sent)) {
                                  t.next = 12;
                                  break;
                                }
                                throw new Error(
                                  "No document graphics to display.",
                                );
                              case 12:
                                ((this.renderData = n),
                                  (this._state = "Loaded"),
                                  (t.next = 20));
                                break;
                              case 16:
                                ((t.prev = 16),
                                  (t.t0 = t.catch(0)),
                                  this.logger.LogError(
                                    "Load document [".concat(
                                      document,
                                      "] error.",
                                    ),
                                    t.t0,
                                  ),
                                  (this.errorState = t.t0));
                              case 20:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 16]],
                      );
                    })),
                    new (r || (r = Promise))(function (o, i) {
                      function a(t) {
                        try {
                          c(n.next(t));
                        } catch (t) {
                          i(t);
                        }
                      }
                      function u(t) {
                        try {
                          c(n.throw(t));
                        } catch (t) {
                          i(t);
                        }
                      }
                      function c(t) {
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
                      c((n = n.apply(t, e || [])).next());
                    })
                  );
                  var t, e, r, n;
                },
              },
              {
                key: "render",
                value: function (t) {
                  try {
                    ((this._renderer = A.createRenderer(
                      this.logger,
                      this.renderData,
                      this.storedStateInfo.position,
                    )),
                      this.bindToControl(t, this._renderer),
                      (this._layerManager = y.create(
                        this._renderer.scene,
                        this._metadata.layers,
                        this.storedStateInfo.layers,
                      )),
                      (this._state = "Rendered"));
                  } catch (t) {
                    (this.logger.LogError(
                      "Render document [".concat(document, "] error."),
                      t,
                    ),
                      (this.errorState = t));
                  }
                },
              },
              {
                key: "resetRender",
                value: function () {
                  var t;
                  null === (t = this._renderer) || void 0 === t || t.reset();
                },
              },
              {
                key: "clearRender",
                value: function () {
                  "Rendered" === this.state &&
                    ((this._state = "Loaded"),
                    this.unbindFromControl(),
                    (this.unbindFromControl = function () {}),
                    null !== this._layerManager &&
                      ((this.storedStateInfo.layers =
                        this._layerManager.storedLayers),
                      this._layerManager.dispose(),
                      (this._layerManager = null)),
                    null !== this._renderer &&
                      ((this.storedStateInfo.position =
                        this._renderer.storedPosition),
                      this._renderer.dispose(),
                      (this._renderer = null)));
                },
              },
              {
                key: "createOverlayScene",
                value: function (t, e, r) {
                  if (!this._renderer)
                    throw new Error(
                      "Fabrication document renderer has not created",
                    );
                  return this._renderer.scene.createOverlayScene(t, e, r);
                },
              },
              {
                key: "bindToControl",
                value: function (t, e) {
                  var r = this,
                    n = t.size,
                    o = n.width,
                    i = n.height;
                  (e.resize(o, i),
                    t.on("paint", this.onPaint),
                    t.on("sizeChanged", e.resize),
                    t.on("zoom", this.onZoom),
                    t.on("pan", this.onPan),
                    t.on("optionalPan", this.onOptionalPan),
                    t.on("click", this.onClick),
                    t.on("optionalClick", this.onOptionalClick),
                    (this.unbindFromControl = function () {
                      (t.off("paint", r.onPaint),
                        t.off("sizeChanged", e.resize),
                        t.off("zoom", r.onZoom),
                        t.off("pan", r.onPan),
                        t.off("optionalPan", r.onOptionalPan),
                        t.off("click", r.onClick),
                        t.off("optionalClick", r.onOptionalClick));
                    }));
                },
              },
            ]),
            n && F(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(o.Z);
      function K(t) {
        return (
          (K =
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
          K(t)
        );
      }
      function X() {
        X = function () {
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
          c = i.toStringTag || "@@toStringTag";
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
        function l(t, e, r, n) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            u = new j(n || []);
          return (o(a, "_invoke", { value: S(t, r, u) }), a);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          d = "completed",
          v = {};
        function m() {}
        function b() {}
        function w() {}
        var g = {};
        s(g, a, function () {
          return this;
        });
        var O = Object.getPrototypeOf,
          E = O && O(O(D([])));
        E && E !== r && n.call(E, a) && (g = E);
        var _ = (w.prototype = m.prototype = Object.create(g));
        function L(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function r(o, i, a, u) {
            var c = f(t[o], t, i);
            if ("throw" !== c.type) {
              var s = c.arg,
                l = s.value;
              return l && "object" == K(l) && n.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      r("next", t, a, u);
                    },
                    function (t) {
                      r("throw", t, a, u);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return r("throw", t, a, u);
                    },
                  );
            }
            u(c.arg);
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
        function S(e, r, n) {
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
                var c = T(u, n);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = d), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var s = f(e, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? d : p), s.arg === v)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = d), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function T(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                T(e, r),
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
        function x(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function j(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0));
        }
        function D(e) {
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
          throw new TypeError(K(e) + " is not iterable");
        }
        return (
          (b.prototype = w),
          o(_, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: b, configurable: !0 }),
          (b.displayName = s(w, c, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), s(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(_)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          L(P.prototype),
          s(P.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new P(l(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          L(_),
          s(_, c, "Generator"),
          s(_, a, function () {
            return this;
          }),
          s(_, "toString", function () {
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
          (e.values = D),
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
                this.tryEntries.forEach(x),
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
                  var c = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
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
                  return (this.complete(r.completion, r.afterLoc), x(r), v);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    x(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: D(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function W(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, $(n.key), n));
        }
      }
      function $(t) {
        var e = (function (t, e) {
          if ("object" != K(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != K(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == K(e) ? e : e + "";
      }
      function J(t, e, r) {
        return (
          (e = et(e)),
          (function (t, e) {
            if (e && ("object" == K(e) || "function" == typeof e)) return e;
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
            Q()
              ? Reflect.construct(e, r || [], et(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function Q() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Q = function () {
          return !!t;
        })();
      }
      function tt() {
        return (
          (tt =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, r) {
                  var n = (function (t, e) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(t, e) && null !== (t = et(t));
                    );
                    return t;
                  })(t, e);
                  if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, e);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? t : r)
                      : o.value;
                  }
                }),
          tt.apply(null, arguments)
        );
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
      function rt(t, e) {
        return (
          (rt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          rt(t, e)
        );
      }
      var nt = function (t, e, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(t) {
              try {
                c(n.next(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        },
        ot = {
          where: function (t) {
            return ["LOAD" === t.type];
          },
          to: "LOAD",
        },
        it = {
          where: function (t) {
            return ["RENDER" === t.type];
          },
          to: "RENDER",
        },
        at = {
          where: function (t) {
            return ["CRASHED" === t.type];
          },
          to: "CRASHED",
        },
        ut = {
          IDLE: [
            {
              where: function (t) {
                return ["SETUP" === t.type];
              },
              to: "SETUP",
            },
            at,
          ],
          SETUP: [
            {
              where: function (t) {
                return ["SETUP_COMPLETED" === t.type];
              },
              to: "SETUP_COMPLETED",
            },
            at,
          ],
          SETUP_COMPLETED: [
            {
              where: function (t) {
                return ["INIT" === t.type];
              },
              to: "INIT",
            },
            at,
          ],
          INIT: [
            {
              where: function (t) {
                return ["INIT_COMPLETED" === t.type];
              },
              to: "INIT_COMPLETED",
            },
            at,
          ],
          INIT_COMPLETED: [ot],
          LOAD: [
            {
              where: function (t) {
                return ["LOAD_COMPLETED" === t.type];
              },
              to: "LOAD_COMPLETED",
            },
          ],
          LOAD_COMPLETED: [it, ot],
          RENDER: [
            {
              where: function (t) {
                return ["RENDER_COMPLETED" === t.type];
              },
              to: "RENDER_COMPLETED",
            },
          ],
          RENDER_COMPLETED: [ot, it],
        },
        ct = (function (t) {
          function e(t, r) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((n = J(this, e, ["IDLE", ut])).callback = t),
              (n.logger = r),
              (n.errorState = null),
              n.on("#Transition", function (t) {
                ("CRASHED" === n.state && (n.errorState = t.error),
                  r.LogDebug("".concat(n.prevstate, " -> ").concat(n.state)));
              }),
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
                e && rt(t, e));
            })(e, t),
            (r = e),
            (n = [
              {
                key: "dispatch",
                value: function (t) {
                  return tt(et(e.prototype), "dispatch", this).call(this, t);
                },
              },
              {
                key: "setup",
                value: function (t) {
                  if (this.dispatch({ type: "SETUP" }))
                    try {
                      (this.callback.setup(t),
                        this.dispatch({ type: "SETUP_COMPLETED" }));
                    } catch (t) {
                      (this.logger.LogError("Setup engine error.", t),
                        this.dispatch({
                          type: "CRASHED",
                          error: new Error("Graphics engine setup error."),
                        }));
                    }
                },
              },
              {
                key: "init",
                value: function () {
                  return nt(
                    this,
                    void 0,
                    void 0,
                    X().mark(function t() {
                      var e = this;
                      return X().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ("IDLE" === this.state &&
                                    (this.logger.LogError(
                                      "Engine setup process has not called for initialize state.",
                                    ),
                                    this.dispatch({
                                      type: "CRASHED",
                                      error: new Error(
                                        "Graphics engine failed state.",
                                      ),
                                    })),
                                  "SETUP" !== this.state)
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return (
                                  (t.next = 4),
                                  new Promise(function (t) {
                                    return e.once("#Transition", function () {
                                      return t();
                                    });
                                  })
                                );
                              case 4:
                                if (!this.dispatch({ type: "INIT" })) {
                                  t.next = 15;
                                  break;
                                }
                                return (
                                  (t.prev = 5),
                                  (t.next = 8),
                                  this.callback.initialize()
                                );
                              case 8:
                                (this.dispatch({ type: "INIT_COMPLETED" }),
                                  (t.next = 15));
                                break;
                              case 11:
                                ((t.prev = 11),
                                  (t.t0 = t.catch(5)),
                                  this.logger.LogError(
                                    "Initialize engine error.",
                                    t.t0,
                                  ),
                                  this.dispatch({
                                    type: "CRASHED",
                                    error: t.t0,
                                  }));
                              case 15:
                                if ("INIT" !== this.state) {
                                  t.next = 18;
                                  break;
                                }
                                return (
                                  (t.next = 18),
                                  new Promise(function (t) {
                                    return e.once("#Transition", function () {
                                      return t();
                                    });
                                  })
                                );
                              case 18:
                                if ("CRASHED" !== this.state) {
                                  t.next = 20;
                                  break;
                                }
                                throw this.errorState;
                              case 20:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[5, 11]],
                      );
                    }),
                  );
                },
              },
              {
                key: "loadDocument",
                value: function (t) {
                  return nt(
                    this,
                    void 0,
                    void 0,
                    X().mark(function e() {
                      var r = this;
                      return X().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ("CRASHED" !== this.state) {
                                  e.next = 2;
                                  break;
                                }
                                throw this.errorState;
                              case 2:
                                if (
                                  !this.dispatch({ type: "LOAD", document: t })
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  (e.next = 5),
                                  this.callback.loadDocument(t)
                                );
                              case 5:
                                this.dispatch({ type: "LOAD_COMPLETED" });
                              case 6:
                                if ("LOAD" !== this.state) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  new Promise(function (t) {
                                    return r.once("#Transition", function () {
                                      return t();
                                    });
                                  })
                                );
                              case 9:
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
                key: "renderDocument",
                value: function (t) {
                  return nt(
                    this,
                    void 0,
                    void 0,
                    X().mark(function e() {
                      var r = this;
                      return X().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ("CRASHED" !== this.state) {
                                  e.next = 2;
                                  break;
                                }
                                throw this.errorState;
                              case 2:
                                if (
                                  !this.dispatch({
                                    type: "RENDER",
                                    document: t,
                                  })
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  (e.next = 5),
                                  this.callback.renderDocument(t)
                                );
                              case 5:
                                this.dispatch({ type: "RENDER_COMPLETED" });
                              case 6:
                                if ("RENDER" !== this.state) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  new Promise(function (t) {
                                    return r.once("#Transition", function () {
                                      return t();
                                    });
                                  })
                                );
                              case 9:
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
            ]) && W(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(d.Z);
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
      function lt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, ht(n.key), n));
        }
      }
      function ft(t, e, r) {
        return (
          e && lt(t.prototype, e),
          r && lt(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function ht(t) {
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
      function pt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var yt = ft(function t(e) {
          (pt(this, t),
            (this.element = e),
            (this.element = e),
            (this.next = null));
        }),
        dt = (function () {
          return ft(
            function t() {
              (pt(this, t), (this.head = null));
            },
            [
              {
                key: "HEAD",
                get: function () {
                  var t;
                  return null === (t = this.head) || void 0 === t
                    ? void 0
                    : t.element;
                },
              },
              {
                key: "add",
                value: function (t) {
                  var e,
                    r = new yt(t);
                  if (null == this.head) this.head = r;
                  else {
                    for (e = this.head; e.next; ) e = e.next;
                    e.next = r;
                  }
                },
              },
              {
                key: "remove",
                value: function (t) {
                  for (var e = this.head, r = null; null != e; ) {
                    if (e.element === t)
                      return void (null == r
                        ? (this.head = e.next)
                        : (r.next = e.next));
                    ((r = e), (e = e.next));
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  this.head = null;
                },
              },
            ],
          );
        })(),
        vt = r(84619);
      function mt(t) {
        return (
          (mt =
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
          mt(t)
        );
      }
      function bt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, wt(n.key), n));
        }
      }
      function wt(t) {
        var e = (function (t, e) {
          if ("object" != mt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != mt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == mt(e) ? e : e + "";
      }
      function gt(t, e, r) {
        return (
          (e = Et(e)),
          (function (t, e) {
            if (e && ("object" == mt(e) || "function" == typeof e)) return e;
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
            Ot()
              ? Reflect.construct(e, r || [], Et(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function Ot() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Ot = function () {
          return !!t;
        })();
      }
      function Et(t) {
        return (
          (Et = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Et(t)
        );
      }
      function _t(t, e) {
        return (
          (_t = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          _t(t, e)
        );
      }
      var Lt = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((t = gt(this, e, arguments)).fpsRequestId = -1),
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
              e && _t(t, e));
          })(e, t),
          (r = e),
          (n = [
            {
              key: "startFpsMeter",
              value: function (t) {
                this.stopFpsMeter();
                var e = performance.now();
                this.requestAnimationFrame(e, e, 0, 0, t);
              },
            },
            {
              key: "stopFpsMeter",
              value: function () {
                (window.cancelAnimationFrame(this.fpsRequestId),
                  (this.fpsRequestId = -1));
              },
            },
            {
              key: "requestAnimationFrame",
              value: function (t, e, r, n, o) {
                this.fpsRequestId = window.requestAnimationFrame(
                  this.calculateFps.bind(this, t, e, r, n, o),
                );
              },
            },
            {
              key: "calculateFps",
              value: function (t, e, r, n, o) {
                var i = this,
                  a = performance.now(),
                  u = a - t;
                if (
                  ((r += u ? Math.round(1e3 / u) : 60),
                  n++,
                  a - e > o && ((e = a), n > 0))
                ) {
                  var c = Math.round(r / n);
                  ((r = 0),
                    (n = 0),
                    (0, vt.Z)(function () {
                      return i.emit("aggregateFps", c);
                    }));
                }
                this.requestAnimationFrame(a, e, r, n, o);
              },
            },
          ]) && bt(r.prototype, n),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n;
      })(o.Z);
      function Pt(t) {
        return (
          (Pt =
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
          Pt(t)
        );
      }
      function St(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Tt(n.key), n));
        }
      }
      function Tt(t) {
        var e = (function (t, e) {
          if ("object" != Pt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != Pt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Pt(e) ? e : e + "";
      }
      var kt = (function () {
        return (
          (t = function t(e) {
            var r = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.make = !1),
              (this.canvas = e),
              this.canvas.addEventListener("do-screenshot", function () {
                return (r.make = !0);
              }));
          }),
          (e = [
            {
              key: "do",
              value: function () {
                if (this.make) {
                  this.make = !1;
                  try {
                    var t = this.canvas.toDataURL();
                    this.canvas.dispatchEvent(
                      new CustomEvent("did-screenshot", {
                        detail: { data: t, error: null },
                      }),
                    );
                  } catch (t) {
                    this.canvas.dispatchEvent(
                      new CustomEvent("did-screenshot", {
                        detail: { data: null, error: t },
                      }),
                    );
                  }
                }
              },
            },
          ]) && St(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function xt(t) {
        return (
          (xt =
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
          xt(t)
        );
      }
      function jt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Dt(n.key), n));
        }
      }
      function Dt(t) {
        var e = (function (t, e) {
          if ("object" != xt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != xt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == xt(e) ? e : e + "";
      }
      function Nt(t, e, r) {
        return (
          (e = It(e)),
          (function (t, e) {
            if (e && ("object" == xt(e) || "function" == typeof e)) return e;
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
            Ct()
              ? Reflect.construct(e, r || [], It(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function Ct() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Ct = function () {
          return !!t;
        })();
      }
      function It(t) {
        return (
          (It = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          It(t)
        );
      }
      function At(t, e) {
        return (
          (At = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          At(t, e)
        );
      }
      var Rt = "DEFAULT",
        Mt = (function (t) {
          function e() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((t = Nt(this, e)).requestId = -1),
              (t.documentFileSize = 0),
              (t.branches = new dt()),
              (t.render = function () {
                try {
                  var e = performance.now();
                  (t.emit("paint"),
                    t.peformanceMonitor.emit(
                      "renderTime",
                      performance.now() - e,
                      t.documentFileSize,
                    ),
                    t.screenshot.do());
                } catch (e) {
                  t.logger.LogError("Render error.", e);
                } finally {
                  t.requestId = window.requestAnimationFrame(t.render);
                }
              }),
              (t.logger = window.__CORE__.createLogger(
                "FabricationCanvasControl",
              )),
              (t.canvas = document.createElement("canvas")),
              (t.canvas.tabIndex = 0),
              (t.canvas.oncontextmenu = function () {
                return !1;
              }),
              (t.canvas.style.opacity = "1"),
              window.__APP__.onThemeChanged(function (e, r) {
                var n = e.css;
                n && (t.canvas.style.backgroundColor = n);
              }),
              (t.div = document.createElement("div")),
              t.div.setAttribute("style", "width: 100%; height: 100%;"),
              t.div.appendChild(t.canvas),
              t
                .createCanvasControlBranch(Rt, "IDLE", S)
                .on("PAN_START", function (e) {
                  return t.emit("pan", "start", e.clientX, e.clientY);
                })
                .on("PAN", function (e) {
                  return t.emit("pan", "move", e.clientX, e.clientY);
                })
                .on("PAN_END", function (e) {
                  return t.emit("pan", "end", e.clientX, e.clientY);
                })
                .on("OPTIONAL_PAN_START", function (e) {
                  return t.emit("optionalPan", "start", e.clientX, e.clientY);
                })
                .on("OPTIONAL_PAN", function (e) {
                  return t.emit("optionalPan", "move", e.clientX, e.clientY);
                })
                .on("OPTIONAL_PAN_END", function (e) {
                  return t.emit("optionalPan", "end", e.clientX, e.clientY);
                })
                .on("CLICK", function (e) {
                  return t.emit("click", e.clientX, e.clientY);
                })
                .on("OPTIONAL_CLICK", function (e) {
                  return t.emit("optionalClick", e.clientX, e.clientY);
                })
                .on("ZOOM", function (e) {
                  return t.emit("zoom", e.deltaY, e.clientX, e.clientY);
                })
                .on("TOUCH_START", function (e) {
                  return t.emit("touch", "start", e.touches);
                })
                .on("TOUCH_MOVE", function (e) {
                  return t.emit("touch", "move", e.touches);
                })
                .on("TOUCH_END", function (e) {
                  return t.emit("touch", "end", e.touches);
                }),
              (t.screenshot = new kt(t.canvas)),
              (t.peformanceMonitor = new Lt()),
              window.ResizeObserver
                ? new ResizeObserver(function () {
                    return t.onResize();
                  }).observe(t.div)
                : window.addEventListener("resize", function () {
                    return t.onResize();
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
                e && At(t, e));
            })(e, t),
            (r = e),
            (n = [
              {
                key: "size",
                get: function () {
                  return {
                    x: 0,
                    y: 0,
                    width: this.div.clientWidth,
                    height: this.div.clientHeight,
                  };
                },
              },
              {
                key: "show",
                value: function (t) {
                  try {
                    (this.hide(),
                      this.div.parentNode &&
                        this.div.parentNode !== t &&
                        this.div.parentNode.removeChild(this.div),
                      this.div.parentNode || t.appendChild(this.div),
                      (this.requestId = window.requestAnimationFrame(
                        this.render,
                      )),
                      this.branches.add(Rt),
                      this.onResize());
                  } catch (t) {
                    this.logger.LogError("Attach to workspace error.", t);
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  (this.branches.remove(Rt),
                    window.cancelAnimationFrame(this.requestId),
                    (this.requestId = -1));
                },
              },
              {
                key: "createCanvasControlBranch",
                value: function (t, e, r) {
                  return new P(t, this.branches, this.canvas, e, r);
                },
              },
              {
                key: "onResize",
                value: function () {
                  var t = this,
                    e = this.size,
                    r = e.width,
                    n = e.height;
                  setTimeout(function () {
                    0 !== r &&
                      0 !== n &&
                      ((t.canvas.width = r),
                      (t.canvas.height = n),
                      t.emit("sizeChanged", r, n));
                  });
                },
              },
            ]),
            n && jt(r.prototype, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, n;
        })(o.Z);
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
      function Ft() {
        Ft = function () {
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
          c = i.toStringTag || "@@toStringTag";
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
        function l(t, e, r, n) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            u = new j(n || []);
          return (o(a, "_invoke", { value: S(t, r, u) }), a);
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          d = "completed",
          v = {};
        function m() {}
        function b() {}
        function w() {}
        var g = {};
        s(g, a, function () {
          return this;
        });
        var O = Object.getPrototypeOf,
          E = O && O(O(D([])));
        E && E !== r && n.call(E, a) && (g = E);
        var _ = (w.prototype = m.prototype = Object.create(g));
        function L(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function r(o, i, a, u) {
            var c = f(t[o], t, i);
            if ("throw" !== c.type) {
              var s = c.arg,
                l = s.value;
              return l && "object" == Gt(l) && n.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      r("next", t, a, u);
                    },
                    function (t) {
                      r("throw", t, a, u);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return r("throw", t, a, u);
                    },
                  );
            }
            u(c.arg);
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
        function S(e, r, n) {
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
                var c = T(u, n);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = d), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var s = f(e, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? d : p), s.arg === v)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = d), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function T(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                T(e, r),
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
        function x(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function j(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0));
        }
        function D(e) {
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
          throw new TypeError(Gt(e) + " is not iterable");
        }
        return (
          (b.prototype = w),
          o(_, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: b, configurable: !0 }),
          (b.displayName = s(w, c, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), s(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(_)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          L(P.prototype),
          s(P.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new P(l(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          L(_),
          s(_, c, "Generator"),
          s(_, a, function () {
            return this;
          }),
          s(_, "toString", function () {
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
          (e.values = D),
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
                this.tryEntries.forEach(x),
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
                  var c = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
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
                  return (this.complete(r.completion, r.afterLoc), x(r), v);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    x(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: D(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Ut(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, zt(n.key), n));
        }
      }
      function zt(t) {
        var e = (function (t, e) {
          if ("object" != Gt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, "string");
            if ("object" != Gt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Gt(e) ? e : e + "";
      }
      function Bt(t, e, r) {
        return (
          (e = Vt(e)),
          (function (t, e) {
            if (e && ("object" == Gt(e) || "function" == typeof e)) return e;
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
            Ht()
              ? Reflect.construct(e, r || [], Vt(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function Ht() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Ht = function () {
          return !!t;
        })();
      }
      function Vt(t) {
        return (
          (Vt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Vt(t)
        );
      }
      function qt(t, e) {
        return (
          (qt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          qt(t, e)
        );
      }
      var Zt,
        Yt = function (t, e, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(t) {
              try {
                c(n.next(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        },
        Kt = {
          progress: "Fabrication:progress",
          documentShow: "Fabrication:documentShow",
          documentShown: "Fabrication:documentShown",
          documentClose: "Fabrication:documentClose",
          documentClosed: "Fabrication:documentClosed",
        };
      if (window.__CORE__) {
        var Xt =
          null === (Zt = window.__APP__) || void 0 === Zt
            ? void 0
            : Zt.createModule;
        Xt &&
          window.__CORE__.addModule(
            Xt({
              type: "Engine",
              description: "Presents fabrication documents engine module",
              create: function (t, e) {
                return (function (t, e) {
                  var r = (function (t) {
                    function r(t) {
                      var e;
                      (!(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function",
                          );
                      })(this, r),
                        ((e = Bt(this, r, [t])).logger =
                          window.__CORE__.createLogger("FabricationEngine")),
                        (e.documents = new Array()),
                        (e.currentDocumentIndex = 0));
                      var n = {};
                      return (
                        (n.setup = e.set.bind(e)),
                        (n.initialize = e.initialize.bind(e)),
                        (n.loadDocument = e.loadDocument.bind(e)),
                        (n.renderDocument = e.renderDocument.bind(e)),
                        (e.emitGlobalEvent = function () {
                          return !1;
                        }),
                        (e.fsm = new ct(n, e.logger)),
                        e.fsm.on("INIT", function () {
                          return e.emitGlobalEvent(
                            Kt.progress,
                            null,
                            "Initializing",
                          );
                        }),
                        e.fsm.on("LOAD", function (t) {
                          return e.emitGlobalEvent(
                            Kt.progress,
                            t.document,
                            "Downloading ".concat(t.document.typeDisplayName),
                          );
                        }),
                        e.fsm.on("RENDER", function (t) {
                          return e.emitGlobalEvent(
                            Kt.progress,
                            t.document,
                            "Rendering ".concat(t.document.typeDisplayName),
                          );
                        }),
                        (e.canvasControl = new Mt()),
                        e
                      );
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function",
                          );
                        ((t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          Object.defineProperty(t, "prototype", {
                            writable: !1,
                          }),
                          e && qt(t, e));
                      })(r, t),
                      (o = r),
                      (i = [
                        {
                          key: "events",
                          get: function () {
                            return Object.values(Kt);
                          },
                        },
                        {
                          key: "activeDocumentIndex",
                          get: function () {
                            return this.currentDocumentIndex;
                          },
                          set: function (t) {
                            var e;
                            if (!Number.isInteger(t))
                              throw new Error(
                                "Argument [value=".concat(t, "] error."),
                              );
                            if (t < 0 || t >= this.documents.length)
                              throw new Error(
                                "Index was out of range. Must be non-negative and less than the size of the collection.",
                              );
                            var r = this.currentDocumentIndex;
                            if (((this.currentDocumentIndex = t), r !== t)) {
                              if (r >= 0) {
                                var n = this.documents[r];
                                this.emitGlobalEvent(Kt.documentClose, n);
                                try {
                                  n.clearRender();
                                } finally {
                                  this.emitGlobalEvent(Kt.documentClosed, n);
                                }
                              }
                              null === (e = this.onShowActiveDocument) ||
                                void 0 === e ||
                                e.apply(this);
                            }
                          },
                        },
                        {
                          key: "allDocuments",
                          get: function () {
                            return this.documents;
                          },
                        },
                        {
                          key: "activeDocument",
                          get: function () {
                            if (
                              !(
                                this.activeDocumentIndex < 0 ||
                                this.activeDocumentIndex >=
                                  this.documents.length
                              )
                            )
                              return this.documents[this.activeDocumentIndex];
                          },
                        },
                        {
                          key: "setup",
                          value: function () {
                            return (this.fsm.setup(e), Promise.resolve());
                          },
                        },
                        {
                          key: "show",
                          value: function (t) {
                            return Yt(
                              this,
                              void 0,
                              void 0,
                              Ft().mark(function e() {
                                var r = this;
                                return Ft().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (this.onShowActiveDocument =
                                              function () {
                                                return Yt(
                                                  r,
                                                  void 0,
                                                  void 0,
                                                  Ft().mark(function e() {
                                                    return Ft().wrap(
                                                      function (e) {
                                                        for (;;)
                                                          switch (
                                                            (e.prev = e.next)
                                                          ) {
                                                            case 0:
                                                              return (
                                                                (e.next = 2),
                                                                this.showActiveDocument(
                                                                  t,
                                                                )
                                                              );
                                                            case 2:
                                                              return e.abrupt(
                                                                "return",
                                                                e.sent,
                                                              );
                                                            case 3:
                                                            case "end":
                                                              return e.stop();
                                                          }
                                                      },
                                                      e,
                                                      this,
                                                    );
                                                  }),
                                                );
                                              }),
                                            this.canvasControl.show(t),
                                            (e.next = 4),
                                            this.onShowActiveDocument.apply(
                                              this,
                                            )
                                          );
                                        case 4:
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
                          key: "hide",
                          value: function () {
                            ((this.onShowActiveDocument = null),
                              this.canvasControl.hide(),
                              this.cancellationToken &&
                                (this.cancellationToken.isCancellationRequested =
                                  !0));
                          },
                        },
                        {
                          key: "set",
                          value: function () {
                            var t = this;
                            ((this.emitGlobalEvent = function (r) {
                              try {
                                for (
                                  var n,
                                    o = arguments.length,
                                    i = new Array(o > 1 ? o - 1 : 0),
                                    a = 1;
                                  a < o;
                                  a++
                                )
                                  i[a - 1] = arguments[a];
                                return (n = e.bus).emit.apply(n, [r].concat(i));
                              } catch (e) {
                                return (
                                  t.logger.LogError(
                                    "Event ".concat(r, " emit error."),
                                    e,
                                  ),
                                  !1
                                );
                              }
                            }),
                              e.engines.FabricationMetadata.getDocuments(
                                e.response,
                              ).forEach(function (e) {
                                return t.documents.push(new Y(e));
                              }));
                          },
                        },
                        {
                          key: "showActiveDocument",
                          value: function (t) {
                            return Yt(
                              this,
                              void 0,
                              void 0,
                              Ft().mark(function e() {
                                var r,
                                  o,
                                  i,
                                  a = this;
                                return Ft().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            void 0 !== (r = this.activeDocument)
                                          ) {
                                            e.next = 4;
                                            break;
                                          }
                                          return (
                                            this.emitGlobalEvent(
                                              Kt.documentShown,
                                              void 0,
                                              new Error(
                                                "No documents to display.",
                                              ),
                                            ),
                                            e.abrupt("return")
                                          );
                                        case 4:
                                          return (
                                            (o = function (t) {
                                              if (
                                                (i.throwIfCancellationRequested(),
                                                null == t || t.call(a),
                                                r.errorState)
                                              )
                                                throw r.errorState;
                                            }),
                                            (i = new n.Z()),
                                            (e.prev = 6),
                                            (r.errorState = null),
                                            this.emitGlobalEvent(
                                              Kt.documentShow,
                                              r,
                                            ),
                                            this.cancellationToken &&
                                              (this.cancellationToken.isCancellationRequested =
                                                !0),
                                            (this.cancellationToken = i),
                                            (e.next = 13),
                                            this.fsm.init()
                                          );
                                        case 13:
                                          if ((o(), "None" !== r.state)) {
                                            e.next = 18;
                                            break;
                                          }
                                          return (
                                            (e.next = 17),
                                            this.fsm.loadDocument(r)
                                          );
                                        case 17:
                                          o();
                                        case 18:
                                          if ("Loaded" !== r.state) {
                                            e.next = 22;
                                            break;
                                          }
                                          return (
                                            (e.next = 21),
                                            this.fsm.renderDocument(r)
                                          );
                                        case 21:
                                          o();
                                        case 22:
                                          (this.showDocument(r, t),
                                            this.emitGlobalEvent(
                                              Kt.documentShown,
                                              r,
                                            ),
                                            (e.next = 31));
                                          break;
                                        case 26:
                                          if (
                                            ((e.prev = 26),
                                            (e.t0 = e.catch(6)),
                                            !i.isCancellationRequested)
                                          ) {
                                            e.next = 30;
                                            break;
                                          }
                                          return e.abrupt("return");
                                        case 30:
                                          this.emitGlobalEvent(
                                            Kt.documentShown,
                                            r,
                                            e.t0,
                                          );
                                        case 31:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                  [[6, 26]],
                                );
                              }),
                            );
                          },
                        },
                        {
                          key: "initialize",
                          value: function () {
                            return Yt(
                              this,
                              void 0,
                              void 0,
                              Ft().mark(function t() {
                                var e;
                                return Ft().wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (t.next = 2),
                                            window.GraphiteResolverInstance.resolve(
                                              this.canvasControl.canvas,
                                            )
                                          );
                                        case 2:
                                          return (
                                            (e = t.sent),
                                            (t.next = 5),
                                            e.resolveLibraries()
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
                          key: "loadDocument",
                          value: function (t) {
                            return t.load();
                          },
                        },
                        {
                          key: "renderDocument",
                          value: function (t) {
                            return Yt(
                              this,
                              void 0,
                              void 0,
                              Ft().mark(function e() {
                                return Ft().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            new Promise(function (t) {
                                              return setTimeout(function () {
                                                return t();
                                              }, 50);
                                            })
                                          );
                                        case 2:
                                          t.render(this.canvasControl);
                                        case 3:
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
                        { key: "showDocument", value: function (t, e) {} },
                      ]),
                      i && Ut(o.prototype, i),
                      Object.defineProperty(o, "prototype", { writable: !1 }),
                      o
                    );
                    var o, i;
                  })(t);
                  return new r({
                    name: "Fabrication",
                    comment: "",
                    dependencies: ["graphite.engine", "fabricationMetadata"],
                  });
                })(t, e);
              },
            }),
          );
      }
    },
  },
  (t) => {
    (t.O(0, [21759], () => t((t.s = 98213))), t.O());
  },
]);
