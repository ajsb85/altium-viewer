"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [47426, 74687, 11903, 318],
  {
    40372: (e, t, r) => {
      var n = r(10311),
        o = (0, window.__APP__.library.Vuex.createStore)({
          state: { treeMenu: [] },
          mutations: {
            setTreeMenu: function (e, t) {
              e.treeMenu = Array.isArray(t) ? t : [];
            },
          },
        });
      const i = o;
      var a = { class: "app-compare-panel" },
        l = { key: 0, class: "app-compare-panel__tree" },
        s = (0, n.createTextVNode)(
          " Choose gerber from available files or upload to compare: ",
        ),
        c = (0, n.createTextVNode)(
          " t('viewer.plugins.ComparePanel.App.orSeparator') ",
        ),
        u = r(11539),
        f = r(29786);
      function p(e) {
        return (
          (p =
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
          p(e)
        );
      }
      function d(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                y(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function y(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != p(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != p(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == p(t) ? t : t + "";
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
      var m = function (e) {
          var t = Array.prototype.map.call(e, function (e) {
            return new Promise(function (t) {
              var r;
              e.webkitGetAsEntry &&
                (r = e.webkitGetAsEntry()) &&
                (r.isDirectory &&
                  (function (e, r) {
                    var n = {};
                    !(function e(t, r) {
                      t.createReader().readEntries(
                        function (t) {
                          if (!t.length)
                            return r instanceof Function ? r() : null;
                          var o = t.reduce(
                              function (e, t) {
                                return (
                                  t.isDirectory && e.dirs.push(t),
                                  t.isFile && e.files.push(t),
                                  e
                                );
                              },
                              { dirs: [], files: [] },
                            ),
                            i = o.files,
                            a = o.dirs;
                          (i.length &&
                            i.forEach(function (e, t) {
                              e.file(function (o) {
                                ((n[e.fullPath] = o),
                                  !a.length && t === i.length - 1 && r && r());
                              });
                            }),
                            a.length &&
                              a.forEach(function (t, n) {
                                return e(t, n === a.length - 1 && r);
                              }));
                        },
                        function (e) {
                          return console.log(e);
                        },
                      );
                    })(e, function () {
                      return (
                        (e = h(h({}, (e = n)), {}, { __hasFolders: !0 })),
                        void t(e)
                      );
                      var e;
                    });
                  })(r),
                r.isFile && t(y({}, r.fullPath, r)));
            });
          });
          return Promise.all(t).then(function (e) {
            return e.reduce(function (e, t) {
              return h(h({}, e), t);
            }, {});
          });
        },
        b = r(93891);
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var g = {
          name: "AfsUploadArea",
          components: { Snackbar: u.A },
          props: {
            dataLocator: { type: String, default: "upload-area" },
            overlayOffset: {
              type: [Number, String],
              default: 0,
              validator: function (e) {
                return isFinite(+e);
              },
            },
            hasDragAndDrop: { type: Boolean, default: !0 },
            snackbarContainerId: { type: String, default: null },
            validator: {
              type: Function,
              default: function () {
                return !0;
              },
            },
            hasSnackbar: { type: Boolean, default: !0 },
          },
          emits: ["error", "change"],
          data: function () {
            return { isProcessing: !1, timer: null };
          },
          computed: {
            classes: function () {
              return [{ "is-processing": this.isProcessing }];
            },
            snackbar: function () {
              return this.$refs.snackbar;
            },
            snackbarListeners: function () {
              return Object.entries(this.$attrs).reduce(function (e, t) {
                var r = (function (e, t) {
                    return (
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })(e) ||
                      (function (e, t) {
                        var r =
                          null == e
                            ? null
                            : ("undefined" != typeof Symbol &&
                                e[Symbol.iterator]) ||
                              e["@@iterator"];
                        if (null != r) {
                          var n,
                            o,
                            i,
                            a,
                            l = [],
                            s = !0,
                            c = !1;
                          try {
                            if (((i = (r = r.call(e)).next), 0 === t)) {
                              if (Object(r) !== r) return;
                              s = !1;
                            } else
                              for (
                                ;
                                !(s = (n = i.call(r)).done) &&
                                (l.push(n.value), l.length !== t);
                                s = !0
                              );
                          } catch (e) {
                            ((c = !0), (o = e));
                          } finally {
                            try {
                              if (
                                !s &&
                                null != r.return &&
                                ((a = r.return()), Object(a) !== a)
                              )
                                return;
                            } finally {
                              if (c) throw o;
                            }
                          }
                          return l;
                        }
                      })(e, t) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return v(e, t);
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
                                ? v(e, t)
                                : void 0
                          );
                        }
                      })(e, t) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                      })()
                    );
                  })(t, 2),
                  n = r[0],
                  o = r[1];
                if (n.startsWith("onSnackbar:")) {
                  var i = n.split(":")[1];
                  e[(i = "on".concat(i[0].toUpperCase()).concat(i.slice(1)))] =
                    o;
                }
                return e;
              }, {});
            },
          },
          mounted: function () {
            (this.$el.addEventListener("dragover", this.handleEnter),
              this.$el.addEventListener("dragenter", this.handleEnter),
              this.$el.addEventListener("dragleave", this.handleLeave),
              this.$el.addEventListener("dragend", this.handleLeave),
              this.$el.addEventListener("drop", this.handleDrop));
          },
          beforeUnmount: function () {
            (this.$el.removeEventListener("dragover", this.handleEnter),
              this.$el.removeEventListener("dragenter", this.handleEnter),
              this.$el.removeEventListener("dragleave", this.handleLeave),
              this.$el.removeEventListener("dragend", this.handleLeave),
              this.$el.removeEventListener("drop", this.handleDrop));
          },
          methods: {
            getBEMClass: function (e) {
              return (0, f.g)("afs-upload-area", e);
            },
            handleEnter: function (e) {
              if ((e.preventDefault(), this.hasDragAndDrop)) {
                var t = e.dataTransfer.effectAllowed;
                ((e.dataTransfer.dropEffect =
                  "move" === t || "linkMove" === t ? "move" : "copy"),
                  (this.isProcessing = !0));
              }
            },
            handleLeave: function (e) {
              (e.preventDefault(),
                this.hasDragAndDrop &&
                  (this.isProcessing = !(
                    !e.relatedTarget ||
                    (this.$el !== e.relatedTarget &&
                      !this.$el.contains(e.relatedTarget))
                  )));
            },
            handleDrop: function (e) {
              var t = this;
              (e.preventDefault(),
                this.hasDragAndDrop &&
                  ((this.isProcessing = !1),
                  m(e.dataTransfer.items).then(function (r) {
                    t.load(e.dataTransfer.files, r.__hasFolders);
                  })));
            },
            emitError: function (e) {
              (this.$emit("error", e),
                this.hasSnackbar && this.snackbar.open());
            },
            emitChange: function (e) {
              (this.hasSnackbar && this.snackbar.close(),
                this.$emit("change", e));
            },
            load: function (e, t) {
              this.timer && clearTimeout(this.timer);
              var r = !this.validator(e);
              ((this.isProcessing = !1),
                r || t ? this.emitError(t) : this.emitChange(e));
            },
          },
        },
        S = ["data-locator"],
        w = (0, b._)(g, [
          [
            "render",
            function (e, t, r, o, i, a) {
              var l = (0, n.resolveComponent)("Snackbar");
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)(
                  "div",
                  {
                    class: (0, n.normalizeClass)([
                      "afs-upload-area",
                      a.classes,
                    ]),
                    "data-locator": r.dataLocator,
                  },
                  [
                    (0, n.renderSlot)(e.$slots, "default"),
                    (0, n.createElementVNode)(
                      "div",
                      {
                        class: "afs-upload-area__overlay",
                        style: (0, n.normalizeStyle)({
                          margin: "".concat(r.overlayOffset, "px"),
                        }),
                      },
                      null,
                      4,
                    ),
                    r.hasSnackbar
                      ? ((0, n.openBlock)(),
                        (0, n.createBlock)(
                          l,
                          (0, n.mergeProps)(
                            {
                              key: 0,
                              ref: "snackbar",
                              "container-id": r.snackbarContainerId,
                              autoclose: "",
                              icon: "🚫",
                            },
                            a.snackbarListeners,
                          ),
                          {
                            default: (0, n.withCtx)(function () {
                              return [
                                (0, n.renderSlot)(e.$slots, "error-message"),
                              ];
                            }),
                            _: 3,
                          },
                          16,
                          ["container-id"],
                        ))
                      : (0, n.createCommentVNode)("", !0),
                  ],
                  10,
                  S,
                )
              );
            },
          ],
        ]),
        C = r(77337),
        k = r(77453);
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
      function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function O(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != _(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != _(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == _(t) ? t : t + "";
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
      var P = {
          full: "full",
          fileInfo: "file-info",
          card: "card",
          overlay: "overlay",
        },
        T = Object.values(P),
        F = {
          name: "AfsUploadFile",
          components: { Icon: C._, AfsText: k.A, Snackbar: u.A },
          props: {
            dataLocator: { type: String, default: "upload-file" },
            hasTitle: { type: Boolean, default: !0 },
            hasText: { type: Boolean, default: !0 },
            hasExtraContent: { type: Boolean, default: !1 },
            validator: {
              type: Function,
              default: function () {
                return !0;
              },
            },
            type: {
              type: String,
              default: "",
              validator: function (e) {
                return !e.length || T.includes(e);
              },
            },
            droppable: { type: Boolean, default: !0 },
            multiple: { type: Boolean, default: !0 },
            icon: { type: String, default: "uploads-16" },
            iconSize: {
              type: String,
              default: "md",
              validator: function (e) {
                return ["lg", "md", "sm", "xs"].includes(e);
              },
            },
            iconFilled: { type: Boolean, default: !1 },
            snackbarContainerId: { type: String, default: null },
            accept: { type: String, default: null },
          },
          emits: ["change", "error"],
          data: function () {
            return { isProcessing: !1, files: null };
          },
          computed: {
            classes: function () {
              return [
                O(
                  { "is-processing": this.isProcessing },
                  "afs-upload-file_".concat(this.type),
                  this.type.length,
                ),
              ];
            },
            iconClass: function () {
              return "afs-upload-file__icon_".concat(this.iconSize);
            },
            titleType: function () {
              return this.type === P.fileInfo ? "title" : "large title";
            },
            textType: function () {
              return this.type === P.fileInfo ? "text" : "paragraph";
            },
            snackbar: function () {
              return this.$refs.snackbar;
            },
            snackbarListeners: function () {
              return Object.entries(this.$attrs).reduce(function (e, t) {
                var r = (function (e, t) {
                    return (
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })(e) ||
                      (function (e, t) {
                        var r =
                          null == e
                            ? null
                            : ("undefined" != typeof Symbol &&
                                e[Symbol.iterator]) ||
                              e["@@iterator"];
                        if (null != r) {
                          var n,
                            o,
                            i,
                            a,
                            l = [],
                            s = !0,
                            c = !1;
                          try {
                            if (((i = (r = r.call(e)).next), 0 === t)) {
                              if (Object(r) !== r) return;
                              s = !1;
                            } else
                              for (
                                ;
                                !(s = (n = i.call(r)).done) &&
                                (l.push(n.value), l.length !== t);
                                s = !0
                              );
                          } catch (e) {
                            ((c = !0), (o = e));
                          } finally {
                            try {
                              if (
                                !s &&
                                null != r.return &&
                                ((a = r.return()), Object(a) !== a)
                              )
                                return;
                            } finally {
                              if (c) throw o;
                            }
                          }
                          return l;
                        }
                      })(e, t) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return E(e, t);
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
                                ? E(e, t)
                                : void 0
                          );
                        }
                      })(e, t) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                      })()
                    );
                  })(t, 2),
                  n = r[0],
                  o = r[1];
                if (n.startsWith("onSnackbar:")) {
                  var i = n.split(":")[1];
                  e[(i = "on".concat(i[0].toUpperCase()).concat(i.slice(1)))] =
                    o;
                }
                return e;
              }, {});
            },
          },
          methods: {
            getBEMClass: function (e) {
              return (0, f.g)("afs-upload-file", e);
            },
            handleDrop: function (e) {
              var t = this;
              this.droppable &&
                m(e.dataTransfer.items).then(function (r) {
                  t.load(e.dataTransfer.files, r.__hasFolders);
                });
            },
            handleChange: function (e) {
              this.load(e.target.files);
            },
            handleOver: function () {
              this.droppable && (this.isProcessing = !0);
            },
            handleLeave: function () {
              this.droppable && (this.isProcessing = !1);
            },
            addSnackbarListeners: function (e, t, r) {
              var n = t.split(":");
              if (n.includes("snackbar")) {
                var o = n
                  .filter(function (e) {
                    return "snackbar" !== e;
                  })
                  .join(":");
                e.snackbar[o] = r;
              }
            },
            emitError: function (e) {
              (this.clear(), this.$emit("error", e), this.snackbar.open());
            },
            emitChange: function (e) {
              (this.snackbar.close(),
                (this.files = e),
                this.$emit("change", e));
            },
            load: function (e, t) {
              var r = !this.validator(e);
              ((this.isProcessing = !1),
                r || t ? this.emitError(t) : this.emitChange(e));
            },
            clear: function () {
              ((this.files = null), (this.$refs.input.value = ""));
            },
          },
        },
        j = ["data-locator"],
        A = { class: "afs-upload-file__inner" },
        L = { class: "afs-upload-dropzone__content" },
        x = { key: 2, class: "afs-upload-file__footer" },
        D = ["multiple", "data-locator", "accept"],
        B = (0, b._)(F, [
          [
            "render",
            function (e, t, r, o, i, a) {
              var l = (0, n.resolveComponent)("Icon"),
                s = (0, n.resolveComponent)("AfsText"),
                c = (0, n.resolveComponent)("Snackbar");
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)(
                  "div",
                  {
                    class: (0, n.normalizeClass)([
                      "afs-upload-file",
                      a.classes,
                    ]),
                    "data-locator": r.dataLocator,
                    onDrop:
                      t[1] ||
                      (t[1] = (0, n.withModifiers)(
                        function () {
                          return (
                            a.handleDrop && a.handleDrop.apply(a, arguments)
                          );
                        },
                        ["prevent"],
                      )),
                    onDragover:
                      t[2] ||
                      (t[2] = (0, n.withModifiers)(
                        function () {
                          return (
                            a.handleOver && a.handleOver.apply(a, arguments)
                          );
                        },
                        ["prevent"],
                      )),
                    onDragleave:
                      t[3] ||
                      (t[3] = (0, n.withModifiers)(
                        function () {
                          return (
                            a.handleLeave && a.handleLeave.apply(a, arguments)
                          );
                        },
                        ["prevent"],
                      )),
                  },
                  [
                    (0, n.createElementVNode)("label", A, [
                      r.icon
                        ? ((0, n.openBlock)(),
                          (0, n.createBlock)(
                            l,
                            {
                              key: 0,
                              name: r.icon,
                              class: (0, n.normalizeClass)([
                                "afs-upload-file__icon",
                                a.iconClass,
                              ]),
                              filled: r.iconFilled,
                            },
                            null,
                            8,
                            ["name", "class", "filled"],
                          ))
                        : (0, n.createCommentVNode)("", !0),
                      (0, n.createElementVNode)("span", L, [
                        r.hasTitle
                          ? ((0, n.openBlock)(),
                            (0, n.createBlock)(
                              s,
                              {
                                key: 0,
                                inline: !0,
                                type: a.titleType,
                                class: "afs-upload-file__title",
                              },
                              {
                                default: (0, n.withCtx)(function () {
                                  return [
                                    (0, n.renderSlot)(e.$slots, "title", {
                                      getBEMClass: a.getBEMClass,
                                    }),
                                  ];
                                }),
                                _: 3,
                              },
                              8,
                              ["type"],
                            ))
                          : (0, n.createCommentVNode)("", !0),
                        r.hasText
                          ? ((0, n.openBlock)(),
                            (0, n.createBlock)(
                              s,
                              {
                                key: 1,
                                inline: !0,
                                type: a.textType,
                                class: "afs-upload-file__text",
                              },
                              {
                                default: (0, n.withCtx)(function () {
                                  return [
                                    (0, n.renderSlot)(e.$slots, "text", {
                                      getBEMClass: a.getBEMClass,
                                    }),
                                  ];
                                }),
                                _: 3,
                              },
                              8,
                              ["type"],
                            ))
                          : (0, n.createCommentVNode)("", !0),
                        r.hasExtraContent
                          ? ((0, n.openBlock)(),
                            (0, n.createElementBlock)("span", x, [
                              (0, n.renderSlot)(e.$slots, "default", {
                                getBEMClass: a.getBEMClass,
                              }),
                            ]))
                          : (0, n.createCommentVNode)("", !0),
                      ]),
                      (0, n.createElementVNode)(
                        "input",
                        {
                          ref: "input",
                          type: "file",
                          class: "afs-upload-file__input",
                          multiple: r.multiple,
                          "data-locator": "".concat(r.dataLocator, "-control"),
                          accept: r.accept,
                          onChange:
                            t[0] ||
                            (t[0] = function () {
                              return (
                                a.handleChange &&
                                a.handleChange.apply(a, arguments)
                              );
                            }),
                        },
                        null,
                        40,
                        D,
                      ),
                    ]),
                    (0, n.createVNode)(
                      c,
                      (0, n.mergeProps)(
                        {
                          ref: "snackbar",
                          "container-id": r.snackbarContainerId,
                          autoclose: "",
                          icon: "🚫",
                        },
                        a.snackbarListeners,
                      ),
                      {
                        default: (0, n.withCtx)(function () {
                          return [(0, n.renderSlot)(e.$slots, "error-message")];
                        }),
                        _: 3,
                      },
                      16,
                      ["container-id"],
                    ),
                  ],
                  42,
                  j,
                )
              );
            },
          ],
        ]),
        V = r(30171),
        M = r(33469);
      function $(e) {
        return (
          ($ =
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
          $(e)
        );
      }
      function N(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                U(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : N(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function U(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != $(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != $(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == $(t) ? t : t + "";
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
      var z = window.__CORE__,
        R = window.__APP__.library,
        W = R.Vuex.mapState,
        Z = R.i18n.t;
      const G = {
          name: "AppCompare",
          components: {
            AfsUploadArea: w,
            AfsText: k.A,
            AfsLink: V.A,
            AfsUploadFile: B,
            FoldersButtonsTree: M.Z,
          },
          data: function () {
            return {
              uploadErrorType: null,
              uploadingFileMaxSize: 50,
              errors: {},
              t: Z,
            };
          },
          computed: I(
            I({}, W(["treeMenu"])),
            {},
            {
              uploadTitle: function () {
                return "Drop gerber to compare";
              },
              hasTree: function () {
                return this.treeMenu.length;
              },
              errorMessages: function () {
                var e = "Please upload your file",
                  t = "Upload file size larger than ".concat(
                    this.uploadingFileMaxSize,
                    " MB",
                  ),
                  r =
                    "Multiple files upload is not supported yet. Please select only one file or ZIP archive.";
                return {
                  isEmpty: e,
                  hasWrongSize: t,
                  hasOneFileError: r,
                  fileIsRequired: e,
                  fileIsEmpty: e,
                  notSupportedFileContent: r,
                  fileIsTooBig: t,
                  hasFolder:
                    "Drag and drop folder(s) is not supported yet. Please select only one file or ZIP archive.",
                };
              },
            },
          ),
          methods: {
            handleLoadFiles: function (e) {
              z.bus.emit("ComparePanel:upload", e);
            },
            handleStructureSelect: function (e) {
              z.bus.emit("ComparePanel:select", e);
            },
            uploadValidator: function (e) {
              var t = (function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = !(e = Object.values(e)).length,
                  n =
                    !r &&
                    !(function (e, t) {
                      return (
                        e.reduce(function (e, t) {
                          return e + t.size / 1048576;
                        }, 0) <= (t || 50)
                      );
                    })(e, t.maxSize),
                  o =
                    !r &&
                    !(function (e) {
                      return 1 === e.length;
                    })(e),
                  i = { isEmpty: r, hasWrongSize: n, hasOneFileError: o },
                  a = Object.entries(i).find(function (e) {
                    return e[1];
                  });
                return { errorType: a && a[0], isValid: !a };
              })(e, { maxSize: this.uploadingFileMaxSize });
              return ((this.uploadErrorType = t.errorType), t.isValid);
            },
            handleErrorFiles: function (e) {
              this.setError({
                hasError: !0,
                field: "file",
                message: e
                  ? this.errorMessages.hasFolder
                  : this.errorMessages[this.uploadErrorType],
              });
            },
            setError: function (e) {
              var t = e.field,
                r = e.hasError,
                n = e.message;
              r ? (this.errors[t] = n) : delete this.errors[t];
            },
            handleUploadSnackbarClose: function () {
              this.setError({ hasError: !1, field: "file" });
            },
          },
        },
        H = (0, r(46021).Z)(G, [
          [
            "render",
            function (e, t, r, o, i, u) {
              var f = (0, n.resolveComponent)("AfsText"),
                p = (0, n.resolveComponent)("FoldersButtonsTree"),
                d = (0, n.resolveComponent)("AfsLink"),
                h = (0, n.resolveComponent)("AfsUploadFile"),
                y = (0, n.resolveComponent)("AfsUploadArea");
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)("div", a, [
                  u.hasTree
                    ? ((0, n.openBlock)(),
                      (0, n.createElementBlock)("div", l, [
                        (0, n.createVNode)(
                          f,
                          { class: "app-compare-panel__tree-text" },
                          {
                            default: (0, n.withCtx)(function () {
                              return [s];
                            }),
                            _: 1,
                          },
                        ),
                        (0, n.createVNode)(
                          p,
                          {
                            ref: "foldersButtonsTree",
                            tree: e.treeMenu,
                            "onStructure:select": u.handleStructureSelect,
                          },
                          null,
                          8,
                          ["tree", "onStructure:select"],
                        ),
                      ]))
                    : (0, n.createCommentVNode)("v-if", !0),
                  (0, n.createVNode)(
                    y,
                    {
                      class: "app-compare-panel__upload",
                      style: (0, n.normalizeStyle)({
                        height: u.hasTree ? "40%" : "100%",
                      }),
                      "overlay-offset": "16",
                      validator: u.uploadValidator,
                      onError: u.handleErrorFiles,
                      onChange: u.handleLoadFiles,
                      "onSnackbar:afterLeave": u.handleUploadSnackbarClose,
                    },
                    {
                      default: (0, n.withCtx)(function () {
                        return [
                          (0, n.createVNode)(
                            h,
                            {
                              ref: "dropZone",
                              droppable: !1,
                              type: "full",
                              "has-title": !1,
                              "has-extra-content": "",
                              icon: "upload-32",
                              validator: u.uploadValidator,
                              onError: u.handleErrorFiles,
                              onChange: u.handleLoadFiles,
                              "onSnackbar:afterLeave":
                                u.handleUploadSnackbarClose,
                            },
                            {
                              text: (0, n.withCtx)(function () {
                                return [
                                  (0, n.createVNode)(
                                    f,
                                    {
                                      class: "app-compare-panel__upload-title",
                                      type: "large title",
                                    },
                                    {
                                      default: (0, n.withCtx)(function () {
                                        return [
                                          (0, n.createTextVNode)(
                                            (0, n.toDisplayString)(
                                              u.uploadTitle,
                                            ),
                                            1,
                                          ),
                                        ];
                                      }),
                                      _: 1,
                                    },
                                  ),
                                  (0, n.createVNode)(f, null, {
                                    default: (0, n.withCtx)(function () {
                                      return [
                                        c,
                                        (0, n.createVNode)(d, null, {
                                          default: (0, n.withCtx)(function () {
                                            return [
                                              (0, n.createTextVNode)(
                                                (0, n.toDisplayString)(
                                                  e.t(
                                                    "viewer.plugins.ComparePanel.App.chooseFromComputerLink",
                                                  ),
                                                ),
                                                1,
                                              ),
                                            ];
                                          }),
                                          _: 1,
                                        }),
                                      ];
                                    }),
                                    _: 1,
                                  }),
                                ];
                              }),
                              "error-message": (0, n.withCtx)(function () {
                                return [
                                  (0, n.createTextVNode)(
                                    (0, n.toDisplayString)(e.errors.file),
                                    1,
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                            8,
                            [
                              "validator",
                              "onError",
                              "onChange",
                              "onSnackbar:afterLeave",
                            ],
                          ),
                        ];
                      }),
                      "error-message": (0, n.withCtx)(function () {
                        return [
                          (0, n.createTextVNode)(
                            (0, n.toDisplayString)(e.errors.file),
                            1,
                          ),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    [
                      "style",
                      "validator",
                      "onError",
                      "onChange",
                      "onSnackbar:afterLeave",
                    ],
                  ),
                ])
              );
            },
          ],
        ]);
      function q(e) {
        return (
          (q =
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
          q(e)
        );
      }
      function J(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, K(n.key), n));
        }
      }
      function K(e) {
        var t = (function (e, t) {
          if ("object" != q(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != q(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == q(t) ? t : t + "";
      }
      function Q(e, t, r) {
        return (
          (t = Y(t)),
          (function (e, t) {
            if (t && ("object" == q(t) || "function" == typeof t)) return t;
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
            X()
              ? Reflect.construct(t, r || [], Y(e).constructor)
              : t.apply(e, r),
          )
        );
      }
      function X() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (X = function () {
          return !!e;
        })();
      }
      function Y(e) {
        return (
          (Y = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Y(e)
        );
      }
      function ee(e, t) {
        return (
          (ee = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          ee(e, t)
        );
      }
      var te = window.__APP__.createModule,
        re = window.__CORE__,
        ne = window.__APP__.analytics,
        oe = [
          {
            id: "workspace",
            icon: "workspace",
            title: "Altium Workspace",
            type: "accordion",
            iconFilled: !1,
            isOpen: !0,
            isShow: !0,
            isSelected: !1,
            isLoadedFiles: !0,
            folders: [
              {
                id: new Date().getTime() + 1,
                typeFile: "sources",
                list: [
                  {
                    id: 12,
                    icon: "pcb-16",
                    title: "Test-file1",
                    typeFile: "sources",
                    iconFilled: !0,
                    transparent: !0,
                    isFolder: !1,
                  },
                  {
                    id: 13,
                    icon: "pcb-16",
                    title: "Test-file2",
                    typeFile: "sources",
                    iconFilled: !0,
                    transparent: !0,
                    isFolder: !1,
                  },
                  {
                    id: 14,
                    icon: "pcb-16",
                    title: "Test-file3",
                    typeFile: "sources",
                    iconFilled: !0,
                    transparent: !0,
                    isFolder: !1,
                    isDisabled: !0,
                  },
                ],
              },
            ],
          },
          {
            id: "uploads",
            icon: "uploads-16",
            title: "Upoads",
            type: "accordion",
            iconFilled: !1,
            isShow: !0,
            isLoadedFiles: !0,
            isSelected: !1,
            folders: [
              {
                id: new Date().getTime() + 1,
                typeFile: "sources",
                list: [
                  {
                    id: 12,
                    icon: "pcb-16",
                    title: "Test-upload-1",
                    typeFile: "sources",
                    iconFilled: !0,
                    transparent: !0,
                    isFolder: !1,
                  },
                  {
                    id: 13,
                    icon: "pcb-16",
                    title: "Test-upload-2",
                    typeFile: "sources",
                    iconFilled: !0,
                    transparent: !0,
                    isFolder: !1,
                  },
                  {
                    id: 14,
                    icon: "pcb-16",
                    title: "Test-upload-3",
                    typeFile: "sources",
                    iconFilled: !0,
                    transparent: !0,
                    isFolder: !1,
                    isDisabled: !0,
                  },
                ],
              },
            ],
          },
          {
            id: "shared",
            icon: "shared-16",
            title: "Shared with Me",
            type: "accordion",
            iconFilled: !1,
            isShow: !0,
            isLoadedFiles: !0,
            isSelected: !1,
            folders: [
              {
                id: new Date().getTime() + 1,
                typeFile: "sources",
                list: [
                  {
                    id: 12,
                    icon: "pcb-16",
                    title: "Test-shared-file1",
                    typeFile: "sources",
                    iconFilled: !0,
                    transparent: !0,
                    isFolder: !1,
                  },
                  {
                    id: 13,
                    icon: "pcb-16",
                    title: "Test-shared-file2",
                    typeFile: "sources",
                    iconFilled: !0,
                    transparent: !0,
                    isFolder: !1,
                  },
                  {
                    id: 14,
                    icon: "pcb-16",
                    title: "Test-shared-file3",
                    typeFile: "sources",
                    iconFilled: !0,
                    transparent: !0,
                    isFolder: !1,
                    isDisabled: !0,
                  },
                ],
              },
            ],
          },
        ],
        ie = te({
          type: "Plugin",
          description: "Compare",
          create: function (e) {
            var t = (function (e) {
              function t() {
                var e;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  ((e = Q(this, t, [
                    {
                      name: "ComparePanel",
                      displayIcon: "compare-design-16",
                      comment: "Compare Panel",
                      description: "Compare Panel",
                      dependencies: [],
                      order: 0,
                      hint: "Compare",
                      owner: "GerberCompareSourceView",
                      localType: "primary",
                      view: {
                        type: "modal",
                        title: "Compare",
                        config: { type: "aside-right" },
                      },
                    },
                  ])).isHidden = !1),
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
                    t && ee(e, t));
                })(t, e),
                (r = t),
                (a = [
                  {
                    key: "hidden",
                    get: function () {
                      return this.isHidden;
                    },
                  },
                  {
                    key: "setup",
                    value: function () {
                      var e = this;
                      return new Promise(function (t) {
                        (e.initListeners(), t());
                      });
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return [
                        "ComparePanel:upload",
                        "ComparePanel:setTree",
                        "ComparePanel:select",
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
                          (0, n.createApp)(H).use(i).mount("#".concat(e)))));
                    },
                  },
                  {
                    key: "activate",
                    value: function () {
                      (this.inited || this.initView(),
                        ne.dispatchPanelsEvent("Gerber.ComparePanel", {
                          action: "Opened",
                        }));
                    },
                  },
                  { key: "deactivate", value: function () {} },
                  {
                    key: "initListeners",
                    value: function () {
                      (this.initOnUploadListener(),
                        this.initOnSetTreeListener(),
                        this.initOnSelectListener());
                    },
                  },
                  {
                    key: "initOnUploadListener",
                    value: function () {
                      re.bus.on("ComparePanel:upload", function (e) {
                        return console.log("on upload ", e);
                      });
                    },
                  },
                  {
                    key: "initOnSetTreeListener",
                    value: function () {
                      re.bus.on("ComparePanel:setTree", function (e) {
                        return (function (e) {
                          return o.commit("setTreeMenu", e);
                        })(e || oe);
                      });
                    },
                  },
                  {
                    key: "initOnSelectListener",
                    value: function () {
                      re.bus.on("ComparePanel:select", function (e) {
                        return console.log("select from tree ", e);
                      });
                    },
                  },
                ]) && J(r.prototype, a),
                Object.defineProperty(r, "prototype", { writable: !1 }),
                r
              );
              var r, a;
            })(e);
            return new t();
          },
        });
      re && re.addModule(ie);
    },
    10311: (e) => {
      e.exports = Vue;
    },
  },
  (e) => {
    (e.O(0, [66951, 21759], () => e((e.s = 40372))), e.O());
  },
]);
