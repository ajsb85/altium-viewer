/**
 * ViewerComponents Webpack Bridge
 * 
 * Exposes ViewerComponents utilities to webpack module system.
 * Replaces multiple vendor modules with shared implementations.
 */
(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
    [46021, 93891, 29786, 48226], // Chunk IDs
    {
        // Module 46021 - V.Z (exportComponent)
        46021: (e, t) => {
            "use strict";
            t.Z = ViewerComponents.wrapComponent;
        },

        // Module 93891 - O._ (exportComponent variant)
        93891: (e, t, n) => {
            "use strict";
            n.d(t, {
                _: () => ViewerComponents.wrapComponent
            });
        },

        // Module 29786 - BEM helpers (D.g, D.a)
        29786: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => ViewerComponents.getBEMClass,
                a: () => ViewerComponents.getRadiusClasses
            });
        },

        // Module 48226 - GridContainer (g.G)
        48226: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => ViewerComponents.WrappedGridContainer
            });
        }
    }
]);
