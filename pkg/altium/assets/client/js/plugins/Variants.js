/*! For license information please see Variants.js.LICENSE.txt */
"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [45098],
  {
    359: (t, e, n) => {
      function r(t) {
        return (
          (r =
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
          r(t)
        );
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, o(r.key), r));
        }
      }
      function o(t) {
        var e = (function (t, e) {
          if ("object" != r(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != r(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == r(e) ? e : e + "";
      }
      var a,
        u,
        c = (function () {
          return (
            (t = function t(e) {
              var n = this;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.NO_VARIANT_UNIQUE_ID = "l;"),
                (this.componentsByDesignator = new Map()),
                (this.componentsByUniqueId = new Map()),
                (this.graphite = []),
                (this.graphiteMapping = {}),
                (this.uniqueId = e.uniqueId),
                (this.name = e.name),
                (this.order = e.order),
                (this.noVariant = this.NO_VARIANT_UNIQUE_ID === this.uniqueId));
              var r = window.__CORE__;
              new Promise(function (t) {
                r.engines.Project
                  ? r.engines.Project.metadataReady().then(function () {
                      return t();
                    })
                  : t();
              })
                .then(function () {
                  var t,
                    e,
                    i =
                      null === (t = r.response.metadata.projectVariants) ||
                      void 0 === t
                        ? void 0
                        : t.find(function (t) {
                            return t.uniqueId === n.uniqueId;
                          });
                  ((n.componentVariations =
                    null !== (e = i.componentVariations) && void 0 !== e
                      ? e
                      : []),
                    (n.graphite = i.graphite),
                    (n.graphiteMapping = i.graphiteMapping),
                    n.componentVariations.forEach(function (t) {
                      var e = t.physicalDesignator || "",
                        r = null == e ? void 0 : e.indexOf(".");
                      (-1 != r && (e = e.substring(0, r)),
                        n.componentsByDesignator.has(e) ||
                          n.componentsByDesignator.set(e, t),
                        n.componentsByUniqueId.has(t.uniqueId) ||
                          n.componentsByUniqueId.set(t.uniqueId, t));
                    }));
                })
                .catch(function (t) {
                  return window.__CORE__
                    .createLogger("Variants:ProjectVariant")
                    .LogError("Initialize error", t);
                });
            }),
            (e = [
              {
                key: "isNoVariant",
                get: function () {
                  return this.noVariant;
                },
              },
              {
                key: "getVariantByDesignator",
                value: function (t) {
                  return this.componentsByDesignator.get(t);
                },
              },
              {
                key: "getVariantByUniqueId",
                value: function (t) {
                  return this.componentsByUniqueId.get(t);
                },
              },
              {
                key: "getVariantForComponent",
                value: function (t, e) {
                  return (
                    this.componentsByDesignator.get(t) ||
                    this.componentsByUniqueId.get(e)
                  );
                },
              },
            ]) && i(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        s = "http://www.w3.org/2000/svg";
      function l(t) {
        return (
          (l =
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
          l(t)
        );
      }
      function f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, h(r.key), r));
        }
      }
      function h(t) {
        var e = (function (t, e) {
          if ("object" != l(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != l(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == l(e) ? e : e + "";
      }
      (!(function (t) {
        ((t[(t.Fitted = 0)] = "Fitted"),
          (t[(t.NotFitted = 1)] = "NotFitted"),
          (t[(t.Alternate = 2)] = "Alternate"));
      })(a || (a = {})),
        (function (t) {
          ((t[(t.ROTATE_0 = 0)] = "ROTATE_0"),
            (t[(t.ROTATE_90 = 1)] = "ROTATE_90"),
            (t[(t.ROTATE_180 = 2)] = "ROTATE_180"),
            (t[(t.ROTATE_270 = 3)] = "ROTATE_270"));
        })(u || (u = {})));
      var v = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "createLine",
              value: function (t, e, n, r, i, o) {
                var a =
                    arguments.length > 6 && void 0 !== arguments[6]
                      ? arguments[6]
                      : "butt",
                  u = document.createElementNS(s, "line");
                return (
                  u.setAttribute("x1", t.toString()),
                  u.setAttribute("y1", e.toString()),
                  u.setAttribute("x2", n.toString()),
                  u.setAttribute("y2", r.toString()),
                  i || (i = "black"),
                  u.setAttribute("stroke", i),
                  o || (o = 0),
                  u.setAttribute("stroke-width", o.toString()),
                  a || (a = "butt"),
                  u.setAttribute("stroke-linecap", a),
                  u
                );
              },
            },
            {
              key: "createBoundCrossLine",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "red",
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 2,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "round",
                  i = document.createElementNS(s, "g"),
                  o = t.x,
                  a = t.y,
                  u = t.x + t.width,
                  c = t.y + t.height,
                  l = this.createLine(o, a, u, c, e, n, r);
                i.appendChild(l);
                var f = this.createLine(o, c, u, a, e, n, r);
                return (i.appendChild(f), i);
              },
            },
            {
              key: "createRectangle",
              value: function (t, e, n, r) {
                var i = document.createElementNS(s, "rect");
                return (
                  i.setAttribute("x", "".concat(t)),
                  i.setAttribute("y", "".concat(e)),
                  i.setAttribute("width", "".concat(n)),
                  i.setAttribute("height", "".concat(r)),
                  i
                );
              },
            },
            {
              key: "createBoundBox",
              value: function (t, e, n, r) {
                var i = { x: 0, y: 0, width: 0, height: 0 };
                return (
                  t > n
                    ? ((i.x = n), (i.width = t - n))
                    : ((i.x = t), (i.width = n - t)),
                  e > r
                    ? ((i.y = r), (i.height = e - r))
                    : ((i.y = e), (i.height = r - e)),
                  i
                );
              },
            },
            {
              key: "createBoundBoxFromArray",
              value: function (t) {
                if (4 !== t.length)
                  throw new Error(
                    "Incorrect input parameter. Estimate array with 4 items.",
                  );
                return this.createBoundBox(t[0], t[1], t[2], t[3]);
              },
            },
          ]),
          e && f(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function p(t) {
        return (
          (p =
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
          p(t)
        );
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, y(r.key), r));
        }
      }
      function y(t) {
        var e = (function (t, e) {
          if ("object" != p(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != p(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == p(e) ? e : e + "";
      }
      var g = window.__CORE__,
        m = 1e5,
        b = "NOT_AVAILABLE",
        w = [10, 5],
        E = (function () {
          return (
            (t = function t(e) {
              var n = this;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.scene = null),
                (this.variantComponents = []),
                (this.hiddenComponents = []),
                (this.sceneHeight = 0),
                (this.sceneWidth = 0),
                (this.sceneChannelId = 0),
                (this.currentProjectVariant = null),
                (this.notAvailableElement = null),
                (this.logger = g.createLogger("VariantRenderer")),
                (this.storage = e),
                g.bus.on("SchEngine:didDocumentAttach", function (t) {
                  return n.setSchScene(t);
                }),
                g.bus.on("Variants:changed", function (t) {
                  return n.onVariantChanged(t);
                }));
            }),
            (e = [
              {
                key: "alternatePartsElement",
                get: function () {
                  return this.storage.getAlternatePartsElement();
                },
              },
              {
                key: "setSchScene",
                value: function (t) {
                  ((this.scene = t.svg),
                    (this.sceneChannelId = t.document.channelId),
                    (this.sceneHeight = t.documentHeight),
                    (this.sceneWidth = t.documentWidth),
                    this.setProjectVariant(this.currentProjectVariant));
                },
              },
              {
                key: "onVariantChanged",
                value: function (t) {
                  var e;
                  ((this.currentProjectVariant =
                    null !== (e = null == t ? void 0 : t.projectVariant) &&
                    void 0 !== e
                      ? e
                      : null),
                    this.setProjectVariant(this.currentProjectVariant));
                },
              },
              {
                key: "setProjectVariant",
                value: function (t) {
                  var e,
                    n = this;
                  this.scene &&
                    (this.clearVariantComponents(),
                    null === (e = null == t ? void 0 : t.componentVariations) ||
                      void 0 === e ||
                      e.forEach(function (t) {
                        (t.channel && t.channel !== n.sceneChannelId) ||
                          (t.variationKind == a.NotFitted
                            ? n.setNotFitted(t)
                            : t.variationKind == a.Alternate
                              ? (n.setAlternatePart(t), n.setFitted(t))
                              : n.setFitted(t));
                      }));
                },
              },
              {
                key: "clearVariantComponents",
                value: function () {
                  (this.variantComponents.forEach(function (t) {
                    return t.remove();
                  }),
                    (this.variantComponents.length = 0),
                    this.hiddenComponents.forEach(function (t) {
                      ((t.id = t.id.replace("variant.", "")),
                        (t.style.display = ""));
                    }),
                    (this.hiddenComponents.length = 0));
                },
              },
              {
                key: "getComponentSubPartsByDesignator",
                value: function (t) {
                  var e = this.storage.getComponentSubPartsByDesignator(
                    t.physicalDesignator,
                  );
                  return e.length ? e : [t.uniqueId];
                },
              },
              {
                key: "getElementById",
                value: function (t) {
                  var e,
                    n,
                    r =
                      null === (e = this.scene) || void 0 === e
                        ? void 0
                        : e.getElementById(t);
                  return (
                    r ||
                      (r =
                        null === (n = this.scene) || void 0 === n
                          ? void 0
                          : n.getElementById(t.split("\\")[1])),
                    r
                  );
                },
              },
              {
                key: "setNotFitted",
                value: function (t) {
                  var e = this,
                    n = this.getComponentSubPartsByDesignator(t);
                  n.length &&
                    n.forEach(function (t) {
                      var n,
                        r,
                        i,
                        o =
                          null === (n = e.scene) || void 0 === n
                            ? void 0
                            : n.getElementById(t);
                      if (!o) {
                        var a = t.split("\\");
                        if (a.length > 1) {
                          var u = a[a.length - 1];
                          o =
                            null === (r = e.scene) || void 0 === r
                              ? void 0
                              : r.getElementById(u);
                        }
                      }
                      if (o) {
                        var c = e.getBBox(o),
                          s = v.createBoundCrossLine(c);
                        (null === (i = o.parentNode) ||
                          void 0 === i ||
                          i.appendChild(s),
                          e.variantComponents.push(s));
                      }
                    });
                },
              },
              {
                key: "setFitted",
                value: function (t) {
                  var e = this,
                    n = this.getComponentSubPartsByDesignator(t);
                  if (n.length) {
                    var r = new Map();
                    (this.getMapDiffParameters(t).forEach(function (t) {
                      return r.set(t.baseValue, t.variantValue);
                    }),
                      n.forEach(function (t) {
                        var n,
                          i = e.getElementById(t);
                        if (i) {
                          var o = i.cloneNode(!0);
                          (e.setAlternateTextStyle(o, r),
                            null === (n = i.parentNode) ||
                              void 0 === n ||
                              n.appendChild(o),
                            e.variantComponents.push(o),
                            (i.style.display = "none"),
                            e.hiddenComponents.push(i));
                        }
                      }));
                  }
                },
              },
              {
                key: "setAlternatePart",
                value: function (t) {
                  var e,
                    n = this;
                  if (this.alternatePartsElement) {
                    var r = new Map();
                    if (t.part) {
                      var i = this.createAlternatePartVariant(t.part);
                      if (i) {
                        var o = t.part;
                        r.set(o.uniqueId, { svg: i, part: o });
                      }
                    } else {
                      if (!t.parts) {
                        var a = this.createNotAvailablePartVariant(t);
                        a && (t.parts = [a]);
                      }
                      t.parts &&
                        (null === (e = t.parts) ||
                          void 0 === e ||
                          e.forEach(function (t) {
                            var e = n.createAlternatePartVariant(t);
                            e && r.set(t.uniqueId, { svg: e, part: t });
                          }));
                    }
                    if (0 != r.size) {
                      var u = this.getComponentSubPartsByDesignator(t);
                      u.length &&
                        u.forEach(function (e) {
                          var i,
                            o = n.getElementById(e);
                          if (
                            o &&
                            (n.hideOriginalComponentElements(o), t.parts)
                          ) {
                            var a = t.parts.find(function (t) {
                              return t.originalId === e;
                            });
                            if (a) {
                              var u = r.get(a.uniqueId);
                              u &&
                                (null === (i = o.parentNode) ||
                                  void 0 === i ||
                                  i.appendChild(u.svg));
                              var c = n.getAlternateTransform(u.part);
                              (u.svg.setAttribute("transform", c),
                                n.setAlternateTextStyle(u.svg),
                                n.variantComponents.push(u.svg));
                            }
                          }
                        });
                    }
                  }
                },
              },
              {
                key: "hideOriginalComponentElements",
                value: function (t) {
                  var e = this;
                  if ("text" !== t.nodeName) {
                    if ("g" !== t.nodeName)
                      return (
                        (t.style.display = "none"),
                        void this.hiddenComponents.push(t)
                      );
                    Array.from(t.children).forEach(function (t) {
                      return e.hideOriginalComponentElements(t);
                    });
                  }
                },
              },
              {
                key: "createAlternatePartVariant",
                value: function (t) {
                  var e;
                  if (!this.alternatePartsElement)
                    return this.createNotAvailablePartVariantSvg(t);
                  var n = t.uniqueId,
                    r =
                      null ===
                        (e = this.alternatePartsElement.getElementById(n)) ||
                      void 0 === e
                        ? void 0
                        : e.cloneNode(!0);
                  if (!r || 0 === this.getGraphicElementsCount(r))
                    return this.createNotAvailablePartVariantSvg(t);
                  var i = r.cloneNode(!0);
                  return (this.removeAllTextElements(i), i);
                },
              },
              {
                key: "getGraphicElementsCount",
                value: function (t) {
                  var e = this,
                    n = 0;
                  return (
                    "text" === t.nodeName || "g" === t.nodeName || n++,
                    Array.from(t.children).forEach(function (t) {
                      return (n += e.getGraphicElementsCount(t));
                    }),
                    n
                  );
                },
              },
              {
                key: "createNotAvailablePartVariant",
                value: function (t) {
                  this.logger.LogWarn(
                    "N/A alternate part: ".concat(t.physicalDesignator),
                  );
                  var e = this.getElementById(t.uniqueId);
                  if (e) {
                    var n = this.getBBox(e);
                    return {
                      uniqueId: t.uniqueId,
                      designator: t.physicalDesignator,
                      boundingBox: { x1: 0, y1: 0, x2: 0, y2: 0 },
                      isMirrored: !1,
                      orientation: 0,
                      x: n.x * m,
                      y: (this.sceneHeight - n.y) * m,
                      originalId: t.uniqueId,
                    };
                  }
                  return null;
                },
              },
              {
                key: "createNotAvailablePartVariantSvg",
                value: function (t) {
                  if (
                    (this.logger.LogWarn(
                      "N/A alternate part svg: ".concat(t.designator),
                    ),
                    !this.notAvailableElement)
                  ) {
                    var e = new DOMParser().parseFromString(
                      '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke-linecap="round" stroke-linejoin="round" fill="none"><g id="NOT_AVAILABLE"><text x="0" y="10" font-size="12px" font-weight="bold" font-family="Times New Roman" fill="#F00000">N/A</text></g></svg>',
                      "text/xml",
                    ).documentElement;
                    this.notAvailableElement = e.getElementById(b);
                  }
                  var n = this.notAvailableElement.cloneNode(!0),
                    r = this.getElementById(t.uniqueId);
                  if (r) {
                    var i = this.getBBox(r),
                      o = Math.round(i.width / 2) - w[0],
                      a = Math.round(i.height / 2) - w[1];
                    ((t.orientation = 0),
                      (t.isMirrored = !1),
                      (t.x = (i.x + o) * m),
                      (t.y = (this.sceneHeight - i.y - a) * m));
                  }
                  return n;
                },
              },
              {
                key: "removeAllTextElements",
                value: function (t) {
                  var e = this;
                  "text" !== t.nodeName
                    ? Array.from(t.children).forEach(function (t) {
                        return e.removeAllTextElements(t);
                      })
                    : t.remove();
                },
              },
              {
                key: "getAlternateTransform",
                value: function (t) {
                  var e = { x: t.x / m, y: this.sceneHeight - t.y / m },
                    n = "translate(".concat(e.x, ",").concat(e.y, ")");
                  if (null == t ? void 0 : t.orientation) {
                    var r = this.toDegrees(t.orientation);
                    n += " rotate(".concat(r, ")");
                  }
                  return (
                    (null == t ? void 0 : t.isMirrored) &&
                      (n += " scale(-1, 1)"),
                    n
                  );
                },
              },
              {
                key: "toDegrees",
                value: function (t) {
                  switch (t) {
                    case u.ROTATE_90:
                      return 270;
                    case u.ROTATE_180:
                      return 180;
                    case u.ROTATE_270:
                      return 90;
                    default:
                      return 0;
                  }
                },
              },
              {
                key: "toRadians",
                value: function (t) {
                  return this.toDegrees(t) * (Math.PI / 180);
                },
              },
              {
                key: "getOriginalParameters",
                value: function (t) {
                  var e = this.storage.getComponentByDesignator(
                    t.physicalDesignator,
                  );
                  return null == e ? void 0 : e.parameters;
                },
              },
              {
                key: "getMapDiffParameters",
                value: function (t) {
                  var e = new Map(),
                    n = new Set(),
                    r = this.storage.getComponentByDesignator(
                      t.physicalDesignator,
                    ),
                    i = new Map();
                  null == r ||
                    r.parameters.forEach(function (t) {
                      (n.add(t.name), i.set(t.name, t.value));
                    });
                  var o = new Map();
                  return (
                    null == t ||
                      t.parameters.forEach(function (t) {
                        (n.add(t.name), o.set(t.name, t.value));
                      }),
                    n.forEach(function (t) {
                      var n, r;
                      return e.set(t, {
                        baseValue:
                          null !== (n = i.get(t)) && void 0 !== n ? n : "",
                        variantValue:
                          null !== (r = o.get(t)) && void 0 !== r ? r : "",
                      });
                    }),
                    e
                  );
                },
              },
              {
                key: "setAlternateTextStyle",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  if (t.id !== b)
                    if ("text" !== t.nodeName)
                      Array.from(t.children).forEach(function (t) {
                        return e.setAlternateTextStyle(t, n);
                      });
                    else {
                      var r = t;
                      if (n) {
                        var i = null == n ? void 0 : n.get(r.textContent);
                        i &&
                          i !== r.textContent &&
                          ((r.style.fontStyle = "italic"),
                          (r.style.fontWeight = "bold"),
                          (r.style.fill = "green"),
                          (r.textContent = i));
                      } else
                        ((r.style.fontStyle = "italic"),
                          (r.style.fontWeight = "bold"),
                          (r.style.fill = "green"));
                    }
                },
              },
              {
                key: "getBBox",
                value: function (t) {
                  if (!t.hasChildNodes()) return t.getBBox();
                  var e = [];
                  return (this.fillBBoxes(t, e), this.getMinMaxBound(e));
                },
              },
              {
                key: "fillBBoxes",
                value: function (t, e) {
                  var n = this;
                  "text" !== t.nodeName &&
                    ("g" === t.nodeName
                      ? Array.from(t.children).forEach(function (t) {
                          return n.fillBBoxes(t, e);
                        })
                      : e.push(t.getBBox()));
                },
              },
              {
                key: "getMinMaxBound",
                value: function (t) {
                  var e = t[0],
                    n = e.x,
                    r = e.y,
                    i = e.x + e.width,
                    o = e.y + e.height;
                  if (
                    (t.forEach(function (t) {
                      (n > t.x && (n = t.x),
                        r > t.y && (r = t.y),
                        i < t.x + t.width && (i = t.x + t.width),
                        o < t.y + t.height && (o = t.y + t.height));
                    }),
                    n > i)
                  ) {
                    var a = [i, n];
                    ((n = a[0]), (i = a[1]));
                  }
                  if (r > o) {
                    var u = [o, r];
                    ((r = u[0]), (o = u[1]));
                  }
                  return { x: n, y: r, width: i - n, height: o - r };
                },
              },
            ]),
            e && d(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
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
      function P(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, S(r.key), r));
        }
      }
      function S(t) {
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
      var x = window.__CORE__,
        j = (function () {
          return (
            (t = function t(e) {
              var n = this;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.currentProjectVariant = null),
                (this.pcbRenderer = null),
                (this.logger = x.createLogger("PcbVariantRenderer")),
                (this.storage = e),
                x.bus.on("PcbEngine:rendererCreated", function (t) {
                  return n.setPcbRenderer(t);
                }),
                x.bus.on("Variants:changed", function (t) {
                  return n.onVariantChanged(t);
                }),
                x.bus.on("PcbEngine:documentChanged", function () {
                  return n.setProjectVariant(n.currentProjectVariant);
                }));
            }),
            (e = [
              {
                key: "setPcbRenderer",
                value: function (t) {
                  ((this.pcbRenderer = t),
                    this.setProjectVariant(this.currentProjectVariant));
                },
              },
              {
                key: "onVariantChanged",
                value: function (t) {
                  var e;
                  (null == t ? void 0 : t.forceUpdate) ||
                    ((this.currentProjectVariant =
                      null !== (e = null == t ? void 0 : t.projectVariant) &&
                      void 0 !== e
                        ? e
                        : null),
                    this.setProjectVariant(this.currentProjectVariant));
                },
              },
              {
                key: "setProjectVariant",
                value: function (t) {
                  this.pcbRenderer &&
                    (this.hideVariantComponents(),
                    this.showVariantComponents(t),
                    this.pcbRenderer.render());
                },
              },
              {
                key: "hideVariantComponents",
                value: function () {
                  try {
                    var t = this.storage.getAllVariantNodes();
                    this.updateVariantVisibility(t, !1);
                  } catch (t) {
                    var e = "Try run hideVariantComponents. Error: ".concat(
                      t,
                      ",\nYou are using an old ARK or Graphite versions. Upgrade to new ARK or Graphite 1.0.3 or later.",
                    );
                    this.logger.LogWarn(e);
                  }
                },
              },
              {
                key: "showVariantComponents",
                value: function (t) {
                  try {
                    var e = this.storage.getVariantNodes(
                      null == t ? void 0 : t.uniqueId,
                    );
                    this.updateVariantVisibility(e, !0);
                  } catch (t) {
                    var n = "Try run showVariantComponents. Error: ".concat(
                      t,
                      ",\nYou are using an old ARK or Graphite versions. Upgrade to new ARK or Graphite 1.0.3 or later.",
                    );
                    this.logger.LogWarn(n);
                  }
                },
              },
              {
                key: "updateVariantVisibility",
                value: function (t, e) {
                  if ((null == t ? void 0 : t.length) && this.pcbRenderer) {
                    var n = this.pcbRenderer.getSceneCurrent();
                    n && (n.setNodeItemsVisibility(t, e), n.setDirty(e));
                  }
                },
              },
            ]) && P(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      function A(t) {
        return (
          (A =
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
          A(t)
        );
      }
      function _(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, I(r.key), r));
        }
      }
      function I(t) {
        var e = (function (t, e) {
          if ("object" != A(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != A(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == A(e) ? e : e + "";
      }
      var k = (function () {
          return (
            (t = function t(e) {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.curPcbId = ""),
                (this.alternatePartsElement = null),
                (this.componentsByDesignator = new Map()),
                (this.graphiteVariations = new Map()),
                (this.metadata = e),
                this.init(e));
            }),
            (e = [
              {
                key: "init",
                value: function (t) {
                  var e = this;
                  new Promise(function (t) {
                    var e = window.__CORE__;
                    e.engines.Project
                      ? e.engines.Project.metadataReady().then(function () {
                          return t();
                        })
                      : t();
                  })
                    .then(function () {
                      (e.initComponentMap(t.components),
                        e.initGraphiteMap(t),
                        (e.alternatePartsElement =
                          e.createAlternatePartsElement(t)));
                    })
                    .catch(function (t) {
                      return window.__CORE__
                        .createLogger("Variants:MetaStorage")
                        .LogError("Initialize error", t);
                    });
                },
              },
              {
                key: "getVersion",
                value: function () {
                  var t, e;
                  return null !==
                    (e =
                      null === (t = this.metadata) || void 0 === t
                        ? void 0
                        : t.version) && void 0 !== e
                    ? e
                    : "0.0.0.0";
                },
              },
              {
                key: "setCurrentPcb",
                value: function (t) {
                  this.curPcbId = t;
                },
              },
              {
                key: "getAlternatePartsElement",
                value: function () {
                  return this.alternatePartsElement;
                },
              },
              {
                key: "getComponentByDesignator",
                value: function (t) {
                  return this.componentsByDesignator.get(t);
                },
              },
              {
                key: "getComponentSubPartsByDesignator",
                value: function (t) {
                  var e,
                    n = [],
                    r = this.componentsByDesignator.get(t);
                  return (
                    r &&
                      (r.schId && n.push(r.schId),
                      null === (e = null == r ? void 0 : r.subParts) ||
                        void 0 === e ||
                        e.forEach(function (t) {
                          return n.push(t.schId);
                        })),
                    n
                  );
                },
              },
              {
                key: "getAllVariantNodes",
                value: function () {
                  var t = this,
                    e = Array.from(this.graphiteVariations)
                      .flatMap(function (e) {
                        return e[1].get(t.curPcbId);
                      })
                      .flatMap(function (t) {
                        var e;
                        return null !== (e = null == t ? void 0 : t.graphite) &&
                          void 0 !== e
                          ? e
                          : [];
                      })
                      .filter(function (t) {
                        return !!t;
                      });
                  return null != e ? e : [];
                },
              },
              {
                key: "getVariantNodes",
                value: function (t) {
                  var e;
                  t || (t = "No_Variant_Unique_Id");
                  var n = this.graphiteVariations.get(t),
                    r = n ? n.get(this.curPcbId) : null;
                  return null !== (e = null == r ? void 0 : r.graphite) &&
                    void 0 !== e
                    ? e
                    : [];
                },
              },
              {
                key: "initComponentMap",
                value: function (t) {
                  var e = this;
                  (null == t ? void 0 : t.length) &&
                    t.forEach(function (t) {
                      return e.componentsByDesignator.set(t.designator, t);
                    });
                },
              },
              {
                key: "initGraphiteMap",
                value: function (t) {
                  var e,
                    n,
                    r = this,
                    i =
                      null === (e = t.pcbDocument) || void 0 === e
                        ? void 0
                        : e.id;
                  i &&
                    (null === (n = t.projectVariants) || void 0 === n
                      ? void 0
                      : n.length) &&
                    t.projectVariants.forEach(function (t) {
                      var e,
                        n =
                          null !== (e = t.otherPcb) && void 0 !== e
                            ? e
                            : new Map();
                      (n.set(i, {
                        graphite: t.graphite,
                        graphiteMapping: t.graphiteMapping,
                      }),
                        r.graphiteVariations.set(t.uniqueId, n));
                    });
                },
              },
              {
                key: "createAlternatePartsElement",
                value: function (t) {
                  if (!t.alternatePartsRaw) return null;
                  var e = atob(t.alternatePartsRaw);
                  return (
                    (e = e.replace("scene", "scene_variants")),
                    new DOMParser().parseFromString(e, "text/xml")
                      .documentElement
                  );
                },
              },
            ]),
            e && _(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })(),
        C = n(49865);
      function B(t) {
        return (
          (B =
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
          B(t)
        );
      }
      function O(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function T() {
        T = function () {
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
          u = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
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
          var o = e && e.prototype instanceof g ? e : g,
            a = Object.create(o.prototype),
            u = new k(r || []);
          return (i(a, "_invoke", { value: j(t, n, u) }), a);
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var h = "suspendedStart",
          v = "suspendedYield",
          p = "executing",
          d = "completed",
          y = {};
        function g() {}
        function m() {}
        function b() {}
        var w = {};
        s(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          V = E && E(E(C([])));
        V && V !== n && r.call(V, a) && (w = V);
        var P = (b.prototype = g.prototype = Object.create(w));
        function S(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          function n(i, o, a, u) {
            var c = f(t[i], t, o);
            if ("throw" !== c.type) {
              var s = c.arg,
                l = s.value;
              return l && "object" == B(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, u);
                    },
                    function (t) {
                      n("throw", t, a, u);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ((s.value = t), a(s));
                    },
                    function (t) {
                      return n("throw", t, a, u);
                    },
                  );
            }
            u(c.arg);
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
        function j(e, n, r) {
          var i = h;
          return function (o, a) {
            if (i === p) throw Error("Generator is already running");
            if (i === d) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var u = r.delegate;
              if (u) {
                var c = A(u, r);
                if (c) {
                  if (c === y) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === h) throw ((i = d), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = p;
              var s = f(e, n, r);
              if ("normal" === s.type) {
                if (((i = r.done ? d : v), s.arg === y)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((i = d), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function A(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                A(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              y
            );
          var o = f(i, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"),
              (n.arg = o.arg),
              (n.delegate = null),
              y
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                y)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              y);
        }
        function _(t) {
          var e = { tryLoc: t[0] };
          (1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e));
        }
        function I(t) {
          var e = t.completion || {};
          ((e.type = "normal"), delete e.arg, (t.completion = e));
        }
        function k(t) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(_, this),
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
          throw new TypeError(B(e) + " is not iterable");
        }
        return (
          (m.prototype = b),
          i(P, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: m, configurable: !0 }),
          (m.displayName = s(b, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === m || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), s(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(P)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          S(x.prototype),
          s(x.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new x(l(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          S(P),
          s(P, c, "Generator"),
          s(P, a, function () {
            return this;
          }),
          s(P, "toString", function () {
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
          (k.prototype = {
            constructor: k,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(I),
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
                  (u.type = "throw"),
                  (u.arg = e),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  u = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (c && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
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
                  ? ((this.method = "next"), (this.next = o.finallyLoc), y)
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
                y
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return (this.complete(n.completion, n.afterLoc), I(n), y);
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    I(n);
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
                y
              );
            },
          }),
          e
        );
      }
      function N(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, L(r.key), r));
        }
      }
      function L(t) {
        var e = (function (t, e) {
          if ("object" != B(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != B(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == B(e) ? e : e + "";
      }
      var D = window.__CORE__,
        R = (function () {
          return (
            (t = function t() {
              var e = this;
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.selectedItem = null),
                (this.projectVariants = new Map()),
                (this.onProjectItemActivate = function (t) {
                  t && "variant" === t.type && D.bus.emit("Variants:set", t.id);
                }),
                (this.logger = D.createLogger("Variants")),
                D.bus.on("Variants:get", function (t) {
                  ((t.variants = e.getVariants()),
                    (t.currentVariant = e.getCurrentVariant()));
                }),
                D.bus.on("PcbEngine:documentChanged", function (t) {
                  var n;
                  (e.logger.LogInfo("Set PCB ID: ".concat(t.altiumDesignerId)),
                    null === (n = e.storage) ||
                      void 0 === n ||
                      n.setCurrentPcb(t.altiumDesignerId));
                }),
                D.bus.on("Variants:getCurrent", function (t) {
                  return (t.currentVariant = e.getCurrentVariant());
                }),
                D.bus.on("Variants:set", function (t) {
                  return e.activateVariant(t);
                }),
                D.bus.on("Select:beforeSelect", function (t) {
                  return e.onBeforeSelect(t);
                }),
                D.bus.on("select", function (t) {
                  return (e.selectedItem = t);
                }));
            }),
            (e = [
              {
                key: "setup",
                value: function (t) {
                  return (
                    (e = this),
                    (n = void 0),
                    (r = void 0),
                    (i = T().mark(function e() {
                      var n,
                        r,
                        i,
                        o,
                        a = this;
                      return T().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.logger.LogDebug("Setup"),
                                  (e.prev = 1),
                                  (r = t.response),
                                  (e.next = 5),
                                  t.engines.Project.getItems("variants")
                                );
                              case 5:
                                ((i = e.sent),
                                  t.engines.Project.changeEnableState(
                                    !0,
                                    "variants",
                                  ),
                                  (
                                    null === (n = r.metadata.projectVariants) ||
                                    void 0 === n
                                      ? void 0
                                      : n.length
                                  )
                                    ? (r.metadata.projectVariants
                                        .sort(function (t, e) {
                                          return t.order - e.order;
                                        })
                                        .forEach(function (t) {
                                          var e = new c(t),
                                            n = i.find(function (t) {
                                              return t.id === e.uniqueId;
                                            });
                                          (n && n.active && (o = e.uniqueId),
                                            a.projectVariants.set(
                                              t.uniqueId,
                                              e,
                                            ));
                                        }),
                                      !o &&
                                        this.projectVariants.size > 0 &&
                                        (o = this.projectVariants
                                          .values()
                                          .next().value.id),
                                      (this.storage = new k(r.metadata)),
                                      (0, C.Z)(
                                        "1.0.0.2",
                                        this.storage.getVersion(),
                                      ) || new E(this.storage),
                                      new j(this.storage),
                                      t.bus.on(
                                        "Variants:changeState",
                                        function (e) {
                                          return t.engines.Project.changeEnableState(
                                            e,
                                            "variants",
                                          );
                                        },
                                      ),
                                      t.bus.on(
                                        "Project:activateItem",
                                        this.onProjectItemActivate,
                                      ),
                                      o && t.bus.emit("Variants:set", o),
                                      this.logger.LogDebug(
                                        "Found ".concat(
                                          this.projectVariants.size,
                                          " variants.",
                                        ),
                                      ),
                                      D.bus.emit(
                                        "Variants:loaded",
                                        Array.from(
                                          this.projectVariants.values(),
                                        ),
                                      ))
                                    : (this.logger.LogDebug(
                                        "Not found any variants.",
                                      ),
                                      D.bus.emit("Variants:loaded", null)),
                                  (e.next = 13));
                                break;
                              case 10:
                                ((e.prev = 10),
                                  (e.t0 = e.catch(1)),
                                  this.logger.LogError("Setup error", e.t0));
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 10]],
                      );
                    })),
                    new (r || (r = Promise))(function (t, o) {
                      function a(t) {
                        try {
                          c(i.next(t));
                        } catch (t) {
                          o(t);
                        }
                      }
                      function u(t) {
                        try {
                          c(i.throw(t));
                        } catch (t) {
                          o(t);
                        }
                      }
                      function c(e) {
                        var n;
                        e.done
                          ? t(e.value)
                          : ((n = e.value),
                            n instanceof r
                              ? n
                              : new r(function (t) {
                                  t(n);
                                })).then(a, u);
                      }
                      c((i = i.apply(e, n || [])).next());
                    })
                  );
                  var e, n, r, i;
                },
              },
              {
                key: "activateVariant",
                value: function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (
                    this.currentVariant &&
                    this.currentVariant.uniqueId == t &&
                    !e
                  );
                  else {
                    var n = this.getProjectVariantById(t);
                    n
                      ? ((this.currentVariant = n),
                        this.logger.LogDebug(
                          "New Variant with id ".concat(t, " is activated"),
                        ),
                        D.bus.emit("Variants:changed", {
                          projectVariant: n,
                          selectedItem: this.selectedItem,
                        }))
                      : (this.logger.LogWarn(
                          "Variant with id ".concat(t, " not found"),
                        ),
                        D.bus.emit("Variants:changed", null));
                  }
                },
              },
              {
                key: "getVariants",
                value: function () {
                  return this.projectVariants;
                },
              },
              {
                key: "getProjectVariantById",
                value: function (t) {
                  return this.projectVariants.get(t);
                },
              },
              {
                key: "getCurrentVariantName",
                value: function () {
                  return this.currentVariant.name;
                },
              },
              {
                key: "getCurrentVariant",
                value: function () {
                  return this.currentVariant;
                },
              },
              {
                key: "onBeforeSelect",
                value: function (t) {
                  try {
                    this.updateSelectedItem(t);
                  } catch (t) {
                    this.logger.LogError("Update selected item. ".concat(t));
                  }
                },
              },
              {
                key: "updateSelectedItem",
                value: function (t) {
                  var e,
                    n,
                    r,
                    i = t.native.designator;
                  if (i) {
                    (t.item.parameters.splice(0),
                      (t.item.description = t.native.description),
                      (e = t.item.parameters).push.apply(
                        e,
                        (function (t) {
                          if (Array.isArray(t)) return O(t);
                        })(
                          (r = t.native.parameters.filter(function (t) {
                            return "Description" != t.name;
                          })),
                        ) ||
                          (function (t) {
                            if (
                              ("undefined" != typeof Symbol &&
                                null != t[Symbol.iterator]) ||
                              null != t["@@iterator"]
                            )
                              return Array.from(t);
                          })(r) ||
                          (function (t, e) {
                            if (t) {
                              if ("string" == typeof t) return O(t, e);
                              var n = {}.toString.call(t).slice(8, -1);
                              return (
                                "Object" === n &&
                                  t.constructor &&
                                  (n = t.constructor.name),
                                "Map" === n || "Set" === n
                                  ? Array.from(t)
                                  : "Arguments" === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n,
                                      )
                                    ? O(t, e)
                                    : void 0
                              );
                            }
                          })(r) ||
                          (function () {
                            throw new TypeError(
                              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                          })(),
                      ));
                    var o =
                      null === (n = this.currentVariant) || void 0 === n
                        ? void 0
                        : n.getVariantByDesignator(i);
                    if (o) {
                      var a = o.parameters.find(function (t) {
                        return "Description" === t.name;
                      });
                      ((null == a ? void 0 : a.value) &&
                        (t.item.description = a.value),
                        o.parameters
                          .filter(function (t) {
                            return "Description" != t.name;
                          })
                          .forEach(function (e) {
                            var n = t.item.parameters.findIndex(function (t) {
                              return t.name === e.name;
                            });
                            if (-1 === n)
                              t.item.parameters.push({
                                at: 2,
                                name: e.name,
                                value: e.value,
                              });
                            else {
                              var r = t.item.parameters[n];
                              t.item.parameters[n] = {
                                at: 2 | r.at,
                                name: r.name,
                                value: e.value,
                              };
                            }
                          }));
                    }
                  }
                },
              },
            ]),
            e && N(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
      function M(t) {
        return (
          (M =
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
          M(t)
        );
      }
      function q(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, F(r.key), r));
        }
      }
      function F(t) {
        var e = (function (t, e) {
          if ("object" != M(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != M(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == M(e) ? e : e + "";
      }
      function G(t, e, n) {
        return (
          (e = W(e)),
          (function (t, e) {
            if (e && ("object" == M(e) || "function" == typeof e)) return e;
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
            U()
              ? Reflect.construct(e, n || [], W(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function U() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (U = function () {
          return !!t;
        })();
      }
      function W(t) {
        return (
          (W = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          W(t)
        );
      }
      function z(t, e) {
        return (
          (z = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          z(t, e)
        );
      }
      var H = window.__CORE__,
        K = window.__APP__.createModule,
        Y =
          (window.__APP__.library.i18n.t,
          K({
            type: "Plugin",
            description: "Variants",
            create: function (t) {
              return new ((function (t) {
                function e() {
                  var t;
                  return (
                    (function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function",
                        );
                    })(this, e),
                    ((t = G(this, e, [
                      {
                        name: "Variants",
                        comment: "Variants",
                        description: "Variants",
                      },
                    ])).logger = window.__CORE__.createLogger("Variants")),
                    (t.variantManager = new R()),
                    H.bus.on("Variants:loaded", function () {
                      t.currentVariantId &&
                        setTimeout(function () {
                          H.bus.emit("Variants:set", t.currentVariantId);
                        }, 0);
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
                      e && z(t, e));
                  })(e, t),
                  (n = e),
                  (r = [
                    {
                      key: "events",
                      get: function () {
                        return [
                          "Variants:loaded",
                          "Variants:changed",
                          "Variants:set",
                          "Variants:get",
                          "Variants:getCurrent",
                          "Variants:changeState",
                        ];
                      },
                    },
                    {
                      key: "setup",
                      value: function (t) {
                        var e = this;
                        return new Promise(function (n) {
                          try {
                            e.variantManager.setup(t);
                          } catch (t) {
                            console.error("variants error", t);
                          }
                          n();
                        });
                      },
                    },
                  ]),
                  r && q(n.prototype, r),
                  Object.defineProperty(n, "prototype", { writable: !1 }),
                  n
                );
                var n, r;
              })(t))();
            },
          }));
      H && H.addModule(Y);
    },
  },
  (t) => {
    (t.O(0, [21759], () => t((t.s = 359))), t.O());
  },
]);
