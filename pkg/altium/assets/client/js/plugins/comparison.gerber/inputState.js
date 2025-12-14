/**
 * Comparison Gerber Engine - Input State
 * 
 * Input state handling for camera controller.
 */
"use strict";

(function (comparisonGerber) {

    /**
     * Input state adapter for camera controller
     * Wraps camera controller methods with FSM offset handling
     */
    comparisonGerber.InputState = function (cameraController, fsm) {
        this.cameraController = cameraController;
        this.fsm = fsm;
    };

    comparisonGerber.InputState.prototype = {
        KeyDown: function (event) {
            this.cameraController.KeyDown(event);
        },

        KeyUp: function (event) {
            this.cameraController.KeyUp(event);
        },

        MouseDown: function (button, clientX, clientY) {
            var offset = this.fsm.offset;
            this.cameraController.MouseDown(button, clientX - offset.left, clientY - offset.top);
        },

        MouseUp: function (button, clientX, clientY) {
            var offset = this.fsm.offset;
            this.cameraController.MouseUp(button, clientX - offset.left, clientY - offset.top);
        },

        MouseMove: function (clientX, clientY) {
            var offset = this.fsm.offset;
            this.cameraController.MouseMove(clientX - offset.left, clientY - offset.top);
        },

        MouseWheel: function (delta) {
            this.cameraController.MouseWheel(delta);
        },

        TouchStart: function (touches) {
            this.cameraController.TouchStart(touches);
        },

        TouchMove: function (touches) {
            this.cameraController.TouchMove(touches);
        },

        TouchEnd: function (touches) {
            this.cameraController.TouchEnd(touches);
        },

        SetOrbitingType: function (type) {
            this.cameraController.SetOrbitingType(type);
        }
    };

})(window.comparisonGerber = window.comparisonGerber || {});
