/**
 * Fabrication Engine - State Machine (Base)
 * 
 * Event-based state machine with transitions.
 * Extracted from original webpack bundle.
 */
"use strict";

(function (Fabrication) {

    /**
     * Simple event emitter
     */
    Fabrication.EventEmitter = function () {
        this._events = {};
    };

    Fabrication.EventEmitter.prototype = {
        on: function (event, callback) {
            if (!this._events[event]) {
                this._events[event] = [];
            }
            this._events[event].push(callback);
            return this;
        },

        once: function (event, callback) {
            var self = this;
            var wrapper = function () {
                self.off(event, wrapper);
                callback.apply(self, arguments);
            };
            this.on(event, wrapper);
            return this;
        },

        off: function (event, callback) {
            if (!this._events[event]) return this;
            if (!callback) {
                delete this._events[event];
            } else {
                var idx = this._events[event].indexOf(callback);
                if (idx > -1) {
                    this._events[event].splice(idx, 1);
                }
            }
            return this;
        },

        emit: function (event) {
            if (!this._events[event]) return;
            var args = Array.prototype.slice.call(arguments, 1);
            var callbacks = this._events[event].slice();
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].apply(this, args);
            }
        }
    };

    /**
     * Base State Machine
     * @param {string} initialState - Initial state
     * @param {Object} transitions - State transition table
     */
    Fabrication.StateMachine = function (initialState, transitions) {
        Fabrication.EventEmitter.call(this);
        this.state = initialState;
        this.prevstate = null;
        this.transitions = transitions;
    };

    // Inherit from EventEmitter
    Fabrication.StateMachine.prototype = Object.create(Fabrication.EventEmitter.prototype);
    Fabrication.StateMachine.prototype.constructor = Fabrication.StateMachine;

    /**
     * Dispatch an action to transition state
     * @param {Object} action - Action with type property
     * @returns {boolean} True if transition occurred
     */
    Fabrication.StateMachine.prototype.dispatch = function (action) {
        var currentTransitions = this.transitions[this.state];
        if (!currentTransitions) return false;

        for (var i = 0; i < currentTransitions.length; i++) {
            var transition = currentTransitions[i];
            var conditions = transition.where(action);

            // Check if all conditions are met
            var valid = conditions.every(function (c) { return c; });
            if (valid) {
                this.prevstate = this.state;
                this.state = transition.to;
                this.emit("#Transition", action);
                return true;
            }
        }
        return false;
    };

})(window.Fabrication = window.Fabrication || {});
