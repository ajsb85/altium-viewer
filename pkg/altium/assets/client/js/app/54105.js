(self.webpackChunkaltium_web_viewer =
  self.webpackChunkaltium_web_viewer || []).push([
    [54105],
    {
      54105: (module, exports, require) => {
        var LogLevelModule = require(49041);
        var LoggerCore = require(17232);

        const config = {
          logger: {
            transports: new Map([["Console", { level: 0 }]]),
          },
        };

        function _typeof(obj) {
          return (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                return typeof obj;
              }
              : function (obj) {
                return obj &&
                  "function" == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(obj);
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }

        function _toPropertyKey(arg) {
          var key = (function (arg) {
            if ("object" != _typeof(arg) || !arg) return arg;
            var prim = arg[Symbol.toPrimitive];
            if (void 0 !== prim) {
              var res = prim.call(arg, "string");
              if ("object" != _typeof(res)) return res;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(arg);
          })(arg);
          return "symbol" == _typeof(key) ? key : key + "";
        }

        var ConsoleTransport = (function () {
          function ConsoleTransport(options) {
            (function (instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, ConsoleTransport);

            this.DEFAULT_COLOR = "default";
            this.async = false;
            this.level = options.level;
            this.color = this.DEFAULT_COLOR;
          }

          return _createClass(
            ConsoleTransport,
            [
              {
                key: "log",
                value: function (entry) {
                  var traceConsole,
                    debugConsole,
                    infoConsole,
                    warnConsole,
                    errorConsole,
                    criticalConsole;

                  var logMessage = "%c"
                    .concat(entry.name.padEnd(20, " "), "%c | ")
                    .concat(
                      ConsoleTransport.getFormattedDate(entry.timestamp),
                      " | %c"
                    )
                    .concat(entry.level.padEnd(8, " "), "%c |");

                  var errorMessage = "";
                  if (entry.error) {
                    errorMessage = " | Error: "
                      .concat(entry.error.message, " Stack: ")
                      .concat(entry.error.stack);
                  }

                  var styles = [
                    logMessage,
                    "color:".concat(this.color, ";"),
                    "color:".concat(this.DEFAULT_COLOR, ";"),
                  ];

                  var content = [
                    "color:".concat(this.DEFAULT_COLOR, ";"),
                    entry.message,
                    errorMessage,
                  ];

                  switch (entry.level) {
                    case LogLevelModule.i[LogLevelModule.i.Trace]:
                      (traceConsole = console).log.apply(
                        traceConsole,
                        styles.concat(
                          [
                            "padding:2px;color:".concat(
                              this.DEFAULT_COLOR,
                              ";"
                            ),
                          ],
                          content
                        )
                      );
                      break;
                    case LogLevelModule.i[LogLevelModule.i.Debug]:
                      (debugConsole = console).log.apply(
                        debugConsole,
                        styles.concat(
                          ["padding:2px;background:blue;color:white;"],
                          content
                        )
                      );
                      break;
                    case LogLevelModule.i[LogLevelModule.i.Info]:
                      (infoConsole = console).log.apply(
                        infoConsole,
                        styles.concat(
                          ["padding:2px;background:green;color:white;"],
                          content
                        )
                      );
                      break;
                    case LogLevelModule.i[LogLevelModule.i.Warn]:
                      (warnConsole = console).log.apply(
                        warnConsole,
                        styles.concat(
                          ["padding:2px;background:orange;color:black;"],
                          content
                        )
                      );
                      break;
                    case LogLevelModule.i[LogLevelModule.i.Error]:
                      (errorConsole = console).log.apply(
                        errorConsole,
                        styles.concat(
                          ["padding:2px;background:red;color:white;"],
                          content
                        )
                      );
                      break;
                    case LogLevelModule.i[LogLevelModule.i.Critical]:
                      (criticalConsole = console).log.apply(
                        criticalConsole,
                        styles.concat(
                          ["padding:2px;background:Maroon;color:white;"],
                          content
                        )
                      );
                      break;
                  }
                },
              },
            ],
            [
              {
                key: "getFormattedDate",
                value: function (timestamp) {
                  var date = new Date(timestamp);
                  return ""
                    .concat(date.getFullYear(), "-")
                    .concat(date.getMonth() + 1, "-")
                    .concat(date.getDate(), " ")
                    .concat(date.getHours(), ":")
                    .concat(date.getMinutes(), ":")
                    .concat(date.getSeconds(), ".")
                    .concat(date.getMilliseconds());
                },
              },
            ]
          );
        })();

        var consoleConfig = config.logger.transports.get("Console");
        if (consoleConfig) {
          LoggerCore.oR.registerTransport(new ConsoleTransport(consoleConfig));
        }
      },
    },
  ]);