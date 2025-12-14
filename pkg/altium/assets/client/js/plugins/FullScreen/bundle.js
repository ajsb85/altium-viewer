"use strict";

/**
 * FullScreen Plugin for Altium Web Viewer
 * Author: Alexander Salas Bastidas
 * IEEE Member 41608430
 * Email: a.salas@ieee.org
 * ORCID: 0000-0003-1735-203X
 * GitHub: ajsb85
 */

(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
    [61941],
    {
        64967: (exports, module, require) => {
            const urlParamUtils = require(67674);

            // Type checking utility
            function getType(value) {
                return typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                    ? typeof value
                    : value && typeof Symbol === "function" && value.constructor === Symbol && value !== Symbol.prototype
                        ? "symbol"
                        : typeof value;
            }

            // Class property definition helper
            function defineProperties(target, properties) {
                for (let i = 0; i < properties.length; i++) {
                    const descriptor = properties[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
                }
            }

            // Constructor invocation helper
            function callSuper(instance, Constructor, args) {
                Constructor = getPrototypeOf(Constructor);
                return invokeConstructor(
                    instance,
                    isNativeReflectConstruct()
                        ? Reflect.construct(Constructor, args || [], getPrototypeOf(instance).constructor)
                        : Constructor.apply(instance, args)
                );
            }

            function invokeConstructor(instance, result) {
                if (result && (getType(result) === "object" || typeof result === "function")) {
                    return result;
                }
                if (result !== undefined) {
                    throw new TypeError("Derived constructors may only return object or undefined");
                }
                if (instance === undefined) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return instance;
            }

            // Check if native Reflect.construct is available
            function isNativeReflectConstruct() {
                try {
                    var isSupported = !Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () { })
                    );
                } catch (error) { }
                return (isNativeReflectConstruct = function () {
                    return !!isSupported;
                })();
            }

            function getPrototypeOf(object) {
                return Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (obj) {
                        return obj.__proto__ || Object.getPrototypeOf(obj);
                    }(object);
            }

            function setPrototypeOf(child, parent) {
                return Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (obj, proto) {
                        obj.__proto__ = proto;
                        return obj;
                    }(child, parent);
            }

            function defineProperty(object, key, value) {
                key = toPropertyKey(key);
                if (key in object) {
                    Object.defineProperty(object, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                    });
                } else {
                    object[key] = value;
                }
                return object;
            }

            function toPropertyKey(key) {
                const converted = toPrimitive(key);
                return getType(converted) === "symbol" ? converted : converted + "";
            }

            function toPrimitive(value) {
                if (getType(value) !== "object" || !value) return value;
                const primitiveMethod = value[Symbol.toPrimitive];
                if (primitiveMethod !== undefined) {
                    const result = primitiveMethod.call(value, "string");
                    if (getType(result) !== "object") return result;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(value);
            }

            // Application globals
            const core = window.__CORE__;
            const createModule = window.__APP__.createModule;
            const translate = window.__APP__.library.i18n.t;
            const app = window.__APP__;
            const analytics = app.analytics;
            const parentEvents = app.parentEvents;
            const getIcon = app.utils.getIcon;

            // Configuration flags from URL parameters
            const isOutsideFullscreenEnabled = "true" === urlParamUtils.kD("data-outside-fullscreen", false);
            const isForceOutsideFullscreen = "true" === urlParamUtils.kD("data-force-outside-fullscreen", false);

            // FullScreen Plugin Module
            const FullScreenPlugin = createModule({
                type: "Plugin",
                name: "FullScreen",
                description: "FullScreen",
                create: function (BasePlugin) {
                    return new (class FullScreenPluginClass extends BasePlugin {
                        constructor() {
                            super({
                                name: "FullScreen",
                                displayIcon: getIcon("viewer-fullscreen-16", "fullscreen-16"),
                                comment: "FullScreen",
                                description: "FullScreen",
                                order: 5,
                                hint: translate("viewer.plugins.FullScreen.hint"),
                                preventModalClose: true,
                                disableActiveBtnState: true,
                            });

                            this.screenExpanded = false;
                            this.fullScreenEvent = this.getFullScreenEvent();

                            this.changeScreenExpanded = () => {
                                if (this.screenExpanded) {
                                    this.screenExpanded = false;
                                    document.removeEventListener(
                                        this.fullScreenEvent,
                                        this.changeScreenExpanded
                                    );
                                    core.bus.emit("FullScreen:disable");
                                } else {
                                    this.screenExpanded = true;
                                }
                            };
                        }

                        get hidden() {
                            return this.isHidden;
                        }

                        setup() {
                            // Hide plugin if fullscreen API is not available and outside fullscreen is not enabled
                            if (!this.fullScreenEvent && !isOutsideFullscreenEnabled) {
                                this.isHidden = true;
                                core.bus.emit("Fullscreen:updateInterface", { hidden: true });
                            }
                            return Promise.resolve();
                        }

                        activate() {
                            // Update icon to exit fullscreen
                            core.bus.emit("FullScreen:updateInterface", {
                                displayIcon: getIcon("viewer-fullscreen-cancel-16", "fullscreen-cancel-16"),
                            });

                            // Track analytics event
                            analytics.dispatchClickEvent("Fullscreen", { action: "Fullscreen" });

                            // Handle forced outside fullscreen mode
                            if (isForceOutsideFullscreen) {
                                return this.emitFullscreenEventToParentWindow(true);
                            }

                            // Handle native fullscreen API
                            if (this.fullScreenEvent) {
                                if (this.isIpad()) {
                                    this.addIpadClass();
                                }
                                this.toggleFullScreen();
                                document.addEventListener(
                                    this.fullScreenEvent,
                                    this.changeScreenExpanded
                                );
                            } else if (isOutsideFullscreenEnabled) {
                                // Fallback to parent window fullscreen
                                this.emitFullscreenEventToParentWindow(true);
                            }
                        }

                        deactivate() {
                            // Update icon to enter fullscreen
                            core.bus.emit("FullScreen:updateInterface", {
                                displayIcon: getIcon("viewer-fullscreen-16", "fullscreen-16"),
                            });

                            if (isForceOutsideFullscreen) {
                                return this.emitFullscreenEventToParentWindow(false);
                            }

                            if (this.isIpad()) {
                                this.removeIpadClass();
                            }

                            if (this.fullScreenEvent) {
                                if (this.screenExpanded) {
                                    this.toggleFullScreen();
                                }
                            } else {
                                this.emitFullscreenEventToParentWindow(false);
                            }
                        }

                        getFullScreenEvent() {
                            const documentElement = window.document.documentElement;
                            const fullScreenEvents = {
                                requestFullscreen: "fullscreenchange",
                                webkitRequestFullScreen: "webkitfullscreenchange",
                                mozRequestFullScreen: "mozfullscreenchange",
                                msRequestFullscreen: "MSFullscreenChange",
                            };

                            for (const method in fullScreenEvents) {
                                if (documentElement[method]) {
                                    return fullScreenEvents[method];
                                }
                            }
                            return null;
                        }

                        toggleFullScreen() {
                            const doc = window.document;
                            const docElement = doc.documentElement;

                            const requestFullScreen =
                                docElement.requestFullscreen ||
                                docElement.mozRequestFullScreen ||
                                docElement.webkitRequestFullScreen ||
                                docElement.msRequestFullscreen;

                            const exitFullScreen =
                                doc.exitFullscreen ||
                                doc.mozCancelFullScreen ||
                                doc.webkitExitFullscreen ||
                                doc.msExitFullscreen;

                            const isCurrentlyFullScreen =
                                doc.fullscreenElement ||
                                doc.mozFullScreenElement ||
                                doc.webkitFullscreenElement ||
                                doc.msFullscreenElement;

                            if (isCurrentlyFullScreen) {
                                exitFullScreen.call(doc);
                            } else {
                                requestFullScreen.call(docElement);
                            }
                        }

                        isIpad() {
                            return !!(
                                navigator.userAgent.match(/(iPad)/) ||
                                (navigator.platform === "MacIntel" && navigator.standalone !== undefined)
                            );
                        }

                        addIpadClass() {
                            document.querySelector(".app").classList.add("app_ipad-fullscreen");
                        }

                        removeIpadClass() {
                            document.querySelector(".app").classList.remove("app_ipad-fullscreen");
                        }

                        emitFullscreenEventToParentWindow(isFullscreen) {
                            parentEvents.emit("viewer:fullscreen", isFullscreen);
                        }
                    })();
                },
            });

            // Register plugin with core system
            if (window.__CORE__) {
                window.__CORE__.addModule(FullScreenPlugin);
            }
        },
    },
    (webpackRequire) => {
        webpackRequire.O(0, [21759], () => webpackRequire(webpackRequire.s = 64967));
        webpackRequire.O();
    },
]);