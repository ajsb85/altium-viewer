"use strict";
(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
  [17816, 74687, 11903, 318],
  {
    88034: (e, i, t) => {
      var n = t(16471),
        o = t(63229),
        _ = window.__CORE__,
        r = window.__APP__.createModule,
        w =
          (window.__APP__.library.i18n.t,
          r({
            type: "Plugin",
            name: "Export",
            description: "Export plugin with on demand requests",
            create: function (e) {
              return (
                (o.Z.showEmailNotification = !1),
                (o.Z.showVote = !1),
                (0, n.Z)(e)
              );
            },
          }));
      _ && _.addModule(w);
    },
    10311: (e) => {
      e.exports = Vue;
    },
  },
  (e) => {
    (e.O(0, [66951, 21759], () => e((e.s = 88034))), e.O());
  },
]);
