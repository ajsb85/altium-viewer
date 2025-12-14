/**
 * ViewerCore.js - Core Module Barrel Export
 * 
 * Re-exports all core modules into a single namespace.
 * 
 * Load order (MUST be respected):
 *   1. ViewerEventBus.js (no dependencies)
 *   2. ViewerStore.js (no dependencies)
 *   3. ViewerViewManager.js (depends on EventBus)
 *   4. ViewerPluginManager.js (depends on EventBus)
 *   5. ViewerWASM.js (depends on EventBus)
 *   6. ViewerCoreBundle.js (this file)
 */
var ViewerCoreBundle = (function () {
    'use strict';

    var exports = {};

    function safeMerge(name, module) {
        if (typeof module === 'undefined') {
            console.error('[ViewerCoreBundle] ERROR: ' + name + ' is not defined.');
            return;
        }
        exports[name] = module;
    }

    safeMerge('EventBus', typeof ViewerEventBus !== 'undefined' ? ViewerEventBus : undefined);
    safeMerge('Store', typeof ViewerStore !== 'undefined' ? ViewerStore : undefined);
    safeMerge('ViewManager', typeof ViewerViewManager !== 'undefined' ? ViewerViewManager : undefined);
    safeMerge('PluginManager', typeof ViewerPluginManager !== 'undefined' ? ViewerPluginManager : undefined);
    safeMerge('WASM', typeof ViewerWASM !== 'undefined' ? ViewerWASM : undefined);

    console.log('[ViewerCoreBundle] Loaded with', Object.keys(exports).length, 'modules');

    return exports;
})();
