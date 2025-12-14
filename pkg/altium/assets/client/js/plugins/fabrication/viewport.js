/**
 * Fabrication Engine - Viewport
 * 
 * Camera control, zoom, pan for fabrication view.
 */
"use strict";

(function (Fabrication) {

    /**
     * Viewport - Camera controller for 2D scene
     * @param {Object} scene - Graphite scene instance
     */
    Fabrication.Viewport = function (scene) {
        this.scene = scene;
        this._position = [0, 0, 1]; // x, y, zoom
        this._cnt = Fabrication.Viewport._instanceCount++;
    };

    Fabrication.Viewport._instanceCount = 0;

    Fabrication.Viewport.prototype = {

        /**
         * Get stored position [x, y, zoom]
         */
        get storedPosition() {
            return this._position;
        },

        /**
         * Get viewport coordinates
         */
        get coordinates() {
            var center = this.scene.viewport.GetCenter();
            var zoom = this.scene.viewport.GetZoom();
            return {
                x: center[0],
                y: center[1],
                zoom: zoom
            };
        },

        /**
         * Zoom in by factor
         * @param {number} delta - Zoom factor
         */
        zoomIn: function (delta) {
            delta = delta || 1.25;
            var current = this.scene.viewport.GetZoom();
            this.scene.viewport.SetZoom(current * delta);
            this.updatePosition();
            this.emit("changed");
        },

        /**
         * Zoom out by factor
         * @param {number} delta - Zoom factor
         */
        zoomOut: function (delta) {
            delta = delta || 1.25;
            var current = this.scene.viewport.GetZoom();
            this.scene.viewport.SetZoom(current / delta);
            this.updatePosition();
            this.emit("changed");
        },

        /**
         * Pan viewport by delta
         * @param {number} dx - X delta
         * @param {number} dy - Y delta
         */
        pan: function (dx, dy) {
            var center = this.scene.viewport.GetCenter();
            this.scene.viewport.SetCenter([center[0] + dx, center[1] + dy]);
            this.updatePosition();
            this.emit("changed");
        },

        /**
         * Reset to fit entire scene
         */
        reset: function () {
            this.scene.zoomToFit();
            this.updatePosition();
            this.emit("changed");
        },

        /**
         * Restore viewport from stored position
         * @param {Array} position - [x, y, zoom] or undefined for reset
         */
        restore: function (position) {
            if (position === undefined) {
                this.scene.zoomToFit();
            } else {
                this.scene.viewport.SetCenter(position.slice(0, 2));
                this.scene.viewport.SetZoom(position[2]);
            }
            this.updatePosition();
            return this;
        },

        /**
         * Update stored position from current viewport
         */
        updatePosition: function () {
            var center = this.scene.viewport.GetCenter();
            var zoom = this.scene.viewport.GetZoom();
            this._position[0] = center[0];
            this._position[1] = center[1];
            this._position[2] = zoom;
        },

        /**
         * Emit event (placeholder - actual implementation uses bus)
         */
        emit: function (eventName) {
            // Actual emit done via core.bus
        }
    };

})(window.Fabrication = window.Fabrication || {});
