/**
 * Variants Plugin - ProjectVariant Class
 * Represents a project variant with component variations mapping
 */
"use strict";

(function (Variants) {

    // Variation kind enum
    var VariationKind = {
        Fitted: 0,
        NotFitted: 1,
        Alternate: 2,
    };

    // Rotation enum
    var Rotation = {
        ROTATE_0: 0,
        ROTATE_90: 1,
        ROTATE_180: 2,
        ROTATE_270: 3,
    };

    /**
     * ProjectVariant class - represents a single project variant
     */
    function ProjectVariant(config) {
        var self = this;
        this.NO_VARIANT_UNIQUE_ID = "l;";
        this.componentsByDesignator = new Map();
        this.componentsByUniqueId = new Map();
        this.graphite = [];
        this.graphiteMapping = {};
        this.uniqueId = config.uniqueId;
        this.name = config.name;
        this.order = config.order;
        this.noVariant = this.NO_VARIANT_UNIQUE_ID === this.uniqueId;

        var g = window.__CORE__;
        new Promise(function (resolve) {
            if (g.engines.Project) {
                g.engines.Project.metadataReady().then(function () {
                    return resolve();
                });
            } else {
                resolve();
            }
        })
            .then(function () {
                var metadata = g.response.metadata;
                var variantData = metadata.projectVariants
                    ? metadata.projectVariants.find(function (v) {
                        return v.uniqueId === self.uniqueId;
                    })
                    : null;

                if (variantData) {
                    self.componentVariations = variantData.componentVariations || [];
                    self.graphite = variantData.graphite;
                    self.graphiteMapping = variantData.graphiteMapping;

                    self.componentVariations.forEach(function (cv) {
                        var designator = cv.physicalDesignator || "";
                        var dotIndex = designator.indexOf(".");
                        if (dotIndex !== -1) {
                            designator = designator.substring(0, dotIndex);
                        }
                        if (!self.componentsByDesignator.has(designator)) {
                            self.componentsByDesignator.set(designator, cv);
                        }
                        if (!self.componentsByUniqueId.has(cv.uniqueId)) {
                            self.componentsByUniqueId.set(cv.uniqueId, cv);
                        }
                    });
                }
            })
            .catch(function (err) {
                window.__CORE__
                    .createLogger("Variants:ProjectVariant")
                    .LogError("Initialize error", err);
            });
    }

    ProjectVariant.prototype = {
        get isNoVariant() {
            return this.noVariant;
        },
        getVariantByDesignator: function (designator) {
            return this.componentsByDesignator.get(designator);
        },
        getVariantByUniqueId: function (uniqueId) {
            return this.componentsByUniqueId.get(uniqueId);
        },
        getVariantForComponent: function (designator, uniqueId) {
            return (
                this.componentsByDesignator.get(designator) ||
                this.componentsByUniqueId.get(uniqueId)
            );
        },
    };

    // Export to namespace
    Variants.ProjectVariant = ProjectVariant;
    Variants.VariationKind = VariationKind;
    Variants.Rotation = Rotation;

})(window.Variants = window.Variants || {});
