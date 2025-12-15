/**
 * AppMonitoring.js
 * 
 * Analytics and monitoring service for the viewer.
 * Handles Google Analytics events, tracking service, and metrics.
 * Extracted from ViewerApp.js (gn class).
 */
(function(global) {
    'use strict';

    var ViewerUtils = global.ViewerUtils;
    var getOwnKeys = ViewerUtils.getOwnKeys;
    var defineProperty = ViewerUtils.defineProperty;

    // Environment configurations
    var validEnvs = { production: true, development: true };
    
    // Event subject mappings  
    var subjectMappings = {
        Project: "Viewer.WIP",
        Release: "Release.DesignSnapshot",
        MfgPackage: "MfgPackage",
        Upload: "Upload",
        Project_CM: "Project_CM"
    };
    
    // View name mappings
    var viewMappings = {
        SCHView: "Schematic",
        PCBView: "PCB",
        PCBView3D: "PCB3D",
        FabricationView: "Fabrication",
        GerberCompareView: "GerberCompare",
        CadexView: "MCAD",
        SchematicCompareView: "SchematicCompare"
    };

    /**
     * Check if event label was already dispatched
     */
    function wasEventDispatched(label) {
        if (!label) return false;
        return window.dataLayer.some(function(item) {
            return item[1] && item[2] && item[2].event_label === label;
        });
    }

    /**
     * Merge objects helper
     */
    function mergeObjects(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            if (source != null) {
                getOwnKeys(Object(source), true).forEach(function(key) {
                    defineProperty(target, key, source[key]);
                });
            }
        }
        return target;
    }

    /**
     * AppMonitoring class - handles analytics and tracking
     */
    var AppMonitoring = (function() {
        function AppMonitoring() {
            this.data = null;
            this.tracking = null;
            this.eventSubject = "";
            this.workspaceId = "";
            this.sessionId = "";
            this.contextId = "";
            this.anonym = false;
            this.appName = "Viewer";
        }

        /**
         * Initialize data from widget attributes
         */
        AppMonitoring.prototype.initData = function(attrs) {
            var env = "production";
            if (env || attrs.domainOrigin || attrs["data-project-src"]) {
                this.data = {
                    env: env,
                    domain: attrs.domainOrigin || 
                            "No Origin Domain for URL: " + attrs["data-project-src"],
                    url: attrs["data-project-src"] || 
                         "No URL for Domain: " + attrs.domainOrigin
                };
            }
        };

        /**
         * Send view initialization event
         */
        AppMonitoring.prototype.sendViewInitEvent = function(viewName) {
            this.dispatchEvent("startup", {
                category: "Initialization",
                label: "Initialization." + viewName
            });
        };

        /**
         * Initialize tracking service with user data
         */
        AppMonitoring.prototype.initTrackingService = function(attrs) {
            var self = this;
            var userId = attrs["data-user-id"] || "";
            var Core = window.__CORE__;
            
            this.eventSubject = attrs["data-analytics-subject"] || "NoSubject";
            this.workspaceId = attrs["data-workspace-id"];
            this.sessionId = attrs["data-session-id"] || "";
            this.contextId = attrs["data-subject-guid"] || attrs["data-project-src"];
            this.anonym = false;
            this.appName = "Viewer";

            // Create API client
            var axios = window.axios;
            var apiClient = axios.create({
                baseURL: window.__VIEWER_DOMAIN__,
                withCredentials: true,
                headers: { "X-AUTH": this.sessionId }
            });

            // Initialize tracking service
            var TrackingService = window.TrackingService;
            this.tracking = window.__trackingService || new TrackingService({
                userId: userId,
                apiClient: apiClient,
                userName: window.__userFullName,
                tenantId: this.workspaceId,
                behaviorTracking: false,
                businessTracking: false,
                metricTracking: false
            });

            // Listen for metadata to update event subject
            Core.bus.on("metadataResolveComplete", function(metadata) {
                if (metadata.projectTypeName === "Orcad") {
                    self.eventSubject += "_OrCAD";
                }
                if (metadata.projectTypeName === "KiCad") {
                    self.eventSubject += "_KiCAD";
                }
                if (metadata.projectTypeName === "Eagle") {
                    self.eventSubject += "_Eagle";
                }
                if (metadata.projectTypeName === "PadsXpedition") {
                    self.eventSubject += "_PADS";
                }
            });
        };

        /**
         * Dispatch Google Analytics event
         */
        AppMonitoring.prototype.dispatchEvent = function(eventName, options) {
            options = options || {};
            var category = options.category;
            var label = options.label;

            if (this.data && !wasEventDispatched(label) && validEnvs[this.data.env]) {
                window.gtag("event", eventName, mergeObjects(
                    { event_category: category, event_label: label },
                    this.data
                ));
            }
        };

        /**
         * Dispatch navigation event
         */
        AppMonitoring.prototype.dispatchNavigationEvent = function(action) {
            this.dispatchAnalyticsEvent("Navigation", action);
        };

        /**
         * Dispatch analytics event to tracking service
         */
        AppMonitoring.prototype.dispatchAnalyticsEvent = function(category, action) {
            var eventName = this.getFormattedEventName([
                "Web", this.appName, this.eventSubject, category, action
            ]);
            this.dispatchCustomAnalyticsEvent(eventName);
        };

        /**
         * Dispatch custom analytics event
         */
        AppMonitoring.prototype.dispatchCustomAnalyticsEvent = function(eventName) {
            if (this.tracking) {
                if (this.anonym) {
                    this.tracking.sendBehavior(eventName, this.contextId);
                } else {
                    this.tracking.sendBusiness(eventName, this.contextId);
                }
            }
        };

        /**
         * Dispatch error event (stub)
         */
        AppMonitoring.prototype.dispatchErrorEvent = function(error) {};

        /**
         * Start metric tracking
         */
        AppMonitoring.prototype.dispatchMetricEventStart = function(metricName) {
            if (!this.anonym) {
                this.tracking.startMetric(metricName, this.contextId);
            }
        };

        /**
         * End metric tracking
         */
        AppMonitoring.prototype.dispatchMetricEventEnd = function(metricName) {
            if (!this.anonym) {
                this.tracking.endMetric(metricName, this.contextId);
            }
        };

        /**
         * Document loaded metric (stub)
         */
        AppMonitoring.prototype.dispatchDocumentLoadedMetric = function(doc) {};

        /**
         * Get performance event name for view open
         */
        AppMonitoring.prototype.getOpenPerformanceEventName = function(viewName) {
            var parts = [
                "Performance",
                subjectMappings[this.eventSubject] || this.eventSubject,
                "Open",
                viewMappings[viewName] || viewName
            ];
            if (!window.__APP__.isDesignProcessed) {
                parts.push("BeingProcessed");
            }
            return this.getFormattedEventName(parts);
        };

        /**
         * FPS performance metrics (stub)
         */
        AppMonitoring.prototype.dispatchFpsPerformanceMetrics = function(fps, viewType) {};

        /**
         * Dispatch view switch event
         */
        AppMonitoring.prototype.dispatchViewEvent = function(viewName) {
            this.dispatchEvent("click", {
                category: "View switching",
                label: "Action.View." + viewName
            });
        };

        /**
         * Dispatch click event
         */
        AppMonitoring.prototype.dispatchClickEvent = function(category, options) {
            var action = options.action;
            this.dispatchEvent("click", {
                category: category,
                label: "Action." + action
            });
        };

        /**
         * Dispatch view navigation event
         */
        AppMonitoring.prototype.dispatchViewNavigationEvent = function(view, options) {
            options = options || {};
            var eventType = options.event || "click";
            var action = options.action;
            this.dispatchEvent(eventType, {
                category: "Navigation",
                label: "Navigation." + view + "." + action
            });
        };

        /**
         * Dispatch panels event
         */
        AppMonitoring.prototype.dispatchPanelsEvent = function(panel, options) {
            options = options || {};
            var eventType = options.event || "click";
            var action = options.action;
            this.dispatchEvent(eventType, {
                category: "Panels",
                label: "Panels." + panel + "." + action
            });
        };

        /**
         * Get error event name
         */
        AppMonitoring.prototype.getErrorEventName = function(errorType) {
            var baseName = this.getErrorBaseEventName();
            return this.getFormattedEventName([baseName, errorType, "NotShown.Web"]);
        };

        /**
         * Get error base event name
         */
        AppMonitoring.prototype.getErrorBaseEventName = function() {
            return "Error." + this.appName + "." + this.eventSubject;
        };

        /**
         * Custom error event (stub)
         */
        AppMonitoring.prototype.dispatchCustomErrorEvent = function(error) {};

        /**
         * Format event name from parts
         */
        AppMonitoring.prototype.getFormattedEventName = function(parts) {
            parts = parts || [];
            return parts.filter(Boolean).join(".");
        };

        return AppMonitoring;
    })();

    // Export
    global.AppMonitoring = AppMonitoring;

    console.log('[AppMonitoring] Loaded');

})(typeof window !== 'undefined' ? window : this);
