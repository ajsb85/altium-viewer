/*! For license information please see Measurement.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [60780],
  {
    77719: (e, t, n) => {
      var r = n(66675),
        o = n(41497),
        i = n(22021),
        a = n(15832),
        s = n(19577),
        c = n(49235),
        u = n(31564),
        l = n(71094),
        h = n(12743),
        f = "canceled",
        d = "calculate",
        p = new h.C(f),
        m = new h.C(d),
        v = {};
      function y(e) {
        return (
          (y =
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
          y(e)
        );
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, b(r.key), r));
        }
      }
      function b(e) {
        var t = (function (e, t) {
          if ("object" != y(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != y(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == y(t) ? t : t + "";
      }
      ((v.IDLE = [
        {
          to: "IDLE",
          where: function (e) {
            return ["mousemove" === e.type];
          },
          extend: function (e) {
            return (e.transitionType = "MOVE");
          },
        },
        {
          to: "IDLE",
          where: function (e) {
            return ["mouseleave" === e.type];
          },
          extend: function (e) {
            return (e.transitionType = "LEAVE");
          },
        },
        {
          to: "CAPTURED",
          where: function (e) {
            return ["mousedown" === e.type, 0 === e.button || 2 === e.button];
          },
        },
        {
          to: "PAN",
          where: function (e) {
            return ["mouseenter" === e.type, 0 !== e.buttons];
          },
        },
        {
          to: "WILL_MEASURE",
          where: function (e) {
            var t;
            return [
              "touchstart" === e.type,
              1 ==
                (null === (t = e.touches) || void 0 === t ? void 0 : t.length),
            ];
          },
        },
        {
          to: "WILL_MEASURE",
          where: function (e) {
            var t;
            return [
              "touchend" === e.type,
              1 ==
                (null === (t = e.touches) || void 0 === t ? void 0 : t.length),
            ];
          },
        },
      ]),
        (v.CAPTURED = [
          {
            to: "IDLE",
            where: function (e) {
              return ["mouseup" === e.type, 2 === e.button, 0 === e.buttons];
            },
          },
          {
            to: "WILL_MEASURE",
            where: function (e) {
              return ["mouseup" === e.type, 0 === e.button, 0 === e.buttons];
            },
          },
          {
            to: "PAN",
            where: function (e) {
              return ["mousemove" === e.type];
            },
          },
        ]),
        (v.WILL_MEASURE = [
          {
            to: "MEASURING",
            where: function (e) {
              return ["mousemove" === e.type];
            },
          },
          {
            to: "MEASURING_CAPTURED",
            where: function (e) {
              return ["mousedown" === e.type, 0 === e.button || 2 === e.button];
            },
          },
          {
            to: "MEASURING",
            where: function (e) {
              return ["touchmove" === e.type];
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["touchend" === e.type];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["touchstart" === e.type];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return [e.type === f];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
        ]),
        (v.MEASURING_CAPTURED = [
          {
            to: "MEASURING_PAN",
            where: function (e) {
              return ["mousemove" === e.type];
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["mouseup" === e.type, 2 === e.button, 0 === e.buttons];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
          {
            to: "CALCULATE",
            where: function (e) {
              return ["mouseup" === e.type, 0 === e.button, 0 === e.buttons];
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return [e.type === f];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
        ]),
        (v.CALCULATE = [
          {
            to: "IDLE",
            where: function (e) {
              return [e.type === d];
            },
            extend: function (e) {
              return (e.transitionType = "DID_MEASURE");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return [e.type === f];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
        ]),
        (v.MEASURING = [
          {
            to: "MEASURING",
            where: function (e) {
              return ["mousemove" === e.type];
            },
          },
          {
            to: "MEASURING_LEAVE_WORKSPACE",
            where: function (e) {
              return ["mouseleave" === e.type];
            },
          },
          {
            to: "MEASURING_CAPTURED",
            where: function (e) {
              return ["mousedown" === e.type, 0 === e.button || 2 === e.button];
            },
          },
          {
            to: "MEASURING",
            where: function (e) {
              return ["wheel" === e.type];
            },
            extend: function (e) {
              return (e.transitionType = "ZOOM");
            },
          },
          {
            to: "MEASURING",
            where: function (e) {
              return ["touchmove" === e.type];
            },
          },
          {
            to: "CALCULATE",
            where: function (e) {
              return ["touchend" === e.type];
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return [e.type === f];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
        ]),
        (v.MEASURING_LEAVE_WORKSPACE = [
          {
            to: "MEASURING",
            where: function (e) {
              return ["mouseenter" === e.type, 0 === e.buttons];
            },
          },
          {
            to: "MEASURING_PAN",
            where: function (e) {
              return ["mouseenter" === e.type, 0 !== e.buttons];
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return [e.type === f];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
        ]),
        (v.MEASURING_PAN = [
          {
            to: "MEASURING_PAN",
            where: function (e) {
              return ["mousemove" === e.type];
            },
            extend: function (e) {
              return (e.transitionType = "PAN");
            },
          },
          {
            to: "MEASURING",
            where: function (e) {
              return ["mouseup" === e.type, 0 === e.buttons];
            },
            extend: function (e) {
              return (e.transitionType = "PAN");
            },
          },
          {
            to: "MEASURING_LEAVE_WORKSPACE",
            where: function (e) {
              return ["mouseleave" === e.type];
            },
            extend: function (e) {
              return (e.transitionType = "PAN");
            },
          },
          {
            to: "PAN",
            where: function (e) {
              return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
          {
            to: "PAN",
            where: function (e) {
              return [e.type === f];
            },
            extend: function (e) {
              return (e.transitionType = "CANCELED");
            },
          },
        ]),
        (v.PAN = [
          {
            to: "PAN",
            where: function (e) {
              return ["mousemove" === e.type];
            },
            extend: function (e) {
              return (e.transitionType = "PAN");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["mouseup" === e.type, 0 === e.buttons];
            },
            extend: function (e) {
              return (e.transitionType = "PAN");
            },
          },
          {
            to: "IDLE",
            where: function (e) {
              return ["mouseleave" === e.type];
            },
            extend: function (e) {
              return (e.transitionType = "PAN");
            },
          },
        ]));
      var w,
        E = (function () {
          return (
            (e = function e(t, n, r, o) {
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.mode = r),
                (this.boardOrigin = o),
                (this.from = t.slice()),
                (this.to = t.slice()),
                (this.unitName = n));
            }),
            (t = [
              {
                key: "from",
                get: function () {
                  return this._from;
                },
                set: function (e) {
                  this._from = this.createItemPointProxy(e);
                },
              },
              {
                key: "fromObject",
                get: function () {
                  return this._fromObject;
                },
                set: function (e) {
                  ((this.fromObjectId = e.primitive.pcbId),
                    (this._fromObject = e),
                    this.translateObjectCoordinates(this._fromObject));
                },
              },
              {
                key: "to",
                get: function () {
                  return this._to;
                },
                set: function (e) {
                  this._to = this.createItemPointProxy(e);
                },
              },
              {
                key: "toObject",
                get: function () {
                  return this._toObject;
                },
                set: function (e) {
                  ((this.toObjectId = e.primitive.pcbId),
                    (this._toObject = e),
                    this.translateObjectCoordinates(this._toObject));
                },
              },
              {
                key: "unitName",
                get: function () {
                  return this._unitName;
                },
                set: function (e) {
                  ((this._unitName = e), this.onMeasurementItemChanged());
                },
              },
              {
                key: "toAppModel",
                value: function () {
                  return (
                    void 0 === this._measurementItem &&
                      (this._measurementItem = {}),
                    (this._measurementItem.id = this.id),
                    (this._measurementItem.mode = this.mode),
                    (this._measurementItem.from = this.getPointCoordinates(
                      this.from,
                    )),
                    (this._measurementItem.fromObject = this.fromObject),
                    (this._measurementItem.fromObjectId = this.fromObjectId),
                    (this._measurementItem.to = this.getPointCoordinates(
                      this.to,
                    )),
                    (this._measurementItem.toObject = this.toObject),
                    (this._measurementItem.toObjectId = this.toObjectId),
                    (this._measurementItem.unitName = this.unitName),
                    (this._measurementItem.unitMult = this.unitMult),
                    (this._measurementItem.x = this.x),
                    (this._measurementItem.y = this.y),
                    (this._measurementItem.xy = this.xy),
                    this._measurementItem
                  );
                },
              },
              {
                key: "createItemPointProxy",
                value: function (e) {
                  var t = this;
                  return new Proxy(e, {
                    set: function (e, n, r) {
                      var o = e[n] !== r,
                        i = Reflect.set(e, n, r);
                      return (o && t.onMeasurementItemChanged(), i);
                    },
                  });
                },
              },
              {
                key: "onMeasurementItemChanged",
                value: function () {
                  var e = "mil" === this.unitName ? 100 : 2.54;
                  ((this.unitMult = e),
                    (this.x = e * Math.abs(this.from[0] - this.to[0])),
                    (this.y = e * Math.abs(this.from[1] - this.to[1])),
                    (this.xy =
                      e *
                      Math.sqrt(
                        Math.pow(this.from[0] - this.to[0], 2) +
                          Math.pow(this.from[1] - this.to[1], 2),
                      )));
                },
              },
              {
                key: "translateObjectCoordinates",
                value: function (e) {
                  if (e.coordinates) {
                    var t = e.coordinates;
                    (void 0 !== t.x && (t.x = t.x - this.boardOrigin[0]),
                      void 0 !== t.y && (t.y = t.y - this.boardOrigin[1]),
                      void 0 !== t.x1 && (t.x1 = t.x1 - this.boardOrigin[0]),
                      void 0 !== t.y1 && (t.y1 = t.y1 - this.boardOrigin[1]));
                  }
                },
              },
              {
                key: "getPointCoordinates",
                value: function (e) {
                  var t = this;
                  return this.boardOrigin.every(function (e) {
                    return 0 === e;
                  })
                    ? e
                    : e.slice().map(function (e, n) {
                        return e - t.boardOrigin[n];
                      });
                },
              },
            ]),
            t && g(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        P = n(31444),
        C = n(32699),
        O = n(70315);
      !(function (e) {
        ((e[(e.Free = 0)] = "Free"),
          (e[(e.PointToPoint = 1)] = "PointToPoint"),
          (e[(e.ObjectToObject = 2)] = "ObjectToObject"));
      })(w || (w = {}));
      const I = w;
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
      function L() {
        L = function () {
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
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
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
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            a = Object.create(i.prototype),
            s = new A(r || []);
          return (o(a, "_invoke", { value: M(e, n, s) }), a);
        }
        function h(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function b() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          P = E && E(E(x([])));
        P && P !== n && r.call(P, a) && (w = P);
        var C = (b.prototype = y.prototype = Object.create(w));
        function O(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function I(e, t) {
          function n(o, i, a, s) {
            var c = h(e[o], e, i);
            if ("throw" !== c.type) {
              var u = c.arg,
                l = u.value;
              return l && "object" == _(l) && r.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((u.value = e), a(u));
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    },
                  );
            }
            s(c.arg);
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
        function M(t, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = j(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var u = h(t, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? m : d), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = m), (r.method = "throw"), (r.arg = u.arg));
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
          var i = h(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"),
              (n.arg = i.arg),
              (n.delegate = null),
              v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function k(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function S(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function A(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(k, this),
            this.reset(!0));
        }
        function x(t) {
          if (t || "" === t) {
            var n = t[a];
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
          throw new TypeError(_(t) + " is not iterable");
        }
        return (
          (g.prototype = b),
          o(C, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = u(b, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === g || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(C)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          O(I.prototype),
          u(I.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = I),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new I(l(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          O(C),
          u(C, c, "Generator"),
          u(C, a, function () {
            return this;
          }),
          u(C, "toString", function () {
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
          (t.values = x),
          (A.prototype = {
            constructor: A,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(S),
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
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
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
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
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
                  return (this.complete(n.completion, n.afterLoc), S(n), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: x(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function M(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, j(r.key), r));
        }
      }
      function j(e) {
        var t = (function (e, t) {
          if ("object" != _(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != _(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == _(t) ? t : t + "";
      }
      var k = new Set([
          P.Zw.Arc,
          P.Zw.Pad,
          P.Zw.Via,
          P.Zw.Track,
          P.Zw.Poly,
          P.Zw.Region,
          P.Zw.Fill,
          P.Zw.EmbeddedBoard,
        ]),
        S = new Uint8Array([255, 255, 190, 190]),
        A = new Uint8Array([255, 255, 255, 110]),
        x = (function () {
          return (
            (e = function e(t, n, r) {
              var o,
                i = this;
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.scene = t),
                (this.metadataRepository = n),
                (this.layerIndex = r),
                (this.selectionPrimitives = new Array()),
                (this.selectionNodeItems = Array()),
                (this.highlighted = null),
                (this.highlightedNode = null),
                (this.renderHighlight = function (e) {
                  if (
                    (i.highlightedNode && i.scene.removeItem(i.highlightedNode),
                    e)
                  ) {
                    var t = i.mainScene.getNodeItemById(e.pcbId);
                    t &&
                      (i.highlightedNode = i.mainScene.cloneNodeItemToLayer(
                        t,
                        i.layerIndex,
                        i.highlightMaterial,
                        0,
                        i.scene,
                      ));
                  }
                  i.scene.setDirty(!0);
                }),
                (this.renderSelection = function (e) {
                  (i.selectionNodeItems.forEach(function (e) {
                    return i.scene.removeItem(e);
                  }),
                    e.forEach(function (e) {
                      var t = i.mainScene.getNodeItemById(e.pcbId);
                      if (t) {
                        var n = i.mainScene.cloneNodeItemToLayer(
                          t,
                          i.layerIndex,
                          i.selectionMaterial,
                          0,
                          i.scene,
                        );
                        n && i.selectionNodeItems.push(n);
                      }
                    }),
                    i.scene.setDirty(!0));
                }),
                (this.mainScene =
                  null !== (o = t.parentScene) && void 0 !== o ? o : t),
                (this.selectionMaterial = this.scene.addMaterial(
                  new C.Z(S, O.lc.None, !1, !1, !1),
                )),
                (this.highlightMaterial = this.scene.addMaterial(
                  new C.Z(A, O.lc.None, !1, !1, !1),
                )));
            }),
            (t = [
              {
                key: "highlight",
                value: function (e) {
                  var t,
                    n = this,
                    r = this.getPrimitiveByPos(e);
                  if (null !== r) {
                    if (
                      r.pcbId !==
                      (null === (t = this.highlighted) || void 0 === t
                        ? void 0
                        : t.pcbId)
                    )
                      return (
                        (this.highlighted = r),
                        this.scene.once("beforeRender", function () {
                          return n.renderHighlight(r);
                        }),
                        !0
                      );
                  } else if (this.highlighted)
                    return (
                      (this.highlighted = null),
                      this.scene.once("beforeRender", function () {
                        return n.renderHighlight(null);
                      }),
                      !0
                    );
                  return !1;
                },
              },
              {
                key: "select",
                value: function () {
                  var e = this;
                  return this.highlighted
                    ? (this.selectionPrimitives.push(this.highlighted),
                      this.scene.once("beforeRender", function () {
                        return e.renderSelection(e.selectionPrimitives);
                      }),
                      this.highlighted)
                    : null;
                },
              },
              {
                key: "selectMeasure",
                value: function (e) {
                  (this.clearSelection(),
                    null !== e &&
                      e.mode === I.ObjectToObject &&
                      (e.fromObject &&
                        this.selectionPrimitives.push(e.fromObject.primitive),
                      e.toObject &&
                        this.selectionPrimitives.push(e.toObject.primitive)));
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.clearHighlight(), this.clearSelection());
                },
              },
              {
                key: "clearSelection",
                value: function () {
                  var e = this;
                  (this.selectionPrimitives.splice(
                    0,
                    this.selectionPrimitives.length,
                  ),
                    this.scene.once("beforeRender", function () {
                      return e.renderSelection(e.selectionPrimitives);
                    }));
                },
              },
              {
                key: "clearHighlight",
                value: function () {
                  var e = this;
                  ((this.highlighted = null),
                    this.scene.once("beforeRender", function () {
                      return e.renderHighlight(e.highlighted);
                    }));
                },
              },
              {
                key: "distance",
                value: function (e, t) {
                  return (
                    (n = this),
                    (r = void 0),
                    (o = void 0),
                    (i = L().mark(function n() {
                      var r, o, i, a, s;
                      return L().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (
                                  ((n.prev = 0),
                                  (r = []),
                                  (o = e.pcbId),
                                  (i = t.pcbId),
                                  e.kind === P.Zw.EmbeddedBoard && r.push(o),
                                  t.kind === P.Zw.EmbeddedBoard && r.push(i),
                                  (a = {
                                    id1: o,
                                    id2: i,
                                    allLayersIds: r,
                                    result: {},
                                  }),
                                  window.__CORE__.bus.emit(
                                    "SupportLibrary:getOtoDistance",
                                    a,
                                  ),
                                  "Started" !== a.result.state)
                                ) {
                                  n.next = 14;
                                  break;
                                }
                                return (
                                  (n.next = 11),
                                  new Promise(function (e) {
                                    try {
                                      window.__CORE__.bus.on(
                                        "SupportLibrary:getOtoDistanceResult",
                                        function t(n) {
                                          n.pcbId1 === o &&
                                            n.pcbId2 === i &&
                                            (window.__CORE__.bus.off(
                                              "SupportLibrary:getOtoDistanceResult",
                                              t,
                                            ),
                                            e(n));
                                        },
                                      );
                                    } catch (t) {
                                      e({ state: "Failed" });
                                    }
                                  })
                                );
                              case 11:
                                if ("Completed" !== (s = n.sent).state) {
                                  n.next = 14;
                                  break;
                                }
                                return n.abrupt("return", {
                                  from: s.point1,
                                  to: s.point2,
                                });
                              case 14:
                                return n.abrupt("return", null);
                              case 17:
                                return (
                                  (n.prev = 17),
                                  (n.t0 = n.catch(0)),
                                  n.abrupt("return", null)
                                );
                              case 20:
                              case "end":
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[0, 17]],
                      );
                    })),
                    new (o || (o = Promise))(function (e, t) {
                      function a(e) {
                        try {
                          c(i.next(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function s(e) {
                        try {
                          c(i.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function c(t) {
                        var n;
                        t.done
                          ? e(t.value)
                          : ((n = t.value),
                            n instanceof o
                              ? n
                              : new o(function (e) {
                                  e(n);
                                })).then(a, s);
                      }
                      c((i = i.apply(n, r || [])).next());
                    })
                  );
                  var n, r, o, i;
                },
              },
              {
                key: "toObjectData",
                value: function (e) {
                  var t = this.metadataRepository;
                  return t
                    ? {
                        primitive: e,
                        name: this.getObjectName(e, t),
                        layerInfo: this.getLayerInfo(e, t),
                        fullName: this.getFormattedFullName(e),
                        coordinates: this.getCoordinates(e),
                      }
                    : { primitive: e, name: "" };
                },
              },
              {
                key: "getPrimitiveByPos",
                value: function (e) {
                  var t = this,
                    n = this.metadataRepository;
                  if (n) {
                    var r = this.mainScene
                      .getNodeItemsAtPoint(e, this.mainScene.renderOptions)
                      .map(function (e) {
                        return n.getPrimitiveById(e.GetId());
                      })
                      .filter(function (e) {
                        return e && k.has(n.getObjectId(e));
                      });
                    return (null == r ? void 0 : r.length)
                      ? (1 === r.length ||
                          r.sort(function (e, r) {
                            var o = n.getObjectId(e),
                              i = n.getObjectId(r);
                            return t.getSortValue(o) - t.getSortValue(i);
                          }),
                        r[0])
                      : null;
                  }
                  return null;
                },
              },
              {
                key: "getSortValue",
                value: function (e) {
                  var t = 1e4;
                  switch (e) {
                    case P.Zw.Via:
                      t = 100;
                      break;
                    case P.Zw.Pad:
                      t = 200;
                      break;
                    case P.Zw.Track:
                      t = 300;
                      break;
                    case P.Zw.Arc:
                      t = 400;
                      break;
                    case P.Zw.Fill:
                      t = 500;
                      break;
                    case P.Zw.Region:
                      t = 600;
                      break;
                    case P.Zw.Poly:
                      t = 700;
                      break;
                    default:
                      t = 999;
                  }
                  return t;
                },
              },
              {
                key: "getObjectName",
                value: function (e, t) {
                  switch (t.getObjectId(e)) {
                    case P.Zw.Via:
                      return "Via";
                    case P.Zw.Pad:
                      return "Pad";
                    case P.Zw.Track:
                      return "Track";
                    case P.Zw.Arc:
                      return "Arc";
                    case P.Zw.Fill:
                      return "Fill";
                    case P.Zw.Region:
                      return "Region";
                    case P.Zw.Poly:
                      return "Polygon";
                    case P.Zw.EmbeddedBoard:
                      return "Embedded Board Array";
                    default:
                      return "Object";
                  }
                },
              },
              {
                key: "getLayerInfo",
                value: function (e, t) {
                  var n = t.getDocumentLayers(),
                    r = function (e) {
                      var t, r;
                      return null !==
                        (r =
                          null ===
                            (t = n.find(function (t) {
                              return t.id === e;
                            })) || void 0 === t
                            ? void 0
                            : t.name) && void 0 !== r
                        ? r
                        : "";
                    },
                    o = e,
                    i = e;
                  return "number" == typeof i.startLayer
                    ? { from: r(i.startLayer), to: r(i.stopLayer) }
                    : { on: r(o.layerId) };
                },
              },
              {
                key: "getFormattedFullName",
                value: function (e) {
                  var t = e.fullName;
                  if (void 0 !== t) {
                    var n = t.split("(");
                    return n.length && 1 === n.length ? t : n[0].split(" ")[1];
                  }
                  return "";
                },
              },
              {
                key: "getCoordinates",
                value: function (e) {
                  var t = e.x,
                    n = e.y,
                    r = e.x1,
                    o = e.y1,
                    i = 1e6;
                  return {
                    x: void 0 === t ? void 0 : t / i,
                    y: void 0 === n ? void 0 : n / i,
                    x1: void 0 === r ? void 0 : r / i,
                    y1: void 0 === o ? void 0 : o / i,
                  };
                },
              },
            ]),
            t && M(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })(),
        T = n(65345);
      function N(e) {
        return (
          (N =
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
          N(e)
        );
      }
      function R() {
        R = function () {
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
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
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
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            a = Object.create(i.prototype),
            s = new k(r || []);
          return (o(a, "_invoke", { value: _(e, n, s) }), a);
        }
        function h(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = l;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function b() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          P = E && E(E(S([])));
        P && P !== n && r.call(P, a) && (w = P);
        var C = (b.prototype = y.prototype = Object.create(w));
        function O(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function I(e, t) {
          function n(o, i, a, s) {
            var c = h(e[o], e, i);
            if ("throw" !== c.type) {
              var u = c.arg,
                l = u.value;
              return l && "object" == N(l) && r.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    },
                  )
                : t.resolve(l).then(
                    function (e) {
                      ((u.value = e), a(u));
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    },
                  );
            }
            s(c.arg);
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
        function _(t, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = L(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var u = h(t, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? m : d), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = m), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function L(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                L(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var i = h(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"),
              (n.arg = i.arg),
              (n.delegate = null),
              v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function M(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function j(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function k(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(M, this),
            this.reset(!0));
        }
        function S(t) {
          if (t || "" === t) {
            var n = t[a];
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
          throw new TypeError(N(t) + " is not iterable");
        }
        return (
          (g.prototype = b),
          o(C, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = u(b, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === g || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(C)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          O(I.prototype),
          u(I.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = I),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new I(l(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          O(C),
          u(C, c, "Generator"),
          u(C, a, function () {
            return this;
          }),
          u(C, "toString", function () {
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
          (t.values = S),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(j),
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
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
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
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
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
                  return (this.complete(n.completion, n.afterLoc), j(n), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    j(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: S(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function D(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, F(r.key), r));
        }
      }
      function F(e) {
        var t = (function (e, t) {
          if ("object" != N(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != N(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == N(t) ? t : t + "";
      }
      function U(e, t, n) {
        return (
          (t = Z(t)),
          (function (e, t) {
            if (t && ("object" == N(t) || "function" == typeof t)) return t;
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
            G()
              ? Reflect.construct(t, n || [], Z(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function G() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (G = function () {
          return !!e;
        })();
      }
      function Z(e) {
        return (
          (Z = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Z(e)
        );
      }
      function V(e, t) {
        return (
          (V = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          V(e, t)
        );
      }
      var H = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        B = [
          "mousewheel",
          "mousedown",
          "mouseup",
          "mousemove",
          "mouseleave",
          "mouseenter",
          "touchstart",
          "touchmove",
          "touchend",
          "click",
          "dblclick",
        ],
        W = ["keydown", "keyup"],
        Y = (function (e) {
          function t(e, n, r, o) {
            var i;
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              ((i = U(this, t)).activeMode = o),
              (i.logger = window.__CORE__.createLogger(
                "Measurement:Controller",
              )),
              (i._measurementItem = void 0),
              (i.offset = { left: 0, top: 0 }),
              (i.clientPoint = [0, 0, 0]),
              (i.unitName = ""),
              (i.invalidate = function () {}),
              (i.snappingPoint = {
                scenePoint: [0, 0, 0],
                cursor: u.E.Cross,
                snapped: !1,
              }),
              (i.snappingCancellationToken = void 0),
              (i.dispatchEventToFsm = function (e) {
                e.target === i.svgOverlay &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousewheel" === e.type ? i.zoom(e) : i.fsm.dispatch(e));
              }),
              (i.onIdle = function (e) {
                try {
                  switch (e.transitionType) {
                    case "MOVE":
                      i.onMove(e);
                      break;
                    case "CANCELED":
                      i.onCancel();
                      break;
                    case "DID_MEASURE":
                      i.onDidMeasure();
                      break;
                    case "PAN":
                      var t = i.setClientPoint(e);
                      i.pcbRenderer.pan(t[0], t[1], c.b.End);
                      break;
                    case "LEAVE":
                      i.otoController.clearHighlight();
                  }
                } catch (e) {
                  i.logger.LogError("Handle IDLE state error.", e);
                }
              }),
              (i.onWillMeasure = function (e) {
                try {
                  switch (((i.measurementItem = void 0), i.activeMode)) {
                    case I.Free:
                      i.measurementItem = i.willFreeModeMeasure(e);
                      break;
                    case I.PointToPoint:
                      i.measurementItem = i.willPointModeMeasure();
                      break;
                    case I.ObjectToObject:
                      i.measurementItem = i.willObjectModeMeasure(e);
                  }
                  (i.invalidate(),
                    i.measurementItem &&
                      i.emit("willMeasure", i.measurementItem.toAppModel()));
                } catch (e) {
                  (i.logger.LogError("Handle WILL_MEASURE state error.", e),
                    i.fsm.dispatch(p));
                }
              }),
              (i.onMeasuring = function (e) {
                try {
                  if ("PAN" === e.transitionType) {
                    var t = i.setClientPoint(e);
                    i.pcbRenderer.pan(t[0], t[1], c.b.End);
                  } else {
                    switch (i.activeMode) {
                      case I.Free:
                        i.measuringFreeMode(e);
                        break;
                      case I.PointToPoint:
                        i.measuringPointMode(e);
                        break;
                      case I.ObjectToObject:
                        var n = i.setClientPoint(e),
                          r = i.renderer.screenPointToScene(n);
                        i.otoController.highlight(r);
                    }
                    i.invalidate();
                  }
                } catch (e) {
                  (i.logger.LogError("Handle MEASURING state error.", e),
                    i.fsm.dispatch(p));
                }
              }),
              (i.onCalculate = function (e) {
                return H(
                  i,
                  void 0,
                  void 0,
                  R().mark(function t() {
                    var n, r, o, i, a, s;
                    return R().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              ((t.prev = 0),
                                (t.t0 = this.activeMode),
                                (t.next =
                                  t.t0 === I.Free
                                    ? 4
                                    : t.t0 === I.PointToPoint
                                      ? 5
                                      : t.t0 === I.ObjectToObject
                                        ? 8
                                        : 21));
                              break;
                            case 4:
                              return t.abrupt("break", 21);
                            case 5:
                              return (
                                this.measurementItem &&
                                  (this.renderer.drawMeter(
                                    !1,
                                    this.measurementItem,
                                  ),
                                  this.invalidate()),
                                this.pointToPointModeMove(e),
                                t.abrupt("break", 21)
                              );
                            case 8:
                              if (
                                ((r = !0),
                                (o = this.measurementItem),
                                (i = this.otoController.select()),
                                (a =
                                  null ===
                                    (n = null == o ? void 0 : o.fromObject) ||
                                  void 0 === n
                                    ? void 0
                                    : n.primitive),
                                !(o && i && a && i.pcbId !== a.pcbId))
                              ) {
                                t.next = 18;
                                break;
                              }
                              return (
                                (o.toObject =
                                  this.otoController.toObjectData(i)),
                                (t.next = 16),
                                this.otoController.distance(i, a)
                              );
                            case 16:
                              (s = t.sent) &&
                                "CALCULATE" === this.fsm.getState() &&
                                ((r = !1),
                                this.measurementItem === o &&
                                  ((o.from[0] = s.from[0]),
                                  (o.from[1] = s.from[1]),
                                  (o.to[0] = s.to[0]),
                                  (o.to[1] = s.to[1]),
                                  this.renderer.drawMeter(
                                    !1,
                                    o,
                                    void 0,
                                    u.F.SquareCap,
                                  ),
                                  this.invalidate()));
                            case 18:
                              if (!r) {
                                t.next = 20;
                                break;
                              }
                              throw new Error("Calculation was cancelled.");
                            case 20:
                              return t.abrupt("break", 21);
                            case 21:
                              (this.fsm.dispatch(m), (t.next = 28));
                              break;
                            case 24:
                              ((t.prev = 24),
                                (t.t1 = t.catch(0)),
                                this.logger.LogError(
                                  "Handle CALCULATE state error.",
                                  t.t1,
                                ),
                                this.fsm.dispatch(p));
                            case 28:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 24]],
                    );
                  }),
                );
              }),
              (i.onPan = function (e) {
                try {
                  switch (e.transitionType) {
                    case "PAN":
                      var t = i.setClientPoint(e);
                      i.pcbRenderer.pan(t[0], t[1], c.b.None);
                      break;
                    case "CANCELED":
                      i.fsm.dispatch(p);
                      break;
                    default:
                      var n = "mouseenter" === e.type ? e : i.capturedMessage,
                        r = i.setClientPoint(n);
                      (i.pcbRenderer.pan(r[0], r[1], c.b.Begin),
                        (r = i.setClientPoint(e)),
                        i.pcbRenderer.pan(r[0], r[1], c.b.None));
                  }
                } catch (e) {
                  i.logger.LogError("Handle PAN state error.", e);
                }
              }),
              (i.onLeave = function (e) {
                try {
                  if ("PAN" === e.transitionType) {
                    var t = i.setClientPoint(e);
                    i.pcbRenderer.pan(t[0], t[1], c.b.End);
                  }
                } catch (e) {
                  i.logger.LogError("Handle LEAVE state error.", e);
                }
              }),
              (i.onCaptured = function (e) {
                i.capturedMessage = e;
              }),
              (i.onChangeUnit = function () {
                var e;
                ((i.unitName =
                  null !== (e = s.Z.get()) && void 0 !== e ? e : "mm"),
                  i.history.values().forEach(function (e) {
                    return (e.unitName = i.unitName);
                  }),
                  i.measurementItem &&
                    (i.measurementItem.unitName = i.unitName));
              }),
              (i.onChangeHistory = function () {
                i.emit("changeHistory", {
                  measurements: i.history.values().map(function (e) {
                    return e.toAppModel();
                  }),
                });
              }));
            var a = n.renderer;
            return (
              a
                ? ((i.documentId = n.id),
                  (i.boardOrigin = i.getBoardOrigin(n)),
                  (i.fsm = i.createFsm()),
                  (i.history = e.createHistory(n.id, 5)),
                  (i.pcbRenderer = a),
                  (i.scene = i.createOverlayScene(a.getScene2D())),
                  (i.svgOverlay = a.getSceneSvg()),
                  (i.renderer = e.createGraphiteSceneRenderer(
                    r,
                    i.scene,
                    a.getSceneSvg(),
                  )),
                  (i.invalidate = function () {
                    a.invalidate();
                  }),
                  (i.otoController = new x(i.scene, n.metadataRepository, 0)),
                  window.__CORE__.bus.on(
                    "HelpPanel:changeUnit",
                    i.onChangeUnit,
                  ),
                  i.onChangeUnit())
                : ((i.activate = function () {}),
                  (i.deactivate = function () {}),
                  (i.select = function () {}),
                  (i.setMode = function () {}),
                  (i.dispose = function () {})),
              i
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
                t && V(e, t));
            })(t, e),
            (n = t),
            (r = [
              {
                key: "measurementItem",
                get: function () {
                  return this._measurementItem;
                },
                set: function (e) {
                  ((this._measurementItem = e),
                    void 0 === e &&
                      (this.otoController.clearSelection(),
                      this.renderer.clearMeter(),
                      this.invalidate()));
                },
              },
              {
                key: "activate",
                value: function () {
                  (window.__CORE__.bus.emit("PcbEngine:highlight", null),
                    this.onChangeHistory(),
                    this.history.on("change", this.onChangeHistory),
                    this.renderer.on("change", this.invalidate),
                    this.renderer.activate(),
                    this.setRendererCursor(),
                    this.select(void 0, !1),
                    this.attachFsm());
                },
              },
              {
                key: "deactivate",
                value: function () {
                  (this.history.off("change", this.onChangeHistory),
                    this.fsm.dispatch(p),
                    (this.measurementItem = void 0),
                    this.otoController.clear(),
                    this.renderer.off("change", this.invalidate),
                    (this.renderer.systemCursor = u.E.Default),
                    this.renderer.deactivate(),
                    this.invalidate(),
                    this.dettachFsm());
                },
              },
              {
                key: "select",
                value: function (e, t) {
                  (this.fsm.dispatch(p),
                    (this.measurementItem =
                      void 0 === e
                        ? this.history.first()
                        : this.history.get(e)),
                    this.measurementItem &&
                      (this.renderer.drawMeter(
                        t,
                        this.measurementItem,
                        void 0,
                        this.measurementItem.mode === I.ObjectToObject
                          ? u.F.SquareCap
                          : void 0,
                      ),
                      this.otoController.selectMeasure(this.measurementItem),
                      this.emit(
                        "selectMeasure",
                        this.measurementItem.toAppModel(),
                      )),
                    this.invalidate());
                },
              },
              {
                key: "setMode",
                value: function (e) {
                  var t = "",
                    n = this.activeMode;
                  ((this.activeMode = e),
                    n !== this.activeMode &&
                      (this.fsm.dispatch(p),
                      this.setRendererCursor(),
                      n === I.ObjectToObject
                        ? this.otoController.clearHighlight()
                        : n === I.PointToPoint &&
                          ((t = "Off"),
                          window.__CORE__.bus.emit("Snapping:setOptions", {
                            enabled: !1,
                          }),
                          this.renderer.clearCursor()),
                      this.activeMode === I.PointToPoint &&
                        ((t = "On"),
                        window.__CORE__.bus.emit("Snapping:setOptions", {
                          enabled: !0,
                        })),
                      this.invalidate(),
                      t &&
                        window.__APP__.analytics.dispatchPanelsEvent(
                          "Measure",
                          { action: "Snapping.".concat(t) },
                        )));
                },
              },
              {
                key: "dispose",
                value: function () {
                  var e, t;
                  (this.deactivate(),
                    (this.invalidate = function () {}),
                    null === (e = this.renderer) || void 0 === e || e.dispose(),
                    null === (t = this.scene) || void 0 === t || t.dispose(),
                    this.removeAllListeners(),
                    window.__CORE__.bus.off(
                      "HelpPanel:changeUnit",
                      this.onChangeUnit,
                    ));
                },
              },
              {
                key: "getBoardOrigin",
                value: function (e) {
                  var t,
                    n = [0, 0],
                    r =
                      null === (t = e.metadataRepository) || void 0 === t
                        ? void 0
                        : t.getDocument();
                  return (
                    void 0 !== (null == r ? void 0 : r.originX) &&
                      (n[0] = r.originX / 1e6),
                    void 0 !== (null == r ? void 0 : r.originY) &&
                      (n[1] = r.originY / 1e6),
                    n
                  );
                },
              },
              {
                key: "createOverlayScene",
                value: function (e) {
                  var t = {
                    name: "Default_Measurement_Layer",
                    z_range: [-1, 1],
                    is_keepout: !1,
                    is_layer_marks: !1,
                    is_inverted: !1,
                    is_cutout: !1,
                    layer_type:
                      window.GraphiteResolverInstance.module.LayerType.Regular,
                    show3d: !1,
                  };
                  return e.createOverlayScene("Measurement_Scene", [t], []);
                },
              },
              {
                key: "createFsm",
                value: function () {
                  var e = new o.Z("IDLE", v);
                  return (
                    e.on("IDLE", this.onIdle),
                    e.on("WILL_MEASURE", this.onWillMeasure),
                    e.on("MEASURING", this.onMeasuring),
                    e.on("CALCULATE", this.onCalculate),
                    e.on("MEASURING_PAN", this.onPan),
                    e.on("PAN", this.onPan),
                    e.on("MEASURING_LEAVE_WORKSPACE", this.onLeave),
                    e.on("CAPTURED", this.onCaptured),
                    e.on("MEASURING_CAPTURED", this.onCaptured),
                    e
                  );
                },
              },
              {
                key: "attachFsm",
                value: function () {
                  var e = this;
                  (this.setOffset(this.svgOverlay),
                    B.forEach(function (t) {
                      return e.svgOverlay.addEventListener(
                        t,
                        e.dispatchEventToFsm,
                        !0,
                      );
                    }),
                    W.forEach(function (t) {
                      return document.addEventListener(t, e.dispatchEventToFsm);
                    }));
                },
              },
              {
                key: "dettachFsm",
                value: function () {
                  var e = this;
                  (B.forEach(function (t) {
                    return e.svgOverlay.removeEventListener(
                      t,
                      e.dispatchEventToFsm,
                      !0,
                    );
                  }),
                    W.forEach(function (t) {
                      return document.removeEventListener(
                        t,
                        e.dispatchEventToFsm,
                      );
                    }));
                },
              },
              {
                key: "zoom",
                value: function (e) {
                  var t = e.clientX,
                    n = e.clientY,
                    r = e.deltaY;
                  if (this.activeMode === I.PointToPoint) {
                    var o = this.renderer.scenePointToScreen(
                      this.snappingPoint.scenePoint,
                    );
                    ((t = o[0]), (n = o[1]));
                  }
                  this.pcbRenderer.zoom(t, n, r);
                },
              },
              {
                key: "setOffset",
                value: function (e) {
                  var t = document.body.getBoundingClientRect(),
                    n = e.getBoundingClientRect();
                  ((this.offset.left = n.left - t.left),
                    (this.offset.top = n.top - t.top));
                },
              },
              {
                key: "setClientPoint",
                value: function (e) {
                  var t,
                    n,
                    r,
                    o,
                    i = (0, T.Z)(
                      {
                        x:
                          (null ===
                            (n =
                              null === (t = e.touches) || void 0 === t
                                ? void 0
                                : t[0]) || void 0 === n
                            ? void 0
                            : n.clientX) || e.clientX,
                        y:
                          (null ===
                            (o =
                              null === (r = e.touches) || void 0 === r
                                ? void 0
                                : r[0]) || void 0 === o
                            ? void 0
                            : o.clientY) || e.clientY,
                      },
                      this.svgOverlay,
                    );
                  return (
                    (window.TouchEvent &&
                      e instanceof TouchEvent &&
                      e.touches.length > 0) ||
                    e instanceof MouseEvent
                      ? ((this.clientPoint[0] = i.x),
                        (this.clientPoint[1] = i.y))
                      : ((this.clientPoint[0] = 0), (this.clientPoint[1] = 0)),
                    this.clientPoint
                  );
                },
              },
              {
                key: "setSnappingPoint",
                value: function (e, t) {
                  return H(
                    this,
                    void 0,
                    void 0,
                    R().mark(function n() {
                      var r, o, i;
                      return R().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (r = function (e) {
                                    switch (e.object) {
                                      case l.V.trackVertices:
                                        return e.item == l.u.Center
                                          ? u.E.Triangle
                                          : u.E.Box;
                                      case l.V.polyObjects:
                                        return u.E.Box;
                                      case l.V.padCenters:
                                      case l.V.viaCenters:
                                        return u.E.Circle;
                                      default:
                                        return u.E.Cross;
                                    }
                                  }),
                                  this.snappingCancellationToken &&
                                    (this.snappingCancellationToken.isCancellationRequested =
                                      !0),
                                  (this.snappingCancellationToken = t),
                                  (n.next = 5),
                                  (0, a.Z)(100)
                                );
                              case 5:
                                if (!t.isCancellationRequested) {
                                  n.next = 7;
                                  break;
                                }
                                throw new Error("Cancelled");
                              case 7:
                                ((this.snappingCancellationToken = void 0),
                                  (o = this.renderer.screenPointToScene(e)),
                                  (i = { point: o, result: {} }),
                                  window.__CORE__.bus.emit(
                                    "Snapping:checkPoint",
                                    i,
                                  ),
                                  i.result
                                    ? ((this.snappingPoint.scenePoint[0] =
                                        i.result.point[0]),
                                      (this.snappingPoint.scenePoint[1] =
                                        i.result.point[1]),
                                      (this.snappingPoint.cursor = r(i.result)),
                                      (this.snappingPoint.snapped = !0))
                                    : ((this.snappingPoint.scenePoint[0] =
                                        o[0]),
                                      (this.snappingPoint.scenePoint[1] = o[1]),
                                      (this.snappingPoint.cursor = u.E.Cross),
                                      (this.snappingPoint.snapped = !1)));
                              case 12:
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
                key: "setRendererCursor",
                value: function () {
                  switch (this.activeMode) {
                    case I.Free:
                      this.renderer.systemCursor = u.E.Cross;
                      break;
                    case I.PointToPoint:
                      this.renderer.systemCursor = u.E.None;
                      break;
                    case I.ObjectToObject:
                      this.renderer.systemCursor = u.E.Box;
                  }
                },
              },
              {
                key: "willFreeModeMeasure",
                value: function (e) {
                  this.renderer.systemCursor = u.E.None;
                  var t = this.setClientPoint(e),
                    n = this.renderer.screenPointToScene(t),
                    r = new E(n, this.unitName, I.Free, this.boardOrigin);
                  return (
                    this.renderer.hideProjections(),
                    this.renderer.drawMeter(!1, r),
                    r
                  );
                },
              },
              {
                key: "willPointModeMeasure",
                value: function () {
                  ((this.renderer.systemCursor = u.E.None),
                    this.renderer.clearCursor());
                  var e = new E(
                    this.snappingPoint.scenePoint.slice(),
                    this.unitName,
                    I.PointToPoint,
                    this.boardOrigin,
                  );
                  return (
                    this.renderer.hideProjections(),
                    this.renderer.drawMeter(!1, e),
                    e
                  );
                },
              },
              {
                key: "willObjectModeMeasure",
                value: function (e) {
                  var t = this.otoController.select();
                  if (null !== t) {
                    var n = this.setClientPoint(e),
                      r = this.renderer.screenPointToScene(n),
                      o = new E(
                        r,
                        this.unitName,
                        I.ObjectToObject,
                        this.boardOrigin,
                      );
                    return (
                      (o.fromObject = this.otoController.toObjectData(t)),
                      this.renderer.hideProjections(),
                      o
                    );
                  }
                  this.fsm.dispatch(p);
                },
              },
              {
                key: "measuringFreeMode",
                value: function (e) {
                  if (this.measurementItem) {
                    var t = this.setClientPoint(e),
                      n = this.renderer.screenPointToScene(t);
                    ((this.measurementItem.to[0] = n[0]),
                      (this.measurementItem.to[1] = n[1]),
                      this.renderer.drawMeter(!1, this.measurementItem));
                  }
                },
              },
              {
                key: "measuringPointMode",
                value: function (e) {
                  var t = this;
                  if (this.measurementItem) {
                    var n = this.measurementItem,
                      r = this.setClientPoint(e),
                      o = new i.Z();
                    this.setSnappingPoint(r, o)
                      .then(function () {
                        t.snappingPoint.snapped &&
                          ((n.to[0] = t.snappingPoint.scenePoint[0]),
                          (n.to[1] = t.snappingPoint.scenePoint[1]),
                          t.renderer.drawMeter(!1, n, t.snappingPoint.cursor),
                          t.invalidate());
                      })
                      .catch(function (e) {
                        o.isCancellationRequested ||
                          t.logger.LogError(
                            "Calculate snapping point error.",
                            e,
                          );
                      });
                    var a = this.renderer.screenPointToScene(r);
                    ((n.to[0] = a[0]),
                      (n.to[1] = a[1]),
                      this.renderer.drawMeter(!1, n));
                  }
                },
              },
              {
                key: "pointToPointModeMove",
                value: function (e) {
                  var t = this,
                    n = this.setClientPoint(e),
                    r = new i.Z();
                  this.setSnappingPoint(n, r)
                    .then(function () {
                      t.snappingPoint.snapped &&
                        (t.renderer.drawCursor(
                          t.snappingPoint.scenePoint,
                          t.snappingPoint.cursor,
                        ),
                        t.invalidate());
                    })
                    .catch(function (e) {
                      r.isCancellationRequested ||
                        t.logger.LogError("Calculate snapping point error.", e);
                    });
                  var o = this.renderer.screenPointToScene(n);
                  (this.renderer.drawCursor(o, u.E.Cross), this.invalidate());
                },
              },
              {
                key: "onMove",
                value: function (e) {
                  if (this.activeMode === I.PointToPoint)
                    this.pointToPointModeMove(e);
                  else if (this.activeMode === I.ObjectToObject) {
                    var t = this.setClientPoint(e),
                      n = this.renderer.screenPointToScene(t);
                    (this.otoController.highlight(n), this.invalidate());
                  }
                },
              },
              {
                key: "onCancel",
                value: function () {
                  ((this.measurementItem = void 0),
                    this.setRendererCursor(),
                    this.emit("cancelMeasure"));
                },
              },
              {
                key: "onDidMeasure",
                value: function () {
                  (this.setRendererCursor(),
                    this.measurementItem &&
                      (this.history.set(this.measurementItem)
                        ? this.emit(
                            "didMeasure",
                            this.measurementItem.toAppModel(),
                          )
                        : (this.measurementItem = void 0)));
                },
              },
            ]),
            r && D(n.prototype, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, r;
        })(r.Z);
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
      function z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, X(r.key), r));
        }
      }
      function X(e) {
        var t = (function (e, t) {
          if ("object" != q(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != q(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == q(t) ? t : t + "";
      }
      function K() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (K = function () {
          return !!e;
        })();
      }
      function J(e) {
        return (
          (J = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          J(e)
        );
      }
      function Q(e, t) {
        return (
          (Q = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return ((e.__proto__ = t), e);
              }),
          Q(e, t)
        );
      }
      var $ = window.__APP__,
        ee = $.analytics,
        te = $.utils.getIcon,
        ne = $.parentEvents,
        re = $.createModule,
        oe = $.eventAttachHelper,
        ie = window.__APP__.library.i18n.t;
      function ae(e, t) {
        var n = ne.as(),
          r = (function (e) {
            function r() {
              var e;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r),
                ((e = (function (e, t, n) {
                  return (
                    (t = J(t)),
                    (function (e, t) {
                      if (t && ("object" == q(t) || "function" == typeof t))
                        return t;
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
                      K()
                        ? Reflect.construct(t, n || [], J(e).constructor)
                        : t.apply(e, n),
                    )
                  );
                })(this, r, arguments))._disabled = !0),
                (e.meterController = void 0),
                (e.logger = window.__CORE__.createLogger("Measurement")),
                (e.onWillMeasure = function (t) {
                  (e.clearCurrent(),
                    e.app.setItem(t, 0),
                    ee.dispatchPanelsEvent("Measure", {
                      action:
                        t.mode === I.ObjectToObject
                          ? "Object.First"
                          : "Point.First",
                    }));
                }),
                (e.onDidMeasure = function (t) {
                  (e.app.setItem(t, 1),
                    e.app.setResult(t),
                    ee.dispatchPanelsEvent("Measure", {
                      action:
                        t.mode === I.ObjectToObject
                          ? "Object.Second"
                          : "Point.Second",
                    }));
                }),
                (e.onSelectMeasure = function (t) {
                  (e.clearCurrent(),
                    e.app.setItem(t, 0),
                    e.app.setItem(t, 1),
                    e.app.setResult(t));
                }),
                (e.onCancelMeasure = function () {
                  return e.clearCurrent();
                }),
                (e.onChangeHistory = function (t) {
                  e.app.setHistory(t.measurements);
                }),
                (e.onSelect = function (t) {
                  var n;
                  null === (n = e.meterController) ||
                    void 0 === n ||
                    n.select(null == t ? void 0 : t.id, !0);
                }),
                (e.onChangeMode = function (t) {
                  var n;
                  null === (n = e.meterController) ||
                    void 0 === n ||
                    n.setMode(t.id);
                }),
                (e.onConvertItem = function (t) {
                  if (t) {
                    var n = t.converted,
                      r = t.index,
                      o = t.item;
                    n &&
                      (null == o ? void 0 : o.mode) === I.ObjectToObject &&
                      e.convertObjectAppItem(r, o, n);
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
                  t && Q(e, t));
              })(r, e),
              (o = r),
              (i = [
                {
                  key: "disabled",
                  get: function () {
                    return this._disabled;
                  },
                  set: function (e) {
                    e !== this._disabled &&
                      ((this._disabled = e),
                      t.bus.emit("Measurement:updateInterface", {
                        disabled: this.disabled,
                      }),
                      n.emit(
                        "project:pcbView:measurement:paused",
                        this._disabled,
                      ));
                  },
                },
                {
                  key: "setup",
                  value: function () {
                    var e = this;
                    return (
                      (this.app = t.engines.Measurement.createApp([
                        { id: I.Free, name: "Free", isActive: !0 },
                        {
                          id: I.PointToPoint,
                          name: "Point to Point",
                          isActive: !1,
                        },
                        {
                          id: I.ObjectToObject,
                          name: "Object to Object",
                          isActive: !1,
                        },
                      ])),
                      this.app.on("select", this.onSelect),
                      this.app.on("changeMode", this.onChangeMode),
                      this.app.on("convertItem", this.onConvertItem),
                      this.app.setEnabledModes(
                        Object.keys(t.plugins).includes("Snapping")
                          ? [I.Free, I.PointToPoint, I.ObjectToObject]
                          : [I.Free, I.ObjectToObject],
                      ),
                      t.bus.on("PcbEngine:documentShowing", function (t) {
                        e.meterController &&
                          e.meterController.documentId !== t.id &&
                          ((e.disabled = !0),
                          e.meterController.dispose(),
                          (e.meterController = void 0),
                          e.clearCurrent(),
                          e.app.setHistory([]));
                      }),
                      t.bus.on("PcbEngine:documentShown", function (n, r) {
                        var o;
                        if (
                          void 0 === e.meterController &&
                          void 0 === r &&
                          !n.errorState &&
                          (null === (o = n.renderer) || void 0 === o
                            ? void 0
                            : o.getScene2D())
                        )
                          try {
                            ((e.meterController = e.createController(t, n)),
                              e.meterController.on(
                                "willMeasure",
                                e.onWillMeasure,
                              ),
                              e.meterController.on(
                                "didMeasure",
                                e.onDidMeasure,
                              ),
                              e.meterController.on(
                                "selectMeasure",
                                e.onSelectMeasure,
                              ),
                              e.meterController.on(
                                "cancelMeasure",
                                e.onCancelMeasure,
                              ),
                              e.meterController.on(
                                "changeHistory",
                                e.onChangeHistory,
                              ),
                              (e.disabled = !1),
                              e.active && e.meterController.activate());
                          } catch (r) {
                            e.logger.LogError("Initilize controller error.", r);
                          }
                      }),
                      this.initPublicApi(),
                      Promise.resolve()
                    );
                  },
                },
                {
                  key: "activateInternal",
                  value: function () {
                    var e;
                    (!this.app.initialized && this.app.init(this.metaInfo.name),
                      null === (e = this.meterController) ||
                        void 0 === e ||
                        e.activate(),
                      n.emit("project:pcbView:measurement:activated"));
                  },
                },
                {
                  key: "deactivateInternal",
                  value: function () {
                    var e;
                    (n.emit("project:pcbView:measurement:deactivated"),
                      null === (e = this.meterController) ||
                        void 0 === e ||
                        e.deactivate(),
                      this.clearCurrent());
                  },
                },
                {
                  key: "initPublicApi",
                  value: function () {
                    var e,
                      r,
                      o,
                      i = this,
                      a =
                        null !==
                          (r =
                            null === (e = this.metaInfo.owner) || void 0 === e
                              ? void 0
                              : e.split(",")) && void 0 !== r
                          ? r
                          : [],
                      s = !1;
                    (oe.onViewActivate(function (e) {
                      var r = e.name,
                        c = o;
                      a.includes(r)
                        ? (o = !0) !== c &&
                          (n.emit("project:pcbView:measurement:enabled"),
                          s && t.bus.emit("Measurement:enable"),
                          (s = !1))
                        : (o = !1) !== c &&
                          (n.emit("project:pcbView:measurement:disabled"),
                          (s = i.active),
                          i.active && t.bus.emit("Measurement:disable"));
                    }),
                      n.on("project:pcbView:measurement:activate", function () {
                        o && !i.active && t.bus.emit("Measurement:enable");
                      }),
                      n.on(
                        "project:pcbView:measurement:deactivate",
                        function () {
                          i.active && t.bus.emit("Measurement:disable");
                        },
                      ));
                  },
                },
                {
                  key: "createController",
                  value: function (e, t) {
                    var n = this.app.getActiveModeId(),
                      r = document.querySelector('[data-view="PCBView"]');
                    return new Y(e.engines.Measurement, t, r, n);
                  },
                },
                {
                  key: "convertObjectAppItem",
                  value: function (e, t, n) {
                    var r,
                      o,
                      i,
                      a,
                      s = 0 === e ? t.fromObject : t.toObject;
                    if (s) {
                      var c = t.unitName,
                        u = t.unitMult,
                        l = "";
                      if (
                        void 0 !==
                          (null === (r = s.coordinates) || void 0 === r
                            ? void 0
                            : r.x) &&
                        void 0 !==
                          (null === (o = s.coordinates) || void 0 === o
                            ? void 0
                            : o.y)
                      ) {
                        var h = s.coordinates,
                          f = h.x,
                          d = h.y;
                        l = "("
                          .concat((f * u).toFixed(2))
                          .concat(c, ", ")
                          .concat((d * u).toFixed(2))
                          .concat(c, ")");
                      }
                      var p = "";
                      if (
                        void 0 !==
                          (null === (i = s.coordinates) || void 0 === i
                            ? void 0
                            : i.x1) &&
                        void 0 !==
                          (null === (a = s.coordinates) || void 0 === a
                            ? void 0
                            : a.y1)
                      ) {
                        var m = s.coordinates,
                          v = m.x1,
                          y = m.y1;
                        p = "("
                          .concat((v * u).toFixed(2))
                          .concat(c, ", ")
                          .concat((y * u).toFixed(2))
                          .concat(c, ")");
                      }
                      var g = "";
                      if (s.layerInfo) {
                        var b = s.layerInfo,
                          w = b.on,
                          E = b.to,
                          P = b.from;
                        g =
                          void 0 !== w
                            ? "on ".concat(w)
                            : "from ".concat(P, " to ").concat(E);
                      }
                      var C = s.fullName || "";
                      ((n.name = s.name),
                        (n.text = ""
                          .concat(C, " ")
                          .concat(l)
                          .concat(p, " ")
                          .concat(g)));
                    }
                  },
                },
                {
                  key: "clearCurrent",
                  value: function () {
                    (this.app.clearItems(), this.app.clearResult());
                  },
                },
              ]) && z(o.prototype, i),
              Object.defineProperty(o, "prototype", { writable: !1 }),
              o
            );
            var o, i;
          })(e);
        return new r({
          name: "Measurement",
          displayName: "",
          comment: "Measurement",
          description: "Measurement",
          dependencies: ["measurement.engine"],
          displayIcon: te("viewer-measurements-16", "measurements-16"),
          localType: "primary",
          hint: ie("viewer.plugins.Measurement.hint"),
          order: 0,
          owner: "PCBView",
          isGlobal: !1,
          view: {
            type: "modal",
            title: ie("viewer.plugins.Measurement.viewTitle"),
            config: { type: "aside-right", hasCloseOnOutsideClick: !1 },
          },
        });
      }
      window.__CORE__ &&
        re &&
        window.__CORE__.addModule(
          re({
            type: "Plugin",
            description: "Represent PCB measurement plugin module.",
            create: function (e, t) {
              return ae(e, t);
            },
          }),
        );
    },
  },
  (e) => {
    (e.O(0, [21759], () => e((e.s = 77719))), e.O());
  },
]);
