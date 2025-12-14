/**
 * Webpack bridge for ViewerUtils.
 * 
 * Makes the global ViewerUtils available to webpack modules.
 * The utilities are used to replace duplicate Babel helpers in 69668.js.
 */
(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
    [99999],  // Virtual chunk ID for utilities
    {
        // Virtual module that exports ViewerUtils to any module that wants it
        99999: (module, exports, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(exports);
            __webpack_require__.d(exports, {
                getType: () => ViewerUtils.getType,
                toPropertyKey: () => ViewerUtils.toPropertyKey,
                defineProperties: () => ViewerUtils.defineProperties,
                createClass: () => ViewerUtils.createClass,
                classCallCheck: () => ViewerUtils.classCallCheck,
                defineProperty: () => ViewerUtils.defineProperty,
                getOwnKeys: () => ViewerUtils.getOwnKeys,
                objectSpread: () => ViewerUtils.objectSpread,
                inherits: () => ViewerUtils.inherits,
                createSuper: () => ViewerUtils.createSuper,
                _typeof: () => ViewerUtils._typeof,
                _defineProperty: () => ViewerUtils._defineProperty,
                _objectSpread2: () => ViewerUtils._objectSpread2,
            });
        },
    },
]);
