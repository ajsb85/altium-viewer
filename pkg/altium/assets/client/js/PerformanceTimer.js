/**
 * PerformanceTimer.js
 * 
 * Performance measurement and logging utility.
 * Extracted from ViewerApp.js (Cn class).
 */
(function(global) {
    'use strict';

    /**
     * PerformanceTimer class - measures and logs performance metrics
     */
    var PerformanceTimer = (function() {
        function PerformanceTimer() {
            this._duration = 0;
        }

        /**
         * Set initial duration offset
         * @param {number} duration - Initial duration in ms
         */
        PerformanceTimer.prototype.setInitialDuration = function(duration) {
            this._duration = duration;
        };

        /**
         * Measure a performance mark
         * @param {string} label - Performance mark label
         */
        PerformanceTimer.prototype.measure = function(label) {
            var self = this;
            if (performance && performance.measure) {
                try {
                    var duration = performance.measure(label).duration;
                    setTimeout(function() {
                        self.print(label, duration);
                    });
                } catch (e) {
                    window.__CORE__
                        .createLogger("PERFORMANCE")
                        .LogError("Measure performance error.", e);
                }
            }
        };

        /**
         * Format duration as time string
         * @param {number} ms - Duration in milliseconds
         * @param {boolean} short - Use short format (mm:ss.ms)
         * @returns {string} Formatted time string
         */
        PerformanceTimer.prototype.format = function(ms, short) {
            var date = new Date(ms);
            if (short) {
                return date.getUTCMinutes() + ":" + 
                       date.getUTCSeconds() + "." + 
                       date.getUTCMilliseconds();
            }
            return date.getFullYear() + "-" +
                   (date.getMonth() + 1) + "-" +
                   date.getDate() + " " +
                   date.getHours() + ":" +
                   date.getMinutes() + ":" +
                   date.getSeconds() + "." +
                   date.getMilliseconds();
        };

        /**
         * Print performance metric to logger
         * @param {string} label - Metric label
         * @param {number} duration - Duration in ms
         */
        PerformanceTimer.prototype.print = function(label, duration) {
            var formatted = this.format(duration, true);
            var total = this.format(duration + this._duration, true);
            window.__CORE__
                .createLogger("PERFORMANCE")
                .LogTrace(label + " at " + formatted + " (" + total + ")");
        };

        return PerformanceTimer;
    })();

    // Export
    global.PerformanceTimer = PerformanceTimer;

    console.log('[PerformanceTimer] Loaded');

})(typeof window !== 'undefined' ? window : this);
