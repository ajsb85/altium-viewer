/**
 * Measurement Plugin - State Machine Module
 * Finite state machine for measurement interaction states
 */
"use strict";

(function (Measurement) {
    var f = "canceled",
        d = "calculate";

    // State machine transitions
    var stateMachine = {};

    stateMachine.IDLE = [
        {
            to: "IDLE",
            where: function (e) {
                return ["mousemove" === e.type];
            },
            extend: function (e) {
                return (e.transitionType = "MOVE");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["mouseleave" === e.type];
            },
            extend: function (e) {
                return (e.transitionType = "LEAVE");
            },
        },
        {
            to: "CAPTURED",
            where: function (e) {
                return ["mousedown" === e.type, 0 === e.button || 2 === e.button];
            },
        },
        {
            to: "PAN",
            where: function (e) {
                return ["mouseenter" === e.type, 0 !== e.buttons];
            },
        },
        {
            to: "WILL_MEASURE",
            where: function (e) {
                var t;
                return [
                    "touchstart" === e.type,
                    1 == (null === (t = e.touches) || void 0 === t ? void 0 : t.length),
                ];
            },
        },
        {
            to: "WILL_MEASURE",
            where: function (e) {
                var t;
                return [
                    "touchend" === e.type,
                    1 == (null === (t = e.touches) || void 0 === t ? void 0 : t.length),
                ];
            },
        },
    ];

    stateMachine.CAPTURED = [
        {
            to: "IDLE",
            where: function (e) {
                return ["mouseup" === e.type, 2 === e.button, 0 === e.buttons];
            },
        },
        {
            to: "WILL_MEASURE",
            where: function (e) {
                return ["mouseup" === e.type, 0 === e.button, 0 === e.buttons];
            },
        },
        {
            to: "PAN",
            where: function (e) {
                return ["mousemove" === e.type];
            },
        },
    ];

    stateMachine.WILL_MEASURE = [
        {
            to: "MEASURING",
            where: function (e) {
                return ["mousemove" === e.type];
            },
        },
        {
            to: "MEASURING_CAPTURED",
            where: function (e) {
                return ["mousedown" === e.type, 0 === e.button || 2 === e.button];
            },
        },
        {
            to: "MEASURING",
            where: function (e) {
                return ["touchmove" === e.type];
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["touchend" === e.type];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["touchstart" === e.type];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return [e.type === f];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
    ];

    stateMachine.MEASURING_CAPTURED = [
        {
            to: "MEASURING_PAN",
            where: function (e) {
                return ["mousemove" === e.type];
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["mouseup" === e.type, 2 === e.button, 0 === e.buttons];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
        {
            to: "CALCULATE",
            where: function (e) {
                return ["mouseup" === e.type, 0 === e.button, 0 === e.buttons];
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return [e.type === f];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
    ];

    stateMachine.CALCULATE = [
        {
            to: "IDLE",
            where: function (e) {
                return [e.type === d];
            },
            extend: function (e) {
                return (e.transitionType = "DID_MEASURE");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return [e.type === f];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
    ];

    stateMachine.MEASURING = [
        {
            to: "MEASURING",
            where: function (e) {
                return ["mousemove" === e.type];
            },
        },
        {
            to: "MEASURING_LEAVE_WORKSPACE",
            where: function (e) {
                return ["mouseleave" === e.type];
            },
        },
        {
            to: "MEASURING_CAPTURED",
            where: function (e) {
                return ["mousedown" === e.type, 0 === e.button || 2 === e.button];
            },
        },
        {
            to: "MEASURING",
            where: function (e) {
                return ["wheel" === e.type];
            },
            extend: function (e) {
                return (e.transitionType = "ZOOM");
            },
        },
        {
            to: "MEASURING",
            where: function (e) {
                return ["touchmove" === e.type];
            },
        },
        {
            to: "CALCULATE",
            where: function (e) {
                return ["touchend" === e.type];
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return [e.type === f];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
    ];

    stateMachine.MEASURING_LEAVE_WORKSPACE = [
        {
            to: "MEASURING",
            where: function (e) {
                return ["mouseenter" === e.type, 0 === e.buttons];
            },
        },
        {
            to: "MEASURING_PAN",
            where: function (e) {
                return ["mouseenter" === e.type, 0 !== e.buttons];
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return [e.type === f];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
    ];

    stateMachine.MEASURING_PAN = [
        {
            to: "MEASURING_PAN",
            where: function (e) {
                return ["mousemove" === e.type];
            },
            extend: function (e) {
                return (e.transitionType = "PAN");
            },
        },
        {
            to: "MEASURING",
            where: function (e) {
                return ["mouseup" === e.type, 0 === e.buttons];
            },
            extend: function (e) {
                return (e.transitionType = "PAN");
            },
        },
        {
            to: "MEASURING_LEAVE_WORKSPACE",
            where: function (e) {
                return ["mouseleave" === e.type];
            },
            extend: function (e) {
                return (e.transitionType = "PAN");
            },
        },
        {
            to: "PAN",
            where: function (e) {
                return ["keydown" === e.type, 27 === e.keyCode];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
        {
            to: "PAN",
            where: function (e) {
                return [e.type === f];
            },
            extend: function (e) {
                return (e.transitionType = "CANCELED");
            },
        },
    ];

    stateMachine.PAN = [
        {
            to: "PAN",
            where: function (e) {
                return ["mousemove" === e.type];
            },
            extend: function (e) {
                return (e.transitionType = "PAN");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["mouseup" === e.type, 0 === e.buttons];
            },
            extend: function (e) {
                return (e.transitionType = "PAN");
            },
        },
        {
            to: "IDLE",
            where: function (e) {
                return ["mouseleave" === e.type];
            },
            extend: function (e) {
                return (e.transitionType = "PAN");
            },
        },
    ];

    // Export to namespace
    Measurement.stateMachine = stateMachine;
    Measurement.CANCELED_EVENT = f;
    Measurement.CALCULATE_EVENT = d;

})(window.Measurement = window.Measurement || {});
