/**
 * BoardItemsVisibility - AppLayersContent Component
 * Layer list component with visibility toggles and checkboxes
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
    var toArray = BoardItemsVisibility.utils ? BoardItemsVisibility.utils.toArray : Array.from;

    var $ = window.__APP__.library.Vuex.mapState,
        Z = window.__APP__.library.i18n.t;

    const AppLayersContentDef = {
        name: "AppLayersContent",
        components: {
            // Components will be injected at runtime
        },
        directives: {},
        props: {
            modelValue: {
                type: Array,
                default: function () {
                    return [];
                },
            },
        },
        emits: ["update:modelValue", "on-only", "off-only"],
        data: function () {
            return {
                savedState: null,
                currentOnlyId: null,
                checkedLayer: null,
                t: Z,
            };
        },
        computed: spread(
            spread({}, $(["activeViewId"])),
            {},
            {
                isPCB: function () {
                    return "PCBView" === this.activeViewId;
                },
                computedLayers: function () {
                    var self = this;
                    var e = Math.max.apply(
                        Math,
                        toArray(
                            this.modelValue.reduce(
                                function (e, t) {
                                    return (
                                        e.push(
                                            Math.max.apply(
                                                Math,
                                                toArray(
                                                    t.map(function (e) {
                                                        return e.id;
                                                    })
                                                )
                                            )
                                        ),
                                        e
                                    );
                                },
                                [0]
                            )
                        )
                    );
                    return this.modelValue.map(function (t) {
                        return {
                            items: toArray(t),
                            name: t[0].layerGroup,
                            id: ++e,
                            isVisible: t.some(function (e) {
                                return e.isVisible;
                            }),
                        };
                    });
                },
            }
        ),
        methods: {
            emitChange: function (e) {
                this.$emit("update:modelValue", e);
            },
            onLayerClick: function (e, t, i) {
                i.target.closest(".app-layers-panel__visibility-only")
                    ? this.changeOnlyVisibility(e, t)
                    : this.changeLayerVisibility(e, t);
            },
            getVisibilityIcon: function (e) {
                return e ? "eye-16-2" : "eye-off-16-2";
            },
            setGroupVisibility: function (e, t) {
                return e.map(function (e) {
                    return spread(spread({}, e), {}, { isVisible: t(e) });
                });
            },
            changeLayerVisibility: function (e, t) {
                var self = this;
                if (this.isPCB) {
                    this.changeLayerVisibilityPCB(e, t);
                } else {
                    var n = this.modelValue.map(function (n, r) {
                        return r !== t
                            ? n
                            : self.setGroupVisibility(n, function (t) {
                                return t.id === e.id ? !t.isVisible : t.isVisible;
                            });
                    });
                    this.emitChange(n);
                }
            },
            changeLayerVisibilityPCB: function (e, t) {
                var self = this;
                var n = this.modelValue.map(function (n, r) {
                    return r !== t
                        ? n
                        : self
                            .setGroupVisibility(n, function (t) {
                                return t.id === e.id ? !t.isVisible : t.isVisible;
                            })
                            .map(function (t) {
                                return spread(spread({}, t), {}, {
                                    isActive: !(t.id === e.id && !t.isVisible) && t.isActive,
                                });
                            });
                });
                if (e.isActive) {
                    this.saveActiveLayerState(e);
                    this.setNextActiveLayer(n);
                } else if (this.checkedLayer) {
                    this.setActiveLayer(n);
                } else {
                    this.emitChange(n);
                }
            },
            changeGroupVisibility: function (e, t) {
                var self = this;
                if (this.isPCB) {
                    this.changeGroupVisibilityPCB(e, t);
                } else {
                    var n = this.modelValue.map(function (n, r) {
                        return r !== t
                            ? n
                            : self.setGroupVisibility(n, function () {
                                return !e.isVisible;
                            });
                    });
                    this.emitChange(n);
                }
            },
            changeGroupVisibilityPCB: function (e, t) {
                var i = e.items.find(function (e) {
                    return e.isActive;
                });
                var n = this.modelValue.map(function (i, n) {
                    return n !== t
                        ? i
                        : i.map(function (t) {
                            return spread(spread({}, t), {}, {
                                isActive: !e.isVisible && t.isActive,
                                isVisible: !e.isVisible,
                            });
                        });
                });
                if (i) {
                    this.saveActiveLayerState(i);
                    this.setNextActiveLayer(n);
                } else if (this.checkedLayer) {
                    this.setActiveLayer(n);
                } else {
                    this.emitChange(n);
                }
            },
            changeOnlyVisibility: function (e) {
                if (this.savedState && this.currentOnlyId === e.id) {
                    this.$emit("off-only", this.savedState);
                    this.clearSavedState();
                    return;
                }
                if (!this.savedState) {
                    this.saveLayersState();
                }
                this.currentOnlyId = e.id;
                this.$emit("on-only", e.name);
            },
            changeOnlyGroupVisibility: function (e, t) {
                var self = this;
                if (this.savedState && this.currentOnlyId === e.id) {
                    this.emitChange(this.savedState);
                    this.clearSavedState();
                    return;
                }
                if (!this.savedState) {
                    this.saveLayersState();
                }
                this.currentOnlyId = e.id;
                if (this.isPCB) {
                    this.changeOnlyGroupVisibilityPCB(e, t);
                } else {
                    var n = this.modelValue.map(function (e, n) {
                        return self.setGroupVisibility(e, function (e) {
                            return n === t;
                        });
                    });
                    this.emitChange(n);
                }
            },
            changeOnlyGroupVisibilityPCB: function (e, t) {
                var self = this;
                var i = this.modelValue.flat().find(function (e) {
                    return e.isVisible && e.isActive;
                });
                var n = this.modelValue.map(function (i, n) {
                    return i.map(function (i) {
                        return spread(spread({}, i), {}, {
                            isActive: !(n !== t || !e.isVisible) && i.isActive,
                            isVisible: n === t,
                        });
                    });
                });
                if (i) {
                    this.saveActiveLayerState(i);
                    if (n.flat().find(function (e) { return e.isVisible && e.isActive; })) {
                        this.emitChange(n);
                    } else {
                        this.setNextActiveLayer(n);
                    }
                } else if (this.checkedLayer) {
                    this.setActiveLayer(n);
                } else {
                    this.emitChange(n);
                }
            },
            copyLayers: function () {
                return JSON.parse(JSON.stringify(this.modelValue));
            },
            saveLayersState: function () {
                this.savedState = this.copyLayers();
            },
            clearSavedState: function () {
                this.savedState = null;
            },
            setGroupActivity: function (e, t) {
                return e.map(function (e) {
                    return spread(spread({}, e), {}, {
                        isActive: t(e),
                        isVisible: !!t(e) || e.isVisible,
                    });
                });
            },
            saveActiveLayerState: function (e) {
                this.checkedLayer = { id: e.id, val: e.isActive };
            },
            clearActiveLayerState: function () {
                this.checkedLayer = null;
            },
            onClickSetActiveLayer: function (e, t) {
                var self = this;
                if (t) {
                    this.saveActiveLayerState({ id: e.id, val: t });
                } else {
                    this.clearActiveLayerState();
                }
                var n = this.modelValue.map(function (n) {
                    return self.setGroupActivity(n, function (i) {
                        return i.id === e.id && t;
                    });
                });
                this.emitChange(n);
            },
            setNextActiveLayer: function (e) {
                if (Array.isArray(e)) {
                    var t = e.flat().find(function (e) {
                        return e.isVisible;
                    });
                    if (t) {
                        t.isActive = true;
                    }
                    this.emitChange(e);
                }
            },
            setActiveLayer: function (e) {
                var self = this;
                if (Array.isArray(e)) {
                    if (this.hasPrevLayerVisible(e)) {
                        var i = e.map(function (e) {
                            return e.map(function (e) {
                                var layerId = self.checkedLayer ? self.checkedLayer.id : undefined;
                                return spread(spread({}, e), {}, {
                                    isActive: !(!e.isVisible || e.id !== layerId) && self.checkedLayer.val,
                                });
                            });
                        });
                        this.emitChange(i);
                    } else {
                        this.emitChange(e);
                    }
                    this.clearActiveLayerState();
                }
            },
            hasPrevLayerVisible: function (e) {
                var self = this;
                if (!this.checkedLayer) return false;
                return e.flat().some(function (e) {
                    var layerId = self.checkedLayer ? self.checkedLayer.id : undefined;
                    return e.id === layerId && e.isVisible;
                });
            },
        },
    };

    // Export component definition
    BoardItemsVisibility.AppLayersContentDef = AppLayersContentDef;

})(window.BoardItemsVisibility = window.BoardItemsVisibility || {});
