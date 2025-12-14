/**
 * PreviewPanel Plugin - Item Component
 * Individual document preview item with modification indicators
 */
"use strict";

(function (PreviewPanel) {
    var j = window.__APP__.library.i18n.t;

    // Modification kind to icon mapping
    var modificationIcons = {
        added: "added",
        updated: "modified",
        removed: "deleted",
        unchanged: "unchanged",
    };

    const ItemDef = {
        name: "Item",
        components: {
            // AfsText, AfsIcon, AfsContextMenu will be injected
        },
        directives: {},
        props: {
            img: { type: String, default: "" },
            isSelected: { type: Boolean, default: false },
            text: { type: String, default: "" },
            modificationKind: { type: String, default: null },
            diffsCount: { type: Number, default: null },
        },
        data: function () {
            return {
                documentHintId: Math.random().toString(36).substr(2, 9),
                modificationHintId: Math.random().toString(36).substr(2, 9),
                t: j,
            };
        },
        computed: {
            modificationHintKey: function () {
                return "viewer.plugins.PreviewPanel.Item.modificationHint.".concat(
                    this.modificationKind
                );
            },
            icon: function () {
                return modificationIcons[this.modificationKind] || null;
            },
            iconClass: function () {
                return this.modificationKind
                    ? "is-".concat(this.modificationKind)
                    : "";
            },
        },
    };

    // Export component
    PreviewPanel.ItemDef = ItemDef;
    PreviewPanel.modificationIcons = modificationIcons;

})(window.PreviewPanel = window.PreviewPanel || {});
