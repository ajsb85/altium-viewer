/**
 * FabricationView Plugin - Loader & Preview
 * 
 * UI utilities for loader and preview management.
 */
"use strict";

(function (FabricationView) {

    /**
     * Update preview component
     * @param {Object} presenter - Presenter instance with createPreview
     * @param {Object} data - Preview data with .preview URL
     */
    FabricationView.updatePreview = function (presenter, data) {
        try {
            // Cleanup function
            var cleanup = function () {
                if (presenter.previewInfo && presenter.previewInfo.preview) {
                    presenter.previewInfo.preview.destroy();
                }
                presenter.previewInfo = null;
            };

            if (presenter.createPreview && data) {
                var url = data.preview;

                // Skip if same URL
                if (presenter.previewInfo && presenter.previewInfo.url === url) {
                    return;
                }

                cleanup();
                presenter.previewInfo = {
                    preview: presenter.createPreview(url),
                    url: url
                };
            } else {
                cleanup();
            }
        } catch (err) {
            presenter.logger.LogError("Setup preview error.", err);
        }
    };

    /**
     * Update loader component
     * @param {Object} presenter - Presenter instance with createLoader
     * @param {string} size - "small" or "large" (default: "large")
     * @param {string} type - Loader type (e.g., "error", "large")
     * @param {string} message - Loader message
     * @param {string} icon - Icon name (optional)
     */
    FabricationView.updateLoader = function (presenter, size, type, message, icon) {
        size = size || "large";

        // Cleanup existing loader
        if (presenter.loader) {
            presenter.loader.destroy();
            presenter.loader = null;
        }

        // Create new loader if params provided
        if (presenter.createLoader && type !== undefined && message !== undefined) {
            var options = {
                message: message,
                type: type,
                size: size
            };

            if (icon !== undefined) {
                options.icon = icon;
            }

            presenter.loader = presenter.createLoader(options);
        }
    };

})(window.FabricationView = window.FabricationView || {});
