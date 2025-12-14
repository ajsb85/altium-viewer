var GraphiteModule = (() => {
    let e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0;
    return "undefined" != typeof __filename && (e = e || __filename),
        void 0 === e && (e = self?.__IMPORTED_SCRIPTS__?.graphite),
        function (r) {
            var t, n, o = void 0 !== (r = r || {}) ? r : {};
            o.ready = new Promise((function (e, r) {
                t = e,
                    n = r
            }
            )),
                o.expectedDataFileDownloads || (o.expectedDataFileDownloads = 0),
                o.expectedDataFileDownloads++,
                o.ENVIRONMENT_IS_PTHREAD || function (e) {
                    function r() {
                        o.FS_createPath("/", "res", !0, !0);
                        var e = o.___emscripten_embedded_file_data >> 2;
                        do {
                            var r = N[e++ >>> 0]
                                , t = N[e++ >>> 0]
                                , n = N[e++ >>> 0]
                                , a = D(r);
                            o.FS_createDataFile(a, null, j.subarray(n >>> 0, n + t >>> 0), !0, !0, !0)
                        } while (N[e >>> 0])
                    }
                    o.calledRun ? r() : (o.preRun || (o.preRun = []),
                        o.preRun.push(r))
                }();
            var a, i, s, u, c, l, f = Object.assign({}, o), d = [], m = "./this.program", p = (e, r) => {
                throw r
            }
                , h = "object" == typeof window, v = "function" == typeof importScripts, g = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, y = "";
            g ? (y = v ? require("path").dirname(y) + "/" : __dirname + "/",
                l = () => {
                    c || (u = require("fs"),
                        c = require("path"))
                }
                ,
                a = function (e, r) {
                    return l(),
                        e = c.normalize(e),
                        u.readFileSync(e, r ? void 0 : "utf8")
                }
                ,
                s = e => {
                    var r = a(e, !0);
                    return r.buffer || (r = new Uint8Array(r)),
                        r
                }
                ,
                i = (e, r, t) => {
                    l(),
                        e = c.normalize(e),
                        u.readFile(e, (function (e, n) {
                            e ? t(e) : r(n.buffer)
                        }
                        ))
                }
                ,
                process.argv.length > 1 && (m = process.argv[1].replace(/\\/g, "/")),
                d = process.argv.slice(2),
                process.on("uncaughtException", (function (e) {
                    if (!(e instanceof xt))
                        throw e
                }
                )),
                process.on("unhandledRejection", (function (e) {
                    throw e
                }
                )),
                p = (e, r) => {
                    if (te())
                        throw process.exitCode = e,
                        r;
                    var t;
                    (t = r) instanceof xt || b("exiting due to exception: " + t),
                        process.exit(e)
                }
                ,
                o.inspect = function () {
                    return "[Emscripten Module object]"
                }
            ) : (h || v) && (v ? y = self.location.href : "undefined" != typeof document && document.currentScript && (y = document.currentScript.src),
                e && (y = e),
                y = 0 !== y.indexOf("blob:") ? y.substr(0, y.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
                a = e => {
                    var r = new XMLHttpRequest;
                    return r.open("GET", e, !1),
                        r.send(null),
                        r.responseText
                }
                ,
                v && (s = e => {
                    var r = new XMLHttpRequest;
                    return r.open("GET", e, !1),
                        r.responseType = "arraybuffer",
                        r.send(null),
                        new Uint8Array(r.response)
                }
                ),
                i = (e, r, t) => {
                    var n = new XMLHttpRequest;
                    n.open("GET", e, !0),
                        n.responseType = "arraybuffer",
                        n.onload = () => {
                            200 == n.status || 0 == n.status && n.response ? r(n.response) : t()
                        }
                        ,
                        n.onerror = t,
                        n.send(null)
                }
            );
            var w = o.print || console.log.bind(console)
                , b = o.printErr || console.warn.bind(console);
            function E(e) {
                E.shown || (E.shown = {}),
                    E.shown[e] || (E.shown[e] = 1,
                        b(e))
            }
            Object.assign(o, f),
                f = null,
                o.arguments && (d = o.arguments),
                o.thisProgram && (m = o.thisProgram),
                o.quit && (p = o.quit);
            var _, k = 0;
            o.wasmBinary && (_ = o.wasmBinary);
            var C, x = o.noExitRuntime || !0;
            "object" != typeof WebAssembly && ue("no native wasm support detected");
            var P, F = !1;
            function S(e, r) {
                e || ue(r)
            }
            var A = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            function L(e, r, t) {
                for (var n = (r >>>= 0) + t, o = r; e[o] && !(o >= n);)
                    ++o;
                if (o - r > 16 && e.buffer && A)
                    return A.decode(e.subarray(r, o));
                for (var a = ""; r < o;) {
                    var i = e[r++];
                    if (128 & i) {
                        var s = 63 & e[r++];
                        if (192 != (224 & i)) {
                            var u = 63 & e[r++];
                            if ((i = 224 == (240 & i) ? (15 & i) << 12 | s << 6 | u : (7 & i) << 18 | s << 12 | u << 6 | 63 & e[r++]) < 65536)
                                a += String.fromCharCode(i);
                            else {
                                var c = i - 65536;
                                a += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                            }
                        } else
                            a += String.fromCharCode((31 & i) << 6 | s)
                    } else
                        a += String.fromCharCode(i)
                }
                return a
            }
            function D(e, r) {
                return (e >>>= 0) ? L($, e, r) : ""
            }
            function T(e, r, t, n) {
                if (!(n > 0))
                    return 0;
                for (var o = t >>>= 0, a = t + n - 1, i = 0; i < e.length; ++i) {
                    var s = e.charCodeAt(i);
                    if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++i)),
                        s <= 127) {
                        if (t >= a)
                            break;
                        r[t++ >>> 0] = s
                    } else if (s <= 2047) {
                        if (t + 1 >= a)
                            break;
                        r[t++ >>> 0] = 192 | s >> 6,
                            r[t++ >>> 0] = 128 | 63 & s
                    } else if (s <= 65535) {
                        if (t + 2 >= a)
                            break;
                        r[t++ >>> 0] = 224 | s >> 12,
                            r[t++ >>> 0] = 128 | s >> 6 & 63,
                            r[t++ >>> 0] = 128 | 63 & s
                    } else {
                        if (t + 3 >= a)
                            break;
                        r[t++ >>> 0] = 240 | s >> 18,
                            r[t++ >>> 0] = 128 | s >> 12 & 63,
                            r[t++ >>> 0] = 128 | s >> 6 & 63,
                            r[t++ >>> 0] = 128 | 63 & s
                    }
                }
                return r[t >>> 0] = 0,
                    t - o
            }
            function M(e, r, t) {
                return T(e, $, r, t)
            }
            function R(e) {
                for (var r = 0, t = 0; t < e.length; ++t) {
                    var n = e.charCodeAt(t);
                    n >= 55296 && n <= 57343 && (n = 65536 + ((1023 & n) << 10) | 1023 & e.charCodeAt(++t)),
                        n <= 127 ? ++r : r += n <= 2047 ? 2 : n <= 65535 ? 3 : 4
                }
                return r
            }
            var B, j, $, O, I, z, N, U, W, q = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
            function V(e, r) {
                for (var t = e, n = t >> 1, o = n + r / 2; !(n >= o) && I[n >>> 0];)
                    ++n;
                if ((t = n << 1) - e > 32 && q)
                    return q.decode($.subarray(e >>> 0, t >>> 0));
                for (var a = "", i = 0; !(i >= r / 2); ++i) {
                    var s = O[e + 2 * i >>> 1];
                    if (0 == s)
                        break;
                    a += String.fromCharCode(s)
                }
                return a
            }
            function H(e, r, t) {
                if (void 0 === t && (t = 2147483647),
                    t < 2)
                    return 0;
                for (var n = r, o = (t -= 2) < 2 * e.length ? t / 2 : e.length, a = 0; a < o; ++a) {
                    var i = e.charCodeAt(a);
                    O[r >>> 1] = i,
                        r += 2
                }
                return O[r >>> 1] = 0,
                    r - n
            }
            function G(e) {
                return 2 * e.length
            }
            function Y(e, r) {
                for (var t = 0, n = ""; !(t >= r / 4);) {
                    var o = z[e + 4 * t >>> 2];
                    if (0 == o)
                        break;
                    if (++t,
                        o >= 65536) {
                        var a = o - 65536;
                        n += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                    } else
                        n += String.fromCharCode(o)
                }
                return n
            }
            function X(e, r, t) {
                if (void 0 === t && (t = 2147483647),
                    t < 4)
                    return 0;
                for (var n = r >>>= 0, o = n + t - 4, a = 0; a < e.length; ++a) {
                    var i = e.charCodeAt(a);
                    if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & e.charCodeAt(++a)),
                        z[r >>> 2] = i,
                        (r += 4) + 4 > o)
                        break
                }
                return z[r >>> 2] = 0,
                    r - n
            }
            function K(e) {
                for (var r = 0, t = 0; t < e.length; ++t) {
                    var n = e.charCodeAt(t);
                    n >= 55296 && n <= 57343 && ++t,
                        r += 4
                }
                return r
            }
            function J(e) {
                B = e,
                    o.HEAP8 = j = new Int8Array(e),
                    o.HEAP16 = O = new Int16Array(e),
                    o.HEAP32 = z = new Int32Array(e),
                    o.HEAPU8 = $ = new Uint8Array(e),
                    o.HEAPU16 = I = new Uint16Array(e),
                    o.HEAPU32 = N = new Uint32Array(e),
                    o.HEAPF32 = U = new Float32Array(e),
                    o.HEAPF64 = W = new Float64Array(e)
            }
            o.INITIAL_MEMORY;
            var Z, Q = [], ee = [], re = [];
            function te() {
                return x
            }
            var ne = 0
                , oe = null
                , ae = null;
            function ie(e) {
                ne++,
                    o.monitorRunDependencies && o.monitorRunDependencies(ne)
            }
            function se(e) {
                if (ne--,
                    o.monitorRunDependencies && o.monitorRunDependencies(ne),
                    0 == ne && (null !== oe && (clearInterval(oe),
                        oe = null),
                        ae)) {
                    var r = ae;
                    ae = null,
                        r()
                }
            }
            function ue(e) {
                o.onAbort && o.onAbort(e),
                    b(e = "Aborted(" + e + ")"),
                    F = !0,
                    P = 1,
                    e += ". Build with -sASSERTIONS for more info.";
                var r = new WebAssembly.RuntimeError(e);
                throw n(r),
                r
            }
            var ce, le, fe, de;
            function me(e) {
                return e.startsWith("data:application/octet-stream;base64,")
            }
            function pe(e) {
                return e.startsWith("file://")
            }
            function he(e) {
                try {
                    if (e == ce && _)
                        return new Uint8Array(_);
                    if (s)
                        return s(e);
                    throw "both async and sync fetching of the wasm failed"
                } catch (e) {
                    ue(e)
                }
            }
            function ve(e) {
                for (; e.length > 0;) {
                    var r = e.shift();
                    if ("function" != typeof r) {
                        var t = r.func;
                        "number" == typeof t ? void 0 === r.arg ? ye(t)() : ye(t)(r.arg) : t(void 0 === r.arg ? null : r.arg)
                    } else
                        r(o)
                }
            }
            me(ce = "graphite_1.0.0.1625.wasm") || (le = ce,
                ce = o.locateFile ? o.locateFile(le, y) : y + le);
            var ge = [];
            function ye(e) {
                var r = ge[e];
                return r || (e >= ge.length && (ge.length = e + 1),
                    ge[e] = r = Z.get(e)),
                    r
            }
            function we(e) {
                this.excPtr = e,
                    this.ptr = e - 24,
                    this.set_type = function (e) {
                        N[this.ptr + 4 >>> 2] = e
                    }
                    ,
                    this.get_type = function () {
                        return N[this.ptr + 4 >>> 2]
                    }
                    ,
                    this.set_destructor = function (e) {
                        N[this.ptr + 8 >>> 2] = e
                    }
                    ,
                    this.get_destructor = function () {
                        return N[this.ptr + 8 >>> 2]
                    }
                    ,
                    this.set_refcount = function (e) {
                        z[this.ptr >>> 2] = e
                    }
                    ,
                    this.set_caught = function (e) {
                        e = e ? 1 : 0,
                            j[this.ptr + 12 >>> 0] = e
                    }
                    ,
                    this.get_caught = function () {
                        return 0 != j[this.ptr + 12 >>> 0]
                    }
                    ,
                    this.set_rethrown = function (e) {
                        e = e ? 1 : 0,
                            j[this.ptr + 13 >>> 0] = e
                    }
                    ,
                    this.get_rethrown = function () {
                        return 0 != j[this.ptr + 13 >>> 0]
                    }
                    ,
                    this.init = function (e, r) {
                        this.set_adjusted_ptr(0),
                            this.set_type(e),
                            this.set_destructor(r),
                            this.set_refcount(0),
                            this.set_caught(!1),
                            this.set_rethrown(!1)
                    }
                    ,
                    this.add_ref = function () {
                        var e = z[this.ptr >>> 2];
                        z[this.ptr >>> 2] = e + 1
                    }
                    ,
                    this.release_ref = function () {
                        var e = z[this.ptr >>> 2];
                        return z[this.ptr >>> 2] = e - 1,
                            1 === e
                    }
                    ,
                    this.set_adjusted_ptr = function (e) {
                        N[this.ptr + 16 >>> 2] = e
                    }
                    ,
                    this.get_adjusted_ptr = function () {
                        return N[this.ptr + 16 >>> 2]
                    }
                    ,
                    this.get_exception_ptr = function () {
                        if (Ct(this.get_type()))
                            return N[this.excPtr >>> 2];
                        var e = this.get_adjusted_ptr();
                        return 0 !== e ? e : this.excPtr
                    }
            }
            var be = {
                isAbs: e => "/" === e.charAt(0),
                splitPath: e => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
                normalizeArray: (e, r) => {
                    for (var t = 0, n = e.length - 1; n >= 0; n--) {
                        var o = e[n];
                        "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1),
                            t++) : t && (e.splice(n, 1),
                                t--)
                    }
                    if (r)
                        for (; t; t--)
                            e.unshift("..");
                    return e
                }
                ,
                normalize: e => {
                    var r = be.isAbs(e)
                        , t = "/" === e.substr(-1);
                    return (e = be.normalizeArray(e.split("/").filter((e => !!e)), !r).join("/")) || r || (e = "."),
                        e && t && (e += "/"),
                        (r ? "/" : "") + e
                }
                ,
                dirname: e => {
                    var r = be.splitPath(e)
                        , t = r[0]
                        , n = r[1];
                    return t || n ? (n && (n = n.substr(0, n.length - 1)),
                        t + n) : "."
                }
                ,
                basename: e => {
                    if ("/" === e)
                        return "/";
                    var r = (e = (e = be.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                    return -1 === r ? e : e.substr(r + 1)
                }
                ,
                join: function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return be.normalize(e.join("/"))
                },
                join2: (e, r) => be.normalize(e + "/" + r)
            }
                , Ee = {
                    resolve: function () {
                        for (var e = "", r = !1, t = arguments.length - 1; t >= -1 && !r; t--) {
                            var n = t >= 0 ? arguments[t] : Ce.cwd();
                            if ("string" != typeof n)
                                throw new TypeError("Arguments to path.resolve must be strings");
                            if (!n)
                                return "";
                            e = n + "/" + e,
                                r = be.isAbs(n)
                        }
                        return (r ? "/" : "") + (e = be.normalizeArray(e.split("/").filter((e => !!e)), !r).join("/")) || "."
                    },
                    relative: (e, r) => {
                        function t(e) {
                            for (var r = 0; r < e.length && "" === e[r]; r++)
                                ;
                            for (var t = e.length - 1; t >= 0 && "" === e[t]; t--)
                                ;
                            return r > t ? [] : e.slice(r, t - r + 1)
                        }
                        e = Ee.resolve(e).substr(1),
                            r = Ee.resolve(r).substr(1);
                        for (var n = t(e.split("/")), o = t(r.split("/")), a = Math.min(n.length, o.length), i = a, s = 0; s < a; s++)
                            if (n[s] !== o[s]) {
                                i = s;
                                break
                            }
                        var u = [];
                        for (s = i; s < n.length; s++)
                            u.push("..");
                        return (u = u.concat(o.slice(i))).join("/")
                    }
                }
                , _e = {
                    ttys: [],
                    init: function () { },
                    shutdown: function () { },
                    register: function (e, r) {
                        _e.ttys[e] = {
                            input: [],
                            output: [],
                            ops: r
                        },
                            Ce.registerDevice(e, _e.stream_ops)
                    },
                    stream_ops: {
                        open: function (e) {
                            var r = _e.ttys[e.node.rdev];
                            if (!r)
                                throw new Ce.ErrnoError(43);
                            e.tty = r,
                                e.seekable = !1
                        },
                        close: function (e) {
                            e.tty.ops.flush(e.tty)
                        },
                        flush: function (e) {
                            e.tty.ops.flush(e.tty)
                        },
                        read: function (e, r, t, n, o) {
                            if (!e.tty || !e.tty.ops.get_char)
                                throw new Ce.ErrnoError(60);
                            for (var a = 0, i = 0; i < n; i++) {
                                var s;
                                try {
                                    s = e.tty.ops.get_char(e.tty)
                                } catch (e) {
                                    throw new Ce.ErrnoError(29)
                                }
                                if (void 0 === s && 0 === a)
                                    throw new Ce.ErrnoError(6);
                                if (null == s)
                                    break;
                                a++,
                                    r[t + i] = s
                            }
                            return a && (e.node.timestamp = Date.now()),
                                a
                        },
                        write: function (e, r, t, n, o) {
                            if (!e.tty || !e.tty.ops.put_char)
                                throw new Ce.ErrnoError(60);
                            try {
                                for (var a = 0; a < n; a++)
                                    e.tty.ops.put_char(e.tty, r[t + a])
                            } catch (e) {
                                throw new Ce.ErrnoError(29)
                            }
                            return n && (e.node.timestamp = Date.now()),
                                a
                        }
                    },
                    default_tty_ops: {
                        get_char: function (e) {
                            if (!e.input.length) {
                                var r = null;
                                if (g) {
                                    var t = Buffer.alloc(256)
                                        , n = 0;
                                    try {
                                        n = u.readSync(process.stdin.fd, t, 0, 256, -1)
                                    } catch (e) {
                                        if (!e.toString().includes("EOF"))
                                            throw e;
                                        n = 0
                                    }
                                    r = n > 0 ? t.slice(0, n).toString("utf-8") : null
                                } else
                                    "undefined" != typeof window && "function" == typeof window.prompt ? null !== (r = window.prompt("Input: ")) && (r += "\n") : "function" == typeof readline && null !== (r = readline()) && (r += "\n");
                                if (!r)
                                    return null;
                                e.input = pt(r, !0)
                            }
                            return e.input.shift()
                        },
                        put_char: function (e, r) {
                            null === r || 10 === r ? (w(L(e.output, 0)),
                                e.output = []) : 0 != r && e.output.push(r)
                        },
                        flush: function (e) {
                            e.output && e.output.length > 0 && (w(L(e.output, 0)),
                                e.output = [])
                        }
                    },
                    default_tty1_ops: {
                        put_char: function (e, r) {
                            null === r || 10 === r ? (b(L(e.output, 0)),
                                e.output = []) : 0 != r && e.output.push(r)
                        },
                        flush: function (e) {
                            e.output && e.output.length > 0 && (b(L(e.output, 0)),
                                e.output = [])
                        }
                    }
                }
                , ke = {
                    ops_table: null,
                    mount: function (e) {
                        return ke.createNode(null, "/", 16895, 0)
                    },
                    createNode: function (e, r, t, n) {
                        if (Ce.isBlkdev(t) || Ce.isFIFO(t))
                            throw new Ce.ErrnoError(63);
                        ke.ops_table || (ke.ops_table = {
                            dir: {
                                node: {
                                    getattr: ke.node_ops.getattr,
                                    setattr: ke.node_ops.setattr,
                                    lookup: ke.node_ops.lookup,
                                    mknod: ke.node_ops.mknod,
                                    rename: ke.node_ops.rename,
                                    unlink: ke.node_ops.unlink,
                                    rmdir: ke.node_ops.rmdir,
                                    readdir: ke.node_ops.readdir,
                                    symlink: ke.node_ops.symlink
                                },
                                stream: {
                                    llseek: ke.stream_ops.llseek
                                }
                            },
                            file: {
                                node: {
                                    getattr: ke.node_ops.getattr,
                                    setattr: ke.node_ops.setattr
                                },
                                stream: {
                                    llseek: ke.stream_ops.llseek,
                                    read: ke.stream_ops.read,
                                    write: ke.stream_ops.write,
                                    allocate: ke.stream_ops.allocate,
                                    mmap: ke.stream_ops.mmap,
                                    msync: ke.stream_ops.msync
                                }
                            },
                            link: {
                                node: {
                                    getattr: ke.node_ops.getattr,
                                    setattr: ke.node_ops.setattr,
                                    readlink: ke.node_ops.readlink
                                },
                                stream: {}
                            },
                            chrdev: {
                                node: {
                                    getattr: ke.node_ops.getattr,
                                    setattr: ke.node_ops.setattr
                                },
                                stream: Ce.chrdev_stream_ops
                            }
                        });
                        var o = Ce.createNode(e, r, t, n);
                        return Ce.isDir(o.mode) ? (o.node_ops = ke.ops_table.dir.node,
                            o.stream_ops = ke.ops_table.dir.stream,
                            o.contents = {}) : Ce.isFile(o.mode) ? (o.node_ops = ke.ops_table.file.node,
                                o.stream_ops = ke.ops_table.file.stream,
                                o.usedBytes = 0,
                                o.contents = null) : Ce.isLink(o.mode) ? (o.node_ops = ke.ops_table.link.node,
                                    o.stream_ops = ke.ops_table.link.stream) : Ce.isChrdev(o.mode) && (o.node_ops = ke.ops_table.chrdev.node,
                                        o.stream_ops = ke.ops_table.chrdev.stream),
                            o.timestamp = Date.now(),
                            e && (e.contents[r] = o,
                                e.timestamp = o.timestamp),
                            o
                    },
                    getFileDataAsTypedArray: function (e) {
                        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
                    },
                    expandFileStorage: function (e, r) {
                        r >>>= 0;
                        var t = e.contents ? e.contents.length : 0;
                        if (!(t >= r)) {
                            r = Math.max(r, t * (t < 1048576 ? 2 : 1.125) >>> 0),
                                0 != t && (r = Math.max(r, 256));
                            var n = e.contents;
                            e.contents = new Uint8Array(r),
                                e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0)
                        }
                    },
                    resizeFileStorage: function (e, r) {
                        if (r >>>= 0,
                            e.usedBytes != r)
                            if (0 == r)
                                e.contents = null,
                                    e.usedBytes = 0;
                            else {
                                var t = e.contents;
                                e.contents = new Uint8Array(r),
                                    t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))),
                                    e.usedBytes = r
                            }
                    },
                    node_ops: {
                        getattr: function (e) {
                            var r = {};
                            return r.dev = Ce.isChrdev(e.mode) ? e.id : 1,
                                r.ino = e.id,
                                r.mode = e.mode,
                                r.nlink = 1,
                                r.uid = 0,
                                r.gid = 0,
                                r.rdev = e.rdev,
                                Ce.isDir(e.mode) ? r.size = 4096 : Ce.isFile(e.mode) ? r.size = e.usedBytes : Ce.isLink(e.mode) ? r.size = e.link.length : r.size = 0,
                                r.atime = new Date(e.timestamp),
                                r.mtime = new Date(e.timestamp),
                                r.ctime = new Date(e.timestamp),
                                r.blksize = 4096,
                                r.blocks = Math.ceil(r.size / r.blksize),
                                r
                        },
                        setattr: function (e, r) {
                            void 0 !== r.mode && (e.mode = r.mode),
                                void 0 !== r.timestamp && (e.timestamp = r.timestamp),
                                void 0 !== r.size && ke.resizeFileStorage(e, r.size)
                        },
                        lookup: function (e, r) {
                            throw Ce.genericErrors[44]
                        },
                        mknod: function (e, r, t, n) {
                            return ke.createNode(e, r, t, n)
                        },
                        rename: function (e, r, t) {
                            if (Ce.isDir(e.mode)) {
                                var n;
                                try {
                                    n = Ce.lookupNode(r, t)
                                } catch (e) { }
                                if (n)
                                    for (var o in n.contents)
                                        throw new Ce.ErrnoError(55)
                            }
                            delete e.parent.contents[e.name],
                                e.parent.timestamp = Date.now(),
                                e.name = t,
                                r.contents[t] = e,
                                r.timestamp = e.parent.timestamp,
                                e.parent = r
                        },
                        unlink: function (e, r) {
                            delete e.contents[r],
                                e.timestamp = Date.now()
                        },
                        rmdir: function (e, r) {
                            var t = Ce.lookupNode(e, r);
                            for (var n in t.contents)
                                throw new Ce.ErrnoError(55);
                            delete e.contents[r],
                                e.timestamp = Date.now()
                        },
                        readdir: function (e) {
                            var r = [".", ".."];
                            for (var t in e.contents)
                                e.contents.hasOwnProperty(t) && r.push(t);
                            return r
                        },
                        symlink: function (e, r, t) {
                            var n = ke.createNode(e, r, 41471, 0);
                            return n.link = t,
                                n
                        },
                        readlink: function (e) {
                            if (!Ce.isLink(e.mode))
                                throw new Ce.ErrnoError(28);
                            return e.link
                        }
                    },
                    stream_ops: {
                        read: function (e, r, t, n, o) {
                            var a = e.node.contents;
                            if (o >= e.node.usedBytes)
                                return 0;
                            var i = Math.min(e.node.usedBytes - o, n);
                            if (i > 8 && a.subarray)
                                r.set(a.subarray(o, o + i), t);
                            else
                                for (var s = 0; s < i; s++)
                                    r[t + s] = a[o + s];
                            return i
                        },
                        write: function (e, r, t, n, o, a) {
                            if (r.buffer === j.buffer && (a = !1),
                                !n)
                                return 0;
                            var i = e.node;
                            if (i.timestamp = Date.now(),
                                r.subarray && (!i.contents || i.contents.subarray)) {
                                if (a)
                                    return i.contents = r.subarray(t, t + n),
                                        i.usedBytes = n,
                                        n;
                                if (0 === i.usedBytes && 0 === o)
                                    return i.contents = r.slice(t, t + n),
                                        i.usedBytes = n,
                                        n;
                                if (o + n <= i.usedBytes)
                                    return i.contents.set(r.subarray(t, t + n), o),
                                        n
                            }
                            if (ke.expandFileStorage(i, o + n),
                                i.contents.subarray && r.subarray)
                                i.contents.set(r.subarray(t, t + n), o);
                            else
                                for (var s = 0; s < n; s++)
                                    i.contents[o + s] = r[t + s];
                            return i.usedBytes = Math.max(i.usedBytes, o + n),
                                n
                        },
                        llseek: function (e, r, t) {
                            var n = r;
                            if (1 === t ? n += e.position : 2 === t && Ce.isFile(e.node.mode) && (n += e.node.usedBytes),
                                n < 0)
                                throw new Ce.ErrnoError(28);
                            return n
                        },
                        allocate: function (e, r, t) {
                            ke.expandFileStorage(e.node, r + t),
                                e.node.usedBytes = Math.max(e.node.usedBytes, r + t)
                        },
                        mmap: function (e, r, t, n, o, a) {
                            if (0 !== r)
                                throw new Ce.ErrnoError(28);
                            if (!Ce.isFile(e.node.mode))
                                throw new Ce.ErrnoError(43);
                            var i, s, u = e.node.contents;
                            if (2 & a || u.buffer !== B) {
                                if ((n > 0 || n + t < u.length) && (u = u.subarray ? u.subarray(n, n + t) : Array.prototype.slice.call(u, n, n + t)),
                                    s = !0,
                                    !(i = void ue()))
                                    throw new Ce.ErrnoError(48);
                                i >>>= 0,
                                    j.set(u, i >>> 0)
                            } else
                                s = !1,
                                    i = u.byteOffset;
                            return {
                                ptr: i,
                                allocated: s
                            }
                        },
                        msync: function (e, r, t, n, o) {
                            if (!Ce.isFile(e.node.mode))
                                throw new Ce.ErrnoError(43);
                            return 2 & o || ke.stream_ops.write(e, r, 0, n, t, !1),
                                0
                        }
                    }
                }
                , Ce = {
                    root: null,
                    mounts: [],
                    devices: {},
                    streams: [],
                    nextInode: 1,
                    nameTable: null,
                    currentPath: "/",
                    initialized: !1,
                    ignorePermissions: !0,
                    ErrnoError: null,
                    genericErrors: {},
                    filesystems: null,
                    syncFSRequests: 0,
                    lookupPath: (e, r = {}) => {
                        if (!(e = Ee.resolve(Ce.cwd(), e)))
                            return {
                                path: "",
                                node: null
                            };
                        if ((r = Object.assign({
                            follow_mount: !0,
                            recurse_count: 0
                        }, r)).recurse_count > 8)
                            throw new Ce.ErrnoError(32);
                        for (var t = be.normalizeArray(e.split("/").filter((e => !!e)), !1), n = Ce.root, o = "/", a = 0; a < t.length; a++) {
                            var i = a === t.length - 1;
                            if (i && r.parent)
                                break;
                            if (n = Ce.lookupNode(n, t[a]),
                                o = be.join2(o, t[a]),
                                Ce.isMountpoint(n) && (!i || i && r.follow_mount) && (n = n.mounted.root),
                                !i || r.follow)
                                for (var s = 0; Ce.isLink(n.mode);) {
                                    var u = Ce.readlink(o);
                                    if (o = Ee.resolve(be.dirname(o), u),
                                        n = Ce.lookupPath(o, {
                                            recurse_count: r.recurse_count + 1
                                        }).node,
                                        s++ > 40)
                                        throw new Ce.ErrnoError(32)
                                }
                        }
                        return {
                            path: o,
                            node: n
                        }
                    }
                    ,
                    getPath: e => {
                        for (var r; ;) {
                            if (Ce.isRoot(e)) {
                                var t = e.mount.mountpoint;
                                return r ? "/" !== t[t.length - 1] ? t + "/" + r : t + r : t
                            }
                            r = r ? e.name + "/" + r : e.name,
                                e = e.parent
                        }
                    }
                    ,
                    hashName: (e, r) => {
                        for (var t = 0, n = 0; n < r.length; n++)
                            t = (t << 5) - t + r.charCodeAt(n) | 0;
                        return (e + t >>> 0) % Ce.nameTable.length
                    }
                    ,
                    hashAddNode: e => {
                        var r = Ce.hashName(e.parent.id, e.name);
                        e.name_next = Ce.nameTable[r],
                            Ce.nameTable[r] = e
                    }
                    ,
                    hashRemoveNode: e => {
                        var r = Ce.hashName(e.parent.id, e.name);
                        if (Ce.nameTable[r] === e)
                            Ce.nameTable[r] = e.name_next;
                        else
                            for (var t = Ce.nameTable[r]; t;) {
                                if (t.name_next === e) {
                                    t.name_next = e.name_next;
                                    break
                                }
                                t = t.name_next
                            }
                    }
                    ,
                    lookupNode: (e, r) => {
                        var t = Ce.mayLookup(e);
                        if (t)
                            throw new Ce.ErrnoError(t, e);
                        for (var n = Ce.hashName(e.id, r), o = Ce.nameTable[n]; o; o = o.name_next) {
                            var a = o.name;
                            if (o.parent.id === e.id && a === r)
                                return o
                        }
                        return Ce.lookup(e, r)
                    }
                    ,
                    createNode: (e, r, t, n) => {
                        var o = new Ce.FSNode(e, r, t, n);
                        return Ce.hashAddNode(o),
                            o
                    }
                    ,
                    destroyNode: e => {
                        Ce.hashRemoveNode(e)
                    }
                    ,
                    isRoot: e => e === e.parent,
                    isMountpoint: e => !!e.mounted,
                    isFile: e => 32768 == (61440 & e),
                    isDir: e => 16384 == (61440 & e),
                    isLink: e => 40960 == (61440 & e),
                    isChrdev: e => 8192 == (61440 & e),
                    isBlkdev: e => 24576 == (61440 & e),
                    isFIFO: e => 4096 == (61440 & e),
                    isSocket: e => !(49152 & ~e),
                    flagModes: {
                        r: 0,
                        "r+": 2,
                        w: 577,
                        "w+": 578,
                        a: 1089,
                        "a+": 1090
                    },
                    modeStringToFlags: e => {
                        var r = Ce.flagModes[e];
                        if (void 0 === r)
                            throw new Error("Unknown file open mode: " + e);
                        return r
                    }
                    ,
                    flagsToPermissionString: e => {
                        var r = ["r", "w", "rw"][3 & e];
                        return 512 & e && (r += "w"),
                            r
                    }
                    ,
                    nodePermissions: (e, r) => Ce.ignorePermissions || (!r.includes("r") || 292 & e.mode) && (!r.includes("w") || 146 & e.mode) && (!r.includes("x") || 73 & e.mode) ? 0 : 2,
                    mayLookup: e => Ce.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2),
                    mayCreate: (e, r) => {
                        try {
                            return Ce.lookupNode(e, r),
                                20
                        } catch (e) { }
                        return Ce.nodePermissions(e, "wx")
                    }
                    ,
                    mayDelete: (e, r, t) => {
                        var n;
                        try {
                            n = Ce.lookupNode(e, r)
                        } catch (e) {
                            return e.errno
                        }
                        var o = Ce.nodePermissions(e, "wx");
                        if (o)
                            return o;
                        if (t) {
                            if (!Ce.isDir(n.mode))
                                return 54;
                            if (Ce.isRoot(n) || Ce.getPath(n) === Ce.cwd())
                                return 10
                        } else if (Ce.isDir(n.mode))
                            return 31;
                        return 0
                    }
                    ,
                    mayOpen: (e, r) => e ? Ce.isLink(e.mode) ? 32 : Ce.isDir(e.mode) && ("r" !== Ce.flagsToPermissionString(r) || 512 & r) ? 31 : Ce.nodePermissions(e, Ce.flagsToPermissionString(r)) : 44,
                    MAX_OPEN_FDS: 4096,
                    nextfd: (e = 0, r = Ce.MAX_OPEN_FDS) => {
                        for (var t = e; t <= r; t++)
                            if (!Ce.streams[t])
                                return t;
                        throw new Ce.ErrnoError(33)
                    }
                    ,
                    getStream: e => Ce.streams[e],
                    createStream: (e, r, t) => {
                        Ce.FSStream || (Ce.FSStream = function () {
                            this.shared = {}
                        }
                            ,
                            Ce.FSStream.prototype = {
                                object: {
                                    get: function () {
                                        return this.node
                                    },
                                    set: function (e) {
                                        this.node = e
                                    }
                                },
                                isRead: {
                                    get: function () {
                                        return 1 != (2097155 & this.flags)
                                    }
                                },
                                isWrite: {
                                    get: function () {
                                        return !!(2097155 & this.flags)
                                    }
                                },
                                isAppend: {
                                    get: function () {
                                        return 1024 & this.flags
                                    }
                                },
                                flags: {
                                    get: function () {
                                        return this.shared.flags
                                    },
                                    set: function (e) {
                                        this.shared.flags = e
                                    }
                                },
                                position: {
                                    get function() {
                                        return this.shared.position
                                    },
                                    set: function (e) {
                                        this.shared.position = e
                                    }
                                }
                            }),
                            e = Object.assign(new Ce.FSStream, e);
                        var n = Ce.nextfd(r, t);
                        return e.fd = n,
                            Ce.streams[n] = e,
                            e
                    }
                    ,
                    closeStream: e => {
                        Ce.streams[e] = null
                    }
                    ,
                    chrdev_stream_ops: {
                        open: e => {
                            var r = Ce.getDevice(e.node.rdev);
                            e.stream_ops = r.stream_ops,
                                e.stream_ops.open && e.stream_ops.open(e)
                        }
                        ,
                        llseek: () => {
                            throw new Ce.ErrnoError(70)
                        }
                    },
                    major: e => e >> 8,
                    minor: e => 255 & e,
                    makedev: (e, r) => e << 8 | r,
                    registerDevice: (e, r) => {
                        Ce.devices[e] = {
                            stream_ops: r
                        }
                    }
                    ,
                    getDevice: e => Ce.devices[e],
                    getMounts: e => {
                        for (var r = [], t = [e]; t.length;) {
                            var n = t.pop();
                            r.push(n),
                                t.push.apply(t, n.mounts)
                        }
                        return r
                    }
                    ,
                    syncfs: (e, r) => {
                        "function" == typeof e && (r = e,
                            e = !1),
                            Ce.syncFSRequests++,
                            Ce.syncFSRequests > 1 && b("warning: " + Ce.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                        var t = Ce.getMounts(Ce.root.mount)
                            , n = 0;
                        function o(e) {
                            return Ce.syncFSRequests--,
                                r(e)
                        }
                        function a(e) {
                            if (e)
                                return a.errored ? void 0 : (a.errored = !0,
                                    o(e));
                            ++n >= t.length && o(null)
                        }
                        t.forEach((r => {
                            if (!r.type.syncfs)
                                return a(null);
                            r.type.syncfs(r, e, a)
                        }
                        ))
                    }
                    ,
                    mount: (e, r, t) => {
                        var n, o = "/" === t, a = !t;
                        if (o && Ce.root)
                            throw new Ce.ErrnoError(10);
                        if (!o && !a) {
                            var i = Ce.lookupPath(t, {
                                follow_mount: !1
                            });
                            if (t = i.path,
                                n = i.node,
                                Ce.isMountpoint(n))
                                throw new Ce.ErrnoError(10);
                            if (!Ce.isDir(n.mode))
                                throw new Ce.ErrnoError(54)
                        }
                        var s = {
                            type: e,
                            opts: r,
                            mountpoint: t,
                            mounts: []
                        }
                            , u = e.mount(s);
                        return u.mount = s,
                            s.root = u,
                            o ? Ce.root = u : n && (n.mounted = s,
                                n.mount && n.mount.mounts.push(s)),
                            u
                    }
                    ,
                    unmount: e => {
                        var r = Ce.lookupPath(e, {
                            follow_mount: !1
                        });
                        if (!Ce.isMountpoint(r.node))
                            throw new Ce.ErrnoError(28);
                        var t = r.node
                            , n = t.mounted
                            , o = Ce.getMounts(n);
                        Object.keys(Ce.nameTable).forEach((e => {
                            for (var r = Ce.nameTable[e]; r;) {
                                var t = r.name_next;
                                o.includes(r.mount) && Ce.destroyNode(r),
                                    r = t
                            }
                        }
                        )),
                            t.mounted = null;
                        var a = t.mount.mounts.indexOf(n);
                        t.mount.mounts.splice(a, 1)
                    }
                    ,
                    lookup: (e, r) => e.node_ops.lookup(e, r),
                    mknod: (e, r, t) => {
                        var n = Ce.lookupPath(e, {
                            parent: !0
                        }).node
                            , o = be.basename(e);
                        if (!o || "." === o || ".." === o)
                            throw new Ce.ErrnoError(28);
                        var a = Ce.mayCreate(n, o);
                        if (a)
                            throw new Ce.ErrnoError(a);
                        if (!n.node_ops.mknod)
                            throw new Ce.ErrnoError(63);
                        return n.node_ops.mknod(n, o, r, t)
                    }
                    ,
                    create: (e, r) => (r = void 0 !== r ? r : 438,
                        r &= 4095,
                        r |= 32768,
                        Ce.mknod(e, r, 0)),
                    mkdir: (e, r) => (r = void 0 !== r ? r : 511,
                        r &= 1023,
                        r |= 16384,
                        Ce.mknod(e, r, 0)),
                    mkdirTree: (e, r) => {
                        for (var t = e.split("/"), n = "", o = 0; o < t.length; ++o)
                            if (t[o]) {
                                n += "/" + t[o];
                                try {
                                    Ce.mkdir(n, r)
                                } catch (e) {
                                    if (20 != e.errno)
                                        throw e
                                }
                            }
                    }
                    ,
                    mkdev: (e, r, t) => (void 0 === t && (t = r,
                        r = 438),
                        r |= 8192,
                        Ce.mknod(e, r, t)),
                    symlink: (e, r) => {
                        if (!Ee.resolve(e))
                            throw new Ce.ErrnoError(44);
                        var t = Ce.lookupPath(r, {
                            parent: !0
                        }).node;
                        if (!t)
                            throw new Ce.ErrnoError(44);
                        var n = be.basename(r)
                            , o = Ce.mayCreate(t, n);
                        if (o)
                            throw new Ce.ErrnoError(o);
                        if (!t.node_ops.symlink)
                            throw new Ce.ErrnoError(63);
                        return t.node_ops.symlink(t, n, e)
                    }
                    ,
                    rename: (e, r) => {
                        var t, n, o = be.dirname(e), a = be.dirname(r), i = be.basename(e), s = be.basename(r);
                        if (t = Ce.lookupPath(e, {
                            parent: !0
                        }).node,
                            n = Ce.lookupPath(r, {
                                parent: !0
                            }).node,
                            !t || !n)
                            throw new Ce.ErrnoError(44);
                        if (t.mount !== n.mount)
                            throw new Ce.ErrnoError(75);
                        var u, c = Ce.lookupNode(t, i), l = Ee.relative(e, a);
                        if ("." !== l.charAt(0))
                            throw new Ce.ErrnoError(28);
                        if ("." !== (l = Ee.relative(r, o)).charAt(0))
                            throw new Ce.ErrnoError(55);
                        try {
                            u = Ce.lookupNode(n, s)
                        } catch (e) { }
                        if (c !== u) {
                            var f = Ce.isDir(c.mode)
                                , d = Ce.mayDelete(t, i, f);
                            if (d)
                                throw new Ce.ErrnoError(d);
                            if (d = u ? Ce.mayDelete(n, s, f) : Ce.mayCreate(n, s))
                                throw new Ce.ErrnoError(d);
                            if (!t.node_ops.rename)
                                throw new Ce.ErrnoError(63);
                            if (Ce.isMountpoint(c) || u && Ce.isMountpoint(u))
                                throw new Ce.ErrnoError(10);
                            if (n !== t && (d = Ce.nodePermissions(t, "w")))
                                throw new Ce.ErrnoError(d);
                            Ce.hashRemoveNode(c);
                            try {
                                t.node_ops.rename(c, n, s)
                            } catch (e) {
                                throw e
                            } finally {
                                Ce.hashAddNode(c)
                            }
                        }
                    }
                    ,
                    rmdir: e => {
                        var r = Ce.lookupPath(e, {
                            parent: !0
                        }).node
                            , t = be.basename(e)
                            , n = Ce.lookupNode(r, t)
                            , o = Ce.mayDelete(r, t, !0);
                        if (o)
                            throw new Ce.ErrnoError(o);
                        if (!r.node_ops.rmdir)
                            throw new Ce.ErrnoError(63);
                        if (Ce.isMountpoint(n))
                            throw new Ce.ErrnoError(10);
                        r.node_ops.rmdir(r, t),
                            Ce.destroyNode(n)
                    }
                    ,
                    readdir: e => {
                        var r = Ce.lookupPath(e, {
                            follow: !0
                        }).node;
                        if (!r.node_ops.readdir)
                            throw new Ce.ErrnoError(54);
                        return r.node_ops.readdir(r)
                    }
                    ,
                    unlink: e => {
                        var r = Ce.lookupPath(e, {
                            parent: !0
                        }).node;
                        if (!r)
                            throw new Ce.ErrnoError(44);
                        var t = be.basename(e)
                            , n = Ce.lookupNode(r, t)
                            , o = Ce.mayDelete(r, t, !1);
                        if (o)
                            throw new Ce.ErrnoError(o);
                        if (!r.node_ops.unlink)
                            throw new Ce.ErrnoError(63);
                        if (Ce.isMountpoint(n))
                            throw new Ce.ErrnoError(10);
                        r.node_ops.unlink(r, t),
                            Ce.destroyNode(n)
                    }
                    ,
                    readlink: e => {
                        var r = Ce.lookupPath(e).node;
                        if (!r)
                            throw new Ce.ErrnoError(44);
                        if (!r.node_ops.readlink)
                            throw new Ce.ErrnoError(28);
                        return Ee.resolve(Ce.getPath(r.parent), r.node_ops.readlink(r))
                    }
                    ,
                    stat: (e, r) => {
                        var t = Ce.lookupPath(e, {
                            follow: !r
                        }).node;
                        if (!t)
                            throw new Ce.ErrnoError(44);
                        if (!t.node_ops.getattr)
                            throw new Ce.ErrnoError(63);
                        return t.node_ops.getattr(t)
                    }
                    ,
                    lstat: e => Ce.stat(e, !0),
                    chmod: (e, r, t) => {
                        var n;
                        if (!(n = "string" == typeof e ? Ce.lookupPath(e, {
                            follow: !t
                        }).node : e).node_ops.setattr)
                            throw new Ce.ErrnoError(63);
                        n.node_ops.setattr(n, {
                            mode: 4095 & r | -4096 & n.mode,
                            timestamp: Date.now()
                        })
                    }
                    ,
                    lchmod: (e, r) => {
                        Ce.chmod(e, r, !0)
                    }
                    ,
                    fchmod: (e, r) => {
                        var t = Ce.getStream(e);
                        if (!t)
                            throw new Ce.ErrnoError(8);
                        Ce.chmod(t.node, r)
                    }
                    ,
                    chown: (e, r, t, n) => {
                        var o;
                        if (!(o = "string" == typeof e ? Ce.lookupPath(e, {
                            follow: !n
                        }).node : e).node_ops.setattr)
                            throw new Ce.ErrnoError(63);
                        o.node_ops.setattr(o, {
                            timestamp: Date.now()
                        })
                    }
                    ,
                    lchown: (e, r, t) => {
                        Ce.chown(e, r, t, !0)
                    }
                    ,
                    fchown: (e, r, t) => {
                        var n = Ce.getStream(e);
                        if (!n)
                            throw new Ce.ErrnoError(8);
                        Ce.chown(n.node, r, t)
                    }
                    ,
                    truncate: (e, r) => {
                        if (r < 0)
                            throw new Ce.ErrnoError(28);
                        var t;
                        if (!(t = "string" == typeof e ? Ce.lookupPath(e, {
                            follow: !0
                        }).node : e).node_ops.setattr)
                            throw new Ce.ErrnoError(63);
                        if (Ce.isDir(t.mode))
                            throw new Ce.ErrnoError(31);
                        if (!Ce.isFile(t.mode))
                            throw new Ce.ErrnoError(28);
                        var n = Ce.nodePermissions(t, "w");
                        if (n)
                            throw new Ce.ErrnoError(n);
                        t.node_ops.setattr(t, {
                            size: r,
                            timestamp: Date.now()
                        })
                    }
                    ,
                    ftruncate: (e, r) => {
                        var t = Ce.getStream(e);
                        if (!t)
                            throw new Ce.ErrnoError(8);
                        if (!(2097155 & t.flags))
                            throw new Ce.ErrnoError(28);
                        Ce.truncate(t.node, r)
                    }
                    ,
                    utime: (e, r, t) => {
                        var n = Ce.lookupPath(e, {
                            follow: !0
                        }).node;
                        n.node_ops.setattr(n, {
                            timestamp: Math.max(r, t)
                        })
                    }
                    ,
                    open: (e, r, t) => {
                        if ("" === e)
                            throw new Ce.ErrnoError(44);
                        var n;
                        if (t = void 0 === t ? 438 : t,
                            t = 64 & (r = "string" == typeof r ? Ce.modeStringToFlags(r) : r) ? 4095 & t | 32768 : 0,
                            "object" == typeof e)
                            n = e;
                        else {
                            e = be.normalize(e);
                            try {
                                n = Ce.lookupPath(e, {
                                    follow: !(131072 & r)
                                }).node
                            } catch (e) { }
                        }
                        var a = !1;
                        if (64 & r)
                            if (n) {
                                if (128 & r)
                                    throw new Ce.ErrnoError(20)
                            } else
                                n = Ce.mknod(e, t, 0),
                                    a = !0;
                        if (!n)
                            throw new Ce.ErrnoError(44);
                        if (Ce.isChrdev(n.mode) && (r &= -513),
                            65536 & r && !Ce.isDir(n.mode))
                            throw new Ce.ErrnoError(54);
                        if (!a) {
                            var i = Ce.mayOpen(n, r);
                            if (i)
                                throw new Ce.ErrnoError(i)
                        }
                        512 & r && !a && Ce.truncate(n, 0),
                            r &= -131713;
                        var s = Ce.createStream({
                            node: n,
                            path: Ce.getPath(n),
                            flags: r,
                            seekable: !0,
                            position: 0,
                            stream_ops: n.stream_ops,
                            ungotten: [],
                            error: !1
                        });
                        return s.stream_ops.open && s.stream_ops.open(s),
                            !o.logReadFiles || 1 & r || (Ce.readFiles || (Ce.readFiles = {}),
                                e in Ce.readFiles || (Ce.readFiles[e] = 1)),
                            s
                    }
                    ,
                    close: e => {
                        if (Ce.isClosed(e))
                            throw new Ce.ErrnoError(8);
                        e.getdents && (e.getdents = null);
                        try {
                            e.stream_ops.close && e.stream_ops.close(e)
                        } catch (e) {
                            throw e
                        } finally {
                            Ce.closeStream(e.fd)
                        }
                        e.fd = null
                    }
                    ,
                    isClosed: e => null === e.fd,
                    llseek: (e, r, t) => {
                        if (Ce.isClosed(e))
                            throw new Ce.ErrnoError(8);
                        if (!e.seekable || !e.stream_ops.llseek)
                            throw new Ce.ErrnoError(70);
                        if (0 != t && 1 != t && 2 != t)
                            throw new Ce.ErrnoError(28);
                        return e.position = e.stream_ops.llseek(e, r, t),
                            e.ungotten = [],
                            e.position
                    }
                    ,
                    read: (e, r, t, n, o) => {
                        if (t >>>= 0,
                            n < 0 || o < 0)
                            throw new Ce.ErrnoError(28);
                        if (Ce.isClosed(e))
                            throw new Ce.ErrnoError(8);
                        if (1 == (2097155 & e.flags))
                            throw new Ce.ErrnoError(8);
                        if (Ce.isDir(e.node.mode))
                            throw new Ce.ErrnoError(31);
                        if (!e.stream_ops.read)
                            throw new Ce.ErrnoError(28);
                        var a = void 0 !== o;
                        if (a) {
                            if (!e.seekable)
                                throw new Ce.ErrnoError(70)
                        } else
                            o = e.position;
                        var i = e.stream_ops.read(e, r, t, n, o);
                        return a || (e.position += i),
                            i
                    }
                    ,
                    write: (e, r, t, n, o, a) => {
                        if (t >>>= 0,
                            n < 0 || o < 0)
                            throw new Ce.ErrnoError(28);
                        if (Ce.isClosed(e))
                            throw new Ce.ErrnoError(8);
                        if (!(2097155 & e.flags))
                            throw new Ce.ErrnoError(8);
                        if (Ce.isDir(e.node.mode))
                            throw new Ce.ErrnoError(31);
                        if (!e.stream_ops.write)
                            throw new Ce.ErrnoError(28);
                        e.seekable && 1024 & e.flags && Ce.llseek(e, 0, 2);
                        var i = void 0 !== o;
                        if (i) {
                            if (!e.seekable)
                                throw new Ce.ErrnoError(70)
                        } else
                            o = e.position;
                        var s = e.stream_ops.write(e, r, t, n, o, a);
                        return i || (e.position += s),
                            s
                    }
                    ,
                    allocate: (e, r, t) => {
                        if (Ce.isClosed(e))
                            throw new Ce.ErrnoError(8);
                        if (r < 0 || t <= 0)
                            throw new Ce.ErrnoError(28);
                        if (!(2097155 & e.flags))
                            throw new Ce.ErrnoError(8);
                        if (!Ce.isFile(e.node.mode) && !Ce.isDir(e.node.mode))
                            throw new Ce.ErrnoError(43);
                        if (!e.stream_ops.allocate)
                            throw new Ce.ErrnoError(138);
                        e.stream_ops.allocate(e, r, t)
                    }
                    ,
                    mmap: (e, r, t, n, o, a) => {
                        if (r >>>= 0,
                            2 & o && !(2 & a) && 2 != (2097155 & e.flags))
                            throw new Ce.ErrnoError(2);
                        if (1 == (2097155 & e.flags))
                            throw new Ce.ErrnoError(2);
                        if (!e.stream_ops.mmap)
                            throw new Ce.ErrnoError(43);
                        return e.stream_ops.mmap(e, r, t, n, o, a)
                    }
                    ,
                    msync: (e, r, t, n, o) => (t >>>= 0,
                        e && e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0),
                    munmap: e => 0,
                    ioctl: (e, r, t) => {
                        if (!e.stream_ops.ioctl)
                            throw new Ce.ErrnoError(59);
                        return e.stream_ops.ioctl(e, r, t)
                    }
                    ,
                    readFile: (e, r = {}) => {
                        if (r.flags = r.flags || 0,
                            r.encoding = r.encoding || "binary",
                            "utf8" !== r.encoding && "binary" !== r.encoding)
                            throw new Error('Invalid encoding type "' + r.encoding + '"');
                        var t, n = Ce.open(e, r.flags), o = Ce.stat(e).size, a = new Uint8Array(o);
                        return Ce.read(n, a, 0, o, 0),
                            "utf8" === r.encoding ? t = L(a, 0) : "binary" === r.encoding && (t = a),
                            Ce.close(n),
                            t
                    }
                    ,
                    writeFile: (e, r, t = {}) => {
                        t.flags = t.flags || 577;
                        var n = Ce.open(e, t.flags, t.mode);
                        if ("string" == typeof r) {
                            var o = new Uint8Array(R(r) + 1)
                                , a = T(r, o, 0, o.length);
                            Ce.write(n, o, 0, a, void 0, t.canOwn)
                        } else {
                            if (!ArrayBuffer.isView(r))
                                throw new Error("Unsupported data type");
                            Ce.write(n, r, 0, r.byteLength, void 0, t.canOwn)
                        }
                        Ce.close(n)
                    }
                    ,
                    cwd: () => Ce.currentPath,
                    chdir: e => {
                        var r = Ce.lookupPath(e, {
                            follow: !0
                        });
                        if (null === r.node)
                            throw new Ce.ErrnoError(44);
                        if (!Ce.isDir(r.node.mode))
                            throw new Ce.ErrnoError(54);
                        var t = Ce.nodePermissions(r.node, "x");
                        if (t)
                            throw new Ce.ErrnoError(t);
                        Ce.currentPath = r.path
                    }
                    ,
                    createDefaultDirectories: () => {
                        Ce.mkdir("/tmp"),
                            Ce.mkdir("/home"),
                            Ce.mkdir("/home/web_user")
                    }
                    ,
                    createDefaultDevices: () => {
                        Ce.mkdir("/dev"),
                            Ce.registerDevice(Ce.makedev(1, 3), {
                                read: () => 0,
                                write: (e, r, t, n, o) => n
                            }),
                            Ce.mkdev("/dev/null", Ce.makedev(1, 3)),
                            _e.register(Ce.makedev(5, 0), _e.default_tty_ops),
                            _e.register(Ce.makedev(6, 0), _e.default_tty1_ops),
                            Ce.mkdev("/dev/tty", Ce.makedev(5, 0)),
                            Ce.mkdev("/dev/tty1", Ce.makedev(6, 0));
                        var e = function () {
                            if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                                var e = new Uint8Array(1);
                                return function () {
                                    return crypto.getRandomValues(e),
                                        e[0]
                                }
                            }
                            if (g)
                                try {
                                    var r = require("crypto");
                                    return function () {
                                        return r.randomBytes(1)[0]
                                    }
                                } catch (e) { }
                            return function () {
                                ue("randomDevice")
                            }
                        }();
                        Ce.createDevice("/dev", "random", e),
                            Ce.createDevice("/dev", "urandom", e),
                            Ce.mkdir("/dev/shm"),
                            Ce.mkdir("/dev/shm/tmp")
                    }
                    ,
                    createSpecialDirectories: () => {
                        Ce.mkdir("/proc");
                        var e = Ce.mkdir("/proc/self");
                        Ce.mkdir("/proc/self/fd"),
                            Ce.mount({
                                mount: () => {
                                    var r = Ce.createNode(e, "fd", 16895, 73);
                                    return r.node_ops = {
                                        lookup: (e, r) => {
                                            var t = +r
                                                , n = Ce.getStream(t);
                                            if (!n)
                                                throw new Ce.ErrnoError(8);
                                            var o = {
                                                parent: null,
                                                mount: {
                                                    mountpoint: "fake"
                                                },
                                                node_ops: {
                                                    readlink: () => n.path
                                                }
                                            };
                                            return o.parent = o,
                                                o
                                        }
                                    },
                                        r
                                }
                            }, {}, "/proc/self/fd")
                    }
                    ,
                    createStandardStreams: () => {
                        o.stdin ? Ce.createDevice("/dev", "stdin", o.stdin) : Ce.symlink("/dev/tty", "/dev/stdin"),
                            o.stdout ? Ce.createDevice("/dev", "stdout", null, o.stdout) : Ce.symlink("/dev/tty", "/dev/stdout"),
                            o.stderr ? Ce.createDevice("/dev", "stderr", null, o.stderr) : Ce.symlink("/dev/tty1", "/dev/stderr"),
                            Ce.open("/dev/stdin", 0),
                            Ce.open("/dev/stdout", 1),
                            Ce.open("/dev/stderr", 1)
                    }
                    ,
                    ensureErrnoError: () => {
                        Ce.ErrnoError || (Ce.ErrnoError = function (e, r) {
                            this.node = r,
                                this.setErrno = function (e) {
                                    this.errno = e
                                }
                                ,
                                this.setErrno(e),
                                this.message = "FS error"
                        }
                            ,
                            Ce.ErrnoError.prototype = new Error,
                            Ce.ErrnoError.prototype.constructor = Ce.ErrnoError,
                            [44].forEach((e => {
                                Ce.genericErrors[e] = new Ce.ErrnoError(e),
                                    Ce.genericErrors[e].stack = "<generic error, no stack>"
                            }
                            )))
                    }
                    ,
                    staticInit: () => {
                        Ce.ensureErrnoError(),
                            Ce.nameTable = new Array(4096),
                            Ce.mount(ke, {}, "/"),
                            Ce.createDefaultDirectories(),
                            Ce.createDefaultDevices(),
                            Ce.createSpecialDirectories(),
                            Ce.filesystems = {
                                MEMFS: ke
                            }
                    }
                    ,
                    init: (e, r, t) => {
                        Ce.init.initialized = !0,
                            Ce.ensureErrnoError(),
                            o.stdin = e || o.stdin,
                            o.stdout = r || o.stdout,
                            o.stderr = t || o.stderr,
                            Ce.createStandardStreams()
                    }
                    ,
                    quit: () => {
                        Ce.init.initialized = !1;
                        for (var e = 0; e < Ce.streams.length; e++) {
                            var r = Ce.streams[e];
                            r && Ce.close(r)
                        }
                    }
                    ,
                    getMode: (e, r) => {
                        var t = 0;
                        return e && (t |= 365),
                            r && (t |= 146),
                            t
                    }
                    ,
                    findObject: (e, r) => {
                        var t = Ce.analyzePath(e, r);
                        return t.exists ? t.object : null
                    }
                    ,
                    analyzePath: (e, r) => {
                        try {
                            e = (n = Ce.lookupPath(e, {
                                follow: !r
                            })).path
                        } catch (e) { }
                        var t = {
                            isRoot: !1,
                            exists: !1,
                            error: 0,
                            name: null,
                            path: null,
                            object: null,
                            parentExists: !1,
                            parentPath: null,
                            parentObject: null
                        };
                        try {
                            var n = Ce.lookupPath(e, {
                                parent: !0
                            });
                            t.parentExists = !0,
                                t.parentPath = n.path,
                                t.parentObject = n.node,
                                t.name = be.basename(e),
                                n = Ce.lookupPath(e, {
                                    follow: !r
                                }),
                                t.exists = !0,
                                t.path = n.path,
                                t.object = n.node,
                                t.name = n.node.name,
                                t.isRoot = "/" === n.path
                        } catch (e) {
                            t.error = e.errno
                        }
                        return t
                    }
                    ,
                    createPath: (e, r, t, n) => {
                        e = "string" == typeof e ? e : Ce.getPath(e);
                        for (var o = r.split("/").reverse(); o.length;) {
                            var a = o.pop();
                            if (a) {
                                var i = be.join2(e, a);
                                try {
                                    Ce.mkdir(i)
                                } catch (e) { }
                                e = i
                            }
                        }
                        return i
                    }
                    ,
                    createFile: (e, r, t, n, o) => {
                        var a = be.join2("string" == typeof e ? e : Ce.getPath(e), r)
                            , i = Ce.getMode(n, o);
                        return Ce.create(a, i)
                    }
                    ,
                    createDataFile: (e, r, t, n, o, a) => {
                        var i = r;
                        e && (e = "string" == typeof e ? e : Ce.getPath(e),
                            i = r ? be.join2(e, r) : e);
                        var s = Ce.getMode(n, o)
                            , u = Ce.create(i, s);
                        if (t) {
                            if ("string" == typeof t) {
                                for (var c = new Array(t.length), l = 0, f = t.length; l < f; ++l)
                                    c[l] = t.charCodeAt(l);
                                t = c
                            }
                            Ce.chmod(u, 146 | s);
                            var d = Ce.open(u, 577);
                            Ce.write(d, t, 0, t.length, 0, a),
                                Ce.close(d),
                                Ce.chmod(u, s)
                        }
                        return u
                    }
                    ,
                    createDevice: (e, r, t, n) => {
                        var o = be.join2("string" == typeof e ? e : Ce.getPath(e), r)
                            , a = Ce.getMode(!!t, !!n);
                        Ce.createDevice.major || (Ce.createDevice.major = 64);
                        var i = Ce.makedev(Ce.createDevice.major++, 0);
                        return Ce.registerDevice(i, {
                            open: e => {
                                e.seekable = !1
                            }
                            ,
                            close: e => {
                                n && n.buffer && n.buffer.length && n(10)
                            }
                            ,
                            read: (e, r, n, o, a) => {
                                for (var i = 0, s = 0; s < o; s++) {
                                    var u;
                                    try {
                                        u = t()
                                    } catch (e) {
                                        throw new Ce.ErrnoError(29)
                                    }
                                    if (void 0 === u && 0 === i)
                                        throw new Ce.ErrnoError(6);
                                    if (null == u)
                                        break;
                                    i++,
                                        r[n + s] = u
                                }
                                return i && (e.node.timestamp = Date.now()),
                                    i
                            }
                            ,
                            write: (e, r, t, o, a) => {
                                for (var i = 0; i < o; i++)
                                    try {
                                        n(r[t + i])
                                    } catch (e) {
                                        throw new Ce.ErrnoError(29)
                                    }
                                return o && (e.node.timestamp = Date.now()),
                                    i
                            }
                        }),
                            Ce.mkdev(o, a, i)
                    }
                    ,
                    forceLoadFile: e => {
                        if (e.isDevice || e.isFolder || e.link || e.contents)
                            return !0;
                        if ("undefined" != typeof XMLHttpRequest)
                            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                        if (!a)
                            throw new Error("Cannot load without read() or XMLHttpRequest.");
                        try {
                            e.contents = pt(a(e.url), !0),
                                e.usedBytes = e.contents.length
                        } catch (e) {
                            throw new Ce.ErrnoError(29)
                        }
                    }
                    ,
                    createLazyFile: (e, r, t, n, o) => {
                        function a() {
                            this.lengthKnown = !1,
                                this.chunks = []
                        }
                        if (a.prototype.get = function (e) {
                            if (!(e > this.length - 1 || e < 0)) {
                                var r = e % this.chunkSize
                                    , t = e / this.chunkSize | 0;
                                return this.getter(t)[r]
                            }
                        }
                            ,
                            a.prototype.setDataGetter = function (e) {
                                this.getter = e
                            }
                            ,
                            a.prototype.cacheLength = function () {
                                var e = new XMLHttpRequest;
                                if (e.open("HEAD", t, !1),
                                    e.send(null),
                                    !(e.status >= 200 && e.status < 300 || 304 === e.status))
                                    throw new Error("Couldn't load " + t + ". Status: " + e.status);
                                var r, n = Number(e.getResponseHeader("Content-length")), o = (r = e.getResponseHeader("Accept-Ranges")) && "bytes" === r, a = (r = e.getResponseHeader("Content-Encoding")) && "gzip" === r, i = 1048576;
                                o || (i = n);
                                var s = this;
                                s.setDataGetter((e => {
                                    var r = e * i
                                        , o = (e + 1) * i - 1;
                                    if (o = Math.min(o, n - 1),
                                        void 0 === s.chunks[e] && (s.chunks[e] = ((e, r) => {
                                            if (e > r)
                                                throw new Error("invalid range (" + e + ", " + r + ") or no bytes requested!");
                                            if (r > n - 1)
                                                throw new Error("only " + n + " bytes available! programmer error!");
                                            var o = new XMLHttpRequest;
                                            if (o.open("GET", t, !1),
                                                n !== i && o.setRequestHeader("Range", "bytes=" + e + "-" + r),
                                                o.responseType = "arraybuffer",
                                                o.overrideMimeType && o.overrideMimeType("text/plain; charset=x-user-defined"),
                                                o.send(null),
                                                !(o.status >= 200 && o.status < 300 || 304 === o.status))
                                                throw new Error("Couldn't load " + t + ". Status: " + o.status);
                                            return void 0 !== o.response ? new Uint8Array(o.response || []) : pt(o.responseText || "", !0)
                                        }
                                        )(r, o)),
                                        void 0 === s.chunks[e])
                                        throw new Error("doXHR failed!");
                                    return s.chunks[e]
                                }
                                )),
                                    !a && n || (i = n = 1,
                                        n = this.getter(0).length,
                                        i = n,
                                        w("LazyFiles on gzip forces download of the whole file when length is accessed")),
                                    this._length = n,
                                    this._chunkSize = i,
                                    this.lengthKnown = !0
                            }
                            ,
                            "undefined" != typeof XMLHttpRequest) {
                            if (!v)
                                throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                            var i = new a;
                            Object.defineProperties(i, {
                                length: {
                                    get: function () {
                                        return this.lengthKnown || this.cacheLength(),
                                            this._length
                                    }
                                },
                                chunkSize: {
                                    get: function () {
                                        return this.lengthKnown || this.cacheLength(),
                                            this._chunkSize
                                    }
                                }
                            });
                            var s = {
                                isDevice: !1,
                                contents: i
                            }
                        } else
                            s = {
                                isDevice: !1,
                                url: t
                            };
                        var u = Ce.createFile(e, r, s, n, o);
                        s.contents ? u.contents = s.contents : s.url && (u.contents = null,
                            u.url = s.url),
                            Object.defineProperties(u, {
                                usedBytes: {
                                    get: function () {
                                        return this.contents.length
                                    }
                                }
                            });
                        var c = {};
                        return Object.keys(u.stream_ops).forEach((e => {
                            var r = u.stream_ops[e];
                            c[e] = function () {
                                return Ce.forceLoadFile(u),
                                    r.apply(null, arguments)
                            }
                        }
                        )),
                            c.read = (e, r, t, n, o) => {
                                Ce.forceLoadFile(u);
                                var a = e.node.contents;
                                if (o >= a.length)
                                    return 0;
                                var i = Math.min(a.length - o, n);
                                if (a.slice)
                                    for (var s = 0; s < i; s++)
                                        r[t + s] = a[o + s];
                                else
                                    for (s = 0; s < i; s++)
                                        r[t + s] = a.get(o + s);
                                return i
                            }
                            ,
                            u.stream_ops = c,
                            u
                    }
                    ,
                    createPreloadedFile: (e, r, t, n, o, a, s, u, c, l) => {
                        var f = r ? Ee.resolve(be.join2(e, r)) : e;
                        function d(t) {
                            function i(t) {
                                l && l(),
                                    u || Ce.createDataFile(e, r, t, n, o, c),
                                    a && a(),
                                    se()
                            }
                            Nr.handledByPreloadPlugin(t, f, i, (() => {
                                s && s(),
                                    se()
                            }
                            )) || i(t)
                        }
                        ie(),
                            "string" == typeof t ? function (e, r, t, n) {
                                var o = "al " + e;
                                i(e, (function (r) {
                                    S(r, 'Loading data file "' + e + '" failed (no arrayBuffer).'),
                                        d(new Uint8Array(r)),
                                        o && se()
                                }
                                ), (function (r) {
                                    if (!t)
                                        throw 'Loading data file "' + e + '" failed.';
                                    t()
                                }
                                )),
                                    o && ie()
                            }(t, 0, s) : d(t)
                    }
                    ,
                    indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                    DB_NAME: () => "EM_FS_" + window.location.pathname,
                    DB_VERSION: 20,
                    DB_STORE_NAME: "FILE_DATA",
                    saveFilesToDB: (e, r, t) => {
                        r = r || (() => { }
                        ),
                            t = t || (() => { }
                            );
                        var n = Ce.indexedDB();
                        try {
                            var o = n.open(Ce.DB_NAME(), Ce.DB_VERSION)
                        } catch (e) {
                            return t(e)
                        }
                        o.onupgradeneeded = () => {
                            w("creating db"),
                                o.result.createObjectStore(Ce.DB_STORE_NAME)
                        }
                            ,
                            o.onsuccess = () => {
                                var n = o.result.transaction([Ce.DB_STORE_NAME], "readwrite")
                                    , a = n.objectStore(Ce.DB_STORE_NAME)
                                    , i = 0
                                    , s = 0
                                    , u = e.length;
                                function c() {
                                    0 == s ? r() : t()
                                }
                                e.forEach((e => {
                                    var r = a.put(Ce.analyzePath(e).object.contents, e);
                                    r.onsuccess = () => {
                                        ++i + s == u && c()
                                    }
                                        ,
                                        r.onerror = () => {
                                            s++,
                                                i + s == u && c()
                                        }
                                }
                                )),
                                    n.onerror = t
                            }
                            ,
                            o.onerror = t
                    }
                    ,
                    loadFilesFromDB: (e, r, t) => {
                        r = r || (() => { }
                        ),
                            t = t || (() => { }
                            );
                        var n = Ce.indexedDB();
                        try {
                            var o = n.open(Ce.DB_NAME(), Ce.DB_VERSION)
                        } catch (e) {
                            return t(e)
                        }
                        o.onupgradeneeded = t,
                            o.onsuccess = () => {
                                var n = o.result;
                                try {
                                    var a = n.transaction([Ce.DB_STORE_NAME], "readonly")
                                } catch (e) {
                                    return void t(e)
                                }
                                var i = a.objectStore(Ce.DB_STORE_NAME)
                                    , s = 0
                                    , u = 0
                                    , c = e.length;
                                function l() {
                                    0 == u ? r() : t()
                                }
                                e.forEach((e => {
                                    var r = i.get(e);
                                    r.onsuccess = () => {
                                        Ce.analyzePath(e).exists && Ce.unlink(e),
                                            Ce.createDataFile(be.dirname(e), be.basename(e), r.result, !0, !0, !0),
                                            ++s + u == c && l()
                                    }
                                        ,
                                        r.onerror = () => {
                                            u++,
                                                s + u == c && l()
                                        }
                                }
                                )),
                                    a.onerror = t
                            }
                            ,
                            o.onerror = t
                    }
                }
                , xe = {
                    DEFAULT_POLLMASK: 5,
                    calculateAt: function (e, r, t) {
                        if (be.isAbs(r))
                            return r;
                        var n;
                        if (-100 === e)
                            n = Ce.cwd();
                        else {
                            var o = Ce.getStream(e);
                            if (!o)
                                throw new Ce.ErrnoError(8);
                            n = o.path
                        }
                        if (0 == r.length) {
                            if (!t)
                                throw new Ce.ErrnoError(44);
                            return n
                        }
                        return be.join2(n, r)
                    },
                    doStat: function (e, r, t) {
                        try {
                            var n = e(r)
                        } catch (e) {
                            if (e && e.node && be.normalize(r) !== be.normalize(Ce.getPath(e.node)))
                                return -54;
                            throw e
                        }
                        return z[t >>> 2] = n.dev,
                            z[t + 4 >>> 2] = 0,
                            z[t + 8 >>> 2] = n.ino,
                            z[t + 12 >>> 2] = n.mode,
                            z[t + 16 >>> 2] = n.nlink,
                            z[t + 20 >>> 2] = n.uid,
                            z[t + 24 >>> 2] = n.gid,
                            z[t + 28 >>> 2] = n.rdev,
                            z[t + 32 >>> 2] = 0,
                            de = [n.size >>> 0, (fe = n.size,
                                +Math.abs(fe) >= 1 ? fe > 0 ? (0 | Math.min(+Math.floor(fe / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((fe - +(~~fe >>> 0)) / 4294967296) >>> 0 : 0)],
                            z[t + 40 >>> 2] = de[0],
                            z[t + 44 >>> 2] = de[1],
                            z[t + 48 >>> 2] = 4096,
                            z[t + 52 >>> 2] = n.blocks,
                            z[t + 56 >>> 2] = n.atime.getTime() / 1e3 | 0,
                            z[t + 60 >>> 2] = 0,
                            z[t + 64 >>> 2] = n.mtime.getTime() / 1e3 | 0,
                            z[t + 68 >>> 2] = 0,
                            z[t + 72 >>> 2] = n.ctime.getTime() / 1e3 | 0,
                            z[t + 76 >>> 2] = 0,
                            de = [n.ino >>> 0, (fe = n.ino,
                                +Math.abs(fe) >= 1 ? fe > 0 ? (0 | Math.min(+Math.floor(fe / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((fe - +(~~fe >>> 0)) / 4294967296) >>> 0 : 0)],
                            z[t + 80 >>> 2] = de[0],
                            z[t + 84 >>> 2] = de[1],
                            0
                    },
                    doMsync: function (e, r, t, n, o) {
                        var a = $.slice(e, e + t);
                        Ce.msync(r, a, o, t, n)
                    },
                    varargs: void 0,
                    get: function () {
                        return xe.varargs += 4,
                            z[xe.varargs - 4 >>> 2]
                    },
                    getStr: function (e) {
                        return D(e)
                    },
                    getStreamFromFD: function (e) {
                        var r = Ce.getStream(e);
                        if (!r)
                            throw new Ce.ErrnoError(8);
                        return r
                    }
                }
                , Pe = {};
            function Fe(e) {
                for (; e.length;) {
                    var r = e.pop();
                    e.pop()(r)
                }
            }
            function Se(e) {
                return this.fromWireType(N[e >>> 2])
            }
            var Ae = {}
                , Le = {}
                , De = {}
                , Te = 48
                , Me = 57;
            function Re(e) {
                if (void 0 === e)
                    return "_unknown";
                var r = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                return r >= Te && r <= Me ? "_" + e : e
            }
            function Be(e, r) {
                return e = Re(e),
                    new Function("body", "return function " + e + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
            }
            function je(e, r) {
                var t = Be(r, (function (e) {
                    this.name = r,
                        this.message = e;
                    var t = new Error(e).stack;
                    void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
                }
                ));
                return t.prototype = Object.create(e.prototype),
                    t.prototype.constructor = t,
                    t.prototype.toString = function () {
                        return void 0 === this.message ? this.name : this.name + ": " + this.message
                    }
                    ,
                    t
            }
            var $e = void 0;
            function Oe(e) {
                throw new $e(e)
            }
            function Ie(e, r, t) {
                function n(r) {
                    var n = t(r);
                    n.length !== e.length && Oe("Mismatched type converter count");
                    for (var o = 0; o < e.length; ++o)
                        He(e[o], n[o])
                }
                e.forEach((function (e) {
                    De[e] = r
                }
                ));
                var o = new Array(r.length)
                    , a = []
                    , i = 0;
                r.forEach(((e, r) => {
                    Le.hasOwnProperty(e) ? o[r] = Le[e] : (a.push(e),
                        Ae.hasOwnProperty(e) || (Ae[e] = []),
                        Ae[e].push((() => {
                            o[r] = Le[e],
                                ++i === a.length && n(o)
                        }
                        )))
                }
                )),
                    0 === a.length && n(o)
            }
            var ze = {};
            function Ne(e) {
                switch (e) {
                    case 1:
                        return 0;
                    case 2:
                        return 1;
                    case 4:
                        return 2;
                    case 8:
                        return 3;
                    default:
                        throw new TypeError("Unknown type size: " + e)
                }
            }
            var Ue = void 0;
            function We(e) {
                for (var r = "", t = e; $[t >>> 0];)
                    r += Ue[$[t++ >>> 0]];
                return r
            }
            var qe = void 0;
            function Ve(e) {
                throw new qe(e)
            }
            function He(e, r, t = {}) {
                if (!("argPackAdvance" in r))
                    throw new TypeError("registerType registeredInstance requires argPackAdvance");
                var n = r.name;
                if (e || Ve('type "' + n + '" must have a positive integer typeid pointer'),
                    Le.hasOwnProperty(e)) {
                    if (t.ignoreDuplicateRegistrations)
                        return;
                    Ve("Cannot register type '" + n + "' twice")
                }
                if (Le[e] = r,
                    delete De[e],
                    Ae.hasOwnProperty(e)) {
                    var o = Ae[e];
                    delete Ae[e],
                        o.forEach((e => e()))
                }
            }
            function Ge(e) {
                Ve(e.$$.ptrType.registeredClass.name + " instance already deleted")
            }
            var Ye = !1;
            function Xe(e) { }
            function Ke(e) {
                e.count.value -= 1,
                    0 === e.count.value && function (e) {
                        e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr)
                    }(e)
            }
            function Je(e, r, t) {
                if (r === t)
                    return e;
                if (void 0 === t.baseClass)
                    return null;
                var n = Je(e, r, t.baseClass);
                return null === n ? null : t.downcast(n)
            }
            var Ze = {};
            var Qe = [];
            function er() {
                for (; Qe.length;) {
                    var e = Qe.pop();
                    e.$$.deleteScheduled = !1,
                        e.delete()
                }
            }
            var rr = void 0;
            var tr = {};
            function nr(e, r) {
                return r.ptrType && r.ptr || Oe("makeClassHandle requires ptr and ptrType"),
                    !!r.smartPtrType != !!r.smartPtr && Oe("Both smartPtrType and smartPtr must be specified"),
                    r.count = {
                        value: 1
                    },
                    or(Object.create(e, {
                        $$: {
                            value: r
                        }
                    }))
            }
            function or(e) {
                return "undefined" == typeof FinalizationRegistry ? (or = e => e,
                    e) : (Ye = new FinalizationRegistry((e => {
                        Ke(e.$$)
                    }
                    )),
                        or = e => {
                            var r = e.$$;
                            if (r.smartPtr) {
                                var t = {
                                    $$: r
                                };
                                Ye.register(e, t, e)
                            }
                            return e
                        }
                        ,
                        Xe = e => Ye.unregister(e),
                        or(e))
            }
            function ar() { }
            function ir(e, r, t) {
                if (void 0 === e[r].overloadTable) {
                    var n = e[r];
                    e[r] = function () {
                        return e[r].overloadTable.hasOwnProperty(arguments.length) || Ve("Function '" + t + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[r].overloadTable + ")!"),
                            e[r].overloadTable[arguments.length].apply(this, arguments)
                    }
                        ,
                        e[r].overloadTable = [],
                        e[r].overloadTable[n.argCount] = n
                }
            }
            function sr(e, r, t) {
                o.hasOwnProperty(e) ? ((void 0 === t || void 0 !== o[e].overloadTable && void 0 !== o[e].overloadTable[t]) && Ve("Cannot register public name '" + e + "' twice"),
                    ir(o, e, e),
                    o.hasOwnProperty(t) && Ve("Cannot register multiple overloads of a function with the same number of arguments (" + t + ")!"),
                    o[e].overloadTable[t] = r) : (o[e] = r,
                        void 0 !== t && (o[e].numArguments = t))
            }
            function ur(e, r, t, n, o, a, i, s) {
                this.name = e,
                    this.constructor = r,
                    this.instancePrototype = t,
                    this.rawDestructor = n,
                    this.baseClass = o,
                    this.getActualType = a,
                    this.upcast = i,
                    this.downcast = s,
                    this.pureVirtualFunctions = []
            }
            function cr(e, r, t) {
                for (; r !== t;)
                    r.upcast || Ve("Expected null or instance of " + t.name + ", got an instance of " + r.name),
                        e = r.upcast(e),
                        r = r.baseClass;
                return e
            }
            function lr(e, r) {
                if (null === r)
                    return this.isReference && Ve("null is not a valid " + this.name),
                        0;
                r.$$ || Ve('Cannot pass "' + Sr(r) + '" as a ' + this.name),
                    r.$$.ptr || Ve("Cannot pass deleted object as a pointer of type " + this.name);
                var t = r.$$.ptrType.registeredClass;
                return cr(r.$$.ptr, t, this.registeredClass)
            }
            function fr(e, r) {
                var t;
                if (null === r)
                    return this.isReference && Ve("null is not a valid " + this.name),
                        this.isSmartPointer ? (t = this.rawConstructor(),
                            null !== e && e.push(this.rawDestructor, t),
                            t) : 0;
                r.$$ || Ve('Cannot pass "' + Sr(r) + '" as a ' + this.name),
                    r.$$.ptr || Ve("Cannot pass deleted object as a pointer of type " + this.name),
                    !this.isConst && r.$$.ptrType.isConst && Ve("Cannot convert argument of type " + (r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name) + " to parameter type " + this.name);
                var n = r.$$.ptrType.registeredClass;
                if (t = cr(r.$$.ptr, n, this.registeredClass),
                    this.isSmartPointer)
                    switch (void 0 === r.$$.smartPtr && Ve("Passing raw pointer to smart pointer is illegal"),
                    this.sharingPolicy) {
                        case 0:
                            r.$$.smartPtrType === this ? t = r.$$.smartPtr : Ve("Cannot convert argument of type " + (r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name) + " to parameter type " + this.name);
                            break;
                        case 1:
                            t = r.$$.smartPtr;
                            break;
                        case 2:
                            if (r.$$.smartPtrType === this)
                                t = r.$$.smartPtr;
                            else {
                                var o = r.clone();
                                t = this.rawShare(t, xr.toHandle((function () {
                                    o.delete()
                                }
                                ))),
                                    null !== e && e.push(this.rawDestructor, t)
                            }
                            break;
                        default:
                            Ve("Unsupporting sharing policy")
                    }
                return t
            }
            function dr(e, r) {
                if (null === r)
                    return this.isReference && Ve("null is not a valid " + this.name),
                        0;
                r.$$ || Ve('Cannot pass "' + Sr(r) + '" as a ' + this.name),
                    r.$$.ptr || Ve("Cannot pass deleted object as a pointer of type " + this.name),
                    r.$$.ptrType.isConst && Ve("Cannot convert argument of type " + r.$$.ptrType.name + " to parameter type " + this.name);
                var t = r.$$.ptrType.registeredClass;
                return cr(r.$$.ptr, t, this.registeredClass)
            }
            function mr(e, r, t, n, o, a, i, s, u, c, l) {
                this.name = e,
                    this.registeredClass = r,
                    this.isReference = t,
                    this.isConst = n,
                    this.isSmartPointer = o,
                    this.pointeeType = a,
                    this.sharingPolicy = i,
                    this.rawGetPointee = s,
                    this.rawConstructor = u,
                    this.rawShare = c,
                    this.rawDestructor = l,
                    o || void 0 !== r.baseClass ? this.toWireType = fr : n ? (this.toWireType = lr,
                        this.destructorFunction = null) : (this.toWireType = dr,
                            this.destructorFunction = null)
            }
            function pr(e, r, t) {
                o.hasOwnProperty(e) || Oe("Replacing nonexistant public symbol"),
                    void 0 !== o[e].overloadTable && void 0 !== t ? o[e].overloadTable[t] = r : (o[e] = r,
                        o[e].argCount = t)
            }
            function hr(e, r) {
                var t, n, a, i = (e = We(e)).includes("j") ? (t = e,
                    n = r,
                    a = [],
                    function () {
                        return a.length = 0,
                            Object.assign(a, arguments),
                            function (e, r, t) {
                                return e.includes("j") ? function (e, r, t) {
                                    var n = o["dynCall_" + e];
                                    return t && t.length ? n.apply(null, [r].concat(t)) : n.call(null, r)
                                }(e, r, t) : ye(r).apply(null, t)
                            }(t, n, a)
                    }
                ) : ye(r);
                return "function" != typeof i && Ve("unknown function pointer with signature " + e + ": " + r),
                    i
            }
            var vr = void 0;
            function gr(e) {
                var r = bt(e)
                    , t = We(r);
                return wt(r),
                    t
            }
            function yr(e, r) {
                var t = []
                    , n = {};
                throw r.forEach((function e(r) {
                    n[r] || Le[r] || (De[r] ? De[r].forEach(e) : (t.push(r),
                        n[r] = !0))
                }
                )),
                new vr(e + ": " + t.map(gr).join([", "]))
            }
            function wr(e, r) {
                for (var t = [], n = 0; n < e; n++)
                    t.push(z[(r >> 2) + n >>> 0]);
                return t
            }
            function br(e, r) {
                if (!(e instanceof Function))
                    throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
                var t = Be(e.name || "unknownFunctionName", (function () { }
                ));
                t.prototype = e.prototype;
                var n = new t
                    , o = e.apply(n, r);
                return o instanceof Object ? o : n
            }
            function Er(e, r, t, n, o) {
                var a = r.length;
                a < 2 && Ve("argTypes array size mismatch! Must at least get return value and 'this' types!");
                for (var i = null !== r[1] && null !== t, s = !1, u = 1; u < r.length; ++u)
                    if (null !== r[u] && void 0 === r[u].destructorFunction) {
                        s = !0;
                        break
                    }
                var c = "void" !== r[0].name
                    , l = ""
                    , f = "";
                for (u = 0; u < a - 2; ++u)
                    l += (0 !== u ? ", " : "") + "arg" + u,
                        f += (0 !== u ? ", " : "") + "arg" + u + "Wired";
                var d = "return function " + Re(e) + "(" + l + ") {\nif (arguments.length !== " + (a - 2) + ") {\nthrowBindingError('function " + e + " called with ' + arguments.length + ' arguments, expected " + (a - 2) + " args!');\n}\n";
                s && (d += "var destructors = [];\n");
                var m = s ? "destructors" : "null"
                    , p = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"]
                    , h = [Ve, n, o, Fe, r[0], r[1]];
                for (i && (d += "var thisWired = classParam.toWireType(" + m + ", this);\n"),
                    u = 0; u < a - 2; ++u)
                    d += "var arg" + u + "Wired = argType" + u + ".toWireType(" + m + ", arg" + u + "); // " + r[u + 2].name + "\n",
                        p.push("argType" + u),
                        h.push(r[u + 2]);
                if (i && (f = "thisWired" + (f.length > 0 ? ", " : "") + f),
                    d += (c ? "var rv = " : "") + "invoker(fn" + (f.length > 0 ? ", " : "") + f + ");\n",
                    s)
                    d += "runDestructors(destructors);\n";
                else
                    for (u = i ? 1 : 2; u < r.length; ++u) {
                        var v = 1 === u ? "thisWired" : "arg" + (u - 2) + "Wired";
                        null !== r[u].destructorFunction && (d += v + "_dtor(" + v + "); // " + r[u].name + "\n",
                            p.push(v + "_dtor"),
                            h.push(r[u].destructorFunction))
                    }
                return c && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
                    d += "}\n",
                    p.push(d),
                    br(Function, p).apply(null, h)
            }
            var _r = []
                , kr = [{}, {
                    value: void 0
                }, {
                    value: null
                }, {
                    value: !0
                }, {
                    value: !1
                }];
            function Cr(e) {
                e > 4 && 0 == --kr[e].refcount && (kr[e] = void 0,
                    _r.push(e))
            }
            var xr = {
                toValue: e => (e || Ve("Cannot use deleted val. handle = " + e),
                    kr[e].value),
                toHandle: e => {
                    switch (e) {
                        case void 0:
                            return 1;
                        case null:
                            return 2;
                        case !0:
                            return 3;
                        case !1:
                            return 4;
                        default:
                            var r = _r.length ? _r.pop() : kr.length;
                            return kr[r] = {
                                refcount: 1,
                                value: e
                            },
                                r
                    }
                }
            };
            function Pr(e, r, t) {
                switch (r) {
                    case 0:
                        return function (e) {
                            var r = t ? j : $;
                            return this.fromWireType(r[e >>> 0])
                        }
                            ;
                    case 1:
                        return function (e) {
                            var r = t ? O : I;
                            return this.fromWireType(r[e >>> 1])
                        }
                            ;
                    case 2:
                        return function (e) {
                            var r = t ? z : N;
                            return this.fromWireType(r[e >>> 2])
                        }
                            ;
                    default:
                        throw new TypeError("Unknown integer type: " + e)
                }
            }
            function Fr(e, r) {
                var t = Le[e];
                return void 0 === t && Ve(r + " has unknown type " + gr(e)),
                    t
            }
            function Sr(e) {
                if (null === e)
                    return "null";
                var r = typeof e;
                return "object" === r || "array" === r || "function" === r ? e.toString() : "" + e
            }
            function Ar(e, r) {
                switch (r) {
                    case 2:
                        return function (e) {
                            return this.fromWireType(U[e >>> 2])
                        }
                            ;
                    case 3:
                        return function (e) {
                            return this.fromWireType(W[e >>> 3])
                        }
                            ;
                    default:
                        throw new TypeError("Unknown float type: " + e)
                }
            }
            function Lr(e, r, t) {
                switch (r) {
                    case 0:
                        return t ? function (e) {
                            return j[e >>> 0]
                        }
                            : function (e) {
                                return $[e >>> 0]
                            }
                            ;
                    case 1:
                        return t ? function (e) {
                            return O[e >>> 1]
                        }
                            : function (e) {
                                return I[e >>> 1]
                            }
                            ;
                    case 2:
                        return t ? function (e) {
                            return z[e >>> 2]
                        }
                            : function (e) {
                                return N[e >>> 2]
                            }
                            ;
                    default:
                        throw new TypeError("Unknown integer type: " + e)
                }
            }
            function Dr(e, r) {
                for (var t = new Array(e), n = 0; n < e; ++n)
                    t[n] = Fr(z[(r >> 2) + n >>> 0], "parameter " + n);
                return t
            }
            var Tr = {};
            function Mr(e) {
                var r = Tr[e];
                return void 0 === r ? We(e) : r
            }
            var Rr = [];
            function Br() {
                return "object" == typeof globalThis ? globalThis : Function("return this")()
            }
            var jr, $r = [];
            function Or(e, r) {
                if (Nr.mainLoop.timingMode = e,
                    Nr.mainLoop.timingValue = r,
                    !Nr.mainLoop.func)
                    return 1;
                if (Nr.mainLoop.running || (Nr.mainLoop.running = !0),
                    0 == e)
                    Nr.mainLoop.scheduler = function () {
                        var e = 0 | Math.max(0, Nr.mainLoop.tickStartTime + r - jr());
                        setTimeout(Nr.mainLoop.runner, e)
                    }
                        ,
                        Nr.mainLoop.method = "timeout";
                else if (1 == e)
                    Nr.mainLoop.scheduler = function () {
                        Nr.requestAnimationFrame(Nr.mainLoop.runner)
                    }
                        ,
                        Nr.mainLoop.method = "rAF";
                else if (2 == e) {
                    if ("undefined" == typeof setImmediate) {
                        var t = []
                            , n = "setimmediate";
                        addEventListener("message", (function (e) {
                            e.data !== n && e.data.target !== n || (e.stopPropagation(),
                                t.shift()())
                        }
                        ), !0),
                            setImmediate = function (e) {
                                t.push(e),
                                    v ? (void 0 === o.setImmediates && (o.setImmediates = []),
                                        o.setImmediates.push(e),
                                        postMessage({
                                            target: n
                                        })) : postMessage(n, "*")
                            }
                    }
                    Nr.mainLoop.scheduler = function () {
                        setImmediate(Nr.mainLoop.runner)
                    }
                        ,
                        Nr.mainLoop.method = "immediate"
                }
                return 0
            }
            function Ir(e, r) {
                if (!F)
                    if (r)
                        e();
                    else
                        try {
                            e()
                        } catch (e) {
                            !function (e) {
                                if (e instanceof xt || "unwind" == e)
                                    return P;
                                p(1, e)
                            }(e)
                        }
            }
            function zr(e, r) {
                return setTimeout((function () {
                    Ir(e)
                }
                ), r)
            }
            jr = g ? () => {
                var e = process.hrtime();
                return 1e3 * e[0] + e[1] / 1e6
            }
                : () => performance.now();
            var Nr = {
                mainLoop: {
                    running: !1,
                    scheduler: null,
                    method: "",
                    currentlyRunningMainloop: 0,
                    func: null,
                    arg: 0,
                    timingMode: 0,
                    timingValue: 0,
                    currentFrameNumber: 0,
                    queue: [],
                    pause: function () {
                        Nr.mainLoop.scheduler = null,
                            Nr.mainLoop.currentlyRunningMainloop++
                    },
                    resume: function () {
                        Nr.mainLoop.currentlyRunningMainloop++;
                        var e = Nr.mainLoop.timingMode
                            , r = Nr.mainLoop.timingValue
                            , t = Nr.mainLoop.func;
                        Nr.mainLoop.func = null,
                            function (e, r, t, n, o) {
                                S(!Nr.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),
                                    Nr.mainLoop.func = e,
                                    Nr.mainLoop.arg = n;
                                var a = Nr.mainLoop.currentlyRunningMainloop;
                                function i() {
                                    return !(a < Nr.mainLoop.currentlyRunningMainloop)
                                }
                                Nr.mainLoop.running = !1,
                                    Nr.mainLoop.runner = function () {
                                        if (!F)
                                            if (Nr.mainLoop.queue.length > 0) {
                                                var r = Date.now()
                                                    , t = Nr.mainLoop.queue.shift();
                                                if (t.func(t.arg),
                                                    Nr.mainLoop.remainingBlockers) {
                                                    var n = Nr.mainLoop.remainingBlockers
                                                        , o = n % 1 == 0 ? n - 1 : Math.floor(n);
                                                    t.counted ? Nr.mainLoop.remainingBlockers = o : (o += .5,
                                                        Nr.mainLoop.remainingBlockers = (8 * n + o) / 9)
                                                }
                                                if (w('main loop blocker "' + t.name + '" took ' + (Date.now() - r) + " ms"),
                                                    Nr.mainLoop.updateStatus(),
                                                    !i())
                                                    return;
                                                setTimeout(Nr.mainLoop.runner, 0)
                                            } else
                                                i() && (Nr.mainLoop.currentFrameNumber = Nr.mainLoop.currentFrameNumber + 1 | 0,
                                                    1 == Nr.mainLoop.timingMode && Nr.mainLoop.timingValue > 1 && Nr.mainLoop.currentFrameNumber % Nr.mainLoop.timingValue != 0 ? Nr.mainLoop.scheduler() : (0 == Nr.mainLoop.timingMode && (Nr.mainLoop.tickStartTime = jr()),
                                                        Nr.mainLoop.runIter(e),
                                                        i() && ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(),
                                                            Nr.mainLoop.scheduler())))
                                    }
                            }(t, 0, 0, Nr.mainLoop.arg),
                            Or(e, r),
                            Nr.mainLoop.scheduler()
                    },
                    updateStatus: function () {
                        if (o.setStatus) {
                            var e = o.statusMessage || "Please wait..."
                                , r = Nr.mainLoop.remainingBlockers
                                , t = Nr.mainLoop.expectedBlockers;
                            r ? r < t ? o.setStatus(e + " (" + (t - r) + "/" + t + ")") : o.setStatus(e) : o.setStatus("")
                        }
                    },
                    runIter: function (e) {
                        if (!F) {
                            if (o.preMainLoop && !1 === o.preMainLoop())
                                return;
                            Ir(e),
                                o.postMainLoop && o.postMainLoop()
                        }
                    }
                },
                isFullscreen: !1,
                pointerLock: !1,
                moduleContextCreatedCallbacks: [],
                workers: [],
                init: function () {
                    if (o.preloadPlugins || (o.preloadPlugins = []),
                        !Nr.initted) {
                        Nr.initted = !0;
                        try {
                            new Blob,
                                Nr.hasBlobConstructor = !0
                        } catch (e) {
                            Nr.hasBlobConstructor = !1,
                                w("warning: no blob constructor, cannot create blobs with mimetypes")
                        }
                        Nr.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Nr.hasBlobConstructor ? null : w("warning: no BlobBuilder"),
                            Nr.URLObject = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0,
                            o.noImageDecoding || void 0 !== Nr.URLObject || (w("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),
                                o.noImageDecoding = !0);
                        var e = {
                            canHandle: function (e) {
                                return !o.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e)
                            }
                        };
                        e.handle = function (e, r, t, n) {
                            var o = null;
                            if (Nr.hasBlobConstructor)
                                try {
                                    (o = new Blob([e], {
                                        type: Nr.getMimetype(r)
                                    })).size !== e.length && (o = new Blob([new Uint8Array(e).buffer], {
                                        type: Nr.getMimetype(r)
                                    }))
                                } catch (e) {
                                    E("Blob constructor present but fails: " + e + "; falling back to blob builder")
                                }
                            if (!o) {
                                var a = new Nr.BlobBuilder;
                                a.append(new Uint8Array(e).buffer),
                                    o = a.getBlob()
                            }
                            var i = Nr.URLObject.createObjectURL(o)
                                , s = new Image;
                            s.onload = () => {
                                S(s.complete, "Image " + r + " could not be decoded");
                                var n = document.createElement("canvas");
                                n.width = s.width,
                                    n.height = s.height,
                                    n.getContext("2d").drawImage(s, 0, 0),
                                    lt[r] = n,
                                    Nr.URLObject.revokeObjectURL(i),
                                    t && t(e)
                            }
                                ,
                                s.onerror = e => {
                                    w("Image " + i + " could not be decoded"),
                                        n && n()
                                }
                                ,
                                s.src = i
                        }
                            ,
                            o.preloadPlugins.push(e);
                        var r = {
                            canHandle: function (e) {
                                return !o.noAudioDecoding && e.substr(-4) in {
                                    ".ogg": 1,
                                    ".wav": 1,
                                    ".mp3": 1
                                }
                            },
                            handle: function (e, r, t, n) {
                                var o = !1;
                                function a(n) {
                                    o || (o = !0,
                                        ft[r] = n,
                                        t && t(e))
                                }
                                function i() {
                                    o || (o = !0,
                                        ft[r] = new Audio,
                                        n && n())
                                }
                                if (!Nr.hasBlobConstructor)
                                    return i();
                                try {
                                    var s = new Blob([e], {
                                        type: Nr.getMimetype(r)
                                    })
                                } catch (e) {
                                    return i()
                                }
                                var u = Nr.URLObject.createObjectURL(s)
                                    , c = new Audio;
                                c.addEventListener("canplaythrough", (function () {
                                    a(c)
                                }
                                ), !1),
                                    c.onerror = function (t) {
                                        o || (w("warning: browser could not fully decode audio " + r + ", trying slower base64 approach"),
                                            c.src = "data:audio/x-" + r.substr(-3) + ";base64," + function (e) {
                                                for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = "", n = 0, o = 0, a = 0; a < e.length; a++)
                                                    for (n = n << 8 | e[a],
                                                        o += 8; o >= 6;) {
                                                        var i = n >> o - 6 & 63;
                                                        o -= 6,
                                                            t += r[i]
                                                    }
                                                return 2 == o ? (t += r[(3 & n) << 4],
                                                    t += "==") : 4 == o && (t += r[(15 & n) << 2],
                                                        t += "="),
                                                    t
                                            }(e),
                                            a(c))
                                    }
                                    ,
                                    c.src = u,
                                    zr((function () {
                                        a(c)
                                    }
                                    ), 1e4)
                            }
                        };
                        o.preloadPlugins.push(r);
                        var t = o.canvas;
                        t && (t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock || t.msRequestPointerLock || function () { }
                            ,
                            t.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () { }
                            ,
                            t.exitPointerLock = t.exitPointerLock.bind(document),
                            document.addEventListener("pointerlockchange", n, !1),
                            document.addEventListener("mozpointerlockchange", n, !1),
                            document.addEventListener("webkitpointerlockchange", n, !1),
                            document.addEventListener("mspointerlockchange", n, !1),
                            o.elementPointerLock && t.addEventListener("click", (function (e) {
                                !Nr.pointerLock && o.canvas.requestPointerLock && (o.canvas.requestPointerLock(),
                                    e.preventDefault())
                            }
                            ), !1))
                    }
                    function n() {
                        Nr.pointerLock = document.pointerLockElement === o.canvas || document.mozPointerLockElement === o.canvas || document.webkitPointerLockElement === o.canvas || document.msPointerLockElement === o.canvas
                    }
                },
                handledByPreloadPlugin: function (e, r, t, n) {
                    Nr.init();
                    var a = !1;
                    return o.preloadPlugins.forEach((function (o) {
                        a || o.canHandle(r) && (o.handle(e, r, t, n),
                            a = !0)
                    }
                    )),
                        a
                },
                createContext: function (e, r, t, n) {
                    if (r && o.ctx && e == o.canvas)
                        return o.ctx;
                    var a, i;
                    if (r) {
                        var s = {
                            antialias: !1,
                            alpha: !1,
                            majorVersion: 1
                        };
                        if (n)
                            for (var u in n)
                                s[u] = n[u];
                        void 0 !== Gr && (i = Gr.createContext(e, s)) && (a = Gr.getContext(i).GLctx)
                    } else
                        a = e.getContext("2d");
                    return a ? (t && (r || S(void 0 === ct, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),
                        o.ctx = a,
                        r && Gr.makeContextCurrent(i),
                        o.useWebGL = r,
                        Nr.moduleContextCreatedCallbacks.forEach((function (e) {
                            e()
                        }
                        )),
                        Nr.init()),
                        a) : null
                },
                destroyContext: function (e, r, t) { },
                fullscreenHandlersInstalled: !1,
                lockPointer: void 0,
                resizeCanvas: void 0,
                requestFullscreen: function (e, r) {
                    Nr.lockPointer = e,
                        Nr.resizeCanvas = r,
                        void 0 === Nr.lockPointer && (Nr.lockPointer = !0),
                        void 0 === Nr.resizeCanvas && (Nr.resizeCanvas = !1);
                    var t = o.canvas;
                    function n() {
                        Nr.isFullscreen = !1;
                        var e = t.parentNode;
                        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e ? (t.exitFullscreen = Nr.exitFullscreen,
                            Nr.lockPointer && t.requestPointerLock(),
                            Nr.isFullscreen = !0,
                            Nr.resizeCanvas ? Nr.setFullscreenCanvasSize() : Nr.updateCanvasDimensions(t)) : (e.parentNode.insertBefore(t, e),
                                e.parentNode.removeChild(e),
                                Nr.resizeCanvas ? Nr.setWindowedCanvasSize() : Nr.updateCanvasDimensions(t)),
                            o.onFullScreen && o.onFullScreen(Nr.isFullscreen),
                            o.onFullscreen && o.onFullscreen(Nr.isFullscreen)
                    }
                    Nr.fullscreenHandlersInstalled || (Nr.fullscreenHandlersInstalled = !0,
                        document.addEventListener("fullscreenchange", n, !1),
                        document.addEventListener("mozfullscreenchange", n, !1),
                        document.addEventListener("webkitfullscreenchange", n, !1),
                        document.addEventListener("MSFullscreenChange", n, !1));
                    var a = document.createElement("div");
                    t.parentNode.insertBefore(a, t),
                        a.appendChild(t),
                        a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || (a.webkitRequestFullscreen ? function () {
                            a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                        }
                            : null) || (a.webkitRequestFullScreen ? function () {
                                a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                            }
                                : null),
                        a.requestFullscreen()
                },
                exitFullscreen: function () {
                    return !!Nr.isFullscreen && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () { }
                    ).apply(document, []),
                        !0)
                },
                nextRAF: 0,
                fakeRequestAnimationFrame: function (e) {
                    var r = Date.now();
                    if (0 === Nr.nextRAF)
                        Nr.nextRAF = r + 1e3 / 60;
                    else
                        for (; r + 2 >= Nr.nextRAF;)
                            Nr.nextRAF += 1e3 / 60;
                    var t = Math.max(Nr.nextRAF - r, 0);
                    setTimeout(e, t)
                },
                requestAnimationFrame: function (e) {
                    "function" != typeof requestAnimationFrame ? (0,
                        Nr.fakeRequestAnimationFrame)(e) : requestAnimationFrame(e)
                },
                safeSetTimeout: function (e) {
                    return zr(e)
                },
                safeRequestAnimationFrame: function (e) {
                    return Nr.requestAnimationFrame((function () {
                        Ir(e)
                    }
                    ))
                },
                getMimetype: function (e) {
                    return {
                        jpg: "image/jpeg",
                        jpeg: "image/jpeg",
                        png: "image/png",
                        bmp: "image/bmp",
                        ogg: "audio/ogg",
                        wav: "audio/wav",
                        mp3: "audio/mpeg"
                    }[e.substr(e.lastIndexOf(".") + 1)]
                },
                getUserMedia: function (e) {
                    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia),
                        window.getUserMedia(e)
                },
                getMovementX: function (e) {
                    return e.movementX || e.mozMovementX || e.webkitMovementX || 0
                },
                getMovementY: function (e) {
                    return e.movementY || e.mozMovementY || e.webkitMovementY || 0
                },
                getMouseWheelDelta: function (e) {
                    var r = 0;
                    switch (e.type) {
                        case "DOMMouseScroll":
                            r = e.detail / 3;
                            break;
                        case "mousewheel":
                            r = e.wheelDelta / 120;
                            break;
                        case "wheel":
                            switch (r = e.deltaY,
                            e.deltaMode) {
                                case 0:
                                    r /= 100;
                                    break;
                                case 1:
                                    r /= 3;
                                    break;
                                case 2:
                                    r *= 80;
                                    break;
                                default:
                                    throw "unrecognized mouse wheel delta mode: " + e.deltaMode
                            }
                            break;
                        default:
                            throw "unrecognized mouse wheel event: " + e.type
                    }
                    return r
                },
                mouseX: 0,
                mouseY: 0,
                mouseMovementX: 0,
                mouseMovementY: 0,
                touches: {},
                lastTouches: {},
                calculateMouseEvent: function (e) {
                    if (Nr.pointerLock)
                        "mousemove" != e.type && "mozMovementX" in e ? Nr.mouseMovementX = Nr.mouseMovementY = 0 : (Nr.mouseMovementX = Nr.getMovementX(e),
                            Nr.mouseMovementY = Nr.getMovementY(e)),
                            "undefined" != typeof SDL ? (Nr.mouseX = SDL.mouseX + Nr.mouseMovementX,
                                Nr.mouseY = SDL.mouseY + Nr.mouseMovementY) : (Nr.mouseX += Nr.mouseMovementX,
                                    Nr.mouseY += Nr.mouseMovementY);
                    else {
                        var r = o.canvas.getBoundingClientRect()
                            , t = o.canvas.width
                            , n = o.canvas.height
                            , a = void 0 !== window.scrollX ? window.scrollX : window.pageXOffset
                            , i = void 0 !== window.scrollY ? window.scrollY : window.pageYOffset;
                        if ("touchstart" === e.type || "touchend" === e.type || "touchmove" === e.type) {
                            var s = e.touch;
                            if (void 0 === s)
                                return;
                            var u = s.pageX - (a + r.left)
                                , c = s.pageY - (i + r.top)
                                , l = {
                                    x: u *= t / r.width,
                                    y: c *= n / r.height
                                };
                            if ("touchstart" === e.type)
                                Nr.lastTouches[s.identifier] = l,
                                    Nr.touches[s.identifier] = l;
                            else if ("touchend" === e.type || "touchmove" === e.type) {
                                var f = Nr.touches[s.identifier];
                                f || (f = l),
                                    Nr.lastTouches[s.identifier] = f,
                                    Nr.touches[s.identifier] = l
                            }
                            return
                        }
                        var d = e.pageX - (a + r.left)
                            , m = e.pageY - (i + r.top);
                        d *= t / r.width,
                            m *= n / r.height,
                            Nr.mouseMovementX = d - Nr.mouseX,
                            Nr.mouseMovementY = m - Nr.mouseY,
                            Nr.mouseX = d,
                            Nr.mouseY = m
                    }
                },
                resizeListeners: [],
                updateResizeListeners: function () {
                    var e = o.canvas;
                    Nr.resizeListeners.forEach((function (r) {
                        r(e.width, e.height)
                    }
                    ))
                },
                setCanvasSize: function (e, r, t) {
                    var n = o.canvas;
                    Nr.updateCanvasDimensions(n, e, r),
                        t || Nr.updateResizeListeners()
                },
                windowedWidth: 0,
                windowedHeight: 0,
                setFullscreenCanvasSize: function () {
                    if ("undefined" != typeof SDL) {
                        var e = N[SDL.screen >>> 2];
                        e |= 8388608,
                            z[SDL.screen >>> 2] = e
                    }
                    Nr.updateCanvasDimensions(o.canvas),
                        Nr.updateResizeListeners()
                },
                setWindowedCanvasSize: function () {
                    if ("undefined" != typeof SDL) {
                        var e = N[SDL.screen >>> 2];
                        e &= -8388609,
                            z[SDL.screen >>> 2] = e
                    }
                    Nr.updateCanvasDimensions(o.canvas),
                        Nr.updateResizeListeners()
                },
                updateCanvasDimensions: function (e, r, t) {
                    r && t ? (e.widthNative = r,
                        e.heightNative = t) : (r = e.widthNative,
                            t = e.heightNative);
                    var n = r
                        , a = t;
                    if (o.forcedAspectRatio && o.forcedAspectRatio > 0 && (n / a < o.forcedAspectRatio ? n = Math.round(a * o.forcedAspectRatio) : a = Math.round(n / o.forcedAspectRatio)),
                        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
                        var i = Math.min(screen.width / n, screen.height / a);
                        n = Math.round(n * i),
                            a = Math.round(a * i)
                    }
                    Nr.resizeCanvas ? (e.width != n && (e.width = n),
                        e.height != a && (e.height = a),
                        void 0 !== e.style && (e.style.removeProperty("width"),
                            e.style.removeProperty("height"))) : (e.width != r && (e.width = r),
                                e.height != t && (e.height = t),
                                void 0 !== e.style && (n != r || a != t ? (e.style.setProperty("width", n + "px", "important"),
                                    e.style.setProperty("height", a + "px", "important")) : (e.style.removeProperty("width"),
                                        e.style.removeProperty("height"))))
                }
            }
                , Ur = {
                    errorCode: 12288,
                    defaultDisplayInitialized: !1,
                    currentContext: 0,
                    currentReadSurface: 0,
                    currentDrawSurface: 0,
                    contextAttributes: {
                        alpha: !1,
                        depth: !1,
                        stencil: !1,
                        antialias: !1
                    },
                    stringCache: {},
                    setErrorCode: function (e) {
                        Ur.errorCode = e
                    },
                    chooseConfig: function (e, r, t, n, o) {
                        if (62e3 != e)
                            return Ur.setErrorCode(12296),
                                0;
                        if (r)
                            for (; ;) {
                                var a = z[r >>> 2];
                                if (12321 == a) {
                                    var i = z[r + 4 >>> 2];
                                    Ur.contextAttributes.alpha = i > 0
                                } else if (12325 == a) {
                                    var s = z[r + 4 >>> 2];
                                    Ur.contextAttributes.depth = s > 0
                                } else if (12326 == a) {
                                    var u = z[r + 4 >>> 2];
                                    Ur.contextAttributes.stencil = u > 0
                                } else if (12337 == a) {
                                    var c = z[r + 4 >>> 2];
                                    Ur.contextAttributes.antialias = c > 0
                                } else if (12338 == a)
                                    c = z[r + 4 >>> 2],
                                        Ur.contextAttributes.antialias = 1 == c;
                                else if (12544 == a) {
                                    var l = z[r + 4 >>> 2];
                                    Ur.contextAttributes.lowLatency = 12547 != l
                                } else if (12344 == a)
                                    break;
                                r += 8
                            }
                        return t && n || o ? (o && (z[o >>> 2] = 1),
                            t && n > 0 && (z[t >>> 2] = 62002),
                            Ur.setErrorCode(12288),
                            1) : (Ur.setErrorCode(12300),
                                0)
                    }
                };
            function Wr(e) {
                var r = e.getExtension("ANGLE_instanced_arrays");
                if (r)
                    return e.vertexAttribDivisor = function (e, t) {
                        r.vertexAttribDivisorANGLE(e, t)
                    }
                        ,
                        e.drawArraysInstanced = function (e, t, n, o) {
                            r.drawArraysInstancedANGLE(e, t, n, o)
                        }
                        ,
                        e.drawElementsInstanced = function (e, t, n, o, a) {
                            r.drawElementsInstancedANGLE(e, t, n, o, a)
                        }
                        ,
                        1
            }
            function qr(e) {
                var r = e.getExtension("OES_vertex_array_object");
                if (r)
                    return e.createVertexArray = function () {
                        return r.createVertexArrayOES()
                    }
                        ,
                        e.deleteVertexArray = function (e) {
                            r.deleteVertexArrayOES(e)
                        }
                        ,
                        e.bindVertexArray = function (e) {
                            r.bindVertexArrayOES(e)
                        }
                        ,
                        e.isVertexArray = function (e) {
                            return r.isVertexArrayOES(e)
                        }
                        ,
                        1
            }
            function Vr(e) {
                var r = e.getExtension("WEBGL_draw_buffers");
                if (r)
                    return e.drawBuffers = function (e, t) {
                        r.drawBuffersWEBGL(e, t)
                    }
                        ,
                        1
            }
            function Hr(e) {
                return !!(e.multiDrawWebgl = e.getExtension("WEBGL_multi_draw"))
            }
            var Gr = {
                counter: 1,
                buffers: [],
                programs: [],
                framebuffers: [],
                renderbuffers: [],
                textures: [],
                shaders: [],
                vaos: [],
                contexts: [],
                offscreenCanvases: {},
                queries: [],
                stringCache: {},
                unpackAlignment: 4,
                recordError: function (e) {
                    Gr.lastError || (Gr.lastError = e)
                },
                getNewId: function (e) {
                    for (var r = Gr.counter++, t = e.length; t < r; t++)
                        e[t] = null;
                    return r
                },
                getSource: function (e, r, t, n) {
                    for (var o = "", a = 0; a < r; ++a) {
                        var i = n ? z[n + 4 * a >>> 2] : -1;
                        o += D(z[t + 4 * a >>> 2], i < 0 ? void 0 : i)
                    }
                    return o
                },
                createContext: function (e, r) {
                    e.getContextSafariWebGL2Fixed || (e.getContextSafariWebGL2Fixed = e.getContext,
                        e.getContext = function (r, t) {
                            var n = e.getContextSafariWebGL2Fixed(r, t);
                            return "webgl" == r == n instanceof WebGLRenderingContext ? n : null
                        }
                    );
                    var t = e.getContext("webgl", r);
                    return t ? Gr.registerContext(t, r) : 0
                },
                registerContext: function (e, r) {
                    var t = Gr.getNewId(Gr.contexts)
                        , n = {
                            handle: t,
                            attributes: r,
                            version: r.majorVersion,
                            GLctx: e
                        };
                    return e.canvas && (e.canvas.GLctxObject = n),
                        Gr.contexts[t] = n,
                        (void 0 === r.enableExtensionsByDefault || r.enableExtensionsByDefault) && Gr.initExtensions(n),
                        t
                },
                makeContextCurrent: function (e) {
                    return Gr.currentContext = Gr.contexts[e],
                        o.ctx = ct = Gr.currentContext && Gr.currentContext.GLctx,
                        !(e && !ct)
                },
                getContext: function (e) {
                    return Gr.contexts[e]
                },
                deleteContext: function (e) {
                    Gr.currentContext === Gr.contexts[e] && (Gr.currentContext = null),
                        "object" == typeof JSEvents && JSEvents.removeAllHandlersOnTarget(Gr.contexts[e].GLctx.canvas),
                        Gr.contexts[e] && Gr.contexts[e].GLctx.canvas && (Gr.contexts[e].GLctx.canvas.GLctxObject = void 0),
                        Gr.contexts[e] = null
                },
                initExtensions: function (e) {
                    if (e || (e = Gr.currentContext),
                        !e.initExtensionsDone) {
                        e.initExtensionsDone = !0;
                        var r = e.GLctx;
                        Wr(r),
                            qr(r),
                            Vr(r),
                            r.disjointTimerQueryExt = r.getExtension("EXT_disjoint_timer_query"),
                            Hr(r),
                            (r.getSupportedExtensions() || []).forEach((function (e) {
                                e.includes("lose_context") || e.includes("debug") || r.getExtension(e)
                            }
                            ))
                    }
                }
            };
            function Yr(e) {
                try {
                    return C.grow(e - B.byteLength + 65535 >>> 16),
                        J(C.buffer),
                        1
                } catch (e) { }
            }
            var Xr = {};
            function Kr() {
                if (!Kr.strings) {
                    var e = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                        _: m || "./this.program"
                    };
                    for (var r in Xr)
                        void 0 === Xr[r] ? delete e[r] : e[r] = Xr[r];
                    var t = [];
                    for (var r in e)
                        t.push(r + "=" + e[r]);
                    Kr.strings = t
                }
                return Kr.strings
            }
            var Jr = [];
            function Zr(e, r, t, n) {
                for (var o = 0; o < e; o++) {
                    var a = ct[t]()
                        , i = a && Gr.getNewId(n);
                    a ? (a.name = i,
                        n[i] = a) : Gr.recordError(1282),
                        z[r + 4 * o >>> 2] = i
                }
            }
            function Qr(e, r, t, n, o, a, i, s) {
                r = Gr.programs[r];
                var u = ct[e](r, t);
                if (u) {
                    var c = s && M(u.name, s, n);
                    o && (z[o >>> 2] = c),
                        a && (z[a >>> 2] = u.size),
                        i && (z[i >>> 2] = u.type)
                }
            }
            function et(e, r, t) {
                if (r) {
                    var n, o, a = void 0;
                    switch (e) {
                        case 36346:
                            a = 1;
                            break;
                        case 36344:
                            return void (0 != t && 1 != t && Gr.recordError(1280));
                        case 36345:
                            a = 0;
                            break;
                        case 34466:
                            var i = ct.getParameter(34467);
                            a = i ? i.length : 0
                    }
                    if (void 0 === a) {
                        var s = ct.getParameter(e);
                        switch (typeof s) {
                            case "number":
                                a = s;
                                break;
                            case "boolean":
                                a = s ? 1 : 0;
                                break;
                            case "string":
                                return void Gr.recordError(1280);
                            case "object":
                                if (null === s)
                                    switch (e) {
                                        case 34964:
                                        case 35725:
                                        case 34965:
                                        case 36006:
                                        case 36007:
                                        case 32873:
                                        case 34229:
                                        case 34068:
                                            a = 0;
                                            break;
                                        default:
                                            return void Gr.recordError(1280)
                                    }
                                else {
                                    if (s instanceof Float32Array || s instanceof Uint32Array || s instanceof Int32Array || s instanceof Array) {
                                        for (var u = 0; u < s.length; ++u)
                                            switch (t) {
                                                case 0:
                                                    z[r + 4 * u >>> 2] = s[u];
                                                    break;
                                                case 2:
                                                    U[r + 4 * u >>> 2] = s[u];
                                                    break;
                                                case 4:
                                                    j[r + u >>> 0] = s[u] ? 1 : 0
                                            }
                                        return
                                    }
                                    try {
                                        a = 0 | s.name
                                    } catch (r) {
                                        return Gr.recordError(1280),
                                            void b("GL_INVALID_ENUM in glGet" + t + "v: Unknown object returned from WebGL getParameter(" + e + ")! (error: " + r + ")")
                                    }
                                }
                                break;
                            default:
                                return Gr.recordError(1280),
                                    void b("GL_INVALID_ENUM in glGet" + t + "v: Native code calling glGet" + t + "v(" + e + ") and it returns " + s + " of type " + typeof s + "!")
                        }
                    }
                    switch (t) {
                        case 1:
                            o = a,
                                N[(n = r) >>> 2] = o,
                                N[n + 4 >>> 2] = (o - N[n >>> 2]) / 4294967296;
                            break;
                        case 0:
                            z[r >>> 2] = a;
                            break;
                        case 2:
                            U[r >>> 2] = a;
                            break;
                        case 4:
                            j[r >>> 0] = a ? 1 : 0
                    }
                } else
                    Gr.recordError(1281)
            }
            function rt(e) {
                return "]" == e.slice(-1) && e.lastIndexOf("[")
            }
            function tt(e, r, t, n, o, a) {
                var i = function (e) {
                    return 1 == (e -= 5120) ? $ : 4 == e ? z : 6 == e ? U : 5 == e || 28922 == e ? N : I
                }(e)
                    , s = function (e) {
                        return 31 - Math.clz32(e.BYTES_PER_ELEMENT)
                    }(i)
                    , u = 1 << s
                    , c = function (e) {
                        return {
                            5: 3,
                            6: 4,
                            8: 2,
                            29502: 3,
                            29504: 4
                        }[e - 6402] || 1
                    }(r) * u
                    , l = function (e, r, t, n) {
                        var o;
                        return r * (e * t + (o = n) - 1 & -o)
                    }(t, n, c, Gr.unpackAlignment);
                return i.subarray(o >>> s, o + l >>> s)
            }
            function nt(e) {
                var r = ct.currentProgram;
                if (r) {
                    var t = r.uniformLocsById[e];
                    return "number" == typeof t && (r.uniformLocsById[e] = t = ct.getUniformLocation(r, r.uniformArrayNamesById[e] + (t > 0 ? "[" + t + "]" : ""))),
                        t
                }
                Gr.recordError(1282)
            }
            var ot = [];
            function at(e) {
                return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
            }
            var it = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
                , st = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            var ut = function (e, r, t, n) {
                e || (e = this),
                    this.parent = e,
                    this.mount = e.mount,
                    this.mounted = null,
                    this.id = Ce.nextInode++,
                    this.name = r,
                    this.mode = t,
                    this.node_ops = {},
                    this.stream_ops = {},
                    this.rdev = n
            };
            Object.defineProperties(ut.prototype, {
                read: {
                    get: function () {
                        return !(365 & ~this.mode)
                    },
                    set: function (e) {
                        e ? this.mode |= 365 : this.mode &= -366
                    }
                },
                write: {
                    get: function () {
                        return !(146 & ~this.mode)
                    },
                    set: function (e) {
                        e ? this.mode |= 146 : this.mode &= -147
                    }
                },
                isFolder: {
                    get: function () {
                        return Ce.isDir(this.mode)
                    }
                },
                isDevice: {
                    get: function () {
                        return Ce.isChrdev(this.mode)
                    }
                }
            }),
                Ce.FSNode = ut,
                Ce.staticInit(),
                o.FS_createPath = Ce.createPath,
                o.FS_createDataFile = Ce.createDataFile,
                o.FS_createPreloadedFile = Ce.createPreloadedFile,
                o.FS_unlink = Ce.unlink,
                o.FS_createLazyFile = Ce.createLazyFile,
                o.FS_createDevice = Ce.createDevice,
                $e = o.InternalError = je(Error, "InternalError"),
                function () {
                    for (var e = new Array(256), r = 0; r < 256; ++r)
                        e[r] = String.fromCharCode(r);
                    Ue = e
                }(),
                qe = o.BindingError = je(Error, "BindingError"),
                ar.prototype.isAliasOf = function (e) {
                    if (!(this instanceof ar))
                        return !1;
                    if (!(e instanceof ar))
                        return !1;
                    for (var r = this.$$.ptrType.registeredClass, t = this.$$.ptr, n = e.$$.ptrType.registeredClass, o = e.$$.ptr; r.baseClass;)
                        t = r.upcast(t),
                            r = r.baseClass;
                    for (; n.baseClass;)
                        o = n.upcast(o),
                            n = n.baseClass;
                    return r === n && t === o
                }
                ,
                ar.prototype.clone = function () {
                    if (this.$$.ptr || Ge(this),
                        this.$$.preservePointerOnDelete)
                        return this.$$.count.value += 1,
                            this;
                    var e, r = or(Object.create(Object.getPrototypeOf(this), {
                        $$: {
                            value: (e = this.$$,
                            {
                                count: e.count,
                                deleteScheduled: e.deleteScheduled,
                                preservePointerOnDelete: e.preservePointerOnDelete,
                                ptr: e.ptr,
                                ptrType: e.ptrType,
                                smartPtr: e.smartPtr,
                                smartPtrType: e.smartPtrType
                            })
                        }
                    }));
                    return r.$$.count.value += 1,
                        r.$$.deleteScheduled = !1,
                        r
                }
                ,
                ar.prototype.delete = function () {
                    this.$$.ptr || Ge(this),
                        this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Ve("Object already scheduled for deletion"),
                        Xe(this),
                        Ke(this.$$),
                        this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0,
                            this.$$.ptr = void 0)
                }
                ,
                ar.prototype.isDeleted = function () {
                    return !this.$$.ptr
                }
                ,
                ar.prototype.deleteLater = function () {
                    return this.$$.ptr || Ge(this),
                        this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Ve("Object already scheduled for deletion"),
                        Qe.push(this),
                        1 === Qe.length && rr && rr(er),
                        this.$$.deleteScheduled = !0,
                        this
                }
                ,
                o.getInheritedInstanceCount = function () {
                    return Object.keys(tr).length
                }
                ,
                o.getLiveInheritedInstances = function () {
                    var e = [];
                    for (var r in tr)
                        tr.hasOwnProperty(r) && e.push(tr[r]);
                    return e
                }
                ,
                o.flushPendingDeletes = er,
                o.setDelayFunction = function (e) {
                    rr = e,
                        Qe.length && rr && rr(er)
                }
                ,
                mr.prototype.getPointee = function (e) {
                    return this.rawGetPointee && (e = this.rawGetPointee(e)),
                        e
                }
                ,
                mr.prototype.destructor = function (e) {
                    this.rawDestructor && this.rawDestructor(e)
                }
                ,
                mr.prototype.argPackAdvance = 8,
                mr.prototype.readValueFromPointer = Se,
                mr.prototype.deleteObject = function (e) {
                    null !== e && e.delete()
                }
                ,
                mr.prototype.fromWireType = function (e) {
                    var r = this.getPointee(e);
                    if (!r)
                        return this.destructor(e),
                            null;
                    var t = function (e, r) {
                        return r = function (e, r) {
                            for (void 0 === r && Ve("ptr should not be undefined"); e.baseClass;)
                                r = e.upcast(r),
                                    e = e.baseClass;
                            return r
                        }(e, r),
                            tr[r]
                    }(this.registeredClass, r);
                    if (void 0 !== t) {
                        if (0 === t.$$.count.value)
                            return t.$$.ptr = r,
                                t.$$.smartPtr = e,
                                t.clone();
                        var n = t.clone();
                        return this.destructor(e),
                            n
                    }
                    function o() {
                        return this.isSmartPointer ? nr(this.registeredClass.instancePrototype, {
                            ptrType: this.pointeeType,
                            ptr: r,
                            smartPtrType: this,
                            smartPtr: e
                        }) : nr(this.registeredClass.instancePrototype, {
                            ptrType: this,
                            ptr: e
                        })
                    }
                    var a, i = this.registeredClass.getActualType(r), s = Ze[i];
                    if (!s)
                        return o.call(this);
                    a = this.isConst ? s.constPointerType : s.pointerType;
                    var u = Je(r, this.registeredClass, a.registeredClass);
                    return null === u ? o.call(this) : this.isSmartPointer ? nr(a.registeredClass.instancePrototype, {
                        ptrType: a,
                        ptr: u,
                        smartPtrType: this,
                        smartPtr: e
                    }) : nr(a.registeredClass.instancePrototype, {
                        ptrType: a,
                        ptr: u
                    })
                }
                ,
                vr = o.UnboundTypeError = je(Error, "UnboundTypeError"),
                o.count_emval_handles = function () {
                    for (var e = 0, r = 5; r < kr.length; ++r)
                        void 0 !== kr[r] && ++e;
                    return e
                }
                ,
                o.get_first_emval = function () {
                    for (var e = 5; e < kr.length; ++e)
                        if (void 0 !== kr[e])
                            return kr[e];
                    return null
                }
                ,
                o.requestFullscreen = function (e, r) {
                    Nr.requestFullscreen(e, r)
                }
                ,
                o.requestAnimationFrame = function (e) {
                    Nr.requestAnimationFrame(e)
                }
                ,
                o.setCanvasSize = function (e, r, t) {
                    Nr.setCanvasSize(e, r, t)
                }
                ,
                o.pauseMainLoop = function () {
                    Nr.mainLoop.pause()
                }
                ,
                o.resumeMainLoop = function () {
                    Nr.mainLoop.resume()
                }
                ,
                o.getUserMedia = function () {
                    Nr.getUserMedia()
                }
                ,
                o.createContext = function (e, r, t, n) {
                    return Nr.createContext(e, r, t, n)
                }
                ;
            for (var ct, lt = {}, ft = {}, dt = 0; dt < 32; ++dt)
                Jr.push(new Array(dt));
            var mt = new Float32Array(288);
            for (dt = 0; dt < 288; ++dt)
                ot[dt] = mt.subarray(0, dt + 1);
            function pt(e, r, t) {
                var n = t > 0 ? t : R(e) + 1
                    , o = new Array(n)
                    , a = T(e, o, 0, o.length);
                return r && (o.length = a),
                    o
            }
            var ht, vt = {
                q: function (e) {
                    return yt(e + 24) + 24
                },
                p: function (e, r, t) {
                    throw new we(e).init(r, t),
                    e
                },
                ga: function (e, r, t) {
                    xe.varargs = t;
                    try {
                        var n = xe.getStreamFromFD(e);
                        switch (r) {
                            case 0:
                                return (o = xe.get()) < 0 ? -28 : Ce.createStream(n, o).fd;
                            case 1:
                            case 2:
                            case 6:
                            case 7:
                                return 0;
                            case 3:
                                return n.flags;
                            case 4:
                                var o = xe.get();
                                return n.flags |= o,
                                    0;
                            case 5:
                                return o = xe.get(),
                                    O[o + 0 >>> 1] = 2,
                                    0;
                            case 16:
                            case 8:
                            default:
                                return -28;
                            case 9:
                                return z[gt() >>> 2] = 28,
                                    -1
                        }
                    } catch (e) {
                        if (void 0 === Ce || !(e instanceof Ce.ErrnoError))
                            throw e;
                        return -e.errno
                    }
                },
                ub: function (e, r, t) {
                    xe.varargs = t;
                    try {
                        var n = xe.getStreamFromFD(e);
                        switch (r) {
                            case 21509:
                            case 21505:
                            case 21510:
                            case 21511:
                            case 21512:
                            case 21506:
                            case 21507:
                            case 21508:
                            case 21523:
                            case 21524:
                                return n.tty ? 0 : -59;
                            case 21519:
                                if (!n.tty)
                                    return -59;
                                var o = xe.get();
                                return z[o >>> 2] = 0,
                                    0;
                            case 21520:
                                return n.tty ? -28 : -59;
                            case 21531:
                                return o = xe.get(),
                                    Ce.ioctl(n, r, o);
                            default:
                                ue("bad ioctl syscall " + r)
                        }
                    } catch (e) {
                        if (void 0 === Ce || !(e instanceof Ce.ErrnoError))
                            throw e;
                        return -e.errno
                    }
                },
                vb: function (e, r, t, n) {
                    xe.varargs = n;
                    try {
                        r = xe.getStr(r),
                            r = xe.calculateAt(e, r);
                        var o = n ? xe.get() : 0;
                        return Ce.open(r, t, o).fd
                    } catch (e) {
                        if (void 0 === Ce || !(e instanceof Ce.ErrnoError))
                            throw e;
                        return -e.errno
                    }
                },
                qb: function (e, r) {
                    try {
                        return e = xe.getStr(e),
                            xe.doStat(Ce.stat, e, r)
                    } catch (e) {
                        if (void 0 === Ce || !(e instanceof Ce.ErrnoError))
                            throw e;
                        return -e.errno
                    }
                },
                J: function (e) {
                    var r = Pe[e];
                    delete Pe[e];
                    var t = r.elements
                        , n = t.length
                        , o = t.map((function (e) {
                            return e.getterReturnType
                        }
                        )).concat(t.map((function (e) {
                            return e.setterArgumentType
                        }
                        )))
                        , a = r.rawConstructor
                        , i = r.rawDestructor;
                    Ie([e], o, (function (e) {
                        return t.forEach(((r, t) => {
                            var o = e[t]
                                , a = r.getter
                                , i = r.getterContext
                                , s = e[t + n]
                                , u = r.setter
                                , c = r.setterContext;
                            r.read = e => o.fromWireType(a(i, e)),
                                r.write = (e, r) => {
                                    var t = [];
                                    u(c, e, s.toWireType(t, r)),
                                        Fe(t)
                                }
                        }
                        )),
                            [{
                                name: r.name,
                                fromWireType: function (e) {
                                    for (var r = new Array(n), o = 0; o < n; ++o)
                                        r[o] = t[o].read(e);
                                    return i(e),
                                        r
                                },
                                toWireType: function (e, o) {
                                    if (n !== o.length)
                                        throw new TypeError("Incorrect number of tuple elements for " + r.name + ": expected=" + n + ", actual=" + o.length);
                                    for (var s = a(), u = 0; u < n; ++u)
                                        t[u].write(s, o[u]);
                                    return null !== e && e.push(i, s),
                                        s
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: Se,
                                destructorFunction: i
                            }]
                    }
                    ))
                },
                v: function (e) {
                    var r = ze[e];
                    delete ze[e];
                    var t = r.rawConstructor
                        , n = r.rawDestructor
                        , o = r.fields;
                    Ie([e], o.map((e => e.getterReturnType)).concat(o.map((e => e.setterArgumentType))), (e => {
                        var a = {};
                        return o.forEach(((r, t) => {
                            var n = r.fieldName
                                , i = e[t]
                                , s = r.getter
                                , u = r.getterContext
                                , c = e[t + o.length]
                                , l = r.setter
                                , f = r.setterContext;
                            a[n] = {
                                read: e => i.fromWireType(s(u, e)),
                                write: (e, r) => {
                                    var t = [];
                                    l(f, e, c.toWireType(t, r)),
                                        Fe(t)
                                }
                            }
                        }
                        )),
                            [{
                                name: r.name,
                                fromWireType: function (e) {
                                    var r = {};
                                    for (var t in a)
                                        r[t] = a[t].read(e);
                                    return n(e),
                                        r
                                },
                                toWireType: function (e, r) {
                                    for (var o in a)
                                        if (!(o in r))
                                            throw new TypeError('Missing field:  "' + o + '"');
                                    var i = t();
                                    for (o in a)
                                        a[o].write(i, r[o]);
                                    return null !== e && e.push(n, i),
                                        i
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: Se,
                                destructorFunction: n
                            }]
                    }
                    ))
                },
                lb: function (e, r, t, n, o) { },
                Ab: function (e, r, t, n, o) {
                    var a = Ne(t);
                    He(e, {
                        name: r = We(r),
                        fromWireType: function (e) {
                            return !!e
                        },
                        toWireType: function (e, r) {
                            return r ? n : o
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function (e) {
                            var n;
                            if (1 === t)
                                n = j;
                            else if (2 === t)
                                n = O;
                            else {
                                if (4 !== t)
                                    throw new TypeError("Unknown boolean type size: " + r);
                                n = z
                            }
                            return this.fromWireType(n[e >>> a])
                        },
                        destructorFunction: null
                    })
                },
                o: function (e, r, t, n, o, a, i, s, u, c, l, f, d) {
                    l = We(l),
                        a = hr(o, a),
                        s && (s = hr(i, s)),
                        c && (c = hr(u, c)),
                        d = hr(f, d);
                    var m = Re(l);
                    sr(m, (function () {
                        yr("Cannot construct " + l + " due to unbound types", [n])
                    }
                    )),
                        Ie([e, r, t], n ? [n] : [], (function (r) {
                            var t, o;
                            r = r[0],
                                o = n ? (t = r.registeredClass).instancePrototype : ar.prototype;
                            var i = Be(m, (function () {
                                if (Object.getPrototypeOf(this) !== u)
                                    throw new qe("Use 'new' to construct " + l);
                                if (void 0 === f.constructor_body)
                                    throw new qe(l + " has no accessible constructor");
                                var e = f.constructor_body[arguments.length];
                                if (void 0 === e)
                                    throw new qe("Tried to invoke ctor of " + l + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(f.constructor_body).toString() + ") parameters instead!");
                                return e.apply(this, arguments)
                            }
                            ))
                                , u = Object.create(o, {
                                    constructor: {
                                        value: i
                                    }
                                });
                            i.prototype = u;
                            var f = new ur(l, i, u, d, t, a, s, c)
                                , p = new mr(l, f, !0, !1, !1)
                                , h = new mr(l + "*", f, !1, !1, !1)
                                , v = new mr(l + " const*", f, !1, !0, !1);
                            return Ze[e] = {
                                pointerType: h,
                                constPointerType: v
                            },
                                pr(m, i),
                                [p, h, v]
                        }
                        ))
                },
                la: function (e, r, t, n, o, a) {
                    S(r > 0);
                    var i = wr(r, t);
                    o = hr(n, o),
                        Ie([], [e], (function (e) {
                            var t = "constructor " + (e = e[0]).name;
                            if (void 0 === e.registeredClass.constructor_body && (e.registeredClass.constructor_body = []),
                                void 0 !== e.registeredClass.constructor_body[r - 1])
                                throw new qe("Cannot register multiple constructors with identical number of parameters (" + (r - 1) + ") for class '" + e.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                            return e.registeredClass.constructor_body[r - 1] = () => {
                                yr("Cannot construct " + e.name + " due to unbound types", i)
                            }
                                ,
                                Ie([], i, (function (n) {
                                    return n.splice(1, 0, null),
                                        e.registeredClass.constructor_body[r - 1] = Er(t, n, null, o, a),
                                        []
                                }
                                )),
                                []
                        }
                        ))
                },
                b: function (e, r, t, n, o, a, i, s) {
                    var u = wr(t, n);
                    r = We(r),
                        a = hr(o, a),
                        Ie([], [e], (function (e) {
                            var n = (e = e[0]).name + "." + r;
                            function o() {
                                yr("Cannot call " + n + " due to unbound types", u)
                            }
                            r.startsWith("@@") && (r = Symbol[r.substring(2)]),
                                s && e.registeredClass.pureVirtualFunctions.push(r);
                            var c = e.registeredClass.instancePrototype
                                , l = c[r];
                            return void 0 === l || void 0 === l.overloadTable && l.className !== e.name && l.argCount === t - 2 ? (o.argCount = t - 2,
                                o.className = e.name,
                                c[r] = o) : (ir(c, r, n),
                                    c[r].overloadTable[t - 2] = o),
                                Ie([], u, (function (o) {
                                    var s = Er(n, o, e, a, i);
                                    return void 0 === c[r].overloadTable ? (s.argCount = t - 2,
                                        c[r] = s) : c[r].overloadTable[t - 2] = s,
                                        []
                                }
                                )),
                                []
                        }
                        ))
                },
                zb: function (e, r) {
                    He(e, {
                        name: r = We(r),
                        fromWireType: function (e) {
                            var r = xr.toValue(e);
                            return Cr(e),
                                r
                        },
                        toWireType: function (e, r) {
                            return xr.toHandle(r)
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Se,
                        destructorFunction: null
                    })
                },
                D: function (e, r, t, n) {
                    var o = Ne(t);
                    function a() { }
                    r = We(r),
                        a.values = {},
                        He(e, {
                            name: r,
                            constructor: a,
                            fromWireType: function (e) {
                                return this.constructor.values[e]
                            },
                            toWireType: function (e, r) {
                                return r.value
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Pr(r, o, n),
                            destructorFunction: null
                        }),
                        sr(r, a)
                },
                m: function (e, r, t) {
                    var n = Fr(e, "enum");
                    r = We(r);
                    var o = n.constructor
                        , a = Object.create(n.constructor.prototype, {
                            value: {
                                value: t
                            },
                            constructor: {
                                value: Be(n.name + "_" + r, (function () { }
                                ))
                            }
                        });
                    o.values[t] = a,
                        o[r] = a
                },
                ia: function (e, r, t) {
                    var n = Ne(t);
                    He(e, {
                        name: r = We(r),
                        fromWireType: function (e) {
                            return e
                        },
                        toWireType: function (e, r) {
                            return r
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Ar(r, n),
                        destructorFunction: null
                    })
                },
                u: function (e, r, t, n, o, a) {
                    var i = wr(r, t);
                    e = We(e),
                        o = hr(n, o),
                        sr(e, (function () {
                            yr("Cannot call " + e + " due to unbound types", i)
                        }
                        ), r - 1),
                        Ie([], i, (function (t) {
                            var n = [t[0], null].concat(t.slice(1));
                            return pr(e, Er(e, n, null, o, a), r - 1),
                                []
                        }
                        ))
                },
                A: function (e, r, t, n, o) {
                    r = We(r),
                        -1 === o && (o = 4294967295);
                    var a = Ne(t)
                        , i = e => e;
                    if (0 === n) {
                        var s = 32 - 8 * t;
                        i = e => e << s >>> s
                    }
                    var u = r.includes("unsigned");
                    He(e, {
                        name: r,
                        fromWireType: i,
                        toWireType: u ? function (e, r) {
                            return this.name,
                                r >>> 0
                        }
                            : function (e, r) {
                                return this.name,
                                    r
                            }
                        ,
                        argPackAdvance: 8,
                        readValueFromPointer: Lr(r, a, 0 !== n),
                        destructorFunction: null
                    })
                },
                t: function (e, r, t) {
                    var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];
                    function o(e) {
                        var r = N
                            , t = r[(e >>= 2) >>> 0]
                            , o = r[e + 1 >>> 0];
                        return new n(B, o, t)
                    }
                    He(e, {
                        name: t = We(t),
                        fromWireType: o,
                        argPackAdvance: 8,
                        readValueFromPointer: o
                    }, {
                        ignoreDuplicateRegistrations: !0
                    })
                },
                ja: function (e, r, t, n, o, a, i, s, u, c, l, f) {
                    t = We(t),
                        a = hr(o, a),
                        s = hr(i, s),
                        c = hr(u, c),
                        f = hr(l, f),
                        Ie([e], [r], (function (e) {
                            return e = e[0],
                                [new mr(t, e.registeredClass, !1, !1, !0, e, n, a, s, c, f)]
                        }
                        ))
                },
                ha: function (e, r) {
                    var t = "std::string" === (r = We(r));
                    He(e, {
                        name: r,
                        fromWireType: function (e) {
                            var r, n = N[e >>> 2];
                            if (t)
                                for (var o = e + 4, a = 0; a <= n; ++a) {
                                    var i = e + 4 + a;
                                    if (a == n || 0 == $[i >>> 0]) {
                                        var s = D(o, i - o);
                                        void 0 === r ? r = s : (r += String.fromCharCode(0),
                                            r += s),
                                            o = i + 1
                                    }
                                }
                            else {
                                var u = new Array(n);
                                for (a = 0; a < n; ++a)
                                    u[a] = String.fromCharCode($[e + 4 + a >>> 0]);
                                r = u.join("")
                            }
                            return wt(e),
                                r
                        },
                        toWireType: function (e, r) {
                            r instanceof ArrayBuffer && (r = new Uint8Array(r));
                            var n = "string" == typeof r;
                            n || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || Ve("Cannot pass non-string to std::string");
                            var o = (t && n ? () => R(r) : () => r.length)()
                                , a = yt(4 + o + 1);
                            if (N[(a >>>= 0) >>> 2] = o,
                                t && n)
                                M(r, a + 4, o + 1);
                            else if (n)
                                for (var i = 0; i < o; ++i) {
                                    var s = r.charCodeAt(i);
                                    s > 255 && (wt(a),
                                        Ve("String has UTF-16 code units that do not fit in 8 bits")),
                                        $[a + 4 + i >>> 0] = s
                                }
                            else
                                for (i = 0; i < o; ++i)
                                    $[a + 4 + i >>> 0] = r[i];
                            return null !== e && e.push(wt, a),
                                a
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Se,
                        destructorFunction: function (e) {
                            wt(e)
                        }
                    })
                },
                Y: function (e, r, t) {
                    var n, o, a, i, s;
                    t = We(t),
                        2 === r ? (n = V,
                            o = H,
                            i = G,
                            a = () => I,
                            s = 1) : 4 === r && (n = Y,
                                o = X,
                                i = K,
                                a = () => N,
                                s = 2),
                        He(e, {
                            name: t,
                            fromWireType: function (e) {
                                for (var t, o = N[e >>> 2], i = a(), u = e + 4, c = 0; c <= o; ++c) {
                                    var l = e + 4 + c * r;
                                    if (c == o || 0 == i[l >>> s]) {
                                        var f = n(u, l - u);
                                        void 0 === t ? t = f : (t += String.fromCharCode(0),
                                            t += f),
                                            u = l + r
                                    }
                                }
                                return wt(e),
                                    t
                            },
                            toWireType: function (e, n) {
                                "string" != typeof n && Ve("Cannot pass non-string to C++ string type " + t);
                                var a = i(n)
                                    , u = yt(4 + a + r);
                                return N[(u >>>= 0) >>> 2] = a >> s,
                                    o(n, u + 4, a + r),
                                    null !== e && e.push(wt, u),
                                    u
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Se,
                            destructorFunction: function (e) {
                                wt(e)
                            }
                        })
                },
                K: function (e, r, t, n, o, a) {
                    Pe[e] = {
                        name: We(r),
                        rawConstructor: hr(t, n),
                        rawDestructor: hr(o, a),
                        elements: []
                    }
                },
                k: function (e, r, t, n, o, a, i, s, u) {
                    Pe[e].elements.push({
                        getterReturnType: r,
                        getter: hr(t, n),
                        getterContext: o,
                        setterArgumentType: a,
                        setter: hr(i, s),
                        setterContext: u
                    })
                },
                w: function (e, r, t, n, o, a) {
                    ze[e] = {
                        name: We(r),
                        rawConstructor: hr(t, n),
                        rawDestructor: hr(o, a),
                        fields: []
                    }
                },
                i: function (e, r, t, n, o, a, i, s, u, c) {
                    ze[e].fields.push({
                        fieldName: We(r),
                        getterReturnType: t,
                        getter: hr(n, o),
                        getterContext: a,
                        setterArgumentType: i,
                        setter: hr(s, u),
                        setterContext: c
                    })
                },
                Cb: function (e, r) {
                    He(e, {
                        isVoid: !0,
                        name: r = We(r),
                        argPackAdvance: 0,
                        fromWireType: function () { },
                        toWireType: function (e, r) { }
                    })
                },
                xb: function () {
                    return !0
                },
                nb: function () {
                    throw 1 / 0
                },
                h: function (e, r, t) {
                    e = xr.toValue(e),
                        r = Fr(r, "emval::as");
                    var n = []
                        , o = xr.toHandle(n);
                    return z[t >>> 2] = o,
                        r.toWireType(n, e)
                },
                Hb: function (e, r, t, n) {
                    e = xr.toValue(e);
                    for (var o = Dr(r, t), a = new Array(r), i = 0; i < r; ++i) {
                        var s = o[i];
                        a[i] = s.readValueFromPointer(n),
                            n += s.argPackAdvance
                    }
                    var u = e.apply(void 0, a);
                    return xr.toHandle(u)
                },
                r: function (e, r, t, n, o) {
                    return (e = Rr[e])(r = xr.toValue(r), t = Mr(t), function (e) {
                        var r = [];
                        return z[e >>> 2] = xr.toHandle(r),
                            r
                    }(n), o)
                },
                a: Cr,
                Ib: function (e) {
                    return 0 === e ? xr.toHandle(Br()) : (e = Mr(e),
                        xr.toHandle(Br()[e]))
                },
                s: function (e, r) {
                    var t = Dr(e, r)
                        , n = t[0]
                        , o = n.name + "_$" + t.slice(1).map((function (e) {
                            return e.name
                        }
                        )).join("_") + "$"
                        , a = $r[o];
                    if (void 0 !== a)
                        return a;
                    for (var i = ["retType"], s = [n], u = "", c = 0; c < e - 1; ++c)
                        u += (0 !== c ? ", " : "") + "arg" + c,
                            i.push("argType" + c),
                            s.push(t[1 + c]);
                    var l, f, d = "return function " + Re("methodCaller_" + o) + "(handle, name, destructors, args) {\n", m = 0;
                    for (c = 0; c < e - 1; ++c)
                        d += "    var arg" + c + " = argType" + c + ".readValueFromPointer(args" + (m ? "+" + m : "") + ");\n",
                            m += t[c + 1].argPackAdvance;
                    for (d += "    var rv = handle[name](" + u + ");\n",
                        c = 0; c < e - 1; ++c)
                        t[c + 1].deleteObject && (d += "    argType" + c + ".deleteObject(arg" + c + ");\n");
                    return n.isVoid || (d += "    return retType.toWireType(destructors, rv);\n"),
                        d += "};\n",
                        i.push(d),
                        l = br(Function, i).apply(null, s),
                        f = Rr.length,
                        Rr.push(l),
                        a = f,
                        $r[o] = a,
                        a
                },
                d: function (e, r) {
                    return e = xr.toValue(e),
                        r = xr.toValue(r),
                        xr.toHandle(e[r])
                },
                j: function (e) {
                    e > 4 && (kr[e].refcount += 1)
                },
                l: function () {
                    return xr.toHandle([])
                },
                e: function (e) {
                    return xr.toHandle(Mr(e))
                },
                F: function () {
                    return xr.toHandle({})
                },
                f: function (e) {
                    Fe(xr.toValue(e)),
                        Cr(e)
                },
                g: function (e, r, t) {
                    e = xr.toValue(e),
                        r = xr.toValue(r),
                        t = xr.toValue(t),
                        e[r] = t
                },
                c: function (e, r) {
                    var t = (e = Fr(e, "_emval_take_value")).readValueFromPointer(r);
                    return xr.toHandle(t)
                },
                W: function () {
                    ue("")
                },
                ta: function (e, r, t, n, o) {
                    return Ur.chooseConfig(e, r, t, n, o)
                },
                ra: function (e, r, t, n) {
                    if (62e3 != e)
                        return Ur.setErrorCode(12296),
                            0;
                    for (var a = 1; ;) {
                        var i = z[n >>> 2];
                        if (12440 != i) {
                            if (12344 == i)
                                break;
                            return Ur.setErrorCode(12292),
                                0
                        }
                        a = z[n + 4 >>> 2],
                            n += 8
                    }
                    return 2 != a ? (Ur.setErrorCode(12293),
                        0) : (Ur.contextAttributes.majorVersion = a - 1,
                            Ur.contextAttributes.minorVersion = 0,
                            Ur.context = Gr.createContext(o.canvas, Ur.contextAttributes),
                            0 != Ur.context ? (Ur.setErrorCode(12288),
                                Gr.makeContextCurrent(Ur.context),
                                o.useWebGL = !0,
                                Nr.moduleContextCreatedCallbacks.forEach((function (e) {
                                    e()
                                }
                                )),
                                Gr.makeContextCurrent(null),
                                62004) : (Ur.setErrorCode(12297),
                                    0))
                },
                sa: function (e, r, t, n) {
                    return 62e3 != e ? (Ur.setErrorCode(12296),
                        0) : 62002 != r ? (Ur.setErrorCode(12293),
                            0) : (Ur.setErrorCode(12288),
                                62006)
                },
                oa: function (e, r) {
                    return 62e3 != e ? (Ur.setErrorCode(12296),
                        0) : 62004 != r ? (Ur.setErrorCode(12294),
                            0) : (Gr.deleteContext(Ur.context),
                                Ur.setErrorCode(12288),
                                Ur.currentContext == r && (Ur.currentContext = 0),
                                1)
                },
                na: function (e, r) {
                    return 62e3 != e ? (Ur.setErrorCode(12296),
                        0) : 62006 != r ? (Ur.setErrorCode(12301),
                            1) : (Ur.currentReadSurface == r && (Ur.currentReadSurface = 0),
                                Ur.currentDrawSurface == r && (Ur.currentDrawSurface = 0),
                                Ur.setErrorCode(12288),
                                1)
                },
                ua: function (e, r, t, n) {
                    return Ur.chooseConfig(e, 0, r, t, n)
                },
                wa: function (e) {
                    return Ur.setErrorCode(12288),
                        62e3
                },
                va: function (e, r, t) {
                    return 62e3 == e ? (r && (z[r >>> 2] = 1),
                        t && (z[t >>> 2] = 4),
                        Ur.defaultDisplayInitialized = !0,
                        Ur.setErrorCode(12288),
                        1) : (Ur.setErrorCode(12296),
                            0)
                },
                R: function (e, r, t, n) {
                    return 62e3 != e ? (Ur.setErrorCode(12296),
                        0) : 0 != n && 62004 != n ? (Ur.setErrorCode(12294),
                            0) : 0 != t && 62006 != t || 0 != r && 62006 != r ? (Ur.setErrorCode(12301),
                                0) : (Gr.makeContextCurrent(n ? Ur.context : null),
                                    Ur.currentContext = n,
                                    Ur.currentDrawSurface = r,
                                    Ur.currentReadSurface = t,
                                    Ur.setErrorCode(12288),
                                    1)
                },
                ma: function (e) {
                    return 62e3 != e ? (Ur.setErrorCode(12296),
                        0) : (Ur.currentContext = 0,
                            Ur.currentReadSurface = 0,
                            Ur.currentDrawSurface = 0,
                            Ur.defaultDisplayInitialized = !1,
                            Ur.setErrorCode(12288),
                            1)
                },
                wb: jr,
                yb: function (e, r, t) {
                    $.copyWithin(e >>> 0, r >>> 0, r + t >>> 0)
                },
                pb: function (e) {
                    var r, t = $.length, n = 4294901760;
                    if ((e >>>= 0) > n)
                        return !1;
                    for (var o = 1; o <= 4; o *= 2) {
                        var a = t * (1 + .2 / o);
                        if (a = Math.min(a, e + 100663296),
                            Yr(Math.min(n, (r = Math.max(e, a)) + (65536 - r % 65536) % 65536)))
                            return !0
                    }
                    return !1
                },
                z: function (e, r) {
                    var t = Gr.getContext(e)
                        , n = D(r);
                    return n.startsWith("GL_") && (n = n.substr(3)),
                        "ANGLE_instanced_arrays" == n && Wr(ct),
                        "OES_vertex_array_object" == n && qr(ct),
                        "WEBGL_draw_buffers" == n && Vr(ct),
                        "WEBGL_multi_draw" == n && Hr(ct),
                        !!t.GLctx.getExtension(n)
                },
                pa: function () {
                    return Gr.currentContext ? Gr.currentContext.handle : 0
                },
                rb: function (e, r) {
                    var t = 0;
                    return Kr().forEach((function (n, o) {
                        var a = r + t;
                        z[e + 4 * o >>> 2] = a,
                            function (e, r, t) {
                                for (var n = 0; n < e.length; ++n)
                                    j[r++ >>> 0] = e.charCodeAt(n);
                                j[r >>> 0] = 0
                            }(n, a),
                            t += n.length + 1
                    }
                    )),
                        0
                },
                sb: function (e, r) {
                    var t = Kr();
                    z[e >>> 2] = t.length;
                    var n = 0;
                    return t.forEach((function (e) {
                        n += e.length + 1
                    }
                    )),
                        z[r >>> 2] = n,
                        0
                },
                x: function (e) {
                    !function (e, r) {
                        var t;
                        P = e,
                            P = t = e,
                            te() || (o.onExit && o.onExit(t),
                                F = !0),
                            p(t, new xt(t))
                    }(e)
                },
                ea: function (e) {
                    try {
                        var r = xe.getStreamFromFD(e);
                        return Ce.close(r),
                            0
                    } catch (e) {
                        if (void 0 === Ce || !(e instanceof Ce.ErrnoError))
                            throw e;
                        return e.errno
                    }
                },
                tb: function (e, r, t, n) {
                    try {
                        var o = function (e, r, t, n) {
                            for (var o = 0, a = 0; a < t; a++) {
                                var i = N[r >>> 2]
                                    , s = N[r + 4 >>> 2];
                                r += 8;
                                var u = Ce.read(e, j, i, s, undefined);
                                if (u < 0)
                                    return -1;
                                if (o += u,
                                    u < s)
                                    break
                            }
                            return o
                        }(xe.getStreamFromFD(e), r, t);
                        return z[n >>> 2] = o,
                            0
                    } catch (e) {
                        if (void 0 === Ce || !(e instanceof Ce.ErrnoError))
                            throw e;
                        return e.errno
                    }
                },
                kb: function (e, r, t, n, o) {
                    try {
                        var a = xe.getStreamFromFD(e)
                            , i = 4294967296 * t + (r >>> 0)
                            , s = 9007199254740992;
                        return i <= -s || i >= s ? 61 : (Ce.llseek(a, i, n),
                            de = [a.position >>> 0, (fe = a.position,
                                +Math.abs(fe) >= 1 ? fe > 0 ? (0 | Math.min(+Math.floor(fe / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((fe - +(~~fe >>> 0)) / 4294967296) >>> 0 : 0)],
                            z[o >>> 2] = de[0],
                            z[o + 4 >>> 2] = de[1],
                            a.getdents && 0 === i && 0 === n && (a.getdents = null),
                            0)
                    } catch (e) {
                        if (void 0 === Ce || !(e instanceof Ce.ErrnoError))
                            throw e;
                        return e.errno
                    }
                },
                fa: function (e, r, t, n) {
                    try {
                        var o = function (e, r, t, n) {
                            for (var o = 0, a = 0; a < t; a++) {
                                var i = N[r >>> 2]
                                    , s = N[r + 4 >>> 2];
                                r += 8;
                                var u = Ce.write(e, j, i, s, undefined);
                                if (u < 0)
                                    return -1;
                                o += u
                            }
                            return o
                        }(xe.getStreamFromFD(e), r, t);
                        return z[n >>> 2] = o,
                            0
                    } catch (e) {
                        if (void 0 === Ce || !(e instanceof Ce.ErrnoError))
                            throw e;
                        return e.errno
                    }
                },
                E: function () {
                    return k
                },
                ya: function (e) {
                    ct.activeTexture(e)
                },
                aa: function (e, r) {
                    ct.attachShader(Gr.programs[e], Gr.shaders[r])
                },
                n: function (e, r) {
                    ct.bindBuffer(e, Gr.buffers[r])
                },
                L: function (e, r) {
                    ct.bindFramebuffer(e, Gr.framebuffers[r])
                },
                O: function (e, r) {
                    ct.bindTexture(e, Gr.textures[r])
                },
                B: function (e) {
                    ct.bindVertexArray(Gr.vaos[e])
                },
                _a: function (e) {
                    ct.blendEquation(e)
                },
                $a: function (e, r) {
                    ct.blendEquationSeparate(e, r)
                },
                bb: function (e, r) {
                    ct.blendFunc(e, r)
                },
                ab: function (e, r, t, n) {
                    ct.blendFuncSeparate(e, r, t, n)
                },
                V: function (e, r, t, n) {
                    ct.bufferData(e, t ? $.subarray(t >>> 0, t + r >>> 0) : r, n)
                },
                _: function (e, r, t, n) {
                    ct.bufferSubData(e, r, $.subarray(n >>> 0, n + t >>> 0))
                },
                Bb: function (e) {
                    return ct.checkFramebufferStatus(e)
                },
                P: function (e) {
                    ct.clear(e)
                },
                I: function (e, r, t, n) {
                    ct.clearColor(e, r, t, n)
                },
                Ya: function (e) {
                    ct.clearDepth(e)
                },
                Xa: function (e) {
                    ct.clearStencil(e)
                },
                cb: function (e, r, t, n) {
                    ct.colorMask(!!e, !!r, !!t, !!n)
                },
                La: function (e) {
                    ct.compileShader(Gr.shaders[e])
                },
                Ha: function () {
                    var e = Gr.getNewId(Gr.programs)
                        , r = ct.createProgram();
                    return r.name = e,
                        r.maxUniformLength = r.maxAttributeLength = r.maxUniformBlockNameLength = 0,
                        r.uniformIdCounter = 1,
                        Gr.programs[e] = r,
                        e
                },
                Na: function (e) {
                    var r = Gr.getNewId(Gr.shaders);
                    return Gr.shaders[r] = ct.createShader(e),
                        r
                },
                ca: function (e) {
                    ct.cullFace(e)
                },
                Kb: function (e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = z[r + 4 * t >>> 2]
                            , o = Gr.buffers[n];
                        o && (ct.deleteBuffer(o),
                            o.name = 0,
                            Gr.buffers[n] = null)
                    }
                },
                Jb: function (e, r) {
                    for (var t = 0; t < e; ++t) {
                        var n = z[r + 4 * t >>> 2]
                            , o = Gr.framebuffers[n];
                        o && (ct.deleteFramebuffer(o),
                            o.name = 0,
                            Gr.framebuffers[n] = null)
                    }
                },
                Ia: function (e) {
                    if (e) {
                        var r = Gr.programs[e];
                        r ? (ct.deleteProgram(r),
                            r.name = 0,
                            Gr.programs[e] = null) : Gr.recordError(1281)
                    }
                },
                Ja: function (e) {
                    if (e) {
                        var r = Gr.shaders[e];
                        r ? (ct.deleteShader(r),
                            Gr.shaders[e] = null) : Gr.recordError(1281)
                    }
                },
                Ba: function (e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = z[r + 4 * t >>> 2]
                            , o = Gr.textures[n];
                        o && (ct.deleteTexture(o),
                            o.name = 0,
                            Gr.textures[n] = null)
                    }
                },
                eb: function (e) {
                    ct.depthFunc(e)
                },
                db: function (e) {
                    ct.depthMask(!!e)
                },
                N: function (e) {
                    ct.disable(e)
                },
                Va: function (e) {
                    ct.disableVertexAttribArray(e)
                },
                jb: function (e, r, t) {
                    ct.drawArrays(e, r, t)
                },
                ib: function (e, r, t, n) {
                    ct.drawArraysInstanced(e, r, t, n)
                },
                S: function (e, r) {
                    for (var t = Jr[e], n = 0; n < e; n++)
                        t[n] = z[r + 4 * n >>> 2];
                    ct.drawBuffers(t)
                },
                hb: function (e, r, t, n) {
                    ct.drawElements(e, r, t, n)
                },
                gb: function (e, r, t, n, o) {
                    ct.drawElementsInstanced(e, r, t, n, o)
                },
                H: function (e) {
                    ct.enable(e)
                },
                Wa: function (e) {
                    ct.enableVertexAttribArray(e)
                },
                fb: function () {
                    ct.flush()
                },
                Q: function (e, r, t, n, o) {
                    ct.framebufferTexture2D(e, r, t, Gr.textures[n], o)
                },
                ka: function (e, r) {
                    Zr(e, r, "createBuffer", Gr.buffers)
                },
                qa: function (e, r) {
                    Zr(e, r, "createFramebuffer", Gr.framebuffers)
                },
                Aa: function (e, r) {
                    Zr(e, r, "createTexture", Gr.textures)
                },
                xa: function (e) {
                    ct.generateMipmap(e)
                },
                Pa: function (e, r, t, n, o, a, i) {
                    Qr("getActiveAttrib", e, r, t, n, o, a, i)
                },
                Ua: function (e, r, t, n, o, a, i) {
                    Qr("getActiveUniform", e, r, t, n, o, a, i)
                },
                Oa: function (e, r) {
                    return ct.getAttribLocation(Gr.programs[e], D(r))
                },
                ob: function (e, r) {
                    et(e, r, 2)
                },
                y: function (e, r) {
                    et(e, r, 0)
                },
                Qa: function (e, r, t, n) {
                    var o = ct.getProgramInfoLog(Gr.programs[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? M(o, n, r) : 0;
                    t && (z[t >>> 2] = a)
                },
                G: function (e, r, t) {
                    if (t)
                        if (e >= Gr.counter)
                            Gr.recordError(1281);
                        else if (e = Gr.programs[e],
                            35716 == r) {
                            var n = ct.getProgramInfoLog(e);
                            null === n && (n = "(unknown error)"),
                                z[t >>> 2] = n.length + 1
                        } else if (35719 == r) {
                            if (!e.maxUniformLength)
                                for (var o = 0; o < ct.getProgramParameter(e, 35718); ++o)
                                    e.maxUniformLength = Math.max(e.maxUniformLength, ct.getActiveUniform(e, o).name.length + 1);
                            z[t >>> 2] = e.maxUniformLength
                        } else if (35722 == r) {
                            if (!e.maxAttributeLength)
                                for (o = 0; o < ct.getProgramParameter(e, 35721); ++o)
                                    e.maxAttributeLength = Math.max(e.maxAttributeLength, ct.getActiveAttrib(e, o).name.length + 1);
                            z[t >>> 2] = e.maxAttributeLength
                        } else if (35381 == r) {
                            if (!e.maxUniformBlockNameLength)
                                for (o = 0; o < ct.getProgramParameter(e, 35382); ++o)
                                    e.maxUniformBlockNameLength = Math.max(e.maxUniformBlockNameLength, ct.getActiveUniformBlockName(e, o).length + 1);
                            z[t >>> 2] = e.maxUniformBlockNameLength
                        } else
                            z[t >>> 2] = ct.getProgramParameter(e, r);
                    else
                        Gr.recordError(1281)
                },
                Ka: function (e, r, t, n) {
                    var o = ct.getShaderInfoLog(Gr.shaders[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? M(o, n, r) : 0;
                    t && (z[t >>> 2] = a)
                },
                $: function (e, r, t) {
                    if (t)
                        if (35716 == r) {
                            var n = ct.getShaderInfoLog(Gr.shaders[e]);
                            null === n && (n = "(unknown error)");
                            var o = n ? n.length + 1 : 0;
                            z[t >>> 2] = o
                        } else if (35720 == r) {
                            var a = ct.getShaderSource(Gr.shaders[e])
                                , i = a ? a.length + 1 : 0;
                            z[t >>> 2] = i
                        } else
                            z[t >>> 2] = ct.getShaderParameter(Gr.shaders[e], r);
                    else
                        Gr.recordError(1281)
                },
                Ta: function (e, r) {
                    if (r = D(r),
                        e = Gr.programs[e]) {
                        !function (e) {
                            var r, t, n = e.uniformLocsById, o = e.uniformSizeAndIdsByName;
                            if (!n)
                                for (e.uniformLocsById = n = {},
                                    e.uniformArrayNamesById = {},
                                    r = 0; r < ct.getProgramParameter(e, 35718); ++r) {
                                    var a = ct.getActiveUniform(e, r)
                                        , i = a.name
                                        , s = a.size
                                        , u = rt(i)
                                        , c = u > 0 ? i.slice(0, u) : i
                                        , l = e.uniformIdCounter;
                                    for (e.uniformIdCounter += s,
                                        o[c] = [s, l],
                                        t = 0; t < s; ++t)
                                        n[l] = t,
                                            e.uniformArrayNamesById[l++] = c
                                }
                        }(e);
                        var t = e.uniformLocsById
                            , n = 0
                            , o = r
                            , a = rt(r);
                        a > 0 && (s = r.slice(a + 1),
                            n = parseInt(s) >>> 0,
                            o = r.slice(0, a));
                        var i = e.uniformSizeAndIdsByName[o];
                        if (i && n < i[0] && (t[n += i[1]] = t[n] || ct.getUniformLocation(e, r)))
                            return n
                    } else
                        Gr.recordError(1281);
                    var s;
                    return -1
                },
                Ra: function (e) {
                    e = Gr.programs[e],
                        ct.linkProgram(e),
                        e.uniformLocsById = 0,
                        e.uniformSizeAndIdsByName = {}
                },
                Za: function (e, r) {
                    ct.polygonOffset(e, r)
                },
                da: function (e, r, t, n, o, a, i) {
                    var s = tt(a, o, t, n, i);
                    s ? ct.readPixels(e, r, t, n, o, a, s) : Gr.recordError(1280)
                },
                Ma: function (e, r, t, n) {
                    var o = Gr.getSource(e, r, t, n);
                    ct.shaderSource(Gr.shaders[e], o)
                },
                Z: function (e, r, t, n, o, a, i, s, u) {
                    ct.texImage2D(e, r, t, n, o, a, i, s, u ? tt(s, i, n, o, u) : null)
                },
                M: function (e, r, t) {
                    ct.texParameteri(e, r, t)
                },
                za: function (e, r, t, n, o, a, i, s, u) {
                    var c = null;
                    u && (c = tt(s, i, o, a, u)),
                        ct.texSubImage2D(e, r, t, n, o, a, i, s, c)
                },
                ba: function (e, r) {
                    ct.uniform1f(nt(e), r)
                },
                Ga: function (e, r) {
                    ct.uniform1i(nt(e), r)
                },
                Fa: function (e, r, t) {
                    ct.uniform2f(nt(e), r, t)
                },
                Ea: function (e, r, t, n) {
                    ct.uniform3f(nt(e), r, t, n)
                },
                Da: function (e, r, t, n, o) {
                    ct.uniform4f(nt(e), r, t, n, o)
                },
                Ca: function (e, r, t, n) {
                    if (r <= 18) {
                        var o = ot[16 * r - 1]
                            , a = U;
                        n >>= 2;
                        for (var i = 0; i < 16 * r; i += 16) {
                            var s = n + i;
                            o[i] = a[s >>> 0],
                                o[i + 1] = a[s + 1 >>> 0],
                                o[i + 2] = a[s + 2 >>> 0],
                                o[i + 3] = a[s + 3 >>> 0],
                                o[i + 4] = a[s + 4 >>> 0],
                                o[i + 5] = a[s + 5 >>> 0],
                                o[i + 6] = a[s + 6 >>> 0],
                                o[i + 7] = a[s + 7 >>> 0],
                                o[i + 8] = a[s + 8 >>> 0],
                                o[i + 9] = a[s + 9 >>> 0],
                                o[i + 10] = a[s + 10 >>> 0],
                                o[i + 11] = a[s + 11 >>> 0],
                                o[i + 12] = a[s + 12 >>> 0],
                                o[i + 13] = a[s + 13 >>> 0],
                                o[i + 14] = a[s + 14 >>> 0],
                                o[i + 15] = a[s + 15 >>> 0]
                        }
                    } else
                        o = U.subarray(n >>> 2, n + 64 * r >>> 2);
                    ct.uniformMatrix4fv(nt(e), !!t, o)
                },
                Sa: function (e) {
                    e = Gr.programs[e],
                        ct.useProgram(e),
                        ct.currentProgram = e
                },
                T: function (e, r) {
                    ct.vertexAttribDivisor(e, r)
                },
                U: function (e, r, t, n, o, a) {
                    ct.vertexAttribPointer(e, r, t, !!n, o, a)
                },
                X: function (e, r, t, n) {
                    ct.viewport(e, r, t, n)
                },
                Eb: function (e, r, t) {
                    var n = _t();
                    try {
                        return ye(e)(r, t)
                    } catch (e) {
                        if (kt(n),
                            e !== e + 0)
                            throw e;
                        Et(1, 0)
                    }
                },
                Fb: function (e, r, t, n) {
                    var o = _t();
                    try {
                        return ye(e)(r, t, n)
                    } catch (e) {
                        if (kt(o),
                            e !== e + 0)
                            throw e;
                        Et(1, 0)
                    }
                },
                Db: function (e, r, t, n, o) {
                    var a = _t();
                    try {
                        return ye(e)(r, t, n, o)
                    } catch (e) {
                        if (kt(a),
                            e !== e + 0)
                            throw e;
                        Et(1, 0)
                    }
                },
                Gb: function (e, r, t) {
                    var n = _t();
                    try {
                        ye(e)(r, t)
                    } catch (e) {
                        if (kt(n),
                            e !== e + 0)
                            throw e;
                        Et(1, 0)
                    }
                },
                C: function (e) {
                    k = e
                },
                mb: function (e, r, t, n) {
                    return function (e, r, t, n) {
                        var o = z[n + 40 >>> 2]
                            , a = {
                                tm_sec: z[n >>> 2],
                                tm_min: z[n + 4 >>> 2],
                                tm_hour: z[n + 8 >>> 2],
                                tm_mday: z[n + 12 >>> 2],
                                tm_mon: z[n + 16 >>> 2],
                                tm_year: z[n + 20 >>> 2],
                                tm_wday: z[n + 24 >>> 2],
                                tm_yday: z[n + 28 >>> 2],
                                tm_isdst: z[n + 32 >>> 2],
                                tm_gmtoff: z[n + 36 >>> 2],
                                tm_zone: o ? D(o) : ""
                            }
                            , i = D(t)
                            , s = {
                                "%c": "%a %b %d %H:%M:%S %Y",
                                "%D": "%m/%d/%y",
                                "%F": "%Y-%m-%d",
                                "%h": "%b",
                                "%r": "%I:%M:%S %p",
                                "%R": "%H:%M",
                                "%T": "%H:%M:%S",
                                "%x": "%m/%d/%y",
                                "%X": "%H:%M:%S",
                                "%Ec": "%c",
                                "%EC": "%C",
                                "%Ex": "%m/%d/%y",
                                "%EX": "%H:%M:%S",
                                "%Ey": "%y",
                                "%EY": "%Y",
                                "%Od": "%d",
                                "%Oe": "%e",
                                "%OH": "%H",
                                "%OI": "%I",
                                "%Om": "%m",
                                "%OM": "%M",
                                "%OS": "%S",
                                "%Ou": "%u",
                                "%OU": "%U",
                                "%OV": "%V",
                                "%Ow": "%w",
                                "%OW": "%W",
                                "%Oy": "%y"
                            };
                        for (var u in s)
                            i = i.replace(new RegExp(u, "g"), s[u]);
                        var c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                            , l = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        function f(e, r, t) {
                            for (var n = "number" == typeof e ? e.toString() : e || ""; n.length < r;)
                                n = t[0] + n;
                            return n
                        }
                        function d(e, r) {
                            return f(e, r, "0")
                        }
                        function m(e, r) {
                            function t(e) {
                                return e < 0 ? -1 : e > 0 ? 1 : 0
                            }
                            var n;
                            return 0 === (n = t(e.getFullYear() - r.getFullYear())) && 0 === (n = t(e.getMonth() - r.getMonth())) && (n = t(e.getDate() - r.getDate())),
                                n
                        }
                        function p(e) {
                            switch (e.getDay()) {
                                case 0:
                                    return new Date(e.getFullYear() - 1, 11, 29);
                                case 1:
                                    return e;
                                case 2:
                                    return new Date(e.getFullYear(), 0, 3);
                                case 3:
                                    return new Date(e.getFullYear(), 0, 2);
                                case 4:
                                    return new Date(e.getFullYear(), 0, 1);
                                case 5:
                                    return new Date(e.getFullYear() - 1, 11, 31);
                                case 6:
                                    return new Date(e.getFullYear() - 1, 11, 30)
                            }
                        }
                        function h(e) {
                            var r = function (e, r) {
                                for (var t = new Date(e.getTime()); r > 0;) {
                                    var n = at(t.getFullYear())
                                        , o = t.getMonth()
                                        , a = (n ? it : st)[o];
                                    if (!(r > a - t.getDate()))
                                        return t.setDate(t.getDate() + r),
                                            t;
                                    r -= a - t.getDate() + 1,
                                        t.setDate(1),
                                        o < 11 ? t.setMonth(o + 1) : (t.setMonth(0),
                                            t.setFullYear(t.getFullYear() + 1))
                                }
                                return t
                            }(new Date(e.tm_year + 1900, 0, 1), e.tm_yday)
                                , t = new Date(r.getFullYear(), 0, 4)
                                , n = new Date(r.getFullYear() + 1, 0, 4)
                                , o = p(t)
                                , a = p(n);
                            return m(o, r) <= 0 ? m(a, r) <= 0 ? r.getFullYear() + 1 : r.getFullYear() : r.getFullYear() - 1
                        }
                        var v = {
                            "%a": function (e) {
                                return c[e.tm_wday].substring(0, 3)
                            },
                            "%A": function (e) {
                                return c[e.tm_wday]
                            },
                            "%b": function (e) {
                                return l[e.tm_mon].substring(0, 3)
                            },
                            "%B": function (e) {
                                return l[e.tm_mon]
                            },
                            "%C": function (e) {
                                return d((e.tm_year + 1900) / 100 | 0, 2)
                            },
                            "%d": function (e) {
                                return d(e.tm_mday, 2)
                            },
                            "%e": function (e) {
                                return f(e.tm_mday, 2, " ")
                            },
                            "%g": function (e) {
                                return h(e).toString().substring(2)
                            },
                            "%G": function (e) {
                                return h(e)
                            },
                            "%H": function (e) {
                                return d(e.tm_hour, 2)
                            },
                            "%I": function (e) {
                                var r = e.tm_hour;
                                return 0 == r ? r = 12 : r > 12 && (r -= 12),
                                    d(r, 2)
                            },
                            "%j": function (e) {
                                return d(e.tm_mday + function (e, r) {
                                    for (var t = 0, n = 0; n <= r; t += e[n++])
                                        ;
                                    return t
                                }(at(e.tm_year + 1900) ? it : st, e.tm_mon - 1), 3)
                            },
                            "%m": function (e) {
                                return d(e.tm_mon + 1, 2)
                            },
                            "%M": function (e) {
                                return d(e.tm_min, 2)
                            },
                            "%n": function () {
                                return "\n"
                            },
                            "%p": function (e) {
                                return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM"
                            },
                            "%S": function (e) {
                                return d(e.tm_sec, 2)
                            },
                            "%t": function () {
                                return "\t"
                            },
                            "%u": function (e) {
                                return e.tm_wday || 7
                            },
                            "%U": function (e) {
                                var r = e.tm_yday + 7 - e.tm_wday;
                                return d(Math.floor(r / 7), 2)
                            },
                            "%V": function (e) {
                                var r = Math.floor((e.tm_yday + 7 - (e.tm_wday + 6) % 7) / 7);
                                if ((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && r++,
                                    r) {
                                    if (53 == r) {
                                        var t = (e.tm_wday + 371 - e.tm_yday) % 7;
                                        4 == t || 3 == t && at(e.tm_year) || (r = 1)
                                    }
                                } else {
                                    r = 52;
                                    var n = (e.tm_wday + 7 - e.tm_yday - 1) % 7;
                                    (4 == n || 5 == n && at(e.tm_year % 400 - 1)) && r++
                                }
                                return d(r, 2)
                            },
                            "%w": function (e) {
                                return e.tm_wday
                            },
                            "%W": function (e) {
                                var r = e.tm_yday + 7 - (e.tm_wday + 6) % 7;
                                return d(Math.floor(r / 7), 2)
                            },
                            "%y": function (e) {
                                return (e.tm_year + 1900).toString().substring(2)
                            },
                            "%Y": function (e) {
                                return e.tm_year + 1900
                            },
                            "%z": function (e) {
                                var r = e.tm_gmtoff
                                    , t = r >= 0;
                                return r = (r = Math.abs(r) / 60) / 60 * 100 + r % 60,
                                    (t ? "+" : "-") + String("0000" + r).slice(-4)
                            },
                            "%Z": function (e) {
                                return e.tm_zone
                            },
                            "%%": function () {
                                return "%"
                            }
                        };
                        for (var u in i = i.replace(/%%/g, "\0\0"),
                            v)
                            i.includes(u) && (i = i.replace(new RegExp(u, "g"), v[u](a)));
                        var g = pt(i = i.replace(/\0\0/g, "%"), !1);
                        return g.length > r ? 0 : (function (e, r) {
                            j.set(e, r >>> 0)
                        }(g, e),
                            g.length - 1)
                    }(e, r, t, n)
                }
            }, gt = (function () {
                var e = {
                    a: vt
                };
                function r(e, r) {
                    var t, n = e.exports;
                    o.asm = n,
                        J((C = o.asm.Lb).buffer),
                        Z = o.asm.Nb,
                        t = o.asm.Mb,
                        ee.unshift(t),
                        se()
                }
                function t(e) {
                    r(e.instance)
                }
                function a(r) {
                    return function () {
                        if (!_ && (h || v)) {
                            if ("function" == typeof fetch && !pe(ce))
                                return fetch(ce, {
                                    credentials: "same-origin"
                                }).then((function (e) {
                                    if (!e.ok)
                                        throw "failed to load wasm binary file at '" + ce + "'";
                                    return e.arrayBuffer()
                                }
                                )).catch((function () {
                                    return he(ce)
                                }
                                ));
                            if (i)
                                return new Promise((function (e, r) {
                                    i(ce, (function (r) {
                                        e(new Uint8Array(r))
                                    }
                                    ), r)
                                }
                                ))
                        }
                        return Promise.resolve().then((function () {
                            return he(ce)
                        }
                        ))
                    }().then((function (r) {
                        return WebAssembly.instantiate(r, e)
                    }
                    )).then((function (e) {
                        return e
                    }
                    )).then(r, (function (e) {
                        b("failed to asynchronously prepare wasm: " + e),
                            ue(e)
                    }
                    ))
                }
                if (ie(),
                    o.instantiateWasm)
                    try {
                        return o.instantiateWasm(e, r)
                    } catch (e) {
                        return b("Module.instantiateWasm callback failed with error: " + e),
                            !1
                    }
                (_ || "function" != typeof WebAssembly.instantiateStreaming || me(ce) || pe(ce) || "function" != typeof fetch ? a(t) : fetch(ce, {
                    credentials: "same-origin"
                }).then((function (r) {
                    return WebAssembly.instantiateStreaming(r, e).then(t, (function (e) {
                        return b("wasm streaming compile failed: " + e),
                            b("falling back to ArrayBuffer instantiation"),
                            a(t)
                    }
                    ))
                }
                ))).catch(n)
            }(),
                o.___wasm_call_ctors = function () {
                    return (o.___wasm_call_ctors = o.asm.Mb).apply(null, arguments)
                }
                ,
                o.___errno_location = function () {
                    return (gt = o.___errno_location = o.asm.Ob).apply(null, arguments)
                }
            ), yt = o._malloc = function () {
                return (yt = o._malloc = o.asm.Pb).apply(null, arguments)
            }
                , wt = o._free = function () {
                    return (wt = o._free = o.asm.Qb).apply(null, arguments)
                }
                , bt = o.___getTypeName = function () {
                    return (bt = o.___getTypeName = o.asm.Rb).apply(null, arguments)
                }
                , Et = (o.___embind_register_native_and_builtin_types = function () {
                    return (o.___embind_register_native_and_builtin_types = o.asm.Sb).apply(null, arguments)
                }
                    ,
                    o._setThrew = function () {
                        return (Et = o._setThrew = o.asm.Tb).apply(null, arguments)
                    }
                ), _t = o.stackSave = function () {
                    return (_t = o.stackSave = o.asm.Ub).apply(null, arguments)
                }
                , kt = o.stackRestore = function () {
                    return (kt = o.stackRestore = o.asm.Vb).apply(null, arguments)
                }
                , Ct = o.___cxa_is_pointer_type = function () {
                    return (Ct = o.___cxa_is_pointer_type = o.asm.Wb).apply(null, arguments)
                }
                ;
            function xt(e) {
                this.name = "ExitStatus",
                    this.message = "Program terminated with exit(" + e + ")",
                    this.status = e
            }
            function Pt(e) {
                function r() {
                    ht || (ht = !0,
                        o.calledRun = !0,
                        F || (o.noFSInit || Ce.init.initialized || Ce.init(),
                            Ce.ignorePermissions = !1,
                            _e.init(),
                            ve(ee),
                            t(o),
                            o.onRuntimeInitialized && o.onRuntimeInitialized(),
                            function () {
                                if (o.postRun)
                                    for ("function" == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length;)
                                        e = o.postRun.shift(),
                                            re.unshift(e);
                                var e;
                                ve(re)
                            }()))
                }
                e = e || d,
                    ne > 0 || (function () {
                        if (o.preRun)
                            for ("function" == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length;)
                                e = o.preRun.shift(),
                                    Q.unshift(e);
                        var e;
                        ve(Q)
                    }(),
                        ne > 0 || (o.setStatus ? (o.setStatus("Running..."),
                            setTimeout((function () {
                                setTimeout((function () {
                                    o.setStatus("")
                                }
                                ), 1),
                                    r()
                            }
                            ), 1)) : r()))
            }
            if (o.dynCall_viijii = function () {
                return (o.dynCall_viijii = o.asm.Xb).apply(null, arguments)
            }
                ,
                o.dynCall_jiji = function () {
                    return (o.dynCall_jiji = o.asm.Yb).apply(null, arguments)
                }
                ,
                o.dynCall_iiiiij = function () {
                    return (o.dynCall_iiiiij = o.asm.Zb).apply(null, arguments)
                }
                ,
                o.dynCall_iiiiijj = function () {
                    return (o.dynCall_iiiiijj = o.asm._b).apply(null, arguments)
                }
                ,
                o.dynCall_iiiiiijj = function () {
                    return (o.dynCall_iiiiiijj = o.asm.$b).apply(null, arguments)
                }
                ,
                o.___emscripten_embedded_file_data = 2070776,
                o.addRunDependency = ie,
                o.removeRunDependency = se,
                o.FS_createPath = Ce.createPath,
                o.FS_createDataFile = Ce.createDataFile,
                o.FS_createPreloadedFile = Ce.createPreloadedFile,
                o.FS_createLazyFile = Ce.createLazyFile,
                o.FS_createDevice = Ce.createDevice,
                o.FS_unlink = Ce.unlink,
                ae = function e() {
                    ht || Pt(),
                        ht || (ae = e)
                }
                ,
                o.run = Pt,
                o.preInit)
                for ("function" == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0;)
                    o.preInit.pop()();
            return Pt(),
                r.ready
        }
}
)();
"object" == typeof exports && "object" == typeof module ? module.exports = GraphiteModule : "function" == typeof define && define.amd ? define([], (function () {
    return GraphiteModule
}
)) : "object" == typeof exports && (exports.GraphiteModule = GraphiteModule);
