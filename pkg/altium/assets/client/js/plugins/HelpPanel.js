"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [4706, 74687, 11903, 318],
  {
    98265: (e, t, n) => {
      var o = n(61204),
        r = n(10311),
        i = {
          controls: "controls",
          boardInfo: "boardInfo",
          measurements: "measurements",
          about: "about",
          aboutGerberCompare: "aboutGerberCompare",
          documentation: "documentation",
          pdfMetadata: "pdfMetadata",
        },
        l = {
          select: "select",
          zoom: "zoom",
          pan: "pan",
          pan3D: "pan3D",
          rotate3D: "rotate3D",
          reset: "reset",
          layers: "layers",
          horizontalScroll: "horizontalScroll",
          switch2D: "switch2D",
          switch3D: "switch3D",
          flipBoard: "flipBoard",
          foldUnfold: "foldUnfold",
        };
      function a(e) {
        return (
          (a =
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
          a(e)
        );
      }
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function u(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != a(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != a(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == a(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var p = window.__APP__.library.Vuex.createStore,
        d = window.__APP__.library.i18n.t,
        f = p({
          state: {
            view: null,
            boardInfo: null,
            pdfMetadata: null,
            enabledViews: Object.values(i),
            enabledControls: Object.values(l),
            sections: [
              {
                id: 1,
                items: [
                  {
                    id: 1,
                    icon: "controls-12",
                    text: d("viewer.plugins.HelpPanel.sections.controls"),
                    view: i.controls,
                  },
                  {
                    id: 2,
                    icon: "board-info-12",
                    text: d("viewer.plugins.HelpPanel.sections.boardInfo"),
                    view: i.boardInfo,
                  },
                  {
                    id: 3,
                    icon: "board-info-12",
                    text: d("viewer.plugins.HelpPanel.sections.pdfData"),
                    view: i.pdfMetadata,
                  },
                ],
              },
              {
                id: 2,
                items: [
                  {
                    id: 1,
                    icon: "help-12",
                    filled: !0,
                    text: d("viewer.plugins.HelpPanel.sections.documentation"),
                    link: "https://www.altium.com/documentation/altium-designer/altium-365-viewer",
                    view: i.documentation,
                  },
                  {
                    id: 2,
                    icon: "info-12",
                    filled: !0,
                    text: d("viewer.plugins.HelpPanel.sections.about"),
                    view: i.about,
                  },
                  {
                    id: 3,
                    icon: "info-12",
                    filled: !0,
                    text: d("viewer.plugins.HelpPanel.sections.gerberAbout"),
                    view: i.aboutGerberCompare,
                  },
                ],
              },
            ],
            controls: {
              touch: [
                {
                  id: l.select,
                  title: d("viewer.plugins.HelpPanel.controls.select"),
                  controls: [
                    {
                      id: 1,
                      text: d("viewer.plugins.HelpPanel.controls.mobile.tap"),
                    },
                  ],
                },
                {
                  id: l.zoom,
                  title: d("viewer.plugins.HelpPanel.controls.zoom"),
                  controls: [
                    {
                      id: 1,
                      text: d("viewer.plugins.HelpPanel.controls.mobile.pinch"),
                    },
                  ],
                },
                {
                  id: l.pan,
                  title: d("viewer.plugins.HelpPanel.controls.pan"),
                  controls: [
                    {
                      id: 1,
                      text: d("viewer.plugins.HelpPanel.controls.mobile.tap"),
                    },
                    {
                      id: 2,
                      text: d("viewer.plugins.HelpPanel.controls.mobile.drag"),
                    },
                  ],
                },
                {
                  id: l.pan3D,
                  title: d("viewer.plugins.HelpPanel.controls.pan3d"),
                  controls: [
                    {
                      id: 1,
                      text: d(
                        "viewer.plugins.HelpPanel.controls.mobile.doubleTap",
                      ),
                    },
                    {
                      id: 2,
                      text: d("viewer.plugins.HelpPanel.controls.mobile.drag"),
                    },
                  ],
                },
              ],
              desktop: [
                {
                  id: l.select,
                  title: d("viewer.plugins.HelpPanel.controls.select"),
                  isMainSection: !0,
                  controls: [
                    {
                      id: 1,
                      text: d("viewer.plugins.HelpPanel.controls.desktop.lmb"),
                    },
                  ],
                },
                {
                  id: l.zoom,
                  title: d("viewer.plugins.HelpPanel.controls.zoom"),
                  isMainSection: !0,
                  controls: [
                    {
                      id: 1,
                      text: d(
                        "viewer.plugins.HelpPanel.controls.desktop.scroll",
                      ),
                    },
                  ],
                },
                {
                  id: l.pan,
                  title: d("viewer.plugins.HelpPanel.controls.pan"),
                  isMainSection: !0,
                  controls: [
                    {
                      id: 1,
                      text: d("viewer.plugins.HelpPanel.controls.desktop.rmb"),
                    },
                    {
                      id: 2,
                      text: d("viewer.plugins.HelpPanel.controls.desktop.drag"),
                    },
                  ],
                },
                {
                  id: l.rotate3D,
                  title: d("viewer.plugins.HelpPanel.controls.rotate3d"),
                  isMainSection: !0,
                  controls: [
                    {
                      id: 1,
                      text: d("viewer.plugins.HelpPanel.controls.desktop.lmb"),
                    },
                    {
                      id: 2,
                      text: d("viewer.plugins.HelpPanel.controls.desktop.drag"),
                    },
                  ],
                },
                {
                  id: l.reset,
                  title: d("viewer.plugins.HelpPanel.controls.reset"),
                  controls: [{ id: 1, text: "R" }],
                },
                {
                  id: l.switch2D,
                  title: d("viewer.plugins.HelpPanel.controls.switch2d"),
                  controls: [{ id: 1, text: "2" }],
                },
                {
                  id: l.switch3D,
                  title: d("viewer.plugins.HelpPanel.controls.switch3d"),
                  controls: [{ id: 1, text: "3" }],
                },
                {
                  id: l.layers,
                  title: d("viewer.plugins.HelpPanel.controls.nextPrevLayer"),
                  controls: [{ id: 1, text: "+/-" }],
                },
                {
                  id: l.foldUnfold,
                  title: d("viewer.plugins.HelpPanel.controls.fold3d"),
                  meta: "5",
                  controls: [{ id: 1, text: "5" }],
                },
                {
                  id: l.flipBoard,
                  title: d("viewer.plugins.HelpPanel.controls.flip"),
                  controls: [{ id: 1, text: "F" }],
                },
                {
                  id: l.horizontalScroll,
                  title: d("viewer.plugins.HelpPanel.controls.scroll"),
                  controls: [
                    { id: 1, text: "Shift" },
                    {
                      id: 2,
                      text: d(
                        "viewer.plugins.HelpPanel.controls.desktop.scroll",
                      ),
                    },
                  ],
                },
              ],
            },
            units: [
              {
                id: 1,
                name: d("viewer.plugins.HelpPanel.controls.units.mm"),
                type: 0,
                isActive: !0,
              },
              {
                id: 2,
                name: d("viewer.plugins.HelpPanel.controls.units.mil"),
                type: 1,
                isActive: !1,
              },
            ],
            isUnitsEnabled: !1,
          },
          getters: {
            sections: function (e) {
              return e.sections.reduce(function (t, n) {
                return (
                  n.items.forEach(function (o) {
                    if (e.enabledViews.includes(o.view)) {
                      var r = t.find(function (e) {
                        return e.id === n.id;
                      });
                      r ? r.items.push(o) : t.push({ id: n.id, items: [o] });
                    }
                  }),
                  t
                );
              }, []);
            },
            controls: function (e) {
              return Object.entries(e.controls).reduce(function (t, n) {
                var o = n[0],
                  r = n[1];
                return (
                  (t[o] = r.filter(function (t) {
                    return e.enabledControls.includes(t.id);
                  })),
                  t
                );
              }, {});
            },
          },
          mutations: {
            setView: function (e, t) {
              e.view = Object.values(i).includes(t) ? t : null;
            },
            setViews: function (e, t) {
              e.enabledViews =
                Array.isArray(t) &&
                t.some(function (e) {
                  return i[e];
                })
                  ? t
                  : Object.values(i);
            },
            setControls: function (e, t) {
              e.enabledControls = Array.isArray(t) ? t : Object.values(l);
            },
            setBoardInfo: function (e, t) {
              e.boardInfo = t;
            },
            setPdfMetadata: function (e, t) {
              e.pdfMetadata = t;
            },
            setUnits: function (e, t) {
              e.units = t;
            },
            setUnitsEnabled: function (e, t) {
              e.isUnitsEnabled = t;
            },
          },
          actions: {
            setActiveUnit: function (e, t) {
              var n = e.state;
              (0, e.commit)(
                "setUnits",
                n.units.map(function (e) {
                  return s(
                    s({}, e),
                    {},
                    { isActive: t.id === e.id || t === e.name },
                  );
                }),
              );
            },
          },
        }),
        m = function (e) {
          return f.commit("setViews", e);
        },
        v = function (e) {
          return f.commit("setControls", e);
        },
        b = function (e) {
          return f.commit("setBoardInfo", e);
        };
      const y = f;
      var w = ["id"],
        h = { class: "list" },
        g = { class: "list__icon" },
        k = n(77337),
        P = n(77453);
      function _(e) {
        return (
          (_ =
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
          _(e)
        );
      }
      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                S(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : O(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function S(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != _(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != _(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == _(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var C = window.__APP__,
        j = C.analytics,
        A = C.library.Vuex,
        x = A.mapMutations,
        V = A.mapGetters;
      const I = {
        name: "BaseList",
        components: { AfsIcon: k._, AfsText: P.A },
        computed: B(
          B({}, V(["sections"])),
          {},
          {
            computedSections: function () {
              var e = this;
              return this.sections.map(function (t) {
                return B(
                  B({}, t),
                  {},
                  {
                    items: t.items.map(function (t) {
                      return B(B({}, t), {}, { class: e.getBEMClass(t.icon) });
                    }),
                  },
                );
              });
            },
          },
        ),
        methods: B(
          B({}, x(["setView"])),
          {},
          {
            getComponentName: function (e) {
              return e.link ? "a" : "button";
            },
            getAttr: function (e) {
              return e.link
                ? { href: e.link, target: "_blank" }
                : { type: "button" };
            },
            getBEMClass: function (e) {
              return "list__".concat(e);
            },
            onClick: function (e, t) {
              (j.dispatchPanelsEvent("Help", { action: e.view || e.text }),
                e.link || (t.preventDefault(), this.setView(e.view)));
            },
          },
        ),
      };
      var E = n(46021);
      const D = (0, E.Z)(I, [
        [
          "render",
          function (e, t, n, o, i, l) {
            var a = (0, r.resolveComponent)("AfsIcon"),
              c = (0, r.resolveComponent)("AfsText");
            return (
              (0, r.openBlock)(),
              (0, r.createElementBlock)("div", h, [
                ((0, r.openBlock)(!0),
                (0, r.createElementBlock)(
                  r.Fragment,
                  null,
                  (0, r.renderList)(l.computedSections, function (e) {
                    return (
                      (0, r.openBlock)(),
                      (0, r.createElementBlock)(
                        "div",
                        { key: e.id, class: "list__section" },
                        [
                          ((0, r.openBlock)(!0),
                          (0, r.createElementBlock)(
                            r.Fragment,
                            null,
                            (0, r.renderList)(e.items, function (e) {
                              return (
                                (0, r.openBlock)(),
                                (0, r.createBlock)(
                                  (0, r.resolveDynamicComponent)(
                                    l.getComponentName(e),
                                  ),
                                  (0, r.mergeProps)(l.getAttr(e), {
                                    key: e.id,
                                    class: "list__item",
                                    onClick: function (t) {
                                      return l.onClick(e, t);
                                    },
                                  }),
                                  {
                                    default: (0, r.withCtx)(function () {
                                      return [
                                        (0, r.createElementVNode)("span", g, [
                                          (0, r.createVNode)(
                                            a,
                                            {
                                              name: e.icon,
                                              filled: e.filled,
                                              class: (0, r.normalizeClass)([
                                                "list__icon-in",
                                                e.class,
                                              ]),
                                            },
                                            null,
                                            8,
                                            ["name", "filled", "class"],
                                          ),
                                        ]),
                                        (0, r.createVNode)(
                                          c,
                                          {
                                            class: "list__text",
                                            type: "title",
                                          },
                                          {
                                            default: (0, r.withCtx)(
                                              function () {
                                                return [
                                                  (0, r.createTextVNode)(
                                                    (0, r.toDisplayString)(
                                                      e.text,
                                                    ),
                                                    1,
                                                  ),
                                                ];
                                              },
                                            ),
                                            _: 2,
                                          },
                                          1024,
                                        ),
                                      ];
                                    }),
                                    _: 2,
                                  },
                                  1040,
                                  ["onClick"],
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
              ])
            );
          },
        ],
        ["__scopeId", "data-v-41c64191"],
      ]);
      var H = function (e) {
          return (
            (0, r.pushScopeId)("data-v-f19b5d52"),
            (e = e()),
            (0, r.popScopeId)(),
            e
          );
        },
        T = { class: "about" },
        M = (0, r.createTextVNode)(
          " Altium 365 Viewer is a simple and convenient way to view and share electronic designs through your browser. Schematics, PCB layout and 3D visualization provides a interactive CAD experience with no downloads or installations required. It just works. ",
        ),
        N = H(function () {
          return (0, r.createElementVNode)("br", null, null, -1);
        }),
        L = (0, r.createTextVNode)(" Learn more about Altium 365 Viewer - "),
        U = (0, r.createTextVNode)(" https://altium.com/viewer "),
        F = n(30171);
      const z = {
          name: "BaseAbout",
          components: { AfsLink: F.A, AfsText: P.A },
        },
        Z = (0, E.Z)(z, [
          [
            "render",
            function (e, t, n, o, i, l) {
              var a = (0, r.resolveComponent)("AfsLink"),
                c = (0, r.resolveComponent)("AfsText");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)("div", T, [
                  (0, r.createVNode)(
                    c,
                    { type: "paragraph" },
                    {
                      default: (0, r.withCtx)(function () {
                        return [
                          M,
                          N,
                          L,
                          (0, r.createVNode)(
                            a,
                            {
                              href: "https://altium.com/viewer",
                              target: "_blank",
                            },
                            {
                              default: (0, r.withCtx)(function () {
                                return [U];
                              }),
                              _: 1,
                            },
                          ),
                        ];
                      }),
                      _: 1,
                    },
                  ),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-f19b5d52"],
        ]);
      var G = { class: "about" },
        R = (0, r.createTextVNode)(
          " Altium 365 Gerber Compare is a simple and convenient way to compare Gerbers through your browser. Compare mode highlights areas of the board where graphical differences were found. In addition source and target Gerbers can be viewed independently. ",
        );
      const $ = { name: "BaseAboutCompare", components: { AfsText: P.A } },
        q = (0, E.Z)($, [
          [
            "render",
            function (e, t, n, o, i, l) {
              var a = (0, r.resolveComponent)("AfsText");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)("div", G, [
                  (0, r.createVNode)(
                    a,
                    { type: "paragraph" },
                    {
                      default: (0, r.withCtx)(function () {
                        return [R];
                      }),
                      _: 1,
                    },
                  ),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-f001f3f8"],
        ]);
      var K = { class: "controls" },
        J = { key: 0, class: "controls__divider" },
        Q = { class: "control-section" },
        W = { class: "control-section__content" },
        X = { key: 0, class: "control-section__btns" };
      const Y = {
        name: "ControlSection",
        components: { AfsText: P.A },
        props: {
          controls: {
            type: Array,
            default: function () {
              return [];
            },
          },
        },
      };
      function ee(e) {
        return (
          (ee =
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
          ee(e)
        );
      }
      function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                oe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : te(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function oe(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ee(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != ee(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == ee(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const re = {
          name: "BaseControls",
          components: {
            ControlSection: (0, E.Z)(Y, [
              [
                "render",
                function (e, t, n, o, i, l) {
                  var a = (0, r.resolveComponent)("AfsText");
                  return (
                    (0, r.openBlock)(),
                    (0, r.createElementBlock)("div", Q, [
                      (0, r.createElementVNode)("div", W, [
                        (0, r.createVNode)(
                          a,
                          { class: "control-section__title" },
                          {
                            default: (0, r.withCtx)(function () {
                              return [
                                (0, r.renderSlot)(
                                  e.$slots,
                                  "title",
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ];
                            }),
                            _: 3,
                          },
                        ),
                      ]),
                      n.controls.length
                        ? ((0, r.openBlock)(),
                          (0, r.createElementBlock)("div", X, [
                            ((0, r.openBlock)(!0),
                            (0, r.createElementBlock)(
                              r.Fragment,
                              null,
                              (0, r.renderList)(n.controls, function (e) {
                                return (
                                  (0, r.openBlock)(),
                                  (0, r.createElementBlock)(
                                    "div",
                                    {
                                      key: e.id,
                                      class: "control-section__btn",
                                    },
                                    (0, r.toDisplayString)(e.text),
                                    1,
                                  )
                                );
                              }),
                              128,
                            )),
                          ]))
                        : (0, r.createCommentVNode)("v-if", !0),
                    ])
                  );
                },
              ],
              ["__scopeId", "data-v-48c66794"],
            ]),
          },
          computed: ne(
            ne({}, (0, window.__APP__.library.Vuex.mapGetters)(["controls"])),
            {},
            {
              isTouchDevice: function () {
                return "ontouchstart" in window;
              },
              desktopControls: function () {
                return this.controls.desktop.reduce(
                  function (e, t) {
                    return (
                      t.isMainSection ? e.main.push(t) : e.other.push(t),
                      e
                    );
                  },
                  { main: [], other: [] },
                );
              },
              showDivider: function () {
                var e, t;
                return (
                  !this.isTouchDevice &&
                  (null === (e = this.desktopControls) || void 0 === e
                    ? void 0
                    : e.main.length) &&
                  (null === (t = this.desktopControls) || void 0 === t
                    ? void 0
                    : t.other.length)
                );
              },
            },
          ),
        },
        ie = (0, E.Z)(re, [
          [
            "render",
            function (e, t, n, o, i, l) {
              var a = (0, r.resolveComponent)("ControlSection");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)("div", K, [
                  l.isTouchDevice
                    ? ((0, r.openBlock)(!0),
                      (0, r.createElementBlock)(
                        r.Fragment,
                        { key: 0 },
                        (0, r.renderList)(e.controls.touch, function (e) {
                          return (
                            (0, r.openBlock)(),
                            (0, r.createBlock)(
                              a,
                              { key: e.id, controls: e.controls },
                              {
                                title: (0, r.withCtx)(function () {
                                  return [
                                    (0, r.createTextVNode)(
                                      (0, r.toDisplayString)(e.title),
                                      1,
                                    ),
                                  ];
                                }),
                                _: 2,
                              },
                              1032,
                              ["controls"],
                            )
                          );
                        }),
                        128,
                      ))
                    : ((0, r.openBlock)(),
                      (0, r.createElementBlock)(
                        r.Fragment,
                        { key: 1 },
                        [
                          ((0, r.openBlock)(!0),
                          (0, r.createElementBlock)(
                            r.Fragment,
                            null,
                            (0, r.renderList)(
                              l.desktopControls.main,
                              function (e) {
                                return (
                                  (0, r.openBlock)(),
                                  (0, r.createBlock)(
                                    a,
                                    { key: e.id, controls: e.controls },
                                    {
                                      title: (0, r.withCtx)(function () {
                                        return [
                                          (0, r.createTextVNode)(
                                            (0, r.toDisplayString)(e.title),
                                            1,
                                          ),
                                        ];
                                      }),
                                      _: 2,
                                    },
                                    1032,
                                    ["controls"],
                                  )
                                );
                              },
                            ),
                            128,
                          )),
                          l.showDivider
                            ? ((0, r.openBlock)(),
                              (0, r.createElementBlock)("div", J))
                            : (0, r.createCommentVNode)("v-if", !0),
                          ((0, r.openBlock)(!0),
                          (0, r.createElementBlock)(
                            r.Fragment,
                            null,
                            (0, r.renderList)(
                              l.desktopControls.other,
                              function (e) {
                                return (
                                  (0, r.openBlock)(),
                                  (0, r.createBlock)(
                                    a,
                                    { key: e.id, controls: e.controls },
                                    {
                                      title: (0, r.withCtx)(function () {
                                        return [
                                          (0, r.createTextVNode)(
                                            (0, r.toDisplayString)(e.title),
                                            1,
                                          ),
                                        ];
                                      }),
                                      _: 2,
                                    },
                                    1032,
                                    ["controls"],
                                  )
                                );
                              },
                            ),
                            128,
                          )),
                        ],
                        64,
                      )),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-95c00c50"],
        ]);
      var le = { class: "board-info" },
        ae = { class: "board-info__header" },
        ce = { key: 0, class: "board-info__content" },
        se = n(23870),
        ue = { class: "board-info-item" },
        pe = { key: 1, class: "board-info-item__value-container" },
        de = { key: 0, class: "board-info-item__show-more" },
        fe = n(12561),
        me = window.__CORE__;
      const ve = {
          name: "BoardInfoItem",
          components: { AfsText: P.A, AfsLink: F.A, AfsIcon: k._ },
          directives: { trim: fe.t },
          props: {
            item: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return { showMore: !0, maxItems: 8 };
          },
          computed: {
            subItems: function () {
              return this.showMore
                ? this.item.value.slice(0, this.maxItems)
                : this.item.value;
            },
            hasShowMore: function () {
              return this.item.value.length > this.maxItems;
            },
          },
          methods: {
            isArray: function (e) {
              return Array.isArray(e);
            },
            getValueComponentName: function (e) {
              return e.isClickable ? "AfsLink" : "AfsText";
            },
            onClick: function (e) {
              e.isClickable && me.bus.emit("HelpPanel:select", e);
            },
            toggleShowMore: function () {
              this.showMore = !this.showMore;
            },
          },
        },
        be = (0, E.Z)(ve, [
          [
            "render",
            function (e, t, n, o, i, l) {
              var a = (0, r.resolveComponent)("AfsText"),
                c = (0, r.resolveComponent)("AfsIcon"),
                s = (0, r.resolveDirective)("trim");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)("div", ue, [
                  (0, r.createVNode)(
                    a,
                    { tag: "span", class: "board-info-item__key" },
                    {
                      default: (0, r.withCtx)(function () {
                        return [
                          (0, r.createTextVNode)(
                            (0, r.toDisplayString)(n.item.key),
                            1,
                          ),
                        ];
                      }),
                      _: 1,
                    },
                  ),
                  l.isArray(n.item.value)
                    ? ((0, r.openBlock)(),
                      (0, r.createElementBlock)("div", pe, [
                        ((0, r.openBlock)(!0),
                        (0, r.createElementBlock)(
                          r.Fragment,
                          null,
                          (0, r.renderList)(l.subItems, function (e) {
                            return (
                              (0, r.openBlock)(),
                              (0, r.createBlock)(
                                (0, r.resolveDynamicComponent)(
                                  l.getValueComponentName(e),
                                ),
                                {
                                  key: e.id,
                                  class: "board-info-item__value-subitem",
                                  onClick: function (t) {
                                    return l.onClick(e);
                                  },
                                },
                                {
                                  default: (0, r.withCtx)(function () {
                                    return [
                                      (0, r.createTextVNode)(
                                        (0, r.toDisplayString)(e.text),
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 2,
                                },
                                1032,
                                ["onClick"],
                              )
                            );
                          }),
                          128,
                        )),
                        l.hasShowMore
                          ? ((0, r.openBlock)(),
                            (0, r.createElementBlock)("div", de, [
                              (0, r.createVNode)(
                                a,
                                {
                                  class:
                                    "board-info-item__value-subitem board-info-item__show-more-text",
                                  onClick: l.toggleShowMore,
                                },
                                {
                                  default: (0, r.withCtx)(function () {
                                    return [
                                      (0, r.createTextVNode)(
                                        (0, r.toDisplayString)(
                                          e.showMore
                                            ? "Show More (".concat(
                                                n.item.value.length -
                                                  e.maxItems,
                                                ")",
                                              )
                                            : "Show Less",
                                        ) + " ",
                                        1,
                                      ),
                                      (0, r.createVNode)(
                                        c,
                                        {
                                          class: (0, r.normalizeClass)([
                                            "board-info-item__show-more-icon",
                                            { "is-opened": !e.showMore },
                                          ]),
                                          name: "chevron-down-8",
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ),
                                    ];
                                  }),
                                  _: 1,
                                },
                                8,
                                ["onClick"],
                              ),
                            ]))
                          : (0, r.createCommentVNode)("v-if", !0),
                      ]))
                    : (0, r.withDirectives)(
                        ((0, r.openBlock)(),
                        (0, r.createBlock)(
                          a,
                          {
                            key: 0,
                            tag: "span",
                            class: "board-info-item__value",
                          },
                          {
                            default: (0, r.withCtx)(function () {
                              return [
                                (0, r.createTextVNode)(
                                  (0, r.toDisplayString)(n.item.value),
                                  1,
                                ),
                              ];
                            }),
                            _: 1,
                          },
                        )),
                        [[s, { hint: n.item.value, delay: 50 }]],
                      ),
                ])
              );
            },
          ],
        ]);
      function ye(e) {
        return (
          (ye =
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
          ye(e)
        );
      }
      function we(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function he(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ye(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != ye(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == ye(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ge = window.__CORE__,
        ke = window.__APP__,
        Pe = ke.analytics,
        _e = ke.library.Vuex.mapState;
      const Oe = {
          name: "BaseBoardInfo",
          components: {
            AfsText: P.A,
            AfsLink: F.A,
            BoardInfoItem: be,
            AfsBadge: se.B,
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? we(Object(n), !0).forEach(function (t) {
                    he(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : we(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
            }
            return e;
          })({}, _e(["boardInfo"])),
          methods: {
            onLinkClick: function (e) {
              "stackup" === e &&
                (ge.bus.emit("LSMView:updateInterface", { hidden: !1 }),
                ge.bus.emit("View:set", "LSMView"),
                Pe.dispatchViewEvent("Stackup"));
            },
          },
        },
        Be = (0, E.Z)(Oe, [
          [
            "render",
            function (e, t, n, o, i, l) {
              var a = (0, r.resolveComponent)("AfsText"),
                c = (0, r.resolveComponent)("AfsLink"),
                s = (0, r.resolveComponent)("AfsBadge"),
                u = (0, r.resolveComponent)("BoardInfoItem");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)("div", le, [
                  ((0, r.openBlock)(!0),
                  (0, r.createElementBlock)(
                    r.Fragment,
                    null,
                    (0, r.renderList)(e.boardInfo, function (e) {
                      return (
                        (0, r.openBlock)(),
                        (0, r.createElementBlock)(
                          "div",
                          { key: e.id, class: "board-info__section" },
                          [
                            (0, r.createElementVNode)("div", ae, [
                              (0, r.createVNode)(
                                a,
                                { class: "board-info__title", type: "title" },
                                {
                                  default: (0, r.withCtx)(function () {
                                    return [
                                      (0, r.createTextVNode)(
                                        (0, r.toDisplayString)(e.title),
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 2,
                                },
                                1024,
                              ),
                              e.linkName
                                ? ((0, r.openBlock)(),
                                  (0, r.createBlock)(
                                    c,
                                    {
                                      key: 0,
                                      onClick: (0, r.withModifiers)(
                                        function (t) {
                                          return l.onLinkClick(e.linkType);
                                        },
                                        ["prevent"],
                                      ),
                                    },
                                    {
                                      default: (0, r.withCtx)(function () {
                                        return [
                                          (0, r.createTextVNode)(
                                            (0, r.toDisplayString)(e.linkName),
                                            1,
                                          ),
                                        ];
                                      }),
                                      _: 2,
                                    },
                                    1032,
                                    ["onClick"],
                                  ))
                                : (0, r.createCommentVNode)("v-if", !0),
                              e.label
                                ? ((0, r.openBlock)(),
                                  (0, r.createBlock)(
                                    s,
                                    {
                                      key: 1,
                                      type: e.label.type,
                                      size: e.label.size,
                                      uppercase: e.label.uppercase,
                                      class: "board-info__badge",
                                    },
                                    {
                                      default: (0, r.withCtx)(function () {
                                        return [
                                          (0, r.createTextVNode)(
                                            (0, r.toDisplayString)(
                                              e.label.text,
                                            ),
                                            1,
                                          ),
                                        ];
                                      }),
                                      _: 2,
                                    },
                                    1032,
                                    ["type", "size", "uppercase"],
                                  ))
                                : (0, r.createCommentVNode)("v-if", !0),
                            ]),
                            e.items.length
                              ? ((0, r.openBlock)(),
                                (0, r.createElementBlock)("div", ce, [
                                  ((0, r.openBlock)(!0),
                                  (0, r.createElementBlock)(
                                    r.Fragment,
                                    null,
                                    (0, r.renderList)(e.items, function (e) {
                                      return (
                                        (0, r.openBlock)(),
                                        (0, r.createBlock)(
                                          u,
                                          { key: e.id, item: e },
                                          null,
                                          8,
                                          ["item"],
                                        )
                                      );
                                    }),
                                    128,
                                  )),
                                ]))
                              : (0, r.createCommentVNode)("v-if", !0),
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
          ["__scopeId", "data-v-adbc4cf0"],
        ]);
      var Se = { class: "measurements" },
        Ce = window.__APP__.library.i18n.t;
      const je = {
          name: "BaseMeasurements",
          data: function () {
            return { t: Ce };
          },
        },
        Ae = (0, E.Z)(je, [
          [
            "render",
            function (e, t, n, o, i, l) {
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)(
                  "div",
                  Se,
                  (0, r.toDisplayString)(
                    i.t("viewer.plugins.HelpPanel.BaseMeasurements.title"),
                  ),
                  1,
                )
              );
            },
          ],
        ]);
      var xe = { class: "app-unit-switcher" },
        Ve = { class: "app-unit-switcher__in" },
        Ie = n(15938),
        Ee = window.__APP__.library.i18n.t;
      const De = {
          name: "AppUnitSwitcher",
          components: { AfsText: P.A, AfsTabs: Ie.Z },
          props: {
            units: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return { t: Ee };
          },
          methods: {
            onUnitClick: function (e) {
              var t = e.find(function (e) {
                return e.isActive;
              });
              this.$emit("change-unit", t);
            },
          },
        },
        He = (0, E.Z)(De, [
          [
            "render",
            function (e, t, n, o, i, l) {
              var a = (0, r.resolveComponent)("AfsText"),
                c = (0, r.resolveComponent)("AfsTabs");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)("div", xe, [
                  (0, r.createElementVNode)("div", Ve, [
                    (0, r.createVNode)(
                      a,
                      { type: "title" },
                      {
                        default: (0, r.withCtx)(function () {
                          return [
                            (0, r.createTextVNode)(
                              (0, r.toDisplayString)(
                                i.t(
                                  "viewer.plugins.HelpPanel.BaseUnitSwitcher.unitsTitle",
                                ),
                              ),
                              1,
                            ),
                          ];
                        }),
                        _: 1,
                      },
                    ),
                    (0, r.createVNode)(
                      c,
                      {
                        "model-value": n.units,
                        "onUpdate:modelValue": l.onUnitClick,
                      },
                      null,
                      8,
                      ["model-value", "onUpdate:modelValue"],
                    ),
                  ]),
                ])
              );
            },
          ],
        ]);
      var Te = { class: "pdf-metadata" },
        Me = { class: "pdf-metadata__header" },
        Ne = { key: 0, class: "pdf-metadata__content" };
      function Le(e) {
        return (
          (Le =
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
          Le(e)
        );
      }
      function Ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function Fe(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Le(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != Le(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == Le(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ze = window.__APP__.library.Vuex.mapState;
      const Ze = {
          name: "PdfMetadata",
          components: { AfsText: P.A, BoardInfoItem: be },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ue(Object(n), !0).forEach(function (t) {
                    Fe(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : Ue(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
            }
            return e;
          })({}, ze(["pdfMetadata"])),
        },
        Ge = (0, E.Z)(Ze, [
          [
            "render",
            function (e, t, n, o, i, l) {
              var a = (0, r.resolveComponent)("AfsText"),
                c = (0, r.resolveComponent)("BoardInfoItem");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)("div", Te, [
                  ((0, r.openBlock)(!0),
                  (0, r.createElementBlock)(
                    r.Fragment,
                    null,
                    (0, r.renderList)(e.pdfMetadata, function (e) {
                      return (
                        (0, r.openBlock)(),
                        (0, r.createElementBlock)(
                          "div",
                          { key: e.id, class: "pdf-metadata__section" },
                          [
                            (0, r.createElementVNode)("div", Me, [
                              (0, r.createVNode)(
                                a,
                                { class: "pdf-metadata__title", type: "title" },
                                {
                                  default: (0, r.withCtx)(function () {
                                    return [
                                      (0, r.createTextVNode)(
                                        (0, r.toDisplayString)(e.title),
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 2,
                                },
                                1024,
                              ),
                            ]),
                            e.items.length
                              ? ((0, r.openBlock)(),
                                (0, r.createElementBlock)("div", Ne, [
                                  ((0, r.openBlock)(!0),
                                  (0, r.createElementBlock)(
                                    r.Fragment,
                                    null,
                                    (0, r.renderList)(e.items, function (e) {
                                      return (
                                        (0, r.openBlock)(),
                                        (0, r.createBlock)(
                                          c,
                                          { key: e.id, item: e },
                                          null,
                                          8,
                                          ["item"],
                                        )
                                      );
                                    }),
                                    128,
                                  )),
                                ]))
                              : (0, r.createCommentVNode)("v-if", !0),
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
          ["__scopeId", "data-v-db5614a6"],
        ]);
      var Re = n(19577);
      function $e(e) {
        return (
          ($e =
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
          $e(e)
        );
      }
      function qe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function Ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qe(Object(n), !0).forEach(function (t) {
                Je(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : qe(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Je(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != $e(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != $e(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == $e(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Qe = window.__APP__.library.Vuex,
        We = Qe.mapState,
        Xe = Qe.mapMutations,
        Ye = Qe.mapActions,
        et = window.__CORE__,
        tt = window.__APP__.library.i18n.t,
        nt = {
          controls: "BaseControls",
          boardInfo: "BaseBoardInfo",
          measurements: "BaseMeasurements",
          about: "BaseAbout",
          aboutGerberCompare: "BaseAboutCompare",
          pdfMetadata: "PdfMetadata",
        },
        ot = {
          controls: tt("viewer.plugins.HelpPanel.sections.controls"),
          boardInfo: tt("viewer.plugins.HelpPanel.sections.boardInfo"),
          about: tt("viewer.plugins.HelpPanel.sections.about"),
        };
      const rt = {
          name: "HelpPanel",
          components: {
            BaseList: D,
            BaseAbout: Z,
            BaseAboutCompare: q,
            BaseControls: ie,
            BaseBoardInfo: Be,
            BaseMeasurements: Ae,
            BaseUnitSwitcher: He,
            PdfMetadata: Ge,
          },
          computed: Ke(
            Ke({}, We(["view", "units", "isUnitsEnabled"])),
            {},
            {
              hasView: function () {
                var e;
                return !(null === (e = this.view) || void 0 === e || !e.length);
              },
              component: function () {
                return nt[this.view];
              },
            },
          ),
          watch: {
            view: function (e) {
              this.onViewChange(e);
            },
          },
          props: { id: String },
          created: function () {
            var e = this;
            (et.bus.on("HelpPanel:back", function () {
              return e.setView(null);
            }),
              this.view && this.onViewChange(this.view));
          },
          methods: Ke(
            Ke(Ke({}, Xe(["setView"])), Ye(["setActiveUnit"])),
            {},
            {
              onChangeUnits: function (e) {
                (Re.Z.set(e.name),
                  this.setActiveUnit(e),
                  et.bus.emit("HelpPanel:changeUnit", e.name));
              },
              onViewChange: function (e) {
                et.bus.emit("HelpPanel:updateInterface", {
                  view: {
                    hasBackButton: this.hasView,
                    title: this.hasView ? ot[e] || "Back" : "Info",
                  },
                });
              },
            },
          ),
        },
        it = (0, E.Z)(rt, [
          [
            "render",
            function (e, t, n, o, i, l) {
              var a = (0, r.resolveComponent)("BaseList"),
                c = (0, r.resolveComponent)("BaseUnitSwitcher");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)(
                  "div",
                  { id: n.id, class: "help" },
                  [
                    l.hasView
                      ? (0, r.createCommentVNode)("v-if", !0)
                      : ((0, r.openBlock)(), (0, r.createBlock)(a, { key: 0 })),
                    !l.hasView && e.isUnitsEnabled
                      ? ((0, r.openBlock)(),
                        (0, r.createBlock)(
                          c,
                          {
                            key: 1,
                            units: e.units,
                            onChangeUnit: l.onChangeUnits,
                          },
                          null,
                          8,
                          ["units", "onChangeUnit"],
                        ))
                      : ((0, r.openBlock)(),
                        (0, r.createBlock)(
                          (0, r.resolveDynamicComponent)(l.component),
                          { key: 2 },
                        )),
                  ],
                  8,
                  w,
                )
              );
            },
          ],
        ]);
      var lt = n(74839),
        at = n(19997),
        ct = n(67674),
        st = n(73894);
      function ut(e) {
        return (
          (ut =
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
          ut(e)
        );
      }
      function pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function dt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? dt(Object(n), !0).forEach(function (t) {
                mt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : dt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function mt(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ut(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != ut(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == ut(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var vt = window.__CORE__,
        bt = window.__APP__.library.i18n.t;
      const yt = function (e) {
        var t, n, o, r, i, l, a, c, s, u, p, d;
        if (e) {
          var f = [],
            m = Re.Z.get(),
            v =
              (null == vt ||
              null === (t = vt.response) ||
              void 0 === t ||
              null === (n = t.storage) ||
              void 0 === n
                ? void 0
                : n.files.some(function (e) {
                    return "Lsm" === e.fileType;
                  })) && vt.views.LSMView,
            b = (0, ct.kD)("data-layerstack-label", "");
          (e.document &&
            f.push({
              id: (0, lt.c)(),
              title: bt(
                "viewer.plugins.HelpPanel.boardInfo.sections.boardSize",
              ),
              items: wt(e.document, m),
            }),
            null != e &&
              null !== (o = e.document) &&
              void 0 !== o &&
              o.layers &&
              f.push({
                id: (0, lt.c)(),
                title: bt("viewer.plugins.HelpPanel.boardInfo.sections.layers"),
                linkName: v
                  ? bt("viewer.plugins.HelpPanel.boardInfo.sections.layersLink")
                  : "",
                linkType: "stackup",
                label: v && b && (0, st.Z)(b),
                items: ht(
                  null == e || null === (r = e.document) || void 0 === r
                    ? void 0
                    : r.layers,
                ),
              }),
            e.components &&
              f.push({
                id: (0, lt.c)(),
                title: bt(
                  "viewer.plugins.HelpPanel.boardInfo.sections.components",
                ),
                items: gt(e.components),
              }));
          var y =
              null !==
                (i =
                  null === (l = e.document) ||
                  void 0 === l ||
                  null === (a = l.primStatistic) ||
                  void 0 === a
                    ? void 0
                    : a.netsTotal) && void 0 !== i
                ? i
                : null === (c = e.nets) || void 0 === c
                  ? void 0
                  : c.length,
            w =
              null === (s = e.document) ||
              void 0 === s ||
              null === (u = s.primStatistic) ||
              void 0 === u
                ? void 0
                : u.netsUnrouted,
            h =
              null === (p = e.document) ||
              void 0 === p ||
              null === (d = p.primStatistic) ||
              void 0 === d
                ? void 0
                : d.netsHidden;
          return (
            void 0 !== y &&
              f.push({
                id: (0, lt.c)(),
                title: bt("viewer.plugins.HelpPanel.boardInfo.sections.nets"),
                items: kt(y, w, h, e.nets),
              }),
            f
          );
        }
      };
      var wt = function (e, t) {
          return [
            {
              id: (0, lt.c)(),
              key: bt("viewer.plugins.HelpPanel.boardInfo.items.horizontal"),
              value:
                "mm" === t
                  ? "".concat((0, at.mB)(e.horizontal, 2)).concat(t)
                  : "".concat((0, at.LS)(e.horizontal, 2)).concat(t),
            },
            {
              id: (0, lt.c)(),
              key: bt("viewer.plugins.HelpPanel.boardInfo.items.horizontal"),
              value:
                "mm" === t
                  ? "".concat((0, at.mB)(e.vertical, 2)).concat(t)
                  : "".concat((0, at.LS)(e.vertical, 2)).concat(t),
            },
          ];
        },
        ht = function (e) {
          var t = e.reduce(
            function (e, t) {
              return (
                (e.plane.value += 2 & t.kind ? 1 : 0),
                (e.signal.value += 1 & t.kind ? 1 : 0),
                (e.total.value = e.signal.value + e.plane.value),
                e
              );
            },
            {
              total: {
                id: (0, lt.c)(),
                key: bt("viewer.plugins.HelpPanel.boardInfo.items.total"),
                value: 0,
              },
              signal: {
                id: (0, lt.c)(),
                key: bt("viewer.plugins.HelpPanel.boardInfo.items.signal"),
                value: 0,
              },
              plane: {
                id: (0, lt.c)(),
                key: bt("viewer.plugins.HelpPanel.boardInfo.items.internal"),
                value: 0,
              },
            },
          );
          return Object.values(t);
        },
        gt = function (e) {
          var t = e.reduce(
            function (e, t) {
              return (
                (e.top.value += 1 === t.layerId ? 1 : 0),
                (e.bottom.value += 32 === t.layerId ? 1 : 0),
                (e.total.value += 1),
                e
              );
            },
            {
              total: {
                id: (0, lt.c)(),
                key: bt("viewer.plugins.HelpPanel.boardInfo.items.total"),
                value: 0,
              },
              top: {
                id: (0, lt.c)(),
                key: bt("viewer.plugins.HelpPanel.boardInfo.items.top"),
                value: 0,
              },
              bottom: {
                id: (0, lt.c)(),
                key: bt("viewer.plugins.HelpPanel.boardInfo.items.bottom"),
                value: 0,
              },
            },
          );
          return Object.values(t);
        },
        kt = function (e, t, n, o) {
          var r = [],
            i = function (e, t) {
              return e
                ? o.reduce(function (e, n) {
                    return (
                      t(n) &&
                        e.push(
                          ft(
                            ft({}, n),
                            {},
                            {
                              id: (0, lt.c)(),
                              text: n.name,
                              isClickable: !0,
                              kind: "net",
                            },
                          ),
                        ),
                      e
                    );
                  }, [])
                : [];
            },
            l = function (t, n, o) {
              if (void 0 !== t) {
                var l = (100 * t) / e || 0;
                ((l = Math.max(Math.min(l, 100), 0)),
                  r.push({
                    id: (0, lt.c)(),
                    key: n,
                    value: [
                      {
                        id: (0, lt.c)(),
                        text: "".concat(t, " (").concat(l.toFixed(1), "%)"),
                      },
                    ].concat(
                      ((a = i(t, o)),
                      (function (e) {
                        if (Array.isArray(e)) return pt(e);
                      })(a) ||
                        (function (e) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != e[Symbol.iterator]) ||
                            null != e["@@iterator"]
                          )
                            return Array.from(e);
                        })(a) ||
                        (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return pt(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return (
                              "Object" === n &&
                                e.constructor &&
                                (n = e.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(e)
                                : "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n,
                                    )
                                  ? pt(e, t)
                                  : void 0
                            );
                          }
                        })(a) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        })()),
                    ),
                  }));
              }
              var a;
            };
          return (
            r.push({
              id: (0, lt.c)(),
              key: bt("viewer.plugins.HelpPanel.boardInfo.items.total"),
              value: e,
            }),
            l(
              t,
              bt("viewer.plugins.HelpPanel.boardInfo.items.unrouted"),
              function (e) {
                return null == e ? void 0 : e.unroutedLength;
              },
            ),
            l(
              n,
              bt("viewer.plugins.HelpPanel.boardInfo.items.hidden"),
              function (e) {
                var t;
                return !(
                  null === (t = null == e ? void 0 : e.visible) ||
                  void 0 === t ||
                  t
                );
              },
            ),
            r
          );
        },
        Pt = n(23583),
        _t = function (e) {
          var t = e.info,
            n = window.pdfjsLib.PDFDateString.toDateObject;
          return [
            { id: (0, lt.c)(), key: "Author", value: Bt(t.Author) },
            {
              id: (0, lt.c)(),
              key: "Creation date",
              value: t.CreationDate ? (0, Pt.g)(n(t.CreationDate)) : "-",
            },
            {
              id: (0, lt.c)(),
              key: "Modification date",
              value: t.ModDate ? (0, Pt.g)(n(t.ModDate)) : "-",
            },
            { id: (0, lt.c)(), key: "Creator", value: Bt(t.Creator) },
            { id: (0, lt.c)(), key: "Keywords", value: Bt(t.Keywords) },
            { id: (0, lt.c)(), key: "Subject", value: Bt(t.Subject) },
            { id: (0, lt.c)(), key: "Title", value: Bt(t.Title) },
          ];
        },
        Ot = function (e) {
          return [
            {
              id: (0, lt.c)(),
              key: "Name",
              value: Bt(e.contentDispositionFilename),
            },
            { id: (0, lt.c)(), key: "Page count", value: e.pageCount },
            {
              id: (0, lt.c)(),
              key: "Size",
              value: "".concat(Math.round(e.contentLength / 1e4) / 100, " Mb"),
            },
            {
              id: (0, lt.c)(),
              key: "PDF Producer",
              value: Bt(e.info.Producer),
            },
            {
              id: (0, lt.c)(),
              key: "PDF Version",
              value: Bt(e.info.PDFFormatVersion),
            },
          ];
        },
        Bt = function (e) {
          return void 0 === e || "" === e ? "-" : e;
        };
      function St(e) {
        return (
          (St =
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
          St(e)
        );
      }
      function Ct(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return jt(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return jt(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? jt(e, t)
                    : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function jt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function At(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, xt(o.key), o));
        }
      }
      function xt(e) {
        var t = (function (e, t) {
          if ("object" != St(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, "string");
            if ("object" != St(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == St(t) ? t : t + "";
      }
      function Vt(e, t, n) {
        return (
          (t = Et(t)),
          (function (e, t) {
            if (t && ("object" == St(t) || "function" == typeof t)) return t;
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
            It()
              ? Reflect.construct(t, n || [], Et(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function It() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (It = function () {
          return !!e;
        })();
      }
      function Et(e) {
        return (
          (Et = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Et(e)
        );
      }
      function Dt(e, t) {
        return (
          (Dt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Dt(e, t)
        );
      }
      var Ht = window.__CORE__,
        Tt = window.__APP__.createModule,
        Mt = window.__APP__,
        Nt = Mt.analytics,
        Lt = Mt.utils.getIcon,
        Ut = "true" === (0, ct.kD)("data-hp-is-hide-doc-about", ""),
        Ft = function () {
          var e, t;
          return (
            "AltiumDesignerMultiboard" ===
            (null === (e = Ht.response) ||
            void 0 === e ||
            null === (t = e.metadata) ||
            void 0 === t
              ? void 0
              : t.projectTypeName)
          );
        },
        zt = Tt({
          type: "Plugin",
          description: "HelpPanel",
          create: function (e) {
            var t = (function (e) {
              function t() {
                var e;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  ((e = Vt(this, t, [
                    {
                      name: "HelpPanel",
                      displayIcon: Lt("info-12", "help-16"),
                      iconFilled: "info-12" === Lt("info-12", "help-16"),
                      comment: "HelpPanel",
                      description: "HelpPanel",
                      order: 3,
                      hint: "Info",
                      view: {
                        type: "modal",
                        title: "Info",
                        config: {
                          type: "aside-right",
                          hasCloseOnOutsideClick: !1,
                        },
                      },
                    },
                  ])).currentPcbId = ""),
                  (e.isPcbContext = !1),
                  (e.isHidden = !0),
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
                    t && Dt(e, t));
                })(t, e),
                (n = t),
                (a = [
                  {
                    key: "events",
                    get: function () {
                      return [
                        "HelpPanel:backToList",
                        "HelpPanel:setViews",
                        "HelpPanel:setControls",
                        "HelpPanel:changeUnit",
                        "HelpPanel:setActiveView",
                        "HelpPanel:select",
                      ];
                    },
                  },
                  {
                    key: "hidden",
                    get: function () {
                      return this.isHidden;
                    },
                    set: function (e) {
                      ((this.isHidden = e),
                        Ht.bus.emit("HelpPanel:updateInterface", {
                          hidden: this.isHidden,
                        }));
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      var e = this;
                      return (
                        Ht.bus.on("HelpPanel:setViews", m),
                        Ht.bus.on(
                          "HelpPanel:setActiveView",
                          this.setActiveView,
                        ),
                        Ht.bus.on("HelpPanel:setControls", v),
                        Ht.bus.on("storageResolveComplete", function (t) {
                          if (
                            t.files.some(function (e) {
                              return "Lsm" === e.fileType;
                            })
                          ) {
                            var n = yt(Ht.response.metadata, e.currentPcbId);
                            (null == n ? void 0 : n.length) && b(n);
                          }
                        }),
                        Ht.bus.on("HelpPanel:select", function (e) {
                          e &&
                            Ht.bus.emit(
                              "select",
                              (0, o.Z)(e.kind, e, "HelpPanel"),
                            );
                        }),
                        Ht.bus.on("PDFView:setPdfMetadata", function (e) {
                          var t;
                          ((t = (function (e) {
                            if (!e) return [];
                            var t = [];
                            return (
                              t.push({
                                id: (0, lt.c)(),
                                title: "File data",
                                items: Ot(e),
                              }),
                              t.push({
                                id: (0, lt.c)(),
                                title: "Document data",
                                items: _t(e),
                              }),
                              t
                            );
                          })(e)),
                            f.commit("setPdfMetadata", t));
                        }),
                        Ht.bus.on("PcbEngine:documentChanged", function () {
                          e.updateBoardInfo();
                        }),
                        window.__APP__.eventAttachHelper.onViewActivate(
                          function (t) {
                            var n = t.name;
                            ((e.hidden = "LSMView" === n),
                              (e.isPcbContext = ct.ns.includes(n)),
                              e.updateBoardInfo());
                          },
                        ),
                        Promise.resolve()
                      );
                    },
                  },
                  {
                    key: "initView",
                    value: function () {
                      var e, t;
                      ((this.hasView = !0),
                        (this.view =
                          ((e = this.metaInfo.name),
                          (t = (t = document.querySelector("#".concat(e)))
                            .parentNode),
                          (0, r.createApp)(it, { id: e }).use(y).mount(t))));
                    },
                  },
                  {
                    key: "activate",
                    value: function () {
                      this.hasView || this.initView();
                      var e,
                        t = Re.Z.get();
                      (t && ((e = t), f.dispatch("setActiveUnit", e)),
                        this.setEnabledViews(),
                        this.setEnabledControls(),
                        this.setUnitsEnabled(),
                        Nt.dispatchPanelsEvent("Help", { action: "Opened" }));
                    },
                  },
                  { key: "deactivate", value: function () {} },
                  {
                    key: "setEnabledViews",
                    value: function () {
                      var e,
                        t = this,
                        n = [i.controls];
                      if (Ht.attributes["data-pdf-view"])
                        return m([].concat(Ct(n), [i.pdfMetadata]));
                      var o =
                          null == Ht ||
                          null === (e = Ht.response) ||
                          void 0 === e
                            ? void 0
                            : e.metadata,
                        r =
                          "CamtasticCompare" ===
                          (null == o ? void 0 : o.projectTypeName);
                      ((n = Ut
                        ? Ct(n)
                        : [].concat(
                            Ct(n),
                            r
                              ? [i.aboutGerberCompare]
                              : [i.documentation, i.about],
                          )),
                        o &&
                          this.getBoardInfo() &&
                          (this.updateBoardInfo(),
                          Ft() || n.push(i.boardInfo),
                          Ht.bus.on("HelpPanel:changeUnit", function (e) {
                            o && t.updateBoardInfo();
                          })),
                        m(n));
                    },
                  },
                  {
                    key: "setEnabledControls",
                    value: function () {
                      var e = [];
                      Object.values(Ht.views)
                        .filter(function (e) {
                          return !e.hidden && e.metaInfo;
                        })
                        .map(function (e) {
                          return e.metaInfo;
                        })
                        .forEach(function (t) {
                          if (t.hasControls)
                            try {
                              t.hasControls(e);
                            } catch (e) {}
                        });
                      var t = Object.values(l).filter(function (t) {
                        return e.find(function (e) {
                          return e.type === t;
                        });
                      });
                      v(t);
                    },
                  },
                  {
                    key: "setUnitsEnabled",
                    value: function () {
                      var e,
                        t = Object.keys(Ht.plugins),
                        n = [
                          "Measurement",
                          "GerberCompareMeasurement",
                          "CompareLayers",
                          "MeasurementsPanel",
                          "LayersSidebar",
                        ];
                      ((e =
                        !Ft() &&
                        t.some(function (e) {
                          return n.includes(e);
                        })),
                        f.commit("setUnitsEnabled", e));
                    },
                  },
                  {
                    key: "setActiveView",
                    value: function (e) {
                      var t;
                      ((t = e), f.commit("setView", t));
                    },
                  },
                  {
                    key: "getBoardInfo",
                    value: function () {
                      var e, t, n, o;
                      return this.isPcbContext
                        ? null === (e = Ht.engines) ||
                          void 0 === e ||
                          null === (t = e.PcbEngine) ||
                          void 0 === t
                          ? void 0
                          : t.getCurrentDocumentBoardInfo()
                        : null === (n = Ht.engines) ||
                            void 0 === n ||
                            null === (o = n.PcbEngine) ||
                            void 0 === o
                          ? void 0
                          : o.getMainBoardInfo();
                    },
                  },
                  {
                    key: "updateBoardInfo",
                    value: function () {
                      var e = this.getBoardInfo();
                      if (e) {
                        var t = yt(e);
                        (null == t ? void 0 : t.length) && b(t);
                      }
                    },
                  },
                ]),
                a && At(n.prototype, a),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, a;
            })(e);
            return new t();
          },
        });
      Ht && Ht.addModule(zt);
    },
    10311: (e) => {
      e.exports = Vue;
    },
  },
  (e) => {
    (e.O(0, [66951, 21759], () => e((e.s = 98265))), e.O());
  },
]);
