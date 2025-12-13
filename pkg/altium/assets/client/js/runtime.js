(() => {
  "use strict";
  var e,
    r,
    t,
    o = {},
    n = {};
  function i(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var t = (n[e] = { id: e, loaded: !1, exports: {} });
    return (o[e].call(t.exports, t, t.exports, i), (t.loaded = !0), t.exports);
  }
  ((i.m = o),
    (i.amdO = {}),
    (e = []),
    (i.O = (r, t, o, n) => {
      if (!t) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [t, o, n] = e[d], l = !0, s = 0; s < t.length; s++)
            (!1 & n || a >= n) && Object.keys(i.O).every((e) => i.O[e](t[s]))
              ? t.splice(s--, 1)
              : ((l = !1), n < a && (a = n));
          if (l) {
            e.splice(d--, 1);
            var u = o();
            void 0 !== u && (r = u);
          }
        }
        return r;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [t, o, n];
    }),
    (i.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return (i.d(r, { a: r }), r);
    }),
    (i.d = (e, r) => {
      for (var t in r)
        i.o(r, t) &&
          !i.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((r, t) => (i.f[t](e, r), r), []))),
    (i.u = (e) =>
      21759 === e
        ? "js/vendors.js?1761730629786"
        : "js/" + e + ".js?1761730629786"),
    (i.miniCssF = (e) => {}),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id,
          );
        },
      }),
      e
    )),
    (i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (r = {}),
    (t = "altium-web-viewer:"),
    (i.l = (e, o, n, a) => {
      if (r[e]) r[e].push(o);
      else {
        var l, s;
        if (void 0 !== n)
          for (
            var u = document.getElementsByTagName("script"), d = 0;
            d < u.length;
            d++
          ) {
            var c = u[d];
            if (
              c.getAttribute("src") == e ||
              c.getAttribute("data-webpack") == t + n
            ) {
              l = c;
              break;
            }
          }
        (l ||
          ((s = !0),
          ((l = document.createElement("script")).charset = "utf-8"),
          (l.timeout = 120),
          i.nc && l.setAttribute("nonce", i.nc),
          l.setAttribute("data-webpack", t + n),
          (l.src = e)),
          (r[e] = [o]));
        var p = (t, o) => {
            ((l.onerror = l.onload = null), clearTimeout(f));
            var n = r[e];
            if (
              (delete r[e],
              l.parentNode && l.parentNode.removeChild(l),
              n && n.forEach((e) => e(o)),
              t)
            )
              return t(o);
          },
          f = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: l }),
            12e4,
          );
        ((l.onerror = p.bind(null, l.onerror)),
          (l.onload = p.bind(null, l.onload)),
          s && document.head.appendChild(l));
      }
    }),
    (i.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      i.S = {};
      var e = {},
        r = {};
      i.I = (t, o) => {
        o || (o = []);
        var n = r[t];
        if ((n || (n = r[t] = {}), !(o.indexOf(n) >= 0))) {
          if ((o.push(n), e[t])) return e[t];
          (i.o(i.S, t) || (i.S[t] = {}), i.S[t]);
          var a = [];
          return (e[t] = a.length ? Promise.all(a).then(() => (e[t] = 1)) : 1);
        }
      };
    })(),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var r = i.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName("script");
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = e + "../"));
    })(),
    (() => {
      i.b = document.baseURI || self.location.href;
      var e = { 27262: 0, 66951: 0 };
      ((i.f.j = (r, t) => {
        var o = i.o(e, r) ? e[r] : void 0;
        if (0 !== o)
          if (o) t.push(o[2]);
          else if (/^(27262|66951)$/.test(r)) e[r] = 0;
          else {
            var n = new Promise((t, n) => (o = e[r] = [t, n]));
            t.push((o[2] = n));
            var a = i.p + i.u(r),
              l = new Error();
            i.l(
              a,
              (t) => {
                if (i.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    a = t && t.target && t.target.src;
                  ((l.message =
                    "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = n),
                    (l.request = a),
                    o[1](l));
                }
              },
              "chunk-" + r,
              r,
            );
          }
      }),
        (i.O.j = (r) => 0 === e[r]));
      var r = (r, t) => {
          var o,
            n,
            [a, l, s] = t,
            u = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (o in l) i.o(l, o) && (i.m[o] = l[o]);
            if (s) var d = s(i);
          }
          for (r && r(t); u < a.length; u++)
            ((n = a[u]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
          return i.O(d);
        },
        t = (self.webpackChunkaltium_web_viewer =
          self.webpackChunkaltium_web_viewer || []);
      (t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t))));
    })());
})();
