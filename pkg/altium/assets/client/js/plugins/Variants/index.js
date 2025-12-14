/**
 * Variants Plugin - Entry Point
 * 
 * Module Structure:
 * - ProjectVariant.js: ProjectVariant class with component mappings
 * - SVGHelper.js: SVG utilities for variant rendering
 * - VariantRenderer.js: Schematic variant rendering logic
 */
"use strict";

(function (Variants) {

    Variants.version = "1.0.0";
    Variants.name = "Variants";

    Variants.modules = [
        "ProjectVariant",
        "SVGHelper"
    ];

    Variants.isReady = function () {
        return !!(Variants.ProjectVariant && Variants.SVGHelper);
    };

    Variants.init = function () {
        console.log("[Variants] Plugin initialized");
    };

})(window.Variants = window.Variants || {});
