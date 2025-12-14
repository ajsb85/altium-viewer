/**
 * FullScreen Plugin - Utilities
 * Helper functions for fullscreen mode detection and toggle
 */
"use strict";

(function (FullScreen) {

    /**
     * Get the correct fullscreen event name for the current browser
     */
    function getFullScreenEvent() {
        var el = window.document.documentElement;
        var events = {
            requestFullscreen: "fullscreenchange",
            webkitRequestFullScreen: "webkitfullscreenchange",
            mozRequestFullScreen: "mozfullscreenchange",
            msRequestFullscreen: "MSFullscreenChange",
        };
        for (var key in events) {
            if (el[key]) return events[key];
        }
        return null;
    }

    /**
     * Toggle fullscreen mode
     */
    function toggleFullScreen() {
        var doc = window.document;
        var docEl = doc.documentElement;

        var requestFn =
            docEl.requestFullscreen ||
            docEl.mozRequestFullScreen ||
            docEl.webkitRequestFullScreen ||
            docEl.msRequestFullscreen;

        var exitFn =
            doc.exitFullscreen ||
            doc.mozCancelFullScreen ||
            doc.webkitExitFullscreen ||
            doc.msExitFullscreen;

        var isFullscreen =
            doc.fullscreenElement ||
            doc.mozFullScreenElement ||
            doc.webkitFullscreenElement ||
            doc.msFullscreenElement;

        if (isFullscreen) {
            exitFn.call(doc);
        } else {
            requestFn.call(docEl);
        }
    }

    /**
     * Check if running on iPad
     */
    function isIpad() {
        return !!(
            navigator.userAgent.match(/(iPad)/) ||
            (navigator.platform === "MacIntel" && navigator.standalone !== undefined)
        );
    }

    // Export to namespace
    FullScreen.getFullScreenEvent = getFullScreenEvent;
    FullScreen.toggleFullScreen = toggleFullScreen;
    FullScreen.isIpad = isIpad;

})(window.FullScreen = window.FullScreen || {});
