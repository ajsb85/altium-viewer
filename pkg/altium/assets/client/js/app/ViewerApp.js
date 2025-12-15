// ============================================================================
// VIEWERAPP.JS - Main Application Module
// ============================================================================
// This file is organized into 8 semantic sections:
//   1. Webpack Module Header (L1-10)
//   2. Imports & Factories (L10-185)
//   3. Vue Component: Viewer (L185-1850)
//   4. Tree Components (L1850-1980)
//   5. Manager Classes (L1980-2280)
//   6. Async Generators (L2280-2800)
//   7. App Initialization (L2800-3500)
//   8. App Execution (L3500-end)
// See ViewerApp.sections.md for detailed documentation.
// ============================================================================

// ============= SECTION 1: WEBPACK MODULE HEADER =============
(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
  [69668],
  {
    69668: (e, t, n) => {
      console.log("69668: Starting execution");

      // ============= SECTION 2: IMPORTS & FACTORIES =============
      var r = n(90450),
        i = n(10311),
        o = n(25979),
        a = { class: "app" },
        s = { class: "app__alert-text" },
        c = { key: 1 },
        l = ["id"],
        u = ["onClick"],
        d = { class: "app__back-btn-text" },
        p = ["id"],
        f = ["data-view"],
        m = n(77337),
        h = n(91261),
        v = n(30171),
        y = n(77453),
        g = n(48226),
        b = n(36480),
        w = function () {
          return (0, b.Z)({
            baseURL: window.__VIEWER_DOMAIN__ + "/api/",
            type: "json",
            withCredentials: !1,
          });
        };
      // Use ViewerUtils helpers instead of duplicating them
      var C = ViewerUtils.getType,
        _ = ViewerUtils.defineProperties,
        P = ViewerUtils.toPropertyKey;
      
      // ===== COMPONENT FACTORIES ENABLED =====
      console.log("[ViewerApp] Initializing factories from ViewerComponents...");
      var Factories = ViewerComponents.Factories;

      
      // S (Memory) moved to ViewerAppMethods

      var E = { key: 0, class: "app-sidebar__sub-title-additional-text" },
        j = { class: "app-sidebar__content" },
        O = n(93891),
        D = n(29786);
       // AfsSidebar created via Factory
      var L = Factories.createAfsSidebar({
        Vue: i,
        BEM: D,
        GridContainer: g.G
      });
      // Use ViewerUtils helpers (replacing B and x duplicates)
      var B = ViewerUtils.getType,
        x = ViewerUtils.defineProperty;
      // AppSidebar created via Factory
      var T = Factories.createAppSidebar({
        Vue: i,
        Utils: ViewerUtils,
        AfsText: y.A,
        AfsSidebar: L,
        ViewerComponents: ViewerComponents
      });
      var N = n(34313);
      // ModalDirective created via Factory
      var M = Factories.createModalDirective({ ItemRegistry: N.Z });
      var I = n(38964),
        R = n(74839),
        F = n(38075);
      // Use ViewerUtils helpers (replacing H, z, Z, U duplicates)
      var H = ViewerUtils.getType,
        z = ViewerUtils.getOwnKeys,
        Z = ViewerUtils.objectSpread,
        U = ViewerUtils.defineProperty;
      
      // G (loader message) moved to ViewerAppMethods
      
      var W = n(67674),
        $ = { class: "app-alert" },
        Y = { class: "app-alert__container" },
        K = { class: "app-alert__figure" },
        X = { key: 0, class: "app-alert__text" },
        q = { key: 1, class: "app-alert__meta" };
      // AppAlert created via Factory
      var Q = Factories.createAppAlert({ 
        Vue: i, 
        AfsIcon: m._, 
        ViewerComponents: ViewerComponents 
      });
      var ee = { class: "app-loader__container" },
        te = { class: "app-loader__figure" },
        ne = { key: 0, class: "app-loader__progress" },
        re = { key: 1, class: "app-loader__meta" },
        ie = "file-upload-32";
      // AppLoader created via Factory
      var ae = Factories.createAppLoader({
        Vue: i,
        AfsIcon: m._,
        ViewerComponents: ViewerComponents
      });
      var se = { class: "app-header" },
        ce = { class: "app-header__col app-header__secondary-controls" },
        le = { class: "app-header__col app-header__view-controls" },
        ue = { class: "app-header__col app-header__primary-controls" },
        de = { key: 0, class: "app-main-tabs" },
        pe = ["data-locator", "disabled", "onClick"],
        fe = { key: 0, class: "app-main-tabs__display-items" },
        me = { class: "app-main-tabs__name" },
        he = { class: "app-main-tabs__dropdown" },
        ve = { class: "app-main-tabs__menu-container" },
        ye = ["disabled", "onClick"],
        ge = n(23870),
        be = n(65725),
        we = n(75419);
      // AppMainTabs created via Factory
      var Ce = Factories.createAppMainTabs({
        Vue: i,
        AfsText: y.A,
        AfsIcon: m._,
        AfsBadge: ge.B,
        AfsContextMenu: h.C,
        DropdownDirective: be.d,
        HintDirective: we.h,
        ViewerComponents: ViewerComponents,
        Utils: ViewerUtils
      });
      var _e = { class: "app-header-plugins" },
        Pe = ["id", "disabled", "onClick"];
      // Use ViewerUtils helpers (replacing Se, Ee, je, Oe duplicates)
      var Se = ViewerUtils.getType,
        Ee = ViewerUtils.getOwnKeys,
        je = ViewerUtils.objectSpread,
        Oe = ViewerUtils.defineProperty;
      // AppHeaderPlugin created via Factory
      var HeaderPlugins_Created = Factories.createAppHeaderPlugin({
        Vue: i,
        AfsText: y.A,
        AfsIcon: m._,
        AfsContextMenu: h.C,
        HintDirective: we.h,
        ModalDirective: M,
        ViewerComponents: ViewerComponents,
        Utils: ViewerUtils
      });

      // AppHeader created via Factory
      var Be = Factories.createAppHeader({
        Vue: i,
        MainTabs: Ce,
        HeaderPlugins: HeaderPlugins_Created,
        ViewerComponents: ViewerComponents
      });
      var xe = ["href"],
        Ae = [
          (0, i.createStaticVNode)(
            '<svg class="app-watermark__icon" viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>',
            1,
          ),
        ];
      // AppWatermark created via Factory
      var Te = Factories.createAppWatermark({
        Vue: i,
        ViewerComponents: ViewerComponents
      });
      var Ne = n(23864),
        Me = n(19577);
      // Use ViewerUtils helpers (replacing Ie, Re, Fe, He duplicates)
      var Ie = ViewerUtils.getType,
        Re = ViewerUtils.defineProperties,
        Fe = ViewerUtils.defineProperty,
        He = ViewerUtils.toPropertyKey;
      var ze = {
        2: "PCB.2D",
        3: "PCB.3D",
        Difference: "GerberCompare.Compare",
        Target: "GerberCompare.Target",
        Source: "GerberCompare.Source",
      },
        Ze = window.FPSMonitor; // Extracted to external module FPSMonitor.js
      // Use ViewerUtils helpers (replacing Ue, Ge, We duplicates)
      var Ue = ViewerUtils.getType,
        Ge = ViewerUtils.defineProperties,
        We = ViewerUtils.toPropertyKey;
      var $e = window.LayoutManager; // Extracted to external module LayoutManager.js;
      // Use ViewerUtils helpers (replacing Ye, Xe, qe, Je duplicates)
      var Ye = ViewerUtils.getType,
        Xe = ViewerUtils.getOwnKeys,
        qe = ViewerUtils.objectSpread,
        Je = ViewerUtils.defineProperty;
      // Ke is a unique array slice helper, keeping as-is
      function Ke(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      // ============= SECTION 3: VUE COMPONENT - VIEWER =============
      const Qe = {
        name: "Viewer",
        components: {
          Header: Be,
          Loader: ae,
          Watermark: Te,
          AfsIcon: m._,
          AfsContextMenu: h.C,
          AfsLink: v.A,
          AfsText: y.A,
          Alert: Q,
          Sidebar: T,
          GridContainer: g.G,
        },
        directives: { modal: M },
        data: function () {
          return {
            isExpired: !1,
            isLoading: !0,
            isLoadingFailed: !1,
            loaderMessage: "",
            loaderMeta: "",
            isLoaderPrimary: !0,
            hasLoaderIcon: !0,
            loaderIcon: "",
            isLogoVisible: !0,
            viewsPadding: { left: 0, right: 0 },
            presentViews: [],
            isDesignProcessed: !0,
            unloadPageSignal: !1,
            appLayoutUpdateNotifier: new $e(window.__CORE__.bus),
            excludeViewsFromAnalytics: ViewerAppConfig.EXCLUDE_VIEWS_FROM_ANALYTICS,
            layoutChanged: !1,
            headerBottom: 0,
          };
        },
        computed: qe(
          qe(
            qe(
              {},
              (0, o.rn)([
                "views",
                "globalPlugins",
                "localPluginsDictionary",
                "activeView",
                "activePlugins",
                "modals",
                "sidebar",
                "trimmedText",
              ]),
            ),
            (0, o.Se)(["localPlugins", "globalPluginsList", "viewsList"]),
          ),
          {},
          {
            viewsStyles: function () {
              return {
                paddingLeft: "".concat(this.viewsPadding.left, "px"),
                paddingRight: "".concat(this.viewsPadding.right, "px"),
              };
            },
            modalsList: function () {
              var e = this;
              return (0, I.isEmptyObject)(this.modals)
                ? []
                : Object.values(this.modals).map(function (t) {
                  return qe(
                    qe({}, t),
                    {},
                    {
                      listeners: ViewerPluginManager.createModalListeners(e, t, Ne.Z.bus),
                    },
                  );
                });
            },
            trimmedTextMenuBind: function () {
              return {
                id: "app-trimmed-text-hint",
                type: "hint",
                modifiers: { y: "top", x: "center" },
                offset: 8,
              };
            },
            hasLogo: function () {
              return (
                this.isLogoVisible &&
                !this.coreInitialData.attributes["data-logo-hidden"]
              );
            },
            isAfsCompare: function () {
              return !1;
            },
            isCompare: function () {
              var e, t;
              return null === (e = this.coreInitialData) ||
                void 0 === e ||
                null === (t = e.attributes) ||
                void 0 === t
                ? void 0
                : t["data-comparison-source-id"];
            },
            token: function () {
              var e, t;
              return null === (e = this.coreInitialData) ||
                void 0 === e ||
                null === (t = e.attributes) ||
                void 0 === t
                ? void 0
                : t["data-project-token"];
            },
            hiddenHeader: function () {
              var e, t;
              return null === (e = this.coreInitialData) ||
                void 0 === e ||
                null === (t = e.attributes) ||
                void 0 === t
                ? void 0
                : t["data-hide-header"];
            },
            parentEvents: function () {
              return window.__APP__.parentEvents;
            },
          },
        ),
        watch: {
          viewsList: {
            handler: function (e) {
              ViewerPluginManager.handleViewsListChange(this, e, Ne.Z.bus);
            },
            deep: !0,
          },
          isLoading: {
            handler: function (e) {
              e || this.appLayoutUpdateNotifier.initialize();
            },
          },
          layoutChanged: function (e) {
            var t = this;
            if (e) {
              var n = document.querySelector(".app-header"),
                r = n ? n.offsetHeight + n.offsetTop : 0;
              ((this.headerBottom = r),
                (0, i.nextTick)(function () {
                  return (t.layoutChanged = !1);
                }));
            }
          },
        },
        props: ["domain", "coreInitialData"],
        created: function () {
          var e = this;
          (window.addEventListener("beforeunload", function (t) {
            e.unloadPageSignal = !0;
          }),
            Object.defineProperty(window.__APP__, "isDesignProcessed", {
              get: function () {
                return e.isDesignProcessed;
              },
            }),
            this.initCommon(),
            this.initCore(),
            this.initUnits(),
            this.initOnSceneItnteracted(),
            setTimeout(function () {
              return e.parentEvents.emit(ViewerAppConfig.PARENT_EVENTS.VIEWER_INITED);
            }, 200),
            document.addEventListener("keyup", this.handleKey),
            (this.loaderMessage = this.$t(
              ViewerAppConfig.I18N_KEYS.INITIALIZING,
            )),
            this.parentEvents.on("app:view:activate", function (e) {
              Ne.Z.bus.emit("View:set", e.id);
            }));
        },
        mounted: function () {
          this.layoutChanged = !0;
        },
        beforeUnmount: function () {
          document.removeEventListener("keyup", this.handleKey);
        },
        methods: qe(
          qe(
            {},
            (0, o.OI)([
              "setView",
              "setGlobalPlugin",
              "setLocalPluginDictionary",
              "setModal",
              "setActiveView",
              "setActivePlugin",
              "removeActivePlugin",
              "updateViewInterface",
              "updateGlobalPluginsInterface",
              "updateLocalPluginsInterface",
            ]),
          ),
          {},
          {
            initCommon: function () {
              ViewerAppMethods.initCommon(this, Ne.Z, ViewerAppConfig);
            },
            initUnits: function () {
              ViewerAppMethods.initUnits(this, Ne.Z, Me.Z, ViewerAppConfig);
            },
            initCore: function () {
              var e = this;
                (ViewerAppMethods.initAppCore(this, Ne.Z, ViewerAppConfig),
                this.parentEvents.on("app:layout:closePanels", function (t) {
                  if (t.panelIds) {
                    var n,
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
                                if ("string" == typeof e) return Ke(e, t);
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
                                      ? Ke(e, t)
                                      : void 0
                                );
                              }
                            })(e)) ||
                            (t && e && "number" == typeof e.length)
                          ) {
                            n && (e = n);
                            var r = 0,
                              i = function () { };
                            return {
                              s: i,
                              n: function () {
                                return r >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[r++] };
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
                        var o,
                          a = !0,
                          s = !1;
                        return {
                          s: function () {
                            n = n.call(e);
                          },
                          n: function () {
                            var e = n.next();
                            return ((a = e.done), e);
                          },
                          e: function (e) {
                            ((s = !0), (o = e));
                          },
                          f: function () {
                            try {
                              a || null == n.return || n.return();
                            } finally {
                              if (s) throw o;
                            }
                          },
                        };
                      })(
                        t.panelIds.filter(function (t) {
                          return e.activePlugins.find(function (e) {
                            return e.id === t;
                          });
                        }),
                      );
                    try {
                      for (r.s(); !(n = r.n()).done;) {
                        var i = n.value;
                        Ne.Z.bus.emit("".concat(i, ":disable"));
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  }
                }),
                this.parentEvents.on("csrf-token:update", function (e) {
                  (0, W.zX)("data-csrf-token", e.data);
                }));
              var t,
                n =
                  this.domain ||
                  (this.coreInitialData &&
                    this.coreInitialData.attributes &&
                    this.coreInitialData.attributes.domain);
              this.token
                ? ((t = this.token),
                  w()
                    .get("token/resolve-token?token=".concat(t))
                    .then(function (e) {
                      var t;
                      if (
                        "Success" ===
                        (null == e || null === (t = e.data) || void 0 === t
                          ? void 0
                          : t.status)
                      )
                        return e.data;
                      throw Error("Resolve token error.");
                    }))
                  .then(function (t) {
                    Ne.Z.setup(
                      n,
                      qe(
                        qe({}, e.coreInitialData),
                        {},
                        {
                          designUrl: null == t ? void 0 : t.designId,
                          attributes: qe(
                            qe({}, e.coreInitialData.attributes),
                            {},
                            {
                              "data-project-src":
                                null == t ? void 0 : t.designId,
                            },
                          ),
                        },
                      ),
                    );
                  })
                  .catch(function () {
                    e.isExpired = !0;
                  })
                : Ne.Z.setup(n, this.coreInitialData);
            },
            initOnSceneItnteracted: function () {
              ViewerAppMethods.initOnSceneInteracted(this, Ne.Z, ViewerAppConfig);
            },
            filterViewsByStr: function (e, t) {
              return ViewerAppMethods.filterViewsByStr(e, t);
            },
            filterViewByStr: function (e, t) {
              return ViewerAppMethods.filterViewByStr(e, t);
            },
            setInitialView: function () {
              return ViewerViewManager.setInitialView(this, Ne.Z);
            },
            setDefaultView: function () {
              return ViewerViewManager.setDefaultView(this, Ne.Z);
            },
            setFilteredView: function (e) {
              return ViewerViewManager.setFilteredView(this, e);
            },
            // ... (onDesignProcessing, etc.) ...
            changeView: function (e, t, n) {
              return ViewerViewManager.changeView(this, e, t, n, Ne.Z);
            },
            initOnDocumentShown: function (e) {
              return ViewerViewManager.initOnDocumentShown(this, e, Ne.Z.bus);
            },
            // ...
            initViewsListeners: function () {
              ViewerViewManager.initViewsListeners(this, Ne.Z.bus, Ne.Z);
            },





            initPluginsListeners: function () {
              ViewerPluginManager.initPluginsListeners(this, Ne.Z.bus);
            },
            toggleModulesDisableState: function (e) {
              return ViewerPluginManager.toggleModulesDisableState(e);
            },
            addModalListeners: function (e) {
              ViewerPluginManager.addModalListeners(this, e, Ne.Z.bus);
            },
            changeView: function (e, t, n) {
              return ViewerViewManager.changeView(this, e, t, n);
            },

            onViewChange: function (e) {
              this.changeView(e, !1, !0);
            },
            onPluginClick: function (e) {
              ViewerPluginManager.handlePluginClick(this, e);
            },
            onBackButtonClick: function (e) {
              Ne.Z.bus.emit(e.events.back);
            },
            initOnUpdateInterface: function () {
              ViewerAppMethods.initOnUpdateInterface(this, Ne.Z);
            },

            handleKey: function (e) {
              this.parentEvents.emit(ViewerAppConfig.PARENT_EVENTS.VIEWER_KEY, ViewerAppMethods.formatKeyEvent(e));
            },
            onDocumentOpenError: function (e) {
              try {
                this.captureError(e.error, e.name, e.sendDetails);
              } catch (e) { }
            },
            onDesignResolveComplete: function (e) {
              e &&
                e.activeVersion &&
                this.parentEvents.emit(
                  ViewerAppConfig.PARENT_EVENTS.GENERATING_NEW_VERSION,
                  e.activeVersion,
                );
            },
            onNewDesignReady: function () {
              this.parentEvents.emit(ViewerAppConfig.PARENT_EVENTS.GENERATED_NEW_VERSION);
            },
            getErrorContent: function (e) {
              return ViewerAppMethods.getErrorContent(e);
            },
            getErrorDetails: function (e) {
              return ViewerAppMethods.getErrorDetails(e);
            },
            initAnalytics: function () {
              (window.__APP__.analytics.initData(
                this.coreInitialData.attributes,
              ),
                new Ze(window.__APP__.appMonitoring, Ne.Z).init());
            },
            onLinkClick: function(e, t) {
                ViewerAppMethods.onLinkClick(this, e, t, Ne.Z);
            },
            onSidebarUpdated: function () {
                ViewerAppMethods.onSidebarUpdated(this);
            },
            onHeaderUpdated: function () {
                ViewerAppMethods.onHeaderUpdated(this);
            },
            checkWebGl2: function () {
              var status = ViewerAppMethods.checkWebGl2Support();
              window.__APP__.analytics.dispatchAnalyticsEvent("WebGL2", status);
            },
            setLoader: function (e, t, n, r, i) {
              ViewerAppMethods.setLoader(this, e, t, n, i);
            },
            setLoaderMessage: function (e, t, n, r) {
              var args = [this, e, t, n];
              if (arguments.length > 3) args.push(r);
              ViewerAppMethods.setLoaderMessage.apply(null, args);
            },
            captureError: function (e, t, n) {
              var args = [this, e, t];
              if (arguments.length > 2) args.push(n);
              ViewerAppMethods.captureError.apply(null, args);
            },
          },
        ),
      },
        et = (0, ViewerComponents.wrapComponent)(Qe, [
          [
            "render",
            function (e, t, n, r, o, m) {
              var h = (0, i.resolveComponent)("AfsLink"),
                v = (0, i.resolveComponent)("Alert"),
                y = (0, i.resolveComponent)("AfsText"),
                g = (0, i.resolveComponent)("Loader"),
                b = (0, i.resolveComponent)("Sidebar"),
                w = (0, i.resolveComponent)("Header"),
                k = (0, i.resolveComponent)("AfsIcon"),
                C = (0, i.resolveComponent)("LibModal"),
                _ = (0, i.resolveComponent)("Watermark"),
                P = (0, i.resolveComponent)("GridContainer"),
                S = (0, i.resolveComponent)("AfsContextMenu");
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)("div", a, [
                  e.isExpired
                    ? ((0, i.openBlock)(),
                      (0, i.createBlock)(
                        v,
                        { key: 0, icon: "expired" },
                        {
                          default: (0, i.withCtx)(function () {
                            return [
                              (0, i.createElementVNode)(
                                "span",
                                s,
                                (0, i.toDisplayString)(
                                  e.$t("viewer.ui.App.expiredMessage"),
                                ),
                                1,
                              ),
                            ];
                          }),
                          meta: (0, i.withCtx)(function () {
                            return [
                              (0, i.createVNode)(
                                h,
                                {
                                  href: "https://365.altium.com/signin",
                                  target: "_blank",
                                },
                                {
                                  default: (0, i.withCtx)(function () {
                                    return [
                                      (0, i.createTextVNode)(
                                        (0, i.toDisplayString)(
                                          e.$t("viewer.ui.App.goTo365"),
                                        ),
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 1,
                                },
                              ),
                            ];
                          }),
                          _: 1,
                        },
                      ))
                    : e.isLoading
                      ? ((0, i.openBlock)(),
                        (0, i.createBlock)(
                          g,
                          {
                            key: 1,
                            icon: e.loaderIcon,
                            "has-icon": e.hasLoaderIcon,
                            "has-error": e.isLoadingFailed,
                            primary: e.isLoaderPrimary,
                          },
                          (0, i.createSlots)(
                            {
                              default: (0, i.withCtx)(function () {
                                return [
                                  Array.isArray(e.loaderMessage)
                                    ? ((0, i.openBlock)(!0),
                                      (0, i.createElementBlock)(
                                        i.Fragment,
                                        { key: 1 },
                                        (0, i.renderList)(
                                          e.loaderMessage,
                                          function (e) {
                                            return (
                                              (0, i.openBlock)(),
                                              (0, i.createElementBlock)(
                                                "span",
                                                { key: e.id },
                                                [
                                                  e.title
                                                    ? ((0, i.openBlock)(),
                                                      (0, i.createBlock)(
                                                        y,
                                                        {
                                                          key: 0,
                                                          class:
                                                            "apps-loader__title",
                                                          type: "large title",
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
                                                                          e.title,
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
                                                  e.text
                                                    ? ((0, i.openBlock)(),
                                                      (0, i.createElementBlock)(
                                                        "span",
                                                        c,
                                                        (0, i.toDisplayString)(
                                                          e.text,
                                                        ),
                                                        1,
                                                      ))
                                                    : (0, i.createCommentVNode)(
                                                      "v-if",
                                                      !0,
                                                    ),
                                                  e.link
                                                    ? ((0, i.openBlock)(),
                                                      (0, i.createBlock)(
                                                        h,
                                                        {
                                                          key: 2,
                                                          href: e.link,
                                                          target: "_blank",
                                                          onClick: function (
                                                            t,
                                                          ) {
                                                            return m.onLinkClick(
                                                              t,
                                                              e,
                                                            );
                                                          },
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
                                                        1032,
                                                        ["href", "onClick"],
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
                                      ))
                                    : ((0, i.openBlock)(),
                                      (0, i.createElementBlock)(
                                        i.Fragment,
                                        { key: 0 },
                                        [
                                          (0, i.createTextVNode)(
                                            (0, i.toDisplayString)(
                                              e.loaderMessage,
                                            ),
                                            1,
                                          ),
                                        ],
                                        2112,
                                      )),
                                ];
                              }),
                              _: 2,
                            },
                            [
                              e.loaderMeta
                                ? {
                                  name: "meta",
                                  fn: (0, i.withCtx)(function () {
                                    return [
                                      (0, i.createTextVNode)(
                                        (0, i.toDisplayString)(e.loaderMeta),
                                        1,
                                      ),
                                    ];
                                  }),
                                }
                                : void 0,
                            ],
                          ),
                          1032,
                          ["icon", "has-icon", "has-error", "primary"],
                        ))
                      : ((0, i.openBlock)(),
                        (0, i.createBlock)(
                          P,
                          { key: 2, size: "remain" },
                          {
                            default: (0, i.withCtx)(function () {
                              return [
                                e.sidebar && !e.sidebar.isHidden
                                  ? ((0, i.openBlock)(),
                                    (0, i.createBlock)(
                                      b,
                                      {
                                        key: 0,
                                        "meta-info": e.sidebar,
                                        ref: e.sidebar.id,
                                        size: e.sidebar.binds.size,
                                        resizable: e.sidebar.binds.resizable,
                                        flex: e.sidebar.binds.flex,
                                        onVnodeMounted: m.onSidebarUpdated,
                                        onVnodeUpdated: m.onSidebarUpdated,
                                      },
                                      (0, i.createSlots)(
                                        {
                                          default: (0, i.withCtx)(function () {
                                            return [
                                              (0, i.createElementVNode)(
                                                "div",
                                                { id: e.sidebar.binds.id },
                                                null,
                                                8,
                                                l,
                                              ),
                                            ];
                                          }),
                                          _: 2,
                                        },
                                        [
                                          e.sidebar.title
                                            ? {
                                              name: "title",
                                              fn: (0, i.withCtx)(function () {
                                                return [
                                                  (0, i.createTextVNode)(
                                                    (0, i.toDisplayString)(
                                                      e.sidebar.title,
                                                    ),
                                                    1,
                                                  ),
                                                ];
                                              }),
                                            }
                                            : void 0,
                                          e.sidebar.subTitle
                                            ? {
                                              name: "subTitle",
                                              fn: (0, i.withCtx)(function () {
                                                return [
                                                  (0, i.createTextVNode)(
                                                    (0, i.toDisplayString)(
                                                      e.sidebar.subTitle,
                                                    ),
                                                    1,
                                                  ),
                                                ];
                                              }),
                                            }
                                            : void 0,
                                        ],
                                      ),
                                      1032,
                                      [
                                        "meta-info",
                                        "size",
                                        "resizable",
                                        "flex",
                                        "onVnodeMounted",
                                        "onVnodeUpdated",
                                      ],
                                    ))
                                  : (0, i.createCommentVNode)("v-if", !0),
                                (0, i.createVNode)(
                                  P,
                                  {
                                    id: "viewer__container",
                                    ref: "viewerContainer",
                                    size: "remain",
                                    class: "app__container",
                                  },
                                  {
                                    default: (0, i.withCtx)(function () {
                                      return [
                                        m.hiddenHeader
                                          ? (0, i.createCommentVNode)(
                                            "v-if",
                                            !0,
                                          )
                                          : ((0, i.openBlock)(),
                                            (0, i.createBlock)(
                                              w,
                                              {
                                                key: 0,
                                                class: "app__header",
                                                ref: "header",
                                                views: e.viewsList,
                                                "global-plugins":
                                                  e.globalPluginsList,
                                                "local-plugins": e.localPlugins,
                                                "onView:change": m.onViewChange,
                                                "onLocalPlugin:click":
                                                  m.onPluginClick,
                                                "onGlobalPlugin:click":
                                                  m.onPluginClick,
                                                onVnodeMounted:
                                                  m.onHeaderUpdated,
                                                onVnodeUpdated:
                                                  m.onHeaderUpdated,
                                              },
                                              null,
                                              8,
                                              [
                                                "views",
                                                "global-plugins",
                                                "local-plugins",
                                                "onView:change",
                                                "onLocalPlugin:click",
                                                "onGlobalPlugin:click",
                                                "onVnodeMounted",
                                                "onVnodeUpdated",
                                              ],
                                            )),
                                        ((0, i.openBlock)(!0),
                                          (0, i.createElementBlock)(
                                            i.Fragment,
                                            null,
                                            (0, i.renderList)(
                                              m.modalsList,
                                              function (t) {
                                                return (
                                                  (0, i.openBlock)(),
                                                  (0, i.createBlock)(
                                                    C,
                                                    (0, i.mergeProps)(
                                                      t.binds,
                                                      {
                                                        key: t.id,
                                                        ref_for: !0,
                                                        ref: t.id,
                                                        "header-bottom":
                                                          e.headerBottom,
                                                      },
                                                      (0, i.toHandlers)(
                                                        t.listeners,
                                                      ),
                                                    ),
                                                    (0, i.createSlots)(
                                                      {
                                                        default: (0, i.withCtx)(
                                                          function () {
                                                            return [
                                                              (0,
                                                                i.createElementVNode)(
                                                                  "div",
                                                                  {
                                                                    id: t.binds.id,
                                                                  },
                                                                  null,
                                                                  8,
                                                                  p,
                                                                ),
                                                            ];
                                                          },
                                                        ),
                                                        _: 2,
                                                      },
                                                      [
                                                        t.header
                                                          ? {
                                                            name: "header",
                                                            fn: (0, i.withCtx)(
                                                              function () {
                                                                return [
                                                                  t.hasBackButton
                                                                    ? ((0,
                                                                      i.openBlock)(),
                                                                      (0,
                                                                        i.createElementBlock)(
                                                                          "button",
                                                                          {
                                                                            key: 0,
                                                                            type: "button",
                                                                            class:
                                                                              "app__back-btn",
                                                                            onClick:
                                                                              (0,
                                                                                i.withModifiers)(
                                                                                  function (
                                                                                    e,
                                                                                  ) {
                                                                                    return m.onBackButtonClick(
                                                                                      t,
                                                                                    );
                                                                                  },
                                                                                  [
                                                                                    "prevent",
                                                                                  ],
                                                                                ),
                                                                          },
                                                                          [
                                                                            (0,
                                                                              i.createVNode)(
                                                                                k,
                                                                                {
                                                                                  name: "utility-chevron-left",
                                                                                  class:
                                                                                    "app__back-btn-icon",
                                                                                },
                                                                              ),
                                                                            (0,
                                                                              i.createElementVNode)(
                                                                                "div",
                                                                                d,
                                                                                (0,
                                                                                  i.toDisplayString)(
                                                                                    t.header,
                                                                                  ),
                                                                                1,
                                                                              ),
                                                                          ],
                                                                          8,
                                                                          u,
                                                                        ))
                                                                    : ((0,
                                                                      i.openBlock)(),
                                                                      (0,
                                                                        i.createElementBlock)(
                                                                          i.Fragment,
                                                                          {
                                                                            key: 1,
                                                                          },
                                                                          [
                                                                            (0,
                                                                              i.createTextVNode)(
                                                                                (0,
                                                                                  i.toDisplayString)(
                                                                                    t.header,
                                                                                  ),
                                                                                1,
                                                                              ),
                                                                          ],
                                                                          2112,
                                                                        )),
                                                                ];
                                                              },
                                                            ),
                                                          }
                                                          : void 0,
                                                      ],
                                                    ),
                                                    1040,
                                                    ["header-bottom"],
                                                  )
                                                );
                                              },
                                            ),
                                            128,
                                          )),
                                        (0, i.createElementVNode)(
                                          "div",
                                          {
                                            class: "app__views",
                                            onContextmenu:
                                              t[0] ||
                                              (t[0] = (0, i.withModifiers)(
                                                function () { },
                                                ["prevent"],
                                              )),
                                          },
                                          [
                                            ((0, i.openBlock)(!0),
                                              (0, i.createElementBlock)(
                                                i.Fragment,
                                                null,
                                                (0, i.renderList)(
                                                  e.viewsList,
                                                  function (e) {
                                                    return (0, i.withDirectives)(
                                                      ((0, i.openBlock)(),
                                                        (0, i.createElementBlock)(
                                                          "div",
                                                          {
                                                            key: e.id,
                                                            ref_for: !0,
                                                            ref: e.id,
                                                            style: (0,
                                                              i.normalizeStyle)(
                                                                m.viewsStyles,
                                                              ),
                                                            class: (0,
                                                              i.normalizeClass)([
                                                                "app__view",
                                                                "app__view_".concat(
                                                                  e.id,
                                                                ),
                                                              ]),
                                                            "data-view": e.id,
                                                          },
                                                          null,
                                                          14,
                                                          f,
                                                        )),
                                                      [[i.vShow, e.isActive]],
                                                    );
                                                  },
                                                ),
                                                128,
                                              )),
                                          ],
                                          32,
                                        ),
                                        (0, i.withDirectives)(
                                          (0, i.createVNode)(
                                            _,
                                            null,
                                            null,
                                            512,
                                          ),
                                          [[i.vShow, m.hasLogo]],
                                        ),
                                      ];
                                    }),
                                    _: 1,
                                  },
                                  512,
                                ),
                              ];
                            }),
                            _: 1,
                          },
                        )),
                  (0, i.createVNode)(
                    S,
                    (0, i.normalizeProps)(
                      (0, i.guardReactiveProps)(m.trimmedTextMenuBind),
                    ),
                    null,
                    16,
                  ),
                ])
              );
            },
          ],
        ]);
      var tt = n(77826),
        nt = n(62091);
      // Use ViewerUtils helpers (replacing rt, it, ot duplicates)
      var rt = ViewerUtils.getType,
        it = ViewerUtils.defineProperties,
        ot = ViewerUtils.toPropertyKey;
      var at = window.ParentEvents, // Extracted to external module ParentEvents.js
        st = {},
        ct = n(48434),
        lt = { class: "apps-loader" },
        ut = { key: 1 },
        dt = n(77232),
        pt = { large: "large", small: "small", error: "error" },
        ft = window.__CORE__;
      // mt (AppsLoader) replaced by Factory
      var ht = Factories.createAppsLoader({
          Vue: i,
          AppLoader: ae,
          AfsLoader: dt.A,
          AfsLink: v.A,
          AfsText: y.A,
          ViewerComponents: ViewerComponents,
          ViewerAppMethods: ViewerAppMethods,
          Core: ft
      });
      var vt = function (e, t) {
        ((0, I.hasOwnProperty)(t, "message") && e.setData("message", t.message),
          (0, I.hasOwnProperty)(t, "meta") && e.setData("meta", t.meta),
          (0, I.hasOwnProperty)(t, "icon") && e.setData("icon", t.icon),
          (0, I.hasOwnProperty)(t, "type") && e.setType(t.type),
          (0, I.hasOwnProperty)(t, "size") && e.setData("size", t.size));
      };
      const yt = function (e, t) {
        var n = document.createElement("div");
        (e = e || document.body).appendChild(n);
        var r = (0, i.createApp)(ht),
          o = r.mount(n);
        return (
          t && vt(o, t),
          {
            update: function (e) {
              return (vt(o, e), this);
            },
            destroy: function () {
              return (
                r.unmount(),
                n.parentNode && e.removeChild(n),
                delete this.update,
                delete this.destroy,
                this
              );
            },
          }
        );
      };
      var gt = ["src"];
      const bt = {
        setup: function (e, t) {
          var n = t.expose,
            r = (0, i.reactive)({ src: null, isLoaded: !1 }),
            o = function () {
              r.isLoaded = !0;
            };
          return (
            n({
              setSrc: function (e) {
                ((r.src = e), (r.isLoaded = !1));
              },
            }),
            function (e, t) {
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)(
                  "div",
                  {
                    class: (0, i.normalizeClass)([
                      "apps-preview",
                      { "is-loaded": (0, i.unref)(r).isLoaded },
                    ]),
                  },
                  [
                    (0, i.createElementVNode)(
                      "img",
                      {
                        src: (0, i.unref)(r).src,
                        class: "apps-preview__img",
                        onLoad: o,
                      },
                      null,
                      40,
                      gt,
                    ),
                  ],
                  2,
                )
              );
            }
          );
        },
      };
      var wt = function (e, t) {
        return t && e.setSrc(t);
      };
      const kt = function (e, t) {
        var n = document.createElement("div");
        (e = e || document.body).appendChild(n);
        var r = (0, i.createApp)(bt),
          o = r.mount(n);
        return (
          wt(o, t),
          {
            update: function (e) {
              return (wt(r, e), this);
            },
            destroy: function () {
              return (
                r.unmount(),
                e.removeChild(n),
                delete this.update,
                delete this.destroy,
                this
              );
            },
          }
        );
      },
        // Ct (AppSnackbar) replaced by Factory
        _t = Factories.createAppSnackbar({
            Vue: i, // i = n(10311)
            AfsSnackbar: n(11539).A,
            Icon: m._, 
            ViewerComponents: ViewerComponents
        });
      var Pt = function (e, t) {
        [
          "text",
          "autoClose",
          "icon",
          "hideClose",
          "position",
          "zIndex",
          "type",
          "primary",
          "iconSprite",
          "spriteFilled",
        ].forEach(function (n) {
          return (0, I.hasOwnProperty)(t, n) && e.setData(n, t[n]);
        });
      };
      const St = function (e, t) {
        var n = document.createElement("div");
        (e = e || document.body).appendChild(n);
        var r = (0, i.createApp)(_t, { containerId: e.id }).mount(n);
        return (
          t && Pt(r, t),
          {
            update: function (e) {
              return (Pt(r, e), this);
            },
            open: function () {
              return (r.open(), this);
            },
            close: function () {
              return (r.close(), this);
            },
          }
        );
      };
      var Et = { key: 1 },
        jt = { key: 1 },
        Ot = (0, i.createTextVNode)("Send feedback "),
        Dt = n(69314),
        Lt = n(53103);
      // Use ViewerUtils helpers (replacing Bt, xt, At, Vt duplicates)
      var Bt = ViewerUtils.getType,
        xt = ViewerUtils.getOwnKeys,
        At = ViewerUtils.objectSpread,
        Vt = ViewerUtils.defineProperty;
      var Tt = window.__CORE__;
      // Nt (AppNotification) replaced by Factory
      const Mt = Factories.createAppNotification({
          Vue: i,
          AfsButtonIcon: Dt.A,
          AfsIcon: m._,
          AfsLink: v.A,
          AfsText: y.A,
          // ContextMenu: h.C, // Assuming h.C is ContextMenu based on Viewer usage
          InjectListDirective: Lt.i,
          ViewerComponents: ViewerComponents,
          Utils: ViewerUtils,
          Core: Tt
      });
      var It = n(70438),
        Rt = {},
        Ft = function (e, t) {
          ((0, I.hasOwnProperty)(t, "text") && e.setData("text", t.text),
            (0, I.hasOwnProperty)(t, "feedbackName") &&
            e.setData("feedbackName", t.feedbackName),
            (0, I.hasOwnProperty)(t, "autoClose") &&
            e.setData("autoClose", t.autoClose),
            (0, I.hasOwnProperty)(t, "icon") && e.setData("icon", t.icon),
            (0, I.hasOwnProperty)(t, "fontStyle") &&
            e.setData("fontStyle", t.fontStyle));
        };
      const Ht = function (e, t, n, r) {
        var o = document.createElement("div"),
          a = [],
          s = [];
        ((e = e || document.body),
          (o.id =
            e.id +
            "-notification-banner-" +
            (t || (0, tt.Z)().substring(0, 8))),
          e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o));
        var c = new It.TinyEmitter(),
          l = (0, i.createApp)(Mt, { containerId: o.id });
        l.provide("appEmitter", c);
        var u = l.mount(o);
        return (
          c.on("close", function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            a.forEach(function (e) {
              return e.apply(void 0, t);
            });
          }),
          c.on("feedback", function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            s.forEach(function (e) {
              return e.apply(void 0, t);
            });
          }),
          r && Ft(u, r),
          n && Rt[n] && null !== Rt[n]
            ? Rt[n].push(u)
            : n && null !== Rt[n] && (Rt[n] = [u]),
          {
            instance: u,
            update: function (e) {
              return (Ft(u, e), this);
            },
            open: function () {
              if (!n || null !== Rt[n]) return (u.open(), this);
            },
            close: function () {
              return (u.close(), this);
            },
            onClose: function (e) {
              (e && !a.includes(e) && a.push(e),
                n &&
                Rt[n] &&
                a.push(function () {
                  (Rt[n].forEach(function (e) {
                    return e.close();
                  }),
                    (Rt[n] = null));
                }));
            },
            onFeedback: function (e) {
              e && !s.includes(e) && s.push(e);
            },
          }
        );
      };
      var zt = { class: "app-menu" },
        Zt = n(12561),
        Ut = n(25668);
      const Gt = {
        name: "TreeItem",
        components: { AfsText: y.A, AfsIcon: m._, Accordion: Ut.U },
        directives: { trim: Zt.t },
        props: {
          item: {
            type: Object,
            default: function () {
              return {};
            },
          },
          level: { type: Number, default: 0 },
          startPadding: { type: [String, Number], default: 32 },
          selectedItem: { type: [String, Number], default: "" },
        },
        data: function () {
          return { refPrefix: "group-", isOpened: !1 };
        },
        computed: {
          paddingLeft: function () {
            return "".concat(+this.startPadding + 24 * +this.level, "px");
          },
          childrenLevel: function () {
            return +this.level + 1;
          },
          isSelected: function () {
            return (
              this.item.selected ||
              this.item.name === this.selectedItem ||
              this.item.id === this.selectedItem
            );
          },
          isIconFilled: function () {
            return !("iconFilled" in this.item) || this.item.iconFilled;
          },
        },
        watch: {
          item: {
            deep: !0,
            handler: function (e) {
              e.selected && this.openTree();
            },
          },
        },
        mounted: function () {
          this.isSelected && this.openTree();
        },
        methods: {
          onItemClick: function (e, t) {
            (null == t || t.target.dispatchEvent(new Event("mouseleave")),
              this.$emit("item-click", e));
          },
          onOpenChange: function () {
            var e, t, n, r;
            (this.isOpened
              ? null === (e = this.$refs) ||
              void 0 === e ||
              null === (t = e.container) ||
              void 0 === t ||
              t.close()
              : null === (n = this.$refs) ||
              void 0 === n ||
              null === (r = n.container) ||
              void 0 === r ||
              r.open(),
              (this.isOpened = !this.isOpened));
          },
          openTree: function () {
            var e, t;
            (null === (e = this.$refs) ||
              void 0 === e ||
              null === (t = e.container) ||
              void 0 === t ||
              t.open(),
              (this.isOpened = !0),
              this.level && this.$emit("open-parent"));
          },
        },
      },
        Wt = (0, ViewerComponents.wrapComponent)(Gt, [
          [
            "render",
            function (e, t, n, r, o, a) {
              var s = (0, i.resolveComponent)("AfsIcon"),
                c = (0, i.resolveComponent)("AfsText"),
                l = (0, i.resolveComponent)("TreeItem", !0),
                u = (0, i.resolveComponent)("Accordion"),
                d = (0, i.resolveDirective)("trim");
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)("div", null, [
                  (0, i.createElementVNode)(
                    "div",
                    {
                      class: (0, i.normalizeClass)([
                        "tree-item",
                        { "is-selected": a.isSelected },
                      ]),
                      style: (0, i.normalizeStyle)({
                        "padding-left": a.paddingLeft,
                      }),
                      onClick:
                        t[1] ||
                        (t[1] = function (e) {
                          return a.onItemClick(n.item, e);
                        }),
                    },
                    [
                      n.item.child && n.item.child.length
                        ? ((0, i.openBlock)(),
                          (0, i.createBlock)(
                            s,
                            {
                              key: 0,
                              class: (0, i.normalizeClass)([
                                "tree-item__acc-icon acc-control",
                                { "is-opened": e.isOpened },
                              ]),
                              name: "arrow-right-8",
                              onClick:
                                t[0] ||
                                (t[0] = (0, i.withModifiers)(
                                  function (e) {
                                    return a.onOpenChange(n.item);
                                  },
                                  ["stop"],
                                )),
                            },
                            null,
                            8,
                            ["class"],
                          ))
                        : (0, i.createCommentVNode)("v-if", !0),
                      (0, i.createVNode)(
                        s,
                        {
                          class: "tree-item__icon",
                          name: n.item.icon,
                          filled: a.isIconFilled,
                        },
                        null,
                        8,
                        ["name", "filled"],
                      ),
                      (0, i.withDirectives)(
                        ((0, i.openBlock)(),
                          (0, i.createBlock)(
                            c,
                            { class: "tree-item__text", ellipsis: "" },
                            {
                              default: (0, i.withCtx)(function () {
                                return [
                                  (0, i.createTextVNode)(
                                    (0, i.toDisplayString)(n.item.name),
                                    1,
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                          )),
                        [[d, { hint: n.item.name, delay: 1 }]],
                      ),
                    ],
                    6,
                  ),
                  n.item.child && n.item.child.length
                    ? ((0, i.openBlock)(),
                      (0, i.createBlock)(
                        u,
                        { key: 0, ref: "container", opened: e.isOpened },
                        {
                          body: (0, i.withCtx)(function () {
                            return [
                              ((0, i.openBlock)(!0),
                                (0, i.createElementBlock)(
                                  i.Fragment,
                                  null,
                                  (0, i.renderList)(n.item.child, function (e) {
                                    return (
                                      (0, i.openBlock)(),
                                      (0, i.createBlock)(
                                        l,
                                        {
                                          key: e.name,
                                          item: e,
                                          level: a.childrenLevel,
                                          onItemClick: a.onItemClick,
                                          onOpenParent: a.openTree,
                                          "selected-item": n.selectedItem,
                                        },
                                        null,
                                        8,
                                        [
                                          "item",
                                          "level",
                                          "onItemClick",
                                          "onOpenParent",
                                          "selected-item",
                                        ],
                                      )
                                    );
                                  }),
                                  128,
                                )),
                            ];
                          }),
                          _: 1,
                        },
                        8,
                        ["opened"],
                      ))
                    : (0, i.createCommentVNode)("v-if", !0),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-b85329d6"],
        ]),
        $t = {
          name: "AppMenu",
          components: { ContextMenu: h.C, TreeItem: Wt },
          inject: [],
          data: function () {
            return { selectedItem: "" };
          },
          computed: {
            startPadding: function () {
              return this.items &&
                this.items.every(function (e) {
                  return !e.child || 0 === e.child.length;
                })
                ? 8
                : 32;
            },
          },
          methods: {
            setData: function (e, t) {
              this[e] = t;
            },
            open: function (e) {
              this.$refs.contextMenu.open(document.body, {
                clientX: null == e ? void 0 : e.x,
                clientY: null == e ? void 0 : e.y,
              });
            },
            close: function () {
              var e;
              null !== (e = this.$refs) && void 0 !== e && e.contextMenu
                ? this.$refs.contextMenu.close()
                : this.onClose();
            },
            onClick: function (e) {
              this.$root.$emit("item-click", e);
            },
            onClose: function () {
              this.$root.$emit("close");
            },
          },
        },
        Yt = (0, ViewerComponents.wrapComponent)($t, [
          [
            "render",
            function (e, t, n, r, o, a) {
              var s = (0, i.resolveComponent)("TreeItem"),
                c = (0, i.resolveComponent)("ContextMenu");
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)("div", zt, [
                  (0, i.createVNode)(
                    c,
                    {
                      id: "dropdown",
                      ref: "contextMenu",
                      type: "dropdown",
                      class: "app-menu__inner",
                      onClose:
                        t[0] ||
                        (t[0] = function (e) {
                          return a.onClose();
                        }),
                      offset: 6,
                      "init-width": 400,
                      "max-width-limit": 600,
                      "max-height-limit": 600,
                      "is-sticky": "",
                      modifiers: { y: "bottom", x: "start" },
                    },
                    {
                      default: (0, i.withCtx)(function () {
                        return [
                          ((0, i.openBlock)(!0),
                            (0, i.createElementBlock)(
                              i.Fragment,
                              null,
                              (0, i.renderList)(e.items, function (t) {
                                return (
                                  (0, i.openBlock)(),
                                  (0, i.createBlock)(
                                    s,
                                    {
                                      key: t.name,
                                      item: t,
                                      "selected-item": e.selectedItem,
                                      startPadding: a.startPadding,
                                      onItemClick: a.onClick,
                                    },
                                    null,
                                    8,
                                    [
                                      "item",
                                      "selected-item",
                                      "startPadding",
                                      "onItemClick",
                                    ],
                                  )
                                );
                              }),
                              128,
                            )),
                        ];
                      }),
                      _: 1,
                    },
                    512,
                  ),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-012bf2a3"],
        ]);
      // Use ViewerUtils helpers (replacing Kt, Xt, qt duplicates)
      var Kt = ViewerUtils.getType,
        Xt = ViewerUtils.defineProperties,
        qt = ViewerUtils.toPropertyKey;
      // ============= SECTION 4: TREE COMPONENTS & MENU MANAGER =============
      var Jt = (function () {
        return (
          (e = function e(t, n) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.data = n),
              (this.closeCallbacks = new Array()),
              (this.itemClickCallbacks = new Array()),
              (this.active = !1),
              (this.container = (null != t ? t : document.body).appendChild(
                document.createElement("div"),
              )));
          }),
          (t = [
            {
              key: "open",
              value: function (e, t) {
                var n = this;
                return (
                  this.vueApp ||
                  ((this.vueApp = (0, i.createApp)(Yt, {
                    onClose: function () {
                      return n.invokeOnClose(!!t);
                    },
                    onItemClick: function (e) {
                      return n.itemClickCallbacks.forEach(function (t) {
                        return t(e);
                      });
                    },
                  })),
                    (this.vueAppInstance = this.vueApp.mount(
                      this.container,
                    ))),
                  this.vueAppInstance &&
                  (this.data &&
                    this.updateVueAppData(this.vueAppInstance, this.data),
                    this.vueAppInstance.open(e),
                    (this.active = !0)),
                  this
                );
              },
            },
            {
              key: "update",
              value: function (e) {
                return (
                  (this.data = e),
                  this.active &&
                  this.vueAppInstance &&
                  this.updateVueAppData(this.vueAppInstance, e),
                  this
                );
              },
            },
            {
              key: "close",
              value: function () {
                return (
                  this.vueAppInstance && this.vueAppInstance.close(),
                  this
                );
              },
            },
            {
              key: "onClose",
              value: function (e) {
                this.closeCallbacks.push(e);
              },
            },
            {
              key: "onItemClick",
              value: function (e) {
                this.itemClickCallbacks.push(e);
              },
            },
            {
              key: "clearSubscribtion",
              value: function () {
                ((this.closeCallbacks.length = 0),
                  (this.itemClickCallbacks.length = 0));
              },
            },
            {
              key: "updateVueAppData",
              value: function (e, t) {
                (void 0 !== t.items && e.setData("items", t.items),
                  void 0 !== t.selectedItem &&
                  e.setData("selectedItem", t.selectedItem));
              },
            },
            {
              key: "invokeOnClose",
              value: function (e) {
                var t = this;
                ((this.active = !1),
                  e &&
                  (0, i.nextTick)(function () {
                    if (t.vueApp)
                      try {
                        (t.clearSubscribtion(),
                          t.vueApp.unmount(),
                          t.container.remove());
                      } finally {
                        ((t.vueApp = void 0), (t.vueAppInstance = void 0));
                      }
                  }),
                  this.closeCallbacks.forEach(function (e) {
                    return e();
                  }));
              },
            },
          ]),
          t && Xt(e.prototype, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t;
      })(),
        Qt = n(727),
        en = n(87785),
        tn = n(56357),
        nn = n(97878),
        rn = n(85843),
        on = n(57455),
        an = n(89471);
      // Use ViewerUtils helpers (replacing sn, cn, ln, un, dn duplicates)
      var sn = ViewerUtils.getType,
        cn = ViewerUtils.getOwnKeys,
        ln = ViewerUtils.defineProperty,
        un = ViewerUtils.defineProperties,
        dn = ViewerUtils.toPropertyKey;
      var pn = !1,
        fn = !1,
        mn = { production: !0, development: !0 },
        hn = {
          Project: "Viewer.WIP",
          Release: "Release.DesignSnapshot",
          MfgPackage: "MfgPackage",
          Upload: "Upload",
          Project_CM: "Project_CM",
        },
        vn = {
          SCHView: "Schematic",
          PCBView: "PCB",
          PCBView3D: "PCB3D",
          FabricationView: "Fabrication",
          GerberCompareView: "GerberCompare",
          CadexView: "MCAD",
          SchematicCompareView: "SchematicCompare",
        },
        yn = window.__CORE__,
        gn = window.AppMonitoring; // Extracted to external module AppMonitoring.js;
      // Use ViewerUtils helpers (replacing bn, wn, kn duplicates)
      var bn = ViewerUtils.getType,
        wn = ViewerUtils.defineProperties,
        kn = ViewerUtils.toPropertyKey;
      var Cn = window.PerformanceTimer; // Extracted to external module PerformanceTimer.js
      // Use ViewerUtils helpers (replacing _n, Pn, Sn duplicates)
      var _n = ViewerUtils.getType,
        Pn = ViewerUtils.defineProperties,
        Sn = ViewerUtils.toPropertyKey;
      var En = window.ViewActivator; // Extracted to external module ViewActivator.js,
        jn = n(66675);
      // Use ViewerUtils helpers (replacing On, Dn, Ln duplicates)
      var On = ViewerUtils.getType,
        Dn = ViewerUtils.defineProperties,
        Ln = ViewerUtils.toPropertyKey;
      function Bn(e, t, n) {
        return (
          (t = An(t)),
          (function (e, t) {
            if (t && ("object" == On(t) || "function" == typeof t)) return t;
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
            xn()
              ? Reflect.construct(t, n || [], An(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function xn() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () { }),
          );
        } catch (e) { }
        return (xn = function () {
          return !!e;
        })();
      }
      function An(e) {
        return (
          (An = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
          An(e)
        );
      }
      function Vn(e, t) {
        return (
          (Vn = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
              return ((e.__proto__ = t), e);
            }),
          Vn(e, t)
        );
      }
      var Tn = (function (e) {
        function t() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = Bn(this, t, arguments))._background =
              e.extractRawBackgroundColor()),
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
              t && Vn(e, t));
          })(t, e),
          (n = t),
          (i = [
            {
              key: "defaultTheme",
              get: function () {
                return this._defaultTheme;
              },
            },
            {
              key: "theme",
              get: function () {
                return this.colorThemeService.theme;
              },
            },
            {
              key: "background",
              get: function () {
                return this._background;
              },
            },
            {
              key: "start",
              value: function (e, t, n) {
                var i,
                  o = this;
                ((this._background = this.extractRawBackgroundColor()),
                  (this._defaultTheme =
                    null !== (i = this.getDefaultTheme(e)) && void 0 !== i
                      ? i
                      : t),
                  (this.colorThemeService = new r.NA({
                    isAudioEnabled: !1,
                    isThemeChangeEnabled: !0,
                    defaultTheme: this.defaultTheme,
                    isDarkContrastEnabled: n.licensesService.hasLicense(
                      "KillSwitch_ColorTheme_DarkContrast",
                    ),
                    url: window.location.href,
                  })),
                  (this.colorThemeService.theme = this.defaultTheme),
                  window.__APP__.parentEvents.on(
                    "update-color-theme",
                    function (e) {
                      return o.updateTheme(e.data);
                    },
                  ),
                  (n.onThemeChanged = this.onThemeChanged.bind(this)),
                  (n.utils.colorStringToRgba =
                    this.colorStringToRgba.bind(this)));
              },
            },
            {
              key: "colorStringToRgba",
              value: function (e, t) {
                return (
                  this.convertColorHexString(e) ||
                  this.convertColorRgbaString(e) ||
                  this.convertColorNameString(e) ||
                  t || { r: 0, g: 0, b: 0, a: 1 }
                );
              },
            },
            {
              key: "convertColorHexString",
              value: function (e) {
                if (e.startsWith("#")) {
                  if (3 === (e = e.slice(1)).length)
                    return {
                      r: parseInt(e.slice(0, 1).concat(e.slice(0, 1)), 16),
                      g: parseInt(e.slice(1, 2).concat(e.slice(1, 2)), 16),
                      b: parseInt(e.slice(2, 3).concat(e.slice(2, 3)), 16),
                      a: 1,
                    };
                  if (6 === e.length)
                    return {
                      r: parseInt(e.slice(0, 2), 16),
                      g: parseInt(e.slice(2, 4), 16),
                      b: parseInt(e.slice(4, 6), 16),
                      a: 1,
                    };
                }
              },
            },
            {
              key: "convertColorRgbaString",
              value: function (e) {
                var t = e.match(
                  /^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*?(\d*\.?\d*)?\)/,
                );
                if (t)
                  return {
                    r: Number(t[1]),
                    g: Number(t[2]),
                    b: Number(t[3]),
                    a: t[4] ? Number(t[4]) : 1,
                  };
              },
            },
            {
              key: "convertColorNameString",
              value: function (e) {
                e = e.toLowerCase();
                var t = window.__CORE__.colorNames[e];
                return t ? this.convertColorHexString(t) : void 0;
              },
            },
            {
              key: "extractRawBackgroundColor",
              value: function () {
                var e = window
                  .getComputedStyle(document.body)
                  .getPropertyValue("--afs-viewer"),
                  t = this.colorStringToRgba(e, {
                    r: 200,
                    g: 200,
                    b: 200,
                    a: 1,
                  }),
                  n = t.r,
                  r = t.g,
                  i = t.b;
                return {
                  css: "#".concat(
                    ((1 << 24) + (n << 16) + (r << 8) + i)
                      .toString(16)
                      .slice(1),
                  ),
                  number: (n << 16) + (r << 8) + i,
                  array: [n, r, i],
                };
              },
            },
            {
              key: "getDefaultTheme",
              value: function (e) {
                if (
                  e &&
                  ((e = e && e.trim().toLowerCase()),
                    ["light", "dark", "dark-contrast"].includes(e))
                )
                  return e;
              },
            },
            {
              key: "updateTheme",
              value: function (e) {
                var t = e || this.defaultTheme,
                  n = this.colorThemeService.theme;
                ((this.colorThemeService.theme = t),
                  n !== t && this.emit("changed"));
              },
            },
            {
              key: "onThemeChanged",
              value: function (e) {
                var t = this,
                  n = function (n) {
                    t._background = t.extractRawBackgroundColor();
                    var r = t.background;
                    try {
                      r && (null == e || e.apply(t, [r, n]));
                    } catch (e) {
                      window.__CORE__
                        .createLogger("ThemeManager")
                        .LogError(
                          "Update theme callback invocation error.",
                          e,
                        );
                    }
                  };
                (n(!0),
                  this.on("changed", function () {
                    return n(!1);
                  }));
              },
            },
          ]),
          i && Dn(n.prototype, i),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, i;
      })(jn.Z),
        Nn = n(25050),
        Mn = n(52017),
        In = n(37631),
        Rn = n(74646),
        Fn = n(2466);
      const Hn =  ViewerI18n.messages["en-US"],
        zn = ViewerI18n.messages["zh-CN"];
      var Zn =  ViewerI18n.SUPPORTED_LOCALES,
        Un = function (e) {
          return e && Zn.includes(e) ? e : Zn[0];
        },
        Gn = n(92815),
        Wn = n(14594);
      function $n(e) {
        return (
          ($n =
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
          $n(e)
        );
      }
      // ============= SECTION 6: ASYNC GENERATOR RUNTIME =============
      function Yn() {
        Yn = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
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
        function u(e, t, n, r) {
          var o = t && t.prototype instanceof y ? t : y,
            a = Object.create(o.prototype),
            s = new L(r || []);
          return (i(a, "_invoke", { value: E(e, n, s) }), a);
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = u;
        var p = "suspendedStart",
          f = "suspendedYield",
          m = "executing",
          h = "completed",
          v = {};
        function y() { }
        function g() { }
        function b() { }
        var w = {};
        l(w, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          C = k && k(k(B([])));
        C && C !== n && r.call(C, a) && (w = C);
        var _ = (b.prototype = y.prototype = Object.create(w));
        function P(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function S(e, t) {
          function n(i, o, a, s) {
            var c = d(e[i], e, o);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == $n(u) && r.call(u, "__await")
                ? t.resolve(u.__await).then(
                  function (e) {
                    n("next", e, a, s);
                  },
                  function (e) {
                    n("throw", e, a, s);
                  },
                )
                : t.resolve(u).then(
                  function (e) {
                    ((l.value = e), a(l));
                  },
                  function (e) {
                    return n("throw", e, a, s);
                  },
                );
            }
            s(c.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (e, r) {
              function i() {
                return new t(function (t, i) {
                  n(e, r, t, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function E(t, n, r) {
          var i = p;
          return function (o, a) {
            if (i === m) throw Error("Generator is already running");
            if (i === h) {
              if ("throw" === o) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = a; ;) {
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
                if (i === p) throw ((i = h), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = m;
              var l = d(t, n, r);
              if ("normal" === l.type) {
                if (((i = r.done ? h : f), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((i = h), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function j(t, n) {
          var r = n.method,
            i = t.iterator[r];
          if (i === e)
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
          var o = d(i, t.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"),
              (n.arg = o.arg),
              (n.delegate = null),
              v
            );
          var a = o.arg;
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
        function O(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function D(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function L(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(O, this),
            this.reset(!0));
        }
        function B(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < t.length;)
                    if (r.call(t, i))
                      return ((n.value = t[i]), (n.done = !1), n);
                  return ((n.value = e), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError($n(t) + " is not iterable");
        }
        return (
          (g.prototype = b),
          i(_, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(b, c, "GeneratorFunction")),
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
                : ((e.__proto__ = b), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          P(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = S),
          (t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new S(u(e, n, r, i), o);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
          }),
          P(_),
          l(_, c, "Generator"),
          l(_, a, function () {
            return this;
          }),
          l(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length;) {
                  var r = n.pop();
                  if (r in t) return ((e.value = r), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (t.values = B),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(D),
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
              function i(r, i) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = e)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
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
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
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
                  return (this.complete(n.completion, n.afterLoc), D(n), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
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
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: B(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      function Kn(e, t) {
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
      function Xn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Kn(Object(n), !0).forEach(function (t) {
              qn(e, t, n[t]);
            })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Kn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function qn(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != $n(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != $n(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == $n(t) ? t : t + "";
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
      function Jn(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function Qn(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = e.apply(t, n);
            function a(e) {
              Jn(o, r, i, a, s, "next", e);
            }
            function s(e) {
              Jn(o, r, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function er(e) {
        return tr.apply(this, arguments);
      }
      function tr() {
        return (tr = Qn(
          Yn().mark(function e(t) {
            var n, r, i, o;
            return Yn().wrap(
              function (e) {
                for (; ;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t["data-viewer-api-url"]) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", t["data-viewer-api-url"]);
                    case 2:
                      ((n = ""), (e.next = 17));
                      break;
                    case 7:
                      return ((r = e.sent), (e.next = 10), r.json());
                    case 10:
                      ((i = e.sent).services.viewer && (n = i.services.viewer),
                        (e.next = 17));
                      break;
                    case 14:
                      ((e.prev = 14),
                        (e.t0 = e.catch(4)),
                        nr.LogWarn(
                          "Load configuration file error. Use built value.",
                          e.t0,
                        ));
                    case 17:
                      return (
                        (o = ["https:", "http:"].find(function (e) {
                          return n.includes(e);
                        })),
                        e.abrupt(
                          "return",
                          o ? n : t["data-service-base-url"] + n,
                        )
                      );
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 14]],
            );
          }),
        )).apply(this, arguments);
      }
      console.log("69668: Defining window.__APP__");
      window.__APP__ = {
        get afsConfig() {
          return { assets: "./assets" };
        },
        createModule: n(65294).Z,
        preview: function (e, t) {
          return e instanceof Element ? kt(e, t) : kt(null, e);
        },
        loader: function (e, t) {
          return e instanceof Element ? yt(e, t) : yt(null, e);
        },
        snackbar: function (e, t) {
          return e instanceof Element ? St(e, t) : St(null);
        },
        notification: function (e, t, n) {
          return e instanceof Element ? Ht(e, t, n) : Ht(null);
        },
        menu: function (e, t) {
          return new Jt(e, t);
        },
        analytics: new gn(),
        eventAttachHelper: new En(Mn.Z),
        parentEvents: new at(),
        licensesService: Nn.Z,
        utils: {
          validator: I,
          debounce: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 500;
            (st[e] && clearTimeout(st[e]),
              (st[e] = setTimeout(function () {
                (t(), delete st[e]);
              }, n)));
          },
          keyboard: ct.Z,
          generateGUID: tt.Z,
          getIcon: nt.Z,
          getAttributeValue: W.kD,
          directives: {
            lazy: en.Z,
            hint: tn.Z,
            domChange: nn.Z,
            highlight: rn.Z,
            resize: on.Z,
            trim: an.Z,
          },
        },
        library: { Vuex: o.ZP },
        sidebarWidth: 0,
        appPerformanceReporter: new Cn(),
        onThemeChanged: null,
        eventEmitters: {
          TypedNames: function () {
            return jn.Z;
          },
          TypedEventMap: function () {
            return Gn.Z;
          },
          TypedEventMapHandlers: function (e) {
            return (0, Wn.Z)(e);
          },
        },
      };
      // ============= SECTION 7: APP INITIALIZATION =============
      var nr = window.__CORE__.createLogger("Index"),
        rr = (function () {
          var e = Qn(
            Yn().mark(function e(t) {
              var n, r, o, a;
              return Yn().wrap(function (e) {
                for (; ;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s = (n = Xn({}, t.attributes))["data-i18n-lang"]),
                        (r = (0, Fn.o)({
                          locale: Un(s),
                          allowComposition: !0,
                          messages: { "en-US": Hn, "zh-CN": zn },
                          missing: function (e, t) {
                            return "[$".concat(t, "$]");
                          },
                        })),
                        (window.__APP__.library.i18n = r.global),
                        window.__APP__.licensesService.setup(
                          n["data-license-features"],
                        ),
                        new Tn().start(n["data-theme"], "dark", window.__APP__),
                        (o =
                          null == n
                            ? void 0
                            : n["data-external-styles-link"]) && (0, Qt.Z)(o),
                        (window.__DATA_SERVICE_URL__ =
                          n["data-service-base-url"]),
                        (e.next = 11),
                        er(n)
                      );
                    case 11:
                      return (
                        (window.__VIEWER_DOMAIN__ = e.sent),
                        (a = (0, i.createApp)(et, {
                          domain: window.__VIEWER_DOMAIN__,
                          coreInitialData: {
                            designUrl: t.designUrl,
                            userPluginsNames: Array.isArray(t.userPluginsNames)
                              ? t.userPluginsNames
                              : [],
                            modulesNamesToUrls: ViewerAppConfig.getModulesNamesToUrls(),
                            attributes: n,
                          },
                        })
                          .use(Mn.Z)
                          .use(In.X)
                          .use(Rn.K)
                          .use(r)).mount("#viewer-app"),
                        e.abrupt("return", a)
                      );
                    case 15:
                    case "end":
                      return e.stop();
                  }
                var s;
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      const ir = function (e) {
        var t = e.url;
        return (0, r.qv)(e, function (e) {
          return fetch(t, { body: e.body, method: "POST" })
            .then(function (e) {
              429 === e.status &&
                window.__APP__.analytics.dispatchAnalyticsEvent(
                  "AppMonitoring.NotSent.RateLimit",
                );
            })
            .catch(function () {
              var n,
                r = window.__CORE__,
                i =
                  null !== (n = r.response.designId) && void 0 !== n
                    ? n
                    : (0, W.kD)("data-project-src", ""),
                o =
                  window.__VIEWER_DOMAIN__ +
                  "/api/monitoringtunnel?source_id=".concat(i),
                a = Object.assign({}, r.apiHeaders, {
                  "Content-Type": "text/plain;charset=UTF-8",
                  Accept: "*/*",
                  Dsn: t,
                });
              fetch(o, { body: e.body, method: "POST", headers: a }).catch(
                function () {
                  return window.__APP__.analytics.dispatchAnalyticsEvent(
                    "AppMonitoring.NotSent.TunnelError",
                  );
                },
              );
            });
        });
      };
      var or = n(73791);
      function ar(e) {
        return (
          (ar =
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
          ar(e)
        );
      }
      function sr() {
        sr = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
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
        function u(e, t, n, r) {
          var o = t && t.prototype instanceof y ? t : y,
            a = Object.create(o.prototype),
            s = new L(r || []);
          return (i(a, "_invoke", { value: E(e, n, s) }), a);
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = u;
        var p = "suspendedStart",
          f = "suspendedYield",
          m = "executing",
          h = "completed",
          v = {};
        function y() { }
        function g() { }
        function b() { }
        var w = {};
        l(w, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          C = k && k(k(B([])));
        C && C !== n && r.call(C, a) && (w = C);
        var _ = (b.prototype = y.prototype = Object.create(w));
        function P(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function S(e, t) {
          function n(i, o, a, s) {
            var c = d(e[i], e, o);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == ar(u) && r.call(u, "__await")
                ? t.resolve(u.__await).then(
                  function (e) {
                    n("next", e, a, s);
                  },
                  function (e) {
                    n("throw", e, a, s);
                  },
                )
                : t.resolve(u).then(
                  function (e) {
                    ((l.value = e), a(l));
                  },
                  function (e) {
                    return n("throw", e, a, s);
                  },
                );
            }
            s(c.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (e, r) {
              function i() {
                return new t(function (t, i) {
                  n(e, r, t, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function E(t, n, r) {
          var i = p;
          return function (o, a) {
            if (i === m) throw Error("Generator is already running");
            if (i === h) {
              if ("throw" === o) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = a; ;) {
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
                if (i === p) throw ((i = h), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = m;
              var l = d(t, n, r);
              if ("normal" === l.type) {
                if (((i = r.done ? h : f), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((i = h), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function j(t, n) {
          var r = n.method,
            i = t.iterator[r];
          if (i === e)
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
          var o = d(i, t.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"),
              (n.arg = o.arg),
              (n.delegate = null),
              v
            );
          var a = o.arg;
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
        function O(e) {
          var t = { tryLoc: e[0] };
          (1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t));
        }
        function D(e) {
          var t = e.completion || {};
          ((t.type = "normal"), delete t.arg, (e.completion = t));
        }
        function L(e) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(O, this),
            this.reset(!0));
        }
        function B(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < t.length;)
                    if (r.call(t, i))
                      return ((n.value = t[i]), (n.done = !1), n);
                  return ((n.value = e), (n.done = !0), n);
                };
              return (o.next = o);
            }
          }
          throw new TypeError(ar(t) + " is not iterable");
        }
        return (
          (g.prototype = b),
          i(_, "constructor", { value: b, configurable: !0 }),
          i(b, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(b, c, "GeneratorFunction")),
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
                : ((e.__proto__ = b), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          P(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = S),
          (t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new S(u(e, n, r, i), o);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
          }),
          P(_),
          l(_, c, "Generator"),
          l(_, a, function () {
            return this;
          }),
          l(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length;) {
                  var r = n.pop();
                  if (r in t) return ((e.value = r), (e.done = !1), e);
                }
                return ((e.done = !0), e);
              }
            );
          }),
          (t.values = B),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(D),
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
              function i(r, i) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = e)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
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
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
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
                  return (this.complete(n.completion, n.afterLoc), D(n), v);
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
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
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: B(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                v
              );
            },
          }),
          t
        );
      }
      // ============= SECTION 8: APP EXECUTION (DEOBFUSCATED) =============
      
      /**
       * Async generator step executor
       * Handles stepping through async generator with proper promise resolution
       * @param {Generator} generator - The generator instance
       * @param {Function} resolve - Promise resolve callback
       * @param {Function} reject - Promise reject callback
       * @param {Function} handleNext - Next value handler
       * @param {Function} handleThrow - Throw handler
       * @param {string} method - Either "next" or "throw"
       * @param {*} value - Value to pass to generator
       */
      function asyncGeneratorStep(generator, resolve, reject, handleNext, handleThrow, method, value) {
        try {
          var result = generator[method](value);
          var resultValue = result.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (result.done) {
          resolve(resultValue);
        } else {
          Promise.resolve(resultValue).then(handleNext, handleThrow);
        }
      }

      /**
       * Convert async generator function to promise-returning function
       * (Babel async-to-generator runtime helper)
       * @param {GeneratorFunction} generatorFn - The generator function
       * @returns {Function} Function that returns a Promise
       */
      function asyncToPromise(generatorFn) {
        return function() {
          var self = this;
          var args = arguments;
          return new Promise(function(resolve, reject) {
            var generator = generatorFn.apply(self, args);
            
            function handleNext(value) {
              asyncGeneratorStep(generator, resolve, reject, handleNext, handleThrow, "next", value);
            }
            
            function handleThrow(error) {
              asyncGeneratorStep(generator, resolve, reject, handleNext, handleThrow, "throw", error);
            }
            
            handleNext(undefined);
          });
        };
      }

      /**
       * Check if running in embed/oembed mode and initialize accordingly
       * Parses URL parameters to detect embed mode and configures the viewer
       * @returns {Promise<boolean>} True if embed mode was detected and initialized
       */
      function checkEmbedModeAndInitialize() {
        return checkEmbedModeAndInitializeAsync.apply(this, arguments);
      }
      
      function checkEmbedModeAndInitializeAsync() {
        return (checkEmbedModeAndInitializeAsync = asyncToPromise(
          sr().mark(function embedModeCheck() {
            var queryString, urlParams, featureParam, isEmbedMode;
            var referrerUrl, embedConfig, sourceUrl, activeView;
            var settingsResponse, settingsData, appConfig;
            
            return sr().wrap(function(context) {
              for (;;)
                switch ((context.prev = context.next)) {
                  case 0:
                    // Check if URL has query string
                    queryString = window.location.search;
                    if (!queryString) {
                      context.next = 30;
                      break;
                    }
                    
                    // Parse URL parameters
                    urlParams = new URLSearchParams(queryString);
                    featureParam = urlParams.get("feature");
                    isEmbedMode = "embed" === featureParam;
                    
                    // Only proceed if oembed or embed mode
                    if ("oembed" !== featureParam && !isEmbedMode) {
                      context.next = 30;
                      break;
                    }
                    
                    // Build embed configuration
                    referrerUrl = document.referrer;
                    embedConfig = {};
                    sourceUrl = urlParams.get("source") || "";
                    activeView = urlParams.get("activeView");
                    
                    embedConfig.domainOrigin = referrerUrl;
                    embedConfig["data-project-src"] = sourceUrl;
                    embedConfig["data-comment-panel-hide"] = "true";
                    
                    if (activeView) {
                      embedConfig["data-active-view"] = activeView;
                    }
                    
                    // Fetch embed settings
                    context.prev = 15;
                    context.next = 18;
                    return w().get("embed/settings");
                    
                  case 18:
                    settingsResponse = context.sent;
                    settingsData = settingsResponse.data;
                    embedConfig["data-register-url"] = settingsData.a365SignUpUrl;
                    context.next = 26;
                    break;
                    
                  case 23:
                    context.prev = 23;
                    context.t0 = context.catch(15);
                    appLogger.LogError("Get embedded viewer sign up url.", context.t0);
                    
                  case 26:
                    // Build app config and load application
                    appConfig = {
                      id: window.__APP__.utils.generateGUID(),
                      src: embedConfig
                    };
                    context.next = 29;
                    return loadApplication(appConfig);
                    
                  case 29:
                    return context.abrupt("return", true);
                    
                  case 30:
                    return context.abrupt("return", false);
                    
                  case 31:
                  case "end":
                    return context.stop();
                }
            }, embedModeCheck, null, [[15, 23]]);
          })
        )).apply(this, arguments);
      }

      /**
       * Load and initialize the viewer application
       * @param {Object} config - Application configuration
       * @param {string} config.id - Unique iframe/instance ID
       * @param {Object} config.src - Data attributes for the viewer
       * @param {string} [config.scheme] - HTTP scheme (defaults to "https")
       * @param {number} [config.duration] - Initial duration for performance reporting
       */
      function loadApplication(config) {
        return loadApplicationAsync.apply(this, arguments);
      }
      
      function loadApplicationAsync() {
        return (loadApplicationAsync = asyncToPromise(
          sr().mark(function loadApp(config) {
            var initialDuration, vueAppInstance;
            
            return sr().wrap(function(context) {
              for (;;)
                switch ((context.prev = context.next)) {
                  case 0:
                    appLogger.LogInfo("Run application");
                    
                    // Set HTTP scheme
                    window.currentHttpScheme = config.scheme || "https";
                    
                    // Prevent duplicate initialization
                    if (!window.__iframeId) {
                      context.next = 4;
                      break;
                    }
                    return context.abrupt("return");
                    
                  case 4:
                    // Store iframe ID
                    window.__iframeId = config.id;
                    
                    // Create and mount Vue application
                    context.next = 7;
                    return rr({
                      designUrl: config.src["data-project-src"],
                      attributes: config.src
                    });
                    
                  case 7:
                    vueAppInstance = context.sent;
                    
                    // Set initial performance duration
                    initialDuration = config.duration !== null && config.duration !== undefined 
                      ? config.duration 
                      : 0;
                    window.__APP__.appPerformanceReporter.setInitialDuration(initialDuration);
                    
                    // Initialize monitoring service
                    window.__APP__.appMonitoring = new r.KX({
                      app: vueAppInstance,
                      url: config.src["data-monitoring-url"] || "",
                      env: config.src["data-monitoring-env"] || "",
                      isEnabled: 
                        "true" === config.src["data-monitoring-enabled"] &&
                        "true" === config.src["data-is-ccv"],
                      customTransport: customMonitoringTransport,
                      tags: {
                        tenantId: config.src["data-workspace-id"] || "",
                        entityId: config.src["data-project-src"],
                        appName: "Standalone Viewer"
                      },
                      userId: config.src["data-user-id"] || "",
                      
                      /**
                       * Filter breadcrumb data before sending
                       * Strips non-object console arguments and sanitizes messages
                       */
                      beforeBreadcrumb: function(breadcrumb) {
                        // Skip non-console breadcrumbs
                        if ("console" !== breadcrumb.category) {
                          return breadcrumb;
                        }
                        
                        // Sanitize message content
                        if (breadcrumb.message) {
                          breadcrumb.message = (0, or.T)(breadcrumb.message);
                        }
                        
                        // Filter to only object arguments
                        if (
                          breadcrumb.data !== null &&
                          breadcrumb.data !== undefined &&
                          breadcrumb.data.arguments &&
                          breadcrumb.data.arguments.length
                        ) {
                          var objectArgs = breadcrumb.data.arguments.filter(function(arg) {
                            return "object" === ar(arg);
                          });
                          
                          if (objectArgs.length) {
                            breadcrumb.data = { arguments: objectArgs };
                          } else {
                            breadcrumb.data = undefined;
                          }
                        }
                        
                        return breadcrumb;
                      }
                    });
                    
                  case 10:
                  case "end":
                    return context.stop();
                }
            }, loadApp);
          })
        )).apply(this, arguments);
      }

      // Alias for backward compatibility
      var appLogger = nr;
      var customMonitoringTransport = ir;

      // ============= APPLICATION ENTRY POINT =============
      /**
       * Main application initialization
       * 1. Check if running in embed mode
       * 2. If not embed mode, listen for 'app:load' event from parent
       */
      (function initializeApplication() {
        return checkEmbedModeAndInitialize();
      })()
        .then(function(wasEmbedMode) {
          console.log("App: Registering app:load listener. wasEmbedMode =", wasEmbedMode);
          
          // If not embed mode, wait for parent to send load event
          if (!wasEmbedMode) {
            window.__APP__.parentEvents.on("app:load", function(loadConfig) {
              console.log("App: Event received", loadConfig);
              loadApplication(loadConfig);
            });
          }
        })
        .catch(function(error) {
          return appLogger.LogError("Run application error.", error);
        });
    }
  }
]);