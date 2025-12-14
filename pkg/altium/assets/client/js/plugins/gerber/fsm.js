/**
 * Gerber Engine - State Machine & FSM
 * 
 * Event emitter and finite state machine for Gerber engine.
 */
"use strict";

(function (Gerber) {

    var CORE = window.__CORE__;
    var ActionType = Gerber.ActionType;
    var State = Gerber.State;

    /**
     * Simple event emitter
     */
    Gerber.EventEmitter = function () {
        this._events = {};
    };

    Gerber.EventEmitter.prototype = {
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
     * Transition helpers
     */
    var transitionShow = {
        where: function (action) { return ["Show" === action.type]; },
        to: State.SHOW
    };

    var transitionError = {
        where: function (action) { return ["Error" === action.type]; },
        to: State.CRASHED,
        error: true
    };

    /**
     * State transition table
     */
    Gerber.StateTransitions = {
        IDLE: [
            { where: function (a) { return ["Setup" === a.type]; }, to: State.SETUP }
        ],
        SETUP: [
            { where: function (a) { return ["SetupComplete" === a.type]; }, to: State.SETUP_COMPLETED },
            transitionError
        ],
        SETUP_COMPLETED: [
            { where: function (a) { return ["Init" === a.type]; }, to: State.INIT },
            transitionError
        ],
        INIT: [
            { where: function (a) { return ["InitComplete" === a.type]; }, to: State.INIT_COMPLETED },
            transitionError
        ],
        INIT_COMPLETED: [
            { where: function (a) { return ["Render" === a.type]; }, to: State.RENDER },
            transitionError
        ],
        RENDER: [
            { where: function (a) { return ["RenderComplete" === a.type]; }, to: State.RENDER_COMPLETED },
            transitionError
        ],
        RENDER_COMPLETED: [transitionShow, transitionError],
        SHOW: [transitionShow, transitionError]
    };

    /**
     * Base State Machine
     */
    Gerber.StateMachine = function (initialState, transitions) {
        Gerber.EventEmitter.call(this);
        this.state = initialState;
        this.prevstate = null;
        this.transitions = transitions;
    };

    Gerber.StateMachine.prototype = Object.create(Gerber.EventEmitter.prototype);
    Gerber.StateMachine.prototype.constructor = Gerber.StateMachine;

    Gerber.StateMachine.prototype.dispatch = function (action) {
        var currentTransitions = this.transitions[this.state];
        if (!currentTransitions) return false;

        for (var i = 0; i < currentTransitions.length; i++) {
            var transition = currentTransitions[i];
            var conditions = transition.where(action);
            var valid = conditions.every(function (c) { return c; });
            if (valid) {
                this.prevstate = this.state;
                this.state = transition.to;
                this.emit("#Transition", action);
                this.emit(this.state, action);
                return true;
            }
        }
        return false;
    };

    /**
     * Gerber FSM - Engine state controller
     */
    Gerber.FSM = function (engine) {
        Gerber.StateMachine.call(this, State.IDLE, Gerber.StateTransitions);

        this.engine = engine;
        this.errorState = null;

        // Bind handlers
        this.onSetup = this.onSetup.bind(this);
        this.onInit = this.onInit.bind(this);
        this.onRender = this.onRender.bind(this);
        this.onShow = this.onShow.bind(this);

        // Setup listeners
        this.on(State.SETUP, this.onSetup);
        this.on(State.INIT, this.onInit);
        this.on(State.RENDER, this.onRender);
        this.on(State.SHOW, this.onShow);
    };

    Gerber.FSM.prototype = Object.create(Gerber.StateMachine.prototype);
    Gerber.FSM.prototype.constructor = Gerber.FSM;

    /**
     * Go to Setup state
     */
    Gerber.FSM.prototype.goToSetup = function (core) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.dispatch({ type: ActionType.Setup, core: core }) || self.state === State.SETUP) {
                self.on(State.SETUP_COMPLETED, function () { resolve(); });
                self.on(State.CRASHED, function (err) {
                    self.errorState = err;
                    reject(self.errorState);
                });
            } else if (self.state === State.CRASHED) {
                reject(self.errorState);
            } else {
                resolve();
            }
        });
    };

    /**
     * Go to Init state
     */
    Gerber.FSM.prototype.goToInit = function (document) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.dispatch({ type: ActionType.Init, document: document }) || self.state === State.INIT) {
                CORE.bus.emit("GerberEngine:beforeDocumentInit", document);
                self.on(State.INIT_COMPLETED, function () {
                    CORE.bus.emit("GerberEngine:afterDocumentInit");
                    resolve();
                });
                self.on(State.CRASHED, function (err) {
                    self.errorState = err;
                    reject(self.errorState);
                });
            } else if (self.state === State.CRASHED) {
                reject(self.errorState);
            } else {
                resolve();
            }
        });
    };

    /**
     * Go to Render state
     */
    Gerber.FSM.prototype.goToRender = function (document) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.dispatch({ type: ActionType.Render, document: document }) || self.state === State.RENDER) {
                CORE.bus.emit("GerberEngine:beforeImportPCB", document);
                self.on(State.RENDER_COMPLETED, function () {
                    CORE.bus.emit("GerberEngine:afterImportPCB", document);
                    resolve();
                });
                self.on(State.CRASHED, function (err) {
                    self.errorState = err;
                    reject(self.errorState);
                });
            } else if (self.state === State.CRASHED) {
                reject(self.errorState);
            } else {
                resolve();
            }
        });
    };

    /**
     * Go to Show state
     */
    Gerber.FSM.prototype.goToShow = function (workspace, renderMode) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.dispatch({ type: ActionType.Show, workspace: workspace, renderMode: renderMode }) || self.state === State.SHOW) {
                resolve();
            } else {
                reject("Cannot show. Wrong state [" + self.state + "]");
            }
        });
    };

    /**
     * Helper for next tick
     */
    Gerber.FSM.prototype.nextTick = function (fn) {
        setTimeout(fn, 1);
    };

    /**
     * Setup handler
     */
    Gerber.FSM.prototype.onSetup = function (action) {
        var self = this;
        try {
            this.engine.doSetup(action.core);
            this.nextTick(function () {
                self.dispatch({ type: ActionType.SetupComplete });
            });
        } catch (err) {
            this.nextTick(function () {
                self.dispatch({ type: ActionType.Error, error: err });
            });
        }
    };

    /**
     * Init handler
     */
    Gerber.FSM.prototype.onInit = function (action) {
        var self = this;
        this.engine.doInit(action.document).then(function () {
            self.dispatch({ type: ActionType.InitComplete });
        }).catch(function (err) {
            self.dispatch({ type: ActionType.Error, error: err });
        });
    };

    /**
     * Render handler
     */
    Gerber.FSM.prototype.onRender = function (action) {
        var self = this;
        try {
            this.engine.doRender(action.document);
            this.nextTick(function () {
                self.dispatch({ type: ActionType.RenderComplete });
            });
        } catch (err) {
            this.nextTick(function () {
                self.dispatch({ type: ActionType.Error, error: err });
            });
        }
    };

    /**
     * Show handler
     */
    Gerber.FSM.prototype.onShow = function (action) {
        var self = this;
        try {
            this.engine.doShow(action.workspace, action.renderMode);
        } catch (err) {
            this.nextTick(function () {
                self.dispatch({ type: ActionType.Error, error: err });
            });
        }
    };

})(window.Gerber = window.Gerber || {});
