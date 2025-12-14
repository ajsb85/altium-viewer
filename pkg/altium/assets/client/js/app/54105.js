(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([
    [54105],
    {
54105: (e, t, n) => {
        var r = n(49041),
          i = n(17232);
        const o = {
          logger: { transports: new Map([["Console", { level: 0 }]]) },
        };
        function a(e) {
          return (
            (a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                  return typeof e;
                }
                : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
            a(e)
          );
        }
        function s(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, c(r.key), r));
          }
        }
        function c(e) {
          var t = (function (e, t) {
            if ("object" != a(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != a(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          })(e);
          return "symbol" == a(t) ? t : t + "";
        }
        var l = (function () {
          function e(t) {
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.DEFAULT_COLOR = "default"),
              (this.async = !1),
              (this.level = t.level),
              (this.color = this.DEFAULT_COLOR));
          }
          return (
            (t = e),
            (i = [
              {
                key: "getFormattedDate",
                value: function (e) {
                  var t = new Date(e);
                  return ""
                    .concat(t.getFullYear(), "-")
                    .concat(t.getMonth() + 1, "-")
                    .concat(t.getDate(), " ")
                    .concat(t.getHours(), ":")
                    .concat(t.getMinutes(), ":")
                    .concat(t.getSeconds(), ".")
                    .concat(t.getMilliseconds());
                },
              },
            ]),
            (n = [
              {
                key: "log",
                value: function (t) {
                  var n,
                    i,
                    o,
                    a,
                    s,
                    c,
                    l = "%c"
                      .concat(t.name.padEnd(20, " "), "%c | ")
                      .concat(e.getFormattedDate(t.timestamp), " | %c")
                      .concat(t.level.padEnd(8, " "), "%c |"),
                    u = "";
                  t.error &&
                    (u = " | Error: "
                      .concat(t.error.message, " Stack: ")
                      .concat(t.error.stack));
                  var d = [
                    l,
                    "color:".concat(this.color, ";"),
                    "color:".concat(this.DEFAULT_COLOR, ";"),
                  ],
                    p = [
                      "color:".concat(this.DEFAULT_COLOR, ";"),
                      t.message,
                      u,
                    ];
                  switch (t.level) {
                    case r.i[r.i.Trace]:
                      (n = console).log.apply(
                        n,
                        d.concat(
                          [
                            "padding:2px;color:".concat(
                              this.DEFAULT_COLOR,
                              ";",
                            ),
                          ],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Debug]:
                      (i = console).log.apply(
                        i,
                        d.concat(
                          ["padding:2px;background:blue;color:white;"],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Info]:
                      (o = console).log.apply(
                        o,
                        d.concat(
                          ["padding:2px;background:green;color:white;"],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Warn]:
                      (a = console).log.apply(
                        a,
                        d.concat(
                          ["padding:2px;background:orange;color:black;"],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Error]:
                      (s = console).log.apply(
                        s,
                        d.concat(
                          ["padding:2px;background:red;color:white;"],
                          p,
                        ),
                      );
                      break;
                    case r.i[r.i.Critical]:
                      (c = console).log.apply(
                        c,
                        d.concat(
                          ["padding:2px;background:Maroon;color:white;"],
                          p,
                        ),
                      );
                  }
                },
              },
            ]) && s(t.prototype, n),
            i && s(t, i),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, n, i;
        })(),
          u = o.logger.transports.get("Console");
        u && i.oR.registerTransport(new l(u));
      }
    }
]);