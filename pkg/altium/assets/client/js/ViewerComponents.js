/**
 * ViewerComponents.js - Barrel Export
 * 
 * Re-exports all components from individual module files.
 * This file consolidates all exports into a single ViewerComponents global.
 * 
 * Load order (MUST be respected):
 *   1. ViewerCore.js
 *   2. ViewerGrid.js, ViewerTypography.js, ViewerSidebar.js
 *   3. ViewerLoader.js, ViewerHeader.js, ViewerMisc.js
 *   4. ViewerComponents.js (this file)
 */
var ViewerComponents = (function () {
    'use strict';

    var exports = {};

    // Helper to safely merge with error reporting
    function safeMerge(name, module) {
        if (typeof module === 'undefined') {
            console.error('[ViewerComponents] ERROR: ' + name + ' is not defined. Check script loading order.');
            return;
        }
        Object.assign(exports, module);
    }

    // Merge all exports from individual modules
    safeMerge('ViewerCore', typeof ViewerCore !== 'undefined' ? ViewerCore : undefined);
    safeMerge('ViewerGrid', typeof ViewerGrid !== 'undefined' ? ViewerGrid : undefined);
    safeMerge('ViewerTypography', typeof ViewerTypography !== 'undefined' ? ViewerTypography : undefined);
    safeMerge('ViewerSidebar', typeof ViewerSidebar !== 'undefined' ? ViewerSidebar : undefined);
    safeMerge('ViewerLoader', typeof ViewerLoader !== 'undefined' ? ViewerLoader : undefined);
    safeMerge('ViewerHeader', typeof ViewerHeader !== 'undefined' ? ViewerHeader : undefined);
    safeMerge('ViewerMisc', typeof ViewerMisc !== 'undefined' ? ViewerMisc : undefined);

    // Log success
    console.log('[ViewerComponents] Loaded with', Object.keys(exports).length, 'exports');

    return exports;
})();

