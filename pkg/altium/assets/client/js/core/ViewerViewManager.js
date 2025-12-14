/**
 * ViewerViewManager.js
 * 
 * Manages view registration, activation, and switching.
 * Extracts view-related logic from the main ViewerApp component.
 * 
 * Dependencies: ViewerAppConfig, ViewerPluginManager, Ne.Z.bus (global reference via args)
 */

var ViewerViewManager = (function (Config) {
    'use strict';

    /**
     * Sets the initial view based on URL attributes or defaults.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @returns {Object|null} The initial view object or null
     */
    /**
     * Sets the initial view based on URL attributes or defaults.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} viewerCore - The core instance (Ne.Z)
     * @returns {Object|null} The initial view object or null
     */
    function setInitialView(app, viewerCore) {
        try {
            var coreInitialData = app.coreInitialData || {};
            var attributes = coreInitialData.attributes || {};
            var activeViewId = attributes["data-active-view"];

            if (activeViewId) {
                var view = app.filterViewsByStr(app.views, activeViewId).find(function(v) {
                    return !v.hidden || (v.hidden && v.isHiddenByDefault);
                });

                if (!view) {
                    return setDefaultView(app, viewerCore);
                }

                // Send analytics and change view
                if (window.__APP__ && window.__APP__.analytics) {
                    window.__APP__.analytics.sendViewInitEvent(view ? view.text : undefined);
                }
                changeView(app, view, true, false, viewerCore);
                return view;
            } else {
                return setDefaultView(app, viewerCore);
            }
        } catch (e) {
            console.error('[ViewerViewManager] Error setting initial view:', e);
            return setDefaultView(app, viewerCore);
        }
    }

    /**
     * Sets the default (first non-hidden) view.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} viewerCore - The core instance (Ne.Z)
     * @returns {Object|null} The default view object
     */
    function setDefaultView(app, viewerCore) {
        var view = app.views.find(function(v) {
            return !v.hidden;
        });

        if (window.__APP__ && window.__APP__.analytics) {
            window.__APP__.analytics.sendViewInitEvent(view ? view.text : undefined);
        }
        changeView(app, view, true, false, viewerCore);
        return view;
    }

    /**
     * Sets a filtered view based on available views and enabled views configuration.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} view - The view object to potentially set
     * @returns {Object|null} The view if successfully set
     */
    function setFilteredView(app, view) {
        var coreInitialData = app.coreInitialData || {};
        var attributes = coreInitialData.attributes || {};
        var enabledViews = attributes["data-enabled-views"];

        if (app.filterViewByStr(view, enabledViews)) {
            app.setView(view);
            return app.views.find(function(v) {
                return v.id === view.metaInfo.name;
            });
        }
        return null;
    }

    /**
     * Changes the active view.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} view - The target view object
     * @param {boolean} [force=false] - Force change even if same view
     * @param {boolean} [updateCamera=false] - Update camera position
     * @param {Object} [viewerCore] - The core instance (Ne.Z) for legacy view activation
     */
    function changeView(app, view, force, updateCamera, viewerCore) {
        force = force !== undefined ? force : false;
        updateCamera = updateCamera !== undefined ? updateCamera : false;

        try {
            var activeViewId = app.activeView ? app.activeView.id : undefined;
            var targetViewId = view ? view.id : undefined;

            // Dispatch analytics if view changed
            if (view && view.id !== activeViewId) {
                if (view.analyticsEventName && window.__APP__ && window.__APP__.analytics) {
                    window.__APP__.analytics.dispatchViewEvent(view.analyticsEventName);
                }
            }

            // Handle "no view" (e.g. specialized non-visual views or legacy behavior)
            var ref = app.$refs[targetViewId];
            if (view && view.hasNoView) {
                // Check legacy Ne.Z.views
                var existingView = (viewerCore && viewerCore.views) ? viewerCore.views[view.name] : undefined;
                if (existingView && existingView.activate) {
                    existingView.activate(updateCamera);
                }
                return;
            }

            // Set active view in app
            app.setActiveView({ view: view, el: ref && ref[0] });

            // Initialize document shown listener if forced/initial
            if (force && viewerCore && viewerCore.bus) {
                initOnDocumentShown(app, view, viewerCore.bus);
            }
        } catch (e) {
            console.error('[ViewerViewManager] Error changing view to ' + (view ? view.id : 'null') + ':', e);
        }
    }

    /**
     * Initializes listener for when the document is shown.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} view - The view object
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     */
    function initOnDocumentShown(app, view, bus) {
        if (!view || !view.name || !bus) return;

        bus.once(view.name + ":shown", function() {
            try {
                // Set initial plugin state (dependant on ViewerApp method or plugin manager)
                if (app.setInitialPlugin) {
                    app.setInitialPlugin(); // Delegated to ViewerPluginManager inside ViewerApp
                }

                // Notify render complete for analytics
                if (window.__APP__ && window.__APP__.analytics) {
                    app.parentEvents.emit(
                        Config.PARENT_EVENTS.RENDER_COMPLETE,
                        window.__APP__.analytics.getOpenPerformanceEventName(view.name)
                    );
                }
            } catch (e) {
                console.error('[ViewerViewManager] Error in onDocumentShown:', e);
            }
        });
    }

    /**
     * Initializes global view event listeners.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     * @param {Object} viewerCore - The core instance (Ne.Z) needed for changeView calls
     */
    function initViewsListeners(app, bus, viewerCore) {
        if (!bus || !app) return;

        // View:set
        bus.on(Config.CORE_BUS_EVENTS.VIEW_SET, function(id) {
            var view = app.views.find(function(v) {
                return v.id === id;
            });
            if (view) {
                changeView(app, view, false, true, viewerCore); // updateCamera=true
            }
        });

        // View:get
        bus.on(Config.CORE_BUS_EVENTS.VIEW_GET, function(container) {
            if (container) {
                container.current = app.activeView;
            }
        });

        // Views:updatePadding
        bus.on(Config.CORE_BUS_EVENTS.VIEWS_UPDATE_PADDING, function(padding) {
            padding = padding || {};
            if (isFinite(padding.left)) app.viewsPadding.left = padding.left;
            if (isFinite(padding.right)) app.viewsPadding.right = padding.right;
        });

        // Views:disable
        bus.on(
            Config.CORE_BUS_EVENTS.VIEWS_DISABLE,
            ViewerPluginManager.toggleModulesDisableState({
                getItems: function() {
                    return app.views;
                },
                disabled: true,
                callback: function(view) {
                    return app.updateViewInterface({
                        view: view,
                        data: { disabled: true }
                    });
                }
            })
        );

        // Views:enable
        bus.on(
            Config.CORE_BUS_EVENTS.VIEWS_ENABLE,
            ViewerPluginManager.toggleModulesDisableState({
                getItems: function() {
                    return app.views;
                },
                disabled: false,
                callback: function(view) {
                    return app.updateViewInterface({
                        view: view,
                        data: { disabled: false }
                    });
                }
            })
        );
    }

    console.log('[ViewerViewManager] Loaded');

    // ============================================================================
    // EXPORTS
    // ============================================================================

    return {
        setInitialView: setInitialView,
        setDefaultView: setDefaultView,
        setFilteredView: setFilteredView,
        changeView: changeView,
        initOnDocumentShown: initOnDocumentShown,
        initViewsListeners: initViewsListeners
    };

})(ViewerAppConfig);
