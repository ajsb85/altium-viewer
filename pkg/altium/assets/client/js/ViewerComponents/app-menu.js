/**
 * ViewerComponents/app-menu.js
 * 
 * AppMenu component factory - context menu with tree items.
 * Extracted from ViewerApp.js.
 */
(function(global) {
    'use strict';

    var ViewerComponents = global.ViewerComponents;
    var Factories = ViewerComponents.Factories;

    /**
     * Creates the AppMenu Vue component
     * @param {Object} deps - Dependencies
     * @param {Object} deps.Vue - Vue library
     * @param {Object} deps.ContextMenu - ContextMenu component
     * @param {Object} deps.TreeItem - TreeItem component (created via factory)
     * @param {Object} deps.ViewerComponents - ViewerComponents for wrapComponent
     */
    Factories.createAppMenu = function(deps) {
        var Vue = deps.Vue;
        var ContextMenu = deps.ContextMenu;
        var TreeItem = deps.TreeItem;
        var ViewerComponents = deps.ViewerComponents;

        var appMenuClass = { class: "app-menu" };

        var Component = {
            name: "AppMenu",
            components: { ContextMenu: ContextMenu, TreeItem: TreeItem },
            inject: [],
            data: function() {
                return { selectedItem: "" };
            },
            computed: {
                startPadding: function() {
                    return this.items && 
                           this.items.every(function(item) {
                               return !item.child || item.child.length === 0;
                           })
                        ? 8
                        : 32;
                }
            },
            methods: {
                setData: function(key, value) {
                    this[key] = value;
                },
                open: function(coords) {
                    this.$refs.contextMenu.open(document.body, {
                        clientX: coords ? coords.x : undefined,
                        clientY: coords ? coords.y : undefined
                    });
                },
                close: function() {
                    var refs = this.$refs;
                    if (refs && refs.contextMenu) {
                        this.$refs.contextMenu.close();
                    } else {
                        this.onClose();
                    }
                },
                onClick: function(item) {
                    this.$root.$emit("item-click", item);
                },
                onClose: function() {
                    this.$root.$emit("close");
                }
            }
        };

        return (0, ViewerComponents.wrapComponent)(Component, [
            ["render", function(e, t, n, r, o, a) {
                var s = (0, Vue.resolveComponent)("TreeItem"),
                    c = (0, Vue.resolveComponent)("ContextMenu");
                return (
                    (0, Vue.openBlock)(),
                    (0, Vue.createElementBlock)("div", appMenuClass, [
                        (0, Vue.createVNode)(c, {
                            id: "dropdown",
                            ref: "contextMenu",
                            type: "dropdown",
                            class: "app-menu__inner",
                            onClose: t[0] || (t[0] = function() { return a.onClose(); }),
                            offset: 6,
                            "init-width": 400,
                            "max-width-limit": 600,
                            "max-height-limit": 600,
                            "is-sticky": "",
                            modifiers: { y: "bottom", x: "start" }
                        }, {
                            default: (0, Vue.withCtx)(function() {
                                return [
                                    ((0, Vue.openBlock)(true),
                                     (0, Vue.createElementBlock)(
                                         Vue.Fragment, null,
                                         (0, Vue.renderList)(e.items, function(item) {
                                             return (
                                                 (0, Vue.openBlock)(),
                                                 (0, Vue.createBlock)(s, {
                                                     key: item.name,
                                                     item: item,
                                                     "selected-item": e.selectedItem,
                                                     startPadding: a.startPadding,
                                                     onItemClick: a.onClick
                                                 }, null, 8, ["item", "selected-item", "startPadding", "onItemClick"])
                                             );
                                         }),
                                         128
                                     ))
                                ];
                            }),
                            _: 1
                        }, 512)
                    ])
                );
            }],
            ["__scopeId", "data-v-012bf2a3"]
        ]);
    };

    console.log('[ViewerComponents/app-menu] Loaded');

})(typeof window !== 'undefined' ? window : this);
