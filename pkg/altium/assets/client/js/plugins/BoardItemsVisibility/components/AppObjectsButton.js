/**
 * BoardItemsVisibility - AppObjectsButton Component
 * Button component for toggling object visibility
 */
"use strict";

(function (BoardItemsVisibility) {
    var Vue = window.Vue || require("vue");
    var n = Vue;

    var se = { class: "app-object-panel__btn-visibility" };
    var ce = { class: "app-object-panel__btn-only" };
    var ue = window.__APP__.library.i18n.t;

    const AppObjectsButtonDef = {
        name: "AppObjectsButton",
        components: {
            // AfsIcon and AfsText will be injected at runtime
        },
        props: {
            name: { type: String, default: "" },
            icon: { type: String, default: "" },
            isVisible: { type: Boolean, default: false },
        },
        computed: {
            iconVisible: function () {
                return this.isVisible ? "eye-16-2" : "eye-off-16-2";
            },
        },
        data: function () {
            return { t: ue };
        },
    };

    // CSS class exports
    BoardItemsVisibility.ObjectsButtonVisibilityClass = se;
    BoardItemsVisibility.ObjectsButtonOnlyClass = ce;

    // Export component
    BoardItemsVisibility.AppObjectsButtonDef = AppObjectsButtonDef;

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
