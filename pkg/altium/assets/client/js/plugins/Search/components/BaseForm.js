/**
 * Search Plugin - BaseForm Component
 * Search input form with filters
 */
"use strict";

(function (Search) {
    var spread = Search.utils ? Search.utils.spread : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] || {};
            Object.keys(r).forEach(function (k) { e[k] = r[k]; });
        }
        return e;
    };

    var C = window.__APP__.library,
        B = C.Vuex,
        F = B.mapState,
        V = B.mapGetters,
        A = B.mapMutations,
        T = C.i18n.t,
        D = window.__CORE__;

    const BaseFormDef = {
        name: "BaseForm",
        components: {
            // AfsButtonIcon, AfsInput, AfsTabs will be injected
        },
        data: function () {
            return { t: T };
        },
        computed: spread(
            spread(
                spread(
                    {},
                    F({
                        _value: "value",
                        _filters: "filters",
                        isOpenedFilters: "isOpenedFilters",
                    })
                ),
                V(["activeFilter", "result"])
            ),
            {},
            {
                value: {
                    get: function () {
                        return this._value;
                    },
                    set: function (e) {
                        this.setValue(e);
                    },
                },
                filters: {
                    get: function () {
                        return this._filters;
                    },
                    set: function (e) {
                        this.setFilters(e);
                    },
                },
                computedValue: function () {
                    return { value: this.value, filter: this.activeFilter.id };
                },
            }
        ),
        watch: {
            computedValue: function (e, t) {
                D.bus.emit("Search:change", e);
            },
        },
        mounted: function () {
            var self = this;
            this.$nextTick().then(function () {
                self.focus();
                D.bus.on("Search:activate", self.focus);
            });
        },
        unmounted: function () {
            D.bus.off("Search:activate", this.focus);
        },
        methods: spread(
            spread({}, A(["setValue", "setFilters", "openFilters", "closeFilters"])),
            {},
            {
                focus: function () {
                    var self = this;
                    this.$nextTick().then(function () {
                        setTimeout(function () {
                            var input = self.$refs.input;
                            if (input && input.$refs && input.$refs.input) {
                                input.$refs.input.focus();
                            }
                        }, 50);
                    });
                },
                onSubmit: function () {
                    this.$emit("submit", this.computedValue);
                },
                onFilterClick: function () {
                    if (this.isOpenedFilters) {
                        this.closeFilters();
                    } else {
                        this.openFilters();
                    }
                },
            }
        ),
    };

    // Export component
    Search.BaseFormDef = BaseFormDef;

})(window.Search = window.Search || {});
