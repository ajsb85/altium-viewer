/**
 * Logger Standalone Library
 * 
 * IIFE bundle for application logging with color-coded console output.
 * Includes LogLevel enum, Logger class, LoggerFactory, and ConsoleTransport.
 * 
 * @version 1.0.0
 */
var Logger = (function (exports) {
    'use strict';

    // ============================================================================
    // LogLevel Enum
    // ============================================================================

    /**
     * Log level enumeration.
     * Lower values = more verbose.
     * @enum {number}
     */
    var LogLevel = {
        Trace: 0,
        Debug: 1,
        Info: 2,
        Warn: 3,
        Error: 4,
        Critical: 5,
        None: 6
    };

    // Create reverse mapping (0 -> "Trace", 1 -> "Debug", etc.)
    Object.keys(LogLevel).forEach(function (key) {
        LogLevel[LogLevel[key]] = key;
    });

    // ============================================================================
    // Logger Class
    // ============================================================================

    /**
     * Logger instance for a specific component/module.
     * Provides methods for each log level.
     */
    function LoggerInstance(name, transports) {
        this.name = name;
        this.transports = transports;

        // Bind convenience methods
        this.LogTrace = this.log.bind(this, LogLevel.Trace);
        this.LogDebug = this.log.bind(this, LogLevel.Debug);
        this.LogInfo = this.log.bind(this, LogLevel.Info);
        this.LogWarn = this.log.bind(this, LogLevel.Warn);
        this.LogError = this.log.bind(this, LogLevel.Error);
        this.LogCritical = this.log.bind(this, LogLevel.Critical);
    }

    /**
     * Logs a message at the specified level.
     * @param {number} level - Log level from LogLevel enum
     * @param {string} message - Log message
     * @param {Error} [error] - Optional error object
     */
    LoggerInstance.prototype.log = function (level, message, error) {
        var self = this;
        var logEntry = {
            name: this.name,
            timestamp: Date.now(),
            level: LogLevel[level],  // Convert number to string name
            message: message,
            error: this.getError(error)
        };

        // Send to all transports that accept this level
        this.transports
            .filter(function (transport) {
                return level >= transport.level;
            })
            .forEach(function (transport) {
                transport.log(logEntry);
            });
    };

    /**
     * Normalizes an error object for logging.
     * @param {*} error - Error or error-like object
     * @returns {Object|null} Normalized error with message and stack
     */
    LoggerInstance.prototype.getError = function (error) {
        if (!error) return null;

        // Already a proper Error object
        if (error.message && error.stack) {
            return error;
        }

        // Create normalized error object
        var normalizedError = {
            message: error.message !== undefined ? error.message : String(error),
            stack: ""
        };

        // Try to capture stack trace
        var stackError = new Error();
        if (stackError.stack) {
            try {
                var stackLines = stackError.stack.split(/\r\n|\n|\r/gm);
                if (stackLines.length > 3) {
                    // Remove the first 2 lines (this function's stack frames)
                    stackLines.splice(1, 2);
                    normalizedError.stack = stackLines.join("\n");
                }
            } catch (e) {
                // Ignore stack parsing errors
            }
        }

        return normalizedError;
    };

    // ============================================================================
    // LoggerFactory (manages transports and creates loggers)
    // ============================================================================

    /**
     * Factory for creating logger instances.
     * Manages global transport configuration.
     */
    var LoggerFactory = {
        /** @type {Array} Registered log transports */
        transports: [],

        /**
         * Registers a transport for receiving log entries.
         * @param {Object} transport - Transport with log(entry) method and level property
         */
        registerTransport: function (transport) {
            LoggerFactory.transports.push(transport);
        },

        /**
         * Creates a new logger for a named component.
         * @param {string} name - Component/module name for log identification
         * @returns {LoggerInstance} Logger instance
         */
        createLogger: function (name) {
            return new LoggerInstance(name, LoggerFactory.transports);
        }
    };

    // ============================================================================
    // ConsoleTransport - Colored Console Output
    // ============================================================================

    /**
     * Log transport that outputs to the browser console with color coding.
     */
    function ConsoleTransport(options) {
        this.DEFAULT_COLOR = "default";
        this.async = false;
        this.level = options.level || LogLevel.Trace;
        this.color = this.DEFAULT_COLOR;
    }

    /**
     * Formats a timestamp as YYYY-MM-DD HH:MM:SS.mmm
     * @param {number} timestamp - Unix timestamp in milliseconds
     * @returns {string} Formatted date string
     */
    ConsoleTransport.getFormattedDate = function (timestamp) {
        var date = new Date(timestamp);
        return date.getFullYear() + "-" +
            (date.getMonth() + 1) + "-" +
            date.getDate() + " " +
            date.getHours() + ":" +
            date.getMinutes() + ":" +
            date.getSeconds() + "." +
            date.getMilliseconds();
    };

    /**
     * Logs an entry to the console with appropriate styling.
     * @param {Object} entry - Log entry with name, timestamp, level, message, error
     */
    ConsoleTransport.prototype.log = function (entry) {
        // Format: [ComponentName          | 2024-12-14 06:01:27.123 | Debug    |] Message
        var logMessage = "%c" + entry.name.padEnd(20, " ") + "%c | " +
            ConsoleTransport.getFormattedDate(entry.timestamp) + " | %c" +
            entry.level.padEnd(8, " ") + "%c |";

        // Add error details if present
        var errorMessage = "";
        if (entry.error) {
            errorMessage = " | Error: " + entry.error.message + " Stack: " + entry.error.stack;
        }

        // Base styles
        var styles = [
            logMessage,
            "color:" + this.color + ";",
            "color:" + this.DEFAULT_COLOR + ";"
        ];

        // Content after the formatted header
        var content = [
            "color:" + this.DEFAULT_COLOR + ";",
            entry.message,
            errorMessage
        ];

        // Level-specific styling
        var levelStyles = {
            Trace: "padding:2px;color:" + this.DEFAULT_COLOR + ";",
            Debug: "padding:2px;background:blue;color:white;",
            Info: "padding:2px;background:green;color:white;",
            Warn: "padding:2px;background:orange;color:black;",
            Error: "padding:2px;background:red;color:white;",
            Critical: "padding:2px;background:Maroon;color:white;"
        };

        var levelStyle = levelStyles[entry.level] || levelStyles.Trace;
        console.log.apply(console, styles.concat([levelStyle], content));
    };

    // ============================================================================
    // Configuration & Auto-initialization
    // ============================================================================

    /**
     * Default logger configuration.
     */
    var config = {
        logger: {
            transports: new Map([
                ["Console", { level: LogLevel.Trace }]
            ])
        }
    };

    /**
     * Initializes the logger with default transports.
     * Called automatically when library loads.
     */
    function initializeLogger() {
        var consoleConfig = config.logger.transports.get("Console");
        if (consoleConfig) {
            LoggerFactory.registerTransport(new ConsoleTransport(consoleConfig));
        }
    }

    // Initialize on load
    initializeLogger();

    // ============================================================================
    // Exports
    // ============================================================================

    // Main exports (for webpack bridge compatibility)
    exports.i = LogLevel;                          // LogLevel enum (49041.i)
    exports.oR = LoggerFactory;                    // LoggerFactory (17232.oR)
    exports.ZP = LoggerFactory.createLogger;       // createLogger function (17232.ZP)

    // Semantic exports (for direct usage)
    exports.LogLevel = LogLevel;
    exports.LoggerFactory = LoggerFactory;
    exports.LoggerInstance = LoggerInstance;
    exports.ConsoleTransport = ConsoleTransport;
    exports.createLogger = LoggerFactory.createLogger;
    exports.config = config;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
