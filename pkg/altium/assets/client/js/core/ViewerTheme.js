/**
 * ViewerTheme.js - Theme Manager Module
 * 
 * Provides theme management utilities for the Altium Viewer.
 * This is a simplified extraction that works alongside the webpack ThemeManager.
 * 
 * Dependencies: window.__CORE__, window.__APP__
 */
var ViewerTheme = (function (exports) {
    'use strict';

    /**
     * Supported themes
     */
    var THEMES = ['light', 'dark', 'dark-contrast'];
    
    /**
     * Default theme
     */
    var DEFAULT_THEME = 'light';

    /**
     * Current theme storage
     */
    var currentTheme = DEFAULT_THEME;
    var background = null;

    /**
     * Convert hex color string to RGBA
     * @param {string} hex - Hex color string
     * @returns {Object|null} RGBA object
     */
    function convertHexToRgba(hex) {
        if (!hex || !hex.startsWith('#')) return null;
        hex = hex.slice(1);
        
        if (hex.length === 3) {
            return {
                r: parseInt(hex[0] + hex[0], 16),
                g: parseInt(hex[1] + hex[1], 16),
                b: parseInt(hex[2] + hex[2], 16),
                a: 1
            };
        }
        if (hex.length === 6) {
            return {
                r: parseInt(hex.slice(0, 2), 16),
                g: parseInt(hex.slice(2, 4), 16),
                b: parseInt(hex.slice(4, 6), 16),
                a: 1
            };
        }
        return null;
    }

    /**
     * Convert RGBA string to object
     * @param {string} rgba - RGBA color string
     * @returns {Object|null} RGBA object
     */
    function convertRgbaString(rgba) {
        var match = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*?(\d*\.?\d*)?\)/);
        if (match) {
            return {
                r: Number(match[1]),
                g: Number(match[2]),
                b: Number(match[3]),
                a: match[4] ? Number(match[4]) : 1
            };
        }
        return null;
    }

    /**
     * Convert color string to RGBA object
     * @param {string} colorStr - Color string (hex, rgba, or name)
     * @param {Object} fallback - Fallback RGBA value
     * @returns {Object} RGBA object
     */
    function colorStringToRgba(colorStr, fallback) {
        if (!colorStr) return fallback || { r: 0, g: 0, b: 0, a: 1 };
        
        // Try hex
        var rgba = convertHexToRgba(colorStr);
        if (rgba) return rgba;
        
        // Try rgba string
        rgba = convertRgbaString(colorStr);
        if (rgba) return rgba;
        
        // Try color names via __CORE__
        if (window.__CORE__ && window.__CORE__.colorNames) {
            var hex = window.__CORE__.colorNames[colorStr.toLowerCase()];
            if (hex) {
                rgba = convertHexToRgba(hex);
                if (rgba) return rgba;
            }
        }
        
        return fallback || { r: 0, g: 0, b: 0, a: 1 };
    }

    /**
     * Extract raw background color from CSS variable
     * @returns {Object} Background color info
     */
    function extractRawBackgroundColor() {
        var colorStr = window
            .getComputedStyle(document.body)
            .getPropertyValue('--afs-viewer');
        
        var rgba = colorStringToRgba(colorStr, { r: 200, g: 200, b: 200, a: 1 });
        var r = rgba.r, g = rgba.g, b = rgba.b;
        
        return {
            css: '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1),
            number: (r << 16) + (g << 8) + b,
            array: [r, g, b]
        };
    }

    /**
     * Get validated theme
     * @param {string} theme - Theme to validate
     * @returns {string} Valid theme
     */
    function getValidTheme(theme) {
        if (theme) {
            theme = theme.trim().toLowerCase();
            if (THEMES.indexOf(theme) >= 0) {
                return theme;
            }
        }
        return DEFAULT_THEME;
    }

    /**
     * Get current theme
     * @returns {string} Current theme
     */
    function getTheme() {
        return currentTheme;
    }

    /**
     * Set current theme
     * @param {string} theme - Theme to set
     */
    function setTheme(theme) {
        currentTheme = getValidTheme(theme);
    }

    /**
     * Get background color info
     * @returns {Object} Background color
     */
    function getBackground() {
        if (!background) {
            background = extractRawBackgroundColor();
        }
        return background;
    }

    /**
     * Refresh background from CSS
     */
    function refreshBackground() {
        background = extractRawBackgroundColor();
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.THEMES = THEMES;
    exports.DEFAULT_THEME = DEFAULT_THEME;
    exports.colorStringToRgba = colorStringToRgba;
    exports.extractRawBackgroundColor = extractRawBackgroundColor;
    exports.getValidTheme = getValidTheme;
    exports.getTheme = getTheme;
    exports.setTheme = setTheme;
    exports.getBackground = getBackground;
    exports.refreshBackground = refreshBackground;

    // Helper functions
    exports.convertHexToRgba = convertHexToRgba;
    exports.convertRgbaString = convertRgbaString;

    console.log('[ViewerTheme] Loaded with themes:', THEMES);

    return exports;
}({}));
