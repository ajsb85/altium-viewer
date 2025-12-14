/**
 * Fabrication Engine - FSM (Finite State Machine)
 * 
 * Engine-specific FSM with setup, init, load, render states.
 * Extends StateMachine with transition table.
 */
"use strict";

(function (Fabrication) {

    /**
     * Transition helpers
     */
    var transitionLoad = {
        where: function (action) {
            return ["LOAD" === action.type];
        },
        to: "LOAD"
    };

    var transitionRender = {
        where: function (action) {
            return ["RENDER" === action.type];
        },
        to: "RENDER"
    };

    var transitionCrashed = {
        where: function (action) {
            return ["CRASHED" === action.type];
        },
        to: "CRASHED"
    };

    /**
     * State transition table for Fabrication Engine
     */
    Fabrication.StateTransitions = {
        IDLE: [
            { where: function (a) { return ["SETUP" === a.type]; }, to: "SETUP" },
            transitionCrashed
        ],
        SETUP: [
            { where: function (a) { return ["SETUP_COMPLETED" === a.type]; }, to: "SETUP_COMPLETED" },
            transitionCrashed
        ],
        SETUP_COMPLETED: [
            { where: function (a) { return ["INIT" === a.type]; }, to: "INIT" },
            transitionCrashed
        ],
        INIT: [
            { where: function (a) { return ["INIT_COMPLETED" === a.type]; }, to: "INIT_COMPLETED" },
            transitionCrashed
        ],
        INIT_COMPLETED: [transitionLoad],
        LOAD: [
            { where: function (a) { return ["LOAD_COMPLETED" === a.type]; }, to: "LOAD_COMPLETED" }
        ],
        LOAD_COMPLETED: [transitionRender, transitionLoad],
        RENDER: [
            { where: function (a) { return ["RENDER_COMPLETED" === a.type]; }, to: "RENDER_COMPLETED" }
        ],
        RENDER_COMPLETED: [transitionLoad, transitionRender]
    };

    /**
     * Fabrication FSM - Engine state controller
     * @param {Object} callback - Callback object with setup, initialize, loadDocument, renderDocument
     * @param {Object} logger - Logger instance
     */
    Fabrication.FSM = function (callback, logger) {
        Fabrication.StateMachine.call(this, "IDLE", Fabrication.StateTransitions);

        this.callback = callback;
        this.logger = logger;
        this.errorState = null;

        var self = this;
        this.on("#Transition", function (action) {
            if ("CRASHED" === self.state && action.error) {
                self.errorState = action.error;
            }
            logger.LogDebug(self.prevstate + " -> " + self.state);
        });
    };

    // Inherit from StateMachine
    Fabrication.FSM.prototype = Object.create(Fabrication.StateMachine.prototype);
    Fabrication.FSM.prototype.constructor = Fabrication.FSM;

    /**
     * Setup phase
     */
    Fabrication.FSM.prototype.setup = function (core) {
        if (this.dispatch({ type: "SETUP" })) {
            try {
                this.callback.setup(core);
                this.dispatch({ type: "SETUP_COMPLETED" });
            } catch (err) {
                this.logger.LogError("Setup engine error.", err);
                this.dispatch({
                    type: "CRASHED",
                    error: new Error("Graphics engine setup error.")
                });
            }
        }
    };

    /**
     * Initialize phase (async)
     */
    Fabrication.FSM.prototype.init = function () {
        var self = this;

        return new Promise(function (resolve, reject) {
            // Check for invalid states
            if ("IDLE" === self.state) {
                self.logger.LogError("Engine setup process has not called for initialize state.");
                self.dispatch({
                    type: "CRASHED",
                    error: new Error("Graphics engine failed state.")
                });
            }

            // Wait for SETUP to complete if needed
            var waitForSetup = function () {
                if ("SETUP" === self.state) {
                    return new Promise(function (res) {
                        self.once("#Transition", res);
                    }).then(waitForSetup);
                }
                return Promise.resolve();
            };

            waitForSetup().then(function () {
                if (!self.dispatch({ type: "INIT" })) {
                    return resolve();
                }

                return Promise.resolve(self.callback.initialize()).then(function () {
                    self.dispatch({ type: "INIT_COMPLETED" });
                }).catch(function (err) {
                    self.logger.LogError("Initialize engine error.", err);
                    self.dispatch({ type: "CRASHED", error: err });
                });
            }).then(function () {
                // Wait for INIT to complete if needed
                if ("INIT" === self.state) {
                    return new Promise(function (res) {
                        self.once("#Transition", res);
                    });
                }
            }).then(function () {
                if ("CRASHED" === self.state) {
                    reject(self.errorState);
                } else {
                    resolve();
                }
            }).catch(reject);
        });
    };

    /**
     * Load document phase (async)
     */
    Fabrication.FSM.prototype.loadDocument = function (document) {
        var self = this;

        return new Promise(function (resolve, reject) {
            if ("CRASHED" === self.state) {
                return reject(self.errorState);
            }

            if (!self.dispatch({ type: "LOAD", document: document })) {
                // Already loading, wait for transition
                if ("LOAD" === self.state) {
                    return new Promise(function (res) {
                        self.once("#Transition", res);
                    }).then(resolve);
                }
                return resolve();
            }

            Promise.resolve(self.callback.loadDocument(document)).then(function () {
                self.dispatch({ type: "LOAD_COMPLETED" });
                resolve();
            }).catch(function (err) {
                self.logger.LogError("Load document error.", err);
                reject(err);
            });
        });
    };

    /**
     * Render document phase (async)
     */
    Fabrication.FSM.prototype.renderDocument = function (document) {
        var self = this;

        return new Promise(function (resolve, reject) {
            if ("CRASHED" === self.state) {
                return reject(self.errorState);
            }

            if (!self.dispatch({ type: "RENDER", document: document })) {
                // Already rendering, wait for transition
                if ("RENDER" === self.state) {
                    return new Promise(function (res) {
                        self.once("#Transition", res);
                    }).then(resolve);
                }
                return resolve();
            }

            Promise.resolve(self.callback.renderDocument(document)).then(function () {
                self.dispatch({ type: "RENDER_COMPLETED" });
                resolve();
            }).catch(function (err) {
                self.logger.LogError("Render document error.", err);
                reject(err);
            });
        });
    };

})(window.Fabrication = window.Fabrication || {});
