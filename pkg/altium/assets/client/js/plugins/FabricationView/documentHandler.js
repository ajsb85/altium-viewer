/**
 * FabricationView Plugin - Document Handler
 * 
 * Document lifecycle event handlers.
 */
"use strict";

(function (FabricationView) {

    var events = FabricationView.events;

    /**
     * Error codes from fabrication engine
     */
    FabricationView.ErrorCodes = {
        StoreExpired: "StoreExpired",
        WebGLNotSupported: "WebGLNotSupported",
        WebGLNotSupportedExtension: "WebGLNotSupportedExtension",
    };

    /**
     * Create bound document handlers for a presenter instance
     * @param {Object} presenter - FabricationView presenter instance
     * @returns {Object} Document event handlers
     */
    FabricationView.createDocumentHandler = function (presenter) {
        var self = presenter;

        return {
            /**
             * Activate a document by ID
             * Sets activeDocumentIndex on Fabrication engine
             */
            onActivateDocument: function (docId) {
                try {
                    var index = self.documents.findIndex(function (doc) {
                        return doc.id === docId;
                    });
                    window.__CORE__.engines.Fabrication.activeDocumentIndex = index;
                    return true;
                } catch (err) {
                    self.logger.LogError("Activate document [" + docId + "].", err);
                    return false;
                }
            },

            /**
             * Progress handler - updates loader and preview
             */
            onProgress: function (previewData, message) {
                self.updateLoader("large", "large", message, "render-loader-32");
                self.updatePreview(previewData);
            },

            /**
             * Document show handler - sets display name
             */
            onDocumentShow: function (doc, core) {
                self.setDisplayName(doc, core);
            },

            /**
             * Document close handler - clears state and emits change
             */
            onDocumentClose: function (doc, core) {
                self.shownDocument = null;
                self.documentChanged = true;
                core.bus.emit(events.documentChange, doc);
            },

            /**
             * Document shown handler - main success/error handling
             */
            onDocumentShown: function (doc, error, core) {
                var analytics = window.__APP__.analytics;
                var eventName = self.analyticsEventName;

                // Clear preview
                self.updatePreview(undefined);

                // Dispatch analytics if active
                if (self.active) {
                    analytics.dispatchViewEvent(eventName);
                }

                // Handle error case
                if (error !== undefined) {
                    if (self.active) {
                        core.bus.emit("Document:open-error", {
                            name: eventName,
                            message: error.message,
                            error: error,
                            sendDetails: true
                        });
                    }

                    self.updateLoader("large", "error", error.message);

                    switch (error.code) {
                        case FabricationView.ErrorCodes.StoreExpired:
                            self.updateLoader("small", "error", error.message, "info-16");
                            break;
                        case FabricationView.ErrorCodes.WebGLNotSupported:
                            analytics.dispatchCustomErrorEvent("NotShown.WebGL");
                            break;
                        case FabricationView.ErrorCodes.WebGLNotSupportedExtension:
                            if (error.extensionsList) {
                                error.extensionsList.forEach(function (ext) {
                                    analytics.dispatchCustomErrorEvent("NotShown.WebGLExtension." + ext);
                                });
                            }
                            break;
                    }
                    return;
                }

                // Success case
                self.updateLoader();
                if (!doc) return;

                // Setup keyboard handler
                var keyHandler = function (e) {
                    FabricationView.handleKeyUp(doc, e, self.active);
                };

                window.addEventListener("keyup", keyHandler);
                core.bus.once("Fabrication:documentClose", function () {
                    window.removeEventListener("keyup", keyHandler);
                });

                // Emit events only if document changed
                if (!self.documentChanged) return;

                self.documentChanged = false;
                core.bus.emit(events.layerManagerCreated, doc.layerManager);
                core.bus.emit(events.documentChanged, doc);
                self.shownDocument = doc;
            }
        };
    };

    /**
     * Handle keyboard events for document
     */
    FabricationView.handleKeyUp = function (doc, event, isActive) {
        if (!isActive || !event) return;

        // R key - reset render
        if (event.keyCode === 82 || event.code === "KeyR") {
            doc.resetRender();
            return;
        }

        // +/- layer navigation (without Ctrl)
        if (!event.ctrlKey) {
            if (event.key === "+") {
                doc.layerManager.nextOnceLayer();
            } else if (event.key === "-") {
                doc.layerManager.prevOnceLayer();
            }
        }
    };

})(window.FabricationView = window.FabricationView || {});
