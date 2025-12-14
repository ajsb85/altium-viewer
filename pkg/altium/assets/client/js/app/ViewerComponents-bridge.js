/**
 * ViewerComponents Webpack Bridge
 * 
 * Exposes ViewerComponents utilities to webpack module system.
 * Replaces modules 46021 (V.Z) and 93891 (O._)
 */
(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
    [46021, 93891], // Chunk IDs for both component wrapper modules
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
        }
    }
]);
