/**
 * Fabrication Engine - Events
 * 
 * Event constants for Fabrication engine communication.
 */
"use strict";

(function (Fabrication) {

    /**
     * Event names for bus communication
     */
    Fabrication.events = {
        progress: "Fabrication:progress",
        documentShow: "Fabrication:documentShow",
        documentShown: "Fabrication:documentShown",
        documentClose: "Fabrication:documentClose",
        documentClosed: "Fabrication:documentClosed",
    };

    /**
     * Document states
     */
    Fabrication.DocumentState = {
        INITIAL: "Initial",
        LOADING: "Loading",
        LOADED: "Loaded",
        RENDERING: "Rendering",
        RENDERED: "Rendered",
        ERROR: "Error",
    };

    /**
     * Document types
     */
    Fabrication.DocumentType = {
        GERBER: "Gerber",
        ODB: "OdbPlusPlus",
    };

    /**
     * Error codes
     */
    Fabrication.ErrorCode = {
        STORE_EXPIRED: "StoreExpired",
        WEBGL_NOT_SUPPORTED: "WebGLNotSupported",
        WEBGL_EXTENSION_NOT_SUPPORTED: "WebGLNotSupportedExtension",
    };

})(window.Fabrication = window.Fabrication || {});
