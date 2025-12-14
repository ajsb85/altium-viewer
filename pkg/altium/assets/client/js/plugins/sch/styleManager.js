/**
 * SCH Engine - Style Manager
 * 
 * Dynamic CSS style manager for schematic variant visibility.
 */
"use strict";

(function (sch) {

    /**
     * StyleManager - Controls dynamic CSS for variants
     * Manages visibility and pointer events based on current variant/channel
     */
    sch.StyleManager = function (container, document) {
        this.currentVariant = null;
        this.currentChannel = "";
        this.staticStyles = " .activeMouse {pointer-events:all} .activeMouse:hover {cursor:pointer} .highlightedComponent {stroke:#868BFF; stroke-width:2px} text { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } text::selection { background: none; }";
        this.styleElement = window.document.createElement("style");

        container.insertBefore(this.styleElement, container.firstChild);
        this.setChannel(document);
        this.update();
    };

    sch.StyleManager.prototype = {
        destroy: function () {
            // Remove event listeners
        },

        setChannel: function (doc) {
            this.currentChannel = doc.isUnique ? "" : (doc.channelSafeName || doc.channelName || "");
        },

        setVariant: function (variantId) {
            if (this.currentVariant !== variantId) {
                this.currentVariant = variantId;
                this.update();
            }
        },

        update: function () {
            var css = this.staticStyles;
            css += " [data-variant-id] { visibility: hidden }";
            css += " .activeMouse[data-variant-id] { pointer-events:none }";

            var channel = this.currentVariant === sch.NO_VARIANT_ID ? "" : this.currentChannel;
            css += ' [data-variant-id~="' + this.currentVariant + channel + '"] { visibility: visible }';
            css += ' .activeMouse[data-variant-id~="' + this.currentVariant + channel + '"] { pointer-events:all }';

            this.styleElement.innerHTML = css;
        }
    };

    // Constant for no variant
    sch.NO_VARIANT_ID = "No_Variant_Unique_Id";

})(window.sch = window.sch || {});
