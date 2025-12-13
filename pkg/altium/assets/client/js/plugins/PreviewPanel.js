/*! For license information please see PreviewPanel.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [22224, 74687, 11903, 318],
  {
    58490: (e, t, n) => {
      var r = n(10311);
      function o(e) {
        return (
          (o =
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
          o(e)
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (t) {
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
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
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
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
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
              if ("string" == typeof e) return l(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? l(e, t)
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
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var s = (0, window.__APP__.library.Vuex.createStore)({
        state: { items: [] },
        mutations: {
          setItems: function (e, t) {
            var n,
              r,
              o,
              i,
              u =
                null === (n = window.__CORE__) ||
                void 0 === n ||
                null === (r = n.response) ||
                void 0 === r ||
                null === (o = r.metadata) ||
                void 0 === o
                  ? void 0
                  : o.projectTypeName,
              a = u && "eagle" === u.toLowerCase();
            e.items = Array.isArray(t)
              ? a
                ? ((i = t),
                  Array.isArray(i)
                    ? i.length <= 1
                      ? i
                      : i.map(function (e) {
                          var t = +e.text
                            .split(".")
                            .slice(0, -1)
                            .join(".")
                            .split("_")
                            .pop();
                          return c(
                            c({}, e),
                            {},
                            {
                              text: isNaN(t) ? e.text : "Sheet ".concat(t + 1),
                            },
                          );
                        })
                    : [])
                : t
              : [];
          },
        },
        getters: {
          items: function (e) {
            return e.items.some(function (e) {
              return !e.img;
            }) &&
              e.items.some(function (e) {
                return e.modificationKind;
              })
              ? [].concat(
                  a(
                    e.items.filter(function (e) {
                      return e.img;
                    }),
                  ),
                  a(
                    e.items.filter(function (e) {
                      return !e.img;
                    }),
                  ),
                )
              : e.items;
          },
        },
      });
      const f = s;
      var d = { class: "preview-panel" },
        p = { key: 0, class: "preview-panel__list" },
        m = (0, r.createTextVNode)(" New visualization is available "),
        y = (0, r.createTextVNode)(" Refresh Page "),
        v = n(77453),
        h = n(77337);
      const b = function (e) {
        if (e.split(".").length <= 1 || e.endsWith(")")) return e;
        var t = e.split(".").slice(0, -1).join("."),
          n = t.split("_");
        return parseInt(n[0]) ? "[".concat(n[0], "] ").concat(n.join("_")) : t;
      };
      var w = {
          key: 1,
          class: "preview-item__img preview-item__img_placeholder",
        },
        g = { class: "preview-item__title-wrapper" },
        P = { key: 0, class: "preview-item__icon-wrapper" },
        O = { key: 0 },
        S = n(91261),
        _ = n(74839),
        D = n(75419),
        k = n(12561),
        j = window.__APP__.library.i18n.t,
        C = {
          added: "added",
          updated: "modified",
          removed: "deleted",
          unchanged: "unchanged",
        };
      const x = {
        name: "Item",
        components: { AfsText: v.A, AfsIcon: h._, AfsContextMenu: S.C },
        directives: { hint: D.h, trim: k.t },
        props: {
          img: { type: String, default: "" },
          isSelected: { type: Boolean, default: !1 },
          text: { type: String, default: "" },
          modificationKind: { type: String, default: null },
          diffsCount: { type: Number, default: null },
        },
        data: function () {
          return {
            documentHintId: (0, _.c)(),
            modificationHintId: (0, _.c)(),
            t: j,
          };
        },
        computed: {
          modificationHintKey: function () {
            return "viewer.plugins.PreviewPanel.Item.modificationHint.".concat(
              this.modificationKind,
            );
          },
          icon: function () {
            return C[this.modificationKind] || null;
          },
          iconClass: function () {
            return this.modificationKind
              ? "is-".concat(this.modificationKind)
              : "";
          },
        },
      };
      var I = n(46021);
      const E = (0, I.Z)(x, [
        [
          "render",
          function (e, t, n, o, i, c) {
            var u = (0, r.resolveComponent)("LibLazyImage"),
              a = (0, r.resolveComponent)("AfsText"),
              l = (0, r.resolveComponent)("AfsIcon"),
              s = (0, r.resolveComponent)("AfsContextMenu"),
              f = (0, r.resolveDirective)("hint"),
              d = (0, r.resolveDirective)("trim");
            return (
              (0, r.openBlock)(),
              (0, r.createElementBlock)(
                "div",
                {
                  class: (0, r.normalizeClass)([
                    "preview-item",
                    { "is-selected": n.isSelected },
                  ]),
                },
                [
                  n.img
                    ? (0, r.withDirectives)(
                        ((0, r.openBlock)(),
                        (0, r.createBlock)(
                          u,
                          {
                            key: 0,
                            src: n.img,
                            ratio: "200/136",
                            class: "preview-item__img",
                          },
                          null,
                          8,
                          ["src"],
                        )),
                        [[f, void 0, e.documentHintId]],
                      )
                    : (0, r.withDirectives)(
                        ((0, r.openBlock)(),
                        (0, r.createElementBlock)("div", w, [
                          (0, r.createVNode)(
                            a,
                            { type: "title" },
                            {
                              default: (0, r.withCtx)(function () {
                                return [
                                  (0, r.createTextVNode)(
                                    (0, r.toDisplayString)(
                                      e.t(
                                        "viewer.plugins.PreviewPanel.Item.noDifferences",
                                      ),
                                    ),
                                    1,
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                          ),
                        ])),
                        [[f, void 0, e.documentHintId]],
                      ),
                  (0, r.createElementVNode)("div", g, [
                    c.icon
                      ? ((0, r.openBlock)(),
                        (0, r.createElementBlock)("div", P, [
                          (0, r.withDirectives)(
                            (0, r.createVNode)(
                              l,
                              {
                                name: c.icon,
                                class: (0, r.normalizeClass)([
                                  "preview-item__icon",
                                  c.iconClass,
                                ]),
                              },
                              null,
                              8,
                              ["name", "class"],
                            ),
                            [[f, void 0, e.modificationHintId]],
                          ),
                        ]))
                      : (0, r.createCommentVNode)("v-if", !0),
                    (0, r.withDirectives)(
                      ((0, r.openBlock)(),
                      (0, r.createBlock)(
                        a,
                        { class: "preview-item__text", ellipsis: "" },
                        {
                          default: (0, r.withCtx)(function () {
                            return [
                              (0, r.createTextVNode)(
                                (0, r.toDisplayString)(n.text),
                                1,
                              ),
                            ];
                          }),
                          _: 1,
                        },
                      )),
                      [[d, { hint: n.text, delay: 50 }]],
                    ),
                  ]),
                  (0, r.createVNode)(
                    s,
                    {
                      id: e.modificationHintId,
                      modifiers: { y: "bottom", x: "start" },
                      type: "hint",
                    },
                    {
                      default: (0, r.withCtx)(function () {
                        return [
                          (0, r.createElementVNode)(
                            "div",
                            null,
                            (0, r.toDisplayString)(e.t(c.modificationHintKey)),
                            1,
                          ),
                          n.diffsCount && "updated" === n.modificationKind
                            ? ((0, r.openBlock)(),
                              (0, r.createElementBlock)(
                                "div",
                                O,
                                (0, r.toDisplayString)(
                                  e.t(
                                    "viewer.plugins.PreviewPanel.Item.diffsDetectedHint",
                                    { count: n.diffsCount },
                                  ),
                                ),
                                1,
                              ))
                            : (0, r.createCommentVNode)("v-if", !0),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["id"],
                  ),
                  (0, r.createVNode)(
                    s,
                    {
                      id: e.documentHintId,
                      modifiers: { y: "bottom", x: "start" },
                      type: "hint",
                    },
                    {
                      default: (0, r.withCtx)(function () {
                        return [
                          (0, r.createTextVNode)(
                            (0, r.toDisplayString)(n.text),
                            1,
                          ),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["id"],
                  ),
                ],
                2,
              )
            );
          },
        ],
        ["__scopeId", "data-v-0560aa1c"],
      ]);
      var V = { class: "item-placeholder" },
        N = n(30171);
      const T = {
          name: "ItemPlaceholder",
          components: { AfsIcon: h._, AfsText: v.A, AfsLink: N.A },
          props: { icon: { type: String, default: "" } },
          methods: {
            hasSlot: function (e) {
              return !!this.$slots[e];
            },
            onLinkClick: function (e) {
              this.$emit("click-link");
            },
          },
        },
        A = (0, I.Z)(T, [
          [
            "render",
            function (e, t, n, o, i, c) {
              var u = (0, r.resolveComponent)("AfsIcon"),
                a = (0, r.resolveComponent)("AfsText"),
                l = (0, r.resolveComponent)("AfsLink");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)("div", V, [
                  n.icon
                    ? ((0, r.openBlock)(),
                      (0, r.createBlock)(
                        u,
                        {
                          key: 0,
                          class: "item-placeholder__icon",
                          name: n.icon,
                          filled: "",
                        },
                        null,
                        8,
                        ["name"],
                      ))
                    : (0, r.createCommentVNode)("v-if", !0),
                  c.hasSlot("title")
                    ? ((0, r.openBlock)(),
                      (0, r.createBlock)(
                        a,
                        {
                          key: 1,
                          class: "item-placeholder__title",
                          type: "large title",
                        },
                        {
                          default: (0, r.withCtx)(function () {
                            return [(0, r.renderSlot)(e.$slots, "title")];
                          }),
                          _: 3,
                        },
                      ))
                    : (0, r.createCommentVNode)("v-if", !0),
                  c.hasSlot("link")
                    ? ((0, r.openBlock)(),
                      (0, r.createBlock)(
                        l,
                        { key: 2, href: "#", onClick: c.onLinkClick },
                        {
                          default: (0, r.withCtx)(function () {
                            return [(0, r.renderSlot)(e.$slots, "link")];
                          }),
                          _: 3,
                        },
                        8,
                        ["onClick"],
                      ))
                    : (0, r.createCommentVNode)("v-if", !0),
                ])
              );
            },
          ],
        ]);
      function L(e) {
        return (
          (L =
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
          L(e)
        );
      }
      function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                F(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : B(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function F(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != L(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != L(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == L(t) ? t : t + "";
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
      var H = window.__CORE__,
        K = window.__APP__,
        $ = K.analytics,
        M = K.library.Vuex,
        G = M.mapMutations,
        q = M.mapGetters;
      const U = {
          name: "PreviewPanel",
          components: {
            Item: E,
            ItemPlaceholder: A,
            AfsText: v.A,
            AfsIcon: h._,
          },
          computed: R(
            R({}, q(["items"])),
            {},
            {
              hasExpired: function () {
                return this.items.some(function (e) {
                  return e.isExpired;
                });
              },
            },
          ),
          beforeCreate: function () {
            var e = this;
            H.bus.on("PreviewPanel:activate", function () {
              return e.scrollTo();
            });
          },
          mounted: function () {
            this.scrollTo();
          },
          methods: R(
            R({}, G(["setItems"])),
            {},
            {
              scrollTo: function () {
                if (!this.hasExpired && this.$el) {
                  this.$el.scrollTo(0, 0);
                  var e = this.items.findIndex(function (e) {
                    return e.isSelected;
                  });
                  if (-1 !== e) {
                    var t = this.$refs.items[e].$el,
                      n = this.$el.getBoundingClientRect().top,
                      r = t.getBoundingClientRect().top;
                    this.$el.scrollTo(0, r - n - 16);
                  }
                }
              },
              onItemClick: function (e) {
                (this.setItems(
                  this.items.map(function (t) {
                    return R(R({}, t), {}, { isSelected: e === t.id });
                  }),
                ),
                  $.dispatchPanelsEvent("SchDocumentList", { action: "Click" }),
                  H.bus.emit("PreviewPanel:select", e));
              },
              formatName: function (e) {
                return b(e.text);
              },
              onRefreshPage: function () {
                H.bus.emit("reloadPage");
              },
            },
          ),
        },
        W = (0, I.Z)(U, [
          [
            "render",
            function (e, t, n, o, i, c) {
              var u = (0, r.resolveComponent)("AfsIcon"),
                a = (0, r.resolveComponent)("AfsText"),
                l = (0, r.resolveComponent)("Item"),
                s = (0, r.resolveComponent)("ItemPlaceholder");
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)("div", d, [
                  c.hasExpired
                    ? ((0, r.openBlock)(),
                      (0, r.createBlock)(
                        s,
                        {
                          key: 1,
                          icon: "info-16",
                          onClickLink: c.onRefreshPage,
                        },
                        {
                          title: (0, r.withCtx)(function () {
                            return [m];
                          }),
                          link: (0, r.withCtx)(function () {
                            return [y];
                          }),
                          _: 1,
                        },
                        8,
                        ["onClickLink"],
                      ))
                    : ((0, r.openBlock)(),
                      (0, r.createElementBlock)("div", p, [
                        ((0, r.openBlock)(!0),
                        (0, r.createElementBlock)(
                          r.Fragment,
                          null,
                          (0, r.renderList)(e.items, function (e) {
                            return (
                              (0, r.openBlock)(),
                              (0, r.createElementBlock)(
                                r.Fragment,
                                {
                                  key: ""
                                    .concat(e.id, "-")
                                    .concat(e.isSelected),
                                },
                                [
                                  e.groupTitle
                                    ? ((0, r.openBlock)(),
                                      (0, r.createBlock)(
                                        a,
                                        {
                                          key: 0,
                                          type: "single line",
                                          class: "preview-panel__group-title",
                                          ellipsis: "",
                                        },
                                        {
                                          default: (0, r.withCtx)(function () {
                                            return [
                                              (0, r.createVNode)(
                                                u,
                                                {
                                                  name: e.groupIcon,
                                                  filled: e.groupIconFilled,
                                                },
                                                null,
                                                8,
                                                ["name", "filled"],
                                              ),
                                              (0, r.createTextVNode)(
                                                " " +
                                                  (0, r.toDisplayString)(
                                                    e.groupTitle,
                                                  ),
                                                1,
                                              ),
                                            ];
                                          }),
                                          _: 2,
                                        },
                                        1024,
                                      ))
                                    : (0, r.createCommentVNode)("v-if", !0),
                                  (0, r.createVNode)(
                                    l,
                                    {
                                      ref_for: !0,
                                      ref: "items",
                                      class: "preview-panel__item",
                                      img: e.img,
                                      "is-selected": e.isSelected,
                                      text: e.groupItemTitle || c.formatName(e),
                                      "modification-kind": e.modificationKind,
                                      "diffs-count": e.diffsCount,
                                      onClick: function (t) {
                                        return c.onItemClick(e.id);
                                      },
                                    },
                                    null,
                                    8,
                                    [
                                      "img",
                                      "is-selected",
                                      "text",
                                      "modification-kind",
                                      "diffs-count",
                                      "onClick",
                                    ],
                                  ),
                                ],
                                64,
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
          ["__scopeId", "data-v-728b82ac"],
        ]);
      var z = n(37631),
        Z = n(74646);
      function Y(e) {
        return (
          (Y =
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
          Y(e)
        );
      }
      function X(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, J(r.key), r));
        }
      }
      function J(e) {
        var t = (function (e, t) {
          if ("object" != Y(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Y(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Y(t) ? t : t + "";
      }
      var Q = (function () {
          return (
            (e = function e(t, n, r) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.core = t),
                (this.documentViewName = n),
                (this.panel = r),
                (this.logger = t.createLogger("".concat(n, "ViewObserver"))));
            }),
            (t = [
              {
                key: "data",
                get: function () {
                  var e = this;
                  return this.allDocuments.map(function (t, n) {
                    return e.toPreviewDocument(t, n);
                  });
                },
              },
              {
                key: "displayName",
                get: function () {
                  return "";
                },
              },
              {
                key: "allDocuments",
                get: function () {
                  return [];
                },
              },
              {
                key: "activeDocumentIndex",
                get: function () {
                  return -1;
                },
              },
              {
                key: "setup",
                value: function () {
                  (this.logger.LogDebug("Setup"),
                    (this.didPanelSelect = this.didPanelSelect.bind(this)),
                    (this.onDocumentViewActivate =
                      this.onDocumentViewActivate.bind(this)),
                    window.__APP__.eventAttachHelper.onViewActivate(
                      this.onDocumentViewActivate,
                    ),
                    (this.onDocumentViewDeactivate =
                      this.onDocumentViewDeactivate.bind(this)),
                    this.core.bus.on(
                      "View:deactivate",
                      this.onDocumentViewDeactivate,
                    ),
                    (this.onPanelOpen = this.onPanelOpen.bind(this)),
                    this.core.bus.on(
                      "".concat(this.panel.name, ":activate"),
                      this.onPanelOpen,
                    ));
                },
              },
              {
                key: "updatePanelState",
                value: function () {
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0]
                    ? ((this.panel.items = []), (this.panel.hidden = !1))
                    : ((this.panel.items = this.data),
                      (this.panel.hidden = this.panel.items.length <= 1));
                },
              },
              {
                key: "activate",
                value: function () {
                  this.updatePanelState();
                },
              },
              {
                key: "didPanelSelect",
                value: function (e) {
                  (this.selectDocument(e),
                    this.core.bus.emit("PreviewPanel:disable"));
                },
              },
              {
                key: "didDocumentChanged",
                value: function () {
                  var e = this;
                  (this.panel.items.forEach(function (t, n) {
                    return (t.isSelected = n === e.activeDocumentIndex);
                  }),
                    this.core.bus.emit("PreviewPanel:updateInterface", {
                      displayName: b(this.displayName),
                    }));
                },
              },
              {
                key: "onPanelOpen",
                value: function () {
                  var e = { current: "" };
                  (this.core.bus.emit("View:get", e),
                    e.current === this.documentViewName && this.activate());
                },
              },
              {
                key: "onDocumentViewActivate",
                value: function (e) {
                  var t = this;
                  ((this.activeViewName = e.name),
                    e.name === this.documentViewName &&
                      (this.logger.LogDebug(
                        "Start lookup for ".concat(this.documentViewName),
                      ),
                      this.updatePanelState(),
                      this.didDocumentChanged(),
                      this.core.bus.on(
                        "".concat(this.documentViewName, ":documentChanged"),
                        function () {
                          return t.didDocumentChanged();
                        },
                      ),
                      this.core.bus.on(
                        "PreviewPanel:select",
                        this.didPanelSelect,
                      )));
                },
              },
              {
                key: "onDocumentViewDeactivate",
                value: function (e) {
                  e.name === this.documentViewName &&
                    (this.logger.LogDebug(
                      "Finish lookup for ".concat(this.documentViewName),
                    ),
                    this.updatePanelState(!0),
                    this.core.bus.off(
                      "".concat(this.documentViewName, ":documentChanged"),
                      this.didDocumentChanged,
                    ),
                    this.core.bus.off(
                      "PreviewPanel:select",
                      this.didPanelSelect,
                    ));
                },
              },
            ]),
            t && X(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        ee = n(99585),
        te = n(42516);
      function ne(e) {
        return (
          (ne =
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
          ne(e)
        );
      }
      function re(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = oe(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
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
          c = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((c = e.done), e);
          },
          e: function (e) {
            ((u = !0), (i = e));
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function oe(e, t) {
        if (e) {
          if ("string" == typeof e) return ie(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? ie(e, t)
                : void 0
          );
        }
      }
      function ie(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ce(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ue(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, le(r.key), r));
        }
      }
      function ae(e, t, n) {
        return (
          t && ue(e.prototype, t),
          n && ue(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function le(e) {
        var t = (function (e, t) {
          if ("object" != ne(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != ne(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == ne(t) ? t : t + "";
      }
      var se = ee.q.instance.rawMetadata,
        fe = (function () {
          return ae(
            function e() {
              ce(this, e);
            },
            null,
            [
              {
                key: "converter",
                get: function () {
                  return "orcad" ===
                    (null == se ? void 0 : se.projectTypeName.toLowerCase())
                    ? new pe()
                    : new de();
                },
              },
            ],
          );
        })(),
        de = (function () {
          return ae(
            function e() {
              ce(this, e);
            },
            [
              {
                key: "getDisplayName",
                value: function (e) {
                  return null == e ? void 0 : e.displayName;
                },
              },
              {
                key: "orderBy",
                value: function (e) {
                  for (
                    var t = [],
                      n = new Set(),
                      r = function (e) {
                        var r;
                        e &&
                          !n.has(e.id) &&
                          (null === (r = e.item) || void 0 === r
                            ? void 0
                            : r.channelKind) !== te.u5.Logical &&
                          (n.add(e.id), t.push(e));
                      },
                      o = function () {
                        var t = e[i];
                        (t.parentId &&
                          r(
                            e.find(function (e) {
                              return e.id === t.parentId;
                            }),
                          ),
                          r(t));
                      },
                      i = 0;
                    i < e.length;
                    i++
                  )
                    o();
                  return t;
                },
              },
            ],
          );
        })(),
        pe = (function () {
          return ae(
            function e() {
              ce(this, e);
            },
            [
              {
                key: "getDisplayName",
                value: function (e) {
                  var t,
                    n,
                    r,
                    o,
                    i =
                      null ===
                        (t = null == e ? void 0 : e.originalDocumentInfo) ||
                      void 0 === t
                        ? void 0
                        : t.pageName,
                    c =
                      null === (n = null == e ? void 0 : e.item) || void 0 === n
                        ? void 0
                        : n.channelName,
                    u =
                      null === (r = null == e ? void 0 : e.item) || void 0 === r
                        ? void 0
                        : r.channelKind;
                  return i && c
                    ? u === te.u5.Standard
                      ? i
                      : "".concat(i, " (").concat(c, ")")
                    : null !== (o = null != i ? i : c) && void 0 !== o
                      ? o
                      : null == e
                        ? void 0
                        : e.displayName;
                },
              },
              {
                key: "orderBy",
                value: function (e) {
                  var t,
                    n = [],
                    r = new Set(),
                    o = null == se ? void 0 : se.originalProjectTrees;
                  if (!o) return e;
                  var i,
                    c,
                    u,
                    a = function t(o) {
                      if (
                        ((function (t) {
                          2 === (null == t ? void 0 : t.kind) &&
                            e
                              .filter(function (e) {
                                return e.item.fileName === t.item;
                              })
                              .forEach(function (e, t, o) {
                                var i;
                                e &&
                                  !r.has(e.id) &&
                                  (null === (i = e.item) || void 0 === i
                                    ? void 0
                                    : i.channelKind) !== te.u5.Logical &&
                                  (r.add(e.id), n.push(e));
                              });
                        })(o),
                        o.nodes)
                      ) {
                        var i,
                          c = re(o.nodes);
                        try {
                          for (c.s(); !(i = c.n()).done; ) t(i.value);
                        } catch (e) {
                          c.e(e);
                        } finally {
                          c.f();
                        }
                      }
                    },
                    l = re(
                      null === (t = null == o ? void 0 : o[0]) || void 0 === t
                        ? void 0
                        : t.nodes.entries(),
                    );
                  try {
                    for (l.s(); !(i = l.n()).done; ) {
                      var s =
                        ((c = i.value),
                        (u = 2),
                        (function (e) {
                          if (Array.isArray(e)) return e;
                        })(c) ||
                          (function (e, t) {
                            var n =
                              null == e
                                ? null
                                : ("undefined" != typeof Symbol &&
                                    e[Symbol.iterator]) ||
                                  e["@@iterator"];
                            if (null != n) {
                              var r,
                                o,
                                i,
                                c,
                                u = [],
                                a = !0,
                                l = !1;
                              try {
                                if (((i = (n = n.call(e)).next), 0 === t)) {
                                  if (Object(n) !== n) return;
                                  a = !1;
                                } else
                                  for (
                                    ;
                                    !(a = (r = i.call(n)).done) &&
                                    (u.push(r.value), u.length !== t);
                                    a = !0
                                  );
                              } catch (e) {
                                ((l = !0), (o = e));
                              } finally {
                                try {
                                  if (
                                    !a &&
                                    null != n.return &&
                                    ((c = n.return()), Object(c) !== c)
                                  )
                                    return;
                                } finally {
                                  if (l) throw o;
                                }
                              }
                              return u;
                            }
                          })(c, u) ||
                          oe(c, u) ||
                          (function () {
                            throw new TypeError(
                              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                          })());
                      (s[0], a(s[1]));
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                  return n;
                },
              },
            ],
          );
        })();
      function me(e) {
        return (
          (me =
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
          me(e)
        );
      }
      function ye(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, ve(r.key), r));
        }
      }
      function ve(e) {
        var t = (function (e, t) {
          if ("object" != me(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != me(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == me(t) ? t : t + "";
      }
      function he(e, t, n) {
        return (
          (t = Pe(t)),
          (function (e, t) {
            if (t && ("object" == me(t) || "function" == typeof t)) return t;
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
            be()
              ? Reflect.construct(t, n || [], Pe(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function be() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (be = function () {
          return !!e;
        })();
      }
      function we(e, t) {
        return (
          (we = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          we(e, t)
        );
      }
      function ge() {
        return (
          (ge =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(e, t) && null !== (e = Pe(e));
                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : n)
                      : o.value;
                  }
                }),
          ge.apply(null, arguments)
        );
      }
      function Pe(e) {
        return (
          (Pe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Pe(e)
        );
      }
      var Oe = (function (e) {
        function t(e, n) {
          var r;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((r = he(this, t, [e, "SCHView", n])).documents = []),
            (r.didDocumentChanged = function () {
              var e,
                n,
                o,
                i = window.__CORE__;
              ((r.currentDocumentId =
                null !==
                  (o =
                    null ===
                      (n =
                        null === (e = i.views.SCHView) || void 0 === e
                          ? void 0
                          : e.activeDocument) || void 0 === n
                      ? void 0
                      : n.id) && void 0 !== o
                  ? o
                  : ""),
                ge(Pe(t.prototype), "didDocumentChanged", r).call(r));
            }),
            r
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
              t && we(e, t));
          })(t, e),
          (n = t),
          (r = [
            {
              key: "displayName",
              get: function () {
                var e = this,
                  t = this.allDocuments.find(function (t) {
                    return t.id === e.currentDocumentId;
                  });
                return t
                  ? "".concat(this.itemConverter.getDisplayName(t))
                  : "(".concat(this.allDocuments.length, ") undefined");
              },
            },
            {
              key: "activeDocumentIndex",
              get: function () {
                var e = this;
                return this.allDocuments.findIndex(function (t) {
                  return t.id === e.currentDocumentId;
                });
              },
            },
            {
              key: "allDocuments",
              get: function () {
                return this.documents;
              },
            },
            {
              key: "setup",
              value: function () {
                var e, n, r;
                ge(Pe(t.prototype), "setup", this).call(this);
                var o = window.__CORE__.views.SCHView;
                o &&
                  ((this.itemConverter = fe.converter),
                  (this.documents = this.itemConverter.orderBy(
                    null !== (e = o.documents) && void 0 !== e
                      ? e
                      : this.documents,
                  )),
                  (this.currentDocumentId =
                    null !==
                      (r =
                        null === (n = o.activeDocument) || void 0 === n
                          ? void 0
                          : n.id) && void 0 !== r
                      ? r
                      : ""));
              },
            },
            {
              key: "activate",
              value: function () {
                (ge(Pe(t.prototype), "activate", this).call(this),
                  window.__APP__.analytics.dispatchPanelsEvent(
                    "SchDocumentList",
                    { action: "Opened" },
                  ));
              },
            },
            {
              key: "selectDocument",
              value: function (e) {
                this.core.bus.emit("SCHView:showDocument", e);
              },
            },
            {
              key: "toPreviewDocument",
              value: function (e, t) {
                var n = {
                  id: e.id,
                  img: "",
                  text: this.itemConverter.getDisplayName(e),
                  isSelected: t === this.activeDocumentIndex,
                };
                return (
                  Object.defineProperty(n, "img", {
                    get: function () {
                      return e.previewUrl;
                    },
                  }),
                  n
                );
              },
            },
          ]),
          r && ye(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(Q);
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
      function _e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, De(r.key), r));
        }
      }
      function De(e) {
        var t = (function (e, t) {
          if ("object" != Se(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Se(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Se(t) ? t : t + "";
      }
      function ke(e, t, n) {
        return (
          (t = xe(t)),
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
            je()
              ? Reflect.construct(t, n || [], xe(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function je() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (je = function () {
          return !!e;
        })();
      }
      function Ce() {
        return (
          (Ce =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(e, t) && null !== (e = xe(e));
                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : n)
                      : o.value;
                  }
                }),
          Ce.apply(null, arguments)
        );
      }
      function xe(e) {
        return (
          (xe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          xe(e)
        );
      }
      function Ie(e, t) {
        return (
          (Ie = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Ie(e, t)
        );
      }
      var Ee = (function (e) {
        function t(e, n) {
          var r;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((r = ke(this, t, [e, "PCBDWFView", n])).currentDocument = null),
            (r.documents = []),
            r
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
              t && Ie(e, t));
          })(t, e),
          (n = t),
          (r = [
            {
              key: "setup",
              value: function () {
                var e,
                  n = this;
                (Ce(xe(t.prototype), "setup", this).call(this),
                  null === (e = this.core.views.PCBDWFView) ||
                    void 0 === e ||
                    e.waitForDocumentsReady().then(function (e) {
                      ((n.documents = e.documents),
                        e.index >= 0 &&
                          (n.currentDocument = n.documents[e.index]),
                        n.activate());
                    }),
                  this.core.bus.on("PCBDWFView:documentChanged", function (e) {
                    ((n.currentDocument = e), n.activate());
                  }));
              },
            },
            {
              key: "updatePanelState",
              value: function () {
                if (
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0]
                )
                  ((this.panel.items = []), (this.panel.hidden = !1));
                else {
                  if (this.activeViewName !== this.documentViewName) return;
                  ((this.panel.items = this.data),
                    (this.panel.hidden = !this.panel.items.length));
                }
              },
            },
            {
              key: "displayName",
              get: function () {
                return this.currentDocument
                  ? this.currentDocument.displayName
                  : "Loading...";
              },
            },
            {
              key: "activeDocumentIndex",
              get: function () {
                var e = this;
                return this.allDocuments.findIndex(function (t) {
                  return t === e.currentDocument;
                });
              },
            },
            {
              key: "allDocuments",
              get: function () {
                var e = this;
                return this.documents.filter(function (t) {
                  var n;
                  return (
                    t.name ===
                    (null === (n = e.currentDocument) || void 0 === n
                      ? void 0
                      : n.name)
                  );
                });
              },
            },
            {
              key: "selectDocument",
              value: function (e) {
                this.core.bus.emit(
                  "PCBDWFView:showDocument",
                  this.documents.find(function (t) {
                    return t.id === e;
                  }),
                );
              },
            },
            {
              key: "toPreviewDocument",
              value: function (e, t) {
                return {
                  id: e.uniqueId,
                  get img() {
                    return e.previewUrl;
                  },
                  text: e.displayName,
                  isSelected: e === this.currentDocument,
                  groupTitle: e.groupTitle,
                  groupIcon: e.groupIcon,
                  groupItemTitle: e.groupItemTitle,
                  groupIconFilled: e.groupIconFilled,
                };
              },
            },
          ]),
          r && _e(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(Q);
      function Ve(e) {
        return (
          (Ve =
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
          Ve(e)
        );
      }
      function Ne() {
        Ne = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          c = i.iterator || "@@iterator",
          u = i.asyncIterator || "@@asyncIterator",
          a = i.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (e) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, r) {
          var i = t && t.prototype instanceof h ? t : h,
            c = Object.create(i.prototype),
            u = new I(r || []);
          return (o(c, "_invoke", { value: k(e, n, u) }), c);
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = s;
        var d = "suspendedStart",
          p = "suspendedYield",
          m = "executing",
          y = "completed",
          v = {};
        function h() {}
        function b() {}
        function w() {}
        var g = {};
        l(g, c, function () {
          return this;
        });
        var P = Object.getPrototypeOf,
          O = P && P(P(E([])));
        O && O !== n && r.call(O, c) && (g = O);
        var S = (w.prototype = h.prototype = Object.create(g));
        function _(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function D(e, t) {
          function n(o, i, c, u) {
            var a = f(e[o], e, i);
            if ("throw" !== a.type) {
              var l = a.arg,
                s = l.value;
              return s && "object" == Ve(s) && r.call(s, "__await")
                ? t.resolve(s.__await).then(
                    function (e) {
                      n("next", e, c, u);
                    },
                    function (e) {
                      n("throw", e, c, u);
                    },
                  )
                : t.resolve(s).then(
                    function (e) {
                      ((l.value = e), c(l));
                    },
                    function (e) {
                      return n("throw", e, c, u);
                    },
                  );
            }
            u(a.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function k(t, n, r) {
          var o = d;
          return function (i, c) {
            if (o === m) throw Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw c;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = c; ; ) {
              var u = r.delegate;
              if (u) {
                var a = j(u, r);
                if (a) {
                  if (a === v) continue;
                  return a;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === d) throw ((o = y), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = m;
              var l = f(t, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? y : p), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = y), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function j(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                j(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var i = f(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"),
              (n.arg = i.arg),
              (n.delegate = null),
              v
            );
          var c = i.arg;
          return c
            ? c.done
              ? ((n[t.resultName] = c.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                v)
              : c
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function C(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function x(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function I(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(C, this),
            this.reset(!0));
        }
        function E(t) {
          if (t || "" === t) {
            var n = t[c];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o))
                      return ((n.value = t[o]), (n.done = !1), n);
                  return ((n.value = e), (n.done = !0), n);
                };
              return (i.next = i);
            }
          }
          throw new TypeError(Ve(t) + " is not iterable");
        }
        return (
          (b.prototype = w),
          o(S, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: b, configurable: !0 }),
          (b.displayName = l(w, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, w)
                : ((e.__proto__ = w), l(e, a, "GeneratorFunction")),
              (e.prototype = Object.create(S)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          _(D.prototype),
          l(D.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = D),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var c = new D(s(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          _(S),
          l(S, a, "Generator"),
          l(S, c, function () {
            return this;
          }),
          l(S, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return ((e.value = r), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (t.values = E),
          (I.prototype = {
            constructor: I,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var c = this.tryEntries[i],
                  u = c.completion;
                if ("root" === c.tryLoc) return o("end");
                if (c.tryLoc <= this.prev) {
                  var a = r.call(c, "catchLoc"),
                    l = r.call(c, "finallyLoc");
                  if (a && l) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                  } else if (a) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var c = i ? i.completion : {};
              return (
                (c.type = e),
                (c.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(c)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                v
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return (this.complete(n.completion, n.afterLoc), x(n), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    x(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: E(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function Te(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Ae(r.key), r));
        }
      }
      function Ae(e) {
        var t = (function (e, t) {
          if ("object" != Ve(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Ve(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Ve(t) ? t : t + "";
      }
      function Le(e, t, n) {
        return (
          (t = Re(t)),
          (function (e, t) {
            if (t && ("object" == Ve(t) || "function" == typeof t)) return t;
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
            Be()
              ? Reflect.construct(t, n || [], Re(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function Be() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (Be = function () {
          return !!e;
        })();
      }
      function Re(e) {
        return (
          (Re = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Re(e)
        );
      }
      function Fe(e, t) {
        return (
          (Fe = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Fe(e, t)
        );
      }
      var He = (function (e) {
          function t(e, n) {
            var r;
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              ((r = Le(this, t, [e, "PDFView", n])).buffer =
                document.createElement("canvas")),
              (r.currentDocumentId = ""),
              (r.documents = []),
              (r.renderingStopImmediately = !1));
            var o = r.core.bus;
            return (
              o.on("PDFView:cleanPreview", r.cleanPreview.bind(r)),
              o.on("PDFView:buildPreview", r.renderPreviews.bind(r)),
              o.on("PDFView:documentChanged", function (e) {
                return (r.currentDocumentId = e.toString());
              }),
              r
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
                t && Fe(e, t));
            })(t, e),
            (n = t),
            (r = [
              {
                key: "displayName",
                get: function () {
                  var e = this,
                    t = this.allDocuments.find(function (t) {
                      return t.id === e.currentDocumentId;
                    });
                  return t ? t.text : "Loading...";
                },
              },
              {
                key: "activeDocumentIndex",
                get: function () {
                  var e = this;
                  return this.allDocuments.findIndex(function (t) {
                    return t.id === e.currentDocumentId;
                  });
                },
              },
              {
                key: "allDocuments",
                get: function () {
                  return this.documents;
                },
              },
              {
                key: "selectDocument",
                value: function (e) {
                  this.core.bus.emit("PDFView:scrollToPage", parseInt(e));
                },
              },
              {
                key: "toPreviewDocument",
                value: function (e, t) {
                  return {
                    id: e.id,
                    img: e.img,
                    text: e.text,
                    isSelected: t === this.activeDocumentIndex,
                  };
                },
              },
              {
                key: "cleanPreview",
                value: function () {
                  (this.core.bus.emit("PreviewPanel:disable"),
                    (this.panel.items = []),
                    (this.documents = []),
                    (this.renderingStopImmediately = !0));
                },
              },
              {
                key: "renderPreviews",
                value: function (e) {
                  return (
                    (t = this),
                    (n = void 0),
                    (r = void 0),
                    (o = Ne().mark(function t() {
                      var n, r, o, i, c;
                      return Ne().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                ((n = this.buffer),
                                  (r = e.numPages),
                                  (this.documents = []),
                                  (this.renderingStopImmediately = !1),
                                  (o = 1));
                              case 5:
                                if (!(o <= r)) {
                                  t.next = 20;
                                  break;
                                }
                                return ((t.next = 8), e.getPage(o));
                              case 8:
                                return (
                                  (i = t.sent),
                                  (c = i.getViewport({ scale: 0.25 })),
                                  (n.width = Math.floor(c.width)),
                                  (n.height = Math.floor(c.height)),
                                  (t.next = 14),
                                  i.render({
                                    canvasContext: n.getContext("2d", {
                                      alpha: !1,
                                    }),
                                    intent: "display",
                                    includeAnnotationStorage: !1,
                                    viewport: c,
                                  }).promise
                                );
                              case 14:
                                if (!this.renderingStopImmediately) {
                                  t.next = 16;
                                  break;
                                }
                                return t.abrupt("return");
                              case 16:
                                this.documents.push({
                                  id: o.toString(),
                                  img: n.toDataURL(),
                                  text: "Page ".concat(o),
                                  isSelected: !1,
                                });
                              case 17:
                                (o++, (t.next = 5));
                                break;
                              case 20:
                                ((this.currentDocumentId =
                                  this.documents[0].id),
                                  (this.panel.items = this.documents),
                                  (this.panel.hidden = !1));
                              case 23:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    })),
                    new (r || (r = Promise))(function (e, i) {
                      function c(e) {
                        try {
                          a(o.next(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function u(e) {
                        try {
                          a(o.throw(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function a(t) {
                        var n;
                        t.done
                          ? e(t.value)
                          : ((n = t.value),
                            n instanceof r
                              ? n
                              : new r(function (e) {
                                  e(n);
                                })).then(c, u);
                      }
                      a((o = o.apply(t, n || [])).next());
                    })
                  );
                  var t, n, r, o;
                },
              },
            ]),
            r && Te(n.prototype, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, r;
        })(Q),
        Ke = n(36337);
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
      function Me(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Ge(r.key), r));
        }
      }
      function Ge(e) {
        var t = (function (e, t) {
          if ("object" != $e(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != $e(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == $e(t) ? t : t + "";
      }
      function qe(e, t, n) {
        return (
          (t = We(t)),
          (function (e, t) {
            if (t && ("object" == $e(t) || "function" == typeof t)) return t;
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
            Ue()
              ? Reflect.construct(t, n || [], We(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function Ue() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (Ue = function () {
          return !!e;
        })();
      }
      function We(e) {
        return (
          (We = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          We(e)
        );
      }
      function ze(e, t) {
        return (
          (ze = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          ze(e, t)
        );
      }
      var Ze = (function (e) {
        function t(e, n) {
          var r;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((r = qe(this, t, [e, "SchCompareView", n])).documents = []),
            (r.didDocumentChanged = function () {
              r.panel.items.forEach(function (e, t) {
                return (e.isSelected = e.id === r.currentDocumentId);
              });
              var e = b(r.displayName);
              r.core.bus.emit("PreviewPanel:updateInterface", {
                displayName: e,
              });
            }),
            (r.documents = []),
            r.core.bus.on("SchCompareEngine:documents", function (e) {
              r.documents = e;
            }),
            (r.currentDocumentId = ""),
            r.core.bus.on("SchCompareEngine:didDocumentAttach", function (e) {
              ((r.currentDocumentId = e.uniqueId), r.didDocumentChanged());
            }),
            r.core.bus.on(
              "SchCompareEngine:didDocumentAttachError",
              function (e) {
                ((r.currentDocumentId = e.uniqueId), r.didDocumentChanged());
              },
            ),
            r
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
              t && ze(e, t));
          })(t, e),
          (n = t),
          (r = [
            {
              key: "displayName",
              get: function () {
                var e = this,
                  t = this.allDocuments.find(function (t) {
                    return t.uniqueId === e.currentDocumentId;
                  });
                return t ? "".concat(t.displayName) : "";
              },
            },
            {
              key: "activeDocumentIndex",
              get: function () {
                var e = this;
                return this.allDocuments.findIndex(function (t) {
                  return t.uniqueId === e.currentDocumentId;
                });
              },
            },
            {
              key: "allDocuments",
              get: function () {
                return this.documents;
              },
            },
            {
              key: "selectDocument",
              value: function (e) {
                this.core.bus.emit("SchCompareEngine:showDocument", e);
              },
            },
            {
              key: "toPreviewDocument",
              value: function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  c,
                  u,
                  a = this.core.response.metadata.LogicalChanges,
                  l =
                    ((null ===
                      (i =
                        null ===
                          (o =
                            null ===
                              (r =
                                null === (n = a.Documents) || void 0 === n
                                  ? void 0
                                  : n.find(function (t) {
                                      return t.Id === e.id;
                                    })) || void 0 === r
                              ? void 0
                              : r.Items) || void 0 === o
                          ? void 0
                          : o.filter(function (e) {
                              return "NotChanged" !== e.ModificationKind;
                            })) || void 0 === i
                      ? void 0
                      : i.length) || 0) +
                    ((null ===
                      (u =
                        null === (c = a.Nets) || void 0 === c
                          ? void 0
                          : c.filter(function (t) {
                              return (0, Ke.o)(t, e.id);
                            })) || void 0 === u
                      ? void 0
                      : u.length) || 0),
                  s = e.isAdded
                    ? "added"
                    : e.isRemoved
                      ? "removed"
                      : l
                        ? "updated"
                        : "unchanged",
                  f = {
                    id: e.uniqueId,
                    img: "",
                    text: e.displayName,
                    isSelected: t === this.activeDocumentIndex,
                    modificationKind: s,
                    diffsCount: l,
                    disabled: !!e.isRemoved,
                  };
                return (
                  Object.defineProperty(f, "img", {
                    get: function () {
                      return e.previewUrl;
                    },
                  }),
                  f
                );
              },
            },
          ]),
          r && Me(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(Q);
      function Ye(e) {
        return (
          (Ye =
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
          Ye(e)
        );
      }
      function Xe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Xe(Object(n), !0).forEach(function (t) {
                Qe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Xe(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Qe(e, t, n) {
        return (
          (t = tt(t)) in e
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
      function et(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, tt(r.key), r));
        }
      }
      function tt(e) {
        var t = (function (e, t) {
          if ("object" != Ye(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != Ye(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == Ye(t) ? t : t + "";
      }
      function nt(e, t, n) {
        return (
          (t = ot(t)),
          (function (e, t) {
            if (t && ("object" == Ye(t) || "function" == typeof t)) return t;
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
            rt()
              ? Reflect.construct(t, n || [], ot(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function rt() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (rt = function () {
          return !!e;
        })();
      }
      function ot(e) {
        return (
          (ot = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ot(e)
        );
      }
      function it(e, t) {
        return (
          (it = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          it(e, t)
        );
      }
      var ct = window.__CORE__,
        ut = (0, window.__APP__.createModule)({
          type: "Plugin",
          description: "PreviewPanel",
          create: function (e) {
            var t = (function (e) {
              function t() {
                var e;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  ((e = nt(this, t, [
                    {
                      name: "PreviewPanel",
                      displayName: "Preview Panel",
                      displayIcon: "schematic-16",
                      comment: "PreviewPanel",
                      description: "PreviewPanel",
                      dependencies: [],
                      owner: "SCHView,PCBDWFView,PDFView,SchCompareView",
                      displayDropdown: !0,
                      view: {
                        type: "modal",
                        config: { type: "aside-left", fullHeight: !1 },
                      },
                    },
                  ])).logger = window.__CORE__.createLogger("PreviewPanel")),
                  (e.schViewObserver = new Oe(ct, e)),
                  (e.pcbdwfViewObserver = new Ee(ct, e)),
                  (e.pdfViewObserver = new He(ct, e)),
                  (e.schCompareViewObserver = new Ze(ct, e)),
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
                    t && it(e, t));
                })(t, e),
                (n = t),
                (o = [
                  {
                    key: "events",
                    get: function () {
                      return ["PreviewPanel:select"];
                    },
                  },
                  {
                    key: "hidden",
                    get: function () {
                      return this.isHidden;
                    },
                    set: function (e) {
                      ((this.isHidden = e),
                        ct.bus.emit("PreviewPanel:updateInterface", {
                          hidden: e,
                        }));
                    },
                  },
                  {
                    key: "items",
                    get: function () {
                      return s.state.items;
                    },
                    set: function (e) {
                      var t;
                      ((t = e), s.commit("setItems", t));
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      var e = this;
                      return new Promise(function (t) {
                        (e.logger.LogDebug("Setup"),
                          e.schViewObserver.setup(),
                          e.pcbdwfViewObserver.setup(),
                          e.pdfViewObserver.setup(),
                          e.schCompareViewObserver.setup(),
                          t());
                      });
                    },
                  },
                  {
                    key: "activate",
                    value: function () {
                      var e;
                      (this.logger.LogDebug("Activate"),
                        this.hasView ||
                          ((this.hasView = !0),
                          (this.view =
                            ((e = this.metaInfo.name),
                            (0, r.createApp)(W)
                              .use(f)
                              .use(z.X)
                              .use(Z.K)
                              .mount("#".concat(e))))),
                        ct.response.storage.isExpired &&
                          (this.items = this.items.map(function (e) {
                            return Je(Je({}, e), {}, { isExpired: !0 });
                          })));
                    },
                  },
                  {
                    key: "deactivate",
                    value: function () {
                      this.logger.LogDebug("Deactivate");
                    },
                  },
                ]) && et(n.prototype, o),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, o;
            })(e);
            return new t();
          },
        });
      ct && ct.addModule(ut);
    },
    10311: (e) => {
      e.exports = Vue;
    },
  },
  (e) => {
    (e.O(0, [66951, 21759], () => e((e.s = 58490))), e.O());
  },
]);
