"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [78918, 74687, 11903, 318],
  {
    45321: (e, t, n) => {
      var o = n(85425),
        i = n(10311),
        r = { added: 1, updated: 2, removed: 3 },
        c = { 1: "added", 2: "modified", 3: "deleted" };
      function l(e) {
        return (
          (l =
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
          l(e)
        );
      }
      function a(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function s(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != l(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != l(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == l(t) ? t : t + "";
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
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var m = (0, window.__APP__.library.Vuex.createStore)({
        state: {
          data: [],
          differencesCount: 0,
          search: "",
          isOpenedFilters: !1,
          filters: [
            { id: 1, name: "All", isActive: !0 },
            { id: 2, name: "Component" },
            { id: 3, name: "Net" },
          ],
        },
        getters: {
          activeFilter: function (e) {
            var t;
            return e.isOpenedFilters
              ? null == e || null === (t = e.filters) || void 0 === t
                ? void 0
                : t.find(function (e) {
                    return e.isActive;
                  })
              : e.filters[0];
          },
          getItemById: function (e) {
            return function (t) {
              return e.data.reduce(function (e, n) {
                return (
                  n.items.map(function (n) {
                    var o;
                    if (
                      n.id === t ||
                      (null != n &&
                        null !== (o = n.subParts) &&
                        void 0 !== o &&
                        o.some(function (e) {
                          return e.Id === t;
                        }))
                    )
                      e = n;
                    else if (n.isGroup) {
                      var i,
                        r = (function (e, t) {
                          var n =
                            ("undefined" != typeof Symbol &&
                              e[Symbol.iterator]) ||
                            e["@@iterator"];
                          if (!n) {
                            if (
                              Array.isArray(e) ||
                              (n = (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e) return d(e, t);
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
                                        ? d(e, t)
                                        : void 0
                                  );
                                }
                              })(e)) ||
                              (t && e && "number" == typeof e.length)
                            ) {
                              n && (e = n);
                              var o = 0,
                                i = function () {};
                              return {
                                s: i,
                                n: function () {
                                  return o >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[o++] };
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
                          var r,
                            c = !0,
                            l = !1;
                          return {
                            s: function () {
                              n = n.call(e);
                            },
                            n: function () {
                              var e = n.next();
                              return ((c = e.done), e);
                            },
                            e: function (e) {
                              ((l = !0), (r = e));
                            },
                            f: function () {
                              try {
                                c || null == n.return || n.return();
                              } finally {
                                if (l) throw r;
                              }
                            },
                          };
                        })(n.items);
                      try {
                        for (r.s(); !(i = r.n()).done; ) {
                          var c = i.value;
                          c.id === t && (e = c);
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                    }
                  }),
                  e
                );
              }, null);
            };
          },
          filteredData: function (e) {
            var t,
              n =
                null == e || null === (t = e.filters) || void 0 === t
                  ? void 0
                  : t.find(function (e) {
                      return e.isActive;
                    }).id,
              o =
                e.isOpenedFilters && 1 !== n
                  ? null == e
                    ? void 0
                    : e.data.filter(function (e) {
                        return e.type === n;
                      })
                  : e.data;
            return (
              e.search &&
                e.isOpenedFilters &&
                (o = o.map(function (t) {
                  return u(
                    u({}, t),
                    {},
                    {
                      items: t.items.filter(function (t) {
                        return (
                          t.name
                            .toLowerCase()
                            .includes(e.search.toLowerCase()) ||
                          (t.isGroup &&
                            t.items.some(function (t) {
                              return t.name
                                .toLowerCase()
                                .includes(e.search.toLowerCase());
                            }))
                        );
                      }),
                    },
                  );
                })),
              o
            );
          },
        },
        mutations: {
          setSearch: function (e, t) {
            e.search = t;
          },
          setFilters: function (e, t) {
            e.filters = t;
          },
          openFilters: function (e) {
            e.isOpenedFilters = !0;
          },
          closeFilters: function (e) {
            e.isOpenedFilters = !1;
          },
          setData: function (e, t) {
            e.data = t;
          },
          switchItemExpand: function (e, t) {
            e.data = e.data.map(function (e) {
              return u(
                u({}, e),
                {},
                {
                  items: e.items.map(function (e) {
                    return u(
                      u({}, e),
                      {},
                      {
                        isExpand:
                          e.id === t
                            ? !(null != e && e.isExpand)
                            : null == e
                              ? void 0
                              : e.isExpand,
                      },
                    );
                  }),
                },
              );
            });
          },
          setSelectedItem: function (e, t) {
            var n = t.item,
              o = t.connectivity;
            e.data = e.data.map(function (e) {
              return u(
                u({}, e),
                {},
                {
                  items: e.items.map(function (e) {
                    var t =
                      e.id === n.id ||
                      (!(null == e || !e.isGroup) &&
                        e.items.some(function (e) {
                          return e.id === n.id;
                        })) ||
                      (!!e.connectivities &&
                        e.connectivities.some(function (e) {
                          return o && o.id === e.id;
                        }));
                    return u(
                      u(
                        {},
                        u(
                          u({}, e),
                          {},
                          {
                            items: e.isGroup
                              ? e.items.map(function (e) {
                                  return u(
                                    u({}, e),
                                    {},
                                    { isSelected: e.id === n.id },
                                  );
                                })
                              : [],
                          },
                        ),
                      ),
                      {},
                      { isSelected: t, isExpand: t || e.isExpand },
                      e.connectivities
                        ? {
                            connectivities: e.connectivities.map(function (e) {
                              return u(
                                u({}, e),
                                {},
                                { isSelected: o && o.id === e.id },
                              );
                            }),
                          }
                        : {},
                    );
                  }),
                },
              );
            });
          },
          setDifferencesCount: function (e, t) {
            e.differencesCount = t;
          },
        },
      });
      const f = m;
      var p = { class: "app-compare-document" },
        v = { class: "app-compare-document__content" },
        h = { key: 0, class: "app-compare-document__content-wrapper" },
        y = { key: 1, class: "app-compare-document__content-no-data" },
        g = { class: "compare-document__header-container" },
        b = { class: "compare-document__header-title-wrapper" },
        C = { class: "compare-document__header-desc-wrapper" },
        w = n(18154),
        _ = n(69314),
        k = n(77453),
        I = n(23870),
        O = n(25050),
        S = n(12561),
        B = window.__APP__.library.i18n.t;
      const P = {
        name: "AppHeader",
        components: {
          AfsSubHeader: w.A,
          AfsButtonIcon: _.A,
          AfsText: k.A,
          AfsBadge: I.B,
        },
        directives: { trim: S.t },
        props: {
          count: { type: Number, default: 0 },
          filteredCount: { type: Number, default: 0 },
        },
        data: function () {
          return { isActiveFilters: !1, t: B };
        },
        computed: {
          icon: function () {
            return this.isActiveFilters
              ? "filter-filled-16"
              : "filter-empty-16";
          },
          computedCount: function () {
            return this.isActiveFilters
              ? "".concat(this.filteredCount, "/").concat(this.count)
              : this.count;
          },
          schematicCompareVersion: function () {
            return O.Z.getLicenseDetails(O.Z.names.schCompare).label;
          },
        },
        methods: {
          toggleFilters: function () {
            ((this.isActiveFilters = !this.isActiveFilters),
              this.$emit("change-filters", this.isActiveFilters));
          },
        },
      };
      var D = n(46021);
      const N = (0, D.Z)(P, [
        [
          "render",
          function (e, t, n, o, r, c) {
            var l = (0, i.resolveComponent)("AfsText"),
              a = (0, i.resolveComponent)("AfsBadge"),
              u = (0, i.resolveComponent)("AfsButtonIcon"),
              s = (0, i.resolveComponent)("AfsSubHeader"),
              d = (0, i.resolveDirective)("trim");
            return (
              (0, i.openBlock)(),
              (0, i.createBlock)(
                s,
                { class: "compare-document__header", center: !1 },
                {
                  default: (0, i.withCtx)(function () {
                    return [
                      (0, i.createElementVNode)("div", g, [
                        (0, i.createElementVNode)("div", b, [
                          (0, i.createVNode)(
                            l,
                            { class: "compare-document__header-title" },
                            {
                              default: (0, i.withCtx)(function () {
                                return [
                                  (0, i.createTextVNode)(
                                    (0, i.toDisplayString)(
                                      e.t(
                                        "viewer.plugins.BOMCompareDocument.differences",
                                      ),
                                    ),
                                    1,
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                          ),
                          (0, i.createElementVNode)("div", C, [
                            (0, i.withDirectives)(
                              ((0, i.openBlock)(),
                              (0, i.createBlock)(
                                l,
                                { class: "compare-document__header-desc" },
                                {
                                  default: (0, i.withCtx)(function () {
                                    return [
                                      (0, i.createTextVNode)(
                                        " (" +
                                          (0, i.toDisplayString)(
                                            c.computedCount,
                                          ) +
                                          ") ",
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 1,
                                },
                              )),
                              [[d, { hint: c.computedCount, delay: 50 }]],
                            ),
                          ]),
                          c.schematicCompareVersion
                            ? ((0, i.openBlock)(),
                              (0, i.createBlock)(
                                a,
                                {
                                  key: 0,
                                  size: "small",
                                  type: "success",
                                  class: (0, i.normalizeClass)([
                                    "version-badge",
                                    "version-badge-" +
                                      c.schematicCompareVersion.toLowerCase(),
                                  ]),
                                },
                                {
                                  default: (0, i.withCtx)(function () {
                                    return [
                                      (0, i.createTextVNode)(
                                        (0, i.toDisplayString)(
                                          c.schematicCompareVersion,
                                        ),
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 1,
                                },
                                8,
                                ["class"],
                              ))
                            : (0, i.createCommentVNode)("v-if", !0),
                        ]),
                        (0, i.createVNode)(
                          u,
                          {
                            size: "lg",
                            transparent: "",
                            icon: c.icon,
                            class: (0, i.normalizeClass)([
                              "compare-document__header-icon",
                              { "is-active": e.isActiveFilters },
                            ]),
                            onClick:
                              t[0] ||
                              (t[0] = function (e) {
                                return c.toggleFilters();
                              }),
                          },
                          null,
                          8,
                          ["icon", "class"],
                        ),
                      ]),
                    ];
                  }),
                  _: 1,
                },
              )
            );
          },
        ],
        ["__scopeId", "data-v-f8a615a0"],
      ]);
      var j = { class: "app-compare-document-filters" },
        A = n(85578),
        x = n(15938);
      function V(e) {
        return (
          (V =
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
          V(e)
        );
      }
      function E(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                T(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : E(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function T(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != V(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != V(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == V(t) ? t : t + "";
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
      var M = window.__APP__,
        K = M.library.Vuex,
        G = K.mapState,
        L = K.mapMutations,
        z = M.utils.debounce;
      const H = {
          name: "AppFilters",
          components: { AfsSearch: A.A, AfsTabs: x.Z },
          computed: F(
            F({}, G({ search: "search", _filters: "filters" })),
            {},
            {
              value: {
                get: function () {
                  return this.search;
                },
                set: function (e) {
                  var t = this;
                  z(
                    "search",
                    function () {
                      return t.setSearch(e);
                    },
                    150,
                  );
                },
              },
              filters: {
                get: function () {
                  return this._filters;
                },
                set: function (e) {
                  this.setFilters(e);
                },
              },
            },
          ),
          mounted: function () {
            var e = this.$refs.input;
            e && e.focus();
          },
          methods: F({}, L(["setSearch", "setFilters"])),
        },
        Z = (0, D.Z)(H, [
          [
            "render",
            function (e, t, n, o, r, c) {
              var l = (0, i.resolveComponent)("AfsSearch"),
                a = (0, i.resolveComponent)("AfsTabs");
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)("div", j, [
                  (0, i.createVNode)(
                    l,
                    {
                      ref: "input",
                      modelValue: c.value,
                      "onUpdate:modelValue":
                        t[0] ||
                        (t[0] = function (e) {
                          return (c.value = e);
                        }),
                      "has-remove-btn": "",
                      class: "app-compare-document-filters__section",
                      onKeyup:
                        t[1] ||
                        (t[1] = (0, i.withModifiers)(function () {}, ["stop"])),
                      onKeydown:
                        t[2] ||
                        (t[2] = (0, i.withModifiers)(function () {}, ["stop"])),
                    },
                    null,
                    8,
                    ["modelValue"],
                  ),
                  (0, i.createVNode)(
                    a,
                    {
                      modelValue: c.filters,
                      "onUpdate:modelValue":
                        t[3] ||
                        (t[3] = function (e) {
                          return (c.filters = e);
                        }),
                      class: "app-compare-document-filters__section",
                    },
                    null,
                    8,
                    ["modelValue"],
                  ),
                ])
              );
            },
          ],
        ]);
      var R = { class: "app-compare-document-note" },
        U = n(77337),
        $ = n(91261),
        q = n(75419),
        Q = n(74839),
        W = window.__APP__.library.i18n.t;
      const J = {
          name: "BaseNote",
          components: { AfsText: k.A, AfsIcon: U._, AfsContextMenu: $.C },
          directives: { hint: q.h },
          data: function () {
            return { hintId: (0, Q.c)(), menuId: (0, Q.c)(), t: W };
          },
          computed: {
            hintConfig: function () {
              return {
                type: "hint",
                id: this.hintId,
                modifiers: { y: "bottom", x: "start" },
                offset: 8,
                viewboxOffset: 0,
              };
            },
          },
        },
        X = (0, D.Z)(J, [
          [
            "render",
            function (e, t, n, o, r, c) {
              var l = (0, i.resolveComponent)("AfsText"),
                a = (0, i.resolveComponent)("AfsIcon"),
                u = (0, i.resolveComponent)("AfsContextMenu"),
                s = (0, i.resolveDirective)("hint");
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)("div", R, [
                  (0, i.createVNode)(
                    l,
                    { class: "app-compare-document-note__text" },
                    {
                      default: (0, i.withCtx)(function () {
                        return [
                          (0, i.createTextVNode)(
                            (0, i.toDisplayString)(
                              e.t(
                                "viewer.plugins.CompareDocument.logicalOnlyNote",
                              ),
                            ),
                            1,
                          ),
                        ];
                      }),
                      _: 1,
                    },
                  ),
                  (0, i.withDirectives)(
                    (0, i.createVNode)(
                      a,
                      {
                        name: "question-16",
                        class: "app-compare-document-note__icon",
                      },
                      null,
                      512,
                    ),
                    [[s, { id: e.hintId, delay: 100 }]],
                  ),
                  (0, i.createVNode)(
                    u,
                    (0, i.mergeProps)(c.hintConfig, { ref: e.menuId }),
                    {
                      default: (0, i.withCtx)(function () {
                        return [
                          (0, i.createTextVNode)(
                            (0, i.toDisplayString)(
                              e.t(
                                "viewer.plugins.CompareDocument.graphicalSoonHint",
                              ),
                            ),
                            1,
                          ),
                        ];
                      }),
                      _: 1,
                    },
                    16,
                  ),
                ])
              );
            },
          ],
        ]);
      var Y = { class: "section" },
        ee = { class: "item__row" },
        te = { class: "item__title-wrapper" },
        ne = { key: 0, class: "item__groups-wrapper" },
        oe = (0, i.createTextVNode)(", "),
        ie = (0, i.createTextVNode)("   "),
        re = { key: 0, class: "item__show_all" },
        ce = (0, i.createTextVNode)(" Show All "),
        le = { key: 1, class: "item__document-selector" },
        ae = { key: 0, class: "item__extra" },
        ue = { key: 0, class: "item__props" },
        se = { class: "item__prop-value" },
        de = { key: 1, class: "item__connectivities" },
        me = { class: "item__connectivities__title" },
        fe = { class: "item__connectivity-group-items-wrapper" },
        pe = (0, i.createTextVNode)(", "),
        ve = n(30171),
        he = n(36337);
      function ye(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ge(e);
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
              if ("string" == typeof e) return ge(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ge(e, t)
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
      function ge(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var be = function (e) {
          return e.map(function (e) {
            return { id: e.GroupId, name: e.DisplayText, order: e.OrderIndex };
          });
        },
        Ce = function (e, t) {
          var n,
            o,
            i,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "Component";
          return {
            id:
              (null == t ? void 0 : t.Id) ||
              (null == t ? void 0 : t.ObjectHandle) ||
              (0, Q.c)(),
            docId:
              (null == e ? void 0 : e.Handle) ||
              (null == e ? void 0 : e.Id) ||
              (0, Q.c)(),
            name: Oe(null == t ? void 0 : t.DisplayText) || "",
            designator: (null == t ? void 0 : t.Designator) || "",
            comment: (null == t ? void 0 : t.Comment) || "",
            description: (null == t ? void 0 : t.Description) || "",
            modificationKind: null == t ? void 0 : t.ModificationKind,
            modificationKindId: Se(null == t ? void 0 : t.ModificationKind),
            type: r,
            groupId: null == t ? void 0 : t.GroupId,
            footprint: null == t ? void 0 : t.Footprint,
            footprintDesc: null == t ? void 0 : t.FootprintDesc,
            changedProps:
              (null == t || null === (n = t.ChangedProperties) || void 0 === n
                ? void 0
                : n.length) && _e(t.ChangedProperties),
            changesGroups:
              (null === (o = t.ChangesGroups) || void 0 === o
                ? void 0
                : o.length) && be(t.ChangesGroups),
            params:
              (null == t || null === (i = t.Items) || void 0 === i
                ? void 0
                : i.length) && we(t.Items),
            isSelected: !1,
          };
        },
        we = function (e) {
          return e.map(function (e) {
            var t;
            return {
              id: e.Id || e.ObjectHandle,
              name: e.DisplayText || "",
              value: e.Value || "",
              type: null == e ? void 0 : e.ObjectKind,
              modificationKind: null == e ? void 0 : e.ModificationKind,
              modificationKindId: Se(null == e ? void 0 : e.ModificationKind),
              groupId: null == e ? void 0 : e.GroupId,
              changedProps:
                (null == e || null === (t = e.ChangedProperties) || void 0 === t
                  ? void 0
                  : t.length) && _e(e.ChangedProperties),
            };
          });
        },
        _e = function (e) {
          return e.map(function (e) {
            return {
              name: e.PropertyName || "",
              oldValue: e.OldValue,
              value: e.NewValue,
              groupId: null == e ? void 0 : e.GroupId,
            };
          });
        },
        ke = function (e, t) {
          return e.reduce(function (e, n) {
            if (
              "Pin" === n.ObjectKind &&
              n.OwnerId &&
              "NotChanged" !== n.ModificationKind
            ) {
              var o = t.get(n.OwnerId);
              e.push({
                id: n.Id || n.ObjectHandle,
                name: n.DisplayText,
                owner: o,
                modificationKindId: Se(n.ModificationKind),
                modificationKind: n.ModificationKind,
                type: "Pin",
                isSelected: !1,
              });
            }
            return e;
          }, []);
        },
        Ie = function (e, t, n) {
          return e.map(function (e, o) {
            var i, r, c, l;
            return {
              id:
                (null == e ? void 0 : e.Handle) ||
                (null == e ? void 0 : e.ObjectHandle) ||
                "net-".concat(o),
              name: (null == e ? void 0 : e.DisplayText) || "",
              modificationKindId: Se(null == e ? void 0 : e.ModificationKind),
              modificationKind: null == e ? void 0 : e.ModificationKind,
              type: "Net",
              description: e.Comment || "",
              changedProps:
                (null == e || null === (i = e.ChangedProperties) || void 0 === i
                  ? void 0
                  : i.length) && _e(e.ChangedProperties),
              changesGroups:
                (null === (r = e.ChangesGroups) || void 0 === r
                  ? void 0
                  : r.length) && be(e.ChangesGroups),
              subParts: null == e ? void 0 : e.Items,
              connectivities: ke(null == e ? void 0 : e.Items, n),
              documents:
                null == t
                  ? void 0
                  : t.reduce(function (t, n) {
                      var o;
                      return (
                        n.Id &&
                          null != e &&
                          null !== (o = e.Items) &&
                          void 0 !== o &&
                          o.some(function (e) {
                            return n.Id === e.DocumentId;
                          }) &&
                          t.push({ id: n.Id, isModified: (0, he.o)(e, n.Id) }),
                        t
                      );
                    }, []),
              changes:
                (null == e || null === (c = e.Items) || void 0 === c
                  ? void 0
                  : c.length) &&
                ((l = e.Items),
                l.reduce(function (e, t) {
                  return (
                    (e[null == t ? void 0 : t.ObjectKind] =
                      e[null == t ? void 0 : t.ObjectKind] || []),
                    e[null == t ? void 0 : t.ObjectKind].push(
                      (function (e) {
                        return {
                          id: (0, Q.c)(),
                          handleId: e.Handle,
                          name: e.DisplayText || "",
                          modificationKindId: Se(
                            null == e ? void 0 : e.ModificationKind,
                          ),
                          modificationKind:
                            null == e ? void 0 : e.ModificationKind,
                        };
                      })(t),
                    ),
                    e
                  );
                }, {})),
              isSelected: !1,
            };
          });
        },
        Oe = function (e) {
          return e.startsWith("Component ") ? e.replace("Component ", "") : e;
        },
        Se = function (e) {
          return (null == r ? void 0 : r[e.toLowerCase()]) || null;
        },
        Be = { class: "document-selector" },
        Pe = ["onMousedown"],
        De = n(14914),
        Ne = n(65725);
      function je(e) {
        return (
          (je =
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
          je(e)
        );
      }
      function Ae(e, t) {
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
      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ae(Object(n), !0).forEach(function (t) {
                Ve(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ae(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Ve(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != je(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != je(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == je(t) ? t : t + "";
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
      var Ee = window.__CORE__;
      const Fe = {
          name: "ContextMenuList",
          components: { ContextMenu: $.C, AfsCText: k.A, AfsIcon: U._ },
          directives: { dropdown: Ne.d },
          props: { item: { default: function () {}, type: Object } },
          data: function () {
            return { uid: (0, De.x0)() };
          },
          computed: {
            engine: function () {
              return Ee.engines.SchCompareEngine;
            },
            documents: function () {
              var e = this;
              return this.engine.allDocuments.reduce(function (t, n, o) {
                var i;
                return (
                  e.item.documents.some(function (e) {
                    return e.id === n.id;
                  }) &&
                    t.push({
                      id: n.id,
                      name: n.displayName,
                      active: o === e.engine.currentDocumentIndex,
                      isModified:
                        (null ===
                          (i = e.item.documents.find(function (e) {
                            return e.id === n.id;
                          })) || void 0 === i
                          ? void 0
                          : i.isModified) || !1,
                    }),
                  t
                );
              }, []);
            },
          },
          methods: {
            onItemClick: function (e, t) {
              this.$emit("click-item", xe(xe({}, e), {}, { currentDocId: t }));
            },
          },
        },
        Te = (0, D.Z)(Fe, [
          [
            "render",
            function (e, t, n, o, r, c) {
              var l = (0, i.resolveComponent)("AfsIcon"),
                a = (0, i.resolveComponent)("AfsCText"),
                u = (0, i.resolveComponent)("ContextMenu"),
                s = (0, i.resolveDirective)("dropdown");
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)("div", Be, [
                  (0, i.withDirectives)(
                    (0, i.createVNode)(
                      l,
                      {
                        class: "document-selector_icon",
                        name: "schematic-multi-16",
                        onClick:
                          t[0] ||
                          (t[0] = (0, i.withModifiers)(function () {}, [
                            "prevent",
                          ])),
                      },
                      null,
                      512,
                    ),
                    [[s, void 0, r.uid]],
                  ),
                  (0, i.createVNode)(
                    u,
                    {
                      id: r.uid,
                      ref: "contextMenu",
                      type: "dropdown",
                      modifiers: { y: "bottom", x: "end" },
                    },
                    {
                      default: (0, i.withCtx)(function (e) {
                        var t = e.getBEMClass;
                        return [
                          (0, i.createElementVNode)(
                            "ul",
                            { class: (0, i.normalizeClass)(t("section")) },
                            [
                              ((0, i.openBlock)(!0),
                              (0, i.createElementBlock)(
                                i.Fragment,
                                null,
                                (0, i.renderList)(c.documents, function (e) {
                                  return (
                                    (0, i.openBlock)(),
                                    (0, i.createElementBlock)(
                                      "li",
                                      {
                                        key: "document-".concat(e.id),
                                        class: (0, i.normalizeClass)(t("item")),
                                      },
                                      [
                                        (0, i.withDirectives)(
                                          ((0, i.openBlock)(),
                                          (0, i.createElementBlock)(
                                            "a",
                                            {
                                              rel: "noopener noreferrer nofollow",
                                              class: (0, i.normalizeClass)([
                                                t("item-clickable"),
                                                t("item-in"),
                                                t("item-in_icon"),
                                                t("item-in_icon-right"),
                                              ]),
                                              onMousedown: function (t) {
                                                return c.onItemClick(
                                                  n.item,
                                                  e.id,
                                                );
                                              },
                                            },
                                            [
                                              e.isModified
                                                ? (0, i.createCommentVNode)(
                                                    "v-if",
                                                    !0,
                                                  )
                                                : ((0, i.openBlock)(),
                                                  (0, i.createBlock)(
                                                    l,
                                                    {
                                                      key: 0,
                                                      name: "schematic-16",
                                                      class: (0,
                                                      i.normalizeClass)(
                                                        t("item-icon"),
                                                      ),
                                                    },
                                                    null,
                                                    8,
                                                    ["class"],
                                                  )),
                                              e.isModified
                                                ? ((0, i.openBlock)(),
                                                  (0, i.createBlock)(
                                                    l,
                                                    {
                                                      key: 1,
                                                      name: "schematic-modified",
                                                      class: (0,
                                                      i.normalizeClass)([
                                                        t("item-icon"),
                                                        "icon-yellow",
                                                      ]),
                                                    },
                                                    null,
                                                    8,
                                                    ["class"],
                                                  ))
                                                : (0, i.createCommentVNode)(
                                                    "v-if",
                                                    !0,
                                                  ),
                                              (0, i.createVNode)(
                                                a,
                                                {
                                                  type: "single line",
                                                  inline: "",
                                                },
                                                {
                                                  default: (0, i.withCtx)(
                                                    function () {
                                                      return [
                                                        (0, i.createTextVNode)(
                                                          (0,
                                                          i.toDisplayString)(
                                                            e.name,
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
                                              e.active
                                                ? ((0, i.openBlock)(),
                                                  (0, i.createBlock)(
                                                    l,
                                                    {
                                                      key: 2,
                                                      name: "utility-checkmark",
                                                      class: (0,
                                                      i.normalizeClass)(
                                                        t("item-icon-right"),
                                                      ),
                                                    },
                                                    null,
                                                    8,
                                                    ["class"],
                                                  ))
                                                : (0, i.createCommentVNode)(
                                                    "v-if",
                                                    !0,
                                                  ),
                                            ],
                                            42,
                                            Pe,
                                          )),
                                          [[s, void 0, r.uid, { close: !0 }]],
                                        ),
                                      ],
                                      2,
                                    )
                                  );
                                }),
                                128,
                              )),
                            ],
                            2,
                          ),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["id"],
                  ),
                ])
              );
            },
          ],
        ]);
      function Me(e) {
        return (
          (Me =
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
          Me(e)
        );
      }
      function Ke(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = Ge(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var o = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return o >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[o++] };
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
        var r,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((c = e.done), e);
          },
          e: function (e) {
            ((l = !0), (r = e));
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw r;
            }
          },
        };
      }
      function Ge(e, t) {
        if (e) {
          if ("string" == typeof e) return Le(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Le(e, t)
                : void 0
          );
        }
      }
      function Le(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function ze(e, t) {
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
      function He(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ze(Object(n), !0).forEach(function (t) {
                Ze(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ze(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Ze(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Me(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != Me(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == Me(t) ? t : t + "";
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
      var Re = window.__APP__,
        Ue = Re.library,
        $e = Ue.Vuex,
        qe = $e.mapState,
        Qe = $e.mapMutations,
        We = Ue.i18n.t,
        Je = Re.utils.directives.highlight,
        Xe = { Added: "Added", Removed: "Removed", Updated: "Modified" };
      const Ye = {
          name: "AppItem",
          components: {
            AfsText: k.A,
            AfsIcon: U._,
            DocumentSelector: Te,
            AfsLink: ve.A,
          },
          directives: { highlight: Je, trim: S.t },
          props: { item: { type: Object, default: function () {} } },
          data: function () {
            return { isGroupShowAllMode: !1, groupShowLimit: 4, t: We };
          },
          computed: He(
            He({}, qe(["search", "isOpenedFilters"])),
            {},
            {
              searchQuery: function () {
                return this.isOpenedFilters ? this.search : "";
              },
              isNetOnMultipleDocuments: function () {
                var e, t;
                return (
                  (null === (e = this.item) ||
                  void 0 === e ||
                  null === (t = e.documents) ||
                  void 0 === t
                    ? void 0
                    : t.length) > 1
                );
              },
              isSelected: function () {
                var e;
                return null !== (e = this.item) && void 0 !== e && e.isGroup
                  ? this.item.items.some(function (e) {
                      return !!e.isSelected;
                    })
                  : this.item.isSelected;
              },
              icon: function () {
                var e;
                return null == c
                  ? void 0
                  : c[
                      (null === (e = this.targetItem) || void 0 === e
                        ? void 0
                        : e.modificationKindId) || 1
                    ];
              },
              iconClass: function () {
                return "is-".concat(this.icon);
              },
              targetItem: function () {
                var e, t, n;
                return null !== (e = this.item) && void 0 !== e && e.isGroup
                  ? this.item.isSelected
                    ? null === (t = this.item) || void 0 === t
                      ? void 0
                      : t.items.find(function (e) {
                          return e.isSelected;
                        })
                    : null === (n = this.item) || void 0 === n
                      ? void 0
                      : n.items[0]
                  : this.item;
              },
              isGroup: function () {
                var e;
                return null === (e = this.item) || void 0 === e
                  ? void 0
                  : e.isGroup;
              },
              title: function () {
                var e,
                  t,
                  n =
                    null !== (e = this.item) && void 0 !== e && e.isGroup
                      ? null === (t = this.item.items[0]) || void 0 === t
                        ? void 0
                        : t.modificationKind
                      : this.item.modificationKind;
                return ""
                  .concat(Xe[n], " ")
                  .concat(this.item.name)
                  .concat(this.isGroup ? ":" : "");
              },
              modificationKind: function () {
                return this.item.modificationKind;
              },
              changedProps: function () {
                var e;
                return null === (e = this.targetItem) || void 0 === e
                  ? void 0
                  : e.changedProps;
              },
              changedParams: function () {
                var e, t;
                return null === (e = this.targetItem) ||
                  void 0 === e ||
                  null === (t = e.params) ||
                  void 0 === t
                  ? void 0
                  : t.filter(function (e) {
                      return (
                        "NotChanged" !==
                          (null == e ? void 0 : e.modificationKind) &&
                        "Pin" !== (null == e ? void 0 : e.objectType)
                      );
                    });
              },
              groupedPropsAndParamsChanges: function () {
                var e,
                  t = (
                    (null === (e = this.targetItem) || void 0 === e
                      ? void 0
                      : e.changesGroups) || []
                  ).reduce(function (e, t) {
                    return ((e[t.id] = He(He({}, t), {}, { items: [] })), e);
                  }, {});
                if (this.changedProps) {
                  var n,
                    o = Ke(this.changedProps);
                  try {
                    for (o.s(); !(n = o.n()).done; ) {
                      var i = n.value,
                        r = {
                          name: i.name,
                          oldValue: i.oldValue,
                          value: i.value || "N/A",
                          modificationKind: "Updated",
                          modificationKindId: Se("Updated"),
                        };
                      i.groupId && t[i.groupId]
                        ? t[i.groupId].items.push(r)
                        : (t.general ||
                            (t.general = {
                              order: -1,
                              name: "General",
                              groupId: "general",
                              items: [],
                            }),
                          t.general.items.push(r));
                    }
                  } catch (e) {
                    o.e(e);
                  } finally {
                    o.f();
                  }
                }
                if (this.changedParams) {
                  var c,
                    l = Ke(this.changedParams);
                  try {
                    for (l.s(); !(c = l.n()).done; ) {
                      var a,
                        u,
                        s = c.value;
                      "Parameter" === s.type &&
                        s.groupId &&
                        t[s.groupId] &&
                        t[s.groupId].items.push({
                          name: s.name,
                          oldValue:
                            null != s &&
                            null !== (a = s.changedProps) &&
                            void 0 !== a &&
                            a.length
                              ? null === (u = s.changedProps[0]) || void 0 === u
                                ? void 0
                                : u.oldValue
                              : "Removed" === s.modificationKind
                                ? s.value
                                : null,
                          value:
                            "Removed" !== s.modificationKind
                              ? s.value || "N/A"
                              : null,
                          modificationKind: s.modificationKind,
                          modificationKindId: s.modificationKindId,
                        });
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                }
                return Object.values(t)
                  .filter(function (e) {
                    var t;
                    return !(
                      null == e ||
                      null === (t = e.items) ||
                      void 0 === t ||
                      !t.length
                    );
                  })
                  .sort(function (e, t) {
                    return e.order > t.order ? 1 : -1;
                  });
              },
              connectivities: function () {
                var e,
                  t,
                  n,
                  o =
                    null === (e = this.targetItem) ||
                    void 0 === e ||
                    null === (t = e.connectivities) ||
                    void 0 === t
                      ? void 0
                      : t.reduce(function (e, t) {
                          return (
                            e[t.modificationKindId]
                              ? e[t.modificationKindId].push(t)
                              : (e[t.modificationKindId] = [t]),
                            e
                          );
                        }, {});
                return o &&
                  null !== (n = Object.keys(o)) &&
                  void 0 !== n &&
                  n.length
                  ? o
                  : null;
              },
              description: function () {
                var e;
                return null === (e = this.targetItem) || void 0 === e
                  ? void 0
                  : e.description;
              },
              hasExpand: function () {
                var e, t;
                return (
                  (this.item.isGroup &&
                    (null === (e = this.item.items) || void 0 === e
                      ? void 0
                      : e.length) > 1) ||
                  ("Net" === this.item.type &&
                    (null === (t = this.item.connectivities) || void 0 === t
                      ? void 0
                      : t.length)) ||
                  this.groupedPropsAndParamsChanges.length
                );
              },
              isExpand: function () {
                return this.item.isExpand;
              },
              isGroupAllShown: function () {
                var e;
                return (
                  !this.item.isGroup ||
                  this.isGroupShowAllMode ||
                  (null === (e = this.item) || void 0 === e
                    ? void 0
                    : e.items.length) <= this.groupShowLimit
                );
              },
              groupLimitedItems: function () {
                var e, t;
                return this.isGroupShowAllMode
                  ? (null === (e = this.item) || void 0 === e
                      ? void 0
                      : e.items) || []
                  : (
                      (null === (t = this.item) || void 0 === t
                        ? void 0
                        : t.items) || []
                    ).slice(0, this.groupShowLimit);
              },
              hasGroupHiddenItems: function () {
                var e;
                return (
                  this.groupLimitedItems.length <
                  ((null === (e = this.item) || void 0 === e
                    ? void 0
                    : e.items.length) || 0)
                );
              },
            },
          ),
          methods: He(
            He({}, Qe(["switchItemExpand"])),
            {},
            {
              onItemClick: function (e, t) {
                var n, o;
                if (!e.defaultPrevented)
                  if (null !== (n = this.item) && void 0 !== n && n.isGroup) {
                    var i = ((o = this.item.items),
                    (function (e) {
                      if (Array.isArray(e)) return Le(e);
                    })(o) ||
                      (function (e) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != e[Symbol.iterator]) ||
                          null != e["@@iterator"]
                        )
                          return Array.from(e);
                      })(o) ||
                      Ge(o) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                      })()).shift();
                    this.selectItem(i);
                  } else this.selectItem(t);
              },
              getConnectivityName: function (e) {
                return e.name.replace("Pin ", "");
              },
              selectItem: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                this.$emit("click-item", He({ item: e }, t));
              },
              getIcon: function (e) {
                return null == c ? void 0 : c[e || 1];
              },
              getIconClass: function (e) {
                return "is-".concat(null == c ? void 0 : c[e || 1]);
              },
              groupShowAll: function () {
                this.isGroupShowAllMode = !0;
              },
            },
          ),
        },
        et = {
          name: "AppSection",
          components: {
            Item: (0, D.Z)(Ye, [
              [
                "render",
                function (e, t, n, o, r, c) {
                  var l = (0, i.resolveComponent)("AfsIcon"),
                    a = (0, i.resolveComponent)("AfsText"),
                    u = (0, i.resolveComponent)("AfsLink"),
                    s = (0, i.resolveComponent)("DocumentSelector"),
                    d = (0, i.resolveDirective)("highlight"),
                    m = (0, i.resolveDirective)("trim");
                  return (
                    (0, i.openBlock)(),
                    (0, i.createElementBlock)(
                      "div",
                      {
                        class: (0, i.normalizeClass)([
                          "item",
                          {
                            "is-selected": c.isSelected,
                            "is-expand": c.isExpand,
                            "is-group": n.item.isGroup,
                          },
                        ]),
                        onClick:
                          t[1] ||
                          (t[1] = function (e) {
                            return c.onItemClick(e, n.item);
                          }),
                      },
                      [
                        (0, i.createElementVNode)("div", ee, [
                          c.hasExpand
                            ? ((0, i.openBlock)(),
                              (0, i.createBlock)(
                                l,
                                {
                                  key: 0,
                                  name: c.isExpand
                                    ? "utility-chevron-down"
                                    : "utility-chevron-right",
                                  class: "item__icon item__collapse__icon",
                                  onClick:
                                    t[0] ||
                                    (t[0] = (0, i.withModifiers)(
                                      function (t) {
                                        return e.switchItemExpand(n.item.id);
                                      },
                                      ["prevent"],
                                    )),
                                },
                                null,
                                8,
                                ["name"],
                              ))
                            : (0, i.createCommentVNode)("v-if", !0),
                          (0, i.createVNode)(
                            l,
                            {
                              name: c.icon,
                              class: (0, i.normalizeClass)([
                                "item__icon",
                                c.iconClass,
                              ]),
                            },
                            null,
                            8,
                            ["name", "class"],
                          ),
                          (0, i.createElementVNode)("div", te, [
                            (0, i.withDirectives)(
                              ((0, i.openBlock)(),
                              (0, i.createBlock)(
                                a,
                                { class: "item__title" },
                                {
                                  default: (0, i.withCtx)(function () {
                                    return [
                                      (0, i.createTextVNode)(
                                        (0, i.toDisplayString)(c.title),
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 1,
                                },
                              )),
                              [
                                [
                                  d,
                                  {
                                    query: c.searchQuery,
                                    value: c.title,
                                    color: "#FF9F0A",
                                    textColor: "#FFFFFF",
                                  },
                                ],
                                [m, { hint: n.item.name, delay: 50 }],
                              ],
                            ),
                            n.item.isGroup
                              ? ((0, i.openBlock)(),
                                (0, i.createElementBlock)("div", ne, [
                                  ((0, i.openBlock)(!0),
                                  (0, i.createElementBlock)(
                                    i.Fragment,
                                    null,
                                    (0, i.renderList)(
                                      c.groupLimitedItems,
                                      function (e, t) {
                                        return (
                                          (0, i.openBlock)(),
                                          (0, i.createElementBlock)(
                                            "span",
                                            {
                                              key: e.id,
                                              class: "item__group-item",
                                            },
                                            [
                                              e.isSelected
                                                ? (0, i.createCommentVNode)(
                                                    "v-if",
                                                    !0,
                                                  )
                                                : ((0, i.openBlock)(),
                                                  (0, i.createBlock)(
                                                    u,
                                                    {
                                                      key: 0,
                                                      href: "#",
                                                      onClick: (0,
                                                      i.withModifiers)(
                                                        function () {
                                                          return c.selectItem(
                                                            e,
                                                          );
                                                        },
                                                        ["prevent"],
                                                      ),
                                                    },
                                                    {
                                                      default: (0, i.withCtx)(
                                                        function () {
                                                          return [
                                                            (0,
                                                            i.withDirectives)(
                                                              ((0,
                                                              i.openBlock)(),
                                                              (0,
                                                              i.createBlock)(
                                                                a,
                                                                {
                                                                  class:
                                                                    "item__sub-item__text",
                                                                },
                                                                {
                                                                  default: (0,
                                                                  i.withCtx)(
                                                                    function () {
                                                                      return [
                                                                        (0,
                                                                        i.createTextVNode)(
                                                                          (0,
                                                                          i.toDisplayString)(
                                                                            e.name,
                                                                          ),
                                                                          1,
                                                                        ),
                                                                      ];
                                                                    },
                                                                  ),
                                                                  _: 2,
                                                                },
                                                                1024,
                                                              )),
                                                              [
                                                                [
                                                                  d,
                                                                  {
                                                                    query:
                                                                      c.searchQuery,
                                                                    value:
                                                                      e.name,
                                                                    color:
                                                                      "#FF9F0A",
                                                                    textColor:
                                                                      "#FFFFFF",
                                                                  },
                                                                ],
                                                                [
                                                                  m,
                                                                  {
                                                                    hint: n.item
                                                                      .name,
                                                                    delay: 50,
                                                                  },
                                                                ],
                                                              ],
                                                            ),
                                                          ];
                                                        },
                                                      ),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ["onClick"],
                                                  )),
                                              e.isSelected
                                                ? ((0, i.openBlock)(),
                                                  (0, i.createBlock)(
                                                    a,
                                                    {
                                                      key: 1,
                                                      class:
                                                        "item__sub-item__active",
                                                    },
                                                    {
                                                      default: (0, i.withCtx)(
                                                        function () {
                                                          return [
                                                            (0,
                                                            i.createTextVNode)(
                                                              (0,
                                                              i.toDisplayString)(
                                                                e.name,
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
                                                : (0, i.createCommentVNode)(
                                                    "v-if",
                                                    !0,
                                                  ),
                                              t < c.groupLimitedItems.length - 1
                                                ? ((0, i.openBlock)(),
                                                  (0, i.createElementBlock)(
                                                    i.Fragment,
                                                    { key: 2 },
                                                    [oe],
                                                    2112,
                                                  ))
                                                : (0, i.createCommentVNode)(
                                                    "v-if",
                                                    !0,
                                                  ),
                                            ],
                                          )
                                        );
                                      },
                                    ),
                                    128,
                                  )),
                                  ie,
                                  c.hasGroupHiddenItems
                                    ? ((0, i.openBlock)(),
                                      (0, i.createElementBlock)("span", re, [
                                        (0, i.createVNode)(
                                          u,
                                          {
                                            href: "#",
                                            onClick: (0, i.withModifiers)(
                                              c.groupShowAll,
                                              ["prevent"],
                                            ),
                                          },
                                          {
                                            default: (0, i.withCtx)(
                                              function () {
                                                return [ce];
                                              },
                                            ),
                                            _: 1,
                                          },
                                          8,
                                          ["onClick"],
                                        ),
                                      ]))
                                    : (0, i.createCommentVNode)("v-if", !0),
                                ]))
                              : (0, i.createCommentVNode)("v-if", !0),
                          ]),
                          c.isNetOnMultipleDocuments
                            ? ((0, i.openBlock)(),
                              (0, i.createElementBlock)("div", le, [
                                (0, i.createVNode)(
                                  s,
                                  { item: n.item, onClickItem: c.selectItem },
                                  null,
                                  8,
                                  ["item", "onClickItem"],
                                ),
                              ]))
                            : (0, i.createCommentVNode)("v-if", !0),
                        ]),
                        c.isExpand
                          ? ((0, i.openBlock)(),
                            (0, i.createElementBlock)("div", ae, [
                              c.groupedPropsAndParamsChanges &&
                              c.groupedPropsAndParamsChanges.length
                                ? ((0, i.openBlock)(),
                                  (0, i.createElementBlock)("div", ue, [
                                    ((0, i.openBlock)(!0),
                                    (0, i.createElementBlock)(
                                      i.Fragment,
                                      null,
                                      (0, i.renderList)(
                                        c.groupedPropsAndParamsChanges,
                                        function (e) {
                                          return (
                                            (0, i.openBlock)(),
                                            (0, i.createElementBlock)(
                                              "div",
                                              {
                                                key: e.id,
                                                class: "item__props-group",
                                              },
                                              [
                                                (0, i.createCommentVNode)(
                                                  " Group name hidden for uncategorized props changes ",
                                                ),
                                                e.items.length &&
                                                "general" !== e.groupId
                                                  ? ((0, i.openBlock)(),
                                                    (0, i.createBlock)(
                                                      a,
                                                      {
                                                        key: 0,
                                                        tag: "p",
                                                        class:
                                                          "item__props-group-title",
                                                      },
                                                      {
                                                        default: (0, i.withCtx)(
                                                          function () {
                                                            return [
                                                              (0,
                                                              i.createTextVNode)(
                                                                (0,
                                                                i.toDisplayString)(
                                                                  e.name,
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
                                                  : (0, i.createCommentVNode)(
                                                      "v-if",
                                                      !0,
                                                    ),
                                                ((0, i.openBlock)(!0),
                                                (0, i.createElementBlock)(
                                                  i.Fragment,
                                                  null,
                                                  (0, i.renderList)(
                                                    e.items,
                                                    function (t) {
                                                      return (
                                                        (0, i.openBlock)(),
                                                        (0,
                                                        i.createElementBlock)(
                                                          "div",
                                                          {
                                                            key: t.id,
                                                            class: "item__prop",
                                                          },
                                                          [
                                                            (0,
                                                            i.createCommentVNode)(
                                                              " Group icon also hidden for uncategorized props changes ",
                                                            ),
                                                            "general" !==
                                                            e.groupId
                                                              ? ((0,
                                                                i.openBlock)(),
                                                                (0,
                                                                i.createBlock)(
                                                                  l,
                                                                  {
                                                                    key: 0,
                                                                    name: c.getIcon(
                                                                      t.modificationKindId,
                                                                    ),
                                                                    class: (0,
                                                                    i.normalizeClass)(
                                                                      [
                                                                        "item__prop-icon",
                                                                        c.getIconClass(
                                                                          t.modificationKindId,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                  },
                                                                  null,
                                                                  8,
                                                                  [
                                                                    "name",
                                                                    "class",
                                                                  ],
                                                                ))
                                                              : (0,
                                                                i.createCommentVNode)(
                                                                  "v-if",
                                                                  !0,
                                                                ),
                                                            (0,
                                                            i.createCommentVNode)(
                                                              "- Instead of that uncategorized prop item has style as group title ",
                                                            ),
                                                            (0,
                                                            i.withDirectives)(
                                                              ((0,
                                                              i.openBlock)(),
                                                              (0,
                                                              i.createElementBlock)(
                                                                "div",
                                                                {
                                                                  class: (0,
                                                                  i.normalizeClass)(
                                                                    {
                                                                      "item__prop-name":
                                                                        "general" !==
                                                                        e.groupId,
                                                                      "item__prop-name-uncategorized":
                                                                        "general" ===
                                                                        e.groupId,
                                                                    },
                                                                  ),
                                                                },
                                                                [
                                                                  (0,
                                                                  i.createTextVNode)(
                                                                    (0,
                                                                    i.toDisplayString)(
                                                                      t.name,
                                                                    ),
                                                                    1,
                                                                  ),
                                                                ],
                                                                2,
                                                              )),
                                                              [
                                                                [
                                                                  m,
                                                                  {
                                                                    hint: t.name,
                                                                    delay: 50,
                                                                  },
                                                                ],
                                                              ],
                                                            ),
                                                            (0,
                                                            i.createElementVNode)(
                                                              "div",
                                                              se,
                                                              [
                                                                (0,
                                                                i.withDirectives)(
                                                                  ((0,
                                                                  i.openBlock)(),
                                                                  (0,
                                                                  i.createBlock)(
                                                                    a,
                                                                    {
                                                                      tag: "p",
                                                                      class:
                                                                        "item__prop-value-new",
                                                                    },
                                                                    {
                                                                      default:
                                                                        (0,
                                                                        i.withCtx)(
                                                                          function () {
                                                                            return [
                                                                              (0,
                                                                              i.createTextVNode)(
                                                                                (0,
                                                                                i.toDisplayString)(
                                                                                  t.value,
                                                                                ),
                                                                                1,
                                                                              ),
                                                                            ];
                                                                          },
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1024,
                                                                  )),
                                                                  [
                                                                    [
                                                                      m,
                                                                      {
                                                                        hint: t.value,
                                                                        delay: 50,
                                                                      },
                                                                    ],
                                                                  ],
                                                                ),
                                                                (0,
                                                                i.withDirectives)(
                                                                  ((0,
                                                                  i.openBlock)(),
                                                                  (0,
                                                                  i.createBlock)(
                                                                    a,
                                                                    {
                                                                      tag: "p",
                                                                      class:
                                                                        "item__prop-value-old",
                                                                    },
                                                                    {
                                                                      default:
                                                                        (0,
                                                                        i.withCtx)(
                                                                          function () {
                                                                            return [
                                                                              (0,
                                                                              i.createTextVNode)(
                                                                                (0,
                                                                                i.toDisplayString)(
                                                                                  t.oldValue,
                                                                                ),
                                                                                1,
                                                                              ),
                                                                            ];
                                                                          },
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1024,
                                                                  )),
                                                                  [
                                                                    [
                                                                      m,
                                                                      {
                                                                        hint: t.oldValue,
                                                                        delay: 50,
                                                                      },
                                                                    ],
                                                                  ],
                                                                ),
                                                              ],
                                                            ),
                                                          ],
                                                        )
                                                      );
                                                    },
                                                  ),
                                                  128,
                                                )),
                                              ],
                                            )
                                          );
                                        },
                                      ),
                                      128,
                                    )),
                                  ]))
                                : (0, i.createCommentVNode)("v-if", !0),
                              c.connectivities
                                ? ((0, i.openBlock)(),
                                  (0, i.createElementBlock)("div", de, [
                                    (0, i.createElementVNode)(
                                      "div",
                                      me,
                                      (0, i.toDisplayString)(
                                        e.t(
                                          "viewer.plugins.CompareDocument.Item.connectivityChangesTitle",
                                        ),
                                      ),
                                      1,
                                    ),
                                    ((0, i.openBlock)(!0),
                                    (0, i.createElementBlock)(
                                      i.Fragment,
                                      null,
                                      (0, i.renderList)(
                                        c.connectivities,
                                        function (e, t) {
                                          return (
                                            (0, i.openBlock)(),
                                            (0, i.createElementBlock)(
                                              "div",
                                              {
                                                key: "connectivity-group-" + t,
                                                class:
                                                  "item__connectivity-group",
                                              },
                                              [
                                                (0, i.createVNode)(
                                                  l,
                                                  {
                                                    name: c.getIcon(t),
                                                    class: (0,
                                                    i.normalizeClass)([
                                                      "item__connectivity-group-icon",
                                                      c.getIconClass(t),
                                                    ]),
                                                  },
                                                  null,
                                                  8,
                                                  ["name", "class"],
                                                ),
                                                (0, i.createElementVNode)(
                                                  "div",
                                                  fe,
                                                  [
                                                    ((0, i.openBlock)(!0),
                                                    (0, i.createElementBlock)(
                                                      i.Fragment,
                                                      null,
                                                      (0, i.renderList)(
                                                        e,
                                                        function (t, o) {
                                                          return (
                                                            (0, i.openBlock)(),
                                                            (0,
                                                            i.createElementBlock)(
                                                              "span",
                                                              {
                                                                key: t.id,
                                                                class:
                                                                  "item__connectivity",
                                                              },
                                                              [
                                                                t.isSelected
                                                                  ? (0,
                                                                    i.createCommentVNode)(
                                                                      "v-if",
                                                                      !0,
                                                                    )
                                                                  : ((0,
                                                                    i.openBlock)(),
                                                                    (0,
                                                                    i.createBlock)(
                                                                      u,
                                                                      {
                                                                        key: 0,
                                                                        href: "#",
                                                                        onClick:
                                                                          (0,
                                                                          i.withModifiers)(
                                                                            function () {
                                                                              return c.selectItem(
                                                                                n.item,
                                                                                {
                                                                                  connectivity:
                                                                                    t,
                                                                                },
                                                                              );
                                                                            },
                                                                            [
                                                                              "prevent",
                                                                            ],
                                                                          ),
                                                                      },
                                                                      {
                                                                        default:
                                                                          (0,
                                                                          i.withCtx)(
                                                                            function () {
                                                                              return [
                                                                                (0,
                                                                                i.withDirectives)(
                                                                                  ((0,
                                                                                  i.openBlock)(),
                                                                                  (0,
                                                                                  i.createBlock)(
                                                                                    a,
                                                                                    {
                                                                                      class:
                                                                                        "item__connectivity__text",
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        (0,
                                                                                        i.withCtx)(
                                                                                          function () {
                                                                                            return [
                                                                                              (0,
                                                                                              i.createTextVNode)(
                                                                                                (0,
                                                                                                i.toDisplayString)(
                                                                                                  c.getConnectivityName(
                                                                                                    t,
                                                                                                  ),
                                                                                                ),
                                                                                                1,
                                                                                              ),
                                                                                            ];
                                                                                          },
                                                                                        ),
                                                                                      _: 2,
                                                                                    },
                                                                                    1024,
                                                                                  )),
                                                                                  [
                                                                                    [
                                                                                      d,
                                                                                      {
                                                                                        query:
                                                                                          c.searchQuery,
                                                                                        value:
                                                                                          c.getConnectivityName(
                                                                                            t,
                                                                                          ),
                                                                                        color:
                                                                                          "#FF9F0A",
                                                                                        textColor:
                                                                                          "#FFFFFF",
                                                                                      },
                                                                                    ],
                                                                                    [
                                                                                      m,
                                                                                      {
                                                                                        hint: c.getConnectivityName(
                                                                                          t,
                                                                                        ),
                                                                                        delay: 50,
                                                                                      },
                                                                                    ],
                                                                                  ],
                                                                                ),
                                                                              ];
                                                                            },
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1032,
                                                                      [
                                                                        "onClick",
                                                                      ],
                                                                    )),
                                                                t.isSelected
                                                                  ? ((0,
                                                                    i.openBlock)(),
                                                                    (0,
                                                                    i.createBlock)(
                                                                      a,
                                                                      {
                                                                        key: 1,
                                                                        class:
                                                                          "item__connectivity__active",
                                                                      },
                                                                      {
                                                                        default:
                                                                          (0,
                                                                          i.withCtx)(
                                                                            function () {
                                                                              return [
                                                                                (0,
                                                                                i.createTextVNode)(
                                                                                  (0,
                                                                                  i.toDisplayString)(
                                                                                    c.getConnectivityName(
                                                                                      t,
                                                                                    ),
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
                                                                    i.createCommentVNode)(
                                                                      "v-if",
                                                                      !0,
                                                                    ),
                                                                o < e.length - 1
                                                                  ? ((0,
                                                                    i.openBlock)(),
                                                                    (0,
                                                                    i.createElementBlock)(
                                                                      i.Fragment,
                                                                      {
                                                                        key: 2,
                                                                      },
                                                                      [pe],
                                                                      2112,
                                                                    ))
                                                                  : (0,
                                                                    i.createCommentVNode)(
                                                                      "v-if",
                                                                      !0,
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
                                              ],
                                            )
                                          );
                                        },
                                      ),
                                      128,
                                    )),
                                  ]))
                                : (0, i.createCommentVNode)("v-if", !0),
                            ]))
                          : (0, i.createCommentVNode)("v-if", !0),
                      ],
                      2,
                    )
                  );
                },
              ],
              ["__scopeId", "data-v-08c7d32f"],
            ]),
            AfsText: k.A,
          },
          props: { section: { type: Object, default: function () {} } },
          computed: {
            items: function () {
              return this.section.items;
            },
          },
          methods: {
            onClickItem: function (e) {
              this.$emit("click-item", e);
            },
          },
        },
        tt = (0, D.Z)(et, [
          [
            "render",
            function (e, t, n, o, r, c) {
              var l = (0, i.resolveComponent)("AfsText"),
                a = (0, i.resolveComponent)("Item");
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)("div", Y, [
                  c.items.length
                    ? ((0, i.openBlock)(),
                      (0, i.createBlock)(
                        l,
                        { key: 0, class: "section__title" },
                        {
                          default: (0, i.withCtx)(function () {
                            return [
                              (0, i.createTextVNode)(
                                (0, i.toDisplayString)(n.section.name),
                                1,
                              ),
                            ];
                          }),
                          _: 1,
                        },
                      ))
                    : (0, i.createCommentVNode)("v-if", !0),
                  ((0, i.openBlock)(!0),
                  (0, i.createElementBlock)(
                    i.Fragment,
                    null,
                    (0, i.renderList)(c.items, function (e) {
                      return (
                        (0, i.openBlock)(),
                        (0, i.createBlock)(
                          a,
                          {
                            key: e.id,
                            item: e,
                            class: "section__item",
                            onClickItem: c.onClickItem,
                          },
                          null,
                          8,
                          ["item", "onClickItem"],
                        )
                      );
                    }),
                    128,
                  )),
                ])
              );
            },
          ],
        ]);
      var nt = n(93769);
      function ot(e) {
        return (
          (ot =
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
          ot(e)
        );
      }
      function it(e, t) {
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
      function rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? it(Object(n), !0).forEach(function (t) {
                ct(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : it(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function ct(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ot(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != ot(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == ot(t) ? t : t + "";
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
      var lt = window.__APP__.library,
        at = lt.Vuex,
        ut = at.mapState,
        st = at.mapMutations,
        dt = at.mapGetters,
        mt = lt.i18n.t,
        ft = window.__CORE__;
      const pt = {
          name: "CompareDocument",
          components: {
            CompareLegend: nt.Z,
            Header: N,
            BaseFilters: Z,
            BaseNote: X,
            Section: tt,
          },
          data: function () {
            return { t: mt };
          },
          computed: rt(
            rt(
              rt({}, ut(["isOpenedFilters", "differencesCount"])),
              dt(["filteredData", "getItemById"]),
            ),
            {},
            {
              filteredCount: function () {
                return this.filteredData.reduce(function (e, t) {
                  return e + t.items.length;
                }, 0);
              },
            },
          ),
          mounted: function () {
            var e = this;
            ft.bus.on("SchCompareEngine:navigate", function (t) {
              var n = e.getItemById(t);
              n && e.selectItem({ item: n });
            });
          },
          methods: rt(
            rt({}, st(["openFilters", "closeFilters", "setSelectedItem"])),
            {},
            {
              onChangeFilters: function (e) {
                e ? this.openFilters() : this.closeFilters();
              },
              onClickItem: function (e) {
                var t = e.item,
                  n = e.connectivity;
                this.selectItem({ item: t, connectivity: n });
              },
              selectItem: function (e) {
                var t = e.item,
                  n = e.connectivity,
                  o = void 0 === n ? null : n;
                (this.setSelectedItem({ item: t, connectivity: o }),
                  ft.bus.emit("CompareDocument:selectItem", {
                    item: t,
                    connectivity: o,
                  }));
              },
            },
          ),
        },
        vt = (0, D.Z)(pt, [
          [
            "render",
            function (e, t, n, o, r, c) {
              var l = (0, i.resolveComponent)("Header"),
                a = (0, i.resolveComponent)("BaseFilters"),
                u = (0, i.resolveComponent)("BaseNote"),
                s = (0, i.resolveComponent)("Section"),
                d = (0, i.resolveComponent)("CompareLegend");
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)("div", p, [
                  (0, i.createVNode)(
                    l,
                    {
                      count: e.differencesCount,
                      "filtered-count": c.filteredCount,
                      onChangeFilters: c.onChangeFilters,
                    },
                    null,
                    8,
                    ["count", "filtered-count", "onChangeFilters"],
                  ),
                  e.isOpenedFilters
                    ? ((0, i.openBlock)(), (0, i.createBlock)(a, { key: 0 }))
                    : (0, i.createCommentVNode)("v-if", !0),
                  (0, i.createVNode)(u),
                  (0, i.createElementVNode)("div", v, [
                    c.filteredCount
                      ? ((0, i.openBlock)(),
                        (0, i.createElementBlock)("div", h, [
                          ((0, i.openBlock)(!0),
                          (0, i.createElementBlock)(
                            i.Fragment,
                            null,
                            (0, i.renderList)(e.filteredData, function (e) {
                              return (
                                (0, i.openBlock)(),
                                (0, i.createBlock)(
                                  s,
                                  {
                                    key: e.id,
                                    section: e,
                                    onClickItem: c.onClickItem,
                                  },
                                  null,
                                  8,
                                  ["section", "onClickItem"],
                                )
                              );
                            }),
                            128,
                          )),
                        ]))
                      : ((0, i.openBlock)(),
                        (0, i.createElementBlock)(
                          "div",
                          y,
                          (0, i.toDisplayString)(
                            r.t("viewer.plugins.CompareDocument.noData"),
                          ),
                          1,
                        )),
                  ]),
                  (0, i.createVNode)(d),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-3c84ef5a"],
        ]);
      function ht(e) {
        return (
          (ht =
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
          ht(e)
        );
      }
      function yt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, _t(o.key), o));
        }
      }
      function gt(e, t, n) {
        return (
          (t = Ct(t)),
          (function (e, t) {
            if (t && ("object" == ht(t) || "function" == typeof t)) return t;
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
            bt()
              ? Reflect.construct(t, n || [], Ct(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function bt() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (bt = function () {
          return !!e;
        })();
      }
      function Ct(e) {
        return (
          (Ct = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ct(e)
        );
      }
      function wt(e, t) {
        return (
          (wt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          wt(e, t)
        );
      }
      function _t(e) {
        var t = (function (e, t) {
          if ("object" != ht(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, "string");
            if ("object" != ht(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == ht(t) ? t : t + "";
      }
      var kt = window.__CORE__,
        It = window.__APP__.createModule,
        Ot = window.__APP__.library.i18n.t,
        St = It({
          type: "Plugin",
          description: "Search",
          create: function (e) {
            var t = (function (e) {
              function t() {
                var e;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (function (e, t, n) {
                    (t = _t(t)) in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n);
                  })(
                    (e = gt(this, t, [
                      {
                        name: "SchCompareDocument",
                        comment: "SchCompareDocument",
                        description: "SchCompareDocument",
                        displayName: Ot(
                          "viewer.plugins.CompareDocument.displayName",
                        ),
                        hint: "SchCompareDocument",
                        owner: "SchCompareView",
                        view: {
                          type: "sidebar",
                          title: Ot(
                            "viewer.plugins.BOMCompareDocument.differences",
                          ),
                          config: { size: "md", resizable: !0, flex: !0 },
                          isHidden: !1,
                        },
                      },
                    ])),
                    "onSelectItem",
                    function (e) {
                      kt.bus.emit("SchCompareView:selectedItem", e);
                    },
                  ),
                  kt.bus.on("CompareDocument:selectItem", e.onSelectItem),
                  kt.bus.on("View:activate", function (t) {
                    var n;
                    if ("SchCompareView" === t.name) {
                      var o,
                        i,
                        r = (function (e) {
                          var t,
                            n,
                            o = [],
                            i = 0;
                          (null != e &&
                            e.Documents &&
                            (e.Documents = e.Documents.map(function (e) {
                              return (
                                null != e &&
                                  e.Items &&
                                  (e.Items = e.Items.filter(function (e) {
                                    return (
                                      (null == e ? void 0 : e.DocumentId) &&
                                      -1 === e.DocumentId.indexOf("@")
                                    );
                                  })),
                                e
                              );
                            })),
                            null != e &&
                              e.Nets &&
                              ((e.Nets = e.Nets.map(function (e) {
                                return (
                                  null != e &&
                                    e.Items &&
                                    (e.Items = e.Items.filter(function (e) {
                                      return (
                                        (null == e ? void 0 : e.DocumentId) &&
                                        -1 === e.DocumentId.indexOf("@")
                                      );
                                    })),
                                  e
                                );
                              })),
                              (e.Nets = e.Nets.filter(function (e) {
                                return (
                                  (null == e ? void 0 : e.Items) &&
                                  e.Items.length
                                );
                              }))));
                          var r = new Map();
                          if (
                            null != e &&
                            null !== (t = e.Documents) &&
                            void 0 !== t &&
                            t.length
                          ) {
                            var c = (function (e, t) {
                              var n =
                                (
                                  (null == e ? void 0 : e.ChangesGroups) || []
                                ).map(function (e) {
                                  return {
                                    id: e.GroupId,
                                    name:
                                      (null == e ? void 0 : e.DisplayText) ||
                                      "N/A",
                                    isGroup: !0,
                                    items: [],
                                  };
                                }) || [];
                              return [].concat(
                                ye(
                                  e.Documents.reduce(function (e, o) {
                                    var i;
                                    if (
                                      null === (i = o.Items) ||
                                      void 0 === i ||
                                      !i.length
                                    )
                                      return e;
                                    var r = o.Items.reduce(function (e, i) {
                                      var r,
                                        c = Ce(o, i);
                                      if (
                                        (t.set(c.id, c),
                                        (
                                          (null === (r = i.Items) ||
                                          void 0 === r
                                            ? void 0
                                            : r.filter(function (e) {
                                                return "Part" === e.ObjectKind;
                                              })) || []
                                        ).map(function (e) {
                                          var n = Ce(o, e, "ComponentPart");
                                          t.set(n.id, n);
                                        }),
                                        "NotChanged" !== c.modificationKind)
                                      ) {
                                        if (null != c && c.groupId) {
                                          var l = n.findIndex(function (e) {
                                            return e.id === c.groupId;
                                          });
                                          return (n[l].items.push(c), e);
                                        }
                                        return [].concat(ye(e), [c]);
                                      }
                                      return e;
                                    }, []);
                                    return [].concat(ye(e), ye(r));
                                  }, []),
                                ),
                                ye(
                                  n.filter(function (e) {
                                    return e.items.length;
                                  }),
                                ),
                              );
                            })(e, r);
                            ((i += c.length),
                              o.push({
                                name: "Components",
                                type: 2,
                                id: (0, Q.c)(),
                                items: c,
                              }));
                          }
                          if (
                            null != e &&
                            null !== (n = e.Nets) &&
                            void 0 !== n &&
                            n.length
                          ) {
                            var l = Ie(
                              e.Nets.filter(function (e) {
                                return "NotChanged" !== e.ModificationKind;
                              }),
                              e.Documents,
                              r,
                            );
                            ((i += l.length),
                              o.push({
                                name: "Nets",
                                type: 3,
                                id: (0, Q.c)(),
                                items: l,
                              }));
                          }
                          return { count: i, data: o };
                        })(
                          null === (o = kt.response) ||
                            void 0 === o ||
                            null === (i = o.metadata) ||
                            void 0 === i
                            ? void 0
                            : i.LogicalChanges,
                        );
                      ((n = r.data),
                        m.commit("setData", n),
                        (function (e) {
                          m.commit("setDifferencesCount", e);
                        })(r.count),
                        e.hasView || e.initView());
                    }
                  }),
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
                    t && wt(e, t));
                })(t, e),
                (n = t),
                (o = [
                  {
                    key: "events",
                    get: function () {
                      return ["CompareDocument:selectItem"];
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      return Promise.resolve();
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
                          void (0, i.createApp)(vt, { id: e })
                            .use(f)
                            .mount(t))));
                    },
                  },
                ]) && yt(n.prototype, o),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, o;
            })(e);
            return new t();
          },
        });
      const Bt = St;
      var Pt = n(2303),
        Dt = n(13144);
      const Nt = (0, Pt.Z)(Dt.xI.SCH);
      var jt = window.__CORE__;
      1 === o.i ? jt.addModule(Bt) : jt.addModule(Nt);
    },
    10311: (e) => {
      e.exports = Vue;
    },
  },
  (e) => {
    (e.O(0, [66951, 21759], () => e((e.s = 45321))), e.O());
  },
]);
