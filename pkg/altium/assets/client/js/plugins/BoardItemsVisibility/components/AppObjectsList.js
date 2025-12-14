/**
 * BoardItemsVisibility - AppObjectsList Component
 * List component for managing object visibility (vias, pads, tracks, etc.)
 */
"use strict";

(function (BoardItemsVisibility) {
    var Vue = window.Vue || require("vue");
    var n = Vue;
    var spread = BoardItemsVisibility.utils ? BoardItemsVisibility.utils.spread : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t] || {};
            Object.keys(i).forEach(function (k) { e[k] = i[k]; });
        }
        return e;
    };

    var ve = window.__APP__.library.Vuex,
        he = ve.mapState,
        ge = ve.mapGetters,
        we = ve.mapMutations;

    var ae = { class: "app-object-panel__list" };

    const AppObjectsListDef = {
        name: "AppObjectsList",
        components: {
            // ObjectsButton, AfsAccordion, AfsIcon, AfsText will be injected at runtime
        },
        emits: ["toggle-object", "toggle-unroted-net"],
        computed: spread(
            spread(
                spread({}, he(["objects", "groupAllObjects", "prevObjectData"])),
                ge(["isPCBView3D"])
            ),
            {},
            {
                listObjects: function () {
                    return this.isPCBView3D
                        ? this.objects.filter(function (e) {
                            return !e.isOnly2d;
                        })
                        : this.objects;
                },
                hasObjects: function () {
                    return !!this.listObjects.length;
                },
                iconVisible: function () {
                    return this.groupAllObjects.isVisible
                        ? "eye-16-2"
                        : "eye-off-16-2";
                },
                hasObjectChanges: function () {
                    return JSON.stringify(this.objects) !== this.prevObjectData;
                },
            }
        ),
        watch: {
            hasObjectChanges: function (e) {
                this.setResetData({ key: "objects", val: e });
            },
        },
        methods: spread(
            spread(
                {},
                we([
                    "setObjects",
                    "setResetData",
                    "setGroupAllObjectsVisible",
                    "setGroupAllObjectsVisibleOnly",
                ])
            ),
            {},
            {
                changeObject: function (e) {
                    this.setGroupAllObjectsVisibleOnly(null);
                    this.toggleItem(e);
                    if ("unrotedNet" === e.id) {
                        this.$emit("toggle-unroted-net", {
                            visible: !e.isVisible,
                        });
                    } else {
                        this.$emit("toggle-object", {
                            kind: e.id,
                            visible: !e.isVisible,
                        });
                    }
                },
                changeOnly: function (e) {
                    if (this.groupAllObjects.visibleOnly !== e.id) {
                        this.toggleAllObject(false);
                        this.changeObject(spread(spread({}, e), {}, { isVisible: false }));
                        this.setGroupAllObjectsVisibleOnly(e.id);
                    }
                },
                toggleItem: function (e) {
                    var t = this.objects.map(function (t) {
                        return spread(
                            spread({}, t),
                            {},
                            { isVisible: e.id === t.id ? !t.isVisible : t.isVisible }
                        );
                    });
                    this.setGroupAllObjectsVisible(
                        t.some(function (e) {
                            return e.isVisible;
                        })
                    );
                    this.setObjects(t);
                },
                onClickGroupe: function () {
                    this.setGroupAllObjectsVisibleOnly(null);
                    this.setGroupAllObjectsVisible(!this.groupAllObjects.isVisible);
                    this.toggleAllObject(this.groupAllObjects.isVisible);
                },
                resetData: function () {
                    this.setGroupAllObjectsVisible(true);
                    this.toggleAllObject(true);
                    this.setGroupAllObjectsVisibleOnly(null);
                },
                toggleAllObject: function (e) {
                    this.$emit("toggle-object", {
                        kind: this.groupAllObjects.id,
                        visible: e,
                    });
                    this.$emit("toggle-unroted-net", { visible: e });
                    var t = this.objects.map(function (t) {
                        return spread(spread({}, t), {}, { isVisible: e });
                    });
                    this.setObjects(t);
                },
            }
        ),
    };

    // Export component
    BoardItemsVisibility.AppObjectsListDef = AppObjectsListDef;
    BoardItemsVisibility.ObjectsListClass = ae;

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
