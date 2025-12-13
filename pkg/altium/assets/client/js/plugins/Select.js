"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [17343, 74687, 11903, 318],
  {
    47239: (e, t, n) => {
      var i = n(61204),
        o = n(10311),
        r = (0, window.__APP__.library.Vuex.createStore)({
          state: { views: [], item: null, enabledViews: [] },
          mutations: {
            setItem: function (e, t) {
              e.item = t;
            },
            setViews: function (e, t) {
              e.views = Array.isArray(t) ? t : [];
            },
            setEnabledViews: function (e, t) {
              e.enabledViews = t;
            },
          },
          getters: {
            getEnabledViews: function (e) {
              return e.views.filter(function (t) {
                return (
                  !t.hidden &&
                  (e.enabledViews.includes(t.id) || t.showInControls)
                );
              });
            },
          },
        }),
        a = function () {
          return r.state.item;
        },
        c = function (e) {
          return r.commit("setItem", e);
        },
        l = function (e) {
          return r.commit("setEnabledViews", e);
        };
      const s = r;
      var u = { class: "select-panel" },
        m = { key: 0, class: "select-panel__content" },
        d = { class: "select-panel__controls" },
        p = n(15938);
      function f(e) {
        return (
          (f =
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
          f(e)
        );
      }
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function y(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != f(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" != f(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == f(t) ? t : t + "";
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
      var h = window.__APP__,
        b = h.analytics,
        k = h.library.Vuex.mapGetters,
        w = window.__CORE__;
      const S = {
        name: "AppSelectControls",
        components: { AfsTabs: p.Z },
        computed: (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? v(Object(n), !0).forEach(function (t) {
                  y(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : v(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        })({}, k(["getEnabledViews"])),
        methods: {
          onChange: function (e) {
            var t = e.filter(function (e) {
              return e.isActive;
            })[0];
            (w.bus.emit("Select:viewChange", t),
              b.dispatchPanelsEvent("Properties", { action: "CrossProbe" }));
          },
        },
      };
      var g = n(46021);
      const _ = (0, g.Z)(S, [
        [
          "render",
          function (e, t, n, i, r, a) {
            var c = (0, o.resolveComponent)("AfsTabs");
            return (
              (0, o.openBlock)(),
              (0, o.createElementBlock)("div", d, [
                (0, o.createVNode)(
                  c,
                  {
                    "model-value": e.getEnabledViews,
                    "onUpdate:modelValue": a.onChange,
                  },
                  null,
                  8,
                  ["model-value", "onUpdate:modelValue"],
                ),
              ])
            );
          },
        ],
        ["__scopeId", "data-v-079dc3c4"],
      ]);
      var O = { key: 0 },
        P = n(77453);
      const B = {
          name: "AppInfoItem",
          components: { AfsText: P.A },
          props: { primary: { type: Boolean, default: !1 } },
          computed: {
            keyType: function () {
              return this.primary ? "title" : "paragraph";
            },
          },
          methods: {
            hasSlot: function (e) {
              return !!this.$slots[e];
            },
          },
        },
        C = (0, g.Z)(B, [
          [
            "render",
            function (e, t, n, i, r, a) {
              var c = (0, o.resolveComponent)("AfsText");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)(
                  "div",
                  {
                    class: (0, o.normalizeClass)([
                      "info-item",
                      { "info-item_primary": n.primary },
                    ]),
                  },
                  [
                    a.hasSlot("key")
                      ? ((0, o.openBlock)(),
                        (0, o.createBlock)(
                          c,
                          { key: 0, class: "info-item__key", type: a.keyType },
                          {
                            default: (0, o.withCtx)(function () {
                              return [
                                (0, o.renderSlot)(
                                  e.$slots,
                                  "key",
                                  { type: a.keyType },
                                  void 0,
                                  !0,
                                ),
                              ];
                            }),
                            _: 3,
                          },
                          8,
                          ["type"],
                        ))
                      : (0, o.createCommentVNode)("v-if", !0),
                    a.hasSlot("value")
                      ? ((0, o.openBlock)(),
                        (0, o.createBlock)(
                          c,
                          { key: 1, class: "info-item__value" },
                          {
                            default: (0, o.withCtx)(function () {
                              return [
                                (0, o.renderSlot)(
                                  e.$slots,
                                  "value",
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ];
                            }),
                            _: 3,
                          },
                        ))
                      : (0, o.createCommentVNode)("v-if", !0),
                  ],
                  2,
                )
              );
            },
          ],
          ["__scopeId", "data-v-56254bea"],
        ]);
      var V = { class: "select-panel__list" },
        I = { class: "select-panel__list-item select-panel__list-key" },
        L = { key: 2 },
        N = { class: "select-panel__list-menu-section" },
        j = ["onClick"],
        x = { key: 1, class: "select-panel__list_secondary" },
        D = n(48046),
        E = n(30171),
        A = n(77337),
        T = n(91261),
        R = n(12561),
        z = n(65725);
      const F = {
          name: "AppList",
          components: {
            AfsKeyValueList: D.Z,
            AfsLink: E.A,
            AfsText: P.A,
            AfsIcon: A._,
            AfsContextMenu: T.C,
          },
          directives: { trim: R.t, dropdown: z.d },
          props: {
            dataLocator: { type: String, default: "list" },
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
            primary: { type: Boolean, default: !1 },
          },
          methods: {
            isLink: function (e) {
              return e.value.startsWith("http") || e.isClickable;
            },
            onLinkClick: function (e, t) {
              e.isClickable &&
                (t.preventDefault(), this.$emit("select-item", e));
            },
            getMenuId: function (e) {
              var t;
              return null == e || null === (t = e.menu) || void 0 === t
                ? void 0
                : t.id;
            },
          },
        },
        M = (0, g.Z)(F, [
          [
            "render",
            function (e, t, n, i, r, a) {
              var c = (0, o.resolveComponent)("AfsIcon"),
                l = (0, o.resolveComponent)("AfsLink"),
                s = (0, o.resolveComponent)("AfsText"),
                u = (0, o.resolveComponent)("AfsContextMenu"),
                m = (0, o.resolveComponent)("AfsKeyValueList"),
                d = (0, o.resolveDirective)("trim"),
                p = (0, o.resolveDirective)("dropdown");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)("div", V, [
                  n.primary
                    ? ((0, o.openBlock)(),
                      (0, o.createBlock)(
                        m,
                        {
                          key: 0,
                          class: "select-panel__list_primary",
                          items: n.items,
                        },
                        {
                          key: (0, o.withCtx)(function (e) {
                            var t = e.listItem;
                            return [
                              (0, o.withDirectives)(
                                ((0, o.openBlock)(),
                                (0, o.createElementBlock)("div", I, [
                                  (0, o.createElementVNode)(
                                    "span",
                                    null,
                                    (0, o.toDisplayString)(t.key),
                                    1,
                                  ),
                                ])),
                                [[d, { hint: t.key, delay: 50 }]],
                              ),
                            ];
                          }),
                          value: (0, o.withCtx)(function (e) {
                            var t = e.listItem;
                            return [
                              (0, o.withDirectives)(
                                ((0, o.openBlock)(),
                                (0, o.createElementBlock)(
                                  "div",
                                  {
                                    class: (0, o.normalizeClass)([
                                      "select-panel__list-item select-panel__list-value",
                                      {
                                        "select-panel__list-item_menu": t.menu,
                                      },
                                    ]),
                                  },
                                  [
                                    t.icon
                                      ? ((0, o.openBlock)(),
                                        (0, o.createBlock)(
                                          c,
                                          {
                                            key: 0,
                                            class: "select-panel__list-icon",
                                            name: t.icon,
                                            filled: "",
                                          },
                                          null,
                                          8,
                                          ["name"],
                                        ))
                                      : (0, o.createCommentVNode)("v-if", !0),
                                    a.isLink(t)
                                      ? ((0, o.openBlock)(),
                                        (0, o.createBlock)(
                                          l,
                                          {
                                            key: 1,
                                            href: t.value,
                                            target: "_blank",
                                            onClick: function (e) {
                                              return a.onLinkClick(t, e);
                                            },
                                          },
                                          {
                                            default: (0, o.withCtx)(
                                              function () {
                                                return [
                                                  (0, o.createTextVNode)(
                                                    (0, o.toDisplayString)(
                                                      t.value,
                                                    ),
                                                    1,
                                                  ),
                                                ];
                                              },
                                            ),
                                            _: 2,
                                          },
                                          1032,
                                          ["href", "onClick"],
                                        ))
                                      : ((0, o.openBlock)(),
                                        (0, o.createElementBlock)(
                                          "span",
                                          L,
                                          (0, o.toDisplayString)(t.value),
                                          1,
                                        )),
                                    t.menu
                                      ? ((0, o.openBlock)(),
                                        (0, o.createBlock)(c, {
                                          key: 3,
                                          class: "select-panel__list-menu-icon",
                                          name: "chevron-down-8",
                                        }))
                                      : (0, o.createCommentVNode)("v-if", !0),
                                    t.menu
                                      ? ((0, o.openBlock)(),
                                        (0, o.createBlock)(
                                          u,
                                          {
                                            key: 4,
                                            id: t.menu.id,
                                            class: "select-panel__list-menu",
                                            type: "dropdown",
                                            modifiers: {
                                              y: "bottom",
                                              x: "end",
                                            },
                                            offset: 4,
                                            "viewbox-offset": 68,
                                          },
                                          {
                                            default: (0, o.withCtx)(
                                              function () {
                                                return [
                                                  (0, o.createElementVNode)(
                                                    "ul",
                                                    N,
                                                    [
                                                      t.menu.title
                                                        ? ((0, o.openBlock)(),
                                                          (0, o.createBlock)(
                                                            s,
                                                            {
                                                              key: 0,
                                                              class:
                                                                "select-panel__list-menu-title",
                                                              type: "single line",
                                                              inline: "",
                                                              ellipsis: "",
                                                            },
                                                            {
                                                              default: (0,
                                                              o.withCtx)(
                                                                function () {
                                                                  return [
                                                                    (0,
                                                                    o.createElementVNode)(
                                                                      "span",
                                                                      null,
                                                                      (0,
                                                                      o.toDisplayString)(
                                                                        t.menu
                                                                          .title,
                                                                      ),
                                                                      1,
                                                                    ),
                                                                  ];
                                                                },
                                                              ),
                                                              _: 2,
                                                            },
                                                            1024,
                                                          ))
                                                        : (0,
                                                          o.createCommentVNode)(
                                                            "v-if",
                                                            !0,
                                                          ),
                                                      ((0, o.openBlock)(!0),
                                                      (0, o.createElementBlock)(
                                                        o.Fragment,
                                                        null,
                                                        (0, o.renderList)(
                                                          t.menu.items,
                                                          function (e) {
                                                            return (
                                                              (0,
                                                              o.openBlock)(),
                                                              (0,
                                                              o.createElementBlock)(
                                                                "li",
                                                                { key: e.id },
                                                                [
                                                                  (0,
                                                                  o.createElementVNode)(
                                                                    "button",
                                                                    {
                                                                      type: "button",
                                                                      class:
                                                                        "select-panel__list-menu-item",
                                                                      onClick:
                                                                        function (
                                                                          t,
                                                                        ) {
                                                                          return e.onClick();
                                                                        },
                                                                    },
                                                                    [
                                                                      e.icon
                                                                        ? ((0,
                                                                          o.openBlock)(),
                                                                          (0,
                                                                          o.createBlock)(
                                                                            c,
                                                                            {
                                                                              key: 0,
                                                                              class:
                                                                                "select-panel__list-menu-item-icon",
                                                                              name: e.icon,
                                                                              filled:
                                                                                e.iconFilled,
                                                                            },
                                                                            null,
                                                                            8,
                                                                            [
                                                                              "name",
                                                                              "filled",
                                                                            ],
                                                                          ))
                                                                        : (0,
                                                                          o.createCommentVNode)(
                                                                            "v-if",
                                                                            !0,
                                                                          ),
                                                                      (0,
                                                                      o.createVNode)(
                                                                        s,
                                                                        {
                                                                          type: "single line",
                                                                          inline:
                                                                            "",
                                                                          ellipsis:
                                                                            "",
                                                                        },
                                                                        {
                                                                          default:
                                                                            (0,
                                                                            o.withCtx)(
                                                                              function () {
                                                                                return [
                                                                                  (0,
                                                                                  o.createElementVNode)(
                                                                                    "span",
                                                                                    null,
                                                                                    (0,
                                                                                    o.toDisplayString)(
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
                                                                    ],
                                                                    8,
                                                                    j,
                                                                  ),
                                                                ],
                                                              )
                                                            );
                                                          },
                                                        ),
                                                        128,
                                                      )),
                                                    ],
                                                  ),
                                                ];
                                              },
                                            ),
                                            _: 2,
                                          },
                                          1032,
                                          ["id"],
                                        ))
                                      : (0, o.createCommentVNode)("v-if", !0),
                                  ],
                                  2,
                                )),
                                [
                                  [d, { hint: t.value, delay: 50 }],
                                  [p, void 0, a.getMenuId(t)],
                                ],
                              ),
                            ];
                          }),
                          _: 1,
                        },
                        8,
                        ["items"],
                      ))
                    : ((0, o.openBlock)(),
                      (0, o.createElementBlock)("div", x, [
                        ((0, o.openBlock)(!0),
                        (0, o.createElementBlock)(
                          o.Fragment,
                          null,
                          (0, o.renderList)(n.items, function (e) {
                            return (
                              (0, o.openBlock)(),
                              (0, o.createElementBlock)(
                                "div",
                                { key: e.id, class: "select-panel__list-item" },
                                [
                                  (0, o.createElementVNode)(
                                    "span",
                                    {
                                      class: "select-panel__list-item-color",
                                      style: (0, o.normalizeStyle)({
                                        background: e.color,
                                      }),
                                    },
                                    null,
                                    4,
                                  ),
                                  (0, o.createVNode)(
                                    s,
                                    {
                                      class: "select-panel__list-item-text",
                                      "data-locator": ""
                                        .concat(n.dataLocator, "-")
                                        .concat((e.name || "").toLowerCase()),
                                    },
                                    {
                                      default: (0, o.withCtx)(function () {
                                        return [
                                          (0, o.createTextVNode)(
                                            (0, o.toDisplayString)(e.name),
                                            1,
                                          ),
                                        ];
                                      }),
                                      _: 2,
                                    },
                                    1032,
                                    ["data-locator"],
                                  ),
                                ],
                              )
                            );
                          }),
                          128,
                        )),
                      ])),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-97e0feec"],
        ]),
        Z = {
          name: "AppInfoSection",
          components: { AfsText: P.A, InfoItem: C, List: M },
          props: {
            title: { type: String, default: "" },
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
            primary: { type: Boolean, default: !1 },
          },
          methods: {
            isListItem: function (e) {
              return e.isList;
            },
            onSelectItem: function (e) {
              this.$emit("select-item", e);
            },
          },
        },
        U = (0, g.Z)(Z, [
          [
            "render",
            function (e, t, n, i, r, a) {
              var c = (0, o.resolveComponent)("AfsText"),
                l = (0, o.resolveComponent)("InfoItem"),
                s = (0, o.resolveComponent)("List");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)(
                  "div",
                  {
                    class: (0, o.normalizeClass)([
                      "info-section",
                      { "info-section_primary": n.primary },
                    ]),
                  },
                  [
                    n.title
                      ? ((0, o.openBlock)(),
                        (0, o.createElementBlock)("div", O, [
                          (0, o.createVNode)(
                            c,
                            { class: "info-section__title", type: "title" },
                            {
                              default: (0, o.withCtx)(function () {
                                return [
                                  (0, o.createTextVNode)(
                                    (0, o.toDisplayString)(n.title),
                                    1,
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                          ),
                        ]))
                      : (0, o.createCommentVNode)("v-if", !0),
                    ((0, o.openBlock)(!0),
                    (0, o.createElementBlock)(
                      o.Fragment,
                      null,
                      (0, o.renderList)(n.items, function (e) {
                        return (
                          (0, o.openBlock)(),
                          (0, o.createElementBlock)(
                            "div",
                            { key: e.id, class: "info-section__item" },
                            [
                              a.isListItem(e)
                                ? ((0, o.openBlock)(),
                                  (0, o.createBlock)(
                                    s,
                                    {
                                      key: 1,
                                      primary: e.primary,
                                      items: e.items,
                                      "data-locator": "layer",
                                      onSelectItem: a.onSelectItem,
                                    },
                                    null,
                                    8,
                                    ["primary", "items", "onSelectItem"],
                                  ))
                                : ((0, o.openBlock)(),
                                  (0, o.createBlock)(
                                    l,
                                    { key: 0, primary: e.primary },
                                    (0, o.createSlots)({ _: 2 }, [
                                      e.key
                                        ? {
                                            name: "key",
                                            fn: (0, o.withCtx)(function () {
                                              return [
                                                (0, o.createTextVNode)(
                                                  (0, o.toDisplayString)(e.key),
                                                  1,
                                                ),
                                              ];
                                            }),
                                          }
                                        : void 0,
                                      e.value
                                        ? {
                                            name: "value",
                                            fn: (0, o.withCtx)(function () {
                                              return [
                                                (0, o.createTextVNode)(
                                                  (0, o.toDisplayString)(
                                                    e.value,
                                                  ),
                                                  1,
                                                ),
                                              ];
                                            }),
                                          }
                                        : void 0,
                                      e.text
                                        ? {
                                            name: "text",
                                            fn: (0, o.withCtx)(function () {
                                              return [
                                                (0, o.createTextVNode)(
                                                  (0, o.toDisplayString)(
                                                    e.text,
                                                  ),
                                                  1,
                                                ),
                                              ];
                                            }),
                                          }
                                        : void 0,
                                    ]),
                                    1032,
                                    ["primary"],
                                  )),
                            ],
                          )
                        );
                      }),
                      128,
                    )),
                  ],
                  2,
                )
              );
            },
          ],
          ["__scopeId", "data-v-4c2b0730"],
        ]);
      function X(e) {
        return (
          (X =
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
          X(e)
        );
      }
      function Y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                K(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Y(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function K(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != X(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" != X(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == X(t) ? t : t + "";
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
      var $ = window.__APP__.library.Vuex.mapState,
        W = window.__CORE__;
      const q = {
          name: "AppSelect",
          components: { SelectControls: _, InfoSection: U },
          computed: H(
            H({}, $(["item"])),
            {},
            {
              hasAdditionalInfo: function () {
                return (
                  this.item && (this.item.layersUsed || this.item.parameters)
                );
              },
            },
          ),
          methods: {
            onSelectItem: function (e) {
              W.bus.emit("Select:fromPanel", e);
            },
          },
        },
        G = (0, g.Z)(q, [
          [
            "render",
            function (e, t, n, i, r, a) {
              var c = (0, o.resolveComponent)("SelectControls"),
                l = (0, o.resolveComponent)("InfoSection");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)("div", u, [
                  (0, o.createVNode)(c),
                  e.item && e.item.info.length
                    ? ((0, o.openBlock)(),
                      (0, o.createElementBlock)("div", m, [
                        ((0, o.openBlock)(!0),
                        (0, o.createElementBlock)(
                          o.Fragment,
                          null,
                          (0, o.renderList)(e.item.info, function (e) {
                            return (
                              (0, o.openBlock)(),
                              (0, o.createBlock)(
                                l,
                                {
                                  key: e.id,
                                  items: e.items,
                                  title: e.title,
                                  primary: e.primary,
                                  onSelectItem: a.onSelectItem,
                                },
                                null,
                                8,
                                ["items", "title", "primary", "onSelectItem"],
                              )
                            );
                          }),
                          128,
                        )),
                      ]))
                    : (0, o.createCommentVNode)("v-if", !0),
                ])
              );
            },
          ],
        ]);
      var J = n(74839),
        Q = n(31444),
        ee = { 1: "Arc", 2: "Pad", 3: "Via", 4: "Track" },
        te = {
          0: "None",
          1: "Round",
          2: "Rectangle",
          3: "Octagonal",
          4: "Circle",
          5: "Arc Shape",
          6: "Terminator",
          7: "Round Rectangle",
          8: "Rotated Rectangle",
          9: "Round Rectangle",
        },
        ne = 1e4,
        ie = n(19577),
        oe = n(19997);
      const re = function (e) {
        return 255 & e;
      };
      var ae = window.__CORE__,
        ce = function (e, t) {
          var n,
            i,
            o = ie.Z.get(),
            r = "mm" === o,
            a =
              null === (n = ae.response) ||
              void 0 === n ||
              null === (i = n.metadata) ||
              void 0 === i
                ? void 0
                : i.pcbDocument,
            c =
              e -
              (null != a && a.originX
                ? (null == a ? void 0 : a.originX) / ne
                : 0),
            l =
              t -
              (null != a && a.originY
                ? (null == a ? void 0 : a.originY) / ne
                : 0),
            s = r ? (0, oe.mB)(c, 3) : (0, oe.LS)(c, 3),
            u = r ? (0, oe.mB)(l, 3) : (0, oe.LS)(l, 3);
          return [
            { value: "X: ".concat(s).concat(o, "; Y: ").concat(u).concat(o) },
          ];
        };
      const le = function (e) {
        var t = e.item,
          n = e.native,
          i = e.selectedPrimitive,
          o = e.showPrimitive,
          r = void 0 === o || o;
        return t.designator
          ? ue(t, n)
          : i && se(re(i.kind)) && r
            ? de(t, i)
            : t.name && t.layersUsed
              ? me(t)
              : void 0;
      };
      var se = function (e) {
          return ee[e];
        },
        ue = function (e, t) {
          var n,
            i,
            o,
            r,
            a = {},
            c = {},
            l = [];
          (e.parameters &&
            (c = e.parameters.reduce(
              function (e, t) {
                return (
                  "PartNumber" === t.name
                    ? (e.comment = t.value)
                    : "FootprintName" === t.name
                      ? (e.footprintName = t.value)
                      : "FootprintDescription" === t.name
                        ? (e.footprintDesc = t.value)
                        : t.name &&
                          t.value &&
                          "Comment" !== t.name &&
                          e.items.push({
                            id: (0, J.c)(),
                            keyId: (0, J.c)(),
                            valueId: (0, J.c)(),
                            key: t.name,
                            value: t.value,
                          }),
                  e
                );
              },
              {
                isList: !0,
                primary: !0,
                items: [],
                comment: "",
                footprintDesc: "",
                footprintName: "",
              },
            )),
            e.designator &&
              l.push({
                id: (0, J.c)(),
                items: [
                  ((n = {
                    key: "Designator",
                    value: e.designator,
                    primary: !0,
                  }),
                  (i = n.key),
                  (o = n.value),
                  (r = n.primary),
                  { key: i, value: o, primary: void 0 !== r && r }),
                ],
                primary: !0,
              }));
          var s,
            u,
            m,
            d = c.comment || e.comment || t.comment || t.Comment;
          e.description &&
            l.push(
              ((s = d),
              (u = e.description),
              (m = []).push({ key: "Component", value: s, primary: !0 }),
              u && m.push({ value: u }),
              { id: (0, J.c)(), items: m, primary: !0 }),
            );
          var p =
            (null == e ? void 0 : e.footprintName) ||
            (null == t ? void 0 : t.footprintName) ||
            (null == t ? void 0 : t.FootprintName);
          c.footprintDesc &&
            l.push(
              (function (e, t) {
                var n = [];
                return (
                  n.push({ key: "Footprint", value: e, primary: !0 }),
                  t && n.push({ value: t }),
                  { id: (0, J.c)(), items: n, primary: !0 }
                );
              })(p, c.footprintDesc),
            );
          var f = {
            x: e.pcbLocationX || t.pcbLocationX || t.PcbLocationX,
            y: e.pcbLocationY || t.pcbLocationY || t.PcbLocationY,
          };
          return (
            e.layerName &&
              l.push(
                (function (e, t) {
                  var n = t.x && t.y ? ce(t.x / ne, t.y / ne) : [];
                  return (
                    e && n.push({ value: e }),
                    { id: (0, J.c)(), title: "Location", items: n }
                  );
                })(e.layerName, f),
              ),
            c.items &&
              l.push({ id: (0, J.c)(), title: "Parameters", items: [c] }),
            (a.info = l),
            a
          );
        },
        me = function (e) {
          var t,
            n,
            i,
            o,
            r,
            a,
            c,
            l,
            s = {},
            u = [];
          e.name &&
            u.push(
              ((n = (t = e).name),
              (i = t.length),
              (o = t.unroutedLength),
              (r = t.visible),
              (c =
                "mm" === (a = ie.Z.get())
                  ? (0, oe.mB)(i / ne, 3)
                  : (0, oe.LS)(i / ne, 3)),
              (l = { isList: !0, primary: !0, items: [] }),
              n &&
                l.items.push({
                  id: (0, J.c)(),
                  keyId: (0, J.c)(),
                  valueId: (0, J.c)(),
                  key: "Net Name",
                  value: n,
                }),
              i &&
                l.items.push({
                  id: (0, J.c)(),
                  keyId: (0, J.c)(),
                  valueId: (0, J.c)(),
                  key: "Routed Length",
                  value: "".concat(c).concat(a),
                }),
              we(o, r, l),
              { id: (0, J.c)(), primary: !0, items: [l] }),
            );
          var m = e.layersUsed.filter(function (e) {
            return !0 & e.kind && !0 & e.kind;
          });
          return (
            m &&
              m.length &&
              u.push(
                (function (e) {
                  var t = { isList: !0, items: e };
                  return { id: (0, J.c)(), title: "Layers Used", items: [t] };
                })(m),
              ),
            (s.info = u),
            s
          );
        },
        de = function (e, t) {
          var n,
            i,
            o,
            r = {},
            a = [];
          return (
            e.name && a.push(be(e)),
            a.push({
              id: (0, J.c)(),
              title: t.kind ? se(re(t.kind)) : "Parameters",
              items: [ve(t)],
            }),
            a.push(
              ((i = (n = t).x),
              (o = n.y),
              { id: (0, J.c)(), title: "Location", items: ce(i / ne, o / ne) }),
            ),
            (r.info = a),
            r
          );
        },
        pe = function (e) {
          var t,
            n,
            i = (
              null === (t = ae.response) ||
              void 0 === t ||
              null === (n = t.metadata) ||
              void 0 === n
                ? void 0
                : n.layers
            ).find(function (t) {
              return t.id === e;
            });
          return null != i && i.name ? i.name : "";
        },
        fe = function (e) {
          return 0 === e.holeSize
            ? "SMD Pad"
            : e.plated
              ? "Plated Hole"
              : "Unplated Hole";
        },
        ve = function (e) {
          var t = (function (e) {
            var t = [],
              n = ie.Z.get(),
              i = "mm" === n;
            if (
              (e.fullName && t.push({ name: "Name", value: e.fullName }),
              e.radius &&
                t.push({
                  name: "Radius",
                  value: i
                    ? "".concat((0, oe.mB)(e.radius / ne, 3)).concat(n)
                    : "".concat((0, oe.LS)(e.radius / ne, 3)).concat(n),
                }),
              e.width &&
                t.push({
                  name: "Width",
                  value: i
                    ? "".concat((0, oe.mB)(e.width / ne, 3)).concat(n)
                    : "".concat((0, oe.LS)(e.width / ne, 3)).concat(n),
                }),
              e.type && t.push({ name: "Type", value: e.type }),
              e.startLayer &&
                e.stopLayer &&
                t.push({
                  name: "Via",
                  value: ""
                    .concat(pe(e.startLayer), " - ")
                    .concat(pe(e.stopLayer)),
                }),
              e.layerId &&
                e.width &&
                t.push({ name: "Layer", value: pe(e.layerId) }),
              re(e.kind) === Q.Zw.Track &&
                t.push({ name: "Length", value: ke(e, n) }),
              (void 0 === e.plated && 0 !== e.holeSize) ||
                t.push({ name: "Type", value: fe(e) }),
              e.holeSize &&
                t.push({
                  name: "Hole Size",
                  value: i
                    ? "".concat((0, oe.mB)(e.holeSize / ne, 3)).concat(n)
                    : "".concat((0, oe.LS)(e.holeSize / ne, 3)).concat(n),
                }),
              e.shape)
            ) {
              var o = "";
              (e.shapeSize
                ? (o = i
                    ? "".concat((0, oe.mB)(e.shapeSize / ne, 3)).concat(n)
                    : "".concat((0, oe.LS)(e.shapeSize / ne, 3)).concat(n))
                : (e.shapeSizeX &&
                    (o = i
                      ? "".concat((0, oe.mB)(e.shapeSizeX / ne, 3)).concat(n)
                      : "".concat((0, oe.LS)(e.shapeSizeX / ne, 3)).concat(n)),
                  e.shapeSizeY &&
                    (o += i
                      ? "; ".concat((0, oe.mB)(e.shapeSizeY / ne, 3)).concat(n)
                      : "; "
                          .concat((0, oe.LS)(e.shapeSizeY / ne, 3))
                          .concat(n))),
                t.push({ name: "Shape", value: "".concat(te[e.shape]) }),
                o && t.push({ name: "", value: o }));
            }
            return t;
          })(e);
          return t.reduce(
            function (e, t) {
              return (
                t.value &&
                  e.items.push({
                    id: (0, J.c)(),
                    keyId: (0, J.c)(),
                    valueId: (0, J.c)(),
                    key: t.name,
                    value: t.value,
                    icon: he(t),
                  }),
                e
              );
            },
            { isList: !0, primary: !0, items: [] },
          );
        },
        ye = {
          octagonal: "octagonal-12",
          round: "round-12",
          rectangle: "rectangle-12",
          "round rectangle": "round-rectangle-12",
        },
        he = function (e) {
          return "Shape" === e.name ? ye[e.value.toLowerCase()] : null;
        },
        be = function (e) {
          var t = e.length,
            n = e.name,
            i = e.unroutedLength,
            o = e.visible,
            r = ie.Z.get(),
            a = "mm" === r ? (0, oe.mB)(t / ne, 3) : (0, oe.LS)(t / ne, 3),
            c = { isList: !0, primary: !0, items: [] };
          return (
            n &&
              c.items.push({
                id: (0, J.c)(),
                keyId: (0, J.c)(),
                valueId: (0, J.c)(),
                key: "Net Name",
                value: n,
                isClickable: "no net" !== n,
              }),
            t &&
              c.items.push({
                id: (0, J.c)(),
                keyId: (0, J.c)(),
                valueId: (0, J.c)(),
                key: "Routed Length",
                value: "".concat(a).concat(r),
              }),
            we(i, o, c),
            { id: (0, J.c)(), title: "Net", items: [c] }
          );
        },
        ke = function (e, t) {
          var n = "mm" === t,
            i = 0;
          if (
            void 0 !== e.x &&
            void 0 !== e.y &&
            void 0 !== e.x1 &&
            void 0 !== e.y1
          ) {
            var o = Math.abs(e.x - e.x1),
              r = Math.abs(e.y - e.y1);
            i = 0 === o || 0 === r ? o + r : Math.sqrt(o * o + r * r);
          }
          return n
            ? "".concat((0, oe.mB)(i / ne, 3)).concat(t)
            : "".concat((0, oe.LS)(i / ne, 3)).concat(t);
        },
        we = function (e, t, n) {
          var i = e ? "Routing Incomplete" : t ? void 0 : "Net is Hidden";
          i &&
            n.items.push({
              id: (0, J.c)(),
              keyId: (0, J.c)(),
              valueId: (0, J.c)(),
              key: "Issues",
              value: "1",
              icon: "warning-16-v2",
              menu: {
                id: (0, J.c)(),
                title: "Issues found",
                items: [
                  {
                    id: (0, J.c)(),
                    icon: "warning-16-v2",
                    iconFilled: !0,
                    text: i,
                    onClick: function () {
                      (ae.bus.emit("HelpPanel:setActiveView", "boardInfo"),
                        ae.bus.emit("HelpPanel:enable"));
                    },
                  },
                ],
              },
            });
        };
      function Se(e) {
        return (
          (Se =
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
          Se(e)
        );
      }
      function ge(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ge(Object(n), !0).forEach(function (t) {
                Oe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ge(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Oe(e, t, n) {
        return (
          (t = Be(t)) in e
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
      function Pe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, Be(i.key), i));
        }
      }
      function Be(e) {
        var t = (function (e, t) {
          if ("object" != Se(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, "string");
            if ("object" != Se(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Se(t) ? t : t + "";
      }
      function Ce(e, t, n) {
        return (
          (t = Ie(t)),
          (function (e, t) {
            if (t && ("object" == Se(t) || "function" == typeof t)) return t;
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
            Ve()
              ? Reflect.construct(t, n || [], Ie(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function Ve() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (Ve = function () {
          return !!e;
        })();
      }
      function Ie(e) {
        return (
          (Ie = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ie(e)
        );
      }
      function Le(e, t) {
        return (
          (Le = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Le(e, t)
        );
      }
      var Ne = [2, 3, 4],
        je = window.__APP__.createModule,
        xe = window.__CORE__,
        De = je({
          type: "Plugin",
          name: "Select",
          description: "Select",
          create: function (e) {
            return new ((function (e) {
              function t() {
                var e;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (e = Ce(this, t, [
                    {
                      name: "Select",
                      comment: "Select",
                      description: "Select",
                      view: {
                        type: "modal",
                        title: "Selected Item",
                        config: {
                          type: "aside-right",
                          hasCloseOnOutsideClick: !1,
                        },
                      },
                    },
                  ])).initListeners(),
                  (e.searchData = null),
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
                    t && Le(e, t));
                })(t, e),
                (n = t),
                (u = [
                  {
                    key: "events",
                    get: function () {
                      return [
                        "Select:viewChange",
                        "Select:beforeSelect",
                        "Select:fromPanel",
                      ];
                    },
                  },
                  {
                    key: "isPrimitiveSelected",
                    value: function () {
                      var e, t;
                      return Ne.includes(
                        re(
                          null === (e = this.selectData) ||
                            void 0 === e ||
                            null === (t = e.selectedPrimitive) ||
                            void 0 === t
                            ? void 0
                            : t.kind,
                        ),
                      );
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      var e = this;
                      return (
                        window.__APP__.eventAttachHelper.onViewActivate(
                          function (t) {
                            var n = t.name;
                            if (
                              ((e.activeView = n),
                              "BOMView" === e.activeView
                                ? (xe.bus.emit("Select:disable"),
                                  console.log("Select:disable"))
                                : !e.isOpened &&
                                  a() &&
                                  (console.log("Select:enable"),
                                  xe.bus.emit("Select:enable")),
                              e.isOpened && e.isPrimitiveSelected())
                            ) {
                              var i = le({
                                item: e.selectData.item,
                                selectedPrimitive:
                                  e.selectData.selectedPrimitive,
                                showPrimitive: !("SCHView" === e.activeView),
                              });
                              (c(i), l(e.selectData.views));
                            } else e.setViewsPadding();
                          },
                        ),
                        Promise.resolve()
                      );
                    },
                  },
                  {
                    key: "activate",
                    value: function () {
                      var e, t;
                      (this.hasView ||
                        ((this.hasView = !0),
                        (this.view =
                          ((e = this.metaInfo.name),
                          (t = (t = document.querySelector("#".concat(e)))
                            .parentNode),
                          (0, o.createApp)(G, { id: e }).use(s).mount(t)))),
                        (this.isOpened = !0),
                        this.setBackButtonVisibslity());
                    },
                  },
                  {
                    key: "deactivate",
                    value: function () {
                      ("BOMView" !== this.activeView &&
                        "FBOM" !== this.activeView &&
                        a() &&
                        xe.bus.emit("select", null),
                        (this.isOpened = !1),
                        (this.selectData = null),
                        this.setViewsPadding());
                    },
                  },
                  {
                    key: "initListeners",
                    value: function () {
                      (this.initOnViewChange(),
                        this.initOnViewsUpdated(),
                        this.initOnSelectFromSearch(),
                        this.initOnBackClick(),
                        this.initOnSelect(),
                        this.initOnVariantsChanged(),
                        this.initOnSelectFromPanel(),
                        this.initOnSetPadding());
                    },
                  },
                  {
                    key: "initOnSelectFromPanel",
                    value: function () {
                      xe.bus.on("Select:fromPanel", function (e) {
                        var t,
                          n,
                          o = "Net Name" === e.key || "nets" === e.typeFile,
                          r =
                            o &&
                            (null === (t = xe.response) ||
                            void 0 === t ||
                            null === (n = t.metadata) ||
                            void 0 === n
                              ? void 0
                              : n.nets.find(function (t) {
                                  return (
                                    t.name === e.value || e.name === t.name
                                  );
                                }));
                        r &&
                          xe.bus.emit(
                            "select",
                            (0, i.Z)(o ? "net" : "component", r, "SelectPanel"),
                          );
                      });
                    },
                  },
                  {
                    key: "initOnVariantsChanged",
                    value: function () {
                      xe.bus.on("Variants:changed", function (e) {
                        var t;
                        if (
                          null != e &&
                          null !== (t = e.selectedItem) &&
                          void 0 !== t &&
                          t.item
                        ) {
                          var n = _e({}, e);
                          xe.bus.emit("Select:beforeSelect", n.selectedItem);
                          var i = le({
                            item: n.selectedItem.item,
                            native: n.selectedItem.native,
                            selectedPrimitive: n.selectedItem.selectedPrimitive,
                            showPrimitive: !0,
                          });
                          (c(i), l(n.selectedItem.views));
                        }
                      });
                    },
                  },
                  {
                    key: "initOnViewChange",
                    value: function () {
                      xe.bus.on("Select:viewChange", function (e) {
                        xe.bus.emit("View:set", e.id);
                      });
                    },
                  },
                  {
                    key: "initOnViewsUpdated",
                    value: function () {
                      xe.bus.on("Views:update", function (e) {
                        var t;
                        ((t = (function (e) {
                          return Array.isArray(e)
                            ? e.map(function (e) {
                                return {
                                  id: e.id,
                                  name: e.text,
                                  isActive: e.isActive,
                                  isDisabled: e.disabled,
                                  hidden: e.hidden,
                                  showInControls: e.hasNoView,
                                };
                              })
                            : [];
                        })(e)),
                          r.commit("setViews", t));
                      });
                    },
                  },
                  {
                    key: "initOnSelectFromSearch",
                    value: function () {
                      var e = this;
                      xe.bus.on("Search:select", function (t) {
                        ((e.searchData = t.data),
                          xe.bus.emit("Search:disable"));
                      });
                    },
                  },
                  {
                    key: "initOnBackClick",
                    value: function () {
                      var e = this;
                      xe.bus.on("Select:back", function () {
                        (xe.bus.emit("Search:set", e.searchData),
                          xe.bus.emit("Select:disable"),
                          xe.bus.emit("Search:enable"));
                      });
                    },
                  },
                  {
                    key: "getPanelTitle",
                    value: function (e) {
                      return e.item.designator
                        ? e.item.designator
                        : e.selectedPrimitive && e.selectedPrimitive.fullName
                          ? ""
                              .concat(
                                this.getPrimitiveNameByKind(
                                  e.selectedPrimitive.kind,
                                ),
                                " ",
                              )
                              .concat(e.selectedPrimitive.fullName)
                          : e.selectedPrimitive &&
                              this.getPrimitiveNameByKind(
                                e.selectedPrimitive.kind,
                              )
                            ? ""
                                .concat(
                                  this.getPrimitiveNameByKind(
                                    e.selectedPrimitive.kind,
                                  ),
                                  " ",
                                )
                                .concat(e.item.name)
                            : e.item.name;
                    },
                  },
                  {
                    key: "getPrimitiveNameByKind",
                    value: function (e) {
                      return ee[re(e)];
                    },
                  },
                  {
                    key: "initOnSelect",
                    value: function () {
                      var e = this;
                      xe.bus.on("select", function (t) {
                        if (t) {
                          (xe.bus.emit("Select:updateInterface", {
                            view: { title: e.getPanelTitle(t) },
                          }),
                            (e.selectData = t),
                            xe.bus.emit("Select:enable"));
                          var n = _e({}, t);
                          xe.bus.emit("Select:beforeSelect", n);
                          var i = le({
                            item: n.item,
                            native: n.native,
                            selectedPrimitive: n.selectedPrimitive,
                            showPrimitive: !0,
                          });
                          (c(i),
                            l(t.views),
                            "Search" !== t.senderId && (e.searchData = null));
                        } else
                          ((e.searchData = null),
                            c(null),
                            xe.bus.emit("Select:disable"));
                        e.setBackButtonVisibslity();
                      });
                    },
                  },
                  {
                    key: "initOnSetPadding",
                    value: function () {
                      var e = this;
                      xe.bus.on("Modal:panelWidth", function (t) {
                        var n = t.id,
                          i = t.width;
                        "Select" === n && e.setViewsPadding(i);
                      });
                    },
                  },
                  {
                    key: "setBackButtonVisibslity",
                    value: function () {
                      var e = null !== this.searchData;
                      xe.bus.emit("Select:updateInterface", {
                        view: { hasBackButton: e },
                      });
                    },
                  },
                  {
                    key: "setViewsPadding",
                    value: function (e) {
                      var t = document.querySelector(
                          '[data-modal-id="'.concat(this.metaInfo.name, '"]'),
                        ),
                        n =
                          !this.isOpened ||
                          ("BOMView" !== this.activeView &&
                            "FBOM" !== this.activeView)
                            ? 0
                            : e || t.offsetWidth;
                      xe.bus.emit("Views:updatePadding", { right: n });
                    },
                  },
                ]) && Pe(n.prototype, u),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, u;
            })(e))();
          },
        });
      window.__CORE__ && window.__CORE__.addModule(De);
    },
    10311: (e) => {
      e.exports = Vue;
    },
  },
  (e) => {
    (e.O(0, [66951, 21759], () => e((e.s = 47239))), e.O());
  },
]);
