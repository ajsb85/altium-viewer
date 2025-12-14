/**
 * Snapping Plugin - SnappingSettings Class
 * Configuration for snapping behavior
 */
"use strict";

(function (Snapping) {
    var UNIT_SCALE = 0.01;

    // Default snapping objects
    var SnappingObjects = {
        Default: 0xFF,  // All objects
        AllPoints: 0xFF,
    };

    /**
     * SnappingSettings class for configuring snap behavior
     */
    function SnappingSettings() {
        this.enabled = true;
        this.objects = SnappingObjects.Default;
        this.auto = true;
        this.userDistance = 15;
        this.autoDistance = 10;
        this.autoDistanceMil = 15;
    }

    SnappingSettings.prototype = {
        get distance() {
            return Math.round(this.auto ? this.autoDistanceMil : this.userDistance);
        },

        updateDistance: function (view) {
            var pixelScale = view.pixelsToUnits(1) / UNIT_SCALE;
            this.autoDistanceMil = pixelScale * this.autoDistance;
        },

        apply: function (config) {
            if (config) {
                this.auto = config.auto != null ? config.auto : this.auto;
                this.enabled = config.enabled != null ? config.enabled : this.enabled;
                this.objects = config.objects ? config.objects : this.objects;
                this.autoDistance = config.autoDistance
                    ? Math.abs(config.autoDistance)
                    : this.autoDistance;
                this.userDistance = config.userDistance
                    ? Math.abs(config.userDistance)
                    : this.userDistance;
            }
        },
    };

    // Export to namespace
    Snapping.SnappingSettings = SnappingSettings;
    Snapping.SnappingObjects = SnappingObjects;
    Snapping.UNIT_SCALE = UNIT_SCALE;

})(window.Snapping = window.Snapping || {});
