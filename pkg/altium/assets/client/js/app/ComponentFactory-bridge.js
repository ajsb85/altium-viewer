/**
 * Webpack bridge chunk for ComponentFactory library.
 * 
 * This is a minimal chunk that exports the global ComponentFactory
 * (loaded from js/ComponentFactory.js) to the webpack module system.
 * 
 * Similar to how 10311.js bridges Vue.
 */
(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
    [65294],
    {
        65294: (module, exports, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(exports);
            __webpack_require__.d(exports, { Z: () => ComponentFactory.Z });
        },
    },
]);
