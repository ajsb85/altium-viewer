/**
 * ViewerComponents/index.js
 * 
 * Entry point that ensures all modules are loaded.
 * All previous modules have already extended global.ViewerComponents.Factories
 * 
 * Load order:
 * 1. core.js       - Base utilities and constants
 * 2. layout.js     - Sidebar components
 * 3. status.js     - Loader/alert components  
 * 4. header.js     - Header/tabs components
 * 5. notification.js - Snackbar/notification
 * 6. misc.js       - Watermark, modal directive
 * 7. layout-notifier.js - Layout update notifier class
 * 8. index.js      - This file (verification)
 */
(function(global) {
    'use strict';

    var ViewerComponents = global.ViewerComponents;
    var Factories = ViewerComponents.Factories;

    // Verify all factories are loaded
    var requiredFactories = [
        'createAfsSidebar',
        'createAppSidebar', 
        'createAppAlert',
        'createAppLoader',
        'createAppsLoader',
        'createAppMainTabs',
        'createAppHeaderPlugin',
        'createAppHeader',
        'createAppWatermark',
        'createModalDirective',
        'createAppSnackbar',
        'createAppNotification',
        'AppLayoutUpdateNotifier'
    ];

    var missing = requiredFactories.filter(function(name) {
        return typeof Factories[name] !== 'function';
    });

    if (missing.length > 0) {
        console.warn('[ViewerComponents/index] Missing factories:', missing);
    } else {
        console.log('[ViewerComponents/index] All', requiredFactories.length, 'factories loaded successfully');
    }

})(typeof window !== 'undefined' ? window : this);
