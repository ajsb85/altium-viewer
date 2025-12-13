"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [37197],
  {
    47451: () => {
      function e(r) {
        return (
          (e =
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
          e(r)
        );
      }
      function r(e, r) {
        for (var n = 0; n < r.length; n++) {
          var i = r[n];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, t(i.key), i));
        }
      }
      function t(r) {
        var t = (function (r, t) {
          if ("object" != e(r) || !r) return r;
          var n = r[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(r, "string");
            if ("object" != e(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(r);
        })(r);
        return "symbol" == e(t) ? t : t + "";
      }
      var n = window.__APP__,
        i = n.analytics,
        o = n.utils.getIcon,
        a = n.library.i18n.t,
        s = (function () {
          return (
            (e = function e() {
              var r = this;
              (!(function (e, r) {
                if (!(e instanceof r))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.meterController = void 0),
                (this._disabled = !1),
                (this.metaInfo = {
                  name: "GerberCompareMeasurement",
                  displayName: "",
                  comment: "Measurement for Gerber Compare",
                  description: "Gerber Compare Measurement plugin",
                  dependencies: ["measurement.engine"],
                  displayIcon: o("viewer-measurements-16", "measurements-16"),
                  localType: "primary",
                  hint: a("viewer.plugins.GerberCompareMeasurement.meta.hint"),
                  order: 0,
                  owner:
                    "GerberCompareView,GerberCompareSourceView,GerberCompareTargetView",
                  isGlobal: !1,
                  view: {
                    type: "modal",
                    title: a(
                      "viewer.plugins.GerberCompareMeasurement.meta.viewTitle",
                    ),
                    config: { type: "aside-right", hasCloseOnOutsideClick: !1 },
                  },
                }),
                (this.events = []),
                (this.hidden = !1),
                (this.onWillMeasure = function (e) {
                  (r.clearCurrent(),
                    r.app.setItem(e, 0),
                    i.dispatchPanelsEvent("Measure", {
                      action: "Point.First",
                    }));
                }),
                (this.onDidMeasure = function (e) {
                  (r.app.setItem(e, 1),
                    r.app.setResult(e),
                    i.dispatchPanelsEvent("Measure", {
                      action: "Point.Second",
                    }));
                }),
                (this.onSelectMeasure = function (e) {
                  (r.clearCurrent(),
                    r.app.setItem(e, 0),
                    r.app.setItem(e, 1),
                    r.app.setResult(e));
                }),
                (this.onCancelMeasure = function () {
                  return r.clearCurrent();
                }),
                (this.onChangeHistory = function (e) {
                  r.app.setHistory(e.measurements);
                }),
                (this.onSelect = function (e) {
                  var t;
                  (null == e ? void 0 : e.id) &&
                    (null === (t = r.meterController) ||
                      void 0 === t ||
                      t.select(e.id, !0));
                }));
            }),
            (t = [
              {
                key: "disabled",
                get: function () {
                  return this._disabled;
                },
                set: function (e) {
                  e !== this._disabled &&
                    ((this._disabled = e),
                    window.__CORE__.bus.emit("Measurement:updateInterface", {
                      disabled: this.disabled,
                    }));
                },
              },
              {
                key: "setup",
                value: function (e) {
                  var r = this;
                  return (
                    (this.disabled = !0),
                    (this.app = e.engines.Measurement.createApp([
                      { id: 0, name: "Free", isActive: !0 },
                    ])),
                    this.app.on("select", this.onSelect),
                    e.bus.on(
                      "GerberComparisonEngine:rendererDidEnable",
                      function (t) {
                        ((r.disabled = !1),
                          (r.meterController = r.createController(e, t)),
                          r.meterController.on("willMeasure", r.onWillMeasure),
                          r.meterController.on(
                            "selectMeasure",
                            r.onSelectMeasure,
                          ),
                          r.meterController.on("didMeasure", r.onDidMeasure),
                          r.meterController.on(
                            "cancelMeasure",
                            r.onCancelMeasure,
                          ),
                          r.meterController.on(
                            "changeHistory",
                            r.onChangeHistory,
                          ),
                          r.isActive && r.meterController.activate());
                      },
                    ),
                    e.bus.on(
                      "GerberComparisonEngine:rendererDidDisable",
                      function () {
                        ((r.disabled = !0),
                          r.meterController &&
                            (r.meterController.off(
                              "willMeasure",
                              r.onWillMeasure,
                            ),
                            r.meterController.off("didMeasure", r.onDidMeasure),
                            r.meterController.off(
                              "selectMeasure",
                              r.onSelectMeasure,
                            ),
                            r.meterController.off(
                              "cancelMeasure",
                              r.onCancelMeasure,
                            ),
                            r.meterController.off(
                              "changeHistory",
                              r.onChangeHistory,
                            ),
                            r.meterController.dispose(),
                            r.clearCurrent(),
                            r.app.setHistory([])),
                          (r.meterController = void 0));
                      },
                    ),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "activate",
                value: function () {
                  var e;
                  ((this.isActive = !0),
                    !this.app.initialized && this.app.init(this.metaInfo.name),
                    null === (e = this.meterController) ||
                      void 0 === e ||
                      e.activate());
                },
              },
              {
                key: "deactivate",
                value: function () {
                  var e;
                  ((this.isActive = !1),
                    null === (e = this.meterController) ||
                      void 0 === e ||
                      e.deactivate(),
                    this.clearCurrent());
                },
              },
              {
                key: "createController",
                value: function (e, r) {
                  var t = {
                      name: "Default_Measurement_Layer",
                      z_range: [-1, 1],
                      is_keepout: !1,
                      is_layer_marks: !1,
                      is_inverted: !1,
                      is_cutout: !1,
                      layer_type:
                        window.GraphiteResolverInstance.module.LayerType
                          .Regular,
                      show3d: !1,
                    },
                    n = r.scene.createOverlayScene(
                      "Measurement_Scene",
                      [t],
                      [],
                    ),
                    i = document.querySelector(
                      '[data-view="'.concat(r.viewName, '"]'),
                    ),
                    o = {
                      documentName: r.viewName,
                      view: i,
                      scene: n,
                      historyMaxLength: 1 / 0,
                      unitFactor:
                        "GerberCompareView" === r.viewName ? 0.1 : 100,
                      svgScene: r.svOverlay,
                    };
                  return e.engines.Measurement.createGraphiteSceneFreeModeOnlyController(
                    o,
                  );
                },
              },
              {
                key: "clearCurrent",
                value: function () {
                  (this.app.clearItems(), this.app.clearResult());
                },
              },
            ]) && r(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t;
        })();
      window.__CORE__.addModule({
        type: "Plugin",
        description:
          "Represent fabrication comparison measurement plugin module.",
        create: function () {
          return new s();
        },
      });
    },
  },
  (e) => {
    e((e.s = 47451));
  },
]);
