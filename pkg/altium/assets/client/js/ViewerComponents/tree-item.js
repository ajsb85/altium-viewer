/**
 * ViewerComponents/tree-item.js
 * 
 * TreeItem component factory - recursive tree view component.
 * Extracted from ViewerApp.js.
 */
(function(global) {
    'use strict';

    var ViewerComponents = global.ViewerComponents;
    var Factories = ViewerComponents.Factories;

    /**
     * Creates the TreeItem Vue component
     * @param {Object} deps - Dependencies
     * @param {Object} deps.Vue - Vue library
     * @param {Object} deps.AfsText - AfsText component
     * @param {Object} deps.AfsIcon - AfsIcon component
     * @param {Object} deps.Accordion - Accordion component
     * @param {Object} deps.TrimDirective - Trim directive
     * @param {Object} deps.ViewerComponents - ViewerComponents for wrapComponent
     */
    Factories.createTreeItem = function(deps) {
        var Vue = deps.Vue;
        var AfsText = deps.AfsText;
        var AfsIcon = deps.AfsIcon;
        var Accordion = deps.Accordion;
        var TrimDirective = deps.TrimDirective;
        var ViewerComponents = deps.ViewerComponents;

        var Component = {
            name: "TreeItem",
            components: { AfsText: AfsText, AfsIcon: AfsIcon, Accordion: Accordion },
            directives: { trim: TrimDirective },
            props: {
                item: {
                    type: Object,
                    default: function() { return {}; }
                },
                level: { type: Number, default: 0 },
                startPadding: { type: [String, Number], default: 32 },
                selectedItem: { type: [String, Number], default: "" }
            },
            data: function() {
                return { refPrefix: "group-", isOpened: false };
            },
            computed: {
                paddingLeft: function() {
                    return (+this.startPadding + 24 * +this.level) + "px";
                },
                childrenLevel: function() {
                    return +this.level + 1;
                },
                isSelected: function() {
                    return this.item.selected || 
                           this.item.name === this.selectedItem || 
                           this.item.id === this.selectedItem;
                },
                isIconFilled: function() {
                    return !("iconFilled" in this.item) || this.item.iconFilled;
                }
            },
            watch: {
                item: {
                    deep: true,
                    handler: function(val) {
                        if (val.selected) this.openTree();
                    }
                }
            },
            mounted: function() {
                if (this.isSelected) this.openTree();
            },
            methods: {
                onItemClick: function(item, event) {
                    if (event) event.target.dispatchEvent(new Event("mouseleave"));
                    this.$emit("item-click", item);
                },
                onOpenChange: function() {
                    var refs = this.$refs;
                    if (this.isOpened) {
                        if (refs && refs.container) refs.container.close();
                    } else {
                        if (refs && refs.container) refs.container.open();
                    }
                    this.isOpened = !this.isOpened;
                },
                openTree: function() {
                    var refs = this.$refs;
                    if (refs && refs.container) refs.container.open();
                    this.isOpened = true;
                    if (this.level) this.$emit("open-parent");
                }
            }
        };

        // Return wrapped component with render function
        return (0, ViewerComponents.wrapComponent)(Component, [
            ["render", function(e, t, n, r, o, a) {
                var s = (0, Vue.resolveComponent)("AfsIcon"),
                    c = (0, Vue.resolveComponent)("AfsText"),
                    l = (0, Vue.resolveComponent)("TreeItem", true),
                    u = (0, Vue.resolveComponent)("Accordion"),
                    d = (0, Vue.resolveDirective)("trim");
                return (
                    (0, Vue.openBlock)(),
                    (0, Vue.createElementBlock)("div", null, [
                        (0, Vue.createElementVNode)(
                            "div",
                            {
                                class: (0, Vue.normalizeClass)([
                                    "tree-item",
                                    { "is-selected": a.isSelected }
                                ]),
                                style: (0, Vue.normalizeStyle)({
                                    "padding-left": a.paddingLeft
                                }),
                                onClick: t[1] || (t[1] = function(evt) {
                                    return a.onItemClick(n.item, evt);
                                })
                            },
                            [
                                n.item.child && n.item.child.length
                                    ? ((0, Vue.openBlock)(),
                                      (0, Vue.createBlock)(s, {
                                          key: 0,
                                          class: (0, Vue.normalizeClass)([
                                              "tree-item__acc-icon acc-control",
                                              { "is-opened": e.isOpened }
                                          ]),
                                          name: "arrow-right-8",
                                          onClick: t[0] || (t[0] = (0, Vue.withModifiers)(
                                              function(evt) { return a.onOpenChange(n.item); },
                                              ["stop"]
                                          ))
                                      }, null, 8, ["class"]))
                                    : (0, Vue.createCommentVNode)("v-if", true),
                                (0, Vue.createVNode)(s, {
                                    class: "tree-item__icon",
                                    name: n.item.icon,
                                    filled: a.isIconFilled
                                }, null, 8, ["name", "filled"]),
                                (0, Vue.withDirectives)(
                                    ((0, Vue.openBlock)(),
                                     (0, Vue.createBlock)(c, { class: "tree-item__text", ellipsis: "" }, {
                                         default: (0, Vue.withCtx)(function() {
                                             return [
                                                 (0, Vue.createTextVNode)(
                                                     (0, Vue.toDisplayString)(n.item.name), 1
                                                 )
                                             ];
                                         }),
                                         _: 1
                                     })),
                                    [[d, { hint: n.item.name, delay: 1 }]]
                                )
                            ],
                            6
                        ),
                        n.item.child && n.item.child.length
                            ? ((0, Vue.openBlock)(),
                              (0, Vue.createBlock)(u, { key: 0, ref: "container", opened: e.isOpened }, {
                                  body: (0, Vue.withCtx)(function() {
                                      return [
                                          ((0, Vue.openBlock)(true),
                                           (0, Vue.createElementBlock)(
                                               Vue.Fragment, null,
                                               (0, Vue.renderList)(n.item.child, function(child) {
                                                   return (
                                                       (0, Vue.openBlock)(),
                                                       (0, Vue.createBlock)(l, {
                                                           key: child.name,
                                                           item: child,
                                                           level: a.childrenLevel,
                                                           onItemClick: a.onItemClick,
                                                           onOpenParent: a.openTree,
                                                           "selected-item": n.selectedItem
                                                       }, null, 8, ["item", "level", "onItemClick", "onOpenParent", "selected-item"])
                                                   );
                                               }),
                                               128
                                           ))
                                      ];
                                  }),
                                  _: 1
                              }, 8, ["opened"]))
                            : (0, Vue.createCommentVNode)("v-if", true)
                    ])
                );
            }],
            ["__scopeId", "data-v-b85329d6"]
        ]);
    };

    console.log('[ViewerComponents/tree-item] Loaded');

})(typeof window !== 'undefined' ? window : this);
