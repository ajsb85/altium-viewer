/*! For license information please see sch.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [62143],
  {
    75072: (t, e, n) => {
      var r = n(31993),
        i = n(61204);
      function o(t) {
        return (
          (o =
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
          o(t)
        );
      }
      function a() {
        a = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          c = "function" == typeof Symbol ? Symbol : {},
          u = c.iterator || "@@iterator",
          s = c.asyncIterator || "@@asyncIterator",
          l = c.toStringTag || "@@toStringTag";
        function h(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          h({}, "");
        } catch (t) {
          h = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function f(t, e, n, r) {
          var o = e && e.prototype instanceof b ? e : b,
            a = Object.create(o.prototype),
            c = new T(r || []);
          return (i(a, "_invoke", { value: O(t, n, c) }), a);
        }
        function d(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = f;
        var m = "suspendedStart",
          v = "suspendedYield",
          p = "executing",
          y = "completed",
          g = {};
        function b() {}
        function w() {}
        function S() {}
        var k = {};
        h(k, u, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(A([])));
        x && x !== n && r.call(x, u) && (k = x);
        var I = (S.prototype = b.prototype = Object.create(k));
        function P(t) {
          ["next", "throw", "return"].forEach(function (e) {
            h(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function L(t, e) {
          function n(i, a, c, u) {
            var s = d(t[i], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                h = l.value;
              return h && "object" == o(h) && r.call(h, "__await")
                ? e.resolve(h.__await).then(
                    function (t) {
                      n("next", t, c, u);
                    },
                    function (t) {
                      n("throw", t, c, u);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      ((l.value = t), c(l));
                    },
                    function (t) {
                      return n("throw", t, c, u);
                    },
                  );
            }
            u(s.arg);
          }
          var a;
          i(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function O(e, n, r) {
          var i = m;
          return function (o, a) {
            if (i === p) throw Error("Generator is already running");
            if (i === y) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = D(c, r);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === m) throw ((i = y), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = p;
              var s = d(e, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? y : v), s.arg === g)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = y), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function D(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                D(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              g
            );
          var o = d(i, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"),
              (n.arg = o.arg),
              (n.delegate = null),
              g
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function C(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function T(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0));
        }
        function A(e) {
          if (e || "" === e) {
            var n = e[u];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                a = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i))
                      return ((n.value = e[i]), (n.done = !1), n);
                  return ((n.value = t), (n.done = !0), n);
                };
              return (a.next = a);
            }
          }
          throw new TypeError(o(e) + " is not iterable");
        }
        return (
          (w.prototype = S),
          i(I, "constructor", { value: S, configurable: !0 }),
          i(S, "constructor", { value: w, configurable: !0 }),
          (w.displayName = h(S, l, "GeneratorFunction")),
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
                : ((t.__proto__ = S), h(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(I)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          P(L.prototype),
          h(L.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = L),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new L(f(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          P(I),
          h(I, l, "Generator"),
          h(I, u, function () {
            return this;
          }),
          h(I, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return ((t.value = r), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = A),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), g)
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
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return (this.complete(n.completion, n.afterLoc), C(n), g);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    C(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: A(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      }
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, u(r.key), r));
        }
      }
      function u(t) {
        var e = (function (t, e) {
          if ("object" != o(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == o(e) ? e : e + "";
      }
      var s = function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        },
        l = (function () {
          return (
            (t = function t(e, n, i) {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.item = e),
                (this.dataProvider = n),
                (this.isUnique = i),
                (this._modelId = ""),
                (this._displayName = ""),
                (this._loadState = r.wF.IDLE),
                (this._renderData = null),
                (this._error = null),
                (this._displayName = e.isChannel
                  ? this.formatChannelName(e.displayName, e.channelName)
                  : e.displayName));
            }),
            (e = [
              {
                key: "id",
                get: function () {
                  return this.item.id;
                },
              },
              {
                key: "channelId",
                get: function () {
                  return this.item.channelId;
                },
              },
              {
                key: "channelIndex",
                get: function () {
                  return this.item.channelIndex;
                },
              },
              {
                key: "channelName",
                get: function () {
                  return this.item.channelName;
                },
              },
              {
                key: "channelSafeName",
                get: function () {
                  return this.item.channelSafeName;
                },
              },
              {
                key: "channelKind",
                get: function () {
                  return this.item.channelKind;
                },
              },
              {
                key: "name",
                get: function () {
                  return this.item.displayName;
                },
              },
              {
                key: "displayName",
                get: function () {
                  return this._displayName;
                },
              },
              {
                key: "order",
                get: function () {
                  return this.item.order;
                },
              },
              {
                key: "modelId",
                get: function () {
                  return this._modelId;
                },
                set: function (t) {
                  if (void 0 === t)
                    throw new Error(
                      "Document model id value can not be undefined.",
                    );
                  t !== this._modelId && (this._modelId = t);
                },
              },
              {
                key: "modelUniqueId",
                get: function () {
                  return this.item.isChannel
                    ? "".concat(this.modelId, "-").concat(this.channelId)
                    : this.modelId;
                },
              },
              {
                key: "sourceKind",
                get: function () {
                  return this.item.sourceKind;
                },
              },
              {
                key: "loadState",
                get: function () {
                  return this._loadState;
                },
                set: function (t) {
                  t !== this._loadState && (this._loadState = t);
                },
              },
              {
                key: "renderData",
                get: function () {
                  return this._renderData;
                },
              },
              {
                key: "previewUrl",
                get: function () {
                  return this.dataProvider.getPreviewUrl(this.item.fileName);
                },
              },
              {
                key: "error",
                get: function () {
                  return this._error;
                },
              },
              {
                key: "metadata",
                get: function () {
                  return this.dataProvider.getMetadata(this.item.fileName);
                },
              },
              {
                key: "setError",
                value: function (t) {
                  t !== this._error && (this._error = t);
                },
              },
              {
                key: "parentId",
                get: function () {
                  return this.item.parentIds && this.item.parentIds.length > 0
                    ? this.item.parentIds[0]
                    : "";
                },
              },
              {
                key: "originalDocumentInfo",
                get: function () {
                  return this.item.originalDocumentInfo;
                },
              },
              {
                key: "loadRenderData",
                value: function () {
                  return s(
                    this,
                    void 0,
                    void 0,
                    a().mark(function t() {
                      return a().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.dataProvider.getRenderData(
                                    this.item.fileName,
                                  )
                                );
                              case 2:
                                this._renderData = t.sent;
                              case 3:
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
                key: "loadModelId",
                value: function () {
                  return s(
                    this,
                    void 0,
                    void 0,
                    a().mark(function t() {
                      return a().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.dataProvider.getModelId(
                                    this.item.fileName,
                                  )
                                );
                              case 2:
                                this._modelId = t.sent;
                              case 3:
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
                key: "formatChannelName",
                value: function (t, e) {
                  var n = t;
                  return (
                    t.split(".").length > 1 &&
                      (n = t.split(".").slice(0, -1).join(".")),
                    e ? "".concat(n, " (").concat(e, ")") : n
                  );
                },
              },
            ]) && c(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        h = n(52176),
        f = n(5578);
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
      function m(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, v(r.key), r));
        }
      }
      function v(t) {
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
      var p = (function () {
          return (
            (t = function t(e, i) {
              var o,
                a,
                c = this;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.updateVariant = function (t) {
                  (null == t ? void 0 : t.projectVariant) &&
                    c.setVariant(t.projectVariant.uniqueId);
                }),
                (this.setVariant = function (t) {
                  c.currentVariant !== t &&
                    ((c.currentVariant = t), c.update());
                }),
                (this.setChannel = function (t) {
                  var e, n;
                  c.currentChannel = t.isUnique
                    ? ""
                    : null !==
                          (n =
                            null !== (e = t.channelSafeName) && void 0 !== e
                              ? e
                              : t.channelName) && void 0 !== n
                      ? n
                      : "";
                }),
                (this.staticStyles =
                  " .activeMouse {pointer-events:all} .activeMouse:hover {cursor:pointer} .highlightedComponent {stroke:#868BFF; stroke-width:2px} text { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } text::selection { background: none; }"),
                (this.styleElement = n.g.document.createElement("style")),
                e.insertBefore(this.styleElement, e.firstChild));
              var u = { currentVariant: null };
              (r.QY.bus.emit("Variants:getCurrent", u),
                (this.currentVariant =
                  null !==
                    (a =
                      null === (o = u.currentVariant) || void 0 === o
                        ? void 0
                        : o.uniqueId) && void 0 !== a
                    ? a
                    : r.hZ),
                this.setChannel(i),
                this.update(),
                r.QY.bus.on("Variants:changed", this.updateVariant));
            }),
            (e = [
              {
                key: "destroy",
                value: function () {
                  r.QY.bus.off("Variants:changed", this.updateVariant);
                },
              },
              {
                key: "update",
                value: function () {
                  var t = this.staticStyles;
                  ((t += " [data-variant-id] { visibility: hidden }"),
                    (t +=
                      " .activeMouse[data-variant-id] { pointer-events:none }"));
                  var e =
                    this.currentVariant === r.hZ ? "" : this.currentChannel;
                  ((t += ' [data-variant-id~="'
                    .concat(this.currentVariant)
                    .concat(e, '"] { visibility: visible }')),
                    (t += ' .activeMouse[data-variant-id~="'
                      .concat(this.currentVariant)
                      .concat(e, '"] { pointer-events:all }')),
                    (this.styleElement.innerHTML = t));
                },
              },
            ]) && m(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        y = n(64419);
      function g(t) {
        return (
          (g =
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
          g(t)
        );
      }
      function b(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, w(r.key), r));
        }
      }
      function w(t) {
        var e = (function (t, e) {
          if ("object" != g(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != g(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == g(e) ? e : e + "";
      }
      var S = (function () {
        return (
          (t = function t(e, n, r, i) {
            var o = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.toString = function () {
                return ""
                  .concat(Math.round(o.x1), " : ")
                  .concat(Math.round(o.y1), " - ")
                  .concat(Math.round(o.x2), " : ")
                  .concat(Math.round(o.y2), " / ")
                  .concat(Math.round(o.width), " x ")
                  .concat(Math.round(o.height));
              }),
              this.setup(e, n, r, i));
          }),
          (e = [
            {
              key: "x1",
              get: function () {
                return this.left;
              },
            },
            {
              key: "y1",
              get: function () {
                return this.bottom;
              },
            },
            {
              key: "x2",
              get: function () {
                return this.right;
              },
            },
            {
              key: "y2",
              get: function () {
                return this.top;
              },
            },
            {
              key: "width",
              get: function () {
                return this.right - this.left;
              },
            },
            {
              key: "height",
              get: function () {
                return this.top - this.bottom;
              },
            },
            {
              key: "location1",
              get: function () {
                return { x: this.left, y: this.bottom };
              },
            },
            {
              key: "location2",
              get: function () {
                return { x: this.right, y: this.top };
              },
            },
            {
              key: "normalize",
              value: function () {
                this.setup(this.left, this.bottom, this.right, this.top);
              },
            },
            {
              key: "setup",
              value: function (t, e, n, r) {
                ((this.left = Math.min(t, n)),
                  (this.bottom = Math.min(e, r)),
                  (this.right = Math.max(t, n)),
                  (this.top = Math.max(e, r)));
              },
            },
          ]) && b(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function k(t, e) {
        return (e.normalize(), E(t.location1, e) && E(t.location2, e));
      }
      function E(t, e) {
        return t.x >= e.x1 && t.y >= e.y1 && t.x <= e.x2 && t.y <= e.y2;
      }
      function x(t, e, n) {
        return (
          (e = P(e)),
          (function (t, e) {
            if (e && ("object" == O(e) || "function" == typeof e)) return e;
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
            I()
              ? Reflect.construct(e, n || [], P(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function I() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (I = function () {
          return !!t;
        })();
      }
      function P(t) {
        return (
          (P = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          P(t)
        );
      }
      function L(t, e) {
        return (
          (L = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          L(t, e)
        );
      }
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
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function j(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, T(r.key), r));
        }
      }
      function C(t, e, n) {
        return (
          e && j(t.prototype, e),
          n && j(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function T(t) {
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
      function A(t, e) {
        return "EMPTY" === t ? new N() : "ERROR" === t ? new R(e) : new M(e);
      }
      var _ = function (t, e) {
          r.QY.bus.emit(t, e);
        },
        N = (function () {
          return C(
            function t() {
              (D(this, t),
                (this.errorState = null),
                (this.state = { zoom: 0, top: 0, left: 0 }),
                (this.useAnimatedZoomToFit = !1));
            },
            [
              {
                key: "type",
                get: function () {
                  return "EMPTY";
                },
              },
              {
                key: "documentId",
                get: function () {
                  return "";
                },
              },
              {
                key: "uniqueId",
                get: function () {
                  return "";
                },
              },
              {
                key: "channelId",
                get: function () {
                  return 0;
                },
              },
              {
                key: "render",
                value: function () {
                  return Promise.resolve();
                },
              },
              { key: "zoom", value: function () {} },
              {
                key: "zoomToFit",
                value: function () {
                  return Promise.resolve();
                },
              },
              { key: "move", value: function () {} },
              { key: "destroy", value: function () {} },
            ],
          );
        })(),
        R = (function (t) {
          function e(t) {
            var n;
            return (
              D(this, e),
              (n = x(this, e)),
              setTimeout(function () {
                return _("SchEngine:didDocumentAttachError", {
                  error: t.error,
                  document: t.document,
                });
              }, 0),
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
                e && L(t, e));
            })(e, t),
            C(e)
          );
        })(N),
        M = (function () {
          return C(
            function t(e) {
              var n,
                i = this;
              (D(this, t),
                (this.position = { x: 0, y: 0 }),
                (this.originSize = { width: 0, height: 0 }),
                (this.currentSize = { width: 0, height: 0 }),
                (this.zoomRelativePoint = { x: 0, y: 0 }),
                (this.scale = 100),
                (this.fitToZoomNeed = !1),
                (this.logger = r.QY.createLogger("SchDocumentRenderer")),
                (this.maskPath = null),
                (this.selectMask = null),
                (this.selectBound = null),
                (this.errorState = null),
                (this.useAnimatedZoomToFit = !1),
                (this.onDrawSelection = function (t) {
                  i.logger.LogDebug("Draw selection");
                  var e = 0,
                    n = 0,
                    r = 0,
                    o = 0;
                  if (
                    (t.items.forEach(function (t) {
                      (t.channel && t.channel !== i.channelId) ||
                        i.selectionService
                          .getActiveObjectsForItem(t)
                          .forEach(function (t) {
                            t &&
                              (i.drawSelection(t),
                              t.bounds &&
                                t.bounds.forEach(function (t) {
                                  ((n = n ? Math.min(n, t.x) : t.x),
                                    (e = e ? Math.min(e, t.y) : t.y),
                                    (r = r
                                      ? Math.max(r, t.x + t.width)
                                      : t.x + t.width),
                                    (o = o
                                      ? Math.max(o, t.y + t.height)
                                      : t.y + t.height));
                                }));
                          });
                    }),
                    t.fit && r - n && o - e)
                  ) {
                    var a = { x: n, y: e, width: r - n, height: o - e };
                    i.zoomToFit(a);
                  }
                }),
                (this.onZoomToObjects = function (t) {
                  var e = 0,
                    n = 0,
                    r = 0,
                    o = 0;
                  if (
                    (t.items.forEach(function (t) {
                      (t.channel && t.channel !== i.channelId) ||
                        i.selectionService
                          .getActiveObjectsForItem(t, !0)
                          .forEach(function (t) {
                            t &&
                              t.bounds &&
                              t.bounds.forEach(function (t) {
                                ((n = n ? Math.min(n, t.x) : t.x),
                                  (e = e ? Math.min(e, t.y) : t.y),
                                  (r = r
                                    ? Math.max(r, t.x + t.width)
                                    : t.x + t.width),
                                  (o = o
                                    ? Math.max(o, t.y + t.height)
                                    : t.y + t.height));
                              });
                          });
                    }),
                    r - n && o - e)
                  ) {
                    var a = { x: n, y: e, width: r - n, height: o - e };
                    i.zoomToFit(a);
                  }
                }),
                (this.drawHighlight = function (t) {
                  var e = t.localName;
                  if (i.isRectBox(t))
                    (t.setAttribute("stroke-width", "2px"),
                      t.setAttribute("stroke", "#868BFF"));
                  else if (
                    "line" === e ||
                    "polyline" === e ||
                    "rect" === e ||
                    "path" === e
                  ) {
                    var n = "stroke-width",
                      r = window.getComputedStyle(t)[n],
                      o = 1;
                    (r.match(/^\-?\d+(\.?\d*)px$/) &&
                      (o = parseFloat(r.substring(0, r.length - 2))),
                      t.setAttribute(n, "".concat(o + 2, "px")));
                  }
                  i.highlightGroup.appendChild(t);
                }),
                (this.clearHighlight = function () {
                  for (; i.highlightGroup.firstChild; )
                    i.highlightGroup.removeChild(i.highlightGroup.firstChild);
                }),
                (this.debounceEmitDocumentLocation = (0, y.D)(function () {
                  _(
                    "SchEngine:documentLocation",
                    Object.assign(Object.assign({}, i.state), { type: "sch" }),
                  );
                }, 250)),
                (this.document = e.document),
                (this.workspace = e.workspace));
              var o =
                null === (n = this.document.renderData) || void 0 === n
                  ? void 0
                  : n.documentElement.cloneNode(!0);
              ((this.svg = this.workspace.appendChild(o)),
                this.logger.LogDebug("Create for " + this.document.id),
                (this.svg.style.opacity = "0"),
                (this.scene = this.svg.getElementById("scene")),
                (this.sceneInfo = this.getSceneInfo()),
                (this.maskId = "".concat(this.scene.id, "_selection_mask")),
                (this.selectionService = e.selectionService),
                (this.originSize.width = this.svg.width.baseVal.value),
                (this.originSize.height = this.svg.height.baseVal.value),
                this.svg.setAttribute(
                  "viewBox",
                  "0 0 "
                    .concat(this.svg.width.baseVal.value, " ")
                    .concat(this.svg.height.baseVal.value),
                ),
                this.svg.setAttribute(
                  "width",
                  "".concat(this.originSize.width),
                ),
                this.svg.setAttribute(
                  "height",
                  "".concat(this.originSize.height),
                ),
                this.svg.setAttribute("style", "width: 100%; height: 100%"),
                (this.spaceVisibilityService =
                  this.createSpaceVisibilityService(this.workspace)),
                (this.selectionMaskGroup = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.selectionMaskGroup.id = this.scene.id + "SelectionMask"),
                this.scene.appendChild(this.selectionMaskGroup),
                (this.selectionGroup = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.selectionGroup.id = this.scene.id + "Selection"),
                this.scene.appendChild(this.selectionGroup),
                (this.highlightGroup = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.highlightGroup.id = this.scene.id + "Highlight"),
                this.scene.appendChild(this.highlightGroup),
                this.createMask(),
                (this.overlay = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )),
                (this.overlay.id = this.scene.id + "Overlay"),
                this.scene.appendChild(this.overlay));
              var a = new CustomEvent("didTransformChange", {
                detail: this.scene.transform,
              });
              ((this.overlay.didTransformChangeEvent = a),
                (this.onTransformUpdate = function () {
                  return i.overlay.dispatchEvent(a);
                }),
                (this.styleManager = new p(this.svg, this.document)),
                setTimeout(function (t) {
                  return _("SchEngine:didDocumentAttach", {
                    workspace: i.workspace,
                    svg: i.svg,
                    styleManager: i.styleManager,
                    overlay: i.overlay,
                    document: i.document,
                    documentWidth: i.originSize.width,
                    documentHeight: i.originSize.height,
                  });
                }, 0),
                (this.clearSelection = this.clearSelection.bind(this)),
                this.doSetupChannel(),
                r.QY.bus.on("SchEngine:clearHighlight", this.clearHighlight),
                r.QY.bus.on("SchEngine:drawHighlight", this.drawHighlight),
                r.QY.bus.on("SchEngine:clearSelection", this.clearSelection),
                r.QY.bus.on("SchEngine:drawSelection", this.onDrawSelection),
                r.QY.bus.on("SchEngine:zoomToObjects", this.onZoomToObjects));
            },
            [
              {
                key: "type",
                get: function () {
                  return "DEFAULT";
                },
              },
              {
                key: "documentId",
                get: function () {
                  return this.document.id;
                },
              },
              {
                key: "channelId",
                get: function () {
                  return this.document.channelId;
                },
              },
              {
                key: "state",
                get: function () {
                  return {
                    zoom: this.scale,
                    top: this.position.y,
                    left: this.position.x,
                  };
                },
                set: function (t) {
                  ((this.scale = t.zoom),
                    (this.position.x = t.left),
                    (this.position.y = t.top),
                    this.updateTransform());
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  return new Promise(function (e) {
                    ((t.svg.style.opacity = "1"),
                      t.spaceVisibilityService.onWindowResize(),
                      t.selectionService
                        .setupDocument(t.document, t.svg, t.scene)
                        .then(function (e) {
                          return e && t.scene.insertBefore(e, t.overlay);
                        })
                        .catch(function (e) {
                          return t.logger.LogError("Setup selection error", e);
                        }),
                      e());
                  });
                },
              },
              {
                key: "zoom",
                value: function (t, e, n) {
                  this.setZoomRelativePoint(t, e);
                  var r = (this.scale * (100 - n)) / 100;
                  (this.doZoom(r),
                    _("SchEngine:documentZoom", {
                      type: "zoom",
                      documentId: this.documentId,
                      scale: r,
                      x: t,
                      y: e,
                    }),
                    this.debounceEmitDocumentLocation());
                },
              },
              {
                key: "zoomToFit",
                value: function (t, e, n) {
                  var r = this;
                  return new Promise(function (i) {
                    new Promise(function (n) {
                      t
                        ? n(Object.assign({}, t))
                        : (((e = null != e ? e : [0, 0, 0, 0])[3] -=
                            window.__CORE__.settings.zoomOffsets[3]),
                          r.spaceVisibilityService.displayed
                            ? n({
                                x: 0,
                                y: 0,
                                width: r.sceneInfo.width,
                                height: r.sceneInfo.height,
                              })
                            : (r.fitToZoomNeed = !0));
                    })
                      .then(function (t) {
                        return r.zoomRectangleToFit(
                          t.x,
                          t.y,
                          t.width,
                          t.height,
                          e,
                          n,
                        );
                      })
                      .then(function () {
                        (r.updateTransform(), i());
                      })
                      .catch(function (t) {
                        (r.logger.LogError(t.message), i());
                      })
                      .finally(function () {
                        _(
                          "SchEngine:documentLocation",
                          Object.assign(Object.assign({}, r.state), {
                            type: "sch",
                          }),
                        );
                      });
                  });
                },
              },
              {
                key: "move",
                value: function (t, e) {
                  var n = Math.min(
                    this.spaceVisibilityService.size.width /
                      this.sceneInfo.width,
                    this.spaceVisibilityService.size.height /
                      this.sceneInfo.height,
                  );
                  n &&
                    ((this.position.x += t / n),
                    (this.position.y += e / n),
                    this.updateTransform());
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this.logger.LogDebug("Destroy for " + this.documentId),
                    r.QY.bus.off(
                      "SchEngine:clearHighlight",
                      this.clearHighlight,
                    ),
                    r.QY.bus.off("SchEngine:drawHighlight", this.drawHighlight),
                    r.QY.bus.off(
                      "SchEngine:clearSelection",
                      this.clearSelection,
                    ),
                    r.QY.bus.off(
                      "SchEngine:drawSelection",
                      this.onDrawSelection,
                    ),
                    r.QY.bus.off(
                      "SchEngine:zoomToObjects",
                      this.onZoomToObjects,
                    ),
                    this.styleManager.destroy(),
                    _("SchEngine:didDocumentDettach", null));
                  try {
                    (this.spaceVisibilityService.destroy(),
                      this.workspace &&
                        (this.workspace.removeChild(this.svg),
                        (this.workspace = null)));
                  } catch (t) {
                    this.logger.LogError(
                      "Destroy renderer error. ".concat(t.message),
                    );
                  }
                },
              },
              {
                key: "createMask",
                value: function () {
                  var t = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "defs",
                    ),
                    e = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "mask",
                    );
                  (e.setAttribute("id", this.maskId),
                    e.setAttribute("maskContentUnits", "userSpaceOnUse"),
                    t.appendChild(e));
                  var n = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                  );
                  (n.setAttribute("width", "".concat(this.originSize.width)),
                    n.setAttribute("height", "".concat(this.originSize.height)),
                    n.setAttribute("fill", "white"),
                    n.setAttribute("opacity", "0.3"),
                    e.appendChild(n),
                    (this.maskPath = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path",
                    )),
                    this.maskPath.setAttribute("fill", "black"),
                    e.appendChild(this.maskPath),
                    this.scene.insertBefore(t, this.scene.firstChild),
                    (this.selectMask = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "rect",
                    )),
                    this.selectMask.setAttribute(
                      "width",
                      "".concat(this.originSize.width),
                    ),
                    this.selectMask.setAttribute(
                      "height",
                      "".concat(this.originSize.height),
                    ),
                    this.selectMask.setAttribute(
                      "mask",
                      "url(#".concat(this.maskId, ")"),
                    ),
                    this.selectMask.setAttribute("fill", "grey"),
                    (this.selectMask.style.visibility = "hidden"),
                    this.selectionMaskGroup.appendChild(this.selectMask),
                    (this.selectBound = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path",
                    )),
                    this.selectBound.setAttribute("stroke", "blue"),
                    this.selectBound.setAttribute("stroke-width", "3px"),
                    this.selectBound.setAttribute(
                      "mask",
                      "url(#".concat(this.maskId, ")"),
                    ),
                    (this.selectBound.style.visibility = "hidden"),
                    this.selectionMaskGroup.appendChild(this.selectBound));
                },
              },
              {
                key: "drawSelection",
                value: function (t) {
                  if (this.maskPath) {
                    if (t && t.bounds) {
                      var e = t.bounds
                          .map(function (t) {
                            return "M"
                              .concat(t.x, " ")
                              .concat(t.y, " H")
                              .concat(t.x + t.width, " V")
                              .concat(t.y + t.height, " H")
                              .concat(t.x, " Z");
                          })
                          .join(" "),
                        n = this.maskPath.getAttribute("d");
                      (n
                        ? this.maskPath.setAttribute("d", n + " " + e)
                        : this.maskPath.setAttribute("d", e),
                        this.selectBound &&
                          (this.selectBound.setAttribute(
                            "d",
                            this.maskPath.getAttribute("d"),
                          ),
                          (this.selectBound.style.visibility = "visible")),
                        this.selectMask &&
                          (this.selectMask.style.visibility = "visible"));
                    }
                    if (t && t.element) {
                      var r = t.element,
                        i = r.localName;
                      if (
                        "line" === i ||
                        "polyline" === i ||
                        "rect" === i ||
                        "path" === i
                      ) {
                        var o = "stroke-width",
                          a = window.getComputedStyle(r)[o],
                          c = 1;
                        (a.match(/^\-?\d+(\.?\d*)px$/) &&
                          (c = parseFloat(a.substring(0, a.length - 2))),
                          r.setAttribute(o, "".concat(c + 2, "px")));
                      }
                      this.selectionGroup.appendChild(r);
                    }
                  }
                },
              },
              {
                key: "isRectBox",
                value: function (t) {
                  if ("rect" === t.localName) {
                    var e = t.rx.baseVal.value,
                      n = t.ry.baseVal.value;
                    return !e && !n;
                  }
                  return !1;
                },
              },
              {
                key: "clearSelection",
                value: function (t) {
                  if (this.maskPath)
                    for (
                      this.maskPath.setAttribute("d", ""),
                        t.update ||
                          (this.selectBound &&
                            (this.selectBound.style.visibility = "hidden"),
                          this.selectMask &&
                            (this.selectMask.style.visibility = "hidden"));
                      this.selectionGroup.firstChild;
                    )
                      this.selectionGroup.removeChild(
                        this.selectionGroup.firstChild,
                      );
                },
              },
              {
                key: "createSpaceVisibilityService",
                value: function (t) {
                  var e = this,
                    n = new f.Z(t);
                  return (
                    n.on("didSizeChange", function () {
                      ((e.currentSize.width = n.size.width),
                        (e.currentSize.height = n.size.height),
                        setTimeout(function () {
                          e.onTransformUpdate && e.onTransformUpdate();
                        }, 0));
                    }),
                    n.on("shown", function () {
                      (e.fitToZoomNeed &&
                        ((e.fitToZoomNeed = !1), e.zoomToFit(null)),
                        (e.currentSize.width = n.size.width),
                        (e.currentSize.height = n.size.height),
                        setTimeout(function () {
                          e.onTransformUpdate && e.onTransformUpdate();
                        }, 0));
                    }),
                    n.on("hidden", function () {}),
                    n.displayed &&
                      ((this.currentSize.width = n.size.width),
                      (this.currentSize.height = n.size.height)),
                    n
                  );
                },
              },
              {
                key: "updateTransform",
                value: function () {
                  var t = "matrix("
                    .concat(this.scale / 100, " 0 0 ")
                    .concat(this.scale / 100, " ")
                    .concat(this.position.x, " ")
                    .concat(this.position.y, ")");
                  isNaN(this.scale) ||
                  isNaN(this.position.x) ||
                  isNaN(this.position.y)
                    ? this.logger.LogError("Transform value IsNAN")
                    : (this.scene.setAttribute("transform", t),
                      this.onTransformUpdate && this.onTransformUpdate());
                },
              },
              {
                key: "setZoomRelativePoint",
                value: function (t, e) {
                  ((this.zoomRelativePoint.x = t),
                    (this.zoomRelativePoint.y = e));
                },
              },
              {
                key: "zoomRectangleToFit",
                value: function (t, e, n, r, i, o) {
                  var a = this;
                  return new Promise(function (c, u) {
                    if (
                      a.sceneInfo.width &&
                      a.sceneInfo.height &&
                      n &&
                      0 !== n &&
                      r &&
                      0 !== r
                    ) {
                      var s = new S(t, e, t + n, e + r);
                      o ||
                        ((s.left = Math.max(0, s.left)),
                        (s.bottom = Math.max(0, s.bottom)),
                        (s.right = Math.min(a.sceneInfo.width, s.right)),
                        (s.top = Math.min(a.sceneInfo.height, s.top)));
                      var l = (function (t, e, n, r) {
                        var i = window.__CORE__.settings.zoomPrecision,
                          o = window.__CORE__.settings.zoomMaxPrecision;
                        if (i == o) return r;
                        var a = (o - i) / o,
                          c = Math.round(a * t),
                          u = Math.round(a * e);
                        if (k(r, n) && n.width <= c && n.height <= u) return n;
                        var s = c / 10,
                          l = u / 10;
                        return (
                          (r.top += l),
                          (r.bottom -= l),
                          (r.left -= s),
                          (r.right += s),
                          (function (t, e, n, r) {
                            var i = t.left / 2 + t.right / 2,
                              o = t.top / 2 + t.bottom / 2,
                              a = Math.abs(t.right - t.left),
                              c = Math.abs(t.bottom - t.top);
                            (a < n && (a = n), c < r && (c = r));
                            var u = new S(
                              i - a / 2,
                              o - c / 2,
                              i + a / 2,
                              o + c / 2,
                            );
                            return (
                              k(u, e) ||
                                (u.left < e.left &&
                                  ((u.left = e.left),
                                  (u.right = u.left + a),
                                  u.right > e.right && (u.right = e.right)),
                                u.right > e.right &&
                                  ((u.right = e.right),
                                  (u.left = u.right - a),
                                  u.left < e.left && (u.left = e.left)),
                                u.bottom < e.bottom &&
                                  ((u.bottom = e.bottom),
                                  (u.top = u.bottom + c),
                                  u.top > e.top && (u.top = e.top)),
                                u.top > e.top &&
                                  ((u.top = e.top),
                                  (u.bottom = u.top - c),
                                  u.bottom < e.bottom &&
                                    (u.bottom = e.bottom))),
                              u
                            );
                          })(r, new S(0, 0, t, e), c, u)
                        );
                      })(
                        a.sceneInfo.width,
                        a.sceneInfo.height,
                        a.getVirtualRect(),
                        s,
                      );
                      if (l) {
                        var h = {
                            lastX: a.position.x,
                            lastY: a.position.y,
                            lastScale: a.scale / 100,
                          },
                          f =
                            (i = (i =
                              i && 4 === i.length ? i : [0, 0, 0, 0]).map(
                              function (t, e) {
                                return (
                                  t + window.__CORE__.settings.zoomOffsets[e]
                                );
                              },
                            ))[1] + i[3],
                          d = i[0] + i[2],
                          m = a.spaceVisibilityService.size.width - f,
                          v = a.spaceVisibilityService.size.height - d,
                          p = Math.abs(Math.min(m / l.width, v / l.height)),
                          y = Math.min(
                            (m + f) / a.sceneInfo.width,
                            (v + d) / a.sceneInfo.height,
                          );
                        a.scale = Math.round(100 * p) / y;
                        var g = window.__CORE__.settings.zoomCenter ? s : l,
                          b = (a.sceneInfo.width * y - g.width * p - f) / 2,
                          w = (a.sceneInfo.height * y - g.height * p - d) / 2;
                        ((a.position.x = (-g.left * p + b + i[1]) / y),
                          (a.position.y = (-g.bottom * p + w + i[0]) / y),
                          c(h));
                      }
                    }
                  });
                },
              },
              {
                key: "getVirtualRect",
                value: function () {
                  var t = this.spaceVisibilityService.size.width,
                    e = this.spaceVisibilityService.size.height,
                    n = Math.min(
                      t / this.sceneInfo.width,
                      e / this.sceneInfo.height,
                    ),
                    r = (this.scale * n) / 100,
                    i = (t - this.sceneInfo.width * Math.abs(n)) / 2,
                    o = (e - this.sceneInfo.height * Math.abs(n)) / 2,
                    a = (-this.position.x * n - i) / r,
                    c = (-this.position.y * n - o) / r;
                  return new S(a, c, a + t / r, c + e / r);
                },
              },
              {
                key: "animate",
                value: function (t, e, n, r) {
                  var i = this;
                  return new Promise(function (o) {
                    if (
                      i.useAnimatedZoomToFit &&
                      r &&
                      Math.min(
                        i.spaceVisibilityService.size.width / i.sceneInfo.width,
                        i.spaceVisibilityService.size.height /
                          i.sceneInfo.height,
                      )
                    ) {
                      var a = i.position.x,
                        c = i.position.y,
                        u = i.scale / 100,
                        s = "0.4s",
                        l = "animateTransformTranslateSchSvg",
                        h = "animateTransformScaleSchSvg",
                        f = document.getElementById(l);
                      (f ||
                        ((f = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "animateTransform",
                        )).setAttribute("id", l),
                        f.setAttribute("attributeName", "transform"),
                        f.setAttribute("type", "translate"),
                        f.setAttribute("dur", s),
                        i.scene.appendChild(f)),
                        f.setAttribute("from", "".concat(t, ",").concat(e)),
                        f.setAttribute("to", "".concat(a, ",").concat(c)));
                      var d = document.getElementById(h);
                      (d ||
                        ((d = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "animateTransform",
                        )).setAttribute("id", h),
                        d.setAttribute("attributeName", "transform"),
                        d.setAttribute("type", "scale"),
                        d.setAttribute("dur", s),
                        d.setAttribute("additive", "sum"),
                        i.scene.appendChild(d)),
                        d.setAttribute("from", "".concat(n)),
                        d.setAttribute("to", "".concat(u)),
                        f.beginElement &&
                          d.beginElement &&
                          (d.beginElement(),
                          f.beginElement(),
                          (d.onEnd = function () {
                            i.logger.LogDebug("Animation end");
                          })));
                    }
                    o();
                  });
                },
              },
              {
                key: "checkZoomRelativePoint",
                value: function () {
                  -1 === this.zoomRelativePoint.x &&
                    -1 === this.zoomRelativePoint.y &&
                    ((this.zoomRelativePoint.x =
                      this.spaceVisibilityService.size.width / 2),
                    (this.zoomRelativePoint.y =
                      this.spaceVisibilityService.size.height / 2));
                },
              },
              {
                key: "getRelativePoint",
                value: function (t, e, n) {
                  return t < e ? e : t > n ? n : t;
                },
              },
              {
                key: "doZoom",
                value: function (t) {
                  var e = this.scene.getScreenCTM();
                  if (e) {
                    this.checkZoomRelativePoint();
                    var n = (t - this.scale) / 100,
                      r = this.sceneInfo.width * n,
                      i = this.sceneInfo.height * n,
                      o = e.e,
                      a = this.sceneInfo.width * e.a,
                      c = e.f,
                      u = this.sceneInfo.height * e.a,
                      s = this.getRelativePoint(
                        this.zoomRelativePoint.x,
                        o,
                        o + a,
                      ),
                      l = this.getRelativePoint(
                        this.zoomRelativePoint.y,
                        c,
                        c + u,
                      );
                    ((this.position.x -= (r * (s - o)) / a),
                      (this.position.y -= (i * (l - c)) / u),
                      (this.scale = t),
                      this.updateTransform(),
                      this.setZoomRelativePoint(-1, -1));
                  }
                },
              },
              {
                key: "doSetupChannel",
                value: function () {
                  var t,
                    e,
                    n = this;
                  null ===
                    (e =
                      null === (t = this.document.metadata) || void 0 === t
                        ? void 0
                        : t.components) ||
                    void 0 === e ||
                    e
                      .filter(function (t) {
                        return (
                          t.schId &&
                          t.schDocId == n.document.modelId &&
                          (!n.document.channelIndex ||
                            t.channel === n.channelId)
                        );
                      })
                      .forEach(function (t) {
                        var e,
                          r,
                          i = n.getDesignators(
                            null !== (e = t.fullDesignator) && void 0 !== e
                              ? e
                              : t.designator,
                          );
                        (n.setChannelDesignator(t.designatorId, i.p, i.l),
                          null === (r = t.subParts) ||
                            void 0 === r ||
                            r.forEach(function (t) {
                              if (
                                t.designatorId &&
                                t.schDocId === n.document.modelId
                              ) {
                                var e = n.getDesignators(t.designator);
                                n.setChannelDesignator(
                                  t.designatorId,
                                  e.p,
                                  e.l,
                                );
                              }
                            }));
                      });
                },
              },
              {
                key: "getDesignators",
                value: function (t) {
                  var e = "",
                    n = t,
                    r = n.indexOf(" (");
                  return (
                    r > 0 &&
                      ((e = n.substring(r + 1)), (n = n.substring(0, r))),
                    { l: e, p: n }
                  );
                },
              },
              {
                key: "setChannelDesignator",
                value: function (t, e, n) {
                  var r = 0,
                    i = 0,
                    o = this.svg.getElementById(t);
                  o &&
                    Array.from(o.children).forEach(function (t) {
                      if ("text" === t.nodeName) {
                        var o = t;
                        if (0 === i) {
                          var a = o.textLength.baseVal.value;
                          ((t.textContent = e),
                            (r = o.textLength.baseVal.value - a),
                            i++);
                        } else if (1 === i) {
                          t.textContent = n;
                          var c = "translate(".concat(r, ",", 0, ")");
                          return void t.setAttribute("transform", c);
                        }
                      }
                    });
                },
              },
              {
                key: "getSceneInfo",
                value: function () {
                  var t,
                    e,
                    n = this.svg.getElementById("BackgroundGroup");
                  if (n && n.children.length > 0) {
                    var r = n.children[0],
                      i = Number.parseFloat(
                        null !== (t = r.getAttribute("width")) && void 0 !== t
                          ? t
                          : "NaN",
                      ),
                      o = Number.parseFloat(
                        null !== (e = r.getAttribute("height")) && void 0 !== e
                          ? e
                          : "NaN",
                      );
                    if (!Number.isNaN(i) && !Number.isNaN(o))
                      return { width: i, height: o };
                  }
                  return {
                    width: this.scene.getBBox().width,
                    height: this.scene.getBBox().height,
                  };
                },
              },
            ],
          );
        })(),
        B = n(47784);
      function F(t) {
        return (
          (F =
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
          F(t)
        );
      }
      function G(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, z(r.key), r));
        }
      }
      function z(t) {
        var e = (function (t, e) {
          if ("object" != F(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != F(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == F(e) ? e : e + "";
      }
      var Y = (function () {
          return (
            (t = function t(e) {
              var n = this;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.renderStates = new Map()),
                (this.debounceEmitDocumentLocation = (0, y.D)(function () {
                  n.emitDocumentLocation();
                }, 250)),
                (this.emptyDocumentRenederer = A("EMPTY")),
                (this.documentRenederer = this.emptyDocumentRenederer),
                (this.selectionService = e),
                (this.documentRenderState = new h.Z(this)),
                (this.userInteractionService = new B.Z()),
                this.userInteractionService.on("zoom", function (t) {
                  n.documentRenederer.zoom(t.x, t.y, t.delta);
                }),
                this.userInteractionService.on("panMove", function (t) {
                  (n.documentRenederer.move(t.deltaX, t.deltaY),
                    r.QY.bus.emit("SchEngine:documentMove", {
                      type: "move",
                      documentId: n.documentRenederer.documentId,
                      x: t.x,
                      y: t.y,
                    }),
                    n.debounceEmitDocumentLocation());
                }),
                this.userInteractionService.on("select", function (t) {
                  (r.QY.bus.emit(
                    "SchEngine:documentClick",
                    Object.assign(Object.assign({}, t), {
                      type: "click",
                      documentId: n.documentRenederer.documentId,
                    }),
                  ),
                    n.selectionService.selectByPoint(t));
                }),
                r.QY.bus.on("SchEngine:zoomToFit", function (t) {
                  return n.documentRenederer.zoomToFit(
                    t.rect,
                    t.offsets,
                    t.allowOutside,
                  );
                }),
                (this.logger = r.QY.createLogger("DocumentRenderService")));
            }),
            (e = [
              {
                key: "doAttachToWorkspace",
                value: function (t) {
                  var e = document.createElement("div");
                  (e.setAttribute("id", "sch_document_viewer"),
                    e.setAttribute("oncontextmenu", "return false"));
                  var n = e.style;
                  ((n.width = "100%"),
                    (n.height = "100%"),
                    (n.position = "relative"),
                    (n.overflow = "hidden"),
                    (this.documentContainer = t.appendChild(e)),
                    this.userInteractionService.attachToWorkspace(
                      this.documentContainer,
                    ));
                },
              },
              {
                key: "doAttachDocument",
                value: function (t) {
                  var e;
                  try {
                    if (null !== t.error) throw t.error;
                    if (
                      !(null === (e = t.renderData) || void 0 === e
                        ? void 0
                        : e.documentElement.cloneNode(!0))
                    )
                      throw (
                        this.logger.LogError(
                          "Document attach error, no data to render.\n                Load state: "
                            .concat(t.loadState, ", name: ")
                            .concat(t.name, ", id: ")
                            .concat(t.id),
                        ),
                        new Error("Document attach error, no data to render")
                      );
                    var n = {
                      document: t,
                      workspace: this.documentContainer,
                      selectionService: this.selectionService,
                    };
                    ((this.documentRenederer = A("DEFAULT", n)),
                      (this.documentRenederer.useAnimatedZoomToFit = !0));
                  } catch (e) {
                    var r = {
                      document: t,
                      workspace: this.documentContainer,
                      error: e,
                    };
                    this.documentRenederer = A("ERROR", r);
                  }
                },
              },
              {
                key: "doDettachDocument",
                value: function () {
                  "EMPTY" !== this.documentRenederer.type &&
                    (this.saveState(),
                    this.documentRenederer.destroy(),
                    (this.documentRenederer = this.emptyDocumentRenederer));
                },
              },
              {
                key: "saveState",
                value: function () {
                  "DEFAULT" === this.documentRenederer.type &&
                    this.renderStates.set(
                      this.documentRenederer.documentId,
                      this.documentRenederer.state,
                    );
                },
              },
              {
                key: "attachTo",
                value: function (t) {
                  this.documentRenderState.setup(t);
                },
              },
              {
                key: "attach",
                value: function (t) {
                  (this.documentRenederer &&
                    t.id === this.documentRenederer.documentId) ||
                    (this.documentRenderState.dettachDocument(),
                    this.documentRenderState.attachDocument(t));
                },
              },
              {
                key: "setLocation",
                value: function (t) {
                  this.location = t;
                },
              },
              {
                key: "setPosition",
                value: function (t) {
                  var e,
                    n = this;
                  this.location &&
                    (null === (e = this.location) || void 0 === e
                      ? void 0
                      : e.docId) &&
                    (this.renderStates.set(this.location.docId, {
                      zoom: this.location.zoom,
                      top: this.location.top,
                      left: this.location.left,
                    }),
                    (this.location = null));
                  var r = this.renderStates.get(t.id);
                  return (
                    setTimeout(function () {
                      n.emitDocumentLocation();
                    }, 50),
                    r
                      ? new Promise(function (t) {
                          ((n.documentRenederer.state = r), t());
                        })
                      : this.documentRenederer.zoomToFit(null)
                  );
                },
              },
              {
                key: "render",
                value: function (t) {
                  return (this.attach(t), this.documentRenederer.render());
                },
              },
              {
                key: "reset",
                value: function () {
                  (this.documentRenederer.zoomToFit(null),
                    r.QY.bus.emit("SchEngine:resetDocumentView", {
                      type: "reset",
                      documentId: this.documentRenederer.documentId,
                    }));
                },
              },
              {
                key: "emitDocumentLocation",
                value: function () {
                  r.QY.bus.emit(
                    "SchEngine:documentLocation",
                    Object.assign(
                      Object.assign({}, this.documentRenederer.state),
                      { type: "sch" },
                    ),
                  );
                },
              },
            ]) && G(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        H = n(41497);
      function V(t) {
        return (
          (V =
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
          V(t)
        );
      }
      function Z() {
        Z = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          c = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
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
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            c = new j(r || []);
          return (i(a, "_invoke", { value: P(t, n, c) }), a);
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          d = "suspendedYield",
          m = "executing",
          v = "completed",
          p = {};
        function y() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          k = S && S(S(C([])));
        k && k !== n && r.call(k, a) && (w = k);
        var E = (b.prototype = y.prototype = Object.create(w));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function I(t, e) {
          function n(i, o, a, c) {
            var u = h(t[i], t, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == V(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function P(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === m) throw Error("Generator is already running");
            if (i === v) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = L(c, r);
                if (u) {
                  if (u === p) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === f) throw ((i = v), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = m;
              var s = h(e, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? v : d), s.arg === p)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = v), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function L(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                L(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              p
            );
          var o = h(i, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"),
              (n.arg = o.arg),
              (n.delegate = null),
              p
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                p)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              p);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function D(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function j(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(O, this),
            this.reset(!0));
        }
        function C(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i))
                      return ((n.value = e[i]), (n.done = !1), n);
                  return ((n.value = t), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError(V(e) + " is not iterable");
        }
        return (
          (g.prototype = b),
          i(E, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = s(b, u, "GeneratorFunction")),
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
                : ((t.__proto__ = b), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(I.prototype),
          s(I.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = I),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new I(l(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(E),
          s(E, u, "Generator"),
          s(E, a, function () {
            return this;
          }),
          s(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return ((t.value = r), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = C),
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
                this.tryEntries.forEach(D),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
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
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return (this.complete(n.completion, n.afterLoc), D(n), p);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    D(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                p
              );
            },
          }),
          e
        );
      }
      function Q(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, U(r.key), r));
        }
      }
      function U(t) {
        var e = (function (t, e) {
          if ("object" != V(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != V(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == V(e) ? e : e + "";
      }
      function W(t, e, n) {
        return (
          (e = $(e)),
          (function (t, e) {
            if (e && ("object" == V(e) || "function" == typeof e)) return e;
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
            q()
              ? Reflect.construct(e, n || [], $(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function q() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (q = function () {
          return !!t;
        })();
      }
      function K() {
        return (
          (K =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, n) {
                  var r = (function (t, e) {
                    for (
                      ;
                      !{}.hasOwnProperty.call(t, e) && null !== (t = $(t));
                    );
                    return t;
                  })(t, e);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    return i.get
                      ? i.get.call(arguments.length < 3 ? t : n)
                      : i.value;
                  }
                }),
          K.apply(null, arguments)
        );
      }
      function $(t) {
        return (
          ($ = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          $(t)
        );
      }
      function X(t, e) {
        return (
          (X = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          X(t, e)
        );
      }
      var J,
        tt = function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        },
        et = {
          where: function (t) {
            return ["SHOW" === t.type];
          },
          to: "SHOW",
        },
        nt = {
          where: function (t) {
            return ["CRASHED" === t.type];
          },
          to: "CRASHED",
        },
        rt = {
          IDLE: [
            {
              where: function (t) {
                return ["SETUP" === t.type];
              },
              to: "SETUP",
            },
          ],
          SETUP: [
            {
              where: function (t) {
                return ["SETUP_COMPLETED" === t.type];
              },
              to: "SETUP_COMPLETED",
            },
            nt,
          ],
          SETUP_COMPLETED: [
            {
              where: function (t) {
                return ["ATTACH" === t.type];
              },
              to: "ATTACH",
            },
            nt,
          ],
          ATTACH: [
            {
              where: function (t) {
                return ["ATTACH_COMPLETED" === t.type];
              },
              to: "ATTACH_COMPLETED",
            },
            nt,
          ],
          ATTACH_COMPLETED: [et],
          SHOW: [
            {
              where: function (t) {
                return ["CLOSE" === t.type];
              },
              to: "CLOSE",
            },
          ],
          CLOSE: [et],
        },
        it = (function (t) {
          function e(t, n) {
            var r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((r = W(this, e, ["IDLE", rt])).callback = t),
              (r.logger = n),
              (r.error = null),
              r.on("#Transition", function (t) {
                "CRASHED" === r.state && (r.error = t.error);
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
                e && X(t, e));
            })(e, t),
            (n = e),
            (r = [
              {
                key: "dispatch",
                value: function (t) {
                  return K($(e.prototype), "dispatch", this).call(this, t);
                },
              },
              {
                key: "throwIfInErrorState",
                value: function () {
                  if (null !== this.error) throw this.error;
                },
              },
              {
                key: "setup",
                value: function (t) {
                  return tt(
                    this,
                    void 0,
                    void 0,
                    Z().mark(function e() {
                      var n = this;
                      return Z().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.dispatch({ type: "SETUP" })) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this.callback.setup(t)
                                );
                              case 4:
                                (this.dispatch({ type: "SETUP_COMPLETED" }),
                                  (e.next = 11));
                                break;
                              case 7:
                                ((e.prev = 7),
                                  (e.t0 = e.catch(1)),
                                  this.logger.LogError("Setup error.", e.t0),
                                  this.dispatch({
                                    type: "CRASHED",
                                    error: e.t0,
                                  }));
                              case 11:
                                if ("SETUP" !== this.state) {
                                  e.next = 14;
                                  break;
                                }
                                return (
                                  (e.next = 14),
                                  new Promise(function (t) {
                                    return n.once("#Transition", function () {
                                      return t();
                                    });
                                  })
                                );
                              case 14:
                                this.throwIfInErrorState();
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 7]],
                      );
                    }),
                  );
                },
              },
              {
                key: "attach",
                value: function (t) {
                  return tt(
                    this,
                    void 0,
                    void 0,
                    Z().mark(function e() {
                      var n = this;
                      return Z().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!["INIT", "SETUP"].includes(this.state)) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  new Promise(function (t) {
                                    return n.once("#Transition", function () {
                                      return t();
                                    });
                                  })
                                );
                              case 3:
                                return ((e.next = 5), this.attach(t));
                              case 5:
                                if (this.dispatch({ type: "ATTACH" }))
                                  try {
                                    (this.callback.attach(t),
                                      this.dispatch({
                                        type: "ATTACH_COMPLETED",
                                      }));
                                  } catch (t) {
                                    (this.logger.LogError("Attach error.", t),
                                      this.dispatch({
                                        type: "CRASHED",
                                        error: t,
                                      }));
                                  }
                                if ("ATTACH" !== this.state) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  new Promise(function (t) {
                                    return n.once("#Transition", function () {
                                      return t();
                                    });
                                  })
                                );
                              case 9:
                                this.throwIfInErrorState();
                              case 10:
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
                key: "show",
                value: function () {
                  return tt(
                    this,
                    void 0,
                    void 0,
                    Z().mark(function t() {
                      var e = this;
                      return Z().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ![
                                    "INIT",
                                    "SETUP",
                                    "SETUP_COMPLETED",
                                    "ATTACH",
                                  ].includes(this.state)
                                ) {
                                  t.next = 5;
                                  break;
                                }
                                return (
                                  (t.next = 3),
                                  new Promise(function (t) {
                                    return e.once("#Transition", function () {
                                      return t();
                                    });
                                  })
                                );
                              case 3:
                                return ((t.next = 5), this.show());
                              case 5:
                                if (
                                  ((t.t0 = this.dispatch({ type: "SHOW" })),
                                  !t.t0)
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return ((t.next = 9), this.callback.show());
                              case 9:
                                this.throwIfInErrorState();
                              case 10:
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
                key: "close",
                value: function () {
                  this.dispatch({ type: "CLOSE" }) && this.callback.close();
                },
              },
            ]) && Q(n.prototype, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, r;
        })(H.Z);
      !(function (t) {
        ((t[(t.Component = 1)] = "Component"),
          (t[(t.Net = 2)] = "Net"),
          (t[(t.Wire = 3)] = "Wire"),
          (t[(t.Port = 4)] = "Port"),
          (t[(t.SheetEntry = 5)] = "SheetEntry"),
          (t[(t.SheetSymbol = 6)] = "SheetSymbol"),
          (t[(t.Pin = 7)] = "Pin"),
          (t[(t.NetLabel = 8)] = "NetLabel"),
          (t[(t.CrossSheetConnector = 9)] = "CrossSheetConnector"),
          (t[(t.Bus = 10)] = "Bus"),
          (t[(t.Label = 11)] = "Label"),
          (t[(t.Hyperlink = 12)] = "Hyperlink"),
          (t[(t.SchematicBlock = 13)] = "SchematicBlock"),
          (t[(t.ReuseSheetSymbol = 14)] = "ReuseSheetSymbol"));
      })(J || (J = {}));
      var ot,
        at = n(12211);
      function ct(t) {
        return ((t ? t.kind : 0) >> 8) & 255;
      }
      function ut(t) {
        switch (ct(t)) {
          case ot.Component:
            return J.Component;
          case ot.Port:
            return J.Port;
          case ot.SheetEntry:
            return J.SheetEntry;
          case ot.SheetSymbol:
            return J.SheetSymbol;
          case ot.Wire:
            return J.Wire;
          case ot.CrossSheetConnector:
            return J.CrossSheetConnector;
          case ot.Bus:
            return J.Bus;
          case ot.Pin:
            return J.Pin;
          case ot.Label:
            return J.Label;
          case ot.Hyperlink:
            return J.Hyperlink;
          case ot.NetLabel:
            return J.NetLabel;
          case ot.SchematicBlock:
            return J.SchematicBlock;
          case ot.ReuseSheetSymbol:
            return J.ReuseSheetSymbol;
        }
        return 0;
      }
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
        if (t) {
          if ("string" == typeof t) return ht(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? ht(t, e)
                : void 0
          );
        }
      }
      function ht(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function ft(t, e) {
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
          if ("object" != st(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != st(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == st(e) ? e : e + "";
      }
      !(function (t) {
        ((t[(t.Wire = 19)] = "Wire"),
          (t[(t.Bus = 20)] = "Bus"),
          (t[(t.Label = 22)] = "Label"),
          (t[(t.Hyperlink = 23)] = "Hyperlink"),
          (t[(t.NetLabel = 24)] = "NetLabel"),
          (t[(t.Component = 26)] = "Component"),
          (t[(t.Pin = 37)] = "Pin"),
          (t[(t.Port = 38)] = "Port"),
          (t[(t.PowerObject = 39)] = "PowerObject"),
          (t[(t.SheetEntry = 40)] = "SheetEntry"),
          (t[(t.SheetSymbol = 41)] = "SheetSymbol"),
          (t[(t.CrossSheetConnector = 48)] = "CrossSheetConnector"),
          (t[(t.SignalHarness = 56)] = "SignalHarness"),
          (t[(t.SchematicBlock = 112)] = "SchematicBlock"),
          (t[(t.ReuseSheetSymbol = 113)] = "ReuseSheetSymbol"));
      })(ot || (ot = {}));
      var mt = (function () {
        function t(e, n, r, i, o) {
          var a =
              arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            c =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : null;
          (!(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.owner = e),
            (this.type = n),
            (this.id = r),
            (this.parts = i),
            (this.channel = o),
            (this.disabled = a),
            (this.objectId = c),
            (this.highlighted = !1),
            (this.boundElement = null),
            (this.variantBounds = null),
            (this.hasBounds = !1),
            (this.ee = window.__CORE__.createEventEmmiterInstance()));
        }
        return (
          (e = t),
          (n = [
            {
              key: "once",
              value: function (t, e) {
                return this.ee.once(t, e);
              },
            },
            {
              key: "on",
              value: function (t, e) {
                return this.ee.on(t, e);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                return this.ee.off(t, e);
              },
            },
            {
              key: "eventNames",
              value: function () {
                return this.ee.eventNames();
              },
            },
            {
              key: "emit",
              value: function (t, e) {
                return this.ee.emit(t, e);
              },
            },
            {
              key: "getRootOwner",
              value: function () {
                return this.owner ? this.owner.getRootOwner() : this;
              },
            },
            {
              key: "test",
              value: function (t) {
                return (
                  !this.disabled &&
                  !!this.boundElement &&
                  this.boundElement.test(t)
                );
              },
            },
            {
              key: "updateBoundRectangles",
              value: function (e) {
                var n,
                  i,
                  o,
                  a = this;
                if (this.type !== J.Net) {
                  if (!this.hasBounds) {
                    var c = document.getElementById(this.id),
                      u = new Map();
                    this.boundElement = (function e(n, i) {
                      if (n && n.localName) {
                        var o = n.localName;
                        if ("g" === o) {
                          if (a.type === J.Component) {
                            var c = n.querySelectorAll("[data-variant-id]");
                            if (
                              c &&
                              c.length > 0 &&
                              c.length === n.childElementCount
                            ) {
                              c.forEach(function (t) {
                                var e;
                                (null ===
                                  (e = null == t ? void 0 : t.dataset) ||
                                void 0 === e
                                  ? void 0
                                  : e.variantId) &&
                                  i.set(
                                    t.dataset.variantId,
                                    at.Z.getPathForGroup(t),
                                  );
                              });
                              var u = (function (t) {
                                return (
                                  (function (t) {
                                    if (Array.isArray(t)) return ht(t);
                                  })(t) ||
                                  (function (t) {
                                    if (
                                      ("undefined" != typeof Symbol &&
                                        null != t[Symbol.iterator]) ||
                                      null != t["@@iterator"]
                                    )
                                      return Array.from(t);
                                  })(t) ||
                                  lt(t) ||
                                  (function () {
                                    throw new TypeError(
                                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                    );
                                  })()
                                );
                              })(i.keys()).find(function (t) {
                                return t.includes(r.hZ);
                              });
                              if (u) {
                                var s = i.get(u);
                                return null != s ? s : null;
                              }
                              return null;
                            }
                            return at.Z.getPathForGroup(n);
                          }
                          if (a.type === J.Wire || a.type === J.Bus)
                            try {
                              for (
                                var l = [], h = a.getChildren(n), f = 0;
                                f < h.length;
                                f++
                              ) {
                                var d = e(h[f], new Map());
                                d && l.push(d);
                              }
                              return at.Z.join(l);
                            } catch (e) {
                              t.logger.LogError(
                                "Setup wire error. " + e.message,
                              );
                            }
                          else {
                            if (a.type === J.Port)
                              return at.Z.getPathForGroup(n);
                            if (a.type === J.Pin) return at.Z.getPathForLine(n);
                            if (a.type === J.NetLabel)
                              return at.Z.getPathForGroup(n);
                            if (a.type === J.SheetEntry)
                              return at.Z.getPathForGroup(n);
                            if (a.type === J.SheetSymbol)
                              return at.Z.getPathForGroup(n);
                            if (a.type === J.ReuseSheetSymbol)
                              return at.Z.getPathForGroup(n);
                            if (a.type === J.SchematicBlock)
                              return at.Z.getPathForGroup(n);
                            if (a.type === J.CrossSheetConnector)
                              return at.Z.getPathForGroup(n);
                            if (a.type === J.Label)
                              return at.Z.getPathForGroup(n);
                            if (a.type === J.Hyperlink)
                              return at.Z.getPathForGroup(n);
                          }
                        } else {
                          if ("line" === o) return at.Z.getPathForLine(n);
                          if ("ellipse" === o) return at.Z.getPathForEllipse(n);
                          if ("polyline" === o)
                            return at.Z.getPathForPolyLine(n);
                          if ("polygon" === o) return at.Z.getPathForPolygon(n);
                          if ("rect" === o) return at.Z.getPathForRect(n);
                          if ("path" === o) return at.Z.getPathForPath(n);
                        }
                      }
                      return null;
                    })(c, u);
                    var s = e.get(this.id);
                    (0 ===
                      (null ===
                        (i =
                          null === (n = this.boundElement) || void 0 === n
                            ? void 0
                            : n.selectedPath) || void 0 === i
                        ? void 0
                        : i.length) &&
                      (null === (o = null == s ? void 0 : s.boundElement) ||
                      void 0 === o
                        ? void 0
                        : o.selectedPath) &&
                      (this.boundElement = s.boundElement),
                      (this.variantBounds = u.size > 0 ? u : null));
                  }
                  e.set(this.id, this);
                }
                ((this.hasBounds = !0),
                  this.parts &&
                    this.parts.forEach(function (t) {
                      return t.updateBoundRectangles(e);
                    }));
              },
            },
            {
              key: "updateScene",
              value: function (t, e, n, r) {
                var i = this;
                if (this.hasBounds)
                  if (this.parts && 0 !== this.parts.length) {
                    var o = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "g",
                    );
                    (o.setAttribute("data_id", this.id),
                      o.setAttribute("data_type", "".concat(this.type)));
                    var a = this.boundElement;
                    if (a) {
                      var c = this.getRootElement(a, n, r);
                      c && o.appendChild(c);
                    }
                    (this.parts.forEach(function (e) {
                      return e.updateScene(t, o, n, r);
                    }),
                      e.appendChild(o));
                  } else {
                    if (this.type === J.Net) return;
                    var u = function (t, o) {
                      var a = i.getRootElement(t, n, r);
                      a &&
                        (a.setAttribute("data_id", i.id),
                        a.setAttribute("data_type", "".concat(i.type)),
                        o && a.setAttribute("data-variant-id", "".concat(o)),
                        e.appendChild(a));
                    };
                    this.variantBounds
                      ? this.variantBounds.forEach(function (t, e) {
                          return u(t, e);
                        })
                      : this.boundElement && u(this.boundElement, "");
                  }
              },
            },
            {
              key: "setBound",
              value: function (t) {
                var e;
                this.variantBounds &&
                  (this.boundElement =
                    null !== (e = this.variantBounds.get(t)) && void 0 !== e
                      ? e
                      : this.boundElement);
              },
            },
            {
              key: "getRootElement",
              value: function (t, e, n) {
                var r = this;
                if (!t || this.disabled) return null;
                var i = t.createSvgElement(function (t) {
                  (t.setAttribute("class", e),
                    t.addEventListener("mouseenter", function () {
                      setTimeout(function () {
                        var t = r.getRootOwner();
                        ((t.highlighted = !0), t.emit("highlightStart", t));
                      }, 1);
                    }),
                    t.addEventListener("mouseleave", function () {
                      setTimeout(function () {
                        var t = r.getRootOwner();
                        ((t.highlighted = !1), t.emit("highlightComplete", t));
                      }, 1);
                    }),
                    n(t));
                });
                return i || null;
              },
            },
            {
              key: "getChildren",
              value: function (t) {
                if (this.objectId !== ot.Pin) return t.children;
                var e = function (t, e) {
                    var n = function (t) {
                        var n;
                        return null ===
                          (n = null == t ? void 0 : t.attributes[e]) ||
                          void 0 === n
                          ? void 0
                          : n.nodeValue;
                      },
                      r = t.reduce(function (t, e) {
                        return ((t[n(e)] = t[n(e)] || []).push(e), t);
                      }, {});
                    return Object.entries(r).map(function (t) {
                      var e = (function (t, e) {
                        return (
                          (function (t) {
                            if (Array.isArray(t)) return t;
                          })(t) ||
                          (function (t, e) {
                            var n =
                              null == t
                                ? null
                                : ("undefined" != typeof Symbol &&
                                    t[Symbol.iterator]) ||
                                  t["@@iterator"];
                            if (null != n) {
                              var r,
                                i,
                                o,
                                a,
                                c = [],
                                u = !0,
                                s = !1;
                              try {
                                if (((o = (n = n.call(t)).next), 0 === e)) {
                                  if (Object(n) !== n) return;
                                  u = !1;
                                } else
                                  for (
                                    ;
                                    !(u = (r = o.call(n)).done) &&
                                    (c.push(r.value), c.length !== e);
                                    u = !0
                                  );
                              } catch (t) {
                                ((s = !0), (i = t));
                              } finally {
                                try {
                                  if (
                                    !u &&
                                    null != n.return &&
                                    ((a = n.return()), Object(a) !== a)
                                  )
                                    return;
                                } finally {
                                  if (s) throw i;
                                }
                              }
                              return c;
                            }
                          })(t, e) ||
                          lt(t, e) ||
                          (function () {
                            throw new TypeError(
                              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                          })()
                        );
                      })(t, 2);
                      return (e[0], e[1]);
                    });
                  },
                  n = Array.from(t.children).filter(function (t) {
                    return "line" === (null == t ? void 0 : t.localName);
                  });
                if (n.length <= 1) return t.children;
                var r = e(n, "y1"),
                  i = e(n, "x1"),
                  o = r.length > i.length ? i : r;
                return o.reduce(function (t, e) {
                  return t.length === e.length
                    ? t[0].getTotalLength() > e[0].getTotalLength()
                      ? t
                      : e
                    : t.length < e.length
                      ? t
                      : e;
                }, o[0]);
              },
            },
          ]),
          n && ft(e.prototype, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, n;
      })();
      mt.logger = window.__CORE__.createLogger("SchActiveObject");
      const vt = mt;
      var pt = n(42516);
      function yt(t) {
        return (
          (yt =
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
          yt(t)
        );
      }
      function gt(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = wt(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
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
          c = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return ((a = t.done), t);
          },
          e: function (t) {
            ((c = !0), (o = t));
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function bt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return St(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          wt(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function wt(t, e) {
        if (t) {
          if ("string" == typeof t) return St(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? St(t, e)
                : void 0
          );
        }
      }
      function St(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function kt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Et(r.key), r));
        }
      }
      function Et(t) {
        var e = (function (t, e) {
          if ("object" != yt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != yt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == yt(e) ? e : e + "";
      }
      var xt = (function () {
          function t(e) {
            var n = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.engine = e),
              (this.logger = r.QY.createLogger("SchEngine:navigation")),
              (this.twoClickObjects = [ot.ReuseSheetSymbol]),
              (this.nets = []),
              (this.primitives = []),
              r.QY.bus.on("select", function (t) {
                ((n.selectedItem = void 0),
                  "block" === (null == t ? void 0 : t.name) &&
                    "SchEngine" === (null == t ? void 0 : t.senderId) &&
                    n.links.has(t.native.schId) &&
                    (n.selectedItem = t.native.schId));
              }));
          }
          return (
            (e = t),
            (n = [
              {
                key: "documents",
                get: function () {
                  return this.engine.allDocuments;
                },
              },
              {
                key: "currentDocument",
                get: function () {
                  var t = this.engine.activeDocumentIndex;
                  if (!(t < 0)) return this.documents[t];
                },
              },
              {
                key: "setup",
                value: function (e) {
                  var n = this;
                  e &&
                    (r.QY.bus.on("SchEngine:navigateTo", function (t) {
                      return n.navigateTo(t);
                    }),
                    (this.nets = e.nets || []),
                    (this.primitives = e.primitives || []),
                    (this.links = new Map(
                      this.primitives
                        .filter(function (e) {
                          return t.isNavigatedPrimitive(e);
                        })
                        .map(function (t) {
                          return [t.schId, t];
                        }),
                    )));
                },
              },
              {
                key: "getLinks",
                value: function () {
                  return bt(this.links.values());
                },
              },
              {
                key: "canNavigate",
                value: function (t) {
                  var e = this.links.get(t);
                  return !(
                    !e ||
                    (this.twoClickObjects.includes(ct(e)) &&
                      this.selectedItem !== e.schId)
                  );
                },
              },
              {
                key: "invoke",
                value: function (t, e, n) {
                  var i,
                    o,
                    a,
                    c,
                    u = this.links.get(n);
                  if (u) {
                    if (u.url)
                      return (
                        this.logger.LogDebug("Open url ".concat(u.url)),
                        void window.open(u.url, "_blank")
                      );
                    r.QY.bus.emit("select", null);
                    try {
                      var s = { x: t, y: e, items: new Array() };
                      switch (ct(u)) {
                        case ot.SheetSymbol:
                        case ot.ReuseSheetSymbol:
                          var l = this.getSheetSymbolNavigationItem(n);
                          l && s.items.push(l);
                          break;
                        default:
                          var h = this.getNetNavigationItems(u.id);
                          h && (i = s.items).push.apply(i, bt(h));
                      }
                      if (
                        1 == s.items.length &&
                        s.items[0].documentId ===
                          (null === (o = this.currentDocument) || void 0 === o
                            ? void 0
                            : o.id) &&
                        0 ===
                          (null !==
                            (c =
                              null === (a = s.items[0].child) || void 0 === a
                                ? void 0
                                : a.length) && void 0 !== c
                            ? c
                            : 0)
                      )
                        return;
                      r.QY.bus.emit("SchEngine:readyNavigateTo", s);
                    } catch (t) {
                      this.logger.LogError(t);
                    }
                  } else
                    this.logger.LogWarn(
                      "Primitive ".concat(n, " in not navigate item"),
                    );
                },
              },
              {
                key: "getSheetSymbolNavigationItem",
                value: function (t) {
                  var e = this,
                    n = this.links.get(t);
                  if (n && this.currentDocument)
                    switch (ct(n)) {
                      case ot.Port:
                        var r = this.currentDocument.parentId;
                        if (r) {
                          var i = this.documents.find(function (t) {
                            return t.id === r;
                          });
                          if (i) {
                            var o = this.findPrimitive(
                              i.modelId,
                              ot.SheetEntry,
                              this.currentDocument.channelId,
                              n.itemLink,
                            );
                            if (o) return this.createNavigationItem(i, [o]);
                          }
                        }
                        break;
                      case ot.SheetEntry:
                      case ot.SheetSymbol:
                      case ot.ReuseSheetSymbol:
                        if (!Array.isArray(n.channelLinks)) break;
                        var a = this.documents.find(function (t) {
                          return n.channelLinks.find(function (e) {
                            return e === t.channelId;
                          });
                        });
                        if (!a && n.docLink) {
                          var c,
                            u = gt(
                              n.docLink.split(";").map(function (t) {
                                return t.trim();
                              }),
                            );
                          try {
                            var s = function () {
                              var t = c.value;
                              if (
                                (a = e.documents.find(function (e) {
                                  return e.name === t;
                                }))
                              )
                                return 1;
                            };
                            for (u.s(); !(c = u.n()).done && !s(); );
                          } catch (t) {
                            u.e(t);
                          } finally {
                            u.f();
                          }
                        }
                        if (a) {
                          if (n.itemLink) {
                            var l = this.findPrimitive(
                              a.modelId,
                              ot.Port,
                              0,
                              n.itemLink,
                            );
                            if (l) return this.createNavigationItem(a, [l]);
                          }
                          return this.createNavigationItem(a);
                        }
                    }
                },
              },
              {
                key: "getNetNavigationItems",
                value: function (t) {
                  var e,
                    n,
                    r,
                    i = this,
                    o = this.nets.filter(function (e) {
                      return e.name && e.primitives.includes(t);
                    }),
                    a = o
                      .map(function (t) {
                        return t.primitives;
                      })
                      .flat(1)
                      .filter(function (t, e, n) {
                        return n.indexOf(t) === e;
                      }),
                    c = new Map(),
                    u = gt(this.documents);
                  try {
                    for (u.s(); !(r = u.n()).done; ) {
                      var s = r.value,
                        l = this.getDocumentPrimitives(s.modelId, a, o);
                      if (l) {
                        var h = this.createNavigationItem(
                          s,
                          l.map(function (t) {
                            return i.primitives[t];
                          }),
                        );
                        c.set(s.id, h);
                      }
                    }
                  } catch (t) {
                    u.e(t);
                  } finally {
                    u.f();
                  }
                  for (
                    var f = new Array(),
                      d = function () {
                        var t = (function (t, e) {
                            return (
                              (function (t) {
                                if (Array.isArray(t)) return t;
                              })(t) ||
                              (function (t, e) {
                                var n =
                                  null == t
                                    ? null
                                    : ("undefined" != typeof Symbol &&
                                        t[Symbol.iterator]) ||
                                      t["@@iterator"];
                                if (null != n) {
                                  var r,
                                    i,
                                    o,
                                    a,
                                    c = [],
                                    u = !0,
                                    s = !1;
                                  try {
                                    if (((o = (n = n.call(t)).next), 0 === e)) {
                                      if (Object(n) !== n) return;
                                      u = !1;
                                    } else
                                      for (
                                        ;
                                        !(u = (r = o.call(n)).done) &&
                                        (c.push(r.value), c.length !== e);
                                        u = !0
                                      );
                                  } catch (t) {
                                    ((s = !0), (i = t));
                                  } finally {
                                    try {
                                      if (
                                        !u &&
                                        null != n.return &&
                                        ((a = n.return()), Object(a) !== a)
                                      )
                                        return;
                                    } finally {
                                      if (s) throw i;
                                    }
                                  }
                                  return c;
                                }
                              })(t, e) ||
                              wt(t, e) ||
                              (function () {
                                throw new TypeError(
                                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                );
                              })()
                            );
                          })(v[m], 2),
                          r = t[0],
                          o = t[1],
                          a =
                            null !==
                              (n =
                                null ===
                                  (e = i.documents.find(function (t) {
                                    return t.id === r;
                                  })) || void 0 === e
                                  ? void 0
                                  : e.parentId) && void 0 !== n
                              ? n
                              : "",
                          u = c.get(a);
                        u && (u.child.push(o), f.push(o));
                      },
                      m = 0,
                      v = Array.from(c.entries());
                    m < v.length;
                    m++
                  )
                    d();
                  return Array.from(c.values()).filter(function (t) {
                    return !f.includes(t);
                  });
                },
              },
              {
                key: "getDocumentPrimitives",
                value: function (t, e, n) {
                  var r = this,
                    i = e.filter(function (e) {
                      return r.primitives[e].schDocId === t;
                    });
                  return i.length &&
                    i
                      .map(function (t) {
                        return r.primitives[t];
                      })
                      .filter(function (t) {
                        return [
                          ot.Port,
                          ot.SheetEntry,
                          ot.CrossSheetConnector,
                        ].includes(ct(t));
                      }).length
                    ? i
                    : null;
                },
              },
              {
                key: "createNavigationItem",
                value: function (t, e) {
                  var n;
                  return {
                    documentId: t.id,
                    primitives: e || [],
                    child: [],
                    name:
                      t.name +
                      (t.channelName ? "(".concat(t.channelName, ")") : ""),
                    selected:
                      t.id ===
                      (null === (n = this.currentDocument) || void 0 === n
                        ? void 0
                        : n.id),
                    icon:
                      t.sourceKind === pt.Nu.ReuseBlock
                        ? "reuse-block-16"
                        : "schematic-16",
                    preventSelect: t.channelKind === pt.u5.Logical,
                  };
                },
              },
              {
                key: "findPrimitive",
                value: function (t, e, n, r) {
                  return this.primitives.find(function (i) {
                    return (
                      i.schDocId === t &&
                      ct(i) == e &&
                      i.itemLink === r &&
                      (!n ||
                        (i.channelLinks &&
                          i.channelLinks.find(function (t) {
                            return t === n;
                          })))
                    );
                  });
                },
              },
              {
                key: "navigateTo",
                value: function (t) {
                  var e = this;
                  t &&
                    (this.logger.LogDebug(
                      "Navigate to '"
                        .concat(t.name, "' (")
                        .concat(t.documentId, ") for ")
                        .concat(t.primitives.length, " prims"),
                    ),
                    this.currentDocument &&
                    t.documentId === this.currentDocument.id
                      ? this.highlightItems(t)
                      : new Promise(function (n) {
                          var i = function () {
                            (setTimeout(function () {
                              return e.highlightItems(t);
                            }, 100),
                              r.QY.bus.off("SCHView:documentChanged", i),
                              n());
                          }.bind(e);
                          (r.QY.bus.on("SCHView:documentChanged", i),
                            r.QY.bus.emit(
                              "SCHView:showDocument",
                              t.documentId,
                            ));
                        }));
                },
              },
              {
                key: "highlightItems",
                value: function (t) {
                  var e;
                  (null === (e = t.primitives) || void 0 === e
                    ? void 0
                    : e.length) > 0
                    ? r.QY.bus.emit("SchEngine:drawSelection", {
                        items: t.primitives,
                        fit: !0,
                      })
                    : r.QY.bus.emit("SchEngine:zoomToFit", { rect: null });
                },
              },
            ]),
            (i = [
              {
                key: "isNavigatedPrimitive",
                value: function (t) {
                  return (
                    !!t &&
                    (!![
                      ot.Port,
                      ot.SheetEntry,
                      ot.SheetSymbol,
                      ot.ReuseSheetSymbol,
                      ot.CrossSheetConnector,
                    ].includes(ct(t)) ||
                      (void 0 !== t.url &&
                        [ot.Label, ot.Hyperlink].includes(ct(t))))
                  );
                },
              },
            ]),
            n && kt(e.prototype, n),
            i && kt(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, n, i;
        })(),
        It = n(99585),
        Pt = n(66675),
        Lt = n(22021);
      function Ot(t) {
        return (
          (Ot =
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
          Ot(t)
        );
      }
      function Dt(t, e) {
        if (t) {
          if ("string" == typeof t) return jt(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? jt(t, e)
                : void 0
          );
        }
      }
      function jt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Ct() {
        Ct = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          c = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
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
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            c = new j(r || []);
          return (i(a, "_invoke", { value: P(t, n, c) }), a);
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          d = "suspendedYield",
          m = "executing",
          v = "completed",
          p = {};
        function y() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          k = S && S(S(C([])));
        k && k !== n && r.call(k, a) && (w = k);
        var E = (b.prototype = y.prototype = Object.create(w));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function I(t, e) {
          function n(i, o, a, c) {
            var u = h(t[i], t, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == Ot(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function P(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === m) throw Error("Generator is already running");
            if (i === v) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = L(c, r);
                if (u) {
                  if (u === p) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === f) throw ((i = v), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = m;
              var s = h(e, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? v : d), s.arg === p)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = v), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function L(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                L(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              p
            );
          var o = h(i, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"),
              (n.arg = o.arg),
              (n.delegate = null),
              p
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                p)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              p);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function D(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function j(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(O, this),
            this.reset(!0));
        }
        function C(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i))
                      return ((n.value = e[i]), (n.done = !1), n);
                  return ((n.value = t), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError(Ot(e) + " is not iterable");
        }
        return (
          (g.prototype = b),
          i(E, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = s(b, u, "GeneratorFunction")),
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
                : ((t.__proto__ = b), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(I.prototype),
          s(I.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = I),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new I(l(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(E),
          s(E, u, "Generator"),
          s(E, a, function () {
            return this;
          }),
          s(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return ((t.value = r), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = C),
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
                this.tryEntries.forEach(D),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
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
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return (this.complete(n.completion, n.afterLoc), D(n), p);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    D(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                p
              );
            },
          }),
          e
        );
      }
      function Tt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, At(r.key), r));
        }
      }
      function At(t) {
        var e = (function (t, e) {
          if ("object" != Ot(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Ot(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Ot(e) ? e : e + "";
      }
      function _t(t, e, n) {
        return (
          (e = Rt(e)),
          (function (t, e) {
            if (e && ("object" == Ot(e) || "function" == typeof e)) return e;
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
            Nt()
              ? Reflect.construct(e, n || [], Rt(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Nt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Nt = function () {
          return !!t;
        })();
      }
      function Rt(t) {
        return (
          (Rt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Rt(t)
        );
      }
      function Mt(t, e) {
        return (
          (Mt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          Mt(t, e)
        );
      }
      var Bt = function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        },
        Ft = (function (t) {
          function e(t) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((n = _t(this, e)).activeObjects = new Map()),
              (n.noNetPrimitives = [
                J.Component,
                J.SchematicBlock,
                J.ReuseSheetSymbol,
              ]),
              (n.boundsMap = new Map()),
              (n.idsMaps = new Map()),
              (n.selectionEnabled = !0),
              (n.isReady = !1),
              (n.currentState = null),
              (n.logger = r.QY.createLogger("SchEngine:selectionService")),
              (n.navigation = new xt(t)),
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
                e && Mt(t, e));
            })(e, t),
            (o = e),
            (a = [
              {
                key: "metadata",
                get: function () {
                  return It.q.instance;
                },
              },
              {
                key: "waitForReady",
                value: function () {
                  return Bt(
                    this,
                    void 0,
                    void 0,
                    Ct().mark(function t() {
                      var e = this;
                      return Ct().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((t.t0 = this.isReady), t.t0)) {
                                  t.next = 4;
                                  break;
                                }
                                return (
                                  (t.next = 4),
                                  new Promise(function (t) {
                                    return e.once("ready", function () {
                                      return t(e.isReady);
                                    });
                                  })
                                );
                              case 4:
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
                key: "setup",
                value: function () {
                  var t,
                    e = this;
                  try {
                    this.activeObjects.clear();
                    var n = new Set(),
                      i = new Map();
                    ((null !== (t = this.metadata.primitives) && void 0 !== t
                      ? t
                      : []
                    ).forEach(function (t, e) {
                      if (t.schDocId && t.schId) {
                        var r = "".concat(t.schDocId, "/").concat(t.schId);
                        n.has(r) || (n.add(r), i.set(e, t));
                      }
                    }),
                      this.setupPrimitives(this.metadata.primitives, [
                        ot.SchematicBlock,
                        ot.ReuseSheetSymbol,
                      ]),
                      this.setupComponents(this.metadata.components),
                      this.setupPrimitives(this.metadata.primitives, [
                        ot.NetLabel,
                      ]),
                      this.setupNets(this.metadata.nets, i),
                      this.setupNavigation(this.metadata.rawMetadata),
                      r.QY.bus.on("Variants:set", function (t) {
                        e.currentState &&
                          (e.currentState.activeObjects.forEach(function (e) {
                            return e.setBound(t);
                          }),
                          e.launchSelection(null));
                      }));
                  } catch (t) {
                    this.logger.LogError("Setup error.");
                  }
                  ((this.isReady = !0), this.emit("ready"));
                },
              },
              {
                key: "changeState",
                value: function (t) {
                  var e;
                  ((this.selectionEnabled = t),
                    (null === (e = this.currentState) || void 0 === e
                      ? void 0
                      : e.activeObjectsGroup) &&
                      (this.currentState.activeObjectsGroup.style.display = t
                        ? ""
                        : "none"));
                },
              },
              {
                key: "setupBounds",
                value: function (t) {
                  return Bt(
                    this,
                    void 0,
                    void 0,
                    Ct().mark(function e() {
                      var n,
                        r,
                        i,
                        o,
                        a = this;
                      return Ct().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((e.next = 2), this.waitForReady());
                              case 2:
                                if ((n = t.modelId)) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  this.logger.LogWarn(
                                    "Skip setup bounds for document ".concat(
                                      t.id,
                                      " without model id.",
                                    ),
                                  ),
                                  e.abrupt("return")
                                );
                              case 6:
                                if ((r = t.renderData)) {
                                  e.next = 10;
                                  break;
                                }
                                return (
                                  this.logger.LogWarn(
                                    "Skip setup bounds for document ".concat(
                                      t.id,
                                      " without render data.",
                                    ),
                                  ),
                                  e.abrupt("return")
                                );
                              case 10:
                                if (!(i = this.idsMaps.get(n))) {
                                  e.next = 13;
                                  break;
                                }
                                return e.abrupt("return");
                              case 13:
                                ((i = new Map()), this.idsMaps.set(n, i));
                                try {
                                  ((o = window.document.createElement("div")),
                                    window.document.body.appendChild(o));
                                  try {
                                    (o.appendChild(
                                      r.documentElement.cloneNode(!0),
                                    ),
                                      this.getActiveObjects(n).forEach(
                                        function (t) {
                                          (a.currentState &&
                                            t.channel &&
                                            t.channel !==
                                              a.currentState.channelId) ||
                                            t.updateBoundRectangles(i);
                                        },
                                      ));
                                  } finally {
                                    window.document.body.removeChild(o);
                                  }
                                } catch (t) {
                                  this.logger.LogWarn(
                                    "Setup document error. " + t.message,
                                  );
                                }
                              case 16:
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
                key: "setupDocument",
                value: function (t, e, r) {
                  return Bt(
                    this,
                    void 0,
                    void 0,
                    Ct().mark(function i() {
                      var o,
                        a,
                        c,
                        u,
                        s,
                        l,
                        h = this;
                      return Ct().wrap(
                        function (i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                return (
                                  this.setupDocumentCancellationToken &&
                                    (this.setupDocumentCancellationToken.isCancellationRequested =
                                      !0),
                                  (o = new Lt.Z()),
                                  (this.setupDocumentCancellationToken = o),
                                  (i.next = 5),
                                  this.waitForReady()
                                );
                              case 5:
                                if (!o.isCancellationRequested) {
                                  i.next = 7;
                                  break;
                                }
                                return i.abrupt("return", null);
                              case 7:
                                if (
                                  ((this.currentState = null),
                                  this.boundsMap.clear(),
                                  t.modelId)
                                ) {
                                  i.next = 12;
                                  break;
                                }
                                return i.abrupt("return");
                              case 12:
                                if ((a = this.idsMaps.get(t.modelId))) {
                                  i.next = 16;
                                  break;
                                }
                                return (
                                  this.logger.LogWarn(
                                    "Skip setup document for document ".concat(
                                      t.id,
                                      " without bounds.",
                                    ),
                                  ),
                                  i.abrupt("return", null)
                                );
                              case 16:
                                (((c = {
                                  documentId: t.id,
                                  modelId: t.modelId,
                                  channelId: t.channelId,
                                  svg: e,
                                  scene: r,
                                  svgPoint: e.createSVGPoint(),
                                  activeObjects: this.getActiveObjects(
                                    t.modelId,
                                  ),
                                  activeObjectsGroup:
                                    n.g.document.createElementNS(
                                      "http://www.w3.org/2000/svg",
                                      "g",
                                    ),
                                  ids: a,
                                }).activeObjectsGroup.id =
                                  c.scene.id + "ActiveObjects"),
                                  (u = 0));
                              case 19:
                                if (!(u < c.scene.children.length)) {
                                  i.next = 27;
                                  break;
                                }
                                if (
                                  (s = c.scene.children[u]).id !==
                                  c.activeObjectsGroup.id
                                ) {
                                  i.next = 24;
                                  break;
                                }
                                return (
                                  c.scene.removeChild(s),
                                  i.abrupt("break", 27)
                                );
                              case 24:
                                (u++, (i.next = 19));
                                break;
                              case 27:
                                return (
                                  (l = this.metadata.getChannelNets(
                                    c.channelId,
                                  )),
                                  c.activeObjects.forEach(function (t) {
                                    if (t.type === J.Net) {
                                      if (l && !l.includes(t.id)) return;
                                    } else if (
                                      t.channel &&
                                      t.channel !== c.channelId
                                    )
                                      return;
                                    (t.updateBoundRectangles(c.ids),
                                      t.updateScene(
                                        c.svg,
                                        c.activeObjectsGroup,
                                        "activeMouse",
                                        function (e) {
                                          h.boundsMap.set(e, t);
                                        },
                                      ));
                                  }),
                                  (this.currentState = c),
                                  i.abrupt("return", c.activeObjectsGroup)
                                );
                              case 31:
                              case "end":
                                return i.stop();
                            }
                        },
                        i,
                        this,
                      );
                    }),
                  );
                },
              },
              {
                key: "selectByPoint",
                value: function (t) {
                  if (this.currentState) {
                    ((this.currentState.svgPoint.x = t.x),
                      (this.currentState.svgPoint.y = t.y));
                    var e = this.currentState.scene.getScreenCTM();
                    if (e) {
                      var n,
                        r = this.currentState.svgPoint.matrixTransform(
                          e.inverse(),
                        ),
                        i = new Array(),
                        o = (function (t, e) {
                          var n =
                            ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                            t["@@iterator"];
                          if (!n) {
                            if (Array.isArray(t) || (n = Dt(t))) {
                              n && (t = n);
                              var r = 0,
                                i = function () {};
                              return {
                                s: i,
                                n: function () {
                                  return r >= t.length
                                    ? { done: !0 }
                                    : { done: !1, value: t[r++] };
                                },
                                e: function (t) {
                                  throw t;
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
                            c = !1;
                          return {
                            s: function () {
                              n = n.call(t);
                            },
                            n: function () {
                              var t = n.next();
                              return ((a = t.done), t);
                            },
                            e: function (t) {
                              ((c = !0), (o = t));
                            },
                            f: function () {
                              try {
                                a || null == n.return || n.return();
                              } finally {
                                if (c) throw o;
                              }
                            },
                          };
                        })(this.currentState.ids.values());
                      try {
                        for (o.s(); !(n = o.n()).done; ) {
                          var a = n.value;
                          if (a.test(r))
                            if (this.navigation.canNavigate(a.id)) i.push(a);
                            else {
                              var c = a.getRootOwner();
                              i.push(c);
                            }
                        }
                      } catch (t) {
                        o.e(t);
                      } finally {
                        o.f();
                      }
                      if (
                        (i.sort(function (t, e) {
                          return Number(e.highlighted) - Number(t.highlighted);
                        }),
                        i.length > 0)
                      ) {
                        var u = i[0];
                        this.navigation.canNavigate(u.id)
                          ? this.navigation.invoke(t.x, t.y, u.id)
                          : this.launchSelection(u);
                      } else this.launchSelection(null);
                    }
                  }
                },
              },
              {
                key: "getActiveObjectsForItem",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = [];
                  return (
                    this.getActiveObjectById(t.schId, r),
                    t.subParts &&
                      !n &&
                      t.subParts.forEach(function (t) {
                        return e.getActiveObjectById(t.schId, r);
                      }),
                    r
                  );
                },
              },
              {
                key: "canSelect",
                value: function (t) {
                  var e = ct(t);
                  return [
                    ot.Wire,
                    ot.Bus,
                    ot.Pin,
                    ot.Port,
                    ot.NetLabel,
                    ot.PowerObject,
                    ot.SheetEntry,
                    ot.SheetSymbol,
                    ot.SchematicBlock,
                    ot.ReuseSheetSymbol,
                    ot.CrossSheetConnector,
                    ot.SignalHarness,
                  ].includes(e);
                },
              },
              {
                key: "isDisabled",
                value: function (t) {
                  var e = ct(t);
                  return [ot.CrossSheetConnector, ot.SignalHarness].includes(e);
                },
              },
              {
                key: "getActiveObjectById",
                value: function (t, e) {
                  if (this.currentState) {
                    var n = this.currentState.ids.get(t);
                    if (n && n.boundElement && n.boundElement.selectedPath) {
                      var r = {
                        element: null,
                        bounds: n.boundElement.selectedPath,
                      };
                      (n.type === J.Wire &&
                        this.setupWireHighlight(
                          document.getElementById(n.id),
                          n,
                          function (t) {
                            return e.push({ element: t });
                          },
                        ),
                        e.push(r));
                    }
                  }
                },
              },
              {
                key: "launchSelection",
                value: function (t) {
                  if (this.metadata.rawMetadata && this.currentState) {
                    var e = null;
                    if (t)
                      if (this.noNetPrimitives.includes(t.type))
                        e = this.getObjectSelectionData(t.type, t.id);
                      else if (t.type === J.Net) {
                        var n = this.metadata.nets[parseInt(t.id)];
                        e = (0, i.Z)("net", n, "SchEngine");
                      }
                    (e && !this.selectionEnabled) || r.QY.bus.emit("select", e);
                  }
                },
              },
              {
                key: "getObjectSelectionData",
                value: function (t, e) {
                  if (!this.currentState || !e) return null;
                  var n,
                    r = "none",
                    o = this.currentState.modelId;
                  switch (t) {
                    case J.Component:
                      ((r = "component"), (n = this.getComponent(e, o)));
                      break;
                    case J.SchematicBlock:
                    case J.ReuseSheetSymbol:
                      ((r = "block"), (n = this.getReuseBlock(e, o)));
                  }
                  return n ? (0, i.Z)(r, n, "SchEngine") : null;
                },
              },
              {
                key: "getComponent",
                value: function (t, e) {
                  var n = this,
                    r = this.metadata.components.find(function (r) {
                      return (
                        (!r.channel ||
                          !n.currentState ||
                          r.channel === n.currentState.channelId) &&
                        ((r.schId === t && r.schDocId === e) ||
                          (!!r.subParts &&
                            r.subParts.find(function (n) {
                              return n.schId === t && n.schDocId === e;
                            })))
                      );
                    });
                  if (r && !r.pcbDocId && r.otherPcb) {
                    var i = r.otherPcb.values().next().value;
                    (null == i ? void 0 : i.length) && (r = i[0]);
                  }
                  return r;
                },
              },
              {
                key: "getReuseBlock",
                value: function (t, e) {
                  var n = this.metadata.reuseBlocks.filter(function (e) {
                    return e.schId === t;
                  })[0];
                  if (n && !n.pcbDocId && n.otherPcb) {
                    var r = n.otherPcb.values().next().value;
                    (null == r ? void 0 : r.length) && (n = r[0]);
                  }
                  return n;
                },
              },
              {
                key: "getActiveObjects",
                value: function (t) {
                  return (t && this.activeObjects.get(t)) || [];
                },
              },
              {
                key: "createActiveObject",
                value: function (t, e, n, i) {
                  var o = this,
                    a = new vt(
                      t,
                      e,
                      n,
                      i,
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : null,
                      arguments.length > 5 &&
                        void 0 !== arguments[5] &&
                        arguments[5],
                      arguments.length > 6 && void 0 !== arguments[6]
                        ? arguments[6]
                        : null,
                    );
                  return (
                    a.on("highlightStart", function (t) {
                      return o.invokeHighlight(a);
                    }),
                    a.on("highlightComplete", function () {
                      return r.QY.bus.emit("SchEngine:clearHighlight");
                    }),
                    a
                  );
                },
              },
              {
                key: "addActiveObject",
                value: function (t, e) {
                  if (t && e) {
                    var n = this.activeObjects.get(t);
                    (n || ((n = []), this.activeObjects.set(t, n)), n.push(e));
                  }
                },
              },
              {
                key: "setupComponents",
                value: function (t) {
                  var e = this;
                  t &&
                    t.forEach(function (t) {
                      t.kind && ct(t) === ot.Component && e.setupComponent(t);
                    });
                },
              },
              {
                key: "setupPrimitives",
                value: function (t, e) {
                  var n = this;
                  t &&
                    t.forEach(function (t) {
                      t.kind && e.includes(ct(t)) && n.setupPrimitive(t, ut(t));
                    });
                },
              },
              {
                key: "setupNets",
                value: function (t, e) {
                  var n = this;
                  t &&
                    e &&
                    t.forEach(function (t, r) {
                      n.setupNet(t, r, e);
                    });
                },
              },
              {
                key: "setupNet",
                value: function (t, e, n) {
                  var r = this;
                  if (t.primitives) {
                    var i = t.primitives
                      .map(function (t) {
                        return n.get(t);
                      })
                      .filter(function (t) {
                        return void 0 !== t;
                      })
                      .filter(function (t) {
                        return r.canSelect(t);
                      });
                    if (i.length) {
                      var o = i.reduce(function (t, e) {
                        return (
                          (t[e.schDocId] = [].concat(
                            (function (t) {
                              return (
                                (function (t) {
                                  if (Array.isArray(t)) return jt(t);
                                })(t) ||
                                (function (t) {
                                  if (
                                    ("undefined" != typeof Symbol &&
                                      null != t[Symbol.iterator]) ||
                                    null != t["@@iterator"]
                                  )
                                    return Array.from(t);
                                })(t) ||
                                Dt(t) ||
                                (function () {
                                  throw new TypeError(
                                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                  );
                                })()
                              );
                            })(t[e.schDocId] || []),
                            [e],
                          )),
                          t
                        );
                      }, {});
                      Object.keys(o).forEach(function (n) {
                        var i = [],
                          a = r.createActiveObject(
                            null,
                            J.Net,
                            "".concat(e),
                            i,
                            t.channel,
                          );
                        (o[n] &&
                          o[n].forEach(function (e) {
                            i.find(function (t) {
                              return t.id === e.schId;
                            }) ||
                              i.push(
                                r.createActiveObject(
                                  a,
                                  J.Wire,
                                  e.schId,
                                  null,
                                  t.channel,
                                  r.isDisabled(e),
                                  ct(e),
                                ),
                              );
                          }),
                          r.addActiveObject(n, a));
                      });
                    }
                  }
                },
              },
              {
                key: "setupComponent",
                value: function (t) {
                  var e = this;
                  if (t.schId && t.schDocId)
                    if (t.subParts) {
                      var n = new Map();
                      (n.set(t.schDocId, [t]),
                        t.subParts.forEach(function (t) {
                          n.has(t.schDocId)
                            ? n.get(t.schDocId).push(t)
                            : n.set(t.schDocId, [t]);
                        }),
                        n.forEach(function (n, r) {
                          if (0 !== n.length) {
                            var i = [],
                              o = e.createActiveObject(
                                null,
                                J.Component,
                                n[0].schId,
                                i,
                                t.channel,
                              );
                            (e.addActiveObject(r, o),
                              0 !== (n = n.slice(1)).length &&
                                n.forEach(function (n) {
                                  return i.push(
                                    e.createActiveObject(
                                      o,
                                      J.Component,
                                      n.schId,
                                      null,
                                      t.channel,
                                    ),
                                  );
                                }));
                          }
                        }));
                    } else {
                      var r = this.createActiveObject(
                        null,
                        J.Component,
                        t.schId,
                        [],
                        t.channel,
                      );
                      this.addActiveObject(t.schDocId, r);
                    }
                },
              },
              {
                key: "setupPrimitive",
                value: function (t, e) {
                  if (t.schId && t.schDocId) {
                    var n = this.createActiveObject(
                      null,
                      e,
                      t.schId,
                      [],
                      t.channel,
                    );
                    this.addActiveObject(t.schDocId, n);
                  }
                },
              },
              {
                key: "setupNavigation",
                value: function (t) {
                  var e = this;
                  this.navigation.setup(t);
                  var n = new Array();
                  (this.navigation.getLinks().forEach(function (t) {
                    var r = ut(t),
                      i = e.createActiveObject(null, r, t.schId, null);
                    n.push({ docId: t.schDocId, obj: i });
                  }),
                    n.sort(function (t, e) {
                      return e.obj.type - t.obj.type;
                    }),
                    n.forEach(function (t) {
                      var n = t.docId,
                        r = t.obj;
                      return n && r && e.addActiveObject(n, r);
                    }));
                },
              },
              {
                key: "invokeHighlight",
                value: function (t) {
                  var e = this;
                  this.currentState &&
                    (this.noNetPrimitives.includes(t.type)
                      ? t.boundElement &&
                        t.boundElement.selectedPath &&
                        t.boundElement.selectedPath.forEach(function (e) {
                          var n = e.createSvgElement(3);
                          (n.setAttribute("data-id", t.id),
                            r.QY.bus.emit("SchEngine:drawHighlight", n));
                        })
                      : t.type === J.Wire &&
                        this.setupWireHighlight(
                          this.currentState.svg.getElementById(t.id),
                          t,
                          function (t) {
                            return r.QY.bus.emit("SchEngine:drawHighlight", t);
                          },
                        ),
                    t.parts &&
                      t.parts.forEach(function (t) {
                        return e.invokeHighlight(t);
                      }));
                },
              },
              {
                key: "setupWireHighlight",
                value: function (t, e, n) {
                  var r = this;
                  if (t && t.localName) {
                    var i = t.localName;
                    if ("g" === i)
                      this.forEveryChild(t, e, function (t) {
                        return r.setupWireHighlight(t, e, n);
                      });
                    else if (
                      "line" === i ||
                      "polyline" === i ||
                      "rect" === i ||
                      "path" === i
                    ) {
                      var o = t.cloneNode(!0);
                      (o.setAttribute("data-id", e.id),
                        o.hasAttribute("id") && o.removeAttribute("id"),
                        n(o));
                    }
                  }
                },
              },
              {
                key: "forEveryChild",
                value: function (t, e, n) {
                  for (var r = e.getChildren(t), i = 0; i < r.length; i++) {
                    var o = r[i];
                    o && n(o);
                  }
                },
              },
            ]),
            a && Tt(o.prototype, a),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            o
          );
          var o, a;
        })(Pt.Z);
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
      function zt() {
        zt = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          c = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
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
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            c = new j(r || []);
          return (i(a, "_invoke", { value: P(t, n, c) }), a);
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          d = "suspendedYield",
          m = "executing",
          v = "completed",
          p = {};
        function y() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          k = S && S(S(C([])));
        k && k !== n && r.call(k, a) && (w = k);
        var E = (b.prototype = y.prototype = Object.create(w));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function I(t, e) {
          function n(i, o, a, c) {
            var u = h(t[i], t, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == Gt(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function P(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === m) throw Error("Generator is already running");
            if (i === v) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = L(c, r);
                if (u) {
                  if (u === p) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === f) throw ((i = v), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = m;
              var s = h(e, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? v : d), s.arg === p)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = v), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function L(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                L(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              p
            );
          var o = h(i, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"),
              (n.arg = o.arg),
              (n.delegate = null),
              p
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                p)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              p);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function D(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function j(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(O, this),
            this.reset(!0));
        }
        function C(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i))
                      return ((n.value = e[i]), (n.done = !1), n);
                  return ((n.value = t), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError(Gt(e) + " is not iterable");
        }
        return (
          (g.prototype = b),
          i(E, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = s(b, u, "GeneratorFunction")),
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
                : ((t.__proto__ = b), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(I.prototype),
          s(I.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = I),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new I(l(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(E),
          s(E, u, "Generator"),
          s(E, a, function () {
            return this;
          }),
          s(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return ((t.value = r), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = C),
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
                this.tryEntries.forEach(D),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
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
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return (this.complete(n.completion, n.afterLoc), D(n), p);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    D(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                p
              );
            },
          }),
          e
        );
      }
      function Yt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ht(r.key), r));
        }
      }
      function Ht(t) {
        var e = (function (t, e) {
          if ("object" != Gt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Gt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Gt(e) ? e : e + "";
      }
      var Vt = function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        },
        Zt = (function () {
          return (
            (t = function t(e) {
              var n = this;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.renderDataLoader = new Map()),
                (this.renderDataCache = new Map()),
                (this.modelIdLoader = new Map()),
                (this.modelIdCache = new Map()),
                (this.metadataCache = new Map()),
                (this.metadataLoaded = !1),
                "none" === e.response.metadata.state
                  ? e.response.metadata.once("updated", function () {
                      ((n.metadataLoaded = !0), n.metadataCache.clear());
                    })
                  : (this.metadataLoaded = !0));
            }),
            (e = [
              {
                key: "getPreviewUrl",
                value: function (t) {
                  var e, n;
                  return null !==
                    (n =
                      null ===
                        (e = window.__CORE__.response.storage.files.find(
                          function (e) {
                            return (
                              "Preview" === e.fileType && e.originalName === t
                            );
                          },
                        )) || void 0 === e
                        ? void 0
                        : e.dataFileUrl) && void 0 !== n
                    ? n
                    : "./images/warning.svg";
                },
              },
              {
                key: "getRenderData",
                value: function (t) {
                  return Vt(
                    this,
                    void 0,
                    void 0,
                    zt().mark(function e() {
                      var n, r;
                      return zt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.renderDataCache.has(t)) {
                                  e.next = 5;
                                  break;
                                }
                                if (
                                  !(r = this.renderDataCache.get(t)).document
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return", r.document);
                              case 4:
                                throw null !== (n = r.error) && void 0 !== n
                                  ? n
                                  : new Error("Data load error");
                              case 5:
                                if (!this.renderDataLoader.has(t)) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 8),
                                  this.renderDataLoader.get(t)
                                );
                              case 8:
                                return e.abrupt(
                                  "return",
                                  this.getRenderData(t),
                                );
                              case 9:
                                return (
                                  this.renderDataLoader.set(
                                    t,
                                    this.loadRenderData(t),
                                  ),
                                  (e.next = 12),
                                  this.getRenderData(t)
                                );
                              case 12:
                                return e.abrupt("return", e.sent);
                              case 13:
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
                key: "getModelId",
                value: function (t) {
                  return Vt(
                    this,
                    void 0,
                    void 0,
                    zt().mark(function e() {
                      var n, r;
                      return zt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.modelIdCache.has(t)) {
                                  e.next = 5;
                                  break;
                                }
                                if (!(r = this.modelIdCache.get(t)).modelId) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return", r.modelId);
                              case 4:
                                throw null !== (n = r.error) && void 0 !== n
                                  ? n
                                  : new Error("Model id load error");
                              case 5:
                                if (!this.modelIdLoader.has(t)) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 8),
                                  this.modelIdLoader.get(t)
                                );
                              case 8:
                                return e.abrupt("return", this.getModelId(t));
                              case 9:
                                return (
                                  this.modelIdLoader.set(
                                    t,
                                    this.loadModelId(t),
                                  ),
                                  (e.next = 12),
                                  this.getModelId(t)
                                );
                              case 12:
                                return e.abrupt("return", e.sent);
                              case 13:
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
                key: "getMetadata",
                value: function (t) {
                  return this.metadataLoaded
                    ? window.__CORE__.response.metadata
                    : this.metadataCache.get(t);
                },
              },
              {
                key: "loadModelId",
                value: function (t) {
                  return Vt(
                    this,
                    void 0,
                    void 0,
                    zt().mark(function e() {
                      var n, r, i, o, a, c;
                      return zt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = window.__CORE__.response.metadata),
                                  (e.prev = 1),
                                  "full" !== n.type)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                ((r = n), (e.next = 22));
                                break;
                              case 6:
                                if ("project" !== n.type) {
                                  e.next = 21;
                                  break;
                                }
                                if ("none" !== n.state) {
                                  e.next = 18;
                                  break;
                                }
                                return (
                                  (i = window.__CORE__.response.storage),
                                  (e.next = 11),
                                  i.documentLoader.loadDocument(
                                    t,
                                    "SchMetadata",
                                  )
                                );
                              case 11:
                                return ((o = e.sent), (e.next = 14), o.json());
                              case 14:
                                ((r = e.sent),
                                  this.metadataCache.set(t, r),
                                  (e.next = 19));
                                break;
                              case 18:
                                r = n;
                              case 19:
                                e.next = 22;
                                break;
                              case 21:
                                throw new Error(
                                  "Unknown metadata type ".concat(n.type),
                                );
                              case 22:
                                if (
                                  (a = r.schDocuments.find(function (e) {
                                    return e.fileName === t;
                                  }))
                                ) {
                                  e.next = 25;
                                  break;
                                }
                                throw new Error(
                                  "Document with data has not found for [".concat(
                                    t,
                                    "].",
                                  ),
                                );
                              case 25:
                                ((c = a.id),
                                  this.modelIdCache.set(t, { modelId: c }),
                                  (e.next = 32));
                                break;
                              case 29:
                                ((e.prev = 29),
                                  (e.t0 = e.catch(1)),
                                  this.modelIdCache.set(t, { error: e.t0 }));
                              case 32:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 29]],
                      );
                    }),
                  );
                },
              },
              {
                key: "loadRenderData",
                value: function (t) {
                  return Vt(
                    this,
                    void 0,
                    void 0,
                    zt().mark(function e() {
                      var n, r, i, o;
                      return zt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (n = window.__CORE__.response.storage),
                                  (e.next = 4),
                                  n.documentLoader.loadDocument(t, "SchSvg")
                                );
                              case 4:
                                return ((r = e.sent), (e.next = 7), r.text());
                              case 7:
                                ((i = e.sent),
                                  (o = new DOMParser().parseFromString(
                                    i,
                                    "text/xml",
                                  )),
                                  this.renderDataCache.set(t, { document: o }),
                                  (e.next = 15));
                                break;
                              case 12:
                                ((e.prev = 12),
                                  (e.t0 = e.catch(0)),
                                  this.renderDataCache.set(t, { error: e.t0 }));
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 12]],
                      );
                    }),
                  );
                },
              },
            ]),
            e && Yt(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      function Qt(t) {
        return (
          (Qt =
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
          Qt(t)
        );
      }
      function Ut(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                u = !0,
                s = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                ((s = !0), (i = t));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return c;
            }
          })(t, e) ||
          qt(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Wt(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = qt(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
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
          c = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return ((a = t.done), t);
          },
          e: function (t) {
            ((c = !0), (o = t));
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function qt(t, e) {
        if (t) {
          if ("string" == typeof t) return Kt(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Kt(t, e)
                : void 0
          );
        }
      }
      function Kt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function $t() {
        $t = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          c = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
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
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            c = new j(r || []);
          return (i(a, "_invoke", { value: P(t, n, c) }), a);
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var f = "suspendedStart",
          d = "suspendedYield",
          m = "executing",
          v = "completed",
          p = {};
        function y() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          k = S && S(S(C([])));
        k && k !== n && r.call(k, a) && (w = k);
        var E = (b.prototype = y.prototype = Object.create(w));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function I(t, e) {
          function n(i, o, a, c) {
            var u = h(t[i], t, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == Qt(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function P(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === m) throw Error("Generator is already running");
            if (i === v) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = L(c, r);
                if (u) {
                  if (u === p) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === f) throw ((i = v), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = m;
              var s = h(e, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? v : d), s.arg === p)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = v), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function L(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                L(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              p
            );
          var o = h(i, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"),
              (n.arg = o.arg),
              (n.delegate = null),
              p
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                p)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              p);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function D(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function j(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(O, this),
            this.reset(!0));
        }
        function C(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i))
                      return ((n.value = e[i]), (n.done = !1), n);
                  return ((n.value = t), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError(Qt(e) + " is not iterable");
        }
        return (
          (g.prototype = b),
          i(E, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = s(b, u, "GeneratorFunction")),
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
                : ((t.__proto__ = b), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(I.prototype),
          s(I.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = I),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new I(l(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(E),
          s(E, u, "Generator"),
          s(E, a, function () {
            return this;
          }),
          s(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return ((t.value = r), (t.done = !1), t);
                }
                return ((t.done = !0), t);
              }
            );
          }),
          (e.values = C),
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
                this.tryEntries.forEach(D),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
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
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return (this.complete(n.completion, n.afterLoc), D(n), p);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    D(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                p
              );
            },
          }),
          e
        );
      }
      function Xt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Jt(r.key), r));
        }
      }
      function Jt(t) {
        var e = (function (t, e) {
          if ("object" != Qt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Qt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Qt(e) ? e : e + "";
      }
      var te = function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        },
        ee = (function () {
          return (
            (t = function t() {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.documents = []),
                (this.currentDocumentIndex = -1),
                (this.shown = !1),
                (this.selectedItem = null),
                (this.selectedItemDocIds = null),
                (this.selectedItemDocIndex = -1),
                (this.showDocumentCancellationToken = null),
                (this.activateDocumentCancellationToken = null),
                (this.logger = r.QY.createLogger("SchEngine")));
              var e = {};
              ((e.setup = this.setupEngine.bind(this)),
                (e.attach = this.attachToWorkspace.bind(this)),
                (e.show = this.show.bind(this)),
                (e.close = this.close.bind(this)),
                (this.state = new it(e, this.logger)),
                (this.selectionService = new Ft(this)),
                (this.renderService = new Y(this.selectionService)));
            }),
            (e = [
              {
                key: "name",
                get: function () {
                  return "SchEngine";
                },
              },
              {
                key: "comment",
                get: function () {
                  return "SVG Schematic documents handler engine";
                },
              },
              {
                key: "dependencies",
                get: function () {
                  return ["project"];
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
                    "SchEngine:documentShowing",
                    "SchEngine:didDocumentAttach",
                    "SchEngine:didDocumentDettach",
                    "SchEngine:didDocumentAttachError",
                    "SchEngine:beforeDocumentLoad",
                    "SchEngine:afterDocumentLoad",
                    "SchEngine:documentMove",
                    "SchEngine:documentZoom",
                    "SchEngine:documentClick",
                    "SchEngine:resetDocumentView",
                    "SchEngine:select",
                    "SchEngine:navigate",
                    "SchEngine:drawHighlight",
                    "SchEngine:clearHighlight",
                    "SchEngine:drawSelection",
                    "SchEngine:clearSelection",
                    "SchEngine:zoomToFit",
                    "SchEngine:zoomToObjects",
                    "SchEngine:didDocumentActivate",
                    "SchEngine:documentLocation",
                    "SchEngine:readyNavigateTo",
                    "SchEngine:navigateTo",
                  ];
                },
              },
              {
                key: "activeDocumentIndex",
                get: function () {
                  return this.currentDocumentIndex;
                },
              },
              {
                key: "allDocuments",
                get: function () {
                  return this.documents;
                },
              },
              {
                key: "bus",
                get: function () {
                  return r.QY.bus;
                },
              },
              {
                key: "setup",
                value: function (t) {
                  return this.state.setup(t);
                },
              },
              {
                key: "showView",
                value: function (t) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function e() {
                      return $t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return ((e.next = 2), this.state.attach(t));
                              case 2:
                                return ((e.next = 4), this.state.show());
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
                key: "showDocument",
                value: function (t) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function e() {
                      var n, r;
                      return $t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.logger.LogDebug("Show for id: " + t),
                                  (n = { cancelled: !1 }),
                                  this.showDocumentCancellationToken &&
                                    (this.showDocumentCancellationToken.cancelled =
                                      !0),
                                  (this.showDocumentCancellationToken = n),
                                  (e.prev = 4),
                                  (e.next = 7),
                                  this.setActiveDocumentById(t, !0)
                                );
                              case 7:
                                if (((r = e.sent), !n.cancelled)) {
                                  e.next = 10;
                                  break;
                                }
                                return e.abrupt("return");
                              case 10:
                                if (
                                  (this.renderService.attach(r), !this.shown)
                                ) {
                                  e.next = 24;
                                  break;
                                }
                                if (!n.cancelled) {
                                  e.next = 14;
                                  break;
                                }
                                return e.abrupt("return");
                              case 14:
                                return (
                                  (e.next = 16),
                                  this.renderService.setPosition(r)
                                );
                              case 16:
                                if (!n.cancelled) {
                                  e.next = 18;
                                  break;
                                }
                                return e.abrupt("return");
                              case 18:
                                return (
                                  (e.next = 20),
                                  this.renderService.render(r)
                                );
                              case 20:
                                if (!n.cancelled) {
                                  e.next = 22;
                                  break;
                                }
                                return e.abrupt("return");
                              case 22:
                                return ((e.next = 24), this.doSelectItem());
                              case 24:
                                e.next = 29;
                                break;
                              case 26:
                                return (
                                  (e.prev = 26),
                                  (e.t0 = e.catch(4)),
                                  e.abrupt("return", Promise.reject(e.t0))
                                );
                              case 29:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 26]],
                      );
                    }),
                  );
                },
              },
              {
                key: "hideView",
                value: function () {
                  this.state.close();
                },
              },
              {
                key: "resetView",
                value: function () {
                  this.renderService.reset();
                },
              },
              {
                key: "enableSelection",
                value: function (t) {
                  this.selectionService.changeState(t);
                },
              },
              {
                key: "highlightObjectByHash",
                value: function (t, e, n) {
                  if (t) {
                    var r = It.q.instance;
                    if (r) {
                      var o = null;
                      switch (e) {
                        case "component":
                          var a = r.components.find(function (e) {
                            return (
                              e.designator === n && e.schDocId === t.modelId
                            );
                          });
                          o = a
                            ? (0, i.Z)("component", a, "External", t.modelId)
                            : null;
                          break;
                        case "net":
                          var c = r.nets.find(function (e) {
                            return (
                              e.name === n &&
                              e.primitives.find(function (e) {
                                return r.primitives[e].schDocId === t.modelId;
                              })
                            );
                          });
                          o = c
                            ? (0, i.Z)("net", c, "External", t.modelId)
                            : null;
                          break;
                        case "pinOrPad":
                          var u = r.primitives.find(function (e) {
                            return e.schDocId === t.modelId && e.hash === n;
                          });
                          if (u) {
                            var s = u.hash.split("|")[0],
                              l = r.components.find(function (t) {
                                return t.designator === s;
                              });
                            o = l
                              ? (0, i.Z)(
                                  "component",
                                  l,
                                  "External",
                                  t.modelId,
                                  u,
                                )
                              : null;
                          }
                      }
                      window.__CORE__.bus.emit("select", o);
                    }
                  }
                },
              },
              {
                key: "setupEngine",
                value: function (t) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function e() {
                      var n,
                        r,
                        i,
                        o,
                        a,
                        c = this;
                      return $t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.logger.LogDebug("To SETUP state"),
                                  (n = new Zt(t)),
                                  (e.next = 4),
                                  t.engines.Project.getItems("documents", [
                                    "sch",
                                  ])
                                );
                              case 4:
                                ((r = e.sent),
                                  (i = Wt(r)),
                                  (e.prev = 6),
                                  (a = $t().mark(function t() {
                                    var e, i, a;
                                    return $t().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            ((e = o.value),
                                              (i = r
                                                .filter(function (t) {
                                                  return (
                                                    t.fileName === e.fileName
                                                  );
                                                })
                                                .every(function (t, e, n) {
                                                  return (
                                                    t.channelName ===
                                                    n[0].channelName
                                                  );
                                                })),
                                              ((a = new l(e, n, i)).toString =
                                                function () {
                                                  return ""
                                                    .concat(a.id, " [")
                                                    .concat(a.loadState, "]");
                                                }),
                                              c.documents.push(a));
                                          case 5:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })),
                                  i.s());
                              case 9:
                                if ((o = i.n()).done) {
                                  e.next = 13;
                                  break;
                                }
                                return e.delegateYield(a(), "t0", 11);
                              case 11:
                                e.next = 9;
                                break;
                              case 13:
                                e.next = 18;
                                break;
                              case 15:
                                ((e.prev = 15), (e.t1 = e.catch(6)), i.e(e.t1));
                              case 18:
                                return ((e.prev = 18), i.f(), e.finish(18));
                              case 21:
                                (this.setupMetadataAsync(t),
                                  this.setupSelectionAsync(t),
                                  this.loadAllDocumentsAsync(t));
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[6, 15, 18, 21]],
                      );
                    }),
                  );
                },
              },
              {
                key: "attachToWorkspace",
                value: function (t) {
                  (this.logger.LogDebug("To ATTACH_TO_WORKSPACE state"),
                    t.setAttribute("data-view-id", "schSvgView"),
                    this.renderService.attachTo(t));
                },
              },
              {
                key: "show",
                value: function () {
                  var t = this;
                  return new Promise(function (e, n) {
                    if (
                      (t.logger.LogDebug("To SHOW state"),
                      (t.shown = !0),
                      0 !== t.allDocuments.length)
                    ) {
                      if (t.selectedItem) {
                        var r =
                            -1 === t.currentDocumentIndex
                              ? 0
                              : t.currentDocumentIndex,
                          i = t.documents[r].id;
                        t.selectedItemDocIds &&
                        t.selectedItemDocIds.find(function (t) {
                          return t === i;
                        })
                          ? (t.selectedItemDocIndex = r)
                          : (t.currentDocumentIndex = t.selectedItemDocIndex);
                      }
                      var o =
                        -1 === t.currentDocumentIndex
                          ? 0
                          : t.currentDocumentIndex;
                      t.showDocument(t.documents[o].id)
                        .then(function (t) {
                          return e();
                        })
                        .catch(function (t) {
                          return n(t);
                        });
                    } else t.logger.LogWarn("Any document to show");
                  });
                },
              },
              {
                key: "close",
                value: function () {
                  var t;
                  (this.logger.LogDebug("To CLOSE state"),
                    null === (t = this.renderService) ||
                      void 0 === t ||
                      t.saveState(),
                    (this.shown = !1));
                },
              },
              {
                key: "setActiveDocumentById",
                value: function (t, e) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function n() {
                      var i, o, a;
                      return $t().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (
                                  ((o = { cancelled: !1 }),
                                  this.activateDocumentCancellationToken &&
                                    (this.activateDocumentCancellationToken.cancelled =
                                      !0),
                                  (this.activateDocumentCancellationToken = o),
                                  t)
                                ) {
                                  n.next = 5;
                                  break;
                                }
                                throw new Error("Document id is undefined.");
                              case 5:
                                if (
                                  (a =
                                    null !==
                                      (i = this.allDocuments.find(function (e) {
                                        return e.id === t;
                                      })) && void 0 !== i
                                      ? i
                                      : this.allDocuments.find(function (e) {
                                          return (
                                            e.modelUniqueId === t ||
                                            e.modelId === t
                                          );
                                        }))
                                ) {
                                  n.next = 8;
                                  break;
                                }
                                throw new Error(
                                  "Document not found for id [".concat(t, "]."),
                                );
                              case 8:
                                ((this.currentDocumentIndex =
                                  this.allDocuments.findIndex(function (t) {
                                    return t === a;
                                  })),
                                  e &&
                                    r.QY.bus.emit(
                                      "SchEngine:documentShowing",
                                      a,
                                    ),
                                  (n.t0 = a.loadState),
                                  (n.next =
                                    n.t0 === r.wF.IDLE
                                      ? 13
                                      : n.t0 === r.wF.LOAD
                                        ? 19
                                        : 23));
                                break;
                              case 13:
                                return (
                                  r.QY.bus.emit(
                                    "SchEngine:beforeDocumentLoad",
                                    a,
                                  ),
                                  (a.loadState = r.wF.LOAD),
                                  (n.next = 17),
                                  this.loadDocument(a)
                                );
                              case 17:
                                return (
                                  r.QY.bus.emit(
                                    "SchEngine:afterDocumentLoad",
                                    a,
                                  ),
                                  n.abrupt("break", 24)
                                );
                              case 19:
                                return (
                                  r.QY.bus.emit(
                                    "SchEngine:beforeDocumentLoad",
                                    a,
                                  ),
                                  (n.next = 22),
                                  new Promise(function (t) {
                                    r.QY.bus.on(
                                      "SchEngine:afterDocumentLoad",
                                      function (e) {
                                        return e == a && t();
                                      },
                                    );
                                  })
                                );
                              case 22:
                              case 23:
                                return n.abrupt("break", 24);
                              case 24:
                                return (
                                  o.cancelled ||
                                    r.QY.bus.emit(
                                      "SchEngine:didDocumentActivate",
                                      a,
                                    ),
                                  n.abrupt("return", a)
                                );
                              case 26:
                              case "end":
                                return n.stop();
                            }
                        },
                        n,
                        this,
                      );
                    }),
                  );
                },
              },
              {
                key: "setupMetadataAsync",
                value: function (t) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function e() {
                      var n;
                      return $t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = t.response),
                                  (e.prev = 1),
                                  !t.engines.Project)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (e.next = 5),
                                  t.engines.Project.metadataReady()
                                );
                              case 5:
                                (It.q.instance.attach(n.metadata),
                                  (e.next = 11));
                                break;
                              case 8:
                                ((e.prev = 8),
                                  (e.t0 = e.catch(1)),
                                  this.logger.LogError(
                                    "Setup metadata error.",
                                    e.t0,
                                  ));
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 8]],
                      );
                    }),
                  );
                },
              },
              {
                key: "setupSelectionAsync",
                value: function (t) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function e() {
                      var n = this;
                      return $t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.prev = 0), t.setupComplete)) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  (e.next = 4),
                                  new Promise(function (e) {
                                    return t.bus.once("complete", function () {
                                      return e();
                                    });
                                  })
                                );
                              case 4:
                                return (
                                  (e.next = 6),
                                  Promise.all(
                                    this.documents.map(function (t) {
                                      return new Promise(function (e) {
                                        return t
                                          .loadModelId()
                                          .then(function (t) {
                                            return e();
                                          })
                                          .catch(function (t) {
                                            (n.logger.LogError(
                                              "Set model id error",
                                              t,
                                            ),
                                              e());
                                          });
                                      });
                                    }),
                                  )
                                );
                              case 6:
                                (this.selectionService.setup(), (e.next = 12));
                                break;
                              case 9:
                                ((e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  this.logger.LogError(
                                    "Selection setup error.",
                                    e.t0,
                                  ));
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 9]],
                      );
                    }),
                  );
                },
              },
              {
                key: "loadAllDocumentsAsync",
                value: function (t) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function e() {
                      var n,
                        i,
                        o,
                        a = this;
                      return $t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.prev = 0), t.setupComplete)) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  (e.next = 4),
                                  new Promise(function (e) {
                                    return t.bus.once("complete", function () {
                                      return e();
                                    });
                                  })
                                );
                              case 4:
                                ((n = Wt(this.allDocuments)),
                                  (e.prev = 5),
                                  (o = $t().mark(function t() {
                                    var e;
                                    return $t().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            (e = i.value).loadState ===
                                              r.wF.IDLE &&
                                              ((e.loadState = r.wF.LOAD),
                                              a
                                                .loadDocument(e)
                                                .then(function () {
                                                  a.activeDocumentIndex < 0 ||
                                                    (a.allDocuments[
                                                      a.activeDocumentIndex
                                                    ] === e &&
                                                      r.QY.bus.emit(
                                                        "SchEngine:afterDocumentLoad",
                                                        e,
                                                      ));
                                                }));
                                          case 2:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })),
                                  n.s());
                              case 8:
                                if ((i = n.n()).done) {
                                  e.next = 12;
                                  break;
                                }
                                return e.delegateYield(o(), "t0", 10);
                              case 10:
                                e.next = 8;
                                break;
                              case 12:
                                e.next = 17;
                                break;
                              case 14:
                                ((e.prev = 14), (e.t1 = e.catch(5)), n.e(e.t1));
                              case 17:
                                return ((e.prev = 17), n.f(), e.finish(17));
                              case 20:
                                e.next = 25;
                                break;
                              case 22:
                                ((e.prev = 22),
                                  (e.t2 = e.catch(0)),
                                  this.logger.LogError(
                                    "Load all documents error.",
                                    e.t2,
                                  ));
                              case 25:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [0, 22],
                          [5, 14, 17, 20],
                        ],
                      );
                    }),
                  );
                },
              },
              {
                key: "loadDocument",
                value: function (t) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function e() {
                      var n,
                        i,
                        o,
                        a,
                        c = this;
                      return $t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!t.error) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  (t.loadState = r.wF.READY),
                                  e.abrupt("return")
                                );
                              case 3:
                                return (
                                  (e.prev = 3),
                                  (e.next = 6),
                                  new Promise(function (e) {
                                    return t
                                      .loadModelId()
                                      .then(function (t) {
                                        return e();
                                      })
                                      .catch(function (t) {
                                        (c.logger.LogError(
                                          "Set model id error",
                                          t,
                                        ),
                                          e());
                                      });
                                  })
                                );
                              case 6:
                                return ((e.next = 8), t.loadRenderData());
                              case 8:
                                if ((n = t.renderData)) {
                                  e.next = 11;
                                  break;
                                }
                                throw new Error("Render data is an empty.");
                              case 11:
                                if (!(i = n.querySelector("parsererror"))) {
                                  e.next = 15;
                                  break;
                                }
                                throw (
                                  this.logger.LogError(
                                    "Could not parse svg document: ".concat(
                                      i.textContent,
                                    ),
                                  ),
                                  new Error("Could not parse svg document.")
                                );
                              case 15:
                                if ((o = n.documentElement)) {
                                  e.next = 18;
                                  break;
                                }
                                throw new Error("Document is an empty.");
                              case 18:
                                (o.hasAttribute("data-doc-id") &&
                                  ((a = o.getAttribute("data-doc-id")),
                                  t.modelId &&
                                    a !== t.modelId &&
                                    this.logger.LogError(
                                      "Document meta id ["
                                        .concat(t.id, "] is not equals id [")
                                        .concat(a, "]"),
                                    )),
                                  this.selectionService.setupBounds(t),
                                  (t.loadState = r.wF.READY),
                                  (e.next = 27));
                                break;
                              case 23:
                                ((e.prev = 23),
                                  (e.t0 = e.catch(3)),
                                  (t.loadState = r.wF.READY),
                                  t.setError(t.error || e.t0));
                              case 27:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 23]],
                      );
                    }),
                  );
                },
              },
              {
                key: "onSelectMany",
                value: function (t) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function e() {
                      var n,
                        r,
                        i,
                        o,
                        a = this;
                      return $t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this.selectedItem = null),
                                  (this.selectedItemDocIds = null),
                                  (this.selectedItemDocIndex = -1),
                                  (n =
                                    Array.isArray(t) && t.length ? t[0] : null),
                                  ["net", "component"].findIndex(function (t) {
                                    return Boolean(
                                      t === (null == n ? void 0 : n.name),
                                    );
                                  }) < 0 && (t = null),
                                  !n)
                                ) {
                                  e.next = 30;
                                  break;
                                }
                                if (
                                  ((e.prev = 6),
                                  (r = n.native),
                                  !(i = this.getItemDocumentUniqueModelIds(
                                    r,
                                    n.documentId,
                                  )).id)
                                ) {
                                  e.next = 22;
                                  break;
                                }
                                if (
                                  ((this.selectedItem = t
                                    .slice()
                                    .map(function (t) {
                                      var e = Object.assign(
                                        Object.assign({}, t),
                                        { fit: !0, openedDocIds: {} },
                                      );
                                      return (
                                        a.shown &&
                                          "SchEngine" === n.senderId &&
                                          (e.openedDocIds[i.id] = !0),
                                        e
                                      );
                                    })),
                                  (this.selectedItemDocIds = i.ids),
                                  (o = this.documents.findIndex(function (t) {
                                    return t.modelUniqueId === i.id;
                                  })),
                                  (this.selectedItemDocIndex = o),
                                  !this.shown ||
                                    this.currentDocumentIndex === o)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.next = 17),
                                  this.showDocument(
                                    this.documents[this.selectedItemDocIndex]
                                      .id,
                                  )
                                );
                              case 17:
                                e.next = 22;
                                break;
                              case 19:
                                if (
                                  this.shown ||
                                  this.currentDocumentIndex === o
                                ) {
                                  e.next = 22;
                                  break;
                                }
                                return (
                                  (e.next = 22),
                                  this.setActiveDocumentById(
                                    this.documents[this.selectedItemDocIndex]
                                      .id,
                                    !1,
                                  )
                                );
                              case 22:
                                e.next = 30;
                                break;
                              case 24:
                                ((e.prev = 24),
                                  (e.t0 = e.catch(6)),
                                  this.logger.LogError(
                                    "Get selection item info.",
                                    e.t0,
                                  ),
                                  (this.selectedItem = null),
                                  (this.selectedItemDocIds = null),
                                  (this.selectedItemDocIndex = -1));
                              case 30:
                                if (!this.shown) {
                                  e.next = 33;
                                  break;
                                }
                                return ((e.next = 33), this.doSelectItem());
                              case 33:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[6, 24]],
                      );
                    }),
                  );
                },
              },
              {
                key: "onSelect",
                value: function (t) {
                  return te(
                    this,
                    void 0,
                    void 0,
                    $t().mark(function e() {
                      var n, r, i, o;
                      return $t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (["net", "component", "block"].findIndex(
                                    function (e) {
                                      return Boolean(
                                        e === (null == t ? void 0 : t.name),
                                      );
                                    },
                                  ) < 0 && (t = null),
                                  (this.selectedItem = null),
                                  (this.selectedItemDocIds = null),
                                  (this.selectedItemDocIndex = -1),
                                  !t)
                                ) {
                                  e.next = 35;
                                  break;
                                }
                                if (
                                  ((e.prev = 5),
                                  !t.selectedPrimitive ||
                                    t.selectedPrimitive.schId)
                                ) {
                                  e.next = 8;
                                  break;
                                }
                                return e.abrupt("return");
                              case 8:
                                if (
                                  ((n = t.native),
                                  !(r = this.getItemDocumentUniqueModelIds(
                                    n,
                                    t.documentId,
                                  )).id)
                                ) {
                                  e.next = 27;
                                  break;
                                }
                                if (
                                  (((i = Object.assign({}, t)).fit = !0),
                                  (i.openedDocIds = {}),
                                  (this.selectedItem = i),
                                  (this.selectedItemDocIds = r.ids),
                                  this.shown &&
                                    "SchEngine" === t.senderId &&
                                    (i.openedDocIds[r.id] = !0),
                                  (o = this.documents.findIndex(function (t) {
                                    return t.modelUniqueId === r.id;
                                  })),
                                  (this.selectedItemDocIndex = o),
                                  !this.shown ||
                                    this.currentDocumentIndex === o)
                                ) {
                                  e.next = 24;
                                  break;
                                }
                                return (
                                  (e.next = 22),
                                  this.showDocument(
                                    this.documents[this.selectedItemDocIndex]
                                      .id,
                                  )
                                );
                              case 22:
                                e.next = 27;
                                break;
                              case 24:
                                if (
                                  this.shown ||
                                  this.currentDocumentIndex === o
                                ) {
                                  e.next = 27;
                                  break;
                                }
                                return (
                                  (e.next = 27),
                                  this.setActiveDocumentById(
                                    this.documents[this.selectedItemDocIndex]
                                      .id,
                                    !1,
                                  )
                                );
                              case 27:
                                e.next = 35;
                                break;
                              case 29:
                                ((e.prev = 29),
                                  (e.t0 = e.catch(5)),
                                  this.logger.LogError(
                                    "Get selection item info.",
                                    e.t0,
                                  ),
                                  (this.selectedItem = null),
                                  (this.selectedItemDocIds = null),
                                  (this.selectedItemDocIndex = -1));
                              case 35:
                                if (!this.shown) {
                                  e.next = 38;
                                  break;
                                }
                                return ((e.next = 38), this.doSelectItem());
                              case 38:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[5, 29]],
                      );
                    }),
                  );
                },
              },
              {
                key: "getItemDocumentUniqueModelIds",
                value: function (t, e) {
                  var n,
                    r = this,
                    i = new Set(),
                    o = function (t, e) {
                      return (
                        t &&
                        r.documents
                          .filter(function (n) {
                            return n.modelId === t && (!e || n.channelId === e);
                          })
                          .forEach(function (t) {
                            return (
                              i.has(t.modelUniqueId) || i.add(t.modelUniqueId)
                            );
                          })
                      );
                    };
                  if (t)
                    if (t.schDocId) {
                      if ((o(t.schDocId, t.channel), t.subParts)) {
                        var a,
                          c = Wt(t.subParts);
                        try {
                          for (c.s(); !(a = c.n()).done; ) o(a.value.schDocId);
                        } catch (t) {
                          c.e(t);
                        } finally {
                          c.f();
                        }
                      }
                    } else if (t.primitives) {
                      var u,
                        s = It.q.instance.primitives,
                        l = Wt(t.primitives);
                      try {
                        for (l.s(); !(u = l.n()).done; ) {
                          var h = s[u.value];
                          h && o(h.schDocId);
                        }
                      } catch (t) {
                        l.e(t);
                      } finally {
                        l.f();
                      }
                    }
                  var f = void 0;
                  if (t.nameInChannel && this.activeDocumentIndex >= 0) {
                    var d = this.allDocuments[this.activeDocumentIndex];
                    It.q.instance.isChannelNet(
                      null == d ? void 0 : d.channelId,
                      t.name,
                    ) && (f = null == d ? void 0 : d.modelUniqueId);
                  }
                  (!f &&
                    t.channel &&
                    (f =
                      null ===
                        (n = this.documents.find(function (e) {
                          return e.channelId === t.channel;
                        })) || void 0 === n
                        ? void 0
                        : n.modelUniqueId),
                    (e = null != f ? f : e));
                  var m = "";
                  if (
                    i.size > 0 &&
                    ((m = e),
                    this.documents.find(function (t) {
                      return t.modelUniqueId === m;
                    }) || (m = ""),
                    !m &&
                      (this.activeDocumentIndex > -1 &&
                        (m =
                          this.documents[this.activeDocumentIndex]
                            .modelUniqueId),
                      !i.has(m)))
                  ) {
                    var v = Ut(i, 1)[0];
                    m = v;
                  }
                  return { ids: Array.from(i.keys()), id: m };
                },
              },
              {
                key: "doSelectItem",
                value: function () {
                  var t = this;
                  return new Promise(function (e) {
                    setTimeout(function () {
                      r.QY.bus.emit("SchEngine:clearHighlight");
                      var n = t.selectedItem
                        ? Array.isArray(t.selectedItem)
                          ? t.selectedItem
                          : [t.selectedItem]
                        : [];
                      if (n.length) {
                        var i = Ut(n, 1)[0],
                          o = [],
                          a = function (e) {
                            e.primitives &&
                              (o = o.concat(
                                e.primitives
                                  .map(function (t) {
                                    return It.q.instance.primitives[t];
                                  })
                                  .filter(function (e) {
                                    return t.selectionService.canSelect(e);
                                  }),
                              ));
                          };
                        (n.forEach(function (t) {
                          t &&
                            (t.selectedPrimitive
                              ? o.push(t.selectedPrimitive)
                              : "component" === t.name || "block" === t.name
                                ? o.push(t.native)
                                : "net" === t.name &&
                                  (a(t.native),
                                  t.native.entries &&
                                    t.native.entries.forEach(function (t) {
                                      return a(It.q.instance.nets[t]);
                                    })));
                        }),
                          o.length > 0
                            ? (r.QY.bus.emit("SchEngine:clearSelection", {
                                update: !1,
                              }),
                              setTimeout(function () {
                                var e =
                                  t.documents[t.currentDocumentIndex]
                                    .modelUniqueId;
                                (r.QY.bus.emit("SchEngine:drawSelection", {
                                  items: o,
                                  fit: i.fit && !i.openedDocIds[e],
                                }),
                                  (i.openedDocIds[e] = !0));
                              }, 0))
                            : r.QY.bus.emit("SchEngine:clearSelection", {
                                update: !1,
                              }));
                      } else
                        r.QY.bus.emit("SchEngine:clearSelection", {
                          update: !1,
                        });
                      e();
                    }, 0);
                  });
                },
              },
            ]),
            e && Xt(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        ne = {
          type: "Engine",
          name: "SchEngineModule",
          description: "Presents schematic documents engine module",
          create: function () {
            return new ee();
          },
        };
      window.__CORE__ && window.__CORE__.addModule(ne);
    },
  },
  (t) => {
    (t.O(0, [21759], () => t((t.s = 75072))), t.O());
  },
]);
