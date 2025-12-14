/**
 * FullScreen Plugin
 * 
 * Toggle fullscreen mode for the viewer.
 */
"use strict";

(function () {
    var CORE = window.__CORE__;
    var APP = window.__APP__;

    if (!CORE || !APP) {
        console.error("[FullScreen] CORE or APP not found.");
        return;
    }

    var createModule = APP.createModule;
    var t = APP.library.i18n.t;
    var analytics = APP.analytics;
    var parentEvents = APP.parentEvents;
    var getIcon = APP.utils.getIcon;

    // Get data attributes helper
    var getDataAttribute = function (name, defaultValue) {
        var scripts = document.querySelectorAll("script");
        for (var i = 0; i < scripts.length; i++) {
            var val = scripts[i].getAttribute(name);
            if (val !== null) return val;
        }
        return defaultValue;
    };

    var outsideFullscreen = "true" === getDataAttribute("data-outside-fullscreen", "false");
    var forceOutsideFullscreen = "true" === getDataAttribute("data-force-outside-fullscreen", "false");

    // Create and register module
    var module = createModule({
        type: "Plugin",
        name: "FullScreen",
        description: "FullScreen",
        create: function (BaseClass) {
            // Define class INSIDE create() to properly extend BaseClass
            function FullScreenPlugin() {
                var self = this;

                // Call base class - pass config object array
                BaseClass.call(this, {
                    name: "FullScreen",
                    displayIcon: getIcon("viewer-fullscreen-16", "fullscreen-16"),
                    comment: "FullScreen",
                    description: "FullScreen",
                    order: 5,
                    hint: t("viewer.plugins.FullScreen.hint"),
                    preventModalClose: true,
                    disableActiveBtnState: true
                });

                this.screenExpanded = false;
                this.isHidden = false;
                this.fullScreenEvent = this.getFullScreenEvent();

                this.changeScreenExpanded = function () {
                    if (self.screenExpanded) {
                        self.screenExpanded = false;
                        document.removeEventListener(self.fullScreenEvent, self.changeScreenExpanded);
                        CORE.bus.emit("FullScreen:disable");
                    } else {
                        self.screenExpanded = true;
                    }
                };
            }

            // Inherit from BaseClass
            FullScreenPlugin.prototype = Object.create(BaseClass.prototype);
            FullScreenPlugin.prototype.constructor = FullScreenPlugin;

            // hidden property
            Object.defineProperty(FullScreenPlugin.prototype, "hidden", {
                get: function () { return this.isHidden; }
            });

            // Setup
            FullScreenPlugin.prototype.setup = function () {
                if (!this.fullScreenEvent && !outsideFullscreen) {
                    this.isHidden = true;
                    CORE.bus.emit("Fullscreen:updateInterface", { hidden: true });
                }
                return Promise.resolve();
            };

            // Activate
            FullScreenPlugin.prototype.activate = function () {
                var self = this;

                if (this.isIpad()) {
                    this.addIpadClass();
                    this.emitFullscreenEventToParentWindow(true);
                    CORE.bus.emit("Fullscreen:activate");
                    return;
                }

                if (outsideFullscreen || forceOutsideFullscreen) {
                    this.emitFullscreenEventToParentWindow(true);
                    return;
                }

                document.addEventListener(this.fullScreenEvent, this.changeScreenExpanded);
                this.toggleFullScreen();
                analytics.event("fullscreen", "clicked");

                CORE.bus.once("FullScreen:disable", function () {
                    self.isOpened = false;
                });

                CORE.bus.emit("Fullscreen:activate");
            };

            // Deactivate
            FullScreenPlugin.prototype.deactivate = function () {
                if (this.isIpad()) {
                    this.removeIpadClass();
                    this.emitFullscreenEventToParentWindow(false);
                    CORE.bus.emit("FullScreen:disable");
                    return;
                }

                if (outsideFullscreen || forceOutsideFullscreen) {
                    this.emitFullscreenEventToParentWindow(false);
                    return;
                }

                this.toggleFullScreen();
            };

            // Get fullscreen event name
            FullScreenPlugin.prototype.getFullScreenEvent = function () {
                if (document.exitFullscreen !== undefined) return "fullscreenchange";
                if (document.webkitExitFullscreen !== undefined) return "webkitfullscreenchange";
                if (document.mozCancelFullScreen !== undefined) return "mozfullscreenchange";
                if (document.msExitFullscreen !== undefined) return "MSFullscreenChange";
                return null;
            };

            // Toggle fullscreen
            FullScreenPlugin.prototype.toggleFullScreen = function () {
                var doc = window.document;
                var docEl = doc.documentElement;

                var requestFullscreen = docEl.requestFullscreen ||
                    docEl.mozRequestFullScreen ||
                    docEl.webkitRequestFullScreen ||
                    docEl.msRequestFullscreen;

                var exitFullscreen = doc.exitFullscreen ||
                    doc.mozCancelFullScreen ||
                    doc.webkitExitFullscreen ||
                    doc.msExitFullscreen;

                var isFullscreen = doc.fullscreenElement ||
                    doc.mozFullScreenElement ||
                    doc.webkitFullscreenElement ||
                    doc.msFullscreenElement;

                if (isFullscreen) {
                    exitFullscreen.call(doc);
                } else {
                    requestFullscreen.call(docEl);
                }
            };

            // iPad detection
            FullScreenPlugin.prototype.isIpad = function () {
                return !!(navigator.userAgent.match(/(iPad)/) ||
                    (navigator.platform === "MacIntel" && navigator.standalone !== undefined));
            };

            FullScreenPlugin.prototype.addIpadClass = function () {
                var app = document.querySelector(".app");
                if (app) app.classList.add("app_ipad-fullscreen");
            };

            FullScreenPlugin.prototype.removeIpadClass = function () {
                var app = document.querySelector(".app");
                if (app) app.classList.remove("app_ipad-fullscreen");
            };

            FullScreenPlugin.prototype.emitFullscreenEventToParentWindow = function (enabled) {
                parentEvents.emit("viewer:fullscreen", enabled);
            };

            // Return new instance
            return new FullScreenPlugin();
        }
    });

    CORE.addModule(module);

    console.log("[FullScreen] Plugin registered via addModule");
})();
