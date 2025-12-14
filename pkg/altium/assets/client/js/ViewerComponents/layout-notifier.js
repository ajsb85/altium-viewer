/**
 * ViewerComponents/layout-notifier.js
 * 
 * AppLayoutUpdateNotifier class
 * Extracted from ViewerComponents.js for modularity.
 */
(function(global) {
    'use strict';

    var ViewerComponents = global.ViewerComponents;
    var Factories = ViewerComponents.Factories;

    /**
     * AppLayoutUpdateNotifier Class
     */
    Factories.AppLayoutUpdateNotifier = function(Core) {
         var e, t;
         return (function () {
            return (
              (e = function e(t) {
                var n = this;
                (!(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.bus = t),
                  (this.windowWidth = 0),
                  (this.windowHeight = 0),
                  (this.headerHeight = 0),
                  (this.sidebarWidth = 0),
                  (this.updated = !1),
                  (this.modals = new Map()),
                  (this.logger = Core.createLogger(
                    "App:AppLayoutUpdateNotifier",
                  )),
                  (this.onWindowResize = function () {
                    ((n.windowWidth = window.innerWidth),
                      (n.windowHeight = window.innerHeight),
                      n.updateLayout());
                  }));
              }),
              (t = [
                {
                  key: "initialize",
                  value: function () {
                    (window.addEventListener("resize", this.onWindowResize),
                      this.onWindowResize());
                  },
                },
                {
                  key: "setHeaderHeight",
                  value: function (e) {
                    Number.isFinite(e) &&
                      e !== this.headerHeight &&
                      ((this.headerHeight = e), this.updateLayoutImmediate());
                  },
                },
                {
                  key: "setSideBarWidth",
                  value: function (e) {
                    Number.isFinite(e) &&
                      e !== this.sidebarWidth &&
                      ((window.__APP__.sidebarWidth = e),
                        (this.sidebarWidth = e),
                        this.updateLayoutImmediate());
                  },
                },
                {
                  key: "addModal",
                  value: function (e) {
                    (this.modals.set(e.id, Object.assign({}, e)),
                      this.updateLayoutImmediate());
                  },
                },
                {
                  key: "removeModal",
                  value: function (e) {
                    this.modals.delete(e) && this.updateLayoutImmediate();
                  },
                },
                {
                  key: "updateLayoutImmediate",
                  value: function () {
                    this.updateLayout();
                  },
                },
                {
                  key: "updateLayout",
                  value: function () {
                    var e = this;
                    this.updated ||
                      ((this.updated = !0),
                      requestAnimationFrame(function () {
                        (e.updated = !1),
                          e.bus.emit("layout:update", {
                            windowWidth: e.windowWidth,
                            windowHeight: e.windowHeight,
                            headerHeight: e.headerHeight,
                            sidebarWidth: e.sidebarWidth,
                            modals: Array.from(e.modals.values()),
                          });
                      }));
                  },
                },
              ]) && Factories.defineProperties(e.prototype, t),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          })();
    };

    console.log('[ViewerComponents/layout-notifier] Loaded');

})(typeof window !== 'undefined' ? window : this);
