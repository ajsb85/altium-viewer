/**
 * Webpack bridge chunk for Logger library.
 * 
 * Bridges the global Logger object to webpack modules:
 * - 49041: LogLevel enum (exports.i)
 * - 17232: LoggerCore (exports.oR = LoggerFactory, exports.ZP = createLogger)
 * - 54105: ConsoleTransport (initialization handled by Logger.js)
 */
(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
    [54105],
    {
        // Module 49041: LogLevel enum
        49041: (module, exports, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(exports);
            __webpack_require__.d(exports, { i: () => Logger.i });
        },

        // Module 17232: LoggerCore (LoggerFactory + createLogger)
        17232: (module, exports, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(exports);
            __webpack_require__.d(exports, {
                oR: () => Logger.oR,  // LoggerFactory
                ZP: () => Logger.ZP   // createLogger
            });
        },

        // Module 54105: ConsoleTransport registration (handled by Logger.js on load)
        54105: (module, exports, __webpack_require__) => {
            "use strict";
            // Logger.js auto-registers ConsoleTransport on load
            // This module is kept for webpack compatibility
        },
    },
]);
